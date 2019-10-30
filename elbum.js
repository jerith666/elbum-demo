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

	if (typeof File === 'function' && value instanceof File)
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
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
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
	if (region.eH.a1 === region.dX.a1)
	{
		return 'on line ' + region.eH.a1;
	}
	return 'on lines ' + region.eH.a1 + ' through ' + region.dX.a1;
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
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
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
	return word
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
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
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
		impl.d4,
		impl.e_,
		impl.eM,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

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
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
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
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

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
		r: converter,
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
	var converter = _Platform_effectManagers[name].r;

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
		ac: func(record.ac),
		eK: record.eK,
		ex: record.ex
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
		var message = !tag ? value : tag < 3 ? value.a : value.ac;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.eK;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.ex) && event.preventDefault(),
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
		impl.d4,
		impl.e_,
		impl.eM,
		function(sendToApp, initialModel) {
			var view = impl.e1;
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
		impl.d4,
		impl.e_,
		impl.eM,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.b$ && impl.b$(sendToApp)
			var view = impl.e1;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cj);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.b5) && (_VirtualDom_doc.title = title = doc.b5);
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
	var onUrlChange = impl.el;
	var onUrlRequest = impl.em;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		b$: function(sendToApp)
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
							&& curr.dd === next.dd
							&& curr.cD === next.cD
							&& curr.c9.a === next.c9.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		d4: function(flags)
		{
			return A3(impl.d4, flags, _Browser_getUrl(), key);
		},
		e1: impl.e1,
		e_: impl.e_,
		eM: impl.eM
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
		? { d0: 'hidden', dK: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { d0: 'mozHidden', dK: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { d0: 'msHidden', dK: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { d0: 'webkitHidden', dK: 'webkitvisibilitychange' }
		: { d0: 'hidden', dK: 'visibilitychange' };
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
		eA: _Browser_getScene(),
		bd: {
			b8: _Browser_window.pageXOffset,
			b9: _Browser_window.pageYOffset,
			b7: _Browser_doc.documentElement.clientWidth,
			bM: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		b7: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bM: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			eA: {
				b7: node.scrollWidth,
				bM: node.scrollHeight
			},
			bd: {
				b8: node.scrollLeft,
				b9: node.scrollTop,
				b7: node.clientWidth,
				bM: node.clientHeight
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
			eA: _Browser_getScene(),
			bd: {
				b8: x,
				b9: y,
				b7: _Browser_doc.documentElement.clientWidth,
				bM: _Browser_doc.documentElement.clientHeight
			},
			cu: {
				b8: x + rect.left,
				b9: y + rect.top,
				b7: rect.width,
				bM: rect.height
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



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.cy.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.cy.b, xhr)); });
		$elm$core$Maybe$isJust(request.eW) && _Http_track(router, xhr, request.eW.a);

		try {
			xhr.open(request.ed, request.b6, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.b6));
		}

		_Http_configureRequest(xhr, request);

		request.cj.a && xhr.setRequestHeader('Content-Type', request.cj.a);
		xhr.send(request.cj.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.d$; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.eR.a || 0;
	xhr.responseType = request.cy.d;
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
		b6: xhr.responseURL,
		eI: xhr.status,
		eJ: xhr.statusText,
		d$: _Http_parseHeaders(xhr.getAllResponseHeaders())
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
			eD: event.loaded,
			$7: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			df: event.loaded,
			$7: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


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
    return { b8: a[0], b9: a[1] };
};

var _MJS_v2fromRecord = function(r) {
    return new Float64Array([r.b8, r.b9]);
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
    return { b8: a[0], b9: a[1], bB: a[2] };
};

var _MJS_v3fromRecord = function(r) {
    return new Float64Array([r.b8, r.b9, r.bB]);
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
    return { b8: a[0], b9: a[1], bB: a[2], dA: a[3] };
};

var _MJS_v4fromRecord = function(r) {
    return new Float64Array([r.b8, r.b9, r.bB, r.dA]);
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
    m[0] = r.cL;
    m[1] = r.cP;
    m[2] = r.cT;
    m[3] = r.cX;
    m[4] = r.cM;
    m[5] = r.cQ;
    m[6] = r.cU;
    m[7] = r.cY;
    m[8] = r.cN;
    m[9] = r.cR;
    m[10] = r.cV;
    m[11] = r.cZ;
    m[12] = r.cO;
    m[13] = r.cS;
    m[14] = r.cW;
    m[15] = r.c_;
    return m;
};

var _MJS_m4x4toRecord = function(m) {
    return {
        cL: m[0], cP: m[1], cT: m[2], cX: m[3],
        cM: m[4], cQ: m[5], cU: m[6], cY: m[7],
        cN: m[8], cR: m[9], cV: m[10], cZ: m[11],
        cO: m[12], cS: m[13], cW: m[14], c_: m[15]
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
var $author$project$Main$LinkClicked = function (a) {
	return {$: 20, a: a};
};
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
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
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
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
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
		if (!builder.n) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.p),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.p);
		} else {
			var treeLen = builder.n * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.r) : builder.r;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.n);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.p) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.p);
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
					{r: nodeList, n: (len / $elm$core$Array$branchFactor) | 0, p: tail});
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
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$Resize = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$Sizing = function (a) {
	return {$: 0, a: a};
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
		return {bL: fragment, cD: host, c6: path, c9: port_, dd: protocol, b_: query};
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
var $elm$core$String$startsWith = _String_startsWith;
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
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $author$project$Main$init = F2(
	function (flags, key) {
		return _Utils_Tuple2(
			$author$project$Main$Sizing(
				{G: $elm$core$Maybe$Nothing, j: flags, k: key, O: $elm$core$Maybe$Nothing}),
			A2($elm$core$Task$perform, $author$project$Main$Resize, $elm$browser$Browser$Dom$getViewport));
	});
var $author$project$RouteUrl$ModifyEntry = 1;
var $author$project$RouteUrl$NewEntry = 0;
var $author$project$RouteUrl$NewFragment = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$RouteUrl$NewQuery = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
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
						{l: th1.l}),
					th1);
			} else {
				var fi = aPage2.a;
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
						{l: fi1.l}),
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
								return p.bS;
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
					[th.g.b5]);
			} else {
				var fi = albumPage.a;
				return _List_fromArray(
					[fi.g.b5, fi.g.bN.bC]);
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
	return $elm$core$List$isEmpty(alp.bY) ? A2(
		$author$project$Utils$AlbumUtils$hashFromAlbumPath,
		_List_fromArray(
			['']),
		_List_Nil) : A2(
		$author$project$Utils$AlbumUtils$hashFromAlbumPath,
		_List_fromArray(
			[alp.bf.bS]),
		A2($elm$core$List$map, $elm$core$Tuple$first, alp.bY));
};
var $author$project$Utils$DebugSupport$log = F2(
	function (str, val) {
		return val;
	});
var $elm$core$String$fromFloat = _String_fromNumber;
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
var $author$project$Utils$ViewportUtils$scrollPosOf = function (viewport) {
	return viewport.bd.b9;
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Main$queryFor = function (model) {
	var queryForPos = function (pos) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (p) {
					return 's=' + $elm$core$String$fromFloat(p);
				},
				pos));
	};
	switch (model.$) {
		case 0:
			return '';
		case 1:
			return '';
		case 2:
			return '';
		case 3:
			return '';
		case 5:
			var la = model.a;
			return queryForPos(
				A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, la.a5));
		default:
			var ll = model.a;
			return queryForPos(
				A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, ll.a5));
	}
};
var $author$project$Main$locFor = F2(
	function (oldModel, newModel) {
		var newQorF = F3(
			function (meta, modl, fragment) {
				var _v7 = $author$project$Main$queryFor(modl);
				if (_v7 === '') {
					return A2($author$project$RouteUrl$NewFragment, meta, fragment);
				} else {
					var q = _v7;
					return A2(
						$author$project$RouteUrl$NewQuery,
						meta,
						{
							bL: $elm$core$Maybe$Just(fragment),
							b_: q
						});
				}
			});
		var model = newModel;
		var entry = function () {
			switch (oldModel.$) {
				case 4:
					var ll = oldModel.a;
					if (newModel.$ === 4) {
						var ll2 = newModel.a;
						var _v4 = _Utils_eq(ll.F, ll2.F);
						if (_v4) {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedList same', 1);
						} else {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedList dift', 0);
						}
					} else {
						return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedList -> something else', 0);
					}
				case 5:
					var la = oldModel.a;
					if (newModel.$ === 5) {
						var la2 = newModel.a;
						var _v6 = A2($author$project$AlbumPage$eqIgnoringVpInfo, la.i, la2.i) && _Utils_eq(la.bY, la2.bY);
						if (_v6) {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedAlbum same', 1);
						} else {
							return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedAlbum dift', 0);
						}
					} else {
						return A2($author$project$Utils$DebugSupport$log, 'locFor LoadedAlbum -> something else', 0);
					}
				default:
					return A2($author$project$Utils$DebugSupport$log, 'locFor something els -> *', 0);
			}
		}();
		var checkNavState = F2(
			function (state, nav) {
				var _v1 = A2($author$project$Utils$DebugSupport$log, 'checkNavState', state);
				if (!_v1) {
					return $elm$core$Maybe$Nothing;
				} else {
					return nav;
				}
			});
		return A2(
			$author$project$Utils$DebugSupport$log,
			'locFor',
			function () {
				switch (model.$) {
					case 5:
						var la = model.a;
						return A2(
							checkNavState,
							la.ad,
							$elm$core$Maybe$Just(
								A3(
									newQorF,
									{cv: entry, k: la.k},
									model,
									A2(
										$author$project$AlbumPage$hashForAlbum,
										la.i,
										A2($elm$core$List$map, $elm$core$Tuple$first, la.bY)))));
					case 4:
						var ll = model.a;
						return A2(
							checkNavState,
							ll.ad,
							$elm$core$Maybe$Just(
								A3(
									newQorF,
									{cv: entry, k: ll.k},
									model,
									$author$project$AlbumListPage$hashForList(ll.F))));
					default:
						return $elm$core$Maybe$Nothing;
				}
			}());
	});
var $author$project$Main$NoBootstrap = {$: 21};
var $author$project$Main$Sequence = F2(
	function (a, b) {
		return {$: 18, a: a, b: b};
	});
var $author$project$Main$SetAlbumPathFromUrl = function (a) {
	return {$: 16, a: a};
};
var $author$project$Main$SetScrollFromUrl = function (a) {
	return {$: 17, a: a};
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
var $author$project$Utils$ListUtils$fromMaybe = function (m) {
	if (m.$ === 1) {
		return _List_Nil;
	} else {
		var x = m.a;
		return _List_fromArray(
			[x]);
	}
};
var $elm$parser$Parser$Optional = 1;
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.ej, offset) < 0,
					0,
					{cq: col, e: s0.e, f: s0.f, ej: offset, dl: row, a: s0.a});
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
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.ej, s.dl, s.cq, s);
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
		return {cq: col, dN: contextStack, da: problem, dl: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.dl, s.cq, x, s.e));
	});
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.a),
			s.ej) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
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
						A3($elm$core$String$slice, s0.ej, s1.ej, s0.a),
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
var $elm$core$Basics$neq = _Utils_notEqual;
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
		return {cq: col, da: problem, dl: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.dl, p.cq, p.da);
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
			{cq: 1, e: _List_Nil, f: 1, ej: 0, dl: 1, a: src});
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
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.ej, s.dl, s.cq, s.a);
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
			{cq: newCol, e: s.e, f: s.f, ej: newOffset, dl: newRow, a: s.a});
	};
};
var $elm$parser$Parser$Advanced$sequence = function (i) {
	return A2(
		$elm$parser$Parser$Advanced$skip,
		$elm$parser$Parser$Advanced$token(i.eH),
		A2(
			$elm$parser$Parser$Advanced$skip,
			i.eG,
			A5(
				$elm$parser$Parser$Advanced$sequenceEnd,
				$elm$parser$Parser$Advanced$token(i.dX),
				i.eG,
				i.d8,
				$elm$parser$Parser$Advanced$token(i.eE),
				i.eX)));
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
			dX: $elm$parser$Parser$toToken(i.dX),
			d8: i.d8,
			eE: $elm$parser$Parser$toToken(i.eE),
			eG: i.eG,
			eH: $elm$parser$Parser$toToken(i.eH),
			eX: $elm$parser$Parser$toAdvancedTrailing(i.eX)
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
							dX: '',
							d8: A2(
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
							eE: '/',
							eG: $elm$parser$Parser$succeed(0),
							eH: '',
							eX: 1
						}),
					$elm$parser$Parser$end))
			]));
	return A2($elm$parser$Parser$run, hashParser, href);
};
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $author$project$Utils$LocationUtils$parseQuery = function (query) {
	var qParser = $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Maybe$Nothing),
				$elm$parser$Parser$end),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Maybe$Just),
					$elm$parser$Parser$symbol('s=')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$getChompedString(
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(0),
							$elm$parser$Parser$chompWhile(
								function (_v0) {
									return true;
								}))),
					$elm$parser$Parser$end))
			]));
	return A2($elm$parser$Parser$run, qParser, query);
};
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$Main$navToMsg = function (loc) {
	var parsedQuery = A2(
		$author$project$Utils$DebugSupport$log,
		'parsedQuery from ' + A2($elm$core$Maybe$withDefault, '<no query>', loc.b_),
		$author$project$Utils$LocationUtils$parseQuery(
			A2($elm$core$Maybe$withDefault, '', loc.b_)));
	var queryMsgs = function () {
		if (parsedQuery.$ === 1) {
			return _List_Nil;
		} else {
			var scroll = parsedQuery.a;
			return A2(
				$elm$core$List$cons,
				$author$project$Main$NoBootstrap,
				$author$project$Utils$ListUtils$fromMaybe(
					A2(
						$elm$core$Maybe$map,
						$author$project$Main$SetScrollFromUrl,
						A2($elm$core$Maybe$andThen, $elm$core$String$toFloat, scroll))));
		}
	}();
	var parsedHash = A2(
		$author$project$Utils$DebugSupport$log,
		'parsedHash from ' + A2($elm$core$Maybe$withDefault, '<no fragment>', loc.bL),
		$author$project$Utils$LocationUtils$parseHash(
			A2($elm$core$Maybe$withDefault, '', loc.bL)));
	var hashMsgs = function () {
		if (parsedHash.$ === 1) {
			return _List_Nil;
		} else {
			var paths = parsedHash.a;
			return _List_fromArray(
				[
					$author$project$Main$SetAlbumPathFromUrl(paths)
				]);
		}
	}();
	var _v0 = _Utils_ap(hashMsgs, queryMsgs);
	if (!_v0.b) {
		return _List_Nil;
	} else {
		if (!_v0.b.b) {
			var c = _v0.a;
			return _List_fromArray(
				[c]);
		} else {
			var c1 = _v0.a;
			var cs = _v0.b;
			return _List_fromArray(
				[
					A2($author$project$Main$Sequence, c1, cs)
				]);
		}
	}
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$RouteUrl$RouterMsg = function (a) {
	return {$: 0, a: a};
};
var $author$project$RouteUrl$appWithFlags2Common = function (app) {
	return {dT: app.dT, eb: app.eb, em: app.em, eM: app.eM, e_: app.e_, e1: app.e1};
};
var $author$project$RouteUrl$UserMsg = function (a) {
	return {$: 1, a: a};
};
var $author$project$RouteUrl$WrappedModel = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
var $author$project$RouteUrl$initWithFlags = F5(
	function (appInit, app, flags, location, key) {
		var routerModel = {R: 0, ah: location};
		var _v0 = A3(
			$ccapndave$elm_update_extra$Update$Extra$sequence,
			app.e_,
			app.eb(location),
			A2(appInit, flags, key));
		var userModel = _v0.a;
		var command = _v0.b;
		return _Utils_Tuple2(
			A2($author$project$RouteUrl$WrappedModel, userModel, routerModel),
			A2($elm$core$Platform$Cmd$map, $author$project$RouteUrl$UserMsg, command));
	});
var $author$project$RouteUrl$onUrlRequest = F2(
	function (app, req) {
		return $author$project$RouteUrl$UserMsg(
			app.em(req));
	});
var $elm$core$Platform$Sub$map = _Platform_map;
var $author$project$RouteUrl$subscriptions = F2(
	function (app, _v0) {
		var model = _v0.a;
		return A2(
			$elm$core$Platform$Sub$map,
			$author$project$RouteUrl$UserMsg,
			app.eM(model));
	});
var $author$project$RouteUrl$apply = F2(
	function (url, change) {
		switch (change.$) {
			case 0:
				var c = change.b;
				return _Utils_update(
					url,
					{bL: c.bL, c6: c.c6, b_: c.b_});
			case 1:
				var c = change.b;
				return _Utils_update(
					url,
					{
						bL: c.bL,
						b_: $elm$core$Maybe$Just(c.b_)
					});
			default:
				var c = change.b;
				return _Utils_update(
					url,
					{
						bL: $elm$core$Maybe$Just(c)
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
var $author$project$RouteUrl$getMetadata = function (urlChange) {
	switch (urlChange.$) {
		case 0:
			var urlChangeMetadata = urlChange.a;
			return urlChangeMetadata;
		case 1:
			var urlChangeMetadata = urlChange.a;
			return urlChangeMetadata;
		default:
			var urlChangeMetadata = urlChange.a;
			return urlChangeMetadata;
	}
};
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
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
		var _v0 = url.dd;
		if (!_v0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.bL,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.b_,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.c9,
					_Utils_ap(http, url.cD)),
				url.c6)));
};
var $author$project$RouteUrl$urlChange2Cmd = F2(
	function (oldUrl, change) {
		var metadata = $author$project$RouteUrl$getMetadata(change);
		return function () {
			var _v0 = metadata.cv;
			if (!_v0) {
				return $elm$browser$Browser$Navigation$pushUrl(metadata.k);
			} else {
				return $elm$browser$Browser$Navigation$replaceUrl(metadata.k);
			}
		}()(
			$elm$url$Url$toString(
				A2($author$project$RouteUrl$apply, oldUrl, change)));
	});
var $author$project$RouteUrl$update = F3(
	function (app, msg, _v0) {
		var user = _v0.a;
		var router = _v0.b;
		if (!msg.$) {
			var location = msg.a;
			var newRouterModel = {
				R: (router.R > 0) ? (router.R - 1) : 0,
				ah: location
			};
			if (router.R > 0) {
				return _Utils_Tuple2(
					A2($author$project$RouteUrl$WrappedModel, user, newRouterModel),
					$elm$core$Platform$Cmd$none);
			} else {
				var _v2 = A3(
					$ccapndave$elm_update_extra$Update$Extra$sequence,
					app.e_,
					app.eb(location),
					_Utils_Tuple2(user, $elm$core$Platform$Cmd$none));
				var newUserModel = _v2.a;
				var commands = _v2.b;
				return _Utils_Tuple2(
					A2($author$project$RouteUrl$WrappedModel, newUserModel, newRouterModel),
					A2($elm$core$Platform$Cmd$map, $author$project$RouteUrl$UserMsg, commands));
			}
		} else {
			var userMsg = msg.a;
			var _v3 = A2(app.e_, userMsg, user);
			var newUserModel = _v3.a;
			var userCommand = _v3.b;
			var maybeUrlChange = A2(
				$elm$core$Maybe$andThen,
				$author$project$RouteUrl$checkDistinctUrl(router.ah),
				A2(app.dT, user, newUserModel));
			if (!maybeUrlChange.$) {
				var urlChange = maybeUrlChange.a;
				return _Utils_Tuple2(
					A2(
						$author$project$RouteUrl$WrappedModel,
						newUserModel,
						{
							R: router.R + 1,
							ah: A2($author$project$RouteUrl$apply, router.ah, urlChange)
						}),
					A2(
						$elm$core$Platform$Cmd$map,
						$author$project$RouteUrl$UserMsg,
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($author$project$RouteUrl$urlChange2Cmd, router.ah, urlChange),
									userCommand
								]))));
			} else {
				return _Utils_Tuple2(
					A2($author$project$RouteUrl$WrappedModel, newUserModel, router),
					A2($elm$core$Platform$Cmd$map, $author$project$RouteUrl$UserMsg, userCommand));
			}
		}
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$RouteUrl$docMap = F2(
	function (fn, doc) {
		return {
			cj: A2(
				$elm$core$List$map,
				$elm$html$Html$map(fn),
				doc.cj),
			b5: doc.b5
		};
	});
var $author$project$RouteUrl$view = F2(
	function (app, _v0) {
		var model = _v0.a;
		return A2(
			$author$project$RouteUrl$docMap,
			$author$project$RouteUrl$UserMsg,
			app.e1(model));
	});
var $author$project$RouteUrl$navigationAppWithFlags = function (app) {
	var common = $author$project$RouteUrl$appWithFlags2Common(app);
	return {
		d4: A2($author$project$RouteUrl$initWithFlags, app.d4, common),
		bT: $author$project$RouteUrl$RouterMsg,
		em: $author$project$RouteUrl$onUrlRequest(common),
		eM: $author$project$RouteUrl$subscriptions(common),
		e_: $author$project$RouteUrl$update(common),
		e1: $author$project$RouteUrl$view(common)
	};
};
var $elm$browser$Browser$application = _Browser_application;
var $author$project$RouteUrl$runNavigationAppWithFlags = function (app) {
	return $elm$browser$Browser$application(
		{d4: app.d4, el: app.bT, em: app.em, eM: app.eM, e_: app.e_, e1: app.e1});
};
var $author$project$RouteUrl$programWithFlags = A2($elm$core$Basics$composeL, $author$project$RouteUrl$runNavigationAppWithFlags, $author$project$RouteUrl$navigationAppWithFlags);
var $author$project$AlbumListPage$AlbumListPage = $elm$core$Basics$identity;
var $author$project$Main$LoadAlbumProgress = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$PageMsg = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$ViewList = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $author$project$Utils$AlbumUtils$albumJson = 'album.json';
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Utils$ViewportUtils$viewportWithNewSize = F3(
	function (oldViewport, newWidth, newHeight) {
		var ov = oldViewport.bd;
		var newViewport = _Utils_update(
			ov,
			{bM: newHeight, b7: newWidth});
		return _Utils_update(
			oldViewport,
			{bd: newViewport});
	});
var $author$project$Main$newSize = F3(
	function (v, x, y) {
		return $author$project$Main$Resize(
			A3($author$project$Utils$ViewportUtils$viewportWithNewSize, v, x, y));
	});
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$Events$Document = 0;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {c8: pids, dt: subs};
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
		return {cx: event, k: key};
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
			state.c8,
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
		var key = _v0.k;
		var event = _v0.cx;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.dt);
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
		return th.l;
	} else {
		var fi = albumPage.a;
		return fi.l;
	}
};
var $author$project$AlbumPage$BackToThumbs = {$: 7};
var $author$project$AlbumPage$FullMsg = function (a) {
	return {$: 8, a: a};
};
var $author$project$AlbumPage$Next = {$: 6};
var $author$project$AlbumPage$NoUpdate = {$: 11};
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
	return model.by;
};
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {bW: oldTime, di: request, dt: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.di;
		var oldTime = _v0.bW;
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
		var subs = _v0.dt;
		var oldTime = _v0.bW;
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
var $author$project$ProgressiveImage$subscriptions = function (_v0) {
	var data = _v0.a;
	var status = _v0.b;
	var animState = _v0.c;
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_style_animation$Animation$subscription,
				$author$project$ProgressiveImage$AnimatePlaceholder,
				_List_fromArray(
					[animState.s])),
				A2(
				$mdgriffith$elm_style_animation$Animation$subscription,
				$author$project$ProgressiveImage$AnimateMain,
				_List_fromArray(
					[animState.I]))
			]));
};
var $author$project$AlbumPage$subscriptions = F3(
	function (albumPage, wrapper, showParent) {
		if (!albumPage.$) {
			return A2(
				$author$project$Utils$KeyboardUtils$onEscape,
				showParent,
				wrapper($author$project$AlbumPage$NoUpdate));
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
							$author$project$ProgressiveImage$subscriptions(fi.aq)),
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
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {dh: reqs, dt: subs};
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
							var _v4 = req.eW;
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
			A3($elm$http$Http$updateReqs, router, cmds, state.dh));
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
					state.dt)));
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
					cj: r.cj,
					cy: A2(_Http_mapExpect, func, r.cy),
					d$: r.d$,
					ed: r.ed,
					eR: r.eR,
					eW: r.eW,
					b6: r.b6
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
var $author$project$Main$subscriptions = function (model) {
	switch (model.$) {
		case 5:
			var la = model.a;
			var showParent = function () {
				var _v1 = la.bY;
				if (!_v1.b) {
					return $author$project$Main$NoBootstrap;
				} else {
					var _v2 = _v1.a;
					var parent = _v2.a;
					var scroll = _v2.b;
					var grandParents = _v1.b;
					return A2(
						$author$project$Main$ViewList,
						{
							bf: parent,
							dI: $author$project$AlbumPage$pageSize(la.i).dI,
							bY: grandParents
						},
						scroll);
				}
			}();
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A3($author$project$AlbumPage$subscriptions, la.i, $author$project$Main$PageMsg, showParent),
						$elm$browser$Browser$Events$onResize(
						$author$project$Main$newSize(
							$author$project$AlbumPage$pageSize(la.i).dI))
					]));
		case 4:
			var ll = model.a;
			var _v3 = ll.F;
			var alp = _v3;
			var _v4 = alp.bY;
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
					A2(
						$author$project$Main$ViewList,
						_Utils_update(
							alp,
							{bf: parent, bY: grandParents}),
						scroll),
					$author$project$Main$NoBootstrap);
				return $elm$core$Platform$Sub$batch(
					_List_fromArray(
						[
							upParent,
							$elm$browser$Browser$Events$onResize(
							$author$project$Main$newSize(alp.dI))
						]));
			}
		case 1:
			var lh = model.a;
			return $elm$browser$Browser$Events$onResize(
				$author$project$Main$newSize(lh.dI));
		case 2:
			var ld = model.a;
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$elm$browser$Browser$Events$onResize(
						$author$project$Main$newSize(ld.dI)),
						A2($elm$http$Http$track, $author$project$Utils$AlbumUtils$albumJson, $author$project$Main$LoadAlbumProgress)
					]));
		case 3:
			return $elm$core$Platform$Sub$none;
		default:
			return $elm$core$Platform$Sub$none;
	}
};
var $author$project$Main$Failed = function (a) {
	return {$: 3, a: a};
};
var $author$project$AlbumPage$FullImage = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$JustCompleted = {$: 1};
var $author$project$Main$LoadError = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$LoadedAlbum = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$LoadedList = function (a) {
	return {$: 4, a: a};
};
var $author$project$Main$Loading = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$LoadingHomeLink = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$NavInactive = 1;
var $author$project$Main$NoHome = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$ReadyToDisplay = {$: 2};
var $author$project$Main$ScrolledTo = function (a) {
	return {$: 13, a: a};
};
var $author$project$Main$SequenceCmd = F2(
	function (a, b) {
		return {$: 19, a: a, b: b};
	});
