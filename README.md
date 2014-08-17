TinyAgo.js
==========

TinyAgo.js is a tiny (187 bytes when minified) JavaScript function that converts
timestamps into relative time (a.k.a. "timeago").

Example:

```javascript
var d = new Date('January 1, 2014');
console.log(ago(d.getTime())); // -> '7 months'
```
