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
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
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
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
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
	if (region.dD.aN === region.c0.aN)
	{
		return 'on line ' + region.dD.aN;
	}
	return 'on lines ' + region.dD.aN + ' through ' + region.c0.aN;
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
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
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
	if (!x.$)
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
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
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
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
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



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
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
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**_UNUSED/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
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

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
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
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
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
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
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
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
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

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
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
		impl.da,
		impl.dN,
		impl.dF,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

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
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
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
		cj: func(record.cj),
		bD: record.bD,
		bx: record.bx
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
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
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
		value
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

		value
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
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
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

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.cj;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bD;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bx) && event.preventDefault(),
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
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
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
		impl.da,
		impl.dN,
		impl.dF,
		function(sendToApp, initialModel) {
			var view = impl.dQ;
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
		impl.da,
		impl.dN,
		impl.dF,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.aP && impl.aP(sendToApp)
			var view = impl.dQ;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.bd);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.bG) && (_VirtualDom_doc.title = title = doc.bG);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


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
	var onUrlChange = impl.$7;
	var onUrlRequest = impl.dp;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		aP: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.cx === next.cx
							&& curr.cb === next.cb
							&& curr.cs.a === next.cs.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		da: function(flags)
		{
			return A3(impl.da, flags, _Browser_getUrl(), key);
		},
		dQ: impl.dQ,
		dN: impl.dN,
		dF: impl.dF
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
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
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { c6: 'hidden', aG: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { c6: 'mozHidden', aG: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { c6: 'msHidden', aG: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { c6: 'webkitHidden', aG: 'webkitvisibilitychange' }
		: { c6: 'hidden', aG: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
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
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
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
		cE: _Browser_getScene(),
		ae: {
			bJ: _Browser_window.pageXOffset,
			bK: _Browser_window.pageYOffset,
			bI: _Browser_doc.documentElement.clientWidth,
			bl: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		bI: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bl: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			cE: {
				bI: node.scrollWidth,
				bl: node.scrollHeight
			},
			ae: {
				bJ: node.scrollLeft,
				bK: node.scrollTop,
				bI: node.clientWidth,
				bl: node.clientHeight
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
			cE: _Browser_getScene(),
			ae: {
				bJ: x,
				bK: y,
				bI: _Browser_doc.documentElement.clientWidth,
				bl: _Browser_doc.documentElement.clientHeight
			},
			c$: {
				bJ: x + rect.left,
				bK: y + rect.top,
				bI: rect.width,
				bl: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
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
		return elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return elm$core$Maybe$Nothing;
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

var _Http_toTask = F2(function(request, maybeProgress)
{
	return _Scheduler_binding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		_Http_configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_Scheduler_fail(elm$http$Http$NetworkError));
		});
		xhr.addEventListener('timeout', function() {
			callback(_Scheduler_fail(elm$http$Http$Timeout));
		});
		xhr.addEventListener('load', function() {
			callback(_Http_handleResponse(xhr, request.c1.a));
		});

		try
		{
			xhr.open(request.di, request.bH, true);
		}
		catch (e)
		{
			return callback(_Scheduler_fail(elm$http$Http$BadUrl(request.bH)));
		}

		_Http_configureRequest(xhr, request);

		var body = request.bd;
		xhr.send(elm$http$Http$Internal$isStringBody(body)
			? (xhr.setRequestHeader('Content-Type', body.a), body.b)
			: body.a
		);

		return function() { xhr.abort(); };
	});
});

function _Http_configureProgress(xhr, maybeProgress)
{
	if (!elm$core$Maybe$isJust(maybeProgress))
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_Scheduler_rawSpawn(maybeProgress.a({
			bV: event.loaded,
			bW: event.total
		}));
	});
}

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.c5; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}

	xhr.responseType = request.c1.b;
	xhr.withCredentials = request.dR;

	elm$core$Maybe$isJust(request.dH) && (xhr.timeout = request.dH.a);
}


// RESPONSES

function _Http_handleResponse(xhr, responseToResult)
{
	var response = _Http_toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _Scheduler_fail(elm$http$Http$BadStatus(response));
	}

	var result = responseToResult(response);

	if (elm$core$Result$isOk(result))
	{
		return _Scheduler_succeed(result.a);
	}
	else
	{
		response.body = xhr.responseText;
		return _Scheduler_fail(A2(elm$http$Http$BadPayload, result.a, response));
	}
}

function _Http_toResponse(xhr)
{
	return {
		bH: xhr.responseURL,
		bB: { cV: xhr.status, cj: xhr.statusText },
		c5: _Http_parseHeaders(xhr.getAllResponseHeaders()),
		bd: xhr.response
	};
}

function _Http_parseHeaders(rawHeaders)
{
	var headers = elm$core$Dict$empty;

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

			headers = A3(elm$core$Dict$update, key, function(oldValue) {
				return elm$core$Maybe$Just(elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function _Http_expectStringResponse(responseToResult)
{
	return {
		$: 0,
		b: 'text',
		a: responseToResult
	};
}

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		b: expect.b,
		a: function(response) {
			var convertedResponse = expect.a(response);
			return A2(elm$core$Result$map, func, convertedResponse);
		}
	};
});


// BODY

function _Http_multipart(parts)
{


	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}

	return elm$http$Http$Internal$FormDataBody(formData);
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
var author$project$Main$LinkClicked = function (a) {
	return {$: 20, a: a};
};
var author$project$Main$Resize = function (a) {
	return {$: 0, a: a};
};
var author$project$Main$Sizing = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$Dom$NotFound = elm$core$Basics$identity;
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$Basics$False = 1;
var elm$core$Basics$True = 0;
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = 1;
var elm$core$Basics$LT = 0;
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = 2;
var elm$core$Dict$foldr = F3(
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
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(0);
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
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
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
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
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
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
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.j) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.l),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.l);
		} else {
			var treeLen = builder.j * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.n) : builder.n;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.j);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.l) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.l);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{n: nodeList, j: (len / elm$core$Array$branchFactor) | 0, l: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
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
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 1) {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
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
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
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
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
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
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return 0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0;
		return A2(elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
	});
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
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
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = 0;
var elm$url$Url$Https = 1;
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {bk: fragment, cb: host, cp: path, cs: port_, cx: protocol, by: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 1) {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		0,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		1,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var author$project$Main$init = F2(
	function (flags, key) {
		return _Utils_Tuple2(
			A4(author$project$Main$Sizing, key, flags, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing),
			A2(elm$core$Task$perform, author$project$Main$Resize, elm$browser$Browser$Dom$getViewport));
	});
var author$project$DebugSupport$log = F2(
	function (str, val) {
		return val;
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$drop = F2(
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
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var elm$url$Url$percentEncode = _Url_percentEncode;
var author$project$Main$hashFromAlbumPath = F3(
	function (model, titles, parents) {
		return elm$core$String$concat(
			A2(
				elm$core$List$intersperse,
				'/',
				A2(
					elm$core$List$map,
					elm$url$Url$percentEncode,
					A2(
						elm$core$List$append,
						A2(
							elm$core$List$map,
							function (p) {
								return p.br;
							},
							A2(
								elm$core$List$drop,
								1,
								elm$core$List$reverse(parents))),
						titles))));
	});
var author$project$Main$hashForAlbum = F3(
	function (model, albumPage, parents) {
		var titles = function () {
			if (!albumPage.$) {
				var album = albumPage.a;
				return _List_fromArray(
					[album.bG]);
			} else {
				var album = albumPage.b;
				return _List_fromArray(
					[album.bG, album.bm.bb]);
			}
		}();
		return A3(author$project$Main$hashFromAlbumPath, model, titles, parents);
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var author$project$Main$hashForList = F2(
	function (model, _n0) {
		var albumList = _n0.a;
		var parents = _n0.c;
		return elm$core$List$isEmpty(parents) ? A3(
			author$project$Main$hashFromAlbumPath,
			model,
			_List_fromArray(
				['']),
			_List_Nil) : A3(
			author$project$Main$hashFromAlbumPath,
			model,
			_List_fromArray(
				[albumList.br]),
			A2(elm$core$List$map, elm$core$Tuple$first, parents));
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$String$fromFloat = _String_fromNumber;
var author$project$Main$queryFor = function (model) {
	var queryForPos = function (pos) {
		return A2(
			elm$core$Maybe$withDefault,
			'',
			A2(
				elm$core$Maybe$map,
				function (p) {
					return 's=' + elm$core$String$fromFloat(p);
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
			var pos = model.g;
			return queryForPos(pos);
		default:
			var pos = model.f;
			return queryForPos(pos);
	}
};
var author$project$RouteUrl$ModifyEntry = 1;
var author$project$RouteUrl$NewEntry = 0;
var author$project$RouteUrl$NewFragment = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$RouteUrl$NewQuery = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Main$locFor = F2(
	function (oldModel, newModel) {
		var newQorF = F3(
			function (meta, modl, fragment) {
				var _n7 = author$project$Main$queryFor(modl);
				if (_n7 === '') {
					return A2(author$project$RouteUrl$NewFragment, meta, fragment);
				} else {
					var q = _n7;
					return A2(
						author$project$RouteUrl$NewQuery,
						meta,
						{
							bk: elm$core$Maybe$Just(fragment),
							by: q
						});
				}
			});
		var model = newModel;
		var entry = function () {
			switch (oldModel.$) {
				case 4:
					var oAlbumListPage = oldModel.b;
					if (newModel.$ === 4) {
						var nAlbumListPage = newModel.b;
						var _n4 = _Utils_eq(oAlbumListPage, nAlbumListPage);
						if (_n4) {
							return A2(author$project$DebugSupport$log, 'locFor LoadedList same', 1);
						} else {
							return A2(author$project$DebugSupport$log, 'locFor LoadedList dift', 0);
						}
					} else {
						return A2(author$project$DebugSupport$log, 'locFor LoadedList -> something else', 0);
					}
				case 5:
					var oAlbumPage = oldModel.b;
					var oParents = oldModel.c;
					if (newModel.$ === 5) {
						var nAlbumPage = newModel.b;
						var nParents = newModel.c;
						var _n6 = _Utils_eq(oAlbumPage, nAlbumPage) && _Utils_eq(oParents, nParents);
						if (_n6) {
							return A2(author$project$DebugSupport$log, 'locFor LoadedAlbum same', 1);
						} else {
							return A2(author$project$DebugSupport$log, 'locFor LoadedAlbum dift', 0);
						}
					} else {
						return A2(author$project$DebugSupport$log, 'locFor LoadedAlbum -> something else', 0);
					}
				default:
					return A2(author$project$DebugSupport$log, 'locFor something els -> *', 0);
			}
		}();
		var checkNavState = F2(
			function (state, nav) {
				var _n1 = A2(author$project$DebugSupport$log, 'checkNavState', state);
				if (!_n1) {
					return elm$core$Maybe$Nothing;
				} else {
					return nav;
				}
			});
		return A2(
			author$project$DebugSupport$log,
			'locFor',
			function () {
				switch (model.$) {
					case 5:
						var key = model.a;
						var albumPage = model.b;
						var parents = model.c;
						var postLoadNavState = model.h;
						return A2(
							checkNavState,
							postLoadNavState,
							elm$core$Maybe$Just(
								A3(
									newQorF,
									{b5: entry, ci: key},
									model,
									A3(
										author$project$Main$hashForAlbum,
										model,
										albumPage,
										A2(elm$core$List$map, elm$core$Tuple$first, parents)))));
					case 4:
						var key = model.a;
						var albumListPage = model.b;
						var postLoadNavState = model.g;
						return A2(
							checkNavState,
							postLoadNavState,
							elm$core$Maybe$Just(
								A3(
									newQorF,
									{b5: entry, ci: key},
									model,
									A2(author$project$Main$hashForList, model, albumListPage))));
					default:
						return elm$core$Maybe$Nothing;
				}
			}());
	});
var author$project$ListUtils$fromMaybe = function (m) {
	if (m.$ === 1) {
		return _List_Nil;
	} else {
		var x = m.a;
		return _List_fromArray(
			[x]);
	}
};
var elm$core$Basics$neq = _Utils_notEqual;
var elm$parser$Parser$Optional = 1;
var elm$parser$Parser$Advanced$Parser = elm$core$Basics$identity;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.dn, offset) < 0,
					0,
					{b1: col, e: s0.e, f: s0.f, dn: offset, cD: row, a: s0.a});
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
var elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5(elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.dn, s.cD, s.b1, s);
	};
};
var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
var elm$parser$Parser$ExpectingEnd = {$: 10};
var elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {b1: col, cW: contextStack, ct: problem, cD: row};
	});
var elm$parser$Parser$Advanced$Empty = {$: 0};
var elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, s.cD, s.b1, x, s.e));
	});
var elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			elm$core$String$length(s.a),
			s.dn) ? A3(elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var elm$parser$Parser$end = elm$parser$Parser$Advanced$end(elm$parser$Parser$ExpectingEnd);
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3(elm$core$String$slice, s0.dn, s1.dn, s0.a),
						a),
					s1);
			}
		};
	});
var elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2(elm$parser$Parser$Advanced$mapChompedString, elm$core$Basics$always, parser);
};
var elm$parser$Parser$getChompedString = elm$parser$Parser$Advanced$getChompedString;
var elm$parser$Parser$Advanced$map2 = F3(
	function (func, _n0, _n1) {
		var parseA = _n0;
		var parseB = _n1;
		return function (s0) {
			var _n2 = parseA(s0);
			if (_n2.$ === 1) {
				var p = _n2.a;
				var x = _n2.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n2.a;
				var a = _n2.b;
				var s1 = _n2.c;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$always, keepParser, ignoreParser);
	});
var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
var elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$apL, parseFunc, parseArg);
	});
var elm$parser$Parser$keeper = elm$parser$Parser$Advanced$keeper;
var elm$parser$Parser$Advanced$map = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var elm$parser$Parser$map = elm$parser$Parser$Advanced$map;
var elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2(elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _n1 = parse(s0);
				if (!_n1.$) {
					var step = _n1;
					return step;
				} else {
					var step = _n1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2(elm$parser$Parser$Advanced$Append, bag, x),
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
var elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$oneOfHelp, s, elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var elm$parser$Parser$oneOf = elm$parser$Parser$Advanced$oneOf;
var elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {b1: col, ct: problem, cD: row};
	});
var elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3(elm$parser$Parser$DeadEnd, p.cD, p.b1, p.ct);
};
var elm$parser$Parser$Advanced$bagToList = F2(
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
						$temp$list = A2(elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var elm$parser$Parser$Advanced$run = F2(
	function (_n0, src) {
		var parse = _n0;
		var _n1 = parse(
			{b1: 1, e: _List_Nil, f: 1, dn: 0, cD: 1, a: src});
		if (!_n1.$) {
			var value = _n1.b;
			return elm$core$Result$Ok(value);
		} else {
			var bag = _n1.b;
			return elm$core$Result$Err(
				A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var elm$parser$Parser$run = F2(
	function (parser, source) {
		var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
		if (!_n0.$) {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var problems = _n0.a;
			return elm$core$Result$Err(
				A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var elm$parser$Parser$Advanced$Forbidden = 0;
var elm$parser$Parser$Advanced$Mandatory = 2;
var elm$parser$Parser$Advanced$Optional = 1;
var elm$parser$Parser$toAdvancedTrailing = function (trailing) {
	switch (trailing) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			return 2;
	}
};
var elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$parser$Parser$toToken = function (str) {
	return A2(
		elm$parser$Parser$Advanced$Token,
		str,
		elm$parser$Parser$Expecting(str));
};
var elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _n0) {
		var parseA = _n0;
		return function (s0) {
			var _n1 = parseA(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				var _n2 = callback(a);
				var parseB = _n2;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _n0 = callback(state);
			var parse = _n0;
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p1 = _n1.a;
				var step = _n1.b;
				var s1 = _n1.c;
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
					return A3(elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4(elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$Advanced$revAlways = F2(
	function (_n0, b) {
		return b;
	});
var elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var elm$parser$Parser$Advanced$sequenceEndForbidden = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				elm$parser$Parser$Advanced$sequenceEndForbidden,
				ender,
				ws,
				parseItem,
				sep,
				A2(elm$core$List$cons, item, revItems));
		};
		return A2(
			elm$parser$Parser$Advanced$skip,
			ws,
			elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								elm$parser$Parser$Advanced$map,
								function (item) {
									return elm$parser$Parser$Advanced$Loop(
										A2(elm$core$List$cons, item, revItems));
								},
								parseItem))),
						A2(
						elm$parser$Parser$Advanced$map,
						function (_n0) {
							return elm$parser$Parser$Advanced$Done(
								elm$core$List$reverse(revItems));
						},
						ender)
					])));
	});
var elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var elm$parser$Parser$Advanced$sequenceEndMandatory = F4(
	function (ws, parseItem, sep, revItems) {
		return elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					elm$parser$Parser$Advanced$map,
					function (item) {
						return elm$parser$Parser$Advanced$Loop(
							A2(elm$core$List$cons, item, revItems));
					},
					A2(
						elm$parser$Parser$Advanced$ignorer,
						parseItem,
						A2(
							elm$parser$Parser$Advanced$ignorer,
							ws,
							A2(elm$parser$Parser$Advanced$ignorer, sep, ws)))),
					A2(
					elm$parser$Parser$Advanced$map,
					function (_n0) {
						return elm$parser$Parser$Advanced$Done(
							elm$core$List$reverse(revItems));
					},
					elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var elm$parser$Parser$Advanced$sequenceEndOptional = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var parseEnd = A2(
			elm$parser$Parser$Advanced$map,
			function (_n0) {
				return elm$parser$Parser$Advanced$Done(
					elm$core$List$reverse(revItems));
			},
			ender);
		return A2(
			elm$parser$Parser$Advanced$skip,
			ws,
			elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							elm$parser$Parser$Advanced$skip,
							ws,
							elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										elm$parser$Parser$Advanced$map,
										function (item) {
											return elm$parser$Parser$Advanced$Loop(
												A2(elm$core$List$cons, item, revItems));
										},
										parseItem),
										parseEnd
									])))),
						parseEnd
					])));
	});
var elm$parser$Parser$Advanced$sequenceEnd = F5(
	function (ender, ws, parseItem, sep, trailing) {
		var chompRest = function (item) {
			switch (trailing) {
				case 0:
					return A2(
						elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4(elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
				case 1:
					return A2(
						elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4(elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
				default:
					return A2(
						elm$parser$Parser$Advanced$ignorer,
						A2(
							elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								elm$parser$Parser$Advanced$skip,
								sep,
								A2(
									elm$parser$Parser$Advanced$skip,
									ws,
									A2(
										elm$parser$Parser$Advanced$loop,
										_List_fromArray(
											[item]),
										A3(elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))),
						ender);
			}
		};
		return elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
					A2(
					elm$parser$Parser$Advanced$map,
					function (_n0) {
						return _List_Nil;
					},
					ender)
				]));
	});
var elm$core$Basics$not = _Basics_not;
var elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var elm$parser$Parser$Advanced$token = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(str);
	return function (s) {
		var _n1 = A5(elm$parser$Parser$Advanced$isSubString, str, s.dn, s.cD, s.b1, s.a);
		var newOffset = _n1.a;
		var newRow = _n1.b;
		var newCol = _n1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{b1: newCol, e: s.e, f: s.f, dn: newOffset, cD: newRow, a: s.a});
	};
};
var elm$parser$Parser$Advanced$sequence = function (i) {
	return A2(
		elm$parser$Parser$Advanced$skip,
		elm$parser$Parser$Advanced$token(i.dD),
		A2(
			elm$parser$Parser$Advanced$skip,
			i.dC,
			A5(
				elm$parser$Parser$Advanced$sequenceEnd,
				elm$parser$Parser$Advanced$token(i.c0),
				i.dC,
				i.dd,
				elm$parser$Parser$Advanced$token(i.dA),
				i.dL)));
};
var elm$parser$Parser$sequence = function (i) {
	return elm$parser$Parser$Advanced$sequence(
		{
			c0: elm$parser$Parser$toToken(i.c0),
			dd: i.dd,
			dA: elm$parser$Parser$toToken(i.dA),
			dC: i.dC,
			dD: elm$parser$Parser$toToken(i.dD),
			dL: elm$parser$Parser$toAdvancedTrailing(i.dL)
		});
};
var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
var elm$url$Url$percentDecode = _Url_percentDecode;
var author$project$LocationUtils$parseHash = function (href) {
	var hashParser = elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(_List_Nil),
				elm$parser$Parser$end),
				A2(
				elm$parser$Parser$keeper,
				elm$parser$Parser$succeed(elm$core$Basics$identity),
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$sequence(
						{
							c0: '',
							dd: A2(
								elm$parser$Parser$map,
								function (p) {
									return A2(
										elm$core$Maybe$withDefault,
										p,
										elm$url$Url$percentDecode(p));
								},
								elm$parser$Parser$getChompedString(
									A2(
										elm$parser$Parser$ignorer,
										elm$parser$Parser$succeed(0),
										elm$parser$Parser$chompWhile(
											function (c) {
												return c !== '/';
											})))),
							dA: '/',
							dC: elm$parser$Parser$succeed(0),
							dD: '',
							dL: 1
						}),
					elm$parser$Parser$end))
			]));
	return A2(elm$parser$Parser$run, hashParser, href);
};
var elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var elm$parser$Parser$Advanced$symbol = elm$parser$Parser$Advanced$token;
var elm$parser$Parser$symbol = function (str) {
	return elm$parser$Parser$Advanced$symbol(
		A2(
			elm$parser$Parser$Advanced$Token,
			str,
			elm$parser$Parser$ExpectingSymbol(str)));
};
var author$project$LocationUtils$parseQuery = function (query) {
	var qParser = elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(elm$core$Maybe$Nothing),
				elm$parser$Parser$end),
				A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$Maybe$Just),
					elm$parser$Parser$symbol('s=')),
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$getChompedString(
						A2(
							elm$parser$Parser$ignorer,
							elm$parser$Parser$succeed(0),
							elm$parser$Parser$chompWhile(
								function (_n0) {
									return true;
								}))),
					elm$parser$Parser$end))
			]));
	return A2(elm$parser$Parser$run, qParser, query);
};
var author$project$Main$Nav = function (a) {
	return {$: 16, a: a};
};
var author$project$Main$NoBootstrap = {$: 21};
var author$project$Main$Scroll = function (a) {
	return {$: 17, a: a};
};
var author$project$Main$Sequence = F2(
	function (a, b) {
		return {$: 18, a: a, b: b};
	});
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$String$toFloat = _String_toFloat;
var author$project$Main$navToMsg = function (loc) {
	var parsedQuery = A2(
		author$project$DebugSupport$log,
		'parsedQuery from ' + A2(elm$core$Maybe$withDefault, '<no query>', loc.by),
		author$project$LocationUtils$parseQuery(
			A2(elm$core$Maybe$withDefault, '', loc.by)));
	var queryMsgs = function () {
		if (parsedQuery.$ === 1) {
			return _List_Nil;
		} else {
			var scroll = parsedQuery.a;
			return A2(
				elm$core$List$cons,
				author$project$Main$NoBootstrap,
				author$project$ListUtils$fromMaybe(
					A2(
						elm$core$Maybe$map,
						author$project$Main$Scroll,
						A2(elm$core$Maybe$andThen, elm$core$String$toFloat, scroll))));
		}
	}();
	var parsedHash = A2(
		author$project$DebugSupport$log,
		'parsedHash from ' + A2(elm$core$Maybe$withDefault, '<no fragment>', loc.bk),
		author$project$LocationUtils$parseHash(
			A2(elm$core$Maybe$withDefault, '', loc.bk)));
	var hashMsgs = function () {
		if (parsedHash.$ === 1) {
			return _List_Nil;
		} else {
			var paths = parsedHash.a;
			return _List_fromArray(
				[
					author$project$Main$Nav(paths)
				]);
		}
	}();
	var _n0 = _Utils_ap(hashMsgs, queryMsgs);
	if (!_n0.b) {
		return _List_Nil;
	} else {
		if (!_n0.b.b) {
			var c = _n0.a;
			return _List_fromArray(
				[c]);
		} else {
			var c1 = _n0.a;
			var cs = _n0.b;
			return _List_fromArray(
				[
					A2(author$project$Main$Sequence, c1, cs)
				]);
		}
	}
};
var author$project$Album$Leaf = function (a) {
	return {$: 1, a: a};
};
var author$project$Album$List = function (a) {
	return {$: 0, a: a};
};
var bartavelle$json_helpers$Json$Helpers$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var elm$json$Json$Decode$field = _Json_decodeField;
var bartavelle$json_helpers$Json$Helpers$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			bartavelle$json_helpers$Json$Helpers$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Album$jsonDecImgSrc = A3(
	bartavelle$json_helpers$Json$Helpers$required,
	'y',
	elm$json$Json$Decode$int,
	A3(
		bartavelle$json_helpers$Json$Helpers$required,
		'x',
		elm$json$Json$Decode$int,
		A3(
			bartavelle$json_helpers$Json$Helpers$required,
			'url',
			elm$json$Json$Decode$string,
			elm$json$Json$Decode$succeed(
				F3(
					function (purl, px, py) {
						return {bH: purl, bJ: px, bK: py};
					})))));
var elm$json$Json$Decode$list = _Json_decodeList;
var author$project$Album$jsonDecImage = A3(
	bartavelle$json_helpers$Json$Helpers$required,
	'srcSetRest',
	elm$json$Json$Decode$list(author$project$Album$jsonDecImgSrc),
	A3(
		bartavelle$json_helpers$Json$Helpers$required,
		'srcSetFirst',
		author$project$Album$jsonDecImgSrc,
		A3(
			bartavelle$json_helpers$Json$Helpers$required,
			'altText',
			elm$json$Json$Decode$string,
			elm$json$Json$Decode$succeed(
				F3(
					function (paltText, psrcSetFirst, psrcSetRest) {
						return {bb: paltText, bz: psrcSetFirst, bA: psrcSetRest};
					})))));
var author$project$Album$jsonDecAlbum = A3(
	bartavelle$json_helpers$Json$Helpers$required,
	'imageRest',
	elm$json$Json$Decode$list(author$project$Album$jsonDecImage),
	A3(
		bartavelle$json_helpers$Json$Helpers$required,
		'imageFirst',
		author$project$Album$jsonDecImage,
		A3(
			bartavelle$json_helpers$Json$Helpers$required,
			'thumbnail',
			author$project$Album$jsonDecImage,
			A3(
				bartavelle$json_helpers$Json$Helpers$required,
				'title',
				elm$json$Json$Decode$string,
				elm$json$Json$Decode$succeed(
					F4(
						function (ptitle, pthumbnail, pimageFirst, pimageRest) {
							return {bm: pimageFirst, bn: pimageRest, bF: pthumbnail, bG: ptitle};
						}))))));
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$fail = _Json_fail;
var bartavelle$json_helpers$Json$Helpers$customDecoder = F2(
	function (decoder, toResult) {
		return A2(
			elm$json$Json$Decode$andThen,
			function (a) {
				var _n0 = toResult(a);
				if (!_n0.$) {
					var b = _n0.a;
					return elm$json$Json$Decode$succeed(b);
				} else {
					var err = _n0.a;
					return elm$json$Json$Decode$fail(
						elm$json$Json$Decode$errorToString(err));
				}
			},
			decoder);
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return elm$core$Maybe$Just(value);
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
var elm$json$Json$Decode$decodeValue = _Json_run;
var bartavelle$json_helpers$Json$Helpers$decodeSumFinal = F4(
	function (name, key, value, mapping) {
		var _n0 = A2(elm$core$Dict$get, key, mapping);
		if (_n0.$ === 1) {
			return elm$core$Result$Err(
				A2(elm$json$Json$Decode$Failure, 'Unknown constructor ' + (key + (' for type ' + name)), value));
		} else {
			var dec = _n0.a;
			return A2(elm$json$Json$Decode$decodeValue, dec, value);
		}
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var elm$json$Json$Decode$value = _Json_decodeValue;
var elm$json$Json$Encode$null = _Json_encodeNull;
var bartavelle$json_helpers$Json$Helpers$decodeSumObjectWithSingleField = F2(
	function (name, mapping) {
		return A2(
			bartavelle$json_helpers$Json$Helpers$customDecoder,
			elm$json$Json$Decode$keyValuePairs(elm$json$Json$Decode$value),
			function (lst) {
				if (!lst.b) {
					return elm$core$Result$Err(
						A2(elm$json$Json$Decode$Failure, 'Can\'t decode ' + (name + ': object has too few keys'), elm$json$Json$Encode$null));
				} else {
					if (!lst.b.b) {
						var _n1 = lst.a;
						var key = _n1.a;
						var value = _n1.b;
						return A4(bartavelle$json_helpers$Json$Helpers$decodeSumFinal, name, key, value, mapping);
					} else {
						var kv = lst.a;
						var kvs = lst.b;
						return elm$core$Result$Err(
							A2(elm$json$Json$Decode$Failure, 'Can\'t decode ' + (name + ': object has too many keys'), kv.b));
					}
				}
			});
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		elm$json$Json$Decode$andThen,
		thunk,
		elm$json$Json$Decode$succeed(0));
};
function author$project$Album$cyclic$jsonDecAlbumList() {
	return A3(
		bartavelle$json_helpers$Json$Helpers$required,
		'listThumbnail',
		author$project$Album$jsonDecImage,
		A3(
			bartavelle$json_helpers$Json$Helpers$required,
			'childRest',
			elm$json$Json$Decode$list(
				author$project$Album$cyclic$jsonDecAlbumOrList()),
			A3(
				bartavelle$json_helpers$Json$Helpers$required,
				'childFirst',
				author$project$Album$cyclic$jsonDecAlbumOrList(),
				A3(
					bartavelle$json_helpers$Json$Helpers$required,
					'listTitle',
					elm$json$Json$Decode$string,
					elm$json$Json$Decode$succeed(
						F4(
							function (plistTitle, pchildFirst, pchildRest, plistThumbnail) {
								return {be: pchildFirst, bf: pchildRest, bq: plistThumbnail, br: plistTitle};
							}))))));
}
function author$project$Album$cyclic$jsonDecAlbumOrList() {
	var jsonDecDictAlbumOrList = elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'List',
				elm$json$Json$Decode$lazy(
					function (_n0) {
						return A2(
							elm$json$Json$Decode$map,
							author$project$Album$List,
							author$project$Album$cyclic$jsonDecAlbumList());
					})),
				_Utils_Tuple2(
				'Leaf',
				elm$json$Json$Decode$lazy(
					function (_n1) {
						return A2(elm$json$Json$Decode$map, author$project$Album$Leaf, author$project$Album$jsonDecAlbum);
					}))
			]));
	return A2(bartavelle$json_helpers$Json$Helpers$decodeSumObjectWithSingleField, 'AlbumOrList', jsonDecDictAlbumOrList);
}
var author$project$Album$jsonDecAlbumList = author$project$Album$cyclic$jsonDecAlbumList();
author$project$Album$cyclic$jsonDecAlbumList = function () {
	return author$project$Album$jsonDecAlbumList;
};
var author$project$Album$jsonDecAlbumOrList = author$project$Album$cyclic$jsonDecAlbumOrList();
author$project$Album$cyclic$jsonDecAlbumOrList = function () {
	return author$project$Album$jsonDecAlbumOrList;
};
var author$project$AlbumListPage$AlbumListPage = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var author$project$AlbumPage$BackToThumbs = {$: 6};
var author$project$AlbumPage$FullMsg = function (a) {
	return {$: 7, a: a};
};
var author$project$AlbumPage$Next = {$: 5};
var author$project$AlbumPage$NoUpdate = {$: 8};
var author$project$AlbumPage$Prev = {$: 4};
var elm$browser$Browser$Events$Document = 0;
var elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {cr: pids, cJ: subs};
	});
var elm$browser$Browser$Events$init = elm$core$Task$succeed(
	A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
var elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
		return 'd_';
	} else {
		return 'w_';
	}
};
var elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {b6: event, ci: key};
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$browser$Browser$Events$spawn = F3(
	function (router, key, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var actualNode = function () {
			if (!node) {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						elm$core$Platform$sendToSelf,
						router,
						A2(elm$browser$Browser$Events$Event, key, event));
				}));
	});
var elm$core$Dict$foldl = F3(
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
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
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
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var elm$core$Process$kill = _Scheduler_kill;
var elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _n6) {
				var deads = _n6.a;
				var lives = _n6.b;
				var news = _n6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						elm$core$List$cons,
						A3(elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_n4, pid, _n5) {
				var deads = _n5.a;
				var lives = _n5.b;
				var news = _n5.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _n2, _n3) {
				var deads = _n3.a;
				var lives = _n3.b;
				var news = _n3.c;
				return _Utils_Tuple3(
					deads,
					A3(elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2(elm$core$List$map, elm$browser$Browser$Events$addKey, subs);
		var _n0 = A6(
			elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.cr,
			elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
		var deadPids = _n0.a;
		var livePids = _n0.b;
		var makeNewPids = _n0.c;
		return A2(
			elm$core$Task$andThen,
			function (pids) {
				return elm$core$Task$succeed(
					A2(
						elm$browser$Browser$Events$State,
						newSubs,
						A2(
							elm$core$Dict$union,
							livePids,
							elm$core$Dict$fromList(pids))));
			},
			A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$sequence(makeNewPids);
				},
				elm$core$Task$sequence(
					A2(elm$core$List$map, elm$core$Process$kill, deadPids))));
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (!_n0.$) {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _n0, state) {
		var key = _n0.ci;
		var event = _n0.b6;
		var toMessage = function (_n2) {
			var subKey = _n2.a;
			var _n3 = _n2.b;
			var node = _n3.a;
			var name = _n3.b;
			var decoder = _n3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing;
		};
		var messages = A2(elm$core$List$filterMap, toMessage, state.cJ);
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Platform$sendToApp(router),
					messages)));
	});