var $author$project$AlbumPage$Thumbs = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$UrlRequested = {$: 0};
var $author$project$Main$YesHome = function (a) {
	return {$: 1, a: a};
};
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
var $author$project$Main$DebounceMsg = function (a) {
	return {$: 15, a: a};
};
var $jinjor$elm_debounce$Debounce$Soon = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $jinjor$elm_debounce$Debounce$soon = $jinjor$elm_debounce$Debounce$Soon(0);
var $author$project$Main$debounceConfig = {
	eL: $jinjor$elm_debounce$Debounce$soon(400),
	eY: $author$project$Main$DebounceMsg
};
var $jinjor$elm_debounce$Debounce$Debounce = $elm$core$Basics$identity;
var $jinjor$elm_debounce$Debounce$init = {S: _List_Nil, a2: false};
var $author$project$Main$debounceOf = function (model) {
	switch (model.$) {
		case 4:
			var ll = model.a;
			return ll.Y;
		case 5:
			var la = model.a;
			return la.Y;
		default:
			return $jinjor$elm_debounce$Debounce$init;
	}
};
var $author$project$Utils$DebugSupport$debugString = function (val) {
	return 'Debug.toString not supported in --optimize mode';
};
var $author$project$Utils$ListUtils$dictWithValues = F2(
	function (keys, val) {
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (key) {
					return _Utils_Tuple2(key, val);
				},
				$elm$core$Set$toList(keys)));
	});
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
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
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
					$elm$http$Http$BadStatus(metadata.eI));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $author$project$Main$flagsOf = function (model) {
	switch (model.$) {
		case 0:
			var sz = model.a;
			return sz.j;
		case 1:
			var lh = model.a;
			return lh.j;
		case 2:
			var ld = model.a;
			return ld.j;
		case 3:
			var le = model.a;
			return le.j;
		case 4:
			var ll = model.a;
			return ll.j;
		default:
			var la = model.a;
			return la.j;
	}
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{dD: false, cj: r.cj, cy: r.cy, d$: r.d$, ed: r.ed, eR: r.eR, eW: r.eW, b6: r.b6}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{cj: $elm$http$Http$emptyBody, cy: r.cy, d$: _List_Nil, ed: 'GET', eR: $elm$core$Maybe$Nothing, eW: $elm$core$Maybe$Nothing, b6: r.b6});
};
var $author$project$AlbumPage$GotImgPosition = function (a) {
	return {$: 10, a: a};
};
var $author$project$AlbumPage$ImgPositionFailed = function (a) {
	return {$: 9, a: a};
};
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $author$project$AlbumStyles$theImageId = 'the-image';
var $author$project$AlbumPage$getImgPosition = A2(
	$elm$core$Task$attempt,
	A2($author$project$Utils$ResultUtils$either, $author$project$AlbumPage$ImgPositionFailed, $author$project$AlbumPage$GotImgPosition),
	$elm$browser$Browser$Dom$getElement($author$project$AlbumStyles$theImageId));
var $author$project$Main$ImageFailed = F2(
	function (a, b) {
		return {$: 11, a: a, b: b};
	});
var $author$project$Main$ImageLoaded = function (a) {
	return {$: 9, a: a};
};
var $author$project$Main$decodeUrlResult = F2(
	function (origUrl, result) {
		return A3(
			$author$project$Utils$ResultUtils$either,
			$author$project$Main$ImageFailed(origUrl),
			$elm$core$Basics$always(
				$author$project$Main$ImageLoaded(origUrl)),
			result);
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$diff, dict1, dict2);
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$Utils$ListUtils$encodePath = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$split('/'),
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map($elm$url$Url$percentEncode),
		$elm$core$String$join('/')));
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
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
var $author$project$Utils$HttpUtils$getUrl = F2(
	function (handler, url) {
		return $elm$http$Http$get(
			{
				cy: $elm$http$Http$expectWhatever(handler),
				b6: $author$project$Utils$ListUtils$encodePath(url)
			});
	});
var $author$project$Main$getUrls = F2(
	function (existingUrls, newUrls) {
		return $elm$core$Platform$Cmd$batch(
			A2(
				$elm$core$List$map,
				function (url) {
					return A2(
						$author$project$Utils$HttpUtils$getUrl,
						$author$project$Main$decodeUrlResult(url),
						url);
				},
				$elm$core$Set$toList(
					A2(
						$elm$core$Set$diff,
						newUrls,
						$elm$core$Set$fromList(
							$elm$core$Dict$keys(existingUrls))))));
	});
var $author$project$Main$NoAlbum = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$YesAlbum = function (a) {
	return {$: 4, a: a};
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
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
var $author$project$Album$Leaf = function (a) {
	return {$: 1, a: a};
};
var $author$project$Album$List = function (a) {
	return {$: 0, a: a};
};
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
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
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
						return {b6: purl, b8: px, b9: py};
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
						return {bC: paltText, b0: psrcSetFirst, b1: psrcSetRest};
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
							return {bN: pimageFirst, bO: pimageRest, b4: pthumbnail, b5: ptitle};
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
								return {bE: pchildFirst, bF: pchildRest, bR: plistThumbnail, bS: plistTitle};
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
				{G: lh.G, dI: lh.dI, j: lh.j, A: home, k: lh.k, bv: $elm$core$Maybe$Nothing, O: lh.O}),
			$elm$http$Http$request(
				{
					cj: $elm$http$Http$emptyBody,
					cy: A2(
						$elm$http$Http$expectJson,
						A2($author$project$Utils$ResultUtils$either, $author$project$Main$NoAlbum, $author$project$Main$YesAlbum),
						$author$project$Album$jsonDecAlbumOrList),
					d$: _List_Nil,
					ed: 'GET',
					eR: $elm$core$Maybe$Nothing,
					eW: $elm$core$Maybe$Just($author$project$Utils$AlbumUtils$albumJson),
					b6: $author$project$Utils$AlbumUtils$albumJson
				}));
	});
var $author$project$Main$homeOf = function (model) {
	switch (model.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Nothing;
		case 2:
			var ld = model.a;
			return ld.A;
		case 3:
			return $elm$core$Maybe$Nothing;
		case 4:
			var ll = model.a;
			return ll.A;
		default:
			var la = model.a;
			return la.A;
	}
};
var $author$project$Main$keyOf = function (model) {
	switch (model.$) {
		case 0:
			var sz = model.a;
			return sz.k;
		case 1:
			var lh = model.a;
			return lh.k;
		case 2:
			var ld = model.a;
			return ld.k;
		case 3:
			var le = model.a;
			return le.k;
		case 4:
			var ll = model.a;
			return ll.k;
		default:
			var la = model.a;
			return la.k;
	}
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
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
				return _Utils_eq(albumList.bS, name);
			} else {
				var album = albumOrList.a;
				return _Utils_eq(album.b5, name);
			}
		};
		return $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				f,
				A2($elm$core$List$cons, containingList.bE, containingList.bF)));
	});
var $author$project$AlbumPage$SomeMissing = 0;
var $author$project$Main$ViewAlbum = F2(
	function (a, b) {
		return {$: 8, a: a, b: b};
	});
