// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
console.log('main.js');
var app1 = new Vue({
  el: '#app1',
  data: {
    styleObj: {
      color: 'red',
      border: '3px solid black',
      padding: '10px'
    }
  }
});
var app2 = new Vue({
  el: '#app2',
  data: {
    activeColor: 'red',
    border: '5px solid pink',
    padding: '10px',
    margin: '20px 0'
  }
});
var app3 = new Vue({
  el: '#app3',
  data: {
    baseStyle: {
      color: 'brown',
      fontSize: '20px'
    },
    secondStyle: {
      background: 'lightgray',
      margin: '20px 0'
    }
  }
});
var h1 = new Vue({
  el: '#app4',
  data: {
    awesome: false
  }
});
var template = new Vue({
  el: '#app5',
  data: {
    ok: true,
    styleObj: {
      color: 'red',
      border: '4px solid brown'
    }
  }
});
var app6 = new Vue({
  el: '#app6',
  data: {
    test: 'o'
  }
});
var app7 = new Vue({
  el: '#app7',
  data: {
    ok: true
  }
}); // v-for="item in items"

var app8 = new Vue({
  el: '#app8',
  data: {
    janson: [{
      message: 'foo'
    }, {
      message: 'bar'
    }]
  }
});
var app9 = new Vue({
  el: '#app9',
  data: {
    parentMessage: 'Parent',
    items: [{
      message: 'hello'
    }, {
      message: 'hi'
    }, {
      message: 'bobobobob'
    }]
  }
});
var app10 = new Vue({
  el: '#app10',
  data: {
    parentMessage: 'Parent',
    items: [{
      message: 'asldfja'
    }, {
      message: 'ergfbjngrker'
    }, {
      message: 'weohevnefljeiof'
    }]
  }
});
var app11 = new Vue({
  el: '#app11',
  data: {
    parentMessage: 'Parent',
    object: {
      one: '我是1',
      two: '我是2',
      three: '我是3'
    }
  },
  created: function created() {// alert('还没挂在到 DOM ')
  },
  mounted: function mounted() {// alert('已经挂在到 DOM ')
  }
});
console.log(app11.$el);
console.log(app11.$data);
console.log(app11.parentMessage); // parent

var app12 = new Vue({
  el: '#app12',
  data: {
    message: 'janson',
    ahead: 'ahead'
  }
}); // new Date()

var plusDate = function plusDate(value) {
  return value > 10 ? value : '0' + value;
};

var app13 = new Vue({
  el: '#app13',
  data: {
    time: new Date()
  },
  filters: {
    formatDate: function formatDate(value) {
      var date = new Date(value);
      var year = date.getFullYear();
      var month = plusDate(date.getMonth() + 1);
      var day = plusDate(date.getDate());
      var hours = plusDate(date.getHours());
      var min = plusDate(date.getMinutes());
      var sec = plusDate(date.getSeconds());
      return hours + ' : ' + min + ' : ' + sec + ' | ' + year + '.' + month + '.' + day;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.time = new Date();
    }, 1000);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}); // filter 的用法: {{ data | filter1 | filter2 | filter3 | ...}} 这个叫过滤器的串联
// filter 传参数 {{ data | filter1(66, 99)}} 同时要在 js 的方法中定义：formatDate: function(value,a,b){...} 66 和 99 对应的就是 a b 

var format = function format(value) {
  return value > 10 ? value : '0' + value;
};