var elm$browser$Browser$Events$subMap = F2(
	function (func, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var decoder = _n0.c;
		return A3(
			elm$browser$Browser$Events$MySub,
			node,
			name,
			A2(elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager(elm$browser$Browser$Events$init, elm$browser$Browser$Events$onEffects, elm$browser$Browser$Events$onSelfMsg, 0, elm$browser$Browser$Events$subMap);
var elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return elm$browser$Browser$Events$subscription(
			A3(elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var elm$browser$Browser$Events$onKeyDown = A2(elm$browser$Browser$Events$on, 0, 'keydown');
var author$project$KeyboardUtils$onEscape = F2(
	function (action, noop) {
		return elm$browser$Browser$Events$onKeyDown(
			A2(
				elm$json$Json$Decode$map,
				function (k) {
					if (k === 'Escape') {
						return action;
					} else {
						return noop;
					}
				},
				A2(elm$json$Json$Decode$field, 'key', elm$json$Json$Decode$string)));
	});
var author$project$ProgressiveImage$AnimateMain = function (a) {
	return {$: 5, a: a};
};
var author$project$ProgressiveImage$AnimatePlaceholder = function (a) {
	return {$: 4, a: a};
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {bv: oldTime, cB: request, cJ: subs};
	});
var elm$browser$Browser$AnimationManager$init = elm$core$Task$succeed(
	A3(elm$browser$Browser$AnimationManager$State, _List_Nil, elm$core$Maybe$Nothing, 0));
var elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var elm$core$Process$spawn = _Scheduler_spawn;
var elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _n0) {
		var request = _n0.cB;
		var oldTime = _n0.bv;
		var _n1 = _Utils_Tuple2(request, subs);
		if (_n1.a.$ === 1) {
			if (!_n1.b.b) {
				var _n2 = _n1.a;
				return elm$browser$Browser$AnimationManager$init;
			} else {
				var _n4 = _n1.a;
				return A2(
					elm$core$Task$andThen,
					function (pid) {
						return A2(
							elm$core$Task$andThen,
							function (time) {
								return elm$core$Task$succeed(
									A3(
										elm$browser$Browser$AnimationManager$State,
										subs,
										elm$core$Maybe$Just(pid),
										time));
							},
							elm$browser$Browser$AnimationManager$now);
					},
					elm$core$Process$spawn(
						A2(
							elm$core$Task$andThen,
							elm$core$Platform$sendToSelf(router),
							elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_n1.b.b) {
				var pid = _n1.a.a;
				return A2(
					elm$core$Task$andThen,
					function (_n3) {
						return elm$browser$Browser$AnimationManager$init;
					},
					elm$core$Process$kill(pid));
			} else {
				return elm$core$Task$succeed(
					A3(elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var elm$time$Time$Posix = elm$core$Basics$identity;
var elm$time$Time$millisToPosix = elm$core$Basics$identity;
var elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _n0) {
		var subs = _n0.cJ;
		var oldTime = _n0.bv;
		var send = function (sub) {
			if (!sub.$) {
				var tagger = sub.a;
				return A2(
					elm$core$Platform$sendToApp,
					router,
					tagger(
						elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			elm$core$Task$andThen,
			function (pid) {
				return A2(
					elm$core$Task$andThen,
					function (_n1) {
						return elm$core$Task$succeed(
							A3(
								elm$browser$Browser$AnimationManager$State,
								subs,
								elm$core$Maybe$Just(pid),
								newTime));
					},
					elm$core$Task$sequence(
						A2(elm$core$List$map, send, subs)));
			},
			elm$core$Process$spawn(
				A2(
					elm$core$Task$andThen,
					elm$core$Platform$sendToSelf(router),
					elm$browser$Browser$AnimationManager$rAF)));
	});
var elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 1, a: a};
};
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (!sub.$) {
			var tagger = sub.a;
			return elm$browser$Browser$AnimationManager$Time(
				A2(elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return elm$browser$Browser$AnimationManager$Delta(
				A2(elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager(elm$browser$Browser$AnimationManager$init, elm$browser$Browser$AnimationManager$onEffects, elm$browser$Browser$AnimationManager$onSelfMsg, 0, elm$browser$Browser$AnimationManager$subMap);
var elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return elm$browser$Browser$AnimationManager$subscription(
		elm$browser$Browser$AnimationManager$Time(tagger));
};
var elm$browser$Browser$Events$onAnimationFrame = elm$browser$Browser$AnimationManager$onAnimationFrame;
var elm$core$List$any = F2(
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
var elm$core$Platform$Sub$map = _Platform_map;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var mdgriffith$elm_style_animation$Animation$isRunning = function (_n0) {
	var model = _n0;
	return model.a7;
};
var mdgriffith$elm_style_animation$Animation$Model$Tick = elm$core$Basics$identity;
var mdgriffith$elm_style_animation$Animation$subscription = F2(
	function (msg, states) {
		return A2(elm$core$List$any, mdgriffith$elm_style_animation$Animation$isRunning, states) ? A2(
			elm$core$Platform$Sub$map,
			msg,
			elm$browser$Browser$Events$onAnimationFrame(elm$core$Basics$identity)) : elm$core$Platform$Sub$none;
	});
var author$project$ProgressiveImage$subscriptions = function (_n0) {
	var data = _n0.a;
	var status = _n0.b;
	var animState = _n0.c;
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				mdgriffith$elm_style_animation$Animation$subscription,
				author$project$ProgressiveImage$AnimatePlaceholder,
				_List_fromArray(
					[animState.o])),
				A2(
				mdgriffith$elm_style_animation$Animation$subscription,
				author$project$ProgressiveImage$AnimateMain,
				_List_fromArray(
					[animState.z]))
			]));
};
var author$project$AlbumPage$subscriptions = F3(
	function (albumPage, wrapper, showParent) {
		if (!albumPage.$) {
			return A2(
				author$project$KeyboardUtils$onEscape,
				showParent,
				wrapper(author$project$AlbumPage$NoUpdate));
		} else {
			var progImgModel = albumPage.c;
			return elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A2(
						elm$core$Platform$Sub$map,
						wrapper,
						A2(
							elm$core$Platform$Sub$map,
							author$project$AlbumPage$FullMsg,
							author$project$ProgressiveImage$subscriptions(progImgModel))),
						A2(
						elm$core$Platform$Sub$map,
						wrapper,
						elm$browser$Browser$Events$onKeyDown(
							A2(
								elm$json$Json$Decode$map,
								function (k) {
									switch (k) {
										case 'ArrowRight':
											return author$project$AlbumPage$Next;
										case 'ArrowLeft':
											return author$project$AlbumPage$Prev;
										case 'Escape':
											return author$project$AlbumPage$BackToThumbs;
										default:
											return author$project$AlbumPage$NoUpdate;
									}
								},
								A2(elm$json$Json$Decode$field, 'key', elm$json$Json$Decode$string))))
					]));
		}
	});
var author$project$Main$LoadAlbumProgress = function (a) {
	return {$: 3, a: a};
};
var author$project$Main$PageMsg = function (a) {
	return {$: 6, a: a};
};
var author$project$Main$ViewList = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var author$project$Main$viewportWithNewSize = F3(
	function (oldViewport, newWidth, newHeight) {
		var ov = oldViewport.ae;
		var newViewport = _Utils_update(
			ov,
			{bl: newHeight, bI: newWidth});
		return _Utils_update(
			oldViewport,
			{ae: newViewport});
	});
var author$project$Main$newSize = F3(
	function (v, x, y) {
		return author$project$Main$Resize(
			A3(author$project$Main$viewportWithNewSize, v, x, y));
	});
var author$project$Main$pageSize = function (albumPage) {
	if (!albumPage.$) {
		var viewport = albumPage.b;
		return viewport;
	} else {
		var viewport = albumPage.d;
		return viewport;
	}
};
var elm$browser$Browser$Events$Window = 1;
var elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		elm$browser$Browser$Events$on,
		1,
		'resize',
		A2(
			elm$json$Json$Decode$field,
			'target',
			A3(
				elm$json$Json$Decode$map2,
				func,
				A2(elm$json$Json$Decode$field, 'innerWidth', elm$json$Json$Decode$int),
				A2(elm$json$Json$Decode$field, 'innerHeight', elm$json$Json$Decode$int))));
};
var elm$http$Http$Internal$EmptyBody = {$: 0};
var elm$http$Http$emptyBody = elm$http$Http$Internal$EmptyBody;
var elm$core$Dict$getMin = function (dict) {
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
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
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
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === -1) {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === -1) {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === -1) {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (!_n0.$) {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$http$Http$BadPayload = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var elm$http$Http$NetworkError = {$: 2};
var elm$http$Http$Timeout = {$: 1};
var elm$http$Http$Internal$FormDataBody = function (a) {
	return {$: 2, a: a};
};
var elm$http$Http$Internal$isStringBody = function (body) {
	if (body.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var elm$http$Http$expectStringResponse = _Http_expectStringResponse;
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$http$Http$expectJson = function (decoder) {
	return elm$http$Http$expectStringResponse(
		function (response) {
			var _n0 = A2(elm$json$Json$Decode$decodeString, decoder, response.bd);
			if (_n0.$ === 1) {
				var decodeError = _n0.a;
				return elm$core$Result$Err(
					elm$json$Json$Decode$errorToString(decodeError));
			} else {
				var value = _n0.a;
				return elm$core$Result$Ok(value);
			}
		});
};
var elm$http$Http$Internal$Request = elm$core$Basics$identity;
var elm$http$Http$request = elm$core$Basics$identity;
var elm$http$Http$get = F2(
	function (url, decoder) {
		return elm$http$Http$request(
			{
				bd: elm$http$Http$emptyBody,
				c1: elm$http$Http$expectJson(decoder),
				c5: _List_Nil,
				di: 'GET',
				dH: elm$core$Maybe$Nothing,
				bH: url,
				dR: false
			});
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$http$Http$Internal$map = F2(
	function (func, _n0) {
		var method = _n0.di;
		var headers = _n0.c5;
		var url = _n0.bH;
		var body = _n0.bd;
		var expect = _n0.c1;
		var timeout = _n0.dH;
		var withCredentials = _n0.dR;
		return {
			bd: body,
			c1: A2(_Http_mapExpect, func, expect),
			c5: headers,
			di: method,
			dH: timeout,
			bH: url,
			dR: withCredentials
		};
	});
var elm$http$Http$Progress$Done = function (a) {
	return {$: 3, a: a};
};
var elm$http$Http$Progress$Fail = function (a) {
	return {$: 2, a: a};
};
var elm$http$Http$Progress$Some = function (a) {
	return {$: 1, a: a};
};
var elm$http$Http$Progress$Track = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$http$Http$Progress$init = elm$core$Task$succeed(elm$core$Dict$empty);
var elm$http$Http$Progress$addSub = F2(
	function (_n0, subDict) {
		var id = _n0.a;
		var trackedRequest = _n0.b;
		var request = trackedRequest.cB;
		var uid = _Utils_ap(
			id,
			_Utils_ap(request.di, request.bH));
		return A3(elm$core$Dict$insert, uid, trackedRequest, subDict);
	});
var elm$http$Http$Progress$collectSubs = function (subs) {
	return A3(elm$core$List$foldl, elm$http$Http$Progress$addSub, elm$core$Dict$empty, subs);
};
var elm$core$Task$onError = _Scheduler_onError;
var elm$http$Http$Progress$toTask = F2(
	function (router, _n0) {
		var request = _n0.cB;
		var toProgress = _n0.aU;
		var toError = _n0.aT;
		return A2(
			elm$core$Task$onError,
			A2(
				elm$core$Basics$composeL,
				elm$core$Platform$sendToApp(router),
				toError),
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				A2(
					_Http_toTask,
					request,
					elm$core$Maybe$Just(
						A2(
							elm$core$Basics$composeL,
							elm$core$Platform$sendToApp(router),
							toProgress)))));
	});
var elm$http$Http$Progress$spawnRequests = F3(
	function (router, trackedRequests, state) {
		if (!trackedRequests.b) {
			return elm$core$Task$succeed(state);
		} else {
			var _n1 = trackedRequests.a;
			var id = _n1.a;
			var trackedRequest = _n1.b;
			var others = trackedRequests.b;
			return A2(
				elm$core$Task$andThen,
				function (process) {
					return A3(
						elm$http$Http$Progress$spawnRequests,
						router,
						others,
						A3(elm$core$Dict$insert, id, process, state));
				},
				elm$core$Process$spawn(
					A2(elm$http$Http$Progress$toTask, router, trackedRequest)));
		}
	});
var elm$http$Http$Progress$onEffects = F3(
	function (router, subs, state) {
		var subDict = elm$http$Http$Progress$collectSubs(subs);
		var rightStep = F3(
			function (id, trackedRequest, _n5) {
				var dead = _n5.a;
				var ongoing = _n5.b;
				var _new = _n5.c;
				return _Utils_Tuple3(
					dead,
					ongoing,
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(id, trackedRequest),
						_new));
			});
		var leftStep = F3(
			function (id, process, _n4) {
				var dead = _n4.a;
				var ongoing = _n4.b;
				var _new = _n4.c;
				return _Utils_Tuple3(
					A2(
						elm$core$List$cons,
						elm$core$Process$kill(process),
						dead),
					ongoing,
					_new);
			});
		var bothStep = F4(
			function (id, process, _n2, _n3) {
				var dead = _n3.a;
				var ongoing = _n3.b;
				var _new = _n3.c;
				return _Utils_Tuple3(
					dead,
					A3(elm$core$Dict$insert, id, process, ongoing),
					_new);
			});
		var _n0 = A6(
			elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			state,
			subDict,
			_Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
		var deadReqs = _n0.a;
		var ongoingReqs = _n0.b;
		var newReqs = _n0.c;
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return A3(elm$http$Http$Progress$spawnRequests, router, newReqs, ongoingReqs);
			},
			elm$core$Task$sequence(deadReqs));
	});
var elm$http$Http$Progress$onSelfMsg = F3(
	function (router, _n0, state) {
		return elm$core$Task$succeed(state);
	});
var elm$http$Http$Progress$map = F2(
	function (func, _n0) {
		var request = _n0.cB;
		var toProgress = _n0.aU;
		var toError = _n0.aT;
		return {
			cB: A2(elm$http$Http$Internal$map, func, request),
			aT: A2(elm$core$Basics$composeR, toError, func),
			aU: A2(elm$core$Basics$composeR, toProgress, func)
		};
	});
var elm$http$Http$Progress$subMap = F2(
	function (func, _n0) {
		var id = _n0.a;
		var trackedRequest = _n0.b;
		return A2(
			elm$http$Http$Progress$Track,
			id,
			A2(elm$http$Http$Progress$map, func, trackedRequest));
	});
_Platform_effectManagers['Http.Progress'] = _Platform_createManager(elm$http$Http$Progress$init, elm$http$Http$Progress$onEffects, elm$http$Http$Progress$onSelfMsg, 0, elm$http$Http$Progress$subMap);
var elm$http$Http$Progress$subscription = _Platform_leaf('Http.Progress');
var elm$http$Http$Progress$track = F3(
	function (id, toMessage, _n0) {
		var request = _n0;
		return elm$http$Http$Progress$subscription(
			A2(
				elm$http$Http$Progress$Track,
				id,
				{
					cB: A2(
						elm$http$Http$Internal$map,
						A2(elm$core$Basics$composeR, elm$http$Http$Progress$Done, toMessage),
						request),
					aT: A2(elm$core$Basics$composeR, elm$http$Http$Progress$Fail, toMessage),
					aU: A2(elm$core$Basics$composeR, elm$http$Http$Progress$Some, toMessage)
				}));
	});
var author$project$Main$subscriptions = function (model) {
	switch (model.$) {
		case 5:
			var albumPage = model.b;
			var parents = model.c;
			var showParent = function () {
				if (!parents.b) {
					return author$project$Main$NoBootstrap;
				} else {
					var _n2 = parents.a;
					var parent = _n2.a;
					var scroll = _n2.b;
					var grandParents = parents.b;
					return A2(
						author$project$Main$ViewList,
						A3(
							author$project$AlbumListPage$AlbumListPage,
							parent,
							author$project$Main$pageSize(albumPage),
							grandParents),
						scroll);
				}
			}();
			return elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A3(author$project$AlbumPage$subscriptions, albumPage, author$project$Main$PageMsg, showParent),
						elm$browser$Browser$Events$onResize(
						author$project$Main$newSize(
							author$project$Main$pageSize(albumPage)))
					]));
		case 4:
			var _n3 = model.b;
			var albumList = _n3.a;
			var viewport = _n3.b;
			var parents = _n3.c;
			if (!parents.b) {
				return elm$browser$Browser$Events$onResize(
					author$project$Main$newSize(viewport));
			} else {
				var _n5 = parents.a;
				var parent = _n5.a;
				var scroll = _n5.b;
				var grandParents = parents.b;
				var upParent = A2(
					author$project$KeyboardUtils$onEscape,
					A2(
						author$project$Main$ViewList,
						A3(author$project$AlbumListPage$AlbumListPage, parent, viewport, grandParents),
						scroll),
					author$project$Main$NoBootstrap);
				return elm$core$Platform$Sub$batch(
					_List_fromArray(
						[
							upParent,
							elm$browser$Browser$Events$onResize(
							author$project$Main$newSize(viewport))
						]));
			}
		case 1:
			var viewport = model.b;
			return elm$browser$Browser$Events$onResize(
				author$project$Main$newSize(viewport));
		case 2:
			var viewport = model.b;
			var progress = model.c;
			return elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						elm$browser$Browser$Events$onResize(
						author$project$Main$newSize(viewport)),
						A3(
						elm$http$Http$Progress$track,
						'',
						author$project$Main$LoadAlbumProgress,
						A2(elm$http$Http$get, 'album.json', author$project$Album$jsonDecAlbumOrList))
					]));
		case 3:
			return elm$core$Platform$Sub$none;
		default:
			return elm$core$Platform$Sub$none;
	}
};
var author$project$AlbumPage$FullImage = F6(
	function (a, b, c, d, e, f) {
		return {$: 1, a: a, b: b, c: c, d: d, e: e, f: f};
	});
var author$project$AlbumPage$Thumbs = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var author$project$AlbumPage$resetUrls = function (msg) {
	switch (msg.$) {
		case 6:
			return true;
		case 0:
			return true;
		default:
			return false;
	}
};
var elm$core$Basics$ge = _Utils_ge;
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$sortBy = _List_sortBy;
var author$project$ImageViews$smallestImageBiggerThan = F4(
	function (w, h, i, iRest) {
		var _n0 = elm$core$List$head(
			A2(
				elm$core$List$sortBy,
				function (is) {
					return is.bJ;
				},
				A2(
					elm$core$List$filter,
					function (is) {
						return (_Utils_cmp(is.bJ, w) > -1) && (_Utils_cmp(is.bK, h) > -1);
					},
					A2(elm$core$List$cons, i, iRest))));
		if (_n0.$ === 1) {
			return i;
		} else {
			var sizedIs = _n0.a;
			return sizedIs;
		}
	});
var author$project$ProgressiveImage$LoadingFallback = {$: 1};
var author$project$ProgressiveImage$ProgImgModel = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var author$project$ProgressiveImage$TryingCached = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var mdgriffith$elm_style_animation$Animation$Model$Spring = function (a) {
	return {$: 0, a: a};
};
var mdgriffith$elm_style_animation$Animation$initMotion = F2(
	function (position, unit) {
		return {
			aq: mdgriffith$elm_style_animation$Animation$Model$Spring(
				{b3: 26, cH: 170}),
			db: elm$core$Maybe$Nothing,
			ds: position,
			dG: position,
			dM: unit,
			dP: 0
		};
	});
var mdgriffith$elm_style_animation$Animation$Model$Property = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$custom = F3(
	function (name, value, unit) {
		return A2(
			mdgriffith$elm_style_animation$Animation$Model$Property,
			name,
			A2(mdgriffith$elm_style_animation$Animation$initMotion, value, unit));
	});
var mdgriffith$elm_style_animation$Animation$opacity = function (val) {
	return A3(mdgriffith$elm_style_animation$Animation$custom, 'opacity', val, '');
};
var author$project$ProgressiveImage$hidden = _List_fromArray(
	[
		mdgriffith$elm_style_animation$Animation$opacity(0)
	]);
var andrewMacmurray$elm_delay$Delay$Millisecond = 0;
var author$project$ProgressiveImage$ScheduleTimeout = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var author$project$ProgressiveImage$updateCmd = function (_n0) {
	var data = _n0.a;
	var status = _n0.b;
	var animState = _n0.c;
	switch (status.$) {
		case 0:
			var trying = status.b;
			return elm$core$Maybe$Just(
				A3(author$project$ProgressiveImage$ScheduleTimeout, 200, 0, trying));
		case 1:
			return elm$core$Maybe$Nothing;
		case 2:
			return elm$core$Maybe$Nothing;
		case 3:
			var oldPlaceholder = status.a;
			return elm$core$Maybe$Nothing;
		default:
			return elm$core$Maybe$Nothing;
	}
};
var mdgriffith$elm_style_animation$Animation$Model$Animation = elm$core$Basics$identity;
var mdgriffith$elm_style_animation$Animation$initialState = function (current) {
	return {
		bo: _List_Nil,
		a7: false,
		bC: _List_Nil,
		cI: current,
		cM: {
			b2: elm$time$Time$millisToPosix(0),
			c_: elm$time$Time$millisToPosix(0)
		}
	};
};
var elm$core$Basics$pi = _Basics_pi;
var mdgriffith$elm_style_animation$Animation$Model$AtSpeed = function (a) {
	return {$: 2, a: a};
};
var mdgriffith$elm_style_animation$Animation$speed = function (speedValue) {
	return mdgriffith$elm_style_animation$Animation$Model$AtSpeed(speedValue);
};
var mdgriffith$elm_style_animation$Animation$Model$Easing = function (a) {
	return {$: 1, a: a};
};
var mdgriffith$elm_style_animation$Animation$defaultInterpolationByProperty = function (prop) {
	var linear = function (duration) {
		return mdgriffith$elm_style_animation$Animation$Model$Easing(
			{bg: duration, bh: elm$core$Basics$identity, cw: 1, dD: 0});
	};
	var defaultSpring = mdgriffith$elm_style_animation$Animation$Model$Spring(
		{b3: 26, cH: 170});
	switch (prop.$) {
		case 0:
			return defaultSpring;
		case 1:
			return linear(
				elm$time$Time$millisToPosix(400));
		case 2:
			return defaultSpring;
		case 3:
			return defaultSpring;
		case 4:
			return defaultSpring;
		case 5:
			var name = prop.a;
			return (name === 'rotate3d') ? mdgriffith$elm_style_animation$Animation$speed(
				{cq: elm$core$Basics$pi}) : defaultSpring;
		case 6:
			return defaultSpring;
		case 7:
			return mdgriffith$elm_style_animation$Animation$speed(
				{cq: elm$core$Basics$pi});
		case 8:
			return defaultSpring;
		default:
			return defaultSpring;
	}
};
var mdgriffith$elm_style_animation$Animation$Model$AngleProperty = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$Model$ColorProperty = F5(
	function (a, b, c, d, e) {
		return {$: 1, a: a, b: b, c: c, d: d, e: e};
	});
var mdgriffith$elm_style_animation$Animation$Model$ExactProperty = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$Model$Path = function (a) {
	return {$: 9, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Points = function (a) {
	return {$: 8, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Property2 = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var mdgriffith$elm_style_animation$Animation$Model$Property3 = F4(
	function (a, b, c, d) {
		return {$: 5, a: a, b: b, c: c, d: d};
	});
var mdgriffith$elm_style_animation$Animation$Model$Property4 = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
	});
var mdgriffith$elm_style_animation$Animation$Model$ShadowProperty = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc = function (a) {
	return {$: 17, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc = function (a) {
	return {$: 16, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Close = {$: 18};
var mdgriffith$elm_style_animation$Animation$Model$Curve = function (a) {
	return {$: 8, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$CurveTo = function (a) {
	return {$: 9, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Horizontal = function (a) {
	return {$: 4, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$HorizontalTo = function (a) {
	return {$: 5, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Line = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$Model$LineTo = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$Model$Move = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$Model$MoveTo = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$Model$Quadratic = function (a) {
	return {$: 10, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$QuadraticTo = function (a) {
	return {$: 11, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Smooth = function (a) {
	return {$: 14, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic = function (a) {
	return {$: 12, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo = function (a) {
	return {$: 13, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$SmoothTo = function (a) {
	return {$: 15, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Vertical = function (a) {
	return {$: 6, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$VerticalTo = function (a) {
	return {$: 7, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$mapPathMotion = F2(
	function (fn, cmd) {
		var mapCoords = function (coords) {
			return A2(
				elm$core$List$map,
				function (_n1) {
					var x = _n1.a;
					var y = _n1.b;
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
					mdgriffith$elm_style_animation$Animation$Model$Move,
					fn(m1),
					fn(m2));
			case 1:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$MoveTo,
					fn(m1),
					fn(m2));
			case 2:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$Line,
					fn(m1),
					fn(m2));
			case 3:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$LineTo,
					fn(m1),
					fn(m2));
			case 4:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$Horizontal(
					fn(motion));
			case 5:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
					fn(motion));
			case 6:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$Vertical(
					fn(motion));
			case 7:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
					fn(motion));
			case 8:
				var control1 = cmd.a.aI;
				var control2 = cmd.a.aJ;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$Curve(
					{
						aI: _Utils_Tuple2(
							fn(control1.a),
							fn(control1.b)),
						aJ: _Utils_Tuple2(
							fn(control2.a),
							fn(control2.b)),
						D: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 9:
				var control1 = cmd.a.aI;
				var control2 = cmd.a.aJ;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$CurveTo(
					{
						aI: _Utils_Tuple2(
							fn(control1.a),
							fn(control1.b)),
						aJ: _Utils_Tuple2(
							fn(control2.a),
							fn(control2.b)),
						D: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 10:
				var control = cmd.a.aH;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$Quadratic(
					{
						aH: _Utils_Tuple2(
							fn(control.a),
							fn(control.b)),
						D: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 11:
				var control = cmd.a.aH;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
					{
						aH: _Utils_Tuple2(
							fn(control.a),
							fn(control.b)),
						D: _Utils_Tuple2(
							fn(point.a),
							fn(point.b))
					});
			case 12:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
					mapCoords(coords));
			case 13:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
					mapCoords(coords));
			case 14:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$Smooth(
					mapCoords(coords));
			case 15:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
					mapCoords(coords));
			case 16:
				var arc = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
					function () {
						var y = arc.bK;
						var x = arc.bJ;
						var startAngle = arc.aQ;
						var radius = arc.aO;
						var endAngle = arc.aK;
						return _Utils_update(
							arc,
							{
								aK: fn(endAngle),
								aO: fn(radius),
								aQ: fn(startAngle),
								bJ: fn(x),
								bK: fn(y)
							});
					}());
			case 17:
				var arc = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
					function () {
						var y = arc.bK;
						var x = arc.bJ;
						var startAngle = arc.aQ;
						var radius = arc.aO;
						var endAngle = arc.aK;
						return _Utils_update(
							arc,
							{
								aK: fn(endAngle),
								aO: fn(radius),
								aQ: fn(startAngle),
								bJ: fn(x),
								bK: fn(y)
							});
					}());
			default:
				return mdgriffith$elm_style_animation$Animation$Model$Close;
		}
	});
var mdgriffith$elm_style_animation$Animation$Model$mapToMotion = F2(
	function (fn, prop) {
		switch (prop.$) {
			case 0:
				var name = prop.a;
				var value = prop.b;
				return A2(mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
			case 1:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				var m3 = prop.d;
				var m4 = prop.e;
				return A5(
					mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
					name,
					fn(m1),
					fn(m2),
					fn(m3),
					fn(m4));
			case 2:
				var name = prop.a;
				var inset = prop.b;
				var shadow = prop.c;
				var size = shadow.F;
				var red = shadow.w;
				var offsetY = shadow.B;
				var offsetX = shadow.A;
				var green = shadow.v;
				var blur = shadow.y;
				var blue = shadow.s;
				var alpha = shadow.r;
				return A3(
					mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
					name,
					inset,
					{
						r: fn(alpha),
						s: fn(blue),
						y: fn(blur),
						v: fn(green),
						A: fn(offsetX),
						B: fn(offsetY),
						w: fn(red),
						F: fn(size)
					});
			case 3:
				var name = prop.a;
				var m1 = prop.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$Property,
					name,
					fn(m1));
			case 4:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				return A3(
					mdgriffith$elm_style_animation$Animation$Model$Property2,
					name,
					fn(m1),
					fn(m2));
			case 5:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				var m3 = prop.d;
				return A4(
					mdgriffith$elm_style_animation$Animation$Model$Property3,
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
					mdgriffith$elm_style_animation$Animation$Model$Property4,
					name,
					fn(m1),
					fn(m2),
					fn(m3),
					fn(m4));
			case 7:
				var name = prop.a;
				var m1 = prop.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
					name,
					fn(m1));
			case 8:
				var ms = prop.a;
				return mdgriffith$elm_style_animation$Animation$Model$Points(
					A2(
						elm$core$List$map,
						function (_n1) {
							var x = _n1.a;
							var y = _n1.b;
							return _Utils_Tuple2(
								fn(x),
								fn(y));
						},
						ms));
			default:
				var cmds = prop.a;
				return mdgriffith$elm_style_animation$Animation$Model$Path(
					A2(
						elm$core$List$map,
						mdgriffith$elm_style_animation$Animation$Model$mapPathMotion(fn),
						cmds));
		}
	});
var mdgriffith$elm_style_animation$Animation$setDefaultInterpolation = function (prop) {
	var interp = mdgriffith$elm_style_animation$Animation$defaultInterpolationByProperty(prop);
	return A2(
		mdgriffith$elm_style_animation$Animation$Model$mapToMotion,
		function (m) {
			return _Utils_update(
				m,
				{aq: interp});
		},
		prop);
};
var elm$core$List$sort = function (xs) {
	return A2(elm$core$List$sortBy, elm$core$Basics$identity, xs);
};
var mdgriffith$elm_style_animation$Animation$Model$propertyName = function (prop) {
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
var mdgriffith$elm_style_animation$Animation$Render$dropWhile = F2(
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
var mdgriffith$elm_style_animation$Animation$Render$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2(elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var mdgriffith$elm_style_animation$Animation$Render$span = F2(
	function (p, xs) {
		return _Utils_Tuple2(
			A2(mdgriffith$elm_style_animation$Animation$Render$takeWhile, p, xs),
			A2(mdgriffith$elm_style_animation$Animation$Render$dropWhile, p, xs));
	});
var mdgriffith$elm_style_animation$Animation$Render$groupWhile = F2(
	function (eq, xs_) {
		if (!xs_.b) {
			return _List_Nil;
		} else {
			var x = xs_.a;
			var xs = xs_.b;
			var _n1 = A2(
				mdgriffith$elm_style_animation$Animation$Render$span,
				eq(x),
				xs);
			var ys = _n1.a;
			var zs = _n1.b;
			return A2(
				elm$core$List$cons,
				A2(elm$core$List$cons, x, ys),
				A2(mdgriffith$elm_style_animation$Animation$Render$groupWhile, eq, zs));
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var mdgriffith$elm_style_animation$Animation$Render$isTransformation = function (prop) {
	return A2(
		elm$core$List$member,
		mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
		_List_fromArray(
			['rotate', 'rotateX', 'rotateY', 'rotateZ', 'rotate3d', 'translate', 'translate3d', 'scale', 'scale3d']));
};
var mdgriffith$elm_style_animation$Animation$Render$warnForDoubleListedProperties = function (props) {
	var _n0 = A2(
		elm$core$List$map,
		function (propGroup) {
			var _n1 = elm$core$List$head(propGroup);
			if (_n1.$ === 1) {
				return '';
			} else {
				var name = _n1.a;
				return (elm$core$List$length(propGroup) > 1) ? '' : '';
			}
		},
		A2(
			mdgriffith$elm_style_animation$Animation$Render$groupWhile,
			elm$core$Basics$eq,
			elm$core$List$sort(
				A2(
					elm$core$List$map,
					mdgriffith$elm_style_animation$Animation$Model$propertyName,
					A2(
						elm$core$List$filter,
						function (prop) {
							return !mdgriffith$elm_style_animation$Animation$Render$isTransformation(prop);
						},
						props)))));
	return props;
};
var mdgriffith$elm_style_animation$Animation$style = function (props) {
	return mdgriffith$elm_style_animation$Animation$initialState(
		A2(
			elm$core$List$map,
			mdgriffith$elm_style_animation$Animation$setDefaultInterpolation,
			mdgriffith$elm_style_animation$Animation$Render$warnForDoubleListedProperties(props)));
};
var author$project$ProgressiveImage$init = function (data) {
	var animState = {
		z: mdgriffith$elm_style_animation$Animation$style(author$project$ProgressiveImage$hidden),
		o: mdgriffith$elm_style_animation$Animation$style(author$project$ProgressiveImage$hidden)
	};
	var model = function () {
		var _n0 = data.dt;
		if (!_n0.b) {
			return A3(author$project$ProgressiveImage$ProgImgModel, data, author$project$ProgressiveImage$LoadingFallback, animState);
		} else {
			var c1 = _n0.a;
			var cOthers = _n0.b;
			return A3(
				author$project$ProgressiveImage$ProgImgModel,
				data,
				A3(author$project$ProgressiveImage$TryingCached, _List_Nil, c1, cOthers),
				animState);
		}
	}();
	return _Utils_Tuple2(
		model,
		author$project$ProgressiveImage$updateCmd(model));
};
var author$project$ThumbPage$maxThumbWidth = 300;
var author$project$ThumbPage$scrollPad = 20;
var author$project$ThumbPage$colsWidth = function (viewport) {
	var maxCols = A2(
		elm$core$Basics$max,
		(elm$core$Basics$floor(viewport.ae.bI) / author$project$ThumbPage$maxThumbWidth) | 0,
		2);
	var thumbWidth = ((elm$core$Basics$floor(viewport.ae.bI) - author$project$ThumbPage$scrollPad) / maxCols) | 0;
	return _Utils_Tuple2(maxCols, thumbWidth);
};
var author$project$AlbumPage$progInit = F4(
	function (viewport, i, w, h) {
		var smBiggerThan = F2(
			function (wMax, hMax) {
				return A4(author$project$ImageViews$smallestImageBiggerThan, wMax, hMax, i.bz, i.bA);
			});
		var _n0 = author$project$ThumbPage$colsWidth(viewport);
		var thumbWidth = _n0.b;
		return author$project$ProgressiveImage$init(
			{
				c3: A2(smBiggerThan, 1, 1),
				bl: h,
				dg: A2(smBiggerThan, w, h),
				dt: _List_fromArray(
					[
						A2(smBiggerThan, thumbWidth, 1)
					]),
				bI: w
			});
	});
var elm$core$Basics$round = _Basics_round;
var author$project$FullImagePage$fitImage = F3(
	function (is, winWidth, winHeight) {
		var winAspect = winWidth / winHeight;
		var imgAspect = is.bJ / is.bK;
		var scale = (_Utils_cmp(winAspect, imgAspect) < 1) ? (winWidth / is.bJ) : (winHeight / is.bK);
		return _Utils_Tuple2(
			elm$core$Basics$round(is.bJ * scale),
			elm$core$Basics$round(is.bK * scale));
	});
var author$project$ResultUtils$toCmd = function (m) {
	return A2(
		elm$core$Task$perform,
		elm$core$Basics$identity,
		elm$core$Task$succeed(m));
};
var elm$core$Platform$Cmd$map = _Platform_map;
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$AlbumPage$updatePrevNext = F2(
	function (model, shifter) {
		if (model.$ === 1) {
			var prevImgs = model.a;
			var album = model.b;
			var oldProgModel = model.c;
			var viewport = model.d;
			var savedScroll = model.e;
			var _n1 = A3(shifter, prevImgs, album.bm, album.bn);
			var newPrev = _n1.a;
			var newCur = _n1.b;
			var newRest = _n1.c;
			var _n2 = function () {
				if (_Utils_eq(album.bm, newCur)) {
					return _Utils_Tuple2(oldProgModel, elm$core$Maybe$Nothing);
				} else {
					var _n3 = A3(
						author$project$FullImagePage$fitImage,
						newCur.bz,
						elm$core$Basics$floor(viewport.ae.bI),
						elm$core$Basics$floor(viewport.ae.bl));
					var w = _n3.a;
					var h = _n3.b;
					return A4(author$project$AlbumPage$progInit, viewport, newCur, w, h);
				}
			}();
			var newProgModel = _n2.a;
			var newCmd = _n2.b;
			return _Utils_Tuple2(
				A6(
					author$project$AlbumPage$FullImage,
					newPrev,
					{bm: newCur, bn: newRest, bF: album.bF, bG: album.bG},
					newProgModel,
					viewport,
					savedScroll,
					elm$core$Maybe$Nothing),
				A2(
					elm$core$Platform$Cmd$map,
					author$project$AlbumPage$FullMsg,
					A2(
						elm$core$Maybe$withDefault,
						elm$core$Platform$Cmd$none,
						A2(elm$core$Maybe$map, author$project$ResultUtils$toCmd, newCmd))));
		} else {
			return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var author$project$AlbumStyles$rootDivId = 'rootDiv';
var author$project$ListUtils$shiftLeft = F3(
	function (xLefts, x, xRights) {
		if (!xLefts.b) {
			return _Utils_Tuple3(xLefts, x, xRights);
		} else {
			if (!xLefts.b.b) {
				var xLeft = xLefts.a;
				return _Utils_Tuple3(
					_List_Nil,
					xLeft,
					A2(elm$core$List$cons, x, xRights));
			} else {
				var xLeft = xLefts.a;
				var xLeftRights = xLefts.b;
				var _n1 = A3(author$project$ListUtils$shiftLeft, xLeftRights, x, xRights);
				var xLRss = _n1.a;
				var xss = _n1.b;
				var xRss = _n1.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, xLeft, xLRss),
					xss,
					xRss);
			}
		}
	});
var author$project$ListUtils$shiftRight = F3(
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
var author$project$ListUtils$shiftToBeginning = F3(
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
					A2(elm$core$List$cons, img, restImgs)));
		}
	});
var andrewMacmurray$elm_delay$Delay$Duration = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$core$Process$sleep = _Process_sleep;
var andrewMacmurray$elm_delay$Delay$after_ = F2(
	function (time, msg) {
		return A2(
			elm$core$Task$perform,
			elm$core$Basics$always(msg),
			elm$core$Process$sleep(time));
	});
var andrewMacmurray$elm_delay$Delay$Minute = 2;
var andrewMacmurray$elm_delay$Delay$Second = 1;
var andrewMacmurray$elm_delay$Delay$toMillis = function (_n0) {
	var t = _n0.a;
	var u = _n0.b;
	switch (u) {
		case 0:
			return t;
		case 1:
			return 1000 * t;
		case 2:
			return andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, 60 * t, 1));
		default:
			return andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, 60 * t, 2));
	}
};
var andrewMacmurray$elm_delay$Delay$after = F3(
	function (time, unit, msg) {
		return A2(
			andrewMacmurray$elm_delay$Delay$after_,
			andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, time, unit)),
			msg);
	});
var author$project$ProgressiveImage$Timeout = function (a) {
	return {$: 2, a: a};
};
var author$project$ProgressiveImage$LoadingMain = function (a) {
	return {$: 2, a: a};
};
var author$project$ProgressiveImage$MainLoaded = function (a) {
	return {$: 3, a: a};
};
var author$project$ProgressiveImage$MainOnly = {$: 4};
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0;
	return millis;
};
var mdgriffith$elm_style_animation$Animation$extractInitialWait = function (steps) {
	var _n0 = elm$core$List$head(steps);
	if (_n0.$ === 1) {
		return _Utils_Tuple2(
			elm$time$Time$millisToPosix(0),
			_List_Nil);
	} else {
		var step = _n0.a;
		if (step.$ === 4) {
			var till = step.a;
			var _n2 = mdgriffith$elm_style_animation$Animation$extractInitialWait(
				A2(elm$core$List$drop, 1, steps));
			var additionalTime = _n2.a;
			var remainingSteps = _n2.b;
			return _Utils_Tuple2(
				elm$time$Time$millisToPosix(
					elm$time$Time$posixToMillis(till) + elm$time$Time$posixToMillis(additionalTime)),
				remainingSteps);
		} else {
			return _Utils_Tuple2(
				elm$time$Time$millisToPosix(0),
				steps);
		}
	}
};
var mdgriffith$elm_style_animation$Animation$interrupt = F2(
	function (steps, _n0) {
		var model = _n0;
		return _Utils_update(
			model,
			{
				bo: A2(
					elm$core$List$cons,
					mdgriffith$elm_style_animation$Animation$extractInitialWait(steps),
					model.bo),
				a7: true
			});
	});
var mdgriffith$elm_style_animation$Animation$Model$To = function (a) {
	return {$: 1, a: a};
};
var mdgriffith$elm_style_animation$Animation$to = function (props) {
	return mdgriffith$elm_style_animation$Animation$Model$To(props);
};
var author$project$ProgressiveImage$hide = mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			mdgriffith$elm_style_animation$Animation$to(author$project$ProgressiveImage$hidden)
		]));
var author$project$ProgressiveImage$shown = _List_fromArray(
	[
		mdgriffith$elm_style_animation$Animation$opacity(1)
	]);
var author$project$ProgressiveImage$show = mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			mdgriffith$elm_style_animation$Animation$to(author$project$ProgressiveImage$shown)
		]));
var author$project$ProgressiveImage$MainFadeinComplete = {$: 3};
var mdgriffith$elm_style_animation$Animation$Model$Send = function (a) {
	return {$: 5, a: a};
};
var mdgriffith$elm_style_animation$Animation$Messenger$send = function (msg) {
	return mdgriffith$elm_style_animation$Animation$Model$Send(msg);
};
var author$project$ProgressiveImage$showMsg = mdgriffith$elm_style_animation$Animation$interrupt(
	_List_fromArray(
		[
			mdgriffith$elm_style_animation$Animation$to(author$project$ProgressiveImage$shown),
			mdgriffith$elm_style_animation$Animation$Messenger$send(author$project$ProgressiveImage$MainFadeinComplete)
		]));
var elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _n0) {
				var trues = _n0.a;
				var falses = _n0.b;
				return pred(x) ? _Utils_Tuple2(
					A2(elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2(elm$core$List$cons, x, falses));
			});
		return A3(
			elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var mdgriffith$elm_style_animation$Animation$Model$refreshTiming = F2(
	function (now, timing) {
		var dt = elm$time$Time$posixToMillis(now) - elm$time$Time$posixToMillis(timing.b2);
		return {
			b2: now,
			c_: ((dt > 34) || (!elm$time$Time$posixToMillis(timing.b2))) ? elm$time$Time$millisToPosix(
				elm$core$Basics$round(16.666)) : elm$time$Time$millisToPosix(dt)
		};
	});
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var mdgriffith$elm_style_animation$Animation$Model$Loop = function (a) {
	return {$: 7, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$Repeat = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var mdgriffith$elm_style_animation$Animation$Model$Step = {$: 0};
var mdgriffith$elm_style_animation$Animation$Model$Wait = function (a) {
	return {$: 4, a: a};
};
var mdgriffith$elm_style_animation$Animation$Model$isCmdDone = function (cmd) {
	var motionDone = function (motion) {
		return (!motion.dP) && _Utils_eq(motion.ds, motion.dG);
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
			var control1 = cmd.a.aI;
			var control2 = cmd.a.aJ;
			var point = cmd.a.D;
			return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
		case 9:
			var control1 = cmd.a.aI;
			var control2 = cmd.a.aJ;
			var point = cmd.a.D;
			return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
		case 10:
			var control = cmd.a.aH;
			var point = cmd.a.D;
			return motionDone(control.a) && (motionDone(control.b) && (motionDone(point.a) && motionDone(point.b)));
		case 11:
			var control = cmd.a.aH;
			var point = cmd.a.D;
			return motionDone(control.a) && (motionDone(control.b) && (motionDone(point.a) && motionDone(point.b)));
		case 12:
			var coords = cmd.a;
			return A2(
				elm$core$List$all,
				function (_n1) {
					var x = _n1.a;
					var y = _n1.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 13:
			var coords = cmd.a;
			return A2(
				elm$core$List$all,
				function (_n2) {
					var x = _n2.a;
					var y = _n2.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 14:
			var coords = cmd.a;
			return A2(
				elm$core$List$all,
				function (_n3) {
					var x = _n3.a;
					var y = _n3.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 15:
			var coords = cmd.a;
			return A2(
				elm$core$List$all,
				function (_n4) {
					var x = _n4.a;
					var y = _n4.b;
					return motionDone(x) && motionDone(y);
				},
				coords);
		case 16:
			var arc = cmd.a;
			return motionDone(arc.bJ) && (motionDone(arc.bK) && (motionDone(arc.aO) && (motionDone(arc.aQ) && motionDone(arc.aK))));
		case 17:
			var arc = cmd.a;
			return motionDone(arc.bJ) && (motionDone(arc.bK) && (motionDone(arc.aO) && (motionDone(arc.aQ) && motionDone(arc.aK))));
		default:
			return true;
	}
};
var mdgriffith$elm_style_animation$Animation$Model$isDone = function (property) {
	var motionDone = function (motion) {
		var runningInterpolation = A2(elm$core$Maybe$withDefault, motion.aq, motion.db);
		switch (runningInterpolation.$) {
			case 0:
				return (!motion.dP) && _Utils_eq(motion.ds, motion.dG);
			case 1:
				var eased = runningInterpolation.a;
				return (eased.cw === 1) || ((!eased.cw) && _Utils_eq(motion.ds, motion.dG));
			default:
				var speed = runningInterpolation.a;
				return _Utils_eq(motion.ds, motion.dG);
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
				elm$core$List$all,
				motionDone,
				_List_fromArray(
					[m1, m2, m3, m4]));
		case 2:
			var shadow = property.c;
			return A2(
				elm$core$List$all,
				motionDone,
				_List_fromArray(
					[shadow.A, shadow.B, shadow.F, shadow.y, shadow.w, shadow.v, shadow.s, shadow.r]));
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
				elm$core$List$all,
				motionDone,
				_List_fromArray(
					[m1, m2, m3]));
		case 6:
			var m1 = property.b;
			var m2 = property.c;
			var m3 = property.d;
			var m4 = property.e;
			return A2(
				elm$core$List$all,
				motionDone,
				_List_fromArray(
					[m1, m2, m3, m4]));
		case 7:
			var m1 = property.b;
			return motionDone(m1);
		case 8:
			var ms = property.a;
			return A2(
				elm$core$List$all,
				function (_n1) {
					var x = _n1.a;
					var y = _n1.b;
					return motionDone(x) && motionDone(y);
				},
				ms);
		default:
			var cmds = property.a;
			return A2(elm$core$List$all, mdgriffith$elm_style_animation$Animation$Model$isCmdDone, cmds);
	}
};
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var mdgriffith$elm_style_animation$Animation$Model$matchPoints = F2(
	function (points1, points2) {
		var diff = elm$core$List$length(points1) - elm$core$List$length(points2);
		if (diff > 0) {
			var _n0 = elm$core$List$head(
				elm$core$List$reverse(points2));
			if (_n0.$ === 1) {
				return _Utils_Tuple2(points1, points2);
			} else {
				var last2 = _n0.a;
				return _Utils_Tuple2(
					points1,
					_Utils_ap(
						points2,
						A2(
							elm$core$List$repeat,
							elm$core$Basics$abs(diff),
							last2)));
			}
		} else {
			if (diff < 0) {
				var _n1 = elm$core$List$head(
					elm$core$List$reverse(points1));
				if (_n1.$ === 1) {
					return _Utils_Tuple2(points1, points2);
				} else {
					var last1 = _n1.a;
					return _Utils_Tuple2(
						_Utils_ap(
							points1,
							A2(
								elm$core$List$repeat,
								elm$core$Basics$abs(diff),
								last1)),
						points2);
				}
			} else {
				return _Utils_Tuple2(points1, points2);
			}
		}
	});
var mdgriffith$elm_style_animation$Animation$Model$setPathTarget = F2(
	function (cmd, targetCmd) {
		var setMotionTarget = F2(
			function (motion, targetMotion) {
				var _n27 = motion.aq;
				if (_n27.$ === 1) {
					var ease = _n27.a;
					return _Utils_update(
						motion,
						{
							aq: mdgriffith$elm_style_animation$Animation$Model$Easing(
								_Utils_update(
									ease,
									{dD: motion.ds})),
							dG: targetMotion.ds
						});
				} else {
					return _Utils_update(
						motion,
						{dG: targetMotion.ds});
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
						mdgriffith$elm_style_animation$Animation$Model$Move,
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
						mdgriffith$elm_style_animation$Animation$Model$MoveTo,
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
						mdgriffith$elm_style_animation$Animation$Model$Line,
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
						mdgriffith$elm_style_animation$Animation$Model$LineTo,
						A2(setMotionTarget, m1, t1),
						A2(setMotionTarget, m2, t2));
				} else {
					return cmd;
				}
			case 4:
				var m1 = cmd.a;
				if (targetCmd.$ === 4) {
					var t1 = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$Horizontal(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 5:
				var m1 = cmd.a;
				if (targetCmd.$ === 5) {
					var t1 = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 6:
				var m1 = cmd.a;
				if (targetCmd.$ === 6) {
					var t1 = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$Vertical(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 7:
				var m1 = cmd.a;
				if (targetCmd.$ === 7) {
					var t1 = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
						A2(setMotionTarget, m1, t1));
				} else {
					return cmd;
				}
			case 8:
				var points = cmd.a;
				if (targetCmd.$ === 8) {
					var targets = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$Curve(
						{
							aI: _Utils_Tuple2(
								A2(setMotionTarget, points.aI.a, targets.aI.a),
								A2(setMotionTarget, points.aI.b, targets.aI.b)),
							aJ: _Utils_Tuple2(
								A2(setMotionTarget, points.aJ.a, targets.aJ.a),
								A2(setMotionTarget, points.aJ.b, targets.aJ.b)),
							D: _Utils_Tuple2(
								A2(setMotionTarget, points.D.a, targets.D.a),
								A2(setMotionTarget, points.D.b, targets.D.b))
						});
				} else {
					return cmd;
				}
			case 9:
				var points = cmd.a;
				if (targetCmd.$ === 9) {
					var targets = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$CurveTo(
						{
							aI: _Utils_Tuple2(
								A2(setMotionTarget, points.aI.a, targets.aI.a),
								A2(setMotionTarget, points.aI.b, targets.aI.b)),
							aJ: _Utils_Tuple2(
								A2(setMotionTarget, points.aJ.a, targets.aJ.a),
								A2(setMotionTarget, points.aJ.b, targets.aJ.b)),
							D: _Utils_Tuple2(
								A2(setMotionTarget, points.D.a, targets.D.a),
								A2(setMotionTarget, points.D.b, targets.D.b))
						});
				} else {
					return cmd;
				}
			case 10:
				var points = cmd.a;
				if (targetCmd.$ === 10) {
					var targets = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$Quadratic(
						{
							aH: _Utils_Tuple2(
								A2(setMotionTarget, points.aH.a, targets.aH.a),
								A2(setMotionTarget, points.aH.b, targets.aH.b)),
							D: _Utils_Tuple2(
								A2(setMotionTarget, points.D.a, targets.D.a),
								A2(setMotionTarget, points.D.b, targets.D.b))
						});
				} else {
					return cmd;
				}
			case 11:
				var points = cmd.a;
				if (targetCmd.$ === 11) {
					var targets = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
						{
							aH: _Utils_Tuple2(
								A2(setMotionTarget, points.aH.a, targets.aH.a),
								A2(setMotionTarget, points.aH.b, targets.aH.b)),
							D: _Utils_Tuple2(
								A2(setMotionTarget, points.D.a, targets.D.a),
								A2(setMotionTarget, points.D.b, targets.D.b))
						});
				} else {
					return cmd;
				}
			case 12:
				var coords = cmd.a;
				if (targetCmd.$ === 12) {
					var targetCoords = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
						A3(
							elm$core$List$map2,
							F2(
								function (_n14, _n15) {
									var x1 = _n14.a;
									var y1 = _n14.b;
									var x2 = _n15.a;
									var y2 = _n15.b;
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
					return mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
						A3(
							elm$core$List$map2,
							F2(
								function (_n17, _n18) {
									var x1 = _n17.a;
									var y1 = _n17.b;
									var x2 = _n18.a;
									var y2 = _n18.b;
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
					return mdgriffith$elm_style_animation$Animation$Model$Smooth(
						A3(
							elm$core$List$map2,
							F2(
								function (_n20, _n21) {
									var x1 = _n20.a;
									var y1 = _n20.b;
									var x2 = _n21.a;
									var y2 = _n21.b;
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
					return mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
						A3(
							elm$core$List$map2,
							F2(
								function (_n23, _n24) {
									var x1 = _n23.a;
									var y1 = _n23.b;
									var x2 = _n24.a;
									var y2 = _n24.b;
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
					return mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
						function () {
							var y = arc.bK;
							var x = arc.bJ;
							var startAngle = arc.aQ;
							var radius = arc.aO;
							var endAngle = arc.aK;
							return _Utils_update(
								arc,
								{
									aK: A2(setMotionTarget, endAngle, target.aK),
									aO: A2(setMotionTarget, radius, target.aO),
									aQ: A2(setMotionTarget, startAngle, target.aQ),
									bJ: A2(setMotionTarget, x, target.bJ),
									bK: A2(setMotionTarget, y, target.bK)
								});
						}());
				} else {
					return cmd;
				}
			case 17:
				var arc = cmd.a;
				if (targetCmd.$ === 17) {
					var target = targetCmd.a;
					return mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
						function () {
							var y = arc.bK;
							var x = arc.bJ;
							var startAngle = arc.aQ;
							var radius = arc.aO;
							var endAngle = arc.aK;
							return _Utils_update(
								arc,
								{
									aK: A2(setMotionTarget, endAngle, target.aK),
									aO: A2(setMotionTarget, radius, target.aO),
									aQ: A2(setMotionTarget, startAngle, target.aQ),
									bJ: A2(setMotionTarget, x, target.bJ),
									bK: A2(setMotionTarget, y, target.bK)
								});
						}());
				} else {
					return cmd;
				}
			default:
				return mdgriffith$elm_style_animation$Animation$Model$Close;
		}
	});
var mdgriffith$elm_style_animation$Animation$Model$setTarget = F3(
	function (overrideInterpolation, current, newTarget) {
		var setMotionTarget = F2(
			function (motion, targetMotion) {
				var newMotion = overrideInterpolation ? _Utils_update(
					motion,
					{
						db: elm$core$Maybe$Just(targetMotion.aq)
					}) : motion;
				var _n13 = newMotion.db;
				if (_n13.$ === 1) {
					var _n14 = newMotion.aq;
					if (_n14.$ === 1) {
						var ease = _n14.a;
						return _Utils_update(
							newMotion,
							{
								aq: mdgriffith$elm_style_animation$Animation$Model$Easing(
									_Utils_update(
										ease,
										{cw: 0, dD: motion.ds})),
								dG: targetMotion.ds
							});
					} else {
						return _Utils_update(
							newMotion,
							{dG: targetMotion.ds});
					}
				} else {
					var override = _n13.a;
					if (override.$ === 1) {
						var ease = override.a;
						return _Utils_update(
							newMotion,
							{
								db: elm$core$Maybe$Just(
									mdgriffith$elm_style_animation$Animation$Model$Easing(
										_Utils_update(
											ease,
											{cw: 0, dD: motion.ds}))),
								dG: targetMotion.ds
							});
					} else {
						return _Utils_update(
							newMotion,
							{dG: targetMotion.ds});
					}
				}
			});
		switch (current.$) {
			case 0:
				var name = current.a;
				var value = current.b;
				return A2(mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
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
						mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
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
						mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
						name,
						inset,
						{
							r: A2(setMotionTarget, shadow.r, targetShadow.r),
							s: A2(setMotionTarget, shadow.s, targetShadow.s),
							y: A2(setMotionTarget, shadow.y, targetShadow.y),
							v: A2(setMotionTarget, shadow.v, targetShadow.v),
							A: A2(setMotionTarget, shadow.A, targetShadow.A),
							B: A2(setMotionTarget, shadow.B, targetShadow.B),
							w: A2(setMotionTarget, shadow.w, targetShadow.w),
							F: A2(setMotionTarget, shadow.F, targetShadow.F)
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
						mdgriffith$elm_style_animation$Animation$Model$Property,
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
						mdgriffith$elm_style_animation$Animation$Model$Property2,
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
						mdgriffith$elm_style_animation$Animation$Model$Property3,
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
						mdgriffith$elm_style_animation$Animation$Model$Property4,
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
						mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
						name,
						A2(setMotionTarget, m1, t1));
				} else {
					return current;
				}
			case 8:
				var currentPts = current.a;
				if (newTarget.$ === 8) {
					var targetPts = newTarget.a;
					var _n9 = A2(mdgriffith$elm_style_animation$Animation$Model$matchPoints, currentPts, targetPts);
					var m1s = _n9.a;
					var m2s = _n9.b;
					return mdgriffith$elm_style_animation$Animation$Model$Points(
						A3(
							elm$core$List$map2,
							F2(
								function (_n10, _n11) {
									var x1 = _n10.a;
									var y1 = _n10.b;
									var x2 = _n11.a;
									var y2 = _n11.b;
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
					return mdgriffith$elm_style_animation$Animation$Model$Path(
						A3(elm$core$List$map2, mdgriffith$elm_style_animation$Animation$Model$setPathTarget, cmds, targets));
				} else {
					return current;
				}
		}
	});
var mdgriffith$elm_style_animation$Animation$Model$zipPropertiesGreedy = F2(
	function (initialProps, newTargetProps) {
		var propertyMatch = F2(
			function (prop1, prop2) {
				return _Utils_eq(
					mdgriffith$elm_style_animation$Animation$Model$propertyName(prop1),
					mdgriffith$elm_style_animation$Animation$Model$propertyName(prop2));
			});
		var _n0 = A3(
			elm$core$List$foldl,
			F2(
				function (_n1, _n2) {
					var stackA = _n2.a;
					var stackB = _n2.b;
					var result = _n2.c;
					var _n3 = elm$core$List$head(stackA);
					if (_n3.$ === 1) {
						return _Utils_Tuple3(stackA, stackB, result);
					} else {
						var a = _n3.a;
						var _n4 = A2(
							elm$core$List$partition,
							propertyMatch(a),
							stackB);
						var matchingBs = _n4.a;
						var nonMatchingBs = _n4.b;
						return _Utils_Tuple3(
							A2(elm$core$List$drop, 1, stackA),
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
								elm$core$List$cons,
								_Utils_Tuple2(
									a,
									elm$core$List$head(matchingBs)),
								result));
					}
				}),
			_Utils_Tuple3(initialProps, newTargetProps, _List_Nil),
			A2(
				elm$core$List$repeat,
				elm$core$List$length(initialProps),
				0));
		var warnings = _n0.b;
		var props = _n0.c;
		var _n6 = warnings;
		return elm$core$List$reverse(props);
	});
var mdgriffith$elm_style_animation$Animation$Model$startTowards = F3(
	function (overrideInterpolation, current, target) {
		return A2(
			elm$core$List$filterMap,
			function (propPair) {
				if (!propPair.b.$) {
					var cur = propPair.a;
					var to = propPair.b.a;
					return elm$core$Maybe$Just(
						A3(mdgriffith$elm_style_animation$Animation$Model$setTarget, overrideInterpolation, cur, to));
				} else {
					var prop = propPair.a;
					var _n1 = propPair.b;
					return elm$core$Maybe$Just(prop);
				}
			},
			A2(mdgriffith$elm_style_animation$Animation$Model$zipPropertiesGreedy, current, target));
	});
var elm$core$Basics$truncate = _Basics_truncate;
var mdgriffith$elm_style_animation$Animation$Model$tolerance = 1.0e-2;
var mdgriffith$elm_style_animation$Animation$Model$vTolerance = 0.1;
var mdgriffith$elm_style_animation$Animation$Model$stepInterpolation = F2(
	function (posix, motion) {
		var interpolationToUse = A2(elm$core$Maybe$withDefault, motion.aq, motion.db);
		var dtms = elm$time$Time$posixToMillis(posix);
		switch (interpolationToUse.$) {
			case 2:
				var perSecond = interpolationToUse.a.cq;
				var _n1 = function () {
					if (_Utils_cmp(motion.ds, motion.dG) < 0) {
						var _new = motion.ds + (perSecond * (dtms / 1000));
						return _Utils_Tuple2(
							_new,
							_Utils_cmp(_new, motion.dG) > -1);
					} else {
						var _new = motion.ds - (perSecond * (dtms / 1000));
						return _Utils_Tuple2(
							_new,
							_Utils_cmp(_new, motion.dG) < 1);
					}
				}();
				var newPos = _n1.a;
				var finished = _n1.b;
				return finished ? _Utils_update(
					motion,
					{ds: motion.dG, dP: 0.0}) : _Utils_update(
					motion,
					{ds: newPos, dP: perSecond * 1000});
			case 0:
				var stiffness = interpolationToUse.a.cH;
				var damping = interpolationToUse.a.b3;
				var fspring = stiffness * (motion.dG - motion.ds);
				var fdamper = ((-1) * damping) * motion.dP;
				var dt = dtms / 1000;
				var a = fspring + fdamper;
				var newVelocity = motion.dP + (a * dt);
				var newPos = motion.ds + (newVelocity * dt);
				var dx = elm$core$Basics$abs(motion.dG - newPos);
				return ((_Utils_cmp(dx, mdgriffith$elm_style_animation$Animation$Model$tolerance) < 0) && (_Utils_cmp(
					elm$core$Basics$abs(newVelocity),
					mdgriffith$elm_style_animation$Animation$Model$vTolerance) < 0)) ? _Utils_update(
					motion,
					{ds: motion.dG, dP: 0.0}) : _Utils_update(
					motion,
					{ds: newPos, dP: newVelocity});
			default:
				var progress = interpolationToUse.a.cw;
				var duration = interpolationToUse.a.bg;
				var ease = interpolationToUse.a.bh;
				var start = interpolationToUse.a.dD;
				var durationMs = elm$time$Time$posixToMillis(duration);
				var newProgress = (((dtms / durationMs) + progress) < 1) ? ((dtms / durationMs) + progress) : 1;
				var eased = ease(newProgress);
				var distance = motion.dG - start;
				var newPos = ((((eased * distance) + start) * 10000) | 0) / 10000;
				var newVelocity = (newProgress === 1) ? 0 : ((newPos - motion.ds) / dtms);
				var _n2 = motion.db;
				if (_n2.$ === 1) {
					return _Utils_update(
						motion,
						{
							aq: mdgriffith$elm_style_animation$Animation$Model$Easing(
								{bg: duration, bh: ease, cw: newProgress, dD: start}),
							ds: newPos,
							dP: newVelocity
						});
				} else {
					var override = _n2.a;
					return _Utils_update(
						motion,
						{
							db: elm$core$Maybe$Just(
								mdgriffith$elm_style_animation$Animation$Model$Easing(
									{bg: duration, bh: ease, cw: newProgress, dD: start})),
							ds: newPos,
							dP: newVelocity
						});
				}
		}
	});
var mdgriffith$elm_style_animation$Animation$Model$stepPath = F2(
	function (dt, cmd) {
		var stepCoords = function (coords) {
			return A2(
				elm$core$List$map,
				function (_n1) {
					var x = _n1.a;
					var y = _n1.b;
					return _Utils_Tuple2(
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, x),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, y));
				},
				coords);
		};
		switch (cmd.$) {
			case 0:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$Move,
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 1:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$MoveTo,
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 2:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$Line,
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 3:
				var m1 = cmd.a;
				var m2 = cmd.b;
				return A2(
					mdgriffith$elm_style_animation$Animation$Model$LineTo,
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2));
			case 4:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$Horizontal(
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 5:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 6:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$Vertical(
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 7:
				var motion = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
					A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
			case 8:
				var control1 = cmd.a.aI;
				var control2 = cmd.a.aJ;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$Curve(
					{
						aI: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)),
						aJ: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)),
						D: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 9:
				var control1 = cmd.a.aI;
				var control2 = cmd.a.aJ;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$CurveTo(
					{
						aI: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)),
						aJ: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)),
						D: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 10:
				var control = cmd.a.aH;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$Quadratic(
					{
						aH: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)),
						D: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 11:
				var control = cmd.a.aH;
				var point = cmd.a.D;
				return mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
					{
						aH: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)),
						D: _Utils_Tuple2(
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
							A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b))
					});
			case 12:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
					stepCoords(coords));
			case 13:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
					stepCoords(coords));
			case 14:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$Smooth(
					stepCoords(coords));
			case 15:
				var coords = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
					stepCoords(coords));
			case 16:
				var arc = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
					_Utils_update(
						arc,
						{
							aK: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aK),
							aO: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aO),
							aQ: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aQ),
							bJ: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.bJ),
							bK: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.bK)
						}));
			case 17:
				var arc = cmd.a;
				return mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
					_Utils_update(
						arc,
						{
							aK: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aK),
							aO: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aO),
							aQ: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.aQ),
							bJ: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.bJ),
							bK: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.bK)
						}));
			default:
				return mdgriffith$elm_style_animation$Animation$Model$Close;
		}
	});
var mdgriffith$elm_style_animation$Animation$Model$step = F2(
	function (dt, props) {
		var stepProp = function (property) {
			switch (property.$) {
				case 0:
					var name = property.a;
					var value = property.b;
					return A2(mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
				case 3:
					var name = property.a;
					var motion = property.b;
					return A2(
						mdgriffith$elm_style_animation$Animation$Model$Property,
						name,
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
				case 4:
					var name = property.a;
					var motion1 = property.b;
					var motion2 = property.c;
					return A3(
						mdgriffith$elm_style_animation$Animation$Model$Property2,
						name,
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2));
				case 5:
					var name = property.a;
					var motion1 = property.b;
					var motion2 = property.c;
					var motion3 = property.d;
					return A4(
						mdgriffith$elm_style_animation$Animation$Model$Property3,
						name,
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion3));
				case 6:
					var name = property.a;
					var motion1 = property.b;
					var motion2 = property.c;
					var motion3 = property.d;
					var motion4 = property.e;
					return A5(
						mdgriffith$elm_style_animation$Animation$Model$Property4,
						name,
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion3),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion4));
				case 7:
					var name = property.a;
					var motion = property.b;
					return A2(
						mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
						name,
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion));
				case 1:
					var name = property.a;
					var red = property.b;
					var green = property.c;
					var blue = property.d;
					var alpha = property.e;
					return A5(
						mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
						name,
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, red),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, green),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, blue),
						A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, alpha));
				case 2:
					var name = property.a;
					var inset = property.b;
					var shadow = property.c;
					return A3(
						mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
						name,
						inset,
						{
							r: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.r),
							s: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.s),
							y: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.y),
							v: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.v),
							A: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.A),
							B: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.B),
							w: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.w),
							F: A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.F)
						});
				case 8:
					var points = property.a;
					return mdgriffith$elm_style_animation$Animation$Model$Points(
						A2(
							elm$core$List$map,
							function (_n1) {
								var x = _n1.a;
								var y = _n1.b;
								return _Utils_Tuple2(
									A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, x),
									A2(mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, y));
							},
							points));
				default:
					var cmds = property.a;
					return mdgriffith$elm_style_animation$Animation$Model$Path(
						A2(
							elm$core$List$map,
							mdgriffith$elm_style_animation$Animation$Model$stepPath(dt),
							cmds));
			}
		};
		return A2(elm$core$List$map, stepProp, props);
	});
var mdgriffith$elm_style_animation$Animation$Model$alreadyThere = F2(
	function (current, target) {
		return A2(
			elm$core$List$all,
			mdgriffith$elm_style_animation$Animation$Model$isDone,
			A2(
				mdgriffith$elm_style_animation$Animation$Model$step,
				elm$time$Time$millisToPosix(0),
				A3(mdgriffith$elm_style_animation$Animation$Model$startTowards, false, current, target)));
	});
var mdgriffith$elm_style_animation$Animation$Model$replaceProps = F2(
	function (props, replacements) {
		var replacementNames = A2(elm$core$List$map, mdgriffith$elm_style_animation$Animation$Model$propertyName, replacements);
		var removed = A2(
			elm$core$List$filter,
			function (prop) {
				return !A2(
					elm$core$List$member,
					mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
					replacementNames);
			},
			props);
		return _Utils_ap(removed, replacements);
	});
var mdgriffith$elm_style_animation$Animation$Model$resolveSteps = F3(
	function (currentStyle, steps, dt) {
		resolveSteps:
		while (true) {
			var _n0 = elm$core$List$head(steps);
			if (_n0.$ === 1) {
				return _Utils_Tuple3(currentStyle, _List_Nil, _List_Nil);
			} else {
				var currentStep = _n0.a;
				switch (currentStep.$) {
					case 4:
						var n = currentStep.a;
						if (elm$time$Time$posixToMillis(n) <= 0) {
							var $temp$currentStyle = currentStyle,
								$temp$steps = A2(elm$core$List$drop, 1, steps),
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
									elm$core$List$cons,
									mdgriffith$elm_style_animation$Animation$Model$Wait(
										elm$time$Time$millisToPosix(
											elm$time$Time$posixToMillis(n) - elm$time$Time$posixToMillis(dt))),
									A2(elm$core$List$drop, 1, steps)));
						}
					case 5:
						var msg = currentStep.a;
						var _n2 = A3(
							mdgriffith$elm_style_animation$Animation$Model$resolveSteps,
							currentStyle,
							A2(elm$core$List$drop, 1, steps),
							dt);
						var newStyle = _n2.a;
						var msgs = _n2.b;
						var remainingSteps = _n2.c;
						return _Utils_Tuple3(
							newStyle,
							A2(elm$core$List$cons, msg, msgs),
							remainingSteps);
					case 1:
						var target = currentStep.a;
						if (A2(mdgriffith$elm_style_animation$Animation$Model$alreadyThere, currentStyle, target)) {
							return _Utils_Tuple3(
								currentStyle,
								_List_Nil,
								A2(elm$core$List$drop, 1, steps));
						} else {
							var $temp$currentStyle = A3(mdgriffith$elm_style_animation$Animation$Model$startTowards, false, currentStyle, target),
								$temp$steps = A2(
								elm$core$List$cons,
								mdgriffith$elm_style_animation$Animation$Model$Step,
								A2(elm$core$List$drop, 1, steps)),
								$temp$dt = dt;
							currentStyle = $temp$currentStyle;
							steps = $temp$steps;
							dt = $temp$dt;
							continue resolveSteps;
						}
					case 2:
						var target = currentStep.a;
						if (A2(mdgriffith$elm_style_animation$Animation$Model$alreadyThere, currentStyle, target)) {
							return _Utils_Tuple3(
								currentStyle,
								_List_Nil,
								A2(elm$core$List$drop, 1, steps));
						} else {
							var $temp$currentStyle = A3(mdgriffith$elm_style_animation$Animation$Model$startTowards, true, currentStyle, target),
								$temp$steps = A2(
								elm$core$List$cons,
								mdgriffith$elm_style_animation$Animation$Model$Step,
								A2(elm$core$List$drop, 1, steps)),
								$temp$dt = dt;
							currentStyle = $temp$currentStyle;
							steps = $temp$steps;
							dt = $temp$dt;
							continue resolveSteps;
						}
					case 3:
						var props = currentStep.a;
						var $temp$currentStyle = A2(mdgriffith$elm_style_animation$Animation$Model$replaceProps, currentStyle, props),
							$temp$steps = A2(elm$core$List$drop, 1, steps),
							$temp$dt = dt;
						currentStyle = $temp$currentStyle;
						steps = $temp$steps;
						dt = $temp$dt;
						continue resolveSteps;
					case 0:
						var stepped = A2(mdgriffith$elm_style_animation$Animation$Model$step, dt, currentStyle);
						return A2(elm$core$List$all, mdgriffith$elm_style_animation$Animation$Model$isDone, stepped) ? _Utils_Tuple3(
							A2(
								elm$core$List$map,
								mdgriffith$elm_style_animation$Animation$Model$mapToMotion(
									function (m) {
										return _Utils_update(
											m,
											{db: elm$core$Maybe$Nothing});
									}),
								stepped),
							_List_Nil,
							A2(elm$core$List$drop, 1, steps)) : _Utils_Tuple3(stepped, _List_Nil, steps);
					case 7:
						var substeps = currentStep.a;
						var $temp$currentStyle = currentStyle,
							$temp$steps = _Utils_ap(
							substeps,
							_List_fromArray(
								[
									mdgriffith$elm_style_animation$Animation$Model$Loop(substeps)
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
								$temp$steps = A2(elm$core$List$drop, 1, steps),
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
											A2(mdgriffith$elm_style_animation$Animation$Model$Repeat, n - 1, substeps)
										]),
									A2(elm$core$List$drop, 1, steps))),
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
var mdgriffith$elm_style_animation$Animation$Model$updateAnimation = F2(
	function (_n0, _n1) {
		var now = _n0;
		var model = _n1;
		var timing = A2(mdgriffith$elm_style_animation$Animation$Model$refreshTiming, now, model.cM);
		var _n2 = A2(
			elm$core$List$partition,
			function (_n4) {
				var wait = _n4.a;
				var mySteps = _n4.b;
				return elm$time$Time$posixToMillis(wait) <= 0;
			},
			A2(
				elm$core$List$map,
				function (_n3) {
					var wait = _n3.a;
					var mySteps = _n3.b;
					return _Utils_Tuple2(
						elm$time$Time$millisToPosix(
							elm$time$Time$posixToMillis(wait) - elm$time$Time$posixToMillis(timing.c_)),
						mySteps);
				},
				model.bo));
		var readyInterruption = _n2.a;
		var queuedInterruptions = _n2.b;
		var _n5 = function () {
			var _n6 = elm$core$List$head(readyInterruption);
			if (!_n6.$) {
				var _n7 = _n6.a;
				var wait = _n7.a;
				var interrupt = _n7.b;
				return _Utils_Tuple2(
					interrupt,
					A2(
						elm$core$List$map,
						mdgriffith$elm_style_animation$Animation$Model$mapToMotion(
							function (m) {
								return _Utils_update(
									m,
									{db: elm$core$Maybe$Nothing});
							}),
						model.cI));
			} else {
				return _Utils_Tuple2(model.bC, model.cI);
			}
		}();
		var steps = _n5.a;
		var style = _n5.b;
		var _n8 = A3(mdgriffith$elm_style_animation$Animation$Model$resolveSteps, style, steps, timing.c_);
		var revisedStyle = _n8.a;
		var sentMessages = _n8.b;
		var revisedSteps = _n8.c;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					bo: queuedInterruptions,
					a7: elm$core$List$length(revisedSteps) || elm$core$List$length(queuedInterruptions),
					bC: revisedSteps,
					cI: revisedStyle,
					cM: timing
				}),
			elm$core$Platform$Cmd$batch(
				A2(
					elm$core$List$map,
					function (m) {
						return A2(
							elm$core$Task$perform,
							elm$core$Basics$identity,
							elm$core$Task$succeed(m));
					},
					sentMessages)));
	});
var mdgriffith$elm_style_animation$Animation$update = F2(
	function (tick, animation) {
		return A2(mdgriffith$elm_style_animation$Animation$Model$updateAnimation, tick, animation).a;
	});
var author$project$ProgressiveImage$updateModel = F2(
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
							author$project$ProgressiveImage$ProgImgModel,
							data,
							author$project$ProgressiveImage$LoadingMain(trying),
							_Utils_update(
								animState,
								{
									o: author$project$ProgressiveImage$show(animState.o)
								})) : model;
					case 1:
						return _Utils_eq(imgSrc, data.c3) ? A3(
							author$project$ProgressiveImage$ProgImgModel,
							data,
							author$project$ProgressiveImage$LoadingMain(data.c3),
							_Utils_update(
								animState,
								{
									o: author$project$ProgressiveImage$show(animState.o)
								})) : model;
					case 2:
						var placeholder = status.a;
						return _Utils_eq(imgSrc, data.dg) ? A3(
							author$project$ProgressiveImage$ProgImgModel,
							data,
							author$project$ProgressiveImage$MainLoaded(placeholder),
							_Utils_update(
								animState,
								{
									z: author$project$ProgressiveImage$showMsg(animState.z)
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
							return A3(author$project$ProgressiveImage$ProgImgModel, data, author$project$ProgressiveImage$LoadingFallback, animState);
						} else {
							var next = upnext.a;
							var later = upnext.b;
							return A3(
								author$project$ProgressiveImage$ProgImgModel,
								data,
								A3(
									author$project$ProgressiveImage$TryingCached,
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
							author$project$ProgressiveImage$ProgImgModel,
							data,
							author$project$ProgressiveImage$MainOnly,
							_Utils_update(
								animState,
								{
									o: author$project$ProgressiveImage$hide(animState.o)
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
					author$project$ProgressiveImage$ProgImgModel,
					data,
					status,
					_Utils_update(
						animState,
						{
							o: A2(mdgriffith$elm_style_animation$Animation$update, animMsg, animState.o)
						}));
		}
	});
var mdgriffith$elm_style_animation$Animation$Messenger$update = F2(
	function (tick, animation) {
		return A2(mdgriffith$elm_style_animation$Animation$Model$updateAnimation, tick, animation);
	});
var author$project$ProgressiveImage$update = F2(
	function (msg, oldModel) {
		var data = oldModel.a;
		var status = oldModel.b;
		var animState = oldModel.c;
		switch (msg.$) {
			case 5:
				var animMsg = msg.a;
				var _n1 = A2(mdgriffith$elm_style_animation$Animation$Messenger$update, animMsg, animState.z);
				var newMainState = _n1.a;
				var animCmd = _n1.b;
				return _Utils_Tuple2(
					A3(
						author$project$ProgressiveImage$ProgImgModel,
						data,
						status,
						_Utils_update(
							animState,
							{z: newMainState})),
					animCmd);
			case 1:
				var n = msg.a;
				var unit = msg.b;
				var img = msg.c;
				return _Utils_Tuple2(
					oldModel,
					A3(
						andrewMacmurray$elm_delay$Delay$after,
						n,
						unit,
						author$project$ProgressiveImage$Timeout(img)));
			default:
				var newModel = A2(author$project$ProgressiveImage$updateModel, msg, oldModel);
				return _Utils_Tuple2(
					newModel,
					A2(
						elm$core$Maybe$withDefault,
						elm$core$Platform$Cmd$none,
						A2(
							elm$core$Maybe$map,
							author$project$ResultUtils$toCmd,
							author$project$ProgressiveImage$updateCmd(newModel))));
		}
	});
var elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var elm$core$Set$Set_elm_builtin = elm$core$Basics$identity;
var elm$core$Set$empty = elm$core$Dict$empty;
var elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return elm$core$Task$command(
			A2(
				elm$core$Task$onError,
				A2(
					elm$core$Basics$composeL,
					A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
					elm$core$Result$Err),
				A2(
					elm$core$Task$andThen,
					A2(
						elm$core$Basics$composeL,
						A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
						elm$core$Result$Ok),
					task)));
	});
var author$project$AlbumPage$update = F3(
	function (msg, model, scroll) {
		switch (msg.$) {
			case 0:
				var prevImgs = msg.a;
				var curImg = msg.b;
				var nextImgs = msg.c;
				if (!model.$) {
					var album = model.a;
					var viewport = model.b;
					var _n2 = A3(
						author$project$FullImagePage$fitImage,
						curImg.bz,
						elm$core$Basics$floor(viewport.ae.bI),
						elm$core$Basics$floor(viewport.ae.bl));
					var w = _n2.a;
					var h = _n2.b;
					var _n3 = A4(author$project$AlbumPage$progInit, viewport, curImg, w, h);
					var progModel = _n3.a;
					var progCmd = _n3.b;
					return _Utils_Tuple2(
						A6(
							author$project$AlbumPage$FullImage,
							prevImgs,
							{bm: curImg, bn: nextImgs, bF: album.bF, bG: album.bG},
							progModel,
							viewport,
							scroll,
							elm$core$Maybe$Nothing),
						A2(
							elm$core$Platform$Cmd$map,
							author$project$AlbumPage$FullMsg,
							A2(
								elm$core$Maybe$withDefault,
								elm$core$Platform$Cmd$none,
								A2(elm$core$Maybe$map, author$project$ResultUtils$toCmd, progCmd))));
				} else {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 4:
				return A2(author$project$AlbumPage$updatePrevNext, model, author$project$ListUtils$shiftLeft);
			case 5:
				return A2(author$project$AlbumPage$updatePrevNext, model, author$project$ListUtils$shiftRight);
			case 6:
				if (model.$ === 1) {
					var prevImgs = model.a;
					var album = model.b;
					var viewport = model.d;
					var savedScroll = model.e;
					var scrollCmd = function () {
						if (savedScroll.$ === 1) {
							return elm$core$Platform$Cmd$none;
						} else {
							var pos = savedScroll.a;
							return A2(
								elm$core$Task$attempt,
								function (_n7) {
									return author$project$AlbumPage$NoUpdate;
								},
								A3(elm$browser$Browser$Dom$setViewportOf, author$project$AlbumStyles$rootDivId, 0, pos));
						}
					}();
					var _n5 = A3(author$project$ListUtils$shiftToBeginning, prevImgs, album.bm, album.bn);
					var newFirst = _n5.a;
					var newRest = _n5.b;
					return _Utils_Tuple2(
						A4(
							author$project$AlbumPage$Thumbs,
							{bm: newFirst, bn: newRest, bF: album.bF, bG: album.bG},
							viewport,
							elm$core$Set$empty,
							elm$core$Set$empty),
						scrollCmd);
				} else {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 1:
				var pos = msg.a;
				if (model.$ === 1) {
					var prevImgs = model.a;
					var album = model.b;
					var progModel = model.c;
					var viewport = model.d;
					var savedScroll = model.e;
					var dragInfo = model.f;
					return _Utils_Tuple2(
						A6(
							author$project$AlbumPage$FullImage,
							prevImgs,
							album,
							progModel,
							viewport,
							savedScroll,
							elm$core$Maybe$Just(
								_Utils_Tuple2(pos, pos))),
						elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 2:
				var pos = msg.a;
				if (model.$ === 1) {
					var prevImgs = model.a;
					var album = model.b;
					var progModel = model.c;
					var viewport = model.d;
					var savedScroll = model.e;
					var dragInfo = model.f;
					if (dragInfo.$ === 1) {
						return _Utils_Tuple2(
							A6(
								author$project$AlbumPage$FullImage,
								prevImgs,
								album,
								progModel,
								viewport,
								savedScroll,
								elm$core$Maybe$Just(
									_Utils_Tuple2(pos, pos))),
							elm$core$Platform$Cmd$none);
					} else {
						var _n11 = dragInfo.a;
						var start = _n11.a;
						var cur = _n11.b;
						return _Utils_Tuple2(
							A6(
								author$project$AlbumPage$FullImage,
								prevImgs,
								album,
								progModel,
								viewport,
								savedScroll,
								elm$core$Maybe$Just(
									_Utils_Tuple2(start, pos))),
							elm$core$Platform$Cmd$none);
					}
				} else {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 3:
				if (model.$ === 1) {
					var prevImgs = model.a;
					var album = model.b;
					var progModel = model.c;
					var viewport = model.d;
					var savedScroll = model.e;
					return _Utils_Tuple2(
						A6(author$project$AlbumPage$FullImage, prevImgs, album, progModel, viewport, savedScroll, elm$core$Maybe$Nothing),
						elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 7:
				var progImgMsg = msg.a;
				if (model.$ === 1) {
					var prevImgs = model.a;
					var album = model.b;
					var progModel = model.c;
					var viewport = model.d;
					var savedScroll = model.e;
					var dragInfo = model.f;
					var _n14 = A2(author$project$ProgressiveImage$update, progImgMsg, progModel);
					var newProgModel = _n14.a;
					var newProgCmd = _n14.b;
					return _Utils_Tuple2(
						A6(author$project$AlbumPage$FullImage, prevImgs, album, newProgModel, viewport, savedScroll, dragInfo),
						A2(elm$core$Platform$Cmd$map, author$project$AlbumPage$FullMsg, newProgCmd));
				} else {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			default:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var author$project$ThumbPage$sizeForScaler = F2(
	function (scaler, img) {
		var is1 = img.bz;
		var scale = scaler(is1);
		var xScaled = elm$core$Basics$round(scale * is1.bJ);
		var yScaled = elm$core$Basics$round(scale * is1.bK);
		return _Utils_Tuple2(xScaled, yScaled);
	});
var author$project$ThumbPage$sizeForWidth = function (width) {
	return author$project$ThumbPage$sizeForScaler(
		function (is1) {
			return width / is1.bJ;
		});
};
var author$project$ThumbPage$srcForWidth = F2(
	function (width, img) {
		var _n0 = A2(author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _n0.a;
		var yScaled = _n0.b;
		return A4(author$project$ImageViews$smallestImageBiggerThan, xScaled, yScaled, img.bz, img.bA);
	});
var elm$core$List$takeReverse = F3(
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
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0;
		return A3(elm$core$Dict$insert, key, 0, dict);
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (!_n0.$) {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm$core$Set$union = F2(
	function (_n0, _n1) {
		var dict1 = _n0;
		var dict2 = _n1;
		return A2(elm$core$Dict$union, dict1, dict2);
	});
var author$project$ThumbPage$urlsToGet = function (thumbPageModel) {
	var _n0 = author$project$ThumbPage$colsWidth(thumbPageModel.ae);
	var thumbWidth = _n0.b;
	var srcs = A2(
		elm$core$List$map,
		author$project$ThumbPage$srcForWidth(thumbWidth),
		A2(elm$core$List$cons, thumbPageModel.ba.bm, thumbPageModel.ba.bn));
	return elm$core$Set$fromList(
		A2(
			elm$core$List$take,
			5,
			A2(
				elm$core$List$filter,
				function (url) {
					return !A2(
						elm$core$Set$member,
						url,
						A2(elm$core$Set$union, thumbPageModel.cg, thumbPageModel.cz));
				},
				A2(
					elm$core$List$map,
					function (i) {
						return i.bH;
					},
					srcs))));
};
var author$project$AlbumPage$urlsToGet = function (albumPage) {
	if (!albumPage.$) {
		var album = albumPage.a;
		var viewport = albumPage.b;
		var justLoadedImages = albumPage.c;
		var readyToDisplayImages = albumPage.d;
		return author$project$ThumbPage$urlsToGet(
			{ba: album, cg: justLoadedImages, co: _List_Nil, cz: readyToDisplayImages, ae: viewport});
	} else {
		return elm$core$Set$empty;
	}
};
var author$project$DebugSupport$debugString = function (val) {
	return 'Debug.toString not supported in --optimize mode';
};
var author$project$ListUtils$dictWithValues = F2(
	function (keys, val) {
		return elm$core$Dict$fromList(
			A2(
				elm$core$List$map,
				function (key) {
					return _Utils_Tuple2(key, val);
				},
				elm$core$Set$toList(keys)));
	});
var author$project$Main$Failed = function (a) {
	return {$: 3, a: a};
};
var author$project$Main$JustCompleted = {$: 1};
var author$project$Main$LoadError = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var author$project$Main$LoadedAlbum = F8(
	function (a, b, c, d, e, f, g, h) {
		return {$: 5, a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h};
	});
var author$project$Main$LoadedList = F7(
	function (a, b, c, d, e, f, g) {
		return {$: 4, a: a, b: b, c: c, d: d, e: e, f: f, g: g};
	});
var author$project$Main$Loading = F7(
	function (a, b, c, d, e, f, g) {
		return {$: 2, a: a, b: b, c: c, d: d, e: e, f: f, g: g};
	});
var author$project$Main$LoadingHomeLink = F5(
	function (a, b, c, d, e) {
		return {$: 1, a: a, b: b, c: c, d: d, e: e};
	});
var author$project$Main$NavInactive = 1;
var author$project$Main$NoAlbum = function (a) {
	return {$: 5, a: a};
};
var author$project$Main$NoHome = function (a) {
	return {$: 2, a: a};
};
var author$project$Main$ReadyToDisplay = {$: 2};
var author$project$Main$SequenceCmd = F2(
	function (a, b) {
		return {$: 19, a: a, b: b};
	});
var author$project$Main$UrlRequested = {$: 0};
var author$project$Main$YesAlbum = function (a) {
	return {$: 4, a: a};
};
var author$project$Main$YesHome = function (a) {
	return {$: 1, a: a};
};
var author$project$Main$flagsOf = function (model) {
	switch (model.$) {
		case 0:
			var flags = model.b;
			return flags;
		case 1:
			var flags = model.c;
			return flags;
		case 2:
			var flags = model.d;
			return flags;
		case 3:
			var flags = model.b;
			return flags;
		case 4:
			var flags = model.c;
			return flags;
		default:
			var flags = model.d;
			return flags;
	}
};
var author$project$ListUtils$encodePath = A2(
	elm$core$Basics$composeR,
	elm$core$String$split('/'),
	A2(
		elm$core$Basics$composeR,
		elm$core$List$map(elm$url$Url$percentEncode),
		elm$core$String$join('/')));
var author$project$Main$ImageFailed = F2(
	function (a, b) {
		return {$: 11, a: a, b: b};
	});
var author$project$Main$ImageLoaded = function (a) {
	return {$: 9, a: a};
};
var author$project$Main$decodeUrlResult = F2(
	function (origUrl, result) {
		if (!result.$) {
			var url = result.a;
			return author$project$Main$ImageLoaded(url);
		} else {
			var e = result.a;
			return A2(author$project$Main$ImageFailed, origUrl, e);
		}
	});
var author$project$Main$handleGetResponse = F2(
	function (url, r) {
		var _n0 = r.bB.cV;
		if (_n0 === 200) {
			return elm$core$Result$Ok(url);
		} else {
			return elm$core$Result$Err('err ' + r.bB.cj);
		}
	});
var elm$http$Http$toTask = function (_n0) {
	var request_ = _n0;
	return A2(_Http_toTask, request_, elm$core$Maybe$Nothing);
};
var author$project$Main$getUrl = function (url) {
	return A2(
		elm$core$Task$attempt,
		author$project$Main$decodeUrlResult(url),
		elm$http$Http$toTask(
			elm$http$Http$request(
				{
					bd: elm$http$Http$emptyBody,
					c1: elm$http$Http$expectStringResponse(
						author$project$Main$handleGetResponse(url)),
					c5: _List_Nil,
					di: 'GET',
					dH: elm$core$Maybe$Nothing,
					bH: author$project$ListUtils$encodePath(url),
					dR: false
				})));
};
var elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var elm$core$Set$diff = F2(
	function (_n0, _n1) {
		var dict1 = _n0;
		var dict2 = _n1;
		return A2(elm$core$Dict$diff, dict1, dict2);
	});
var author$project$Main$getUrls = F2(
	function (existingUrls, newUrls) {
		return elm$core$Platform$Cmd$batch(
			A2(
				elm$core$List$map,
				author$project$Main$getUrl,
				elm$core$Set$toList(
					A2(
						elm$core$Set$diff,
						newUrls,
						elm$core$Set$fromList(
							elm$core$Dict$keys(existingUrls))))));
	});
var elm$http$Http$Progress$None = {$: 0};
var author$project$Main$gotHome = F6(
	function (key, viewport, flags, paths, scroll, home) {
		return _Utils_Tuple2(
			A7(author$project$Main$Loading, key, viewport, elm$http$Http$Progress$None, flags, home, paths, scroll),
			elm$core$Platform$Cmd$none);
	});
var author$project$Main$homeOf = function (model) {
	switch (model.$) {
		case 0:
			return elm$core$Maybe$Nothing;
		case 1:
			return elm$core$Maybe$Nothing;
		case 2:
			var home = model.e;
			return home;
		case 3:
			return elm$core$Maybe$Nothing;
		case 4:
			var home = model.d;
			return home;
		default:
			var home = model.e;
			return home;
	}
};
var author$project$Main$keyOf = function (model) {
	switch (model.$) {
		case 0:
			var key = model.a;
			return key;
		case 1:
			var key = model.a;
			return key;
		case 2:
			var key = model.a;
			return key;
		case 3:
			var key = model.a;
			return key;
		case 4:
			var key = model.a;
			return key;
		default:
			var key = model.a;
			return key;
	}
};
var author$project$Main$findChild = F2(
	function (containingList, name) {
		var f = function (albumOrList) {
			if (!albumOrList.$) {
				var albumList = albumOrList.a;
				return _Utils_eq(albumList.br, name);
			} else {
				var album = albumOrList.a;
				return _Utils_eq(album.bG, name);
			}
		};
		return elm$core$List$head(
			A2(
				elm$core$List$filter,
				f,
				A2(elm$core$List$cons, containingList.be, containingList.bf)));
	});
var author$project$Main$ViewAlbum = F2(
	function (a, b) {
		return {$: 8, a: a, b: b};
	});
var author$project$Main$findImg = F3(
	function (prevs, album, img) {
		findImg:
		while (true) {
			if (_Utils_eq(album.bm.bb, img)) {
				return elm$core$Maybe$Just(
					_Utils_Tuple2(prevs, album));
			} else {
				var _n0 = album.bn;
				if (!_n0.b) {
					return elm$core$Maybe$Nothing;
				} else {
					var imageNext = _n0.a;
					var imageRest = _n0.b;
					var $temp$prevs = _Utils_ap(
						prevs,
						_List_fromArray(
							[album.bm])),
						$temp$album = _Utils_update(
						album,
						{bm: imageNext, bn: imageRest}),
						$temp$img = img;
					prevs = $temp$prevs;
					album = $temp$album;
					img = $temp$img;
					continue findImg;
				}
			}
		}
	});
var author$project$Main$navForAlbum = F4(
	function (viewport, album, ps, newParents) {
		var parentsNoScroll = A2(
			elm$core$List$map,
			function (p) {
				return _Utils_Tuple2(p, elm$core$Maybe$Nothing);
			},
			newParents);
		if (!ps.b) {
			return elm$core$Maybe$Just(
				A2(
					author$project$Main$ViewAlbum,
					A4(author$project$AlbumPage$Thumbs, album, viewport, elm$core$Set$empty, elm$core$Set$empty),
					parentsNoScroll));
		} else {
			var i = ps.a;
			var _n1 = A3(author$project$Main$findImg, _List_Nil, album, i);
			if (_n1.$ === 1) {
				return A2(author$project$DebugSupport$log, 'navForAlbum can\'t find image ' + i, elm$core$Maybe$Nothing);
			} else {
				var _n2 = _n1.a;
				var prevs = _n2.a;
				var nAlbum = _n2.b;
				var _n3 = A3(
					author$project$FullImagePage$fitImage,
					nAlbum.bm.bz,
					elm$core$Basics$floor(viewport.ae.bI),
					elm$core$Basics$floor(viewport.ae.bl));
				var w = _n3.a;
				var h = _n3.b;
				var _n4 = A4(author$project$AlbumPage$progInit, viewport, nAlbum.bm, w, h);
				var progModel = _n4.a;
				var progCmd = _n4.b;
				return elm$core$Maybe$Just(
					A2(
						author$project$Main$Sequence,
						A2(
							author$project$Main$ViewAlbum,
							A6(author$project$AlbumPage$FullImage, prevs, nAlbum, progModel, viewport, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing),
							parentsNoScroll),
						author$project$ListUtils$fromMaybe(
							A2(
								elm$core$Maybe$map,
								A2(elm$core$Basics$composeL, author$project$Main$PageMsg, author$project$AlbumPage$FullMsg),
								progCmd))));
			}
		}
	});
var author$project$Main$navFrom = F5(
	function (viewport, root, parents, paths, defcmd) {
		if (!paths.b) {
			return A2(author$project$DebugSupport$log, 'navFrom has no paths', defcmd);
		} else {
			if ((paths.a === '#') && (!paths.b.b)) {
				return A2(author$project$DebugSupport$log, 'navFrom has only # path', defcmd);
			} else {
				var p1 = paths.a;
				var ps = paths.b;
				var newParents = A2(elm$core$List$cons, root, parents);
				var mChild = A2(author$project$Main$findChild, root, p1);
				if (mChild.$ === 1) {
					return A2(author$project$DebugSupport$log, 'navFrom can\'t find child ' + p1, defcmd);
				} else {
					var pChild = mChild.a;
					if (!pChild.$) {
						var albumList = pChild.a;
						return A5(
							author$project$Main$navFrom,
							viewport,
							albumList,
							newParents,
							ps,
							elm$core$Maybe$Just(
								A2(
									author$project$Main$ViewList,
									A3(
										author$project$AlbumListPage$AlbumListPage,
										albumList,
										viewport,
										A2(
											elm$core$List$map,
											function (p) {
												return _Utils_Tuple2(p, elm$core$Maybe$Nothing);
											},
											newParents)),
									elm$core$Maybe$Nothing)));
					} else {
						var album = pChild.a;
						return A4(author$project$Main$navForAlbum, viewport, album, ps, newParents);
					}
				}
			}
		}
	});
var author$project$Main$pathsToCmdImpl = F3(
	function (viewport, parents, paths) {
		var mRoot = elm$core$List$head(
			elm$core$List$reverse(parents));
		if (mRoot.$ === 1) {
			return A2(author$project$DebugSupport$log, 'pathsToCmdImpl has no root', elm$core$Maybe$Nothing);
		} else {
			var root = mRoot.a;
			return A5(
				author$project$Main$navFrom,
				viewport,
				root,
				_List_Nil,
				paths,
				elm$core$Maybe$Just(
					A2(
						author$project$Main$ViewList,
						A3(author$project$AlbumListPage$AlbumListPage, root, viewport, _List_Nil),
						elm$core$Maybe$Nothing)));
		}
	});
var author$project$Main$pathsToCmd = F2(
	function (model, mPaths) {
		if (mPaths.$ === 1) {
			return A2(author$project$DebugSupport$log, 'pathsToCmd has no paths', elm$core$Maybe$Nothing);
		} else {
			var paths = mPaths.a;
			switch (model.$) {
				case 0:
					return elm$core$Maybe$Nothing;
				case 1:
					return elm$core$Maybe$Nothing;
				case 2:
					return elm$core$Maybe$Nothing;
				case 3:
					return A2(author$project$DebugSupport$log, 'pathsToCmd LoadError, ignore', elm$core$Maybe$Nothing);
				case 4:
					var _n2 = model.b;
					var albumList = _n2.a;
					var viewport = _n2.b;
					var parents = _n2.c;
					return A3(
						author$project$Main$pathsToCmdImpl,
						viewport,
						A2(
							elm$core$List$cons,
							albumList,
							A2(elm$core$List$map, elm$core$Tuple$first, parents)),
						paths);
				default:
					var albumPage = model.b;
					var parents = model.c;
					return A3(
						author$project$Main$pathsToCmdImpl,
						author$project$Main$pageSize(albumPage),
						A2(elm$core$List$map, elm$core$Tuple$first, parents),
						paths);
			}
		}
	});
var author$project$Main$ScheduleScroll = function (a) {
	return {$: 12, a: a};
};
var author$project$Main$scrollToCmd = F2(
	function (model, scroll) {
		var scrollCmd = elm$core$Maybe$Just(
			author$project$Main$ScheduleScroll(scroll));
		switch (model.$) {
			case 0:
				return elm$core$Maybe$Nothing;
			case 1:
				return elm$core$Maybe$Nothing;
			case 2:
				return elm$core$Maybe$Nothing;
			case 3:
				return A2(author$project$DebugSupport$log, 'scrollToCmd LoadError, ignore', elm$core$Maybe$Nothing);
			case 4:
				return scrollCmd;
			default:
				return scrollCmd;
		}
	});
var author$project$Main$ScrollFailed = function (a) {
	return {$: 15, a: a};
};
var author$project$Main$ScrollSucceeded = {$: 14};
var author$project$Main$scrollToTop = A2(
	elm$core$Task$attempt,
	function (result) {
		if (!result.$) {
			return author$project$Main$ScrollSucceeded;
		} else {
			var e = result.a;
			return author$project$Main$ScrollFailed(author$project$AlbumStyles$rootDivId);
		}
	},
	A3(elm$browser$Browser$Dom$setViewportOf, author$project$AlbumStyles$rootDivId, 0, 0));
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Main$sequence = F2(
	function (mm1, ms) {
		sequence:
		while (true) {
			if (mm1.$ === 1) {
				var _n1 = elm$core$List$tail(ms);
				if (_n1.$ === 1) {
					var _n2 = elm$core$List$head(ms);
					if (_n2.$ === 1) {
						return author$project$Main$NoBootstrap;
					} else {
						var ms1 = _n2.a;
						return ms1;
					}
				} else {
					var mst = _n1.a;
					var $temp$mm1 = elm$core$List$head(ms),
						$temp$ms = mst;
					mm1 = $temp$mm1;
					ms = $temp$ms;
					continue sequence;
				}
			} else {
				var m1 = mm1.a;
				return A2(author$project$Main$Sequence, m1, ms);
			}
		}
	});
var elm$core$Set$remove = F2(
	function (key, _n0) {
		var dict = _n0;
		return A2(elm$core$Dict$remove, key, dict);
	});
var author$project$Main$justLoadedReadyToDisplayNextState = F6(
	function (album, viewport, justLoadedImages, readyToDisplayImages, url, result) {
		switch (result.$) {
			case 1:
				return A4(
					author$project$AlbumPage$Thumbs,
					album,
					viewport,
					A2(elm$core$Set$insert, url, justLoadedImages),
					readyToDisplayImages);
			case 2:
				return A4(
					author$project$AlbumPage$Thumbs,
					album,
					viewport,
					A2(elm$core$Set$remove, url, justLoadedImages),
					A2(elm$core$Set$insert, url, readyToDisplayImages));
			default:
				return A4(author$project$AlbumPage$Thumbs, album, viewport, justLoadedImages, readyToDisplayImages);
		}
	});
var author$project$Main$ImageReadyToDisplay = function (a) {
	return {$: 10, a: a};
};
var author$project$Main$urlNextState = F2(
	function (url, result) {
		if (result.$ === 1) {
			return A3(
				andrewMacmurray$elm_delay$Delay$after,
				100,
				0,
				author$project$Main$ImageReadyToDisplay(url));
		} else {
			return elm$core$Platform$Cmd$none;
		}
	});
var author$project$Main$updateImageResult = F3(
	function (model, url, result) {
		if (model.$ === 5) {
			var key = model.a;
			var albumPage = model.b;
			var parents = model.c;
			var flags = model.d;
			var home = model.e;
			var pendingUrls = model.f;
			var scrollPos = model.g;
			var postLoadNavState = model.h;
			if (!albumPage.$) {
				var album = albumPage.a;
				var viewport = albumPage.b;
				var justLoadedImages = albumPage.c;
				var readyToDisplayImages = albumPage.d;
				var newModel = A6(author$project$Main$justLoadedReadyToDisplayNextState, album, viewport, justLoadedImages, readyToDisplayImages, url, result);
				var urls = author$project$AlbumPage$urlsToGet(newModel);
				return _Utils_Tuple2(
					A8(
						author$project$Main$LoadedAlbum,
						key,
						newModel,
						parents,
						flags,
						home,
						A2(
							elm$core$Dict$union,
							elm$core$Dict$fromList(
								_List_fromArray(
									[
										_Utils_Tuple2(url, result)
									])),
							A2(
								elm$core$Dict$union,
								pendingUrls,
								A2(author$project$ListUtils$dictWithValues, urls, author$project$Main$UrlRequested))),
						scrollPos,
						postLoadNavState),
					elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2(author$project$Main$getUrls, pendingUrls, urls),
								A2(author$project$Main$urlNextState, url, result)
							])));
			} else {
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			}
		} else {
			return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var author$project$Main$NavInProgress = 0;
var author$project$Main$withPaths = F2(
	function (model, paths) {
		switch (model.$) {
			case 0:
				var key = model.a;
				var flags = model.b;
				var scroll = model.d;
				return A4(
					author$project$Main$Sizing,
					key,
					flags,
					elm$core$Maybe$Just(paths),
					scroll);
			case 1:
				var key = model.a;
				var viewport = model.b;
				var flags = model.c;
				var scroll = model.e;
				return A5(
					author$project$Main$LoadingHomeLink,
					key,
					viewport,
					flags,
					elm$core$Maybe$Just(paths),
					scroll);
			case 2:
				var key = model.a;
				var viewport = model.b;
				var progress = model.c;
				var flags = model.d;
				var home = model.e;
				var scroll = model.g;
				return A7(
					author$project$Main$Loading,
					key,
					viewport,
					progress,
					flags,
					home,
					elm$core$Maybe$Just(paths),
					scroll);
			case 3:
				return model;
			case 4:
				var key = model.a;
				var albumListPage = model.b;
				var flags = model.c;
				var home = model.d;
				var pendingUrls = model.e;
				var scroll = model.f;
				return A7(author$project$Main$LoadedList, key, albumListPage, flags, home, pendingUrls, scroll, 0);
			default:
				var key = model.a;
				var albumPage = model.b;
				var parents = model.c;
				var flags = model.d;
				var home = model.e;
				var pendingUrls = model.f;
				var scroll = model.g;
				return A8(author$project$Main$LoadedAlbum, key, albumPage, parents, flags, home, pendingUrls, scroll, 0);
		}
	});
var author$project$Main$withScroll = F2(
	function (model, scroll) {
		switch (model.$) {
			case 0:
				var key = model.a;
				var flags = model.b;
				var paths = model.c;
				return A4(
					author$project$Main$Sizing,
					key,
					flags,
					paths,
					elm$core$Maybe$Just(scroll));
			case 1:
				var key = model.a;
				var viewport = model.b;
				var flags = model.c;
				var paths = model.d;
				return A5(
					author$project$Main$LoadingHomeLink,
					key,
					viewport,
					flags,
					paths,
					elm$core$Maybe$Just(scroll));
			case 2:
				var key = model.a;
				var viewport = model.b;
				var progress = model.c;
				var flags = model.d;
				var home = model.e;
				var paths = model.f;
				return A7(
					author$project$Main$Loading,
					key,
					viewport,
					progress,
					flags,
					home,
					paths,
					elm$core$Maybe$Just(scroll));
			case 3:
				return model;
			case 4:
				return model;
			default:
				return model;
		}
	});
var author$project$Main$withScrollPos = F2(
	function (pos, model) {
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
				var key = model.a;
				var albumPage = model.b;
				var parents = model.c;
				var flags = model.d;
				var home = model.e;
				var pendingUrls = model.f;
				var postLoadNavState = model.h;
				return A8(
					author$project$Main$LoadedAlbum,
					key,
					albumPage,
					parents,
					flags,
					home,
					pendingUrls,
					elm$core$Maybe$Just(pos),
					postLoadNavState);
			default:
				var key = model.a;
				var _n1 = model.b;
				var albumList = _n1.a;
				var viewport = _n1.b;
				var parents = _n1.c;
				var flags = model.c;
				var home = model.d;
				var pendingUrls = model.e;
				var postLoadNavState = model.g;
				return A7(
					author$project$Main$LoadedList,
					key,
					A3(author$project$AlbumListPage$AlbumListPage, albumList, viewport, parents),
					flags,
					home,
					pendingUrls,
					elm$core$Maybe$Just(pos),
					postLoadNavState);
		}
	});
var author$project$ResultUtils$either = F3(
	function (errMapper, okMapper, r) {
		if (!r.$) {
			var value = r.a;
			return okMapper(value);
		} else {
			var error = r.a;
			return errMapper(error);
		}
	});
var elm$browser$Browser$Navigation$load = _Browser_load;
var elm$core$String$trim = _String_trim;
var elm$http$Http$expectString = elm$http$Http$expectStringResponse(
	function (response) {
		return elm$core$Result$Ok(response.bd);
	});
var elm$http$Http$getString = function (url) {
	return elm$http$Http$request(
		{bd: elm$http$Http$emptyBody, c1: elm$http$Http$expectString, c5: _List_Nil, di: 'GET', dH: elm$core$Maybe$Nothing, bH: url, dR: false});
};
var elm$http$Http$send = F2(
	function (resultToMessage, request_) {
		return A2(
			elm$core$Task$attempt,
			resultToMessage,
			elm$http$Http$toTask(request_));
	});
var elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + elm$core$String$fromInt(port_));
		}
	});
var elm$url$Url$addPrefixed = F3(
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
var elm$url$Url$toString = function (url) {
	var http = function () {
		var _n0 = url.cx;
		if (!_n0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		elm$url$Url$addPrefixed,
		'#',
		url.bk,
		A3(
			elm$url$Url$addPrefixed,
			'?',
			url.by,
			_Utils_ap(
				A2(
					elm$url$Url$addPort,
					url.cs,
					_Utils_ap(http, url.cb)),
				url.cp)));
};
var author$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			var _n0 = A2(author$project$DebugSupport$log, 'update msg', msg);
			switch (_n0.$) {
				case 0:
					var viewport = _n0.a;
					switch (model.$) {
						case 0:
							var key = model.a;
							var flags = model.b;
							var paths = model.c;
							var scroll = model.d;
							return _Utils_Tuple2(
								A5(
									author$project$Main$LoadingHomeLink,
									key,
									A2(author$project$DebugSupport$log, 'window size set', viewport),
									flags,
									paths,
									scroll),
								A2(
									elm$http$Http$send,
									A2(author$project$ResultUtils$either, author$project$Main$NoHome, author$project$Main$YesHome),
									elm$http$Http$getString('home')));
						case 1:
							var key = model.a;
							var oldSize = model.b;
							var flags = model.c;
							var paths = model.d;
							var scroll = model.e;
							return _Utils_Tuple2(
								A5(author$project$Main$LoadingHomeLink, key, viewport, flags, paths, scroll),
								elm$core$Platform$Cmd$none);
						case 2:
							var key = model.a;
							var oldSize = model.b;
							var progress = model.c;
							var flags = model.d;
							var home = model.e;
							var paths = model.f;
							var scroll = model.g;
							return _Utils_Tuple2(
								A7(
									author$project$Main$Loading,
									key,
									A2(author$project$DebugSupport$log, 'window size updated during load', viewport),
									progress,
									flags,
									home,
									paths,
									scroll),
								elm$core$Platform$Cmd$none);
						case 3:
							return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
						case 5:
							var key = model.a;
							var albumPage = model.b;
							var parents = model.c;
							var flags = model.d;
							var home = model.e;
							var pendingUrls = model.f;
							var scrollPos = model.g;
							var postLoadNavState = model.h;
							if (!albumPage.$) {
								var album = albumPage.a;
								var oldSize = albumPage.b;
								var justLoadedImages = albumPage.c;
								var readyToDisplayImages = albumPage.d;
								var newModel = A4(
									author$project$AlbumPage$Thumbs,
									album,
									A2(author$project$DebugSupport$log, 'window size updated for thumbs', viewport),
									justLoadedImages,
									readyToDisplayImages);
								var urls = author$project$AlbumPage$urlsToGet(newModel);
								return _Utils_Tuple2(
									A8(
										author$project$Main$LoadedAlbum,
										key,
										newModel,
										parents,
										flags,
										home,
										A2(
											elm$core$Dict$union,
											pendingUrls,
											A2(author$project$ListUtils$dictWithValues, urls, author$project$Main$UrlRequested)),
										scrollPos,
										postLoadNavState),
									A2(author$project$Main$getUrls, pendingUrls, urls));
							} else {
								var album = albumPage.a;
								var index = albumPage.b;
								var loaded = albumPage.c;
								var oldSize = albumPage.d;
								var savedScroll = albumPage.e;
								var dragInfo = albumPage.f;
								return _Utils_Tuple2(
									A8(
										author$project$Main$LoadedAlbum,
										key,
										A6(
											author$project$AlbumPage$FullImage,
											album,
											index,
											loaded,
											A2(author$project$DebugSupport$log, 'window size updated for full', viewport),
											savedScroll,
											dragInfo),
										parents,
										flags,
										home,
										pendingUrls,
										scrollPos,
										postLoadNavState),
									elm$core$Platform$Cmd$none);
							}
						default:
							var key = model.a;
							var _n3 = model.b;
							var albumList = _n3.a;
							var oldSize = _n3.b;
							var parentLists = _n3.c;
							var flags = model.c;
							var home = model.d;
							var pendingUrls = model.e;
							var scrollPos = model.f;
							var postLoadNavState = model.g;
							return _Utils_Tuple2(
								A7(
									author$project$Main$LoadedList,
									key,
									A3(author$project$AlbumListPage$AlbumListPage, albumList, viewport, parentLists),
									flags,
									home,
									pendingUrls,
									scrollPos,
									postLoadNavState),
								elm$core$Platform$Cmd$none);
					}
				case 1:
					var home = _n0.a;
					if (model.$ === 1) {
						var key = model.a;
						var size = model.b;
						var flags = model.c;
						var path = model.d;
						var scroll = model.e;
						return A6(
							author$project$Main$gotHome,
							key,
							size,
							flags,
							path,
							scroll,
							elm$core$Maybe$Just(
								elm$core$String$trim(home)));
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 2:
					var err = _n0.a;
					if (model.$ === 1) {
						var key = model.a;
						var size = model.b;
						var flags = model.c;
						var path = model.d;
						var scroll = model.e;
						return A6(author$project$Main$gotHome, key, size, flags, path, scroll, elm$core$Maybe$Nothing);
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 3:
					var progress = _n0.a;
					if (model.$ === 2) {
						var key = model.a;
						var viewport = model.b;
						var oldProgress = model.c;
						var flags = model.d;
						var home = model.e;
						var paths = model.f;
						var scroll = model.g;
						switch (progress.$) {
							case 3:
								var albumOrList = progress.a;
								var $temp$msg = author$project$Main$YesAlbum(albumOrList),
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 2:
								var err = progress.a;
								var $temp$msg = author$project$Main$NoAlbum(err),
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							default:
								return _Utils_Tuple2(
									A7(author$project$Main$Loading, key, viewport, progress, flags, home, paths, scroll),
									elm$core$Platform$Cmd$none);
						}
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 4:
					var albumOrList = _n0.a;
					if (model.$ === 2) {
						var key = model.a;
						var viewport = model.b;
						var flags = model.d;
						var home = model.e;
						var paths = model.f;
						var scroll = model.g;
						if (!albumOrList.$) {
							var albumList = albumOrList.a;
							var newModel = A7(
								author$project$Main$LoadedList,
								key,
								A3(author$project$AlbumListPage$AlbumListPage, albumList, viewport, _List_Nil),
								flags,
								home,
								elm$core$Dict$empty,
								elm$core$Maybe$Nothing,
								1);
							var pathsThenScroll = author$project$ResultUtils$toCmd(
								A2(
									author$project$Main$sequence,
									A2(author$project$Main$pathsToCmd, newModel, paths),
									author$project$ListUtils$fromMaybe(
										A2(author$project$Main$scrollToCmd, newModel, scroll))));
							return _Utils_Tuple2(newModel, pathsThenScroll);
						} else {
							var album = albumOrList.a;
							var albumPage = A4(author$project$AlbumPage$Thumbs, album, viewport, elm$core$Set$empty, elm$core$Set$empty);
							var urls = author$project$AlbumPage$urlsToGet(albumPage);
							var newModel = A8(
								author$project$Main$LoadedAlbum,
								key,
								albumPage,
								_List_Nil,
								flags,
								home,
								A2(author$project$ListUtils$dictWithValues, urls, author$project$Main$UrlRequested),
								elm$core$Maybe$Nothing,
								1);
							var pathsThenScroll = author$project$ResultUtils$toCmd(
								A2(
									author$project$Main$sequence,
									A2(author$project$Main$pathsToCmd, newModel, paths),
									author$project$ListUtils$fromMaybe(
										A2(author$project$Main$scrollToCmd, newModel, scroll))));
							return _Utils_Tuple2(
								newModel,
								elm$core$Platform$Cmd$batch(
									_List_fromArray(
										[
											A2(author$project$Main$getUrls, elm$core$Dict$empty, urls),
											pathsThenScroll
										])));
						}
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 5:
					var err = _n0.a;
					return _Utils_Tuple2(
						A3(
							author$project$Main$LoadError,
							author$project$Main$keyOf(model),
							author$project$Main$flagsOf(model),
							err),
						elm$core$Platform$Cmd$none);
				case 6:
					var pageMsg = _n0.a;
					if (model.$ === 5) {
						var key = model.a;
						var oldPage = model.b;
						var parents = model.c;
						var flags = model.d;
						var home = model.e;
						var oldPendingUrls = model.f;
						var scrollPos = model.g;
						var postLoadNavState = model.h;
						var newPendingUrls = author$project$AlbumPage$resetUrls(pageMsg) ? elm$core$Dict$empty : oldPendingUrls;
						var _n11 = A3(author$project$AlbumPage$update, pageMsg, oldPage, scrollPos);
						var newPage = _n11.a;
						var newPageCmd = _n11.b;
						var urls = author$project$AlbumPage$urlsToGet(newPage);
						return _Utils_Tuple2(
							A8(
								author$project$Main$LoadedAlbum,
								key,
								newPage,
								parents,
								flags,
								home,
								A2(
									elm$core$Dict$union,
									newPendingUrls,
									A2(author$project$ListUtils$dictWithValues, urls, author$project$Main$UrlRequested)),
								scrollPos,
								postLoadNavState),
							elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2(author$project$Main$getUrls, newPendingUrls, urls),
										A2(elm$core$Platform$Cmd$map, author$project$Main$PageMsg, newPageCmd)
									])));
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 9:
					var url = _n0.a;
					return A3(author$project$Main$updateImageResult, model, url, author$project$Main$JustCompleted);
				case 10:
					var url = _n0.a;
					return A3(author$project$Main$updateImageResult, model, url, author$project$Main$ReadyToDisplay);
				case 11:
					var url = _n0.a;
					var err = _n0.b;
					return A3(
						author$project$Main$updateImageResult,
						model,
						url,
						author$project$Main$Failed(err));
				case 7:
					var albumListPage = _n0.a;
					var maybeScroll = _n0.b;
					var title = function () {
						var albumList = albumListPage.a;
						return albumList.br;
					}();
					var scrollCmd = function () {
						if (!maybeScroll.$) {
							var pos = maybeScroll.a;
							return A2(
								elm$core$Task$attempt,
								function (_n13) {
									return author$project$Main$NoBootstrap;
								},
								A3(elm$browser$Browser$Dom$setViewportOf, author$project$AlbumStyles$rootDivId, 0, pos));
						} else {
							return author$project$Main$scrollToTop;
						}
					}();
					var newModel = A7(
						author$project$Main$LoadedList,
						author$project$Main$keyOf(model),
						albumListPage,
						author$project$Main$flagsOf(model),
						author$project$Main$homeOf(model),
						elm$core$Dict$empty,
						elm$core$Maybe$Nothing,
						1);
					return _Utils_Tuple2(newModel, scrollCmd);
				case 8:
					var albumPage = _n0.a;
					var parents = _n0.b;
					var urls = author$project$AlbumPage$urlsToGet(albumPage);
					var newModel = A8(
						author$project$Main$LoadedAlbum,
						author$project$Main$keyOf(model),
						albumPage,
						parents,
						author$project$Main$flagsOf(model),
						author$project$Main$homeOf(model),
						A2(author$project$ListUtils$dictWithValues, urls, author$project$Main$UrlRequested),
						elm$core$Maybe$Nothing,
						1);
					return _Utils_Tuple2(
						newModel,
						elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									author$project$Main$scrollToTop,
									A2(author$project$Main$getUrls, elm$core$Dict$empty, urls)
								])));
				case 13:
					var pos = _n0.a;
					return _Utils_Tuple2(
						A2(author$project$Main$withScrollPos, pos, model),
						elm$core$Platform$Cmd$none);
				case 12:
					var scroll = _n0.a;
					return _Utils_Tuple2(
						model,
						A2(
							elm$core$Maybe$withDefault,
							elm$core$Platform$Cmd$none,
							A2(
								elm$core$Maybe$map,
								function (s) {
									return A2(
										elm$core$Task$attempt,
										function (_n15) {
											return author$project$Main$NoBootstrap;
										},
										A3(
											elm$browser$Browser$Dom$setViewportOf,
											author$project$AlbumStyles$rootDivId,
											0,
											A2(author$project$DebugSupport$log, 'startup scroll to', s)));
								},
								scroll)));
				case 14:
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 15:
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 17:
					var s = _n0.a;
					return _Utils_Tuple2(
						A2(author$project$Main$withScroll, model, s),
						author$project$ResultUtils$toCmd(
							A2(
								elm$core$Maybe$withDefault,
								author$project$Main$NoBootstrap,
								A2(
									author$project$Main$scrollToCmd,
									model,
									elm$core$Maybe$Just(s)))));
				case 16:
					var paths = _n0.a;
					return _Utils_Tuple2(
						A2(author$project$Main$withPaths, model, paths),
						author$project$ResultUtils$toCmd(
							A2(
								elm$core$Maybe$withDefault,
								author$project$Main$NoBootstrap,
								A2(
									author$project$Main$pathsToCmd,
									model,
									elm$core$Maybe$Just(paths)))));
				case 18:
					var next = _n0.a;
					var rest = _n0.b;
					var _n16 = A2(author$project$Main$update, next, model);
					var nextModel = _n16.a;
					var nextCmd = _n16.b;
					if (!rest.b) {
						return _Utils_Tuple2(
							nextModel,
							A2(
								author$project$DebugSupport$log,
								'sequence msg ' + (author$project$DebugSupport$debugString(next) + ' (last) produces cmd'),
								nextCmd));
					} else {
						var r1 = rest.a;
						var rs = rest.b;
						var _n18 = A2(author$project$Main$update, r1, nextModel);
						var r1Model = _n18.a;
						var r1Cmds = _n18.b;
						var _n19 = function () {
							if (!rs.b) {
								return _Utils_Tuple2(r1Model, r1Cmds);
							} else {
								var rs1 = rs.a;
								var rss = rs.b;
								var _n21 = A2(
									author$project$Main$update,
									A2(author$project$Main$Sequence, rs1, rss),
									r1Model);
								var rsModel = _n21.a;
								var rsCmds = _n21.b;
								return _Utils_Tuple2(
									rsModel,
									author$project$ResultUtils$toCmd(
										A2(
											author$project$Main$SequenceCmd,
											r1Cmds,
											_List_fromArray(
												[rsCmds]))));
							}
						}();
						var rModel = _n19.a;
						var rCmds = _n19.b;
						return _Utils_Tuple2(
							rModel,
							author$project$ResultUtils$toCmd(
								A2(
									author$project$Main$SequenceCmd,
									A2(
										author$project$DebugSupport$log,
										'sequence msg ' + (author$project$DebugSupport$debugString(next) + ' (cont\'d) produces cmd'),
										nextCmd),
									_List_fromArray(
										[rCmds]))));
					}
				case 19:
					var next = _n0.a;
					var rest = _n0.b;
					var cmds = function () {
						if (!rest.b) {
							return A2(author$project$DebugSupport$log, 'sequenced cmd: last', next);
						} else {
							var r1 = rest.a;
							var rs = rest.b;
							return elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2(author$project$DebugSupport$log, 'sequenced cmd: next', next),
										author$project$ResultUtils$toCmd(
										A2(author$project$Main$SequenceCmd, r1, rs))
									]));
						}
					}();
					return _Utils_Tuple2(model, cmds);
				case 20:
					var urlRequest = _n0.a;
					if (!urlRequest.$) {
						var url = urlRequest.a;
						var hUrl = A2(
							elm$core$Maybe$andThen,
							elm$url$Url$fromString,
							author$project$Main$homeOf(model));
						var _n24 = A2(
							elm$core$Maybe$withDefault,
							false,
							A2(
								elm$core$Maybe$map,
								function (h) {
									return _Utils_eq(h, url);
								},
								hUrl));
						if (_n24) {
							return _Utils_Tuple2(
								model,
								elm$browser$Browser$Navigation$load(
									elm$url$Url$toString(url)));
						} else {
							return _Utils_Tuple2(
								A2(
									author$project$DebugSupport$log,
									'ignoring unexpected internal url request not for home url (' + (A2(
										elm$core$Maybe$withDefault,
										'home not set',
										author$project$Main$homeOf(model)) + (') ' + elm$url$Url$toString(url))),
									model),
								elm$core$Platform$Cmd$none);
						}
					} else {
						var url = urlRequest.a;
						return _Utils_Tuple2(
							model,
							elm$browser$Browser$Navigation$load(url));
					}
				default:
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			}
		}
	});
var author$project$AlbumPage$titleOf = function (albumPage) {
	if (!albumPage.$) {
		var album = albumPage.a;
		return album.bG;
	} else {
		var album = albumPage.b;
		return album.bm.bb;
	}
};
var elm$json$Json$Encode$string = _Json_wrap;
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var Skinney$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {ai: charsProcessed, ap: hash, ab: seed, ax: shift};
	});
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var Skinney$murmur3$Murmur3$mur = F2(
	function (c, h) {
		return 4294967295 & (((h & 65535) * c) + ((65535 & ((h >>> 16) * c)) << 16));
	});
var elm$core$Bitwise$or = _Bitwise_or;
var elm$core$Bitwise$xor = _Bitwise_xor;
var Skinney$murmur3$Murmur3$mix = F2(
	function (h1, h2) {
		var k1 = A2(Skinney$murmur3$Murmur3$mur, 3432918353, h2);
		return h1 ^ A2(Skinney$murmur3$Murmur3$mur, 461845907, (k1 >>> 17) | (k1 << 15));
	});
var Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = data.ap ? A2(Skinney$murmur3$Murmur3$mix, data.ab, data.ap) : data.ab;
	var h1 = acc ^ data.ai;
	var h2 = A2(Skinney$murmur3$Murmur3$mur, 2246822507, h1 ^ (h1 >>> 16));
	var h3 = A2(Skinney$murmur3$Murmur3$mur, 3266489909, h2 ^ (h2 >>> 13));
	return (h3 ^ (h3 >>> 16)) >>> 0;
};
var Skinney$murmur3$Murmur3$step = function (acc) {
	var h1 = A2(Skinney$murmur3$Murmur3$mur, 5, (acc >>> 19) | (acc << 13));
	return ((h1 & 65535) + 27492) + ((65535 & ((h1 >>> 16) + 58964)) << 16);
};
var Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.ap | (c << data.ax);
		var _n0 = data.ax;
		if (_n0 === 24) {
			var newHash = Skinney$murmur3$Murmur3$step(
				A2(Skinney$murmur3$Murmur3$mix, data.ab, res));
			return {ai: data.ai + 1, ap: 0, ab: newHash, ax: 0};
		} else {
			return {ai: data.ai + 1, ap: res, ab: data.ab, ax: data.ax + 8};
		}
	});
var Skinney$murmur3$UTF8$accumulate = F3(
	function (add, _char, _n0) {
		var acc = _n0.a;
		var combine = _n0.b;
		if (combine.$ === 1) {
			return (_char < 128) ? _Utils_Tuple2(
				A2(add, _char, acc),
				elm$core$Maybe$Nothing) : ((_char < 2048) ? _Utils_Tuple2(
				A2(
					add,
					128 | (63 & _char),
					A2(add, 192 | (_char >>> 6), acc)),
				elm$core$Maybe$Nothing) : (((_char < 55296) || (_char >= 57344)) ? _Utils_Tuple2(
				A2(
					add,
					128 | (63 & _char),
					A2(
						add,
						128 | (63 & (_char >>> 6)),
						A2(add, 224 | (_char >>> 12), acc))),
				elm$core$Maybe$Nothing) : _Utils_Tuple2(
				acc,
				elm$core$Maybe$Just(_char))));
		} else {
			var prev = combine.a;
			var combined = ((1023 & _char) | ((1023 & prev) << 10)) + 65536;
			return _Utils_Tuple2(
				A2(
					add,
					128 | (63 & combined),
					A2(
						add,
						128 | (63 & (combined >>> 6)),
						A2(
							add,
							128 | (63 & (combined >>> 12)),
							A2(add, 240 | (combined >>> 18), acc)))),
				elm$core$Maybe$Nothing);
		}
	});
var elm$core$String$foldl = _String_foldl;
var Skinney$murmur3$UTF8$foldl = F3(
	function (op, acc, input) {
		var helper = F2(
			function (_char, res) {
				return A3(
					Skinney$murmur3$UTF8$accumulate,
					op,
					elm$core$Char$toCode(_char),
					res);
			});
		return A3(
			elm$core$String$foldl,
			helper,
			_Utils_Tuple2(acc, elm$core$Maybe$Nothing),
			input).a;
	});
var Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return Skinney$murmur3$Murmur3$finalize(
			A3(
				Skinney$murmur3$UTF8$foldl,
				Skinney$murmur3$Murmur3$hashFold,
				A4(Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var elm$core$String$cons = _String_cons;
var rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {b_: elm$core$Maybe$Nothing, cc: _List_Nil, cm: _List_Nil, cG: snippets};
};
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_n0) {
	var declarations = _n0;
	return declarations;
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (!declarations.a.$) {
				var _n1 = declarations.a.a;
				var firstSelector = _n1.a;
				var otherSelectors = _n1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2(elm$core$List$cons, firstSelector, otherSelectors),
					rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return elm$core$Maybe$Just(
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
var rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return elm$core$Maybe$Nothing;
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
var rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 9, a: a};
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e};
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (!declaration.$) {
			var structureStyleBlock = declaration.a;
			return A5(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 0:
				var structureStyleBlock = declaration.a;
				return A2(
					rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 1:
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 2:
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 3:
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
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
var rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 8, a: a};
};
var rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 5, a: a};
};
var rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 6, a: a};
};
var rtfeldman$elm_css$Css$Structure$PageRule = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 7, a: a};
};
var rtfeldman$elm_css$Css$Structure$mapLast = F2(
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
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _n0) {
		var firstSelector = _n0.a;
		var otherSelectors = _n0.b;
		var properties = _n0.c;
		return A3(
			rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var rtfeldman$elm_css$Css$Structure$appendProperty = F2(
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
								rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2(rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 1:
						var _n1 = declarations.a;
						var mediaQueries = _n1.a;
						var styleBlocks = _n1.b;
						return _List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									rtfeldman$elm_css$Css$Structure$mapLast,
									rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2(elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _n0) {
		var sequence = _n0.a;
		var selectors = _n0.b;
		return A3(
			rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			elm$core$Maybe$Just(pseudo));
	});
var rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 1, a: a};
};
var rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 0:
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 1:
				var list = sequence.a;
				return rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _n1 = list.a;
				var combinator = _n1.a;
				var sequence = _n1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2(rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				rtfeldman$elm_css$Css$Structure$Selector,
				A2(rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2(rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_n0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 0:
							var styleBlock = declarations.a.a;
							return A2(
								elm$core$List$map,
								rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 1:
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _n1 = declarations.a;
									var mediaQueries = _n1.a;
									var _n2 = _n1.b;
									var styleBlock = _n2.a;
									return _List_fromArray(
										[
											A2(
											rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _n3 = declarations.a;
									var mediaQueries = _n3.a;
									var _n4 = _n3.b;
									var first = _n4.a;
									var rest = _n4.b;
									var _n5 = A2(
										rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2(rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_n5.b && (_n5.a.$ === 1)) && (!_n5.b.b)) {
										var _n6 = _n5.a;
										var newMediaQueries = _n6.a;
										var newStyleBlocks = _n6.b;
										return _List_fromArray(
											[
												A2(
												rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2(elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _n5;
										return newDeclarations;
									}
								}
							} else {
								break _n0$12;
							}
						case 2:
							var _n7 = declarations.a;
							var str = _n7.a;
							var nestedDeclarations = _n7.b;
							return _List_fromArray(
								[
									A2(
									rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 3:
							var _n8 = declarations.a;
							var str1 = _n8.a;
							var str2 = _n8.b;
							var str3 = _n8.c;
							var str4 = _n8.d;
							var styleBlock = _n8.e;
							return A2(
								elm$core$List$map,
								A4(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 4:
							var _n9 = declarations.a;
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
					break _n0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			elm$core$List$cons,
			first,
			A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (!declaration.$) {
			var styleBlock = declaration.a;
			return A2(
				rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var rtfeldman$elm_css$Hash$murmurSeed = 15739;
var elm$core$String$fromList = _String_fromList;
var elm$core$Basics$modBy = _Basics_modBy;
var rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
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
var rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2(elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var rtfeldman$elm_hex$Hex$toString = function (num) {
	return elm$core$String$fromList(
		(num < 0) ? A2(
			elm$core$List$cons,
			'-',
			A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		elm$core$String$cons,
		'_',
		rtfeldman$elm_hex$Hex$toString(
			A2(Skinney$murmur3$Murmur3$hashString, rtfeldman$elm_css$Hash$murmurSeed, str)));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				elm$core$List$tail(decls));
		};
		var nextResult = A2(
			rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _n14 = _Utils_Tuple2(
				elm$core$List$head(nextResult),
				rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((!_n14.a.$) && (!_n14.b.$)) {
				var nextResultParent = _n14.a.a;
				var originalParent = _n14.b.a;
				return _Utils_ap(
					A2(
						elm$core$List$take,
						elm$core$List$length(declarations) - 1,
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
			return elm$core$List$concat(
				A2(
					rtfeldman$elm_css$Css$Structure$mapLast,
					rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						elm$core$List$map,
						elm$core$List$singleton,
						A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				elm$core$Maybe$map,
				insertStylesToNestedDecl,
				rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 0:
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2(rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 1:
					var _n4 = styles.a;
					var selector = _n4.a;
					var nestedStyles = _n4.b;
					var rest = styles.b;
					return A4(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 2:
					var _n5 = styles.a;
					var selectorCombinator = _n5.a;
					var snippets = _n5.b;
					var rest = styles.b;
					var chain = F2(
						function (_n9, _n10) {
							var originalSequence = _n9.a;
							var originalTuples = _n9.b;
							var originalPseudoElement = _n9.c;
							var newSequence = _n10.a;
							var newTuples = _n10.b;
							var newPseudoElement = _n10.c;
							return A3(
								rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 0:
								var _n7 = declaration.a;
								var firstSelector = _n7.a;
								var otherSelectors = _n7.b;
								var nestedStyles = _n7.c;
								var newSelectors = A2(
									elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											elm$core$List$map,
											chain(originalSelector),
											A2(elm$core$List$cons, firstSelector, otherSelectors));
									},
									rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3(rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 1:
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 2:
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 3:
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									elm$core$List$map,
									A4(rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 4:
								var str = declaration.a;
								var properties = declaration.b;
								return _List_fromArray(
									[
										A2(rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
									]);
							case 5:
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 6:
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 7:
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								elm$core$List$map,
								expandDeclaration,
								A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 3:
					var _n11 = styles.a;
					var pseudoElement = _n11.a;
					var nestedStyles = _n11.b;
					var rest = styles.b;
					return A4(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 5:
					var str = styles.a.a;
					var rest = styles.b;
					var name = rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2(rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$Structure$Keyframes(
								{cX: str, dk: name})
							]));
				case 4:
					var _n12 = styles.a;
					var mediaQueries = _n12.a;
					var nestedStyles = _n12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _n13 = rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_n13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _n13.a;
							var otherSelectors = _n13.b;
							return A2(
								elm$core$List$map,
								rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									elm$core$List$singleton(
										rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3(rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_n2) {
	var firstSelector = _n2.a;
	var otherSelectors = _n2.b;
	var styles = _n2.c;
	return A2(
		rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3(rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				elm$core$List$map,
				rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2(elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2(rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 0:
			var styleBlock = snippetDeclaration.a;
			return rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 1:
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 2:
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 3:
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				elm$core$List$map,
				A4(rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 4:
			var str = snippetDeclaration.a;
			var properties = snippetDeclaration.b;
			return _List_fromArray(
				[
					A2(rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
				]);
		case 5:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 6:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 7:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_n0) {
	var charset = _n0.b_;
	var imports = _n0.cc;
	var namespaces = _n0.cm;
	var snippets = _n0.cG;
	var declarations = rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {b_: charset, cY: declarations, cc: imports, cm: namespaces};
};
var rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _n0) {
		var keyframesByName = _n0.a;
		var declarations = _n0.b;
		switch (declaration.$) {
			case 0:
				var _n2 = declaration.a;
				var properties = _n2.c;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 1:
				var styleBlocks = declaration.b;
				return A2(
					elm$core$List$all,
					function (_n3) {
						var properties = _n3.c;
						return elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 2:
				var otherDeclarations = declaration.b;
				return elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 3:
				return _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 4:
				var properties = declaration.b;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 5:
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 6:
				var record = declaration.a;
				return elm$core$String$isEmpty(record.cX) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3(elm$core$Dict$insert, record.dk, record.cX, keyframesByName),
					declarations);
			case 7:
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 8:
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					elm$core$List$all,
					function (_n4) {
						var properties = _n4.b;
						return elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
		}
	});
var rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			elm$core$List$append,
			A2(
				elm$core$List$map,
				function (_n0) {
					var name = _n0.a;
					var decl = _n0.b;
					return rtfeldman$elm_css$Css$Structure$Keyframes(
						{cX: decl, dk: name});
				},
				elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_n0) {
	var charset = _n0.b_;
	var imports = _n0.cc;
	var namespaces = _n0.cm;
	var declarations = _n0.cY;
	var _n1 = A3(
		elm$core$List$foldr,
		rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2(elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _n1.a;
	var compactedDeclarations = _n1.b;
	var finalDeclarations = A2(rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {b_: charset, cY: finalDeclarations, cc: imports, cm: namespaces};
};
var rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		elm$core$Maybe$withDefault,
		'',
		A2(
			elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.b8 + (A2(
		elm$core$Maybe$withDefault,
		'',
		A2(
			elm$core$Maybe$map,
			elm$core$Basics$append(': '),
			expression.K)) + ')'));
};
var rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType) {
		case 0:
			return 'print';
		case 1:
			return 'screen';
		default:
			return 'speech';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				elm$core$String$join,
				' and ',
				A2(
					elm$core$List$cons,
					rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 0:
			var expressions = mediaQuery.a;
			return A2(
				elm$core$String$join,
				' and ',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions));
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
var rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + (rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var rtfeldman$elm_css$Css$Structure$Output$importToString = function (_n0) {
	var name = _n0.a;
	var mediaQueries = _n0.b;
	return A2(
		elm$core$String$join,
		'\n',
		A2(
			elm$core$List$map,
			rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
			mediaQueries));
};
var rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_n0) {
	var prefix = _n0.a;
	var str = _n0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var rtfeldman$elm_css$Css$Structure$Output$spaceIndent = '    ';
var rtfeldman$elm_css$Css$Structure$Output$indent = function (str) {
	return _Utils_ap(rtfeldman$elm_css$Css$Structure$Output$spaceIndent, str);
};
var rtfeldman$elm_css$Css$Structure$Output$noIndent = '';
var rtfeldman$elm_css$Css$Structure$Output$emitProperty = function (str) {
	return str + ';';
};
var rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A2(
		elm$core$String$join,
		'\n',
		A2(
			elm$core$List$map,
			A2(elm$core$Basics$composeL, rtfeldman$elm_css$Css$Structure$Output$indent, rtfeldman$elm_css$Css$Structure$Output$emitProperty),
			properties));
};
var elm$core$String$append = _String_append;
var rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_n0) {
	var str = _n0;
	return '::' + str;
};
var rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
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
var rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
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
var rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 0:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$cons,
					str,
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
		case 1:
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A2(
				elm$core$String$join,
				'',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors));
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$cons,
					str,
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
	}
};
var rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_n0) {
	var combinator = _n0.a;
	var sequence = _n0.b;
	return A2(
		elm$core$String$join,
		' ',
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator),
				rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence)
			]));
};
var rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_n0) {
	var simpleSelectorSequence = _n0.a;
	var chain = _n0.b;
	var pseudoElement = _n0.c;
	var segments = A2(
		elm$core$List$cons,
		rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		elm$core$String$join,
		'',
		_List_fromArray(
			[
				A2(
				elm$core$Maybe$withDefault,
				'',
				A2(elm$core$Maybe$map, rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement))
			]));
	return A2(
		elm$core$String$append,
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$filter,
				A2(elm$core$Basics$composeL, elm$core$Basics$not, elm$core$String$isEmpty),
				segments)),
		pseudoElementsString);
};
var rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _n0) {
		var firstSelector = _n0.a;
		var otherSelectors = _n0.b;
		var properties = _n0.c;
		var selectorStr = A2(
			elm$core$String$join,
			', ',
			A2(
				elm$core$List$map,
				rtfeldman$elm_css$Css$Structure$Output$selectorToString,
				A2(elm$core$List$cons, firstSelector, otherSelectors)));
		return A2(
			elm$core$String$join,
			'',
			_List_fromArray(
				[
					selectorStr,
					' {\n',
					indentLevel,
					rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties),
					'\n',
					indentLevel,
					'}'
				]));
	});
var rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 0:
			var styleBlock = decl.a;
			return A2(rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, rtfeldman$elm_css$Css$Structure$Output$noIndent, styleBlock);
		case 1:
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A2(
				elm$core$String$join,
				',\n',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, mediaQueries));
			var blocks = A2(
				elm$core$String$join,
				'\n\n',
				A2(
					elm$core$List$map,
					A2(
						elm$core$Basics$composeL,
						rtfeldman$elm_css$Css$Structure$Output$indent,
						rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock(rtfeldman$elm_css$Css$Structure$Output$spaceIndent)),
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
			var name = decl.a.dk;
			var declaration = decl.a.cX;
			return '@keyframes ' + (name + (' {\n' + (declaration + '\n}')));
		case 7:
			return 'TODO';
		case 8:
			return 'TODO';
		default:
			return 'TODO';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_n0) {
	var charset = _n0.b_;
	var imports = _n0.cc;
	var namespaces = _n0.cm;
	var declarations = _n0.cY;
	return A2(
		elm$core$String$join,
		'\n\n',
		A2(
			elm$core$List$filter,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, elm$core$String$isEmpty),
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset),
					A2(
					elm$core$String$join,
					'\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$importToString, imports)),
					A2(
					elm$core$String$join,
					'\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$namespaceToString, namespaces)),
					A2(
					elm$core$String$join,
					'\n\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, declarations))
				])));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp = function (sheet) {
	return rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		rtfeldman$elm_css$Css$Structure$compactStylesheet(
			rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (styles) {
	return A2(
		elm$core$String$join,
		'\n\n',
		A2(elm$core$List$map, rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp, styles));
};
var rtfeldman$elm_css$Css$Preprocess$Snippet = elm$core$Basics$identity;
var rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3(rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, elm$core$Maybe$Nothing);
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
				A3(rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
			]);
	});
var rtfeldman$elm_css$VirtualDom$Styled$murmurSeed = 15739;
var rtfeldman$elm_css$VirtualDom$Styled$getClassname = function (styles) {
	return elm$core$List$isEmpty(styles) ? 'unstyled' : A2(
		elm$core$String$cons,
		'_',
		rtfeldman$elm_hex$Hex$toString(
			A2(
				Skinney$murmur3$Murmur3$hashString,
				rtfeldman$elm_css$VirtualDom$Styled$murmurSeed,
				rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
					elm$core$List$singleton(
						rtfeldman$elm_css$Css$Preprocess$stylesheet(
							elm$core$List$singleton(
								A2(
									rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
									styles,
									rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_List_Nil)))))))));
};
var rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var classname = rtfeldman$elm_css$VirtualDom$Styled$getClassname(styles);
	var classProperty = A2(
		elm$virtual_dom$VirtualDom$property,
		'className',
		elm$json$Json$Encode$string(classname));
	return A3(rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, styles, classname);
};
var rtfeldman$elm_css$Html$Styled$Attributes$css = rtfeldman$elm_css$Html$Styled$Internal$css;
var author$project$AlbumStyles$styles = rtfeldman$elm_css$Html$Styled$Attributes$css;
var author$project$ImageViews$encodeSrc = function (is) {
	return author$project$ListUtils$encodePath(is.bH) + (' ' + (elm$core$String$fromInt(is.bJ) + 'w'));
};
var author$project$ImageViews$encodeSrcSet = function (is) {
	return A2(
		elm$core$String$join,
		', ',
		A2(elm$core$List$map, author$project$ImageViews$encodeSrc, is));
};
var rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$VirtualDom$Styled$node = rtfeldman$elm_css$VirtualDom$Styled$Node;
var rtfeldman$elm_css$Html$Styled$node = rtfeldman$elm_css$VirtualDom$Styled$node;
var rtfeldman$elm_css$Html$Styled$img = rtfeldman$elm_css$Html$Styled$node('img');
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var rtfeldman$elm_css$VirtualDom$Styled$attribute = F2(
	function (key, value) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$attribute, key, value),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Attributes$attribute = rtfeldman$elm_css$VirtualDom$Styled$attribute;
var rtfeldman$elm_css$Html$Styled$Attributes$height = function (n) {
	return A2(
		rtfeldman$elm_css$VirtualDom$Styled$attribute,
		'height',
		elm$core$String$fromInt(n));
};
var rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$property, key, value),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			elm$json$Json$Encode$string(string));
	});
var rtfeldman$elm_css$Html$Styled$Attributes$src = function (url) {
	return A2(rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, 'src', url);
};
var rtfeldman$elm_css$Html$Styled$Attributes$width = function (n) {
	return A2(
		rtfeldman$elm_css$VirtualDom$Styled$attribute,
		'width',
		elm$core$String$fromInt(n));
};
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var rtfeldman$elm_css$VirtualDom$Styled$on = F2(
	function (eventName, handler) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$on, eventName, handler),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Events$on = F2(
	function (event, decoder) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var rtfeldman$elm_css$Html$Styled$Events$onClick = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$ImageViews$render = F5(
	function (idefault, is, s, otherAttrs, msg) {
		var srcset = function () {
			if (!is.b) {
				return _List_Nil;
			} else {
				return _List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$Attributes$attribute,
						'srcset',
						author$project$ImageViews$encodeSrcSet(is))
					]);
			}
		}();
		var clickAttr = function () {
			if (!msg.$) {
				var m = msg.a;
				return _List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Events$onClick(m)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var baseAttrs = _List_fromArray(
			[
				author$project$AlbumStyles$styles(s),
				rtfeldman$elm_css$Html$Styled$Attributes$src(
				author$project$ListUtils$encodePath(idefault.bH)),
				rtfeldman$elm_css$Html$Styled$Attributes$width(idefault.bJ),
				rtfeldman$elm_css$Html$Styled$Attributes$height(idefault.bK)
			]);
		return A2(
			rtfeldman$elm_css$Html$Styled$img,
			_Utils_ap(
				baseAttrs,
				_Utils_ap(
					otherAttrs,
					_Utils_ap(srcset, clickAttr))),
			_List_Nil);
	});
var rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(rtfeldman$elm_css$Css$property, key, arg.K);
	});
var rtfeldman$elm_css$Css$height = rtfeldman$elm_css$Css$prop1('height');
var rtfeldman$elm_css$Css$margin = rtfeldman$elm_css$Css$prop1('margin');
var rtfeldman$elm_css$Css$PxUnits = 0;
var rtfeldman$elm_css$Css$Structure$Compatible = 0;
var rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			bL: 0,
			bX: 0,
			am: 0,
			p: 0,
			aM: 0,
			ar: 0,
			Q: 0,
			as: 0,
			at: 0,
			Y: 0,
			Z: 0,
			I: 0,
			S: numericValue,
			aA: 0,
			aC: unitLabel,
			aX: units,
			K: _Utils_ap(
				elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var rtfeldman$elm_css$Css$px = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'px');
var rtfeldman$elm_css$Css$width = rtfeldman$elm_css$Css$prop1('width');
var author$project$ImageViews$renderPresized = F8(
	function (margin, w, h, i, iRest, s, otherAttrs, msg) {
		return A5(
			author$project$ImageViews$render,
			A4(author$project$ImageViews$smallestImageBiggerThan, w, h, i, iRest),
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$margin(
						rtfeldman$elm_css$Css$px(margin)),
						rtfeldman$elm_css$Css$width(
						rtfeldman$elm_css$Css$px(w - (2 * margin))),
						rtfeldman$elm_css$Css$height(
						rtfeldman$elm_css$Css$px(h - (2 * margin)))
					]),
				s),
			otherAttrs,
			msg);
	});
var author$project$ThumbPage$sizeForHeight = function (height) {
	return author$project$ThumbPage$sizeForScaler(
		function (is1) {
			return height / is1.bK;
		});
};
var rtfeldman$elm_css$Css$borderRadius = rtfeldman$elm_css$Css$prop1('border-radius');
var rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.K, argB.K, argC.K, argD.K])));
	});
var rtfeldman$elm_css$Css$boxShadow4 = rtfeldman$elm_css$Css$prop4('box-shadow');
var rtfeldman$elm_css$Css$cursor = rtfeldman$elm_css$Css$prop1('cursor');
var rtfeldman$elm_css$Css$pointer = {b: 0, K: 'pointer'};
var rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return funcName + ('(' + (A2(elm$core$String$join, ', ', args) + ')'));
	});
var rtfeldman$elm_css$Css$rgb = F3(
	function (r, g, b) {
		return {
			r: 1,
			s: b,
			m: 0,
			v: g,
			w: r,
			K: A2(
				rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					elm$core$List$map,
					elm$core$String$fromInt,
					_List_fromArray(
						[r, g, b])))
		};
	});
var author$project$ThumbPage$thumbStyles = _List_fromArray(
	[
		rtfeldman$elm_css$Css$borderRadius(
		rtfeldman$elm_css$Css$px(5)),
		A4(
		rtfeldman$elm_css$Css$boxShadow4,
		rtfeldman$elm_css$Css$px(1),
		rtfeldman$elm_css$Css$px(1),
		rtfeldman$elm_css$Css$px(2),
		A3(rtfeldman$elm_css$Css$rgb, 80, 80, 80)),
		rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
	]);
var rtfeldman$elm_css$Css$marginLeft = rtfeldman$elm_css$Css$prop1('margin-left');
var rtfeldman$elm_css$Css$marginRight = rtfeldman$elm_css$Css$prop1('margin-right');
var rtfeldman$elm_css$Css$middle = rtfeldman$elm_css$Css$prop1('middle');
var rtfeldman$elm_css$Css$Internal$property = F2(
	function (key, value) {
		return rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 6, a: a};
};
var rtfeldman$elm_css$Css$Internal$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			switch (style.$) {
				case 0:
					var str = style.a;
					var key = A2(
						elm$core$Maybe$withDefault,
						'',
						elm$core$List$head(
							A2(elm$core$String$split, ':', str)));
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, key);
				case 1:
					var selector = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-selector'));
				case 2:
					var combinator = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-combinator'));
				case 3:
					var pseudoElement = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-pseudo-element setter'));
				case 4:
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-media-query'));
				case 5:
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-keyframes'));
				default:
					if (!style.a.b) {
						return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-empty-Style'));
					} else {
						if (!style.a.b.b) {
							var _n1 = style.a;
							var only = _n1.a;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = only;
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						} else {
							var _n2 = style.a;
							var first = _n2.a;
							var rest = _n2.b;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = rtfeldman$elm_css$Css$Preprocess$ApplyStyles(rest);
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var rtfeldman$elm_css$Css$Internal$IncompatibleUnits = 0;
var rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty = A3(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '', 0);
var rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var author$project$AlbumListPage$renderListImage = F2(
	function (selectedMsg, img) {
		var _n0 = (_Utils_cmp(img.bz.bJ, img.bz.bK) > 0) ? A2(author$project$ThumbPage$sizeForWidth, 200, img) : A2(author$project$ThumbPage$sizeForHeight, 200, img);
		var xScaled = _n0.a;
		var yScaled = _n0.b;
		var sideMargin = 10 + A2(elm$core$Basics$max, 0, (yScaled - xScaled) / 2);
		return A8(
			author$project$ImageViews$renderPresized,
			10,
			xScaled,
			yScaled,
			img.bz,
			img.bA,
			_Utils_ap(
				author$project$ThumbPage$thumbStyles,
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$verticalAlign(rtfeldman$elm_css$Css$middle),
						rtfeldman$elm_css$Css$marginLeft(
						rtfeldman$elm_css$Css$px(sideMargin)),
						rtfeldman$elm_css$Css$marginRight(
						rtfeldman$elm_css$Css$px(sideMargin))
					])),
			_List_Nil,
			elm$core$Maybe$Just(selectedMsg));
	});
var author$project$AlbumStyles$white = A3(rtfeldman$elm_css$Css$rgb, 255, 255, 255);
var rtfeldman$elm_css$Css$color = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'color', c.K);
};
var rtfeldman$elm_css$Html$Styled$div = rtfeldman$elm_css$Html$Styled$node('div');
var rtfeldman$elm_css$Html$Styled$span = rtfeldman$elm_css$Html$Styled$node('span');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 4, a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$text = function (str) {
	return rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
		elm$virtual_dom$VirtualDom$text(str));
};
var rtfeldman$elm_css$Html$Styled$text = rtfeldman$elm_css$VirtualDom$Styled$text;
var author$project$AlbumListPage$viewAlbumOrList = F3(
	function (viewList, viewAlbum, albumOrList) {
		var childStyles = author$project$AlbumStyles$styles(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$color(author$project$AlbumStyles$white)
				]));
		if (!albumOrList.$) {
			var albumList = albumOrList.a;
			return A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						childStyles,
						rtfeldman$elm_css$Html$Styled$Events$onClick(
						viewList(albumList))
					]),
				_List_fromArray(
					[
						A2(
						author$project$AlbumListPage$renderListImage,
						viewList(albumList),
						albumList.bq),
						A2(
						rtfeldman$elm_css$Html$Styled$span,
						_List_Nil,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(albumList.br)
							]))
					]));
		} else {
			var album = albumOrList.a;
			return A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						childStyles,
						rtfeldman$elm_css$Html$Styled$Events$onClick(
						viewAlbum(album))
					]),
				_List_fromArray(
					[
						A2(
						author$project$AlbumListPage$renderListImage,
						viewAlbum(album),
						album.bF),
						A2(
						rtfeldman$elm_css$Html$Styled$span,
						_List_Nil,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(album.bG)
							]))
					]));
		}
	});