var $author$project$Utils$AlbumUtils$findImg = F3(
	function (prevs, album, img) {
		findImg:
		while (true) {
			if (_Utils_eq(album.bN.bC, img)) {
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(prevs, album));
			} else {
				var _v0 = album.bO;
				if (!_v0.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var imageNext = _v0.a;
					var imageRest = _v0.b;
					var $temp$prevs = _Utils_ap(
						prevs,
						_List_fromArray(
							[album.bN])),
						$temp$album = _Utils_update(
						album,
						{bN: imageNext, bO: imageRest}),
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
		var imgAspect = is.b8 / is.b9;
		var scale = (_Utils_cmp(winAspect, imgAspect) < 1) ? (winWidth / is.b8) : (winHeight / is.b9);
		return _Utils_Tuple2(
			$elm$core$Basics$round(is.b8 * scale),
			$elm$core$Basics$round(is.b9 * scale));
	});
var $author$project$Utils$TouchUtils$NoState = {$: 0};
var $author$project$Utils$TouchUtils$init = $author$project$Utils$TouchUtils$NoState;
var $author$project$ThumbPage$maxThumbWidth = 300;
var $author$project$ThumbPage$scrollPad = 20;
var $author$project$ThumbPage$colsWidth = function (viewport) {
	var maxCols = A2(
		$elm$core$Basics$max,
		($elm$core$Basics$floor(viewport.bd.b7) / $author$project$ThumbPage$maxThumbWidth) | 0,
		2);
	var thumbWidth = (($elm$core$Basics$floor(viewport.bd.b7) - $author$project$ThumbPage$scrollPad) / maxCols) | 0;
	return _Utils_Tuple2(maxCols, thumbWidth);
};
var $author$project$ProgressiveImage$LoadingFallback = {$: 1};
var $author$project$ProgressiveImage$ProgImgModel = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
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
			aF: $mdgriffith$elm_style_animation$Animation$Model$Spring(
				{cs: 26, dr: 170}),
			d5: $elm$core$Maybe$Nothing,
			et: position,
			eN: position,
			eZ: unit,
			e0: 0
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
		bP: _List_Nil,
		by: false,
		b2: _List_Nil,
		ds: current,
		dx: {
			E: $elm$time$Time$millisToPosix(0),
			dW: $elm$time$Time$millisToPosix(0)
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
			{bG: duration, bH: $elm$core$Basics$identity, bv: 1, eH: 0});
	};
	var defaultSpring = $mdgriffith$elm_style_animation$Animation$Model$Spring(
		{cs: 26, dr: 170});
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
				{c7: $elm$core$Basics$pi}) : defaultSpring;
		case 6:
			return defaultSpring;
		case 7:
			return $mdgriffith$elm_style_animation$Animation$speed(
				{c7: $elm$core$Basics$pi});
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
				var control1 = cmd.a.aX;
				var control2 = cmd.a.aY;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$Curve(
					{
						aX: _Utils_Tuple2(
							fn(control1.a),
							fn(control1.b)),
						aY: _Utils_Tuple2(
							fn(control2.a),
							fn(control2.b)),
						M: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 9:
				var control1 = cmd.a.aX;
				var control2 = cmd.a.aY;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
					{
						aX: _Utils_Tuple2(
							fn(control1.a),
							fn(control1.b)),
						aY: _Utils_Tuple2(
							fn(control2.a),
							fn(control2.b)),
						M: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 10:
				var control = cmd.a.aW;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
					{
						aW: _Utils_Tuple2(
							fn(control.a),
							fn(control.b)),
						M: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 11:
				var control = cmd.a.aW;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
					{
						aW: _Utils_Tuple2(
							fn(control.a),
							fn(control.b)),
						M: _Utils_Tuple2(
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
						var y = arc.b9;
						var x = arc.b8;
						var startAngle = arc.a7;
						var radius = arc.a4;
						var endAngle = arc.aZ;
						return _Utils_update(
							arc,
							{
								aZ: fn(endAngle),
								a4: fn(radius),
								a7: fn(startAngle),
								b8: fn(x),
								b9: fn(y)
							});
					}());
			case 17:
				var arc = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
					function () {
						var y = arc.b9;
						var x = arc.b8;
						var startAngle = arc.a7;
						var radius = arc.a4;
						var endAngle = arc.aZ;
						return _Utils_update(
							arc,
							{
								aZ: fn(endAngle),
								a4: fn(radius),
								a7: fn(startAngle),
								b8: fn(x),
								b9: fn(y)
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
				var size = shadow.$7;
				var red = shadow.C;
				var offsetY = shadow.K;
				var offsetX = shadow.J;
				var green = shadow.z;
				var blur = shadow.H;
				var blue = shadow.w;
				var alpha = shadow.v;
				return A3(
					$mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
					name,
					inset,
					{
						v: fn(alpha),
						w: fn(blue),
						H: fn(blur),
						z: fn(green),
						J: fn(offsetX),
						K: fn(offsetY),
						C: fn(red),
						$7: fn(size)
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
				{aF: interp});
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
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
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
var $elm$core$List$sortBy = _List_sortBy;
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
	var data = _v0.a;
	var status = _v0.b;
	var animState = _v0.c;
	switch (status.$) {
		case 0:
			var trying = status.b;
			return $elm$core$Maybe$Just(
				A3($author$project$ProgressiveImage$ScheduleTimeout, 200, 0, trying));
		case 1:
			return $elm$core$Maybe$Nothing;
		case 2:
			return $elm$core$Maybe$Nothing;
		case 3:
			var oldPlaceholder = status.a;
			return $elm$core$Maybe$Nothing;
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$ProgressiveImage$init = function (data) {
	var animState = {
		I: $mdgriffith$elm_style_animation$Animation$style($author$project$ProgressiveImage$hidden),
		s: $mdgriffith$elm_style_animation$Animation$style($author$project$ProgressiveImage$hidden)
	};
	var model = function () {
		var _v0 = data.eu;
		if (!_v0.b) {
			return A3($author$project$ProgressiveImage$ProgImgModel, data, $author$project$ProgressiveImage$LoadingFallback, animState);
		} else {
			var c1 = _v0.a;
			var cOthers = _v0.b;
			return A3(
				$author$project$ProgressiveImage$ProgImgModel,
				data,
				A3($author$project$ProgressiveImage$TryingCached, _List_Nil, c1, cOthers),
				animState);
		}
	}();
	return _Utils_Tuple2(
		model,
		$author$project$ProgressiveImage$updateCmd(model));
};
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$ImageViews$smallestImageBiggerThan = F4(
	function (w, h, i, iRest) {
		var _v0 = $elm$core$List$head(
			A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.b8;
				},
				A2(
					$elm$core$List$filter,
					function (is) {
						return (_Utils_cmp(is.b8, w) > -1) && (_Utils_cmp(is.b9, h) > -1);
					},
					A2($elm$core$List$cons, i, iRest))));
		if (_v0.$ === 1) {
			return i;
		} else {
			var sizedIs = _v0.a;
			return sizedIs;
		}
	});
var $author$project$AlbumPage$progInit = F4(
	function (viewport, i, w, h) {
		var smBiggerThan = F2(
			function (wMax, hMax) {
				return A4($author$project$ImageViews$smallestImageBiggerThan, wMax, hMax, i.b0, i.b1);
			});
		var _v0 = $author$project$ThumbPage$colsWidth(viewport);
		var thumbWidth = _v0.b;
		return $author$project$ProgressiveImage$init(
			{
				dZ: A2(smBiggerThan, 1, 1),
				bM: h,
				ec: A2(smBiggerThan, w, h),
				eu: _List_fromArray(
					[
						A2(smBiggerThan, thumbWidth, 1)
					]),
				b7: w
			});
	});
var $author$project$Main$navForAlbum = F4(
	function (vpInfo, album, ps, newParents) {
		var parentsNoScroll = A2(
			$elm$core$List$map,
			function (p) {
				return _Utils_Tuple2(p, $elm$core$Maybe$Nothing);
			},
			newParents);
		if (!ps.b) {
			return $elm$core$Maybe$Just(
				A2(
					$author$project$Main$ViewAlbum,
					$author$project$AlbumPage$Thumbs(
						{g: album, a$: $elm$core$Set$empty, ar: $elm$core$Set$empty, l: vpInfo}),
					parentsNoScroll));
		} else {
			var i = ps.a;
			var _v1 = A3($author$project$Utils$AlbumUtils$findImg, _List_Nil, album, i);
			if (_v1.$ === 1) {
				return A2($author$project$Utils$DebugSupport$log, 'navForAlbum can\'t find image ' + i, $elm$core$Maybe$Nothing);
			} else {
				var _v2 = _v1.a;
				var prevs = _v2.a;
				var nAlbum = _v2.b;
				var _v3 = A3(
					$author$project$FullImagePage$fitImage,
					nAlbum.bN.b0,
					$elm$core$Basics$floor(vpInfo.dI.bd.b7),
					$elm$core$Basics$floor(vpInfo.dI.bd.bM));
				var w = _v3.a;
				var h = _v3.b;
				var _v4 = A4($author$project$AlbumPage$progInit, vpInfo.dI, nAlbum.bN, w, h);
				var progModel = _v4.a;
				var progCmd = _v4.b;
				return $elm$core$Maybe$Just(
					A2(
						$author$project$Main$Sequence,
						A2(
							$author$project$Main$ViewAlbum,
							$author$project$AlbumPage$FullImage(
								{g: nAlbum, bl: $elm$core$Maybe$Nothing, aL: prevs, aq: progModel, dm: $elm$core$Maybe$Nothing, dw: 0, P: $author$project$Utils$TouchUtils$init, l: vpInfo}),
							parentsNoScroll),
						$author$project$Utils$ListUtils$fromMaybe(
							A2(
								$elm$core$Maybe$map,
								A2($elm$core$Basics$composeL, $author$project$Main$PageMsg, $author$project$AlbumPage$FullMsg),
								progCmd))));
			}
		}
	});
var $author$project$Main$navFrom = F5(
	function (viewport, root, parents, paths, defcmd) {
		if (!paths.b) {
			return A2($author$project$Utils$DebugSupport$log, 'navFrom has no paths', defcmd);
		} else {
			if ((paths.a === '#') && (!paths.b.b)) {
				return A2($author$project$Utils$DebugSupport$log, 'navFrom has only # path', defcmd);
			} else {
				var p1 = paths.a;
				var ps = paths.b;
				var newParents = A2($elm$core$List$cons, root, parents);
				var mChild = A2($author$project$Utils$AlbumUtils$findChild, root, p1);
				if (mChild.$ === 1) {
					return A2($author$project$Utils$DebugSupport$log, 'navFrom can\'t find child ' + p1, defcmd);
				} else {
					var pChild = mChild.a;
					if (!pChild.$) {
						var albumList = pChild.a;
						return A5(
							$author$project$Main$navFrom,
							viewport,
							albumList,
							newParents,
							ps,
							$elm$core$Maybe$Just(
								A2(
									$author$project$Main$ViewList,
									{
										bf: albumList,
										dI: viewport.dI,
										bY: A2(
											$elm$core$List$map,
											function (p) {
												return _Utils_Tuple2(p, $elm$core$Maybe$Nothing);
											},
											newParents)
									},
									$elm$core$Maybe$Nothing)));
					} else {
						var album = pChild.a;
						return A4($author$project$Main$navForAlbum, viewport, album, ps, newParents);
					}
				}
			}
		}
	});
var $author$project$Main$pathsToCmdImpl = F3(
	function (viewport, parents, paths) {
		var mRoot = $elm$core$List$head(
			$elm$core$List$reverse(parents));
		if (mRoot.$ === 1) {
			return A2($author$project$Utils$DebugSupport$log, 'pathsToCmdImpl has no root', $elm$core$Maybe$Nothing);
		} else {
			var root = mRoot.a;
			return A5(
				$author$project$Main$navFrom,
				viewport,
				root,
				_List_Nil,
				paths,
				$elm$core$Maybe$Just(
					A2(
						$author$project$Main$ViewList,
						{bf: root, dI: viewport.dI, bY: _List_Nil},
						$elm$core$Maybe$Nothing)));
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
					return A2($author$project$Utils$DebugSupport$log, 'pathsToCmd LoadError, ignore', $elm$core$Maybe$Nothing);
				case 4:
					var ll = model.a;
					var _v2 = ll.F;
					var alp = _v2;
					return A3(
						$author$project$Main$pathsToCmdImpl,
						{dI: alp.dI, a5: ll.a5},
						A2(
							$elm$core$List$cons,
							alp.bf,
							A2($elm$core$List$map, $elm$core$Tuple$first, alp.bY)),
						paths);
				default:
					var la = model.a;
					return A3(
						$author$project$Main$pathsToCmdImpl,
						$author$project$AlbumPage$pageSize(la.i),
						A2($elm$core$List$map, $elm$core$Tuple$first, la.bY),
						paths);
			}
		}
	});
var $jinjor$elm_debounce$Debounce$Flush = function (a) {
	return {$: 1, a: a};
};
var $jinjor$elm_debounce$Debounce$SendIfLengthNotChangedFrom = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Process$sleep = _Process_sleep;
var $jinjor$elm_debounce$Debounce$delayCmd = F2(
	function (delay, msg) {
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return msg;
			},
			$elm$core$Process$sleep(delay));
	});
var $jinjor$elm_debounce$Debounce$length = function (_v0) {
	var input = _v0.S;
	return $elm$core$List$length(input);
};
var $jinjor$elm_debounce$Debounce$push = F3(
	function (config, a, _v0) {
		var d = _v0;
		var newDebounce = _Utils_update(
			d,
			{
				S: A2($elm$core$List$cons, a, d.S)
			});
		var selfCmd = function () {
			var _v1 = config.eL;
			switch (_v1.$) {
				case 0:
					var offset = _v1.a;
					return d.a2 ? $elm$core$Platform$Cmd$none : A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						offset,
						$jinjor$elm_debounce$Debounce$Flush($elm$core$Maybe$Nothing));
				case 1:
					var offset = _v1.a;
					var delay = _v1.b;
					return d.a2 ? $elm$core$Platform$Cmd$none : A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						offset,
						$jinjor$elm_debounce$Debounce$Flush(
							$elm$core$Maybe$Just(delay)));
				default:
					var delay = _v1.a;
					return A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						delay,
						$jinjor$elm_debounce$Debounce$SendIfLengthNotChangedFrom(
							$jinjor$elm_debounce$Debounce$length(newDebounce)));
			}
		}();
		return _Utils_Tuple2(
			newDebounce,
			A2($elm$core$Platform$Cmd$map, config.eY, selfCmd));
	});
var $author$project$AlbumPage$resetUrls = function (msg) {
	switch (msg.$) {
		case 7:
			return true;
		case 0:
			return true;
		default:
			return false;
	}
};
var $author$project$AlbumStyles$rootDivId = 'rootDiv';
var $author$project$Main$EnactScrollFromUrl = function (a) {
	return {$: 12, a: a};
};
var $author$project$Main$scrollToCmd = F2(
	function (model, scrollToAfterLoad) {
		var scrollCmd = $elm$core$Maybe$Just(
			$author$project$Main$EnactScrollFromUrl(scrollToAfterLoad));
		switch (model.$) {
			case 0:
				return $elm$core$Maybe$Nothing;
			case 1:
				return $elm$core$Maybe$Nothing;
			case 2:
				return $elm$core$Maybe$Nothing;
			case 3:
				return A2($author$project$Utils$DebugSupport$log, 'scrollToCmd LoadError, ignore', $elm$core$Maybe$Nothing);
			case 4:
				return scrollCmd;
			default:
				return scrollCmd;
		}
	});
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
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Main$sequence = F2(
	function (mm1, ms) {
		sequence:
		while (true) {
			if (mm1.$ === 1) {
				var _v1 = $elm$core$List$tail(ms);
				if (_v1.$ === 1) {
					var _v2 = $elm$core$List$head(ms);
					if (_v2.$ === 1) {
						return $author$project$Main$NoBootstrap;
					} else {
						var ms1 = _v2.a;
						return ms1;
					}
				} else {
					var mst = _v1.a;
					var $temp$mm1 = $elm$core$List$head(ms),
						$temp$ms = mst;
					mm1 = $temp$mm1;
					ms = $temp$ms;
					continue sequence;
				}
			} else {
				var m1 = mm1.a;
				return A2($author$project$Main$Sequence, m1, ms);
			}
		}
	});
var $jinjor$elm_debounce$Debounce$takeLast = F3(
	function (send, head, tail) {
		return _Utils_Tuple2(
			_List_Nil,
			send(head));
	});
var $author$project$Utils$ResultUtils$toCmd = function (m) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(m));
};
var $elm$core$String$trim = _String_trim;
var $author$project$AlbumPage$AllLoaded = 1;
var $author$project$ThumbPage$sizeForScaler = F2(
	function (scaler, img) {
		var is1 = img.b0;
		var scale = scaler(is1);
		var xScaled = $elm$core$Basics$round(scale * is1.b8);
		var yScaled = $elm$core$Basics$round(scale * is1.b9);
		return _Utils_Tuple2(xScaled, yScaled);
	});
