(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
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

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.eM.a7 === region.dY.a7)
	{
		return 'on line ' + region.eM.a7;
	}
	return 'on lines ' + region.eM.a7 + ' through ' + region.dY.a7;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
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


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.d5,
		impl.e2,
		impl.eR,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

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


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		ak: func(record.ak),
		eP: record.eP,
		ey: record.ey
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.ak;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.eP;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.ey) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
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
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
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

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.d5,
		impl.e2,
		impl.eR,
		function(sendToApp, initialModel) {
			var view = impl.e5;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.d5,
		impl.e2,
		impl.eR,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.b3 && impl.b3(sendToApp)
			var view = impl.e5;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cn);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.b9) && (_VirtualDom_doc.title = title = doc.b9);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.en;
	var onUrlRequest = impl.a9;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		b3: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.dg === next.dg
							&& curr.cH === next.cH
							&& curr.dc.a === next.dc.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		d5: function(flags)
		{
			return A3(impl.d5, flags, _Browser_getUrl(), key);
		},
		e5: impl.e5,
		e2: impl.e2,
		eR: impl.eR
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { d1: 'hidden', dK: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { d1: 'mozHidden', dK: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { d1: 'msHidden', dK: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { d1: 'webkitHidden', dK: 'webkitvisibilitychange' }
		: { d1: 'hidden', dK: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		eD: _Browser_getScene(),
		bi: {
			cc: _Browser_window.pageXOffset,
			cd: _Browser_window.pageYOffset,
			cb: _Browser_doc.documentElement.clientWidth,
			bT: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		cb: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bT: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			eD: {
				cb: node.scrollWidth,
				bT: node.scrollHeight
			},
			bi: {
				cc: node.scrollLeft,
				cd: node.scrollTop,
				cb: node.clientWidth,
				bT: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			eD: _Browser_getScene(),
			bi: {
				cc: x,
				cd: y,
				cb: _Browser_doc.documentElement.clientWidth,
				bT: _Browser_doc.documentElement.clientHeight
			},
			cy: {
				cc: x + rect.left,
				cd: y + rect.top,
				cb: rect.width,
				bT: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.cB.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.cB.b, xhr)); });
		$elm$core$Maybe$isJust(request.e$) && _Http_track(router, xhr, request.e$.a);

		try {
			xhr.open(request.ef, request.ca, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.ca));
		}

		_Http_configureRequest(xhr, request);

		request.cn.a && xhr.setRequestHeader('Content-Type', request.cn.a);
		xhr.send(request.cn.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.d0; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.eW.a || 0;
	xhr.responseType = request.cB.d;
	xhr.withCredentials = request.dD;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		ca: xhr.responseURL,
		eN: xhr.status,
		eO: xhr.statusText,
		d0: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			eG: event.loaded,
			eK: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			eB: event.loaded,
			eK: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}



// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 * Copyright (c) 2018 Andrey Kuzmin
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// Vector2

var _MJS_v2 = F2(function(x, y) {
    return new Float64Array([x, y]);
});

var _MJS_v2getX = function(a) {
    return a[0];
};

var _MJS_v2getY = function(a) {
    return a[1];
};

var _MJS_v2setX = F2(function(x, a) {
    return new Float64Array([x, a[1]]);
});

var _MJS_v2setY = F2(function(y, a) {
    return new Float64Array([a[0], y]);
});

var _MJS_v2toRecord = function(a) {
    return { cc: a[0], cd: a[1] };
};

var _MJS_v2fromRecord = function(r) {
    return new Float64Array([r.cc, r.cd]);
};

var _MJS_v2add = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    return r;
});

var _MJS_v2sub = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    return r;
});

var _MJS_v2negate = function(a) {
    var r = new Float64Array(2);
    r[0] = -a[0];
    r[1] = -a[1];
    return r;
};

var _MJS_v2direction = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    var im = 1.0 / _MJS_v2lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    return r;
});

function _MJS_v2lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
var _MJS_v2length = _MJS_v2lengthLocal;

var _MJS_v2lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1];
};

var _MJS_v2distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
});

var _MJS_v2distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
});

var _MJS_v2normalize = function(a) {
    var r = new Float64Array(2);
    var im = 1.0 / _MJS_v2lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    return r;
};

var _MJS_v2scale = F2(function(k, a) {
    var r = new Float64Array(2);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    return r;
});

var _MJS_v2dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1];
});

// Vector3

var _MJS_v3temp1Local = new Float64Array(3);
var _MJS_v3temp2Local = new Float64Array(3);
var _MJS_v3temp3Local = new Float64Array(3);

var _MJS_v3 = F3(function(x, y, z) {
    return new Float64Array([x, y, z]);
});

var _MJS_v3getX = function(a) {
    return a[0];
};

var _MJS_v3getY = function(a) {
    return a[1];
};

var _MJS_v3getZ = function(a) {
    return a[2];
};

var _MJS_v3setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2]]);
});

var _MJS_v3setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2]]);
});

var _MJS_v3setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z]);
});

var _MJS_v3toRecord = function(a) {
    return { cc: a[0], cd: a[1], bJ: a[2] };
};

var _MJS_v3fromRecord = function(r) {
    return new Float64Array([r.cc, r.cd, r.bJ]);
};

var _MJS_v3add = F2(function(a, b) {
    var r = new Float64Array(3);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    return r;
});

function _MJS_v3subLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    return r;
}
var _MJS_v3sub = F2(_MJS_v3subLocal);

var _MJS_v3negate = function(a) {
    var r = new Float64Array(3);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    return r;
};

function _MJS_v3directionLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    return _MJS_v3normalizeLocal(_MJS_v3subLocal(a, b, r), r);
}
var _MJS_v3direction = F2(_MJS_v3directionLocal);

function _MJS_v3lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
var _MJS_v3length = _MJS_v3lengthLocal;

var _MJS_v3lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
};

var _MJS_v3distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
});

var _MJS_v3distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
});

function _MJS_v3normalizeLocal(a, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    var im = 1.0 / _MJS_v3lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    return r;
}
var _MJS_v3normalize = _MJS_v3normalizeLocal;

var _MJS_v3scale = F2(function(k, a) {
    return new Float64Array([a[0] * k, a[1] * k, a[2] * k]);
});

var _MJS_v3dotLocal = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
var _MJS_v3dot = F2(_MJS_v3dotLocal);

function _MJS_v3crossLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[1] * b[2] - a[2] * b[1];
    r[1] = a[2] * b[0] - a[0] * b[2];
    r[2] = a[0] * b[1] - a[1] * b[0];
    return r;
}
var _MJS_v3cross = F2(_MJS_v3crossLocal);

var _MJS_v3mul4x4 = F2(function(m, v) {
    var w;
    var tmp = _MJS_v3temp1Local;
    var r = new Float64Array(3);

    tmp[0] = m[3];
    tmp[1] = m[7];
    tmp[2] = m[11];
    w = _MJS_v3dotLocal(v, tmp) + m[15];
    tmp[0] = m[0];
    tmp[1] = m[4];
    tmp[2] = m[8];
    r[0] = (_MJS_v3dotLocal(v, tmp) + m[12]) / w;
    tmp[0] = m[1];
    tmp[1] = m[5];
    tmp[2] = m[9];
    r[1] = (_MJS_v3dotLocal(v, tmp) + m[13]) / w;
    tmp[0] = m[2];
    tmp[1] = m[6];
    tmp[2] = m[10];
    r[2] = (_MJS_v3dotLocal(v, tmp) + m[14]) / w;
    return r;
});

// Vector4

var _MJS_v4 = F4(function(x, y, z, w) {
    return new Float64Array([x, y, z, w]);
});

var _MJS_v4getX = function(a) {
    return a[0];
};

var _MJS_v4getY = function(a) {
    return a[1];
};

var _MJS_v4getZ = function(a) {
    return a[2];
};

var _MJS_v4getW = function(a) {
    return a[3];
};

var _MJS_v4setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2], a[3]]);
});

var _MJS_v4setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2], a[3]]);
});

var _MJS_v4setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z, a[3]]);
});

var _MJS_v4setW = F2(function(w, a) {
    return new Float64Array([a[0], a[1], a[2], w]);
});

var _MJS_v4toRecord = function(a) {
    return { cc: a[0], cd: a[1], bJ: a[2], dA: a[3] };
};

var _MJS_v4fromRecord = function(r) {
    return new Float64Array([r.cc, r.cd, r.bJ, r.dA]);
};

var _MJS_v4add = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    r[3] = a[3] + b[3];
    return r;
});

var _MJS_v4sub = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    return r;
});

var _MJS_v4negate = function(a) {
    var r = new Float64Array(4);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    r[3] = -a[3];
    return r;
};

var _MJS_v4direction = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    var im = 1.0 / _MJS_v4lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    r[2] = r[2] * im;
    r[3] = r[3] * im;
    return r;
});

function _MJS_v4lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
var _MJS_v4length = _MJS_v4lengthLocal;

var _MJS_v4lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
};

var _MJS_v4distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
});

var _MJS_v4distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return dx * dx + dy * dy + dz * dz + dw * dw;
});

var _MJS_v4normalize = function(a) {
    var r = new Float64Array(4);
    var im = 1.0 / _MJS_v4lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    r[3] = a[3] * im;
    return r;
};

var _MJS_v4scale = F2(function(k, a) {
    var r = new Float64Array(4);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    r[2] = a[2] * k;
    r[3] = a[3] * k;
    return r;
});

var _MJS_v4dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
});

// Matrix4

var _MJS_m4x4temp1Local = new Float64Array(16);
var _MJS_m4x4temp2Local = new Float64Array(16);

var _MJS_m4x4identity = new Float64Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
]);

var _MJS_m4x4fromRecord = function(r) {
    var m = new Float64Array(16);
    m[0] = r.cP;
    m[1] = r.cT;
    m[2] = r.cX;
    m[3] = r.c$;
    m[4] = r.cQ;
    m[5] = r.cU;
    m[6] = r.cY;
    m[7] = r.c0;
    m[8] = r.cR;
    m[9] = r.cV;
    m[10] = r.cZ;
    m[11] = r.c1;
    m[12] = r.cS;
    m[13] = r.cW;
    m[14] = r.c_;
    m[15] = r.c2;
    return m;
};

var _MJS_m4x4toRecord = function(m) {
    return {
        cP: m[0], cT: m[1], cX: m[2], c$: m[3],
        cQ: m[4], cU: m[5], cY: m[6], c0: m[7],
        cR: m[8], cV: m[9], cZ: m[10], c1: m[11],
        cS: m[12], cW: m[13], c_: m[14], c2: m[15]
    };
};

var _MJS_m4x4inverse = function(m) {
    var r = new Float64Array(16);

    r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
        m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
        m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
        m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
        m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
        m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
        m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
        m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
        m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
        m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
        m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
        m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
        m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

    if (det === 0) {
        return $elm$core$Maybe$Nothing;
    }

    det = 1.0 / det;

    for (var i = 0; i < 16; i = i + 1) {
        r[i] = r[i] * det;
    }

    return $elm$core$Maybe$Just(r);
};

var _MJS_m4x4inverseOrthonormal = function(m) {
    var r = _MJS_m4x4transposeLocal(m);
    var t = [m[12], m[13], m[14]];
    r[3] = r[7] = r[11] = 0;
    r[12] = -_MJS_v3dotLocal([r[0], r[4], r[8]], t);
    r[13] = -_MJS_v3dotLocal([r[1], r[5], r[9]], t);
    r[14] = -_MJS_v3dotLocal([r[2], r[6], r[10]], t);
    return r;
};

function _MJS_m4x4makeFrustumLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 * znear / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 * znear / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = (right + left) / (right - left);
    r[9] = (top + bottom) / (top - bottom);
    r[10] = -(zfar + znear) / (zfar - znear);
    r[11] = -1;
    r[12] = 0;
    r[13] = 0;
    r[14] = -2 * zfar * znear / (zfar - znear);
    r[15] = 0;

    return r;
}
var _MJS_m4x4makeFrustum = F6(_MJS_m4x4makeFrustumLocal);

var _MJS_m4x4makePerspective = F4(function(fovy, aspect, znear, zfar) {
    var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;

    return _MJS_m4x4makeFrustumLocal(xmin, xmax, ymin, ymax, znear, zfar);
});

function _MJS_m4x4makeOrthoLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -2 / (zfar - znear);
    r[11] = 0;
    r[12] = -(right + left) / (right - left);
    r[13] = -(top + bottom) / (top - bottom);
    r[14] = -(zfar + znear) / (zfar - znear);
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeOrtho = F6(_MJS_m4x4makeOrthoLocal);

var _MJS_m4x4makeOrtho2D = F4(function(left, right, bottom, top) {
    return _MJS_m4x4makeOrthoLocal(left, right, bottom, top, -1, 1);
});

function _MJS_m4x4mulLocal(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a41 = a[3];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a42 = a[7];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a43 = a[11];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];
    var a44 = a[15];
    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b41 = b[3];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b42 = b[7];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b43 = b[11];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];
    var b44 = b[15];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return r;
}
var _MJS_m4x4mul = F2(_MJS_m4x4mulLocal);

var _MJS_m4x4mulAffine = F2(function(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];

    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31;
    r[3] = 0;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32;
    r[7] = 0;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33;
    r[11] = 0;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
    r[15] = 1;

    return r;
});

var _MJS_m4x4makeRotate = F2(function(angle, axis) {
    var r = new Float64Array(16);
    axis = _MJS_v3normalizeLocal(axis, _MJS_v3temp1Local);
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);

    r[0] = x * x * c1 + c;
    r[1] = y * x * c1 + z * s;
    r[2] = z * x * c1 - y * s;
    r[3] = 0;
    r[4] = x * y * c1 - z * s;
    r[5] = y * y * c1 + c;
    r[6] = y * z * c1 + x * s;
    r[7] = 0;
    r[8] = x * z * c1 + y * s;
    r[9] = y * z * c1 - x * s;
    r[10] = z * z * c1 + c;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});

var _MJS_m4x4rotate = F3(function(angle, axis, m) {
    var r = new Float64Array(16);
    var im = 1.0 / _MJS_v3lengthLocal(axis);
    var x = axis[0] * im;
    var y = axis[1] * im;
    var z = axis[2] * im;
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);
    var xs = x * s;
    var ys = y * s;
    var zs = z * s;
    var xyc1 = x * y * c1;
    var xzc1 = x * z * c1;
    var yzc1 = y * z * c1;
    var t11 = x * x * c1 + c;
    var t21 = xyc1 + zs;
    var t31 = xzc1 - ys;
    var t12 = xyc1 - zs;
    var t22 = y * y * c1 + c;
    var t32 = yzc1 + xs;
    var t13 = xzc1 + ys;
    var t23 = yzc1 - xs;
    var t33 = z * z * c1 + c;
    var m11 = m[0], m21 = m[1], m31 = m[2], m41 = m[3];
    var m12 = m[4], m22 = m[5], m32 = m[6], m42 = m[7];
    var m13 = m[8], m23 = m[9], m33 = m[10], m43 = m[11];
    var m14 = m[12], m24 = m[13], m34 = m[14], m44 = m[15];

    r[0] = m11 * t11 + m12 * t21 + m13 * t31;
    r[1] = m21 * t11 + m22 * t21 + m23 * t31;
    r[2] = m31 * t11 + m32 * t21 + m33 * t31;
    r[3] = m41 * t11 + m42 * t21 + m43 * t31;
    r[4] = m11 * t12 + m12 * t22 + m13 * t32;
    r[5] = m21 * t12 + m22 * t22 + m23 * t32;
    r[6] = m31 * t12 + m32 * t22 + m33 * t32;
    r[7] = m41 * t12 + m42 * t22 + m43 * t32;
    r[8] = m11 * t13 + m12 * t23 + m13 * t33;
    r[9] = m21 * t13 + m22 * t23 + m23 * t33;
    r[10] = m31 * t13 + m32 * t23 + m33 * t33;
    r[11] = m41 * t13 + m42 * t23 + m43 * t33;
    r[12] = m14,
    r[13] = m24;
    r[14] = m34;
    r[15] = m44;

    return r;
});

function _MJS_m4x4makeScale3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = x;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = y;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = z;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeScale3 = F3(_MJS_m4x4makeScale3Local);

var _MJS_m4x4makeScale = function(v) {
    return _MJS_m4x4makeScale3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4scale3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

var _MJS_m4x4scale = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

function _MJS_m4x4makeTranslate3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = 1;
    r[11] = 0;
    r[12] = x;
    r[13] = y;
    r[14] = z;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeTranslate3 = F3(_MJS_m4x4makeTranslate3Local);

var _MJS_m4x4makeTranslate = function(v) {
    return _MJS_m4x4makeTranslate3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4translate3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4translate = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4makeLookAt = F3(function(eye, center, up) {
    var z = _MJS_v3directionLocal(eye, center, _MJS_v3temp1Local);
    var x = _MJS_v3normalizeLocal(_MJS_v3crossLocal(up, z, _MJS_v3temp2Local), _MJS_v3temp2Local);
    var y = _MJS_v3normalizeLocal(_MJS_v3crossLocal(z, x, _MJS_v3temp3Local), _MJS_v3temp3Local);
    var tm1 = _MJS_m4x4temp1Local;
    var tm2 = _MJS_m4x4temp2Local;

    tm1[0] = x[0];
    tm1[1] = y[0];
    tm1[2] = z[0];
    tm1[3] = 0;
    tm1[4] = x[1];
    tm1[5] = y[1];
    tm1[6] = z[1];
    tm1[7] = 0;
    tm1[8] = x[2];
    tm1[9] = y[2];
    tm1[10] = z[2];
    tm1[11] = 0;
    tm1[12] = 0;
    tm1[13] = 0;
    tm1[14] = 0;
    tm1[15] = 1;

    tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
    tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
    tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
    tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

    return _MJS_m4x4mulLocal(tm1, tm2);
});


function _MJS_m4x4transposeLocal(m) {
    var r = new Float64Array(16);

    r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
    r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
    r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
    r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

    return r;
}
var _MJS_m4x4transpose = _MJS_m4x4transposeLocal;

var _MJS_m4x4makeBasis = F3(function(vx, vy, vz) {
    var r = new Float64Array(16);

    r[0] = vx[0];
    r[1] = vx[1];
    r[2] = vx[2];
    r[3] = 0;
    r[4] = vy[0];
    r[5] = vy[1];
    r[6] = vy[2];
    r[7] = 0;
    r[8] = vz[0];
    r[9] = vz[1];
    r[10] = vz[2];
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $author$project$Main$ExternalLinkClicked = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$General = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$InternalUrlClicked = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $author$project$RouteUrl$RouterMsgOnUrlChange = function (a) {
	return {$: 0, a: a};
};
var $author$project$RouteUrl$UserMsg = function (a) {
	return {$: 2, a: a};
};
var $author$project$RouteUrl$WrappedModel = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$append = _Utils_append;
var $author$project$RouteUrl$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $author$project$RouteUrl$changeToString = function (change) {
	switch (change.$) {
		case 0:
			var data = change.b;
			return A3(
				$author$project$RouteUrl$addPrefixed,
				'#',
				data.cF,
				A3($author$project$RouteUrl$addPrefixed, '?', data.aS, data.ba));
		case 1:
			var data = change.b;
			return A3($author$project$RouteUrl$addPrefixed, '#', data.cF, '?' + data.aS);
		default:
			var fragment = change.b;
			return '#' + fragment;
	}
};
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.s) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.u),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.u);
		} else {
			var treeLen = builder.s * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.v) : builder.v;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.s);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.u) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.u);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{v: nodeList, s: (len / $elm$core$Array$branchFactor) | 0, u: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $author$project$RouteUrl$docMap = F2(
	function (fn, doc) {
		return {
			cn: A2(
				$elm$core$List$map,
				$elm$html$Html$map(fn),
				doc.cn),
			b9: doc.b9
		};
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $ccapndave$elm_update_extra$Update$Extra$andThen = F3(
	function (update, msg, _v0) {
		var model = _v0.a;
		var cmd = _v0.b;
		var _v1 = A2(update, msg, model);
		var model_ = _v1.a;
		var cmd_ = _v1.b;
		return _Utils_Tuple2(
			model_,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, cmd_])));
	});
var $ccapndave$elm_update_extra$Update$Extra$sequence = F3(
	function (update, msgs, init) {
		var foldUpdate = $ccapndave$elm_update_extra$Update$Extra$andThen(update);
		return A3($elm$core$List$foldl, foldUpdate, init, msgs);
	});
var $author$project$RouteUrl$init = F5(
	function (appInit, app, flags, location, key) {
		var routerModel = {af: 0, o: key, ao: location};
		var _v0 = A3(
			$ccapndave$elm_update_extra$Update$Extra$sequence,
			app.e2,
			app.ec(location),
			A2(appInit, flags, key));
		var userModel = _v0.a;
		var command = _v0.b;
		return _Utils_Tuple2(
			A2($author$project$RouteUrl$WrappedModel, userModel, routerModel),
			A2($elm$core$Platform$Cmd$map, $author$project$RouteUrl$UserMsg, command));
	});
var $author$project$RouteUrl$RouterMsgOnUrlRequestInternal = function (a) {
	return {$: 1, a: a};
};
var $author$project$RouteUrl$onUrlRequest = F2(
	function (app, req) {
		if (!req.$) {
			var location = req.a;
			return $author$project$RouteUrl$RouterMsgOnUrlRequestInternal(location);
		} else {
			var location = req.a;
			return $author$project$RouteUrl$UserMsg(
				app.em(location));
		}
	});
var $elm$core$Platform$Sub$map = _Platform_map;
var $author$project$RouteUrl$subscriptions = F2(
	function (app, _v0) {
		var model = _v0.a;
		return A2(
			$elm$core$Platform$Sub$map,
			$author$project$RouteUrl$UserMsg,
			app.eR(model));
	});
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.dg;
		if (!_v0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.cF,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.aS,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.dc,
					_Utils_ap(http, url.cH)),
				url.ba)));
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $author$project$RouteUrl$apply = F2(
	function (url, change) {
		switch (change.$) {
			case 0:
				var c = change.b;
				var absolutePath = function () {
					var _v1 = A2($elm$core$String$startsWith, '/', c.ba);
					if (_v1) {
						return c.ba;
					} else {
						return '/' + c.ba;
					}
				}();
				return _Utils_update(
					url,
					{cF: c.cF, ba: absolutePath, aS: c.aS});
			case 1:
				var c = change.b;
				return _Utils_update(
					url,
					{
						cF: c.cF,
						aS: $elm$core$Maybe$Just(c.aS)
					});
			default:
				var c = change.b;
				return _Utils_update(
					url,
					{
						cF: $elm$core$Maybe$Just(c)
					});
		}
	});
var $author$project$RouteUrl$checkDistinctUrl = F2(
	function (old, _new) {
		var newUrl = A2($author$project$RouteUrl$apply, old, _new);
		var _v0 = _Utils_eq(old, newUrl);
		if (_v0) {
			return $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Just(_new);
		}
	});
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {cF: fragment, cH: host, ba: path, dc: port_, dg: protocol, aS: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $author$project$RouteUrl$getHistoryEntry = function (urlChange) {
	switch (urlChange.$) {
		case 0:
			var historyEntry = urlChange.a;
			return historyEntry;
		case 1:
			var historyEntry = urlChange.a;
			return historyEntry;
		default:
			var historyEntry = urlChange.a;
			return historyEntry;
	}
};
var $elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
var $author$project$RouteUrl$urlChange2Cmd = F3(
	function (key, oldUrl, change) {
		return function () {
			var _v0 = $author$project$RouteUrl$getHistoryEntry(change);
			if (!_v0) {
				return $elm$browser$Browser$Navigation$pushUrl(key);
			} else {
				return $elm$browser$Browser$Navigation$replaceUrl(key);
			}
		}()(
			$elm$url$Url$toString(
				A2($author$project$RouteUrl$apply, oldUrl, change)));
	});
var $author$project$RouteUrl$update = F3(
	function (app, msg, _v0) {
		var user = _v0.a;
		var router = _v0.b;
		switch (msg.$) {
			case 1:
				var requestedUrl = msg.a;
				return _Utils_Tuple2(
					A2($author$project$RouteUrl$WrappedModel, user, router),
					A2(
						$elm$browser$Browser$Navigation$pushUrl,
						router.o,
						$elm$url$Url$toString(requestedUrl)));
			case 0:
				var location = msg.a;
				var newRouterModel = {
					af: (router.af > 0) ? (router.af - 1) : 0,
					o: router.o,
					ao: location
				};
				if (router.af > 0) {
					return _Utils_Tuple2(
						A2($author$project$RouteUrl$WrappedModel, user, newRouterModel),
						$elm$core$Platform$Cmd$none);
				} else {
					var _v2 = A3(
						$ccapndave$elm_update_extra$Update$Extra$sequence,
						app.e2,
						app.ec(location),
						_Utils_Tuple2(user, $elm$core$Platform$Cmd$none));
					var newUserModel = _v2.a;
					var commands = _v2.b;
					return _Utils_Tuple2(
						A2($author$project$RouteUrl$WrappedModel, newUserModel, newRouterModel),
						A2($elm$core$Platform$Cmd$map, $author$project$RouteUrl$UserMsg, commands));
				}
			default:
				var userMsg = msg.a;
				var _v3 = A2(app.e2, userMsg, user);
				var newUserModel = _v3.a;
				var userCommand = _v3.b;
				var maybeUrlChange = A2(
					$elm$core$Maybe$andThen,
					$author$project$RouteUrl$checkDistinctUrl(router.ao),
					A2(app.dT, user, newUserModel));
				if (!maybeUrlChange.$) {
					var urlChange = maybeUrlChange.a;
					return _Utils_Tuple2(
						A2(
							$author$project$RouteUrl$WrappedModel,
							newUserModel,
							{
								af: router.af + 1,
								o: router.o,
								ao: A2($author$project$RouteUrl$apply, router.ao, urlChange)
							}),
						A2(
							$elm$core$Platform$Cmd$map,
							$author$project$RouteUrl$UserMsg,
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A3($author$project$RouteUrl$urlChange2Cmd, router.o, router.ao, urlChange),
										userCommand
									]))));
				} else {
					return _Utils_Tuple2(
						A2($author$project$RouteUrl$WrappedModel, newUserModel, router),
						A2($elm$core$Platform$Cmd$map, $author$project$RouteUrl$UserMsg, userCommand));
				}
		}
	});
var $author$project$RouteUrl$anchorManagedApp = function (app) {
	var appCommon = {dT: app.dT, d5: app.d5, ec: app.ec, em: app.em, eR: app.eR, e2: app.e2};
	var aForUpdateDelta = F2(
		function (_v3, msg) {
			var oldUserModel = _v3.a;
			var routerModel = _v3.b;
			var _v1 = A2(app.e2, msg, oldUserModel);
			var newModel = _v1.a;
			var urlChange = A2(app.dT, oldUserModel, newModel);
			if (urlChange.$ === 1) {
				return A2(
					app.ee,
					$elm$url$Url$toString(routerModel.ao),
					$elm$core$Maybe$Just(msg));
			} else {
				var change = urlChange.a;
				return A2(
					app.ee,
					$author$project$RouteUrl$changeToString(change),
					$elm$core$Maybe$Nothing);
			}
		});
	var viewWithA = function (_v0) {
		var userModel = _v0.a;
		var routerModel = _v0.b;
		return A2(
			$author$project$RouteUrl$docMap,
			$author$project$RouteUrl$UserMsg,
			A2(
				app.e5,
				userModel,
				aForUpdateDelta(
					A2($author$project$RouteUrl$WrappedModel, userModel, routerModel))));
	};
	return {
		d5: A2($author$project$RouteUrl$init, app.d5, appCommon),
		bs: $author$project$RouteUrl$RouterMsgOnUrlChange,
		a9: $author$project$RouteUrl$onUrlRequest(appCommon),
		eR: $author$project$RouteUrl$subscriptions(appCommon),
		e2: $author$project$RouteUrl$update(appCommon),
		e5: viewWithA
	};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Browser$application = _Browser_application;
var $author$project$RouteUrl$runNavigationApp = function (app) {
	return $elm$browser$Browser$application(
		{d5: app.d5, en: app.bs, a9: app.a9, eR: app.eR, e2: app.e2, e5: app.e5});
};
var $author$project$RouteUrl$anchorManagedProgram = A2($elm$core$Basics$composeL, $author$project$RouteUrl$runNavigationApp, $author$project$RouteUrl$anchorManagedApp);
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$AwaitingBaseUrl = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$init = F2(
	function (flags, key) {
		return _Utils_Tuple2(
			$author$project$Main$AwaitingBaseUrl(
				{A: $elm$core$Maybe$Nothing, i: flags, o: key}),
			$elm$core$Platform$Cmd$none);
	});
var $author$project$RouteUrl$ModifyEntry = 1;
var $author$project$RouteUrl$NewEntry = 0;
var $author$project$RouteUrl$NewFragment = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$AlbumPage$eqIgnoringVpInfo = F2(
	function (aPage1, aPage2) {
		if (!aPage1.$) {
			var th1 = aPage1.a;
			if (!aPage2.$) {
				var th2 = aPage2.a;
				return _Utils_eq(
					_Utils_update(
						th2,
						{n: th1.n}),
					th1);
			} else {
				return false;
			}
		} else {
			var fi1 = aPage1.a;
			if (!aPage2.$) {
				return false;
			} else {
				var fi2 = aPage2.a;
				return _Utils_eq(
					_Utils_update(
						fi2,
						{n: fi1.n}),
					fi1);
			}
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $author$project$Utils$AlbumUtils$hashFromAlbumPath = F2(
	function (titles, parents) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$intersperse,
				'/',
				A2(
					$elm$core$List$map,
					$elm$url$Url$percentEncode,
					A2(
						$elm$core$List$append,
						A2(
							$elm$core$List$map,
							function (p) {
								return p.bZ;
							},
							A2(
								$elm$core$List$drop,
								1,
								$elm$core$List$reverse(parents))),
						titles))));
	});
var $author$project$AlbumPage$hashForAlbum = F2(
	function (albumPage, parents) {
		var titles = function () {
			if (!albumPage.$) {
				var th = albumPage.a;
				return _List_fromArray(
					[th.g.b9]);
			} else {
				var fi = albumPage.a;
				return _List_fromArray(
					[fi.g.b9, fi.g.bU.bK]);
			}
		}();
		return A2($author$project$Utils$AlbumUtils$hashFromAlbumPath, titles, parents);
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$AlbumListPage$hashForList = function (_v0) {
	var alp = _v0;
	return $elm$core$List$isEmpty(alp.bB) ? A2(
		$author$project$Utils$AlbumUtils$hashFromAlbumPath,
		_List_fromArray(
			['']),
		_List_Nil) : A2(
		$author$project$Utils$AlbumUtils$hashFromAlbumPath,
		_List_fromArray(
			[alp.a_.bZ]),
		A2($elm$core$List$map, $elm$core$Tuple$first, alp.bB));
};
var $author$project$Utils$DebugSupport$log = F2(
	function (str, val) {
		return val;
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Main$locFor = F2(
	function (oldModel, newModel) {
		var entry = function () {
			switch (oldModel.$) {
				case 5:
					var ll = oldModel.a;
					if (newModel.$ === 5) {
						var ll2 = newModel.a;
						var _v5 = _Utils_eq(ll.y, ll2.y);
						if (_v5) {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedList same', 1);
						} else {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedList dift', 0);
						}
					} else {
						return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedList -> something else', 0);
					}
				case 6:
					var la = oldModel.a;
					if (newModel.$ === 6) {
						var la2 = newModel.a;
						var _v7 = A2($author$project$AlbumPage$eqIgnoringVpInfo, la.j, la2.j) && _Utils_eq(la.bB, la2.bB);
						if (_v7) {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedAlbum same', 1);
						} else {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedAlbum dift', 0);
						}
					} else {
						return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedAlbum -> something else', 0);
					}
				default:
					return A2($author$project$Utils$DebugSupport$log, 'locFor something else -> *', 0);
			}
		}();
		var checkNavState = F2(
			function (state, nav) {
				var _v2 = A2($author$project$Utils$DebugSupport$log, 'checkNavState', state);
				if (!_v2) {
					return $elm$core$Maybe$Nothing;
				} else {
					return nav;
				}
			});
		var rawFragment = A2(
			$author$project$Utils$DebugSupport$log,
			'rawFragment',
			function () {
				switch (newModel.$) {
					case 6:
						var la = newModel.a;
						return A2(
							checkNavState,
							la.Q,
							$elm$core$Maybe$Just(
								A2(
									$author$project$AlbumPage$hashForAlbum,
									la.j,
									A2($elm$core$List$map, $elm$core$Tuple$first, la.bB))));
					case 5:
						var ll = newModel.a;
						return A2(
							checkNavState,
							ll.Q,
							$elm$core$Maybe$Just(
								$author$project$AlbumListPage$hashForList(ll.y)));
					default:
						return $elm$core$Maybe$Nothing;
				}
			}());
		return A2(
			$author$project$Utils$DebugSupport$log,
			'logFor',
			A2(
				$elm$core$Maybe$map,
				$author$project$RouteUrl$NewFragment(entry),
				A2(
					$elm$core$Maybe$andThen,
					function (rf) {
						if (rf === '') {
							return $elm$core$Maybe$Nothing;
						} else {
							return $elm$core$Maybe$Just(rf);
						}
					},
					rawFragment)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$Node;
var $rtfeldman$elm_css$Html$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$node;
var $rtfeldman$elm_css$Html$Styled$a = $rtfeldman$elm_css$Html$Styled$node('a');
var $rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$property, key, value),
			_List_Nil,
			'');
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$href = function (url) {
	return A2($rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, 'href', url);
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $rtfeldman$elm_css$VirtualDom$Styled$on = F2(
	function (eventName, handler) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$on, eventName, handler),
			_List_Nil,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Events$on = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $rtfeldman$elm_css$Html$Styled$Events$onClick = function (msg) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Main$makeAnchor = F3(
	function (url, onClickMsg, attrs) {
		return $rtfeldman$elm_css$Html$Styled$a(
			A2(
				$elm$core$List$cons,
				$rtfeldman$elm_css$Html$Styled$Attributes$href(url),
				function () {
					if (onClickMsg.$ === 1) {
						return attrs;
					} else {
						var m = onClickMsg.a;
						return A2(
							$elm$core$List$cons,
							$rtfeldman$elm_css$Html$Styled$Events$onClick(m),
							attrs);
					}
				}()));
	});
var $author$project$Main$Album = function (a) {
	return {$: 2, a: a};
};
var $author$project$AlbumListPage$AlbumListPage = $elm$core$Basics$identity;
var $author$project$Main$Bootstrap = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$LoadAlbumProgress = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$Meta = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$NoBootstrap = {$: 2};
var $author$project$Main$PageMsg = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$ViewList = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Utils$AlbumUtils$albumJson = 'album.json';
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Main$Resize = function (a) {
	return {$: 0, a: a};
};
var $author$project$Utils$ViewportUtils$viewportWithNewSize = F3(
	function (oldViewport, newWidth, newHeight) {
		var ov = oldViewport.bi;
		var newViewport = _Utils_update(
			ov,
			{bT: newHeight, cb: newWidth});
		return _Utils_update(
			oldViewport,
			{bi: newViewport});
	});
var $author$project$Main$newSize = F3(
	function (v, x, y) {
		return $author$project$Main$General(
			$author$project$Main$Resize(
				A3($author$project$Utils$ViewportUtils$viewportWithNewSize, v, x, y)));
	});
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$Events$Document = 0;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {db: pids, du: subs};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {cA: event, o: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.db,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.o;
		var event = _v0.cA;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.du);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, 0, 'keydown');
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Utils$KeyboardUtils$onEscape = F2(
	function (action, noop) {
		return $elm$browser$Browser$Events$onKeyDown(
			A2(
				$elm$json$Json$Decode$map,
				function (k) {
					if (k === 'Escape') {
						return action;
					} else {
						return noop;
					}
				},
				A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string)));
	});
var $elm$browser$Browser$Events$Window = 1;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		1,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$AlbumPage$pageSize = function (albumPage) {
	if (!albumPage.$) {
		var th = albumPage.a;
		return th.n;
	} else {
		var fi = albumPage.a;
		return fi.n;
	}
};
var $author$project$AlbumPage$BackToThumbs = {$: 7};
var $author$project$AlbumPage$FullMsg = function (a) {
	return {$: 8, a: a};
};
var $author$project$AlbumPage$Next = {$: 6};
var $author$project$AlbumPage$NoUpdate = {$: 13};
var $author$project$AlbumPage$Prev = {$: 5};
var $author$project$ProgressiveImage$AnimateMain = function (a) {
	return {$: 5, a: a};
};
var $author$project$ProgressiveImage$AnimatePlaceholder = function (a) {
	return {$: 4, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Tick = $elm$core$Basics$identity;
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_style_animation$Animation$isRunning = function (_v0) {
	var model = _v0;
	return model.bG;
};
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {b0: oldTime, dk: request, du: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.dk;
		var oldTime = _v0.b0;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 1) {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.du;
		var oldTime = _v0.b0;
		var send = function (sub) {
			if (!sub.$) {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (!sub.$) {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $mdgriffith$elm_style_animation$Animation$subscription = F2(
	function (msg, states) {
		return A2($elm$core$List$any, $mdgriffith$elm_style_animation$Animation$isRunning, states) ? A2(
			$elm$core$Platform$Sub$map,
			msg,
			$elm$browser$Browser$Events$onAnimationFrame($elm$core$Basics$identity)) : $elm$core$Platform$Sub$none;
	});
var $author$project$Utils$Loading$GotProgress = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {dj: reqs, du: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.e$;
							if (_v4.$ === 1) {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.dj));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.du)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					dD: r.dD,
					cn: r.cn,
					cB: A2(_Http_mapExpect, func, r.cB),
					d0: r.d0,
					ef: r.ef,
					eW: r.eW,
					e$: r.e$,
					ca: r.ca
				});
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$track = F2(
	function (tracker, toMsg) {
		return $elm$http$Http$subscription(
			A2($elm$http$Http$MySub, tracker, toMsg));
	});
var $author$project$Utils$Loading$subscriptions = function (_v0) {
	var lm = _v0.a;
	var wrap = _v0.b;
	var trackIt = A2(
		$elm$http$Http$track,
		lm.e$,
		A2($elm$core$Basics$composeL, wrap, $author$project$Utils$Loading$GotProgress));
	var ignoreIt = $elm$core$Platform$Sub$none;
	var subForState = function (state) {
		subForState:
		while (true) {
			switch (state.$) {
				case 0:
					return ignoreIt;
				case 1:
					return trackIt;
				case 2:
					return trackIt;
				case 3:
					return ignoreIt;
				case 5:
					return ignoreIt;
				default:
					var s = state.a;
					var $temp$state = s;
					state = $temp$state;
					continue subForState;
			}
		}
	};
	return subForState(lm.p);
};
var $author$project$ProgressiveImage$subscriptions = function (_v0) {
	var piModel = _v0;
	var loadingSubs = function () {
		var _v1 = piModel.t;
		switch (_v1.$) {
			case 2:
				var loadingState = _v1.b;
				return $author$project$Utils$Loading$subscriptions(loadingState);
			case 0:
				return $elm$core$Platform$Sub$none;
			case 1:
				return $elm$core$Platform$Sub$none;
			case 3:
				return $elm$core$Platform$Sub$none;
			default:
				return $elm$core$Platform$Sub$none;
		}
	}();
	var animSubs = $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_style_animation$Animation$subscription,
				$author$project$ProgressiveImage$AnimatePlaceholder,
				_List_fromArray(
					[piModel.f.x])),
				A2(
				$mdgriffith$elm_style_animation$Animation$subscription,
				$author$project$ProgressiveImage$AnimateMain,
				_List_fromArray(
					[piModel.f._]))
			]));
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[animSubs, loadingSubs]));
};
var $author$project$Utils$Loading$LoadingModel = $elm$core$Basics$identity;
var $author$project$Utils$Loading$ManyMsg = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Utils$Loading$OneModel = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $author$project$Utils$Loading$subscriptionsMany = function (_v0) {
	var mm = _v0;
	var subForOneModel = function (_v2) {
		var oneUrlStr = _v2.a;
		var m = _v2.b;
		var _v1 = $elm$url$Url$fromString(oneUrlStr);
		if (_v1.$ === 1) {
			return _List_Nil;
		} else {
			var oneUrl = _v1.a;
			return _List_fromArray(
				[
					$author$project$Utils$Loading$subscriptions(
					A2(
						$author$project$Utils$Loading$OneModel,
						m,
						A2(
							$elm$core$Basics$composeR,
							$author$project$Utils$Loading$ManyMsg(oneUrl),
							mm.aB)))
				]);
		}
	};
	return $elm$core$Platform$Sub$batch(
		A2(
			$elm$core$List$concatMap,
			subForOneModel,
			$elm$core$Dict$toList(mm.z)));
};
var $author$project$AlbumPage$subscriptions = F3(
	function (albumPage, wrapper, showParent) {
		if (!albumPage.$) {
			var t = albumPage.a;
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A2(
						$author$project$Utils$KeyboardUtils$onEscape,
						showParent,
						wrapper($author$project$AlbumPage$NoUpdate)),
						A2(
						$elm$core$Platform$Sub$map,
						wrapper,
						$author$project$Utils$Loading$subscriptionsMany(t.l))
					]));
		} else {
			var fi = albumPage.a;
			return A2(
				$elm$core$Platform$Sub$map,
				wrapper,
				$elm$core$Platform$Sub$batch(
					_List_fromArray(
						[
							A2(
							$elm$core$Platform$Sub$map,
							$author$project$AlbumPage$FullMsg,
							$author$project$ProgressiveImage$subscriptions(fi.ab)),
							$author$project$Utils$Loading$subscriptionsMany(fi.l),
							$elm$browser$Browser$Events$onKeyDown(
							A2(
								$elm$json$Json$Decode$map,
								function (k) {
									switch (k) {
										case 'ArrowRight':
											return $author$project$AlbumPage$Next;
										case 'ArrowLeft':
											return $author$project$AlbumPage$Prev;
										case 'Escape':
											return $author$project$AlbumPage$BackToThumbs;
										default:
											return $author$project$AlbumPage$NoUpdate;
									}
								},
								A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string)))
						])));
		}
	});
var $author$project$Main$subscriptions = function (model) {
	switch (model.$) {
		case 6:
			var la = model.a;
			var showParent = function () {
				var _v1 = la.bB;
				if (!_v1.b) {
					return $author$project$Main$Meta($author$project$Main$NoBootstrap);
				} else {
					var _v2 = _v1.a;
					var parent = _v2.a;
					var scroll = _v2.b;
					var grandParents = _v1.b;
					return $author$project$Main$Album(
						A2(
							$author$project$Main$ViewList,
							{
								a_: parent,
								dI: $author$project$AlbumPage$pageSize(la.j).dI,
								bB: grandParents
							},
							scroll));
				}
			}();
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A3(
						$author$project$AlbumPage$subscriptions,
						la.j,
						A2($elm$core$Basics$composeL, $author$project$Main$Album, $author$project$Main$PageMsg),
						showParent),
						$elm$browser$Browser$Events$onResize(
						$author$project$Main$newSize(
							$author$project$AlbumPage$pageSize(la.j).dI))
					]));
		case 5:
			var ll = model.a;
			var _v3 = ll.y;
			var alp = _v3;
			var _v4 = alp.bB;
			if (!_v4.b) {
				return $elm$browser$Browser$Events$onResize(
					$author$project$Main$newSize(alp.dI));
			} else {
				var _v5 = _v4.a;
				var parent = _v5.a;
				var scroll = _v5.b;
				var grandParents = _v4.b;
				var upParent = A2(
					$author$project$Utils$KeyboardUtils$onEscape,
					$author$project$Main$Album(
						A2(
							$author$project$Main$ViewList,
							_Utils_update(
								alp,
								{a_: parent, bB: grandParents}),
							scroll)),
					$author$project$Main$Meta($author$project$Main$NoBootstrap));
				return $elm$core$Platform$Sub$batch(
					_List_fromArray(
						[
							upParent,
							$elm$browser$Browser$Events$onResize(
							$author$project$Main$newSize(alp.dI))
						]));
			}
		case 2:
			var lh = model.a;
			return $elm$browser$Browser$Events$onResize(
				$author$project$Main$newSize(lh.dI));
		case 3:
			var ld = model.a;
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$elm$browser$Browser$Events$onResize(
						$author$project$Main$newSize(ld.dI)),
						A2(
						$elm$http$Http$track,
						$author$project$Utils$AlbumUtils$albumJson,
						A2($elm$core$Basics$composeL, $author$project$Main$Bootstrap, $author$project$Main$LoadAlbumProgress))
					]));
		case 4:
			return $elm$core$Platform$Sub$none;
		case 0:
			return $elm$core$Platform$Sub$none;
		default:
			return $elm$core$Platform$Sub$none;
	}
};
var $author$project$Main$Sequence = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Main$SequenceCmd = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Utils$DebugSupport$debugString = function (val) {
	return 'Debug.toString not supported in --optimize mode';
};
var $author$project$Utils$ResultUtils$toCmd = function (m) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(m));
};
var $author$project$Main$LoadedAlbum = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$LoadedList = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$NavInactive = 1;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			A2(
				$elm$core$Task$onError,
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
					$elm$core$Result$Err),
				A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Ok),
					task)));
	});
var $author$project$Main$baseUrlOf = function (model) {
	switch (model.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var sz = model.a;
			return $elm$core$Maybe$Just(sz.B);
		case 2:
			var lhl = model.a;
			return $elm$core$Maybe$Just(lhl.B);
		case 3:
			var l = model.a;
			return $elm$core$Maybe$Just(l.B);
		case 4:
			return $elm$core$Maybe$Nothing;
		case 5:
			var ll = model.a;
			return $elm$core$Maybe$Just(ll.B);
		default:
			var la = model.a;
			return $elm$core$Maybe$Just(la.B);
	}
};
var $elm$http$Http$cancel = function (tracker) {
	return $elm$http$Http$command(
		$elm$http$Http$Cancel(tracker));
};
var $author$project$Utils$Loading$cancelImpl = F2(
	function (state, tracker) {
		cancelImpl:
		while (true) {
			switch (state.$) {
				case 0:
					return $elm$http$Http$cancel(tracker);
				case 1:
					return $elm$http$Http$cancel(tracker);
				case 2:
					return $elm$http$Http$cancel(tracker);
				case 3:
					return $elm$core$Platform$Cmd$none;
				case 4:
					var loadState = state.a;
					var $temp$state = loadState,
						$temp$tracker = tracker;
					state = $temp$state;
					tracker = $temp$tracker;
					continue cancelImpl;
				default:
					return $elm$core$Platform$Cmd$none;
			}
		}
	});
var $author$project$Utils$Loading$cancel = function (_v0) {
	var m = _v0.a;
	return A2($author$project$Utils$Loading$cancelImpl, m.p, m.e$);
};
var $author$project$ProgressiveImage$cancel = function (_v0) {
	var m = _v0;
	var _v1 = m.t;
	switch (_v1.$) {
		case 0:
			return $elm$core$Platform$Cmd$none;
		case 1:
			return $elm$core$Platform$Cmd$none;
		case 2:
			var oneModel = _v1.b;
			return $author$project$Utils$Loading$cancel(oneModel);
		case 3:
			return $elm$core$Platform$Cmd$none;
		default:
			return $elm$core$Platform$Cmd$none;
	}
};
var $author$project$Main$cancelFullImageLoadCmd = function (model) {
	switch (model.$) {
		case 6:
			var la = model.a;
			var _v1 = la.j;
			if (_v1.$ === 1) {
				var fi = _v1.a;
				return $author$project$ProgressiveImage$cancel(fi.ab);
			} else {
				return $elm$core$Platform$Cmd$none;
			}
		case 0:
			return $elm$core$Platform$Cmd$none;
		case 1:
			return $elm$core$Platform$Cmd$none;
		case 2:
			return $elm$core$Platform$Cmd$none;
		case 3:
			return $elm$core$Platform$Cmd$none;
		case 4:
			return $elm$core$Platform$Cmd$none;
		default:
			return $elm$core$Platform$Cmd$none;
	}
};
var $author$project$Utils$Loading$Failure = function (a) {
	return {$: 3, a: a};
};
var $author$project$Utils$Loading$Finished = {$: 2};
var $author$project$Utils$Loading$Requested = {$: 0};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.eN));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectWhatever = function (toMsg) {
	return A2(
		$elm$http$Http$expectBytesResponse,
		toMsg,
		$elm$http$Http$resolve(
			function (_v0) {
				return $elm$core$Result$Ok(0);
			}));
};
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{dD: false, cn: r.cn, cB: r.cB, d0: r.d0, ef: r.ef, eW: r.eW, e$: r.e$, ca: r.ca}));
};
var $author$project$Utils$Loading$cmdFor = function (_v0) {
	var m = _v0.a;
	var wrap = _v0.b;
	var requested = A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed($author$project$Utils$Loading$Requested));
	var handle = function (result) {
		if (!result.$) {
			return $author$project$Utils$Loading$Finished;
		} else {
			var err = result.a;
			return $author$project$Utils$Loading$Failure(err);
		}
	};
	var get = $elm$http$Http$request(
		{
			cn: $elm$http$Http$emptyBody,
			cB: $elm$http$Http$expectWhatever(handle),
			d0: _List_Nil,
			ef: 'GET',
			eW: $elm$core$Maybe$Nothing,
			e$: $elm$core$Maybe$Just(m.e$),
			ca: $elm$url$Url$toString(m.ca)
		});
	var cmdForImpl = function (state) {
		cmdForImpl:
		while (true) {
			switch (state.$) {
				case 0:
					return $elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[get, requested]));
				case 1:
					return $elm$core$Platform$Cmd$none;
				case 2:
					return $elm$core$Platform$Cmd$none;
				case 3:
					return $elm$core$Platform$Cmd$none;
				case 5:
					return $elm$core$Platform$Cmd$none;
				default:
					var s = state.a;
					var $temp$state = s;
					state = $temp$state;
					continue cmdForImpl;
			}
		}
	};
	return A2(
		$elm$core$Platform$Cmd$map,
		wrap,
		cmdForImpl(m.p));
};
var $author$project$Utils$Loading$cmdForMany = function (_v0) {
	var mm = _v0;
	var cmdForOneModel = function (_v2) {
		var oneUrlStr = _v2.a;
		var m = _v2.b;
		var _v1 = $elm$url$Url$fromString(oneUrlStr);
		if (_v1.$ === 1) {
			return _List_Nil;
		} else {
			var oneUrl = _v1.a;
			return _List_fromArray(
				[
					$author$project$Utils$Loading$cmdFor(
					A2(
						$author$project$Utils$Loading$OneModel,
						m,
						A2(
							$elm$core$Basics$composeL,
							mm.aB,
							$author$project$Utils$Loading$ManyMsg(oneUrl))))
				]);
		}
	};
	return $elm$core$Platform$Cmd$batch(
		A2(
			$elm$core$List$concatMap,
			cmdForOneModel,
			$elm$core$Dict$toList(mm.z)));
};
var $author$project$AlbumPage$cmdFor = function (albumPage) {
	if (!albumPage.$) {
		var t = albumPage.a;
		return $author$project$Utils$Loading$cmdForMany(t.l);
	} else {
		var fi = albumPage.a;
		return $author$project$Utils$Loading$cmdForMany(fi.l);
	}
};
var $author$project$Main$flagsOf = function (model) {
	switch (model.$) {
		case 0:
			var abu = model.a;
			return abu.i;
		case 1:
			var sz = model.a;
			return sz.i;
		case 2:
			var lh = model.a;
			return lh.i;
		case 3:
			var ld = model.a;
			return ld.i;
		case 4:
			var le = model.a;
			return le.i;
		case 5:
			var ll = model.a;
			return ll.i;
		default:
			var la = model.a;
			return la.i;
	}
};
var $author$project$AlbumPage$GotImgPosition = function (a) {
	return {$: 10, a: a};
};
var $author$project$AlbumPage$ImgPositionFailed = {$: 9};
var $author$project$Utils$ResultUtils$either = F3(
	function (errMapper, okMapper, r) {
		if (!r.$) {
			var value = r.a;
			return okMapper(value);
		} else {
			var error = r.a;
			return errMapper(error);
		}
	});
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $author$project$AlbumStyles$theImageId = 'the-image';
var $author$project$AlbumPage$getImgPosition = A2(
	$elm$core$Task$attempt,
	A2(
		$author$project$Utils$ResultUtils$either,
		function (_v0) {
			return $author$project$AlbumPage$ImgPositionFailed;
		},
		$author$project$AlbumPage$GotImgPosition),
	$elm$browser$Browser$Dom$getElement($author$project$AlbumStyles$theImageId));
var $author$project$Main$homeOf = function (model) {
	switch (model.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Nothing;
		case 2:
			return $elm$core$Maybe$Nothing;
		case 3:
			var ld = model.a;
			return ld.K;
		case 4:
			return $elm$core$Maybe$Nothing;
		case 5:
			var ll = model.a;
			return ll.K;
		default:
			var la = model.a;
			return la.K;
	}
};
var $author$project$Main$keyOf = function (model) {
	switch (model.$) {
		case 0:
			var abu = model.a;
			return abu.o;
		case 1:
			var sz = model.a;
			return sz.o;
		case 2:
			var lh = model.a;
			return lh.o;
		case 3:
			var ld = model.a;
			return ld.o;
		case 4:
			var le = model.a;
			return le.o;
		case 5:
			var ll = model.a;
			return ll.o;
		default:
			var la = model.a;
			return la.o;
	}
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Album$List = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$NavCompletedLocally = {$: 4};
var $author$project$Utils$ListUtils$dropThroughPred = F2(
	function (pred, elems) {
		dropThroughPred:
		while (true) {
			if (!elems.b) {
				return _List_Nil;
			} else {
				var e = elems.a;
				var es = elems.b;
				if (pred(e)) {
					return es;
				} else {
					if (A2($elm$core$List$any, pred, elems)) {
						var $temp$pred = pred,
							$temp$elems = es;
						pred = $temp$pred;
						elems = $temp$elems;
						continue dropThroughPred;
					} else {
						return elems;
					}
				}
			}
		}
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$Utils$AlbumUtils$findChild = F2(
	function (containingList, name) {
		var f = function (albumOrList) {
			if (!albumOrList.$) {
				var albumList = albumOrList.a;
				return _Utils_eq(albumList.bZ, name);
			} else {
				var album = albumOrList.a;
				return _Utils_eq(album.b9, name);
			}
		};
		return $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				f,
				A2($elm$core$List$cons, containingList.bM, containingList.bN)));
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$AlbumPage$FullImage = function (a) {
	return {$: 1, a: a};
};
var $author$project$Album$Leaf = function (a) {
	return {$: 1, a: a};
};
var $author$project$AlbumPage$LoadingMsg = function (a) {
	return {$: 11, a: a};
};
var $author$project$AlbumPage$View = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $author$project$Main$ViewAlbum = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Utils$ListUtils$shiftToBeginning = F3(
	function (prevImgs, img, restImgs) {
		if (!prevImgs.b) {
			return _Utils_Tuple2(img, restImgs);
		} else {
			var prev1 = prevImgs.a;
			var prevRest = prevImgs.b;
			return _Utils_Tuple2(
				prev1,
				_Utils_ap(
					prevRest,
					A2($elm$core$List$cons, img, restImgs)));
		}
	});
var $author$project$AlbumPage$baseAlbumOf = function (ap) {
	if (!ap.$) {
		var t = ap.a;
		return t.g;
	} else {
		var fi = ap.a;
		var _v1 = A3($author$project$Utils$ListUtils$shiftToBeginning, fi.aR, fi.g.bU, fi.g.bV);
		var newFirst = _v1.a;
		var newRest = _v1.b;
		return {bU: newFirst, bV: newRest, b8: fi.g.b8, b9: fi.g.b9};
	}
};
var $author$project$Utils$AlbumUtils$findImg = F3(
	function (prevs, album, img) {
		findImg:
		while (true) {
			if (_Utils_eq(album.bU.bK, img)) {
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(prevs, album));
			} else {
				var _v0 = album.bV;
				if (!_v0.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var imageNext = _v0.a;
					var imageRest = _v0.b;
					var $temp$prevs = _Utils_ap(
						prevs,
						_List_fromArray(
							[album.bU])),
						$temp$album = _Utils_update(
						album,
						{bU: imageNext, bV: imageRest}),
						$temp$img = img;
					prevs = $temp$prevs;
					album = $temp$album;
					img = $temp$img;
					continue findImg;
				}
			}
		}
	});
var $elm$core$Basics$round = _Basics_round;
var $author$project$FullImagePage$fitImage = F3(
	function (is, winWidth, winHeight) {
		var winAspect = winWidth / winHeight;
		var imgAspect = is.cc / is.cd;
		var scale = (_Utils_cmp(winAspect, imgAspect) < 1) ? (winWidth / is.cc) : (winHeight / is.cd);
		return _Utils_Tuple2(
			$elm$core$Basics$round(is.cc * scale),
			$elm$core$Basics$round(is.cd * scale));
	});
var $author$project$Utils$TouchUtils$NoState = {$: 0};
var $author$project$Utils$TouchUtils$init = $author$project$Utils$TouchUtils$NoState;
var $author$project$Utils$Loading$ManyModel = $elm$core$Basics$identity;
var $author$project$Utils$Loading$getModel = function (_v0) {
	var m = _v0.a;
	return m;
};
var $author$project$Utils$Loading$NotRequested = {$: 0};
var $author$project$Utils$Loading$init = F2(
	function (wrap, url) {
		var tracker = 'LoadingTracker:' + $elm$url$Url$toString(url);
		var model = A2(
			$author$project$Utils$Loading$OneModel,
			{p: $author$project$Utils$Loading$NotRequested, e$: tracker, ca: url},
			wrap);
		return _Utils_Tuple2(
			model,
			$author$project$Utils$Loading$cmdFor(model));
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Basics$not = _Basics_not;
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Utils$Loading$initMany = F3(
	function (firstUrls, restUrls, wrap) {
		var initEntry = function (url) {
			return _Utils_Tuple2(
				$elm$url$Url$toString(url),
				A2(
					$author$project$Utils$Loading$init,
					A2(
						$elm$core$Basics$composeR,
						$author$project$Utils$Loading$ManyMsg(url),
						wrap),
					url));
		};
		var models = $elm$core$Dict$fromList(
			A2($elm$core$List$map, initEntry, firstUrls));
		return _Utils_Tuple2(
			{
				bt: $elm$core$List$length(firstUrls),
				z: A2(
					$elm$core$Dict$map,
					$elm$core$Basics$always(
						A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $author$project$Utils$Loading$getModel)),
					models),
				bC: A2(
					$elm$core$List$filter,
					function (u) {
						return !A2($elm$core$List$member, u, firstUrls);
					},
					restUrls),
				aB: wrap
			},
			$elm$core$Platform$Cmd$batch(
				$elm$core$Dict$values(
					A2(
						$elm$core$Dict$map,
						$elm$core$Basics$always($elm$core$Tuple$second),
						models))));
	});
var $author$project$AlbumPage$Thumbs = function (a) {
	return {$: 0, a: a};
};
var $author$project$ThumbPage$maxThumbWidth = 300;
var $author$project$ThumbPage$scrollPad = 20;
var $author$project$ThumbPage$colsWidth = function (viewport) {
	var maxCols = A2(
		$elm$core$Basics$max,
		($elm$core$Basics$floor(viewport.bi.cb) / $author$project$ThumbPage$maxThumbWidth) | 0,
		2);
	var thumbWidth = (($elm$core$Basics$floor(viewport.bi.cb) - $author$project$ThumbPage$scrollPad) / maxCols) | 0;
	return _Utils_Tuple2(maxCols, thumbWidth);
};
var $author$project$ThumbPage$sizeForScaler = F2(
	function (scaler, img) {
		var is1 = img.b4;
		var scale = scaler(is1);
		var xScaled = $elm$core$Basics$round(scale * is1.cc);
		var yScaled = $elm$core$Basics$round(scale * is1.cd);
		return _Utils_Tuple2(xScaled, yScaled);
	});
var $author$project$ThumbPage$sizeForWidth = function (width) {
	return $author$project$ThumbPage$sizeForScaler(
		function (is1) {
			return width / is1.cc;
		});
};
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$ImageViews$smallestImageBiggerThan = F4(
	function (w, h, i, iRest) {
		var _v0 = $elm$core$List$head(
			A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.cc;
				},
				A2(
					$elm$core$List$filter,
					function (is) {
						return (_Utils_cmp(is.cc, w) > -1) && (_Utils_cmp(is.cd, h) > -1);
					},
					A2($elm$core$List$cons, i, iRest))));
		if (_v0.$ === 1) {
			return i;
		} else {
			var sizedIs = _v0.a;
			return sizedIs;
		}
	});
var $author$project$ThumbPage$srcForWidth = F2(
	function (width, img) {
		var _v0 = A2($author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _v0.a;
		var yScaled = _v0.b;
		return A4($author$project$ImageViews$smallestImageBiggerThan, xScaled, yScaled, img.b4, img.b5);
	});
var $author$project$ThumbPage$allImgSrcs = function (thumbPageModel) {
	var _v0 = $author$project$ThumbPage$colsWidth(thumbPageModel.dI);
	var thumbWidth = _v0.b;
	return A2(
		$elm$core$List$map,
		$author$project$ThumbPage$srcForWidth(thumbWidth),
		A2($elm$core$List$cons, thumbPageModel.g.bU, thumbPageModel.g.bV));
};
var $elm$core$String$endsWith = _String_endsWith;
var $author$project$Utils$HttpUtils$appendPath = F2(
	function (baseUrl, relativePath) {
		var sep = function () {
			var _v0 = A2($elm$core$String$endsWith, '/', baseUrl.ba) || A2($elm$core$String$startsWith, '/', relativePath);
			if (_v0) {
				return '';
			} else {
				return '/';
			}
		}();
		var newPath = _Utils_ap(
			baseUrl.ba,
			_Utils_ap(sep, relativePath));
		return _Utils_update(
			baseUrl,
			{cF: $elm$core$Maybe$Nothing, ba: newPath, aS: $elm$core$Maybe$Nothing});
	});
var $author$project$ThumbPage$allUrls = function (baseUrl) {
	return A2(
		$elm$core$Basics$composeR,
		$author$project$ThumbPage$allImgSrcs,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$map(
				function ($) {
					return $.ca;
				}),
			$elm$core$List$map(
				$author$project$Utils$HttpUtils$appendPath(baseUrl))));
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$AlbumPage$thumbModel = function (th) {
	return {g: th.g, B: th.B, dI: th.n.dI, l: th.l, bB: _List_Nil, aT: th.n.aT};
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $author$project$Utils$ListUtils$encodePath = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$split('/'),
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map($elm$url$Url$percentEncode),
		$elm$core$String$join('/')));
var $author$project$Utils$Loading$getOneState = F2(
	function (_v0, url) {
		var mm = _v0;
		var _v1 = A2(
			$elm$core$Dict$get,
			$elm$url$Url$toString(url),
			mm.z);
		if (!_v1.$) {
			var m = _v1.a;
			return $elm$core$Maybe$Just(m.p);
		} else {
			var _v2 = A2($elm$core$List$member, url, mm.bC);
			if (_v2) {
				return $elm$core$Maybe$Just($author$project$Utils$Loading$NotRequested);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$ThumbPage$urlsToGet = function (thumbPageModel) {
	var vPort = thumbPageModel.aT;
	var srcs = $author$project$ThumbPage$allImgSrcs(thumbPageModel);
	var scrollPct = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function (vp) {
				var _v3 = !vp.bi.cd;
				if (_v3) {
					return 0;
				} else {
					return (vp.bi.cd + (vp.bi.bT / 2)) / vp.eD.bT;
				}
			},
			vPort));
	var score = function (i) {
		var iPct = i / $elm$core$List$length(srcs);
		return $elm$core$Basics$abs(scrollPct - iPct);
	};
	var scoredSrcs = A2(
		$elm$core$List$indexedMap,
		function (i) {
			return function (img) {
				return _Utils_Tuple2(
					score(i),
					img);
			};
		},
		srcs);
	var prioritySrcs = A2(
		$elm$core$List$map,
		$elm$core$Tuple$second,
		A2($elm$core$List$sortBy, $elm$core$Tuple$first, scoredSrcs));
	return A2(
		$elm$core$List$filter,
		function (url) {
			return !function () {
				var _v0 = A2($author$project$Utils$Loading$getOneState, thumbPageModel.l, url);
				_v0$4:
				while (true) {
					if (!_v0.$) {
						switch (_v0.a.$) {
							case 3:
								var _v1 = _v0.a;
								return true;
							case 5:
								return true;
							case 4:
								switch (_v0.a.a.$) {
									case 3:
										var _v2 = _v0.a.a;
										return true;
									case 5:
										return true;
									default:
										break _v0$4;
								}
							default:
								break _v0$4;
						}
					} else {
						break _v0$4;
					}
				}
				return false;
			}();
		},
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.ca;
				},
				A2(
					$elm$core$Basics$composeR,
					$author$project$Utils$ListUtils$encodePath,
					$author$project$Utils$HttpUtils$appendPath(thumbPageModel.B))),
			prioritySrcs));
};
var $author$project$AlbumPage$initThumbsFullVp = F3(
	function (album, vpInfo, baseUrl) {
		var _v0 = A3(
			$author$project$Utils$Loading$initMany,
			_List_Nil,
			_List_Nil,
			$elm$core$Basics$always(0));
		var emptyLoader = _v0.a;
		var baseModel = {g: album, B: baseUrl, l: emptyLoader, n: vpInfo};
		var firstUrls = A2(
			$elm$core$List$take,
			5,
			$author$project$ThumbPage$urlsToGet(
				$author$project$AlbumPage$thumbModel(baseModel)));
		var restUrls = A2(
			$elm$core$List$filter,
			function (u) {
				return !A2($elm$core$List$member, u, firstUrls);
			},
			A2(
				$author$project$ThumbPage$allUrls,
				baseUrl,
				$author$project$AlbumPage$thumbModel(baseModel)));
		var _v1 = A3($author$project$Utils$Loading$initMany, firstUrls, restUrls, $author$project$AlbumPage$LoadingMsg);
		var imageLoader = _v1.a;
		var imgCmd = _v1.b;
		return _Utils_Tuple2(
			$author$project$AlbumPage$Thumbs(
				{g: album, B: baseUrl, l: imageLoader, n: vpInfo}),
			imgCmd);
	});
var $author$project$ProgressiveImage$Incomplete = 0;
var $author$project$ProgressiveImage$LoadingFallback = {$: 1};
var $author$project$ProgressiveImage$ProgImgModel = $elm$core$Basics$identity;
var $author$project$ProgressiveImage$TryingCached = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Property = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Spring = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_style_animation$Animation$initMotion = F2(
	function (position, unit) {
		return {
			aM: $mdgriffith$elm_style_animation$Animation$Model$Spring(
				{cw: 26, ds: 170}),
			d6: $elm$core$Maybe$Nothing,
			eu: position,
			eS: position,
			e1: unit,
			e4: 0
		};
	});
var $mdgriffith$elm_style_animation$Animation$custom = F3(
	function (name, value, unit) {
		return A2(
			$mdgriffith$elm_style_animation$Animation$Model$Property,
			name,
			A2($mdgriffith$elm_style_animation$Animation$initMotion, value, unit));
	});
var $mdgriffith$elm_style_animation$Animation$opacity = function (val) {
	return A3($mdgriffith$elm_style_animation$Animation$custom, 'opacity', val, '');
};
var $author$project$ProgressiveImage$hidden = _List_fromArray(
	[
		$mdgriffith$elm_style_animation$Animation$opacity(0)
	]);
var $mdgriffith$elm_style_animation$Animation$Model$Animation = $elm$core$Basics$identity;
var $mdgriffith$elm_style_animation$Animation$initialState = function (current) {
	return {
		bW: _List_Nil,
		bG: false,
		b6: _List_Nil,
		dt: current,
		dx: {
			N: $elm$time$Time$millisToPosix(0),
			dX: $elm$time$Time$millisToPosix(0)
		}
	};
};
var $mdgriffith$elm_style_animation$Animation$Model$Easing = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$pi = _Basics_pi;
var $mdgriffith$elm_style_animation$Animation$Model$AtSpeed = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_style_animation$Animation$speed = function (speedValue) {
	return $mdgriffith$elm_style_animation$Animation$Model$AtSpeed(speedValue);
};
var $mdgriffith$elm_style_animation$Animation$defaultInterpolationByProperty = function (prop) {
	var linear = function (duration) {
		return $mdgriffith$elm_style_animation$Animation$Model$Easing(
			{bO: duration, bP: $elm$core$Basics$identity, bD: 1, eM: 0});
	};
	var defaultSpring = $mdgriffith$elm_style_animation$Animation$Model$Spring(
		{cw: 26, ds: 170});
	switch (prop.$) {
		case 0:
			return defaultSpring;
		case 1:
			return linear(
				$elm$time$Time$millisToPosix(400));
		case 2:
			return defaultSpring;
		case 3:
			return defaultSpring;
		case 4:
			return defaultSpring;
		case 5:
			var name = prop.a;
			return (name === 'rotate3d') ? $mdgriffith$elm_style_animation$Animation$speed(
				{da: $elm$core$Basics$pi}) : defaultSpring;
		case 6:
			return defaultSpring;
		case 7:
			return $mdgriffith$elm_style_animation$Animation$speed(
				{da: $elm$core$Basics$pi});
		case 8:
			return defaultSpring;
		default:
			return defaultSpring;
	}
};
var $mdgriffith$elm_style_animation$Animation$Model$AngleProperty = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$ColorProperty = F5(
	function (a, b, c, d, e) {
		return {$: 1, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_style_animation$Animation$Model$ExactProperty = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Path = function (a) {
	return {$: 9, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Points = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Property2 = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Property3 = F4(
	function (a, b, c, d) {
		return {$: 5, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Property4 = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_style_animation$Animation$Model$ShadowProperty = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc = function (a) {
	return {$: 17, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc = function (a) {
	return {$: 16, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Close = {$: 18};
var $mdgriffith$elm_style_animation$Animation$Model$Curve = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$CurveTo = function (a) {
	return {$: 9, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Horizontal = function (a) {
	return {$: 4, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Line = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$LineTo = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Move = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$MoveTo = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Quadratic = function (a) {
	return {$: 10, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo = function (a) {
	return {$: 11, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Smooth = function (a) {
	return {$: 14, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic = function (a) {
	return {$: 12, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo = function (a) {
	return {$: 13, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$SmoothTo = function (a) {
	return {$: 15, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Vertical = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$VerticalTo = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$mapPathMotion = F2(
	function (fn, cmd) {
		var mapCoords = function (coords) {
			return A2(
				$elm$core$List$map,
				function (_v1) {
					var x = _v1.a;
					var y = _v1.b;
					return _Utils_Tuple2(
						fn(x),
						fn(y));
				},
				coords);
		};
		switch (cmd.$) {
			case 0:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$Move,
					fn(m1),
					fn(m2));
			case 1:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$MoveTo,
					fn(m1),
					fn(m2));
			case 2:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$Line,
					fn(m1),
					fn(m2));
			case 3:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$LineTo,
					fn(m1),
					fn(m2));
			case 4:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Horizontal(
					fn(motion));
			case 5:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
					fn(motion));
			case 6:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Vertical(
					fn(motion));
			case 7:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
					fn(motion));
			case 8:
				var control1 = cmd.a.a2;
				var control2 = cmd.a.a3;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$Curve(
					{
						a2: _Utils_Tuple2(
							fn(control1.a),
							fn(control1.b)),
						a3: _Utils_Tuple2(
							fn(control2.a),
							fn(control2.b)),
						V: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 9:
				var control1 = cmd.a.a2;
				var control2 = cmd.a.a3;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
					{
						a2: _Utils_Tuple2(
							fn(control1.a),
							fn(control1.b)),
						a3: _Utils_Tuple2(
							fn(control2.a),
							fn(control2.b)),
						V: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 10:
				var control = cmd.a.a1;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
					{
						a1: _Utils_Tuple2(
							fn(control.a),
							fn(control.b)),
						V: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 11:
				var control = cmd.a.a1;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
					{
						a1: _Utils_Tuple2(
							fn(control.a),
							fn(control.b)),
						V: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 12:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
					mapCoords(coords));
			case 13:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
					mapCoords(coords));
			case 14:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Smooth(
					mapCoords(coords));
			case 15:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
					mapCoords(coords));
			case 16:
				var arc = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
					function () {
						var y = arc.cd;
						var x = arc.cc;
						var startAngle = arc.bc;
						var radius = arc.eA;
						var endAngle = arc.a4;
						return _Utils_update(
							arc,
							{
								a4: fn(endAngle),
								eA: fn(radius),
								bc: fn(startAngle),
								cc: fn(x),
								cd: fn(y)
							});
					}());
			case 17:
				var arc = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
					function () {
						var y = arc.cd;
						var x = arc.cc;
						var startAngle = arc.bc;
						var radius = arc.eA;
						var endAngle = arc.a4;
						return _Utils_update(
							arc,
							{
								a4: fn(endAngle),
								eA: fn(radius),
								bc: fn(startAngle),
								cc: fn(x),
								cd: fn(y)
							});
					}());
			default:
				return $mdgriffith$elm_style_animation$Animation$Model$Close;
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$mapToMotion = F2(
	function (fn, prop) {
		switch (prop.$) {
			case 0:
				var name = prop.a;
				var value = prop.b;
				return A2($mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
			case 1:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				var m3 = prop.d;
				var m4 = prop.e;
				return A5(
					$mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
					name,
					fn(m1),
					fn(m2),
					fn(m3),
					fn(m4));
			case 2:
				var name = prop.a;
				var inset = prop.b;
				var shadow = prop.c;
				var size = shadow.eK;
				var red = shadow.L;
				var offsetY = shadow.T;
				var offsetX = shadow.S;
				var green = shadow.J;
				var blur = shadow.P;
				var blue = shadow.F;
				var alpha = shadow.E;
				return A3(
					$mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
					name,
					inset,
					{
						E: fn(alpha),
						F: fn(blue),
						P: fn(blur),
						J: fn(green),
						S: fn(offsetX),
						T: fn(offsetY),
						L: fn(red),
						eK: fn(size)
					});
			case 3:
				var name = prop.a;
				var m1 = prop.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$Property,
					name,
					fn(m1));
			case 4:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				return A3(
					$mdgriffith$elm_style_animation$Animation$Model$Property2,
					name,
					fn(m1),
					fn(m2));
			case 5:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				var m3 = prop.d;
				return A4(
					$mdgriffith$elm_style_animation$Animation$Model$Property3,
					name,
					fn(m1),
					fn(m2),
					fn(m3));
			case 6:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				var m3 = prop.d;
				var m4 = prop.e;
				return A5(
					$mdgriffith$elm_style_animation$Animation$Model$Property4,
					name,
					fn(m1),
					fn(m2),
					fn(m3),
					fn(m4));
			case 7:
				var name = prop.a;
				var m1 = prop.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
					name,
					fn(m1));
			case 8:
				var ms = prop.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Points(
					A2(
						$elm$core$List$map,
						function (_v1) {
							var x = _v1.a;
							var y = _v1.b;
							return _Utils_Tuple2(
								fn(x),
								fn(y));
						},
						ms));
			default:
				var cmds = prop.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Path(
					A2(
						$elm$core$List$map,
						$mdgriffith$elm_style_animation$Animation$Model$mapPathMotion(fn),
						cmds));
		}
	});
var $mdgriffith$elm_style_animation$Animation$setDefaultInterpolation = function (prop) {
	var interp = $mdgriffith$elm_style_animation$Animation$defaultInterpolationByProperty(prop);
	return A2(
		$mdgriffith$elm_style_animation$Animation$Model$mapToMotion,
		function (m) {
			return _Utils_update(
				m,
				{aM: interp});
		},
		prop);
};
var $mdgriffith$elm_style_animation$Animation$Render$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					var $temp$predicate = predicate,
						$temp$list = xs;
					predicate = $temp$predicate;
					list = $temp$list;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var $mdgriffith$elm_style_animation$Animation$Render$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return $elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2($elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return $elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var $mdgriffith$elm_style_animation$Animation$Render$span = F2(
	function (p, xs) {
		return _Utils_Tuple2(
			A2($mdgriffith$elm_style_animation$Animation$Render$takeWhile, p, xs),
			A2($mdgriffith$elm_style_animation$Animation$Render$dropWhile, p, xs));
	});
var $mdgriffith$elm_style_animation$Animation$Render$groupWhile = F2(
	function (eq, xs_) {
		if (!xs_.b) {
			return _List_Nil;
		} else {
			var x = xs_.a;
			var xs = xs_.b;
			var _v1 = A2(
				$mdgriffith$elm_style_animation$Animation$Render$span,
				eq(x),
				xs);
			var ys = _v1.a;
			var zs = _v1.b;
			return A2(
				$elm$core$List$cons,
				A2($elm$core$List$cons, x, ys),
				A2($mdgriffith$elm_style_animation$Animation$Render$groupWhile, eq, zs));
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$propertyName = function (prop) {
	switch (prop.$) {
		case 0:
			var name = prop.a;
			return name;
		case 1:
			var name = prop.a;
			return name;
		case 2:
			var name = prop.a;
			return name;
		case 3:
			var name = prop.a;
			return name;
		case 4:
			var name = prop.a;
			return name;
		case 5:
			var name = prop.a;
			return name;
		case 6:
			var name = prop.a;
			return name;
		case 7:
			var name = prop.a;
			return name;
		case 8:
			return 'points';
		default:
			return 'path';
	}
};
var $mdgriffith$elm_style_animation$Animation$Render$isTransformation = function (prop) {
	return A2(
		$elm$core$List$member,
		$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
		_List_fromArray(
			['rotate', 'rotateX', 'rotateY', 'rotateZ', 'rotate3d', 'translate', 'translate3d', 'scale', 'scale3d']));
};
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $mdgriffith$elm_style_animation$Animation$Render$warnForDoubleListedProperties = function (props) {
	var _v0 = A2(
		$elm$core$List$map,
		function (propGroup) {
			var _v1 = $elm$core$List$head(propGroup);
			if (_v1.$ === 1) {
				return '';
			} else {
				var name = _v1.a;
				return ($elm$core$List$length(propGroup) > 1) ? '' : '';
			}
		},
		A2(
			$mdgriffith$elm_style_animation$Animation$Render$groupWhile,
			$elm$core$Basics$eq,
			$elm$core$List$sort(
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_style_animation$Animation$Model$propertyName,
					A2(
						$elm$core$List$filter,
						function (prop) {
							return !$mdgriffith$elm_style_animation$Animation$Render$isTransformation(prop);
						},
						props)))));
	return props;
};
var $mdgriffith$elm_style_animation$Animation$style = function (props) {
	return $mdgriffith$elm_style_animation$Animation$initialState(
		A2(
			$elm$core$List$map,
			$mdgriffith$elm_style_animation$Animation$setDefaultInterpolation,
			$mdgriffith$elm_style_animation$Animation$Render$warnForDoubleListedProperties(props)));
};
var $andrewMacmurray$elm_delay$Delay$Millisecond = 0;
var $author$project$ProgressiveImage$ScheduleTimeout = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $author$project$ProgressiveImage$updateCmd = function (_v0) {
	var piModel = _v0;
	var _v1 = piModel.t;
	switch (_v1.$) {
		case 0:
			var trying = _v1.b;
			return $author$project$Utils$ResultUtils$toCmd(
				A3($author$project$ProgressiveImage$ScheduleTimeout, 200, 0, trying));
		case 1:
			return $elm$core$Platform$Cmd$none;
		case 2:
			var loadingState = _v1.b;
			return $author$project$Utils$Loading$cmdFor(loadingState);
		case 3:
			return $elm$core$Platform$Cmd$none;
		default:
			return $elm$core$Platform$Cmd$none;
	}
};
var $author$project$ProgressiveImage$init = function (data) {
	var animState = {
		_: $mdgriffith$elm_style_animation$Animation$style($author$project$ProgressiveImage$hidden),
		x: $mdgriffith$elm_style_animation$Animation$style($author$project$ProgressiveImage$hidden)
	};
	var model = function () {
		var _v0 = data.ev;
		if (!_v0.b) {
			return {f: animState, aG: 0, q: data, t: $author$project$ProgressiveImage$LoadingFallback};
		} else {
			var c1 = _v0.a;
			var cOthers = _v0.b;
			return {
				f: animState,
				aG: 0,
				q: data,
				t: A3($author$project$ProgressiveImage$TryingCached, _List_Nil, c1, cOthers)
			};
		}
	}();
	return _Utils_Tuple2(
		model,
		$author$project$ProgressiveImage$updateCmd(model));
};
var $author$project$AlbumPage$progInit = F5(
	function (viewport, baseUrl, i, w, h) {
		var smBiggerThan = F2(
			function (wMax, hMax) {
				return A4($author$project$ImageViews$smallestImageBiggerThan, wMax, hMax, i.b4, i.b5);
			});
		var _v0 = $author$project$ThumbPage$colsWidth(viewport);
		var thumbWidth = _v0.b;
		return $author$project$ProgressiveImage$init(
			{
				B: baseUrl,
				d_: A2(smBiggerThan, 1, 1),
				bT: h,
				ed: A2(smBiggerThan, w, h),
				ev: _List_fromArray(
					[
						A2(smBiggerThan, thumbWidth, 1)
					]),
				cb: w
			});
	});
var $author$project$Utils$ViewportUtils$scrollPosOf = function (viewport) {
	return viewport.bi.cd;
};
var $author$project$Main$navForAlbum = F6(
	function (baseUrl, model, vpInfo, album, ps, newParents) {
		var parentsNoScroll = A2(
			$elm$core$List$map,
			function (p) {
				return _Utils_Tuple2(p, $elm$core$Maybe$Nothing);
			},
			newParents);
		var _v0 = A2($author$project$Utils$DebugSupport$log, 'navForAlbum ps', ps);
		if (!_v0.b) {
			var _v1 = A3($author$project$AlbumPage$initThumbsFullVp, album, vpInfo, baseUrl);
			var thumbsModel = _v1.a;
			var makeViewAlbumThumbsMsg = function (parents) {
				return $elm$core$Maybe$Just(
					$author$project$Main$Album(
						A2($author$project$Main$ViewAlbum, thumbsModel, parents)));
			};
			var nonLocalMsg = makeViewAlbumThumbsMsg(parentsNoScroll);
			switch (model.$) {
				case 5:
					var ll = model.a;
					var _v3 = ll.y;
					var alp = _v3;
					var _v4 = A2(
						$elm$core$List$member,
						$author$project$Album$Leaf(album),
						A2($elm$core$List$cons, alp.a_.bM, alp.a_.bN));
					if (_v4) {
						return makeViewAlbumThumbsMsg(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									alp.a_,
									A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, ll.aT)),
								alp.bB));
					} else {
						return nonLocalMsg;
					}
				case 6:
					var la = model.a;
					var _v5 = la.j;
					if (!_v5.$) {
						return nonLocalMsg;
					} else {
						var fi = _v5.a;
						var _v6 = _Utils_eq(
							album,
							$author$project$AlbumPage$baseAlbumOf(
								$author$project$AlbumPage$FullImage(fi)));
						if (_v6) {
							return $elm$core$Maybe$Just(
								$author$project$Main$Meta(
									A2(
										$author$project$Main$Sequence,
										$author$project$Main$Album(
											$author$project$Main$PageMsg($author$project$AlbumPage$BackToThumbs)),
										_List_fromArray(
											[
												$author$project$Main$Album($author$project$Main$NavCompletedLocally)
											]))));
						} else {
							return nonLocalMsg;
						}
					}
				default:
					return nonLocalMsg;
			}
		} else {
			var i = _v0.a;
			var _v7 = A3($author$project$Utils$AlbumUtils$findImg, _List_Nil, album, i);
			if (_v7.$ === 1) {
				return A2($author$project$Utils$DebugSupport$log, 'navForAlbum can\'t find image ' + i, $elm$core$Maybe$Nothing);
			} else {
				var _v8 = _v7.a;
				var prevs = _v8.a;
				var nAlbum = _v8.b;
				var _v9 = A3(
					$author$project$FullImagePage$fitImage,
					nAlbum.bU.b4,
					$elm$core$Basics$floor(vpInfo.dI.bi.cb),
					$elm$core$Basics$floor(vpInfo.dI.bi.bT));
				var w = _v9.a;
				var h = _v9.b;
				var _v10 = A5($author$project$AlbumPage$progInit, vpInfo.dI, baseUrl, nAlbum.bU, w, h);
				var progModel = _v10.a;
				var progMsg = _v10.b;
				var nonLocalMsg = $elm$core$Maybe$Just(
					$author$project$Main$Meta(
						A2(
							$author$project$Main$SequenceCmd,
							$author$project$Utils$ResultUtils$toCmd(
								$author$project$Main$Album(
									A2(
										$author$project$Main$ViewAlbum,
										$author$project$AlbumPage$FullImage(
											{
												g: nAlbum,
												B: baseUrl,
												l: A3($author$project$Utils$Loading$initMany, _List_Nil, _List_Nil, $author$project$AlbumPage$LoadingMsg).a,
												bp: $elm$core$Maybe$Nothing,
												aR: prevs,
												ab: progModel,
												$7: $elm$core$Maybe$Nothing,
												X: $author$project$Utils$TouchUtils$init,
												n: vpInfo
											}),
										parentsNoScroll))),
							_List_fromArray(
								[
									A2(
									$elm$core$Platform$Cmd$map,
									A2(
										$elm$core$Basics$composeL,
										A2($elm$core$Basics$composeL, $author$project$Main$Album, $author$project$Main$PageMsg),
										$author$project$AlbumPage$FullMsg),
									progMsg)
								]))));
				if (model.$ === 6) {
					var la = model.a;
					var _v12 = la.j;
					if (!_v12.$) {
						var t = _v12.a;
						var _v13 = _Utils_eq(t.g, album);
						if (_v13) {
							return A2(
								$author$project$Utils$DebugSupport$log,
								'navForAlbum t.album == album',
								$elm$core$Maybe$Just(
									$author$project$Main$Meta(
										A2(
											$author$project$Main$Sequence,
											$author$project$Main$Album(
												$author$project$Main$PageMsg(
													A3($author$project$AlbumPage$View, prevs, nAlbum.bU, nAlbum.bV))),
											_List_fromArray(
												[
													$author$project$Main$Album($author$project$Main$NavCompletedLocally)
												])))));
						} else {
							return A2($author$project$Utils$DebugSupport$log, 'navForAlbum t.album != album', nonLocalMsg);
						}
					} else {
						var fi = _v12.a;
						var baseAlbum = $author$project$AlbumPage$baseAlbumOf(
							$author$project$AlbumPage$FullImage(fi));
						var _v14 = _Utils_eq(baseAlbum, album);
						if (_v14) {
							var matchImgMsg = F2(
								function (possibleMatchingImage, msgOnMatch) {
									if (possibleMatchingImage.$ === 1) {
										return $elm$core$Maybe$Nothing;
									} else {
										var matchingImage = possibleMatchingImage.a;
										var _v18 = _Utils_eq(nAlbum.bU, matchingImage);
										if (_v18) {
											return $elm$core$Maybe$Just(
												$author$project$Main$Meta(
													A2(
														$author$project$Main$Sequence,
														$author$project$Main$Album(
															$author$project$Main$PageMsg(msgOnMatch)),
														_List_fromArray(
															[
																$author$project$Main$Album($author$project$Main$NavCompletedLocally)
															]))));
										} else {
											return $elm$core$Maybe$Nothing;
										}
									}
								});
							var nextMsg = A2(
								matchImgMsg,
								$elm$core$List$head(fi.g.bV),
								$author$project$AlbumPage$Next);
							var prevMsg = A2(
								matchImgMsg,
								$elm$core$List$head(
									$elm$core$List$reverse(fi.aR)),
								$author$project$AlbumPage$Prev);
							if (!nextMsg.$) {
								var next = nextMsg.a;
								return $elm$core$Maybe$Just(
									A2($author$project$Utils$DebugSupport$log, 'navForAlbum FullImage next', next));
							} else {
								if (!prevMsg.$) {
									var prev = prevMsg.a;
									return $elm$core$Maybe$Just(
										A2($author$project$Utils$DebugSupport$log, 'navForAlbum FullImage prev', prev));
								} else {
									return A2($author$project$Utils$DebugSupport$log, 'navForAlbum FullImage not prev or next', nonLocalMsg);
								}
							}
						} else {
							return A2($author$project$Utils$DebugSupport$log, 'navForAlbum fi.album != album', nonLocalMsg);
						}
					}
				} else {
					return nonLocalMsg;
				}
			}
		}
	});
var $author$project$Main$navFrom = F7(
	function (baseUrl, model, viewport, root, parents, paths, defMsg) {
		if (!paths.b) {
			return A2($author$project$Utils$DebugSupport$log, 'navFrom has no paths', defMsg);
		} else {
			if ((paths.a === '#') && (!paths.b.b)) {
				return A2($author$project$Utils$DebugSupport$log, 'navFrom has only # path', defMsg);
			} else {
				var p1 = paths.a;
				var ps = paths.b;
				var newParents = A2($elm$core$List$cons, root, parents);
				var mChild = A2($author$project$Utils$AlbumUtils$findChild, root, p1);
				return A2(
					$author$project$Utils$DebugSupport$log,
					'navFrom first path ' + p1,
					function () {
						if (mChild.$ === 1) {
							return A2($author$project$Utils$DebugSupport$log, 'navFrom can\'t find child ' + p1, defMsg);
						} else {
							var pChild = mChild.a;
							if (!pChild.$) {
								var albumList = pChild.a;
								var makeViewList = F3(
									function (bodyViewport, scroll, parentss) {
										return $author$project$Main$Album(
											A2(
												$author$project$Main$ViewList,
												{a_: albumList, dI: bodyViewport, bB: parentss},
												scroll));
									});
								var thisAlbumMsg = A3(
									makeViewList,
									viewport.dI,
									$elm$core$Maybe$Nothing,
									A2(
										$elm$core$List$map,
										function (p) {
											return _Utils_Tuple2(p, $elm$core$Maybe$Nothing);
										},
										newParents));
								if (!ps.b) {
									switch (model.$) {
										case 5:
											var ll = model.a;
											var _v5 = ll.y;
											var alp = _v5;
											var localNavWithScroll = function (scroll) {
												return $author$project$Main$Meta(
													A2(
														$author$project$Main$Sequence,
														A3(
															makeViewList,
															alp.dI,
															scroll,
															A2(
																$elm$core$List$cons,
																_Utils_Tuple2(
																	alp.a_,
																	A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, ll.aT)),
																alp.bB)),
														_List_fromArray(
															[
																$author$project$Main$Album($author$project$Main$NavCompletedLocally)
															])));
											};
											var destParent = A2(
												$author$project$Utils$DebugSupport$log,
												'destParent',
												$elm$core$List$head(
													A2(
														$elm$core$List$filter,
														function (_v9) {
															var list = _v9.a;
															return _Utils_eq(list, albumList);
														},
														alp.bB)));
											var destIsChild = A2(
												$author$project$Utils$DebugSupport$log,
												'destIsChild',
												A2(
													$elm$core$List$member,
													$author$project$Album$List(albumList),
													A2($elm$core$List$cons, alp.a_.bM, alp.a_.bN)));
											if (destIsChild) {
												return localNavWithScroll($elm$core$Maybe$Nothing);
											} else {
												if (!destParent.$) {
													var _v8 = destParent.a;
													var scroll = _v8.b;
													return localNavWithScroll(scroll);
												} else {
													return thisAlbumMsg;
												}
											}
										case 6:
											var la = model.a;
											var destParent = A2(
												$author$project$Utils$DebugSupport$log,
												'LoadedAlbum.destParent',
												$elm$core$List$head(
													A2(
														$elm$core$List$filter,
														function (_v13) {
															var list = _v13.a;
															return _Utils_eq(list, albumList);
														},
														la.bB)));
											if (!destParent.$) {
												var _v11 = destParent.a;
												var scroll = _v11.b;
												return A3(
													makeViewList,
													$author$project$AlbumPage$pageSize(la.j).dI,
													scroll,
													A2(
														$author$project$Utils$ListUtils$dropThroughPred,
														function (_v12) {
															var p = _v12.a;
															return _Utils_eq(p, albumList);
														},
														la.bB));
											} else {
												return thisAlbumMsg;
											}
										default:
											return thisAlbumMsg;
									}
								} else {
									return A2(
										$author$project$Utils$DebugSupport$log,
										'navFrom recursive call',
										A7($author$project$Main$navFrom, baseUrl, model, viewport, albumList, newParents, ps, thisAlbumMsg));
								}
							} else {
								var album = pChild.a;
								return A2(
									$elm$core$Maybe$withDefault,
									defMsg,
									A2(
										$author$project$Utils$DebugSupport$log,
										'navFrom calls navForAlbum',
										A6($author$project$Main$navForAlbum, baseUrl, model, viewport, album, ps, newParents)));
							}
						}
					}());
			}
		}
	});
var $author$project$Main$pathsToCmdImpl = F5(
	function (baseUrl, model, viewport, parents, paths) {
		var mRoot = $elm$core$List$head(
			$elm$core$List$reverse(parents));
		if (mRoot.$ === 1) {
			return A2($author$project$Utils$DebugSupport$log, 'pathsToCmdImpl has no root', $elm$core$Maybe$Nothing);
		} else {
			var root = mRoot.a;
			var modelParents = function () {
				switch (model.$) {
					case 5:
						var ll = model.a;
						var _v2 = ll.y;
						var alp = _v2;
						return alp.bB;
					case 6:
						var la = model.a;
						return la.bB;
					default:
						return _List_Nil;
				}
			}();
			var fallbackScroll = A2(
				$elm$core$Maybe$andThen,
				$elm$core$Tuple$second,
				$elm$core$List$head(
					$elm$core$List$reverse(modelParents)));
			var fallbackMsg = $author$project$Main$Album(
				A2(
					$author$project$Main$ViewList,
					{a_: root, dI: viewport.dI, bB: _List_Nil},
					fallbackScroll));
			return $elm$core$Maybe$Just(
				A7(
					$author$project$Main$navFrom,
					baseUrl,
					model,
					viewport,
					root,
					_List_Nil,
					A2($author$project$Utils$DebugSupport$log, 'pathsToCmdImpl passing paths to navFrom', paths),
					fallbackMsg));
		}
	});
var $author$project$Main$pathsToCmd = F2(
	function (model, mPaths) {
		if (mPaths.$ === 1) {
			return A2($author$project$Utils$DebugSupport$log, 'pathsToCmd has no paths', $elm$core$Maybe$Nothing);
		} else {
			var paths = mPaths.a;
			switch (model.$) {
				case 0:
					return $elm$core$Maybe$Nothing;
				case 1:
					return $elm$core$Maybe$Nothing;
				case 2:
					return $elm$core$Maybe$Nothing;
				case 3:
					return $elm$core$Maybe$Nothing;
				case 4:
					return A2($author$project$Utils$DebugSupport$log, 'pathsToCmd LoadError, ignore', $elm$core$Maybe$Nothing);
				case 5:
					var ll = model.a;
					var _v2 = ll.y;
					var alp = _v2;
					return A2(
						$author$project$Utils$DebugSupport$log,
						'pathsToCmd for LoadedList',
						A5(
							$author$project$Main$pathsToCmdImpl,
							ll.B,
							model,
							{dI: alp.dI, aT: ll.aT},
							A2(
								$elm$core$List$cons,
								alp.a_,
								A2($elm$core$List$map, $elm$core$Tuple$first, alp.bB)),
							paths));
				default:
					var la = model.a;
					return A2(
						$author$project$Utils$DebugSupport$log,
						'pathsToCmd for LoadedAlbum',
						A5(
							$author$project$Main$pathsToCmdImpl,
							la.B,
							model,
							$author$project$AlbumPage$pageSize(la.j),
							A2($elm$core$List$map, $elm$core$Tuple$first, la.bB),
							paths));
			}
		}
	});
var $author$project$AlbumStyles$rootDivId = 'rootDiv';
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Utils$ViewportUtils$scrollToTop = F2(
	function (okMsg, errMsg) {
		return A2(
			$elm$core$Task$attempt,
			A2(
				$author$project$Utils$ResultUtils$either,
				function (_v0) {
					return okMsg;
				},
				function (_v1) {
					return errMsg($author$project$AlbumStyles$rootDivId);
				}),
			A3($elm$browser$Browser$Dom$setViewportOf, $author$project$AlbumStyles$rootDivId, 0, 0));
	});
var $author$project$Utils$TouchUtils$ZoomBridge = function (a) {
	return {$: 0, a: a};
};
var $author$project$Utils$TouchUtils$ZoomCurrent = function (a) {
	return {$: 1, a: a};
};
var $author$project$Utils$TouchUtils$ZoomState = function (a) {
	return {$: 2, a: a};
};
var $author$project$Utils$TouchUtils$cumScale = function (z) {
	var _v0 = z.an;
	if (_v0.$ === 1) {
		return z.bb;
	} else {
		var pz = _v0.a;
		return z.bb * $author$project$Utils$TouchUtils$cumScale(pz);
	}
};
var $author$project$Utils$TouchUtils$ZoomOffset = $elm$core$Basics$identity;
var $author$project$Utils$TouchUtils$coords = function (t) {
	var y = t.cs.b;
	var x = t.cs.a;
	return _Utils_Tuple2(x, y);
};
var $author$project$Utils$TouchUtils$center = F2(
	function (t1, t2) {
		var avg = F2(
			function (a, b) {
				return (a + b) / 2;
			});
		var _v0 = _Utils_Tuple2(
			$author$project$Utils$TouchUtils$coords(t1),
			$author$project$Utils$TouchUtils$coords(t2));
		var _v1 = _v0.a;
		var x1 = _v1.a;
		var y1 = _v1.b;
		var _v2 = _v0.b;
		var x2 = _v2.a;
		var y2 = _v2.b;
		return _Utils_Tuple2(
			A2(avg, x1, x2),
			A2(avg, y1, y2));
	});
var $elm$core$Basics$pow = _Basics_pow;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$Utils$TouchUtils$dist = F2(
	function (t1, t2) {
		var _v0 = _Utils_Tuple2(
			$author$project$Utils$TouchUtils$coords(t1),
			$author$project$Utils$TouchUtils$coords(t2));
		var _v1 = _v0.a;
		var x1 = _v1.a;
		var y1 = _v1.b;
		var _v2 = _v0.b;
		var x2 = _v2.a;
		var y2 = _v2.b;
		return $elm$core$Basics$sqrt(
			A2($elm$core$Basics$pow, y2 - y1, 2) + A2($elm$core$Basics$pow, x2 - x1, 2));
	});
var $author$project$Utils$TouchUtils$getCurrentData = function (zoomData) {
	getCurrentData:
	while (true) {
		if (!zoomData.$) {
			var zData = zoomData.a;
			var $temp$zoomData = zData;
			zoomData = $temp$zoomData;
			continue getCurrentData;
		} else {
			var currentData = zoomData.a;
			return currentData;
		}
	}
};
var $elm_community$basics_extra$Basics$Extra$uncurry = F2(
	function (f, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		return A2(f, a, b);
	});
var $author$project$Utils$TouchUtils$getZoomOffset = function (zoomData) {
	var startSize = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$dist, zoomData.eM);
	var prevOffset = A2(
		$elm$core$Maybe$map,
		$author$project$Utils$TouchUtils$getZoomOffset,
		A2($elm$core$Maybe$map, $author$project$Utils$TouchUtils$getCurrentData, zoomData.an));
	var endSize = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$dist, zoomData.N);
	var scale = endSize / startSize;
	var _v0 = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$center, zoomData.eM);
	var startX = _v0.a;
	var startY = _v0.b;
	var _v1 = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$center, zoomData.N);
	var endX = _v1.a;
	var endY = _v1.b;
	return {
		ek: _Utils_Tuple2(endX - startX, endY - startY),
		an: prevOffset,
		bb: scale,
		dr: _Utils_Tuple2(startX, startY)
	};
};
var $author$project$Utils$TouchUtils$endZoom = function (oldState) {
	switch (oldState.$) {
		case 0:
			return oldState;
		case 1:
			return oldState;
		default:
			var zoomData = oldState.a;
			if (!zoomData.$) {
				var bridgeData = zoomData.a;
				return $author$project$Utils$TouchUtils$ZoomState(
					$author$project$Utils$TouchUtils$ZoomBridge(bridgeData));
			} else {
				var zData = zoomData.a;
				var _v2 = $author$project$Utils$TouchUtils$getZoomOffset(zData);
				var zo = _v2;
				var _v3 = $author$project$Utils$TouchUtils$cumScale(zo) > 1;
				if (_v3) {
					return $author$project$Utils$TouchUtils$ZoomState(
						$author$project$Utils$TouchUtils$ZoomBridge(
							$author$project$Utils$TouchUtils$ZoomCurrent(zData)));
				} else {
					return $author$project$Utils$TouchUtils$NoState;
				}
			}
	}
};
var $author$project$Utils$Loading$Marked = function (a) {
	return {$: 4, a: a};
};
var $author$project$Utils$Loading$markOne = F2(
	function (_v0, url) {
		var mm = _v0;
		var _v1 = A2(
			$elm$core$Dict$get,
			$elm$url$Url$toString(url),
			mm.z);
		if (_v1.$ === 1) {
			return mm;
		} else {
			var m = _v1.a;
			var _v2 = m.p;
			if (_v2.$ === 4) {
				return mm;
			} else {
				return _Utils_update(
					mm,
					{
						z: A3(
							$elm$core$Dict$insert,
							$elm$url$Url$toString(url),
							_Utils_update(
								m,
								{
									p: $author$project$Utils$Loading$Marked(m.p)
								}),
							mm.z)
					});
			}
		}
	});
var $author$project$Utils$ListUtils$shiftLeft = F3(
	function (xLefts, x, xRights) {
		if (!xLefts.b) {
			return _Utils_Tuple3(xLefts, x, xRights);
		} else {
			if (!xLefts.b.b) {
				var xLeft = xLefts.a;
				return _Utils_Tuple3(
					_List_Nil,
					xLeft,
					A2($elm$core$List$cons, x, xRights));
			} else {
				var xLeft = xLefts.a;
				var xLeftRights = xLefts.b;
				var _v1 = A3($author$project$Utils$ListUtils$shiftLeft, xLeftRights, x, xRights);
				var xLRss = _v1.a;
				var xss = _v1.b;
				var xRss = _v1.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, xLeft, xLRss),
					xss,
					xRss);
			}
		}
	});
var $author$project$Utils$ListUtils$shiftRight = F3(
	function (xLefts, x, xRights) {
		if (!xRights.b) {
			return _Utils_Tuple3(xLefts, x, xRights);
		} else {
			var xRight = xRights.a;
			var xRightRights = xRights.b;
			return _Utils_Tuple3(
				_Utils_ap(
					xLefts,
					_List_fromArray(
						[x])),
				xRight,
				xRightRights);
		}
	});
var $author$project$ProgressiveImage$Timeout = function (a) {
	return {$: 2, a: a};
};
var $andrewMacmurray$elm_delay$Delay$Duration = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Process$sleep = _Process_sleep;
var $andrewMacmurray$elm_delay$Delay$after_ = F2(
	function (time, msg) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always(msg),
			$elm$core$Process$sleep(time));
	});
var $andrewMacmurray$elm_delay$Delay$Minute = 2;
var $andrewMacmurray$elm_delay$Delay$Second = 1;
var $andrewMacmurray$elm_delay$Delay$toMillis = function (_v0) {
	var t = _v0.a;
	var u = _v0.b;
	switch (u) {
		case 0:
			return t;
		case 1:
			return 1000 * t;
		case 2:
			return $andrewMacmurray$elm_delay$Delay$toMillis(
				A2($andrewMacmurray$elm_delay$Delay$Duration, 60 * t, 1));
		default:
			return $andrewMacmurray$elm_delay$Delay$toMillis(
				A2($andrewMacmurray$elm_delay$Delay$Duration, 60 * t, 2));
	}
};
var $andrewMacmurray$elm_delay$Delay$after = F3(
	function (time, unit, msg) {
		return A2(
			$andrewMacmurray$elm_delay$Delay$after_,
			$andrewMacmurray$elm_delay$Delay$toMillis(
				A2($andrewMacmurray$elm_delay$Delay$Duration, time, unit)),
			msg);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $mdgriffith$elm_style_animation$Animation$Model$refreshTiming = F2(
	function (now, timing) {
		var dt = $elm$time$Time$posixToMillis(now) - $elm$time$Time$posixToMillis(timing.N);
		return {
			N: now,
			dX: ((dt > 34) || (!$elm$time$Time$posixToMillis(timing.N))) ? $elm$time$Time$millisToPosix(
				$elm$core$Basics$round(16.666)) : $elm$time$Time$millisToPosix(dt)
		};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Loop = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Model$Repeat = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $mdgriffith$elm_style_animation$Animation$Model$Step = {$: 0};
var $mdgriffith$elm_style_animation$Animation$Model$Wait = function (a) {
	return {$: 4, a: a};
};
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $mdgriffith$elm_style_animation$Animation$Model$isCmdDone = function (cmd) {
	var motionDone = function (motion) {
		return (!motion.e4) && _Utils_eq(motion.eu, motion.eS);
	};
	switch (cmd.$) {
		case 0:
			var m1 = cmd.a;
			var m2 = cmd.b;
			return motionDone(m1) && motionDone(m2);
		case 1:
			var m1 = cmd.a;
			var m2 = cmd.b;
			return motionDone(m1) && motionDone(m2);
		case 2:
			var m1 = cmd.a;
			var m2 = cmd.b;
			return motionDone(m1) && motionDone(m2);
		case 3:
			var m1 = cmd.a;
			var m2 = cmd.b;
			return motionDone(m1) && motionDone(m2);
		case 4:
			var motion = cmd.a;
			return motionDone(motion);
		case 5:
			var motion = cmd.a;
			return motionDone(motion);
		case 6:
			var motion = cmd.a;
			return motionDone(motion);
		case 7:
			var motion = cmd.a;
			return motionDone(motion);
		case 8:
			var control1 = cmd.a.a2;
			var control2 = cmd.a.a3;
			var point = cmd.a.V;
			return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
		case 9:
			var control1 = cmd.a.a2;
			var control2 = cmd.a.a3;
			var point = cmd.a.V;
			return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
		case 10:
			var control = cmd.a.a1;
			var point = cmd.a.V;
			return motionDone(control.a) && (motionDone(control.b) && (motionDone(point.a) && motionDone(point.b)));
		case 11:
			var control = cmd.a.a1;
			var point = cmd.a.V;
			return motionDone(control.a) && (motionDone(control.b) && (motionDone(point.a) && motionDone(point.b)));
		case 12:
			var coords = cmd.a;
			return A2(
				$elm$core$List$all,
				function (_v1) {
					var x = _v1.a;
					var y = _v1.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 13:
			var coords = cmd.a;
			return A2(
				$elm$core$List$all,
				function (_v2) {
					var x = _v2.a;
					var y = _v2.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 14:
			var coords = cmd.a;
			return A2(
				$elm$core$List$all,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 15:
			var coords = cmd.a;
			return A2(
				$elm$core$List$all,
				function (_v4) {
					var x = _v4.a;
					var y = _v4.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 16:
			var arc = cmd.a;
			return motionDone(arc.cc) && (motionDone(arc.cd) && (motionDone(arc.eA) && (motionDone(arc.bc) && motionDone(arc.a4))));
		case 17:
			var arc = cmd.a;
			return motionDone(arc.cc) && (motionDone(arc.cd) && (motionDone(arc.eA) && (motionDone(arc.bc) && motionDone(arc.a4))));
		default:
			return true;
	}
};
var $mdgriffith$elm_style_animation$Animation$Model$isDone = function (property) {
	var motionDone = function (motion) {
		var runningInterpolation = A2($elm$core$Maybe$withDefault, motion.aM, motion.d6);
		switch (runningInterpolation.$) {
			case 0:
				return (!motion.e4) && _Utils_eq(motion.eu, motion.eS);
			case 1:
				var eased = runningInterpolation.a;
				return (eased.bD === 1) || ((!eased.bD) && _Utils_eq(motion.eu, motion.eS));
			default:
				var speed = runningInterpolation.a;
				return _Utils_eq(motion.eu, motion.eS);
		}
	};
	switch (property.$) {
		case 0:
			return true;
		case 1:
			var m1 = property.b;
			var m2 = property.c;
			var m3 = property.d;
			var m4 = property.e;
			return A2(
				$elm$core$List$all,
				motionDone,
				_List_fromArray(
					[m1, m2, m3, m4]));
		case 2:
			var shadow = property.c;
			return A2(
				$elm$core$List$all,
				motionDone,
				_List_fromArray(
					[shadow.S, shadow.T, shadow.eK, shadow.P, shadow.L, shadow.J, shadow.F, shadow.E]));
		case 3:
			var m1 = property.b;
			return motionDone(m1);
		case 4:
			var m1 = property.b;
			var m2 = property.c;
			return motionDone(m1) && motionDone(m2);
		case 5:
			var m1 = property.b;
			var m2 = property.c;
			var m3 = property.d;
			return A2(
				$elm$core$List$all,
				motionDone,
				_List_fromArray(
					[m1, m2, m3]));
		case 6:
			var m1 = property.b;
			var m2 = property.c;
			var m3 = property.d;
			var m4 = property.e;
			return A2(
				$elm$core$List$all,
				motionDone,
				_List_fromArray(
					[m1, m2, m3, m4]));
		case 7:
			var m1 = property.b;
			return motionDone(m1);
		case 8:
			var ms = property.a;
			return A2(
				$elm$core$List$all,
				function (_v1) {
					var x = _v1.a;
					var y = _v1.b;
					return motionDone(x) && motionDone(y);
				},
				ms);
		default:
			var cmds = property.a;
			return A2($elm$core$List$all, $mdgriffith$elm_style_animation$Animation$Model$isCmdDone, cmds);
	}
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $mdgriffith$elm_style_animation$Animation$Model$matchPoints = F2(
	function (points1, points2) {
		var diff = $elm$core$List$length(points1) - $elm$core$List$length(points2);
		if (diff > 0) {
			var _v0 = $elm$core$List$head(
				$elm$core$List$reverse(points2));
			if (_v0.$ === 1) {
				return _Utils_Tuple2(points1, points2);
			} else {
				var last2 = _v0.a;
				return _Utils_Tuple2(
					points1,
					_Utils_ap(
						points2,
						A2(
							$elm$core$List$repeat,
							$elm$core$Basics$abs(diff),
							last2)));
			}
		} else {
			if (diff < 0) {
				var _v1 = $elm$core$List$head(
					$elm$core$List$reverse(points1));
				if (_v1.$ === 1) {
					return _Utils_Tuple2(points1, points2);
				} else {
					var last1 = _v1.a;
					return _Utils_Tuple2(
						_Utils_ap(
							points1,
							A2(
								$elm$core$List$repeat,
								$elm$core$Basics$abs(diff),
								last1)),
						points2);
				}
			} else {
				return _Utils_Tuple2(points1, points2);
			}
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$setPathTarget = F2(
	function (cmd, targetCmd) {
		var setMotionTarget = F2(
			function (motion, targetMotion) {
				var _v27 = motion.aM;
				if (_v27.$ === 1) {
					var ease = _v27.a;
					return _Utils_update(
						motion,
						{
							aM: $mdgriffith$elm_style_animation$Animation$Model$Easing(
								_Utils_update(
									ease,
									{eM: motion.eu})),
							eS: targetMotion.eu
						});
				} else {
					return _Utils_update(
						motion,
						{eS: targetMotion.eu});
				}
			});
		switch (cmd.$) {
			case 0:
				var m1 = cmd.a;
				var m2 = cmd.b;
				if (!targetCmd.$) {
					var t1 = targetCmd.a;
					var t2 = targetCmd.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$Move,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2));
				} else {
					return cmd;
				}
			case 1:
				var m1 = cmd.a;
				var m2 = cmd.b;
				if (targetCmd.$ === 1) {
					var t1 = targetCmd.a;
					var t2 = targetCmd.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$MoveTo,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2));
				} else {
					return cmd;
				}
			case 2:
				var m1 = cmd.a;
				var m2 = cmd.b;
				if (targetCmd.$ === 2) {
					var t1 = targetCmd.a;
					var t2 = targetCmd.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$Line,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2));
				} else {
					return cmd;
				}
			case 3:
				var m1 = cmd.a;
				var m2 = cmd.b;
				if (targetCmd.$ === 3) {
					var t1 = targetCmd.a;
					var t2 = targetCmd.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$LineTo,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2));
				} else {
					return cmd;
				}
			case 4:
				var m1 = cmd.a;
				if (targetCmd.$ === 4) {
					var t1 = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Horizontal(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 5:
				var m1 = cmd.a;
				if (targetCmd.$ === 5) {
					var t1 = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 6:
				var m1 = cmd.a;
				if (targetCmd.$ === 6) {
					var t1 = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Vertical(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 7:
				var m1 = cmd.a;
				if (targetCmd.$ === 7) {
					var t1 = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 8:
				var points = cmd.a;
				if (targetCmd.$ === 8) {
					var targets = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Curve(
						{
							a2: _Utils_Tuple2(
								A2(setMotionTarget, points.a2.a, targets.a2.a),
								A2(setMotionTarget, points.a2.b, targets.a2.b)),
							a3: _Utils_Tuple2(
								A2(setMotionTarget, points.a3.a, targets.a3.a),
								A2(setMotionTarget, points.a3.b, targets.a3.b)),
							V: _Utils_Tuple2(
								A2(setMotionTarget, points.V.a, targets.V.a),
								A2(setMotionTarget, points.V.b, targets.V.b))
						});
				} else {
					return cmd;
				}
			case 9:
				var points = cmd.a;
				if (targetCmd.$ === 9) {
					var targets = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
						{
							a2: _Utils_Tuple2(
								A2(setMotionTarget, points.a2.a, targets.a2.a),
								A2(setMotionTarget, points.a2.b, targets.a2.b)),
							a3: _Utils_Tuple2(
								A2(setMotionTarget, points.a3.a, targets.a3.a),
								A2(setMotionTarget, points.a3.b, targets.a3.b)),
							V: _Utils_Tuple2(
								A2(setMotionTarget, points.V.a, targets.V.a),
								A2(setMotionTarget, points.V.b, targets.V.b))
						});
				} else {
					return cmd;
				}
			case 10:
				var points = cmd.a;
				if (targetCmd.$ === 10) {
					var targets = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
						{
							a1: _Utils_Tuple2(
								A2(setMotionTarget, points.a1.a, targets.a1.a),
								A2(setMotionTarget, points.a1.b, targets.a1.b)),
							V: _Utils_Tuple2(
								A2(setMotionTarget, points.V.a, targets.V.a),
								A2(setMotionTarget, points.V.b, targets.V.b))
						});
				} else {
					return cmd;
				}
			case 11:
				var points = cmd.a;
				if (targetCmd.$ === 11) {
					var targets = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
						{
							a1: _Utils_Tuple2(
								A2(setMotionTarget, points.a1.a, targets.a1.a),
								A2(setMotionTarget, points.a1.b, targets.a1.b)),
							V: _Utils_Tuple2(
								A2(setMotionTarget, points.V.a, targets.V.a),
								A2(setMotionTarget, points.V.b, targets.V.b))
						});
				} else {
					return cmd;
				}
			case 12:
				var coords = cmd.a;
				if (targetCmd.$ === 12) {
					var targetCoords = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
						A3(
							$elm$core$List$map2,
							F2(
								function (_v14, _v15) {
									var x1 = _v14.a;
									var y1 = _v14.b;
									var x2 = _v15.a;
									var y2 = _v15.b;
									return _Utils_Tuple2(
										A2(setMotionTarget, x1, x2),
										A2(setMotionTarget, y1, y2));
								}),
							coords,
							targetCoords));
				} else {
					return cmd;
				}
			case 13:
				var coords = cmd.a;
				if (targetCmd.$ === 13) {
					var targetCoords = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
						A3(
							$elm$core$List$map2,
							F2(
								function (_v17, _v18) {
									var x1 = _v17.a;
									var y1 = _v17.b;
									var x2 = _v18.a;
									var y2 = _v18.b;
									return _Utils_Tuple2(
										A2(setMotionTarget, x1, x2),
										A2(setMotionTarget, y1, y2));
								}),
							coords,
							targetCoords));
				} else {
					return cmd;
				}
			case 14:
				var coords = cmd.a;
				if (targetCmd.$ === 14) {
					var targetCoords = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Smooth(
						A3(
							$elm$core$List$map2,
							F2(
								function (_v20, _v21) {
									var x1 = _v20.a;
									var y1 = _v20.b;
									var x2 = _v21.a;
									var y2 = _v21.b;
									return _Utils_Tuple2(
										A2(setMotionTarget, x1, x2),
										A2(setMotionTarget, y1, y2));
								}),
							coords,
							targetCoords));
				} else {
					return cmd;
				}
			case 15:
				var coords = cmd.a;
				if (targetCmd.$ === 15) {
					var targetCoords = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
						A3(
							$elm$core$List$map2,
							F2(
								function (_v23, _v24) {
									var x1 = _v23.a;
									var y1 = _v23.b;
									var x2 = _v24.a;
									var y2 = _v24.b;
									return _Utils_Tuple2(
										A2(setMotionTarget, x1, x2),
										A2(setMotionTarget, y1, y2));
								}),
							coords,
							targetCoords));
				} else {
					return cmd;
				}
			case 16:
				var arc = cmd.a;
				if (targetCmd.$ === 16) {
					var target = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
						function () {
							var y = arc.cd;
							var x = arc.cc;
							var startAngle = arc.bc;
							var radius = arc.eA;
							var endAngle = arc.a4;
							return _Utils_update(
								arc,
								{
									a4: A2(setMotionTarget, endAngle, target.a4),
									eA: A2(setMotionTarget, radius, target.eA),
									bc: A2(setMotionTarget, startAngle, target.bc),
									cc: A2(setMotionTarget, x, target.cc),
									cd: A2(setMotionTarget, y, target.cd)
								});
						}());
				} else {
					return cmd;
				}
			case 17:
				var arc = cmd.a;
				if (targetCmd.$ === 17) {
					var target = targetCmd.a;
					return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
						function () {
							var y = arc.cd;
							var x = arc.cc;
							var startAngle = arc.bc;
							var radius = arc.eA;
							var endAngle = arc.a4;
							return _Utils_update(
								arc,
								{
									a4: A2(setMotionTarget, endAngle, target.a4),
									eA: A2(setMotionTarget, radius, target.eA),
									bc: A2(setMotionTarget, startAngle, target.bc),
									cc: A2(setMotionTarget, x, target.cc),
									cd: A2(setMotionTarget, y, target.cd)
								});
						}());
				} else {
					return cmd;
				}
			default:
				return $mdgriffith$elm_style_animation$Animation$Model$Close;
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$setTarget = F3(
	function (overrideInterpolation, current, newTarget) {
		var setMotionTarget = F2(
			function (motion, targetMotion) {
				var newMotion = overrideInterpolation ? _Utils_update(
					motion,
					{
						d6: $elm$core$Maybe$Just(targetMotion.aM)
					}) : motion;
				var _v13 = newMotion.d6;
				if (_v13.$ === 1) {
					var _v14 = newMotion.aM;
					if (_v14.$ === 1) {
						var ease = _v14.a;
						return _Utils_update(
							newMotion,
							{
								aM: $mdgriffith$elm_style_animation$Animation$Model$Easing(
									_Utils_update(
										ease,
										{bD: 0, eM: motion.eu})),
								eS: targetMotion.eu
							});
					} else {
						return _Utils_update(
							newMotion,
							{eS: targetMotion.eu});
					}
				} else {
					var override = _v13.a;
					if (override.$ === 1) {
						var ease = override.a;
						return _Utils_update(
							newMotion,
							{
								d6: $elm$core$Maybe$Just(
									$mdgriffith$elm_style_animation$Animation$Model$Easing(
										_Utils_update(
											ease,
											{bD: 0, eM: motion.eu}))),
								eS: targetMotion.eu
							});
					} else {
						return _Utils_update(
							newMotion,
							{eS: targetMotion.eu});
					}
				}
			});
		switch (current.$) {
			case 0:
				var name = current.a;
				var value = current.b;
				return A2($mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
			case 1:
				var name = current.a;
				var m1 = current.b;
				var m2 = current.c;
				var m3 = current.d;
				var m4 = current.e;
				if (newTarget.$ === 1) {
					var t1 = newTarget.b;
					var t2 = newTarget.c;
					var t3 = newTarget.d;
					var t4 = newTarget.e;
					return A5(
						$mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
						name,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2),
						A2(setMotionTarget, m3, t3),
						A2(setMotionTarget, m4, t4));
				} else {
					return current;
				}
			case 2:
				var name = current.a;
				var inset = current.b;
				var shadow = current.c;
				if (newTarget.$ === 2) {
					var targetShadow = newTarget.c;
					return A3(
						$mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
						name,
						inset,
						{
							E: A2(setMotionTarget, shadow.E, targetShadow.E),
							F: A2(setMotionTarget, shadow.F, targetShadow.F),
							P: A2(setMotionTarget, shadow.P, targetShadow.P),
							J: A2(setMotionTarget, shadow.J, targetShadow.J),
							S: A2(setMotionTarget, shadow.S, targetShadow.S),
							T: A2(setMotionTarget, shadow.T, targetShadow.T),
							L: A2(setMotionTarget, shadow.L, targetShadow.L),
							eK: A2(setMotionTarget, shadow.eK, targetShadow.eK)
						});
				} else {
					return current;
				}
			case 3:
				var name = current.a;
				var m1 = current.b;
				if (newTarget.$ === 3) {
					var t1 = newTarget.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$Property,
						name,
						A2(setMotionTarget, m1, t1));
				} else {
					return current;
				}
			case 4:
				var name = current.a;
				var m1 = current.b;
				var m2 = current.c;
				if (newTarget.$ === 4) {
					var t1 = newTarget.b;
					var t2 = newTarget.c;
					return A3(
						$mdgriffith$elm_style_animation$Animation$Model$Property2,
						name,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2));
				} else {
					return current;
				}
			case 5:
				var name = current.a;
				var m1 = current.b;
				var m2 = current.c;
				var m3 = current.d;
				if (newTarget.$ === 5) {
					var t1 = newTarget.b;
					var t2 = newTarget.c;
					var t3 = newTarget.d;
					return A4(
						$mdgriffith$elm_style_animation$Animation$Model$Property3,
						name,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2),
						A2(setMotionTarget, m3, t3));
				} else {
					return current;
				}
			case 6:
				var name = current.a;
				var m1 = current.b;
				var m2 = current.c;
				var m3 = current.d;
				var m4 = current.e;
				if (newTarget.$ === 6) {
					var t1 = newTarget.b;
					var t2 = newTarget.c;
					var t3 = newTarget.d;
					var t4 = newTarget.e;
					return A5(
						$mdgriffith$elm_style_animation$Animation$Model$Property4,
						name,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2),
						A2(setMotionTarget, m3, t3),
						A2(setMotionTarget, m4, t4));
				} else {
					return current;
				}
			case 7:
				var name = current.a;
				var m1 = current.b;
				if (newTarget.$ === 7) {
					var t1 = newTarget.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
						name,
						A2(setMotionTarget, m1, t1));
				} else {
					return current;
				}
			case 8:
				var currentPts = current.a;
				if (newTarget.$ === 8) {
					var targetPts = newTarget.a;
					var _v9 = A2($mdgriffith$elm_style_animation$Animation$Model$matchPoints, currentPts, targetPts);
					var m1s = _v9.a;
					var m2s = _v9.b;
					return $mdgriffith$elm_style_animation$Animation$Model$Points(
						A3(
							$elm$core$List$map2,
							F2(
								function (_v10, _v11) {
									var x1 = _v10.a;
									var y1 = _v10.b;
									var x2 = _v11.a;
									var y2 = _v11.b;
									return _Utils_Tuple2(
										A2(setMotionTarget, x1, x2),
										A2(setMotionTarget, y1, y2));
								}),
							m1s,
							m2s));
				} else {
					return current;
				}
			default:
				var cmds = current.a;
				if (newTarget.$ === 9) {
					var targets = newTarget.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Path(
						A3($elm$core$List$map2, $mdgriffith$elm_style_animation$Animation$Model$setPathTarget, cmds, targets));
				} else {
					return current;
				}
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$zipPropertiesGreedy = F2(
	function (initialProps, newTargetProps) {
		var propertyMatch = F2(
			function (prop1, prop2) {
				return _Utils_eq(
					$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop1),
					$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop2));
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, _v2) {
					var stackA = _v2.a;
					var stackB = _v2.b;
					var result = _v2.c;
					var _v3 = $elm$core$List$head(stackA);
					if (_v3.$ === 1) {
						return _Utils_Tuple3(stackA, stackB, result);
					} else {
						var a = _v3.a;
						var _v4 = A2(
							$elm$core$List$partition,
							propertyMatch(a),
							stackB);
						var matchingBs = _v4.a;
						var nonMatchingBs = _v4.b;
						return _Utils_Tuple3(
							A2($elm$core$List$drop, 1, stackA),
							function () {
								if (!matchingBs.b) {
									return nonMatchingBs;
								} else {
									var b = matchingBs.a;
									var remainingBs = matchingBs.b;
									return _Utils_ap(remainingBs, nonMatchingBs);
								}
							}(),
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									a,
									$elm$core$List$head(matchingBs)),
								result));
					}
				}),
			_Utils_Tuple3(initialProps, newTargetProps, _List_Nil),
			A2(
				$elm$core$List$repeat,
				$elm$core$List$length(initialProps),
				0));
		var warnings = _v0.b;
		var props = _v0.c;
		var _v6 = warnings;
		return $elm$core$List$reverse(props);
	});
var $mdgriffith$elm_style_animation$Animation$Model$startTowards = F3(
	function (overrideInterpolation, current, target) {
		return A2(
			$elm$core$List$filterMap,
			function (propPair) {
				if (!propPair.b.$) {
					var cur = propPair.a;
					var to = propPair.b.a;
					return $elm$core$Maybe$Just(
						A3($mdgriffith$elm_style_animation$Animation$Model$setTarget, overrideInterpolation, cur, to));
				} else {
					var prop = propPair.a;
					var _v1 = propPair.b;
					return $elm$core$Maybe$Just(prop);
				}
			},
			A2($mdgriffith$elm_style_animation$Animation$Model$zipPropertiesGreedy, current, target));
	});
var $mdgriffith$elm_style_animation$Animation$Model$tolerance = 0.01;
var $elm$core$Basics$truncate = _Basics_truncate;
var $mdgriffith$elm_style_animation$Animation$Model$vTolerance = 0.1;
var $mdgriffith$elm_style_animation$Animation$Model$stepInterpolation = F2(
	function (posix, motion) {
		var interpolationToUse = A2($elm$core$Maybe$withDefault, motion.aM, motion.d6);
		var dtms = $elm$time$Time$posixToMillis(posix);
		switch (interpolationToUse.$) {
			case 2:
				var perSecond = interpolationToUse.a.da;
				var _v1 = function () {
					if (_Utils_cmp(motion.eu, motion.eS) < 0) {
						var _new = motion.eu + (perSecond * (dtms / 1000));
						return _Utils_Tuple2(
							_new,
							_Utils_cmp(_new, motion.eS) > -1);
					} else {
						var _new = motion.eu - (perSecond * (dtms / 1000));
						return _Utils_Tuple2(
							_new,
							_Utils_cmp(_new, motion.eS) < 1);
					}
				}();
				var newPos = _v1.a;
				var finished = _v1.b;
				return finished ? _Utils_update(
					motion,
					{eu: motion.eS, e4: 0.0}) : _Utils_update(
					motion,
					{eu: newPos, e4: perSecond * 1000});
			case 0:
				var stiffness = interpolationToUse.a.ds;
				var damping = interpolationToUse.a.cw;
				var fspring = stiffness * (motion.eS - motion.eu);
				var fdamper = ((-1) * damping) * motion.e4;
				var dt = dtms / 1000;
				var a = fspring + fdamper;
				var newVelocity = motion.e4 + (a * dt);
				var newPos = motion.eu + (newVelocity * dt);
				var dx = $elm$core$Basics$abs(motion.eS - newPos);
				return ((_Utils_cmp(dx, $mdgriffith$elm_style_animation$Animation$Model$tolerance) < 0) && (_Utils_cmp(
					$elm$core$Basics$abs(newVelocity),
					$mdgriffith$elm_style_animation$Animation$Model$vTolerance) < 0)) ? _Utils_update(
					motion,
					{eu: motion.eS, e4: 0.0}) : _Utils_update(
					motion,
					{eu: newPos, e4: newVelocity});
			default:
				var progress = interpolationToUse.a.bD;
				var duration = interpolationToUse.a.bO;
				var ease = interpolationToUse.a.bP;
				var start = interpolationToUse.a.eM;
				var durationMs = $elm$time$Time$posixToMillis(duration);
				var newProgress = (((dtms / durationMs) + progress) < 1) ? ((dtms / durationMs) + progress) : 1;
				var eased = ease(newProgress);
				var distance = motion.eS - start;
				var newPos = ((((eased * distance) + start) * 10000) | 0) / 10000;
				var newVelocity = (newProgress === 1) ? 0 : ((newPos - motion.eu) / dtms);
				var _v2 = motion.d6;
				if (_v2.$ === 1) {
					return _Utils_update(
						motion,
						{
							aM: $mdgriffith$elm_style_animation$Animation$Model$Easing(
								{bO: duration, bP: ease, bD: newProgress, eM: start}),
							eu: newPos,
							e4: newVelocity
						});
				} else {
					var override = _v2.a;
					return _Utils_update(
						motion,
						{
							d6: $elm$core$Maybe$Just(
								$mdgriffith$elm_style_animation$Animation$Model$Easing(
									{bO: duration, bP: ease, bD: newProgress, eM: start})),
							eu: newPos,
							e4: newVelocity
						});
				}
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$stepPath = F2(
	function (dt, cmd) {
		var stepCoords = function (coords) {
			return A2(
				$elm$core$List$map,
				function (_v1) {
					var x = _v1.a;
					var y = _v1.b;
					return _Utils_Tuple2(
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, x),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, y));
				},
				coords);
		};
		switch (cmd.$) {
			case 0:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$Move,
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 1:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$MoveTo,
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 2:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$Line,
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 3:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					$mdgriffith$elm_style_animation$Animation$Model$LineTo,
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 4:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Horizontal(
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 5:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 6:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Vertical(
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 7:
				var motion = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
					A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 8:
				var control1 = cmd.a.a2;
				var control2 = cmd.a.a3;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$Curve(
					{
						a2: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)),
						a3: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)),
						V: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 9:
				var control1 = cmd.a.a2;
				var control2 = cmd.a.a3;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
					{
						a2: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)),
						a3: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)),
						V: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 10:
				var control = cmd.a.a1;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
					{
						a1: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)),
						V: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 11:
				var control = cmd.a.a1;
				var point = cmd.a.V;
				return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
					{
						a1: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)),
						V: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 12:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
					stepCoords(coords));
			case 13:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
					stepCoords(coords));
			case 14:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$Smooth(
					stepCoords(coords));
			case 15:
				var coords = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
					stepCoords(coords));
			case 16:
				var arc = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
					_Utils_update(
						arc,
						{
							a4: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.a4),
							eA: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.eA),
							bc: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.bc),
							cc: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.cc),
							cd: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.cd)
						}));
			case 17:
				var arc = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
					_Utils_update(
						arc,
						{
							a4: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.a4),
							eA: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.eA),
							bc: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.bc),
							cc: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.cc),
							cd: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.cd)
						}));
			default:
				return $mdgriffith$elm_style_animation$Animation$Model$Close;
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$step = F2(
	function (dt, props) {
		var stepProp = function (property) {
			switch (property.$) {
				case 0:
					var name = property.a;
					var value = property.b;
					return A2($mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
				case 3:
					var name = property.a;
					var motion = property.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$Property,
						name,
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
				case 4:
					var name = property.a;
					var motion1 = property.b;
					var motion2 = property.c;
					return A3(
						$mdgriffith$elm_style_animation$Animation$Model$Property2,
						name,
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2));
				case 5:
					var name = property.a;
					var motion1 = property.b;
					var motion2 = property.c;
					var motion3 = property.d;
					return A4(
						$mdgriffith$elm_style_animation$Animation$Model$Property3,
						name,
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion3));
				case 6:
					var name = property.a;
					var motion1 = property.b;
					var motion2 = property.c;
					var motion3 = property.d;
					var motion4 = property.e;
					return A5(
						$mdgriffith$elm_style_animation$Animation$Model$Property4,
						name,
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion3),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion4));
				case 7:
					var name = property.a;
					var motion = property.b;
					return A2(
						$mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
						name,
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
				case 1:
					var name = property.a;
					var red = property.b;
					var green = property.c;
					var blue = property.d;
					var alpha = property.e;
					return A5(
						$mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
						name,
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, red),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, green),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, blue),
						A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, alpha));
				case 2:
					var name = property.a;
					var inset = property.b;
					var shadow = property.c;
					return A3(
						$mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
						name,
						inset,
						{
							E: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.E),
							F: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.F),
							P: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.P),
							J: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.J),
							S: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.S),
							T: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.T),
							L: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.L),
							eK: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.eK)
						});
				case 8:
					var points = property.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Points(
						A2(
							$elm$core$List$map,
							function (_v1) {
								var x = _v1.a;
								var y = _v1.b;
								return _Utils_Tuple2(
									A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, x),
									A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, y));
							},
							points));
				default:
					var cmds = property.a;
					return $mdgriffith$elm_style_animation$Animation$Model$Path(
						A2(
							$elm$core$List$map,
							$mdgriffith$elm_style_animation$Animation$Model$stepPath(dt),
							cmds));
			}
		};
		return A2($elm$core$List$map, stepProp, props);
	});
var $mdgriffith$elm_style_animation$Animation$Model$alreadyThere = F2(
	function (current, target) {
		return A2(
			$elm$core$List$all,
			$mdgriffith$elm_style_animation$Animation$Model$isDone,
			A2(
				$mdgriffith$elm_style_animation$Animation$Model$step,
				$elm$time$Time$millisToPosix(0),
				A3($mdgriffith$elm_style_animation$Animation$Model$startTowards, false, current, target)));
	});
var $mdgriffith$elm_style_animation$Animation$Model$replaceProps = F2(
	function (props, replacements) {
		var replacementNames = A2($elm$core$List$map, $mdgriffith$elm_style_animation$Animation$Model$propertyName, replacements);
		var removed = A2(
			$elm$core$List$filter,
			function (prop) {
				return !A2(
					$elm$core$List$member,
					$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
					replacementNames);
			},
			props);
		return _Utils_ap(removed, replacements);
	});
var $mdgriffith$elm_style_animation$Animation$Model$resolveSteps = F3(
	function (currentStyle, steps, dt) {
		resolveSteps:
		while (true) {
			var _v0 = $elm$core$List$head(steps);
			if (_v0.$ === 1) {
				return _Utils_Tuple3(currentStyle, _List_Nil, _List_Nil);
			} else {
				var currentStep = _v0.a;
				switch (currentStep.$) {
					case 4:
						var n = currentStep.a;
						if ($elm$time$Time$posixToMillis(n) <= 0) {
							var $temp$currentStyle = currentStyle,
								$temp$steps = A2($elm$core$List$drop, 1, steps),
								$temp$dt = dt;
							currentStyle = $temp$currentStyle;
							steps = $temp$steps;
							dt = $temp$dt;
							continue resolveSteps;
						} else {
							return _Utils_Tuple3(
								currentStyle,
								_List_Nil,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_style_animation$Animation$Model$Wait(
										$elm$time$Time$millisToPosix(
											$elm$time$Time$posixToMillis(n) - $elm$time$Time$posixToMillis(dt))),
									A2($elm$core$List$drop, 1, steps)));
						}
					case 5:
						var msg = currentStep.a;
						var _v2 = A3(
							$mdgriffith$elm_style_animation$Animation$Model$resolveSteps,
							currentStyle,
							A2($elm$core$List$drop, 1, steps),
							dt);
						var newStyle = _v2.a;
						var msgs = _v2.b;
						var remainingSteps = _v2.c;
						return _Utils_Tuple3(
							newStyle,
							A2($elm$core$List$cons, msg, msgs),
							remainingSteps);
					case 1:
						var target = currentStep.a;
						if (A2($mdgriffith$elm_style_animation$Animation$Model$alreadyThere, currentStyle, target)) {
							return _Utils_Tuple3(
								currentStyle,
								_List_Nil,
								A2($elm$core$List$drop, 1, steps));
						} else {
							var $temp$currentStyle = A3($mdgriffith$elm_style_animation$Animation$Model$startTowards, false, currentStyle, target),
								$temp$steps = A2(
								$elm$core$List$cons,
								$mdgriffith$elm_style_animation$Animation$Model$Step,
								A2($elm$core$List$drop, 1, steps)),
								$temp$dt = dt;
							currentStyle = $temp$currentStyle;
							steps = $temp$steps;
							dt = $temp$dt;
							continue resolveSteps;
						}
					case 2:
						var target = currentStep.a;
						if (A2($mdgriffith$elm_style_animation$Animation$Model$alreadyThere, currentStyle, target)) {
							return _Utils_Tuple3(
								currentStyle,
								_List_Nil,
								A2($elm$core$List$drop, 1, steps));
						} else {
							var $temp$currentStyle = A3($mdgriffith$elm_style_animation$Animation$Model$startTowards, true, currentStyle, target),
								$temp$steps = A2(
								$elm$core$List$cons,
								$mdgriffith$elm_style_animation$Animation$Model$Step,
								A2($elm$core$List$drop, 1, steps)),
								$temp$dt = dt;
							currentStyle = $temp$currentStyle;
							steps = $temp$steps;
							dt = $temp$dt;
							continue resolveSteps;
						}
					case 3:
						var props = currentStep.a;
						var $temp$currentStyle = A2($mdgriffith$elm_style_animation$Animation$Model$replaceProps, currentStyle, props),
							$temp$steps = A2($elm$core$List$drop, 1, steps),
							$temp$dt = dt;
						currentStyle = $temp$currentStyle;
						steps = $temp$steps;
						dt = $temp$dt;
						continue resolveSteps;
					case 0:
						var stepped = A2($mdgriffith$elm_style_animation$Animation$Model$step, dt, currentStyle);
						return A2($elm$core$List$all, $mdgriffith$elm_style_animation$Animation$Model$isDone, stepped) ? _Utils_Tuple3(
							A2(
								$elm$core$List$map,
								$mdgriffith$elm_style_animation$Animation$Model$mapToMotion(
									function (m) {
										return _Utils_update(
											m,
											{d6: $elm$core$Maybe$Nothing});
									}),
								stepped),
							_List_Nil,
							A2($elm$core$List$drop, 1, steps)) : _Utils_Tuple3(stepped, _List_Nil, steps);
					case 7:
						var substeps = currentStep.a;
						var $temp$currentStyle = currentStyle,
							$temp$steps = _Utils_ap(
							substeps,
							_List_fromArray(
								[
									$mdgriffith$elm_style_animation$Animation$Model$Loop(substeps)
								])),
							$temp$dt = dt;
						currentStyle = $temp$currentStyle;
						steps = $temp$steps;
						dt = $temp$dt;
						continue resolveSteps;
					default:
						var n = currentStep.a;
						var substeps = currentStep.b;
						if (n <= 0) {
							var $temp$currentStyle = currentStyle,
								$temp$steps = A2($elm$core$List$drop, 1, steps),
								$temp$dt = dt;
							currentStyle = $temp$currentStyle;
							steps = $temp$steps;
							dt = $temp$dt;
							continue resolveSteps;
						} else {
							var $temp$currentStyle = currentStyle,
								$temp$steps = _Utils_ap(
								substeps,
								_Utils_ap(
									_List_fromArray(
										[
											A2($mdgriffith$elm_style_animation$Animation$Model$Repeat, n - 1, substeps)
										]),
									A2($elm$core$List$drop, 1, steps))),
								$temp$dt = dt;
							currentStyle = $temp$currentStyle;
							steps = $temp$steps;
							dt = $temp$dt;
							continue resolveSteps;
						}
				}
			}
		}
	});
var $mdgriffith$elm_style_animation$Animation$Model$updateAnimation = F2(
	function (_v0, _v1) {
		var now = _v0;
		var model = _v1;
		var timing = A2($mdgriffith$elm_style_animation$Animation$Model$refreshTiming, now, model.dx);
		var _v2 = A2(
			$elm$core$List$partition,
			function (_v4) {
				var wait = _v4.a;
				var mySteps = _v4.b;
				return $elm$time$Time$posixToMillis(wait) <= 0;
			},
			A2(
				$elm$core$List$map,
				function (_v3) {
					var wait = _v3.a;
					var mySteps = _v3.b;
					return _Utils_Tuple2(
						$elm$time$Time$millisToPosix(
							$elm$time$Time$posixToMillis(wait) - $elm$time$Time$posixToMillis(timing.dX)),
						mySteps);
				},
				model.bW));
		var readyInterruption = _v2.a;
		var queuedInterruptions = _v2.b;
		var _v5 = function () {
			var _v6 = $elm$core$List$head(readyInterruption);
			if (!_v6.$) {
				var _v7 = _v6.a;
				var wait = _v7.a;
				var interrupt = _v7.b;
				return _Utils_Tuple2(
					interrupt,
					A2(
						$elm$core$List$map,
						$mdgriffith$elm_style_animation$Animation$Model$mapToMotion(
							function (m) {
								return _Utils_update(
									m,
									{d6: $elm$core$Maybe$Nothing});
							}),
						model.dt));
			} else {
				return _Utils_Tuple2(model.b6, model.dt);
			}
		}();
		var steps = _v5.a;
		var style = _v5.b;
		var _v8 = A3($mdgriffith$elm_style_animation$Animation$Model$resolveSteps, style, steps, timing.dX);
		var revisedStyle = _v8.a;
		var sentMessages = _v8.b;
		var revisedSteps = _v8.c;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					bW: queuedInterruptions,
					bG: (!(!$elm$core$List$length(revisedSteps))) || (!(!$elm$core$List$length(queuedInterruptions))),
					b6: revisedSteps,
					dt: revisedStyle,
					dx: timing
				}),
			$elm$core$Platform$Cmd$batch(
				A2(
					$elm$core$List$map,
					function (m) {
						return A2(
							$elm$core$Task$perform,
							$elm$core$Basics$identity,
							$elm$core$Task$succeed(m));
					},
					sentMessages)));
	});
var $mdgriffith$elm_style_animation$Animation$Messenger$update = F2(
	function (tick, animation) {
		return A2($mdgriffith$elm_style_animation$Animation$Model$updateAnimation, tick, animation);
	});
var $author$project$ProgressiveImage$Complete = 1;
var $author$project$ProgressiveImage$LoadingMain = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$ProgressiveImage$MainOnly = {$: 4};
var $author$project$ProgressiveImage$NestedLoadingMsg = function (a) {
	return {$: 6, a: a};
};
var $author$project$Utils$Loading$getState = function (_v0) {
	var m = _v0.a;
	return m.p;
};
var $mdgriffith$elm_style_animation$Animation$extractInitialWait = function (steps) {
	var _v0 = $elm$core$List$head(steps);
	if (_v0.$ === 1) {
		return _Utils_Tuple2(
			$elm$time$Time$millisToPosix(0),
			_List_Nil);
	} else {
		var step = _v0.a;
		if (step.$ === 4) {
			var till = step.a;
			var _v2 = $mdgriffith$elm_style_animation$Animation$extractInitialWait(
				A2($elm$core$List$drop, 1, steps));
			var additionalTime = _v2.a;
			var remainingSteps = _v2.b;
			return _Utils_Tuple2(
				$elm$time$Time$millisToPosix(
					$elm$time$Time$posixToMillis(till) + $elm$time$Time$posixToMillis(additionalTime)),
				remainingSteps);
		} else {
			return _Utils_Tuple2(
				$elm$time$Time$millisToPosix(0),
				steps);
		}
	}
};
var $mdgriffith$elm_style_animation$Animation$interrupt = F2(
	function (steps, _v0) {
		var model = _v0;
		return _Utils_update(
			model,
			{
				bW: A2(
					$elm$core$List$cons,
					$mdgriffith$elm_style_animation$Animation$extractInitialWait(steps),
					model.bW),
				bG: true
			});
	});
var $mdgriffith$elm_style_animation$Animation$Model$To = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_style_animation$Animation$to = function (props) {
	return $mdgriffith$elm_style_animation$Animation$Model$To(props);
};
var $author$project$ProgressiveImage$hide = $mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			$mdgriffith$elm_style_animation$Animation$to($author$project$ProgressiveImage$hidden)
		]));
var $author$project$ProgressiveImage$MainLoaded = function (a) {
	return {$: 3, a: a};
};
var $author$project$ProgressiveImage$MainFadeinComplete = {$: 3};
var $mdgriffith$elm_style_animation$Animation$Model$Send = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Messenger$send = function (msg) {
	return $mdgriffith$elm_style_animation$Animation$Model$Send(msg);
};
var $author$project$ProgressiveImage$shown = _List_fromArray(
	[
		$mdgriffith$elm_style_animation$Animation$opacity(1)
	]);
var $author$project$ProgressiveImage$showMsg = $mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			$mdgriffith$elm_style_animation$Animation$to($author$project$ProgressiveImage$shown),
			$mdgriffith$elm_style_animation$Animation$Messenger$send($author$project$ProgressiveImage$MainFadeinComplete)
		]));
var $author$project$ProgressiveImage$mainLoaded = F2(
	function (piModel, placeholder) {
		var oldAnimState = piModel.f;
		return _Utils_update(
			piModel,
			{
				f: _Utils_update(
					oldAnimState,
					{
						_: $author$project$ProgressiveImage$showMsg(piModel.f._)
					}),
				aG: 1,
				t: $author$project$ProgressiveImage$MainLoaded(placeholder)
			});
	});
var $author$project$ProgressiveImage$show = $mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			$mdgriffith$elm_style_animation$Animation$to($author$project$ProgressiveImage$shown)
		]));
var $mdgriffith$elm_style_animation$Animation$update = F2(
	function (tick, animation) {
		return A2($mdgriffith$elm_style_animation$Animation$Model$updateAnimation, tick, animation).a;
	});
var $author$project$Utils$Loading$Failed = function (a) {
	return {$: 5, a: a};
};
var $author$project$Utils$Loading$Loaded = {$: 3};
var $author$project$Utils$Loading$Loading = function (a) {
	return {$: 2, a: a};
};
var $author$project$Utils$Loading$RequestedButNoProgress = {$: 1};
var $author$project$Utils$Loading$update = F2(
	function (msg, _v0) {
		var m = _v0.a;
		var wrap = _v0.b;
		switch (msg.$) {
			case 0:
				var _v2 = m.p;
				if (!_v2.$) {
					return A2(
						$author$project$Utils$Loading$OneModel,
						_Utils_update(
							m,
							{p: $author$project$Utils$Loading$RequestedButNoProgress}),
						wrap);
				} else {
					return A2($author$project$Utils$Loading$OneModel, m, wrap);
				}
			case 1:
				var progress = msg.a;
				var updatedWithProgress = A2(
					$author$project$Utils$Loading$OneModel,
					_Utils_update(
						m,
						{
							p: $author$project$Utils$Loading$Loading(progress)
						}),
					wrap);
				var ignoreStaleProgress = A2($author$project$Utils$Loading$OneModel, m, wrap);
				var progressHandlerFor = function (state) {
					progressHandlerFor:
					while (true) {
						switch (state.$) {
							case 0:
								return updatedWithProgress;
							case 1:
								return updatedWithProgress;
							case 2:
								return updatedWithProgress;
							case 3:
								return ignoreStaleProgress;
							case 5:
								return ignoreStaleProgress;
							default:
								var s = state.a;
								var $temp$state = s;
								state = $temp$state;
								continue progressHandlerFor;
						}
					}
				};
				return progressHandlerFor(m.p);
			case 2:
				return A2(
					$author$project$Utils$Loading$OneModel,
					_Utils_update(
						m,
						{p: $author$project$Utils$Loading$Loaded}),
					wrap);
			default:
				var error = msg.a;
				return A2(
					$author$project$Utils$Loading$OneModel,
					_Utils_update(
						m,
						{
							p: $author$project$Utils$Loading$Failed(error)
						}),
					wrap);
		}
	});
var $author$project$ProgressiveImage$updateModel = F2(
	function (msg, model) {
		var piModel = model;
		switch (msg.$) {
			case 0:
				var imgSrc = msg.a;
				var _v1 = piModel.t;
				switch (_v1.$) {
					case 0:
						var trying = _v1.b;
						if (_Utils_eq(imgSrc, trying)) {
							var oldAnimState = piModel.f;
							var _v2 = A2(
								$author$project$Utils$Loading$init,
								$author$project$ProgressiveImage$NestedLoadingMsg,
								A2(
									$author$project$Utils$HttpUtils$appendPath,
									piModel.q.B,
									$author$project$Utils$ListUtils$encodePath(piModel.q.ed.ca)));
							var loadingModel = _v2.a;
							return _Utils_update(
								piModel,
								{
									f: _Utils_update(
										oldAnimState,
										{
											x: $author$project$ProgressiveImage$show(piModel.f.x)
										}),
									t: A2($author$project$ProgressiveImage$LoadingMain, trying, loadingModel)
								});
						} else {
							return model;
						}
					case 1:
						if (_Utils_eq(imgSrc, piModel.q.d_)) {
							var oldAnimState = piModel.f;
							var _v3 = A2(
								$author$project$Utils$Loading$init,
								$author$project$ProgressiveImage$NestedLoadingMsg,
								A2(
									$author$project$Utils$HttpUtils$appendPath,
									piModel.q.B,
									$author$project$Utils$ListUtils$encodePath(piModel.q.ed.ca)));
							var loadingModel = _v3.a;
							return _Utils_update(
								piModel,
								{
									f: _Utils_update(
										oldAnimState,
										{
											x: $author$project$ProgressiveImage$show(piModel.f.x)
										}),
									t: A2($author$project$ProgressiveImage$LoadingMain, piModel.q.d_, loadingModel)
								});
						} else {
							return model;
						}
					case 2:
						var placeholder = _v1.a;
						return _Utils_eq(imgSrc, piModel.q.ed) ? A2($author$project$ProgressiveImage$mainLoaded, piModel, placeholder) : model;
					case 3:
						return model;
					default:
						return model;
				}
			case 2:
				var timedOut = msg.a;
				var _v4 = piModel.t;
				switch (_v4.$) {
					case 0:
						var tried = _v4.a;
						var trying = _v4.b;
						var upnext = _v4.c;
						var _v5 = _Utils_eq(timedOut, trying);
						if (_v5) {
							if (!upnext.b) {
								return _Utils_update(
									piModel,
									{t: $author$project$ProgressiveImage$LoadingFallback});
							} else {
								var next = upnext.a;
								var later = upnext.b;
								return _Utils_update(
									piModel,
									{
										t: A3(
											$author$project$ProgressiveImage$TryingCached,
											_Utils_ap(
												tried,
												_List_fromArray(
													[trying])),
											next,
											later)
									});
							}
						} else {
							return model;
						}
					case 1:
						return model;
					case 2:
						return model;
					case 3:
						return model;
					default:
						return model;
				}
			case 1:
				return model;
			case 3:
				var _v7 = piModel.t;
				switch (_v7.$) {
					case 3:
						var oldAnimState = piModel.f;
						return _Utils_update(
							piModel,
							{
								f: _Utils_update(
									oldAnimState,
									{
										x: $author$project$ProgressiveImage$hide(piModel.f.x)
									}),
								aG: 1,
								t: $author$project$ProgressiveImage$MainOnly
							});
					case 0:
						return model;
					case 1:
						return model;
					case 2:
						return model;
					default:
						return model;
				}
			case 5:
				return model;
			case 4:
				var animMsg = msg.a;
				var oldAnimState = piModel.f;
				return _Utils_update(
					piModel,
					{
						f: _Utils_update(
							oldAnimState,
							{
								x: A2($mdgriffith$elm_style_animation$Animation$update, animMsg, piModel.f.x)
							})
					});
			default:
				var nestedMsg = msg.a;
				var _v8 = piModel.t;
				switch (_v8.$) {
					case 2:
						var placeholder = _v8.a;
						var loadingState = _v8.b;
						var newLoadingState = A2($author$project$Utils$Loading$update, nestedMsg, loadingState);
						var _v9 = $author$project$Utils$Loading$getState(newLoadingState);
						if (_v9.$ === 3) {
							return A2($author$project$ProgressiveImage$mainLoaded, piModel, placeholder);
						} else {
							return _Utils_update(
								piModel,
								{
									t: A2($author$project$ProgressiveImage$LoadingMain, placeholder, newLoadingState)
								});
						}
					case 0:
						return model;
					case 1:
						return model;
					case 3:
						return model;
					default:
						return model;
				}
		}
	});
var $author$project$ProgressiveImage$updateImpl = F2(
	function (msg, oldModel) {
		var piModel = oldModel;
		switch (msg.$) {
			case 5:
				var animMsg = msg.a;
				var oldAnimState = piModel.f;
				var _v1 = A2($mdgriffith$elm_style_animation$Animation$Messenger$update, animMsg, piModel.f._);
				var newMainState = _v1.a;
				var animCmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						piModel,
						{
							f: _Utils_update(
								oldAnimState,
								{_: newMainState})
						}),
					animCmd);
			case 1:
				var n = msg.a;
				var unit = msg.b;
				var img = msg.c;
				return _Utils_Tuple2(
					oldModel,
					A3(
						$andrewMacmurray$elm_delay$Delay$after,
						n,
						unit,
						$author$project$ProgressiveImage$Timeout(img)));
			default:
				var newModel = A2($author$project$ProgressiveImage$updateModel, msg, oldModel);
				return _Utils_Tuple2(
					newModel,
					$author$project$ProgressiveImage$updateCmd(newModel));
		}
	});
var $author$project$ProgressiveImage$update = F2(
	function (msg, oldModel) {
		var _v0 = A2($author$project$ProgressiveImage$updateImpl, msg, oldModel);
		var piModel = _v0.a;
		var cmd = _v0.b;
		return _Utils_Tuple3(piModel, cmd, piModel.aG);
	});
var $author$project$Utils$TouchUtils$SwipeState = function (a) {
	return {$: 1, a: a};
};
var $author$project$Utils$TouchUtils$startZoom = F2(
	function (t1, t2) {
		return $author$project$Utils$TouchUtils$ZoomState(
			$author$project$Utils$TouchUtils$ZoomCurrent(
				{
					N: _Utils_Tuple2(t1, t2),
					an: $elm$core$Maybe$Nothing,
					eM: _Utils_Tuple2(t1, t2)
				}));
	});
var $author$project$Utils$TouchUtils$update = F2(
	function (oldState, touchEvent) {
		var _v0 = touchEvent.e_;
		_v0$2:
		while (true) {
			if (_v0.b) {
				if (!_v0.b.b) {
					var t = _v0.a;
					switch (oldState.$) {
						case 1:
							var swipe = oldState.a;
							return $author$project$Utils$TouchUtils$SwipeState(
								_Utils_update(
									swipe,
									{N: t}));
						case 2:
							var zData = oldState.a;
							return $author$project$Utils$TouchUtils$SwipeState(
								{
									N: t,
									b2: $elm$core$Maybe$Just(zData),
									eM: t
								});
						default:
							return $author$project$Utils$TouchUtils$SwipeState(
								{N: t, b2: $elm$core$Maybe$Nothing, eM: t});
					}
				} else {
					if (!_v0.b.b.b) {
						var t1 = _v0.a;
						var _v2 = _v0.b;
						var t2 = _v2.a;
						switch (oldState.$) {
							case 2:
								var zoomData = oldState.a;
								if (!zoomData.$) {
									var prevData = zoomData.a;
									return $author$project$Utils$TouchUtils$ZoomState(
										$author$project$Utils$TouchUtils$ZoomCurrent(
											{
												N: _Utils_Tuple2(t1, t2),
												an: $elm$core$Maybe$Just(prevData),
												eM: _Utils_Tuple2(t1, t2)
											}));
								} else {
									var zData = zoomData.a;
									return $author$project$Utils$TouchUtils$ZoomState(
										$author$project$Utils$TouchUtils$ZoomCurrent(
											_Utils_update(
												zData,
												{
													N: _Utils_Tuple2(t1, t2)
												})));
								}
							case 1:
								var ss = oldState.a;
								var _v5 = ss.b2;
								if (_v5.$ === 1) {
									return A2($author$project$Utils$TouchUtils$startZoom, t1, t2);
								} else {
									var oldZoom = _v5.a;
									return $author$project$Utils$TouchUtils$ZoomState(
										$author$project$Utils$TouchUtils$ZoomCurrent(
											{
												N: _Utils_Tuple2(t1, t2),
												an: $elm$core$Maybe$Just(oldZoom),
												eM: _Utils_Tuple2(t1, t2)
											}));
								}
							default:
								return A2($author$project$Utils$TouchUtils$startZoom, t1, t2);
						}
					} else {
						break _v0$2;
					}
				}
			} else {
				break _v0$2;
			}
		}
		return $author$project$Utils$TouchUtils$NoState;
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $author$project$Utils$Loading$isLoading = function (_v0) {
	var m = _v0;
	var isLoadingImpl = function (state) {
		isLoadingImpl:
		while (true) {
			switch (state.$) {
				case 0:
					return true;
				case 1:
					return true;
				case 2:
					return true;
				case 3:
					return false;
				case 5:
					return false;
				default:
					var s = state.a;
					var $temp$state = s;
					state = $temp$state;
					continue isLoadingImpl;
			}
		}
	};
	return isLoadingImpl(m.p);
};
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === -2) {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Utils$Loading$promotePending = F4(
	function (wrap, maxConcurrentCount, currentModels, pending) {
		var inProgCount = $elm$core$Dict$size(
			A2(
				$elm$core$Dict$filter,
				$elm$core$Basics$always($author$project$Utils$Loading$isLoading),
				currentModels));
		var _v0 = _Utils_cmp(inProgCount, maxConcurrentCount) > -1;
		if (_v0) {
			return _Utils_Tuple3(currentModels, pending, $elm$core$Platform$Cmd$none);
		} else {
			var _v1 = $elm$core$List$head(pending);
			if (_v1.$ === 1) {
				return _Utils_Tuple3(currentModels, pending, $elm$core$Platform$Cmd$none);
			} else {
				var nextUrl = _v1.a;
				var _v2 = A2(
					$author$project$Utils$Loading$init,
					A2(
						$elm$core$Basics$composeL,
						wrap,
						$author$project$Utils$Loading$ManyMsg(nextUrl)),
					nextUrl);
				var _v3 = _v2.a;
				var oneNewModel = _v3.a;
				var oneNewCmd = _v2.b;
				return _Utils_Tuple3(
					A3(
						$elm$core$Dict$insert,
						$elm$url$Url$toString(nextUrl),
						oneNewModel,
						currentModels),
					A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						$elm$core$List$tail(pending)),
					oneNewCmd);
			}
		}
	});
var $author$project$Utils$Loading$updatePendingImpl = F3(
	function (urlFilter, _v0, revisePending) {
		var mm = _v0;
		var newMaxConcurrentCount = function () {
			var _v3 = mm.bt > 0;
			if (_v3) {
				return mm.bt;
			} else {
				return 5;
			}
		}();
		var isNewUrl = function (u) {
			return urlFilter(u) && (!A2(
				$elm$core$List$member,
				u,
				A2(
					$elm$core$List$map,
					function (_v2) {
						var lm = _v2;
						return lm.ca;
					},
					$elm$core$Dict$values(mm.z))));
		};
		var revisedPending = A2(
			$elm$core$List$filter,
			isNewUrl,
			revisePending(
				A2($elm$core$List$filter, isNewUrl, mm.bC)));
		var _v1 = A4($author$project$Utils$Loading$promotePending, mm.aB, newMaxConcurrentCount, mm.z, revisedPending);
		var allNewModels = _v1.a;
		var newPending = _v1.b;
		var newCmds = _v1.c;
		return _Utils_Tuple2(
			{bt: newMaxConcurrentCount, z: allNewModels, bC: newPending, aB: mm.aB},
			newCmds);
	});
var $author$project$Utils$Loading$updateMany = F3(
	function (_v0, _v1, revisePending) {
		var url = _v0.a;
		var loadingMsg = _v0.b;
		var mm = _v1;
		var _v2 = A2(
			$elm$core$Dict$get,
			$elm$url$Url$toString(url),
			mm.z);
		if (!_v2.$) {
			var oneModel = _v2.a;
			var _v3 = A2(
				$author$project$Utils$Loading$update,
				loadingMsg,
				A2(
					$author$project$Utils$Loading$OneModel,
					oneModel,
					A2(
						$elm$core$Basics$composeR,
						$author$project$Utils$Loading$ManyMsg(url),
						mm.aB)));
			var oneNewModel = _v3.a;
			var wrap = _v3.b;
			var oneNewModels = A3(
				$elm$core$Dict$insert,
				$elm$url$Url$toString(url),
				oneNewModel,
				mm.z);
			var oneNewCmd = $author$project$Utils$Loading$cmdFor(
				A2($author$project$Utils$Loading$OneModel, oneNewModel, wrap));
			var _v4 = A3(
				$author$project$Utils$Loading$updatePendingImpl,
				$elm$core$Basics$neq(url),
				_Utils_update(
					mm,
					{z: oneNewModels}),
				revisePending);
			var newManyModel = _v4.a;
			var newCmds = _v4.b;
			return _Utils_Tuple2(
				newManyModel,
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[newCmds, oneNewCmd])));
		} else {
			return _Utils_Tuple2(mm, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Utils$Loading$updatePending = $author$project$Utils$Loading$updatePendingImpl(
	$elm$core$Basics$always(true));
var $author$project$AlbumPage$updatePrevNext = F2(
	function (model, shifter) {
		if (model.$ === 1) {
			var fi = model.a;
			var cancelCmd = $author$project$ProgressiveImage$cancel(fi.ab);
			var _v1 = A3(shifter, fi.aR, fi.g.bU, fi.g.bV);
			var newPrev = _v1.a;
			var newCur = _v1.b;
			var newRest = _v1.c;
			var _v2 = function () {
				if (_Utils_eq(fi.g.bU, newCur)) {
					return _Utils_Tuple2(fi.ab, $elm$core$Platform$Cmd$none);
				} else {
					var _v3 = A3(
						$author$project$FullImagePage$fitImage,
						newCur.b4,
						$elm$core$Basics$floor(fi.n.dI.bi.cb),
						$elm$core$Basics$floor(fi.n.dI.bi.bT));
					var w = _v3.a;
					var h = _v3.b;
					return A5($author$project$AlbumPage$progInit, fi.n.dI, fi.B, newCur, w, h);
				}
			}();
			var newProgModel = _v2.a;
			var newCmd = _v2.b;
			return _Utils_Tuple2(
				$author$project$AlbumPage$FullImage(
					_Utils_update(
						fi,
						{
							g: {bU: newCur, bV: newRest, b8: fi.g.b8, b9: fi.g.b9},
							aR: newPrev,
							ab: newProgModel,
							X: $author$project$Utils$TouchUtils$init
						})),
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2($elm$core$Platform$Cmd$map, $author$project$AlbumPage$FullMsg, newCmd),
							$author$project$AlbumPage$getImgPosition,
							cancelCmd
						])));
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$AlbumPage$urlsToGet = function (albumPage) {
	if (!albumPage.$) {
		var th = albumPage.a;
		return $author$project$ThumbPage$urlsToGet(
			$author$project$AlbumPage$thumbModel(th));
	} else {
		return _List_Nil;
	}
};
var $author$project$AlbumPage$update = F3(
	function (msg, model, scroll) {
		switch (msg.$) {
			case 0:
				var prevImgs = msg.a;
				var curImg = msg.b;
				var nextImgs = msg.c;
				if (!model.$) {
					var th = model.a;
					var _v2 = A3(
						$author$project$FullImagePage$fitImage,
						curImg.b4,
						$elm$core$Basics$floor(th.n.dI.bi.cb),
						$elm$core$Basics$floor(th.n.dI.bi.bT));
					var w = _v2.a;
					var h = _v2.b;
					var _v3 = A5($author$project$AlbumPage$progInit, th.n.dI, th.B, curImg, w, h);
					var progModel = _v3.a;
					var progCmd = _v3.b;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							{
								g: {bU: curImg, bV: nextImgs, b8: th.g.b8, b9: th.g.b9},
								B: th.B,
								l: th.l,
								bp: $elm$core$Maybe$Nothing,
								aR: prevImgs,
								ab: progModel,
								$7: scroll,
								X: $author$project$Utils$TouchUtils$init,
								n: th.n
							}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $author$project$AlbumPage$FullMsg, progCmd),
									$author$project$AlbumPage$getImgPosition
								])));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 5:
				return A2($author$project$AlbumPage$updatePrevNext, model, $author$project$Utils$ListUtils$shiftLeft);
			case 6:
				return A2($author$project$AlbumPage$updatePrevNext, model, $author$project$Utils$ListUtils$shiftRight);
			case 7:
				if (model.$ === 1) {
					var fi = model.a;
					var th = {
						g: $author$project$AlbumPage$baseAlbumOf(
							$author$project$AlbumPage$FullImage(fi)),
						B: fi.B,
						l: fi.l,
						n: fi.n
					};
					var scrollCmd = function () {
						var _v7 = fi.$7;
						if (_v7.$ === 1) {
							return $elm$core$Platform$Cmd$none;
						} else {
							var pos = _v7.a;
							return A2(
								$elm$core$Task$attempt,
								$elm$core$Basics$always($author$project$AlbumPage$NoUpdate),
								A3($elm$browser$Browser$Dom$setViewportOf, $author$project$AlbumStyles$rootDivId, 0, pos));
						}
					}();
					var revisePending = function (_v6) {
						return $author$project$AlbumPage$urlsToGet(
							$author$project$AlbumPage$Thumbs(th));
					};
					var cancelCmd = $author$project$ProgressiveImage$cancel(fi.ab);
					var _v5 = A2($author$project$Utils$Loading$updatePending, th.l, revisePending);
					var newLoader = _v5.a;
					var loadingCmd = _v5.b;
					return _Utils_Tuple2(
						$author$project$AlbumPage$Thumbs(
							_Utils_update(
								th,
								{l: newLoader})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[scrollCmd, loadingCmd, cancelCmd])));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 1:
				var evt = msg.a;
				if (model.$ === 1) {
					var fi = model.a;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{
									X: A2($author$project$Utils$TouchUtils$update, fi.X, evt)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 2:
				var evt = msg.a;
				if (model.$ === 1) {
					var fi = model.a;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{
									X: A2($author$project$Utils$TouchUtils$update, fi.X, evt)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 3:
				if (model.$ === 1) {
					var fi = model.a;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{X: $author$project$Utils$TouchUtils$init})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 4:
				var oldState = msg.a;
				if (model.$ === 1) {
					var fi = model.a;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{
									X: $author$project$Utils$TouchUtils$endZoom(oldState)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 9:
				if (!model.$) {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $author$project$AlbumPage$getImgPosition);
				}
			case 10:
				var element = msg.a;
				if (model.$ === 1) {
					var fi = model.a;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{
									bp: $elm$core$Maybe$Just(element)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 8:
				var progImgMsg = msg.a;
				if (model.$ === 1) {
					var fi = model.a;
					var _v15 = A2($author$project$ProgressiveImage$update, progImgMsg, fi.ab);
					var newProgModel = _v15.a;
					var newProgCmd = _v15.b;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{ab: newProgModel})),
						A2($elm$core$Platform$Cmd$map, $author$project$AlbumPage$FullMsg, newProgCmd));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 11:
				var lmsg = msg.a;
				var revisePending = function (_v19) {
					return $author$project$AlbumPage$urlsToGet(model);
				};
				if (!model.$) {
					var t = model.a;
					var _v17 = A3($author$project$Utils$Loading$updateMany, lmsg, t.l, revisePending);
					var newLoadingModel = _v17.a;
					var newLoadingCmd = _v17.b;
					return _Utils_Tuple2(
						$author$project$AlbumPage$Thumbs(
							_Utils_update(
								t,
								{l: newLoadingModel})),
						newLoadingCmd);
				} else {
					var fi = model.a;
					var _v18 = A3($author$project$Utils$Loading$updateMany, lmsg, fi.l, revisePending);
					var newLoadingModel = _v18.a;
					var newLoadingCmd = _v18.b;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{l: newLoadingModel})),
						newLoadingCmd);
				}
			case 12:
				var url = msg.a;
				if (!model.$) {
					var t = model.a;
					return _Utils_Tuple2(
						$author$project$AlbumPage$Thumbs(
							_Utils_update(
								t,
								{
									l: A2($author$project$Utils$Loading$markOne, t.l, url)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					var fi = model.a;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{
									l: A2($author$project$Utils$Loading$markOne, fi.l, url)
								})),
						$elm$core$Platform$Cmd$none);
				}
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$Loading = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$LoadingHomeLink = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$NavInProgress = 0;
var $author$project$Main$Sizing = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$withAlbumPathsAfterLoad = F2(
	function (model, albumPathsAfterLoad) {
		switch (model.$) {
			case 0:
				var abu = model.a;
				return $author$project$Main$AwaitingBaseUrl(
					_Utils_update(
						abu,
						{
							A: $elm$core$Maybe$Just(albumPathsAfterLoad)
						}));
			case 1:
				var sz = model.a;
				return $author$project$Main$Sizing(
					_Utils_update(
						sz,
						{
							A: $elm$core$Maybe$Just(albumPathsAfterLoad)
						}));
			case 2:
				var lh = model.a;
				return $author$project$Main$LoadingHomeLink(
					_Utils_update(
						lh,
						{
							A: $elm$core$Maybe$Just(albumPathsAfterLoad)
						}));
			case 3:
				var ld = model.a;
				return $author$project$Main$Loading(
					_Utils_update(
						ld,
						{
							A: $elm$core$Maybe$Just(albumPathsAfterLoad)
						}));
			case 4:
				return model;
			case 5:
				var ll = model.a;
				return $author$project$Main$LoadedList(
					_Utils_update(
						ll,
						{Q: 0}));
			default:
				var la = model.a;
				return $author$project$Main$LoadedAlbum(
					_Utils_update(
						la,
						{Q: 0}));
		}
	});
var $author$project$Main$withNavComplete = function (model) {
	switch (model.$) {
		case 0:
			return model;
		case 1:
			return model;
		case 2:
			return model;
		case 3:
			return model;
		case 4:
			return model;
		case 5:
			var ll = model.a;
			return $author$project$Main$LoadedList(
				_Utils_update(
					ll,
					{Q: 1}));
		default:
			var la = model.a;
			return $author$project$Main$LoadedAlbum(
				_Utils_update(
					la,
					{Q: 1}));
	}
};
var $author$project$Main$updateAlbum = F2(
	function (albumMsg, model) {
		switch (albumMsg.$) {
			case 1:
				var pageMsg = albumMsg.a;
				if (model.$ === 6) {
					var la = model.a;
					var _v2 = A3(
						$author$project$AlbumPage$update,
						pageMsg,
						la.j,
						A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, la.aT));
					var newPage = _v2.a;
					var newPageCmd = _v2.b;
					return _Utils_Tuple2(
						$author$project$Main$LoadedAlbum(
							_Utils_update(
								la,
								{j: newPage})),
						A2(
							$elm$core$Platform$Cmd$map,
							A2($elm$core$Basics$composeL, $author$project$Main$Album, $author$project$Main$PageMsg),
							newPageCmd));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 2:
				var albumListPage = albumMsg.a;
				var maybeScroll = albumMsg.b;
				var _v3 = $author$project$Main$baseUrlOf(model);
				if (!_v3.$) {
					var baseUrl = _v3.a;
					var scrollCmd = function () {
						if (!maybeScroll.$) {
							var pos = maybeScroll.a;
							return A2(
								$elm$core$Task$attempt,
								$elm$core$Basics$always($author$project$Main$NoBootstrap),
								A3($elm$browser$Browser$Dom$setViewportOf, $author$project$AlbumStyles$rootDivId, 0, pos));
						} else {
							return A2(
								$author$project$Utils$ViewportUtils$scrollToTop,
								$author$project$Main$NoBootstrap,
								$elm$core$Basics$always($author$project$Main$NoBootstrap));
						}
					}();
					var newModel = $author$project$Main$LoadedList(
						{
							B: baseUrl,
							i: $author$project$Main$flagsOf(model),
							K: $author$project$Main$homeOf(model),
							o: $author$project$Main$keyOf(model),
							y: albumListPage,
							Q: 1,
							aT: $elm$core$Maybe$Nothing
						});
					var cancelCmd = $author$project$Main$cancelFullImageLoadCmd(model);
					return _Utils_Tuple2(
						newModel,
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $author$project$Main$Meta, scrollCmd),
									cancelCmd
								])));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 3:
				var albumPage = albumMsg.a;
				var parents = albumMsg.b;
				var _v5 = $author$project$Main$baseUrlOf(model);
				if (!_v5.$) {
					var baseUrl = _v5.a;
					var newModel = $author$project$Main$LoadedAlbum(
						{
							j: albumPage,
							B: baseUrl,
							i: $author$project$Main$flagsOf(model),
							K: $author$project$Main$homeOf(model),
							o: $author$project$Main$keyOf(model),
							Q: 1,
							bB: parents,
							aT: $elm$core$Maybe$Nothing
						});
					var getImgPos = function () {
						if (!albumPage.$) {
							return $elm$core$Platform$Cmd$none;
						} else {
							return A2($elm$core$Platform$Cmd$map, $author$project$Main$PageMsg, $author$project$AlbumPage$getImgPosition);
						}
					}();
					return _Utils_Tuple2(
						newModel,
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2(
									$elm$core$Platform$Cmd$map,
									$author$project$Main$Meta,
									A2(
										$author$project$Utils$ViewportUtils$scrollToTop,
										$author$project$Main$NoBootstrap,
										$elm$core$Basics$always($author$project$Main$NoBootstrap))),
									A2(
									$elm$core$Platform$Cmd$map,
									A2($elm$core$Basics$composeL, $author$project$Main$Album, $author$project$Main$PageMsg),
									$author$project$AlbumPage$cmdFor(albumPage)),
									A2($elm$core$Platform$Cmd$map, $author$project$Main$Album, getImgPos)
								])));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 0:
				var paths = albumMsg.a;
				return _Utils_Tuple2(
					A2($author$project$Main$withAlbumPathsAfterLoad, model, paths),
					$author$project$Utils$ResultUtils$toCmd(
						A2(
							$elm$core$Maybe$withDefault,
							$author$project$Main$Meta($author$project$Main$NoBootstrap),
							A2(
								$author$project$Main$pathsToCmd,
								model,
								$elm$core$Maybe$Just(paths)))));
			default:
				return _Utils_Tuple2(
					$author$project$Main$withNavComplete(model),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$LoadError = function (a) {
	return {$: 4, a: a};
};
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $author$project$Main$NoAlbum = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$YesAlbum = function (a) {
	return {$: 4, a: a};
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$json$Json$Decode$fail = _Json_fail;
var $bartavelle$json_helpers$Json$Helpers$customDecoder = F2(
	function (decoder, toResult) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (a) {
				var _v0 = toResult(a);
				if (!_v0.$) {
					var b = _v0.a;
					return $elm$json$Json$Decode$succeed(b);
				} else {
					var err = _v0.a;
					return $elm$json$Json$Decode$fail(
						$elm$json$Json$Decode$errorToString(err));
				}
			},
			decoder);
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $bartavelle$json_helpers$Json$Helpers$decodeSumFinal = F4(
	function (name, key, value, mapping) {
		var _v0 = A2($elm$core$Dict$get, key, mapping);
		if (_v0.$ === 1) {
			return $elm$core$Result$Err(
				A2($elm$json$Json$Decode$Failure, 'Unknown constructor ' + (key + (' for type ' + name)), value));
		} else {
			var dec = _v0.a;
			return A2($elm$json$Json$Decode$decodeValue, dec, value);
		}
	});
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $bartavelle$json_helpers$Json$Helpers$decodeSumObjectWithSingleField = F2(
	function (name, mapping) {
		return A2(
			$bartavelle$json_helpers$Json$Helpers$customDecoder,
			$elm$json$Json$Decode$keyValuePairs($elm$json$Json$Decode$value),
			function (lst) {
				if (!lst.b) {
					return $elm$core$Result$Err(
						A2($elm$json$Json$Decode$Failure, 'Can\'t decode ' + (name + ': object has too few keys'), $elm$json$Json$Encode$null));
				} else {
					if (!lst.b.b) {
						var _v1 = lst.a;
						var key = _v1.a;
						var value = _v1.b;
						return A4($bartavelle$json_helpers$Json$Helpers$decodeSumFinal, name, key, value, mapping);
					} else {
						var kv = lst.a;
						var kvs = lst.b;
						return $elm$core$Result$Err(
							A2($elm$json$Json$Decode$Failure, 'Can\'t decode ' + (name + ': object has too many keys'), kv.b));
					}
				}
			});
	});
var $bartavelle$json_helpers$Json$Helpers$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $bartavelle$json_helpers$Json$Helpers$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$bartavelle$json_helpers$Json$Helpers$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $author$project$Album$jsonDecImgSrc = A3(
	$bartavelle$json_helpers$Json$Helpers$required,
	'y',
	$elm$json$Json$Decode$int,
	A3(
		$bartavelle$json_helpers$Json$Helpers$required,
		'x',
		$elm$json$Json$Decode$int,
		A3(
			$bartavelle$json_helpers$Json$Helpers$required,
			'url',
			$elm$json$Json$Decode$string,
			$elm$json$Json$Decode$succeed(
				F3(
					function (purl, px, py) {
						return {ca: purl, cc: px, cd: py};
					})))));
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$Album$jsonDecImage = A3(
	$bartavelle$json_helpers$Json$Helpers$required,
	'srcSetRest',
	$elm$json$Json$Decode$list($author$project$Album$jsonDecImgSrc),
	A3(
		$bartavelle$json_helpers$Json$Helpers$required,
		'srcSetFirst',
		$author$project$Album$jsonDecImgSrc,
		A3(
			$bartavelle$json_helpers$Json$Helpers$required,
			'altText',
			$elm$json$Json$Decode$string,
			$elm$json$Json$Decode$succeed(
				F3(
					function (paltText, psrcSetFirst, psrcSetRest) {
						return {bK: paltText, b4: psrcSetFirst, b5: psrcSetRest};
					})))));
var $author$project$Album$jsonDecAlbum = A3(
	$bartavelle$json_helpers$Json$Helpers$required,
	'imageRest',
	$elm$json$Json$Decode$list($author$project$Album$jsonDecImage),
	A3(
		$bartavelle$json_helpers$Json$Helpers$required,
		'imageFirst',
		$author$project$Album$jsonDecImage,
		A3(
			$bartavelle$json_helpers$Json$Helpers$required,
			'thumbnail',
			$author$project$Album$jsonDecImage,
			A3(
				$bartavelle$json_helpers$Json$Helpers$required,
				'title',
				$elm$json$Json$Decode$string,
				$elm$json$Json$Decode$succeed(
					F4(
						function (ptitle, pthumbnail, pimageFirst, pimageRest) {
							return {bU: pimageFirst, bV: pimageRest, b8: pthumbnail, b9: ptitle};
						}))))));
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(0));
};
function $author$project$Album$cyclic$jsonDecAlbumList() {
	return A3(
		$bartavelle$json_helpers$Json$Helpers$required,
		'listThumbnail',
		$author$project$Album$jsonDecImage,
		A3(
			$bartavelle$json_helpers$Json$Helpers$required,
			'childRest',
			$elm$json$Json$Decode$list(
				$author$project$Album$cyclic$jsonDecAlbumOrList()),
			A3(
				$bartavelle$json_helpers$Json$Helpers$required,
				'childFirst',
				$author$project$Album$cyclic$jsonDecAlbumOrList(),
				A3(
					$bartavelle$json_helpers$Json$Helpers$required,
					'listTitle',
					$elm$json$Json$Decode$string,
					$elm$json$Json$Decode$succeed(
						F4(
							function (plistTitle, pchildFirst, pchildRest, plistThumbnail) {
								return {bM: pchildFirst, bN: pchildRest, bY: plistThumbnail, bZ: plistTitle};
							}))))));
}
function $author$project$Album$cyclic$jsonDecAlbumOrList() {
	var jsonDecDictAlbumOrList = $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'List',
				$elm$json$Json$Decode$lazy(
					function (_v0) {
						return A2(
							$elm$json$Json$Decode$map,
							$author$project$Album$List,
							$author$project$Album$cyclic$jsonDecAlbumList());
					})),
				_Utils_Tuple2(
				'Leaf',
				$elm$json$Json$Decode$lazy(
					function (_v1) {
						return A2($elm$json$Json$Decode$map, $author$project$Album$Leaf, $author$project$Album$jsonDecAlbum);
					}))
			]));
	return A2($bartavelle$json_helpers$Json$Helpers$decodeSumObjectWithSingleField, 'AlbumOrList', jsonDecDictAlbumOrList);
}
var $author$project$Album$jsonDecAlbumList = $author$project$Album$cyclic$jsonDecAlbumList();
$author$project$Album$cyclic$jsonDecAlbumList = function () {
	return $author$project$Album$jsonDecAlbumList;
};
var $author$project$Album$jsonDecAlbumOrList = $author$project$Album$cyclic$jsonDecAlbumOrList();
$author$project$Album$cyclic$jsonDecAlbumOrList = function () {
	return $author$project$Album$jsonDecAlbumOrList;
};
var $author$project$Main$gotHome = F2(
	function (lh, home) {
		return _Utils_Tuple2(
			$author$project$Main$Loading(
				{A: lh.A, B: lh.B, dI: lh.dI, i: lh.i, K: home, o: lh.o, bD: $elm$core$Maybe$Nothing}),
			A2(
				$elm$core$Platform$Cmd$map,
				$author$project$Main$Bootstrap,
				$elm$http$Http$request(
					{
						cn: $elm$http$Http$emptyBody,
						cB: A2(
							$elm$http$Http$expectJson,
							A2($author$project$Utils$ResultUtils$either, $author$project$Main$NoAlbum, $author$project$Main$YesAlbum),
							$author$project$Album$jsonDecAlbumOrList),
						d0: _List_Nil,
						ef: 'GET',
						eW: $elm$core$Maybe$Nothing,
						e$: $elm$core$Maybe$Just($author$project$Utils$AlbumUtils$albumJson),
						ca: $author$project$Utils$AlbumUtils$albumJson
					})));
	});
var $author$project$AlbumPage$initThumbs = F3(
	function (album, bodyViewport, baseUrl) {
		return A3(
			$author$project$AlbumPage$initThumbsFullVp,
			album,
			{dI: bodyViewport, aT: $elm$core$Maybe$Nothing},
			baseUrl);
	});
var $author$project$Main$GotBaseUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $author$project$Main$SetAlbumPathFromUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Optional = 1;
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.ek, offset) < 0,
					0,
					{cu: col, e: s0.e, h: s0.h, ek: offset, dn: row, a: s0.a});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.ek, s.dn, s.cu, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {cu: col, dO: contextStack, dd: problem, dn: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.dn, s.cu, x, s.e));
	});
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.a),
			s.ek) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.ek, s1.ek, s0.a),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {cu: col, dd: problem, dn: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.dn, p.cu, p.dd);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{cu: 1, e: _List_Nil, h: 1, ek: 0, dn: 1, a: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$revAlways = F2(
	function (_v0, b) {
		return b;
	});
var $elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				$elm$parser$Parser$Advanced$sequenceEndForbidden,
				ender,
				ws,
				parseItem,
				sep,
				A2($elm$core$List$cons, item, revItems));
		};
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$map,
								function (item) {
									return $elm$parser$Parser$Advanced$Loop(
										A2($elm$core$List$cons, item, revItems));
								},
								parseItem))),
						A2(
						$elm$parser$Parser$Advanced$map,
						function (_v0) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(revItems));
						},
						ender)
					])));
	});
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(
	function (ws, parseItem, sep, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (item) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, item, revItems));
					},
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						parseItem,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							ws,
							A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var parseEnd = A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(revItems));
			},
			ender);
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							$elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$Advanced$map,
										function (item) {
											return $elm$parser$Parser$Advanced$Loop(
												A2($elm$core$List$cons, item, revItems));
										},
										parseItem),
										parseEnd
									])))),
						parseEnd
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEnd = F5(
	function (ender, ws, parseItem, sep, trailing) {
		var chompRest = function (item) {
			switch (trailing) {
				case 0:
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
				case 1:
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
				default:
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$skip,
								sep,
								A2(
									$elm$parser$Parser$Advanced$skip,
									ws,
									A2(
										$elm$parser$Parser$Advanced$loop,
										_List_fromArray(
											[item]),
										A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))),
						ender);
			}
		};
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					ender)
				]));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.ek, s.dn, s.cu, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{cu: newCol, e: s.e, h: s.h, ek: newOffset, dn: newRow, a: s.a});
	};
};
var $elm$parser$Parser$Advanced$sequence = function (i) {
	return A2(
		$elm$parser$Parser$Advanced$skip,
		$elm$parser$Parser$Advanced$token(i.eM),
		A2(
			$elm$parser$Parser$Advanced$skip,
			i.eL,
			A5(
				$elm$parser$Parser$Advanced$sequenceEnd,
				$elm$parser$Parser$Advanced$token(i.dY),
				i.eL,
				i.d9,
				$elm$parser$Parser$Advanced$token(i.eH),
				i.e0)));
};
var $elm$parser$Parser$Advanced$Forbidden = 0;
var $elm$parser$Parser$Advanced$Mandatory = 2;
var $elm$parser$Parser$Advanced$Optional = 1;
var $elm$parser$Parser$toAdvancedTrailing = function (trailing) {
	switch (trailing) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			return 2;
	}
};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$sequence = function (i) {
	return $elm$parser$Parser$Advanced$sequence(
		{
			dY: $elm$parser$Parser$toToken(i.dY),
			d9: i.d9,
			eH: $elm$parser$Parser$toToken(i.eH),
			eL: i.eL,
			eM: $elm$parser$Parser$toToken(i.eM),
			e0: $elm$parser$Parser$toAdvancedTrailing(i.e0)
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $author$project$Utils$LocationUtils$parseHash = function (href) {
	var hashParser = $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(_List_Nil),
				$elm$parser$Parser$end),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$sequence(
						{
							dY: '',
							d9: A2(
								$elm$parser$Parser$map,
								function (p) {
									return A2(
										$elm$core$Maybe$withDefault,
										p,
										$elm$url$Url$percentDecode(p));
								},
								$elm$parser$Parser$getChompedString(
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed(0),
										$elm$parser$Parser$chompWhile(
											function (c) {
												return c !== '/';
											})))),
							eH: '/',
							eL: $elm$parser$Parser$succeed(0),
							eM: '',
							e0: 1
						}),
					$elm$parser$Parser$end))
			]));
	return A2($elm$parser$Parser$run, hashParser, href);
};
var $author$project$Main$navToMsgInternal = function (loc) {
	var parsedHash = A2(
		$author$project$Utils$DebugSupport$log,
		'parsedHash from ' + A2($elm$core$Maybe$withDefault, '<no fragment>', loc.cF),
		$author$project$Utils$LocationUtils$parseHash(
			A2($elm$core$Maybe$withDefault, '', loc.cF)));
	var hashMsgs = function () {
		if (parsedHash.$ === 1) {
			return _List_Nil;
		} else {
			var paths = parsedHash.a;
			return _List_fromArray(
				[
					$author$project$Main$Album(
					$author$project$Main$SetAlbumPathFromUrl(paths))
				]);
		}
	}();
	if (!hashMsgs.b) {
		return $elm$core$Platform$Cmd$none;
	} else {
		if (!hashMsgs.b.b) {
			var c = hashMsgs.a;
			return A2(
				$elm$core$Task$perform,
				$elm$core$Basics$identity,
				$elm$core$Task$succeed(c));
		} else {
			var c1 = hashMsgs.a;
			var cs = hashMsgs.b;
			return A2(
				$elm$core$Task$perform,
				$elm$core$Basics$identity,
				$elm$core$Task$succeed(
					$author$project$Main$Meta(
						A2($author$project$Main$Sequence, c1, cs))));
		}
	}
};
var $author$project$Main$navToMsg = F2(
	function (model, loc) {
		if (!model.$) {
			return A2(
				$elm$core$Task$perform,
				$elm$core$Basics$identity,
				$elm$core$Task$succeed(
					$author$project$Main$Bootstrap(
						$author$project$Main$GotBaseUrl(loc))));
		} else {
			var hUrl = A2(
				$elm$core$Maybe$andThen,
				$elm$url$Url$fromString,
				$author$project$Main$homeOf(model));
			var locIsHome = A2(
				$elm$core$Maybe$withDefault,
				false,
				A2(
					$elm$core$Maybe$map,
					function (h) {
						return _Utils_eq(h, loc);
					},
					hUrl));
			if (locIsHome) {
				return $elm$browser$Browser$Navigation$load(
					$elm$url$Url$toString(
						A2($author$project$Utils$DebugSupport$log, 'loading internal home url', loc)));
			} else {
				return $author$project$Main$navToMsgInternal(
					A2($author$project$Utils$DebugSupport$log, 'navToMsgInternal for non-home internal url', loc));
			}
		}
	});
var $elm$core$String$trim = _String_trim;
var $author$project$Main$updateBootstrap = F2(
	function (bootstrapMsg, model) {
		switch (bootstrapMsg.$) {
			case 0:
				var url = bootstrapMsg.a;
				if (!model.$) {
					var abu = model.a;
					var modelWithBaseUrl = $author$project$Main$Sizing(
						{A: abu.A, B: url, i: abu.i, o: abu.o});
					var initialNavCmd = A2($author$project$Main$navToMsg, modelWithBaseUrl, url);
					return _Utils_Tuple2(
						modelWithBaseUrl,
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									initialNavCmd,
									A2(
									$elm$core$Task$perform,
									A2($elm$core$Basics$composeL, $author$project$Main$General, $author$project$Main$Resize),
									$elm$browser$Browser$Dom$getViewport)
								])));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 1:
				var home = bootstrapMsg.a;
				if (model.$ === 2) {
					var lh = model.a;
					return A2(
						$author$project$Main$gotHome,
						lh,
						$elm$core$Maybe$Just(
							$elm$core$String$trim(home)));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 2:
				if (model.$ === 2) {
					var lh = model.a;
					return A2($author$project$Main$gotHome, lh, $elm$core$Maybe$Nothing);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 3:
				var progress = bootstrapMsg.a;
				if (model.$ === 3) {
					var ld = model.a;
					return _Utils_Tuple2(
						$author$project$Main$Loading(
							_Utils_update(
								ld,
								{
									bD: $elm$core$Maybe$Just(progress)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 4:
				var albumOrList = bootstrapMsg.a;
				if (model.$ === 3) {
					var ld = model.a;
					if (!albumOrList.$) {
						var albumList = albumOrList.a;
						var newModel = $author$project$Main$LoadedList(
							{
								B: ld.B,
								i: ld.i,
								K: ld.K,
								o: ld.o,
								y: {a_: albumList, dI: ld.dI, bB: _List_Nil},
								Q: 1,
								aT: $elm$core$Maybe$Nothing
							});
						return _Utils_Tuple2(
							newModel,
							A2(
								$elm$core$Maybe$withDefault,
								$elm$core$Platform$Cmd$none,
								A2(
									$elm$core$Maybe$map,
									$author$project$Utils$ResultUtils$toCmd,
									A2($author$project$Main$pathsToCmd, newModel, ld.A))));
					} else {
						var album = albumOrList.a;
						var _v7 = A3($author$project$AlbumPage$initThumbs, album, ld.dI, ld.B);
						var albumPageModel = _v7.a;
						var albumPageCmd = _v7.b;
						var newModel = $author$project$Main$LoadedAlbum(
							{j: albumPageModel, B: ld.B, i: ld.i, K: ld.K, o: ld.o, Q: 1, bB: _List_Nil, aT: $elm$core$Maybe$Nothing});
						return _Utils_Tuple2(
							newModel,
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2(
										$elm$core$Platform$Cmd$map,
										A2($elm$core$Basics$composeL, $author$project$Main$Album, $author$project$Main$PageMsg),
										albumPageCmd),
										A2(
										$elm$core$Maybe$withDefault,
										$elm$core$Platform$Cmd$none,
										A2(
											$elm$core$Maybe$map,
											$author$project$Utils$ResultUtils$toCmd,
											A2($author$project$Main$pathsToCmd, newModel, ld.A)))
									])));
					}
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			default:
				var err = bootstrapMsg.a;
				return _Utils_Tuple2(
					$author$project$Main$LoadError(
						{
							cz: err,
							i: $author$project$Main$flagsOf(model),
							o: $author$project$Main$keyOf(model)
						}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$NoHome = {$: 2};
var $author$project$Main$YesHome = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{cn: $elm$http$Http$emptyBody, cB: r.cB, d0: _List_Nil, ef: 'GET', eW: $elm$core$Maybe$Nothing, e$: $elm$core$Maybe$Nothing, ca: r.ca});
};
var $author$project$Main$withScrollPos = F2(
	function (rootDivViewport, model) {
		switch (model.$) {
			case 0:
				return model;
			case 1:
				return model;
			case 2:
				return model;
			case 3:
				return model;
			case 4:
				return model;
			case 6:
				var la = model.a;
				var _v1 = la.j;
				if (!_v1.$) {
					var th = _v1.a;
					var oldVpInfo = th.n;
					return $author$project$Main$LoadedAlbum(
						_Utils_update(
							la,
							{
								j: $author$project$AlbumPage$Thumbs(
									_Utils_update(
										th,
										{
											n: _Utils_update(
												oldVpInfo,
												{
													aT: $elm$core$Maybe$Just(rootDivViewport)
												})
										})),
								aT: $elm$core$Maybe$Just(rootDivViewport)
							}));
				} else {
					var fi = _v1.a;
					var oldVpInfo = fi.n;
					return $author$project$Main$LoadedAlbum(
						_Utils_update(
							la,
							{
								j: $author$project$AlbumPage$FullImage(
									_Utils_update(
										fi,
										{
											n: _Utils_update(
												oldVpInfo,
												{
													aT: $elm$core$Maybe$Just(rootDivViewport)
												})
										})),
								aT: $elm$core$Maybe$Just(rootDivViewport)
							}));
				}
			default:
				var ll = model.a;
				return $author$project$Main$LoadedList(
					_Utils_update(
						ll,
						{
							aT: $elm$core$Maybe$Just(rootDivViewport)
						}));
		}
	});
var $author$project$Main$updateGeneral = F2(
	function (generalMsg, model) {
		switch (generalMsg.$) {
			case 0:
				var viewport = generalMsg.a;
				switch (model.$) {
					case 0:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					case 1:
						var sz = model.a;
						return _Utils_Tuple2(
							$author$project$Main$LoadingHomeLink(
								{
									A: sz.A,
									B: sz.B,
									dI: A2($author$project$Utils$DebugSupport$log, 'window size set', viewport),
									i: sz.i,
									o: sz.o
								}),
							A2(
								$elm$core$Platform$Cmd$map,
								$author$project$Main$Bootstrap,
								$elm$http$Http$get(
									{
										cB: $elm$http$Http$expectString(
											A2(
												$author$project$Utils$ResultUtils$either,
												function (_v2) {
													return $author$project$Main$NoHome;
												},
												$author$project$Main$YesHome)),
										ca: 'home'
									})));
					case 2:
						var lh = model.a;
						return _Utils_Tuple2(
							$author$project$Main$LoadingHomeLink(
								_Utils_update(
									lh,
									{dI: viewport})),
							$elm$core$Platform$Cmd$none);
					case 3:
						var ld = model.a;
						return _Utils_Tuple2(
							$author$project$Main$Loading(
								_Utils_update(
									ld,
									{
										dI: A2($author$project$Utils$DebugSupport$log, 'window size updated during load', viewport)
									})),
							$elm$core$Platform$Cmd$none);
					case 4:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					case 6:
						var la = model.a;
						var _v3 = la.j;
						if (!_v3.$) {
							var th = _v3.a;
							var oldVpInfo = th.n;
							var newModel = $author$project$AlbumPage$Thumbs(
								_Utils_update(
									th,
									{
										n: _Utils_update(
											oldVpInfo,
											{
												dI: A2($author$project$Utils$DebugSupport$log, 'window size updated for thumbs', viewport)
											})
									}));
							return _Utils_Tuple2(
								$author$project$Main$LoadedAlbum(
									_Utils_update(
										la,
										{j: newModel})),
								$elm$core$Platform$Cmd$none);
						} else {
							var fi = _v3.a;
							var oldVpInfo = fi.n;
							return _Utils_Tuple2(
								$author$project$Main$LoadedAlbum(
									_Utils_update(
										la,
										{
											j: $author$project$AlbumPage$FullImage(
												_Utils_update(
													fi,
													{
														n: _Utils_update(
															oldVpInfo,
															{
																dI: A2($author$project$Utils$DebugSupport$log, 'window size updated for full', viewport)
															})
													}))
										})),
								A2(
									$elm$core$Platform$Cmd$map,
									A2($elm$core$Basics$composeL, $author$project$Main$Album, $author$project$Main$PageMsg),
									$author$project$AlbumPage$getImgPosition));
						}
					default:
						var ll = model.a;
						var _v4 = ll.y;
						var alp = _v4;
						return _Utils_Tuple2(
							$author$project$Main$LoadedList(
								_Utils_update(
									ll,
									{
										y: _Utils_update(
											alp,
											{dI: viewport})
									})),
							$elm$core$Platform$Cmd$none);
				}
			case 1:
				var viewport = generalMsg.a;
				return _Utils_Tuple2(
					A2(
						$author$project$Main$withScrollPos,
						A2($author$project$Utils$DebugSupport$log, 'ScrolledTo: ', viewport),
						model),
					$elm$core$Platform$Cmd$none);
			case 2:
				var url = generalMsg.a;
				return _Utils_Tuple2(
					model,
					A2($author$project$Main$navToMsg, model, url));
			default:
				var url = generalMsg.a;
				return _Utils_Tuple2(
					model,
					$elm$browser$Browser$Navigation$load(
						A2($author$project$Utils$DebugSupport$log, 'loading external url, assumed to be home', url)));
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		var _v8 = A2($author$project$Utils$DebugSupport$log, 'update msg', msg);
		switch (_v8.$) {
			case 0:
				var albumBootstrapMsg = _v8.a;
				return A2($author$project$Main$updateBootstrap, albumBootstrapMsg, model);
			case 1:
				var albumMetaMsg = _v8.a;
				return A2($author$project$Main$updateMeta, albumMetaMsg, model);
			case 2:
				var albumMsg = _v8.a;
				return A2($author$project$Main$updateAlbum, albumMsg, model);
			default:
				var generalMsg = _v8.a;
				return A2($author$project$Main$updateGeneral, generalMsg, model);
		}
	});
var $author$project$Main$updateMeta = F2(
	function (albumMetaMsg, model) {
		switch (albumMetaMsg.$) {
			case 0:
				var next = albumMetaMsg.a;
				var rest = albumMetaMsg.b;
				var _v1 = A2($author$project$Main$update, next, model);
				var nextModel = _v1.a;
				var nextCmd = _v1.b;
				if (!rest.b) {
					return _Utils_Tuple2(
						nextModel,
						A2(
							$author$project$Utils$DebugSupport$log,
							'sequence msg ' + ($author$project$Utils$DebugSupport$debugString(next) + ' (last) produces cmd'),
							nextCmd));
				} else {
					var r1 = rest.a;
					var rs = rest.b;
					var _v3 = A2($author$project$Main$update, r1, nextModel);
					var r1Model = _v3.a;
					var r1Cmds = _v3.b;
					var _v4 = function () {
						if (!rs.b) {
							return _Utils_Tuple2(r1Model, r1Cmds);
						} else {
							var rs1 = rs.a;
							var rss = rs.b;
							var _v6 = A2(
								$author$project$Main$update,
								$author$project$Main$Meta(
									A2($author$project$Main$Sequence, rs1, rss)),
								r1Model);
							var rsModel = _v6.a;
							var rsCmds = _v6.b;
							return _Utils_Tuple2(
								rsModel,
								$author$project$Utils$ResultUtils$toCmd(
									$author$project$Main$Meta(
										A2(
											$author$project$Main$SequenceCmd,
											r1Cmds,
											_List_fromArray(
												[rsCmds])))));
						}
					}();
					var rModel = _v4.a;
					var rCmds = _v4.b;
					return _Utils_Tuple2(
						rModel,
						$author$project$Utils$ResultUtils$toCmd(
							$author$project$Main$Meta(
								A2(
									$author$project$Main$SequenceCmd,
									A2(
										$author$project$Utils$DebugSupport$log,
										'sequence msg ' + ($author$project$Utils$DebugSupport$debugString(next) + ' (cont\'d) produces cmd'),
										nextCmd),
									_List_fromArray(
										[rCmds])))));
				}
			case 1:
				var next = albumMetaMsg.a;
				var rest = albumMetaMsg.b;
				var cmds = function () {
					if (!rest.b) {
						return A2($author$project$Utils$DebugSupport$log, 'sequenced cmd: last', next);
					} else {
						var r1 = rest.a;
						var rs = rest.b;
						return $elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($author$project$Utils$DebugSupport$log, 'sequenced cmd: next', next),
									$author$project$Utils$ResultUtils$toCmd(
									$author$project$Main$Meta(
										A2($author$project$Main$SequenceCmd, r1, rs)))
								]));
					}
				}();
				return _Utils_Tuple2(model, cmds);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$AlbumPage$titleOf = function (albumPage) {
	if (!albumPage.$) {
		var th = albumPage.a;
		return th.g.b9;
	} else {
		var fi = albumPage.a;
		return fi.g.bU.bK;
	}
};
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_v0, styles) {
		var newStyles = _v0.b;
		var classname = _v0.c;
		return $elm$core$List$isEmpty(newStyles) ? styles : A3($elm$core$Dict$insert, classname, newStyles, styles);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = function (_v0) {
	var val = _v0.a;
	return val;
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_v6, _v7) {
		var key = _v6.a;
		var html = _v6.b;
		var pairs = _v7.a;
		var styles = _v7.b;
		switch (html.$) {
			case 4:
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v9 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v9.a;
				var finalStyles = _v9.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v10 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v10.a;
				var finalStyles = _v10.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v11 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v11.a;
				var finalStyles = _v11.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v12 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v12.a;
				var finalStyles = _v12.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _v0) {
		var nodes = _v0.a;
		var styles = _v0.b;
		switch (html.$) {
			case 4:
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v2 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v2.a;
				var finalStyles = _v2.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v3 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v3.a;
				var finalStyles = _v3.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v4 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v4.a;
				var finalStyles = _v4.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v5 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v5.a;
				var finalStyles = _v5.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			if (!properties.b) {
				return candidate;
			} else {
				var _v1 = properties.a;
				var styles = _v1.b;
				var classname = _v1.c;
				var rest = properties.b;
				if ($elm$core$String$isEmpty(classname)) {
					var $temp$candidate = candidate,
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				} else {
					var $temp$candidate = $elm$core$Maybe$Just(
						_Utils_Tuple2(classname, styles)),
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties = function (properties) {
	var _v0 = A2($rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp, $elm$core$Maybe$Nothing, properties);
	if (_v0.$ === 1) {
		return $elm$core$Dict$empty;
	} else {
		var _v1 = _v0.a;
		var classname = _v1.a;
		var styles = _v1.b;
		return A2($elm$core$Dict$singleton, classname, styles);
	}
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _v0) {
		var keyframesByName = _v0.a;
		var declarations = _v0.b;
		switch (declaration.$) {
			case 0:
				var _v2 = declaration.a;
				var properties = _v2.c;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 1:
				var styleBlocks = declaration.b;
				return A2(
					$elm$core$List$all,
					function (_v3) {
						var properties = _v3.c;
						return $elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 2:
				var otherDeclarations = declaration.b;
				return $elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 3:
				return _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 4:
				var properties = declaration.b;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 5:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 6:
				var record = declaration.a;
				return $elm$core$String$isEmpty(record.dR) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3($elm$core$Dict$insert, record.ei, record.dR, keyframesByName),
					declarations);
			case 7:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 8:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					$elm$core$List$all,
					function (_v4) {
						var properties = _v4.b;
						return $elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
		}
	});
var $rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 6, a: a};
};
var $rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			$elm$core$List$append,
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var decl = _v0.b;
					return $rtfeldman$elm_css$Css$Structure$Keyframes(
						{dR: decl, ei: name});
				},
				$elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_v0) {
	var charset = _v0.cr;
	var imports = _v0.cI;
	var namespaces = _v0.c5;
	var declarations = _v0.dS;
	var _v1 = A3(
		$elm$core$List$foldr,
		$rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _v1.a;
	var compactedDeclarations = _v1.b;
	var finalDeclarations = A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {cr: charset, dS: finalDeclarations, cI: imports, c5: namespaces};
};
var $rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.cD + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$append(': '),
			expression.ac)) + ')'));
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType) {
		case 0:
			return 'print';
		case 1:
			return 'screen';
		default:
			return 'speech';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				$elm$core$String$join,
				' and ',
				A2(
					$elm$core$List$cons,
					$rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 0:
			var expressions = mediaQuery.a;
			return A2(
				$elm$core$String$join,
				' and ',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions));
		case 1:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 2:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + ($rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var $rtfeldman$elm_css$Css$Structure$Output$importToString = function (_v0) {
	var name = _v0.a;
	var mediaQueries = _v0.b;
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
			mediaQueries));
};
var $rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_v0) {
	var prefix = _v0.a;
	var str = _v0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var $rtfeldman$elm_css$Css$Structure$Output$spaceIndent = '    ';
var $rtfeldman$elm_css$Css$Structure$Output$indent = function (str) {
	return _Utils_ap($rtfeldman$elm_css$Css$Structure$Output$spaceIndent, str);
};
var $rtfeldman$elm_css$Css$Structure$Output$noIndent = '';
var $rtfeldman$elm_css$Css$Structure$Output$emitProperty = function (str) {
	return str + ';';
};
var $rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $rtfeldman$elm_css$Css$Structure$Output$indent, $rtfeldman$elm_css$Css$Structure$Output$emitProperty),
			properties));
};
var $elm$core$String$append = _String_append;
var $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_v0) {
	var str = _v0;
	return '::' + str;
};
var $rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator) {
		case 0:
			return '+';
		case 1:
			return '~';
		case 2:
			return '>';
		default:
			return '';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 0:
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 1:
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 2:
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 0:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
		case 1:
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return $elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A2(
				$elm$core$String$join,
				'',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors));
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_v0) {
	var combinator = _v0.a;
	var sequence = _v0.b;
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator),
				$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence)
			]));
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_v0) {
	var simpleSelectorSequence = _v0.a;
	var chain = _v0.b;
	var pseudoElement = _v0.c;
	var segments = A2(
		$elm$core$List$cons,
		$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			[
				A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement))
			]));
	return A2(
		$elm$core$String$append,
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$filter,
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
				segments)),
		pseudoElementsString);
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		var selectorStr = A2(
			$elm$core$String$join,
			', ',
			A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Structure$Output$selectorToString,
				A2($elm$core$List$cons, firstSelector, otherSelectors)));
		return A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					selectorStr,
					' {\n',
					indentLevel,
					$rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties),
					'\n',
					indentLevel,
					'}'
				]));
	});
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 0:
			var styleBlock = decl.a;
			return A2($rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, $rtfeldman$elm_css$Css$Structure$Output$noIndent, styleBlock);
		case 1:
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A2(
				$elm$core$String$join,
				',\n',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, mediaQueries));
			var blocks = A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						$rtfeldman$elm_css$Css$Structure$Output$indent,
						$rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock($rtfeldman$elm_css$Css$Structure$Output$spaceIndent)),
					styleBlocks));
			return '@media ' + (query + (' {\n' + (blocks + '\n}')));
		case 2:
			return 'TODO';
		case 3:
			return 'TODO';
		case 4:
			return 'TODO';
		case 5:
			return 'TODO';
		case 6:
			var name = decl.a.ei;
			var declaration = decl.a.dR;
			return '@keyframes ' + (name + (' {\n' + (declaration + '\n}')));
		case 7:
			return 'TODO';
		case 8:
			return 'TODO';
		default:
			return 'TODO';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_v0) {
	var charset = _v0.cr;
	var imports = _v0.cI;
	var namespaces = _v0.c5;
	var declarations = _v0.dS;
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$importToString, imports)),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$namespaceToString, namespaces)),
					A2(
					$elm$core$String$join,
					'\n\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, declarations))
				])));
};
var $rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 8, a: a};
};
var $rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 5, a: a};
};
var $rtfeldman$elm_css$Css$Structure$PageRule = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 7, a: a};
};
var $rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		return A3(
			$rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var $rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 0:
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2($rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 1:
						var _v1 = declarations.a;
						var mediaQueries = _v1.a;
						var styleBlocks = _v1.b;
						return _List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									$rtfeldman$elm_css$Css$Structure$mapLast,
									$rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					$rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2($elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var $rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _v0) {
		var sequence = _v0.a;
		var selectors = _v0.b;
		return A3(
			$rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			$elm$core$Maybe$Just(pseudo));
	});
var $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 1, a: a};
};
var $rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 0:
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 1:
				var list = sequence.a;
				return $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _v1 = list.a;
				var combinator = _v1.a;
				var sequence = _v1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (!declarations.a.$) {
				var _v1 = declarations.a.a;
				var firstSelector = _v1.a;
				var otherSelectors = _v1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2($elm$core$List$cons, firstSelector, otherSelectors),
					$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e};
	});
var $rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_v0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 0:
							var styleBlock = declarations.a.a;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 1:
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _v1 = declarations.a;
									var mediaQueries = _v1.a;
									var _v2 = _v1.b;
									var styleBlock = _v2.a;
									return _List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _v3 = declarations.a;
									var mediaQueries = _v3.a;
									var _v4 = _v3.b;
									var first = _v4.a;
									var rest = _v4.b;
									var _v5 = A2(
										$rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_v5.b && (_v5.a.$ === 1)) && (!_v5.b.b)) {
										var _v6 = _v5.a;
										var newMediaQueries = _v6.a;
										var newStyleBlocks = _v6.b;
										return _List_fromArray(
											[
												A2(
												$rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2($elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _v5;
										return newDeclarations;
									}
								}
							} else {
								break _v0$12;
							}
						case 2:
							var _v7 = declarations.a;
							var str = _v7.a;
							var nestedDeclarations = _v7.b;
							return _List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 3:
							var _v8 = declarations.a;
							var str1 = _v8.a;
							var str2 = _v8.b;
							var str3 = _v8.c;
							var str4 = _v8.d;
							var styleBlock = _v8.e;
							return A2(
								$elm$core$List$map,
								A4($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 4:
							var _v9 = declarations.a;
							return declarations;
						case 5:
							return declarations;
						case 6:
							return declarations;
						case 7:
							return declarations;
						case 8:
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			$elm$core$List$cons,
			first,
			A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var $elm$core$String$cons = _String_cons;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {aE: charsProcessed, aL: hash, ax: seed, eI: shift};
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1 = 3432918353;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$finalize = function (data) {
	var acc = (!(!data.aL)) ? (data.ax ^ A2(
		$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
		$rtfeldman$elm_css$ElmCssVendor$Murmur3$c2,
		A2(
			$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
			15,
			A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1, data.aL)))) : data.ax;
	var h0 = acc ^ data.aE;
	var h1 = A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
			5,
			A2(
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
					$rtfeldman$elm_css$ElmCssVendor$Murmur3$c2,
					A2(
						$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
						15,
						A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1, k1))))) + 3864292196;
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.aL | ((255 & $elm$core$Char$toCode(c)) << data.eI);
		var _v0 = data.eI;
		if (_v0 === 24) {
			return {
				aE: data.aE + 1,
				aL: 0,
				ax: A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$mix, data.ax, res),
				eI: 0
			};
		} else {
			return {aE: data.aE + 1, aL: res, ax: data.ax, eI: data.eI + 8};
		}
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString = F2(
	function (seed, str) {
		return $rtfeldman$elm_css$ElmCssVendor$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$hashFold,
				A4($rtfeldman$elm_css$ElmCssVendor$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $rtfeldman$elm_css$Hash$murmurSeed = 15739;
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Basics$modBy = _Basics_modBy;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return '0';
			case 1:
				return '1';
			case 2:
				return '2';
			case 3:
				return '3';
			case 4:
				return '4';
			case 5:
				return '5';
			case 6:
				return '6';
			case 7:
				return '7';
			case 8:
				return '8';
			case 9:
				return '9';
			case 10:
				return 'a';
			case 11:
				return 'b';
			case 12:
				return 'c';
			case 13:
				return 'd';
			case 14:
				return 'e';
			case 15:
				return 'f';
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			'-',
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		$elm$core$String$cons,
		'_',
		$rtfeldman$elm_hex$Hex$toString(
			A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString, $rtfeldman$elm_css$Hash$murmurSeed, str)));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 1) {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 9, a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				$elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (!declaration.$) {
			var styleBlock = declaration.a;
			return A2(
				$rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (!declaration.$) {
			var structureStyleBlock = declaration.a;
			return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 0:
				var structureStyleBlock = declaration.a;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 1:
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 2:
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 3:
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 4:
				return declaration;
			case 5:
				return declaration;
			case 6:
				return declaration;
			case 7:
				return declaration;
			case 8:
				return declaration;
			default:
				return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_v0) {
	var declarations = _v0;
	return declarations;
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$elm$core$List$tail(decls));
		};
		var nextResult = A2(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _v14 = _Utils_Tuple2(
				$elm$core$List$head(nextResult),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((!_v14.a.$) && (!_v14.b.$)) {
				var nextResultParent = _v14.a.a;
				var originalParent = _v14.b.a;
				return _Utils_ap(
					A2(
						$elm$core$List$take,
						$elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return $elm$core$List$concat(
				A2(
					$rtfeldman$elm_css$Css$Structure$mapLast,
					$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						$elm$core$List$map,
						$elm$core$List$singleton,
						A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				insertStylesToNestedDecl,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 0:
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 1:
					var _v4 = styles.a;
					var selector = _v4.a;
					var nestedStyles = _v4.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 2:
					var _v5 = styles.a;
					var selectorCombinator = _v5.a;
					var snippets = _v5.b;
					var rest = styles.b;
					var chain = F2(
						function (_v9, _v10) {
							var originalSequence = _v9.a;
							var originalTuples = _v9.b;
							var originalPseudoElement = _v9.c;
							var newSequence = _v10.a;
							var newTuples = _v10.b;
							var newPseudoElement = _v10.c;
							return A3(
								$rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								$rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 0:
								var _v7 = declaration.a;
								var firstSelector = _v7.a;
								var otherSelectors = _v7.b;
								var nestedStyles = _v7.c;
								var newSelectors = A2(
									$elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											$elm$core$List$map,
											chain(originalSelector),
											A2($elm$core$List$cons, firstSelector, otherSelectors));
									},
									$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 1:
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 2:
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 3:
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									$elm$core$List$map,
									A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 4:
								var str = declaration.a;
								var properties = declaration.b;
								return _List_fromArray(
									[
										A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
									]);
							case 5:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 6:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 7:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return $elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								$elm$core$List$map,
								expandDeclaration,
								A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 3:
					var _v11 = styles.a;
					var pseudoElement = _v11.a;
					var nestedStyles = _v11.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 5:
					var str = styles.a.a;
					var rest = styles.b;
					var name = $rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						$elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$Keyframes(
								{dR: str, ei: name})
							]));
				case 4:
					var _v12 = styles.a;
					var mediaQueries = _v12.a;
					var nestedStyles = _v12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _v13 = $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_v13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _v13.a;
							var otherSelectors = _v13.b;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									$elm$core$List$singleton(
										$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_v2) {
	var firstSelector = _v2.a;
	var otherSelectors = _v2.b;
	var styles = _v2.c;
	return A2(
		$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			$rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2($elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 0:
			var styleBlock = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 1:
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 2:
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 3:
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				$elm$core$List$map,
				A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 4:
			var str = snippetDeclaration.a;
			var properties = snippetDeclaration.b;
			return _List_fromArray(
				[
					A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
				]);
		case 5:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 6:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 7:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_v0) {
	var charset = _v0.cr;
	var imports = _v0.cI;
	var namespaces = _v0.c5;
	var snippets = _v0.dq;
	var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {cr: charset, dS: declarations, cI: imports, c5: namespaces};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp = function (sheet) {
	return $rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		$rtfeldman$elm_css$Css$Structure$compactStylesheet(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (styles) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp, styles));
};
var $rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Snippet = $elm$core$Basics$identity;
var $rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
		return _List_fromArray(
			[
				$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
			]);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair = function (_v0) {
	var classname = _v0.a;
	var styles = _v0.b;
	return A2(
		$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
		styles,
		$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$ClassSelector(classname)
				])));
};
var $rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {cr: $elm$core$Maybe$Nothing, cI: _List_Nil, c5: _List_Nil, dq: snippets};
};
var $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return $rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
		$elm$core$List$singleton(
			$rtfeldman$elm_css$Css$Preprocess$stylesheet(
				A2(
					$elm$core$List$map,
					$rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair,
					$elm$core$Dict$toList(dict)))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = function (styles) {
	return A3(
		$elm$virtual_dom$VirtualDom$node,
		'style',
		_List_Nil,
		$elm$core$List$singleton(
			$elm$virtual_dom$VirtualDom$text(
				$rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _v1 = pairs.a;
				var str = _v1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _v1 = pairs.a;
				var firstKey = _v1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2($rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var styleNodeKey = A2($rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(allStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			$elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F4(
	function (ns, elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A4(
			$elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F4(
	function (ns, elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 4:
			var plainNode = vdom.a;
			return plainNode;
		case 0:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyle, elemType, properties, children);
		case 1:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, ns, elemType, properties, children);
		case 2:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, ns, elemType, properties, children);
	}
};
var $rtfeldman$elm_css$Html$Styled$toUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var $author$project$Main$ScrolledTo = function (a) {
	return {$: 1, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 4, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$text = function (str) {
	return $rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
		$elm$virtual_dom$VirtualDom$text(str));
};
var $rtfeldman$elm_css$Html$Styled$text = $rtfeldman$elm_css$VirtualDom$Styled$text;
var $rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$color = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'color', c.ac);
};
var $rtfeldman$elm_css$Css$EmUnits = 0;
var $rtfeldman$elm_css$Css$Structure$Compatible = 0;
var $elm$core$String$fromFloat = _String_fromNumber;
var $rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			ce: 0,
			cp: 0,
			aI: 0,
			C: 0,
			a6: 0,
			aN: 0,
			aj: 0,
			aO: 0,
			aP: 0,
			at: 0,
			au: 0,
			Z: 0,
			al: numericValue,
			aW: 0,
			aY: unitLabel,
			bh: units,
			ac: _Utils_ap(
				$elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var $rtfeldman$elm_css$Css$em = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'em');
var $rtfeldman$elm_css$Css$Internal$IncompatibleUnits = 0;
var $rtfeldman$elm_css$Css$initial = {cg: 0, ch: 0, a0: 0, ci: 0, aC: 0, cj: 0, aD: 0, ae: 0, G: 0, bl: 0, dM: 0, b: 0, r: 0, aI: 0, bS: 0, a5: 0, bo: 0, ar: 0, C: 0, aJ: 0, k: 0, ai: 0, bq: 0, cN: 0, bX: 0, a6: 0, aN: 0, aj: 0, aO: 0, aP: 0, at: 0, au: 0, Z: 0, br: 0, d: 0, c: 0, b$: 0, a8: 0, al: 0, bA: 0, aQ: 0, W: 0, bI: 0, aV: 0, ay: 0, aW: 0, aX: 0, az: 0, M: 0, aY: '', bh: 0, ac: 'initial', bj: 0, aq: 0};
var $rtfeldman$elm_css$Css$inherit = _Utils_update(
	$rtfeldman$elm_css$Css$initial,
	{ac: 'inherit'});
var $rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			$rtfeldman$elm_css$Css$property,
			key,
			A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.ac, argB.ac])));
	});
var $rtfeldman$elm_css$Css$padding2 = $rtfeldman$elm_css$Css$prop2('padding');
var $rtfeldman$elm_css$Html$Styled$span = $rtfeldman$elm_css$Html$Styled$node('span');
var $rtfeldman$elm_css$VirtualDom$Styled$murmurSeed = 15739;
var $rtfeldman$elm_css$VirtualDom$Styled$getClassname = function (styles) {
	return $elm$core$List$isEmpty(styles) ? 'unstyled' : A2(
		$elm$core$String$cons,
		'_',
		$rtfeldman$elm_hex$Hex$toString(
			A2(
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString,
				$rtfeldman$elm_css$VirtualDom$Styled$murmurSeed,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
					$elm$core$List$singleton(
						$rtfeldman$elm_css$Css$Preprocess$stylesheet(
							$elm$core$List$singleton(
								A2(
									$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
									styles,
									$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_List_Nil)))))))));
};
var $rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var classname = $rtfeldman$elm_css$VirtualDom$Styled$getClassname(styles);
	var classProperty = A2(
		$elm$virtual_dom$VirtualDom$property,
		'className',
		$elm$json$Json$Encode$string(classname));
	return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, styles, classname);
};
var $rtfeldman$elm_css$Html$Styled$Attributes$css = $rtfeldman$elm_css$Html$Styled$Internal$css;
var $author$project$AlbumStyles$styles = $rtfeldman$elm_css$Html$Styled$Attributes$css;
var $rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2($rtfeldman$elm_css$Css$property, key, arg.ac);
	});
var $rtfeldman$elm_css$Css$textDecoration = $rtfeldman$elm_css$Css$prop1('text-decoration');
var $rtfeldman$elm_css$Css$underline = {aV: 0, ac: 'underline'};
var $author$project$ThumbPage$albumParent = F4(
	function (a, getTitle, showList, albumList) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$span,
			_List_Nil,
			_List_fromArray(
				[
					A3(
					a,
					showList(albumList),
					_List_fromArray(
						[
							$author$project$AlbumStyles$styles(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$underline),
									$rtfeldman$elm_css$Css$color($rtfeldman$elm_css$Css$inherit)
								]))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(
							getTitle(albumList))
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$span,
					_List_fromArray(
						[
							$author$project$AlbumStyles$styles(
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$padding2,
									$rtfeldman$elm_css$Css$em(0),
									$rtfeldman$elm_css$Css$em(0.5))
								]))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text('<')
						]))
				]));
	});
var $rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'background-color', c.ac);
};
var $rtfeldman$elm_css$Css$center = $rtfeldman$elm_css$Css$prop1('center');
var $rtfeldman$elm_css$Html$Styled$div = $rtfeldman$elm_css$Html$Styled$node('div');
var $author$project$ThumbPage$getAlbumListTitle = function (a) {
	return a.bZ;
};
var $rtfeldman$elm_css$Css$padding = $rtfeldman$elm_css$Css$prop1('padding');
var $rtfeldman$elm_css$Css$PxUnits = 0;
var $rtfeldman$elm_css$Css$px = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'px');
var $rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return funcName + ('(' + (A2($elm$core$String$join, ', ', args) + ')'));
	});
var $rtfeldman$elm_css$Css$rgba = F4(
	function (r, g, b, alpha) {
		return {
			E: alpha,
			F: b,
			dM: 0,
			J: g,
			L: r,
			ac: A2(
				$rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				_Utils_ap(
					A2(
						$elm$core$List$map,
						$elm$core$String$fromInt,
						_List_fromArray(
							[r, g, b])),
					_List_fromArray(
						[
							$elm$core$String$fromFloat(alpha)
						])))
		};
	});
var $rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 6, a: a};
};
var $rtfeldman$elm_css$Css$Internal$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$Internal$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			switch (style.$) {
				case 0:
					var str = style.a;
					var key = A2(
						$elm$core$Maybe$withDefault,
						'',
						$elm$core$List$head(
							A2($elm$core$String$split, ':', str)));
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, key);
				case 1:
					var selector = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-selector'));
				case 2:
					var combinator = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-combinator'));
				case 3:
					var pseudoElement = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-pseudo-element setter'));
				case 4:
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-media-query'));
				case 5:
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-keyframes'));
				default:
					if (!style.a.b) {
						return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-empty-Style'));
					} else {
						if (!style.a.b.b) {
							var _v1 = style.a;
							var only = _v1.a;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = only;
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						} else {
							var _v2 = style.a;
							var first = _v2.a;
							var rest = _v2.b;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = $rtfeldman$elm_css$Css$Preprocess$ApplyStyles(rest);
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var $rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty = A3($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '', 0);
var $rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$VwUnits = 0;
var $rtfeldman$elm_css$Css$vw = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'vw');
var $rtfeldman$elm_css$Css$rgb = F3(
	function (r, g, b) {
		return {
			E: 1,
			F: b,
			dM: 0,
			J: g,
			L: r,
			ac: A2(
				$rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					$elm$core$List$map,
					$elm$core$String$fromInt,
					_List_fromArray(
						[r, g, b])))
		};
	});
var $author$project$AlbumStyles$white = A3($rtfeldman$elm_css$Css$rgb, 255, 255, 255);
var $rtfeldman$elm_css$Css$width = $rtfeldman$elm_css$Css$prop1('width');
var $author$project$ThumbPage$albumTitle = F6(
	function (a, title, parents, showList, extraHtml, extraStyles) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$author$project$AlbumStyles$styles(
					_Utils_ap(
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$color($author$project$AlbumStyles$white),
								$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
								$rtfeldman$elm_css$Css$width(
								$rtfeldman$elm_css$Css$vw(100)),
								$rtfeldman$elm_css$Css$backgroundColor(
								A4($rtfeldman$elm_css$Css$rgba, 40, 40, 40, 0.5)),
								$rtfeldman$elm_css$Css$padding(
								$rtfeldman$elm_css$Css$px(5))
							]),
						extraStyles))
				]),
			_Utils_ap(
				A2(
					$elm$core$List$map,
					A3($author$project$ThumbPage$albumParent, a, $author$project$ThumbPage$getAlbumListTitle, showList),
					$elm$core$List$reverse(parents)),
				_Utils_ap(
					extraHtml,
					_List_fromArray(
						[
							A2(
							$rtfeldman$elm_css$Html$Styled$span,
							_List_Nil,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text(title)
								]))
						]))));
	});
var $rtfeldman$elm_css$Css$row = {bS: 0, a5: 0, ac: 'row'};
var $rtfeldman$elm_css$Css$column = _Utils_update(
	$rtfeldman$elm_css$Css$row,
	{ac: 'column'});
var $rtfeldman$elm_css$Css$fixed = {a0: 0, eu: 0, bI: 0, ac: 'fixed'};
var $rtfeldman$elm_css$Css$hidden = {G: 0, aQ: 0, ac: 'hidden', bj: 0};
var $rtfeldman$elm_css$Css$position = $rtfeldman$elm_css$Css$prop1('position');
var $rtfeldman$elm_css$Css$displayFlex = A2($rtfeldman$elm_css$Css$property, 'display', 'flex');
var $rtfeldman$elm_css$Css$flexDirection = $rtfeldman$elm_css$Css$prop1('flex-direction');
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $rtfeldman$elm_css$Css$auto = {dC: 0, b: 0, aI: 0, bq: 0, ea: 0, aN: 0, aj: 0, Z: 0, aQ: 0, W: 0, bI: 0, aX: 0, M: 0, ac: 'auto'};
var $author$project$AlbumStyles$black = A3($rtfeldman$elm_css$Css$rgb, 0, 0, 0);
var $rtfeldman$elm_css$Css$height = $rtfeldman$elm_css$Css$prop1('height');
var $rtfeldman$elm_css$Html$Styled$Attributes$id = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('id');
var $rtfeldman$elm_css$Css$overflowX = $rtfeldman$elm_css$Css$prop1('overflow-x');
var $rtfeldman$elm_css$Css$overflowY = $rtfeldman$elm_css$Css$prop1('overflow-y');
var $rtfeldman$elm_css$Css$absolute = {eu: 0, ac: 'absolute'};
var $author$project$AlbumStyles$rootPos = function (flags) {
	return flags.dp ? $rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$fixed) : $rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute);
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$map6 = _Json_map6;
var $author$project$AlbumStyles$viewportDecoder = A7(
	$elm$json$Json$Decode$map6,
	function (width) {
		return function (height) {
			return function (x) {
				return function (y) {
					return function (vwidth) {
						return function (vheight) {
							return {
								eD: {bT: height, cb: width},
								bi: {bT: vheight, cb: vwidth, cc: x, cd: y}
							};
						};
					};
				};
			};
		};
	},
	A2($elm$json$Json$Decode$field, 'scrollWidth', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'scrollHeight', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'scrollLeft', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'scrollTop', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientWidth', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientHeight', $elm$json$Json$Decode$float));
var $author$project$AlbumStyles$rootDiv = F4(
	function (flags, scrollMsgMaker, viewport, extraStyles) {
		return $rtfeldman$elm_css$Html$Styled$div(
			_Utils_ap(
				_List_fromArray(
					[
						$author$project$AlbumStyles$styles(
						_Utils_ap(
							_List_fromArray(
								[
									$author$project$AlbumStyles$rootPos(flags),
									$rtfeldman$elm_css$Css$height(
									$rtfeldman$elm_css$Css$px(viewport.bi.bT)),
									$rtfeldman$elm_css$Css$width(
									$rtfeldman$elm_css$Css$vw(100)),
									$rtfeldman$elm_css$Css$overflowX($rtfeldman$elm_css$Css$hidden),
									$rtfeldman$elm_css$Css$overflowY($rtfeldman$elm_css$Css$auto),
									A2($rtfeldman$elm_css$Css$property, '-webkit-overflow-scrolling', 'touch'),
									$rtfeldman$elm_css$Css$backgroundColor($author$project$AlbumStyles$black)
								]),
							extraStyles)),
						$rtfeldman$elm_css$Html$Styled$Attributes$id($author$project$AlbumStyles$rootDivId)
					]),
				function () {
					if (scrollMsgMaker.$ === 1) {
						return _List_Nil;
					} else {
						var sMM = scrollMsgMaker.a;
						return _List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Html$Styled$Events$on,
								'scroll',
								A2(
									$elm$json$Json$Decode$map,
									sMM,
									A2(
										$elm$json$Json$Decode$at,
										_List_fromArray(
											['target']),
										$author$project$AlbumStyles$viewportDecoder)))
							]);
					}
				}()));
	});
var $author$project$AlbumStyles$rootDivFlex = F5(
	function (flags, dir, scrollMsgMaker, viewport, extraStyles) {
		return A4(
			$author$project$AlbumStyles$rootDiv,
			flags,
			scrollMsgMaker,
			viewport,
			_Utils_ap(
				_List_fromArray(
					[
						$rtfeldman$elm_css$Css$displayFlex,
						$rtfeldman$elm_css$Css$flexDirection(dir)
					]),
				extraStyles));
	});
var $rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$flexShrink = $rtfeldman$elm_css$Css$prop1('flex-shrink');
var $rtfeldman$elm_css$Css$UnitlessInteger = 0;
var $rtfeldman$elm_css$Css$int = function (val) {
	return {
		ai: 0,
		bq: 0,
		au: 0,
		Z: 0,
		a8: 0,
		bu: 0,
		al: val,
		aY: '',
		bh: 0,
		ac: $elm$core$String$fromInt(val)
	};
};
var $rtfeldman$elm_css$Css$none = {aC: 0, cm: 0, G: 0, b: 0, r: 0, d2: 0, cK: 0, bX: 0, aP: 0, at: 0, Z: 0, d: 0, c: 0, b$: 0, bA: 0, er: 0, W: 0, bE: 0, eF: 0, aV: 0, az: 0, M: 0, m: 0, e3: 0, ac: 'none'};
var $rtfeldman$elm_css$Css$marginLeft = $rtfeldman$elm_css$Css$prop1('margin-left');
var $rtfeldman$elm_css$Css$marginRight = $rtfeldman$elm_css$Css$prop1('margin-right');
var $rtfeldman$elm_css$Css$middle = $rtfeldman$elm_css$Css$prop1('middle');
var $rtfeldman$elm_css$Css$margin = $rtfeldman$elm_css$Css$prop1('margin');
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$attribute = F2(
	function (key, value) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$attribute, key, value),
			_List_Nil,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$attribute = $rtfeldman$elm_css$VirtualDom$Styled$attribute;
var $author$project$ImageViews$encodeSrc = function (is) {
	return $author$project$Utils$ListUtils$encodePath(is.ca) + (' ' + ($elm$core$String$fromInt(is.cc) + 'w'));
};
var $author$project$ImageViews$encodeSrcSet = function (is) {
	return A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $author$project$ImageViews$encodeSrc, is));
};
var $rtfeldman$elm_css$Html$Styled$Attributes$height = function (n) {
	return A2(
		$rtfeldman$elm_css$VirtualDom$Styled$attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $rtfeldman$elm_css$Html$Styled$img = $rtfeldman$elm_css$Html$Styled$node('img');
var $rtfeldman$elm_css$Html$Styled$Attributes$src = function (url) {
	return A2($rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, 'src', url);
};
var $rtfeldman$elm_css$Html$Styled$Attributes$width = function (n) {
	return A2(
		$rtfeldman$elm_css$VirtualDom$Styled$attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $author$project$ImageViews$render = F4(
	function (idefault, is, s, otherAttrs) {
		var srcset = function () {
			if (!is.b) {
				return _List_Nil;
			} else {
				return _List_fromArray(
					[
						A2(
						$rtfeldman$elm_css$Html$Styled$Attributes$attribute,
						'srcset',
						$author$project$ImageViews$encodeSrcSet(is))
					]);
			}
		}();
		var baseAttrs = _List_fromArray(
			[
				$author$project$AlbumStyles$styles(s),
				$rtfeldman$elm_css$Html$Styled$Attributes$src(
				$author$project$Utils$ListUtils$encodePath(idefault.ca)),
				$rtfeldman$elm_css$Html$Styled$Attributes$width(idefault.cc),
				$rtfeldman$elm_css$Html$Styled$Attributes$height(idefault.cd)
			]);
		return A2(
			$rtfeldman$elm_css$Html$Styled$img,
			_Utils_ap(
				baseAttrs,
				_Utils_ap(otherAttrs, srcset)),
			_List_Nil);
	});
var $author$project$ImageViews$renderPresized = F7(
	function (margin, w, h, i, iRest, s, otherAttrs) {
		return A4(
			$author$project$ImageViews$render,
			A4($author$project$ImageViews$smallestImageBiggerThan, w, h, i, iRest),
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						$rtfeldman$elm_css$Css$margin(
						$rtfeldman$elm_css$Css$px(margin)),
						$rtfeldman$elm_css$Css$width(
						$rtfeldman$elm_css$Css$px(w - (2 * margin))),
						$rtfeldman$elm_css$Css$height(
						$rtfeldman$elm_css$Css$px(h - (2 * margin)))
					]),
				s),
			otherAttrs);
	});
var $author$project$ThumbPage$sizeForHeight = function (height) {
	return $author$project$ThumbPage$sizeForScaler(
		function (is1) {
			return height / is1.cd;
		});
};
var $rtfeldman$elm_css$Css$borderRadius = $rtfeldman$elm_css$Css$prop1('border-radius');
var $rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			$rtfeldman$elm_css$Css$property,
			key,
			A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.ac, argB.ac, argC.ac, argD.ac])));
	});
var $rtfeldman$elm_css$Css$boxShadow4 = $rtfeldman$elm_css$Css$prop4('box-shadow');
var $rtfeldman$elm_css$Css$cursor = $rtfeldman$elm_css$Css$prop1('cursor');
var $rtfeldman$elm_css$Css$pointer = {b: 0, ac: 'pointer'};
var $author$project$ThumbPage$thumbStyles = _List_fromArray(
	[
		$rtfeldman$elm_css$Css$borderRadius(
		$rtfeldman$elm_css$Css$px(5)),
		A4(
		$rtfeldman$elm_css$Css$boxShadow4,
		$rtfeldman$elm_css$Css$px(1),
		$rtfeldman$elm_css$Css$px(1),
		$rtfeldman$elm_css$Css$px(2),
		A3($rtfeldman$elm_css$Css$rgb, 80, 80, 80)),
		$rtfeldman$elm_css$Css$cursor($rtfeldman$elm_css$Css$pointer)
	]);
var $rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $author$project$AlbumListPage$renderListImage = function (img) {
	var _v0 = (_Utils_cmp(img.b4.cc, img.b4.cd) > 0) ? A2($author$project$ThumbPage$sizeForWidth, 200, img) : A2($author$project$ThumbPage$sizeForHeight, 200, img);
	var xScaled = _v0.a;
	var yScaled = _v0.b;
	var sideMargin = 10 + A2($elm$core$Basics$max, 0, (yScaled - xScaled) / 2);
	return A7(
		$author$project$ImageViews$renderPresized,
		10,
		xScaled,
		yScaled,
		img.b4,
		img.b5,
		_Utils_ap(
			$author$project$ThumbPage$thumbStyles,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$verticalAlign($rtfeldman$elm_css$Css$middle),
					$rtfeldman$elm_css$Css$marginLeft(
					$rtfeldman$elm_css$Css$px(sideMargin)),
					$rtfeldman$elm_css$Css$marginRight(
					$rtfeldman$elm_css$Css$px(sideMargin)),
					$rtfeldman$elm_css$Css$flexShrink(
					$rtfeldman$elm_css$Css$int(0))
				])),
		_List_Nil);
};
var $author$project$AlbumListPage$viewAlbumOrList = F4(
	function (a, viewList, viewAlbum, albumOrList) {
		var childStyles = $author$project$AlbumStyles$styles(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$color($author$project$AlbumStyles$white),
					$rtfeldman$elm_css$Css$displayFlex,
					$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
					$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
					$rtfeldman$elm_css$Css$flexShrink(
					$rtfeldman$elm_css$Css$int(0))
				]));
		if (!albumOrList.$) {
			var albumList = albumOrList.a;
			return A3(
				a,
				viewList(albumList),
				_List_fromArray(
					[
						$author$project$AlbumStyles$styles(
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
							]))
					]),
				_List_fromArray(
					[
						A2(
						$rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[childStyles]),
						_List_fromArray(
							[
								$author$project$AlbumListPage$renderListImage(albumList.bY),
								A2(
								$rtfeldman$elm_css$Html$Styled$span,
								_List_fromArray(
									[
										$author$project$AlbumStyles$styles(
										_List_fromArray(
											[
												$rtfeldman$elm_css$Css$flexShrink(
												$rtfeldman$elm_css$Css$int(1))
											]))
									]),
								_List_fromArray(
									[
										$rtfeldman$elm_css$Html$Styled$text(albumList.bZ)
									]))
							]))
					]));
		} else {
			var album = albumOrList.a;
			return A3(
				a,
				viewAlbum(album),
				_List_fromArray(
					[
						$author$project$AlbumStyles$styles(
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
							]))
					]),
				_List_fromArray(
					[
						A2(
						$rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[childStyles]),
						_List_fromArray(
							[
								$author$project$AlbumListPage$renderListImage(album.b8),
								A2(
								$rtfeldman$elm_css$Html$Styled$span,
								_List_fromArray(
									[
										$author$project$AlbumStyles$styles(
										_List_fromArray(
											[
												$rtfeldman$elm_css$Css$flexShrink(
												$rtfeldman$elm_css$Css$int(1))
											]))
									]),
								_List_fromArray(
									[
										$rtfeldman$elm_css$Html$Styled$text(album.b9)
									]))
							]))
					]));
		}
	});
var $rtfeldman$elm_css$Css$visibility = $rtfeldman$elm_css$Css$prop1('visibility');
var $author$project$AlbumListPage$view = F6(
	function (_v0, a, viewList, viewAlbum, scrollMsgMaker, flags) {
		var alp = _v0;
		return A6(
			$author$project$AlbumStyles$rootDivFlex,
			flags,
			$rtfeldman$elm_css$Css$column,
			$elm$core$Maybe$Just(scrollMsgMaker),
			alp.dI,
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						A6(
						$author$project$ThumbPage$albumTitle,
						a,
						alp.a_.bZ,
						A2($elm$core$List$map, $elm$core$Tuple$first, alp.bB),
						viewList,
						_List_Nil,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$fixed)
							])),
						A6(
						$author$project$ThumbPage$albumTitle,
						a,
						alp.a_.bZ,
						A2($elm$core$List$map, $elm$core$Tuple$first, alp.bB),
						viewList,
						_List_Nil,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$visibility($rtfeldman$elm_css$Css$hidden)
							]))
					]),
				$elm$core$List$reverse(
					_Utils_ap(
						_List_fromArray(
							[
								A4($author$project$AlbumListPage$viewAlbumOrList, a, viewList, viewAlbum, alp.a_.bM)
							]),
						A2(
							$elm$core$List$map,
							A3($author$project$AlbumListPage$viewAlbumOrList, a, viewList, viewAlbum),
							alp.a_.bN)))));
	});
var $author$project$AlbumPage$ThumbLoaded = function (a) {
	return {$: 12, a: a};
};
var $author$project$AlbumPage$TouchDragContinue = function (a) {
	return {$: 2, a: a};
};
var $author$project$AlbumPage$TouchDragStart = function (a) {
	return {$: 1, a: a};
};
var $author$project$Utils$TouchUtils$NoOffset = {$: 0};
var $author$project$Utils$TouchUtils$Swipe = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Utils$TouchUtils$Zoom = function (a) {
	return {$: 2, a: a};
};
var $author$project$Utils$TouchUtils$Left = 0;
var $author$project$Utils$TouchUtils$Right = 1;
var $author$project$Utils$TouchUtils$getDirectionX = function (distance) {
	var _v0 = distance < 0;
	if (_v0) {
		return 0;
	} else {
		return 1;
	}
};
var $author$project$Utils$TouchUtils$getOffset = function (state) {
	switch (state.$) {
		case 0:
			return $author$project$Utils$TouchUtils$NoOffset;
		case 1:
			var swipe = state.a;
			var _v1 = $author$project$Utils$TouchUtils$coords(swipe.N);
			var x2 = _v1.a;
			var _v2 = $author$project$Utils$TouchUtils$coords(swipe.eM);
			var x1 = _v2.a;
			var distance = x2 - x1;
			return A2(
				$author$project$Utils$TouchUtils$Swipe,
				distance,
				$author$project$Utils$TouchUtils$getDirectionX(distance));
		default:
			var zData = state.a;
			if (!zData.$) {
				var oldZoom = zData.a;
				return $author$project$Utils$TouchUtils$getOffset(
					$author$project$Utils$TouchUtils$ZoomState(oldZoom));
			} else {
				var zoomData = zData.a;
				return $author$project$Utils$TouchUtils$Zoom(
					$author$project$Utils$TouchUtils$getZoomOffset(zoomData));
			}
	}
};
var $author$project$AlbumPage$TouchDragAbandon = {$: 3};
var $author$project$AlbumPage$TouchEndZoom = function (a) {
	return {$: 4, a: a};
};
var $author$project$AlbumPage$minDragLen = 75;
var $author$project$AlbumPage$touchPrevNext = F2(
	function (touchState, _v0) {
		var _v1 = $author$project$Utils$TouchUtils$getOffset(touchState);
		switch (_v1.$) {
			case 0:
				return $author$project$AlbumPage$NoUpdate;
			case 1:
				var distance = _v1.a;
				var direction = _v1.b;
				if (_Utils_cmp(
					$elm$core$Basics$abs(distance),
					$author$project$AlbumPage$minDragLen) > 0) {
					if (!direction) {
						return $author$project$AlbumPage$Next;
					} else {
						return $author$project$AlbumPage$Prev;
					}
				} else {
					return $author$project$AlbumPage$TouchDragAbandon;
				}
			default:
				return $author$project$AlbumPage$TouchEndZoom(touchState);
		}
	});
var $author$project$FullImagePage$getAlbumTitle = function (a) {
	return a.b9;
};
var $author$project$FullImagePage$imgTitleHeight = 5;
var $rtfeldman$elm_css$Css$justifyContent = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'justifyContent',
		'justify-content',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$left = $rtfeldman$elm_css$Css$prop1('left');
var $rtfeldman$elm_css$Css$lineHeight = $rtfeldman$elm_css$Css$prop1('line-height');
var $author$project$AlbumStyles$navEltSize = 50;
var $author$project$AlbumStyles$navBoxStyles = _List_fromArray(
	[
		$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute),
		$rtfeldman$elm_css$Css$height(
		$rtfeldman$elm_css$Css$px($author$project$AlbumStyles$navEltSize)),
		$rtfeldman$elm_css$Css$width(
		$rtfeldman$elm_css$Css$px($author$project$AlbumStyles$navEltSize)),
		$rtfeldman$elm_css$Css$lineHeight(
		$rtfeldman$elm_css$Css$px($author$project$AlbumStyles$navEltSize)),
		$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
		$rtfeldman$elm_css$Css$color($author$project$AlbumStyles$white),
		$rtfeldman$elm_css$Css$backgroundColor(
		A4($rtfeldman$elm_css$Css$rgba, 40, 40, 40, 0.5)),
		$rtfeldman$elm_css$Css$borderRadius(
		$rtfeldman$elm_css$Css$px($author$project$AlbumStyles$navEltSize / 2)),
		$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
	]);
var $author$project$AlbumStyles$navElement = F4(
	function (a, msg, label, side) {
		return A3(
			a,
			msg,
			_List_fromArray(
				[
					$author$project$AlbumStyles$styles(
					_Utils_ap(
						$author$project$AlbumStyles$navBoxStyles,
						_List_fromArray(
							[
								side(
								$rtfeldman$elm_css$Css$px(0))
							])))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(label)
				]));
	});
var $author$project$FullImagePage$navEltIf = F5(
	function (a, lst, navMsg, navTxt, navAlign) {
		return $elm$core$List$isEmpty(lst) ? _List_Nil : _List_fromArray(
			[
				A4($author$project$AlbumStyles$navElement, a, navMsg, navTxt, navAlign)
			]);
	});
var $rtfeldman$elm_css$Css$overflow = $rtfeldman$elm_css$Css$prop1('overflow');
var $rtfeldman$elm_css$Css$PercentageUnits = 0;
var $rtfeldman$elm_css$Css$pct = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '%');
var $rtfeldman$elm_css$Css$alignSelf = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$borderColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-color', c.ac);
};
var $rtfeldman$elm_css$Css$borderStyle = $rtfeldman$elm_css$Css$prop1('border-style');
var $rtfeldman$elm_css$Css$borderWidth = $rtfeldman$elm_css$Css$prop1('border-width');
var $rtfeldman$elm_css$Css$flexStart = $rtfeldman$elm_css$Css$prop1('flex-start');
var $rtfeldman$elm_css$Css$solid = {G: 0, ay: 0, ac: 'solid'};
var $author$project$FullImagePage$progBar = function (mp) {
	var size = F2(
		function (c, w) {
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$width(
					$rtfeldman$elm_css$Css$vw(w)),
					$rtfeldman$elm_css$Css$height(
					$rtfeldman$elm_css$Css$px(1)),
					$rtfeldman$elm_css$Css$borderStyle($rtfeldman$elm_css$Css$solid),
					$rtfeldman$elm_css$Css$borderColor(c),
					$rtfeldman$elm_css$Css$borderWidth(
					$rtfeldman$elm_css$Css$px(1)),
					$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart)
				]);
		});
	var invisibleProg = A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$author$project$AlbumStyles$styles(
				A2(size, $author$project$AlbumStyles$black, 100))
			]),
		_List_Nil);
	if (mp.$ === 1) {
		return invisibleProg;
	} else {
		var p = mp.a;
		if (p.$ === 1) {
			var r = p.a;
			var _v2 = r.eK;
			if (!_v2.$) {
				var s = _v2.a;
				return A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$author$project$AlbumStyles$styles(
							A2(size, $author$project$AlbumStyles$white, (100 * r.eB) / s))
						]),
					_List_Nil);
			} else {
				return invisibleProg;
			}
		} else {
			return invisibleProg;
		}
	}
};
var $rtfeldman$elm_css$Css$right = $rtfeldman$elm_css$Css$prop1('right');
var $rtfeldman$elm_css$Html$Styled$Attributes$target = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('target');
var $rtfeldman$elm_css$Css$top = $rtfeldman$elm_css$Css$prop1('top');
var $author$project$Utils$TouchUtils$BothLimit = 2;
var $author$project$Utils$TouchUtils$LeftLimit = 1;
var $author$project$Utils$TouchUtils$NeitherLimit = 3;
var $author$project$Utils$TouchUtils$RightLimit = 0;
var $rtfeldman$elm_css$VirtualDom$Styled$unstyledAttribute = function (prop) {
	return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, prop, _List_Nil, '');
};
var $rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$unstyledAttribute;
var $rtfeldman$elm_css$VirtualDom$Styled$KeyedNode = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$KeyedNodeNS = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$NodeNS = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $rtfeldman$elm_css$VirtualDom$Styled$mapAttribute = F2(
	function (transform, _v0) {
		var prop = _v0.a;
		var styles = _v0.b;
		var classname = _v0.c;
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$mapAttribute, transform, prop),
			styles,
			classname);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$map = F2(
	function (transform, vdomNode) {
		switch (vdomNode.$) {
			case 0:
				var elemType = vdomNode.a;
				var properties = vdomNode.b;
				var children = vdomNode.c;
				return A3(
					$rtfeldman$elm_css$VirtualDom$Styled$Node,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$map(transform),
						children));
			case 1:
				var ns = vdomNode.a;
				var elemType = vdomNode.b;
				var properties = vdomNode.c;
				var children = vdomNode.d;
				return A4(
					$rtfeldman$elm_css$VirtualDom$Styled$NodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$map(transform),
						children));
			case 2:
				var elemType = vdomNode.a;
				var properties = vdomNode.b;
				var children = vdomNode.c;
				return A3(
					$rtfeldman$elm_css$VirtualDom$Styled$KeyedNode,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						$elm$core$List$map,
						function (_v1) {
							var key = _v1.a;
							var child = _v1.b;
							return _Utils_Tuple2(
								key,
								A2($rtfeldman$elm_css$VirtualDom$Styled$map, transform, child));
						},
						children));
			case 3:
				var ns = vdomNode.a;
				var elemType = vdomNode.b;
				var properties = vdomNode.c;
				var children = vdomNode.d;
				return A4(
					$rtfeldman$elm_css$VirtualDom$Styled$KeyedNodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						$elm$core$List$map,
						function (_v2) {
							var key = _v2.a;
							var child = _v2.b;
							return _Utils_Tuple2(
								key,
								A2($rtfeldman$elm_css$VirtualDom$Styled$map, transform, child));
						},
						children));
			default:
				var vdom = vdomNode.a;
				return $rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
					A2($elm$virtual_dom$VirtualDom$map, transform, vdom));
		}
	});
var $rtfeldman$elm_css$Html$Styled$map = $rtfeldman$elm_css$VirtualDom$Styled$map;
var $elm_explorations$linear_algebra$Math$Vector3$getX = _MJS_v3getX;
var $elm_explorations$linear_algebra$Math$Vector3$getY = _MJS_v3getY;
var $elm_explorations$linear_algebra$Math$Matrix4$identity = _MJS_m4x4identity;
var $elm_explorations$linear_algebra$Math$Matrix4$makeScale3 = _MJS_m4x4makeScale3;
var $elm_explorations$linear_algebra$Math$Matrix4$makeTranslate3 = _MJS_m4x4makeTranslate3;
var $elm_explorations$linear_algebra$Math$Matrix4$mul = _MJS_m4x4mul;
var $elm_explorations$linear_algebra$Math$Matrix4$transform = _MJS_v3mul4x4;
var $elm_explorations$linear_algebra$Math$Vector3$vec3 = _MJS_v3;
var $author$project$Utils$TouchUtils$applyOffset = F2(
	function (_v0, origLoc) {
		var z = _v0;
		var loc = function () {
			var _v4 = z.an;
			if (_v4.$ === 1) {
				return origLoc;
			} else {
				var pz = _v4.a;
				return A2($author$project$Utils$TouchUtils$applyOffset, pz, origLoc);
			}
		}();
		var _v1 = z.dr;
		var startX = _v1.a;
		var startY = _v1.b;
		var _v2 = z.ek;
		var offX = _v2.a;
		var offY = _v2.b;
		var at = A2(
			$elm_explorations$linear_algebra$Math$Matrix4$mul,
			A3($elm_explorations$linear_algebra$Math$Matrix4$makeTranslate3, startX, startY, 0),
			A2(
				$elm_explorations$linear_algebra$Math$Matrix4$mul,
				A3($elm_explorations$linear_algebra$Math$Matrix4$makeTranslate3, offX, offY, 0),
				A2(
					$elm_explorations$linear_algebra$Math$Matrix4$mul,
					A3($elm_explorations$linear_algebra$Math$Matrix4$makeScale3, z.bb, z.bb, 1),
					A2(
						$elm_explorations$linear_algebra$Math$Matrix4$mul,
						A3($elm_explorations$linear_algebra$Math$Matrix4$makeTranslate3, -startX, -startY, 0),
						$elm_explorations$linear_algebra$Math$Matrix4$identity))));
		var _v3 = loc;
		var locX = _v3.a;
		var locY = _v3.b;
		var newLoc = A2(
			$elm_explorations$linear_algebra$Math$Matrix4$transform,
			at,
			A3($elm_explorations$linear_algebra$Math$Vector3$vec3, locX, locY, 0));
		return _Utils_Tuple2(
			$elm_explorations$linear_algebra$Math$Vector3$getX(newLoc),
			$elm_explorations$linear_algebra$Math$Vector3$getY(newLoc));
	});
var $author$project$Utils$TouchUtils$elasticSwipe = function (distance) {
	var expon = 0.7;
	var _v0 = distance >= 0;
	if (_v0) {
		return A2($elm$core$Basics$pow, distance, expon);
	} else {
		return (-1) * A2(
			$elm$core$Basics$pow,
			$elm$core$Basics$abs(distance),
			expon);
	}
};
var $author$project$Utils$TouchUtils$elasticDistance = F2(
	function (edgeBehaviour, distance) {
		switch (edgeBehaviour) {
			case 0:
				var _v1 = distance < 0;
				if (_v1) {
					return $author$project$Utils$TouchUtils$elasticSwipe(distance);
				} else {
					return distance;
				}
			case 1:
				var _v2 = distance < 0;
				if (_v2) {
					return distance;
				} else {
					return $author$project$Utils$TouchUtils$elasticSwipe(distance);
				}
			case 2:
				return $author$project$Utils$TouchUtils$elasticSwipe(distance);
			default:
				return distance;
		}
	});
var $rtfeldman$elm_css$Css$relative = {eu: 0, ac: 'relative'};
var $rtfeldman$elm_css$Css$scale = function (x) {
	return {
		m: 0,
		ac: A2(
			$rtfeldman$elm_css$Css$cssFunction,
			'scale',
			_List_fromArray(
				[
					$elm$core$String$fromFloat(x)
				]))
	};
};
var $rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return $elm$core$List$isEmpty(list) ? {ac: 'none'} : {
		ac: A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				function ($) {
					return $.ac;
				},
				list))
	};
};
var $rtfeldman$elm_css$Css$transforms = A2(
	$elm$core$Basics$composeL,
	$rtfeldman$elm_css$Css$prop1('transform'),
	$rtfeldman$elm_css$Css$valuesOrNone);
var $rtfeldman$elm_css$Css$translate2 = F2(
	function (tx, ty) {
		return {
			m: 0,
			ac: A2(
				$rtfeldman$elm_css$Css$cssFunction,
				'translate',
				_List_fromArray(
					[tx.ac, ty.ac]))
		};
	});
var $author$project$FullImagePage$offsetStyles = F3(
	function (edgeBehaviour, imgPosition, offset) {
		var posStyle = function () {
			switch (offset.$) {
				case 0:
					return _List_Nil;
				case 1:
					var distance = offset.a;
					return _List_fromArray(
						[
							$rtfeldman$elm_css$Css$left(
							$rtfeldman$elm_css$Css$px(
								A2($author$project$Utils$TouchUtils$elasticDistance, edgeBehaviour, distance)))
						]);
				default:
					var z = offset.a;
					if (imgPosition.$ === 1) {
						return _List_Nil;
					} else {
						var imgPos = imgPosition.a;
						var sc = $author$project$Utils$TouchUtils$cumScale(z);
						var _v2 = _Utils_Tuple2(imgPos.cy.cc - imgPos.bi.cc, imgPos.cy.cd - imgPos.bi.cd);
						var imgVpPosX = _v2.a;
						var imgVpPosY = _v2.b;
						var _v3 = A2(
							$author$project$Utils$TouchUtils$applyOffset,
							z,
							_Utils_Tuple2(imgVpPosX, imgVpPosY));
						var offsetPosX = _v3.a;
						var offsetPosY = _v3.b;
						var _v4 = _Utils_Tuple2(offsetPosX - imgVpPosX, offsetPosY - imgVpPosY);
						var deltaPosX = _v4.a;
						var deltaPosY = _v4.b;
						return _List_fromArray(
							[
								$rtfeldman$elm_css$Css$transforms(
								_List_fromArray(
									[
										A2(
										$rtfeldman$elm_css$Css$translate2,
										$rtfeldman$elm_css$Css$px(deltaPosX),
										$rtfeldman$elm_css$Css$px(deltaPosY)),
										$rtfeldman$elm_css$Css$scale(sc)
									])),
								A2($rtfeldman$elm_css$Css$property, 'transform-origin', 'top left')
							]);
					}
			}
		}();
		return _List_fromArray(
			[
				$author$project$AlbumStyles$styles(
				A2(
					$elm$core$List$cons,
					$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
					posStyle))
			]);
	});
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 3, a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Event = F4(
	function (keys, changedTouches, targetTouches, touches) {
		return {dL: changedTouches, eb: keys, eT: targetTouches, e_: touches};
	});
var $mpizenberg$elm_pointer_events$Internal$Decode$Keys = F3(
	function (alt, ctrl, shift) {
		return {dE: alt, dP: ctrl, eI: shift};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $mpizenberg$elm_pointer_events$Internal$Decode$keys = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_pointer_events$Internal$Decode$Keys,
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool));
var $elm$json$Json$Decode$map4 = _Json_map4;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Touch = F4(
	function (identifier, clientPos, pagePos, screenPos) {
		return {cs: clientPos, d3: identifier, ep: pagePos, eE: screenPos};
	});
var $mpizenberg$elm_pointer_events$Internal$Decode$clientPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$pagePos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$screenPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'screenX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'screenY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder = A5(
	$elm$json$Json$Decode$map4,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Touch,
	A2($elm$json$Json$Decode$field, 'identifier', $elm$json$Json$Decode$int),
	$mpizenberg$elm_pointer_events$Internal$Decode$clientPos,
	$mpizenberg$elm_pointer_events$Internal$Decode$pagePos,
	$mpizenberg$elm_pointer_events$Internal$Decode$screenPos);
var $mpizenberg$elm_pointer_events$Internal$Decode$all = A2(
	$elm$core$List$foldr,
	$elm$json$Json$Decode$map2($elm$core$List$cons),
	$elm$json$Json$Decode$succeed(_List_Nil));
var $mpizenberg$elm_pointer_events$Internal$Decode$dynamicListOf = function (itemDecoder) {
	var decodeOne = function (n) {
		return A2(
			$elm$json$Json$Decode$field,
			$elm$core$String$fromInt(n),
			itemDecoder);
	};
	var decodeN = function (n) {
		return $mpizenberg$elm_pointer_events$Internal$Decode$all(
			A2(
				$elm$core$List$map,
				decodeOne,
				A2($elm$core$List$range, 0, n - 1)));
	};
	return A2(
		$elm$json$Json$Decode$andThen,
		decodeN,
		A2($elm$json$Json$Decode$field, 'length', $elm$json$Json$Decode$int));
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder = $mpizenberg$elm_pointer_events$Internal$Decode$dynamicListOf;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$eventDecoder = A5(
	$elm$json$Json$Decode$map4,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Event,
	$mpizenberg$elm_pointer_events$Internal$Decode$keys,
	A2(
		$elm$json$Json$Decode$field,
		'changedTouches',
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'targetTouches',
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'touches',
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder)));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onWithOptions = F3(
	function (event, options, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						ak: tag(ev),
						ey: options.ey,
						eP: options.eP
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$eventDecoder));
	});
var $author$project$FullImagePage$onTouch = function (touchType) {
	return A2(
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onWithOptions,
		'touch' + touchType,
		{ey: true, eP: false});
};
var $author$project$ProgressiveImage$getProgressImpl = function (loadState) {
	getProgressImpl:
	while (true) {
		switch (loadState.$) {
			case 0:
				return $elm$core$Maybe$Nothing;
			case 1:
				return $elm$core$Maybe$Nothing;
			case 2:
				var progress = loadState.a;
				return $elm$core$Maybe$Just(progress);
			case 3:
				return $elm$core$Maybe$Nothing;
			case 4:
				var ls = loadState.a;
				var $temp$loadState = ls;
				loadState = $temp$loadState;
				continue getProgressImpl;
			default:
				return $elm$core$Maybe$Nothing;
		}
	}
};
var $author$project$ProgressiveImage$getProgress = A2($elm$core$Basics$composeL, $author$project$ProgressiveImage$getProgressImpl, $author$project$Utils$Loading$getState);
var $mdgriffith$elm_style_animation$Animation$Render$iePrefix = '-ms-';
var $mdgriffith$elm_style_animation$Animation$Render$webkitPrefix = '-webkit-';
var $mdgriffith$elm_style_animation$Animation$Render$prefix = function (stylePair) {
	var propValue = stylePair.b;
	var propName = stylePair.a;
	switch (propName) {
		case 'transform':
			return _List_fromArray(
				[
					stylePair,
					_Utils_Tuple2(
					_Utils_ap($mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
					propValue),
					_Utils_Tuple2(
					_Utils_ap($mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
					propValue)
				]);
		case 'transform-origin':
			return _List_fromArray(
				[
					stylePair,
					_Utils_Tuple2(
					_Utils_ap($mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
					propValue),
					_Utils_Tuple2(
					_Utils_ap($mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
					propValue)
				]);
		case 'filter':
			return _List_fromArray(
				[
					stylePair,
					_Utils_Tuple2(
					_Utils_ap($mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
					propValue),
					_Utils_Tuple2(
					_Utils_ap($mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
					propValue)
				]);
		default:
			return _List_fromArray(
				[stylePair]);
	}
};
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$offset = _VirtualDom_attribute('offset');
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$core$Basics$cos = _Basics_cos;
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $elm$core$Basics$sin = _Basics_sin;
var $mdgriffith$elm_style_animation$Animation$Render$pathCmdValue = function (cmd) {
	var renderPoints = function (coords) {
		return A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				function (_v11) {
					var x = _v11.a;
					var y = _v11.b;
					return $elm$core$String$fromFloat(x.eu) + (',' + $elm$core$String$fromFloat(y.eu));
				},
				coords));
	};
	switch (cmd.$) {
		case 0:
			var x = cmd.a;
			var y = cmd.b;
			return 'm ' + ($elm$core$String$fromFloat(x.eu) + (',' + $elm$core$String$fromFloat(y.eu)));
		case 1:
			var x = cmd.a;
			var y = cmd.b;
			return 'M ' + ($elm$core$String$fromFloat(x.eu) + (',' + $elm$core$String$fromFloat(y.eu)));
		case 2:
			var x = cmd.a;
			var y = cmd.b;
			return 'l ' + ($elm$core$String$fromFloat(x.eu) + (',' + $elm$core$String$fromFloat(y.eu)));
		case 3:
			var x = cmd.a;
			var y = cmd.b;
			return 'L ' + ($elm$core$String$fromFloat(x.eu) + (',' + $elm$core$String$fromFloat(y.eu)));
		case 4:
			var a = cmd.a;
			return 'h ' + $elm$core$String$fromFloat(a.eu);
		case 5:
			var a = cmd.a;
			return 'H ' + $elm$core$String$fromFloat(a.eu);
		case 6:
			var a = cmd.a;
			return 'v ' + $elm$core$String$fromFloat(a.eu);
		case 7:
			var a = cmd.a;
			return 'V ' + $elm$core$String$fromFloat(a.eu);
		case 8:
			var control1 = cmd.a.a2;
			var control2 = cmd.a.a3;
			var point = cmd.a.V;
			var _v1 = point;
			var p1x = _v1.a;
			var p1y = _v1.b;
			var _v2 = control2;
			var c2x = _v2.a;
			var c2y = _v2.b;
			var _v3 = control1;
			var c1x = _v3.a;
			var c1y = _v3.b;
			return 'c ' + ($elm$core$String$fromFloat(c1x.eu) + (' ' + ($elm$core$String$fromFloat(c1y.eu) + (', ' + ($elm$core$String$fromFloat(c2x.eu) + (' ' + ($elm$core$String$fromFloat(c2y.eu) + (', ' + ($elm$core$String$fromFloat(p1x.eu) + (' ' + $elm$core$String$fromFloat(p1y.eu)))))))))));
		case 9:
			var control1 = cmd.a.a2;
			var control2 = cmd.a.a3;
			var point = cmd.a.V;
			var _v4 = point;
			var p1x = _v4.a;
			var p1y = _v4.b;
			var _v5 = control2;
			var c2x = _v5.a;
			var c2y = _v5.b;
			var _v6 = control1;
			var c1x = _v6.a;
			var c1y = _v6.b;
			return 'C ' + ($elm$core$String$fromFloat(c1x.eu) + (' ' + ($elm$core$String$fromFloat(c1y.eu) + (', ' + ($elm$core$String$fromFloat(c2x.eu) + (' ' + ($elm$core$String$fromFloat(c2y.eu) + (', ' + ($elm$core$String$fromFloat(p1x.eu) + (' ' + $elm$core$String$fromFloat(p1y.eu)))))))))));
		case 10:
			var control = cmd.a.a1;
			var point = cmd.a.V;
			var _v7 = point;
			var p1x = _v7.a;
			var p1y = _v7.b;
			var _v8 = control;
			var c1x = _v8.a;
			var c1y = _v8.b;
			return 'q ' + ($elm$core$String$fromFloat(c1x.eu) + (' ' + ($elm$core$String$fromFloat(c1y.eu) + (', ' + ($elm$core$String$fromFloat(p1x.eu) + (' ' + $elm$core$String$fromFloat(p1y.eu)))))));
		case 11:
			var control = cmd.a.a1;
			var point = cmd.a.V;
			var _v9 = point;
			var p1x = _v9.a;
			var p1y = _v9.b;
			var _v10 = control;
			var c1x = _v10.a;
			var c1y = _v10.b;
			return 'Q ' + ($elm$core$String$fromFloat(c1x.eu) + (' ' + ($elm$core$String$fromFloat(c1y.eu) + (', ' + ($elm$core$String$fromFloat(p1x.eu) + (' ' + $elm$core$String$fromFloat(p1y.eu)))))));
		case 12:
			var points = cmd.a;
			return 't ' + renderPoints(points);
		case 13:
			var points = cmd.a;
			return 'T ' + renderPoints(points);
		case 14:
			var points = cmd.a;
			return 's ' + renderPoints(points);
		case 15:
			var points = cmd.a;
			return 'S ' + renderPoints(points);
		case 16:
			var arc = cmd.a;
			var deltaAngle = arc.a4.eu - arc.bc.eu;
			if (_Utils_cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = arc.eA.eu * $elm$core$Basics$sin(
					$elm$core$Basics$degrees(arc.bc.eu));
				var dx = arc.eA.eu * $elm$core$Basics$cos(
					$elm$core$Basics$degrees(arc.bc.eu));
				return 'A ' + ($elm$core$String$fromFloat(arc.eA.eu) + (',' + ($elm$core$String$fromFloat(arc.eA.eu) + (',0,1,1,' + ($elm$core$String$fromFloat(arc.cc.eu - dx) + (',' + ($elm$core$String$fromFloat(arc.cd.eu - dy) + (' A ' + ($elm$core$String$fromFloat(arc.eA.eu) + (',' + ($elm$core$String$fromFloat(arc.eA.eu) + (',0,1,1,' + ($elm$core$String$fromFloat(arc.cc.eu + dx) + (',' + $elm$core$String$fromFloat(arc.cd.eu + dy)))))))))))))));
			} else {
				return 'A ' + ($elm$core$String$fromFloat(arc.eA.eu) + (',' + ($elm$core$String$fromFloat(arc.eA.eu) + (' 0 ' + (((deltaAngle >= 180) ? '1' : '0') + (' ' + ('1' + (' ' + ($elm$core$String$fromFloat(
					arc.cc.eu + (arc.eA.eu * $elm$core$Basics$cos(
						$elm$core$Basics$degrees(arc.a4.eu)))) + (',' + $elm$core$String$fromFloat(
					arc.cd.eu + (arc.eA.eu * $elm$core$Basics$sin(
						$elm$core$Basics$degrees(arc.a4.eu))))))))))))));
			}
		case 17:
			var arc = cmd.a;
			var deltaAngle = arc.a4.eu - arc.bc.eu;
			if (_Utils_cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = arc.eA.eu * $elm$core$Basics$sin(
					$elm$core$Basics$degrees(arc.bc.eu));
				var dx = arc.eA.eu * $elm$core$Basics$cos(
					$elm$core$Basics$degrees(arc.bc.eu));
				return 'A ' + ($elm$core$String$fromFloat(arc.eA.eu) + (',' + ($elm$core$String$fromFloat(arc.eA.eu) + (',0,1,0,' + ($elm$core$String$fromFloat(arc.cc.eu - dx) + (',' + ($elm$core$String$fromFloat(arc.cd.eu - dy) + (' A ' + ($elm$core$String$fromFloat(arc.eA.eu) + (',' + ($elm$core$String$fromFloat(arc.eA.eu) + (',0,1,1,' + ($elm$core$String$fromFloat(arc.cc.eu + dx) + (',' + $elm$core$String$fromFloat(arc.cd.eu + dy)))))))))))))));
			} else {
				return 'A ' + ($elm$core$String$fromFloat(arc.eA.eu) + (',' + ($elm$core$String$fromFloat(arc.eA.eu) + (' 0 ' + ((((arc.bc.eu - arc.a4.eu) >= 180) ? '1' : '0') + (' ' + ('0' + (' ' + ($elm$core$String$fromFloat(
					arc.cc.eu + (arc.eA.eu * $elm$core$Basics$cos(arc.a4.eu))) + (',' + $elm$core$String$fromFloat(
					arc.cd.eu + (arc.eA.eu * $elm$core$Basics$sin(arc.a4.eu)))))))))))));
			}
		default:
			return 'z';
	}
};
var $mdgriffith$elm_style_animation$Animation$Render$propertyValue = F2(
	function (prop, delim) {
		switch (prop.$) {
			case 0:
				var value = prop.b;
				return value;
			case 1:
				var r = prop.b;
				var g = prop.c;
				var b = prop.d;
				var a = prop.e;
				return 'rgba(' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(r.eu)) + (',' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(g.eu)) + (',' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(b.eu)) + (',' + ($elm$core$String$fromFloat(a.eu) + ')')))))));
			case 2:
				var name = prop.a;
				var inset = prop.b;
				var shadow = prop.c;
				return (inset ? 'inset ' : '') + ($elm$core$String$fromFloat(shadow.S.eu) + ('px' + (' ' + ($elm$core$String$fromFloat(shadow.T.eu) + ('px' + (' ' + ($elm$core$String$fromFloat(shadow.P.eu) + ('px' + (' ' + ((((name === 'text-shadow') || (name === 'drop-shadow')) ? '' : ($elm$core$String$fromFloat(shadow.eK.eu) + ('px' + ' '))) + ('rgba(' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(shadow.L.eu)) + (', ' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(shadow.J.eu)) + (', ' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(shadow.F.eu)) + (', ' + ($elm$core$String$fromFloat(shadow.E.eu) + ')'))))))))))))))))));
			case 3:
				var x = prop.b;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.eu),
					x.e1);
			case 4:
				var x = prop.b;
				var y = prop.c;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.eu),
					_Utils_ap(
						x.e1,
						_Utils_ap(
							delim,
							_Utils_ap(
								$elm$core$String$fromFloat(y.eu),
								y.e1))));
			case 5:
				var x = prop.b;
				var y = prop.c;
				var z = prop.d;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.eu),
					_Utils_ap(
						x.e1,
						_Utils_ap(
							delim,
							_Utils_ap(
								$elm$core$String$fromFloat(y.eu),
								_Utils_ap(
									y.e1,
									_Utils_ap(
										delim,
										_Utils_ap(
											$elm$core$String$fromFloat(z.eu),
											z.e1)))))));
			case 6:
				var w = prop.b;
				var x = prop.c;
				var y = prop.d;
				var z = prop.e;
				return _Utils_ap(
					$elm$core$String$fromFloat(w.eu),
					_Utils_ap(
						w.e1,
						_Utils_ap(
							delim,
							_Utils_ap(
								$elm$core$String$fromFloat(x.eu),
								_Utils_ap(
									x.e1,
									_Utils_ap(
										delim,
										_Utils_ap(
											$elm$core$String$fromFloat(y.eu),
											_Utils_ap(
												y.e1,
												_Utils_ap(
													delim,
													_Utils_ap(
														$elm$core$String$fromFloat(z.eu),
														z.e1))))))))));
			case 7:
				var x = prop.b;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.eu),
					x.e1);
			case 8:
				var coords = prop.a;
				return A2(
					$elm$core$String$join,
					' ',
					A2(
						$elm$core$List$map,
						function (_v1) {
							var x = _v1.a;
							var y = _v1.b;
							return $elm$core$String$fromFloat(x.eu) + (',' + $elm$core$String$fromFloat(y.eu));
						},
						coords));
			default:
				var cmds = prop.a;
				return A2(
					$elm$core$String$join,
					' ',
					A2($elm$core$List$map, $mdgriffith$elm_style_animation$Animation$Render$pathCmdValue, cmds));
		}
	});
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var $elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $mdgriffith$elm_style_animation$Animation$Render$renderAttrs = function (prop) {
	if (A2(
		$elm$core$String$startsWith,
		'attr:',
		$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop))) {
		return $elm$core$Maybe$Just(
			A2(
				$elm$html$Html$Attributes$attribute,
				A2(
					$elm$core$String$dropLeft,
					5,
					$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop)),
				A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
	} else {
		switch (prop.$) {
			case 8:
				var pts = prop.a;
				return $elm$core$Maybe$Just(
					$elm$svg$Svg$Attributes$points(
						A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
			case 9:
				var cmds = prop.a;
				return $elm$core$Maybe$Just(
					$elm$svg$Svg$Attributes$d(
						A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
			case 3:
				var name = prop.a;
				var m1 = prop.b;
				switch (name) {
					case 'x':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$x(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'y':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$y(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'cx':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$cx(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'cy':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$cy(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'rx':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$rx(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'ry':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$ry(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'r':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$r(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'offset':
						return $elm$core$Maybe$Just(
							$elm$svg$Svg$Attributes$offset(
								A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					default:
						return $elm$core$Maybe$Nothing;
				}
			case 6:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				var m3 = prop.d;
				var m4 = prop.e;
				return (name === 'viewBox') ? $elm$core$Maybe$Just(
					$elm$svg$Svg$Attributes$viewBox(
						A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' '))) : $elm$core$Maybe$Nothing;
			default:
				return $elm$core$Maybe$Nothing;
		}
	}
};
var $mdgriffith$elm_style_animation$Animation$Render$isAttr = function (prop) {
	return A2(
		$elm$core$String$startsWith,
		'attr:',
		$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop)) || function () {
		switch (prop.$) {
			case 8:
				return true;
			case 9:
				return true;
			case 3:
				var name = prop.a;
				return (name === 'cx') || ((name === 'cy') || ((name === 'x') || ((name === 'y') || ((name === 'rx') || ((name === 'ry') || ((name === 'r') || (name === 'offset')))))));
			case 6:
				var name = prop.a;
				return name === 'viewBox';
			default:
				return false;
		}
	}();
};
var $mdgriffith$elm_style_animation$Animation$Render$isFilter = function (prop) {
	return A2(
		$elm$core$List$member,
		$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
		_List_fromArray(
			['filter-url', 'blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'saturate', 'sepia', 'drop-shadow']));
};
var $mdgriffith$elm_style_animation$Animation$Render$render3dRotation = function (prop) {
	if (prop.$ === 5) {
		var x = prop.b;
		var y = prop.c;
		var z = prop.d;
		return 'rotateX(' + ($elm$core$String$fromFloat(x.eu) + (x.e1 + (') rotateY(' + ($elm$core$String$fromFloat(y.eu) + (y.e1 + (') rotateZ(' + ($elm$core$String$fromFloat(z.eu) + (z.e1 + ')'))))))));
	} else {
		return '';
	}
};
var $mdgriffith$elm_style_animation$Animation$Render$renderValues = function (_v0) {
	var model = _v0;
	var _v1 = A2($elm$core$List$partition, $mdgriffith$elm_style_animation$Animation$Render$isAttr, model.dt);
	var attrProps = _v1.a;
	var styleProps = _v1.b;
	var _v2 = A3(
		$elm$core$List$foldl,
		F2(
			function (prop, _v3) {
				var myStyle = _v3.a;
				var myTransforms = _v3.b;
				var myFilters = _v3.c;
				return $mdgriffith$elm_style_animation$Animation$Render$isTransformation(prop) ? _Utils_Tuple3(
					myStyle,
					_Utils_ap(
						myTransforms,
						_List_fromArray(
							[prop])),
					myFilters) : ($mdgriffith$elm_style_animation$Animation$Render$isFilter(prop) ? _Utils_Tuple3(
					myStyle,
					myTransforms,
					_Utils_ap(
						myFilters,
						_List_fromArray(
							[prop]))) : _Utils_Tuple3(
					_Utils_ap(
						myStyle,
						_List_fromArray(
							[prop])),
					myTransforms,
					myFilters));
			}),
		_Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
		styleProps);
	var style = _v2.a;
	var transforms = _v2.b;
	var filters = _v2.c;
	var renderedFilters = $elm$core$List$isEmpty(filters) ? _List_Nil : _List_fromArray(
		[
			_Utils_Tuple2(
			'filter',
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (prop) {
						var name = $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop);
						return (name === 'filter-url') ? ('url(\"' + (A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ', ') + '\")')) : ($mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) + ('(' + (A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ', ') + ')')));
					},
					filters)))
		]);
	var renderedStyle = A2(
		$elm$core$List$map,
		function (prop) {
			return _Utils_Tuple2(
				$mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
				A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' '));
		},
		style);
	var renderedTransforms = $elm$core$List$isEmpty(transforms) ? _List_Nil : _List_fromArray(
		[
			_Utils_Tuple2(
			'transform',
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (prop) {
						return ($mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) === 'rotate3d') ? $mdgriffith$elm_style_animation$Animation$Render$render3dRotation(prop) : ($mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) + ('(' + (A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ', ') + ')')));
					},
					transforms)))
		]);
	return _Utils_Tuple2(
		_Utils_ap(
			renderedTransforms,
			_Utils_ap(renderedFilters, renderedStyle)),
		attrProps);
};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_style_animation$Animation$Render$render = function (animation) {
	var _v0 = $mdgriffith$elm_style_animation$Animation$Render$renderValues(animation);
	var style = _v0.a;
	var attrProps = _v0.b;
	var otherAttrs = A2($elm$core$List$filterMap, $mdgriffith$elm_style_animation$Animation$Render$renderAttrs, attrProps);
	var styleAttr = A2(
		$elm$core$List$map,
		function (_v1) {
			var prop = _v1.a;
			var val = _v1.b;
			return A2($elm$html$Html$Attributes$style, prop, val);
		},
		A2($elm$core$List$concatMap, $mdgriffith$elm_style_animation$Animation$Render$prefix, style));
	return _Utils_ap(styleAttr, otherAttrs);
};
var $mdgriffith$elm_style_animation$Animation$render = $mdgriffith$elm_style_animation$Animation$Render$render;
var $author$project$ProgressiveImage$styledAnimation = function (animState) {
	return A2(
		$elm$core$List$map,
		$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled,
		$mdgriffith$elm_style_animation$Animation$render(animState));
};
var $author$project$ProgressiveImage$styledMsgAnimation = function (animState) {
	return A2(
		$elm$core$List$map,
		$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled,
		$mdgriffith$elm_style_animation$Animation$render(animState));
};
var $author$project$ProgressiveImage$Loaded = function (a) {
	return {$: 0, a: a};
};
var $author$project$ProgressiveImage$viewImg = F4(
	function (imgSrc, data, animStyle, styles) {
		return A7(
			$author$project$ImageViews$renderPresized,
			0,
			data.cb,
			data.bT,
			imgSrc,
			_List_Nil,
			styles,
			_Utils_ap(
				animStyle,
				_List_fromArray(
					[
						A2(
						$rtfeldman$elm_css$Html$Styled$Events$on,
						'load',
						$elm$json$Json$Decode$succeed(
							$author$project$ProgressiveImage$Loaded(imgSrc)))
					])));
	});
var $rtfeldman$elm_css$Css$zIndex = $rtfeldman$elm_css$Css$prop1('z-index');
var $rtfeldman$elm_css$Css$zero = {a6: 0, aN: 0, aj: 0, aO: 0, aP: 0, at: 0, au: 0, a8: 0, al: 0, bA: 0, aY: '', bh: 0, ac: '0'};
var $author$project$ProgressiveImage$viewMainLoaded = F4(
	function (data, imgSrc, imgSrcAnimState, mainAnimState) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$author$project$AlbumStyles$styles(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative)
						]))
				]),
			_List_fromArray(
				[
					A4(
					$author$project$ProgressiveImage$viewImg,
					data.ed,
					data,
					$author$project$ProgressiveImage$styledMsgAnimation(mainAnimState),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute),
							$rtfeldman$elm_css$Css$top($rtfeldman$elm_css$Css$zero),
							$rtfeldman$elm_css$Css$left($rtfeldman$elm_css$Css$zero),
							$rtfeldman$elm_css$Css$zIndex(
							$rtfeldman$elm_css$Css$int(1))
						])),
					A4(
					$author$project$ProgressiveImage$viewImg,
					imgSrc,
					data,
					$author$project$ProgressiveImage$styledAnimation(imgSrcAnimState),
					_List_Nil)
				]));
	});
var $author$project$ProgressiveImage$view = function (_v0) {
	var piModel = _v0;
	var _v1 = piModel.t;
	switch (_v1.$) {
		case 0:
			var trying = _v1.b;
			return _Utils_Tuple2(
				A4(
					$author$project$ProgressiveImage$viewImg,
					trying,
					piModel.q,
					$author$project$ProgressiveImage$styledAnimation(piModel.f.x),
					_List_Nil),
				$elm$core$Maybe$Nothing);
		case 1:
			return _Utils_Tuple2(
				A4(
					$author$project$ProgressiveImage$viewImg,
					piModel.q.d_,
					piModel.q,
					$author$project$ProgressiveImage$styledAnimation(piModel.f.x),
					_List_Nil),
				$elm$core$Maybe$Nothing);
		case 2:
			var placeholder = _v1.a;
			var loadingState = _v1.b;
			return _Utils_Tuple2(
				A4(
					$author$project$ProgressiveImage$viewImg,
					placeholder,
					piModel.q,
					$author$project$ProgressiveImage$styledAnimation(piModel.f.x),
					_List_Nil),
				$author$project$ProgressiveImage$getProgress(loadingState));
		case 3:
			var oldPlaceholder = _v1.a;
			return _Utils_Tuple2(
				A4($author$project$ProgressiveImage$viewMainLoaded, piModel.q, oldPlaceholder, piModel.f.x, piModel.f._),
				$elm$core$Maybe$Nothing);
		default:
			return _Utils_Tuple2(
				A4(
					$author$project$ProgressiveImage$viewImg,
					piModel.q.ed,
					piModel.q,
					$author$project$ProgressiveImage$styledMsgAnimation(piModel.f._),
					_List_Nil),
				$elm$core$Maybe$Nothing);
	}
};
var $author$project$ProgressiveImage$withWidthHeight = F3(
	function (w, h, _v0) {
		var piModel = _v0;
		var dataOldWH = piModel.q;
		return _Utils_update(
			piModel,
			{
				q: _Utils_update(
					dataOldWH,
					{bT: h, cb: w})
			});
	});
var $author$project$FullImagePage$viewImg = F5(
	function (a, clickMsg, touchMsgs, wrapProgMsg, fullImagePageModel) {
		var img = fullImagePageModel.g.bU;
		var edgeBehaviour = function () {
			var _v2 = fullImagePageModel.aR;
			if (!_v2.b) {
				var _v3 = fullImagePageModel.g.bV;
				if (!_v3.b) {
					return 2;
				} else {
					return 1;
				}
			} else {
				var _v4 = fullImagePageModel.g.bV;
				if (!_v4.b) {
					return 0;
				} else {
					return 3;
				}
			}
		}();
		var _v0 = A3(
			$author$project$FullImagePage$fitImage,
			img.b4,
			$elm$core$Basics$floor(fullImagePageModel.bi.bi.cb),
			$elm$core$Basics$round(fullImagePageModel.bi.bi.bT * (1 - ($author$project$FullImagePage$imgTitleHeight / 100))));
		var w = _v0.a;
		var h = _v0.b;
		var _v1 = $author$project$ProgressiveImage$view(
			A3($author$project$ProgressiveImage$withWidthHeight, w, h, fullImagePageModel.ez));
		var piView = _v1.a;
		var progress = _v1.b;
		return _Utils_Tuple2(
			A3(
				a,
				clickMsg,
				_Utils_ap(
					A3($author$project$FullImagePage$offsetStyles, edgeBehaviour, fullImagePageModel.bp, fullImagePageModel.ek),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
							A2($author$project$FullImagePage$onTouch, 'start', touchMsgs.eZ)),
							$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
							A2($author$project$FullImagePage$onTouch, 'move', touchMsgs.eX)),
							$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
							A2($author$project$FullImagePage$onTouch, 'end', touchMsgs.eY)),
							$rtfeldman$elm_css$Html$Styled$Attributes$id($author$project$AlbumStyles$theImageId)
						])),
				_List_fromArray(
					[
						A2($rtfeldman$elm_css$Html$Styled$map, wrapProgMsg, piView)
					])),
			progress);
	});
var $author$project$FullImagePage$view = F7(
	function (a, navMsgs, touchMsgs, wrapProgMsg, fullImagePageModel, parents, flags) {
		var xOfY = ' (' + ($elm$core$String$fromInt(
			1 + $elm$core$List$length(fullImagePageModel.aR)) + (' of ' + ($elm$core$String$fromInt(
			($elm$core$List$length(fullImagePageModel.aR) + 1) + $elm$core$List$length(fullImagePageModel.g.bV)) + ')')));
		var _v0 = A5($author$project$FullImagePage$viewImg, a, navMsgs.ej, touchMsgs, wrapProgMsg, fullImagePageModel);
		var imgView = _v0.a;
		var progress = _v0.b;
		return A6(
			$author$project$AlbumStyles$rootDivFlex,
			flags,
			$rtfeldman$elm_css$Css$column,
			$elm$core$Maybe$Nothing,
			fullImagePageModel.bi,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$overflow($rtfeldman$elm_css$Css$hidden),
					$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
					$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center)
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								$author$project$AlbumStyles$styles(
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$color($author$project$AlbumStyles$white),
										$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
										$rtfeldman$elm_css$Css$height(
										$rtfeldman$elm_css$Css$pct($author$project$FullImagePage$imgTitleHeight)),
										$rtfeldman$elm_css$Css$lineHeight(
										$rtfeldman$elm_css$Css$px(($author$project$FullImagePage$imgTitleHeight / 100) * fullImagePageModel.bi.bi.bT))
									]))
							]),
						_List_fromArray(
							[
								A6(
								$author$project$ThumbPage$albumTitle,
								a,
								_Utils_ap(fullImagePageModel.g.bU.bK, xOfY),
								parents,
								navMsgs.eJ,
								_List_fromArray(
									[
										A4(
										$author$project$ThumbPage$albumParent,
										a,
										$author$project$FullImagePage$getAlbumTitle,
										$elm$core$Basics$always(navMsgs.dH),
										fullImagePageModel.g)
									]),
								_List_Nil)
							])),
						$author$project$FullImagePage$progBar(progress),
						imgView
					]),
				_Utils_ap(
					A5($author$project$FullImagePage$navEltIf, a, fullImagePageModel.aR, navMsgs.ex, '<', $rtfeldman$elm_css$Css$left),
					_Utils_ap(
						A5($author$project$FullImagePage$navEltIf, a, fullImagePageModel.g.bV, navMsgs.ej, '>', $rtfeldman$elm_css$Css$right),
						_List_fromArray(
							[
								A3(
								a,
								navMsgs.dH,
								_List_fromArray(
									[
										$author$project$AlbumStyles$styles(
										_Utils_ap(
											$author$project$AlbumStyles$navBoxStyles,
											_List_fromArray(
												[
													$rtfeldman$elm_css$Css$top(
													$rtfeldman$elm_css$Css$px(5)),
													$rtfeldman$elm_css$Css$right(
													$rtfeldman$elm_css$Css$px(5))
												])))
									]),
								_List_fromArray(
									[
										$rtfeldman$elm_css$Html$Styled$text('x')
									])),
								A2(
								$rtfeldman$elm_css$Html$Styled$a,
								_List_fromArray(
									[
										$author$project$AlbumStyles$styles(
										_Utils_ap(
											$author$project$AlbumStyles$navBoxStyles,
											_List_fromArray(
												[
													$rtfeldman$elm_css$Css$top(
													$rtfeldman$elm_css$Css$px((fullImagePageModel.bi.bi.bT - $author$project$AlbumStyles$navEltSize) - 5)),
													$rtfeldman$elm_css$Css$right(
													$rtfeldman$elm_css$Css$px(5)),
													$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
												]))),
										$rtfeldman$elm_css$Html$Styled$Attributes$href(
										$author$project$Utils$ListUtils$encodePath(fullImagePageModel.g.bU.b4.ca)),
										$rtfeldman$elm_css$Html$Styled$Attributes$target('_blank')
									]),
								_List_fromArray(
									[
										$rtfeldman$elm_css$Html$Styled$text('⤓')
									]))
							])))));
	});
var $rtfeldman$elm_css$Css$UnitlessFloat = 0;
var $rtfeldman$elm_css$Css$num = function (val) {
	return {
		au: 0,
		Z: 0,
		a8: 0,
		bu: 0,
		al: val,
		aY: '',
		bh: 0,
		ac: $elm$core$String$fromFloat(val)
	};
};
var $author$project$ThumbPage$convertImgChosenMsgr = F3(
	function (image1, images, prevCurRestImgChosenMsgr) {
		return function (i) {
			var prev = A2($elm$core$List$take, i, images);
			var next = A2($elm$core$List$drop, i + 1, images);
			var cur = function () {
				var _v0 = $elm$core$List$head(
					A2($elm$core$List$drop, i, images));
				if (!_v0.$) {
					var img = _v0.a;
					return img;
				} else {
					return image1;
				}
			}();
			return A3(prevCurRestImgChosenMsgr, prev, cur, next);
		};
	});
var $author$project$ThumbPage$imgHeight = function (img) {
	var is1 = img.b4;
	return $elm$core$Basics$round(is1.cd * (1000 / is1.cc));
};
var $author$project$ThumbPage$shorter = F2(
	function (_v0, _v1) {
		var i1 = _v0.a;
		var h1 = _v0.b;
		var i2 = _v1.a;
		var h2 = _v1.b;
		return (_Utils_cmp(h1, h2) < 1) ? _Utils_Tuple2(i1, h1) : _Utils_Tuple2(i2, h2);
	});
var $author$project$ThumbPage$shorterBaseCase = _Utils_Tuple2(0, 999999);
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$ThumbPage$findShortest = function (imageLists) {
	return A3(
		$elm$core$List$foldr,
		$author$project$ThumbPage$shorter,
		$author$project$ThumbPage$shorterBaseCase,
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (a, b) {
					return _Utils_Tuple2(a, b);
				}),
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeL,
					$elm$core$List$sum,
					$elm$core$List$map(
						A2($elm$core$Basics$composeL, $author$project$ThumbPage$imgHeight, $elm$core$Tuple$first))),
				imageLists)));
};
var $author$project$Utils$ListUtils$mapI = F3(
	function (i, map, l) {
		var ifmap = function (_v0) {
			var j = _v0.a;
			var a = _v0.b;
			return _Utils_eq(i, j) ? map(a) : a;
		};
		return A2(
			$elm$core$List$map,
			ifmap,
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (a, b) {
						return _Utils_Tuple2(a, b);
					}),
				l));
	});
var $author$project$ThumbPage$insertImage = F4(
	function (maxCols, i, nextImg, alreadySpreadImages) {
		if (_Utils_cmp(
			$elm$core$List$length(alreadySpreadImages),
			maxCols) < 0) {
			return _Utils_ap(
				alreadySpreadImages,
				_List_fromArray(
					[
						_List_fromArray(
						[
							_Utils_Tuple2(nextImg, i)
						])
					]));
		} else {
			var is = $author$project$ThumbPage$findShortest(alreadySpreadImages);
			var iShortest = is;
			return A3(
				$author$project$Utils$ListUtils$mapI,
				iShortest.a,
				function (x) {
					return _Utils_ap(
						x,
						_List_fromArray(
							[
								_Utils_Tuple2(nextImg, i)
							]));
				},
				alreadySpreadImages);
		}
	});
var $author$project$ThumbPage$spreadThumbs = F3(
	function (maxCols, images, alreadySpreadImages) {
		var _v0 = $elm$core$List$head(images);
		if (!_v0.$) {
			var nextImg = _v0.a;
			return A3(
				$author$project$ThumbPage$spreadThumbs,
				maxCols,
				A2($elm$core$List$drop, 1, images),
				A4(
					$author$project$ThumbPage$insertImage,
					maxCols,
					$elm$core$List$sum(
						A2($elm$core$List$map, $elm$core$List$length, alreadySpreadImages)),
					nextImg,
					alreadySpreadImages));
		} else {
			return alreadySpreadImages;
		}
	});
var $author$project$AlbumStyles$ImgFetched = 0;
var $author$project$AlbumStyles$ImgLoaded = 1;
var $rtfeldman$elm_css$Css$borderBottomWidth = $rtfeldman$elm_css$Css$prop1('border-bottom-width');
var $rtfeldman$elm_css$Css$borderLeftWidth = $rtfeldman$elm_css$Css$prop1('border-left-width');
var $rtfeldman$elm_css$Css$borderRightWidth = $rtfeldman$elm_css$Css$prop1('border-right-width');
var $rtfeldman$elm_css$Css$borderTopWidth = $rtfeldman$elm_css$Css$prop1('border-top-width');
var $author$project$ThumbPage$grey = A3($rtfeldman$elm_css$Css$rgb, 128, 128, 128);
var $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode = $rtfeldman$elm_css$VirtualDom$Styled$Unstyled;
var $rtfeldman$elm_css$Html$Styled$fromUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode;
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $cedricss$elm_progress_ring$Progress$Ring$normalizedRadius = function (config) {
	return config.eA - (config.eQ / 2);
};
var $cedricss$elm_progress_ring$Progress$Ring$circumference = function (config) {
	return ($cedricss$elm_progress_ring$Progress$Ring$normalizedRadius(config) * 2) * $elm$core$Basics$pi;
};
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $elm$svg$Svg$Attributes$strokeDashoffset = _VirtualDom_attribute('stroke-dashoffset');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $cedricss$elm_progress_ring$Progress$Ring$view = function (config) {
	var strokeAttribute = $elm$core$String$fromFloat(config.eQ);
	var sizeAttribute = $elm$core$String$fromFloat(config.eA * 2);
	var radiusAttribute = $elm$core$String$fromFloat(config.eA);
	var offsetAttribute = $elm$core$String$fromFloat(
		(1 - config.bD) * $cedricss$elm_progress_ring$Progress$Ring$circumference(config));
	var normalizedRadiusAttribute = $elm$core$String$fromFloat(
		$cedricss$elm_progress_ring$Progress$Ring$normalizedRadius(config));
	var circumferenceAttribute = $elm$core$String$fromFloat(
		$cedricss$elm_progress_ring$Progress$Ring$circumference(config));
	return A2(
		$elm$svg$Svg$svg,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$height(sizeAttribute),
				$elm$svg$Svg$Attributes$width(sizeAttribute)
			]),
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$circle,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$fill('transparent'),
						$elm$svg$Svg$Attributes$stroke(config.dM),
						$elm$svg$Svg$Attributes$strokeDasharray(
						$elm$core$String$concat(
							_List_fromArray(
								[circumferenceAttribute, ' ', circumferenceAttribute]))),
						$elm$svg$Svg$Attributes$strokeDashoffset(offsetAttribute),
						$elm$svg$Svg$Attributes$strokeWidth(strokeAttribute),
						$elm$svg$Svg$Attributes$r(normalizedRadiusAttribute),
						$elm$svg$Svg$Attributes$cx(radiusAttribute),
						$elm$svg$Svg$Attributes$cy(radiusAttribute),
						$elm$svg$Svg$Attributes$style('transform: rotate(-90deg); transform-origin: 50% 50%;')
					]),
				_List_Nil)
			]));
};
var $author$project$ThumbPage$renderProgress = function (l) {
	if (((!l.$) && (l.a.$ === 2)) && (l.a.a.$ === 1)) {
		var r = l.a.a.a;
		var _v1 = r.eK;
		if (!_v1.$) {
			var sz = _v1.a;
			var pct = r.eB / sz;
			return $rtfeldman$elm_css$Html$Styled$fromUnstyled(
				$cedricss$elm_progress_ring$Progress$Ring$view(
					{dM: '#bfbfbf', bD: pct, eA: 20, eQ: 5}));
		} else {
			return $rtfeldman$elm_css$Html$Styled$text(
				function () {
					var _v2 = A2($elm$core$Basics$modBy, 3, r.eB);
					switch (_v2) {
						case 0:
							return '.  ';
						case 1:
							return ' . ';
						default:
							return '  .';
					}
				}());
		}
	} else {
		return $rtfeldman$elm_css$Html$Styled$text('...');
	}
};
var $author$project$ThumbPage$stubThumb = F3(
	function (width, img, progress) {
		var _v0 = A2($author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _v0.a;
		var yScaled = _v0.b;
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$author$project$AlbumStyles$styles(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$width(
							$rtfeldman$elm_css$Css$px(xScaled)),
							$rtfeldman$elm_css$Css$height(
							$rtfeldman$elm_css$Css$px(yScaled)),
							$rtfeldman$elm_css$Css$color($author$project$AlbumStyles$white),
							$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
							$rtfeldman$elm_css$Css$displayFlex,
							A2($rtfeldman$elm_css$Css$property, 'justify-content', 'center'),
							A2($rtfeldman$elm_css$Css$property, 'align-content', 'center'),
							$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
							$rtfeldman$elm_css$Css$borderStyle($rtfeldman$elm_css$Css$solid),
							$rtfeldman$elm_css$Css$borderColor($author$project$ThumbPage$grey),
							$rtfeldman$elm_css$Css$borderTopWidth(
							$rtfeldman$elm_css$Css$px(1)),
							$rtfeldman$elm_css$Css$borderBottomWidth(
							$rtfeldman$elm_css$Css$px(1)),
							$rtfeldman$elm_css$Css$borderLeftWidth(
							$rtfeldman$elm_css$Css$px(1)),
							$rtfeldman$elm_css$Css$borderRightWidth(
							$rtfeldman$elm_css$Css$px(1)),
							$rtfeldman$elm_css$Css$margin(
							$rtfeldman$elm_css$Css$px(-1))
						]))
				]),
			_List_fromArray(
				[
					$author$project$ThumbPage$renderProgress(progress)
				]));
	});
var $rtfeldman$elm_css$Css$opacity = $rtfeldman$elm_css$Css$prop1('opacity');
var $rtfeldman$elm_css$Css$Transitions$EaseInOut = {$: 4};
var $rtfeldman$elm_css$Css$Transitions$easeInOut = $rtfeldman$elm_css$Css$Transitions$EaseInOut;
var $rtfeldman$elm_css$Css$Transitions$Opacity = 73;
var $rtfeldman$elm_css$Css$Transitions$Transition = $elm$core$Basics$identity;
var $rtfeldman$elm_css$Css$Transitions$fullTransition = F4(
	function (animation, duration, delay, timing) {
		return {
			bk: animation,
			bm: $elm$core$Maybe$Just(delay),
			bO: duration,
			dx: $elm$core$Maybe$Just(timing)
		};
	});
var $rtfeldman$elm_css$Css$Transitions$opacity3 = $rtfeldman$elm_css$Css$Transitions$fullTransition(73);
var $author$project$AlbumStyles$opacityDurationMillis = 1000;
var $rtfeldman$elm_css$Css$Transitions$propToString = function (prop) {
	switch (prop) {
		case 0:
			return 'background';
		case 1:
			return 'background-color';
		case 2:
			return 'background-position';
		case 3:
			return 'background-size';
		case 4:
			return 'border';
		case 5:
			return 'border-bottom';
		case 6:
			return 'border-bottom-color';
		case 7:
			return 'border-bottom-left-radius';
		case 8:
			return 'border-bottom-right-radius';
		case 9:
			return 'border-bottom-width';
		case 10:
			return 'border-color';
		case 11:
			return 'border-left';
		case 12:
			return 'border-left-color';
		case 13:
			return 'border-left-width';
		case 14:
			return 'border-radius';
		case 15:
			return 'border-right';
		case 16:
			return 'border-right-color';
		case 17:
			return 'border-right-width';
		case 18:
			return 'border-top';
		case 19:
			return 'border-top-color';
		case 20:
			return 'border-top-left-radius';
		case 21:
			return 'border-top-right-radius';
		case 22:
			return 'border-top-width';
		case 23:
			return 'border-width';
		case 24:
			return 'bottom';
		case 25:
			return 'box-shadow';
		case 26:
			return 'caret-color';
		case 27:
			return 'clip';
		case 28:
			return 'clip-path';
		case 29:
			return 'color';
		case 30:
			return 'column-count';
		case 31:
			return 'column-gap';
		case 32:
			return 'column-rule';
		case 33:
			return 'column-rule-color';
		case 34:
			return 'column-rule-width';
		case 35:
			return 'column-width';
		case 36:
			return 'columns';
		case 37:
			return 'filter';
		case 38:
			return 'flex';
		case 39:
			return 'flex-basis';
		case 40:
			return 'flex-grow';
		case 41:
			return 'flex-shrink';
		case 42:
			return 'font';
		case 43:
			return 'font-size';
		case 44:
			return 'font-size-adjust';
		case 45:
			return 'font-stretch';
		case 46:
			return 'font-variation-settings';
		case 47:
			return 'font-weight';
		case 48:
			return 'grid-column-gap';
		case 49:
			return 'grid-gap';
		case 50:
			return 'grid-row-gap';
		case 51:
			return 'height';
		case 52:
			return 'left';
		case 53:
			return 'letter-spacing';
		case 54:
			return 'line-height';
		case 55:
			return 'margin';
		case 56:
			return 'margin-bottom';
		case 57:
			return 'margin-left';
		case 58:
			return 'margin-right';
		case 59:
			return 'margin-top';
		case 60:
			return 'mask';
		case 61:
			return 'mask-position';
		case 62:
			return 'mask-size';
		case 63:
			return 'max-height';
		case 64:
			return 'max-width';
		case 65:
			return 'min-height';
		case 66:
			return 'min-width';
		case 67:
			return 'object-position';
		case 68:
			return 'offset';
		case 69:
			return 'offset-anchor';
		case 70:
			return 'offset-distance';
		case 71:
			return 'offset-path';
		case 72:
			return 'offset-rotate';
		case 73:
			return 'opacity';
		case 74:
			return 'order';
		case 75:
			return 'outline';
		case 76:
			return 'outline-color';
		case 77:
			return 'outline-offset';
		case 78:
			return 'outline-width';
		case 79:
			return 'padding';
		case 80:
			return 'padding-bottom';
		case 81:
			return 'padding-left';
		case 82:
			return 'padding-right';
		case 83:
			return 'padding-top';
		case 84:
			return 'right';
		case 85:
			return 'tab-size';
		case 86:
			return 'text-indent';
		case 87:
			return 'text-shadow';
		case 88:
			return 'top';
		case 89:
			return 'transform';
		case 90:
			return 'transform-origin';
		case 91:
			return 'vertical-align';
		case 92:
			return 'visibility';
		case 93:
			return 'width';
		case 94:
			return 'word-spacing';
		default:
			return 'z-index';
	}
};
var $rtfeldman$elm_css$Css$Transitions$timeToString = function (time) {
	return $elm$core$String$fromFloat(time) + 'ms';
};
var $rtfeldman$elm_css$Css$Transitions$timingFunctionToString = function (tf) {
	switch (tf.$) {
		case 0:
			return 'ease';
		case 1:
			return 'linear';
		case 2:
			return 'ease-in';
		case 3:
			return 'ease-out';
		case 4:
			return 'ease-in-out';
		case 5:
			return 'step-start';
		case 6:
			return 'step-end';
		default:
			var _float = tf.a;
			var float2 = tf.b;
			var float3 = tf.c;
			var float4 = tf.d;
			return 'cubic-bezier(' + ($elm$core$String$fromFloat(_float) + (' , ' + ($elm$core$String$fromFloat(float2) + (' , ' + ($elm$core$String$fromFloat(float3) + (' , ' + ($elm$core$String$fromFloat(float4) + ')')))))));
	}
};
var $rtfeldman$elm_css$Css$Transitions$transition = function (options) {
	var v = A3(
		$elm$core$String$slice,
		0,
		-1,
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, s) {
					var animation = _v0.bk;
					var duration = _v0.bO;
					var delay = _v0.bm;
					var timing = _v0.dx;
					return s + (A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$Transitions$propToString(animation),
								$rtfeldman$elm_css$Css$Transitions$timeToString(duration),
								A2(
								$elm$core$Maybe$withDefault,
								'',
								A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Transitions$timeToString, delay)),
								A2(
								$elm$core$Maybe$withDefault,
								'',
								A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Transitions$timingFunctionToString, timing))
							])) + ',');
				}),
			'',
			options));
	return A2($rtfeldman$elm_css$Css$property, 'transition', v);
};
var $author$project$AlbumStyles$opacityAnimatedTo = function (opasity) {
	return _List_fromArray(
		[
			$rtfeldman$elm_css$Css$opacity(
			$rtfeldman$elm_css$Css$num(opasity)),
			$rtfeldman$elm_css$Css$Transitions$transition(
			_List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Transitions$opacity3, $author$project$AlbumStyles$opacityDurationMillis, 0, $rtfeldman$elm_css$Css$Transitions$easeInOut)
				]))
		]);
};
var $author$project$AlbumStyles$opacityStyles = function (imgLoadedState) {
	if (!imgLoadedState) {
		return _List_fromArray(
			[
				$rtfeldman$elm_css$Css$opacity(
				$rtfeldman$elm_css$Css$num(0))
			]);
	} else {
		return $author$project$AlbumStyles$opacityAnimatedTo(1);
	}
};
var $author$project$ThumbPage$viewThumb = F7(
	function (a, width, opasity, extraStyles, selectedMsg, loadedMsg, img) {
		var onLoadAttr = function () {
			if (!opasity) {
				return _List_fromArray(
					[
						A2(
						$rtfeldman$elm_css$Html$Styled$Events$on,
						'load',
						$elm$json$Json$Decode$succeed(loadedMsg))
					]);
			} else {
				return _List_Nil;
			}
		}();
		var _v0 = A2($author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _v0.a;
		var yScaled = _v0.b;
		return A3(
			a,
			selectedMsg,
			_List_Nil,
			_List_fromArray(
				[
					A7(
					$author$project$ImageViews$renderPresized,
					10,
					xScaled,
					yScaled,
					img.b4,
					img.b5,
					_Utils_ap(
						$author$project$ThumbPage$thumbStyles,
						_Utils_ap(
							$author$project$AlbumStyles$opacityStyles(opasity),
							extraStyles)),
					onLoadAttr)
				]));
	});
var $author$project$ThumbPage$viewThumbColumn = F7(
	function (a, thumbWidth, imgChosenMsgr, loadedMsg, imageLoader, baseUrl, images) {
		var viewThumbTuple = function (_v4) {
			var img = _v4.a;
			var i = _v4.b;
			var src = A2($author$project$ThumbPage$srcForWidth, thumbWidth, img);
			var srcUrl = A2(
				$author$project$Utils$HttpUtils$appendPath,
				baseUrl,
				$author$project$Utils$ListUtils$encodePath(src.ca));
			var loadState = A2($author$project$Utils$Loading$getOneState, imageLoader, srcUrl);
			var srcLoadState = function () {
				_v1$2:
				while (true) {
					if (!loadState.$) {
						switch (loadState.a.$) {
							case 3:
								var _v2 = loadState.a;
								return $elm$core$Maybe$Just(0);
							case 4:
								if (loadState.a.a.$ === 3) {
									var _v3 = loadState.a.a;
									return $elm$core$Maybe$Just(1);
								} else {
									break _v1$2;
								}
							default:
								break _v1$2;
						}
					} else {
						break _v1$2;
					}
				}
				return $elm$core$Maybe$Nothing;
			}();
			if (!srcLoadState.$) {
				var opacity = srcLoadState.a;
				return A7(
					$author$project$ThumbPage$viewThumb,
					a,
					thumbWidth,
					opacity,
					_List_Nil,
					imgChosenMsgr(i),
					loadedMsg(srcUrl),
					img);
			} else {
				return A3($author$project$ThumbPage$stubThumb, thumbWidth, img, loadState);
			}
		};
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$author$project$AlbumStyles$styles(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$displayFlex,
							$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column)
						]))
				]),
			A2($elm$core$List$map, viewThumbTuple, images));
	});
var $author$project$ThumbPage$viewThumbs = F4(
	function (a, imgChosenMsgr, loadedMsg, thumbPageModel) {
		var imgs = A2($elm$core$List$cons, thumbPageModel.g.bU, thumbPageModel.g.bV);
		var _v0 = $author$project$ThumbPage$colsWidth(thumbPageModel.dI);
		var maxCols = _v0.a;
		var thumbWidth = _v0.b;
		return A2(
			$elm$core$List$map,
			A6(
				$author$project$ThumbPage$viewThumbColumn,
				a,
				thumbWidth,
				A3($author$project$ThumbPage$convertImgChosenMsgr, thumbPageModel.g.bU, imgs, imgChosenMsgr),
				loadedMsg,
				thumbPageModel.l,
				thumbPageModel.B),
			A3($author$project$ThumbPage$spreadThumbs, maxCols, imgs, _List_Nil));
	});
var $author$project$ThumbPage$view = F7(
	function (a, scrollMsgMaker, imgChosenMsgr, loadedMsg, showList, thumbPageModel, flags) {
		return A6(
			$author$project$AlbumStyles$rootDivFlex,
			flags,
			$rtfeldman$elm_css$Css$column,
			$elm$core$Maybe$Just(scrollMsgMaker),
			thumbPageModel.dI,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$overflowX($rtfeldman$elm_css$Css$hidden)
				]),
			_List_fromArray(
				[
					A6(
					$author$project$ThumbPage$albumTitle,
					a,
					thumbPageModel.g.b9,
					thumbPageModel.bB,
					showList,
					_List_Nil,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$fixed)
						])),
					A6(
					$author$project$ThumbPage$albumTitle,
					a,
					thumbPageModel.g.b9,
					thumbPageModel.bB,
					showList,
					_List_Nil,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$visibility($rtfeldman$elm_css$Css$hidden)
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$author$project$AlbumStyles$styles(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$displayFlex,
									$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
									$rtfeldman$elm_css$Css$flexShrink(
									$rtfeldman$elm_css$Css$num(0))
								]))
						]),
					A4($author$project$ThumbPage$viewThumbs, a, imgChosenMsgr, loadedMsg, thumbPageModel))
				]));
	});
var $author$project$AlbumPage$view = F7(
	function (albumPage, a, scrollMsgMaker, showList, wrapMsg, parents, flags) {
		if (!albumPage.$) {
			var th = albumPage.a;
			return A7(
				$author$project$ThumbPage$view,
				a,
				scrollMsgMaker,
				function (x) {
					return function (y) {
						return function (z) {
							return wrapMsg(
								A3($author$project$AlbumPage$View, x, y, z));
						};
					};
				},
				A2($elm$core$Basics$composeR, $author$project$AlbumPage$ThumbLoaded, wrapMsg),
				showList,
				{g: th.g, B: th.B, dI: th.n.dI, l: th.l, bB: parents, aT: th.n.aT},
				flags);
		} else {
			var fi = albumPage.a;
			return A7(
				$author$project$FullImagePage$view,
				a,
				{
					dH: wrapMsg($author$project$AlbumPage$BackToThumbs),
					ej: wrapMsg($author$project$AlbumPage$Next),
					ex: wrapMsg($author$project$AlbumPage$Prev),
					eJ: showList
				},
				{
					eX: A2($elm$core$Basics$composeL, wrapMsg, $author$project$AlbumPage$TouchDragContinue),
					eY: A2(
						$elm$core$Basics$composeL,
						wrapMsg,
						$author$project$AlbumPage$touchPrevNext(fi.X)),
					eZ: A2($elm$core$Basics$composeL, wrapMsg, $author$project$AlbumPage$TouchDragStart)
				},
				A2($elm$core$Basics$composeL, wrapMsg, $author$project$AlbumPage$FullMsg),
				{
					g: fi.g,
					bp: fi.bp,
					ek: $author$project$Utils$TouchUtils$getOffset(fi.X),
					aR: fi.aR,
					ez: fi.ab,
					bi: fi.n.dI
				},
				parents,
				flags);
		}
	});
var $author$project$Main$viewList = F3(
	function (viewport, parents, list) {
		return $author$project$Main$Album(
			A2(
				$author$project$Main$ViewList,
				{
					a_: list,
					dI: viewport,
					bB: A2(
						$author$project$Utils$ListUtils$dropThroughPred,
						function (_v0) {
							var p = _v0.a;
							return _Utils_eq(p, list);
						},
						parents)
				},
				function () {
					if (A2(
						$elm$core$List$member,
						list,
						A2($elm$core$List$map, $elm$core$Tuple$first, parents))) {
						var _v1 = $elm$core$List$head(
							A2(
								$elm$core$List$filter,
								function (e) {
									return _Utils_eq(list, e.a);
								},
								parents));
						if (!_v1.$) {
							var p = _v1.a;
							return p.b;
						} else {
							return $elm$core$Maybe$Nothing;
						}
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}()));
	});
var $author$project$Utils$HttpUtils$viewProgress = F2(
	function (prefix, mProgress) {
		var pct = F2(
			function (num, denom) {
				return $elm$core$String$fromInt(
					$elm$core$Basics$round((100 * num) / denom)) + '%';
			});
		if (mProgress.$ === 1) {
			return prefix;
		} else {
			var progress = mProgress.a;
			if (!progress.$) {
				var s = progress.a;
				return prefix + (': sent ' + A2(pct, s.eG, s.eK));
			} else {
				var r = progress.a;
				var _v2 = r.eK;
				if (_v2.$ === 1) {
					return prefix + (': ' + ($elm$core$String$fromInt(r.eB) + ' bytes received'));
				} else {
					var size = _v2.a;
					return prefix + (': received ' + A2(pct, r.eB, size));
				}
			}
		}
	});
var $author$project$Main$withHomeLink = F3(
	function (home, flags, basePage) {
		if (!home.$) {
			var h = home.a;
			return A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_Nil,
				_List_fromArray(
					[
						basePage,
						A2(
						$rtfeldman$elm_css$Html$Styled$a,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$href(h),
								$author$project$AlbumStyles$styles(
								_Utils_ap(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$top(
											$rtfeldman$elm_css$Css$px(0)),
											$rtfeldman$elm_css$Css$left(
											$rtfeldman$elm_css$Css$px(0)),
											$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
										]),
									_Utils_ap(
										$author$project$AlbumStyles$navBoxStyles,
										_List_fromArray(
											[
												$author$project$AlbumStyles$rootPos(flags)
											]))))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text('⌂')
							]))
					]));
		} else {
			return basePage;
		}
	});
var $author$project$Main$viewImpl = F2(
	function (albumBootstrap, a) {
		switch (albumBootstrap.$) {
			case 0:
				return $rtfeldman$elm_css$Html$Styled$text('Album Starting');
			case 1:
				return $rtfeldman$elm_css$Html$Styled$text('Album Starting');
			case 2:
				return $rtfeldman$elm_css$Html$Styled$text('Home Loading ...');
			case 3:
				var ld = albumBootstrap.a;
				return $rtfeldman$elm_css$Html$Styled$text(
					A2($author$project$Utils$HttpUtils$viewProgress, 'Album Loading', ld.bD));
			case 4:
				var le = albumBootstrap.a;
				var eStr = function () {
					var _v1 = le.cz;
					switch (_v1.$) {
						case 0:
							var s = _v1.a;
							return 'bad url: ' + s;
						case 1:
							return 'timeout';
						case 2:
							return 'network error';
						case 3:
							var code = _v1.a;
							return 'bad status: ' + $elm$core$String$fromInt(code);
						default:
							var s = _v1.a;
							return 'bad payload: ' + s;
					}
				}();
				return $rtfeldman$elm_css$Html$Styled$text('Error Loading Album: ' + eStr);
			case 6:
				var la = albumBootstrap.a;
				return A3(
					$author$project$Main$withHomeLink,
					la.K,
					la.i,
					A7(
						$author$project$AlbumPage$view,
						la.j,
						a,
						A2($elm$core$Basics$composeL, $author$project$Main$General, $author$project$Main$ScrolledTo),
						A2(
							$author$project$Main$viewList,
							$author$project$AlbumPage$pageSize(la.j).dI,
							la.bB),
						A2($elm$core$Basics$composeL, $author$project$Main$Album, $author$project$Main$PageMsg),
						A2($elm$core$List$map, $elm$core$Tuple$first, la.bB),
						la.i));
			default:
				var ll = albumBootstrap.a;
				var _v2 = ll.y;
				var alp = _v2;
				return A3(
					$author$project$Main$withHomeLink,
					ll.K,
					ll.i,
					A6(
						$author$project$AlbumListPage$view,
						alp,
						a,
						A2(
							$author$project$Main$viewList,
							alp.dI,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									alp.a_,
									A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, ll.aT)),
								alp.bB)),
						function (album) {
							return $author$project$Main$Album(
								A2(
									$author$project$Main$ViewAlbum,
									A3(
										$author$project$AlbumPage$initThumbsFullVp,
										album,
										{dI: alp.dI, aT: ll.aT},
										ll.B).a,
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(
											alp.a_,
											A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, ll.aT)),
										alp.bB)));
						},
						A2($elm$core$Basics$composeL, $author$project$Main$General, $author$project$Main$ScrolledTo),
						ll.i));
		}
	});
var $author$project$Main$view = F2(
	function (albumBootstrap, a) {
		var title = function () {
			switch (albumBootstrap.$) {
				case 0:
					return 'Album Starting';
				case 1:
					return 'Album Starting';
				case 2:
					return 'Home Loading ...';
				case 3:
					var ld = albumBootstrap.a;
					return A2($author$project$Utils$HttpUtils$viewProgress, 'Album Loading', ld.bD);
				case 4:
					return 'Error Loading Album';
				case 5:
					var ll = albumBootstrap.a;
					var _v1 = ll.y;
					var alp = _v1;
					return alp.a_.bZ;
				default:
					var la = albumBootstrap.a;
					return $author$project$AlbumPage$titleOf(la.j);
			}
		}();
		return {
			cn: _List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$toUnstyled(
					A2($author$project$Main$viewImpl, albumBootstrap, a))
				]),
			b9: title
		};
	});
var $author$project$Main$main = $author$project$RouteUrl$anchorManagedProgram(
	{
		dT: $author$project$Main$locFor,
		d5: $author$project$Main$init,
		ec: function (u) {
			return _List_fromArray(
				[
					$author$project$Main$General(
					$author$project$Main$InternalUrlClicked(u))
				]);
		},
		ee: $author$project$Main$makeAnchor,
		em: A2($elm$core$Basics$composeL, $author$project$Main$General, $author$project$Main$ExternalLinkClicked),
		eR: $author$project$Main$subscriptions,
		e2: $author$project$Main$update,
		e5: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (scrollSupport) {
			return $elm$json$Json$Decode$succeed(
				{dp: scrollSupport});
		},
		A2($elm$json$Json$Decode$field, 'scrollSupport', $elm$json$Json$Decode$bool)))(0)}});}(this));