
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

function add(a, b) {
  if (process.env.REACT_APP_MY_FUNCTION1 == "sum1") return a + b;else {
    return a + b + 1000;
  }
}

module.exports = add;