var $author$project$ThumbPage$sizeForWidth = function (width) {
	return $author$project$ThumbPage$sizeForScaler(
		function (is1) {
			return width / is1.b8;
		});
};
var $author$project$ThumbPage$srcForWidth = F2(
	function (width, img) {
		var _v0 = A2($author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _v0.a;
		var yScaled = _v0.b;
		return A4($author$project$ImageViews$smallestImageBiggerThan, xScaled, yScaled, img.b0, img.b1);
	});
var $author$project$ThumbPage$allImgSrcs = function (thumbPageModel) {
	var _v0 = $author$project$ThumbPage$colsWidth(thumbPageModel.dI);
	var thumbWidth = _v0.b;
	return A2(
		$elm$core$List$map,
		$author$project$ThumbPage$srcForWidth(thumbWidth),
		A2($elm$core$List$cons, thumbPageModel.g.bN, thumbPageModel.g.bO));
};
var $author$project$ThumbPage$allUrls = A2(
	$elm$core$Basics$composeR,
	$author$project$ThumbPage$allImgSrcs,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map(
			function ($) {
				return $.b6;
			}),
		$elm$core$Set$fromList));
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
	var _v0 = z.ag;
	if (_v0.$ === 1) {
		return z.a6;
	} else {
		var pz = _v0.a;
		return z.a6 * $author$project$Utils$TouchUtils$cumScale(pz);
	}
};
var $author$project$Utils$TouchUtils$ZoomOffset = $elm$core$Basics$identity;
var $author$project$Utils$TouchUtils$coords = function (t) {
	var y = t.co.b;
	var x = t.co.a;
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
	var startSize = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$dist, zoomData.eH);
	var prevOffset = A2(
		$elm$core$Maybe$map,
		$author$project$Utils$TouchUtils$getZoomOffset,
		A2($elm$core$Maybe$map, $author$project$Utils$TouchUtils$getCurrentData, zoomData.ag));
	var endSize = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$dist, zoomData.E);
	var scale = endSize / startSize;
	var _v0 = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$center, zoomData.eH);
	var startX = _v0.a;
	var startY = _v0.b;
	var _v1 = A2($elm_community$basics_extra$Basics$Extra$uncurry, $author$project$Utils$TouchUtils$center, zoomData.E);
	var endX = _v1.a;
	var endY = _v1.b;
	return {
		ej: _Utils_Tuple2(endX - startX, endY - startY),
		ag: prevOffset,
		a6: scale,
		dq: _Utils_Tuple2(startX, startY)
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
var $elm$core$Set$size = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$size(dict);
};
var $author$project$AlbumPage$thumbModel = function (th) {
	return {g: th.g, dI: th.l.dI, a$: th.a$, bY: _List_Nil, ar: th.ar, a5: th.l.a5};
};
var $author$project$ProgressiveImage$Timeout = function (a) {
	return {$: 2, a: a};
};
var $andrewMacmurray$elm_delay$Delay$Duration = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
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
		var dt = $elm$time$Time$posixToMillis(now) - $elm$time$Time$posixToMillis(timing.E);
		return {
			E: now,
			dW: ((dt > 34) || (!$elm$time$Time$posixToMillis(timing.E))) ? $elm$time$Time$millisToPosix(
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
		return (!motion.e0) && _Utils_eq(motion.et, motion.eN);
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
			var control1 = cmd.a.aX;
			var control2 = cmd.a.aY;
			var point = cmd.a.M;
			return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
		case 9:
			var control1 = cmd.a.aX;
			var control2 = cmd.a.aY;
			var point = cmd.a.M;
			return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
		case 10:
			var control = cmd.a.aW;
			var point = cmd.a.M;
			return motionDone(control.a) && (motionDone(control.b) && (motionDone(point.a) && motionDone(point.b)));
		case 11:
			var control = cmd.a.aW;
			var point = cmd.a.M;
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
			return motionDone(arc.b8) && (motionDone(arc.b9) && (motionDone(arc.a4) && (motionDone(arc.a7) && motionDone(arc.aZ))));
		case 17:
			var arc = cmd.a;
			return motionDone(arc.b8) && (motionDone(arc.b9) && (motionDone(arc.a4) && (motionDone(arc.a7) && motionDone(arc.aZ))));
		default:
			return true;
	}
};
var $mdgriffith$elm_style_animation$Animation$Model$isDone = function (property) {
	var motionDone = function (motion) {
		var runningInterpolation = A2($elm$core$Maybe$withDefault, motion.aF, motion.d5);
		switch (runningInterpolation.$) {
			case 0:
				return (!motion.e0) && _Utils_eq(motion.et, motion.eN);
			case 1:
				var eased = runningInterpolation.a;
				return (eased.bv === 1) || ((!eased.bv) && _Utils_eq(motion.et, motion.eN));
			default:
				var speed = runningInterpolation.a;
				return _Utils_eq(motion.et, motion.eN);
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
					[shadow.J, shadow.K, shadow.$7, shadow.H, shadow.C, shadow.z, shadow.w, shadow.v]));
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
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
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
				var _v27 = motion.aF;
				if (_v27.$ === 1) {
					var ease = _v27.a;
					return _Utils_update(
						motion,
						{
							aF: $mdgriffith$elm_style_animation$Animation$Model$Easing(
								_Utils_update(
									ease,
									{eH: motion.et})),
							eN: targetMotion.et
						});
				} else {
					return _Utils_update(
						motion,
						{eN: targetMotion.et});
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
							aX: _Utils_Tuple2(
								A2(setMotionTarget, points.aX.a, targets.aX.a),
								A2(setMotionTarget, points.aX.b, targets.aX.b)),
							aY: _Utils_Tuple2(
								A2(setMotionTarget, points.aY.a, targets.aY.a),
								A2(setMotionTarget, points.aY.b, targets.aY.b)),
							M: _Utils_Tuple2(
								A2(setMotionTarget, points.M.a, targets.M.a),
								A2(setMotionTarget, points.M.b, targets.M.b))
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
							aX: _Utils_Tuple2(
								A2(setMotionTarget, points.aX.a, targets.aX.a),
								A2(setMotionTarget, points.aX.b, targets.aX.b)),
							aY: _Utils_Tuple2(
								A2(setMotionTarget, points.aY.a, targets.aY.a),
								A2(setMotionTarget, points.aY.b, targets.aY.b)),
							M: _Utils_Tuple2(
								A2(setMotionTarget, points.M.a, targets.M.a),
								A2(setMotionTarget, points.M.b, targets.M.b))
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
							aW: _Utils_Tuple2(
								A2(setMotionTarget, points.aW.a, targets.aW.a),
								A2(setMotionTarget, points.aW.b, targets.aW.b)),
							M: _Utils_Tuple2(
								A2(setMotionTarget, points.M.a, targets.M.a),
								A2(setMotionTarget, points.M.b, targets.M.b))
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
							aW: _Utils_Tuple2(
								A2(setMotionTarget, points.aW.a, targets.aW.a),
								A2(setMotionTarget, points.aW.b, targets.aW.b)),
							M: _Utils_Tuple2(
								A2(setMotionTarget, points.M.a, targets.M.a),
								A2(setMotionTarget, points.M.b, targets.M.b))
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
							var y = arc.b9;
							var x = arc.b8;
							var startAngle = arc.a7;
							var radius = arc.a4;
							var endAngle = arc.aZ;
							return _Utils_update(
								arc,
								{
									aZ: A2(setMotionTarget, endAngle, target.aZ),
									a4: A2(setMotionTarget, radius, target.a4),
									a7: A2(setMotionTarget, startAngle, target.a7),
									b8: A2(setMotionTarget, x, target.b8),
									b9: A2(setMotionTarget, y, target.b9)
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
							var y = arc.b9;
							var x = arc.b8;
							var startAngle = arc.a7;
							var radius = arc.a4;
							var endAngle = arc.aZ;
							return _Utils_update(
								arc,
								{
									aZ: A2(setMotionTarget, endAngle, target.aZ),
									a4: A2(setMotionTarget, radius, target.a4),
									a7: A2(setMotionTarget, startAngle, target.a7),
									b8: A2(setMotionTarget, x, target.b8),
									b9: A2(setMotionTarget, y, target.b9)
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
						d5: $elm$core$Maybe$Just(targetMotion.aF)
					}) : motion;
				var _v13 = newMotion.d5;
				if (_v13.$ === 1) {
					var _v14 = newMotion.aF;
					if (_v14.$ === 1) {
						var ease = _v14.a;
						return _Utils_update(
							newMotion,
							{
								aF: $mdgriffith$elm_style_animation$Animation$Model$Easing(
									_Utils_update(
										ease,
										{bv: 0, eH: motion.et})),
								eN: targetMotion.et
							});
					} else {
						return _Utils_update(
							newMotion,
							{eN: targetMotion.et});
					}
				} else {
					var override = _v13.a;
					if (override.$ === 1) {
						var ease = override.a;
						return _Utils_update(
							newMotion,
							{
								d5: $elm$core$Maybe$Just(
									$mdgriffith$elm_style_animation$Animation$Model$Easing(
										_Utils_update(
											ease,
											{bv: 0, eH: motion.et}))),
								eN: targetMotion.et
							});
					} else {
						return _Utils_update(
							newMotion,
							{eN: targetMotion.et});
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
							v: A2(setMotionTarget, shadow.v, targetShadow.v),
							w: A2(setMotionTarget, shadow.w, targetShadow.w),
							H: A2(setMotionTarget, shadow.H, targetShadow.H),
							z: A2(setMotionTarget, shadow.z, targetShadow.z),
							J: A2(setMotionTarget, shadow.J, targetShadow.J),
							K: A2(setMotionTarget, shadow.K, targetShadow.K),
							C: A2(setMotionTarget, shadow.C, targetShadow.C),
							$7: A2(setMotionTarget, shadow.$7, targetShadow.$7)
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
		var interpolationToUse = A2($elm$core$Maybe$withDefault, motion.aF, motion.d5);
		var dtms = $elm$time$Time$posixToMillis(posix);
		switch (interpolationToUse.$) {
			case 2:
				var perSecond = interpolationToUse.a.c7;
				var _v1 = function () {
					if (_Utils_cmp(motion.et, motion.eN) < 0) {
						var _new = motion.et + (perSecond * (dtms / 1000));
						return _Utils_Tuple2(
							_new,
							_Utils_cmp(_new, motion.eN) > -1);
					} else {
						var _new = motion.et - (perSecond * (dtms / 1000));
						return _Utils_Tuple2(
							_new,
							_Utils_cmp(_new, motion.eN) < 1);
					}
				}();
				var newPos = _v1.a;
				var finished = _v1.b;
				return finished ? _Utils_update(
					motion,
					{et: motion.eN, e0: 0.0}) : _Utils_update(
					motion,
					{et: newPos, e0: perSecond * 1000});
			case 0:
				var stiffness = interpolationToUse.a.dr;
				var damping = interpolationToUse.a.cs;
				var fspring = stiffness * (motion.eN - motion.et);
				var fdamper = ((-1) * damping) * motion.e0;
				var dt = dtms / 1000;
				var a = fspring + fdamper;
				var newVelocity = motion.e0 + (a * dt);
				var newPos = motion.et + (newVelocity * dt);
				var dx = $elm$core$Basics$abs(motion.eN - newPos);
				return ((_Utils_cmp(dx, $mdgriffith$elm_style_animation$Animation$Model$tolerance) < 0) && (_Utils_cmp(
					$elm$core$Basics$abs(newVelocity),
					$mdgriffith$elm_style_animation$Animation$Model$vTolerance) < 0)) ? _Utils_update(
					motion,
					{et: motion.eN, e0: 0.0}) : _Utils_update(
					motion,
					{et: newPos, e0: newVelocity});
			default:
				var progress = interpolationToUse.a.bv;
				var duration = interpolationToUse.a.bG;
				var ease = interpolationToUse.a.bH;
				var start = interpolationToUse.a.eH;
				var durationMs = $elm$time$Time$posixToMillis(duration);
				var newProgress = (((dtms / durationMs) + progress) < 1) ? ((dtms / durationMs) + progress) : 1;
				var eased = ease(newProgress);
				var distance = motion.eN - start;
				var newPos = ((((eased * distance) + start) * 10000) | 0) / 10000;
				var newVelocity = (newProgress === 1) ? 0 : ((newPos - motion.et) / dtms);
				var _v2 = motion.d5;
				if (_v2.$ === 1) {
					return _Utils_update(
						motion,
						{
							aF: $mdgriffith$elm_style_animation$Animation$Model$Easing(
								{bG: duration, bH: ease, bv: newProgress, eH: start}),
							et: newPos,
							e0: newVelocity
						});
				} else {
					var override = _v2.a;
					return _Utils_update(
						motion,
						{
							d5: $elm$core$Maybe$Just(
								$mdgriffith$elm_style_animation$Animation$Model$Easing(
									{bG: duration, bH: ease, bv: newProgress, eH: start})),
							et: newPos,
							e0: newVelocity
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
				var control1 = cmd.a.aX;
				var control2 = cmd.a.aY;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$Curve(
					{
						aX: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)),
						aY: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)),
						M: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 9:
				var control1 = cmd.a.aX;
				var control2 = cmd.a.aY;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
					{
						aX: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)),
						aY: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)),
						M: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 10:
				var control = cmd.a.aW;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
					{
						aW: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)),
						M: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 11:
				var control = cmd.a.aW;
				var point = cmd.a.M;
				return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
					{
						aW: _Utils_Tuple2(
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
							A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)),
						M: _Utils_Tuple2(
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
							aZ: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aZ),
							a4: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.a4),
							a7: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.a7),
							b8: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.b8),
							b9: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.b9)
						}));
			case 17:
				var arc = cmd.a;
				return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
					_Utils_update(
						arc,
						{
							aZ: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aZ),
							a4: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.a4),
							a7: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.a7),
							b8: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.b8),
							b9: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.b9)
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
							v: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.v),
							w: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.w),
							H: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.H),
							z: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.z),
							J: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.J),
							K: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.K),
							C: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.C),
							$7: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.$7)
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
											{d5: $elm$core$Maybe$Nothing});
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
							$elm$time$Time$posixToMillis(wait) - $elm$time$Time$posixToMillis(timing.dW)),
						mySteps);
				},
				model.bP));
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
									{d5: $elm$core$Maybe$Nothing});
							}),
						model.ds));
			} else {
				return _Utils_Tuple2(model.b2, model.ds);
			}
		}();
		var steps = _v5.a;
		var style = _v5.b;
		var _v8 = A3($mdgriffith$elm_style_animation$Animation$Model$resolveSteps, style, steps, timing.dW);
		var revisedStyle = _v8.a;
		var sentMessages = _v8.b;
		var revisedSteps = _v8.c;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					bP: queuedInterruptions,
					by: (!(!$elm$core$List$length(revisedSteps))) || (!(!$elm$core$List$length(queuedInterruptions))),
					b2: revisedSteps,
					ds: revisedStyle,
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
var $author$project$ProgressiveImage$LoadingMain = function (a) {
	return {$: 2, a: a};
};
var $author$project$ProgressiveImage$MainLoaded = function (a) {
	return {$: 3, a: a};
};
var $author$project$ProgressiveImage$MainOnly = {$: 4};
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
				bP: A2(
					$elm$core$List$cons,
					$mdgriffith$elm_style_animation$Animation$extractInitialWait(steps),
					model.bP),
				by: true
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
var $author$project$ProgressiveImage$shown = _List_fromArray(
	[
		$mdgriffith$elm_style_animation$Animation$opacity(1)
	]);
var $author$project$ProgressiveImage$show = $mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			$mdgriffith$elm_style_animation$Animation$to($author$project$ProgressiveImage$shown)
		]));
var $author$project$ProgressiveImage$MainFadeinComplete = {$: 3};
var $mdgriffith$elm_style_animation$Animation$Model$Send = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_style_animation$Animation$Messenger$send = function (msg) {
	return $mdgriffith$elm_style_animation$Animation$Model$Send(msg);
};
var $author$project$ProgressiveImage$showMsg = $mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			$mdgriffith$elm_style_animation$Animation$to($author$project$ProgressiveImage$shown),
			$mdgriffith$elm_style_animation$Animation$Messenger$send($author$project$ProgressiveImage$MainFadeinComplete)
		]));
var $mdgriffith$elm_style_animation$Animation$update = F2(
	function (tick, animation) {
		return A2($mdgriffith$elm_style_animation$Animation$Model$updateAnimation, tick, animation).a;
	});
var $author$project$ProgressiveImage$updateModel = F2(
	function (msg, model) {
		var data = model.a;
		var status = model.b;
		var animState = model.c;
		switch (msg.$) {
			case 0:
				var imgSrc = msg.a;
				switch (status.$) {
					case 0:
						var tried = status.a;
						var trying = status.b;
						var upnext = status.c;
						return _Utils_eq(imgSrc, trying) ? A3(
							$author$project$ProgressiveImage$ProgImgModel,
							data,
							$author$project$ProgressiveImage$LoadingMain(trying),
							_Utils_update(
								animState,
								{
									s: $author$project$ProgressiveImage$show(animState.s)
								})) : model;
					case 1:
						return _Utils_eq(imgSrc, data.dZ) ? A3(
							$author$project$ProgressiveImage$ProgImgModel,
							data,
							$author$project$ProgressiveImage$LoadingMain(data.dZ),
							_Utils_update(
								animState,
								{
									s: $author$project$ProgressiveImage$show(animState.s)
								})) : model;
					case 2:
						var placeholder = status.a;
						return _Utils_eq(imgSrc, data.ec) ? A3(
							$author$project$ProgressiveImage$ProgImgModel,
							data,
							$author$project$ProgressiveImage$MainLoaded(placeholder),
							_Utils_update(
								animState,
								{
									I: $author$project$ProgressiveImage$showMsg(animState.I)
								})) : model;
					case 3:
						return model;
					default:
						return model;
				}
			case 2:
				var imgSrc = msg.a;
				switch (status.$) {
					case 0:
						var tried = status.a;
						var trying = status.b;
						var upnext = status.c;
						if (!upnext.b) {
							return A3($author$project$ProgressiveImage$ProgImgModel, data, $author$project$ProgressiveImage$LoadingFallback, animState);
						} else {
							var next = upnext.a;
							var later = upnext.b;
							return A3(
								$author$project$ProgressiveImage$ProgImgModel,
								data,
								A3(
									$author$project$ProgressiveImage$TryingCached,
									_Utils_ap(
										tried,
										_List_fromArray(
											[trying])),
									next,
									later),
								animState);
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
				switch (status.$) {
					case 3:
						return A3(
							$author$project$ProgressiveImage$ProgImgModel,
							data,
							$author$project$ProgressiveImage$MainOnly,
							_Utils_update(
								animState,
								{
									s: $author$project$ProgressiveImage$hide(animState.s)
								}));
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
				var animMsg = msg.a;
				return model;
			default:
				var animMsg = msg.a;
				return A3(
					$author$project$ProgressiveImage$ProgImgModel,
					data,
					status,
					_Utils_update(
						animState,
						{
							s: A2($mdgriffith$elm_style_animation$Animation$update, animMsg, animState.s)
						}));
		}
	});
var $author$project$ProgressiveImage$update = F2(
	function (msg, oldModel) {
		var data = oldModel.a;
		var status = oldModel.b;
		var animState = oldModel.c;
		switch (msg.$) {
			case 5:
				var animMsg = msg.a;
				var _v1 = A2($mdgriffith$elm_style_animation$Animation$Messenger$update, animMsg, animState.I);
				var newMainState = _v1.a;
				var animCmd = _v1.b;
				return _Utils_Tuple2(
					A3(
						$author$project$ProgressiveImage$ProgImgModel,
						data,
						status,
						_Utils_update(
							animState,
							{I: newMainState})),
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
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Platform$Cmd$none,
						A2(
							$elm$core$Maybe$map,
							$author$project$Utils$ResultUtils$toCmd,
							$author$project$ProgressiveImage$updateCmd(newModel))));
		}
	});
var $author$project$Utils$TouchUtils$SwipeState = function (a) {
	return {$: 1, a: a};
};
var $author$project$Utils$TouchUtils$update = F2(
	function (oldState, touchEvent) {
		update:
		while (true) {
			var _v0 = touchEvent.eV;
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
										{E: t}));
							case 2:
								var zData = oldState.a;
								return $author$project$Utils$TouchUtils$SwipeState(
									{
										E: t,
										bZ: $elm$core$Maybe$Just(zData),
										eH: t
									});
							default:
								return $author$project$Utils$TouchUtils$SwipeState(
									{E: t, bZ: $elm$core$Maybe$Nothing, eH: t});
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
													E: _Utils_Tuple2(t1, t2),
													ag: $elm$core$Maybe$Just(prevData),
													eH: _Utils_Tuple2(t1, t2)
												}));
									} else {
										var zData = zoomData.a;
										return $author$project$Utils$TouchUtils$ZoomState(
											$author$project$Utils$TouchUtils$ZoomCurrent(
												_Utils_update(
													zData,
													{
														E: _Utils_Tuple2(t1, t2)
													})));
									}
								case 1:
									var ss = oldState.a;
									var _v5 = ss.bZ;
									if (_v5.$ === 1) {
										var $temp$oldState = $author$project$Utils$TouchUtils$NoState,
											$temp$touchEvent = touchEvent;
										oldState = $temp$oldState;
										touchEvent = $temp$touchEvent;
										continue update;
									} else {
										var oldZoom = _v5.a;
										return $author$project$Utils$TouchUtils$ZoomState(
											$author$project$Utils$TouchUtils$ZoomCurrent(
												{
													E: _Utils_Tuple2(t1, t2),
													ag: $elm$core$Maybe$Just(oldZoom),
													eH: _Utils_Tuple2(t1, t2)
												}));
									}
								default:
									return $author$project$Utils$TouchUtils$ZoomState(
										$author$project$Utils$TouchUtils$ZoomCurrent(
											{
												E: _Utils_Tuple2(t1, t2),
												ag: $elm$core$Maybe$Nothing,
												eH: _Utils_Tuple2(t1, t2)
											}));
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
		}
	});