var app14 = new Vue({
  el: '#app14',
  data: {
    time: new Date(),
    apple: 'apple',
    banana: '<span style="color: orange">banana</span>',
    className: 'janson',
    count: 0
  },
  methods: {
    counter: function counter() {
      this.count += 1;
    }
  },
  filters: {
    formatDate: function formatDate(value) {
      var date = new Date(value);
      var year = date.getFullYear();
      var month = format(date.getMonth());
      var day = format(date.getDate());
      var hours = format(date.getHours());
      var min = format(date.getMinutes());
      var sec = format(date.getSeconds());
      return year + ' : ' + month + ' : ' + day + '--' + hours + ' : ' + min + ' : ' + sec;
    }
  },
  created: function created() {
    console.log('created');
  },
  mounted: function mounted() {
    console.log('mounted');

    var _this = this;

    this.timer = setInterval(function () {
      _this.time = new Date();
    }, 1000);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}); // computed 计算属性

var computedDemo = new Vue({
  el: '#appdemo',
  data: {
    msg: 100000
  }
});
var computed1 = new Vue({
  el: '#computed',
  data: {
    cart1: [{
      name: 'iPhone8',
      count: 3,
      price: 1000
    }, {
      name: 'android',
      count: 2,
      price: 3000
    }],
    cart2: [{
      name: 'ipad',
      count: 5,
      price: 3600
    }, {
      name: 'banana',
      count: 10,
      price: 10
    }]
  },
  computed: {
    prices: function prices() {
      var prices = 0;

      for (var i = 0; i < this.cart1.length; i++) {
        prices += this.cart1[i].count * this.cart1[i].price;
      }

      for (var j = 0; j < this.cart2.length; j++) {
        prices += this.cart2[j].count * this.cart2[j].price;
      }

      return prices + ' | ' + computedDemo.msg;
    }
  }
}); // 计算属性的 getter 和 setter

var app88 = new Vue({
  el: '#app88',
  data: {
    fullName: 'Wang,wei',
    styleObj: {
      color: 'brown',
      fontSize: '30px'
    }
  },
  methods: {
    xxx: function xxx() {
      this.fullName = this.fullName.split(',').reverse().join(' ');
      return this.fullName;
    }
  },
  computed: {
    reverseName: function reverseName() {
      var names = this.fullName.split(',');
      return names.reverse().join(' ');
    }
  }
}); // watch 与 计算属性

var app99 = new Vue({
  el: '#app99',
  data: {
    firstName: 'Foo',
    lastName: 'dddd',
    fullName: 'Foo Bar'
  },
  //computed: {
  //	xxx: function(){
  //		this.fullName = this.firstName + this.lastName	
  //		return this.fullName
  //	}
  //},
  watch: {
    firstName: function firstName(value) {
      this.fullName = value + ' ' + this.lastName;
    },
    lastName: function lastName(value) {
      this.fullName = this.firstName + ' ' + value;
    }
  }
}); // computed setter

var app33 = new Vue({
  el: '#app33',
  data: {
    firstName: 'Da',
    lastName: 'jian'
  },
  computed: {
    fullName: {
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function set(val) {
        var names = val.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});
app33.fullName = 'Xin He'; // a标签  img标签

var app67 = new Vue({
  el: '#app67',
  data: {
    href: 'https://www.google.com/ncr',
    src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  }
}); // v-bind:class...

var app55 = new Vue({
  el: '#app55',
  data: {
    isActive: true,
    isBorderA: true,
    isBorderB: false,
    isBack1: true,
    isBack2: false
  },
  methods: {
    changeBorder: function changeBorder() {
      this.isBorderA = !this.isBorderA;
      this.isBorderB = !this.isBorderB;
      return this.isBorderA;
      this.isBorderB;
    },
    changeBack: function changeBack() {
      this.isBack1 = !this.isBack1;
      this.isBack2 = !this.isBack2;
      return this.isBack1;
      this.isBack2;
    }
  }
}); // v-bind:class="classNames"

var app77 = new Vue({
  el: '#app77',
  data: {
    yyy: true
  },
  computed: {
    classNames: function classNames() {
      return {
        he: true,
        jian: true,
        xin: true
      };
    }
  }
}); // v-bind:class="[one, two]"

var app90 = new Vue({
  el: '#app90',
  data: {
    one: 'activeClass',
    two: 'errorClass'
  }
}); // v-bind="[{jonson: isJonson},hey]"

var app86 = new Vue({
  el: '#app86',
  data: {
    isActive: true,
    hey: 'heyhey'
  }
}); // v-bind:style="styleObj"

var app64 = new Vue({
  el: '#app64',
  data: {
    styleObj: {
      border: '5px solid red',
      color: 'blue'
    }
  }
}); // :style="[one,two]"

var app444 = new Vue({
  el: '#app444',
  data: {
    one: {
      color: 'red',
      border: '5px solid pink'
    },
    two: {
      fontSize: '40px',
      background: 'blue'
    }
  }
}); // 练习

var app999 = new Vue({
  el: '#app999',
  data: {
    isOne: true
  }
});
var array = new Vue({
  el: '#array',
  data: {
    he: 'hehe',
    jian: 'jianjian'
  }
});
},{}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59614" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map