var author$project$AlbumStyles$black = A3(rtfeldman$elm_css$Css$rgb, 0, 0, 0);
var rtfeldman$elm_css$Css$absolute = {ds: 0, K: 'absolute'};
var rtfeldman$elm_css$Css$fixed = {aF: 0, ds: 0, a9: 0, K: 'fixed'};
var rtfeldman$elm_css$Css$position = rtfeldman$elm_css$Css$prop1('position');
var author$project$AlbumStyles$rootPos = function (flags) {
	return flags.cF ? rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$fixed) : rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute);
};
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$float = _Json_decodeFloat;
var rtfeldman$elm_css$Css$auto = {cQ: 0, b: 0, am: 0, a1: 0, de: 0, ar: 0, Q: 0, I: 0, au: 0, E: 0, a9: 0, aB: 0, x: 0, K: 'auto'};
var rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'background-color', c.K);
};
var rtfeldman$elm_css$Css$hidden = {t: 0, au: 0, K: 'hidden', aY: 0};
var rtfeldman$elm_css$Css$overflowX = rtfeldman$elm_css$Css$prop1('overflow-x');
var rtfeldman$elm_css$Css$overflowY = rtfeldman$elm_css$Css$prop1('overflow-y');
var rtfeldman$elm_css$Css$VhUnits = 0;
var rtfeldman$elm_css$Css$vh = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'vh');
var rtfeldman$elm_css$Css$VwUnits = 0;
var rtfeldman$elm_css$Css$vw = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'vw');
var rtfeldman$elm_css$Html$Styled$Attributes$id = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('id');
var author$project$AlbumStyles$rootDiv = F3(
	function (flags, scrollMsgMaker, extraStyles) {
		return rtfeldman$elm_css$Html$Styled$div(
			_Utils_ap(
				_List_fromArray(
					[
						author$project$AlbumStyles$styles(
						_Utils_ap(
							_List_fromArray(
								[
									author$project$AlbumStyles$rootPos(flags),
									rtfeldman$elm_css$Css$height(
									rtfeldman$elm_css$Css$vh(100)),
									rtfeldman$elm_css$Css$width(
									rtfeldman$elm_css$Css$vw(100)),
									rtfeldman$elm_css$Css$overflowX(rtfeldman$elm_css$Css$hidden),
									rtfeldman$elm_css$Css$overflowY(rtfeldman$elm_css$Css$auto),
									A2(rtfeldman$elm_css$Css$property, '-webkit-overflow-scrolling', 'touch'),
									rtfeldman$elm_css$Css$backgroundColor(author$project$AlbumStyles$black)
								]),
							extraStyles)),
						rtfeldman$elm_css$Html$Styled$Attributes$id(author$project$AlbumStyles$rootDivId)
					]),
				function () {
					if (scrollMsgMaker.$ === 1) {
						return _List_Nil;
					} else {
						var sMM = scrollMsgMaker.a;
						return _List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$Events$on,
								'scroll',
								A2(
									elm$json$Json$Decode$map,
									sMM,
									A2(
										elm$json$Json$Decode$at,
										_List_fromArray(
											['target', 'scrollTop']),
										elm$json$Json$Decode$float)))
							]);
					}
				}()));
	});