var $author$project$AlbumPage$updatePrevNext = F2(
	function (model, shifter) {
		if (model.$ === 1) {
			var fi = model.a;
			var _v1 = A3(shifter, fi.aL, fi.g.bN, fi.g.bO);
			var newPrev = _v1.a;
			var newCur = _v1.b;
			var newRest = _v1.c;
			var _v2 = function () {
				if (_Utils_eq(fi.g.bN, newCur)) {
					return _Utils_Tuple2(fi.aq, $elm$core$Maybe$Nothing);
				} else {
					var _v3 = A3(
						$author$project$FullImagePage$fitImage,
						newCur.b0,
						$elm$core$Basics$floor(fi.l.dI.bd.b7),
						$elm$core$Basics$floor(fi.l.dI.bd.bM));
					var w = _v3.a;
					var h = _v3.b;
					return A4($author$project$AlbumPage$progInit, fi.l.dI, newCur, w, h);
				}
			}();
			var newProgModel = _v2.a;
			var newCmd = _v2.b;
			return _Utils_Tuple2(
				$author$project$AlbumPage$FullImage(
					_Utils_update(
						fi,
						{
							g: {bN: newCur, bO: newRest, b4: fi.g.b4, b5: fi.g.b5},
							aL: newPrev,
							aq: newProgModel,
							P: $author$project$Utils$TouchUtils$init
						})),
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2(
							$elm$core$Platform$Cmd$map,
							$author$project$AlbumPage$FullMsg,
							A2(
								$elm$core$Maybe$withDefault,
								$elm$core$Platform$Cmd$none,
								A2($elm$core$Maybe$map, $author$project$Utils$ResultUtils$toCmd, newCmd))),
							$author$project$AlbumPage$getImgPosition
						])));
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$AlbumPage$update = F3(
	function (msg, model, scroll) {
		switch (msg.$) {
			case 0:
				var prevImgs = msg.a;
				var curImg = msg.b;
				var nextImgs = msg.c;
				if (!model.$) {
					var th = model.a;
					var imgCount = ($elm$core$List$length(prevImgs) + 1) + $elm$core$List$length(nextImgs);
					var thumbLoadState = function () {
						var _v4 = _Utils_eq(
							imgCount,
							$elm$core$Set$size(th.ar));
						if (_v4) {
							return 1;
						} else {
							return 0;
						}
					}();
					var _v2 = A3(
						$author$project$FullImagePage$fitImage,
						curImg.b0,
						$elm$core$Basics$floor(th.l.dI.bd.b7),
						$elm$core$Basics$floor(th.l.dI.bd.bM));
					var w = _v2.a;
					var h = _v2.b;
					var _v3 = A4($author$project$AlbumPage$progInit, th.l.dI, curImg, w, h);
					var progModel = _v3.a;
					var progCmd = _v3.b;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							{
								g: {bN: curImg, bO: nextImgs, b4: th.g.b4, b5: th.g.b5},
								bl: $elm$core$Maybe$Nothing,
								aL: prevImgs,
								aq: progModel,
								dm: scroll,
								dw: thumbLoadState,
								P: $author$project$Utils$TouchUtils$init,
								l: th.l
							}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2(
									$elm$core$Platform$Cmd$map,
									$author$project$AlbumPage$FullMsg,
									A2(
										$elm$core$Maybe$withDefault,
										$elm$core$Platform$Cmd$none,
										A2($elm$core$Maybe$map, $author$project$Utils$ResultUtils$toCmd, progCmd))),
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
					var scrollCmd = function () {
						var _v8 = fi.dm;
						if (_v8.$ === 1) {
							return $elm$core$Platform$Cmd$none;
						} else {
							var pos = _v8.a;
							return A2(
								$elm$core$Task$attempt,
								$elm$core$Basics$always($author$project$AlbumPage$NoUpdate),
								A3($elm$browser$Browser$Dom$setViewportOf, $author$project$AlbumStyles$rootDivId, 0, pos));
						}
					}();
					var _v6 = A3($author$project$Utils$ListUtils$shiftToBeginning, fi.aL, fi.g.bN, fi.g.bO);
					var newFirst = _v6.a;
					var newRest = _v6.b;
					var th = {
						g: {bN: newFirst, bO: newRest, b4: fi.g.b4, b5: fi.g.b5},
						a$: $elm$core$Set$empty,
						ar: $elm$core$Set$empty,
						l: fi.l
					};
					var readyToDisplayImages = function () {
						var _v7 = fi.dw;
						if (!_v7) {
							return $elm$core$Set$empty;
						} else {
							return $author$project$ThumbPage$allUrls(
								$author$project$AlbumPage$thumbModel(th));
						}
					}();
					return _Utils_Tuple2(
						$author$project$AlbumPage$Thumbs(
							_Utils_update(
								th,
								{ar: readyToDisplayImages})),
						scrollCmd);
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
									P: A2($author$project$Utils$TouchUtils$update, fi.P, evt)
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
									P: A2($author$project$Utils$TouchUtils$update, fi.P, evt)
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
								{P: $author$project$Utils$TouchUtils$init})),
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
									P: $author$project$Utils$TouchUtils$endZoom(oldState)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 9:
				var err = msg.a;
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
									bl: $elm$core$Maybe$Just(element)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 8:
				var progImgMsg = msg.a;
				if (model.$ === 1) {
					var fi = model.a;
					var _v16 = A2($author$project$ProgressiveImage$update, progImgMsg, fi.aq);
					var newProgModel = _v16.a;
					var newProgCmd = _v16.b;
					return _Utils_Tuple2(
						$author$project$AlbumPage$FullImage(
							_Utils_update(
								fi,
								{aq: newProgModel})),
						A2($elm$core$Platform$Cmd$map, $author$project$AlbumPage$FullMsg, newProgCmd));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $jinjor$elm_debounce$Debounce$update = F4(
	function (config, send, msg, _v0) {
		var d = _v0;
		switch (msg.$) {
			case 0:
				return _Utils_Tuple2(d, $elm$core$Platform$Cmd$none);
			case 1:
				var tryAgainAfter = msg.a;
				var _v2 = d.S;
				if (_v2.b) {
					var head = _v2.a;
					var tail = _v2.b;
					var selfCmd = function () {
						if (!tryAgainAfter.$) {
							var delay = tryAgainAfter.a;
							return A2(
								$jinjor$elm_debounce$Debounce$delayCmd,
								delay,
								$jinjor$elm_debounce$Debounce$Flush(
									$elm$core$Maybe$Just(delay)));
						} else {
							return $elm$core$Platform$Cmd$none;
						}
					}();
					var _v3 = A2(send, head, tail);
					var input = _v3.a;
					var sendCmd = _v3.b;
					return _Utils_Tuple2(
						_Utils_update(
							d,
							{S: input, a2: true}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									sendCmd,
									A2($elm$core$Platform$Cmd$map, config.eY, selfCmd)
								])));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							d,
							{a2: false}),
						$elm$core$Platform$Cmd$none);
				}
			default:
				var lastInputLength = msg.a;
				var _v5 = _Utils_Tuple2(
					_Utils_cmp(
						$elm$core$List$length(d.S),
						lastInputLength) < 1,
					d.S);
				if (_v5.a && _v5.b.b) {
					var _v6 = _v5.b;
					var head = _v6.a;
					var tail = _v6.b;
					var _v7 = A2(send, head, tail);
					var input = _v7.a;
					var cmd = _v7.b;
					return _Utils_Tuple2(
						_Utils_update(
							d,
							{S: input}),
						cmd);
				} else {
					return _Utils_Tuple2(d, $elm$core$Platform$Cmd$none);
				}
		}
	});
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$remove, key, dict);
	});
var $author$project$Main$justLoadedReadyToDisplayNextState = F3(
	function (th, url, result) {
		switch (result.$) {
			case 1:
				return $author$project$AlbumPage$Thumbs(
					_Utils_update(
						th,
						{
							a$: A2($elm$core$Set$insert, url, th.a$)
						}));
			case 2:
				return $author$project$AlbumPage$Thumbs(
					_Utils_update(
						th,
						{
							a$: A2($elm$core$Set$remove, url, th.a$),
							ar: A2($elm$core$Set$insert, url, th.ar)
						}));
			default:
				return $author$project$AlbumPage$Thumbs(th);
		}
	});
var $author$project$Main$ImageReadyToDisplay = function (a) {
	return {$: 10, a: a};
};
var $author$project$Main$urlNextState = F2(
	function (url, result) {
		if (result.$ === 1) {
			return A3(
				$andrewMacmurray$elm_delay$Delay$after,
				100,
				0,
				$author$project$Main$ImageReadyToDisplay(url));
		} else {
			return $elm$core$Platform$Cmd$none;
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
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
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$union, dict1, dict2);
	});
var $author$project$ThumbPage$urlsToGet = function (thumbPageModel) {
	var vPort = thumbPageModel.a5;
	var srcs = $author$project$ThumbPage$allImgSrcs(thumbPageModel);
	var scrollPct = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function (vp) {
				var _v0 = !vp.bd.b9;
				if (_v0) {
					return 0;
				} else {
					return (vp.bd.b9 + (vp.bd.bM / 2)) / vp.eA.bM;
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
	return $elm$core$Set$fromList(
		A2(
			$elm$core$List$take,
			5,
			A2(
				$elm$core$List$filter,
				function (url) {
					return !A2(
						$elm$core$Set$member,
						url,
						A2($elm$core$Set$union, thumbPageModel.a$, thumbPageModel.ar));
				},
				A2(
					$elm$core$List$map,
					function ($) {
						return $.b6;
					},
					prioritySrcs))));
};
var $author$project$AlbumPage$urlsToGet = function (albumPage) {
	if (!albumPage.$) {
		var th = albumPage.a;
		return $author$project$ThumbPage$urlsToGet(
			$author$project$AlbumPage$thumbModel(th));
	} else {
		return $elm$core$Set$empty;
	}
};
var $author$project$Main$updateImageResult = F3(
	function (model, url, result) {
		if (model.$ === 5) {
			var la = model.a;
			var _v1 = la.i;
			if (!_v1.$) {
				var th = _v1.a;
				var newModel = A3($author$project$Main$justLoadedReadyToDisplayNextState, th, url, result);
				var urls = $author$project$AlbumPage$urlsToGet(newModel);
				return _Utils_Tuple2(
					$author$project$Main$LoadedAlbum(
						_Utils_update(
							la,
							{
								i: newModel,
								B: A2(
									$elm$core$Dict$union,
									$elm$core$Dict$fromList(
										_List_fromArray(
											[
												_Utils_Tuple2(url, result)
											])),
									A2(
										$elm$core$Dict$union,
										la.B,
										A2($author$project$Utils$ListUtils$dictWithValues, urls, $author$project$Main$UrlRequested)))
							})),
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2($author$project$Main$getUrls, la.B, urls),
								A2($author$project$Main$urlNextState, url, result)
							])));
			} else {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			}
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$NavInProgress = 0;
var $author$project$Main$withAlbumPathsAfterLoad = F2(
	function (model, albumPathsAfterLoad) {
		switch (model.$) {
			case 0:
				var sz = model.a;
				return $author$project$Main$Sizing(
					_Utils_update(
						sz,
						{
							G: $elm$core$Maybe$Just(albumPathsAfterLoad)
						}));
			case 1:
				var lh = model.a;
				return $author$project$Main$LoadingHomeLink(
					_Utils_update(
						lh,
						{
							G: $elm$core$Maybe$Just(albumPathsAfterLoad)
						}));
			case 2:
				var ld = model.a;
				return $author$project$Main$Loading(
					_Utils_update(
						ld,
						{
							G: $elm$core$Maybe$Just(albumPathsAfterLoad)
						}));
			case 3:
				return model;
			case 4:
				var ll = model.a;
				return $author$project$Main$LoadedList(
					_Utils_update(
						ll,
						{ad: 0}));
			default:
				var la = model.a;
				return $author$project$Main$LoadedAlbum(
					_Utils_update(
						la,
						{ad: 0}));
		}
	});
var $author$project$Main$withDebounce = F2(
	function (debounce, model) {
		switch (model.$) {
			case 4:
				var ll = model.a;
				return $author$project$Main$LoadedList(
					_Utils_update(
						ll,
						{Y: debounce}));
			case 5:
				var la = model.a;
				return $author$project$Main$LoadedAlbum(
					_Utils_update(
						la,
						{Y: debounce}));
			default:
				return model;
		}
	});
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
			case 5:
				var la = model.a;
				var _v1 = la.i;
				if (!_v1.$) {
					var th = _v1.a;
					var oldVpInfo = th.l;
					return $author$project$Main$LoadedAlbum(
						_Utils_update(
							la,
							{
								i: $author$project$AlbumPage$Thumbs(
									_Utils_update(
										th,
										{
											l: _Utils_update(
												oldVpInfo,
												{
													a5: $elm$core$Maybe$Just(rootDivViewport)
												})
										})),
								a5: $elm$core$Maybe$Just(rootDivViewport)
							}));
				} else {
					var fi = _v1.a;
					var oldVpInfo = fi.l;
					return $author$project$Main$LoadedAlbum(
						_Utils_update(
							la,
							{
								i: $author$project$AlbumPage$FullImage(
									_Utils_update(
										fi,
										{
											l: _Utils_update(
												oldVpInfo,
												{
													a5: $elm$core$Maybe$Just(rootDivViewport)
												})
										})),
								a5: $elm$core$Maybe$Just(rootDivViewport)
							}));
				}
			default:
				var ll = model.a;
				return $author$project$Main$LoadedList(
					_Utils_update(
						ll,
						{
							a5: $elm$core$Maybe$Just(rootDivViewport)
						}));
		}
	});
