
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _avh4$elm_fifo$Fifo$toList = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1._0,
		_elm_lang$core$List$reverse(_p1._1));
};
var _avh4$elm_fifo$Fifo$Fifo = F2(
	function (a, b) {
		return {ctor: 'Fifo', _0: a, _1: b};
	});
var _avh4$elm_fifo$Fifo$empty = A2(
	_avh4$elm_fifo$Fifo$Fifo,
	{ctor: '[]'},
	{ctor: '[]'});
var _avh4$elm_fifo$Fifo$insert = F2(
	function (a, _p2) {
		var _p3 = _p2;
		return A2(
			_avh4$elm_fifo$Fifo$Fifo,
			_p3._0,
			{ctor: '::', _0: a, _1: _p3._1});
	});
var _avh4$elm_fifo$Fifo$remove = function (fifo) {
	remove:
	while (true) {
		var _p4 = fifo;
		if (_p4._0.ctor === '[]') {
			if (_p4._1.ctor === '[]') {
				return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _avh4$elm_fifo$Fifo$empty};
			} else {
				var _v3 = A2(
					_avh4$elm_fifo$Fifo$Fifo,
					_elm_lang$core$List$reverse(_p4._1),
					{ctor: '[]'});
				fifo = _v3;
				continue remove;
			}
		} else {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Just(_p4._0._0),
				_1: A2(_avh4$elm_fifo$Fifo$Fifo, _p4._0._1, _p4._1)
			};
		}
	}
};
var _avh4$elm_fifo$Fifo$fromList = function (list) {
	return A2(
		_avh4$elm_fifo$Fifo$Fifo,
		list,
		{ctor: '[]'});
};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _danielnarey$elm_css_frameworks$CssFrameworks$toStyleNode = function (css) {
	return A3(
		_elm_lang$html$Html$node,
		'style',
		{ctor: '[]'},
		_elm_lang$core$List$singleton(
			_elm_lang$html$Html$text(css)));
};

var _danielnarey$elm_css_frameworks$CssFrameworks_Bootstrap$bootstrap = '/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: \'Glyphicons Halflings\';\n\n  src: url(\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot\');\n  src: url(\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot?#iefix\') format(\'embedded-opentype\'), url(\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2\') format(\'woff2\'), url(\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff\') format(\'woff\'), url(\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.ttf\') format(\'truetype\'), url(\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular\') format(\'svg\');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: \'Glyphicons Halflings\';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\002a\";\n}\n.glyphicon-plus:before {\n  content: \"\\002b\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n.glyphicon-cd:before {\n  content: \"\\e201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n.glyphicon-copy:before {\n  content: \"\\e205\";\n}\n.glyphicon-paste:before {\n  content: \"\\e206\";\n}\n.glyphicon-alert:before {\n  content: \"\\e209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n.glyphicon-king:before {\n  content: \"\\e211\";\n}\n.glyphicon-queen:before {\n  content: \"\\e212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n.glyphicon-knight:before {\n  content: \"\\e215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n.glyphicon-bed:before {\n  content: \"\\e219\";\n}\n.glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n.glyphicon-erase:before {\n  content: \"\\e221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n.glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n.glyphicon-btc:before {\n  content: \"\\e227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n.glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n.glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n.glyphicon-scale:before {\n  content: \"\\e230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n.glyphicon-education:before {\n  content: \"\\e233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n.glyphicon-oil:before {\n  content: \"\\e238\";\n}\n.glyphicon-grain:before {\n  content: \"\\e239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n.glyphicon-console:before {\n  content: \"\\e254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: \'\\2014 \\00A0\';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: \'\';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: \'\\00A0 \\2014\';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\00a0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  background-color: rgba(0, 0, 0, 0);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#80000000\', endColorstr=\'#00000000\', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#00000000\', endColorstr=\'#80000000\', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: \'\\2039\';\n}\n.carousel-control .icon-next:before {\n  content: \'\\203a\';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \t;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n';

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$graph$Graph_Tree$pushMany = F2(
	function (vals, queue) {
		return A3(_elm_lang$core$List$foldl, _avh4$elm_fifo$Fifo$insert, queue, vals);
	});
var _elm_community$graph$Graph_Tree$listForTraversal = F2(
	function (traversal, tree) {
		var acc = _elm_lang$core$Basics$identity;
		var f = F3(
			function (label, children, rest) {
				return function (_p0) {
					return rest(
						A2(
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								}),
							label,
							_p0));
				};
			});
		return A4(
			traversal,
			f,
			acc,
			tree,
			{ctor: '[]'});
	});
var _elm_community$graph$Graph_Tree$size = function (tree) {
	var _p1 = tree;
	return _p1._0;
};
var _elm_community$graph$Graph_Tree$root = function (tree) {
	var _p2 = tree;
	return _p2._1;
};
var _elm_community$graph$Graph_Tree$height = function (tree) {
	var go = F2(
		function (h, t) {
			var _p3 = _elm_community$graph$Graph_Tree$root(t);
			if (_p3.ctor === 'Just') {
				return A3(
					_elm_lang$core$List$foldl,
					function (_p4) {
						return _elm_lang$core$Basics$max(
							A2(go, h + 1, _p4));
					},
					h + 1,
					_p3._0._1);
			} else {
				return h;
			}
		});
	return A2(go, 0, tree);
};
var _elm_community$graph$Graph_Tree$levelOrder = F3(
	function (visit, acc, tree) {
		var go = F2(
			function (acc, toVisit) {
				go:
				while (true) {
					var _p5 = _avh4$elm_fifo$Fifo$remove(toVisit);
					if (_p5._0.ctor === 'Nothing') {
						return acc;
					} else {
						var _p8 = _p5._1;
						var _p6 = _elm_community$graph$Graph_Tree$root(_p5._0._0);
						if (_p6.ctor === 'Nothing') {
							var _v5 = acc,
								_v6 = _p8;
							acc = _v5;
							toVisit = _v6;
							continue go;
						} else {
							var _p7 = _p6._0._1;
							var _v7 = A3(visit, _p6._0._0, _p7, acc),
								_v8 = A2(_elm_community$graph$Graph_Tree$pushMany, _p7, _p8);
							acc = _v7;
							toVisit = _v8;
							continue go;
						}
					}
				}
			});
		return A2(
			go,
			acc,
			A2(_avh4$elm_fifo$Fifo$insert, tree, _avh4$elm_fifo$Fifo$empty));
	});
var _elm_community$graph$Graph_Tree$levelOrderList = _elm_community$graph$Graph_Tree$listForTraversal(_elm_community$graph$Graph_Tree$levelOrder);
var _elm_community$graph$Graph_Tree$postOrder = F3(
	function (visit, acc, tree) {
		var folder = _elm_lang$core$Basics$flip(
			_elm_community$graph$Graph_Tree$postOrder(visit));
		var _p9 = _elm_community$graph$Graph_Tree$root(tree);
		if (_p9.ctor === 'Nothing') {
			return acc;
		} else {
			var _p10 = _p9._0._1;
			return A3(
				visit,
				_p9._0._0,
				_p10,
				A3(_elm_lang$core$List$foldl, folder, acc, _p10));
		}
	});
var _elm_community$graph$Graph_Tree$postOrderList = _elm_community$graph$Graph_Tree$listForTraversal(_elm_community$graph$Graph_Tree$postOrder);
var _elm_community$graph$Graph_Tree$preOrder = F3(
	function (visit, acc, tree) {
		var folder = _elm_lang$core$Basics$flip(
			_elm_community$graph$Graph_Tree$preOrder(visit));
		var _p11 = _elm_community$graph$Graph_Tree$root(tree);
		if (_p11.ctor === 'Nothing') {
			return acc;
		} else {
			var _p12 = _p11._0._1;
			return A3(
				_elm_lang$core$List$foldl,
				folder,
				A3(visit, _p11._0._0, _p12, acc),
				_p12);
		}
	});
var _elm_community$graph$Graph_Tree$preOrderList = _elm_community$graph$Graph_Tree$listForTraversal(_elm_community$graph$Graph_Tree$preOrder);
var _elm_community$graph$Graph_Tree$MkTree = F2(
	function (a, b) {
		return {ctor: 'MkTree', _0: a, _1: b};
	});
var _elm_community$graph$Graph_Tree$empty = A2(_elm_community$graph$Graph_Tree$MkTree, 0, _elm_lang$core$Maybe$Nothing);
var _elm_community$graph$Graph_Tree$isEmpty = function (tree) {
	return _elm_lang$core$Native_Utils.eq(tree, _elm_community$graph$Graph_Tree$empty);
};
var _elm_community$graph$Graph_Tree$inner = F2(
	function (label, children) {
		var nonEmptyChildren = A2(
			_elm_lang$core$List$filter,
			function (_p13) {
				return !_elm_community$graph$Graph_Tree$isEmpty(_p13);
			},
			children);
		var totalSize = A3(
			_elm_lang$core$List$foldl,
			function (_p14) {
				return F2(
					function (x, y) {
						return x + y;
					})(
					_elm_community$graph$Graph_Tree$size(_p14));
			},
			1,
			nonEmptyChildren);
		return A2(
			_elm_community$graph$Graph_Tree$MkTree,
			totalSize,
			_elm_lang$core$Maybe$Just(
				{ctor: '_Tuple2', _0: label, _1: nonEmptyChildren}));
	});
var _elm_community$graph$Graph_Tree$leaf = function (val) {
	return A2(
		_elm_community$graph$Graph_Tree$inner,
		val,
		{ctor: '[]'});
};
var _elm_community$graph$Graph_Tree$unfoldTree = F2(
	function (next, seed) {
		var _p15 = next(seed);
		var label = _p15._0;
		var seeds = _p15._1;
		return A2(
			_elm_community$graph$Graph_Tree$inner,
			label,
			A2(
				_elm_lang$core$List$map,
				_elm_community$graph$Graph_Tree$unfoldTree(next),
				seeds));
	});
var _elm_community$graph$Graph_Tree$unfoldForest = F2(
	function (next, seeds) {
		return A2(
			_elm_lang$core$List$map,
			_elm_community$graph$Graph_Tree$unfoldTree(next),
			seeds);
	});

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

var _elm_community$intdict$IntDict$combineBits = F3(
	function (a, b, mask) {
		return (a & (~mask)) | (b & mask);
	});
var _elm_community$intdict$IntDict$foldr = F3(
	function (f, acc, dict) {
		foldr:
		while (true) {
			var _p0 = dict;
			switch (_p0.ctor) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var _p1 = _p0._0;
					return A3(f, _p1.key, _p1.value, acc);
				default:
					var _p2 = _p0._0;
					var _v1 = f,
						_v2 = A3(_elm_community$intdict$IntDict$foldr, f, acc, _p2.right),
						_v3 = _p2.left;
					f = _v1;
					acc = _v2;
					dict = _v3;
					continue foldr;
			}
		}
	});
var _elm_community$intdict$IntDict$keys = function (dict) {
	return A3(
		_elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_community$intdict$IntDict$values = function (dict) {
	return A3(
		_elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_community$intdict$IntDict$toList = function (dict) {
	return A3(
		_elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_community$intdict$IntDict$toString = function (dict) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'IntDict.fromList ',
		_elm_lang$core$Basics$toString(
			_elm_community$intdict$IntDict$toList(dict)));
};
var _elm_community$intdict$IntDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p3 = dict;
			switch (_p3.ctor) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var _p4 = _p3._0;
					return A3(f, _p4.key, _p4.value, acc);
				default:
					var _p5 = _p3._0;
					var _v5 = f,
						_v6 = A3(_elm_community$intdict$IntDict$foldl, f, acc, _p5.left),
						_v7 = _p5.right;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
			}
		}
	});
var _elm_community$intdict$IntDict$findMax = function (dict) {
	findMax:
	while (true) {
		var _p6 = dict;
		switch (_p6.ctor) {
			case 'Empty':
				return _elm_lang$core$Maybe$Nothing;
			case 'Leaf':
				var _p7 = _p6._0;
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p7.key, _1: _p7.value});
			default:
				var _v9 = _p6._0.right;
				dict = _v9;
				continue findMax;
		}
	}
};
var _elm_community$intdict$IntDict$findMin = function (dict) {
	findMin:
	while (true) {
		var _p8 = dict;
		switch (_p8.ctor) {
			case 'Empty':
				return _elm_lang$core$Maybe$Nothing;
			case 'Leaf':
				var _p9 = _p8._0;
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p9.key, _1: _p9.value});
			default:
				var _v11 = _p8._0.left;
				dict = _v11;
				continue findMin;
		}
	}
};
var _elm_community$intdict$IntDict$size = function (dict) {
	var _p10 = dict;
	switch (_p10.ctor) {
		case 'Empty':
			return 0;
		case 'Leaf':
			return 1;
		default:
			return _p10._0.size;
	}
};
var _elm_community$intdict$IntDict$isEmpty = function (dict) {
	var _p11 = dict;
	if (_p11.ctor === 'Empty') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$intdict$IntDict$highestBitSet = function (n) {
	var shiftOr = F2(
		function (i, shift) {
			return i | (i >>> shift);
		});
	var n1 = A2(shiftOr, n, 1);
	var n2 = A2(shiftOr, n1, 2);
	var n3 = A2(shiftOr, n2, 4);
	var n4 = A2(shiftOr, n3, 8);
	var n5 = A2(shiftOr, n4, 16);
	return n5 & (~(n5 >>> 1));
};
var _elm_community$intdict$IntDict$signBit = _elm_community$intdict$IntDict$highestBitSet(-1);
var _elm_community$intdict$IntDict$mostSignificantBranchingBit = F2(
	function (a, b) {
		return (_elm_lang$core$Native_Utils.eq(a, _elm_community$intdict$IntDict$signBit) || _elm_lang$core$Native_Utils.eq(b, _elm_community$intdict$IntDict$signBit)) ? _elm_community$intdict$IntDict$signBit : A2(_elm_lang$core$Basics$max, a, b);
	});
var _elm_community$intdict$IntDict$isBranchingBitSet = function (p) {
	return function (_p12) {
		return A2(
			F2(
				function (x, y) {
					return !_elm_lang$core$Native_Utils.eq(x, y);
				}),
			0,
			p.branchingBit & (_elm_community$intdict$IntDict$signBit ^ _p12));
	};
};
var _elm_community$intdict$IntDict$higherBitMask = function (branchingBit) {
	return branchingBit ^ (~(branchingBit - 1));
};
var _elm_community$intdict$IntDict$prefixMatches = F2(
	function (p, n) {
		return _elm_lang$core$Native_Utils.eq(
			n & _elm_community$intdict$IntDict$higherBitMask(p.branchingBit),
			p.prefixBits);
	});
var _elm_community$intdict$IntDict$get = F2(
	function (key, dict) {
		get:
		while (true) {
			var _p13 = dict;
			switch (_p13.ctor) {
				case 'Empty':
					return _elm_lang$core$Maybe$Nothing;
				case 'Leaf':
					var _p14 = _p13._0;
					return _elm_lang$core$Native_Utils.eq(_p14.key, key) ? _elm_lang$core$Maybe$Just(_p14.value) : _elm_lang$core$Maybe$Nothing;
				default:
					var _p15 = _p13._0;
					if (!A2(_elm_community$intdict$IntDict$prefixMatches, _p15.prefix, key)) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						if (A2(_elm_community$intdict$IntDict$isBranchingBitSet, _p15.prefix, key)) {
							var _v15 = key,
								_v16 = _p15.right;
							key = _v15;
							dict = _v16;
							continue get;
						} else {
							var _v17 = key,
								_v18 = _p15.left;
							key = _v17;
							dict = _v18;
							continue get;
						}
					}
			}
		}
	});
var _elm_community$intdict$IntDict$member = F2(
	function (key, dict) {
		var _p16 = A2(_elm_community$intdict$IntDict$get, key, dict);
		if (_p16.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_community$intdict$IntDict$lcp = F2(
	function (x, y) {
		var diff = x ^ y;
		var branchingBit = _elm_community$intdict$IntDict$highestBitSet(diff);
		var mask = _elm_community$intdict$IntDict$higherBitMask(branchingBit);
		var prefixBits = x & mask;
		return {prefixBits: prefixBits, branchingBit: branchingBit};
	});
var _elm_community$intdict$IntDict$isValidKey = function (k) {
	return _elm_lang$core$Native_Utils.eq(k | 0, k);
};
var _elm_community$intdict$IntDict$KeyPrefix = F2(
	function (a, b) {
		return {prefixBits: a, branchingBit: b};
	});
var _elm_community$intdict$IntDict$InnerType = F4(
	function (a, b, c, d) {
		return {prefix: a, left: b, right: c, size: d};
	});
var _elm_community$intdict$IntDict$Inner = function (a) {
	return {ctor: 'Inner', _0: a};
};
var _elm_community$intdict$IntDict$inner = F3(
	function (p, l, r) {
		var _p17 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p17._0.ctor === 'Empty') {
			return r;
		} else {
			if (_p17._1.ctor === 'Empty') {
				return l;
			} else {
				return _elm_community$intdict$IntDict$Inner(
					{
						prefix: p,
						left: l,
						right: r,
						size: _elm_community$intdict$IntDict$size(l) + _elm_community$intdict$IntDict$size(r)
					});
			}
		}
	});
var _elm_community$intdict$IntDict$Leaf = function (a) {
	return {ctor: 'Leaf', _0: a};
};
var _elm_community$intdict$IntDict$leaf = F2(
	function (k, v) {
		return _elm_community$intdict$IntDict$Leaf(
			{key: k, value: v});
	});
var _elm_community$intdict$IntDict$singleton = F2(
	function (key, value) {
		return A2(_elm_community$intdict$IntDict$leaf, key, value);
	});
var _elm_community$intdict$IntDict$Empty = {ctor: 'Empty'};
var _elm_community$intdict$IntDict$empty = _elm_community$intdict$IntDict$Empty;
var _elm_community$intdict$IntDict$update = F3(
	function (key, alter, dict) {
		var join = F2(
			function (_p19, _p18) {
				var _p20 = _p19;
				var _p24 = _p20._1;
				var _p21 = _p18;
				var _p23 = _p21._1;
				var _p22 = _p21._0;
				var prefix = A2(_elm_community$intdict$IntDict$lcp, _p20._0, _p22);
				return A2(_elm_community$intdict$IntDict$isBranchingBitSet, prefix, _p22) ? A3(_elm_community$intdict$IntDict$inner, prefix, _p24, _p23) : A3(_elm_community$intdict$IntDict$inner, prefix, _p23, _p24);
			});
		var alteredNode = function (mv) {
			var _p25 = alter(mv);
			if (_p25.ctor === 'Just') {
				return A2(_elm_community$intdict$IntDict$leaf, key, _p25._0);
			} else {
				return _elm_community$intdict$IntDict$empty;
			}
		};
		var _p26 = dict;
		switch (_p26.ctor) {
			case 'Empty':
				return alteredNode(_elm_lang$core$Maybe$Nothing);
			case 'Leaf':
				var _p27 = _p26._0;
				return _elm_lang$core$Native_Utils.eq(_p27.key, key) ? alteredNode(
					_elm_lang$core$Maybe$Just(_p27.value)) : A2(
					join,
					{
						ctor: '_Tuple2',
						_0: key,
						_1: alteredNode(_elm_lang$core$Maybe$Nothing)
					},
					{ctor: '_Tuple2', _0: _p27.key, _1: dict});
			default:
				var _p28 = _p26._0;
				return A2(_elm_community$intdict$IntDict$prefixMatches, _p28.prefix, key) ? (A2(_elm_community$intdict$IntDict$isBranchingBitSet, _p28.prefix, key) ? A3(
					_elm_community$intdict$IntDict$inner,
					_p28.prefix,
					_p28.left,
					A3(_elm_community$intdict$IntDict$update, key, alter, _p28.right)) : A3(
					_elm_community$intdict$IntDict$inner,
					_p28.prefix,
					A3(_elm_community$intdict$IntDict$update, key, alter, _p28.left),
					_p28.right)) : A2(
					join,
					{
						ctor: '_Tuple2',
						_0: key,
						_1: alteredNode(_elm_lang$core$Maybe$Nothing)
					},
					{ctor: '_Tuple2', _0: _p28.prefix.prefixBits, _1: dict});
		}
	});
var _elm_community$intdict$IntDict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_community$intdict$IntDict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_community$intdict$IntDict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_community$intdict$IntDict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_community$intdict$IntDict$filter = F2(
	function (predicate, dict) {
		var add = F3(
			function (k, v, d) {
				return A2(predicate, k, v) ? A3(_elm_community$intdict$IntDict$insert, k, v, d) : d;
			});
		return A3(_elm_community$intdict$IntDict$foldl, add, _elm_community$intdict$IntDict$empty, dict);
	});
var _elm_community$intdict$IntDict$map = F2(
	function (f, dict) {
		var _p29 = dict;
		switch (_p29.ctor) {
			case 'Empty':
				return _elm_community$intdict$IntDict$empty;
			case 'Leaf':
				var _p30 = _p29._0;
				return A2(
					_elm_community$intdict$IntDict$leaf,
					_p30.key,
					A2(f, _p30.key, _p30.value));
			default:
				var _p31 = _p29._0;
				return A3(
					_elm_community$intdict$IntDict$inner,
					_p31.prefix,
					A2(_elm_community$intdict$IntDict$map, f, _p31.left),
					A2(_elm_community$intdict$IntDict$map, f, _p31.right));
		}
	});
var _elm_community$intdict$IntDict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p32) {
				var _p33 = _p32;
				var _p35 = _p33._1;
				var _p34 = _p33._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_community$intdict$IntDict$insert, key, value, _p34),
					_1: _p35
				} : {
					ctor: '_Tuple2',
					_0: _p34,
					_1: A3(_elm_community$intdict$IntDict$insert, key, value, _p35)
				};
			});
		return A3(
			_elm_community$intdict$IntDict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_community$intdict$IntDict$empty, _1: _elm_community$intdict$IntDict$empty},
			dict);
	});
var _elm_community$intdict$IntDict$fromList = function (pairs) {
	return A3(
		_elm_lang$core$List$foldl,
		_elm_lang$core$Basics$uncurry(_elm_community$intdict$IntDict$insert),
		_elm_community$intdict$IntDict$empty,
		pairs);
};
var _elm_community$intdict$IntDict$before = F2(
	function (key, dict) {
		var go = F2(
			function (def, dict) {
				go:
				while (true) {
					var _p36 = dict;
					switch (_p36.ctor) {
						case 'Empty':
							return _elm_community$intdict$IntDict$findMax(def);
						case 'Leaf':
							var _p37 = _p36._0;
							return (_elm_lang$core$Native_Utils.cmp(_p37.key, key) > -1) ? _elm_community$intdict$IntDict$findMax(def) : _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: _p37.key, _1: _p37.value});
						default:
							var _p38 = _p36._0;
							if (!A2(_elm_community$intdict$IntDict$prefixMatches, _p38.prefix, key)) {
								return (_elm_lang$core$Native_Utils.cmp(_p38.prefix.prefixBits, key) > 0) ? _elm_community$intdict$IntDict$findMax(def) : _elm_community$intdict$IntDict$findMax(_p38.right);
							} else {
								if (A2(_elm_community$intdict$IntDict$isBranchingBitSet, _p38.prefix, key)) {
									var _v28 = _p38.left,
										_v29 = _p38.right;
									def = _v28;
									dict = _v29;
									continue go;
								} else {
									var _v30 = def,
										_v31 = _p38.left;
									def = _v30;
									dict = _v31;
									continue go;
								}
							}
					}
				}
			});
		return A2(go, _elm_community$intdict$IntDict$Empty, dict);
	});
var _elm_community$intdict$IntDict$after = F2(
	function (key, dict) {
		var go = F2(
			function (def, dict) {
				go:
				while (true) {
					var _p39 = dict;
					switch (_p39.ctor) {
						case 'Empty':
							return _elm_community$intdict$IntDict$findMin(def);
						case 'Leaf':
							var _p40 = _p39._0;
							return (_elm_lang$core$Native_Utils.cmp(_p40.key, key) < 1) ? _elm_community$intdict$IntDict$findMin(def) : _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: _p40.key, _1: _p40.value});
						default:
							var _p41 = _p39._0;
							if (!A2(_elm_community$intdict$IntDict$prefixMatches, _p41.prefix, key)) {
								return (_elm_lang$core$Native_Utils.cmp(_p41.prefix.prefixBits, key) < 0) ? _elm_community$intdict$IntDict$findMin(def) : _elm_community$intdict$IntDict$findMin(_p41.left);
							} else {
								if (A2(_elm_community$intdict$IntDict$isBranchingBitSet, _p41.prefix, key)) {
									var _v33 = def,
										_v34 = _p41.right;
									def = _v33;
									dict = _v34;
									continue go;
								} else {
									var _v35 = _p41.right,
										_v36 = _p41.left;
									def = _v35;
									dict = _v36;
									continue go;
								}
							}
					}
				}
			});
		return A2(go, _elm_community$intdict$IntDict$Empty, dict);
	});
var _elm_community$intdict$IntDict$Right = {ctor: 'Right'};
var _elm_community$intdict$IntDict$Left = {ctor: 'Left'};
var _elm_community$intdict$IntDict$Disjunct = F2(
	function (a, b) {
		return {ctor: 'Disjunct', _0: a, _1: b};
	});
var _elm_community$intdict$IntDict$Parent = F2(
	function (a, b) {
		return {ctor: 'Parent', _0: a, _1: b};
	});
var _elm_community$intdict$IntDict$SamePrefix = {ctor: 'SamePrefix'};
var _elm_community$intdict$IntDict$determineBranchRelation = F2(
	function (l, r) {
		var childEdge = F2(
			function (prefix, c) {
				return A2(_elm_community$intdict$IntDict$isBranchingBitSet, prefix, c.prefix.prefixBits) ? _elm_community$intdict$IntDict$Right : _elm_community$intdict$IntDict$Left;
			});
		var rp = r.prefix;
		var lp = l.prefix;
		var mask = _elm_community$intdict$IntDict$highestBitSet(
			A2(_elm_community$intdict$IntDict$mostSignificantBranchingBit, lp.branchingBit, rp.branchingBit));
		var modifiedRightPrefix = A3(_elm_community$intdict$IntDict$combineBits, rp.prefixBits, ~lp.prefixBits, mask);
		var prefix = A2(_elm_community$intdict$IntDict$lcp, lp.prefixBits, modifiedRightPrefix);
		return _elm_lang$core$Native_Utils.eq(lp, rp) ? _elm_community$intdict$IntDict$SamePrefix : (_elm_lang$core$Native_Utils.eq(prefix, lp) ? A2(
			_elm_community$intdict$IntDict$Parent,
			_elm_community$intdict$IntDict$Left,
			A2(childEdge, l.prefix, r)) : (_elm_lang$core$Native_Utils.eq(prefix, rp) ? A2(
			_elm_community$intdict$IntDict$Parent,
			_elm_community$intdict$IntDict$Right,
			A2(childEdge, r.prefix, l)) : A2(
			_elm_community$intdict$IntDict$Disjunct,
			prefix,
			A2(childEdge, prefix, l))));
	});
var _elm_community$intdict$IntDict$uniteWith = F3(
	function (merger, l, r) {
		var mergeWith = F3(
			function (key, left, right) {
				var _p42 = {ctor: '_Tuple2', _0: left, _1: right};
				if (_p42._0.ctor === 'Just') {
					if (_p42._1.ctor === 'Just') {
						return _elm_lang$core$Maybe$Just(
							A3(merger, key, _p42._0._0, _p42._1._0));
					} else {
						return left;
					}
				} else {
					if (_p42._1.ctor === 'Just') {
						return right;
					} else {
						return _elm_lang$core$Native_Utils.crashCase(
							'IntDict',
							{
								start: {line: 709, column: 13},
								end: {line: 720, column: 154}
							},
							_p42)('IntDict.uniteWith: mergeWith was called with 2 Nothings. This is a bug in the implementation, please file a bug report!');
					}
				}
			});
		var _p44 = {ctor: '_Tuple2', _0: l, _1: r};
		_v38_2:
		do {
			_v38_1:
			do {
				switch (_p44._0.ctor) {
					case 'Empty':
						return r;
					case 'Leaf':
						switch (_p44._1.ctor) {
							case 'Empty':
								break _v38_1;
							case 'Leaf':
								break _v38_2;
							default:
								break _v38_2;
						}
					default:
						switch (_p44._1.ctor) {
							case 'Empty':
								break _v38_1;
							case 'Leaf':
								var _p46 = _p44._1._0;
								return A3(
									_elm_community$intdict$IntDict$update,
									_p46.key,
									function (l_) {
										return A3(
											mergeWith,
											_p46.key,
											l_,
											_elm_lang$core$Maybe$Just(_p46.value));
									},
									l);
							default:
								var _p49 = _p44._1._0;
								var _p48 = _p44._0._0;
								var _p47 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p48, _p49);
								switch (_p47.ctor) {
									case 'SamePrefix':
										return A3(
											_elm_community$intdict$IntDict$inner,
											_p48.prefix,
											A3(_elm_community$intdict$IntDict$uniteWith, merger, _p48.left, _p49.left),
											A3(_elm_community$intdict$IntDict$uniteWith, merger, _p48.right, _p49.right));
									case 'Parent':
										if (_p47._0.ctor === 'Left') {
											if (_p47._1.ctor === 'Right') {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p48.prefix,
													_p48.left,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, _p48.right, r));
											} else {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p48.prefix,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, _p48.left, r),
													_p48.right);
											}
										} else {
											if (_p47._1.ctor === 'Right') {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p49.prefix,
													_p49.left,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, l, _p49.right));
											} else {
												return A3(
													_elm_community$intdict$IntDict$inner,
													_p49.prefix,
													A3(_elm_community$intdict$IntDict$uniteWith, merger, l, _p49.left),
													_p49.right);
											}
										}
									default:
										if (_p47._1.ctor === 'Left') {
											return A3(_elm_community$intdict$IntDict$inner, _p47._0, l, r);
										} else {
											return A3(_elm_community$intdict$IntDict$inner, _p47._0, r, l);
										}
								}
						}
				}
			} while(false);
			return l;
		} while(false);
		var _p45 = _p44._0._0;
		return A3(
			_elm_community$intdict$IntDict$update,
			_p45.key,
			function (r_) {
				return A3(
					mergeWith,
					_p45.key,
					_elm_lang$core$Maybe$Just(_p45.value),
					r_);
			},
			r);
	});
var _elm_community$intdict$IntDict$union = _elm_community$intdict$IntDict$uniteWith(
	F3(
		function (key, old, $new) {
			return old;
		}));
var _elm_community$intdict$IntDict$intersect = F2(
	function (l, r) {
		intersect:
		while (true) {
			var _p50 = {ctor: '_Tuple2', _0: l, _1: r};
			_v40_2:
			do {
				_v40_1:
				do {
					switch (_p50._0.ctor) {
						case 'Empty':
							return _elm_community$intdict$IntDict$Empty;
						case 'Leaf':
							switch (_p50._1.ctor) {
								case 'Empty':
									break _v40_1;
								case 'Leaf':
									break _v40_2;
								default:
									break _v40_2;
							}
						default:
							switch (_p50._1.ctor) {
								case 'Empty':
									break _v40_1;
								case 'Leaf':
									var _p52 = _p50._1._0;
									var _p51 = A2(_elm_community$intdict$IntDict$get, _p52.key, l);
									if (_p51.ctor === 'Just') {
										return A2(_elm_community$intdict$IntDict$leaf, _p52.key, _p51._0);
									} else {
										return _elm_community$intdict$IntDict$Empty;
									}
								default:
									var _p55 = _p50._1._0;
									var _p54 = _p50._0._0;
									var _p53 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p54, _p55);
									switch (_p53.ctor) {
										case 'SamePrefix':
											return A3(
												_elm_community$intdict$IntDict$inner,
												_p54.prefix,
												A2(_elm_community$intdict$IntDict$intersect, _p54.left, _p55.left),
												A2(_elm_community$intdict$IntDict$intersect, _p54.right, _p55.right));
										case 'Parent':
											if (_p53._0.ctor === 'Left') {
												if (_p53._1.ctor === 'Right') {
													var _v43 = _p54.right,
														_v44 = r;
													l = _v43;
													r = _v44;
													continue intersect;
												} else {
													var _v45 = _p54.left,
														_v46 = r;
													l = _v45;
													r = _v46;
													continue intersect;
												}
											} else {
												if (_p53._1.ctor === 'Right') {
													var _v47 = l,
														_v48 = _p55.right;
													l = _v47;
													r = _v48;
													continue intersect;
												} else {
													var _v49 = l,
														_v50 = _p55.left;
													l = _v49;
													r = _v50;
													continue intersect;
												}
											}
										default:
											return _elm_community$intdict$IntDict$Empty;
									}
							}
					}
				} while(false);
				return _elm_community$intdict$IntDict$Empty;
			} while(false);
			return A2(_elm_community$intdict$IntDict$member, _p50._0._0.key, r) ? l : _elm_community$intdict$IntDict$Empty;
		}
	});
var _elm_community$intdict$IntDict$diff = F2(
	function (l, r) {
		diff:
		while (true) {
			var _p56 = {ctor: '_Tuple2', _0: l, _1: r};
			_v51_2:
			do {
				_v51_1:
				do {
					switch (_p56._0.ctor) {
						case 'Empty':
							return _elm_community$intdict$IntDict$Empty;
						case 'Leaf':
							switch (_p56._1.ctor) {
								case 'Empty':
									break _v51_1;
								case 'Leaf':
									break _v51_2;
								default:
									break _v51_2;
							}
						default:
							switch (_p56._1.ctor) {
								case 'Empty':
									break _v51_1;
								case 'Leaf':
									return A2(_elm_community$intdict$IntDict$remove, _p56._1._0.key, l);
								default:
									var _p59 = _p56._1._0;
									var _p58 = _p56._0._0;
									var _p57 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p58, _p59);
									switch (_p57.ctor) {
										case 'SamePrefix':
											return A3(
												_elm_community$intdict$IntDict$inner,
												_p58.prefix,
												A2(_elm_community$intdict$IntDict$diff, _p58.left, _p59.left),
												A2(_elm_community$intdict$IntDict$diff, _p58.right, _p59.right));
										case 'Parent':
											if (_p57._0.ctor === 'Left') {
												if (_p57._1.ctor === 'Left') {
													return A3(
														_elm_community$intdict$IntDict$inner,
														_p58.prefix,
														A2(_elm_community$intdict$IntDict$diff, _p58.left, r),
														_p58.right);
												} else {
													return A3(
														_elm_community$intdict$IntDict$inner,
														_p58.prefix,
														_p58.left,
														A2(_elm_community$intdict$IntDict$diff, _p58.right, r));
												}
											} else {
												if (_p57._1.ctor === 'Left') {
													var _v53 = l,
														_v54 = _p59.left;
													l = _v53;
													r = _v54;
													continue diff;
												} else {
													var _v55 = l,
														_v56 = _p59.right;
													l = _v55;
													r = _v56;
													continue diff;
												}
											}
										default:
											return l;
									}
							}
					}
				} while(false);
				return l;
			} while(false);
			return A2(_elm_community$intdict$IntDict$member, _p56._0._0.key, r) ? _elm_community$intdict$IntDict$Empty : l;
		}
	});
var _elm_community$intdict$IntDict$merge = F6(
	function (left, both, right, l, r, acc) {
		var m = A3(_elm_community$intdict$IntDict$merge, left, both, right);
		var _p60 = {ctor: '_Tuple2', _0: l, _1: r};
		_v57_2:
		do {
			_v57_1:
			do {
				switch (_p60._0.ctor) {
					case 'Empty':
						return A3(_elm_community$intdict$IntDict$foldl, right, acc, r);
					case 'Leaf':
						switch (_p60._1.ctor) {
							case 'Empty':
								break _v57_1;
							case 'Leaf':
								break _v57_2;
							default:
								break _v57_2;
						}
					default:
						switch (_p60._1.ctor) {
							case 'Empty':
								break _v57_1;
							case 'Leaf':
								var _p64 = _p60._1._0;
								var _p63 = A2(_elm_community$intdict$IntDict$get, _p64.key, l);
								if (_p63.ctor === 'Nothing') {
									return A3(
										m,
										l,
										_elm_community$intdict$IntDict$Empty,
										A3(right, _p64.key, _p64.value, acc));
								} else {
									return A3(
										m,
										A2(_elm_community$intdict$IntDict$remove, _p64.key, l),
										_elm_community$intdict$IntDict$Empty,
										A4(both, _p64.key, _p63._0, _p64.value, acc));
								}
							default:
								var _p67 = _p60._1._0;
								var _p66 = _p60._0._0;
								var _p65 = A2(_elm_community$intdict$IntDict$determineBranchRelation, _p66, _p67);
								switch (_p65.ctor) {
									case 'SamePrefix':
										return A3(
											m,
											_p66.right,
											_p67.right,
											A3(m, _p66.left, _p67.left, acc));
									case 'Parent':
										if (_p65._0.ctor === 'Left') {
											if (_p65._1.ctor === 'Left') {
												return A3(
													m,
													_p66.right,
													_elm_community$intdict$IntDict$Empty,
													A3(m, _p66.left, r, acc));
											} else {
												return A3(
													m,
													_p66.right,
													r,
													A3(m, _p66.left, _elm_community$intdict$IntDict$Empty, acc));
											}
										} else {
											if (_p65._1.ctor === 'Left') {
												return A3(
													m,
													_elm_community$intdict$IntDict$Empty,
													_p67.right,
													A3(m, l, _p67.left, acc));
											} else {
												return A3(
													m,
													l,
													_p67.right,
													A3(m, _elm_community$intdict$IntDict$Empty, _p67.left, acc));
											}
										}
									default:
										if (_p65._1.ctor === 'Left') {
											return A3(
												m,
												_elm_community$intdict$IntDict$Empty,
												r,
												A3(m, l, _elm_community$intdict$IntDict$Empty, acc));
										} else {
											return A3(
												m,
												l,
												_elm_community$intdict$IntDict$Empty,
												A3(m, _elm_community$intdict$IntDict$Empty, r, acc));
										}
								}
						}
				}
			} while(false);
			return A3(_elm_community$intdict$IntDict$foldl, left, acc, l);
		} while(false);
		var _p62 = _p60._0._0;
		var _p61 = A2(_elm_community$intdict$IntDict$get, _p62.key, r);
		if (_p61.ctor === 'Nothing') {
			return A3(
				m,
				_elm_community$intdict$IntDict$Empty,
				r,
				A3(left, _p62.key, _p62.value, acc));
		} else {
			return A3(
				m,
				_elm_community$intdict$IntDict$Empty,
				A2(_elm_community$intdict$IntDict$remove, _p62.key, r),
				A4(both, _p62.key, _p62.value, _p61._0, acc));
		}
	});

var _elm_community$graph$Graph$ignorePath = F4(
	function (visit, path, _p0, acc) {
		var _p1 = path;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Native_Utils.crashCase(
				'Graph',
				{
					start: {line: 1017, column: 5},
					end: {line: 1022, column: 26}
				},
				_p1)('Graph.ignorePath: No algorithm should ever pass an empty path into this BfsNodeVisitor.');
		} else {
			return A2(visit, _p1._0, acc);
		}
	});
var _elm_community$graph$Graph$onFinish = F3(
	function (visitor, ctx, acc) {
		return {
			ctor: '_Tuple2',
			_0: acc,
			_1: visitor(ctx)
		};
	});
var _elm_community$graph$Graph$onDiscovery = F3(
	function (visitor, ctx, acc) {
		return {
			ctor: '_Tuple2',
			_0: A2(visitor, ctx, acc),
			_1: _elm_lang$core$Basics$identity
		};
	});
var _elm_community$graph$Graph$alongIncomingEdges = function (ctx) {
	return _elm_community$intdict$IntDict$keys(ctx.incoming);
};
var _elm_community$graph$Graph$alongOutgoingEdges = function (ctx) {
	return _elm_community$intdict$IntDict$keys(ctx.outgoing);
};
var _elm_community$graph$Graph$applyEdgeDiff = F3(
	function (nodeId, diff, graphRep) {
		var updateOutgoingEdge = F2(
			function (upd, node) {
				return _elm_lang$core$Native_Utils.update(
					node,
					{
						outgoing: A3(_elm_community$intdict$IntDict$update, nodeId, upd, node.outgoing)
					});
			});
		var updateIncomingEdge = F2(
			function (upd, node) {
				return _elm_lang$core$Native_Utils.update(
					node,
					{
						incoming: A3(_elm_community$intdict$IntDict$update, nodeId, upd, node.incoming)
					});
			});
		var edgeUpdateToMaybe = function (edgeUpdate) {
			var _p3 = edgeUpdate;
			if (_p3.ctor === 'Insert') {
				return _elm_lang$core$Maybe$Just(_p3._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var updateAdjacency = F3(
			function (updateEdge, updatedId, edgeUpdate) {
				var updateLbl = updateEdge(
					_elm_lang$core$Basics$always(
						edgeUpdateToMaybe(edgeUpdate)));
				return A2(
					_elm_community$intdict$IntDict$update,
					updatedId,
					_elm_lang$core$Maybe$map(updateLbl));
			});
		var flippedFoldl = F3(
			function (f, dict, acc) {
				return A3(_elm_community$intdict$IntDict$foldl, f, acc, dict);
			});
		return A3(
			flippedFoldl,
			updateAdjacency(updateOutgoingEdge),
			diff.outgoing,
			A3(
				flippedFoldl,
				updateAdjacency(updateIncomingEdge),
				diff.incoming,
				graphRep));
	});
var _elm_community$graph$Graph$emptyDiff = {incoming: _elm_community$intdict$IntDict$empty, outgoing: _elm_community$intdict$IntDict$empty};
var _elm_community$graph$Graph$unGraph = function (graph) {
	var _p4 = graph;
	return _p4._0;
};
var _elm_community$graph$Graph$size = function (_p5) {
	return _elm_community$intdict$IntDict$size(
		_elm_community$graph$Graph$unGraph(_p5));
};
var _elm_community$graph$Graph$member = function (nodeId) {
	return function (_p6) {
		return A2(
			_elm_community$intdict$IntDict$member,
			nodeId,
			_elm_community$graph$Graph$unGraph(_p6));
	};
};
var _elm_community$graph$Graph$get = function (nodeId) {
	return function (_p7) {
		return A2(
			_elm_community$intdict$IntDict$get,
			nodeId,
			_elm_community$graph$Graph$unGraph(_p7));
	};
};
var _elm_community$graph$Graph$nodeIdRange = function (graph) {
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (_p8) {
			var _p9 = _p8;
			return A2(
				_elm_lang$core$Maybe$andThen,
				function (_p10) {
					var _p11 = _p10;
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p9._0, _1: _p11._0});
				},
				_elm_community$intdict$IntDict$findMax(
					_elm_community$graph$Graph$unGraph(graph)));
		},
		_elm_community$intdict$IntDict$findMin(
			_elm_community$graph$Graph$unGraph(graph)));
};
var _elm_community$graph$Graph$nodes = function (_p12) {
	return A2(
		_elm_lang$core$List$map,
		function (_) {
			return _.node;
		},
		_elm_community$intdict$IntDict$values(
			_elm_community$graph$Graph$unGraph(_p12)));
};
var _elm_community$graph$Graph$nodeIds = function (_p13) {
	return _elm_community$intdict$IntDict$keys(
		_elm_community$graph$Graph$unGraph(_p13));
};
var _elm_community$graph$Graph$edges = function (graph) {
	var flippedFoldl = F3(
		function (f, dict, list) {
			return A3(_elm_community$intdict$IntDict$foldl, f, list, dict);
		});
	var prependEdges = F2(
		function (node1, ctx) {
			return A2(
				flippedFoldl,
				F2(
					function (node2, e) {
						return F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(
							{to: node2, from: node1, label: e});
					}),
				ctx.outgoing);
		});
	return A3(
		flippedFoldl,
		prependEdges,
		_elm_community$graph$Graph$unGraph(graph),
		{ctor: '[]'});
};
var _elm_community$graph$Graph$toString = function (graph) {
	var edgeList = _elm_community$graph$Graph$edges(graph);
	var nodeList = _elm_community$graph$Graph$nodes(graph);
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'Graph.fromNodesAndEdges ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(nodeList),
			A2(
				_elm_lang$core$Basics_ops['++'],
				' ',
				_elm_lang$core$Basics$toString(edgeList))));
};
var _elm_community$graph$Graph$Node = F2(
	function (a, b) {
		return {id: a, label: b};
	});
var _elm_community$graph$Graph$Edge = F3(
	function (a, b, c) {
		return {from: a, to: b, label: c};
	});
var _elm_community$graph$Graph$NodeContext = F3(
	function (a, b, c) {
		return {node: a, incoming: b, outgoing: c};
	});
var _elm_community$graph$Graph$EdgeDiff = F2(
	function (a, b) {
		return {incoming: a, outgoing: b};
	});
var _elm_community$graph$Graph$Graph = function (a) {
	return {ctor: 'Graph', _0: a};
};
var _elm_community$graph$Graph$empty = _elm_community$graph$Graph$Graph(_elm_community$intdict$IntDict$empty);
var _elm_community$graph$Graph$isEmpty = function (graph) {
	return _elm_lang$core$Native_Utils.eq(graph, _elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$fromNodesAndEdges = F2(
	function (nodes, edges) {
		var addEdge = F2(
			function (edge, rep) {
				var updateIncoming = function (ctx) {
					return _elm_lang$core$Native_Utils.update(
						ctx,
						{
							incoming: A3(_elm_community$intdict$IntDict$insert, edge.from, edge.label, ctx.incoming)
						});
				};
				var updateOutgoing = function (ctx) {
					return _elm_lang$core$Native_Utils.update(
						ctx,
						{
							outgoing: A3(_elm_community$intdict$IntDict$insert, edge.to, edge.label, ctx.outgoing)
						});
				};
				return A3(
					_elm_community$intdict$IntDict$update,
					edge.to,
					_elm_lang$core$Maybe$map(updateIncoming),
					A3(
						_elm_community$intdict$IntDict$update,
						edge.from,
						_elm_lang$core$Maybe$map(updateOutgoing),
						rep));
			});
		var addEdgeIfValid = F2(
			function (edge, rep) {
				return (A2(_elm_community$intdict$IntDict$member, edge.from, rep) && A2(_elm_community$intdict$IntDict$member, edge.to, rep)) ? A2(addEdge, edge, rep) : rep;
			});
		var nodeRep = A3(
			_elm_lang$core$List$foldl,
			function (n) {
				return A2(
					_elm_community$intdict$IntDict$insert,
					n.id,
					A3(_elm_community$graph$Graph$NodeContext, n, _elm_community$intdict$IntDict$empty, _elm_community$intdict$IntDict$empty));
			},
			_elm_community$intdict$IntDict$empty,
			nodes);
		return _elm_community$graph$Graph$Graph(
			A3(_elm_lang$core$List$foldl, addEdgeIfValid, nodeRep, edges));
	});
var _elm_community$graph$Graph$fromNodeLabelsAndEdgePairs = F2(
	function (labels, edgePairs) {
		var edges = A2(
			_elm_lang$core$List$map,
			function (_p14) {
				var _p15 = _p14;
				return A3(
					_elm_community$graph$Graph$Edge,
					_p15._0,
					_p15._1,
					{ctor: '_Tuple0'});
			},
			edgePairs);
		var nodes = _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				F2(
					function (lbl, _p16) {
						var _p17 = _p16;
						var _p18 = _p17._0;
						return {
							ctor: '_Tuple2',
							_0: _p18 + 1,
							_1: {
								ctor: '::',
								_0: A2(_elm_community$graph$Graph$Node, _p18, lbl),
								_1: _p17._1
							}
						};
					}),
				{
					ctor: '_Tuple2',
					_0: 0,
					_1: {ctor: '[]'}
				},
				labels));
		return A2(_elm_community$graph$Graph$fromNodesAndEdges, nodes, edges);
	});
var _elm_community$graph$Graph$symmetricClosure = function (edgeMerger) {
	var orderedEdgeMerger = F4(
		function (from, to, outgoing, incoming) {
			return (_elm_lang$core$Native_Utils.cmp(from, to) < 1) ? A4(edgeMerger, from, to, outgoing, incoming) : A4(edgeMerger, to, from, incoming, outgoing);
		});
	var updateContext = F2(
		function (nodeId, ctx) {
			var edges = A3(
				_elm_community$intdict$IntDict$uniteWith,
				orderedEdgeMerger(nodeId),
				ctx.outgoing,
				ctx.incoming);
			return _elm_lang$core$Native_Utils.update(
				ctx,
				{outgoing: edges, incoming: edges});
		});
	return function (_p19) {
		return _elm_community$graph$Graph$Graph(
			A2(
				_elm_community$intdict$IntDict$map,
				updateContext,
				_elm_community$graph$Graph$unGraph(_p19)));
	};
};
var _elm_community$graph$Graph$reverseEdges = function () {
	var updateContext = F2(
		function (nodeId, ctx) {
			return _elm_lang$core$Native_Utils.update(
				ctx,
				{outgoing: ctx.incoming, incoming: ctx.outgoing});
		});
	return function (_p20) {
		return _elm_community$graph$Graph$Graph(
			A2(
				_elm_community$intdict$IntDict$map,
				updateContext,
				_elm_community$graph$Graph$unGraph(_p20)));
	};
}();
var _elm_community$graph$Graph$Remove = function (a) {
	return {ctor: 'Remove', _0: a};
};
var _elm_community$graph$Graph$Insert = function (a) {
	return {ctor: 'Insert', _0: a};
};
var _elm_community$graph$Graph$computeEdgeDiff = F2(
	function (old, $new) {
		var collectUpdates = F3(
			function (edgeUpdate, updatedId, label) {
				var replaceUpdate = function (old) {
					var _p21 = {
						ctor: '_Tuple2',
						_0: old,
						_1: edgeUpdate(label)
					};
					if (_p21._0.ctor === 'Just') {
						if (_p21._0._0.ctor === 'Remove') {
							if (_p21._1.ctor === 'Insert') {
								var _p22 = _p21._1._0;
								return _elm_lang$core$Native_Utils.eq(_p21._0._0._0, _p22) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
									_elm_community$graph$Graph$Insert(_p22));
							} else {
								return _elm_lang$core$Native_Utils.crashCase(
									'Graph',
									{
										start: {line: 255, column: 21},
										end: {line: 269, column: 36}
									},
									_p21)('Graph.computeEdgeDiff: Collected two removals for the same edge. This is an error in the implementation of Graph and you should file a bug report!');
							}
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'Graph',
								{
									start: {line: 255, column: 21},
									end: {line: 269, column: 36}
								},
								_p21)('Graph.computeEdgeDiff: Collected inserts before removals. This is an error in the implementation of Graph and you should file a bug report!');
						}
					} else {
						return _elm_lang$core$Maybe$Just(_p21._1);
					}
				};
				return A2(_elm_community$intdict$IntDict$update, updatedId, replaceUpdate);
			});
		var collect = F3(
			function (edgeUpdate, adj, updates) {
				return A3(
					_elm_community$intdict$IntDict$foldl,
					collectUpdates(edgeUpdate),
					updates,
					adj);
			});
		var _p25 = {ctor: '_Tuple2', _0: old, _1: $new};
		if (_p25._0.ctor === 'Nothing') {
			if (_p25._1.ctor === 'Nothing') {
				return _elm_community$graph$Graph$emptyDiff;
			} else {
				var _p27 = _p25._1._0;
				return {
					outgoing: A3(collect, _elm_community$graph$Graph$Insert, _p27.incoming, _elm_community$intdict$IntDict$empty),
					incoming: A3(collect, _elm_community$graph$Graph$Insert, _p27.outgoing, _elm_community$intdict$IntDict$empty)
				};
			}
		} else {
			if (_p25._1.ctor === 'Nothing') {
				var _p26 = _p25._0._0;
				return {
					outgoing: A3(collect, _elm_community$graph$Graph$Remove, _p26.incoming, _elm_community$intdict$IntDict$empty),
					incoming: A3(collect, _elm_community$graph$Graph$Remove, _p26.outgoing, _elm_community$intdict$IntDict$empty)
				};
			} else {
				var _p29 = _p25._0._0;
				var _p28 = _p25._1._0;
				return _elm_lang$core$Native_Utils.eq(_p29, _p28) ? _elm_community$graph$Graph$emptyDiff : {
					outgoing: A3(
						collect,
						_elm_community$graph$Graph$Insert,
						_p28.incoming,
						A3(collect, _elm_community$graph$Graph$Remove, _p29.incoming, _elm_community$intdict$IntDict$empty)),
					incoming: A3(
						collect,
						_elm_community$graph$Graph$Insert,
						_p28.outgoing,
						A3(collect, _elm_community$graph$Graph$Remove, _p29.outgoing, _elm_community$intdict$IntDict$empty))
				};
			}
		}
	});
var _elm_community$graph$Graph$update = F2(
	function (nodeId, updater) {
		var wrappedUpdater = function (rep) {
			var filterInvalidEdges = function (ctx) {
				return _elm_community$intdict$IntDict$filter(
					F2(
						function (id, _p30) {
							return _elm_lang$core$Native_Utils.eq(id, ctx.node.id) || A2(_elm_community$intdict$IntDict$member, id, rep);
						}));
			};
			var cleanUpEdges = function (ctx) {
				return _elm_lang$core$Native_Utils.update(
					ctx,
					{
						incoming: A2(filterInvalidEdges, ctx, ctx.incoming),
						outgoing: A2(filterInvalidEdges, ctx, ctx.outgoing)
					});
			};
			var old = A2(_elm_community$intdict$IntDict$get, nodeId, rep);
			var $new = A2(
				_elm_lang$core$Maybe$map,
				cleanUpEdges,
				updater(old));
			var diff = A2(_elm_community$graph$Graph$computeEdgeDiff, old, $new);
			return A3(
				_elm_community$intdict$IntDict$update,
				nodeId,
				_elm_lang$core$Basics$always($new),
				A3(_elm_community$graph$Graph$applyEdgeDiff, nodeId, diff, rep));
		};
		return function (_p31) {
			return _elm_community$graph$Graph$Graph(
				wrappedUpdater(
					_elm_community$graph$Graph$unGraph(_p31)));
		};
	});
var _elm_community$graph$Graph$insert = F2(
	function (nodeContext, graph) {
		return A3(
			_elm_community$graph$Graph$update,
			nodeContext.node.id,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(nodeContext)),
			graph);
	});
var _elm_community$graph$Graph$inducedSubgraph = F2(
	function (nodeIds, graph) {
		var insertContextById = F2(
			function (nodeId, acc) {
				var _p32 = A2(_elm_community$graph$Graph$get, nodeId, graph);
				if (_p32.ctor === 'Just') {
					return A2(_elm_community$graph$Graph$insert, _p32._0, acc);
				} else {
					return acc;
				}
			});
		return A3(_elm_lang$core$List$foldl, insertContextById, _elm_community$graph$Graph$empty, nodeIds);
	});
var _elm_community$graph$Graph$remove = F2(
	function (nodeId, graph) {
		return A3(
			_elm_community$graph$Graph$update,
			nodeId,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			graph);
	});
var _elm_community$graph$Graph$fold = F3(
	function (f, acc, graph) {
		var go = F2(
			function (acc, graph1) {
				go:
				while (true) {
					var maybeContext = A2(
						_elm_lang$core$Maybe$andThen,
						function (id) {
							return A2(_elm_community$graph$Graph$get, id, graph);
						},
						A2(
							_elm_lang$core$Maybe$map,
							_elm_lang$core$Tuple$first,
							_elm_community$graph$Graph$nodeIdRange(graph1)));
					var _p33 = maybeContext;
					if (_p33.ctor === 'Just') {
						var _p34 = _p33._0;
						var _v11 = A2(f, _p34, acc),
							_v12 = A2(_elm_community$graph$Graph$remove, _p34.node.id, graph1);
						acc = _v11;
						graph1 = _v12;
						continue go;
					} else {
						return acc;
					}
				}
			});
		return A2(go, acc, graph);
	});
var _elm_community$graph$Graph$mapContexts = function (f) {
	return A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return _elm_community$graph$Graph$insert(
				f(ctx));
		},
		_elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$mapNodes = function (f) {
	return A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return _elm_community$graph$Graph$insert(
				_elm_lang$core$Native_Utils.update(
					ctx,
					{
						node: {
							id: ctx.node.id,
							label: f(ctx.node.label)
						}
					}));
		},
		_elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$mapEdges = function (f) {
	return A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return _elm_community$graph$Graph$insert(
				_elm_lang$core$Native_Utils.update(
					ctx,
					{
						outgoing: A2(
							_elm_community$intdict$IntDict$map,
							F2(
								function (n, e) {
									return f(e);
								}),
							ctx.outgoing),
						incoming: A2(
							_elm_community$intdict$IntDict$map,
							F2(
								function (n, e) {
									return f(e);
								}),
							ctx.incoming)
					}));
		},
		_elm_community$graph$Graph$empty);
};
var _elm_community$graph$Graph$guidedDfs = F5(
	function (selectNeighbors, visitNode, seeds, acc, graph) {
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					var _p35 = seeds;
					if (_p35.ctor === '[]') {
						return {ctor: '_Tuple2', _0: acc, _1: graph};
					} else {
						var _p41 = _p35._1;
						var _p40 = _p35._0;
						var _p36 = A2(_elm_community$graph$Graph$get, _p40, graph);
						if (_p36.ctor === 'Nothing') {
							var _v15 = _p41,
								_v16 = acc,
								_v17 = graph;
							seeds = _v15;
							acc = _v16;
							graph = _v17;
							continue go;
						} else {
							var _p39 = _p36._0;
							var _p37 = A2(visitNode, _p39, acc);
							var accAfterDiscovery = _p37._0;
							var finishNode = _p37._1;
							var _p38 = A3(
								go,
								selectNeighbors(_p39),
								accAfterDiscovery,
								A2(_elm_community$graph$Graph$remove, _p40, graph));
							var accBeforeFinish = _p38._0;
							var graph1 = _p38._1;
							var accAfterFinish = finishNode(accBeforeFinish);
							var _v18 = _p41,
								_v19 = accAfterFinish,
								_v20 = graph1;
							seeds = _v18;
							acc = _v19;
							graph = _v20;
							continue go;
						}
					}
				}
			});
		return A3(go, seeds, acc, graph);
	});
var _elm_community$graph$Graph$dfs = F3(
	function (visitNode, acc, graph) {
		return _elm_lang$core$Tuple$first(
			A5(
				_elm_community$graph$Graph$guidedDfs,
				_elm_community$graph$Graph$alongOutgoingEdges,
				visitNode,
				_elm_community$graph$Graph$nodeIds(graph),
				acc,
				graph));
	});
var _elm_community$graph$Graph$dfsForest = F2(
	function (seeds, graph) {
		var visitNode = F2(
			function (ctx, trees) {
				return {
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: function (children) {
						return {
							ctor: '::',
							_0: A2(_elm_community$graph$Graph_Tree$inner, ctx, children),
							_1: trees
						};
					}
				};
			});
		return _elm_lang$core$List$reverse(
			_elm_lang$core$Tuple$first(
				A5(
					_elm_community$graph$Graph$guidedDfs,
					_elm_community$graph$Graph$alongOutgoingEdges,
					visitNode,
					seeds,
					{ctor: '[]'},
					graph)));
	});
var _elm_community$graph$Graph$dfsTree = F2(
	function (seed, graph) {
		var _p42 = A2(
			_elm_community$graph$Graph$dfsForest,
			{
				ctor: '::',
				_0: seed,
				_1: {ctor: '[]'}
			},
			graph);
		if (_p42.ctor === '[]') {
			return _elm_community$graph$Graph_Tree$empty;
		} else {
			if (_p42._1.ctor === '[]') {
				return _p42._0;
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'Graph',
					{
						start: {line: 953, column: 5},
						end: {line: 961, column: 126}
					},
					_p42)('dfsTree: There can\'t be more than one DFS tree. This invariant is violated, please report this bug.');
			}
		}
	});
var _elm_community$graph$Graph$stronglyConnectedComponents = function (graph) {
	var timestamps = A3(
		_elm_community$graph$Graph$dfs,
		_elm_community$graph$Graph$onFinish(
			function (_p44) {
				return F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(
					function (_) {
						return _.id;
					}(
						function (_) {
							return _.node;
						}(_p44)));
			}),
		{ctor: '[]'},
		graph);
	var forest = A2(
		_elm_community$graph$Graph$dfsForest,
		timestamps,
		_elm_community$graph$Graph$reverseEdges(graph));
	var components = A2(
		_elm_lang$core$List$map,
		function (_p45) {
			return _elm_community$graph$Graph$reverseEdges(
				A3(
					_elm_lang$core$List$foldr,
					_elm_community$graph$Graph$insert,
					_elm_community$graph$Graph$empty,
					_elm_community$graph$Graph_Tree$preOrderList(_p45)));
		},
		forest);
	return components;
};
var _elm_community$graph$Graph$topologicalSort = function (graph) {
	var unwrapSingleNodeGraph = function (g) {
		var _p46 = _elm_community$graph$Graph$nodeIdRange(g);
		if (_p46.ctor === 'Nothing') {
			return _elm_lang$core$Native_Utils.crashCase(
				'Graph',
				{
					start: {line: 1198, column: 13},
					end: {line: 1208, column: 32}
				},
				_p46)('Invariant hurt in Graph.topologicalSort: No strongly connected component should be empty');
		} else {
			var _p48 = A2(_elm_community$graph$Graph$get, _p46._0._0, g);
			if (_p48.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Graph',
					{
						start: {line: 1203, column: 21},
						end: {line: 1208, column: 32}
					},
					_p48)('Invariant hurt in Graph.topologicalSort: nodeId in nodeIdRange of the strongly connected component should be present in the original graph');
			} else {
				return _p48._0;
			}
		}
	};
	var scc = _elm_community$graph$Graph$stronglyConnectedComponents(graph);
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(scc),
		_elm_community$graph$Graph$size(graph)) ? _elm_lang$core$Result$Ok(
		A2(_elm_lang$core$List$map, unwrapSingleNodeGraph, scc)) : _elm_lang$core$Result$Err(scc);
};
var _elm_community$graph$Graph$guidedBfs = F5(
	function (selectNeighbors, visitNode, seeds, acc, graph) {
		var enqueueMany = F4(
			function (distance, parentPath, nodeIds, queue) {
				return A3(
					_elm_lang$core$List$foldl,
					_avh4$elm_fifo$Fifo$insert,
					queue,
					A2(
						_elm_lang$core$List$map,
						function (id) {
							return {ctor: '_Tuple3', _0: id, _1: parentPath, _2: distance};
						},
						nodeIds));
			});
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					var _p50 = _avh4$elm_fifo$Fifo$remove(seeds);
					if (_p50._0.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: acc, _1: graph};
					} else {
						var _p55 = _p50._1;
						var _p54 = _p50._0._0._0;
						var _p53 = _p50._0._0._2;
						var _p51 = A2(_elm_community$graph$Graph$get, _p54, graph);
						if (_p51.ctor === 'Nothing') {
							var _v26 = _p55,
								_v27 = acc,
								_v28 = graph;
							seeds = _v26;
							acc = _v27;
							graph = _v28;
							continue go;
						} else {
							var _p52 = _p51._0;
							var path = {ctor: '::', _0: _p52, _1: _p50._0._0._1};
							var accAfterVisit = A3(visitNode, path, _p53, acc);
							var seeds2 = A4(
								enqueueMany,
								_p53 + 1,
								path,
								selectNeighbors(_p52),
								_p55);
							var _v29 = seeds2,
								_v30 = accAfterVisit,
								_v31 = A2(_elm_community$graph$Graph$remove, _p54, graph);
							seeds = _v29;
							acc = _v30;
							graph = _v31;
							continue go;
						}
					}
				}
			});
		return A3(
			go,
			A4(
				enqueueMany,
				0,
				{ctor: '[]'},
				seeds,
				_avh4$elm_fifo$Fifo$empty),
			acc,
			graph);
	});
var _elm_community$graph$Graph$bfs = F3(
	function (visitNode, acc, graph) {
		bfs:
		while (true) {
			var _p56 = _elm_community$graph$Graph$nodeIdRange(graph);
			if (_p56.ctor === 'Nothing') {
				return acc;
			} else {
				var _p57 = A5(
					_elm_community$graph$Graph$guidedBfs,
					_elm_community$graph$Graph$alongOutgoingEdges,
					visitNode,
					{
						ctor: '::',
						_0: _p56._0._0,
						_1: {ctor: '[]'}
					},
					acc,
					graph);
				var finalAcc = _p57._0;
				var restgraph1 = _p57._1;
				var _v33 = visitNode,
					_v34 = finalAcc,
					_v35 = restgraph1;
				visitNode = _v33;
				acc = _v34;
				graph = _v35;
				continue bfs;
			}
		}
	});
var _elm_community$graph$Graph$heightLevels = function (graph) {
	var subtract = F2(
		function (a, b) {
			return b - a;
		});
	var decrementAndNoteSources = F3(
		function (id, _p59, _p58) {
			var _p60 = _p58;
			var _p64 = _p60._0;
			var indegreesDec = A3(
				_elm_community$intdict$IntDict$update,
				id,
				_elm_lang$core$Maybe$map(
					subtract(1)),
				_p60._1);
			var _p61 = A2(_elm_community$intdict$IntDict$get, id, indegreesDec);
			if ((_p61.ctor === 'Just') && (_p61._0 === 0)) {
				var _p62 = A2(_elm_community$graph$Graph$get, id, graph);
				if (_p62.ctor === 'Just') {
					return {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: _p62._0, _1: _p64},
						_1: indegreesDec
					};
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'Graph',
						{
							start: {line: 1150, column: 21},
							end: {line: 1155, column: 157}
						},
						_p62)('Graph.heightLevels: Could not get a node of a graph which should be there by invariants. Please file a bug report!');
				}
			} else {
				return {ctor: '_Tuple2', _0: _p64, _1: indegreesDec};
			}
		});
	var decrementIndegrees = F3(
		function (source, nextLevel, indegrees) {
			return A3(
				_elm_community$intdict$IntDict$foldl,
				decrementAndNoteSources,
				{ctor: '_Tuple2', _0: nextLevel, _1: indegrees},
				source.outgoing);
		});
	var go = F4(
		function (currentLevel, nextLevel, indegrees, graph) {
			var _p65 = {ctor: '_Tuple2', _0: currentLevel, _1: nextLevel};
			if (_p65._0.ctor === '[]') {
				if (_p65._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: {ctor: '[]'},
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: {ctor: '[]'},
						_1: A4(
							go,
							nextLevel,
							{ctor: '[]'},
							indegrees,
							graph)
					};
				}
			} else {
				var _p69 = _p65._0._0;
				var _p66 = A3(decrementIndegrees, _p69, nextLevel, indegrees);
				var nextLevel1 = _p66._0;
				var indegrees1 = _p66._1;
				var _p67 = A4(
					go,
					_p65._0._1,
					nextLevel1,
					indegrees1,
					A2(_elm_community$graph$Graph$remove, _p69.node.id, graph));
				if (_p67.ctor === '[]') {
					return _elm_lang$core$Native_Utils.crashCase(
						'Graph',
						{
							start: {line: 1176, column: 21},
							end: {line: 1181, column: 56}
						},
						_p67)('Graph.heightLevels: Reached a branch which is impossible by invariants. Please file a bug report!');
				} else {
					return {
						ctor: '::',
						_0: {ctor: '::', _0: _p69, _1: _p67._0},
						_1: _p67._1
					};
				}
			}
		});
	var countIndegrees = A2(
		_elm_community$graph$Graph$fold,
		function (ctx) {
			return A2(
				_elm_community$intdict$IntDict$insert,
				ctx.node.id,
				_elm_community$intdict$IntDict$size(ctx.incoming));
		},
		_elm_community$intdict$IntDict$empty);
	var sources = A3(
		_elm_community$graph$Graph$fold,
		F2(
			function (ctx, acc) {
				return _elm_community$intdict$IntDict$isEmpty(ctx.incoming) ? {ctor: '::', _0: ctx, _1: acc} : acc;
			}),
		{ctor: '[]'},
		graph);
	return A4(
		go,
		sources,
		{ctor: '[]'},
		countIndegrees(graph),
		graph);
};

var _elm_community$graph$Graph_GraphViz$outputWithStylesWithOverrides = F2(
	function (styles, graph) {
		var nodes = _elm_community$graph$Graph$nodes(graph);
		var edges = function () {
			var sortEdges = F2(
				function (a, b) {
					var _p0 = A2(_elm_lang$core$Basics$compare, a.from, b.from);
					switch (_p0.ctor) {
						case 'LT':
							return _elm_lang$core$Basics$LT;
						case 'GT':
							return _elm_lang$core$Basics$GT;
						default:
							return A2(_elm_lang$core$Basics$compare, a.to, b.to);
					}
				});
			return A2(
				_elm_lang$core$List$sortWith,
				sortEdges,
				_elm_community$graph$Graph$edges(graph));
		}();
		var getText = function (id) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'*Node id ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(id),
						' not found*')),
				A2(
					_elm_lang$core$Maybe$map,
					function (_p1) {
						return function (_) {
							return _.text;
						}(
							function (_) {
								return _.label;
							}(
								function (_) {
									return _.node;
								}(_p1)));
					},
					A2(_elm_community$graph$Graph$get, id, graph)));
		};
		var edge = function (_p2) {
			var _p3 = _p2;
			var _p4 = _p3.label;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'  ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						getText(_p3.from)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' -> ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								getText(_p3.to)),
							(!_elm_lang$core$String$isEmpty(_p4.attrs)) ? A2(
								_elm_lang$core$Basics_ops['++'],
								' [',
								A2(_elm_lang$core$Basics_ops['++'], _p4.attrs, ']')) : ''))));
		};
		var edgesString = A2(
			_elm_lang$core$String$join,
			'\n',
			A2(_elm_lang$core$List$map, edge, edges));
		var node = function (node) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'  ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						getText(node.id)),
					(!_elm_lang$core$String$isEmpty(node.label.attrs)) ? A2(
						_elm_lang$core$Basics_ops['++'],
						' [',
						A2(_elm_lang$core$Basics_ops['++'], node.label.attrs, ']')) : ''));
		};
		var nodesString = A2(
			_elm_lang$core$String$join,
			'\n',
			A2(_elm_lang$core$List$map, node, nodes));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'digraph G {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Basics_ops['++'],
					'  rankdir=',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(styles.rankdir),
						'\n')),
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$Basics_ops['++'],
						'  graph [',
						A2(
							_elm_lang$core$Basics_ops['++'],
							styles.graph,
							A2(_elm_lang$core$Basics_ops['++'], ']', '\n'))),
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$Basics_ops['++'],
							'  node [',
							A2(
								_elm_lang$core$Basics_ops['++'],
								styles.node,
								A2(_elm_lang$core$Basics_ops['++'], ']', '\n'))),
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$Basics_ops['++'],
								'  edge [',
								A2(
									_elm_lang$core$Basics_ops['++'],
									styles.edge,
									A2(_elm_lang$core$Basics_ops['++'], ']', '\n\n'))),
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$Basics_ops['++'], edgesString, '\n\n'),
								A2(_elm_lang$core$Basics_ops['++'], nodesString, '\n}')))))));
	});
var _elm_community$graph$Graph_GraphViz$outputWithStyles = F2(
	function (styles, graph) {
		var nodes = _elm_community$graph$Graph$nodes(graph);
		var edges = function () {
			var sortEdges = F2(
				function (a, b) {
					var _p5 = A2(_elm_lang$core$Basics$compare, a.from, b.from);
					switch (_p5.ctor) {
						case 'LT':
							return _elm_lang$core$Basics$LT;
						case 'GT':
							return _elm_lang$core$Basics$GT;
						default:
							return A2(_elm_lang$core$Basics$compare, a.to, b.to);
					}
				});
			return A2(
				_elm_lang$core$List$sortWith,
				sortEdges,
				_elm_community$graph$Graph$edges(graph));
		}();
		var getText = function (id) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'*Node id ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(id),
						' not found*')),
				A2(
					_elm_lang$core$Maybe$map,
					function (_p6) {
						return function (_) {
							return _.text;
						}(
							function (_) {
								return _.label;
							}(
								function (_) {
									return _.node;
								}(_p6)));
					},
					A2(_elm_community$graph$Graph$get, id, graph)));
		};
		var edge = function (_p7) {
			var _p8 = _p7;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'  ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						getText(_p8.from)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' -> ',
						_elm_lang$core$Basics$toString(
							getText(_p8.to)))));
		};
		var edgesString = A2(
			_elm_lang$core$String$join,
			'\n',
			A2(_elm_lang$core$List$map, edge, edges));
		var node = function (node) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'  ',
				_elm_lang$core$Basics$toString(
					getText(node.id)));
		};
		var nodesString = A2(
			_elm_lang$core$String$join,
			'\n',
			A2(_elm_lang$core$List$map, node, nodes));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'digraph G {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Basics_ops['++'],
					'  rankdir=',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(styles.rankdir),
						'\n')),
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$Basics_ops['++'],
						'  graph [',
						A2(
							_elm_lang$core$Basics_ops['++'],
							styles.graph,
							A2(_elm_lang$core$Basics_ops['++'], ']', '\n'))),
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$Basics_ops['++'],
							'  node [',
							A2(
								_elm_lang$core$Basics_ops['++'],
								styles.node,
								A2(_elm_lang$core$Basics_ops['++'], ']', '\n'))),
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$Basics_ops['++'],
								'  edge [',
								A2(
									_elm_lang$core$Basics_ops['++'],
									styles.edge,
									A2(_elm_lang$core$Basics_ops['++'], ']', '\n\n'))),
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$Basics_ops['++'], edgesString, '\n\n'),
								A2(_elm_lang$core$Basics_ops['++'], nodesString, '\n}')))))));
	});
var _elm_community$graph$Graph_GraphViz$Styles = F4(
	function (a, b, c, d) {
		return {rankdir: a, graph: b, node: c, edge: d};
	});
var _elm_community$graph$Graph_GraphViz$RL = {ctor: 'RL'};
var _elm_community$graph$Graph_GraphViz$BT = {ctor: 'BT'};
var _elm_community$graph$Graph_GraphViz$LR = {ctor: 'LR'};
var _elm_community$graph$Graph_GraphViz$TB = {ctor: 'TB'};
var _elm_community$graph$Graph_GraphViz$defaultStyles = A4(_elm_community$graph$Graph_GraphViz$Styles, _elm_community$graph$Graph_GraphViz$TB, '', '', '');
var _elm_community$graph$Graph_GraphViz$output = _elm_community$graph$Graph_GraphViz$outputWithStyles(_elm_community$graph$Graph_GraphViz$defaultStyles);

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('Unable to parse \'' + str + '\' as a date. Dates must be in the ISO 8601 format.')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

var _elm_community$json_extra$Json_Decode_Extra$combine = A2(
	_elm_lang$core$List$foldr,
	_elm_lang$core$Json_Decode$map2(
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			})),
	_elm_lang$core$Json_Decode$succeed(
		{ctor: '[]'}));
var _elm_community$json_extra$Json_Decode_Extra$collection = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (length) {
			return _elm_community$json_extra$Json_Decode_Extra$combine(
				A2(
					_elm_lang$core$List$map,
					function (index) {
						return A2(
							_elm_lang$core$Json_Decode$field,
							_elm_lang$core$Basics$toString(index),
							decoder);
					},
					A2(_elm_lang$core$List$range, 0, length - 1)));
		},
		A2(_elm_lang$core$Json_Decode$field, 'length', _elm_lang$core$Json_Decode$int));
};
var _elm_community$json_extra$Json_Decode_Extra$fromResult = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Json_Decode$succeed(_p0._0);
	} else {
		return _elm_lang$core$Json_Decode$fail(_p0._0);
	}
};
var _elm_community$json_extra$Json_Decode_Extra$parseInt = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p1) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toInt(_p1));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$parseFloat = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p2) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toFloat(_p2));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$doubleEncoded = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (_p3) {
			return _elm_community$json_extra$Json_Decode_Extra$fromResult(
				A2(_elm_lang$core$Json_Decode$decodeString, decoder, _p3));
		},
		_elm_lang$core$Json_Decode$string);
};
var _elm_community$json_extra$Json_Decode_Extra$keys = A2(
	_elm_lang$core$Json_Decode$map,
	A2(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, acc) {
				var _p5 = _p4;
				return {ctor: '::', _0: _p5._0, _1: acc};
			}),
		{ctor: '[]'}),
	_elm_lang$core$Json_Decode$keyValuePairs(
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'})));
var _elm_community$json_extra$Json_Decode_Extra$sequenceHelp = F2(
	function (decoders, jsonValues) {
		return (!_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(jsonValues),
			_elm_lang$core$List$length(decoders))) ? _elm_lang$core$Json_Decode$fail('Number of decoders does not match number of values') : _elm_community$json_extra$Json_Decode_Extra$fromResult(
			A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$Result$map2(
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})),
				_elm_lang$core$Result$Ok(
					{ctor: '[]'}),
				A3(_elm_lang$core$List$map2, _elm_lang$core$Json_Decode$decodeValue, decoders, jsonValues)));
	});
var _elm_community$json_extra$Json_Decode_Extra$sequence = function (decoders) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		_elm_community$json_extra$Json_Decode_Extra$sequenceHelp(decoders),
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$indexedList = function (indexedDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (values) {
			return _elm_community$json_extra$Json_Decode_Extra$sequence(
				A2(
					_elm_lang$core$List$map,
					indexedDecoder,
					A2(
						_elm_lang$core$List$range,
						0,
						_elm_lang$core$List$length(values) - 1)));
		},
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$optionalField = F2(
	function (fieldName, decoder) {
		var finishDecoding = function (json) {
			var _p6 = A2(
				_elm_lang$core$Json_Decode$decodeValue,
				A2(_elm_lang$core$Json_Decode$field, fieldName, _elm_lang$core$Json_Decode$value),
				json);
			if (_p6.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Maybe$Just,
					A2(_elm_lang$core$Json_Decode$field, fieldName, decoder));
			} else {
				return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Maybe$Nothing);
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, finishDecoding, _elm_lang$core$Json_Decode$value);
	});
var _elm_community$json_extra$Json_Decode_Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Maybe$withDefault(fallback),
			_elm_lang$core$Json_Decode$maybe(decoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples = F2(
	function (keyDecoder, tuples) {
		var _p7 = tuples;
		if (_p7.ctor === '[]') {
			return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty);
		} else {
			var _p8 = A2(_elm_lang$core$Json_Decode$decodeString, keyDecoder, _p7._0._0);
			if (_p8.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					function (_p9) {
						return _elm_lang$core$Json_Decode$succeed(
							A3(_elm_lang$core$Dict$insert, _p8._0, _p7._0._1, _p9));
					},
					A2(_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples, keyDecoder, _p7._1));
			} else {
				return _elm_lang$core$Json_Decode$fail(_p8._0);
			}
		}
	});
var _elm_community$json_extra$Json_Decode_Extra$dict2 = F2(
	function (keyDecoder, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples(keyDecoder),
			_elm_lang$core$Json_Decode$keyValuePairs(valueDecoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$set = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Set$fromList,
		_elm_lang$core$Json_Decode$list(decoder));
};
var _elm_community$json_extra$Json_Decode_Extra$date = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p10) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$Date$fromString(_p10));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$andMap = _elm_lang$core$Json_Decode$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$json_extra$Json_Decode_Extra_ops = _elm_community$json_extra$Json_Decode_Extra_ops || {};
_elm_community$json_extra$Json_Decode_Extra_ops['|:'] = _elm_lang$core$Basics$flip(_elm_community$json_extra$Json_Decode_Extra$andMap);

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _elm_community$maybe_extra$Maybe_Extra$foldrValues = F2(
	function (item, list) {
		var _p0 = item;
		if (_p0.ctor === 'Nothing') {
			return list;
		} else {
			return {ctor: '::', _0: _p0._0, _1: list};
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$values = A2(
	_elm_lang$core$List$foldr,
	_elm_community$maybe_extra$Maybe_Extra$foldrValues,
	{ctor: '[]'});
var _elm_community$maybe_extra$Maybe_Extra$filter = F2(
	function (f, m) {
		var _p1 = A2(_elm_lang$core$Maybe$map, f, m);
		if ((_p1.ctor === 'Just') && (_p1._0 === true)) {
			return m;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$traverseArray = function (f) {
	var step = F2(
		function (e, acc) {
			var _p2 = f(e);
			if (_p2.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Array$push(_p2._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$Array$foldl,
		step,
		_elm_lang$core$Maybe$Just(_elm_lang$core$Array$empty));
};
var _elm_community$maybe_extra$Maybe_Extra$combineArray = _elm_community$maybe_extra$Maybe_Extra$traverseArray(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$traverse = function (f) {
	var step = F2(
		function (e, acc) {
			var _p3 = f(e);
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(_p3._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$List$foldr,
		step,
		_elm_lang$core$Maybe$Just(
			{ctor: '[]'}));
};
var _elm_community$maybe_extra$Maybe_Extra$combine = _elm_community$maybe_extra$Maybe_Extra$traverse(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$maybeToArray = function (m) {
	var _p4 = m;
	if (_p4.ctor === 'Nothing') {
		return _elm_lang$core$Array$empty;
	} else {
		return A2(_elm_lang$core$Array$repeat, 1, _p4._0);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$maybeToList = function (m) {
	var _p5 = m;
	if (_p5.ctor === 'Nothing') {
		return {ctor: '[]'};
	} else {
		return {
			ctor: '::',
			_0: _p5._0,
			_1: {ctor: '[]'}
		};
	}
};
var _elm_community$maybe_extra$Maybe_Extra$orElse = F2(
	function (ma, mb) {
		var _p6 = mb;
		if (_p6.ctor === 'Nothing') {
			return ma;
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orElseLazy = F2(
	function (fma, mb) {
		var _p7 = mb;
		if (_p7.ctor === 'Nothing') {
			return fma(
				{ctor: '_Tuple0'});
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orLazy = F2(
	function (ma, fmb) {
		var _p8 = ma;
		if (_p8.ctor === 'Nothing') {
			return fmb(
				{ctor: '_Tuple0'});
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$or = F2(
	function (ma, mb) {
		var _p9 = ma;
		if (_p9.ctor === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$prev = _elm_lang$core$Maybe$map2(_elm_lang$core$Basics$always);
var _elm_community$maybe_extra$Maybe_Extra$next = _elm_lang$core$Maybe$map2(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));
var _elm_community$maybe_extra$Maybe_Extra$andMap = _elm_lang$core$Maybe$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$maybe_extra$Maybe_Extra$unpack = F3(
	function (d, f, m) {
		var _p10 = m;
		if (_p10.ctor === 'Nothing') {
			return d(
				{ctor: '_Tuple0'});
		} else {
			return f(_p10._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$unwrap = F3(
	function (d, f, m) {
		var _p11 = m;
		if (_p11.ctor === 'Nothing') {
			return d;
		} else {
			return f(_p11._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$isJust = function (m) {
	var _p12 = m;
	if (_p12.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$isNothing = function (m) {
	var _p13 = m;
	if (_p13.ctor === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$join = function (mx) {
	var _p14 = mx;
	if (_p14.ctor === 'Just') {
		return _p14._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_community$maybe_extra$Maybe_Extra_ops = _elm_community$maybe_extra$Maybe_Extra_ops || {};
_elm_community$maybe_extra$Maybe_Extra_ops['?'] = F2(
	function (mx, x) {
		return A2(_elm_lang$core$Maybe$withDefault, x, mx);
	});

var _elm_lang$lazy$Native_Lazy = function() {

function memoize(thunk)
{
    var value;
    var isForced = false;
    return function(tuple0) {
        if (!isForced) {
            value = thunk(tuple0);
            isForced = true;
        }
        return value;
    };
}

return {
    memoize: memoize
};

}();

var _elm_lang$lazy$Lazy$force = function (_p0) {
	var _p1 = _p0;
	return _p1._0(
		{ctor: '_Tuple0'});
};
var _elm_lang$lazy$Lazy$Lazy = function (a) {
	return {ctor: 'Lazy', _0: a};
};
var _elm_lang$lazy$Lazy$lazy = function (thunk) {
	return _elm_lang$lazy$Lazy$Lazy(
		_elm_lang$lazy$Native_Lazy.memoize(thunk));
};
var _elm_lang$lazy$Lazy$map = F2(
	function (f, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p2) {
				var _p3 = _p2;
				return f(
					_elm_lang$lazy$Lazy$force(a));
			});
	});
var _elm_lang$lazy$Lazy$map2 = F3(
	function (f, a, b) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p4) {
				var _p5 = _p4;
				return A2(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b));
			});
	});
var _elm_lang$lazy$Lazy$map3 = F4(
	function (f, a, b, c) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p6) {
				var _p7 = _p6;
				return A3(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c));
			});
	});
var _elm_lang$lazy$Lazy$map4 = F5(
	function (f, a, b, c, d) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p8) {
				var _p9 = _p8;
				return A4(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d));
			});
	});
var _elm_lang$lazy$Lazy$map5 = F6(
	function (f, a, b, c, d, e) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p10) {
				var _p11 = _p10;
				return A5(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d),
					_elm_lang$lazy$Lazy$force(e));
			});
	});
var _elm_lang$lazy$Lazy$apply = F2(
	function (f, x) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p12) {
				var _p13 = _p12;
				return A2(
					_elm_lang$lazy$Lazy$force,
					f,
					_elm_lang$lazy$Lazy$force(x));
			});
	});
var _elm_lang$lazy$Lazy$andThen = F2(
	function (callback, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p14) {
				var _p15 = _p14;
				return _elm_lang$lazy$Lazy$force(
					callback(
						_elm_lang$lazy$Lazy$force(a)));
			});
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_community$parser_combinators$Combine$app = function (p) {
	var _p0 = p;
	if (_p0.ctor === 'Parser') {
		return _p0._0;
	} else {
		return _elm_lang$lazy$Lazy$force(_p0._0);
	}
};
var _elm_community$parser_combinators$Combine$InputStream = F3(
	function (a, b, c) {
		return {data: a, input: b, position: c};
	});
var _elm_community$parser_combinators$Combine$initStream = function (s) {
	return A3(_elm_community$parser_combinators$Combine$InputStream, s, s, 0);
};
var _elm_community$parser_combinators$Combine$runParser = F3(
	function (p, st, s) {
		var _p1 = A3(
			_elm_community$parser_combinators$Combine$app,
			p,
			st,
			_elm_community$parser_combinators$Combine$initStream(s));
		if (_p1._2.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		} else {
			return _elm_lang$core$Result$Err(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		}
	});
var _elm_community$parser_combinators$Combine$parse = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine$runParser,
		p,
		{ctor: '_Tuple0'});
};
var _elm_community$parser_combinators$Combine$ParseLocation = F3(
	function (a, b, c) {
		return {source: a, line: b, column: c};
	});
var _elm_community$parser_combinators$Combine$currentLocation = function (stream) {
	var find = F3(
		function (position, currentLine, lines) {
			find:
			while (true) {
				var _p2 = lines;
				if (_p2.ctor === '[]') {
					return A3(_elm_community$parser_combinators$Combine$ParseLocation, '', 1, position);
				} else {
					if (_p2._1.ctor === '[]') {
						return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p2._0, currentLine + 1, position);
					} else {
						var _p3 = _p2._0;
						var length = _elm_lang$core$String$length(_p3);
						if (_elm_lang$core$Native_Utils.cmp(position, length) > -1) {
							var _v3 = (position - length) - 1,
								_v4 = currentLine + 1,
								_v5 = _p2._1;
							position = _v3;
							currentLine = _v4;
							lines = _v5;
							continue find;
						} else {
							if (_elm_lang$core$Native_Utils.eq(currentLine, 0)) {
								return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p3, 1, position);
							} else {
								return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p3, currentLine, position - 1);
							}
						}
					}
				}
			}
		});
	return A3(
		find,
		stream.position,
		0,
		A2(_elm_lang$core$String$split, '\n', stream.data));
};
var _elm_community$parser_combinators$Combine$currentSourceLine = function (_p4) {
	return function (_) {
		return _.source;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p4));
};
var _elm_community$parser_combinators$Combine$currentLine = function (_p5) {
	return function (_) {
		return _.line;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p5));
};
var _elm_community$parser_combinators$Combine$currentColumn = function (_p6) {
	return function (_) {
		return _.column;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p6));
};
var _elm_community$parser_combinators$Combine$RecursiveParser = function (a) {
	return {ctor: 'RecursiveParser', _0: a};
};
var _elm_community$parser_combinators$Combine$lazy = function (t) {
	return _elm_community$parser_combinators$Combine$RecursiveParser(
		_elm_lang$lazy$Lazy$lazy(
			function (_p7) {
				var _p8 = _p7;
				return _elm_community$parser_combinators$Combine$app(
					t(
						{ctor: '_Tuple0'}));
			}));
};
var _elm_community$parser_combinators$Combine$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_community$parser_combinators$Combine$primitive = _elm_community$parser_combinators$Combine$Parser;
var _elm_community$parser_combinators$Combine$bimap = F3(
	function (fok, ferr, p) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p9 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
					if (_p9._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Ok(
								fok(_p9._2._0))
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Err(
								ferr(_p9._2._0))
						};
					}
				}));
	});
var _elm_community$parser_combinators$Combine$map = F2(
	function (f, p) {
		return A3(_elm_community$parser_combinators$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<$>'] = _elm_community$parser_combinators$Combine$map;
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<$'] = function (res) {
	return _elm_community$parser_combinators$Combine$map(
		_elm_lang$core$Basics$always(res));
};
var _elm_community$parser_combinators$Combine$skip = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		p);
};
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['$>'] = _elm_lang$core$Basics$flip(
	F2(
		function (x, y) {
			return A2(_elm_community$parser_combinators$Combine_ops['<$'], x, y);
		}));
var _elm_community$parser_combinators$Combine$mapError = _elm_community$parser_combinators$Combine$bimap(_elm_lang$core$Basics$identity);
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<?>'] = F2(
	function (p, m) {
		return A2(
			_elm_community$parser_combinators$Combine$mapError,
			_elm_lang$core$Basics$always(
				{
					ctor: '::',
					_0: m,
					_1: {ctor: '[]'}
				}),
			p);
	});
var _elm_community$parser_combinators$Combine$withState = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(state),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withLocation = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentLocation(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withLine = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentLine(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withColumn = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentColumn(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$andThen = F2(
	function (f, p) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p10 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
					if (_p10._2.ctor === 'Ok') {
						return A3(
							_elm_community$parser_combinators$Combine$app,
							f(_p10._2._0),
							_p10._0,
							_p10._1);
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p10._0,
							_1: _p10._1,
							_2: _elm_lang$core$Result$Err(_p10._2._0)
						};
					}
				}));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['>>='] = _elm_lang$core$Basics$flip(_elm_community$parser_combinators$Combine$andThen);
var _elm_community$parser_combinators$Combine$andMap = F2(
	function (rp, lp) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['>>='],
			lp,
			A2(_elm_lang$core$Basics$flip, _elm_community$parser_combinators$Combine$map, rp));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<*>'] = _elm_lang$core$Basics$flip(_elm_community$parser_combinators$Combine$andMap);
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<*'] = F2(
	function (lp, rp) {
		return A2(
			_elm_community$parser_combinators$Combine$andMap,
			rp,
			A2(_elm_community$parser_combinators$Combine$map, _elm_lang$core$Basics$always, lp));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['*>'] = F2(
	function (lp, rp) {
		return A2(
			_elm_community$parser_combinators$Combine$andMap,
			rp,
			A2(
				_elm_community$parser_combinators$Combine$map,
				_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
				lp));
	});
var _elm_community$parser_combinators$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(_elm_community$parser_combinators$Combine_ops['*>'], lp, p),
			rp);
	});
var _elm_community$parser_combinators$Combine$sequence = function (parsers) {
	var accumulate = F4(
		function (acc, ps, state, stream) {
			accumulate:
			while (true) {
				var _p11 = ps;
				if (_p11.ctor === '[]') {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$List$reverse(acc))
					};
				} else {
					var _p12 = A3(_elm_community$parser_combinators$Combine$app, _p11._0, state, stream);
					if (_p12._2.ctor === 'Ok') {
						var _v11 = {ctor: '::', _0: _p12._2._0, _1: acc},
							_v12 = _p11._1,
							_v13 = _p12._0,
							_v14 = _p12._1;
						acc = _v11;
						ps = _v12;
						state = _v13;
						stream = _v14;
						continue accumulate;
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p12._0,
							_1: _p12._1,
							_2: _elm_lang$core$Result$Err(_p12._2._0)
						};
					}
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A4(
					accumulate,
					{ctor: '[]'},
					parsers,
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$fail = function (m) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Err(
						{
							ctor: '::',
							_0: m,
							_1: {ctor: '[]'}
						})
				};
			}));
};
var _elm_community$parser_combinators$Combine$emptyErr = _elm_community$parser_combinators$Combine$Parser(
	F2(
		function (state, stream) {
			return {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{ctor: '[]'})
			};
		}));
var _elm_community$parser_combinators$Combine$succeed = function (res) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$putState = function (state) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (_p13, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					_elm_community$parser_combinators$Combine$succeed(
						{ctor: '_Tuple0'}),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$modifyState = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					_elm_community$parser_combinators$Combine$succeed(
						{ctor: '_Tuple0'}),
					f(state),
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$count = F2(
	function (n, p) {
		var accumulate = F2(
			function (x, acc) {
				return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _elm_community$parser_combinators$Combine$succeed(
					_elm_lang$core$List$reverse(acc)) : A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (res) {
						return A2(
							accumulate,
							x - 1,
							{ctor: '::', _0: res, _1: acc});
					},
					p);
			});
		return A2(
			accumulate,
			n,
			{ctor: '[]'});
	});
var _elm_community$parser_combinators$Combine$string = function (s) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				if (A2(_elm_lang$core$String$startsWith, s, stream.input)) {
					var len = _elm_lang$core$String$length(s);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(s)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected ',
									_elm_lang$core$Basics$toString(s)),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$parens = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('('),
	_elm_community$parser_combinators$Combine$string(')'));
var _elm_community$parser_combinators$Combine$braces = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('{'),
	_elm_community$parser_combinators$Combine$string('}'));
var _elm_community$parser_combinators$Combine$brackets = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('['),
	_elm_community$parser_combinators$Combine$string(']'));
var _elm_community$parser_combinators$Combine$regex = function (pat) {
	var pattern = A2(_elm_lang$core$String$startsWith, '^', pat) ? pat : A2(_elm_lang$core$Basics_ops['++'], '^', pat);
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p14 = A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(pattern),
					stream.input);
				if ((_p14.ctor === '::') && (_p14._1.ctor === '[]')) {
					var _p15 = _p14._0;
					var len = _elm_lang$core$String$length(_p15.match);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(_p15.match)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected input matching Regexp /',
									A2(_elm_lang$core$Basics_ops['++'], pattern, '/')),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$whitespace = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine$regex('[ \t\r\n]*'),
	'whitespace');
var _elm_community$parser_combinators$Combine$whitespace1 = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine$regex('[ \t\r\n]+'),
	'whitespace');
var _elm_community$parser_combinators$Combine$while = function (pred) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p16 = _elm_lang$core$String$uncons(stream.input);
				if (_p16.ctor === 'Just') {
					var _p17 = _p16._0._0;
					if (pred(_p17)) {
						var pos = stream.position + 1;
						var c = A2(_elm_lang$core$String$cons, _p17, '');
						var _v17 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
							_v18 = state,
							_v19 = _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p16._0._1, position: pos});
						acc = _v17;
						state = _v18;
						stream = _v19;
						continue accumulate;
					} else {
						return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
					}
				} else {
					return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p18 = A3(accumulate, '', state, stream);
				var rstate = _p18._0;
				var rstream = _p18._1;
				var res = _p18._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$end = _elm_community$parser_combinators$Combine$Parser(
	F2(
		function (state, stream) {
			return _elm_lang$core$Native_Utils.eq(stream.input, '') ? {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Ok(
					{ctor: '_Tuple0'})
			} : {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{
						ctor: '::',
						_0: 'expected end of input',
						_1: {ctor: '[]'}
					})
			};
		}));
var _elm_community$parser_combinators$Combine$lookAhead = function (p) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p19 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p19.ctor === '_Tuple3') && (_p19._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p19._0,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_p19._2._0)
					};
				} else {
					return _p19;
				}
			}));
};
var _elm_community$parser_combinators$Combine$or = F2(
	function (lp, rp) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p20 = A3(_elm_community$parser_combinators$Combine$app, lp, state, stream);
					if (_p20._2.ctor === 'Ok') {
						return _p20;
					} else {
						var _p21 = A3(_elm_community$parser_combinators$Combine$app, rp, state, stream);
						if (_p21._2.ctor === 'Ok') {
							return _p21;
						} else {
							return {
								ctor: '_Tuple3',
								_0: state,
								_1: stream,
								_2: _elm_lang$core$Result$Err(
									A2(_elm_lang$core$Basics_ops['++'], _p20._2._0, _p21._2._0))
							};
						}
					}
				}));
	});
var _elm_community$parser_combinators$Combine$choice = function (xs) {
	return A3(_elm_lang$core$List$foldr, _elm_community$parser_combinators$Combine$or, _elm_community$parser_combinators$Combine$emptyErr, xs);
};
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<|>'] = _elm_community$parser_combinators$Combine$or;
var _elm_community$parser_combinators$Combine$optional = F2(
	function (res, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			p,
			_elm_community$parser_combinators$Combine$succeed(res));
	});
var _elm_community$parser_combinators$Combine$chainl = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<|>'],
				A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (f) {
						return A2(
							_elm_community$parser_combinators$Combine$andThen,
							function (y) {
								return accumulate(
									A2(f, x, y));
							},
							p);
					},
					op),
				_elm_community$parser_combinators$Combine$succeed(x));
		};
		return A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p);
	});
var _elm_community$parser_combinators$Combine$chainr = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<|>'],
				A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (f) {
						return A2(
							_elm_community$parser_combinators$Combine$andThen,
							function (y) {
								return _elm_community$parser_combinators$Combine$succeed(
									A2(f, x, y));
							},
							A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p));
					},
					op),
				_elm_community$parser_combinators$Combine$succeed(x));
		};
		return A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p);
	});
var _elm_community$parser_combinators$Combine$maybe = function (p) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p22 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p22.ctor === '_Tuple3') && (_p22._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p22._0,
						_1: _p22._1,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$Maybe$Just(_p22._2._0))
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing)
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$many = function (p) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p23 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p23.ctor === '_Tuple3') && (_p23._2.ctor === 'Ok')) {
					var _p25 = _p23._1;
					var _p24 = _p23._0;
					if (_elm_lang$core$Native_Utils.eq(stream, _p25)) {
						return {
							ctor: '_Tuple3',
							_0: _p24,
							_1: _p25,
							_2: _elm_lang$core$List$reverse(acc)
						};
					} else {
						var _v25 = {ctor: '::', _0: _p23._2._0, _1: acc},
							_v26 = _p24,
							_v27 = _p25;
						acc = _v25;
						state = _v26;
						stream = _v27;
						continue accumulate;
					}
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$List$reverse(acc)
					};
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p26 = A3(
					accumulate,
					{ctor: '[]'},
					state,
					stream);
				var rstate = _p26._0;
				var rstream = _p26._1;
				var res = _p26._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$many1 = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			p),
		_elm_community$parser_combinators$Combine$many(p));
};
var _elm_community$parser_combinators$Combine$skipMany1 = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_elm_community$parser_combinators$Combine$many1(
			_elm_community$parser_combinators$Combine$skip(p)));
};
var _elm_community$parser_combinators$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				p),
			_elm_community$parser_combinators$Combine$many(
				A2(_elm_community$parser_combinators$Combine_ops['*>'], sep, p)));
	});
var _elm_community$parser_combinators$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			A2(_elm_community$parser_combinators$Combine$sepBy1, sep, p),
			_elm_community$parser_combinators$Combine$succeed(
				{ctor: '[]'}));
	});
var _elm_community$parser_combinators$Combine$sepEndBy1 = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(_elm_community$parser_combinators$Combine$sepBy1, sep, p),
			_elm_community$parser_combinators$Combine$maybe(sep));
	});
var _elm_community$parser_combinators$Combine$sepEndBy = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			A2(_elm_community$parser_combinators$Combine$sepEndBy1, sep, p),
			_elm_community$parser_combinators$Combine$succeed(
				{ctor: '[]'}));
	});
var _elm_community$parser_combinators$Combine$skipMany = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_elm_community$parser_combinators$Combine$many(
			_elm_community$parser_combinators$Combine$skip(p)));
};
var _elm_community$parser_combinators$Combine$manyTill = F2(
	function (p, end) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _p27 = A3(_elm_community$parser_combinators$Combine$app, end, state, stream);
					if (_p27._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p27._0,
							_1: _p27._1,
							_2: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc))
						};
					} else {
						var _p28 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
						if ((_p28.ctor === '_Tuple3') && (_p28._2.ctor === 'Ok')) {
							var _v30 = {ctor: '::', _0: _p28._2._0, _1: acc},
								_v31 = _p28._0,
								_v32 = _p28._1;
							acc = _v30;
							state = _v31;
							stream = _v32;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p27._0,
								_1: _p27._1,
								_2: _elm_lang$core$Result$Err(_p27._2._0)
							};
						}
					}
				}
			});
		return _elm_community$parser_combinators$Combine$Parser(
			accumulate(
				{ctor: '[]'}));
	});

var _elm_community$parser_combinators$Combine_Char$crlf = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	_elm_lang$core$Native_Utils.chr('\n'),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine$regex('\r\n'),
		'expected crlf'));
var _elm_community$parser_combinators$Combine_Char$satisfy = function (pred) {
	return _elm_community$parser_combinators$Combine$primitive(
		F2(
			function (state, stream) {
				var message = 'could not satisfy predicate';
				var _p0 = _elm_lang$core$String$uncons(stream.input);
				if (_p0.ctor === 'Just') {
					var _p1 = _p0._0._0;
					return pred(_p1) ? {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p0._0._1, position: stream.position + 1}),
						_2: _elm_lang$core$Result$Ok(_p1)
					} : {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine_Char$char = function (c) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(c)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected ',
			_elm_lang$core$Basics$toString(c)));
};
var _elm_community$parser_combinators$Combine_Char$anyChar = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		_elm_lang$core$Basics$always(true)),
	'expected any character');
var _elm_community$parser_combinators$Combine_Char$oneOf = function (cs) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected one of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _elm_community$parser_combinators$Combine_Char$noneOf = function (cs) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			function (_p2) {
				return !A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2);
			}),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected none of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _elm_community$parser_combinators$Combine_Char$space = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr(' '))),
	'expected space');
var _elm_community$parser_combinators$Combine_Char$tab = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\t'))),
	'expected tab');
var _elm_community$parser_combinators$Combine_Char$newline = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\n'))),
	'expected newline');
var _elm_community$parser_combinators$Combine_Char$eol = A2(_elm_community$parser_combinators$Combine_ops['<|>'], _elm_community$parser_combinators$Combine_Char$newline, _elm_community$parser_combinators$Combine_Char$crlf);
var _elm_community$parser_combinators$Combine_Char$lower = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
	'expected a lowercase character');
var _elm_community$parser_combinators$Combine_Char$upper = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
	'expected an uppercase character');
var _elm_community$parser_combinators$Combine_Char$digit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
	'expected a digit');
var _elm_community$parser_combinators$Combine_Char$octDigit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
	'expected an octal digit');
var _elm_community$parser_combinators$Combine_Char$hexDigit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
	'expected a hexadecimal digit');

var _elm_community$parser_combinators$Combine_Num$digit = function () {
	var toDigit = function (c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'));
	};
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		toDigit,
		A2(_elm_community$parser_combinators$Combine_ops['<?>'], _elm_community$parser_combinators$Combine_Char$digit, 'expected a digit'));
}();
var _elm_community$parser_combinators$Combine_Num$sign = A2(
	_elm_community$parser_combinators$Combine$optional,
	1,
	_elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: A2(
				_elm_community$parser_combinators$Combine_ops['<$'],
				1,
				_elm_community$parser_combinators$Combine$string('+')),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_community$parser_combinators$Combine_ops['<$'],
					-1,
					_elm_community$parser_combinators$Combine$string('-')),
				_1: {ctor: '[]'}
			}
		}));
var _elm_community$parser_combinators$Combine_Num$unwrap = F2(
	function (f, s) {
		var _p0 = f(s);
		if (_p0.ctor === 'Ok') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'Combine.Num',
				{
					start: {line: 23, column: 5},
					end: {line: 28, column: 83}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'impossible state in Combine.Num.unwrap: ',
					_elm_lang$core$Basics$toString(_p0._0)));
		}
	});
var _elm_community$parser_combinators$Combine_Num$toInt = _elm_community$parser_combinators$Combine_Num$unwrap(_elm_lang$core$String$toInt);
var _elm_community$parser_combinators$Combine_Num$int = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		F2(
			function (x, y) {
				return x * y;
			}),
		_elm_community$parser_combinators$Combine_Num$sign),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_community$parser_combinators$Combine_Num$toInt,
			_elm_community$parser_combinators$Combine$regex('(0|[1-9][0-9]*)')),
		'expected an integer'));
var _elm_community$parser_combinators$Combine_Num$toFloat = _elm_community$parser_combinators$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
var _elm_community$parser_combinators$Combine_Num$float = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		function (_p2) {
			return F2(
				function (x, y) {
					return x * y;
				})(
				_elm_lang$core$Basics$toFloat(_p2));
		},
		_elm_community$parser_combinators$Combine_Num$sign),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_community$parser_combinators$Combine_Num$toFloat,
			_elm_community$parser_combinators$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)')),
		'expected a float'));

var _elm_community$result_extra$Result_Extra$merge = function (r) {
	var _p0 = r;
	if (_p0.ctor === 'Ok') {
		return _p0._0;
	} else {
		return _p0._0;
	}
};
var _elm_community$result_extra$Result_Extra$orElse = F2(
	function (ra, rb) {
		var _p1 = rb;
		if (_p1.ctor === 'Err') {
			return ra;
		} else {
			return rb;
		}
	});
var _elm_community$result_extra$Result_Extra$orElseLazy = F2(
	function (fra, rb) {
		var _p2 = rb;
		if (_p2.ctor === 'Err') {
			return fra(
				{ctor: '_Tuple0'});
		} else {
			return rb;
		}
	});
var _elm_community$result_extra$Result_Extra$orLazy = F2(
	function (ra, frb) {
		var _p3 = ra;
		if (_p3.ctor === 'Err') {
			return frb(
				{ctor: '_Tuple0'});
		} else {
			return ra;
		}
	});
var _elm_community$result_extra$Result_Extra$or = F2(
	function (ra, rb) {
		var _p4 = ra;
		if (_p4.ctor === 'Err') {
			return rb;
		} else {
			return ra;
		}
	});
var _elm_community$result_extra$Result_Extra$andMap = F2(
	function (ra, rb) {
		var _p5 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p5._1.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p5._1._0);
		} else {
			return A2(_elm_lang$core$Result$map, _p5._1._0, _p5._0);
		}
	});
var _elm_community$result_extra$Result_Extra$singleton = _elm_lang$core$Result$Ok;
var _elm_community$result_extra$Result_Extra$combine = A2(
	_elm_lang$core$List$foldr,
	_elm_lang$core$Result$map2(
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			})),
	_elm_lang$core$Result$Ok(
		{ctor: '[]'}));
var _elm_community$result_extra$Result_Extra$mapBoth = F3(
	function (errFunc, okFunc, result) {
		var _p6 = result;
		if (_p6.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				okFunc(_p6._0));
		} else {
			return _elm_lang$core$Result$Err(
				errFunc(_p6._0));
		}
	});
var _elm_community$result_extra$Result_Extra$unpack = F3(
	function (errFunc, okFunc, result) {
		var _p7 = result;
		if (_p7.ctor === 'Ok') {
			return okFunc(_p7._0);
		} else {
			return errFunc(_p7._0);
		}
	});
var _elm_community$result_extra$Result_Extra$unwrap = F3(
	function (defaultValue, okFunc, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return okFunc(_p8._0);
		} else {
			return defaultValue;
		}
	});
var _elm_community$result_extra$Result_Extra$extract = F2(
	function (f, x) {
		var _p9 = x;
		if (_p9.ctor === 'Ok') {
			return _p9._0;
		} else {
			return f(_p9._0);
		}
	});
var _elm_community$result_extra$Result_Extra$isErr = function (x) {
	var _p10 = x;
	if (_p10.ctor === 'Ok') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$result_extra$Result_Extra$isOk = function (x) {
	var _p11 = x;
	if (_p11.ctor === 'Ok') {
		return true;
	} else {
		return false;
	}
};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Lazy$lazy3 = _elm_lang$virtual_dom$VirtualDom$lazy3;
var _elm_lang$html$Html_Lazy$lazy2 = _elm_lang$virtual_dom$VirtualDom$lazy2;
var _elm_lang$html$Html_Lazy$lazy = _elm_lang$virtual_dom$VirtualDom$lazy;

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_lang$keyboard$Keyboard$onSelfMsg = F3(
	function (router, _p0, state) {
		var _p1 = _p0;
		var _p2 = A2(_elm_lang$core$Dict$get, _p1.category, state);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p1.keyCode));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				},
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p2._0.taggers)));
		}
	});
var _elm_lang$keyboard$Keyboard_ops = _elm_lang$keyboard$Keyboard_ops || {};
_elm_lang$keyboard$Keyboard_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p4) {
				return task2;
			},
			task1);
	});
var _elm_lang$keyboard$Keyboard$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$keyboard$Keyboard$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p5 = maybeValues;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p5._0});
		}
	});
var _elm_lang$keyboard$Keyboard$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p6 = subs;
			if (_p6.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p6._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p6._0._0,
					_elm_lang$keyboard$Keyboard$categorizeHelpHelp(_p6._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$keyboard$Keyboard$categorize = function (subs) {
	return A2(_elm_lang$keyboard$Keyboard$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$keyboard$Keyboard$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$keyboard$Keyboard$subscription = _elm_lang$core$Native_Platform.leaf('Keyboard');
var _elm_lang$keyboard$Keyboard$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$keyboard$Keyboard$Msg = F2(
	function (a, b) {
		return {category: a, keyCode: b};
	});
var _elm_lang$keyboard$Keyboard$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(
								A3(
									_elm_lang$dom$Dom_LowLevel$onDocument,
									category,
									_elm_lang$keyboard$Keyboard$keyCode,
									function (_p7) {
										return A2(
											_elm_lang$core$Platform$sendToSelf,
											router,
											A2(_elm_lang$keyboard$Keyboard$Msg, category, _p7));
									})));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p8, taggers, task) {
				var _p9 = _p8;
				return A2(
					_elm_lang$core$Task$map,
					A2(
						_elm_lang$core$Dict$insert,
						category,
						A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, _p9.pid)),
					task);
			});
		var leftStep = F3(
			function (category, _p10, task) {
				var _p11 = _p10;
				return A2(
					_elm_lang$keyboard$Keyboard_ops['&>'],
					_elm_lang$core$Process$kill(_p11.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$keyboard$Keyboard$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$keyboard$Keyboard$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$keyboard$Keyboard$presses = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keypress', tagger));
};
var _elm_lang$keyboard$Keyboard$downs = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keydown', tagger));
};
var _elm_lang$keyboard$Keyboard$ups = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keyup', tagger));
};
var _elm_lang$keyboard$Keyboard$subMap = F2(
	function (func, _p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$keyboard$Keyboard$MySub,
			_p13._0,
			function (_p14) {
				return func(
					_p13._1(_p14));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Keyboard'] = {pkg: 'elm-lang/keyboard', init: _elm_lang$keyboard$Keyboard$init, onEffects: _elm_lang$keyboard$Keyboard$onEffects, onSelfMsg: _elm_lang$keyboard$Keyboard$onSelfMsg, tag: 'sub', subMap: _elm_lang$keyboard$Keyboard$subMap};

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _elm_lang$websocket$Native_WebSocket = function() {

function open(url, settings)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			var socket = new WebSocket(url);
			socket.elm_web_socket = true;
		}
		catch(err)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({
				ctor: err.name === 'SecurityError' ? 'BadSecurity' : 'BadArgs',
				_0: err.message
			}));
		}

		socket.addEventListener("open", function(event) {
			callback(_elm_lang$core$Native_Scheduler.succeed(socket));
		});

		socket.addEventListener("message", function(event) {
			_elm_lang$core$Native_Scheduler.rawSpawn(A2(settings.onMessage, socket, event.data));
		});

		socket.addEventListener("close", function(event) {
			_elm_lang$core$Native_Scheduler.rawSpawn(settings.onClose({
				code: event.code,
				reason: event.reason,
				wasClean: event.wasClean
			}));
		});

		return function()
		{
			if (socket && socket.close)
			{
				socket.close();
			}
		};
	});
}

function send(socket, string)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var result =
			socket.readyState === WebSocket.OPEN
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just({ ctor: 'NotOpen' });

		try
		{
			socket.send(string);
		}
		catch(err)
		{
			result = _elm_lang$core$Maybe$Just({ ctor: 'BadString' });
		}

		callback(_elm_lang$core$Native_Scheduler.succeed(result));
	});
}

function close(code, reason, socket)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		try
		{
			socket.close(code, reason);
		}
		catch(err)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail(_elm_lang$core$Maybe$Just({
				ctor: err.name === 'SyntaxError' ? 'BadReason' : 'BadCode'
			})));
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Maybe$Nothing));
	});
}

function bytesQueued(socket)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		callback(_elm_lang$core$Native_Scheduler.succeed(socket.bufferedAmount));
	});
}

return {
	open: F2(open),
	send: F2(send),
	close: F3(close),
	bytesQueued: bytesQueued
};

}();

var _elm_lang$websocket$WebSocket_LowLevel$bytesQueued = _elm_lang$websocket$Native_WebSocket.bytesQueued;
var _elm_lang$websocket$WebSocket_LowLevel$send = _elm_lang$websocket$Native_WebSocket.send;
var _elm_lang$websocket$WebSocket_LowLevel$closeWith = _elm_lang$websocket$Native_WebSocket.close;
var _elm_lang$websocket$WebSocket_LowLevel$close = function (socket) {
	return A2(
		_elm_lang$core$Task$map,
		_elm_lang$core$Basics$always(
			{ctor: '_Tuple0'}),
		A3(_elm_lang$websocket$WebSocket_LowLevel$closeWith, 1000, '', socket));
};
var _elm_lang$websocket$WebSocket_LowLevel$open = _elm_lang$websocket$Native_WebSocket.open;
var _elm_lang$websocket$WebSocket_LowLevel$Settings = F2(
	function (a, b) {
		return {onMessage: a, onClose: b};
	});
var _elm_lang$websocket$WebSocket_LowLevel$WebSocket = {ctor: 'WebSocket'};
var _elm_lang$websocket$WebSocket_LowLevel$BadArgs = {ctor: 'BadArgs'};
var _elm_lang$websocket$WebSocket_LowLevel$BadSecurity = {ctor: 'BadSecurity'};
var _elm_lang$websocket$WebSocket_LowLevel$BadReason = {ctor: 'BadReason'};
var _elm_lang$websocket$WebSocket_LowLevel$BadCode = {ctor: 'BadCode'};
var _elm_lang$websocket$WebSocket_LowLevel$BadString = {ctor: 'BadString'};
var _elm_lang$websocket$WebSocket_LowLevel$NotOpen = {ctor: 'NotOpen'};

var _elm_lang$websocket$WebSocket$closeConnection = function (connection) {
	var _p0 = connection;
	if (_p0.ctor === 'Opening') {
		return _elm_lang$core$Process$kill(_p0._1);
	} else {
		return _elm_lang$websocket$WebSocket_LowLevel$close(_p0._0);
	}
};
var _elm_lang$websocket$WebSocket$after = function (backoff) {
	return (_elm_lang$core$Native_Utils.cmp(backoff, 1) < 0) ? _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'}) : _elm_lang$core$Process$sleep(
		_elm_lang$core$Basics$toFloat(
			10 * Math.pow(2, backoff)));
};
var _elm_lang$websocket$WebSocket$removeQueue = F2(
	function (name, state) {
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				queues: A2(_elm_lang$core$Dict$remove, name, state.queues)
			});
	});
var _elm_lang$websocket$WebSocket$updateSocket = F3(
	function (name, connection, state) {
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				sockets: A3(_elm_lang$core$Dict$insert, name, connection, state.sockets)
			});
	});
var _elm_lang$websocket$WebSocket$add = F2(
	function (value, maybeList) {
		var _p1 = maybeList;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p1._0});
		}
	});
var _elm_lang$websocket$WebSocket$buildSubDict = F2(
	function (subs, dict) {
		buildSubDict:
		while (true) {
			var _p2 = subs;
			if (_p2.ctor === '[]') {
				return dict;
			} else {
				if (_p2._0.ctor === 'Listen') {
					var _v3 = _p2._1,
						_v4 = A3(
						_elm_lang$core$Dict$update,
						_p2._0._0,
						_elm_lang$websocket$WebSocket$add(_p2._0._1),
						dict);
					subs = _v3;
					dict = _v4;
					continue buildSubDict;
				} else {
					var _v5 = _p2._1,
						_v6 = A3(
						_elm_lang$core$Dict$update,
						_p2._0._0,
						function (_p3) {
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Maybe$withDefault,
									{ctor: '[]'},
									_p3));
						},
						dict);
					subs = _v5;
					dict = _v6;
					continue buildSubDict;
				}
			}
		}
	});
var _elm_lang$websocket$WebSocket_ops = _elm_lang$websocket$WebSocket_ops || {};
_elm_lang$websocket$WebSocket_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p4) {
				return t2;
			},
			t1);
	});
var _elm_lang$websocket$WebSocket$sendMessagesHelp = F3(
	function (cmds, socketsDict, queuesDict) {
		sendMessagesHelp:
		while (true) {
			var _p5 = cmds;
			if (_p5.ctor === '[]') {
				return _elm_lang$core$Task$succeed(queuesDict);
			} else {
				var _p9 = _p5._1;
				var _p8 = _p5._0._0;
				var _p7 = _p5._0._1;
				var _p6 = A2(_elm_lang$core$Dict$get, _p8, socketsDict);
				if ((_p6.ctor === 'Just') && (_p6._0.ctor === 'Connected')) {
					return A2(
						_elm_lang$websocket$WebSocket_ops['&>'],
						A2(_elm_lang$websocket$WebSocket_LowLevel$send, _p6._0._0, _p7),
						A3(_elm_lang$websocket$WebSocket$sendMessagesHelp, _p9, socketsDict, queuesDict));
				} else {
					var _v9 = _p9,
						_v10 = socketsDict,
						_v11 = A3(
						_elm_lang$core$Dict$update,
						_p8,
						_elm_lang$websocket$WebSocket$add(_p7),
						queuesDict);
					cmds = _v9;
					socketsDict = _v10;
					queuesDict = _v11;
					continue sendMessagesHelp;
				}
			}
		}
	});
var _elm_lang$websocket$WebSocket$subscription = _elm_lang$core$Native_Platform.leaf('WebSocket');
var _elm_lang$websocket$WebSocket$command = _elm_lang$core$Native_Platform.leaf('WebSocket');
var _elm_lang$websocket$WebSocket$State = F3(
	function (a, b, c) {
		return {sockets: a, queues: b, subs: c};
	});
var _elm_lang$websocket$WebSocket$init = _elm_lang$core$Task$succeed(
	A3(_elm_lang$websocket$WebSocket$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$websocket$WebSocket$Send = F2(
	function (a, b) {
		return {ctor: 'Send', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$send = F2(
	function (url, message) {
		return _elm_lang$websocket$WebSocket$command(
			A2(_elm_lang$websocket$WebSocket$Send, url, message));
	});
var _elm_lang$websocket$WebSocket$cmdMap = F2(
	function (_p11, _p10) {
		var _p12 = _p10;
		return A2(_elm_lang$websocket$WebSocket$Send, _p12._0, _p12._1);
	});
var _elm_lang$websocket$WebSocket$KeepAlive = function (a) {
	return {ctor: 'KeepAlive', _0: a};
};
var _elm_lang$websocket$WebSocket$keepAlive = function (url) {
	return _elm_lang$websocket$WebSocket$subscription(
		_elm_lang$websocket$WebSocket$KeepAlive(url));
};
var _elm_lang$websocket$WebSocket$Listen = F2(
	function (a, b) {
		return {ctor: 'Listen', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$listen = F2(
	function (url, tagger) {
		return _elm_lang$websocket$WebSocket$subscription(
			A2(_elm_lang$websocket$WebSocket$Listen, url, tagger));
	});
var _elm_lang$websocket$WebSocket$subMap = F2(
	function (func, sub) {
		var _p13 = sub;
		if (_p13.ctor === 'Listen') {
			return A2(
				_elm_lang$websocket$WebSocket$Listen,
				_p13._0,
				function (_p14) {
					return func(
						_p13._1(_p14));
				});
		} else {
			return _elm_lang$websocket$WebSocket$KeepAlive(_p13._0);
		}
	});
var _elm_lang$websocket$WebSocket$Connected = function (a) {
	return {ctor: 'Connected', _0: a};
};
var _elm_lang$websocket$WebSocket$Opening = F2(
	function (a, b) {
		return {ctor: 'Opening', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$BadOpen = function (a) {
	return {ctor: 'BadOpen', _0: a};
};
var _elm_lang$websocket$WebSocket$GoodOpen = F2(
	function (a, b) {
		return {ctor: 'GoodOpen', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$Die = function (a) {
	return {ctor: 'Die', _0: a};
};
var _elm_lang$websocket$WebSocket$Receive = F2(
	function (a, b) {
		return {ctor: 'Receive', _0: a, _1: b};
	});
var _elm_lang$websocket$WebSocket$open = F2(
	function (name, router) {
		return A2(
			_elm_lang$websocket$WebSocket_LowLevel$open,
			name,
			{
				onMessage: F2(
					function (_p15, msg) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_elm_lang$websocket$WebSocket$Receive, name, msg));
					}),
				onClose: function (details) {
					return A2(
						_elm_lang$core$Platform$sendToSelf,
						router,
						_elm_lang$websocket$WebSocket$Die(name));
				}
			});
	});
var _elm_lang$websocket$WebSocket$attemptOpen = F3(
	function (router, backoff, name) {
		var badOpen = function (_p16) {
			return A2(
				_elm_lang$core$Platform$sendToSelf,
				router,
				_elm_lang$websocket$WebSocket$BadOpen(name));
		};
		var goodOpen = function (ws) {
			return A2(
				_elm_lang$core$Platform$sendToSelf,
				router,
				A2(_elm_lang$websocket$WebSocket$GoodOpen, name, ws));
		};
		var actuallyAttemptOpen = A2(
			_elm_lang$core$Task$onError,
			badOpen,
			A2(
				_elm_lang$core$Task$andThen,
				goodOpen,
				A2(_elm_lang$websocket$WebSocket$open, name, router)));
		return _elm_lang$core$Process$spawn(
			A2(
				_elm_lang$websocket$WebSocket_ops['&>'],
				_elm_lang$websocket$WebSocket$after(backoff),
				actuallyAttemptOpen));
	});
var _elm_lang$websocket$WebSocket$onEffects = F4(
	function (router, cmds, subs, state) {
		var newSubs = A2(_elm_lang$websocket$WebSocket$buildSubDict, subs, _elm_lang$core$Dict$empty);
		var cleanup = function (newQueues) {
			var rightStep = F3(
				function (name, connection, getNewSockets) {
					return A2(
						_elm_lang$websocket$WebSocket_ops['&>'],
						_elm_lang$websocket$WebSocket$closeConnection(connection),
						getNewSockets);
				});
			var bothStep = F4(
				function (name, _p17, connection, getNewSockets) {
					return A2(
						_elm_lang$core$Task$map,
						A2(_elm_lang$core$Dict$insert, name, connection),
						getNewSockets);
				});
			var leftStep = F3(
				function (name, _p18, getNewSockets) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (newSockets) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (pid) {
									return _elm_lang$core$Task$succeed(
										A3(
											_elm_lang$core$Dict$insert,
											name,
											A2(_elm_lang$websocket$WebSocket$Opening, 0, pid),
											newSockets));
								},
								A3(_elm_lang$websocket$WebSocket$attemptOpen, router, 0, name));
						},
						getNewSockets);
				});
			var newEntries = A2(
				_elm_lang$core$Dict$union,
				newQueues,
				A2(
					_elm_lang$core$Dict$map,
					F2(
						function (k, v) {
							return {ctor: '[]'};
						}),
					newSubs));
			var collectNewSockets = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newEntries,
				state.sockets,
				_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
			return A2(
				_elm_lang$core$Task$andThen,
				function (newSockets) {
					return _elm_lang$core$Task$succeed(
						A3(_elm_lang$websocket$WebSocket$State, newSockets, newQueues, newSubs));
				},
				collectNewSockets);
		};
		var sendMessagesGetNewQueues = A3(_elm_lang$websocket$WebSocket$sendMessagesHelp, cmds, state.sockets, state.queues);
		return A2(_elm_lang$core$Task$andThen, cleanup, sendMessagesGetNewQueues);
	});
var _elm_lang$websocket$WebSocket$onSelfMsg = F3(
	function (router, selfMsg, state) {
		var _p19 = selfMsg;
		switch (_p19.ctor) {
			case 'Receive':
				var sends = A2(
					_elm_lang$core$List$map,
					function (tagger) {
						return A2(
							_elm_lang$core$Platform$sendToApp,
							router,
							tagger(_p19._1));
					},
					A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '[]'},
						A2(_elm_lang$core$Dict$get, _p19._0, state.subs)));
				return A2(
					_elm_lang$websocket$WebSocket_ops['&>'],
					_elm_lang$core$Task$sequence(sends),
					_elm_lang$core$Task$succeed(state));
			case 'Die':
				var _p21 = _p19._0;
				var _p20 = A2(_elm_lang$core$Dict$get, _p21, state.sockets);
				if (_p20.ctor === 'Nothing') {
					return _elm_lang$core$Task$succeed(state);
				} else {
					return A2(
						_elm_lang$core$Task$andThen,
						function (pid) {
							return _elm_lang$core$Task$succeed(
								A3(
									_elm_lang$websocket$WebSocket$updateSocket,
									_p21,
									A2(_elm_lang$websocket$WebSocket$Opening, 0, pid),
									state));
						},
						A3(_elm_lang$websocket$WebSocket$attemptOpen, router, 0, _p21));
				}
			case 'GoodOpen':
				var _p24 = _p19._1;
				var _p23 = _p19._0;
				var _p22 = A2(_elm_lang$core$Dict$get, _p23, state.queues);
				if (_p22.ctor === 'Nothing') {
					return _elm_lang$core$Task$succeed(
						A3(
							_elm_lang$websocket$WebSocket$updateSocket,
							_p23,
							_elm_lang$websocket$WebSocket$Connected(_p24),
							state));
				} else {
					return A3(
						_elm_lang$core$List$foldl,
						F2(
							function (msg, task) {
								return A2(
									_elm_lang$websocket$WebSocket_ops['&>'],
									A2(_elm_lang$websocket$WebSocket_LowLevel$send, _p24, msg),
									task);
							}),
						_elm_lang$core$Task$succeed(
							A2(
								_elm_lang$websocket$WebSocket$removeQueue,
								_p23,
								A3(
									_elm_lang$websocket$WebSocket$updateSocket,
									_p23,
									_elm_lang$websocket$WebSocket$Connected(_p24),
									state))),
						_p22._0);
				}
			default:
				var _p27 = _p19._0;
				var _p25 = A2(_elm_lang$core$Dict$get, _p27, state.sockets);
				if (_p25.ctor === 'Nothing') {
					return _elm_lang$core$Task$succeed(state);
				} else {
					if (_p25._0.ctor === 'Opening') {
						var _p26 = _p25._0._0;
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$websocket$WebSocket$updateSocket,
										_p27,
										A2(_elm_lang$websocket$WebSocket$Opening, _p26 + 1, pid),
										state));
							},
							A3(_elm_lang$websocket$WebSocket$attemptOpen, router, _p26 + 1, _p27));
					} else {
						return _elm_lang$core$Task$succeed(state);
					}
				}
		}
	});
_elm_lang$core$Native_Platform.effectManagers['WebSocket'] = {pkg: 'elm-lang/websocket', init: _elm_lang$websocket$WebSocket$init, onEffects: _elm_lang$websocket$WebSocket$onEffects, onSelfMsg: _elm_lang$websocket$WebSocket$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$websocket$WebSocket$cmdMap, subMap: _elm_lang$websocket$WebSocket$subMap};

var _krisajenkins$elm_exts$Exts_Html_Bootstrap$video = F2(
	function (ratio, url) {
		var ratioClass = function () {
			var _p0 = ratio;
			if (_p0.ctor === 'SixteenByNine') {
				return 'embed-responsive-16by9';
			} else {
				return 'embed-responsive-4by3';
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('About'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('embed-responsive'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$iframe,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('embed-responsive-item'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$src(url),
										_1: {ctor: '[]'}
									}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$badge = _elm_lang$html$Html$span(
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('badge'),
		_1: {ctor: '[]'}
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$well = _elm_lang$html$Html$div(
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('well'),
		_1: {ctor: '[]'}
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$jumbotron = _elm_lang$html$Html$div(
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('jumbotron'),
		_1: {ctor: '[]'}
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$clearfix = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('clearfix'),
		_1: {ctor: '[]'}
	},
	{ctor: '[]'});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty = A2(
	_elm_lang$html$Html$span,
	{ctor: '[]'},
	{ctor: '[]'});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$formGroup = _elm_lang$html$Html$div(
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('form-group'),
		_1: {ctor: '[]'}
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$row = _elm_lang$html$Html$div(
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('row'),
		_1: {ctor: '[]'}
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$twoColumns = F2(
	function (left, right) {
		return _krisajenkins$elm_exts$Exts_Html_Bootstrap$row(
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col-xs-6'),
						_1: {ctor: '[]'}
					},
					left),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('col-xs-6'),
							_1: {ctor: '[]'}
						},
						right),
					_1: {ctor: '[]'}
				}
			});
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$containerFluid = _elm_lang$html$Html$div(
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('container-fluid'),
		_1: {ctor: '[]'}
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$container = _elm_lang$html$Html$div(
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('container'),
		_1: {ctor: '[]'}
	});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$stylesheet = A3(
	_elm_lang$html$Html$node,
	'link',
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$rel('stylesheet'),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$href('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'),
			_1: {ctor: '[]'}
		}
	},
	{ctor: '[]'});
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$FourByThree = {ctor: 'FourByThree'};
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$SixteenByNine = {ctor: 'SixteenByNine'};
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$Left = {ctor: 'Left'};
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$Bottom = {ctor: 'Bottom'};
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$Right = {ctor: 'Right'};
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$Top = {ctor: 'Top'};
var _krisajenkins$elm_exts$Exts_Html_Bootstrap$popover = F5(
	function (direction, isShown, styles, title, body) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'popover fade', _1: true},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'in', _1: isShown},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: _elm_lang$core$Native_Utils.eq(direction, _krisajenkins$elm_exts$Exts_Html_Bootstrap$Top)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'right',
										_1: _elm_lang$core$Native_Utils.eq(direction, _krisajenkins$elm_exts$Exts_Html_Bootstrap$Right)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'bottom',
											_1: _elm_lang$core$Native_Utils.eq(direction, _krisajenkins$elm_exts$Exts_Html_Bootstrap$Bottom)
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'left',
												_1: _elm_lang$core$Native_Utils.eq(direction, _krisajenkins$elm_exts$Exts_Html_Bootstrap$Left)
											},
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						A2(
							_elm_lang$core$Basics_ops['++'],
							styles,
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
								_1: {ctor: '[]'}
							})),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('arrow'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: function () {
						var _p1 = title;
						if (_p1.ctor === 'Just') {
							return A2(
								_elm_lang$html$Html$h3,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('popover-title'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(_p1._0),
									_1: {ctor: '[]'}
								});
						} else {
							return _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty;
						}
					}(),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('popover-content'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: body,
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	});

var _krisajenkins$elm_exts$Exts_Maybe$oneOf = A2(
	_elm_lang$core$List$foldl,
	F2(
		function (x, acc) {
			return (!_elm_lang$core$Native_Utils.eq(acc, _elm_lang$core$Maybe$Nothing)) ? acc : x;
		}),
	_elm_lang$core$Maybe$Nothing);
var _krisajenkins$elm_exts$Exts_Maybe$when = F2(
	function (test, value) {
		return test ? _elm_lang$core$Maybe$Just(value) : _elm_lang$core$Maybe$Nothing;
	});
var _krisajenkins$elm_exts$Exts_Maybe$validate = F2(
	function (predicate, value) {
		return predicate(value) ? _elm_lang$core$Maybe$Just(value) : _elm_lang$core$Maybe$Nothing;
	});
var _krisajenkins$elm_exts$Exts_Maybe$matches = function (predicate) {
	return _elm_lang$core$Maybe$andThen(
		_krisajenkins$elm_exts$Exts_Maybe$validate(predicate));
};
var _krisajenkins$elm_exts$Exts_Maybe$maybeDefault = F2(
	function ($default, x) {
		var _p0 = x;
		if (_p0.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(_p0._0);
		} else {
			return _elm_lang$core$Maybe$Just($default);
		}
	});
var _krisajenkins$elm_exts$Exts_Maybe$join = F3(
	function (f, left, right) {
		var _p1 = {ctor: '_Tuple2', _0: left, _1: right};
		if (((_p1.ctor === '_Tuple2') && (_p1._0.ctor === 'Just')) && (_p1._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(f, _p1._0._0, _p1._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _krisajenkins$elm_exts$Exts_Maybe$catMaybes = _elm_lang$core$List$filterMap(_elm_lang$core$Basics$identity);
var _krisajenkins$elm_exts$Exts_Maybe$mappend = F2(
	function (a, b) {
		var _p2 = {ctor: '_Tuple2', _0: a, _1: b};
		if (_p2._0.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p2._1.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: _p2._0._0, _1: _p2._1._0});
			}
		}
	});
var _krisajenkins$elm_exts$Exts_Maybe$maybe = F2(
	function ($default, f) {
		return function (_p3) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				$default,
				A2(_elm_lang$core$Maybe$map, f, _p3));
		};
	});
var _krisajenkins$elm_exts$Exts_Maybe$isJust = function (x) {
	var _p4 = x;
	if (_p4.ctor === 'Just') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$elm_exts$Exts_Maybe$isNothing = function (_p5) {
	return !_krisajenkins$elm_exts$Exts_Maybe$isJust(_p5);
};

var _krisajenkins$elm_dialog$Dialog$map = F2(
	function (f, config) {
		return {
			closeMessage: A2(_elm_lang$core$Maybe$map, f, config.closeMessage),
			containerClass: config.containerClass,
			header: A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$html$Html$map(f),
				config.header),
			body: A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$html$Html$map(f),
				config.body),
			footer: A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$html$Html$map(f),
				config.footer)
		};
	});
var _krisajenkins$elm_dialog$Dialog$mapMaybe = function (_p0) {
	return _elm_lang$core$Maybe$map(
		_krisajenkins$elm_dialog$Dialog$map(_p0));
};
var _krisajenkins$elm_dialog$Dialog$backdrop = function (config) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$classList(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'modal-backdrop in',
						_1: _krisajenkins$elm_exts$Exts_Maybe$isJust(config)
					},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'});
};
var _krisajenkins$elm_dialog$Dialog$wrapFooter = function (footer) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('modal-footer'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: footer,
			_1: {ctor: '[]'}
		});
};
var _krisajenkins$elm_dialog$Dialog$wrapBody = function (body) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('modal-body'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: body,
			_1: {ctor: '[]'}
		});
};
var _krisajenkins$elm_dialog$Dialog$closeButton = function (closeMessage) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('close'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(closeMessage),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('x'),
			_1: {ctor: '[]'}
		});
};
var _krisajenkins$elm_dialog$Dialog$wrapHeader = F2(
	function (closeMessage, header) {
		return (_elm_lang$core$Native_Utils.eq(closeMessage, _elm_lang$core$Maybe$Nothing) && _elm_lang$core$Native_Utils.eq(header, _elm_lang$core$Maybe$Nothing)) ? _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty : A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('modal-header'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A3(_krisajenkins$elm_exts$Exts_Maybe$maybe, _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty, _krisajenkins$elm_dialog$Dialog$closeButton, closeMessage),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Maybe$withDefault, _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty, header),
					_1: {ctor: '[]'}
				}
			});
	});
var _krisajenkins$elm_dialog$Dialog$view = function (maybeConfig) {
	var displayed = _krisajenkins$elm_exts$Exts_Maybe$isJust(maybeConfig);
	return A2(
		_elm_lang$html$Html$div,
		function () {
			var _p1 = A2(
				_elm_lang$core$Maybe$andThen,
				function (_) {
					return _.containerClass;
				},
				maybeConfig);
			if (_p1.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				return {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class(_p1._0),
					_1: {ctor: '[]'}
				};
			}
		}(),
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'modal', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'in', _1: displayed},
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'display',
									_1: displayed ? 'block' : 'none'
								},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('modal-dialog'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('modal-content'),
									_1: {ctor: '[]'}
								},
								function () {
									var _p2 = maybeConfig;
									if (_p2.ctor === 'Nothing') {
										return {
											ctor: '::',
											_0: _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty,
											_1: {ctor: '[]'}
										};
									} else {
										var _p3 = _p2._0;
										return {
											ctor: '::',
											_0: A2(_krisajenkins$elm_dialog$Dialog$wrapHeader, _p3.closeMessage, _p3.header),
											_1: {
												ctor: '::',
												_0: A3(_krisajenkins$elm_exts$Exts_Maybe$maybe, _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty, _krisajenkins$elm_dialog$Dialog$wrapBody, _p3.body),
												_1: {
													ctor: '::',
													_0: A3(_krisajenkins$elm_exts$Exts_Maybe$maybe, _krisajenkins$elm_exts$Exts_Html_Bootstrap$empty, _krisajenkins$elm_dialog$Dialog$wrapFooter, _p3.footer),
													_1: {ctor: '[]'}
												}
											}
										};
									}
								}()),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _krisajenkins$elm_dialog$Dialog$backdrop(maybeConfig),
				_1: {ctor: '[]'}
			}
		});
};
var _krisajenkins$elm_dialog$Dialog$Config = F5(
	function (a, b, c, d, e) {
		return {closeMessage: a, containerClass: b, header: c, body: d, footer: e};
	});

var _krisajenkins$remotedata$RemoteData$isNotAsked = function (data) {
	var _p0 = data;
	if (_p0.ctor === 'NotAsked') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isLoading = function (data) {
	var _p1 = data;
	if (_p1.ctor === 'Loading') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isFailure = function (data) {
	var _p2 = data;
	if (_p2.ctor === 'Failure') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isSuccess = function (data) {
	var _p3 = data;
	if (_p3.ctor === 'Success') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$withDefault = F2(
	function ($default, data) {
		var _p4 = data;
		if (_p4.ctor === 'Success') {
			return _p4._0;
		} else {
			return $default;
		}
	});
var _krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {ctor: 'Success', _0: a};
};
var _krisajenkins$remotedata$RemoteData$succeed = _krisajenkins$remotedata$RemoteData$Success;
var _krisajenkins$remotedata$RemoteData$prism = {
	reverseGet: _krisajenkins$remotedata$RemoteData$Success,
	getOption: function (data) {
		var _p5 = data;
		if (_p5.ctor === 'Success') {
			return _elm_lang$core$Maybe$Just(_p5._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}
};
var _krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {ctor: 'Failure', _0: a};
};
var _krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Err') {
		return _krisajenkins$remotedata$RemoteData$Failure(_p6._0);
	} else {
		return _krisajenkins$remotedata$RemoteData$Success(_p6._0);
	}
};
var _krisajenkins$remotedata$RemoteData$asCmd = _elm_lang$core$Task$attempt(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$sendRequest = _elm_lang$http$Http$send(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$fromTask = function (_p7) {
	return A2(
		_elm_lang$core$Task$onError,
		function (_p8) {
			return _elm_lang$core$Task$succeed(
				_krisajenkins$remotedata$RemoteData$Failure(_p8));
		},
		A2(_elm_lang$core$Task$map, _krisajenkins$remotedata$RemoteData$Success, _p7));
};
var _krisajenkins$remotedata$RemoteData$Loading = {ctor: 'Loading'};
var _krisajenkins$remotedata$RemoteData$NotAsked = {ctor: 'NotAsked'};
var _krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		var _p9 = data;
		switch (_p9.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(
					f(_p9._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Failure(_p9._0);
		}
	});
var _krisajenkins$remotedata$RemoteData$toMaybe = function (_p10) {
	return A2(
		_krisajenkins$remotedata$RemoteData$withDefault,
		_elm_lang$core$Maybe$Nothing,
		A2(_krisajenkins$remotedata$RemoteData$map, _elm_lang$core$Maybe$Just, _p10));
};
var _krisajenkins$remotedata$RemoteData$mapError = F2(
	function (f, data) {
		var _p11 = data;
		switch (_p11.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(_p11._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(
					f(_p11._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$mapBoth = F2(
	function (successFn, errorFn) {
		return function (_p12) {
			return A2(
				_krisajenkins$remotedata$RemoteData$mapError,
				errorFn,
				A2(_krisajenkins$remotedata$RemoteData$map, successFn, _p12));
		};
	});
var _krisajenkins$remotedata$RemoteData$andThen = F2(
	function (f, data) {
		var _p13 = data;
		switch (_p13.ctor) {
			case 'Success':
				return f(_p13._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(_p13._0);
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Loading;
		}
	});
var _krisajenkins$remotedata$RemoteData$andMap = F2(
	function (wrappedValue, wrappedFunction) {
		var _p14 = wrappedFunction;
		switch (_p14.ctor) {
			case 'Success':
				return A2(_krisajenkins$remotedata$RemoteData$map, _p14._0, wrappedValue);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(_p14._0);
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$map2 = F3(
	function (f, a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(_krisajenkins$remotedata$RemoteData$map, f, a));
	});
var _krisajenkins$remotedata$RemoteData$map3 = F4(
	function (f, a, b, c) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			c,
			A2(
				_krisajenkins$remotedata$RemoteData$andMap,
				b,
				A2(_krisajenkins$remotedata$RemoteData$map, f, a)));
	});
var _krisajenkins$remotedata$RemoteData$append = F2(
	function (a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(
				_krisajenkins$remotedata$RemoteData$map,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				a));
	});
var _krisajenkins$remotedata$RemoteData$update = F2(
	function (f, remoteData) {
		var _p15 = remoteData;
		switch (_p15.ctor) {
			case 'Success':
				var _p16 = f(_p15._0);
				var first = _p16._0;
				var second = _p16._1;
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Success(first),
					_1: second
				};
			case 'NotAsked':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$NotAsked, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Loading':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$Loading, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Failure(_p15._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});

var _rtfeldman$hex$Hex$toString = function (num) {
	return _elm_lang$core$String$fromList(
		(_elm_lang$core$Native_Utils.cmp(num, 0) < 0) ? {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: A2(
				_rtfeldman$hex$Hex$unsafePositiveToDigits,
				{ctor: '[]'},
				_elm_lang$core$Basics$negate(num))
		} : A2(
			_rtfeldman$hex$Hex$unsafePositiveToDigits,
			{ctor: '[]'},
			num));
};
var _rtfeldman$hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(num, 16) < 0) {
				return {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(num),
					_1: digits
				};
			} else {
				var _v0 = {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(
						A2(_elm_lang$core$Basics_ops['%'], num, 16)),
					_1: digits
				},
					_v1 = (num / 16) | 0;
				digits = _v0;
				num = _v1;
				continue unsafePositiveToDigits;
			}
		}
	});
var _rtfeldman$hex$Hex$unsafeToDigit = function (num) {
	var _p0 = num;
	switch (_p0) {
		case 0:
			return _elm_lang$core$Native_Utils.chr('0');
		case 1:
			return _elm_lang$core$Native_Utils.chr('1');
		case 2:
			return _elm_lang$core$Native_Utils.chr('2');
		case 3:
			return _elm_lang$core$Native_Utils.chr('3');
		case 4:
			return _elm_lang$core$Native_Utils.chr('4');
		case 5:
			return _elm_lang$core$Native_Utils.chr('5');
		case 6:
			return _elm_lang$core$Native_Utils.chr('6');
		case 7:
			return _elm_lang$core$Native_Utils.chr('7');
		case 8:
			return _elm_lang$core$Native_Utils.chr('8');
		case 9:
			return _elm_lang$core$Native_Utils.chr('9');
		case 10:
			return _elm_lang$core$Native_Utils.chr('a');
		case 11:
			return _elm_lang$core$Native_Utils.chr('b');
		case 12:
			return _elm_lang$core$Native_Utils.chr('c');
		case 13:
			return _elm_lang$core$Native_Utils.chr('d');
		case 14:
			return _elm_lang$core$Native_Utils.chr('e');
		case 15:
			return _elm_lang$core$Native_Utils.chr('f');
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Hex',
				{
					start: {line: 138, column: 5},
					end: {line: 188, column: 84}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Tried to convert ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$hex$Hex$toString(num),
						' to hexadecimal.')));
	}
};
var _rtfeldman$hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		var _p2 = chars;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Result$Ok(accumulated);
		} else {
			var recurse = function (additional) {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					position - 1,
					_p2._1,
					accumulated + (additional * Math.pow(16, position)));
			};
			var _p3 = _p2._0;
			switch (_p3.valueOf()) {
				case '0':
					return recurse(0);
				case '1':
					return recurse(1);
				case '2':
					return recurse(2);
				case '3':
					return recurse(3);
				case '4':
					return recurse(4);
				case '5':
					return recurse(5);
				case '6':
					return recurse(6);
				case '7':
					return recurse(7);
				case '8':
					return recurse(8);
				case '9':
					return recurse(9);
				case 'a':
					return recurse(10);
				case 'b':
					return recurse(11);
				case 'c':
					return recurse(12);
				case 'd':
					return recurse(13);
				case 'e':
					return recurse(14);
				case 'f':
					return recurse(15);
				default:
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p3),
							' is not a valid hexadecimal character.'));
			}
		}
	});
var _rtfeldman$hex$Hex$fromString = function (str) {
	if (_elm_lang$core$String$isEmpty(str)) {
		return _elm_lang$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var formatError = function (err) {
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(str),
					_1: {
						ctor: '::',
						_0: 'is not a valid hexadecimal string because',
						_1: {
							ctor: '::',
							_0: err,
							_1: {ctor: '[]'}
						}
					}
				});
		};
		var result = function () {
			if (A2(_elm_lang$core$String$startsWith, '-', str)) {
				var list = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					_elm_lang$core$List$tail(
						_elm_lang$core$String$toList(str)));
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Basics$negate,
					A3(
						_rtfeldman$hex$Hex$fromStringHelp,
						_elm_lang$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					_elm_lang$core$String$length(str) - 1,
					_elm_lang$core$String$toList(str),
					0);
			}
		}();
		return A2(_elm_lang$core$Result$mapError, formatError, result);
	}
};

var _stil4m$elm_syntax$Elm_Syntax_Range$compareLocations = F2(
	function (left, right) {
		return (_elm_lang$core$Native_Utils.cmp(left.row, right.row) < 0) ? _elm_lang$core$Basics$LT : ((_elm_lang$core$Native_Utils.cmp(right.row, left.row) < 0) ? _elm_lang$core$Basics$GT : A2(_elm_lang$core$Basics$compare, left.column, right.column));
	});
var _stil4m$elm_syntax$Elm_Syntax_Range$sortLocations = _elm_lang$core$List$sortWith(_stil4m$elm_syntax$Elm_Syntax_Range$compareLocations);
var _stil4m$elm_syntax$Elm_Syntax_Range$fromList = function (input) {
	var _p0 = input;
	if (((((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '::')) && (_p0._1._1._1.ctor === '::')) && (_p0._1._1._1._1.ctor === '[]')) {
		return _elm_lang$core$Result$Ok(
			{
				start: {row: _p0._0, column: _p0._1._0},
				end: {row: _p0._1._1._0, column: _p0._1._1._1._0}
			});
	} else {
		return _elm_lang$core$Result$Err('Invalid input list');
	}
};
var _stil4m$elm_syntax$Elm_Syntax_Range$decode = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p1) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_stil4m$elm_syntax$Elm_Syntax_Range$fromList(_p1));
	},
	_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$int));
var _stil4m$elm_syntax$Elm_Syntax_Range$encode = function (_p2) {
	var _p3 = _p2;
	var _p5 = _p3.start;
	var _p4 = _p3.end;
	return _elm_lang$core$Json_Encode$list(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Encode$int(_p5.row),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Json_Encode$int(_p5.column),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Json_Encode$int(_p4.row),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Json_Encode$int(_p4.column),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange = {
	start: {row: 0, column: 0},
	end: {row: 0, column: 0}
};
var _stil4m$elm_syntax$Elm_Syntax_Range$Location = F2(
	function (a, b) {
		return {row: a, column: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Range$Range = F2(
	function (a, b) {
		return {start: a, end: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Range$combine = function (ranges) {
	var ends = _elm_lang$core$List$reverse(
		_stil4m$elm_syntax$Elm_Syntax_Range$sortLocations(
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.end;
				},
				ranges)));
	var starts = _stil4m$elm_syntax$Elm_Syntax_Range$sortLocations(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.start;
			},
			ranges));
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_stil4m$elm_syntax$Elm_Syntax_Range$emptyRange,
		A3(
			_elm_lang$core$Maybe$map2,
			_stil4m$elm_syntax$Elm_Syntax_Range$Range,
			_elm_lang$core$List$head(starts),
			_elm_lang$core$List$head(ends)));
};

var _stil4m$elm_syntax$Elm_Syntax_Exposing$operator = function (t) {
	var _p0 = t;
	if (_p0.ctor === 'InfixExpose') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _stil4m$elm_syntax$Elm_Syntax_Exposing$operators = function (l) {
	return A2(_elm_lang$core$List$filterMap, _stil4m$elm_syntax$Elm_Syntax_Exposing$operator, l);
};
var _stil4m$elm_syntax$Elm_Syntax_Exposing$exposesFunction = F2(
	function (s, exposure) {
		var _p1 = exposure;
		if (_p1.ctor === 'All') {
			return true;
		} else {
			return A2(
				_elm_lang$core$List$any,
				function (x) {
					var _p2 = x;
					if (_p2.ctor === 'FunctionExpose') {
						return _elm_lang$core$Native_Utils.eq(_p2._0, s);
					} else {
						return false;
					}
				},
				_p1._0);
		}
	});
var _stil4m$elm_syntax$Elm_Syntax_Exposing$topLevelExposeRange = function (e) {
	var _p3 = e;
	switch (_p3.ctor) {
		case 'InfixExpose':
			return _p3._1;
		case 'FunctionExpose':
			return _p3._1;
		case 'TypeOrAliasExpose':
			return _p3._1;
		default:
			return _p3._0.range;
	}
};
var _stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType = F3(
	function (a, b, c) {
		return {name: a, constructors: b, range: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit = function (a) {
	return {ctor: 'Explicit', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Exposing$All = function (a) {
	return {ctor: 'All', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose = function (a) {
	return {ctor: 'TypeExpose', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeOrAliasExpose = F2(
	function (a, b) {
		return {ctor: 'TypeOrAliasExpose', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Exposing$FunctionExpose = F2(
	function (a, b) {
		return {ctor: 'FunctionExpose', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Exposing$InfixExpose = F2(
	function (a, b) {
		return {ctor: 'InfixExpose', _0: a, _1: b};
	});

var _stil4m$elm_syntax$Elm_Syntax_Base$VariablePointer = F2(
	function (a, b) {
		return {value: a, range: b};
	});

var _stil4m$elm_syntax$Elm_Syntax_Module$exposingList = function (m) {
	var _p0 = m;
	switch (_p0.ctor) {
		case 'NormalModule':
			return _p0._0.exposingList;
		case 'PortModule':
			return _p0._0.exposingList;
		default:
			return _p0._0.exposingList;
	}
};
var _stil4m$elm_syntax$Elm_Syntax_Module$moduleName = function (m) {
	var _p1 = m;
	switch (_p1.ctor) {
		case 'NormalModule':
			return _elm_lang$core$Maybe$Just(_p1._0.moduleName);
		case 'PortModule':
			return _elm_lang$core$Maybe$Just(_p1._0.moduleName);
		default:
			return _elm_lang$core$Maybe$Just(_p1._0.moduleName);
	}
};
var _stil4m$elm_syntax$Elm_Syntax_Module$DefaultModuleData = F2(
	function (a, b) {
		return {moduleName: a, exposingList: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Module$EffectModuleData = F4(
	function (a, b, c, d) {
		return {moduleName: a, exposingList: b, command: c, subscription: d};
	});
var _stil4m$elm_syntax$Elm_Syntax_Module$Import = F4(
	function (a, b, c, d) {
		return {moduleName: a, moduleAlias: b, exposingList: c, range: d};
	});
var _stil4m$elm_syntax$Elm_Syntax_Module$EffectModule = function (a) {
	return {ctor: 'EffectModule', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Module$PortModule = function (a) {
	return {ctor: 'PortModule', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Module$NormalModule = function (a) {
	return {ctor: 'NormalModule', _0: a};
};

var _stil4m$elm_syntax$Elm_DefaultImports$defaults = {
	ctor: '::',
	_0: {
		moduleName: {
			ctor: '::',
			_0: 'Basics',
			_1: {ctor: '[]'}
		},
		exposingList: _elm_lang$core$Maybe$Just(
			_stil4m$elm_syntax$Elm_Syntax_Exposing$All(_stil4m$elm_syntax$Elm_Syntax_Range$emptyRange)),
		moduleAlias: _elm_lang$core$Maybe$Nothing,
		range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
	},
	_1: {
		ctor: '::',
		_0: {
			moduleName: {
				ctor: '::',
				_0: 'List',
				_1: {ctor: '[]'}
			},
			exposingList: _elm_lang$core$Maybe$Just(
				_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
					{
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose(
							A3(_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType, 'List', _elm_lang$core$Maybe$Nothing, _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange)),
						_1: {
							ctor: '::',
							_0: A2(_stil4m$elm_syntax$Elm_Syntax_Exposing$InfixExpose, '::', _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange),
							_1: {ctor: '[]'}
						}
					})),
			moduleAlias: _elm_lang$core$Maybe$Nothing,
			range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
		},
		_1: {
			ctor: '::',
			_0: {
				moduleName: {
					ctor: '::',
					_0: 'Maybe',
					_1: {ctor: '[]'}
				},
				exposingList: _elm_lang$core$Maybe$Just(
					_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
						{
							ctor: '::',
							_0: _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose(
								A3(
									_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType,
									'Maybe',
									_elm_lang$core$Maybe$Just(
										_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
											{
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'Just', _1: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'Nothing', _1: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange},
													_1: {ctor: '[]'}
												}
											})),
									_stil4m$elm_syntax$Elm_Syntax_Range$emptyRange)),
							_1: {ctor: '[]'}
						})),
				moduleAlias: _elm_lang$core$Maybe$Nothing,
				range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
			},
			_1: {
				ctor: '::',
				_0: {
					moduleName: {
						ctor: '::',
						_0: 'Result',
						_1: {ctor: '[]'}
					},
					exposingList: _elm_lang$core$Maybe$Just(
						_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
							{
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose(
									A3(
										_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType,
										'Result',
										_elm_lang$core$Maybe$Just(
											_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
												{
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'Ok', _1: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'Err', _1: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange},
														_1: {ctor: '[]'}
													}
												})),
										_stil4m$elm_syntax$Elm_Syntax_Range$emptyRange)),
								_1: {ctor: '[]'}
							})),
					moduleAlias: _elm_lang$core$Maybe$Nothing,
					range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
				},
				_1: {
					ctor: '::',
					_0: {
						moduleName: {
							ctor: '::',
							_0: 'String',
							_1: {ctor: '[]'}
						},
						exposingList: _elm_lang$core$Maybe$Nothing,
						moduleAlias: _elm_lang$core$Maybe$Nothing,
						range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
					},
					_1: {
						ctor: '::',
						_0: {
							moduleName: {
								ctor: '::',
								_0: 'Tuple',
								_1: {ctor: '[]'}
							},
							exposingList: _elm_lang$core$Maybe$Nothing,
							moduleAlias: _elm_lang$core$Maybe$Nothing,
							range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
						},
						_1: {
							ctor: '::',
							_0: {
								moduleName: {
									ctor: '::',
									_0: 'Debug',
									_1: {ctor: '[]'}
								},
								exposingList: _elm_lang$core$Maybe$Nothing,
								moduleAlias: _elm_lang$core$Maybe$Nothing,
								range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
							},
							_1: {
								ctor: '::',
								_0: {
									moduleName: {
										ctor: '::',
										_0: 'Platform',
										_1: {ctor: '[]'}
									},
									exposingList: _elm_lang$core$Maybe$Just(
										_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
											{
												ctor: '::',
												_0: _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose(
													A3(_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType, 'Program', _elm_lang$core$Maybe$Nothing, _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange)),
												_1: {ctor: '[]'}
											})),
									moduleAlias: _elm_lang$core$Maybe$Nothing,
									range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
								},
								_1: {
									ctor: '::',
									_0: {
										moduleName: {
											ctor: '::',
											_0: 'Platform',
											_1: {
												ctor: '::',
												_0: 'Cmd',
												_1: {ctor: '[]'}
											}
										},
										exposingList: _elm_lang$core$Maybe$Just(
											_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
												{
													ctor: '::',
													_0: _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose(
														A3(_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType, 'Cmd', _elm_lang$core$Maybe$Nothing, _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange)),
													_1: {
														ctor: '::',
														_0: A2(_stil4m$elm_syntax$Elm_Syntax_Exposing$InfixExpose, '!', _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange),
														_1: {ctor: '[]'}
													}
												})),
										moduleAlias: _elm_lang$core$Maybe$Nothing,
										range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
									},
									_1: {
										ctor: '::',
										_0: {
											moduleName: {
												ctor: '::',
												_0: 'Platform',
												_1: {
													ctor: '::',
													_0: 'Sub',
													_1: {ctor: '[]'}
												}
											},
											exposingList: _elm_lang$core$Maybe$Just(
												_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit(
													{
														ctor: '::',
														_0: _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose(
															A3(_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType, 'Sub', _elm_lang$core$Maybe$Nothing, _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange)),
														_1: {ctor: '[]'}
													})),
											moduleAlias: _elm_lang$core$Maybe$Nothing,
											range: _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange
										},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};

var _stil4m$elm_syntax$Elm_Syntax_Documentation$Documentation = F2(
	function (a, b) {
		return {text: a, range: b};
	});

var _stil4m$elm_syntax$Elm_Syntax_Infix$encodeDirection = function (d) {
	var _p0 = d;
	if (_p0.ctor === 'Left') {
		return _elm_lang$core$Json_Encode$string('left');
	} else {
		return _elm_lang$core$Json_Encode$string('right');
	}
};
var _stil4m$elm_syntax$Elm_Syntax_Infix$encode = function (inf) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'direction',
				_1: _stil4m$elm_syntax$Elm_Syntax_Infix$encodeDirection(inf.direction)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'precedence',
					_1: _elm_lang$core$Json_Encode$int(inf.precedence)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'operator',
						_1: _elm_lang$core$Json_Encode$string(inf.operator)
					},
					_1: {ctor: '[]'}
				}
			}
		});
};
var _stil4m$elm_syntax$Elm_Syntax_Infix$Infix = F3(
	function (a, b, c) {
		return {direction: a, precedence: b, operator: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Infix$Right = {ctor: 'Right'};
var _stil4m$elm_syntax$Elm_Syntax_Infix$Left = {ctor: 'Left'};
var _stil4m$elm_syntax$Elm_Syntax_Infix$decodeDirection = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (v) {
		var _p1 = v;
		switch (_p1) {
			case 'left':
				return _elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Infix$Left);
			case 'right':
				return _elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Infix$Right);
			default:
				return _elm_lang$core$Json_Decode$fail('Invlalid direction');
		}
	},
	_elm_lang$core$Json_Decode$string);
var _stil4m$elm_syntax$Elm_Syntax_Infix$decode = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Infix$Infix),
			A2(_elm_lang$core$Json_Decode$field, 'direction', _stil4m$elm_syntax$Elm_Syntax_Infix$decodeDirection)),
		A2(_elm_lang$core$Json_Decode$field, 'precedence', _elm_lang$core$Json_Decode$int)),
	A2(_elm_lang$core$Json_Decode$field, 'operator', _elm_lang$core$Json_Decode$string));

var _stil4m$elm_syntax$Elm_Syntax_Pattern$QualifiedNameRef = F2(
	function (a, b) {
		return {moduleName: a, name: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$ParenthesizedPattern = F2(
	function (a, b) {
		return {ctor: 'ParenthesizedPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$AsPattern = F3(
	function (a, b, c) {
		return {ctor: 'AsPattern', _0: a, _1: b, _2: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$QualifiedNamePattern = F2(
	function (a, b) {
		return {ctor: 'QualifiedNamePattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$NamedPattern = F3(
	function (a, b, c) {
		return {ctor: 'NamedPattern', _0: a, _1: b, _2: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$VarPattern = F2(
	function (a, b) {
		return {ctor: 'VarPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$ListPattern = F2(
	function (a, b) {
		return {ctor: 'ListPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$UnConsPattern = F3(
	function (a, b, c) {
		return {ctor: 'UnConsPattern', _0: a, _1: b, _2: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$RecordPattern = F2(
	function (a, b) {
		return {ctor: 'RecordPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$TuplePattern = F2(
	function (a, b) {
		return {ctor: 'TuplePattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$FloatPattern = F2(
	function (a, b) {
		return {ctor: 'FloatPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$IntPattern = F2(
	function (a, b) {
		return {ctor: 'IntPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$StringPattern = F2(
	function (a, b) {
		return {ctor: 'StringPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$CharPattern = F2(
	function (a, b) {
		return {ctor: 'CharPattern', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Pattern$UnitPattern = function (a) {
	return {ctor: 'UnitPattern', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Pattern$AllPattern = function (a) {
	return {ctor: 'AllPattern', _0: a};
};

var _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$FunctionTypeAnnotation = F3(
	function (a, b, c) {
		return {ctor: 'FunctionTypeAnnotation', _0: a, _1: b, _2: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$GenericRecord = F3(
	function (a, b, c) {
		return {ctor: 'GenericRecord', _0: a, _1: b, _2: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Record = F2(
	function (a, b) {
		return {ctor: 'Record', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Tupled = F2(
	function (a, b) {
		return {ctor: 'Tupled', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Unit = function (a) {
	return {ctor: 'Unit', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Typed = F4(
	function (a, b, c, d) {
		return {ctor: 'Typed', _0: a, _1: b, _2: c, _3: d};
	});
var _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$GenericType = F2(
	function (a, b) {
		return {ctor: 'GenericType', _0: a, _1: b};
	});

var _stil4m$elm_syntax$Elm_Syntax_Expression$Function = F3(
	function (a, b, c) {
		return {documentation: a, signature: b, declaration: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$FunctionDeclaration = F4(
	function (a, b, c, d) {
		return {operatorDefinition: a, name: b, $arguments: c, expression: d};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$FunctionSignature = F4(
	function (a, b, c, d) {
		return {operatorDefinition: a, name: b, typeAnnotation: c, range: d};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdate = F2(
	function (a, b) {
		return {name: a, updates: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$LetBlock = F2(
	function (a, b) {
		return {declarations: a, expression: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$Lambda = F2(
	function (a, b) {
		return {args: a, expression: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$CaseBlock = F2(
	function (a, b) {
		return {expression: a, cases: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$GLSLExpression = function (a) {
	return {ctor: 'GLSLExpression', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdateExpression = function (a) {
	return {ctor: 'RecordUpdateExpression', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$RecordAccessFunction = function (a) {
	return {ctor: 'RecordAccessFunction', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$RecordAccess = F2(
	function (a, b) {
		return {ctor: 'RecordAccess', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$QualifiedExpr = F2(
	function (a, b) {
		return {ctor: 'QualifiedExpr', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$ListExpr = function (a) {
	return {ctor: 'ListExpr', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$RecordExpr = function (a) {
	return {ctor: 'RecordExpr', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$LambdaExpression = function (a) {
	return {ctor: 'LambdaExpression', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$CaseExpression = function (a) {
	return {ctor: 'CaseExpression', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$LetExpression = function (a) {
	return {ctor: 'LetExpression', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$ParenthesizedExpression = function (a) {
	return {ctor: 'ParenthesizedExpression', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$TupledExpression = function (a) {
	return {ctor: 'TupledExpression', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$CharLiteral = function (a) {
	return {ctor: 'CharLiteral', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$Literal = function (a) {
	return {ctor: 'Literal', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$Negation = function (a) {
	return {ctor: 'Negation', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$Floatable = function (a) {
	return {ctor: 'Floatable', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$Integer = function (a) {
	return {ctor: 'Integer', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$Operator = function (a) {
	return {ctor: 'Operator', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$PrefixOperator = function (a) {
	return {ctor: 'PrefixOperator', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$IfBlock = F3(
	function (a, b, c) {
		return {ctor: 'IfBlock', _0: a, _1: b, _2: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$FunctionOrValue = function (a) {
	return {ctor: 'FunctionOrValue', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$OperatorApplication = F4(
	function (a, b, c, d) {
		return {ctor: 'OperatorApplication', _0: a, _1: b, _2: c, _3: d};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$Application = function (a) {
	return {ctor: 'Application', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Expression$UnitExpr = {ctor: 'UnitExpr'};
var _stil4m$elm_syntax$Elm_Syntax_Expression$LetDestructuring = F2(
	function (a, b) {
		return {ctor: 'LetDestructuring', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Expression$LetFunction = function (a) {
	return {ctor: 'LetFunction', _0: a};
};

var _stil4m$elm_syntax$Elm_Syntax_Type$Type = F3(
	function (a, b, c) {
		return {name: a, generics: b, constructors: c};
	});
var _stil4m$elm_syntax$Elm_Syntax_Type$ValueConstructor = F3(
	function (a, b, c) {
		return {name: a, $arguments: b, range: c};
	});

var _stil4m$elm_syntax$Elm_Syntax_TypeAlias$TypeAlias = F5(
	function (a, b, c, d, e) {
		return {documentation: a, name: b, generics: c, typeAnnotation: d, range: e};
	});

var _stil4m$elm_syntax$Elm_Syntax_Declaration$Destructuring = F2(
	function (a, b) {
		return {ctor: 'Destructuring', _0: a, _1: b};
	});
var _stil4m$elm_syntax$Elm_Syntax_Declaration$InfixDeclaration = function (a) {
	return {ctor: 'InfixDeclaration', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Declaration$PortDeclaration = function (a) {
	return {ctor: 'PortDeclaration', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Declaration$TypeDecl = function (a) {
	return {ctor: 'TypeDecl', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Declaration$AliasDecl = function (a) {
	return {ctor: 'AliasDecl', _0: a};
};
var _stil4m$elm_syntax$Elm_Syntax_Declaration$FuncDecl = function (a) {
	return {ctor: 'FuncDecl', _0: a};
};

var _stil4m$elm_syntax$Elm_Syntax_File$File = F4(
	function (a, b, c, d) {
		return {moduleDefinition: a, imports: b, declarations: c, comments: d};
	});

var _stil4m$elm_syntax$Elm_Internal_RawFile$Raw = function (a) {
	return {ctor: 'Raw', _0: a};
};
var _stil4m$elm_syntax$Elm_Internal_RawFile$fromFile = _stil4m$elm_syntax$Elm_Internal_RawFile$Raw;

var _stil4m$elm_syntax$Elm_Interface$ifType = F2(
	function (f, i) {
		var _p0 = i;
		if (_p0.ctor === 'Type') {
			return f(_p0._0);
		} else {
			return i;
		}
	});
var _stil4m$elm_syntax$Elm_Interface$lookupForDefinition = function (key) {
	return function (_p1) {
		return A2(
			_elm_lang$core$Maybe$map,
			_elm_lang$core$Tuple$second,
			_elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					function (_p2) {
						return A2(
							F2(
								function (x, y) {
									return _elm_lang$core$Native_Utils.eq(x, y);
								}),
							key,
							_elm_lang$core$Tuple$first(_p2));
					},
					_p1)));
	};
};
var _stil4m$elm_syntax$Elm_Interface$operators = _elm_lang$core$List$filterMap(
	function (i) {
		var _p3 = i;
		if (_p3.ctor === 'Operator') {
			return _elm_lang$core$Maybe$Just(_p3._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _stil4m$elm_syntax$Elm_Interface$exposesFunction = F2(
	function (k, $interface) {
		return A2(
			_elm_lang$core$List$any,
			function (x) {
				var _p4 = x;
				switch (_p4.ctor) {
					case 'Function':
						return _elm_lang$core$Native_Utils.eq(k, _p4._0);
					case 'Type':
						return A2(_elm_lang$core$List$member, k, _p4._0._1);
					case 'Operator':
						return _elm_lang$core$Native_Utils.eq(_p4._0.operator, k);
					default:
						return false;
				}
			},
			$interface);
	});
var _stil4m$elm_syntax$Elm_Interface$exposesAlias = F2(
	function (k, $interface) {
		return A2(
			_elm_lang$core$List$any,
			function (x) {
				var _p5 = x;
				if (_p5.ctor === 'Alias') {
					return _elm_lang$core$Native_Utils.eq(k, _p5._0);
				} else {
					return false;
				}
			},
			$interface);
	});
var _stil4m$elm_syntax$Elm_Interface$Operator = function (a) {
	return {ctor: 'Operator', _0: a};
};
var _stil4m$elm_syntax$Elm_Interface$Alias = function (a) {
	return {ctor: 'Alias', _0: a};
};
var _stil4m$elm_syntax$Elm_Interface$Type = function (a) {
	return {ctor: 'Type', _0: a};
};
var _stil4m$elm_syntax$Elm_Interface$Function = function (a) {
	return {ctor: 'Function', _0: a};
};
var _stil4m$elm_syntax$Elm_Interface$buildInterfaceFromExplicit = F2(
	function (x, fileDefinitionList) {
		return A2(
			_elm_lang$core$List$filterMap,
			function (expose) {
				var _p6 = expose;
				switch (_p6.ctor) {
					case 'InfixExpose':
						return A2(_stil4m$elm_syntax$Elm_Interface$lookupForDefinition, _p6._0, fileDefinitionList);
					case 'TypeOrAliasExpose':
						return A2(
							_elm_lang$core$Maybe$map,
							_stil4m$elm_syntax$Elm_Interface$ifType(
								function (_p7) {
									var _p8 = _p7;
									return _stil4m$elm_syntax$Elm_Interface$Type(
										{
											ctor: '_Tuple2',
											_0: _p8._0,
											_1: {ctor: '[]'}
										});
								}),
							A2(_stil4m$elm_syntax$Elm_Interface$lookupForDefinition, _p6._0, fileDefinitionList));
					case 'FunctionExpose':
						return _elm_lang$core$Maybe$Just(
							_stil4m$elm_syntax$Elm_Interface$Function(_p6._0));
					default:
						var _p10 = _p6._0;
						var _p9 = _p10.constructors;
						if (_p9.ctor === 'Nothing') {
							return _elm_lang$core$Maybe$Just(
								_stil4m$elm_syntax$Elm_Interface$Type(
									{
										ctor: '_Tuple2',
										_0: _p10.name,
										_1: {ctor: '[]'}
									}));
						} else {
							if (_p9._0.ctor === 'All') {
								return A2(_stil4m$elm_syntax$Elm_Interface$lookupForDefinition, _p10.name, fileDefinitionList);
							} else {
								return _elm_lang$core$Maybe$Just(
									_stil4m$elm_syntax$Elm_Interface$Type(
										{
											ctor: '_Tuple2',
											_0: _p10.name,
											_1: A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _p9._0._0)
										}));
							}
						}
				}
			},
			x);
	});
var _stil4m$elm_syntax$Elm_Interface$fileToDefinitions = function (file) {
	var getValidOperatorInterface = F2(
		function (t1, t2) {
			var _p11 = {ctor: '_Tuple2', _0: t1, _1: t2};
			if (((_p11.ctor === '_Tuple2') && (_p11._0.ctor === 'Operator')) && (_p11._1.ctor === 'Operator')) {
				var _p12 = _p11._0._0;
				return (_elm_lang$core$Native_Utils.eq(_p12.precedence, 5) && _elm_lang$core$Native_Utils.eq(_p12.direction, _stil4m$elm_syntax$Elm_Syntax_Infix$Left)) ? _elm_lang$core$Maybe$Just(
					_stil4m$elm_syntax$Elm_Interface$Operator(_p11._1._0)) : _elm_lang$core$Maybe$Just(
					_stil4m$elm_syntax$Elm_Interface$Operator(_p12));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var resolveGroup = function (g) {
		var _p13 = g;
		if (_p13.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p13._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p13._0);
			} else {
				if (((_p13._0.ctor === '_Tuple2') && (_p13._1._0.ctor === '_Tuple2')) && (_p13._1._1.ctor === '[]')) {
					return A2(
						_elm_lang$core$Maybe$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(_p13._0._0),
						A2(getValidOperatorInterface, _p13._0._1, _p13._1._0._1));
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			}
		}
	};
	var allDeclarations = A2(
		_elm_lang$core$List$filterMap,
		function (decl) {
			var _p14 = decl;
			switch (_p14.ctor) {
				case 'TypeDecl':
					var _p15 = _p14._0;
					return _elm_lang$core$Maybe$Just(
						{
							ctor: '_Tuple2',
							_0: _p15.name,
							_1: _stil4m$elm_syntax$Elm_Interface$Type(
								{
									ctor: '_Tuple2',
									_0: _p15.name,
									_1: A2(
										_elm_lang$core$List$map,
										function (_) {
											return _.name;
										},
										_p15.constructors)
								})
						});
				case 'AliasDecl':
					var _p16 = _p14._0;
					return _elm_lang$core$Maybe$Just(
						{
							ctor: '_Tuple2',
							_0: _p16.name,
							_1: _stil4m$elm_syntax$Elm_Interface$Alias(_p16.name)
						});
				case 'PortDeclaration':
					var _p17 = _p14._0;
					return _elm_lang$core$Maybe$Just(
						{
							ctor: '_Tuple2',
							_0: _p17.name,
							_1: _stil4m$elm_syntax$Elm_Interface$Function(_p17.name)
						});
				case 'FuncDecl':
					var _p18 = _p14._0;
					return _p18.declaration.operatorDefinition ? _elm_lang$core$Maybe$Just(
						{
							ctor: '_Tuple2',
							_0: _p18.declaration.name.value,
							_1: _stil4m$elm_syntax$Elm_Interface$Operator(
								{operator: _p18.declaration.name.value, precedence: 5, direction: _stil4m$elm_syntax$Elm_Syntax_Infix$Left})
						}) : _elm_lang$core$Maybe$Just(
						{
							ctor: '_Tuple2',
							_0: _p18.declaration.name.value,
							_1: _stil4m$elm_syntax$Elm_Interface$Function(_p18.declaration.name.value)
						});
				case 'InfixDeclaration':
					var _p19 = _p14._0;
					return _elm_lang$core$Maybe$Just(
						{
							ctor: '_Tuple2',
							_0: _p19.operator,
							_1: _stil4m$elm_syntax$Elm_Interface$Operator(_p19)
						});
				default:
					return _elm_lang$core$Maybe$Nothing;
			}
		},
		file.declarations);
	return A2(
		_elm_lang$core$List$filterMap,
		function (_p20) {
			return resolveGroup(
				_elm_lang$core$Tuple$second(_p20));
		},
		A2(
			_elm_lang$core$List$map,
			function (x) {
				return {
					ctor: '_Tuple2',
					_0: x,
					_1: A2(
						_elm_lang$core$List$filter,
						function (_p21) {
							return A2(
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									}),
								x,
								_elm_lang$core$Tuple$first(_p21));
						},
						allDeclarations)
				};
			},
			_elm_community$list_extra$List_Extra$unique(
				A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, allDeclarations))));
};
var _stil4m$elm_syntax$Elm_Interface$build = function (_p22) {
	var _p23 = _p22;
	var _p25 = _p23._0;
	var moduleExposing = _stil4m$elm_syntax$Elm_Syntax_Module$exposingList(_p25.moduleDefinition);
	var fileDefinitionList = _stil4m$elm_syntax$Elm_Interface$fileToDefinitions(_p25);
	var _p24 = moduleExposing;
	if (_p24.ctor === 'Explicit') {
		return A2(_stil4m$elm_syntax$Elm_Interface$buildInterfaceFromExplicit, _p24._0, fileDefinitionList);
	} else {
		return A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$second, fileDefinitionList);
	}
};

var _stil4m$elm_syntax$Elm_Dependency$Dependency = F3(
	function (a, b, c) {
		return {name: a, version: b, interfaces: c};
	});

var _stil4m$elm_syntax$Elm_Inspector$actionLambda = function (act) {
	var _p0 = act;
	switch (_p0.ctor) {
		case 'Skip':
			return F3(
				function (_p2, _p1, c) {
					return c;
				});
		case 'Continue':
			return F3(
				function (f, _p3, c) {
					return f(c);
				});
		case 'Pre':
			return F3(
				function (f, x, c) {
					return f(
						A2(_p0._0, x, c));
				});
		case 'Post':
			return F3(
				function (f, x, c) {
					return A2(
						_p0._0,
						x,
						f(c));
				});
		default:
			return F3(
				function (f, x, c) {
					return A3(_p0._0, f, x, c);
				});
	}
};
var _stil4m$elm_syntax$Elm_Inspector$inspectImport = F3(
	function (config, imp, context) {
		return A4(_stil4m$elm_syntax$Elm_Inspector$actionLambda, config.onImport, _elm_lang$core$Basics$identity, imp, context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectImports = F3(
	function (config, imports, context) {
		return A3(
			_elm_lang$core$List$foldl,
			_stil4m$elm_syntax$Elm_Inspector$inspectImport(config),
			context,
			imports);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation = F3(
	function (config, typeAnnotation, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onTypeAnnotation,
			A2(_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotationInner, config, typeAnnotation),
			typeAnnotation,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotationInner = F3(
	function (config, typeRefence, context) {
		var _p4 = typeRefence;
		switch (_p4.ctor) {
			case 'Typed':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation(config),
					context,
					_p4._2);
			case 'Tupled':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation(config),
					context,
					_p4._0);
			case 'Record':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation(config),
					context,
					A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$second, _p4._0));
			case 'GenericRecord':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation(config),
					context,
					A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$second, _p4._1));
			case 'FunctionTypeAnnotation':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation(config),
					context,
					{
						ctor: '::',
						_0: _p4._0,
						_1: {
							ctor: '::',
							_0: _p4._1,
							_1: {ctor: '[]'}
						}
					});
			case 'Unit':
				return context;
			default:
				return context;
		}
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectValueConstructor = F3(
	function (config, valueConstructor, context) {
		return A3(
			_elm_lang$core$List$foldl,
			_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation(config),
			context,
			valueConstructor.$arguments);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectType = F3(
	function (config, typeDecl, context) {
		return A3(
			_elm_lang$core$List$foldl,
			_stil4m$elm_syntax$Elm_Inspector$inspectValueConstructor(config),
			context,
			typeDecl.constructors);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectTypeAlias = F3(
	function (config, typeAlias, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onTypeAlias,
			A2(_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation, config, typeAlias.typeAnnotation),
			typeAlias,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectSignature = F3(
	function (config, signature, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onFunctionSignature,
			A2(_stil4m$elm_syntax$Elm_Inspector$inspectTypeAnnotation, config, signature.typeAnnotation),
			signature,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectPortDeclaration = F3(
	function (config, signature, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onPortDeclaration,
			A2(_stil4m$elm_syntax$Elm_Inspector$inspectSignature, config, signature),
			signature,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectCase = F3(
	function (config, caze, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onCase,
			A2(
				_stil4m$elm_syntax$Elm_Inspector$inspectExpression,
				config,
				_elm_lang$core$Tuple$second(caze)),
			caze,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectExpression = F3(
	function (config, expression, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onExpression,
			A2(
				_stil4m$elm_syntax$Elm_Inspector$inspectInnerExpression,
				config,
				_elm_lang$core$Tuple$second(expression)),
			expression,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectInnerExpression = F3(
	function (config, expression, context) {
		var _p5 = expression;
		switch (_p5.ctor) {
			case 'UnitExpr':
				return context;
			case 'FunctionOrValue':
				return A4(_stil4m$elm_syntax$Elm_Inspector$actionLambda, config.onFunctionOrValue, _elm_lang$core$Basics$identity, _p5._0, context);
			case 'PrefixOperator':
				return context;
			case 'Operator':
				return context;
			case 'Integer':
				return context;
			case 'Floatable':
				return context;
			case 'Negation':
				return A3(_stil4m$elm_syntax$Elm_Inspector$inspectExpression, config, _p5._0, context);
			case 'Literal':
				return context;
			case 'CharLiteral':
				return context;
			case 'QualifiedExpr':
				return context;
			case 'RecordAccess':
				var _p6 = _p5._0;
				return A4(
					_stil4m$elm_syntax$Elm_Inspector$actionLambda,
					config.onRecordAccess,
					A2(_stil4m$elm_syntax$Elm_Inspector$inspectExpression, config, _p6),
					{ctor: '_Tuple2', _0: _p6, _1: _p5._1},
					context);
			case 'RecordAccessFunction':
				return context;
			case 'GLSLExpression':
				return context;
			case 'Application':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectExpression(config),
					context,
					_p5._0);
			case 'OperatorApplication':
				var _p8 = _p5._3;
				var _p7 = _p5._2;
				return A4(
					_stil4m$elm_syntax$Elm_Inspector$actionLambda,
					config.onOperatorApplication,
					A2(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$List$foldl(
							_stil4m$elm_syntax$Elm_Inspector$inspectExpression(config)),
						{
							ctor: '::',
							_0: _p7,
							_1: {
								ctor: '::',
								_0: _p8,
								_1: {ctor: '[]'}
							}
						}),
					{ctor: '_Tuple4', _0: _p5._0, _1: _p5._1, _2: _p7, _3: _p8},
					context);
			case 'IfBlock':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectExpression(config),
					context,
					{
						ctor: '::',
						_0: _p5._0,
						_1: {
							ctor: '::',
							_0: _p5._1,
							_1: {
								ctor: '::',
								_0: _p5._2,
								_1: {ctor: '[]'}
							}
						}
					});
			case 'TupledExpression':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectExpression(config),
					context,
					_p5._0);
			case 'ParenthesizedExpression':
				return A3(_stil4m$elm_syntax$Elm_Inspector$inspectExpression, config, _p5._0, context);
			case 'LetExpression':
				var _p10 = _p5._0;
				var next = function (_p9) {
					return A3(
						_stil4m$elm_syntax$Elm_Inspector$inspectExpression,
						config,
						_p10.expression,
						A3(_stil4m$elm_syntax$Elm_Inspector$inspectLetDeclarations, config, _p10.declarations, _p9));
				};
				return A4(_stil4m$elm_syntax$Elm_Inspector$actionLambda, config.onLetBlock, next, _p10, context);
			case 'CaseExpression':
				var _p11 = _p5._0;
				var context2 = A3(_stil4m$elm_syntax$Elm_Inspector$inspectExpression, config, _p11.expression, context);
				var context3 = A3(
					_elm_lang$core$List$foldl,
					F2(
						function (a, b) {
							return A3(_stil4m$elm_syntax$Elm_Inspector$inspectCase, config, a, b);
						}),
					context2,
					_p11.cases);
				return context3;
			case 'LambdaExpression':
				var _p12 = _p5._0;
				return A4(
					_stil4m$elm_syntax$Elm_Inspector$actionLambda,
					config.onLambda,
					A2(_stil4m$elm_syntax$Elm_Inspector$inspectExpression, config, _p12.expression),
					_p12,
					context);
			case 'ListExpr':
				return A3(
					_elm_lang$core$List$foldl,
					_stil4m$elm_syntax$Elm_Inspector$inspectExpression(config),
					context,
					_p5._0);
			case 'RecordExpr':
				return A3(
					_elm_lang$core$List$foldl,
					F2(
						function (a, b) {
							return A3(
								_stil4m$elm_syntax$Elm_Inspector$inspectExpression,
								config,
								_elm_lang$core$Tuple$second(a),
								b);
						}),
					context,
					_p5._0);
			default:
				var _p13 = _p5._0;
				return A4(
					_stil4m$elm_syntax$Elm_Inspector$actionLambda,
					config.onRecordUpdate,
					function (c) {
						return A3(
							_elm_lang$core$List$foldl,
							F2(
								function (a, b) {
									return A3(
										_stil4m$elm_syntax$Elm_Inspector$inspectExpression,
										config,
										_elm_lang$core$Tuple$second(a),
										b);
								}),
							c,
							_p13.updates);
					},
					_p13,
					context);
		}
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectLetDeclarations = F3(
	function (config, declarations, context) {
		return A3(
			_elm_lang$core$List$foldl,
			_stil4m$elm_syntax$Elm_Inspector$inspectLetDeclaration(config),
			context,
			declarations);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectLetDeclaration = F3(
	function (config, declaration, context) {
		var _p14 = declaration;
		if (_p14.ctor === 'LetFunction') {
			return A3(_stil4m$elm_syntax$Elm_Inspector$inspectFunction, config, _p14._0, context);
		} else {
			return A3(
				_stil4m$elm_syntax$Elm_Inspector$inspectDestructuring,
				config,
				{ctor: '_Tuple2', _0: _p14._0, _1: _p14._1},
				context);
		}
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectDestructuring = F3(
	function (config, destructuring, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onDestructuring,
			A2(
				_stil4m$elm_syntax$Elm_Inspector$inspectExpression,
				config,
				_elm_lang$core$Tuple$second(destructuring)),
			destructuring,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectFunction = F3(
	function (config, $function, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onFunction,
			function (_p15) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Basics$identity,
					A2(
						_elm_lang$core$Maybe$map,
						_stil4m$elm_syntax$Elm_Inspector$inspectSignature(config),
						$function.signature))(
					A3(_stil4m$elm_syntax$Elm_Inspector$inspectExpression, config, $function.declaration.expression, _p15));
			},
			$function,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectDeclaration = F3(
	function (config, declaration, context) {
		var _p16 = declaration;
		switch (_p16.ctor) {
			case 'FuncDecl':
				return A3(_stil4m$elm_syntax$Elm_Inspector$inspectFunction, config, _p16._0, context);
			case 'AliasDecl':
				return A3(_stil4m$elm_syntax$Elm_Inspector$inspectTypeAlias, config, _p16._0, context);
			case 'TypeDecl':
				return A3(_stil4m$elm_syntax$Elm_Inspector$inspectType, config, _p16._0, context);
			case 'PortDeclaration':
				return A3(_stil4m$elm_syntax$Elm_Inspector$inspectPortDeclaration, config, _p16._0, context);
			case 'InfixDeclaration':
				return context;
			default:
				return A3(
					_stil4m$elm_syntax$Elm_Inspector$inspectDestructuring,
					config,
					{ctor: '_Tuple2', _0: _p16._0, _1: _p16._1},
					context);
		}
	});
var _stil4m$elm_syntax$Elm_Inspector$inspectDeclarations = F3(
	function (config, declarations, context) {
		return A3(
			_elm_lang$core$List$foldl,
			_stil4m$elm_syntax$Elm_Inspector$inspectDeclaration(config),
			context,
			declarations);
	});
var _stil4m$elm_syntax$Elm_Inspector$inspect = F3(
	function (config, file, context) {
		return A4(
			_stil4m$elm_syntax$Elm_Inspector$actionLambda,
			config.onFile,
			function (_p17) {
				return A3(
					_stil4m$elm_syntax$Elm_Inspector$inspectDeclarations,
					config,
					file.declarations,
					A3(_stil4m$elm_syntax$Elm_Inspector$inspectImports, config, file.imports, _p17));
			},
			file,
			context);
	});
var _stil4m$elm_syntax$Elm_Inspector$Config = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return {onFile: a, onImport: b, onFunction: c, onFunctionSignature: d, onPortDeclaration: e, onTypeAlias: f, onDestructuring: g, onExpression: h, onOperatorApplication: i, onTypeAnnotation: j, onLambda: k, onLetBlock: l, onCase: m, onFunctionOrValue: n, onRecordAccess: o, onRecordUpdate: p};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _stil4m$elm_syntax$Elm_Inspector$Inner = function (a) {
	return {ctor: 'Inner', _0: a};
};
var _stil4m$elm_syntax$Elm_Inspector$Post = function (a) {
	return {ctor: 'Post', _0: a};
};
var _stil4m$elm_syntax$Elm_Inspector$Pre = function (a) {
	return {ctor: 'Pre', _0: a};
};
var _stil4m$elm_syntax$Elm_Inspector$Continue = {ctor: 'Continue'};
var _stil4m$elm_syntax$Elm_Inspector$defaultConfig = {onFile: _stil4m$elm_syntax$Elm_Inspector$Continue, onImport: _stil4m$elm_syntax$Elm_Inspector$Continue, onFunction: _stil4m$elm_syntax$Elm_Inspector$Continue, onPortDeclaration: _stil4m$elm_syntax$Elm_Inspector$Continue, onFunctionSignature: _stil4m$elm_syntax$Elm_Inspector$Continue, onTypeAnnotation: _stil4m$elm_syntax$Elm_Inspector$Continue, onTypeAlias: _stil4m$elm_syntax$Elm_Inspector$Continue, onDestructuring: _stil4m$elm_syntax$Elm_Inspector$Continue, onExpression: _stil4m$elm_syntax$Elm_Inspector$Continue, onLambda: _stil4m$elm_syntax$Elm_Inspector$Continue, onOperatorApplication: _stil4m$elm_syntax$Elm_Inspector$Continue, onLetBlock: _stil4m$elm_syntax$Elm_Inspector$Continue, onCase: _stil4m$elm_syntax$Elm_Inspector$Continue, onFunctionOrValue: _stil4m$elm_syntax$Elm_Inspector$Continue, onRecordAccess: _stil4m$elm_syntax$Elm_Inspector$Continue, onRecordUpdate: _stil4m$elm_syntax$Elm_Inspector$Continue};
var _stil4m$elm_syntax$Elm_Inspector$Skip = {ctor: 'Skip'};

var _stil4m$elm_syntax$Elm_Json_Util$decodeTyped = function (opts) {
	return _elm_lang$core$Json_Decode$lazy(
		function (_p0) {
			var _p1 = _p0;
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (t) {
					var _p3 = _elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$filter,
							function (_p2) {
								return A2(
									F2(
										function (x, y) {
											return _elm_lang$core$Native_Utils.eq(x, y);
										}),
									t,
									_elm_lang$core$Tuple$first(_p2));
							},
							opts));
					if (_p3.ctor === 'Just') {
						var _p4 = _p3._0;
						return A2(
							_elm_lang$core$Json_Decode$field,
							_elm_lang$core$Tuple$first(_p4),
							_elm_lang$core$Tuple$second(_p4));
					} else {
						return _elm_lang$core$Json_Decode$fail(
							A2(_elm_lang$core$Basics_ops['++'], 'No decoder for type: ', t));
					}
				},
				A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
		});
};
var _stil4m$elm_syntax$Elm_Json_Util$encodeTyped = F2(
	function (x, v) {
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'type',
					_1: _elm_lang$core$Json_Encode$string(x)
				},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: x, _1: v},
					_1: {ctor: '[]'}
				}
			});
	});

var _stil4m$elm_syntax$Elm_Json_Decode$decodeChar = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (s) {
		var _p0 = _elm_lang$core$String$uncons(s);
		if (_p0.ctor === 'Just') {
			return _elm_lang$core$Json_Decode$succeed(_p0._0._0);
		} else {
			return _elm_lang$core$Json_Decode$fail('Not a char');
		}
	},
	_elm_lang$core$Json_Decode$string);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeExposingList = function (x) {
	return _elm_lang$core$Json_Decode$lazy(
		function (_p1) {
			var _p2 = _p1;
			return _stil4m$elm_syntax$Elm_Json_Util$decodeTyped(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'all',
						_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Exposing$All, _stil4m$elm_syntax$Elm_Syntax_Range$decode)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'explicit',
							_1: A2(
								_elm_lang$core$Json_Decode$map,
								_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit,
								_elm_lang$core$Json_Decode$list(x))
						},
						_1: {ctor: '[]'}
					}
				});
		});
};
var _stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName = _elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeComment = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})),
		A2(_elm_lang$core$Json_Decode$field, 'text', _elm_lang$core$Json_Decode$string)),
	A2(_elm_lang$core$Json_Decode$field, 'range', _stil4m$elm_syntax$Elm_Syntax_Range$decode));
var _stil4m$elm_syntax$Elm_Json_Decode$nameField = A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeQualifiedNameRef = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Pattern$QualifiedNameRef),
		A2(_elm_lang$core$Json_Decode$field, 'moduleName', _stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName)),
	_stil4m$elm_syntax$Elm_Json_Decode$nameField);
var _stil4m$elm_syntax$Elm_Json_Decode$rangeField = A2(_elm_lang$core$Json_Decode$field, 'range', _stil4m$elm_syntax$Elm_Syntax_Range$decode);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeValueConstructorExpose = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})),
		_stil4m$elm_syntax$Elm_Json_Decode$nameField),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeExposedType = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType),
			_stil4m$elm_syntax$Elm_Json_Decode$nameField),
		A2(
			_elm_lang$core$Json_Decode$field,
			'inner',
			_elm_lang$core$Json_Decode$nullable(
				_stil4m$elm_syntax$Elm_Json_Decode$decodeExposingList(_stil4m$elm_syntax$Elm_Json_Decode$decodeValueConstructorExpose)))),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeExpose = _stil4m$elm_syntax$Elm_Json_Util$decodeTyped(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'infix',
			_1: A3(_elm_lang$core$Json_Decode$map2, _stil4m$elm_syntax$Elm_Syntax_Exposing$InfixExpose, _stil4m$elm_syntax$Elm_Json_Decode$nameField, _stil4m$elm_syntax$Elm_Json_Decode$rangeField)
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'function',
				_1: A3(_elm_lang$core$Json_Decode$map2, _stil4m$elm_syntax$Elm_Syntax_Exposing$FunctionExpose, _stil4m$elm_syntax$Elm_Json_Decode$nameField, _stil4m$elm_syntax$Elm_Json_Decode$rangeField)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'typeOrAlias',
					_1: A3(_elm_lang$core$Json_Decode$map2, _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeOrAliasExpose, _stil4m$elm_syntax$Elm_Json_Decode$nameField, _stil4m$elm_syntax$Elm_Json_Decode$rangeField)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'typeexpose',
						_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose, _stil4m$elm_syntax$Elm_Json_Decode$decodeExposedType)
					},
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeDefaultModuleData = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Module$DefaultModuleData),
		A2(_elm_lang$core$Json_Decode$field, 'moduleName', _stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'exposingList',
		_stil4m$elm_syntax$Elm_Json_Decode$decodeExposingList(_stil4m$elm_syntax$Elm_Json_Decode$decodeExpose)));
var _stil4m$elm_syntax$Elm_Json_Decode$decodeEffectModuleData = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Module$EffectModuleData),
				A2(_elm_lang$core$Json_Decode$field, 'moduleName', _stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName)),
			A2(
				_elm_lang$core$Json_Decode$field,
				'exposingList',
				_stil4m$elm_syntax$Elm_Json_Decode$decodeExposingList(_stil4m$elm_syntax$Elm_Json_Decode$decodeExpose))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'command',
			_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string))),
	A2(
		_elm_lang$core$Json_Decode$field,
		'subscription',
		_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string)));
var _stil4m$elm_syntax$Elm_Json_Decode$decodeModule = _stil4m$elm_syntax$Elm_Json_Util$decodeTyped(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'normal',
			_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Module$NormalModule, _stil4m$elm_syntax$Elm_Json_Decode$decodeDefaultModuleData)
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'port',
				_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Module$PortModule, _stil4m$elm_syntax$Elm_Json_Decode$decodeDefaultModuleData)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'effect',
					_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Module$EffectModule, _stil4m$elm_syntax$Elm_Json_Decode$decodeEffectModuleData)
				},
				_1: {ctor: '[]'}
			}
		}
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeImport = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Module$Import),
				A2(_elm_lang$core$Json_Decode$field, 'moduleName', _stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName)),
			A2(
				_elm_lang$core$Json_Decode$field,
				'moduleAlias',
				_elm_lang$core$Json_Decode$nullable(_stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'exposingList',
			_elm_lang$core$Json_Decode$nullable(
				_stil4m$elm_syntax$Elm_Json_Decode$decodeExposingList(_stil4m$elm_syntax$Elm_Json_Decode$decodeExpose)))),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeDocumentation = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Documentation$Documentation),
		A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string)),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation = _elm_lang$core$Json_Decode$lazy(
	function (_p3) {
		var _p4 = _p3;
		return _stil4m$elm_syntax$Elm_Json_Util$decodeTyped(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'generic',
					_1: A3(
						_elm_lang$core$Json_Decode$map2,
						_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$GenericType,
						A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string),
						_stil4m$elm_syntax$Elm_Json_Decode$rangeField)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'typed',
						_1: A5(
							_elm_lang$core$Json_Decode$map4,
							_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Typed,
							A2(_elm_lang$core$Json_Decode$field, 'moduleName', _stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName),
							_stil4m$elm_syntax$Elm_Json_Decode$nameField,
							A2(
								_elm_lang$core$Json_Decode$field,
								'args',
								_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation)),
							_stil4m$elm_syntax$Elm_Json_Decode$rangeField)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'unit',
							_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Unit, _stil4m$elm_syntax$Elm_Json_Decode$rangeField)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'tupled',
								_1: A3(
									_elm_lang$core$Json_Decode$map2,
									_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Tupled,
									A2(
										_elm_lang$core$Json_Decode$field,
										'values',
										_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation)),
									_stil4m$elm_syntax$Elm_Json_Decode$rangeField)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'function',
									_1: A4(
										_elm_lang$core$Json_Decode$map3,
										_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$FunctionTypeAnnotation,
										A2(_elm_lang$core$Json_Decode$field, 'left', _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation),
										A2(_elm_lang$core$Json_Decode$field, 'right', _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation),
										_stil4m$elm_syntax$Elm_Json_Decode$rangeField)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'record',
										_1: A3(
											_elm_lang$core$Json_Decode$map2,
											_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Record,
											A2(_elm_lang$core$Json_Decode$field, 'value', _stil4m$elm_syntax$Elm_Json_Decode$decodeRecordDefinition),
											_stil4m$elm_syntax$Elm_Json_Decode$rangeField)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'genericRecord',
											_1: A4(
												_elm_lang$core$Json_Decode$map3,
												_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$GenericRecord,
												_stil4m$elm_syntax$Elm_Json_Decode$nameField,
												A2(_elm_lang$core$Json_Decode$field, 'values', _stil4m$elm_syntax$Elm_Json_Decode$decodeRecordDefinition),
												_stil4m$elm_syntax$Elm_Json_Decode$rangeField)
										},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeRecordDefinition = _elm_lang$core$Json_Decode$lazy(
	function (_p5) {
		var _p6 = _p5;
		return _elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeRecordField);
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeRecordField = _elm_lang$core$Json_Decode$lazy(
	function (_p7) {
		var _p8 = _p7;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				_stil4m$elm_syntax$Elm_Json_Decode$nameField),
			A2(_elm_lang$core$Json_Decode$field, 'typeAnnotation', _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeValueConstructor = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Type$ValueConstructor),
			_stil4m$elm_syntax$Elm_Json_Decode$nameField),
		A2(
			_elm_lang$core$Json_Decode$field,
			'arguments',
			_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation))),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeType = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Type$Type),
			_stil4m$elm_syntax$Elm_Json_Decode$nameField),
		A2(
			_elm_lang$core$Json_Decode$field,
			'generics',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string))),
	A2(
		_elm_lang$core$Json_Decode$field,
		'constructors',
		_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeValueConstructor)));
var _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAlias = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				A2(
					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
					_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_TypeAlias$TypeAlias),
					A2(
						_elm_lang$core$Json_Decode$field,
						'documentation',
						_elm_lang$core$Json_Decode$nullable(_stil4m$elm_syntax$Elm_Json_Decode$decodeDocumentation))),
				_stil4m$elm_syntax$Elm_Json_Decode$nameField),
			A2(
				_elm_lang$core$Json_Decode$field,
				'generics',
				_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string))),
		A2(_elm_lang$core$Json_Decode$field, 'typeAnnotation', _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation)),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeSignature = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$FunctionSignature),
				A2(_elm_lang$core$Json_Decode$field, 'operatorDefinition', _elm_lang$core$Json_Decode$bool)),
			_stil4m$elm_syntax$Elm_Json_Decode$nameField),
		A2(_elm_lang$core$Json_Decode$field, 'typeAnnotation', _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAnnotation)),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeVariablePointer = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Base$VariablePointer),
		A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string)),
	_stil4m$elm_syntax$Elm_Json_Decode$rangeField);
var _stil4m$elm_syntax$Elm_Json_Decode$decodeTypedWithRange = function (opts) {
	return _elm_lang$core$Json_Decode$lazy(
		function (_p9) {
			var _p10 = _p9;
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (t) {
					var _p12 = _elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$filter,
							function (_p11) {
								return A2(
									F2(
										function (x, y) {
											return _elm_lang$core$Native_Utils.eq(x, y);
										}),
									t,
									_elm_lang$core$Tuple$first(_p11));
							},
							opts));
					if (_p12.ctor === 'Just') {
						var _p13 = _p12._0;
						return A2(
							_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
							A2(
								_elm_lang$core$Json_Decode$field,
								_elm_lang$core$Tuple$first(_p13),
								_elm_lang$core$Tuple$second(_p13)),
							A2(
								_elm_lang$core$Json_Decode$at,
								{
									ctor: '::',
									_0: _elm_lang$core$Tuple$first(_p13),
									_1: {
										ctor: '::',
										_0: 'range',
										_1: {ctor: '[]'}
									}
								},
								_stil4m$elm_syntax$Elm_Syntax_Range$decode));
					} else {
						return _elm_lang$core$Json_Decode$fail(
							A2(_elm_lang$core$Basics_ops['++'], 'No decoder for type: ', t));
					}
				},
				A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
		});
};
var _stil4m$elm_syntax$Elm_Json_Decode$decodePattern = _elm_lang$core$Json_Decode$lazy(
	function (_p14) {
		var _p15 = _p14;
		return _stil4m$elm_syntax$Elm_Json_Decode$decodeTypedWithRange(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'all',
					_1: _elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Pattern$AllPattern)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'unit',
						_1: _elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Pattern$UnitPattern)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'char',
							_1: A2(
								_elm_lang$core$Json_Decode$map,
								_stil4m$elm_syntax$Elm_Syntax_Pattern$CharPattern,
								A2(_elm_lang$core$Json_Decode$field, 'value', _stil4m$elm_syntax$Elm_Json_Decode$decodeChar))
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'string',
								_1: A2(
									_elm_lang$core$Json_Decode$map,
									_stil4m$elm_syntax$Elm_Syntax_Pattern$StringPattern,
									A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'int',
									_1: A2(
										_elm_lang$core$Json_Decode$map,
										_stil4m$elm_syntax$Elm_Syntax_Pattern$IntPattern,
										A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$int))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'float',
										_1: A2(
											_elm_lang$core$Json_Decode$map,
											_stil4m$elm_syntax$Elm_Syntax_Pattern$FloatPattern,
											A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$float))
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'tuple',
											_1: A2(
												_elm_lang$core$Json_Decode$map,
												_stil4m$elm_syntax$Elm_Syntax_Pattern$TuplePattern,
												A2(
													_elm_lang$core$Json_Decode$field,
													'value',
													_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodePattern)))
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'record',
												_1: A2(
													_elm_lang$core$Json_Decode$map,
													_stil4m$elm_syntax$Elm_Syntax_Pattern$RecordPattern,
													A2(
														_elm_lang$core$Json_Decode$field,
														'value',
														_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeVariablePointer)))
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'uncons',
													_1: A3(
														_elm_lang$core$Json_Decode$map2,
														_stil4m$elm_syntax$Elm_Syntax_Pattern$UnConsPattern,
														A2(_elm_lang$core$Json_Decode$field, 'left', _stil4m$elm_syntax$Elm_Json_Decode$decodePattern),
														A2(_elm_lang$core$Json_Decode$field, 'right', _stil4m$elm_syntax$Elm_Json_Decode$decodePattern))
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'list',
														_1: A2(
															_elm_lang$core$Json_Decode$map,
															_stil4m$elm_syntax$Elm_Syntax_Pattern$ListPattern,
															A2(
																_elm_lang$core$Json_Decode$field,
																'value',
																_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodePattern)))
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'var',
															_1: A2(
																_elm_lang$core$Json_Decode$map,
																_stil4m$elm_syntax$Elm_Syntax_Pattern$VarPattern,
																A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string))
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'named',
																_1: A3(
																	_elm_lang$core$Json_Decode$map2,
																	_stil4m$elm_syntax$Elm_Syntax_Pattern$NamedPattern,
																	A2(_elm_lang$core$Json_Decode$field, 'qualified', _stil4m$elm_syntax$Elm_Json_Decode$decodeQualifiedNameRef),
																	A2(
																		_elm_lang$core$Json_Decode$field,
																		'patterns',
																		_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodePattern)))
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'qualifiedName',
																	_1: A2(
																		_elm_lang$core$Json_Decode$map,
																		_stil4m$elm_syntax$Elm_Syntax_Pattern$QualifiedNamePattern,
																		A2(_elm_lang$core$Json_Decode$field, 'value', _stil4m$elm_syntax$Elm_Json_Decode$decodeQualifiedNameRef))
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: 'as',
																		_1: A3(
																			_elm_lang$core$Json_Decode$map2,
																			_stil4m$elm_syntax$Elm_Syntax_Pattern$AsPattern,
																			A2(_elm_lang$core$Json_Decode$field, 'pattern', _stil4m$elm_syntax$Elm_Json_Decode$decodePattern),
																			A2(_elm_lang$core$Json_Decode$field, 'name', _stil4m$elm_syntax$Elm_Json_Decode$decodeVariablePointer))
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: 'parentisized',
																			_1: A2(
																				_elm_lang$core$Json_Decode$map,
																				_stil4m$elm_syntax$Elm_Syntax_Pattern$ParenthesizedPattern,
																				A2(_elm_lang$core$Json_Decode$field, 'value', _stil4m$elm_syntax$Elm_Json_Decode$decodePattern))
																		},
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeLetDeclaration = _elm_lang$core$Json_Decode$lazy(
	function (_p16) {
		var _p17 = _p16;
		return _stil4m$elm_syntax$Elm_Json_Util$decodeTyped(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'function',
					_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$LetFunction, _stil4m$elm_syntax$Elm_Json_Decode$decodeFunction)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'destructuring',
						_1: A3(
							_elm_lang$core$Json_Decode$map2,
							_stil4m$elm_syntax$Elm_Syntax_Expression$LetDestructuring,
							A2(_elm_lang$core$Json_Decode$field, 'pattern', _stil4m$elm_syntax$Elm_Json_Decode$decodePattern),
							A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression))
					},
					_1: {ctor: '[]'}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression = _elm_lang$core$Json_Decode$lazy(
	function (_p18) {
		var _p19 = _p18;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				_stil4m$elm_syntax$Elm_Json_Decode$rangeField),
			A2(_elm_lang$core$Json_Decode$field, 'inner', _stil4m$elm_syntax$Elm_Json_Decode$decodeInnerExpression));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeInnerExpression = _elm_lang$core$Json_Decode$lazy(
	function (_p20) {
		var _p21 = _p20;
		return _stil4m$elm_syntax$Elm_Json_Util$decodeTyped(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'unit',
					_1: _elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$UnitExpr)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'application',
						_1: A2(
							_elm_lang$core$Json_Decode$map,
							_stil4m$elm_syntax$Elm_Syntax_Expression$Application,
							_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeExpression))
					},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'operatorapplication', _1: _stil4m$elm_syntax$Elm_Json_Decode$decodeOperatorApplication},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'functionOrValue',
								_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$FunctionOrValue, _elm_lang$core$Json_Decode$string)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'ifBlock',
									_1: A4(
										_elm_lang$core$Json_Decode$map3,
										_stil4m$elm_syntax$Elm_Syntax_Expression$IfBlock,
										A2(_elm_lang$core$Json_Decode$field, 'clause', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression),
										A2(_elm_lang$core$Json_Decode$field, 'then', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression),
										A2(_elm_lang$core$Json_Decode$field, 'else', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'prefixoperator',
										_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$PrefixOperator, _elm_lang$core$Json_Decode$string)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'operator',
											_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$Operator, _elm_lang$core$Json_Decode$string)
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'integer',
												_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$Integer, _elm_lang$core$Json_Decode$int)
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'float',
													_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$Floatable, _elm_lang$core$Json_Decode$float)
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'negation',
														_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$Negation, _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression)
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'literal',
															_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$Literal, _elm_lang$core$Json_Decode$string)
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'charLiteral',
																_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$CharLiteral, _stil4m$elm_syntax$Elm_Json_Decode$decodeChar)
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'tupled',
																	_1: A2(
																		_elm_lang$core$Json_Decode$map,
																		_stil4m$elm_syntax$Elm_Syntax_Expression$TupledExpression,
																		_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeExpression))
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: 'list',
																		_1: A2(
																			_elm_lang$core$Json_Decode$map,
																			_stil4m$elm_syntax$Elm_Syntax_Expression$ListExpr,
																			_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeExpression))
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: 'parenthesized',
																			_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$ParenthesizedExpression, _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression)
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'let',
																				_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$LetExpression, _stil4m$elm_syntax$Elm_Json_Decode$decodeLetBlock)
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: 'case',
																					_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$CaseExpression, _stil4m$elm_syntax$Elm_Json_Decode$decodeCaseBlock)
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: 'lambda',
																						_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$LambdaExpression, _stil4m$elm_syntax$Elm_Json_Decode$decodeLambda)
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '_Tuple2',
																							_0: 'qualified',
																							_1: A3(
																								_elm_lang$core$Json_Decode$map2,
																								_stil4m$elm_syntax$Elm_Syntax_Expression$QualifiedExpr,
																								A2(_elm_lang$core$Json_Decode$field, 'moduleName', _stil4m$elm_syntax$Elm_Json_Decode$decodeModuleName),
																								_stil4m$elm_syntax$Elm_Json_Decode$nameField)
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '_Tuple2',
																								_0: 'recordAccess',
																								_1: A3(
																									_elm_lang$core$Json_Decode$map2,
																									_stil4m$elm_syntax$Elm_Syntax_Expression$RecordAccess,
																									A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression),
																									_stil4m$elm_syntax$Elm_Json_Decode$nameField)
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: 'recordAccessFunction',
																									_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$RecordAccessFunction, _elm_lang$core$Json_Decode$string)
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '_Tuple2',
																										_0: 'record',
																										_1: A2(
																											_elm_lang$core$Json_Decode$map,
																											_stil4m$elm_syntax$Elm_Syntax_Expression$RecordExpr,
																											_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeRecordSetter))
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '_Tuple2',
																											_0: 'recordUpdate',
																											_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdateExpression, _stil4m$elm_syntax$Elm_Json_Decode$decodeRecordUpdate)
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '_Tuple2',
																												_0: 'glsl',
																												_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Expression$GLSLExpression, _elm_lang$core$Json_Decode$string)
																											},
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeCaseBlock = _elm_lang$core$Json_Decode$lazy(
	function (_p22) {
		var _p23 = _p22;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$CaseBlock),
				A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression)),
			A2(
				_elm_lang$core$Json_Decode$field,
				'cases',
				_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeCase)));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeCase = _elm_lang$core$Json_Decode$lazy(
	function (_p24) {
		var _p25 = _p24;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				A2(_elm_lang$core$Json_Decode$field, 'pattern', _stil4m$elm_syntax$Elm_Json_Decode$decodePattern)),
			A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeLambda = _elm_lang$core$Json_Decode$lazy(
	function (_p26) {
		var _p27 = _p26;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$Lambda),
				A2(
					_elm_lang$core$Json_Decode$field,
					'patterns',
					_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodePattern))),
			A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeLetBlock = _elm_lang$core$Json_Decode$lazy(
	function (_p28) {
		var _p29 = _p28;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$LetBlock),
				A2(
					_elm_lang$core$Json_Decode$field,
					'declarations',
					_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeLetDeclaration))),
			A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeOperatorApplication = _elm_lang$core$Json_Decode$lazy(
	function (_p30) {
		var _p31 = _p30;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				A2(
					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
					A2(
						_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
						_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$OperatorApplication),
						A2(_elm_lang$core$Json_Decode$field, 'operator', _elm_lang$core$Json_Decode$string)),
					A2(_elm_lang$core$Json_Decode$field, 'direction', _stil4m$elm_syntax$Elm_Syntax_Infix$decodeDirection)),
				A2(_elm_lang$core$Json_Decode$field, 'left', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression)),
			A2(_elm_lang$core$Json_Decode$field, 'right', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeRecordSetter = _elm_lang$core$Json_Decode$lazy(
	function (_p32) {
		var _p33 = _p32;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				A2(_elm_lang$core$Json_Decode$field, 'field', _elm_lang$core$Json_Decode$string)),
			A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeRecordUpdate = _elm_lang$core$Json_Decode$lazy(
	function (_p34) {
		var _p35 = _p34;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdate),
				_stil4m$elm_syntax$Elm_Json_Decode$nameField),
			A2(
				_elm_lang$core$Json_Decode$field,
				'updates',
				_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeRecordSetter)));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeFunction = _elm_lang$core$Json_Decode$lazy(
	function (_p36) {
		var _p37 = _p36;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				A2(
					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
					_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$Function),
					A2(
						_elm_lang$core$Json_Decode$field,
						'documentation',
						_elm_lang$core$Json_Decode$nullable(_stil4m$elm_syntax$Elm_Json_Decode$decodeDocumentation))),
				A2(
					_elm_lang$core$Json_Decode$field,
					'signature',
					_elm_lang$core$Json_Decode$nullable(_stil4m$elm_syntax$Elm_Json_Decode$decodeSignature))),
			A2(_elm_lang$core$Json_Decode$field, 'declaration', _stil4m$elm_syntax$Elm_Json_Decode$decodeFunctionDeclaration));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeFunctionDeclaration = _elm_lang$core$Json_Decode$lazy(
	function (_p38) {
		var _p39 = _p38;
		return A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				A2(
					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
					A2(
						_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
						_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$FunctionDeclaration),
						A2(_elm_lang$core$Json_Decode$field, 'operatorDefinition', _elm_lang$core$Json_Decode$bool)),
					A2(_elm_lang$core$Json_Decode$field, 'name', _stil4m$elm_syntax$Elm_Json_Decode$decodeVariablePointer)),
				A2(
					_elm_lang$core$Json_Decode$field,
					'arguments',
					_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodePattern))),
			A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression));
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeDeclaration = _elm_lang$core$Json_Decode$lazy(
	function (_p40) {
		var _p41 = _p40;
		return _stil4m$elm_syntax$Elm_Json_Util$decodeTyped(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'function',
					_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Declaration$FuncDecl, _stil4m$elm_syntax$Elm_Json_Decode$decodeFunction)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'typeAlias',
						_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Declaration$AliasDecl, _stil4m$elm_syntax$Elm_Json_Decode$decodeTypeAlias)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'typedecl',
							_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Declaration$TypeDecl, _stil4m$elm_syntax$Elm_Json_Decode$decodeType)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'port',
								_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Declaration$PortDeclaration, _stil4m$elm_syntax$Elm_Json_Decode$decodeSignature)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'infix',
									_1: A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Syntax_Declaration$InfixDeclaration, _stil4m$elm_syntax$Elm_Syntax_Infix$decode)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'destructuring',
										_1: A3(
											_elm_lang$core$Json_Decode$map2,
											_stil4m$elm_syntax$Elm_Syntax_Declaration$Destructuring,
											A2(_elm_lang$core$Json_Decode$field, 'pattern', _stil4m$elm_syntax$Elm_Json_Decode$decodePattern),
											A2(_elm_lang$core$Json_Decode$field, 'expression', _stil4m$elm_syntax$Elm_Json_Decode$decodeExpression))
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Json_Decode$decodeFile = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_stil4m$elm_syntax$Elm_Syntax_File$File),
				A2(_elm_lang$core$Json_Decode$field, 'moduleDefinition', _stil4m$elm_syntax$Elm_Json_Decode$decodeModule)),
			A2(
				_elm_lang$core$Json_Decode$field,
				'imports',
				_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeImport))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'declarations',
			_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeDeclaration))),
	A2(
		_elm_lang$core$Json_Decode$field,
		'comments',
		_elm_lang$core$Json_Decode$list(_stil4m$elm_syntax$Elm_Json_Decode$decodeComment)));
var _stil4m$elm_syntax$Elm_Json_Decode$decode = A2(_elm_lang$core$Json_Decode$map, _stil4m$elm_syntax$Elm_Internal_RawFile$Raw, _stil4m$elm_syntax$Elm_Json_Decode$decodeFile);

var _stil4m$elm_syntax$Elm_Parser_State$getComments = function (_p0) {
	var _p1 = _p0;
	return _p1._0.comments;
};
var _stil4m$elm_syntax$Elm_Parser_State$currentIndent = function (_p2) {
	var _p3 = _p2;
	return A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		_elm_lang$core$List$head(_p3._0.indents));
};
var _stil4m$elm_syntax$Elm_Parser_State$State = function (a) {
	return {ctor: 'State', _0: a};
};
var _stil4m$elm_syntax$Elm_Parser_State$emptyState = _stil4m$elm_syntax$Elm_Parser_State$State(
	{
		indents: {ctor: '[]'},
		comments: {ctor: '[]'}
	});
var _stil4m$elm_syntax$Elm_Parser_State$popIndent = function (_p4) {
	var _p5 = _p4;
	var _p6 = _p5._0;
	return _stil4m$elm_syntax$Elm_Parser_State$State(
		_elm_lang$core$Native_Utils.update(
			_p6,
			{
				indents: A2(_elm_lang$core$List$drop, 1, _p6.indents)
			}));
};
var _stil4m$elm_syntax$Elm_Parser_State$pushIndent = F2(
	function (x, _p7) {
		var _p8 = _p7;
		var _p9 = _p8._0;
		return _stil4m$elm_syntax$Elm_Parser_State$State(
			_elm_lang$core$Native_Utils.update(
				_p9,
				{
					indents: {ctor: '::', _0: x, _1: _p9.indents}
				}));
	});
var _stil4m$elm_syntax$Elm_Parser_State$addComment = F2(
	function (pair, _p10) {
		var _p11 = _p10;
		var _p12 = _p11._0;
		return _stil4m$elm_syntax$Elm_Parser_State$State(
			_elm_lang$core$Native_Utils.update(
				_p12,
				{
					comments: {ctor: '::', _0: pair, _1: _p12.comments}
				}));
	});

var _stil4m$elm_syntax$Elm_Parser_Tokens$allowedOperatorTokens = {
	ctor: '::',
	_0: _elm_lang$core$Native_Utils.chr('+'),
	_1: {
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('-'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr(':'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('/'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('*'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('>'),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('<'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('='),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('/'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('&'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr('^'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('%'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('|'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr('!'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('.'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('#'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('$'),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Native_Utils.chr('≡'),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$core$Native_Utils.chr('~'),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$core$Native_Utils.chr('?'),
																				_1: {
																					ctor: '::',
																					_0: _elm_lang$core$Native_Utils.chr('@'),
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _stil4m$elm_syntax$Elm_Parser_Tokens$allowedPrefixOperatorTokens = {
	ctor: '::',
	_0: _elm_lang$core$Native_Utils.chr(','),
	_1: _stil4m$elm_syntax$Elm_Parser_Tokens$allowedOperatorTokens
};
var _stil4m$elm_syntax$Elm_Parser_Tokens$excludedOperators = {
	ctor: '::',
	_0: ':',
	_1: {
		ctor: '::',
		_0: '->',
		_1: {
			ctor: '::',
			_0: '--',
			_1: {
				ctor: '::',
				_0: '=',
				_1: {ctor: '[]'}
			}
		}
	}
};
var _stil4m$elm_syntax$Elm_Parser_Tokens$operatorTokenFromList = function (allowedChars) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['>>='],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_lang$core$String$fromList,
			_elm_community$parser_combinators$Combine$many1(
				_elm_community$parser_combinators$Combine_Char$oneOf(allowedChars))),
		function (m) {
			return A2(_elm_lang$core$List$member, m, _stil4m$elm_syntax$Elm_Parser_Tokens$excludedOperators) ? _elm_community$parser_combinators$Combine$fail('operator is not allowed') : _elm_community$parser_combinators$Combine$succeed(m);
		});
};
var _stil4m$elm_syntax$Elm_Parser_Tokens$prefixOperatorToken = _stil4m$elm_syntax$Elm_Parser_Tokens$operatorTokenFromList(_stil4m$elm_syntax$Elm_Parser_Tokens$allowedPrefixOperatorTokens);
var _stil4m$elm_syntax$Elm_Parser_Tokens$infixOperatorToken = _stil4m$elm_syntax$Elm_Parser_Tokens$operatorTokenFromList(_stil4m$elm_syntax$Elm_Parser_Tokens$allowedOperatorTokens);
var _stil4m$elm_syntax$Elm_Parser_Tokens$typeName = _elm_community$parser_combinators$Combine$regex('[A-Z][a-zA-Z0-9_]*');
var _stil4m$elm_syntax$Elm_Parser_Tokens$moduleName = A2(
	_elm_community$parser_combinators$Combine$sepBy1,
	_elm_community$parser_combinators$Combine$string('.'),
	_stil4m$elm_syntax$Elm_Parser_Tokens$typeName);
var _stil4m$elm_syntax$Elm_Parser_Tokens$functionNamePatternInfix = '`([A-Z][a-zA-Z0-9_]*\\.)*[a-z][a-zA-Z0-9_]*\'?`';
var _stil4m$elm_syntax$Elm_Parser_Tokens$functionNamePattern = '[a-z][a-zA-Z0-9_]*\'?';
var _stil4m$elm_syntax$Elm_Parser_Tokens$escapedChar = A2(
	_elm_community$parser_combinators$Combine_ops['*>'],
	_elm_community$parser_combinators$Combine_Char$char(
		_elm_lang$core$Native_Utils.chr('\\')),
	_elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: A2(
				_elm_community$parser_combinators$Combine_ops['<$'],
				_elm_lang$core$Native_Utils.chr('\''),
				_elm_community$parser_combinators$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr('\''))),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_community$parser_combinators$Combine_ops['<$'],
					_elm_lang$core$Native_Utils.chr('\"'),
					_elm_community$parser_combinators$Combine_Char$char(
						_elm_lang$core$Native_Utils.chr('\"'))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_community$parser_combinators$Combine_ops['<$'],
						_elm_lang$core$Native_Utils.chr('\n'),
						_elm_community$parser_combinators$Combine_Char$char(
							_elm_lang$core$Native_Utils.chr('n'))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_community$parser_combinators$Combine_ops['<$'],
							_elm_lang$core$Native_Utils.chr('\t'),
							_elm_community$parser_combinators$Combine_Char$char(
								_elm_lang$core$Native_Utils.chr('t'))),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_community$parser_combinators$Combine_ops['<$'],
								_elm_lang$core$Native_Utils.chr('\\'),
								_elm_community$parser_combinators$Combine_Char$char(
									_elm_lang$core$Native_Utils.chr('\\'))),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_community$parser_combinators$Combine_ops['<$'],
									_elm_lang$core$Native_Utils.chr(''),
									_elm_community$parser_combinators$Combine_Char$char(
										_elm_lang$core$Native_Utils.chr('a'))),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_community$parser_combinators$Combine_ops['<$'],
										_elm_lang$core$Native_Utils.chr('\b'),
										_elm_community$parser_combinators$Combine_Char$char(
											_elm_lang$core$Native_Utils.chr('b'))),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_community$parser_combinators$Combine_ops['<$'],
											_elm_lang$core$Native_Utils.chr('\f'),
											_elm_community$parser_combinators$Combine_Char$char(
												_elm_lang$core$Native_Utils.chr('f'))),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_community$parser_combinators$Combine_ops['<$'],
												_elm_lang$core$Native_Utils.chr('\r'),
												_elm_community$parser_combinators$Combine_Char$char(
													_elm_lang$core$Native_Utils.chr('r'))),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_community$parser_combinators$Combine_ops['<$'],
													_elm_lang$core$Native_Utils.chr('\v'),
													_elm_community$parser_combinators$Combine_Char$char(
														_elm_lang$core$Native_Utils.chr('v'))),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_community$parser_combinators$Combine_ops['>>='],
														A2(
															_elm_community$parser_combinators$Combine_ops['*>'],
															_elm_community$parser_combinators$Combine_Char$char(
																_elm_lang$core$Native_Utils.chr('x')),
															_elm_community$parser_combinators$Combine$regex('[0-9A-Fa-f]{2}')),
														function (l) {
															var _p0 = _rtfeldman$hex$Hex$fromString(
																_elm_lang$core$String$toLower(l));
															if (_p0.ctor === 'Ok') {
																return _elm_community$parser_combinators$Combine$succeed(
																	_elm_lang$core$Char$fromCode(_p0._0));
															} else {
																return _elm_community$parser_combinators$Combine$fail(_p0._0);
															}
														}),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}));
var _stil4m$elm_syntax$Elm_Parser_Tokens$quotedSingleQuote = A2(
	_elm_community$parser_combinators$Combine_ops['<*'],
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_elm_community$parser_combinators$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('\'')),
		_stil4m$elm_syntax$Elm_Parser_Tokens$escapedChar),
	_elm_community$parser_combinators$Combine_Char$char(
		_elm_lang$core$Native_Utils.chr('\'')));
var _stil4m$elm_syntax$Elm_Parser_Tokens$characterLiteral = A2(
	_elm_community$parser_combinators$Combine$or,
	_stil4m$elm_syntax$Elm_Parser_Tokens$quotedSingleQuote,
	A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine_Char$char(
				_elm_lang$core$Native_Utils.chr('\'')),
			_elm_community$parser_combinators$Combine_Char$anyChar),
		_elm_community$parser_combinators$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('\''))));
var _stil4m$elm_syntax$Elm_Parser_Tokens$stringLiteral = A2(
	_elm_community$parser_combinators$Combine_ops['<*'],
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_elm_community$parser_combinators$Combine_Char$char(
			_elm_lang$core$Native_Utils.chr('\"')),
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_lang$core$String$concat,
			_elm_community$parser_combinators$Combine$many(
				_elm_community$parser_combinators$Combine$choice(
					{
						ctor: '::',
						_0: _elm_community$parser_combinators$Combine$regex('[^\\\\\\\"]+'),
						_1: {
							ctor: '::',
							_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _elm_lang$core$String$fromChar, _stil4m$elm_syntax$Elm_Parser_Tokens$escapedChar),
							_1: {ctor: '[]'}
						}
					})))),
	_elm_community$parser_combinators$Combine_Char$char(
		_elm_lang$core$Native_Utils.chr('\"')));
var _stil4m$elm_syntax$Elm_Parser_Tokens$multiLineStringLiteral = A3(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('\"\"\"'),
	_elm_community$parser_combinators$Combine$string('\"\"\"'),
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_elm_lang$core$String$concat,
		_elm_community$parser_combinators$Combine$many(
			A2(
				_elm_community$parser_combinators$Combine$or,
				_elm_community$parser_combinators$Combine$regex('[^\\\\\\\"]+'),
				A2(
					_elm_community$parser_combinators$Combine_ops['>>='],
					_elm_community$parser_combinators$Combine$lookAhead(
						A2(_elm_community$parser_combinators$Combine$count, 3, _elm_community$parser_combinators$Combine_Char$anyChar)),
					function (x) {
						return _elm_lang$core$Native_Utils.eq(
							x,
							{
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('\"'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('\"'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('\"'),
										_1: {ctor: '[]'}
									}
								}
							}) ? _elm_community$parser_combinators$Combine$fail('end of input') : A2(
							_elm_community$parser_combinators$Combine_ops['<$>'],
							_elm_lang$core$String$fromChar,
							A2(_elm_community$parser_combinators$Combine$or, _stil4m$elm_syntax$Elm_Parser_Tokens$escapedChar, _elm_community$parser_combinators$Combine_Char$anyChar));
					})))));
var _stil4m$elm_syntax$Elm_Parser_Tokens$unitToken = _elm_community$parser_combinators$Combine$string('()');
var _stil4m$elm_syntax$Elm_Parser_Tokens$ofToken = _elm_community$parser_combinators$Combine$string('of');
var _stil4m$elm_syntax$Elm_Parser_Tokens$caseToken = _elm_community$parser_combinators$Combine$string('case');
var _stil4m$elm_syntax$Elm_Parser_Tokens$elseToken = _elm_community$parser_combinators$Combine$string('else');
var _stil4m$elm_syntax$Elm_Parser_Tokens$thenToken = _elm_community$parser_combinators$Combine$string('then');
var _stil4m$elm_syntax$Elm_Parser_Tokens$ifToken = _elm_community$parser_combinators$Combine$string('if');
var _stil4m$elm_syntax$Elm_Parser_Tokens$asToken = _elm_community$parser_combinators$Combine$string('as');
var _stil4m$elm_syntax$Elm_Parser_Tokens$importToken = _elm_community$parser_combinators$Combine$string('import');
var _stil4m$elm_syntax$Elm_Parser_Tokens$exposingToken = _elm_community$parser_combinators$Combine$string('exposing');
var _stil4m$elm_syntax$Elm_Parser_Tokens$moduleToken = _elm_community$parser_combinators$Combine$string('module');
var _stil4m$elm_syntax$Elm_Parser_Tokens$portToken = _elm_community$parser_combinators$Combine$string('port');
var _stil4m$elm_syntax$Elm_Parser_Tokens$reserved = _elm_lang$core$Dict$fromList(
	A2(
		_elm_lang$core$List$map,
		A2(
			_elm_lang$core$Basics$flip,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			true),
		{
			ctor: '::',
			_0: 'module',
			_1: {
				ctor: '::',
				_0: 'exposing',
				_1: {
					ctor: '::',
					_0: 'import',
					_1: {
						ctor: '::',
						_0: 'as',
						_1: {
							ctor: '::',
							_0: 'if',
							_1: {
								ctor: '::',
								_0: 'then',
								_1: {
									ctor: '::',
									_0: 'else',
									_1: {
										ctor: '::',
										_0: 'let',
										_1: {
											ctor: '::',
											_0: 'in',
											_1: {
												ctor: '::',
												_0: 'case',
												_1: {
													ctor: '::',
													_0: 'of',
													_1: {
														ctor: '::',
														_0: 'port',
														_1: {
															ctor: '::',
															_0: 'infixr',
															_1: {
																ctor: '::',
																_0: 'infixl',
																_1: {
																	ctor: '::',
																	_0: 'type',
																	_1: {
																		ctor: '::',
																		_0: 'where',
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}));
var _stil4m$elm_syntax$Elm_Parser_Tokens$notReserved = function (match) {
	return A2(_elm_lang$core$Dict$member, match, _stil4m$elm_syntax$Elm_Parser_Tokens$reserved) ? _elm_community$parser_combinators$Combine$fail('functionName is reserved') : _elm_community$parser_combinators$Combine$succeed(match);
};
var _stil4m$elm_syntax$Elm_Parser_Tokens$functionName = A2(
	_elm_community$parser_combinators$Combine$or,
	_elm_community$parser_combinators$Combine$regex(_stil4m$elm_syntax$Elm_Parser_Tokens$functionNamePatternInfix),
	A2(
		_elm_community$parser_combinators$Combine_ops['>>='],
		_elm_community$parser_combinators$Combine$regex(_stil4m$elm_syntax$Elm_Parser_Tokens$functionNamePattern),
		_stil4m$elm_syntax$Elm_Parser_Tokens$notReserved));
var _stil4m$elm_syntax$Elm_Parser_Tokens$functionOrTypeName = A2(_elm_community$parser_combinators$Combine$or, _stil4m$elm_syntax$Elm_Parser_Tokens$functionName, _stil4m$elm_syntax$Elm_Parser_Tokens$typeName);

var _stil4m$elm_syntax$Elm_Parser_Ranges$asPointerLocation = function (_p0) {
	var _p1 = _p0;
	return {row: _p1.line, column: _p1.column};
};
var _stil4m$elm_syntax$Elm_Parser_Ranges$withRangeCustomStart = F2(
	function (_p2, p) {
		var _p3 = _p2;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			p,
			_elm_community$parser_combinators$Combine$withLocation(
				function (end) {
					return _elm_community$parser_combinators$Combine$succeed(
						{
							start: _p3.start,
							end: _stil4m$elm_syntax$Elm_Parser_Ranges$asPointerLocation(end)
						});
				}));
	});
var _stil4m$elm_syntax$Elm_Parser_Ranges$withRange = function (p) {
	return _elm_community$parser_combinators$Combine$withLocation(
		function (start) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				p,
				_elm_community$parser_combinators$Combine$withLocation(
					function (end) {
						return _elm_community$parser_combinators$Combine$succeed(
							{
								start: _stil4m$elm_syntax$Elm_Parser_Ranges$asPointerLocation(start),
								end: _stil4m$elm_syntax$Elm_Parser_Ranges$asPointerLocation(end)
							});
					}));
		});
};
var _stil4m$elm_syntax$Elm_Parser_Ranges$withRangeTuple = function (p) {
	return _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(
				F2(
					function (pv, r) {
						return {
							ctor: '_Tuple2',
							_0: r,
							_1: pv(r)
						};
					})),
			p));
};

var _stil4m$elm_syntax$Elm_Parser_Whitespace$untilNewlineToken = _elm_community$parser_combinators$Combine$regex('[^\r\n]*');
var _stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine = _elm_community$parser_combinators$Combine$regex('\r?\n');
var _stil4m$elm_syntax$Elm_Parser_Whitespace$many1Spaces = _elm_community$parser_combinators$Combine$regex(' +');
var _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces = _elm_community$parser_combinators$Combine$regex(' *');
var _stil4m$elm_syntax$Elm_Parser_Whitespace$nSpaces = function (x) {
	return _elm_community$parser_combinators$Combine$regex(
		A2(
			_elm_lang$core$Basics_ops['++'],
			' {',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(x),
				'}')));
};

var _stil4m$elm_syntax$Elm_Parser_Comments$multilineCommentInner = _elm_community$parser_combinators$Combine$lazy(
	function (_p0) {
		var _p1 = _p0;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_lang$core$String$concat,
			_elm_community$parser_combinators$Combine$sequence(
				{
					ctor: '::',
					_0: _elm_community$parser_combinators$Combine$string('{-'),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_community$parser_combinators$Combine_ops['<$>'],
							_elm_lang$core$String$concat,
							A2(
								_elm_community$parser_combinators$Combine$manyTill,
								A2(
									_elm_community$parser_combinators$Combine_ops['>>='],
									_elm_community$parser_combinators$Combine$lookAhead(
										A2(_elm_community$parser_combinators$Combine$count, 2, _elm_community$parser_combinators$Combine_Char$anyChar)),
									function (x) {
										return _elm_lang$core$Native_Utils.eq(
											x,
											{
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('{'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('-'),
													_1: {ctor: '[]'}
												}
											}) ? _stil4m$elm_syntax$Elm_Parser_Comments$multilineCommentInner : A2(_elm_community$parser_combinators$Combine_ops['<$>'], _elm_lang$core$String$fromChar, _elm_community$parser_combinators$Combine_Char$anyChar);
									}),
								_elm_community$parser_combinators$Combine$string('-}'))),
						_1: {
							ctor: '::',
							_0: _elm_community$parser_combinators$Combine$succeed('-}'),
							_1: {ctor: '[]'}
						}
					}
				}));
	});
var _stil4m$elm_syntax$Elm_Parser_Comments$addCommentToState = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['>>='],
		p,
		function (pair) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$modifyState(
					_stil4m$elm_syntax$Elm_Parser_State$addComment(pair)),
				_elm_community$parser_combinators$Combine$succeed(
					{ctor: '_Tuple0'}));
		});
};
var _stil4m$elm_syntax$Elm_Parser_Comments$parseComment = function (commentParser) {
	return _stil4m$elm_syntax$Elm_Parser_Comments$addCommentToState(
		_stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				commentParser)));
};
var _stil4m$elm_syntax$Elm_Parser_Comments$singleLineComment = _stil4m$elm_syntax$Elm_Parser_Comments$parseComment(
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					})),
			_elm_community$parser_combinators$Combine$string('--')),
		_stil4m$elm_syntax$Elm_Parser_Whitespace$untilNewlineToken));
var _stil4m$elm_syntax$Elm_Parser_Comments$multilineComment = _elm_community$parser_combinators$Combine$lazy(
	function (_p2) {
		var _p3 = _p2;
		return _stil4m$elm_syntax$Elm_Parser_Comments$parseComment(_stil4m$elm_syntax$Elm_Parser_Comments$multilineCommentInner);
	});

var _stil4m$elm_syntax$Elm_Parser_Util$newLineWithIndentPlus = function (state) {
	return _elm_community$parser_combinators$Combine$many1(
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine,
					_elm_community$parser_combinators$Combine$many(
						A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces, _stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine))),
				_stil4m$elm_syntax$Elm_Parser_Whitespace$nSpaces(
					_stil4m$elm_syntax$Elm_Parser_State$currentIndent(state))),
			_stil4m$elm_syntax$Elm_Parser_Whitespace$many1Spaces));
};
var _stil4m$elm_syntax$Elm_Parser_Util$newLineWithIndentExact = function (state) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine,
			_elm_community$parser_combinators$Combine$many(
				A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces, _stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine))),
		_stil4m$elm_syntax$Elm_Parser_Whitespace$nSpaces(
			_stil4m$elm_syntax$Elm_Parser_State$currentIndent(state)));
};
var _stil4m$elm_syntax$Elm_Parser_Util$newLineWithSomeIndent = _elm_community$parser_combinators$Combine$many1(
	A2(_elm_community$parser_combinators$Combine_ops['<*'], _stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine, _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces));
var _stil4m$elm_syntax$Elm_Parser_Util$multiLineCommentWithTrailingSpaces = A2(_elm_community$parser_combinators$Combine_ops['<*'], _stil4m$elm_syntax$Elm_Parser_Comments$multilineComment, _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces);
var _stil4m$elm_syntax$Elm_Parser_Util$someComment = A2(_elm_community$parser_combinators$Combine$or, _stil4m$elm_syntax$Elm_Parser_Comments$singleLineComment, _stil4m$elm_syntax$Elm_Parser_Util$multiLineCommentWithTrailingSpaces);
var _stil4m$elm_syntax$Elm_Parser_Util$commentSequence = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	{ctor: '_Tuple0'},
	_elm_community$parser_combinators$Combine$many(
		A2(
			_elm_community$parser_combinators$Combine$or,
			_stil4m$elm_syntax$Elm_Parser_Util$someComment,
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine, _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces),
				_stil4m$elm_syntax$Elm_Parser_Util$someComment))));
var _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace = _elm_community$parser_combinators$Combine$withState(
	function (state) {
		return _elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: A2(
					_elm_community$parser_combinators$Combine_ops['<$'],
					{ctor: '_Tuple0'},
					A2(
						_elm_community$parser_combinators$Combine_ops['<*'],
						_elm_community$parser_combinators$Combine$regex(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'(( *\\n)+ {',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_stil4m$elm_syntax$Elm_Parser_State$currentIndent(state)),
									'} +| +)'))),
						_elm_community$parser_combinators$Combine$lookAhead(
							_elm_community$parser_combinators$Combine$regex('[a-zA-Z0-9\\(\\+/*\\|\\>]')))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_community$parser_combinators$Combine_ops['<$'],
						{ctor: '_Tuple0'},
						_elm_community$parser_combinators$Combine$many1(
							A2(
								_elm_community$parser_combinators$Combine_ops['*>'],
								A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces, _stil4m$elm_syntax$Elm_Parser_Util$commentSequence),
								_stil4m$elm_syntax$Elm_Parser_Util$newLineWithIndentPlus(state)))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_community$parser_combinators$Combine_ops['<*'],
							A2(
								_elm_community$parser_combinators$Combine_ops['<$'],
								{ctor: '_Tuple0'},
								_stil4m$elm_syntax$Elm_Parser_Whitespace$many1Spaces),
							_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$someComment)),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Parser_Util$trimmed = function (x) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
			x),
		_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace));
};
var _stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace = _elm_community$parser_combinators$Combine$withState(
	function (state) {
		return _elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: A2(
					_elm_community$parser_combinators$Combine_ops['<$'],
					{ctor: '_Tuple0'},
					A2(
						_elm_community$parser_combinators$Combine_ops['<*'],
						_elm_community$parser_combinators$Combine$regex(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'( *\\n)+ {',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_stil4m$elm_syntax$Elm_Parser_State$currentIndent(state)),
									'}'))),
						_elm_community$parser_combinators$Combine$lookAhead(
							_elm_community$parser_combinators$Combine$regex('[a-zA-Z0-9\\(\\+/*\\|\\>]')))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_community$parser_combinators$Combine_ops['<$'],
						{ctor: '_Tuple0'},
						_elm_community$parser_combinators$Combine$many1(
							A2(
								_elm_community$parser_combinators$Combine_ops['*>'],
								A2(
									_elm_community$parser_combinators$Combine_ops['*>'],
									_stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces,
									_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$someComment)),
								_stil4m$elm_syntax$Elm_Parser_Util$newLineWithIndentExact(state)))),
					_1: {ctor: '[]'}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Parser_Util$unstrictIndentWhitespace = _elm_community$parser_combinators$Combine$many1(
	A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			_stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces,
			_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$someComment)),
		_stil4m$elm_syntax$Elm_Parser_Util$newLineWithSomeIndent));
var _stil4m$elm_syntax$Elm_Parser_Util$asPointer = function (p) {
	return _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
		A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Base$VariablePointer, p));
};

var _stil4m$elm_syntax$Elm_Parser_Infix$infixDirection = _elm_community$parser_combinators$Combine$choice(
	{
		ctor: '::',
		_0: A2(
			_elm_community$parser_combinators$Combine_ops['<$'],
			_stil4m$elm_syntax$Elm_Syntax_Infix$Right,
			_elm_community$parser_combinators$Combine$string('infixr')),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_community$parser_combinators$Combine_ops['<$'],
				_stil4m$elm_syntax$Elm_Syntax_Infix$Left,
				A2(
					_elm_community$parser_combinators$Combine$or,
					_elm_community$parser_combinators$Combine$string('infixl'),
					_elm_community$parser_combinators$Combine$string('infix'))),
			_1: {ctor: '[]'}
		}
	});
var _stil4m$elm_syntax$Elm_Parser_Infix$infixDefinition = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Infix$Infix),
			_stil4m$elm_syntax$Elm_Parser_Infix$infixDirection),
		A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _elm_community$parser_combinators$Combine_Num$int)),
	A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Tokens$prefixOperatorToken));

var _stil4m$elm_syntax$Elm_Parser_Patterns$unitPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p0) {
		var _p1 = _p0;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$'],
			_stil4m$elm_syntax$Elm_Syntax_Pattern$UnitPattern,
			_elm_community$parser_combinators$Combine$string('()'));
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$allPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p2) {
		var _p3 = _p2;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$'],
			_stil4m$elm_syntax$Elm_Syntax_Pattern$AllPattern,
			_elm_community$parser_combinators$Combine$string('_'));
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$qualifiedNameRef = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Pattern$QualifiedNameRef),
		_elm_community$parser_combinators$Combine$many(
			A2(
				_elm_community$parser_combinators$Combine_ops['<*'],
				_stil4m$elm_syntax$Elm_Parser_Tokens$typeName,
				_elm_community$parser_combinators$Combine$string('.')))),
	_stil4m$elm_syntax$Elm_Parser_Tokens$typeName);
var _stil4m$elm_syntax$Elm_Parser_Patterns$qualifiedNamePattern = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Pattern$QualifiedNamePattern, _stil4m$elm_syntax$Elm_Parser_Patterns$qualifiedNameRef);
var _stil4m$elm_syntax$Elm_Parser_Patterns$varPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p4) {
		var _p5 = _p4;
		return A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Pattern$VarPattern, _stil4m$elm_syntax$Elm_Parser_Tokens$functionName);
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$recordPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p6) {
		var _p7 = _p6;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_stil4m$elm_syntax$Elm_Syntax_Pattern$RecordPattern,
			A3(
				_elm_community$parser_combinators$Combine$between,
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$string('{'),
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_elm_community$parser_combinators$Combine$string('}')),
				A2(
					_elm_community$parser_combinators$Combine$sepBy1,
					_elm_community$parser_combinators$Combine$string(','),
					_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
						_stil4m$elm_syntax$Elm_Parser_Util$asPointer(_stil4m$elm_syntax$Elm_Parser_Tokens$functionName)))));
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$asPattern2 = function (p) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p8) {
			var _p9 = _p8;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_stil4m$elm_syntax$Elm_Syntax_Pattern$AsPattern(p),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Tokens$asToken),
						_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Util$asPointer(_stil4m$elm_syntax$Elm_Parser_Tokens$functionName)));
		});
};
var _stil4m$elm_syntax$Elm_Parser_Patterns$floatPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p10) {
		var _p11 = _p10;
		return A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Pattern$FloatPattern, _elm_community$parser_combinators$Combine_Num$float);
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$intPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p12) {
		var _p13 = _p12;
		return A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Pattern$IntPattern, _elm_community$parser_combinators$Combine_Num$int);
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$stringPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p14) {
		var _p15 = _p14;
		return A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Pattern$StringPattern, _stil4m$elm_syntax$Elm_Parser_Tokens$stringLiteral);
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$charPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p16) {
		var _p17 = _p16;
		return A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Pattern$CharPattern, _stil4m$elm_syntax$Elm_Parser_Tokens$characterLiteral);
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$pattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p18) {
		var _p19 = _p18;
		return A2(
			_elm_community$parser_combinators$Combine_ops['>>='],
			_stil4m$elm_syntax$Elm_Parser_Ranges$withRangeTuple(
				_elm_community$parser_combinators$Combine$choice(
					{
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Patterns$declarablePatternRangeless,
						_1: {
							ctor: '::',
							_0: _stil4m$elm_syntax$Elm_Parser_Patterns$variablePattern,
							_1: {
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Parser_Patterns$namedPattern,
								_1: {ctor: '[]'}
							}
						}
					})),
			_stil4m$elm_syntax$Elm_Parser_Patterns$promoteToCompositePattern);
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$declarablePatternRangeless = _elm_community$parser_combinators$Combine$lazy(
	function (_p20) {
		var _p21 = _p20;
		return _elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: _stil4m$elm_syntax$Elm_Parser_Patterns$allPattern,
				_1: {
					ctor: '::',
					_0: _stil4m$elm_syntax$Elm_Parser_Patterns$tuplePattern,
					_1: {
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Patterns$recordPattern,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$tuplePattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p22) {
		var _p23 = _p22;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_stil4m$elm_syntax$Elm_Syntax_Pattern$TuplePattern,
			_elm_community$parser_combinators$Combine$parens(
				A2(
					_elm_community$parser_combinators$Combine$sepBy1,
					_elm_community$parser_combinators$Combine$string(','),
					_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Patterns$pattern))));
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$namedPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p24) {
		var _p25 = _p24;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Pattern$NamedPattern),
				_stil4m$elm_syntax$Elm_Parser_Patterns$qualifiedNameRef),
			_elm_community$parser_combinators$Combine$many(
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace,
					_stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
						A2(_elm_community$parser_combinators$Combine$or, _stil4m$elm_syntax$Elm_Parser_Patterns$qualifiedNamePattern, _stil4m$elm_syntax$Elm_Parser_Patterns$nonNamedPattern)))));
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$nonNamedPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p26) {
		var _p27 = _p26;
		return _elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: _stil4m$elm_syntax$Elm_Parser_Patterns$declarablePatternRangeless,
				_1: {
					ctor: '::',
					_0: _stil4m$elm_syntax$Elm_Parser_Patterns$asPattern,
					_1: {
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Patterns$variablePattern,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$asPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p28) {
		var _p29 = _p28;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Pattern$AsPattern),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Ranges$withRange(_stil4m$elm_syntax$Elm_Parser_Patterns$nonAsPattern))),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Tokens$asToken),
					_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
				_stil4m$elm_syntax$Elm_Parser_Util$asPointer(_stil4m$elm_syntax$Elm_Parser_Tokens$functionName)));
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$nonAsPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p30) {
		var _p31 = _p30;
		return _elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: _stil4m$elm_syntax$Elm_Parser_Patterns$declarablePatternRangeless,
				_1: {
					ctor: '::',
					_0: _stil4m$elm_syntax$Elm_Parser_Patterns$variablePattern,
					_1: {
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Patterns$namedPattern,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$variablePattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p32) {
		var _p33 = _p32;
		return _elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: _stil4m$elm_syntax$Elm_Parser_Patterns$allPattern,
				_1: {
					ctor: '::',
					_0: _stil4m$elm_syntax$Elm_Parser_Patterns$charPattern,
					_1: {
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Patterns$stringPattern,
						_1: {
							ctor: '::',
							_0: _stil4m$elm_syntax$Elm_Parser_Patterns$floatPattern,
							_1: {
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Parser_Patterns$intPattern,
								_1: {
									ctor: '::',
									_0: _stil4m$elm_syntax$Elm_Parser_Patterns$unitPattern,
									_1: {
										ctor: '::',
										_0: _stil4m$elm_syntax$Elm_Parser_Patterns$varPattern,
										_1: {
											ctor: '::',
											_0: _stil4m$elm_syntax$Elm_Parser_Patterns$listPattern,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$listPattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p34) {
		var _p35 = _p34;
		return A3(
			_elm_community$parser_combinators$Combine$between,
			_elm_community$parser_combinators$Combine$string('['),
			_elm_community$parser_combinators$Combine$string(']'),
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_stil4m$elm_syntax$Elm_Syntax_Pattern$ListPattern,
				A2(
					_elm_community$parser_combinators$Combine$sepBy,
					_elm_community$parser_combinators$Combine$string(','),
					_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Patterns$pattern))));
	});
var _stil4m$elm_syntax$Elm_Parser_Patterns$promoteToCompositePattern = function (_p36) {
	var _p37 = _p36;
	var _p38 = _p37._1;
	return A2(
		_elm_community$parser_combinators$Combine$or,
		A2(
			_stil4m$elm_syntax$Elm_Parser_Ranges$withRangeCustomStart,
			_p37._0,
			_elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _stil4m$elm_syntax$Elm_Parser_Patterns$unConsPattern2(_p38),
					_1: {
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Patterns$asPattern2(_p38),
						_1: {ctor: '[]'}
					}
				})),
		_elm_community$parser_combinators$Combine$succeed(_p38));
};
var _stil4m$elm_syntax$Elm_Parser_Patterns$unConsPattern2 = function (p) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_stil4m$elm_syntax$Elm_Syntax_Pattern$UnConsPattern(p),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
						_elm_community$parser_combinators$Combine$string('::')),
					_stil4m$elm_syntax$Elm_Parser_Patterns$pattern));
		});
};
var _stil4m$elm_syntax$Elm_Parser_Patterns$declarablePattern = _elm_community$parser_combinators$Combine$lazy(
	function (_p41) {
		var _p42 = _p41;
		return _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(_stil4m$elm_syntax$Elm_Parser_Patterns$declarablePatternRangeless);
	});

var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$genericTypeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p0) {
		var _p1 = _p0;
		return A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$GenericType, _stil4m$elm_syntax$Elm_Parser_Tokens$functionName);
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$asTypeAnnotation = function (x) {
	var _p2 = x;
	if (_p2.ctor === '[]') {
		return _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Unit;
	} else {
		if (_p2._1.ctor === '[]') {
			return _elm_lang$core$Basics$always(_p2._0);
		} else {
			return _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Tupled(_p2);
		}
	}
};
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotationNoFn = _elm_community$parser_combinators$Combine$lazy(
	function (_p3) {
		var _p4 = _p3;
		return _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
			_elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$parensTypeAnnotation,
					_1: {
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typedTypeAnnotation,
						_1: {
							ctor: '::',
							_0: _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$recordTypeAnnotation,
							_1: {
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$genericRecordTypeAnnotation,
								_1: {
									ctor: '::',
									_0: _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$genericTypeAnnotation,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}));
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$genericRecordTypeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p5) {
		var _p6 = _p5;
		return A3(
			_elm_community$parser_combinators$Combine$between,
			_elm_community$parser_combinators$Combine$string('{'),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine),
				_elm_community$parser_combinators$Combine$string('}')),
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$GenericRecord),
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$maybe(_elm_community$parser_combinators$Combine$whitespace),
						_stil4m$elm_syntax$Elm_Parser_Tokens$functionName)),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						A2(
							_elm_community$parser_combinators$Combine_ops['*>'],
							_elm_community$parser_combinators$Combine$maybe(_elm_community$parser_combinators$Combine$whitespace),
							_elm_community$parser_combinators$Combine$string('|')),
						_elm_community$parser_combinators$Combine$maybe(_elm_community$parser_combinators$Combine$whitespace)),
					_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$recordFieldsTypeAnnotation)));
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$recordFieldsTypeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p7) {
		var _p8 = _p7;
		return A2(
			_elm_community$parser_combinators$Combine$sepBy,
			_elm_community$parser_combinators$Combine$string(','),
			_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$recordFieldDefinition));
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$recordFieldDefinition = _elm_community$parser_combinators$Combine$lazy(
	function (_p9) {
		var _p10 = _p9;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Tokens$functionName)),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
						_elm_community$parser_combinators$Combine$string(':')),
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
				_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotation));
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p11) {
		var _p12 = _p11;
		return _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
			A2(
				_elm_community$parser_combinators$Combine_ops['>>='],
				_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotationNoFn,
				function (typeRef) {
					return A2(
						_elm_community$parser_combinators$Combine$or,
						A2(
							_elm_community$parser_combinators$Combine_ops['<$>'],
							_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$FunctionTypeAnnotation(typeRef),
							A2(
								_elm_community$parser_combinators$Combine_ops['*>'],
								_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
									_elm_community$parser_combinators$Combine$string('->')),
								_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotation)),
						_elm_community$parser_combinators$Combine$succeed(
							_elm_lang$core$Basics$always(typeRef)));
				}));
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$parensTypeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p13) {
		var _p14 = _p13;
		return A2(
			_elm_community$parser_combinators$Combine$map,
			_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$asTypeAnnotation,
			_elm_community$parser_combinators$Combine$parens(
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					A2(
						_elm_community$parser_combinators$Combine$sepBy,
						_elm_community$parser_combinators$Combine$string(','),
						_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotation)))));
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$recordTypeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p15) {
		var _p16 = _p15;
		return A3(
			_elm_community$parser_combinators$Combine$between,
			_elm_community$parser_combinators$Combine$string('{'),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Whitespace$realNewLine),
				_elm_community$parser_combinators$Combine$string('}')),
			A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Record, _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$recordFieldsTypeAnnotation));
	});
var _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typedTypeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p17) {
		var _p18 = _p17;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_TypeAnnotation$Typed),
					_elm_community$parser_combinators$Combine$many(
						A2(
							_elm_community$parser_combinators$Combine_ops['<*'],
							_stil4m$elm_syntax$Elm_Parser_Tokens$typeName,
							_elm_community$parser_combinators$Combine$string('.')))),
				_stil4m$elm_syntax$Elm_Parser_Tokens$typeName),
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_elm_lang$core$Maybe$withDefault(
					{ctor: '[]'}),
				_elm_community$parser_combinators$Combine$maybe(
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace,
						A2(_elm_community$parser_combinators$Combine$sepBy, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotationNoFn)))));
	});

var _stil4m$elm_syntax$Elm_Parser_Typings$typePrefix = A2(
	_elm_community$parser_combinators$Combine_ops['*>'],
	_elm_community$parser_combinators$Combine$string('type'),
	_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace);
var _stil4m$elm_syntax$Elm_Parser_Typings$typeAliasPrefix = A2(
	_elm_community$parser_combinators$Combine_ops['*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_stil4m$elm_syntax$Elm_Parser_Typings$typePrefix,
		_elm_community$parser_combinators$Combine$string('alias')),
	_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace);
var _stil4m$elm_syntax$Elm_Parser_Typings$genericList = _elm_community$parser_combinators$Combine$many(
	A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Tokens$functionName));
var _stil4m$elm_syntax$Elm_Parser_Typings$typeAlias = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(
					_stil4m$elm_syntax$Elm_Syntax_TypeAlias$TypeAlias(_elm_lang$core$Maybe$Nothing)),
				A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Typings$typeAliasPrefix, _stil4m$elm_syntax$Elm_Parser_Tokens$typeName)),
			_stil4m$elm_syntax$Elm_Parser_Typings$genericList),
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
				_elm_community$parser_combinators$Combine$string('=')),
			_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotation)));
var _stil4m$elm_syntax$Elm_Parser_Typings$valueConstructor = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Type$ValueConstructor),
			_stil4m$elm_syntax$Elm_Parser_Tokens$typeName),
		_elm_community$parser_combinators$Combine$many(
			A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotation))));
var _stil4m$elm_syntax$Elm_Parser_Typings$valueConstructors = A2(
	_elm_community$parser_combinators$Combine$sepBy,
	_elm_community$parser_combinators$Combine$string('|'),
	_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Typings$valueConstructor));
var _stil4m$elm_syntax$Elm_Parser_Typings$typeDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Type$Type),
			A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Typings$typePrefix, _stil4m$elm_syntax$Elm_Parser_Tokens$typeName)),
		_stil4m$elm_syntax$Elm_Parser_Typings$genericList),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
			_elm_community$parser_combinators$Combine$string('=')),
		_stil4m$elm_syntax$Elm_Parser_Typings$valueConstructors));

var _stil4m$elm_syntax$Elm_Parser_Declarations$recordAccessFunctionExpression = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	function (_p0) {
		return _stil4m$elm_syntax$Elm_Syntax_Expression$RecordAccessFunction(
			A2(
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				'.',
				_p0));
	},
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_elm_community$parser_combinators$Combine$string('.'),
		_stil4m$elm_syntax$Elm_Parser_Tokens$functionName));
var _stil4m$elm_syntax$Elm_Parser_Declarations$qualifiedExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p1) {
		var _p2 = _p1;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$QualifiedExpr),
				_elm_community$parser_combinators$Combine$many1(
					A2(
						_elm_community$parser_combinators$Combine_ops['<*'],
						_stil4m$elm_syntax$Elm_Parser_Tokens$typeName,
						_elm_community$parser_combinators$Combine$string('.')))),
			A2(_elm_community$parser_combinators$Combine$or, _stil4m$elm_syntax$Elm_Parser_Tokens$functionName, _stil4m$elm_syntax$Elm_Parser_Tokens$typeName));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$functionOrValueExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p3) {
		var _p4 = _p3;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_stil4m$elm_syntax$Elm_Syntax_Expression$FunctionOrValue,
			_elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _stil4m$elm_syntax$Elm_Parser_Tokens$functionName,
					_1: {
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Tokens$typeName,
						_1: {ctor: '[]'}
					}
				}));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$operatorExpression = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Expression$Operator, _stil4m$elm_syntax$Elm_Parser_Tokens$infixOperatorToken);
var _stil4m$elm_syntax$Elm_Parser_Declarations$prefixOperatorExpression = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_stil4m$elm_syntax$Elm_Syntax_Expression$PrefixOperator,
	_elm_community$parser_combinators$Combine$parens(_stil4m$elm_syntax$Elm_Parser_Tokens$prefixOperatorToken));
var _stil4m$elm_syntax$Elm_Parser_Declarations$floatableExpression = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Expression$Floatable, _elm_community$parser_combinators$Combine_Num$float);
var _stil4m$elm_syntax$Elm_Parser_Declarations$integerExpression = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Expression$Integer, _elm_community$parser_combinators$Combine_Num$int);
var _stil4m$elm_syntax$Elm_Parser_Declarations$charLiteralExpression = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Expression$CharLiteral, _stil4m$elm_syntax$Elm_Parser_Tokens$characterLiteral);
var _stil4m$elm_syntax$Elm_Parser_Declarations$literalExpression = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_stil4m$elm_syntax$Elm_Syntax_Expression$Literal,
	A2(_elm_community$parser_combinators$Combine$or, _stil4m$elm_syntax$Elm_Parser_Tokens$multiLineStringLiteral, _stil4m$elm_syntax$Elm_Parser_Tokens$stringLiteral));
var _stil4m$elm_syntax$Elm_Parser_Declarations$emptyListExpression = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	_stil4m$elm_syntax$Elm_Syntax_Expression$ListExpr(
		{ctor: '[]'}),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$string('['),
			_elm_community$parser_combinators$Combine$maybe(
				_elm_community$parser_combinators$Combine$choice(
					{
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace,
						_1: {
							ctor: '::',
							_0: _stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace,
							_1: {
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Util$commentSequence),
								_1: {ctor: '[]'}
							}
						}
					}))),
		_elm_community$parser_combinators$Combine$string(']')));
var _stil4m$elm_syntax$Elm_Parser_Declarations$glslExpression = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	function (_p5) {
		return _stil4m$elm_syntax$Elm_Syntax_Expression$GLSLExpression(
			_elm_lang$core$String$fromList(_p5));
	},
	A3(
		_elm_community$parser_combinators$Combine$between,
		_elm_community$parser_combinators$Combine$string('[glsl|'),
		_elm_community$parser_combinators$Combine$string('|]'),
		_elm_community$parser_combinators$Combine$many(
			A2(
				_elm_community$parser_combinators$Combine_ops['>>='],
				_elm_community$parser_combinators$Combine$lookAhead(
					A2(
						_elm_community$parser_combinators$Combine_ops['<$>'],
						_elm_lang$core$String$fromList,
						A2(_elm_community$parser_combinators$Combine$count, 2, _elm_community$parser_combinators$Combine_Char$anyChar))),
				function (s) {
					return _elm_lang$core$Native_Utils.eq(s, '|]') ? _elm_community$parser_combinators$Combine$fail('end symbol') : _elm_community$parser_combinators$Combine_Char$anyChar;
				}))));
var _stil4m$elm_syntax$Elm_Parser_Declarations$unitExpression = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	_stil4m$elm_syntax$Elm_Syntax_Expression$UnitExpr,
	_elm_community$parser_combinators$Combine$string('()'));
var _stil4m$elm_syntax$Elm_Parser_Declarations$withIndentedState2 = function (p) {
	return _elm_community$parser_combinators$Combine$withLocation(
		function (location) {
			var x = _elm_lang$core$List$length(
				A2(
					_elm_community$list_extra$List_Extra$takeWhile,
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						})(
						_elm_lang$core$Native_Utils.chr(' ')),
					_elm_lang$core$String$toList(location.source)));
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$modifyState(
						_stil4m$elm_syntax$Elm_Parser_State$pushIndent(x)),
					p),
				_elm_community$parser_combinators$Combine$modifyState(_stil4m$elm_syntax$Elm_Parser_State$popIndent));
		});
};
var _stil4m$elm_syntax$Elm_Parser_Declarations$withIndentedState = function (p) {
	return _elm_community$parser_combinators$Combine$withLocation(
		function (location) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$modifyState(
						_stil4m$elm_syntax$Elm_Parser_State$pushIndent(location.column + 1)),
					p),
				_elm_community$parser_combinators$Combine$modifyState(_stil4m$elm_syntax$Elm_Parser_State$popIndent));
		});
};
var _stil4m$elm_syntax$Elm_Parser_Declarations$rangedExpressionWithStart = F2(
	function (r, p) {
		return A2(
			_stil4m$elm_syntax$Elm_Parser_Ranges$withRangeCustomStart,
			r,
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_elm_lang$core$Basics$flip(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				p));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$rangedExpression = function (p) {
	return _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_lang$core$Basics$flip(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					})),
			p));
};
var _stil4m$elm_syntax$Elm_Parser_Declarations$liftRecordAccess = function (e) {
	return A2(
		_elm_community$parser_combinators$Combine$or,
		A2(
			_elm_community$parser_combinators$Combine_ops['>>='],
			_stil4m$elm_syntax$Elm_Parser_Declarations$rangedExpression(
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					_stil4m$elm_syntax$Elm_Syntax_Expression$RecordAccess(e),
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$string('.'),
						_stil4m$elm_syntax$Elm_Parser_Tokens$functionName))),
			_stil4m$elm_syntax$Elm_Parser_Declarations$liftRecordAccess),
		_elm_community$parser_combinators$Combine$succeed(e));
};
var _stil4m$elm_syntax$Elm_Parser_Declarations$functionArgument = _stil4m$elm_syntax$Elm_Parser_Patterns$pattern;
var _stil4m$elm_syntax$Elm_Parser_Declarations$signature = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$FunctionSignature),
				A2(
					_elm_community$parser_combinators$Combine_ops['>>='],
					_elm_community$parser_combinators$Combine$lookAhead(_elm_community$parser_combinators$Combine_Char$anyChar),
					function (c) {
						return _elm_community$parser_combinators$Combine$succeed(
							_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('(')));
					})),
			A2(
				_elm_community$parser_combinators$Combine$or,
				_stil4m$elm_syntax$Elm_Parser_Tokens$functionName,
				_elm_community$parser_combinators$Combine$parens(_stil4m$elm_syntax$Elm_Parser_Tokens$prefixOperatorToken))),
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
					_elm_community$parser_combinators$Combine$string(':')),
				_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
			_stil4m$elm_syntax$Elm_Parser_TypeAnnotation$typeAnnotation)));
var _stil4m$elm_syntax$Elm_Parser_Declarations$portDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['*>'],
	_stil4m$elm_syntax$Elm_Parser_Tokens$portToken,
	_elm_community$parser_combinators$Combine$lazy(
		function (_p6) {
			var _p7 = _p6;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_stil4m$elm_syntax$Elm_Syntax_Declaration$PortDeclaration,
				A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Declarations$signature));
		}));
var _stil4m$elm_syntax$Elm_Parser_Declarations$infixDeclaration = _elm_community$parser_combinators$Combine$lazy(
	function (_p8) {
		var _p9 = _p8;
		return A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Declaration$InfixDeclaration, _stil4m$elm_syntax$Elm_Parser_Infix$infixDefinition);
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$function = _elm_community$parser_combinators$Combine$lazy(
	function (_p10) {
		var _p11 = _p10;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$Function),
					_elm_community$parser_combinators$Combine$succeed(_elm_lang$core$Maybe$Nothing)),
				_elm_community$parser_combinators$Combine$maybe(
					A2(_elm_community$parser_combinators$Combine_ops['<*'], _stil4m$elm_syntax$Elm_Parser_Declarations$signature, _stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace))),
			_stil4m$elm_syntax$Elm_Parser_Declarations$functionDeclaration);
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$functionDeclaration = _elm_community$parser_combinators$Combine$lazy(
	function (_p12) {
		var _p13 = _p12;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['<*>'],
						_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$FunctionDeclaration),
						A2(
							_elm_community$parser_combinators$Combine_ops['>>='],
							_elm_community$parser_combinators$Combine$lookAhead(_elm_community$parser_combinators$Combine_Char$anyChar),
							function (c) {
								return _elm_community$parser_combinators$Combine$succeed(
									_elm_lang$core$Native_Utils.eq(
										c,
										_elm_lang$core$Native_Utils.chr('(')));
							})),
					_stil4m$elm_syntax$Elm_Parser_Util$asPointer(
						A2(
							_elm_community$parser_combinators$Combine$or,
							_stil4m$elm_syntax$Elm_Parser_Tokens$functionName,
							_elm_community$parser_combinators$Combine$parens(_stil4m$elm_syntax$Elm_Parser_Tokens$prefixOperatorToken)))),
				_elm_community$parser_combinators$Combine$many(
					A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Declarations$functionArgument))),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
						_elm_community$parser_combinators$Combine$string('=')),
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
				_stil4m$elm_syntax$Elm_Parser_Declarations$expression));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$expression = _elm_community$parser_combinators$Combine$lazy(
	function (_p14) {
		var _p15 = _p14;
		return A2(
			_elm_community$parser_combinators$Combine_ops['>>='],
			_stil4m$elm_syntax$Elm_Parser_Declarations$expressionNotApplication,
			function (expr) {
				return A2(
					_elm_community$parser_combinators$Combine$or,
					_stil4m$elm_syntax$Elm_Parser_Declarations$promoteToApplicationExpression(expr),
					_elm_community$parser_combinators$Combine$succeed(expr));
			});
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$expressionNotApplication = _elm_community$parser_combinators$Combine$lazy(
	function (_p16) {
		var _p17 = _p16;
		return A2(
			_elm_community$parser_combinators$Combine_ops['>>='],
			_stil4m$elm_syntax$Elm_Parser_Declarations$rangedExpression(
				_elm_community$parser_combinators$Combine$choice(
					{
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Declarations$unitExpression,
						_1: {
							ctor: '::',
							_0: _stil4m$elm_syntax$Elm_Parser_Declarations$qualifiedExpression,
							_1: {
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Parser_Declarations$functionOrValueExpression,
								_1: {
									ctor: '::',
									_0: _stil4m$elm_syntax$Elm_Parser_Declarations$ifBlockExpression,
									_1: {
										ctor: '::',
										_0: _stil4m$elm_syntax$Elm_Parser_Declarations$prefixOperatorExpression,
										_1: {
											ctor: '::',
											_0: _stil4m$elm_syntax$Elm_Parser_Declarations$tupledExpression,
											_1: {
												ctor: '::',
												_0: _stil4m$elm_syntax$Elm_Parser_Declarations$recordAccessFunctionExpression,
												_1: {
													ctor: '::',
													_0: _stil4m$elm_syntax$Elm_Parser_Declarations$negationExpression,
													_1: {
														ctor: '::',
														_0: _stil4m$elm_syntax$Elm_Parser_Declarations$operatorExpression,
														_1: {
															ctor: '::',
															_0: _stil4m$elm_syntax$Elm_Parser_Declarations$floatableExpression,
															_1: {
																ctor: '::',
																_0: _stil4m$elm_syntax$Elm_Parser_Declarations$integerExpression,
																_1: {
																	ctor: '::',
																	_0: _stil4m$elm_syntax$Elm_Parser_Declarations$letExpression,
																	_1: {
																		ctor: '::',
																		_0: _stil4m$elm_syntax$Elm_Parser_Declarations$lambdaExpression,
																		_1: {
																			ctor: '::',
																			_0: _stil4m$elm_syntax$Elm_Parser_Declarations$literalExpression,
																			_1: {
																				ctor: '::',
																				_0: _stil4m$elm_syntax$Elm_Parser_Declarations$charLiteralExpression,
																				_1: {
																					ctor: '::',
																					_0: _stil4m$elm_syntax$Elm_Parser_Declarations$recordExpression,
																					_1: {
																						ctor: '::',
																						_0: _stil4m$elm_syntax$Elm_Parser_Declarations$recordUpdateExpression,
																						_1: {
																							ctor: '::',
																							_0: _stil4m$elm_syntax$Elm_Parser_Declarations$glslExpression,
																							_1: {
																								ctor: '::',
																								_0: _stil4m$elm_syntax$Elm_Parser_Declarations$listExpression,
																								_1: {
																									ctor: '::',
																									_0: _stil4m$elm_syntax$Elm_Parser_Declarations$caseExpression,
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					})),
			_stil4m$elm_syntax$Elm_Parser_Declarations$liftRecordAccess);
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$caseExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p18) {
		var _p19 = _p18;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_stil4m$elm_syntax$Elm_Syntax_Expression$CaseExpression,
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$CaseBlock),
					_stil4m$elm_syntax$Elm_Parser_Declarations$caseBlock),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace,
					_stil4m$elm_syntax$Elm_Parser_Declarations$withIndentedState(_stil4m$elm_syntax$Elm_Parser_Declarations$caseStatements))));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$caseBlock = _elm_community$parser_combinators$Combine$lazy(
	function (_p20) {
		var _p21 = _p20;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Tokens$caseToken, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Declarations$expression),
				_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
			_stil4m$elm_syntax$Elm_Parser_Tokens$ofToken);
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$caseStatements = _elm_community$parser_combinators$Combine$lazy(
	function (_p22) {
		var _p23 = _p22;
		return A2(_elm_community$parser_combinators$Combine$sepBy1, _stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Declarations$caseStatement);
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$caseStatement = _elm_community$parser_combinators$Combine$lazy(
	function (_p24) {
		var _p25 = _p24;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				_stil4m$elm_syntax$Elm_Parser_Patterns$pattern),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$maybe(
							A2(_elm_community$parser_combinators$Combine$or, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace)),
						_elm_community$parser_combinators$Combine$string('->')),
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
				_stil4m$elm_syntax$Elm_Parser_Declarations$expression));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$ifBlockExpression = A2(
	_elm_community$parser_combinators$Combine_ops['*>'],
	_stil4m$elm_syntax$Elm_Parser_Tokens$ifToken,
	_elm_community$parser_combinators$Combine$lazy(
		function (_p26) {
			var _p27 = _p26;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['<*>'],
						_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$IfBlock),
						_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Declarations$expression)),
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_stil4m$elm_syntax$Elm_Parser_Tokens$thenToken,
						_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Declarations$expression))),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Tokens$elseToken, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Declarations$expression));
		}));
var _stil4m$elm_syntax$Elm_Parser_Declarations$lambdaExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p28) {
		var _p29 = _p28;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(
					F2(
						function (args, expr) {
							return _stil4m$elm_syntax$Elm_Syntax_Expression$LambdaExpression(
								A2(_stil4m$elm_syntax$Elm_Syntax_Expression$Lambda, args, expr));
						})),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$string('\\'),
						_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
					A2(_elm_community$parser_combinators$Combine$sepBy1, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Declarations$functionArgument))),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
					_elm_community$parser_combinators$Combine$string('->')),
				_stil4m$elm_syntax$Elm_Parser_Declarations$expression));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$letExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p30) {
		var _p31 = _p30;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(
					function (decls) {
						return function (_p32) {
							return _stil4m$elm_syntax$Elm_Syntax_Expression$LetExpression(
								A2(_stil4m$elm_syntax$Elm_Syntax_Expression$LetBlock, decls, _p32));
						};
					}),
				_stil4m$elm_syntax$Elm_Parser_Declarations$withIndentedState2(_stil4m$elm_syntax$Elm_Parser_Declarations$letBlock)),
			A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Declarations$expression));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$letBlock = _elm_community$parser_combinators$Combine$lazy(
	function (_p33) {
		var _p34 = _p33;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$string('let'),
					_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
				_stil4m$elm_syntax$Elm_Parser_Declarations$withIndentedState(_stil4m$elm_syntax$Elm_Parser_Declarations$letBody)),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$choice(
					{
						ctor: '::',
						_0: _stil4m$elm_syntax$Elm_Parser_Util$unstrictIndentWhitespace,
						_1: {
							ctor: '::',
							_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _elm_lang$core$List$singleton, _stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces),
							_1: {ctor: '[]'}
						}
					}),
				_elm_community$parser_combinators$Combine$string('in')));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$letBody = _elm_community$parser_combinators$Combine$lazy(
	function (_p35) {
		var _p36 = _p35;
		return A2(
			_elm_community$parser_combinators$Combine$sepBy1,
			_stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace,
			A2(
				_elm_community$parser_combinators$Combine$or,
				_stil4m$elm_syntax$Elm_Parser_Declarations$letDestructuringDeclaration,
				A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Expression$LetFunction, _stil4m$elm_syntax$Elm_Parser_Declarations$function)));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$letDestructuringDeclaration = _elm_community$parser_combinators$Combine$lazy(
	function (_p37) {
		var _p38 = _p37;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$LetDestructuring),
				_stil4m$elm_syntax$Elm_Parser_Patterns$declarablePattern),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace,
						_elm_community$parser_combinators$Combine$string('=')),
					_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
				_stil4m$elm_syntax$Elm_Parser_Declarations$expression));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$listExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p39) {
		var _p40 = _p39;
		return A2(
			_elm_community$parser_combinators$Combine$or,
			_stil4m$elm_syntax$Elm_Parser_Declarations$emptyListExpression,
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_stil4m$elm_syntax$Elm_Syntax_Expression$ListExpr,
				A3(
					_elm_community$parser_combinators$Combine$between,
					_elm_community$parser_combinators$Combine$string('['),
					_elm_community$parser_combinators$Combine$string(']'),
					A2(
						_elm_community$parser_combinators$Combine$sepBy,
						_elm_community$parser_combinators$Combine$string(','),
						_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Declarations$expression)))));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$negationExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p41) {
		var _p42 = _p41;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_stil4m$elm_syntax$Elm_Syntax_Expression$Negation,
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$string('-'),
				A2(
					_elm_community$parser_combinators$Combine_ops['>>='],
					_stil4m$elm_syntax$Elm_Parser_Declarations$rangedExpression(
						_elm_community$parser_combinators$Combine$choice(
							{
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Parser_Declarations$qualifiedExpression,
								_1: {
									ctor: '::',
									_0: _stil4m$elm_syntax$Elm_Parser_Declarations$functionOrValueExpression,
									_1: {
										ctor: '::',
										_0: _stil4m$elm_syntax$Elm_Parser_Declarations$integerExpression,
										_1: {
											ctor: '::',
											_0: _stil4m$elm_syntax$Elm_Parser_Declarations$floatableExpression,
											_1: {
												ctor: '::',
												_0: _stil4m$elm_syntax$Elm_Parser_Declarations$tupledExpression,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							})),
					_stil4m$elm_syntax$Elm_Parser_Declarations$liftRecordAccess)));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$tupledExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p43) {
		var _p44 = _p43;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			function (l) {
				var _p45 = l;
				if ((_p45.ctor === '::') && (_p45._1.ctor === '[]')) {
					return _stil4m$elm_syntax$Elm_Syntax_Expression$ParenthesizedExpression(_p45._0);
				} else {
					return _stil4m$elm_syntax$Elm_Syntax_Expression$TupledExpression(_p45);
				}
			},
			_elm_community$parser_combinators$Combine$parens(
				A2(
					_elm_community$parser_combinators$Combine$sepBy1,
					_elm_community$parser_combinators$Combine$string(','),
					_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Declarations$expression))));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$recordExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p46) {
		var _p47 = _p46;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_stil4m$elm_syntax$Elm_Syntax_Expression$RecordExpr,
			A3(
				_elm_community$parser_combinators$Combine$between,
				_elm_community$parser_combinators$Combine$string('{'),
				_elm_community$parser_combinators$Combine$string('}'),
				_stil4m$elm_syntax$Elm_Parser_Declarations$recordFields(false)));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$recordFields = function (oneOrMore) {
	var p = oneOrMore ? _elm_community$parser_combinators$Combine$sepBy1 : _elm_community$parser_combinators$Combine$sepBy;
	return A2(
		p,
		_elm_community$parser_combinators$Combine$string(','),
		_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Declarations$recordExpressionField));
};
var _stil4m$elm_syntax$Elm_Parser_Declarations$recordExpressionField = _elm_community$parser_combinators$Combine$lazy(
	function (_p48) {
		var _p49 = _p48;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})),
				_stil4m$elm_syntax$Elm_Parser_Tokens$functionName),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
						_elm_community$parser_combinators$Combine$string('=')),
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
				_stil4m$elm_syntax$Elm_Parser_Declarations$expression));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$recordUpdateExpression = _elm_community$parser_combinators$Combine$lazy(
	function (_p50) {
		var _p51 = _p50;
		return A3(
			_elm_community$parser_combinators$Combine$between,
			_elm_community$parser_combinators$Combine$string('{'),
			_elm_community$parser_combinators$Combine$string('}'),
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdateExpression,
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['<*>'],
						_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdate),
						_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Tokens$functionName)),
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$string('|'),
						_stil4m$elm_syntax$Elm_Parser_Declarations$recordFields(true)))));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$promoteToApplicationExpression = function (expr) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p52) {
			var _p53 = _p52;
			return A2(
				_stil4m$elm_syntax$Elm_Parser_Declarations$rangedExpressionWithStart,
				_elm_lang$core$Tuple$first(expr),
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					_elm_community$parser_combinators$Combine$succeed(
						function (rest) {
							return _stil4m$elm_syntax$Elm_Syntax_Expression$Application(
								{ctor: '::', _0: expr, _1: rest});
						}),
					_elm_community$parser_combinators$Combine$lazy(
						function (_p54) {
							var _p55 = _p54;
							return _elm_community$parser_combinators$Combine$many1(
								A2(
									_elm_community$parser_combinators$Combine_ops['*>'],
									_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
									_stil4m$elm_syntax$Elm_Parser_Declarations$expressionNotApplication));
						})));
		});
};
var _stil4m$elm_syntax$Elm_Parser_Declarations$destructuringDeclaration = _elm_community$parser_combinators$Combine$lazy(
	function (_p56) {
		var _p57 = _p56;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Declaration$Destructuring),
				_stil4m$elm_syntax$Elm_Parser_Patterns$declarablePattern),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace,
						_elm_community$parser_combinators$Combine$string('=')),
					_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
				_stil4m$elm_syntax$Elm_Parser_Declarations$expression));
	});
var _stil4m$elm_syntax$Elm_Parser_Declarations$declaration = _elm_community$parser_combinators$Combine$lazy(
	function (_p58) {
		var _p59 = _p58;
		return _elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Declaration$AliasDecl, _stil4m$elm_syntax$Elm_Parser_Typings$typeAlias),
				_1: {
					ctor: '::',
					_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Declaration$FuncDecl, _stil4m$elm_syntax$Elm_Parser_Declarations$function),
					_1: {
						ctor: '::',
						_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Declaration$TypeDecl, _stil4m$elm_syntax$Elm_Parser_Typings$typeDeclaration),
						_1: {
							ctor: '::',
							_0: _stil4m$elm_syntax$Elm_Parser_Declarations$portDeclaration,
							_1: {
								ctor: '::',
								_0: _stil4m$elm_syntax$Elm_Parser_Declarations$infixDeclaration,
								_1: {
									ctor: '::',
									_0: _stil4m$elm_syntax$Elm_Parser_Declarations$destructuringDeclaration,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});

var _stil4m$elm_syntax$Elm_Parser_Expose$definitionExpose = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine$or,
		A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Exposing$FunctionExpose, _stil4m$elm_syntax$Elm_Parser_Tokens$functionName),
		A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeOrAliasExpose, _stil4m$elm_syntax$Elm_Parser_Tokens$typeName)));
var _stil4m$elm_syntax$Elm_Parser_Expose$exposingListInner = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine$or,
		_stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
			A2(
				_elm_community$parser_combinators$Combine_ops['<$'],
				_stil4m$elm_syntax$Elm_Syntax_Exposing$All,
				_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
					_elm_community$parser_combinators$Combine$string('..')))),
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_stil4m$elm_syntax$Elm_Syntax_Exposing$Explicit,
			A2(
				_elm_community$parser_combinators$Combine$sepBy,
				_elm_community$parser_combinators$Combine_Char$char(
					_elm_lang$core$Native_Utils.chr(',')),
				_stil4m$elm_syntax$Elm_Parser_Util$trimmed(p))));
};
var _stil4m$elm_syntax$Elm_Parser_Expose$exposeListWith = function (p) {
	return _elm_community$parser_combinators$Combine$parens(
		_stil4m$elm_syntax$Elm_Parser_Expose$exposingListInner(p));
};
var _stil4m$elm_syntax$Elm_Parser_Expose$valueConstructorExpose = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_stil4m$elm_syntax$Elm_Parser_Tokens$typeName));
var _stil4m$elm_syntax$Elm_Parser_Expose$exposedType = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Exposing$ExposedType),
			_stil4m$elm_syntax$Elm_Parser_Tokens$typeName),
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_elm_lang$core$Maybe$Just,
				_stil4m$elm_syntax$Elm_Parser_Expose$exposeListWith(_stil4m$elm_syntax$Elm_Parser_Expose$valueConstructorExpose)))));
var _stil4m$elm_syntax$Elm_Parser_Expose$typeExpose = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _stil4m$elm_syntax$Elm_Syntax_Exposing$TypeExpose, _stil4m$elm_syntax$Elm_Parser_Expose$exposedType);
var _stil4m$elm_syntax$Elm_Parser_Expose$infixExpose = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_stil4m$elm_syntax$Elm_Syntax_Exposing$InfixExpose,
		_elm_community$parser_combinators$Combine$parens(
			_elm_community$parser_combinators$Combine$while(
				F2(
					function (x, y) {
						return !_elm_lang$core$Native_Utils.eq(x, y);
					})(
					_elm_lang$core$Native_Utils.chr(')'))))));
var _stil4m$elm_syntax$Elm_Parser_Expose$exposable = _elm_community$parser_combinators$Combine$choice(
	{
		ctor: '::',
		_0: _stil4m$elm_syntax$Elm_Parser_Expose$typeExpose,
		_1: {
			ctor: '::',
			_0: _stil4m$elm_syntax$Elm_Parser_Expose$infixExpose,
			_1: {
				ctor: '::',
				_0: _stil4m$elm_syntax$Elm_Parser_Expose$definitionExpose,
				_1: {ctor: '[]'}
			}
		}
	});
var _stil4m$elm_syntax$Elm_Parser_Expose$exposeDefinition = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Tokens$exposingToken),
			_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace)),
		_stil4m$elm_syntax$Elm_Parser_Expose$exposeListWith(p));
};
var _stil4m$elm_syntax$Elm_Parser_Expose$maybeExposeDefinition = function (p) {
	return _elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_elm_lang$core$Maybe$Just,
				_stil4m$elm_syntax$Elm_Parser_Expose$exposeDefinition(p)),
			_1: {
				ctor: '::',
				_0: _elm_community$parser_combinators$Combine$succeed(_elm_lang$core$Maybe$Nothing),
				_1: {ctor: '[]'}
			}
		});
};

var _stil4m$elm_syntax$Elm_Parser_Imports$importDefinition = _stil4m$elm_syntax$Elm_Parser_Ranges$withRange(
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Module$Import),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Tokens$importToken, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Tokens$moduleName)),
			_elm_community$parser_combinators$Combine$maybe(
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Tokens$asToken),
						_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Tokens$moduleName))),
		_elm_community$parser_combinators$Combine$maybe(
			_stil4m$elm_syntax$Elm_Parser_Expose$exposeDefinition(_stil4m$elm_syntax$Elm_Parser_Expose$exposable))));

var _stil4m$elm_syntax$Elm_Parser_Modules$portModuleDefinition = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_stil4m$elm_syntax$Elm_Syntax_Module$PortModule,
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Module$DefaultModuleData),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Tokens$portToken, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
						_stil4m$elm_syntax$Elm_Parser_Tokens$moduleToken),
					_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
				_stil4m$elm_syntax$Elm_Parser_Tokens$moduleName)),
		_stil4m$elm_syntax$Elm_Parser_Expose$exposeDefinition(_stil4m$elm_syntax$Elm_Parser_Expose$exposable)));
var _stil4m$elm_syntax$Elm_Parser_Modules$normalModuleDefinition = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_stil4m$elm_syntax$Elm_Syntax_Module$NormalModule,
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_Module$DefaultModuleData),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Tokens$moduleToken, _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
				_stil4m$elm_syntax$Elm_Parser_Tokens$moduleName)),
		_stil4m$elm_syntax$Elm_Parser_Expose$exposeDefinition(_stil4m$elm_syntax$Elm_Parser_Expose$exposable)));
var _stil4m$elm_syntax$Elm_Parser_Modules$effectWhereClause = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		_elm_community$parser_combinators$Combine$succeed(
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})),
		_stil4m$elm_syntax$Elm_Parser_Tokens$functionName),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_stil4m$elm_syntax$Elm_Parser_Util$trimmed(
			_elm_community$parser_combinators$Combine$string('=')),
		_stil4m$elm_syntax$Elm_Parser_Tokens$typeName));
var _stil4m$elm_syntax$Elm_Parser_Modules$whereBlock = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	function (pairs) {
		return {
			command: A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Tuple$second,
				_elm_lang$core$List$head(
					A2(
						_elm_lang$core$List$filter,
						function (_p0) {
							return A2(
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									}),
								'command',
								_elm_lang$core$Tuple$first(_p0));
						},
						pairs))),
			subscription: A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Tuple$second,
				_elm_lang$core$List$head(
					A2(
						_elm_lang$core$List$filter,
						function (_p1) {
							return A2(
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									}),
								'subscription',
								_elm_lang$core$Tuple$first(_p1));
						},
						pairs)))
		};
	},
	A3(
		_elm_community$parser_combinators$Combine$between,
		_elm_community$parser_combinators$Combine$string('{'),
		_elm_community$parser_combinators$Combine$string('}'),
		A2(
			_elm_community$parser_combinators$Combine$sepBy1,
			_elm_community$parser_combinators$Combine$string(','),
			_stil4m$elm_syntax$Elm_Parser_Util$trimmed(_stil4m$elm_syntax$Elm_Parser_Modules$effectWhereClause))));
var _stil4m$elm_syntax$Elm_Parser_Modules$effectWhereClauses = A2(
	_elm_community$parser_combinators$Combine_ops['*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_elm_community$parser_combinators$Combine$string('where'),
		_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
	_stil4m$elm_syntax$Elm_Parser_Modules$whereBlock);
var _stil4m$elm_syntax$Elm_Parser_Modules$effectModuleDefinition = function () {
	var createEffectModule = F3(
		function (name, whereClauses, exp) {
			return _stil4m$elm_syntax$Elm_Syntax_Module$EffectModule(
				{moduleName: name, exposingList: exp, command: whereClauses.command, subscription: whereClauses.subscription});
		});
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(createEffectModule),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						A2(
							_elm_community$parser_combinators$Combine_ops['*>'],
							A2(
								_elm_community$parser_combinators$Combine_ops['*>'],
								_elm_community$parser_combinators$Combine$string('effect'),
								_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
							_stil4m$elm_syntax$Elm_Parser_Tokens$moduleToken),
						_stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace),
					_stil4m$elm_syntax$Elm_Parser_Tokens$moduleName)),
			A2(_elm_community$parser_combinators$Combine_ops['*>'], _stil4m$elm_syntax$Elm_Parser_Util$moreThanIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Modules$effectWhereClauses)),
		_stil4m$elm_syntax$Elm_Parser_Expose$exposeDefinition(_stil4m$elm_syntax$Elm_Parser_Expose$exposable));
}();
var _stil4m$elm_syntax$Elm_Parser_Modules$moduleDefinition = _elm_community$parser_combinators$Combine$choice(
	{
		ctor: '::',
		_0: _stil4m$elm_syntax$Elm_Parser_Modules$normalModuleDefinition,
		_1: {
			ctor: '::',
			_0: _stil4m$elm_syntax$Elm_Parser_Modules$portModuleDefinition,
			_1: {
				ctor: '::',
				_0: _stil4m$elm_syntax$Elm_Parser_Modules$effectModuleDefinition,
				_1: {ctor: '[]'}
			}
		}
	});

var _stil4m$elm_syntax$Elm_Parser_File$fileDeclarations = A2(
	_elm_community$parser_combinators$Combine_ops['<*'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		A2(_elm_community$parser_combinators$Combine$sepBy, _stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Declarations$declaration),
		_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace)),
	_stil4m$elm_syntax$Elm_Parser_Whitespace$manySpaces);
var _stil4m$elm_syntax$Elm_Parser_File$collectComments = _elm_community$parser_combinators$Combine$withState(
	function (_p0) {
		return _elm_community$parser_combinators$Combine$succeed(
			_stil4m$elm_syntax$Elm_Parser_State$getComments(_p0));
	});
var _stil4m$elm_syntax$Elm_Parser_File$file = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				_elm_community$parser_combinators$Combine$succeed(_stil4m$elm_syntax$Elm_Syntax_File$File),
				A2(
					_elm_community$parser_combinators$Combine_ops['<*'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace),
						_stil4m$elm_syntax$Elm_Parser_Modules$moduleDefinition),
					_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace))),
			A2(
				_elm_community$parser_combinators$Combine_ops['<*'],
				A2(_elm_community$parser_combinators$Combine$sepBy, _stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace, _stil4m$elm_syntax$Elm_Parser_Imports$importDefinition),
				_elm_community$parser_combinators$Combine$maybe(_stil4m$elm_syntax$Elm_Parser_Util$exactIndentWhitespace))),
		_stil4m$elm_syntax$Elm_Parser_File$fileDeclarations),
	_stil4m$elm_syntax$Elm_Parser_File$collectComments);

var _stil4m$elm_syntax$Elm_Parser$withEnd = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		p,
		_elm_community$parser_combinators$Combine$withLocation(
			function (s) {
				return A2(
					_elm_community$parser_combinators$Combine$mapError,
					function (_p0) {
						return {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Could not continue parsing on location ',
								_elm_lang$core$Basics$toString(
									{ctor: '_Tuple2', _0: s.line, _1: s.column})),
							_1: {ctor: '[]'}
						};
					},
					_elm_community$parser_combinators$Combine$end);
			}));
};
var _stil4m$elm_syntax$Elm_Parser$parse = function (input) {
	var _p1 = A3(
		_elm_community$parser_combinators$Combine$runParser,
		_stil4m$elm_syntax$Elm_Parser$withEnd(_stil4m$elm_syntax$Elm_Parser_File$file),
		_stil4m$elm_syntax$Elm_Parser_State$emptyState,
		A2(_elm_lang$core$Basics_ops['++'], input, '\n'));
	if (_p1.ctor === 'Ok') {
		return _elm_lang$core$Result$Ok(
			_stil4m$elm_syntax$Elm_Internal_RawFile$fromFile(_p1._0._2));
	} else {
		return _elm_lang$core$Result$Err(_p1._0._2);
	}
};

var _stil4m$elm_syntax$Elm_Processing_Documentation$isDocumentationForRange = F2(
	function (range, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._1;
		if (A2(_elm_lang$core$String$startsWith, '{-|', _p1._0)) {
			var functionStartRow = range.start.row;
			return _elm_lang$core$Native_Utils.eq(_p2.end.row, functionStartRow) && _elm_lang$core$Native_Utils.eq(_p2.end.column, -2);
		} else {
			return false;
		}
	});
var _stil4m$elm_syntax$Elm_Processing_Documentation$replaceFunction = F2(
	function (f1, decl) {
		var _p3 = decl;
		if (_p3.ctor === 'FuncDecl') {
			return _elm_lang$core$Native_Utils.eq(f1.declaration.name.range, _p3._0.declaration.name.range) ? _stil4m$elm_syntax$Elm_Syntax_Declaration$FuncDecl(f1) : decl;
		} else {
			return decl;
		}
	});
var _stil4m$elm_syntax$Elm_Processing_Documentation$replaceTypeAlias = F2(
	function (f1, decl) {
		var _p4 = decl;
		if (_p4.ctor === 'AliasDecl') {
			return _elm_lang$core$Native_Utils.eq(f1.range, _p4._0.range) ? _stil4m$elm_syntax$Elm_Syntax_Declaration$AliasDecl(f1) : decl;
		} else {
			return decl;
		}
	});
var _stil4m$elm_syntax$Elm_Processing_Documentation$onFunction = F2(
	function ($function, file) {
		var functionRange = A2(
			_elm_lang$core$Maybe$withDefault,
			$function.declaration.name.range,
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.range;
				},
				$function.signature));
		var docs = A2(
			_elm_lang$core$List$filter,
			_stil4m$elm_syntax$Elm_Processing_Documentation$isDocumentationForRange(functionRange),
			file.comments);
		var _p5 = _elm_lang$core$List$head(docs);
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Native_Utils.update(
				file,
				{
					comments: A2(
						_elm_lang$core$List$filter,
						F2(
							function (x, y) {
								return !_elm_lang$core$Native_Utils.eq(x, y);
							})(_p5._0),
						file.comments),
					declarations: A2(
						_elm_lang$core$List$map,
						_stil4m$elm_syntax$Elm_Processing_Documentation$replaceFunction(
							_elm_lang$core$Native_Utils.update(
								$function,
								{
									documentation: _elm_lang$core$Maybe$Just(
										A2(_stil4m$elm_syntax$Elm_Syntax_Documentation$Documentation, _p5._0._0, _p5._0._1))
								})),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var _stil4m$elm_syntax$Elm_Processing_Documentation$onTypeAlias = F2(
	function (typeAlias, file) {
		var docs = A2(
			_elm_lang$core$List$filter,
			_stil4m$elm_syntax$Elm_Processing_Documentation$isDocumentationForRange(typeAlias.range),
			file.comments);
		var _p6 = _elm_lang$core$List$head(docs);
		if (_p6.ctor === 'Just') {
			return _elm_lang$core$Native_Utils.update(
				file,
				{
					comments: A2(
						_elm_lang$core$List$filter,
						F2(
							function (x, y) {
								return !_elm_lang$core$Native_Utils.eq(x, y);
							})(_p6._0),
						file.comments),
					declarations: A2(
						_elm_lang$core$List$map,
						_stil4m$elm_syntax$Elm_Processing_Documentation$replaceTypeAlias(
							_elm_lang$core$Native_Utils.update(
								typeAlias,
								{
									documentation: _elm_lang$core$Maybe$Just(
										A2(_stil4m$elm_syntax$Elm_Syntax_Documentation$Documentation, _p6._0._0, _p6._0._1))
								})),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var _stil4m$elm_syntax$Elm_Processing_Documentation$postProcess = function (file) {
	return A3(
		_stil4m$elm_syntax$Elm_Inspector$inspect,
		_elm_lang$core$Native_Utils.update(
			_stil4m$elm_syntax$Elm_Inspector$defaultConfig,
			{
				onFunction: _stil4m$elm_syntax$Elm_Inspector$Post(_stil4m$elm_syntax$Elm_Processing_Documentation$onFunction),
				onTypeAlias: _stil4m$elm_syntax$Elm_Inspector$Post(_stil4m$elm_syntax$Elm_Processing_Documentation$onTypeAlias)
			}),
		file,
		file);
};

var _stil4m$elm_syntax$Elm_RawFile$imports = function (_p0) {
	var _p1 = _p0;
	return _p1._0.imports;
};
var _stil4m$elm_syntax$Elm_RawFile$moduleName = function (_p2) {
	var _p3 = _p2;
	return _stil4m$elm_syntax$Elm_Syntax_Module$moduleName(_p3._0.moduleDefinition);
};

var _stil4m$elm_syntax$Elm_Processing$visitLetDeclarations = F3(
	function (visitor, context, declarations) {
		return A2(
			_elm_lang$core$List$map,
			A2(_stil4m$elm_syntax$Elm_Processing$visitLetDeclaration, visitor, context),
			declarations);
	});
var _stil4m$elm_syntax$Elm_Processing$visitLetDeclaration = F3(
	function (visitor, context, declaration) {
		var _p0 = declaration;
		if (_p0.ctor === 'LetFunction') {
			return _stil4m$elm_syntax$Elm_Syntax_Expression$LetFunction(
				A3(_stil4m$elm_syntax$Elm_Processing$visitFunctionDecl, visitor, context, _p0._0));
		} else {
			return A2(
				_stil4m$elm_syntax$Elm_Syntax_Expression$LetDestructuring,
				_p0._0,
				A3(_stil4m$elm_syntax$Elm_Processing$visitExpression, visitor, context, _p0._1));
		}
	});
var _stil4m$elm_syntax$Elm_Processing$visitExpression = F3(
	function (visitor, context, expression) {
		var inner = A2(_stil4m$elm_syntax$Elm_Processing$visitExpressionInner, visitor, context);
		return A3(
			A2(
				_elm_lang$core$Maybe$withDefault,
				F3(
					function (_p1, inner, expr) {
						return inner(expr);
					}),
				visitor),
			context,
			inner,
			expression);
	});
var _stil4m$elm_syntax$Elm_Processing$visitExpressionInner = F3(
	function (visitor, context, _p2) {
		var _p3 = _p2;
		var _p10 = _p3._1;
		var subVisit = A2(_stil4m$elm_syntax$Elm_Processing$visitExpression, visitor, context);
		return A2(
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_p3._0,
			function () {
				var _p4 = _p10;
				switch (_p4.ctor) {
					case 'Application':
						return _stil4m$elm_syntax$Elm_Syntax_Expression$Application(
							A2(_elm_lang$core$List$map, subVisit, _p4._0));
					case 'OperatorApplication':
						return A4(
							_stil4m$elm_syntax$Elm_Syntax_Expression$OperatorApplication,
							_p4._0,
							_p4._1,
							subVisit(_p4._2),
							subVisit(_p4._3));
					case 'IfBlock':
						return A3(
							_stil4m$elm_syntax$Elm_Syntax_Expression$IfBlock,
							subVisit(_p4._0),
							subVisit(_p4._1),
							subVisit(_p4._2));
					case 'TupledExpression':
						return _stil4m$elm_syntax$Elm_Syntax_Expression$TupledExpression(
							A2(_elm_lang$core$List$map, subVisit, _p4._0));
					case 'ParenthesizedExpression':
						return _stil4m$elm_syntax$Elm_Syntax_Expression$ParenthesizedExpression(
							subVisit(_p4._0));
					case 'LetExpression':
						var _p5 = _p4._0;
						return _stil4m$elm_syntax$Elm_Syntax_Expression$LetExpression(
							{
								declarations: A3(_stil4m$elm_syntax$Elm_Processing$visitLetDeclarations, visitor, context, _p5.declarations),
								expression: subVisit(_p5.expression)
							});
					case 'CaseExpression':
						var _p6 = _p4._0;
						return _stil4m$elm_syntax$Elm_Syntax_Expression$CaseExpression(
							{
								expression: subVisit(_p6.expression),
								cases: A2(
									_elm_lang$core$List$map,
									_elm_lang$core$Tuple$mapSecond(subVisit),
									_p6.cases)
							});
					case 'LambdaExpression':
						var _p7 = _p4._0;
						return _stil4m$elm_syntax$Elm_Syntax_Expression$LambdaExpression(
							_elm_lang$core$Native_Utils.update(
								_p7,
								{
									expression: subVisit(_p7.expression)
								}));
					case 'RecordExpr':
						return _stil4m$elm_syntax$Elm_Syntax_Expression$RecordExpr(
							A2(
								_elm_lang$core$List$map,
								_elm_lang$core$Tuple$mapSecond(subVisit),
								_p4._0));
					case 'ListExpr':
						return _stil4m$elm_syntax$Elm_Syntax_Expression$ListExpr(
							A2(_elm_lang$core$List$map, subVisit, _p4._0));
					case 'RecordUpdateExpression':
						var _p9 = _p4._0;
						return function (_p8) {
							return _stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdateExpression(
								A2(_stil4m$elm_syntax$Elm_Syntax_Expression$RecordUpdate, _p9.name, _p8));
						}(
							A2(
								_elm_lang$core$List$map,
								_elm_lang$core$Tuple$mapSecond(subVisit),
								_p9.updates));
					default:
						return _p10;
				}
			}());
	});
var _stil4m$elm_syntax$Elm_Processing$visitFunctionDecl = F3(
	function (visitor, context, $function) {
		var newFunctionDeclaration = A3(_stil4m$elm_syntax$Elm_Processing$visitFunctionDeclaration, visitor, context, $function.declaration);
		return _elm_lang$core$Native_Utils.update(
			$function,
			{declaration: newFunctionDeclaration});
	});
var _stil4m$elm_syntax$Elm_Processing$visitFunctionDeclaration = F3(
	function (visitor, context, functionDeclaration) {
		var newExpression = A3(_stil4m$elm_syntax$Elm_Processing$visitExpression, visitor, context, functionDeclaration.expression);
		return _elm_lang$core$Native_Utils.update(
			functionDeclaration,
			{expression: newExpression});
	});
var _stil4m$elm_syntax$Elm_Processing$visitDeclaration = F3(
	function (visitor, context, declaration) {
		var _p11 = declaration;
		if (_p11.ctor === 'FuncDecl') {
			return _stil4m$elm_syntax$Elm_Syntax_Declaration$FuncDecl(
				A3(_stil4m$elm_syntax$Elm_Processing$visitFunctionDecl, visitor, context, _p11._0));
		} else {
			return declaration;
		}
	});
var _stil4m$elm_syntax$Elm_Processing$visitDeclarations = F3(
	function (visitor, context, declarations) {
		return A2(
			_elm_lang$core$List$map,
			A2(_stil4m$elm_syntax$Elm_Processing$visitDeclaration, visitor, context),
			declarations);
	});
var _stil4m$elm_syntax$Elm_Processing$visit = F3(
	function (visitor, context, file) {
		var newDeclarations = A3(_stil4m$elm_syntax$Elm_Processing$visitDeclarations, visitor, context, file.declarations);
		return _elm_lang$core$Native_Utils.update(
			file,
			{declarations: newDeclarations});
	});
var _stil4m$elm_syntax$Elm_Processing$expressionOperators = function (_p12) {
	var _p13 = _p12;
	var _p14 = _p13._1;
	if (_p14.ctor === 'Operator') {
		return _elm_lang$core$Maybe$Just(_p14._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _stil4m$elm_syntax$Elm_Processing$highestPrecedence = function (input) {
	var maxi = _elm_lang$core$List$maximum(
		A2(
			_elm_lang$core$List$map,
			function (_p15) {
				return function (_) {
					return _.precedence;
				}(
					_elm_lang$core$Tuple$second(_p15));
			},
			input));
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				function (m) {
					return A2(
						_elm_lang$core$List$filter,
						function (_p16) {
							return A2(
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									}),
								m,
								function (_) {
									return _.precedence;
								}(
									_elm_lang$core$Tuple$second(_p16)));
						},
						input);
				},
				maxi)));
};
var _stil4m$elm_syntax$Elm_Processing$findNextSplit = F2(
	function (dict, exps) {
		var prefix = A2(
			_elm_community$list_extra$List_Extra$takeWhile,
			function (x) {
				return A2(
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						}),
					_elm_lang$core$Maybe$Nothing,
					A2(
						_elm_lang$core$Maybe$andThen,
						A2(_elm_lang$core$Basics$flip, _elm_lang$core$Dict$get, dict),
						_stil4m$elm_syntax$Elm_Processing$expressionOperators(x)));
			},
			exps);
		var suffix = A2(
			_elm_lang$core$List$drop,
			_elm_lang$core$List$length(prefix) + 1,
			exps);
		return A2(
			_elm_lang$core$Maybe$map,
			function (x) {
				return {ctor: '_Tuple3', _0: prefix, _1: x, _2: suffix};
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				function (x) {
					return A2(_elm_lang$core$Dict$get, x, dict);
				},
				A2(
					_elm_lang$core$Maybe$andThen,
					_stil4m$elm_syntax$Elm_Processing$expressionOperators,
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$drop,
							_elm_lang$core$List$length(prefix),
							exps)))));
	});
var _stil4m$elm_syntax$Elm_Processing$fixApplication = F2(
	function (operators, expressions) {
		var fixExprs = function (exps) {
			var _p17 = exps;
			if ((_p17.ctor === '::') && (_p17._1.ctor === '[]')) {
				return _elm_lang$core$Tuple$second(_p17._0);
			} else {
				return _stil4m$elm_syntax$Elm_Syntax_Expression$Application(exps);
			}
		};
		var ops = _stil4m$elm_syntax$Elm_Processing$highestPrecedence(
			A2(
				_elm_lang$core$List$map,
				function (x) {
					return {
						ctor: '_Tuple2',
						_0: x,
						_1: A2(
							_elm_lang$core$Maybe$withDefault,
							{operator: x, precedence: 5, direction: _stil4m$elm_syntax$Elm_Syntax_Infix$Left},
							A2(_elm_lang$core$Dict$get, x, operators))
					};
				},
				A2(_elm_lang$core$List$filterMap, _stil4m$elm_syntax$Elm_Processing$expressionOperators, expressions)));
		var divideAndConquer = function (exps) {
			return _elm_lang$core$Dict$isEmpty(ops) ? fixExprs(exps) : A2(
				_elm_lang$core$Maybe$withDefault,
				fixExprs(exps),
				A2(
					_elm_lang$core$Maybe$map,
					function (_p18) {
						var _p19 = _p18;
						var _p22 = _p19._2;
						var _p21 = _p19._0;
						var _p20 = _p19._1;
						return A4(
							_stil4m$elm_syntax$Elm_Syntax_Expression$OperatorApplication,
							_p20.operator,
							_p20.direction,
							{
								ctor: '_Tuple2',
								_0: _stil4m$elm_syntax$Elm_Syntax_Range$combine(
									A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _p21)),
								_1: divideAndConquer(_p21)
							},
							{
								ctor: '_Tuple2',
								_0: _stil4m$elm_syntax$Elm_Syntax_Range$combine(
									A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _p22)),
								_1: divideAndConquer(_p22)
							});
					},
					A2(_stil4m$elm_syntax$Elm_Processing$findNextSplit, ops, exps)));
		};
		return divideAndConquer(expressions);
	});
var _stil4m$elm_syntax$Elm_Processing$buildSingle = F2(
	function (imp, moduleIndex) {
		var _p23 = imp.exposingList;
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			if (_p23._0.ctor === 'All') {
				return A2(
					_elm_lang$core$List$map,
					function (x) {
						return {ctor: '_Tuple2', _0: x.operator, _1: x};
					},
					_stil4m$elm_syntax$Elm_Interface$operators(
						A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							A2(_elm_lang$core$Dict$get, imp.moduleName, moduleIndex))));
			} else {
				var selectedOperators = _stil4m$elm_syntax$Elm_Syntax_Exposing$operators(_p23._0._0);
				return A2(
					_elm_lang$core$List$filter,
					function (_p24) {
						return A3(
							_elm_lang$core$Basics$flip,
							_elm_lang$core$List$member,
							selectedOperators,
							_elm_lang$core$Tuple$first(_p24));
					},
					A2(
						_elm_lang$core$List$map,
						function (x) {
							return {ctor: '_Tuple2', _0: x.operator, _1: x};
						},
						_stil4m$elm_syntax$Elm_Interface$operators(
							A2(
								_elm_lang$core$Maybe$withDefault,
								{ctor: '[]'},
								A2(_elm_lang$core$Dict$get, imp.moduleName, moduleIndex)))));
			}
		}
	});
var _stil4m$elm_syntax$Elm_Processing$tableForFile = F2(
	function (rawFile, _p25) {
		var _p26 = _p25;
		return _elm_lang$core$Dict$fromList(
			A2(
				_elm_lang$core$List$concatMap,
				A2(_elm_lang$core$Basics$flip, _stil4m$elm_syntax$Elm_Processing$buildSingle, _p26._0),
				A2(
					_elm_lang$core$Basics_ops['++'],
					_stil4m$elm_syntax$Elm_DefaultImports$defaults,
					_stil4m$elm_syntax$Elm_RawFile$imports(rawFile))));
	});
var _stil4m$elm_syntax$Elm_Processing$process = F2(
	function (processContext, _p27) {
		var _p28 = _p27;
		var table = A2(_stil4m$elm_syntax$Elm_Processing$tableForFile, _p28, processContext);
		var operatorFixed = A3(
			_stil4m$elm_syntax$Elm_Processing$visit,
			_elm_lang$core$Maybe$Just(
				F3(
					function (context, inner, expression) {
						return inner(
							function () {
								var _p29 = expression;
								if ((_p29.ctor === '_Tuple2') && (_p29._1.ctor === 'Application')) {
									return {
										ctor: '_Tuple2',
										_0: _p29._0,
										_1: A2(_stil4m$elm_syntax$Elm_Processing$fixApplication, context, _p29._1._0)
									};
								} else {
									return expression;
								}
							}());
					})),
			table,
			_p28._0);
		var documentationFixed = _stil4m$elm_syntax$Elm_Processing_Documentation$postProcess(operatorFixed);
		return documentationFixed;
	});
var _stil4m$elm_syntax$Elm_Processing$entryFromRawFile = function (_p30) {
	var _p31 = _p30;
	var _p33 = _p31;
	var _p32 = _stil4m$elm_syntax$Elm_RawFile$moduleName(_p33);
	if (_p32.ctor === 'Just') {
		return _elm_lang$core$Maybe$Just(
			{
				ctor: '_Tuple2',
				_0: _p32._0,
				_1: _stil4m$elm_syntax$Elm_Interface$build(_p33)
			});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _stil4m$elm_syntax$Elm_Processing$ProcessContext = function (a) {
	return {ctor: 'ProcessContext', _0: a};
};
var _stil4m$elm_syntax$Elm_Processing$init = _stil4m$elm_syntax$Elm_Processing$ProcessContext(_elm_lang$core$Dict$empty);
var _stil4m$elm_syntax$Elm_Processing$addFile = F2(
	function (file, _p34) {
		var _p35 = _p34;
		var _p36 = _stil4m$elm_syntax$Elm_Processing$entryFromRawFile(file);
		if (_p36.ctor === 'Just') {
			return _stil4m$elm_syntax$Elm_Processing$ProcessContext(
				A3(_elm_lang$core$Dict$insert, _p36._0._0, _p36._0._1, _p35._0));
		} else {
			return _p35;
		}
	});
var _stil4m$elm_syntax$Elm_Processing$addDependency = F2(
	function (dep, _p37) {
		var _p38 = _p37;
		return _stil4m$elm_syntax$Elm_Processing$ProcessContext(
			A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (k, v, d) {
						return A3(_elm_lang$core$Dict$insert, k, v, d);
					}),
				_p38._0,
				dep.interfaces));
	});

var _user$project$AST_Ranges$isGte = F2(
	function (a, b) {
		return (_elm_lang$core$Native_Utils.cmp(a.row, b.row) > 0) ? true : ((_elm_lang$core$Native_Utils.cmp(a.row, b.row) < 0) ? false : (_elm_lang$core$Native_Utils.cmp(a.column, b.column) > -1));
	});
var _user$project$AST_Ranges$containsRange = F2(
	function (a, b) {
		return A2(_user$project$AST_Ranges$isGte, a.start, b.start) && A2(_user$project$AST_Ranges$isGte, b.end, a.end);
	});
var _user$project$AST_Ranges$locationToString = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(_p1.row),
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p1.column),
					')'))));
};
var _user$project$AST_Ranges$compareLocations = F2(
	function (left, right) {
		return (_elm_lang$core$Native_Utils.cmp(left.row, right.row) < 0) ? _elm_lang$core$Basics$LT : ((_elm_lang$core$Native_Utils.cmp(right.row, left.row) < 0) ? _elm_lang$core$Basics$GT : A2(_elm_lang$core$Basics$compare, left.column, right.column));
	});
var _user$project$AST_Ranges$sortLocations = _elm_lang$core$List$sortWith(_user$project$AST_Ranges$compareLocations);
var _user$project$AST_Ranges$compareRangeStarts = F2(
	function (a, b) {
		return A2(_user$project$AST_Ranges$compareLocations, a.start, b.start);
	});
var _user$project$AST_Ranges$emptyRange = {
	start: {row: 0, column: 0},
	end: {row: 0, column: 0}
};
var _user$project$AST_Ranges$getRange = function (ranges) {
	var ends = _elm_lang$core$List$reverse(
		_user$project$AST_Ranges$sortLocations(
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.end;
				},
				ranges)));
	var starts = _user$project$AST_Ranges$sortLocations(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.start;
			},
			ranges));
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_user$project$AST_Ranges$emptyRange,
		A3(
			_elm_lang$core$Maybe$map2,
			_stil4m$elm_syntax$Elm_Syntax_Range$Range,
			_elm_lang$core$List$head(starts),
			_elm_lang$core$List$head(ends)));
};
var _user$project$AST_Ranges$rangeToString = function (_p2) {
	var _p3 = _p2;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$AST_Ranges$locationToString(_p3.start),
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$AST_Ranges$locationToString(_p3.end),
					')'))));
};
var _user$project$AST_Ranges$orderByStart = F2(
	function (r1, r2) {
		return (!_elm_lang$core$Native_Utils.eq(r1.start.row, r2.start.row)) ? A2(_elm_lang$core$Basics$compare, r1.start.row, r2.start.row) : A2(_elm_lang$core$Basics$compare, r1.start.column, r2.start.column);
	});

var _user$project$Analyser_Files_FileContent$loadedFileFromContent = function (fileContent) {
	var _p0 = fileContent.content;
	if (_p0.ctor === 'Just') {
		return _elm_community$result_extra$Result_Extra$merge(
			A2(
				_elm_lang$core$Result$mapError,
				function (_p1) {
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Maybe$withDefault,
							'',
							_elm_lang$core$List$head(_p1)));
				},
				A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Result$Ok,
					_stil4m$elm_syntax$Elm_Parser$parse(_p0._0))));
	} else {
		return _elm_lang$core$Result$Err('No file content');
	}
};
var _user$project$Analyser_Files_FileContent$asRawFile = function (fileContent) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Result$Err('Internal problem in the file loader. Please report an issue.'),
			_1: false
		},
		A2(
			_elm_community$maybe_extra$Maybe_Extra$orElseLazy,
			function (_p2) {
				var _p3 = _p2;
				return _elm_lang$core$Maybe$Just(
					{
						ctor: '_Tuple2',
						_0: _user$project$Analyser_Files_FileContent$loadedFileFromContent(fileContent),
						_1: true
					});
			},
			A2(
				_elm_lang$core$Maybe$map,
				function (x) {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Ok(x),
						_1: false
					};
				},
				A2(
					_elm_lang$core$Maybe$andThen,
					function (_p4) {
						return _elm_lang$core$Result$toMaybe(
							A2(_elm_lang$core$Json_Decode$decodeString, _stil4m$elm_syntax$Elm_Json_Decode$decode, _p4));
					},
					fileContent.ast))));
};
var _user$project$Analyser_Files_FileContent$FileContent = F6(
	function (a, b, c, d, e, f) {
		return {path: a, success: b, sha1: c, content: d, ast: e, formatted: f};
	});

var _user$project$Analyser_Files_Types$LoadedFileData = F3(
	function (a, b, c) {
		return {$interface: a, moduleName: b, ast: c};
	});

var _user$project$Analyser_CodeBase$mergeLoadedSourceFiles = F2(
	function (newItems, dict) {
		return A3(
			_elm_lang$core$List$foldl,
			function (sourceFile) {
				return A2(
					_elm_lang$core$Dict$insert,
					_elm_lang$core$Tuple$first(sourceFile).path,
					sourceFile);
			},
			dict,
			newItems);
	});
var _user$project$Analyser_CodeBase$sourceFiles = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Dict$values(_p1._0.sources);
};
var _user$project$Analyser_CodeBase$dependencies = function (_p2) {
	var _p3 = _p2;
	return _p3._0.dependencies;
};
var _user$project$Analyser_CodeBase$processContext = function (_p4) {
	var _p5 = _p4;
	return _p5._0.processContext;
};
var _user$project$Analyser_CodeBase$CodeBase = function (a) {
	return {ctor: 'CodeBase', _0: a};
};
var _user$project$Analyser_CodeBase$init = _user$project$Analyser_CodeBase$CodeBase(
	{
		dependencies: {ctor: '[]'},
		sources: _elm_lang$core$Dict$empty,
		processContext: _stil4m$elm_syntax$Elm_Processing$init
	});
var _user$project$Analyser_CodeBase$setDependencies = F2(
	function (deps, _p6) {
		var _p7 = _p6;
		var _p8 = _p7._0;
		return _user$project$Analyser_CodeBase$CodeBase(
			_elm_lang$core$Native_Utils.update(
				_p8,
				{
					dependencies: deps,
					processContext: A3(_elm_lang$core$List$foldl, _stil4m$elm_syntax$Elm_Processing$addDependency, _p8.processContext, deps)
				}));
	});
var _user$project$Analyser_CodeBase$addSourceFiles = F2(
	function (sourceFiles, _p9) {
		var _p10 = _p9;
		var _p12 = _p10._0;
		return _user$project$Analyser_CodeBase$CodeBase(
			_elm_lang$core$Native_Utils.update(
				_p12,
				{
					sources: A2(_user$project$Analyser_CodeBase$mergeLoadedSourceFiles, sourceFiles, _p12.sources),
					processContext: A3(
						_elm_lang$core$List$foldl,
						_stil4m$elm_syntax$Elm_Processing$addFile,
						_p12.processContext,
						A2(
							_elm_lang$core$List$filterMap,
							function (_p11) {
								return _elm_lang$core$Result$toMaybe(
									_elm_lang$core$Tuple$second(_p11));
							},
							sourceFiles))
				}));
	});

var _user$project$Analyser_FileContext$buildForFile = F2(
	function (moduleIndex, _p0) {
		var _p1 = _p0;
		var _p4 = _p1._0;
		var _p2 = _p1._1;
		if (_p2.ctor === 'Err') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p2._0;
			return _elm_lang$core$Maybe$Just(
				{
					moduleName: _stil4m$elm_syntax$Elm_RawFile$moduleName(_p3),
					ast: A2(_stil4m$elm_syntax$Elm_Processing$process, moduleIndex, _p3),
					path: _p4.path,
					content: A2(_elm_lang$core$Maybe$withDefault, '', _p4.content),
					$interface: _stil4m$elm_syntax$Elm_Interface$build(_p3),
					sha1: A2(_elm_lang$core$Maybe$withDefault, '', _p4.sha1),
					formatted: _p4.formatted
				});
		}
	});
var _user$project$Analyser_FileContext$build = F2(
	function (codeBase, selected) {
		var moduleIndex = _user$project$Analyser_CodeBase$processContext(codeBase);
		return A2(
			_elm_lang$core$List$filterMap,
			_user$project$Analyser_FileContext$buildForFile(moduleIndex),
			selected);
	});
var _user$project$Analyser_FileContext$FileContext = F7(
	function (a, b, c, d, e, f, g) {
		return {$interface: a, moduleName: b, ast: c, content: d, path: e, sha1: f, formatted: g};
	});

var _user$project$Analyser_Messages_Range$realEnd = F3(
	function (rows, d, e) {
		return (_elm_lang$core$Native_Utils.cmp(e.row, rows) > 0) ? _elm_lang$core$Native_Utils.update(
			e,
			{
				row: e.row - 2,
				column: A2(
					_elm_lang$core$Maybe$withDefault,
					0,
					A2(_elm_lang$core$Dict$get, e.row - 2, d))
			}) : ((_elm_lang$core$Native_Utils.cmp(e.column, 0) > -1) ? e : _elm_lang$core$Native_Utils.update(
			e,
			{
				row: e.row - 1,
				column: A2(
					_elm_lang$core$Maybe$withDefault,
					0,
					A2(_elm_lang$core$Dict$get, e.row - 1, d))
			}));
	});
var _user$project$Analyser_Messages_Range$asSyntaxRange = function (_p0) {
	var _p1 = _p0;
	return _p1._1;
};
var _user$project$Analyser_Messages_Range$compareRangeStarts = F2(
	function (_p3, _p2) {
		var _p4 = _p3;
		var _p5 = _p2;
		return A2(_user$project$AST_Ranges$compareRangeStarts, _p4._0, _p5._0);
	});
var _user$project$Analyser_Messages_Range$orderByStart = F2(
	function (_p7, _p6) {
		var _p8 = _p7;
		var _p9 = _p6;
		return A2(_user$project$AST_Ranges$orderByStart, _p8._0, _p9._0);
	});
var _user$project$Analyser_Messages_Range$rangeToString = function (_p10) {
	var _p11 = _p10;
	return _user$project$AST_Ranges$rangeToString(_p11._0);
};
var _user$project$Analyser_Messages_Range$startLine = function (_p12) {
	var _p13 = _p12;
	return _p13._0.start.row;
};
var _user$project$Analyser_Messages_Range$encode = function (_p14) {
	var _p15 = _p14;
	return _stil4m$elm_syntax$Elm_Syntax_Range$encode(_p15._0);
};
var _user$project$Analyser_Messages_Range$toTuple = function (_p16) {
	var _p17 = _p16;
	var _p18 = _p17._0;
	return {ctor: '_Tuple4', _0: _p18.start.row, _1: _p18.start.column, _2: _p18.end.row, _3: _p18.end.column};
};
var _user$project$Analyser_Messages_Range$Range = F2(
	function (a, b) {
		return {ctor: 'Range', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Range$emptyRange = A2(_user$project$Analyser_Messages_Range$Range, _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange, _stil4m$elm_syntax$Elm_Syntax_Range$emptyRange);
var _user$project$Analyser_Messages_Range$decode = A2(
	_elm_lang$core$Json_Decode$map,
	function (x) {
		return A2(_user$project$Analyser_Messages_Range$Range, x, x);
	},
	_stil4m$elm_syntax$Elm_Syntax_Range$decode);
var _user$project$Analyser_Messages_Range$manual = _user$project$Analyser_Messages_Range$Range;
var _user$project$Analyser_Messages_Range$build = F2(
	function (_p20, _p19) {
		var _p21 = _p20;
		var _p27 = _p21._0;
		var _p26 = _p21._1;
		var _p22 = _p19;
		var _p25 = _p22.start;
		var _p24 = _p22;
		var _p23 = _p22.end;
		return _elm_lang$core$Native_Utils.eq(_p25.row, 1) ? A2(
			_user$project$Analyser_Messages_Range$Range,
			{
				start: {row: _p25.row - 1, column: _p25.column},
				end: A3(
					_user$project$Analyser_Messages_Range$realEnd,
					_p27,
					_p26,
					{row: _p23.row - 1, column: _p23.column})
			},
			_p24) : A2(
			_user$project$Analyser_Messages_Range$Range,
			{
				start: {row: _p25.row, column: _p25.column + 1},
				end: A3(
					_user$project$Analyser_Messages_Range$realEnd,
					_p27,
					_p26,
					{row: _p23.row, column: _p23.column + 1})
			},
			_p24);
	});
var _user$project$Analyser_Messages_Range$Context = F2(
	function (a, b) {
		return {ctor: 'Context', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Range$context = function (input) {
	var rows = A2(_elm_lang$core$String$split, '\n', input);
	var index = _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (x, y) {
					return {
						ctor: '_Tuple2',
						_0: x,
						_1: _elm_lang$core$String$length(y)
					};
				}),
			rows));
	return A2(
		_user$project$Analyser_Messages_Range$Context,
		_elm_lang$core$List$length(rows),
		index);
};

var _user$project$Analyser_Messages_Types$Message = F4(
	function (a, b, c, d) {
		return {id: a, status: b, files: c, data: d};
	});
var _user$project$Analyser_Messages_Types$Applicable = {ctor: 'Applicable'};
var _user$project$Analyser_Messages_Types$newMessage = A2(_user$project$Analyser_Messages_Types$Message, 0, _user$project$Analyser_Messages_Types$Applicable);
var _user$project$Analyser_Messages_Types$Fixing = {ctor: 'Fixing'};
var _user$project$Analyser_Messages_Types$Blocked = {ctor: 'Blocked'};
var _user$project$Analyser_Messages_Types$Outdated = {ctor: 'Outdated'};
var _user$project$Analyser_Messages_Types$outdate = function (m) {
	return _elm_lang$core$Native_Utils.update(
		m,
		{status: _user$project$Analyser_Messages_Types$Outdated});
};
var _user$project$Analyser_Messages_Types$DuplicateRecordFieldUpdate = F3(
	function (a, b, c) {
		return {ctor: 'DuplicateRecordFieldUpdate', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$SingleFieldRecord = F2(
	function (a, b) {
		return {ctor: 'SingleFieldRecord', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$FunctionInLet = F2(
	function (a, b) {
		return {ctor: 'FunctionInLet', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$CoreArrayUsage = F2(
	function (a, b) {
		return {ctor: 'CoreArrayUsage', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$NonStaticRegex = F2(
	function (a, b) {
		return {ctor: 'NonStaticRegex', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$TriggerWord = F3(
	function (a, b, c) {
		return {ctor: 'TriggerWord', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$UnnecessaryPortModule = function (a) {
	return {ctor: 'UnnecessaryPortModule', _0: a};
};
var _user$project$Analyser_Messages_Types$MultiLineRecordFormatting = F2(
	function (a, b) {
		return {ctor: 'MultiLineRecordFormatting', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$LineLengthExceeded = F2(
	function (a, b) {
		return {ctor: 'LineLengthExceeded', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$UnnecessaryListConcat = F2(
	function (a, b) {
		return {ctor: 'UnnecessaryListConcat', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$DropConsOfItemAndList = F2(
	function (a, b) {
		return {ctor: 'DropConsOfItemAndList', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$DropConcatOfLists = F2(
	function (a, b) {
		return {ctor: 'DropConcatOfLists', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$UseConsOverConcat = F2(
	function (a, b) {
		return {ctor: 'UseConsOverConcat', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$UnusedImport = F3(
	function (a, b, c) {
		return {ctor: 'UnusedImport', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$UnusedImportAlias = F3(
	function (a, b, c) {
		return {ctor: 'UnusedImportAlias', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$NoUncurriedPrefix = F3(
	function (a, b, c) {
		return {ctor: 'NoUncurriedPrefix', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$RedefineVariable = F4(
	function (a, b, c, d) {
		return {ctor: 'RedefineVariable', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Analyser_Messages_Types$UnusedTypeAlias = F3(
	function (a, b, c) {
		return {ctor: 'UnusedTypeAlias', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$DuplicateImportedVariable = F4(
	function (a, b, c, d) {
		return {ctor: 'DuplicateImportedVariable', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Analyser_Messages_Types$DuplicateImport = F3(
	function (a, b, c) {
		return {ctor: 'DuplicateImport', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$FileLoadFailed = F2(
	function (a, b) {
		return {ctor: 'FileLoadFailed', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$UnformattedFile = function (a) {
	return {ctor: 'UnformattedFile', _0: a};
};
var _user$project$Analyser_Messages_Types$DebugCrash = F2(
	function (a, b) {
		return {ctor: 'DebugCrash', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$DebugLog = F2(
	function (a, b) {
		return {ctor: 'DebugLog', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$UnnecessaryParens = F2(
	function (a, b) {
		return {ctor: 'UnnecessaryParens', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$NoTopLevelSignature = F3(
	function (a, b, c) {
		return {ctor: 'NoTopLevelSignature', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$ImportAll = F3(
	function (a, b, c) {
		return {ctor: 'ImportAll', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$ExposeAll = F2(
	function (a, b) {
		return {ctor: 'ExposeAll', _0: a, _1: b};
	});
var _user$project$Analyser_Messages_Types$UnusedPatternVariable = F3(
	function (a, b, c) {
		return {ctor: 'UnusedPatternVariable', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$UnusedImportedVariable = F3(
	function (a, b, c) {
		return {ctor: 'UnusedImportedVariable', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$UnusedTopLevel = F3(
	function (a, b, c) {
		return {ctor: 'UnusedTopLevel', _0: a, _1: b, _2: c};
	});
var _user$project$Analyser_Messages_Types$UnusedVariable = F3(
	function (a, b, c) {
		return {ctor: 'UnusedVariable', _0: a, _1: b, _2: c};
	});

var _user$project$Analyser_Messages_Util$getMessageInfo = function (m) {
	var _p0 = m;
	switch (_p0.ctor) {
		case 'UnusedTopLevel':
			var _p1 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unused top level definition `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p1),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p1,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'UnusedVariable':
			var _p2 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unused variable `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p2),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p2,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'UnusedImportedVariable':
			var _p3 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unused imported variable `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p3),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p3,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'UnusedPatternVariable':
			var _p4 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unused variable `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` inside pattern in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p4),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p4,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'UnnecessaryPortModule':
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'File  `',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '` is defined as a `port` module, but is does not declare ports. It may be better to remove these.',
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'},
				_2: true
			};
		case 'ExposeAll':
			var _p5 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Exposing all in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p5),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p5,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'ImportAll':
			var _p6 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Importing all from module `',
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$String$join, '.', _p0._1),
							_1: {
								ctor: '::',
								_0: '`in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p6),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'NoTopLevelSignature':
			var _p7 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'No signature for top level definition `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p7),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p7,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'UnnecessaryParens':
			var _p8 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unnecessary parens in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p8),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p8,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'TriggerWord':
			var _p9 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: A2(
							_elm_lang$core$Basics_ops['++'],
							'`',
							A2(_elm_lang$core$Basics_ops['++'], _p0._1, '` should not be used in comments. Found in \"')),
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p9),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p9,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'NonStaticRegex':
			var _p10 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Use of `Regex.regex` as non-static in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p10),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p10,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'CoreArrayUsage':
			var _p11 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Use of `Array` is disadviced. In \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p11),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p11,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'DebugLog':
			var _p12 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Use of Debug.log in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p12),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p12,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'DebugCrash':
			var _p13 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Use of Debug.crash in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p13),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p13,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'UnformattedFile':
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unformatted file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\"',
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'},
				_2: true
			};
		case 'FileLoadFailed':
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Could not load file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" due to: ',
								_1: {
									ctor: '::',
									_0: _p0._1,
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'},
				_2: true
			};
		case 'DuplicateImport':
			var _p14 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Duplicate import for module `',
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$String$join, '.', _p0._1),
							_1: {
								ctor: '::',
								_0: '`in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at [ ',
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$core$String$join,
												' | ',
												A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Range$rangeToString, _p14)),
											_1: {
												ctor: '::',
												_0: ' ]',
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}),
				_1: _p14,
				_2: true
			};
		case 'DuplicateImportedVariable':
			var _p15 = _p0._3;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Variable `',
						_1: {
							ctor: '::',
							_0: _p0._2,
							_1: {
								ctor: '::',
								_0: '` imported multiple times module `',
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$core$String$join, '.', _p0._1),
									_1: {
										ctor: '::',
										_0: '`in file \"',
										_1: {
											ctor: '::',
											_0: _p0._0,
											_1: {
												ctor: '::',
												_0: '\" at [ ',
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$core$String$join,
														' | ',
														A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Range$rangeToString, _p15)),
													_1: {
														ctor: '::',
														_0: ' ]',
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}),
				_1: _p15,
				_2: true
			};
		case 'UnusedImportAlias':
			var _p16 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unused import alias `',
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$String$join, '.', _p0._1),
							_1: {
								ctor: '::',
								_0: '`in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p16),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p16,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'UnusedImport':
			var _p17 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Unused import `',
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$core$String$join, '.', _p0._1),
							_1: {
								ctor: '::',
								_0: '`in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p17),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p17,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'UnusedTypeAlias':
			var _p18 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Type alias `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` is not used in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p18),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p18,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'MultiLineRecordFormatting':
			var _p19 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Record should be formatted over multiple lines in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p19),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p19,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'NoUncurriedPrefix':
			var _p20 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Prefix notation for `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` is unneeded in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\" at ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p20),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p20,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'RedefineVariable':
			var _p22 = _p0._3;
			var _p21 = _p0._2;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Variable `',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '` is redefined in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\". At ',
										_1: {
											ctor: '::',
											_0: _user$project$Analyser_Messages_Range$rangeToString(_p21),
											_1: {
												ctor: '::',
												_0: ' and ',
												_1: {
													ctor: '::',
													_0: _user$project$Analyser_Messages_Range$rangeToString(_p22),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p21,
					_1: {
						ctor: '::',
						_0: _p22,
						_1: {ctor: '[]'}
					}
				},
				_2: false
			};
		case 'UseConsOverConcat':
			var _p23 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Use `::` instead of `++` in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p23),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p23,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'DropConcatOfLists':
			var _p24 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Joining two literal lists with `++`, but instead you can just join the lists. \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p24),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p24,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'DropConsOfItemAndList':
			var _p25 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Adding an item to the front of a literal list, but instead you can just put it in the list. \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p25),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p25,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'LineLengthExceeded':
			var _p26 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Line length exceeded on line(s) ',
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(
								A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Range$startLine, _p26)),
							_1: {
								ctor: '::',
								_0: ' in file \"',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '\".',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}),
				_1: _p26,
				_2: false
			};
		case 'UnnecessaryListConcat':
			var _p27 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Better merge the arguments of `List.concat` to a single list in file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p27),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p27,
					_1: {ctor: '[]'}
				},
				_2: true
			};
		case 'FunctionInLet':
			var _p28 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Let statement containing functions should be avoided in \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p28),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p28,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		case 'SingleFieldRecord':
			var _p29 = _p0._1;
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Record has only one field. Use the field\'s type or introduce a Type. In file \"',
						_1: {
							ctor: '::',
							_0: _p0._0,
							_1: {
								ctor: '::',
								_0: '\" at ',
								_1: {
									ctor: '::',
									_0: _user$project$Analyser_Messages_Range$rangeToString(_p29),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _p29,
					_1: {ctor: '[]'}
				},
				_2: false
			};
		default:
			return {
				ctor: '_Tuple3',
				_0: _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'The \'',
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {
								ctor: '::',
								_0: '\' field for a record is updated multiple times in one expression in file ',
								_1: {
									ctor: '::',
									_0: _p0._0,
									_1: {
										ctor: '::',
										_0: '.',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}),
				_1: _p0._2,
				_2: false
			};
	}
};
var _user$project$Analyser_Messages_Util$canFix = function (m) {
	var _p30 = _user$project$Analyser_Messages_Util$getMessageInfo(m);
	var result = _p30._2;
	return result;
};
var _user$project$Analyser_Messages_Util$getRanges = function (m) {
	var _p31 = _user$project$Analyser_Messages_Util$getMessageInfo(m);
	var r = _p31._1;
	return r;
};
var _user$project$Analyser_Messages_Util$firstRange = function (a) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_user$project$Analyser_Messages_Range$emptyRange,
		_elm_lang$core$List$head(
			_user$project$Analyser_Messages_Util$getRanges(a.data)));
};
var _user$project$Analyser_Messages_Util$compareMessageLocation = F2(
	function (a, b) {
		return A2(
			_user$project$Analyser_Messages_Range$orderByStart,
			_user$project$Analyser_Messages_Util$firstRange(a),
			_user$project$Analyser_Messages_Util$firstRange(b));
	});
var _user$project$Analyser_Messages_Util$messageFiles = function (_p32) {
	return A2(
		_elm_lang$core$List$map,
		_elm_lang$core$Tuple$second,
		function (_) {
			return _.files;
		}(_p32));
};
var _user$project$Analyser_Messages_Util$messageFile = function (m) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			_elm_lang$core$Tuple$second,
			_elm_lang$core$List$head(m.files)));
};
var _user$project$Analyser_Messages_Util$compareMessageFile = F2(
	function (a, b) {
		return A2(
			_elm_lang$core$Basics$compare,
			_user$project$Analyser_Messages_Util$messageFile(a),
			_user$project$Analyser_Messages_Util$messageFile(b));
	});
var _user$project$Analyser_Messages_Util$compareMessage = F2(
	function (a, b) {
		var bFile = _user$project$Analyser_Messages_Util$messageFile(b);
		var aFile = _user$project$Analyser_Messages_Util$messageFile(a);
		return _elm_lang$core$Native_Utils.eq(aFile, bFile) ? A2(
			_user$project$Analyser_Messages_Range$compareRangeStarts,
			A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Analyser_Messages_Range$emptyRange,
				_elm_lang$core$List$head(
					_user$project$Analyser_Messages_Util$getRanges(a.data))),
			A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Analyser_Messages_Range$emptyRange,
				_elm_lang$core$List$head(
					_user$project$Analyser_Messages_Util$getRanges(b.data)))) : A2(_elm_lang$core$Basics$compare, aFile, bFile);
	});
var _user$project$Analyser_Messages_Util$asString = function (m) {
	var _p33 = _user$project$Analyser_Messages_Util$getMessageInfo(m);
	var f = _p33._0;
	return f;
};
var _user$project$Analyser_Messages_Util$markFixing = F2(
	function (x, message) {
		return _elm_lang$core$Native_Utils.eq(message.id, x) ? _elm_lang$core$Native_Utils.update(
			message,
			{status: _user$project$Analyser_Messages_Types$Fixing}) : message;
	});
var _user$project$Analyser_Messages_Util$blockForShas = F2(
	function (shas, message) {
		var shouldBlock = A2(
			_elm_lang$core$List$any,
			A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, shas),
			A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, message.files));
		return shouldBlock ? _elm_lang$core$Native_Utils.update(
			message,
			{status: _user$project$Analyser_Messages_Types$Blocked}) : message;
	});

var _user$project$Util_Json$decodeTyped = function (opts) {
	return _elm_lang$core$Json_Decode$lazy(
		function (_p0) {
			var _p1 = _p0;
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (t) {
					var _p3 = _elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$filter,
							function (_p2) {
								return A2(
									F2(
										function (x, y) {
											return _elm_lang$core$Native_Utils.eq(x, y);
										}),
									t,
									_elm_lang$core$Tuple$first(_p2));
							},
							opts));
					if (_p3.ctor === 'Just') {
						return A2(
							_elm_lang$core$Json_Decode$field,
							'value',
							_elm_lang$core$Tuple$second(_p3._0));
					} else {
						return _elm_lang$core$Json_Decode$fail(
							A2(_elm_lang$core$Basics_ops['++'], 'No decoder for type: ', t));
					}
				},
				A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
		});
};
var _user$project$Util_Json$encodeTyped = F2(
	function (x, v) {
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'type',
				_1: _elm_lang$core$Json_Encode$string(x)
			},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'value', _1: v},
				_1: {ctor: '[]'}
			}
		};
	});

var _user$project$Analyser_Messages_Json$encodeMessageData = function (m) {
	var _p0 = m;
	switch (_p0.ctor) {
		case 'UnusedVariable':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnusedVariable',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'UnusedTopLevel':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnusedTopLevel',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'UnusedImportedVariable':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnusedImportedVariable',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'UnusedPatternVariable':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnusedPatternVariable',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'ExposeAll':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'ExposeAll',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'ImportAll':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'ImportAll',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'moduleName',
								_1: _elm_lang$core$Json_Encode$list(
									A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p0._1))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'NoTopLevelSignature':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'NoTopLevelSignature',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'UnnecessaryParens':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnnecessaryParens',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'MultiLineRecordFormatting':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'MultiLineRecordFormatting',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'DebugLog':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'DebugLog',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'DebugCrash':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'DebugCrash',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'UnformattedFile':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnformattedFile',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {ctor: '[]'}
					}));
		case 'UnnecessaryPortModule':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnnecessaryPortModule',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {ctor: '[]'}
					}));
		case 'FileLoadFailed':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'FileLoadFailed',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'message',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'DuplicateImport':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'DuplicateImport',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'moduleName',
								_1: _elm_lang$core$Json_Encode$list(
									A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p0._1))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'ranges',
									_1: _elm_lang$core$Json_Encode$list(
										A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Range$encode, _p0._2))
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'DuplicateImportedVariable':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'DuplicateImportedVariable',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'moduleName',
								_1: _elm_lang$core$Json_Encode$list(
									A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p0._1))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'varName',
									_1: _elm_lang$core$Json_Encode$string(_p0._2)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'ranges',
										_1: _elm_lang$core$Json_Encode$list(
											A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Range$encode, _p0._3))
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}));
		case 'UnusedTypeAlias':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnusedTypeAlias',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'RedefineVariable':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'RedefineVariable',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range1',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'range2',
										_1: _user$project$Analyser_Messages_Range$encode(_p0._3)
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}));
		case 'NoUncurriedPrefix':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'NoUncurriedPrefix',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'varName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'UnusedImportAlias':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnusedImportAlias',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'moduleName',
								_1: _elm_lang$core$Json_Encode$list(
									A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p0._1))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'UnusedImport':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnusedImport',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'moduleName',
								_1: _elm_lang$core$Json_Encode$list(
									A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p0._1))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'UseConsOverConcat':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UseConsOverConcat',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'DropConcatOfLists':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'DropConcatOfLists',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'DropConsOfItemAndList':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'DropConsOfItemAndList',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'UnnecessaryListConcat':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'UnnecessaryListConcat',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'LineLengthExceeded':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'LineLengthExceeded',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'ranges',
								_1: _elm_lang$core$Json_Encode$list(
									A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Range$encode, _p0._1))
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'TriggerWord':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'TriggerWord',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'word',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'range',
									_1: _user$project$Analyser_Messages_Range$encode(_p0._2)
								},
								_1: {ctor: '[]'}
							}
						}
					}));
		case 'NonStaticRegex':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'NonStaticRegex',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'CoreArrayUsage':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'CoreArrayUsage',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'FunctionInLet':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'FunctionInLet',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		case 'SingleFieldRecord':
			return A2(
				_user$project$Util_Json$encodeTyped,
				'SingleFieldRecord',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'range',
								_1: _user$project$Analyser_Messages_Range$encode(_p0._1)
							},
							_1: {ctor: '[]'}
						}
					}));
		default:
			return A2(
				_user$project$Util_Json$encodeTyped,
				'DuplicateRecordFieldUpdate',
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'file',
							_1: _elm_lang$core$Json_Encode$string(_p0._0)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'fieldName',
								_1: _elm_lang$core$Json_Encode$string(_p0._1)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'ranges',
									_1: _elm_lang$core$Json_Encode$list(
										A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Range$encode, _p0._2))
								},
								_1: {ctor: '[]'}
							}
						}
					}));
	}
};
var _user$project$Analyser_Messages_Json$encodeMessageStatus = function (m) {
	return _elm_lang$core$Json_Encode$string(
		function () {
			var _p1 = m;
			switch (_p1.ctor) {
				case 'Applicable':
					return 'applicable';
				case 'Outdated':
					return 'outdated';
				case 'Blocked':
					return 'blocked';
				default:
					return 'fixing';
			}
		}());
};
var _user$project$Analyser_Messages_Json$encodeMessage = function (m) {
	return _elm_lang$core$Json_Encode$object(
		A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'id',
					_1: _elm_lang$core$Json_Encode$int(m.id)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'status',
						_1: _user$project$Analyser_Messages_Json$encodeMessageStatus(m.status)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'message',
							_1: _elm_lang$core$Json_Encode$string(
								_user$project$Analyser_Messages_Util$asString(m.data))
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'files',
								_1: _elm_lang$core$Json_Encode$list(
									A2(
										_elm_lang$core$List$map,
										function (_p2) {
											return _elm_lang$core$Json_Encode$string(
												_elm_lang$core$Tuple$second(_p2));
										},
										m.files))
							},
							_1: {ctor: '[]'}
						}
					}
				}
			},
			_user$project$Analyser_Messages_Json$encodeMessageData(m.data)));
};
var _user$project$Analyser_Messages_Json$serialiseMessage = function (_p3) {
	return A2(
		_elm_lang$core$Json_Encode$encode,
		0,
		_user$project$Analyser_Messages_Json$encodeMessage(_p3));
};
var _user$project$Analyser_Messages_Json$decodeMessageFile = A2(
	_elm_lang$core$Json_Decode$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(''),
	_elm_lang$core$Json_Decode$string);
var _user$project$Analyser_Messages_Json$decodeMessageStatus = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (x) {
		var _p4 = x;
		switch (_p4) {
			case 'outdated':
				return _elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$Outdated);
			case 'blocked':
				return _elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$Blocked);
			case 'applicable':
				return _elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$Applicable);
			case 'fixing':
				return _elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$Fixing);
			default:
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'Expecected message status, but got: ', x));
		}
	},
	_elm_lang$core$Json_Decode$string);
var _user$project$Analyser_Messages_Json$fileField = A2(_elm_lang$core$Json_Decode$field, 'file', _elm_lang$core$Json_Decode$string);
var _user$project$Analyser_Messages_Json$moduleNameField = A2(
	_elm_lang$core$Json_Decode$field,
	'moduleName',
	_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string));
var _user$project$Analyser_Messages_Json$varNameField = A2(_elm_lang$core$Json_Decode$field, 'varName', _elm_lang$core$Json_Decode$string);
var _user$project$Analyser_Messages_Json$decodeFileAndRange = function (f) {
	return A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			_elm_lang$core$Json_Decode$succeed(f),
			_user$project$Analyser_Messages_Json$fileField),
		A2(_elm_lang$core$Json_Decode$field, 'range', _user$project$Analyser_Messages_Range$decode));
};
var _user$project$Analyser_Messages_Json$decodeFileModuleNameAndRange = function (f) {
	return A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(f),
				_user$project$Analyser_Messages_Json$fileField),
			_user$project$Analyser_Messages_Json$moduleNameField),
		A2(_elm_lang$core$Json_Decode$field, 'range', _user$project$Analyser_Messages_Range$decode));
};
var _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange = function (f) {
	return A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(f),
				_user$project$Analyser_Messages_Json$fileField),
			_user$project$Analyser_Messages_Json$varNameField),
		A2(_elm_lang$core$Json_Decode$field, 'range', _user$project$Analyser_Messages_Range$decode));
};
var _user$project$Analyser_Messages_Json$decodeMessageData = _user$project$Util_Json$decodeTyped(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'UnusedVariable',
			_1: _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange(_user$project$Analyser_Messages_Types$UnusedVariable)
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'UnusedTopLevel',
				_1: _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange(_user$project$Analyser_Messages_Types$UnusedTopLevel)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'UnusedImportedVariable',
					_1: _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange(_user$project$Analyser_Messages_Types$UnusedImportedVariable)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'UnusedPatternVariable',
						_1: _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange(_user$project$Analyser_Messages_Types$UnusedPatternVariable)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'ExposeAll',
							_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$ExposeAll)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'ImportAll',
								_1: _user$project$Analyser_Messages_Json$decodeFileModuleNameAndRange(_user$project$Analyser_Messages_Types$ImportAll)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'NoTopLevelSignature',
									_1: _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange(_user$project$Analyser_Messages_Types$NoTopLevelSignature)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'UnnecessaryParens',
										_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$UnnecessaryParens)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'DebugLog',
											_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$DebugLog)
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'DebugCrash',
												_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$DebugCrash)
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'MultiLineRecordFormatting',
													_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$MultiLineRecordFormatting)
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'UnformattedFile',
														_1: A2(_elm_lang$core$Json_Decode$map, _user$project$Analyser_Messages_Types$UnformattedFile, _user$project$Analyser_Messages_Json$fileField)
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'UnnecessaryPortModule',
															_1: A2(_elm_lang$core$Json_Decode$map, _user$project$Analyser_Messages_Types$UnnecessaryPortModule, _user$project$Analyser_Messages_Json$fileField)
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'FileLoadFailed',
																_1: A3(
																	_elm_lang$core$Json_Decode$map2,
																	_user$project$Analyser_Messages_Types$FileLoadFailed,
																	_user$project$Analyser_Messages_Json$fileField,
																	A2(_elm_lang$core$Json_Decode$field, 'message', _elm_lang$core$Json_Decode$string))
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'DuplicateImport',
																	_1: A2(
																		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																		A2(
																			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																			A2(
																				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																				_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$DuplicateImport),
																				_user$project$Analyser_Messages_Json$fileField),
																			_user$project$Analyser_Messages_Json$moduleNameField),
																		A2(
																			_elm_lang$core$Json_Decode$field,
																			'ranges',
																			_elm_lang$core$Json_Decode$list(_user$project$Analyser_Messages_Range$decode)))
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: 'DuplicateImportedVariable',
																		_1: A2(
																			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																			A2(
																				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																				A2(
																					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																					A2(
																						_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																						_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$DuplicateImportedVariable),
																						_user$project$Analyser_Messages_Json$fileField),
																					_user$project$Analyser_Messages_Json$moduleNameField),
																				A2(_elm_lang$core$Json_Decode$field, 'varName', _elm_lang$core$Json_Decode$string)),
																			A2(
																				_elm_lang$core$Json_Decode$field,
																				'ranges',
																				_elm_lang$core$Json_Decode$list(_user$project$Analyser_Messages_Range$decode)))
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: 'UnusedTypeAlias',
																			_1: _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange(_user$project$Analyser_Messages_Types$UnusedTypeAlias)
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'RedefineVariable',
																				_1: A2(
																					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																					A2(
																						_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																						A2(
																							_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																							A2(
																								_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																								_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$RedefineVariable),
																								_user$project$Analyser_Messages_Json$fileField),
																							_user$project$Analyser_Messages_Json$varNameField),
																						A2(_elm_lang$core$Json_Decode$field, 'range1', _user$project$Analyser_Messages_Range$decode)),
																					A2(_elm_lang$core$Json_Decode$field, 'range2', _user$project$Analyser_Messages_Range$decode))
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: 'LineLengthExceeded',
																					_1: A2(
																						_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																						A2(
																							_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																							_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$LineLengthExceeded),
																							_user$project$Analyser_Messages_Json$fileField),
																						A2(
																							_elm_lang$core$Json_Decode$field,
																							'ranges',
																							_elm_lang$core$Json_Decode$list(_user$project$Analyser_Messages_Range$decode)))
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: 'NoUncurriedPrefix',
																						_1: _user$project$Analyser_Messages_Json$decodeFileVarNameAndRange(_user$project$Analyser_Messages_Types$NoUncurriedPrefix)
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '_Tuple2',
																							_0: 'UnusedImportAlias',
																							_1: _user$project$Analyser_Messages_Json$decodeFileModuleNameAndRange(_user$project$Analyser_Messages_Types$UnusedImportAlias)
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '_Tuple2',
																								_0: 'UnusedImport',
																								_1: _user$project$Analyser_Messages_Json$decodeFileModuleNameAndRange(_user$project$Analyser_Messages_Types$UnusedImport)
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: 'UseConsOverConcat',
																									_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$UseConsOverConcat)
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '_Tuple2',
																										_0: 'DropConcatOfLists',
																										_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$DropConcatOfLists)
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '_Tuple2',
																											_0: 'DropConsOfItemAndList',
																											_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$DropConsOfItemAndList)
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '_Tuple2',
																												_0: 'UnnecessaryListConcat',
																												_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$UnnecessaryListConcat)
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '_Tuple2',
																													_0: 'TriggerWord',
																													_1: A4(
																														_elm_lang$core$Json_Decode$map3,
																														_user$project$Analyser_Messages_Types$TriggerWord,
																														_user$project$Analyser_Messages_Json$fileField,
																														A2(_elm_lang$core$Json_Decode$field, 'word', _elm_lang$core$Json_Decode$string),
																														A2(_elm_lang$core$Json_Decode$field, 'range', _user$project$Analyser_Messages_Range$decode))
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '_Tuple2',
																														_0: 'NonStaticRegex',
																														_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$NonStaticRegex)
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '_Tuple2',
																															_0: 'CoreArrayUsage',
																															_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$CoreArrayUsage)
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '_Tuple2',
																																_0: 'FunctionInLet',
																																_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$FunctionInLet)
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '_Tuple2',
																																	_0: 'SingleFieldRecord',
																																	_1: _user$project$Analyser_Messages_Json$decodeFileAndRange(_user$project$Analyser_Messages_Types$SingleFieldRecord)
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '_Tuple2',
																																		_0: 'DuplicateRecordFieldUpdate',
																																		_1: A2(
																																			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																																			A2(
																																				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																																				A2(
																																					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
																																					_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$DuplicateRecordFieldUpdate),
																																					_user$project$Analyser_Messages_Json$fileField),
																																				A2(_elm_lang$core$Json_Decode$field, 'fieldName', _elm_lang$core$Json_Decode$string)),
																																			A2(
																																				_elm_lang$core$Json_Decode$field,
																																				'ranges',
																																				_elm_lang$core$Json_Decode$list(_user$project$Analyser_Messages_Range$decode)))
																																	},
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _user$project$Analyser_Messages_Json$decodeMessage = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Messages_Types$Message),
				A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$int)),
			A2(_elm_lang$core$Json_Decode$field, 'status', _user$project$Analyser_Messages_Json$decodeMessageStatus)),
		A2(
			_elm_lang$core$Json_Decode$field,
			'files',
			_elm_lang$core$Json_Decode$list(_user$project$Analyser_Messages_Json$decodeMessageFile))),
	_user$project$Analyser_Messages_Json$decodeMessageData);

var _user$project$Analyser_Modules$encodeModuleName = function (_p0) {
	return _elm_lang$core$Json_Encode$string(
		A2(_elm_lang$core$String$join, '.', _p0));
};
var _user$project$Analyser_Modules$decodeModuleName = A2(
	_elm_lang$core$Json_Decode$map,
	_elm_lang$core$String$split('.'),
	_elm_lang$core$Json_Decode$string);
var _user$project$Analyser_Modules$encodeDependency = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$core$Json_Encode$list(
		{
			ctor: '::',
			_0: _user$project$Analyser_Modules$encodeModuleName(_p2._0),
			_1: {
				ctor: '::',
				_0: _user$project$Analyser_Modules$encodeModuleName(_p2._1),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Analyser_Modules$encode = function (e) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'projectModules',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _user$project$Analyser_Modules$encodeModuleName, e.projectModules))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'dependencies',
					_1: _elm_lang$core$Json_Encode$list(
						A2(_elm_lang$core$List$map, _user$project$Analyser_Modules$encodeDependency, e.dependencies))
				},
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Analyser_Modules$tupleFromLIst = function (x) {
	var _p3 = x;
	if (((_p3.ctor === '::') && (_p3._1.ctor === '::')) && (_p3._1._1.ctor === '[]')) {
		return _elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple2', _0: _p3._0, _1: _p3._1._0});
	} else {
		return _elm_lang$core$Json_Decode$fail('Not a tuple');
	}
};
var _user$project$Analyser_Modules$decodeDependency = A2(
	_elm_lang$core$Json_Decode$andThen,
	_user$project$Analyser_Modules$tupleFromLIst,
	_elm_lang$core$Json_Decode$list(_user$project$Analyser_Modules$decodeModuleName));
var _user$project$Analyser_Modules$edgesInFile = function (file) {
	var _p4 = file.moduleName;
	if (_p4.ctor === 'Just') {
		return A2(
			_elm_lang$core$List$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_p4._0),
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.moduleName;
				},
				file.ast.imports));
	} else {
		return {ctor: '[]'};
	}
};
var _user$project$Analyser_Modules$build = F2(
	function (codeBase, sources) {
		var files = A2(_user$project$Analyser_FileContext$build, codeBase, sources);
		return {
			projectModules: A2(
				_elm_lang$core$List$filterMap,
				function (_) {
					return _.moduleName;
				},
				files),
			dependencies: A2(_elm_lang$core$List$concatMap, _user$project$Analyser_Modules$edgesInFile, files)
		};
	});
var _user$project$Analyser_Modules$empty = {
	projectModules: {ctor: '[]'},
	dependencies: {ctor: '[]'}
};
var _user$project$Analyser_Modules$Modules = F2(
	function (a, b) {
		return {projectModules: a, dependencies: b};
	});
var _user$project$Analyser_Modules$decode = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_Modules$Modules),
		A2(
			_elm_lang$core$Json_Decode$field,
			'projectModules',
			_elm_lang$core$Json_Decode$list(_user$project$Analyser_Modules$decodeModuleName))),
	A2(
		_elm_lang$core$Json_Decode$field,
		'dependencies',
		_elm_lang$core$Json_Decode$list(_user$project$Analyser_Modules$decodeDependency)));

var _user$project$Analyser_State$encodeStatus = function (s) {
	var _p0 = s;
	switch (_p0.ctor) {
		case 'Initialising':
			return _elm_lang$core$Json_Encode$string('initialising');
		case 'Idle':
			return _elm_lang$core$Json_Encode$string('idle');
		default:
			return _elm_lang$core$Json_Encode$string('fixing');
	}
};
var _user$project$Analyser_State$encodeLabel = function (_p1) {
	return _elm_lang$core$Json_Encode$list(
		A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p1));
};
var _user$project$Analyser_State$encodeState = function (state) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'messages',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _user$project$Analyser_Messages_Json$encodeMessage, state.messages))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'idCount',
					_1: _elm_lang$core$Json_Encode$int(state.idCount)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'status',
						_1: _user$project$Analyser_State$encodeStatus(state.status)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'queue',
							_1: _elm_lang$core$Json_Encode$list(
								A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$int, state.queue))
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'modules',
								_1: _user$project$Analyser_Modules$encode(state.modules)
							},
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _user$project$Analyser_State$updateModules = F2(
	function (newModules, s) {
		return _elm_lang$core$Native_Utils.update(
			s,
			{modules: newModules});
	});
var _user$project$Analyser_State$outdateMessagesForFile = F2(
	function (fileName, state) {
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				messages: A2(
					_elm_lang$core$List$map,
					function (m) {
						return _elm_lang$core$Native_Utils.eq(
							_user$project$Analyser_Messages_Util$messageFile(m),
							fileName) ? _user$project$Analyser_Messages_Types$outdate(m) : m;
					},
					state.messages)
			});
	});
var _user$project$Analyser_State$removeMessagesForFile = F2(
	function (fileName, state) {
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				messages: A2(
					_elm_lang$core$List$filter,
					function (m) {
						return !_elm_lang$core$Native_Utils.eq(
							_user$project$Analyser_Messages_Util$messageFile(m),
							fileName);
					},
					state.messages)
			});
	});
var _user$project$Analyser_State$sortMessages = function (state) {
	return _elm_lang$core$Native_Utils.update(
		state,
		{
			messages: A2(
				_elm_lang$core$List$concatMap,
				_elm_lang$core$List$sortWith(_user$project$Analyser_Messages_Util$compareMessageLocation),
				A2(
					_elm_community$list_extra$List_Extra$groupWhile,
					F2(
						function (a, b) {
							return _elm_lang$core$Native_Utils.eq(
								_user$project$Analyser_Messages_Util$messageFile(a),
								_user$project$Analyser_Messages_Util$messageFile(b));
						}),
					A2(_elm_lang$core$List$sortWith, _user$project$Analyser_Messages_Util$compareMessageFile, state.messages)))
		});
};
var _user$project$Analyser_State$addFixToQueue = F2(
	function (m, s) {
		return _elm_lang$core$Native_Utils.update(
			s,
			{
				queue: A2(
					_elm_lang$core$Basics_ops['++'],
					s.queue,
					{
						ctor: '::',
						_0: m,
						_1: {ctor: '[]'}
					})
			});
	});
var _user$project$Analyser_State$nextTask = function (state) {
	var _p2 = state.queue;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					state,
					{queue: _p2._1}),
				_1: _p2._0
			});
	}
};
var _user$project$Analyser_State$getMessage = function (messageId) {
	return function (_p3) {
		return _elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$filter,
				function (_p4) {
					return A2(
						F2(
							function (x, y) {
								return _elm_lang$core$Native_Utils.eq(x, y);
							}),
						messageId,
						function (_) {
							return _.id;
						}(_p4));
				},
				function (_) {
					return _.messages;
				}(_p3)));
	};
};
var _user$project$Analyser_State$isBusy = function (s) {
	var _p5 = s.status;
	switch (_p5.ctor) {
		case 'Idle':
			return false;
		case 'Initialising':
			return true;
		default:
			return false;
	}
};
var _user$project$Analyser_State$State = F5(
	function (a, b, c, d, e) {
		return {messages: a, idCount: b, status: c, queue: d, modules: e};
	});
var _user$project$Analyser_State$Idle = {ctor: 'Idle'};
var _user$project$Analyser_State$finishWithNewMessages = F2(
	function (messages, s) {
		var messagesWithId = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (n, message) {
					return _elm_lang$core$Native_Utils.update(
						message,
						{id: n + s.idCount});
				}),
			messages);
		var untouchedMessages = A2(
			_elm_lang$core$List$filter,
			function (_p6) {
				return A2(
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						}),
					_user$project$Analyser_Messages_Types$Applicable,
					function (_) {
						return _.status;
					}(_p6));
			},
			s.messages);
		return _user$project$Analyser_State$sortMessages(
			_elm_lang$core$Native_Utils.update(
				s,
				{
					messages: A2(_elm_lang$core$Basics_ops['++'], untouchedMessages, messagesWithId),
					status: _user$project$Analyser_State$Idle,
					idCount: s.idCount + _elm_lang$core$List$length(messages)
				}));
	});
var _user$project$Analyser_State$Fixing = {ctor: 'Fixing'};
var _user$project$Analyser_State$startFixing = F2(
	function (message, state) {
		return _elm_lang$core$Native_Utils.update(
			state,
			{
				status: _user$project$Analyser_State$Fixing,
				messages: A2(
					_elm_lang$core$List$map,
					_user$project$Analyser_Messages_Util$markFixing(message.id),
					A2(
						_elm_lang$core$List$map,
						_user$project$Analyser_Messages_Util$blockForShas(
							A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, message.files)),
						state.messages))
			});
	});
var _user$project$Analyser_State$Initialising = {ctor: 'Initialising'};
var _user$project$Analyser_State$initialState = {
	messages: {ctor: '[]'},
	idCount: 0,
	status: _user$project$Analyser_State$Initialising,
	queue: {ctor: '[]'},
	modules: _user$project$Analyser_Modules$empty
};
var _user$project$Analyser_State$decodeStatus = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (x) {
		var _p7 = x;
		switch (_p7) {
			case 'initialising':
				return _elm_lang$core$Json_Decode$succeed(_user$project$Analyser_State$Initialising);
			case 'idle':
				return _elm_lang$core$Json_Decode$succeed(_user$project$Analyser_State$Idle);
			case 'fixing':
				return _elm_lang$core$Json_Decode$succeed(_user$project$Analyser_State$Fixing);
			default:
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'Could not decode status. got: ', x));
		}
	},
	_elm_lang$core$Json_Decode$string);
var _user$project$Analyser_State$decodeState = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			A2(
				_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
				A2(
					_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
					_elm_lang$core$Json_Decode$succeed(_user$project$Analyser_State$State),
					A2(
						_elm_lang$core$Json_Decode$field,
						'messages',
						_elm_lang$core$Json_Decode$list(_user$project$Analyser_Messages_Json$decodeMessage))),
				A2(_elm_lang$core$Json_Decode$field, 'idCount', _elm_lang$core$Json_Decode$int)),
			A2(_elm_lang$core$Json_Decode$field, 'status', _user$project$Analyser_State$decodeStatus)),
		A2(
			_elm_lang$core$Json_Decode$field,
			'queue',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$int))),
	A2(_elm_lang$core$Json_Decode$field, 'modules', _user$project$Analyser_Modules$decode));

var _user$project$Client_Highlight$highlightedString = F3(
	function (rowsAround, targetRows, range) {
		var endsOnLineEnding = false;
		var _p0 = _user$project$Analyser_Messages_Range$toTuple(range);
		var startRow = _p0._0;
		var startColumn = _p0._1;
		var endRow = _p0._2;
		var endColumn = _p0._3;
		var uiStartRow = A2(_elm_lang$core$Basics$max, 0, startRow - rowsAround);
		var highlightedRowsFull = A2(
			_elm_lang$core$List$take,
			(endRow - startRow) + 1,
			A2(_elm_lang$core$List$drop, startRow - uiStartRow, targetRows));
		var _p1 = highlightedRowsFull;
		if (_p1.ctor === '[]') {
			return '';
		} else {
			if (_p1._1.ctor === '[]') {
				return A2(
					_elm_lang$core$String$left,
					endColumn - startColumn,
					_elm_lang$core$String$dropLeft(startColumn)(_p1._0));
			} else {
				var lastHighlighedRow = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					A2(
						_elm_lang$core$Maybe$map,
						_elm_lang$core$List$singleton,
						A2(
							_elm_lang$core$Maybe$map,
							endsOnLineEnding ? A2(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								'\n') : _elm_lang$core$String$left(endColumn),
							_elm_lang$core$List$head(
								_elm_lang$core$List$reverse(highlightedRowsFull)))));
				var firstHighlightedRow = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					A2(
						_elm_lang$core$Maybe$map,
						_elm_lang$core$List$singleton,
						A2(
							_elm_lang$core$Maybe$map,
							_elm_lang$core$String$dropLeft(startColumn),
							_elm_lang$core$List$head(highlightedRowsFull))));
				var midHighlighedRows = A2(
					_elm_lang$core$List$take,
					_elm_lang$core$List$length(highlightedRowsFull) - 2,
					A2(_elm_lang$core$List$drop, 1, highlightedRowsFull));
				return A2(
					_elm_lang$core$String$join,
					'\n',
					A2(
						_elm_lang$core$Basics_ops['++'],
						firstHighlightedRow,
						A2(_elm_lang$core$Basics_ops['++'], midHighlighedRows, lastHighlighedRow)));
			}
		}
	});
var _user$project$Client_Highlight$afterHighlight = F3(
	function (rowsAround, targetRows, range) {
		var endsOnLineEnding = false;
		var _p2 = _user$project$Analyser_Messages_Range$toTuple(range);
		var startRow = _p2._0;
		var endRow = _p2._2;
		var endColumn = _p2._3;
		var uiStartRow = A2(_elm_lang$core$Basics$max, 0, startRow - rowsAround);
		var postLineText = endsOnLineEnding ? '' : A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				}),
			'\n',
			A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$String$dropLeft(endColumn),
					_elm_lang$core$List$head(
						A2(_elm_lang$core$List$drop, endRow - uiStartRow, targetRows)))));
		var postLines = A2(
			_elm_lang$core$String$join,
			'\n',
			A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$drop, targetRows, (endRow - uiStartRow) + 1));
		return A2(_elm_lang$core$Basics_ops['++'], postLineText, postLines);
	});
var _user$project$Client_Highlight$beforeHighlight = F3(
	function (rowsAround, targetRows, range) {
		var _p3 = _user$project$Analyser_Messages_Range$toTuple(range);
		var startRow = _p3._0;
		var startColumn = _p3._1;
		var uiStartRow = A2(_elm_lang$core$Basics$max, 0, startRow - rowsAround);
		var preLines = A2(_elm_lang$core$List$take, startRow - uiStartRow, targetRows);
		var preLineText = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$List$singleton,
				A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$String$left(startColumn),
					_elm_lang$core$List$head(
						A2(_elm_lang$core$List$drop, startRow - uiStartRow, targetRows)))));
		return A2(
			_elm_lang$core$String$join,
			'\n',
			A2(_elm_lang$core$Basics_ops['++'], preLines, preLineText));
	});
var _user$project$Client_Highlight$highlightedPre = F3(
	function (rowsAround, content, range) {
		var _p4 = _user$project$Analyser_Messages_Range$toTuple(range);
		var startRow = _p4._0;
		var endRow = _p4._2;
		var uiStartRow = A2(_elm_lang$core$Basics$max, 0, startRow - rowsAround);
		var target = A2(
			_elm_lang$core$List$take,
			(endRow - startRow) + (1 + (2 * rowsAround)),
			A2(
				_elm_lang$core$List$drop,
				uiStartRow,
				A2(_elm_lang$core$String$split, '\n', content)));
		var preText = A3(_user$project$Client_Highlight$beforeHighlight, rowsAround, target, range);
		var postText = A3(_user$project$Client_Highlight$afterHighlight, rowsAround, target, range);
		var highlighedSection = A3(_user$project$Client_Highlight$highlightedString, rowsAround, target, range);
		return A2(
			_elm_lang$html$Html$pre,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(preText),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$id('highlight'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'color', _1: 'white'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'background', _1: 'red'},
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(highlighedSection),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(postText),
						_1: {ctor: '[]'}
					}
				}
			});
	});

var _user$project$Client_Socket$dashboardAddress = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'ws://',
		A2(_elm_lang$core$Basics_ops['++'], _p1.host, '/state'));
};
var _user$project$Client_Socket$controlAddress = function (_p2) {
	var _p3 = _p2;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'ws://',
		A2(_elm_lang$core$Basics_ops['++'], _p3.host, '/control'));
};

var _user$project$Client_Components_ActiveMessageDialog$dialogHeader = A2(
	_elm_lang$html$Html$h3,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Message'),
		_1: {ctor: '[]'}
	});
var _user$project$Client_Components_ActiveMessageDialog$viewWithFileContent = F2(
	function (state, x) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'max-height', _1: '400px'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'scroll'},
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					A2(
						_elm_lang$core$List$map,
						A2(_user$project$Client_Highlight$highlightedPre, 3, x),
						state.ranges)),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						_user$project$Analyser_Messages_Util$asString(state.message.data)),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Client_Components_ActiveMessageDialog$dialogBody = function (state) {
	var _p0 = state.codeBlock;
	switch (_p0.ctor) {
		case 'NotAsked':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{ctor: '[]'});
		case 'Loading':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Loading...'),
					_1: {ctor: '[]'}
				});
		case 'Success':
			return A2(_user$project$Client_Components_ActiveMessageDialog$viewWithFileContent, state, _p0._0);
		default:
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Something went wrong.'),
					_1: {ctor: '[]'}
				});
	}
};
var _user$project$Client_Components_ActiveMessageDialog$init = _elm_lang$core$Maybe$Nothing;
var _user$project$Client_Components_ActiveMessageDialog$hide = _elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing);
var _user$project$Client_Components_ActiveMessageDialog$update = F3(
	function (location, msg, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'NoOp':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Close':
				return {
					ctor: '_Tuple2',
					_0: _user$project$Client_Components_ActiveMessageDialog$hide(model),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'OnFile':
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_elm_lang$core$Platform_Cmd$none,
					A2(
						_elm_lang$core$Maybe$map,
						function (y) {
							return _elm_lang$core$Native_Utils.update(
								y,
								{
									codeBlock: _krisajenkins$remotedata$RemoteData$fromResult(_p1._0)
								});
						},
						model));
			case 'Fix':
				return A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none},
					A2(
						_elm_lang$core$Maybe$map,
						function (y) {
							return {
								ctor: '_Tuple2',
								_0: _user$project$Client_Components_ActiveMessageDialog$hide(
									_elm_lang$core$Maybe$Just(y)),
								_1: A2(
									_elm_lang$websocket$WebSocket$send,
									_user$project$Client_Socket$controlAddress(location),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'fix:',
										_elm_lang$core$Basics$toString(y.message.id)))
							};
						},
						model));
			default:
				return _p1._0 ? {
					ctor: '_Tuple2',
					_0: _user$project$Client_Components_ActiveMessageDialog$hide(model),
					_1: _elm_lang$core$Platform_Cmd$none
				} : {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});
var _user$project$Client_Components_ActiveMessageDialog$State = F3(
	function (a, b, c) {
		return {message: a, ranges: b, codeBlock: c};
	});
var _user$project$Client_Components_ActiveMessageDialog$OnEscape = function (a) {
	return {ctor: 'OnEscape', _0: a};
};
var _user$project$Client_Components_ActiveMessageDialog$subscriptions = function (x) {
	var _p2 = x;
	if (_p2.ctor === 'Just') {
		return _elm_lang$keyboard$Keyboard$downs(
			function (_p3) {
				return _user$project$Client_Components_ActiveMessageDialog$OnEscape(
					A2(
						F2(
							function (x, y) {
								return _elm_lang$core$Native_Utils.eq(x, y);
							}),
						27,
						_p3));
			});
	} else {
		return _elm_lang$core$Platform_Sub$none;
	}
};
var _user$project$Client_Components_ActiveMessageDialog$NoOp = {ctor: 'NoOp'};
var _user$project$Client_Components_ActiveMessageDialog$Fix = {ctor: 'Fix'};
var _user$project$Client_Components_ActiveMessageDialog$fixableFooter = function (message) {
	var _p4 = message.data;
	switch (_p4.ctor) {
		case 'UnnecessaryParens':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn btn-success'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_ActiveMessageDialog$Fix),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Remove and format'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		case 'UnusedImportedVariable':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn btn-success'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_ActiveMessageDialog$Fix),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Remove \'',
									A2(_elm_lang$core$Basics_ops['++'], _p4._1, '\' from import list and format'))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		case 'UnformattedFile':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn btn-success'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_ActiveMessageDialog$Fix),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Format'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		case 'UnusedImportAlias':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn btn-success'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_ActiveMessageDialog$Fix),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Remove alias \'',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(_elm_lang$core$String$join, '.', _p4._1),
										'\' and format'))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		case 'UnusedTypeAlias':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn btn-success'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_ActiveMessageDialog$Fix),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Remove type alias \'',
									A2(_elm_lang$core$Basics_ops['++'], _p4._1, '\' and format'))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		case 'UnusedPatternVariable':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn btn-success'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_ActiveMessageDialog$Fix),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Optimize pattern and format'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		case 'MultiLineRecordFormatting':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn btn-success'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_ActiveMessageDialog$Fix),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Rewrite over multiple lines and format'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		default:
			return A2(
				_elm_lang$html$Html$i,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Fix has to be implemented. Pull requests are welcome.'),
					_1: {ctor: '[]'}
				});
	}
};
var _user$project$Client_Components_ActiveMessageDialog$footer = function (state) {
	return (!_user$project$Analyser_Messages_Util$canFix(state.message.data)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
		_user$project$Client_Components_ActiveMessageDialog$fixableFooter(state.message));
};
var _user$project$Client_Components_ActiveMessageDialog$OnFile = function (a) {
	return {ctor: 'OnFile', _0: a};
};
var _user$project$Client_Components_ActiveMessageDialog$show = F2(
	function (m, _p5) {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Just(
				{
					message: m,
					ranges: _user$project$Analyser_Messages_Util$getRanges(m.data),
					codeBlock: _krisajenkins$remotedata$RemoteData$Loading
				}),
			_1: A2(
				_elm_lang$http$Http$send,
				_user$project$Client_Components_ActiveMessageDialog$OnFile,
				_elm_lang$http$Http$request(
					{
						method: 'GET',
						headers: {ctor: '[]'},
						url: A2(
							_elm_lang$core$Basics_ops['++'],
							'/file?file=',
							A2(
								_elm_lang$core$String$join,
								',',
								A2(
									_elm_lang$core$List$map,
									_elm_lang$http$Http$encodeUri,
									_user$project$Analyser_Messages_Util$messageFiles(m)))),
						body: _elm_lang$http$Http$emptyBody,
						expect: _elm_lang$http$Http$expectString,
						timeout: _elm_lang$core$Maybe$Nothing,
						withCredentials: false
					}))
		};
	});
var _user$project$Client_Components_ActiveMessageDialog$Close = {ctor: 'Close'};
var _user$project$Client_Components_ActiveMessageDialog$dialogConfig = function (state) {
	return {
		closeMessage: _elm_lang$core$Maybe$Just(_user$project$Client_Components_ActiveMessageDialog$Close),
		containerClass: _elm_lang$core$Maybe$Just('message-dialog'),
		header: _elm_lang$core$Maybe$Just(_user$project$Client_Components_ActiveMessageDialog$dialogHeader),
		body: _elm_lang$core$Maybe$Just(
			_user$project$Client_Components_ActiveMessageDialog$dialogBody(state)),
		footer: _user$project$Client_Components_ActiveMessageDialog$footer(state)
	};
};
var _user$project$Client_Components_ActiveMessageDialog$view = function (model) {
	return _krisajenkins$elm_dialog$Dialog$view(
		A2(_elm_lang$core$Maybe$map, _user$project$Client_Components_ActiveMessageDialog$dialogConfig, model));
};

var _user$project$Client_Messages$view = F3(
	function (focus, n, x) {
		return A2(
			_elm_lang$html$Html$li,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'margin', _1: '10px'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'padding', _1: '10px'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'border', _1: '1px solid #ccc'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'border-radius', _1: '3px'},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'background',
											_1: _elm_lang$core$Native_Utils.eq(x.status, _user$project$Analyser_Messages_Types$Fixing) ? '#dff0d8' : '#fafafa'
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'opacity',
												_1: _elm_lang$core$Native_Utils.eq(x.status, _user$project$Analyser_Messages_Types$Outdated) ? '.5' : '1.0'
											},
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'display', _1: 'table-row'},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(focus),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$style(
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'display', _1: 'table-cell'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'padding-right', _1: '20px'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'font-size', _1: '200%'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'vertical-align', _1: 'middle'},
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$strong,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											A2(
												F2(
													function (x, y) {
														return A2(_elm_lang$core$Basics_ops['++'], x, y);
													}),
												'#',
												_elm_lang$core$Basics$toString(n + 1))),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$style(
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'display', _1: 'table-cell'},
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										_user$project$Analyser_Messages_Util$asString(x.data)),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Client_Messages$viewAll = F2(
	function (f, messages) {
		return A2(
			_elm_lang$html$Html$ul,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'list-style', _1: 'none'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'padding', _1: '0'},
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$indexedMap,
				F2(
					function (n, x) {
						return A3(
							_user$project$Client_Messages$view,
							f(x),
							n,
							x);
					}),
				messages));
	});

var _user$project$Client_Components_MessageList$withMessages = F2(
	function (x, m) {
		return _elm_lang$core$Native_Utils.update(
			m,
			{messages: x});
	});
var _user$project$Client_Components_MessageList$Model = F2(
	function (a, b) {
		return {messages: a, active: b};
	});
var _user$project$Client_Components_MessageList$init = function (m) {
	return A2(_user$project$Client_Components_MessageList$Model, m, _user$project$Client_Components_ActiveMessageDialog$init);
};
var _user$project$Client_Components_MessageList$ActiveMessageDialogMsg = function (a) {
	return {ctor: 'ActiveMessageDialogMsg', _0: a};
};
var _user$project$Client_Components_MessageList$update = F3(
	function (location, msg, model) {
		var _p0 = msg;
		if (_p0.ctor === 'Focus') {
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_Components_MessageList$ActiveMessageDialogMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{active: x});
					},
					A2(_user$project$Client_Components_ActiveMessageDialog$show, _p0._0, model.active)));
		} else {
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_Components_MessageList$ActiveMessageDialogMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{active: x});
					},
					A3(_user$project$Client_Components_ActiveMessageDialog$update, location, _p0._0, model.active)));
		}
	});
var _user$project$Client_Components_MessageList$subscriptions = function (model) {
	return A2(
		_elm_lang$core$Platform_Sub$map,
		_user$project$Client_Components_MessageList$ActiveMessageDialogMsg,
		_user$project$Client_Components_ActiveMessageDialog$subscriptions(model.active));
};
var _user$project$Client_Components_MessageList$Focus = function (a) {
	return {ctor: 'Focus', _0: a};
};
var _user$project$Client_Components_MessageList$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$core$List$isEmpty(model.messages) ? A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('alert alert-success'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('No messages'),
					_1: {ctor: '[]'}
				}) : A2(_user$project$Client_Messages$viewAll, _user$project$Client_Components_MessageList$Focus, model.messages),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$map,
					_user$project$Client_Components_MessageList$ActiveMessageDialogMsg,
					_user$project$Client_Components_ActiveMessageDialog$view(model.active)),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$Client_Components_FileTree$messagesForSelectedFile = function (m) {
	var _p0 = m.fileIndex;
	if (_p0.ctor === 'Just') {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Tuple$second,
				_elm_lang$core$List$head(
					A2(
						_elm_lang$core$List$filter,
						function (_p1) {
							return A2(
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									}),
								m.selectedFile,
								_elm_lang$core$Maybe$Just(
									_elm_lang$core$Tuple$first(_p1)));
						},
						_p0._0))));
	} else {
		return {ctor: '[]'};
	}
};
var _user$project$Client_Components_FileTree$updateMessageList = function (m) {
	return _elm_lang$core$Native_Utils.update(
		m,
		{
			messageList: A2(
				_user$project$Client_Components_MessageList$withMessages,
				_user$project$Client_Components_FileTree$messagesForSelectedFile(m),
				m.messageList)
		});
};
var _user$project$Client_Components_FileTree$updateFileIndex = function (model) {
	var messagesForFile = F2(
		function (file, state) {
			return A2(
				_elm_lang$core$List$filter,
				function (messages) {
					return A2(
						_elm_lang$core$List$member,
						file,
						A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$second, messages.files));
				},
				state.messages);
		});
	var buildTree = F2(
		function (state, tree) {
			return A2(
				_elm_lang$core$List$map,
				function (file) {
					return {
						ctor: '_Tuple2',
						_0: file,
						_1: A2(messagesForFile, file, state)
					};
				},
				tree);
		});
	return _elm_lang$core$Native_Utils.update(
		model,
		{
			fileIndex: A3(_elm_lang$core$Maybe$map2, buildTree, model.state, model.tree)
		});
};
var _user$project$Client_Components_FileTree$Model = F6(
	function (a, b, c, d, e, f) {
		return {hideGoodFiles: a, tree: b, state: c, fileIndex: d, selectedFile: e, messageList: f};
	});
var _user$project$Client_Components_FileTree$ToggleHideGoodFiles = {ctor: 'ToggleHideGoodFiles'};
var _user$project$Client_Components_FileTree$Tick = {ctor: 'Tick'};
var _user$project$Client_Components_FileTree$OnSelectFile = function (a) {
	return {ctor: 'OnSelectFile', _0: a};
};
var _user$project$Client_Components_FileTree$NewState = function (a) {
	return {ctor: 'NewState', _0: a};
};
var _user$project$Client_Components_FileTree$MessageListMsg = function (a) {
	return {ctor: 'MessageListMsg', _0: a};
};
var _user$project$Client_Components_FileTree$subscriptions = F2(
	function (location, model) {
		return _elm_lang$core$Platform_Sub$batch(
			{
				ctor: '::',
				_0: A2(
					_elm_lang$websocket$WebSocket$listen,
					_user$project$Client_Socket$dashboardAddress(location),
					function (_p2) {
						return _user$project$Client_Components_FileTree$NewState(
							A2(_elm_lang$core$Json_Decode$decodeString, _user$project$Analyser_State$decodeState, _p2));
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Time$every,
						_elm_lang$core$Time$second * 10,
						_elm_lang$core$Basics$always(_user$project$Client_Components_FileTree$Tick)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Platform_Sub$map,
							_user$project$Client_Components_FileTree$MessageListMsg,
							_user$project$Client_Components_MessageList$subscriptions(model.messageList)),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Client_Components_FileTree$update = F3(
	function (location, msg, model) {
		var _p3 = msg;
		switch (_p3.ctor) {
			case 'OnFileTree':
				var _p4 = _p3._0;
				if (_p4.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _user$project$Client_Components_FileTree$updateFileIndex(
							_elm_lang$core$Native_Utils.update(
								model,
								{
									tree: _elm_lang$core$Maybe$Just(_p4._0)
								})),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'NewState':
				return {
					ctor: '_Tuple2',
					_0: _user$project$Client_Components_FileTree$updateMessageList(
						_user$project$Client_Components_FileTree$updateFileIndex(
							_elm_lang$core$Native_Utils.update(
								model,
								{
									state: _elm_lang$core$Result$toMaybe(_p3._0)
								}))),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Tick':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A2(
						_elm_lang$websocket$WebSocket$send,
						_user$project$Client_Socket$dashboardAddress(location),
						'ping')
				};
			case 'OnSelectFile':
				return {
					ctor: '_Tuple2',
					_0: _user$project$Client_Components_FileTree$updateMessageList(
						_elm_lang$core$Native_Utils.update(
							model,
							{
								selectedFile: _elm_lang$core$Maybe$Just(_p3._0)
							})),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ToggleHideGoodFiles':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{hideGoodFiles: !model.hideGoodFiles}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return A2(
					_elm_lang$core$Tuple$mapSecond,
					_elm_lang$core$Platform_Cmd$map(_user$project$Client_Components_FileTree$MessageListMsg),
					A2(
						_elm_lang$core$Tuple$mapFirst,
						function (x) {
							return _elm_lang$core$Native_Utils.update(
								model,
								{messageList: x});
						},
						A3(_user$project$Client_Components_MessageList$update, location, _p3._0, model.messageList)));
		}
	});
var _user$project$Client_Components_FileTree$view = function (m) {
	var asItem = function (_p5) {
		var _p6 = _p5;
		var _p7 = _p6._0;
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('list-group-item'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_user$project$Client_Components_FileTree$OnSelectFile(_p7)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('badge'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							_elm_lang$core$Basics$toString(
								_elm_lang$core$List$length(_p6._1))),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text(_p7),
					_1: {ctor: '[]'}
				}
			});
	};
	var allowFile = function (_p8) {
		var _p9 = _p8;
		return m.hideGoodFiles ? (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(_p9._1),
			0) > 0) : true;
	};
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('checkbox'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$label,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$input,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$type_('checkbox'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$checked(m.hideGoodFiles),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_Components_FileTree$ToggleHideGoodFiles),
											_1: {ctor: '[]'}
										}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html$text('Only show files with messages'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$hr,
					{ctor: '[]'},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: function () {
						var _p10 = m.fileIndex;
						if (_p10.ctor === 'Just') {
							return A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('row'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$style(
											{
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'padding-top', _1: '10px'},
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('col-md-6 col-sm-6'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$div,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('list-group'),
													_1: {ctor: '[]'}
												},
												A2(
													_elm_lang$core$List$map,
													asItem,
													A2(_elm_lang$core$List$filter, allowFile, _p10._0))),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$div,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('col-md-6 col-sm-6'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.eq(m.selectedFile, _elm_lang$core$Maybe$Nothing) ? A2(
													_elm_lang$html$Html$div,
													{ctor: '[]'},
													{ctor: '[]'}) : A2(
													_elm_lang$html$Html$map,
													_user$project$Client_Components_FileTree$MessageListMsg,
													_user$project$Client_Components_MessageList$view(m.messageList)),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								});
						} else {
							return A2(
								_elm_lang$html$Html$div,
								{ctor: '[]'},
								{ctor: '[]'});
						}
					}(),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Client_Components_FileTree$OnFileTree = function (a) {
	return {ctor: 'OnFileTree', _0: a};
};
var _user$project$Client_Components_FileTree$init = function (location) {
	return {
		ctor: '_Tuple2',
		_0: {
			tree: _elm_lang$core$Maybe$Nothing,
			hideGoodFiles: true,
			state: _elm_lang$core$Maybe$Nothing,
			fileIndex: _elm_lang$core$Maybe$Nothing,
			selectedFile: _elm_lang$core$Maybe$Nothing,
			messageList: _user$project$Client_Components_MessageList$init(
				{ctor: '[]'})
		},
		_1: _elm_lang$core$Platform_Cmd$batch(
			{
				ctor: '::',
				_0: A2(
					_elm_lang$http$Http$send,
					_user$project$Client_Components_FileTree$OnFileTree,
					A2(
						_elm_lang$http$Http$get,
						'/tree',
						_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$websocket$WebSocket$send,
						_user$project$Client_Socket$dashboardAddress(location),
						'ping'),
					_1: {ctor: '[]'}
				}
			})
	};
};

var _user$project$Client_LoadingScreen$viewStateFromMaybe = F2(
	function (maybeState, f) {
		var _p0 = maybeState;
		if (_p0.ctor === 'Nothing') {
			return _elm_lang$html$Html$text('Loading...');
		} else {
			var _p1 = _p0._0;
			return _user$project$Analyser_State$isBusy(_p1) ? _elm_lang$html$Html$text('Loading...') : f(_p1);
		}
	});
var _user$project$Client_LoadingScreen$viewStateFromRemoteData = F2(
	function (rd, f) {
		var _p2 = rd;
		switch (_p2.ctor) {
			case 'Loading':
				return _elm_lang$html$Html$text('Loading...');
			case 'Success':
				var _p3 = _p2._0;
				return _user$project$Analyser_State$isBusy(_p3) ? _elm_lang$html$Html$text('Loading...') : f(_p3);
			case 'Failure':
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Something went wrong'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								_elm_lang$core$Basics$toString(_p2._0)),
							_1: {ctor: '[]'}
						}
					});
			default:
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{ctor: '[]'});
		}
	});

var _user$project$Client_DashBoard_DashBoard$init = function (location) {
	return {
		ctor: '_Tuple2',
		_0: {
			state: _krisajenkins$remotedata$RemoteData$Loading,
			messageList: _user$project$Client_Components_MessageList$init(
				{ctor: '[]'})
		},
		_1: A2(
			_elm_lang$websocket$WebSocket$send,
			_user$project$Client_Socket$dashboardAddress(location),
			'ping')
	};
};
var _user$project$Client_DashBoard_DashBoard$Model = F2(
	function (a, b) {
		return {state: a, messageList: b};
	});
var _user$project$Client_DashBoard_DashBoard$MessageListMsg = function (a) {
	return {ctor: 'MessageListMsg', _0: a};
};
var _user$project$Client_DashBoard_DashBoard$update = F3(
	function (location, msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'Tick':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A2(
						_elm_lang$websocket$WebSocket$send,
						_user$project$Client_Socket$dashboardAddress(location),
						'ping')
				};
			case 'NewMsg':
				var _p1 = _p0._0;
				if (_p1.ctor === 'Ok') {
					var _p2 = _p1._0;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								state: _krisajenkins$remotedata$RemoteData$Success(_p2),
								messageList: A2(_user$project$Client_Components_MessageList$withMessages, _p2.messages, model.messageList)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								state: _krisajenkins$remotedata$RemoteData$Failure(_p1._0)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				}
			default:
				return A2(
					_elm_lang$core$Tuple$mapSecond,
					_elm_lang$core$Platform_Cmd$map(_user$project$Client_DashBoard_DashBoard$MessageListMsg),
					A2(
						_elm_lang$core$Tuple$mapFirst,
						function (x) {
							return _elm_lang$core$Native_Utils.update(
								model,
								{messageList: x});
						},
						A3(_user$project$Client_Components_MessageList$update, location, _p0._0, model.messageList)));
		}
	});
var _user$project$Client_DashBoard_DashBoard$view = function (m) {
	return A2(
		_user$project$Client_LoadingScreen$viewStateFromRemoteData,
		m.state,
		function (_p3) {
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$h3,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Messages'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$map,
							_user$project$Client_DashBoard_DashBoard$MessageListMsg,
							_user$project$Client_Components_MessageList$view(m.messageList)),
						_1: {ctor: '[]'}
					}
				});
		});
};
var _user$project$Client_DashBoard_DashBoard$Tick = {ctor: 'Tick'};
var _user$project$Client_DashBoard_DashBoard$NewMsg = function (a) {
	return {ctor: 'NewMsg', _0: a};
};
var _user$project$Client_DashBoard_DashBoard$subscriptions = F2(
	function (location, model) {
		return _elm_lang$core$Platform_Sub$batch(
			{
				ctor: '::',
				_0: A2(
					_elm_lang$websocket$WebSocket$listen,
					_user$project$Client_Socket$dashboardAddress(location),
					function (_p4) {
						return _user$project$Client_DashBoard_DashBoard$NewMsg(
							A2(_elm_lang$core$Json_Decode$decodeString, _user$project$Analyser_State$decodeState, _p4));
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Time$every,
						_elm_lang$core$Time$second * 10,
						_elm_lang$core$Basics$always(_user$project$Client_DashBoard_DashBoard$Tick)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Platform_Sub$map,
							_user$project$Client_DashBoard_DashBoard$MessageListMsg,
							_user$project$Client_Components_MessageList$subscriptions(model.messageList)),
						_1: {ctor: '[]'}
					}
				}
			});
	});

var _user$project$Client_View_Panel$classForWidth = function (panelWidth) {
	var _p0 = panelWidth;
	if (_p0.ctor === 'WidthFull') {
		return _elm_lang$html$Html_Attributes$class('col-lg-12');
	} else {
		return _elm_lang$html$Html_Attributes$class('col-lg-6');
	}
};
var _user$project$Client_View_Panel$headerButton = function (button) {
	var _p1 = button;
	if (_p1.ctor === 'Documentation') {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$href(_p1._0),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'float', _1: 'right'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('fa fa-book'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	} else {
		return _elm_lang$html$Html$text('');
	}
};
var _user$project$Client_View_Panel$panelFooter = function (maybeContent) {
	var _p2 = maybeContent;
	if (_p2.ctor === 'Just') {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('panel-footer'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _p2._0,
				_1: {ctor: '[]'}
			});
	} else {
		return _elm_lang$html$Html$text('');
	}
};
var _user$project$Client_View_Panel$viewWithFooter = F5(
	function (panelWidth, title, button, content, maybeFooter) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _user$project$Client_View_Panel$classForWidth(panelWidth),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('panel panel-default'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('panel-heading'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(title),
								_1: {
									ctor: '::',
									_0: _user$project$Client_View_Panel$headerButton(button),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('panel-body'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: content,
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _user$project$Client_View_Panel$panelFooter(maybeFooter),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Client_View_Panel$view = F4(
	function (panelWidth, title, button, content) {
		return A5(_user$project$Client_View_Panel$viewWithFooter, panelWidth, title, button, content, _elm_lang$core$Maybe$Nothing);
	});
var _user$project$Client_View_Panel$WidthHalf = {ctor: 'WidthHalf'};
var _user$project$Client_View_Panel$WidthFull = {ctor: 'WidthFull'};
var _user$project$Client_View_Panel$NoButton = {ctor: 'NoButton'};
var _user$project$Client_View_Panel$Documentation = function (a) {
	return {ctor: 'Documentation', _0: a};
};
var _user$project$Client_View_Panel$documentationButton = function (path) {
	return _user$project$Client_View_Panel$Documentation(
		A2(_elm_lang$core$Basics_ops['++'], 'https://github.com/stil4m/elm-analyse/blob/master/docs/', path));
};

var _user$project$Graph_Json$encodeEdge = F2(
	function (enc, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'from',
					_1: _elm_lang$core$Json_Encode$int(_p1.from)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'to',
						_1: _elm_lang$core$Json_Encode$int(_p1.to)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'label',
							_1: enc(_p1.label)
						},
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Graph_Json$encodeNode = F2(
	function (enc, _p2) {
		var _p3 = _p2;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'id',
					_1: _elm_lang$core$Json_Encode$int(_p3.id)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'label',
						_1: enc(_p3.label)
					},
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Graph_Json$encode = F3(
	function (nodeEnc, edgeEnc, graph) {
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'nodes',
					_1: _elm_lang$core$Json_Encode$list(
						A2(
							_elm_lang$core$List$map,
							_user$project$Graph_Json$encodeNode(nodeEnc),
							_elm_community$graph$Graph$nodes(graph)))
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'edges',
						_1: _elm_lang$core$Json_Encode$list(
							A2(
								_elm_lang$core$List$map,
								_user$project$Graph_Json$encodeEdge(edgeEnc),
								_elm_community$graph$Graph$edges(graph)))
					},
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Graph_Json$decodeEdge = function (edgeDec) {
	return A4(
		_elm_lang$core$Json_Decode$map3,
		_elm_community$graph$Graph$Edge,
		A2(_elm_lang$core$Json_Decode$field, 'from', _elm_lang$core$Json_Decode$int),
		A2(_elm_lang$core$Json_Decode$field, 'to', _elm_lang$core$Json_Decode$int),
		A2(_elm_lang$core$Json_Decode$field, 'label', edgeDec));
};
var _user$project$Graph_Json$decodeNode = function (nodeDec) {
	return A3(
		_elm_lang$core$Json_Decode$map2,
		_elm_community$graph$Graph$Node,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$int),
		A2(_elm_lang$core$Json_Decode$field, 'label', nodeDec));
};
var _user$project$Graph_Json$decode = F2(
	function (nodeDec, edgeDec) {
		return A3(
			_elm_lang$core$Json_Decode$map2,
			_elm_community$graph$Graph$fromNodesAndEdges,
			A2(
				_elm_lang$core$Json_Decode$field,
				'nodes',
				_elm_lang$core$Json_Decode$list(
					_user$project$Graph_Json$decodeNode(nodeDec))),
			A2(
				_elm_lang$core$Json_Decode$field,
				'edges',
				_elm_lang$core$Json_Decode$list(
					_user$project$Graph_Json$decodeEdge(edgeDec))));
	});

var _user$project$ModuleGraph$empty = _elm_community$graph$Graph$empty;
var _user$project$ModuleGraph$encodeNode = function (_p0) {
	return _elm_lang$core$Json_Encode$list(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Json_Encode$string,
			function (_) {
				return _.moduleName;
			}(_p0)));
};
var _user$project$ModuleGraph$encode = A2(_user$project$Graph_Json$encode, _user$project$ModuleGraph$encodeNode, _user$project$ModuleGraph$encodeNode);
var _user$project$ModuleGraph$nodeFromModuleName = function (x) {
	return {
		text: A2(_elm_lang$core$String$join, '.', x),
		moduleName: x
	};
};
var _user$project$ModuleGraph$decodeNode = A2(
	_elm_lang$core$Json_Decode$map,
	_user$project$ModuleGraph$nodeFromModuleName,
	_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string));
var _user$project$ModuleGraph$decode = A2(_user$project$Graph_Json$decode, _user$project$ModuleGraph$decodeNode, _user$project$ModuleGraph$decodeNode);
var _user$project$ModuleGraph$Node = F2(
	function (a, b) {
		return {text: a, moduleName: b};
	});

var _user$project$Client_Graph_Table$topList = function (nodeContexts) {
	return A2(
		_elm_lang$html$Html$table,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('table'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$thead,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$tr,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$th,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Module'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$th,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Imported by'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$th,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Importing'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$tbody,
					{ctor: '[]'},
					A2(
						_elm_lang$core$List$map,
						function (nodeContext) {
							return A2(
								_elm_lang$html$Html$tr,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$td,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(nodeContext.node.label.text),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$td,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(
													_elm_lang$core$Basics$toString(
														_elm_community$intdict$IntDict$size(nodeContext.incoming))),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$td,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text(
														_elm_lang$core$Basics$toString(
															_elm_community$intdict$IntDict$size(nodeContext.outgoing))),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								});
						},
						nodeContexts)),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Client_Graph_Table$topListInAndOut = F2(
	function (count, graph) {
		var documentationButton = function (anchor) {
			return _user$project$Client_View_Panel$documentationButton(
				A2(_elm_lang$core$Basics_ops['++'], 'ModuleGraph.md#', anchor));
		};
		var nodeContexts = A2(
			_elm_lang$core$List$filterMap,
			function (x) {
				return A2(_elm_community$graph$Graph$get, x.id, graph);
			},
			_elm_community$graph$Graph$nodes(graph));
		var topImportees = A2(
			_elm_lang$core$List$sortBy,
			function (_p0) {
				return A2(
					F2(
						function (x, y) {
							return x * y;
						}),
					-1,
					_elm_community$intdict$IntDict$size(
						function (_) {
							return _.outgoing;
						}(_p0)));
			},
			nodeContexts);
		var topImported = A2(
			_elm_lang$core$List$sortBy,
			function (_p1) {
				return A2(
					F2(
						function (x, y) {
							return x * y;
						}),
					-1,
					_elm_community$intdict$IntDict$size(
						function (_) {
							return _.incoming;
						}(_p1)));
			},
			nodeContexts);
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A4(
					_user$project$Client_View_Panel$view,
					_user$project$Client_View_Panel$WidthHalf,
					'Top importees',
					documentationButton('top-importees'),
					_user$project$Client_Graph_Table$topList(
						A2(_elm_lang$core$List$take, count, topImportees))),
				_1: {
					ctor: '::',
					_0: A4(
						_user$project$Client_View_Panel$view,
						_user$project$Client_View_Panel$WidthHalf,
						'Top importers',
						documentationButton('top-importers'),
						_user$project$Client_Graph_Table$topList(
							A2(_elm_lang$core$List$take, count, topImported))),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Client_Graph_Table$view = F2(
	function (count, graph) {
		return _elm_community$graph$Graph$isEmpty(graph) ? _elm_lang$html$Html$text('') : A2(_user$project$Client_Graph_Table$topListInAndOut, count, graph);
	});

var _user$project$Client_View_Widget$colorForCategory = function (category) {
	var _p0 = category;
	switch (_p0.ctor) {
		case 'Default':
			return 'primary';
		case 'Error':
			return 'red';
		case 'Success':
			return 'green';
		default:
			return 'yellow';
	}
};
var _user$project$Client_View_Widget$view = F4(
	function (category, title, icon, value) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('col-lg-3 col-md-6'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'panel panel-',
								_user$project$Client_View_Widget$colorForCategory(category))),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('panel-heading'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('row'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$div,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('col-xs-3'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$i,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$class(
															A2(_elm_lang$core$Basics_ops['++'], 'fa fa-5x ', icon)),
														_1: {ctor: '[]'}
													},
													{ctor: '[]'}),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$div,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('col-xs-9 text-right'),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$div,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$class('huge'),
															_1: {ctor: '[]'}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text(
																_elm_lang$core$Basics$toString(value)),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$div,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text(title),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}),
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Client_View_Widget$Warning = {ctor: 'Warning'};
var _user$project$Client_View_Widget$Success = {ctor: 'Success'};
var _user$project$Client_View_Widget$Error = {ctor: 'Error'};
var _user$project$Client_View_Widget$Default = {ctor: 'Default'};

var _user$project$Client_Graph_Widgets$countModules = function (nodes) {
	return A4(
		_user$project$Client_View_Widget$view,
		_user$project$Client_View_Widget$Success,
		'Total modules',
		'fa-cube',
		_elm_lang$core$List$length(nodes));
};
var _user$project$Client_Graph_Widgets$countImports = function (edges) {
	return A4(
		_user$project$Client_View_Widget$view,
		_user$project$Client_View_Widget$Success,
		'Total imports',
		'fa-arrow-circle-o-down',
		_elm_lang$core$List$length(edges));
};

var _user$project$Client_GraphBuilder$edgesInFile = F2(
	function (moduleIndex, _p0) {
		var _p1 = _p0;
		var _p5 = _p1._0;
		var lookup = function (_p2) {
			return A3(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$Dict$get,
				moduleIndex,
				A2(_elm_lang$core$String$join, '.', _p2));
		};
		return A2(
			_elm_lang$core$Maybe$map,
			function (_p3) {
				var _p4 = _p3;
				return A3(
					_elm_community$graph$Graph$Edge,
					_p4._0,
					_p4._1,
					_user$project$ModuleGraph$nodeFromModuleName(_p5));
			},
			A3(
				_elm_lang$core$Maybe$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				lookup(_p5),
				lookup(_p1._1)));
	});
var _user$project$Client_GraphBuilder$run = function (m) {
	var moduleNames = m.projectModules;
	var nodes = A2(
		_elm_lang$core$List$indexedMap,
		F2(
			function (n, x) {
				return A2(
					_elm_community$graph$Graph$Node,
					n,
					_user$project$ModuleGraph$nodeFromModuleName(x));
			}),
		moduleNames);
	var indexedModuleNames = _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$map,
			function (_p6) {
				var _p7 = _p6;
				return {ctor: '_Tuple2', _0: _p7.label.text, _1: _p7.id};
			},
			nodes));
	var edges = A2(
		_elm_lang$core$List$filterMap,
		_user$project$Client_GraphBuilder$edgesInFile(indexedModuleNames),
		m.dependencies);
	return A2(_elm_community$graph$Graph$fromNodesAndEdges, nodes, edges);
};

var _user$project$Client_Graph_Graph$widgets = function (graph) {
	return {
		ctor: '::',
		_0: _user$project$Client_Graph_Widgets$countModules(
			_elm_community$graph$Graph$nodes(graph)),
		_1: {
			ctor: '::',
			_0: _user$project$Client_Graph_Widgets$countImports(
				_elm_community$graph$Graph$edges(graph)),
			_1: {ctor: '[]'}
		}
	};
};
var _user$project$Client_Graph_Graph$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h3,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Modules'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('row'),
						_1: {ctor: '[]'}
					},
					_user$project$Client_Graph_Graph$widgets(model)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('row'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html_Lazy$lazy,
								_user$project$Client_Graph_Table$view(20),
								model),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('row'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$h2,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('DOT file'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$pre,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(
												_elm_community$graph$Graph_GraphViz$output(model)),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$Client_Graph_Graph$init = function (state) {
	return {
		ctor: '_Tuple2',
		_0: _user$project$Client_GraphBuilder$run(state.modules),
		_1: _elm_lang$core$Platform_Cmd$none
	};
};

var _user$project$Client_Graph_PackageDependencies$packageListRelationAsBag = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (_p0, base) {
			var _p1 = _p0;
			var _p3 = _p1._1;
			return A3(
				_elm_lang$core$Dict$update,
				_p1._0,
				function (_p2) {
					return _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$core$Maybe$withDefault,
							{
								ctor: '::',
								_0: _p3,
								_1: {ctor: '[]'}
							},
							A2(
								_elm_lang$core$Maybe$map,
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									})(_p3),
								_p2)));
				},
				base);
		}),
	_elm_lang$core$Dict$empty);
var _user$project$Client_Graph_PackageDependencies$edgeToPackageRel = F2(
	function (graph, edge) {
		var toList = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				function (_p4) {
					return function (_) {
						return _.moduleName;
					}(
						function (_) {
							return _.label;
						}(
							function (_) {
								return _.node;
							}(_p4)));
				},
				A2(_elm_community$graph$Graph$get, edge.to, graph)));
		var toPackage = A2(
			_elm_lang$core$String$join,
			'.',
			A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$init(toList)));
		var fromList = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				function (_p5) {
					return function (_) {
						return _.moduleName;
					}(
						function (_) {
							return _.label;
						}(
							function (_) {
								return _.node;
							}(_p5)));
				},
				A2(_elm_community$graph$Graph$get, edge.from, graph)));
		var fromPackage = A2(
			_elm_lang$core$String$join,
			'.',
			A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$init(fromList)));
		return {
			ctor: '_Tuple2',
			_0: {ctor: '_Tuple2', _0: fromPackage, _1: toPackage},
			_1: {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$String$join, '.', fromList),
				_1: A2(_elm_lang$core$String$join, '.', toList)
			}
		};
	});
var _user$project$Client_Graph_PackageDependencies$packageNameHtml = function (input) {
	var _p6 = input;
	if (_p6 === '') {
		return A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'color', _1: '#999'},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('<<root>>'),
				_1: {ctor: '[]'}
			});
	} else {
		return _elm_lang$html$Html$text(input);
	}
};
var _user$project$Client_Graph_PackageDependencies$headerNameTd = function (x) {
	var height = 200;
	return A2(
		_elm_lang$html$Html$th,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'height',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(height),
							'px')
					},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'text-align', _1: 'left'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'whitespace', _1: 'nowrap'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'width', _1: '30px'},
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'transform',
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									'rotate(-90deg) translate(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_elm_lang$core$Basics$negate(height) + 40),
										'px, 0px)'))
							},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'width', _1: '30px'},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _user$project$Client_Graph_PackageDependencies$packageNameHtml(x),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Client_Graph_PackageDependencies$asNameTd = function (x) {
	return A2(
		_elm_lang$html$Html$th,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$Client_Graph_PackageDependencies$packageNameHtml(x),
			_1: {ctor: '[]'}
		});
};
var _user$project$Client_Graph_PackageDependencies$interPackageRelationTable = F2(
	function (_p7, rels) {
		var _p8 = _p7;
		return A2(
			_elm_lang$html$Html$table,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('table'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$thead,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$tr,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$th,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _user$project$Client_Graph_PackageDependencies$packageNameHtml(_p8._0),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html$text(' -> '),
											_1: {
												ctor: '::',
												_0: _user$project$Client_Graph_PackageDependencies$packageNameHtml(_p8._1),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$tbody,
						{ctor: '[]'},
						function () {
							var _p9 = rels;
							if (_p9.ctor === '[]') {
								return {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$tr,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$td,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$i,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$style(
																{
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'color', _1: '#777'},
																	_1: {ctor: '[]'}
																}),
															_1: {ctor: '[]'}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('No dependencies'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								};
							} else {
								return A2(
									_elm_lang$core$List$map,
									function (x) {
										return A2(
											_elm_lang$html$Html$tr,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$td,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text(x),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											});
									},
									A2(
										_elm_lang$core$List$map,
										function (_p10) {
											var _p11 = _p10;
											return A2(
												_elm_lang$core$Basics_ops['++'],
												_p11._0,
												A2(_elm_lang$core$Basics_ops['++'], ' -> ', _p11._1));
										},
										rels));
							}
						}()),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Client_Graph_PackageDependencies$interPackageRelationsTable = F2(
	function (relations, _p12) {
		var _p13 = _p12;
		var _p15 = _p13._1;
		var _p14 = _p13._0;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('row'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col-md-6'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_user$project$Client_Graph_PackageDependencies$interPackageRelationTable,
							{ctor: '_Tuple2', _0: _p14, _1: _p15},
							A2(
								_elm_lang$core$Maybe$withDefault,
								{ctor: '[]'},
								A2(
									_elm_lang$core$Dict$get,
									{ctor: '_Tuple2', _0: _p14, _1: _p15},
									relations))),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('col-md-6'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_user$project$Client_Graph_PackageDependencies$interPackageRelationTable,
								{ctor: '_Tuple2', _0: _p15, _1: _p14},
								A2(
									_elm_lang$core$Maybe$withDefault,
									{ctor: '[]'},
									A2(
										_elm_lang$core$Dict$get,
										{ctor: '_Tuple2', _0: _p15, _1: _p14},
										relations))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Client_Graph_PackageDependencies$update = F2(
	function (msg, model) {
		var _p16 = msg;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{
					selected: _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p16._0, _1: _p16._1})
				}),
			_1: _elm_lang$core$Platform_Cmd$none
		};
	});
var _user$project$Client_Graph_PackageDependencies$Model = F4(
	function (a, b, c, d) {
		return {names: a, relations: b, selected: c, graph: d};
	});
var _user$project$Client_Graph_PackageDependencies$init = function (_p17) {
	var _p18 = _p17;
	var graph = _user$project$Client_GraphBuilder$run(_p18.modules);
	var relations = _user$project$Client_Graph_PackageDependencies$packageListRelationAsBag(
		A2(
			_elm_lang$core$List$map,
			_user$project$Client_Graph_PackageDependencies$edgeToPackageRel(graph),
			_elm_community$graph$Graph$edges(graph)));
	var names = _elm_lang$core$List$sort(
		_elm_lang$core$Set$toList(
			_elm_lang$core$Set$fromList(
				A2(
					_elm_lang$core$List$concatMap,
					function (_p19) {
						var _p20 = _p19;
						return {
							ctor: '::',
							_0: _p20._0,
							_1: {
								ctor: '::',
								_0: _p20._1,
								_1: {ctor: '[]'}
							}
						};
					},
					_elm_lang$core$Dict$keys(relations)))));
	return {
		ctor: '_Tuple2',
		_0: A4(_user$project$Client_Graph_PackageDependencies$Model, names, relations, _elm_lang$core$Maybe$Nothing, graph),
		_1: _elm_lang$core$Platform_Cmd$none
	};
};
var _user$project$Client_Graph_PackageDependencies$Select = F2(
	function (a, b) {
		return {ctor: 'Select', _0: a, _1: b};
	});
var _user$project$Client_Graph_PackageDependencies$packageContentTd = F4(
	function (from, to, relations, selected) {
		if (_elm_lang$core$Native_Utils.eq(from, to)) {
			return A2(
				_elm_lang$html$Html$td,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background', _1: 'black'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				{ctor: '[]'});
		} else {
			var styleClass = (_elm_lang$core$Native_Utils.eq(
				selected,
				_elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: from, _1: to})) || _elm_lang$core$Native_Utils.eq(
				selected,
				_elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: to, _1: from}))) ? 'info' : ((A2(
				_elm_lang$core$Dict$member,
				{ctor: '_Tuple2', _0: from, _1: to},
				relations) && A2(
				_elm_lang$core$Dict$member,
				{ctor: '_Tuple2', _0: to, _1: from},
				relations)) ? 'danger' : '');
			return A2(
				_elm_lang$html$Html$td,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class(styleClass),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'text-align', _1: 'center'},
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								A2(_user$project$Client_Graph_PackageDependencies$Select, from, to)),
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(
							_elm_lang$core$Maybe$withDefault,
							'',
							A2(
								_elm_lang$core$Maybe$map,
								function (_p21) {
									return _elm_lang$core$Basics$toString(
										_elm_lang$core$List$length(_p21));
								},
								A2(
									_elm_lang$core$Dict$get,
									{ctor: '_Tuple2', _0: from, _1: to},
									relations)))),
					_1: {ctor: '[]'}
				});
		}
	});
var _user$project$Client_Graph_PackageDependencies$packageCycleRow = F4(
	function (name, names, relations, selected) {
		return A2(
			_elm_lang$html$Html$tr,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _user$project$Client_Graph_PackageDependencies$asNameTd(name),
				_1: A2(
					_elm_lang$core$List$map,
					function (other) {
						return A4(_user$project$Client_Graph_PackageDependencies$packageContentTd, name, other, relations, selected);
					},
					names)
			});
	});
var _user$project$Client_Graph_PackageDependencies$view = function (_p22) {
	var _p23 = _p22;
	var _p26 = _p23.selected;
	var _p25 = _p23.relations;
	var _p24 = _p23.names;
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$table,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('table table-condensed'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$tbody,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$tr,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$td,
										{ctor: '[]'},
										{ctor: '[]'}),
									_1: A2(_elm_lang$core$List$map, _user$project$Client_Graph_PackageDependencies$headerNameTd, _p24)
								}),
							_1: A2(
								_elm_lang$core$List$map,
								function (x) {
									return A4(_user$project$Client_Graph_PackageDependencies$packageCycleRow, x, _p24, _p25, _p26);
								},
								_p24)
						}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Maybe$withDefault,
					A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{ctor: '[]'}),
					A2(
						_elm_lang$core$Maybe$map,
						_user$project$Client_Graph_PackageDependencies$interPackageRelationsTable(_p25),
						_p26)),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$Client_StaticStatePage$StaticPage = F3(
	function (a, b, c) {
		return {view: a, update: b, init: c};
	});
var _user$project$Client_StaticStatePage$Model = F3(
	function (a, b, c) {
		return {staticPage: a, subModel: b, state: c};
	});
var _user$project$Client_StaticStatePage$ProxyMsg = function (a) {
	return {ctor: 'ProxyMsg', _0: a};
};
var _user$project$Client_StaticStatePage$update = F2(
	function (msg, model) {
		var _p0 = msg;
		if (_p0.ctor === 'OnState') {
			var _p3 = _p0._0;
			var _p1 = function () {
				var _p2 = _krisajenkins$remotedata$RemoteData$toMaybe(_p3);
				if (_p2.ctor === 'Just') {
					return A2(
						_elm_lang$core$Tuple$mapFirst,
						_elm_lang$core$Maybe$Just,
						model.staticPage.init(_p2._0));
				} else {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Platform_Cmd$none};
				}
			}();
			var newSubModel = _p1._0;
			var subModelMsgs = _p1._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					model,
					{state: _p3, subModel: newSubModel}),
				_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Client_StaticStatePage$ProxyMsg, subModelMsgs)
			};
		} else {
			var _p4 = model.subModel;
			if (_p4.ctor === 'Nothing') {
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			} else {
				var _p5 = A2(model.staticPage.update, _p0._0, _p4._0);
				var newSubModel = _p5._0;
				var subModelMsgs = _p5._1;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							subModel: _elm_lang$core$Maybe$Just(newSubModel)
						}),
					_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Client_StaticStatePage$ProxyMsg, subModelMsgs)
				};
			}
		}
	});
var _user$project$Client_StaticStatePage$view = function (model) {
	return A2(
		_user$project$Client_LoadingScreen$viewStateFromRemoteData,
		model.state,
		function (_p6) {
			var _p7 = model.subModel;
			if (_p7.ctor === 'Just') {
				return A2(
					_elm_lang$html$Html$map,
					_user$project$Client_StaticStatePage$ProxyMsg,
					model.staticPage.view(_p7._0));
			} else {
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('NOTHING'),
						_1: {ctor: '[]'}
					});
			}
		});
};
var _user$project$Client_StaticStatePage$OnState = function (a) {
	return {ctor: 'OnState', _0: a};
};
var _user$project$Client_StaticStatePage$init = function (x) {
	return {
		ctor: '_Tuple2',
		_0: A3(_user$project$Client_StaticStatePage$Model, x, _elm_lang$core$Maybe$Nothing, _krisajenkins$remotedata$RemoteData$Loading),
		_1: A2(
			_elm_lang$core$Platform_Cmd$map,
			_user$project$Client_StaticStatePage$OnState,
			_krisajenkins$remotedata$RemoteData$sendRequest(
				A2(_elm_lang$http$Http$get, '/state', _user$project$Analyser_State$decodeState)))
	};
};

var _user$project$Client_App_Models$moduleGraphPage = _user$project$Client_StaticStatePage$init(
	{
		view: _user$project$Client_Graph_Graph$view,
		update: F2(
			function (_p0, model) {
				var _p1 = _p0;
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			}),
		init: _user$project$Client_Graph_Graph$init
	});
var _user$project$Client_App_Models$packageDependenciesPage = _user$project$Client_StaticStatePage$init(
	{view: _user$project$Client_Graph_PackageDependencies$view, update: _user$project$Client_Graph_PackageDependencies$update, init: _user$project$Client_Graph_PackageDependencies$init});
var _user$project$Client_App_Models$Model = F2(
	function (a, b) {
		return {location: a, content: b};
	});
var _user$project$Client_App_Models$OnLocation = function (a) {
	return {ctor: 'OnLocation', _0: a};
};
var _user$project$Client_App_Models$Refresh = {ctor: 'Refresh'};
var _user$project$Client_App_Models$PackageDependenciesMsg = function (a) {
	return {ctor: 'PackageDependenciesMsg', _0: a};
};
var _user$project$Client_App_Models$FileTreeMsg = function (a) {
	return {ctor: 'FileTreeMsg', _0: a};
};
var _user$project$Client_App_Models$GraphMsg = function (a) {
	return {ctor: 'GraphMsg', _0: a};
};
var _user$project$Client_App_Models$DashBoardMsg = function (a) {
	return {ctor: 'DashBoardMsg', _0: a};
};
var _user$project$Client_App_Models$PackageDependenciesContent = function (a) {
	return {ctor: 'PackageDependenciesContent', _0: a};
};
var _user$project$Client_App_Models$GraphContent = function (a) {
	return {ctor: 'GraphContent', _0: a};
};
var _user$project$Client_App_Models$FileTreeContent = function (a) {
	return {ctor: 'FileTreeContent', _0: a};
};
var _user$project$Client_App_Models$DashBoardContent = function (a) {
	return {ctor: 'DashBoardContent', _0: a};
};

var _user$project$Client_App_Menu$isActiveClass = F2(
	function (l, s) {
		return (_elm_lang$core$Native_Utils.eq(s, l.hash) || (_elm_lang$core$Native_Utils.eq(l.hash, '') && _elm_lang$core$Native_Utils.eq(s, '#dashboard'))) ? 'active' : '';
	});
var _user$project$Client_App_Menu$menuItem = F4(
	function (location, path, name, icon) {
		return A2(
			_elm_lang$html$Html$li,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(
					A2(_user$project$Client_App_Menu$isActiveClass, location, path)),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$href(path),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$i,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'fa fa-',
										A2(_elm_lang$core$Basics_ops['++'], icon, ' fa-fw'))),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(' '),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html$text(name),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Client_App_Menu$view = function (l) {
	return A2(
		_elm_lang$html$Html$nav,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('navbar navbar-default navbar-static-top'),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'navigation'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'margin-bottom', _1: '0'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('navbar-header'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$a,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('navbar-brand'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$href('/'),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Elm Analyse'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$form,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('navbar-form navbar-right'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$button,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$type_('button'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('btn btn-default'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(_user$project$Client_App_Models$Refresh),
												_1: {ctor: '[]'}
											}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Refresh'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('navbar-default sidebar'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'navigation'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('sidebar-nav'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$ul,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('nav in'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A4(_user$project$Client_App_Menu$menuItem, l, '#dashboard', 'Dashboard', 'dashboard'),
										_1: {
											ctor: '::',
											_0: A4(_user$project$Client_App_Menu$menuItem, l, '#tree', 'Tree', 'files-o'),
											_1: {
												ctor: '::',
												_0: A4(_user$project$Client_App_Menu$menuItem, l, '#modules', 'Modules', 'cubes'),
												_1: {
													ctor: '::',
													_0: A4(_user$project$Client_App_Menu$menuItem, l, '#package-dependencies', 'Package Dependencies', 'crosshairs'),
													_1: {ctor: '[]'}
												}
											}
										}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$Client_App_App$onGraphMsg = F2(
	function (subMsg, model) {
		var _p0 = model.content;
		if (_p0.ctor === 'GraphContent') {
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$GraphMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								content: _user$project$Client_App_Models$GraphContent(x)
							});
					},
					A2(_user$project$Client_StaticStatePage$update, subMsg, _p0._0)));
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{ctor: '[]'});
		}
	});
var _user$project$Client_App_App$onDashBoardMsg = F2(
	function (subMsg, model) {
		var _p1 = model.content;
		if (_p1.ctor === 'DashBoardContent') {
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$DashBoardMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								content: _user$project$Client_App_Models$DashBoardContent(x)
							});
					},
					A3(_user$project$Client_DashBoard_DashBoard$update, model.location, subMsg, _p1._0)));
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{ctor: '[]'});
		}
	});
var _user$project$Client_App_App$onFileTreeMsg = F2(
	function (subMsg, model) {
		var _p2 = model.content;
		if (_p2.ctor === 'FileTreeContent') {
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$FileTreeMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								content: _user$project$Client_App_Models$FileTreeContent(x)
							});
					},
					A3(_user$project$Client_Components_FileTree$update, model.location, subMsg, _p2._0)));
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{ctor: '[]'});
		}
	});
var _user$project$Client_App_App$onPackageDependenciesMsg = F2(
	function (subMsg, model) {
		var _p3 = model.content;
		if (_p3.ctor === 'PackageDependenciesContent') {
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$PackageDependenciesMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return _elm_lang$core$Native_Utils.update(
							model,
							{
								content: _user$project$Client_App_Models$PackageDependenciesContent(x)
							});
					},
					A2(_user$project$Client_StaticStatePage$update, subMsg, _p3._0)));
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				model,
				{ctor: '[]'});
		}
	});
var _user$project$Client_App_App$view = function (m) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$Client_App_Menu$view(m.location),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$id('page-wrapper'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: function () {
							var _p4 = m.content;
							switch (_p4.ctor) {
								case 'DashBoardContent':
									return A2(
										_elm_lang$html$Html$map,
										_user$project$Client_App_Models$DashBoardMsg,
										_user$project$Client_DashBoard_DashBoard$view(_p4._0));
								case 'GraphContent':
									return A2(
										_elm_lang$html$Html$map,
										_user$project$Client_App_Models$GraphMsg,
										_user$project$Client_StaticStatePage$view(_p4._0));
								case 'FileTreeContent':
									return A2(
										_elm_lang$html$Html$map,
										_user$project$Client_App_Models$FileTreeMsg,
										_user$project$Client_Components_FileTree$view(_p4._0));
								default:
									return A2(
										_elm_lang$html$Html$map,
										_user$project$Client_App_Models$PackageDependenciesMsg,
										_user$project$Client_StaticStatePage$view(_p4._0));
							}
						}(),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Client_App_App$onLocation = function (l) {
	var _p5 = l.hash;
	switch (_p5) {
		case '#tree':
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$FileTreeMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return {
							content: _user$project$Client_App_Models$FileTreeContent(x),
							location: l
						};
					},
					_user$project$Client_Components_FileTree$init(l)));
		case '#modules':
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$GraphMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return {
							content: _user$project$Client_App_Models$GraphContent(x),
							location: l
						};
					},
					_user$project$Client_App_Models$moduleGraphPage));
		case '#package-dependencies':
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$PackageDependenciesMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return {
							content: _user$project$Client_App_Models$PackageDependenciesContent(x),
							location: l
						};
					},
					_user$project$Client_App_Models$packageDependenciesPage));
		default:
			return A2(
				_elm_lang$core$Tuple$mapSecond,
				_elm_lang$core$Platform_Cmd$map(_user$project$Client_App_Models$DashBoardMsg),
				A2(
					_elm_lang$core$Tuple$mapFirst,
					function (x) {
						return {
							content: _user$project$Client_App_Models$DashBoardContent(x),
							location: l
						};
					},
					_user$project$Client_DashBoard_DashBoard$init(l)));
	}
};
var _user$project$Client_App_App$update = F2(
	function (msg, model) {
		var _p6 = msg;
		switch (_p6.ctor) {
			case 'OnLocation':
				return _user$project$Client_App_App$onLocation(_p6._0);
			case 'Refresh':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A2(
						_elm_lang$websocket$WebSocket$send,
						_user$project$Client_Socket$controlAddress(model.location),
						'reload')
				};
			case 'DashBoardMsg':
				return A2(_user$project$Client_App_App$onDashBoardMsg, _p6._0, model);
			case 'GraphMsg':
				return A2(_user$project$Client_App_App$onGraphMsg, _p6._0, model);
			case 'FileTreeMsg':
				return A2(_user$project$Client_App_App$onFileTreeMsg, _p6._0, model);
			default:
				return A2(_user$project$Client_App_App$onPackageDependenciesMsg, _p6._0, model);
		}
	});
var _user$project$Client_App_App$init = _user$project$Client_App_App$onLocation;
var _user$project$Client_App_App$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: function () {
				var _p7 = model.content;
				switch (_p7.ctor) {
					case 'DashBoardContent':
						return A2(
							_elm_lang$core$Platform_Sub$map,
							_user$project$Client_App_Models$DashBoardMsg,
							A2(_user$project$Client_DashBoard_DashBoard$subscriptions, model.location, _p7._0));
					case 'GraphContent':
						return _elm_lang$core$Platform_Sub$none;
					case 'FileTreeContent':
						return A2(
							_elm_lang$core$Platform_Sub$map,
							_user$project$Client_App_Models$FileTreeMsg,
							A2(_user$project$Client_Components_FileTree$subscriptions, model.location, _p7._0));
					default:
						return _elm_lang$core$Platform_Sub$none;
				}
			}(),
			_1: {
				ctor: '::',
				_0: _elm_lang$websocket$WebSocket$keepAlive(
					_user$project$Client_Socket$controlAddress(model.location)),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$Client$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$Client_App_App$view(model),
			_1: {
				ctor: '::',
				_0: _danielnarey$elm_css_frameworks$CssFrameworks$toStyleNode(_danielnarey$elm_css_frameworks$CssFrameworks_Bootstrap$bootstrap),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Client$main = A2(
	_elm_lang$navigation$Navigation$program,
	_user$project$Client_App_Models$OnLocation,
	{init: _user$project$Client_App_App$init, view: _user$project$Client$view, update: _user$project$Client_App_App$update, subscriptions: _user$project$Client_App_App$subscriptions})();

var Elm = {};
Elm['Client'] = Elm['Client'] || {};
if (typeof _user$project$Client$main !== 'undefined') {
    _user$project$Client$main(Elm['Client'], 'Client', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