var rtfeldman$elm_css$Css$displayFlex = A2(rtfeldman$elm_css$Css$property, 'display', 'flex');
var rtfeldman$elm_css$Css$flexDirection = rtfeldman$elm_css$Css$prop1('flex-direction');
var author$project$AlbumStyles$rootDivFlex = F4(
	function (flags, dir, scrollMsgMaker, extraStyles) {
		return A3(
			author$project$AlbumStyles$rootDiv,
			flags,
			scrollMsgMaker,
			_Utils_ap(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$displayFlex,
						rtfeldman$elm_css$Css$flexDirection(dir)
					]),
				extraStyles));
	});
var rtfeldman$elm_css$Css$EmUnits = 0;
var rtfeldman$elm_css$Css$em = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'em');
var rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.K, argB.K])));
	});
var rtfeldman$elm_css$Css$padding2 = rtfeldman$elm_css$Css$prop2('padding');
var rtfeldman$elm_css$Css$textDecoration = rtfeldman$elm_css$Css$prop1('text-decoration');
var rtfeldman$elm_css$Css$underline = {az: 0, K: 'underline'};
var author$project$ThumbPage$albumParent = F3(
	function (getTitle, showList, albumList) {
		return A2(
			rtfeldman$elm_css$Html$Styled$span,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$span,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Events$onClick(
							showList(albumList)),
							author$project$AlbumStyles$styles(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$textDecoration(rtfeldman$elm_css$Css$underline),
									rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
								]))
						]),
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$text(
							getTitle(albumList))
						])),
					A2(
					rtfeldman$elm_css$Html$Styled$span,
					_List_fromArray(
						[
							author$project$AlbumStyles$styles(
							_List_fromArray(
								[
									A2(
									rtfeldman$elm_css$Css$padding2,
									rtfeldman$elm_css$Css$em(0),
									rtfeldman$elm_css$Css$em(0.5))
								]))
						]),
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$text('<')
						]))
				]));
	});
