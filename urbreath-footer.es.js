function zp(a, r) {
  for (var f = 0; f < r.length; f++) {
    const c = r[f];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const s in c)
        if (s !== "default" && !(s in a)) {
          const d = Object.getOwnPropertyDescriptor(c, s);
          d && Object.defineProperty(a, s, d.get ? d : {
            enumerable: !0,
            get: () => c[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function Op(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Ff = { exports: {} }, at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gm;
function _p() {
  if (Gm) return at;
  Gm = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), U = Symbol.iterator;
  function H(S) {
    return S === null || typeof S != "object" ? null : (S = U && S[U] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var D = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, E = Object.assign, q = {};
  function Q(S, G, $) {
    this.props = S, this.context = G, this.refs = q, this.updater = $ || D;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(S, G) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, G, "setState");
  }, Q.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = Q.prototype;
  function F(S, G, $) {
    this.props = S, this.context = G, this.refs = q, this.updater = $ || D;
  }
  var k = F.prototype = new Z();
  k.constructor = F, E(k, Q.prototype), k.isPureReactComponent = !0;
  var lt = Array.isArray;
  function X() {
  }
  var Y = { H: null, A: null, T: null, S: null }, gt = Object.prototype.hasOwnProperty;
  function dt(S, G, $) {
    var W = $.ref;
    return {
      $$typeof: a,
      type: S,
      key: G,
      ref: W !== void 0 ? W : null,
      props: $
    };
  }
  function jt(S, G) {
    return dt(S.type, G, S.props);
  }
  function ct(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function y(S) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function($) {
      return G[$];
    });
  }
  var J = /\/+/g;
  function V(S, G) {
    return typeof S == "object" && S !== null && S.key != null ? y("" + S.key) : G.toString(36);
  }
  function et(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(X, X) : (S.status = "pending", S.then(
          function(G) {
            S.status === "pending" && (S.status = "fulfilled", S.value = G);
          },
          function(G) {
            S.status === "pending" && (S.status = "rejected", S.reason = G);
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
  function M(S, G, $, W, ut) {
    var ft = typeof S;
    (ft === "undefined" || ft === "boolean") && (S = null);
    var xt = !1;
    if (S === null) xt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          xt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case r:
              xt = !0;
              break;
            case O:
              return xt = S._init, M(
                xt(S._payload),
                G,
                $,
                W,
                ut
              );
          }
      }
    if (xt)
      return ut = ut(S), xt = W === "" ? "." + V(S, 0) : W, lt(ut) ? ($ = "", xt != null && ($ = xt.replace(J, "$&/") + "/"), M(ut, G, $, "", function(Da) {
        return Da;
      })) : ut != null && (ct(ut) && (ut = jt(
        ut,
        $ + (ut.key == null || S && S.key === ut.key ? "" : ("" + ut.key).replace(
          J,
          "$&/"
        ) + "/") + xt
      )), G.push(ut)), 1;
    xt = 0;
    var se = W === "" ? "." : W + ":";
    if (lt(S))
      for (var $t = 0; $t < S.length; $t++)
        W = S[$t], ft = se + V(W, $t), xt += M(
          W,
          G,
          $,
          ft,
          ut
        );
    else if ($t = H(S), typeof $t == "function")
      for (S = $t.call(S), $t = 0; !(W = S.next()).done; )
        W = W.value, ft = se + V(W, $t++), xt += M(
          W,
          G,
          $,
          ft,
          ut
        );
    else if (ft === "object") {
      if (typeof S.then == "function")
        return M(
          et(S),
          G,
          $,
          W,
          ut
        );
      throw G = String(S), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xt;
  }
  function L(S, G, $) {
    if (S == null) return S;
    var W = [], ut = 0;
    return M(S, W, "", "", function(ft) {
      return G.call($, ft, ut++);
    }), W;
  }
  function I(S) {
    if (S._status === -1) {
      var G = S._result;
      G = G(), G.then(
        function($) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = $);
        },
        function($) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = $);
        }
      ), S._status === -1 && (S._status = 0, S._result = G);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Tt = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, zt = {
    map: L,
    forEach: function(S, G, $) {
      L(
        S,
        function() {
          G.apply(this, arguments);
        },
        $
      );
    },
    count: function(S) {
      var G = 0;
      return L(S, function() {
        G++;
      }), G;
    },
    toArray: function(S) {
      return L(S, function(G) {
        return G;
      }) || [];
    },
    only: function(S) {
      if (!ct(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return at.Activity = C, at.Children = zt, at.Component = Q, at.Fragment = f, at.Profiler = s, at.PureComponent = F, at.StrictMode = c, at.Suspense = b, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, at.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Y.H.useMemoCache(S);
    }
  }, at.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, at.cacheSignal = function() {
    return null;
  }, at.cloneElement = function(S, G, $) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = E({}, S.props), ut = S.key;
    if (G != null)
      for (ft in G.key !== void 0 && (ut = "" + G.key), G)
        !gt.call(G, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && G.ref === void 0 || (W[ft] = G[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) W.children = $;
    else if (1 < ft) {
      for (var xt = Array(ft), se = 0; se < ft; se++)
        xt[se] = arguments[se + 2];
      W.children = xt;
    }
    return dt(S.type, ut, W);
  }, at.createContext = function(S) {
    return S = {
      $$typeof: h,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, at.createElement = function(S, G, $) {
    var W, ut = {}, ft = null;
    if (G != null)
      for (W in G.key !== void 0 && (ft = "" + G.key), G)
        gt.call(G, W) && W !== "key" && W !== "__self" && W !== "__source" && (ut[W] = G[W]);
    var xt = arguments.length - 2;
    if (xt === 1) ut.children = $;
    else if (1 < xt) {
      for (var se = Array(xt), $t = 0; $t < xt; $t++)
        se[$t] = arguments[$t + 2];
      ut.children = se;
    }
    if (S && S.defaultProps)
      for (W in xt = S.defaultProps, xt)
        ut[W] === void 0 && (ut[W] = xt[W]);
    return dt(S, ft, ut);
  }, at.createRef = function() {
    return { current: null };
  }, at.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, at.isValidElement = ct, at.lazy = function(S) {
    return {
      $$typeof: O,
      _payload: { _status: -1, _result: S },
      _init: I
    };
  }, at.memo = function(S, G) {
    return {
      $$typeof: g,
      type: S,
      compare: G === void 0 ? null : G
    };
  }, at.startTransition = function(S) {
    var G = Y.T, $ = {};
    Y.T = $;
    try {
      var W = S(), ut = Y.S;
      ut !== null && ut($, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(X, Tt);
    } catch (ft) {
      Tt(ft);
    } finally {
      G !== null && $.types !== null && (G.types = $.types), Y.T = G;
    }
  }, at.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, at.use = function(S) {
    return Y.H.use(S);
  }, at.useActionState = function(S, G, $) {
    return Y.H.useActionState(S, G, $);
  }, at.useCallback = function(S, G) {
    return Y.H.useCallback(S, G);
  }, at.useContext = function(S) {
    return Y.H.useContext(S);
  }, at.useDebugValue = function() {
  }, at.useDeferredValue = function(S, G) {
    return Y.H.useDeferredValue(S, G);
  }, at.useEffect = function(S, G) {
    return Y.H.useEffect(S, G);
  }, at.useEffectEvent = function(S) {
    return Y.H.useEffectEvent(S);
  }, at.useId = function() {
    return Y.H.useId();
  }, at.useImperativeHandle = function(S, G, $) {
    return Y.H.useImperativeHandle(S, G, $);
  }, at.useInsertionEffect = function(S, G) {
    return Y.H.useInsertionEffect(S, G);
  }, at.useLayoutEffect = function(S, G) {
    return Y.H.useLayoutEffect(S, G);
  }, at.useMemo = function(S, G) {
    return Y.H.useMemo(S, G);
  }, at.useOptimistic = function(S, G) {
    return Y.H.useOptimistic(S, G);
  }, at.useReducer = function(S, G, $) {
    return Y.H.useReducer(S, G, $);
  }, at.useRef = function(S) {
    return Y.H.useRef(S);
  }, at.useState = function(S) {
    return Y.H.useState(S);
  }, at.useSyncExternalStore = function(S, G, $) {
    return Y.H.useSyncExternalStore(
      S,
      G,
      $
    );
  }, at.useTransition = function() {
    return Y.H.useTransition();
  }, at.version = "19.2.0", at;
}
var qm;
function So() {
  return qm || (qm = 1, Ff.exports = _p()), Ff.exports;
}
var vt = So();
const To = /* @__PURE__ */ Op(vt), Ym = /* @__PURE__ */ zp({
  __proto__: null,
  default: To
}, [vt]);
var Pf = { exports: {} }, Cu = {}, If = { exports: {} }, to = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lm;
function Mp() {
  return Lm || (Lm = 1, (function(a) {
    function r(M, L) {
      var I = M.length;
      M.push(L);
      t: for (; 0 < I; ) {
        var Tt = I - 1 >>> 1, zt = M[Tt];
        if (0 < s(zt, L))
          M[Tt] = L, M[I] = zt, I = Tt;
        else break t;
      }
    }
    function f(M) {
      return M.length === 0 ? null : M[0];
    }
    function c(M) {
      if (M.length === 0) return null;
      var L = M[0], I = M.pop();
      if (I !== L) {
        M[0] = I;
        t: for (var Tt = 0, zt = M.length, S = zt >>> 1; Tt < S; ) {
          var G = 2 * (Tt + 1) - 1, $ = M[G], W = G + 1, ut = M[W];
          if (0 > s($, I))
            W < zt && 0 > s(ut, $) ? (M[Tt] = ut, M[W] = I, Tt = W) : (M[Tt] = $, M[G] = I, Tt = G);
          else if (W < zt && 0 > s(ut, I))
            M[Tt] = ut, M[W] = I, Tt = W;
          else break t;
        }
      }
      return L;
    }
    function s(M, L) {
      var I = M.sortIndex - L.sortIndex;
      return I !== 0 ? I : M.id - L.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, p = h.now();
      a.unstable_now = function() {
        return h.now() - p;
      };
    }
    var b = [], g = [], O = 1, C = null, U = 3, H = !1, D = !1, E = !1, q = !1, Q = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    function k(M) {
      for (var L = f(g); L !== null; ) {
        if (L.callback === null) c(g);
        else if (L.startTime <= M)
          c(g), L.sortIndex = L.expirationTime, r(b, L);
        else break;
        L = f(g);
      }
    }
    function lt(M) {
      if (E = !1, k(M), !D)
        if (f(b) !== null)
          D = !0, X || (X = !0, y());
        else {
          var L = f(g);
          L !== null && et(lt, L.startTime - M);
        }
    }
    var X = !1, Y = -1, gt = 5, dt = -1;
    function jt() {
      return q ? !0 : !(a.unstable_now() - dt < gt);
    }
    function ct() {
      if (q = !1, X) {
        var M = a.unstable_now();
        dt = M;
        var L = !0;
        try {
          t: {
            D = !1, E && (E = !1, Z(Y), Y = -1), H = !0;
            var I = U;
            try {
              e: {
                for (k(M), C = f(b); C !== null && !(C.expirationTime > M && jt()); ) {
                  var Tt = C.callback;
                  if (typeof Tt == "function") {
                    C.callback = null, U = C.priorityLevel;
                    var zt = Tt(
                      C.expirationTime <= M
                    );
                    if (M = a.unstable_now(), typeof zt == "function") {
                      C.callback = zt, k(M), L = !0;
                      break e;
                    }
                    C === f(b) && c(b), k(M);
                  } else c(b);
                  C = f(b);
                }
                if (C !== null) L = !0;
                else {
                  var S = f(g);
                  S !== null && et(
                    lt,
                    S.startTime - M
                  ), L = !1;
                }
              }
              break t;
            } finally {
              C = null, U = I, H = !1;
            }
            L = void 0;
          }
        } finally {
          L ? y() : X = !1;
        }
      }
    }
    var y;
    if (typeof F == "function")
      y = function() {
        F(ct);
      };
    else if (typeof MessageChannel < "u") {
      var J = new MessageChannel(), V = J.port2;
      J.port1.onmessage = ct, y = function() {
        V.postMessage(null);
      };
    } else
      y = function() {
        Q(ct, 0);
      };
    function et(M, L) {
      Y = Q(function() {
        M(a.unstable_now());
      }, L);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, a.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : gt = 0 < M ? Math.floor(1e3 / M) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, a.unstable_next = function(M) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = U;
      }
      var I = U;
      U = L;
      try {
        return M();
      } finally {
        U = I;
      }
    }, a.unstable_requestPaint = function() {
      q = !0;
    }, a.unstable_runWithPriority = function(M, L) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var I = U;
      U = M;
      try {
        return L();
      } finally {
        U = I;
      }
    }, a.unstable_scheduleCallback = function(M, L, I) {
      var Tt = a.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? Tt + I : Tt) : I = Tt, M) {
        case 1:
          var zt = -1;
          break;
        case 2:
          zt = 250;
          break;
        case 5:
          zt = 1073741823;
          break;
        case 4:
          zt = 1e4;
          break;
        default:
          zt = 5e3;
      }
      return zt = I + zt, M = {
        id: O++,
        callback: L,
        priorityLevel: M,
        startTime: I,
        expirationTime: zt,
        sortIndex: -1
      }, I > Tt ? (M.sortIndex = I, r(g, M), f(b) === null && M === f(g) && (E ? (Z(Y), Y = -1) : E = !0, et(lt, I - Tt))) : (M.sortIndex = zt, r(b, M), D || H || (D = !0, X || (X = !0, y()))), M;
    }, a.unstable_shouldYield = jt, a.unstable_wrapCallback = function(M) {
      var L = U;
      return function() {
        var I = U;
        U = L;
        try {
          return M.apply(this, arguments);
        } finally {
          U = I;
        }
      };
    };
  })(to)), to;
}
var Xm;
function Dp() {
  return Xm || (Xm = 1, If.exports = Mp()), If.exports;
}
var eo = { exports: {} }, fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qm;
function Rp() {
  if (Qm) return fe;
  Qm = 1;
  var a = So();
  function r(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        g += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var c = {
    d: {
      f,
      r: function() {
        throw Error(r(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function d(b, g, O) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: C == null ? null : "" + C,
      children: b,
      containerInfo: g,
      implementation: O
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(b, g) {
    if (b === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, fe.createPortal = function(b, g) {
    var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return d(b, g, null, O);
  }, fe.flushSync = function(b) {
    var g = h.T, O = c.p;
    try {
      if (h.T = null, c.p = 2, b) return b();
    } finally {
      h.T = g, c.p = O, c.d.f();
    }
  }, fe.preconnect = function(b, g) {
    typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, c.d.C(b, g));
  }, fe.prefetchDNS = function(b) {
    typeof b == "string" && c.d.D(b);
  }, fe.preinit = function(b, g) {
    if (typeof b == "string" && g && typeof g.as == "string") {
      var O = g.as, C = p(O, g.crossOrigin), U = typeof g.integrity == "string" ? g.integrity : void 0, H = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      O === "style" ? c.d.S(
        b,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: C,
          integrity: U,
          fetchPriority: H
        }
      ) : O === "script" && c.d.X(b, {
        crossOrigin: C,
        integrity: U,
        fetchPriority: H,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, fe.preinitModule = function(b, g) {
    if (typeof b == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var O = p(
            g.as,
            g.crossOrigin
          );
          c.d.M(b, {
            crossOrigin: O,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && c.d.M(b);
  }, fe.preload = function(b, g) {
    if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var O = g.as, C = p(O, g.crossOrigin);
      c.d.L(b, O, {
        crossOrigin: C,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, fe.preloadModule = function(b, g) {
    if (typeof b == "string")
      if (g) {
        var O = p(g.as, g.crossOrigin);
        c.d.m(b, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: O,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else c.d.m(b);
  }, fe.requestFormReset = function(b) {
    c.d.r(b);
  }, fe.unstable_batchedUpdates = function(b, g) {
    return b(g);
  }, fe.useFormState = function(b, g, O) {
    return h.H.useFormState(b, g, O);
  }, fe.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, fe.version = "19.2.0", fe;
}
var Vm;
function Up() {
  if (Vm) return eo.exports;
  Vm = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), eo.exports = Rp(), eo.exports;
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
var $m;
function Bp() {
  if ($m) return Cu;
  $m = 1;
  var a = Dp(), r = So(), f = Up();
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
  function h(t) {
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
  function b(t) {
    if (d(t) !== t)
      throw Error(c(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var i = u.alternate;
      if (i === null) {
        if (l = u.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === i.child) {
        for (i = u.child; i; ) {
          if (i === n) return b(u), t;
          if (i === l) return b(u), e;
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = u, l = i;
      else {
        for (var o = !1, m = u.child; m; ) {
          if (m === n) {
            o = !0, n = u, l = i;
            break;
          }
          if (m === l) {
            o = !0, l = u, n = i;
            break;
          }
          m = m.sibling;
        }
        if (!o) {
          for (m = i.child; m; ) {
            if (m === n) {
              o = !0, n = i, l = u;
              break;
            }
            if (m === l) {
              o = !0, l = i, n = u;
              break;
            }
            m = m.sibling;
          }
          if (!o) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? t : e;
  }
  function O(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = O(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var C = Object.assign, U = Symbol.for("react.element"), H = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), F = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), lt = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), dt = Symbol.for("react.activity"), jt = Symbol.for("react.memo_cache_sentinel"), ct = Symbol.iterator;
  function y(t) {
    return t === null || typeof t != "object" ? null : (t = ct && t[ct] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var J = Symbol.for("react.client.reference");
  function V(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === J ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case E:
        return "Fragment";
      case Q:
        return "Profiler";
      case q:
        return "StrictMode";
      case lt:
        return "Suspense";
      case X:
        return "SuspenseList";
      case dt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
          return "Portal";
        case F:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case k:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Y:
          return e = t.displayName || null, e !== null ? e : V(t.type) || "Memo";
        case gt:
          e = t._payload, t = t._init;
          try {
            return V(t(e));
          } catch {
          }
      }
    return null;
  }
  var et = Array.isArray, M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Tt = [], zt = -1;
  function S(t) {
    return { current: t };
  }
  function G(t) {
    0 > zt || (t.current = Tt[zt], Tt[zt] = null, zt--);
  }
  function $(t, e) {
    zt++, Tt[zt] = t.current, t.current = e;
  }
  var W = S(null), ut = S(null), ft = S(null), xt = S(null);
  function se(t, e) {
    switch ($(ft, e), $(ut, t), $(W, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? rm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = rm(e), t = cm(e, t);
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
    G(W), $(W, t);
  }
  function $t() {
    G(W), G(ut), G(ft);
  }
  function Da(t) {
    t.memoizedState !== null && $(xt, t);
    var e = W.current, n = cm(e, t.type);
    e !== n && ($(ut, t), $(W, n));
  }
  function qu(t) {
    ut.current === t && (G(W), G(ut)), xt.current === t && (G(xt), bu._currentValue = I);
  }
  var Ur, wo;
  function tl(t) {
    if (Ur === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ur = e && e[1] || "", wo = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ur + t + wo;
  }
  var Br = !1;
  function Nr(t, e) {
    if (!t || Br) return "";
    Br = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var w = function() {
                throw Error();
              };
              if (Object.defineProperty(w.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(w, []);
                } catch (R) {
                  var _ = R;
                }
                Reflect.construct(t, [], w);
              } else {
                try {
                  w.call();
                } catch (R) {
                  _ = R;
                }
                t.call(w.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                _ = R;
              }
              (w = t()) && typeof w.catch == "function" && w.catch(function() {
              });
            }
          } catch (R) {
            if (R && _ && typeof R.stack == "string")
              return [R.stack, _.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = l.DetermineComponentFrameRoot(), o = i[0], m = i[1];
      if (o && m) {
        var v = o.split(`
`), z = m.split(`
`);
        for (u = l = 0; l < v.length && !v[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < z.length && !z[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === v.length || u === z.length)
          for (l = v.length - 1, u = z.length - 1; 1 <= l && 0 <= u && v[l] !== z[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (v[l] !== z[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || v[l] !== z[u]) {
                  var B = `
` + v[l].replace(" at new ", " at ");
                  return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Br = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? tl(n) : "";
  }
  function ly(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return tl(t.type);
      case 16:
        return tl("Lazy");
      case 13:
        return t.child !== e && e !== null ? tl("Suspense Fallback") : tl("Suspense");
      case 19:
        return tl("SuspenseList");
      case 0:
      case 15:
        return Nr(t.type, !1);
      case 11:
        return Nr(t.type.render, !1);
      case 1:
        return Nr(t.type, !0);
      case 31:
        return tl("Activity");
      default:
        return "";
    }
  }
  function Go(t) {
    try {
      var e = "", n = null;
      do
        e += ly(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Hr = Object.prototype.hasOwnProperty, jr = a.unstable_scheduleCallback, wr = a.unstable_cancelCallback, ay = a.unstable_shouldYield, uy = a.unstable_requestPaint, Ae = a.unstable_now, iy = a.unstable_getCurrentPriorityLevel, qo = a.unstable_ImmediatePriority, Yo = a.unstable_UserBlockingPriority, Yu = a.unstable_NormalPriority, ry = a.unstable_LowPriority, Lo = a.unstable_IdlePriority, cy = a.log, fy = a.unstable_setDisableYieldValue, Ra = null, Ce = null;
  function _n(t) {
    if (typeof cy == "function" && fy(t), Ce && typeof Ce.setStrictMode == "function")
      try {
        Ce.setStrictMode(Ra, t);
      } catch {
      }
  }
  var Ee = Math.clz32 ? Math.clz32 : dy, oy = Math.log, sy = Math.LN2;
  function dy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (oy(t) / sy | 0) | 0;
  }
  var Lu = 256, Xu = 262144, Qu = 4194304;
  function el(t) {
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
  function Vu(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0, i = t.suspendedLanes, o = t.pingedLanes;
    t = t.warmLanes;
    var m = l & 134217727;
    return m !== 0 ? (l = m & ~i, l !== 0 ? u = el(l) : (o &= m, o !== 0 ? u = el(o) : n || (n = m & ~t, n !== 0 && (u = el(n))))) : (m = l & ~i, m !== 0 ? u = el(m) : o !== 0 ? u = el(o) : n || (n = l & ~t, n !== 0 && (u = el(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & i) === 0 && (i = u & -u, n = e & -e, i >= n || i === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function Ua(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function my(t, e) {
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
  function Xo() {
    var t = Qu;
    return Qu <<= 1, (Qu & 62914560) === 0 && (Qu = 4194304), t;
  }
  function Gr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ba(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function hy(t, e, n, l, u, i) {
    var o = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, v = t.expirationTimes, z = t.hiddenUpdates;
    for (n = o & ~n; 0 < n; ) {
      var B = 31 - Ee(n), w = 1 << B;
      m[B] = 0, v[B] = -1;
      var _ = z[B];
      if (_ !== null)
        for (z[B] = null, B = 0; B < _.length; B++) {
          var R = _[B];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~w;
    }
    l !== 0 && Qo(t, l, 0), i !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(o & ~e));
  }
  function Qo(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - Ee(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930;
  }
  function Vo(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - Ee(n), u = 1 << l;
      u & e | t[l] & e && (t[l] |= e), n &= ~u;
    }
  }
  function $o(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : qr(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function qr(t) {
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
  function Yr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zo() {
    var t = L.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Rm(t.type));
  }
  function ko(t, e) {
    var n = L.p;
    try {
      return L.p = t, e();
    } finally {
      L.p = n;
    }
  }
  var Mn = Math.random().toString(36).slice(2), le = "__reactFiber$" + Mn, he = "__reactProps$" + Mn, Ml = "__reactContainer$" + Mn, Lr = "__reactEvents$" + Mn, yy = "__reactListeners$" + Mn, gy = "__reactHandles$" + Mn, Ko = "__reactResources$" + Mn, Na = "__reactMarker$" + Mn;
  function Xr(t) {
    delete t[le], delete t[he], delete t[Lr], delete t[yy], delete t[gy];
  }
  function Dl(t) {
    var e = t[le];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Ml] || n[le]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = ym(t); t !== null; ) {
            if (n = t[le]) return n;
            t = ym(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Rl(t) {
    if (t = t[le] || t[Ml]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ha(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Ul(t) {
    var e = t[Ko];
    return e || (e = t[Ko] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[Na] = !0;
  }
  var Jo = /* @__PURE__ */ new Set(), Wo = {};
  function nl(t, e) {
    Bl(t, e), Bl(t + "Capture", e);
  }
  function Bl(t, e) {
    for (Wo[t] = e, t = 0; t < e.length; t++)
      Jo.add(e[t]);
  }
  var py = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fo = {}, Po = {};
  function vy(t) {
    return Hr.call(Po, t) ? !0 : Hr.call(Fo, t) ? !1 : py.test(t) ? Po[t] = !0 : (Fo[t] = !0, !1);
  }
  function $u(t, e, n) {
    if (vy(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Zu(t, e, n) {
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
  function fn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function He(t) {
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
  function Io(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function by(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, i = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(o) {
          n = "" + o, i.call(this, o);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(o) {
          n = "" + o;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Qr(t) {
    if (!t._valueTracker) {
      var e = Io(t) ? "checked" : "value";
      t._valueTracker = by(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ts(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = Io(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function ku(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Sy = /[\n"\\]/g;
  function je(t) {
    return t.replace(
      Sy,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vr(t, e, n, l, u, i, o, m) {
    t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + He(e)) : t.value !== "" + He(e) && (t.value = "" + He(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? $r(t, o, He(e)) : n != null ? $r(t, o, He(n)) : l != null && t.removeAttribute("value"), u == null && i != null && (t.defaultChecked = !!i), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + He(m) : t.removeAttribute("name");
  }
  function es(t, e, n, l, u, i, o, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        Qr(t);
        return;
      }
      n = n != null ? "" + He(n) : "", e = e != null ? "" + He(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = m ? t.checked : !!l, t.defaultChecked = !!l, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), Qr(t);
  }
  function $r(t, e, n) {
    e === "number" && ku(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Nl(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + He(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, l && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ns(t, e, n) {
    if (e != null && (e = "" + He(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + He(n) : "";
  }
  function ls(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (et(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = He(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l), Qr(t);
  }
  function Hl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Ty = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function as(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Ty.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function us(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var u in e)
        l = e[u], e.hasOwnProperty(u) && n[u] !== l && as(t, u, l);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && as(t, i, e[i]);
  }
  function Zr(t) {
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
  var Ay = /* @__PURE__ */ new Map([
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
  ]), Cy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ku(t) {
    return Cy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function on() {
  }
  var kr = null;
  function Kr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var jl = null, wl = null;
  function is(t) {
    var e = Rl(t);
    if (e && (t = e.stateNode)) {
      var n = t[he] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Vr(
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
              'input[name="' + je(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var u = l[he] || null;
                if (!u) throw Error(c(90));
                Vr(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              l = n[e], l.form === t.form && ts(l);
          }
          break t;
        case "textarea":
          ns(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Nl(t, !!n.multiple, e, !1);
      }
    }
  }
  var Jr = !1;
  function rs(t, e, n) {
    if (Jr) return t(e, n);
    Jr = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Jr = !1, (jl !== null || wl !== null) && (Hi(), jl && (e = jl, t = wl, wl = jl = null, is(e), t)))
        for (e = 0; e < t.length; e++) is(t[e]);
    }
  }
  function ja(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[he] || null;
    if (l === null) return null;
    n = l[e];
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
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
  var sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wr = !1;
  if (sn)
    try {
      var wa = {};
      Object.defineProperty(wa, "passive", {
        get: function() {
          Wr = !0;
        }
      }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa);
    } catch {
      Wr = !1;
    }
  var Dn = null, Fr = null, Ju = null;
  function cs() {
    if (Ju) return Ju;
    var t, e = Fr, n = e.length, l, u = "value" in Dn ? Dn.value : Dn.textContent, i = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var o = n - t;
    for (l = 1; l <= o && e[n - l] === u[i - l]; l++) ;
    return Ju = u.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Wu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Fu() {
    return !0;
  }
  function fs() {
    return !1;
  }
  function ye(t) {
    function e(n, l, u, i, o) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fu : fs, this.isPropagationStopped = fs, this;
    }
    return C(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fu);
      },
      persist: function() {
      },
      isPersistent: Fu
    }), e;
  }
  var ll = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pu = ye(ll), Ga = C({}, ll, { view: 0, detail: 0 }), Ey = ye(Ga), Pr, Ir, qa, Iu = C({}, Ga, {
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
    getModifierState: ec,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== qa && (qa && t.type === "mousemove" ? (Pr = t.screenX - qa.screenX, Ir = t.screenY - qa.screenY) : Ir = Pr = 0, qa = t), Pr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ir;
    }
  }), os = ye(Iu), xy = C({}, Iu, { dataTransfer: 0 }), zy = ye(xy), Oy = C({}, Ga, { relatedTarget: 0 }), tc = ye(Oy), _y = C({}, ll, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), My = ye(_y), Dy = C({}, ll, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Ry = ye(Dy), Uy = C({}, ll, { data: 0 }), ss = ye(Uy), By = {
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
  }, Ny = {
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
  }, Hy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Hy[t]) ? !!e[t] : !1;
  }
  function ec() {
    return jy;
  }
  var wy = C({}, Ga, {
    key: function(t) {
      if (t.key) {
        var e = By[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Wu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Ny[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ec,
    charCode: function(t) {
      return t.type === "keypress" ? Wu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Wu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Gy = ye(wy), qy = C({}, Iu, {
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
  }), ds = ye(qy), Yy = C({}, Ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ec
  }), Ly = ye(Yy), Xy = C({}, ll, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qy = ye(Xy), Vy = C({}, Iu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $y = ye(Vy), Zy = C({}, ll, {
    newState: 0,
    oldState: 0
  }), ky = ye(Zy), Ky = [9, 13, 27, 32], nc = sn && "CompositionEvent" in window, Ya = null;
  sn && "documentMode" in document && (Ya = document.documentMode);
  var Jy = sn && "TextEvent" in window && !Ya, ms = sn && (!nc || Ya && 8 < Ya && 11 >= Ya), hs = " ", ys = !1;
  function gs(t, e) {
    switch (t) {
      case "keyup":
        return Ky.indexOf(e.keyCode) !== -1;
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
  function ps(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Gl = !1;
  function Wy(t, e) {
    switch (t) {
      case "compositionend":
        return ps(e);
      case "keypress":
        return e.which !== 32 ? null : (ys = !0, hs);
      case "textInput":
        return t = e.data, t === hs && ys ? null : t;
      default:
        return null;
    }
  }
  function Fy(t, e) {
    if (Gl)
      return t === "compositionend" || !nc && gs(t, e) ? (t = cs(), Ju = Fr = Dn = null, Gl = !1, t) : null;
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
        return ms && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Py = {
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
  function vs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Py[t.type] : e === "textarea";
  }
  function bs(t, e, n, l) {
    jl ? wl ? wl.push(l) : wl = [l] : jl = l, e = Xi(e, "onChange"), 0 < e.length && (n = new Pu(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var La = null, Xa = null;
  function Iy(t) {
    em(t, 0);
  }
  function ti(t) {
    var e = Ha(t);
    if (ts(e)) return t;
  }
  function Ss(t, e) {
    if (t === "change") return e;
  }
  var Ts = !1;
  if (sn) {
    var lc;
    if (sn) {
      var ac = "oninput" in document;
      if (!ac) {
        var As = document.createElement("div");
        As.setAttribute("oninput", "return;"), ac = typeof As.oninput == "function";
      }
      lc = ac;
    } else lc = !1;
    Ts = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Cs() {
    La && (La.detachEvent("onpropertychange", Es), Xa = La = null);
  }
  function Es(t) {
    if (t.propertyName === "value" && ti(Xa)) {
      var e = [];
      bs(
        e,
        Xa,
        t,
        Kr(t)
      ), rs(Iy, e);
    }
  }
  function tg(t, e, n) {
    t === "focusin" ? (Cs(), La = e, Xa = n, La.attachEvent("onpropertychange", Es)) : t === "focusout" && Cs();
  }
  function eg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ti(Xa);
  }
  function ng(t, e) {
    if (t === "click") return ti(e);
  }
  function lg(t, e) {
    if (t === "input" || t === "change")
      return ti(e);
  }
  function ag(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var xe = typeof Object.is == "function" ? Object.is : ag;
  function Qa(t, e) {
    if (xe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!Hr.call(e, u) || !xe(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function xs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function zs(t, e) {
    var n = xs(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = t + n.textContent.length, t <= e && l >= e)
          return { node: n, offset: e - t };
        t = l;
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
      n = xs(n);
    }
  }
  function Os(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Os(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function _s(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ku(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ku(t.document);
    }
    return e;
  }
  function uc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ug = sn && "documentMode" in document && 11 >= document.documentMode, ql = null, ic = null, Va = null, rc = !1;
  function Ms(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rc || ql == null || ql !== ku(l) || (l = ql, "selectionStart" in l && uc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Va && Qa(Va, l) || (Va = l, l = Xi(ic, "onSelect"), 0 < l.length && (e = new Pu(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }), e.target = ql)));
  }
  function al(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Yl = {
    animationend: al("Animation", "AnimationEnd"),
    animationiteration: al("Animation", "AnimationIteration"),
    animationstart: al("Animation", "AnimationStart"),
    transitionrun: al("Transition", "TransitionRun"),
    transitionstart: al("Transition", "TransitionStart"),
    transitioncancel: al("Transition", "TransitionCancel"),
    transitionend: al("Transition", "TransitionEnd")
  }, cc = {}, Ds = {};
  sn && (Ds = document.createElement("div").style, "AnimationEvent" in window || (delete Yl.animationend.animation, delete Yl.animationiteration.animation, delete Yl.animationstart.animation), "TransitionEvent" in window || delete Yl.transitionend.transition);
  function ul(t) {
    if (cc[t]) return cc[t];
    if (!Yl[t]) return t;
    var e = Yl[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Ds)
        return cc[t] = e[n];
    return t;
  }
  var Rs = ul("animationend"), Us = ul("animationiteration"), Bs = ul("animationstart"), ig = ul("transitionrun"), rg = ul("transitionstart"), cg = ul("transitioncancel"), Ns = ul("transitionend"), Hs = /* @__PURE__ */ new Map(), fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fc.push("scrollEnd");
  function ke(t, e) {
    Hs.set(t, e), nl(e, [t]);
  }
  var ei = typeof reportError == "function" ? reportError : function(t) {
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
  }, we = [], Ll = 0, oc = 0;
  function ni() {
    for (var t = Ll, e = oc = Ll = 0; e < t; ) {
      var n = we[e];
      we[e++] = null;
      var l = we[e];
      we[e++] = null;
      var u = we[e];
      we[e++] = null;
      var i = we[e];
      if (we[e++] = null, l !== null && u !== null) {
        var o = l.pending;
        o === null ? u.next = u : (u.next = o.next, o.next = u), l.pending = u;
      }
      i !== 0 && js(n, u, i);
    }
  }
  function li(t, e, n, l) {
    we[Ll++] = t, we[Ll++] = e, we[Ll++] = n, we[Ll++] = l, oc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function sc(t, e, n, l) {
    return li(t, e, n, l), ai(t);
  }
  function il(t, e) {
    return li(t, null, null, e), ai(t);
  }
  function js(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, i = t.return; i !== null; )
      i.childLanes |= n, l = i.alternate, l !== null && (l.childLanes |= n), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (u = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, u && e !== null && (u = 31 - Ee(n), t = i.hiddenUpdates, l = t[u], l === null ? t[u] = [e] : l.push(e), e.lane = n | 536870912), i) : null;
  }
  function ai(t) {
    if (50 < du)
      throw du = 0, Tf = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Xl = {};
  function fg(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ze(t, e, n, l) {
    return new fg(t, e, n, l);
  }
  function dc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function dn(t, e) {
    var n = t.alternate;
    return n === null ? (n = ze(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function ws(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ui(t, e, n, l, u, i) {
    var o = 0;
    if (l = t, typeof t == "function") dc(t) && (o = 1);
    else if (typeof t == "string")
      o = hp(
        t,
        n,
        W.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case dt:
          return t = ze(31, n, e, u), t.elementType = dt, t.lanes = i, t;
        case E:
          return rl(n.children, u, i, e);
        case q:
          o = 8, u |= 24;
          break;
        case Q:
          return t = ze(12, n, e, u | 2), t.elementType = Q, t.lanes = i, t;
        case lt:
          return t = ze(13, n, e, u), t.elementType = lt, t.lanes = i, t;
        case X:
          return t = ze(19, n, e, u), t.elementType = X, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case F:
                o = 10;
                break t;
              case Z:
                o = 9;
                break t;
              case k:
                o = 11;
                break t;
              case Y:
                o = 14;
                break t;
              case gt:
                o = 16, l = null;
                break t;
            }
          o = 29, n = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = ze(o, n, e, u), e.elementType = t, e.type = l, e.lanes = i, e;
  }
  function rl(t, e, n, l) {
    return t = ze(7, t, l, e), t.lanes = n, t;
  }
  function mc(t, e, n) {
    return t = ze(6, t, null, e), t.lanes = n, t;
  }
  function Gs(t) {
    var e = ze(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function hc(t, e, n) {
    return e = ze(
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
  var qs = /* @__PURE__ */ new WeakMap();
  function Ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = qs.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Go(e)
      }, qs.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Go(e)
    };
  }
  var Ql = [], Vl = 0, ii = null, $a = 0, qe = [], Ye = 0, Rn = null, Fe = 1, Pe = "";
  function mn(t, e) {
    Ql[Vl++] = $a, Ql[Vl++] = ii, ii = t, $a = e;
  }
  function Ys(t, e, n) {
    qe[Ye++] = Fe, qe[Ye++] = Pe, qe[Ye++] = Rn, Rn = t;
    var l = Fe;
    t = Pe;
    var u = 32 - Ee(l) - 1;
    l &= ~(1 << u), n += 1;
    var i = 32 - Ee(e) + u;
    if (30 < i) {
      var o = u - u % 5;
      i = (l & (1 << o) - 1).toString(32), l >>= o, u -= o, Fe = 1 << 32 - Ee(e) + u | n << u | l, Pe = i + t;
    } else
      Fe = 1 << i | n << u | l, Pe = t;
  }
  function yc(t) {
    t.return !== null && (mn(t, 1), Ys(t, 1, 0));
  }
  function gc(t) {
    for (; t === ii; )
      ii = Ql[--Vl], Ql[Vl] = null, $a = Ql[--Vl], Ql[Vl] = null;
    for (; t === Rn; )
      Rn = qe[--Ye], qe[Ye] = null, Pe = qe[--Ye], qe[Ye] = null, Fe = qe[--Ye], qe[Ye] = null;
  }
  function Ls(t, e) {
    qe[Ye++] = Fe, qe[Ye++] = Pe, qe[Ye++] = Rn, Fe = e.id, Pe = e.overflow, Rn = t;
  }
  var ae = null, wt = null, pt = !1, Un = null, Le = !1, pc = Error(c(519));
  function Bn(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Za(Ge(e, t)), pc;
  }
  function Xs(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[le] = t, e[he] = l, n) {
      case "dialog":
        st("cancel", e), st("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        st("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < hu.length; n++)
          st(hu[n], e);
        break;
      case "source":
        st("error", e);
        break;
      case "img":
      case "image":
      case "link":
        st("error", e), st("load", e);
        break;
      case "details":
        st("toggle", e);
        break;
      case "input":
        st("invalid", e), es(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        st("invalid", e);
        break;
      case "textarea":
        st("invalid", e), ls(e, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || um(e.textContent, n) ? (l.popover != null && (st("beforetoggle", e), st("toggle", e)), l.onScroll != null && st("scroll", e), l.onScrollEnd != null && st("scrollend", e), l.onClick != null && (e.onclick = on), e = !0) : e = !1, e || Bn(t, !0);
  }
  function Qs(t) {
    for (ae = t.return; ae; )
      switch (ae.tag) {
        case 5:
        case 31:
        case 13:
          Le = !1;
          return;
        case 27:
        case 3:
          Le = !0;
          return;
        default:
          ae = ae.return;
      }
  }
  function $l(t) {
    if (t !== ae) return !1;
    if (!pt) return Qs(t), pt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || jf(t.type, t.memoizedProps)), n = !n), n && wt && Bn(t), Qs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      wt = hm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      wt = hm(t);
    } else
      e === 27 ? (e = wt, kn(t.type) ? (t = Lf, Lf = null, wt = t) : wt = e) : wt = ae ? Qe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function cl() {
    wt = ae = null, pt = !1;
  }
  function vc() {
    var t = Un;
    return t !== null && (be === null ? be = t : be.push.apply(
      be,
      t
    ), Un = null), t;
  }
  function Za(t) {
    Un === null ? Un = [t] : Un.push(t);
  }
  var bc = S(null), fl = null, hn = null;
  function Nn(t, e, n) {
    $(bc, e._currentValue), e._currentValue = n;
  }
  function yn(t) {
    t._currentValue = bc.current, G(bc);
  }
  function Sc(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Tc(t, e, n, l) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var i = u.dependencies;
      if (i !== null) {
        var o = u.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var m = i;
          i = u;
          for (var v = 0; v < e.length; v++)
            if (m.context === e[v]) {
              i.lanes |= n, m = i.alternate, m !== null && (m.lanes |= n), Sc(
                i.return,
                n,
                t
              ), l || (o = null);
              break t;
            }
          i = m.next;
        }
      } else if (u.tag === 18) {
        if (o = u.return, o === null) throw Error(c(341));
        o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Sc(o, n, t), o = null;
      } else o = u.child;
      if (o !== null) o.return = u;
      else
        for (o = u; o !== null; ) {
          if (o === t) {
            o = null;
            break;
          }
          if (u = o.sibling, u !== null) {
            u.return = o.return, o = u;
            break;
          }
          o = o.return;
        }
      u = o;
    }
  }
  function Zl(t, e, n, l) {
    t = null;
    for (var u = e, i = !1; u !== null; ) {
      if (!i) {
        if ((u.flags & 524288) !== 0) i = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var o = u.alternate;
        if (o === null) throw Error(c(387));
        if (o = o.memoizedProps, o !== null) {
          var m = u.type;
          xe(u.pendingProps.value, o.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (u === xt.current) {
        if (o = u.alternate, o === null) throw Error(c(387));
        o.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(bu) : t = [bu]);
      }
      u = u.return;
    }
    t !== null && Tc(
      e,
      t,
      n,
      l
    ), e.flags |= 262144;
  }
  function ri(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!xe(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ol(t) {
    fl = t, hn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ue(t) {
    return Vs(fl, t);
  }
  function ci(t, e) {
    return fl === null && ol(t), Vs(t, e);
  }
  function Vs(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, hn === null) {
      if (t === null) throw Error(c(308));
      hn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else hn = hn.next = e;
    return n;
  }
  var og = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, sg = a.unstable_scheduleCallback, dg = a.unstable_NormalPriority, Jt = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ac() {
    return {
      controller: new og(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ka(t) {
    t.refCount--, t.refCount === 0 && sg(dg, function() {
      t.controller.abort();
    });
  }
  var Ka = null, Cc = 0, kl = 0, Kl = null;
  function mg(t, e) {
    if (Ka === null) {
      var n = Ka = [];
      Cc = 0, kl = Of(), Kl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Cc++, e.then($s, $s), e;
  }
  function $s() {
    if (--Cc === 0 && Ka !== null) {
      Kl !== null && (Kl.status = "fulfilled");
      var t = Ka;
      Ka = null, kl = 0, Kl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function hg(t, e) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), l;
  }
  var Zs = M.S;
  M.S = function(t, e) {
    M0 = Ae(), typeof e == "object" && e !== null && typeof e.then == "function" && mg(t, e), Zs !== null && Zs(t, e);
  };
  var sl = S(null);
  function Ec() {
    var t = sl.current;
    return t !== null ? t : Ht.pooledCache;
  }
  function fi(t, e) {
    e === null ? $(sl, sl.current) : $(sl, e.pool);
  }
  function ks() {
    var t = Ec();
    return t === null ? null : { parent: Jt._currentValue, pool: t };
  }
  var Jl = Error(c(460)), xc = Error(c(474)), oi = Error(c(542)), si = { then: function() {
  } };
  function Ks(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Js(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(on, on), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Fs(t), t;
      default:
        if (typeof e.status == "string") e.then(on, on);
        else {
          if (t = Ht, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Fs(t), t;
        }
        throw ml = e, Jl;
    }
  }
  function dl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ml = n, Jl) : n;
    }
  }
  var ml = null;
  function Ws() {
    if (ml === null) throw Error(c(459));
    var t = ml;
    return ml = null, t;
  }
  function Fs(t) {
    if (t === Jl || t === oi)
      throw Error(c(483));
  }
  var Wl = null, Ja = 0;
  function di(t) {
    var e = Ja;
    return Ja += 1, Wl === null && (Wl = []), Js(Wl, t, e);
  }
  function Wa(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function mi(t, e) {
    throw e.$$typeof === U ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Ps(t) {
    function e(A, T) {
      if (t) {
        var x = A.deletions;
        x === null ? (A.deletions = [T], A.flags |= 16) : x.push(T);
      }
    }
    function n(A, T) {
      if (!t) return null;
      for (; T !== null; )
        e(A, T), T = T.sibling;
      return null;
    }
    function l(A) {
      for (var T = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? T.set(A.key, A) : T.set(A.index, A), A = A.sibling;
      return T;
    }
    function u(A, T) {
      return A = dn(A, T), A.index = 0, A.sibling = null, A;
    }
    function i(A, T, x) {
      return A.index = x, t ? (x = A.alternate, x !== null ? (x = x.index, x < T ? (A.flags |= 67108866, T) : x) : (A.flags |= 67108866, T)) : (A.flags |= 1048576, T);
    }
    function o(A) {
      return t && A.alternate === null && (A.flags |= 67108866), A;
    }
    function m(A, T, x, j) {
      return T === null || T.tag !== 6 ? (T = mc(x, A.mode, j), T.return = A, T) : (T = u(T, x), T.return = A, T);
    }
    function v(A, T, x, j) {
      var tt = x.type;
      return tt === E ? B(
        A,
        T,
        x.props.children,
        j,
        x.key
      ) : T !== null && (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === gt && dl(tt) === T.type) ? (T = u(T, x.props), Wa(T, x), T.return = A, T) : (T = ui(
        x.type,
        x.key,
        x.props,
        null,
        A.mode,
        j
      ), Wa(T, x), T.return = A, T);
    }
    function z(A, T, x, j) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== x.containerInfo || T.stateNode.implementation !== x.implementation ? (T = hc(x, A.mode, j), T.return = A, T) : (T = u(T, x.children || []), T.return = A, T);
    }
    function B(A, T, x, j, tt) {
      return T === null || T.tag !== 7 ? (T = rl(
        x,
        A.mode,
        j,
        tt
      ), T.return = A, T) : (T = u(T, x), T.return = A, T);
    }
    function w(A, T, x) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = mc(
          "" + T,
          A.mode,
          x
        ), T.return = A, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case H:
            return x = ui(
              T.type,
              T.key,
              T.props,
              null,
              A.mode,
              x
            ), Wa(x, T), x.return = A, x;
          case D:
            return T = hc(
              T,
              A.mode,
              x
            ), T.return = A, T;
          case gt:
            return T = dl(T), w(A, T, x);
        }
        if (et(T) || y(T))
          return T = rl(
            T,
            A.mode,
            x,
            null
          ), T.return = A, T;
        if (typeof T.then == "function")
          return w(A, di(T), x);
        if (T.$$typeof === F)
          return w(
            A,
            ci(A, T),
            x
          );
        mi(A, T);
      }
      return null;
    }
    function _(A, T, x, j) {
      var tt = T !== null ? T.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return tt !== null ? null : m(A, T, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case H:
            return x.key === tt ? v(A, T, x, j) : null;
          case D:
            return x.key === tt ? z(A, T, x, j) : null;
          case gt:
            return x = dl(x), _(A, T, x, j);
        }
        if (et(x) || y(x))
          return tt !== null ? null : B(A, T, x, j, null);
        if (typeof x.then == "function")
          return _(
            A,
            T,
            di(x),
            j
          );
        if (x.$$typeof === F)
          return _(
            A,
            T,
            ci(A, x),
            j
          );
        mi(A, x);
      }
      return null;
    }
    function R(A, T, x, j, tt) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return A = A.get(x) || null, m(T, A, "" + j, tt);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case H:
            return A = A.get(
              j.key === null ? x : j.key
            ) || null, v(T, A, j, tt);
          case D:
            return A = A.get(
              j.key === null ? x : j.key
            ) || null, z(T, A, j, tt);
          case gt:
            return j = dl(j), R(
              A,
              T,
              x,
              j,
              tt
            );
        }
        if (et(j) || y(j))
          return A = A.get(x) || null, B(T, A, j, tt, null);
        if (typeof j.then == "function")
          return R(
            A,
            T,
            x,
            di(j),
            tt
          );
        if (j.$$typeof === F)
          return R(
            A,
            T,
            x,
            ci(T, j),
            tt
          );
        mi(T, j);
      }
      return null;
    }
    function K(A, T, x, j) {
      for (var tt = null, bt = null, P = T, rt = T = 0, ht = null; P !== null && rt < x.length; rt++) {
        P.index > rt ? (ht = P, P = null) : ht = P.sibling;
        var St = _(
          A,
          P,
          x[rt],
          j
        );
        if (St === null) {
          P === null && (P = ht);
          break;
        }
        t && P && St.alternate === null && e(A, P), T = i(St, T, rt), bt === null ? tt = St : bt.sibling = St, bt = St, P = ht;
      }
      if (rt === x.length)
        return n(A, P), pt && mn(A, rt), tt;
      if (P === null) {
        for (; rt < x.length; rt++)
          P = w(A, x[rt], j), P !== null && (T = i(
            P,
            T,
            rt
          ), bt === null ? tt = P : bt.sibling = P, bt = P);
        return pt && mn(A, rt), tt;
      }
      for (P = l(P); rt < x.length; rt++)
        ht = R(
          P,
          A,
          rt,
          x[rt],
          j
        ), ht !== null && (t && ht.alternate !== null && P.delete(
          ht.key === null ? rt : ht.key
        ), T = i(
          ht,
          T,
          rt
        ), bt === null ? tt = ht : bt.sibling = ht, bt = ht);
      return t && P.forEach(function(Pn) {
        return e(A, Pn);
      }), pt && mn(A, rt), tt;
    }
    function nt(A, T, x, j) {
      if (x == null) throw Error(c(151));
      for (var tt = null, bt = null, P = T, rt = T = 0, ht = null, St = x.next(); P !== null && !St.done; rt++, St = x.next()) {
        P.index > rt ? (ht = P, P = null) : ht = P.sibling;
        var Pn = _(A, P, St.value, j);
        if (Pn === null) {
          P === null && (P = ht);
          break;
        }
        t && P && Pn.alternate === null && e(A, P), T = i(Pn, T, rt), bt === null ? tt = Pn : bt.sibling = Pn, bt = Pn, P = ht;
      }
      if (St.done)
        return n(A, P), pt && mn(A, rt), tt;
      if (P === null) {
        for (; !St.done; rt++, St = x.next())
          St = w(A, St.value, j), St !== null && (T = i(St, T, rt), bt === null ? tt = St : bt.sibling = St, bt = St);
        return pt && mn(A, rt), tt;
      }
      for (P = l(P); !St.done; rt++, St = x.next())
        St = R(P, A, rt, St.value, j), St !== null && (t && St.alternate !== null && P.delete(St.key === null ? rt : St.key), T = i(St, T, rt), bt === null ? tt = St : bt.sibling = St, bt = St);
      return t && P.forEach(function(xp) {
        return e(A, xp);
      }), pt && mn(A, rt), tt;
    }
    function Bt(A, T, x, j) {
      if (typeof x == "object" && x !== null && x.type === E && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case H:
            t: {
              for (var tt = x.key; T !== null; ) {
                if (T.key === tt) {
                  if (tt = x.type, tt === E) {
                    if (T.tag === 7) {
                      n(
                        A,
                        T.sibling
                      ), j = u(
                        T,
                        x.props.children
                      ), j.return = A, A = j;
                      break t;
                    }
                  } else if (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === gt && dl(tt) === T.type) {
                    n(
                      A,
                      T.sibling
                    ), j = u(T, x.props), Wa(j, x), j.return = A, A = j;
                    break t;
                  }
                  n(A, T);
                  break;
                } else e(A, T);
                T = T.sibling;
              }
              x.type === E ? (j = rl(
                x.props.children,
                A.mode,
                j,
                x.key
              ), j.return = A, A = j) : (j = ui(
                x.type,
                x.key,
                x.props,
                null,
                A.mode,
                j
              ), Wa(j, x), j.return = A, A = j);
            }
            return o(A);
          case D:
            t: {
              for (tt = x.key; T !== null; ) {
                if (T.key === tt)
                  if (T.tag === 4 && T.stateNode.containerInfo === x.containerInfo && T.stateNode.implementation === x.implementation) {
                    n(
                      A,
                      T.sibling
                    ), j = u(T, x.children || []), j.return = A, A = j;
                    break t;
                  } else {
                    n(A, T);
                    break;
                  }
                else e(A, T);
                T = T.sibling;
              }
              j = hc(x, A.mode, j), j.return = A, A = j;
            }
            return o(A);
          case gt:
            return x = dl(x), Bt(
              A,
              T,
              x,
              j
            );
        }
        if (et(x))
          return K(
            A,
            T,
            x,
            j
          );
        if (y(x)) {
          if (tt = y(x), typeof tt != "function") throw Error(c(150));
          return x = tt.call(x), nt(
            A,
            T,
            x,
            j
          );
        }
        if (typeof x.then == "function")
          return Bt(
            A,
            T,
            di(x),
            j
          );
        if (x.$$typeof === F)
          return Bt(
            A,
            T,
            ci(A, x),
            j
          );
        mi(A, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, T !== null && T.tag === 6 ? (n(A, T.sibling), j = u(T, x), j.return = A, A = j) : (n(A, T), j = mc(x, A.mode, j), j.return = A, A = j), o(A)) : n(A, T);
    }
    return function(A, T, x, j) {
      try {
        Ja = 0;
        var tt = Bt(
          A,
          T,
          x,
          j
        );
        return Wl = null, tt;
      } catch (P) {
        if (P === Jl || P === oi) throw P;
        var bt = ze(29, P, null, A.mode);
        return bt.lanes = j, bt.return = A, bt;
      } finally {
      }
    };
  }
  var hl = Ps(!0), Is = Ps(!1), Hn = !1;
  function zc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Oc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function jn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (At & 2) !== 0) {
      var u = l.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), l.pending = e, e = ai(t), js(t, null, n), e;
    }
    return li(t, l, e, n), ai(t);
  }
  function Fa(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Vo(t, n);
    }
  }
  function _c(t, e) {
    var n = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var u = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? u = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? u = i = e : i = i.next = e;
      } else u = i = e;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Mc = !1;
  function Pa() {
    if (Mc) {
      var t = Kl;
      if (t !== null) throw t;
    }
  }
  function Ia(t, e, n, l) {
    Mc = !1;
    var u = t.updateQueue;
    Hn = !1;
    var i = u.firstBaseUpdate, o = u.lastBaseUpdate, m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var v = m, z = v.next;
      v.next = null, o === null ? i = z : o.next = z, o = v;
      var B = t.alternate;
      B !== null && (B = B.updateQueue, m = B.lastBaseUpdate, m !== o && (m === null ? B.firstBaseUpdate = z : m.next = z, B.lastBaseUpdate = v));
    }
    if (i !== null) {
      var w = u.baseState;
      o = 0, B = z = v = null, m = i;
      do {
        var _ = m.lane & -536870913, R = _ !== m.lane;
        if (R ? (mt & _) === _ : (l & _) === _) {
          _ !== 0 && _ === kl && (Mc = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var K = t, nt = m;
            _ = e;
            var Bt = n;
            switch (nt.tag) {
              case 1:
                if (K = nt.payload, typeof K == "function") {
                  w = K.call(Bt, w, _);
                  break t;
                }
                w = K;
                break t;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = nt.payload, _ = typeof K == "function" ? K.call(Bt, w, _) : K, _ == null) break t;
                w = C({}, w, _);
                break t;
              case 2:
                Hn = !0;
            }
          }
          _ = m.callback, _ !== null && (t.flags |= 64, R && (t.flags |= 8192), R = u.callbacks, R === null ? u.callbacks = [_] : R.push(_));
        } else
          R = {
            lane: _,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, B === null ? (z = B = R, v = w) : B = B.next = R, o |= _;
        if (m = m.next, m === null) {
          if (m = u.shared.pending, m === null)
            break;
          R = m, m = R.next, R.next = null, u.lastBaseUpdate = R, u.shared.pending = null;
        }
      } while (!0);
      B === null && (v = w), u.baseState = v, u.firstBaseUpdate = z, u.lastBaseUpdate = B, i === null && (u.shared.lanes = 0), Xn |= o, t.lanes = o, t.memoizedState = w;
    }
  }
  function td(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function ed(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        td(n[t], e);
  }
  var Fl = S(null), hi = S(0);
  function nd(t, e) {
    t = En, $(hi, t), $(Fl, e), En = t | e.baseLanes;
  }
  function Dc() {
    $(hi, En), $(Fl, Fl.current);
  }
  function Rc() {
    En = hi.current, G(Fl), G(hi);
  }
  var Oe = S(null), Xe = null;
  function Gn(t) {
    var e = t.alternate;
    $(Zt, Zt.current & 1), $(Oe, t), Xe === null && (e === null || Fl.current !== null || e.memoizedState !== null) && (Xe = t);
  }
  function Uc(t) {
    $(Zt, Zt.current), $(Oe, t), Xe === null && (Xe = t);
  }
  function ld(t) {
    t.tag === 22 ? ($(Zt, Zt.current), $(Oe, t), Xe === null && (Xe = t)) : qn();
  }
  function qn() {
    $(Zt, Zt.current), $(Oe, Oe.current);
  }
  function _e(t) {
    G(Oe), Xe === t && (Xe = null), G(Zt);
  }
  var Zt = S(0);
  function yi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || qf(n) || Yf(n)))
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
  var gn = 0, it = null, Rt = null, Wt = null, gi = !1, Pl = !1, yl = !1, pi = 0, tu = 0, Il = null, yg = 0;
  function Lt() {
    throw Error(c(321));
  }
  function Bc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!xe(t[n], e[n])) return !1;
    return !0;
  }
  function Nc(t, e, n, l, u, i) {
    return gn = i, it = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? Yd : Jc, yl = !1, i = n(l, u), yl = !1, Pl && (i = ud(
      e,
      n,
      l,
      u
    )), ad(t), i;
  }
  function ad(t) {
    M.H = lu;
    var e = Rt !== null && Rt.next !== null;
    if (gn = 0, Wt = Rt = it = null, gi = !1, tu = 0, Il = null, e) throw Error(c(300));
    t === null || Ft || (t = t.dependencies, t !== null && ri(t) && (Ft = !0));
  }
  function ud(t, e, n, l) {
    it = t;
    var u = 0;
    do {
      if (Pl && (Il = null), tu = 0, Pl = !1, 25 <= u) throw Error(c(301));
      if (u += 1, Wt = Rt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      M.H = Ld, i = e(n, l);
    } while (Pl);
    return i;
  }
  function gg() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? eu(e) : e, t = t.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== t && (it.flags |= 1024), e;
  }
  function Hc() {
    var t = pi !== 0;
    return pi = 0, t;
  }
  function jc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function wc(t) {
    if (gi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      gi = !1;
    }
    gn = 0, Wt = Rt = it = null, Pl = !1, tu = pi = 0, Il = null;
  }
  function de() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Wt === null ? it.memoizedState = Wt = t : Wt = Wt.next = t, Wt;
  }
  function kt() {
    if (Rt === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Rt.next;
    var e = Wt === null ? it.memoizedState : Wt.next;
    if (e !== null)
      Wt = e, Rt = t;
    else {
      if (t === null)
        throw it.alternate === null ? Error(c(467)) : Error(c(310));
      Rt = t, t = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null
      }, Wt === null ? it.memoizedState = Wt = t : Wt = Wt.next = t;
    }
    return Wt;
  }
  function vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function eu(t) {
    var e = tu;
    return tu += 1, Il === null && (Il = []), t = Js(Il, t, e), e = it, (Wt === null ? e.memoizedState : Wt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? Yd : Jc), t;
  }
  function bi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return eu(t);
      if (t.$$typeof === F) return ue(t);
    }
    throw Error(c(438, String(t)));
  }
  function Gc(t) {
    var e = null, n = it.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = it.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = vi(), it.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = jt;
    return e.index++, n;
  }
  function pn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Si(t) {
    var e = kt();
    return qc(e, Rt, t);
  }
  function qc(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = t.baseQueue, i = l.pending;
    if (i !== null) {
      if (u !== null) {
        var o = u.next;
        u.next = i.next, i.next = o;
      }
      e.baseQueue = u = i, l.pending = null;
    }
    if (i = t.baseState, u === null) t.memoizedState = i;
    else {
      e = u.next;
      var m = o = null, v = null, z = e, B = !1;
      do {
        var w = z.lane & -536870913;
        if (w !== z.lane ? (mt & w) === w : (gn & w) === w) {
          var _ = z.revertLane;
          if (_ === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), w === kl && (B = !0);
          else if ((gn & _) === _) {
            z = z.next, _ === kl && (B = !0);
            continue;
          } else
            w = {
              lane: 0,
              revertLane: z.revertLane,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, v === null ? (m = v = w, o = i) : v = v.next = w, it.lanes |= _, Xn |= _;
          w = z.action, yl && n(i, w), i = z.hasEagerState ? z.eagerState : n(i, w);
        } else
          _ = {
            lane: w,
            revertLane: z.revertLane,
            gesture: z.gesture,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, v === null ? (m = v = _, o = i) : v = v.next = _, it.lanes |= w, Xn |= w;
        z = z.next;
      } while (z !== null && z !== e);
      if (v === null ? o = i : v.next = m, !xe(i, t.memoizedState) && (Ft = !0, B && (n = Kl, n !== null)))
        throw n;
      t.memoizedState = i, t.baseState = o, t.baseQueue = v, l.lastRenderedState = i;
    }
    return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Yc(t) {
    var e = kt(), n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, u = n.pending, i = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var o = u = u.next;
      do
        i = t(i, o.action), o = o.next;
      while (o !== u);
      xe(i, e.memoizedState) || (Ft = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), n.lastRenderedState = i;
    }
    return [i, l];
  }
  function id(t, e, n) {
    var l = it, u = kt(), i = pt;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var o = !xe(
      (Rt || u).memoizedState,
      n
    );
    if (o && (u.memoizedState = n, Ft = !0), u = u.queue, Qc(fd.bind(null, l, u, t), [
      t
    ]), u.getSnapshot !== e || o || Wt !== null && Wt.memoizedState.tag & 1) {
      if (l.flags |= 2048, ta(
        9,
        { destroy: void 0 },
        cd.bind(
          null,
          l,
          u,
          n,
          e
        ),
        null
      ), Ht === null) throw Error(c(349));
      i || (gn & 127) !== 0 || rd(l, e, n);
    }
    return n;
  }
  function rd(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = it.updateQueue, e === null ? (e = vi(), it.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function cd(t, e, n, l) {
    e.value = n, e.getSnapshot = l, od(e) && sd(t);
  }
  function fd(t, e, n) {
    return n(function() {
      od(e) && sd(t);
    });
  }
  function od(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !xe(t, n);
    } catch {
      return !0;
    }
  }
  function sd(t) {
    var e = il(t, 2);
    e !== null && Se(e, t, 2);
  }
  function Lc(t) {
    var e = de();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), yl) {
        _n(!0);
        try {
          n();
        } finally {
          _n(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pn,
      lastRenderedState: t
    }, e;
  }
  function dd(t, e, n, l) {
    return t.baseState = n, qc(
      t,
      Rt,
      typeof l == "function" ? l : pn
    );
  }
  function pg(t, e, n, l, u) {
    if (Ci(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(o) {
          i.listeners.push(o);
        }
      };
      M.T !== null ? n(!0) : i.isTransition = !1, l(i), n = e.pending, n === null ? (i.next = e.pending = i, md(e, i)) : (i.next = n.next, e.pending = n.next = i);
    }
  }
  function md(t, e) {
    var n = e.action, l = e.payload, u = t.state;
    if (e.isTransition) {
      var i = M.T, o = {};
      M.T = o;
      try {
        var m = n(u, l), v = M.S;
        v !== null && v(o, m), hd(t, e, m);
      } catch (z) {
        Xc(t, e, z);
      } finally {
        i !== null && o.types !== null && (i.types = o.types), M.T = i;
      }
    } else
      try {
        i = n(u, l), hd(t, e, i);
      } catch (z) {
        Xc(t, e, z);
      }
  }
  function hd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        yd(t, e, l);
      },
      function(l) {
        return Xc(t, e, l);
      }
    ) : yd(t, e, n);
  }
  function yd(t, e, n) {
    e.status = "fulfilled", e.value = n, gd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, md(t, n)));
  }
  function Xc(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, gd(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function gd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function pd(t, e) {
    return e;
  }
  function vd(t, e) {
    if (pt) {
      var n = Ht.formState;
      if (n !== null) {
        t: {
          var l = it;
          if (pt) {
            if (wt) {
              e: {
                for (var u = wt, i = Le; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break e;
                  }
                  if (u = Qe(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                i = u.data, u = i === "F!" || i === "F" ? u : null;
              }
              if (u) {
                wt = Qe(
                  u.nextSibling
                ), l = u.data === "F!";
                break t;
              }
            }
            Bn(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return n = de(), n.memoizedState = n.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pd,
      lastRenderedState: e
    }, n.queue = l, n = wd.bind(
      null,
      it,
      l
    ), l.dispatch = n, l = Lc(!1), i = Kc.bind(
      null,
      it,
      !1,
      l.queue
    ), l = de(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = u, n = pg.bind(
      null,
      it,
      u,
      i,
      n
    ), u.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function bd(t) {
    var e = kt();
    return Sd(e, Rt, t);
  }
  function Sd(t, e, n) {
    if (e = qc(
      t,
      e,
      pd
    )[0], t = Si(pn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = eu(e);
      } catch (o) {
        throw o === Jl ? oi : o;
      }
    else l = e;
    e = kt();
    var u = e.queue, i = u.dispatch;
    return n !== e.memoizedState && (it.flags |= 2048, ta(
      9,
      { destroy: void 0 },
      vg.bind(null, u, n),
      null
    )), [l, i, t];
  }
  function vg(t, e) {
    t.action = e;
  }
  function Td(t) {
    var e = kt(), n = Rt;
    if (n !== null)
      return Sd(e, n, t);
    kt(), e = e.memoizedState, n = kt();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function ta(t, e, n, l) {
    return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = it.updateQueue, e === null && (e = vi(), it.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function Ad() {
    return kt().memoizedState;
  }
  function Ti(t, e, n, l) {
    var u = de();
    it.flags |= t, u.memoizedState = ta(
      1 | e,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Ai(t, e, n, l) {
    var u = kt();
    l = l === void 0 ? null : l;
    var i = u.memoizedState.inst;
    Rt !== null && l !== null && Bc(l, Rt.memoizedState.deps) ? u.memoizedState = ta(e, i, n, l) : (it.flags |= t, u.memoizedState = ta(
      1 | e,
      i,
      n,
      l
    ));
  }
  function Cd(t, e) {
    Ti(8390656, 8, t, e);
  }
  function Qc(t, e) {
    Ai(2048, 8, t, e);
  }
  function bg(t) {
    it.flags |= 4;
    var e = it.updateQueue;
    if (e === null)
      e = vi(), it.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Ed(t) {
    var e = kt().memoizedState;
    return bg({ ref: e, nextImpl: t }), function() {
      if ((At & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function xd(t, e) {
    return Ai(4, 2, t, e);
  }
  function zd(t, e) {
    return Ai(4, 4, t, e);
  }
  function Od(t, e) {
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
  function _d(t, e, n) {
    n = n != null ? n.concat([t]) : null, Ai(4, 4, Od.bind(null, e, t), n);
  }
  function Vc() {
  }
  function Md(t, e) {
    var n = kt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Bc(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function Dd(t, e) {
    var n = kt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Bc(e, l[1]))
      return l[0];
    if (l = t(), yl) {
      _n(!0);
      try {
        t();
      } finally {
        _n(!1);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function $c(t, e, n) {
    return n === void 0 || (gn & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = R0(), it.lanes |= t, Xn |= t, n);
  }
  function Rd(t, e, n, l) {
    return xe(n, e) ? n : Fl.current !== null ? (t = $c(t, n, l), xe(t, e) || (Ft = !0), t) : (gn & 42) === 0 || (gn & 1073741824) !== 0 && (mt & 261930) === 0 ? (Ft = !0, t.memoizedState = n) : (t = R0(), it.lanes |= t, Xn |= t, e);
  }
  function Ud(t, e, n, l, u) {
    var i = L.p;
    L.p = i !== 0 && 8 > i ? i : 8;
    var o = M.T, m = {};
    M.T = m, Kc(t, !1, e, n);
    try {
      var v = u(), z = M.S;
      if (z !== null && z(m, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var B = hg(
          v,
          l
        );
        nu(
          t,
          e,
          B,
          Re(t)
        );
      } else
        nu(
          t,
          e,
          l,
          Re(t)
        );
    } catch (w) {
      nu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: w },
        Re()
      );
    } finally {
      L.p = i, o !== null && m.types !== null && (o.types = m.types), M.T = o;
    }
  }
  function Sg() {
  }
  function Zc(t, e, n, l) {
    if (t.tag !== 5) throw Error(c(476));
    var u = Bd(t).queue;
    Ud(
      t,
      u,
      e,
      I,
      n === null ? Sg : function() {
        return Nd(t), n(l);
      }
    );
  }
  function Bd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: I
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
        lastRenderedReducer: pn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Nd(t) {
    var e = Bd(t);
    e.next === null && (e = t.alternate.memoizedState), nu(
      t,
      e.next.queue,
      {},
      Re()
    );
  }
  function kc() {
    return ue(bu);
  }
  function Hd() {
    return kt().memoizedState;
  }
  function jd() {
    return kt().memoizedState;
  }
  function Tg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Re();
          t = jn(n);
          var l = wn(e, t, n);
          l !== null && (Se(l, e, n), Fa(l, e, n)), e = { cache: Ac() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Ag(t, e, n) {
    var l = Re();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ci(t) ? Gd(e, n) : (n = sc(t, e, n, l), n !== null && (Se(n, t, l), qd(n, e, l)));
  }
  function wd(t, e, n) {
    var l = Re();
    nu(t, e, n, l);
  }
  function nu(t, e, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ci(t)) Gd(e, u);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var o = e.lastRenderedState, m = i(o, n);
          if (u.hasEagerState = !0, u.eagerState = m, xe(m, o))
            return li(t, e, u, 0), Ht === null && ni(), !1;
        } catch {
        } finally {
        }
      if (n = sc(t, e, u, l), n !== null)
        return Se(n, t, l), qd(n, e, l), !0;
    }
    return !1;
  }
  function Kc(t, e, n, l) {
    if (l = {
      lane: 2,
      revertLane: Of(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ci(t)) {
      if (e) throw Error(c(479));
    } else
      e = sc(
        t,
        n,
        l,
        2
      ), e !== null && Se(e, t, 2);
  }
  function Ci(t) {
    var e = t.alternate;
    return t === it || e !== null && e === it;
  }
  function Gd(t, e) {
    Pl = gi = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function qd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, Vo(t, n);
    }
  }
  var lu = {
    readContext: ue,
    use: bi,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    useHostTransitionStatus: Lt,
    useFormState: Lt,
    useActionState: Lt,
    useOptimistic: Lt,
    useMemoCache: Lt,
    useCacheRefresh: Lt
  };
  lu.useEffectEvent = Lt;
  var Yd = {
    readContext: ue,
    use: bi,
    useCallback: function(t, e) {
      return de().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ue,
    useEffect: Cd,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Ti(
        4194308,
        4,
        Od.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Ti(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ti(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = de();
      e = e === void 0 ? null : e;
      var l = t();
      if (yl) {
        _n(!0);
        try {
          t();
        } finally {
          _n(!1);
        }
      }
      return n.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, n) {
      var l = de();
      if (n !== void 0) {
        var u = n(e);
        if (yl) {
          _n(!0);
          try {
            n(e);
          } finally {
            _n(!1);
          }
        }
      } else u = e;
      return l.memoizedState = l.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, l.queue = t, t = t.dispatch = Ag.bind(
        null,
        it,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = de();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Lc(t);
      var e = t.queue, n = wd.bind(null, it, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Vc,
    useDeferredValue: function(t, e) {
      var n = de();
      return $c(n, t, e);
    },
    useTransition: function() {
      var t = Lc(!1);
      return t = Ud.bind(
        null,
        it,
        t.queue,
        !0,
        !1
      ), de().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = it, u = de();
      if (pt) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), Ht === null)
          throw Error(c(349));
        (mt & 127) !== 0 || rd(l, e, n);
      }
      u.memoizedState = n;
      var i = { value: n, getSnapshot: e };
      return u.queue = i, Cd(fd.bind(null, l, i, t), [
        t
      ]), l.flags |= 2048, ta(
        9,
        { destroy: void 0 },
        cd.bind(
          null,
          l,
          i,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = de(), e = Ht.identifierPrefix;
      if (pt) {
        var n = Pe, l = Fe;
        n = (l & ~(1 << 32 - Ee(l) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = pi++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = yg++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: kc,
    useFormState: vd,
    useActionState: vd,
    useOptimistic: function(t) {
      var e = de();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Kc.bind(
        null,
        it,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Gc,
    useCacheRefresh: function() {
      return de().memoizedState = Tg.bind(
        null,
        it
      );
    },
    useEffectEvent: function(t) {
      var e = de(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((At & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Jc = {
    readContext: ue,
    use: bi,
    useCallback: Md,
    useContext: ue,
    useEffect: Qc,
    useImperativeHandle: _d,
    useInsertionEffect: xd,
    useLayoutEffect: zd,
    useMemo: Dd,
    useReducer: Si,
    useRef: Ad,
    useState: function() {
      return Si(pn);
    },
    useDebugValue: Vc,
    useDeferredValue: function(t, e) {
      var n = kt();
      return Rd(
        n,
        Rt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Si(pn)[0], e = kt().memoizedState;
      return [
        typeof t == "boolean" ? t : eu(t),
        e
      ];
    },
    useSyncExternalStore: id,
    useId: Hd,
    useHostTransitionStatus: kc,
    useFormState: bd,
    useActionState: bd,
    useOptimistic: function(t, e) {
      var n = kt();
      return dd(n, Rt, t, e);
    },
    useMemoCache: Gc,
    useCacheRefresh: jd
  };
  Jc.useEffectEvent = Ed;
  var Ld = {
    readContext: ue,
    use: bi,
    useCallback: Md,
    useContext: ue,
    useEffect: Qc,
    useImperativeHandle: _d,
    useInsertionEffect: xd,
    useLayoutEffect: zd,
    useMemo: Dd,
    useReducer: Yc,
    useRef: Ad,
    useState: function() {
      return Yc(pn);
    },
    useDebugValue: Vc,
    useDeferredValue: function(t, e) {
      var n = kt();
      return Rt === null ? $c(n, t, e) : Rd(
        n,
        Rt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Yc(pn)[0], e = kt().memoizedState;
      return [
        typeof t == "boolean" ? t : eu(t),
        e
      ];
    },
    useSyncExternalStore: id,
    useId: Hd,
    useHostTransitionStatus: kc,
    useFormState: Td,
    useActionState: Td,
    useOptimistic: function(t, e) {
      var n = kt();
      return Rt !== null ? dd(n, Rt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Gc,
    useCacheRefresh: jd
  };
  Ld.useEffectEvent = Ed;
  function Wc(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : C({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Fc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = Re(), u = jn(l);
      u.payload = e, n != null && (u.callback = n), e = wn(t, u, l), e !== null && (Se(e, t, l), Fa(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = Re(), u = jn(l);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = wn(t, u, l), e !== null && (Se(e, t, l), Fa(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Re(), l = jn(n);
      l.tag = 2, e != null && (l.callback = e), e = wn(t, l, n), e !== null && (Se(e, t, n), Fa(e, t, n));
    }
  };
  function Xd(t, e, n, l, u, i, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, i, o) : e.prototype && e.prototype.isPureReactComponent ? !Qa(n, l) || !Qa(u, i) : !0;
  }
  function Qd(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && Fc.enqueueReplaceState(e, e.state, null);
  }
  function gl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e)
        l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = C({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function Vd(t) {
    ei(t);
  }
  function $d(t) {
    console.error(t);
  }
  function Zd(t) {
    ei(t);
  }
  function Ei(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function kd(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Pc(t, e, n) {
    return n = jn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ei(t, e);
    }, n;
  }
  function Kd(t) {
    return t = jn(t), t.tag = 3, t;
  }
  function Jd(t, e, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var i = l.value;
      t.payload = function() {
        return u(i);
      }, t.callback = function() {
        kd(e, n, l);
      };
    }
    var o = n.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      kd(e, n, l), typeof u != "function" && (Qn === null ? Qn = /* @__PURE__ */ new Set([this]) : Qn.add(this));
      var m = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function Cg(t, e, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Zl(
        e,
        n,
        u,
        !0
      ), n = Oe.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Xe === null ? ji() : n.alternate === null && Xt === 0 && (Xt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === si ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), Ef(t, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === si ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Ef(t, l, u)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Ef(t, l, u), ji(), !1;
    }
    if (pt)
      return e = Oe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, l !== pc && (t = Error(c(422), { cause: l }), Za(Ge(t, n)))) : (l !== pc && (e = Error(c(423), {
        cause: l
      }), Za(
        Ge(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, l = Ge(l, n), u = Pc(
        t.stateNode,
        l,
        u
      ), _c(t, u), Xt !== 4 && (Xt = 2)), !1;
    var i = Error(c(520), { cause: l });
    if (i = Ge(i, n), su === null ? su = [i] : su.push(i), Xt !== 4 && (Xt = 2), e === null) return !0;
    l = Ge(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = Pc(n.stateNode, l, t), _c(n, t), !1;
        case 1:
          if (e = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Qn === null || !Qn.has(i))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = Kd(u), Jd(
              u,
              t,
              n,
              l
            ), _c(n, u), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ic = Error(c(461)), Ft = !1;
  function ie(t, e, n, l) {
    e.child = t === null ? Is(e, null, n, l) : hl(
      e,
      t.child,
      n,
      l
    );
  }
  function Wd(t, e, n, l, u) {
    n = n.render;
    var i = e.ref;
    if ("ref" in l) {
      var o = {};
      for (var m in l)
        m !== "ref" && (o[m] = l[m]);
    } else o = l;
    return ol(e), l = Nc(
      t,
      e,
      n,
      o,
      i,
      u
    ), m = Hc(), t !== null && !Ft ? (jc(t, e, u), vn(t, e, u)) : (pt && m && yc(e), e.flags |= 1, ie(t, e, l, u), e.child);
  }
  function Fd(t, e, n, l, u) {
    if (t === null) {
      var i = n.type;
      return typeof i == "function" && !dc(i) && i.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = i, Pd(
        t,
        e,
        i,
        l,
        u
      )) : (t = ui(
        n.type,
        null,
        l,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !cf(t, u)) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Qa, n(o, l) && t.ref === e.ref)
        return vn(t, e, u);
    }
    return e.flags |= 1, t = dn(i, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Pd(t, e, n, l, u) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Qa(i, l) && t.ref === e.ref)
        if (Ft = !1, e.pendingProps = l = i, cf(t, u))
          (t.flags & 131072) !== 0 && (Ft = !0);
        else
          return e.lanes = t.lanes, vn(t, e, u);
    }
    return tf(
      t,
      e,
      n,
      l,
      u
    );
  }
  function Id(t, e, n, l) {
    var u = l.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | n : n, t !== null) {
          for (l = e.child = t.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~i;
        } else l = 0, e.child = null;
        return t0(
          t,
          e,
          i,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && fi(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? nd(e, i) : Dc(), ld(e);
      else
        return l = e.lanes = 536870912, t0(
          t,
          e,
          i !== null ? i.baseLanes | n : n,
          n,
          l
        );
    } else
      i !== null ? (fi(e, i.cachePool), nd(e, i), qn(), e.memoizedState = null) : (t !== null && fi(e, null), Dc(), qn());
    return ie(t, e, u, n), e.child;
  }
  function au(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function t0(t, e, n, l, u) {
    var i = Ec();
    return i = i === null ? null : { parent: Jt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, t !== null && fi(e, null), Dc(), ld(e), t !== null && Zl(t, e, l, !0), e.childLanes = u, null;
  }
  function xi(t, e) {
    return e = Oi(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function e0(t, e, n) {
    return hl(e, t.child, null, n), t = xi(e, e.pendingProps), t.flags |= 2, _e(e), e.memoizedState = null, t;
  }
  function Eg(t, e, n) {
    var l = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (pt) {
        if (l.mode === "hidden")
          return t = xi(e, l), e.lanes = 536870912, au(null, t);
        if (Uc(e), (t = wt) ? (t = mm(
          t,
          Le
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Rn !== null ? { id: Fe, overflow: Pe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Gs(t), n.return = e, e.child = n, ae = e, wt = null)) : t = null, t === null) throw Bn(e);
        return e.lanes = 536870912, null;
      }
      return xi(e, l);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var o = i.dehydrated;
      if (Uc(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = e0(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (Ft || Zl(t, e, n, !1), u = (n & t.childLanes) !== 0, Ft || u) {
        if (l = Ht, l !== null && (o = $o(l, n), o !== 0 && o !== i.retryLane))
          throw i.retryLane = o, il(t, o), Se(l, t, o), Ic;
        ji(), e = e0(
          t,
          e,
          n
        );
      } else
        t = i.treeContext, wt = Qe(o.nextSibling), ae = e, pt = !0, Un = null, Le = !1, t !== null && Ls(e, t), e = xi(e, l), e.flags |= 4096;
      return e;
    }
    return t = dn(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function zi(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function tf(t, e, n, l, u) {
    return ol(e), n = Nc(
      t,
      e,
      n,
      l,
      void 0,
      u
    ), l = Hc(), t !== null && !Ft ? (jc(t, e, u), vn(t, e, u)) : (pt && l && yc(e), e.flags |= 1, ie(t, e, n, u), e.child);
  }
  function n0(t, e, n, l, u, i) {
    return ol(e), e.updateQueue = null, n = ud(
      e,
      l,
      n,
      u
    ), ad(t), l = Hc(), t !== null && !Ft ? (jc(t, e, i), vn(t, e, i)) : (pt && l && yc(e), e.flags |= 1, ie(t, e, n, i), e.child);
  }
  function l0(t, e, n, l, u) {
    if (ol(e), e.stateNode === null) {
      var i = Xl, o = n.contextType;
      typeof o == "object" && o !== null && (i = ue(o)), i = new n(l, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Fc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = l, i.state = e.memoizedState, i.refs = {}, zc(e), o = n.contextType, i.context = typeof o == "object" && o !== null ? ue(o) : Xl, i.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Wc(
        e,
        n,
        o,
        l
      ), i.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && Fc.enqueueReplaceState(i, i.state, null), Ia(e, l, i, u), Pa(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      i = e.stateNode;
      var m = e.memoizedProps, v = gl(n, m);
      i.props = v;
      var z = i.context, B = n.contextType;
      o = Xl, typeof B == "object" && B !== null && (o = ue(B));
      var w = n.getDerivedStateFromProps;
      B = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, B || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || z !== o) && Qd(
        e,
        i,
        l,
        o
      ), Hn = !1;
      var _ = e.memoizedState;
      i.state = _, Ia(e, l, i, u), Pa(), z = e.memoizedState, m || _ !== z || Hn ? (typeof w == "function" && (Wc(
        e,
        n,
        w,
        l
      ), z = e.memoizedState), (v = Hn || Xd(
        e,
        n,
        v,
        l,
        _,
        z,
        o
      )) ? (B || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = z), i.props = l, i.state = z, i.context = o, l = v) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      i = e.stateNode, Oc(t, e), o = e.memoizedProps, B = gl(n, o), i.props = B, w = e.pendingProps, _ = i.context, z = n.contextType, v = Xl, typeof z == "object" && z !== null && (v = ue(z)), m = n.getDerivedStateFromProps, (z = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== w || _ !== v) && Qd(
        e,
        i,
        l,
        v
      ), Hn = !1, _ = e.memoizedState, i.state = _, Ia(e, l, i, u), Pa();
      var R = e.memoizedState;
      o !== w || _ !== R || Hn || t !== null && t.dependencies !== null && ri(t.dependencies) ? (typeof m == "function" && (Wc(
        e,
        n,
        m,
        l
      ), R = e.memoizedState), (B = Hn || Xd(
        e,
        n,
        B,
        l,
        _,
        R,
        v
      ) || t !== null && t.dependencies !== null && ri(t.dependencies)) ? (z || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, R, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        R,
        v
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = R), i.props = l, i.state = R, i.context = v, l = B) : (typeof i.componentDidUpdate != "function" || o === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return i = l, zi(t, e), l = (e.flags & 128) !== 0, i || l ? (i = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && l ? (e.child = hl(
      e,
      t.child,
      null,
      u
    ), e.child = hl(
      e,
      null,
      n,
      u
    )) : ie(t, e, n, u), e.memoizedState = i.state, t = e.child) : t = vn(
      t,
      e,
      u
    ), t;
  }
  function a0(t, e, n, l) {
    return cl(), e.flags |= 256, ie(t, e, n, l), e.child;
  }
  var ef = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function nf(t) {
    return { baseLanes: t, cachePool: ks() };
  }
  function lf(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= De), t;
  }
  function u0(t, e, n) {
    var l = e.pendingProps, u = !1, i = (e.flags & 128) !== 0, o;
    if ((o = i) || (o = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0), o && (u = !0, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (pt) {
        if (u ? Gn(e) : qn(), (t = wt) ? (t = mm(
          t,
          Le
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Rn !== null ? { id: Fe, overflow: Pe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Gs(t), n.return = e, e.child = n, ae = e, wt = null)) : t = null, t === null) throw Bn(e);
        return Yf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var m = l.children;
      return l = l.fallback, u ? (qn(), u = e.mode, m = Oi(
        { mode: "hidden", children: m },
        u
      ), l = rl(
        l,
        u,
        n,
        null
      ), m.return = e, l.return = e, m.sibling = l, e.child = m, l = e.child, l.memoizedState = nf(n), l.childLanes = lf(
        t,
        o,
        n
      ), e.memoizedState = ef, au(null, l)) : (Gn(e), af(e, m));
    }
    var v = t.memoizedState;
    if (v !== null && (m = v.dehydrated, m !== null)) {
      if (i)
        e.flags & 256 ? (Gn(e), e.flags &= -257, e = uf(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (qn(), e.child = t.child, e.flags |= 128, e = null) : (qn(), m = l.fallback, u = e.mode, l = Oi(
          { mode: "visible", children: l.children },
          u
        ), m = rl(
          m,
          u,
          n,
          null
        ), m.flags |= 2, l.return = e, m.return = e, l.sibling = m, e.child = l, hl(
          e,
          t.child,
          null,
          n
        ), l = e.child, l.memoizedState = nf(n), l.childLanes = lf(
          t,
          o,
          n
        ), e.memoizedState = ef, e = au(null, l));
      else if (Gn(e), Yf(m)) {
        if (o = m.nextSibling && m.nextSibling.dataset, o) var z = o.dgst;
        o = z, l = Error(c(419)), l.stack = "", l.digest = o, Za({ value: l, source: null, stack: null }), e = uf(
          t,
          e,
          n
        );
      } else if (Ft || Zl(t, e, n, !1), o = (n & t.childLanes) !== 0, Ft || o) {
        if (o = Ht, o !== null && (l = $o(o, n), l !== 0 && l !== v.retryLane))
          throw v.retryLane = l, il(t, l), Se(o, t, l), Ic;
        qf(m) || ji(), e = uf(
          t,
          e,
          n
        );
      } else
        qf(m) ? (e.flags |= 192, e.child = t.child, e = null) : (t = v.treeContext, wt = Qe(
          m.nextSibling
        ), ae = e, pt = !0, Un = null, Le = !1, t !== null && Ls(e, t), e = af(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (qn(), m = l.fallback, u = e.mode, v = t.child, z = v.sibling, l = dn(v, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = v.subtreeFlags & 65011712, z !== null ? m = dn(
      z,
      m
    ) : (m = rl(
      m,
      u,
      n,
      null
    ), m.flags |= 2), m.return = e, l.return = e, l.sibling = m, e.child = l, au(null, l), l = e.child, m = t.child.memoizedState, m === null ? m = nf(n) : (u = m.cachePool, u !== null ? (v = Jt._currentValue, u = u.parent !== v ? { parent: v, pool: v } : u) : u = ks(), m = {
      baseLanes: m.baseLanes | n,
      cachePool: u
    }), l.memoizedState = m, l.childLanes = lf(
      t,
      o,
      n
    ), e.memoizedState = ef, au(t.child, l)) : (Gn(e), n = t.child, t = n.sibling, n = dn(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [t], e.flags |= 16) : o.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function af(t, e) {
    return e = Oi(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Oi(t, e) {
    return t = ze(22, t, null, e), t.lanes = 0, t;
  }
  function uf(t, e, n) {
    return hl(e, t.child, null, n), t = af(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function i0(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Sc(t.return, e, n);
  }
  function rf(t, e, n, l, u, i) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: u,
      treeForkCount: i
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = l, o.tail = n, o.tailMode = u, o.treeForkCount = i);
  }
  function r0(t, e, n) {
    var l = e.pendingProps, u = l.revealOrder, i = l.tail;
    l = l.children;
    var o = Zt.current, m = (o & 2) !== 0;
    if (m ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, $(Zt, o), ie(t, e, l, n), l = pt ? $a : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && i0(t, n, e);
        else if (t.tag === 19)
          i0(t, n, e);
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
    switch (u) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          t = n.alternate, t !== null && yi(t) === null && (u = n), n = n.sibling;
        n = u, n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), rf(
          e,
          !1,
          u,
          n,
          i,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && yi(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        rf(
          e,
          !0,
          n,
          null,
          i,
          l
        );
        break;
      case "together":
        rf(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function vn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Xn |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Zl(
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
      for (t = e.child, n = dn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = dn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function cf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ri(t)));
  }
  function xg(t, e, n) {
    switch (e.tag) {
      case 3:
        se(e, e.stateNode.containerInfo), Nn(e, Jt, t.memoizedState.cache), cl();
        break;
      case 27:
      case 5:
        Da(e);
        break;
      case 4:
        se(e, e.stateNode.containerInfo);
        break;
      case 10:
        Nn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Uc(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Gn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? u0(t, e, n) : (Gn(e), t = vn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        Gn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Zl(
          t,
          e,
          n,
          !1
        ), l = (n & e.childLanes) !== 0), u) {
          if (l)
            return r0(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), $(Zt, Zt.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, Id(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Nn(e, Jt, t.memoizedState.cache);
    }
    return vn(t, e, n);
  }
  function c0(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Ft = !0;
      else {
        if (!cf(t, n) && (e.flags & 128) === 0)
          return Ft = !1, xg(
            t,
            e,
            n
          );
        Ft = (t.flags & 131072) !== 0;
      }
    else
      Ft = !1, pt && (e.flags & 1048576) !== 0 && Ys(e, $a, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = dl(e.elementType), e.type = t, typeof t == "function")
            dc(t) ? (l = gl(t, l), e.tag = 1, e = l0(
              null,
              e,
              t,
              l,
              n
            )) : (e.tag = 0, e = tf(
              null,
              e,
              t,
              l,
              n
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === k) {
                e.tag = 11, e = Wd(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              } else if (u === Y) {
                e.tag = 14, e = Fd(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              }
            }
            throw e = V(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return tf(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return l = e.type, u = gl(
          l,
          e.pendingProps
        ), l0(
          t,
          e,
          l,
          u,
          n
        );
      case 3:
        t: {
          if (se(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          l = e.pendingProps;
          var i = e.memoizedState;
          u = i.element, Oc(t, e), Ia(e, l, null, n);
          var o = e.memoizedState;
          if (l = o.cache, Nn(e, Jt, l), l !== i.cache && Tc(
            e,
            [Jt],
            n,
            !0
          ), Pa(), l = o.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: o.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = a0(
                t,
                e,
                l,
                n
              );
              break t;
            } else if (l !== u) {
              u = Ge(
                Error(c(424)),
                e
              ), Za(u), e = a0(
                t,
                e,
                l,
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
              for (wt = Qe(t.firstChild), ae = e, pt = !0, Un = null, Le = !0, n = Is(
                e,
                null,
                l,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (cl(), l === u) {
              e = vn(
                t,
                e,
                n
              );
              break t;
            }
            ie(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return zi(t, e), t === null ? (n = bm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : pt || (n = e.type, t = e.pendingProps, l = Qi(
          ft.current
        ).createElement(n), l[le] = e, l[he] = t, re(l, n, t), ee(l), e.stateNode = l) : e.memoizedState = bm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Da(e), t === null && pt && (l = e.stateNode = gm(
          e.type,
          e.pendingProps,
          ft.current
        ), ae = e, Le = !0, u = wt, kn(e.type) ? (Lf = u, wt = Qe(l.firstChild)) : wt = u), ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), zi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && pt && ((u = l = wt) && (l = ep(
          l,
          e.type,
          e.pendingProps,
          Le
        ), l !== null ? (e.stateNode = l, ae = e, wt = Qe(l.firstChild), Le = !1, u = !0) : u = !1), u || Bn(e)), Da(e), u = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, l = i.children, jf(u, i) ? l = null : o !== null && jf(u, o) && (e.flags |= 32), e.memoizedState !== null && (u = Nc(
          t,
          e,
          gg,
          null,
          null,
          n
        ), bu._currentValue = u), zi(t, e), ie(t, e, l, n), e.child;
      case 6:
        return t === null && pt && ((t = n = wt) && (n = np(
          n,
          e.pendingProps,
          Le
        ), n !== null ? (e.stateNode = n, ae = e, wt = null, t = !0) : t = !1), t || Bn(e)), null;
      case 13:
        return u0(t, e, n);
      case 4:
        return se(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = hl(
          e,
          null,
          l,
          n
        ) : ie(t, e, l, n), e.child;
      case 11:
        return Wd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return ie(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return l = e.pendingProps, Nn(e, e.type, l.value), ie(t, e, l.children, n), e.child;
      case 9:
        return u = e.type._context, l = e.pendingProps.children, ol(e), u = ue(u), l = l(u), e.flags |= 1, ie(t, e, l, n), e.child;
      case 14:
        return Fd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Pd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return r0(t, e, n);
      case 31:
        return Eg(t, e, n);
      case 22:
        return Id(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ol(e), l = ue(Jt), t === null ? (u = Ec(), u === null && (u = Ht, i = Ac(), u.pooledCache = i, i.refCount++, i !== null && (u.pooledCacheLanes |= n), u = i), e.memoizedState = { parent: l, cache: u }, zc(e), Nn(e, Jt, u)) : ((t.lanes & n) !== 0 && (Oc(t, e), Ia(e, null, null, n), Pa()), u = t.memoizedState, i = e.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Nn(e, Jt, l)) : (l = i.cache, Nn(e, Jt, l), l !== u.cache && Tc(
          e,
          [Jt],
          n,
          !0
        ))), ie(
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
  function bn(t) {
    t.flags |= 4;
  }
  function ff(t, e, n, l, u) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (H0()) t.flags |= 8192;
        else
          throw ml = si, xc;
    } else t.flags &= -16777217;
  }
  function f0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Em(e))
      if (H0()) t.flags |= 8192;
      else
        throw ml = si, xc;
  }
  function _i(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Xo() : 536870912, t.lanes |= e, aa |= e);
  }
  function uu(t, e) {
    if (!pt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function Gt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function zg(t, e, n) {
    var l = e.pendingProps;
    switch (gc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(e), null;
      case 1:
        return Gt(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), yn(Jt), $t(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && ($l(e) ? bn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, vc())), Gt(e), null;
      case 26:
        var u = e.type, i = e.memoizedState;
        return t === null ? (bn(e), i !== null ? (Gt(e), f0(e, i)) : (Gt(e), ff(
          e,
          u,
          null,
          l,
          n
        ))) : i ? i !== t.memoizedState ? (bn(e), Gt(e), f0(e, i)) : (Gt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && bn(e), Gt(e), ff(
          e,
          u,
          t,
          l,
          n
        )), null;
      case 27:
        if (qu(e), n = ft.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && bn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Gt(e), null;
          }
          t = W.current, $l(e) ? Xs(e) : (t = gm(u, l, n), e.stateNode = t, bn(e));
        }
        return Gt(e), null;
      case 5:
        if (qu(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && bn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Gt(e), null;
          }
          if (i = W.current, $l(e))
            Xs(e);
          else {
            var o = Qi(
              ft.current
            );
            switch (i) {
              case 1:
                i = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                i = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    i = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    i = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    i = o.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof l.is == "string" ? o.createElement("select", {
                      is: l.is
                    }) : o.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? o.createElement(u, { is: l.is }) : o.createElement(u);
                }
            }
            i[le] = e, i[he] = l;
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                i.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e)
                  break t;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            e.stateNode = i;
            t: switch (re(i, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && bn(e);
          }
        }
        return Gt(e), ff(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && bn(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = ft.current, $l(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, u = ae, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            t[le] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || um(t.nodeValue, n)), t || Bn(e, !0);
          } else
            t = Qi(t).createTextNode(
              l
            ), t[le] = e, e.stateNode = t;
        }
        return Gt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = $l(e), n !== null) {
            if (t === null) {
              if (!l) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[le] = e;
            } else
              cl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Gt(e), t = !1;
          } else
            n = vc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (_e(e), e) : (_e(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Gt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = $l(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(c(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(c(317));
              u[le] = e;
            } else
              cl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Gt(e), u = !1;
          } else
            u = vc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (_e(e), e) : (_e(e), null);
        }
        return _e(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = l !== null, t = t !== null && t.memoizedState !== null, n && (l = e.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== u && (l.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), _i(e, e.updateQueue), Gt(e), null);
      case 4:
        return $t(), t === null && Rf(e.stateNode.containerInfo), Gt(e), null;
      case 10:
        return yn(e.type), Gt(e), null;
      case 19:
        if (G(Zt), l = e.memoizedState, l === null) return Gt(e), null;
        if (u = (e.flags & 128) !== 0, i = l.rendering, i === null)
          if (u) uu(l, !1);
          else {
            if (Xt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = yi(t), i !== null) {
                  for (e.flags |= 128, uu(l, !1), t = i.updateQueue, e.updateQueue = t, _i(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    ws(n, t), n = n.sibling;
                  return $(
                    Zt,
                    Zt.current & 1 | 2
                  ), pt && mn(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && Ae() > Bi && (e.flags |= 128, u = !0, uu(l, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = yi(i), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, _i(e, t), uu(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !pt)
                return Gt(e), null;
            } else
              2 * Ae() - l.renderingStartTime > Bi && n !== 536870912 && (e.flags |= 128, u = !0, uu(l, !1), e.lanes = 4194304);
          l.isBackwards ? (i.sibling = e.child, e.child = i) : (t = l.last, t !== null ? t.sibling = i : e.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ae(), t.sibling = null, n = Zt.current, $(
          Zt,
          u ? n & 1 | 2 : n & 1
        ), pt && mn(e, l.treeForkCount), t) : (Gt(e), null);
      case 22:
      case 23:
        return _e(e), Rc(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), n = e.updateQueue, n !== null && _i(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && G(sl), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), yn(Jt), Gt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Og(t, e) {
    switch (gc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return yn(Jt), $t(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return qu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (_e(e), e.alternate === null)
            throw Error(c(340));
          cl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (_e(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          cl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return G(Zt), null;
      case 4:
        return $t(), null;
      case 10:
        return yn(e.type), null;
      case 22:
      case 23:
        return _e(e), Rc(), t !== null && G(sl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return yn(Jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function o0(t, e) {
    switch (gc(e), e.tag) {
      case 3:
        yn(Jt), $t();
        break;
      case 26:
      case 27:
      case 5:
        qu(e);
        break;
      case 4:
        $t();
        break;
      case 31:
        e.memoizedState !== null && _e(e);
        break;
      case 13:
        _e(e);
        break;
      case 19:
        G(Zt);
        break;
      case 10:
        yn(e.type);
        break;
      case 22:
      case 23:
        _e(e), Rc(), t !== null && G(sl);
        break;
      case 24:
        yn(Jt);
    }
  }
  function iu(t, e) {
    try {
      var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var i = n.create, o = n.inst;
            l = i(), o.destroy = l;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (m) {
      _t(e, e.return, m);
    }
  }
  function Yn(t, e, n) {
    try {
      var l = e.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var i = u.next;
        l = i;
        do {
          if ((l.tag & t) === t) {
            var o = l.inst, m = o.destroy;
            if (m !== void 0) {
              o.destroy = void 0, u = e;
              var v = n, z = m;
              try {
                z();
              } catch (B) {
                _t(
                  u,
                  v,
                  B
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (B) {
      _t(e, e.return, B);
    }
  }
  function s0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ed(e, n);
      } catch (l) {
        _t(t, t.return, l);
      }
    }
  }
  function d0(t, e, n) {
    n.props = gl(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      _t(t, e, l);
    }
  }
  function ru(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(l) : n.current = l;
      }
    } catch (u) {
      _t(t, e, u);
    }
  }
  function Ie(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          _t(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          _t(t, e, u);
        }
      else n.current = null;
  }
  function m0(t) {
    var e = t.type, n = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      _t(t, t.return, u);
    }
  }
  function of(t, e, n) {
    try {
      var l = t.stateNode;
      Jg(l, t.type, n, e), l[he] = e;
    } catch (u) {
      _t(t, t.return, u);
    }
  }
  function h0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && kn(t.type) || t.tag === 4;
  }
  function sf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || h0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && kn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function df(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = on));
    else if (l !== 4 && (l === 27 && kn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (df(t, e, n), t = t.sibling; t !== null; )
        df(t, e, n), t = t.sibling;
  }
  function Mi(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && kn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (Mi(t, e, n), t = t.sibling; t !== null; )
        Mi(t, e, n), t = t.sibling;
  }
  function y0(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var l = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      re(e, l, n), e[le] = t, e[he] = n;
    } catch (i) {
      _t(t, t.return, i);
    }
  }
  var Sn = !1, Pt = !1, mf = !1, g0 = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
  function _g(t, e) {
    if (t = t.containerInfo, Nf = Wi, t = _s(t), uc(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break t;
            }
            var o = 0, m = -1, v = -1, z = 0, B = 0, w = t, _ = null;
            e: for (; ; ) {
              for (var R; w !== n || u !== 0 && w.nodeType !== 3 || (m = o + u), w !== i || l !== 0 && w.nodeType !== 3 || (v = o + l), w.nodeType === 3 && (o += w.nodeValue.length), (R = w.firstChild) !== null; )
                _ = w, w = R;
              for (; ; ) {
                if (w === t) break e;
                if (_ === n && ++z === u && (m = o), _ === i && ++B === l && (v = o), (R = w.nextSibling) !== null) break;
                w = _, _ = w.parentNode;
              }
              w = R;
            }
            n = m === -1 || v === -1 ? null : { start: m, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Hf = { focusedElem: t, selectionRange: n }, Wi = !1, ne = e; ne !== null; )
      if (e = ne, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ne = t;
      else
        for (; ne !== null; ) {
          switch (e = ne, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++)
                  u = t[n], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, n = e, u = i.memoizedProps, i = i.memoizedState, l = n.stateNode;
                try {
                  var K = gl(
                    n.type,
                    u
                  );
                  t = l.getSnapshotBeforeUpdate(
                    K,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (nt) {
                  _t(
                    n,
                    n.return,
                    nt
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  Gf(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Gf(t);
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
            t.return = e.return, ne = t;
            break;
          }
          ne = e.return;
        }
  }
  function p0(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(t, n), l & 4 && iu(5, n);
        break;
      case 1:
        if (An(t, n), l & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (o) {
              _t(n, n.return, o);
            }
          else {
            var u = gl(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (o) {
              _t(
                n,
                n.return,
                o
              );
            }
          }
        l & 64 && s0(n), l & 512 && ru(n, n.return);
        break;
      case 3:
        if (An(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
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
            ed(t, e);
          } catch (o) {
            _t(n, n.return, o);
          }
        }
        break;
      case 27:
        e === null && l & 4 && y0(n);
      case 26:
      case 5:
        An(t, n), e === null && l & 4 && m0(n), l & 512 && ru(n, n.return);
        break;
      case 12:
        An(t, n);
        break;
      case 31:
        An(t, n), l & 4 && S0(t, n);
        break;
      case 13:
        An(t, n), l & 4 && T0(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = wg.bind(
          null,
          n
        ), lp(t, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || Sn, !l) {
          e = e !== null && e.memoizedState !== null || Pt, u = Sn;
          var i = Pt;
          Sn = l, (Pt = e) && !i ? Cn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : An(t, n), Sn = u, Pt = i;
        }
        break;
      case 30:
        break;
      default:
        An(t, n);
    }
  }
  function v0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, v0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Xr(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var qt = null, ge = !1;
  function Tn(t, e, n) {
    for (n = n.child; n !== null; )
      b0(t, e, n), n = n.sibling;
  }
  function b0(t, e, n) {
    if (Ce && typeof Ce.onCommitFiberUnmount == "function")
      try {
        Ce.onCommitFiberUnmount(Ra, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Pt || Ie(n, e), Tn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Pt || Ie(n, e);
        var l = qt, u = ge;
        kn(n.type) && (qt = n.stateNode, ge = !1), Tn(
          t,
          e,
          n
        ), gu(n.stateNode), qt = l, ge = u;
        break;
      case 5:
        Pt || Ie(n, e);
      case 6:
        if (l = qt, u = ge, qt = null, Tn(
          t,
          e,
          n
        ), qt = l, ge = u, qt !== null)
          if (ge)
            try {
              (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(n.stateNode);
            } catch (i) {
              _t(
                n,
                e,
                i
              );
            }
          else
            try {
              qt.removeChild(n.stateNode);
            } catch (i) {
              _t(
                n,
                e,
                i
              );
            }
        break;
      case 18:
        qt !== null && (ge ? (t = qt, sm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), da(t)) : sm(qt, n.stateNode));
        break;
      case 4:
        l = qt, u = ge, qt = n.stateNode.containerInfo, ge = !0, Tn(
          t,
          e,
          n
        ), qt = l, ge = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yn(2, n, e), Pt || Yn(4, n, e), Tn(
          t,
          e,
          n
        );
        break;
      case 1:
        Pt || (Ie(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && d0(
          n,
          e,
          l
        )), Tn(
          t,
          e,
          n
        );
        break;
      case 21:
        Tn(
          t,
          e,
          n
        );
        break;
      case 22:
        Pt = (l = Pt) || n.memoizedState !== null, Tn(
          t,
          e,
          n
        ), Pt = l;
        break;
      default:
        Tn(
          t,
          e,
          n
        );
    }
  }
  function S0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        da(t);
      } catch (n) {
        _t(e, e.return, n);
      }
    }
  }
  function T0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        da(t);
      } catch (n) {
        _t(e, e.return, n);
      }
  }
  function Mg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new g0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new g0()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function Di(t, e) {
    var n = Mg(t);
    e.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var u = Gg.bind(null, t, l);
        l.then(u, u);
      }
    });
  }
  function pe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l], i = t, o = e, m = o;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (kn(m.type)) {
                qt = m.stateNode, ge = !1;
                break t;
              }
              break;
            case 5:
              qt = m.stateNode, ge = !1;
              break t;
            case 3:
            case 4:
              qt = m.stateNode.containerInfo, ge = !0;
              break t;
          }
          m = m.return;
        }
        if (qt === null) throw Error(c(160));
        b0(i, o, u), qt = null, ge = !1, i = u.alternate, i !== null && (i.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        A0(e, t), e = e.sibling;
  }
  var Ke = null;
  function A0(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pe(e, t), ve(t), l & 4 && (Yn(3, t, t.return), iu(3, t), Yn(5, t, t.return));
        break;
      case 1:
        pe(e, t), ve(t), l & 512 && (Pt || n === null || Ie(n, n.return)), l & 64 && Sn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var u = Ke;
        if (pe(e, t), ve(t), l & 512 && (Pt || n === null || Ie(n, n.return)), l & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (l) {
                    case "title":
                      i = u.getElementsByTagName("title")[0], (!i || i[Na] || i[le] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = u.createElement(l), u.head.insertBefore(
                        i,
                        u.querySelector("head > title")
                      )), re(i, l, n), i[le] = t, ee(i), l = i;
                      break t;
                    case "link":
                      var o = Am(
                        "link",
                        "href",
                        u
                      ).get(l + (n.href || ""));
                      if (o) {
                        for (var m = 0; m < o.length; m++)
                          if (i = o[m], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            o.splice(m, 1);
                            break e;
                          }
                      }
                      i = u.createElement(l), re(i, l, n), u.head.appendChild(i);
                      break;
                    case "meta":
                      if (o = Am(
                        "meta",
                        "content",
                        u
                      ).get(l + (n.content || ""))) {
                        for (m = 0; m < o.length; m++)
                          if (i = o[m], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            o.splice(m, 1);
                            break e;
                          }
                      }
                      i = u.createElement(l), re(i, l, n), u.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  i[le] = t, ee(i), l = i;
                }
                t.stateNode = l;
              } else
                Cm(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Tm(
                u,
                l,
                t.memoizedProps
              );
          else
            i !== l ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, l === null ? Cm(
              u,
              t.type,
              t.stateNode
            ) : Tm(
              u,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && of(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        pe(e, t), ve(t), l & 512 && (Pt || n === null || Ie(n, n.return)), n !== null && l & 4 && of(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (pe(e, t), ve(t), l & 512 && (Pt || n === null || Ie(n, n.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Hl(u, "");
          } catch (K) {
            _t(t, t.return, K);
          }
        }
        l & 4 && t.stateNode != null && (u = t.memoizedProps, of(
          t,
          u,
          n !== null ? n.memoizedProps : u
        )), l & 1024 && (mf = !0);
        break;
      case 6:
        if (pe(e, t), ve(t), l & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (K) {
            _t(t, t.return, K);
          }
        }
        break;
      case 3:
        if (Zi = null, u = Ke, Ke = Vi(e.containerInfo), pe(e, t), Ke = u, ve(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            da(e.containerInfo);
          } catch (K) {
            _t(t, t.return, K);
          }
        mf && (mf = !1, C0(t));
        break;
      case 4:
        l = Ke, Ke = Vi(
          t.stateNode.containerInfo
        ), pe(e, t), ve(t), Ke = l;
        break;
      case 12:
        pe(e, t), ve(t);
        break;
      case 31:
        pe(e, t), ve(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Di(t, l)));
        break;
      case 13:
        pe(e, t), ve(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ui = Ae()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Di(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var v = n !== null && n.memoizedState !== null, z = Sn, B = Pt;
        if (Sn = z || u, Pt = B || v, pe(e, t), Pt = B, Sn = z, ve(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (n === null || v || Sn || Pt || pl(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                v = n = e;
                try {
                  if (i = v.stateNode, u)
                    o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                  else {
                    m = v.stateNode;
                    var w = v.memoizedProps.style, _ = w != null && w.hasOwnProperty("display") ? w.display : null;
                    m.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (K) {
                  _t(v, v.return, K);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                v = e;
                try {
                  v.stateNode.nodeValue = u ? "" : v.memoizedProps;
                } catch (K) {
                  _t(v, v.return, K);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                v = e;
                try {
                  var R = v.stateNode;
                  u ? dm(R, !0) : dm(v.stateNode, !1);
                } catch (K) {
                  _t(v, v.return, K);
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
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Di(t, n))));
        break;
      case 19:
        pe(e, t), ve(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Di(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pe(e, t), ve(t);
    }
  }
  function ve(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (h0(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode, i = sf(t);
            Mi(t, i, u);
            break;
          case 5:
            var o = n.stateNode;
            n.flags & 32 && (Hl(o, ""), n.flags &= -33);
            var m = sf(t);
            Mi(t, m, o);
            break;
          case 3:
          case 4:
            var v = n.stateNode.containerInfo, z = sf(t);
            df(
              t,
              z,
              v
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (B) {
        _t(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function C0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        C0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function An(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        p0(t, e.alternate, e), e = e.sibling;
  }
  function pl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yn(4, e, e.return), pl(e);
          break;
        case 1:
          Ie(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && d0(
            e,
            e.return,
            n
          ), pl(e);
          break;
        case 27:
          gu(e.stateNode);
        case 26:
        case 5:
          Ie(e, e.return), pl(e);
          break;
        case 22:
          e.memoizedState === null && pl(e);
          break;
        case 30:
          pl(e);
          break;
        default:
          pl(e);
      }
      t = t.sibling;
    }
  }
  function Cn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, u = t, i = e, o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Cn(
            u,
            i,
            n
          ), iu(4, i);
          break;
        case 1:
          if (Cn(
            u,
            i,
            n
          ), l = i, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (z) {
              _t(l, l.return, z);
            }
          if (l = i, u = l.updateQueue, u !== null) {
            var m = l.stateNode;
            try {
              var v = u.shared.hiddenCallbacks;
              if (v !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < v.length; u++)
                  td(v[u], m);
            } catch (z) {
              _t(l, l.return, z);
            }
          }
          n && o & 64 && s0(i), ru(i, i.return);
          break;
        case 27:
          y0(i);
        case 26:
        case 5:
          Cn(
            u,
            i,
            n
          ), n && l === null && o & 4 && m0(i), ru(i, i.return);
          break;
        case 12:
          Cn(
            u,
            i,
            n
          );
          break;
        case 31:
          Cn(
            u,
            i,
            n
          ), n && o & 4 && S0(u, i);
          break;
        case 13:
          Cn(
            u,
            i,
            n
          ), n && o & 4 && T0(u, i);
          break;
        case 22:
          i.memoizedState === null && Cn(
            u,
            i,
            n
          ), ru(i, i.return);
          break;
        case 30:
          break;
        default:
          Cn(
            u,
            i,
            n
          );
      }
      e = e.sibling;
    }
  }
  function hf(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && ka(n));
  }
  function yf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ka(t));
  }
  function Je(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        E0(
          t,
          e,
          n,
          l
        ), e = e.sibling;
  }
  function E0(t, e, n, l) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Je(
          t,
          e,
          n,
          l
        ), u & 2048 && iu(9, e);
        break;
      case 1:
        Je(
          t,
          e,
          n,
          l
        );
        break;
      case 3:
        Je(
          t,
          e,
          n,
          l
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ka(t)));
        break;
      case 12:
        if (u & 2048) {
          Je(
            t,
            e,
            n,
            l
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, o = i.id, m = i.onPostCommit;
            typeof m == "function" && m(
              o,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (v) {
            _t(e, e.return, v);
          }
        } else
          Je(
            t,
            e,
            n,
            l
          );
        break;
      case 31:
        Je(
          t,
          e,
          n,
          l
        );
        break;
      case 13:
        Je(
          t,
          e,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, o = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Je(
          t,
          e,
          n,
          l
        ) : cu(t, e) : i._visibility & 2 ? Je(
          t,
          e,
          n,
          l
        ) : (i._visibility |= 2, ea(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && hf(o, e);
        break;
      case 24:
        Je(
          t,
          e,
          n,
          l
        ), u & 2048 && yf(e.alternate, e);
        break;
      default:
        Je(
          t,
          e,
          n,
          l
        );
    }
  }
  function ea(t, e, n, l, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, o = e, m = n, v = l, z = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          ea(
            i,
            o,
            m,
            v,
            u
          ), iu(8, o);
          break;
        case 23:
          break;
        case 22:
          var B = o.stateNode;
          o.memoizedState !== null ? B._visibility & 2 ? ea(
            i,
            o,
            m,
            v,
            u
          ) : cu(
            i,
            o
          ) : (B._visibility |= 2, ea(
            i,
            o,
            m,
            v,
            u
          )), u && z & 2048 && hf(
            o.alternate,
            o
          );
          break;
        case 24:
          ea(
            i,
            o,
            m,
            v,
            u
          ), u && z & 2048 && yf(o.alternate, o);
          break;
        default:
          ea(
            i,
            o,
            m,
            v,
            u
          );
      }
      e = e.sibling;
    }
  }
  function cu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, l = e, u = l.flags;
        switch (l.tag) {
          case 22:
            cu(n, l), u & 2048 && hf(
              l.alternate,
              l
            );
            break;
          case 24:
            cu(n, l), u & 2048 && yf(l.alternate, l);
            break;
          default:
            cu(n, l);
        }
        e = e.sibling;
      }
  }
  var fu = 8192;
  function na(t, e, n) {
    if (t.subtreeFlags & fu)
      for (t = t.child; t !== null; )
        x0(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function x0(t, e, n) {
    switch (t.tag) {
      case 26:
        na(
          t,
          e,
          n
        ), t.flags & fu && t.memoizedState !== null && yp(
          n,
          Ke,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        na(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var l = Ke;
        Ke = Vi(t.stateNode.containerInfo), na(
          t,
          e,
          n
        ), Ke = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = fu, fu = 16777216, na(
          t,
          e,
          n
        ), fu = l) : na(
          t,
          e,
          n
        ));
        break;
      default:
        na(
          t,
          e,
          n
        );
    }
  }
  function z0(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ou(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ne = l, _0(
            l,
            t
          );
        }
      z0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        O0(t), t = t.sibling;
  }
  function O0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ou(t), t.flags & 2048 && Yn(9, t, t.return);
        break;
      case 3:
        ou(t);
        break;
      case 12:
        ou(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ri(t)) : ou(t);
        break;
      default:
        ou(t);
    }
  }
  function Ri(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ne = l, _0(
            l,
            t
          );
        }
      z0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, e, e.return), Ri(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Ri(e));
          break;
        default:
          Ri(e);
      }
      t = t.sibling;
    }
  }
  function _0(t, e) {
    for (; ne !== null; ) {
      var n = ne;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ka(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ne = l;
      else
        t: for (n = t; ne !== null; ) {
          l = ne;
          var u = l.sibling, i = l.return;
          if (v0(l), l === n) {
            ne = null;
            break t;
          }
          if (u !== null) {
            u.return = i, ne = u;
            break t;
          }
          ne = i;
        }
    }
  }
  var Dg = {
    getCacheForType: function(t) {
      var e = ue(Jt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ue(Jt).controller.signal;
    }
  }, Rg = typeof WeakMap == "function" ? WeakMap : Map, At = 0, Ht = null, ot = null, mt = 0, Ot = 0, Me = null, Ln = !1, la = !1, gf = !1, En = 0, Xt = 0, Xn = 0, vl = 0, pf = 0, De = 0, aa = 0, su = null, be = null, vf = !1, Ui = 0, M0 = 0, Bi = 1 / 0, Ni = null, Qn = null, te = 0, Vn = null, ua = null, xn = 0, bf = 0, Sf = null, D0 = null, du = 0, Tf = null;
  function Re() {
    return (At & 2) !== 0 && mt !== 0 ? mt & -mt : M.T !== null ? Of() : Zo();
  }
  function R0() {
    if (De === 0)
      if ((mt & 536870912) === 0 || pt) {
        var t = Xu;
        Xu <<= 1, (Xu & 3932160) === 0 && (Xu = 262144), De = t;
      } else De = 536870912;
    return t = Oe.current, t !== null && (t.flags |= 32), De;
  }
  function Se(t, e, n) {
    (t === Ht && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (ia(t, 0), $n(
      t,
      mt,
      De,
      !1
    )), Ba(t, n), ((At & 2) === 0 || t !== Ht) && (t === Ht && ((At & 2) === 0 && (vl |= n), Xt === 4 && $n(
      t,
      mt,
      De,
      !1
    )), tn(t));
  }
  function U0(t, e, n) {
    if ((At & 6) !== 0) throw Error(c(327));
    var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ua(t, e), u = l ? Ng(t, e) : Cf(t, e, !0), i = l;
    do {
      if (u === 0) {
        la && !l && $n(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, i && !Ug(n)) {
          u = Cf(t, e, !1), i = !1;
          continue;
        }
        if (u === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var o = 0;
          else
            o = t.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
          if (o !== 0) {
            e = o;
            t: {
              var m = t;
              u = su;
              var v = m.current.memoizedState.isDehydrated;
              if (v && (ia(m, o).flags |= 256), o = Cf(
                m,
                o,
                !1
              ), o !== 2) {
                if (gf && !v) {
                  m.errorRecoveryDisabledLanes |= i, vl |= i, u = 4;
                  break t;
                }
                i = be, be = u, i !== null && (be === null ? be = i : be.push.apply(
                  be,
                  i
                ));
              }
              u = o;
            }
            if (i = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ia(t, 0), $n(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, i = u, i) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              $n(
                l,
                e,
                De,
                !Ln
              );
              break t;
            case 2:
              be = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (u = Ui + 300 - Ae(), 10 < u)) {
            if ($n(
              l,
              e,
              De,
              !Ln
            ), Vu(l, 0, !0) !== 0) break t;
            xn = e, l.timeoutHandle = fm(
              B0.bind(
                null,
                l,
                n,
                be,
                Ni,
                vf,
                e,
                De,
                vl,
                aa,
                Ln,
                i,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          B0(
            l,
            n,
            be,
            Ni,
            vf,
            e,
            De,
            vl,
            aa,
            Ln,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    tn(t);
  }
  function B0(t, e, n, l, u, i, o, m, v, z, B, w, _, R) {
    if (t.timeoutHandle = -1, w = e.subtreeFlags, w & 8192 || (w & 16785408) === 16785408) {
      w = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: on
      }, x0(
        e,
        i,
        w
      );
      var K = (i & 62914560) === i ? Ui - Ae() : (i & 4194048) === i ? M0 - Ae() : 0;
      if (K = gp(
        w,
        K
      ), K !== null) {
        xn = i, t.cancelPendingCommit = K(
          L0.bind(
            null,
            t,
            e,
            i,
            n,
            l,
            u,
            o,
            m,
            v,
            B,
            w,
            null,
            _,
            R
          )
        ), $n(t, i, o, !z);
        return;
      }
    }
    L0(
      t,
      e,
      i,
      n,
      l,
      u,
      o,
      m,
      v
    );
  }
  function Ug(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], i = u.getSnapshot;
          u = u.value;
          try {
            if (!xe(i(), u)) return !1;
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
  function $n(t, e, n, l) {
    e &= ~pf, e &= ~vl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var i = 31 - Ee(u), o = 1 << i;
      l[i] = -1, u &= ~o;
    }
    n !== 0 && Qo(t, n, e);
  }
  function Hi() {
    return (At & 6) === 0 ? (mu(0), !1) : !0;
  }
  function Af() {
    if (ot !== null) {
      if (Ot === 0)
        var t = ot.return;
      else
        t = ot, hn = fl = null, wc(t), Wl = null, Ja = 0, t = ot;
      for (; t !== null; )
        o0(t.alternate, t), t = t.return;
      ot = null;
    }
  }
  function ia(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Pg(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), xn = 0, Af(), Ht = t, ot = n = dn(t.current, null), mt = e, Ot = 0, Me = null, Ln = !1, la = Ua(t, e), gf = !1, aa = De = pf = vl = Xn = Xt = 0, be = su = null, vf = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var u = 31 - Ee(l), i = 1 << u;
        e |= t[u], l &= ~i;
      }
    return En = e, ni(), n;
  }
  function N0(t, e) {
    it = null, M.H = lu, e === Jl || e === oi ? (e = Ws(), Ot = 3) : e === xc ? (e = Ws(), Ot = 4) : Ot = e === Ic ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Me = e, ot === null && (Xt = 1, Ei(
      t,
      Ge(e, t.current)
    ));
  }
  function H0() {
    var t = Oe.current;
    return t === null ? !0 : (mt & 4194048) === mt ? Xe === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === Xe : !1;
  }
  function j0() {
    var t = M.H;
    return M.H = lu, t === null ? lu : t;
  }
  function w0() {
    var t = M.A;
    return M.A = Dg, t;
  }
  function ji() {
    Xt = 4, Ln || (mt & 4194048) !== mt && Oe.current !== null || (la = !0), (Xn & 134217727) === 0 && (vl & 134217727) === 0 || Ht === null || $n(
      Ht,
      mt,
      De,
      !1
    );
  }
  function Cf(t, e, n) {
    var l = At;
    At |= 2;
    var u = j0(), i = w0();
    (Ht !== t || mt !== e) && (Ni = null, ia(t, e)), e = !1;
    var o = Xt;
    t: do
      try {
        if (Ot !== 0 && ot !== null) {
          var m = ot, v = Me;
          switch (Ot) {
            case 8:
              Af(), o = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Oe.current === null && (e = !0);
              var z = Ot;
              if (Ot = 0, Me = null, ra(t, m, v, z), n && la) {
                o = 0;
                break t;
              }
              break;
            default:
              z = Ot, Ot = 0, Me = null, ra(t, m, v, z);
          }
        }
        Bg(), o = Xt;
        break;
      } catch (B) {
        N0(t, B);
      }
    while (!0);
    return e && t.shellSuspendCounter++, hn = fl = null, At = l, M.H = u, M.A = i, ot === null && (Ht = null, mt = 0, ni()), o;
  }
  function Bg() {
    for (; ot !== null; ) G0(ot);
  }
  function Ng(t, e) {
    var n = At;
    At |= 2;
    var l = j0(), u = w0();
    Ht !== t || mt !== e ? (Ni = null, Bi = Ae() + 500, ia(t, e)) : la = Ua(
      t,
      e
    );
    t: do
      try {
        if (Ot !== 0 && ot !== null) {
          e = ot;
          var i = Me;
          e: switch (Ot) {
            case 1:
              Ot = 0, Me = null, ra(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Ks(i)) {
                Ot = 0, Me = null, q0(e);
                break;
              }
              e = function() {
                Ot !== 2 && Ot !== 9 || Ht !== t || (Ot = 7), tn(t);
              }, i.then(e, e);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              Ks(i) ? (Ot = 0, Me = null, q0(e)) : (Ot = 0, Me = null, ra(t, e, i, 7));
              break;
            case 5:
              var o = null;
              switch (ot.tag) {
                case 26:
                  o = ot.memoizedState;
                case 5:
                case 27:
                  var m = ot;
                  if (o ? Em(o) : m.stateNode.complete) {
                    Ot = 0, Me = null;
                    var v = m.sibling;
                    if (v !== null) ot = v;
                    else {
                      var z = m.return;
                      z !== null ? (ot = z, wi(z)) : ot = null;
                    }
                    break e;
                  }
              }
              Ot = 0, Me = null, ra(t, e, i, 5);
              break;
            case 6:
              Ot = 0, Me = null, ra(t, e, i, 6);
              break;
            case 8:
              Af(), Xt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Hg();
        break;
      } catch (B) {
        N0(t, B);
      }
    while (!0);
    return hn = fl = null, M.H = l, M.A = u, At = n, ot !== null ? 0 : (Ht = null, mt = 0, ni(), Xt);
  }
  function Hg() {
    for (; ot !== null && !ay(); )
      G0(ot);
  }
  function G0(t) {
    var e = c0(t.alternate, t, En);
    t.memoizedProps = t.pendingProps, e === null ? wi(t) : ot = e;
  }
  function q0(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = n0(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          mt
        );
        break;
      case 11:
        e = n0(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          mt
        );
        break;
      case 5:
        wc(e);
      default:
        o0(n, e), e = ot = ws(e, En), e = c0(n, e, En);
    }
    t.memoizedProps = t.pendingProps, e === null ? wi(t) : ot = e;
  }
  function ra(t, e, n, l) {
    hn = fl = null, wc(e), Wl = null, Ja = 0;
    var u = e.return;
    try {
      if (Cg(
        t,
        u,
        e,
        n,
        mt
      )) {
        Xt = 1, Ei(
          t,
          Ge(n, t.current)
        ), ot = null;
        return;
      }
    } catch (i) {
      if (u !== null) throw ot = u, i;
      Xt = 1, Ei(
        t,
        Ge(n, t.current)
      ), ot = null;
      return;
    }
    e.flags & 32768 ? (pt || l === 1 ? t = !0 : la || (mt & 536870912) !== 0 ? t = !1 : (Ln = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Oe.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Y0(e, t)) : wi(e);
  }
  function wi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Y0(
          e,
          Ln
        );
        return;
      }
      t = e.return;
      var n = zg(
        e.alternate,
        e,
        En
      );
      if (n !== null) {
        ot = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        ot = e;
        return;
      }
      ot = e = t;
    } while (e !== null);
    Xt === 0 && (Xt = 5);
  }
  function Y0(t, e) {
    do {
      var n = Og(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, ot = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        ot = t;
        return;
      }
      ot = t = n;
    } while (t !== null);
    Xt = 6, ot = null;
  }
  function L0(t, e, n, l, u, i, o, m, v) {
    t.cancelPendingCommit = null;
    do
      Gi();
    while (te !== 0);
    if ((At & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (i = e.lanes | e.childLanes, i |= oc, hy(
        t,
        n,
        i,
        o,
        m,
        v
      ), t === Ht && (ot = Ht = null, mt = 0), ua = e, Vn = t, xn = n, bf = i, Sf = u, D0 = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, qg(Yu, function() {
        return Z0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, u = L.p, L.p = 2, o = At, At |= 4;
        try {
          _g(t, e, n);
        } finally {
          At = o, L.p = u, M.T = l;
        }
      }
      te = 1, X0(), Q0(), V0();
    }
  }
  function X0() {
    if (te === 1) {
      te = 0;
      var t = Vn, e = ua, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = L.p;
        L.p = 2;
        var u = At;
        At |= 4;
        try {
          A0(e, t);
          var i = Hf, o = _s(t.containerInfo), m = i.focusedElem, v = i.selectionRange;
          if (o !== m && m && m.ownerDocument && Os(
            m.ownerDocument.documentElement,
            m
          )) {
            if (v !== null && uc(m)) {
              var z = v.start, B = v.end;
              if (B === void 0 && (B = z), "selectionStart" in m)
                m.selectionStart = z, m.selectionEnd = Math.min(
                  B,
                  m.value.length
                );
              else {
                var w = m.ownerDocument || document, _ = w && w.defaultView || window;
                if (_.getSelection) {
                  var R = _.getSelection(), K = m.textContent.length, nt = Math.min(v.start, K), Bt = v.end === void 0 ? nt : Math.min(v.end, K);
                  !R.extend && nt > Bt && (o = Bt, Bt = nt, nt = o);
                  var A = zs(
                    m,
                    nt
                  ), T = zs(
                    m,
                    Bt
                  );
                  if (A && T && (R.rangeCount !== 1 || R.anchorNode !== A.node || R.anchorOffset !== A.offset || R.focusNode !== T.node || R.focusOffset !== T.offset)) {
                    var x = w.createRange();
                    x.setStart(A.node, A.offset), R.removeAllRanges(), nt > Bt ? (R.addRange(x), R.extend(T.node, T.offset)) : (x.setEnd(T.node, T.offset), R.addRange(x));
                  }
                }
              }
            }
            for (w = [], R = m; R = R.parentNode; )
              R.nodeType === 1 && w.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < w.length; m++) {
              var j = w[m];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          Wi = !!Nf, Hf = Nf = null;
        } finally {
          At = u, L.p = l, M.T = n;
        }
      }
      t.current = e, te = 2;
    }
  }
  function Q0() {
    if (te === 2) {
      te = 0;
      var t = Vn, e = ua, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = L.p;
        L.p = 2;
        var u = At;
        At |= 4;
        try {
          p0(t, e.alternate, e);
        } finally {
          At = u, L.p = l, M.T = n;
        }
      }
      te = 3;
    }
  }
  function V0() {
    if (te === 4 || te === 3) {
      te = 0, uy();
      var t = Vn, e = ua, n = xn, l = D0;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? te = 5 : (te = 0, ua = Vn = null, $0(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Qn = null), Yr(n), e = e.stateNode, Ce && typeof Ce.onCommitFiberRoot == "function")
        try {
          Ce.onCommitFiberRoot(
            Ra,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = M.T, u = L.p, L.p = 2, M.T = null;
        try {
          for (var i = t.onRecoverableError, o = 0; o < l.length; o++) {
            var m = l[o];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          M.T = e, L.p = u;
        }
      }
      (xn & 3) !== 0 && Gi(), tn(t), u = t.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? t === Tf ? du++ : (du = 0, Tf = t) : du = 0, mu(0);
    }
  }
  function $0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ka(e)));
  }
  function Gi() {
    return X0(), Q0(), V0(), Z0();
  }
  function Z0() {
    if (te !== 5) return !1;
    var t = Vn, e = bf;
    bf = 0;
    var n = Yr(xn), l = M.T, u = L.p;
    try {
      L.p = 32 > n ? 32 : n, M.T = null, n = Sf, Sf = null;
      var i = Vn, o = xn;
      if (te = 0, ua = Vn = null, xn = 0, (At & 6) !== 0) throw Error(c(331));
      var m = At;
      if (At |= 4, O0(i.current), E0(
        i,
        i.current,
        o,
        n
      ), At = m, mu(0, !1), Ce && typeof Ce.onPostCommitFiberRoot == "function")
        try {
          Ce.onPostCommitFiberRoot(Ra, i);
        } catch {
        }
      return !0;
    } finally {
      L.p = u, M.T = l, $0(t, e);
    }
  }
  function k0(t, e, n) {
    e = Ge(n, e), e = Pc(t.stateNode, e, 2), t = wn(t, e, 2), t !== null && (Ba(t, 2), tn(t));
  }
  function _t(t, e, n) {
    if (t.tag === 3)
      k0(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          k0(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qn === null || !Qn.has(l))) {
            t = Ge(n, t), n = Kd(2), l = wn(e, n, 2), l !== null && (Jd(
              n,
              l,
              e,
              t
            ), Ba(l, 2), tn(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ef(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Rg();
      var u = /* @__PURE__ */ new Set();
      l.set(e, u);
    } else
      u = l.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(e, u));
    u.has(n) || (gf = !0, u.add(n), t = jg.bind(null, t, e, n), e.then(t, t));
  }
  function jg(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ht === t && (mt & n) === n && (Xt === 4 || Xt === 3 && (mt & 62914560) === mt && 300 > Ae() - Ui ? (At & 2) === 0 && ia(t, 0) : pf |= n, aa === mt && (aa = 0)), tn(t);
  }
  function K0(t, e) {
    e === 0 && (e = Xo()), t = il(t, e), t !== null && (Ba(t, e), tn(t));
  }
  function wg(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), K0(t, n);
  }
  function Gg(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(e), K0(t, n);
  }
  function qg(t, e) {
    return jr(t, e);
  }
  var qi = null, ca = null, xf = !1, Yi = !1, zf = !1, Zn = 0;
  function tn(t) {
    t !== ca && t.next === null && (ca === null ? qi = ca = t : ca = ca.next = t), Yi = !0, xf || (xf = !0, Lg());
  }
  function mu(t, e) {
    if (!zf && Yi) {
      zf = !0;
      do
        for (var n = !1, l = qi; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var i = 0;
            else {
              var o = l.suspendedLanes, m = l.pingedLanes;
              i = (1 << 31 - Ee(42 | t) + 1) - 1, i &= u & ~(o & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, P0(l, i));
          } else
            i = mt, i = Vu(
              l,
              l === Ht ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || Ua(l, i) || (n = !0, P0(l, i));
          l = l.next;
        }
      while (n);
      zf = !1;
    }
  }
  function Yg() {
    J0();
  }
  function J0() {
    Yi = xf = !1;
    var t = 0;
    Zn !== 0 && Fg() && (t = Zn);
    for (var e = Ae(), n = null, l = qi; l !== null; ) {
      var u = l.next, i = W0(l, e);
      i === 0 ? (l.next = null, n === null ? qi = u : n.next = u, u === null && (ca = n)) : (n = l, (t !== 0 || (i & 3) !== 0) && (Yi = !0)), l = u;
    }
    te !== 0 && te !== 5 || mu(t), Zn !== 0 && (Zn = 0);
  }
  function W0(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var o = 31 - Ee(i), m = 1 << o, v = u[o];
      v === -1 ? ((m & n) === 0 || (m & l) !== 0) && (u[o] = my(m, e)) : v <= e && (t.expiredLanes |= m), i &= ~m;
    }
    if (e = Ht, n = mt, n = Vu(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, n === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && wr(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ua(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && wr(l), Yr(n)) {
        case 2:
        case 8:
          n = Yo;
          break;
        case 32:
          n = Yu;
          break;
        case 268435456:
          n = Lo;
          break;
        default:
          n = Yu;
      }
      return l = F0.bind(null, t), n = jr(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && wr(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function F0(t, e) {
    if (te !== 0 && te !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Gi() && t.callbackNode !== n)
      return null;
    var l = mt;
    return l = Vu(
      t,
      t === Ht ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (U0(t, l, e), W0(t, Ae()), t.callbackNode != null && t.callbackNode === n ? F0.bind(null, t) : null);
  }
  function P0(t, e) {
    if (Gi()) return null;
    U0(t, e, !0);
  }
  function Lg() {
    Ig(function() {
      (At & 6) !== 0 ? jr(
        qo,
        Yg
      ) : J0();
    });
  }
  function Of() {
    if (Zn === 0) {
      var t = kl;
      t === 0 && (t = Lu, Lu <<= 1, (Lu & 261888) === 0 && (Lu = 256)), Zn = t;
    }
    return Zn;
  }
  function I0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ku("" + t);
  }
  function tm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function Xg(t, e, n, l, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var i = I0(
        (u[he] || null).action
      ), o = l.submitter;
      o && (e = (e = o[he] || null) ? I0(e.formAction) : o.getAttribute("formAction"), e !== null && (i = e, o = null));
      var m = new Pu(
        "action",
        "action",
        null,
        l,
        u
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Zn !== 0) {
                  var v = o ? tm(u, o) : new FormData(u);
                  Zc(
                    n,
                    {
                      pending: !0,
                      data: v,
                      method: u.method,
                      action: i
                    },
                    null,
                    v
                  );
                }
              } else
                typeof i == "function" && (m.preventDefault(), v = o ? tm(u, o) : new FormData(u), Zc(
                  n,
                  {
                    pending: !0,
                    data: v,
                    method: u.method,
                    action: i
                  },
                  i,
                  v
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var _f = 0; _f < fc.length; _f++) {
    var Mf = fc[_f], Qg = Mf.toLowerCase(), Vg = Mf[0].toUpperCase() + Mf.slice(1);
    ke(
      Qg,
      "on" + Vg
    );
  }
  ke(Rs, "onAnimationEnd"), ke(Us, "onAnimationIteration"), ke(Bs, "onAnimationStart"), ke("dblclick", "onDoubleClick"), ke("focusin", "onFocus"), ke("focusout", "onBlur"), ke(ig, "onTransitionRun"), ke(rg, "onTransitionStart"), ke(cg, "onTransitionCancel"), ke(Ns, "onTransitionEnd"), Bl("onMouseEnter", ["mouseout", "mouseover"]), Bl("onMouseLeave", ["mouseout", "mouseover"]), Bl("onPointerEnter", ["pointerout", "pointerover"]), Bl("onPointerLeave", ["pointerout", "pointerover"]), nl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), nl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), nl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), nl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), nl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), nl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var hu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $g = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu)
  );
  function em(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], u = l.event;
      l = l.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var o = l.length - 1; 0 <= o; o--) {
            var m = l[o], v = m.instance, z = m.currentTarget;
            if (m = m.listener, v !== i && u.isPropagationStopped())
              break t;
            i = m, u.currentTarget = z;
            try {
              i(u);
            } catch (B) {
              ei(B);
            }
            u.currentTarget = null, i = v;
          }
        else
          for (o = 0; o < l.length; o++) {
            if (m = l[o], v = m.instance, z = m.currentTarget, m = m.listener, v !== i && u.isPropagationStopped())
              break t;
            i = m, u.currentTarget = z;
            try {
              i(u);
            } catch (B) {
              ei(B);
            }
            u.currentTarget = null, i = v;
          }
      }
    }
  }
  function st(t, e) {
    var n = e[Lr];
    n === void 0 && (n = e[Lr] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (nm(e, t, 2, !1), n.add(l));
  }
  function Df(t, e, n) {
    var l = 0;
    e && (l |= 4), nm(
      n,
      t,
      l,
      e
    );
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(t) {
    if (!t[Li]) {
      t[Li] = !0, Jo.forEach(function(n) {
        n !== "selectionchange" && ($g.has(n) || Df(n, !1, t), Df(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Li] || (e[Li] = !0, Df("selectionchange", !1, e));
    }
  }
  function nm(t, e, n, l) {
    switch (Rm(e)) {
      case 2:
        var u = bp;
        break;
      case 8:
        u = Sp;
        break;
      default:
        u = Zf;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Wr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), l ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Uf(t, e, n, l, u) {
    var i = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var o = l.tag;
        if (o === 3 || o === 4) {
          var m = l.stateNode.containerInfo;
          if (m === u) break;
          if (o === 4)
            for (o = l.return; o !== null; ) {
              var v = o.tag;
              if ((v === 3 || v === 4) && o.stateNode.containerInfo === u)
                return;
              o = o.return;
            }
          for (; m !== null; ) {
            if (o = Dl(m), o === null) return;
            if (v = o.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              l = i = o;
              continue t;
            }
            m = m.parentNode;
          }
        }
        l = l.return;
      }
    rs(function() {
      var z = i, B = Kr(n), w = [];
      t: {
        var _ = Hs.get(t);
        if (_ !== void 0) {
          var R = Pu, K = t;
          switch (t) {
            case "keypress":
              if (Wu(n) === 0) break t;
            case "keydown":
            case "keyup":
              R = Gy;
              break;
            case "focusin":
              K = "focus", R = tc;
              break;
            case "focusout":
              K = "blur", R = tc;
              break;
            case "beforeblur":
            case "afterblur":
              R = tc;
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
              R = os;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = zy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Ly;
              break;
            case Rs:
            case Us:
            case Bs:
              R = My;
              break;
            case Ns:
              R = Qy;
              break;
            case "scroll":
            case "scrollend":
              R = Ey;
              break;
            case "wheel":
              R = $y;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Ry;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = ds;
              break;
            case "toggle":
            case "beforetoggle":
              R = ky;
          }
          var nt = (e & 4) !== 0, Bt = !nt && (t === "scroll" || t === "scrollend"), A = nt ? _ !== null ? _ + "Capture" : null : _;
          nt = [];
          for (var T = z, x; T !== null; ) {
            var j = T;
            if (x = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || x === null || A === null || (j = ja(T, A), j != null && nt.push(
              yu(T, j, x)
            )), Bt) break;
            T = T.return;
          }
          0 < nt.length && (_ = new R(
            _,
            K,
            null,
            n,
            B
          ), w.push({ event: _, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (_ = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", _ && n !== kr && (K = n.relatedTarget || n.fromElement) && (Dl(K) || K[Ml]))
            break t;
          if ((R || _) && (_ = B.window === B ? B : (_ = B.ownerDocument) ? _.defaultView || _.parentWindow : window, R ? (K = n.relatedTarget || n.toElement, R = z, K = K ? Dl(K) : null, K !== null && (Bt = d(K), nt = K.tag, K !== Bt || nt !== 5 && nt !== 27 && nt !== 6) && (K = null)) : (R = null, K = z), R !== K)) {
            if (nt = os, j = "onMouseLeave", A = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (nt = ds, j = "onPointerLeave", A = "onPointerEnter", T = "pointer"), Bt = R == null ? _ : Ha(R), x = K == null ? _ : Ha(K), _ = new nt(
              j,
              T + "leave",
              R,
              n,
              B
            ), _.target = Bt, _.relatedTarget = x, j = null, Dl(B) === z && (nt = new nt(
              A,
              T + "enter",
              K,
              n,
              B
            ), nt.target = x, nt.relatedTarget = Bt, j = nt), Bt = j, R && K)
              e: {
                for (nt = Zg, A = R, T = K, x = 0, j = A; j; j = nt(j))
                  x++;
                j = 0;
                for (var tt = T; tt; tt = nt(tt))
                  j++;
                for (; 0 < x - j; )
                  A = nt(A), x--;
                for (; 0 < j - x; )
                  T = nt(T), j--;
                for (; x--; ) {
                  if (A === T || T !== null && A === T.alternate) {
                    nt = A;
                    break e;
                  }
                  A = nt(A), T = nt(T);
                }
                nt = null;
              }
            else nt = null;
            R !== null && lm(
              w,
              _,
              R,
              nt,
              !1
            ), K !== null && Bt !== null && lm(
              w,
              Bt,
              K,
              nt,
              !0
            );
          }
        }
        t: {
          if (_ = z ? Ha(z) : window, R = _.nodeName && _.nodeName.toLowerCase(), R === "select" || R === "input" && _.type === "file")
            var bt = Ss;
          else if (vs(_))
            if (Ts)
              bt = lg;
            else {
              bt = eg;
              var P = tg;
            }
          else
            R = _.nodeName, !R || R.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? z && Zr(z.elementType) && (bt = Ss) : bt = ng;
          if (bt && (bt = bt(t, z))) {
            bs(
              w,
              bt,
              n,
              B
            );
            break t;
          }
          P && P(t, _, z), t === "focusout" && z && _.type === "number" && z.memoizedProps.value != null && $r(_, "number", _.value);
        }
        switch (P = z ? Ha(z) : window, t) {
          case "focusin":
            (vs(P) || P.contentEditable === "true") && (ql = P, ic = z, Va = null);
            break;
          case "focusout":
            Va = ic = ql = null;
            break;
          case "mousedown":
            rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rc = !1, Ms(w, n, B);
            break;
          case "selectionchange":
            if (ug) break;
          case "keydown":
          case "keyup":
            Ms(w, n, B);
        }
        var rt;
        if (nc)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          Gl ? gs(t, n) && (ht = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");
        ht && (ms && n.locale !== "ko" && (Gl || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Gl && (rt = cs()) : (Dn = B, Fr = "value" in Dn ? Dn.value : Dn.textContent, Gl = !0)), P = Xi(z, ht), 0 < P.length && (ht = new ss(
          ht,
          t,
          null,
          n,
          B
        ), w.push({ event: ht, listeners: P }), rt ? ht.data = rt : (rt = ps(n), rt !== null && (ht.data = rt)))), (rt = Jy ? Wy(t, n) : Fy(t, n)) && (ht = Xi(z, "onBeforeInput"), 0 < ht.length && (P = new ss(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          B
        ), w.push({
          event: P,
          listeners: ht
        }), P.data = rt)), Xg(
          w,
          t,
          z,
          n,
          B
        );
      }
      em(w, e);
    });
  }
  function yu(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Xi(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var u = t, i = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || i === null || (u = ja(t, n), u != null && l.unshift(
        yu(t, u, i)
      ), u = ja(t, e), u != null && l.push(
        yu(t, u, i)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function Zg(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function lm(t, e, n, l, u) {
    for (var i = e._reactName, o = []; n !== null && n !== l; ) {
      var m = n, v = m.alternate, z = m.stateNode;
      if (m = m.tag, v !== null && v === l) break;
      m !== 5 && m !== 26 && m !== 27 || z === null || (v = z, u ? (z = ja(n, i), z != null && o.unshift(
        yu(n, z, v)
      )) : u || (z = ja(n, i), z != null && o.push(
        yu(n, z, v)
      ))), n = n.return;
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var kg = /\r\n?/g, Kg = /\u0000|\uFFFD/g;
  function am(t) {
    return (typeof t == "string" ? t : "" + t).replace(kg, `
`).replace(Kg, "");
  }
  function um(t, e) {
    return e = am(e), am(t) === e;
  }
  function Ut(t, e, n, l, u, i) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Hl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Hl(t, "" + l);
        break;
      case "className":
        Zu(t, "class", l);
        break;
      case "tabIndex":
        Zu(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zu(t, n, l);
        break;
      case "style":
        us(t, l, i);
        break;
      case "data":
        if (e !== "object") {
          Zu(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Ku("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (n === "formAction" ? (e !== "input" && Ut(t, e, "name", u.name, u, null), Ut(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Ut(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Ut(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Ut(t, e, "encType", u.encType, u, null), Ut(t, e, "method", u.method, u, null), Ut(t, e, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Ku("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = on);
        break;
      case "onScroll":
        l != null && st("scroll", t);
        break;
      case "onScrollEnd":
        l != null && st("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Ku("" + l), t.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
        break;
      case "popover":
        st("beforetoggle", t), st("toggle", t), $u(t, "popover", l);
        break;
      case "xlinkActuate":
        fn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        fn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        fn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        fn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        fn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        fn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        fn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        fn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        fn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        $u(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ay.get(n) || n, $u(t, n, l));
    }
  }
  function Bf(t, e, n, l, u, i) {
    switch (n) {
      case "style":
        us(t, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Hl(t, l) : (typeof l == "number" || typeof l == "bigint") && Hl(t, "" + l);
        break;
      case "onScroll":
        l != null && st("scroll", t);
        break;
      case "onScrollEnd":
        l != null && st("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = on);
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
        if (!Wo.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), e = n.slice(2, u ? n.length - 7 : void 0), i = t[he] || null, i = i != null ? i[n] : null, typeof i == "function" && t.removeEventListener(e, i, u), typeof l == "function")) {
              typeof i != "function" && i !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, u);
              break t;
            }
            n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : $u(t, n, l);
          }
    }
  }
  function re(t, e, n) {
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
        st("error", t), st("load", t);
        var l = !1, u = !1, i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var o = n[i];
            if (o != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  Ut(t, e, i, o, n, null);
              }
          }
        u && Ut(t, e, "srcSet", n.srcSet, n, null), l && Ut(t, e, "src", n.src, n, null);
        return;
      case "input":
        st("invalid", t);
        var m = i = o = u = null, v = null, z = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var B = n[l];
            if (B != null)
              switch (l) {
                case "name":
                  u = B;
                  break;
                case "type":
                  o = B;
                  break;
                case "checked":
                  v = B;
                  break;
                case "defaultChecked":
                  z = B;
                  break;
                case "value":
                  i = B;
                  break;
                case "defaultValue":
                  m = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(c(137, e));
                  break;
                default:
                  Ut(t, e, l, B, n, null);
              }
          }
        es(
          t,
          i,
          m,
          v,
          z,
          o,
          u,
          !1
        );
        return;
      case "select":
        st("invalid", t), l = o = i = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (m = n[u], m != null))
            switch (u) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                o = m;
                break;
              case "multiple":
                l = m;
              default:
                Ut(t, e, u, m, n, null);
            }
        e = i, n = o, t.multiple = !!l, e != null ? Nl(t, !!l, e, !1) : n != null && Nl(t, !!l, n, !0);
        return;
      case "textarea":
        st("invalid", t), i = u = l = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (m = n[o], m != null))
            switch (o) {
              case "value":
                l = m;
                break;
              case "defaultValue":
                u = m;
                break;
              case "children":
                i = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(c(91));
                break;
              default:
                Ut(t, e, o, m, n, null);
            }
        ls(t, l, u, i);
        return;
      case "option":
        for (v in n)
          if (n.hasOwnProperty(v) && (l = n[v], l != null))
            switch (v) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ut(t, e, v, l, n, null);
            }
        return;
      case "dialog":
        st("beforetoggle", t), st("toggle", t), st("cancel", t), st("close", t);
        break;
      case "iframe":
      case "object":
        st("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < hu.length; l++)
          st(hu[l], t);
        break;
      case "image":
        st("error", t), st("load", t);
        break;
      case "details":
        st("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        st("error", t), st("load", t);
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
        for (z in n)
          if (n.hasOwnProperty(z) && (l = n[z], l != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Ut(t, e, z, l, n, null);
            }
        return;
      default:
        if (Zr(e)) {
          for (B in n)
            n.hasOwnProperty(B) && (l = n[B], l !== void 0 && Bf(
              t,
              e,
              B,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (l = n[m], l != null && Ut(t, e, m, l, n, null));
  }
  function Jg(t, e, n, l) {
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
        var u = null, i = null, o = null, m = null, v = null, z = null, B = null;
        for (R in n) {
          var w = n[R];
          if (n.hasOwnProperty(R) && w != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = w;
              default:
                l.hasOwnProperty(R) || Ut(t, e, R, null, l, w);
            }
        }
        for (var _ in l) {
          var R = l[_];
          if (w = n[_], l.hasOwnProperty(_) && (R != null || w != null))
            switch (_) {
              case "type":
                i = R;
                break;
              case "name":
                u = R;
                break;
              case "checked":
                z = R;
                break;
              case "defaultChecked":
                B = R;
                break;
              case "value":
                o = R;
                break;
              case "defaultValue":
                m = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(c(137, e));
                break;
              default:
                R !== w && Ut(
                  t,
                  e,
                  _,
                  R,
                  l,
                  w
                );
            }
        }
        Vr(
          t,
          o,
          m,
          v,
          z,
          B,
          i,
          u
        );
        return;
      case "select":
        R = o = m = _ = null;
        for (i in n)
          if (v = n[i], n.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                R = v;
              default:
                l.hasOwnProperty(i) || Ut(
                  t,
                  e,
                  i,
                  null,
                  l,
                  v
                );
            }
        for (u in l)
          if (i = l[u], v = n[u], l.hasOwnProperty(u) && (i != null || v != null))
            switch (u) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                o = i;
              default:
                i !== v && Ut(
                  t,
                  e,
                  u,
                  i,
                  l,
                  v
                );
            }
        e = m, n = o, l = R, _ != null ? Nl(t, !!n, _, !1) : !!l != !!n && (e != null ? Nl(t, !!n, e, !0) : Nl(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        R = _ = null;
        for (m in n)
          if (u = n[m], n.hasOwnProperty(m) && u != null && !l.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(t, e, m, null, l, u);
            }
        for (o in l)
          if (u = l[o], i = n[o], l.hasOwnProperty(o) && (u != null || i != null))
            switch (o) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                R = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== i && Ut(t, e, o, u, l, i);
            }
        ns(t, _, R);
        return;
      case "option":
        for (var K in n)
          if (_ = n[K], n.hasOwnProperty(K) && _ != null && !l.hasOwnProperty(K))
            switch (K) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ut(
                  t,
                  e,
                  K,
                  null,
                  l,
                  _
                );
            }
        for (v in l)
          if (_ = l[v], R = n[v], l.hasOwnProperty(v) && _ !== R && (_ != null || R != null))
            switch (v) {
              case "selected":
                t.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Ut(
                  t,
                  e,
                  v,
                  _,
                  l,
                  R
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
        for (var nt in n)
          _ = n[nt], n.hasOwnProperty(nt) && _ != null && !l.hasOwnProperty(nt) && Ut(t, e, nt, null, l, _);
        for (z in l)
          if (_ = l[z], R = n[z], l.hasOwnProperty(z) && _ !== R && (_ != null || R != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, e));
                break;
              default:
                Ut(
                  t,
                  e,
                  z,
                  _,
                  l,
                  R
                );
            }
        return;
      default:
        if (Zr(e)) {
          for (var Bt in n)
            _ = n[Bt], n.hasOwnProperty(Bt) && _ !== void 0 && !l.hasOwnProperty(Bt) && Bf(
              t,
              e,
              Bt,
              void 0,
              l,
              _
            );
          for (B in l)
            _ = l[B], R = n[B], !l.hasOwnProperty(B) || _ === R || _ === void 0 && R === void 0 || Bf(
              t,
              e,
              B,
              _,
              l,
              R
            );
          return;
        }
    }
    for (var A in n)
      _ = n[A], n.hasOwnProperty(A) && _ != null && !l.hasOwnProperty(A) && Ut(t, e, A, null, l, _);
    for (w in l)
      _ = l[w], R = n[w], !l.hasOwnProperty(w) || _ === R || _ == null && R == null || Ut(t, e, w, _, l, R);
  }
  function im(t) {
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
  function Wg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var u = n[l], i = u.transferSize, o = u.initiatorType, m = u.duration;
        if (i && m && im(o)) {
          for (o = 0, m = u.responseEnd, l += 1; l < n.length; l++) {
            var v = n[l], z = v.startTime;
            if (z > m) break;
            var B = v.transferSize, w = v.initiatorType;
            B && im(w) && (v = v.responseEnd, o += B * (v < m ? 1 : (m - z) / (v - z)));
          }
          if (--l, e += 8 * (i + o) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Nf = null, Hf = null;
  function Qi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function rm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function cm(t, e) {
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
  function jf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var wf = null;
  function Fg() {
    var t = window.event;
    return t && t.type === "popstate" ? t === wf ? !1 : (wf = t, !0) : (wf = null, !1);
  }
  var fm = typeof setTimeout == "function" ? setTimeout : void 0, Pg = typeof clearTimeout == "function" ? clearTimeout : void 0, om = typeof Promise == "function" ? Promise : void 0, Ig = typeof queueMicrotask == "function" ? queueMicrotask : typeof om < "u" ? function(t) {
    return om.resolve(null).then(t).catch(tp);
  } : fm;
  function tp(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function kn(t) {
    return t === "head";
  }
  function sm(t, e) {
    var n = e, l = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (l === 0) {
            t.removeChild(u), da(e);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          gu(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, gu(n);
          for (var i = n.firstChild; i; ) {
            var o = i.nextSibling, m = i.nodeName;
            i[Na] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = o;
          }
        } else
          n === "body" && gu(t.ownerDocument.body);
      n = u;
    } while (n);
    da(e);
  }
  function dm(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = l;
    } while (n);
  }
  function Gf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Gf(n), Xr(n);
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
  function ep(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[Na])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Qe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function np(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Qe(t.nextSibling), t === null)) return null;
    return t;
  }
  function mm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Qe(t.nextSibling), t === null)) return null;
    return t;
  }
  function qf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Yf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function lp(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Qe(t) {
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
  var Lf = null;
  function hm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Qe(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ym(t) {
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
  function gm(t, e, n) {
    switch (e = Qi(n), t) {
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
  function gu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Xr(t);
  }
  var Ve = /* @__PURE__ */ new Map(), pm = /* @__PURE__ */ new Set();
  function Vi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var zn = L.d;
  L.d = {
    f: ap,
    r: up,
    D: ip,
    C: rp,
    L: cp,
    m: fp,
    X: sp,
    S: op,
    M: dp
  };
  function ap() {
    var t = zn.f(), e = Hi();
    return t || e;
  }
  function up(t) {
    var e = Rl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Nd(e) : zn.r(t);
  }
  var fa = typeof document > "u" ? null : document;
  function vm(t, e, n) {
    var l = fa;
    if (l && typeof e == "string" && e) {
      var u = je(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), pm.has(u) || (pm.add(u), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(u) === null && (e = l.createElement("link"), re(e, "link", t), ee(e), l.head.appendChild(e)));
    }
  }
  function ip(t) {
    zn.D(t), vm("dns-prefetch", t, null);
  }
  function rp(t, e) {
    zn.C(t, e), vm("preconnect", t, e);
  }
  function cp(t, e, n) {
    zn.L(t, e, n);
    var l = fa;
    if (l && t && e) {
      var u = 'link[rel="preload"][as="' + je(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + je(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + je(
        n.imageSizes
      ) + '"]')) : u += '[href="' + je(t) + '"]';
      var i = u;
      switch (e) {
        case "style":
          i = oa(t);
          break;
        case "script":
          i = sa(t);
      }
      Ve.has(i) || (t = C(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Ve.set(i, t), l.querySelector(u) !== null || e === "style" && l.querySelector(pu(i)) || e === "script" && l.querySelector(vu(i)) || (e = l.createElement("link"), re(e, "link", t), ee(e), l.head.appendChild(e)));
    }
  }
  function fp(t, e) {
    zn.m(t, e);
    var n = fa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + je(l) + '"][href="' + je(t) + '"]', i = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = sa(t);
      }
      if (!Ve.has(i) && (t = C({ rel: "modulepreload", href: t }, e), Ve.set(i, t), n.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(vu(i)))
              return;
        }
        l = n.createElement("link"), re(l, "link", t), ee(l), n.head.appendChild(l);
      }
    }
  }
  function op(t, e, n) {
    zn.S(t, e, n);
    var l = fa;
    if (l && t) {
      var u = Ul(l).hoistableStyles, i = oa(t);
      e = e || "default";
      var o = u.get(i);
      if (!o) {
        var m = { loading: 0, preload: null };
        if (o = l.querySelector(
          pu(i)
        ))
          m.loading = 5;
        else {
          t = C(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Ve.get(i)) && Xf(t, n);
          var v = o = l.createElement("link");
          ee(v), re(v, "link", t), v._p = new Promise(function(z, B) {
            v.onload = z, v.onerror = B;
          }), v.addEventListener("load", function() {
            m.loading |= 1;
          }), v.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, $i(o, e, l);
        }
        o = {
          type: "stylesheet",
          instance: o,
          count: 1,
          state: m
        }, u.set(i, o);
      }
    }
  }
  function sp(t, e) {
    zn.X(t, e);
    var n = fa;
    if (n && t) {
      var l = Ul(n).hoistableScripts, u = sa(t), i = l.get(u);
      i || (i = n.querySelector(vu(u)), i || (t = C({ src: t, async: !0 }, e), (e = Ve.get(u)) && Qf(t, e), i = n.createElement("script"), ee(i), re(i, "link", t), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(u, i));
    }
  }
  function dp(t, e) {
    zn.M(t, e);
    var n = fa;
    if (n && t) {
      var l = Ul(n).hoistableScripts, u = sa(t), i = l.get(u);
      i || (i = n.querySelector(vu(u)), i || (t = C({ src: t, async: !0, type: "module" }, e), (e = Ve.get(u)) && Qf(t, e), i = n.createElement("script"), ee(i), re(i, "link", t), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(u, i));
    }
  }
  function bm(t, e, n, l) {
    var u = (u = ft.current) ? Vi(u) : null;
    if (!u) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = oa(n.href), n = Ul(
          u
        ).hoistableStyles, l = n.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = oa(n.href);
          var i = Ul(
            u
          ).hoistableStyles, o = i.get(t);
          if (o || (u = u.ownerDocument || u, o = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, o), (i = u.querySelector(
            pu(t)
          )) && !i._p && (o.instance = i, o.state.loading = 5), Ve.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ve.set(t, n), i || mp(
            u,
            t,
            n,
            o.state
          ))), e && l === null)
            throw Error(c(528, ""));
          return o;
        }
        if (e && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = sa(n), n = Ul(
          u
        ).hoistableScripts, l = n.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function oa(t) {
    return 'href="' + je(t) + '"';
  }
  function pu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Sm(t) {
    return C({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function mp(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), re(e, "link", n), ee(e), t.head.appendChild(e));
  }
  function sa(t) {
    return '[src="' + je(t) + '"]';
  }
  function vu(t) {
    return "script[async]" + t;
  }
  function Tm(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + je(n.href) + '"]'
          );
          if (l)
            return e.instance = l, ee(l), l;
          var u = C({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), ee(l), re(l, "style", u), $i(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          u = oa(n.href);
          var i = t.querySelector(
            pu(u)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, ee(i), i;
          l = Sm(n), (u = Ve.get(u)) && Xf(l, u), i = (t.ownerDocument || t).createElement("link"), ee(i);
          var o = i;
          return o._p = new Promise(function(m, v) {
            o.onload = m, o.onerror = v;
          }), re(i, "link", l), e.state.loading |= 4, $i(i, n.precedence, t), e.instance = i;
        case "script":
          return i = sa(n.src), (u = t.querySelector(
            vu(i)
          )) ? (e.instance = u, ee(u), u) : (l = n, (u = Ve.get(i)) && (l = C({}, n), Qf(l, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), re(u, "link", l), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, $i(l, n.precedence, t));
    return e.instance;
  }
  function $i(t, e, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, i = u, o = 0; o < l.length; o++) {
      var m = l[o];
      if (m.dataset.precedence === e) i = m;
      else if (i !== u) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Xf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Qf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Zi = null;
  function Am(t, e, n) {
    if (Zi === null) {
      var l = /* @__PURE__ */ new Map(), u = Zi = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Zi, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var i = n[u];
      if (!(i[Na] || i[le] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var o = i.getAttribute(e) || "";
        o = t + o;
        var m = l.get(o);
        m ? m.push(i) : l.set(o, [i]);
      }
    }
    return l;
  }
  function Cm(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function hp(t, e, n) {
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
  function Em(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function yp(t, e, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = oa(l.href), i = e.querySelector(
          pu(u)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ki.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = i, ee(i);
          return;
        }
        i = e.ownerDocument || e, l = Sm(l), (u = Ve.get(u)) && Xf(l, u), i = i.createElement("link"), ee(i);
        var o = i;
        o._p = new Promise(function(m, v) {
          o.onload = m, o.onerror = v;
        }), re(i, "link", l), n.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ki.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Vf = 0;
  function gp(t, e) {
    return t.stylesheets && t.count === 0 && Ji(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (t.stylesheets && Ji(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Vf === 0 && (Vf = 62500 * Wg());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ji(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Vf ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function ki() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ji(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ki = null;
  function Ji(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ki = /* @__PURE__ */ new Map(), e.forEach(pp, t), Ki = null, ki.call(t));
  }
  function pp(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ki.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ki.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < u.length; i++) {
          var o = u[i];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), l = o);
        }
        l && n.set(null, l);
      }
      u = e.instance, o = u.getAttribute("data-precedence"), i = n.get(o) || l, i === l && n.set(null, u), n.set(o, u), this.count++, l = ki.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), i ? i.parentNode.insertBefore(u, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var bu = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function vp(t, e, n, l, u, i, o, m, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gr(0), this.hiddenUpdates = Gr(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function xm(t, e, n, l, u, i, o, m, v, z, B, w) {
    return t = new vp(
      t,
      e,
      n,
      o,
      v,
      z,
      B,
      w,
      m
    ), e = 1, i === !0 && (e |= 24), i = ze(3, null, null, e), t.current = i, i.stateNode = t, e = Ac(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, zc(i), t;
  }
  function zm(t) {
    return t ? (t = Xl, t) : Xl;
  }
  function Om(t, e, n, l, u, i) {
    u = zm(u), l.context === null ? l.context = u : l.pendingContext = u, l = jn(e), l.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (l.callback = i), n = wn(t, l, e), n !== null && (Se(n, t, e), Fa(n, t, e));
  }
  function _m(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function $f(t, e) {
    _m(t, e), (t = t.alternate) && _m(t, e);
  }
  function Mm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = il(t, 67108864);
      e !== null && Se(e, t, 67108864), $f(t, 67108864);
    }
  }
  function Dm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Re();
      e = qr(e);
      var n = il(t, e);
      n !== null && Se(n, t, e), $f(t, e);
    }
  }
  var Wi = !0;
  function bp(t, e, n, l) {
    var u = M.T;
    M.T = null;
    var i = L.p;
    try {
      L.p = 2, Zf(t, e, n, l);
    } finally {
      L.p = i, M.T = u;
    }
  }
  function Sp(t, e, n, l) {
    var u = M.T;
    M.T = null;
    var i = L.p;
    try {
      L.p = 8, Zf(t, e, n, l);
    } finally {
      L.p = i, M.T = u;
    }
  }
  function Zf(t, e, n, l) {
    if (Wi) {
      var u = kf(l);
      if (u === null)
        Uf(
          t,
          e,
          l,
          Fi,
          n
        ), Um(t, l);
      else if (Ap(
        u,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (Um(t, l), e & 4 && -1 < Tp.indexOf(t)) {
        for (; u !== null; ) {
          var i = Rl(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var o = el(i.pendingLanes);
                  if (o !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; o; ) {
                      var v = 1 << 31 - Ee(o);
                      m.entanglements[1] |= v, o &= ~v;
                    }
                    tn(i), (At & 6) === 0 && (Bi = Ae() + 500, mu(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = il(i, 2), m !== null && Se(m, i, 2), Hi(), $f(i, 2);
            }
          if (i = kf(l), i === null && Uf(
            t,
            e,
            l,
            Fi,
            n
          ), i === u) break;
          u = i;
        }
        u !== null && l.stopPropagation();
      } else
        Uf(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function kf(t) {
    return t = Kr(t), Kf(t);
  }
  var Fi = null;
  function Kf(t) {
    if (Fi = null, t = Dl(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = h(e), t !== null) return t;
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
    return Fi = t, null;
  }
  function Rm(t) {
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
        switch (iy()) {
          case qo:
            return 2;
          case Yo:
            return 8;
          case Yu:
          case ry:
            return 32;
          case Lo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jf = !1, Kn = null, Jn = null, Wn = null, Su = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), Fn = [], Tp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Um(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        Su.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(e.pointerId);
    }
  }
  function Au(t, e, n, l, u, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [u]
    }, e !== null && (e = Rl(e), e !== null && Mm(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function Ap(t, e, n, l, u) {
    switch (e) {
      case "focusin":
        return Kn = Au(
          Kn,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "dragenter":
        return Jn = Au(
          Jn,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "mouseover":
        return Wn = Au(
          Wn,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "pointerover":
        var i = u.pointerId;
        return Su.set(
          i,
          Au(
            Su.get(i) || null,
            t,
            e,
            n,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return i = u.pointerId, Tu.set(
          i,
          Au(
            Tu.get(i) || null,
            t,
            e,
            n,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Bm(t) {
    var e = Dl(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = h(n), e !== null) {
            t.blockedOn = e, ko(t.priority, function() {
              Dm(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(n), e !== null) {
            t.blockedOn = e, ko(t.priority, function() {
              Dm(n);
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
  function Pi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = kf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        kr = l, n.target.dispatchEvent(l), kr = null;
      } else
        return e = Rl(n), e !== null && Mm(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Nm(t, e, n) {
    Pi(t) && n.delete(e);
  }
  function Cp() {
    Jf = !1, Kn !== null && Pi(Kn) && (Kn = null), Jn !== null && Pi(Jn) && (Jn = null), Wn !== null && Pi(Wn) && (Wn = null), Su.forEach(Nm), Tu.forEach(Nm);
  }
  function Ii(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Jf || (Jf = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      Cp
    )));
  }
  var tr = null;
  function Hm(t) {
    tr !== t && (tr = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        tr === t && (tr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], u = t[e + 2];
          if (typeof l != "function") {
            if (Kf(l || n) === null)
              continue;
            break;
          }
          var i = Rl(n);
          i !== null && (t.splice(e, 3), e -= 3, Zc(
            i,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function da(t) {
    function e(v) {
      return Ii(v, t);
    }
    Kn !== null && Ii(Kn, t), Jn !== null && Ii(Jn, t), Wn !== null && Ii(Wn, t), Su.forEach(e), Tu.forEach(e);
    for (var n = 0; n < Fn.length; n++) {
      var l = Fn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Fn.length && (n = Fn[0], n.blockedOn === null); )
      Bm(n), n.blockedOn === null && Fn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], i = n[l + 1], o = u[he] || null;
        if (typeof i == "function")
          o || Hm(n);
        else if (o) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (u = i, o = i[he] || null)
              m = o.formAction;
            else if (Kf(u) !== null) continue;
          } else m = o.action;
          typeof m == "function" ? n[l + 1] = m : (n.splice(l, 3), l -= 3), Hm(n);
        }
      }
  }
  function jm() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(o) {
            return u = o;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function Wf(t) {
    this._internalRoot = t;
  }
  er.prototype.render = Wf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, l = Re();
    Om(n, l, t, e, null, null);
  }, er.prototype.unmount = Wf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Om(t.current, 2, null, t, null, null), Hi(), e[Ml] = null;
    }
  };
  function er(t) {
    this._internalRoot = t;
  }
  er.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Zo();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Fn.length && e !== 0 && e < Fn[n].priority; n++) ;
      Fn.splice(n, 0, t), n === 0 && Bm(t);
    }
  };
  var wm = r.version;
  if (wm !== "19.2.0")
    throw Error(
      c(
        527,
        wm,
        "19.2.0"
      )
    );
  L.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = g(e), t = t !== null ? O(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Ep = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nr.isDisabled && nr.supportsFiber)
      try {
        Ra = nr.inject(
          Ep
        ), Ce = nr;
      } catch {
      }
  }
  return Cu.createRoot = function(t, e) {
    if (!s(t)) throw Error(c(299));
    var n = !1, l = "", u = Vd, i = $d, o = Zd;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = xm(
      t,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      u,
      i,
      o,
      jm
    ), t[Ml] = e.current, Rf(t), new Wf(e);
  }, Cu.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(c(299));
    var l = !1, u = "", i = Vd, o = $d, m = Zd, v = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (v = n.formState)), e = xm(
      t,
      1,
      !0,
      e,
      n ?? null,
      l,
      u,
      v,
      i,
      o,
      m,
      jm
    ), e.context = zm(null), n = e.current, l = Re(), l = qr(l), u = jn(l), u.callback = null, wn(n, u, l), n = l, e.current.lanes = n, Ba(e, n), tn(e), t[Ml] = e.current, Rf(t), new er(e);
  }, Cu.version = "19.2.0", Cu;
}
var Zm;
function Np() {
  if (Zm) return Pf.exports;
  Zm = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Pf.exports = Bp(), Pf.exports;
}
var Hp = Np(), jp = Object.defineProperty, wp = (a, r, f) => r in a ? jp(a, r, { enumerable: !0, configurable: !0, writable: !0, value: f }) : a[r] = f, lr = (a, r, f) => wp(a, typeof r != "symbol" ? r + "" : r, f);
const Gp = {
  stringify: (a) => a ? "true" : "false",
  parse: (a) => /^[ty1-9]/i.test(a)
}, qp = {
  stringify: (a) => a.name,
  parse: (a, r, f) => {
    const c = (() => {
      if (typeof window < "u" && a in window)
        return window[a];
      if (typeof global < "u" && a in global)
        return global[a];
    })();
    return typeof c == "function" ? c.bind(f) : void 0;
  }
}, Yp = {
  stringify: (a) => JSON.stringify(a),
  parse: (a) => JSON.parse(a)
};
function Lp(a) {
  return a.replace(
    /([a-z0-9])([A-Z])/g,
    (r, f, c) => `${f}-${c.toLowerCase()}`
  );
}
function Eh(a) {
  return a.replace(/[-:]([a-z])/g, (r, f) => `${f.toUpperCase()}`);
}
const Xp = {
  stringify: (a) => a.name,
  parse: (a, r, f) => {
    const c = (() => {
      const s = Eh(r);
      if (typeof f < "u" && s in f.container)
        return f.container[s];
    })();
    return typeof c == "function" ? c.bind(f) : void 0;
  }
}, Qp = {
  stringify: (a) => `${a}`,
  parse: (a) => parseFloat(a)
}, Vp = {
  stringify: (a) => a,
  parse: (a) => a
}, no = {
  string: Vp,
  number: Qp,
  boolean: Gp,
  function: qp,
  method: Xp,
  json: Yp
}, Eu = Symbol.for("r2wc.render"), ar = Symbol.for("r2wc.connected"), bl = Symbol.for("r2wc.context"), Ue = Symbol.for("r2wc.props");
function $p(a, r, f) {
  var c, s, d;
  r.props || (r.props = a.propTypes ? Object.keys(a.propTypes) : []), r.events || (r.events = []);
  const h = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), p = Array.isArray(r.events) ? r.events.slice() : Object.keys(r.events), b = {}, g = {}, O = {}, C = {};
  for (const H of h) {
    b[H] = Array.isArray(r.props) ? "string" : r.props[H];
    const D = Lp(H);
    O[H] = D, C[D] = H;
  }
  for (const H of p)
    g[H] = Array.isArray(r.events) ? {} : r.events[H];
  class U extends HTMLElement {
    constructor() {
      super(), lr(this, d, !0), lr(this, s), lr(this, c, {}), lr(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[Ue].container = this.container;
      for (const D of h) {
        const E = O[D], q = this.getAttribute(E), Q = b[D], Z = Q ? no[Q] : null;
        if (Q === "method") {
          const F = Eh(E);
          Object.defineProperty(this[Ue].container, F, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Ue][F];
            },
            set(k) {
              this[Ue][F] = k, this[Eu]();
            }
          }), this[Ue][D] = Z.parse(q, E, this);
        }
        Z != null && Z.parse && q && (this[Ue][D] = Z.parse(q, E, this));
      }
      for (const D of p)
        this[Ue][D] = (E) => {
          const q = D.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(q, { detail: E, ...g[D] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(C);
    }
    connectedCallback() {
      this[ar] = !0, this[Eu]();
    }
    disconnectedCallback() {
      this[ar] = !1, this[bl] && f.unmount(this[bl]), delete this[bl];
    }
    attributeChangedCallback(D, E, q) {
      const Q = C[D], Z = b[Q], F = Z ? no[Z] : null;
      Q in b && F != null && F.parse && q && (this[Ue][Q] = F.parse(q, D, this), this[Eu]());
    }
    [(d = ar, s = bl, c = Ue, Eu)]() {
      this[ar] && (this[bl] ? f.update(this[bl], this[Ue]) : this[bl] = f.mount(
        this.container,
        a,
        this[Ue]
      ));
    }
  }
  for (const H of h) {
    const D = O[H], E = b[H];
    Object.defineProperty(U.prototype, H, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ue][H];
      },
      set(q) {
        this[Ue][H] = q;
        const Q = E ? no[E] : null;
        if (Q != null && Q.stringify) {
          const Z = Q.stringify(q, D, this);
          this.getAttribute(D) !== Z && this.setAttribute(D, Z);
        } else
          this[Eu]();
      }
    });
  }
  return U;
}
function Zp(a, r, f) {
  const c = Hp.createRoot(a), s = To.createElement(r, f);
  return c.render(s), {
    root: c,
    ReactComponent: r
  };
}
function kp({ root: a, ReactComponent: r }, f) {
  const c = To.createElement(r, f);
  a.render(c);
}
function Kp({ root: a }) {
  a.unmount();
}
function Jp(a, r = {}) {
  return $p(a, r, { mount: Zp, update: kp, unmount: Kp });
}
var lo = { exports: {} }, xu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var km;
function Wp() {
  if (km) return xu;
  km = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function f(c, s, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      d = {};
      for (var p in s)
        p !== "key" && (d[p] = s[p]);
    } else d = s;
    return s = d.ref, {
      $$typeof: a,
      type: c,
      key: h,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return xu.Fragment = r, xu.jsx = f, xu.jsxs = f, xu;
}
var Km;
function Fp() {
  return Km || (Km = 1, lo.exports = Wp()), lo.exports;
}
var yt = Fp();
function El(a, ...r) {
  const f = new URL(`https://mui.com/production-error/?code=${a}`);
  return r.forEach((c) => f.searchParams.append("args[]", c)), `Minified MUI error #${a}; visit ${f} for the full message.`;
}
const xh = "$$material";
function oo() {
  return oo = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var f = arguments[r];
      for (var c in f) ({}).hasOwnProperty.call(f, c) && (a[c] = f[c]);
    }
    return a;
  }, oo.apply(null, arguments);
}
function Pp(a) {
  if (a.sheet)
    return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a)
      return document.styleSheets[r];
}
function Ip(a) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a.key), a.nonce !== void 0 && r.setAttribute("nonce", a.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var t1 = /* @__PURE__ */ (function() {
  function a(f) {
    var c = this;
    this._insertTag = function(s) {
      var d;
      c.tags.length === 0 ? c.insertionPoint ? d = c.insertionPoint.nextSibling : c.prepend ? d = c.container.firstChild : d = c.before : d = c.tags[c.tags.length - 1].nextSibling, c.container.insertBefore(s, d), c.tags.push(s);
    }, this.isSpeedy = f.speedy === void 0 ? !0 : f.speedy, this.tags = [], this.ctr = 0, this.nonce = f.nonce, this.key = f.key, this.container = f.container, this.prepend = f.prepend, this.insertionPoint = f.insertionPoint, this.before = null;
  }
  var r = a.prototype;
  return r.hydrate = function(c) {
    c.forEach(this._insertTag);
  }, r.insert = function(c) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ip(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var d = Pp(s);
      try {
        d.insertRule(c, d.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(c));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(c) {
      var s;
      return (s = c.parentNode) == null ? void 0 : s.removeChild(c);
    }), this.tags = [], this.ctr = 0;
  }, a;
})(), oe = "-ms-", sr = "-moz-", Ct = "-webkit-", zh = "comm", Ao = "rule", Co = "decl", e1 = "@import", Oh = "@keyframes", n1 = "@layer", l1 = Math.abs, gr = String.fromCharCode, a1 = Object.assign;
function u1(a, r) {
  return ce(a, 0) ^ 45 ? (((r << 2 ^ ce(a, 0)) << 2 ^ ce(a, 1)) << 2 ^ ce(a, 2)) << 2 ^ ce(a, 3) : 0;
}
function _h(a) {
  return a.trim();
}
function i1(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function Et(a, r, f) {
  return a.replace(r, f);
}
function so(a, r) {
  return a.indexOf(r);
}
function ce(a, r) {
  return a.charCodeAt(r) | 0;
}
function Uu(a, r, f) {
  return a.slice(r, f);
}
function nn(a) {
  return a.length;
}
function Eo(a) {
  return a.length;
}
function ur(a, r) {
  return r.push(a), a;
}
function r1(a, r) {
  return a.map(r).join("");
}
var pr = 1, Ca = 1, Mh = 0, Te = 0, It = 0, xa = "";
function vr(a, r, f, c, s, d, h) {
  return { value: a, root: r, parent: f, type: c, props: s, children: d, line: pr, column: Ca, length: h, return: "" };
}
function zu(a, r) {
  return a1(vr("", null, null, "", null, null, 0), a, { length: -a.length }, r);
}
function c1() {
  return It;
}
function f1() {
  return It = Te > 0 ? ce(xa, --Te) : 0, Ca--, It === 10 && (Ca = 1, pr--), It;
}
function Ne() {
  return It = Te < Mh ? ce(xa, Te++) : 0, Ca++, It === 10 && (Ca = 1, pr++), It;
}
function rn() {
  return ce(xa, Te);
}
function rr() {
  return Te;
}
function ju(a, r) {
  return Uu(xa, a, r);
}
function Bu(a) {
  switch (a) {
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
function Dh(a) {
  return pr = Ca = 1, Mh = nn(xa = a), Te = 0, [];
}
function Rh(a) {
  return xa = "", a;
}
function cr(a) {
  return _h(ju(Te - 1, mo(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function o1(a) {
  for (; (It = rn()) && It < 33; )
    Ne();
  return Bu(a) > 2 || Bu(It) > 3 ? "" : " ";
}
function s1(a, r) {
  for (; --r && Ne() && !(It < 48 || It > 102 || It > 57 && It < 65 || It > 70 && It < 97); )
    ;
  return ju(a, rr() + (r < 6 && rn() == 32 && Ne() == 32));
}
function mo(a) {
  for (; Ne(); )
    switch (It) {
      // ] ) " '
      case a:
        return Te;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && mo(It);
        break;
      // (
      case 40:
        a === 41 && mo(a);
        break;
      // \
      case 92:
        Ne();
        break;
    }
  return Te;
}
function d1(a, r) {
  for (; Ne() && a + It !== 57; )
    if (a + It === 84 && rn() === 47)
      break;
  return "/*" + ju(r, Te - 1) + "*" + gr(a === 47 ? a : Ne());
}
function m1(a) {
  for (; !Bu(rn()); )
    Ne();
  return ju(a, Te);
}
function h1(a) {
  return Rh(fr("", null, null, null, [""], a = Dh(a), 0, [0], a));
}
function fr(a, r, f, c, s, d, h, p, b) {
  for (var g = 0, O = 0, C = h, U = 0, H = 0, D = 0, E = 1, q = 1, Q = 1, Z = 0, F = "", k = s, lt = d, X = c, Y = F; q; )
    switch (D = Z, Z = Ne()) {
      // (
      case 40:
        if (D != 108 && ce(Y, C - 1) == 58) {
          so(Y += Et(cr(Z), "&", "&\f"), "&\f") != -1 && (Q = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        Y += cr(Z);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        Y += o1(D);
        break;
      // \
      case 92:
        Y += s1(rr() - 1, 7);
        continue;
      // /
      case 47:
        switch (rn()) {
          case 42:
          case 47:
            ur(y1(d1(Ne(), rr()), r, f), b);
            break;
          default:
            Y += "/";
        }
        break;
      // {
      case 123 * E:
        p[g++] = nn(Y) * Q;
      // } ; \0
      case 125 * E:
      case 59:
      case 0:
        switch (Z) {
          // \0 }
          case 0:
          case 125:
            q = 0;
          // ;
          case 59 + O:
            Q == -1 && (Y = Et(Y, /\f/g, "")), H > 0 && nn(Y) - C && ur(H > 32 ? Wm(Y + ";", c, f, C - 1) : Wm(Et(Y, " ", "") + ";", c, f, C - 2), b);
            break;
          // @ ;
          case 59:
            Y += ";";
          // { rule/at-rule
          default:
            if (ur(X = Jm(Y, r, f, g, O, s, p, F, k = [], lt = [], C), d), Z === 123)
              if (O === 0)
                fr(Y, r, X, X, k, d, C, p, lt);
              else
                switch (U === 99 && ce(Y, 3) === 110 ? 100 : U) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fr(a, X, X, c && ur(Jm(a, X, X, 0, 0, s, p, F, s, k = [], C), lt), s, lt, C, p, c ? k : lt);
                    break;
                  default:
                    fr(Y, X, X, X, [""], lt, 0, p, lt);
                }
        }
        g = O = H = 0, E = Q = 1, F = Y = "", C = h;
        break;
      // :
      case 58:
        C = 1 + nn(Y), H = D;
      default:
        if (E < 1) {
          if (Z == 123)
            --E;
          else if (Z == 125 && E++ == 0 && f1() == 125)
            continue;
        }
        switch (Y += gr(Z), Z * E) {
          // &
          case 38:
            Q = O > 0 ? 1 : (Y += "\f", -1);
            break;
          // ,
          case 44:
            p[g++] = (nn(Y) - 1) * Q, Q = 1;
            break;
          // @
          case 64:
            rn() === 45 && (Y += cr(Ne())), U = rn(), O = C = nn(F = Y += m1(rr())), Z++;
            break;
          // -
          case 45:
            D === 45 && nn(Y) == 2 && (E = 0);
        }
    }
  return d;
}
function Jm(a, r, f, c, s, d, h, p, b, g, O) {
  for (var C = s - 1, U = s === 0 ? d : [""], H = Eo(U), D = 0, E = 0, q = 0; D < c; ++D)
    for (var Q = 0, Z = Uu(a, C + 1, C = l1(E = h[D])), F = a; Q < H; ++Q)
      (F = _h(E > 0 ? U[Q] + " " + Z : Et(Z, /&\f/g, U[Q]))) && (b[q++] = F);
  return vr(a, r, f, s === 0 ? Ao : p, b, g, O);
}
function y1(a, r, f) {
  return vr(a, r, f, zh, gr(c1()), Uu(a, 2, -2), 0);
}
function Wm(a, r, f, c) {
  return vr(a, r, f, Co, Uu(a, 0, c), Uu(a, c + 1, -1), c);
}
function Sa(a, r) {
  for (var f = "", c = Eo(a), s = 0; s < c; s++)
    f += r(a[s], s, a, r) || "";
  return f;
}
function g1(a, r, f, c) {
  switch (a.type) {
    case n1:
      if (a.children.length) break;
    case e1:
    case Co:
      return a.return = a.return || a.value;
    case zh:
      return "";
    case Oh:
      return a.return = a.value + "{" + Sa(a.children, c) + "}";
    case Ao:
      a.value = a.props.join(",");
  }
  return nn(f = Sa(a.children, c)) ? a.return = a.value + "{" + f + "}" : "";
}
function p1(a) {
  var r = Eo(a);
  return function(f, c, s, d) {
    for (var h = "", p = 0; p < r; p++)
      h += a[p](f, c, s, d) || "";
    return h;
  };
}
function v1(a) {
  return function(r) {
    r.root || (r = r.return) && a(r);
  };
}
function Uh(a) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(f) {
    return r[f] === void 0 && (r[f] = a(f)), r[f];
  };
}
var b1 = function(r, f, c) {
  for (var s = 0, d = 0; s = d, d = rn(), s === 38 && d === 12 && (f[c] = 1), !Bu(d); )
    Ne();
  return ju(r, Te);
}, S1 = function(r, f) {
  var c = -1, s = 44;
  do
    switch (Bu(s)) {
      case 0:
        s === 38 && rn() === 12 && (f[c] = 1), r[c] += b1(Te - 1, f, c);
        break;
      case 2:
        r[c] += cr(s);
        break;
      case 4:
        if (s === 44) {
          r[++c] = rn() === 58 ? "&\f" : "", f[c] = r[c].length;
          break;
        }
      // fallthrough
      default:
        r[c] += gr(s);
    }
  while (s = Ne());
  return r;
}, T1 = function(r, f) {
  return Rh(S1(Dh(r), f));
}, Fm = /* @__PURE__ */ new WeakMap(), A1 = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var f = r.value, c = r.parent, s = r.column === c.column && r.line === c.line; c.type !== "rule"; )
      if (c = c.parent, !c) return;
    if (!(r.props.length === 1 && f.charCodeAt(0) !== 58 && !Fm.get(c)) && !s) {
      Fm.set(r, !0);
      for (var d = [], h = T1(f, d), p = c.props, b = 0, g = 0; b < h.length; b++)
        for (var O = 0; O < p.length; O++, g++)
          r.props[g] = d[b] ? h[b].replace(/&\f/g, p[O]) : p[O] + " " + h[b];
    }
  }
}, C1 = function(r) {
  if (r.type === "decl") {
    var f = r.value;
    // charcode for l
    f.charCodeAt(0) === 108 && // charcode for b
    f.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Bh(a, r) {
  switch (u1(a, r)) {
    // color-adjust
    case 5103:
      return Ct + "print-" + a + a;
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
      return Ct + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ct + a + sr + a + oe + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Ct + a + oe + a + a;
    // order
    case 6165:
      return Ct + a + oe + "flex-" + a + a;
    // align-items
    case 5187:
      return Ct + a + Et(a, /(\w+).+(:[^]+)/, Ct + "box-$1$2" + oe + "flex-$1$2") + a;
    // align-self
    case 5443:
      return Ct + a + oe + "flex-item-" + Et(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return Ct + a + oe + "flex-line-pack" + Et(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return Ct + a + oe + Et(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return Ct + a + oe + Et(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return Ct + "box-" + Et(a, "-grow", "") + Ct + a + oe + Et(a, "grow", "positive") + a;
    // transition
    case 4554:
      return Ct + Et(a, /([^-])(transform)/g, "$1" + Ct + "$2") + a;
    // cursor
    case 6187:
      return Et(Et(Et(a, /(zoom-|grab)/, Ct + "$1"), /(image-set)/, Ct + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return Et(a, /(image-set\([^]*)/, Ct + "$1$`$1");
    // justify-content
    case 4968:
      return Et(Et(a, /(.+:)(flex-)?(.*)/, Ct + "box-pack:$3" + oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ct + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Et(a, /(.+)-inline(.+)/, Ct + "$1$2") + a;
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
      if (nn(a) - 1 - r > 6) switch (ce(a, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ce(a, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Et(a, /(.+:)(.+)-([^]+)/, "$1" + Ct + "$2-$3$1" + sr + (ce(a, r + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~so(a, "stretch") ? Bh(Et(a, "stretch", "fill-available"), r) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (ce(a, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ce(a, nn(a) - 3 - (~so(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Et(a, ":", ":" + Ct) + a;
        // (inline-)?fl(e)x
        case 101:
          return Et(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ct + (ce(a, 14) === 45 ? "inline-" : "") + "box$3$1" + Ct + "$2$3$1" + oe + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (ce(a, r + 11)) {
        // vertical-l(r)
        case 114:
          return Ct + a + oe + Et(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return Ct + a + oe + Et(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return Ct + a + oe + Et(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Ct + a + oe + a + a;
  }
  return a;
}
var E1 = function(r, f, c, s) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Co:
      r.return = Bh(r.value, r.length);
      break;
    case Oh:
      return Sa([zu(r, {
        value: Et(r.value, "@", "@" + Ct)
      })], s);
    case Ao:
      if (r.length) return r1(r.props, function(d) {
        switch (i1(d, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Sa([zu(r, {
              props: [Et(d, /:(read-\w+)/, ":" + sr + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return Sa([zu(r, {
              props: [Et(d, /:(plac\w+)/, ":" + Ct + "input-$1")]
            }), zu(r, {
              props: [Et(d, /:(plac\w+)/, ":" + sr + "$1")]
            }), zu(r, {
              props: [Et(d, /:(plac\w+)/, oe + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, x1 = [E1], z1 = function(r) {
  var f = r.key;
  if (f === "css") {
    var c = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(c, function(E) {
      var q = E.getAttribute("data-emotion");
      q.indexOf(" ") !== -1 && (document.head.appendChild(E), E.setAttribute("data-s", ""));
    });
  }
  var s = r.stylisPlugins || x1, d = {}, h, p = [];
  h = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + f + ' "]'),
    function(E) {
      for (var q = E.getAttribute("data-emotion").split(" "), Q = 1; Q < q.length; Q++)
        d[q[Q]] = !0;
      p.push(E);
    }
  );
  var b, g = [A1, C1];
  {
    var O, C = [g1, v1(function(E) {
      O.insert(E);
    })], U = p1(g.concat(s, C)), H = function(q) {
      return Sa(h1(q), U);
    };
    b = function(q, Q, Z, F) {
      O = Z, H(q ? q + "{" + Q.styles + "}" : Q.styles), F && (D.inserted[Q.name] = !0);
    };
  }
  var D = {
    key: f,
    sheet: new t1({
      key: f,
      container: h,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: d,
    registered: {},
    insert: b
  };
  return D.sheet.hydrate(p), D;
}, O1 = !0;
function _1(a, r, f) {
  var c = "";
  return f.split(" ").forEach(function(s) {
    a[s] !== void 0 ? r.push(a[s] + ";") : s && (c += s + " ");
  }), c;
}
var Nh = function(r, f, c) {
  var s = r.key + "-" + f.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (c === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  O1 === !1) && r.registered[s] === void 0 && (r.registered[s] = f.styles);
}, M1 = function(r, f, c) {
  Nh(r, f, c);
  var s = r.key + "-" + f.name;
  if (r.inserted[f.name] === void 0) {
    var d = f;
    do
      r.insert(f === d ? "." + s : "", d, r.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function D1(a) {
  for (var r = 0, f, c = 0, s = a.length; s >= 4; ++c, s -= 4)
    f = a.charCodeAt(c) & 255 | (a.charCodeAt(++c) & 255) << 8 | (a.charCodeAt(++c) & 255) << 16 | (a.charCodeAt(++c) & 255) << 24, f = /* Math.imul(k, m): */
    (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16), f ^= /* k >>> r: */
    f >>> 24, r = /* Math.imul(k, m): */
    (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      r ^= (a.charCodeAt(c + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(c + 1) & 255) << 8;
    case 1:
      r ^= a.charCodeAt(c) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var R1 = {
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
}, U1 = /[A-Z]|^ms/g, B1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Hh = function(r) {
  return r.charCodeAt(1) === 45;
}, Pm = function(r) {
  return r != null && typeof r != "boolean";
}, ao = /* @__PURE__ */ Uh(function(a) {
  return Hh(a) ? a : a.replace(U1, "-$&").toLowerCase();
}), Im = function(r, f) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof f == "string")
        return f.replace(B1, function(c, s, d) {
          return ln = {
            name: s,
            styles: d,
            next: ln
          }, s;
        });
  }
  return R1[r] !== 1 && !Hh(r) && typeof f == "number" && f !== 0 ? f + "px" : f;
};
function Nu(a, r, f) {
  if (f == null)
    return "";
  var c = f;
  if (c.__emotion_styles !== void 0)
    return c;
  switch (typeof f) {
    case "boolean":
      return "";
    case "object": {
      var s = f;
      if (s.anim === 1)
        return ln = {
          name: s.name,
          styles: s.styles,
          next: ln
        }, s.name;
      var d = f;
      if (d.styles !== void 0) {
        var h = d.next;
        if (h !== void 0)
          for (; h !== void 0; )
            ln = {
              name: h.name,
              styles: h.styles,
              next: ln
            }, h = h.next;
        var p = d.styles + ";";
        return p;
      }
      return N1(a, r, f);
    }
    case "function": {
      if (a !== void 0) {
        var b = ln, g = f(a);
        return ln = b, Nu(a, r, g);
      }
      break;
    }
  }
  var O = f;
  if (r == null)
    return O;
  var C = r[O];
  return C !== void 0 ? C : O;
}
function N1(a, r, f) {
  var c = "";
  if (Array.isArray(f))
    for (var s = 0; s < f.length; s++)
      c += Nu(a, r, f[s]) + ";";
  else
    for (var d in f) {
      var h = f[d];
      if (typeof h != "object") {
        var p = h;
        r != null && r[p] !== void 0 ? c += d + "{" + r[p] + "}" : Pm(p) && (c += ao(d) + ":" + Im(d, p) + ";");
      } else if (Array.isArray(h) && typeof h[0] == "string" && (r == null || r[h[0]] === void 0))
        for (var b = 0; b < h.length; b++)
          Pm(h[b]) && (c += ao(d) + ":" + Im(d, h[b]) + ";");
      else {
        var g = Nu(a, r, h);
        switch (d) {
          case "animation":
          case "animationName": {
            c += ao(d) + ":" + g + ";";
            break;
          }
          default:
            c += d + "{" + g + "}";
        }
      }
    }
  return c;
}
var th = /label:\s*([^\s;{]+)\s*(;|$)/g, ln;
function jh(a, r, f) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var c = !0, s = "";
  ln = void 0;
  var d = a[0];
  if (d == null || d.raw === void 0)
    c = !1, s += Nu(f, r, d);
  else {
    var h = d;
    s += h[0];
  }
  for (var p = 1; p < a.length; p++)
    if (s += Nu(f, r, a[p]), c) {
      var b = d;
      s += b[p];
    }
  th.lastIndex = 0;
  for (var g = "", O; (O = th.exec(s)) !== null; )
    g += "-" + O[1];
  var C = D1(s) + g;
  return {
    name: C,
    styles: s,
    next: ln
  };
}
var H1 = function(r) {
  return r();
}, j1 = Ym.useInsertionEffect ? Ym.useInsertionEffect : !1, w1 = j1 || H1, wh = /* @__PURE__ */ vt.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ z1({
    key: "css"
  }) : null
);
wh.Provider;
var G1 = function(r) {
  return /* @__PURE__ */ vt.forwardRef(function(f, c) {
    var s = vt.useContext(wh);
    return r(f, s, c);
  });
}, Gh = /* @__PURE__ */ vt.createContext({}), q1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Y1 = /* @__PURE__ */ Uh(
  function(a) {
    return q1.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), L1 = Y1, X1 = function(r) {
  return r !== "theme";
}, eh = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? L1 : X1;
}, nh = function(r, f, c) {
  var s;
  if (f) {
    var d = f.shouldForwardProp;
    s = r.__emotion_forwardProp && d ? function(h) {
      return r.__emotion_forwardProp(h) && d(h);
    } : d;
  }
  return typeof s != "function" && c && (s = r.__emotion_forwardProp), s;
}, Q1 = function(r) {
  var f = r.cache, c = r.serialized, s = r.isStringTag;
  return Nh(f, c, s), w1(function() {
    return M1(f, c, s);
  }), null;
}, V1 = function a(r, f) {
  var c = r.__emotion_real === r, s = c && r.__emotion_base || r, d, h;
  f !== void 0 && (d = f.label, h = f.target);
  var p = nh(r, f, c), b = p || eh(s), g = !b("as");
  return function() {
    var O = arguments, C = c && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (d !== void 0 && C.push("label:" + d + ";"), O[0] == null || O[0].raw === void 0)
      C.push.apply(C, O);
    else {
      var U = O[0];
      C.push(U[0]);
      for (var H = O.length, D = 1; D < H; D++)
        C.push(O[D], U[D]);
    }
    var E = G1(function(q, Q, Z) {
      var F = g && q.as || s, k = "", lt = [], X = q;
      if (q.theme == null) {
        X = {};
        for (var Y in q)
          X[Y] = q[Y];
        X.theme = vt.useContext(Gh);
      }
      typeof q.className == "string" ? k = _1(Q.registered, lt, q.className) : q.className != null && (k = q.className + " ");
      var gt = jh(C.concat(lt), Q.registered, X);
      k += Q.key + "-" + gt.name, h !== void 0 && (k += " " + h);
      var dt = g && p === void 0 ? eh(F) : b, jt = {};
      for (var ct in q)
        g && ct === "as" || dt(ct) && (jt[ct] = q[ct]);
      return jt.className = k, Z && (jt.ref = Z), /* @__PURE__ */ vt.createElement(vt.Fragment, null, /* @__PURE__ */ vt.createElement(Q1, {
        cache: Q,
        serialized: gt,
        isStringTag: typeof F == "string"
      }), /* @__PURE__ */ vt.createElement(F, jt));
    });
    return E.displayName = d !== void 0 ? d : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", E.defaultProps = r.defaultProps, E.__emotion_real = E, E.__emotion_base = s, E.__emotion_styles = C, E.__emotion_forwardProp = p, Object.defineProperty(E, "toString", {
      value: function() {
        return "." + h;
      }
    }), E.withComponent = function(q, Q) {
      var Z = a(q, oo({}, f, Q, {
        shouldForwardProp: nh(E, Q, !0)
      }));
      return Z.apply(void 0, C);
    }, E;
  };
}, $1 = [
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
], ho = V1.bind(null);
$1.forEach(function(a) {
  ho[a] = ho(a);
});
function Z1(a, r) {
  return ho(a, r);
}
function k1(a, r) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = r(a.__emotion_styles));
}
const lh = [];
function Cl(a) {
  return lh[0] = a, jh(lh);
}
var uo = { exports: {} }, Nt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ah;
function K1() {
  if (ah) return Nt;
  ah = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), U = Symbol.for("react.view_transition"), H = Symbol.for("react.client.reference");
  function D(E) {
    if (typeof E == "object" && E !== null) {
      var q = E.$$typeof;
      switch (q) {
        case a:
          switch (E = E.type, E) {
            case f:
            case s:
            case c:
            case b:
            case g:
            case U:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case h:
                case p:
                case C:
                case O:
                  return E;
                case d:
                  return E;
                default:
                  return q;
              }
          }
        case r:
          return q;
      }
    }
  }
  return Nt.ContextConsumer = d, Nt.ContextProvider = h, Nt.Element = a, Nt.ForwardRef = p, Nt.Fragment = f, Nt.Lazy = C, Nt.Memo = O, Nt.Portal = r, Nt.Profiler = s, Nt.StrictMode = c, Nt.Suspense = b, Nt.SuspenseList = g, Nt.isContextConsumer = function(E) {
    return D(E) === d;
  }, Nt.isContextProvider = function(E) {
    return D(E) === h;
  }, Nt.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }, Nt.isForwardRef = function(E) {
    return D(E) === p;
  }, Nt.isFragment = function(E) {
    return D(E) === f;
  }, Nt.isLazy = function(E) {
    return D(E) === C;
  }, Nt.isMemo = function(E) {
    return D(E) === O;
  }, Nt.isPortal = function(E) {
    return D(E) === r;
  }, Nt.isProfiler = function(E) {
    return D(E) === s;
  }, Nt.isStrictMode = function(E) {
    return D(E) === c;
  }, Nt.isSuspense = function(E) {
    return D(E) === b;
  }, Nt.isSuspenseList = function(E) {
    return D(E) === g;
  }, Nt.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === f || E === s || E === c || E === b || E === g || typeof E == "object" && E !== null && (E.$$typeof === C || E.$$typeof === O || E.$$typeof === h || E.$$typeof === d || E.$$typeof === p || E.$$typeof === H || E.getModuleId !== void 0);
  }, Nt.typeOf = D, Nt;
}
var uh;
function J1() {
  return uh || (uh = 1, uo.exports = /* @__PURE__ */ K1()), uo.exports;
}
var qh = /* @__PURE__ */ J1();
function un(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const r = Object.getPrototypeOf(a);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function Yh(a) {
  if (/* @__PURE__ */ vt.isValidElement(a) || qh.isValidElementType(a) || !un(a))
    return a;
  const r = {};
  return Object.keys(a).forEach((f) => {
    r[f] = Yh(a[f]);
  }), r;
}
function me(a, r, f = {
  clone: !0
}) {
  const c = f.clone ? {
    ...a
  } : a;
  return un(a) && un(r) && Object.keys(r).forEach((s) => {
    /* @__PURE__ */ vt.isValidElement(r[s]) || qh.isValidElementType(r[s]) ? c[s] = r[s] : un(r[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, s) && un(a[s]) ? c[s] = me(a[s], r[s], f) : f.clone ? c[s] = un(r[s]) ? Yh(r[s]) : r[s] : c[s] = r[s];
  }), c;
}
const W1 = (a) => {
  const r = Object.keys(a).map((f) => ({
    key: f,
    val: a[f]
  })) || [];
  return r.sort((f, c) => f.val - c.val), r.reduce((f, c) => ({
    ...f,
    [c.key]: c.val
  }), {});
};
function F1(a) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
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
    unit: f = "px",
    step: c = 5,
    ...s
  } = a, d = W1(r), h = Object.keys(d);
  function p(U) {
    return `@media (min-width:${typeof r[U] == "number" ? r[U] : U}${f})`;
  }
  function b(U) {
    return `@media (max-width:${(typeof r[U] == "number" ? r[U] : U) - c / 100}${f})`;
  }
  function g(U, H) {
    const D = h.indexOf(H);
    return `@media (min-width:${typeof r[U] == "number" ? r[U] : U}${f}) and (max-width:${(D !== -1 && typeof r[h[D]] == "number" ? r[h[D]] : H) - c / 100}${f})`;
  }
  function O(U) {
    return h.indexOf(U) + 1 < h.length ? g(U, h[h.indexOf(U) + 1]) : p(U);
  }
  function C(U) {
    const H = h.indexOf(U);
    return H === 0 ? p(h[1]) : H === h.length - 1 ? b(h[H]) : g(U, h[h.indexOf(U) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: h,
    values: d,
    up: p,
    down: b,
    between: g,
    only: O,
    not: C,
    unit: f,
    ...s
  };
}
function ih(a, r) {
  if (!a.containerQueries)
    return r;
  const f = Object.keys(r).filter((c) => c.startsWith("@container")).sort((c, s) => {
    const d = /min-width:\s*([0-9.]+)/;
    return +(c.match(d)?.[1] || 0) - +(s.match(d)?.[1] || 0);
  });
  return f.length ? f.reduce((c, s) => {
    const d = r[s];
    return delete c[s], c[s] = d, c;
  }, {
    ...r
  }) : r;
}
function P1(a, r) {
  return r === "@" || r.startsWith("@") && (a.some((f) => r.startsWith(`@${f}`)) || !!r.match(/^@\d/));
}
function I1(a, r) {
  const f = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!f)
    return null;
  const [, c, s] = f, d = Number.isNaN(+c) ? c || 0 : +c;
  return a.containerQueries(s).up(d);
}
function tv(a) {
  const r = (d, h) => d.replace("@media", h ? `@container ${h}` : "@container");
  function f(d, h) {
    d.up = (...p) => r(a.breakpoints.up(...p), h), d.down = (...p) => r(a.breakpoints.down(...p), h), d.between = (...p) => r(a.breakpoints.between(...p), h), d.only = (...p) => r(a.breakpoints.only(...p), h), d.not = (...p) => {
      const b = r(a.breakpoints.not(...p), h);
      return b.includes("not all and") ? b.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : b;
    };
  }
  const c = {}, s = (d) => (f(c, d), c);
  return f(s), {
    ...a,
    containerQueries: s
  };
}
const ev = {
  borderRadius: 4
};
function Ru(a, r) {
  return r ? me(a, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : a;
}
const br = {
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
}, rh = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${br[a]}px)`
}, nv = {
  containerQueries: (a) => ({
    up: (r) => {
      let f = typeof r == "number" ? r : br[r] || r;
      return typeof f == "number" && (f = `${f}px`), a ? `@container ${a} (min-width:${f})` : `@container (min-width:${f})`;
    }
  })
};
function We(a, r, f) {
  const c = a.theme || {};
  if (Array.isArray(r)) {
    const d = c.breakpoints || rh;
    return r.reduce((h, p, b) => (h[d.up(d.keys[b])] = f(r[b]), h), {});
  }
  if (typeof r == "object") {
    const d = c.breakpoints || rh;
    return Object.keys(r).reduce((h, p) => {
      if (P1(d.keys, p)) {
        const b = I1(c.containerQueries ? c : nv, p);
        b && (h[b] = f(r[p], p));
      } else if (Object.keys(d.values || br).includes(p)) {
        const b = d.up(p);
        h[b] = f(r[p], p);
      } else {
        const b = p;
        h[b] = r[b];
      }
      return h;
    }, {});
  }
  return f(r);
}
function Lh(a = {}) {
  return a.keys?.reduce((f, c) => {
    const s = a.up(c);
    return f[s] = {}, f;
  }, {}) || {};
}
function yo(a, r) {
  return a.reduce((f, c) => {
    const s = f[c];
    return (!s || Object.keys(s).length === 0) && delete f[c], f;
  }, r);
}
function lv(a, ...r) {
  const f = Lh(a), c = [f, ...r].reduce((s, d) => me(s, d), {});
  return yo(Object.keys(f), c);
}
function av(a, r) {
  if (typeof a != "object")
    return {};
  const f = {}, c = Object.keys(r);
  return Array.isArray(a) ? c.forEach((s, d) => {
    d < a.length && (f[s] = !0);
  }) : c.forEach((s) => {
    a[s] != null && (f[s] = !0);
  }), f;
}
function io({
  values: a,
  breakpoints: r,
  base: f
}) {
  const c = f || av(a, r), s = Object.keys(c);
  if (s.length === 0)
    return a;
  let d;
  return s.reduce((h, p, b) => (Array.isArray(a) ? (h[p] = a[b] != null ? a[b] : a[d], d = b) : typeof a == "object" ? (h[p] = a[p] != null ? a[p] : a[d], d = p) : h[p] = a, h), {});
}
function cn(a) {
  if (typeof a != "string")
    throw new Error(El(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function an(a, r, f = !0) {
  if (!r || typeof r != "string")
    return null;
  if (a && a.vars && f) {
    const c = `vars.${r}`.split(".").reduce((s, d) => s && s[d] ? s[d] : null, a);
    if (c != null)
      return c;
  }
  return r.split(".").reduce((c, s) => c && c[s] != null ? c[s] : null, a);
}
function dr(a, r, f, c = f) {
  let s;
  return typeof a == "function" ? s = a(f) : Array.isArray(a) ? s = a[f] || c : s = an(a, f) || c, r && (s = r(s, c, a)), s;
}
function Kt(a) {
  const {
    prop: r,
    cssProperty: f = a.prop,
    themeKey: c,
    transform: s
  } = a, d = (h) => {
    if (h[r] == null)
      return null;
    const p = h[r], b = h.theme, g = an(b, c) || {};
    return We(h, p, (C) => {
      let U = dr(g, s, C);
      return C === U && typeof C == "string" && (U = dr(g, s, `${r}${C === "default" ? "" : cn(C)}`, C)), f === !1 ? U : {
        [f]: U
      };
    });
  };
  return d.propTypes = {}, d.filterProps = [r], d;
}
function uv(a) {
  const r = {};
  return (f) => (r[f] === void 0 && (r[f] = a(f)), r[f]);
}
const iv = {
  m: "margin",
  p: "padding"
}, rv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ch = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, cv = uv((a) => {
  if (a.length > 2)
    if (ch[a])
      a = ch[a];
    else
      return [a];
  const [r, f] = a.split(""), c = iv[r], s = rv[f] || "";
  return Array.isArray(s) ? s.map((d) => c + d) : [c + s];
}), xo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], zo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...xo, ...zo];
function wu(a, r, f, c) {
  const s = an(a, r, !0) ?? f;
  return typeof s == "number" || typeof s == "string" ? (d) => typeof d == "string" ? d : typeof s == "string" ? s.startsWith("var(") && d === 0 ? 0 : s.startsWith("var(") && d === 1 ? s : `calc(${d} * ${s})` : s * d : Array.isArray(s) ? (d) => {
    if (typeof d == "string")
      return d;
    const h = Math.abs(d), p = s[h];
    return d >= 0 ? p : typeof p == "number" ? -p : typeof p == "string" && p.startsWith("var(") ? `calc(-1 * ${p})` : `-${p}`;
  } : typeof s == "function" ? s : () => {
  };
}
function Sr(a) {
  return wu(a, "spacing", 8);
}
function xl(a, r) {
  return typeof r == "string" || r == null ? r : a(r);
}
function fv(a, r) {
  return (f) => a.reduce((c, s) => (c[s] = xl(r, f), c), {});
}
function ov(a, r, f, c) {
  if (!r.includes(f))
    return null;
  const s = cv(f), d = fv(s, c), h = a[f];
  return We(a, h, d);
}
function Xh(a, r) {
  const f = Sr(a.theme);
  return Object.keys(a).map((c) => ov(a, r, c, f)).reduce(Ru, {});
}
function Qt(a) {
  return Xh(a, xo);
}
Qt.propTypes = {};
Qt.filterProps = xo;
function Vt(a) {
  return Xh(a, zo);
}
Vt.propTypes = {};
Vt.filterProps = zo;
function Qh(a = 8, r = Sr({
  spacing: a
})) {
  if (a.mui)
    return a;
  const f = (...c) => (c.length === 0 ? [1] : c).map((d) => {
    const h = r(d);
    return typeof h == "number" ? `${h}px` : h;
  }).join(" ");
  return f.mui = !0, f;
}
function Tr(...a) {
  const r = a.reduce((c, s) => (s.filterProps.forEach((d) => {
    c[d] = s;
  }), c), {}), f = (c) => Object.keys(c).reduce((s, d) => r[d] ? Ru(s, r[d](c)) : s, {});
  return f.propTypes = {}, f.filterProps = a.reduce((c, s) => c.concat(s.filterProps), []), f;
}
function $e(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function Ze(a, r) {
  return Kt({
    prop: a,
    themeKey: "borders",
    transform: r
  });
}
const sv = Ze("border", $e), dv = Ze("borderTop", $e), mv = Ze("borderRight", $e), hv = Ze("borderBottom", $e), yv = Ze("borderLeft", $e), gv = Ze("borderColor"), pv = Ze("borderTopColor"), vv = Ze("borderRightColor"), bv = Ze("borderBottomColor"), Sv = Ze("borderLeftColor"), Tv = Ze("outline", $e), Av = Ze("outlineColor"), Ar = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const r = wu(a.theme, "shape.borderRadius", 4), f = (c) => ({
      borderRadius: xl(r, c)
    });
    return We(a, a.borderRadius, f);
  }
  return null;
};
Ar.propTypes = {};
Ar.filterProps = ["borderRadius"];
Tr(sv, dv, mv, hv, yv, gv, pv, vv, bv, Sv, Ar, Tv, Av);
const Cr = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const r = wu(a.theme, "spacing", 8), f = (c) => ({
      gap: xl(r, c)
    });
    return We(a, a.gap, f);
  }
  return null;
};
Cr.propTypes = {};
Cr.filterProps = ["gap"];
const Er = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const r = wu(a.theme, "spacing", 8), f = (c) => ({
      columnGap: xl(r, c)
    });
    return We(a, a.columnGap, f);
  }
  return null;
};
Er.propTypes = {};
Er.filterProps = ["columnGap"];
const xr = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const r = wu(a.theme, "spacing", 8), f = (c) => ({
      rowGap: xl(r, c)
    });
    return We(a, a.rowGap, f);
  }
  return null;
};
xr.propTypes = {};
xr.filterProps = ["rowGap"];
const Cv = Kt({
  prop: "gridColumn"
}), Ev = Kt({
  prop: "gridRow"
}), xv = Kt({
  prop: "gridAutoFlow"
}), zv = Kt({
  prop: "gridAutoColumns"
}), Ov = Kt({
  prop: "gridAutoRows"
}), _v = Kt({
  prop: "gridTemplateColumns"
}), Mv = Kt({
  prop: "gridTemplateRows"
}), Dv = Kt({
  prop: "gridTemplateAreas"
}), Rv = Kt({
  prop: "gridArea"
});
Tr(Cr, Er, xr, Cv, Ev, xv, zv, Ov, _v, Mv, Dv, Rv);
function Ta(a, r) {
  return r === "grey" ? r : a;
}
const Uv = Kt({
  prop: "color",
  themeKey: "palette",
  transform: Ta
}), Bv = Kt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ta
}), Nv = Kt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ta
});
Tr(Uv, Bv, Nv);
function Be(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const Hv = Kt({
  prop: "width",
  transform: Be
}), Oo = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const r = (f) => {
      const c = a.theme?.breakpoints?.values?.[f] || br[f];
      return c ? a.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${c}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: c
      } : {
        maxWidth: Be(f)
      };
    };
    return We(a, a.maxWidth, r);
  }
  return null;
};
Oo.filterProps = ["maxWidth"];
const jv = Kt({
  prop: "minWidth",
  transform: Be
}), wv = Kt({
  prop: "height",
  transform: Be
}), Gv = Kt({
  prop: "maxHeight",
  transform: Be
}), qv = Kt({
  prop: "minHeight",
  transform: Be
});
Kt({
  prop: "size",
  cssProperty: "width",
  transform: Be
});
Kt({
  prop: "size",
  cssProperty: "height",
  transform: Be
});
const Yv = Kt({
  prop: "boxSizing"
});
Tr(Hv, Oo, jv, wv, Gv, qv, Yv);
const Gu = {
  // borders
  border: {
    themeKey: "borders",
    transform: $e
  },
  borderTop: {
    themeKey: "borders",
    transform: $e
  },
  borderRight: {
    themeKey: "borders",
    transform: $e
  },
  borderBottom: {
    themeKey: "borders",
    transform: $e
  },
  borderLeft: {
    themeKey: "borders",
    transform: $e
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
    transform: $e
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ar
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ta
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ta
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ta
  },
  // spacing
  p: {
    style: Vt
  },
  pt: {
    style: Vt
  },
  pr: {
    style: Vt
  },
  pb: {
    style: Vt
  },
  pl: {
    style: Vt
  },
  px: {
    style: Vt
  },
  py: {
    style: Vt
  },
  padding: {
    style: Vt
  },
  paddingTop: {
    style: Vt
  },
  paddingRight: {
    style: Vt
  },
  paddingBottom: {
    style: Vt
  },
  paddingLeft: {
    style: Vt
  },
  paddingX: {
    style: Vt
  },
  paddingY: {
    style: Vt
  },
  paddingInline: {
    style: Vt
  },
  paddingInlineStart: {
    style: Vt
  },
  paddingInlineEnd: {
    style: Vt
  },
  paddingBlock: {
    style: Vt
  },
  paddingBlockStart: {
    style: Vt
  },
  paddingBlockEnd: {
    style: Vt
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
    transform: (a) => ({
      "@media print": {
        display: a
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
    style: Cr
  },
  rowGap: {
    style: xr
  },
  columnGap: {
    style: Er
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
    transform: Be
  },
  maxWidth: {
    style: Oo
  },
  minWidth: {
    transform: Be
  },
  height: {
    transform: Be
  },
  maxHeight: {
    transform: Be
  },
  minHeight: {
    transform: Be
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
function Lv(...a) {
  const r = a.reduce((c, s) => c.concat(Object.keys(s)), []), f = new Set(r);
  return a.every((c) => f.size === Object.keys(c).length);
}
function Xv(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function Qv() {
  function a(f, c, s, d) {
    const h = {
      [f]: c,
      theme: s
    }, p = d[f];
    if (!p)
      return {
        [f]: c
      };
    const {
      cssProperty: b = f,
      themeKey: g,
      transform: O,
      style: C
    } = p;
    if (c == null)
      return null;
    if (g === "typography" && c === "inherit")
      return {
        [f]: c
      };
    const U = an(s, g) || {};
    return C ? C(h) : We(h, c, (D) => {
      let E = dr(U, O, D);
      return D === E && typeof D == "string" && (E = dr(U, O, `${f}${D === "default" ? "" : cn(D)}`, D)), b === !1 ? E : {
        [b]: E
      };
    });
  }
  function r(f) {
    const {
      sx: c,
      theme: s = {},
      nested: d
    } = f || {};
    if (!c)
      return null;
    const h = s.unstable_sxConfig ?? Gu;
    function p(b) {
      let g = b;
      if (typeof b == "function")
        g = b(s);
      else if (typeof b != "object")
        return b;
      if (!g)
        return null;
      const O = Lh(s.breakpoints), C = Object.keys(O);
      let U = O;
      return Object.keys(g).forEach((H) => {
        const D = Xv(g[H], s);
        if (D != null)
          if (typeof D == "object")
            if (h[H])
              U = Ru(U, a(H, D, s, h));
            else {
              const E = We({
                theme: s
              }, D, (q) => ({
                [H]: q
              }));
              Lv(E, D) ? U[H] = r({
                sx: D,
                theme: s,
                nested: !0
              }) : U = Ru(U, E);
            }
          else
            U = Ru(U, a(H, D, s, h));
      }), !d && s.modularCssLayers ? {
        "@layer sx": ih(s, yo(C, U))
      } : ih(s, yo(C, U));
    }
    return Array.isArray(c) ? c.map(p) : p(c);
  }
  return r;
}
const Ea = Qv();
Ea.filterProps = ["sx"];
function Vv(a, r) {
  const f = this;
  if (f.vars) {
    if (!f.colorSchemes?.[a] || typeof f.getColorSchemeSelector != "function")
      return {};
    let c = f.getColorSchemeSelector(a);
    return c === "&" ? r : ((c.includes("data-") || c.includes(".")) && (c = `*:where(${c.replace(/\s*&$/, "")}) &`), {
      [c]: r
    });
  }
  return f.palette.mode === a ? r : {};
}
function za(a = {}, ...r) {
  const {
    breakpoints: f = {},
    palette: c = {},
    spacing: s,
    shape: d = {},
    ...h
  } = a, p = F1(f), b = Qh(s);
  let g = me({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...c
    },
    spacing: b,
    shape: {
      ...ev,
      ...d
    }
  }, h);
  return g = tv(g), g.applyStyles = Vv, g = r.reduce((O, C) => me(O, C), g), g.unstable_sxConfig = {
    ...Gu,
    ...h?.unstable_sxConfig
  }, g.unstable_sx = function(C) {
    return Ea({
      sx: C,
      theme: this
    });
  }, g;
}
function $v(a) {
  return Object.keys(a).length === 0;
}
function Zv(a = null) {
  const r = vt.useContext(Gh);
  return !r || $v(r) ? a : r;
}
const kv = za();
function _o(a = kv) {
  return Zv(a);
}
const Kv = (a) => {
  const r = {
    systemProps: {},
    otherProps: {}
  }, f = a?.theme?.unstable_sxConfig ?? Gu;
  return Object.keys(a).forEach((c) => {
    f[c] ? r.systemProps[c] = a[c] : r.otherProps[c] = a[c];
  }), r;
};
function Mo(a) {
  const {
    sx: r,
    ...f
  } = a, {
    systemProps: c,
    otherProps: s
  } = Kv(f);
  let d;
  return Array.isArray(r) ? d = [c, ...r] : typeof r == "function" ? d = (...h) => {
    const p = r(...h);
    return un(p) ? {
      ...c,
      ...p
    } : c;
  } : d = {
    ...c,
    ...r
  }, {
    ...s,
    sx: d
  };
}
const fh = (a) => a, Jv = () => {
  let a = fh;
  return {
    configure(r) {
      a = r;
    },
    generate(r) {
      return a(r);
    },
    reset() {
      a = fh;
    }
  };
}, Wv = Jv();
function Vh(a) {
  var r, f, c = "";
  if (typeof a == "string" || typeof a == "number") c += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var s = a.length;
    for (r = 0; r < s; r++) a[r] && (f = Vh(a[r])) && (c && (c += " "), c += f);
  } else for (f in a) a[f] && (c && (c += " "), c += f);
  return c;
}
function zl() {
  for (var a, r, f = 0, c = "", s = arguments.length; f < s; f++) (a = arguments[f]) && (r = Vh(a)) && (c && (c += " "), c += r);
  return c;
}
const Fv = {
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
function Ol(a, r, f = "Mui") {
  const c = Fv[r];
  return c ? `${f}-${c}` : `${Wv.generate(a)}-${r}`;
}
function Do(a, r, f = "Mui") {
  const c = {};
  return r.forEach((s) => {
    c[s] = Ol(a, s, f);
  }), c;
}
function $h(a) {
  const {
    variants: r,
    ...f
  } = a, c = {
    variants: r,
    style: Cl(f),
    isProcessed: !0
  };
  return c.style === f || r && r.forEach((s) => {
    typeof s.style != "function" && (s.style = Cl(s.style));
  }), c;
}
const Pv = za();
function ro(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function Al(a, r) {
  return r && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${r}{${String(a.styles)}}`), a;
}
function Iv(a) {
  return a ? (r, f) => f[a] : null;
}
function tb(a, r, f) {
  a.theme = nb(a.theme) ? f : a.theme[r] || a.theme;
}
function or(a, r, f) {
  const c = typeof r == "function" ? r(a) : r;
  if (Array.isArray(c))
    return c.flatMap((s) => or(a, s, f));
  if (Array.isArray(c?.variants)) {
    let s;
    if (c.isProcessed)
      s = f ? Al(c.style, f) : c.style;
    else {
      const {
        variants: d,
        ...h
      } = c;
      s = f ? Al(Cl(h), f) : h;
    }
    return Zh(a, c.variants, [s], f);
  }
  return c?.isProcessed ? f ? Al(Cl(c.style), f) : c.style : f ? Al(Cl(c), f) : c;
}
function Zh(a, r, f = [], c = void 0) {
  let s;
  t: for (let d = 0; d < r.length; d += 1) {
    const h = r[d];
    if (typeof h.props == "function") {
      if (s ??= {
        ...a,
        ...a.ownerState,
        ownerState: a.ownerState
      }, !h.props(s))
        continue;
    } else
      for (const p in h.props)
        if (a[p] !== h.props[p] && a.ownerState?.[p] !== h.props[p])
          continue t;
    typeof h.style == "function" ? (s ??= {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }, f.push(c ? Al(Cl(h.style(s)), c) : h.style(s))) : f.push(c ? Al(Cl(h.style), c) : h.style);
  }
  return f;
}
function kh(a = {}) {
  const {
    themeId: r,
    defaultTheme: f = Pv,
    rootShouldForwardProp: c = ro,
    slotShouldForwardProp: s = ro
  } = a;
  function d(p) {
    tb(p, r, f);
  }
  return (p, b = {}) => {
    k1(p, (X) => X.filter((Y) => Y !== Ea));
    const {
      name: g,
      slot: O,
      skipVariantsResolver: C,
      skipSx: U,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: H = Iv(ab(O)),
      ...D
    } = b, E = g && g.startsWith("Mui") || O ? "components" : "custom", q = C !== void 0 ? C : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      O && O !== "Root" && O !== "root" || !1
    ), Q = U || !1;
    let Z = ro;
    O === "Root" || O === "root" ? Z = c : O ? Z = s : lb(p) && (Z = void 0);
    const F = Z1(p, {
      shouldForwardProp: Z,
      label: eb(),
      ...D
    }), k = (X) => {
      if (X.__emotion_real === X)
        return X;
      if (typeof X == "function")
        return function(gt) {
          return or(gt, X, gt.theme.modularCssLayers ? E : void 0);
        };
      if (un(X)) {
        const Y = $h(X);
        return function(dt) {
          return Y.variants ? or(dt, Y, dt.theme.modularCssLayers ? E : void 0) : dt.theme.modularCssLayers ? Al(Y.style, E) : Y.style;
        };
      }
      return X;
    }, lt = (...X) => {
      const Y = [], gt = X.map(k), dt = [];
      if (Y.push(d), g && H && dt.push(function(J) {
        const et = J.theme.components?.[g]?.styleOverrides;
        if (!et)
          return null;
        const M = {};
        for (const L in et)
          M[L] = or(J, et[L], J.theme.modularCssLayers ? "theme" : void 0);
        return H(J, M);
      }), g && !q && dt.push(function(J) {
        const et = J.theme?.components?.[g]?.variants;
        return et ? Zh(J, et, [], J.theme.modularCssLayers ? "theme" : void 0) : null;
      }), Q || dt.push(Ea), Array.isArray(gt[0])) {
        const y = gt.shift(), J = new Array(Y.length).fill(""), V = new Array(dt.length).fill("");
        let et;
        et = [...J, ...y, ...V], et.raw = [...J, ...y.raw, ...V], Y.unshift(et);
      }
      const jt = [...Y, ...gt, ...dt], ct = F(...jt);
      return p.muiName && (ct.muiName = p.muiName), ct;
    };
    return F.withConfig && (lt.withConfig = F.withConfig), lt;
  };
}
function eb(a, r) {
  return void 0;
}
function nb(a) {
  for (const r in a)
    return !1;
  return !0;
}
function lb(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function ab(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
const Ro = kh();
function mr(a, r, f = !1) {
  const c = {
    ...r
  };
  for (const s in a)
    if (Object.prototype.hasOwnProperty.call(a, s)) {
      const d = s;
      if (d === "components" || d === "slots")
        c[d] = {
          ...a[d],
          ...c[d]
        };
      else if (d === "componentsProps" || d === "slotProps") {
        const h = a[d], p = r[d];
        if (!p)
          c[d] = h || {};
        else if (!h)
          c[d] = p;
        else {
          c[d] = {
            ...p
          };
          for (const b in h)
            if (Object.prototype.hasOwnProperty.call(h, b)) {
              const g = b;
              c[d][g] = mr(h[g], p[g], f);
            }
        }
      } else d === "className" && f && r.className ? c.className = zl(a?.className, r?.className) : d === "style" && f && r.style ? c.style = {
        ...a?.style,
        ...r?.style
      } : c[d] === void 0 && (c[d] = a[d]);
    }
  return c;
}
function ub(a) {
  const {
    theme: r,
    name: f,
    props: c
  } = a;
  return !r || !r.components || !r.components[f] || !r.components[f].defaultProps ? c : mr(r.components[f].defaultProps, c);
}
function Uo({
  props: a,
  name: r,
  defaultTheme: f,
  themeId: c
}) {
  let s = _o(f);
  return c && (s = s[c] || s), ub({
    theme: s,
    name: r,
    props: a
  });
}
function ib(a, r = Number.MIN_SAFE_INTEGER, f = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a, f));
}
function Bo(a, r = 0, f = 1) {
  return ib(a, r, f);
}
function rb(a) {
  a = a.slice(1);
  const r = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let f = a.match(r);
  return f && f[0].length === 1 && (f = f.map((c) => c + c)), f ? `rgb${f.length === 4 ? "a" : ""}(${f.map((c, s) => s < 3 ? parseInt(c, 16) : Math.round(parseInt(c, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function In(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return In(rb(a));
  const r = a.indexOf("("), f = a.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(f))
    throw new Error(El(9, a));
  let c = a.substring(r + 1, a.length - 1), s;
  if (f === "color") {
    if (c = c.split(" "), s = c.shift(), c.length === 4 && c[3].charAt(0) === "/" && (c[3] = c[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(El(10, s));
  } else
    c = c.split(",");
  return c = c.map((d) => parseFloat(d)), {
    type: f,
    values: c,
    colorSpace: s
  };
}
const cb = (a) => {
  const r = In(a);
  return r.values.slice(0, 3).map((f, c) => r.type.includes("hsl") && c !== 0 ? `${f}%` : f).join(" ");
}, Mu = (a, r) => {
  try {
    return cb(a);
  } catch {
    return a;
  }
};
function zr(a) {
  const {
    type: r,
    colorSpace: f
  } = a;
  let {
    values: c
  } = a;
  return r.includes("rgb") ? c = c.map((s, d) => d < 3 ? parseInt(s, 10) : s) : r.includes("hsl") && (c[1] = `${c[1]}%`, c[2] = `${c[2]}%`), r.includes("color") ? c = `${f} ${c.join(" ")}` : c = `${c.join(", ")}`, `${r}(${c})`;
}
function Kh(a) {
  a = In(a);
  const {
    values: r
  } = a, f = r[0], c = r[1] / 100, s = r[2] / 100, d = c * Math.min(s, 1 - s), h = (g, O = (g + f / 30) % 12) => s - d * Math.max(Math.min(O - 3, 9 - O, 1), -1);
  let p = "rgb";
  const b = [Math.round(h(0) * 255), Math.round(h(8) * 255), Math.round(h(4) * 255)];
  return a.type === "hsla" && (p += "a", b.push(r[3])), zr({
    type: p,
    values: b
  });
}
function go(a) {
  a = In(a);
  let r = a.type === "hsl" || a.type === "hsla" ? In(Kh(a)).values : a.values;
  return r = r.map((f) => (a.type !== "color" && (f /= 255), f <= 0.03928 ? f / 12.92 : ((f + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function fb(a, r) {
  const f = go(a), c = go(r);
  return (Math.max(f, c) + 0.05) / (Math.min(f, c) + 0.05);
}
function No(a, r) {
  return a = In(a), r = Bo(r), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${r}` : a.values[3] = r, zr(a);
}
function Sl(a, r, f) {
  try {
    return No(a, r);
  } catch {
    return a;
  }
}
function Or(a, r) {
  if (a = In(a), r = Bo(r), a.type.includes("hsl"))
    a.values[2] *= 1 - r;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let f = 0; f < 3; f += 1)
      a.values[f] *= 1 - r;
  return zr(a);
}
function Mt(a, r, f) {
  try {
    return Or(a, r);
  } catch {
    return a;
  }
}
function _r(a, r) {
  if (a = In(a), r = Bo(r), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * r;
  else if (a.type.includes("rgb"))
    for (let f = 0; f < 3; f += 1)
      a.values[f] += (255 - a.values[f]) * r;
  else if (a.type.includes("color"))
    for (let f = 0; f < 3; f += 1)
      a.values[f] += (1 - a.values[f]) * r;
  return zr(a);
}
function Dt(a, r, f) {
  try {
    return _r(a, r);
  } catch {
    return a;
  }
}
function ob(a, r = 0.15) {
  return go(a) > 0.5 ? Or(a, r) : _r(a, r);
}
function ir(a, r, f) {
  try {
    return ob(a, r);
  } catch {
    return a;
  }
}
const sb = /* @__PURE__ */ vt.createContext(void 0);
function db(a) {
  const {
    theme: r,
    name: f,
    props: c
  } = a;
  if (!r || !r.components || !r.components[f])
    return c;
  const s = r.components[f];
  return s.defaultProps ? mr(s.defaultProps, c, r.components.mergeClassNameAndStyle) : !s.styleOverrides && !s.variants ? mr(s, c, r.components.mergeClassNameAndStyle) : c;
}
function mb({
  props: a,
  name: r
}) {
  const f = vt.useContext(sb);
  return db({
    props: a,
    name: r,
    theme: {
      components: f
    }
  });
}
const oh = {
  theme: void 0
};
function hb(a) {
  let r, f;
  return function(s) {
    let d = r;
    return (d === void 0 || s.theme !== f) && (oh.theme = s.theme, d = $h(a(oh)), r = d, f = s.theme), d;
  };
}
function yb(a = "") {
  function r(...c) {
    if (!c.length)
      return "";
    const s = c[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${s}${r(...c.slice(1))})` : `, ${s}`;
  }
  return (c, ...s) => `var(--${a ? `${a}-` : ""}${c}${r(...s)})`;
}
const sh = (a, r, f, c = []) => {
  let s = a;
  r.forEach((d, h) => {
    h === r.length - 1 ? Array.isArray(s) ? s[Number(d)] = f : s && typeof s == "object" && (s[d] = f) : s && typeof s == "object" && (s[d] || (s[d] = c.includes(d) ? [] : {}), s = s[d]);
  });
}, gb = (a, r, f) => {
  function c(s, d = [], h = []) {
    Object.entries(s).forEach(([p, b]) => {
      (!f || f && !f([...d, p])) && b != null && (typeof b == "object" && Object.keys(b).length > 0 ? c(b, [...d, p], Array.isArray(b) ? [...h, p] : h) : r([...d, p], b, h));
    });
  }
  c(a);
}, pb = (a, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((c) => a.includes(c)) || a[a.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function co(a, r) {
  const {
    prefix: f,
    shouldSkipGeneratingVar: c
  } = r || {}, s = {}, d = {}, h = {};
  return gb(
    a,
    (p, b, g) => {
      if ((typeof b == "string" || typeof b == "number") && (!c || !c(p, b))) {
        const O = `--${f ? `${f}-` : ""}${p.join("-")}`, C = pb(p, b);
        Object.assign(s, {
          [O]: C
        }), sh(d, p, `var(${O})`, g), sh(h, p, `var(${O}, ${C})`, g);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: d,
    varsWithDefaults: h
  };
}
function vb(a, r = {}) {
  const {
    getSelector: f = Q,
    disableCssColorScheme: c,
    colorSchemeSelector: s,
    enableContrastVars: d
  } = r, {
    colorSchemes: h = {},
    components: p,
    defaultColorScheme: b = "light",
    ...g
  } = a, {
    vars: O,
    css: C,
    varsWithDefaults: U
  } = co(g, r);
  let H = U;
  const D = {}, {
    [b]: E,
    ...q
  } = h;
  if (Object.entries(q || {}).forEach(([k, lt]) => {
    const {
      vars: X,
      css: Y,
      varsWithDefaults: gt
    } = co(lt, r);
    H = me(H, gt), D[k] = {
      css: Y,
      vars: X
    };
  }), E) {
    const {
      css: k,
      vars: lt,
      varsWithDefaults: X
    } = co(E, r);
    H = me(H, X), D[b] = {
      css: k,
      vars: lt
    };
  }
  function Q(k, lt) {
    let X = s;
    if (s === "class" && (X = ".%s"), s === "data" && (X = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (X = `[${s}="%s"]`), k) {
      if (X === "media")
        return a.defaultColorScheme === k ? ":root" : {
          [`@media (prefers-color-scheme: ${h[k]?.palette?.mode || k})`]: {
            ":root": lt
          }
        };
      if (X)
        return a.defaultColorScheme === k ? `:root, ${X.replace("%s", String(k))}` : X.replace("%s", String(k));
    }
    return ":root";
  }
  return {
    vars: H,
    generateThemeVars: () => {
      let k = {
        ...O
      };
      return Object.entries(D).forEach(([, {
        vars: lt
      }]) => {
        k = me(k, lt);
      }), k;
    },
    generateStyleSheets: () => {
      const k = [], lt = a.defaultColorScheme || "light";
      function X(dt, jt) {
        Object.keys(jt).length && k.push(typeof dt == "string" ? {
          [dt]: {
            ...jt
          }
        } : dt);
      }
      X(f(void 0, {
        ...C
      }), C);
      const {
        [lt]: Y,
        ...gt
      } = D;
      if (Y) {
        const {
          css: dt
        } = Y, jt = h[lt]?.palette?.mode, ct = !c && jt ? {
          colorScheme: jt,
          ...dt
        } : {
          ...dt
        };
        X(f(lt, {
          ...ct
        }), ct);
      }
      return Object.entries(gt).forEach(([dt, {
        css: jt
      }]) => {
        const ct = h[dt]?.palette?.mode, y = !c && ct ? {
          colorScheme: ct,
          ...jt
        } : {
          ...jt
        };
        X(f(dt, {
          ...y
        }), y);
      }), d && k.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), k;
    }
  };
}
function bb(a) {
  return function(f) {
    return a === "media" ? `@media (prefers-color-scheme: ${f})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${f}"] &` : a === "class" ? `.${f} &` : a === "data" ? `[data-${f}] &` : `${a.replace("%s", f)} &` : "&";
  };
}
function Oa(a, r, f = void 0) {
  const c = {};
  for (const s in a) {
    const d = a[s];
    let h = "", p = !0;
    for (let b = 0; b < d.length; b += 1) {
      const g = d[b];
      g && (h += (p === !0 ? "" : " ") + r(g), p = !1, f && f[g] && (h += " " + f[g]));
    }
    c[s] = h;
  }
  return c;
}
const Sb = za(), Tb = Ro("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: f
    } = a;
    return [r.root, r[`maxWidth${cn(String(f.maxWidth))}`], f.fixed && r.fixed, f.disableGutters && r.disableGutters];
  }
}), Ab = (a) => Uo({
  props: a,
  name: "MuiContainer",
  defaultTheme: Sb
}), Cb = (a, r) => {
  const f = (b) => Ol(r, b), {
    classes: c,
    fixed: s,
    disableGutters: d,
    maxWidth: h
  } = a, p = {
    root: ["root", h && `maxWidth${cn(String(h))}`, s && "fixed", d && "disableGutters"]
  };
  return Oa(p, f, c);
};
function Eb(a = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: r = Tb,
    useThemeProps: f = Ab,
    componentName: c = "MuiContainer"
  } = a, s = r(({
    theme: h,
    ownerState: p
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!p.disableGutters && {
      paddingLeft: h.spacing(2),
      paddingRight: h.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [h.breakpoints.up("sm")]: {
        paddingLeft: h.spacing(3),
        paddingRight: h.spacing(3)
      }
    }
  }), ({
    theme: h,
    ownerState: p
  }) => p.fixed && Object.keys(h.breakpoints.values).reduce((b, g) => {
    const O = g, C = h.breakpoints.values[O];
    return C !== 0 && (b[h.breakpoints.up(O)] = {
      maxWidth: `${C}${h.breakpoints.unit}`
    }), b;
  }, {}), ({
    theme: h,
    ownerState: p
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...p.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [h.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(h.breakpoints.values.xs, 444)
      }
    },
    ...p.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    p.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [h.breakpoints.up(p.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${h.breakpoints.values[p.maxWidth]}${h.breakpoints.unit}`
      }
    }
  }));
  return /* @__PURE__ */ vt.forwardRef(function(p, b) {
    const g = f(p), {
      className: O,
      component: C = "div",
      disableGutters: U = !1,
      fixed: H = !1,
      maxWidth: D = "lg",
      classes: E,
      ...q
    } = g, Q = {
      ...g,
      component: C,
      disableGutters: U,
      fixed: H,
      maxWidth: D
    }, Z = Cb(Q, c);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ yt.jsx(s, {
        as: C,
        ownerState: Q,
        className: zl(Z.root, O),
        ref: b,
        ...q
      })
    );
  });
}
function xb(a, r) {
  return /* @__PURE__ */ vt.isValidElement(a) && r.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    a.type.muiName ?? a.type?._payload?.value?.muiName
  ) !== -1;
}
const zb = (a, r) => a.filter((f) => r.includes(f)), _a = (a, r, f) => {
  const c = a.keys[0];
  Array.isArray(r) ? r.forEach((s, d) => {
    f((h, p) => {
      d <= a.keys.length - 1 && (d === 0 ? Object.assign(h, p) : h[a.up(a.keys[d])] = p);
    }, s);
  }) : r && typeof r == "object" ? (Object.keys(r).length > a.keys.length ? a.keys : zb(a.keys, Object.keys(r))).forEach((d) => {
    if (a.keys.includes(d)) {
      const h = r[d];
      h !== void 0 && f((p, b) => {
        c === d ? Object.assign(p, b) : p[a.up(d)] = b;
      }, h);
    }
  }) : (typeof r == "number" || typeof r == "string") && f((s, d) => {
    Object.assign(s, d);
  }, r);
};
function hr(a) {
  return `--Grid-${a}Spacing`;
}
function Mr(a) {
  return `--Grid-parent-${a}Spacing`;
}
const dh = "--Grid-columns", Aa = "--Grid-parent-columns", Ob = ({
  theme: a,
  ownerState: r
}) => {
  const f = {};
  return _a(a.breakpoints, r.size, (c, s) => {
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
      width: `calc(100% * ${s} / var(${Aa}) - (var(${Aa}) - ${s}) * (var(${Mr("column")}) / var(${Aa})))`
    }), c(f, d);
  }), f;
}, _b = ({
  theme: a,
  ownerState: r
}) => {
  const f = {};
  return _a(a.breakpoints, r.offset, (c, s) => {
    let d = {};
    s === "auto" && (d = {
      marginLeft: "auto"
    }), typeof s == "number" && (d = {
      marginLeft: s === 0 ? "0px" : `calc(100% * ${s} / var(${Aa}) + var(${Mr("column")}) * ${s} / var(${Aa}))`
    }), c(f, d);
  }), f;
}, Mb = ({
  theme: a,
  ownerState: r
}) => {
  if (!r.container)
    return {};
  const f = {
    [dh]: 12
  };
  return _a(a.breakpoints, r.columns, (c, s) => {
    const d = s ?? 12;
    c(f, {
      [dh]: d,
      "> *": {
        [Aa]: d
      }
    });
  }), f;
}, Db = ({
  theme: a,
  ownerState: r
}) => {
  if (!r.container)
    return {};
  const f = {};
  return _a(a.breakpoints, r.rowSpacing, (c, s) => {
    const d = typeof s == "string" ? s : a.spacing?.(s);
    c(f, {
      [hr("row")]: d,
      "> *": {
        [Mr("row")]: d
      }
    });
  }), f;
}, Rb = ({
  theme: a,
  ownerState: r
}) => {
  if (!r.container)
    return {};
  const f = {};
  return _a(a.breakpoints, r.columnSpacing, (c, s) => {
    const d = typeof s == "string" ? s : a.spacing?.(s);
    c(f, {
      [hr("column")]: d,
      "> *": {
        [Mr("column")]: d
      }
    });
  }), f;
}, Ub = ({
  theme: a,
  ownerState: r
}) => {
  if (!r.container)
    return {};
  const f = {};
  return _a(a.breakpoints, r.direction, (c, s) => {
    c(f, {
      flexDirection: s
    });
  }), f;
}, Bb = ({
  ownerState: a
}) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...a.container && {
    display: "flex",
    flexWrap: "wrap",
    ...a.wrap && a.wrap !== "wrap" && {
      flexWrap: a.wrap
    },
    gap: `var(${hr("row")}) var(${hr("column")})`
  }
}), Nb = (a) => {
  const r = [];
  return Object.entries(a).forEach(([f, c]) => {
    c !== !1 && c !== void 0 && r.push(`grid-${f}-${String(c)}`);
  }), r;
}, Hb = (a, r = "xs") => {
  function f(c) {
    return c === void 0 ? !1 : typeof c == "string" && !Number.isNaN(Number(c)) || typeof c == "number" && c > 0;
  }
  if (f(a))
    return [`spacing-${r}-${String(a)}`];
  if (typeof a == "object" && !Array.isArray(a)) {
    const c = [];
    return Object.entries(a).forEach(([s, d]) => {
      f(d) && c.push(`spacing-${s}-${String(d)}`);
    }), c;
  }
  return [];
}, jb = (a) => a === void 0 ? [] : typeof a == "object" ? Object.entries(a).map(([r, f]) => `direction-${r}-${f}`) : [`direction-xs-${String(a)}`];
function wb(a, r) {
  a.item !== void 0 && delete a.item, a.zeroMinWidth !== void 0 && delete a.zeroMinWidth, r.keys.forEach((f) => {
    a[f] !== void 0 && delete a[f];
  });
}
const Gb = za(), qb = Ro("div", {
  name: "MuiGrid",
  slot: "Root"
});
function Yb(a) {
  return Uo({
    props: a,
    name: "MuiGrid",
    defaultTheme: Gb
  });
}
function Lb(a = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: r = qb,
    useThemeProps: f = Yb,
    useTheme: c = _o,
    componentName: s = "MuiGrid"
  } = a, d = (g, O) => {
    const {
      container: C,
      direction: U,
      spacing: H,
      wrap: D,
      size: E
    } = g, q = {
      root: ["root", C && "container", D !== "wrap" && `wrap-xs-${String(D)}`, ...jb(U), ...Nb(E), ...C ? Hb(H, O.breakpoints.keys[0]) : []]
    };
    return Oa(q, (Q) => Ol(s, Q), {});
  };
  function h(g, O, C = () => !0) {
    const U = {};
    return g === null || (Array.isArray(g) ? g.forEach((H, D) => {
      H !== null && C(H) && O.keys[D] && (U[O.keys[D]] = H);
    }) : typeof g == "object" ? Object.keys(g).forEach((H) => {
      const D = g[H];
      D != null && C(D) && (U[H] = D);
    }) : U[O.keys[0]] = g), U;
  }
  const p = r(Mb, Rb, Db, Ob, Ub, Bb, _b), b = /* @__PURE__ */ vt.forwardRef(function(O, C) {
    const U = c(), H = f(O), D = Mo(H);
    wb(D, U.breakpoints);
    const {
      className: E,
      children: q,
      columns: Q = 12,
      container: Z = !1,
      component: F = "div",
      direction: k = "row",
      wrap: lt = "wrap",
      size: X = {},
      offset: Y = {},
      spacing: gt = 0,
      rowSpacing: dt = gt,
      columnSpacing: jt = gt,
      unstable_level: ct = 0,
      ...y
    } = D, J = h(X, U.breakpoints, (S) => S !== !1), V = h(Y, U.breakpoints), et = O.columns ?? (ct ? void 0 : Q), M = O.spacing ?? (ct ? void 0 : gt), L = O.rowSpacing ?? O.spacing ?? (ct ? void 0 : dt), I = O.columnSpacing ?? O.spacing ?? (ct ? void 0 : jt), Tt = {
      ...D,
      level: ct,
      columns: et,
      container: Z,
      direction: k,
      wrap: lt,
      spacing: M,
      rowSpacing: L,
      columnSpacing: I,
      size: J,
      offset: V
    }, zt = d(Tt, U);
    return /* @__PURE__ */ yt.jsx(p, {
      ref: C,
      as: F,
      ownerState: Tt,
      className: zl(zt.root, E),
      ...y,
      children: vt.Children.map(q, (S) => /* @__PURE__ */ vt.isValidElement(S) && xb(S, ["Grid"]) && Z && S.props.container ? /* @__PURE__ */ vt.cloneElement(S, {
        unstable_level: S.props?.unstable_level ?? ct + 1
      }) : S)
    });
  });
  return b.muiName = "Grid", b;
}
const Xb = za(), Qb = Ro("div", {
  name: "MuiStack",
  slot: "Root"
});
function Vb(a) {
  return Uo({
    props: a,
    name: "MuiStack",
    defaultTheme: Xb
  });
}
function $b(a, r) {
  const f = vt.Children.toArray(a).filter(Boolean);
  return f.reduce((c, s, d) => (c.push(s), d < f.length - 1 && c.push(/* @__PURE__ */ vt.cloneElement(r, {
    key: `separator-${d}`
  })), c), []);
}
const Zb = (a) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[a], kb = ({
  ownerState: a,
  theme: r
}) => {
  let f = {
    display: "flex",
    flexDirection: "column",
    ...We({
      theme: r
    }, io({
      values: a.direction,
      breakpoints: r.breakpoints.values
    }), (c) => ({
      flexDirection: c
    }))
  };
  if (a.spacing) {
    const c = Sr(r), s = Object.keys(r.breakpoints.values).reduce((b, g) => ((typeof a.spacing == "object" && a.spacing[g] != null || typeof a.direction == "object" && a.direction[g] != null) && (b[g] = !0), b), {}), d = io({
      values: a.direction,
      base: s
    }), h = io({
      values: a.spacing,
      base: s
    });
    typeof d == "object" && Object.keys(d).forEach((b, g, O) => {
      if (!d[b]) {
        const U = g > 0 ? d[O[g - 1]] : "column";
        d[b] = U;
      }
    }), f = me(f, We({
      theme: r
    }, h, (b, g) => a.useFlexGap ? {
      gap: xl(c, b)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Zb(g ? d[g] : a.direction)}`]: xl(c, b)
      }
    }));
  }
  return f = lv(r.breakpoints, f), f;
};
function Kb(a = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: r = Qb,
    useThemeProps: f = Vb,
    componentName: c = "MuiStack"
  } = a, s = () => Oa({
    root: ["root"]
  }, (b) => Ol(c, b), {}), d = r(kb);
  return /* @__PURE__ */ vt.forwardRef(function(b, g) {
    const O = f(b), C = Mo(O), {
      component: U = "div",
      direction: H = "column",
      spacing: D = 0,
      divider: E,
      children: q,
      className: Q,
      useFlexGap: Z = !1,
      ...F
    } = C, k = {
      direction: H,
      spacing: D,
      useFlexGap: Z
    }, lt = s();
    return /* @__PURE__ */ yt.jsx(d, {
      as: U,
      ownerState: k,
      ref: g,
      className: zl(lt.root, Q),
      ...F,
      children: E ? $b(q, E) : q
    });
  });
}
const Hu = {
  black: "#000",
  white: "#fff"
}, Jb = {
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
}, ma = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ha = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ou = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, ya = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ga = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, pa = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Jh() {
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
      paper: Hu.white,
      default: Hu.white
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
const Wh = Jh();
function Fh() {
  return {
    text: {
      primary: Hu.white,
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
      active: Hu.white,
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
const po = Fh();
function mh(a, r, f, c) {
  const s = c.light || c, d = c.dark || c * 1.5;
  a[r] || (a.hasOwnProperty(f) ? a[r] = a[f] : r === "light" ? a.light = _r(a.main, s) : r === "dark" && (a.dark = Or(a.main, d)));
}
function hh(a, r, f, c, s) {
  const d = s.light || s, h = s.dark || s * 1.5;
  r[f] || (r.hasOwnProperty(c) ? r[f] = r[c] : f === "light" ? r.light = `color-mix(in ${a}, ${r.main}, #fff ${(d * 100).toFixed(0)}%)` : f === "dark" && (r.dark = `color-mix(in ${a}, ${r.main}, #000 ${(h * 100).toFixed(0)}%)`));
}
function Wb(a = "light") {
  return a === "dark" ? {
    main: ya[200],
    light: ya[50],
    dark: ya[400]
  } : {
    main: ya[700],
    light: ya[400],
    dark: ya[800]
  };
}
function Fb(a = "light") {
  return a === "dark" ? {
    main: ma[200],
    light: ma[50],
    dark: ma[400]
  } : {
    main: ma[500],
    light: ma[300],
    dark: ma[700]
  };
}
function Pb(a = "light") {
  return a === "dark" ? {
    main: ha[500],
    light: ha[300],
    dark: ha[700]
  } : {
    main: ha[700],
    light: ha[400],
    dark: ha[800]
  };
}
function Ib(a = "light") {
  return a === "dark" ? {
    main: ga[400],
    light: ga[300],
    dark: ga[700]
  } : {
    main: ga[700],
    light: ga[500],
    dark: ga[900]
  };
}
function tS(a = "light") {
  return a === "dark" ? {
    main: pa[400],
    light: pa[300],
    dark: pa[700]
  } : {
    main: pa[800],
    light: pa[500],
    dark: pa[900]
  };
}
function eS(a = "light") {
  return a === "dark" ? {
    main: Ou[400],
    light: Ou[300],
    dark: Ou[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ou[500],
    dark: Ou[900]
  };
}
function nS(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function Ho(a) {
  const {
    mode: r = "light",
    contrastThreshold: f = 3,
    tonalOffset: c = 0.2,
    colorSpace: s,
    ...d
  } = a, h = a.primary || Wb(r), p = a.secondary || Fb(r), b = a.error || Pb(r), g = a.info || Ib(r), O = a.success || tS(r), C = a.warning || eS(r);
  function U(q) {
    return s ? nS(q) : fb(q, po.text.primary) >= f ? po.text.primary : Wh.text.primary;
  }
  const H = ({
    color: q,
    name: Q,
    mainShade: Z = 500,
    lightShade: F = 300,
    darkShade: k = 700
  }) => {
    if (q = {
      ...q
    }, !q.main && q[Z] && (q.main = q[Z]), !q.hasOwnProperty("main"))
      throw new Error(El(11, Q ? ` (${Q})` : "", Z));
    if (typeof q.main != "string")
      throw new Error(El(12, Q ? ` (${Q})` : "", JSON.stringify(q.main)));
    return s ? (hh(s, q, "light", F, c), hh(s, q, "dark", k, c)) : (mh(q, "light", F, c), mh(q, "dark", k, c)), q.contrastText || (q.contrastText = U(q.main)), q;
  };
  let D;
  return r === "light" ? D = Jh() : r === "dark" && (D = Fh()), me({
    // A collection of common colors.
    common: {
      ...Hu
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: H({
      color: h,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: H({
      color: p,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: H({
      color: b,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: H({
      color: C,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: H({
      color: g,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: H({
      color: O,
      name: "success"
    }),
    // The grey colors.
    grey: Jb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: f,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: U,
    // Generate a rich color object.
    augmentColor: H,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: c,
    // The light and dark mode object.
    ...D
  }, d);
}
function lS(a) {
  const r = {};
  return Object.entries(a).forEach((c) => {
    const [s, d] = c;
    typeof d == "object" && (r[s] = `${d.fontStyle ? `${d.fontStyle} ` : ""}${d.fontVariant ? `${d.fontVariant} ` : ""}${d.fontWeight ? `${d.fontWeight} ` : ""}${d.fontStretch ? `${d.fontStretch} ` : ""}${d.fontSize || ""}${d.lineHeight ? `/${d.lineHeight} ` : ""}${d.fontFamily || ""}`);
  }), r;
}
function aS(a, r) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [a.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function uS(a) {
  return Math.round(a * 1e5) / 1e5;
}
const yh = {
  textTransform: "uppercase"
}, gh = '"Roboto", "Helvetica", "Arial", sans-serif';
function iS(a, r) {
  const {
    fontFamily: f = gh,
    // The default font size of the Material Specification.
    fontSize: c = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: d = 400,
    fontWeightMedium: h = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: b = 16,
    // Apply the CSS properties to all the variants.
    allVariants: g,
    pxToRem: O,
    ...C
  } = typeof r == "function" ? r(a) : r, U = c / 14, H = O || ((q) => `${q / b * U}rem`), D = (q, Q, Z, F, k) => ({
    fontFamily: f,
    fontWeight: q,
    fontSize: H(Q),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: Z,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...f === gh ? {
      letterSpacing: `${uS(F / Q)}em`
    } : {},
    ...k,
    ...g
  }), E = {
    h1: D(s, 96, 1.167, -1.5),
    h2: D(s, 60, 1.2, -0.5),
    h3: D(d, 48, 1.167, 0),
    h4: D(d, 34, 1.235, 0.25),
    h5: D(d, 24, 1.334, 0),
    h6: D(h, 20, 1.6, 0.15),
    subtitle1: D(d, 16, 1.75, 0.15),
    subtitle2: D(h, 14, 1.57, 0.1),
    body1: D(d, 16, 1.5, 0.15),
    body2: D(d, 14, 1.43, 0.15),
    button: D(h, 14, 1.75, 0.4, yh),
    caption: D(d, 12, 1.66, 0.4),
    overline: D(d, 12, 2.66, 1, yh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return me({
    htmlFontSize: b,
    pxToRem: H,
    fontFamily: f,
    fontSize: c,
    fontWeightLight: s,
    fontWeightRegular: d,
    fontWeightMedium: h,
    fontWeightBold: p,
    ...E
  }, C, {
    clone: !1
    // No need to clone deep
  });
}
const rS = 0.2, cS = 0.14, fS = 0.12;
function Yt(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${rS})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${cS})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${fS})`].join(",");
}
const oS = ["none", Yt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Yt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Yt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Yt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Yt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Yt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Yt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Yt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Yt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Yt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Yt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Yt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Yt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Yt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Yt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Yt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Yt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Yt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Yt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Yt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Yt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Yt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Yt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Yt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], sS = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, dS = {
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
function ph(a) {
  return `${Math.round(a)}ms`;
}
function mS(a) {
  if (!a)
    return 0;
  const r = a / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function hS(a) {
  const r = {
    ...sS,
    ...a.easing
  }, f = {
    ...dS,
    ...a.duration
  };
  return {
    getAutoHeightDuration: mS,
    create: (s = ["all"], d = {}) => {
      const {
        duration: h = f.standard,
        easing: p = r.easeInOut,
        delay: b = 0,
        ...g
      } = d;
      return (Array.isArray(s) ? s : [s]).map((O) => `${O} ${typeof h == "string" ? h : ph(h)} ${p} ${typeof b == "string" ? b : ph(b)}`).join(",");
    },
    ...a,
    easing: r,
    duration: f
  };
}
const yS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function gS(a) {
  return un(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function Ph(a = {}) {
  const r = {
    ...a
  };
  function f(c) {
    const s = Object.entries(c);
    for (let d = 0; d < s.length; d++) {
      const [h, p] = s[d];
      !gS(p) || h.startsWith("unstable_") ? delete c[h] : un(p) && (c[h] = {
        ...p
      }, f(c[h]));
    }
  }
  return f(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function vh(a) {
  return typeof a == "number" ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const pS = (a) => {
  if (!Number.isNaN(+a))
    return +a;
  const r = a.match(/\d*\.?\d+/g);
  if (!r)
    return 0;
  let f = 0;
  for (let c = 0; c < r.length; c += 1)
    f += +r[c];
  return f;
};
function vS(a) {
  Object.assign(a, {
    alpha(r, f) {
      const c = this || a;
      return c.colorSpace ? `oklch(from ${r} l c h / ${typeof f == "string" ? `calc(${f})` : f})` : c.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof f == "string" ? `calc(${f})` : f})` : No(r, pS(f));
    },
    lighten(r, f) {
      const c = this || a;
      return c.colorSpace ? `color-mix(in ${c.colorSpace}, ${r}, #fff ${vh(f)})` : _r(r, f);
    },
    darken(r, f) {
      const c = this || a;
      return c.colorSpace ? `color-mix(in ${c.colorSpace}, ${r}, #000 ${vh(f)})` : Or(r, f);
    }
  });
}
function vo(a = {}, ...r) {
  const {
    breakpoints: f,
    mixins: c = {},
    spacing: s,
    palette: d = {},
    transitions: h = {},
    typography: p = {},
    shape: b,
    colorSpace: g,
    ...O
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(El(20));
  const C = Ho({
    ...d,
    colorSpace: g
  }), U = za(a);
  let H = me(U, {
    mixins: aS(U.breakpoints, c),
    palette: C,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: oS.slice(),
    typography: iS(C, p),
    transitions: hS(h),
    zIndex: {
      ...yS
    }
  });
  return H = me(H, O), H = r.reduce((D, E) => me(D, E), H), H.unstable_sxConfig = {
    ...Gu,
    ...O?.unstable_sxConfig
  }, H.unstable_sx = function(E) {
    return Ea({
      sx: E,
      theme: this
    });
  }, H.toRuntimeSource = Ph, vS(H), H;
}
function bS(a) {
  let r;
  return a < 1 ? r = 5.11916 * a ** 2 : r = 4.5 * Math.log(a + 1) + 2, Math.round(r * 10) / 1e3;
}
const SS = [...Array(25)].map((a, r) => {
  if (r === 0)
    return "none";
  const f = bS(r);
  return `linear-gradient(rgba(255 255 255 / ${f}), rgba(255 255 255 / ${f}))`;
});
function Ih(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function ty(a) {
  return a === "dark" ? SS : [];
}
function TS(a) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: f,
    overlays: c,
    colorSpace: s,
    ...d
  } = a, h = Ho({
    ...r,
    colorSpace: s
  });
  return {
    palette: h,
    opacity: {
      ...Ih(h.mode),
      ...f
    },
    overlays: c || ty(h.mode),
    ...d
  };
}
function AS(a) {
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const CS = (a) => [...[...Array(25)].map((r, f) => `--${a ? `${a}-` : ""}overlays-${f}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], ES = (a) => (r, f) => {
  const c = a.rootSelector || ":root", s = a.colorSchemeSelector;
  let d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (d = `[${s}="%s"]`), a.defaultColorScheme === r) {
    if (r === "dark") {
      const h = {};
      return CS(a.cssVarPrefix).forEach((p) => {
        h[p] = f[p], delete f[p];
      }), d === "media" ? {
        [c]: f,
        "@media (prefers-color-scheme: dark)": {
          [c]: h
        }
      } : d ? {
        [d.replace("%s", r)]: h,
        [`${c}, ${d.replace("%s", r)}`]: f
      } : {
        [c]: {
          ...f,
          ...h
        }
      };
    }
    if (d && d !== "media")
      return `${c}, ${d.replace("%s", String(r))}`;
  } else if (r) {
    if (d === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [c]: f
        }
      };
    if (d)
      return d.replace("%s", String(r));
  }
  return c;
};
function xS(a, r) {
  r.forEach((f) => {
    a[f] || (a[f] = {});
  });
}
function N(a, r, f) {
  !a[r] && f && (a[r] = f);
}
function Du(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : Kh(a);
}
function On(a, r) {
  `${r}Channel` in a || (a[`${r}Channel`] = Mu(Du(a[r])));
}
function zS(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const en = (a) => {
  try {
    return a();
  } catch {
  }
}, OS = (a = "mui") => yb(a);
function fo(a, r, f, c, s) {
  if (!f)
    return;
  f = f === !0 ? {} : f;
  const d = s === "dark" ? "dark" : "light";
  if (!c) {
    r[s] = TS({
      ...f,
      palette: {
        mode: d,
        ...f?.palette
      },
      colorSpace: a
    });
    return;
  }
  const {
    palette: h,
    ...p
  } = vo({
    ...c,
    palette: {
      mode: d,
      ...f?.palette
    },
    colorSpace: a
  });
  return r[s] = {
    ...f,
    palette: h,
    opacity: {
      ...Ih(d),
      ...f?.opacity
    },
    overlays: f?.overlays || ty(d)
  }, p;
}
function _S(a = {}, ...r) {
  const {
    colorSchemes: f = {
      light: !0
    },
    defaultColorScheme: c,
    disableCssColorScheme: s = !1,
    cssVarPrefix: d = "mui",
    nativeColor: h = !1,
    shouldSkipGeneratingVar: p = AS,
    colorSchemeSelector: b = f.light && f.dark ? "media" : void 0,
    rootSelector: g = ":root",
    ...O
  } = a, C = Object.keys(f)[0], U = c || (f.light && C !== "light" ? "light" : C), H = OS(d), {
    [U]: D,
    light: E,
    dark: q,
    ...Q
  } = f, Z = {
    ...Q
  };
  let F = D;
  if ((U === "dark" && !("dark" in f) || U === "light" && !("light" in f)) && (F = !0), !F)
    throw new Error(El(21, U));
  let k;
  h && (k = "oklch");
  const lt = fo(k, Z, F, O, U);
  E && !Z.light && fo(k, Z, E, void 0, "light"), q && !Z.dark && fo(k, Z, q, void 0, "dark");
  let X = {
    defaultColorScheme: U,
    ...lt,
    cssVarPrefix: d,
    colorSchemeSelector: b,
    rootSelector: g,
    getCssVar: H,
    colorSchemes: Z,
    font: {
      ...lS(lt.typography),
      ...lt.font
    },
    spacing: zS(O.spacing)
  };
  Object.keys(X.colorSchemes).forEach((ct) => {
    const y = X.colorSchemes[ct].palette, J = (et) => {
      const M = et.split("-"), L = M[1], I = M[2];
      return H(et, y[L][I]);
    };
    y.mode === "light" && (N(y.common, "background", "#fff"), N(y.common, "onBackground", "#000")), y.mode === "dark" && (N(y.common, "background", "#000"), N(y.common, "onBackground", "#fff"));
    function V(et, M, L) {
      if (k) {
        let I;
        return et === Sl && (I = `transparent ${((1 - L) * 100).toFixed(0)}%`), et === Mt && (I = `#000 ${(L * 100).toFixed(0)}%`), et === Dt && (I = `#fff ${(L * 100).toFixed(0)}%`), `color-mix(in ${k}, ${M}, ${I})`;
      }
      return et(M, L);
    }
    if (xS(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      N(y.Alert, "errorColor", V(Mt, y.error.light, 0.6)), N(y.Alert, "infoColor", V(Mt, y.info.light, 0.6)), N(y.Alert, "successColor", V(Mt, y.success.light, 0.6)), N(y.Alert, "warningColor", V(Mt, y.warning.light, 0.6)), N(y.Alert, "errorFilledBg", J("palette-error-main")), N(y.Alert, "infoFilledBg", J("palette-info-main")), N(y.Alert, "successFilledBg", J("palette-success-main")), N(y.Alert, "warningFilledBg", J("palette-warning-main")), N(y.Alert, "errorFilledColor", en(() => y.getContrastText(y.error.main))), N(y.Alert, "infoFilledColor", en(() => y.getContrastText(y.info.main))), N(y.Alert, "successFilledColor", en(() => y.getContrastText(y.success.main))), N(y.Alert, "warningFilledColor", en(() => y.getContrastText(y.warning.main))), N(y.Alert, "errorStandardBg", V(Dt, y.error.light, 0.9)), N(y.Alert, "infoStandardBg", V(Dt, y.info.light, 0.9)), N(y.Alert, "successStandardBg", V(Dt, y.success.light, 0.9)), N(y.Alert, "warningStandardBg", V(Dt, y.warning.light, 0.9)), N(y.Alert, "errorIconColor", J("palette-error-main")), N(y.Alert, "infoIconColor", J("palette-info-main")), N(y.Alert, "successIconColor", J("palette-success-main")), N(y.Alert, "warningIconColor", J("palette-warning-main")), N(y.AppBar, "defaultBg", J("palette-grey-100")), N(y.Avatar, "defaultBg", J("palette-grey-400")), N(y.Button, "inheritContainedBg", J("palette-grey-300")), N(y.Button, "inheritContainedHoverBg", J("palette-grey-A100")), N(y.Chip, "defaultBorder", J("palette-grey-400")), N(y.Chip, "defaultAvatarColor", J("palette-grey-700")), N(y.Chip, "defaultIconColor", J("palette-grey-700")), N(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(y.LinearProgress, "primaryBg", V(Dt, y.primary.main, 0.62)), N(y.LinearProgress, "secondaryBg", V(Dt, y.secondary.main, 0.62)), N(y.LinearProgress, "errorBg", V(Dt, y.error.main, 0.62)), N(y.LinearProgress, "infoBg", V(Dt, y.info.main, 0.62)), N(y.LinearProgress, "successBg", V(Dt, y.success.main, 0.62)), N(y.LinearProgress, "warningBg", V(Dt, y.warning.main, 0.62)), N(y.Skeleton, "bg", k ? V(Sl, y.text.primary, 0.11) : `rgba(${J("palette-text-primaryChannel")} / 0.11)`), N(y.Slider, "primaryTrack", V(Dt, y.primary.main, 0.62)), N(y.Slider, "secondaryTrack", V(Dt, y.secondary.main, 0.62)), N(y.Slider, "errorTrack", V(Dt, y.error.main, 0.62)), N(y.Slider, "infoTrack", V(Dt, y.info.main, 0.62)), N(y.Slider, "successTrack", V(Dt, y.success.main, 0.62)), N(y.Slider, "warningTrack", V(Dt, y.warning.main, 0.62));
      const et = k ? V(Mt, y.background.default, 0.6825) : ir(y.background.default, 0.8);
      N(y.SnackbarContent, "bg", et), N(y.SnackbarContent, "color", en(() => k ? po.text.primary : y.getContrastText(et))), N(y.SpeedDialAction, "fabHoverBg", ir(y.background.paper, 0.15)), N(y.StepConnector, "border", J("palette-grey-400")), N(y.StepContent, "border", J("palette-grey-400")), N(y.Switch, "defaultColor", J("palette-common-white")), N(y.Switch, "defaultDisabledColor", J("palette-grey-100")), N(y.Switch, "primaryDisabledColor", V(Dt, y.primary.main, 0.62)), N(y.Switch, "secondaryDisabledColor", V(Dt, y.secondary.main, 0.62)), N(y.Switch, "errorDisabledColor", V(Dt, y.error.main, 0.62)), N(y.Switch, "infoDisabledColor", V(Dt, y.info.main, 0.62)), N(y.Switch, "successDisabledColor", V(Dt, y.success.main, 0.62)), N(y.Switch, "warningDisabledColor", V(Dt, y.warning.main, 0.62)), N(y.TableCell, "border", V(Dt, V(Sl, y.divider, 1), 0.88)), N(y.Tooltip, "bg", V(Sl, y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      N(y.Alert, "errorColor", V(Dt, y.error.light, 0.6)), N(y.Alert, "infoColor", V(Dt, y.info.light, 0.6)), N(y.Alert, "successColor", V(Dt, y.success.light, 0.6)), N(y.Alert, "warningColor", V(Dt, y.warning.light, 0.6)), N(y.Alert, "errorFilledBg", J("palette-error-dark")), N(y.Alert, "infoFilledBg", J("palette-info-dark")), N(y.Alert, "successFilledBg", J("palette-success-dark")), N(y.Alert, "warningFilledBg", J("palette-warning-dark")), N(y.Alert, "errorFilledColor", en(() => y.getContrastText(y.error.dark))), N(y.Alert, "infoFilledColor", en(() => y.getContrastText(y.info.dark))), N(y.Alert, "successFilledColor", en(() => y.getContrastText(y.success.dark))), N(y.Alert, "warningFilledColor", en(() => y.getContrastText(y.warning.dark))), N(y.Alert, "errorStandardBg", V(Mt, y.error.light, 0.9)), N(y.Alert, "infoStandardBg", V(Mt, y.info.light, 0.9)), N(y.Alert, "successStandardBg", V(Mt, y.success.light, 0.9)), N(y.Alert, "warningStandardBg", V(Mt, y.warning.light, 0.9)), N(y.Alert, "errorIconColor", J("palette-error-main")), N(y.Alert, "infoIconColor", J("palette-info-main")), N(y.Alert, "successIconColor", J("palette-success-main")), N(y.Alert, "warningIconColor", J("palette-warning-main")), N(y.AppBar, "defaultBg", J("palette-grey-900")), N(y.AppBar, "darkBg", J("palette-background-paper")), N(y.AppBar, "darkColor", J("palette-text-primary")), N(y.Avatar, "defaultBg", J("palette-grey-600")), N(y.Button, "inheritContainedBg", J("palette-grey-800")), N(y.Button, "inheritContainedHoverBg", J("palette-grey-700")), N(y.Chip, "defaultBorder", J("palette-grey-700")), N(y.Chip, "defaultAvatarColor", J("palette-grey-300")), N(y.Chip, "defaultIconColor", J("palette-grey-300")), N(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(y.LinearProgress, "primaryBg", V(Mt, y.primary.main, 0.5)), N(y.LinearProgress, "secondaryBg", V(Mt, y.secondary.main, 0.5)), N(y.LinearProgress, "errorBg", V(Mt, y.error.main, 0.5)), N(y.LinearProgress, "infoBg", V(Mt, y.info.main, 0.5)), N(y.LinearProgress, "successBg", V(Mt, y.success.main, 0.5)), N(y.LinearProgress, "warningBg", V(Mt, y.warning.main, 0.5)), N(y.Skeleton, "bg", k ? V(Sl, y.text.primary, 0.13) : `rgba(${J("palette-text-primaryChannel")} / 0.13)`), N(y.Slider, "primaryTrack", V(Mt, y.primary.main, 0.5)), N(y.Slider, "secondaryTrack", V(Mt, y.secondary.main, 0.5)), N(y.Slider, "errorTrack", V(Mt, y.error.main, 0.5)), N(y.Slider, "infoTrack", V(Mt, y.info.main, 0.5)), N(y.Slider, "successTrack", V(Mt, y.success.main, 0.5)), N(y.Slider, "warningTrack", V(Mt, y.warning.main, 0.5));
      const et = k ? V(Dt, y.background.default, 0.985) : ir(y.background.default, 0.98);
      N(y.SnackbarContent, "bg", et), N(y.SnackbarContent, "color", en(() => k ? Wh.text.primary : y.getContrastText(et))), N(y.SpeedDialAction, "fabHoverBg", ir(y.background.paper, 0.15)), N(y.StepConnector, "border", J("palette-grey-600")), N(y.StepContent, "border", J("palette-grey-600")), N(y.Switch, "defaultColor", J("palette-grey-300")), N(y.Switch, "defaultDisabledColor", J("palette-grey-600")), N(y.Switch, "primaryDisabledColor", V(Mt, y.primary.main, 0.55)), N(y.Switch, "secondaryDisabledColor", V(Mt, y.secondary.main, 0.55)), N(y.Switch, "errorDisabledColor", V(Mt, y.error.main, 0.55)), N(y.Switch, "infoDisabledColor", V(Mt, y.info.main, 0.55)), N(y.Switch, "successDisabledColor", V(Mt, y.success.main, 0.55)), N(y.Switch, "warningDisabledColor", V(Mt, y.warning.main, 0.55)), N(y.TableCell, "border", V(Mt, V(Sl, y.divider, 1), 0.68)), N(y.Tooltip, "bg", V(Sl, y.grey[700], 0.92));
    }
    On(y.background, "default"), On(y.background, "paper"), On(y.common, "background"), On(y.common, "onBackground"), On(y, "divider"), Object.keys(y).forEach((et) => {
      const M = y[et];
      et !== "tonalOffset" && M && typeof M == "object" && (M.main && N(y[et], "mainChannel", Mu(Du(M.main))), M.light && N(y[et], "lightChannel", Mu(Du(M.light))), M.dark && N(y[et], "darkChannel", Mu(Du(M.dark))), M.contrastText && N(y[et], "contrastTextChannel", Mu(Du(M.contrastText))), et === "text" && (On(y[et], "primary"), On(y[et], "secondary")), et === "action" && (M.active && On(y[et], "active"), M.selected && On(y[et], "selected")));
    });
  }), X = r.reduce((ct, y) => me(ct, y), X);
  const Y = {
    prefix: d,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: p,
    getSelector: ES(X),
    enableContrastVars: h
  }, {
    vars: gt,
    generateThemeVars: dt,
    generateStyleSheets: jt
  } = vb(X, Y);
  return X.vars = gt, Object.entries(X.colorSchemes[X.defaultColorScheme]).forEach(([ct, y]) => {
    X[ct] = y;
  }), X.generateThemeVars = dt, X.generateStyleSheets = jt, X.generateSpacing = function() {
    return Qh(O.spacing, Sr(this));
  }, X.getColorSchemeSelector = bb(b), X.spacing = X.generateSpacing(), X.shouldSkipGeneratingVar = p, X.unstable_sxConfig = {
    ...Gu,
    ...O?.unstable_sxConfig
  }, X.unstable_sx = function(y) {
    return Ea({
      sx: y,
      theme: this
    });
  }, X.toRuntimeSource = Ph, X;
}
function bh(a, r, f) {
  a.colorSchemes && f && (a.colorSchemes[r] = {
    ...f !== !0 && f,
    palette: Ho({
      ...f === !0 ? {} : f.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function MS(a = {}, ...r) {
  const {
    palette: f,
    cssVariables: c = !1,
    colorSchemes: s = f ? void 0 : {
      light: !0
    },
    defaultColorScheme: d = f?.mode,
    ...h
  } = a, p = d || "light", b = s?.[p], g = {
    ...s,
    ...f ? {
      [p]: {
        ...typeof b != "boolean" && b,
        palette: f
      }
    } : void 0
  };
  if (c === !1) {
    if (!("colorSchemes" in a))
      return vo(a, ...r);
    let O = f;
    "palette" in a || g[p] && (g[p] !== !0 ? O = g[p].palette : p === "dark" && (O = {
      mode: "dark"
    }));
    const C = vo({
      ...a,
      palette: O
    }, ...r);
    return C.defaultColorScheme = p, C.colorSchemes = g, C.palette.mode === "light" && (C.colorSchemes.light = {
      ...g.light !== !0 && g.light,
      palette: C.palette
    }, bh(C, "dark", g.dark)), C.palette.mode === "dark" && (C.colorSchemes.dark = {
      ...g.dark !== !0 && g.dark,
      palette: C.palette
    }, bh(C, "light", g.light)), C;
  }
  return !f && !("light" in g) && p === "light" && (g.light = !0), _S({
    ...h,
    colorSchemes: g,
    defaultColorScheme: p,
    ...typeof c != "boolean" && c
  }, ...r);
}
const ey = MS();
function jo() {
  const a = _o(ey);
  return a[xh] || a;
}
function DS(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const RS = (a) => DS(a) && a !== "classes", _l = kh({
  themeId: xh,
  defaultTheme: ey,
  rootShouldForwardProp: RS
});
function US() {
  return Mo;
}
const Dr = hb;
function Ma(a) {
  return mb(a);
}
function BS(a) {
  return typeof a.main == "string";
}
function NS(a, r = []) {
  if (!BS(a))
    return !1;
  for (const f of r)
    if (!a.hasOwnProperty(f) || typeof a[f] != "string")
      return !1;
  return !0;
}
function ny(a = []) {
  return ([, r]) => r && NS(r, a);
}
function HS(a) {
  return Ol("MuiTypography", a);
}
Do("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const jS = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, wS = US(), GS = (a) => {
  const {
    align: r,
    gutterBottom: f,
    noWrap: c,
    paragraph: s,
    variant: d,
    classes: h
  } = a, p = {
    root: ["root", d, a.align !== "inherit" && `align${cn(r)}`, f && "gutterBottom", c && "noWrap", s && "paragraph"]
  };
  return Oa(p, HS, h);
}, qS = _l("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: f
    } = a;
    return [r.root, f.variant && r[f.variant], f.align !== "inherit" && r[`align${cn(f.align)}`], f.noWrap && r.noWrap, f.gutterBottom && r.gutterBottom, f.paragraph && r.paragraph];
  }
})(Dr(({
  theme: a
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
  }, ...Object.entries(a.typography).filter(([r, f]) => r !== "inherit" && f && typeof f == "object").map(([r, f]) => ({
    props: {
      variant: r
    },
    style: f
  })), ...Object.entries(a.palette).filter(ny()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  })), ...Object.entries(a.palette?.text || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
    props: {
      color: `text${cn(r)}`
    },
    style: {
      color: (a.vars || a).palette.text[r]
    }
  })), {
    props: ({
      ownerState: r
    }) => r.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), Sh = {
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
}, ba = /* @__PURE__ */ vt.forwardRef(function(r, f) {
  const {
    color: c,
    ...s
  } = Ma({
    props: r,
    name: "MuiTypography"
  }), d = !jS[c], h = wS({
    ...s,
    ...d && {
      color: c
    }
  }), {
    align: p = "inherit",
    className: b,
    component: g,
    gutterBottom: O = !1,
    noWrap: C = !1,
    paragraph: U = !1,
    variant: H = "body1",
    variantMapping: D = Sh,
    ...E
  } = h, q = {
    ...h,
    align: p,
    color: c,
    className: b,
    component: g,
    gutterBottom: O,
    noWrap: C,
    paragraph: U,
    variant: H,
    variantMapping: D
  }, Q = g || (U ? "p" : D[H] || Sh[H]) || "span", Z = GS(q);
  return /* @__PURE__ */ yt.jsx(qS, {
    as: Q,
    ref: f,
    className: zl(Z.root, b),
    ...E,
    ownerState: q,
    style: {
      ...p !== "inherit" && {
        "--Typography-textAlign": p
      },
      ...E.style
    }
  });
}), Th = Kb({
  createStyledComponent: _l("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (a) => Ma({
    props: a,
    name: "MuiStack"
  })
});
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var f = arguments[r];
      for (var c in f)
        Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
    }
    return a;
  }, yr.apply(this, arguments);
}
function YS(a, r) {
  if (a == null) return {};
  var f = {}, c = Object.keys(a), s, d;
  for (d = 0; d < c.length; d++)
    s = c[d], !(r.indexOf(s) >= 0) && (f[s] = a[s]);
  return f;
}
var LS = ["cdnSuffix", "cdnUrl", "countryCode", "style", "svg"], XS = "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/", QS = "svg", VS = 127397, $S = function(r) {
  var f = r.cdnSuffix, c = f === void 0 ? QS : f, s = r.cdnUrl, d = s === void 0 ? XS : s, h = r.countryCode, p = r.style, b = r.svg, g = b === void 0 ? !1 : b, O = YS(r, LS);
  if (typeof h != "string")
    return null;
  if (g) {
    var C = "" + d + h.toLowerCase() + "." + c;
    return vt.createElement("img", Object.assign({}, O, {
      src: C,
      style: yr({
        display: "inline-block",
        width: "1em",
        height: "1em",
        verticalAlign: "middle"
      }, p)
    }));
  }
  var U = h.toUpperCase().replace(/./g, function(H) {
    return String.fromCodePoint(H.charCodeAt(0) + VS);
  });
  return vt.createElement("span", Object.assign({
    role: "img"
  }, O, {
    style: yr({
      display: "inline-block",
      fontSize: "1em",
      lineHeight: "1em",
      verticalAlign: "middle"
    }, p)
  }), U);
};
function Ah(a) {
  try {
    return a.matches(":focus-visible");
  } catch {
  }
  return !1;
}
const ZS = Eb({
  createStyledComponent: _l("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (a, r) => {
      const {
        ownerState: f
      } = a;
      return [r.root, r[`maxWidth${cn(String(f.maxWidth))}`], f.fixed && r.fixed, f.disableGutters && r.disableGutters];
    }
  }),
  useThemeProps: (a) => Ma({
    props: a,
    name: "MuiContainer"
  })
});
function kS(a) {
  return Ol("MuiDivider", a);
}
Do("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const KS = (a) => {
  const {
    absolute: r,
    children: f,
    classes: c,
    flexItem: s,
    light: d,
    orientation: h,
    textAlign: p,
    variant: b
  } = a;
  return Oa({
    root: ["root", r && "absolute", b, d && "light", h === "vertical" && "vertical", s && "flexItem", f && "withChildren", f && h === "vertical" && "withChildrenVertical", p === "right" && h !== "vertical" && "textAlignRight", p === "left" && h !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", h === "vertical" && "wrapperVertical"]
  }, kS, c);
}, JS = _l("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: f
    } = a;
    return [r.root, f.absolute && r.absolute, r[f.variant], f.light && r.light, f.orientation === "vertical" && r.vertical, f.flexItem && r.flexItem, f.children && r.withChildren, f.children && f.orientation === "vertical" && r.withChildrenVertical, f.textAlign === "right" && f.orientation !== "vertical" && r.textAlignRight, f.textAlign === "left" && f.orientation !== "vertical" && r.textAlignLeft];
  }
})(Dr(({
  theme: a
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (a.vars || a).palette.divider,
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
      borderColor: a.alpha((a.vars || a).palette.divider, 0.08)
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
      marginLeft: a.spacing(2),
      marginRight: a.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: a.spacing(1),
      marginBottom: a.spacing(1)
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
      ownerState: r
    }) => !!r.children,
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
      ownerState: r
    }) => r.children && r.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(a.vars || a).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.orientation === "vertical" && r.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(a.vars || a).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.textAlign === "right" && r.orientation !== "vertical",
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
      ownerState: r
    }) => r.textAlign === "left" && r.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), WS = _l("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (a, r) => {
    const {
      ownerState: f
    } = a;
    return [r.wrapper, f.orientation === "vertical" && r.wrapperVertical];
  }
})(Dr(({
  theme: a
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${a.spacing(1)} * 1.2)`,
  paddingRight: `calc(${a.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${a.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${a.spacing(1)} * 1.2)`
    }
  }]
}))), bo = /* @__PURE__ */ vt.forwardRef(function(r, f) {
  const c = Ma({
    props: r,
    name: "MuiDivider"
  }), {
    absolute: s = !1,
    children: d,
    className: h,
    orientation: p = "horizontal",
    component: b = d || p === "vertical" ? "div" : "hr",
    flexItem: g = !1,
    light: O = !1,
    role: C = b !== "hr" ? "separator" : void 0,
    textAlign: U = "center",
    variant: H = "fullWidth",
    ...D
  } = c, E = {
    ...c,
    absolute: s,
    component: b,
    flexItem: g,
    light: O,
    orientation: p,
    role: C,
    textAlign: U,
    variant: H
  }, q = KS(E);
  return /* @__PURE__ */ yt.jsx(JS, {
    as: b,
    className: zl(q.root, h),
    role: C,
    ref: f,
    ownerState: E,
    "aria-orientation": C === "separator" && (b !== "hr" || p === "vertical") ? p : void 0,
    ...D,
    children: d ? /* @__PURE__ */ yt.jsx(WS, {
      className: q.wrapper,
      ownerState: E,
      children: d
    }) : null
  });
});
bo && (bo.muiSkipListHighlight = !0);
const _u = Lb({
  createStyledComponent: _l("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (a, r) => {
      const {
        ownerState: f
      } = a;
      return [r.root, f.container && r.container];
    }
  }),
  componentName: "MuiGrid",
  useThemeProps: (a) => Ma({
    props: a,
    name: "MuiGrid"
  }),
  useTheme: jo
});
function FS(a) {
  return Ol("MuiLink", a);
}
const PS = Do("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), IS = ({
  theme: a,
  ownerState: r
}) => {
  const f = r.color;
  if ("colorSpace" in a && a.colorSpace) {
    const d = an(a, `palette.${f}.main`) || an(a, `palette.${f}`) || r.color;
    return a.alpha(d, 0.4);
  }
  const c = an(a, `palette.${f}.main`, !1) || an(a, `palette.${f}`, !1) || r.color, s = an(a, `palette.${f}.mainChannel`) || an(a, `palette.${f}Channel`);
  return "vars" in a && s ? `rgba(${s} / 0.4)` : No(c, 0.4);
}, Ch = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, t2 = (a) => {
  const {
    classes: r,
    component: f,
    focusVisible: c,
    underline: s
  } = a, d = {
    root: ["root", `underline${cn(s)}`, f === "button" && "button", c && "focusVisible"]
  };
  return Oa(d, FS, r);
}, e2 = _l(ba, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: f
    } = a;
    return [r.root, r[`underline${cn(f.underline)}`], f.component === "button" && r.button];
  }
})(Dr(({
  theme: a
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
      underline: r,
      ownerState: f
    }) => r === "always" && f.color !== "inherit",
    style: {
      textDecorationColor: "var(--Link-underlineColor)"
    }
  }, {
    props: ({
      underline: r,
      ownerState: f
    }) => r === "always" && f.color === "inherit",
    style: a.colorSpace ? {
      textDecorationColor: a.alpha("currentColor", 0.4)
    } : null
  }, ...Object.entries(a.palette).filter(ny()).map(([r]) => ({
    props: {
      underline: "always",
      color: r
    },
    style: {
      "--Link-underlineColor": a.alpha((a.vars || a).palette[r].main, 0.4)
    }
  })), {
    props: {
      underline: "always",
      color: "textPrimary"
    },
    style: {
      "--Link-underlineColor": a.alpha((a.vars || a).palette.text.primary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textSecondary"
    },
    style: {
      "--Link-underlineColor": a.alpha((a.vars || a).palette.text.secondary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textDisabled"
    },
    style: {
      "--Link-underlineColor": (a.vars || a).palette.text.disabled
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
      [`&.${PS.focusVisible}`]: {
        outline: "auto"
      }
    }
  }]
}))), Tl = /* @__PURE__ */ vt.forwardRef(function(r, f) {
  const c = Ma({
    props: r,
    name: "MuiLink"
  }), s = jo(), {
    className: d,
    color: h = "primary",
    component: p = "a",
    onBlur: b,
    onFocus: g,
    TypographyClasses: O,
    underline: C = "always",
    variant: U = "inherit",
    sx: H,
    ...D
  } = c, [E, q] = vt.useState(!1), Q = (lt) => {
    Ah(lt.target) || q(!1), b && b(lt);
  }, Z = (lt) => {
    Ah(lt.target) && q(!0), g && g(lt);
  }, F = {
    ...c,
    color: h,
    component: p,
    focusVisible: E,
    underline: C,
    variant: U
  }, k = t2(F);
  return /* @__PURE__ */ yt.jsx(e2, {
    color: h,
    className: zl(k.root, d),
    classes: O,
    component: p,
    onBlur: Q,
    onFocus: Z,
    ref: f,
    ownerState: F,
    variant: U,
    ...D,
    sx: [...Ch[h] === void 0 ? [{
      color: h
    }] : [], ...Array.isArray(H) ? H : [H]],
    style: {
      ...D.style,
      ...C === "always" && h !== "inherit" && !Ch[h] && {
        "--Link-underlineColor": IS({
          theme: s,
          ownerState: F
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
var n2 = {
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
const Rr = (a, r, f, c) => {
  const s = vt.forwardRef(
    ({ color: d = "currentColor", size: h = 24, stroke: p = 2, title: b, className: g, children: O, ...C }, U) => vt.createElement(
      "svg",
      {
        ref: U,
        ...n2[a],
        width: h,
        height: h,
        className: ["tabler-icon", `tabler-icon-${r}`, g].join(" "),
        strokeWidth: p,
        stroke: d,
        ...C
      },
      [
        b && vt.createElement("title", { key: "svg-title" }, b),
        ...c.map(([H, D]) => vt.createElement(H, D)),
        ...Array.isArray(O) ? O : [O]
      ]
    )
  );
  return s.displayName = `${f}`, s;
};
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [["path", { d: "M8 11v5", key: "svg-0" }], ["path", { d: "M8 8v.01", key: "svg-1" }], ["path", { d: "M12 16v-5", key: "svg-2" }], ["path", { d: "M16 16v-3a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z", key: "svg-4" }]], a2 = Rr("outline", "brand-linkedin", "BrandLinkedin", l2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = [["path", { d: "M4 4l11.733 16h4.267l-11.733 -16z", key: "svg-0" }], ["path", { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772", key: "svg-1" }]], i2 = Rr("outline", "brand-x", "BrandX", u2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r2 = [["path", { d: "M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z", key: "svg-0" }], ["path", { d: "M10 9l5 3l-5 3z", key: "svg-1" }]], c2 = Rr("outline", "brand-youtube", "BrandYoutube", r2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = [["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z", key: "svg-0" }], ["path", { d: "M3 7l9 6l9 -6", key: "svg-1" }]], o2 = Rr("outline", "mail", "Mail", f2), s2 = "Co-funded by the European Union", d2 = "This project is co-funded by the European Union under grant agreement ID 101139711. The information and views set out in this website are those of the URBREATH Consortium only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible for them.", m2 = "Copyrights © 2025 URBREATH. All Rights Reserved.", h2 = "Privacy Policy", y2 = "Cookie Declaration", g2 = "Terms of Usage", va = {
  coFunded: s2,
  grantAgreement: d2,
  copyright: m2,
  privacyPolicy: h2,
  cookies: y2,
  terms: g2
}, p2 = ({ mt: a = "16px" }) => {
  const r = jo();
  return /* @__PURE__ */ yt.jsx(
    ZS,
    {
      sx: {
        bgcolor: "background.default",
        mt: a,
        width: "calc(100% + 32px)",
        marginLeft: -2,
        marginBottom: -2,
        paddingY: 4,
        paddingX: 2
      },
      children: /* @__PURE__ */ yt.jsx(_u, { container: !0, spacing: 5, sx: { paddingTop: "0px!important" }, children: /* @__PURE__ */ yt.jsxs(
        _u,
        {
          sx: { display: "flex", flexDirection: { xs: "column", md: "row" } },
          gap: 2,
          children: [
            /* @__PURE__ */ yt.jsxs(
              _u,
              {
                sx: {
                  display: "flex",
                  alignItems: { xs: "center", md: "normal" },
                  maxWidth: { xs: "unset", md: "220px!important" }
                },
                gap: 2,
                children: [
                  /* @__PURE__ */ yt.jsx(
                    $S,
                    {
                      countryCode: "EU",
                      svg: !0,
                      style: {
                        width: "50px",
                        height: "38px",
                        border: `1px solid ${r.palette.primary.light}`
                      },
                      title: "US"
                    }
                  ),
                  /* @__PURE__ */ yt.jsx(ba, { variant: "body2", color: "grey.800", fontWeight: "700", children: va.coFunded })
                ]
              }
            ),
            /* @__PURE__ */ yt.jsxs(
              _u,
              {
                sx: { display: "flex", flexDirection: "column" },
                gap: { xs: 2, md: 4 },
                children: [
                  /* @__PURE__ */ yt.jsx(ba, { variant: "caption", color: "grey.800", fontSize: "13px", children: va.grantAgreement }),
                  /* @__PURE__ */ yt.jsx(
                    bo,
                    {
                      orientation: "horizontal",
                      sx: { marginBottom: "0px!important" }
                    }
                  ),
                  /* @__PURE__ */ yt.jsxs(
                    _u,
                    {
                      sx: {
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: { xs: "wrap", lg: "nowrap" }
                      },
                      gap: 3,
                      children: [
                        /* @__PURE__ */ yt.jsxs(
                          Th,
                          {
                            direction: { xs: "column", sm: "row" },
                            spacing: 2,
                            sx: {
                              display: "flex",
                              alignItems: { xs: "flex-start", sm: "center" },
                              "& .MuiTypography-root": {
                                color: "primary.700",
                                whiteSpace: { xs: "wrap", sm: "nowrap" }
                              }
                            },
                            children: [
                              /* @__PURE__ */ yt.jsx(
                                Tl,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer", flexShrink: 0 },
                                  href: "https://urbreath.eu/cookie-declaration/",
                                  target: "_blank",
                                  children: va.cookies
                                }
                              ),
                              /* @__PURE__ */ yt.jsx(
                                ba,
                                {
                                  variant: "button",
                                  color: "primary.700",
                                  display: { xs: "none", sm: "flex" },
                                  children: " | "
                                }
                              ),
                              /* @__PURE__ */ yt.jsx(
                                Tl,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer" },
                                  href: "https://urbreath.eu/terms-of-use/",
                                  target: "_blank",
                                  children: va.terms
                                }
                              ),
                              /* @__PURE__ */ yt.jsx(
                                ba,
                                {
                                  variant: "button",
                                  color: "primary.700",
                                  display: { xs: "none", sm: "flex" },
                                  children: " | "
                                }
                              ),
                              /* @__PURE__ */ yt.jsx(
                                Tl,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer", flexShrink: 0 },
                                  href: "https://urbreath.eu/privacy-policy",
                                  target: "_blank",
                                  children: va.privacyPolicy
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ yt.jsxs(
                          Th,
                          {
                            direction: "row",
                            sx: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 2,
                              fontSize: 13,
                              "& svg": { color: "primary.700" }
                            },
                            children: [
                              /* @__PURE__ */ yt.jsx(
                                Tl,
                                {
                                  href: "https://www.linkedin.com/company/urbreath-horizon-europe-project",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#0A66C2" } },
                                  children: /* @__PURE__ */ yt.jsx(a2, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ yt.jsx(
                                Tl,
                                {
                                  href: "https://www.youtube.com/channel/UC2n4Kx-Joo_Rhx9KZTrU-bg",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#FF0000" } },
                                  children: /* @__PURE__ */ yt.jsx(c2, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ yt.jsx(
                                Tl,
                                {
                                  href: "https://x.com/URBREATHProject",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#000000" } },
                                  children: /* @__PURE__ */ yt.jsx(i2, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ yt.jsx(
                                Tl,
                                {
                                  href: "mailto:info@urbreath.eu",
                                  sx: { "& svg:hover": { color: "secondary.500" } },
                                  children: /* @__PURE__ */ yt.jsx(o2, { style: { fontSize: "24px" } })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ yt.jsx(ba, { variant: "body2", fontWeight: 400, children: va.copyright })
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
};
function v2() {
  return /* @__PURE__ */ yt.jsx(yt.Fragment, { children: /* @__PURE__ */ yt.jsx(p2, {}) });
}
const b2 = Jp(v2);
customElements.define("urbreath-footer", b2);
