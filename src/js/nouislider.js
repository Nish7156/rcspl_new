/*! nouislider - 8.1.0 - 2015-10-25 16:05:43 */

!(function (a) {
  "function" == typeof define && define.amd
    ? define([], a)
    : "object" == typeof exports
    ? (module.exports = a())
    : (window.noUiSlider = a());
})(function () {
  "use strict";
  function a(a) {
    return a.filter(function (a) {
      return this[a] ? !1 : (this[a] = !0);
    }, {});
  }
  function b(a, b) {
    return Math.round(a / b) * b;
  }
  function c(a) {
    var b = a.getBoundingClientRect(),
      c = a.ownerDocument,
      d = c.documentElement,
      e = m();
    return (
      /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (e.x = 0),
      { top: b.top + e.y - d.clientTop, left: b.left + e.x - d.clientLeft }
    );
  }
  function d(a) {
    return "number" == typeof a && !isNaN(a) && isFinite(a);
  }
  function e(a) {
    var b = Math.pow(10, 7);
    return Number((Math.round(a * b) / b).toFixed(7));
  }
  function f(a, b, c) {
    j(a, b),
      setTimeout(function () {
        k(a, b);
      }, c);
  }
  function g(a) {
    return Math.max(Math.min(a, 100), 0);
  }
  function h(a) {
    return Array.isArray(a) ? a : [a];
  }
  function i(a) {
    var b = a.split(".");
    return b.length > 1 ? b[1].length : 0;
  }
  function j(a, b) {
    a.classList ? a.classList.add(b) : (a.className += " " + b);
  }
  function k(a, b) {
    a.classList
      ? a.classList.remove(b)
      : (a.className = a.className.replace(
          new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"),
          " "
        ));
  }
  function l(a, b) {
    a.classList
      ? a.classList.contains(b)
      : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className);
  }
  function m() {
    var a = void 0 !== window.pageXOffset,
      b = "CSS1Compat" === (document.compatMode || ""),
      c = a
        ? window.pageXOffset
        : b
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft,
      d = a
        ? window.pageYOffset
        : b
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
    return { x: c, y: d };
  }
  function n(a) {
    return function (b) {
      return a + b;
    };
  }
  function o(a, b) {
    return 100 / (b - a);
  }
  function p(a, b) {
    return (100 * b) / (a[1] - a[0]);
  }
  function q(a, b) {
    return p(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
  }
  function r(a, b) {
    return (b * (a[1] - a[0])) / 100 + a[0];
  }
  function s(a, b) {
    for (var c = 1; a >= b[c]; ) c += 1;
    return c;
  }
  function t(a, b, c) {
    if (c >= a.slice(-1)[0]) return 100;
    var d,
      e,
      f,
      g,
      h = s(c, a);
    return (
      (d = a[h - 1]),
      (e = a[h]),
      (f = b[h - 1]),
      (g = b[h]),
      f + q([d, e], c) / o(f, g)
    );
  }
  function u(a, b, c) {
    if (c >= 100) return a.slice(-1)[0];
    var d,
      e,
      f,
      g,
      h = s(c, b);
    return (
      (d = a[h - 1]),
      (e = a[h]),
      (f = b[h - 1]),
      (g = b[h]),
      r([d, e], (c - f) * o(f, g))
    );
  }
  function v(a, c, d, e) {
    if (100 === e) return e;
    var f,
      g,
      h = s(e, a);
    return d
      ? ((f = a[h - 1]), (g = a[h]), e - f > (g - f) / 2 ? g : f)
      : c[h - 1]
      ? a[h - 1] + b(e - a[h - 1], c[h - 1])
      : e;
  }
  function w(a, b, c) {
    var e;
    if (
      ("number" == typeof b && (b = [b]),
      "[object Array]" !== Object.prototype.toString.call(b))
    )
      throw new Error("noUiSlider: 'range' contains invalid value.");
    if (
      ((e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a)),
      !d(e) || !d(b[0]))
    )
      throw new Error("noUiSlider: 'range' value isn't numeric.");
    c.xPct.push(e),
      c.xVal.push(b[0]),
      e
        ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1])
        : isNaN(b[1]) || (c.xSteps[0] = b[1]);
  }
  function x(a, b, c) {
    return b
      ? void (c.xSteps[a] =
          p([c.xVal[a], c.xVal[a + 1]], b) / o(c.xPct[a], c.xPct[a + 1]))
      : !0;
  }
  function y(a, b, c, d) {
    (this.xPct = []),
      (this.xVal = []),
      (this.xSteps = [d || !1]),
      (this.xNumSteps = [!1]),
      (this.snap = b),
      (this.direction = c);
    var e,
      f = [];
    for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]);
    for (
      f.length && "object" == typeof f[0][0]
        ? f.sort(function (a, b) {
            return a[0][0] - b[0][0];
          })
        : f.sort(function (a, b) {
            return a[0] - b[0];
          }),
        e = 0;
      e < f.length;
      e++
    )
      w(f[e][1], f[e][0], this);
    for (
      this.xNumSteps = this.xSteps.slice(0), e = 0;
      e < this.xNumSteps.length;
      e++
    )
      x(e, this.xNumSteps[e], this);
  }
  function z(a, b) {
    if (!d(b)) throw new Error("noUiSlider: 'step' is not numeric.");
    a.singleStep = b;
  }
  function A(a, b) {
    if ("object" != typeof b || Array.isArray(b))
      throw new Error("noUiSlider: 'range' is not an object.");
    if (void 0 === b.min || void 0 === b.max)
      throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    a.spectrum = new y(b, a.snap, a.dir, a.singleStep);
  }
  function B(a, b) {
    if (((b = h(b)), !Array.isArray(b) || !b.length || b.length > 2))
      throw new Error("noUiSlider: 'start' option is incorrect.");
    (a.handles = b.length), (a.start = b);
  }
  function C(a, b) {
    if (((a.snap = b), "boolean" != typeof b))
      throw new Error("noUiSlider: 'snap' option must be a boolean.");
  }
  function D(a, b) {
    if (((a.animate = b), "boolean" != typeof b))
      throw new Error("noUiSlider: 'animate' option must be a boolean.");
  }
  function E(a, b) {
    if ("lower" === b && 1 === a.handles) a.connect = 1;
    else if ("upper" === b && 1 === a.handles) a.connect = 2;
    else if (b === !0 && 2 === a.handles) a.connect = 3;
    else {
      if (b !== !1)
        throw new Error(
          "noUiSlider: 'connect' option doesn't match handle count."
        );
      a.connect = 0;
    }
  }
  function F(a, b) {
    switch (b) {
      case "horizontal":
        a.ort = 0;
        break;
      case "vertical":
        a.ort = 1;
        break;
      default:
        throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
  }
  function G(a, b) {
    if (!d(b)) throw new Error("noUiSlider: 'margin' option must be numeric.");
    if (((a.margin = a.spectrum.getMargin(b)), !a.margin))
      throw new Error(
        "noUiSlider: 'margin' option is only supported on linear sliders."
      );
  }
  function H(a, b) {
    if (!d(b)) throw new Error("noUiSlider: 'limit' option must be numeric.");
    if (((a.limit = a.spectrum.getMargin(b)), !a.limit))
      throw new Error(
        "noUiSlider: 'limit' option is only supported on linear sliders."
      );
  }
  function I(a, b) {
    switch (b) {
      case "ltr":
        a.dir = 0;
        break;
      case "rtl":
        (a.dir = 1), (a.connect = [0, 2, 1, 3][a.connect]);
        break;
      default:
        throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
  }
  function J(a, b) {
    if ("string" != typeof b)
      throw new Error(
        "noUiSlider: 'behaviour' must be a string containing options."
      );
    var c = b.indexOf("tap") >= 0,
      d = b.indexOf("drag") >= 0,
      e = b.indexOf("fixed") >= 0,
      f = b.indexOf("snap") >= 0;
    if (d && !a.connect)
      throw new Error(
        "noUiSlider: 'drag' behaviour must be used with 'connect': true."
      );
    a.events = { tap: c || f, drag: d, fixed: e, snap: f };
  }
  function K(a, b) {
    if ((b === !0 && (a.tooltips = !0), b && b.format)) {
      if ("function" != typeof b.format)
        throw new Error("noUiSlider: 'tooltips.format' must be an object.");
      a.tooltips = { format: b.format };
    }
  }
  function L(a, b) {
    if (
      ((a.format = b), "function" == typeof b.to && "function" == typeof b.from)
    )
      return !0;
    throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  }
  function M(a, b) {
    if (void 0 !== b && "string" != typeof b)
      throw new Error("noUiSlider: 'cssPrefix' must be a string.");
    a.cssPrefix = b;
  }
  function N(a) {
    var b,
      c = { margin: 0, limit: 0, animate: !0, format: S };
    b = {
      step: { r: !1, t: z },
      start: { r: !0, t: B },
      connect: { r: !0, t: E },
      direction: { r: !0, t: I },
      snap: { r: !1, t: C },
      animate: { r: !1, t: D },
      range: { r: !0, t: A },
      orientation: { r: !1, t: F },
      margin: { r: !1, t: G },
      limit: { r: !1, t: H },
      behaviour: { r: !0, t: J },
      format: { r: !1, t: L },
      tooltips: { r: !1, t: K },
      cssPrefix: { r: !1, t: M },
    };
    var d = {
      connect: !1,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
    };
    return (
      Object.keys(d).forEach(function (b) {
        void 0 === a[b] && (a[b] = d[b]);
      }),
      Object.keys(b).forEach(function (d) {
        var e = b[d];
        if (void 0 === a[d]) {
          if (e.r) throw new Error("noUiSlider: '" + d + "' is required.");
          return !0;
        }
        e.t(c, a[d]);
      }),
      (c.pips = a.pips),
      (c.style = c.ort ? "top" : "left"),
      c
    );
  }
  function O(b, d) {
    function e(a, b, c) {
      var d = a + b[0],
        e = a + b[1];
      return c
        ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [g(d), g(e)])
        : [d, e];
    }
    function o(a, b) {
      a.preventDefault();
      var c,
        d,
        e = 0 === a.type.indexOf("touch"),
        f = 0 === a.type.indexOf("mouse"),
        g = 0 === a.type.indexOf("pointer"),
        h = a;
      return (
        0 === a.type.indexOf("MSPointer") && (g = !0),
        e && ((c = a.changedTouches[0].pageX), (d = a.changedTouches[0].pageY)),
        (b = b || m()),
        (f || g) && ((c = a.clientX + b.x), (d = a.clientY + b.y)),
        (h.pageOffset = b),
        (h.points = [c, d]),
        (h.cursor = f || g),
        h
      );
    }
    function p(a, b) {
      var c = document.createElement("div"),
        d = document.createElement("div"),
        e = ["-lower", "-upper"];
      return (
        a && e.reverse(),
        j(d, aa[3]),
        j(d, aa[3] + e[b]),
        j(c, aa[2]),
        c.appendChild(d),
        c
      );
    }
    function q(a, b, c) {
      switch (a) {
        case 1:
          j(b, aa[7]), j(c[0], aa[6]);
          break;
        case 3:
          j(c[1], aa[6]);
        case 2:
          j(c[0], aa[7]);
        case 0:
          j(b, aa[6]);
      }
    }
    function r(a, b, c) {
      var d,
        e = [];
      for (d = 0; a > d; d += 1) e.push(c.appendChild(p(b, d)));
      return e;
    }
    function s(a, b, c) {
      j(c, aa[0]), j(c, aa[8 + a]), j(c, aa[4 + b]);
      var d = document.createElement("div");
      return j(d, aa[1]), c.appendChild(d), d;
    }
    function t(a) {
      return a;
    }
    function u(a) {
      var b = document.createElement("div");
      return (b.className = aa[18]), a.firstChild.appendChild(b);
    }
    function v(a) {
      var b = a.format ? a.format : t,
        c = W.map(u);
      S("update", function (a, d, e) {
        c[d].innerHTML = b(a[d], e[d]);
      });
    }
    function w(a, b, c) {
      if ("range" === a || "steps" === a) return Z.xVal;
      if ("count" === a) {
        var d,
          e = 100 / (b - 1),
          f = 0;
        for (b = []; (d = f++ * e) <= 100; ) b.push(d);
        a = "positions";
      }
      return "positions" === a
        ? b.map(function (a) {
            return Z.fromStepping(c ? Z.getStep(a) : a);
          })
        : "values" === a
        ? c
          ? b.map(function (a) {
              return Z.fromStepping(Z.getStep(Z.toStepping(a)));
            })
          : b
        : void 0;
    }
    function x(b, c, d) {
      function e(a, b) {
        return (a + b).toFixed(7) / 1;
      }
      var f = Z.direction,
        g = {},
        h = Z.xVal[0],
        i = Z.xVal[Z.xVal.length - 1],
        j = !1,
        k = !1,
        l = 0;
      return (
        (Z.direction = 0),
        (d = a(
          d.slice().sort(function (a, b) {
            return a - b;
          })
        )),
        d[0] !== h && (d.unshift(h), (j = !0)),
        d[d.length - 1] !== i && (d.push(i), (k = !0)),
        d.forEach(function (a, f) {
          var h,
            i,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = a,
            v = d[f + 1];
          if (
            ("steps" === c && (h = Z.xNumSteps[f]),
            h || (h = v - u),
            u !== !1 && void 0 !== v)
          )
            for (i = u; v >= i; i = e(i, h)) {
              for (
                n = Z.toStepping(i),
                  o = n - l,
                  r = o / b,
                  s = Math.round(r),
                  t = o / s,
                  m = 1;
                s >= m;
                m += 1
              )
                (p = l + m * t), (g[p.toFixed(5)] = ["x", 0]);
              (q = d.indexOf(i) > -1 ? 1 : "steps" === c ? 2 : 0),
                !f && j && (q = 0),
                (i === v && k) || (g[n.toFixed(5)] = [i, q]),
                (l = n);
            }
        }),
        (Z.direction = f),
        g
      );
    }
    function y(a, b, c) {
      function e(a) {
        return ["-normal", "-large", "-sub"][a];
      }
      function f(a, b, c) {
        return (
          'class="' +
          b +
          " " +
          b +
          "-" +
          h +
          " " +
          b +
          e(c[1]) +
          '" style="' +
          d.style +
          ": " +
          a +
          '%"'
        );
      }
      function g(a, d) {
        Z.direction && (a = 100 - a),
          (d[1] = d[1] && b ? b(d[0], d[1]) : d[1]),
          (i.innerHTML += "<div " + f(a, "noUi-marker", d) + "></div>"),
          d[1] &&
            (i.innerHTML +=
              "<div " + f(a, "noUi-value", d) + ">" + c.to(d[0]) + "</div>");
      }
      var h = ["horizontal", "vertical"][d.ort],
        i = document.createElement("div");
      return (
        j(i, "noUi-pips"),
        j(i, "noUi-pips-" + h),
        Object.keys(a).forEach(function (b) {
          g(b, a[b]);
        }),
        i
      );
    }
    function z(a) {
      var b = a.mode,
        c = a.density || 1,
        d = a.filter || !1,
        e = a.values || !1,
        f = a.stepped || !1,
        g = w(b, e, f),
        h = x(c, b, g),
        i = a.format || { to: Math.round };
      return X.appendChild(y(h, d, i));
    }
    function A() {
      return V["offset" + ["Width", "Height"][d.ort]];
    }
    function B(a, b) {
      void 0 !== b && 1 !== d.handles && (b = Math.abs(b - d.dir)),
        Object.keys(_).forEach(function (c) {
          var d = c.split(".")[0];
          a === d &&
            _[c].forEach(function (a) {
              a(h(M()), b, C(Array.prototype.slice.call($)));
            });
        });
    }
    function C(a) {
      return 1 === a.length ? a[0] : d.dir ? a.reverse() : a;
    }
    function D(a, b, c, e) {
      var f = function (b) {
          return X.hasAttribute("disabled")
            ? !1
            : l(X, aa[14])
            ? !1
            : ((b = o(b, e.pageOffset)),
              a === Q.start && void 0 !== b.buttons && b.buttons > 1
                ? !1
                : ((b.calcPoint = b.points[d.ort]), void c(b, e)));
        },
        g = [];
      return (
        a.split(" ").forEach(function (a) {
          b.addEventListener(a, f, !1), g.push([a, f]);
        }),
        g
      );
    }
    function E(a, b) {
      if (0 === a.buttons && 0 === a.which && 0 !== b.buttonsProperty)
        return F(a, b);
      var c,
        d,
        f = b.handles || W,
        g = !1,
        h = (100 * (a.calcPoint - b.start)) / b.baseSize,
        i = f[0] === W[0] ? 0 : 1;
      if (
        ((c = e(h, b.positions, f.length > 1)),
        (g = J(f[0], c[i], 1 === f.length)),
        f.length > 1)
      ) {
        if ((g = J(f[1], c[i ? 0 : 1], !1) || g))
          for (d = 0; d < b.handles.length; d++) B("slide", d);
      } else g && B("slide", i);
    }
    function F(a, b) {
      var c = V.querySelector("." + aa[15]),
        d = b.handles[0] === W[0] ? 0 : 1;
      null !== c && k(c, aa[15]),
        a.cursor &&
          ((document.body.style.cursor = ""),
          document.body.removeEventListener(
            "selectstart",
            document.body.noUiListener
          ));
      var e = document.documentElement;
      e.noUiListeners.forEach(function (a) {
        e.removeEventListener(a[0], a[1]);
      }),
        k(X, aa[12]),
        B("set", d),
        B("change", d);
    }
    function G(a, b) {
      var c = document.documentElement;
      if (
        1 === b.handles.length &&
        (j(b.handles[0].children[0], aa[15]),
        b.handles[0].hasAttribute("disabled"))
      )
        return !1;
      a.stopPropagation();
      var d = D(Q.move, c, E, {
          start: a.calcPoint,
          baseSize: A(),
          pageOffset: a.pageOffset,
          handles: b.handles,
          buttonsProperty: a.buttons,
          positions: [Y[0], Y[W.length - 1]],
        }),
        e = D(Q.end, c, F, { handles: b.handles });
      if (((c.noUiListeners = d.concat(e)), a.cursor)) {
        (document.body.style.cursor = getComputedStyle(a.target).cursor),
          W.length > 1 && j(X, aa[12]);
        var f = function () {
          return !1;
        };
        (document.body.noUiListener = f),
          document.body.addEventListener("selectstart", f, !1);
      }
    }
    function H(a) {
      var b,
        e,
        g = a.calcPoint,
        h = 0;
      return (
        a.stopPropagation(),
        W.forEach(function (a) {
          h += c(a)[d.style];
        }),
        (b = h / 2 > g || 1 === W.length ? 0 : 1),
        (g -= c(V)[d.style]),
        (e = (100 * g) / A()),
        d.events.snap || f(X, aa[14], 300),
        W[b].hasAttribute("disabled")
          ? !1
          : (J(W[b], e),
            B("slide", b),
            B("set", b),
            B("change", b),
            void (d.events.snap && G(a, { handles: [W[b]] })))
      );
    }
    function I(a) {
      var b, c;
      if (!a.fixed)
        for (b = 0; b < W.length; b += 1)
          D(Q.start, W[b].children[0], G, { handles: [W[b]] });
      a.tap && D(Q.start, V, H, { handles: W }),
        a.drag &&
          ((c = [V.querySelector("." + aa[7])]),
          j(c[0], aa[10]),
          a.fixed && c.push(W[c[0] === W[0] ? 1 : 0].children[0]),
          c.forEach(function (a) {
            D(Q.start, a, G, { handles: W });
          }));
    }
    function J(a, b, c) {
      var e = a !== W[0] ? 1 : 0,
        f = Y[0] + d.margin,
        h = Y[1] - d.margin,
        i = Y[0] + d.limit,
        l = Y[1] - d.limit,
        m = Z.fromStepping(b);
      return (
        W.length > 1 && (b = e ? Math.max(b, f) : Math.min(b, h)),
        c !== !1 &&
          d.limit &&
          W.length > 1 &&
          (b = e ? Math.min(b, i) : Math.max(b, l)),
        (b = Z.getStep(b)),
        (b = g(parseFloat(b.toFixed(7)))),
        b === Y[e] && m === $[e]
          ? !1
          : (window.requestAnimationFrame
              ? window.requestAnimationFrame(function () {
                  a.style[d.style] = b + "%";
                })
              : (a.style[d.style] = b + "%"),
            a.previousSibling || (k(a, aa[17]), b > 50 && j(a, aa[17])),
            (Y[e] = b),
            ($[e] = Z.fromStepping(b)),
            B("update", e),
            !0)
      );
    }
    function K(a, b) {
      var c, e, f;
      for (d.limit && (a += 1), c = 0; a > c; c += 1)
        (e = c % 2),
          (f = b[e]),
          null !== f &&
            f !== !1 &&
            ("number" == typeof f && (f = String(f)),
            (f = d.format.from(f)),
            (f === !1 ||
              isNaN(f) ||
              J(W[e], Z.toStepping(f), c === 3 - d.dir) === !1) &&
              B("update", e));
    }
    function L(a) {
      var b,
        c,
        e = h(a);
      for (
        d.dir && d.handles > 1 && e.reverse(),
          d.animate && -1 !== Y[0] && f(X, aa[14], 300),
          b = W.length > 1 ? 3 : 1,
          1 === e.length && (b = 1),
          K(b, e),
          c = 0;
        c < W.length;
        c++
      )
        B("set", c);
    }
    function M() {
      var a,
        b = [];
      for (a = 0; a < d.handles; a += 1) b[a] = d.format.to($[a]);
      return C(b);
    }
    function O() {
      aa.forEach(function (a) {
        a && k(X, a);
      }),
        (X.innerHTML = ""),
        delete X.noUiSlider;
    }
    function P() {
      var a = Y.map(function (a, b) {
        var c = Z.getApplicableStep(a),
          d = i(String(c[2])),
          e = $[b],
          f = 100 === a ? null : c[2],
          g = Number((e - c[2]).toFixed(d)),
          h = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
        return [h, f];
      });
      return C(a);
    }
    function S(a, b) {
      (_[a] = _[a] || []),
        _[a].push(b),
        "update" === a.split(".")[0] &&
          W.forEach(function (a, b) {
            B("update", b);
          });
    }
    function T(a) {
      var b = a.split(".")[0],
        c = a.substring(b.length);
      Object.keys(_).forEach(function (a) {
        var d = a.split(".")[0],
          e = a.substring(d.length);
        (b && b !== d) || (c && c !== e) || delete _[a];
      });
    }
    function U(a) {
      var b = N({
        start: [0, 0],
        margin: a.margin,
        limit: a.limit,
        step: a.step,
        range: a.range,
        animate: a.animate,
      });
      (d.margin = b.margin),
        (d.limit = b.limit),
        (d.step = b.step),
        (d.range = b.range),
        (d.animate = b.animate),
        (Z = b.spectrum);
    }
    var V,
      W,
      X = b,
      Y = [-1, -1],
      Z = d.spectrum,
      $ = [],
      _ = {},
      aa = [
        "target",
        "base",
        "origin",
        "handle",
        "horizontal",
        "vertical",
        "background",
        "connect",
        "ltr",
        "rtl",
        "draggable",
        "",
        "state-drag",
        "",
        "state-tap",
        "active",
        "",
        "stacking",
        "tooltip",
      ].map(n(d.cssPrefix || R));
    if (X.noUiSlider) throw new Error("Slider was already initialized.");
    return (
      (V = s(d.dir, d.ort, X)),
      (W = r(d.handles, d.dir, V)),
      q(d.connect, X, W),
      I(d.events),
      d.pips && z(d.pips),
      d.tooltips && v(d.tooltips),
      { destroy: O, steps: P, on: S, off: T, get: M, set: L, updateOptions: U }
    );
  }
  function P(a, b) {
    if (!a.nodeName)
      throw new Error("noUiSlider.create requires a single element.");
    var c = N(b, a),
      d = O(a, c);
    return d.set(c.start), (a.noUiSlider = d), d;
  }
  var Q = window.navigator.pointerEnabled
      ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
      : window.navigator.msPointerEnabled
      ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
      : {
          start: "mousedown touchstart",
          move: "mousemove touchmove",
          end: "mouseup touchend",
        },
    R = "noUi-";
  (y.prototype.getMargin = function (a) {
    return 2 === this.xPct.length ? p(this.xVal, a) : !1;
  }),
    (y.prototype.toStepping = function (a) {
      return (
        (a = t(this.xVal, this.xPct, a)), this.direction && (a = 100 - a), a
      );
    }),
    (y.prototype.fromStepping = function (a) {
      return this.direction && (a = 100 - a), e(u(this.xVal, this.xPct, a));
    }),
    (y.prototype.getStep = function (a) {
      return (
        this.direction && (a = 100 - a),
        (a = v(this.xPct, this.xSteps, this.snap, a)),
        this.direction && (a = 100 - a),
        a
      );
    }),
    (y.prototype.getApplicableStep = function (a) {
      var b = s(a, this.xPct),
        c = 100 === a ? 2 : 1;
      return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]];
    }),
    (y.prototype.convert = function (a) {
      return this.getStep(this.toStepping(a));
    });
  var S = {
    to: function (a) {
      return void 0 !== a && a.toFixed(2);
    },
    from: Number,
  };
  return { create: P };
});