var author$project$ThumbPage$getAlbumListTitle = function (a) {
	return a.br;
};
var rtfeldman$elm_css$Css$center = rtfeldman$elm_css$Css$prop1('center');
var rtfeldman$elm_css$Css$padding = rtfeldman$elm_css$Css$prop1('padding');
var rtfeldman$elm_css$Css$rgba = F4(
	function (r, g, b, alpha) {
		return {
			r: alpha,
			s: b,
			m: 0,
			v: g,
			w: r,
			K: A2(
				rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				_Utils_ap(
					A2(
						elm$core$List$map,
						elm$core$String$fromInt,
						_List_fromArray(
							[r, g, b])),
					_List_fromArray(
						[
							elm$core$String$fromFloat(alpha)
						])))
		};
	});
var rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var author$project$ThumbPage$albumTitle = F5(
	function (title, parents, showList, extraHtml, extraStyles) {
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					author$project$AlbumStyles$styles(
					_Utils_ap(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$color(author$project$AlbumStyles$white),
								rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center),
								rtfeldman$elm_css$Css$width(
								rtfeldman$elm_css$Css$vw(100)),
								rtfeldman$elm_css$Css$backgroundColor(
								A4(rtfeldman$elm_css$Css$rgba, 40, 40, 40, 0.5)),
								rtfeldman$elm_css$Css$padding(
								rtfeldman$elm_css$Css$px(5))
							]),
						extraStyles))
				]),
			_Utils_ap(
				A2(
					elm$core$List$map,
					A2(author$project$ThumbPage$albumParent, author$project$ThumbPage$getAlbumListTitle, showList),
					elm$core$List$reverse(parents)),
				_Utils_ap(
					extraHtml,
					_List_fromArray(
						[
							A2(
							rtfeldman$elm_css$Html$Styled$span,
							_List_Nil,
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$text(title)
								]))
						]))));
	});
