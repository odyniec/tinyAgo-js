function ago(v, f) {
    v = Date.now() - v;
    var a, b = { second: 6e4, minute: 60, hour: 24, day: 7, week: 4.35,
        month: 12, year: 1e4 }, c;
 
    for (a in b) {
        c=v % b[a];
        if (!(v = (f||parseInt)(v / b[a])))
            return c + ' ' + (c-1 ? a + 's' : a);
    }
}