var $author$project$Main$withScrollToAfterLoad = F2(
	function (model, scrollToAfterLoad) {
		switch (model.$) {
			case 0:
				var sz = model.a;
				return $author$project$Main$Sizing(
					_Utils_update(
						sz,
						{
							O: $elm$core$Maybe$Just(scrollToAfterLoad)
						}));
			case 1:
				var lh = model.a;
				return $author$project$Main$LoadingHomeLink(
					_Utils_update(
						lh,
						{
							O: $elm$core$Maybe$Just(scrollToAfterLoad)
						}));
			case 2:
				var ld = model.a;
				return $author$project$Main$Loading(
					_Utils_update(
						ld,
						{
							O: $elm$core$Maybe$Just(scrollToAfterLoad)
						}));
			case 3:
				return model;
			case 4:
				return model;
			default:
				return model;
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		var _v0 = A2($author$project$Utils$DebugSupport$log, 'update msg', msg);
		switch (_v0.$) {
			case 0:
				var viewport = _v0.a;
				switch (model.$) {
					case 0:
						var sz = model.a;
						return _Utils_Tuple2(
							$author$project$Main$LoadingHomeLink(
								{
									G: sz.G,
									dI: A2($author$project$Utils$DebugSupport$log, 'window size set', viewport),
									j: sz.j,
									k: sz.k,
									O: sz.O
								}),
							$elm$http$Http$get(
								{
									cy: $elm$http$Http$expectString(
										A2($author$project$Utils$ResultUtils$either, $author$project$Main$NoHome, $author$project$Main$YesHome)),
									b6: 'home'
								}));
					case 1:
						var lh = model.a;
						return _Utils_Tuple2(
							$author$project$Main$LoadingHomeLink(
								_Utils_update(
									lh,
									{dI: viewport})),
							$elm$core$Platform$Cmd$none);
					case 2:
						var ld = model.a;
						return _Utils_Tuple2(
							$author$project$Main$Loading(
								_Utils_update(
									ld,
									{
										dI: A2($author$project$Utils$DebugSupport$log, 'window size updated during load', viewport)
									})),
							$elm$core$Platform$Cmd$none);
					case 3:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					case 5:
						var la = model.a;
						var _v2 = la.i;
						if (!_v2.$) {
							var th = _v2.a;
							var oldVpInfo = th.l;
							var newModel = $author$project$AlbumPage$Thumbs(
								_Utils_update(
									th,
									{
										l: _Utils_update(
											oldVpInfo,
											{
												dI: A2($author$project$Utils$DebugSupport$log, 'window size updated for thumbs', viewport)
											})
									}));
							var urls = $author$project$AlbumPage$urlsToGet(newModel);
							return _Utils_Tuple2(
								$author$project$Main$LoadedAlbum(
									_Utils_update(
										la,
										{
											i: newModel,
											B: A2(
												$elm$core$Dict$union,
												la.B,
												A2($author$project$Utils$ListUtils$dictWithValues, urls, $author$project$Main$UrlRequested))
										})),
								A2($author$project$Main$getUrls, la.B, urls));
						} else {
							var fi = _v2.a;
							var oldVpInfo = fi.l;
							return _Utils_Tuple2(
								$author$project$Main$LoadedAlbum(
									_Utils_update(
										la,
										{
											i: $author$project$AlbumPage$FullImage(
												_Utils_update(
													fi,
													{
														l: _Utils_update(
															oldVpInfo,
															{
																dI: A2($author$project$Utils$DebugSupport$log, 'window size updated for full', viewport)
															})
													}))
										})),
								A2($elm$core$Platform$Cmd$map, $author$project$Main$PageMsg, $author$project$AlbumPage$getImgPosition));
						}
					default:
						var ll = model.a;
						var _v3 = ll.F;
						var alp = _v3;
						return _Utils_Tuple2(
							$author$project$Main$LoadedList(
								_Utils_update(
									ll,
									{
										F: _Utils_update(
											alp,
											{dI: viewport})
									})),
							$elm$core$Platform$Cmd$none);
				}
			case 1:
				var home = _v0.a;
				if (model.$ === 1) {
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
				var err = _v0.a;
				if (model.$ === 1) {
					var lh = model.a;
					return A2($author$project$Main$gotHome, lh, $elm$core$Maybe$Nothing);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 3:
				var progress = _v0.a;
				if (model.$ === 2) {
					var ld = model.a;
					return _Utils_Tuple2(
						$author$project$Main$Loading(
							_Utils_update(
								ld,
								{
									bv: $elm$core$Maybe$Just(progress)
								})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 4:
				var albumOrList = _v0.a;
				if (model.$ === 2) {
					var ld = model.a;
					if (!albumOrList.$) {
						var albumList = albumOrList.a;
						var newModel = $author$project$Main$LoadedList(
							{
								Y: $jinjor$elm_debounce$Debounce$init,
								j: ld.j,
								A: ld.A,
								k: ld.k,
								F: {bf: albumList, dI: ld.dI, bY: _List_Nil},
								ad: 1,
								B: $elm$core$Dict$empty,
								a5: $elm$core$Maybe$Nothing
							});
						var pathsThenScroll = $author$project$Utils$ResultUtils$toCmd(
							A2(
								$author$project$Main$sequence,
								A2($author$project$Main$pathsToCmd, newModel, ld.G),
								$author$project$Utils$ListUtils$fromMaybe(
									A2($author$project$Main$scrollToCmd, newModel, ld.O))));
						return _Utils_Tuple2(newModel, pathsThenScroll);
					} else {
						var album = albumOrList.a;
						var albumPage = $author$project$AlbumPage$Thumbs(
							{
								g: album,
								a$: $elm$core$Set$empty,
								ar: $elm$core$Set$empty,
								l: {dI: ld.dI, a5: $elm$core$Maybe$Nothing}
							});
						var urls = $author$project$AlbumPage$urlsToGet(albumPage);
						var newModel = $author$project$Main$LoadedAlbum(
							{
								i: albumPage,
								Y: $jinjor$elm_debounce$Debounce$init,
								j: ld.j,
								A: ld.A,
								k: ld.k,
								ad: 1,
								bY: _List_Nil,
								B: A2($author$project$Utils$ListUtils$dictWithValues, urls, $author$project$Main$UrlRequested),
								a5: $elm$core$Maybe$Nothing
							});
						var pathsThenScroll = $author$project$Utils$ResultUtils$toCmd(
							A2(
								$author$project$Main$sequence,
								A2($author$project$Main$pathsToCmd, newModel, ld.G),
								$author$project$Utils$ListUtils$fromMaybe(
									A2($author$project$Main$scrollToCmd, newModel, ld.O))));
						return _Utils_Tuple2(
							newModel,
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2($author$project$Main$getUrls, $elm$core$Dict$empty, urls),
										pathsThenScroll
									])));
					}
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 5:
				var err = _v0.a;
				return _Utils_Tuple2(
					$author$project$Main$LoadError(
						{
							cw: err,
							j: $author$project$Main$flagsOf(model),
							k: $author$project$Main$keyOf(model)
						}),
					$elm$core$Platform$Cmd$none);
			case 6:
				var pageMsg = _v0.a;
				if (model.$ === 5) {
					var la = model.a;
					var newPendingUrls = $author$project$AlbumPage$resetUrls(pageMsg) ? $elm$core$Dict$empty : la.B;
					var _v10 = A3(
						$author$project$AlbumPage$update,
						pageMsg,
						la.i,
						A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, la.a5));
					var newPage = _v10.a;
					var newPageCmd = _v10.b;
					var urls = $author$project$AlbumPage$urlsToGet(newPage);
					return _Utils_Tuple2(
						$author$project$Main$LoadedAlbum(
							_Utils_update(
								la,
								{
									i: newPage,
									B: A2(
										$elm$core$Dict$union,
										newPendingUrls,
										A2($author$project$Utils$ListUtils$dictWithValues, urls, $author$project$Main$UrlRequested))
								})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($author$project$Main$getUrls, newPendingUrls, urls),
									A2($elm$core$Platform$Cmd$map, $author$project$Main$PageMsg, newPageCmd)
								])));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 9:
				var url = _v0.a;
				return A3($author$project$Main$updateImageResult, model, url, $author$project$Main$JustCompleted);
			case 10:
				var url = _v0.a;
				return A3($author$project$Main$updateImageResult, model, url, $author$project$Main$ReadyToDisplay);
			case 11:
				var url = _v0.a;
				var err = _v0.b;
				return A3(
					$author$project$Main$updateImageResult,
					model,
					url,
					$author$project$Main$Failed(err));
			case 7:
				var albumListPage = _v0.a;
				var maybeScroll = _v0.b;
				var title = function () {
					var alp = albumListPage;
					return alp.bf.bS;
				}();
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
						Y: $author$project$Main$debounceOf(model),
						j: $author$project$Main$flagsOf(model),
						A: $author$project$Main$homeOf(model),
						k: $author$project$Main$keyOf(model),
						F: albumListPage,
						ad: 1,
						B: $elm$core$Dict$empty,
						a5: $elm$core$Maybe$Nothing
					});
				return _Utils_Tuple2(newModel, scrollCmd);
			case 8:
				var albumPage = _v0.a;
				var parents = _v0.b;
				var urls = $author$project$AlbumPage$urlsToGet(albumPage);
				var newModel = $author$project$Main$LoadedAlbum(
					{
						i: albumPage,
						Y: $author$project$Main$debounceOf(model),
						j: $author$project$Main$flagsOf(model),
						A: $author$project$Main$homeOf(model),
						k: $author$project$Main$keyOf(model),
						ad: 1,
						bY: parents,
						B: A2($author$project$Utils$ListUtils$dictWithValues, urls, $author$project$Main$UrlRequested),
						a5: $elm$core$Maybe$Nothing
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
								$author$project$Utils$ViewportUtils$scrollToTop,
								$author$project$Main$NoBootstrap,
								$elm$core$Basics$always($author$project$Main$NoBootstrap)),
								A2($author$project$Main$getUrls, $elm$core$Dict$empty, urls),
								getImgPos
							])));
			case 14:
				var viewport = _v0.a;
				var _v14 = A3(
					$jinjor$elm_debounce$Debounce$push,
					$author$project$Main$debounceConfig,
					viewport,
					$author$project$Main$debounceOf(model));
				var debounce = _v14.a;
				var cmd = _v14.b;
				return _Utils_Tuple2(
					A2($author$project$Main$withDebounce, debounce, model),
					cmd);
			case 15:
				var dMsg = _v0.a;
				var _v15 = A4(
					$jinjor$elm_debounce$Debounce$update,
					$author$project$Main$debounceConfig,
					$jinjor$elm_debounce$Debounce$takeLast(
						A2($elm$core$Basics$composeL, $author$project$Utils$ResultUtils$toCmd, $author$project$Main$ScrolledTo)),
					dMsg,
					$author$project$Main$debounceOf(model));
				var debounce = _v15.a;
				var cmd = _v15.b;
				return _Utils_Tuple2(
					A2($author$project$Main$withDebounce, debounce, model),
					cmd);
			case 13:
				var viewport = _v0.a;
				return _Utils_Tuple2(
					A2(
						$author$project$Main$withScrollPos,
						A2($author$project$Utils$DebugSupport$log, 'ScrolledTo: ', viewport),
						model),
					$elm$core$Platform$Cmd$none);
			case 12:
				var scroll = _v0.a;
				return _Utils_Tuple2(
					model,
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Platform$Cmd$none,
						A2(
							$elm$core$Maybe$map,
							function (s) {
								return A2(
									$elm$core$Task$attempt,
									$elm$core$Basics$always($author$project$Main$NoBootstrap),
									A3(
										$elm$browser$Browser$Dom$setViewportOf,
										$author$project$AlbumStyles$rootDivId,
										0,
										A2($author$project$Utils$DebugSupport$log, 'startup scroll to', s)));
							},
							scroll)));
			case 17:
				var s = _v0.a;
				return _Utils_Tuple2(
					A2($author$project$Main$withScrollToAfterLoad, model, s),
					$author$project$Utils$ResultUtils$toCmd(
						A2(
							$elm$core$Maybe$withDefault,
							$author$project$Main$NoBootstrap,
							A2(
								$author$project$Main$scrollToCmd,
								model,
								$elm$core$Maybe$Just(s)))));
			case 16:
				var paths = _v0.a;
				return _Utils_Tuple2(
					A2($author$project$Main$withAlbumPathsAfterLoad, model, paths),
					$author$project$Utils$ResultUtils$toCmd(
						A2(
							$elm$core$Maybe$withDefault,
							$author$project$Main$NoBootstrap,
							A2(
								$author$project$Main$pathsToCmd,
								model,
								$elm$core$Maybe$Just(paths)))));
			case 18:
				var next = _v0.a;
				var rest = _v0.b;
				var _v16 = A2($author$project$Main$update, next, model);
				var nextModel = _v16.a;
				var nextCmd = _v16.b;
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
					var _v18 = A2($author$project$Main$update, r1, nextModel);
					var r1Model = _v18.a;
					var r1Cmds = _v18.b;
					var _v19 = function () {
						if (!rs.b) {
							return _Utils_Tuple2(r1Model, r1Cmds);
						} else {
							var rs1 = rs.a;
							var rss = rs.b;
							var _v21 = A2(
								$author$project$Main$update,
								A2($author$project$Main$Sequence, rs1, rss),
								r1Model);
							var rsModel = _v21.a;
							var rsCmds = _v21.b;
							return _Utils_Tuple2(
								rsModel,
								$author$project$Utils$ResultUtils$toCmd(
									A2(
										$author$project$Main$SequenceCmd,
										r1Cmds,
										_List_fromArray(
											[rsCmds]))));
						}
					}();
					var rModel = _v19.a;
					var rCmds = _v19.b;
					return _Utils_Tuple2(
						rModel,
						$author$project$Utils$ResultUtils$toCmd(
							A2(
								$author$project$Main$SequenceCmd,
								A2(
									$author$project$Utils$DebugSupport$log,
									'sequence msg ' + ($author$project$Utils$DebugSupport$debugString(next) + ' (cont\'d) produces cmd'),
									nextCmd),
								_List_fromArray(
									[rCmds]))));
				}
			case 19:
				var next = _v0.a;
				var rest = _v0.b;
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
									A2($author$project$Main$SequenceCmd, r1, rs))
								]));
					}
				}();
				return _Utils_Tuple2(model, cmds);
			case 20:
				var urlRequest = _v0.a;
				if (!urlRequest.$) {
					var url = urlRequest.a;
					var hUrl = A2(
						$elm$core$Maybe$andThen,
						$elm$url$Url$fromString,
						$author$project$Main$homeOf(model));
					var _v24 = A2(
						$elm$core$Maybe$withDefault,
						false,
						A2(
							$elm$core$Maybe$map,
							function (h) {
								return _Utils_eq(h, url);
							},
							hUrl));
					if (_v24) {
						return _Utils_Tuple2(
							model,
							$elm$browser$Browser$Navigation$load(
								$elm$url$Url$toString(url)));
					} else {
						return _Utils_Tuple2(
							A2(
								$author$project$Utils$DebugSupport$log,
								'ignoring unexpected internal url request not for home url (' + (A2(
									$elm$core$Maybe$withDefault,
									'home not set',
									$author$project$Main$homeOf(model)) + (') ' + $elm$url$Url$toString(url))),
								model),
							$elm$core$Platform$Cmd$none);
					}
				} else {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						$elm$browser$Browser$Navigation$load(url));
				}
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$AlbumPage$titleOf = function (albumPage) {
	if (!albumPage.$) {
		var th = albumPage.a;
		return th.g.b5;
	} else {
		var fi = albumPage.a;
		return fi.g.bN.bC;
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
					A3($elm$core$Dict$insert, record.eh, record.dR, keyframesByName),
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
						{dR: decl, eh: name});
				},
				$elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_v0) {
	var charset = _v0.cn;
	var imports = _v0.cE;
	var namespaces = _v0.c1;
	var declarations = _v0.dS;
	var _v1 = A3(
		$elm$core$List$foldr,
		$rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _v1.a;
	var compactedDeclarations = _v1.b;
	var finalDeclarations = A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {cn: charset, dS: finalDeclarations, cE: imports, c1: namespaces};
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
	return '(' + (expression.cA + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$append(': '),
			expression.V)) + ')'));
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
			var name = decl.a.eh;
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
	var charset = _v0.cn;
	var imports = _v0.cE;
	var namespaces = _v0.c1;
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
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
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
var $Skinney$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {ay: charsProcessed, aE: hash, as: seed, aN: shift};
	});
var $Skinney$murmur3$Murmur3$c1 = 3432918353;
var $Skinney$murmur3$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $Skinney$murmur3$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $Skinney$murmur3$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = (!(!data.aE)) ? (data.as ^ A2(
		$Skinney$murmur3$Murmur3$multiplyBy,
		$Skinney$murmur3$Murmur3$c2,
		A2(
			$Skinney$murmur3$Murmur3$rotlBy,
			15,
			A2($Skinney$murmur3$Murmur3$multiplyBy, $Skinney$murmur3$Murmur3$c1, data.aE)))) : data.as;
	var h0 = acc ^ data.ay;
	var h1 = A2($Skinney$murmur3$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($Skinney$murmur3$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $Skinney$murmur3$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$Skinney$murmur3$Murmur3$multiplyBy,
			5,
			A2(
				$Skinney$murmur3$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$Skinney$murmur3$Murmur3$multiplyBy,
					$Skinney$murmur3$Murmur3$c2,
					A2(
						$Skinney$murmur3$Murmur3$rotlBy,
						15,
						A2($Skinney$murmur3$Murmur3$multiplyBy, $Skinney$murmur3$Murmur3$c1, k1))))) + 3864292196;
	});
var $Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.aE | ((255 & $elm$core$Char$toCode(c)) << data.aN);
		var _v0 = data.aN;
		if (_v0 === 24) {
			return {
				ay: data.ay + 1,
				aE: 0,
				as: A2($Skinney$murmur3$Murmur3$mix, data.as, res),
				aN: 0
			};
		} else {
			return {ay: data.ay + 1, aE: res, as: data.as, aN: data.aN + 8};
		}
	});
var $Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return $Skinney$murmur3$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$Skinney$murmur3$Murmur3$hashFold,
				A4($Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
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
			A2($Skinney$murmur3$Murmur3$hashString, $rtfeldman$elm_css$Hash$murmurSeed, str)));
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
								{dR: str, eh: name})
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
	var charset = _v0.cn;
	var imports = _v0.cE;
	var namespaces = _v0.c1;
	var snippets = _v0.dp;
	var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {cn: charset, dS: declarations, cE: imports, c1: namespaces};
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
	return {cn: $elm$core$Maybe$Nothing, cE: _List_Nil, c1: _List_Nil, dp: snippets};
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
var $author$project$Main$RawScrolledTo = function (a) {
	return {$: 14, a: a};
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
var $rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2($rtfeldman$elm_css$Css$property, key, arg.V);
	});
var $rtfeldman$elm_css$Css$cursor = $rtfeldman$elm_css$Css$prop1('cursor');
var $rtfeldman$elm_css$Css$EmUnits = 0;
var $rtfeldman$elm_css$Css$Structure$Compatible = 0;
var $rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			ca: 0,
			cl: 0,
			aB: 0,
			t: 0,
			a0: 0,
			aG: 0,
			ab: 0,
			aH: 0,
			aI: 0,
			am: 0,
			an: 0,
			T: 0,
			af: numericValue,
			aQ: 0,
			aS: unitLabel,
			bc: units,
			V: _Utils_ap(
				$elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var $rtfeldman$elm_css$Css$em = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'em');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
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
var $rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			$rtfeldman$elm_css$Css$property,
			key,
			A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.V, argB.V])));
	});
var $rtfeldman$elm_css$Css$padding2 = $rtfeldman$elm_css$Css$prop2('padding');
var $rtfeldman$elm_css$Css$pointer = {b: 0, V: 'pointer'};
var $rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$Node;
var $rtfeldman$elm_css$Html$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$node;
var $rtfeldman$elm_css$Html$Styled$span = $rtfeldman$elm_css$Html$Styled$node('span');
var $rtfeldman$elm_css$VirtualDom$Styled$murmurSeed = 15739;
var $rtfeldman$elm_css$VirtualDom$Styled$getClassname = function (styles) {
	return $elm$core$List$isEmpty(styles) ? 'unstyled' : A2(
		$elm$core$String$cons,
		'_',
		$rtfeldman$elm_hex$Hex$toString(
			A2(
				$Skinney$murmur3$Murmur3$hashString,
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
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
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
var $rtfeldman$elm_css$Css$textDecoration = $rtfeldman$elm_css$Css$prop1('text-decoration');
var $rtfeldman$elm_css$Css$underline = {aP: 0, V: 'underline'};
var $author$project$ThumbPage$albumParent = F3(
	function (getTitle, showList, albumList) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$span,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$span,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Events$onClick(
							showList(albumList)),
							$author$project$AlbumStyles$styles(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$underline),
									$rtfeldman$elm_css$Css$cursor($rtfeldman$elm_css$Css$pointer)
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
	return A2($rtfeldman$elm_css$Css$property, 'background-color', c.V);
};
var $rtfeldman$elm_css$Css$center = $rtfeldman$elm_css$Css$prop1('center');
var $rtfeldman$elm_css$Css$color = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'color', c.V);
};
var $rtfeldman$elm_css$Html$Styled$div = $rtfeldman$elm_css$Html$Styled$node('div');
var $author$project$ThumbPage$getAlbumListTitle = function (a) {
	return a.bS;
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
			v: alpha,
			w: b,
			q: 0,
			z: g,
			C: r,
			V: A2(
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
var $rtfeldman$elm_css$Css$Internal$IncompatibleUnits = 0;
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
			v: 1,
			w: b,
			q: 0,
			z: g,
			C: r,
			V: A2(
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
var $author$project$ThumbPage$albumTitle = F5(
	function (title, parents, showList, extraHtml, extraStyles) {
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
					A2($author$project$ThumbPage$albumParent, $author$project$ThumbPage$getAlbumListTitle, showList),
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
var $rtfeldman$elm_css$Css$row = {bK: 0, a_: 0, V: 'row'};
var $rtfeldman$elm_css$Css$column = _Utils_update(
	$rtfeldman$elm_css$Css$row,
	{V: 'column'});
var $rtfeldman$elm_css$Css$displayFlex = A2($rtfeldman$elm_css$Css$property, 'display', 'flex');
var $rtfeldman$elm_css$Css$flexDirection = $rtfeldman$elm_css$Css$prop1('flex-direction');
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $rtfeldman$elm_css$Css$auto = {dC: 0, b: 0, aB: 0, bm: 0, d9: 0, aG: 0, ab: 0, T: 0, aJ: 0, N: 0, bA: 0, aR: 0, D: 0, V: 'auto'};
var $author$project$AlbumStyles$black = A3($rtfeldman$elm_css$Css$rgb, 0, 0, 0);
var $rtfeldman$elm_css$Css$height = $rtfeldman$elm_css$Css$prop1('height');
var $rtfeldman$elm_css$Css$hidden = {x: 0, aJ: 0, V: 'hidden', be: 0};
var $rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$property, key, value),
			_List_Nil,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$id = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('id');
var $rtfeldman$elm_css$Css$overflowX = $rtfeldman$elm_css$Css$prop1('overflow-x');
var $rtfeldman$elm_css$Css$overflowY = $rtfeldman$elm_css$Css$prop1('overflow-y');
var $rtfeldman$elm_css$Css$absolute = {et: 0, V: 'absolute'};
var $rtfeldman$elm_css$Css$fixed = {aV: 0, et: 0, bA: 0, V: 'fixed'};
var $rtfeldman$elm_css$Css$position = $rtfeldman$elm_css$Css$prop1('position');
var $author$project$AlbumStyles$rootPos = function (flags) {
	return flags.dn ? $rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$fixed) : $rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute);
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
								eA: {bM: height, b7: width},
								bd: {bM: vheight, b7: vwidth, b8: x, b9: y}
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
									$rtfeldman$elm_css$Css$px(viewport.bd.bM)),
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
	return $author$project$Utils$ListUtils$encodePath(is.b6) + (' ' + ($elm$core$String$fromInt(is.b8) + 'w'));
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
var $author$project$ImageViews$render = F5(
	function (idefault, is, s, otherAttrs, msg) {
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
		var clickAttr = function () {
			if (!msg.$) {
				var m = msg.a;
				return _List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Events$onClick(m)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var baseAttrs = _List_fromArray(
			[
				$author$project$AlbumStyles$styles(s),
				$rtfeldman$elm_css$Html$Styled$Attributes$src(
				$author$project$Utils$ListUtils$encodePath(idefault.b6)),
				$rtfeldman$elm_css$Html$Styled$Attributes$width(idefault.b8),
				$rtfeldman$elm_css$Html$Styled$Attributes$height(idefault.b9)
			]);
		return A2(
			$rtfeldman$elm_css$Html$Styled$img,
			_Utils_ap(
				baseAttrs,
				_Utils_ap(
					otherAttrs,
					_Utils_ap(srcset, clickAttr))),
			_List_Nil);
	});
var $author$project$ImageViews$renderPresized = F8(
	function (margin, w, h, i, iRest, s, otherAttrs, msg) {
		return A5(
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
			otherAttrs,
			msg);
	});
var $author$project$ThumbPage$sizeForHeight = function (height) {
	return $author$project$ThumbPage$sizeForScaler(
		function (is1) {
			return height / is1.b9;
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
					[argA.V, argB.V, argC.V, argD.V])));
	});
var $rtfeldman$elm_css$Css$boxShadow4 = $rtfeldman$elm_css$Css$prop4('box-shadow');
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
var $author$project$AlbumListPage$renderListImage = F2(
	function (selectedMsg, img) {
		var _v0 = (_Utils_cmp(img.b0.b8, img.b0.b9) > 0) ? A2($author$project$ThumbPage$sizeForWidth, 200, img) : A2($author$project$ThumbPage$sizeForHeight, 200, img);
		var xScaled = _v0.a;
		var yScaled = _v0.b;
		var sideMargin = 10 + A2($elm$core$Basics$max, 0, (yScaled - xScaled) / 2);
		return A8(
			$author$project$ImageViews$renderPresized,
			10,
			xScaled,
			yScaled,
			img.b0,
			img.b1,
			_Utils_ap(
				$author$project$ThumbPage$thumbStyles,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Css$verticalAlign($rtfeldman$elm_css$Css$middle),
						$rtfeldman$elm_css$Css$marginLeft(
						$rtfeldman$elm_css$Css$px(sideMargin)),
						$rtfeldman$elm_css$Css$marginRight(
						$rtfeldman$elm_css$Css$px(sideMargin))
					])),
			_List_Nil,
			$elm$core$Maybe$Just(selectedMsg));
	});
var $author$project$AlbumListPage$viewAlbumOrList = F3(
	function (viewList, viewAlbum, albumOrList) {
		var childStyles = $author$project$AlbumStyles$styles(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$color($author$project$AlbumStyles$white)
				]));
		if (!albumOrList.$) {
			var albumList = albumOrList.a;
			return A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						childStyles,
						$rtfeldman$elm_css$Html$Styled$Events$onClick(
						viewList(albumList))
					]),
				_List_fromArray(
					[
						A2(
						$author$project$AlbumListPage$renderListImage,
						viewList(albumList),
						albumList.bR),
						A2(
						$rtfeldman$elm_css$Html$Styled$span,
						_List_Nil,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(albumList.bS)
							]))
					]));
		} else {
			var album = albumOrList.a;
			return A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						childStyles,
						$rtfeldman$elm_css$Html$Styled$Events$onClick(
						viewAlbum(album))
					]),
				_List_fromArray(
					[
						A2(
						$author$project$AlbumListPage$renderListImage,
						viewAlbum(album),
						album.b4),
						A2(
						$rtfeldman$elm_css$Html$Styled$span,
						_List_Nil,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(album.b5)
							]))
					]));
		}
	});