var rtfeldman$elm_css$Css$row = {bj: 0, aL: 0, K: 'row'};
var rtfeldman$elm_css$Css$column = _Utils_update(
	rtfeldman$elm_css$Css$row,
	{K: 'column'});
var author$project$AlbumListPage$view = F5(
	function (_n0, viewList, viewAlbum, scrollMsgMaker, flags) {
		var albumList = _n0.a;
		var viewport = _n0.b;
		var parents = _n0.c;
		return A5(
			author$project$AlbumStyles$rootDivFlex,
			flags,
			rtfeldman$elm_css$Css$column,
			elm$core$Maybe$Just(scrollMsgMaker),
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						A5(
						author$project$ThumbPage$albumTitle,
						albumList.br,
						A2(elm$core$List$map, elm$core$Tuple$first, parents),
						viewList,
						_List_Nil,
						_List_Nil)
					]),
				elm$core$List$reverse(
					_Utils_ap(
						_List_fromArray(
							[
								A3(author$project$AlbumListPage$viewAlbumOrList, viewList, viewAlbum, albumList.be)
							]),
						A2(
							elm$core$List$map,
							A2(author$project$AlbumListPage$viewAlbumOrList, viewList, viewAlbum),
							albumList.bf)))));
	});
var author$project$AlbumPage$TouchDragContinue = function (a) {
	return {$: 2, a: a};
};
var author$project$AlbumPage$TouchDragStart = function (a) {
	return {$: 1, a: a};
};
var author$project$AlbumPage$View = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var author$project$AlbumPage$offsetFor = function (dragInfo) {
	if (dragInfo.$ === 1) {
		return _Utils_Tuple2(0, 0);
	} else {
		var _n1 = dragInfo.a;
		var start = _n1.a;
		var current = _n1.b;
		return _Utils_Tuple2(current.aj - start.aj, current.b$ - start.b$);
	}
};
var author$project$AlbumPage$TouchDragAbandon = {$: 3};
var author$project$AlbumPage$minDragLen = 75;
var author$project$TouchEvents$Left = 0;
var author$project$TouchEvents$Right = 1;
var author$project$TouchEvents$getDirectionX = F2(
	function (start, end) {
		return (_Utils_cmp(start, end) > 0) ? 0 : 1;
	});
var author$project$AlbumPage$touchPrevNext = F2(
	function (dragInfo, touch) {
		if (dragInfo.$ === 1) {
			return author$project$AlbumPage$NoUpdate;
		} else {
			var _n1 = dragInfo.a;
			var start = _n1.a;
			var cur = _n1.b;
			if (_Utils_cmp(
				elm$core$Basics$abs(start.aj - touch.aj),
				author$project$AlbumPage$minDragLen) > 0) {
				var _n2 = A2(author$project$TouchEvents$getDirectionX, start.aj, touch.aj);
				switch (_n2) {
					case 0:
						return author$project$AlbumPage$Next;
					case 1:
						return author$project$AlbumPage$Prev;
					default:
						return author$project$AlbumPage$TouchDragAbandon;
				}
			} else {
				return author$project$AlbumPage$TouchDragAbandon;
			}
		}
	});
var author$project$AlbumStyles$navEltSize = 50;
var rtfeldman$elm_css$Css$lineHeight = rtfeldman$elm_css$Css$prop1('line-height');
var author$project$AlbumStyles$navBoxStyles = _List_fromArray(
	[
		rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
		rtfeldman$elm_css$Css$height(
		rtfeldman$elm_css$Css$px(author$project$AlbumStyles$navEltSize)),
		rtfeldman$elm_css$Css$width(
		rtfeldman$elm_css$Css$px(author$project$AlbumStyles$navEltSize)),
		rtfeldman$elm_css$Css$lineHeight(
		rtfeldman$elm_css$Css$px(author$project$AlbumStyles$navEltSize)),
		rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center),
		rtfeldman$elm_css$Css$color(author$project$AlbumStyles$white),
		rtfeldman$elm_css$Css$backgroundColor(
		A4(rtfeldman$elm_css$Css$rgba, 40, 40, 40, 0.5)),
		rtfeldman$elm_css$Css$borderRadius(
		rtfeldman$elm_css$Css$px(author$project$AlbumStyles$navEltSize / 2)),
		rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
	]);
var author$project$FullImagePage$getAlbumTitle = function (a) {
	return a.bG;
};
var author$project$FullImagePage$imgTitleHeight = 5;
var author$project$AlbumStyles$navElement = F3(
	function (msg, label, side) {
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					author$project$AlbumStyles$styles(
					_Utils_ap(
						author$project$AlbumStyles$navBoxStyles,
						_List_fromArray(
							[
								side(
								rtfeldman$elm_css$Css$px(0))
							]))),
					rtfeldman$elm_css$Html$Styled$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text(label)
				]));
	});
