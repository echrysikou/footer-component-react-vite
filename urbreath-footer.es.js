function Qb(n, l) {
  for (var i = 0; i < l.length; i++) {
    const u = l[i];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const s in u)
        if (s !== "default" && !(s in n)) {
          const f = Object.getOwnPropertyDescriptor(u, s);
          f && Object.defineProperty(n, s, f.get ? f : {
            enumerable: !0,
            get: () => u[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function Zb(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var $s = { exports: {} }, dt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;
function Kb() {
  if (lp) return dt;
  lp = 1;
  var n = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), A = Symbol.iterator;
  function _(E) {
    return E === null || typeof E != "object" ? null : (E = A && E[A] || E["@@iterator"], typeof E == "function" ? E : null);
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
  }, C = Object.assign, z = {};
  function k(E, G, K) {
    this.props = E, this.context = G, this.refs = z, this.updater = K || M;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(E, G) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, G, "setState");
  }, k.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function F() {
  }
  F.prototype = k.prototype;
  function V(E, G, K) {
    this.props = E, this.context = G, this.refs = z, this.updater = K || M;
  }
  var Q = V.prototype = new F();
  Q.constructor = V, C(Q, k.prototype), Q.isPureReactComponent = !0;
  var w = Array.isArray;
  function q() {
  }
  var X = { H: null, A: null, T: null, S: null }, P = Object.prototype.hasOwnProperty;
  function W(E, G, K) {
    var et = K.ref;
    return {
      $$typeof: n,
      type: E,
      key: G,
      ref: et !== void 0 ? et : null,
      props: K
    };
  }
  function ut(E, G) {
    return W(E.type, G, E.props);
  }
  function at(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }
  function b(E) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(K) {
      return G[K];
    });
  }
  var tt = /\/+/g;
  function I(E, G) {
    return typeof E == "object" && E !== null && E.key != null ? b("" + E.key) : G.toString(36);
  }
  function ct(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(q, q) : (E.status = "pending", E.then(
          function(G) {
            E.status === "pending" && (E.status = "fulfilled", E.value = G);
          },
          function(G) {
            E.status === "pending" && (E.status = "rejected", E.reason = G);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function N(E, G, K, et, ft) {
    var pt = typeof E;
    (pt === "undefined" || pt === "boolean") && (E = null);
    var gt = !1;
    if (E === null) gt = !0;
    else
      switch (pt) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case n:
            case l:
              gt = !0;
              break;
            case v:
              return gt = E._init, N(
                gt(E._payload),
                G,
                K,
                et,
                ft
              );
          }
      }
    if (gt)
      return ft = ft(E), gt = et === "" ? "." + I(E, 0) : et, w(ft) ? (K = "", gt != null && (K = gt.replace(tt, "$&/") + "/"), N(ft, G, K, "", function(Ta) {
        return Ta;
      })) : ft != null && (at(ft) && (ft = ut(
        ft,
        K + (ft.key == null || E && E.key === ft.key ? "" : ("" + ft.key).replace(
          tt,
          "$&/"
        ) + "/") + gt
      )), G.push(ft)), 1;
    gt = 0;
    var ue = et === "" ? "." : et + ":";
    if (w(E))
      for (var Vt = 0; Vt < E.length; Vt++)
        et = E[Vt], pt = ue + I(et, Vt), gt += N(
          et,
          G,
          K,
          pt,
          ft
        );
    else if (Vt = _(E), typeof Vt == "function")
      for (E = Vt.call(E), Vt = 0; !(et = E.next()).done; )
        et = et.value, pt = ue + I(et, Vt++), gt += N(
          et,
          G,
          K,
          pt,
          ft
        );
    else if (pt === "object") {
      if (typeof E.then == "function")
        return N(
          ct(E),
          G,
          K,
          et,
          ft
        );
      throw G = String(E), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return gt;
  }
  function Z(E, G, K) {
    if (E == null) return E;
    var et = [], ft = 0;
    return N(E, et, "", "", function(pt) {
      return G.call(K, pt, ft++);
    }), et;
  }
  function rt(E) {
    if (E._status === -1) {
      var G = E._result;
      G = G(), G.then(
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = K);
        },
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = K);
        }
      ), E._status === -1 && (E._status = 0, E._result = G);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var xt = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, Ct = {
    map: Z,
    forEach: function(E, G, K) {
      Z(
        E,
        function() {
          G.apply(this, arguments);
        },
        K
      );
    },
    count: function(E) {
      var G = 0;
      return Z(E, function() {
        G++;
      }), G;
    },
    toArray: function(E) {
      return Z(E, function(G) {
        return G;
      }) || [];
    },
    only: function(E) {
      if (!at(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return dt.Activity = S, dt.Children = Ct, dt.Component = k, dt.Fragment = i, dt.Profiler = s, dt.PureComponent = V, dt.StrictMode = u, dt.Suspense = y, dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, dt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return X.H.useMemoCache(E);
    }
  }, dt.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, dt.cacheSignal = function() {
    return null;
  }, dt.cloneElement = function(E, G, K) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var et = C({}, E.props), ft = E.key;
    if (G != null)
      for (pt in G.key !== void 0 && (ft = "" + G.key), G)
        !P.call(G, pt) || pt === "key" || pt === "__self" || pt === "__source" || pt === "ref" && G.ref === void 0 || (et[pt] = G[pt]);
    var pt = arguments.length - 2;
    if (pt === 1) et.children = K;
    else if (1 < pt) {
      for (var gt = Array(pt), ue = 0; ue < pt; ue++)
        gt[ue] = arguments[ue + 2];
      et.children = gt;
    }
    return W(E.type, ft, et);
  }, dt.createContext = function(E) {
    return E = {
      $$typeof: h,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: f,
      _context: E
    }, E;
  }, dt.createElement = function(E, G, K) {
    var et, ft = {}, pt = null;
    if (G != null)
      for (et in G.key !== void 0 && (pt = "" + G.key), G)
        P.call(G, et) && et !== "key" && et !== "__self" && et !== "__source" && (ft[et] = G[et]);
    var gt = arguments.length - 2;
    if (gt === 1) ft.children = K;
    else if (1 < gt) {
      for (var ue = Array(gt), Vt = 0; Vt < gt; Vt++)
        ue[Vt] = arguments[Vt + 2];
      ft.children = ue;
    }
    if (E && E.defaultProps)
      for (et in gt = E.defaultProps, gt)
        ft[et] === void 0 && (ft[et] = gt[et]);
    return W(E, pt, ft);
  }, dt.createRef = function() {
    return { current: null };
  }, dt.forwardRef = function(E) {
    return { $$typeof: m, render: E };
  }, dt.isValidElement = at, dt.lazy = function(E) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: E },
      _init: rt
    };
  }, dt.memo = function(E, G) {
    return {
      $$typeof: p,
      type: E,
      compare: G === void 0 ? null : G
    };
  }, dt.startTransition = function(E) {
    var G = X.T, K = {};
    X.T = K;
    try {
      var et = E(), ft = X.S;
      ft !== null && ft(K, et), typeof et == "object" && et !== null && typeof et.then == "function" && et.then(q, xt);
    } catch (pt) {
      xt(pt);
    } finally {
      G !== null && K.types !== null && (G.types = K.types), X.T = G;
    }
  }, dt.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, dt.use = function(E) {
    return X.H.use(E);
  }, dt.useActionState = function(E, G, K) {
    return X.H.useActionState(E, G, K);
  }, dt.useCallback = function(E, G) {
    return X.H.useCallback(E, G);
  }, dt.useContext = function(E) {
    return X.H.useContext(E);
  }, dt.useDebugValue = function() {
  }, dt.useDeferredValue = function(E, G) {
    return X.H.useDeferredValue(E, G);
  }, dt.useEffect = function(E, G) {
    return X.H.useEffect(E, G);
  }, dt.useEffectEvent = function(E) {
    return X.H.useEffectEvent(E);
  }, dt.useId = function() {
    return X.H.useId();
  }, dt.useImperativeHandle = function(E, G, K) {
    return X.H.useImperativeHandle(E, G, K);
  }, dt.useInsertionEffect = function(E, G) {
    return X.H.useInsertionEffect(E, G);
  }, dt.useLayoutEffect = function(E, G) {
    return X.H.useLayoutEffect(E, G);
  }, dt.useMemo = function(E, G) {
    return X.H.useMemo(E, G);
  }, dt.useOptimistic = function(E, G) {
    return X.H.useOptimistic(E, G);
  }, dt.useReducer = function(E, G, K) {
    return X.H.useReducer(E, G, K);
  }, dt.useRef = function(E) {
    return X.H.useRef(E);
  }, dt.useState = function(E) {
    return X.H.useState(E);
  }, dt.useSyncExternalStore = function(E, G, K) {
    return X.H.useSyncExternalStore(
      E,
      G,
      K
    );
  }, dt.useTransition = function() {
    return X.H.useTransition();
  }, dt.version = "19.2.0", dt;
}
var ip;
function wf() {
  return ip || (ip = 1, $s.exports = Kb()), $s.exports;
}
var Y = wf();
const Lf = /* @__PURE__ */ Zb(Y), ff = /* @__PURE__ */ Qb({
  __proto__: null,
  default: Lf
}, [Y]);
var qs = { exports: {} }, li = {}, Ys = { exports: {} }, Vs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up;
function Ib() {
  return up || (up = 1, (function(n) {
    function l(N, Z) {
      var rt = N.length;
      N.push(Z);
      t: for (; 0 < rt; ) {
        var xt = rt - 1 >>> 1, Ct = N[xt];
        if (0 < s(Ct, Z))
          N[xt] = Z, N[rt] = Ct, rt = xt;
        else break t;
      }
    }
    function i(N) {
      return N.length === 0 ? null : N[0];
    }
    function u(N) {
      if (N.length === 0) return null;
      var Z = N[0], rt = N.pop();
      if (rt !== Z) {
        N[0] = rt;
        t: for (var xt = 0, Ct = N.length, E = Ct >>> 1; xt < E; ) {
          var G = 2 * (xt + 1) - 1, K = N[G], et = G + 1, ft = N[et];
          if (0 > s(K, rt))
            et < Ct && 0 > s(ft, K) ? (N[xt] = ft, N[et] = rt, xt = et) : (N[xt] = K, N[G] = rt, xt = G);
          else if (et < Ct && 0 > s(ft, rt))
            N[xt] = ft, N[et] = rt, xt = et;
          else break t;
        }
      }
      return Z;
    }
    function s(N, Z) {
      var rt = N.sortIndex - Z.sortIndex;
      return rt !== 0 ? rt : N.id - Z.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, m = h.now();
      n.unstable_now = function() {
        return h.now() - m;
      };
    }
    var y = [], p = [], v = 1, S = null, A = 3, _ = !1, M = !1, C = !1, z = !1, k = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function Q(N) {
      for (var Z = i(p); Z !== null; ) {
        if (Z.callback === null) u(p);
        else if (Z.startTime <= N)
          u(p), Z.sortIndex = Z.expirationTime, l(y, Z);
        else break;
        Z = i(p);
      }
    }
    function w(N) {
      if (C = !1, Q(N), !M)
        if (i(y) !== null)
          M = !0, q || (q = !0, b());
        else {
          var Z = i(p);
          Z !== null && ct(w, Z.startTime - N);
        }
    }
    var q = !1, X = -1, P = 5, W = -1;
    function ut() {
      return z ? !0 : !(n.unstable_now() - W < P);
    }
    function at() {
      if (z = !1, q) {
        var N = n.unstable_now();
        W = N;
        var Z = !0;
        try {
          t: {
            M = !1, C && (C = !1, F(X), X = -1), _ = !0;
            var rt = A;
            try {
              e: {
                for (Q(N), S = i(y); S !== null && !(S.expirationTime > N && ut()); ) {
                  var xt = S.callback;
                  if (typeof xt == "function") {
                    S.callback = null, A = S.priorityLevel;
                    var Ct = xt(
                      S.expirationTime <= N
                    );
                    if (N = n.unstable_now(), typeof Ct == "function") {
                      S.callback = Ct, Q(N), Z = !0;
                      break e;
                    }
                    S === i(y) && u(y), Q(N);
                  } else u(y);
                  S = i(y);
                }
                if (S !== null) Z = !0;
                else {
                  var E = i(p);
                  E !== null && ct(
                    w,
                    E.startTime - N
                  ), Z = !1;
                }
              }
              break t;
            } finally {
              S = null, A = rt, _ = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? b() : q = !1;
        }
      }
    }
    var b;
    if (typeof V == "function")
      b = function() {
        V(at);
      };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), I = tt.port2;
      tt.port1.onmessage = at, b = function() {
        I.postMessage(null);
      };
    } else
      b = function() {
        k(at, 0);
      };
    function ct(N, Z) {
      X = k(function() {
        N(n.unstable_now());
      }, Z);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, n.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < N ? Math.floor(1e3 / N) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, n.unstable_next = function(N) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = A;
      }
      var rt = A;
      A = Z;
      try {
        return N();
      } finally {
        A = rt;
      }
    }, n.unstable_requestPaint = function() {
      z = !0;
    }, n.unstable_runWithPriority = function(N, Z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var rt = A;
      A = N;
      try {
        return Z();
      } finally {
        A = rt;
      }
    }, n.unstable_scheduleCallback = function(N, Z, rt) {
      var xt = n.unstable_now();
      switch (typeof rt == "object" && rt !== null ? (rt = rt.delay, rt = typeof rt == "number" && 0 < rt ? xt + rt : xt) : rt = xt, N) {
        case 1:
          var Ct = -1;
          break;
        case 2:
          Ct = 250;
          break;
        case 5:
          Ct = 1073741823;
          break;
        case 4:
          Ct = 1e4;
          break;
        default:
          Ct = 5e3;
      }
      return Ct = rt + Ct, N = {
        id: v++,
        callback: Z,
        priorityLevel: N,
        startTime: rt,
        expirationTime: Ct,
        sortIndex: -1
      }, rt > xt ? (N.sortIndex = rt, l(p, N), i(y) === null && N === i(p) && (C ? (F(X), X = -1) : C = !0, ct(w, rt - xt))) : (N.sortIndex = Ct, l(y, N), M || _ || (M = !0, q || (q = !0, b()))), N;
    }, n.unstable_shouldYield = ut, n.unstable_wrapCallback = function(N) {
      var Z = A;
      return function() {
        var rt = A;
        A = Z;
        try {
          return N.apply(this, arguments);
        } finally {
          A = rt;
        }
      };
    };
  })(Vs)), Vs;
}
var op;
function Jb() {
  return op || (op = 1, Ys.exports = Ib()), Ys.exports;
}
var Xs = { exports: {} }, ve = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp;
function Wb() {
  if (cp) return ve;
  cp = 1;
  var n = wf();
  function l(y) {
    var p = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + y + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var u = {
    d: {
      f: i,
      r: function() {
        throw Error(l(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function f(y, p, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: S == null ? null : "" + S,
      children: y,
      containerInfo: p,
      implementation: v
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, p) {
    if (y === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, ve.createPortal = function(y, p) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(l(299));
    return f(y, p, null, v);
  }, ve.flushSync = function(y) {
    var p = h.T, v = u.p;
    try {
      if (h.T = null, u.p = 2, y) return y();
    } finally {
      h.T = p, u.p = v, u.d.f();
    }
  }, ve.preconnect = function(y, p) {
    typeof y == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, u.d.C(y, p));
  }, ve.prefetchDNS = function(y) {
    typeof y == "string" && u.d.D(y);
  }, ve.preinit = function(y, p) {
    if (typeof y == "string" && p && typeof p.as == "string") {
      var v = p.as, S = m(v, p.crossOrigin), A = typeof p.integrity == "string" ? p.integrity : void 0, _ = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      v === "style" ? u.d.S(
        y,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: S,
          integrity: A,
          fetchPriority: _
        }
      ) : v === "script" && u.d.X(y, {
        crossOrigin: S,
        integrity: A,
        fetchPriority: _,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, ve.preinitModule = function(y, p) {
    if (typeof y == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var v = m(
            p.as,
            p.crossOrigin
          );
          u.d.M(y, {
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && u.d.M(y);
  }, ve.preload = function(y, p) {
    if (typeof y == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var v = p.as, S = m(v, p.crossOrigin);
      u.d.L(y, v, {
        crossOrigin: S,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, ve.preloadModule = function(y, p) {
    if (typeof y == "string")
      if (p) {
        var v = m(p.as, p.crossOrigin);
        u.d.m(y, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else u.d.m(y);
  }, ve.requestFormReset = function(y) {
    u.d.r(y);
  }, ve.unstable_batchedUpdates = function(y, p) {
    return y(p);
  }, ve.useFormState = function(y, p, v) {
    return h.H.useFormState(y, p, v);
  }, ve.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, ve.version = "19.2.0", ve;
}
var sp;
function Pb() {
  if (sp) return Xs.exports;
  sp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (l) {
        console.error(l);
      }
  }
  return n(), Xs.exports = Wb(), Xs.exports;
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
var fp;
function t1() {
  if (fp) return li;
  fp = 1;
  var n = Jb(), l = wf(), i = Pb();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    var e = t, a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (f(t) !== t)
      throw Error(u(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var a = t, r = e; ; ) {
      var o = a.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (r = o.return, r !== null) {
          a = r;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === a) return y(o), t;
          if (c === r) return y(o), e;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== r.return) a = o, r = c;
      else {
        for (var d = !1, g = o.child; g; ) {
          if (g === a) {
            d = !0, a = o, r = c;
            break;
          }
          if (g === r) {
            d = !0, r = o, a = c;
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = c.child; g; ) {
            if (g === a) {
              d = !0, a = c, r = o;
              break;
            }
            if (g === r) {
              d = !0, r = c, a = o;
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (a.alternate !== r) throw Error(u(190));
    }
    if (a.tag !== 3) throw Error(u(188));
    return a.stateNode.current === a ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign, A = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), V = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), ut = Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
  function b(t) {
    return t === null || typeof t != "object" ? null : (t = at && t[at] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var tt = Symbol.for("react.client.reference");
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === tt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case k:
        return "Profiler";
      case z:
        return "StrictMode";
      case w:
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
        case F:
          return (t._context.displayName || "Context") + ".Consumer";
        case Q:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case X:
          return e = t.displayName || null, e !== null ? e : I(t.type) || "Memo";
        case P:
          e = t._payload, t = t._init;
          try {
            return I(t(e));
          } catch {
          }
      }
    return null;
  }
  var ct = Array.isArray, N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, xt = [], Ct = -1;
  function E(t) {
    return { current: t };
  }
  function G(t) {
    0 > Ct || (t.current = xt[Ct], xt[Ct] = null, Ct--);
  }
  function K(t, e) {
    Ct++, xt[Ct] = t.current, t.current = e;
  }
  var et = E(null), ft = E(null), pt = E(null), gt = E(null);
  function ue(t, e) {
    switch (K(pt, e), K(ft, t), K(et, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? _m(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = _m(e), t = Rm(e, t);
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
    G(et), K(et, t);
  }
  function Vt() {
    G(et), G(ft), G(pt);
  }
  function Ta(t) {
    t.memoizedState !== null && K(gt, t);
    var e = et.current, a = Rm(e, t.type);
    e !== a && (K(ft, t), K(et, a));
  }
  function rr(t) {
    ft.current === t && (G(et), G(ft)), gt.current === t && (G(gt), ei._currentValue = rt);
  }
  var lr, fl;
  function fn(t) {
    if (lr === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        lr = e && e[1] || "", fl = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + lr + t + fl;
  }
  var ir = !1;
  function dl(t, e) {
    if (!t || ir) return "";
    ir = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (H) {
                  var D = H;
                }
                Reflect.construct(t, [], $);
              } else {
                try {
                  $.call();
                } catch (H) {
                  D = H;
                }
                t.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                D = H;
              }
              ($ = t()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (H) {
            if (H && D && typeof H.stack == "string")
              return [H.stack, D.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = r.DetermineComponentFrameRoot(), d = c[0], g = c[1];
      if (d && g) {
        var x = d.split(`
`), B = g.split(`
`);
        for (o = r = 0; r < x.length && !x[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; o < B.length && !B[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (r === x.length || o === B.length)
          for (r = x.length - 1, o = B.length - 1; 1 <= r && 0 <= o && x[r] !== B[o]; )
            o--;
        for (; 1 <= r && 0 <= o; r--, o--)
          if (x[r] !== B[o]) {
            if (r !== 1 || o !== 1)
              do
                if (r--, o--, 0 > o || x[r] !== B[o]) {
                  var L = `
` + x[r].replace(" at new ", " at ");
                  return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), L;
                }
              while (1 <= r && 0 <= o);
            break;
          }
      }
    } finally {
      ir = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? fn(a) : "";
  }
  function Ci(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return fn(t.type);
      case 16:
        return fn("Lazy");
      case 13:
        return t.child !== e && e !== null ? fn("Suspense Fallback") : fn("Suspense");
      case 19:
        return fn("SuspenseList");
      case 0:
      case 15:
        return dl(t.type, !1);
      case 11:
        return dl(t.type.render, !1);
      case 1:
        return dl(t.type, !0);
      case 31:
        return fn("Activity");
      default:
        return "";
    }
  }
  function ur(t) {
    try {
      var e = "", a = null;
      do
        e += Ci(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var Se = Object.prototype.hasOwnProperty, Qn = n.unstable_scheduleCallback, Aa = n.unstable_cancelCallback, Ca = n.unstable_shouldYield, Oo = n.unstable_requestPaint, ye = n.unstable_now, Mi = n.unstable_getCurrentPriorityLevel, xe = n.unstable_ImmediatePriority, Xt = n.unstable_UserBlockingPriority, se = n.unstable_NormalPriority, Xe = n.unstable_LowPriority, or = n.unstable_IdlePriority, _o = n.log, By = n.unstable_setDisableYieldValue, hl = null, He = null;
  function Zn(t) {
    if (typeof _o == "function" && By(t), He && typeof He.setStrictMode == "function")
      try {
        He.setStrictMode(hl, t);
      } catch {
      }
  }
  var ze = Math.clz32 ? Math.clz32 : Hy, Dy = Math.log, Ny = Math.LN2;
  function Hy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Dy(t) / Ny | 0) | 0;
  }
  var Oi = 256, _i = 262144, Ri = 4194304;
  function Ma(t) {
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
  function Bi(t, e, a) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var o = 0, c = t.suspendedLanes, d = t.pingedLanes;
    t = t.warmLanes;
    var g = r & 134217727;
    return g !== 0 ? (r = g & ~c, r !== 0 ? o = Ma(r) : (d &= g, d !== 0 ? o = Ma(d) : a || (a = g & ~t, a !== 0 && (o = Ma(a))))) : (g = r & ~c, g !== 0 ? o = Ma(g) : d !== 0 ? o = Ma(d) : a || (a = r & ~t, a !== 0 && (o = Ma(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & c) === 0 && (c = o & -o, a = e & -e, c >= a || c === 32 && (a & 4194048) !== 0) ? e : o;
  }
  function ml(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function zy(t, e) {
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
  function c0() {
    var t = Ri;
    return Ri <<= 1, (Ri & 62914560) === 0 && (Ri = 4194304), t;
  }
  function Ro(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function pl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function wy(t, e, a, r, o, c) {
    var d = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var g = t.entanglements, x = t.expirationTimes, B = t.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var L = 31 - ze(a), $ = 1 << L;
      g[L] = 0, x[L] = -1;
      var D = B[L];
      if (D !== null)
        for (B[L] = null, L = 0; L < D.length; L++) {
          var H = D[L];
          H !== null && (H.lane &= -536870913);
        }
      a &= ~$;
    }
    r !== 0 && s0(t, r, 0), c !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(d & ~e));
  }
  function s0(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var r = 31 - ze(e);
    t.entangledLanes |= e, t.entanglements[r] = t.entanglements[r] | 1073741824 | a & 261930;
  }
  function f0(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var r = 31 - ze(a), o = 1 << r;
      o & e | t[r] & e && (t[r] |= e), a &= ~o;
    }
  }
  function d0(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : Bo(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function Bo(t) {
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
  function Do(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function h0() {
    var t = Z.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Wm(t.type));
  }
  function m0(t, e) {
    var a = Z.p;
    try {
      return Z.p = t, e();
    } finally {
      Z.p = a;
    }
  }
  var Kn = Math.random().toString(36).slice(2), fe = "__reactFiber$" + Kn, Ce = "__reactProps$" + Kn, cr = "__reactContainer$" + Kn, No = "__reactEvents$" + Kn, Ly = "__reactListeners$" + Kn, Uy = "__reactHandles$" + Kn, p0 = "__reactResources$" + Kn, gl = "__reactMarker$" + Kn;
  function Ho(t) {
    delete t[fe], delete t[Ce], delete t[No], delete t[Ly], delete t[Uy];
  }
  function sr(t) {
    var e = t[fe];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[cr] || a[fe]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = Lm(t); t !== null; ) {
            if (a = t[fe]) return a;
            t = Lm(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function fr(t) {
    if (t = t[fe] || t[cr]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function yl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function dr(t) {
    var e = t[p0];
    return e || (e = t[p0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function oe(t) {
    t[gl] = !0;
  }
  var g0 = /* @__PURE__ */ new Set(), y0 = {};
  function Oa(t, e) {
    hr(t, e), hr(t + "Capture", e);
  }
  function hr(t, e) {
    for (y0[t] = e, t = 0; t < e.length; t++)
      g0.add(e[t]);
  }
  var Gy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), v0 = {}, b0 = {};
  function jy(t) {
    return Se.call(b0, t) ? !0 : Se.call(v0, t) ? !1 : Gy.test(t) ? b0[t] = !0 : (v0[t] = !0, !1);
  }
  function Di(t, e, a) {
    if (jy(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var r = e.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function Ni(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function On(t, e, a, r) {
    if (r === null) t.removeAttribute(a);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + r);
    }
  }
  function Fe(t) {
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
  function S0(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function ky(t, e, a) {
    var r = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var o = r.get, c = r.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(d) {
          a = "" + d, c.call(this, d);
        }
      }), Object.defineProperty(t, e, {
        enumerable: r.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(d) {
          a = "" + d;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function zo(t) {
    if (!t._valueTracker) {
      var e = S0(t) ? "checked" : "value";
      t._valueTracker = ky(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function x0(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), r = "";
    return t && (r = S0(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== a ? (e.setValue(t), !0) : !1;
  }
  function Hi(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var $y = /[\n"\\]/g;
  function Qe(t) {
    return t.replace(
      $y,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wo(t, e, a, r, o, c, d, g) {
    t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Fe(e)) : t.value !== "" + Fe(e) && (t.value = "" + Fe(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? Lo(t, d, Fe(e)) : a != null ? Lo(t, d, Fe(a)) : r != null && t.removeAttribute("value"), o == null && c != null && (t.defaultChecked = !!c), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + Fe(g) : t.removeAttribute("name");
  }
  function E0(t, e, a, r, o, c, d, g) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || e != null)) {
        zo(t);
        return;
      }
      a = a != null ? "" + Fe(a) : "", e = e != null ? "" + Fe(e) : a, g || e === t.value || (t.value = e), t.defaultValue = e;
    }
    r = r ?? o, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = g ? t.checked : !!r, t.defaultChecked = !!r, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d), zo(t);
  }
  function Lo(t, e, a) {
    e === "number" && Hi(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function mr(t, e, a, r) {
    if (t = t.options, e) {
      e = {};
      for (var o = 0; o < a.length; o++)
        e["$" + a[o]] = !0;
      for (a = 0; a < t.length; a++)
        o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && r && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Fe(a), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === a) {
          t[o].selected = !0, r && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function T0(t, e, a) {
    if (e != null && (e = "" + Fe(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Fe(a) : "";
  }
  function A0(t, e, a, r) {
    if (e == null) {
      if (r != null) {
        if (a != null) throw Error(u(92));
        if (ct(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), e = a;
    }
    a = Fe(e), t.defaultValue = a, r = t.textContent, r === a && r !== "" && r !== null && (t.value = r), zo(t);
  }
  function pr(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var qy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function C0(t, e, a) {
    var r = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? r ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : r ? t.setProperty(e, a) : typeof a != "number" || a === 0 || qy.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function M0(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(u(62));
    if (t = t.style, a != null) {
      for (var r in a)
        !a.hasOwnProperty(r) || e != null && e.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = "");
      for (var o in e)
        r = e[o], e.hasOwnProperty(o) && a[o] !== r && C0(t, o, r);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && C0(t, c, e[c]);
  }
  function Uo(t) {
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
  var Yy = /* @__PURE__ */ new Map([
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
  ]), Vy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zi(t) {
    return Vy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function _n() {
  }
  var Go = null;
  function jo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var gr = null, yr = null;
  function O0(t) {
    var e = fr(t);
    if (e && (t = e.stateNode)) {
      var a = t[Ce] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (wo(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Qe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var r = a[e];
              if (r !== t && r.form === t.form) {
                var o = r[Ce] || null;
                if (!o) throw Error(u(90));
                wo(
                  r,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              r = a[e], r.form === t.form && x0(r);
          }
          break t;
        case "textarea":
          T0(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && mr(t, !!a.multiple, e, !1);
      }
    }
  }
  var ko = !1;
  function _0(t, e, a) {
    if (ko) return t(e, a);
    ko = !0;
    try {
      var r = t(e);
      return r;
    } finally {
      if (ko = !1, (gr !== null || yr !== null) && (xu(), gr && (e = gr, t = yr, yr = gr = null, O0(e), t)))
        for (e = 0; e < t.length; e++) O0(t[e]);
    }
  }
  function vl(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var r = a[Ce] || null;
    if (r === null) return null;
    a = r[e];
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
        (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        u(231, e, typeof a)
      );
    return a;
  }
  var Rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $o = !1;
  if (Rn)
    try {
      var bl = {};
      Object.defineProperty(bl, "passive", {
        get: function() {
          $o = !0;
        }
      }), window.addEventListener("test", bl, bl), window.removeEventListener("test", bl, bl);
    } catch {
      $o = !1;
    }
  var In = null, qo = null, wi = null;
  function R0() {
    if (wi) return wi;
    var t, e = qo, a = e.length, r, o = "value" in In ? In.value : In.textContent, c = o.length;
    for (t = 0; t < a && e[t] === o[t]; t++) ;
    var d = a - t;
    for (r = 1; r <= d && e[a - r] === o[c - r]; r++) ;
    return wi = o.slice(t, 1 < r ? 1 - r : void 0);
  }
  function Li(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ui() {
    return !0;
  }
  function B0() {
    return !1;
  }
  function Me(t) {
    function e(a, r, o, c, d) {
      this._reactName = a, this._targetInst = o, this.type = r, this.nativeEvent = c, this.target = d, this.currentTarget = null;
      for (var g in t)
        t.hasOwnProperty(g) && (a = t[g], this[g] = a ? a(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Ui : B0, this.isPropagationStopped = B0, this;
    }
    return S(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ui);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ui);
      },
      persist: function() {
      },
      isPersistent: Ui
    }), e;
  }
  var _a = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gi = Me(_a), Sl = S({}, _a, { view: 0, detail: 0 }), Xy = Me(Sl), Yo, Vo, xl, ji = S({}, Sl, {
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
    getModifierState: Fo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== xl && (xl && t.type === "mousemove" ? (Yo = t.screenX - xl.screenX, Vo = t.screenY - xl.screenY) : Vo = Yo = 0, xl = t), Yo);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Vo;
    }
  }), D0 = Me(ji), Fy = S({}, ji, { dataTransfer: 0 }), Qy = Me(Fy), Zy = S({}, Sl, { relatedTarget: 0 }), Xo = Me(Zy), Ky = S({}, _a, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Iy = Me(Ky), Jy = S({}, _a, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Wy = Me(Jy), Py = S({}, _a, { data: 0 }), N0 = Me(Py), tv = {
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
  }, ev = {
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
  }, nv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function av(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = nv[t]) ? !!e[t] : !1;
  }
  function Fo() {
    return av;
  }
  var rv = S({}, Sl, {
    key: function(t) {
      if (t.key) {
        var e = tv[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Li(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ev[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fo,
    charCode: function(t) {
      return t.type === "keypress" ? Li(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Li(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), lv = Me(rv), iv = S({}, ji, {
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
  }), H0 = Me(iv), uv = S({}, Sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fo
  }), ov = Me(uv), cv = S({}, _a, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sv = Me(cv), fv = S({}, ji, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dv = Me(fv), hv = S({}, _a, {
    newState: 0,
    oldState: 0
  }), mv = Me(hv), pv = [9, 13, 27, 32], Qo = Rn && "CompositionEvent" in window, El = null;
  Rn && "documentMode" in document && (El = document.documentMode);
  var gv = Rn && "TextEvent" in window && !El, z0 = Rn && (!Qo || El && 8 < El && 11 >= El), w0 = " ", L0 = !1;
  function U0(t, e) {
    switch (t) {
      case "keyup":
        return pv.indexOf(e.keyCode) !== -1;
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
  function G0(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var vr = !1;
  function yv(t, e) {
    switch (t) {
      case "compositionend":
        return G0(e);
      case "keypress":
        return e.which !== 32 ? null : (L0 = !0, w0);
      case "textInput":
        return t = e.data, t === w0 && L0 ? null : t;
      default:
        return null;
    }
  }
  function vv(t, e) {
    if (vr)
      return t === "compositionend" || !Qo && U0(t, e) ? (t = R0(), wi = qo = In = null, vr = !1, t) : null;
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
        return z0 && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var bv = {
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
  function j0(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!bv[t.type] : e === "textarea";
  }
  function k0(t, e, a, r) {
    gr ? yr ? yr.push(r) : yr = [r] : gr = r, e = _u(e, "onChange"), 0 < e.length && (a = new Gi(
      "onChange",
      "change",
      null,
      a,
      r
    ), t.push({ event: a, listeners: e }));
  }
  var Tl = null, Al = null;
  function Sv(t) {
    Em(t, 0);
  }
  function ki(t) {
    var e = yl(t);
    if (x0(e)) return t;
  }
  function $0(t, e) {
    if (t === "change") return e;
  }
  var q0 = !1;
  if (Rn) {
    var Zo;
    if (Rn) {
      var Ko = "oninput" in document;
      if (!Ko) {
        var Y0 = document.createElement("div");
        Y0.setAttribute("oninput", "return;"), Ko = typeof Y0.oninput == "function";
      }
      Zo = Ko;
    } else Zo = !1;
    q0 = Zo && (!document.documentMode || 9 < document.documentMode);
  }
  function V0() {
    Tl && (Tl.detachEvent("onpropertychange", X0), Al = Tl = null);
  }
  function X0(t) {
    if (t.propertyName === "value" && ki(Al)) {
      var e = [];
      k0(
        e,
        Al,
        t,
        jo(t)
      ), _0(Sv, e);
    }
  }
  function xv(t, e, a) {
    t === "focusin" ? (V0(), Tl = e, Al = a, Tl.attachEvent("onpropertychange", X0)) : t === "focusout" && V0();
  }
  function Ev(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ki(Al);
  }
  function Tv(t, e) {
    if (t === "click") return ki(e);
  }
  function Av(t, e) {
    if (t === "input" || t === "change")
      return ki(e);
  }
  function Cv(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var we = typeof Object.is == "function" ? Object.is : Cv;
  function Cl(t, e) {
    if (we(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), r = Object.keys(e);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var o = a[r];
      if (!Se.call(e, o) || !we(t[o], e[o]))
        return !1;
    }
    return !0;
  }
  function F0(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Q0(t, e) {
    var a = F0(t);
    t = 0;
    for (var r; a; ) {
      if (a.nodeType === 3) {
        if (r = t + a.textContent.length, t <= e && r >= e)
          return { node: a, offset: e - t };
        t = r;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = F0(a);
    }
  }
  function Z0(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Z0(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function K0(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Hi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Hi(t.document);
    }
    return e;
  }
  function Io(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Mv = Rn && "documentMode" in document && 11 >= document.documentMode, br = null, Jo = null, Ml = null, Wo = !1;
  function I0(t, e, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Wo || br == null || br !== Hi(r) || (r = br, "selectionStart" in r && Io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Ml && Cl(Ml, r) || (Ml = r, r = _u(Jo, "onSelect"), 0 < r.length && (e = new Gi(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: r }), e.target = br)));
  }
  function Ra(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Sr = {
    animationend: Ra("Animation", "AnimationEnd"),
    animationiteration: Ra("Animation", "AnimationIteration"),
    animationstart: Ra("Animation", "AnimationStart"),
    transitionrun: Ra("Transition", "TransitionRun"),
    transitionstart: Ra("Transition", "TransitionStart"),
    transitioncancel: Ra("Transition", "TransitionCancel"),
    transitionend: Ra("Transition", "TransitionEnd")
  }, Po = {}, J0 = {};
  Rn && (J0 = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
  function Ba(t) {
    if (Po[t]) return Po[t];
    if (!Sr[t]) return t;
    var e = Sr[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in J0)
        return Po[t] = e[a];
    return t;
  }
  var W0 = Ba("animationend"), P0 = Ba("animationiteration"), td = Ba("animationstart"), Ov = Ba("transitionrun"), _v = Ba("transitionstart"), Rv = Ba("transitioncancel"), ed = Ba("transitionend"), nd = /* @__PURE__ */ new Map(), tc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  tc.push("scrollEnd");
  function un(t, e) {
    nd.set(t, e), Oa(e, [t]);
  }
  var $i = typeof reportError == "function" ? reportError : function(t) {
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
  }, Ze = [], xr = 0, ec = 0;
  function qi() {
    for (var t = xr, e = ec = xr = 0; e < t; ) {
      var a = Ze[e];
      Ze[e++] = null;
      var r = Ze[e];
      Ze[e++] = null;
      var o = Ze[e];
      Ze[e++] = null;
      var c = Ze[e];
      if (Ze[e++] = null, r !== null && o !== null) {
        var d = r.pending;
        d === null ? o.next = o : (o.next = d.next, d.next = o), r.pending = o;
      }
      c !== 0 && ad(a, o, c);
    }
  }
  function Yi(t, e, a, r) {
    Ze[xr++] = t, Ze[xr++] = e, Ze[xr++] = a, Ze[xr++] = r, ec |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r);
  }
  function nc(t, e, a, r) {
    return Yi(t, e, a, r), Vi(t);
  }
  function Da(t, e) {
    return Yi(t, null, null, e), Vi(t);
  }
  function ad(t, e, a) {
    t.lanes |= a;
    var r = t.alternate;
    r !== null && (r.lanes |= a);
    for (var o = !1, c = t.return; c !== null; )
      c.childLanes |= a, r = c.alternate, r !== null && (r.childLanes |= a), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (o = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, o && e !== null && (o = 31 - ze(a), t = c.hiddenUpdates, r = t[o], r === null ? t[o] = [e] : r.push(e), e.lane = a | 536870912), c) : null;
  }
  function Vi(t) {
    if (50 < Zl)
      throw Zl = 0, fs = null, Error(u(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Er = {};
  function Bv(t, e, a, r) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Le(t, e, a, r) {
    return new Bv(t, e, a, r);
  }
  function ac(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Bn(t, e) {
    var a = t.alternate;
    return a === null ? (a = Le(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function rd(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Xi(t, e, a, r, o, c) {
    var d = 0;
    if (r = t, typeof t == "function") ac(t) && (d = 1);
    else if (typeof t == "string")
      d = wb(
        t,
        a,
        et.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case W:
          return t = Le(31, a, e, o), t.elementType = W, t.lanes = c, t;
        case C:
          return Na(a.children, o, c, e);
        case z:
          d = 8, o |= 24;
          break;
        case k:
          return t = Le(12, a, e, o | 2), t.elementType = k, t.lanes = c, t;
        case w:
          return t = Le(13, a, e, o), t.elementType = w, t.lanes = c, t;
        case q:
          return t = Le(19, a, e, o), t.elementType = q, t.lanes = c, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case V:
                d = 10;
                break t;
              case F:
                d = 9;
                break t;
              case Q:
                d = 11;
                break t;
              case X:
                d = 14;
                break t;
              case P:
                d = 16, r = null;
                break t;
            }
          d = 29, a = Error(
            u(130, t === null ? "null" : typeof t, "")
          ), r = null;
      }
    return e = Le(d, a, e, o), e.elementType = t, e.type = r, e.lanes = c, e;
  }
  function Na(t, e, a, r) {
    return t = Le(7, t, r, e), t.lanes = a, t;
  }
  function rc(t, e, a) {
    return t = Le(6, t, null, e), t.lanes = a, t;
  }
  function ld(t) {
    var e = Le(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function lc(t, e, a) {
    return e = Le(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var id = /* @__PURE__ */ new WeakMap();
  function Ke(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = id.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: ur(e)
      }, id.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: ur(e)
    };
  }
  var Tr = [], Ar = 0, Fi = null, Ol = 0, Ie = [], Je = 0, Jn = null, dn = 1, hn = "";
  function Dn(t, e) {
    Tr[Ar++] = Ol, Tr[Ar++] = Fi, Fi = t, Ol = e;
  }
  function ud(t, e, a) {
    Ie[Je++] = dn, Ie[Je++] = hn, Ie[Je++] = Jn, Jn = t;
    var r = dn;
    t = hn;
    var o = 32 - ze(r) - 1;
    r &= ~(1 << o), a += 1;
    var c = 32 - ze(e) + o;
    if (30 < c) {
      var d = o - o % 5;
      c = (r & (1 << d) - 1).toString(32), r >>= d, o -= d, dn = 1 << 32 - ze(e) + o | a << o | r, hn = c + t;
    } else
      dn = 1 << c | a << o | r, hn = t;
  }
  function ic(t) {
    t.return !== null && (Dn(t, 1), ud(t, 1, 0));
  }
  function uc(t) {
    for (; t === Fi; )
      Fi = Tr[--Ar], Tr[Ar] = null, Ol = Tr[--Ar], Tr[Ar] = null;
    for (; t === Jn; )
      Jn = Ie[--Je], Ie[Je] = null, hn = Ie[--Je], Ie[Je] = null, dn = Ie[--Je], Ie[Je] = null;
  }
  function od(t, e) {
    Ie[Je++] = dn, Ie[Je++] = hn, Ie[Je++] = Jn, dn = e.id, hn = e.overflow, Jn = t;
  }
  var de = null, $t = null, Et = !1, Wn = null, We = !1, oc = Error(u(519));
  function Pn(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw _l(Ke(e, t)), oc;
  }
  function cd(t) {
    var e = t.stateNode, a = t.type, r = t.memoizedProps;
    switch (e[fe] = t, e[Ce] = r, a) {
      case "dialog":
        vt("cancel", e), vt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Il.length; a++)
          vt(Il[a], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e);
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        vt("invalid", e), E0(
          e,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        );
        break;
      case "select":
        vt("invalid", e);
        break;
      case "textarea":
        vt("invalid", e), A0(e, r.value, r.defaultValue, r.children);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || r.suppressHydrationWarning === !0 || Mm(e.textContent, a) ? (r.popover != null && (vt("beforetoggle", e), vt("toggle", e)), r.onScroll != null && vt("scroll", e), r.onScrollEnd != null && vt("scrollend", e), r.onClick != null && (e.onclick = _n), e = !0) : e = !1, e || Pn(t, !0);
  }
  function sd(t) {
    for (de = t.return; de; )
      switch (de.tag) {
        case 5:
        case 31:
        case 13:
          We = !1;
          return;
        case 27:
        case 3:
          We = !0;
          return;
        default:
          de = de.return;
      }
  }
  function Cr(t) {
    if (t !== de) return !1;
    if (!Et) return sd(t), Et = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Ms(t.type, t.memoizedProps)), a = !a), a && $t && Pn(t), sd(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      $t = wm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      $t = wm(t);
    } else
      e === 27 ? (e = $t, ha(t.type) ? (t = Ds, Ds = null, $t = t) : $t = e) : $t = de ? tn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    $t = de = null, Et = !1;
  }
  function cc() {
    var t = Wn;
    return t !== null && (Be === null ? Be = t : Be.push.apply(
      Be,
      t
    ), Wn = null), t;
  }
  function _l(t) {
    Wn === null ? Wn = [t] : Wn.push(t);
  }
  var sc = E(null), za = null, Nn = null;
  function ta(t, e, a) {
    K(sc, e._currentValue), e._currentValue = a;
  }
  function Hn(t) {
    t._currentValue = sc.current, G(sc);
  }
  function fc(t, e, a) {
    for (; t !== null; ) {
      var r = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function dc(t, e, a, r) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var d = o.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var g = c;
          c = o;
          for (var x = 0; x < e.length; x++)
            if (g.context === e[x]) {
              c.lanes |= a, g = c.alternate, g !== null && (g.lanes |= a), fc(
                c.return,
                a,
                t
              ), r || (d = null);
              break t;
            }
          c = g.next;
        }
      } else if (o.tag === 18) {
        if (d = o.return, d === null) throw Error(u(341));
        d.lanes |= a, c = d.alternate, c !== null && (c.lanes |= a), fc(d, a, t), d = null;
      } else d = o.child;
      if (d !== null) d.return = o;
      else
        for (d = o; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (o = d.sibling, o !== null) {
            o.return = d.return, d = o;
            break;
          }
          d = d.return;
        }
      o = d;
    }
  }
  function Mr(t, e, a, r) {
    t = null;
    for (var o = e, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var d = o.alternate;
        if (d === null) throw Error(u(387));
        if (d = d.memoizedProps, d !== null) {
          var g = o.type;
          we(o.pendingProps.value, d.value) || (t !== null ? t.push(g) : t = [g]);
        }
      } else if (o === gt.current) {
        if (d = o.alternate, d === null) throw Error(u(387));
        d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ei) : t = [ei]);
      }
      o = o.return;
    }
    t !== null && dc(
      e,
      t,
      a,
      r
    ), e.flags |= 262144;
  }
  function Qi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!we(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function wa(t) {
    za = t, Nn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function he(t) {
    return fd(za, t);
  }
  function Zi(t, e) {
    return za === null && wa(t), fd(t, e);
  }
  function fd(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, Nn === null) {
      if (t === null) throw Error(u(308));
      Nn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Nn = Nn.next = e;
    return a;
  }
  var Dv = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, r) {
        t.push(r);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, Nv = n.unstable_scheduleCallback, Hv = n.unstable_NormalPriority, ee = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hc() {
    return {
      controller: new Dv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rl(t) {
    t.refCount--, t.refCount === 0 && Nv(Hv, function() {
      t.controller.abort();
    });
  }
  var Bl = null, mc = 0, Or = 0, _r = null;
  function zv(t, e) {
    if (Bl === null) {
      var a = Bl = [];
      mc = 0, Or = ys(), _r = {
        status: "pending",
        value: void 0,
        then: function(r) {
          a.push(r);
        }
      };
    }
    return mc++, e.then(dd, dd), e;
  }
  function dd() {
    if (--mc === 0 && Bl !== null) {
      _r !== null && (_r.status = "fulfilled");
      var t = Bl;
      Bl = null, Or = 0, _r = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function wv(t, e) {
    var a = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        a.push(o);
      }
    };
    return t.then(
      function() {
        r.status = "fulfilled", r.value = e;
        for (var o = 0; o < a.length; o++) (0, a[o])(e);
      },
      function(o) {
        for (r.status = "rejected", r.reason = o, o = 0; o < a.length; o++)
          (0, a[o])(void 0);
      }
    ), r;
  }
  var hd = N.S;
  N.S = function(t, e) {
    Ih = ye(), typeof e == "object" && e !== null && typeof e.then == "function" && zv(t, e), hd !== null && hd(t, e);
  };
  var La = E(null);
  function pc() {
    var t = La.current;
    return t !== null ? t : kt.pooledCache;
  }
  function Ki(t, e) {
    e === null ? K(La, La.current) : K(La, e.pool);
  }
  function md() {
    var t = pc();
    return t === null ? null : { parent: ee._currentValue, pool: t };
  }
  var Rr = Error(u(460)), gc = Error(u(474)), Ii = Error(u(542)), Ji = { then: function() {
  } };
  function pd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function gd(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(_n, _n), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, vd(t), t;
      default:
        if (typeof e.status == "string") e.then(_n, _n);
        else {
          if (t = kt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(u(482));
          t = e, t.status = "pending", t.then(
            function(r) {
              if (e.status === "pending") {
                var o = e;
                o.status = "fulfilled", o.value = r;
              }
            },
            function(r) {
              if (e.status === "pending") {
                var o = e;
                o.status = "rejected", o.reason = r;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, vd(t), t;
        }
        throw Ga = e, Rr;
    }
  }
  function Ua(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ga = a, Rr) : a;
    }
  }
  var Ga = null;
  function yd() {
    if (Ga === null) throw Error(u(459));
    var t = Ga;
    return Ga = null, t;
  }
  function vd(t) {
    if (t === Rr || t === Ii)
      throw Error(u(483));
  }
  var Br = null, Dl = 0;
  function Wi(t) {
    var e = Dl;
    return Dl += 1, Br === null && (Br = []), gd(Br, t, e);
  }
  function Nl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Pi(t, e) {
    throw e.$$typeof === A ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(
      u(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function bd(t) {
    function e(O, T) {
      if (t) {
        var R = O.deletions;
        R === null ? (O.deletions = [T], O.flags |= 16) : R.push(T);
      }
    }
    function a(O, T) {
      if (!t) return null;
      for (; T !== null; )
        e(O, T), T = T.sibling;
      return null;
    }
    function r(O) {
      for (var T = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? T.set(O.key, O) : T.set(O.index, O), O = O.sibling;
      return T;
    }
    function o(O, T) {
      return O = Bn(O, T), O.index = 0, O.sibling = null, O;
    }
    function c(O, T, R) {
      return O.index = R, t ? (R = O.alternate, R !== null ? (R = R.index, R < T ? (O.flags |= 67108866, T) : R) : (O.flags |= 67108866, T)) : (O.flags |= 1048576, T);
    }
    function d(O) {
      return t && O.alternate === null && (O.flags |= 67108866), O;
    }
    function g(O, T, R, j) {
      return T === null || T.tag !== 6 ? (T = rc(R, O.mode, j), T.return = O, T) : (T = o(T, R), T.return = O, T);
    }
    function x(O, T, R, j) {
      var ot = R.type;
      return ot === C ? L(
        O,
        T,
        R.props.children,
        j,
        R.key
      ) : T !== null && (T.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === P && Ua(ot) === T.type) ? (T = o(T, R.props), Nl(T, R), T.return = O, T) : (T = Xi(
        R.type,
        R.key,
        R.props,
        null,
        O.mode,
        j
      ), Nl(T, R), T.return = O, T);
    }
    function B(O, T, R, j) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = lc(R, O.mode, j), T.return = O, T) : (T = o(T, R.children || []), T.return = O, T);
    }
    function L(O, T, R, j, ot) {
      return T === null || T.tag !== 7 ? (T = Na(
        R,
        O.mode,
        j,
        ot
      ), T.return = O, T) : (T = o(T, R), T.return = O, T);
    }
    function $(O, T, R) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = rc(
          "" + T,
          O.mode,
          R
        ), T.return = O, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case _:
            return R = Xi(
              T.type,
              T.key,
              T.props,
              null,
              O.mode,
              R
            ), Nl(R, T), R.return = O, R;
          case M:
            return T = lc(
              T,
              O.mode,
              R
            ), T.return = O, T;
          case P:
            return T = Ua(T), $(O, T, R);
        }
        if (ct(T) || b(T))
          return T = Na(
            T,
            O.mode,
            R,
            null
          ), T.return = O, T;
        if (typeof T.then == "function")
          return $(O, Wi(T), R);
        if (T.$$typeof === V)
          return $(
            O,
            Zi(O, T),
            R
          );
        Pi(O, T);
      }
      return null;
    }
    function D(O, T, R, j) {
      var ot = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return ot !== null ? null : g(O, T, "" + R, j);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case _:
            return R.key === ot ? x(O, T, R, j) : null;
          case M:
            return R.key === ot ? B(O, T, R, j) : null;
          case P:
            return R = Ua(R), D(O, T, R, j);
        }
        if (ct(R) || b(R))
          return ot !== null ? null : L(O, T, R, j, null);
        if (typeof R.then == "function")
          return D(
            O,
            T,
            Wi(R),
            j
          );
        if (R.$$typeof === V)
          return D(
            O,
            T,
            Zi(O, R),
            j
          );
        Pi(O, R);
      }
      return null;
    }
    function H(O, T, R, j, ot) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return O = O.get(R) || null, g(T, O, "" + j, ot);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case _:
            return O = O.get(
              j.key === null ? R : j.key
            ) || null, x(T, O, j, ot);
          case M:
            return O = O.get(
              j.key === null ? R : j.key
            ) || null, B(T, O, j, ot);
          case P:
            return j = Ua(j), H(
              O,
              T,
              R,
              j,
              ot
            );
        }
        if (ct(j) || b(j))
          return O = O.get(R) || null, L(T, O, j, ot, null);
        if (typeof j.then == "function")
          return H(
            O,
            T,
            R,
            Wi(j),
            ot
          );
        if (j.$$typeof === V)
          return H(
            O,
            T,
            R,
            Zi(T, j),
            ot
          );
        Pi(T, j);
      }
      return null;
    }
    function nt(O, T, R, j) {
      for (var ot = null, Mt = null, lt = T, mt = T = 0, St = null; lt !== null && mt < R.length; mt++) {
        lt.index > mt ? (St = lt, lt = null) : St = lt.sibling;
        var Ot = D(
          O,
          lt,
          R[mt],
          j
        );
        if (Ot === null) {
          lt === null && (lt = St);
          break;
        }
        t && lt && Ot.alternate === null && e(O, lt), T = c(Ot, T, mt), Mt === null ? ot = Ot : Mt.sibling = Ot, Mt = Ot, lt = St;
      }
      if (mt === R.length)
        return a(O, lt), Et && Dn(O, mt), ot;
      if (lt === null) {
        for (; mt < R.length; mt++)
          lt = $(O, R[mt], j), lt !== null && (T = c(
            lt,
            T,
            mt
          ), Mt === null ? ot = lt : Mt.sibling = lt, Mt = lt);
        return Et && Dn(O, mt), ot;
      }
      for (lt = r(lt); mt < R.length; mt++)
        St = H(
          lt,
          O,
          mt,
          R[mt],
          j
        ), St !== null && (t && St.alternate !== null && lt.delete(
          St.key === null ? mt : St.key
        ), T = c(
          St,
          T,
          mt
        ), Mt === null ? ot = St : Mt.sibling = St, Mt = St);
      return t && lt.forEach(function(va) {
        return e(O, va);
      }), Et && Dn(O, mt), ot;
    }
    function st(O, T, R, j) {
      if (R == null) throw Error(u(151));
      for (var ot = null, Mt = null, lt = T, mt = T = 0, St = null, Ot = R.next(); lt !== null && !Ot.done; mt++, Ot = R.next()) {
        lt.index > mt ? (St = lt, lt = null) : St = lt.sibling;
        var va = D(O, lt, Ot.value, j);
        if (va === null) {
          lt === null && (lt = St);
          break;
        }
        t && lt && va.alternate === null && e(O, lt), T = c(va, T, mt), Mt === null ? ot = va : Mt.sibling = va, Mt = va, lt = St;
      }
      if (Ot.done)
        return a(O, lt), Et && Dn(O, mt), ot;
      if (lt === null) {
        for (; !Ot.done; mt++, Ot = R.next())
          Ot = $(O, Ot.value, j), Ot !== null && (T = c(Ot, T, mt), Mt === null ? ot = Ot : Mt.sibling = Ot, Mt = Ot);
        return Et && Dn(O, mt), ot;
      }
      for (lt = r(lt); !Ot.done; mt++, Ot = R.next())
        Ot = H(lt, O, mt, Ot.value, j), Ot !== null && (t && Ot.alternate !== null && lt.delete(Ot.key === null ? mt : Ot.key), T = c(Ot, T, mt), Mt === null ? ot = Ot : Mt.sibling = Ot, Mt = Ot);
      return t && lt.forEach(function(Fb) {
        return e(O, Fb);
      }), Et && Dn(O, mt), ot;
    }
    function Gt(O, T, R, j) {
      if (typeof R == "object" && R !== null && R.type === C && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case _:
            t: {
              for (var ot = R.key; T !== null; ) {
                if (T.key === ot) {
                  if (ot = R.type, ot === C) {
                    if (T.tag === 7) {
                      a(
                        O,
                        T.sibling
                      ), j = o(
                        T,
                        R.props.children
                      ), j.return = O, O = j;
                      break t;
                    }
                  } else if (T.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === P && Ua(ot) === T.type) {
                    a(
                      O,
                      T.sibling
                    ), j = o(T, R.props), Nl(j, R), j.return = O, O = j;
                    break t;
                  }
                  a(O, T);
                  break;
                } else e(O, T);
                T = T.sibling;
              }
              R.type === C ? (j = Na(
                R.props.children,
                O.mode,
                j,
                R.key
              ), j.return = O, O = j) : (j = Xi(
                R.type,
                R.key,
                R.props,
                null,
                O.mode,
                j
              ), Nl(j, R), j.return = O, O = j);
            }
            return d(O);
          case M:
            t: {
              for (ot = R.key; T !== null; ) {
                if (T.key === ot)
                  if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                    a(
                      O,
                      T.sibling
                    ), j = o(T, R.children || []), j.return = O, O = j;
                    break t;
                  } else {
                    a(O, T);
                    break;
                  }
                else e(O, T);
                T = T.sibling;
              }
              j = lc(R, O.mode, j), j.return = O, O = j;
            }
            return d(O);
          case P:
            return R = Ua(R), Gt(
              O,
              T,
              R,
              j
            );
        }
        if (ct(R))
          return nt(
            O,
            T,
            R,
            j
          );
        if (b(R)) {
          if (ot = b(R), typeof ot != "function") throw Error(u(150));
          return R = ot.call(R), st(
            O,
            T,
            R,
            j
          );
        }
        if (typeof R.then == "function")
          return Gt(
            O,
            T,
            Wi(R),
            j
          );
        if (R.$$typeof === V)
          return Gt(
            O,
            T,
            Zi(O, R),
            j
          );
        Pi(O, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, T !== null && T.tag === 6 ? (a(O, T.sibling), j = o(T, R), j.return = O, O = j) : (a(O, T), j = rc(R, O.mode, j), j.return = O, O = j), d(O)) : a(O, T);
    }
    return function(O, T, R, j) {
      try {
        Dl = 0;
        var ot = Gt(
          O,
          T,
          R,
          j
        );
        return Br = null, ot;
      } catch (lt) {
        if (lt === Rr || lt === Ii) throw lt;
        var Mt = Le(29, lt, null, O.mode);
        return Mt.lanes = j, Mt.return = O, Mt;
      } finally {
      }
    };
  }
  var ja = bd(!0), Sd = bd(!1), ea = !1;
  function yc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function na(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function aa(t, e, a) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (_t & 2) !== 0) {
      var o = r.pending;
      return o === null ? e.next = e : (e.next = o.next, o.next = e), r.pending = e, e = Vi(t), ad(t, null, a), e;
    }
    return Yi(t, r, e, a), Vi(t);
  }
  function Hl(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var r = e.lanes;
      r &= t.pendingLanes, a |= r, e.lanes = a, f0(t, a);
    }
  }
  function bc(t, e) {
    var a = t.updateQueue, r = t.alternate;
    if (r !== null && (r = r.updateQueue, a === r)) {
      var o = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? o = c = d : c = c.next = d, a = a.next;
        } while (a !== null);
        c === null ? o = c = e : c = c.next = e;
      } else o = c = e;
      a = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: r.shared,
        callbacks: r.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var Sc = !1;
  function zl() {
    if (Sc) {
      var t = _r;
      if (t !== null) throw t;
    }
  }
  function wl(t, e, a, r) {
    Sc = !1;
    var o = t.updateQueue;
    ea = !1;
    var c = o.firstBaseUpdate, d = o.lastBaseUpdate, g = o.shared.pending;
    if (g !== null) {
      o.shared.pending = null;
      var x = g, B = x.next;
      x.next = null, d === null ? c = B : d.next = B, d = x;
      var L = t.alternate;
      L !== null && (L = L.updateQueue, g = L.lastBaseUpdate, g !== d && (g === null ? L.firstBaseUpdate = B : g.next = B, L.lastBaseUpdate = x));
    }
    if (c !== null) {
      var $ = o.baseState;
      d = 0, L = B = x = null, g = c;
      do {
        var D = g.lane & -536870913, H = D !== g.lane;
        if (H ? (bt & D) === D : (r & D) === D) {
          D !== 0 && D === Or && (Sc = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          t: {
            var nt = t, st = g;
            D = e;
            var Gt = a;
            switch (st.tag) {
              case 1:
                if (nt = st.payload, typeof nt == "function") {
                  $ = nt.call(Gt, $, D);
                  break t;
                }
                $ = nt;
                break t;
              case 3:
                nt.flags = nt.flags & -65537 | 128;
              case 0:
                if (nt = st.payload, D = typeof nt == "function" ? nt.call(Gt, $, D) : nt, D == null) break t;
                $ = S({}, $, D);
                break t;
              case 2:
                ea = !0;
            }
          }
          D = g.callback, D !== null && (t.flags |= 64, H && (t.flags |= 8192), H = o.callbacks, H === null ? o.callbacks = [D] : H.push(D));
        } else
          H = {
            lane: D,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, L === null ? (B = L = H, x = $) : L = L.next = H, d |= D;
        if (g = g.next, g === null) {
          if (g = o.shared.pending, g === null)
            break;
          H = g, g = H.next, H.next = null, o.lastBaseUpdate = H, o.shared.pending = null;
        }
      } while (!0);
      L === null && (x = $), o.baseState = x, o.firstBaseUpdate = B, o.lastBaseUpdate = L, c === null && (o.shared.lanes = 0), oa |= d, t.lanes = d, t.memoizedState = $;
    }
  }
  function xd(t, e) {
    if (typeof t != "function")
      throw Error(u(191, t));
    t.call(e);
  }
  function Ed(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        xd(a[t], e);
  }
  var Dr = E(null), tu = E(0);
  function Td(t, e) {
    t = qn, K(tu, t), K(Dr, e), qn = t | e.baseLanes;
  }
  function xc() {
    K(tu, qn), K(Dr, Dr.current);
  }
  function Ec() {
    qn = tu.current, G(Dr), G(tu);
  }
  var Ue = E(null), Pe = null;
  function ra(t) {
    var e = t.alternate;
    K(Wt, Wt.current & 1), K(Ue, t), Pe === null && (e === null || Dr.current !== null || e.memoizedState !== null) && (Pe = t);
  }
  function Tc(t) {
    K(Wt, Wt.current), K(Ue, t), Pe === null && (Pe = t);
  }
  function Ad(t) {
    t.tag === 22 ? (K(Wt, Wt.current), K(Ue, t), Pe === null && (Pe = t)) : la();
  }
  function la() {
    K(Wt, Wt.current), K(Ue, Ue.current);
  }
  function Ge(t) {
    G(Ue), Pe === t && (Pe = null), G(Wt);
  }
  var Wt = E(0);
  function eu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Rs(a) || Bs(a)))
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
  var zn = 0, ht = null, Lt = null, ne = null, nu = !1, Nr = !1, ka = !1, au = 0, Ll = 0, Hr = null, Lv = 0;
  function Zt() {
    throw Error(u(321));
  }
  function Ac(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!we(t[a], e[a])) return !1;
    return !0;
  }
  function Cc(t, e, a, r, o, c) {
    return zn = c, ht = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t === null || t.memoizedState === null ? uh : kc, ka = !1, c = a(r, o), ka = !1, Nr && (c = Md(
      e,
      a,
      r,
      o
    )), Cd(t), c;
  }
  function Cd(t) {
    N.H = jl;
    var e = Lt !== null && Lt.next !== null;
    if (zn = 0, ne = Lt = ht = null, nu = !1, Ll = 0, Hr = null, e) throw Error(u(300));
    t === null || ae || (t = t.dependencies, t !== null && Qi(t) && (ae = !0));
  }
  function Md(t, e, a, r) {
    ht = t;
    var o = 0;
    do {
      if (Nr && (Hr = null), Ll = 0, Nr = !1, 25 <= o) throw Error(u(301));
      if (o += 1, ne = Lt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      N.H = oh, c = e(a, r);
    } while (Nr);
    return c;
  }
  function Uv() {
    var t = N.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ul(e) : e, t = t.useState()[0], (Lt !== null ? Lt.memoizedState : null) !== t && (ht.flags |= 1024), e;
  }
  function Mc() {
    var t = au !== 0;
    return au = 0, t;
  }
  function Oc(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function _c(t) {
    if (nu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      nu = !1;
    }
    zn = 0, ne = Lt = ht = null, Nr = !1, Ll = au = 0, Hr = null;
  }
  function Ee() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ne === null ? ht.memoizedState = ne = t : ne = ne.next = t, ne;
  }
  function Pt() {
    if (Lt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Lt.next;
    var e = ne === null ? ht.memoizedState : ne.next;
    if (e !== null)
      ne = e, Lt = t;
    else {
      if (t === null)
        throw ht.alternate === null ? Error(u(467)) : Error(u(310));
      Lt = t, t = {
        memoizedState: Lt.memoizedState,
        baseState: Lt.baseState,
        baseQueue: Lt.baseQueue,
        queue: Lt.queue,
        next: null
      }, ne === null ? ht.memoizedState = ne = t : ne = ne.next = t;
    }
    return ne;
  }
  function ru() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ul(t) {
    var e = Ll;
    return Ll += 1, Hr === null && (Hr = []), t = gd(Hr, t, e), e = ht, (ne === null ? e.memoizedState : ne.next) === null && (e = e.alternate, N.H = e === null || e.memoizedState === null ? uh : kc), t;
  }
  function lu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ul(t);
      if (t.$$typeof === V) return he(t);
    }
    throw Error(u(438, String(t)));
  }
  function Rc(t) {
    var e = null, a = ht.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var r = ht.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (e = {
        data: r.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = ru(), ht.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), r = 0; r < t; r++)
        a[r] = ut;
    return e.index++, a;
  }
  function wn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function iu(t) {
    var e = Pt();
    return Bc(e, Lt, t);
  }
  function Bc(t, e, a) {
    var r = t.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = a;
    var o = t.baseQueue, c = r.pending;
    if (c !== null) {
      if (o !== null) {
        var d = o.next;
        o.next = c.next, c.next = d;
      }
      e.baseQueue = o = c, r.pending = null;
    }
    if (c = t.baseState, o === null) t.memoizedState = c;
    else {
      e = o.next;
      var g = d = null, x = null, B = e, L = !1;
      do {
        var $ = B.lane & -536870913;
        if ($ !== B.lane ? (bt & $) === $ : (zn & $) === $) {
          var D = B.revertLane;
          if (D === 0)
            x !== null && (x = x.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), $ === Or && (L = !0);
          else if ((zn & D) === D) {
            B = B.next, D === Or && (L = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, x === null ? (g = x = $, d = c) : x = x.next = $, ht.lanes |= D, oa |= D;
          $ = B.action, ka && a(c, $), c = B.hasEagerState ? B.eagerState : a(c, $);
        } else
          D = {
            lane: $,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, x === null ? (g = x = D, d = c) : x = x.next = D, ht.lanes |= $, oa |= $;
        B = B.next;
      } while (B !== null && B !== e);
      if (x === null ? d = c : x.next = g, !we(c, t.memoizedState) && (ae = !0, L && (a = _r, a !== null)))
        throw a;
      t.memoizedState = c, t.baseState = d, t.baseQueue = x, r.lastRenderedState = c;
    }
    return o === null && (r.lanes = 0), [t.memoizedState, r.dispatch];
  }
  function Dc(t) {
    var e = Pt(), a = e.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = t;
    var r = a.dispatch, o = a.pending, c = e.memoizedState;
    if (o !== null) {
      a.pending = null;
      var d = o = o.next;
      do
        c = t(c, d.action), d = d.next;
      while (d !== o);
      we(c, e.memoizedState) || (ae = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), a.lastRenderedState = c;
    }
    return [c, r];
  }
  function Od(t, e, a) {
    var r = ht, o = Pt(), c = Et;
    if (c) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = e();
    var d = !we(
      (Lt || o).memoizedState,
      a
    );
    if (d && (o.memoizedState = a, ae = !0), o = o.queue, zc(Bd.bind(null, r, o, t), [
      t
    ]), o.getSnapshot !== e || d || ne !== null && ne.memoizedState.tag & 1) {
      if (r.flags |= 2048, zr(
        9,
        { destroy: void 0 },
        Rd.bind(
          null,
          r,
          o,
          a,
          e
        ),
        null
      ), kt === null) throw Error(u(349));
      c || (zn & 127) !== 0 || _d(r, e, a);
    }
    return a;
  }
  function _d(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = ht.updateQueue, e === null ? (e = ru(), ht.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function Rd(t, e, a, r) {
    e.value = a, e.getSnapshot = r, Dd(e) && Nd(t);
  }
  function Bd(t, e, a) {
    return a(function() {
      Dd(e) && Nd(t);
    });
  }
  function Dd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !we(t, a);
    } catch {
      return !0;
    }
  }
  function Nd(t) {
    var e = Da(t, 2);
    e !== null && De(e, t, 2);
  }
  function Nc(t) {
    var e = Ee();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), ka) {
        Zn(!0);
        try {
          a();
        } finally {
          Zn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wn,
      lastRenderedState: t
    }, e;
  }
  function Hd(t, e, a, r) {
    return t.baseState = a, Bc(
      t,
      Lt,
      typeof r == "function" ? r : wn
    );
  }
  function Gv(t, e, a, r, o) {
    if (cu(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          c.listeners.push(d);
        }
      };
      N.T !== null ? a(!0) : c.isTransition = !1, r(c), a = e.pending, a === null ? (c.next = e.pending = c, zd(e, c)) : (c.next = a.next, e.pending = a.next = c);
    }
  }
  function zd(t, e) {
    var a = e.action, r = e.payload, o = t.state;
    if (e.isTransition) {
      var c = N.T, d = {};
      N.T = d;
      try {
        var g = a(o, r), x = N.S;
        x !== null && x(d, g), wd(t, e, g);
      } catch (B) {
        Hc(t, e, B);
      } finally {
        c !== null && d.types !== null && (c.types = d.types), N.T = c;
      }
    } else
      try {
        c = a(o, r), wd(t, e, c);
      } catch (B) {
        Hc(t, e, B);
      }
  }
  function wd(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(r) {
        Ld(t, e, r);
      },
      function(r) {
        return Hc(t, e, r);
      }
    ) : Ld(t, e, a);
  }
  function Ld(t, e, a) {
    e.status = "fulfilled", e.value = a, Ud(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, zd(t, a)));
  }
  function Hc(t, e, a) {
    var r = t.pending;
    if (t.pending = null, r !== null) {
      r = r.next;
      do
        e.status = "rejected", e.reason = a, Ud(e), e = e.next;
      while (e !== r);
    }
    t.action = null;
  }
  function Ud(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gd(t, e) {
    return e;
  }
  function jd(t, e) {
    if (Et) {
      var a = kt.formState;
      if (a !== null) {
        t: {
          var r = ht;
          if (Et) {
            if ($t) {
              e: {
                for (var o = $t, c = We; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break e;
                  }
                  if (o = tn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break e;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                $t = tn(
                  o.nextSibling
                ), r = o.data === "F!";
                break t;
              }
            }
            Pn(r);
          }
          r = !1;
        }
        r && (e = a[0]);
      }
    }
    return a = Ee(), a.memoizedState = a.baseState = e, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gd,
      lastRenderedState: e
    }, a.queue = r, a = rh.bind(
      null,
      ht,
      r
    ), r.dispatch = a, r = Nc(!1), c = jc.bind(
      null,
      ht,
      !1,
      r.queue
    ), r = Ee(), o = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, r.queue = o, a = Gv.bind(
      null,
      ht,
      o,
      c,
      a
    ), o.dispatch = a, r.memoizedState = t, [e, a, !1];
  }
  function kd(t) {
    var e = Pt();
    return $d(e, Lt, t);
  }
  function $d(t, e, a) {
    if (e = Bc(
      t,
      e,
      Gd
    )[0], t = iu(wn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var r = Ul(e);
      } catch (d) {
        throw d === Rr ? Ii : d;
      }
    else r = e;
    e = Pt();
    var o = e.queue, c = o.dispatch;
    return a !== e.memoizedState && (ht.flags |= 2048, zr(
      9,
      { destroy: void 0 },
      jv.bind(null, o, a),
      null
    )), [r, c, t];
  }
  function jv(t, e) {
    t.action = e;
  }
  function qd(t) {
    var e = Pt(), a = Lt;
    if (a !== null)
      return $d(e, a, t);
    Pt(), e = e.memoizedState, a = Pt();
    var r = a.queue.dispatch;
    return a.memoizedState = t, [e, r, !1];
  }
  function zr(t, e, a, r) {
    return t = { tag: t, create: a, deps: r, inst: e, next: null }, e = ht.updateQueue, e === null && (e = ru(), ht.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (r = a.next, a.next = t, t.next = r, e.lastEffect = t), t;
  }
  function Yd() {
    return Pt().memoizedState;
  }
  function uu(t, e, a, r) {
    var o = Ee();
    ht.flags |= t, o.memoizedState = zr(
      1 | e,
      { destroy: void 0 },
      a,
      r === void 0 ? null : r
    );
  }
  function ou(t, e, a, r) {
    var o = Pt();
    r = r === void 0 ? null : r;
    var c = o.memoizedState.inst;
    Lt !== null && r !== null && Ac(r, Lt.memoizedState.deps) ? o.memoizedState = zr(e, c, a, r) : (ht.flags |= t, o.memoizedState = zr(
      1 | e,
      c,
      a,
      r
    ));
  }
  function Vd(t, e) {
    uu(8390656, 8, t, e);
  }
  function zc(t, e) {
    ou(2048, 8, t, e);
  }
  function kv(t) {
    ht.flags |= 4;
    var e = ht.updateQueue;
    if (e === null)
      e = ru(), ht.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function Xd(t) {
    var e = Pt().memoizedState;
    return kv({ ref: e, nextImpl: t }), function() {
      if ((_t & 2) !== 0) throw Error(u(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Fd(t, e) {
    return ou(4, 2, t, e);
  }
  function Qd(t, e) {
    return ou(4, 4, t, e);
  }
  function Zd(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Kd(t, e, a) {
    a = a != null ? a.concat([t]) : null, ou(4, 4, Zd.bind(null, e, t), a);
  }
  function wc() {
  }
  function Id(t, e) {
    var a = Pt();
    e = e === void 0 ? null : e;
    var r = a.memoizedState;
    return e !== null && Ac(e, r[1]) ? r[0] : (a.memoizedState = [t, e], t);
  }
  function Jd(t, e) {
    var a = Pt();
    e = e === void 0 ? null : e;
    var r = a.memoizedState;
    if (e !== null && Ac(e, r[1]))
      return r[0];
    if (r = t(), ka) {
      Zn(!0);
      try {
        t();
      } finally {
        Zn(!1);
      }
    }
    return a.memoizedState = [r, e], r;
  }
  function Lc(t, e, a) {
    return a === void 0 || (zn & 1073741824) !== 0 && (bt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Wh(), ht.lanes |= t, oa |= t, a);
  }
  function Wd(t, e, a, r) {
    return we(a, e) ? a : Dr.current !== null ? (t = Lc(t, a, r), we(t, e) || (ae = !0), t) : (zn & 42) === 0 || (zn & 1073741824) !== 0 && (bt & 261930) === 0 ? (ae = !0, t.memoizedState = a) : (t = Wh(), ht.lanes |= t, oa |= t, e);
  }
  function Pd(t, e, a, r, o) {
    var c = Z.p;
    Z.p = c !== 0 && 8 > c ? c : 8;
    var d = N.T, g = {};
    N.T = g, jc(t, !1, e, a);
    try {
      var x = o(), B = N.S;
      if (B !== null && B(g, x), x !== null && typeof x == "object" && typeof x.then == "function") {
        var L = wv(
          x,
          r
        );
        Gl(
          t,
          e,
          L,
          $e(t)
        );
      } else
        Gl(
          t,
          e,
          r,
          $e(t)
        );
    } catch ($) {
      Gl(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: $ },
        $e()
      );
    } finally {
      Z.p = c, d !== null && g.types !== null && (d.types = g.types), N.T = d;
    }
  }
  function $v() {
  }
  function Uc(t, e, a, r) {
    if (t.tag !== 5) throw Error(u(476));
    var o = th(t).queue;
    Pd(
      t,
      o,
      e,
      rt,
      a === null ? $v : function() {
        return eh(t), a(r);
      }
    );
  }
  function th(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: rt,
      baseState: rt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wn,
        lastRenderedState: rt
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wn,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function eh(t) {
    var e = th(t);
    e.next === null && (e = t.alternate.memoizedState), Gl(
      t,
      e.next.queue,
      {},
      $e()
    );
  }
  function Gc() {
    return he(ei);
  }
  function nh() {
    return Pt().memoizedState;
  }
  function ah() {
    return Pt().memoizedState;
  }
  function qv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = $e();
          t = na(a);
          var r = aa(e, t, a);
          r !== null && (De(r, e, a), Hl(r, e, a)), e = { cache: hc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Yv(t, e, a) {
    var r = $e();
    a = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cu(t) ? lh(e, a) : (a = nc(t, e, a, r), a !== null && (De(a, t, r), ih(a, e, r)));
  }
  function rh(t, e, a) {
    var r = $e();
    Gl(t, e, a, r);
  }
  function Gl(t, e, a, r) {
    var o = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cu(t)) lh(e, o);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var d = e.lastRenderedState, g = c(d, a);
          if (o.hasEagerState = !0, o.eagerState = g, we(g, d))
            return Yi(t, e, o, 0), kt === null && qi(), !1;
        } catch {
        } finally {
        }
      if (a = nc(t, e, o, r), a !== null)
        return De(a, t, r), ih(a, e, r), !0;
    }
    return !1;
  }
  function jc(t, e, a, r) {
    if (r = {
      lane: 2,
      revertLane: ys(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cu(t)) {
      if (e) throw Error(u(479));
    } else
      e = nc(
        t,
        a,
        r,
        2
      ), e !== null && De(e, t, 2);
  }
  function cu(t) {
    var e = t.alternate;
    return t === ht || e !== null && e === ht;
  }
  function lh(t, e) {
    Nr = nu = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function ih(t, e, a) {
    if ((a & 4194048) !== 0) {
      var r = e.lanes;
      r &= t.pendingLanes, a |= r, e.lanes = a, f0(t, a);
    }
  }
  var jl = {
    readContext: he,
    use: lu,
    useCallback: Zt,
    useContext: Zt,
    useEffect: Zt,
    useImperativeHandle: Zt,
    useLayoutEffect: Zt,
    useInsertionEffect: Zt,
    useMemo: Zt,
    useReducer: Zt,
    useRef: Zt,
    useState: Zt,
    useDebugValue: Zt,
    useDeferredValue: Zt,
    useTransition: Zt,
    useSyncExternalStore: Zt,
    useId: Zt,
    useHostTransitionStatus: Zt,
    useFormState: Zt,
    useActionState: Zt,
    useOptimistic: Zt,
    useMemoCache: Zt,
    useCacheRefresh: Zt
  };
  jl.useEffectEvent = Zt;
  var uh = {
    readContext: he,
    use: lu,
    useCallback: function(t, e) {
      return Ee().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: he,
    useEffect: Vd,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, uu(
        4194308,
        4,
        Zd.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return uu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      uu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Ee();
      e = e === void 0 ? null : e;
      var r = t();
      if (ka) {
        Zn(!0);
        try {
          t();
        } finally {
          Zn(!1);
        }
      }
      return a.memoizedState = [r, e], r;
    },
    useReducer: function(t, e, a) {
      var r = Ee();
      if (a !== void 0) {
        var o = a(e);
        if (ka) {
          Zn(!0);
          try {
            a(e);
          } finally {
            Zn(!1);
          }
        }
      } else o = e;
      return r.memoizedState = r.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, r.queue = t, t = t.dispatch = Yv.bind(
        null,
        ht,
        t
      ), [r.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ee();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Nc(t);
      var e = t.queue, a = rh.bind(null, ht, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: wc,
    useDeferredValue: function(t, e) {
      var a = Ee();
      return Lc(a, t, e);
    },
    useTransition: function() {
      var t = Nc(!1);
      return t = Pd.bind(
        null,
        ht,
        t.queue,
        !0,
        !1
      ), Ee().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var r = ht, o = Ee();
      if (Et) {
        if (a === void 0)
          throw Error(u(407));
        a = a();
      } else {
        if (a = e(), kt === null)
          throw Error(u(349));
        (bt & 127) !== 0 || _d(r, e, a);
      }
      o.memoizedState = a;
      var c = { value: a, getSnapshot: e };
      return o.queue = c, Vd(Bd.bind(null, r, c, t), [
        t
      ]), r.flags |= 2048, zr(
        9,
        { destroy: void 0 },
        Rd.bind(
          null,
          r,
          c,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Ee(), e = kt.identifierPrefix;
      if (Et) {
        var a = hn, r = dn;
        a = (r & ~(1 << 32 - ze(r) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = au++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = Lv++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Gc,
    useFormState: jd,
    useActionState: jd,
    useOptimistic: function(t) {
      var e = Ee();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = jc.bind(
        null,
        ht,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: Rc,
    useCacheRefresh: function() {
      return Ee().memoizedState = qv.bind(
        null,
        ht
      );
    },
    useEffectEvent: function(t) {
      var e = Ee(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((_t & 2) !== 0)
          throw Error(u(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, kc = {
    readContext: he,
    use: lu,
    useCallback: Id,
    useContext: he,
    useEffect: zc,
    useImperativeHandle: Kd,
    useInsertionEffect: Fd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: iu,
    useRef: Yd,
    useState: function() {
      return iu(wn);
    },
    useDebugValue: wc,
    useDeferredValue: function(t, e) {
      var a = Pt();
      return Wd(
        a,
        Lt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = iu(wn)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ul(t),
        e
      ];
    },
    useSyncExternalStore: Od,
    useId: nh,
    useHostTransitionStatus: Gc,
    useFormState: kd,
    useActionState: kd,
    useOptimistic: function(t, e) {
      var a = Pt();
      return Hd(a, Lt, t, e);
    },
    useMemoCache: Rc,
    useCacheRefresh: ah
  };
  kc.useEffectEvent = Xd;
  var oh = {
    readContext: he,
    use: lu,
    useCallback: Id,
    useContext: he,
    useEffect: zc,
    useImperativeHandle: Kd,
    useInsertionEffect: Fd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: Dc,
    useRef: Yd,
    useState: function() {
      return Dc(wn);
    },
    useDebugValue: wc,
    useDeferredValue: function(t, e) {
      var a = Pt();
      return Lt === null ? Lc(a, t, e) : Wd(
        a,
        Lt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Dc(wn)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ul(t),
        e
      ];
    },
    useSyncExternalStore: Od,
    useId: nh,
    useHostTransitionStatus: Gc,
    useFormState: qd,
    useActionState: qd,
    useOptimistic: function(t, e) {
      var a = Pt();
      return Lt !== null ? Hd(a, Lt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: Rc,
    useCacheRefresh: ah
  };
  oh.useEffectEvent = Xd;
  function $c(t, e, a, r) {
    e = t.memoizedState, a = a(r, e), a = a == null ? e : S({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var qc = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var r = $e(), o = na(r);
      o.payload = e, a != null && (o.callback = a), e = aa(t, o, r), e !== null && (De(e, t, r), Hl(e, t, r));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var r = $e(), o = na(r);
      o.tag = 1, o.payload = e, a != null && (o.callback = a), e = aa(t, o, r), e !== null && (De(e, t, r), Hl(e, t, r));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = $e(), r = na(a);
      r.tag = 2, e != null && (r.callback = e), e = aa(t, r, a), e !== null && (De(e, t, a), Hl(e, t, a));
    }
  };
  function ch(t, e, a, r, o, c, d) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, c, d) : e.prototype && e.prototype.isPureReactComponent ? !Cl(a, r) || !Cl(o, c) : !0;
  }
  function sh(t, e, a, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, r), e.state !== t && qc.enqueueReplaceState(e, e.state, null);
  }
  function $a(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var r in e)
        r !== "ref" && (a[r] = e[r]);
    }
    if (t = t.defaultProps) {
      a === e && (a = S({}, a));
      for (var o in t)
        a[o] === void 0 && (a[o] = t[o]);
    }
    return a;
  }
  function fh(t) {
    $i(t);
  }
  function dh(t) {
    console.error(t);
  }
  function hh(t) {
    $i(t);
  }
  function su(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function mh(t, e, a) {
    try {
      var r = t.onCaughtError;
      r(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Yc(t, e, a) {
    return a = na(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      su(t, e);
    }, a;
  }
  function ph(t) {
    return t = na(t), t.tag = 3, t;
  }
  function gh(t, e, a, r) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      t.payload = function() {
        return o(c);
      }, t.callback = function() {
        mh(e, a, r);
      };
    }
    var d = a.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
      mh(e, a, r), typeof o != "function" && (ca === null ? ca = /* @__PURE__ */ new Set([this]) : ca.add(this));
      var g = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Vv(t, e, a, r, o) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (e = a.alternate, e !== null && Mr(
        e,
        a,
        o,
        !0
      ), a = Ue.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Pe === null ? Eu() : a.alternate === null && Kt === 0 && (Kt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, r === Ji ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([r]) : e.add(r), ms(t, r, o)), !1;
          case 22:
            return a.flags |= 65536, r === Ji ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([r]) : a.add(r)), ms(t, r, o)), !1;
        }
        throw Error(u(435, a.tag));
      }
      return ms(t, r, o), Eu(), !1;
    }
    if (Et)
      return e = Ue.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, r !== oc && (t = Error(u(422), { cause: r }), _l(Ke(t, a)))) : (r !== oc && (e = Error(u(423), {
        cause: r
      }), _l(
        Ke(e, a)
      )), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, r = Ke(r, a), o = Yc(
        t.stateNode,
        r,
        o
      ), bc(t, o), Kt !== 4 && (Kt = 2)), !1;
    var c = Error(u(520), { cause: r });
    if (c = Ke(c, a), Ql === null ? Ql = [c] : Ql.push(c), Kt !== 4 && (Kt = 2), e === null) return !0;
    r = Ke(r, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Yc(a.stateNode, r, t), bc(a, t), !1;
        case 1:
          if (e = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ca === null || !ca.has(c))))
            return a.flags |= 65536, o &= -o, a.lanes |= o, o = ph(o), gh(
              o,
              t,
              a,
              r
            ), bc(a, o), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Vc = Error(u(461)), ae = !1;
  function me(t, e, a, r) {
    e.child = t === null ? Sd(e, null, a, r) : ja(
      e,
      t.child,
      a,
      r
    );
  }
  function yh(t, e, a, r, o) {
    a = a.render;
    var c = e.ref;
    if ("ref" in r) {
      var d = {};
      for (var g in r)
        g !== "ref" && (d[g] = r[g]);
    } else d = r;
    return wa(e), r = Cc(
      t,
      e,
      a,
      d,
      c,
      o
    ), g = Mc(), t !== null && !ae ? (Oc(t, e, o), Ln(t, e, o)) : (Et && g && ic(e), e.flags |= 1, me(t, e, r, o), e.child);
  }
  function vh(t, e, a, r, o) {
    if (t === null) {
      var c = a.type;
      return typeof c == "function" && !ac(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = c, bh(
        t,
        e,
        c,
        r,
        o
      )) : (t = Xi(
        a.type,
        null,
        r,
        e,
        e.mode,
        o
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !Wc(t, o)) {
      var d = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Cl, a(d, r) && t.ref === e.ref)
        return Ln(t, e, o);
    }
    return e.flags |= 1, t = Bn(c, r), t.ref = e.ref, t.return = e, e.child = t;
  }
  function bh(t, e, a, r, o) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Cl(c, r) && t.ref === e.ref)
        if (ae = !1, e.pendingProps = r = c, Wc(t, o))
          (t.flags & 131072) !== 0 && (ae = !0);
        else
          return e.lanes = t.lanes, Ln(t, e, o);
    }
    return Xc(
      t,
      e,
      a,
      r,
      o
    );
  }
  function Sh(t, e, a, r) {
    var o = r.children, c = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | a : a, t !== null) {
          for (r = e.child = t.child, o = 0; r !== null; )
            o = o | r.lanes | r.childLanes, r = r.sibling;
          r = o & ~c;
        } else r = 0, e.child = null;
        return xh(
          t,
          e,
          c,
          a,
          r
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ki(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? Td(e, c) : xc(), Ad(e);
      else
        return r = e.lanes = 536870912, xh(
          t,
          e,
          c !== null ? c.baseLanes | a : a,
          a,
          r
        );
    } else
      c !== null ? (Ki(e, c.cachePool), Td(e, c), la(), e.memoizedState = null) : (t !== null && Ki(e, null), xc(), la());
    return me(t, e, o, a), e.child;
  }
  function kl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function xh(t, e, a, r, o) {
    var c = pc();
    return c = c === null ? null : { parent: ee._currentValue, pool: c }, e.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, t !== null && Ki(e, null), xc(), Ad(e), t !== null && Mr(t, e, r, !0), e.childLanes = o, null;
  }
  function fu(t, e) {
    return e = hu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Eh(t, e, a) {
    return ja(e, t.child, null, a), t = fu(e, e.pendingProps), t.flags |= 2, Ge(e), e.memoizedState = null, t;
  }
  function Xv(t, e, a) {
    var r = e.pendingProps, o = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Et) {
        if (r.mode === "hidden")
          return t = fu(e, r), e.lanes = 536870912, kl(null, t);
        if (Tc(e), (t = $t) ? (t = zm(
          t,
          We
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Jn !== null ? { id: dn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ld(t), a.return = e, e.child = a, de = e, $t = null)) : t = null, t === null) throw Pn(e);
        return e.lanes = 536870912, null;
      }
      return fu(e, r);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var d = c.dehydrated;
      if (Tc(e), o)
        if (e.flags & 256)
          e.flags &= -257, e = Eh(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(u(558));
      else if (ae || Mr(t, e, a, !1), o = (a & t.childLanes) !== 0, ae || o) {
        if (r = kt, r !== null && (d = d0(r, a), d !== 0 && d !== c.retryLane))
          throw c.retryLane = d, Da(t, d), De(r, t, d), Vc;
        Eu(), e = Eh(
          t,
          e,
          a
        );
      } else
        t = c.treeContext, $t = tn(d.nextSibling), de = e, Et = !0, Wn = null, We = !1, t !== null && od(e, t), e = fu(e, r), e.flags |= 4096;
      return e;
    }
    return t = Bn(t.child, {
      mode: r.mode,
      children: r.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function du(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(u(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Xc(t, e, a, r, o) {
    return wa(e), a = Cc(
      t,
      e,
      a,
      r,
      void 0,
      o
    ), r = Mc(), t !== null && !ae ? (Oc(t, e, o), Ln(t, e, o)) : (Et && r && ic(e), e.flags |= 1, me(t, e, a, o), e.child);
  }
  function Th(t, e, a, r, o, c) {
    return wa(e), e.updateQueue = null, a = Md(
      e,
      r,
      a,
      o
    ), Cd(t), r = Mc(), t !== null && !ae ? (Oc(t, e, c), Ln(t, e, c)) : (Et && r && ic(e), e.flags |= 1, me(t, e, a, c), e.child);
  }
  function Ah(t, e, a, r, o) {
    if (wa(e), e.stateNode === null) {
      var c = Er, d = a.contextType;
      typeof d == "object" && d !== null && (c = he(d)), c = new a(r, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = qc, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = r, c.state = e.memoizedState, c.refs = {}, yc(e), d = a.contextType, c.context = typeof d == "object" && d !== null ? he(d) : Er, c.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && ($c(
        e,
        a,
        d,
        r
      ), c.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (d = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), d !== c.state && qc.enqueueReplaceState(c, c.state, null), wl(e, r, c, o), zl(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !0;
    } else if (t === null) {
      c = e.stateNode;
      var g = e.memoizedProps, x = $a(a, g);
      c.props = x;
      var B = c.context, L = a.contextType;
      d = Er, typeof L == "object" && L !== null && (d = he(L));
      var $ = a.getDerivedStateFromProps;
      L = typeof $ == "function" || typeof c.getSnapshotBeforeUpdate == "function", g = e.pendingProps !== g, L || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g || B !== d) && sh(
        e,
        c,
        r,
        d
      ), ea = !1;
      var D = e.memoizedState;
      c.state = D, wl(e, r, c, o), zl(), B = e.memoizedState, g || D !== B || ea ? (typeof $ == "function" && ($c(
        e,
        a,
        $,
        r
      ), B = e.memoizedState), (x = ea || ch(
        e,
        a,
        x,
        r,
        D,
        B,
        d
      )) ? (L || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = B), c.props = r, c.state = B, c.context = d, r = x) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
    } else {
      c = e.stateNode, vc(t, e), d = e.memoizedProps, L = $a(a, d), c.props = L, $ = e.pendingProps, D = c.context, B = a.contextType, x = Er, typeof B == "object" && B !== null && (x = he(B)), g = a.getDerivedStateFromProps, (B = typeof g == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== $ || D !== x) && sh(
        e,
        c,
        r,
        x
      ), ea = !1, D = e.memoizedState, c.state = D, wl(e, r, c, o), zl();
      var H = e.memoizedState;
      d !== $ || D !== H || ea || t !== null && t.dependencies !== null && Qi(t.dependencies) ? (typeof g == "function" && ($c(
        e,
        a,
        g,
        r
      ), H = e.memoizedState), (L = ea || ch(
        e,
        a,
        L,
        r,
        D,
        H,
        x
      ) || t !== null && t.dependencies !== null && Qi(t.dependencies)) ? (B || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, H, x), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        r,
        H,
        x
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = H), c.props = r, c.state = H, c.context = x, r = L) : (typeof c.componentDidUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), r = !1);
    }
    return c = r, du(t, e), r = (e.flags & 128) !== 0, c || r ? (c = e.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && r ? (e.child = ja(
      e,
      t.child,
      null,
      o
    ), e.child = ja(
      e,
      null,
      a,
      o
    )) : me(t, e, a, o), e.memoizedState = c.state, t = e.child) : t = Ln(
      t,
      e,
      o
    ), t;
  }
  function Ch(t, e, a, r) {
    return Ha(), e.flags |= 256, me(t, e, a, r), e.child;
  }
  var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(t) {
    return { baseLanes: t, cachePool: md() };
  }
  function Zc(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= ke), t;
  }
  function Mh(t, e, a) {
    var r = e.pendingProps, o = !1, c = (e.flags & 128) !== 0, d;
    if ((d = c) || (d = t !== null && t.memoizedState === null ? !1 : (Wt.current & 2) !== 0), d && (o = !0, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Et) {
        if (o ? ra(e) : la(), (t = $t) ? (t = zm(
          t,
          We
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Jn !== null ? { id: dn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ld(t), a.return = e, e.child = a, de = e, $t = null)) : t = null, t === null) throw Pn(e);
        return Bs(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var g = r.children;
      return r = r.fallback, o ? (la(), o = e.mode, g = hu(
        { mode: "hidden", children: g },
        o
      ), r = Na(
        r,
        o,
        a,
        null
      ), g.return = e, r.return = e, g.sibling = r, e.child = g, r = e.child, r.memoizedState = Qc(a), r.childLanes = Zc(
        t,
        d,
        a
      ), e.memoizedState = Fc, kl(null, r)) : (ra(e), Kc(e, g));
    }
    var x = t.memoizedState;
    if (x !== null && (g = x.dehydrated, g !== null)) {
      if (c)
        e.flags & 256 ? (ra(e), e.flags &= -257, e = Ic(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (la(), e.child = t.child, e.flags |= 128, e = null) : (la(), g = r.fallback, o = e.mode, r = hu(
          { mode: "visible", children: r.children },
          o
        ), g = Na(
          g,
          o,
          a,
          null
        ), g.flags |= 2, r.return = e, g.return = e, r.sibling = g, e.child = r, ja(
          e,
          t.child,
          null,
          a
        ), r = e.child, r.memoizedState = Qc(a), r.childLanes = Zc(
          t,
          d,
          a
        ), e.memoizedState = Fc, e = kl(null, r));
      else if (ra(e), Bs(g)) {
        if (d = g.nextSibling && g.nextSibling.dataset, d) var B = d.dgst;
        d = B, r = Error(u(419)), r.stack = "", r.digest = d, _l({ value: r, source: null, stack: null }), e = Ic(
          t,
          e,
          a
        );
      } else if (ae || Mr(t, e, a, !1), d = (a & t.childLanes) !== 0, ae || d) {
        if (d = kt, d !== null && (r = d0(d, a), r !== 0 && r !== x.retryLane))
          throw x.retryLane = r, Da(t, r), De(d, t, r), Vc;
        Rs(g) || Eu(), e = Ic(
          t,
          e,
          a
        );
      } else
        Rs(g) ? (e.flags |= 192, e.child = t.child, e = null) : (t = x.treeContext, $t = tn(
          g.nextSibling
        ), de = e, Et = !0, Wn = null, We = !1, t !== null && od(e, t), e = Kc(
          e,
          r.children
        ), e.flags |= 4096);
      return e;
    }
    return o ? (la(), g = r.fallback, o = e.mode, x = t.child, B = x.sibling, r = Bn(x, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = x.subtreeFlags & 65011712, B !== null ? g = Bn(
      B,
      g
    ) : (g = Na(
      g,
      o,
      a,
      null
    ), g.flags |= 2), g.return = e, r.return = e, r.sibling = g, e.child = r, kl(null, r), r = e.child, g = t.child.memoizedState, g === null ? g = Qc(a) : (o = g.cachePool, o !== null ? (x = ee._currentValue, o = o.parent !== x ? { parent: x, pool: x } : o) : o = md(), g = {
      baseLanes: g.baseLanes | a,
      cachePool: o
    }), r.memoizedState = g, r.childLanes = Zc(
      t,
      d,
      a
    ), e.memoizedState = Fc, kl(t.child, r)) : (ra(e), a = t.child, t = a.sibling, a = Bn(a, {
      mode: "visible",
      children: r.children
    }), a.return = e, a.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function Kc(t, e) {
    return e = hu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function hu(t, e) {
    return t = Le(22, t, null, e), t.lanes = 0, t;
  }
  function Ic(t, e, a) {
    return ja(e, t.child, null, a), t = Kc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Oh(t, e, a) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), fc(t.return, e, a);
  }
  function Jc(t, e, a, r, o, c) {
    var d = t.memoizedState;
    d === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: a,
      tailMode: o,
      treeForkCount: c
    } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = r, d.tail = a, d.tailMode = o, d.treeForkCount = c);
  }
  function _h(t, e, a) {
    var r = e.pendingProps, o = r.revealOrder, c = r.tail;
    r = r.children;
    var d = Wt.current, g = (d & 2) !== 0;
    if (g ? (d = d & 1 | 2, e.flags |= 128) : d &= 1, K(Wt, d), me(t, e, r, a), r = Et ? Ol : 0, !g && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Oh(t, a, e);
        else if (t.tag === 19)
          Oh(t, a, e);
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
    switch (o) {
      case "forwards":
        for (a = e.child, o = null; a !== null; )
          t = a.alternate, t !== null && eu(t) === null && (o = a), a = a.sibling;
        a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Jc(
          e,
          !1,
          o,
          a,
          c,
          r
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, o = e.child, e.child = null; o !== null; ) {
          if (t = o.alternate, t !== null && eu(t) === null) {
            e.child = o;
            break;
          }
          t = o.sibling, o.sibling = a, a = o, o = t;
        }
        Jc(
          e,
          !0,
          a,
          null,
          c,
          r
        );
        break;
      case "together":
        Jc(
          e,
          !1,
          null,
          null,
          void 0,
          r
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ln(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), oa |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (Mr(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, a = Bn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = Bn(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Wc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Qi(t)));
  }
  function Fv(t, e, a) {
    switch (e.tag) {
      case 3:
        ue(e, e.stateNode.containerInfo), ta(e, ee, t.memoizedState.cache), Ha();
        break;
      case 27:
      case 5:
        Ta(e);
        break;
      case 4:
        ue(e, e.stateNode.containerInfo);
        break;
      case 10:
        ta(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Tc(e), null;
        break;
      case 13:
        var r = e.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (ra(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Mh(t, e, a) : (ra(e), t = Ln(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        ra(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (r = (a & e.childLanes) !== 0, r || (Mr(
          t,
          e,
          a,
          !1
        ), r = (a & e.childLanes) !== 0), o) {
          if (r)
            return _h(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(Wt, Wt.current), r) break;
        return null;
      case 22:
        return e.lanes = 0, Sh(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        ta(e, ee, t.memoizedState.cache);
    }
    return Ln(t, e, a);
  }
  function Rh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ae = !0;
      else {
        if (!Wc(t, a) && (e.flags & 128) === 0)
          return ae = !1, Fv(
            t,
            e,
            a
          );
        ae = (t.flags & 131072) !== 0;
      }
    else
      ae = !1, Et && (e.flags & 1048576) !== 0 && ud(e, Ol, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var r = e.pendingProps;
          if (t = Ua(e.elementType), e.type = t, typeof t == "function")
            ac(t) ? (r = $a(t, r), e.tag = 1, e = Ah(
              null,
              e,
              t,
              r,
              a
            )) : (e.tag = 0, e = Xc(
              null,
              e,
              t,
              r,
              a
            ));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === Q) {
                e.tag = 11, e = yh(
                  null,
                  e,
                  t,
                  r,
                  a
                );
                break t;
              } else if (o === X) {
                e.tag = 14, e = vh(
                  null,
                  e,
                  t,
                  r,
                  a
                );
                break t;
              }
            }
            throw e = I(t) || t, Error(u(306, e, ""));
          }
        }
        return e;
      case 0:
        return Xc(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return r = e.type, o = $a(
          r,
          e.pendingProps
        ), Ah(
          t,
          e,
          r,
          o,
          a
        );
      case 3:
        t: {
          if (ue(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(u(387));
          r = e.pendingProps;
          var c = e.memoizedState;
          o = c.element, vc(t, e), wl(e, r, null, a);
          var d = e.memoizedState;
          if (r = d.cache, ta(e, ee, r), r !== c.cache && dc(
            e,
            [ee],
            a,
            !0
          ), zl(), r = d.element, c.isDehydrated)
            if (c = {
              element: r,
              isDehydrated: !1,
              cache: d.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = Ch(
                t,
                e,
                r,
                a
              );
              break t;
            } else if (r !== o) {
              o = Ke(
                Error(u(424)),
                e
              ), _l(o), e = Ch(
                t,
                e,
                r,
                a
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
              for ($t = tn(t.firstChild), de = e, Et = !0, Wn = null, We = !0, a = Sd(
                e,
                null,
                r,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ha(), r === o) {
              e = Ln(
                t,
                e,
                a
              );
              break t;
            }
            me(t, e, r, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return du(t, e), t === null ? (a = km(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : Et || (a = e.type, t = e.pendingProps, r = Ru(
          pt.current
        ).createElement(a), r[fe] = e, r[Ce] = t, pe(r, a, t), oe(r), e.stateNode = r) : e.memoizedState = km(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ta(e), t === null && Et && (r = e.stateNode = Um(
          e.type,
          e.pendingProps,
          pt.current
        ), de = e, We = !0, o = $t, ha(e.type) ? (Ds = o, $t = tn(r.firstChild)) : $t = o), me(
          t,
          e,
          e.pendingProps.children,
          a
        ), du(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Et && ((o = r = $t) && (r = Eb(
          r,
          e.type,
          e.pendingProps,
          We
        ), r !== null ? (e.stateNode = r, de = e, $t = tn(r.firstChild), We = !1, o = !0) : o = !1), o || Pn(e)), Ta(e), o = e.type, c = e.pendingProps, d = t !== null ? t.memoizedProps : null, r = c.children, Ms(o, c) ? r = null : d !== null && Ms(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = Cc(
          t,
          e,
          Uv,
          null,
          null,
          a
        ), ei._currentValue = o), du(t, e), me(t, e, r, a), e.child;
      case 6:
        return t === null && Et && ((t = a = $t) && (a = Tb(
          a,
          e.pendingProps,
          We
        ), a !== null ? (e.stateNode = a, de = e, $t = null, t = !0) : t = !1), t || Pn(e)), null;
      case 13:
        return Mh(t, e, a);
      case 4:
        return ue(
          e,
          e.stateNode.containerInfo
        ), r = e.pendingProps, t === null ? e.child = ja(
          e,
          null,
          r,
          a
        ) : me(t, e, r, a), e.child;
      case 11:
        return yh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return me(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return me(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return me(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return r = e.pendingProps, ta(e, e.type, r.value), me(t, e, r.children, a), e.child;
      case 9:
        return o = e.type._context, r = e.pendingProps.children, wa(e), o = he(o), r = r(o), e.flags |= 1, me(t, e, r, a), e.child;
      case 14:
        return vh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return bh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return _h(t, e, a);
      case 31:
        return Xv(t, e, a);
      case 22:
        return Sh(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return wa(e), r = he(ee), t === null ? (o = pc(), o === null && (o = kt, c = hc(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= a), o = c), e.memoizedState = { parent: r, cache: o }, yc(e), ta(e, ee, o)) : ((t.lanes & a) !== 0 && (vc(t, e), wl(e, null, null, a), zl()), o = t.memoizedState, c = e.memoizedState, o.parent !== r ? (o = { parent: r, cache: r }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), ta(e, ee, r)) : (r = c.cache, ta(e, ee, r), r !== o.cache && dc(
          e,
          [ee],
          a,
          !0
        ))), me(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function Un(t) {
    t.flags |= 4;
  }
  function Pc(t, e, a, r, o) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (o & 335544128) === o)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (nm()) t.flags |= 8192;
        else
          throw Ga = Ji, gc;
    } else t.flags &= -16777217;
  }
  function Bh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Xm(e))
      if (nm()) t.flags |= 8192;
      else
        throw Ga = Ji, gc;
  }
  function mu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? c0() : 536870912, t.lanes |= e, Gr |= e);
  }
  function $l(t, e) {
    if (!Et)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = t.tail;
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null;
      }
  }
  function qt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, r = 0;
    if (e)
      for (var o = t.child; o !== null; )
        a |= o.lanes | o.childLanes, r |= o.subtreeFlags & 65011712, r |= o.flags & 65011712, o.return = t, o = o.sibling;
    else
      for (o = t.child; o !== null; )
        a |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = t, o = o.sibling;
    return t.subtreeFlags |= r, t.childLanes = a, e;
  }
  function Qv(t, e, a) {
    var r = e.pendingProps;
    switch (uc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(e), null;
      case 1:
        return qt(e), null;
      case 3:
        return a = e.stateNode, r = null, t !== null && (r = t.memoizedState.cache), e.memoizedState.cache !== r && (e.flags |= 2048), Hn(ee), Vt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Cr(e) ? Un(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, cc())), qt(e), null;
      case 26:
        var o = e.type, c = e.memoizedState;
        return t === null ? (Un(e), c !== null ? (qt(e), Bh(e, c)) : (qt(e), Pc(
          e,
          o,
          null,
          r,
          a
        ))) : c ? c !== t.memoizedState ? (Un(e), qt(e), Bh(e, c)) : (qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== r && Un(e), qt(e), Pc(
          e,
          o,
          t,
          r,
          a
        )), null;
      case 27:
        if (rr(e), a = pt.current, o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== r && Un(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(u(166));
            return qt(e), null;
          }
          t = et.current, Cr(e) ? cd(e) : (t = Um(o, r, a), e.stateNode = t, Un(e));
        }
        return qt(e), null;
      case 5:
        if (rr(e), o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== r && Un(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(u(166));
            return qt(e), null;
          }
          if (c = et.current, Cr(e))
            cd(e);
          else {
            var d = Ru(
              pt.current
            );
            switch (c) {
              case 1:
                c = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                c = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    c = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    c = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    c = d.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof r.is == "string" ? d.createElement("select", {
                      is: r.is
                    }) : d.createElement("select"), r.multiple ? c.multiple = !0 : r.size && (c.size = r.size);
                    break;
                  default:
                    c = typeof r.is == "string" ? d.createElement(o, { is: r.is }) : d.createElement(o);
                }
            }
            c[fe] = e, c[Ce] = r;
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                c.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e)
                  break t;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            e.stateNode = c;
            t: switch (pe(c, o, r), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break t;
              case "img":
                r = !0;
                break t;
              default:
                r = !1;
            }
            r && Un(e);
          }
        }
        return qt(e), Pc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== r && Un(e);
        else {
          if (typeof r != "string" && e.stateNode === null)
            throw Error(u(166));
          if (t = pt.current, Cr(e)) {
            if (t = e.stateNode, a = e.memoizedProps, r = null, o = de, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  r = o.memoizedProps;
              }
            t[fe] = e, t = !!(t.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || Mm(t.nodeValue, a)), t || Pn(e, !0);
          } else
            t = Ru(t).createTextNode(
              r
            ), t[fe] = e, e.stateNode = t;
        }
        return qt(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (r = Cr(e), a !== null) {
            if (t === null) {
              if (!r) throw Error(u(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[fe] = e;
            } else
              Ha(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), t = !1;
          } else
            a = cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(u(558));
        }
        return qt(e), null;
      case 13:
        if (r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (o = Cr(e), r !== null && r.dehydrated !== null) {
            if (t === null) {
              if (!o) throw Error(u(318));
              if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[fe] = e;
            } else
              Ha(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), o = !1;
          } else
            o = cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
        }
        return Ge(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = r !== null, t = t !== null && t.memoizedState !== null, a && (r = e.child, o = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool), c = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== o && (r.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), mu(e, e.updateQueue), qt(e), null);
      case 4:
        return Vt(), t === null && xs(e.stateNode.containerInfo), qt(e), null;
      case 10:
        return Hn(e.type), qt(e), null;
      case 19:
        if (G(Wt), r = e.memoizedState, r === null) return qt(e), null;
        if (o = (e.flags & 128) !== 0, c = r.rendering, c === null)
          if (o) $l(r, !1);
          else {
            if (Kt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = eu(t), c !== null) {
                  for (e.flags |= 128, $l(r, !1), t = c.updateQueue, e.updateQueue = t, mu(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    rd(a, t), a = a.sibling;
                  return K(
                    Wt,
                    Wt.current & 1 | 2
                  ), Et && Dn(e, r.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            r.tail !== null && ye() > bu && (e.flags |= 128, o = !0, $l(r, !1), e.lanes = 4194304);
          }
        else {
          if (!o)
            if (t = eu(c), t !== null) {
              if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, mu(e, t), $l(r, !0), r.tail === null && r.tailMode === "hidden" && !c.alternate && !Et)
                return qt(e), null;
            } else
              2 * ye() - r.renderingStartTime > bu && a !== 536870912 && (e.flags |= 128, o = !0, $l(r, !1), e.lanes = 4194304);
          r.isBackwards ? (c.sibling = e.child, e.child = c) : (t = r.last, t !== null ? t.sibling = c : e.child = c, r.last = c);
        }
        return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = ye(), t.sibling = null, a = Wt.current, K(
          Wt,
          o ? a & 1 | 2 : a & 1
        ), Et && Dn(e, r.treeForkCount), t) : (qt(e), null);
      case 22:
      case 23:
        return Ge(e), Ec(), r = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (e.flags |= 8192) : r && (e.flags |= 8192), r ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : qt(e), a = e.updateQueue, a !== null && mu(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), r = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), r !== a && (e.flags |= 2048), t !== null && G(La), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Hn(ee), qt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Zv(t, e) {
    switch (uc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Hn(ee), Vt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return rr(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ge(e), e.alternate === null)
            throw Error(u(340));
          Ha();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(u(340));
          Ha();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return G(Wt), null;
      case 4:
        return Vt(), null;
      case 10:
        return Hn(e.type), null;
      case 22:
      case 23:
        return Ge(e), Ec(), t !== null && G(La), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Hn(ee), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dh(t, e) {
    switch (uc(e), e.tag) {
      case 3:
        Hn(ee), Vt();
        break;
      case 26:
      case 27:
      case 5:
        rr(e);
        break;
      case 4:
        Vt();
        break;
      case 31:
        e.memoizedState !== null && Ge(e);
        break;
      case 13:
        Ge(e);
        break;
      case 19:
        G(Wt);
        break;
      case 10:
        Hn(e.type);
        break;
      case 22:
      case 23:
        Ge(e), Ec(), t !== null && G(La);
        break;
      case 24:
        Hn(ee);
    }
  }
  function ql(t, e) {
    try {
      var a = e.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            r = void 0;
            var c = a.create, d = a.inst;
            r = c(), d.destroy = r;
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (g) {
      Ht(e, e.return, g);
    }
  }
  function ia(t, e, a) {
    try {
      var r = e.updateQueue, o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        r = c;
        do {
          if ((r.tag & t) === t) {
            var d = r.inst, g = d.destroy;
            if (g !== void 0) {
              d.destroy = void 0, o = e;
              var x = a, B = g;
              try {
                B();
              } catch (L) {
                Ht(
                  o,
                  x,
                  L
                );
              }
            }
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (L) {
      Ht(e, e.return, L);
    }
  }
  function Nh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Ed(e, a);
      } catch (r) {
        Ht(t, t.return, r);
      }
    }
  }
  function Hh(t, e, a) {
    a.props = $a(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (r) {
      Ht(t, e, r);
    }
  }
  function Yl(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = t.stateNode;
            break;
          case 30:
            r = t.stateNode;
            break;
          default:
            r = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(r) : a.current = r;
      }
    } catch (o) {
      Ht(t, e, o);
    }
  }
  function mn(t, e) {
    var a = t.ref, r = t.refCleanup;
    if (a !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (o) {
          Ht(t, e, o);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Ht(t, e, o);
        }
      else a.current = null;
  }
  function zh(t) {
    var e = t.type, a = t.memoizedProps, r = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && r.focus();
          break t;
        case "img":
          a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet);
      }
    } catch (o) {
      Ht(t, t.return, o);
    }
  }
  function ts(t, e, a) {
    try {
      var r = t.stateNode;
      gb(r, t.type, a, e), r[Ce] = e;
    } catch (o) {
      Ht(t, t.return, o);
    }
  }
  function wh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ha(t.type) || t.tag === 4;
  }
  function es(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || wh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ha(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ns(t, e, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = _n));
    else if (r !== 4 && (r === 27 && ha(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (ns(t, e, a), t = t.sibling; t !== null; )
        ns(t, e, a), t = t.sibling;
  }
  function pu(t, e, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (r !== 4 && (r === 27 && ha(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (pu(t, e, a), t = t.sibling; t !== null; )
        pu(t, e, a), t = t.sibling;
  }
  function Lh(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var r = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      pe(e, r, a), e[fe] = t, e[Ce] = a;
    } catch (c) {
      Ht(t, t.return, c);
    }
  }
  var Gn = !1, re = !1, as = !1, Uh = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Kv(t, e) {
    if (t = t.containerInfo, As = Lu, t = K0(t), Io(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var r = a.getSelection && a.getSelection();
          if (r && r.rangeCount !== 0) {
            a = r.anchorNode;
            var o = r.anchorOffset, c = r.focusNode;
            r = r.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break t;
            }
            var d = 0, g = -1, x = -1, B = 0, L = 0, $ = t, D = null;
            e: for (; ; ) {
              for (var H; $ !== a || o !== 0 && $.nodeType !== 3 || (g = d + o), $ !== c || r !== 0 && $.nodeType !== 3 || (x = d + r), $.nodeType === 3 && (d += $.nodeValue.length), (H = $.firstChild) !== null; )
                D = $, $ = H;
              for (; ; ) {
                if ($ === t) break e;
                if (D === a && ++B === o && (g = d), D === c && ++L === r && (x = d), (H = $.nextSibling) !== null) break;
                $ = D, D = $.parentNode;
              }
              $ = H;
            }
            a = g === -1 || x === -1 ? null : { start: g, end: x };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Cs = { focusedElem: t, selectionRange: a }, Lu = !1, ce = e; ce !== null; )
      if (e = ce, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ce = t;
      else
        for (; ce !== null; ) {
          switch (e = ce, c = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (a = 0; a < t.length; a++)
                  o = t[a], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                t = void 0, a = e, o = c.memoizedProps, c = c.memoizedState, r = a.stateNode;
                try {
                  var nt = $a(
                    a.type,
                    o
                  );
                  t = r.getSnapshotBeforeUpdate(
                    nt,
                    c
                  ), r.__reactInternalSnapshotBeforeUpdate = t;
                } catch (st) {
                  Ht(
                    a,
                    a.return,
                    st
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9)
                  _s(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      _s(t);
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
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, ce = t;
            break;
          }
          ce = e.return;
        }
  }
  function Gh(t, e, a) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        kn(t, a), r & 4 && ql(5, a);
        break;
      case 1:
        if (kn(t, a), r & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (d) {
              Ht(a, a.return, d);
            }
          else {
            var o = $a(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                o,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (d) {
              Ht(
                a,
                a.return,
                d
              );
            }
          }
        r & 64 && Nh(a), r & 512 && Yl(a, a.return);
        break;
      case 3:
        if (kn(t, a), r & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Ed(t, e);
          } catch (d) {
            Ht(a, a.return, d);
          }
        }
        break;
      case 27:
        e === null && r & 4 && Lh(a);
      case 26:
      case 5:
        kn(t, a), e === null && r & 4 && zh(a), r & 512 && Yl(a, a.return);
        break;
      case 12:
        kn(t, a);
        break;
      case 31:
        kn(t, a), r & 4 && $h(t, a);
        break;
      case 13:
        kn(t, a), r & 4 && qh(t, a), r & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = rb.bind(
          null,
          a
        ), Ab(t, a))));
        break;
      case 22:
        if (r = a.memoizedState !== null || Gn, !r) {
          e = e !== null && e.memoizedState !== null || re, o = Gn;
          var c = re;
          Gn = r, (re = e) && !c ? $n(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : kn(t, a), Gn = o, re = c;
        }
        break;
      case 30:
        break;
      default:
        kn(t, a);
    }
  }
  function jh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, jh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ho(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ft = null, Oe = !1;
  function jn(t, e, a) {
    for (a = a.child; a !== null; )
      kh(t, e, a), a = a.sibling;
  }
  function kh(t, e, a) {
    if (He && typeof He.onCommitFiberUnmount == "function")
      try {
        He.onCommitFiberUnmount(hl, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        re || mn(a, e), jn(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        re || mn(a, e);
        var r = Ft, o = Oe;
        ha(a.type) && (Ft = a.stateNode, Oe = !1), jn(
          t,
          e,
          a
        ), Wl(a.stateNode), Ft = r, Oe = o;
        break;
      case 5:
        re || mn(a, e);
      case 6:
        if (r = Ft, o = Oe, Ft = null, jn(
          t,
          e,
          a
        ), Ft = r, Oe = o, Ft !== null)
          if (Oe)
            try {
              (Ft.nodeType === 9 ? Ft.body : Ft.nodeName === "HTML" ? Ft.ownerDocument.body : Ft).removeChild(a.stateNode);
            } catch (c) {
              Ht(
                a,
                e,
                c
              );
            }
          else
            try {
              Ft.removeChild(a.stateNode);
            } catch (c) {
              Ht(
                a,
                e,
                c
              );
            }
        break;
      case 18:
        Ft !== null && (Oe ? (t = Ft, Nm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Fr(t)) : Nm(Ft, a.stateNode));
        break;
      case 4:
        r = Ft, o = Oe, Ft = a.stateNode.containerInfo, Oe = !0, jn(
          t,
          e,
          a
        ), Ft = r, Oe = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ia(2, a, e), re || ia(4, a, e), jn(
          t,
          e,
          a
        );
        break;
      case 1:
        re || (mn(a, e), r = a.stateNode, typeof r.componentWillUnmount == "function" && Hh(
          a,
          e,
          r
        )), jn(
          t,
          e,
          a
        );
        break;
      case 21:
        jn(
          t,
          e,
          a
        );
        break;
      case 22:
        re = (r = re) || a.memoizedState !== null, jn(
          t,
          e,
          a
        ), re = r;
        break;
      default:
        jn(
          t,
          e,
          a
        );
    }
  }
  function $h(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Fr(t);
      } catch (a) {
        Ht(e, e.return, a);
      }
    }
  }
  function qh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Fr(t);
      } catch (a) {
        Ht(e, e.return, a);
      }
  }
  function Iv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Uh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Uh()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function gu(t, e) {
    var a = Iv(t);
    e.forEach(function(r) {
      if (!a.has(r)) {
        a.add(r);
        var o = lb.bind(null, t, r);
        r.then(o, o);
      }
    });
  }
  function _e(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var o = a[r], c = t, d = e, g = d;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (ha(g.type)) {
                Ft = g.stateNode, Oe = !1;
                break t;
              }
              break;
            case 5:
              Ft = g.stateNode, Oe = !1;
              break t;
            case 3:
            case 4:
              Ft = g.stateNode.containerInfo, Oe = !0;
              break t;
          }
          g = g.return;
        }
        if (Ft === null) throw Error(u(160));
        kh(c, d, o), Ft = null, Oe = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Yh(e, t), e = e.sibling;
  }
  var on = null;
  function Yh(t, e) {
    var a = t.alternate, r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _e(e, t), Re(t), r & 4 && (ia(3, t, t.return), ql(3, t), ia(5, t, t.return));
        break;
      case 1:
        _e(e, t), Re(t), r & 512 && (re || a === null || mn(a, a.return)), r & 64 && Gn && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
        break;
      case 26:
        var o = on;
        if (_e(e, t), Re(t), r & 512 && (re || a === null || mn(a, a.return)), r & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (r = t.memoizedState, a === null)
            if (r === null)
              if (t.stateNode === null) {
                t: {
                  r = t.type, a = t.memoizedProps, o = o.ownerDocument || o;
                  e: switch (r) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[gl] || c[fe] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(r), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), pe(c, r, a), c[fe] = t, oe(c), r = c;
                      break t;
                    case "link":
                      var d = Ym(
                        "link",
                        "href",
                        o
                      ).get(r + (a.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (c = d[g], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      c = o.createElement(r), pe(c, r, a), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (d = Ym(
                        "meta",
                        "content",
                        o
                      ).get(r + (a.content || ""))) {
                        for (g = 0; g < d.length; g++)
                          if (c = d[g], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      c = o.createElement(r), pe(c, r, a), o.head.appendChild(c);
                      break;
                    default:
                      throw Error(u(468, r));
                  }
                  c[fe] = t, oe(c), r = c;
                }
                t.stateNode = r;
              } else
                Vm(
                  o,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = qm(
                o,
                r,
                t.memoizedProps
              );
          else
            c !== r ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, r === null ? Vm(
              o,
              t.type,
              t.stateNode
            ) : qm(
              o,
              r,
              t.memoizedProps
            )) : r === null && t.stateNode !== null && ts(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        _e(e, t), Re(t), r & 512 && (re || a === null || mn(a, a.return)), a !== null && r & 4 && ts(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (_e(e, t), Re(t), r & 512 && (re || a === null || mn(a, a.return)), t.flags & 32) {
          o = t.stateNode;
          try {
            pr(o, "");
          } catch (nt) {
            Ht(t, t.return, nt);
          }
        }
        r & 4 && t.stateNode != null && (o = t.memoizedProps, ts(
          t,
          o,
          a !== null ? a.memoizedProps : o
        )), r & 1024 && (as = !0);
        break;
      case 6:
        if (_e(e, t), Re(t), r & 4) {
          if (t.stateNode === null)
            throw Error(u(162));
          r = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = r;
          } catch (nt) {
            Ht(t, t.return, nt);
          }
        }
        break;
      case 3:
        if (Nu = null, o = on, on = Bu(e.containerInfo), _e(e, t), on = o, Re(t), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Fr(e.containerInfo);
          } catch (nt) {
            Ht(t, t.return, nt);
          }
        as && (as = !1, Vh(t));
        break;
      case 4:
        r = on, on = Bu(
          t.stateNode.containerInfo
        ), _e(e, t), Re(t), on = r;
        break;
      case 12:
        _e(e, t), Re(t);
        break;
      case 31:
        _e(e, t), Re(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, gu(t, r)));
        break;
      case 13:
        _e(e, t), Re(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (vu = ye()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, gu(t, r)));
        break;
      case 22:
        o = t.memoizedState !== null;
        var x = a !== null && a.memoizedState !== null, B = Gn, L = re;
        if (Gn = B || o, re = L || x, _e(e, t), re = L, Gn = B, Re(t), r & 8192)
          t: for (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, o && (a === null || x || Gn || re || qa(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                x = a = e;
                try {
                  if (c = x.stateNode, o)
                    d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    g = x.stateNode;
                    var $ = x.memoizedProps.style, D = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    g.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (nt) {
                  Ht(x, x.return, nt);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = o ? "" : x.memoizedProps;
                } catch (nt) {
                  Ht(x, x.return, nt);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                x = e;
                try {
                  var H = x.stateNode;
                  o ? Hm(H, !0) : Hm(x.stateNode, !1);
                } catch (nt) {
                  Ht(x, x.return, nt);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), e = e.return;
            }
            a === e && (a = null), e.sibling.return = e.return, e = e.sibling;
          }
        r & 4 && (r = t.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, gu(t, a))));
        break;
      case 19:
        _e(e, t), Re(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, gu(t, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        _e(e, t), Re(t);
    }
  }
  function Re(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, r = t.return; r !== null; ) {
          if (wh(r)) {
            a = r;
            break;
          }
          r = r.return;
        }
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode, c = es(t);
            pu(t, c, o);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (pr(d, ""), a.flags &= -33);
            var g = es(t);
            pu(t, g, d);
            break;
          case 3:
          case 4:
            var x = a.stateNode.containerInfo, B = es(t);
            ns(
              t,
              B,
              x
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (L) {
        Ht(t, t.return, L);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Vh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Vh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function kn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Gh(t, e.alternate, e), e = e.sibling;
  }
  function qa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, e, e.return), qa(e);
          break;
        case 1:
          mn(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Hh(
            e,
            e.return,
            a
          ), qa(e);
          break;
        case 27:
          Wl(e.stateNode);
        case 26:
        case 5:
          mn(e, e.return), qa(e);
          break;
        case 22:
          e.memoizedState === null && qa(e);
          break;
        case 30:
          qa(e);
          break;
        default:
          qa(e);
      }
      t = t.sibling;
    }
  }
  function $n(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var r = e.alternate, o = t, c = e, d = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            o,
            c,
            a
          ), ql(4, c);
          break;
        case 1:
          if ($n(
            o,
            c,
            a
          ), r = c, o = r.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (B) {
              Ht(r, r.return, B);
            }
          if (r = c, o = r.updateQueue, o !== null) {
            var g = r.stateNode;
            try {
              var x = o.shared.hiddenCallbacks;
              if (x !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < x.length; o++)
                  xd(x[o], g);
            } catch (B) {
              Ht(r, r.return, B);
            }
          }
          a && d & 64 && Nh(c), Yl(c, c.return);
          break;
        case 27:
          Lh(c);
        case 26:
        case 5:
          $n(
            o,
            c,
            a
          ), a && r === null && d & 4 && zh(c), Yl(c, c.return);
          break;
        case 12:
          $n(
            o,
            c,
            a
          );
          break;
        case 31:
          $n(
            o,
            c,
            a
          ), a && d & 4 && $h(o, c);
          break;
        case 13:
          $n(
            o,
            c,
            a
          ), a && d & 4 && qh(o, c);
          break;
        case 22:
          c.memoizedState === null && $n(
            o,
            c,
            a
          ), Yl(c, c.return);
          break;
        case 30:
          break;
        default:
          $n(
            o,
            c,
            a
          );
      }
      e = e.sibling;
    }
  }
  function rs(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Rl(a));
  }
  function ls(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Rl(t));
  }
  function cn(t, e, a, r) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Xh(
          t,
          e,
          a,
          r
        ), e = e.sibling;
  }
  function Xh(t, e, a, r) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        cn(
          t,
          e,
          a,
          r
        ), o & 2048 && ql(9, e);
        break;
      case 1:
        cn(
          t,
          e,
          a,
          r
        );
        break;
      case 3:
        cn(
          t,
          e,
          a,
          r
        ), o & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Rl(t)));
        break;
      case 12:
        if (o & 2048) {
          cn(
            t,
            e,
            a,
            r
          ), t = e.stateNode;
          try {
            var c = e.memoizedProps, d = c.id, g = c.onPostCommit;
            typeof g == "function" && g(
              d,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (x) {
            Ht(e, e.return, x);
          }
        } else
          cn(
            t,
            e,
            a,
            r
          );
        break;
      case 31:
        cn(
          t,
          e,
          a,
          r
        );
        break;
      case 13:
        cn(
          t,
          e,
          a,
          r
        );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, d = e.alternate, e.memoizedState !== null ? c._visibility & 2 ? cn(
          t,
          e,
          a,
          r
        ) : Vl(t, e) : c._visibility & 2 ? cn(
          t,
          e,
          a,
          r
        ) : (c._visibility |= 2, wr(
          t,
          e,
          a,
          r,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && rs(d, e);
        break;
      case 24:
        cn(
          t,
          e,
          a,
          r
        ), o & 2048 && ls(e.alternate, e);
        break;
      default:
        cn(
          t,
          e,
          a,
          r
        );
    }
  }
  function wr(t, e, a, r, o) {
    for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t, d = e, g = a, x = r, B = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          wr(
            c,
            d,
            g,
            x,
            o
          ), ql(8, d);
          break;
        case 23:
          break;
        case 22:
          var L = d.stateNode;
          d.memoizedState !== null ? L._visibility & 2 ? wr(
            c,
            d,
            g,
            x,
            o
          ) : Vl(
            c,
            d
          ) : (L._visibility |= 2, wr(
            c,
            d,
            g,
            x,
            o
          )), o && B & 2048 && rs(
            d.alternate,
            d
          );
          break;
        case 24:
          wr(
            c,
            d,
            g,
            x,
            o
          ), o && B & 2048 && ls(d.alternate, d);
          break;
        default:
          wr(
            c,
            d,
            g,
            x,
            o
          );
      }
      e = e.sibling;
    }
  }
  function Vl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, r = e, o = r.flags;
        switch (r.tag) {
          case 22:
            Vl(a, r), o & 2048 && rs(
              r.alternate,
              r
            );
            break;
          case 24:
            Vl(a, r), o & 2048 && ls(r.alternate, r);
            break;
          default:
            Vl(a, r);
        }
        e = e.sibling;
      }
  }
  var Xl = 8192;
  function Lr(t, e, a) {
    if (t.subtreeFlags & Xl)
      for (t = t.child; t !== null; )
        Fh(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function Fh(t, e, a) {
    switch (t.tag) {
      case 26:
        Lr(
          t,
          e,
          a
        ), t.flags & Xl && t.memoizedState !== null && Lb(
          a,
          on,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Lr(
          t,
          e,
          a
        );
        break;
      case 3:
      case 4:
        var r = on;
        on = Bu(t.stateNode.containerInfo), Lr(
          t,
          e,
          a
        ), on = r;
        break;
      case 22:
        t.memoizedState === null && (r = t.alternate, r !== null && r.memoizedState !== null ? (r = Xl, Xl = 16777216, Lr(
          t,
          e,
          a
        ), Xl = r) : Lr(
          t,
          e,
          a
        ));
        break;
      default:
        Lr(
          t,
          e,
          a
        );
    }
  }
  function Qh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Fl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var r = e[a];
          ce = r, Kh(
            r,
            t
          );
        }
      Qh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zh(t), t = t.sibling;
  }
  function Zh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fl(t), t.flags & 2048 && ia(9, t, t.return);
        break;
      case 3:
        Fl(t);
        break;
      case 12:
        Fl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, yu(t)) : Fl(t);
        break;
      default:
        Fl(t);
    }
  }
  function yu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var r = e[a];
          ce = r, Kh(
            r,
            t
          );
        }
      Qh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, e, e.return), yu(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, yu(e));
          break;
        default:
          yu(e);
      }
      t = t.sibling;
    }
  }
  function Kh(t, e) {
    for (; ce !== null; ) {
      var a = ce;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Rl(a.memoizedState.cache);
      }
      if (r = a.child, r !== null) r.return = a, ce = r;
      else
        t: for (a = t; ce !== null; ) {
          r = ce;
          var o = r.sibling, c = r.return;
          if (jh(r), r === a) {
            ce = null;
            break t;
          }
          if (o !== null) {
            o.return = c, ce = o;
            break t;
          }
          ce = c;
        }
    }
  }
  var Jv = {
    getCacheForType: function(t) {
      var e = he(ee), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return he(ee).controller.signal;
    }
  }, Wv = typeof WeakMap == "function" ? WeakMap : Map, _t = 0, kt = null, yt = null, bt = 0, Nt = 0, je = null, ua = !1, Ur = !1, is = !1, qn = 0, Kt = 0, oa = 0, Ya = 0, us = 0, ke = 0, Gr = 0, Ql = null, Be = null, os = !1, vu = 0, Ih = 0, bu = 1 / 0, Su = null, ca = null, ie = 0, sa = null, jr = null, Yn = 0, cs = 0, ss = null, Jh = null, Zl = 0, fs = null;
  function $e() {
    return (_t & 2) !== 0 && bt !== 0 ? bt & -bt : N.T !== null ? ys() : h0();
  }
  function Wh() {
    if (ke === 0)
      if ((bt & 536870912) === 0 || Et) {
        var t = _i;
        _i <<= 1, (_i & 3932160) === 0 && (_i = 262144), ke = t;
      } else ke = 536870912;
    return t = Ue.current, t !== null && (t.flags |= 32), ke;
  }
  function De(t, e, a) {
    (t === kt && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null) && (kr(t, 0), fa(
      t,
      bt,
      ke,
      !1
    )), pl(t, a), ((_t & 2) === 0 || t !== kt) && (t === kt && ((_t & 2) === 0 && (Ya |= a), Kt === 4 && fa(
      t,
      bt,
      ke,
      !1
    )), pn(t));
  }
  function Ph(t, e, a) {
    if ((_t & 6) !== 0) throw Error(u(327));
    var r = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ml(t, e), o = r ? eb(t, e) : hs(t, e, !0), c = r;
    do {
      if (o === 0) {
        Ur && !r && fa(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, c && !Pv(a)) {
          o = hs(t, e, !1), c = !1;
          continue;
        }
        if (o === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var d = 0;
          else
            d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            e = d;
            t: {
              var g = t;
              o = Ql;
              var x = g.current.memoizedState.isDehydrated;
              if (x && (kr(g, d).flags |= 256), d = hs(
                g,
                d,
                !1
              ), d !== 2) {
                if (is && !x) {
                  g.errorRecoveryDisabledLanes |= c, Ya |= c, o = 4;
                  break t;
                }
                c = Be, Be = o, c !== null && (Be === null ? Be = c : Be.push.apply(
                  Be,
                  c
                ));
              }
              o = d;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          kr(t, 0), fa(t, e, 0, !0);
          break;
        }
        t: {
          switch (r = t, c = o, c) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              fa(
                r,
                e,
                ke,
                !ua
              );
              break t;
            case 2:
              Be = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && (o = vu + 300 - ye(), 10 < o)) {
            if (fa(
              r,
              e,
              ke,
              !ua
            ), Bi(r, 0, !0) !== 0) break t;
            Yn = e, r.timeoutHandle = Bm(
              tm.bind(
                null,
                r,
                a,
                Be,
                Su,
                os,
                e,
                ke,
                Ya,
                Gr,
                ua,
                c,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break t;
          }
          tm(
            r,
            a,
            Be,
            Su,
            os,
            e,
            ke,
            Ya,
            Gr,
            ua,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    pn(t);
  }
  function tm(t, e, a, r, o, c, d, g, x, B, L, $, D, H) {
    if (t.timeoutHandle = -1, $ = e.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: _n
      }, Fh(
        e,
        c,
        $
      );
      var nt = (c & 62914560) === c ? vu - ye() : (c & 4194048) === c ? Ih - ye() : 0;
      if (nt = Ub(
        $,
        nt
      ), nt !== null) {
        Yn = c, t.cancelPendingCommit = nt(
          om.bind(
            null,
            t,
            e,
            c,
            a,
            r,
            o,
            d,
            g,
            x,
            L,
            $,
            null,
            D,
            H
          )
        ), fa(t, c, d, !B);
        return;
      }
    }
    om(
      t,
      e,
      c,
      a,
      r,
      o,
      d,
      g,
      x
    );
  }
  function Pv(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var r = 0; r < a.length; r++) {
          var o = a[r], c = o.getSnapshot;
          o = o.value;
          try {
            if (!we(c(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
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
  function fa(t, e, a, r) {
    e &= ~us, e &= ~Ya, t.suspendedLanes |= e, t.pingedLanes &= ~e, r && (t.warmLanes |= e), r = t.expirationTimes;
    for (var o = e; 0 < o; ) {
      var c = 31 - ze(o), d = 1 << c;
      r[c] = -1, o &= ~d;
    }
    a !== 0 && s0(t, a, e);
  }
  function xu() {
    return (_t & 6) === 0 ? (Kl(0), !1) : !0;
  }
  function ds() {
    if (yt !== null) {
      if (Nt === 0)
        var t = yt.return;
      else
        t = yt, Nn = za = null, _c(t), Br = null, Dl = 0, t = yt;
      for (; t !== null; )
        Dh(t.alternate, t), t = t.return;
      yt = null;
    }
  }
  function kr(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, bb(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Yn = 0, ds(), kt = t, yt = a = Bn(t.current, null), bt = e, Nt = 0, je = null, ua = !1, Ur = ml(t, e), is = !1, Gr = ke = us = Ya = oa = Kt = 0, Be = Ql = null, os = !1, (e & 8) !== 0 && (e |= e & 32);
    var r = t.entangledLanes;
    if (r !== 0)
      for (t = t.entanglements, r &= e; 0 < r; ) {
        var o = 31 - ze(r), c = 1 << o;
        e |= t[o], r &= ~c;
      }
    return qn = e, qi(), a;
  }
  function em(t, e) {
    ht = null, N.H = jl, e === Rr || e === Ii ? (e = yd(), Nt = 3) : e === gc ? (e = yd(), Nt = 4) : Nt = e === Vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, je = e, yt === null && (Kt = 1, su(
      t,
      Ke(e, t.current)
    ));
  }
  function nm() {
    var t = Ue.current;
    return t === null ? !0 : (bt & 4194048) === bt ? Pe === null : (bt & 62914560) === bt || (bt & 536870912) !== 0 ? t === Pe : !1;
  }
  function am() {
    var t = N.H;
    return N.H = jl, t === null ? jl : t;
  }
  function rm() {
    var t = N.A;
    return N.A = Jv, t;
  }
  function Eu() {
    Kt = 4, ua || (bt & 4194048) !== bt && Ue.current !== null || (Ur = !0), (oa & 134217727) === 0 && (Ya & 134217727) === 0 || kt === null || fa(
      kt,
      bt,
      ke,
      !1
    );
  }
  function hs(t, e, a) {
    var r = _t;
    _t |= 2;
    var o = am(), c = rm();
    (kt !== t || bt !== e) && (Su = null, kr(t, e)), e = !1;
    var d = Kt;
    t: do
      try {
        if (Nt !== 0 && yt !== null) {
          var g = yt, x = je;
          switch (Nt) {
            case 8:
              ds(), d = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ue.current === null && (e = !0);
              var B = Nt;
              if (Nt = 0, je = null, $r(t, g, x, B), a && Ur) {
                d = 0;
                break t;
              }
              break;
            default:
              B = Nt, Nt = 0, je = null, $r(t, g, x, B);
          }
        }
        tb(), d = Kt;
        break;
      } catch (L) {
        em(t, L);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Nn = za = null, _t = r, N.H = o, N.A = c, yt === null && (kt = null, bt = 0, qi()), d;
  }
  function tb() {
    for (; yt !== null; ) lm(yt);
  }
  function eb(t, e) {
    var a = _t;
    _t |= 2;
    var r = am(), o = rm();
    kt !== t || bt !== e ? (Su = null, bu = ye() + 500, kr(t, e)) : Ur = ml(
      t,
      e
    );
    t: do
      try {
        if (Nt !== 0 && yt !== null) {
          e = yt;
          var c = je;
          e: switch (Nt) {
            case 1:
              Nt = 0, je = null, $r(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (pd(c)) {
                Nt = 0, je = null, im(e);
                break;
              }
              e = function() {
                Nt !== 2 && Nt !== 9 || kt !== t || (Nt = 7), pn(t);
              }, c.then(e, e);
              break t;
            case 3:
              Nt = 7;
              break t;
            case 4:
              Nt = 5;
              break t;
            case 7:
              pd(c) ? (Nt = 0, je = null, im(e)) : (Nt = 0, je = null, $r(t, e, c, 7));
              break;
            case 5:
              var d = null;
              switch (yt.tag) {
                case 26:
                  d = yt.memoizedState;
                case 5:
                case 27:
                  var g = yt;
                  if (d ? Xm(d) : g.stateNode.complete) {
                    Nt = 0, je = null;
                    var x = g.sibling;
                    if (x !== null) yt = x;
                    else {
                      var B = g.return;
                      B !== null ? (yt = B, Tu(B)) : yt = null;
                    }
                    break e;
                  }
              }
              Nt = 0, je = null, $r(t, e, c, 5);
              break;
            case 6:
              Nt = 0, je = null, $r(t, e, c, 6);
              break;
            case 8:
              ds(), Kt = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        nb();
        break;
      } catch (L) {
        em(t, L);
      }
    while (!0);
    return Nn = za = null, N.H = r, N.A = o, _t = a, yt !== null ? 0 : (kt = null, bt = 0, qi(), Kt);
  }
  function nb() {
    for (; yt !== null && !Ca(); )
      lm(yt);
  }
  function lm(t) {
    var e = Rh(t.alternate, t, qn);
    t.memoizedProps = t.pendingProps, e === null ? Tu(t) : yt = e;
  }
  function im(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Th(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          bt
        );
        break;
      case 11:
        e = Th(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          bt
        );
        break;
      case 5:
        _c(e);
      default:
        Dh(a, e), e = yt = rd(e, qn), e = Rh(a, e, qn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Tu(t) : yt = e;
  }
  function $r(t, e, a, r) {
    Nn = za = null, _c(e), Br = null, Dl = 0;
    var o = e.return;
    try {
      if (Vv(
        t,
        o,
        e,
        a,
        bt
      )) {
        Kt = 1, su(
          t,
          Ke(a, t.current)
        ), yt = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw yt = o, c;
      Kt = 1, su(
        t,
        Ke(a, t.current)
      ), yt = null;
      return;
    }
    e.flags & 32768 ? (Et || r === 1 ? t = !0 : Ur || (bt & 536870912) !== 0 ? t = !1 : (ua = t = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Ue.current, r !== null && r.tag === 13 && (r.flags |= 16384))), um(e, t)) : Tu(e);
  }
  function Tu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        um(
          e,
          ua
        );
        return;
      }
      t = e.return;
      var a = Qv(
        e.alternate,
        e,
        qn
      );
      if (a !== null) {
        yt = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        yt = e;
        return;
      }
      yt = e = t;
    } while (e !== null);
    Kt === 0 && (Kt = 5);
  }
  function um(t, e) {
    do {
      var a = Zv(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, yt = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        yt = t;
        return;
      }
      yt = t = a;
    } while (t !== null);
    Kt = 6, yt = null;
  }
  function om(t, e, a, r, o, c, d, g, x) {
    t.cancelPendingCommit = null;
    do
      Au();
    while (ie !== 0);
    if ((_t & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (c = e.lanes | e.childLanes, c |= ec, wy(
        t,
        a,
        c,
        d,
        g,
        x
      ), t === kt && (yt = kt = null, bt = 0), jr = e, sa = t, Yn = a, cs = c, ss = o, Jh = r, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ib(se, function() {
        return hm(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), r = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || r) {
        r = N.T, N.T = null, o = Z.p, Z.p = 2, d = _t, _t |= 4;
        try {
          Kv(t, e, a);
        } finally {
          _t = d, Z.p = o, N.T = r;
        }
      }
      ie = 1, cm(), sm(), fm();
    }
  }
  function cm() {
    if (ie === 1) {
      ie = 0;
      var t = sa, e = jr, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = N.T, N.T = null;
        var r = Z.p;
        Z.p = 2;
        var o = _t;
        _t |= 4;
        try {
          Yh(e, t);
          var c = Cs, d = K0(t.containerInfo), g = c.focusedElem, x = c.selectionRange;
          if (d !== g && g && g.ownerDocument && Z0(
            g.ownerDocument.documentElement,
            g
          )) {
            if (x !== null && Io(g)) {
              var B = x.start, L = x.end;
              if (L === void 0 && (L = B), "selectionStart" in g)
                g.selectionStart = B, g.selectionEnd = Math.min(
                  L,
                  g.value.length
                );
              else {
                var $ = g.ownerDocument || document, D = $ && $.defaultView || window;
                if (D.getSelection) {
                  var H = D.getSelection(), nt = g.textContent.length, st = Math.min(x.start, nt), Gt = x.end === void 0 ? st : Math.min(x.end, nt);
                  !H.extend && st > Gt && (d = Gt, Gt = st, st = d);
                  var O = Q0(
                    g,
                    st
                  ), T = Q0(
                    g,
                    Gt
                  );
                  if (O && T && (H.rangeCount !== 1 || H.anchorNode !== O.node || H.anchorOffset !== O.offset || H.focusNode !== T.node || H.focusOffset !== T.offset)) {
                    var R = $.createRange();
                    R.setStart(O.node, O.offset), H.removeAllRanges(), st > Gt ? (H.addRange(R), H.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), H.addRange(R));
                  }
                }
              }
            }
            for ($ = [], H = g; H = H.parentNode; )
              H.nodeType === 1 && $.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < $.length; g++) {
              var j = $[g];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          Lu = !!As, Cs = As = null;
        } finally {
          _t = o, Z.p = r, N.T = a;
        }
      }
      t.current = e, ie = 2;
    }
  }
  function sm() {
    if (ie === 2) {
      ie = 0;
      var t = sa, e = jr, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = N.T, N.T = null;
        var r = Z.p;
        Z.p = 2;
        var o = _t;
        _t |= 4;
        try {
          Gh(t, e.alternate, e);
        } finally {
          _t = o, Z.p = r, N.T = a;
        }
      }
      ie = 3;
    }
  }
  function fm() {
    if (ie === 4 || ie === 3) {
      ie = 0, Oo();
      var t = sa, e = jr, a = Yn, r = Jh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ie = 5 : (ie = 0, jr = sa = null, dm(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (o === 0 && (ca = null), Do(a), e = e.stateNode, He && typeof He.onCommitFiberRoot == "function")
        try {
          He.onCommitFiberRoot(
            hl,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        e = N.T, o = Z.p, Z.p = 2, N.T = null;
        try {
          for (var c = t.onRecoverableError, d = 0; d < r.length; d++) {
            var g = r[d];
            c(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          N.T = e, Z.p = o;
        }
      }
      (Yn & 3) !== 0 && Au(), pn(t), o = t.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? t === fs ? Zl++ : (Zl = 0, fs = t) : Zl = 0, Kl(0);
    }
  }
  function dm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Rl(e)));
  }
  function Au() {
    return cm(), sm(), fm(), hm();
  }
  function hm() {
    if (ie !== 5) return !1;
    var t = sa, e = cs;
    cs = 0;
    var a = Do(Yn), r = N.T, o = Z.p;
    try {
      Z.p = 32 > a ? 32 : a, N.T = null, a = ss, ss = null;
      var c = sa, d = Yn;
      if (ie = 0, jr = sa = null, Yn = 0, (_t & 6) !== 0) throw Error(u(331));
      var g = _t;
      if (_t |= 4, Zh(c.current), Xh(
        c,
        c.current,
        d,
        a
      ), _t = g, Kl(0, !1), He && typeof He.onPostCommitFiberRoot == "function")
        try {
          He.onPostCommitFiberRoot(hl, c);
        } catch {
        }
      return !0;
    } finally {
      Z.p = o, N.T = r, dm(t, e);
    }
  }
  function mm(t, e, a) {
    e = Ke(a, e), e = Yc(t.stateNode, e, 2), t = aa(t, e, 2), t !== null && (pl(t, 2), pn(t));
  }
  function Ht(t, e, a) {
    if (t.tag === 3)
      mm(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          mm(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var r = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ca === null || !ca.has(r))) {
            t = Ke(a, t), a = ph(2), r = aa(e, a, 2), r !== null && (gh(
              a,
              r,
              e,
              t
            ), pl(r, 2), pn(r));
            break;
          }
        }
        e = e.return;
      }
  }
  function ms(t, e, a) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new Wv();
      var o = /* @__PURE__ */ new Set();
      r.set(e, o);
    } else
      o = r.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(e, o));
    o.has(a) || (is = !0, o.add(a), t = ab.bind(null, t, e, a), e.then(t, t));
  }
  function ab(t, e, a) {
    var r = t.pingCache;
    r !== null && r.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, kt === t && (bt & a) === a && (Kt === 4 || Kt === 3 && (bt & 62914560) === bt && 300 > ye() - vu ? (_t & 2) === 0 && kr(t, 0) : us |= a, Gr === bt && (Gr = 0)), pn(t);
  }
  function pm(t, e) {
    e === 0 && (e = c0()), t = Da(t, e), t !== null && (pl(t, e), pn(t));
  }
  function rb(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), pm(t, a);
  }
  function lb(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var r = t.stateNode, o = t.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      case 22:
        r = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(e), pm(t, a);
  }
  function ib(t, e) {
    return Qn(t, e);
  }
  var Cu = null, qr = null, ps = !1, Mu = !1, gs = !1, da = 0;
  function pn(t) {
    t !== qr && t.next === null && (qr === null ? Cu = qr = t : qr = qr.next = t), Mu = !0, ps || (ps = !0, ob());
  }
  function Kl(t, e) {
    if (!gs && Mu) {
      gs = !0;
      do
        for (var a = !1, r = Cu; r !== null; ) {
          if (t !== 0) {
            var o = r.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var d = r.suspendedLanes, g = r.pingedLanes;
              c = (1 << 31 - ze(42 | t) + 1) - 1, c &= o & ~(d & ~g), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, bm(r, c));
          } else
            c = bt, c = Bi(
              r,
              r === kt ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || ml(r, c) || (a = !0, bm(r, c));
          r = r.next;
        }
      while (a);
      gs = !1;
    }
  }
  function ub() {
    gm();
  }
  function gm() {
    Mu = ps = !1;
    var t = 0;
    da !== 0 && vb() && (t = da);
    for (var e = ye(), a = null, r = Cu; r !== null; ) {
      var o = r.next, c = ym(r, e);
      c === 0 ? (r.next = null, a === null ? Cu = o : a.next = o, o === null && (qr = a)) : (a = r, (t !== 0 || (c & 3) !== 0) && (Mu = !0)), r = o;
    }
    ie !== 0 && ie !== 5 || Kl(t), da !== 0 && (da = 0);
  }
  function ym(t, e) {
    for (var a = t.suspendedLanes, r = t.pingedLanes, o = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var d = 31 - ze(c), g = 1 << d, x = o[d];
      x === -1 ? ((g & a) === 0 || (g & r) !== 0) && (o[d] = zy(g, e)) : x <= e && (t.expiredLanes |= g), c &= ~g;
    }
    if (e = kt, a = bt, a = Bi(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r = t.callbackNode, a === 0 || t === e && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null)
      return r !== null && r !== null && Aa(r), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || ml(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (r !== null && Aa(r), Do(a)) {
        case 2:
        case 8:
          a = Xt;
          break;
        case 32:
          a = se;
          break;
        case 268435456:
          a = or;
          break;
        default:
          a = se;
      }
      return r = vm.bind(null, t), a = Qn(a, r), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return r !== null && r !== null && Aa(r), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function vm(t, e) {
    if (ie !== 0 && ie !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Au() && t.callbackNode !== a)
      return null;
    var r = bt;
    return r = Bi(
      t,
      t === kt ? r : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r === 0 ? null : (Ph(t, r, e), ym(t, ye()), t.callbackNode != null && t.callbackNode === a ? vm.bind(null, t) : null);
  }
  function bm(t, e) {
    if (Au()) return null;
    Ph(t, e, !0);
  }
  function ob() {
    Sb(function() {
      (_t & 6) !== 0 ? Qn(
        xe,
        ub
      ) : gm();
    });
  }
  function ys() {
    if (da === 0) {
      var t = Or;
      t === 0 && (t = Oi, Oi <<= 1, (Oi & 261888) === 0 && (Oi = 256)), da = t;
    }
    return da;
  }
  function Sm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : zi("" + t);
  }
  function xm(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function cb(t, e, a, r, o) {
    if (e === "submit" && a && a.stateNode === o) {
      var c = Sm(
        (o[Ce] || null).action
      ), d = r.submitter;
      d && (e = (e = d[Ce] || null) ? Sm(e.formAction) : d.getAttribute("formAction"), e !== null && (c = e, d = null));
      var g = new Gi(
        "action",
        "action",
        null,
        r,
        o
      );
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (da !== 0) {
                  var x = d ? xm(o, d) : new FormData(o);
                  Uc(
                    a,
                    {
                      pending: !0,
                      data: x,
                      method: o.method,
                      action: c
                    },
                    null,
                    x
                  );
                }
              } else
                typeof c == "function" && (g.preventDefault(), x = d ? xm(o, d) : new FormData(o), Uc(
                  a,
                  {
                    pending: !0,
                    data: x,
                    method: o.method,
                    action: c
                  },
                  c,
                  x
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var vs = 0; vs < tc.length; vs++) {
    var bs = tc[vs], sb = bs.toLowerCase(), fb = bs[0].toUpperCase() + bs.slice(1);
    un(
      sb,
      "on" + fb
    );
  }
  un(W0, "onAnimationEnd"), un(P0, "onAnimationIteration"), un(td, "onAnimationStart"), un("dblclick", "onDoubleClick"), un("focusin", "onFocus"), un("focusout", "onBlur"), un(Ov, "onTransitionRun"), un(_v, "onTransitionStart"), un(Rv, "onTransitionCancel"), un(ed, "onTransitionEnd"), hr("onMouseEnter", ["mouseout", "mouseover"]), hr("onMouseLeave", ["mouseout", "mouseover"]), hr("onPointerEnter", ["pointerout", "pointerover"]), hr("onPointerLeave", ["pointerout", "pointerover"]), Oa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Oa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Oa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Oa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Oa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Oa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Il = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), db = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il)
  );
  function Em(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var r = t[a], o = r.event;
      r = r.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var d = r.length - 1; 0 <= d; d--) {
            var g = r[d], x = g.instance, B = g.currentTarget;
            if (g = g.listener, x !== c && o.isPropagationStopped())
              break t;
            c = g, o.currentTarget = B;
            try {
              c(o);
            } catch (L) {
              $i(L);
            }
            o.currentTarget = null, c = x;
          }
        else
          for (d = 0; d < r.length; d++) {
            if (g = r[d], x = g.instance, B = g.currentTarget, g = g.listener, x !== c && o.isPropagationStopped())
              break t;
            c = g, o.currentTarget = B;
            try {
              c(o);
            } catch (L) {
              $i(L);
            }
            o.currentTarget = null, c = x;
          }
      }
    }
  }
  function vt(t, e) {
    var a = e[No];
    a === void 0 && (a = e[No] = /* @__PURE__ */ new Set());
    var r = t + "__bubble";
    a.has(r) || (Tm(e, t, 2, !1), a.add(r));
  }
  function Ss(t, e, a) {
    var r = 0;
    e && (r |= 4), Tm(
      a,
      t,
      r,
      e
    );
  }
  var Ou = "_reactListening" + Math.random().toString(36).slice(2);
  function xs(t) {
    if (!t[Ou]) {
      t[Ou] = !0, g0.forEach(function(a) {
        a !== "selectionchange" && (db.has(a) || Ss(a, !1, t), Ss(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ou] || (e[Ou] = !0, Ss("selectionchange", !1, e));
    }
  }
  function Tm(t, e, a, r) {
    switch (Wm(e)) {
      case 2:
        var o = kb;
        break;
      case 8:
        o = $b;
        break;
      default:
        o = Ls;
    }
    a = o.bind(
      null,
      e,
      a,
      t
    ), o = void 0, !$o || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), r ? o !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: o
    }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
      passive: o
    }) : t.addEventListener(e, a, !1);
  }
  function Es(t, e, a, r, o) {
    var c = r;
    if ((e & 1) === 0 && (e & 2) === 0 && r !== null)
      t: for (; ; ) {
        if (r === null) return;
        var d = r.tag;
        if (d === 3 || d === 4) {
          var g = r.stateNode.containerInfo;
          if (g === o) break;
          if (d === 4)
            for (d = r.return; d !== null; ) {
              var x = d.tag;
              if ((x === 3 || x === 4) && d.stateNode.containerInfo === o)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (d = sr(g), d === null) return;
            if (x = d.tag, x === 5 || x === 6 || x === 26 || x === 27) {
              r = c = d;
              continue t;
            }
            g = g.parentNode;
          }
        }
        r = r.return;
      }
    _0(function() {
      var B = c, L = jo(a), $ = [];
      t: {
        var D = nd.get(t);
        if (D !== void 0) {
          var H = Gi, nt = t;
          switch (t) {
            case "keypress":
              if (Li(a) === 0) break t;
            case "keydown":
            case "keyup":
              H = lv;
              break;
            case "focusin":
              nt = "focus", H = Xo;
              break;
            case "focusout":
              nt = "blur", H = Xo;
              break;
            case "beforeblur":
            case "afterblur":
              H = Xo;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = D0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Qy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = ov;
              break;
            case W0:
            case P0:
            case td:
              H = Iy;
              break;
            case ed:
              H = sv;
              break;
            case "scroll":
            case "scrollend":
              H = Xy;
              break;
            case "wheel":
              H = dv;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = H0;
              break;
            case "toggle":
            case "beforetoggle":
              H = mv;
          }
          var st = (e & 4) !== 0, Gt = !st && (t === "scroll" || t === "scrollend"), O = st ? D !== null ? D + "Capture" : null : D;
          st = [];
          for (var T = B, R; T !== null; ) {
            var j = T;
            if (R = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || R === null || O === null || (j = vl(T, O), j != null && st.push(
              Jl(T, j, R)
            )), Gt) break;
            T = T.return;
          }
          0 < st.length && (D = new H(
            D,
            nt,
            null,
            a,
            L
          ), $.push({ event: D, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (D = t === "mouseover" || t === "pointerover", H = t === "mouseout" || t === "pointerout", D && a !== Go && (nt = a.relatedTarget || a.fromElement) && (sr(nt) || nt[cr]))
            break t;
          if ((H || D) && (D = L.window === L ? L : (D = L.ownerDocument) ? D.defaultView || D.parentWindow : window, H ? (nt = a.relatedTarget || a.toElement, H = B, nt = nt ? sr(nt) : null, nt !== null && (Gt = f(nt), st = nt.tag, nt !== Gt || st !== 5 && st !== 27 && st !== 6) && (nt = null)) : (H = null, nt = B), H !== nt)) {
            if (st = D0, j = "onMouseLeave", O = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (st = H0, j = "onPointerLeave", O = "onPointerEnter", T = "pointer"), Gt = H == null ? D : yl(H), R = nt == null ? D : yl(nt), D = new st(
              j,
              T + "leave",
              H,
              a,
              L
            ), D.target = Gt, D.relatedTarget = R, j = null, sr(L) === B && (st = new st(
              O,
              T + "enter",
              nt,
              a,
              L
            ), st.target = R, st.relatedTarget = Gt, j = st), Gt = j, H && nt)
              e: {
                for (st = hb, O = H, T = nt, R = 0, j = O; j; j = st(j))
                  R++;
                j = 0;
                for (var ot = T; ot; ot = st(ot))
                  j++;
                for (; 0 < R - j; )
                  O = st(O), R--;
                for (; 0 < j - R; )
                  T = st(T), j--;
                for (; R--; ) {
                  if (O === T || T !== null && O === T.alternate) {
                    st = O;
                    break e;
                  }
                  O = st(O), T = st(T);
                }
                st = null;
              }
            else st = null;
            H !== null && Am(
              $,
              D,
              H,
              st,
              !1
            ), nt !== null && Gt !== null && Am(
              $,
              Gt,
              nt,
              st,
              !0
            );
          }
        }
        t: {
          if (D = B ? yl(B) : window, H = D.nodeName && D.nodeName.toLowerCase(), H === "select" || H === "input" && D.type === "file")
            var Mt = $0;
          else if (j0(D))
            if (q0)
              Mt = Av;
            else {
              Mt = Ev;
              var lt = xv;
            }
          else
            H = D.nodeName, !H || H.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? B && Uo(B.elementType) && (Mt = $0) : Mt = Tv;
          if (Mt && (Mt = Mt(t, B))) {
            k0(
              $,
              Mt,
              a,
              L
            );
            break t;
          }
          lt && lt(t, D, B), t === "focusout" && B && D.type === "number" && B.memoizedProps.value != null && Lo(D, "number", D.value);
        }
        switch (lt = B ? yl(B) : window, t) {
          case "focusin":
            (j0(lt) || lt.contentEditable === "true") && (br = lt, Jo = B, Ml = null);
            break;
          case "focusout":
            Ml = Jo = br = null;
            break;
          case "mousedown":
            Wo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wo = !1, I0($, a, L);
            break;
          case "selectionchange":
            if (Mv) break;
          case "keydown":
          case "keyup":
            I0($, a, L);
        }
        var mt;
        if (Qo)
          t: {
            switch (t) {
              case "compositionstart":
                var St = "onCompositionStart";
                break t;
              case "compositionend":
                St = "onCompositionEnd";
                break t;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break t;
            }
            St = void 0;
          }
        else
          vr ? U0(t, a) && (St = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (St = "onCompositionStart");
        St && (z0 && a.locale !== "ko" && (vr || St !== "onCompositionStart" ? St === "onCompositionEnd" && vr && (mt = R0()) : (In = L, qo = "value" in In ? In.value : In.textContent, vr = !0)), lt = _u(B, St), 0 < lt.length && (St = new N0(
          St,
          t,
          null,
          a,
          L
        ), $.push({ event: St, listeners: lt }), mt ? St.data = mt : (mt = G0(a), mt !== null && (St.data = mt)))), (mt = gv ? yv(t, a) : vv(t, a)) && (St = _u(B, "onBeforeInput"), 0 < St.length && (lt = new N0(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          L
        ), $.push({
          event: lt,
          listeners: St
        }), lt.data = mt)), cb(
          $,
          t,
          B,
          a,
          L
        );
      }
      Em($, e);
    });
  }
  function Jl(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function _u(t, e) {
    for (var a = e + "Capture", r = []; t !== null; ) {
      var o = t, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = vl(t, a), o != null && r.unshift(
        Jl(t, o, c)
      ), o = vl(t, e), o != null && r.push(
        Jl(t, o, c)
      )), t.tag === 3) return r;
      t = t.return;
    }
    return [];
  }
  function hb(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Am(t, e, a, r, o) {
    for (var c = e._reactName, d = []; a !== null && a !== r; ) {
      var g = a, x = g.alternate, B = g.stateNode;
      if (g = g.tag, x !== null && x === r) break;
      g !== 5 && g !== 26 && g !== 27 || B === null || (x = B, o ? (B = vl(a, c), B != null && d.unshift(
        Jl(a, B, x)
      )) : o || (B = vl(a, c), B != null && d.push(
        Jl(a, B, x)
      ))), a = a.return;
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var mb = /\r\n?/g, pb = /\u0000|\uFFFD/g;
  function Cm(t) {
    return (typeof t == "string" ? t : "" + t).replace(mb, `
`).replace(pb, "");
  }
  function Mm(t, e) {
    return e = Cm(e), Cm(t) === e;
  }
  function Ut(t, e, a, r, o, c) {
    switch (a) {
      case "children":
        typeof r == "string" ? e === "body" || e === "textarea" && r === "" || pr(t, r) : (typeof r == "number" || typeof r == "bigint") && e !== "body" && pr(t, "" + r);
        break;
      case "className":
        Ni(t, "class", r);
        break;
      case "tabIndex":
        Ni(t, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ni(t, a, r);
        break;
      case "style":
        M0(t, r, c);
        break;
      case "data":
        if (e !== "object") {
          Ni(t, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(a);
          break;
        }
        r = zi("" + r), t.setAttribute(a, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (a === "formAction" ? (e !== "input" && Ut(t, e, "name", o.name, o, null), Ut(
            t,
            e,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Ut(
            t,
            e,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Ut(
            t,
            e,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Ut(t, e, "encType", o.encType, o, null), Ut(t, e, "method", o.method, o, null), Ut(t, e, "target", o.target, o, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(a);
          break;
        }
        r = zi("" + r), t.setAttribute(a, r);
        break;
      case "onClick":
        r != null && (t.onclick = _n);
        break;
      case "onScroll":
        r != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && vt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(u(61));
          if (a = r.__html, a != null) {
            if (o.children != null) throw Error(u(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        t.muted = r && typeof r != "function" && typeof r != "symbol";
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
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = zi("" + r), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "" + r) : t.removeAttribute(a);
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
        r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        r === !0 ? t.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, r) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(a, r) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(a) : t.setAttribute(a, r);
        break;
      case "popover":
        vt("beforetoggle", t), vt("toggle", t), Di(t, "popover", r);
        break;
      case "xlinkActuate":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        On(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        On(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        On(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        Di(t, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Yy.get(a) || a, Di(t, a, r));
    }
  }
  function Ts(t, e, a, r, o, c) {
    switch (a) {
      case "style":
        M0(t, r, c);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(u(61));
          if (a = r.__html, a != null) {
            if (o.children != null) throw Error(u(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof r == "string" ? pr(t, r) : (typeof r == "number" || typeof r == "bigint") && pr(t, "" + r);
        break;
      case "onScroll":
        r != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && vt("scrollend", t);
        break;
      case "onClick":
        r != null && (t.onclick = _n);
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
        if (!y0.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), c = t[Ce] || null, c = c != null ? c[a] : null, typeof c == "function" && t.removeEventListener(e, c, o), typeof r == "function")) {
              typeof c != "function" && c !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, r, o);
              break t;
            }
            a in t ? t[a] = r : r === !0 ? t.setAttribute(a, "") : Di(t, a, r);
          }
    }
  }
  function pe(t, e, a) {
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
        vt("error", t), vt("load", t);
        var r = !1, o = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (d != null)
              switch (c) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Ut(t, e, c, d, a, null);
              }
          }
        o && Ut(t, e, "srcSet", a.srcSet, a, null), r && Ut(t, e, "src", a.src, a, null);
        return;
      case "input":
        vt("invalid", t);
        var g = c = d = o = null, x = null, B = null;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var L = a[r];
            if (L != null)
              switch (r) {
                case "name":
                  o = L;
                  break;
                case "type":
                  d = L;
                  break;
                case "checked":
                  x = L;
                  break;
                case "defaultChecked":
                  B = L;
                  break;
                case "value":
                  c = L;
                  break;
                case "defaultValue":
                  g = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(u(137, e));
                  break;
                default:
                  Ut(t, e, r, L, a, null);
              }
          }
        E0(
          t,
          c,
          g,
          x,
          B,
          d,
          o,
          !1
        );
        return;
      case "select":
        vt("invalid", t), r = d = c = null;
        for (o in a)
          if (a.hasOwnProperty(o) && (g = a[o], g != null))
            switch (o) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                r = g;
              default:
                Ut(t, e, o, g, a, null);
            }
        e = c, a = d, t.multiple = !!r, e != null ? mr(t, !!r, e, !1) : a != null && mr(t, !!r, a, !0);
        return;
      case "textarea":
        vt("invalid", t), c = o = r = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (g = a[d], g != null))
            switch (d) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                o = g;
                break;
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(u(91));
                break;
              default:
                Ut(t, e, d, g, a, null);
            }
        A0(t, r, o, c);
        return;
      case "option":
        for (x in a)
          if (a.hasOwnProperty(x) && (r = a[x], r != null))
            switch (x) {
              case "selected":
                t.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Ut(t, e, x, r, a, null);
            }
        return;
      case "dialog":
        vt("beforetoggle", t), vt("toggle", t), vt("cancel", t), vt("close", t);
        break;
      case "iframe":
      case "object":
        vt("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Il.length; r++)
          vt(Il[r], t);
        break;
      case "image":
        vt("error", t), vt("load", t);
        break;
      case "details":
        vt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        vt("error", t), vt("load", t);
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
        for (B in a)
          if (a.hasOwnProperty(B) && (r = a[B], r != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Ut(t, e, B, r, a, null);
            }
        return;
      default:
        if (Uo(e)) {
          for (L in a)
            a.hasOwnProperty(L) && (r = a[L], r !== void 0 && Ts(
              t,
              e,
              L,
              r,
              a,
              void 0
            ));
          return;
        }
    }
    for (g in a)
      a.hasOwnProperty(g) && (r = a[g], r != null && Ut(t, e, g, r, a, null));
  }
  function gb(t, e, a, r) {
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
        var o = null, c = null, d = null, g = null, x = null, B = null, L = null;
        for (H in a) {
          var $ = a[H];
          if (a.hasOwnProperty(H) && $ != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = $;
              default:
                r.hasOwnProperty(H) || Ut(t, e, H, null, r, $);
            }
        }
        for (var D in r) {
          var H = r[D];
          if ($ = a[D], r.hasOwnProperty(D) && (H != null || $ != null))
            switch (D) {
              case "type":
                c = H;
                break;
              case "name":
                o = H;
                break;
              case "checked":
                B = H;
                break;
              case "defaultChecked":
                L = H;
                break;
              case "value":
                d = H;
                break;
              case "defaultValue":
                g = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(u(137, e));
                break;
              default:
                H !== $ && Ut(
                  t,
                  e,
                  D,
                  H,
                  r,
                  $
                );
            }
        }
        wo(
          t,
          d,
          g,
          x,
          B,
          L,
          c,
          o
        );
        return;
      case "select":
        H = d = g = D = null;
        for (c in a)
          if (x = a[c], a.hasOwnProperty(c) && x != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                H = x;
              default:
                r.hasOwnProperty(c) || Ut(
                  t,
                  e,
                  c,
                  null,
                  r,
                  x
                );
            }
        for (o in r)
          if (c = r[o], x = a[o], r.hasOwnProperty(o) && (c != null || x != null))
            switch (o) {
              case "value":
                D = c;
                break;
              case "defaultValue":
                g = c;
                break;
              case "multiple":
                d = c;
              default:
                c !== x && Ut(
                  t,
                  e,
                  o,
                  c,
                  r,
                  x
                );
            }
        e = g, a = d, r = H, D != null ? mr(t, !!a, D, !1) : !!r != !!a && (e != null ? mr(t, !!a, e, !0) : mr(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        H = D = null;
        for (g in a)
          if (o = a[g], a.hasOwnProperty(g) && o != null && !r.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(t, e, g, null, r, o);
            }
        for (d in r)
          if (o = r[d], c = a[d], r.hasOwnProperty(d) && (o != null || c != null))
            switch (d) {
              case "value":
                D = o;
                break;
              case "defaultValue":
                H = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== c && Ut(t, e, d, o, r, c);
            }
        T0(t, D, H);
        return;
      case "option":
        for (var nt in a)
          if (D = a[nt], a.hasOwnProperty(nt) && D != null && !r.hasOwnProperty(nt))
            switch (nt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ut(
                  t,
                  e,
                  nt,
                  null,
                  r,
                  D
                );
            }
        for (x in r)
          if (D = r[x], H = a[x], r.hasOwnProperty(x) && D !== H && (D != null || H != null))
            switch (x) {
              case "selected":
                t.selected = D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                Ut(
                  t,
                  e,
                  x,
                  D,
                  r,
                  H
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
        for (var st in a)
          D = a[st], a.hasOwnProperty(st) && D != null && !r.hasOwnProperty(st) && Ut(t, e, st, null, r, D);
        for (B in r)
          if (D = r[B], H = a[B], r.hasOwnProperty(B) && D !== H && (D != null || H != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(u(137, e));
                break;
              default:
                Ut(
                  t,
                  e,
                  B,
                  D,
                  r,
                  H
                );
            }
        return;
      default:
        if (Uo(e)) {
          for (var Gt in a)
            D = a[Gt], a.hasOwnProperty(Gt) && D !== void 0 && !r.hasOwnProperty(Gt) && Ts(
              t,
              e,
              Gt,
              void 0,
              r,
              D
            );
          for (L in r)
            D = r[L], H = a[L], !r.hasOwnProperty(L) || D === H || D === void 0 && H === void 0 || Ts(
              t,
              e,
              L,
              D,
              r,
              H
            );
          return;
        }
    }
    for (var O in a)
      D = a[O], a.hasOwnProperty(O) && D != null && !r.hasOwnProperty(O) && Ut(t, e, O, null, r, D);
    for ($ in r)
      D = r[$], H = a[$], !r.hasOwnProperty($) || D === H || D == null && H == null || Ut(t, e, $, D, r, H);
  }
  function Om(t) {
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
  function yb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
        var o = a[r], c = o.transferSize, d = o.initiatorType, g = o.duration;
        if (c && g && Om(d)) {
          for (d = 0, g = o.responseEnd, r += 1; r < a.length; r++) {
            var x = a[r], B = x.startTime;
            if (B > g) break;
            var L = x.transferSize, $ = x.initiatorType;
            L && Om($) && (x = x.responseEnd, d += L * (x < g ? 1 : (g - B) / (x - B)));
          }
          if (--r, e += 8 * (c + d) / (o.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var As = null, Cs = null;
  function Ru(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function _m(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Rm(t, e) {
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
  function Ms(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Os = null;
  function vb() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Os ? !1 : (Os = t, !0) : (Os = null, !1);
  }
  var Bm = typeof setTimeout == "function" ? setTimeout : void 0, bb = typeof clearTimeout == "function" ? clearTimeout : void 0, Dm = typeof Promise == "function" ? Promise : void 0, Sb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dm < "u" ? function(t) {
    return Dm.resolve(null).then(t).catch(xb);
  } : Bm;
  function xb(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ha(t) {
    return t === "head";
  }
  function Nm(t, e) {
    var a = e, r = 0;
    do {
      var o = a.nextSibling;
      if (t.removeChild(a), o && o.nodeType === 8)
        if (a = o.data, a === "/$" || a === "/&") {
          if (r === 0) {
            t.removeChild(o), Fr(e);
            return;
          }
          r--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          r++;
        else if (a === "html")
          Wl(t.ownerDocument.documentElement);
        else if (a === "head") {
          a = t.ownerDocument.head, Wl(a);
          for (var c = a.firstChild; c; ) {
            var d = c.nextSibling, g = c.nodeName;
            c[gl] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = d;
          }
        } else
          a === "body" && Wl(t.ownerDocument.body);
      a = o;
    } while (a);
    Fr(e);
  }
  function Hm(t, e) {
    var a = t;
    t = 0;
    do {
      var r = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), r && r.nodeType === 8)
        if (a = r.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = r;
    } while (a);
  }
  function _s(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _s(a), Ho(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function Eb(t, e, a, r) {
    for (; t.nodeType === 1; ) {
      var o = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (r) {
        if (!t[gl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = tn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Tb(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = tn(t.nextSibling), t === null)) return null;
    return t;
  }
  function zm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = tn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Rs(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Bs(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Ab(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading")
      e();
    else {
      var r = function() {
        e(), a.removeEventListener("DOMContentLoaded", r);
      };
      a.addEventListener("DOMContentLoaded", r), t._reactRetry = r;
    }
  }
  function tn(t) {
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
  var Ds = null;
  function wm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return tn(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Lm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Um(t, e, a) {
    switch (e = Ru(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function Wl(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ho(t);
  }
  var en = /* @__PURE__ */ new Map(), Gm = /* @__PURE__ */ new Set();
  function Bu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Vn = Z.d;
  Z.d = {
    f: Cb,
    r: Mb,
    D: Ob,
    C: _b,
    L: Rb,
    m: Bb,
    X: Nb,
    S: Db,
    M: Hb
  };
  function Cb() {
    var t = Vn.f(), e = xu();
    return t || e;
  }
  function Mb(t) {
    var e = fr(t);
    e !== null && e.tag === 5 && e.type === "form" ? eh(e) : Vn.r(t);
  }
  var Yr = typeof document > "u" ? null : document;
  function jm(t, e, a) {
    var r = Yr;
    if (r && typeof e == "string" && e) {
      var o = Qe(e);
      o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), Gm.has(o) || (Gm.add(o), t = { rel: t, crossOrigin: a, href: e }, r.querySelector(o) === null && (e = r.createElement("link"), pe(e, "link", t), oe(e), r.head.appendChild(e)));
    }
  }
  function Ob(t) {
    Vn.D(t), jm("dns-prefetch", t, null);
  }
  function _b(t, e) {
    Vn.C(t, e), jm("preconnect", t, e);
  }
  function Rb(t, e, a) {
    Vn.L(t, e, a);
    var r = Yr;
    if (r && t && e) {
      var o = 'link[rel="preload"][as="' + Qe(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Qe(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Qe(
        a.imageSizes
      ) + '"]')) : o += '[href="' + Qe(t) + '"]';
      var c = o;
      switch (e) {
        case "style":
          c = Vr(t);
          break;
        case "script":
          c = Xr(t);
      }
      en.has(c) || (t = S(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), en.set(c, t), r.querySelector(o) !== null || e === "style" && r.querySelector(Pl(c)) || e === "script" && r.querySelector(ti(c)) || (e = r.createElement("link"), pe(e, "link", t), oe(e), r.head.appendChild(e)));
    }
  }
  function Bb(t, e) {
    Vn.m(t, e);
    var a = Yr;
    if (a && t) {
      var r = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + Qe(r) + '"][href="' + Qe(t) + '"]', c = o;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Xr(t);
      }
      if (!en.has(c) && (t = S({ rel: "modulepreload", href: t }, e), en.set(c, t), a.querySelector(o) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ti(c)))
              return;
        }
        r = a.createElement("link"), pe(r, "link", t), oe(r), a.head.appendChild(r);
      }
    }
  }
  function Db(t, e, a) {
    Vn.S(t, e, a);
    var r = Yr;
    if (r && t) {
      var o = dr(r).hoistableStyles, c = Vr(t);
      e = e || "default";
      var d = o.get(c);
      if (!d) {
        var g = { loading: 0, preload: null };
        if (d = r.querySelector(
          Pl(c)
        ))
          g.loading = 5;
        else {
          t = S(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = en.get(c)) && Ns(t, a);
          var x = d = r.createElement("link");
          oe(x), pe(x, "link", t), x._p = new Promise(function(B, L) {
            x.onload = B, x.onerror = L;
          }), x.addEventListener("load", function() {
            g.loading |= 1;
          }), x.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Du(d, e, r);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: g
        }, o.set(c, d);
      }
    }
  }
  function Nb(t, e) {
    Vn.X(t, e);
    var a = Yr;
    if (a && t) {
      var r = dr(a).hoistableScripts, o = Xr(t), c = r.get(o);
      c || (c = a.querySelector(ti(o)), c || (t = S({ src: t, async: !0 }, e), (e = en.get(o)) && Hs(t, e), c = a.createElement("script"), oe(c), pe(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(o, c));
    }
  }
  function Hb(t, e) {
    Vn.M(t, e);
    var a = Yr;
    if (a && t) {
      var r = dr(a).hoistableScripts, o = Xr(t), c = r.get(o);
      c || (c = a.querySelector(ti(o)), c || (t = S({ src: t, async: !0, type: "module" }, e), (e = en.get(o)) && Hs(t, e), c = a.createElement("script"), oe(c), pe(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(o, c));
    }
  }
  function km(t, e, a, r) {
    var o = (o = pt.current) ? Bu(o) : null;
    if (!o) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = Vr(a.href), a = dr(
          o
        ).hoistableStyles, r = a.get(e), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Vr(a.href);
          var c = dr(
            o
          ).hoistableStyles, d = c.get(t);
          if (d || (o = o.ownerDocument || o, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, d), (c = o.querySelector(
            Pl(t)
          )) && !c._p && (d.instance = c, d.state.loading = 5), en.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, en.set(t, a), c || zb(
            o,
            t,
            a,
            d.state
          ))), e && r === null)
            throw Error(u(528, ""));
          return d;
        }
        if (e && r !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Xr(a), a = dr(
          o
        ).hoistableScripts, r = a.get(e), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, t));
    }
  }
  function Vr(t) {
    return 'href="' + Qe(t) + '"';
  }
  function Pl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function $m(t) {
    return S({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function zb(t, e, a, r) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? r.loading = 1 : (e = t.createElement("link"), r.preload = e, e.addEventListener("load", function() {
      return r.loading |= 1;
    }), e.addEventListener("error", function() {
      return r.loading |= 2;
    }), pe(e, "link", a), oe(e), t.head.appendChild(e));
  }
  function Xr(t) {
    return '[src="' + Qe(t) + '"]';
  }
  function ti(t) {
    return "script[async]" + t;
  }
  function qm(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var r = t.querySelector(
            'style[data-href~="' + Qe(a.href) + '"]'
          );
          if (r)
            return e.instance = r, oe(r), r;
          var o = S({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return r = (t.ownerDocument || t).createElement(
            "style"
          ), oe(r), pe(r, "style", o), Du(r, a.precedence, t), e.instance = r;
        case "stylesheet":
          o = Vr(a.href);
          var c = t.querySelector(
            Pl(o)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, oe(c), c;
          r = $m(a), (o = en.get(o)) && Ns(r, o), c = (t.ownerDocument || t).createElement("link"), oe(c);
          var d = c;
          return d._p = new Promise(function(g, x) {
            d.onload = g, d.onerror = x;
          }), pe(c, "link", r), e.state.loading |= 4, Du(c, a.precedence, t), e.instance = c;
        case "script":
          return c = Xr(a.src), (o = t.querySelector(
            ti(c)
          )) ? (e.instance = o, oe(o), o) : (r = a, (o = en.get(c)) && (r = S({}, a), Hs(r, o)), t = t.ownerDocument || t, o = t.createElement("script"), oe(o), pe(o, "link", r), t.head.appendChild(o), e.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (r = e.instance, e.state.loading |= 4, Du(r, a.precedence, t));
    return e.instance;
  }
  function Du(t, e, a) {
    for (var r = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = r.length ? r[r.length - 1] : null, c = o, d = 0; d < r.length; d++) {
      var g = r[d];
      if (g.dataset.precedence === e) c = g;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function Ns(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Hs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Nu = null;
  function Ym(t, e, a) {
    if (Nu === null) {
      var r = /* @__PURE__ */ new Map(), o = Nu = /* @__PURE__ */ new Map();
      o.set(a, r);
    } else
      o = Nu, r = o.get(a), r || (r = /* @__PURE__ */ new Map(), o.set(a, r));
    if (r.has(t)) return r;
    for (r.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
      var c = a[o];
      if (!(c[gl] || c[fe] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = c.getAttribute(e) || "";
        d = t + d;
        var g = r.get(d);
        g ? g.push(c) : r.set(d, [c]);
      }
    }
    return r;
  }
  function Vm(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function wb(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
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
  function Xm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Lb(t, e, a, r) {
    if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var o = Vr(r.href), c = e.querySelector(
          Pl(o)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Hu.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = c, oe(c);
          return;
        }
        c = e.ownerDocument || e, r = $m(r), (o = en.get(o)) && Ns(r, o), c = c.createElement("link"), oe(c);
        var d = c;
        d._p = new Promise(function(g, x) {
          d.onload = g, d.onerror = x;
        }), pe(c, "link", r), a.instance = c;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = Hu.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var zs = 0;
  function Ub(t, e) {
    return t.stylesheets && t.count === 0 && wu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var r = setTimeout(function() {
        if (t.stylesheets && wu(t, t.stylesheets), t.unsuspend) {
          var c = t.unsuspend;
          t.unsuspend = null, c();
        }
      }, 6e4 + e);
      0 < t.imgBytes && zs === 0 && (zs = 62500 * yb());
      var o = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && wu(t, t.stylesheets), t.unsuspend)) {
            var c = t.unsuspend;
            t.unsuspend = null, c();
          }
        },
        (t.imgBytes > zs ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(r), clearTimeout(o);
      };
    } : null;
  }
  function Hu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var zu = null;
  function wu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, zu = /* @__PURE__ */ new Map(), e.forEach(Gb, t), zu = null, Hu.call(t));
  }
  function Gb(t, e) {
    if (!(e.state.loading & 4)) {
      var a = zu.get(t);
      if (a) var r = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), zu.set(t, a);
        for (var o = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var d = o[c];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), r = d);
        }
        r && a.set(null, r);
      }
      o = e.instance, d = o.getAttribute("data-precedence"), c = a.get(d) || r, c === r && a.set(null, o), a.set(d, o), this.count++, r = Hu.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), c ? c.parentNode.insertBefore(o, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ei = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: rt,
    _currentValue2: rt,
    _threadCount: 0
  };
  function jb(t, e, a, r, o, c, d, g, x) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ro(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ro(0), this.hiddenUpdates = Ro(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(t, e, a, r, o, c, d, g, x, B, L, $) {
    return t = new jb(
      t,
      e,
      a,
      d,
      x,
      B,
      L,
      $,
      g
    ), e = 1, c === !0 && (e |= 24), c = Le(3, null, null, e), t.current = c, c.stateNode = t, e = hc(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: e
    }, yc(c), t;
  }
  function Qm(t) {
    return t ? (t = Er, t) : Er;
  }
  function Zm(t, e, a, r, o, c) {
    o = Qm(o), r.context === null ? r.context = o : r.pendingContext = o, r = na(e), r.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (r.callback = c), a = aa(t, r, e), a !== null && (De(a, t, e), Hl(a, t, e));
  }
  function Km(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function ws(t, e) {
    Km(t, e), (t = t.alternate) && Km(t, e);
  }
  function Im(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Da(t, 67108864);
      e !== null && De(e, t, 67108864), ws(t, 67108864);
    }
  }
  function Jm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = $e();
      e = Bo(e);
      var a = Da(t, e);
      a !== null && De(a, t, e), ws(t, e);
    }
  }
  var Lu = !0;
  function kb(t, e, a, r) {
    var o = N.T;
    N.T = null;
    var c = Z.p;
    try {
      Z.p = 2, Ls(t, e, a, r);
    } finally {
      Z.p = c, N.T = o;
    }
  }
  function $b(t, e, a, r) {
    var o = N.T;
    N.T = null;
    var c = Z.p;
    try {
      Z.p = 8, Ls(t, e, a, r);
    } finally {
      Z.p = c, N.T = o;
    }
  }
  function Ls(t, e, a, r) {
    if (Lu) {
      var o = Us(r);
      if (o === null)
        Es(
          t,
          e,
          r,
          Uu,
          a
        ), Pm(t, r);
      else if (Yb(
        o,
        t,
        e,
        a,
        r
      ))
        r.stopPropagation();
      else if (Pm(t, r), e & 4 && -1 < qb.indexOf(t)) {
        for (; o !== null; ) {
          var c = fr(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var d = Ma(c.pendingLanes);
                  if (d !== 0) {
                    var g = c;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var x = 1 << 31 - ze(d);
                      g.entanglements[1] |= x, d &= ~x;
                    }
                    pn(c), (_t & 6) === 0 && (bu = ye() + 500, Kl(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = Da(c, 2), g !== null && De(g, c, 2), xu(), ws(c, 2);
            }
          if (c = Us(r), c === null && Es(
            t,
            e,
            r,
            Uu,
            a
          ), c === o) break;
          o = c;
        }
        o !== null && r.stopPropagation();
      } else
        Es(
          t,
          e,
          r,
          null,
          a
        );
    }
  }
  function Us(t) {
    return t = jo(t), Gs(t);
  }
  var Uu = null;
  function Gs(t) {
    if (Uu = null, t = sr(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = m(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Uu = t, null;
  }
  function Wm(t) {
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
        switch (Mi()) {
          case xe:
            return 2;
          case Xt:
            return 8;
          case se:
          case Xe:
            return 32;
          case or:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var js = !1, ma = null, pa = null, ga = null, ni = /* @__PURE__ */ new Map(), ai = /* @__PURE__ */ new Map(), ya = [], qb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Pm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ma = null;
        break;
      case "dragenter":
      case "dragleave":
        pa = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        ni.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ai.delete(e.pointerId);
    }
  }
  function ri(t, e, a, r, o, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [o]
    }, e !== null && (e = fr(e), e !== null && Im(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
  }
  function Yb(t, e, a, r, o) {
    switch (e) {
      case "focusin":
        return ma = ri(
          ma,
          t,
          e,
          a,
          r,
          o
        ), !0;
      case "dragenter":
        return pa = ri(
          pa,
          t,
          e,
          a,
          r,
          o
        ), !0;
      case "mouseover":
        return ga = ri(
          ga,
          t,
          e,
          a,
          r,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return ni.set(
          c,
          ri(
            ni.get(c) || null,
            t,
            e,
            a,
            r,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, ai.set(
          c,
          ri(
            ai.get(c) || null,
            t,
            e,
            a,
            r,
            o
          )
        ), !0;
    }
    return !1;
  }
  function tp(t) {
    var e = sr(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = h(a), e !== null) {
            t.blockedOn = e, m0(t.priority, function() {
              Jm(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(a), e !== null) {
            t.blockedOn = e, m0(t.priority, function() {
              Jm(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Gu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Us(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var r = new a.constructor(
          a.type,
          a
        );
        Go = r, a.target.dispatchEvent(r), Go = null;
      } else
        return e = fr(a), e !== null && Im(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function ep(t, e, a) {
    Gu(t) && a.delete(e);
  }
  function Vb() {
    js = !1, ma !== null && Gu(ma) && (ma = null), pa !== null && Gu(pa) && (pa = null), ga !== null && Gu(ga) && (ga = null), ni.forEach(ep), ai.forEach(ep);
  }
  function ju(t, e) {
    t.blockedOn === e && (t.blockedOn = null, js || (js = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Vb
    )));
  }
  var ku = null;
  function np(t) {
    ku !== t && (ku = t, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        ku === t && (ku = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], r = t[e + 1], o = t[e + 2];
          if (typeof r != "function") {
            if (Gs(r || a) === null)
              continue;
            break;
          }
          var c = fr(a);
          c !== null && (t.splice(e, 3), e -= 3, Uc(
            c,
            {
              pending: !0,
              data: o,
              method: a.method,
              action: r
            },
            r,
            o
          ));
        }
      }
    ));
  }
  function Fr(t) {
    function e(x) {
      return ju(x, t);
    }
    ma !== null && ju(ma, t), pa !== null && ju(pa, t), ga !== null && ju(ga, t), ni.forEach(e), ai.forEach(e);
    for (var a = 0; a < ya.length; a++) {
      var r = ya[a];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < ya.length && (a = ya[0], a.blockedOn === null); )
      tp(a), a.blockedOn === null && ya.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var o = a[r], c = a[r + 1], d = o[Ce] || null;
        if (typeof c == "function")
          d || np(a);
        else if (d) {
          var g = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, d = c[Ce] || null)
              g = d.formAction;
            else if (Gs(o) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? a[r + 1] = g : (a.splice(r, 3), r -= 3), np(a);
        }
      }
  }
  function ap() {
    function t(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(d) {
            return o = d;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      o !== null && (o(), o = null), r || setTimeout(a, 20);
    }
    function a() {
      if (!r && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var r = !1, o = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        r = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), o !== null && (o(), o = null);
      };
    }
  }
  function ks(t) {
    this._internalRoot = t;
  }
  $u.prototype.render = ks.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var a = e.current, r = $e();
    Zm(a, r, t, e, null, null);
  }, $u.prototype.unmount = ks.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Zm(t.current, 2, null, t, null, null), xu(), e[cr] = null;
    }
  };
  function $u(t) {
    this._internalRoot = t;
  }
  $u.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = h0();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < ya.length && e !== 0 && e < ya[a].priority; a++) ;
      ya.splice(a, 0, t), a === 0 && tp(t);
    }
  };
  var rp = l.version;
  if (rp !== "19.2.0")
    throw Error(
      u(
        527,
        rp,
        "19.2.0"
      )
    );
  Z.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = p(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Xb = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qu.isDisabled && qu.supportsFiber)
      try {
        hl = qu.inject(
          Xb
        ), He = qu;
      } catch {
      }
  }
  return li.createRoot = function(t, e) {
    if (!s(t)) throw Error(u(299));
    var a = !1, r = "", o = fh, c = dh, d = hh;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = Fm(
      t,
      1,
      !1,
      null,
      null,
      a,
      r,
      null,
      o,
      c,
      d,
      ap
    ), t[cr] = e.current, xs(t), new ks(e);
  }, li.hydrateRoot = function(t, e, a) {
    if (!s(t)) throw Error(u(299));
    var r = !1, o = "", c = fh, d = dh, g = hh, x = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (g = a.onRecoverableError), a.formState !== void 0 && (x = a.formState)), e = Fm(
      t,
      1,
      !0,
      e,
      a ?? null,
      r,
      o,
      x,
      c,
      d,
      g,
      ap
    ), e.context = Qm(null), a = e.current, r = $e(), r = Bo(r), o = na(r), o.callback = null, aa(a, o, r), a = r, e.current.lanes = a, pl(e, a), pn(e), t[cr] = e.current, xs(t), new $u(e);
  }, li.version = "19.2.0", li;
}
var dp;
function e1() {
  if (dp) return qs.exports;
  dp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (l) {
        console.error(l);
      }
  }
  return n(), qs.exports = t1(), qs.exports;
}
var n1 = e1(), a1 = Object.defineProperty, r1 = (n, l, i) => l in n ? a1(n, l, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[l] = i, Yu = (n, l, i) => r1(n, typeof l != "symbol" ? l + "" : l, i);
const l1 = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, i1 = {
  stringify: (n) => n.name,
  parse: (n, l, i) => {
    const u = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof u == "function" ? u.bind(i) : void 0;
  }
}, u1 = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
};
function o1(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (l, i, u) => `${i}-${u.toLowerCase()}`
  );
}
function hg(n) {
  return n.replace(/[-:]([a-z])/g, (l, i) => `${i.toUpperCase()}`);
}
const c1 = {
  stringify: (n) => n.name,
  parse: (n, l, i) => {
    const u = (() => {
      const s = hg(l);
      if (typeof i < "u" && s in i.container)
        return i.container[s];
    })();
    return typeof u == "function" ? u.bind(i) : void 0;
  }
}, s1 = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, f1 = {
  stringify: (n) => n,
  parse: (n) => n
}, Fs = {
  string: f1,
  number: s1,
  boolean: l1,
  function: i1,
  method: c1,
  json: u1
}, ii = Symbol.for("r2wc.render"), Vu = Symbol.for("r2wc.connected"), Va = Symbol.for("r2wc.context"), qe = Symbol.for("r2wc.props");
function d1(n, l, i) {
  var u, s, f;
  l.props || (l.props = n.propTypes ? Object.keys(n.propTypes) : []), l.events || (l.events = []);
  const h = Array.isArray(l.props) ? l.props.slice() : Object.keys(l.props), m = Array.isArray(l.events) ? l.events.slice() : Object.keys(l.events), y = {}, p = {}, v = {}, S = {};
  for (const _ of h) {
    y[_] = Array.isArray(l.props) ? "string" : l.props[_];
    const M = o1(_);
    v[_] = M, S[M] = _;
  }
  for (const _ of m)
    p[_] = Array.isArray(l.events) ? {} : l.events[_];
  class A extends HTMLElement {
    constructor() {
      super(), Yu(this, f, !0), Yu(this, s), Yu(this, u, {}), Yu(this, "container"), l.shadow ? this.container = this.attachShadow({
        mode: l.shadow
      }) : this.container = this, this[qe].container = this.container;
      for (const M of h) {
        const C = v[M], z = this.getAttribute(C), k = y[M], F = k ? Fs[k] : null;
        if (k === "method") {
          const V = hg(C);
          Object.defineProperty(this[qe].container, V, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[qe][V];
            },
            set(Q) {
              this[qe][V] = Q, this[ii]();
            }
          }), this[qe][M] = F.parse(z, C, this);
        }
        F != null && F.parse && z && (this[qe][M] = F.parse(z, C, this));
      }
      for (const M of m)
        this[qe][M] = (C) => {
          const z = M.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(z, { detail: C, ...p[M] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(S);
    }
    connectedCallback() {
      this[Vu] = !0, this[ii]();
    }
    disconnectedCallback() {
      this[Vu] = !1, this[Va] && i.unmount(this[Va]), delete this[Va];
    }
    attributeChangedCallback(M, C, z) {
      const k = S[M], F = y[k], V = F ? Fs[F] : null;
      k in y && V != null && V.parse && z && (this[qe][k] = V.parse(z, M, this), this[ii]());
    }
    [(f = Vu, s = Va, u = qe, ii)]() {
      this[Vu] && (this[Va] ? i.update(this[Va], this[qe]) : this[Va] = i.mount(
        this.container,
        n,
        this[qe]
      ));
    }
  }
  for (const _ of h) {
    const M = v[_], C = y[_];
    Object.defineProperty(A.prototype, _, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[qe][_];
      },
      set(z) {
        this[qe][_] = z;
        const k = C ? Fs[C] : null;
        if (k != null && k.stringify) {
          const F = k.stringify(z, M, this);
          this.getAttribute(M) !== F && this.setAttribute(M, F);
        } else
          this[ii]();
      }
    });
  }
  return A;
}
function h1(n, l, i) {
  const u = n1.createRoot(n), s = Lf.createElement(l, i);
  return u.render(s), {
    root: u,
    ReactComponent: l
  };
}
function m1({ root: n, ReactComponent: l }, i) {
  const u = Lf.createElement(l, i);
  n.render(u);
}
function p1({ root: n }) {
  n.unmount();
}
function g1(n, l = {}) {
  return d1(n, l, { mount: h1, update: m1, unmount: p1 });
}
var Qs = { exports: {} }, ui = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hp;
function y1() {
  if (hp) return ui;
  hp = 1;
  var n = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function i(u, s, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: n,
      type: u,
      key: h,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return ui.Fragment = l, ui.jsx = i, ui.jsxs = i, ui;
}
var mp;
function v1() {
  return mp || (mp = 1, Qs.exports = y1()), Qs.exports;
}
var J = v1();
function Ia(n, ...l) {
  const i = new URL(`https://mui.com/production-error/?code=${n}`);
  return l.forEach((u) => i.searchParams.append("args[]", u)), `Minified MUI error #${n}; visit ${i} for the full message.`;
}
const Fn = "$$material";
function df() {
  return df = Object.assign ? Object.assign.bind() : function(n) {
    for (var l = 1; l < arguments.length; l++) {
      var i = arguments[l];
      for (var u in i) ({}).hasOwnProperty.call(i, u) && (n[u] = i[u]);
    }
    return n;
  }, df.apply(null, arguments);
}
function b1(n) {
  if (n.sheet)
    return n.sheet;
  for (var l = 0; l < document.styleSheets.length; l++)
    if (document.styleSheets[l].ownerNode === n)
      return document.styleSheets[l];
}
function S1(n) {
  var l = document.createElement("style");
  return l.setAttribute("data-emotion", n.key), n.nonce !== void 0 && l.setAttribute("nonce", n.nonce), l.appendChild(document.createTextNode("")), l.setAttribute("data-s", ""), l;
}
var mg = /* @__PURE__ */ (function() {
  function n(i) {
    var u = this;
    this._insertTag = function(s) {
      var f;
      u.tags.length === 0 ? u.insertionPoint ? f = u.insertionPoint.nextSibling : u.prepend ? f = u.container.firstChild : f = u.before : f = u.tags[u.tags.length - 1].nextSibling, u.container.insertBefore(s, f), u.tags.push(s);
    }, this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var l = n.prototype;
  return l.hydrate = function(u) {
    u.forEach(this._insertTag);
  }, l.insert = function(u) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(S1(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = b1(s);
      try {
        f.insertRule(u, f.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(u));
    this.ctr++;
  }, l.flush = function() {
    this.tags.forEach(function(u) {
      var s;
      return (s = u.parentNode) == null ? void 0 : s.removeChild(u);
    }), this.tags = [], this.ctr = 0;
  }, n;
})(), be = "-ms-", no = "-moz-", Rt = "-webkit-", pg = "comm", Uf = "rule", Gf = "decl", x1 = "@import", gg = "@keyframes", E1 = "@layer", T1 = Math.abs, uo = String.fromCharCode, A1 = Object.assign;
function C1(n, l) {
  return ge(n, 0) ^ 45 ? (((l << 2 ^ ge(n, 0)) << 2 ^ ge(n, 1)) << 2 ^ ge(n, 2)) << 2 ^ ge(n, 3) : 0;
}
function yg(n) {
  return n.trim();
}
function M1(n, l) {
  return (n = l.exec(n)) ? n[0] : n;
}
function Bt(n, l, i) {
  return n.replace(l, i);
}
function hf(n, l) {
  return n.indexOf(l);
}
function ge(n, l) {
  return n.charCodeAt(l) | 0;
}
function mi(n, l, i) {
  return n.slice(l, i);
}
function bn(n) {
  return n.length;
}
function jf(n) {
  return n.length;
}
function Xu(n, l) {
  return l.push(n), n;
}
function O1(n, l) {
  return n.map(l).join("");
}
var oo = 1, al = 1, vg = 0, Ne = 0, le = 0, il = "";
function co(n, l, i, u, s, f, h) {
  return { value: n, root: l, parent: i, type: u, props: s, children: f, line: oo, column: al, length: h, return: "" };
}
function oi(n, l) {
  return A1(co("", null, null, "", null, null, 0), n, { length: -n.length }, l);
}
function _1() {
  return le;
}
function R1() {
  return le = Ne > 0 ? ge(il, --Ne) : 0, al--, le === 10 && (al = 1, oo--), le;
}
function Ve() {
  return le = Ne < vg ? ge(il, Ne++) : 0, al++, le === 10 && (al = 1, oo++), le;
}
function An() {
  return ge(il, Ne);
}
function Iu() {
  return Ne;
}
function vi(n, l) {
  return mi(il, n, l);
}
function pi(n) {
  switch (n) {
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
function bg(n) {
  return oo = al = 1, vg = bn(il = n), Ne = 0, [];
}
function Sg(n) {
  return il = "", n;
}
function Ju(n) {
  return yg(vi(Ne - 1, mf(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function B1(n) {
  for (; (le = An()) && le < 33; )
    Ve();
  return pi(n) > 2 || pi(le) > 3 ? "" : " ";
}
function D1(n, l) {
  for (; --l && Ve() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return vi(n, Iu() + (l < 6 && An() == 32 && Ve() == 32));
}
function mf(n) {
  for (; Ve(); )
    switch (le) {
      // ] ) " '
      case n:
        return Ne;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && mf(le);
        break;
      // (
      case 40:
        n === 41 && mf(n);
        break;
      // \
      case 92:
        Ve();
        break;
    }
  return Ne;
}
function N1(n, l) {
  for (; Ve() && n + le !== 57; )
    if (n + le === 84 && An() === 47)
      break;
  return "/*" + vi(l, Ne - 1) + "*" + uo(n === 47 ? n : Ve());
}
function H1(n) {
  for (; !pi(An()); )
    Ve();
  return vi(n, Ne);
}
function z1(n) {
  return Sg(Wu("", null, null, null, [""], n = bg(n), 0, [0], n));
}
function Wu(n, l, i, u, s, f, h, m, y) {
  for (var p = 0, v = 0, S = h, A = 0, _ = 0, M = 0, C = 1, z = 1, k = 1, F = 0, V = "", Q = s, w = f, q = u, X = V; z; )
    switch (M = F, F = Ve()) {
      // (
      case 40:
        if (M != 108 && ge(X, S - 1) == 58) {
          hf(X += Bt(Ju(F), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        X += Ju(F);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        X += B1(M);
        break;
      // \
      case 92:
        X += D1(Iu() - 1, 7);
        continue;
      // /
      case 47:
        switch (An()) {
          case 42:
          case 47:
            Xu(w1(N1(Ve(), Iu()), l, i), y);
            break;
          default:
            X += "/";
        }
        break;
      // {
      case 123 * C:
        m[p++] = bn(X) * k;
      // } ; \0
      case 125 * C:
      case 59:
      case 0:
        switch (F) {
          // \0 }
          case 0:
          case 125:
            z = 0;
          // ;
          case 59 + v:
            k == -1 && (X = Bt(X, /\f/g, "")), _ > 0 && bn(X) - S && Xu(_ > 32 ? gp(X + ";", u, i, S - 1) : gp(Bt(X, " ", "") + ";", u, i, S - 2), y);
            break;
          // @ ;
          case 59:
            X += ";";
          // { rule/at-rule
          default:
            if (Xu(q = pp(X, l, i, p, v, s, m, V, Q = [], w = [], S), f), F === 123)
              if (v === 0)
                Wu(X, l, q, q, Q, f, S, m, w);
              else
                switch (A === 99 && ge(X, 3) === 110 ? 100 : A) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wu(n, q, q, u && Xu(pp(n, q, q, 0, 0, s, m, V, s, Q = [], S), w), s, w, S, m, u ? Q : w);
                    break;
                  default:
                    Wu(X, q, q, q, [""], w, 0, m, w);
                }
        }
        p = v = _ = 0, C = k = 1, V = X = "", S = h;
        break;
      // :
      case 58:
        S = 1 + bn(X), _ = M;
      default:
        if (C < 1) {
          if (F == 123)
            --C;
          else if (F == 125 && C++ == 0 && R1() == 125)
            continue;
        }
        switch (X += uo(F), F * C) {
          // &
          case 38:
            k = v > 0 ? 1 : (X += "\f", -1);
            break;
          // ,
          case 44:
            m[p++] = (bn(X) - 1) * k, k = 1;
            break;
          // @
          case 64:
            An() === 45 && (X += Ju(Ve())), A = An(), v = S = bn(V = X += H1(Iu())), F++;
            break;
          // -
          case 45:
            M === 45 && bn(X) == 2 && (C = 0);
        }
    }
  return f;
}
function pp(n, l, i, u, s, f, h, m, y, p, v) {
  for (var S = s - 1, A = s === 0 ? f : [""], _ = jf(A), M = 0, C = 0, z = 0; M < u; ++M)
    for (var k = 0, F = mi(n, S + 1, S = T1(C = h[M])), V = n; k < _; ++k)
      (V = yg(C > 0 ? A[k] + " " + F : Bt(F, /&\f/g, A[k]))) && (y[z++] = V);
  return co(n, l, i, s === 0 ? Uf : m, y, p, v);
}
function w1(n, l, i) {
  return co(n, l, i, pg, uo(_1()), mi(n, 2, -2), 0);
}
function gp(n, l, i, u) {
  return co(n, l, i, Gf, mi(n, 0, u), mi(n, u + 1, -1), u);
}
function tl(n, l) {
  for (var i = "", u = jf(n), s = 0; s < u; s++)
    i += l(n[s], s, n, l) || "";
  return i;
}
function L1(n, l, i, u) {
  switch (n.type) {
    case E1:
      if (n.children.length) break;
    case x1:
    case Gf:
      return n.return = n.return || n.value;
    case pg:
      return "";
    case gg:
      return n.return = n.value + "{" + tl(n.children, u) + "}";
    case Uf:
      n.value = n.props.join(",");
  }
  return bn(i = tl(n.children, u)) ? n.return = n.value + "{" + i + "}" : "";
}
function U1(n) {
  var l = jf(n);
  return function(i, u, s, f) {
    for (var h = "", m = 0; m < l; m++)
      h += n[m](i, u, s, f) || "";
    return h;
  };
}
function G1(n) {
  return function(l) {
    l.root || (l = l.return) && n(l);
  };
}
function xg(n) {
  var l = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return l[i] === void 0 && (l[i] = n(i)), l[i];
  };
}
var j1 = function(l, i, u) {
  for (var s = 0, f = 0; s = f, f = An(), s === 38 && f === 12 && (i[u] = 1), !pi(f); )
    Ve();
  return vi(l, Ne);
}, k1 = function(l, i) {
  var u = -1, s = 44;
  do
    switch (pi(s)) {
      case 0:
        s === 38 && An() === 12 && (i[u] = 1), l[u] += j1(Ne - 1, i, u);
        break;
      case 2:
        l[u] += Ju(s);
        break;
      case 4:
        if (s === 44) {
          l[++u] = An() === 58 ? "&\f" : "", i[u] = l[u].length;
          break;
        }
      // fallthrough
      default:
        l[u] += uo(s);
    }
  while (s = Ve());
  return l;
}, $1 = function(l, i) {
  return Sg(k1(bg(l), i));
}, yp = /* @__PURE__ */ new WeakMap(), q1 = function(l) {
  if (!(l.type !== "rule" || !l.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  l.length < 1)) {
    for (var i = l.value, u = l.parent, s = l.column === u.column && l.line === u.line; u.type !== "rule"; )
      if (u = u.parent, !u) return;
    if (!(l.props.length === 1 && i.charCodeAt(0) !== 58 && !yp.get(u)) && !s) {
      yp.set(l, !0);
      for (var f = [], h = $1(i, f), m = u.props, y = 0, p = 0; y < h.length; y++)
        for (var v = 0; v < m.length; v++, p++)
          l.props[p] = f[y] ? h[y].replace(/&\f/g, m[v]) : m[v] + " " + h[y];
    }
  }
}, Y1 = function(l) {
  if (l.type === "decl") {
    var i = l.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (l.return = "", l.value = "");
  }
};
function Eg(n, l) {
  switch (C1(n, l)) {
    // color-adjust
    case 5103:
      return Rt + "print-" + n + n;
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
      return Rt + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Rt + n + no + n + be + n + n;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Rt + n + be + n + n;
    // order
    case 6165:
      return Rt + n + be + "flex-" + n + n;
    // align-items
    case 5187:
      return Rt + n + Bt(n, /(\w+).+(:[^]+)/, Rt + "box-$1$2" + be + "flex-$1$2") + n;
    // align-self
    case 5443:
      return Rt + n + be + "flex-item-" + Bt(n, /flex-|-self/, "") + n;
    // align-content
    case 4675:
      return Rt + n + be + "flex-line-pack" + Bt(n, /align-content|flex-|-self/, "") + n;
    // flex-shrink
    case 5548:
      return Rt + n + be + Bt(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return Rt + n + be + Bt(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return Rt + "box-" + Bt(n, "-grow", "") + Rt + n + be + Bt(n, "grow", "positive") + n;
    // transition
    case 4554:
      return Rt + Bt(n, /([^-])(transform)/g, "$1" + Rt + "$2") + n;
    // cursor
    case 6187:
      return Bt(Bt(Bt(n, /(zoom-|grab)/, Rt + "$1"), /(image-set)/, Rt + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return Bt(n, /(image-set\([^]*)/, Rt + "$1$`$1");
    // justify-content
    case 4968:
      return Bt(Bt(n, /(.+:)(flex-)?(.*)/, Rt + "box-pack:$3" + be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Rt + n + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Bt(n, /(.+)-inline(.+)/, Rt + "$1$2") + n;
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
      if (bn(n) - 1 - l > 6) switch (ge(n, l + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ge(n, l + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Bt(n, /(.+:)(.+)-([^]+)/, "$1" + Rt + "$2-$3$1" + no + (ge(n, l + 3) == 108 ? "$3" : "$2-$3")) + n;
        // (s)tretch
        case 115:
          return ~hf(n, "stretch") ? Eg(Bt(n, "stretch", "fill-available"), l) + n : n;
      }
      break;
    // position: sticky
    case 4949:
      if (ge(n, l + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ge(n, bn(n) - 3 - (~hf(n, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Bt(n, ":", ":" + Rt) + n;
        // (inline-)?fl(e)x
        case 101:
          return Bt(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Rt + (ge(n, 14) === 45 ? "inline-" : "") + "box$3$1" + Rt + "$2$3$1" + be + "$2box$3") + n;
      }
      break;
    // writing-mode
    case 5936:
      switch (ge(n, l + 11)) {
        // vertical-l(r)
        case 114:
          return Rt + n + be + Bt(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return Rt + n + be + Bt(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return Rt + n + be + Bt(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return Rt + n + be + n + n;
  }
  return n;
}
var V1 = function(l, i, u, s) {
  if (l.length > -1 && !l.return) switch (l.type) {
    case Gf:
      l.return = Eg(l.value, l.length);
      break;
    case gg:
      return tl([oi(l, {
        value: Bt(l.value, "@", "@" + Rt)
      })], s);
    case Uf:
      if (l.length) return O1(l.props, function(f) {
        switch (M1(f, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return tl([oi(l, {
              props: [Bt(f, /:(read-\w+)/, ":" + no + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return tl([oi(l, {
              props: [Bt(f, /:(plac\w+)/, ":" + Rt + "input-$1")]
            }), oi(l, {
              props: [Bt(f, /:(plac\w+)/, ":" + no + "$1")]
            }), oi(l, {
              props: [Bt(f, /:(plac\w+)/, be + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, X1 = [V1], Tg = function(l) {
  var i = l.key;
  if (i === "css") {
    var u = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(u, function(C) {
      var z = C.getAttribute("data-emotion");
      z.indexOf(" ") !== -1 && (document.head.appendChild(C), C.setAttribute("data-s", ""));
    });
  }
  var s = l.stylisPlugins || X1, f = {}, h, m = [];
  h = l.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(C) {
      for (var z = C.getAttribute("data-emotion").split(" "), k = 1; k < z.length; k++)
        f[z[k]] = !0;
      m.push(C);
    }
  );
  var y, p = [q1, Y1];
  {
    var v, S = [L1, G1(function(C) {
      v.insert(C);
    })], A = U1(p.concat(s, S)), _ = function(z) {
      return tl(z1(z), A);
    };
    y = function(z, k, F, V) {
      v = F, _(z ? z + "{" + k.styles + "}" : k.styles), V && (M.inserted[k.name] = !0);
    };
  }
  var M = {
    key: i,
    sheet: new mg({
      key: i,
      container: h,
      nonce: l.nonce,
      speedy: l.speedy,
      prepend: l.prepend,
      insertionPoint: l.insertionPoint
    }),
    nonce: l.nonce,
    inserted: f,
    registered: {},
    insert: y
  };
  return M.sheet.hydrate(m), M;
}, Zs = { exports: {} }, Dt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function F1() {
  if (vp) return Dt;
  vp = 1;
  var n = typeof Symbol == "function" && Symbol.for, l = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, u = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, f = n ? Symbol.for("react.profiler") : 60114, h = n ? Symbol.for("react.provider") : 60109, m = n ? Symbol.for("react.context") : 60110, y = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, S = n ? Symbol.for("react.suspense") : 60113, A = n ? Symbol.for("react.suspense_list") : 60120, _ = n ? Symbol.for("react.memo") : 60115, M = n ? Symbol.for("react.lazy") : 60116, C = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, k = n ? Symbol.for("react.responder") : 60118, F = n ? Symbol.for("react.scope") : 60119;
  function V(w) {
    if (typeof w == "object" && w !== null) {
      var q = w.$$typeof;
      switch (q) {
        case l:
          switch (w = w.type, w) {
            case y:
            case p:
            case u:
            case f:
            case s:
            case S:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case m:
                case v:
                case M:
                case _:
                case h:
                  return w;
                default:
                  return q;
              }
          }
        case i:
          return q;
      }
    }
  }
  function Q(w) {
    return V(w) === p;
  }
  return Dt.AsyncMode = y, Dt.ConcurrentMode = p, Dt.ContextConsumer = m, Dt.ContextProvider = h, Dt.Element = l, Dt.ForwardRef = v, Dt.Fragment = u, Dt.Lazy = M, Dt.Memo = _, Dt.Portal = i, Dt.Profiler = f, Dt.StrictMode = s, Dt.Suspense = S, Dt.isAsyncMode = function(w) {
    return Q(w) || V(w) === y;
  }, Dt.isConcurrentMode = Q, Dt.isContextConsumer = function(w) {
    return V(w) === m;
  }, Dt.isContextProvider = function(w) {
    return V(w) === h;
  }, Dt.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === l;
  }, Dt.isForwardRef = function(w) {
    return V(w) === v;
  }, Dt.isFragment = function(w) {
    return V(w) === u;
  }, Dt.isLazy = function(w) {
    return V(w) === M;
  }, Dt.isMemo = function(w) {
    return V(w) === _;
  }, Dt.isPortal = function(w) {
    return V(w) === i;
  }, Dt.isProfiler = function(w) {
    return V(w) === f;
  }, Dt.isStrictMode = function(w) {
    return V(w) === s;
  }, Dt.isSuspense = function(w) {
    return V(w) === S;
  }, Dt.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === u || w === p || w === f || w === s || w === S || w === A || typeof w == "object" && w !== null && (w.$$typeof === M || w.$$typeof === _ || w.$$typeof === h || w.$$typeof === m || w.$$typeof === v || w.$$typeof === z || w.$$typeof === k || w.$$typeof === F || w.$$typeof === C);
  }, Dt.typeOf = V, Dt;
}
var bp;
function Q1() {
  return bp || (bp = 1, Zs.exports = F1()), Zs.exports;
}
var Ks, Sp;
function Z1() {
  if (Sp) return Ks;
  Sp = 1;
  var n = Q1(), l = {
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
  }, i = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, u = {
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
  }, f = {};
  f[n.ForwardRef] = u, f[n.Memo] = s;
  function h(M) {
    return n.isMemo(M) ? s : f[M.$$typeof] || l;
  }
  var m = Object.defineProperty, y = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols, v = Object.getOwnPropertyDescriptor, S = Object.getPrototypeOf, A = Object.prototype;
  function _(M, C, z) {
    if (typeof C != "string") {
      if (A) {
        var k = S(C);
        k && k !== A && _(M, k, z);
      }
      var F = y(C);
      p && (F = F.concat(p(C)));
      for (var V = h(M), Q = h(C), w = 0; w < F.length; ++w) {
        var q = F[w];
        if (!i[q] && !(z && z[q]) && !(Q && Q[q]) && !(V && V[q])) {
          var X = v(C, q);
          try {
            m(M, q, X);
          } catch {
          }
        }
      }
    }
    return M;
  }
  return Ks = _, Ks;
}
Z1();
var K1 = !0;
function Ag(n, l, i) {
  var u = "";
  return i.split(" ").forEach(function(s) {
    n[s] !== void 0 ? l.push(n[s] + ";") : s && (u += s + " ");
  }), u;
}
var kf = function(l, i, u) {
  var s = l.key + "-" + i.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (u === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  K1 === !1) && l.registered[s] === void 0 && (l.registered[s] = i.styles);
}, $f = function(l, i, u) {
  kf(l, i, u);
  var s = l.key + "-" + i.name;
  if (l.inserted[i.name] === void 0) {
    var f = i;
    do
      l.insert(i === f ? "." + s : "", f, l.sheet, !0), f = f.next;
    while (f !== void 0);
  }
};
function I1(n) {
  for (var l = 0, i, u = 0, s = n.length; s >= 4; ++u, s -= 4)
    i = n.charCodeAt(u) & 255 | (n.charCodeAt(++u) & 255) << 8 | (n.charCodeAt(++u) & 255) << 16 | (n.charCodeAt(++u) & 255) << 24, i = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= /* k >>> r: */
    i >>> 24, l = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      l ^= (n.charCodeAt(u + 2) & 255) << 16;
    case 2:
      l ^= (n.charCodeAt(u + 1) & 255) << 8;
    case 1:
      l ^= n.charCodeAt(u) & 255, l = /* Math.imul(h, m): */
      (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16);
  }
  return l ^= l >>> 13, l = /* Math.imul(h, m): */
  (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16), ((l ^ l >>> 15) >>> 0).toString(36);
}
var J1 = {
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
}, W1 = /[A-Z]|^ms/g, P1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Cg = function(l) {
  return l.charCodeAt(1) === 45;
}, xp = function(l) {
  return l != null && typeof l != "boolean";
}, Is = /* @__PURE__ */ xg(function(n) {
  return Cg(n) ? n : n.replace(W1, "-$&").toLowerCase();
}), Ep = function(l, i) {
  switch (l) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(P1, function(u, s, f) {
          return Sn = {
            name: s,
            styles: f,
            next: Sn
          }, s;
        });
  }
  return J1[l] !== 1 && !Cg(l) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function gi(n, l, i) {
  if (i == null)
    return "";
  var u = i;
  if (u.__emotion_styles !== void 0)
    return u;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var s = i;
      if (s.anim === 1)
        return Sn = {
          name: s.name,
          styles: s.styles,
          next: Sn
        }, s.name;
      var f = i;
      if (f.styles !== void 0) {
        var h = f.next;
        if (h !== void 0)
          for (; h !== void 0; )
            Sn = {
              name: h.name,
              styles: h.styles,
              next: Sn
            }, h = h.next;
        var m = f.styles + ";";
        return m;
      }
      return tS(n, l, i);
    }
    case "function": {
      if (n !== void 0) {
        var y = Sn, p = i(n);
        return Sn = y, gi(n, l, p);
      }
      break;
    }
  }
  var v = i;
  if (l == null)
    return v;
  var S = l[v];
  return S !== void 0 ? S : v;
}
function tS(n, l, i) {
  var u = "";
  if (Array.isArray(i))
    for (var s = 0; s < i.length; s++)
      u += gi(n, l, i[s]) + ";";
  else
    for (var f in i) {
      var h = i[f];
      if (typeof h != "object") {
        var m = h;
        l != null && l[m] !== void 0 ? u += f + "{" + l[m] + "}" : xp(m) && (u += Is(f) + ":" + Ep(f, m) + ";");
      } else if (Array.isArray(h) && typeof h[0] == "string" && (l == null || l[h[0]] === void 0))
        for (var y = 0; y < h.length; y++)
          xp(h[y]) && (u += Is(f) + ":" + Ep(f, h[y]) + ";");
      else {
        var p = gi(n, l, h);
        switch (f) {
          case "animation":
          case "animationName": {
            u += Is(f) + ":" + p + ";";
            break;
          }
          default:
            u += f + "{" + p + "}";
        }
      }
    }
  return u;
}
var Tp = /label:\s*([^\s;{]+)\s*(;|$)/g, Sn;
function so(n, l, i) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var u = !0, s = "";
  Sn = void 0;
  var f = n[0];
  if (f == null || f.raw === void 0)
    u = !1, s += gi(i, l, f);
  else {
    var h = f;
    s += h[0];
  }
  for (var m = 1; m < n.length; m++)
    if (s += gi(i, l, n[m]), u) {
      var y = f;
      s += y[m];
    }
  Tp.lastIndex = 0;
  for (var p = "", v; (v = Tp.exec(s)) !== null; )
    p += "-" + v[1];
  var S = I1(s) + p;
  return {
    name: S,
    styles: s,
    next: Sn
  };
}
var eS = function(l) {
  return l();
}, Mg = ff.useInsertionEffect ? ff.useInsertionEffect : !1, Og = Mg || eS, Ap = Mg || Y.useLayoutEffect, _g = /* @__PURE__ */ Y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Tg({
    key: "css"
  }) : null
), nS = _g.Provider, qf = function(l) {
  return /* @__PURE__ */ Y.forwardRef(function(i, u) {
    var s = Y.useContext(_g);
    return l(i, s, u);
  });
}, bi = /* @__PURE__ */ Y.createContext({}), Yf = {}.hasOwnProperty, pf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", aS = function(l, i) {
  var u = {};
  for (var s in i)
    Yf.call(i, s) && (u[s] = i[s]);
  return u[pf] = l, u;
}, rS = function(l) {
  var i = l.cache, u = l.serialized, s = l.isStringTag;
  return kf(i, u, s), Og(function() {
    return $f(i, u, s);
  }), null;
}, lS = /* @__PURE__ */ qf(function(n, l, i) {
  var u = n.css;
  typeof u == "string" && l.registered[u] !== void 0 && (u = l.registered[u]);
  var s = n[pf], f = [u], h = "";
  typeof n.className == "string" ? h = Ag(l.registered, f, n.className) : n.className != null && (h = n.className + " ");
  var m = so(f, void 0, Y.useContext(bi));
  h += l.key + "-" + m.name;
  var y = {};
  for (var p in n)
    Yf.call(n, p) && p !== "css" && p !== pf && (y[p] = n[p]);
  return y.className = h, i && (y.ref = i), /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(rS, {
    cache: l,
    serialized: m,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ Y.createElement(s, y));
}), iS = lS, Cp = function(l, i) {
  var u = arguments;
  if (i == null || !Yf.call(i, "css"))
    return Y.createElement.apply(void 0, u);
  var s = u.length, f = new Array(s);
  f[0] = iS, f[1] = aS(l, i);
  for (var h = 2; h < s; h++)
    f[h] = u[h];
  return Y.createElement.apply(null, f);
};
(function(n) {
  var l;
  l || (l = n.JSX || (n.JSX = {}));
})(Cp || (Cp = {}));
var uS = /* @__PURE__ */ qf(function(n, l) {
  var i = n.styles, u = so([i], void 0, Y.useContext(bi)), s = Y.useRef();
  return Ap(function() {
    var f = l.key + "-global", h = new l.sheet.constructor({
      key: f,
      nonce: l.sheet.nonce,
      container: l.sheet.container,
      speedy: l.sheet.isSpeedy
    }), m = !1, y = document.querySelector('style[data-emotion="' + f + " " + u.name + '"]');
    return l.sheet.tags.length && (h.before = l.sheet.tags[0]), y !== null && (m = !0, y.setAttribute("data-emotion", f), h.hydrate([y])), s.current = [h, m], function() {
      h.flush();
    };
  }, [l]), Ap(function() {
    var f = s.current, h = f[0], m = f[1];
    if (m) {
      f[1] = !1;
      return;
    }
    if (u.next !== void 0 && $f(l, u.next, !0), h.tags.length) {
      var y = h.tags[h.tags.length - 1].nextElementSibling;
      h.before = y, h.flush();
    }
    l.insert("", u, h, !1);
  }, [l, u.name]), null;
}), oS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cS = /* @__PURE__ */ xg(
  function(n) {
    return oS.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
  }
  /* Z+1 */
), sS = cS, fS = function(l) {
  return l !== "theme";
}, Mp = function(l) {
  return typeof l == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  l.charCodeAt(0) > 96 ? sS : fS;
}, Op = function(l, i, u) {
  var s;
  if (i) {
    var f = i.shouldForwardProp;
    s = l.__emotion_forwardProp && f ? function(h) {
      return l.__emotion_forwardProp(h) && f(h);
    } : f;
  }
  return typeof s != "function" && u && (s = l.__emotion_forwardProp), s;
}, dS = function(l) {
  var i = l.cache, u = l.serialized, s = l.isStringTag;
  return kf(i, u, s), Og(function() {
    return $f(i, u, s);
  }), null;
}, hS = function n(l, i) {
  var u = l.__emotion_real === l, s = u && l.__emotion_base || l, f, h;
  i !== void 0 && (f = i.label, h = i.target);
  var m = Op(l, i, u), y = m || Mp(s), p = !y("as");
  return function() {
    var v = arguments, S = u && l.__emotion_styles !== void 0 ? l.__emotion_styles.slice(0) : [];
    if (f !== void 0 && S.push("label:" + f + ";"), v[0] == null || v[0].raw === void 0)
      S.push.apply(S, v);
    else {
      var A = v[0];
      S.push(A[0]);
      for (var _ = v.length, M = 1; M < _; M++)
        S.push(v[M], A[M]);
    }
    var C = qf(function(z, k, F) {
      var V = p && z.as || s, Q = "", w = [], q = z;
      if (z.theme == null) {
        q = {};
        for (var X in z)
          q[X] = z[X];
        q.theme = Y.useContext(bi);
      }
      typeof z.className == "string" ? Q = Ag(k.registered, w, z.className) : z.className != null && (Q = z.className + " ");
      var P = so(S.concat(w), k.registered, q);
      Q += k.key + "-" + P.name, h !== void 0 && (Q += " " + h);
      var W = p && m === void 0 ? Mp(V) : y, ut = {};
      for (var at in z)
        p && at === "as" || W(at) && (ut[at] = z[at]);
      return ut.className = Q, F && (ut.ref = F), /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(dS, {
        cache: k,
        serialized: P,
        isStringTag: typeof V == "string"
      }), /* @__PURE__ */ Y.createElement(V, ut));
    });
    return C.displayName = f !== void 0 ? f : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", C.defaultProps = l.defaultProps, C.__emotion_real = C, C.__emotion_base = s, C.__emotion_styles = S, C.__emotion_forwardProp = m, Object.defineProperty(C, "toString", {
      value: function() {
        return "." + h;
      }
    }), C.withComponent = function(z, k) {
      var F = n(z, df({}, i, k, {
        shouldForwardProp: Op(C, k, !0)
      }));
      return F.apply(void 0, S);
    }, C;
  };
}, mS = [
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
], gf = hS.bind(null);
mS.forEach(function(n) {
  gf[n] = gf(n);
});
const Js = /* @__PURE__ */ new Map(), pS = (n, l) => {
  const i = Tg(n);
  return i.sheet = new l({
    key: i.key,
    nonce: i.sheet.nonce,
    container: i.sheet.container,
    speedy: i.sheet.isSpeedy,
    prepend: i.sheet.prepend,
    insertionPoint: i.sheet.insertionPoint
  }), i;
};
let ba;
if (typeof document == "object" && (ba = document.querySelector('[name="emotion-insertion-point"]'), !ba)) {
  ba = document.createElement("meta"), ba.setAttribute("name", "emotion-insertion-point"), ba.setAttribute("content", "");
  const n = document.querySelector("head");
  n && n.prepend(ba);
}
function gS(n, l) {
  if (n || l) {
    class i extends mg {
      insert(f, h) {
        return this.key && this.key.endsWith("global") && (this.before = ba), super.insert(f, h);
      }
    }
    const u = pS({
      key: "css",
      insertionPoint: n ? ba : void 0
    }, i);
    if (l) {
      const s = u.insert;
      u.insert = (...f) => (f[1].styles.match(/^@layer\s+[^{]*$/) || (f[1].styles = `@layer mui {${f[1].styles}}`), s(...f));
    }
    return u;
  }
}
function yS(n) {
  const {
    injectFirst: l,
    enableCssLayer: i,
    children: u
  } = n, s = Y.useMemo(() => {
    const f = `${l}-${i}`;
    if (typeof document == "object" && Js.has(f))
      return Js.get(f);
    const h = gS(l, i);
    return Js.set(f, h), h;
  }, [l, i]);
  return s ? /* @__PURE__ */ J.jsx(nS, {
    value: s,
    children: u
  }) : u;
}
function vS(n) {
  return n == null || Object.keys(n).length === 0;
}
function Rg(n) {
  const {
    styles: l,
    defaultTheme: i = {}
  } = n, u = typeof l == "function" ? (s) => l(vS(s) ? i : s) : l;
  return /* @__PURE__ */ J.jsx(uS, {
    styles: u
  });
}
function bS(n, l) {
  return gf(n, l);
}
function SS(n, l) {
  Array.isArray(n.__emotion_styles) && (n.__emotion_styles = l(n.__emotion_styles));
}
const _p = [];
function Sa(n) {
  return _p[0] = n, so(_p);
}
var Ws = { exports: {} }, jt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rp;
function xS() {
  if (Rp) return jt;
  Rp = 1;
  var n = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.view_transition"), _ = Symbol.for("react.client.reference");
  function M(C) {
    if (typeof C == "object" && C !== null) {
      var z = C.$$typeof;
      switch (z) {
        case n:
          switch (C = C.type, C) {
            case i:
            case s:
            case u:
            case y:
            case p:
            case A:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case h:
                case m:
                case S:
                case v:
                  return C;
                case f:
                  return C;
                default:
                  return z;
              }
          }
        case l:
          return z;
      }
    }
  }
  return jt.ContextConsumer = f, jt.ContextProvider = h, jt.Element = n, jt.ForwardRef = m, jt.Fragment = i, jt.Lazy = S, jt.Memo = v, jt.Portal = l, jt.Profiler = s, jt.StrictMode = u, jt.Suspense = y, jt.SuspenseList = p, jt.isContextConsumer = function(C) {
    return M(C) === f;
  }, jt.isContextProvider = function(C) {
    return M(C) === h;
  }, jt.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === n;
  }, jt.isForwardRef = function(C) {
    return M(C) === m;
  }, jt.isFragment = function(C) {
    return M(C) === i;
  }, jt.isLazy = function(C) {
    return M(C) === S;
  }, jt.isMemo = function(C) {
    return M(C) === v;
  }, jt.isPortal = function(C) {
    return M(C) === l;
  }, jt.isProfiler = function(C) {
    return M(C) === s;
  }, jt.isStrictMode = function(C) {
    return M(C) === u;
  }, jt.isSuspense = function(C) {
    return M(C) === y;
  }, jt.isSuspenseList = function(C) {
    return M(C) === p;
  }, jt.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === i || C === s || C === u || C === y || C === p || typeof C == "object" && C !== null && (C.$$typeof === S || C.$$typeof === v || C.$$typeof === h || C.$$typeof === f || C.$$typeof === m || C.$$typeof === _ || C.getModuleId !== void 0);
  }, jt.typeOf = M, jt;
}
var Bp;
function ES() {
  return Bp || (Bp = 1, Ws.exports = /* @__PURE__ */ xS()), Ws.exports;
}
var Bg = /* @__PURE__ */ ES();
function Tn(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const l = Object.getPrototypeOf(n);
  return (l === null || l === Object.prototype || Object.getPrototypeOf(l) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function Dg(n) {
  if (/* @__PURE__ */ Y.isValidElement(n) || Bg.isValidElementType(n) || !Tn(n))
    return n;
  const l = {};
  return Object.keys(n).forEach((i) => {
    l[i] = Dg(n[i]);
  }), l;
}
function Ae(n, l, i = {
  clone: !0
}) {
  const u = i.clone ? {
    ...n
  } : n;
  return Tn(n) && Tn(l) && Object.keys(l).forEach((s) => {
    /* @__PURE__ */ Y.isValidElement(l[s]) || Bg.isValidElementType(l[s]) ? u[s] = l[s] : Tn(l[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(n, s) && Tn(n[s]) ? u[s] = Ae(n[s], l[s], i) : i.clone ? u[s] = Tn(l[s]) ? Dg(l[s]) : l[s] : u[s] = l[s];
  }), u;
}
const TS = (n) => {
  const l = Object.keys(n).map((i) => ({
    key: i,
    val: n[i]
  })) || [];
  return l.sort((i, u) => i.val - u.val), l.reduce((i, u) => ({
    ...i,
    [u.key]: u.val
  }), {});
};
function AS(n) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: l = {
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
    unit: i = "px",
    step: u = 5,
    ...s
  } = n, f = TS(l), h = Object.keys(f);
  function m(A) {
    return `@media (min-width:${typeof l[A] == "number" ? l[A] : A}${i})`;
  }
  function y(A) {
    return `@media (max-width:${(typeof l[A] == "number" ? l[A] : A) - u / 100}${i})`;
  }
  function p(A, _) {
    const M = h.indexOf(_);
    return `@media (min-width:${typeof l[A] == "number" ? l[A] : A}${i}) and (max-width:${(M !== -1 && typeof l[h[M]] == "number" ? l[h[M]] : _) - u / 100}${i})`;
  }
  function v(A) {
    return h.indexOf(A) + 1 < h.length ? p(A, h[h.indexOf(A) + 1]) : m(A);
  }
  function S(A) {
    const _ = h.indexOf(A);
    return _ === 0 ? m(h[1]) : _ === h.length - 1 ? y(h[_]) : p(A, h[h.indexOf(A) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: h,
    values: f,
    up: m,
    down: y,
    between: p,
    only: v,
    not: S,
    unit: i,
    ...s
  };
}
function Dp(n, l) {
  if (!n.containerQueries)
    return l;
  const i = Object.keys(l).filter((u) => u.startsWith("@container")).sort((u, s) => {
    const f = /min-width:\s*([0-9.]+)/;
    return +(u.match(f)?.[1] || 0) - +(s.match(f)?.[1] || 0);
  });
  return i.length ? i.reduce((u, s) => {
    const f = l[s];
    return delete u[s], u[s] = f, u;
  }, {
    ...l
  }) : l;
}
function CS(n, l) {
  return l === "@" || l.startsWith("@") && (n.some((i) => l.startsWith(`@${i}`)) || !!l.match(/^@\d/));
}
function MS(n, l) {
  const i = l.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i)
    return null;
  const [, u, s] = i, f = Number.isNaN(+u) ? u || 0 : +u;
  return n.containerQueries(s).up(f);
}
function OS(n) {
  const l = (f, h) => f.replace("@media", h ? `@container ${h}` : "@container");
  function i(f, h) {
    f.up = (...m) => l(n.breakpoints.up(...m), h), f.down = (...m) => l(n.breakpoints.down(...m), h), f.between = (...m) => l(n.breakpoints.between(...m), h), f.only = (...m) => l(n.breakpoints.only(...m), h), f.not = (...m) => {
      const y = l(n.breakpoints.not(...m), h);
      return y.includes("not all and") ? y.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : y;
    };
  }
  const u = {}, s = (f) => (i(u, f), u);
  return i(s), {
    ...n,
    containerQueries: s
  };
}
const _S = {
  borderRadius: 4
};
function hi(n, l) {
  return l ? Ae(n, l, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : n;
}
const fo = {
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
}, Np = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (n) => `@media (min-width:${fo[n]}px)`
}, RS = {
  containerQueries: (n) => ({
    up: (l) => {
      let i = typeof l == "number" ? l : fo[l] || l;
      return typeof i == "number" && (i = `${i}px`), n ? `@container ${n} (min-width:${i})` : `@container (min-width:${i})`;
    }
  })
};
function sn(n, l, i) {
  const u = n.theme || {};
  if (Array.isArray(l)) {
    const f = u.breakpoints || Np;
    return l.reduce((h, m, y) => (h[f.up(f.keys[y])] = i(l[y]), h), {});
  }
  if (typeof l == "object") {
    const f = u.breakpoints || Np;
    return Object.keys(l).reduce((h, m) => {
      if (CS(f.keys, m)) {
        const y = MS(u.containerQueries ? u : RS, m);
        y && (h[y] = i(l[m], m));
      } else if (Object.keys(f.values || fo).includes(m)) {
        const y = f.up(m);
        h[y] = i(l[m], m);
      } else {
        const y = m;
        h[y] = l[y];
      }
      return h;
    }, {});
  }
  return i(l);
}
function Ng(n = {}) {
  return n.keys?.reduce((i, u) => {
    const s = n.up(u);
    return i[s] = {}, i;
  }, {}) || {};
}
function yf(n, l) {
  return n.reduce((i, u) => {
    const s = i[u];
    return (!s || Object.keys(s).length === 0) && delete i[u], i;
  }, l);
}
function BS(n, ...l) {
  const i = Ng(n), u = [i, ...l].reduce((s, f) => Ae(s, f), {});
  return yf(Object.keys(i), u);
}
function DS(n, l) {
  if (typeof n != "object")
    return {};
  const i = {}, u = Object.keys(l);
  return Array.isArray(n) ? u.forEach((s, f) => {
    f < n.length && (i[s] = !0);
  }) : u.forEach((s) => {
    n[s] != null && (i[s] = !0);
  }), i;
}
function Ps({
  values: n,
  breakpoints: l,
  base: i
}) {
  const u = i || DS(n, l), s = Object.keys(u);
  if (s.length === 0)
    return n;
  let f;
  return s.reduce((h, m, y) => (Array.isArray(n) ? (h[m] = n[y] != null ? n[y] : n[f], f = y) : typeof n == "object" ? (h[m] = n[m] != null ? n[m] : n[f], f = m) : h[m] = n, h), {});
}
function Cn(n) {
  if (typeof n != "string")
    throw new Error(Ia(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function xn(n, l, i = !0) {
  if (!l || typeof l != "string")
    return null;
  if (n && n.vars && i) {
    const u = `vars.${l}`.split(".").reduce((s, f) => s && s[f] ? s[f] : null, n);
    if (u != null)
      return u;
  }
  return l.split(".").reduce((u, s) => u && u[s] != null ? u[s] : null, n);
}
function ao(n, l, i, u = i) {
  let s;
  return typeof n == "function" ? s = n(i) : Array.isArray(n) ? s = n[i] || u : s = xn(n, i) || u, l && (s = l(s, u, n)), s;
}
function te(n) {
  const {
    prop: l,
    cssProperty: i = n.prop,
    themeKey: u,
    transform: s
  } = n, f = (h) => {
    if (h[l] == null)
      return null;
    const m = h[l], y = h.theme, p = xn(y, u) || {};
    return sn(h, m, (S) => {
      let A = ao(p, s, S);
      return S === A && typeof S == "string" && (A = ao(p, s, `${l}${S === "default" ? "" : Cn(S)}`, S)), i === !1 ? A : {
        [i]: A
      };
    });
  };
  return f.propTypes = {}, f.filterProps = [l], f;
}
function NS(n) {
  const l = {};
  return (i) => (l[i] === void 0 && (l[i] = n(i)), l[i]);
}
const HS = {
  m: "margin",
  p: "padding"
}, zS = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Hp = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, wS = NS((n) => {
  if (n.length > 2)
    if (Hp[n])
      n = Hp[n];
    else
      return [n];
  const [l, i] = n.split(""), u = HS[l], s = zS[i] || "";
  return Array.isArray(s) ? s.map((f) => u + f) : [u + s];
}), Vf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Vf, ...Xf];
function Si(n, l, i, u) {
  const s = xn(n, l, !0) ?? i;
  return typeof s == "number" || typeof s == "string" ? (f) => typeof f == "string" ? f : typeof s == "string" ? s.startsWith("var(") && f === 0 ? 0 : s.startsWith("var(") && f === 1 ? s : `calc(${f} * ${s})` : s * f : Array.isArray(s) ? (f) => {
    if (typeof f == "string")
      return f;
    const h = Math.abs(f), m = s[h];
    return f >= 0 ? m : typeof m == "number" ? -m : typeof m == "string" && m.startsWith("var(") ? `calc(-1 * ${m})` : `-${m}`;
  } : typeof s == "function" ? s : () => {
  };
}
function ho(n) {
  return Si(n, "spacing", 8);
}
function Ja(n, l) {
  return typeof l == "string" || l == null ? l : n(l);
}
function LS(n, l) {
  return (i) => n.reduce((u, s) => (u[s] = Ja(l, i), u), {});
}
function US(n, l, i, u) {
  if (!l.includes(i))
    return null;
  const s = wS(i), f = LS(s, u), h = n[i];
  return sn(n, h, f);
}
function Hg(n, l) {
  const i = ho(n.theme);
  return Object.keys(n).map((u) => US(n, l, u, i)).reduce(hi, {});
}
function It(n) {
  return Hg(n, Vf);
}
It.propTypes = {};
It.filterProps = Vf;
function Jt(n) {
  return Hg(n, Xf);
}
Jt.propTypes = {};
Jt.filterProps = Xf;
function zg(n = 8, l = ho({
  spacing: n
})) {
  if (n.mui)
    return n;
  const i = (...u) => (u.length === 0 ? [1] : u).map((f) => {
    const h = l(f);
    return typeof h == "number" ? `${h}px` : h;
  }).join(" ");
  return i.mui = !0, i;
}
function mo(...n) {
  const l = n.reduce((u, s) => (s.filterProps.forEach((f) => {
    u[f] = s;
  }), u), {}), i = (u) => Object.keys(u).reduce((s, f) => l[f] ? hi(s, l[f](u)) : s, {});
  return i.propTypes = {}, i.filterProps = n.reduce((u, s) => u.concat(s.filterProps), []), i;
}
function nn(n) {
  return typeof n != "number" ? n : `${n}px solid`;
}
function an(n, l) {
  return te({
    prop: n,
    themeKey: "borders",
    transform: l
  });
}
const GS = an("border", nn), jS = an("borderTop", nn), kS = an("borderRight", nn), $S = an("borderBottom", nn), qS = an("borderLeft", nn), YS = an("borderColor"), VS = an("borderTopColor"), XS = an("borderRightColor"), FS = an("borderBottomColor"), QS = an("borderLeftColor"), ZS = an("outline", nn), KS = an("outlineColor"), po = (n) => {
  if (n.borderRadius !== void 0 && n.borderRadius !== null) {
    const l = Si(n.theme, "shape.borderRadius", 4), i = (u) => ({
      borderRadius: Ja(l, u)
    });
    return sn(n, n.borderRadius, i);
  }
  return null;
};
po.propTypes = {};
po.filterProps = ["borderRadius"];
mo(GS, jS, kS, $S, qS, YS, VS, XS, FS, QS, po, ZS, KS);
const go = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const l = Si(n.theme, "spacing", 8), i = (u) => ({
      gap: Ja(l, u)
    });
    return sn(n, n.gap, i);
  }
  return null;
};
go.propTypes = {};
go.filterProps = ["gap"];
const yo = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const l = Si(n.theme, "spacing", 8), i = (u) => ({
      columnGap: Ja(l, u)
    });
    return sn(n, n.columnGap, i);
  }
  return null;
};
yo.propTypes = {};
yo.filterProps = ["columnGap"];
const vo = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const l = Si(n.theme, "spacing", 8), i = (u) => ({
      rowGap: Ja(l, u)
    });
    return sn(n, n.rowGap, i);
  }
  return null;
};
vo.propTypes = {};
vo.filterProps = ["rowGap"];
const IS = te({
  prop: "gridColumn"
}), JS = te({
  prop: "gridRow"
}), WS = te({
  prop: "gridAutoFlow"
}), PS = te({
  prop: "gridAutoColumns"
}), t2 = te({
  prop: "gridAutoRows"
}), e2 = te({
  prop: "gridTemplateColumns"
}), n2 = te({
  prop: "gridTemplateRows"
}), a2 = te({
  prop: "gridTemplateAreas"
}), r2 = te({
  prop: "gridArea"
});
mo(go, yo, vo, IS, JS, WS, PS, t2, e2, n2, a2, r2);
function el(n, l) {
  return l === "grey" ? l : n;
}
const l2 = te({
  prop: "color",
  themeKey: "palette",
  transform: el
}), i2 = te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: el
}), u2 = te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: el
});
mo(l2, i2, u2);
function Ye(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const o2 = te({
  prop: "width",
  transform: Ye
}), Ff = (n) => {
  if (n.maxWidth !== void 0 && n.maxWidth !== null) {
    const l = (i) => {
      const u = n.theme?.breakpoints?.values?.[i] || fo[i];
      return u ? n.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${u}${n.theme.breakpoints.unit}`
      } : {
        maxWidth: u
      } : {
        maxWidth: Ye(i)
      };
    };
    return sn(n, n.maxWidth, l);
  }
  return null;
};
Ff.filterProps = ["maxWidth"];
const c2 = te({
  prop: "minWidth",
  transform: Ye
}), s2 = te({
  prop: "height",
  transform: Ye
}), f2 = te({
  prop: "maxHeight",
  transform: Ye
}), d2 = te({
  prop: "minHeight",
  transform: Ye
});
te({
  prop: "size",
  cssProperty: "width",
  transform: Ye
});
te({
  prop: "size",
  cssProperty: "height",
  transform: Ye
});
const h2 = te({
  prop: "boxSizing"
});
mo(o2, Ff, c2, s2, f2, d2, h2);
const xi = {
  // borders
  border: {
    themeKey: "borders",
    transform: nn
  },
  borderTop: {
    themeKey: "borders",
    transform: nn
  },
  borderRight: {
    themeKey: "borders",
    transform: nn
  },
  borderBottom: {
    themeKey: "borders",
    transform: nn
  },
  borderLeft: {
    themeKey: "borders",
    transform: nn
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
    transform: nn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: po
  },
  // palette
  color: {
    themeKey: "palette",
    transform: el
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: el
  },
  backgroundColor: {
    themeKey: "palette",
    transform: el
  },
  // spacing
  p: {
    style: Jt
  },
  pt: {
    style: Jt
  },
  pr: {
    style: Jt
  },
  pb: {
    style: Jt
  },
  pl: {
    style: Jt
  },
  px: {
    style: Jt
  },
  py: {
    style: Jt
  },
  padding: {
    style: Jt
  },
  paddingTop: {
    style: Jt
  },
  paddingRight: {
    style: Jt
  },
  paddingBottom: {
    style: Jt
  },
  paddingLeft: {
    style: Jt
  },
  paddingX: {
    style: Jt
  },
  paddingY: {
    style: Jt
  },
  paddingInline: {
    style: Jt
  },
  paddingInlineStart: {
    style: Jt
  },
  paddingInlineEnd: {
    style: Jt
  },
  paddingBlock: {
    style: Jt
  },
  paddingBlockStart: {
    style: Jt
  },
  paddingBlockEnd: {
    style: Jt
  },
  m: {
    style: It
  },
  mt: {
    style: It
  },
  mr: {
    style: It
  },
  mb: {
    style: It
  },
  ml: {
    style: It
  },
  mx: {
    style: It
  },
  my: {
    style: It
  },
  margin: {
    style: It
  },
  marginTop: {
    style: It
  },
  marginRight: {
    style: It
  },
  marginBottom: {
    style: It
  },
  marginLeft: {
    style: It
  },
  marginX: {
    style: It
  },
  marginY: {
    style: It
  },
  marginInline: {
    style: It
  },
  marginInlineStart: {
    style: It
  },
  marginInlineEnd: {
    style: It
  },
  marginBlock: {
    style: It
  },
  marginBlockStart: {
    style: It
  },
  marginBlockEnd: {
    style: It
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (n) => ({
      "@media print": {
        display: n
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
    style: go
  },
  rowGap: {
    style: vo
  },
  columnGap: {
    style: yo
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
    transform: Ye
  },
  maxWidth: {
    style: Ff
  },
  minWidth: {
    transform: Ye
  },
  height: {
    transform: Ye
  },
  maxHeight: {
    transform: Ye
  },
  minHeight: {
    transform: Ye
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
function m2(...n) {
  const l = n.reduce((u, s) => u.concat(Object.keys(s)), []), i = new Set(l);
  return n.every((u) => i.size === Object.keys(u).length);
}
function p2(n, l) {
  return typeof n == "function" ? n(l) : n;
}
function g2() {
  function n(i, u, s, f) {
    const h = {
      [i]: u,
      theme: s
    }, m = f[i];
    if (!m)
      return {
        [i]: u
      };
    const {
      cssProperty: y = i,
      themeKey: p,
      transform: v,
      style: S
    } = m;
    if (u == null)
      return null;
    if (p === "typography" && u === "inherit")
      return {
        [i]: u
      };
    const A = xn(s, p) || {};
    return S ? S(h) : sn(h, u, (M) => {
      let C = ao(A, v, M);
      return M === C && typeof M == "string" && (C = ao(A, v, `${i}${M === "default" ? "" : Cn(M)}`, M)), y === !1 ? C : {
        [y]: C
      };
    });
  }
  function l(i) {
    const {
      sx: u,
      theme: s = {},
      nested: f
    } = i || {};
    if (!u)
      return null;
    const h = s.unstable_sxConfig ?? xi;
    function m(y) {
      let p = y;
      if (typeof y == "function")
        p = y(s);
      else if (typeof y != "object")
        return y;
      if (!p)
        return null;
      const v = Ng(s.breakpoints), S = Object.keys(v);
      let A = v;
      return Object.keys(p).forEach((_) => {
        const M = p2(p[_], s);
        if (M != null)
          if (typeof M == "object")
            if (h[_])
              A = hi(A, n(_, M, s, h));
            else {
              const C = sn({
                theme: s
              }, M, (z) => ({
                [_]: z
              }));
              m2(C, M) ? A[_] = l({
                sx: M,
                theme: s,
                nested: !0
              }) : A = hi(A, C);
            }
          else
            A = hi(A, n(_, M, s, h));
      }), !f && s.modularCssLayers ? {
        "@layer sx": Dp(s, yf(S, A))
      } : Dp(s, yf(S, A));
    }
    return Array.isArray(u) ? u.map(m) : m(u);
  }
  return l;
}
const Wa = g2();
Wa.filterProps = ["sx"];
function y2(n, l) {
  const i = this;
  if (i.vars) {
    if (!i.colorSchemes?.[n] || typeof i.getColorSchemeSelector != "function")
      return {};
    let u = i.getColorSchemeSelector(n);
    return u === "&" ? l : ((u.includes("data-") || u.includes(".")) && (u = `*:where(${u.replace(/\s*&$/, "")}) &`), {
      [u]: l
    });
  }
  return i.palette.mode === n ? l : {};
}
function ul(n = {}, ...l) {
  const {
    breakpoints: i = {},
    palette: u = {},
    spacing: s,
    shape: f = {},
    ...h
  } = n, m = AS(i), y = zg(s);
  let p = Ae({
    breakpoints: m,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...u
    },
    spacing: y,
    shape: {
      ..._S,
      ...f
    }
  }, h);
  return p = OS(p), p.applyStyles = y2, p = l.reduce((v, S) => Ae(v, S), p), p.unstable_sxConfig = {
    ...xi,
    ...h?.unstable_sxConfig
  }, p.unstable_sx = function(S) {
    return Wa({
      sx: S,
      theme: this
    });
  }, p;
}
function v2(n) {
  return Object.keys(n).length === 0;
}
function Qf(n = null) {
  const l = Y.useContext(bi);
  return !l || v2(l) ? n : l;
}
const b2 = ul();
function bo(n = b2) {
  return Qf(n);
}
function tf(n) {
  const l = Sa(n);
  return n !== l && l.styles ? (l.styles.match(/^@layer\s+[^{]*$/) || (l.styles = `@layer global{${l.styles}}`), l) : n;
}
function wg({
  styles: n,
  themeId: l,
  defaultTheme: i = {}
}) {
  const u = bo(i), s = l && u[l] || u;
  let f = typeof n == "function" ? n(s) : n;
  return s.modularCssLayers && (Array.isArray(f) ? f = f.map((h) => tf(typeof h == "function" ? h(s) : h)) : f = tf(f)), /* @__PURE__ */ J.jsx(Rg, {
    styles: f
  });
}
const S2 = (n) => {
  const l = {
    systemProps: {},
    otherProps: {}
  }, i = n?.theme?.unstable_sxConfig ?? xi;
  return Object.keys(n).forEach((u) => {
    i[u] ? l.systemProps[u] = n[u] : l.otherProps[u] = n[u];
  }), l;
};
function Zf(n) {
  const {
    sx: l,
    ...i
  } = n, {
    systemProps: u,
    otherProps: s
  } = S2(i);
  let f;
  return Array.isArray(l) ? f = [u, ...l] : typeof l == "function" ? f = (...h) => {
    const m = l(...h);
    return Tn(m) ? {
      ...u,
      ...m
    } : u;
  } : f = {
    ...u,
    ...l
  }, {
    ...s,
    sx: f
  };
}
const zp = (n) => n, x2 = () => {
  let n = zp;
  return {
    configure(l) {
      n = l;
    },
    generate(l) {
      return n(l);
    },
    reset() {
      n = zp;
    }
  };
}, E2 = x2();
function Lg(n) {
  var l, i, u = "";
  if (typeof n == "string" || typeof n == "number") u += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (l = 0; l < s; l++) n[l] && (i = Lg(n[l])) && (u && (u += " "), u += i);
  } else for (i in n) n[i] && (u && (u += " "), u += i);
  return u;
}
function tr() {
  for (var n, l, i = 0, u = "", s = arguments.length; i < s; i++) (n = arguments[i]) && (l = Lg(n)) && (u && (u += " "), u += l);
  return u;
}
const T2 = {
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
function er(n, l, i = "Mui") {
  const u = T2[l];
  return u ? `${i}-${u}` : `${E2.generate(n)}-${l}`;
}
function Kf(n, l, i = "Mui") {
  const u = {};
  return l.forEach((s) => {
    u[s] = er(n, s, i);
  }), u;
}
function Ug(n) {
  const {
    variants: l,
    ...i
  } = n, u = {
    variants: l,
    style: Sa(i),
    isProcessed: !0
  };
  return u.style === i || l && l.forEach((s) => {
    typeof s.style != "function" && (s.style = Sa(s.style));
  }), u;
}
const A2 = ul();
function ef(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as";
}
function Ka(n, l) {
  return l && n && typeof n == "object" && n.styles && !n.styles.startsWith("@layer") && (n.styles = `@layer ${l}{${String(n.styles)}}`), n;
}
function C2(n) {
  return n ? (l, i) => i[n] : null;
}
function M2(n, l, i) {
  n.theme = _2(n.theme) ? i : n.theme[l] || n.theme;
}
function Pu(n, l, i) {
  const u = typeof l == "function" ? l(n) : l;
  if (Array.isArray(u))
    return u.flatMap((s) => Pu(n, s, i));
  if (Array.isArray(u?.variants)) {
    let s;
    if (u.isProcessed)
      s = i ? Ka(u.style, i) : u.style;
    else {
      const {
        variants: f,
        ...h
      } = u;
      s = i ? Ka(Sa(h), i) : h;
    }
    return Gg(n, u.variants, [s], i);
  }
  return u?.isProcessed ? i ? Ka(Sa(u.style), i) : u.style : i ? Ka(Sa(u), i) : u;
}
function Gg(n, l, i = [], u = void 0) {
  let s;
  t: for (let f = 0; f < l.length; f += 1) {
    const h = l[f];
    if (typeof h.props == "function") {
      if (s ??= {
        ...n,
        ...n.ownerState,
        ownerState: n.ownerState
      }, !h.props(s))
        continue;
    } else
      for (const m in h.props)
        if (n[m] !== h.props[m] && n.ownerState?.[m] !== h.props[m])
          continue t;
    typeof h.style == "function" ? (s ??= {
      ...n,
      ...n.ownerState,
      ownerState: n.ownerState
    }, i.push(u ? Ka(Sa(h.style(s)), u) : h.style(s))) : i.push(u ? Ka(Sa(h.style), u) : h.style);
  }
  return i;
}
function jg(n = {}) {
  const {
    themeId: l,
    defaultTheme: i = A2,
    rootShouldForwardProp: u = ef,
    slotShouldForwardProp: s = ef
  } = n;
  function f(m) {
    M2(m, l, i);
  }
  return (m, y = {}) => {
    SS(m, (q) => q.filter((X) => X !== Wa));
    const {
      name: p,
      slot: v,
      skipVariantsResolver: S,
      skipSx: A,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: _ = C2(B2(v)),
      ...M
    } = y, C = p && p.startsWith("Mui") || v ? "components" : "custom", z = S !== void 0 ? S : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      v && v !== "Root" && v !== "root" || !1
    ), k = A || !1;
    let F = ef;
    v === "Root" || v === "root" ? F = u : v ? F = s : R2(m) && (F = void 0);
    const V = bS(m, {
      shouldForwardProp: F,
      label: O2(),
      ...M
    }), Q = (q) => {
      if (q.__emotion_real === q)
        return q;
      if (typeof q == "function")
        return function(P) {
          return Pu(P, q, P.theme.modularCssLayers ? C : void 0);
        };
      if (Tn(q)) {
        const X = Ug(q);
        return function(W) {
          return X.variants ? Pu(W, X, W.theme.modularCssLayers ? C : void 0) : W.theme.modularCssLayers ? Ka(X.style, C) : X.style;
        };
      }
      return q;
    }, w = (...q) => {
      const X = [], P = q.map(Q), W = [];
      if (X.push(f), p && _ && W.push(function(tt) {
        const ct = tt.theme.components?.[p]?.styleOverrides;
        if (!ct)
          return null;
        const N = {};
        for (const Z in ct)
          N[Z] = Pu(tt, ct[Z], tt.theme.modularCssLayers ? "theme" : void 0);
        return _(tt, N);
      }), p && !z && W.push(function(tt) {
        const ct = tt.theme?.components?.[p]?.variants;
        return ct ? Gg(tt, ct, [], tt.theme.modularCssLayers ? "theme" : void 0) : null;
      }), k || W.push(Wa), Array.isArray(P[0])) {
        const b = P.shift(), tt = new Array(X.length).fill(""), I = new Array(W.length).fill("");
        let ct;
        ct = [...tt, ...b, ...I], ct.raw = [...tt, ...b.raw, ...I], X.unshift(ct);
      }
      const ut = [...X, ...P, ...W], at = V(...ut);
      return m.muiName && (at.muiName = m.muiName), at;
    };
    return V.withConfig && (w.withConfig = V.withConfig), w;
  };
}
function O2(n, l) {
  return void 0;
}
function _2(n) {
  for (const l in n)
    return !1;
  return !0;
}
function R2(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96;
}
function B2(n) {
  return n && n.charAt(0).toLowerCase() + n.slice(1);
}
const If = jg();
function ro(n, l, i = !1) {
  const u = {
    ...l
  };
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      const f = s;
      if (f === "components" || f === "slots")
        u[f] = {
          ...n[f],
          ...u[f]
        };
      else if (f === "componentsProps" || f === "slotProps") {
        const h = n[f], m = l[f];
        if (!m)
          u[f] = h || {};
        else if (!h)
          u[f] = m;
        else {
          u[f] = {
            ...m
          };
          for (const y in h)
            if (Object.prototype.hasOwnProperty.call(h, y)) {
              const p = y;
              u[f][p] = ro(h[p], m[p], i);
            }
        }
      } else f === "className" && i && l.className ? u.className = tr(n?.className, l?.className) : f === "style" && i && l.style ? u.style = {
        ...n?.style,
        ...l?.style
      } : u[f] === void 0 && (u[f] = n[f]);
    }
  return u;
}
function D2(n) {
  const {
    theme: l,
    name: i,
    props: u
  } = n;
  return !l || !l.components || !l.components[i] || !l.components[i].defaultProps ? u : ro(l.components[i].defaultProps, u);
}
function Jf({
  props: n,
  name: l,
  defaultTheme: i,
  themeId: u
}) {
  let s = bo(i);
  return u && (s = s[u] || s), D2({
    theme: s,
    name: l,
    props: n
  });
}
const kg = typeof window < "u" ? Y.useLayoutEffect : Y.useEffect;
function N2(n, l = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(l, Math.min(n, i));
}
function Wf(n, l = 0, i = 1) {
  return N2(n, l, i);
}
function H2(n) {
  n = n.slice(1);
  const l = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let i = n.match(l);
  return i && i[0].length === 1 && (i = i.map((u) => u + u)), i ? `rgb${i.length === 4 ? "a" : ""}(${i.map((u, s) => s < 3 ? parseInt(u, 16) : Math.round(parseInt(u, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function xa(n) {
  if (n.type)
    return n;
  if (n.charAt(0) === "#")
    return xa(H2(n));
  const l = n.indexOf("("), i = n.substring(0, l);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(Ia(9, n));
  let u = n.substring(l + 1, n.length - 1), s;
  if (i === "color") {
    if (u = u.split(" "), s = u.shift(), u.length === 4 && u[3].charAt(0) === "/" && (u[3] = u[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(Ia(10, s));
  } else
    u = u.split(",");
  return u = u.map((f) => parseFloat(f)), {
    type: i,
    values: u,
    colorSpace: s
  };
}
const z2 = (n) => {
  const l = xa(n);
  return l.values.slice(0, 3).map((i, u) => l.type.includes("hsl") && u !== 0 ? `${i}%` : i).join(" ");
}, fi = (n, l) => {
  try {
    return z2(n);
  } catch {
    return n;
  }
};
function So(n) {
  const {
    type: l,
    colorSpace: i
  } = n;
  let {
    values: u
  } = n;
  return l.includes("rgb") ? u = u.map((s, f) => f < 3 ? parseInt(s, 10) : s) : l.includes("hsl") && (u[1] = `${u[1]}%`, u[2] = `${u[2]}%`), l.includes("color") ? u = `${i} ${u.join(" ")}` : u = `${u.join(", ")}`, `${l}(${u})`;
}
function $g(n) {
  n = xa(n);
  const {
    values: l
  } = n, i = l[0], u = l[1] / 100, s = l[2] / 100, f = u * Math.min(s, 1 - s), h = (p, v = (p + i / 30) % 12) => s - f * Math.max(Math.min(v - 3, 9 - v, 1), -1);
  let m = "rgb";
  const y = [Math.round(h(0) * 255), Math.round(h(8) * 255), Math.round(h(4) * 255)];
  return n.type === "hsla" && (m += "a", y.push(l[3])), So({
    type: m,
    values: y
  });
}
function vf(n) {
  n = xa(n);
  let l = n.type === "hsl" || n.type === "hsla" ? xa($g(n)).values : n.values;
  return l = l.map((i) => (n.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)), Number((0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]).toFixed(3));
}
function w2(n, l) {
  const i = vf(n), u = vf(l);
  return (Math.max(i, u) + 0.05) / (Math.min(i, u) + 0.05);
}
function Pf(n, l) {
  return n = xa(n), l = Wf(l), (n.type === "rgb" || n.type === "hsl") && (n.type += "a"), n.type === "color" ? n.values[3] = `/${l}` : n.values[3] = l, So(n);
}
function Xa(n, l, i) {
  try {
    return Pf(n, l);
  } catch {
    return n;
  }
}
function xo(n, l) {
  if (n = xa(n), l = Wf(l), n.type.includes("hsl"))
    n.values[2] *= 1 - l;
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      n.values[i] *= 1 - l;
  return So(n);
}
function zt(n, l, i) {
  try {
    return xo(n, l);
  } catch {
    return n;
  }
}
function Eo(n, l) {
  if (n = xa(n), l = Wf(l), n.type.includes("hsl"))
    n.values[2] += (100 - n.values[2]) * l;
  else if (n.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1)
      n.values[i] += (255 - n.values[i]) * l;
  else if (n.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      n.values[i] += (1 - n.values[i]) * l;
  return So(n);
}
function wt(n, l, i) {
  try {
    return Eo(n, l);
  } catch {
    return n;
  }
}
function L2(n, l = 0.15) {
  return vf(n) > 0.5 ? xo(n, l) : Eo(n, l);
}
function Fu(n, l, i) {
  try {
    return L2(n, l);
  } catch {
    return n;
  }
}
const qg = /* @__PURE__ */ Y.createContext(null);
function t0() {
  return Y.useContext(qg);
}
const U2 = typeof Symbol == "function" && Symbol.for, G2 = U2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function j2(n, l) {
  return typeof l == "function" ? l(n) : {
    ...n,
    ...l
  };
}
function k2(n) {
  const {
    children: l,
    theme: i
  } = n, u = t0(), s = Y.useMemo(() => {
    const f = u === null ? {
      ...i
    } : j2(u, i);
    return f != null && (f[G2] = u !== null), f;
  }, [i, u]);
  return /* @__PURE__ */ J.jsx(qg.Provider, {
    value: s,
    children: l
  });
}
const $2 = /* @__PURE__ */ Y.createContext();
function q2({
  value: n,
  ...l
}) {
  return /* @__PURE__ */ J.jsx($2.Provider, {
    value: n ?? !0,
    ...l
  });
}
const Yg = /* @__PURE__ */ Y.createContext(void 0);
function Y2({
  value: n,
  children: l
}) {
  return /* @__PURE__ */ J.jsx(Yg.Provider, {
    value: n,
    children: l
  });
}
function V2(n) {
  const {
    theme: l,
    name: i,
    props: u
  } = n;
  if (!l || !l.components || !l.components[i])
    return u;
  const s = l.components[i];
  return s.defaultProps ? ro(s.defaultProps, u, l.components.mergeClassNameAndStyle) : !s.styleOverrides && !s.variants ? ro(s, u, l.components.mergeClassNameAndStyle) : u;
}
function X2({
  props: n,
  name: l
}) {
  const i = Y.useContext(Yg);
  return V2({
    props: n,
    name: l,
    theme: {
      components: i
    }
  });
}
let wp = 0;
function F2(n) {
  const [l, i] = Y.useState(n), u = n || l;
  return Y.useEffect(() => {
    l == null && (wp += 1, i(`mui-${wp}`));
  }, [l]), u;
}
const Q2 = {
  ...ff
}, Lp = Q2.useId;
function Z2(n) {
  return Lp !== void 0 ? Lp() : F2(n);
}
function K2(n) {
  const l = Qf(), i = Z2() || "", {
    modularCssLayers: u
  } = n;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !u || l !== null ? s = "" : typeof u == "string" ? s = u.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, kg(() => {
    const f = document.querySelector("head");
    if (!f)
      return;
    const h = f.firstChild;
    if (s) {
      if (h && h.hasAttribute?.("data-mui-layer-order") && h.getAttribute("data-mui-layer-order") === i)
        return;
      const m = document.createElement("style");
      m.setAttribute("data-mui-layer-order", i), m.textContent = s, f.prepend(m);
    } else
      f.querySelector(`style[data-mui-layer-order="${i}"]`)?.remove();
  }, [s, i]), s ? /* @__PURE__ */ J.jsx(wg, {
    styles: s
  }) : null;
}
const Up = {};
function Gp(n, l, i, u = !1) {
  return Y.useMemo(() => {
    const s = n && l[n] || l;
    if (typeof i == "function") {
      const f = i(s), h = n ? {
        ...l,
        [n]: f
      } : f;
      return u ? () => h : h;
    }
    return n ? {
      ...l,
      [n]: i
    } : {
      ...l,
      ...i
    };
  }, [n, l, i, u]);
}
function Vg(n) {
  const {
    children: l,
    theme: i,
    themeId: u
  } = n, s = Qf(Up), f = t0() || Up, h = Gp(u, s, i), m = Gp(u, f, i, !0), y = (u ? h[u] : h).direction === "rtl", p = K2(h);
  return /* @__PURE__ */ J.jsx(k2, {
    theme: m,
    children: /* @__PURE__ */ J.jsx(bi.Provider, {
      value: h,
      children: /* @__PURE__ */ J.jsx(q2, {
        value: y,
        children: /* @__PURE__ */ J.jsxs(Y2, {
          value: u ? h[u].components : h.components,
          children: [p, l]
        })
      })
    })
  });
}
const jp = {
  theme: void 0
};
function I2(n) {
  let l, i;
  return function(s) {
    let f = l;
    return (f === void 0 || s.theme !== i) && (jp.theme = s.theme, f = Ug(n(jp)), l = f, i = s.theme), f;
  };
}
const e0 = "mode", n0 = "color-scheme", J2 = "data-color-scheme";
function W2(n) {
  const {
    defaultMode: l = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: u = "dark",
    modeStorageKey: s = e0,
    colorSchemeStorageKey: f = n0,
    attribute: h = J2,
    colorSchemeNode: m = "document.documentElement",
    nonce: y
  } = n || {};
  let p = "", v = h;
  if (h === "class" && (v = ".%s"), h === "data" && (v = "[data-%s]"), v.startsWith(".")) {
    const A = v.substring(1);
    p += `${m}.classList.remove('${A}'.replace('%s', light), '${A}'.replace('%s', dark));
      ${m}.classList.add('${A}'.replace('%s', colorScheme));`;
  }
  const S = v.match(/\[([^[\]]+)\]/);
  if (S) {
    const [A, _] = S[1].split("=");
    _ || (p += `${m}.removeAttribute('${A}'.replace('%s', light));
      ${m}.removeAttribute('${A}'.replace('%s', dark));`), p += `
      ${m}.setAttribute('${A}'.replace('%s', colorScheme), ${_ ? `${_}.replace('%s', colorScheme)` : '""'});`;
  } else
    p += `${m}.setAttribute('${v}', colorScheme);`;
  return /* @__PURE__ */ J.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? y : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${l}';
  const dark = localStorage.getItem('${f}-dark') || '${u}';
  const light = localStorage.getItem('${f}-light') || '${i}';
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
    ${p}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function P2() {
}
const tx = ({
  key: n,
  storageWindow: l
}) => (!l && typeof window < "u" && (l = window), {
  get(i) {
    if (typeof window > "u")
      return;
    if (!l)
      return i;
    let u;
    try {
      u = l.localStorage.getItem(n);
    } catch {
    }
    return u || i;
  },
  set: (i) => {
    if (l)
      try {
        l.localStorage.setItem(n, i);
      } catch {
      }
  },
  subscribe: (i) => {
    if (!l)
      return P2;
    const u = (s) => {
      const f = s.newValue;
      s.key === n && i(f);
    };
    return l.addEventListener("storage", u), () => {
      l.removeEventListener("storage", u);
    };
  }
});
function nf() {
}
function kp(n) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && n === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Xg(n, l) {
  if (n.mode === "light" || n.mode === "system" && n.systemMode === "light")
    return l("light");
  if (n.mode === "dark" || n.mode === "system" && n.systemMode === "dark")
    return l("dark");
}
function ex(n) {
  return Xg(n, (l) => {
    if (l === "light")
      return n.lightColorScheme;
    if (l === "dark")
      return n.darkColorScheme;
  });
}
function nx(n) {
  const {
    defaultMode: l = "light",
    defaultLightColorScheme: i,
    defaultDarkColorScheme: u,
    supportedColorSchemes: s = [],
    modeStorageKey: f = e0,
    colorSchemeStorageKey: h = n0,
    storageWindow: m = typeof window > "u" ? void 0 : window,
    storageManager: y = tx,
    noSsr: p = !1
  } = n, v = s.join(","), S = s.length > 1, A = Y.useMemo(() => y?.({
    key: f,
    storageWindow: m
  }), [y, f, m]), _ = Y.useMemo(() => y?.({
    key: `${h}-light`,
    storageWindow: m
  }), [y, h, m]), M = Y.useMemo(() => y?.({
    key: `${h}-dark`,
    storageWindow: m
  }), [y, h, m]), [C, z] = Y.useState(() => {
    const P = A?.get(l) || l, W = _?.get(i) || i, ut = M?.get(u) || u;
    return {
      mode: P,
      systemMode: kp(P),
      lightColorScheme: W,
      darkColorScheme: ut
    };
  }), [k, F] = Y.useState(p || !S);
  Y.useEffect(() => {
    F(!0);
  }, []);
  const V = ex(C), Q = Y.useCallback((P) => {
    z((W) => {
      if (P === W.mode)
        return W;
      const ut = P ?? l;
      return A?.set(ut), {
        ...W,
        mode: ut,
        systemMode: kp(ut)
      };
    });
  }, [A, l]), w = Y.useCallback((P) => {
    P ? typeof P == "string" ? P && !v.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : z((W) => {
      const ut = {
        ...W
      };
      return Xg(W, (at) => {
        at === "light" && (_?.set(P), ut.lightColorScheme = P), at === "dark" && (M?.set(P), ut.darkColorScheme = P);
      }), ut;
    }) : z((W) => {
      const ut = {
        ...W
      }, at = P.light === null ? i : P.light, b = P.dark === null ? u : P.dark;
      return at && (v.includes(at) ? (ut.lightColorScheme = at, _?.set(at)) : console.error(`\`${at}\` does not exist in \`theme.colorSchemes\`.`)), b && (v.includes(b) ? (ut.darkColorScheme = b, M?.set(b)) : console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`)), ut;
    }) : z((W) => (_?.set(i), M?.set(u), {
      ...W,
      lightColorScheme: i,
      darkColorScheme: u
    }));
  }, [v, _, M, i, u]), q = Y.useCallback((P) => {
    C.mode === "system" && z((W) => {
      const ut = P?.matches ? "dark" : "light";
      return W.systemMode === ut ? W : {
        ...W,
        systemMode: ut
      };
    });
  }, [C.mode]), X = Y.useRef(q);
  return X.current = q, Y.useEffect(() => {
    if (typeof window.matchMedia != "function" || !S)
      return;
    const P = (...ut) => X.current(...ut), W = window.matchMedia("(prefers-color-scheme: dark)");
    return W.addListener(P), P(W), () => {
      W.removeListener(P);
    };
  }, [S]), Y.useEffect(() => {
    if (S) {
      const P = A?.subscribe((at) => {
        (!at || ["light", "dark", "system"].includes(at)) && Q(at || l);
      }) || nf, W = _?.subscribe((at) => {
        (!at || v.match(at)) && w({
          light: at
        });
      }) || nf, ut = M?.subscribe((at) => {
        (!at || v.match(at)) && w({
          dark: at
        });
      }) || nf;
      return () => {
        P(), W(), ut();
      };
    }
  }, [w, Q, v, l, m, S, A, _, M]), {
    ...C,
    mode: k ? C.mode : void 0,
    systemMode: k ? C.systemMode : void 0,
    colorScheme: k ? V : void 0,
    setMode: Q,
    setColorScheme: w
  };
}
const ax = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function rx(n) {
  const {
    themeId: l,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: i = {},
    modeStorageKey: u = e0,
    colorSchemeStorageKey: s = n0,
    disableTransitionOnChange: f = !1,
    defaultColorScheme: h,
    resolveTheme: m
  } = n, y = {
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
  }, p = /* @__PURE__ */ Y.createContext(void 0), v = () => Y.useContext(p) || y, S = {}, A = {};
  function _(k) {
    const {
      children: F,
      theme: V,
      modeStorageKey: Q = u,
      colorSchemeStorageKey: w = s,
      disableTransitionOnChange: q = f,
      storageManager: X,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: W = typeof document > "u" ? void 0 : document,
      colorSchemeNode: ut = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: at = !1,
      disableStyleSheetGeneration: b = !1,
      defaultMode: tt = "system",
      forceThemeRerender: I = !1,
      noSsr: ct
    } = k, N = Y.useRef(!1), Z = t0(), rt = Y.useContext(p), xt = !!rt && !at, Ct = Y.useMemo(() => V || (typeof i == "function" ? i() : i), [V]), E = Ct[l], G = E || Ct, {
      colorSchemes: K = S,
      components: et = A,
      cssVarPrefix: ft
    } = G, pt = Object.keys(K).filter((xe) => !!K[xe]).join(","), gt = Y.useMemo(() => pt.split(","), [pt]), ue = typeof h == "string" ? h : h.light, Vt = typeof h == "string" ? h : h.dark, Ta = K[ue] && K[Vt] ? tt : K[G.defaultColorScheme]?.palette?.mode || G.palette?.mode, {
      mode: rr,
      setMode: lr,
      systemMode: fl,
      lightColorScheme: fn,
      darkColorScheme: ir,
      colorScheme: dl,
      setColorScheme: Ci
    } = nx({
      supportedColorSchemes: gt,
      defaultLightColorScheme: ue,
      defaultDarkColorScheme: Vt,
      modeStorageKey: Q,
      colorSchemeStorageKey: w,
      defaultMode: Ta,
      storageManager: X,
      storageWindow: P,
      noSsr: ct
    });
    let ur = rr, Se = dl;
    xt && (ur = rt.mode, Se = rt.colorScheme);
    let Qn = Se || G.defaultColorScheme;
    G.vars && !I && (Qn = G.defaultColorScheme);
    const Aa = Y.useMemo(() => {
      const xe = G.generateThemeVars?.() || G.vars, Xt = {
        ...G,
        components: et,
        colorSchemes: K,
        cssVarPrefix: ft,
        vars: xe
      };
      if (typeof Xt.generateSpacing == "function" && (Xt.spacing = Xt.generateSpacing()), Qn) {
        const se = K[Qn];
        se && typeof se == "object" && Object.keys(se).forEach((Xe) => {
          se[Xe] && typeof se[Xe] == "object" ? Xt[Xe] = {
            ...Xt[Xe],
            ...se[Xe]
          } : Xt[Xe] = se[Xe];
        });
      }
      return m ? m(Xt) : Xt;
    }, [G, Qn, et, K, ft]), Ca = G.colorSchemeSelector;
    kg(() => {
      if (Se && ut && Ca && Ca !== "media") {
        const xe = Ca;
        let Xt = Ca;
        if (xe === "class" && (Xt = ".%s"), xe === "data" && (Xt = "[data-%s]"), xe?.startsWith("data-") && !xe.includes("%s") && (Xt = `[${xe}="%s"]`), Xt.startsWith("."))
          ut.classList.remove(...gt.map((se) => Xt.substring(1).replace("%s", se))), ut.classList.add(Xt.substring(1).replace("%s", Se));
        else {
          const se = Xt.replace("%s", Se).match(/\[([^\]]+)\]/);
          if (se) {
            const [Xe, or] = se[1].split("=");
            or || gt.forEach((_o) => {
              ut.removeAttribute(Xe.replace(Se, _o));
            }), ut.setAttribute(Xe, or ? or.replace(/"|'/g, "") : "");
          } else
            ut.setAttribute(Xt, Se);
        }
      }
    }, [Se, Ca, ut, gt]), Y.useEffect(() => {
      let xe;
      if (q && N.current && W) {
        const Xt = W.createElement("style");
        Xt.appendChild(W.createTextNode(ax)), W.head.appendChild(Xt), window.getComputedStyle(W.body), xe = setTimeout(() => {
          W.head.removeChild(Xt);
        }, 1);
      }
      return () => {
        clearTimeout(xe);
      };
    }, [Se, q, W]), Y.useEffect(() => (N.current = !0, () => {
      N.current = !1;
    }), []);
    const Oo = Y.useMemo(() => ({
      allColorSchemes: gt,
      colorScheme: Se,
      darkColorScheme: ir,
      lightColorScheme: fn,
      mode: ur,
      setColorScheme: Ci,
      setMode: lr,
      systemMode: fl
    }), [gt, Se, ir, fn, ur, Ci, lr, fl, Aa.colorSchemeSelector]);
    let ye = !0;
    (b || G.cssVariables === !1 || xt && Z?.cssVarPrefix === ft) && (ye = !1);
    const Mi = /* @__PURE__ */ J.jsxs(Y.Fragment, {
      children: [/* @__PURE__ */ J.jsx(Vg, {
        themeId: E ? l : void 0,
        theme: Aa,
        children: F
      }), ye && /* @__PURE__ */ J.jsx(Rg, {
        styles: Aa.generateStyleSheets?.() || []
      })]
    });
    return xt ? Mi : /* @__PURE__ */ J.jsx(p.Provider, {
      value: Oo,
      children: Mi
    });
  }
  const M = typeof h == "string" ? h : h.light, C = typeof h == "string" ? h : h.dark;
  return {
    CssVarsProvider: _,
    useColorScheme: v,
    getInitColorSchemeScript: (k) => W2({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: M,
      defaultDarkColorScheme: C,
      modeStorageKey: u,
      ...k
    })
  };
}
function lx(n = "") {
  function l(...u) {
    if (!u.length)
      return "";
    const s = u[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n ? `${n}-` : ""}${s}${l(...u.slice(1))})` : `, ${s}`;
  }
  return (u, ...s) => `var(--${n ? `${n}-` : ""}${u}${l(...s)})`;
}
const $p = (n, l, i, u = []) => {
  let s = n;
  l.forEach((f, h) => {
    h === l.length - 1 ? Array.isArray(s) ? s[Number(f)] = i : s && typeof s == "object" && (s[f] = i) : s && typeof s == "object" && (s[f] || (s[f] = u.includes(f) ? [] : {}), s = s[f]);
  });
}, ix = (n, l, i) => {
  function u(s, f = [], h = []) {
    Object.entries(s).forEach(([m, y]) => {
      (!i || i && !i([...f, m])) && y != null && (typeof y == "object" && Object.keys(y).length > 0 ? u(y, [...f, m], Array.isArray(y) ? [...h, m] : h) : l([...f, m], y, h));
    });
  }
  u(n);
}, ux = (n, l) => typeof l == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((u) => n.includes(u)) || n[n.length - 1].toLowerCase().includes("opacity") ? l : `${l}px` : l;
function af(n, l) {
  const {
    prefix: i,
    shouldSkipGeneratingVar: u
  } = l || {}, s = {}, f = {}, h = {};
  return ix(
    n,
    (m, y, p) => {
      if ((typeof y == "string" || typeof y == "number") && (!u || !u(m, y))) {
        const v = `--${i ? `${i}-` : ""}${m.join("-")}`, S = ux(m, y);
        Object.assign(s, {
          [v]: S
        }), $p(f, m, `var(${v})`, p), $p(h, m, `var(${v}, ${S})`, p);
      }
    },
    (m) => m[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: f,
    varsWithDefaults: h
  };
}
function ox(n, l = {}) {
  const {
    getSelector: i = k,
    disableCssColorScheme: u,
    colorSchemeSelector: s,
    enableContrastVars: f
  } = l, {
    colorSchemes: h = {},
    components: m,
    defaultColorScheme: y = "light",
    ...p
  } = n, {
    vars: v,
    css: S,
    varsWithDefaults: A
  } = af(p, l);
  let _ = A;
  const M = {}, {
    [y]: C,
    ...z
  } = h;
  if (Object.entries(z || {}).forEach(([Q, w]) => {
    const {
      vars: q,
      css: X,
      varsWithDefaults: P
    } = af(w, l);
    _ = Ae(_, P), M[Q] = {
      css: X,
      vars: q
    };
  }), C) {
    const {
      css: Q,
      vars: w,
      varsWithDefaults: q
    } = af(C, l);
    _ = Ae(_, q), M[y] = {
      css: Q,
      vars: w
    };
  }
  function k(Q, w) {
    let q = s;
    if (s === "class" && (q = ".%s"), s === "data" && (q = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (q = `[${s}="%s"]`), Q) {
      if (q === "media")
        return n.defaultColorScheme === Q ? ":root" : {
          [`@media (prefers-color-scheme: ${h[Q]?.palette?.mode || Q})`]: {
            ":root": w
          }
        };
      if (q)
        return n.defaultColorScheme === Q ? `:root, ${q.replace("%s", String(Q))}` : q.replace("%s", String(Q));
    }
    return ":root";
  }
  return {
    vars: _,
    generateThemeVars: () => {
      let Q = {
        ...v
      };
      return Object.entries(M).forEach(([, {
        vars: w
      }]) => {
        Q = Ae(Q, w);
      }), Q;
    },
    generateStyleSheets: () => {
      const Q = [], w = n.defaultColorScheme || "light";
      function q(W, ut) {
        Object.keys(ut).length && Q.push(typeof W == "string" ? {
          [W]: {
            ...ut
          }
        } : W);
      }
      q(i(void 0, {
        ...S
      }), S);
      const {
        [w]: X,
        ...P
      } = M;
      if (X) {
        const {
          css: W
        } = X, ut = h[w]?.palette?.mode, at = !u && ut ? {
          colorScheme: ut,
          ...W
        } : {
          ...W
        };
        q(i(w, {
          ...at
        }), at);
      }
      return Object.entries(P).forEach(([W, {
        css: ut
      }]) => {
        const at = h[W]?.palette?.mode, b = !u && at ? {
          colorScheme: at,
          ...ut
        } : {
          ...ut
        };
        q(i(W, {
          ...b
        }), b);
      }), f && Q.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), Q;
    }
  };
}
function cx(n) {
  return function(i) {
    return n === "media" ? `@media (prefers-color-scheme: ${i})` : n ? n.startsWith("data-") && !n.includes("%s") ? `[${n}="${i}"] &` : n === "class" ? `.${i} &` : n === "data" ? `[data-${i}] &` : `${n.replace("%s", i)} &` : "&";
  };
}
function ol(n, l, i = void 0) {
  const u = {};
  for (const s in n) {
    const f = n[s];
    let h = "", m = !0;
    for (let y = 0; y < f.length; y += 1) {
      const p = f[y];
      p && (h += (m === !0 ? "" : " ") + l(p), m = !1, i && i[p] && (h += " " + i[p]));
    }
    u[s] = h;
  }
  return u;
}
const sx = ul(), fx = If("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (n, l) => {
    const {
      ownerState: i
    } = n;
    return [l.root, l[`maxWidth${Cn(String(i.maxWidth))}`], i.fixed && l.fixed, i.disableGutters && l.disableGutters];
  }
}), dx = (n) => Jf({
  props: n,
  name: "MuiContainer",
  defaultTheme: sx
}), hx = (n, l) => {
  const i = (y) => er(l, y), {
    classes: u,
    fixed: s,
    disableGutters: f,
    maxWidth: h
  } = n, m = {
    root: ["root", h && `maxWidth${Cn(String(h))}`, s && "fixed", f && "disableGutters"]
  };
  return ol(m, i, u);
};
function mx(n = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: l = fx,
    useThemeProps: i = dx,
    componentName: u = "MuiContainer"
  } = n, s = l(({
    theme: h,
    ownerState: m
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!m.disableGutters && {
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
    ownerState: m
  }) => m.fixed && Object.keys(h.breakpoints.values).reduce((y, p) => {
    const v = p, S = h.breakpoints.values[v];
    return S !== 0 && (y[h.breakpoints.up(v)] = {
      maxWidth: `${S}${h.breakpoints.unit}`
    }), y;
  }, {}), ({
    theme: h,
    ownerState: m
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...m.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [h.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(h.breakpoints.values.xs, 444)
      }
    },
    ...m.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    m.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [h.breakpoints.up(m.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${h.breakpoints.values[m.maxWidth]}${h.breakpoints.unit}`
      }
    }
  }));
  return /* @__PURE__ */ Y.forwardRef(function(m, y) {
    const p = i(m), {
      className: v,
      component: S = "div",
      disableGutters: A = !1,
      fixed: _ = !1,
      maxWidth: M = "lg",
      classes: C,
      ...z
    } = p, k = {
      ...p,
      component: S,
      disableGutters: A,
      fixed: _,
      maxWidth: M
    }, F = hx(k, u);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ J.jsx(s, {
        as: S,
        ownerState: k,
        className: tr(F.root, v),
        ref: y,
        ...z
      })
    );
  });
}
function px(n, l) {
  return /* @__PURE__ */ Y.isValidElement(n) && l.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    n.type.muiName ?? n.type?._payload?.value?.muiName
  ) !== -1;
}
const gx = (n, l) => n.filter((i) => l.includes(i)), cl = (n, l, i) => {
  const u = n.keys[0];
  Array.isArray(l) ? l.forEach((s, f) => {
    i((h, m) => {
      f <= n.keys.length - 1 && (f === 0 ? Object.assign(h, m) : h[n.up(n.keys[f])] = m);
    }, s);
  }) : l && typeof l == "object" ? (Object.keys(l).length > n.keys.length ? n.keys : gx(n.keys, Object.keys(l))).forEach((f) => {
    if (n.keys.includes(f)) {
      const h = l[f];
      h !== void 0 && i((m, y) => {
        u === f ? Object.assign(m, y) : m[n.up(f)] = y;
      }, h);
    }
  }) : (typeof l == "number" || typeof l == "string") && i((s, f) => {
    Object.assign(s, f);
  }, l);
};
function lo(n) {
  return `--Grid-${n}Spacing`;
}
function To(n) {
  return `--Grid-parent-${n}Spacing`;
}
const qp = "--Grid-columns", nl = "--Grid-parent-columns", yx = ({
  theme: n,
  ownerState: l
}) => {
  const i = {};
  return cl(n.breakpoints, l.size, (u, s) => {
    let f = {};
    s === "grow" && (f = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), s === "auto" && (f = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof s == "number" && (f = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${s} / var(${nl}) - (var(${nl}) - ${s}) * (var(${To("column")}) / var(${nl})))`
    }), u(i, f);
  }), i;
}, vx = ({
  theme: n,
  ownerState: l
}) => {
  const i = {};
  return cl(n.breakpoints, l.offset, (u, s) => {
    let f = {};
    s === "auto" && (f = {
      marginLeft: "auto"
    }), typeof s == "number" && (f = {
      marginLeft: s === 0 ? "0px" : `calc(100% * ${s} / var(${nl}) + var(${To("column")}) * ${s} / var(${nl}))`
    }), u(i, f);
  }), i;
}, bx = ({
  theme: n,
  ownerState: l
}) => {
  if (!l.container)
    return {};
  const i = {
    [qp]: 12
  };
  return cl(n.breakpoints, l.columns, (u, s) => {
    const f = s ?? 12;
    u(i, {
      [qp]: f,
      "> *": {
        [nl]: f
      }
    });
  }), i;
}, Sx = ({
  theme: n,
  ownerState: l
}) => {
  if (!l.container)
    return {};
  const i = {};
  return cl(n.breakpoints, l.rowSpacing, (u, s) => {
    const f = typeof s == "string" ? s : n.spacing?.(s);
    u(i, {
      [lo("row")]: f,
      "> *": {
        [To("row")]: f
      }
    });
  }), i;
}, xx = ({
  theme: n,
  ownerState: l
}) => {
  if (!l.container)
    return {};
  const i = {};
  return cl(n.breakpoints, l.columnSpacing, (u, s) => {
    const f = typeof s == "string" ? s : n.spacing?.(s);
    u(i, {
      [lo("column")]: f,
      "> *": {
        [To("column")]: f
      }
    });
  }), i;
}, Ex = ({
  theme: n,
  ownerState: l
}) => {
  if (!l.container)
    return {};
  const i = {};
  return cl(n.breakpoints, l.direction, (u, s) => {
    u(i, {
      flexDirection: s
    });
  }), i;
}, Tx = ({
  ownerState: n
}) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...n.container && {
    display: "flex",
    flexWrap: "wrap",
    ...n.wrap && n.wrap !== "wrap" && {
      flexWrap: n.wrap
    },
    gap: `var(${lo("row")}) var(${lo("column")})`
  }
}), Ax = (n) => {
  const l = [];
  return Object.entries(n).forEach(([i, u]) => {
    u !== !1 && u !== void 0 && l.push(`grid-${i}-${String(u)}`);
  }), l;
}, Cx = (n, l = "xs") => {
  function i(u) {
    return u === void 0 ? !1 : typeof u == "string" && !Number.isNaN(Number(u)) || typeof u == "number" && u > 0;
  }
  if (i(n))
    return [`spacing-${l}-${String(n)}`];
  if (typeof n == "object" && !Array.isArray(n)) {
    const u = [];
    return Object.entries(n).forEach(([s, f]) => {
      i(f) && u.push(`spacing-${s}-${String(f)}`);
    }), u;
  }
  return [];
}, Mx = (n) => n === void 0 ? [] : typeof n == "object" ? Object.entries(n).map(([l, i]) => `direction-${l}-${i}`) : [`direction-xs-${String(n)}`];
function Ox(n, l) {
  n.item !== void 0 && delete n.item, n.zeroMinWidth !== void 0 && delete n.zeroMinWidth, l.keys.forEach((i) => {
    n[i] !== void 0 && delete n[i];
  });
}
const _x = ul(), Rx = If("div", {
  name: "MuiGrid",
  slot: "Root"
});
function Bx(n) {
  return Jf({
    props: n,
    name: "MuiGrid",
    defaultTheme: _x
  });
}
function Dx(n = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: l = Rx,
    useThemeProps: i = Bx,
    useTheme: u = bo,
    componentName: s = "MuiGrid"
  } = n, f = (p, v) => {
    const {
      container: S,
      direction: A,
      spacing: _,
      wrap: M,
      size: C
    } = p, z = {
      root: ["root", S && "container", M !== "wrap" && `wrap-xs-${String(M)}`, ...Mx(A), ...Ax(C), ...S ? Cx(_, v.breakpoints.keys[0]) : []]
    };
    return ol(z, (k) => er(s, k), {});
  };
  function h(p, v, S = () => !0) {
    const A = {};
    return p === null || (Array.isArray(p) ? p.forEach((_, M) => {
      _ !== null && S(_) && v.keys[M] && (A[v.keys[M]] = _);
    }) : typeof p == "object" ? Object.keys(p).forEach((_) => {
      const M = p[_];
      M != null && S(M) && (A[_] = M);
    }) : A[v.keys[0]] = p), A;
  }
  const m = l(bx, xx, Sx, yx, Ex, Tx, vx), y = /* @__PURE__ */ Y.forwardRef(function(v, S) {
    const A = u(), _ = i(v), M = Zf(_);
    Ox(M, A.breakpoints);
    const {
      className: C,
      children: z,
      columns: k = 12,
      container: F = !1,
      component: V = "div",
      direction: Q = "row",
      wrap: w = "wrap",
      size: q = {},
      offset: X = {},
      spacing: P = 0,
      rowSpacing: W = P,
      columnSpacing: ut = P,
      unstable_level: at = 0,
      ...b
    } = M, tt = h(q, A.breakpoints, (E) => E !== !1), I = h(X, A.breakpoints), ct = v.columns ?? (at ? void 0 : k), N = v.spacing ?? (at ? void 0 : P), Z = v.rowSpacing ?? v.spacing ?? (at ? void 0 : W), rt = v.columnSpacing ?? v.spacing ?? (at ? void 0 : ut), xt = {
      ...M,
      level: at,
      columns: ct,
      container: F,
      direction: Q,
      wrap: w,
      spacing: N,
      rowSpacing: Z,
      columnSpacing: rt,
      size: tt,
      offset: I
    }, Ct = f(xt, A);
    return /* @__PURE__ */ J.jsx(m, {
      ref: S,
      as: V,
      ownerState: xt,
      className: tr(Ct.root, C),
      ...b,
      children: Y.Children.map(z, (E) => /* @__PURE__ */ Y.isValidElement(E) && px(E, ["Grid"]) && F && E.props.container ? /* @__PURE__ */ Y.cloneElement(E, {
        unstable_level: E.props?.unstable_level ?? at + 1
      }) : E)
    });
  });
  return y.muiName = "Grid", y;
}
const Nx = ul(), Hx = If("div", {
  name: "MuiStack",
  slot: "Root"
});
function zx(n) {
  return Jf({
    props: n,
    name: "MuiStack",
    defaultTheme: Nx
  });
}
function wx(n, l) {
  const i = Y.Children.toArray(n).filter(Boolean);
  return i.reduce((u, s, f) => (u.push(s), f < i.length - 1 && u.push(/* @__PURE__ */ Y.cloneElement(l, {
    key: `separator-${f}`
  })), u), []);
}
const Lx = (n) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[n], Ux = ({
  ownerState: n,
  theme: l
}) => {
  let i = {
    display: "flex",
    flexDirection: "column",
    ...sn({
      theme: l
    }, Ps({
      values: n.direction,
      breakpoints: l.breakpoints.values
    }), (u) => ({
      flexDirection: u
    }))
  };
  if (n.spacing) {
    const u = ho(l), s = Object.keys(l.breakpoints.values).reduce((y, p) => ((typeof n.spacing == "object" && n.spacing[p] != null || typeof n.direction == "object" && n.direction[p] != null) && (y[p] = !0), y), {}), f = Ps({
      values: n.direction,
      base: s
    }), h = Ps({
      values: n.spacing,
      base: s
    });
    typeof f == "object" && Object.keys(f).forEach((y, p, v) => {
      if (!f[y]) {
        const A = p > 0 ? f[v[p - 1]] : "column";
        f[y] = A;
      }
    }), i = Ae(i, sn({
      theme: l
    }, h, (y, p) => n.useFlexGap ? {
      gap: Ja(u, y)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Lx(p ? f[p] : n.direction)}`]: Ja(u, y)
      }
    }));
  }
  return i = BS(l.breakpoints, i), i;
};
function Gx(n = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: l = Hx,
    useThemeProps: i = zx,
    componentName: u = "MuiStack"
  } = n, s = () => ol({
    root: ["root"]
  }, (y) => er(u, y), {}), f = l(Ux);
  return /* @__PURE__ */ Y.forwardRef(function(y, p) {
    const v = i(y), S = Zf(v), {
      component: A = "div",
      direction: _ = "column",
      spacing: M = 0,
      divider: C,
      children: z,
      className: k,
      useFlexGap: F = !1,
      ...V
    } = S, Q = {
      direction: _,
      spacing: M,
      useFlexGap: F
    }, w = s();
    return /* @__PURE__ */ J.jsx(f, {
      as: A,
      ownerState: Q,
      ref: p,
      className: tr(w.root, k),
      ...V,
      children: C ? wx(z, C) : z
    });
  });
}
const yi = {
  black: "#000",
  white: "#fff"
}, jx = {
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
}, Qr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Zr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ci = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Kr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ir = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Jr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Fg() {
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
      paper: yi.white,
      default: yi.white
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
const Qg = Fg();
function Zg() {
  return {
    text: {
      primary: yi.white,
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
      active: yi.white,
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
const bf = Zg();
function Yp(n, l, i, u) {
  const s = u.light || u, f = u.dark || u * 1.5;
  n[l] || (n.hasOwnProperty(i) ? n[l] = n[i] : l === "light" ? n.light = Eo(n.main, s) : l === "dark" && (n.dark = xo(n.main, f)));
}
function Vp(n, l, i, u, s) {
  const f = s.light || s, h = s.dark || s * 1.5;
  l[i] || (l.hasOwnProperty(u) ? l[i] = l[u] : i === "light" ? l.light = `color-mix(in ${n}, ${l.main}, #fff ${(f * 100).toFixed(0)}%)` : i === "dark" && (l.dark = `color-mix(in ${n}, ${l.main}, #000 ${(h * 100).toFixed(0)}%)`));
}
function kx(n = "light") {
  return n === "dark" ? {
    main: Kr[200],
    light: Kr[50],
    dark: Kr[400]
  } : {
    main: Kr[700],
    light: Kr[400],
    dark: Kr[800]
  };
}
function $x(n = "light") {
  return n === "dark" ? {
    main: Qr[200],
    light: Qr[50],
    dark: Qr[400]
  } : {
    main: Qr[500],
    light: Qr[300],
    dark: Qr[700]
  };
}
function qx(n = "light") {
  return n === "dark" ? {
    main: Zr[500],
    light: Zr[300],
    dark: Zr[700]
  } : {
    main: Zr[700],
    light: Zr[400],
    dark: Zr[800]
  };
}
function Yx(n = "light") {
  return n === "dark" ? {
    main: Ir[400],
    light: Ir[300],
    dark: Ir[700]
  } : {
    main: Ir[700],
    light: Ir[500],
    dark: Ir[900]
  };
}
function Vx(n = "light") {
  return n === "dark" ? {
    main: Jr[400],
    light: Jr[300],
    dark: Jr[700]
  } : {
    main: Jr[800],
    light: Jr[500],
    dark: Jr[900]
  };
}
function Xx(n = "light") {
  return n === "dark" ? {
    main: ci[400],
    light: ci[300],
    dark: ci[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ci[500],
    dark: ci[900]
  };
}
function Fx(n) {
  return `oklch(from ${n} var(--__l) 0 h / var(--__a))`;
}
function a0(n) {
  const {
    mode: l = "light",
    contrastThreshold: i = 3,
    tonalOffset: u = 0.2,
    colorSpace: s,
    ...f
  } = n, h = n.primary || kx(l), m = n.secondary || $x(l), y = n.error || qx(l), p = n.info || Yx(l), v = n.success || Vx(l), S = n.warning || Xx(l);
  function A(z) {
    return s ? Fx(z) : w2(z, bf.text.primary) >= i ? bf.text.primary : Qg.text.primary;
  }
  const _ = ({
    color: z,
    name: k,
    mainShade: F = 500,
    lightShade: V = 300,
    darkShade: Q = 700
  }) => {
    if (z = {
      ...z
    }, !z.main && z[F] && (z.main = z[F]), !z.hasOwnProperty("main"))
      throw new Error(Ia(11, k ? ` (${k})` : "", F));
    if (typeof z.main != "string")
      throw new Error(Ia(12, k ? ` (${k})` : "", JSON.stringify(z.main)));
    return s ? (Vp(s, z, "light", V, u), Vp(s, z, "dark", Q, u)) : (Yp(z, "light", V, u), Yp(z, "dark", Q, u)), z.contrastText || (z.contrastText = A(z.main)), z;
  };
  let M;
  return l === "light" ? M = Fg() : l === "dark" && (M = Zg()), Ae({
    // A collection of common colors.
    common: {
      ...yi
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: l,
    // The colors used to represent primary interface elements for a user.
    primary: _({
      color: h,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: _({
      color: m,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: _({
      color: y,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: _({
      color: S,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: _({
      color: p,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: _({
      color: v,
      name: "success"
    }),
    // The grey colors.
    grey: jx,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: i,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: A,
    // Generate a rich color object.
    augmentColor: _,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: u,
    // The light and dark mode object.
    ...M
  }, f);
}
function Qx(n) {
  const l = {};
  return Object.entries(n).forEach((u) => {
    const [s, f] = u;
    typeof f == "object" && (l[s] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), l;
}
function Zx(n, l) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [n.up("sm")]: {
        minHeight: 64
      }
    },
    ...l
  };
}
function Kx(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Xp = {
  textTransform: "uppercase"
}, Fp = '"Roboto", "Helvetica", "Arial", sans-serif';
function Kg(n, l) {
  const {
    fontFamily: i = Fp,
    // The default font size of the Material Specification.
    fontSize: u = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: f = 400,
    fontWeightMedium: h = 500,
    fontWeightBold: m = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: y = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: v,
    ...S
  } = typeof l == "function" ? l(n) : l, A = u / 14, _ = v || ((z) => `${z / y * A}rem`), M = (z, k, F, V, Q) => ({
    fontFamily: i,
    fontWeight: z,
    fontSize: _(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: F,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...i === Fp ? {
      letterSpacing: `${Kx(V / k)}em`
    } : {},
    ...Q,
    ...p
  }), C = {
    h1: M(s, 96, 1.167, -1.5),
    h2: M(s, 60, 1.2, -0.5),
    h3: M(f, 48, 1.167, 0),
    h4: M(f, 34, 1.235, 0.25),
    h5: M(f, 24, 1.334, 0),
    h6: M(h, 20, 1.6, 0.15),
    subtitle1: M(f, 16, 1.75, 0.15),
    subtitle2: M(h, 14, 1.57, 0.1),
    body1: M(f, 16, 1.5, 0.15),
    body2: M(f, 14, 1.43, 0.15),
    button: M(h, 14, 1.75, 0.4, Xp),
    caption: M(f, 12, 1.66, 0.4),
    overline: M(f, 12, 2.66, 1, Xp),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ae({
    htmlFontSize: y,
    pxToRem: _,
    fontFamily: i,
    fontSize: u,
    fontWeightLight: s,
    fontWeightRegular: f,
    fontWeightMedium: h,
    fontWeightBold: m,
    ...C
  }, S, {
    clone: !1
    // No need to clone deep
  });
}
const Ix = 0.2, Jx = 0.14, Wx = 0.12;
function Qt(...n) {
  return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${Ix})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${Jx})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${Wx})`].join(",");
}
const Px = ["none", Qt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Qt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Qt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Qt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Qt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Qt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Qt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Qt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Qt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Qt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Qt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Qt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Qt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Qt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Qt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Qt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Qt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Qt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Qt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Qt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Qt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Qt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Qt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Qt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], tE = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, eE = {
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
function Qp(n) {
  return `${Math.round(n)}ms`;
}
function nE(n) {
  if (!n)
    return 0;
  const l = n / 36;
  return Math.min(Math.round((4 + 15 * l ** 0.25 + l / 5) * 10), 3e3);
}
function aE(n) {
  const l = {
    ...tE,
    ...n.easing
  }, i = {
    ...eE,
    ...n.duration
  };
  return {
    getAutoHeightDuration: nE,
    create: (s = ["all"], f = {}) => {
      const {
        duration: h = i.standard,
        easing: m = l.easeInOut,
        delay: y = 0,
        ...p
      } = f;
      return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof h == "string" ? h : Qp(h)} ${m} ${typeof y == "string" ? y : Qp(y)}`).join(",");
    },
    ...n,
    easing: l,
    duration: i
  };
}
const rE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function lE(n) {
  return Tn(n) || typeof n > "u" || typeof n == "string" || typeof n == "boolean" || typeof n == "number" || Array.isArray(n);
}
function Ig(n = {}) {
  const l = {
    ...n
  };
  function i(u) {
    const s = Object.entries(u);
    for (let f = 0; f < s.length; f++) {
      const [h, m] = s[f];
      !lE(m) || h.startsWith("unstable_") ? delete u[h] : Tn(m) && (u[h] = {
        ...m
      }, i(u[h]));
    }
  }
  return i(l), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(l, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Zp(n) {
  return typeof n == "number" ? `${(n * 100).toFixed(0)}%` : `calc((${n}) * 100%)`;
}
const iE = (n) => {
  if (!Number.isNaN(+n))
    return +n;
  const l = n.match(/\d*\.?\d+/g);
  if (!l)
    return 0;
  let i = 0;
  for (let u = 0; u < l.length; u += 1)
    i += +l[u];
  return i;
};
function uE(n) {
  Object.assign(n, {
    alpha(l, i) {
      const u = this || n;
      return u.colorSpace ? `oklch(from ${l} l c h / ${typeof i == "string" ? `calc(${i})` : i})` : u.vars ? `rgba(${l.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof i == "string" ? `calc(${i})` : i})` : Pf(l, iE(i));
    },
    lighten(l, i) {
      const u = this || n;
      return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${l}, #fff ${Zp(i)})` : Eo(l, i);
    },
    darken(l, i) {
      const u = this || n;
      return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${l}, #000 ${Zp(i)})` : xo(l, i);
    }
  });
}
function Sf(n = {}, ...l) {
  const {
    breakpoints: i,
    mixins: u = {},
    spacing: s,
    palette: f = {},
    transitions: h = {},
    typography: m = {},
    shape: y,
    colorSpace: p,
    ...v
  } = n;
  if (n.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  n.generateThemeVars === void 0)
    throw new Error(Ia(20));
  const S = a0({
    ...f,
    colorSpace: p
  }), A = ul(n);
  let _ = Ae(A, {
    mixins: Zx(A.breakpoints, u),
    palette: S,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Px.slice(),
    typography: Kg(S, m),
    transitions: aE(h),
    zIndex: {
      ...rE
    }
  });
  return _ = Ae(_, v), _ = l.reduce((M, C) => Ae(M, C), _), _.unstable_sxConfig = {
    ...xi,
    ...v?.unstable_sxConfig
  }, _.unstable_sx = function(C) {
    return Wa({
      sx: C,
      theme: this
    });
  }, _.toRuntimeSource = Ig, uE(_), _;
}
function oE(n) {
  let l;
  return n < 1 ? l = 5.11916 * n ** 2 : l = 4.5 * Math.log(n + 1) + 2, Math.round(l * 10) / 1e3;
}
const cE = [...Array(25)].map((n, l) => {
  if (l === 0)
    return "none";
  const i = oE(l);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Jg(n) {
  return {
    inputPlaceholder: n === "dark" ? 0.5 : 0.42,
    inputUnderline: n === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: n === "dark" ? 0.2 : 0.12,
    switchTrack: n === "dark" ? 0.3 : 0.38
  };
}
function Wg(n) {
  return n === "dark" ? cE : [];
}
function sE(n) {
  const {
    palette: l = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: i,
    overlays: u,
    colorSpace: s,
    ...f
  } = n, h = a0({
    ...l,
    colorSpace: s
  });
  return {
    palette: h,
    opacity: {
      ...Jg(h.mode),
      ...i
    },
    overlays: u || Wg(h.mode),
    ...f
  };
}
function fE(n) {
  return !!n[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!n[0].match(/sxConfig$/) || // ends with sxConfig
  n[0] === "palette" && !!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const dE = (n) => [...[...Array(25)].map((l, i) => `--${n ? `${n}-` : ""}overlays-${i}`), `--${n ? `${n}-` : ""}palette-AppBar-darkBg`, `--${n ? `${n}-` : ""}palette-AppBar-darkColor`], hE = (n) => (l, i) => {
  const u = n.rootSelector || ":root", s = n.colorSchemeSelector;
  let f = s;
  if (s === "class" && (f = ".%s"), s === "data" && (f = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (f = `[${s}="%s"]`), n.defaultColorScheme === l) {
    if (l === "dark") {
      const h = {};
      return dE(n.cssVarPrefix).forEach((m) => {
        h[m] = i[m], delete i[m];
      }), f === "media" ? {
        [u]: i,
        "@media (prefers-color-scheme: dark)": {
          [u]: h
        }
      } : f ? {
        [f.replace("%s", l)]: h,
        [`${u}, ${f.replace("%s", l)}`]: i
      } : {
        [u]: {
          ...i,
          ...h
        }
      };
    }
    if (f && f !== "media")
      return `${u}, ${f.replace("%s", String(l))}`;
  } else if (l) {
    if (f === "media")
      return {
        [`@media (prefers-color-scheme: ${String(l)})`]: {
          [u]: i
        }
      };
    if (f)
      return f.replace("%s", String(l));
  }
  return u;
};
function mE(n, l) {
  l.forEach((i) => {
    n[i] || (n[i] = {});
  });
}
function U(n, l, i) {
  !n[l] && i && (n[l] = i);
}
function di(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : $g(n);
}
function Xn(n, l) {
  `${l}Channel` in n || (n[`${l}Channel`] = fi(di(n[l])));
}
function pE(n) {
  return typeof n == "number" ? `${n}px` : typeof n == "string" || typeof n == "function" || Array.isArray(n) ? n : "8px";
}
const gn = (n) => {
  try {
    return n();
  } catch {
  }
}, gE = (n = "mui") => lx(n);
function rf(n, l, i, u, s) {
  if (!i)
    return;
  i = i === !0 ? {} : i;
  const f = s === "dark" ? "dark" : "light";
  if (!u) {
    l[s] = sE({
      ...i,
      palette: {
        mode: f,
        ...i?.palette
      },
      colorSpace: n
    });
    return;
  }
  const {
    palette: h,
    ...m
  } = Sf({
    ...u,
    palette: {
      mode: f,
      ...i?.palette
    },
    colorSpace: n
  });
  return l[s] = {
    ...i,
    palette: h,
    opacity: {
      ...Jg(f),
      ...i?.opacity
    },
    overlays: i?.overlays || Wg(f)
  }, m;
}
function yE(n = {}, ...l) {
  const {
    colorSchemes: i = {
      light: !0
    },
    defaultColorScheme: u,
    disableCssColorScheme: s = !1,
    cssVarPrefix: f = "mui",
    nativeColor: h = !1,
    shouldSkipGeneratingVar: m = fE,
    colorSchemeSelector: y = i.light && i.dark ? "media" : void 0,
    rootSelector: p = ":root",
    ...v
  } = n, S = Object.keys(i)[0], A = u || (i.light && S !== "light" ? "light" : S), _ = gE(f), {
    [A]: M,
    light: C,
    dark: z,
    ...k
  } = i, F = {
    ...k
  };
  let V = M;
  if ((A === "dark" && !("dark" in i) || A === "light" && !("light" in i)) && (V = !0), !V)
    throw new Error(Ia(21, A));
  let Q;
  h && (Q = "oklch");
  const w = rf(Q, F, V, v, A);
  C && !F.light && rf(Q, F, C, void 0, "light"), z && !F.dark && rf(Q, F, z, void 0, "dark");
  let q = {
    defaultColorScheme: A,
    ...w,
    cssVarPrefix: f,
    colorSchemeSelector: y,
    rootSelector: p,
    getCssVar: _,
    colorSchemes: F,
    font: {
      ...Qx(w.typography),
      ...w.font
    },
    spacing: pE(v.spacing)
  };
  Object.keys(q.colorSchemes).forEach((at) => {
    const b = q.colorSchemes[at].palette, tt = (ct) => {
      const N = ct.split("-"), Z = N[1], rt = N[2];
      return _(ct, b[Z][rt]);
    };
    b.mode === "light" && (U(b.common, "background", "#fff"), U(b.common, "onBackground", "#000")), b.mode === "dark" && (U(b.common, "background", "#000"), U(b.common, "onBackground", "#fff"));
    function I(ct, N, Z) {
      if (Q) {
        let rt;
        return ct === Xa && (rt = `transparent ${((1 - Z) * 100).toFixed(0)}%`), ct === zt && (rt = `#000 ${(Z * 100).toFixed(0)}%`), ct === wt && (rt = `#fff ${(Z * 100).toFixed(0)}%`), `color-mix(in ${Q}, ${N}, ${rt})`;
      }
      return ct(N, Z);
    }
    if (mE(b, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), b.mode === "light") {
      U(b.Alert, "errorColor", I(zt, b.error.light, 0.6)), U(b.Alert, "infoColor", I(zt, b.info.light, 0.6)), U(b.Alert, "successColor", I(zt, b.success.light, 0.6)), U(b.Alert, "warningColor", I(zt, b.warning.light, 0.6)), U(b.Alert, "errorFilledBg", tt("palette-error-main")), U(b.Alert, "infoFilledBg", tt("palette-info-main")), U(b.Alert, "successFilledBg", tt("palette-success-main")), U(b.Alert, "warningFilledBg", tt("palette-warning-main")), U(b.Alert, "errorFilledColor", gn(() => b.getContrastText(b.error.main))), U(b.Alert, "infoFilledColor", gn(() => b.getContrastText(b.info.main))), U(b.Alert, "successFilledColor", gn(() => b.getContrastText(b.success.main))), U(b.Alert, "warningFilledColor", gn(() => b.getContrastText(b.warning.main))), U(b.Alert, "errorStandardBg", I(wt, b.error.light, 0.9)), U(b.Alert, "infoStandardBg", I(wt, b.info.light, 0.9)), U(b.Alert, "successStandardBg", I(wt, b.success.light, 0.9)), U(b.Alert, "warningStandardBg", I(wt, b.warning.light, 0.9)), U(b.Alert, "errorIconColor", tt("palette-error-main")), U(b.Alert, "infoIconColor", tt("palette-info-main")), U(b.Alert, "successIconColor", tt("palette-success-main")), U(b.Alert, "warningIconColor", tt("palette-warning-main")), U(b.AppBar, "defaultBg", tt("palette-grey-100")), U(b.Avatar, "defaultBg", tt("palette-grey-400")), U(b.Button, "inheritContainedBg", tt("palette-grey-300")), U(b.Button, "inheritContainedHoverBg", tt("palette-grey-A100")), U(b.Chip, "defaultBorder", tt("palette-grey-400")), U(b.Chip, "defaultAvatarColor", tt("palette-grey-700")), U(b.Chip, "defaultIconColor", tt("palette-grey-700")), U(b.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), U(b.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), U(b.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), U(b.LinearProgress, "primaryBg", I(wt, b.primary.main, 0.62)), U(b.LinearProgress, "secondaryBg", I(wt, b.secondary.main, 0.62)), U(b.LinearProgress, "errorBg", I(wt, b.error.main, 0.62)), U(b.LinearProgress, "infoBg", I(wt, b.info.main, 0.62)), U(b.LinearProgress, "successBg", I(wt, b.success.main, 0.62)), U(b.LinearProgress, "warningBg", I(wt, b.warning.main, 0.62)), U(b.Skeleton, "bg", Q ? I(Xa, b.text.primary, 0.11) : `rgba(${tt("palette-text-primaryChannel")} / 0.11)`), U(b.Slider, "primaryTrack", I(wt, b.primary.main, 0.62)), U(b.Slider, "secondaryTrack", I(wt, b.secondary.main, 0.62)), U(b.Slider, "errorTrack", I(wt, b.error.main, 0.62)), U(b.Slider, "infoTrack", I(wt, b.info.main, 0.62)), U(b.Slider, "successTrack", I(wt, b.success.main, 0.62)), U(b.Slider, "warningTrack", I(wt, b.warning.main, 0.62));
      const ct = Q ? I(zt, b.background.default, 0.6825) : Fu(b.background.default, 0.8);
      U(b.SnackbarContent, "bg", ct), U(b.SnackbarContent, "color", gn(() => Q ? bf.text.primary : b.getContrastText(ct))), U(b.SpeedDialAction, "fabHoverBg", Fu(b.background.paper, 0.15)), U(b.StepConnector, "border", tt("palette-grey-400")), U(b.StepContent, "border", tt("palette-grey-400")), U(b.Switch, "defaultColor", tt("palette-common-white")), U(b.Switch, "defaultDisabledColor", tt("palette-grey-100")), U(b.Switch, "primaryDisabledColor", I(wt, b.primary.main, 0.62)), U(b.Switch, "secondaryDisabledColor", I(wt, b.secondary.main, 0.62)), U(b.Switch, "errorDisabledColor", I(wt, b.error.main, 0.62)), U(b.Switch, "infoDisabledColor", I(wt, b.info.main, 0.62)), U(b.Switch, "successDisabledColor", I(wt, b.success.main, 0.62)), U(b.Switch, "warningDisabledColor", I(wt, b.warning.main, 0.62)), U(b.TableCell, "border", I(wt, I(Xa, b.divider, 1), 0.88)), U(b.Tooltip, "bg", I(Xa, b.grey[700], 0.92));
    }
    if (b.mode === "dark") {
      U(b.Alert, "errorColor", I(wt, b.error.light, 0.6)), U(b.Alert, "infoColor", I(wt, b.info.light, 0.6)), U(b.Alert, "successColor", I(wt, b.success.light, 0.6)), U(b.Alert, "warningColor", I(wt, b.warning.light, 0.6)), U(b.Alert, "errorFilledBg", tt("palette-error-dark")), U(b.Alert, "infoFilledBg", tt("palette-info-dark")), U(b.Alert, "successFilledBg", tt("palette-success-dark")), U(b.Alert, "warningFilledBg", tt("palette-warning-dark")), U(b.Alert, "errorFilledColor", gn(() => b.getContrastText(b.error.dark))), U(b.Alert, "infoFilledColor", gn(() => b.getContrastText(b.info.dark))), U(b.Alert, "successFilledColor", gn(() => b.getContrastText(b.success.dark))), U(b.Alert, "warningFilledColor", gn(() => b.getContrastText(b.warning.dark))), U(b.Alert, "errorStandardBg", I(zt, b.error.light, 0.9)), U(b.Alert, "infoStandardBg", I(zt, b.info.light, 0.9)), U(b.Alert, "successStandardBg", I(zt, b.success.light, 0.9)), U(b.Alert, "warningStandardBg", I(zt, b.warning.light, 0.9)), U(b.Alert, "errorIconColor", tt("palette-error-main")), U(b.Alert, "infoIconColor", tt("palette-info-main")), U(b.Alert, "successIconColor", tt("palette-success-main")), U(b.Alert, "warningIconColor", tt("palette-warning-main")), U(b.AppBar, "defaultBg", tt("palette-grey-900")), U(b.AppBar, "darkBg", tt("palette-background-paper")), U(b.AppBar, "darkColor", tt("palette-text-primary")), U(b.Avatar, "defaultBg", tt("palette-grey-600")), U(b.Button, "inheritContainedBg", tt("palette-grey-800")), U(b.Button, "inheritContainedHoverBg", tt("palette-grey-700")), U(b.Chip, "defaultBorder", tt("palette-grey-700")), U(b.Chip, "defaultAvatarColor", tt("palette-grey-300")), U(b.Chip, "defaultIconColor", tt("palette-grey-300")), U(b.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), U(b.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), U(b.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), U(b.LinearProgress, "primaryBg", I(zt, b.primary.main, 0.5)), U(b.LinearProgress, "secondaryBg", I(zt, b.secondary.main, 0.5)), U(b.LinearProgress, "errorBg", I(zt, b.error.main, 0.5)), U(b.LinearProgress, "infoBg", I(zt, b.info.main, 0.5)), U(b.LinearProgress, "successBg", I(zt, b.success.main, 0.5)), U(b.LinearProgress, "warningBg", I(zt, b.warning.main, 0.5)), U(b.Skeleton, "bg", Q ? I(Xa, b.text.primary, 0.13) : `rgba(${tt("palette-text-primaryChannel")} / 0.13)`), U(b.Slider, "primaryTrack", I(zt, b.primary.main, 0.5)), U(b.Slider, "secondaryTrack", I(zt, b.secondary.main, 0.5)), U(b.Slider, "errorTrack", I(zt, b.error.main, 0.5)), U(b.Slider, "infoTrack", I(zt, b.info.main, 0.5)), U(b.Slider, "successTrack", I(zt, b.success.main, 0.5)), U(b.Slider, "warningTrack", I(zt, b.warning.main, 0.5));
      const ct = Q ? I(wt, b.background.default, 0.985) : Fu(b.background.default, 0.98);
      U(b.SnackbarContent, "bg", ct), U(b.SnackbarContent, "color", gn(() => Q ? Qg.text.primary : b.getContrastText(ct))), U(b.SpeedDialAction, "fabHoverBg", Fu(b.background.paper, 0.15)), U(b.StepConnector, "border", tt("palette-grey-600")), U(b.StepContent, "border", tt("palette-grey-600")), U(b.Switch, "defaultColor", tt("palette-grey-300")), U(b.Switch, "defaultDisabledColor", tt("palette-grey-600")), U(b.Switch, "primaryDisabledColor", I(zt, b.primary.main, 0.55)), U(b.Switch, "secondaryDisabledColor", I(zt, b.secondary.main, 0.55)), U(b.Switch, "errorDisabledColor", I(zt, b.error.main, 0.55)), U(b.Switch, "infoDisabledColor", I(zt, b.info.main, 0.55)), U(b.Switch, "successDisabledColor", I(zt, b.success.main, 0.55)), U(b.Switch, "warningDisabledColor", I(zt, b.warning.main, 0.55)), U(b.TableCell, "border", I(zt, I(Xa, b.divider, 1), 0.68)), U(b.Tooltip, "bg", I(Xa, b.grey[700], 0.92));
    }
    Xn(b.background, "default"), Xn(b.background, "paper"), Xn(b.common, "background"), Xn(b.common, "onBackground"), Xn(b, "divider"), Object.keys(b).forEach((ct) => {
      const N = b[ct];
      ct !== "tonalOffset" && N && typeof N == "object" && (N.main && U(b[ct], "mainChannel", fi(di(N.main))), N.light && U(b[ct], "lightChannel", fi(di(N.light))), N.dark && U(b[ct], "darkChannel", fi(di(N.dark))), N.contrastText && U(b[ct], "contrastTextChannel", fi(di(N.contrastText))), ct === "text" && (Xn(b[ct], "primary"), Xn(b[ct], "secondary")), ct === "action" && (N.active && Xn(b[ct], "active"), N.selected && Xn(b[ct], "selected")));
    });
  }), q = l.reduce((at, b) => Ae(at, b), q);
  const X = {
    prefix: f,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: m,
    getSelector: hE(q),
    enableContrastVars: h
  }, {
    vars: P,
    generateThemeVars: W,
    generateStyleSheets: ut
  } = ox(q, X);
  return q.vars = P, Object.entries(q.colorSchemes[q.defaultColorScheme]).forEach(([at, b]) => {
    q[at] = b;
  }), q.generateThemeVars = W, q.generateStyleSheets = ut, q.generateSpacing = function() {
    return zg(v.spacing, ho(this));
  }, q.getColorSchemeSelector = cx(y), q.spacing = q.generateSpacing(), q.shouldSkipGeneratingVar = m, q.unstable_sxConfig = {
    ...xi,
    ...v?.unstable_sxConfig
  }, q.unstable_sx = function(b) {
    return Wa({
      sx: b,
      theme: this
    });
  }, q.toRuntimeSource = Ig, q;
}
function Kp(n, l, i) {
  n.colorSchemes && i && (n.colorSchemes[l] = {
    ...i !== !0 && i,
    palette: a0({
      ...i === !0 ? {} : i.palette,
      mode: l
    })
    // cast type to skip module augmentation test
  });
}
function Ao(n = {}, ...l) {
  const {
    palette: i,
    cssVariables: u = !1,
    colorSchemes: s = i ? void 0 : {
      light: !0
    },
    defaultColorScheme: f = i?.mode,
    ...h
  } = n, m = f || "light", y = s?.[m], p = {
    ...s,
    ...i ? {
      [m]: {
        ...typeof y != "boolean" && y,
        palette: i
      }
    } : void 0
  };
  if (u === !1) {
    if (!("colorSchemes" in n))
      return Sf(n, ...l);
    let v = i;
    "palette" in n || p[m] && (p[m] !== !0 ? v = p[m].palette : m === "dark" && (v = {
      mode: "dark"
    }));
    const S = Sf({
      ...n,
      palette: v
    }, ...l);
    return S.defaultColorScheme = m, S.colorSchemes = p, S.palette.mode === "light" && (S.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: S.palette
    }, Kp(S, "dark", p.dark)), S.palette.mode === "dark" && (S.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: S.palette
    }, Kp(S, "light", p.light)), S;
  }
  return !i && !("light" in p) && m === "light" && (p.light = !0), yE({
    ...h,
    colorSchemes: p,
    defaultColorScheme: m,
    ...typeof u != "boolean" && u
  }, ...l);
}
const r0 = Ao();
function l0() {
  const n = bo(r0);
  return n[Fn] || n;
}
function vE(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as";
}
const bE = (n) => vE(n) && n !== "classes", nr = jg({
  themeId: Fn,
  defaultTheme: r0,
  rootShouldForwardProp: bE
});
function SE({
  theme: n,
  ...l
}) {
  const i = Fn in n ? n[Fn] : void 0;
  return /* @__PURE__ */ J.jsx(Vg, {
    ...l,
    themeId: i ? Fn : void 0,
    theme: i || n
  });
}
const Qu = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: xE
} = rx({
  themeId: Fn,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ao({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Qu.colorSchemeStorageKey,
  modeStorageKey: Qu.modeStorageKey,
  defaultColorScheme: {
    light: Qu.defaultLightColorScheme,
    dark: Qu.defaultDarkColorScheme
  },
  resolveTheme: (n) => {
    const l = {
      ...n,
      typography: Kg(n.palette, n.typography)
    };
    return l.unstable_sx = function(u) {
      return Wa({
        sx: u,
        theme: this
      });
    }, l;
  }
}), EE = xE;
function TE({
  theme: n,
  ...l
}) {
  const i = Y.useMemo(() => {
    if (typeof n == "function")
      return n;
    const u = Fn in n ? n[Fn] : n;
    return "colorSchemes" in u ? null : "vars" in u ? n : {
      ...n,
      vars: null
    };
  }, [n]);
  return i ? /* @__PURE__ */ J.jsx(SE, {
    theme: i,
    ...l
  }) : /* @__PURE__ */ J.jsx(EE, {
    theme: n,
    ...l
  });
}
function AE(n) {
  return /* @__PURE__ */ J.jsx(wg, {
    ...n,
    defaultTheme: r0,
    themeId: Fn
  });
}
function Pg(n) {
  return function(i) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ J.jsx(AE, {
        styles: typeof n == "function" ? (u) => n({
          theme: u,
          ...i
        }) : n
      })
    );
  };
}
function CE() {
  return Zf;
}
const Co = I2;
function ar(n) {
  return X2(n);
}
function ME(n) {
  return typeof n.main == "string";
}
function OE(n, l = []) {
  if (!ME(n))
    return !1;
  for (const i of l)
    if (!n.hasOwnProperty(i) || typeof n[i] != "string")
      return !1;
  return !0;
}
function ty(n = []) {
  return ([, l]) => l && OE(l, n);
}
function _E(n) {
  return er("MuiTypography", n);
}
Kf("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const RE = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, BE = CE(), DE = (n) => {
  const {
    align: l,
    gutterBottom: i,
    noWrap: u,
    paragraph: s,
    variant: f,
    classes: h
  } = n, m = {
    root: ["root", f, n.align !== "inherit" && `align${Cn(l)}`, i && "gutterBottom", u && "noWrap", s && "paragraph"]
  };
  return ol(m, _E, h);
}, NE = nr("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (n, l) => {
    const {
      ownerState: i
    } = n;
    return [l.root, i.variant && l[i.variant], i.align !== "inherit" && l[`align${Cn(i.align)}`], i.noWrap && l.noWrap, i.gutterBottom && l.gutterBottom, i.paragraph && l.paragraph];
  }
})(Co(({
  theme: n
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
  }, ...Object.entries(n.typography).filter(([l, i]) => l !== "inherit" && i && typeof i == "object").map(([l, i]) => ({
    props: {
      variant: l
    },
    style: i
  })), ...Object.entries(n.palette).filter(ty()).map(([l]) => ({
    props: {
      color: l
    },
    style: {
      color: (n.vars || n).palette[l].main
    }
  })), ...Object.entries(n.palette?.text || {}).filter(([, l]) => typeof l == "string").map(([l]) => ({
    props: {
      color: `text${Cn(l)}`
    },
    style: {
      color: (n.vars || n).palette.text[l]
    }
  })), {
    props: ({
      ownerState: l
    }) => l.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: l
    }) => l.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: l
    }) => l.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: l
    }) => l.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), Ip = {
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
}, Pr = /* @__PURE__ */ Y.forwardRef(function(l, i) {
  const {
    color: u,
    ...s
  } = ar({
    props: l,
    name: "MuiTypography"
  }), f = !RE[u], h = BE({
    ...s,
    ...f && {
      color: u
    }
  }), {
    align: m = "inherit",
    className: y,
    component: p,
    gutterBottom: v = !1,
    noWrap: S = !1,
    paragraph: A = !1,
    variant: _ = "body1",
    variantMapping: M = Ip,
    ...C
  } = h, z = {
    ...h,
    align: m,
    color: u,
    className: y,
    component: p,
    gutterBottom: v,
    noWrap: S,
    paragraph: A,
    variant: _,
    variantMapping: M
  }, k = p || (A ? "p" : M[_] || Ip[_]) || "span", F = DE(z);
  return /* @__PURE__ */ J.jsx(NE, {
    as: k,
    ref: i,
    className: tr(F.root, y),
    ...C,
    ownerState: z,
    style: {
      ...m !== "inherit" && {
        "--Typography-textAlign": m
      },
      ...C.style
    }
  });
}), HE = Gx({
  createStyledComponent: nr("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (n) => ar({
    props: n,
    name: "MuiStack"
  })
});
function io() {
  return io = Object.assign ? Object.assign.bind() : function(n) {
    for (var l = 1; l < arguments.length; l++) {
      var i = arguments[l];
      for (var u in i)
        Object.prototype.hasOwnProperty.call(i, u) && (n[u] = i[u]);
    }
    return n;
  }, io.apply(this, arguments);
}
function zE(n, l) {
  if (n == null) return {};
  var i = {}, u = Object.keys(n), s, f;
  for (f = 0; f < u.length; f++)
    s = u[f], !(l.indexOf(s) >= 0) && (i[s] = n[s]);
  return i;
}
var wE = ["cdnSuffix", "cdnUrl", "countryCode", "style", "svg"], LE = "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/", UE = "svg", GE = 127397, jE = function(l) {
  var i = l.cdnSuffix, u = i === void 0 ? UE : i, s = l.cdnUrl, f = s === void 0 ? LE : s, h = l.countryCode, m = l.style, y = l.svg, p = y === void 0 ? !1 : y, v = zE(l, wE);
  if (typeof h != "string")
    return null;
  if (p) {
    var S = "" + f + h.toLowerCase() + "." + u;
    return Y.createElement("img", Object.assign({}, v, {
      src: S,
      style: io({
        display: "inline-block",
        width: "1em",
        height: "1em",
        verticalAlign: "middle"
      }, m)
    }));
  }
  var A = h.toUpperCase().replace(/./g, function(_) {
    return String.fromCodePoint(_.charCodeAt(0) + GE);
  });
  return Y.createElement("span", Object.assign({
    role: "img"
  }, v, {
    style: io({
      display: "inline-block",
      fontSize: "1em",
      lineHeight: "1em",
      verticalAlign: "middle"
    }, m)
  }), A);
};
function Jp(n) {
  try {
    return n.matches(":focus-visible");
  } catch {
  }
  return !1;
}
const kE = mx({
  createStyledComponent: nr("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (n, l) => {
      const {
        ownerState: i
      } = n;
      return [l.root, l[`maxWidth${Cn(String(i.maxWidth))}`], i.fixed && l.fixed, i.disableGutters && l.disableGutters];
    }
  }),
  useThemeProps: (n) => ar({
    props: n,
    name: "MuiContainer"
  })
}), xf = typeof Pg({}) == "function", $E = (n, l) => ({
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
  ...l && !n.vars && {
    colorScheme: n.palette.mode
  }
}), qE = (n) => ({
  color: (n.vars || n).palette.text.primary,
  ...n.typography.body1,
  backgroundColor: (n.vars || n).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (n.vars || n).palette.common.white
  }
}), ey = (n, l = !1) => {
  const i = {};
  l && n.colorSchemes && typeof n.getColorSchemeSelector == "function" && Object.entries(n.colorSchemes).forEach(([f, h]) => {
    const m = n.getColorSchemeSelector(f);
    m.startsWith("@") ? i[m] = {
      ":root": {
        colorScheme: h.palette?.mode
      }
    } : i[m.replace(/\s*&/, "")] = {
      colorScheme: h.palette?.mode
    };
  });
  let u = {
    html: $E(n, l),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: n.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...qE(n),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (n.vars || n).palette.background.default
      }
    },
    ...i
  };
  const s = n.components?.MuiCssBaseline?.styleOverrides;
  return s && (u = [u, s]), u;
}, to = "mui-ecs", YE = (n) => {
  const l = ey(n, !1), i = Array.isArray(l) ? l[0] : l;
  return !n.vars && i && (i.html[`:root:has(${to})`] = {
    colorScheme: n.palette.mode
  }), n.colorSchemes && Object.entries(n.colorSchemes).forEach(([u, s]) => {
    const f = n.getColorSchemeSelector(u);
    f.startsWith("@") ? i[f] = {
      [`:root:not(:has(.${to}))`]: {
        colorScheme: s.palette?.mode
      }
    } : i[f.replace(/\s*&/, "")] = {
      [`&:not(:has(.${to}))`]: {
        colorScheme: s.palette?.mode
      }
    };
  }), l;
}, VE = Pg(xf ? ({
  theme: n,
  enableColorScheme: l
}) => ey(n, l) : ({
  theme: n
}) => YE(n));
function XE(n) {
  const l = ar({
    props: n,
    name: "MuiCssBaseline"
  }), {
    children: i,
    enableColorScheme: u = !1
  } = l;
  return /* @__PURE__ */ J.jsxs(Y.Fragment, {
    children: [xf && /* @__PURE__ */ J.jsx(VE, {
      enableColorScheme: u
    }), !xf && !u && /* @__PURE__ */ J.jsx("span", {
      className: to,
      style: {
        display: "none"
      }
    }), i]
  });
}
function FE(n) {
  return er("MuiDivider", n);
}
Kf("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const QE = (n) => {
  const {
    absolute: l,
    children: i,
    classes: u,
    flexItem: s,
    light: f,
    orientation: h,
    textAlign: m,
    variant: y
  } = n;
  return ol({
    root: ["root", l && "absolute", y, f && "light", h === "vertical" && "vertical", s && "flexItem", i && "withChildren", i && h === "vertical" && "withChildrenVertical", m === "right" && h !== "vertical" && "textAlignRight", m === "left" && h !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", h === "vertical" && "wrapperVertical"]
  }, FE, u);
}, ZE = nr("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (n, l) => {
    const {
      ownerState: i
    } = n;
    return [l.root, i.absolute && l.absolute, l[i.variant], i.light && l.light, i.orientation === "vertical" && l.vertical, i.flexItem && l.flexItem, i.children && l.withChildren, i.children && i.orientation === "vertical" && l.withChildrenVertical, i.textAlign === "right" && i.orientation !== "vertical" && l.textAlignRight, i.textAlign === "left" && i.orientation !== "vertical" && l.textAlignLeft];
  }
})(Co(({
  theme: n
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (n.vars || n).palette.divider,
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
      borderColor: n.alpha((n.vars || n).palette.divider, 0.08)
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
      marginLeft: n.spacing(2),
      marginRight: n.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: n.spacing(1),
      marginBottom: n.spacing(1)
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
      ownerState: l
    }) => !!l.children,
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
      ownerState: l
    }) => l.children && l.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(n.vars || n).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: l
    }) => l.orientation === "vertical" && l.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(n.vars || n).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: l
    }) => l.textAlign === "right" && l.orientation !== "vertical",
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
      ownerState: l
    }) => l.textAlign === "left" && l.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), KE = nr("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (n, l) => {
    const {
      ownerState: i
    } = n;
    return [l.wrapper, i.orientation === "vertical" && l.wrapperVertical];
  }
})(Co(({
  theme: n
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${n.spacing(1)} * 1.2)`,
  paddingRight: `calc(${n.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${n.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${n.spacing(1)} * 1.2)`
    }
  }]
}))), Ef = /* @__PURE__ */ Y.forwardRef(function(l, i) {
  const u = ar({
    props: l,
    name: "MuiDivider"
  }), {
    absolute: s = !1,
    children: f,
    className: h,
    orientation: m = "horizontal",
    component: y = f || m === "vertical" ? "div" : "hr",
    flexItem: p = !1,
    light: v = !1,
    role: S = y !== "hr" ? "separator" : void 0,
    textAlign: A = "center",
    variant: _ = "fullWidth",
    ...M
  } = u, C = {
    ...u,
    absolute: s,
    component: y,
    flexItem: p,
    light: v,
    orientation: m,
    role: S,
    textAlign: A,
    variant: _
  }, z = QE(C);
  return /* @__PURE__ */ J.jsx(ZE, {
    as: y,
    className: tr(z.root, h),
    role: S,
    ref: i,
    ownerState: C,
    "aria-orientation": S === "separator" && (y !== "hr" || m === "vertical") ? m : void 0,
    ...M,
    children: f ? /* @__PURE__ */ J.jsx(KE, {
      className: z.wrapper,
      ownerState: C,
      children: f
    }) : null
  });
});
Ef && (Ef.muiSkipListHighlight = !0);
const Wr = Dx({
  createStyledComponent: nr("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (n, l) => {
      const {
        ownerState: i
      } = n;
      return [l.root, i.container && l.container];
    }
  }),
  componentName: "MuiGrid",
  useThemeProps: (n) => ar({
    props: n,
    name: "MuiGrid"
  }),
  useTheme: l0
});
function IE(n) {
  return er("MuiLink", n);
}
const JE = Kf("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), WE = ({
  theme: n,
  ownerState: l
}) => {
  const i = l.color;
  if ("colorSpace" in n && n.colorSpace) {
    const f = xn(n, `palette.${i}.main`) || xn(n, `palette.${i}`) || l.color;
    return n.alpha(f, 0.4);
  }
  const u = xn(n, `palette.${i}.main`, !1) || xn(n, `palette.${i}`, !1) || l.color, s = xn(n, `palette.${i}.mainChannel`) || xn(n, `palette.${i}Channel`);
  return "vars" in n && s ? `rgba(${s} / 0.4)` : Pf(u, 0.4);
}, Wp = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, PE = (n) => {
  const {
    classes: l,
    component: i,
    focusVisible: u,
    underline: s
  } = n, f = {
    root: ["root", `underline${Cn(s)}`, i === "button" && "button", u && "focusVisible"]
  };
  return ol(f, IE, l);
}, tT = nr(Pr, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (n, l) => {
    const {
      ownerState: i
    } = n;
    return [l.root, l[`underline${Cn(i.underline)}`], i.component === "button" && l.button];
  }
})(Co(({
  theme: n
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
      underline: l,
      ownerState: i
    }) => l === "always" && i.color !== "inherit",
    style: {
      textDecorationColor: "var(--Link-underlineColor)"
    }
  }, {
    props: ({
      underline: l,
      ownerState: i
    }) => l === "always" && i.color === "inherit",
    style: n.colorSpace ? {
      textDecorationColor: n.alpha("currentColor", 0.4)
    } : null
  }, ...Object.entries(n.palette).filter(ty()).map(([l]) => ({
    props: {
      underline: "always",
      color: l
    },
    style: {
      "--Link-underlineColor": n.alpha((n.vars || n).palette[l].main, 0.4)
    }
  })), {
    props: {
      underline: "always",
      color: "textPrimary"
    },
    style: {
      "--Link-underlineColor": n.alpha((n.vars || n).palette.text.primary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textSecondary"
    },
    style: {
      "--Link-underlineColor": n.alpha((n.vars || n).palette.text.secondary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textDisabled"
    },
    style: {
      "--Link-underlineColor": (n.vars || n).palette.text.disabled
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
      [`&.${JE.focusVisible}`]: {
        outline: "auto"
      }
    }
  }]
}))), Fa = /* @__PURE__ */ Y.forwardRef(function(l, i) {
  const u = ar({
    props: l,
    name: "MuiLink"
  }), s = l0(), {
    className: f,
    color: h = "primary",
    component: m = "a",
    onBlur: y,
    onFocus: p,
    TypographyClasses: v,
    underline: S = "always",
    variant: A = "inherit",
    sx: _,
    ...M
  } = u, [C, z] = Y.useState(!1), k = (w) => {
    Jp(w.target) || z(!1), y && y(w);
  }, F = (w) => {
    Jp(w.target) && z(!0), p && p(w);
  }, V = {
    ...u,
    color: h,
    component: m,
    focusVisible: C,
    underline: S,
    variant: A
  }, Q = PE(V);
  return /* @__PURE__ */ J.jsx(tT, {
    color: h,
    className: tr(Q.root, f),
    classes: v,
    component: m,
    onBlur: k,
    onFocus: F,
    ref: i,
    ownerState: V,
    variant: A,
    ...M,
    sx: [...Wp[h] === void 0 ? [{
      color: h
    }] : [], ...Array.isArray(_) ? _ : [_]],
    style: {
      ...M.style,
      ...S === "always" && h !== "inherit" && !Wp[h] && {
        "--Link-underlineColor": WE({
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
var eT = {
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
const Mo = (n, l, i, u) => {
  const s = Y.forwardRef(
    ({ color: f = "currentColor", size: h = 24, stroke: m = 2, title: y, className: p, children: v, ...S }, A) => Y.createElement(
      "svg",
      {
        ref: A,
        ...eT[n],
        width: h,
        height: h,
        className: ["tabler-icon", `tabler-icon-${l}`, p].join(" "),
        strokeWidth: m,
        stroke: f,
        ...S
      },
      [
        y && Y.createElement("title", { key: "svg-title" }, y),
        ...u.map(([_, M]) => Y.createElement(_, M)),
        ...Array.isArray(v) ? v : [v]
      ]
    )
  );
  return s.displayName = `${i}`, s;
};
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nT = [["path", { d: "M8 11v5", key: "svg-0" }], ["path", { d: "M8 8v.01", key: "svg-1" }], ["path", { d: "M12 16v-5", key: "svg-2" }], ["path", { d: "M16 16v-3a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z", key: "svg-4" }]], aT = Mo("outline", "brand-linkedin", "BrandLinkedin", nT);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rT = [["path", { d: "M4 4l11.733 16h4.267l-11.733 -16z", key: "svg-0" }], ["path", { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772", key: "svg-1" }]], lT = Mo("outline", "brand-x", "BrandX", rT);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iT = [["path", { d: "M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z", key: "svg-0" }], ["path", { d: "M10 9l5 3l-5 3z", key: "svg-1" }]], uT = Mo("outline", "brand-youtube", "BrandYoutube", iT);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = [["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z", key: "svg-0" }], ["path", { d: "M3 7l9 6l9 -6", key: "svg-1" }]], cT = Mo("outline", "mail", "Mail", oT);
var Tf = function(n, l) {
  return Tf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
    i.__proto__ = u;
  } || function(i, u) {
    for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && (i[s] = u[s]);
  }, Tf(n, l);
};
function rn(n, l) {
  if (typeof l != "function" && l !== null)
    throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
  Tf(n, l);
  function i() {
    this.constructor = n;
  }
  n.prototype = l === null ? Object.create(l) : (i.prototype = l.prototype, new i());
}
var it = function() {
  return it = Object.assign || function(l) {
    for (var i, u = 1, s = arguments.length; u < s; u++) {
      i = arguments[u];
      for (var f in i) Object.prototype.hasOwnProperty.call(i, f) && (l[f] = i[f]);
    }
    return l;
  }, it.apply(this, arguments);
};
function rl(n, l) {
  var i = {};
  for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && l.indexOf(u) < 0 && (i[u] = n[u]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, u = Object.getOwnPropertySymbols(n); s < u.length; s++)
      l.indexOf(u[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, u[s]) && (i[u[s]] = n[u[s]]);
  return i;
}
function En(n, l, i) {
  if (i || arguments.length === 2) for (var u = 0, s = l.length, f; u < s; u++)
    (f || !(u in l)) && (f || (f = Array.prototype.slice.call(l, 0, u)), f[u] = l[u]);
  return n.concat(f || Array.prototype.slice.call(l));
}
function yn(n, l) {
  var i = l && l.cache ? l.cache : gT, u = l && l.serializer ? l.serializer : mT, s = l && l.strategy ? l.strategy : dT;
  return s(n, {
    cache: i,
    serializer: u
  });
}
function sT(n) {
  return n == null || typeof n == "number" || typeof n == "boolean";
}
function fT(n, l, i, u) {
  var s = sT(u) ? u : i(u), f = l.get(s);
  return typeof f > "u" && (f = n.call(this, u), l.set(s, f)), f;
}
function ny(n, l, i) {
  var u = Array.prototype.slice.call(arguments, 3), s = i(u), f = l.get(s);
  return typeof f > "u" && (f = n.apply(this, u), l.set(s, f)), f;
}
function ay(n, l, i, u, s) {
  return i.bind(l, n, u, s);
}
function dT(n, l) {
  var i = n.length === 1 ? fT : ny;
  return ay(n, this, i, l.cache.create(), l.serializer);
}
function hT(n, l) {
  return ay(n, this, ny, l.cache.create(), l.serializer);
}
var mT = function() {
  return JSON.stringify(arguments);
}, pT = (
  /** @class */
  (function() {
    function n() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return n.prototype.get = function(l) {
      return this.cache[l];
    }, n.prototype.set = function(l, i) {
      this.cache[l] = i;
    }, n;
  })()
), gT = {
  create: function() {
    return new pT();
  }
}, vn = {
  variadic: hT
}, Tt;
(function(n) {
  n[n.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", n[n.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", n[n.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", n[n.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", n[n.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", n[n.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", n[n.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", n[n.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", n[n.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", n[n.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", n[n.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", n[n.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", n[n.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", n[n.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", n[n.INVALID_TAG = 23] = "INVALID_TAG", n[n.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", n[n.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", n[n.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Tt || (Tt = {}));
var Yt;
(function(n) {
  n[n.literal = 0] = "literal", n[n.argument = 1] = "argument", n[n.number = 2] = "number", n[n.date = 3] = "date", n[n.time = 4] = "time", n[n.select = 5] = "select", n[n.plural = 6] = "plural", n[n.pound = 7] = "pound", n[n.tag = 8] = "tag";
})(Yt || (Yt = {}));
var ll;
(function(n) {
  n[n.number = 0] = "number", n[n.dateTime = 1] = "dateTime";
})(ll || (ll = {}));
function Pp(n) {
  return n.type === Yt.literal;
}
function yT(n) {
  return n.type === Yt.argument;
}
function ry(n) {
  return n.type === Yt.number;
}
function ly(n) {
  return n.type === Yt.date;
}
function iy(n) {
  return n.type === Yt.time;
}
function uy(n) {
  return n.type === Yt.select;
}
function oy(n) {
  return n.type === Yt.plural;
}
function vT(n) {
  return n.type === Yt.pound;
}
function cy(n) {
  return n.type === Yt.tag;
}
function sy(n) {
  return !!(n && typeof n == "object" && n.type === ll.number);
}
function Af(n) {
  return !!(n && typeof n == "object" && n.type === ll.dateTime);
}
var fy = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, bT = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ST(n) {
  var l = {};
  return n.replace(bT, function(i) {
    var u = i.length;
    switch (i[0]) {
      // Era
      case "G":
        l.era = u === 4 ? "long" : u === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        l.year = u === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      // Quarter
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      // Month
      case "M":
      case "L":
        l.month = ["numeric", "2-digit", "short", "long", "narrow"][u - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        l.day = ["numeric", "2-digit"][u - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        l.weekday = u === 4 ? "long" : u === 5 ? "narrow" : "short";
        break;
      case "e":
        if (u < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        l.weekday = ["short", "long", "narrow", "short"][u - 4];
        break;
      case "c":
        if (u < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        l.weekday = ["short", "long", "narrow", "short"][u - 4];
        break;
      // Period
      case "a":
        l.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        l.hourCycle = "h12", l.hour = ["numeric", "2-digit"][u - 1];
        break;
      case "H":
        l.hourCycle = "h23", l.hour = ["numeric", "2-digit"][u - 1];
        break;
      case "K":
        l.hourCycle = "h11", l.hour = ["numeric", "2-digit"][u - 1];
        break;
      case "k":
        l.hourCycle = "h24", l.hour = ["numeric", "2-digit"][u - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        l.minute = ["numeric", "2-digit"][u - 1];
        break;
      // Second
      case "s":
        l.second = ["numeric", "2-digit"][u - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        l.timeZoneName = u < 4 ? "short" : "long";
        break;
      case "Z":
      // 1..3, 4, 5: The ISO8601 varios formats
      case "O":
      // 1, 4: milliseconds in day short, long
      case "v":
      // 1, 4: generic non-location format
      case "V":
      // 1, 2, 3, 4: time zone ID or city
      case "X":
      // 1, 2, 3, 4: The ISO8601 varios formats
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), l;
}
var xT = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ET(n) {
  if (n.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var l = n.split(xT).filter(function(A) {
    return A.length > 0;
  }), i = [], u = 0, s = l; u < s.length; u++) {
    var f = s[u], h = f.split("/");
    if (h.length === 0)
      throw new Error("Invalid number skeleton");
    for (var m = h[0], y = h.slice(1), p = 0, v = y; p < v.length; p++) {
      var S = v[p];
      if (S.length === 0)
        throw new Error("Invalid number skeleton");
    }
    i.push({ stem: m, options: y });
  }
  return i;
}
function TT(n) {
  return n.replace(/^(.*?)-/, "");
}
var tg = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, dy = /^(@+)?(\+|#+)?[rs]?$/g, AT = /(\*)(0+)|(#+)(0+)|(0+)/g, hy = /^(0+)$/;
function eg(n) {
  var l = {};
  return n[n.length - 1] === "r" ? l.roundingPriority = "morePrecision" : n[n.length - 1] === "s" && (l.roundingPriority = "lessPrecision"), n.replace(dy, function(i, u, s) {
    return typeof s != "string" ? (l.minimumSignificantDigits = u.length, l.maximumSignificantDigits = u.length) : s === "+" ? l.minimumSignificantDigits = u.length : u[0] === "#" ? l.maximumSignificantDigits = u.length : (l.minimumSignificantDigits = u.length, l.maximumSignificantDigits = u.length + (typeof s == "string" ? s.length : 0)), "";
  }), l;
}
function my(n) {
  switch (n) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function CT(n) {
  var l;
  if (n[0] === "E" && n[1] === "E" ? (l = {
    notation: "engineering"
  }, n = n.slice(2)) : n[0] === "E" && (l = {
    notation: "scientific"
  }, n = n.slice(1)), l) {
    var i = n.slice(0, 2);
    if (i === "+!" ? (l.signDisplay = "always", n = n.slice(2)) : i === "+?" && (l.signDisplay = "exceptZero", n = n.slice(2)), !hy.test(n))
      throw new Error("Malformed concise eng/scientific notation");
    l.minimumIntegerDigits = n.length;
  }
  return l;
}
function ng(n) {
  var l = {}, i = my(n);
  return i || l;
}
function MT(n) {
  for (var l = {}, i = 0, u = n; i < u.length; i++) {
    var s = u[i];
    switch (s.stem) {
      case "percent":
      case "%":
        l.style = "percent";
        continue;
      case "%x100":
        l.style = "percent", l.scale = 100;
        continue;
      case "currency":
        l.style = "currency", l.currency = s.options[0];
        continue;
      case "group-off":
      case ",_":
        l.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        l.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        l.style = "unit", l.unit = TT(s.options[0]);
        continue;
      case "compact-short":
      case "K":
        l.notation = "compact", l.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        l.notation = "compact", l.compactDisplay = "long";
        continue;
      case "scientific":
        l = it(it(it({}, l), { notation: "scientific" }), s.options.reduce(function(y, p) {
          return it(it({}, y), ng(p));
        }, {}));
        continue;
      case "engineering":
        l = it(it(it({}, l), { notation: "engineering" }), s.options.reduce(function(y, p) {
          return it(it({}, y), ng(p));
        }, {}));
        continue;
      case "notation-simple":
        l.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        l.currencyDisplay = "narrowSymbol", l.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        l.currencyDisplay = "code", l.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        l.currencyDisplay = "name", l.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        l.currencyDisplay = "symbol";
        continue;
      case "scale":
        l.scale = parseFloat(s.options[0]);
        continue;
      case "rounding-mode-floor":
        l.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        l.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        l.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        l.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        l.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        l.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        l.roundingMode = "halfExpand";
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (s.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        s.options[0].replace(AT, function(y, p, v, S, A, _) {
          if (p)
            l.minimumIntegerDigits = v.length;
          else {
            if (S && A)
              throw new Error("We currently do not support maximum integer digits");
            if (_)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (hy.test(s.stem)) {
      l.minimumIntegerDigits = s.stem.length;
      continue;
    }
    if (tg.test(s.stem)) {
      if (s.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      s.stem.replace(tg, function(y, p, v, S, A, _) {
        return v === "*" ? l.minimumFractionDigits = p.length : S && S[0] === "#" ? l.maximumFractionDigits = S.length : A && _ ? (l.minimumFractionDigits = A.length, l.maximumFractionDigits = A.length + _.length) : (l.minimumFractionDigits = p.length, l.maximumFractionDigits = p.length), "";
      });
      var f = s.options[0];
      f === "w" ? l = it(it({}, l), { trailingZeroDisplay: "stripIfInteger" }) : f && (l = it(it({}, l), eg(f)));
      continue;
    }
    if (dy.test(s.stem)) {
      l = it(it({}, l), eg(s.stem));
      continue;
    }
    var h = my(s.stem);
    h && (l = it(it({}, l), h));
    var m = CT(s.stem);
    m && (l = it(it({}, l), m));
  }
  return l;
}
var Zu = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function OT(n, l) {
  for (var i = "", u = 0; u < n.length; u++) {
    var s = n.charAt(u);
    if (s === "j") {
      for (var f = 0; u + 1 < n.length && n.charAt(u + 1) === s; )
        f++, u++;
      var h = 1 + (f & 1), m = f < 2 ? 1 : 3 + (f >> 1), y = "a", p = _T(l);
      for ((p == "H" || p == "k") && (m = 0); m-- > 0; )
        i += y;
      for (; h-- > 0; )
        i = p + i;
    } else s === "J" ? i += "H" : i += s;
  }
  return i;
}
function _T(n) {
  var l = n.hourCycle;
  if (l === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  n.hourCycles && // @ts-ignore
  n.hourCycles.length && (l = n.hourCycles[0]), l)
    switch (l) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var i = n.language, u;
  i !== "root" && (u = n.maximize().region);
  var s = Zu[u || ""] || Zu[i || ""] || Zu["".concat(i, "-001")] || Zu["001"];
  return s[0];
}
var lf, RT = new RegExp("^".concat(fy.source, "*")), BT = new RegExp("".concat(fy.source, "*$"));
function At(n, l) {
  return { start: n, end: l };
}
var DT = !!String.prototype.startsWith && "_a".startsWith("a", 1), NT = !!String.fromCodePoint, HT = !!Object.fromEntries, zT = !!String.prototype.codePointAt, wT = !!String.prototype.trimStart, LT = !!String.prototype.trimEnd, UT = !!Number.isSafeInteger, GT = UT ? Number.isSafeInteger : function(n) {
  return typeof n == "number" && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 9007199254740991;
}, Cf = !0;
try {
  var jT = gy("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Cf = ((lf = jT.exec("a")) === null || lf === void 0 ? void 0 : lf[0]) === "a";
} catch {
  Cf = !1;
}
var ag = DT ? (
  // Native
  function(l, i, u) {
    return l.startsWith(i, u);
  }
) : (
  // For IE11
  function(l, i, u) {
    return l.slice(u, u + i.length) === i;
  }
), Mf = NT ? String.fromCodePoint : (
  // IE11
  function() {
    for (var l = [], i = 0; i < arguments.length; i++)
      l[i] = arguments[i];
    for (var u = "", s = l.length, f = 0, h; s > f; ) {
      if (h = l[f++], h > 1114111)
        throw RangeError(h + " is not a valid code point");
      u += h < 65536 ? String.fromCharCode(h) : String.fromCharCode(((h -= 65536) >> 10) + 55296, h % 1024 + 56320);
    }
    return u;
  }
), rg = (
  // native
  HT ? Object.fromEntries : (
    // Ponyfill
    function(l) {
      for (var i = {}, u = 0, s = l; u < s.length; u++) {
        var f = s[u], h = f[0], m = f[1];
        i[h] = m;
      }
      return i;
    }
  )
), py = zT ? (
  // Native
  function(l, i) {
    return l.codePointAt(i);
  }
) : (
  // IE 11
  function(l, i) {
    var u = l.length;
    if (!(i < 0 || i >= u)) {
      var s = l.charCodeAt(i), f;
      return s < 55296 || s > 56319 || i + 1 === u || (f = l.charCodeAt(i + 1)) < 56320 || f > 57343 ? s : (s - 55296 << 10) + (f - 56320) + 65536;
    }
  }
), kT = wT ? (
  // Native
  function(l) {
    return l.trimStart();
  }
) : (
  // Ponyfill
  function(l) {
    return l.replace(RT, "");
  }
), $T = LT ? (
  // Native
  function(l) {
    return l.trimEnd();
  }
) : (
  // Ponyfill
  function(l) {
    return l.replace(BT, "");
  }
);
function gy(n, l) {
  return new RegExp(n, l);
}
var Of;
if (Cf) {
  var lg = gy("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Of = function(l, i) {
    var u;
    lg.lastIndex = i;
    var s = lg.exec(l);
    return (u = s[1]) !== null && u !== void 0 ? u : "";
  };
} else
  Of = function(l, i) {
    for (var u = []; ; ) {
      var s = py(l, i);
      if (s === void 0 || yy(s) || XT(s))
        break;
      u.push(s), i += s >= 65536 ? 2 : 1;
    }
    return Mf.apply(void 0, u);
  };
var qT = (
  /** @class */
  (function() {
    function n(l, i) {
      i === void 0 && (i = {}), this.message = l, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!i.ignoreTag, this.locale = i.locale, this.requiresOtherClause = !!i.requiresOtherClause, this.shouldParseSkeletons = !!i.shouldParseSkeletons;
    }
    return n.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, n.prototype.parseMessage = function(l, i, u) {
      for (var s = []; !this.isEOF(); ) {
        var f = this.char();
        if (f === 123) {
          var h = this.parseArgument(l, u);
          if (h.err)
            return h;
          s.push(h.val);
        } else {
          if (f === 125 && l > 0)
            break;
          if (f === 35 && (i === "plural" || i === "selectordinal")) {
            var m = this.clonePosition();
            this.bump(), s.push({
              type: Yt.pound,
              location: At(m, this.clonePosition())
            });
          } else if (f === 60 && !this.ignoreTag && this.peek() === 47) {
            if (u)
              break;
            return this.error(Tt.UNMATCHED_CLOSING_TAG, At(this.clonePosition(), this.clonePosition()));
          } else if (f === 60 && !this.ignoreTag && _f(this.peek() || 0)) {
            var h = this.parseTag(l, i);
            if (h.err)
              return h;
            s.push(h.val);
          } else {
            var h = this.parseLiteral(l, i);
            if (h.err)
              return h;
            s.push(h.val);
          }
        }
      }
      return { val: s, err: null };
    }, n.prototype.parseTag = function(l, i) {
      var u = this.clonePosition();
      this.bump();
      var s = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Yt.literal,
            value: "<".concat(s, "/>"),
            location: At(u, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var f = this.parseMessage(l + 1, i, !0);
        if (f.err)
          return f;
        var h = f.val, m = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !_f(this.char()))
            return this.error(Tt.INVALID_TAG, At(m, this.clonePosition()));
          var y = this.clonePosition(), p = this.parseTagName();
          return s !== p ? this.error(Tt.UNMATCHED_CLOSING_TAG, At(y, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Yt.tag,
              value: s,
              children: h,
              location: At(u, this.clonePosition())
            },
            err: null
          } : this.error(Tt.INVALID_TAG, At(m, this.clonePosition())));
        } else
          return this.error(Tt.UNCLOSED_TAG, At(u, this.clonePosition()));
      } else
        return this.error(Tt.INVALID_TAG, At(u, this.clonePosition()));
    }, n.prototype.parseTagName = function() {
      var l = this.offset();
      for (this.bump(); !this.isEOF() && VT(this.char()); )
        this.bump();
      return this.message.slice(l, this.offset());
    }, n.prototype.parseLiteral = function(l, i) {
      for (var u = this.clonePosition(), s = ""; ; ) {
        var f = this.tryParseQuote(i);
        if (f) {
          s += f;
          continue;
        }
        var h = this.tryParseUnquoted(l, i);
        if (h) {
          s += h;
          continue;
        }
        var m = this.tryParseLeftAngleBracket();
        if (m) {
          s += m;
          continue;
        }
        break;
      }
      var y = At(u, this.clonePosition());
      return {
        val: { type: Yt.literal, value: s, location: y },
        err: null
      };
    }, n.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !YT(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, n.prototype.tryParseQuote = function(l) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        // '{', '<', '>', '}'
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (l === "plural" || l === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var i = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var u = this.char();
        if (u === 39)
          if (this.peek() === 39)
            i.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          i.push(u);
        this.bump();
      }
      return Mf.apply(void 0, i);
    }, n.prototype.tryParseUnquoted = function(l, i) {
      if (this.isEOF())
        return null;
      var u = this.char();
      return u === 60 || u === 123 || u === 35 && (i === "plural" || i === "selectordinal") || u === 125 && l > 0 ? null : (this.bump(), Mf(u));
    }, n.prototype.parseArgument = function(l, i) {
      var u = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Tt.EXPECT_ARGUMENT_CLOSING_BRACE, At(u, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Tt.EMPTY_ARGUMENT, At(u, this.clonePosition()));
      var s = this.parseIdentifierIfPossible().value;
      if (!s)
        return this.error(Tt.MALFORMED_ARGUMENT, At(u, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Tt.EXPECT_ARGUMENT_CLOSING_BRACE, At(u, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: Yt.argument,
              // value does not include the opening and closing braces.
              value: s,
              location: At(u, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Tt.EXPECT_ARGUMENT_CLOSING_BRACE, At(u, this.clonePosition())) : this.parseArgumentOptions(l, i, s, u);
        default:
          return this.error(Tt.MALFORMED_ARGUMENT, At(u, this.clonePosition()));
      }
    }, n.prototype.parseIdentifierIfPossible = function() {
      var l = this.clonePosition(), i = this.offset(), u = Of(this.message, i), s = i + u.length;
      this.bumpTo(s);
      var f = this.clonePosition(), h = At(l, f);
      return { value: u, location: h };
    }, n.prototype.parseArgumentOptions = function(l, i, u, s) {
      var f, h = this.clonePosition(), m = this.parseIdentifierIfPossible().value, y = this.clonePosition();
      switch (m) {
        case "":
          return this.error(Tt.EXPECT_ARGUMENT_TYPE, At(h, y));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var p = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var v = this.clonePosition(), S = this.parseSimpleArgStyleIfPossible();
            if (S.err)
              return S;
            var A = $T(S.val);
            if (A.length === 0)
              return this.error(Tt.EXPECT_ARGUMENT_STYLE, At(this.clonePosition(), this.clonePosition()));
            var _ = At(v, this.clonePosition());
            p = { style: A, styleLocation: _ };
          }
          var M = this.tryParseArgumentClose(s);
          if (M.err)
            return M;
          var C = At(s, this.clonePosition());
          if (p && ag(p?.style, "::", 0)) {
            var z = kT(p.style.slice(2));
            if (m === "number") {
              var S = this.parseNumberSkeletonFromString(z, p.styleLocation);
              return S.err ? S : {
                val: { type: Yt.number, value: u, location: C, style: S.val },
                err: null
              };
            } else {
              if (z.length === 0)
                return this.error(Tt.EXPECT_DATE_TIME_SKELETON, C);
              var k = z;
              this.locale && (k = OT(z, this.locale));
              var A = {
                type: ll.dateTime,
                pattern: k,
                location: p.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? ST(k) : {}
              }, F = m === "date" ? Yt.date : Yt.time;
              return {
                val: { type: F, value: u, location: C, style: A },
                err: null
              };
            }
          }
          return {
            val: {
              type: m === "number" ? Yt.number : m === "date" ? Yt.date : Yt.time,
              value: u,
              location: C,
              style: (f = p?.style) !== null && f !== void 0 ? f : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var V = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Tt.EXPECT_SELECT_ARGUMENT_OPTIONS, At(V, it({}, V)));
          this.bumpSpace();
          var Q = this.parseIdentifierIfPossible(), w = 0;
          if (m !== "select" && Q.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, At(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var S = this.tryParseDecimalInteger(Tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Tt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (S.err)
              return S;
            this.bumpSpace(), Q = this.parseIdentifierIfPossible(), w = S.val;
          }
          var q = this.tryParsePluralOrSelectOptions(l, m, i, Q);
          if (q.err)
            return q;
          var M = this.tryParseArgumentClose(s);
          if (M.err)
            return M;
          var X = At(s, this.clonePosition());
          return m === "select" ? {
            val: {
              type: Yt.select,
              value: u,
              options: rg(q.val),
              location: X
            },
            err: null
          } : {
            val: {
              type: Yt.plural,
              value: u,
              options: rg(q.val),
              offset: w,
              pluralType: m === "plural" ? "cardinal" : "ordinal",
              location: X
            },
            err: null
          };
        }
        default:
          return this.error(Tt.INVALID_ARGUMENT_TYPE, At(h, y));
      }
    }, n.prototype.tryParseArgumentClose = function(l) {
      return this.isEOF() || this.char() !== 125 ? this.error(Tt.EXPECT_ARGUMENT_CLOSING_BRACE, At(l, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, n.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var l = 0, i = this.clonePosition(); !this.isEOF(); ) {
        var u = this.char();
        switch (u) {
          case 39: {
            this.bump();
            var s = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Tt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, At(s, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            l += 1, this.bump();
            break;
          }
          case 125: {
            if (l > 0)
              l -= 1;
            else
              return {
                val: this.message.slice(i.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(i.offset, this.offset()),
        err: null
      };
    }, n.prototype.parseNumberSkeletonFromString = function(l, i) {
      var u = [];
      try {
        u = ET(l);
      } catch {
        return this.error(Tt.INVALID_NUMBER_SKELETON, i);
      }
      return {
        val: {
          type: ll.number,
          tokens: u,
          location: i,
          parsedOptions: this.shouldParseSkeletons ? MT(u) : {}
        },
        err: null
      };
    }, n.prototype.tryParsePluralOrSelectOptions = function(l, i, u, s) {
      for (var f, h = !1, m = [], y = /* @__PURE__ */ new Set(), p = s.value, v = s.location; ; ) {
        if (p.length === 0) {
          var S = this.clonePosition();
          if (i !== "select" && this.bumpIf("=")) {
            var A = this.tryParseDecimalInteger(Tt.EXPECT_PLURAL_ARGUMENT_SELECTOR, Tt.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (A.err)
              return A;
            v = At(S, this.clonePosition()), p = this.message.slice(S.offset, this.offset());
          } else
            break;
        }
        if (y.has(p))
          return this.error(i === "select" ? Tt.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Tt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, v);
        p === "other" && (h = !0), this.bumpSpace();
        var _ = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(i === "select" ? Tt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Tt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, At(this.clonePosition(), this.clonePosition()));
        var M = this.parseMessage(l + 1, i, u);
        if (M.err)
          return M;
        var C = this.tryParseArgumentClose(_);
        if (C.err)
          return C;
        m.push([
          p,
          {
            value: M.val,
            location: At(_, this.clonePosition())
          }
        ]), y.add(p), this.bumpSpace(), f = this.parseIdentifierIfPossible(), p = f.value, v = f.location;
      }
      return m.length === 0 ? this.error(i === "select" ? Tt.EXPECT_SELECT_ARGUMENT_SELECTOR : Tt.EXPECT_PLURAL_ARGUMENT_SELECTOR, At(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !h ? this.error(Tt.MISSING_OTHER_CLAUSE, At(this.clonePosition(), this.clonePosition())) : { val: m, err: null };
    }, n.prototype.tryParseDecimalInteger = function(l, i) {
      var u = 1, s = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (u = -1);
      for (var f = !1, h = 0; !this.isEOF(); ) {
        var m = this.char();
        if (m >= 48 && m <= 57)
          f = !0, h = h * 10 + (m - 48), this.bump();
        else
          break;
      }
      var y = At(s, this.clonePosition());
      return f ? (h *= u, GT(h) ? { val: h, err: null } : this.error(i, y)) : this.error(l, y);
    }, n.prototype.offset = function() {
      return this.position.offset;
    }, n.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, n.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, n.prototype.char = function() {
      var l = this.position.offset;
      if (l >= this.message.length)
        throw Error("out of bound");
      var i = py(this.message, l);
      if (i === void 0)
        throw Error("Offset ".concat(l, " is at invalid UTF-16 code unit boundary"));
      return i;
    }, n.prototype.error = function(l, i) {
      return {
        val: null,
        err: {
          kind: l,
          message: this.message,
          location: i
        }
      };
    }, n.prototype.bump = function() {
      if (!this.isEOF()) {
        var l = this.char();
        l === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += l < 65536 ? 1 : 2);
      }
    }, n.prototype.bumpIf = function(l) {
      if (ag(this.message, l, this.offset())) {
        for (var i = 0; i < l.length; i++)
          this.bump();
        return !0;
      }
      return !1;
    }, n.prototype.bumpUntil = function(l) {
      var i = this.offset(), u = this.message.indexOf(l, i);
      return u >= 0 ? (this.bumpTo(u), !0) : (this.bumpTo(this.message.length), !1);
    }, n.prototype.bumpTo = function(l) {
      if (this.offset() > l)
        throw Error("targetOffset ".concat(l, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (l = Math.min(l, this.message.length); ; ) {
        var i = this.offset();
        if (i === l)
          break;
        if (i > l)
          throw Error("targetOffset ".concat(l, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, n.prototype.bumpSpace = function() {
      for (; !this.isEOF() && yy(this.char()); )
        this.bump();
    }, n.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var l = this.char(), i = this.offset(), u = this.message.charCodeAt(i + (l >= 65536 ? 2 : 1));
      return u ?? null;
    }, n;
  })()
);
function _f(n) {
  return n >= 97 && n <= 122 || n >= 65 && n <= 90;
}
function YT(n) {
  return _f(n) || n === 47;
}
function VT(n) {
  return n === 45 || n === 46 || n >= 48 && n <= 57 || n === 95 || n >= 97 && n <= 122 || n >= 65 && n <= 90 || n == 183 || n >= 192 && n <= 214 || n >= 216 && n <= 246 || n >= 248 && n <= 893 || n >= 895 && n <= 8191 || n >= 8204 && n <= 8205 || n >= 8255 && n <= 8256 || n >= 8304 && n <= 8591 || n >= 11264 && n <= 12271 || n >= 12289 && n <= 55295 || n >= 63744 && n <= 64975 || n >= 65008 && n <= 65533 || n >= 65536 && n <= 983039;
}
function yy(n) {
  return n >= 9 && n <= 13 || n === 32 || n === 133 || n >= 8206 && n <= 8207 || n === 8232 || n === 8233;
}
function XT(n) {
  return n >= 33 && n <= 35 || n === 36 || n >= 37 && n <= 39 || n === 40 || n === 41 || n === 42 || n === 43 || n === 44 || n === 45 || n >= 46 && n <= 47 || n >= 58 && n <= 59 || n >= 60 && n <= 62 || n >= 63 && n <= 64 || n === 91 || n === 92 || n === 93 || n === 94 || n === 96 || n === 123 || n === 124 || n === 125 || n === 126 || n === 161 || n >= 162 && n <= 165 || n === 166 || n === 167 || n === 169 || n === 171 || n === 172 || n === 174 || n === 176 || n === 177 || n === 182 || n === 187 || n === 191 || n === 215 || n === 247 || n >= 8208 && n <= 8213 || n >= 8214 && n <= 8215 || n === 8216 || n === 8217 || n === 8218 || n >= 8219 && n <= 8220 || n === 8221 || n === 8222 || n === 8223 || n >= 8224 && n <= 8231 || n >= 8240 && n <= 8248 || n === 8249 || n === 8250 || n >= 8251 && n <= 8254 || n >= 8257 && n <= 8259 || n === 8260 || n === 8261 || n === 8262 || n >= 8263 && n <= 8273 || n === 8274 || n === 8275 || n >= 8277 && n <= 8286 || n >= 8592 && n <= 8596 || n >= 8597 && n <= 8601 || n >= 8602 && n <= 8603 || n >= 8604 && n <= 8607 || n === 8608 || n >= 8609 && n <= 8610 || n === 8611 || n >= 8612 && n <= 8613 || n === 8614 || n >= 8615 && n <= 8621 || n === 8622 || n >= 8623 && n <= 8653 || n >= 8654 && n <= 8655 || n >= 8656 && n <= 8657 || n === 8658 || n === 8659 || n === 8660 || n >= 8661 && n <= 8691 || n >= 8692 && n <= 8959 || n >= 8960 && n <= 8967 || n === 8968 || n === 8969 || n === 8970 || n === 8971 || n >= 8972 && n <= 8991 || n >= 8992 && n <= 8993 || n >= 8994 && n <= 9e3 || n === 9001 || n === 9002 || n >= 9003 && n <= 9083 || n === 9084 || n >= 9085 && n <= 9114 || n >= 9115 && n <= 9139 || n >= 9140 && n <= 9179 || n >= 9180 && n <= 9185 || n >= 9186 && n <= 9254 || n >= 9255 && n <= 9279 || n >= 9280 && n <= 9290 || n >= 9291 && n <= 9311 || n >= 9472 && n <= 9654 || n === 9655 || n >= 9656 && n <= 9664 || n === 9665 || n >= 9666 && n <= 9719 || n >= 9720 && n <= 9727 || n >= 9728 && n <= 9838 || n === 9839 || n >= 9840 && n <= 10087 || n === 10088 || n === 10089 || n === 10090 || n === 10091 || n === 10092 || n === 10093 || n === 10094 || n === 10095 || n === 10096 || n === 10097 || n === 10098 || n === 10099 || n === 10100 || n === 10101 || n >= 10132 && n <= 10175 || n >= 10176 && n <= 10180 || n === 10181 || n === 10182 || n >= 10183 && n <= 10213 || n === 10214 || n === 10215 || n === 10216 || n === 10217 || n === 10218 || n === 10219 || n === 10220 || n === 10221 || n === 10222 || n === 10223 || n >= 10224 && n <= 10239 || n >= 10240 && n <= 10495 || n >= 10496 && n <= 10626 || n === 10627 || n === 10628 || n === 10629 || n === 10630 || n === 10631 || n === 10632 || n === 10633 || n === 10634 || n === 10635 || n === 10636 || n === 10637 || n === 10638 || n === 10639 || n === 10640 || n === 10641 || n === 10642 || n === 10643 || n === 10644 || n === 10645 || n === 10646 || n === 10647 || n === 10648 || n >= 10649 && n <= 10711 || n === 10712 || n === 10713 || n === 10714 || n === 10715 || n >= 10716 && n <= 10747 || n === 10748 || n === 10749 || n >= 10750 && n <= 11007 || n >= 11008 && n <= 11055 || n >= 11056 && n <= 11076 || n >= 11077 && n <= 11078 || n >= 11079 && n <= 11084 || n >= 11085 && n <= 11123 || n >= 11124 && n <= 11125 || n >= 11126 && n <= 11157 || n === 11158 || n >= 11159 && n <= 11263 || n >= 11776 && n <= 11777 || n === 11778 || n === 11779 || n === 11780 || n === 11781 || n >= 11782 && n <= 11784 || n === 11785 || n === 11786 || n === 11787 || n === 11788 || n === 11789 || n >= 11790 && n <= 11798 || n === 11799 || n >= 11800 && n <= 11801 || n === 11802 || n === 11803 || n === 11804 || n === 11805 || n >= 11806 && n <= 11807 || n === 11808 || n === 11809 || n === 11810 || n === 11811 || n === 11812 || n === 11813 || n === 11814 || n === 11815 || n === 11816 || n === 11817 || n >= 11818 && n <= 11822 || n === 11823 || n >= 11824 && n <= 11833 || n >= 11834 && n <= 11835 || n >= 11836 && n <= 11839 || n === 11840 || n === 11841 || n === 11842 || n >= 11843 && n <= 11855 || n >= 11856 && n <= 11857 || n === 11858 || n >= 11859 && n <= 11903 || n >= 12289 && n <= 12291 || n === 12296 || n === 12297 || n === 12298 || n === 12299 || n === 12300 || n === 12301 || n === 12302 || n === 12303 || n === 12304 || n === 12305 || n >= 12306 && n <= 12307 || n === 12308 || n === 12309 || n === 12310 || n === 12311 || n === 12312 || n === 12313 || n === 12314 || n === 12315 || n === 12316 || n === 12317 || n >= 12318 && n <= 12319 || n === 12320 || n === 12336 || n === 64830 || n === 64831 || n >= 65093 && n <= 65094;
}
function Rf(n) {
  n.forEach(function(l) {
    if (delete l.location, uy(l) || oy(l))
      for (var i in l.options)
        delete l.options[i].location, Rf(l.options[i].value);
    else ry(l) && sy(l.style) || (ly(l) || iy(l)) && Af(l.style) ? delete l.style.location : cy(l) && Rf(l.children);
  });
}
function FT(n, l) {
  l === void 0 && (l = {}), l = it({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, l);
  var i = new qT(n, l).parse();
  if (i.err) {
    var u = SyntaxError(Tt[i.err.kind]);
    throw u.location = i.err.location, u.originalMessage = i.err.message, u;
  }
  return l?.captureLocation || Rf(i.val), i.val;
}
var Mn;
(function(n) {
  n.MISSING_VALUE = "MISSING_VALUE", n.INVALID_VALUE = "INVALID_VALUE", n.MISSING_INTL_API = "MISSING_INTL_API";
})(Mn || (Mn = {}));
var Ea = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u, s) {
      var f = n.call(this, i) || this;
      return f.code = u, f.originalMessage = s, f;
    }
    return l.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, l;
  })(Error)
), ig = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u, s, f) {
      return n.call(this, 'Invalid values for "'.concat(i, '": "').concat(u, '". Options are "').concat(Object.keys(s).join('", "'), '"'), Mn.INVALID_VALUE, f) || this;
    }
    return l;
  })(Ea)
), QT = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u, s) {
      return n.call(this, 'Value for "'.concat(i, '" must be of type ').concat(u), Mn.INVALID_VALUE, s) || this;
    }
    return l;
  })(Ea)
), ZT = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u) {
      return n.call(this, 'The intl string context variable "'.concat(i, '" was not provided to the string "').concat(u, '"'), Mn.MISSING_VALUE, u) || this;
    }
    return l;
  })(Ea)
), Te;
(function(n) {
  n[n.literal = 0] = "literal", n[n.object = 1] = "object";
})(Te || (Te = {}));
function KT(n) {
  return n.length < 2 ? n : n.reduce(function(l, i) {
    var u = l[l.length - 1];
    return !u || u.type !== Te.literal || i.type !== Te.literal ? l.push(i) : u.value += i.value, l;
  }, []);
}
function vy(n) {
  return typeof n == "function";
}
function eo(n, l, i, u, s, f, h) {
  if (n.length === 1 && Pp(n[0]))
    return [
      {
        type: Te.literal,
        value: n[0].value
      }
    ];
  for (var m = [], y = 0, p = n; y < p.length; y++) {
    var v = p[y];
    if (Pp(v)) {
      m.push({
        type: Te.literal,
        value: v.value
      });
      continue;
    }
    if (vT(v)) {
      typeof f == "number" && m.push({
        type: Te.literal,
        value: i.getNumberFormat(l).format(f)
      });
      continue;
    }
    var S = v.value;
    if (!(s && S in s))
      throw new ZT(S, h);
    var A = s[S];
    if (yT(v)) {
      (!A || typeof A == "string" || typeof A == "number") && (A = typeof A == "string" || typeof A == "number" ? String(A) : ""), m.push({
        type: typeof A == "string" ? Te.literal : Te.object,
        value: A
      });
      continue;
    }
    if (ly(v)) {
      var _ = typeof v.style == "string" ? u.date[v.style] : Af(v.style) ? v.style.parsedOptions : void 0;
      m.push({
        type: Te.literal,
        value: i.getDateTimeFormat(l, _).format(A)
      });
      continue;
    }
    if (iy(v)) {
      var _ = typeof v.style == "string" ? u.time[v.style] : Af(v.style) ? v.style.parsedOptions : u.time.medium;
      m.push({
        type: Te.literal,
        value: i.getDateTimeFormat(l, _).format(A)
      });
      continue;
    }
    if (ry(v)) {
      var _ = typeof v.style == "string" ? u.number[v.style] : sy(v.style) ? v.style.parsedOptions : void 0;
      _ && _.scale && (A = A * (_.scale || 1)), m.push({
        type: Te.literal,
        value: i.getNumberFormat(l, _).format(A)
      });
      continue;
    }
    if (cy(v)) {
      var M = v.children, C = v.value, z = s[C];
      if (!vy(z))
        throw new QT(C, "function", h);
      var k = eo(M, l, i, u, s, f), F = z(k.map(function(w) {
        return w.value;
      }));
      Array.isArray(F) || (F = [F]), m.push.apply(m, F.map(function(w) {
        return {
          type: typeof w == "string" ? Te.literal : Te.object,
          value: w
        };
      }));
    }
    if (uy(v)) {
      var V = v.options[A] || v.options.other;
      if (!V)
        throw new ig(v.value, A, Object.keys(v.options), h);
      m.push.apply(m, eo(V.value, l, i, u, s));
      continue;
    }
    if (oy(v)) {
      var V = v.options["=".concat(A)];
      if (!V) {
        if (!Intl.PluralRules)
          throw new Ea(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Mn.MISSING_INTL_API, h);
        var Q = i.getPluralRules(l, { type: v.pluralType }).select(A - (v.offset || 0));
        V = v.options[Q] || v.options.other;
      }
      if (!V)
        throw new ig(v.value, A, Object.keys(v.options), h);
      m.push.apply(m, eo(V.value, l, i, u, s, A - (v.offset || 0)));
      continue;
    }
  }
  return KT(m);
}
function IT(n, l) {
  return l ? it(it(it({}, n || {}), l || {}), Object.keys(n).reduce(function(i, u) {
    return i[u] = it(it({}, n[u]), l[u] || {}), i;
  }, {})) : n;
}
function JT(n, l) {
  return l ? Object.keys(n).reduce(function(i, u) {
    return i[u] = IT(n[u], l[u]), i;
  }, it({}, n)) : n;
}
function uf(n) {
  return {
    create: function() {
      return {
        get: function(l) {
          return n[l];
        },
        set: function(l, i) {
          n[l] = i;
        }
      };
    }
  };
}
function WT(n) {
  return n === void 0 && (n = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: yn(function() {
      for (var l, i = [], u = 0; u < arguments.length; u++)
        i[u] = arguments[u];
      return new ((l = Intl.NumberFormat).bind.apply(l, En([void 0], i, !1)))();
    }, {
      cache: uf(n.number),
      strategy: vn.variadic
    }),
    getDateTimeFormat: yn(function() {
      for (var l, i = [], u = 0; u < arguments.length; u++)
        i[u] = arguments[u];
      return new ((l = Intl.DateTimeFormat).bind.apply(l, En([void 0], i, !1)))();
    }, {
      cache: uf(n.dateTime),
      strategy: vn.variadic
    }),
    getPluralRules: yn(function() {
      for (var l, i = [], u = 0; u < arguments.length; u++)
        i[u] = arguments[u];
      return new ((l = Intl.PluralRules).bind.apply(l, En([void 0], i, !1)))();
    }, {
      cache: uf(n.pluralRules),
      strategy: vn.variadic
    })
  };
}
var by = (
  /** @class */
  (function() {
    function n(l, i, u, s) {
      i === void 0 && (i = n.defaultLocale);
      var f = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(y) {
        var p = f.formatToParts(y);
        if (p.length === 1)
          return p[0].value;
        var v = p.reduce(function(S, A) {
          return !S.length || A.type !== Te.literal || typeof S[S.length - 1] != "string" ? S.push(A.value) : S[S.length - 1] += A.value, S;
        }, []);
        return v.length <= 1 ? v[0] || "" : v;
      }, this.formatToParts = function(y) {
        return eo(f.ast, f.locales, f.formatters, f.formats, y, void 0, f.message);
      }, this.resolvedOptions = function() {
        var y;
        return {
          locale: ((y = f.resolvedLocale) === null || y === void 0 ? void 0 : y.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
        };
      }, this.getAst = function() {
        return f.ast;
      }, this.locales = i, this.resolvedLocale = n.resolveLocale(i), typeof l == "string") {
        if (this.message = l, !n.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var h = s || {};
        h.formatters;
        var m = rl(h, ["formatters"]);
        this.ast = n.__parse(l, it(it({}, m), { locale: this.resolvedLocale }));
      } else
        this.ast = l;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = JT(n.formats, u), this.formatters = s && s.formatters || WT(this.formatterCache);
    }
    return Object.defineProperty(n, "defaultLocale", {
      get: function() {
        return n.memoizedDefaultLocale || (n.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), n.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), n.memoizedDefaultLocale = null, n.resolveLocale = function(l) {
      if (!(typeof Intl.Locale > "u")) {
        var i = Intl.NumberFormat.supportedLocalesOf(l);
        return i.length > 0 ? new Intl.Locale(i[0]) : new Intl.Locale(typeof l == "string" ? l : l[0]);
      }
    }, n.__parse = FT, n.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, n;
  })()
), Pa;
(function(n) {
  n.FORMAT_ERROR = "FORMAT_ERROR", n.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", n.INVALID_CONFIG = "INVALID_CONFIG", n.MISSING_DATA = "MISSING_DATA", n.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Pa || (Pa = {}));
var Ei = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u, s) {
      var f = this, h = s ? s instanceof Error ? s : new Error(String(s)) : void 0;
      return f = n.call(this, "[@formatjs/intl Error ".concat(i, "] ").concat(u, `
`).concat(h ? `
`.concat(h.message, `
`).concat(h.stack) : "")) || this, f.code = i, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(f, l), f;
    }
    return l;
  })(Error)
), PT = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u) {
      return n.call(this, Pa.UNSUPPORTED_FORMATTER, i, u) || this;
    }
    return l;
  })(Ei)
), tA = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u) {
      return n.call(this, Pa.INVALID_CONFIG, i, u) || this;
    }
    return l;
  })(Ei)
), ug = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u) {
      return n.call(this, Pa.MISSING_DATA, i, u) || this;
    }
    return l;
  })(Ei)
), ln = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u, s) {
      var f = n.call(this, Pa.FORMAT_ERROR, "".concat(i, `
Locale: `).concat(u, `
`), s) || this;
      return f.locale = u, f;
    }
    return l;
  })(Ei)
), of = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u, s, f) {
      var h = n.call(this, "".concat(i, `
MessageID: `).concat(s?.id, `
Default Message: `).concat(s?.defaultMessage, `
Description: `).concat(s?.description, `
`), u, f) || this;
      return h.descriptor = s, h.locale = u, h;
    }
    return l;
  })(ln)
), eA = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l(i, u) {
      var s = n.call(this, Pa.MISSING_TRANSLATION, 'Missing message: "'.concat(i.id, '" for locale "').concat(u, '", using ').concat(i.defaultMessage ? "default message (".concat(typeof i.defaultMessage == "string" ? i.defaultMessage : i.defaultMessage.map(function(f) {
        var h;
        return (h = f.value) !== null && h !== void 0 ? h : JSON.stringify(f);
      }).join(), ")") : "id", " as fallback.")) || this;
      return s.descriptor = i, s;
    }
    return l;
  })(Ei)
);
function nA(n, l, i) {
  if (i === void 0 && (i = Error), !n)
    throw new i(l);
}
function sl(n, l, i) {
  return i === void 0 && (i = {}), l.reduce(function(u, s) {
    return s in n ? u[s] = n[s] : s in i && (u[s] = i[s]), u;
  }, {});
}
var aA = function(n) {
}, rA = function(n) {
}, Sy = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: aA,
  onWarn: rA
};
function xy() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function Qa(n) {
  return {
    create: function() {
      return {
        get: function(l) {
          return n[l];
        },
        set: function(l, i) {
          n[l] = i;
        }
      };
    }
  };
}
function lA(n) {
  n === void 0 && (n = xy());
  var l = Intl.RelativeTimeFormat, i = Intl.ListFormat, u = Intl.DisplayNames, s = yn(function() {
    for (var m, y = [], p = 0; p < arguments.length; p++)
      y[p] = arguments[p];
    return new ((m = Intl.DateTimeFormat).bind.apply(m, En([void 0], y, !1)))();
  }, {
    cache: Qa(n.dateTime),
    strategy: vn.variadic
  }), f = yn(function() {
    for (var m, y = [], p = 0; p < arguments.length; p++)
      y[p] = arguments[p];
    return new ((m = Intl.NumberFormat).bind.apply(m, En([void 0], y, !1)))();
  }, {
    cache: Qa(n.number),
    strategy: vn.variadic
  }), h = yn(function() {
    for (var m, y = [], p = 0; p < arguments.length; p++)
      y[p] = arguments[p];
    return new ((m = Intl.PluralRules).bind.apply(m, En([void 0], y, !1)))();
  }, {
    cache: Qa(n.pluralRules),
    strategy: vn.variadic
  });
  return {
    getDateTimeFormat: s,
    getNumberFormat: f,
    getMessageFormat: yn(function(m, y, p, v) {
      return new by(m, y, p, it({ formatters: {
        getNumberFormat: f,
        getDateTimeFormat: s,
        getPluralRules: h
      } }, v || {}));
    }, {
      cache: Qa(n.message),
      strategy: vn.variadic
    }),
    getRelativeTimeFormat: yn(function() {
      for (var m = [], y = 0; y < arguments.length; y++)
        m[y] = arguments[y];
      return new (l.bind.apply(l, En([void 0], m, !1)))();
    }, {
      cache: Qa(n.relativeTime),
      strategy: vn.variadic
    }),
    getPluralRules: h,
    getListFormat: yn(function() {
      for (var m = [], y = 0; y < arguments.length; y++)
        m[y] = arguments[y];
      return new (i.bind.apply(i, En([void 0], m, !1)))();
    }, {
      cache: Qa(n.list),
      strategy: vn.variadic
    }),
    getDisplayNames: yn(function() {
      for (var m = [], y = 0; y < arguments.length; y++)
        m[y] = arguments[y];
      return new (u.bind.apply(u, En([void 0], m, !1)))();
    }, {
      cache: Qa(n.displayNames),
      strategy: vn.variadic
    })
  };
}
function i0(n, l, i, u) {
  var s = n && n[l], f;
  if (s && (f = s[i]), f)
    return f;
  u(new PT("No ".concat(l, " format named: ").concat(i)));
}
function Ku(n, l) {
  return Object.keys(n).reduce(function(i, u) {
    return i[u] = it({ timeZone: l }, n[u]), i;
  }, {});
}
function og(n, l) {
  var i = Object.keys(it(it({}, n), l));
  return i.reduce(function(u, s) {
    return u[s] = it(it({}, n[s] || {}), l[s] || {}), u;
  }, {});
}
function cg(n, l) {
  if (!l)
    return n;
  var i = by.formats;
  return it(it(it({}, i), n), { date: og(Ku(i.date, l), Ku(n.date || {}, l)), time: og(Ku(i.time, l), Ku(n.time || {}, l)) });
}
var Bf = function(n, l, i, u, s) {
  var f = n.locale, h = n.formats, m = n.messages, y = n.defaultLocale, p = n.defaultFormats, v = n.fallbackOnEmptyString, S = n.onError, A = n.timeZone, _ = n.defaultRichTextElements;
  i === void 0 && (i = { id: "" });
  var M = i.id, C = i.defaultMessage;
  nA(!!M, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var z = String(M), k = (
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    m && Object.prototype.hasOwnProperty.call(m, z) && m[z]
  );
  if (Array.isArray(k) && k.length === 1 && k[0].type === Yt.literal)
    return k[0].value;
  if (!u && k && typeof k == "string" && !_)
    return k.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (u = it(it({}, _), u || {}), h = cg(h, A), p = cg(p, A), !k) {
    if (v === !1 && k === "")
      return k;
    if ((!C || f && f.toLowerCase() !== y.toLowerCase()) && S(new eA(i, f)), C)
      try {
        var F = l.getMessageFormat(C, y, p, s);
        return F.format(u);
      } catch (V) {
        return S(new of('Error formatting default message for: "'.concat(z, '", rendering default message verbatim'), f, i, V)), typeof C == "string" ? C : z;
      }
    return z;
  }
  try {
    var F = l.getMessageFormat(k, f, h, it({ formatters: l }, s || {}));
    return F.format(u);
  } catch (V) {
    S(new of('Error formatting message: "'.concat(z, '", using ').concat(C ? "default message" : "id", " as fallback."), f, i, V));
  }
  if (C)
    try {
      var F = l.getMessageFormat(C, y, p, s);
      return F.format(u);
    } catch (V) {
      S(new of('Error formatting the default message for: "'.concat(z, '", rendering message verbatim'), f, i, V));
    }
  return typeof k == "string" ? k : typeof C == "string" ? C : z;
}, iA = [
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  // 'dayPeriod',
  "numberingSystem",
  "fractionalSecondDigits"
];
function Ti(n, l, i, u) {
  var s = n.locale, f = n.formats, h = n.onError, m = n.timeZone;
  u === void 0 && (u = {});
  var y = u.format, p = it(it({}, m && { timeZone: m }), y && i0(f, l, y, h)), v = sl(u, iA, p);
  return l === "time" && !v.hour && !v.minute && !v.second && !v.timeStyle && !v.dateStyle && (v = it(it({}, v), { hour: "numeric", minute: "numeric" })), i(s, v);
}
function uA(n, l) {
  for (var i = [], u = 2; u < arguments.length; u++)
    i[u - 2] = arguments[u];
  var s = i[0], f = i[1], h = f === void 0 ? {} : f, m = typeof s == "string" ? new Date(s || 0) : s;
  try {
    return Ti(n, "date", l, h).format(m);
  } catch (y) {
    n.onError(new ln("Error formatting date.", n.locale, y));
  }
  return String(m);
}
function oA(n, l) {
  for (var i = [], u = 2; u < arguments.length; u++)
    i[u - 2] = arguments[u];
  var s = i[0], f = i[1], h = f === void 0 ? {} : f, m = typeof s == "string" ? new Date(s || 0) : s;
  try {
    return Ti(n, "time", l, h).format(m);
  } catch (y) {
    n.onError(new ln("Error formatting time.", n.locale, y));
  }
  return String(m);
}
function cA(n, l) {
  for (var i = [], u = 2; u < arguments.length; u++)
    i[u - 2] = arguments[u];
  var s = i[0], f = i[1], h = i[2], m = h === void 0 ? {} : h, y = typeof s == "string" ? new Date(s || 0) : s, p = typeof f == "string" ? new Date(f || 0) : f;
  try {
    return Ti(n, "dateTimeRange", l, m).formatRange(y, p);
  } catch (v) {
    n.onError(new ln("Error formatting date time range.", n.locale, v));
  }
  return String(y);
}
function sA(n, l) {
  for (var i = [], u = 2; u < arguments.length; u++)
    i[u - 2] = arguments[u];
  var s = i[0], f = i[1], h = f === void 0 ? {} : f, m = typeof s == "string" ? new Date(s || 0) : s;
  try {
    return Ti(n, "date", l, h).formatToParts(m);
  } catch (y) {
    n.onError(new ln("Error formatting date.", n.locale, y));
  }
  return [];
}
function fA(n, l) {
  for (var i = [], u = 2; u < arguments.length; u++)
    i[u - 2] = arguments[u];
  var s = i[0], f = i[1], h = f === void 0 ? {} : f, m = typeof s == "string" ? new Date(s || 0) : s;
  try {
    return Ti(n, "time", l, h).formatToParts(m);
  } catch (y) {
    n.onError(new ln("Error formatting time.", n.locale, y));
  }
  return [];
}
var dA = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function hA(n, l, i, u) {
  var s = n.locale, f = n.onError, h = Intl.DisplayNames;
  h || f(new Ea(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Mn.MISSING_INTL_API));
  var m = sl(u, dA);
  try {
    return l(s, m).of(i);
  } catch (y) {
    f(new ln("Error formatting display name.", s, y));
  }
}
var mA = [
  "type",
  "style"
], sg = Date.now();
function pA(n) {
  return "".concat(sg, "_").concat(n, "_").concat(sg);
}
function gA(n, l, i, u) {
  u === void 0 && (u = {});
  var s = Ey(n, l, i, u).reduce(function(f, h) {
    var m = h.value;
    return typeof m != "string" ? f.push(m) : typeof f[f.length - 1] == "string" ? f[f.length - 1] += m : f.push(m), f;
  }, []);
  return s.length === 1 ? s[0] : s.length === 0 ? "" : s;
}
function Ey(n, l, i, u) {
  var s = n.locale, f = n.onError;
  u === void 0 && (u = {});
  var h = Intl.ListFormat;
  h || f(new Ea(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Mn.MISSING_INTL_API));
  var m = sl(u, mA);
  try {
    var y = {}, p = Array.from(i).map(function(v, S) {
      if (typeof v == "object" && v !== null) {
        var A = pA(S);
        return y[A] = v, A;
      }
      return String(v);
    });
    return l(s, m).formatToParts(p).map(function(v) {
      return v.type === "literal" ? v : it(it({}, v), { value: y[v.value] || v.value });
    });
  } catch (v) {
    f(new ln("Error formatting list.", s, v));
  }
  return i;
}
var yA = ["type"];
function vA(n, l, i, u) {
  var s = n.locale, f = n.onError;
  u === void 0 && (u = {}), Intl.PluralRules || f(new Ea(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Mn.MISSING_INTL_API));
  var h = sl(u, yA);
  try {
    return l(s, h).select(i);
  } catch (m) {
    f(new ln("Error formatting plural.", s, m));
  }
  return "other";
}
var bA = ["numeric", "style"];
function SA(n, l, i) {
  var u = n.locale, s = n.formats, f = n.onError;
  i === void 0 && (i = {});
  var h = i.format, m = !!h && i0(s, "relative", h, f) || {}, y = sl(i, bA, m);
  return l(u, y);
}
function xA(n, l, i, u, s) {
  s === void 0 && (s = {}), u || (u = "second");
  var f = Intl.RelativeTimeFormat;
  f || n.onError(new Ea(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Mn.MISSING_INTL_API));
  try {
    return SA(n, l, s).format(i, u);
  } catch (h) {
    n.onError(new ln("Error formatting relative time.", n.locale, h));
  }
  return String(i);
}
var EA = [
  "style",
  "currency",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  // ES2020 NumberFormat
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem",
  // ES2023 NumberFormat
  "trailingZeroDisplay",
  "roundingPriority",
  "roundingIncrement",
  "roundingMode"
];
function Ty(n, l, i) {
  var u = n.locale, s = n.formats, f = n.onError;
  i === void 0 && (i = {});
  var h = i.format, m = h && i0(s, "number", h, f) || {}, y = sl(i, EA, m);
  return l(u, y);
}
function TA(n, l, i, u) {
  u === void 0 && (u = {});
  try {
    return Ty(n, l, u).format(i);
  } catch (s) {
    n.onError(new ln("Error formatting number.", n.locale, s));
  }
  return String(i);
}
function AA(n, l, i, u) {
  u === void 0 && (u = {});
  try {
    return Ty(n, l, u).formatToParts(i);
  } catch (s) {
    n.onError(new ln("Error formatting number.", n.locale, s));
  }
  return [];
}
function CA(n) {
  var l = n ? n[Object.keys(n)[0]] : void 0;
  return typeof l == "string";
}
function MA(n) {
  n.onWarn && n.defaultRichTextElements && CA(n.messages || {}) && n.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function OA(n, l) {
  var i = lA(l), u = it(it({}, Sy), n), s = u.locale, f = u.defaultLocale, h = u.onError;
  return s ? !Intl.NumberFormat.supportedLocalesOf(s).length && h ? h(new ug('Missing locale data for locale: "'.concat(s, '" in Intl.NumberFormat. Using default locale: "').concat(f, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(s).length && h && h(new ug('Missing locale data for locale: "'.concat(s, '" in Intl.DateTimeFormat. Using default locale: "').concat(f, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (h && h(new tA('"locale" was not configured, using "'.concat(f, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), u.locale = u.defaultLocale || "en"), MA(u), it(it({}, u), { formatters: i, formatNumber: TA.bind(null, u, i.getNumberFormat), formatNumberToParts: AA.bind(null, u, i.getNumberFormat), formatRelativeTime: xA.bind(null, u, i.getRelativeTimeFormat), formatDate: uA.bind(null, u, i.getDateTimeFormat), formatDateToParts: sA.bind(null, u, i.getDateTimeFormat), formatTime: oA.bind(null, u, i.getDateTimeFormat), formatDateTimeRange: cA.bind(null, u, i.getDateTimeFormat), formatTimeToParts: fA.bind(null, u, i.getDateTimeFormat), formatPlural: vA.bind(null, u, i.getPluralRules), formatMessage: Bf.bind(null, u, i), $t: Bf.bind(null, u, i), formatList: gA.bind(null, u, i.getListFormat), formatListToParts: Ey.bind(null, u, i.getListFormat), formatDisplayName: hA.bind(null, u, i.getDisplayNames) });
}
function _A(n, l, i) {
  if (i === void 0 && (i = Error), !n)
    throw new i(l);
}
function Ay(n) {
  _A(n, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Cy = it(it({}, Sy), { textComponent: Y.Fragment }), RA = function(n, l) {
  return Y.isValidElement(n) ? Y.cloneElement(n, { key: l }) : n;
}, My = function(n) {
  var l;
  return (l = Y.Children.map(n, RA)) !== null && l !== void 0 ? l : [];
};
function BA(n) {
  return function(l) {
    return n(My(l));
  };
}
function Df(n, l) {
  if (n === l)
    return !0;
  if (!n || !l)
    return !1;
  var i = Object.keys(n), u = Object.keys(l), s = i.length;
  if (u.length !== s)
    return !1;
  for (var f = 0; f < s; f++) {
    var h = i[f];
    if (n[h] !== l[h] || !Object.prototype.hasOwnProperty.call(l, h))
      return !1;
  }
  return !0;
}
var u0 = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = Y.createContext(null)) : Y.createContext(null);
u0.Consumer;
var DA = u0.Provider, NA = DA, HA = u0;
function o0() {
  var n = Y.useContext(HA);
  return Ay(n), n;
}
var Nf;
(function(n) {
  n.formatDate = "FormattedDate", n.formatTime = "FormattedTime", n.formatNumber = "FormattedNumber", n.formatList = "FormattedList", n.formatDisplayName = "FormattedDisplayName";
})(Nf || (Nf = {}));
var Hf;
(function(n) {
  n.formatDate = "FormattedDateParts", n.formatTime = "FormattedTimeParts", n.formatNumber = "FormattedNumberParts", n.formatList = "FormattedListParts";
})(Hf || (Hf = {}));
function Oy(n) {
  var l = function(i) {
    var u = o0(), s = i.value, f = i.children, h = rl(i, ["value", "children"]), m = typeof s == "string" ? new Date(s || 0) : s, y = n === "formatDate" ? u.formatDateToParts(m, h) : u.formatTimeToParts(m, h);
    return f(y);
  };
  return l.displayName = Hf[n], l;
}
function Ai(n) {
  var l = function(i) {
    var u = o0(), s = i.value, f = i.children, h = rl(
      i,
      ["value", "children"]
    ), m = u[n](s, h);
    if (typeof f == "function")
      return f(m);
    var y = u.textComponent || Y.Fragment;
    return Y.createElement(y, null, m);
  };
  return l.displayName = Nf[n], l;
}
function _y(n) {
  return n && Object.keys(n).reduce(function(l, i) {
    var u = n[i];
    return l[i] = vy(u) ? BA(u) : u, l;
  }, {});
}
var fg = function(n, l, i, u) {
  for (var s = [], f = 4; f < arguments.length; f++)
    s[f - 4] = arguments[f];
  var h = _y(u), m = Bf.apply(void 0, En([
    n,
    l,
    i,
    h
  ], s, !1));
  return Array.isArray(m) ? My(m) : m;
}, dg = function(n, l) {
  var i = n.defaultRichTextElements, u = rl(n, ["defaultRichTextElements"]), s = _y(i), f = OA(it(it(it({}, Cy), u), { defaultRichTextElements: s }), l), h = {
    locale: f.locale,
    timeZone: f.timeZone,
    fallbackOnEmptyString: f.fallbackOnEmptyString,
    formats: f.formats,
    defaultLocale: f.defaultLocale,
    defaultFormats: f.defaultFormats,
    messages: f.messages,
    onError: f.onError,
    defaultRichTextElements: s
  };
  return it(it({}, f), { formatMessage: fg.bind(null, h, f.formatters), $t: fg.bind(null, h, f.formatters) });
};
function zA(n, l) {
  var i = n.values, u = rl(n, ["values"]), s = l.values, f = rl(l, ["values"]);
  return Df(s, i) && Df(u, f);
}
function Ry(n) {
  var l = o0(), i = l.formatMessage, u = l.textComponent, s = u === void 0 ? Y.Fragment : u, f = n.id, h = n.description, m = n.defaultMessage, y = n.values, p = n.children, v = n.tagName, S = v === void 0 ? s : v, A = n.ignoreTag, _ = { id: f, description: h, defaultMessage: m }, M = i(_, y, {
    ignoreTag: A
  });
  return typeof p == "function" ? p(Array.isArray(M) ? M : [M]) : S ? Y.createElement(S, null, M) : Y.createElement(Y.Fragment, null, M);
}
Ry.displayName = "FormattedMessage";
var Za = Y.memo(Ry, zA);
Za.displayName = "MemoizedFormattedMessage";
function cf(n) {
  return {
    locale: n.locale,
    timeZone: n.timeZone,
    fallbackOnEmptyString: n.fallbackOnEmptyString,
    formats: n.formats,
    textComponent: n.textComponent,
    messages: n.messages,
    defaultLocale: n.defaultLocale,
    defaultFormats: n.defaultFormats,
    onError: n.onError,
    onWarn: n.onWarn,
    wrapRichTextChunksInFragment: n.wrapRichTextChunksInFragment,
    defaultRichTextElements: n.defaultRichTextElements
  };
}
var wA = (
  /** @class */
  (function(n) {
    rn(l, n);
    function l() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.cache = xy(), i.state = {
        cache: i.cache,
        intl: dg(cf(i.props), i.cache),
        prevConfig: cf(i.props)
      }, i;
    }
    return l.getDerivedStateFromProps = function(i, u) {
      var s = u.prevConfig, f = u.cache, h = cf(i);
      return Df(s, h) ? null : {
        intl: dg(h, f),
        prevConfig: h
      };
    }, l.prototype.render = function() {
      return Ay(this.state.intl), Y.createElement(NA, { value: this.state.intl }, this.props.children);
    }, l.displayName = "IntlProvider", l.defaultProps = Cy, l;
  })(Y.PureComponent)
);
Ai("formatDate");
Ai("formatTime");
Ai("formatNumber");
Ai("formatList");
Ai("formatDisplayName");
Oy("formatDate");
Oy("formatTime");
const LA = () => {
  const n = l0();
  return /* @__PURE__ */ J.jsx(
    kE,
    {
      sx: {
        bgcolor: "background.default",
        width: "100%",
        paddingY: 4,
        paddingX: 2
      },
      children: /* @__PURE__ */ J.jsx(Wr, { container: !0, spacing: 5, sx: { paddingTop: "0px!important" }, children: /* @__PURE__ */ J.jsxs(
        Wr,
        {
          sx: {
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 2
          },
          children: [
            /* @__PURE__ */ J.jsxs(
              Wr,
              {
                sx: {
                  display: "flex",
                  alignItems: { xs: "center", lg: "normal" },
                  maxWidth: { xs: "unset", lg: "220px" },
                  minWidth: { xs: "unset", lg: "180px" },
                  gap: 2
                },
                children: [
                  /* @__PURE__ */ J.jsx(
                    jE,
                    {
                      countryCode: "EU",
                      svg: !0,
                      style: {
                        width: "50px",
                        height: "38px",
                        border: `1px solid ${n.palette.primary.light}`
                      },
                      title: "US"
                    }
                  ),
                  /* @__PURE__ */ J.jsx(Pr, { variant: "body2", color: "grey.800", fontWeight: "700", children: /* @__PURE__ */ J.jsx(Za, { id: "coFunded" }) })
                ]
              }
            ),
            /* @__PURE__ */ J.jsxs(
              Wr,
              {
                sx: { display: "flex", flexDirection: "column" },
                gap: { xs: 2, lg: 4 },
                children: [
                  /* @__PURE__ */ J.jsx(Pr, { variant: "caption", color: "grey.800", fontSize: "13px", children: /* @__PURE__ */ J.jsx(Za, { id: "grantAgreement" }) }),
                  /* @__PURE__ */ J.jsx(
                    Ef,
                    {
                      orientation: "horizontal",
                      sx: { marginBottom: "0px!important" }
                    }
                  ),
                  /* @__PURE__ */ J.jsxs(
                    Wr,
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
                        /* @__PURE__ */ J.jsxs(
                          Wr,
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
                              /* @__PURE__ */ J.jsx(
                                Fa,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer", flexShrink: 0 },
                                  href: "https://urbreath.eu/cookie-declaration/",
                                  target: "_blank",
                                  children: /* @__PURE__ */ J.jsx(Za, { id: "cookies" })
                                }
                              ),
                              /* @__PURE__ */ J.jsx(
                                Pr,
                                {
                                  variant: "button",
                                  color: "primary.700",
                                  display: { xs: "none", sm: "flex" },
                                  children: " | "
                                }
                              ),
                              /* @__PURE__ */ J.jsx(
                                Fa,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer" },
                                  href: "https://urbreath.eu/terms-of-use/",
                                  target: "_blank",
                                  children: /* @__PURE__ */ J.jsx(Za, { id: "terms" })
                                }
                              ),
                              /* @__PURE__ */ J.jsx(
                                Pr,
                                {
                                  variant: "button",
                                  color: "primary.700",
                                  display: { xs: "none", sm: "flex" },
                                  children: " | "
                                }
                              ),
                              /* @__PURE__ */ J.jsx(
                                Fa,
                                {
                                  variant: "button",
                                  underline: "none",
                                  sx: { cursor: "pointer", flexShrink: 0 },
                                  href: "https://urbreath.eu/privacy-policy",
                                  target: "_blank",
                                  children: /* @__PURE__ */ J.jsx(Za, { id: "privacyPolicy" })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ J.jsxs(
                          HE,
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
                              /* @__PURE__ */ J.jsx(
                                Fa,
                                {
                                  href: "https://www.linkedin.com/company/urbreath-horizon-europe-project",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#0A66C2" } },
                                  children: /* @__PURE__ */ J.jsx(aT, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ J.jsx(
                                Fa,
                                {
                                  href: "https://www.youtube.com/channel/UC2n4Kx-Joo_Rhx9KZTrU-bg",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#FF0000" } },
                                  children: /* @__PURE__ */ J.jsx(uT, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ J.jsx(
                                Fa,
                                {
                                  href: "https://x.com/URBREATHProject",
                                  target: "_blank",
                                  sx: { "& svg:hover": { color: "#000000" } },
                                  children: /* @__PURE__ */ J.jsx(lT, { style: { fontSize: "24px" } })
                                }
                              ),
                              /* @__PURE__ */ J.jsx(
                                Fa,
                                {
                                  href: "mailto:info@urbreath.eu",
                                  sx: { "& svg:hover": { color: "secondary.500" } },
                                  children: /* @__PURE__ */ J.jsx(cT, { style: { fontSize: "24px" } })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ J.jsx(Pr, { variant: "body2", fontWeight: 400, children: /* @__PURE__ */ J.jsx(Za, { id: "copyright" }) })
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
}, UA = {
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
}, GA = () => {
  const n = UA;
  return Ao({
    palette: {
      common: {
        black: n.grey900
      },
      primary: {
        light: n.primaryLight,
        main: n.primaryMain,
        dark: n.primaryDark,
        50: n.primary50,
        100: n.primary100,
        200: n.primary200,
        300: n.primary300,
        400: n.primary400,
        500: n.primary500,
        600: n.primary600,
        700: n.primary700,
        800: n.primary800,
        900: n.primary900,
        A100: n.primaryA100,
        A200: n.primaryA200,
        A400: n.primaryA400,
        A700: n.primaryA700
      },
      secondary: {
        light: n.secondaryLight,
        main: n.secondaryMain,
        dark: n.secondaryDark,
        50: n.secondary50,
        100: n.secondary100,
        200: n.secondary200,
        300: n.secondary300,
        400: n.secondary400,
        500: n.secondary500,
        600: n.secondary600,
        700: n.secondary700,
        800: n.secondary800,
        900: n.secondary900,
        A100: n.secondaryA100,
        A200: n.secondaryA200,
        A400: n.secondaryA400,
        A700: n.secondaryA700
      },
      error: {
        light: n.errorLight,
        main: n.error800,
        dark: n.errorDark,
        50: n.error50,
        100: n.error100,
        200: n.error200,
        300: n.error300,
        400: n.error400,
        500: n.error500,
        600: n.error600,
        700: n.error700,
        800: n.error800,
        900: n.error900,
        A100: n.errorA100,
        A200: n.errorA200,
        A400: n.errorA400,
        A700: n.errorA700
      },
      warning: {
        light: n.warningLight,
        main: n.warningMain,
        dark: n.warningDark,
        50: n.warning50,
        100: n.warning100,
        200: n.warning200,
        300: n.warning300,
        400: n.warning400,
        500: n.warning500,
        600: n.warning600,
        700: n.warning700,
        800: n.warning800,
        900: n.warning900,
        A100: n.warningA100,
        A200: n.warningA200,
        A400: n.warningA400,
        A700: n.warningA700
      },
      success: {
        light: n.successLight,
        main: n.successMain,
        dark: n.successDark,
        50: n.success50,
        100: n.success100,
        200: n.success200,
        300: n.success300,
        400: n.success400,
        500: n.success500,
        600: n.success600,
        700: n.success700,
        800: n.success800,
        900: n.success900,
        A100: n.successA100,
        A200: n.successA200,
        A400: n.successA400,
        A700: n.successA700
      },
      info: {
        light: n.infoLight,
        main: n.infoMain,
        dark: n.infoDark,
        50: n.info50,
        100: n.info100,
        200: n.info200,
        300: n.info300,
        400: n.info400,
        500: n.info500,
        600: n.info600,
        700: n.info700,
        800: n.info800,
        900: n.info900,
        A100: n.infoA100,
        A200: n.infoA200,
        A400: n.infoA400,
        A700: n.infoA700
      },
      grey: {
        50: n.grey50,
        100: n.grey100,
        200: n.grey200,
        300: n.grey300,
        400: n.grey400,
        500: n.grey500,
        600: n.grey600,
        700: n.grey700,
        800: n.grey800,
        900: n.grey900,
        A100: n.greyA100,
        A200: n.greyA200,
        A400: n.greyA400,
        A700: n.greyA700
      },
      text: {
        primary: n.grey700,
        secondary: n.grey50,
        dark: n.grey900,
        hint: n.grey100
      },
      divider: n.paper,
      background: {
        paper: n.paper,
        default: n.grey50
      },
      dark: {
        light: n.primaryLight,
        main: n.primaryMain,
        dark: n.primaryDark,
        800: n.primary800,
        900: n.primary900
      }
    }
  });
}, si = "'Open Sans', sans-serif", jA = (n) => ({
  fontFamily: n,
  h6: {
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "120%",
    fontFamily: n
  },
  h5: {
    fontSize: "24px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily: n
  },
  h4: {
    fontSize: "30px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily: n
  },
  h3: {
    fontSize: "36px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily: n
  },
  h2: {
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "120%",
    fontFamily: n
  },
  h1: {
    fontSize: "56px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: n
  },
  subtitle1: {
    fontSize: "18px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: si
  },
  subtitle2: {
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: n
  },
  caption: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    lineHeight: "130%",
    fontFamily: si
  },
  overline: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "2px",
    lineHeight: "130%",
    fontFamily: si
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: si
  },
  body2: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "140%",
    fontFamily: si
  },
  button: {
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: n
  }
});
function kA(n, l, i) {
  const u = n.palette.grey[50], s = n.palette.secondary[50], f = n.palette.secondary.main;
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
          color: n.palette.grey[50],
          ...n.typography.button,
          "&.icon__button": {
            padding: "10px 16px"
          },
          "&:disabled, &:disabled:hover": {
            backgroundColor: n.palette.grey[500],
            color: n.palette.text.secondary
          }
        },
        outlined: {
          color: n.palette.primary[700],
          ...n.typography.button,
          "&:hover": {
            backgroundColor: "transparent"
          },
          "&:disabled, &:disabled:hover": {
            borderColor: n.palette.grey[500],
            color: n.palette.grey[500]
          }
        },
        outlinedError: {
          color: n.palette.error[900],
          borderColor: n.palette.error[900],
          "&:hover": {
            color: n.palette.error[500],
            borderColor: n.palette.error[500]
          }
        },
        containedPrimary: {
          background: n.palette.primary[700],
          "&:hover": {
            background: n.palette.secondary.main
          }
        },
        containedSecondary: {
          background: n.palette.secondary.main,
          "&:hover": {
            background: n.palette.primary[700]
          }
        },
        outlinedPrimary: {
          borderColor: n.palette.primary[700],
          "&:hover": {
            borderColor: n.palette.secondary.main,
            color: n.palette.secondary.main
          },
          "&:hover > *": {
            color: n.palette.secondary.main
          }
        },
        outlinedSecondary: {
          borderColor: n.palette.secondary.main,
          color: n.palette.secondary.main,
          "&:hover": {
            color: n.palette.primary[700],
            borderColor: n.palette.primary[700]
          },
          "&:hover > *": {
            color: n.palette.primary[700]
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.custom_icon_button": {
            backgroundColor: n.palette.primary[50],
            color: n.palette.primary[700],
            borderRadius: "4px",
            display: "flex",
            padding: "8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px"
          },
          "&.custom_icon_button:hover": {
            backgroundColor: n.palette.primary[700],
            color: n.palette.primary[50]
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
          borderRadius: `${l}px`
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: n.palette.background.default
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: n.palette.text.dark,
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
          color: n.palette.text.secondary,
          paddingTop: "10px",
          borderRadius: "0px",
          padding: "14px 16px",
          "&.Mui-selected": {
            color: f,
            backgroundColor: s,
            "&:hover": {
              backgroundColor: s
            },
            "& .MuiListItemIcon-root": {
              color: f
            }
          },
          "&:hover": {
            backgroundColor: s,
            color: f,
            "& .MuiListItemIcon-root": {
              color: f
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      // sidebar menu item icons
      styleOverrides: {
        root: {
          color: n.palette.text.secondary,
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
          ...n.typography.body2,
          fontWeight: 500,
          color: n.palette.grey[900]
        },
        secondary: {
          // the below styling is used in the image gallery list during nbs registration
          ...n.typography.caption,
          fontWeight: 500,
          color: n.palette.grey[600],
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
            borderBottom: `1px solid ${n.palette.grey[500]}`
          },
          "&.MuiInput-root.Mui-error::before, &.MuiInput-root.Mui-error::after": {
            borderBottom: `1px solid ${n.palette.error[800]}`
          },
          "&.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before, &.MuiInput-root:focus:not(.Mui-disabled, .Mui-error):before, &.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):after, &.MuiInput-root:focus:not(.Mui-disabled, .Mui-error):after": {
            borderBottom: "2px solid",
            borderBottomColor: n.palette.secondary[500]
          }
        },
        input: {
          color: n.palette.text.dark,
          "&::placeholder": {
            color: n.palette.text.secondary,
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
              color: n.palette.grey[700],
              opacity: 1
            }
          },
          "& .Mui-error .MuiInput-input": {
            "&::placeholder": {
              color: n.palette.error[800],
              opacity: 1
            }
          },
          "& .Mui-focused .MuiInputAdornment-root": {
            // start Adornment for textfield on focus
            color: n.palette.secondary[500]
          },
          "& .Mui-error .MuiInputAdornment-root": {
            // start Adornment for textfield on error
            color: n.palette.error[800]
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...n.typography.caption,
          marginLeft: 0,
          "&.Mui-error": {
            color: n.palette.error[800]
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: i ? u : "transparent",
          borderRadius: `${l}px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: n.palette.grey[700]
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: n.palette.secondary[500],
            borderWidth: "2px"
          },
          "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: n.palette.error[800],
            borderWidth: "2px"
          },
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: n.palette.error[800],
            borderWidth: "2px"
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: n.palette.secondary[500],
            borderWidth: "2px"
          },
          "&:hover $notchedOutline": {
            borderColor: n.palette.secondary[500]
          },
          "&.MuiInputBase-multiline": {
            padding: 1
          }
        },
        input: {
          ...n.typography.body2,
          color: `${n.palette.grey[700]}`,
          background: i ? u : "transparent",
          padding: "15.5px 14px",
          borderRadius: `${l}px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0
            }
          },
          "&::placeholder": {
            ...n.typography.body2,
            color: n.palette.text.dark
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
            color: n.palette.grey[300]
          }
        },
        mark: {
          backgroundColor: n.palette.background.paper,
          width: "4px"
        },
        valueLabel: {
          color: n.palette.primary.light
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
            color: n.palette.grey[700],
            opacity: 1
          },
          "& .Mui-error .MuiInput-input::placeholder": {
            color: n.palette.error[800],
            opacity: 1
          },
          "& .MuiInput-input": {
            ...n.typography.body2,
            fontWeight: 400,
            lineHeight: "140%!important",
            color: n.palette.grey[700]
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
            color: n.palette.grey[700],
            "& svg": {
              width: "24px",
              height: "24px"
            }
          },
          "& .Mui-error .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
            // start Adornment when error
            color: n.palette.error[800]
          },
          "& .Mui-focused.MuiInputBase-adornedStart": {
            // start Adornment for multiple autocomplete
            color: n.palette.secondary[500]
          },
          "& .Mui-focused.Mui-error .MuiInputAdornment-positionStart": {
            // start Adornment for multiple autocomplete
            // color: theme.palette.error[500]
            color: `${n.palette.error[800]}!important`
          },
          "&.Mui-focused": {
            "& .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
              color: n.palette.secondary[500]
            }
          }
        },
        paper: {
          // the options container paper
          backgroundColor: n.palette.background.default,
          borderRadius: "4px"
        },
        popper: {
          borderRadius: `${l}px`,
          boxShadow: "0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.20)"
        },
        inputRoot: {
          paddingRight: "0px!important"
        },
        listbox: {
          // CSS for the popover list of options
          "& .MuiAutocomplete-option": {
            ...n.typography.body2,
            padding: "6px 16px",
            transition: "all 0.3s ease-out",
            "&.Mui-focused": {
              backgroundColor: n.palette.secondary[50],
              color: n.palette.secondary[500],
              fontWeight: 700
            }
          },
          '& .MuiAutocomplete-option[aria-selected="true"], & .MuiAutocomplete-option[aria-selected="true"]:hover': {
            fontWeight: 700,
            backgroundColor: n.palette.secondary[50],
            color: n.palette.secondary[500],
            "&.Mui-focused": {
              backgroundColor: n.palette.secondary[50]
            }
          }
        },
        noOptions: {
          ...n.typography.body2,
          color: n.palette.text.primary
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: n.palette.divider,
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
            fill: n.palette.primary[700]
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
          color: n.palette.secondary[500],
          background: n.palette.secondary[50],
          transition: "all .2s ease-in-out",
          "&:hover": {
            color: n.palette.text.secondary,
            background: n.palette.secondary[500]
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
          ...n.typography.caption,
          backgroundColor: n.palette.secondary[50],
          borderRadius: "100px",
          color: n.palette.secondary[500],
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
          color: n.palette.text.dark,
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
          backgroundColor: n.palette.primary.light,
          "& .MuiTabs-flexContainer": {
            borderColor: n.palette.primary[200]
          },
          "& .MuiTab-root": {
            color: n.palette.grey[900]
          },
          "& .MuiTabs-indicator": {
            backgroundColor: n.palette.primary.dark
          },
          "& .Mui-selected": {
            color: n.palette.primary.dark
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          borderBottom: "1px solid",
          borderColor: n.palette.grey[200]
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0.5,
          backgroundColor: n.palette.background.default,
          boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px -7px rgba(0, 0, 0, 0.20)",
          padding: 0
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...n.typography.h6,
          color: n.palette.primary[700],
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
            ...n.typography.body1,
            color: n.palette.text.primary,
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
          borderColor: n.palette.grey[200],
          "&.MuiTableCell-head": {
            fontSize: "0.875rem",
            color: n.palette.grey[900],
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
          ...n.typography.body2,
          fontWeight: "400!important",
          color: n.palette.text.secondary,
          background: n.palette.grey[700],
          borderRadius: "4px",
          padding: "4px 8px"
        },
        arrow: {
          "&:before": {
            background: n.palette.grey[700]
          }
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          margin: "6px",
          ...n.typography.caption,
          "&.Mui-selected": {
            backgroundColor: n.palette.primary[700],
            color: n.palette.text.secondary
          },
          "&.Mui-selected:hover": {
            backgroundColor: `${n.palette.primary[800]}!important`,
            color: n.palette.text.secondary
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
            backgroundColor: `${n.palette.background.default} !important`,
            borderColor: `${n.palette.divider} !important`
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
          borderColor: n.palette.divider
        },
        columnHeader: {
          color: n.palette.grey[600],
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
              background: n.palette.success.light
            },
            "& > .medium": {
              background: n.palette.warning.light
            },
            "& > .low": {
              background: n.palette.error.light
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
          color: n.palette.primary[700],
          "&:hover": {
            color: n.palette.secondary[500]
          }
        }
      }
    },
    // input label (also used in autocomplete)
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...n.typography.caption,
          fontSize: "14px",
          color: n.palette.grey[500],
          "&[data-shrink=false]": {
            ...n.typography.body2,
            fontWeight: 400,
            color: n.palette.grey[700]
          },
          "&.Mui-focused": {
            color: n.palette.secondary[500]
          },
          "&.Mui-error": {
            color: n.palette.error[800]
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiFormLabel-asterisk": {
            color: n.palette.secondary[500]
          },
          "&[data-shrink=true] .MuiFormLabel-asterisk": {
            color: n.palette.grey[500]
          },
          "&[data-shrink=true].Mui-focused .MuiFormLabel-asterisk": {
            color: n.palette.secondary[500]
          },
          "&[data-shrink=true].Mui-error .MuiFormLabel-asterisk": {
            color: n.palette.error[800]
          }
        },
        asterisk: {
          color: n.palette.grey[700],
          "&[data-shrink=false]": {
            color: n.palette.grey[700]
          },
          "&.Mui-error": {
            color: n.palette.error[800]
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
          color: n.palette.grey[500],
          "&.Mui-active": {
            color: n.palette.primary[700]
          },
          "&.Mui-completed": {
            color: n.palette.success[800]
          },
          "&.Mui-active.Mui-error": {
            color: n.palette.error[800]
          }
        },
        text: {
          ...n.typography.body2,
          fontWeight: 700,
          fill: n.palette.text.secondary
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          ...n.typography.h6,
          color: n.palette.grey[500],
          "&.Mui-active": {
            color: n.palette.primary[700],
            fontWeight: 600
          },
          "&.Mui-active.Mui-error": {
            color: n.palette.error[800]
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
            backgroundColor: n.palette.background.default
          },
          "& .MuiListItemButton-root.Mui-selected .MuiTypography-root, & .MuiListItemButton-root:hover .MuiTypography-root": {
            backgroundColor: n.palette.secondary[50],
            color: n.palette.secondary[500],
            fontWeight: 700
          }
        }
      }
    }
  };
}
function $A({ children: n }) {
  const i = "'Rubik', sans-serif", u = Y.useMemo(() => GA(), []), s = Y.useMemo(() => jA(i), [i]), f = Y.useMemo(
    () => ({
      spacing: 8,
      palette: u.palette,
      typography: s
    }),
    [u, s]
  ), h = Ao(f);
  return h.components = Y.useMemo(
    () => kA(h, 12, !0),
    [h, 12]
  ), /* @__PURE__ */ J.jsx(yS, { injectFirst: !0, children: /* @__PURE__ */ J.jsxs(TE, { theme: h, children: [
    /* @__PURE__ */ J.jsx(XE, { enableColorScheme: !0 }),
    n
  ] }) });
}
const qA = "Co-funded by the European Union", YA = "This project is co-funded by the European Union under grant agreement ID 101139711. The information and views set out in this website are those of the URBREATH Consortium only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible for them.", VA = "Copyrights © 2025 URBREATH. All Rights Reserved.", XA = "Privacy Policy", FA = "Cookie Declaration", QA = "Terms of Usage", ZA = {
  coFunded: qA,
  grantAgreement: YA,
  copyright: VA,
  privacyPolicy: XA,
  cookies: FA,
  terms: QA
}, KA = "Συνχρηματοδοτείται από την Ευρωπαϊκή Ένωση", IA = "Αυτό το έργο συνχρηματοδοτείται από την Ευρωπαϊκή Ένωση στο πλαίσιο της συμφωνίας χορήγησης ID 101139711. Οι πληροφορίες και οι απόψεις που παρουσιάζονται σε αυτόν τον ιστότοπο είναι αυτές του Συνεταιρισμού URBREATH μόνο και δεν αντανακλούν απαραίτητα τις απόψεις της Ευρωπαϊκής Ένωσης. Ούτε η Ευρωπαϊκή Ένωση ούτε η χορηγούσα αρχή μπορούν να θεωρηθούν υπεύθυνες.", JA = "Πνευματικά δικαιώματα © 2025 URBREATH. Με επιφύλαξη παντός δικαιώματος.", WA = "Πολιτική Απορρήτου", PA = "Δήλωση Cookies", tC = "Όροι Χρήσης", eC = {
  coFunded: KA,
  grantAgreement: IA,
  copyright: JA,
  privacyPolicy: WA,
  cookies: PA,
  terms: tC
}, nC = "Cofinanciado por la Unión Europea", aC = "Este proyecto está cofinanciado por la Unión Europea en virtud del acuerdo de subvención ID 101139711. La información y puntos de vista expuestos en este sitio web son los del Consorcio URBREATH únicamente y no reflejan necesariamente los de la Unión Europea. Ni la Unión Europea ni la autoridad concedente pueden ser consideradas responsables de ellos.", rC = "Derechos de autor © 2025 URBREATH. Todos los derechos reservados.", lC = "Política de privacidad", iC = "Declaración de cookies", uC = "Términos de uso", oC = {
  coFunded: nC,
  grantAgreement: aC,
  copyright: rC,
  privacyPolicy: lC,
  cookies: iC,
  terms: uC
}, sf = {
  en: ZA,
  el: eC,
  es: oC
  // ... add all other locales
};
function zf(n, l = "") {
  return Object.keys(n).reduce((i, u) => {
    const s = n[u], f = l ? `${l}.${u}` : u;
    return typeof s == "string" ? i[f] = s : Object.assign(i, zf(s, f)), i;
  }, {});
}
const cC = ({ children: n, language: l }) => {
  const [i, u] = Y.useState();
  return Y.useEffect(() => {
    const s = sf[l] || sf.en, f = zf(sf.en), h = zf(s), m = { ...f, ...h };
    u(m);
  }, [l]), /* @__PURE__ */ J.jsx(J.Fragment, { children: i && /* @__PURE__ */ J.jsx(wA, { locale: l, defaultLocale: "en", messages: i, children: n }) });
}, sC = ({ language: n }) => /* @__PURE__ */ J.jsxs($A, { children: [
  /* @__PURE__ */ J.jsx("style", { children: `
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');  
       ` }),
  /* @__PURE__ */ J.jsxs(cC, { language: n ?? "en", children: [
    "Elena2",
    /* @__PURE__ */ J.jsx(LA, {})
  ] })
] }), fC = g1(sC, {
  props: {
    language: "string"
  }
});
customElements.define("urbreath-footer", fC);