var $author$project$AlbumListPage$view = F5(
	function (_v0, viewList, viewAlbum, scrollMsgMaker, flags) {
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
						A5(
						$author$project$ThumbPage$albumTitle,
						alp.bf.bS,
						A2($elm$core$List$map, $elm$core$Tuple$first, alp.bY),
						viewList,
						_List_Nil,
						_List_Nil)
					]),
				$elm$core$List$reverse(
					_Utils_ap(
						_List_fromArray(
							[
								A3($author$project$AlbumListPage$viewAlbumOrList, viewList, viewAlbum, alp.bf.bE)
							]),
						A2(
							$elm$core$List$map,
							A2($author$project$AlbumListPage$viewAlbumOrList, viewList, viewAlbum),
							alp.bf.bF)))));
	});
var $author$project$AlbumPage$TouchDragContinue = function (a) {
	return {$: 2, a: a};
};
var $author$project$AlbumPage$TouchDragStart = function (a) {
	return {$: 1, a: a};
};
var $author$project$AlbumPage$View = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
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
			var _v1 = $author$project$Utils$TouchUtils$coords(swipe.E);
			var x2 = _v1.a;
			var _v2 = $author$project$Utils$TouchUtils$coords(swipe.eH);
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
				var zoom = _v1.a;
				return $author$project$AlbumPage$TouchEndZoom(touchState);
		}
	});
var $rtfeldman$elm_css$Html$Styled$a = $rtfeldman$elm_css$Html$Styled$node('a');
var $rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $author$project$FullImagePage$getAlbumTitle = function (a) {
	return a.b5;
};
var $rtfeldman$elm_css$Html$Styled$Attributes$href = function (url) {
	return A2($rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, 'href', url);
};
var $author$project$FullImagePage$imgTitleHeight = 5;
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
		$rtfeldman$elm_css$Css$cursor($rtfeldman$elm_css$Css$pointer)
	]);
var $author$project$AlbumStyles$navElement = F3(
	function (msg, label, side) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$author$project$AlbumStyles$styles(
					_Utils_ap(
						$author$project$AlbumStyles$navBoxStyles,
						_List_fromArray(
							[
								side(
								$rtfeldman$elm_css$Css$px(0))
							]))),
					$rtfeldman$elm_css$Html$Styled$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(label)
				]));
	});
var $author$project$FullImagePage$navEltIf = F4(
	function (lst, navMsg, navTxt, navAlign) {
		return $elm$core$List$isEmpty(lst) ? _List_Nil : _List_fromArray(
			[
				A3($author$project$AlbumStyles$navElement, navMsg, navTxt, navAlign)
			]);
	});
var $rtfeldman$elm_css$Css$none = {aw: 0, ci: 0, x: 0, b: 0, m: 0, d1: 0, cG: 0, bQ: 0, aI: 0, am: 0, T: 0, d: 0, c: 0, bV: 0, bu: 0, eq: 0, N: 0, bw: 0, eC: 0, aP: 0, au: 0, D: 0, eY: 0, e$: 0, V: 'none'};
var $rtfeldman$elm_css$Css$overflow = $rtfeldman$elm_css$Css$prop1('overflow');
var $rtfeldman$elm_css$Css$PercentageUnits = 0;
var $rtfeldman$elm_css$Css$pct = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '%');
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
			var _v4 = z.ag;
			if (_v4.$ === 1) {
				return origLoc;
			} else {
				var pz = _v4.a;
				return A2($author$project$Utils$TouchUtils$applyOffset, pz, origLoc);
			}
		}();
		var _v1 = z.dq;
		var startX = _v1.a;
		var startY = _v1.b;
		var _v2 = z.ej;
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
					A3($elm_explorations$linear_algebra$Math$Matrix4$makeScale3, z.a6, z.a6, 1),
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
var $rtfeldman$elm_css$Css$relative = {et: 0, V: 'relative'};
var $rtfeldman$elm_css$Css$scale = function (x) {
	return {
		eY: 0,
		V: A2(
			$rtfeldman$elm_css$Css$cssFunction,
			'scale',
			_List_fromArray(
				[
					$elm$core$String$fromFloat(x)
				]))
	};
};
var $rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return $elm$core$List$isEmpty(list) ? {V: 'none'} : {
		V: A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				function ($) {
					return $.V;
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
			eY: 0,
			V: A2(
				$rtfeldman$elm_css$Css$cssFunction,
				'translate',
				_List_fromArray(
					[tx.V, ty.V]))
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
						var _v2 = _Utils_Tuple2(imgPos.cu.b8 - imgPos.bd.b8, imgPos.cu.b9 - imgPos.bd.b9);
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
		return {dL: changedTouches, ea: keys, eO: targetTouches, eV: touches};
	});
var $mpizenberg$elm_pointer_events$Internal$Decode$Keys = F3(
	function (alt, ctrl, shift) {
		return {dE: alt, dO: ctrl, aN: shift};
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
		return {co: clientPos, d2: identifier, eo: pagePos, eB: screenPos};
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
						ac: tag(ev),
						ex: options.ex,
						eK: options.eK
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$eventDecoder));
	});
var $author$project$FullImagePage$onTouch = function (touchType) {
	return A2(
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onWithOptions,
		'touch' + touchType,
		{ex: true, eK: false});
};
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
					return $elm$core$String$fromFloat(x.et) + (',' + $elm$core$String$fromFloat(y.et));
				},
				coords));
	};
	switch (cmd.$) {
		case 0:
			var x = cmd.a;
			var y = cmd.b;
			return 'm ' + ($elm$core$String$fromFloat(x.et) + (',' + $elm$core$String$fromFloat(y.et)));
		case 1:
			var x = cmd.a;
			var y = cmd.b;
			return 'M ' + ($elm$core$String$fromFloat(x.et) + (',' + $elm$core$String$fromFloat(y.et)));
		case 2:
			var x = cmd.a;
			var y = cmd.b;
			return 'l ' + ($elm$core$String$fromFloat(x.et) + (',' + $elm$core$String$fromFloat(y.et)));
		case 3:
			var x = cmd.a;
			var y = cmd.b;
			return 'L ' + ($elm$core$String$fromFloat(x.et) + (',' + $elm$core$String$fromFloat(y.et)));
		case 4:
			var a = cmd.a;
			return 'h ' + $elm$core$String$fromFloat(a.et);
		case 5:
			var a = cmd.a;
			return 'H ' + $elm$core$String$fromFloat(a.et);
		case 6:
			var a = cmd.a;
			return 'v ' + $elm$core$String$fromFloat(a.et);
		case 7:
			var a = cmd.a;
			return 'V ' + $elm$core$String$fromFloat(a.et);
		case 8:
			var control1 = cmd.a.aX;
			var control2 = cmd.a.aY;
			var point = cmd.a.M;
			var _v1 = point;
			var p1x = _v1.a;
			var p1y = _v1.b;
			var _v2 = control2;
			var c2x = _v2.a;
			var c2y = _v2.b;
			var _v3 = control1;
			var c1x = _v3.a;
			var c1y = _v3.b;
			return 'c ' + ($elm$core$String$fromFloat(c1x.et) + (' ' + ($elm$core$String$fromFloat(c1y.et) + (', ' + ($elm$core$String$fromFloat(c2x.et) + (' ' + ($elm$core$String$fromFloat(c2y.et) + (', ' + ($elm$core$String$fromFloat(p1x.et) + (' ' + $elm$core$String$fromFloat(p1y.et)))))))))));
		case 9:
			var control1 = cmd.a.aX;
			var control2 = cmd.a.aY;
			var point = cmd.a.M;
			var _v4 = point;
			var p1x = _v4.a;
			var p1y = _v4.b;
			var _v5 = control2;
			var c2x = _v5.a;
			var c2y = _v5.b;
			var _v6 = control1;
			var c1x = _v6.a;
			var c1y = _v6.b;
			return 'C ' + ($elm$core$String$fromFloat(c1x.et) + (' ' + ($elm$core$String$fromFloat(c1y.et) + (', ' + ($elm$core$String$fromFloat(c2x.et) + (' ' + ($elm$core$String$fromFloat(c2y.et) + (', ' + ($elm$core$String$fromFloat(p1x.et) + (' ' + $elm$core$String$fromFloat(p1y.et)))))))))));
		case 10:
			var control = cmd.a.aW;
			var point = cmd.a.M;
			var _v7 = point;
			var p1x = _v7.a;
			var p1y = _v7.b;
			var _v8 = control;
			var c1x = _v8.a;
			var c1y = _v8.b;
			return 'q ' + ($elm$core$String$fromFloat(c1x.et) + (' ' + ($elm$core$String$fromFloat(c1y.et) + (', ' + ($elm$core$String$fromFloat(p1x.et) + (' ' + $elm$core$String$fromFloat(p1y.et)))))));
		case 11:
			var control = cmd.a.aW;
			var point = cmd.a.M;
			var _v9 = point;
			var p1x = _v9.a;
			var p1y = _v9.b;
			var _v10 = control;
			var c1x = _v10.a;
			var c1y = _v10.b;
			return 'Q ' + ($elm$core$String$fromFloat(c1x.et) + (' ' + ($elm$core$String$fromFloat(c1y.et) + (', ' + ($elm$core$String$fromFloat(p1x.et) + (' ' + $elm$core$String$fromFloat(p1y.et)))))));
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
			var deltaAngle = arc.aZ.et - arc.a7.et;
			if (_Utils_cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = arc.a4.et * $elm$core$Basics$sin(
					$elm$core$Basics$degrees(arc.a7.et));
				var dx = arc.a4.et * $elm$core$Basics$cos(
					$elm$core$Basics$degrees(arc.a7.et));
				return 'A ' + ($elm$core$String$fromFloat(arc.a4.et) + (',' + ($elm$core$String$fromFloat(arc.a4.et) + (',0,1,1,' + ($elm$core$String$fromFloat(arc.b8.et - dx) + (',' + ($elm$core$String$fromFloat(arc.b9.et - dy) + (' A ' + ($elm$core$String$fromFloat(arc.a4.et) + (',' + ($elm$core$String$fromFloat(arc.a4.et) + (',0,1,1,' + ($elm$core$String$fromFloat(arc.b8.et + dx) + (',' + $elm$core$String$fromFloat(arc.b9.et + dy)))))))))))))));
			} else {
				return 'A ' + ($elm$core$String$fromFloat(arc.a4.et) + (',' + ($elm$core$String$fromFloat(arc.a4.et) + (' 0 ' + (((deltaAngle >= 180) ? '1' : '0') + (' ' + ('1' + (' ' + ($elm$core$String$fromFloat(
					arc.b8.et + (arc.a4.et * $elm$core$Basics$cos(
						$elm$core$Basics$degrees(arc.aZ.et)))) + (',' + $elm$core$String$fromFloat(
					arc.b9.et + (arc.a4.et * $elm$core$Basics$sin(
						$elm$core$Basics$degrees(arc.aZ.et))))))))))))));
			}
		case 17:
			var arc = cmd.a;
			var deltaAngle = arc.aZ.et - arc.a7.et;
			if (_Utils_cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = arc.a4.et * $elm$core$Basics$sin(
					$elm$core$Basics$degrees(arc.a7.et));
				var dx = arc.a4.et * $elm$core$Basics$cos(
					$elm$core$Basics$degrees(arc.a7.et));
				return 'A ' + ($elm$core$String$fromFloat(arc.a4.et) + (',' + ($elm$core$String$fromFloat(arc.a4.et) + (',0,1,0,' + ($elm$core$String$fromFloat(arc.b8.et - dx) + (',' + ($elm$core$String$fromFloat(arc.b9.et - dy) + (' A ' + ($elm$core$String$fromFloat(arc.a4.et) + (',' + ($elm$core$String$fromFloat(arc.a4.et) + (',0,1,1,' + ($elm$core$String$fromFloat(arc.b8.et + dx) + (',' + $elm$core$String$fromFloat(arc.b9.et + dy)))))))))))))));
			} else {
				return 'A ' + ($elm$core$String$fromFloat(arc.a4.et) + (',' + ($elm$core$String$fromFloat(arc.a4.et) + (' 0 ' + ((((arc.a7.et - arc.aZ.et) >= 180) ? '1' : '0') + (' ' + ('0' + (' ' + ($elm$core$String$fromFloat(
					arc.b8.et + (arc.a4.et * $elm$core$Basics$cos(arc.aZ.et))) + (',' + $elm$core$String$fromFloat(
					arc.b9.et + (arc.a4.et * $elm$core$Basics$sin(arc.aZ.et)))))))))))));
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
					$elm$core$Basics$round(r.et)) + (',' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(g.et)) + (',' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(b.et)) + (',' + ($elm$core$String$fromFloat(a.et) + ')')))))));
			case 2:
				var name = prop.a;
				var inset = prop.b;
				var shadow = prop.c;
				return (inset ? 'inset ' : '') + ($elm$core$String$fromFloat(shadow.J.et) + ('px' + (' ' + ($elm$core$String$fromFloat(shadow.K.et) + ('px' + (' ' + ($elm$core$String$fromFloat(shadow.H.et) + ('px' + (' ' + ((((name === 'text-shadow') || (name === 'drop-shadow')) ? '' : ($elm$core$String$fromFloat(shadow.$7.et) + ('px' + ' '))) + ('rgba(' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(shadow.C.et)) + (', ' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(shadow.z.et)) + (', ' + ($elm$core$String$fromInt(
					$elm$core$Basics$round(shadow.w.et)) + (', ' + ($elm$core$String$fromFloat(shadow.v.et) + ')'))))))))))))))))));
			case 3:
				var x = prop.b;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.et),
					x.eZ);
			case 4:
				var x = prop.b;
				var y = prop.c;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.et),
					_Utils_ap(
						x.eZ,
						_Utils_ap(
							delim,
							_Utils_ap(
								$elm$core$String$fromFloat(y.et),
								y.eZ))));
			case 5:
				var x = prop.b;
				var y = prop.c;
				var z = prop.d;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.et),
					_Utils_ap(
						x.eZ,
						_Utils_ap(
							delim,
							_Utils_ap(
								$elm$core$String$fromFloat(y.et),
								_Utils_ap(
									y.eZ,
									_Utils_ap(
										delim,
										_Utils_ap(
											$elm$core$String$fromFloat(z.et),
											z.eZ)))))));
			case 6:
				var w = prop.b;
				var x = prop.c;
				var y = prop.d;
				var z = prop.e;
				return _Utils_ap(
					$elm$core$String$fromFloat(w.et),
					_Utils_ap(
						w.eZ,
						_Utils_ap(
							delim,
							_Utils_ap(
								$elm$core$String$fromFloat(x.et),
								_Utils_ap(
									x.eZ,
									_Utils_ap(
										delim,
										_Utils_ap(
											$elm$core$String$fromFloat(y.et),
											_Utils_ap(
												y.eZ,
												_Utils_ap(
													delim,
													_Utils_ap(
														$elm$core$String$fromFloat(z.et),
														z.eZ))))))))));
			case 7:
				var x = prop.b;
				return _Utils_ap(
					$elm$core$String$fromFloat(x.et),
					x.eZ);
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
							return $elm$core$String$fromFloat(x.et) + (',' + $elm$core$String$fromFloat(y.et));
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
		return 'rotateX(' + ($elm$core$String$fromFloat(x.et) + (x.eZ + (') rotateY(' + ($elm$core$String$fromFloat(y.et) + (y.eZ + (') rotateZ(' + ($elm$core$String$fromFloat(z.et) + (z.eZ + ')'))))))));
	} else {
		return '';
	}
};
var $mdgriffith$elm_style_animation$Animation$Render$renderValues = function (_v0) {
	var model = _v0;
	var _v1 = A2($elm$core$List$partition, $mdgriffith$elm_style_animation$Animation$Render$isAttr, model.ds);
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
		return A8(
			$author$project$ImageViews$renderPresized,
			0,
			data.b7,
			data.bM,
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
					])),
			$elm$core$Maybe$Nothing);
	});