var author$project$FullImagePage$navEltIf = F4(
	function (lst, navMsg, navTxt, navAlign) {
		return elm$core$List$isEmpty(lst) ? _List_Nil : _List_fromArray(
			[
				A3(author$project$AlbumStyles$navElement, navMsg, navTxt, navAlign)
			]);
	});
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var mdgriffith$elm_style_animation$Animation$Render$iePrefix = '-ms-';
var mdgriffith$elm_style_animation$Animation$Render$webkitPrefix = '-webkit-';
var mdgriffith$elm_style_animation$Animation$Render$prefix = function (stylePair) {
	var propValue = stylePair.b;
	var propName = stylePair.a;
	switch (propName) {
		case 'transform':
			return _List_fromArray(
				[
					stylePair,
					_Utils_Tuple2(
					_Utils_ap(mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
					propValue),
					_Utils_Tuple2(
					_Utils_ap(mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
					propValue)
				]);
		case 'transform-origin':
			return _List_fromArray(
				[
					stylePair,
					_Utils_Tuple2(
					_Utils_ap(mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
					propValue),
					_Utils_Tuple2(
					_Utils_ap(mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
					propValue)
				]);
		case 'filter':
			return _List_fromArray(
				[
					stylePair,
					_Utils_Tuple2(
					_Utils_ap(mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
					propValue),
					_Utils_Tuple2(
					_Utils_ap(mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
					propValue)
				]);
		default:
			return _List_fromArray(
				[stylePair]);
	}
};
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var elm$svg$Svg$Attributes$offset = _VirtualDom_attribute('offset');
var elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * elm$core$Basics$pi) / 180;
};
var elm$core$Basics$sin = _Basics_sin;
var mdgriffith$elm_style_animation$Animation$Render$pathCmdValue = function (cmd) {
	var renderPoints = function (coords) {
		return A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				function (_n11) {
					var x = _n11.a;
					var y = _n11.b;
					return elm$core$String$fromFloat(x.ds) + (',' + elm$core$String$fromFloat(y.ds));
				},
				coords));
	};
	switch (cmd.$) {
		case 0:
			var x = cmd.a;
			var y = cmd.b;
			return 'm ' + (elm$core$String$fromFloat(x.ds) + (',' + elm$core$String$fromFloat(y.ds)));
		case 1:
			var x = cmd.a;
			var y = cmd.b;
			return 'M ' + (elm$core$String$fromFloat(x.ds) + (',' + elm$core$String$fromFloat(y.ds)));
		case 2:
			var x = cmd.a;
			var y = cmd.b;
			return 'l ' + (elm$core$String$fromFloat(x.ds) + (',' + elm$core$String$fromFloat(y.ds)));
		case 3:
			var x = cmd.a;
			var y = cmd.b;
			return 'L ' + (elm$core$String$fromFloat(x.ds) + (',' + elm$core$String$fromFloat(y.ds)));
		case 4:
			var a = cmd.a;
			return 'h ' + elm$core$String$fromFloat(a.ds);
		case 5:
			var a = cmd.a;
			return 'H ' + elm$core$String$fromFloat(a.ds);
		case 6:
			var a = cmd.a;
			return 'v ' + elm$core$String$fromFloat(a.ds);
		case 7:
			var a = cmd.a;
			return 'V ' + elm$core$String$fromFloat(a.ds);
		case 8:
			var control1 = cmd.a.aI;
			var control2 = cmd.a.aJ;
			var point = cmd.a.D;
			var _n1 = point;
			var p1x = _n1.a;
			var p1y = _n1.b;
			var _n2 = control2;
			var c2x = _n2.a;
			var c2y = _n2.b;
			var _n3 = control1;
			var c1x = _n3.a;
			var c1y = _n3.b;
			return 'c ' + (elm$core$String$fromFloat(c1x.ds) + (' ' + (elm$core$String$fromFloat(c1y.ds) + (', ' + (elm$core$String$fromFloat(c2x.ds) + (' ' + (elm$core$String$fromFloat(c2y.ds) + (', ' + (elm$core$String$fromFloat(p1x.ds) + (' ' + elm$core$String$fromFloat(p1y.ds)))))))))));
		case 9:
			var control1 = cmd.a.aI;
			var control2 = cmd.a.aJ;
			var point = cmd.a.D;
			var _n4 = point;
			var p1x = _n4.a;
			var p1y = _n4.b;
			var _n5 = control2;
			var c2x = _n5.a;
			var c2y = _n5.b;
			var _n6 = control1;
			var c1x = _n6.a;
			var c1y = _n6.b;
			return 'C ' + (elm$core$String$fromFloat(c1x.ds) + (' ' + (elm$core$String$fromFloat(c1y.ds) + (', ' + (elm$core$String$fromFloat(c2x.ds) + (' ' + (elm$core$String$fromFloat(c2y.ds) + (', ' + (elm$core$String$fromFloat(p1x.ds) + (' ' + elm$core$String$fromFloat(p1y.ds)))))))))));
		case 10:
			var control = cmd.a.aH;
			var point = cmd.a.D;
			var _n7 = point;
			var p1x = _n7.a;
			var p1y = _n7.b;
			var _n8 = control;
			var c1x = _n8.a;
			var c1y = _n8.b;
			return 'q ' + (elm$core$String$fromFloat(c1x.ds) + (' ' + (elm$core$String$fromFloat(c1y.ds) + (', ' + (elm$core$String$fromFloat(p1x.ds) + (' ' + elm$core$String$fromFloat(p1y.ds)))))));
		case 11:
			var control = cmd.a.aH;
			var point = cmd.a.D;
			var _n9 = point;
			var p1x = _n9.a;
			var p1y = _n9.b;
			var _n10 = control;
			var c1x = _n10.a;
			var c1y = _n10.b;
			return 'Q ' + (elm$core$String$fromFloat(c1x.ds) + (' ' + (elm$core$String$fromFloat(c1y.ds) + (', ' + (elm$core$String$fromFloat(p1x.ds) + (' ' + elm$core$String$fromFloat(p1y.ds)))))));
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
			var deltaAngle = arc.aK.ds - arc.aQ.ds;
			if (_Utils_cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = arc.aO.ds * elm$core$Basics$sin(
					elm$core$Basics$degrees(arc.aQ.ds));
				var dx = arc.aO.ds * elm$core$Basics$cos(
					elm$core$Basics$degrees(arc.aQ.ds));
				return 'A ' + (elm$core$String$fromFloat(arc.aO.ds) + (',' + (elm$core$String$fromFloat(arc.aO.ds) + (',0,1,1,' + (elm$core$String$fromFloat(arc.bJ.ds - dx) + (',' + (elm$core$String$fromFloat(arc.bK.ds - dy) + (' A ' + (elm$core$String$fromFloat(arc.aO.ds) + (',' + (elm$core$String$fromFloat(arc.aO.ds) + (',0,1,1,' + (elm$core$String$fromFloat(arc.bJ.ds + dx) + (',' + elm$core$String$fromFloat(arc.bK.ds + dy)))))))))))))));
			} else {
				return 'A ' + (elm$core$String$fromFloat(arc.aO.ds) + (',' + (elm$core$String$fromFloat(arc.aO.ds) + (' 0 ' + (((deltaAngle >= 180) ? '1' : '0') + (' ' + ('1' + (' ' + (elm$core$String$fromFloat(
					arc.bJ.ds + (arc.aO.ds * elm$core$Basics$cos(
						elm$core$Basics$degrees(arc.aK.ds)))) + (',' + elm$core$String$fromFloat(
					arc.bK.ds + (arc.aO.ds * elm$core$Basics$sin(
						elm$core$Basics$degrees(arc.aK.ds))))))))))))));
			}
		case 17:
			var arc = cmd.a;
			var deltaAngle = arc.aK.ds - arc.aQ.ds;
			if (_Utils_cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = arc.aO.ds * elm$core$Basics$sin(
					elm$core$Basics$degrees(arc.aQ.ds));
				var dx = arc.aO.ds * elm$core$Basics$cos(
					elm$core$Basics$degrees(arc.aQ.ds));
				return 'A ' + (elm$core$String$fromFloat(arc.aO.ds) + (',' + (elm$core$String$fromFloat(arc.aO.ds) + (',0,1,0,' + (elm$core$String$fromFloat(arc.bJ.ds - dx) + (',' + (elm$core$String$fromFloat(arc.bK.ds - dy) + (' A ' + (elm$core$String$fromFloat(arc.aO.ds) + (',' + (elm$core$String$fromFloat(arc.aO.ds) + (',0,1,1,' + (elm$core$String$fromFloat(arc.bJ.ds + dx) + (',' + elm$core$String$fromFloat(arc.bK.ds + dy)))))))))))))));
			} else {
				return 'A ' + (elm$core$String$fromFloat(arc.aO.ds) + (',' + (elm$core$String$fromFloat(arc.aO.ds) + (' 0 ' + ((((arc.aQ.ds - arc.aK.ds) >= 180) ? '1' : '0') + (' ' + ('0' + (' ' + (elm$core$String$fromFloat(
					arc.bJ.ds + (arc.aO.ds * elm$core$Basics$cos(arc.aK.ds))) + (',' + elm$core$String$fromFloat(
					arc.bK.ds + (arc.aO.ds * elm$core$Basics$sin(arc.aK.ds)))))))))))));
			}
		default:
			return 'z';
	}
};
var mdgriffith$elm_style_animation$Animation$Render$propertyValue = F2(
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
				return 'rgba(' + (elm$core$String$fromInt(
					elm$core$Basics$round(r.ds)) + (',' + (elm$core$String$fromInt(
					elm$core$Basics$round(g.ds)) + (',' + (elm$core$String$fromInt(
					elm$core$Basics$round(b.ds)) + (',' + (elm$core$String$fromFloat(a.ds) + ')')))))));
			case 2:
				var name = prop.a;
				var inset = prop.b;
				var shadow = prop.c;
				return (inset ? 'inset ' : '') + (elm$core$String$fromFloat(shadow.A.ds) + ('px' + (' ' + (elm$core$String$fromFloat(shadow.B.ds) + ('px' + (' ' + (elm$core$String$fromFloat(shadow.y.ds) + ('px' + (' ' + ((((name === 'text-shadow') || (name === 'drop-shadow')) ? '' : (elm$core$String$fromFloat(shadow.F.ds) + ('px' + ' '))) + ('rgba(' + (elm$core$String$fromInt(
					elm$core$Basics$round(shadow.w.ds)) + (', ' + (elm$core$String$fromInt(
					elm$core$Basics$round(shadow.v.ds)) + (', ' + (elm$core$String$fromInt(
					elm$core$Basics$round(shadow.s.ds)) + (', ' + (elm$core$String$fromFloat(shadow.r.ds) + ')'))))))))))))))))));
			case 3:
				var x = prop.b;
				return _Utils_ap(
					elm$core$String$fromFloat(x.ds),
					x.dM);
			case 4:
				var x = prop.b;
				var y = prop.c;
				return _Utils_ap(
					elm$core$String$fromFloat(x.ds),
					_Utils_ap(
						x.dM,
						_Utils_ap(
							delim,
							_Utils_ap(
								elm$core$String$fromFloat(y.ds),
								y.dM))));
			case 5:
				var x = prop.b;
				var y = prop.c;
				var z = prop.d;
				return _Utils_ap(
					elm$core$String$fromFloat(x.ds),
					_Utils_ap(
						x.dM,
						_Utils_ap(
							delim,
							_Utils_ap(
								elm$core$String$fromFloat(y.ds),
								_Utils_ap(
									y.dM,
									_Utils_ap(
										delim,
										_Utils_ap(
											elm$core$String$fromFloat(z.ds),
											z.dM)))))));
			case 6:
				var w = prop.b;
				var x = prop.c;
				var y = prop.d;
				var z = prop.e;
				return _Utils_ap(
					elm$core$String$fromFloat(w.ds),
					_Utils_ap(
						w.dM,
						_Utils_ap(
							delim,
							_Utils_ap(
								elm$core$String$fromFloat(x.ds),
								_Utils_ap(
									x.dM,
									_Utils_ap(
										delim,
										_Utils_ap(
											elm$core$String$fromFloat(y.ds),
											_Utils_ap(
												y.dM,
												_Utils_ap(
													delim,
													_Utils_ap(
														elm$core$String$fromFloat(z.ds),
														z.dM))))))))));
			case 7:
				var x = prop.b;
				return _Utils_ap(
					elm$core$String$fromFloat(x.ds),
					x.dM);
			case 8:
				var coords = prop.a;
				return A2(
					elm$core$String$join,
					' ',
					A2(
						elm$core$List$map,
						function (_n1) {
							var x = _n1.a;
							var y = _n1.b;
							return elm$core$String$fromFloat(x.ds) + (',' + elm$core$String$fromFloat(y.ds));
						},
						coords));
			default:
				var cmds = prop.a;
				return A2(
					elm$core$String$join,
					' ',
					A2(elm$core$List$map, mdgriffith$elm_style_animation$Animation$Render$pathCmdValue, cmds));
		}
	});
var mdgriffith$elm_style_animation$Animation$Render$renderAttrs = function (prop) {
	if (A2(
		elm$core$String$startsWith,
		'attr:',
		mdgriffith$elm_style_animation$Animation$Model$propertyName(prop))) {
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$Attributes$attribute,
				A2(
					elm$core$String$dropLeft,
					5,
					mdgriffith$elm_style_animation$Animation$Model$propertyName(prop)),
				A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
	} else {
		switch (prop.$) {
			case 8:
				var pts = prop.a;
				return elm$core$Maybe$Just(
					elm$svg$Svg$Attributes$points(
						A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
			case 9:
				var cmds = prop.a;
				return elm$core$Maybe$Just(
					elm$svg$Svg$Attributes$d(
						A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
			case 3:
				var name = prop.a;
				var m1 = prop.b;
				switch (name) {
					case 'x':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$x(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'y':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$y(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'cx':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$cx(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'cy':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$cy(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'rx':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$rx(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'ry':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$ry(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'r':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$r(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					case 'offset':
						return elm$core$Maybe$Just(
							elm$svg$Svg$Attributes$offset(
								A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' ')));
					default:
						return elm$core$Maybe$Nothing;
				}
			case 6:
				var name = prop.a;
				var m1 = prop.b;
				var m2 = prop.c;
				var m3 = prop.d;
				var m4 = prop.e;
				return (name === 'viewBox') ? elm$core$Maybe$Just(
					elm$svg$Svg$Attributes$viewBox(
						A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' '))) : elm$core$Maybe$Nothing;
			default:
				return elm$core$Maybe$Nothing;
		}
	}
};
var mdgriffith$elm_style_animation$Animation$Render$isAttr = function (prop) {
	return A2(
		elm$core$String$startsWith,
		'attr:',
		mdgriffith$elm_style_animation$Animation$Model$propertyName(prop)) || function () {
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
var mdgriffith$elm_style_animation$Animation$Render$isFilter = function (prop) {
	return A2(
		elm$core$List$member,
		mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
		_List_fromArray(
			['filter-url', 'blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'saturate', 'sepia', 'drop-shadow']));
};
var mdgriffith$elm_style_animation$Animation$Render$render3dRotation = function (prop) {
	if (prop.$ === 5) {
		var x = prop.b;
		var y = prop.c;
		var z = prop.d;
		return 'rotateX(' + (elm$core$String$fromFloat(x.ds) + (x.dM + (') rotateY(' + (elm$core$String$fromFloat(y.ds) + (y.dM + (') rotateZ(' + (elm$core$String$fromFloat(z.ds) + (z.dM + ')'))))))));
	} else {
		return '';
	}
};
var mdgriffith$elm_style_animation$Animation$Render$renderValues = function (_n0) {
	var model = _n0;
	var _n1 = A2(elm$core$List$partition, mdgriffith$elm_style_animation$Animation$Render$isAttr, model.cI);
	var attrProps = _n1.a;
	var styleProps = _n1.b;
	var _n2 = A3(
		elm$core$List$foldl,
		F2(
			function (prop, _n3) {
				var myStyle = _n3.a;
				var myTransforms = _n3.b;
				var myFilters = _n3.c;
				return mdgriffith$elm_style_animation$Animation$Render$isTransformation(prop) ? _Utils_Tuple3(
					myStyle,
					_Utils_ap(
						myTransforms,
						_List_fromArray(
							[prop])),
					myFilters) : (mdgriffith$elm_style_animation$Animation$Render$isFilter(prop) ? _Utils_Tuple3(
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
	var style = _n2.a;
	var transforms = _n2.b;
	var filters = _n2.c;
	var renderedFilters = elm$core$List$isEmpty(filters) ? _List_Nil : _List_fromArray(
		[
			_Utils_Tuple2(
			'filter',
			A2(
				elm$core$String$join,
				' ',
				A2(
					elm$core$List$map,
					function (prop) {
						var name = mdgriffith$elm_style_animation$Animation$Model$propertyName(prop);
						return (name === 'filter-url') ? ('url(\"' + (A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ', ') + '\")')) : (mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) + ('(' + (A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ', ') + ')')));
					},
					filters)))
		]);
	var renderedStyle = A2(
		elm$core$List$map,
		function (prop) {
			return _Utils_Tuple2(
				mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
				A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ' '));
		},
		style);
	var renderedTransforms = elm$core$List$isEmpty(transforms) ? _List_Nil : _List_fromArray(
		[
			_Utils_Tuple2(
			'transform',
			A2(
				elm$core$String$join,
				' ',
				A2(
					elm$core$List$map,
					function (prop) {
						return (mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) === 'rotate3d') ? mdgriffith$elm_style_animation$Animation$Render$render3dRotation(prop) : (mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) + ('(' + (A2(mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ', ') + ')')));
					},
					transforms)))
		]);
	return _Utils_Tuple2(
		_Utils_ap(
			renderedTransforms,
			_Utils_ap(renderedFilters, renderedStyle)),
		attrProps);
};
var mdgriffith$elm_style_animation$Animation$Render$render = function (animation) {
	var _n0 = mdgriffith$elm_style_animation$Animation$Render$renderValues(animation);
	var style = _n0.a;
	var attrProps = _n0.b;
	var otherAttrs = A2(elm$core$List$filterMap, mdgriffith$elm_style_animation$Animation$Render$renderAttrs, attrProps);
	var styleAttr = A2(
		elm$core$List$map,
		function (_n1) {
			var prop = _n1.a;
			var val = _n1.b;
			return A2(elm$html$Html$Attributes$style, prop, val);
		},
		A2(elm$core$List$concatMap, mdgriffith$elm_style_animation$Animation$Render$prefix, style));
	return _Utils_ap(styleAttr, otherAttrs);
};
var mdgriffith$elm_style_animation$Animation$render = mdgriffith$elm_style_animation$Animation$Render$render;
var rtfeldman$elm_css$VirtualDom$Styled$unstyledAttribute = function (prop) {
	return A3(rtfeldman$elm_css$VirtualDom$Styled$Attribute, prop, _List_Nil, '');
};
var rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled = rtfeldman$elm_css$VirtualDom$Styled$unstyledAttribute;
var author$project$ProgressiveImage$styledAnimation = function (animState) {
	return A2(
		elm$core$List$map,
		rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled,
		mdgriffith$elm_style_animation$Animation$render(animState));
};
var author$project$ProgressiveImage$styledMsgAnimation = function (animState) {
	return A2(
		elm$core$List$map,
		rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled,
		mdgriffith$elm_style_animation$Animation$render(animState));
};
var author$project$ProgressiveImage$Loaded = function (a) {
	return {$: 0, a: a};
};
var author$project$ProgressiveImage$viewImg = F4(
	function (imgSrc, data, animStyle, styles) {
		return A8(
			author$project$ImageViews$renderPresized,
			0,
			data.bI,
			data.bl,
			imgSrc,
			_List_Nil,
			styles,
			_Utils_ap(
				animStyle,
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$Events$on,
						'load',
						elm$json$Json$Decode$succeed(
							author$project$ProgressiveImage$Loaded(imgSrc)))
					])),
			elm$core$Maybe$Nothing);
	});
var rtfeldman$elm_css$Css$UnitlessInteger = 0;
var rtfeldman$elm_css$Css$int = function (val) {
	return {
		P: 0,
		a1: 0,
		Z: 0,
		I: 0,
		dm: 0,
		S: val,
		aC: '',
		aX: 0,
		K: elm$core$String$fromInt(val)
	};
};
var rtfeldman$elm_css$Css$left = rtfeldman$elm_css$Css$prop1('left');
var rtfeldman$elm_css$Css$relative = {ds: 0, K: 'relative'};
var rtfeldman$elm_css$Css$top = rtfeldman$elm_css$Css$prop1('top');
var rtfeldman$elm_css$Css$zIndex = rtfeldman$elm_css$Css$prop1('z-index');
var rtfeldman$elm_css$Css$zero = {aM: 0, ar: 0, Q: 0, as: 0, at: 0, Y: 0, Z: 0, dm: 0, S: 0, a4: 0, aC: '', aX: 0, K: '0'};
var author$project$ProgressiveImage$viewLoadingMain = F4(
	function (data, imgSrc, imgSrcAnimState, mainAnimState) {
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					author$project$AlbumStyles$styles(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
						]))
				]),
			_List_fromArray(
				[
					A4(
					author$project$ProgressiveImage$viewImg,
					data.dg,
					data,
					author$project$ProgressiveImage$styledMsgAnimation(mainAnimState),
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
							rtfeldman$elm_css$Css$top(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$left(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$zIndex(
							rtfeldman$elm_css$Css$int(1))
						])),
					A4(
					author$project$ProgressiveImage$viewImg,
					imgSrc,
					data,
					author$project$ProgressiveImage$styledAnimation(imgSrcAnimState),
					_List_Nil)
				]));
	});
var author$project$ProgressiveImage$view = function (_n0) {
	var data = _n0.a;
	var status = _n0.b;
	var animState = _n0.c;
	switch (status.$) {
		case 0:
			var tried = status.a;
			var trying = status.b;
			var nextup = status.c;
			return A4(
				author$project$ProgressiveImage$viewImg,
				trying,
				data,
				author$project$ProgressiveImage$styledAnimation(animState.o),
				_List_Nil);
		case 1:
			return A4(
				author$project$ProgressiveImage$viewImg,
				data.c3,
				data,
				author$project$ProgressiveImage$styledAnimation(animState.o),
				_List_Nil);
		case 2:
			var placeholder = status.a;
			return A4(author$project$ProgressiveImage$viewLoadingMain, data, placeholder, animState.o, animState.z);
		case 3:
			var oldPlaceholder = status.a;
			return A4(author$project$ProgressiveImage$viewLoadingMain, data, oldPlaceholder, animState.o, animState.z);
		default:
			return A4(
				author$project$ProgressiveImage$viewImg,
				data.dg,
				data,
				author$project$ProgressiveImage$styledMsgAnimation(animState.z),
				_List_Nil);
	}
};
var author$project$ProgressiveImage$withWidthHeight = F3(
	function (w, h, _n0) {
		var data = _n0.a;
		var status = _n0.b;
		var animState = _n0.c;
		return A3(
			author$project$ProgressiveImage$ProgImgModel,
			_Utils_update(
				data,
				{bl: h, bI: w}),
			status,
			animState);
	});
var author$project$TouchEvents$Touch = F2(
	function (clientX, clientY) {
		return {aj: clientX, b$: clientY};
	});
var author$project$TouchEvents$touchDecoder = A3(
	elm$json$Json$Decode$map2,
	author$project$TouchEvents$Touch,
	A2(elm$json$Json$Decode$field, 'clientX', elm$json$Json$Decode$float),
	A2(elm$json$Json$Decode$field, 'clientY', elm$json$Json$Decode$float));
var author$project$TouchEvents$eventDecoder = F2(
	function (msg, eventKey) {
		return A2(
			elm$json$Json$Decode$at,
			_List_fromArray(
				[eventKey, '0']),
			A2(elm$json$Json$Decode$map, msg, author$project$TouchEvents$touchDecoder));
	});
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var author$project$TouchEvents$onTouchEnd = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'touchend',
		A2(author$project$TouchEvents$eventDecoder, msg, 'changedTouches'));
};
var author$project$TouchEvents$onTouchMove = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'touchmove',
		A2(author$project$TouchEvents$eventDecoder, msg, 'touches'));
};
var author$project$TouchEvents$onTouchStart = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'touchstart',
		A2(author$project$TouchEvents$eventDecoder, msg, 'touches'));
};
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var rtfeldman$elm_css$VirtualDom$Styled$KeyedNode = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$VirtualDom$Styled$KeyedNodeNS = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var rtfeldman$elm_css$VirtualDom$Styled$NodeNS = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var rtfeldman$elm_css$VirtualDom$Styled$mapAttribute = F2(
	function (transform, _n0) {
		var prop = _n0.a;
		var styles = _n0.b;
		var classname = _n0.c;
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$mapAttribute, transform, prop),
			styles,
			classname);
	});
var rtfeldman$elm_css$VirtualDom$Styled$map = F2(
	function (transform, vdomNode) {
		switch (vdomNode.$) {
			case 0:
				var elemType = vdomNode.a;
				var properties = vdomNode.b;
				var children = vdomNode.c;
				return A3(
					rtfeldman$elm_css$VirtualDom$Styled$Node,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$map(transform),
						children));
			case 1:
				var ns = vdomNode.a;
				var elemType = vdomNode.b;
				var properties = vdomNode.c;
				var children = vdomNode.d;
				return A4(
					rtfeldman$elm_css$VirtualDom$Styled$NodeNS,
					ns,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$map(transform),
						children));
			case 2:
				var elemType = vdomNode.a;
				var properties = vdomNode.b;
				var children = vdomNode.c;
				return A3(
					rtfeldman$elm_css$VirtualDom$Styled$KeyedNode,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						function (_n1) {
							var key = _n1.a;
							var child = _n1.b;
							return _Utils_Tuple2(
								key,
								A2(rtfeldman$elm_css$VirtualDom$Styled$map, transform, child));
						},
						children));
			case 3:
				var ns = vdomNode.a;
				var elemType = vdomNode.b;
				var properties = vdomNode.c;
				var children = vdomNode.d;
				return A4(
					rtfeldman$elm_css$VirtualDom$Styled$KeyedNodeNS,
					ns,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						function (_n2) {
							var key = _n2.a;
							var child = _n2.b;
							return _Utils_Tuple2(
								key,
								A2(rtfeldman$elm_css$VirtualDom$Styled$map, transform, child));
						},
						children));
			default:
				var vdom = vdomNode.a;
				return rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
					A2(elm$virtual_dom$VirtualDom$map, transform, vdom));
		}
	});
var rtfeldman$elm_css$Html$Styled$map = rtfeldman$elm_css$VirtualDom$Styled$map;
var author$project$FullImagePage$viewImg = F4(
	function (clickMsg, touchMsgs, wrapProgMsg, fullImagePageModel) {
		var img = fullImagePageModel.ba.bm;
		var _n0 = A3(
			author$project$FullImagePage$fitImage,
			img.bz,
			elm$core$Basics$floor(fullImagePageModel.ae.ae.bI),
			elm$core$Basics$round(fullImagePageModel.ae.ae.bl * (1 - (author$project$FullImagePage$imgTitleHeight / 100))));
		var w = _n0.a;
		var h = _n0.b;
		var imgSrc = A4(author$project$ImageViews$smallestImageBiggerThan, w, h, img.bz, img.bA);
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					author$project$AlbumStyles$styles(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative),
							rtfeldman$elm_css$Css$left(
							rtfeldman$elm_css$Css$px(fullImagePageModel.dn.a))
						])),
					rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
					author$project$TouchEvents$onTouchStart(touchMsgs.dK)),
					rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
					author$project$TouchEvents$onTouchMove(touchMsgs.dI)),
					rtfeldman$elm_css$Html$Styled$Attributes$fromUnstyled(
					author$project$TouchEvents$onTouchEnd(touchMsgs.dJ)),
					rtfeldman$elm_css$Html$Styled$Events$onClick(clickMsg)
				]),
			_List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$map,
					wrapProgMsg,
					author$project$ProgressiveImage$view(
						A3(author$project$ProgressiveImage$withWidthHeight, w, h, fullImagePageModel.dw)))
				]));
	});
var rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var rtfeldman$elm_css$Css$bottom = rtfeldman$elm_css$Css$prop1('bottom');
var rtfeldman$elm_css$Css$none = {ag: 0, bT: 0, t: 0, b: 0, i: 0, c7: 0, cd: 0, bp: 0, at: 0, Y: 0, I: 0, d: 0, c: 0, bu: 0, a4: 0, dr: 0, E: 0, a5: 0, dy: 0, az: 0, ad: 0, x: 0, h: 0, dO: 0, K: 'none'};
var rtfeldman$elm_css$Css$overflow = rtfeldman$elm_css$Css$prop1('overflow');
var rtfeldman$elm_css$Css$PercentageUnits = 0;
var rtfeldman$elm_css$Css$pct = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '%');
var rtfeldman$elm_css$Css$right = rtfeldman$elm_css$Css$prop1('right');
var rtfeldman$elm_css$Html$Styled$a = rtfeldman$elm_css$Html$Styled$node('a');
var rtfeldman$elm_css$Html$Styled$Attributes$href = function (url) {
	return A2(rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, 'href', url);
};
var rtfeldman$elm_css$Html$Styled$Attributes$target = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('target');
var author$project$FullImagePage$view = F7(
	function (navMsgs, touchMsgs, noOpMsg, wrapProgMsg, fullImagePageModel, parents, flags) {
		return A5(
			author$project$AlbumStyles$rootDivFlex,
			flags,
			rtfeldman$elm_css$Css$column,
			elm$core$Maybe$Nothing,
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$overflow(rtfeldman$elm_css$Css$hidden),
					rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center),
					A2(rtfeldman$elm_css$Css$property, 'justify-content', 'center')
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								author$project$AlbumStyles$styles(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$color(author$project$AlbumStyles$white),
										rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center),
										rtfeldman$elm_css$Css$height(
										rtfeldman$elm_css$Css$pct(author$project$FullImagePage$imgTitleHeight)),
										rtfeldman$elm_css$Css$lineHeight(
										rtfeldman$elm_css$Css$px((author$project$FullImagePage$imgTitleHeight / 100) * fullImagePageModel.ae.ae.bl))
									]))
							]),
						_List_fromArray(
							[
								A5(
								author$project$ThumbPage$albumTitle,
								fullImagePageModel.ba.bm.bb,
								parents,
								navMsgs.dB,
								_List_fromArray(
									[
										A3(
										author$project$ThumbPage$albumParent,
										author$project$FullImagePage$getAlbumTitle,
										function (_n0) {
											return navMsgs.cT;
										},
										fullImagePageModel.ba)
									]),
								_List_Nil)
							])),
						A4(author$project$FullImagePage$viewImg, navMsgs.dl, touchMsgs, wrapProgMsg, fullImagePageModel)
					]),
				_Utils_ap(
					A4(author$project$FullImagePage$navEltIf, fullImagePageModel.du, navMsgs.dv, '<', rtfeldman$elm_css$Css$left),
					_Utils_ap(
						A4(author$project$FullImagePage$navEltIf, fullImagePageModel.ba.bn, navMsgs.dl, '>', rtfeldman$elm_css$Css$right),
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$div,
								_List_fromArray(
									[
										author$project$AlbumStyles$styles(
										_Utils_ap(
											author$project$AlbumStyles$navBoxStyles,
											_List_fromArray(
												[
													rtfeldman$elm_css$Css$top(
													rtfeldman$elm_css$Css$px(5)),
													rtfeldman$elm_css$Css$right(
													rtfeldman$elm_css$Css$px(5))
												]))),
										rtfeldman$elm_css$Html$Styled$Events$onClick(navMsgs.cT)
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text('x')
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$a,
								_List_fromArray(
									[
										author$project$AlbumStyles$styles(
										_Utils_ap(
											author$project$AlbumStyles$navBoxStyles,
											_List_fromArray(
												[
													rtfeldman$elm_css$Css$bottom(
													rtfeldman$elm_css$Css$px(5)),
													rtfeldman$elm_css$Css$right(
													rtfeldman$elm_css$Css$px(5)),
													rtfeldman$elm_css$Css$textDecoration(rtfeldman$elm_css$Css$none)
												]))),
										rtfeldman$elm_css$Html$Styled$Attributes$href(
										author$project$ListUtils$encodePath(fullImagePageModel.ba.bm.bz.bH)),
										rtfeldman$elm_css$Html$Styled$Attributes$target('_blank')
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text('⤓')
									]))
							])))));
	});
var author$project$ThumbPage$convertImgChosenMsgr = F3(
	function (image1, images, prevCurRestImgChosenMsgr) {
		return function (i) {
			var prev = A2(elm$core$List$take, i, images);
			var next = A2(elm$core$List$drop, i + 1, images);
			var cur = function () {
				var _n0 = elm$core$List$head(
					A2(elm$core$List$drop, i, images));
				if (!_n0.$) {
					var img = _n0.a;
					return img;
				} else {
					return image1;
				}
			}();
			return A3(prevCurRestImgChosenMsgr, prev, cur, next);
		};
	});
