function h1(l, i) {
  for (var o = 0; o < i.length; o++) {
    const c = i[o];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const s in c)
        if (s !== "default" && !(s in l)) {
          const d = Object.getOwnPropertyDescriptor(c, s);
          d && Object.defineProperty(l, s, d.get ? d : {
            enumerable: !0,
            get: () => c[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
function g1(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var vs = { exports: {} }, ft = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hm;
function v1() {
  if (hm) return ft;
  hm = 1;
  var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), y = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), z = Symbol.iterator;
  function B(S) {
    return S === null || typeof S != "object" ? null : (S = z && S[z] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var M = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, T = Object.assign, L = {};
  function $(S, j, J) {
    this.props = S, this.context = j, this.refs = L, this.updater = J || M;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(S, j) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, j, "setState");
  }, $.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function K() {
  }
  K.prototype = $.prototype;
  function V(S, j, J) {
    this.props = S, this.context = j, this.refs = L, this.updater = J || M;
  }
  var Z = V.prototype = new K();
  Z.constructor = V, T(Z, $.prototype), Z.isPureReactComponent = !0;
  var H = Array.isArray;
  function q() {
  }
  var Y = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function W(S, j, J) {
    var tt = J.ref;
    return {
      $$typeof: l,
      type: S,
      key: j,
      ref: tt !== void 0 ? tt : null,
      props: J
    };
  }
  function it(S, j) {
    return W(S.type, j, S.props);
  }
  function nt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === l;
  }
  function g(S) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(J) {
      return j[J];
    });
  }
  var P = /\/+/g;
  function F(S, j) {
    return typeof S == "object" && S !== null && S.key != null ? g("" + S.key) : j.toString(36);
  }
  function ot(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(q, q) : (S.status = "pending", S.then(
          function(j) {
            S.status === "pending" && (S.status = "fulfilled", S.value = j);
          },
          function(j) {
            S.status === "pending" && (S.status = "rejected", S.reason = j);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function R(S, j, J, tt, st) {
    var mt = typeof S;
    (mt === "undefined" || mt === "boolean") && (S = null);
    var pt = !1;
    if (S === null) pt = !0;
    else
      switch (mt) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case l:
            case i:
              pt = !0;
              break;
            case x:
              return pt = S._init, R(
                pt(S._payload),
                j,
                J,
                tt,
                st
              );
          }
      }
    if (pt)
      return st = st(S), pt = tt === "" ? "." + F(S, 0) : tt, H(st) ? (J = "", pt != null && (J = pt.replace(P, "$&/") + "/"), R(st, j, J, "", function(fl) {
        return fl;
      })) : st != null && (nt(st) && (st = it(
        st,
        J + (st.key == null || S && S.key === st.key ? "" : ("" + st.key).replace(
          P,
          "$&/"
        ) + "/") + pt
      )), j.push(st)), 1;
    pt = 0;
    var le = tt === "" ? "." : tt + ":";
    if (H(S))
      for (var Gt = 0; Gt < S.length; Gt++)
        tt = S[Gt], mt = le + F(tt, Gt), pt += R(
          tt,
          j,
          J,
          mt,
          st
        );
    else if (Gt = B(S), typeof Gt == "function")
      for (S = Gt.call(S), Gt = 0; !(tt = S.next()).done; )
        tt = tt.value, mt = le + F(tt, Gt++), pt += R(
          tt,
          j,
          J,
          mt,
          st
        );
    else if (mt === "object") {
      if (typeof S.then == "function")
        return R(
          ot(S),
          j,
          J,
          tt,
          st
        );
      throw j = String(S), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pt;
  }
  function X(S, j, J) {
    if (S == null) return S;
    var tt = [], st = 0;
    return R(S, tt, "", "", function(mt) {
      return j.call(J, mt, st++);
    }), tt;
  }
  function at(S) {
    if (S._status === -1) {
      var j = S._result;
      j = j(), j.then(
        function(J) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = J);
        },
        function(J) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = J);
        }
      ), S._status === -1 && (S._status = 0, S._result = j);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var St = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, At = {
    map: X,
    forEach: function(S, j, J) {
      X(
        S,
        function() {
          j.apply(this, arguments);
        },
        J
      );
    },
    count: function(S) {
      var j = 0;
      return X(S, function() {
        j++;
      }), j;
    },
    toArray: function(S) {
      return X(S, function(j) {
        return j;
      }) || [];
    },
    only: function(S) {
      if (!nt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ft.Activity = A, ft.Children = At, ft.Component = $, ft.Fragment = o, ft.Profiler = s, ft.PureComponent = V, ft.StrictMode = c, ft.Suspense = v, ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, ft.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Y.H.useMemoCache(S);
    }
  }, ft.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ft.cacheSignal = function() {
    return null;
  }, ft.cloneElement = function(S, j, J) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var tt = T({}, S.props), st = S.key;
    if (j != null)
      for (mt in j.key !== void 0 && (st = "" + j.key), j)
        !I.call(j, mt) || mt === "key" || mt === "__self" || mt === "__source" || mt === "ref" && j.ref === void 0 || (tt[mt] = j[mt]);
    var mt = arguments.length - 2;
    if (mt === 1) tt.children = J;
    else if (1 < mt) {
      for (var pt = Array(mt), le = 0; le < mt; le++)
        pt[le] = arguments[le + 2];
      tt.children = pt;
    }
    return W(S.type, st, tt);
  }, ft.createContext = function(S) {
    return S = {
      $$typeof: y,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, ft.createElement = function(S, j, J) {
    var tt, st = {}, mt = null;
    if (j != null)
      for (tt in j.key !== void 0 && (mt = "" + j.key), j)
        I.call(j, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (st[tt] = j[tt]);
    var pt = arguments.length - 2;
    if (pt === 1) st.children = J;
    else if (1 < pt) {
      for (var le = Array(pt), Gt = 0; Gt < pt; Gt++)
        le[Gt] = arguments[Gt + 2];
      st.children = le;
    }
    if (S && S.defaultProps)
      for (tt in pt = S.defaultProps, pt)
        st[tt] === void 0 && (st[tt] = pt[tt]);
    return W(S, mt, st);
  }, ft.createRef = function() {
    return { current: null };
  }, ft.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ft.isValidElement = nt, ft.lazy = function(S) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: S },
      _init: at
    };
  }, ft.memo = function(S, j) {
    return {
      $$typeof: h,
      type: S,
      compare: j === void 0 ? null : j
    };
  }, ft.startTransition = function(S) {
    var j = Y.T, J = {};
    Y.T = J;
    try {
      var tt = S(), st = Y.S;
      st !== null && st(J, tt), typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(q, St);
    } catch (mt) {
      St(mt);
    } finally {
      j !== null && J.types !== null && (j.types = J.types), Y.T = j;
    }
  }, ft.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, ft.use = function(S) {
    return Y.H.use(S);
  }, ft.useActionState = function(S, j, J) {
    return Y.H.useActionState(S, j, J);
  }, ft.useCallback = function(S, j) {
    return Y.H.useCallback(S, j);
  }, ft.useContext = function(S) {
    return Y.H.useContext(S);
  }, ft.useDebugValue = function() {
  }, ft.useDeferredValue = function(S, j) {
    return Y.H.useDeferredValue(S, j);
  }, ft.useEffect = function(S, j) {
    return Y.H.useEffect(S, j);
  }, ft.useEffectEvent = function(S) {
    return Y.H.useEffectEvent(S);
  }, ft.useId = function() {
    return Y.H.useId();
  }, ft.useImperativeHandle = function(S, j, J) {
    return Y.H.useImperativeHandle(S, j, J);
  }, ft.useInsertionEffect = function(S, j) {
    return Y.H.useInsertionEffect(S, j);
  }, ft.useLayoutEffect = function(S, j) {
    return Y.H.useLayoutEffect(S, j);
  }, ft.useMemo = function(S, j) {
    return Y.H.useMemo(S, j);
  }, ft.useOptimistic = function(S, j) {
    return Y.H.useOptimistic(S, j);
  }, ft.useReducer = function(S, j, J) {
    return Y.H.useReducer(S, j, J);
  }, ft.useRef = function(S) {
    return Y.H.useRef(S);
  }, ft.useState = function(S) {
    return Y.H.useState(S);
  }, ft.useSyncExternalStore = function(S, j, J) {
    return Y.H.useSyncExternalStore(
      S,
      j,
      J
    );
  }, ft.useTransition = function() {
    return Y.H.useTransition();
  }, ft.version = "19.2.0", ft;
}
var gm;
function Ks() {
  return gm || (gm = 1, vs.exports = v1()), vs.exports;
}
var Q = Ks();
const Js = /* @__PURE__ */ g1(Q), js = /* @__PURE__ */ h1({
  __proto__: null,
  default: Js
}, [Q]);
var bs = { exports: {} }, $r = {}, Ss = { exports: {} }, Cs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vm;
function b1() {
  return vm || (vm = 1, (function(l) {
    function i(R, X) {
      var at = R.length;
      R.push(X);
      t: for (; 0 < at; ) {
        var St = at - 1 >>> 1, At = R[St];
        if (0 < s(At, X))
          R[St] = X, R[at] = At, at = St;
        else break t;
      }
    }
    function o(R) {
      return R.length === 0 ? null : R[0];
    }
    function c(R) {
      if (R.length === 0) return null;
      var X = R[0], at = R.pop();
      if (at !== X) {
        R[0] = at;
        t: for (var St = 0, At = R.length, S = At >>> 1; St < S; ) {
          var j = 2 * (St + 1) - 1, J = R[j], tt = j + 1, st = R[tt];
          if (0 > s(J, at))
            tt < At && 0 > s(st, J) ? (R[St] = st, R[tt] = at, St = tt) : (R[St] = J, R[j] = at, St = j);
          else if (tt < At && 0 > s(st, at))
            R[St] = st, R[tt] = at, St = tt;
          else break t;
        }
      }
      return X;
    }
    function s(R, X) {
      var at = R.sortIndex - X.sortIndex;
      return at !== 0 ? at : R.id - X.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      l.unstable_now = function() {
        return d.now();
      };
    } else {
      var y = Date, p = y.now();
      l.unstable_now = function() {
        return y.now() - p;
      };
    }
    var v = [], h = [], x = 1, A = null, z = 3, B = !1, M = !1, T = !1, L = !1, $ = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function Z(R) {
      for (var X = o(h); X !== null; ) {
        if (X.callback === null) c(h);
        else if (X.startTime <= R)
          c(h), X.sortIndex = X.expirationTime, i(v, X);
        else break;
        X = o(h);
      }
    }
    function H(R) {
      if (T = !1, Z(R), !M)
        if (o(v) !== null)
          M = !0, q || (q = !0, g());
        else {
          var X = o(h);
          X !== null && ot(H, X.startTime - R);
        }
    }
    var q = !1, Y = -1, I = 5, W = -1;
    function it() {
      return L ? !0 : !(l.unstable_now() - W < I);
    }
    function nt() {
      if (L = !1, q) {
        var R = l.unstable_now();
        W = R;
        var X = !0;
        try {
          t: {
            M = !1, T && (T = !1, K(Y), Y = -1), B = !0;
            var at = z;
            try {
              e: {
                for (Z(R), A = o(v); A !== null && !(A.expirationTime > R && it()); ) {
                  var St = A.callback;
                  if (typeof St == "function") {
                    A.callback = null, z = A.priorityLevel;
                    var At = St(
                      A.expirationTime <= R
                    );
                    if (R = l.unstable_now(), typeof At == "function") {
                      A.callback = At, Z(R), X = !0;
                      break e;
                    }
                    A === o(v) && c(v), Z(R);
                  } else c(v);
                  A = o(v);
                }
                if (A !== null) X = !0;
                else {
                  var S = o(h);
                  S !== null && ot(
                    H,
                    S.startTime - R
                  ), X = !1;
                }
              }
              break t;
            } finally {
              A = null, z = at, B = !1;
            }
            X = void 0;
          }
        } finally {
          X ? g() : q = !1;
        }
      }
    }
    var g;
    if (typeof V == "function")
      g = function() {
        V(nt);
      };
    else if (typeof MessageChannel < "u") {
      var P = new MessageChannel(), F = P.port2;
      P.port1.onmessage = nt, g = function() {
        F.postMessage(null);
      };
    } else
      g = function() {
        $(nt, 0);
      };
    function ot(R, X) {
      Y = $(function() {
        R(l.unstable_now());
      }, X);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, l.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < R ? Math.floor(1e3 / R) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, l.unstable_next = function(R) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = z;
      }
      var at = z;
      z = X;
      try {
        return R();
      } finally {
        z = at;
      }
    }, l.unstable_requestPaint = function() {
      L = !0;
    }, l.unstable_runWithPriority = function(R, X) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var at = z;
      z = R;
      try {
        return X();
      } finally {
        z = at;
      }
    }, l.unstable_scheduleCallback = function(R, X, at) {
      var St = l.unstable_now();
      switch (typeof at == "object" && at !== null ? (at = at.delay, at = typeof at == "number" && 0 < at ? St + at : St) : at = St, R) {
        case 1:
          var At = -1;
          break;
        case 2:
          At = 250;
          break;
        case 5:
          At = 1073741823;
          break;
        case 4:
          At = 1e4;
          break;
        default:
          At = 5e3;
      }
      return At = at + At, R = {
        id: x++,
        callback: X,
        priorityLevel: R,
        startTime: at,
        expirationTime: At,
        sortIndex: -1
      }, at > St ? (R.sortIndex = at, i(h, R), o(v) === null && R === o(h) && (T ? (K(Y), Y = -1) : T = !0, ot(H, at - St))) : (R.sortIndex = At, i(v, R), M || B || (M = !0, q || (q = !0, g()))), R;
    }, l.unstable_shouldYield = it, l.unstable_wrapCallback = function(R) {
      var X = z;
      return function() {
        var at = z;
        z = X;
        try {
          return R.apply(this, arguments);
        } finally {
          z = at;
        }
      };
    };
  })(Cs)), Cs;
}
var bm;
function S1() {
  return bm || (bm = 1, Ss.exports = b1()), Ss.exports;
}
var As = { exports: {} }, me = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sm;
function C1() {
  if (Sm) return me;
  Sm = 1;
  var l = Ks();
  function i(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        h += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var c = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function d(v, h, x) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: A == null ? null : "" + A,
      children: v,
      containerInfo: h,
      implementation: x
    };
  }
  var y = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, h) {
    if (v === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, me.createPortal = function(v, h) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return d(v, h, null, x);
  }, me.flushSync = function(v) {
    var h = y.T, x = c.p;
    try {
      if (y.T = null, c.p = 2, v) return v();
    } finally {
      y.T = h, c.p = x, c.d.f();
    }
  }, me.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, c.d.C(v, h));
  }, me.prefetchDNS = function(v) {
    typeof v == "string" && c.d.D(v);
  }, me.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var x = h.as, A = p(x, h.crossOrigin), z = typeof h.integrity == "string" ? h.integrity : void 0, B = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      x === "style" ? c.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: A,
          integrity: z,
          fetchPriority: B
        }
      ) : x === "script" && c.d.X(v, {
        crossOrigin: A,
        integrity: z,
        fetchPriority: B,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, me.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var x = p(
            h.as,
            h.crossOrigin
          );
          c.d.M(v, {
            crossOrigin: x,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && c.d.M(v);
  }, me.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var x = h.as, A = p(x, h.crossOrigin);
      c.d.L(v, x, {
        crossOrigin: A,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, me.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var x = p(h.as, h.crossOrigin);
        c.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: x,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else c.d.m(v);
  }, me.requestFormReset = function(v) {
    c.d.r(v);
  }, me.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, me.useFormState = function(v, h, x) {
    return y.H.useFormState(v, h, x);
  }, me.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, me.version = "19.2.0", me;
}
var Cm;
function A1() {
  if (Cm) return As.exports;
  Cm = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), As.exports = C1(), As.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Am;
function x1() {
  if (Am) return $r;
  Am = 1;
  var l = S1(), i = Ks(), o = A1();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (d(t) !== t)
      throw Error(c(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var u = r.alternate;
      if (u === null) {
        if (a = r.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (r.child === u.child) {
        for (u = r.child; u; ) {
          if (u === n) return v(r), t;
          if (u === a) return v(r), e;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = r, a = u;
      else {
        for (var f = !1, m = r.child; m; ) {
          if (m === n) {
            f = !0, n = r, a = u;
            break;
          }
          if (m === a) {
            f = !0, a = r, n = u;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = u.child; m; ) {
            if (m === n) {
              f = !0, n = u, a = r;
              break;
            }
            if (m === a) {
              f = !0, a = u, n = r;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? t : e;
  }
  function x(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = x(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign, z = Symbol.for("react.element"), B = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), K = Symbol.for("react.consumer"), V = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), it = Symbol.for("react.memo_cache_sentinel"), nt = Symbol.iterator;
  function g(t) {
    return t === null || typeof t != "object" ? null : (t = nt && t[nt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var P = Symbol.for("react.client.reference");
  function F(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === P ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case T:
        return "Fragment";
      case $:
        return "Profiler";
      case L:
        return "StrictMode";
      case H:
        return "Suspense";
      case q:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case M:
          return "Portal";
        case V:
          return t.displayName || "Context";
        case K:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Y:
          return e = t.displayName || null, e !== null ? e : F(t.type) || "Memo";
        case I:
          e = t._payload, t = t._init;
          try {
            return F(t(e));
          } catch {
          }
      }
    return null;
  }
  var ot = Array.isArray, R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, at = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, St = [], At = -1;
  function S(t) {
    return { current: t };
  }
  function j(t) {
    0 > At || (t.current = St[At], St[At] = null, At--);
  }
  function J(t, e) {
    At++, St[At] = t.current, t.current = e;
  }
  var tt = S(null), st = S(null), mt = S(null), pt = S(null);
  function le(t, e) {
    switch (J(mt, e), J(st, t), J(tt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? ky(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = ky(e), t = Gy(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    j(tt), J(tt, t);
  }
  function Gt() {
    j(tt), j(st), j(mt);
  }
  function fl(t) {
    t.memoizedState !== null && J(pt, t);
    var e = tt.current, n = Gy(e, t.type);
    e !== n && (J(st, t), J(tt, n));
  }
  function Yl(t) {
    st.current === t && (j(tt), j(st)), pt.current === t && (j(pt), Lr._currentValue = at);
  }
  var Xl, Ka;
  function ln(t) {
    if (Xl === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Xl = e && e[1] || "", Ka = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xl + t + Ka;
  }
  var Vl = !1;
  function Ja(t, e) {
    if (!t || Vl) return "";
    Vl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(t, [], G);
              } else {
                try {
                  G.call();
                } catch (U) {
                  D = U;
                }
                t.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (G = t()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (U) {
            if (U && D && typeof U.stack == "string")
              return [U.stack, D.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), f = u[0], m = u[1];
      if (f && m) {
        var b = f.split(`
`), _ = m.split(`
`);
        for (r = a = 0; a < b.length && !b[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; r < _.length && !_[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (a === b.length || r === _.length)
          for (a = b.length - 1, r = _.length - 1; 1 <= a && 0 <= r && b[a] !== _[r]; )
            r--;
        for (; 1 <= a && 0 <= r; a--, r--)
          if (b[a] !== _[r]) {
            if (a !== 1 || r !== 1)
              do
                if (a--, r--, 0 > r || b[a] !== _[r]) {
                  var w = `
` + b[a].replace(" at new ", " at ");
                  return t.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", t.displayName)), w;
                }
              while (1 <= a && 0 <= r);
            break;
          }
      }
    } finally {
      Vl = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? ln(n) : "";
  }
  function ri(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ln(t.type);
      case 16:
        return ln("Lazy");
      case 13:
        return t.child !== e && e !== null ? ln("Suspense Fallback") : ln("Suspense");
      case 19:
        return ln("SuspenseList");
      case 0:
      case 15:
        return Ja(t.type, !1);
      case 11:
        return Ja(t.type.render, !1);
      case 1:
        return Ja(t.type, !0);
      case 31:
        return ln("Activity");
      default:
        return "";
    }
  }
  function Ql(t) {
    try {
      var e = "", n = null;
      do
        e += ri(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var he = Object.prototype.hasOwnProperty, jn = l.unstable_scheduleCallback, dl = l.unstable_cancelCallback, yl = l.unstable_shouldYield, lo = l.unstable_requestPaint, ye = l.unstable_now, ii = l.unstable_getCurrentPriorityLevel, ge = l.unstable_ImmediatePriority, qt = l.unstable_UserBlockingPriority, ie = l.unstable_NormalPriority, Ge = l.unstable_LowPriority, Zl = l.unstable_IdlePriority, ao = l.log, Pp = l.unstable_setDisableYieldValue, Fa = null, _e = null;
  function Hn(t) {
    if (typeof ao == "function" && Pp(t), _e && typeof _e.setStrictMode == "function")
      try {
        _e.setStrictMode(Fa, t);
      } catch {
      }
  }
  var ze = Math.clz32 ? Math.clz32 : nh, th = Math.log, eh = Math.LN2;
  function nh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (th(t) / eh | 0) | 0;
  }
  var ui = 256, oi = 262144, ci = 4194304;
  function ml(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function si(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var r = 0, u = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~u, a !== 0 ? r = ml(a) : (f &= m, f !== 0 ? r = ml(f) : n || (n = m & ~t, n !== 0 && (r = ml(n))))) : (m = a & ~u, m !== 0 ? r = ml(m) : f !== 0 ? r = ml(f) : n || (n = a & ~t, n !== 0 && (r = ml(n)))), r === 0 ? 0 : e !== 0 && e !== r && (e & u) === 0 && (u = r & -r, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : r;
  }
  function Wa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function lh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sf() {
    var t = ci;
    return ci <<= 1, (ci & 62914560) === 0 && (ci = 4194304), t;
  }
  function ro(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ia(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function ah(t, e, n, a, r, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, b = t.expirationTimes, _ = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var w = 31 - ze(n), G = 1 << w;
      m[w] = 0, b[w] = -1;
      var D = _[w];
      if (D !== null)
        for (_[w] = null, w = 0; w < D.length; w++) {
          var U = D[w];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~G;
    }
    a !== 0 && Cf(t, a, 0), u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function Cf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ze(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Af(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - ze(n), r = 1 << a;
      r & e | t[a] & e && (t[a] |= e), n &= ~r;
    }
  }
  function xf(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : io(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function io(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function uo(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Tf() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : cm(t.type));
  }
  function Ef(t, e) {
    var n = X.p;
    try {
      return X.p = t, e();
    } finally {
      X.p = n;
    }
  }
  var Ln = Math.random().toString(36).slice(2), ue = "__reactFiber$" + Ln, Se = "__reactProps$" + Ln, Kl = "__reactContainer$" + Ln, oo = "__reactEvents$" + Ln, rh = "__reactListeners$" + Ln, ih = "__reactHandles$" + Ln, Mf = "__reactResources$" + Ln, Pa = "__reactMarker$" + Ln;
  function co(t) {
    delete t[ue], delete t[Se], delete t[oo], delete t[rh], delete t[ih];
  }
  function Jl(t) {
    var e = t[ue];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Kl] || n[ue]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Zy(t); t !== null; ) {
            if (n = t[ue]) return n;
            t = Zy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Fl(t) {
    if (t = t[ue] || t[Kl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function tr(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Wl(t) {
    var e = t[Mf];
    return e || (e = t[Mf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ae(t) {
    t[Pa] = !0;
  }
  var Of = /* @__PURE__ */ new Set(), _f = {};
  function pl(t, e) {
    Il(t, e), Il(t + "Capture", e);
  }
  function Il(t, e) {
    for (_f[t] = e, t = 0; t < e.length; t++)
      Of.add(e[t]);
  }
  var uh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), zf = {}, Df = {};
  function oh(t) {
    return he.call(Df, t) ? !0 : he.call(zf, t) ? !1 : uh.test(t) ? Df[t] = !0 : (zf[t] = !0, !1);
  }
  function fi(t, e, n) {
    if (oh(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function di(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function hn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function qe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Rf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function ch(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var r = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(f) {
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function so(t) {
    if (!t._valueTracker) {
      var e = Rf(t) ? "checked" : "value";
      t._valueTracker = ch(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Bf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = Rf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  function yi(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var sh = /[\n"\\]/g;
  function $e(t) {
    return t.replace(
      sh,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function fo(t, e, n, a, r, u, f, m) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + qe(e)) : t.value !== "" + qe(e) && (t.value = "" + qe(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? yo(t, f, qe(e)) : n != null ? yo(t, f, qe(n)) : a != null && t.removeAttribute("value"), r == null && u != null && (t.defaultChecked = !!u), r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + qe(m) : t.removeAttribute("name");
  }
  function Uf(t, e, n, a, r, u, f, m) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        so(t);
        return;
      }
      n = n != null ? "" + qe(n) : "", e = e != null ? "" + qe(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? r, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = m ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), so(t);
  }
  function yo(t, e, n) {
    e === "number" && yi(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Pl(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var r = 0; r < n.length; r++)
        e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + qe(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          t[r].selected = !0, a && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function wf(t, e, n) {
    if (e != null && (e = "" + qe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + qe(n) : "";
  }
  function Nf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (ot(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = qe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), so(t);
  }
  function ta(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var fh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || fh.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Hf(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var r in e)
        a = e[r], e.hasOwnProperty(r) && n[r] !== a && jf(t, r, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && jf(t, u, e[u]);
  }
  function mo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var dh = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), yh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mi(t) {
    return yh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function gn() {
  }
  var po = null;
  function ho(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ea = null, na = null;
  function Lf(t) {
    var e = Fl(t);
    if (e && (t = e.stateNode)) {
      var n = t[Se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (fo(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + $e(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var r = a[Se] || null;
                if (!r) throw Error(c(90));
                fo(
                  a,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && Bf(a);
          }
          break t;
        case "textarea":
          wf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Pl(t, !!n.multiple, e, !1);
      }
    }
  }
  var go = !1;
  function kf(t, e, n) {
    if (go) return t(e, n);
    go = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (go = !1, (ea !== null || na !== null) && (eu(), ea && (e = ea, t = na, na = ea = null, Lf(e), t)))
        for (e = 0; e < t.length; e++) Lf(t[e]);
    }
  }
  function er(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Se] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, e, typeof n)
      );
    return n;
  }
  var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vo = !1;
  if (vn)
    try {
      var nr = {};
      Object.defineProperty(nr, "passive", {
        get: function() {
          vo = !0;
        }
      }), window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
    } catch {
      vo = !1;
    }
  var kn = null, bo = null, pi = null;
  function Gf() {
    if (pi) return pi;
    var t, e = bo, n = e.length, a, r = "value" in kn ? kn.value : kn.textContent, u = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === r[u - a]; a++) ;
    return pi = r.slice(t, 1 < a ? 1 - a : void 0);
  }
  function hi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function gi() {
    return !0;
  }
  function qf() {
    return !1;
  }
  function Ce(t) {
    function e(n, a, r, u, f) {
      this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(u) : u[m]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? gi : qf, this.isPropagationStopped = qf, this;
    }
    return A(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gi);
      },
      persist: function() {
      },
      isPersistent: gi
    }), e;
  }
  var hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, vi = Ce(hl), lr = A({}, hl, { view: 0, detail: 0 }), mh = Ce(lr), So, Co, ar, bi = A({}, lr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ar && (ar && t.type === "mousemove" ? (So = t.screenX - ar.screenX, Co = t.screenY - ar.screenY) : Co = So = 0, ar = t), So);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Co;
    }
  }), $f = Ce(bi), ph = A({}, bi, { dataTransfer: 0 }), hh = Ce(ph), gh = A({}, lr, { relatedTarget: 0 }), Ao = Ce(gh), vh = A({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bh = Ce(vh), Sh = A({}, hl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Ch = Ce(Sh), Ah = A({}, hl, { data: 0 }), Yf = Ce(Ah), xh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Th = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Eh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Mh(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Eh[t]) ? !!e[t] : !1;
  }
  function xo() {
    return Mh;
  }
  var Oh = A({}, lr, {
    key: function(t) {
      if (t.key) {
        var e = xh[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = hi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Th[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xo,
    charCode: function(t) {
      return t.type === "keypress" ? hi(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? hi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), _h = Ce(Oh), zh = A({}, bi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Xf = Ce(zh), Dh = A({}, lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xo
  }), Rh = Ce(Dh), Bh = A({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uh = Ce(Bh), wh = A({}, bi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nh = Ce(wh), jh = A({}, hl, {
    newState: 0,
    oldState: 0
  }), Hh = Ce(jh), Lh = [9, 13, 27, 32], To = vn && "CompositionEvent" in window, rr = null;
  vn && "documentMode" in document && (rr = document.documentMode);
  var kh = vn && "TextEvent" in window && !rr, Vf = vn && (!To || rr && 8 < rr && 11 >= rr), Qf = " ", Zf = !1;
  function Kf(t, e) {
    switch (t) {
      case "keyup":
        return Lh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var la = !1;
  function Gh(t, e) {
    switch (t) {
      case "compositionend":
        return Jf(e);
      case "keypress":
        return e.which !== 32 ? null : (Zf = !0, Qf);
      case "textInput":
        return t = e.data, t === Qf && Zf ? null : t;
      default:
        return null;
    }
  }
  function qh(t, e) {
    if (la)
      return t === "compositionend" || !To && Kf(t, e) ? (t = Gf(), pi = bo = kn = null, la = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Vf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var $h = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ff(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$h[t.type] : e === "textarea";
  }
  function Wf(t, e, n, a) {
    ea ? na ? na.push(a) : na = [a] : ea = a, e = ou(e, "onChange"), 0 < e.length && (n = new vi(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var ir = null, ur = null;
  function Yh(t) {
    Uy(t, 0);
  }
  function Si(t) {
    var e = tr(t);
    if (Bf(e)) return t;
  }
  function If(t, e) {
    if (t === "change") return e;
  }
  var Pf = !1;
  if (vn) {
    var Eo;
    if (vn) {
      var Mo = "oninput" in document;
      if (!Mo) {
        var td = document.createElement("div");
        td.setAttribute("oninput", "return;"), Mo = typeof td.oninput == "function";
      }
      Eo = Mo;
    } else Eo = !1;
    Pf = Eo && (!document.documentMode || 9 < document.documentMode);
  }
  function ed() {
    ir && (ir.detachEvent("onpropertychange", nd), ur = ir = null);
  }
  function nd(t) {
    if (t.propertyName === "value" && Si(ur)) {
      var e = [];
      Wf(
        e,
        ur,
        t,
        ho(t)
      ), kf(Yh, e);
    }
  }
  function Xh(t, e, n) {
    t === "focusin" ? (ed(), ir = e, ur = n, ir.attachEvent("onpropertychange", nd)) : t === "focusout" && ed();
  }
  function Vh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Si(ur);
  }
  function Qh(t, e) {
    if (t === "click") return Si(e);
  }
  function Zh(t, e) {
    if (t === "input" || t === "change")
      return Si(e);
  }
  function Kh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var De = typeof Object.is == "function" ? Object.is : Kh;
  function or(t, e) {
    if (De(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var r = n[a];
      if (!he.call(e, r) || !De(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  function ld(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ad(t, e) {
    var n = ld(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ld(n);
    }
  }
  function rd(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? rd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function id(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = yi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = yi(t.document);
    }
    return e;
  }
  function Oo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Jh = vn && "documentMode" in document && 11 >= document.documentMode, aa = null, _o = null, cr = null, zo = !1;
  function ud(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zo || aa == null || aa !== yi(a) || (a = aa, "selectionStart" in a && Oo(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), cr && or(cr, a) || (cr = a, a = ou(_o, "onSelect"), 0 < a.length && (e = new vi(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = aa)));
  }
  function gl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ra = {
    animationend: gl("Animation", "AnimationEnd"),
    animationiteration: gl("Animation", "AnimationIteration"),
    animationstart: gl("Animation", "AnimationStart"),
    transitionrun: gl("Transition", "TransitionRun"),
    transitionstart: gl("Transition", "TransitionStart"),
    transitioncancel: gl("Transition", "TransitionCancel"),
    transitionend: gl("Transition", "TransitionEnd")
  }, Do = {}, od = {};
  vn && (od = document.createElement("div").style, "AnimationEvent" in window || (delete ra.animationend.animation, delete ra.animationiteration.animation, delete ra.animationstart.animation), "TransitionEvent" in window || delete ra.transitionend.transition);
  function vl(t) {
    if (Do[t]) return Do[t];
    if (!ra[t]) return t;
    var e = ra[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in od)
        return Do[t] = e[n];
    return t;
  }
  var cd = vl("animationend"), sd = vl("animationiteration"), fd = vl("animationstart"), Fh = vl("transitionrun"), Wh = vl("transitionstart"), Ih = vl("transitioncancel"), dd = vl("transitionend"), yd = /* @__PURE__ */ new Map(), Ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ro.push("scrollEnd");
  function Pe(t, e) {
    yd.set(t, e), pl(e, [t]);
  }
  var Ci = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ye = [], ia = 0, Bo = 0;
  function Ai() {
    for (var t = ia, e = Bo = ia = 0; e < t; ) {
      var n = Ye[e];
      Ye[e++] = null;
      var a = Ye[e];
      Ye[e++] = null;
      var r = Ye[e];
      Ye[e++] = null;
      var u = Ye[e];
      if (Ye[e++] = null, a !== null && r !== null) {
        var f = a.pending;
        f === null ? r.next = r : (r.next = f.next, f.next = r), a.pending = r;
      }
      u !== 0 && md(n, r, u);
    }
  }
  function xi(t, e, n, a) {
    Ye[ia++] = t, Ye[ia++] = e, Ye[ia++] = n, Ye[ia++] = a, Bo |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Uo(t, e, n, a) {
    return xi(t, e, n, a), Ti(t);
  }
  function bl(t, e) {
    return xi(t, null, null, e), Ti(t);
  }
  function md(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var r = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (r = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, r && e !== null && (r = 31 - ze(n), t = u.hiddenUpdates, a = t[r], a === null ? t[r] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function Ti(t) {
    if (50 < Rr)
      throw Rr = 0, $c = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ua = {};
  function Ph(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Re(t, e, n, a) {
    return new Ph(t, e, n, a);
  }
  function wo(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function bn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Re(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function pd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ei(t, e, n, a, r, u) {
    var f = 0;
    if (a = t, typeof t == "function") wo(t) && (f = 1);
    else if (typeof t == "string")
      f = a1(
        t,
        n,
        tt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case W:
          return t = Re(31, n, e, r), t.elementType = W, t.lanes = u, t;
        case T:
          return Sl(n.children, r, u, e);
        case L:
          f = 8, r |= 24;
          break;
        case $:
          return t = Re(12, n, e, r | 2), t.elementType = $, t.lanes = u, t;
        case H:
          return t = Re(13, n, e, r), t.elementType = H, t.lanes = u, t;
        case q:
          return t = Re(19, n, e, r), t.elementType = q, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case V:
                f = 10;
                break t;
              case K:
                f = 9;
                break t;
              case Z:
                f = 11;
                break t;
              case Y:
                f = 14;
                break t;
              case I:
                f = 16, a = null;
                break t;
            }
          f = 29, n = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Re(f, n, e, r), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Sl(t, e, n, a) {
    return t = Re(7, t, a, e), t.lanes = n, t;
  }
  function No(t, e, n) {
    return t = Re(6, t, null, e), t.lanes = n, t;
  }
  function hd(t) {
    var e = Re(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function jo(t, e, n) {
    return e = Re(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var gd = /* @__PURE__ */ new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = gd.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Ql(e)
      }, gd.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Ql(e)
    };
  }
  var oa = [], ca = 0, Mi = null, sr = 0, Ve = [], Qe = 0, Gn = null, an = 1, rn = "";
  function Sn(t, e) {
    oa[ca++] = sr, oa[ca++] = Mi, Mi = t, sr = e;
  }
  function vd(t, e, n) {
    Ve[Qe++] = an, Ve[Qe++] = rn, Ve[Qe++] = Gn, Gn = t;
    var a = an;
    t = rn;
    var r = 32 - ze(a) - 1;
    a &= ~(1 << r), n += 1;
    var u = 32 - ze(e) + r;
    if (30 < u) {
      var f = r - r % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, r -= f, an = 1 << 32 - ze(e) + r | n << r | a, rn = u + t;
    } else
      an = 1 << u | n << r | a, rn = t;
  }
  function Ho(t) {
    t.return !== null && (Sn(t, 1), vd(t, 1, 0));
  }
  function Lo(t) {
    for (; t === Mi; )
      Mi = oa[--ca], oa[ca] = null, sr = oa[--ca], oa[ca] = null;
    for (; t === Gn; )
      Gn = Ve[--Qe], Ve[Qe] = null, rn = Ve[--Qe], Ve[Qe] = null, an = Ve[--Qe], Ve[Qe] = null;
  }
  function bd(t, e) {
    Ve[Qe++] = an, Ve[Qe++] = rn, Ve[Qe++] = Gn, an = e.id, rn = e.overflow, Gn = t;
  }
  var oe = null, Lt = null, Ct = !1, qn = null, Ze = !1, ko = Error(c(519));
  function $n(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw fr(Xe(e, t)), ko;
  }
  function Sd(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[ue] = t, e[Se] = a, n) {
      case "dialog":
        gt("cancel", e), gt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        gt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ur.length; n++)
          gt(Ur[n], e);
        break;
      case "source":
        gt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        gt("error", e), gt("load", e);
        break;
      case "details":
        gt("toggle", e);
        break;
      case "input":
        gt("invalid", e), Uf(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        gt("invalid", e);
        break;
      case "textarea":
        gt("invalid", e), Nf(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Hy(e.textContent, n) ? (a.popover != null && (gt("beforetoggle", e), gt("toggle", e)), a.onScroll != null && gt("scroll", e), a.onScrollEnd != null && gt("scrollend", e), a.onClick != null && (e.onclick = gn), e = !0) : e = !1, e || $n(t, !0);
  }
  function Cd(t) {
    for (oe = t.return; oe; )
      switch (oe.tag) {
        case 5:
        case 31:
        case 13:
          Ze = !1;
          return;
        case 27:
        case 3:
          Ze = !0;
          return;
        default:
          oe = oe.return;
      }
  }
  function sa(t) {
    if (t !== oe) return !1;
    if (!Ct) return Cd(t), Ct = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || ls(t.type, t.memoizedProps)), n = !n), n && Lt && $n(t), Cd(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Lt = Qy(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Lt = Qy(t);
    } else
      e === 27 ? (e = Lt, nl(t.type) ? (t = os, os = null, Lt = t) : Lt = e) : Lt = oe ? Je(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Cl() {
    Lt = oe = null, Ct = !1;
  }
  function Go() {
    var t = qn;
    return t !== null && (Ee === null ? Ee = t : Ee.push.apply(
      Ee,
      t
    ), qn = null), t;
  }
  function fr(t) {
    qn === null ? qn = [t] : qn.push(t);
  }
  var qo = S(null), Al = null, Cn = null;
  function Yn(t, e, n) {
    J(qo, e._currentValue), e._currentValue = n;
  }
  function An(t) {
    t._currentValue = qo.current, j(qo);
  }
  function $o(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Yo(t, e, n, a) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var u = r.dependencies;
      if (u !== null) {
        var f = r.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var m = u;
          u = r;
          for (var b = 0; b < e.length; b++)
            if (m.context === e[b]) {
              u.lanes |= n, m = u.alternate, m !== null && (m.lanes |= n), $o(
                u.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          u = m.next;
        }
      } else if (r.tag === 18) {
        if (f = r.return, f === null) throw Error(c(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), $o(f, n, t), f = null;
      } else f = r.child;
      if (f !== null) f.return = r;
      else
        for (f = r; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (r = f.sibling, r !== null) {
            r.return = f.return, f = r;
            break;
          }
          f = f.return;
        }
      r = f;
    }
  }
  function fa(t, e, n, a) {
    t = null;
    for (var r = e, u = !1; r !== null; ) {
      if (!u) {
        if ((r.flags & 524288) !== 0) u = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var f = r.alternate;
        if (f === null) throw Error(c(387));
        if (f = f.memoizedProps, f !== null) {
          var m = r.type;
          De(r.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (r === pt.current) {
        if (f = r.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(Lr) : t = [Lr]);
      }
      r = r.return;
    }
    t !== null && Yo(
      e,
      t,
      n,
      a
    ), e.flags |= 262144;
  }
  function Oi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!De(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function xl(t) {
    Al = t, Cn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ce(t) {
    return Ad(Al, t);
  }
  function _i(t, e) {
    return Al === null && xl(t), Ad(t, e);
  }
  function Ad(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Cn === null) {
      if (t === null) throw Error(c(308));
      Cn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Cn = Cn.next = e;
    return n;
  }
  var tg = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, eg = l.unstable_scheduleCallback, ng = l.unstable_NormalPriority, Wt = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Xo() {
    return {
      controller: new tg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function dr(t) {
    t.refCount--, t.refCount === 0 && eg(ng, function() {
      t.controller.abort();
    });
  }
  var yr = null, Vo = 0, da = 0, ya = null;
  function lg(t, e) {
    if (yr === null) {
      var n = yr = [];
      Vo = 0, da = Kc(), ya = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Vo++, e.then(xd, xd), e;
  }
  function xd() {
    if (--Vo === 0 && yr !== null) {
      ya !== null && (ya.status = "fulfilled");
      var t = yr;
      yr = null, da = 0, ya = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function ag(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        n.push(r);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var r = 0; r < n.length; r++) (0, n[r])(e);
      },
      function(r) {
        for (a.status = "rejected", a.reason = r, r = 0; r < n.length; r++)
          (0, n[r])(void 0);
      }
    ), a;
  }
  var Td = R.S;
  R.S = function(t, e) {
    uy = ye(), typeof e == "object" && e !== null && typeof e.then == "function" && lg(t, e), Td !== null && Td(t, e);
  };
  var Tl = S(null);
  function Qo() {
    var t = Tl.current;
    return t !== null ? t : Ht.pooledCache;
  }
  function zi(t, e) {
    e === null ? J(Tl, Tl.current) : J(Tl, e.pool);
  }
  function Ed() {
    var t = Qo();
    return t === null ? null : { parent: Wt._currentValue, pool: t };
  }
  var ma = Error(c(460)), Zo = Error(c(474)), Di = Error(c(542)), Ri = { then: function() {
  } };
  function Md(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Od(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(gn, gn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, zd(t), t;
      default:
        if (typeof e.status == "string") e.then(gn, gn);
        else {
          if (t = Ht, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var r = e;
                r.status = "fulfilled", r.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var r = e;
                r.status = "rejected", r.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, zd(t), t;
        }
        throw Ml = e, ma;
    }
  }
  function El(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ml = n, ma) : n;
    }
  }
  var Ml = null;
  function _d() {
    if (Ml === null) throw Error(c(459));
    var t = Ml;
    return Ml = null, t;
  }
  function zd(t) {
    if (t === ma || t === Di)
      throw Error(c(483));
  }
  var pa = null, mr = 0;
  function Bi(t) {
    var e = mr;
    return mr += 1, pa === null && (pa = []), Od(pa, t, e);
  }
  function pr(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ui(t, e) {
    throw e.$$typeof === z ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Dd(t) {
    function e(E, C) {
      if (t) {
        var O = E.deletions;
        O === null ? (E.deletions = [C], E.flags |= 16) : O.push(C);
      }
    }
    function n(E, C) {
      if (!t) return null;
      for (; C !== null; )
        e(E, C), C = C.sibling;
      return null;
    }
    function a(E) {
      for (var C = /* @__PURE__ */ new Map(); E !== null; )
        E.key !== null ? C.set(E.key, E) : C.set(E.index, E), E = E.sibling;
      return C;
    }
    function r(E, C) {
      return E = bn(E, C), E.index = 0, E.sibling = null, E;
    }
    function u(E, C, O) {
      return E.index = O, t ? (O = E.alternate, O !== null ? (O = O.index, O < C ? (E.flags |= 67108866, C) : O) : (E.flags |= 67108866, C)) : (E.flags |= 1048576, C);
    }
    function f(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function m(E, C, O, k) {
      return C === null || C.tag !== 6 ? (C = No(O, E.mode, k), C.return = E, C) : (C = r(C, O), C.return = E, C);
    }
    function b(E, C, O, k) {
      var ut = O.type;
      return ut === T ? w(
        E,
        C,
        O.props.children,
        k,
        O.key
      ) : C !== null && (C.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === I && El(ut) === C.type) ? (C = r(C, O.props), pr(C, O), C.return = E, C) : (C = Ei(
        O.type,
        O.key,
        O.props,
        null,
        E.mode,
        k
      ), pr(C, O), C.return = E, C);
    }
    function _(E, C, O, k) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== O.containerInfo || C.stateNode.implementation !== O.implementation ? (C = jo(O, E.mode, k), C.return = E, C) : (C = r(C, O.children || []), C.return = E, C);
    }
    function w(E, C, O, k, ut) {
      return C === null || C.tag !== 7 ? (C = Sl(
        O,
        E.mode,
        k,
        ut
      ), C.return = E, C) : (C = r(C, O), C.return = E, C);
    }
    function G(E, C, O) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return C = No(
          "" + C,
          E.mode,
          O
        ), C.return = E, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case B:
            return O = Ei(
              C.type,
              C.key,
              C.props,
              null,
              E.mode,
              O
            ), pr(O, C), O.return = E, O;
          case M:
            return C = jo(
              C,
              E.mode,
              O
            ), C.return = E, C;
          case I:
            return C = El(C), G(E, C, O);
        }
        if (ot(C) || g(C))
          return C = Sl(
            C,
            E.mode,
            O,
            null
          ), C.return = E, C;
        if (typeof C.then == "function")
          return G(E, Bi(C), O);
        if (C.$$typeof === V)
          return G(
            E,
            _i(E, C),
            O
          );
        Ui(E, C);
      }
      return null;
    }
    function D(E, C, O, k) {
      var ut = C !== null ? C.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return ut !== null ? null : m(E, C, "" + O, k);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case B:
            return O.key === ut ? b(E, C, O, k) : null;
          case M:
            return O.key === ut ? _(E, C, O, k) : null;
          case I:
            return O = El(O), D(E, C, O, k);
        }
        if (ot(O) || g(O))
          return ut !== null ? null : w(E, C, O, k, null);
        if (typeof O.then == "function")
          return D(
            E,
            C,
            Bi(O),
            k
          );
        if (O.$$typeof === V)
          return D(
            E,
            C,
            _i(E, O),
            k
          );
        Ui(E, O);
      }
      return null;
    }
    function U(E, C, O, k, ut) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return E = E.get(O) || null, m(C, E, "" + k, ut);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case B:
            return E = E.get(
              k.key === null ? O : k.key
            ) || null, b(C, E, k, ut);
          case M:
            return E = E.get(
              k.key === null ? O : k.key
            ) || null, _(C, E, k, ut);
          case I:
            return k = El(k), U(
              E,
              C,
              O,
              k,
              ut
            );
        }
        if (ot(k) || g(k))
          return E = E.get(O) || null, w(C, E, k, ut, null);
        if (typeof k.then == "function")
          return U(
            E,
            C,
            O,
            Bi(k),
            ut
          );
        if (k.$$typeof === V)
          return U(
            E,
            C,
            O,
            _i(C, k),
            ut
          );
        Ui(C, k);
      }
      return null;
    }
    function et(E, C, O, k) {
      for (var ut = null, xt = null, rt = C, yt = C = 0, bt = null; rt !== null && yt < O.length; yt++) {
        rt.index > yt ? (bt = rt, rt = null) : bt = rt.sibling;
        var Tt = D(
          E,
          rt,
          O[yt],
          k
        );
        if (Tt === null) {
          rt === null && (rt = bt);
          break;
        }
        t && rt && Tt.alternate === null && e(E, rt), C = u(Tt, C, yt), xt === null ? ut = Tt : xt.sibling = Tt, xt = Tt, rt = bt;
      }
      if (yt === O.length)
        return n(E, rt), Ct && Sn(E, yt), ut;
      if (rt === null) {
        for (; yt < O.length; yt++)
          rt = G(E, O[yt], k), rt !== null && (C = u(
            rt,
            C,
            yt
          ), xt === null ? ut = rt : xt.sibling = rt, xt = rt);
        return Ct && Sn(E, yt), ut;
      }
      for (rt = a(rt); yt < O.length; yt++)
        bt = U(
          rt,
          E,
          yt,
          O[yt],
          k
        ), bt !== null && (t && bt.alternate !== null && rt.delete(
          bt.key === null ? yt : bt.key
        ), C = u(
          bt,
          C,
          yt
        ), xt === null ? ut = bt : xt.sibling = bt, xt = bt);
      return t && rt.forEach(function(ul) {
        return e(E, ul);
      }), Ct && Sn(E, yt), ut;
    }
    function ct(E, C, O, k) {
      if (O == null) throw Error(c(151));
      for (var ut = null, xt = null, rt = C, yt = C = 0, bt = null, Tt = O.next(); rt !== null && !Tt.done; yt++, Tt = O.next()) {
        rt.index > yt ? (bt = rt, rt = null) : bt = rt.sibling;
        var ul = D(E, rt, Tt.value, k);
        if (ul === null) {
          rt === null && (rt = bt);
          break;
        }
        t && rt && ul.alternate === null && e(E, rt), C = u(ul, C, yt), xt === null ? ut = ul : xt.sibling = ul, xt = ul, rt = bt;
      }
      if (Tt.done)
        return n(E, rt), Ct && Sn(E, yt), ut;
      if (rt === null) {
        for (; !Tt.done; yt++, Tt = O.next())
          Tt = G(E, Tt.value, k), Tt !== null && (C = u(Tt, C, yt), xt === null ? ut = Tt : xt.sibling = Tt, xt = Tt);
        return Ct && Sn(E, yt), ut;
      }
      for (rt = a(rt); !Tt.done; yt++, Tt = O.next())
        Tt = U(rt, E, yt, Tt.value, k), Tt !== null && (t && Tt.alternate !== null && rt.delete(Tt.key === null ? yt : Tt.key), C = u(Tt, C, yt), xt === null ? ut = Tt : xt.sibling = Tt, xt = Tt);
      return t && rt.forEach(function(p1) {
        return e(E, p1);
      }), Ct && Sn(E, yt), ut;
    }
    function Nt(E, C, O, k) {
      if (typeof O == "object" && O !== null && O.type === T && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case B:
            t: {
              for (var ut = O.key; C !== null; ) {
                if (C.key === ut) {
                  if (ut = O.type, ut === T) {
                    if (C.tag === 7) {
                      n(
                        E,
                        C.sibling
                      ), k = r(
                        C,
                        O.props.children
                      ), k.return = E, E = k;
                      break t;
                    }
                  } else if (C.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === I && El(ut) === C.type) {
                    n(
                      E,
                      C.sibling
                    ), k = r(C, O.props), pr(k, O), k.return = E, E = k;
                    break t;
                  }
                  n(E, C);
                  break;
                } else e(E, C);
                C = C.sibling;
              }
              O.type === T ? (k = Sl(
                O.props.children,
                E.mode,
                k,
                O.key
              ), k.return = E, E = k) : (k = Ei(
                O.type,
                O.key,
                O.props,
                null,
                E.mode,
                k
              ), pr(k, O), k.return = E, E = k);
            }
            return f(E);
          case M:
            t: {
              for (ut = O.key; C !== null; ) {
                if (C.key === ut)
                  if (C.tag === 4 && C.stateNode.containerInfo === O.containerInfo && C.stateNode.implementation === O.implementation) {
                    n(
                      E,
                      C.sibling
                    ), k = r(C, O.children || []), k.return = E, E = k;
                    break t;
                  } else {
                    n(E, C);
                    break;
                  }
                else e(E, C);
                C = C.sibling;
              }
              k = jo(O, E.mode, k), k.return = E, E = k;
            }
            return f(E);
          case I:
            return O = El(O), Nt(
              E,
              C,
              O,
              k
            );
        }
        if (ot(O))
          return et(
            E,
            C,
            O,
            k
          );
        if (g(O)) {
          if (ut = g(O), typeof ut != "function") throw Error(c(150));
          return O = ut.call(O), ct(
            E,
            C,
            O,
            k
          );
        }
        if (typeof O.then == "function")
          return Nt(
            E,
            C,
            Bi(O),
            k
          );
        if (O.$$typeof === V)
          return Nt(
            E,
            C,
            _i(E, O),
            k
          );
        Ui(E, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, C !== null && C.tag === 6 ? (n(E, C.sibling), k = r(C, O), k.return = E, E = k) : (n(E, C), k = No(O, E.mode, k), k.return = E, E = k), f(E)) : n(E, C);
    }
    return function(E, C, O, k) {
      try {
        mr = 0;
        var ut = Nt(
          E,
          C,
          O,
          k
        );
        return pa = null, ut;
      } catch (rt) {
        if (rt === ma || rt === Di) throw rt;
        var xt = Re(29, rt, null, E.mode);
        return xt.lanes = k, xt.return = E, xt;
      } finally {
      }
    };
  }
  var Ol = Dd(!0), Rd = Dd(!1), Xn = !1;
  function Ko(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Jo(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Vn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Et & 2) !== 0) {
      var r = a.pending;
      return r === null ? e.next = e : (e.next = r.next, r.next = e), a.pending = e, e = Ti(t), md(t, null, n), e;
    }
    return xi(t, a, e, n), Ti(t);
  }
  function hr(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Af(t, n);
    }
  }
  function Fo(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var r = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? r = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? r = u = e : u = u.next = e;
      } else r = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Wo = !1;
  function gr() {
    if (Wo) {
      var t = ya;
      if (t !== null) throw t;
    }
  }
  function vr(t, e, n, a) {
    Wo = !1;
    var r = t.updateQueue;
    Xn = !1;
    var u = r.firstBaseUpdate, f = r.lastBaseUpdate, m = r.shared.pending;
    if (m !== null) {
      r.shared.pending = null;
      var b = m, _ = b.next;
      b.next = null, f === null ? u = _ : f.next = _, f = b;
      var w = t.alternate;
      w !== null && (w = w.updateQueue, m = w.lastBaseUpdate, m !== f && (m === null ? w.firstBaseUpdate = _ : m.next = _, w.lastBaseUpdate = b));
    }
    if (u !== null) {
      var G = r.baseState;
      f = 0, w = _ = b = null, m = u;
      do {
        var D = m.lane & -536870913, U = D !== m.lane;
        if (U ? (vt & D) === D : (a & D) === D) {
          D !== 0 && D === da && (Wo = !0), w !== null && (w = w.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var et = t, ct = m;
            D = e;
            var Nt = n;
            switch (ct.tag) {
              case 1:
                if (et = ct.payload, typeof et == "function") {
                  G = et.call(Nt, G, D);
                  break t;
                }
                G = et;
                break t;
              case 3:
                et.flags = et.flags & -65537 | 128;
              case 0:
                if (et = ct.payload, D = typeof et == "function" ? et.call(Nt, G, D) : et, D == null) break t;
                G = A({}, G, D);
                break t;
              case 2:
                Xn = !0;
            }
          }
          D = m.callback, D !== null && (t.flags |= 64, U && (t.flags |= 8192), U = r.callbacks, U === null ? r.callbacks = [D] : U.push(D));
        } else
          U = {
            lane: D,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, w === null ? (_ = w = U, b = G) : w = w.next = U, f |= D;
        if (m = m.next, m === null) {
          if (m = r.shared.pending, m === null)
            break;
          U = m, m = U.next, U.next = null, r.lastBaseUpdate = U, r.shared.pending = null;
        }
      } while (!0);
      w === null && (b = G), r.baseState = b, r.firstBaseUpdate = _, r.lastBaseUpdate = w, u === null && (r.shared.lanes = 0), Wn |= f, t.lanes = f, t.memoizedState = G;
    }
  }
  function Bd(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function Ud(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Bd(n[t], e);
  }
  var ha = S(null), wi = S(0);
  function wd(t, e) {
    t = Rn, J(wi, t), J(ha, e), Rn = t | e.baseLanes;
  }
  function Io() {
    J(wi, Rn), J(ha, ha.current);
  }
  function Po() {
    Rn = wi.current, j(ha), j(wi);
  }
  var Be = S(null), Ke = null;
  function Zn(t) {
    var e = t.alternate;
    J(Kt, Kt.current & 1), J(Be, t), Ke === null && (e === null || ha.current !== null || e.memoizedState !== null) && (Ke = t);
  }
  function tc(t) {
    J(Kt, Kt.current), J(Be, t), Ke === null && (Ke = t);
  }
  function Nd(t) {
    t.tag === 22 ? (J(Kt, Kt.current), J(Be, t), Ke === null && (Ke = t)) : Kn();
  }
  function Kn() {
    J(Kt, Kt.current), J(Be, Be.current);
  }
  function Ue(t) {
    j(Be), Ke === t && (Ke = null), j(Kt);
  }
  var Kt = S(0);
  function Ni(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || is(n) || us(n)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var xn = 0, dt = null, Ut = null, It = null, ji = !1, ga = !1, _l = !1, Hi = 0, br = 0, va = null, rg = 0;
  function Xt() {
    throw Error(c(321));
  }
  function ec(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!De(t[n], e[n])) return !1;
    return !0;
  }
  function nc(t, e, n, a, r, u) {
    return xn = u, dt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, R.H = t === null || t.memoizedState === null ? v0 : gc, _l = !1, u = n(a, r), _l = !1, ga && (u = Hd(
      e,
      n,
      a,
      r
    )), jd(t), u;
  }
  function jd(t) {
    R.H = Ar;
    var e = Ut !== null && Ut.next !== null;
    if (xn = 0, It = Ut = dt = null, ji = !1, br = 0, va = null, e) throw Error(c(300));
    t === null || Pt || (t = t.dependencies, t !== null && Oi(t) && (Pt = !0));
  }
  function Hd(t, e, n, a) {
    dt = t;
    var r = 0;
    do {
      if (ga && (va = null), br = 0, ga = !1, 25 <= r) throw Error(c(301));
      if (r += 1, It = Ut = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      R.H = b0, u = e(n, a);
    } while (ga);
    return u;
  }
  function ig() {
    var t = R.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Sr(e) : e, t = t.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== t && (dt.flags |= 1024), e;
  }
  function lc() {
    var t = Hi !== 0;
    return Hi = 0, t;
  }
  function ac(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function rc(t) {
    if (ji) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ji = !1;
    }
    xn = 0, It = Ut = dt = null, ga = !1, br = Hi = 0, va = null;
  }
  function ve() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? dt.memoizedState = It = t : It = It.next = t, It;
  }
  function Jt() {
    if (Ut === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ut.next;
    var e = It === null ? dt.memoizedState : It.next;
    if (e !== null)
      It = e, Ut = t;
    else {
      if (t === null)
        throw dt.alternate === null ? Error(c(467)) : Error(c(310));
      Ut = t, t = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null
      }, It === null ? dt.memoizedState = It = t : It = It.next = t;
    }
    return It;
  }
  function Li() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sr(t) {
    var e = br;
    return br += 1, va === null && (va = []), t = Od(va, t, e), e = dt, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, R.H = e === null || e.memoizedState === null ? v0 : gc), t;
  }
  function ki(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Sr(t);
      if (t.$$typeof === V) return ce(t);
    }
    throw Error(c(438, String(t)));
  }
  function ic(t) {
    var e = null, n = dt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = dt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Li(), dt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = it;
    return e.index++, n;
  }
  function Tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Gi(t) {
    var e = Jt();
    return uc(e, Ut, t);
  }
  function uc(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var r = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (r !== null) {
        var f = r.next;
        r.next = u.next, u.next = f;
      }
      e.baseQueue = r = u, a.pending = null;
    }
    if (u = t.baseState, r === null) t.memoizedState = u;
    else {
      e = r.next;
      var m = f = null, b = null, _ = e, w = !1;
      do {
        var G = _.lane & -536870913;
        if (G !== _.lane ? (vt & G) === G : (xn & G) === G) {
          var D = _.revertLane;
          if (D === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), G === da && (w = !0);
          else if ((xn & D) === D) {
            _ = _.next, D === da && (w = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, b === null ? (m = b = G, f = u) : b = b.next = G, dt.lanes |= D, Wn |= D;
          G = _.action, _l && n(u, G), u = _.hasEagerState ? _.eagerState : n(u, G);
        } else
          D = {
            lane: G,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, b === null ? (m = b = D, f = u) : b = b.next = D, dt.lanes |= G, Wn |= G;
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (b === null ? f = u : b.next = m, !De(u, t.memoizedState) && (Pt = !0, w && (n = ya, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = b, a.lastRenderedState = u;
    }
    return r === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function oc(t) {
    var e = Jt(), n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, r = n.pending, u = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var f = r = r.next;
      do
        u = t(u, f.action), f = f.next;
      while (f !== r);
      De(u, e.memoizedState) || (Pt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ld(t, e, n) {
    var a = dt, r = Jt(), u = Ct;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var f = !De(
      (Ut || r).memoizedState,
      n
    );
    if (f && (r.memoizedState = n, Pt = !0), r = r.queue, fc(qd.bind(null, a, r, t), [
      t
    ]), r.getSnapshot !== e || f || It !== null && It.memoizedState.tag & 1) {
      if (a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        Gd.bind(
          null,
          a,
          r,
          n,
          e
        ),
        null
      ), Ht === null) throw Error(c(349));
      u || (xn & 127) !== 0 || kd(a, e, n);
    }
    return n;
  }
  function kd(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = dt.updateQueue, e === null ? (e = Li(), dt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Gd(t, e, n, a) {
    e.value = n, e.getSnapshot = a, $d(e) && Yd(t);
  }
  function qd(t, e, n) {
    return n(function() {
      $d(e) && Yd(t);
    });
  }
  function $d(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !De(t, n);
    } catch {
      return !0;
    }
  }
  function Yd(t) {
    var e = bl(t, 2);
    e !== null && Me(e, t, 2);
  }
  function cc(t) {
    var e = ve();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), _l) {
        Hn(!0);
        try {
          n();
        } finally {
          Hn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tn,
      lastRenderedState: t
    }, e;
  }
  function Xd(t, e, n, a) {
    return t.baseState = n, uc(
      t,
      Ut,
      typeof a == "function" ? a : Tn
    );
  }
  function ug(t, e, n, a, r) {
    if (Yi(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          u.listeners.push(f);
        }
      };
      R.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Vd(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Vd(t, e) {
    var n = e.action, a = e.payload, r = t.state;
    if (e.isTransition) {
      var u = R.T, f = {};
      R.T = f;
      try {
        var m = n(r, a), b = R.S;
        b !== null && b(f, m), Qd(t, e, m);
      } catch (_) {
        sc(t, e, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), R.T = u;
      }
    } else
      try {
        u = n(r, a), Qd(t, e, u);
      } catch (_) {
        sc(t, e, _);
      }
  }
  function Qd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Zd(t, e, a);
      },
      function(a) {
        return sc(t, e, a);
      }
    ) : Zd(t, e, n);
  }
  function Zd(t, e, n) {
    e.status = "fulfilled", e.value = n, Kd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Vd(t, n)));
  }
  function sc(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Kd(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Kd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Jd(t, e) {
    return e;
  }
  function Fd(t, e) {
    if (Ct) {
      var n = Ht.formState;
      if (n !== null) {
        t: {
          var a = dt;
          if (Ct) {
            if (Lt) {
              e: {
                for (var r = Lt, u = Ze; r.nodeType !== 8; ) {
                  if (!u) {
                    r = null;
                    break e;
                  }
                  if (r = Je(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break e;
                  }
                }
                u = r.data, r = u === "F!" || u === "F" ? r : null;
              }
              if (r) {
                Lt = Je(
                  r.nextSibling
                ), a = r.data === "F!";
                break t;
              }
            }
            $n(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = ve(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jd,
      lastRenderedState: e
    }, n.queue = a, n = p0.bind(
      null,
      dt,
      a
    ), a.dispatch = n, a = cc(!1), u = hc.bind(
      null,
      dt,
      !1,
      a.queue
    ), a = ve(), r = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = r, n = ug.bind(
      null,
      dt,
      r,
      u,
      n
    ), r.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Wd(t) {
    var e = Jt();
    return Id(e, Ut, t);
  }
  function Id(t, e, n) {
    if (e = uc(
      t,
      e,
      Jd
    )[0], t = Gi(Tn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = Sr(e);
      } catch (f) {
        throw f === ma ? Di : f;
      }
    else a = e;
    e = Jt();
    var r = e.queue, u = r.dispatch;
    return n !== e.memoizedState && (dt.flags |= 2048, ba(
      9,
      { destroy: void 0 },
      og.bind(null, r, n),
      null
    )), [a, u, t];
  }
  function og(t, e) {
    t.action = e;
  }
  function Pd(t) {
    var e = Jt(), n = Ut;
    if (n !== null)
      return Id(e, n, t);
    Jt(), e = e.memoizedState, n = Jt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function ba(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = dt.updateQueue, e === null && (e = Li(), dt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function t0() {
    return Jt().memoizedState;
  }
  function qi(t, e, n, a) {
    var r = ve();
    dt.flags |= t, r.memoizedState = ba(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function $i(t, e, n, a) {
    var r = Jt();
    a = a === void 0 ? null : a;
    var u = r.memoizedState.inst;
    Ut !== null && a !== null && ec(a, Ut.memoizedState.deps) ? r.memoizedState = ba(e, u, n, a) : (dt.flags |= t, r.memoizedState = ba(
      1 | e,
      u,
      n,
      a
    ));
  }
  function e0(t, e) {
    qi(8390656, 8, t, e);
  }
  function fc(t, e) {
    $i(2048, 8, t, e);
  }
  function cg(t) {
    dt.flags |= 4;
    var e = dt.updateQueue;
    if (e === null)
      e = Li(), dt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function n0(t) {
    var e = Jt().memoizedState;
    return cg({ ref: e, nextImpl: t }), function() {
      if ((Et & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function l0(t, e) {
    return $i(4, 2, t, e);
  }
  function a0(t, e) {
    return $i(4, 4, t, e);
  }
  function r0(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function i0(t, e, n) {
    n = n != null ? n.concat([t]) : null, $i(4, 4, r0.bind(null, e, t), n);
  }
  function dc() {
  }
  function u0(t, e) {
    var n = Jt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && ec(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function o0(t, e) {
    var n = Jt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && ec(e, a[1]))
      return a[0];
    if (a = t(), _l) {
      Hn(!0);
      try {
        t();
      } finally {
        Hn(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function yc(t, e, n) {
    return n === void 0 || (xn & 1073741824) !== 0 && (vt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = cy(), dt.lanes |= t, Wn |= t, n);
  }
  function c0(t, e, n, a) {
    return De(n, e) ? n : ha.current !== null ? (t = yc(t, n, a), De(t, e) || (Pt = !0), t) : (xn & 42) === 0 || (xn & 1073741824) !== 0 && (vt & 261930) === 0 ? (Pt = !0, t.memoizedState = n) : (t = cy(), dt.lanes |= t, Wn |= t, e);
  }
  function s0(t, e, n, a, r) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var f = R.T, m = {};
    R.T = m, hc(t, !1, e, n);
    try {
      var b = r(), _ = R.S;
      if (_ !== null && _(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var w = ag(
          b,
          a
        );
        Cr(
          t,
          e,
          w,
          je(t)
        );
      } else
        Cr(
          t,
          e,
          a,
          je(t)
        );
    } catch (G) {
      Cr(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: G },
        je()
      );
    } finally {
      X.p = u, f !== null && m.types !== null && (f.types = m.types), R.T = f;
    }
  }
  function sg() {
  }
  function mc(t, e, n, a) {
    if (t.tag !== 5) throw Error(c(476));
    var r = f0(t).queue;
    s0(
      t,
      r,
      e,
      at,
      n === null ? sg : function() {
        return d0(t), n(a);
      }
    );
  }
  function f0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: at,
      baseState: at,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: at
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function d0(t) {
    var e = f0(t);
    e.next === null && (e = t.alternate.memoizedState), Cr(
      t,
      e.next.queue,
      {},
      je()
    );
  }
  function pc() {
    return ce(Lr);
  }
  function y0() {
    return Jt().memoizedState;
  }
  function m0() {
    return Jt().memoizedState;
  }
  function fg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = je();
          t = Vn(n);
          var a = Qn(e, t, n);
          a !== null && (Me(a, e, n), hr(a, e, n)), e = { cache: Xo() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function dg(t, e, n) {
    var a = je();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yi(t) ? h0(e, n) : (n = Uo(t, e, n, a), n !== null && (Me(n, t, a), g0(n, e, a)));
  }
  function p0(t, e, n) {
    var a = je();
    Cr(t, e, n, a);
  }
  function Cr(t, e, n, a) {
    var r = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Yi(t)) h0(e, r);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var f = e.lastRenderedState, m = u(f, n);
          if (r.hasEagerState = !0, r.eagerState = m, De(m, f))
            return xi(t, e, r, 0), Ht === null && Ai(), !1;
        } catch {
        } finally {
        }
      if (n = Uo(t, e, r, a), n !== null)
        return Me(n, t, a), g0(n, e, a), !0;
    }
    return !1;
  }
  function hc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Kc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yi(t)) {
      if (e) throw Error(c(479));
    } else
      e = Uo(
        t,
        n,
        a,
        2
      ), e !== null && Me(e, t, 2);
  }
  function Yi(t) {
    var e = t.alternate;
    return t === dt || e !== null && e === dt;
  }
  function h0(t, e) {
    ga = ji = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function g0(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Af(t, n);
    }
  }
  var Ar = {
    readContext: ce,
    use: ki,
    useCallback: Xt,
    useContext: Xt,
    useEffect: Xt,
    useImperativeHandle: Xt,
    useLayoutEffect: Xt,
    useInsertionEffect: Xt,
    useMemo: Xt,
    useReducer: Xt,
    useRef: Xt,
    useState: Xt,
    useDebugValue: Xt,
    useDeferredValue: Xt,
    useTransition: Xt,
    useSyncExternalStore: Xt,
    useId: Xt,
    useHostTransitionStatus: Xt,
    useFormState: Xt,
    useActionState: Xt,
    useOptimistic: Xt,
    useMemoCache: Xt,
    useCacheRefresh: Xt
  };
  Ar.useEffectEvent = Xt;
  var v0 = {
    readContext: ce,
    use: ki,
    useCallback: function(t, e) {
      return ve().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ce,
    useEffect: e0,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, qi(
        4194308,
        4,
        r0.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return qi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      qi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = ve();
      e = e === void 0 ? null : e;
      var a = t();
      if (_l) {
        Hn(!0);
        try {
          t();
        } finally {
          Hn(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = ve();
      if (n !== void 0) {
        var r = n(e);
        if (_l) {
          Hn(!0);
          try {
            n(e);
          } finally {
            Hn(!1);
          }
        }
      } else r = e;
      return a.memoizedState = a.baseState = r, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: r
      }, a.queue = t, t = t.dispatch = dg.bind(
        null,
        dt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ve();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = cc(t);
      var e = t.queue, n = p0.bind(null, dt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: dc,
    useDeferredValue: function(t, e) {
      var n = ve();
      return yc(n, t, e);
    },
    useTransition: function() {
      var t = cc(!1);
      return t = s0.bind(
        null,
        dt,
        t.queue,
        !0,
        !1
      ), ve().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = dt, r = ve();
      if (Ct) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), Ht === null)
          throw Error(c(349));
        (vt & 127) !== 0 || kd(a, e, n);
      }
      r.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return r.queue = u, e0(qd.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        Gd.bind(
          null,
          a,
          u,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = ve(), e = Ht.identifierPrefix;
      if (Ct) {
        var n = rn, a = an;
        n = (a & ~(1 << 32 - ze(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Hi++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = rg++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: pc,
    useFormState: Fd,
    useActionState: Fd,
    useOptimistic: function(t) {
      var e = ve();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = hc.bind(
        null,
        dt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: ic,
    useCacheRefresh: function() {
      return ve().memoizedState = fg.bind(
        null,
        dt
      );
    },
    useEffectEvent: function(t) {
      var e = ve(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Et & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, gc = {
    readContext: ce,
    use: ki,
    useCallback: u0,
    useContext: ce,
    useEffect: fc,
    useImperativeHandle: i0,
    useInsertionEffect: l0,
    useLayoutEffect: a0,
    useMemo: o0,
    useReducer: Gi,
    useRef: t0,
    useState: function() {
      return Gi(Tn);
    },
    useDebugValue: dc,
    useDeferredValue: function(t, e) {
      var n = Jt();
      return c0(
        n,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Gi(Tn)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : Sr(t),
        e
      ];
    },
    useSyncExternalStore: Ld,
    useId: y0,
    useHostTransitionStatus: pc,
    useFormState: Wd,
    useActionState: Wd,
    useOptimistic: function(t, e) {
      var n = Jt();
      return Xd(n, Ut, t, e);
    },
    useMemoCache: ic,
    useCacheRefresh: m0
  };
  gc.useEffectEvent = n0;
  var b0 = {
    readContext: ce,
    use: ki,
    useCallback: u0,
    useContext: ce,
    useEffect: fc,
    useImperativeHandle: i0,
    useInsertionEffect: l0,
    useLayoutEffect: a0,
    useMemo: o0,
    useReducer: oc,
    useRef: t0,
    useState: function() {
      return oc(Tn);
    },
    useDebugValue: dc,
    useDeferredValue: function(t, e) {
      var n = Jt();
      return Ut === null ? yc(n, t, e) : c0(
        n,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = oc(Tn)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : Sr(t),
        e
      ];
    },
    useSyncExternalStore: Ld,
    useId: y0,
    useHostTransitionStatus: pc,
    useFormState: Pd,
    useActionState: Pd,
    useOptimistic: function(t, e) {
      var n = Jt();
      return Ut !== null ? Xd(n, Ut, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: ic,
    useCacheRefresh: m0
  };
  b0.useEffectEvent = n0;
  function vc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : A({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var bc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = je(), r = Vn(a);
      r.payload = e, n != null && (r.callback = n), e = Qn(t, r, a), e !== null && (Me(e, t, a), hr(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = je(), r = Vn(a);
      r.tag = 1, r.payload = e, n != null && (r.callback = n), e = Qn(t, r, a), e !== null && (Me(e, t, a), hr(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = je(), a = Vn(n);
      a.tag = 2, e != null && (a.callback = e), e = Qn(t, a, n), e !== null && (Me(e, t, n), hr(e, t, n));
    }
  };
  function S0(t, e, n, a, r, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !or(n, a) || !or(r, u) : !0;
  }
  function C0(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && bc.enqueueReplaceState(e, e.state, null);
  }
  function zl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = A({}, n));
      for (var r in t)
        n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function A0(t) {
    Ci(t);
  }
  function x0(t) {
    console.error(t);
  }
  function T0(t) {
    Ci(t);
  }
  function Xi(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function E0(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Sc(t, e, n) {
    return n = Vn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Xi(t, e);
    }, n;
  }
  function M0(t) {
    return t = Vn(t), t.tag = 3, t;
  }
  function O0(t, e, n, a) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var u = a.value;
      t.payload = function() {
        return r(u);
      }, t.callback = function() {
        E0(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      E0(e, n, a), typeof r != "function" && (In === null ? In = /* @__PURE__ */ new Set([this]) : In.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function yg(t, e, n, a, r) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && fa(
        e,
        n,
        r,
        !0
      ), n = Be.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ke === null ? nu() : n.alternate === null && Vt === 0 && (Vt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, a === Ri ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Vc(t, a, r)), !1;
          case 22:
            return n.flags |= 65536, a === Ri ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Vc(t, a, r)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Vc(t, a, r), nu(), !1;
    }
    if (Ct)
      return e = Be.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = r, a !== ko && (t = Error(c(422), { cause: a }), fr(Xe(t, n)))) : (a !== ko && (e = Error(c(423), {
        cause: a
      }), fr(
        Xe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, a = Xe(a, n), r = Sc(
        t.stateNode,
        a,
        r
      ), Fo(t, r), Vt !== 4 && (Vt = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = Xe(u, n), Dr === null ? Dr = [u] : Dr.push(u), Vt !== 4 && (Vt = 2), e === null) return !0;
    a = Xe(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = r & -r, n.lanes |= t, t = Sc(n.stateNode, a, t), Fo(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (In === null || !In.has(u))))
            return n.flags |= 65536, r &= -r, n.lanes |= r, r = M0(r), O0(
              r,
              t,
              n,
              a
            ), Fo(n, r), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Cc = Error(c(461)), Pt = !1;
  function se(t, e, n, a) {
    e.child = t === null ? Rd(e, null, n, a) : Ol(
      e,
      t.child,
      n,
      a
    );
  }
  function _0(t, e, n, a, r) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a)
        m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return xl(e), a = nc(
      t,
      e,
      n,
      f,
      u,
      r
    ), m = lc(), t !== null && !Pt ? (ac(t, e, r), En(t, e, r)) : (Ct && m && Ho(e), e.flags |= 1, se(t, e, a, r), e.child);
  }
  function z0(t, e, n, a, r) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !wo(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, D0(
        t,
        e,
        u,
        a,
        r
      )) : (t = Ei(
        n.type,
        null,
        a,
        e,
        e.mode,
        r
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !zc(t, r)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : or, n(f, a) && t.ref === e.ref)
        return En(t, e, r);
    }
    return e.flags |= 1, t = bn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function D0(t, e, n, a, r) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (or(u, a) && t.ref === e.ref)
        if (Pt = !1, e.pendingProps = a = u, zc(t, r))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return e.lanes = t.lanes, En(t, e, r);
    }
    return Ac(
      t,
      e,
      n,
      a,
      r
    );
  }
  function R0(t, e, n, a) {
    var r = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, r = 0; a !== null; )
            r = r | a.lanes | a.childLanes, a = a.sibling;
          a = r & ~u;
        } else a = 0, e.child = null;
        return B0(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && zi(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? wd(e, u) : Io(), Nd(e);
      else
        return a = e.lanes = 536870912, B0(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (zi(e, u.cachePool), wd(e, u), Kn(), e.memoizedState = null) : (t !== null && zi(e, null), Io(), Kn());
    return se(t, e, r, n), e.child;
  }
  function xr(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function B0(t, e, n, a, r) {
    var u = Qo();
    return u = u === null ? null : { parent: Wt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && zi(e, null), Io(), Nd(e), t !== null && fa(t, e, a, !0), e.childLanes = r, null;
  }
  function Vi(t, e) {
    return e = Zi(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function U0(t, e, n) {
    return Ol(e, t.child, null, n), t = Vi(e, e.pendingProps), t.flags |= 2, Ue(e), e.memoizedState = null, t;
  }
  function mg(t, e, n) {
    var a = e.pendingProps, r = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Ct) {
        if (a.mode === "hidden")
          return t = Vi(e, a), e.lanes = 536870912, xr(null, t);
        if (tc(e), (t = Lt) ? (t = Vy(
          t,
          Ze
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gn !== null ? { id: an, overflow: rn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = hd(t), n.return = e, e.child = n, oe = e, Lt = null)) : t = null, t === null) throw $n(e);
        return e.lanes = 536870912, null;
      }
      return Vi(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (tc(e), r)
        if (e.flags & 256)
          e.flags &= -257, e = U0(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (Pt || fa(t, e, n, !1), r = (n & t.childLanes) !== 0, Pt || r) {
        if (a = Ht, a !== null && (f = xf(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, bl(t, f), Me(a, t, f), Cc;
        nu(), e = U0(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Lt = Je(f.nextSibling), oe = e, Ct = !0, qn = null, Ze = !1, t !== null && bd(e, t), e = Vi(e, a), e.flags |= 4096;
      return e;
    }
    return t = bn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Qi(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ac(t, e, n, a, r) {
    return xl(e), n = nc(
      t,
      e,
      n,
      a,
      void 0,
      r
    ), a = lc(), t !== null && !Pt ? (ac(t, e, r), En(t, e, r)) : (Ct && a && Ho(e), e.flags |= 1, se(t, e, n, r), e.child);
  }
  function w0(t, e, n, a, r, u) {
    return xl(e), e.updateQueue = null, n = Hd(
      e,
      a,
      n,
      r
    ), jd(t), a = lc(), t !== null && !Pt ? (ac(t, e, u), En(t, e, u)) : (Ct && a && Ho(e), e.flags |= 1, se(t, e, n, u), e.child);
  }
  function N0(t, e, n, a, r) {
    if (xl(e), e.stateNode === null) {
      var u = ua, f = n.contextType;
      typeof f == "object" && f !== null && (u = ce(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = bc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Ko(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? ce(f) : ua, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (vc(
        e,
        n,
        f,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && bc.enqueueReplaceState(u, u.state, null), vr(e, a, u, r), gr(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var m = e.memoizedProps, b = zl(n, m);
      u.props = b;
      var _ = u.context, w = n.contextType;
      f = ua, typeof w == "object" && w !== null && (f = ce(w));
      var G = n.getDerivedStateFromProps;
      w = typeof G == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, w || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || _ !== f) && C0(
        e,
        u,
        a,
        f
      ), Xn = !1;
      var D = e.memoizedState;
      u.state = D, vr(e, a, u, r), gr(), _ = e.memoizedState, m || D !== _ || Xn ? (typeof G == "function" && (vc(
        e,
        n,
        G,
        a
      ), _ = e.memoizedState), (b = Xn || S0(
        e,
        n,
        b,
        a,
        D,
        _,
        f
      )) ? (w || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = _), u.props = a, u.state = _, u.context = f, a = b) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Jo(t, e), f = e.memoizedProps, w = zl(n, f), u.props = w, G = e.pendingProps, D = u.context, _ = n.contextType, b = ua, typeof _ == "object" && _ !== null && (b = ce(_)), m = n.getDerivedStateFromProps, (_ = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== G || D !== b) && C0(
        e,
        u,
        a,
        b
      ), Xn = !1, D = e.memoizedState, u.state = D, vr(e, a, u, r), gr();
      var U = e.memoizedState;
      f !== G || D !== U || Xn || t !== null && t.dependencies !== null && Oi(t.dependencies) ? (typeof m == "function" && (vc(
        e,
        n,
        m,
        a
      ), U = e.memoizedState), (w = Xn || S0(
        e,
        n,
        w,
        a,
        D,
        U,
        b
      ) || t !== null && t.dependencies !== null && Oi(t.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, U, b), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        U,
        b
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = U), u.props = a, u.state = U, u.context = b, a = w) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Qi(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Ol(
      e,
      t.child,
      null,
      r
    ), e.child = Ol(
      e,
      null,
      n,
      r
    )) : se(t, e, n, r), e.memoizedState = u.state, t = e.child) : t = En(
      t,
      e,
      r
    ), t;
  }
  function j0(t, e, n, a) {
    return Cl(), e.flags |= 256, se(t, e, n, a), e.child;
  }
  var xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Tc(t) {
    return { baseLanes: t, cachePool: Ed() };
  }
  function Ec(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ne), t;
  }
  function H0(t, e, n) {
    var a = e.pendingProps, r = !1, u = (e.flags & 128) !== 0, f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0), f && (r = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Ct) {
        if (r ? Zn(e) : Kn(), (t = Lt) ? (t = Vy(
          t,
          Ze
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gn !== null ? { id: an, overflow: rn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = hd(t), n.return = e, e.child = n, oe = e, Lt = null)) : t = null, t === null) throw $n(e);
        return us(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, r ? (Kn(), r = e.mode, m = Zi(
        { mode: "hidden", children: m },
        r
      ), a = Sl(
        a,
        r,
        n,
        null
      ), m.return = e, a.return = e, m.sibling = a, e.child = m, a = e.child, a.memoizedState = Tc(n), a.childLanes = Ec(
        t,
        f,
        n
      ), e.memoizedState = xc, xr(null, a)) : (Zn(e), Mc(e, m));
    }
    var b = t.memoizedState;
    if (b !== null && (m = b.dehydrated, m !== null)) {
      if (u)
        e.flags & 256 ? (Zn(e), e.flags &= -257, e = Oc(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Kn(), e.child = t.child, e.flags |= 128, e = null) : (Kn(), m = a.fallback, r = e.mode, a = Zi(
          { mode: "visible", children: a.children },
          r
        ), m = Sl(
          m,
          r,
          n,
          null
        ), m.flags |= 2, a.return = e, m.return = e, a.sibling = m, e.child = a, Ol(
          e,
          t.child,
          null,
          n
        ), a = e.child, a.memoizedState = Tc(n), a.childLanes = Ec(
          t,
          f,
          n
        ), e.memoizedState = xc, e = xr(null, a));
      else if (Zn(e), us(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(c(419)), a.stack = "", a.digest = f, fr({ value: a, source: null, stack: null }), e = Oc(
          t,
          e,
          n
        );
      } else if (Pt || fa(t, e, n, !1), f = (n & t.childLanes) !== 0, Pt || f) {
        if (f = Ht, f !== null && (a = xf(f, n), a !== 0 && a !== b.retryLane))
          throw b.retryLane = a, bl(t, a), Me(f, t, a), Cc;
        is(m) || nu(), e = Oc(
          t,
          e,
          n
        );
      } else
        is(m) ? (e.flags |= 192, e.child = t.child, e = null) : (t = b.treeContext, Lt = Je(
          m.nextSibling
        ), oe = e, Ct = !0, qn = null, Ze = !1, t !== null && bd(e, t), e = Mc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return r ? (Kn(), m = a.fallback, r = e.mode, b = t.child, _ = b.sibling, a = bn(b, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = b.subtreeFlags & 65011712, _ !== null ? m = bn(
      _,
      m
    ) : (m = Sl(
      m,
      r,
      n,
      null
    ), m.flags |= 2), m.return = e, a.return = e, a.sibling = m, e.child = a, xr(null, a), a = e.child, m = t.child.memoizedState, m === null ? m = Tc(n) : (r = m.cachePool, r !== null ? (b = Wt._currentValue, r = r.parent !== b ? { parent: b, pool: b } : r) : r = Ed(), m = {
      baseLanes: m.baseLanes | n,
      cachePool: r
    }), a.memoizedState = m, a.childLanes = Ec(
      t,
      f,
      n
    ), e.memoizedState = xc, xr(t.child, a)) : (Zn(e), n = t.child, t = n.sibling, n = bn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Mc(t, e) {
    return e = Zi(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Zi(t, e) {
    return t = Re(22, t, null, e), t.lanes = 0, t;
  }
  function Oc(t, e, n) {
    return Ol(e, t.child, null, n), t = Mc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function L0(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), $o(t.return, e, n);
  }
  function _c(t, e, n, a, r, u) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: r,
      treeForkCount: u
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = r, f.treeForkCount = u);
  }
  function k0(t, e, n) {
    var a = e.pendingProps, r = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Kt.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, J(Kt, f), se(t, e, a, n), a = Ct ? sr : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && L0(t, n, e);
        else if (t.tag === 19)
          L0(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          t = n.alternate, t !== null && Ni(t) === null && (r = n), n = n.sibling;
        n = r, n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), _c(
          e,
          !1,
          r,
          n,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (t = r.alternate, t !== null && Ni(t) === null) {
            e.child = r;
            break;
          }
          t = r.sibling, r.sibling = n, n = r, r = t;
        }
        _c(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        _c(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function En(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Wn |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (fa(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, n = bn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = bn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function zc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Oi(t)));
  }
  function pg(t, e, n) {
    switch (e.tag) {
      case 3:
        le(e, e.stateNode.containerInfo), Yn(e, Wt, t.memoizedState.cache), Cl();
        break;
      case 27:
      case 5:
        fl(e);
        break;
      case 4:
        le(e, e.stateNode.containerInfo);
        break;
      case 10:
        Yn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, tc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Zn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? H0(t, e, n) : (Zn(e), t = En(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        Zn(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (fa(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), r) {
          if (a)
            return k0(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), J(Kt, Kt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, R0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Yn(e, Wt, t.memoizedState.cache);
    }
    return En(t, e, n);
  }
  function G0(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Pt = !0;
      else {
        if (!zc(t, n) && (e.flags & 128) === 0)
          return Pt = !1, pg(
            t,
            e,
            n
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, Ct && (e.flags & 1048576) !== 0 && vd(e, sr, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = El(e.elementType), e.type = t, typeof t == "function")
            wo(t) ? (a = zl(t, a), e.tag = 1, e = N0(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Ac(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === Z) {
                e.tag = 11, e = _0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (r === Y) {
                e.tag = 14, e = z0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              }
            }
            throw e = F(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ac(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, r = zl(
          a,
          e.pendingProps
        ), N0(
          t,
          e,
          a,
          r,
          n
        );
      case 3:
        t: {
          if (le(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          r = u.element, Jo(t, e), vr(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, Yn(e, Wt, a), a !== u.cache && Yo(
            e,
            [Wt],
            n,
            !0
          ), gr(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = j0(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== r) {
              r = Xe(
                Error(c(424)),
                e
              ), fr(r), e = j0(
                t,
                e,
                a,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Lt = Je(t.firstChild), oe = e, Ct = !0, qn = null, Ze = !0, n = Rd(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Cl(), a === r) {
              e = En(
                t,
                e,
                n
              );
              break t;
            }
            se(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Qi(t, e), t === null ? (n = Wy(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Ct || (n = e.type, t = e.pendingProps, a = cu(
          mt.current
        ).createElement(n), a[ue] = e, a[Se] = t, fe(a, n, t), ae(a), e.stateNode = a) : e.memoizedState = Wy(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return fl(e), t === null && Ct && (a = e.stateNode = Ky(
          e.type,
          e.pendingProps,
          mt.current
        ), oe = e, Ze = !0, r = Lt, nl(e.type) ? (os = r, Lt = Je(a.firstChild)) : Lt = r), se(
          t,
          e,
          e.pendingProps.children,
          n
        ), Qi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Ct && ((r = a = Lt) && (a = Vg(
          a,
          e.type,
          e.pendingProps,
          Ze
        ), a !== null ? (e.stateNode = a, oe = e, Lt = Je(a.firstChild), Ze = !1, r = !0) : r = !1), r || $n(e)), fl(e), r = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, ls(r, u) ? a = null : f !== null && ls(r, f) && (e.flags |= 32), e.memoizedState !== null && (r = nc(
          t,
          e,
          ig,
          null,
          null,
          n
        ), Lr._currentValue = r), Qi(t, e), se(t, e, a, n), e.child;
      case 6:
        return t === null && Ct && ((t = n = Lt) && (n = Qg(
          n,
          e.pendingProps,
          Ze
        ), n !== null ? (e.stateNode = n, oe = e, Lt = null, t = !0) : t = !1), t || $n(e)), null;
      case 13:
        return H0(t, e, n);
      case 4:
        return le(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Ol(
          e,
          null,
          a,
          n
        ) : se(t, e, a, n), e.child;
      case 11:
        return _0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return se(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return a = e.pendingProps, Yn(e, e.type, a.value), se(t, e, a.children, n), e.child;
      case 9:
        return r = e.type._context, a = e.pendingProps.children, xl(e), r = ce(r), a = a(r), e.flags |= 1, se(t, e, a, n), e.child;
      case 14:
        return z0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return D0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return k0(t, e, n);
      case 31:
        return mg(t, e, n);
      case 22:
        return R0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return xl(e), a = ce(Wt), t === null ? (r = Qo(), r === null && (r = Ht, u = Xo(), r.pooledCache = u, u.refCount++, u !== null && (r.pooledCacheLanes |= n), r = u), e.memoizedState = { parent: a, cache: r }, Ko(e), Yn(e, Wt, r)) : ((t.lanes & n) !== 0 && (Jo(t, e), vr(e, null, null, n), gr()), r = t.memoizedState, u = e.memoizedState, r.parent !== a ? (r = { parent: a, cache: a }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), Yn(e, Wt, a)) : (a = u.cache, Yn(e, Wt, a), a !== r.cache && Yo(
          e,
          [Wt],
          n,
          !0
        ))), se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function Mn(t) {
    t.flags |= 4;
  }
  function Dc(t, e, n, a, r) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (r & 335544128) === r)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (yy()) t.flags |= 8192;
        else
          throw Ml = Ri, Zo;
    } else t.flags &= -16777217;
  }
  function q0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !nm(e))
      if (yy()) t.flags |= 8192;
      else
        throw Ml = Ri, Zo;
  }
  function Ki(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Sf() : 536870912, t.lanes |= e, xa |= e);
  }
  function Tr(t, e) {
    if (!Ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function kt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, a |= r.subtreeFlags & 65011712, a |= r.flags & 65011712, r.return = t, r = r.sibling;
    else
      for (r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, a |= r.subtreeFlags, a |= r.flags, r.return = t, r = r.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function hg(t, e, n) {
    var a = e.pendingProps;
    switch (Lo(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kt(e), null;
      case 1:
        return kt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), An(Wt), Gt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (sa(e) ? Mn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Go())), kt(e), null;
      case 26:
        var r = e.type, u = e.memoizedState;
        return t === null ? (Mn(e), u !== null ? (kt(e), q0(e, u)) : (kt(e), Dc(
          e,
          r,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (Mn(e), kt(e), q0(e, u)) : (kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Mn(e), kt(e), Dc(
          e,
          r,
          t,
          a,
          n
        )), null;
      case 27:
        if (Yl(e), n = mt.current, r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Mn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(c(166));
            return kt(e), null;
          }
          t = tt.current, sa(e) ? Sd(e) : (t = Ky(r, a, n), e.stateNode = t, Mn(e));
        }
        return kt(e), null;
      case 5:
        if (Yl(e), r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Mn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(c(166));
            return kt(e), null;
          }
          if (u = tt.current, sa(e))
            Sd(e);
          else {
            var f = cu(
              mt.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(r, { is: a.is }) : f.createElement(r);
                }
            }
            u[ue] = e, u[Se] = a;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = u;
            t: switch (fe(u, r, a), r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Mn(e);
          }
        }
        return kt(e), Dc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Mn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = mt.current, sa(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, r = oe, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  a = r.memoizedProps;
              }
            t[ue] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Hy(t.nodeValue, n)), t || $n(e, !0);
          } else
            t = cu(t).createTextNode(
              a
            ), t[ue] = e, e.stateNode = t;
        }
        return kt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = sa(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[ue] = e;
            } else
              Cl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), t = !1;
          } else
            n = Go(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ue(e), e) : (Ue(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return kt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (r = sa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!r) throw Error(c(318));
              if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(c(317));
              r[ue] = e;
            } else
              Cl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), r = !1;
          } else
            r = Go(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return e.flags & 256 ? (Ue(e), e) : (Ue(e), null);
        }
        return Ue(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, r = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (r = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== r && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Ki(e, e.updateQueue), kt(e), null);
      case 4:
        return Gt(), t === null && Ic(e.stateNode.containerInfo), kt(e), null;
      case 10:
        return An(e.type), kt(e), null;
      case 19:
        if (j(Kt), a = e.memoizedState, a === null) return kt(e), null;
        if (r = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (r) Tr(a, !1);
          else {
            if (Vt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Ni(t), u !== null) {
                  for (e.flags |= 128, Tr(a, !1), t = u.updateQueue, e.updateQueue = t, Ki(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    pd(n, t), n = n.sibling;
                  return J(
                    Kt,
                    Kt.current & 1 | 2
                  ), Ct && Sn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ye() > Pi && (e.flags |= 128, r = !0, Tr(a, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = Ni(u), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, Ki(e, t), Tr(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Ct)
                return kt(e), null;
            } else
              2 * ye() - a.renderingStartTime > Pi && n !== 536870912 && (e.flags |= 128, r = !0, Tr(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ye(), t.sibling = null, n = Kt.current, J(
          Kt,
          r ? n & 1 | 2 : n & 1
        ), Ct && Sn(e, a.treeForkCount), t) : (kt(e), null);
      case 22:
      case 23:
        return Ue(e), Po(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), n = e.updateQueue, n !== null && Ki(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && j(Tl), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), An(Wt), kt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function gg(t, e) {
    switch (Lo(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return An(Wt), Gt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Yl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ue(e), e.alternate === null)
            throw Error(c(340));
          Cl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ue(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          Cl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return j(Kt), null;
      case 4:
        return Gt(), null;
      case 10:
        return An(e.type), null;
      case 22:
      case 23:
        return Ue(e), Po(), t !== null && j(Tl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return An(Wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $0(t, e) {
    switch (Lo(e), e.tag) {
      case 3:
        An(Wt), Gt();
        break;
      case 26:
      case 27:
      case 5:
        Yl(e);
        break;
      case 4:
        Gt();
        break;
      case 31:
        e.memoizedState !== null && Ue(e);
        break;
      case 13:
        Ue(e);
        break;
      case 19:
        j(Kt);
        break;
      case 10:
        An(e.type);
        break;
      case 22:
      case 23:
        Ue(e), Po(), t !== null && j(Tl);
        break;
      case 24:
        An(Wt);
    }
  }
  function Er(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var r = a.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create, f = n.inst;
            a = u(), f.destroy = a;
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (m) {
      Dt(e, e.return, m);
    }
  }
  function Jn(t, e, n) {
    try {
      var a = e.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, r = e;
              var b = n, _ = m;
              try {
                _();
              } catch (w) {
                Dt(
                  r,
                  b,
                  w
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (w) {
      Dt(e, e.return, w);
    }
  }
  function Y0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ud(e, n);
      } catch (a) {
        Dt(t, t.return, a);
      }
    }
  }
  function X0(t, e, n) {
    n.props = zl(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Dt(t, e, a);
    }
  }
  function Mr(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (r) {
      Dt(t, e, r);
    }
  }
  function un(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (r) {
          Dt(t, e, r);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Dt(t, e, r);
        }
      else n.current = null;
  }
  function V0(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (r) {
      Dt(t, t.return, r);
    }
  }
  function Rc(t, e, n) {
    try {
      var a = t.stateNode;
      kg(a, t.type, n, e), a[Se] = e;
    } catch (r) {
      Dt(t, t.return, r);
    }
  }
  function Q0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && nl(t.type) || t.tag === 4;
  }
  function Bc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Q0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && nl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Uc(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = gn));
    else if (a !== 4 && (a === 27 && nl(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Uc(t, e, n), t = t.sibling; t !== null; )
        Uc(t, e, n), t = t.sibling;
  }
  function Ji(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && (a === 27 && nl(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (Ji(t, e, n), t = t.sibling; t !== null; )
        Ji(t, e, n), t = t.sibling;
  }
  function Z0(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      fe(e, a, n), e[ue] = t, e[Se] = n;
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  var On = !1, te = !1, wc = !1, K0 = typeof WeakSet == "function" ? WeakSet : Set, re = null;
  function vg(t, e) {
    if (t = t.containerInfo, es = hu, t = id(t), Oo(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var r = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0, m = -1, b = -1, _ = 0, w = 0, G = t, D = null;
            e: for (; ; ) {
              for (var U; G !== n || r !== 0 && G.nodeType !== 3 || (m = f + r), G !== u || a !== 0 && G.nodeType !== 3 || (b = f + a), G.nodeType === 3 && (f += G.nodeValue.length), (U = G.firstChild) !== null; )
                D = G, G = U;
              for (; ; ) {
                if (G === t) break e;
                if (D === n && ++_ === r && (m = f), D === u && ++w === a && (b = f), (U = G.nextSibling) !== null) break;
                G = D, D = G.parentNode;
              }
              G = U;
            }
            n = m === -1 || b === -1 ? null : { start: m, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ns = { focusedElem: t, selectionRange: n }, hu = !1, re = e; re !== null; )
      if (e = re, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, re = t;
      else
        for (; re !== null; ) {
          switch (e = re, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++)
                  r = t[n], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, n = e, r = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
                try {
                  var et = zl(
                    n.type,
                    r
                  );
                  t = a.getSnapshotBeforeUpdate(
                    et,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (ct) {
                  Dt(
                    n,
                    n.return,
                    ct
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  rs(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rs(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, re = t;
            break;
          }
          re = e.return;
        }
  }
  function J0(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        zn(t, n), a & 4 && Er(5, n);
        break;
      case 1:
        if (zn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Dt(n, n.return, f);
            }
          else {
            var r = zl(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                r,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Dt(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && Y0(n), a & 512 && Mr(n, n.return);
        break;
      case 3:
        if (zn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Ud(t, e);
          } catch (f) {
            Dt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Z0(n);
      case 26:
      case 5:
        zn(t, n), e === null && a & 4 && V0(n), a & 512 && Mr(n, n.return);
        break;
      case 12:
        zn(t, n);
        break;
      case 31:
        zn(t, n), a & 4 && I0(t, n);
        break;
      case 13:
        zn(t, n), a & 4 && P0(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Og.bind(
          null,
          n
        ), Zg(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || On, !a) {
          e = e !== null && e.memoizedState !== null || te, r = On;
          var u = te;
          On = a, (te = e) && !u ? Dn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : zn(t, n), On = r, te = u;
        }
        break;
      case 30:
        break;
      default:
        zn(t, n);
    }
  }
  function F0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, F0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && co(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var $t = null, Ae = !1;
  function _n(t, e, n) {
    for (n = n.child; n !== null; )
      W0(t, e, n), n = n.sibling;
  }
  function W0(t, e, n) {
    if (_e && typeof _e.onCommitFiberUnmount == "function")
      try {
        _e.onCommitFiberUnmount(Fa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        te || un(n, e), _n(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        te || un(n, e);
        var a = $t, r = Ae;
        nl(n.type) && ($t = n.stateNode, Ae = !1), _n(
          t,
          e,
          n
        ), Nr(n.stateNode), $t = a, Ae = r;
        break;
      case 5:
        te || un(n, e);
      case 6:
        if (a = $t, r = Ae, $t = null, _n(
          t,
          e,
          n
        ), $t = a, Ae = r, $t !== null)
          if (Ae)
            try {
              ($t.nodeType === 9 ? $t.body : $t.nodeName === "HTML" ? $t.ownerDocument.body : $t).removeChild(n.stateNode);
            } catch (u) {
              Dt(
                n,
                e,
                u
              );
            }
          else
            try {
              $t.removeChild(n.stateNode);
            } catch (u) {
              Dt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        $t !== null && (Ae ? (t = $t, Yy(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Ra(t)) : Yy($t, n.stateNode));
        break;
      case 4:
        a = $t, r = Ae, $t = n.stateNode.containerInfo, Ae = !0, _n(
          t,
          e,
          n
        ), $t = a, Ae = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Jn(2, n, e), te || Jn(4, n, e), _n(
          t,
          e,
          n
        );
        break;
      case 1:
        te || (un(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && X0(
          n,
          e,
          a
        )), _n(
          t,
          e,
          n
        );
        break;
      case 21:
        _n(
          t,
          e,
          n
        );
        break;
      case 22:
        te = (a = te) || n.memoizedState !== null, _n(
          t,
          e,
          n
        ), te = a;
        break;
      default:
        _n(
          t,
          e,
          n
        );
    }
  }
  function I0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ra(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
    }
  }
  function P0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ra(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
  }
  function bg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new K0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new K0()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function Fi(t, e) {
    var n = bg(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var r = _g.bind(null, t, a);
        a.then(r, r);
      }
    });
  }
  function xe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var r = n[a], u = t, f = e, m = f;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (nl(m.type)) {
                $t = m.stateNode, Ae = !1;
                break t;
              }
              break;
            case 5:
              $t = m.stateNode, Ae = !1;
              break t;
            case 3:
            case 4:
              $t = m.stateNode.containerInfo, Ae = !0;
              break t;
          }
          m = m.return;
        }
        if ($t === null) throw Error(c(160));
        W0(u, f, r), $t = null, Ae = !1, u = r.alternate, u !== null && (u.return = null), r.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        ty(e, t), e = e.sibling;
  }
  var tn = null;
  function ty(t, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xe(e, t), Te(t), a & 4 && (Jn(3, t, t.return), Er(3, t), Jn(5, t, t.return));
        break;
      case 1:
        xe(e, t), Te(t), a & 512 && (te || n === null || un(n, n.return)), a & 64 && On && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var r = tn;
        if (xe(e, t), Te(t), a & 512 && (te || n === null || un(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = t.memoizedState, n === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, n = t.memoizedProps, r = r.ownerDocument || r;
                  e: switch (a) {
                    case "title":
                      u = r.getElementsByTagName("title")[0], (!u || u[Pa] || u[ue] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = r.createElement(a), r.head.insertBefore(
                        u,
                        r.querySelector("head > title")
                      )), fe(u, a, n), u[ue] = t, ae(u), a = u;
                      break t;
                    case "link":
                      var f = tm(
                        "link",
                        "href",
                        r
                      ).get(a + (n.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (u = f[m], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      u = r.createElement(a), fe(u, a, n), r.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = tm(
                        "meta",
                        "content",
                        r
                      ).get(a + (n.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (u = f[m], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      u = r.createElement(a), fe(u, a, n), r.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  u[ue] = t, ae(u), a = u;
                }
                t.stateNode = a;
              } else
                em(
                  r,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Py(
                r,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? em(
              r,
              t.type,
              t.stateNode
            ) : Py(
              r,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Rc(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        xe(e, t), Te(t), a & 512 && (te || n === null || un(n, n.return)), n !== null && a & 4 && Rc(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (xe(e, t), Te(t), a & 512 && (te || n === null || un(n, n.return)), t.flags & 32) {
          r = t.stateNode;
          try {
            ta(r, "");
          } catch (et) {
            Dt(t, t.return, et);
          }
        }
        a & 4 && t.stateNode != null && (r = t.memoizedProps, Rc(
          t,
          r,
          n !== null ? n.memoizedProps : r
        )), a & 1024 && (wc = !0);
        break;
      case 6:
        if (xe(e, t), Te(t), a & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a;
          } catch (et) {
            Dt(t, t.return, et);
          }
        }
        break;
      case 3:
        if (du = null, r = tn, tn = su(e.containerInfo), xe(e, t), tn = r, Te(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Ra(e.containerInfo);
          } catch (et) {
            Dt(t, t.return, et);
          }
        wc && (wc = !1, ey(t));
        break;
      case 4:
        a = tn, tn = su(
          t.stateNode.containerInfo
        ), xe(e, t), Te(t), tn = a;
        break;
      case 12:
        xe(e, t), Te(t);
        break;
      case 31:
        xe(e, t), Te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Fi(t, a)));
        break;
      case 13:
        xe(e, t), Te(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ii = ye()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Fi(t, a)));
        break;
      case 22:
        r = t.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null, _ = On, w = te;
        if (On = _ || r, te = w || b, xe(e, t), te = w, On = _, Te(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = r ? e._visibility & -2 : e._visibility | 1, r && (n === null || b || On || te || Dl(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                b = n = e;
                try {
                  if (u = b.stateNode, r)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = b.stateNode;
                    var G = b.memoizedProps.style, D = G != null && G.hasOwnProperty("display") ? G.display : null;
                    m.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (et) {
                  Dt(b, b.return, et);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = r ? "" : b.memoizedProps;
                } catch (et) {
                  Dt(b, b.return, et);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                b = e;
                try {
                  var U = b.stateNode;
                  r ? Xy(U, !0) : Xy(b.stateNode, !1);
                } catch (et) {
                  Dt(b, b.return, et);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Fi(t, n))));
        break;
      case 19:
        xe(e, t), Te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Fi(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        xe(e, t), Te(t);
    }
  }
  function Te(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Q0(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode, u = Bc(t);
            Ji(t, u, r);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (ta(f, ""), n.flags &= -33);
            var m = Bc(t);
            Ji(t, m, f);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo, _ = Bc(t);
            Uc(
              t,
              _,
              b
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (w) {
        Dt(t, t.return, w);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ey(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ey(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function zn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        J0(t, e.alternate, e), e = e.sibling;
  }
  function Dl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jn(4, e, e.return), Dl(e);
          break;
        case 1:
          un(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && X0(
            e,
            e.return,
            n
          ), Dl(e);
          break;
        case 27:
          Nr(e.stateNode);
        case 26:
        case 5:
          un(e, e.return), Dl(e);
          break;
        case 22:
          e.memoizedState === null && Dl(e);
          break;
        case 30:
          Dl(e);
          break;
        default:
          Dl(e);
      }
      t = t.sibling;
    }
  }
  function Dn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, r = t, u = e, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Dn(
            r,
            u,
            n
          ), Er(4, u);
          break;
        case 1:
          if (Dn(
            r,
            u,
            n
          ), a = u, r = a.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (_) {
              Dt(a, a.return, _);
            }
          if (a = u, r = a.updateQueue, r !== null) {
            var m = a.stateNode;
            try {
              var b = r.shared.hiddenCallbacks;
              if (b !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < b.length; r++)
                  Bd(b[r], m);
            } catch (_) {
              Dt(a, a.return, _);
            }
          }
          n && f & 64 && Y0(u), Mr(u, u.return);
          break;
        case 27:
          Z0(u);
        case 26:
        case 5:
          Dn(
            r,
            u,
            n
          ), n && a === null && f & 4 && V0(u), Mr(u, u.return);
          break;
        case 12:
          Dn(
            r,
            u,
            n
          );
          break;
        case 31:
          Dn(
            r,
            u,
            n
          ), n && f & 4 && I0(r, u);
          break;
        case 13:
          Dn(
            r,
            u,
            n
          ), n && f & 4 && P0(r, u);
          break;
        case 22:
          u.memoizedState === null && Dn(
            r,
            u,
            n
          ), Mr(u, u.return);
          break;
        case 30:
          break;
        default:
          Dn(
            r,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Nc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && dr(n));
  }
  function jc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && dr(t));
  }
  function en(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ny(
          t,
          e,
          n,
          a
        ), e = e.sibling;
  }
  function ny(t, e, n, a) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        en(
          t,
          e,
          n,
          a
        ), r & 2048 && Er(9, e);
        break;
      case 1:
        en(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        en(
          t,
          e,
          n,
          a
        ), r & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && dr(t)));
        break;
      case 12:
        if (r & 2048) {
          en(
            t,
            e,
            n,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, f = u.id, m = u.onPostCommit;
            typeof m == "function" && m(
              f,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (b) {
            Dt(e, e.return, b);
          }
        } else
          en(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        en(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        en(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, f = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? en(
          t,
          e,
          n,
          a
        ) : Or(t, e) : u._visibility & 2 ? en(
          t,
          e,
          n,
          a
        ) : (u._visibility |= 2, Sa(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && Nc(f, e);
        break;
      case 24:
        en(
          t,
          e,
          n,
          a
        ), r & 2048 && jc(e.alternate, e);
        break;
      default:
        en(
          t,
          e,
          n,
          a
        );
    }
  }
  function Sa(t, e, n, a, r) {
    for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, f = e, m = n, b = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Sa(
            u,
            f,
            m,
            b,
            r
          ), Er(8, f);
          break;
        case 23:
          break;
        case 22:
          var w = f.stateNode;
          f.memoizedState !== null ? w._visibility & 2 ? Sa(
            u,
            f,
            m,
            b,
            r
          ) : Or(
            u,
            f
          ) : (w._visibility |= 2, Sa(
            u,
            f,
            m,
            b,
            r
          )), r && _ & 2048 && Nc(
            f.alternate,
            f
          );
          break;
        case 24:
          Sa(
            u,
            f,
            m,
            b,
            r
          ), r && _ & 2048 && jc(f.alternate, f);
          break;
        default:
          Sa(
            u,
            f,
            m,
            b,
            r
          );
      }
      e = e.sibling;
    }
  }
  function Or(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, r = a.flags;
        switch (a.tag) {
          case 22:
            Or(n, a), r & 2048 && Nc(
              a.alternate,
              a
            );
            break;
          case 24:
            Or(n, a), r & 2048 && jc(a.alternate, a);
            break;
          default:
            Or(n, a);
        }
        e = e.sibling;
      }
  }
  var _r = 8192;
  function Ca(t, e, n) {
    if (t.subtreeFlags & _r)
      for (t = t.child; t !== null; )
        ly(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function ly(t, e, n) {
    switch (t.tag) {
      case 26:
        Ca(
          t,
          e,
          n
        ), t.flags & _r && t.memoizedState !== null && r1(
          n,
          tn,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ca(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var a = tn;
        tn = su(t.stateNode.containerInfo), Ca(
          t,
          e,
          n
        ), tn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = _r, _r = 16777216, Ca(
          t,
          e,
          n
        ), _r = a) : Ca(
          t,
          e,
          n
        ));
        break;
      default:
        Ca(
          t,
          e,
          n
        );
    }
  }
  function ay(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function zr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          re = a, iy(
            a,
            t
          );
        }
      ay(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ry(t), t = t.sibling;
  }
  function ry(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zr(t), t.flags & 2048 && Jn(9, t, t.return);
        break;
      case 3:
        zr(t);
        break;
      case 12:
        zr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Wi(t)) : zr(t);
        break;
      default:
        zr(t);
    }
  }
  function Wi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          re = a, iy(
            a,
            t
          );
        }
      ay(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, e, e.return), Wi(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Wi(e));
          break;
        default:
          Wi(e);
      }
      t = t.sibling;
    }
  }
  function iy(t, e) {
    for (; re !== null; ) {
      var n = re;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          dr(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, re = a;
      else
        t: for (n = t; re !== null; ) {
          a = re;
          var r = a.sibling, u = a.return;
          if (F0(a), a === n) {
            re = null;
            break t;
          }
          if (r !== null) {
            r.return = u, re = r;
            break t;
          }
          re = u;
        }
    }
  }
  var Sg = {
    getCacheForType: function(t) {
      var e = ce(Wt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ce(Wt).controller.signal;
    }
  }, Cg = typeof WeakMap == "function" ? WeakMap : Map, Et = 0, Ht = null, ht = null, vt = 0, zt = 0, we = null, Fn = !1, Aa = !1, Hc = !1, Rn = 0, Vt = 0, Wn = 0, Rl = 0, Lc = 0, Ne = 0, xa = 0, Dr = null, Ee = null, kc = !1, Ii = 0, uy = 0, Pi = 1 / 0, tu = null, In = null, ne = 0, Pn = null, Ta = null, Bn = 0, Gc = 0, qc = null, oy = null, Rr = 0, $c = null;
  function je() {
    return (Et & 2) !== 0 && vt !== 0 ? vt & -vt : R.T !== null ? Kc() : Tf();
  }
  function cy() {
    if (Ne === 0)
      if ((vt & 536870912) === 0 || Ct) {
        var t = oi;
        oi <<= 1, (oi & 3932160) === 0 && (oi = 262144), Ne = t;
      } else Ne = 536870912;
    return t = Be.current, t !== null && (t.flags |= 32), Ne;
  }
  function Me(t, e, n) {
    (t === Ht && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (Ea(t, 0), tl(
      t,
      vt,
      Ne,
      !1
    )), Ia(t, n), ((Et & 2) === 0 || t !== Ht) && (t === Ht && ((Et & 2) === 0 && (Rl |= n), Vt === 4 && tl(
      t,
      vt,
      Ne,
      !1
    )), on(t));
  }
  function sy(t, e, n) {
    if ((Et & 6) !== 0) throw Error(c(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Wa(t, e), r = a ? Tg(t, e) : Xc(t, e, !0), u = a;
    do {
      if (r === 0) {
        Aa && !a && tl(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !Ag(n)) {
          r = Xc(t, e, !1), u = !1;
          continue;
        }
        if (r === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              r = Dr;
              var b = m.current.memoizedState.isDehydrated;
              if (b && (Ea(m, f).flags |= 256), f = Xc(
                m,
                f,
                !1
              ), f !== 2) {
                if (Hc && !b) {
                  m.errorRecoveryDisabledLanes |= u, Rl |= u, r = 4;
                  break t;
                }
                u = Ee, Ee = r, u !== null && (Ee === null ? Ee = u : Ee.push.apply(
                  Ee,
                  u
                ));
              }
              r = f;
            }
            if (u = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Ea(t, 0), tl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = r, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              tl(
                a,
                e,
                Ne,
                !Fn
              );
              break t;
            case 2:
              Ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (r = Ii + 300 - ye(), 10 < r)) {
            if (tl(
              a,
              e,
              Ne,
              !Fn
            ), si(a, 0, !0) !== 0) break t;
            Bn = e, a.timeoutHandle = qy(
              fy.bind(
                null,
                a,
                n,
                Ee,
                tu,
                kc,
                e,
                Ne,
                Rl,
                xa,
                Fn,
                u,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break t;
          }
          fy(
            a,
            n,
            Ee,
            tu,
            kc,
            e,
            Ne,
            Rl,
            xa,
            Fn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    on(t);
  }
  function fy(t, e, n, a, r, u, f, m, b, _, w, G, D, U) {
    if (t.timeoutHandle = -1, G = e.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: gn
      }, ly(
        e,
        u,
        G
      );
      var et = (u & 62914560) === u ? Ii - ye() : (u & 4194048) === u ? uy - ye() : 0;
      if (et = i1(
        G,
        et
      ), et !== null) {
        Bn = u, t.cancelPendingCommit = et(
          by.bind(
            null,
            t,
            e,
            u,
            n,
            a,
            r,
            f,
            m,
            b,
            w,
            G,
            null,
            D,
            U
          )
        ), tl(t, u, f, !_);
        return;
      }
    }
    by(
      t,
      e,
      u,
      n,
      a,
      r,
      f,
      m,
      b
    );
  }
  function Ag(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var r = n[a], u = r.getSnapshot;
          r = r.value;
          try {
            if (!De(u(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function tl(t, e, n, a) {
    e &= ~Lc, e &= ~Rl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var r = e; 0 < r; ) {
      var u = 31 - ze(r), f = 1 << u;
      a[u] = -1, r &= ~f;
    }
    n !== 0 && Cf(t, n, e);
  }
  function eu() {
    return (Et & 6) === 0 ? (Br(0), !1) : !0;
  }
  function Yc() {
    if (ht !== null) {
      if (zt === 0)
        var t = ht.return;
      else
        t = ht, Cn = Al = null, rc(t), pa = null, mr = 0, t = ht;
      for (; t !== null; )
        $0(t.alternate, t), t = t.return;
      ht = null;
    }
  }
  function Ea(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, $g(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Bn = 0, Yc(), Ht = t, ht = n = bn(t.current, null), vt = e, zt = 0, we = null, Fn = !1, Aa = Wa(t, e), Hc = !1, xa = Ne = Lc = Rl = Wn = Vt = 0, Ee = Dr = null, kc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var r = 31 - ze(a), u = 1 << r;
        e |= t[r], a &= ~u;
      }
    return Rn = e, Ai(), n;
  }
  function dy(t, e) {
    dt = null, R.H = Ar, e === ma || e === Di ? (e = _d(), zt = 3) : e === Zo ? (e = _d(), zt = 4) : zt = e === Cc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, we = e, ht === null && (Vt = 1, Xi(
      t,
      Xe(e, t.current)
    ));
  }
  function yy() {
    var t = Be.current;
    return t === null ? !0 : (vt & 4194048) === vt ? Ke === null : (vt & 62914560) === vt || (vt & 536870912) !== 0 ? t === Ke : !1;
  }
  function my() {
    var t = R.H;
    return R.H = Ar, t === null ? Ar : t;
  }
  function py() {
    var t = R.A;
    return R.A = Sg, t;
  }
  function nu() {
    Vt = 4, Fn || (vt & 4194048) !== vt && Be.current !== null || (Aa = !0), (Wn & 134217727) === 0 && (Rl & 134217727) === 0 || Ht === null || tl(
      Ht,
      vt,
      Ne,
      !1
    );
  }
  function Xc(t, e, n) {
    var a = Et;
    Et |= 2;
    var r = my(), u = py();
    (Ht !== t || vt !== e) && (tu = null, Ea(t, e)), e = !1;
    var f = Vt;
    t: do
      try {
        if (zt !== 0 && ht !== null) {
          var m = ht, b = we;
          switch (zt) {
            case 8:
              Yc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Be.current === null && (e = !0);
              var _ = zt;
              if (zt = 0, we = null, Ma(t, m, b, _), n && Aa) {
                f = 0;
                break t;
              }
              break;
            default:
              _ = zt, zt = 0, we = null, Ma(t, m, b, _);
          }
        }
        xg(), f = Vt;
        break;
      } catch (w) {
        dy(t, w);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Cn = Al = null, Et = a, R.H = r, R.A = u, ht === null && (Ht = null, vt = 0, Ai()), f;
  }
  function xg() {
    for (; ht !== null; ) hy(ht);
  }
  function Tg(t, e) {
    var n = Et;
    Et |= 2;
    var a = my(), r = py();
    Ht !== t || vt !== e ? (tu = null, Pi = ye() + 500, Ea(t, e)) : Aa = Wa(
      t,
      e
    );
    t: do
      try {
        if (zt !== 0 && ht !== null) {
          e = ht;
          var u = we;
          e: switch (zt) {
            case 1:
              zt = 0, we = null, Ma(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Md(u)) {
                zt = 0, we = null, gy(e);
                break;
              }
              e = function() {
                zt !== 2 && zt !== 9 || Ht !== t || (zt = 7), on(t);
              }, u.then(e, e);
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              Md(u) ? (zt = 0, we = null, gy(e)) : (zt = 0, we = null, Ma(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (ht.tag) {
                case 26:
                  f = ht.memoizedState;
                case 5:
                case 27:
                  var m = ht;
                  if (f ? nm(f) : m.stateNode.complete) {
                    zt = 0, we = null;
                    var b = m.sibling;
                    if (b !== null) ht = b;
                    else {
                      var _ = m.return;
                      _ !== null ? (ht = _, lu(_)) : ht = null;
                    }
                    break e;
                  }
              }
              zt = 0, we = null, Ma(t, e, u, 5);
              break;
            case 6:
              zt = 0, we = null, Ma(t, e, u, 6);
              break;
            case 8:
              Yc(), Vt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Eg();
        break;
      } catch (w) {
        dy(t, w);
      }
    while (!0);
    return Cn = Al = null, R.H = a, R.A = r, Et = n, ht !== null ? 0 : (Ht = null, vt = 0, Ai(), Vt);
  }
  function Eg() {
    for (; ht !== null && !yl(); )
      hy(ht);
  }
  function hy(t) {
    var e = G0(t.alternate, t, Rn);
    t.memoizedProps = t.pendingProps, e === null ? lu(t) : ht = e;
  }
  function gy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = w0(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          vt
        );
        break;
      case 11:
        e = w0(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          vt
        );
        break;
      case 5:
        rc(e);
      default:
        $0(n, e), e = ht = pd(e, Rn), e = G0(n, e, Rn);
    }
    t.memoizedProps = t.pendingProps, e === null ? lu(t) : ht = e;
  }
  function Ma(t, e, n, a) {
    Cn = Al = null, rc(e), pa = null, mr = 0;
    var r = e.return;
    try {
      if (yg(
        t,
        r,
        e,
        n,
        vt
      )) {
        Vt = 1, Xi(
          t,
          Xe(n, t.current)
        ), ht = null;
        return;
      }
    } catch (u) {
      if (r !== null) throw ht = r, u;
      Vt = 1, Xi(
        t,
        Xe(n, t.current)
      ), ht = null;
      return;
    }
    e.flags & 32768 ? (Ct || a === 1 ? t = !0 : Aa || (vt & 536870912) !== 0 ? t = !1 : (Fn = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Be.current, a !== null && a.tag === 13 && (a.flags |= 16384))), vy(e, t)) : lu(e);
  }
  function lu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        vy(
          e,
          Fn
        );
        return;
      }
      t = e.return;
      var n = hg(
        e.alternate,
        e,
        Rn
      );
      if (n !== null) {
        ht = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function vy(t, e) {
    do {
      var n = gg(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, ht = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        ht = t;
        return;
      }
      ht = t = n;
    } while (t !== null);
    Vt = 6, ht = null;
  }
  function by(t, e, n, a, r, u, f, m, b) {
    t.cancelPendingCommit = null;
    do
      au();
    while (ne !== 0);
    if ((Et & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (u = e.lanes | e.childLanes, u |= Bo, ah(
        t,
        n,
        u,
        f,
        m,
        b
      ), t === Ht && (ht = Ht = null, vt = 0), Ta = e, Pn = t, Bn = n, Gc = u, qc = r, oy = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, zg(ie, function() {
        return Ty(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = R.T, R.T = null, r = X.p, X.p = 2, f = Et, Et |= 4;
        try {
          vg(t, e, n);
        } finally {
          Et = f, X.p = r, R.T = a;
        }
      }
      ne = 1, Sy(), Cy(), Ay();
    }
  }
  function Sy() {
    if (ne === 1) {
      ne = 0;
      var t = Pn, e = Ta, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var a = X.p;
        X.p = 2;
        var r = Et;
        Et |= 4;
        try {
          ty(e, t);
          var u = ns, f = id(t.containerInfo), m = u.focusedElem, b = u.selectionRange;
          if (f !== m && m && m.ownerDocument && rd(
            m.ownerDocument.documentElement,
            m
          )) {
            if (b !== null && Oo(m)) {
              var _ = b.start, w = b.end;
              if (w === void 0 && (w = _), "selectionStart" in m)
                m.selectionStart = _, m.selectionEnd = Math.min(
                  w,
                  m.value.length
                );
              else {
                var G = m.ownerDocument || document, D = G && G.defaultView || window;
                if (D.getSelection) {
                  var U = D.getSelection(), et = m.textContent.length, ct = Math.min(b.start, et), Nt = b.end === void 0 ? ct : Math.min(b.end, et);
                  !U.extend && ct > Nt && (f = Nt, Nt = ct, ct = f);
                  var E = ad(
                    m,
                    ct
                  ), C = ad(
                    m,
                    Nt
                  );
                  if (E && C && (U.rangeCount !== 1 || U.anchorNode !== E.node || U.anchorOffset !== E.offset || U.focusNode !== C.node || U.focusOffset !== C.offset)) {
                    var O = G.createRange();
                    O.setStart(E.node, E.offset), U.removeAllRanges(), ct > Nt ? (U.addRange(O), U.extend(C.node, C.offset)) : (O.setEnd(C.node, C.offset), U.addRange(O));
                  }
                }
              }
            }
            for (G = [], U = m; U = U.parentNode; )
              U.nodeType === 1 && G.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < G.length; m++) {
              var k = G[m];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          hu = !!es, ns = es = null;
        } finally {
          Et = r, X.p = a, R.T = n;
        }
      }
      t.current = e, ne = 2;
    }
  }
  function Cy() {
    if (ne === 2) {
      ne = 0;
      var t = Pn, e = Ta, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var a = X.p;
        X.p = 2;
        var r = Et;
        Et |= 4;
        try {
          J0(t, e.alternate, e);
        } finally {
          Et = r, X.p = a, R.T = n;
        }
      }
      ne = 3;
    }
  }
  function Ay() {
    if (ne === 4 || ne === 3) {
      ne = 0, lo();
      var t = Pn, e = Ta, n = Bn, a = oy;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ne = 5 : (ne = 0, Ta = Pn = null, xy(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (r === 0 && (In = null), uo(n), e = e.stateNode, _e && typeof _e.onCommitFiberRoot == "function")
        try {
          _e.onCommitFiberRoot(
            Fa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = R.T, r = X.p, X.p = 2, R.T = null;
        try {
          for (var u = t.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
            u(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          R.T = e, X.p = r;
        }
      }
      (Bn & 3) !== 0 && au(), on(t), r = t.pendingLanes, (n & 261930) !== 0 && (r & 42) !== 0 ? t === $c ? Rr++ : (Rr = 0, $c = t) : Rr = 0, Br(0);
    }
  }
  function xy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, dr(e)));
  }
  function au() {
    return Sy(), Cy(), Ay(), Ty();
  }
  function Ty() {
    if (ne !== 5) return !1;
    var t = Pn, e = Gc;
    Gc = 0;
    var n = uo(Bn), a = R.T, r = X.p;
    try {
      X.p = 32 > n ? 32 : n, R.T = null, n = qc, qc = null;
      var u = Pn, f = Bn;
      if (ne = 0, Ta = Pn = null, Bn = 0, (Et & 6) !== 0) throw Error(c(331));
      var m = Et;
      if (Et |= 4, ry(u.current), ny(
        u,
        u.current,
        f,
        n
      ), Et = m, Br(0, !1), _e && typeof _e.onPostCommitFiberRoot == "function")
        try {
          _e.onPostCommitFiberRoot(Fa, u);
        } catch {
        }
      return !0;
    } finally {
      X.p = r, R.T = a, xy(t, e);
    }
  }
  function Ey(t, e, n) {
    e = Xe(n, e), e = Sc(t.stateNode, e, 2), t = Qn(t, e, 2), t !== null && (Ia(t, 2), on(t));
  }
  function Dt(t, e, n) {
    if (t.tag === 3)
      Ey(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ey(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (In === null || !In.has(a))) {
            t = Xe(n, t), n = M0(2), a = Qn(e, n, 2), a !== null && (O0(
              n,
              a,
              e,
              t
            ), Ia(a, 2), on(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Vc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Cg();
      var r = /* @__PURE__ */ new Set();
      a.set(e, r);
    } else
      r = a.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(e, r));
    r.has(n) || (Hc = !0, r.add(n), t = Mg.bind(null, t, e, n), e.then(t, t));
  }
  function Mg(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ht === t && (vt & n) === n && (Vt === 4 || Vt === 3 && (vt & 62914560) === vt && 300 > ye() - Ii ? (Et & 2) === 0 && Ea(t, 0) : Lc |= n, xa === vt && (xa = 0)), on(t);
  }
  function My(t, e) {
    e === 0 && (e = Sf()), t = bl(t, e), t !== null && (Ia(t, e), on(t));
  }
  function Og(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), My(t, n);
  }
  function _g(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(e), My(t, n);
  }
  function zg(t, e) {
    return jn(t, e);
  }
  var ru = null, Oa = null, Qc = !1, iu = !1, Zc = !1, el = 0;
  function on(t) {
    t !== Oa && t.next === null && (Oa === null ? ru = Oa = t : Oa = Oa.next = t), iu = !0, Qc || (Qc = !0, Rg());
  }
  function Br(t, e) {
    if (!Zc && iu) {
      Zc = !0;
      do
        for (var n = !1, a = ru; a !== null; ) {
          if (t !== 0) {
            var r = a.pendingLanes;
            if (r === 0) var u = 0;
            else {
              var f = a.suspendedLanes, m = a.pingedLanes;
              u = (1 << 31 - ze(42 | t) + 1) - 1, u &= r & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Dy(a, u));
          } else
            u = vt, u = si(
              a,
              a === Ht ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Wa(a, u) || (n = !0, Dy(a, u));
          a = a.next;
        }
      while (n);
      Zc = !1;
    }
  }
  function Dg() {
    Oy();
  }
  function Oy() {
    iu = Qc = !1;
    var t = 0;
    el !== 0 && qg() && (t = el);
    for (var e = ye(), n = null, a = ru; a !== null; ) {
      var r = a.next, u = _y(a, e);
      u === 0 ? (a.next = null, n === null ? ru = r : n.next = r, r === null && (Oa = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (iu = !0)), a = r;
    }
    ne !== 0 && ne !== 5 || Br(t), el !== 0 && (el = 0);
  }
  function _y(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, r = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - ze(u), m = 1 << f, b = r[f];
      b === -1 ? ((m & n) === 0 || (m & a) !== 0) && (r[f] = lh(m, e)) : b <= e && (t.expiredLanes |= m), u &= ~m;
    }
    if (e = Ht, n = vt, n = si(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && dl(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Wa(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && dl(a), uo(n)) {
        case 2:
        case 8:
          n = qt;
          break;
        case 32:
          n = ie;
          break;
        case 268435456:
          n = Zl;
          break;
        default:
          n = ie;
      }
      return a = zy.bind(null, t), n = jn(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && dl(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function zy(t, e) {
    if (ne !== 0 && ne !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (au() && t.callbackNode !== n)
      return null;
    var a = vt;
    return a = si(
      t,
      t === Ht ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (sy(t, a, e), _y(t, ye()), t.callbackNode != null && t.callbackNode === n ? zy.bind(null, t) : null);
  }
  function Dy(t, e) {
    if (au()) return null;
    sy(t, e, !0);
  }
  function Rg() {
    Yg(function() {
      (Et & 6) !== 0 ? jn(
        ge,
        Dg
      ) : Oy();
    });
  }
  function Kc() {
    if (el === 0) {
      var t = da;
      t === 0 && (t = ui, ui <<= 1, (ui & 261888) === 0 && (ui = 256)), el = t;
    }
    return el;
  }
  function Ry(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : mi("" + t);
  }
  function By(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function Bg(t, e, n, a, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var u = Ry(
        (r[Se] || null).action
      ), f = a.submitter;
      f && (e = (e = f[Se] || null) ? Ry(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var m = new vi(
        "action",
        "action",
        null,
        a,
        r
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (el !== 0) {
                  var b = f ? By(r, f) : new FormData(r);
                  mc(
                    n,
                    {
                      pending: !0,
                      data: b,
                      method: r.method,
                      action: u
                    },
                    null,
                    b
                  );
                }
              } else
                typeof u == "function" && (m.preventDefault(), b = f ? By(r, f) : new FormData(r), mc(
                  n,
                  {
                    pending: !0,
                    data: b,
                    method: r.method,
                    action: u
                  },
                  u,
                  b
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var Jc = 0; Jc < Ro.length; Jc++) {
    var Fc = Ro[Jc], Ug = Fc.toLowerCase(), wg = Fc[0].toUpperCase() + Fc.slice(1);
    Pe(
      Ug,
      "on" + wg
    );
  }
  Pe(cd, "onAnimationEnd"), Pe(sd, "onAnimationIteration"), Pe(fd, "onAnimationStart"), Pe("dblclick", "onDoubleClick"), Pe("focusin", "onFocus"), Pe("focusout", "onBlur"), Pe(Fh, "onTransitionRun"), Pe(Wh, "onTransitionStart"), Pe(Ih, "onTransitionCancel"), Pe(dd, "onTransitionEnd"), Il("onMouseEnter", ["mouseout", "mouseover"]), Il("onMouseLeave", ["mouseout", "mouseover"]), Il("onPointerEnter", ["pointerout", "pointerover"]), Il("onPointerLeave", ["pointerout", "pointerover"]), pl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), pl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), pl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), pl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), pl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), pl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ng = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ur)
  );
  function Uy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], r = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f], b = m.instance, _ = m.currentTarget;
            if (m = m.listener, b !== u && r.isPropagationStopped())
              break t;
            u = m, r.currentTarget = _;
            try {
              u(r);
            } catch (w) {
              Ci(w);
            }
            r.currentTarget = null, u = b;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (m = a[f], b = m.instance, _ = m.currentTarget, m = m.listener, b !== u && r.isPropagationStopped())
              break t;
            u = m, r.currentTarget = _;
            try {
              u(r);
            } catch (w) {
              Ci(w);
            }
            r.currentTarget = null, u = b;
          }
      }
    }
  }
  function gt(t, e) {
    var n = e[oo];
    n === void 0 && (n = e[oo] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (wy(e, t, 2, !1), n.add(a));
  }
  function Wc(t, e, n) {
    var a = 0;
    e && (a |= 4), wy(
      n,
      t,
      a,
      e
    );
  }
  var uu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ic(t) {
    if (!t[uu]) {
      t[uu] = !0, Of.forEach(function(n) {
        n !== "selectionchange" && (Ng.has(n) || Wc(n, !1, t), Wc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[uu] || (e[uu] = !0, Wc("selectionchange", !1, e));
    }
  }
  function wy(t, e, n, a) {
    switch (cm(e)) {
      case 2:
        var r = c1;
        break;
      case 8:
        r = s1;
        break;
      default:
        r = ys;
    }
    n = r.bind(
      null,
      e,
      n,
      t
    ), r = void 0, !vo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), a ? r !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
      passive: r
    }) : t.addEventListener(e, n, !1);
  }
  function Pc(t, e, n, a, r) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var m = a.stateNode.containerInfo;
          if (m === r) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === r)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = Jl(m), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              a = u = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    kf(function() {
      var _ = u, w = ho(n), G = [];
      t: {
        var D = yd.get(t);
        if (D !== void 0) {
          var U = vi, et = t;
          switch (t) {
            case "keypress":
              if (hi(n) === 0) break t;
            case "keydown":
            case "keyup":
              U = _h;
              break;
            case "focusin":
              et = "focus", U = Ao;
              break;
            case "focusout":
              et = "blur", U = Ao;
              break;
            case "beforeblur":
            case "afterblur":
              U = Ao;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = $f;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = hh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Rh;
              break;
            case cd:
            case sd:
            case fd:
              U = bh;
              break;
            case dd:
              U = Uh;
              break;
            case "scroll":
            case "scrollend":
              U = mh;
              break;
            case "wheel":
              U = Nh;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Ch;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Xf;
              break;
            case "toggle":
            case "beforetoggle":
              U = Hh;
          }
          var ct = (e & 4) !== 0, Nt = !ct && (t === "scroll" || t === "scrollend"), E = ct ? D !== null ? D + "Capture" : null : D;
          ct = [];
          for (var C = _, O; C !== null; ) {
            var k = C;
            if (O = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || O === null || E === null || (k = er(C, E), k != null && ct.push(
              wr(C, k, O)
            )), Nt) break;
            C = C.return;
          }
          0 < ct.length && (D = new U(
            D,
            et,
            null,
            n,
            w
          ), G.push({ event: D, listeners: ct }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (D = t === "mouseover" || t === "pointerover", U = t === "mouseout" || t === "pointerout", D && n !== po && (et = n.relatedTarget || n.fromElement) && (Jl(et) || et[Kl]))
            break t;
          if ((U || D) && (D = w.window === w ? w : (D = w.ownerDocument) ? D.defaultView || D.parentWindow : window, U ? (et = n.relatedTarget || n.toElement, U = _, et = et ? Jl(et) : null, et !== null && (Nt = d(et), ct = et.tag, et !== Nt || ct !== 5 && ct !== 27 && ct !== 6) && (et = null)) : (U = null, et = _), U !== et)) {
            if (ct = $f, k = "onMouseLeave", E = "onMouseEnter", C = "mouse", (t === "pointerout" || t === "pointerover") && (ct = Xf, k = "onPointerLeave", E = "onPointerEnter", C = "pointer"), Nt = U == null ? D : tr(U), O = et == null ? D : tr(et), D = new ct(
              k,
              C + "leave",
              U,
              n,
              w
            ), D.target = Nt, D.relatedTarget = O, k = null, Jl(w) === _ && (ct = new ct(
              E,
              C + "enter",
              et,
              n,
              w
            ), ct.target = O, ct.relatedTarget = Nt, k = ct), Nt = k, U && et)
              e: {
                for (ct = jg, E = U, C = et, O = 0, k = E; k; k = ct(k))
                  O++;
                k = 0;
                for (var ut = C; ut; ut = ct(ut))
                  k++;
                for (; 0 < O - k; )
                  E = ct(E), O--;
                for (; 0 < k - O; )
                  C = ct(C), k--;
                for (; O--; ) {
                  if (E === C || C !== null && E === C.alternate) {
                    ct = E;
                    break e;
                  }
                  E = ct(E), C = ct(C);
                }
                ct = null;
              }
            else ct = null;
            U !== null && Ny(
              G,
              D,
              U,
              ct,
              !1
            ), et !== null && Nt !== null && Ny(
              G,
              Nt,
              et,
              ct,
              !0
            );
          }
        }
        t: {
          if (D = _ ? tr(_) : window, U = D.nodeName && D.nodeName.toLowerCase(), U === "select" || U === "input" && D.type === "file")
            var xt = If;
          else if (Ff(D))
            if (Pf)
              xt = Zh;
            else {
              xt = Vh;
              var rt = Xh;
            }
          else
            U = D.nodeName, !U || U.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? _ && mo(_.elementType) && (xt = If) : xt = Qh;
          if (xt && (xt = xt(t, _))) {
            Wf(
              G,
              xt,
              n,
              w
            );
            break t;
          }
          rt && rt(t, D, _), t === "focusout" && _ && D.type === "number" && _.memoizedProps.value != null && yo(D, "number", D.value);
        }
        switch (rt = _ ? tr(_) : window, t) {
          case "focusin":
            (Ff(rt) || rt.contentEditable === "true") && (aa = rt, _o = _, cr = null);
            break;
          case "focusout":
            cr = _o = aa = null;
            break;
          case "mousedown":
            zo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zo = !1, ud(G, n, w);
            break;
          case "selectionchange":
            if (Jh) break;
          case "keydown":
          case "keyup":
            ud(G, n, w);
        }
        var yt;
        if (To)
          t: {
            switch (t) {
              case "compositionstart":
                var bt = "onCompositionStart";
                break t;
              case "compositionend":
                bt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                bt = "onCompositionUpdate";
                break t;
            }
            bt = void 0;
          }
        else
          la ? Kf(t, n) && (bt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (bt = "onCompositionStart");
        bt && (Vf && n.locale !== "ko" && (la || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && la && (yt = Gf()) : (kn = w, bo = "value" in kn ? kn.value : kn.textContent, la = !0)), rt = ou(_, bt), 0 < rt.length && (bt = new Yf(
          bt,
          t,
          null,
          n,
          w
        ), G.push({ event: bt, listeners: rt }), yt ? bt.data = yt : (yt = Jf(n), yt !== null && (bt.data = yt)))), (yt = kh ? Gh(t, n) : qh(t, n)) && (bt = ou(_, "onBeforeInput"), 0 < bt.length && (rt = new Yf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          w
        ), G.push({
          event: rt,
          listeners: bt
        }), rt.data = yt)), Bg(
          G,
          t,
          _,
          n,
          w
        );
      }
      Uy(G, e);
    });
  }
  function wr(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function ou(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var r = t, u = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || u === null || (r = er(t, n), r != null && a.unshift(
        wr(t, r, u)
      ), r = er(t, e), r != null && a.push(
        wr(t, r, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function jg(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ny(t, e, n, a, r) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var m = n, b = m.alternate, _ = m.stateNode;
      if (m = m.tag, b !== null && b === a) break;
      m !== 5 && m !== 26 && m !== 27 || _ === null || (b = _, r ? (_ = er(n, u), _ != null && f.unshift(
        wr(n, _, b)
      )) : r || (_ = er(n, u), _ != null && f.push(
        wr(n, _, b)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Hg = /\r\n?/g, Lg = /\u0000|\uFFFD/g;
  function jy(t) {
    return (typeof t == "string" ? t : "" + t).replace(Hg, `
`).replace(Lg, "");
  }
  function Hy(t, e) {
    return e = jy(e), jy(t) === e;
  }
  function wt(t, e, n, a, r, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ta(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ta(t, "" + a);
        break;
      case "className":
        di(t, "class", a);
        break;
      case "tabIndex":
        di(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        di(t, n, a);
        break;
      case "style":
        Hf(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          di(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = mi("" + a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (e !== "input" && wt(t, e, "name", r.name, r, null), wt(
            t,
            e,
            "formEncType",
            r.formEncType,
            r,
            null
          ), wt(
            t,
            e,
            "formMethod",
            r.formMethod,
            r,
            null
          ), wt(
            t,
            e,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (wt(t, e, "encType", r.encType, r, null), wt(t, e, "method", r.method, r, null), wt(t, e, "target", r.target, r, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = mi("" + a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = gn);
        break;
      case "onScroll":
        a != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && gt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (r.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = mi("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        gt("beforetoggle", t), gt("toggle", t), fi(t, "popover", a);
        break;
      case "xlinkActuate":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        hn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        hn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        hn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        fi(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = dh.get(n) || n, fi(t, n, a));
    }
  }
  function ts(t, e, n, a, r, u) {
    switch (n) {
      case "style":
        Hf(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (r.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ta(t, a) : (typeof a == "number" || typeof a == "bigint") && ta(t, "" + a);
        break;
      case "onScroll":
        a != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && gt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = gn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_f.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), e = n.slice(2, r ? n.length - 7 : void 0), u = t[Se] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, r), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, r);
              break t;
            }
            n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : fi(t, n, a);
          }
    }
  }
  function fe(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        gt("error", t), gt("load", t);
        var a = !1, r = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  wt(t, e, u, f, n, null);
              }
          }
        r && wt(t, e, "srcSet", n.srcSet, n, null), a && wt(t, e, "src", n.src, n, null);
        return;
      case "input":
        gt("invalid", t);
        var m = u = f = r = null, b = null, _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var w = n[a];
            if (w != null)
              switch (a) {
                case "name":
                  r = w;
                  break;
                case "type":
                  f = w;
                  break;
                case "checked":
                  b = w;
                  break;
                case "defaultChecked":
                  _ = w;
                  break;
                case "value":
                  u = w;
                  break;
                case "defaultValue":
                  m = w;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (w != null)
                    throw Error(c(137, e));
                  break;
                default:
                  wt(t, e, a, w, n, null);
              }
          }
        Uf(
          t,
          u,
          m,
          b,
          _,
          f,
          r,
          !1
        );
        return;
      case "select":
        gt("invalid", t), a = f = u = null;
        for (r in n)
          if (n.hasOwnProperty(r) && (m = n[r], m != null))
            switch (r) {
              case "value":
                u = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                a = m;
              default:
                wt(t, e, r, m, n, null);
            }
        e = u, n = f, t.multiple = !!a, e != null ? Pl(t, !!a, e, !1) : n != null && Pl(t, !!a, n, !0);
        return;
      case "textarea":
        gt("invalid", t), u = r = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (m = n[f], m != null))
            switch (f) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                r = m;
                break;
              case "children":
                u = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(c(91));
                break;
              default:
                wt(t, e, f, m, n, null);
            }
        Nf(t, a, r, u);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && (a = n[b], a != null))
            switch (b) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                wt(t, e, b, a, n, null);
            }
        return;
      case "dialog":
        gt("beforetoggle", t), gt("toggle", t), gt("cancel", t), gt("close", t);
        break;
      case "iframe":
      case "object":
        gt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ur.length; a++)
          gt(Ur[a], t);
        break;
      case "image":
        gt("error", t), gt("load", t);
        break;
      case "details":
        gt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        gt("error", t), gt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in n)
          if (n.hasOwnProperty(_) && (a = n[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                wt(t, e, _, a, n, null);
            }
        return;
      default:
        if (mo(e)) {
          for (w in n)
            n.hasOwnProperty(w) && (a = n[w], a !== void 0 && ts(
              t,
              e,
              w,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (a = n[m], a != null && wt(t, e, m, a, n, null));
  }
  function kg(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, u = null, f = null, m = null, b = null, _ = null, w = null;
        for (U in n) {
          var G = n[U];
          if (n.hasOwnProperty(U) && G != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = G;
              default:
                a.hasOwnProperty(U) || wt(t, e, U, null, a, G);
            }
        }
        for (var D in a) {
          var U = a[D];
          if (G = n[D], a.hasOwnProperty(D) && (U != null || G != null))
            switch (D) {
              case "type":
                u = U;
                break;
              case "name":
                r = U;
                break;
              case "checked":
                _ = U;
                break;
              case "defaultChecked":
                w = U;
                break;
              case "value":
                f = U;
                break;
              case "defaultValue":
                m = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(c(137, e));
                break;
              default:
                U !== G && wt(
                  t,
                  e,
                  D,
                  U,
                  a,
                  G
                );
            }
        }
        fo(
          t,
          f,
          m,
          b,
          _,
          w,
          u,
          r
        );
        return;
      case "select":
        U = f = m = D = null;
        for (u in n)
          if (b = n[u], n.hasOwnProperty(u) && b != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = b;
              default:
                a.hasOwnProperty(u) || wt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  b
                );
            }
        for (r in a)
          if (u = a[r], b = n[r], a.hasOwnProperty(r) && (u != null || b != null))
            switch (r) {
              case "value":
                D = u;
                break;
              case "defaultValue":
                m = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== b && wt(
                  t,
                  e,
                  r,
                  u,
                  a,
                  b
                );
            }
        e = m, n = f, a = U, D != null ? Pl(t, !!n, D, !1) : !!a != !!n && (e != null ? Pl(t, !!n, e, !0) : Pl(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = D = null;
        for (m in n)
          if (r = n[m], n.hasOwnProperty(m) && r != null && !a.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                wt(t, e, m, null, a, r);
            }
        for (f in a)
          if (r = a[f], u = n[f], a.hasOwnProperty(f) && (r != null || u != null))
            switch (f) {
              case "value":
                D = r;
                break;
              case "defaultValue":
                U = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(c(91));
                break;
              default:
                r !== u && wt(t, e, f, r, a, u);
            }
        wf(t, D, U);
        return;
      case "option":
        for (var et in n)
          if (D = n[et], n.hasOwnProperty(et) && D != null && !a.hasOwnProperty(et))
            switch (et) {
              case "selected":
                t.selected = !1;
                break;
              default:
                wt(
                  t,
                  e,
                  et,
                  null,
                  a,
                  D
                );
            }
        for (b in a)
          if (D = a[b], U = n[b], a.hasOwnProperty(b) && D !== U && (D != null || U != null))
            switch (b) {
              case "selected":
                t.selected = D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                wt(
                  t,
                  e,
                  b,
                  D,
                  a,
                  U
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ct in n)
          D = n[ct], n.hasOwnProperty(ct) && D != null && !a.hasOwnProperty(ct) && wt(t, e, ct, null, a, D);
        for (_ in a)
          if (D = a[_], U = n[_], a.hasOwnProperty(_) && D !== U && (D != null || U != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(c(137, e));
                break;
              default:
                wt(
                  t,
                  e,
                  _,
                  D,
                  a,
                  U
                );
            }
        return;
      default:
        if (mo(e)) {
          for (var Nt in n)
            D = n[Nt], n.hasOwnProperty(Nt) && D !== void 0 && !a.hasOwnProperty(Nt) && ts(
              t,
              e,
              Nt,
              void 0,
              a,
              D
            );
          for (w in a)
            D = a[w], U = n[w], !a.hasOwnProperty(w) || D === U || D === void 0 && U === void 0 || ts(
              t,
              e,
              w,
              D,
              a,
              U
            );
          return;
        }
    }
    for (var E in n)
      D = n[E], n.hasOwnProperty(E) && D != null && !a.hasOwnProperty(E) && wt(t, e, E, null, a, D);
    for (G in a)
      D = a[G], U = n[G], !a.hasOwnProperty(G) || D === U || D == null && U == null || wt(t, e, G, D, a, U);
  }
  function Ly(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Gg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var r = n[a], u = r.transferSize, f = r.initiatorType, m = r.duration;
        if (u && m && Ly(f)) {
          for (f = 0, m = r.responseEnd, a += 1; a < n.length; a++) {
            var b = n[a], _ = b.startTime;
            if (_ > m) break;
            var w = b.transferSize, G = b.initiatorType;
            w && Ly(G) && (b = b.responseEnd, f += w * (b < m ? 1 : (m - _) / (b - _)));
          }
          if (--a, e += 8 * (u + f) / (r.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var es = null, ns = null;
  function cu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ky(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gy(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function ls(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var as = null;
  function qg() {
    var t = window.event;
    return t && t.type === "popstate" ? t === as ? !1 : (as = t, !0) : (as = null, !1);
  }
  var qy = typeof setTimeout == "function" ? setTimeout : void 0, $g = typeof clearTimeout == "function" ? clearTimeout : void 0, $y = typeof Promise == "function" ? Promise : void 0, Yg = typeof queueMicrotask == "function" ? queueMicrotask : typeof $y < "u" ? function(t) {
    return $y.resolve(null).then(t).catch(Xg);
  } : qy;
  function Xg(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function nl(t) {
    return t === "head";
  }
  function Yy(t, e) {
    var n = e, a = 0;
    do {
      var r = n.nextSibling;
      if (t.removeChild(n), r && r.nodeType === 8)
        if (n = r.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(r), Ra(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          Nr(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, Nr(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, m = u.nodeName;
            u[Pa] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && Nr(t.ownerDocument.body);
      n = r;
    } while (n);
    Ra(e);
  }
  function Xy(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function rs(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rs(n), co(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Vg(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Pa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== r.rel || t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || t.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (r.src == null ? null : r.src) || t.getAttribute("type") !== (r.type == null ? null : r.type) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Je(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Qg(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function Vy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function is(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function us(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Zg(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Je(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var os = null;
  function Qy(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Je(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Zy(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ky(t, e, n) {
    switch (e = cu(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function Nr(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    co(t);
  }
  var Fe = /* @__PURE__ */ new Map(), Jy = /* @__PURE__ */ new Set();
  function su(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Un = X.d;
  X.d = {
    f: Kg,
    r: Jg,
    D: Fg,
    C: Wg,
    L: Ig,
    m: Pg,
    X: e1,
    S: t1,
    M: n1
  };
  function Kg() {
    var t = Un.f(), e = eu();
    return t || e;
  }
  function Jg(t) {
    var e = Fl(t);
    e !== null && e.tag === 5 && e.type === "form" ? d0(e) : Un.r(t);
  }
  var _a = typeof document > "u" ? null : document;
  function Fy(t, e, n) {
    var a = _a;
    if (a && typeof e == "string" && e) {
      var r = $e(e);
      r = 'link[rel="' + t + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), Jy.has(r) || (Jy.add(r), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(r) === null && (e = a.createElement("link"), fe(e, "link", t), ae(e), a.head.appendChild(e)));
    }
  }
  function Fg(t) {
    Un.D(t), Fy("dns-prefetch", t, null);
  }
  function Wg(t, e) {
    Un.C(t, e), Fy("preconnect", t, e);
  }
  function Ig(t, e, n) {
    Un.L(t, e, n);
    var a = _a;
    if (a && t && e) {
      var r = 'link[rel="preload"][as="' + $e(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + $e(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (r += '[imagesizes="' + $e(
        n.imageSizes
      ) + '"]')) : r += '[href="' + $e(t) + '"]';
      var u = r;
      switch (e) {
        case "style":
          u = za(t);
          break;
        case "script":
          u = Da(t);
      }
      Fe.has(u) || (t = A(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Fe.set(u, t), a.querySelector(r) !== null || e === "style" && a.querySelector(jr(u)) || e === "script" && a.querySelector(Hr(u)) || (e = a.createElement("link"), fe(e, "link", t), ae(e), a.head.appendChild(e)));
    }
  }
  function Pg(t, e) {
    Un.m(t, e);
    var n = _a;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", r = 'link[rel="modulepreload"][as="' + $e(a) + '"][href="' + $e(t) + '"]', u = r;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Da(t);
      }
      if (!Fe.has(u) && (t = A({ rel: "modulepreload", href: t }, e), Fe.set(u, t), n.querySelector(r) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Hr(u)))
              return;
        }
        a = n.createElement("link"), fe(a, "link", t), ae(a), n.head.appendChild(a);
      }
    }
  }
  function t1(t, e, n) {
    Un.S(t, e, n);
    var a = _a;
    if (a && t) {
      var r = Wl(a).hoistableStyles, u = za(t);
      e = e || "default";
      var f = r.get(u);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = a.querySelector(
          jr(u)
        ))
          m.loading = 5;
        else {
          t = A(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Fe.get(u)) && cs(t, n);
          var b = f = a.createElement("link");
          ae(b), fe(b, "link", t), b._p = new Promise(function(_, w) {
            b.onload = _, b.onerror = w;
          }), b.addEventListener("load", function() {
            m.loading |= 1;
          }), b.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, fu(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, r.set(u, f);
      }
    }
  }
  function e1(t, e) {
    Un.X(t, e);
    var n = _a;
    if (n && t) {
      var a = Wl(n).hoistableScripts, r = Da(t), u = a.get(r);
      u || (u = n.querySelector(Hr(r)), u || (t = A({ src: t, async: !0 }, e), (e = Fe.get(r)) && ss(t, e), u = n.createElement("script"), ae(u), fe(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function n1(t, e) {
    Un.M(t, e);
    var n = _a;
    if (n && t) {
      var a = Wl(n).hoistableScripts, r = Da(t), u = a.get(r);
      u || (u = n.querySelector(Hr(r)), u || (t = A({ src: t, async: !0, type: "module" }, e), (e = Fe.get(r)) && ss(t, e), u = n.createElement("script"), ae(u), fe(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function Wy(t, e, n, a) {
    var r = (r = mt.current) ? su(r) : null;
    if (!r) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = za(n.href), n = Wl(
          r
        ).hoistableStyles, a = n.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = za(n.href);
          var u = Wl(
            r
          ).hoistableStyles, f = u.get(t);
          if (f || (r = r.ownerDocument || r, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, f), (u = r.querySelector(
            jr(t)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Fe.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Fe.set(t, n), u || l1(
            r,
            t,
            n,
            f.state
          ))), e && a === null)
            throw Error(c(528, ""));
          return f;
        }
        if (e && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Da(n), n = Wl(
          r
        ).hoistableScripts, a = n.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function za(t) {
    return 'href="' + $e(t) + '"';
  }
  function jr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Iy(t) {
    return A({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function l1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), fe(e, "link", n), ae(e), t.head.appendChild(e));
  }
  function Da(t) {
    return '[src="' + $e(t) + '"]';
  }
  function Hr(t) {
    return "script[async]" + t;
  }
  function Py(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + $e(n.href) + '"]'
          );
          if (a)
            return e.instance = a, ae(a), a;
          var r = A({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ae(a), fe(a, "style", r), fu(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          r = za(n.href);
          var u = t.querySelector(
            jr(r)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, ae(u), u;
          a = Iy(n), (r = Fe.get(r)) && cs(a, r), u = (t.ownerDocument || t).createElement("link"), ae(u);
          var f = u;
          return f._p = new Promise(function(m, b) {
            f.onload = m, f.onerror = b;
          }), fe(u, "link", a), e.state.loading |= 4, fu(u, n.precedence, t), e.instance = u;
        case "script":
          return u = Da(n.src), (r = t.querySelector(
            Hr(u)
          )) ? (e.instance = r, ae(r), r) : (a = n, (r = Fe.get(u)) && (a = A({}, n), ss(a, r)), t = t.ownerDocument || t, r = t.createElement("script"), ae(r), fe(r, "link", a), t.head.appendChild(r), e.instance = r);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, fu(a, n.precedence, t));
    return e.instance;
  }
  function fu(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = a.length ? a[a.length - 1] : null, u = r, f = 0; f < a.length; f++) {
      var m = a[f];
      if (m.dataset.precedence === e) u = m;
      else if (u !== r) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function cs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function ss(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var du = null;
  function tm(t, e, n) {
    if (du === null) {
      var a = /* @__PURE__ */ new Map(), r = du = /* @__PURE__ */ new Map();
      r.set(n, a);
    } else
      r = du, a = r.get(n), a || (a = /* @__PURE__ */ new Map(), r.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var u = n[r];
      if (!(u[Pa] || u[ue] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var m = a.get(f);
        m ? m.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function em(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function a1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function nm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function r1(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = za(a.href), u = e.querySelector(
          jr(r)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = yu.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, ae(u);
          return;
        }
        u = e.ownerDocument || e, a = Iy(a), (r = Fe.get(r)) && cs(a, r), u = u.createElement("link"), ae(u);
        var f = u;
        f._p = new Promise(function(m, b) {
          f.onload = m, f.onerror = b;
        }), fe(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = yu.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var fs = 0;
  function i1(t, e) {
    return t.stylesheets && t.count === 0 && pu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && pu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && fs === 0 && (fs = 62500 * Gg());
      var r = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && pu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > fs ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(r);
      };
    } : null;
  }
  function yu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) pu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var mu = null;
  function pu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, mu = /* @__PURE__ */ new Map(), e.forEach(u1, t), mu = null, yu.call(t));
  }
  function u1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = mu.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), mu.set(t, n);
        for (var r = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < r.length; u++) {
          var f = r[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      r = e.instance, f = r.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, r), n.set(f, r), this.count++, a = yu.bind(this), r.addEventListener("load", a), r.addEventListener("error", a), u ? u.parentNode.insertBefore(r, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(r, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Lr = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: at,
    _currentValue2: at,
    _threadCount: 0
  };
  function o1(t, e, n, a, r, u, f, m, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ro(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ro(0), this.hiddenUpdates = ro(null), this.identifierPrefix = a, this.onUncaughtError = r, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lm(t, e, n, a, r, u, f, m, b, _, w, G) {
    return t = new o1(
      t,
      e,
      n,
      f,
      b,
      _,
      w,
      G,
      m
    ), e = 1, u === !0 && (e |= 24), u = Re(3, null, null, e), t.current = u, u.stateNode = t, e = Xo(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, Ko(u), t;
  }
  function am(t) {
    return t ? (t = ua, t) : ua;
  }
  function rm(t, e, n, a, r, u) {
    r = am(r), a.context === null ? a.context = r : a.pendingContext = r, a = Vn(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Qn(t, a, e), n !== null && (Me(n, t, e), hr(n, t, e));
  }
  function im(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function ds(t, e) {
    im(t, e), (t = t.alternate) && im(t, e);
  }
  function um(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = bl(t, 67108864);
      e !== null && Me(e, t, 67108864), ds(t, 67108864);
    }
  }
  function om(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = je();
      e = io(e);
      var n = bl(t, e);
      n !== null && Me(n, t, e), ds(t, e);
    }
  }
  var hu = !0;
  function c1(t, e, n, a) {
    var r = R.T;
    R.T = null;
    var u = X.p;
    try {
      X.p = 2, ys(t, e, n, a);
    } finally {
      X.p = u, R.T = r;
    }
  }
  function s1(t, e, n, a) {
    var r = R.T;
    R.T = null;
    var u = X.p;
    try {
      X.p = 8, ys(t, e, n, a);
    } finally {
      X.p = u, R.T = r;
    }
  }
  function ys(t, e, n, a) {
    if (hu) {
      var r = ms(a);
      if (r === null)
        Pc(
          t,
          e,
          a,
          gu,
          n
        ), sm(t, a);
      else if (d1(
        r,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (sm(t, a), e & 4 && -1 < f1.indexOf(t)) {
        for (; r !== null; ) {
          var u = Fl(r);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = ml(u.pendingLanes);
                  if (f !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - ze(f);
                      m.entanglements[1] |= b, f &= ~b;
                    }
                    on(u), (Et & 6) === 0 && (Pi = ye() + 500, Br(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = bl(u, 2), m !== null && Me(m, u, 2), eu(), ds(u, 2);
            }
          if (u = ms(a), u === null && Pc(
            t,
            e,
            a,
            gu,
            n
          ), u === r) break;
          r = u;
        }
        r !== null && a.stopPropagation();
      } else
        Pc(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function ms(t) {
    return t = ho(t), ps(t);
  }
  var gu = null;
  function ps(t) {
    if (gu = null, t = Jl(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return gu = t, null;
  }
  function cm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ii()) {
          case ge:
            return 2;
          case qt:
            return 8;
          case ie:
          case Ge:
            return 32;
          case Zl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hs = !1, ll = null, al = null, rl = null, kr = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map(), il = [], f1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ll = null;
        break;
      case "dragenter":
      case "dragleave":
        al = null;
        break;
      case "mouseover":
      case "mouseout":
        rl = null;
        break;
      case "pointerover":
      case "pointerout":
        kr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gr.delete(e.pointerId);
    }
  }
  function qr(t, e, n, a, r, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [r]
    }, e !== null && (e = Fl(e), e !== null && um(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function d1(t, e, n, a, r) {
    switch (e) {
      case "focusin":
        return ll = qr(
          ll,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "dragenter":
        return al = qr(
          al,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "mouseover":
        return rl = qr(
          rl,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "pointerover":
        var u = r.pointerId;
        return kr.set(
          u,
          qr(
            kr.get(u) || null,
            t,
            e,
            n,
            a,
            r
          )
        ), !0;
      case "gotpointercapture":
        return u = r.pointerId, Gr.set(
          u,
          qr(
            Gr.get(u) || null,
            t,
            e,
            n,
            a,
            r
          )
        ), !0;
    }
    return !1;
  }
  function fm(t) {
    var e = Jl(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, Ef(t.priority, function() {
              om(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(n), e !== null) {
            t.blockedOn = e, Ef(t.priority, function() {
              om(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function vu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = ms(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        po = a, n.target.dispatchEvent(a), po = null;
      } else
        return e = Fl(n), e !== null && um(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function dm(t, e, n) {
    vu(t) && n.delete(e);
  }
  function y1() {
    hs = !1, ll !== null && vu(ll) && (ll = null), al !== null && vu(al) && (al = null), rl !== null && vu(rl) && (rl = null), kr.forEach(dm), Gr.forEach(dm);
  }
  function bu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, hs || (hs = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      y1
    )));
  }
  var Su = null;
  function ym(t) {
    Su !== t && (Su = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        Su === t && (Su = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], r = t[e + 2];
          if (typeof a != "function") {
            if (ps(a || n) === null)
              continue;
            break;
          }
          var u = Fl(n);
          u !== null && (t.splice(e, 3), e -= 3, mc(
            u,
            {
              pending: !0,
              data: r,
              method: n.method,
              action: a
            },
            a,
            r
          ));
        }
      }
    ));
  }
  function Ra(t) {
    function e(b) {
      return bu(b, t);
    }
    ll !== null && bu(ll, t), al !== null && bu(al, t), rl !== null && bu(rl, t), kr.forEach(e), Gr.forEach(e);
    for (var n = 0; n < il.length; n++) {
      var a = il[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < il.length && (n = il[0], n.blockedOn === null); )
      fm(n), n.blockedOn === null && il.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var r = n[a], u = n[a + 1], f = r[Se] || null;
        if (typeof u == "function")
          f || ym(n);
        else if (f) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (r = u, f = u[Se] || null)
              m = f.formAction;
            else if (ps(r) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? n[a + 1] = m : (n.splice(a, 3), a -= 3), ym(n);
        }
      }
  }
  function mm() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return r = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      r !== null && (r(), r = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, r = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), r !== null && (r(), r = null);
      };
    }
  }
  function gs(t) {
    this._internalRoot = t;
  }
  Cu.prototype.render = gs.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, a = je();
    rm(n, a, t, e, null, null);
  }, Cu.prototype.unmount = gs.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      rm(t.current, 2, null, t, null, null), eu(), e[Kl] = null;
    }
  };
  function Cu(t) {
    this._internalRoot = t;
  }
  Cu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Tf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < il.length && e !== 0 && e < il[n].priority; n++) ;
      il.splice(n, 0, t), n === 0 && fm(t);
    }
  };
  var pm = i.version;
  if (pm !== "19.2.0")
    throw Error(
      c(
        527,
        pm,
        "19.2.0"
      )
    );
  X.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = h(e), t = t !== null ? x(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var m1 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Au.isDisabled && Au.supportsFiber)
      try {
        Fa = Au.inject(
          m1
        ), _e = Au;
      } catch {
      }
  }
  return $r.createRoot = function(t, e) {
    if (!s(t)) throw Error(c(299));
    var n = !1, a = "", r = A0, u = x0, f = T0;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (r = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = lm(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      r,
      u,
      f,
      mm
    ), t[Kl] = e.current, Ic(t), new gs(e);
  }, $r.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(c(299));
    var a = !1, r = "", u = A0, f = x0, m = T0, b = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (b = n.formState)), e = lm(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      r,
      b,
      u,
      f,
      m,
      mm
    ), e.context = am(null), n = e.current, a = je(), a = io(a), r = Vn(a), r.callback = null, Qn(n, r, a), n = a, e.current.lanes = n, Ia(e, n), on(e), t[Kl] = e.current, Ic(t), new Cu(e);
  }, $r.version = "19.2.0", $r;
}
var xm;
function T1() {
  if (xm) return bs.exports;
  xm = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), bs.exports = x1(), bs.exports;
}
var E1 = T1(), M1 = Object.defineProperty, O1 = (l, i, o) => i in l ? M1(l, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[i] = o, xu = (l, i, o) => O1(l, typeof i != "symbol" ? i + "" : i, o);
const _1 = {
  stringify: (l) => l ? "true" : "false",
  parse: (l) => /^[ty1-9]/i.test(l)
}, z1 = {
  stringify: (l) => l.name,
  parse: (l, i, o) => {
    const c = (() => {
      if (typeof window < "u" && l in window)
        return window[l];
      if (typeof global < "u" && l in global)
        return global[l];
    })();
    return typeof c == "function" ? c.bind(o) : void 0;
  }
}, D1 = {
  stringify: (l) => JSON.stringify(l),
  parse: (l) => JSON.parse(l)
};
function R1(l) {
  return l.replace(
    /([a-z0-9])([A-Z])/g,
    (i, o, c) => `${o}-${c.toLowerCase()}`
  );
}
function sp(l) {
  return l.replace(/[-:]([a-z])/g, (i, o) => `${o.toUpperCase()}`);
}
const B1 = {
  stringify: (l) => l.name,
  parse: (l, i, o) => {
    const c = (() => {
      const s = sp(i);
      if (typeof o < "u" && s in o.container)
        return o.container[s];
    })();
    return typeof c == "function" ? c.bind(o) : void 0;
  }
}, U1 = {
  stringify: (l) => `${l}`,
  parse: (l) => parseFloat(l)
}, w1 = {
  stringify: (l) => l,
  parse: (l) => l
}, xs = {
  string: w1,
  number: U1,
  boolean: _1,
  function: z1,
  method: B1,
  json: D1
}, Yr = Symbol.for("r2wc.render"), Tu = Symbol.for("r2wc.connected"), Bl = Symbol.for("r2wc.context"), He = Symbol.for("r2wc.props");
function N1(l, i, o) {
  var c, s, d;
  i.props || (i.props = l.propTypes ? Object.keys(l.propTypes) : []), i.events || (i.events = []);
  const y = Array.isArray(i.props) ? i.props.slice() : Object.keys(i.props), p = Array.isArray(i.events) ? i.events.slice() : Object.keys(i.events), v = {}, h = {}, x = {}, A = {};
  for (const B of y) {
    v[B] = Array.isArray(i.props) ? "string" : i.props[B];
    const M = R1(B);
    x[B] = M, A[M] = B;
  }
  for (const B of p)
    h[B] = Array.isArray(i.events) ? {} : i.events[B];
  class z extends HTMLElement {
    constructor() {
      super(), xu(this, d, !0), xu(this, s), xu(this, c, {}), xu(this, "container"), i.shadow ? this.container = this.attachShadow({
        mode: i.shadow
      }) : this.container = this, this[He].container = this.container;
      for (const M of y) {
        const T = x[M], L = this.getAttribute(T), $ = v[M], K = $ ? xs[$] : null;
        if ($ === "method") {
          const V = sp(T);
          Object.defineProperty(this[He].container, V, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[He][V];
            },
            set(Z) {
              this[He][V] = Z, this[Yr]();
            }
          }), this[He][M] = K.parse(L, T, this);
        }
        K != null && K.parse && L && (this[He][M] = K.parse(L, T, this));
      }
      for (const M of p)
        this[He][M] = (T) => {
          const L = M.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(L, { detail: T, ...h[M] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(A);
    }
    connectedCallback() {
      this[Tu] = !0, this[Yr]();
    }
    disconnectedCallback() {
      this[Tu] = !1, this[Bl] && o.unmount(this[Bl]), delete this[Bl];
    }
    attributeChangedCallback(M, T, L) {
      const $ = A[M], K = v[$], V = K ? xs[K] : null;
      $ in v && V != null && V.parse && L && (this[He][$] = V.parse(L, M, this), this[Yr]());
    }
    [(d = Tu, s = Bl, c = He, Yr)]() {
      this[Tu] && (this[Bl] ? o.update(this[Bl], this[He]) : this[Bl] = o.mount(
        this.container,
        l,
        this[He]
      ));
    }
  }
  for (const B of y) {
    const M = x[B], T = v[B];
    Object.defineProperty(z.prototype, B, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[He][B];
      },
      set(L) {
        this[He][B] = L;
        const $ = T ? xs[T] : null;
        if ($ != null && $.stringify) {
          const K = $.stringify(L, M, this);
          this.getAttribute(M) !== K && this.setAttribute(M, K);
        } else
          this[Yr]();
      }
    });
  }
  return z;
}
function j1(l, i, o) {
  const c = E1.createRoot(l), s = Js.createElement(i, o);
  return c.render(s), {
    root: c,
    ReactComponent: i
  };
}
function H1({ root: l, ReactComponent: i }, o) {
  const c = Js.createElement(i, o);
  l.render(c);
}
function L1({ root: l }) {
  l.unmount();
}
function k1(l, i = {}) {
  return N1(l, i, { mount: j1, update: H1, unmount: L1 });
}
var Ts = { exports: {} }, Xr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;
function G1() {
  if (Tm) return Xr;
  Tm = 1;
  var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function o(c, s, d) {
    var y = null;
    if (d !== void 0 && (y = "" + d), s.key !== void 0 && (y = "" + s.key), "key" in s) {
      d = {};
      for (var p in s)
        p !== "key" && (d[p] = s[p]);
    } else d = s;
    return s = d.ref, {
      $$typeof: l,
      type: c,
      key: y,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return Xr.Fragment = i, Xr.jsx = o, Xr.jsxs = o, Xr;
}
var Em;
function q1() {
  return Em || (Em = 1, Ts.exports = G1()), Ts.exports;
}
var lt = q1();
function jl(l, ...i) {
  const o = new URL(`https://mui.com/production-error/?code=${l}`);
  return i.forEach((c) => o.searchParams.append("args[]", c)), `Minified MUI error #${l}; visit ${o} for the full message.`;
}
const Nn = "$$material";
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(l) {
    for (var i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      for (var c in o) ({}).hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }
    return l;
  }, Hs.apply(null, arguments);
}
function $1(l) {
  if (l.sheet)
    return l.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === l)
      return document.styleSheets[i];
}
function Y1(l) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", l.key), l.nonce !== void 0 && i.setAttribute("nonce", l.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var fp = /* @__PURE__ */ (function() {
  function l(o) {
    var c = this;
    this._insertTag = function(s) {
      var d;
      c.tags.length === 0 ? c.insertionPoint ? d = c.insertionPoint.nextSibling : c.prepend ? d = c.container.firstChild : d = c.before : d = c.tags[c.tags.length - 1].nextSibling, c.container.insertBefore(s, d), c.tags.push(s);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var i = l.prototype;
  return i.hydrate = function(c) {
    c.forEach(this._insertTag);
  }, i.insert = function(c) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Y1(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var d = $1(s);
      try {
        d.insertRule(c, d.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(c));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(c) {
      var s;
      return (s = c.parentNode) == null ? void 0 : s.removeChild(c);
    }), this.tags = [], this.ctr = 0;
  }, l;
})(), pe = "-ms-", Uu = "-moz-", Mt = "-webkit-", dp = "comm", Fs = "rule", Ws = "decl", X1 = "@import", yp = "@keyframes", V1 = "@layer", Q1 = Math.abs, Lu = String.fromCharCode, Z1 = Object.assign;
function K1(l, i) {
  return de(l, 0) ^ 45 ? (((i << 2 ^ de(l, 0)) << 2 ^ de(l, 1)) << 2 ^ de(l, 2)) << 2 ^ de(l, 3) : 0;
}
function mp(l) {
  return l.trim();
}
function J1(l, i) {
  return (l = i.exec(l)) ? l[0] : l;
}
function Ot(l, i, o) {
  return l.replace(i, o);
}
function Ls(l, i) {
  return l.indexOf(i);
}
function de(l, i) {
  return l.charCodeAt(i) | 0;
}
function Wr(l, i, o) {
  return l.slice(i, o);
}
function sn(l) {
  return l.length;
}
function Is(l) {
  return l.length;
}
function Eu(l, i) {
  return i.push(l), l;
}
function F1(l, i) {
  return l.map(i).join("");
}
var ku = 1, Ya = 1, pp = 0, Oe = 0, ee = 0, Xa = "";
function Gu(l, i, o, c, s, d, y) {
  return { value: l, root: i, parent: o, type: c, props: s, children: d, line: ku, column: Ya, length: y, return: "" };
}
function Vr(l, i) {
  return Z1(Gu("", null, null, "", null, null, 0), l, { length: -l.length }, i);
}
function W1() {
  return ee;
}
function I1() {
  return ee = Oe > 0 ? de(Xa, --Oe) : 0, Ya--, ee === 10 && (Ya = 1, ku--), ee;
}
function ke() {
  return ee = Oe < pp ? de(Xa, Oe++) : 0, Ya++, ee === 10 && (Ya = 1, ku++), ee;
}
function mn() {
  return de(Xa, Oe);
}
function _u() {
  return Oe;
}
function ei(l, i) {
  return Wr(Xa, l, i);
}
function Ir(l) {
  switch (l) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function hp(l) {
  return ku = Ya = 1, pp = sn(Xa = l), Oe = 0, [];
}
function gp(l) {
  return Xa = "", l;
}
function zu(l) {
  return mp(ei(Oe - 1, ks(l === 91 ? l + 2 : l === 40 ? l + 1 : l)));
}
function P1(l) {
  for (; (ee = mn()) && ee < 33; )
    ke();
  return Ir(l) > 2 || Ir(ee) > 3 ? "" : " ";
}
function tv(l, i) {
  for (; --i && ke() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return ei(l, _u() + (i < 6 && mn() == 32 && ke() == 32));
}
function ks(l) {
  for (; ke(); )
    switch (ee) {
      // ] ) " '
      case l:
        return Oe;
      // " '
      case 34:
      case 39:
        l !== 34 && l !== 39 && ks(ee);
        break;
      // (
      case 40:
        l === 41 && ks(l);
        break;
      // \
      case 92:
        ke();
        break;
    }
  return Oe;
}
function ev(l, i) {
  for (; ke() && l + ee !== 57; )
    if (l + ee === 84 && mn() === 47)
      break;
  return "/*" + ei(i, Oe - 1) + "*" + Lu(l === 47 ? l : ke());
}
function nv(l) {
  for (; !Ir(mn()); )
    ke();
  return ei(l, Oe);
}
function lv(l) {
  return gp(Du("", null, null, null, [""], l = hp(l), 0, [0], l));
}
function Du(l, i, o, c, s, d, y, p, v) {
  for (var h = 0, x = 0, A = y, z = 0, B = 0, M = 0, T = 1, L = 1, $ = 1, K = 0, V = "", Z = s, H = d, q = c, Y = V; L; )
    switch (M = K, K = ke()) {
      // (
      case 40:
        if (M != 108 && de(Y, A - 1) == 58) {
          Ls(Y += Ot(zu(K), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        Y += zu(K);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        Y += P1(M);
        break;
      // \
      case 92:
        Y += tv(_u() - 1, 7);
        continue;
      // /
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            Eu(av(ev(ke(), _u()), i, o), v);
            break;
          default:
            Y += "/";
        }
        break;
      // {
      case 123 * T:
        p[h++] = sn(Y) * $;
      // } ; \0
      case 125 * T:
      case 59:
      case 0:
        switch (K) {
          // \0 }
          case 0:
          case 125:
            L = 0;
          // ;
          case 59 + x:
            $ == -1 && (Y = Ot(Y, /\f/g, "")), B > 0 && sn(Y) - A && Eu(B > 32 ? Om(Y + ";", c, o, A - 1) : Om(Ot(Y, " ", "") + ";", c, o, A - 2), v);
            break;
          // @ ;
          case 59:
            Y += ";";
          // { rule/at-rule
          default:
            if (Eu(q = Mm(Y, i, o, h, x, s, p, V, Z = [], H = [], A), d), K === 123)
              if (x === 0)
                Du(Y, i, q, q, Z, d, A, p, H);
              else
                switch (z === 99 && de(Y, 3) === 110 ? 100 : z) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Du(l, q, q, c && Eu(Mm(l, q, q, 0, 0, s, p, V, s, Z = [], A), H), s, H, A, p, c ? Z : H);
                    break;
                  default:
                    Du(Y, q, q, q, [""], H, 0, p, H);
                }
        }
        h = x = B = 0, T = $ = 1, V = Y = "", A = y;
        break;
      // :
      case 58:
        A = 1 + sn(Y), B = M;
      default:
        if (T < 1) {
          if (K == 123)
            --T;
          else if (K == 125 && T++ == 0 && I1() == 125)
            continue;
        }
        switch (Y += Lu(K), K * T) {
          // &
          case 38:
            $ = x > 0 ? 1 : (Y += "\f", -1);
            break;
          // ,
          case 44:
            p[h++] = (sn(Y) - 1) * $, $ = 1;
            break;
          // @
          case 64:
            mn() === 45 && (Y += zu(ke())), z = mn(), x = A = sn(V = Y += nv(_u())), K++;
            break;
          // -
          case 45:
            M === 45 && sn(Y) == 2 && (T = 0);
        }
    }
  return d;
}
function Mm(l, i, o, c, s, d, y, p, v, h, x) {
  for (var A = s - 1, z = s === 0 ? d : [""], B = Is(z), M = 0, T = 0, L = 0; M < c; ++M)
    for (var $ = 0, K = Wr(l, A + 1, A = Q1(T = y[M])), V = l; $ < B; ++$)
      (V = mp(T > 0 ? z[$] + " " + K : Ot(K, /&\f/g, z[$]))) && (v[L++] = V);
  return Gu(l, i, o, s === 0 ? Fs : p, v, h, x);
}
function av(l, i, o) {
  return Gu(l, i, o, dp, Lu(W1()), Wr(l, 2, -2), 0);
}
function Om(l, i, o, c) {
  return Gu(l, i, o, Ws, Wr(l, 0, c), Wr(l, c + 1, -1), c);
}
function Ga(l, i) {
  for (var o = "", c = Is(l), s = 0; s < c; s++)
    o += i(l[s], s, l, i) || "";
  return o;
}
function rv(l, i, o, c) {
  switch (l.type) {
    case V1:
      if (l.children.length) break;
    case X1:
    case Ws:
      return l.return = l.return || l.value;
    case dp:
      return "";
    case yp:
      return l.return = l.value + "{" + Ga(l.children, c) + "}";
    case Fs:
      l.value = l.props.join(",");
  }
  return sn(o = Ga(l.children, c)) ? l.return = l.value + "{" + o + "}" : "";
}
function iv(l) {
  var i = Is(l);
  return function(o, c, s, d) {
    for (var y = "", p = 0; p < i; p++)
      y += l[p](o, c, s, d) || "";
    return y;
  };
}
function uv(l) {
  return function(i) {
    i.root || (i = i.return) && l(i);
  };
}
function vp(l) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return i[o] === void 0 && (i[o] = l(o)), i[o];
  };
}
var ov = function(i, o, c) {
  for (var s = 0, d = 0; s = d, d = mn(), s === 38 && d === 12 && (o[c] = 1), !Ir(d); )
    ke();
  return ei(i, Oe);
}, cv = function(i, o) {
  var c = -1, s = 44;
  do
    switch (Ir(s)) {
      case 0:
        s === 38 && mn() === 12 && (o[c] = 1), i[c] += ov(Oe - 1, o, c);
        break;
      case 2:
        i[c] += zu(s);
        break;
      case 4:
        if (s === 44) {
          i[++c] = mn() === 58 ? "&\f" : "", o[c] = i[c].length;
          break;
        }
      // fallthrough
      default:
        i[c] += Lu(s);
    }
  while (s = ke());
  return i;
}, sv = function(i, o) {
  return gp(cv(hp(i), o));
}, _m = /* @__PURE__ */ new WeakMap(), fv = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var o = i.value, c = i.parent, s = i.column === c.column && i.line === c.line; c.type !== "rule"; )
      if (c = c.parent, !c) return;
    if (!(i.props.length === 1 && o.charCodeAt(0) !== 58 && !_m.get(c)) && !s) {
      _m.set(i, !0);
      for (var d = [], y = sv(o, d), p = c.props, v = 0, h = 0; v < y.length; v++)
        for (var x = 0; x < p.length; x++, h++)
          i.props[h] = d[v] ? y[v].replace(/&\f/g, p[x]) : p[x] + " " + y[v];
    }
  }
}, dv = function(i) {
  if (i.type === "decl") {
    var o = i.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
};
function bp(l, i) {
  switch (K1(l, i)) {
    // color-adjust
    case 5103:
      return Mt + "print-" + l + l;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Mt + l + l;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Mt + l + Uu + l + pe + l + l;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Mt + l + pe + l + l;
    // order
    case 6165:
      return Mt + l + pe + "flex-" + l + l;
    // align-items
    case 5187:
      return Mt + l + Ot(l, /(\w+).+(:[^]+)/, Mt + "box-$1$2" + pe + "flex-$1$2") + l;
    // align-self
    case 5443:
      return Mt + l + pe + "flex-item-" + Ot(l, /flex-|-self/, "") + l;
    // align-content
    case 4675:
      return Mt + l + pe + "flex-line-pack" + Ot(l, /align-content|flex-|-self/, "") + l;
    // flex-shrink
    case 5548:
      return Mt + l + pe + Ot(l, "shrink", "negative") + l;
    // flex-basis
    case 5292:
      return Mt + l + pe + Ot(l, "basis", "preferred-size") + l;
    // flex-grow
    case 6060:
      return Mt + "box-" + Ot(l, "-grow", "") + Mt + l + pe + Ot(l, "grow", "positive") + l;
    // transition
    case 4554:
      return Mt + Ot(l, /([^-])(transform)/g, "$1" + Mt + "$2") + l;
    // cursor
    case 6187:
      return Ot(Ot(Ot(l, /(zoom-|grab)/, Mt + "$1"), /(image-set)/, Mt + "$1"), l, "") + l;
    // background, background-image
    case 5495:
    case 3959:
      return Ot(l, /(image-set\([^]*)/, Mt + "$1$`$1");
    // justify-content
    case 4968:
      return Ot(Ot(l, /(.+:)(flex-)?(.*)/, Mt + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Mt + l + l;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ot(l, /(.+)-inline(.+)/, Mt + "$1$2") + l;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (sn(l) - 1 - i > 6) switch (de(l, i + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (de(l, i + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Ot(l, /(.+:)(.+)-([^]+)/, "$1" + Mt + "$2-$3$1" + Uu + (de(l, i + 3) == 108 ? "$3" : "$2-$3")) + l;
        // (s)tretch
        case 115:
          return ~Ls(l, "stretch") ? bp(Ot(l, "stretch", "fill-available"), i) + l : l;
      }
      break;
    // position: sticky
    case 4949:
      if (de(l, i + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (de(l, sn(l) - 3 - (~Ls(l, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Ot(l, ":", ":" + Mt) + l;
        // (inline-)?fl(e)x
        case 101:
          return Ot(l, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Mt + (de(l, 14) === 45 ? "inline-" : "") + "box$3$1" + Mt + "$2$3$1" + pe + "$2box$3") + l;
      }
      break;
    // writing-mode
    case 5936:
      switch (de(l, i + 11)) {
        // vertical-l(r)
        case 114:
          return Mt + l + pe + Ot(l, /[svh]\w+-[tblr]{2}/, "tb") + l;
        // vertical-r(l)
        case 108:
          return Mt + l + pe + Ot(l, /[svh]\w+-[tblr]{2}/, "tb-rl") + l;
        // horizontal(-)tb
        case 45:
          return Mt + l + pe + Ot(l, /[svh]\w+-[tblr]{2}/, "lr") + l;
      }
      return Mt + l + pe + l + l;
  }
  return l;
}
var yv = function(i, o, c, s) {
  if (i.length > -1 && !i.return) switch (i.type) {
    case Ws:
      i.return = bp(i.value, i.length);
      break;
    case yp:
      return Ga([Vr(i, {
        value: Ot(i.value, "@", "@" + Mt)
      })], s);
    case Fs:
      if (i.length) return F1(i.props, function(d) {
        switch (J1(d, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ga([Vr(i, {
              props: [Ot(d, /:(read-\w+)/, ":" + Uu + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return Ga([Vr(i, {
              props: [Ot(d, /:(plac\w+)/, ":" + Mt + "input-$1")]
            }), Vr(i, {
              props: [Ot(d, /:(plac\w+)/, ":" + Uu + "$1")]
            }), Vr(i, {
              props: [Ot(d, /:(plac\w+)/, pe + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, mv = [yv], Sp = function(i) {
  var o = i.key;
  if (o === "css") {
    var c = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(c, function(T) {
      var L = T.getAttribute("data-emotion");
      L.indexOf(" ") !== -1 && (document.head.appendChild(T), T.setAttribute("data-s", ""));
    });
  }
  var s = i.stylisPlugins || mv, d = {}, y, p = [];
  y = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(T) {
      for (var L = T.getAttribute("data-emotion").split(" "), $ = 1; $ < L.length; $++)
        d[L[$]] = !0;
      p.push(T);
    }
  );
  var v, h = [fv, dv];
  {
    var x, A = [rv, uv(function(T) {
      x.insert(T);
    })], z = iv(h.concat(s, A)), B = function(L) {
      return Ga(lv(L), z);
    };
    v = function(L, $, K, V) {
      x = K, B(L ? L + "{" + $.styles + "}" : $.styles), V && (M.inserted[$.name] = !0);
    };
  }
  var M = {
    key: o,
    sheet: new fp({
      key: o,
      container: y,
      nonce: i.nonce,
      speedy: i.speedy,
      prepend: i.prepend,
      insertionPoint: i.insertionPoint
    }),
    nonce: i.nonce,
    inserted: d,
    registered: {},
    insert: v
  };
  return M.sheet.hydrate(p), M;
}, Es = { exports: {} }, _t = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm;
function pv() {
  if (zm) return _t;
  zm = 1;
  var l = typeof Symbol == "function" && Symbol.for, i = l ? Symbol.for("react.element") : 60103, o = l ? Symbol.for("react.portal") : 60106, c = l ? Symbol.for("react.fragment") : 60107, s = l ? Symbol.for("react.strict_mode") : 60108, d = l ? Symbol.for("react.profiler") : 60114, y = l ? Symbol.for("react.provider") : 60109, p = l ? Symbol.for("react.context") : 60110, v = l ? Symbol.for("react.async_mode") : 60111, h = l ? Symbol.for("react.concurrent_mode") : 60111, x = l ? Symbol.for("react.forward_ref") : 60112, A = l ? Symbol.for("react.suspense") : 60113, z = l ? Symbol.for("react.suspense_list") : 60120, B = l ? Symbol.for("react.memo") : 60115, M = l ? Symbol.for("react.lazy") : 60116, T = l ? Symbol.for("react.block") : 60121, L = l ? Symbol.for("react.fundamental") : 60117, $ = l ? Symbol.for("react.responder") : 60118, K = l ? Symbol.for("react.scope") : 60119;
  function V(H) {
    if (typeof H == "object" && H !== null) {
      var q = H.$$typeof;
      switch (q) {
        case i:
          switch (H = H.type, H) {
            case v:
            case h:
            case c:
            case d:
            case s:
            case A:
              return H;
            default:
              switch (H = H && H.$$typeof, H) {
                case p:
                case x:
                case M:
                case B:
                case y:
                  return H;
                default:
                  return q;
              }
          }
        case o:
          return q;
      }
    }
  }
  function Z(H) {
    return V(H) === h;
  }
  return _t.AsyncMode = v, _t.ConcurrentMode = h, _t.ContextConsumer = p, _t.ContextProvider = y, _t.Element = i, _t.ForwardRef = x, _t.Fragment = c, _t.Lazy = M, _t.Memo = B, _t.Portal = o, _t.Profiler = d, _t.StrictMode = s, _t.Suspense = A, _t.isAsyncMode = function(H) {
    return Z(H) || V(H) === v;
  }, _t.isConcurrentMode = Z, _t.isContextConsumer = function(H) {
    return V(H) === p;
  }, _t.isContextProvider = function(H) {
    return V(H) === y;
  }, _t.isElement = function(H) {
    return typeof H == "object" && H !== null && H.$$typeof === i;
  }, _t.isForwardRef = function(H) {
    return V(H) === x;
  }, _t.isFragment = function(H) {
    return V(H) === c;
  }, _t.isLazy = function(H) {
    return V(H) === M;
  }, _t.isMemo = function(H) {
    return V(H) === B;
  }, _t.isPortal = function(H) {
    return V(H) === o;
  }, _t.isProfiler = function(H) {
    return V(H) === d;
  }, _t.isStrictMode = function(H) {
    return V(H) === s;
  }, _t.isSuspense = function(H) {
    return V(H) === A;
  }, _t.isValidElementType = function(H) {
    return typeof H == "string" || typeof H == "function" || H === c || H === h || H === d || H === s || H === A || H === z || typeof H == "object" && H !== null && (H.$$typeof === M || H.$$typeof === B || H.$$typeof === y || H.$$typeof === p || H.$$typeof === x || H.$$typeof === L || H.$$typeof === $ || H.$$typeof === K || H.$$typeof === T);
  }, _t.typeOf = V, _t;
}
var Dm;
function hv() {
  return Dm || (Dm = 1, Es.exports = pv()), Es.exports;
}
var Ms, Rm;
function gv() {
  if (Rm) return Ms;
  Rm = 1;
  var l = hv(), i = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, c = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, d = {};
  d[l.ForwardRef] = c, d[l.Memo] = s;
  function y(M) {
    return l.isMemo(M) ? s : d[M.$$typeof] || i;
  }
  var p = Object.defineProperty, v = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, x = Object.getOwnPropertyDescriptor, A = Object.getPrototypeOf, z = Object.prototype;
  function B(M, T, L) {
    if (typeof T != "string") {
      if (z) {
        var $ = A(T);
        $ && $ !== z && B(M, $, L);
      }
      var K = v(T);
      h && (K = K.concat(h(T)));
      for (var V = y(M), Z = y(T), H = 0; H < K.length; ++H) {
        var q = K[H];
        if (!o[q] && !(L && L[q]) && !(Z && Z[q]) && !(V && V[q])) {
          var Y = x(T, q);
          try {
            p(M, q, Y);
          } catch {
          }
        }
      }
    }
    return M;
  }
  return Ms = B, Ms;
}
gv();
var vv = !0;
function Cp(l, i, o) {
  var c = "";
  return o.split(" ").forEach(function(s) {
    l[s] !== void 0 ? i.push(l[s] + ";") : s && (c += s + " ");
  }), c;
}
var Ps = function(i, o, c) {
  var s = i.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (c === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  vv === !1) && i.registered[s] === void 0 && (i.registered[s] = o.styles);
}, tf = function(i, o, c) {
  Ps(i, o, c);
  var s = i.key + "-" + o.name;
  if (i.inserted[o.name] === void 0) {
    var d = o;
    do
      i.insert(o === d ? "." + s : "", d, i.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function bv(l) {
  for (var i = 0, o, c = 0, s = l.length; s >= 4; ++c, s -= 4)
    o = l.charCodeAt(c) & 255 | (l.charCodeAt(++c) & 255) << 8 | (l.charCodeAt(++c) & 255) << 16 | (l.charCodeAt(++c) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, i = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      i ^= (l.charCodeAt(c + 2) & 255) << 16;
    case 2:
      i ^= (l.charCodeAt(c + 1) & 255) << 8;
    case 1:
      i ^= l.charCodeAt(c) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var Sv = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Cv = /[A-Z]|^ms/g, Av = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ap = function(i) {
  return i.charCodeAt(1) === 45;
}, Bm = function(i) {
  return i != null && typeof i != "boolean";
}, Os = /* @__PURE__ */ vp(function(l) {
  return Ap(l) ? l : l.replace(Cv, "-$&").toLowerCase();
}), Um = function(i, o) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(Av, function(c, s, d) {
          return fn = {
            name: s,
            styles: d,
            next: fn
          }, s;
        });
  }
  return Sv[i] !== 1 && !Ap(i) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Pr(l, i, o) {
  if (o == null)
    return "";
  var c = o;
  if (c.__emotion_styles !== void 0)
    return c;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var s = o;
      if (s.anim === 1)
        return fn = {
          name: s.name,
          styles: s.styles,
          next: fn
        }, s.name;
      var d = o;
      if (d.styles !== void 0) {
        var y = d.next;
        if (y !== void 0)
          for (; y !== void 0; )
            fn = {
              name: y.name,
              styles: y.styles,
              next: fn
            }, y = y.next;
        var p = d.styles + ";";
        return p;
      }
      return xv(l, i, o);
    }
    case "function": {
      if (l !== void 0) {
        var v = fn, h = o(l);
        return fn = v, Pr(l, i, h);
      }
      break;
    }
  }
  var x = o;
  if (i == null)
    return x;
  var A = i[x];
  return A !== void 0 ? A : x;
}
function xv(l, i, o) {
  var c = "";
  if (Array.isArray(o))
    for (var s = 0; s < o.length; s++)
      c += Pr(l, i, o[s]) + ";";
  else
    for (var d in o) {
      var y = o[d];
      if (typeof y != "object") {
        var p = y;
        i != null && i[p] !== void 0 ? c += d + "{" + i[p] + "}" : Bm(p) && (c += Os(d) + ":" + Um(d, p) + ";");
      } else if (Array.isArray(y) && typeof y[0] == "string" && (i == null || i[y[0]] === void 0))
        for (var v = 0; v < y.length; v++)
          Bm(y[v]) && (c += Os(d) + ":" + Um(d, y[v]) + ";");
      else {
        var h = Pr(l, i, y);
        switch (d) {
          case "animation":
          case "animationName": {
            c += Os(d) + ":" + h + ";";
            break;
          }
          default:
            c += d + "{" + h + "}";
        }
      }
    }
  return c;
}
var wm = /label:\s*([^\s;{]+)\s*(;|$)/g, fn;
function qu(l, i, o) {
  if (l.length === 1 && typeof l[0] == "object" && l[0] !== null && l[0].styles !== void 0)
    return l[0];
  var c = !0, s = "";
  fn = void 0;
  var d = l[0];
  if (d == null || d.raw === void 0)
    c = !1, s += Pr(o, i, d);
  else {
    var y = d;
    s += y[0];
  }
  for (var p = 1; p < l.length; p++)
    if (s += Pr(o, i, l[p]), c) {
      var v = d;
      s += v[p];
    }
  wm.lastIndex = 0;
  for (var h = "", x; (x = wm.exec(s)) !== null; )
    h += "-" + x[1];
  var A = bv(s) + h;
  return {
    name: A,
    styles: s,
    next: fn
  };
}
var Tv = function(i) {
  return i();
}, xp = js.useInsertionEffect ? js.useInsertionEffect : !1, Tp = xp || Tv, Nm = xp || Q.useLayoutEffect, Ep = /* @__PURE__ */ Q.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Sp({
    key: "css"
  }) : null
), Ev = Ep.Provider, ef = function(i) {
  return /* @__PURE__ */ Q.forwardRef(function(o, c) {
    var s = Q.useContext(Ep);
    return i(o, s, c);
  });
}, ni = /* @__PURE__ */ Q.createContext({}), nf = {}.hasOwnProperty, Gs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Mv = function(i, o) {
  var c = {};
  for (var s in o)
    nf.call(o, s) && (c[s] = o[s]);
  return c[Gs] = i, c;
}, Ov = function(i) {
  var o = i.cache, c = i.serialized, s = i.isStringTag;
  return Ps(o, c, s), Tp(function() {
    return tf(o, c, s);
  }), null;
}, _v = /* @__PURE__ */ ef(function(l, i, o) {
  var c = l.css;
  typeof c == "string" && i.registered[c] !== void 0 && (c = i.registered[c]);
  var s = l[Gs], d = [c], y = "";
  typeof l.className == "string" ? y = Cp(i.registered, d, l.className) : l.className != null && (y = l.className + " ");
  var p = qu(d, void 0, Q.useContext(ni));
  y += i.key + "-" + p.name;
  var v = {};
  for (var h in l)
    nf.call(l, h) && h !== "css" && h !== Gs && (v[h] = l[h]);
  return v.className = y, o && (v.ref = o), /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(Ov, {
    cache: i,
    serialized: p,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ Q.createElement(s, v));
}), zv = _v, jm = function(i, o) {
  var c = arguments;
  if (o == null || !nf.call(o, "css"))
    return Q.createElement.apply(void 0, c);
  var s = c.length, d = new Array(s);
  d[0] = zv, d[1] = Mv(i, o);
  for (var y = 2; y < s; y++)
    d[y] = c[y];
  return Q.createElement.apply(null, d);
};
(function(l) {
  var i;
  i || (i = l.JSX || (l.JSX = {}));
})(jm || (jm = {}));
var Dv = /* @__PURE__ */ ef(function(l, i) {
  var o = l.styles, c = qu([o], void 0, Q.useContext(ni)), s = Q.useRef();
  return Nm(function() {
    var d = i.key + "-global", y = new i.sheet.constructor({
      key: d,
      nonce: i.sheet.nonce,
      container: i.sheet.container,
      speedy: i.sheet.isSpeedy
    }), p = !1, v = document.querySelector('style[data-emotion="' + d + " " + c.name + '"]');
    return i.sheet.tags.length && (y.before = i.sheet.tags[0]), v !== null && (p = !0, v.setAttribute("data-emotion", d), y.hydrate([v])), s.current = [y, p], function() {
      y.flush();
    };
  }, [i]), Nm(function() {
    var d = s.current, y = d[0], p = d[1];
    if (p) {
      d[1] = !1;
      return;
    }
    if (c.next !== void 0 && tf(i, c.next, !0), y.tags.length) {
      var v = y.tags[y.tags.length - 1].nextElementSibling;
      y.before = v, y.flush();
    }
    i.insert("", c, y, !1);
  }, [i, c.name]), null;
}), Rv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bv = /* @__PURE__ */ vp(
  function(l) {
    return Rv.test(l) || l.charCodeAt(0) === 111 && l.charCodeAt(1) === 110 && l.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Uv = Bv, wv = function(i) {
  return i !== "theme";
}, Hm = function(i) {
  return typeof i == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  i.charCodeAt(0) > 96 ? Uv : wv;
}, Lm = function(i, o, c) {
  var s;
  if (o) {
    var d = o.shouldForwardProp;
    s = i.__emotion_forwardProp && d ? function(y) {
      return i.__emotion_forwardProp(y) && d(y);
    } : d;
  }
  return typeof s != "function" && c && (s = i.__emotion_forwardProp), s;
}, Nv = function(i) {
  var o = i.cache, c = i.serialized, s = i.isStringTag;
  return Ps(o, c, s), Tp(function() {
    return tf(o, c, s);
  }), null;
}, jv = function l(i, o) {
  var c = i.__emotion_real === i, s = c && i.__emotion_base || i, d, y;
  o !== void 0 && (d = o.label, y = o.target);
  var p = Lm(i, o, c), v = p || Hm(s), h = !v("as");
  return function() {
    var x = arguments, A = c && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
    if (d !== void 0 && A.push("label:" + d + ";"), x[0] == null || x[0].raw === void 0)
      A.push.apply(A, x);
    else {
      var z = x[0];
      A.push(z[0]);
      for (var B = x.length, M = 1; M < B; M++)
        A.push(x[M], z[M]);
    }
    var T = ef(function(L, $, K) {
      var V = h && L.as || s, Z = "", H = [], q = L;
      if (L.theme == null) {
        q = {};
        for (var Y in L)
          q[Y] = L[Y];
        q.theme = Q.useContext(ni);
      }
      typeof L.className == "string" ? Z = Cp($.registered, H, L.className) : L.className != null && (Z = L.className + " ");
      var I = qu(A.concat(H), $.registered, q);
      Z += $.key + "-" + I.name, y !== void 0 && (Z += " " + y);
      var W = h && p === void 0 ? Hm(V) : v, it = {};
      for (var nt in L)
        h && nt === "as" || W(nt) && (it[nt] = L[nt]);
      return it.className = Z, K && (it.ref = K), /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(Nv, {
        cache: $,
        serialized: I,
        isStringTag: typeof V == "string"
      }), /* @__PURE__ */ Q.createElement(V, it));
    });
    return T.displayName = d !== void 0 ? d : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", T.defaultProps = i.defaultProps, T.__emotion_real = T, T.__emotion_base = s, T.__emotion_styles = A, T.__emotion_forwardProp = p, Object.defineProperty(T, "toString", {
      value: function() {
        return "." + y;
      }
    }), T.withComponent = function(L, $) {
      var K = l(L, Hs({}, o, $, {
        shouldForwardProp: Lm(T, $, !0)
      }));
      return K.apply(void 0, A);
    }, T;
  };
}, Hv = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], qs = jv.bind(null);
Hv.forEach(function(l) {
  qs[l] = qs(l);
});
const _s = /* @__PURE__ */ new Map(), Lv = (l, i) => {
  const o = Sp(l);
  return o.sheet = new i({
    key: o.key,
    nonce: o.sheet.nonce,
    container: o.sheet.container,
    speedy: o.sheet.isSpeedy,
    prepend: o.sheet.prepend,
    insertionPoint: o.sheet.insertionPoint
  }), o;
};
let ol;
if (typeof document == "object" && (ol = document.querySelector('[name="emotion-insertion-point"]'), !ol)) {
  ol = document.createElement("meta"), ol.setAttribute("name", "emotion-insertion-point"), ol.setAttribute("content", "");
  const l = document.querySelector("head");
  l && l.prepend(ol);
}
function kv(l, i) {
  if (l || i) {
    class o extends fp {
      insert(d, y) {
        return this.key && this.key.endsWith("global") && (this.before = ol), super.insert(d, y);
      }
    }
    const c = Lv({
      key: "css",
      insertionPoint: l ? ol : void 0
    }, o);
    if (i) {
      const s = c.insert;
      c.insert = (...d) => (d[1].styles.match(/^@layer\s+[^{]*$/) || (d[1].styles = `@layer mui {${d[1].styles}}`), s(...d));
    }
    return c;
  }
}
function Gv(l) {
  const {
    injectFirst: i,
    enableCssLayer: o,
    children: c
  } = l, s = Q.useMemo(() => {
    const d = `${i}-${o}`;
    if (typeof document == "object" && _s.has(d))
      return _s.get(d);
    const y = kv(i, o);
    return _s.set(d, y), y;
  }, [i, o]);
  return s ? /* @__PURE__ */ lt.jsx(Ev, {
    value: s,
    children: c
  }) : c;
}
function qv(l) {
  return l == null || Object.keys(l).length === 0;
}
function Mp(l) {
  const {
    styles: i,
    defaultTheme: o = {}
  } = l, c = typeof i == "function" ? (s) => i(qv(s) ? o : s) : i;
  return /* @__PURE__ */ lt.jsx(Dv, {
    styles: c
  });
}
function $v(l, i) {
  return qs(l, i);
}
function Yv(l, i) {
  Array.isArray(l.__emotion_styles) && (l.__emotion_styles = i(l.__emotion_styles));
}
const km = [];
function cl(l) {
  return km[0] = l, qu(km);
}
var zs = { exports: {} }, jt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gm;
function Xv() {
  if (Gm) return jt;
  Gm = 1;
  var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), y = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.view_transition"), B = Symbol.for("react.client.reference");
  function M(T) {
    if (typeof T == "object" && T !== null) {
      var L = T.$$typeof;
      switch (L) {
        case l:
          switch (T = T.type, T) {
            case o:
            case s:
            case c:
            case v:
            case h:
            case z:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case y:
                case p:
                case A:
                case x:
                  return T;
                case d:
                  return T;
                default:
                  return L;
              }
          }
        case i:
          return L;
      }
    }
  }
  return jt.ContextConsumer = d, jt.ContextProvider = y, jt.Element = l, jt.ForwardRef = p, jt.Fragment = o, jt.Lazy = A, jt.Memo = x, jt.Portal = i, jt.Profiler = s, jt.StrictMode = c, jt.Suspense = v, jt.SuspenseList = h, jt.isContextConsumer = function(T) {
    return M(T) === d;
  }, jt.isContextProvider = function(T) {
    return M(T) === y;
  }, jt.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === l;
  }, jt.isForwardRef = function(T) {
    return M(T) === p;
  }, jt.isFragment = function(T) {
    return M(T) === o;
  }, jt.isLazy = function(T) {
    return M(T) === A;
  }, jt.isMemo = function(T) {
    return M(T) === x;
  }, jt.isPortal = function(T) {
    return M(T) === i;
  }, jt.isProfiler = function(T) {
    return M(T) === s;
  }, jt.isStrictMode = function(T) {
    return M(T) === c;
  }, jt.isSuspense = function(T) {
    return M(T) === v;
  }, jt.isSuspenseList = function(T) {
    return M(T) === h;
  }, jt.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === o || T === s || T === c || T === v || T === h || typeof T == "object" && T !== null && (T.$$typeof === A || T.$$typeof === x || T.$$typeof === y || T.$$typeof === d || T.$$typeof === p || T.$$typeof === B || T.getModuleId !== void 0);
  }, jt.typeOf = M, jt;
}
var qm;
function Vv() {
  return qm || (qm = 1, zs.exports = /* @__PURE__ */ Xv()), zs.exports;
}
var Op = /* @__PURE__ */ Vv();
function yn(l) {
  if (typeof l != "object" || l === null)
    return !1;
  const i = Object.getPrototypeOf(l);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in l) && !(Symbol.iterator in l);
}
function _p(l) {
  if (/* @__PURE__ */ Q.isValidElement(l) || Op.isValidElementType(l) || !yn(l))
    return l;
  const i = {};
  return Object.keys(l).forEach((o) => {
    i[o] = _p(l[o]);
  }), i;
}
function be(l, i, o = {
  clone: !0
}) {
  const c = o.clone ? {
    ...l
  } : l;
  return yn(l) && yn(i) && Object.keys(i).forEach((s) => {
    /* @__PURE__ */ Q.isValidElement(i[s]) || Op.isValidElementType(i[s]) ? c[s] = i[s] : yn(i[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(l, s) && yn(l[s]) ? c[s] = be(l[s], i[s], o) : o.clone ? c[s] = yn(i[s]) ? _p(i[s]) : i[s] : c[s] = i[s];
  }), c;
}
const Qv = (l) => {
  const i = Object.keys(l).map((o) => ({
    key: o,
    val: l[o]
  })) || [];
  return i.sort((o, c) => o.val - c.val), i.reduce((o, c) => ({
    ...o,
    [c.key]: c.val
  }), {});
};
function Zv(l) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: i = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: c = 5,
    ...s
  } = l, d = Qv(i), y = Object.keys(d);
  function p(z) {
    return `@media (min-width:${typeof i[z] == "number" ? i[z] : z}${o})`;
  }
  function v(z) {
    return `@media (max-width:${(typeof i[z] == "number" ? i[z] : z) - c / 100}${o})`;
  }
  function h(z, B) {
    const M = y.indexOf(B);
    return `@media (min-width:${typeof i[z] == "number" ? i[z] : z}${o}) and (max-width:${(M !== -1 && typeof i[y[M]] == "number" ? i[y[M]] : B) - c / 100}${o})`;
  }
  function x(z) {
    return y.indexOf(z) + 1 < y.length ? h(z, y[y.indexOf(z) + 1]) : p(z);
  }
  function A(z) {
    const B = y.indexOf(z);
    return B === 0 ? p(y[1]) : B === y.length - 1 ? v(y[B]) : h(z, y[y.indexOf(z) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: y,
    values: d,
    up: p,
    down: v,
    between: h,
    only: x,
    not: A,
    unit: o,
    ...s
  };
}
function $m(l, i) {
  if (!l.containerQueries)
    return i;
  const o = Object.keys(i).filter((c) => c.startsWith("@container")).sort((c, s) => {
    const d = /min-width:\s*([0-9.]+)/;
    return +(c.match(d)?.[1] || 0) - +(s.match(d)?.[1] || 0);
  });
  return o.length ? o.reduce((c, s) => {
    const d = i[s];
    return delete c[s], c[s] = d, c;
  }, {
    ...i
  }) : i;
}
function Kv(l, i) {
  return i === "@" || i.startsWith("@") && (l.some((o) => i.startsWith(`@${o}`)) || !!i.match(/^@\d/));
}
function Jv(l, i) {
  const o = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, c, s] = o, d = Number.isNaN(+c) ? c || 0 : +c;
  return l.containerQueries(s).up(d);
}
function Fv(l) {
  const i = (d, y) => d.replace("@media", y ? `@container ${y}` : "@container");
  function o(d, y) {
    d.up = (...p) => i(l.breakpoints.up(...p), y), d.down = (...p) => i(l.breakpoints.down(...p), y), d.between = (...p) => i(l.breakpoints.between(...p), y), d.only = (...p) => i(l.breakpoints.only(...p), y), d.not = (...p) => {
      const v = i(l.breakpoints.not(...p), y);
      return v.includes("not all and") ? v.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : v;
    };
  }
  const c = {}, s = (d) => (o(c, d), c);
  return o(s), {
    ...l,
    containerQueries: s
  };
}
const Wv = {
  borderRadius: 4
};
function Fr(l, i) {
  return i ? be(l, i, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : l;
}
const $u = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ym = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (l) => `@media (min-width:${$u[l]}px)`
}, Iv = {
  containerQueries: (l) => ({
    up: (i) => {
      let o = typeof i == "number" ? i : $u[i] || i;
      return typeof o == "number" && (o = `${o}px`), l ? `@container ${l} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function nn(l, i, o) {
  const c = l.theme || {};
  if (Array.isArray(i)) {
    const d = c.breakpoints || Ym;
    return i.reduce((y, p, v) => (y[d.up(d.keys[v])] = o(i[v]), y), {});
  }
  if (typeof i == "object") {
    const d = c.breakpoints || Ym;
    return Object.keys(i).reduce((y, p) => {
      if (Kv(d.keys, p)) {
        const v = Jv(c.containerQueries ? c : Iv, p);
        v && (y[v] = o(i[p], p));
      } else if (Object.keys(d.values || $u).includes(p)) {
        const v = d.up(p);
        y[v] = o(i[p], p);
      } else {
        const v = p;
        y[v] = i[v];
      }
      return y;
    }, {});
  }
  return o(i);
}
function zp(l = {}) {
  return l.keys?.reduce((o, c) => {
    const s = l.up(c);
    return o[s] = {}, o;
  }, {}) || {};
}
function $s(l, i) {
  return l.reduce((o, c) => {
    const s = o[c];
    return (!s || Object.keys(s).length === 0) && delete o[c], o;
  }, i);
}
function Pv(l, ...i) {
  const o = zp(l), c = [o, ...i].reduce((s, d) => be(s, d), {});
  return $s(Object.keys(o), c);
}
function tb(l, i) {
  if (typeof l != "object")
    return {};
  const o = {}, c = Object.keys(i);
  return Array.isArray(l) ? c.forEach((s, d) => {
    d < l.length && (o[s] = !0);
  }) : c.forEach((s) => {
    l[s] != null && (o[s] = !0);
  }), o;
}
function Ds({
  values: l,
  breakpoints: i,
  base: o
}) {
  const c = o || tb(l, i), s = Object.keys(c);
  if (s.length === 0)
    return l;
  let d;
  return s.reduce((y, p, v) => (Array.isArray(l) ? (y[p] = l[v] != null ? l[v] : l[d], d = v) : typeof l == "object" ? (y[p] = l[p] != null ? l[p] : l[d], d = p) : y[p] = l, y), {});
}
function pn(l) {
  if (typeof l != "string")
    throw new Error(jl(7));
  return l.charAt(0).toUpperCase() + l.slice(1);
}
function dn(l, i, o = !0) {
  if (!i || typeof i != "string")
    return null;
  if (l && l.vars && o) {
    const c = `vars.${i}`.split(".").reduce((s, d) => s && s[d] ? s[d] : null, l);
    if (c != null)
      return c;
  }
  return i.split(".").reduce((c, s) => c && c[s] != null ? c[s] : null, l);
}
function wu(l, i, o, c = o) {
  let s;
  return typeof l == "function" ? s = l(o) : Array.isArray(l) ? s = l[o] || c : s = dn(l, o) || c, i && (s = i(s, c, l)), s;
}
function Ft(l) {
  const {
    prop: i,
    cssProperty: o = l.prop,
    themeKey: c,
    transform: s
  } = l, d = (y) => {
    if (y[i] == null)
      return null;
    const p = y[i], v = y.theme, h = dn(v, c) || {};
    return nn(y, p, (A) => {
      let z = wu(h, s, A);
      return A === z && typeof A == "string" && (z = wu(h, s, `${i}${A === "default" ? "" : pn(A)}`, A)), o === !1 ? z : {
        [o]: z
      };
    });
  };
  return d.propTypes = {}, d.filterProps = [i], d;
}
function eb(l) {
  const i = {};
  return (o) => (i[o] === void 0 && (i[o] = l(o)), i[o]);
}
const nb = {
  m: "margin",
  p: "padding"
}, lb = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Xm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ab = eb((l) => {
  if (l.length > 2)
    if (Xm[l])
      l = Xm[l];
    else
      return [l];
  const [i, o] = l.split(""), c = nb[i], s = lb[o] || "";
  return Array.isArray(s) ? s.map((d) => c + d) : [c + s];
}), lf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], af = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...lf, ...af];
function li(l, i, o, c) {
  const s = dn(l, i, !0) ?? o;
  return typeof s == "number" || typeof s == "string" ? (d) => typeof d == "string" ? d : typeof s == "string" ? s.startsWith("var(") && d === 0 ? 0 : s.startsWith("var(") && d === 1 ? s : `calc(${d} * ${s})` : s * d : Array.isArray(s) ? (d) => {
    if (typeof d == "string")
      return d;
    const y = Math.abs(d), p = s[y];
    return d >= 0 ? p : typeof p == "number" ? -p : typeof p == "string" && p.startsWith("var(") ? `calc(-1 * ${p})` : `-${p}`;
  } : typeof s == "function" ? s : () => {
  };
}
function Yu(l) {
  return li(l, "spacing", 8);
}
function Hl(l, i) {
  return typeof i == "string" || i == null ? i : l(i);
}
function rb(l, i) {
  return (o) => l.reduce((c, s) => (c[s] = Hl(i, o), c), {});
}
function ib(l, i, o, c) {
  if (!i.includes(o))
    return null;
  const s = ab(o), d = rb(s, c), y = l[o];
  return nn(l, y, d);
}
function Dp(l, i) {
  const o = Yu(l.theme);
  return Object.keys(l).map((c) => ib(l, i, c, o)).reduce(Fr, {});
}
function Qt(l) {
  return Dp(l, lf);
}
Qt.propTypes = {};
Qt.filterProps = lf;
function Zt(l) {
  return Dp(l, af);
}
Zt.propTypes = {};
Zt.filterProps = af;
function Rp(l = 8, i = Yu({
  spacing: l
})) {
  if (l.mui)
    return l;
  const o = (...c) => (c.length === 0 ? [1] : c).map((d) => {
    const y = i(d);
    return typeof y == "number" ? `${y}px` : y;
  }).join(" ");
  return o.mui = !0, o;
}
function Xu(...l) {
  const i = l.reduce((c, s) => (s.filterProps.forEach((d) => {
    c[d] = s;
  }), c), {}), o = (c) => Object.keys(c).reduce((s, d) => i[d] ? Fr(s, i[d](c)) : s, {});
  return o.propTypes = {}, o.filterProps = l.reduce((c, s) => c.concat(s.filterProps), []), o;
}
function We(l) {
  return typeof l != "number" ? l : `${l}px solid`;
}
function Ie(l, i) {
  return Ft({
    prop: l,
    themeKey: "borders",
    transform: i
  });
}
const ub = Ie("border", We), ob = Ie("borderTop", We), cb = Ie("borderRight", We), sb = Ie("borderBottom", We), fb = Ie("borderLeft", We), db = Ie("borderColor"), yb = Ie("borderTopColor"), mb = Ie("borderRightColor"), pb = Ie("borderBottomColor"), hb = Ie("borderLeftColor"), gb = Ie("outline", We), vb = Ie("outlineColor"), Vu = (l) => {
  if (l.borderRadius !== void 0 && l.borderRadius !== null) {
    const i = li(l.theme, "shape.borderRadius", 4), o = (c) => ({
      borderRadius: Hl(i, c)
    });
    return nn(l, l.borderRadius, o);
  }
  return null;
};
Vu.propTypes = {};
Vu.filterProps = ["borderRadius"];
Xu(ub, ob, cb, sb, fb, db, yb, mb, pb, hb, Vu, gb, vb);
const Qu = (l) => {
  if (l.gap !== void 0 && l.gap !== null) {
    const i = li(l.theme, "spacing", 8), o = (c) => ({
      gap: Hl(i, c)
    });
    return nn(l, l.gap, o);
  }
  return null;
};
Qu.propTypes = {};
Qu.filterProps = ["gap"];
const Zu = (l) => {
  if (l.columnGap !== void 0 && l.columnGap !== null) {
    const i = li(l.theme, "spacing", 8), o = (c) => ({
      columnGap: Hl(i, c)
    });
    return nn(l, l.columnGap, o);
  }
  return null;
};
Zu.propTypes = {};
Zu.filterProps = ["columnGap"];
const Ku = (l) => {
  if (l.rowGap !== void 0 && l.rowGap !== null) {
    const i = li(l.theme, "spacing", 8), o = (c) => ({
      rowGap: Hl(i, c)
    });
    return nn(l, l.rowGap, o);
  }
  return null;
};
Ku.propTypes = {};
Ku.filterProps = ["rowGap"];
const bb = Ft({
  prop: "gridColumn"
}), Sb = Ft({
  prop: "gridRow"
}), Cb = Ft({
  prop: "gridAutoFlow"
}), Ab = Ft({
  prop: "gridAutoColumns"
}), xb = Ft({
  prop: "gridAutoRows"
}), Tb = Ft({
  prop: "gridTemplateColumns"
}), Eb = Ft({
  prop: "gridTemplateRows"
}), Mb = Ft({
  prop: "gridTemplateAreas"
}), Ob = Ft({
  prop: "gridArea"
});
Xu(Qu, Zu, Ku, bb, Sb, Cb, Ab, xb, Tb, Eb, Mb, Ob);
function qa(l, i) {
  return i === "grey" ? i : l;
}
const _b = Ft({
  prop: "color",
  themeKey: "palette",
  transform: qa
}), zb = Ft({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qa
}), Db = Ft({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qa
});
Xu(_b, zb, Db);
function Le(l) {
  return l <= 1 && l !== 0 ? `${l * 100}%` : l;
}
const Rb = Ft({
  prop: "width",
  transform: Le
}), rf = (l) => {
  if (l.maxWidth !== void 0 && l.maxWidth !== null) {
    const i = (o) => {
      const c = l.theme?.breakpoints?.values?.[o] || $u[o];
      return c ? l.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${c}${l.theme.breakpoints.unit}`
      } : {
        maxWidth: c
      } : {
        maxWidth: Le(o)
      };
    };
    return nn(l, l.maxWidth, i);
  }
  return null;
};
rf.filterProps = ["maxWidth"];
const Bb = Ft({
  prop: "minWidth",
  transform: Le
}), Ub = Ft({
  prop: "height",
  transform: Le
}), wb = Ft({
  prop: "maxHeight",
  transform: Le
}), Nb = Ft({
  prop: "minHeight",
  transform: Le
});
Ft({
  prop: "size",
  cssProperty: "width",
  transform: Le
});
Ft({
  prop: "size",
  cssProperty: "height",
  transform: Le
});
const jb = Ft({
  prop: "boxSizing"
});
Xu(Rb, rf, Bb, Ub, wb, Nb, jb);
const ai = {
  // borders
  border: {
    themeKey: "borders",
    transform: We
  },
  borderTop: {
    themeKey: "borders",
    transform: We
  },
  borderRight: {
    themeKey: "borders",
    transform: We
  },
  borderBottom: {
    themeKey: "borders",
    transform: We
  },
  borderLeft: {
    themeKey: "borders",
    transform: We
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: We
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Vu
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qa
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qa
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qa
  },
  // spacing
  p: {
    style: Zt
  },
  pt: {
    style: Zt
  },
  pr: {
    style: Zt
  },
  pb: {
    style: Zt
  },
  pl: {
    style: Zt
  },
  px: {
    style: Zt
  },
  py: {
    style: Zt
  },
  padding: {
    style: Zt
  },
  paddingTop: {
    style: Zt
  },
  paddingRight: {
    style: Zt
  },
  paddingBottom: {
    style: Zt
  },
  paddingLeft: {
    style: Zt
  },
  paddingX: {
    style: Zt
  },
  paddingY: {
    style: Zt
  },
  paddingInline: {
    style: Zt
  },
  paddingInlineStart: {
    style: Zt
  },
  paddingInlineEnd: {
    style: Zt
  },
  paddingBlock: {
    style: Zt
  },
  paddingBlockStart: {
    style: Zt
  },
  paddingBlockEnd: {
    style: Zt
  },
  m: {
    style: Qt
  },
  mt: {
    style: Qt
  },
  mr: {
    style: Qt
  },
  mb: {
    style: Qt
  },
  ml: {
    style: Qt
  },
  mx: {
    style: Qt
  },
  my: {
    style: Qt
  },
  margin: {
    style: Qt
  },
  marginTop: {
    style: Qt
  },
  marginRight: {
    style: Qt
  },
  marginBottom: {
    style: Qt
  },
  marginLeft: {
    style: Qt
  },
  marginX: {
    style: Qt
  },
  marginY: {
    style: Qt
  },
  marginInline: {
    style: Qt
  },
  marginInlineStart: {
    style: Qt
  },
  marginInlineEnd: {
    style: Qt
  },
  marginBlock: {
    style: Qt
  },
  marginBlockStart: {
    style: Qt
  },
  marginBlockEnd: {
    style: Qt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (l) => ({
      "@media print": {
        display: l
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Qu
  },
  rowGap: {
    style: Ku
  },
  columnGap: {
    style: Zu
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Le
  },
  maxWidth: {
    style: rf
  },
  minWidth: {
    transform: Le
  },
  height: {
    transform: Le
  },
  maxHeight: {
    transform: Le
  },
  minHeight: {
    transform: Le
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Hb(...l) {
  const i = l.reduce((c, s) => c.concat(Object.keys(s)), []), o = new Set(i);
  return l.every((c) => o.size === Object.keys(c).length);
}
function Lb(l, i) {
  return typeof l == "function" ? l(i) : l;
}
function kb() {
  function l(o, c, s, d) {
    const y = {
      [o]: c,
      theme: s
    }, p = d[o];
    if (!p)
      return {
        [o]: c
      };
    const {
      cssProperty: v = o,
      themeKey: h,
      transform: x,
      style: A
    } = p;
    if (c == null)
      return null;
    if (h === "typography" && c === "inherit")
      return {
        [o]: c
      };
    const z = dn(s, h) || {};
    return A ? A(y) : nn(y, c, (M) => {
      let T = wu(z, x, M);
      return M === T && typeof M == "string" && (T = wu(z, x, `${o}${M === "default" ? "" : pn(M)}`, M)), v === !1 ? T : {
        [v]: T
      };
    });
  }
  function i(o) {
    const {
      sx: c,
      theme: s = {},
      nested: d
    } = o || {};
    if (!c)
      return null;
    const y = s.unstable_sxConfig ?? ai;
    function p(v) {
      let h = v;
      if (typeof v == "function")
        h = v(s);
      else if (typeof v != "object")
        return v;
      if (!h)
        return null;
      const x = zp(s.breakpoints), A = Object.keys(x);
      let z = x;
      return Object.keys(h).forEach((B) => {
        const M = Lb(h[B], s);
        if (M != null)
          if (typeof M == "object")
            if (y[B])
              z = Fr(z, l(B, M, s, y));
            else {
              const T = nn({
                theme: s
              }, M, (L) => ({
                [B]: L
              }));
              Hb(T, M) ? z[B] = i({
                sx: M,
                theme: s,
                nested: !0
              }) : z = Fr(z, T);
            }
          else
            z = Fr(z, l(B, M, s, y));
      }), !d && s.modularCssLayers ? {
        "@layer sx": $m(s, $s(A, z))
      } : $m(s, $s(A, z));
    }
    return Array.isArray(c) ? c.map(p) : p(c);
  }
  return i;
}
const Ll = kb();
Ll.filterProps = ["sx"];
function Gb(l, i) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[l] || typeof o.getColorSchemeSelector != "function")
      return {};
    let c = o.getColorSchemeSelector(l);
    return c === "&" ? i : ((c.includes("data-") || c.includes(".")) && (c = `*:where(${c.replace(/\s*&$/, "")}) &`), {
      [c]: i
    });
  }
  return o.palette.mode === l ? i : {};
}
function Va(l = {}, ...i) {
  const {
    breakpoints: o = {},
    palette: c = {},
    spacing: s,
    shape: d = {},
    ...y
  } = l, p = Zv(o), v = Rp(s);
  let h = be({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...c
    },
    spacing: v,
    shape: {
      ...Wv,
      ...d
    }
  }, y);
  return h = Fv(h), h.applyStyles = Gb, h = i.reduce((x, A) => be(x, A), h), h.unstable_sxConfig = {
    ...ai,
    ...y?.unstable_sxConfig
  }, h.unstable_sx = function(A) {
    return Ll({
      sx: A,
      theme: this
    });
  }, h;
}
function qb(l) {
  return Object.keys(l).length === 0;
}
function uf(l = null) {
  const i = Q.useContext(ni);
  return !i || qb(i) ? l : i;
}
const $b = Va();
function Ju(l = $b) {
  return uf(l);
}
function Rs(l) {
  const i = cl(l);
  return l !== i && i.styles ? (i.styles.match(/^@layer\s+[^{]*$/) || (i.styles = `@layer global{${i.styles}}`), i) : l;
}
function Bp({
  styles: l,
  themeId: i,
  defaultTheme: o = {}
}) {
  const c = Ju(o), s = i && c[i] || c;
  let d = typeof l == "function" ? l(s) : l;
  return s.modularCssLayers && (Array.isArray(d) ? d = d.map((y) => Rs(typeof y == "function" ? y(s) : y)) : d = Rs(d)), /* @__PURE__ */ lt.jsx(Mp, {
    styles: d
  });
}
const Yb = (l) => {
  const i = {
    systemProps: {},
    otherProps: {}
  }, o = l?.theme?.unstable_sxConfig ?? ai;
  return Object.keys(l).forEach((c) => {
    o[c] ? i.systemProps[c] = l[c] : i.otherProps[c] = l[c];
  }), i;
};
function of(l) {
  const {
    sx: i,
    ...o
  } = l, {
    systemProps: c,
    otherProps: s
  } = Yb(o);
  let d;
  return Array.isArray(i) ? d = [c, ...i] : typeof i == "function" ? d = (...y) => {
    const p = i(...y);
    return yn(p) ? {
      ...c,
      ...p
    } : c;
  } : d = {
    ...c,
    ...i
  }, {
    ...s,
    sx: d
  };
}
const Vm = (l) => l, Xb = () => {
  let l = Vm;
  return {
    configure(i) {
      l = i;
    },
    generate(i) {
      return l(i);
    },
    reset() {
      l = Vm;
    }
  };
}, Vb = Xb();
function Up(l) {
  var i, o, c = "";
  if (typeof l == "string" || typeof l == "number") c += l;
  else if (typeof l == "object") if (Array.isArray(l)) {
    var s = l.length;
    for (i = 0; i < s; i++) l[i] && (o = Up(l[i])) && (c && (c += " "), c += o);
  } else for (o in l) l[o] && (c && (c += " "), c += o);
  return c;
}
function kl() {
  for (var l, i, o = 0, c = "", s = arguments.length; o < s; o++) (l = arguments[o]) && (i = Up(l)) && (c && (c += " "), c += i);
  return c;
}
const Qb = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Gl(l, i, o = "Mui") {
  const c = Qb[i];
  return c ? `${o}-${c}` : `${Vb.generate(l)}-${i}`;
}
function cf(l, i, o = "Mui") {
  const c = {};
  return i.forEach((s) => {
    c[s] = Gl(l, s, o);
  }), c;
}
function wp(l) {
  const {
    variants: i,
    ...o
  } = l, c = {
    variants: i,
    style: cl(o),
    isProcessed: !0
  };
  return c.style === o || i && i.forEach((s) => {
    typeof s.style != "function" && (s.style = cl(s.style));
  }), c;
}
const Zb = Va();
function Bs(l) {
  return l !== "ownerState" && l !== "theme" && l !== "sx" && l !== "as";
}
function Nl(l, i) {
  return i && l && typeof l == "object" && l.styles && !l.styles.startsWith("@layer") && (l.styles = `@layer ${i}{${String(l.styles)}}`), l;
}
function Kb(l) {
  return l ? (i, o) => o[l] : null;
}
function Jb(l, i, o) {
  l.theme = Wb(l.theme) ? o : l.theme[i] || l.theme;
}
function Ru(l, i, o) {
  const c = typeof i == "function" ? i(l) : i;
  if (Array.isArray(c))
    return c.flatMap((s) => Ru(l, s, o));
  if (Array.isArray(c?.variants)) {
    let s;
    if (c.isProcessed)
      s = o ? Nl(c.style, o) : c.style;
    else {
      const {
        variants: d,
        ...y
      } = c;
      s = o ? Nl(cl(y), o) : y;
    }
    return Np(l, c.variants, [s], o);
  }
  return c?.isProcessed ? o ? Nl(cl(c.style), o) : c.style : o ? Nl(cl(c), o) : c;
}
function Np(l, i, o = [], c = void 0) {
  let s;
  t: for (let d = 0; d < i.length; d += 1) {
    const y = i[d];
    if (typeof y.props == "function") {
      if (s ??= {
        ...l,
        ...l.ownerState,
        ownerState: l.ownerState
      }, !y.props(s))
        continue;
    } else
      for (const p in y.props)
        if (l[p] !== y.props[p] && l.ownerState?.[p] !== y.props[p])
          continue t;
    typeof y.style == "function" ? (s ??= {
      ...l,
      ...l.ownerState,
      ownerState: l.ownerState
    }, o.push(c ? Nl(cl(y.style(s)), c) : y.style(s))) : o.push(c ? Nl(cl(y.style), c) : y.style);
  }
  return o;
}
function jp(l = {}) {
  const {
    themeId: i,
    defaultTheme: o = Zb,
    rootShouldForwardProp: c = Bs,
    slotShouldForwardProp: s = Bs
  } = l;
  function d(p) {
    Jb(p, i, o);
  }
  return (p, v = {}) => {
    Yv(p, (q) => q.filter((Y) => Y !== Ll));
    const {
      name: h,
      slot: x,
      skipVariantsResolver: A,
      skipSx: z,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: B = Kb(Pb(x)),
      ...M
    } = v, T = h && h.startsWith("Mui") || x ? "components" : "custom", L = A !== void 0 ? A : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      x && x !== "Root" && x !== "root" || !1
    ), $ = z || !1;
    let K = Bs;
    x === "Root" || x === "root" ? K = c : x ? K = s : Ib(p) && (K = void 0);
    const V = $v(p, {
      shouldForwardProp: K,
      label: Fb(),
      ...M
    }), Z = (q) => {
      if (q.__emotion_real === q)
        return q;
      if (typeof q == "function")
        return function(I) {
          return Ru(I, q, I.theme.modularCssLayers ? T : void 0);
        };
      if (yn(q)) {
        const Y = wp(q);
        return function(W) {
          return Y.variants ? Ru(W, Y, W.theme.modularCssLayers ? T : void 0) : W.theme.modularCssLayers ? Nl(Y.style, T) : Y.style;
        };
      }
      return q;
    }, H = (...q) => {
      const Y = [], I = q.map(Z), W = [];
      if (Y.push(d), h && B && W.push(function(P) {
        const ot = P.theme.components?.[h]?.styleOverrides;
        if (!ot)
          return null;
        const R = {};
        for (const X in ot)
          R[X] = Ru(P, ot[X], P.theme.modularCssLayers ? "theme" : void 0);
        return B(P, R);
      }), h && !L && W.push(function(P) {
        const ot = P.theme?.components?.[h]?.variants;
        return ot ? Np(P, ot, [], P.theme.modularCssLayers ? "theme" : void 0) : null;
      }), $ || W.push(Ll), Array.isArray(I[0])) {
        const g = I.shift(), P = new Array(Y.length).fill(""), F = new Array(W.length).fill("");
        let ot;
        ot = [...P, ...g, ...F], ot.raw = [...P, ...g.raw, ...F], Y.unshift(ot);
      }
      const it = [...Y, ...I, ...W], nt = V(...it);
      return p.muiName && (nt.muiName = p.muiName), nt;
    };
    return V.withConfig && (H.withConfig = V.withConfig), H;
  };
}
function Fb(l, i) {
  return void 0;
}
function Wb(l) {
  for (const i in l)
    return !1;
  return !0;
}
function Ib(l) {
  return typeof l == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  l.charCodeAt(0) > 96;
}
function Pb(l) {
  return l && l.charAt(0).toLowerCase() + l.slice(1);
}
const sf = jp();
function Nu(l, i, o = !1) {
  const c = {
    ...i
  };
  for (const s in l)
    if (Object.prototype.hasOwnProperty.call(l, s)) {
      const d = s;
      if (d === "components" || d === "slots")
        c[d] = {
          ...l[d],
          ...c[d]
        };
      else if (d === "componentsProps" || d === "slotProps") {
        const y = l[d], p = i[d];
        if (!p)
          c[d] = y || {};
        else if (!y)
          c[d] = p;
        else {
          c[d] = {
            ...p
          };
          for (const v in y)
            if (Object.prototype.hasOwnProperty.call(y, v)) {
              const h = v;
              c[d][h] = Nu(y[h], p[h], o);
            }
        }
      } else d === "className" && o && i.className ? c.className = kl(l?.className, i?.className) : d === "style" && o && i.style ? c.style = {
        ...l?.style,
        ...i?.style
      } : c[d] === void 0 && (c[d] = l[d]);
    }
  return c;
}
function tS(l) {
  const {
    theme: i,
    name: o,
    props: c
  } = l;
  return !i || !i.components || !i.components[o] || !i.components[o].defaultProps ? c : Nu(i.components[o].defaultProps, c);
}
function ff({
  props: l,
  name: i,
  defaultTheme: o,
  themeId: c
}) {
  let s = Ju(o);
  return c && (s = s[c] || s), tS({
    theme: s,
    name: i,
    props: l
  });
}
const Hp = typeof window < "u" ? Q.useLayoutEffect : Q.useEffect;
function eS(l, i = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(l, o));
}
function df(l, i = 0, o = 1) {
  return eS(l, i, o);
}
function nS(l) {
  l = l.slice(1);
  const i = new RegExp(`.{1,${l.length >= 6 ? 2 : 1}}`, "g");
  let o = l.match(i);
  return o && o[0].length === 1 && (o = o.map((c) => c + c)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((c, s) => s < 3 ? parseInt(c, 16) : Math.round(parseInt(c, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function sl(l) {
  if (l.type)
    return l;
  if (l.charAt(0) === "#")
    return sl(nS(l));
  const i = l.indexOf("("), o = l.substring(0, i);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(jl(9, l));
  let c = l.substring(i + 1, l.length - 1), s;
  if (o === "color") {
    if (c = c.split(" "), s = c.shift(), c.length === 4 && c[3].charAt(0) === "/" && (c[3] = c[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(jl(10, s));
  } else
    c = c.split(",");
  return c = c.map((d) => parseFloat(d)), {
    type: o,
    values: c,
    colorSpace: s
  };
}
const lS = (l) => {
  const i = sl(l);
  return i.values.slice(0, 3).map((o, c) => i.type.includes("hsl") && c !== 0 ? `${o}%` : o).join(" ");
}, Kr = (l, i) => {
  try {
    return lS(l);
  } catch {
    return l;
  }
};
function Fu(l) {
  const {
    type: i,
    colorSpace: o
  } = l;
  let {
    values: c
  } = l;
  return i.includes("rgb") ? c = c.map((s, d) => d < 3 ? parseInt(s, 10) : s) : i.includes("hsl") && (c[1] = `${c[1]}%`, c[2] = `${c[2]}%`), i.includes("color") ? c = `${o} ${c.join(" ")}` : c = `${c.join(", ")}`, `${i}(${c})`;
}
function Lp(l) {
  l = sl(l);
  const {
    values: i
  } = l, o = i[0], c = i[1] / 100, s = i[2] / 100, d = c * Math.min(s, 1 - s), y = (h, x = (h + o / 30) % 12) => s - d * Math.max(Math.min(x - 3, 9 - x, 1), -1);
  let p = "rgb";
  const v = [Math.round(y(0) * 255), Math.round(y(8) * 255), Math.round(y(4) * 255)];
  return l.type === "hsla" && (p += "a", v.push(i[3])), Fu({
    type: p,
    values: v
  });
}
function Ys(l) {
  l = sl(l);
  let i = l.type === "hsl" || l.type === "hsla" ? sl(Lp(l)).values : l.values;
  return i = i.map((o) => (l.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3));
}
function aS(l, i) {
  const o = Ys(l), c = Ys(i);
  return (Math.max(o, c) + 0.05) / (Math.min(o, c) + 0.05);
}
function yf(l, i) {
  return l = sl(l), i = df(i), (l.type === "rgb" || l.type === "hsl") && (l.type += "a"), l.type === "color" ? l.values[3] = `/${i}` : l.values[3] = i, Fu(l);
}
function Ul(l, i, o) {
  try {
    return yf(l, i);
  } catch {
    return l;
  }
}
function Wu(l, i) {
  if (l = sl(l), i = df(i), l.type.includes("hsl"))
    l.values[2] *= 1 - i;
  else if (l.type.includes("rgb") || l.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      l.values[o] *= 1 - i;
  return Fu(l);
}
function Rt(l, i, o) {
  try {
    return Wu(l, i);
  } catch {
    return l;
  }
}
function Iu(l, i) {
  if (l = sl(l), i = df(i), l.type.includes("hsl"))
    l.values[2] += (100 - l.values[2]) * i;
  else if (l.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      l.values[o] += (255 - l.values[o]) * i;
  else if (l.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      l.values[o] += (1 - l.values[o]) * i;
  return Fu(l);
}
function Bt(l, i, o) {
  try {
    return Iu(l, i);
  } catch {
    return l;
  }
}
function rS(l, i = 0.15) {
  return Ys(l) > 0.5 ? Wu(l, i) : Iu(l, i);
}
function Mu(l, i, o) {
  try {
    return rS(l, i);
  } catch {
    return l;
  }
}
const kp = /* @__PURE__ */ Q.createContext(null);
function mf() {
  return Q.useContext(kp);
}
const iS = typeof Symbol == "function" && Symbol.for, uS = iS ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function oS(l, i) {
  return typeof i == "function" ? i(l) : {
    ...l,
    ...i
  };
}
function cS(l) {
  const {
    children: i,
    theme: o
  } = l, c = mf(), s = Q.useMemo(() => {
    const d = c === null ? {
      ...o
    } : oS(c, o);
    return d != null && (d[uS] = c !== null), d;
  }, [o, c]);
  return /* @__PURE__ */ lt.jsx(kp.Provider, {
    value: s,
    children: i
  });
}
const sS = /* @__PURE__ */ Q.createContext();
function fS({
  value: l,
  ...i
}) {
  return /* @__PURE__ */ lt.jsx(sS.Provider, {
    value: l ?? !0,
    ...i
  });
}
const Gp = /* @__PURE__ */ Q.createContext(void 0);
function dS({
  value: l,
  children: i
}) {
  return /* @__PURE__ */ lt.jsx(Gp.Provider, {
    value: l,
    children: i
  });
}
function yS(l) {
  const {
    theme: i,
    name: o,
    props: c
  } = l;
  if (!i || !i.components || !i.components[o])
    return c;
  const s = i.components[o];
  return s.defaultProps ? Nu(s.defaultProps, c, i.components.mergeClassNameAndStyle) : !s.styleOverrides && !s.variants ? Nu(s, c, i.components.mergeClassNameAndStyle) : c;
}
function mS({
  props: l,
  name: i
}) {
  const o = Q.useContext(Gp);
  return yS({
    props: l,
    name: i,
    theme: {
      components: o
    }
  });
}
let Qm = 0;
function pS(l) {
  const [i, o] = Q.useState(l), c = l || i;
  return Q.useEffect(() => {
    i == null && (Qm += 1, o(`mui-${Qm}`));
  }, [i]), c;
}
const hS = {
  ...js
}, Zm = hS.useId;
function gS(l) {
  return Zm !== void 0 ? Zm() : pS(l);
}
function vS(l) {
  const i = uf(), o = gS() || "", {
    modularCssLayers: c
  } = l;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !c || i !== null ? s = "" : typeof c == "string" ? s = c.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, Hp(() => {
    const d = document.querySelector("head");
    if (!d)
      return;
    const y = d.firstChild;
    if (s) {
      if (y && y.hasAttribute?.("data-mui-layer-order") && y.getAttribute("data-mui-layer-order") === o)
        return;
      const p = document.createElement("style");
      p.setAttribute("data-mui-layer-order", o), p.textContent = s, d.prepend(p);
    } else
      d.querySelector(`style[data-mui-layer-order="${o}"]`)?.remove();
  }, [s, o]), s ? /* @__PURE__ */ lt.jsx(Bp, {
    styles: s
  }) : null;
}
const Km = {};
function Jm(l, i, o, c = !1) {
  return Q.useMemo(() => {
    const s = l && i[l] || i;
    if (typeof o == "function") {
      const d = o(s), y = l ? {
        ...i,
        [l]: d
      } : d;
      return c ? () => y : y;
    }
    return l ? {
      ...i,
      [l]: o
    } : {
      ...i,
      ...o
    };
  }, [l, i, o, c]);
}
function qp(l) {
  const {
    children: i,
    theme: o,
    themeId: c
  } = l, s = uf(Km), d = mf() || Km, y = Jm(c, s, o), p = Jm(c, d, o, !0), v = (c ? y[c] : y).direction === "rtl", h = vS(y);
  return /* @__PURE__ */ lt.jsx(cS, {
    theme: p,
    children: /* @__PURE__ */ lt.jsx(ni.Provider, {
      value: y,
      children: /* @__PURE__ */ lt.jsx(fS, {
        value: v,
        children: /* @__PURE__ */ lt.jsxs(dS, {
          value: c ? y[c].components : y.components,
          children: [h, i]
        })
      })
    })
  });
}
const Fm = {
  theme: void 0
};
function bS(l) {
  let i, o;
  return function(s) {
    let d = i;
    return (d === void 0 || s.theme !== o) && (Fm.theme = s.theme, d = wp(l(Fm)), i = d, o = s.theme), d;
  };
}
const pf = "mode", hf = "color-scheme", SS = "data-color-scheme";
function CS(l) {
  const {
    defaultMode: i = "system",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: c = "dark",
    modeStorageKey: s = pf,
    colorSchemeStorageKey: d = hf,
    attribute: y = SS,
    colorSchemeNode: p = "document.documentElement",
    nonce: v
  } = l || {};
  let h = "", x = y;
  if (y === "class" && (x = ".%s"), y === "data" && (x = "[data-%s]"), x.startsWith(".")) {
    const z = x.substring(1);
    h += `${p}.classList.remove('${z}'.replace('%s', light), '${z}'.replace('%s', dark));
      ${p}.classList.add('${z}'.replace('%s', colorScheme));`;
  }
  const A = x.match(/\[([^[\]]+)\]/);
  if (A) {
    const [z, B] = A[1].split("=");
    B || (h += `${p}.removeAttribute('${z}'.replace('%s', light));
      ${p}.removeAttribute('${z}'.replace('%s', dark));`), h += `
      ${p}.setAttribute('${z}'.replace('%s', colorScheme), ${B ? `${B}.replace('%s', colorScheme)` : '""'});`;
  } else
    h += `${p}.setAttribute('${x}', colorScheme);`;
  return /* @__PURE__ */ lt.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? v : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${i}';
  const dark = localStorage.getItem('${d}-dark') || '${c}';
  const light = localStorage.getItem('${d}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function AS() {
}
const xS = ({
  key: l,
  storageWindow: i
}) => (!i && typeof window < "u" && (i = window), {
  get(o) {
    if (typeof window > "u")
      return;
    if (!i)
      return o;
    let c;
    try {
      c = i.localStorage.getItem(l);
    } catch {
    }
    return c || o;
  },
  set: (o) => {
    if (i)
      try {
        i.localStorage.setItem(l, o);
      } catch {
      }
  },
  subscribe: (o) => {
    if (!i)
      return AS;
    const c = (s) => {
      const d = s.newValue;
      s.key === l && o(d);
    };
    return i.addEventListener("storage", c), () => {
      i.removeEventListener("storage", c);
    };
  }
});
function Us() {
}
function Wm(l) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && l === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function $p(l, i) {
  if (l.mode === "light" || l.mode === "system" && l.systemMode === "light")
    return i("light");
  if (l.mode === "dark" || l.mode === "system" && l.systemMode === "dark")
    return i("dark");
}
function TS(l) {
  return $p(l, (i) => {
    if (i === "light")
      return l.lightColorScheme;
    if (i === "dark")
      return l.darkColorScheme;
  });
}
function ES(l) {
  const {
    defaultMode: i = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: c,
    supportedColorSchemes: s = [],
    modeStorageKey: d = pf,
    colorSchemeStorageKey: y = hf,
    storageWindow: p = typeof window > "u" ? void 0 : window,
    storageManager: v = xS,
    noSsr: h = !1
  } = l, x = s.join(","), A = s.length > 1, z = Q.useMemo(() => v?.({
    key: d,
    storageWindow: p
  }), [v, d, p]), B = Q.useMemo(() => v?.({
    key: `${y}-light`,
    storageWindow: p
  }), [v, y, p]), M = Q.useMemo(() => v?.({
    key: `${y}-dark`,
    storageWindow: p
  }), [v, y, p]), [T, L] = Q.useState(() => {
    const I = z?.get(i) || i, W = B?.get(o) || o, it = M?.get(c) || c;
    return {
      mode: I,
      systemMode: Wm(I),
      lightColorScheme: W,
      darkColorScheme: it
    };
  }), [$, K] = Q.useState(h || !A);
  Q.useEffect(() => {
    K(!0);
  }, []);
  const V = TS(T), Z = Q.useCallback((I) => {
    L((W) => {
      if (I === W.mode)
        return W;
      const it = I ?? i;
      return z?.set(it), {
        ...W,
        mode: it,
        systemMode: Wm(it)
      };
    });
  }, [z, i]), H = Q.useCallback((I) => {
    I ? typeof I == "string" ? I && !x.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : L((W) => {
      const it = {
        ...W
      };
      return $p(W, (nt) => {
        nt === "light" && (B?.set(I), it.lightColorScheme = I), nt === "dark" && (M?.set(I), it.darkColorScheme = I);
      }), it;
    }) : L((W) => {
      const it = {
        ...W
      }, nt = I.light === null ? o : I.light, g = I.dark === null ? c : I.dark;
      return nt && (x.includes(nt) ? (it.lightColorScheme = nt, B?.set(nt)) : console.error(`\`${nt}\` does not exist in \`theme.colorSchemes\`.`)), g && (x.includes(g) ? (it.darkColorScheme = g, M?.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), it;
    }) : L((W) => (B?.set(o), M?.set(c), {
      ...W,
      lightColorScheme: o,
      darkColorScheme: c
    }));
  }, [x, B, M, o, c]), q = Q.useCallback((I) => {
    T.mode === "system" && L((W) => {
      const it = I?.matches ? "dark" : "light";
      return W.systemMode === it ? W : {
        ...W,
        systemMode: it
      };
    });
  }, [T.mode]), Y = Q.useRef(q);
  return Y.current = q, Q.useEffect(() => {
    if (typeof window.matchMedia != "function" || !A)
      return;
    const I = (...it) => Y.current(...it), W = window.matchMedia("(prefers-color-scheme: dark)");
    return W.addListener(I), I(W), () => {
      W.removeListener(I);
    };
  }, [A]), Q.useEffect(() => {
    if (A) {
      const I = z?.subscribe((nt) => {
        (!nt || ["light", "dark", "system"].includes(nt)) && Z(nt || i);
      }) || Us, W = B?.subscribe((nt) => {
        (!nt || x.match(nt)) && H({
          light: nt
        });
      }) || Us, it = M?.subscribe((nt) => {
        (!nt || x.match(nt)) && H({
          dark: nt
        });
      }) || Us;
      return () => {
        I(), W(), it();
      };
    }
  }, [H, Z, x, i, p, A, z, B, M]), {
    ...T,
    mode: $ ? T.mode : void 0,
    systemMode: $ ? T.systemMode : void 0,
    colorScheme: $ ? V : void 0,
    setMode: Z,
    setColorScheme: H
  };
}
const MS = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function OS(l) {
  const {
    themeId: i,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    modeStorageKey: c = pf,
    colorSchemeStorageKey: s = hf,
    disableTransitionOnChange: d = !1,
    defaultColorScheme: y,
    resolveTheme: p
  } = l, v = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, h = /* @__PURE__ */ Q.createContext(void 0), x = () => Q.useContext(h) || v, A = {}, z = {};
  function B($) {
    const {
      children: K,
      theme: V,
      modeStorageKey: Z = c,
      colorSchemeStorageKey: H = s,
      disableTransitionOnChange: q = d,
      storageManager: Y,
      storageWindow: I = typeof window > "u" ? void 0 : window,
      documentNode: W = typeof document > "u" ? void 0 : document,
      colorSchemeNode: it = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: nt = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: P = "system",
      forceThemeRerender: F = !1,
      noSsr: ot
    } = $, R = Q.useRef(!1), X = mf(), at = Q.useContext(h), St = !!at && !nt, At = Q.useMemo(() => V || (typeof o == "function" ? o() : o), [V]), S = At[i], j = S || At, {
      colorSchemes: J = A,
      components: tt = z,
      cssVarPrefix: st
    } = j, mt = Object.keys(J).filter((ge) => !!J[ge]).join(","), pt = Q.useMemo(() => mt.split(","), [mt]), le = typeof y == "string" ? y : y.light, Gt = typeof y == "string" ? y : y.dark, fl = J[le] && J[Gt] ? P : J[j.defaultColorScheme]?.palette?.mode || j.palette?.mode, {
      mode: Yl,
      setMode: Xl,
      systemMode: Ka,
      lightColorScheme: ln,
      darkColorScheme: Vl,
      colorScheme: Ja,
      setColorScheme: ri
    } = ES({
      supportedColorSchemes: pt,
      defaultLightColorScheme: le,
      defaultDarkColorScheme: Gt,
      modeStorageKey: Z,
      colorSchemeStorageKey: H,
      defaultMode: fl,
      storageManager: Y,
      storageWindow: I,
      noSsr: ot
    });
    let Ql = Yl, he = Ja;
    St && (Ql = at.mode, he = at.colorScheme);
    let jn = he || j.defaultColorScheme;
    j.vars && !F && (jn = j.defaultColorScheme);
    const dl = Q.useMemo(() => {
      const ge = j.generateThemeVars?.() || j.vars, qt = {
        ...j,
        components: tt,
        colorSchemes: J,
        cssVarPrefix: st,
        vars: ge
      };
      if (typeof qt.generateSpacing == "function" && (qt.spacing = qt.generateSpacing()), jn) {
        const ie = J[jn];
        ie && typeof ie == "object" && Object.keys(ie).forEach((Ge) => {
          ie[Ge] && typeof ie[Ge] == "object" ? qt[Ge] = {
            ...qt[Ge],
            ...ie[Ge]
          } : qt[Ge] = ie[Ge];
        });
      }
      return p ? p(qt) : qt;
    }, [j, jn, tt, J, st]), yl = j.colorSchemeSelector;
    Hp(() => {
      if (he && it && yl && yl !== "media") {
        const ge = yl;
        let qt = yl;
        if (ge === "class" && (qt = ".%s"), ge === "data" && (qt = "[data-%s]"), ge?.startsWith("data-") && !ge.includes("%s") && (qt = `[${ge}="%s"]`), qt.startsWith("."))
          it.classList.remove(...pt.map((ie) => qt.substring(1).replace("%s", ie))), it.classList.add(qt.substring(1).replace("%s", he));
        else {
          const ie = qt.replace("%s", he).match(/\[([^\]]+)\]/);
          if (ie) {
            const [Ge, Zl] = ie[1].split("=");
            Zl || pt.forEach((ao) => {
              it.removeAttribute(Ge.replace(he, ao));
            }), it.setAttribute(Ge, Zl ? Zl.replace(/"|'/g, "") : "");
          } else
            it.setAttribute(qt, he);
        }
      }
    }, [he, yl, it, pt]), Q.useEffect(() => {
      let ge;
      if (q && R.current && W) {
        const qt = W.createElement("style");
        qt.appendChild(W.createTextNode(MS)), W.head.appendChild(qt), window.getComputedStyle(W.body), ge = setTimeout(() => {
          W.head.removeChild(qt);
        }, 1);
      }
      return () => {
        clearTimeout(ge);
      };
    }, [he, q, W]), Q.useEffect(() => (R.current = !0, () => {
      R.current = !1;
    }), []);
    const lo = Q.useMemo(() => ({
      allColorSchemes: pt,
      colorScheme: he,
      darkColorScheme: Vl,
      lightColorScheme: ln,
      mode: Ql,
      setColorScheme: ri,
      setMode: Xl,
      systemMode: Ka
    }), [pt, he, Vl, ln, Ql, ri, Xl, Ka, dl.colorSchemeSelector]);
    let ye = !0;
    (g || j.cssVariables === !1 || St && X?.cssVarPrefix === st) && (ye = !1);
    const ii = /* @__PURE__ */ lt.jsxs(Q.Fragment, {
      children: [/* @__PURE__ */ lt.jsx(qp, {
        themeId: S ? i : void 0,
        theme: dl,
        children: K
      }), ye && /* @__PURE__ */ lt.jsx(Mp, {
        styles: dl.generateStyleSheets?.() || []
      })]
    });
    return St ? ii : /* @__PURE__ */ lt.jsx(h.Provider, {
      value: lo,
      children: ii
    });
  }
  const M = typeof y == "string" ? y : y.light, T = typeof y == "string" ? y : y.dark;
  return {
    CssVarsProvider: B,
    useColorScheme: x,
    getInitColorSchemeScript: ($) => CS({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: M,
      defaultDarkColorScheme: T,
      modeStorageKey: c,
      ...$
    })
  };
}
function _S(l = "") {
  function i(...c) {
    if (!c.length)
      return "";
    const s = c[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${l ? `${l}-` : ""}${s}${i(...c.slice(1))})` : `, ${s}`;
  }
  return (c, ...s) => `var(--${l ? `${l}-` : ""}${c}${i(...s)})`;
}
const Im = (l, i, o, c = []) => {
  let s = l;
  i.forEach((d, y) => {
    y === i.length - 1 ? Array.isArray(s) ? s[Number(d)] = o : s && typeof s == "object" && (s[d] = o) : s && typeof s == "object" && (s[d] || (s[d] = c.includes(d) ? [] : {}), s = s[d]);
  });
}, zS = (l, i, o) => {
  function c(s, d = [], y = []) {
    Object.entries(s).forEach(([p, v]) => {
      (!o || o && !o([...d, p])) && v != null && (typeof v == "object" && Object.keys(v).length > 0 ? c(v, [...d, p], Array.isArray(v) ? [...y, p] : y) : i([...d, p], v, y));
    });
  }
  c(l);
}, DS = (l, i) => typeof i == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((c) => l.includes(c)) || l[l.length - 1].toLowerCase().includes("opacity") ? i : `${i}px` : i;
function ws(l, i) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: c
  } = i || {}, s = {}, d = {}, y = {};
  return zS(
    l,
    (p, v, h) => {
      if ((typeof v == "string" || typeof v == "number") && (!c || !c(p, v))) {
        const x = `--${o ? `${o}-` : ""}${p.join("-")}`, A = DS(p, v);
        Object.assign(s, {
          [x]: A
        }), Im(d, p, `var(${x})`, h), Im(y, p, `var(${x}, ${A})`, h);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: d,
    varsWithDefaults: y
  };
}
function RS(l, i = {}) {
  const {
    getSelector: o = $,
    disableCssColorScheme: c,
    colorSchemeSelector: s,
    enableContrastVars: d
  } = i, {
    colorSchemes: y = {},
    components: p,
    defaultColorScheme: v = "light",
    ...h
  } = l, {
    vars: x,
    css: A,
    varsWithDefaults: z
  } = ws(h, i);
  let B = z;
  const M = {}, {
    [v]: T,
    ...L
  } = y;
  if (Object.entries(L || {}).forEach(([Z, H]) => {
    const {
      vars: q,
      css: Y,
      varsWithDefaults: I
    } = ws(H, i);
    B = be(B, I), M[Z] = {
      css: Y,
      vars: q
    };
  }), T) {
    const {
      css: Z,
      vars: H,
      varsWithDefaults: q
    } = ws(T, i);
    B = be(B, q), M[v] = {
      css: Z,
      vars: H
    };
  }
  function $(Z, H) {
    let q = s;
    if (s === "class" && (q = ".%s"), s === "data" && (q = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (q = `[${s}="%s"]`), Z) {
      if (q === "media")
        return l.defaultColorScheme === Z ? ":root" : {
          [`@media (prefers-color-scheme: ${y[Z]?.palette?.mode || Z})`]: {
            ":root": H
          }
        };
      if (q)
        return l.defaultColorScheme === Z ? `:root, ${q.replace("%s", String(Z))}` : q.replace("%s", String(Z));
    }
    return ":root";
  }
  return {
    vars: B,
    generateThemeVars: () => {
      let Z = {
        ...x
      };
      return Object.entries(M).forEach(([, {
        vars: H
      }]) => {
        Z = be(Z, H);
      }), Z;
    },
    generateStyleSheets: () => {
      const Z = [], H = l.defaultColorScheme || "light";
      function q(W, it) {
        Object.keys(it).length && Z.push(typeof W == "string" ? {
          [W]: {
            ...it
          }
        } : W);
      }
      q(o(void 0, {
        ...A
      }), A);
      const {
        [H]: Y,
        ...I
      } = M;
      if (Y) {
        const {
          css: W
        } = Y, it = y[H]?.palette?.mode, nt = !c && it ? {
          colorScheme: it,
          ...W
        } : {
          ...W
        };
        q(o(H, {
          ...nt
        }), nt);
      }
      return Object.entries(I).forEach(([W, {
        css: it
      }]) => {
        const nt = y[W]?.palette?.mode, g = !c && nt ? {
          colorScheme: nt,
          ...it
        } : {
          ...it
        };
        q(o(W, {
          ...g
        }), g);
      }), d && Z.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), Z;
    }
  };
}
function BS(l) {
  return function(o) {
    return l === "media" ? `@media (prefers-color-scheme: ${o})` : l ? l.startsWith("data-") && !l.includes("%s") ? `[${l}="${o}"] &` : l === "class" ? `.${o} &` : l === "data" ? `[data-${o}] &` : `${l.replace("%s", o)} &` : "&";
  };
}
function Qa(l, i, o = void 0) {
  const c = {};
  for (const s in l) {
    const d = l[s];
    let y = "", p = !0;
    for (let v = 0; v < d.length; v += 1) {
      const h = d[v];
      h && (y += (p === !0 ? "" : " ") + i(h), p = !1, o && o[h] && (y += " " + o[h]));
    }
    c[s] = y;
  }
  return c;
}
const US = Va(), wS = sf("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (l, i) => {
    const {
      ownerState: o
    } = l;
    return [i.root, i[`maxWidth${pn(String(o.maxWidth))}`], o.fixed && i.fixed, o.disableGutters && i.disableGutters];
  }
}), NS = (l) => ff({
  props: l,
  name: "MuiContainer",
  defaultTheme: US
}), jS = (l, i) => {
  const o = (v) => Gl(i, v), {
    classes: c,
    fixed: s,
    disableGutters: d,
    maxWidth: y
  } = l, p = {
    root: ["root", y && `maxWidth${pn(String(y))}`, s && "fixed", d && "disableGutters"]
  };
  return Qa(p, o, c);
};
function HS(l = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: i = wS,
    useThemeProps: o = NS,
    componentName: c = "MuiContainer"
  } = l, s = i(({
    theme: y,
    ownerState: p
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!p.disableGutters && {
      paddingLeft: y.spacing(2),
      paddingRight: y.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [y.breakpoints.up("sm")]: {
        paddingLeft: y.spacing(3),
        paddingRight: y.spacing(3)
      }
    }
  }), ({
    theme: y,
    ownerState: p
  }) => p.fixed && Object.keys(y.breakpoints.values).reduce((v, h) => {
    const x = h, A = y.breakpoints.values[x];
    return A !== 0 && (v[y.breakpoints.up(x)] = {
      maxWidth: `${A}${y.breakpoints.unit}`
    }), v;
  }, {}), ({
    theme: y,
    ownerState: p
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...p.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [y.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(y.breakpoints.values.xs, 444)
      }
    },
    ...p.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    p.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [y.breakpoints.up(p.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${y.breakpoints.values[p.maxWidth]}${y.breakpoints.unit}`
      }
    }
  }));
  return /* @__PURE__ */ Q.forwardRef(function(p, v) {
    const h = o(p), {
      className: x,
      component: A = "div",
      disableGutters: z = !1,
      fixed: B = !1,
      maxWidth: M = "lg",
      classes: T,
      ...L
    } = h, $ = {
      ...h,
      component: A,
      disableGutters: z,
      fixed: B,
      maxWidth: M
    }, K = jS($, c);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ lt.jsx(s, {
        as: A,
        ownerState: $,
        className: kl(K.root, x),
        ref: v,
        ...L
      })
    );
  });
}
function LS(l, i) {
  return /* @__PURE__ */ Q.isValidElement(l) && i.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    l.type.muiName ?? l.type?._payload?.value?.muiName
  ) !== -1;
}
const kS = (l, i) => l.filter((o) => i.includes(o)), Za = (l, i, o) => {
  const c = l.keys[0];
  Array.isArray(i) ? i.forEach((s, d) => {
    o((y, p) => {
      d <= l.keys.length - 1 && (d === 0 ? Object.assign(y, p) : y[l.up(l.keys[d])] = p);
    }, s);
  }) : i && typeof i == "object" ? (Object.keys(i).length > l.keys.length ? l.keys : kS(l.keys, Object.keys(i))).forEach((d) => {
    if (l.keys.includes(d)) {
      const y = i[d];
      y !== void 0 && o((p, v) => {
        c === d ? Object.assign(p, v) : p[l.up(d)] = v;
      }, y);
    }
  }) : (typeof i == "number" || typeof i == "string") && o((s, d) => {
    Object.assign(s, d);
  }, i);
};
function ju(l) {
  return `--Grid-${l}Spacing`;
}
function Pu(l) {
  return `--Grid-parent-${l}Spacing`;
}
const Pm = "--Grid-columns", $a = "--Grid-parent-columns", GS = ({
  theme: l,
  ownerState: i
}) => {
  const o = {};
  return Za(l.breakpoints, i.size, (c, s) => {
    let d = {};
    s === "grow" && (d = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), s === "auto" && (d = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof s == "number" && (d = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${s} / var(${$a}) - (var(${$a}) - ${s}) * (var(${Pu("column")}) / var(${$a})))`
    }), c(o, d);
  }), o;
}, qS = ({
  theme: l,
  ownerState: i
}) => {
  const o = {};
  return Za(l.breakpoints, i.offset, (c, s) => {
    let d = {};
    s === "auto" && (d = {
      marginLeft: "auto"
    }), typeof s == "number" && (d = {
      marginLeft: s === 0 ? "0px" : `calc(100% * ${s} / var(${$a}) + var(${Pu("column")}) * ${s} / var(${$a}))`
    }), c(o, d);
  }), o;
}, $S = ({
  theme: l,
  ownerState: i
}) => {
  if (!i.container)
    return {};
  const o = {
    [Pm]: 12
  };
  return Za(l.breakpoints, i.columns, (c, s) => {
    const d = s ?? 12;
    c(o, {
      [Pm]: d,
      "> *": {
        [$a]: d
      }
    });
  }), o;
}, YS = ({
  theme: l,
  ownerState: i
}) => {
  if (!i.container)
    return {};
  const o = {};
  return Za(l.breakpoints, i.rowSpacing, (c, s) => {
    const d = typeof s == "string" ? s : l.spacing?.(s);
    c(o, {
      [ju("row")]: d,
      "> *": {
        [Pu("row")]: d
      }
    });
  }), o;
}, XS = ({
  theme: l,
  ownerState: i
}) => {
  if (!i.container)
    return {};
  const o = {};
  return Za(l.breakpoints, i.columnSpacing, (c, s) => {
    const d = typeof s == "string" ? s : l.spacing?.(s);
    c(o, {
      [ju("column")]: d,
      "> *": {
        [Pu("column")]: d
      }
    });
  }), o;
}, VS = ({
  theme: l,
  ownerState: i
}) => {
  if (!i.container)
    return {};
  const o = {};
  return Za(l.breakpoints, i.direction, (c, s) => {
    c(o, {
      flexDirection: s
    });
  }), o;
}, QS = ({
  ownerState: l
}) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...l.container && {
    display: "flex",
    flexWrap: "wrap",
    ...l.wrap && l.wrap !== "wrap" && {
      flexWrap: l.wrap
    },
    gap: `var(${ju("row")}) var(${ju("column")})`
  }
}), ZS = (l) => {
  const i = [];
  return Object.entries(l).forEach(([o, c]) => {
    c !== !1 && c !== void 0 && i.push(`grid-${o}-${String(c)}`);
  }), i;
}, KS = (l, i = "xs") => {
  function o(c) {
    return c === void 0 ? !1 : typeof c == "string" && !Number.isNaN(Number(c)) || typeof c == "number" && c > 0;
  }
  if (o(l))
    return [`spacing-${i}-${String(l)}`];
  if (typeof l == "object" && !Array.isArray(l)) {
    const c = [];
    return Object.entries(l).forEach(([s, d]) => {
      o(d) && c.push(`spacing-${s}-${String(d)}`);
    }), c;
  }
  return [];
}, JS = (l) => l === void 0 ? [] : typeof l == "object" ? Object.entries(l).map(([i, o]) => `direction-${i}-${o}`) : [`direction-xs-${String(l)}`];
function FS(l, i) {
  l.item !== void 0 && delete l.item, l.zeroMinWidth !== void 0 && delete l.zeroMinWidth, i.keys.forEach((o) => {
    l[o] !== void 0 && delete l[o];
  });
}
const WS = Va(), IS = sf("div", {
  name: "MuiGrid",
  slot: "Root"
});
function PS(l) {
  return ff({
    props: l,
    name: "MuiGrid",
    defaultTheme: WS
  });
}
function t2(l = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: i = IS,
    useThemeProps: o = PS,
    useTheme: c = Ju,
    componentName: s = "MuiGrid"
  } = l, d = (h, x) => {
    const {
      container: A,
      direction: z,
      spacing: B,
      wrap: M,
      size: T
    } = h, L = {
      root: ["root", A && "container", M !== "wrap" && `wrap-xs-${String(M)}`, ...JS(z), ...ZS(T), ...A ? KS(B, x.breakpoints.keys[0]) : []]
    };
    return Qa(L, ($) => Gl(s, $), {});
  };
  function y(h, x, A = () => !0) {
    const z = {};
    return h === null || (Array.isArray(h) ? h.forEach((B, M) => {
      B !== null && A(B) && x.keys[M] && (z[x.keys[M]] = B);
    }) : typeof h == "object" ? Object.keys(h).forEach((B) => {
      const M = h[B];
      M != null && A(M) && (z[B] = M);
    }) : z[x.keys[0]] = h), z;
  }
  const p = i($S, XS, YS, GS, VS, QS, qS), v = /* @__PURE__ */ Q.forwardRef(function(x, A) {
    const z = c(), B = o(x), M = of(B);
    FS(M, z.breakpoints);
    const {
      className: T,
      children: L,
      columns: $ = 12,
      container: K = !1,
      component: V = "div",
      direction: Z = "row",
      wrap: H = "wrap",
      size: q = {},
      offset: Y = {},
      spacing: I = 0,
      rowSpacing: W = I,
      columnSpacing: it = I,
      unstable_level: nt = 0,
      ...g
    } = M, P = y(q, z.breakpoints, (S) => S !== !1), F = y(Y, z.breakpoints), ot = x.columns ?? (nt ? void 0 : $), R = x.spacing ?? (nt ? void 0 : I), X = x.rowSpacing ?? x.spacing ?? (nt ? void 0 : W), at = x.columnSpacing ?? x.spacing ?? (nt ? void 0 : it), St = {
      ...M,
      level: nt,
      columns: ot,
      container: K,
      direction: Z,
      wrap: H,
      spacing: R,
      rowSpacing: X,
      columnSpacing: at,
      size: P,
      offset: F
    }, At = d(St, z);
    return /* @__PURE__ */ lt.jsx(p, {
      ref: A,
      as: V,
      ownerState: St,
      className: kl(At.root, T),
      ...g,
      children: Q.Children.map(L, (S) => /* @__PURE__ */ Q.isValidElement(S) && LS(S, ["Grid"]) && K && S.props.container ? /* @__PURE__ */ Q.cloneElement(S, {
        unstable_level: S.props?.unstable_level ?? nt + 1
      }) : S)
    });
  });
  return v.muiName = "Grid", v;
}
const e2 = Va(), n2 = sf("div", {
  name: "MuiStack",
  slot: "Root"
});
function l2(l) {
  return ff({
    props: l,
    name: "MuiStack",
    defaultTheme: e2
  });
}
function a2(l, i) {
  const o = Q.Children.toArray(l).filter(Boolean);
  return o.reduce((c, s, d) => (c.push(s), d < o.length - 1 && c.push(/* @__PURE__ */ Q.cloneElement(i, {
    key: `separator-${d}`
  })), c), []);
}
const r2 = (l) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[l], i2 = ({
  ownerState: l,
  theme: i
}) => {
  let o = {
    display: "flex",
    flexDirection: "column",
    ...nn({
      theme: i
    }, Ds({
      values: l.direction,
      breakpoints: i.breakpoints.values
    }), (c) => ({
      flexDirection: c
    }))
  };
  if (l.spacing) {
    const c = Yu(i), s = Object.keys(i.breakpoints.values).reduce((v, h) => ((typeof l.spacing == "object" && l.spacing[h] != null || typeof l.direction == "object" && l.direction[h] != null) && (v[h] = !0), v), {}), d = Ds({
      values: l.direction,
      base: s
    }), y = Ds({
      values: l.spacing,
      base: s
    });
    typeof d == "object" && Object.keys(d).forEach((v, h, x) => {
      if (!d[v]) {
        const z = h > 0 ? d[x[h - 1]] : "column";
        d[v] = z;
      }
    }), o = be(o, nn({
      theme: i
    }, y, (v, h) => l.useFlexGap ? {
      gap: Hl(c, v)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${r2(h ? d[h] : l.direction)}`]: Hl(c, v)
      }
    }));
  }
  return o = Pv(i.breakpoints, o), o;
};
function u2(l = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: i = n2,
    useThemeProps: o = l2,
    componentName: c = "MuiStack"
  } = l, s = () => Qa({
    root: ["root"]
  }, (v) => Gl(c, v), {}), d = i(i2);
  return /* @__PURE__ */ Q.forwardRef(function(v, h) {
    const x = o(v), A = of(x), {
      component: z = "div",
      direction: B = "column",
      spacing: M = 0,
      divider: T,
      children: L,
      className: $,
      useFlexGap: K = !1,
      ...V
    } = A, Z = {
      direction: B,
      spacing: M,
      useFlexGap: K
    }, H = s();
    return /* @__PURE__ */ lt.jsx(d, {
      as: z,
      ownerState: Z,
      ref: h,
      className: kl(H.root, $),
      ...V,
      children: T ? a2(L, T) : L
    });
  });
}
const ti = {
  black: "#000",
  white: "#fff"
}, o2 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ba = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ua = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Qr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, wa = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Na = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ja = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Yp() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: ti.white,
      default: ti.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Xp = Yp();
function Vp() {
  return {
    text: {
      primary: ti.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: ti.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Xs = Vp();
function tp(l, i, o, c) {
  const s = c.light || c, d = c.dark || c * 1.5;
  l[i] || (l.hasOwnProperty(o) ? l[i] = l[o] : i === "light" ? l.light = Iu(l.main, s) : i === "dark" && (l.dark = Wu(l.main, d)));
}
function ep(l, i, o, c, s) {
  const d = s.light || s, y = s.dark || s * 1.5;
  i[o] || (i.hasOwnProperty(c) ? i[o] = i[c] : o === "light" ? i.light = `color-mix(in ${l}, ${i.main}, #fff ${(d * 100).toFixed(0)}%)` : o === "dark" && (i.dark = `color-mix(in ${l}, ${i.main}, #000 ${(y * 100).toFixed(0)}%)`));
}
function c2(l = "light") {
  return l === "dark" ? {
    main: wa[200],
    light: wa[50],
    dark: wa[400]
  } : {
    main: wa[700],
    light: wa[400],
    dark: wa[800]
  };
}
function s2(l = "light") {
  return l === "dark" ? {
    main: Ba[200],
    light: Ba[50],
    dark: Ba[400]
  } : {
    main: Ba[500],
    light: Ba[300],
    dark: Ba[700]
  };
}
function f2(l = "light") {
  return l === "dark" ? {
    main: Ua[500],
    light: Ua[300],
    dark: Ua[700]
  } : {
    main: Ua[700],
    light: Ua[400],
    dark: Ua[800]
  };
}
function d2(l = "light") {
  return l === "dark" ? {
    main: Na[400],
    light: Na[300],
    dark: Na[700]
  } : {
    main: Na[700],
    light: Na[500],
    dark: Na[900]
  };
}
function y2(l = "light") {
  return l === "dark" ? {
    main: ja[400],
    light: ja[300],
    dark: ja[700]
  } : {
    main: ja[800],
    light: ja[500],
    dark: ja[900]
  };
}
function m2(l = "light") {
  return l === "dark" ? {
    main: Qr[400],
    light: Qr[300],
    dark: Qr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Qr[500],
    dark: Qr[900]
  };
}
function p2(l) {
  return `oklch(from ${l} var(--__l) 0 h / var(--__a))`;
}
function gf(l) {
  const {
    mode: i = "light",
    contrastThreshold: o = 3,
    tonalOffset: c = 0.2,
    colorSpace: s,
    ...d
  } = l, y = l.primary || c2(i), p = l.secondary || s2(i), v = l.error || f2(i), h = l.info || d2(i), x = l.success || y2(i), A = l.warning || m2(i);
  function z(L) {
    return s ? p2(L) : aS(L, Xs.text.primary) >= o ? Xs.text.primary : Xp.text.primary;
  }
  const B = ({
    color: L,
    name: $,
    mainShade: K = 500,
    lightShade: V = 300,
    darkShade: Z = 700
  }) => {
    if (L = {
      ...L
    }, !L.main && L[K] && (L.main = L[K]), !L.hasOwnProperty("main"))
      throw new Error(jl(11, $ ? ` (${$})` : "", K));
    if (typeof L.main != "string")
      throw new Error(jl(12, $ ? ` (${$})` : "", JSON.stringify(L.main)));
    return s ? (ep(s, L, "light", V, c), ep(s, L, "dark", Z, c)) : (tp(L, "light", V, c), tp(L, "dark", Z, c)), L.contrastText || (L.contrastText = z(L.main)), L;
  };
  let M;
  return i === "light" ? M = Yp() : i === "dark" && (M = Vp()), be({
    // A collection of common colors.
    common: {
      ...ti
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: i,
    // The colors used to represent primary interface elements for a user.
    primary: B({
      color: y,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: B({
      color: p,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: B({
      color: v,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: B({
      color: A,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: B({
      color: h,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: B({
      color: x,
      name: "success"
    }),
    // The grey colors.
    grey: o2,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: z,
    // Generate a rich color object.
    augmentColor: B,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: c,
    // The light and dark mode object.
    ...M
  }, d);
}
function h2(l) {
  const i = {};
  return Object.entries(l).forEach((c) => {
    const [s, d] = c;
    typeof d == "object" && (i[s] = `${d.fontStyle ? `${d.fontStyle} ` : ""}${d.fontVariant ? `${d.fontVariant} ` : ""}${d.fontWeight ? `${d.fontWeight} ` : ""}${d.fontStretch ? `${d.fontStretch} ` : ""}${d.fontSize || ""}${d.lineHeight ? `/${d.lineHeight} ` : ""}${d.fontFamily || ""}`);
  }), i;
}
function g2(l, i) {
  return {
    toolbar: {
      minHeight: 56,
      [l.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [l.up("sm")]: {
        minHeight: 64
      }
    },
    ...i
  };
}
function v2(l) {
  return Math.round(l * 1e5) / 1e5;
}
const np = {
  textTransform: "uppercase"
}, lp = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qp(l, i) {
  const {
    fontFamily: o = lp,
    // The default font size of the Material Specification.
    fontSize: c = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: d = 400,
    fontWeightMedium: y = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: v = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: x,
    ...A
  } = typeof i == "function" ? i(l) : i, z = c / 14, B = x || ((L) => `${L / v * z}rem`), M = (L, $, K, V, Z) => ({
    fontFamily: o,
    fontWeight: L,
    fontSize: B($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: K,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === lp ? {
      letterSpacing: `${v2(V / $)}em`
    } : {},
    ...Z,
    ...h
  }), T = {
    h1: M(s, 96, 1.167, -1.5),
    h2: M(s, 60, 1.2, -0.5),
    h3: M(d, 48, 1.167, 0),
    h4: M(d, 34, 1.235, 0.25),
    h5: M(d, 24, 1.334, 0),
    h6: M(y, 20, 1.6, 0.15),
    subtitle1: M(d, 16, 1.75, 0.15),
    subtitle2: M(y, 14, 1.57, 0.1),
    body1: M(d, 16, 1.5, 0.15),
    body2: M(d, 14, 1.43, 0.15),
    button: M(y, 14, 1.75, 0.4, np),
    caption: M(d, 12, 1.66, 0.4),
    overline: M(d, 12, 2.66, 1, np),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return be({
    htmlFontSize: v,
    pxToRem: B,
    fontFamily: o,
    fontSize: c,
    fontWeightLight: s,
    fontWeightRegular: d,
    fontWeightMedium: y,
    fontWeightBold: p,
    ...T
  }, A, {
    clone: !1
    // No need to clone deep
  });
}
const b2 = 0.2, S2 = 0.14, C2 = 0.12;
function Yt(...l) {
  return [`${l[0]}px ${l[1]}px ${l[2]}px ${l[3]}px rgba(0,0,0,${b2})`, `${l[4]}px ${l[5]}px ${l[6]}px ${l[7]}px rgba(0,0,0,${S2})`, `${l[8]}px ${l[9]}px ${l[10]}px ${l[11]}px rgba(0,0,0,${C2})`].join(",");
}
const A2 = ["none", Yt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Yt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Yt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Yt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Yt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Yt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Yt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Yt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Yt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Yt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Yt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Yt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Yt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Yt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Yt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Yt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Yt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Yt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Yt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Yt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Yt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Yt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Yt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Yt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], x2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, T2 = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ap(l) {
  return `${Math.round(l)}ms`;
}
function E2(l) {
  if (!l)
    return 0;
  const i = l / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function M2(l) {
  const i = {
    ...x2,
    ...l.easing
  }, o = {
    ...T2,
    ...l.duration
  };
  return {
    getAutoHeightDuration: E2,
    create: (s = ["all"], d = {}) => {
      const {
        duration: y = o.standard,
        easing: p = i.easeInOut,
        delay: v = 0,
        ...h
      } = d;
      return (Array.isArray(s) ? s : [s]).map((x) => `${x} ${typeof y == "string" ? y : ap(y)} ${p} ${typeof v == "string" ? v : ap(v)}`).join(",");
    },
    ...l,
    easing: i,
    duration: o
  };
}
const O2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _2(l) {
  return yn(l) || typeof l > "u" || typeof l == "string" || typeof l == "boolean" || typeof l == "number" || Array.isArray(l);
}
function Zp(l = {}) {
  const i = {
    ...l
  };
  function o(c) {
    const s = Object.entries(c);
    for (let d = 0; d < s.length; d++) {
      const [y, p] = s[d];
      !_2(p) || y.startsWith("unstable_") ? delete c[y] : yn(p) && (c[y] = {
        ...p
      }, o(c[y]));
    }
  }
  return o(i), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function rp(l) {
  return typeof l == "number" ? `${(l * 100).toFixed(0)}%` : `calc((${l}) * 100%)`;
}
const z2 = (l) => {
  if (!Number.isNaN(+l))
    return +l;
  const i = l.match(/\d*\.?\d+/g);
  if (!i)
    return 0;
  let o = 0;
  for (let c = 0; c < i.length; c += 1)
    o += +i[c];
  return o;
};
function D2(l) {
  Object.assign(l, {
    alpha(i, o) {
      const c = this || l;
      return c.colorSpace ? `oklch(from ${i} l c h / ${typeof o == "string" ? `calc(${o})` : o})` : c.vars ? `rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof o == "string" ? `calc(${o})` : o})` : yf(i, z2(o));
    },
    lighten(i, o) {
      const c = this || l;
      return c.colorSpace ? `color-mix(in ${c.colorSpace}, ${i}, #fff ${rp(o)})` : Iu(i, o);
    },
    darken(i, o) {
      const c = this || l;
      return c.colorSpace ? `color-mix(in ${c.colorSpace}, ${i}, #000 ${rp(o)})` : Wu(i, o);
    }
  });
}
function Vs(l = {}, ...i) {
  const {
    breakpoints: o,
    mixins: c = {},
    spacing: s,
    palette: d = {},
    transitions: y = {},
    typography: p = {},
    shape: v,
    colorSpace: h,
    ...x
  } = l;
  if (l.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  l.generateThemeVars === void 0)
    throw new Error(jl(20));
  const A = gf({
    ...d,
    colorSpace: h
  }), z = Va(l);
  let B = be(z, {
    mixins: g2(z.breakpoints, c),
    palette: A,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: A2.slice(),
    typography: Qp(A, p),
    transitions: M2(y),
    zIndex: {
      ...O2
    }
  });
  return B = be(B, x), B = i.reduce((M, T) => be(M, T), B), B.unstable_sxConfig = {
    ...ai,
    ...x?.unstable_sxConfig
  }, B.unstable_sx = function(T) {
    return Ll({
      sx: T,
      theme: this
    });
  }, B.toRuntimeSource = Zp, D2(B), B;
}
function R2(l) {
  let i;
  return l < 1 ? i = 5.11916 * l ** 2 : i = 4.5 * Math.log(l + 1) + 2, Math.round(i * 10) / 1e3;
}
const B2 = [...Array(25)].map((l, i) => {
  if (i === 0)
    return "none";
  const o = R2(i);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function Kp(l) {
  return {
    inputPlaceholder: l === "dark" ? 0.5 : 0.42,
    inputUnderline: l === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: l === "dark" ? 0.2 : 0.12,
    switchTrack: l === "dark" ? 0.3 : 0.38
  };
}
function Jp(l) {
  return l === "dark" ? B2 : [];
}
function U2(l) {
  const {
    palette: i = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: c,
    colorSpace: s,
    ...d
  } = l, y = gf({
    ...i,
    colorSpace: s
  });
  return {
    palette: y,
    opacity: {
      ...Kp(y.mode),
      ...o
    },
    overlays: c || Jp(y.mode),
    ...d
  };
}
function w2(l) {
  return !!l[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!l[0].match(/sxConfig$/) || // ends with sxConfig
  l[0] === "palette" && !!l[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const N2 = (l) => [...[...Array(25)].map((i, o) => `--${l ? `${l}-` : ""}overlays-${o}`), `--${l ? `${l}-` : ""}palette-AppBar-darkBg`, `--${l ? `${l}-` : ""}palette-AppBar-darkColor`], j2 = (l) => (i, o) => {
  const c = l.rootSelector || ":root", s = l.colorSchemeSelector;
  let d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (d = `[${s}="%s"]`), l.defaultColorScheme === i) {
    if (i === "dark") {
      const y = {};
      return N2(l.cssVarPrefix).forEach((p) => {
        y[p] = o[p], delete o[p];
      }), d === "media" ? {
        [c]: o,
        "@media (prefers-color-scheme: dark)": {
          [c]: y
        }
      } : d ? {
        [d.replace("%s", i)]: y,
        [`${c}, ${d.replace("%s", i)}`]: o
      } : {
        [c]: {
          ...o,
          ...y
        }
      };
    }
    if (d && d !== "media")
      return `${c}, ${d.replace("%s", String(i))}`;
  } else if (i) {
    if (d === "media")
      return {
        [`@media (prefers-color-scheme: ${String(i)})`]: {
          [c]: o
        }
      };
    if (d)
      return d.replace("%s", String(i));
  }
  return c;
};
function H2(l, i) {
  i.forEach((o) => {
    l[o] || (l[o] = {});
  });
}
function N(l, i, o) {
  !l[i] && o && (l[i] = o);
}
function Jr(l) {
  return typeof l != "string" || !l.startsWith("hsl") ? l : Lp(l);
}
function wn(l, i) {
  `${i}Channel` in l || (l[`${i}Channel`] = Kr(Jr(l[i])));
}
function L2(l) {
  return typeof l == "number" ? `${l}px` : typeof l == "string" || typeof l == "function" || Array.isArray(l) ? l : "8px";
}
const cn = (l) => {
  try {
    return l();
  } catch {
  }
}, k2 = (l = "mui") => _S(l);
function Ns(l, i, o, c, s) {
  if (!o)
    return;
  o = o === !0 ? {} : o;
  const d = s === "dark" ? "dark" : "light";
  if (!c) {
    i[s] = U2({
      ...o,
      palette: {
        mode: d,
        ...o?.palette
      },
      colorSpace: l
    });
    return;
  }
  const {
    palette: y,
    ...p
  } = Vs({
    ...c,
    palette: {
      mode: d,
      ...o?.palette
    },
    colorSpace: l
  });
  return i[s] = {
    ...o,
    palette: y,
    opacity: {
      ...Kp(d),
      ...o?.opacity
    },
    overlays: o?.overlays || Jp(d)
  }, p;
}
function G2(l = {}, ...i) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: c,
    disableCssColorScheme: s = !1,
    cssVarPrefix: d = "mui",
    nativeColor: y = !1,
    shouldSkipGeneratingVar: p = w2,
    colorSchemeSelector: v = o.light && o.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...x
  } = l, A = Object.keys(o)[0], z = c || (o.light && A !== "light" ? "light" : A), B = k2(d), {
    [z]: M,
    light: T,
    dark: L,
    ...$
  } = o, K = {
    ...$
  };
  let V = M;
  if ((z === "dark" && !("dark" in o) || z === "light" && !("light" in o)) && (V = !0), !V)
    throw new Error(jl(21, z));
  let Z;
  y && (Z = "oklch");
  const H = Ns(Z, K, V, x, z);
  T && !K.light && Ns(Z, K, T, void 0, "light"), L && !K.dark && Ns(Z, K, L, void 0, "dark");
  let q = {
    defaultColorScheme: z,
    ...H,
    cssVarPrefix: d,
    colorSchemeSelector: v,
    rootSelector: h,
    getCssVar: B,
    colorSchemes: K,
    font: {
      ...h2(H.typography),
      ...H.font
    },
    spacing: L2(x.spacing)
  };
  Object.keys(q.colorSchemes).forEach((nt) => {
    const g = q.colorSchemes[nt].palette, P = (ot) => {
      const R = ot.split("-"), X = R[1], at = R[2];
      return B(ot, g[X][at]);
    };
    g.mode === "light" && (N(g.common, "background", "#fff"), N(g.common, "onBackground", "#000")), g.mode === "dark" && (N(g.common, "background", "#000"), N(g.common, "onBackground", "#fff"));
    function F(ot, R, X) {
      if (Z) {
        let at;
        return ot === Ul && (at = `transparent ${((1 - X) * 100).toFixed(0)}%`), ot === Rt && (at = `#000 ${(X * 100).toFixed(0)}%`), ot === Bt && (at = `#fff ${(X * 100).toFixed(0)}%`), `color-mix(in ${Z}, ${R}, ${at})`;
      }
      return ot(R, X);
    }
    if (H2(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      N(g.Alert, "errorColor", F(Rt, g.error.light, 0.6)), N(g.Alert, "infoColor", F(Rt, g.info.light, 0.6)), N(g.Alert, "successColor", F(Rt, g.success.light, 0.6)), N(g.Alert, "warningColor", F(Rt, g.warning.light, 0.6)), N(g.Alert, "errorFilledBg", P("palette-error-main")), N(g.Alert, "infoFilledBg", P("palette-info-main")), N(g.Alert, "successFilledBg", P("palette-success-main")), N(g.Alert, "warningFilledBg", P("palette-warning-main")), N(g.Alert, "errorFilledColor", cn(() => g.getContrastText(g.error.main))), N(g.Alert, "infoFilledColor", cn(() => g.getContrastText(g.info.main))), N(g.Alert, "successFilledColor", cn(() => g.getContrastText(g.success.main))), N(g.Alert, "warningFilledColor", cn(() => g.getContrastText(g.warning.main))), N(g.Alert, "errorStandardBg", F(Bt, g.error.light, 0.9)), N(g.Alert, "infoStandardBg", F(Bt, g.info.light, 0.9)), N(g.Alert, "successStandardBg", F(Bt, g.success.light, 0.9)), N(g.Alert, "warningStandardBg", F(Bt, g.warning.light, 0.9)), N(g.Alert, "errorIconColor", P("palette-error-main")), N(g.Alert, "infoIconColor", P("palette-info-main")), N(g.Alert, "successIconColor", P("palette-success-main")), N(g.Alert, "warningIconColor", P("palette-warning-main")), N(g.AppBar, "defaultBg", P("palette-grey-100")), N(g.Avatar, "defaultBg", P("palette-grey-400")), N(g.Button, "inheritContainedBg", P("palette-grey-300")), N(g.Button, "inheritContainedHoverBg", P("palette-grey-A100")), N(g.Chip, "defaultBorder", P("palette-grey-400")), N(g.Chip, "defaultAvatarColor", P("palette-grey-700")), N(g.Chip, "defaultIconColor", P("palette-grey-700")), N(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(g.LinearProgress, "primaryBg", F(Bt, g.primary.main, 0.62)), N(g.LinearProgress, "secondaryBg", F(Bt, g.secondary.main, 0.62)), N(g.LinearProgress, "errorBg", F(Bt, g.error.main, 0.62)), N(g.LinearProgress, "infoBg", F(Bt, g.info.main, 0.62)), N(g.LinearProgress, "successBg", F(Bt, g.success.main, 0.62)), N(g.LinearProgress, "warningBg", F(Bt, g.warning.main, 0.62)), N(g.Skeleton, "bg", Z ? F(Ul, g.text.primary, 0.11) : `rgba(${P("palette-text-primaryChannel")} / 0.11)`), N(g.Slider, "primaryTrack", F(Bt, g.primary.main, 0.62)), N(g.Slider, "secondaryTrack", F(Bt, g.secondary.main, 0.62)), N(g.Slider, "errorTrack", F(Bt, g.error.main, 0.62)), N(g.Slider, "infoTrack", F(Bt, g.info.main, 0.62)), N(g.Slider, "successTrack", F(Bt, g.success.main, 0.62)), N(g.Slider, "warningTrack", F(Bt, g.warning.main, 0.62));
      const ot = Z ? F(Rt, g.background.default, 0.6825) : Mu(g.background.default, 0.8);
      N(g.SnackbarContent, "bg", ot), N(g.SnackbarContent, "color", cn(() => Z ? Xs.text.primary : g.getContrastText(ot))), N(g.SpeedDialAction, "fabHoverBg", Mu(g.background.paper, 0.15)), N(g.StepConnector, "border", P("palette-grey-400")), N(g.StepContent, "border", P("palette-grey-400")), N(g.Switch, "defaultColor", P("palette-common-white")), N(g.Switch, "defaultDisabledColor", P("palette-grey-100")), N(g.Switch, "primaryDisabledColor", F(Bt, g.primary.main, 0.62)), N(g.Switch, "secondaryDisabledColor", F(Bt, g.secondary.main, 0.62)), N(g.Switch, "errorDisabledColor", F(Bt, g.error.main, 0.62)), N(g.Switch, "infoDisabledColor", F(Bt, g.info.main, 0.62)), N(g.Switch, "successDisabledColor", F(Bt, g.success.main, 0.62)), N(g.Switch, "warningDisabledColor", F(Bt, g.warning.main, 0.62)), N(g.TableCell, "border", F(Bt, F(Ul, g.divider, 1), 0.88)), N(g.Tooltip, "bg", F(Ul, g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      N(g.Alert, "errorColor", F(Bt, g.error.light, 0.6)), N(g.Alert, "infoColor", F(Bt, g.info.light, 0.6)), N(g.Alert, "successColor", F(Bt, g.success.light, 0.6)), N(g.Alert, "warningColor", F(Bt, g.warning.light, 0.6)), N(g.Alert, "errorFilledBg", P("palette-error-dark")), N(g.Alert, "infoFilledBg", P("palette-info-dark")), N(g.Alert, "successFilledBg", P("palette-success-dark")), N(g.Alert, "warningFilledBg", P("palette-warning-dark")), N(g.Alert, "errorFilledColor", cn(() => g.getContrastText(g.error.dark))), N(g.Alert, "infoFilledColor", cn(() => g.getContrastText(g.info.dark))), N(g.Alert, "successFilledColor", cn(() => g.getContrastText(g.success.dark))), N(g.Alert, "warningFilledColor", cn(() => g.getContrastText(g.warning.dark))), N(g.Alert, "errorStandardBg", F(Rt, g.error.light, 0.9)), N(g.Alert, "infoStandardBg", F(Rt, g.info.light, 0.9)), N(g.Alert, "successStandardBg", F(Rt, g.success.light, 0.9)), N(g.Alert, "warningStandardBg", F(Rt, g.warning.light, 0.9)), N(g.Alert, "errorIconColor", P("palette-error-main")), N(g.Alert, "infoIconColor", P("palette-info-main")), N(g.Alert, "successIconColor", P("palette-success-main")), N(g.Alert, "warningIconColor", P("palette-warning-main")), N(g.AppBar, "defaultBg", P("palette-grey-900")), N(g.AppBar, "darkBg", P("palette-background-paper")), N(g.AppBar, "darkColor", P("palette-text-primary")), N(g.Avatar, "defaultBg", P("palette-grey-600")), N(g.Button, "inheritContainedBg", P("palette-grey-800")), N(g.Button, "inheritContainedHoverBg", P("palette-grey-700")), N(g.Chip, "defaultBorder", P("palette-grey-700")), N(g.Chip, "defaultAvatarColor", P("palette-grey-300")), N(g.Chip, "defaultIconColor", P("palette-grey-300")), N(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(g.LinearProgress, "primaryBg", F(Rt, g.primary.main, 0.5)), N(g.LinearProgress, "secondaryBg", F(Rt, g.secondary.main, 0.5)), N(g.LinearProgress, "errorBg", F(Rt, g.error.main, 0.5)), N(g.LinearProgress, "infoBg", F(Rt, g.info.main, 0.5)), N(g.LinearProgress, "successBg", F(Rt, g.success.main, 0.5)), N(g.LinearProgress, "warningBg", F(Rt, g.warning.main, 0.5)), N(g.Skeleton, "bg", Z ? F(Ul, g.text.primary, 0.13) : `rgba(${P("palette-text-primaryChannel")} / 0.13)`), N(g.Slider, "primaryTrack", F(Rt, g.primary.main, 0.5)), N(g.Slider, "secondaryTrack", F(Rt, g.secondary.main, 0.5)), N(g.Slider, "errorTrack", F(Rt, g.error.main, 0.5)), N(g.Slider, "infoTrack", F(Rt, g.info.main, 0.5)), N(g.Slider, "successTrack", F(Rt, g.success.main, 0.5)), N(g.Slider, "warningTrack", F(Rt, g.warning.main, 0.5));
      const ot = Z ? F(Bt, g.background.default, 0.985) : Mu(g.background.default, 0.98);
      N(g.SnackbarContent, "bg", ot), N(g.SnackbarContent, "color", cn(() => Z ? Xp.text.primary : g.getContrastText(ot))), N(g.SpeedDialAction, "fabHoverBg", Mu(g.background.paper, 0.15)), N(g.StepConnector, "border", P("palette-grey-600")), N(g.StepContent, "border", P("palette-grey-600")), N(g.Switch, "defaultColor", P("palette-grey-300")), N(g.Switch, "defaultDisabledColor", P("palette-grey-600")), N(g.Switch, "primaryDisabledColor", F(Rt, g.primary.main, 0.55)), N(g.Switch, "secondaryDisabledColor", F(Rt, g.secondary.main, 0.55)), N(g.Switch, "errorDisabledColor", F(Rt, g.error.main, 0.55)), N(g.Switch, "infoDisabledColor", F(Rt, g.info.main, 0.55)), N(g.Switch, "successDisabledColor", F(Rt, g.success.main, 0.55)), N(g.Switch, "warningDisabledColor", F(Rt, g.warning.main, 0.55)), N(g.TableCell, "border", F(Rt, F(Ul, g.divider, 1), 0.68)), N(g.Tooltip, "bg", F(Ul, g.grey[700], 0.92));
    }
    wn(g.background, "default"), wn(g.background, "paper"), wn(g.common, "background"), wn(g.common, "onBackground"), wn(g, "divider"), Object.keys(g).forEach((ot) => {
      const R = g[ot];
      ot !== "tonalOffset" && R && typeof R == "object" && (R.main && N(g[ot], "mainChannel", Kr(Jr(R.main))), R.light && N(g[ot], "lightChannel", Kr(Jr(R.light))), R.dark && N(g[ot], "darkChannel", Kr(Jr(R.dark))), R.contrastText && N(g[ot], "contrastTextChannel", Kr(Jr(R.contrastText))), ot === "text" && (wn(g[ot], "primary"), wn(g[ot], "secondary")), ot === "action" && (R.active && wn(g[ot], "active"), R.selected && wn(g[ot], "selected")));
    });
  }), q = i.reduce((nt, g) => be(nt, g), q);
  const Y = {
    prefix: d,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: p,
    getSelector: j2(q),
    enableContrastVars: y
  }, {
    vars: I,
    generateThemeVars: W,
    generateStyleSheets: it
  } = RS(q, Y);
  return q.vars = I, Object.entries(q.colorSchemes[q.defaultColorScheme]).forEach(([nt, g]) => {
    q[nt] = g;
  }), q.generateThemeVars = W, q.generateStyleSheets = it, q.generateSpacing = function() {
    return Rp(x.spacing, Yu(this));
  }, q.getColorSchemeSelector = BS(v), q.spacing = q.generateSpacing(), q.shouldSkipGeneratingVar = p, q.unstable_sxConfig = {
    ...ai,
    ...x?.unstable_sxConfig
  }, q.unstable_sx = function(g) {
    return Ll({
      sx: g,
      theme: this
    });
  }, q.toRuntimeSource = Zp, q;
}
function ip(l, i, o) {
  l.colorSchemes && o && (l.colorSchemes[i] = {
    ...o !== !0 && o,
    palette: gf({
      ...o === !0 ? {} : o.palette,
      mode: i
    })
    // cast type to skip module augmentation test
  });
}
function to(l = {}, ...i) {
  const {
    palette: o,
    cssVariables: c = !1,
    colorSchemes: s = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: d = o?.mode,
    ...y
  } = l, p = d || "light", v = s?.[p], h = {
    ...s,
    ...o ? {
      [p]: {
        ...typeof v != "boolean" && v,
        palette: o
      }
    } : void 0
  };
  if (c === !1) {
    if (!("colorSchemes" in l))
      return Vs(l, ...i);
    let x = o;
    "palette" in l || h[p] && (h[p] !== !0 ? x = h[p].palette : p === "dark" && (x = {
      mode: "dark"
    }));
    const A = Vs({
      ...l,
      palette: x
    }, ...i);
    return A.defaultColorScheme = p, A.colorSchemes = h, A.palette.mode === "light" && (A.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: A.palette
    }, ip(A, "dark", h.dark)), A.palette.mode === "dark" && (A.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: A.palette
    }, ip(A, "light", h.light)), A;
  }
  return !o && !("light" in h) && p === "light" && (h.light = !0), G2({
    ...y,
    colorSchemes: h,
    defaultColorScheme: p,
    ...typeof c != "boolean" && c
  }, ...i);
}
const vf = to();
function bf() {
  const l = Ju(vf);
  return l[Nn] || l;
}
function q2(l) {
  return l !== "ownerState" && l !== "theme" && l !== "sx" && l !== "as";
}
const $2 = (l) => q2(l) && l !== "classes", ql = jp({
  themeId: Nn,
  defaultTheme: vf,
  rootShouldForwardProp: $2
});
function Y2({
  theme: l,
  ...i
}) {
  const o = Nn in l ? l[Nn] : void 0;
  return /* @__PURE__ */ lt.jsx(qp, {
    ...i,
    themeId: o ? Nn : void 0,
    theme: o || l
  });
}
const Ou = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: X2
} = OS({
  themeId: Nn,
  // @ts-ignore ignore module augmentation tests
  theme: () => to({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ou.colorSchemeStorageKey,
  modeStorageKey: Ou.modeStorageKey,
  defaultColorScheme: {
    light: Ou.defaultLightColorScheme,
    dark: Ou.defaultDarkColorScheme
  },
  resolveTheme: (l) => {
    const i = {
      ...l,
      typography: Qp(l.palette, l.typography)
    };
    return i.unstable_sx = function(c) {
      return Ll({
        sx: c,
        theme: this
      });
    }, i;
  }
}), V2 = X2;
function Q2({
  theme: l,
  ...i
}) {
  const o = Q.useMemo(() => {
    if (typeof l == "function")
      return l;
    const c = Nn in l ? l[Nn] : l;
    return "colorSchemes" in c ? null : "vars" in c ? l : {
      ...l,
      vars: null
    };
  }, [l]);
  return o ? /* @__PURE__ */ lt.jsx(Y2, {
    theme: o,
    ...i
  }) : /* @__PURE__ */ lt.jsx(V2, {
    theme: l,
    ...i
  });
}
function Z2(l) {
  return /* @__PURE__ */ lt.jsx(Bp, {
    ...l,
    defaultTheme: vf,
    themeId: Nn
  });
}
function Fp(l) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ lt.jsx(Z2, {
        styles: typeof l == "function" ? (c) => l({
          theme: c,
          ...o
        }) : l
      })
    );
  };
}
function K2() {
  return of;
}
const eo = bS;
function $l(l) {
  return mS(l);
}
function J2(l) {
  return typeof l.main == "string";
}
function F2(l, i = []) {
  if (!J2(l))
    return !1;
  for (const o of i)
    if (!l.hasOwnProperty(o) || typeof l[o] != "string")
      return !1;
  return !0;
}
function Wp(l = []) {
  return ([, i]) => i && F2(i, l);
}
function W2(l) {
  return Gl("MuiTypography", l);
}
cf("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const I2 = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, P2 = K2(), t5 = (l) => {
  const {
    align: i,
    gutterBottom: o,
    noWrap: c,
    paragraph: s,
    variant: d,
    classes: y
  } = l, p = {
    root: ["root", d, l.align !== "inherit" && `align${pn(i)}`, o && "gutterBottom", c && "noWrap", s && "paragraph"]
  };
  return Qa(p, W2, y);
}, e5 = ql("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (l, i) => {
    const {
      ownerState: o
    } = l;
    return [i.root, o.variant && i[o.variant], o.align !== "inherit" && i[`align${pn(o.align)}`], o.noWrap && i.noWrap, o.gutterBottom && i.gutterBottom, o.paragraph && i.paragraph];
  }
})(eo(({
  theme: l
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(l.typography).filter(([i, o]) => i !== "inherit" && o && typeof o == "object").map(([i, o]) => ({
    props: {
      variant: i
    },
    style: o
  })), ...Object.entries(l.palette).filter(Wp()).map(([i]) => ({
    props: {
      color: i
    },
    style: {
      color: (l.vars || l).palette[i].main
    }
  })), ...Object.entries(l.palette?.text || {}).filter(([, i]) => typeof i == "string").map(([i]) => ({
    props: {
      color: `text${pn(i)}`
    },
    style: {
      color: (l.vars || l).palette.text[i]
    }
  })), {
    props: ({
      ownerState: i
    }) => i.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: i
    }) => i.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: i
    }) => i.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: i
    }) => i.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), up = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, ka = /* @__PURE__ */ Q.forwardRef(function(i, o) {
  const {
    color: c,
    ...s
  } = $l({
    props: i,
    name: "MuiTypography"
  }), d = !I2[c], y = P2({
    ...s,
    ...d && {
      color: c
    }
  }), {
    align: p = "inherit",
    className: v,
    component: h,
    gutterBottom: x = !1,
    noWrap: A = !1,
    paragraph: z = !1,
    variant: B = "body1",
    variantMapping: M = up,
    ...T
  } = y, L = {
    ...y,
    align: p,
    color: c,
    className: v,
    component: h,
    gutterBottom: x,
    noWrap: A,
    paragraph: z,
    variant: B,
    variantMapping: M
  }, $ = h || (z ? "p" : M[B] || up[B]) || "span", K = t5(L);
  return /* @__PURE__ */ lt.jsx(e5, {
    as: $,
    ref: o,
    className: kl(K.root, v),
    ...T,
    ownerState: L,
    style: {
      ...p !== "inherit" && {
        "--Typography-textAlign": p
      },
      ...T.style
    }
  });
}), n5 = u2({
  createStyledComponent: ql("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (l) => $l({
    props: l,
    name: "MuiStack"
  })
});
function Hu() {
  return Hu = Object.assign ? Object.assign.bind() : function(l) {
    for (var i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      for (var c in o)
        Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }
    return l;
  }, Hu.apply(this, arguments);
}
function l5(l, i) {
  if (l == null) return {};
  var o = {}, c = Object.keys(l), s, d;
  for (d = 0; d < c.length; d++)
    s = c[d], !(i.indexOf(s) >= 0) && (o[s] = l[s]);
  return o;
}
var a5 = ["cdnSuffix", "cdnUrl", "countryCode", "style", "svg"], r5 = "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/", i5 = "svg", u5 = 127397, o5 = function(i) {
  var o = i.cdnSuffix, c = o === void 0 ? i5 : o, s = i.cdnUrl, d = s === void 0 ? r5 : s, y = i.countryCode, p = i.style, v = i.svg, h = v === void 0 ? !1 : v, x = l5(i, a5);
  if (typeof y != "string")
    return null;
  if (h) {
    var A = "" + d + y.toLowerCase() + "." + c;
    return Q.createElement("img", Object.assign({}, x, {
      src: A,
      style: Hu({
        display: "inline-block",
        width: "1em",
        height: "1em",
        verticalAlign: "middle"
      }, p)
    }));
  }
  var z = y.toUpperCase().replace(/./g, function(B) {
    return String.fromCodePoint(B.charCodeAt(0) + u5);
  });
  return Q.createElement("span", Object.assign({
    role: "img"
  }, x, {
    style: Hu({
      display: "inline-block",
      fontSize: "1em",
      lineHeight: "1em",
      verticalAlign: "middle"
    }, p)
  }), z);
};
function op(l) {
  try {
    return l.matches(":focus-visible");
  } catch {
  }
  return !1;
}
const c5 = HS({
  createStyledComponent: ql("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (l, i) => {
      const {
        ownerState: o
      } = l;
      return [i.root, i[`maxWidth${pn(String(o.maxWidth))}`], o.fixed && i.fixed, o.disableGutters && i.disableGutters];
    }
  }),
  useThemeProps: (l) => $l({
    props: l,
    name: "MuiContainer"
  })
}), Qs = typeof Fp({}) == "function", s5 = (l, i) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...i && !l.vars && {
    colorScheme: l.palette.mode
  }
}), f5 = (l) => ({
  color: (l.vars || l).palette.text.primary,
  ...l.typography.body1,
  backgroundColor: (l.vars || l).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (l.vars || l).palette.common.white
  }
}), Ip = (l, i = !1) => {
  const o = {};
  i && l.colorSchemes && typeof l.getColorSchemeSelector == "function" && Object.entries(l.colorSchemes).forEach(([d, y]) => {
    const p = l.getColorSchemeSelector(d);
    p.startsWith("@") ? o[p] = {
      ":root": {
        colorScheme: y.palette?.mode
      }
    } : o[p.replace(/\s*&/, "")] = {
      colorScheme: y.palette?.mode
    };
  });
  let c = {
    html: s5(l, i),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: l.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...f5(l),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (l.vars || l).palette.background.default
      }
    },
    ...o
  };
  const s = l.components?.MuiCssBaseline?.styleOverrides;
  return s && (c = [c, s]), c;
}, Bu = "mui-ecs", d5 = (l) => {
  const i = Ip(l, !1), o = Array.isArray(i) ? i[0] : i;
  return !l.vars && o && (o.html[`:root:has(${Bu})`] = {
    colorScheme: l.palette.mode
  }), l.colorSchemes && Object.entries(l.colorSchemes).forEach(([c, s]) => {
    const d = l.getColorSchemeSelector(c);
    d.startsWith("@") ? o[d] = {
      [`:root:not(:has(.${Bu}))`]: {
        colorScheme: s.palette?.mode
      }
    } : o[d.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Bu}))`]: {
        colorScheme: s.palette?.mode
      }
    };
  }), i;
}, y5 = Fp(Qs ? ({
  theme: l,
  enableColorScheme: i
}) => Ip(l, i) : ({
  theme: l
}) => d5(l));
function m5(l) {
  const i = $l({
    props: l,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: c = !1
  } = i;
  return /* @__PURE__ */ lt.jsxs(Q.Fragment, {
    children: [Qs && /* @__PURE__ */ lt.jsx(y5, {
      enableColorScheme: c
    }), !Qs && !c && /* @__PURE__ */ lt.jsx("span", {
      className: Bu,
      style: {
        display: "none"
      }
    }), o]
  });
}
function p5(l) {
  return Gl("MuiDivider", l);
}
cf("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const h5 = (l) => {
  const {
    absolute: i,
    children: o,
    classes: c,
    flexItem: s,
    light: d,
    orientation: y,
    textAlign: p,
    variant: v
  } = l;
  return Qa({
    root: ["root", i && "absolute", v, d && "light", y === "vertical" && "vertical", s && "flexItem", o && "withChildren", o && y === "vertical" && "withChildrenVertical", p === "right" && y !== "vertical" && "textAlignRight", p === "left" && y !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", y === "vertical" && "wrapperVertical"]
  }, p5, c);
}, g5 = ql("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (l, i) => {
    const {
      ownerState: o
    } = l;
    return [i.root, o.absolute && i.absolute, i[o.variant], o.light && i.light, o.orientation === "vertical" && i.vertical, o.flexItem && i.flexItem, o.children && i.withChildren, o.children && o.orientation === "vertical" && i.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && i.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && i.textAlignLeft];
  }
})(eo(({
  theme: l
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (l.vars || l).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: !0
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: !0
    },
    style: {
      borderColor: l.alpha((l.vars || l).palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: l.spacing(2),
      marginRight: l.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: l.spacing(1),
      marginBottom: l.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: !0
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState: i
    }) => !!i.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState: i
    }) => i.children && i.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(l.vars || l).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: i
    }) => i.orientation === "vertical" && i.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(l.vars || l).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: i
    }) => i.textAlign === "right" && i.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState: i
    }) => i.textAlign === "left" && i.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), v5 = ql("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (l, i) => {
    const {
      ownerState: o
    } = l;
    return [i.wrapper, o.orientation === "vertical" && i.wrapperVertical];
  }
})(eo(({
  theme: l
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${l.spacing(1)} * 1.2)`,
  paddingRight: `calc(${l.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${l.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${l.spacing(1)} * 1.2)`
    }
  }]
}))), Zs = /* @__PURE__ */ Q.forwardRef(function(i, o) {
  const c = $l({
    props: i,
    name: "MuiDivider"
  }), {
    absolute: s = !1,
    children: d,
    className: y,
    orientation: p = "horizontal",
    component: v = d || p === "vertical" ? "div" : "hr",
    flexItem: h = !1,
    light: x = !1,
    role: A = v !== "hr" ? "separator" : void 0,
    textAlign: z = "center",
    variant: B = "fullWidth",
    ...M
  } = c, T = {
    ...c,
    absolute: s,
    component: v,
    flexItem: h,
    light: x,
    orientation: p,
    role: A,
    textAlign: z,
    variant: B
  }, L = h5(T);
  return /* @__PURE__ */ lt.jsx(g5, {
    as: v,
    className: kl(L.root, y),
    role: A,
    ref: o,
    ownerState: T,
    "aria-orientation": A === "separator" && (v !== "hr" || p === "vertical") ? p : void 0,
    ...M,
    children: d ? /* @__PURE__ */ lt.jsx(v5, {
      className: L.wrapper,
      ownerState: T,
      children: d
    }) : null
  });
});
Zs && (Zs.muiSkipListHighlight = !0);
const Ha = t2({
  createStyledComponent: ql("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (l, i) => {
      const {
        ownerState: o
      } = l;
      return [i.root, o.container && i.container];
    }
  }),
  componentName: "MuiGrid",
  useThemeProps: (l) => $l({
    props: l,
    name: "MuiGrid"
  }),
  useTheme: bf
});
function b5(l) {
  return Gl("MuiLink", l);
}
const S5 = cf("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), C5 = ({
  theme: l,
  ownerState: i
}) => {
  const o = i.color;
  if ("colorSpace" in l && l.colorSpace) {
    const d = dn(l, `palette.${o}.main`) || dn(l, `palette.${o}`) || i.color;
    return l.alpha(d, 0.4);
  }
  const c = dn(l, `palette.${o}.main`, !1) || dn(l, `palette.${o}`, !1) || i.color, s = dn(l, `palette.${o}.mainChannel`) || dn(l, `palette.${o}Channel`);
  return "vars" in l && s ? `rgba(${s} / 0.4)` : yf(c, 0.4);
}, cp = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, A5 = (l) => {
  const {
    classes: i,
    component: o,
    focusVisible: c,
    underline: s
  } = l, d = {
    root: ["root", `underline${pn(s)}`, o === "button" && "button", c && "focusVisible"]
  };
  return Qa(d, b5, i);
}, x5 = ql(ka, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (l, i) => {
    const {
      ownerState: o
    } = l;
    return [i.root, i[`underline${pn(o.underline)}`], o.component === "button" && i.button];
  }
})(eo(({
  theme: l
}) => ({
  variants: [{
    props: {
      underline: "none"
    },
    style: {
      textDecoration: "none"
    }
  }, {
    props: {
      underline: "hover"
    },
    style: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }, {
    props: {
      underline: "always"
    },
    style: {
      textDecoration: "underline",
      "&:hover": {
        textDecorationColor: "inherit"
      }
    }
  }, {
    props: ({
      underline: i,
      ownerState: o
    }) => i === "always" && o.color !== "inherit",
    style: {
      textDecorationColor: "var(--Link-underlineColor)"
    }
  }, {
    props: ({
      underline: i,
      ownerState: o
    }) => i === "always" && o.color === "inherit",
    style: l.colorSpace ? {
      textDecorationColor: l.alpha("currentColor", 0.4)
    } : null
  }, ...Object.entries(l.palette).filter(Wp()).map(([i]) => ({
    props: {
      underline: "always",
      color: i
    },
    style: {
      "--Link-underlineColor": l.alpha((l.vars || l).palette[i].main, 0.4)
    }
  })), {
    props: {
      underline: "always",
      color: "textPrimary"
    },
    style: {
      "--Link-underlineColor": l.alpha((l.vars || l).palette.text.primary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textSecondary"
    },
    style: {
      "--Link-underlineColor": l.alpha((l.vars || l).palette.text.secondary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textDisabled"
    },
    style: {
      "--Link-underlineColor": (l.vars || l).palette.text.disabled
    }
  }, {
    props: {
      component: "button"
    },
    style: {
      position: "relative",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      // Reset
      WebkitAppearance: "none",
      // Reset
      "&::-moz-focus-inner": {
        borderStyle: "none"
        // Remove Firefox dotted outline.
      },
      [`&.${S5.focusVisible}`]: {
        outline: "auto"
      }
    }
  }]
}))), wl = /* @__PURE__ */ Q.forwardRef(function(i, o) {
  const c = $l({
    props: i,
    name: "MuiLink"
  }), s = bf(), {
    className: d,
    color: y = "primary",
    component: p = "a",
    onBlur: v,
    onFocus: h,
    TypographyClasses: x,
    underline: A = "always",
    variant: z = "inherit",
    sx: B,
    ...M
  } = c, [T, L] = Q.useState(!1), $ = (H) => {
    op(H.target) || L(!1), v && v(H);
  }, K = (H) => {
    op(H.target) && L(!0), h && h(H);
  }, V = {
    ...c,
    color: y,
    component: p,
    focusVisible: T,
    underline: A,
    variant: z
  }, Z = A5(V);
  return /* @__PURE__ */ lt.jsx(x5, {
    color: y,
    className: kl(Z.root, d),
    classes: x,
    component: p,
    onBlur: $,
    onFocus: K,
    ref: o,
    ownerState: V,
    variant: z,
    ...M,
    sx: [...cp[y] === void 0 ? [{
      color: y
    }] : [], ...Array.isArray(B) ? B : [B]],
    style: {
      ...M.style,
      ...A === "always" && y !== "inherit" && !cp[y] && {
        "--Link-underlineColor": C5({
          theme: s,
          ownerState: V
        })
      }
    }
  });
});
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T5 = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = (l, i, o, c) => {
  const s = Q.forwardRef(
    ({ color: d = "currentColor", size: y = 24, stroke: p = 2, title: v, className: h, children: x, ...A }, z) => Q.createElement(
      "svg",
      {
        ref: z,
        ...T5[l],
        width: y,
        height: y,
        className: ["tabler-icon", `tabler-icon-${i}`, h].join(" "),
        strokeWidth: p,
        stroke: d,
        ...A
      },
      [
        v && Q.createElement("title", { key: "svg-title" }, v),
        ...c.map(([B, M]) => Q.createElement(B, M)),
        ...Array.isArray(x) ? x : [x]
      ]
    )
  );
  return s.displayName = `${o}`, s;
};
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E5 = [["path", { d: "M8 11v5", key: "svg-0" }], ["path", { d: "M8 8v.01", key: "svg-1" }], ["path", { d: "M12 16v-5", key: "svg-2" }], ["path", { d: "M16 16v-3a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z", key: "svg-4" }]], M5 = no("outline", "brand-linkedin", "BrandLinkedin", E5);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O5 = [["path", { d: "M4 4l11.733 16h4.267l-11.733 -16z", key: "svg-0" }], ["path", { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772", key: "svg-1" }]], _5 = no("outline", "brand-x", "BrandX", O5);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z5 = [["path", { d: "M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z", key: "svg-0" }], ["path", { d: "M10 9l5 3l-5 3z", key: "svg-1" }]], D5 = no("outline", "brand-youtube", "BrandYoutube", z5);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R5 = [["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z", key: "svg-0" }], ["path", { d: "M3 7l9 6l9 -6", key: "svg-1" }]], B5 = no("outline", "mail", "Mail", R5), U5 = "Co-funded by the European Union", w5 = "This project is co-funded by the European Union under grant agreement ID 101139711. The information and views set out in this website are those of the URBREATH Consortium only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible for them.", N5 = "Copyrights © 2025 URBREATH. All Rights Reserved.", j5 = "Privacy Policy", H5 = "Cookie Declaration", L5 = "Terms of Usage", La = {
  coFunded: U5,
  grantAgreement: w5,
  copyright: N5,
  privacyPolicy: j5,
  cookies: H5,
  terms: L5
}, k5 = () => {
  const l = bf();
  return /* @__PURE__ */ lt.jsx(
    c5,
    {
      sx: {
        bgcolor: "background.default",
        width: "100%",
        paddingY: 4,
        paddingX: 2
      },
      children: /* @__PURE__ */ lt.jsx(Ha, { container: !0, spacing: 5, sx: { paddingTop: "0px!important" }, children: /* @__PURE__ */ lt.jsxs(
        Ha,
        {
          sx: {
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 2
          },
          children: [
            /* @__PURE__ */ lt.jsxs(
              Ha,
              {
                sx: {
                  display: "flex",
                  alignItems: { xs: "center", lg: "normal" },
                  maxWidth: { xs: "unset", lg: "220px" },
                  minWidth: { xs: "unset", lg: "180px" },
                  gap: 2
                },
                children: [
                  /* @__PURE__ */ lt.jsx(
                    o5,
                    {
                      countryCode: "EU",
                      svg: !0,
                      style: {
                        width: "50px",
                        height: "38px",
                        border: `1px solid ${l.palette.primary.light}`
                      },
                      title: "US"
                    }
                  ),
                  /* @__PURE__ */ lt.jsx(ka, { variant: "body2", color: "grey.800", fontWeight: "700", children: La.coFunded })
                ]
              }
            ),
            /* @__PURE__ */ lt.jsxs(
              Ha,
              {
                sx: { display: "flex", flexDirection: "column" },
                gap: { xs: 2, lg: 4 },
                children: [
                  /* @__PURE__ */ lt.jsx(ka, { variant: "caption", color: "grey.800", fontSize: "13px", children: La.grantAgreement }),
                  /* @__PURE__ */ lt.jsx(
                    Zs,
                    {
                      orientation: "horizontal",
                      sx: { marginBottom: "0px!important" }
                    }
                  ),
                  /* @__PURE__ */ lt.jsxs(
                    Ha,
                    {
                      sx: {
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        flexWrap: { xs: "wrap", lg: "nowrap" },
                        columnGap: 3,
                        rowGap: 2
                      },
                      children: [
                        /* @__PURE__ */ lt.jsxs(
                          Ha,
                          {
                            container: !0,
                            direction: "row",
                            gap: 2,
                            sx: {
                              alignItems: "center",
                              "& .MuiTypography-root": {
                                color: "primary.700",
                                whiteSpace: { xs: "wrap", sm: "nowrap" }
                              }
                            },
                            children: [
                              /* @__PURE__ */ lt.jsx(
                                wl,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer", flexShrink: 0 },
                                  href: "https://urbreath.eu/cookie-declaration/",
                                  target: "_blank",
                                  children: La.cookies
                                }
                              ),
                              /* @__PURE__ */ lt.jsx(
                                ka,
                                {
                                  variant: "button",
                                  color: "primary.700",
                                  display: { xs: "none", sm: "flex" },
                                  children: " | "
                                }
                              ),
                              /* @__PURE__ */ lt.jsx(
                                wl,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer" },
                                  href: "https://urbreath.eu/terms-of-use/",
                                  target: "_blank",
                                  children: La.terms
                                }
                              ),
                              /* @__PURE__ */ lt.jsx(
                                ka,
                                {
                                  variant: "button",
                                  color: "primary.700",
                                  display: { xs: "none", sm: "flex" },
                                  children: " | "
                                }
                              ),
                              /* @__PURE__ */ lt.jsx(
                                wl,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer", flexShrink: 0 },
                                  href: "https://urbreath.eu/privacy-policy",
                                  target: "_blank",
                                  children: La.privacyPolicy
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ lt.jsxs(
                          n5,
                          {
                            direction: "row",
                            sx: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 2,
                              fontSize: 13,
                              "& svg": { color: "primary.700" },
                              "& .MuiLink-root": { display: "flex" }
                            },
                            children: [
                              /* @__PURE__ */ lt.jsx(
                                wl,
                                {
                                  href: "https://www.linkedin.com/company/urbreath-horizon-europe-project",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#0A66C2" } },
                                  children: /* @__PURE__ */ lt.jsx(M5, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ lt.jsx(
                                wl,
                                {
                                  href: "https://www.youtube.com/channel/UC2n4Kx-Joo_Rhx9KZTrU-bg",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#FF0000" } },
                                  children: /* @__PURE__ */ lt.jsx(D5, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ lt.jsx(
                                wl,
                                {
                                  href: "https://x.com/URBREATHProject",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#000000" } },
                                  children: /* @__PURE__ */ lt.jsx(_5, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ lt.jsx(
                                wl,
                                {
                                  href: "mailto:info@urbreath.eu",
                                  sx: { "& svg:hover": { color: "secondary.500" } },
                                  children: /* @__PURE__ */ lt.jsx(B5, { style: { fontSize: "24px" } })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ lt.jsx(ka, { variant: "body2", fontWeight: 400, children: La.copyright })
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}, G5 = {
  paper: "#EFEDF7",
  grey50: "#ffffff",
  grey100: "#F5F9FC",
  grey200: "#E1E9EE",
  grey300: "#CDD9E0",
  grey400: "#AFBCC4",
  grey500: "#8895A0",
  grey600: "#62707C",
  grey700: "#3D4852",
  grey800: "#25262E",
  grey900: "#1C1B22",
  greyA100: "#96AAB5",
  greyA200: "#3F6A81",
  greyA400: "#373E46",
  greyA700: "#0C0C0C",
  // primary
  primaryLight: "#91D0EE",
  primaryMain: "#2BA5DE",
  primaryDark: "#1D7097",
  primary50: "#C4E6F6",
  primary100: "#B3DFF3",
  primary200: "#91D0EE",
  primary300: "#6FC2E9",
  primary400: "#4DB3E3",
  primary500: "#2BA5DE",
  primary600: "#248BBA",
  primary700: "#1D7097",
  primary800: "#165673",
  primary900: "#0F3B50",
  primaryA100: "#78C9F9",
  primaryA200: "#5EB8F2",
  primaryA400: "#2397E3",
  primaryA700: "#1A7DC3",
  // secondary
  secondaryLight: "#9B95B0",
  secondaryMain: "#3F3368",
  secondaryDark: "#2B2347",
  secondary50: "#C9C6D5",
  secondary100: "#BAB6C9",
  secondary200: "#9B95B0",
  secondary300: "#7C7498",
  secondary400: "#5E5480",
  secondary500: "#3F3368",
  secondary600: "#352B57",
  secondary700: "#2B2347",
  secondary800: "#211B36",
  secondary900: "#171225",
  secondaryA100: "#B58FDB",
  secondaryA200: "#9C60A6",
  secondaryA400: "#7A2D7D",
  secondaryA700: "#581C53",
  // success Colors
  successLight: "#81C784",
  successMain: "#4CAF50",
  successDark: "#388E3C",
  success50: "#E8F5E9",
  success100: "#C8E6C9",
  success200: "#A5D6A7",
  success300: "#81C784",
  success400: "#66BB6A",
  success500: "#4CAF50",
  success600: "#43A047",
  success700: "#388E3C",
  success800: "#2E7D32",
  success900: "#1B5E20",
  successA100: "#B9F6CA",
  successA200: "#69F0AE",
  successA400: "#00E676",
  successA700: "#00C853",
  // error Colors
  errorLight: "#E57373",
  errorDark: "#D32F2F",
  error50: "#FFEBEE",
  error100: "#FFCDD2",
  error200: "#EF9A9A",
  error300: "#E57373",
  error400: "#EF5350",
  error500: "#F44336",
  error600: "#E53935",
  error700: "#D32F2F",
  error800: "#C62828",
  error900: "#B71C1C",
  errorA100: "#FF8A80",
  errorA200: "#FF5252",
  errorA400: "#FF1744",
  errorA700: "#D50000",
  // warning
  warningLight: "#FFB74D",
  warningMain: "#FF9800",
  warningDark: "#F57C00",
  warning50: "#FFF3E0",
  warning100: "#FFE0B2",
  warning200: "#FFCC80",
  warning300: "#FFB74D",
  warning400: "#FFA726",
  warning500: "#FF9800",
  warning600: "#FB8C00",
  warning700: "#F57C00",
  warning800: "#EF6C00",
  warning900: "#E65100",
  warningA100: "#FFD180",
  warningA200: "#FFAB40",
  warningA400: "#FF9100",
  warningA700: "#FF6D00",
  // info colors
  infoLight: "#64B5F6",
  infoMain: "#2196F3",
  infoDark: "#1976D2",
  info50: "#E3F2FD",
  info100: "#BBDEFB",
  info200: "#90CAF9",
  info300: "#64B5F6",
  info400: "#42A5F5",
  info500: "#2196F3",
  info600: "#1E88E5",
  info700: "#1976D2",
  info800: "#1565C0",
  info900: "#0D47A1",
  infoA100: "#82B1FF",
  infoA200: "#448AFF",
  infoA400: "#2979FF",
  infoA700: "#2962FF"
}, q5 = () => {
  const l = G5;
  return to({
    palette: {
      common: {
        black: l.grey900
      },
      primary: {
        light: l.primaryLight,
        main: l.primaryMain,
        dark: l.primaryDark,
        50: l.primary50,
        100: l.primary100,
        200: l.primary200,
        300: l.primary300,
        400: l.primary400,
        500: l.primary500,
        600: l.primary600,
        700: l.primary700,
        800: l.primary800,
        900: l.primary900,
        A100: l.primaryA100,
        A200: l.primaryA200,
        A400: l.primaryA400,
        A700: l.primaryA700
      },
      secondary: {
        light: l.secondaryLight,
        main: l.secondaryMain,
        dark: l.secondaryDark,
        50: l.secondary50,
        100: l.secondary100,
        200: l.secondary200,
        300: l.secondary300,
        400: l.secondary400,
        500: l.secondary500,
        600: l.secondary600,
        700: l.secondary700,
        800: l.secondary800,
        900: l.secondary900,
        A100: l.secondaryA100,
        A200: l.secondaryA200,
        A400: l.secondaryA400,
        A700: l.secondaryA700
      },
      error: {
        light: l.errorLight,
        main: l.error800,
        dark: l.errorDark,
        50: l.error50,
        100: l.error100,
        200: l.error200,
        300: l.error300,
        400: l.error400,
        500: l.error500,
        600: l.error600,
        700: l.error700,
        800: l.error800,
        900: l.error900,
        A100: l.errorA100,
        A200: l.errorA200,
        A400: l.errorA400,
        A700: l.errorA700
      },
      warning: {
        light: l.warningLight,
        main: l.warningMain,
        dark: l.warningDark,
        50: l.warning50,
        100: l.warning100,
        200: l.warning200,
        300: l.warning300,
        400: l.warning400,
        500: l.warning500,
        600: l.warning600,
        700: l.warning700,
        800: l.warning800,
        900: l.warning900,
        A100: l.warningA100,
        A200: l.warningA200,
        A400: l.warningA400,
        A700: l.warningA700
      },
      success: {
        light: l.successLight,
        main: l.successMain,
        dark: l.successDark,
        50: l.success50,
        100: l.success100,
        200: l.success200,
        300: l.success300,
        400: l.success400,
        500: l.success500,
        600: l.success600,
        700: l.success700,
        800: l.success800,
        900: l.success900,
        A100: l.successA100,
        A200: l.successA200,
        A400: l.successA400,
        A700: l.successA700
      },
      info: {
        light: l.infoLight,
        main: l.infoMain,
        dark: l.infoDark,
        50: l.info50,
        100: l.info100,
        200: l.info200,
        300: l.info300,
        400: l.info400,
        500: l.info500,
        600: l.info600,
        700: l.info700,
        800: l.info800,
        900: l.info900,
        A100: l.infoA100,
        A200: l.infoA200,
        A400: l.infoA400,
        A700: l.infoA700
      },
      grey: {
        50: l.grey50,
        100: l.grey100,
        200: l.grey200,
        300: l.grey300,
        400: l.grey400,
        500: l.grey500,
        600: l.grey600,
        700: l.grey700,
        800: l.grey800,
        900: l.grey900,
        A100: l.greyA100,
        A200: l.greyA200,
        A400: l.greyA400,
        A700: l.greyA700
      },
      text: {
        primary: l.grey700,
        secondary: l.grey50,
        dark: l.grey900,
        hint: l.grey100
      },
      divider: l.paper,
      background: {
        paper: l.paper,
        default: l.grey50
      },
      dark: {
        light: l.primaryLight,
        main: l.primaryMain,
        dark: l.primaryDark,
        800: l.primary800,
        900: l.primary900
      }
    }
  });
}, Zr = "'Open Sans', sans-serif", $5 = (l) => ({
  fontFamily: l,
  h6: {
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "120%",
    fontFamily: l
  },
  h5: {
    fontSize: "24px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily: l
  },
  h4: {
    fontSize: "30px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily: l
  },
  h3: {
    fontSize: "36px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily: l
  },
  h2: {
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "120%",
    fontFamily: l
  },
  h1: {
    fontSize: "56px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: l
  },
  subtitle1: {
    fontSize: "18px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: Zr
  },
  subtitle2: {
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: l
  },
  caption: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    lineHeight: "130%",
    fontFamily: Zr
  },
  overline: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "2px",
    lineHeight: "130%",
    fontFamily: Zr
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: Zr
  },
  body2: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "140%",
    fontFamily: Zr
  },
  button: {
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: l
  }
});
function Y5(l, i, o) {
  const c = l.palette.grey[50], s = l.palette.secondary[50], d = l.palette.secondary.main;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
          minHeight: "42px",
          transition: "all 0.4s ease-in-out",
          boxShadow: "none",
          display: "flex",
          padding: "12px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          "&:hover": {
            boxShadow: "none"
          },
          "&:disabled": {
            cursor: "not-allowed",
            pointerEvents: "auto"
          }
        },
        startIcon: {
          marginLeft: "0px",
          marginRight: "0px"
        },
        endIcon: {
          marginLeft: "0px"
        },
        contained: {
          color: l.palette.grey[50],
          ...l.typography.button,
          "&.icon__button": {
            padding: "10px 16px"
          },
          "&:disabled, &:disabled:hover": {
            backgroundColor: l.palette.grey[500],
            color: l.palette.text.secondary
          }
        },
        outlined: {
          color: l.palette.primary[700],
          ...l.typography.button,
          "&:hover": {
            backgroundColor: "transparent"
          },
          "&:disabled, &:disabled:hover": {
            borderColor: l.palette.grey[500],
            color: l.palette.grey[500]
          }
        },
        outlinedError: {
          color: l.palette.error[900],
          borderColor: l.palette.error[900],
          "&:hover": {
            color: l.palette.error[500],
            borderColor: l.palette.error[500]
          }
        },
        containedPrimary: {
          background: l.palette.primary[700],
          "&:hover": {
            background: l.palette.secondary.main
          }
        },
        containedSecondary: {
          background: l.palette.secondary.main,
          "&:hover": {
            background: l.palette.primary[700]
          }
        },
        outlinedPrimary: {
          borderColor: l.palette.primary[700],
          "&:hover": {
            borderColor: l.palette.secondary.main,
            color: l.palette.secondary.main
          },
          "&:hover > *": {
            color: l.palette.secondary.main
          }
        },
        outlinedSecondary: {
          borderColor: l.palette.secondary.main,
          color: l.palette.secondary.main,
          "&:hover": {
            color: l.palette.primary[700],
            borderColor: l.palette.primary[700]
          },
          "&:hover > *": {
            color: l.palette.primary[700]
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.custom_icon_button": {
            backgroundColor: l.palette.primary[50],
            color: l.palette.primary[700],
            borderRadius: "4px",
            display: "flex",
            padding: "8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px"
          },
          "&.custom_icon_button:hover": {
            backgroundColor: l.palette.primary[700],
            color: l.palette.primary[50]
          },
          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: "none"
        },
        rounded: {
          borderRadius: `${i}px`
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: l.palette.background.default
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: l.palette.text.dark,
          padding: "24px"
        },
        title: {
          fontSize: "1.125rem"
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px"
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px"
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center"
        },
        outlined: {
          border: "1px dashed"
        }
      }
    },
    MuiListItemButton: {
      // sidebar menu items
      styleOverrides: {
        root: {
          color: l.palette.text.secondary,
          paddingTop: "10px",
          borderRadius: "0px",
          padding: "14px 16px",
          "&.Mui-selected": {
            color: d,
            backgroundColor: s,
            "&:hover": {
              backgroundColor: s
            },
            "& .MuiListItemIcon-root": {
              color: d
            }
          },
          "&:hover": {
            backgroundColor: s,
            color: d,
            "& .MuiListItemIcon-root": {
              color: d
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      // sidebar menu item icons
      styleOverrides: {
        root: {
          color: l.palette.text.secondary,
          minWidth: "24px",
          alignItems: "center",
          justifyContent: "center"
        }
      }
    },
    MuiListItemText: {
      // sidebar menu item texts
      styleOverrides: {
        root: { margin: 0 },
        primary: {
          // the below styling is used in the image gallery list during nbs registration
          ...l.typography.body2,
          fontWeight: 500,
          color: l.palette.grey[900]
        },
        secondary: {
          // the below styling is used in the image gallery list during nbs registration
          ...l.typography.caption,
          fontWeight: 500,
          color: l.palette.grey[600],
          paddingTop: "6px"
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: { minWidth: 0 }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // color of bottom border for variant 'standard' (also used in autocomplete)
          "&.MuiInput-root::before, &.MuiInput-root::after": {
            borderBottom: `1px solid ${l.palette.grey[500]}`
          },
          "&.MuiInput-root.Mui-error::before, &.MuiInput-root.Mui-error::after": {
            borderBottom: `1px solid ${l.palette.error[800]}`
          },
          "&.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before, &.MuiInput-root:focus:not(.Mui-disabled, .Mui-error):before, &.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):after, &.MuiInput-root:focus:not(.Mui-disabled, .Mui-error):after": {
            borderBottom: "2px solid",
            borderBottomColor: l.palette.secondary[500]
          }
        },
        input: {
          color: l.palette.text.dark,
          "&::placeholder": {
            color: l.palette.text.secondary,
            fontSize: "0.875rem"
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // placeholder of standard textfield
          "& .MuiInput-input": {
            "&::placeholder": {
              color: l.palette.grey[700],
              opacity: 1
            }
          },
          "& .Mui-error .MuiInput-input": {
            "&::placeholder": {
              color: l.palette.error[800],
              opacity: 1
            }
          },
          "& .Mui-focused .MuiInputAdornment-root": {
            // start Adornment for textfield on focus
            color: l.palette.secondary[500]
          },
          "& .Mui-error .MuiInputAdornment-root": {
            // start Adornment for textfield on error
            color: l.palette.error[800]
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...l.typography.caption,
          marginLeft: 0,
          "&.Mui-error": {
            color: l.palette.error[800]
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: o ? c : "transparent",
          borderRadius: `${i}px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: l.palette.grey[700]
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: l.palette.secondary[500],
            borderWidth: "2px"
          },
          "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: l.palette.error[800],
            borderWidth: "2px"
          },
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: l.palette.error[800],
            borderWidth: "2px"
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: l.palette.secondary[500],
            borderWidth: "2px"
          },
          "&:hover $notchedOutline": {
            borderColor: l.palette.secondary[500]
          },
          "&.MuiInputBase-multiline": {
            padding: 1
          }
        },
        input: {
          ...l.typography.body2,
          color: `${l.palette.grey[700]}`,
          background: o ? c : "transparent",
          padding: "15.5px 14px",
          borderRadius: `${i}px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0
            }
          },
          "&::placeholder": {
            ...l.typography.body2,
            color: l.palette.text.dark
          },
          "&.Mui-disabled": {
            cursor: "not-allowed"
          }
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: "12px"
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: l.palette.grey[300]
          }
        },
        mark: {
          backgroundColor: l.palette.background.paper,
          width: "4px"
        },
        valueLabel: {
          color: l.palette.primary.light
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          height: "52px",
          "& .MuiAutocomplete-tag": {
            //multiple autocomplete Chip
            height: "24px",
            padding: 0
          },
          "& .MuiInput-root": {
            marginTop: "8px",
            paddingBottom: "4px",
            paddingTop: "8px"
          },
          "& .MuiInput-input::placeholder": {
            color: l.palette.grey[700],
            opacity: 1
          },
          "& .Mui-error .MuiInput-input::placeholder": {
            color: l.palette.error[800],
            opacity: 1
          },
          "& .MuiInput-input": {
            ...l.typography.body2,
            fontWeight: 400,
            lineHeight: "140%!important",
            color: l.palette.grey[700]
          },
          "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
            "& .MuiSvgIcon-root": {
              color: "rgba(0,0,0,0.56)"
            }
          },
          "& .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-popupIndicator, & .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator": {
            color: "rgba(0,0,0,0.56)",
            "&:hover": {
              backgroundColor: "transparent"
            }
          },
          "& .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
            // start Adornment
            color: l.palette.grey[700],
            "& svg": {
              width: "24px",
              height: "24px"
            }
          },
          "& .Mui-error .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
            // start Adornment when error
            color: l.palette.error[800]
          },
          "& .Mui-focused.MuiInputBase-adornedStart": {
            // start Adornment for multiple autocomplete
            color: l.palette.secondary[500]
          },
          "& .Mui-focused.Mui-error .MuiInputAdornment-positionStart": {
            // start Adornment for multiple autocomplete
            // color: theme.palette.error[500]
            color: `${l.palette.error[800]}!important`
          },
          "&.Mui-focused": {
            "& .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
              color: l.palette.secondary[500]
            }
          }
        },
        paper: {
          // the options container paper
          backgroundColor: l.palette.background.default,
          borderRadius: "4px"
        },
        popper: {
          borderRadius: `${i}px`,
          boxShadow: "0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.20)"
        },
        inputRoot: {
          paddingRight: "0px!important"
        },
        listbox: {
          // CSS for the popover list of options
          "& .MuiAutocomplete-option": {
            ...l.typography.body2,
            padding: "6px 16px",
            transition: "all 0.3s ease-out",
            "&.Mui-focused": {
              backgroundColor: l.palette.secondary[50],
              color: l.palette.secondary[500],
              fontWeight: 700
            }
          },
          '& .MuiAutocomplete-option[aria-selected="true"], & .MuiAutocomplete-option[aria-selected="true"]:hover': {
            fontWeight: 700,
            backgroundColor: l.palette.secondary[50],
            color: l.palette.secondary[500],
            "&.Mui-focused": {
              backgroundColor: l.palette.secondary[50]
            }
          }
        },
        noOptions: {
          ...l.typography.body2,
          color: l.palette.text.primary
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: l.palette.divider,
          opacity: 1,
          marginBottom: "16px!important"
          // needed for sidebar dividers
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent"
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "transparent"
          },
          "& svg": {
            fill: l.palette.primary[700]
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          display: "flex",
          padding: "0px",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          color: l.palette.secondary[500],
          background: l.palette.secondary[50],
          transition: "all .2s ease-in-out",
          "&:hover": {
            color: l.palette.text.secondary,
            background: l.palette.secondary[500]
          }
        },
        rounded: {
          borderRadius: "4px"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          ...l.typography.caption,
          backgroundColor: l.palette.secondary[50],
          borderRadius: "100px",
          color: l.palette.secondary[500],
          padding: "3px 10px",
          height: "22px",
          ".MuiChip-deleteIcon": {
            color: "rgba(0,0,0,0.26)!important",
            height: "16px",
            width: "16px"
          },
          ".MuiChip-label": {
            marginTop: "2px"
          },
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit"
          }
        }
      }
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          color: l.palette.text.dark,
          fontSize: "16px"
        }
      }
    },
    MuiTreeItem: {
      styleOverrides: {
        label: {
          marginTop: 14,
          marginBottom: 14
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    },
    MuiInternalDateTimePickerTabs: {
      styleOverrides: {
        tabs: {
          backgroundColor: l.palette.primary.light,
          "& .MuiTabs-flexContainer": {
            borderColor: l.palette.primary[200]
          },
          "& .MuiTab-root": {
            color: l.palette.grey[900]
          },
          "& .MuiTabs-indicator": {
            backgroundColor: l.palette.primary.dark
          },
          "& .Mui-selected": {
            color: l.palette.primary.dark
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          borderBottom: "1px solid",
          borderColor: l.palette.grey[200]
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0.5,
          backgroundColor: l.palette.background.default,
          boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px -7px rgba(0, 0, 0, 0.20)",
          padding: 0
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...l.typography.h6,
          color: l.palette.primary[700],
          padding: "16px 24px"
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "16px 24px!important",
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          "& .MuiDialogContentText-root": {
            ...l.typography.body1,
            color: l.palette.text.primary,
            padding: 0
          }
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "16px 24px!important"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: l.palette.grey[200],
          "&.MuiTableCell-head": {
            fontSize: "0.875rem",
            color: l.palette.grey[900],
            fontWeight: 500
          }
        }
      }
    },
    MuiDateTimePickerToolbar: {
      styleOverrides: {
        timeDigitsContainer: {
          alignItems: "center"
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          ...l.typography.body2,
          fontWeight: "400!important",
          color: l.palette.text.secondary,
          background: l.palette.grey[700],
          borderRadius: "4px",
          padding: "4px 8px"
        },
        arrow: {
          "&:before": {
            background: l.palette.grey[700]
          }
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          margin: "6px",
          ...l.typography.caption,
          "&.Mui-selected": {
            backgroundColor: l.palette.primary[700],
            color: l.palette.text.secondary
          },
          "&.Mui-selected:hover": {
            backgroundColor: `${l.palette.primary[800]}!important`,
            color: l.palette.text.secondary
          }
        },
        sizeSmall: {
          height: "22px",
          width: "22px",
          minWidth: "22px"
        },
        page: {
          paddingTop: "2px",
          paddingLeft: "5px"
        }
      }
    },
    MuiDataGrid: {
      defaultProps: {
        rowHeight: 54
      },
      styleOverrides: {
        root: {
          borderWidth: 0,
          "& .MuiDataGrid-columnHeader--filledGroup": {
            borderBottomWidth: 0
          },
          "& .MuiDataGrid-columnHeader--emptyGroup": {
            borderBottomWidth: 0
          },
          "& .MuiFormControl-root>.MuiInputBase-root": {
            backgroundColor: `${l.palette.background.default} !important`,
            borderColor: `${l.palette.divider} !important`
          }
        },
        toolbarContainer: {
          "& .MuiButton-root": {
            paddingLeft: "16px !important",
            paddingRight: "16px !important"
          }
        },
        withBorderColor: {
          borderBottom: "1px solid",
          borderColor: l.palette.divider
        },
        columnHeader: {
          color: l.palette.grey[600],
          paddingLeft: 24,
          paddingRight: 24
        },
        footerContainer: {
          "&.MuiDataGrid-withBorderColor": {
            borderBottom: "none"
          }
        },
        columnHeaderCheckbox: {
          paddingLeft: 0,
          paddingRight: 0
        },
        cellCheckbox: {
          paddingLeft: 0,
          paddingRight: 0
        },
        cell: {
          borderWidth: 0,
          paddingLeft: 24,
          paddingRight: 24,
          "&.MuiDataGrid-cell--withRenderer > div ": {
            " > .high": {
              background: l.palette.success.light
            },
            "& > .medium": {
              background: l.palette.warning.light
            },
            "& > .low": {
              background: l.palette.error.light
            }
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "unset!important"
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: l.palette.primary[700],
          "&:hover": {
            color: l.palette.secondary[500]
          }
        }
      }
    },
    // input label (also used in autocomplete)
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...l.typography.caption,
          fontSize: "14px",
          color: l.palette.grey[500],
          "&[data-shrink=false]": {
            ...l.typography.body2,
            fontWeight: 400,
            color: l.palette.grey[700]
          },
          "&.Mui-focused": {
            color: l.palette.secondary[500]
          },
          "&.Mui-error": {
            color: l.palette.error[800]
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiFormLabel-asterisk": {
            color: l.palette.secondary[500]
          },
          "&[data-shrink=true] .MuiFormLabel-asterisk": {
            color: l.palette.grey[500]
          },
          "&[data-shrink=true].Mui-focused .MuiFormLabel-asterisk": {
            color: l.palette.secondary[500]
          },
          "&[data-shrink=true].Mui-error .MuiFormLabel-asterisk": {
            color: l.palette.error[800]
          }
        },
        asterisk: {
          color: l.palette.grey[700],
          "&[data-shrink=false]": {
            color: l.palette.grey[700]
          },
          "&.Mui-error": {
            color: l.palette.error[800]
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          // switch bar background color when off
          backgroundColor: "#000000"
        }
      }
    },
    // ******* Stepper: ********//
    MuiStepper: {
      styleOverrides: {
        root: {
          minHeight: "40px",
          "& .MuiStep-root:first-of-type": {
            paddingLeft: 0
          },
          "& .MuiStep-root:last-of-type": {
            paddingRight: 0
          }
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          height: "24px",
          minWidth: "24px",
          minHeight: "24px",
          color: l.palette.grey[500],
          "&.Mui-active": {
            color: l.palette.primary[700]
          },
          "&.Mui-completed": {
            color: l.palette.success[800]
          },
          "&.Mui-active.Mui-error": {
            color: l.palette.error[800]
          }
        },
        text: {
          ...l.typography.body2,
          fontWeight: 700,
          fill: l.palette.text.secondary
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          ...l.typography.h6,
          color: l.palette.grey[500],
          "&.Mui-active": {
            color: l.palette.primary[700],
            fontWeight: 600
          },
          "&.Mui-active.Mui-error": {
            color: l.palette.error[800]
          }
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: "#BDBDBD"
        }
      }
    },
    // ************************//
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "0!important"
          //used in login form
        }
      }
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          // below settings are needed for language selection dd menu
          "& .MuiList-root": {
            backgroundColor: l.palette.background.default
          },
          "& .MuiListItemButton-root.Mui-selected .MuiTypography-root, & .MuiListItemButton-root:hover .MuiTypography-root": {
            backgroundColor: l.palette.secondary[50],
            color: l.palette.secondary[500],
            fontWeight: 700
          }
        }
      }
    }
  };
}
function X5({ children: l }) {
  const o = "'Rubik', sans-serif", c = Q.useMemo(() => q5(), []), s = Q.useMemo(() => $5(o), [o]), d = Q.useMemo(
    () => ({
      spacing: 8,
      palette: c.palette,
      typography: s
    }),
    [c, s]
  ), y = to(d);
  return y.components = Q.useMemo(
    () => Y5(y, 12, !0),
    [y, 12]
  ), /* @__PURE__ */ lt.jsx(Gv, { injectFirst: !0, children: /* @__PURE__ */ lt.jsxs(Q2, { theme: y, children: [
    /* @__PURE__ */ lt.jsx(m5, { enableColorScheme: !0 }),
    l
  ] }) });
}
function V5() {
  return /* @__PURE__ */ lt.jsxs(X5, { children: [
    "Elena??yolo",
    /* @__PURE__ */ lt.jsx(k5, {})
  ] });
}
const Q5 = k1(V5);
customElements.define("urbreath-footer", Q5);