var $rtfeldman$elm_css$Css$UnitlessInteger = 0;
var $rtfeldman$elm_css$Css$int = function (val) {
	return {
		aa: 0,
		bm: 0,
		an: 0,
		T: 0,
		a3: 0,
		bo: 0,
		af: val,
		aS: '',
		bc: 0,
		V: $elm$core$String$fromInt(val)
	};
};
var $rtfeldman$elm_css$Css$zIndex = $rtfeldman$elm_css$Css$prop1('z-index');
var $rtfeldman$elm_css$Css$zero = {a0: 0, aG: 0, ab: 0, aH: 0, aI: 0, am: 0, an: 0, a3: 0, af: 0, bu: 0, aS: '', bc: 0, V: '0'};
var $author$project$ProgressiveImage$viewLoadingMain = F4(
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
					data.ec,
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
	var data = _v0.a;
	var status = _v0.b;
	var animState = _v0.c;
	switch (status.$) {
		case 0:
			var tried = status.a;
			var trying = status.b;
			var nextup = status.c;
			return A4(
				$author$project$ProgressiveImage$viewImg,
				trying,
				data,
				$author$project$ProgressiveImage$styledAnimation(animState.s),
				_List_Nil);
		case 1:
			return A4(
				$author$project$ProgressiveImage$viewImg,
				data.dZ,
				data,
				$author$project$ProgressiveImage$styledAnimation(animState.s),
				_List_Nil);
		case 2:
			var placeholder = status.a;
			return A4($author$project$ProgressiveImage$viewLoadingMain, data, placeholder, animState.s, animState.I);
		case 3:
			var oldPlaceholder = status.a;
			return A4($author$project$ProgressiveImage$viewLoadingMain, data, oldPlaceholder, animState.s, animState.I);
		default:
			return A4(
				$author$project$ProgressiveImage$viewImg,
				data.ec,
				data,
				$author$project$ProgressiveImage$styledMsgAnimation(animState.I),
				_List_Nil);
	}
};
var $author$project$ProgressiveImage$withWidthHeight = F3(
	function (w, h, _v0) {
		var data = _v0.a;
		var status = _v0.b;
		var animState = _v0.c;
		return A3(
			$author$project$ProgressiveImage$ProgImgModel,
			_Utils_update(
				data,
				{bM: h, b7: w}),
			status,
			animState);
	});
var $author$project$FullImagePage$viewImg = F4(
	function (clickMsg, touchMsgs, wrapProgMsg, fullImagePageModel) {
		var img = fullImagePageModel.g.bN;
		var edgeBehaviour = function () {
			var _v1 = fullImagePageModel.aL;
			if (!_v1.b) {
				var _v2 = fullImagePageModel.g.bO;
				if (!_v2.b) {
					return 2;
				} else {
					return 1;
				}
			} else {
				var _v3 = fullImagePageModel.g.bO;
				if (!_v3.b) {
					return 0;
				} else {
					return 3;
				}
			}
		}();
		var _v0 = A3(
			$author$project$FullImagePage$fitImage,
			img.b0,
			$elm$core$Basics$floor(fullImagePageModel.bd.bd.b7),
			$elm$core$Basics$round(fullImagePageModel.bd.bd.bM * (1 - ($author$project$FullImagePage$imgTitleHeight / 100))));
		var w = _v0.a;
		var h = _v0.b;
		var imgSrc = A4($author$project$ImageViews$smallestImageBiggerThan, w, h, img.b0, img.b1);
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_Utils_ap(
				A3($author$project$FullImagePage$offsetStyles, edgeBehaviour, fullImagePageModel.bl, fullImagePageModel.ej),
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
						A2($author$project$FullImagePage$onTouch, 'start', touchMsgs.eU)),
						$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
						A2($author$project$FullImagePage$onTouch, 'move', touchMsgs.eS)),
						$rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
						A2($author$project$FullImagePage$onTouch, 'end', touchMsgs.eT)),
						$rtfeldman$elm_css$Html$Styled$Events$onClick(clickMsg),
						$rtfeldman$elm_css$Html$Styled$Attributes$id($author$project$AlbumStyles$theImageId)
					])),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$map,
					wrapProgMsg,
					$author$project$ProgressiveImage$view(
						A3($author$project$ProgressiveImage$withWidthHeight, w, h, fullImagePageModel.ey)))
				]));
	});
var $author$project$FullImagePage$view = F7(
	function (navMsgs, touchMsgs, noOpMsg, wrapProgMsg, fullImagePageModel, parents, flags) {
		var xOfY = ' (' + ($elm$core$String$fromInt(
			1 + $elm$core$List$length(fullImagePageModel.aL)) + (' of ' + ($elm$core$String$fromInt(
			($elm$core$List$length(fullImagePageModel.aL) + 1) + $elm$core$List$length(fullImagePageModel.g.bO)) + ')')));
		return A6(
			$author$project$AlbumStyles$rootDivFlex,
			flags,
			$rtfeldman$elm_css$Css$column,
			$elm$core$Maybe$Nothing,
			fullImagePageModel.bd,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$overflow($rtfeldman$elm_css$Css$hidden),
					$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
					A2($rtfeldman$elm_css$Css$property, 'justify-content', 'center')
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
										$rtfeldman$elm_css$Css$px(($author$project$FullImagePage$imgTitleHeight / 100) * fullImagePageModel.bd.bd.bM))
									]))
							]),
						_List_fromArray(
							[
								A5(
								$author$project$ThumbPage$albumTitle,
								_Utils_ap(fullImagePageModel.g.bN.bC, xOfY),
								parents,
								navMsgs.eF,
								_List_fromArray(
									[
										A3(
										$author$project$ThumbPage$albumParent,
										$author$project$FullImagePage$getAlbumTitle,
										$elm$core$Basics$always(navMsgs.dH),
										fullImagePageModel.g)
									]),
								_List_Nil)
							])),
						A4($author$project$FullImagePage$viewImg, navMsgs.ei, touchMsgs, wrapProgMsg, fullImagePageModel)
					]),
				_Utils_ap(
					A4($author$project$FullImagePage$navEltIf, fullImagePageModel.aL, navMsgs.ew, '<', $rtfeldman$elm_css$Css$left),
					_Utils_ap(
						A4($author$project$FullImagePage$navEltIf, fullImagePageModel.g.bO, navMsgs.ei, '>', $rtfeldman$elm_css$Css$right),
						_List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Html$Styled$div,
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
												]))),
										$rtfeldman$elm_css$Html$Styled$Events$onClick(navMsgs.dH)
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
													$rtfeldman$elm_css$Css$px((fullImagePageModel.bd.bd.bM - $author$project$AlbumStyles$navEltSize) - 5)),
													$rtfeldman$elm_css$Css$right(
													$rtfeldman$elm_css$Css$px(5)),
													$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none)
												]))),
										$rtfeldman$elm_css$Html$Styled$Attributes$href(
										$author$project$Utils$ListUtils$encodePath(fullImagePageModel.g.bN.b0.b6)),
										$rtfeldman$elm_css$Html$Styled$Attributes$target('_blank')
									]),
								_List_fromArray(
									[
										$rtfeldman$elm_css$Html$Styled$text('⤓')
									]))
							])))));
	});
var $rtfeldman$elm_css$Css$flexShrink = $rtfeldman$elm_css$Css$prop1('flex-shrink');
var $rtfeldman$elm_css$Css$UnitlessFloat = 0;
var $rtfeldman$elm_css$Css$num = function (val) {
	return {
		an: 0,
		T: 0,
		a3: 0,
		bo: 0,
		af: val,
		aS: '',
		bc: 0,
		V: $elm$core$String$fromFloat(val)
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
	var is1 = img.b0;
	return $elm$core$Basics$round(is1.b9 * (1000 / is1.b8));
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
var $author$project$AlbumStyles$Completed = {$: 2};
var $author$project$AlbumStyles$Partial = function (a) {
	return {$: 1, a: a};
};
var $rtfeldman$elm_css$Css$borderBottomWidth = $rtfeldman$elm_css$Css$prop1('border-bottom-width');
var $rtfeldman$elm_css$Css$borderColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-color', c.V);
};
var $rtfeldman$elm_css$Css$borderLeftWidth = $rtfeldman$elm_css$Css$prop1('border-left-width');
var $rtfeldman$elm_css$Css$borderRightWidth = $rtfeldman$elm_css$Css$prop1('border-right-width');
var $rtfeldman$elm_css$Css$borderStyle = $rtfeldman$elm_css$Css$prop1('border-style');
var $rtfeldman$elm_css$Css$borderTopWidth = $rtfeldman$elm_css$Css$prop1('border-top-width');
var $author$project$ThumbPage$grey = A3($rtfeldman$elm_css$Css$rgb, 128, 128, 128);
var $rtfeldman$elm_css$Css$solid = {x: 0, at: 0, V: 'solid'};
var $author$project$ThumbPage$stubThumb = F2(
	function (width, img) {
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
							$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
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
					$rtfeldman$elm_css$Html$Styled$text('...')
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
			bg: animation,
			bi: $elm$core$Maybe$Just(delay),
			bG: duration,
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
					var animation = _v0.bg;
					var duration = _v0.bG;
					var delay = _v0.bi;
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
	switch (imgLoadedState.$) {
		case 0:
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$opacity(
					$rtfeldman$elm_css$Css$num(0))
				]);
		case 1:
			var _int = imgLoadedState.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$opacity(
					$rtfeldman$elm_css$Css$num(0))
				]);
		case 2:
			return $author$project$AlbumStyles$opacityAnimatedTo(1);
		case 3:
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$opacity(
					$rtfeldman$elm_css$Css$num(1))
				]);
		default:
			return $author$project$AlbumStyles$opacityAnimatedTo(0);
	}
};
var $author$project$ThumbPage$viewThumb = F5(
	function (width, opasity, extraStyles, selectedMsg, img) {
		var _v0 = A2($author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _v0.a;
		var yScaled = _v0.b;
		return A8(
			$author$project$ImageViews$renderPresized,
			10,
			xScaled,
			yScaled,
			img.b0,
			img.b1,
			_Utils_ap(
				$author$project$ThumbPage$thumbStyles,
				_Utils_ap(
					$author$project$AlbumStyles$opacityStyles(opasity),
					extraStyles)),
			_List_Nil,
			$elm$core$Maybe$Just(selectedMsg));
	});
var $author$project$ThumbPage$viewThumbColumn = F5(
	function (thumbWidth, imgChosenMsgr, justLoadedImages, readyToDisplayImages, images) {
		var viewThumbTuple = function (_v0) {
			var img = _v0.a;
			var i = _v0.b;
			var src = A2($author$project$ThumbPage$srcForWidth, thumbWidth, img);
			if (A2(
				$elm$core$Set$member,
				src.b6,
				A2($elm$core$Set$union, justLoadedImages, readyToDisplayImages))) {
				var opacity = A2($elm$core$Set$member, src.b6, justLoadedImages) ? $author$project$AlbumStyles$Partial(
					_Utils_Tuple2(99, $elm$core$Maybe$Nothing)) : $author$project$AlbumStyles$Completed;
				return A5(
					$author$project$ThumbPage$viewThumb,
					thumbWidth,
					opacity,
					_List_Nil,
					imgChosenMsgr(i),
					img);
			} else {
				return A2($author$project$ThumbPage$stubThumb, thumbWidth, img);
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
var $author$project$ThumbPage$viewThumbs = F2(
	function (imgChosenMsgr, thumbPageModel) {
		var imgs = A2($elm$core$List$cons, thumbPageModel.g.bN, thumbPageModel.g.bO);
		var _v0 = $author$project$ThumbPage$colsWidth(thumbPageModel.dI);
		var maxCols = _v0.a;
		var thumbWidth = _v0.b;
		return A2(
			$elm$core$List$map,
			A4(
				$author$project$ThumbPage$viewThumbColumn,
				thumbWidth,
				A3($author$project$ThumbPage$convertImgChosenMsgr, thumbPageModel.g.bN, imgs, imgChosenMsgr),
				thumbPageModel.a$,
				thumbPageModel.ar),
			A3($author$project$ThumbPage$spreadThumbs, maxCols, imgs, _List_Nil));
	});
var $rtfeldman$elm_css$Css$visibility = $rtfeldman$elm_css$Css$prop1('visibility');
var $author$project$ThumbPage$view = F5(
	function (scrollMsgMaker, imgChosenMsgr, showList, thumbPageModel, flags) {
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
					A5(
					$author$project$ThumbPage$albumTitle,
					thumbPageModel.g.b5,
					thumbPageModel.bY,
					showList,
					_List_Nil,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$fixed)
						])),
					A5(
					$author$project$ThumbPage$albumTitle,
					thumbPageModel.g.b5,
					thumbPageModel.bY,
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
					A2($author$project$ThumbPage$viewThumbs, imgChosenMsgr, thumbPageModel))
				]));
	});
var $author$project$AlbumPage$view = F6(
	function (albumPage, scrollMsgMaker, showList, wrapMsg, parents, flags) {
		if (!albumPage.$) {
			var th = albumPage.a;
			return A5(
				$author$project$ThumbPage$view,
				scrollMsgMaker,
				function (x) {
					return function (y) {
						return function (z) {
							return wrapMsg(
								A3($author$project$AlbumPage$View, x, y, z));
						};
					};
				},
				showList,
				{g: th.g, dI: th.l.dI, a$: th.a$, bY: parents, ar: th.ar, a5: th.l.a5},
				flags);
		} else {
			var fi = albumPage.a;
			return A7(
				$author$project$FullImagePage$view,
				{
					dH: wrapMsg($author$project$AlbumPage$BackToThumbs),
					ei: wrapMsg($author$project$AlbumPage$Next),
					ew: wrapMsg($author$project$AlbumPage$Prev),
					eF: showList
				},
				{
					eS: A2($elm$core$Basics$composeL, wrapMsg, $author$project$AlbumPage$TouchDragContinue),
					eT: A2(
						$elm$core$Basics$composeL,
						wrapMsg,
						$author$project$AlbumPage$touchPrevNext(fi.P)),
					eU: A2($elm$core$Basics$composeL, wrapMsg, $author$project$AlbumPage$TouchDragStart)
				},
				wrapMsg($author$project$AlbumPage$NoUpdate),
				A2($elm$core$Basics$composeL, wrapMsg, $author$project$AlbumPage$FullMsg),
				{
					g: fi.g,
					bl: fi.bl,
					ej: $author$project$Utils$TouchUtils$getOffset(fi.P),
					aL: fi.aL,
					ey: fi.aq,
					bd: fi.l.dI
				},
				parents,
				flags);
		}
	});
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
var $author$project$Main$viewList = F4(
	function (oldModel, viewport, parents, list) {
		return A2(
			$author$project$Main$ViewList,
			{
				bf: list,
				dI: viewport,
				bY: A2(
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
			}());
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
				return prefix + (': sent ' + A2(pct, s.eD, s.$7));
			} else {
				var r = progress.a;
				var _v2 = r.$7;
				if (_v2.$ === 1) {
					return prefix + (': ' + ($elm$core$String$fromInt(r.df) + ' bytes received'));
				} else {
					var size = _v2.a;
					return prefix + (': received ' + A2(pct, r.df, size));
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
var $author$project$Main$viewImpl = function (albumBootstrap) {
	switch (albumBootstrap.$) {
		case 0:
			return $rtfeldman$elm_css$Html$Styled$text('Album Starting');
		case 1:
			return $rtfeldman$elm_css$Html$Styled$text('Home Loading ...');
		case 2:
			var ld = albumBootstrap.a;
			return $rtfeldman$elm_css$Html$Styled$text(
				A2($author$project$Utils$HttpUtils$viewProgress, 'Album Loading', ld.bv));
		case 3:
			var le = albumBootstrap.a;
			var eStr = function () {
				var _v1 = le.cw;
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
		case 5:
			var la = albumBootstrap.a;
			return A3(
				$author$project$Main$withHomeLink,
				la.A,
				la.j,
				A6(
					$author$project$AlbumPage$view,
					la.i,
					$author$project$Main$RawScrolledTo,
					A3(
						$author$project$Main$viewList,
						albumBootstrap,
						$author$project$AlbumPage$pageSize(la.i).dI,
						la.bY),
					$author$project$Main$PageMsg,
					A2($elm$core$List$map, $elm$core$Tuple$first, la.bY),
					la.j));
		default:
			var ll = albumBootstrap.a;
			var _v2 = ll.F;
			var alp = _v2;
			return A3(
				$author$project$Main$withHomeLink,
				ll.A,
				ll.j,
				A5(
					$author$project$AlbumListPage$view,
					alp,
					A3(
						$author$project$Main$viewList,
						albumBootstrap,
						alp.dI,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								alp.bf,
								A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, ll.a5)),
							alp.bY)),
					function (album) {
						return A2(
							$author$project$Main$ViewAlbum,
							$author$project$AlbumPage$Thumbs(
								{
									g: album,
									a$: $elm$core$Set$empty,
									ar: $elm$core$Set$empty,
									l: {dI: alp.dI, a5: ll.a5}
								}),
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									alp.bf,
									A2($elm$core$Maybe$map, $author$project$Utils$ViewportUtils$scrollPosOf, ll.a5)),
								alp.bY));
					},
					$author$project$Main$RawScrolledTo,
					ll.j));
	}
};
var $author$project$Main$view = function (albumBootstrap) {
	var title = function () {
		switch (albumBootstrap.$) {
			case 0:
				return 'Album Starting';
			case 1:
				return 'Home Loading ...';
			case 2:
				var ld = albumBootstrap.a;
				return A2($author$project$Utils$HttpUtils$viewProgress, 'Album Loading', ld.bv);
			case 3:
				return 'Error Loading Album';
			case 4:
				var ll = albumBootstrap.a;
				var _v1 = ll.F;
				var alp = _v1;
				return alp.bf.bS;
			default:
				var la = albumBootstrap.a;
				return $author$project$AlbumPage$titleOf(la.i);
		}
	}();
	return {
		cj: _List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$toUnstyled(
				$author$project$Main$viewImpl(albumBootstrap))
			]),
		b5: title
	};
};
var $author$project$Main$main = $author$project$RouteUrl$programWithFlags(
	{dT: $author$project$Main$locFor, d4: $author$project$Main$init, eb: $author$project$Main$navToMsg, em: $author$project$Main$LinkClicked, eM: $author$project$Main$subscriptions, e_: $author$project$Main$update, e1: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (scrollSupport) {
			return $elm$json$Json$Decode$succeed(
				{dn: scrollSupport});
		},
		A2($elm$json$Json$Decode$field, 'scrollSupport', $elm$json$Json$Decode$bool)))(0)}});}(this));