var author$project$ListUtils$mapI = F3(
	function (i, map, l) {
		var ifmap = function (_n0) {
			var j = _n0.a;
			var a = _n0.b;
			return _Utils_eq(i, j) ? map(a) : a;
		};
		return A2(
			elm$core$List$map,
			ifmap,
			A2(
				elm$core$List$indexedMap,
				F2(
					function (a, b) {
						return _Utils_Tuple2(a, b);
					}),
				l));
	});
var author$project$ThumbPage$imgHeight = function (img) {
	var is1 = img.bz;
	return elm$core$Basics$round(is1.bK * (1000 / is1.bJ));
};
var author$project$ThumbPage$shorter = F2(
	function (_n0, _n1) {
		var i1 = _n0.a;
		var h1 = _n0.b;
		var i2 = _n1.a;
		var h2 = _n1.b;
		return (_Utils_cmp(h1, h2) < 1) ? _Utils_Tuple2(i1, h1) : _Utils_Tuple2(i2, h2);
	});
var author$project$ThumbPage$shorterBaseCase = _Utils_Tuple2(0, 999999);
var elm$core$List$sum = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$add, 0, numbers);
};
var author$project$ThumbPage$findShortest = function (imageLists) {
	return A3(
		elm$core$List$foldr,
		author$project$ThumbPage$shorter,
		author$project$ThumbPage$shorterBaseCase,
		A2(
			elm$core$List$indexedMap,
			F2(
				function (a, b) {
					return _Utils_Tuple2(a, b);
				}),
			A2(
				elm$core$List$map,
				A2(
					elm$core$Basics$composeL,
					elm$core$List$sum,
					elm$core$List$map(
						A2(elm$core$Basics$composeL, author$project$ThumbPage$imgHeight, elm$core$Tuple$first))),
				imageLists)));
};
var author$project$ThumbPage$insertImage = F4(
	function (maxCols, i, nextImg, alreadySpreadImages) {
		if (_Utils_cmp(
			elm$core$List$length(alreadySpreadImages),
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
			var is = author$project$ThumbPage$findShortest(alreadySpreadImages);
			var iShortest = is;
			return A3(
				author$project$ListUtils$mapI,
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
var author$project$ThumbPage$spreadThumbs = F3(
	function (maxCols, images, alreadySpreadImages) {
		var _n0 = elm$core$List$head(images);
		if (!_n0.$) {
			var nextImg = _n0.a;
			return A3(
				author$project$ThumbPage$spreadThumbs,
				maxCols,
				A2(elm$core$List$drop, 1, images),
				A4(
					author$project$ThumbPage$insertImage,
					maxCols,
					elm$core$List$sum(
						A2(elm$core$List$map, elm$core$List$length, alreadySpreadImages)),
					nextImg,
					alreadySpreadImages));
		} else {
			return alreadySpreadImages;
		}
	});
var author$project$AlbumStyles$Completed = {$: 2};
var author$project$AlbumStyles$Partial = function (a) {
	return {$: 1, a: a};
};
var author$project$ThumbPage$grey = A3(rtfeldman$elm_css$Css$rgb, 128, 128, 128);
var rtfeldman$elm_css$Css$borderBottomWidth = rtfeldman$elm_css$Css$prop1('border-bottom-width');
var rtfeldman$elm_css$Css$borderColor = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'border-color', c.K);
};
var rtfeldman$elm_css$Css$borderLeftWidth = rtfeldman$elm_css$Css$prop1('border-left-width');
var rtfeldman$elm_css$Css$borderRightWidth = rtfeldman$elm_css$Css$prop1('border-right-width');
var rtfeldman$elm_css$Css$borderStyle = rtfeldman$elm_css$Css$prop1('border-style');
var rtfeldman$elm_css$Css$borderTopWidth = rtfeldman$elm_css$Css$prop1('border-top-width');
var rtfeldman$elm_css$Css$solid = {t: 0, ac: 0, K: 'solid'};
var author$project$ThumbPage$stubThumb = F2(
	function (width, img) {
		var _n0 = A2(author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _n0.a;
		var yScaled = _n0.b;
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					author$project$AlbumStyles$styles(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$width(
							rtfeldman$elm_css$Css$px(xScaled)),
							rtfeldman$elm_css$Css$height(
							rtfeldman$elm_css$Css$px(yScaled)),
							rtfeldman$elm_css$Css$color(author$project$AlbumStyles$white),
							rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center),
							rtfeldman$elm_css$Css$displayFlex,
							A2(rtfeldman$elm_css$Css$property, 'justify-content', 'center'),
							A2(rtfeldman$elm_css$Css$property, 'align-content', 'center'),
							rtfeldman$elm_css$Css$flexDirection(rtfeldman$elm_css$Css$column),
							rtfeldman$elm_css$Css$borderStyle(rtfeldman$elm_css$Css$solid),
							rtfeldman$elm_css$Css$borderColor(author$project$ThumbPage$grey),
							rtfeldman$elm_css$Css$borderTopWidth(
							rtfeldman$elm_css$Css$px(1)),
							rtfeldman$elm_css$Css$borderBottomWidth(
							rtfeldman$elm_css$Css$px(1)),
							rtfeldman$elm_css$Css$borderLeftWidth(
							rtfeldman$elm_css$Css$px(1)),
							rtfeldman$elm_css$Css$borderRightWidth(
							rtfeldman$elm_css$Css$px(1)),
							rtfeldman$elm_css$Css$margin(
							rtfeldman$elm_css$Css$px(-1))
						]))
				]),
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$text('...')
				]));
	});
var author$project$AlbumStyles$opacityDurationMillis = 1000;
var rtfeldman$elm_css$Css$UnitlessFloat = 0;
var rtfeldman$elm_css$Css$num = function (val) {
	return {
		Z: 0,
		I: 0,
		dm: 0,
		S: val,
		aC: '',
		aX: 0,
		K: elm$core$String$fromFloat(val)
	};
};
var rtfeldman$elm_css$Css$opacity = rtfeldman$elm_css$Css$prop1('opacity');
var rtfeldman$elm_css$Css$Transitions$EaseInOut = {$: 4};
var rtfeldman$elm_css$Css$Transitions$easeInOut = rtfeldman$elm_css$Css$Transitions$EaseInOut;
var rtfeldman$elm_css$Css$Transitions$Opacity = 73;
var rtfeldman$elm_css$Css$Transitions$Transition = elm$core$Basics$identity;
var rtfeldman$elm_css$Css$Transitions$fullTransition = F4(
	function (animation, duration, delay, timing) {
		return {
			aZ: animation,
			a$: elm$core$Maybe$Just(delay),
			bg: duration,
			cM: elm$core$Maybe$Just(timing)
		};
	});
var rtfeldman$elm_css$Css$Transitions$opacity3 = rtfeldman$elm_css$Css$Transitions$fullTransition(73);
var rtfeldman$elm_css$Css$Transitions$propToString = function (prop) {
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
var rtfeldman$elm_css$Css$Transitions$timeToString = function (time) {
	return elm$core$String$fromFloat(time) + 'ms';
};
var rtfeldman$elm_css$Css$Transitions$timingFunctionToString = function (tf) {
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
			return 'cubic-bezier(' + (elm$core$String$fromFloat(_float) + (' , ' + (elm$core$String$fromFloat(float2) + (' , ' + (elm$core$String$fromFloat(float3) + (' , ' + (elm$core$String$fromFloat(float4) + ')')))))));
	}
};
var rtfeldman$elm_css$Css$Transitions$transition = function (options) {
	var v = A3(
		elm$core$String$slice,
		0,
		-1,
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, s) {
					var animation = _n0.aZ;
					var duration = _n0.bg;
					var delay = _n0.a$;
					var timing = _n0.cM;
					return s + (A2(
						elm$core$String$join,
						' ',
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$Transitions$propToString(animation),
								rtfeldman$elm_css$Css$Transitions$timeToString(duration),
								A2(
								elm$core$Maybe$withDefault,
								'',
								A2(elm$core$Maybe$map, rtfeldman$elm_css$Css$Transitions$timeToString, delay)),
								A2(
								elm$core$Maybe$withDefault,
								'',
								A2(elm$core$Maybe$map, rtfeldman$elm_css$Css$Transitions$timingFunctionToString, timing))
							])) + ',');
				}),
			'',
			options));
	return A2(rtfeldman$elm_css$Css$property, 'transition', v);
};
var author$project$AlbumStyles$opacityAnimatedTo = function (opasity) {
	return _List_fromArray(
		[
			rtfeldman$elm_css$Css$opacity(
			rtfeldman$elm_css$Css$num(opasity)),
			rtfeldman$elm_css$Css$Transitions$transition(
			_List_fromArray(
				[
					A3(rtfeldman$elm_css$Css$Transitions$opacity3, author$project$AlbumStyles$opacityDurationMillis, 0, rtfeldman$elm_css$Css$Transitions$easeInOut)
				]))
		]);
};
var author$project$AlbumStyles$opacityStyles = function (imgLoadedState) {
	switch (imgLoadedState.$) {
		case 0:
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$opacity(
					rtfeldman$elm_css$Css$num(0))
				]);
		case 1:
			var _int = imgLoadedState.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$opacity(
					rtfeldman$elm_css$Css$num(0))
				]);
		case 2:
			return author$project$AlbumStyles$opacityAnimatedTo(1);
		case 3:
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$opacity(
					rtfeldman$elm_css$Css$num(1))
				]);
		default:
			return author$project$AlbumStyles$opacityAnimatedTo(0);
	}
};
var author$project$ThumbPage$viewThumb = F5(
	function (width, opasity, extraStyles, selectedMsg, img) {
		var _n0 = A2(author$project$ThumbPage$sizeForWidth, width, img);
		var xScaled = _n0.a;
		var yScaled = _n0.b;
		return A8(
			author$project$ImageViews$renderPresized,
			10,
			xScaled,
			yScaled,
			img.bz,
			img.bA,
			_Utils_ap(
				author$project$ThumbPage$thumbStyles,
				_Utils_ap(
					author$project$AlbumStyles$opacityStyles(opasity),
					extraStyles)),
			_List_Nil,
			elm$core$Maybe$Just(selectedMsg));
	});
var author$project$ThumbPage$viewThumbColumn = F5(
	function (thumbWidth, imgChosenMsgr, justLoadedImages, readyToDisplayImages, images) {
		var viewThumbTuple = function (_n0) {
			var img = _n0.a;
			var i = _n0.b;
			var src = A2(author$project$ThumbPage$srcForWidth, thumbWidth, img);
			if (A2(
				elm$core$Set$member,
				src.bH,
				A2(elm$core$Set$union, justLoadedImages, readyToDisplayImages))) {
				var opacity = A2(elm$core$Set$member, src.bH, justLoadedImages) ? author$project$AlbumStyles$Partial(
					_Utils_Tuple2(99, elm$core$Maybe$Nothing)) : author$project$AlbumStyles$Completed;
				return A5(
					author$project$ThumbPage$viewThumb,
					thumbWidth,
					opacity,
					_List_Nil,
					imgChosenMsgr(i),
					img);
			} else {
				return A2(author$project$ThumbPage$stubThumb, thumbWidth, img);
			}
		};
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					author$project$AlbumStyles$styles(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$displayFlex,
							rtfeldman$elm_css$Css$flexDirection(rtfeldman$elm_css$Css$column)
						]))
				]),
			A2(elm$core$List$map, viewThumbTuple, images));
	});
var author$project$ThumbPage$viewThumbs = F2(
	function (imgChosenMsgr, thumbPageModel) {
		var imgs = A2(elm$core$List$cons, thumbPageModel.ba.bm, thumbPageModel.ba.bn);
		var _n0 = author$project$ThumbPage$colsWidth(thumbPageModel.ae);
		var maxCols = _n0.a;
		var thumbWidth = _n0.b;
		return A2(
			elm$core$List$map,
			A4(
				author$project$ThumbPage$viewThumbColumn,
				thumbWidth,
				A3(author$project$ThumbPage$convertImgChosenMsgr, thumbPageModel.ba.bm, imgs, imgChosenMsgr),
				thumbPageModel.cg,
				thumbPageModel.cz),
			A3(author$project$ThumbPage$spreadThumbs, maxCols, imgs, _List_Nil));
	});
var rtfeldman$elm_css$Css$flexShrink = rtfeldman$elm_css$Css$prop1('flex-shrink');
var rtfeldman$elm_css$Css$visibility = rtfeldman$elm_css$Css$prop1('visibility');
var author$project$ThumbPage$view = F5(
	function (scrollMsgMaker, imgChosenMsgr, showList, thumbPageModel, flags) {
		return A5(
			author$project$AlbumStyles$rootDivFlex,
			flags,
			rtfeldman$elm_css$Css$column,
			elm$core$Maybe$Just(scrollMsgMaker),
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$overflowX(rtfeldman$elm_css$Css$hidden)
				]),
			_List_fromArray(
				[
					A5(
					author$project$ThumbPage$albumTitle,
					thumbPageModel.ba.bG,
					thumbPageModel.co,
					showList,
					_List_Nil,
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$fixed)
						])),
					A5(
					author$project$ThumbPage$albumTitle,
					thumbPageModel.ba.bG,
					thumbPageModel.co,
					showList,
					_List_Nil,
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$visibility(rtfeldman$elm_css$Css$hidden)
						])),
					A2(
					rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							author$project$AlbumStyles$styles(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$displayFlex,
									rtfeldman$elm_css$Css$flexDirection(rtfeldman$elm_css$Css$row),
									rtfeldman$elm_css$Css$flexShrink(
									rtfeldman$elm_css$Css$num(0))
								]))
						]),
					A2(author$project$ThumbPage$viewThumbs, imgChosenMsgr, thumbPageModel))
				]));
	});
var author$project$AlbumPage$view = F6(
	function (albumPage, scrollMsgMaker, showList, wrapMsg, parents, flags) {
		if (!albumPage.$) {
			var album = albumPage.a;
			var viewport = albumPage.b;
			var justLoadedImages = albumPage.c;
			var readyToDisplayImages = albumPage.d;
			return A5(
				author$project$ThumbPage$view,
				scrollMsgMaker,
				function (x) {
					return function (y) {
						return function (z) {
							return wrapMsg(
								A3(author$project$AlbumPage$View, x, y, z));
						};
					};
				},
				showList,
				{ba: album, cg: justLoadedImages, co: parents, cz: readyToDisplayImages, ae: viewport},
				flags);
		} else {
			var prevImgs = albumPage.a;
			var album = albumPage.b;
			var progModel = albumPage.c;
			var viewport = albumPage.d;
			var dragInfo = albumPage.f;
			return A7(
				author$project$FullImagePage$view,
				{
					cT: wrapMsg(author$project$AlbumPage$BackToThumbs),
					dl: wrapMsg(author$project$AlbumPage$Next),
					dv: wrapMsg(author$project$AlbumPage$Prev),
					dB: showList
				},
				{
					dI: A2(elm$core$Basics$composeL, wrapMsg, author$project$AlbumPage$TouchDragContinue),
					dJ: A2(
						elm$core$Basics$composeL,
						wrapMsg,
						author$project$AlbumPage$touchPrevNext(dragInfo)),
					dK: A2(elm$core$Basics$composeL, wrapMsg, author$project$AlbumPage$TouchDragStart)
				},
				wrapMsg(author$project$AlbumPage$NoUpdate),
				A2(elm$core$Basics$composeL, wrapMsg, author$project$AlbumPage$FullMsg),
				{
					ba: album,
					dn: author$project$AlbumPage$offsetFor(dragInfo),
					du: prevImgs,
					dw: progModel,
					ae: viewport
				},
				parents,
				flags);
		}
	});
var author$project$Main$ScrolledTo = function (a) {
	return {$: 13, a: a};
};
var author$project$ListUtils$dropThroughPred = F2(
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
					if (A2(elm$core$List$any, pred, elems)) {
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
var author$project$Main$viewList = F4(
	function (oldModel, viewport, parents, list) {
		return A2(
			author$project$Main$ViewList,
			A3(
				author$project$AlbumListPage$AlbumListPage,
				list,
				viewport,
				A2(
					author$project$ListUtils$dropThroughPred,
					function (_n0) {
						var p = _n0.a;
						return _Utils_eq(p, list);
					},
					parents)),
			function () {
				if (A2(
					elm$core$List$member,
					list,
					A2(elm$core$List$map, elm$core$Tuple$first, parents))) {
					var _n1 = elm$core$List$head(
						A2(
							elm$core$List$filter,
							function (e) {
								return _Utils_eq(list, e.a);
							},
							parents));
					if (!_n1.$) {
						var p = _n1.a;
						return p.b;
					} else {
						return elm$core$Maybe$Nothing;
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}());
	});
var author$project$Main$viewProgress = function (progress) {
	switch (progress.$) {
		case 0:
			return 'starting';
		case 1:
			var data = progress.a;
			var _n1 = data.bW > 0;
			if (_n1) {
				var pct = elm$core$Basics$round((100 * data.bV) / data.bW);
				return elm$core$String$fromInt(pct) + '%';
			} else {
				return elm$core$String$fromInt(data.bV) + ' bytes received';
			}
		case 2:
			return 'failed';
		default:
			return 'complete';
	}
};
var author$project$Main$withHomeLink = F3(
	function (home, flags, basePage) {
		if (!home.$) {
			var h = home.a;
			return A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_Nil,
				_List_fromArray(
					[
						basePage,
						A2(
						rtfeldman$elm_css$Html$Styled$a,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$href(h),
								author$project$AlbumStyles$styles(
								_Utils_ap(
									_List_fromArray(
										[
											rtfeldman$elm_css$Css$top(
											rtfeldman$elm_css$Css$px(0)),
											rtfeldman$elm_css$Css$left(
											rtfeldman$elm_css$Css$px(0)),
											rtfeldman$elm_css$Css$textDecoration(rtfeldman$elm_css$Css$none)
										]),
									_Utils_ap(
										author$project$AlbumStyles$navBoxStyles,
										_List_fromArray(
											[
												author$project$AlbumStyles$rootPos(flags)
											]))))
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text('⌂')
							]))
					]));
		} else {
			return basePage;
		}
	});
var author$project$Main$viewImpl = function (albumBootstrap) {
	switch (albumBootstrap.$) {
		case 0:
			return rtfeldman$elm_css$Html$Styled$text('Album Starting');
		case 1:
			return rtfeldman$elm_css$Html$Styled$text('Home Loading ...');
		case 2:
			var progress = albumBootstrap.c;
			return rtfeldman$elm_css$Html$Styled$text(
				'Album Loading: ' + author$project$Main$viewProgress(progress));
		case 3:
			var e = albumBootstrap.c;
			var eStr = function () {
				switch (e.$) {
					case 0:
						var s = e.a;
						return 'bad url: ' + s;
					case 1:
						return 'timeout';
					case 2:
						return 'network error';
					case 3:
						var response = e.a;
						return 'bad status: ' + (response.bB.cj + (': ' + response.bd));
					default:
						var s = e.a;
						var response = e.b;
						return 'bad payload: ' + s;
				}
			}();
			return rtfeldman$elm_css$Html$Styled$text('Error Loading Album: ' + eStr);
		case 5:
			var albumPage = albumBootstrap.b;
			var parents = albumBootstrap.c;
			var flags = albumBootstrap.d;
			var home = albumBootstrap.e;
			var pendingUrls = albumBootstrap.f;
			var scrollPos = albumBootstrap.g;
			var postLoadNavState = albumBootstrap.h;
			return A3(
				author$project$Main$withHomeLink,
				home,
				flags,
				A6(
					author$project$AlbumPage$view,
					albumPage,
					author$project$Main$ScrolledTo,
					A3(
						author$project$Main$viewList,
						albumBootstrap,
						author$project$Main$pageSize(albumPage),
						parents),
					author$project$Main$PageMsg,
					A2(elm$core$List$map, elm$core$Tuple$first, parents),
					flags));
		default:
			var _n2 = albumBootstrap.b;
			var albumList = _n2.a;
			var viewport = _n2.b;
			var parents = _n2.c;
			var flags = albumBootstrap.c;
			var home = albumBootstrap.d;
			var pendingUrls = albumBootstrap.e;
			var scrollPos = albumBootstrap.f;
			var postLoadNavState = albumBootstrap.g;
			return A3(
				author$project$Main$withHomeLink,
				home,
				flags,
				A5(
					author$project$AlbumListPage$view,
					A3(author$project$AlbumListPage$AlbumListPage, albumList, viewport, parents),
					A3(
						author$project$Main$viewList,
						albumBootstrap,
						viewport,
						A2(
							elm$core$List$cons,
							_Utils_Tuple2(albumList, scrollPos),
							parents)),
					function (album) {
						return A2(
							author$project$Main$ViewAlbum,
							A4(author$project$AlbumPage$Thumbs, album, viewport, elm$core$Set$empty, elm$core$Set$empty),
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(albumList, scrollPos),
								parents));
					},
					author$project$Main$ScrolledTo,
					flags));
	}
};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_n0, styles) {
		var newStyles = _n0.b;
		var classname = _n0.c;
		return elm$core$List$isEmpty(newStyles) ? styles : A3(elm$core$Dict$insert, classname, newStyles, styles);
	});
var rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = function (_n0) {
	var val = _n0.a;
	return val;
};
var rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_n6, _n7) {
		var key = _n6.a;
		var html = _n6.b;
		var pairs = _n7.a;
		var styles = _n7.b;
		switch (html.$) {
			case 4:
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n9 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n9.a;
				var finalStyles = _n9.b;
				var vdom = A3(
					elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n10 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n10.a;
				var finalStyles = _n10.b;
				var vdom = A4(
					elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n11 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n11.a;
				var finalStyles = _n11.b;
				var vdom = A3(
					elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n12 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n12.a;
				var finalStyles = _n12.b;
				var vdom = A4(
					elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _n0) {
		var nodes = _n0.a;
		var styles = _n0.b;
		switch (html.$) {
			case 4:
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n2 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n2.a;
				var finalStyles = _n2.b;
				var vdomNode = A3(
					elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n3 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n3.a;
				var finalStyles = _n3.b;
				var vdomNode = A4(
					elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n4 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n4.a;
				var finalStyles = _n4.b;
				var vdomNode = A3(
					elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n5 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n5.a;
				var finalStyles = _n5.b;
				var vdomNode = A4(
					elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
	});
var rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			if (!properties.b) {
				return candidate;
			} else {
				var _n1 = properties.a;
				var styles = _n1.b;
				var classname = _n1.c;
				var rest = properties.b;
				if (elm$core$String$isEmpty(classname)) {
					var $temp$candidate = candidate,
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				} else {
					var $temp$candidate = elm$core$Maybe$Just(
						_Utils_Tuple2(classname, styles)),
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties = function (properties) {
	var _n0 = A2(rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp, elm$core$Maybe$Nothing, properties);
	if (_n0.$ === 1) {
		return elm$core$Dict$empty;
	} else {
		var _n1 = _n0.a;
		var classname = _n1.a;
		var styles = _n1.b;
		return A2(elm$core$Dict$singleton, classname, styles);
	}
};
var rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair = function (_n0) {
	var classname = _n0.a;
	var styles = _n0.b;
	return A2(
		rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
		styles,
		rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$ClassSelector(classname)
				])));
};
var rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
		elm$core$List$singleton(
			rtfeldman$elm_css$Css$Preprocess$stylesheet(
				A2(
					elm$core$List$map,
					rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair,
					elm$core$Dict$toList(dict)))));
};
var rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = function (styles) {
	return A3(
		elm$virtual_dom$VirtualDom$node,
		'style',
		_List_Nil,
		elm$core$List$singleton(
			elm$virtual_dom$VirtualDom$text(
				rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))));
};
var rtfeldman$elm_css$VirtualDom$Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _n0.a;
		var styles = _n0.b;
		var styleNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A3(
			elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				styleNode,
				elm$core$List$reverse(childNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _n1 = pairs.a;
				var str = _n1.a;
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
var rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _n1 = pairs.a;
				var firstKey = _n1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2(rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
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
var rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var styleNodeKey = A2(rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(allStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _n0.a;
		var styles = _n0.b;
		var keyedStyleNode = A2(rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				keyedStyleNode,
				elm$core$List$reverse(keyedChildNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F4(
	function (ns, elemType, properties, keyedChildren) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _n0.a;
		var styles = _n0.b;
		var keyedStyleNode = A2(rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A4(
			elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				keyedStyleNode,
				elm$core$List$reverse(keyedChildNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F4(
	function (ns, elemType, properties, children) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _n0.a;
		var styles = _n0.b;
		var styleNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A4(
			elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				styleNode,
				elm$core$List$reverse(childNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 4:
			var plainNode = vdom.a;
			return plainNode;
		case 0:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3(rtfeldman$elm_css$VirtualDom$Styled$unstyle, elemType, properties, children);
		case 1:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4(rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, ns, elemType, properties, children);
		case 2:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3(rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4(rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, ns, elemType, properties, children);
	}
};
var rtfeldman$elm_css$Html$Styled$toUnstyled = rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var author$project$Main$view = function (albumBootstrap) {
	var title = function () {
		switch (albumBootstrap.$) {
			case 0:
				return 'Album Starting';
			case 1:
				return 'Home Loading ...';
			case 2:
				var progress = albumBootstrap.c;
				return 'Album Loading: ' + author$project$Main$viewProgress(progress);
			case 3:
				return 'Error Loading Album';
			case 4:
				var _n1 = albumBootstrap.b;
				var albumList = _n1.a;
				return albumList.br;
			default:
				var albumPage = albumBootstrap.b;
				return author$project$AlbumPage$titleOf(albumPage);
		}
	}();
	return {
		bd: _List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$toUnstyled(
				author$project$Main$viewImpl(albumBootstrap))
			]),
		bG: title
	};
};
var author$project$RouteUrl$RouterMsg = function (a) {
	return {$: 0, a: a};
};
var author$project$RouteUrl$appWithFlags2Common = function (app) {
	return {cZ: app.cZ, df: app.df, dp: app.dp, dF: app.dF, dN: app.dN, dQ: app.dQ};
};
var author$project$RouteUrl$UserMsg = function (a) {
	return {$: 1, a: a};
};
var author$project$RouteUrl$WrappedModel = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var ccapndave$elm_update_extra$Update$Extra$andThen = F3(
	function (update, msg, _n0) {
		var model = _n0.a;
		var cmd = _n0.b;
		var _n1 = A2(update, msg, model);
		var model_ = _n1.a;
		var cmd_ = _n1.b;
		return _Utils_Tuple2(
			model_,
			elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, cmd_])));
	});
var ccapndave$elm_update_extra$Update$Extra$sequence = F3(
	function (update, msgs, init) {
		var foldUpdate = ccapndave$elm_update_extra$Update$Extra$andThen(update);
		return A3(elm$core$List$foldl, foldUpdate, init, msgs);
	});
var author$project$RouteUrl$initWithFlags = F5(
	function (appInit, app, flags, location, key) {
		var routerModel = {H: 0, T: location};
		var _n0 = A3(
			ccapndave$elm_update_extra$Update$Extra$sequence,
			app.dN,
			app.df(location),
			A2(appInit, flags, key));
		var userModel = _n0.a;
		var command = _n0.b;
		return _Utils_Tuple2(
			A2(author$project$RouteUrl$WrappedModel, userModel, routerModel),
			A2(elm$core$Platform$Cmd$map, author$project$RouteUrl$UserMsg, command));
	});
var author$project$RouteUrl$onUrlRequest = F2(
	function (app, req) {
		return author$project$RouteUrl$UserMsg(
			app.dp(req));
	});
var author$project$RouteUrl$subscriptions = F2(
	function (app, _n0) {
		var model = _n0.a;
		return A2(
			elm$core$Platform$Sub$map,
			author$project$RouteUrl$UserMsg,
			app.dF(model));
	});
var author$project$RouteUrl$apply = F2(
	function (url, change) {
		switch (change.$) {
			case 0:
				var c = change.b;
				return _Utils_update(
					url,
					{bk: c.bk, cp: c.cp, by: c.by});
			case 1:
				var c = change.b;
				return _Utils_update(
					url,
					{
						bk: c.bk,
						by: elm$core$Maybe$Just(c.by)
					});
			default:
				var c = change.b;
				return _Utils_update(
					url,
					{
						bk: elm$core$Maybe$Just(c)
					});
		}
	});
var author$project$RouteUrl$checkDistinctUrl = F2(
	function (old, _new) {
		var newUrl = A2(author$project$RouteUrl$apply, old, _new);
		var _n0 = _Utils_eq(old, newUrl);
		if (_n0) {
			return elm$core$Maybe$Nothing;
		} else {
			return elm$core$Maybe$Just(_new);
		}
	});
var author$project$RouteUrl$getMetadata = function (urlChange) {
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
var elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
var author$project$RouteUrl$urlChange2Cmd = F2(
	function (oldUrl, change) {
		var metadata = author$project$RouteUrl$getMetadata(change);
		return function () {
			var _n0 = metadata.b5;
			if (!_n0) {
				return elm$browser$Browser$Navigation$pushUrl(metadata.ci);
			} else {
				return elm$browser$Browser$Navigation$replaceUrl(metadata.ci);
			}
		}()(
			elm$url$Url$toString(
				A2(author$project$RouteUrl$apply, oldUrl, change)));
	});
var author$project$RouteUrl$update = F3(
	function (app, msg, _n0) {
		var user = _n0.a;
		var router = _n0.b;
		if (!msg.$) {
			var location = msg.a;
			var newRouterModel = {
				H: (router.H > 0) ? (router.H - 1) : 0,
				T: location
			};
			if (router.H > 0) {
				return _Utils_Tuple2(
					A2(author$project$RouteUrl$WrappedModel, user, newRouterModel),
					elm$core$Platform$Cmd$none);
			} else {
				var _n2 = A3(
					ccapndave$elm_update_extra$Update$Extra$sequence,
					app.dN,
					app.df(location),
					_Utils_Tuple2(user, elm$core$Platform$Cmd$none));
				var newUserModel = _n2.a;
				var commands = _n2.b;
				return _Utils_Tuple2(
					A2(author$project$RouteUrl$WrappedModel, newUserModel, newRouterModel),
					A2(elm$core$Platform$Cmd$map, author$project$RouteUrl$UserMsg, commands));
			}
		} else {
			var userMsg = msg.a;
			var _n3 = A2(app.dN, userMsg, user);
			var newUserModel = _n3.a;
			var userCommand = _n3.b;
			var maybeUrlChange = A2(
				elm$core$Maybe$andThen,
				author$project$RouteUrl$checkDistinctUrl(router.T),
				A2(app.cZ, user, newUserModel));
			if (!maybeUrlChange.$) {
				var urlChange = maybeUrlChange.a;
				return _Utils_Tuple2(
					A2(
						author$project$RouteUrl$WrappedModel,
						newUserModel,
						{
							H: router.H + 1,
							T: A2(author$project$RouteUrl$apply, router.T, urlChange)
						}),
					A2(
						elm$core$Platform$Cmd$map,
						author$project$RouteUrl$UserMsg,
						elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2(author$project$RouteUrl$urlChange2Cmd, router.T, urlChange),
									userCommand
								]))));
			} else {
				return _Utils_Tuple2(
					A2(author$project$RouteUrl$WrappedModel, newUserModel, router),
					A2(elm$core$Platform$Cmd$map, author$project$RouteUrl$UserMsg, userCommand));
			}
		}
	});
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var author$project$RouteUrl$docMap = F2(
	function (fn, doc) {
		return {
			bd: A2(
				elm$core$List$map,
				elm$html$Html$map(fn),
				doc.bd),
			bG: doc.bG
		};
	});
var author$project$RouteUrl$view = F2(
	function (app, _n0) {
		var model = _n0.a;
		return A2(
			author$project$RouteUrl$docMap,
			author$project$RouteUrl$UserMsg,
			app.dQ(model));
	});
var author$project$RouteUrl$navigationAppWithFlags = function (app) {
	var common = author$project$RouteUrl$appWithFlags2Common(app);
	return {
		da: A2(author$project$RouteUrl$initWithFlags, app.da, common),
		bs: author$project$RouteUrl$RouterMsg,
		dp: author$project$RouteUrl$onUrlRequest(common),
		dF: author$project$RouteUrl$subscriptions(common),
		dN: author$project$RouteUrl$update(common),
		dQ: author$project$RouteUrl$view(common)
	};
};
var elm$browser$Browser$application = _Browser_application;
var author$project$RouteUrl$runNavigationAppWithFlags = function (app) {
	return elm$browser$Browser$application(
		{da: app.da, $7: app.bs, dp: app.dp, dF: app.dF, dN: app.dN, dQ: app.dQ});
};
var author$project$RouteUrl$programWithFlags = A2(elm$core$Basics$composeL, author$project$RouteUrl$runNavigationAppWithFlags, author$project$RouteUrl$navigationAppWithFlags);
var elm$json$Json$Decode$bool = _Json_decodeBool;
var author$project$Main$main = author$project$RouteUrl$programWithFlags(
	{cZ: author$project$Main$locFor, da: author$project$Main$init, df: author$project$Main$navToMsg, dp: author$project$Main$LinkClicked, dF: author$project$Main$subscriptions, dN: author$project$Main$update, dQ: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (scrollSupport) {
			return elm$json$Json$Decode$succeed(
				{cF: scrollSupport});
		},
		A2(elm$json$Json$Decode$field, 'scrollSupport', elm$json$Json$Decode$bool)))(0)}});}(this));