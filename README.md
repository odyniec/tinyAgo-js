TinyAgo.js
==========

TinyAgo.js is a tiny (184 bytes when minified) JavaScript library that converts
timestamps into relative time (a.k.a. "timeago").

Usage
-----

The library provides one function `ago()`, which expects an argument that is a
timestamp in milliseconds (such as the return value of the
[`Date.getTime()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
method), and returns a string with the relative time:

```javascript
var d = new Date('January 1, 2014');
console.log(ago(d.getTime())); // -> '7 months' (assuming it's August 2014)
```

As shown in the above example, the function does not return the `'ago'` suffix.
This is left as an exercise for the reader.

### Dates in the future

The function assumes the timestamp is in the past, but with a little wrapper it
can also work with future dates:

```javascript
function agofromnow(v) {
    if (v > Date.now())
        return ago(2 * Date.now() - v) + ' from now';
    else
        return ago(v) + ' ago';
}
```
