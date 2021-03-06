port module Analyser.Fixer exposing (Model, Msg, init, initWithMessage, isDone, message, subscriptions, succeeded, update)

import Analyser.CodeBase as CodeBase exposing (CodeBase)
import Analyser.Fixes.Base exposing (Fixer)
import Analyser.Fixes.MultiLineRecordFormatting as MultiLineRecordFormatting
import Analyser.Fixes.UnformattedFile as UnformattedFileFixer
import Analyser.Fixes.UnnecessaryParens as UnnecessaryParensFixer
import Analyser.Fixes.UnusedImportAlias as UnusedImportAliasFixer
import Analyser.Fixes.UnusedImportedVariable as UnusedImportedVariableFixer
import Analyser.Fixes.UnusedPatternVariable as UnusedPatternVariableFixer
import Analyser.Fixes.UnusedTypeAlias as UnusedTypeAliasFixer
import Analyser.Messages.Types exposing (Message)
import Analyser.Messages.Util as Messages
import Analyser.State as State exposing (State)
import Elm.Parser as Parser
import Elm.Processing as Processing
import Tuple3


port storeFiles : List ( String, String ) -> Cmd msg


port onStoredFiles : (Bool -> msg) -> Sub msg


port loadFileContentWithShas : List String -> Cmd msg


port onFileContentWithShas : (List FileTriple -> msg) -> Sub msg


port sendFixResult : FixResult -> Cmd msg


type alias FileTriple =
    ( String, String, String )


type alias FixResult =
    { success : Bool
    , message : String
    }


type Msg
    = LoadedFileContent (List FileTriple)
    | Stored Bool


type Model
    = Model
        { message : Message
        , fixer : Fixer
        , done : Bool
        , success : Bool
        }


init : Int -> State -> Maybe ( Model, Cmd Msg, State )
init x state =
    State.getMessage x state |> Maybe.andThen (flip initWithMessage state)


initWithMessage : Message -> State -> Maybe ( Model, Cmd Msg, State )
initWithMessage message state =
    getFixer message
        |> Maybe.map
            (\fixer ->
                ( Model { message = message, fixer = fixer, done = False, success = True }
                , loadFileContentWithShas (List.map Tuple.second message.files)
                , State.startFixing message state
                )
            )


isDone : Model -> Bool
isDone (Model m) =
    m.done


succeeded : Model -> Bool
succeeded (Model m) =
    m.success


message : Model -> Message
message (Model m) =
    m.message


update : CodeBase -> Msg -> Model -> ( Model, Cmd Msg )
update codeBase msg (Model model) =
    case msg of
        LoadedFileContent reference ->
            if not (fileHashesEqual reference model.message) then
                ( Model { model | done = True, success = False }
                , sendFixResult
                    { success = False
                    , message = "Sha1 mismatch. Message is outdated for the corresponding file. Maybe refresh the messages."
                    }
                )
            else
                let
                    fixData =
                        reference
                            |> List.filterMap
                                (\( _, path, content ) ->
                                    Parser.parse content
                                        |> Result.map (Processing.process (CodeBase.processContext codeBase))
                                        |> Result.map ((,,) path content)
                                        |> Result.toMaybe
                                )

                    changedFiles =
                        model.fixer.fix fixData model.message.data
                in
                case changedFiles of
                    Ok patched ->
                        ( Model model
                        , storeFiles patched
                        )

                    Err e ->
                        ( Model { model | done = True, success = False }
                        , sendFixResult
                            { success = False
                            , message = e
                            }
                        )

        Stored _ ->
            ( Model { model | done = True }
            , sendFixResult
                { success = True
                , message = "Fixed message: " ++ Messages.asString model.message.data
                }
            )


fileHashesEqual : List FileTriple -> Message -> Bool
fileHashesEqual reference message =
    List.sortBy Tuple.first (List.map Tuple3.init reference) == List.sortBy Tuple.first message.files


getFixer : Message -> Maybe Fixer
getFixer m =
    List.filter (\x -> x.canFix m.data) fixers
        |> List.head


fixers : List Fixer
fixers =
    [ UnnecessaryParensFixer.fixer
    , UnusedImportedVariableFixer.fixer
    , UnusedImportAliasFixer.fixer
    , UnusedPatternVariableFixer.fixer
    , UnformattedFileFixer.fixer
    , UnusedTypeAliasFixer.fixer
    , MultiLineRecordFormatting.fixer
    ]


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ onFileContentWithShas LoadedFileContent
        , onStoredFiles Stored
        ]
