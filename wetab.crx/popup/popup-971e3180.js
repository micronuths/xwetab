(() => {
    "use strict";
    var e,
        t = {
            92244: (e, t, n) => {
                n.d(t, { Ib: () => c, OR: () => l, Vd: () => d, iP: () => u, rP: () => m });
                var i = n(29445),
                    o = n(57268),
                    r = "undefined" != typeof window;
                var a, s;
                function c(e) {
                    let t;
                    (0, o.bv)(() => {
                        e(),
                            (0, o.Y3)(() => {
                                t = !0;
                            });
                    }),
                        (0, o.dl)(() => {
                            t && e();
                        });
                }
                function l(e, t, n = {}) {
                    if (!r) return;
                    const { target: a = window, passive: s = !1, capture: l = !1 } = n;
                    let d;
                    const u = (n) => {
                            const o = (0, i.SU)(n);
                            o && !d && (o.addEventListener(e, t, { capture: l, passive: s }), (d = !0));
                        },
                        g = (n) => {
                            const o = (0, i.SU)(n);
                            o && d && (o.removeEventListener(e, t, l), (d = !1));
                        };
                    (0, o.Ah)(() => g(a)),
                        (0, o.se)(() => g(a)),
                        c(() => u(a)),
                        (0, i.dq)(a) &&
                            (0, o.YP)(a, (e, t) => {
                                g(t), u(e);
                            });
                }
                function d(e, t, n = {}) {
                    if (!r) return;
                    const { eventName: o = "click" } = n;
                    l(
                        o,
                        (n) => {
                            const o = (0, i.SU)(e);
                            o && !o.contains(n.target) && t(n);
                        },
                        { target: document }
                    );
                }
                function u() {
                    if (!a && ((a = (0, i.iH)(0)), (s = (0, i.iH)(0)), r)) {
                        const e = () => {
                            (a.value = window.innerWidth), (s.value = window.innerHeight);
                        };
                        e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
                    }
                    return { width: a, height: s };
                }
                var g = /scroll|auto/i,
                    p = r ? window : void 0;
                function f(e) {
                    return "HTML" !== e.tagName && "BODY" !== e.tagName && 1 === e.nodeType;
                }
                function m(e, t = p) {
                    let n = e;
                    for (; n && n !== t && f(n); ) {
                        const { overflowY: e } = window.getComputedStyle(n);
                        if (g.test(e)) return n;
                        n = n.parentNode;
                    }
                    return t;
                }
                Symbol("van-field");
            },
            29445: (e, t, n) => {
                n.d(t, {
                    Bj: () => r,
                    Fl: () => Fe,
                    IU: () => we,
                    Jd: () => v,
                    PG: () => me,
                    SU: () => Oe,
                    Um: () => ge,
                    WL: () => Se,
                    X$: () => x,
                    X3: () => ye,
                    Xl: () => ve,
                    dq: () => Te,
                    iH: () => Ie,
                    j: () => C,
                    lk: () => k,
                    qj: () => ue,
                    qq: () => h,
                    yT: () => be,
                });
                var i = n(94209);
                let o;
                class r {
                    constructor(e = !1) {
                        (this.active = !0), (this.effects = []), (this.cleanups = []), !e && o && ((this.parent = o), (this.index = (o.scopes || (o.scopes = [])).push(this) - 1));
                    }
                    run(e) {
                        if (this.active)
                            try {
                                return (o = this), e();
                            } finally {
                                o = this.parent;
                            }
                        else 0;
                    }
                    on() {
                        o = this;
                    }
                    off() {
                        o = this.parent;
                    }
                    stop(e) {
                        if (this.active) {
                            let t, n;
                            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
                            for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
                            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                            if (this.parent && !e) {
                                const e = this.parent.scopes.pop();
                                e && e !== this && ((this.parent.scopes[this.index] = e), (e.index = this.index));
                            }
                            this.active = !1;
                        }
                    }
                }
                function a(e, t = o) {
                    t && t.active && t.effects.push(e);
                }
                const s = (e) => {
                        const t = new Set(e);
                        return (t.w = 0), (t.n = 0), t;
                    },
                    c = (e) => (e.w & g) > 0,
                    l = (e) => (e.n & g) > 0,
                    d = new WeakMap();
                let u = 0,
                    g = 1;
                let p;
                const f = Symbol(""),
                    m = Symbol("");
                class h {
                    constructor(e, t = null, n) {
                        (this.fn = e), (this.scheduler = t), (this.active = !0), (this.deps = []), (this.parent = void 0), a(this, n);
                    }
                    run() {
                        if (!this.active) return this.fn();
                        let e = p,
                            t = y;
                        for (; e; ) {
                            if (e === this) return;
                            e = e.parent;
                        }
                        try {
                            return (
                                (this.parent = p),
                                (p = this),
                                (y = !0),
                                (g = 1 << ++u),
                                u <= 30
                                    ? (({ deps: e }) => {
                                          if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= g;
                                      })(this)
                                    : b(this),
                                this.fn()
                            );
                        } finally {
                            u <= 30 &&
                                ((e) => {
                                    const { deps: t } = e;
                                    if (t.length) {
                                        let n = 0;
                                        for (let i = 0; i < t.length; i++) {
                                            const o = t[i];
                                            c(o) && !l(o) ? o.delete(e) : (t[n++] = o), (o.w &= ~g), (o.n &= ~g);
                                        }
                                        t.length = n;
                                    }
                                })(this),
                                (g = 1 << --u),
                                (p = this.parent),
                                (y = t),
                                (this.parent = void 0);
                        }
                    }
                    stop() {
                        this.active && (b(this), this.onStop && this.onStop(), (this.active = !1));
                    }
                }
                function b(e) {
                    const { deps: t } = e;
                    if (t.length) {
                        for (let n = 0; n < t.length; n++) t[n].delete(e);
                        t.length = 0;
                    }
                }
                let y = !0;
                const w = [];
                function v() {
                    w.push(y), (y = !1);
                }
                function k() {
                    const e = w.pop();
                    y = void 0 === e || e;
                }
                function C(e, t, n) {
                    if (y && p) {
                        let t = d.get(e);
                        t || d.set(e, (t = new Map()));
                        let i = t.get(n);
                        i || t.set(n, (i = s()));
                        A(i, void 0);
                    }
                }
                function A(e, t) {
                    let n = !1;
                    u <= 30 ? l(e) || ((e.n |= g), (n = !c(e))) : (n = !e.has(p)), n && (e.add(p), p.deps.push(e));
                }
                function x(e, t, n, o, r, a) {
                    const c = d.get(e);
                    if (!c) return;
                    let l = [];
                    if ("clear" === t) l = [...c.values()];
                    else if ("length" === n && (0, i.isArray)(e))
                        c.forEach((e, t) => {
                            ("length" === t || t >= o) && l.push(e);
                        });
                    else
                        switch ((void 0 !== n && l.push(c.get(n)), t)) {
                            case "add":
                                (0, i.isArray)(e) ? (0, i.isIntegerKey)(n) && l.push(c.get("length")) : (l.push(c.get(f)), (0, i.isMap)(e) && l.push(c.get(m)));
                                break;
                            case "delete":
                                (0, i.isArray)(e) || (l.push(c.get(f)), (0, i.isMap)(e) && l.push(c.get(m)));
                                break;
                            case "set":
                                (0, i.isMap)(e) && l.push(c.get(f));
                        }
                    if (1 === l.length) l[0] && T(l[0]);
                    else {
                        const e = [];
                        for (const t of l) t && e.push(...t);
                        T(s(e));
                    }
                }
                function T(e, t) {
                    for (const t of (0, i.isArray)(e) ? e : [...e]) (t !== p || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
                }
                const I = (0, i.makeMap)("__proto__,__v_isRef,__isVue"),
                    j = new Set(
                        Object.getOwnPropertyNames(Symbol)
                            .map((e) => Symbol[e])
                            .filter(i.isSymbol)
                    ),
                    _ = F(),
                    O = F(!1, !0),
                    E = F(!0),
                    S = B();
                function B() {
                    const e = {};
                    return (
                        ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
                            e[t] = function (...e) {
                                const n = we(this);
                                for (let e = 0, t = this.length; e < t; e++) C(n, 0, e + "");
                                const i = n[t](...e);
                                return -1 === i || !1 === i ? n[t](...e.map(we)) : i;
                            };
                        }),
                        ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
                            e[t] = function (...e) {
                                v();
                                const n = we(this)[t].apply(this, e);
                                return k(), n;
                            };
                        }),
                        e
                    );
                }
                function F(e = !1, t = !1) {
                    return function (n, o, r) {
                        if ("__v_isReactive" === o) return !e;
                        if ("__v_isReadonly" === o) return e;
                        if ("__v_isShallow" === o) return t;
                        if ("__v_raw" === o && r === (e ? (t ? de : le) : t ? ce : se).get(n)) return n;
                        const a = (0, i.isArray)(n);
                        if (!e && a && (0, i.hasOwn)(S, o)) return Reflect.get(S, o, r);
                        const s = Reflect.get(n, o, r);
                        if ((0, i.isSymbol)(o) ? j.has(o) : I(o)) return s;
                        if ((e || C(n, 0, o), t)) return s;
                        if (Te(s)) {
                            return !a || !(0, i.isIntegerKey)(o) ? s.value : s;
                        }
                        return (0, i.isObject)(s) ? (e ? pe(s) : ue(s)) : s;
                    };
                }
                const M = z(),
                    P = z(!0);
                function z(e = !1) {
                    return function (t, n, o, r) {
                        let a = t[n];
                        if (he(a) && Te(a) && !Te(o)) return !1;
                        if (!e && !he(o) && (be(o) || ((o = we(o)), (a = we(a))), !(0, i.isArray)(t) && Te(a) && !Te(o))) return (a.value = o), !0;
                        const s = (0, i.isArray)(t) && (0, i.isIntegerKey)(n) ? Number(n) < t.length : (0, i.hasOwn)(t, n),
                            c = Reflect.set(t, n, o, r);
                        return t === we(r) && (s ? (0, i.hasChanged)(o, a) && x(t, "set", n, o) : x(t, "add", n, o)), c;
                    };
                }
                const D = {
                        get: _,
                        set: M,
                        deleteProperty: function (e, t) {
                            const n = (0, i.hasOwn)(e, t),
                                o = (e[t], Reflect.deleteProperty(e, t));
                            return o && n && x(e, "delete", t, void 0), o;
                        },
                        has: function (e, t) {
                            const n = Reflect.has(e, t);
                            return ((0, i.isSymbol)(t) && j.has(t)) || C(e, 0, t), n;
                        },
                        ownKeys: function (e) {
                            return C(e, 0, (0, i.isArray)(e) ? "length" : f), Reflect.ownKeys(e);
                        },
                    },
                    L = { get: E, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
                    q = (0, i.extend)({}, D, { get: O, set: P }),
                    Q = (e) => e,
                    N = (e) => Reflect.getPrototypeOf(e);
                function R(e, t, n = !1, i = !1) {
                    const o = we((e = e.__v_raw)),
                        r = we(t);
                    t !== r && !n && C(o, 0, t), !n && C(o, 0, r);
                    const { has: a } = N(o),
                        s = i ? Q : n ? Ce : ke;
                    return a.call(o, t) ? s(e.get(t)) : a.call(o, r) ? s(e.get(r)) : void (e !== o && e.get(t));
                }
                function Y(e, t = !1) {
                    const n = this.__v_raw,
                        i = we(n),
                        o = we(e);
                    return e !== o && !t && C(i, 0, e), !t && C(i, 0, o), e === o ? n.has(e) : n.has(e) || n.has(o);
                }
                function U(e, t = !1) {
                    return (e = e.__v_raw), !t && C(we(e), 0, f), Reflect.get(e, "size", e);
                }
                function V(e) {
                    e = we(e);
                    const t = we(this);
                    return N(t).has.call(t, e) || (t.add(e), x(t, "add", e, e)), this;
                }
                function J(e, t) {
                    t = we(t);
                    const n = we(this),
                        { has: o, get: r } = N(n);
                    let a = o.call(n, e);
                    a || ((e = we(e)), (a = o.call(n, e)));
                    const s = r.call(n, e);
                    return n.set(e, t), a ? (0, i.hasChanged)(t, s) && x(n, "set", e, t) : x(n, "add", e, t), this;
                }
                function W(e) {
                    const t = we(this),
                        { has: n, get: i } = N(t);
                    let o = n.call(t, e);
                    o || ((e = we(e)), (o = n.call(t, e)));
                    i && i.call(t, e);
                    const r = t.delete(e);
                    return o && x(t, "delete", e, void 0), r;
                }
                function G() {
                    const e = we(this),
                        t = 0 !== e.size,
                        n = e.clear();
                    return t && x(e, "clear", void 0, void 0), n;
                }
                function H(e, t) {
                    return function (n, i) {
                        const o = this,
                            r = o.__v_raw,
                            a = we(r),
                            s = t ? Q : e ? Ce : ke;
                        return !e && C(a, 0, f), r.forEach((e, t) => n.call(i, s(e), s(t), o));
                    };
                }
                function K(e, t, n) {
                    return function (...o) {
                        const r = this.__v_raw,
                            a = we(r),
                            s = (0, i.isMap)(a),
                            c = "entries" === e || (e === Symbol.iterator && s),
                            l = "keys" === e && s,
                            d = r[e](...o),
                            u = n ? Q : t ? Ce : ke;
                        return (
                            !t && C(a, 0, l ? m : f),
                            {
                                next() {
                                    const { value: e, done: t } = d.next();
                                    return t ? { value: e, done: t } : { value: c ? [u(e[0]), u(e[1])] : u(e), done: t };
                                },
                                [Symbol.iterator]() {
                                    return this;
                                },
                            }
                        );
                    };
                }
                function X(e) {
                    return function (...t) {
                        return "delete" !== e && this;
                    };
                }
                function Z() {
                    const e = {
                            get(e) {
                                return R(this, e);
                            },
                            get size() {
                                return U(this);
                            },
                            has: Y,
                            add: V,
                            set: J,
                            delete: W,
                            clear: G,
                            forEach: H(!1, !1),
                        },
                        t = {
                            get(e) {
                                return R(this, e, !1, !0);
                            },
                            get size() {
                                return U(this);
                            },
                            has: Y,
                            add: V,
                            set: J,
                            delete: W,
                            clear: G,
                            forEach: H(!1, !0),
                        },
                        n = {
                            get(e) {
                                return R(this, e, !0);
                            },
                            get size() {
                                return U(this, !0);
                            },
                            has(e) {
                                return Y.call(this, e, !0);
                            },
                            add: X("add"),
                            set: X("set"),
                            delete: X("delete"),
                            clear: X("clear"),
                            forEach: H(!0, !1),
                        },
                        i = {
                            get(e) {
                                return R(this, e, !0, !0);
                            },
                            get size() {
                                return U(this, !0);
                            },
                            has(e) {
                                return Y.call(this, e, !0);
                            },
                            add: X("add"),
                            set: X("set"),
                            delete: X("delete"),
                            clear: X("clear"),
                            forEach: H(!0, !0),
                        };
                    return (
                        ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
                            (e[o] = K(o, !1, !1)), (n[o] = K(o, !0, !1)), (t[o] = K(o, !1, !0)), (i[o] = K(o, !0, !0));
                        }),
                        [e, n, t, i]
                    );
                }
                const [$, ee, te, ne] = Z();
                function ie(e, t) {
                    const n = t ? (e ? ne : te) : e ? ee : $;
                    return (t, o, r) => ("__v_isReactive" === o ? !e : "__v_isReadonly" === o ? e : "__v_raw" === o ? t : Reflect.get((0, i.hasOwn)(n, o) && o in t ? n : t, o, r));
                }
                const oe = { get: ie(!1, !1) },
                    re = { get: ie(!1, !0) },
                    ae = { get: ie(!0, !1) };
                const se = new WeakMap(),
                    ce = new WeakMap(),
                    le = new WeakMap(),
                    de = new WeakMap();
                function ue(e) {
                    return he(e) ? e : fe(e, !1, D, oe, se);
                }
                function ge(e) {
                    return fe(e, !1, q, re, ce);
                }
                function pe(e) {
                    return fe(e, !0, L, ae, le);
                }
                function fe(e, t, n, o, r) {
                    if (!(0, i.isObject)(e)) return e;
                    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
                    const a = r.get(e);
                    if (a) return a;
                    const s =
                        (c = e).__v_skip || !Object.isExtensible(c)
                            ? 0
                            : (function (e) {
                                  switch (e) {
                                      case "Object":
                                      case "Array":
                                          return 1;
                                      case "Map":
                                      case "Set":
                                      case "WeakMap":
                                      case "WeakSet":
                                          return 2;
                                      default:
                                          return 0;
                                  }
                              })((0, i.toRawType)(c));
                    var c;
                    if (0 === s) return e;
                    const l = new Proxy(e, 2 === s ? o : n);
                    return r.set(e, l), l;
                }
                function me(e) {
                    return he(e) ? me(e.__v_raw) : !(!e || !e.__v_isReactive);
                }
                function he(e) {
                    return !(!e || !e.__v_isReadonly);
                }
                function be(e) {
                    return !(!e || !e.__v_isShallow);
                }
                function ye(e) {
                    return me(e) || he(e);
                }
                function we(e) {
                    const t = e && e.__v_raw;
                    return t ? we(t) : e;
                }
                function ve(e) {
                    return (0, i.def)(e, "__v_skip", !0), e;
                }
                const ke = (e) => ((0, i.isObject)(e) ? ue(e) : e),
                    Ce = (e) => ((0, i.isObject)(e) ? pe(e) : e);
                function Ae(e) {
                    y && p && A((e = we(e)).dep || (e.dep = s()));
                }
                function xe(e, t) {
                    (e = we(e)).dep && T(e.dep);
                }
                function Te(e) {
                    return !(!e || !0 !== e.__v_isRef);
                }
                function Ie(e) {
                    return je(e, !1);
                }
                function je(e, t) {
                    return Te(e) ? e : new _e(e, t);
                }
                class _e {
                    constructor(e, t) {
                        (this.__v_isShallow = t), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = t ? e : we(e)), (this._value = t ? e : ke(e));
                    }
                    get value() {
                        return Ae(this), this._value;
                    }
                    set value(e) {
                        (e = this.__v_isShallow ? e : we(e)), (0, i.hasChanged)(e, this._rawValue) && ((this._rawValue = e), (this._value = this.__v_isShallow ? e : ke(e)), xe(this));
                    }
                }
                function Oe(e) {
                    return Te(e) ? e.value : e;
                }
                const Ee = {
                    get: (e, t, n) => Oe(Reflect.get(e, t, n)),
                    set: (e, t, n, i) => {
                        const o = e[t];
                        return Te(o) && !Te(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, i);
                    },
                };
                function Se(e) {
                    return me(e) ? e : new Proxy(e, Ee);
                }
                class Be {
                    constructor(e, t, n, i) {
                        (this._setter = t),
                            (this.dep = void 0),
                            (this.__v_isRef = !0),
                            (this._dirty = !0),
                            (this.effect = new h(e, () => {
                                this._dirty || ((this._dirty = !0), xe(this));
                            })),
                            (this.effect.computed = this),
                            (this.effect.active = this._cacheable = !i),
                            (this.__v_isReadonly = n);
                    }
                    get value() {
                        const e = we(this);
                        return Ae(e), (!e._dirty && e._cacheable) || ((e._dirty = !1), (e._value = e.effect.run())), e._value;
                    }
                    set value(e) {
                        this._setter(e);
                    }
                }
                function Fe(e, t, n = !1) {
                    let o, r;
                    const a = (0, i.isFunction)(e);
                    a ? ((o = e), (r = i.NOOP)) : ((o = e.get), (r = e.set));
                    return new Be(o, r, a || !r, n);
                }
                Promise.resolve();
            },
            57268: (e, t, n) => {
                n.d(t, {
                    $d: () => a,
                    Ah: () => Ce,
                    Cn: () => F,
                    F4: () => Vt,
                    FN: () => rn,
                    Fl: () => wn,
                    HY: () => xt,
                    JJ: () => R,
                    Jd: () => ke,
                    Ko: () => Pe,
                    LL: () => Be,
                    P$: () => Z,
                    Q6: () => oe,
                    Rr: () => vn,
                    U2: () => ee,
                    Uk: () => Wt,
                    Us: () => mt,
                    WI: () => ze,
                    Wm: () => Yt,
                    Y3: () => b,
                    Y8: () => K,
                    YP: () => V,
                    _: () => Rt,
                    aZ: () => re,
                    bv: () => ye,
                    dD: () => B,
                    dG: () => Zt,
                    dl: () => le,
                    f3: () => Y,
                    h: () => Cn,
                    iD: () => Pt,
                    ic: () => ve,
                    j4: () => zt,
                    kq: () => Gt,
                    lR: () => At,
                    nK: () => ie,
                    se: () => de,
                    up: () => Ee,
                    w5: () => M,
                    wg: () => Et,
                    wy: () => je,
                });
                var i = n(29445),
                    o = n(94209);
                function r(e, t, n, i) {
                    let o;
                    try {
                        o = i ? e(...i) : e();
                    } catch (e) {
                        s(e, t, n);
                    }
                    return o;
                }
                function a(e, t, n, i) {
                    if ((0, o.isFunction)(e)) {
                        const a = r(e, t, n, i);
                        return (
                            a &&
                                (0, o.isPromise)(a) &&
                                a.catch((e) => {
                                    s(e, t, n);
                                }),
                            a
                        );
                    }
                    const c = [];
                    for (let o = 0; o < e.length; o++) c.push(a(e[o], t, n, i));
                    return c;
                }
                function s(e, t, n, i = !0) {
                    t && t.vnode;
                    if (t) {
                        let i = t.parent;
                        const o = t.proxy,
                            a = n;
                        for (; i; ) {
                            const t = i.ec;
                            if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, o, a)) return;
                            i = i.parent;
                        }
                        const s = t.appContext.config.errorHandler;
                        if (s) return void r(s, null, 10, [e, o, a]);
                    }
                }
                let c = !1,
                    l = !1;
                const d = [];
                let u = 0;
                const g = [];
                let p = null,
                    f = 0;
                const m = Promise.resolve();
                let h = null;
                function b(e) {
                    const t = h || m;
                    return e ? t.then(this ? e.bind(this) : e) : t;
                }
                function y(e) {
                    (d.length && d.includes(e, c && e.allowRecurse ? u + 1 : u)) ||
                        (null == e.id
                            ? d.push(e)
                            : d.splice(
                                  (function (e) {
                                      let t = u + 1,
                                          n = d.length;
                                      for (; t < n; ) {
                                          const i = (t + n) >>> 1;
                                          A(d[i]) < e ? (t = i + 1) : (n = i);
                                      }
                                      return t;
                                  })(e.id),
                                  0,
                                  e
                              ),
                        w());
                }
                function w() {
                    c || l || ((l = !0), (h = m.then(T)));
                }
                function v(e) {
                    (0, o.isArray)(e) ? g.push(...e) : (p && p.includes(e, e.allowRecurse ? f + 1 : f)) || g.push(e), w();
                }
                function k(e, t = c ? u + 1 : 0) {
                    for (0; t < d.length; t++) {
                        const e = d[t];
                        e && e.pre && (d.splice(t, 1), t--, e());
                    }
                }
                function C(e) {
                    if (g.length) {
                        const e = [...new Set(g)];
                        if (((g.length = 0), p)) return void p.push(...e);
                        for (p = e, p.sort((e, t) => A(e) - A(t)), f = 0; f < p.length; f++) p[f]();
                        (p = null), (f = 0);
                    }
                }
                const A = (e) => (null == e.id ? 1 / 0 : e.id),
                    x = (e, t) => {
                        const n = A(e) - A(t);
                        if (0 === n) {
                            if (e.pre && !t.pre) return -1;
                            if (t.pre && !e.pre) return 1;
                        }
                        return n;
                    };
                function T(e) {
                    (l = !1), (c = !0), d.sort(x);
                    o.NOOP;
                    try {
                        for (u = 0; u < d.length; u++) {
                            const e = d[u];
                            e && !1 !== e.active && r(e, null, 14);
                        }
                    } finally {
                        (u = 0), (d.length = 0), C(), (c = !1), (h = null), (d.length || g.length) && T(e);
                    }
                }
                new Set();
                new Map();
                function I(e, t, ...n) {
                    if (e.isUnmounted) return;
                    const i = e.vnode.props || o.EMPTY_OBJ;
                    let r = n;
                    const s = t.startsWith("update:"),
                        c = s && t.slice(7);
                    if (c && c in i) {
                        const e = `${"modelValue" === c ? "model" : c}Modifiers`,
                            { number: t, trim: a } = i[e] || o.EMPTY_OBJ;
                        a && (r = n.map((e) => e.trim())), t && (r = n.map(o.toNumber));
                    }
                    let l;
                    let d = i[(l = (0, o.toHandlerKey)(t))] || i[(l = (0, o.toHandlerKey)((0, o.camelize)(t)))];
                    !d && s && (d = i[(l = (0, o.toHandlerKey)((0, o.hyphenate)(t)))]), d && a(d, e, 6, r);
                    const u = i[l + "Once"];
                    if (u) {
                        if (e.emitted) {
                            if (e.emitted[l]) return;
                        } else e.emitted = {};
                        (e.emitted[l] = !0), a(u, e, 6, r);
                    }
                }
                function j(e, t, n = !1) {
                    const i = t.emitsCache,
                        r = i.get(e);
                    if (void 0 !== r) return r;
                    const a = e.emits;
                    let s = {},
                        c = !1;
                    if (!(0, o.isFunction)(e)) {
                        const i = (e) => {
                            const n = j(e, t, !0);
                            n && ((c = !0), (0, o.extend)(s, n));
                        };
                        !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
                    }
                    return a || c ? ((0, o.isArray)(a) ? a.forEach((e) => (s[e] = null)) : (0, o.extend)(s, a), (0, o.isObject)(e) && i.set(e, s), s) : ((0, o.isObject)(e) && i.set(e, null), null);
                }
                function _(e, t) {
                    return !(!e || !(0, o.isOn)(t)) && ((t = t.slice(2).replace(/Once$/, "")), (0, o.hasOwn)(e, t[0].toLowerCase() + t.slice(1)) || (0, o.hasOwn)(e, (0, o.hyphenate)(t)) || (0, o.hasOwn)(e, t));
                }
                let O = null,
                    E = null;
                function S(e) {
                    const t = O;
                    return (O = e), (E = (e && e.type.__scopeId) || null), t;
                }
                function B(e) {
                    E = e;
                }
                function F() {
                    E = null;
                }
                function M(e, t = O, n) {
                    if (!t) return e;
                    if (e._n) return e;
                    const i = (...n) => {
                        i._d && Ft(-1);
                        const o = S(t);
                        let r;
                        try {
                            r = e(...n);
                        } finally {
                            S(o), i._d && Ft(1);
                        }
                        return r;
                    };
                    return (i._n = !0), (i._c = !0), (i._d = !0), i;
                }
                function P(e) {
                    const {
                        type: t,
                        vnode: n,
                        proxy: i,
                        withProxy: r,
                        props: a,
                        propsOptions: [c],
                        slots: l,
                        attrs: d,
                        emit: u,
                        render: g,
                        renderCache: p,
                        data: f,
                        setupState: m,
                        ctx: h,
                        inheritAttrs: b,
                    } = e;
                    let y, w;
                    const v = S(e);
                    try {
                        if (4 & n.shapeFlag) {
                            const e = r || i;
                            (y = Ht(g.call(e, e, p, a, m, f, h))), (w = d);
                        } else {
                            const e = t;
                            0, (y = Ht(e.length > 1 ? e(a, { attrs: d, slots: l, emit: u }) : e(a, null))), (w = t.props ? d : z(d));
                        }
                    } catch (t) {
                        (_t.length = 0), s(t, e, 1), (y = Yt(It));
                    }
                    let k = y;
                    if (w && !1 !== b) {
                        const e = Object.keys(w),
                            { shapeFlag: t } = k;
                        e.length && 7 & t && (c && e.some(o.isModelListener) && (w = D(w, c)), (k = Jt(k, w)));
                    }
                    return n.dirs && ((k = Jt(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)), n.transition && (k.transition = n.transition), (y = k), S(v), y;
                }
                const z = (e) => {
                        let t;
                        for (const n in e) ("class" === n || "style" === n || (0, o.isOn)(n)) && ((t || (t = {}))[n] = e[n]);
                        return t;
                    },
                    D = (e, t) => {
                        const n = {};
                        for (const i in e) ((0, o.isModelListener)(i) && i.slice(9) in t) || (n[i] = e[i]);
                        return n;
                    };
                function L(e, t, n) {
                    const i = Object.keys(t);
                    if (i.length !== Object.keys(e).length) return !0;
                    for (let o = 0; o < i.length; o++) {
                        const r = i[o];
                        if (t[r] !== e[r] && !_(n, r)) return !0;
                    }
                    return !1;
                }
                function q({ vnode: e, parent: t }, n) {
                    for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
                }
                const Q = (e) => e.__isSuspense;
                function N(e, t) {
                    t && t.pendingBranch ? ((0, o.isArray)(e) ? t.effects.push(...e) : t.effects.push(e)) : v(e);
                }
                function R(e, t) {
                    if (on) {
                        let n = on.provides;
                        const i = on.parent && on.parent.provides;
                        i === n && (n = on.provides = Object.create(i)), (n[e] = t);
                    } else 0;
                }
                function Y(e, t, n = !1) {
                    const i = on || O;
                    if (i) {
                        const r = null == i.parent ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides;
                        if (r && e in r) return r[e];
                        if (arguments.length > 1) return n && (0, o.isFunction)(t) ? t.call(i.proxy) : t;
                    } else 0;
                }
                const U = {};
                function V(e, t, n) {
                    return J(e, t, n);
                }
                function J(e, t, { immediate: n, deep: s, flush: c, onTrack: l, onTrigger: d } = o.EMPTY_OBJ) {
                    const u = on;
                    let g,
                        p,
                        f = !1,
                        m = !1;
                    if (
                        ((0, i.dq)(e)
                            ? ((g = () => e.value), (f = (0, i.yT)(e)))
                            : (0, i.PG)(e)
                            ? ((g = () => e), (s = !0))
                            : (0, o.isArray)(e)
                            ? ((m = !0), (f = e.some((e) => (0, i.PG)(e) || (0, i.yT)(e))), (g = () => e.map((e) => ((0, i.dq)(e) ? e.value : (0, i.PG)(e) ? H(e) : (0, o.isFunction)(e) ? r(e, u, 2) : void 0))))
                            : (g = (0, o.isFunction)(e)
                                  ? t
                                      ? () => r(e, u, 2)
                                      : () => {
                                            if (!u || !u.isUnmounted) return p && p(), a(e, u, 3, [h]);
                                        }
                                  : o.NOOP),
                        t && s)
                    ) {
                        const e = g;
                        g = () => H(e());
                    }
                    let h = (e) => {
                        p = k.onStop = () => {
                            r(e, u, 4);
                        };
                    };
                    if (un) return (h = o.NOOP), t ? n && a(t, u, 3, [g(), m ? [] : void 0, h]) : g(), o.NOOP;
                    let b = m ? [] : U;
                    const w = () => {
                        if (k.active)
                            if (t) {
                                const e = k.run();
                                (s || f || (m ? e.some((e, t) => (0, o.hasChanged)(e, b[t])) : (0, o.hasChanged)(e, b))) && (p && p(), a(t, u, 3, [e, b === U ? void 0 : b, h]), (b = e));
                            } else k.run();
                    };
                    let v;
                    (w.allowRecurse = !!t), "sync" === c ? (v = w) : "post" === c ? (v = () => ft(w, u && u.suspense)) : ((w.pre = !0), u && (w.id = u.uid), (v = () => y(w)));
                    const k = new i.qq(g, v);
                    return (
                        t ? (n ? w() : (b = k.run())) : "post" === c ? ft(k.run.bind(k), u && u.suspense) : k.run(),
                        () => {
                            k.stop(), u && u.scope && (0, o.remove)(u.scope.effects, k);
                        }
                    );
                }
                function W(e, t, n) {
                    const i = this.proxy,
                        r = (0, o.isString)(e) ? (e.includes(".") ? G(i, e) : () => i[e]) : e.bind(i, i);
                    let a;
                    (0, o.isFunction)(t) ? (a = t) : ((a = t.handler), (n = t));
                    const s = on;
                    an(this);
                    const c = J(r, a.bind(i), n);
                    return s ? an(s) : sn(), c;
                }
                function G(e, t) {
                    const n = t.split(".");
                    return () => {
                        let t = e;
                        for (let e = 0; e < n.length && t; e++) t = t[n[e]];
                        return t;
                    };
                }
                function H(e, t) {
                    if (!(0, o.isObject)(e) || e.__v_skip) return e;
                    if ((t = t || new Set()).has(e)) return e;
                    if ((t.add(e), (0, i.dq)(e))) H(e.value, t);
                    else if ((0, o.isArray)(e)) for (let n = 0; n < e.length; n++) H(e[n], t);
                    else if ((0, o.isSet)(e) || (0, o.isMap)(e))
                        e.forEach((e) => {
                            H(e, t);
                        });
                    else if ((0, o.isPlainObject)(e)) for (const n in e) H(e[n], t);
                    return e;
                }
                function K() {
                    const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
                    return (
                        ye(() => {
                            e.isMounted = !0;
                        }),
                        ke(() => {
                            e.isUnmounting = !0;
                        }),
                        e
                    );
                }
                const X = [Function, Array],
                    Z = {
                        name: "BaseTransition",
                        props: {
                            mode: String,
                            appear: Boolean,
                            persisted: Boolean,
                            onBeforeEnter: X,
                            onEnter: X,
                            onAfterEnter: X,
                            onEnterCancelled: X,
                            onBeforeLeave: X,
                            onLeave: X,
                            onAfterLeave: X,
                            onLeaveCancelled: X,
                            onBeforeAppear: X,
                            onAppear: X,
                            onAfterAppear: X,
                            onAppearCancelled: X,
                        },
                        setup(e, { slots: t }) {
                            const n = rn(),
                                o = K();
                            let r;
                            return () => {
                                const a = t.default && oe(t.default(), !0);
                                if (!a || !a.length) return;
                                let s = a[0];
                                if (a.length > 1) {
                                    let e = !1;
                                    for (const t of a)
                                        if (t.type !== It) {
                                            0, (s = t), (e = !0);
                                            break;
                                        }
                                }
                                const c = (0, i.IU)(e),
                                    { mode: l } = c;
                                if (o.isLeaving) return te(s);
                                const d = ne(s);
                                if (!d) return te(s);
                                const u = ee(d, c, o, n);
                                ie(d, u);
                                const g = n.subTree,
                                    p = g && ne(g);
                                let f = !1;
                                const { getTransitionKey: m } = d.type;
                                if (m) {
                                    const e = m();
                                    void 0 === r ? (r = e) : e !== r && ((r = e), (f = !0));
                                }
                                if (p && p.type !== It && (!Lt(d, p) || f)) {
                                    const e = ee(p, c, o, n);
                                    if ((ie(p, e), "out-in" === l))
                                        return (
                                            (o.isLeaving = !0),
                                            (e.afterLeave = () => {
                                                (o.isLeaving = !1), n.update();
                                            }),
                                            te(s)
                                        );
                                    "in-out" === l &&
                                        d.type !== It &&
                                        (e.delayLeave = (e, t, n) => {
                                            ($(o, p)[String(p.key)] = p),
                                                (e._leaveCb = () => {
                                                    t(), (e._leaveCb = void 0), delete u.delayedLeave;
                                                }),
                                                (u.delayedLeave = n);
                                        });
                                }
                                return s;
                            };
                        },
                    };
                function $(e, t) {
                    const { leavingVNodes: n } = e;
                    let i = n.get(t.type);
                    return i || ((i = Object.create(null)), n.set(t.type, i)), i;
                }
                function ee(e, t, n, i) {
                    const {
                            appear: r,
                            mode: s,
                            persisted: c = !1,
                            onBeforeEnter: l,
                            onEnter: d,
                            onAfterEnter: u,
                            onEnterCancelled: g,
                            onBeforeLeave: p,
                            onLeave: f,
                            onAfterLeave: m,
                            onLeaveCancelled: h,
                            onBeforeAppear: b,
                            onAppear: y,
                            onAfterAppear: w,
                            onAppearCancelled: v,
                        } = t,
                        k = String(e.key),
                        C = $(n, e),
                        A = (e, t) => {
                            e && a(e, i, 9, t);
                        },
                        x = (e, t) => {
                            const n = t[1];
                            A(e, t), (0, o.isArray)(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
                        },
                        T = {
                            mode: s,
                            persisted: c,
                            beforeEnter(t) {
                                let i = l;
                                if (!n.isMounted) {
                                    if (!r) return;
                                    i = b || l;
                                }
                                t._leaveCb && t._leaveCb(!0);
                                const o = C[k];
                                o && Lt(e, o) && o.el._leaveCb && o.el._leaveCb(), A(i, [t]);
                            },
                            enter(e) {
                                let t = d,
                                    i = u,
                                    o = g;
                                if (!n.isMounted) {
                                    if (!r) return;
                                    (t = y || d), (i = w || u), (o = v || g);
                                }
                                let a = !1;
                                const s = (e._enterCb = (t) => {
                                    a || ((a = !0), A(t ? o : i, [e]), T.delayedLeave && T.delayedLeave(), (e._enterCb = void 0));
                                });
                                t ? x(t, [e, s]) : s();
                            },
                            leave(t, i) {
                                const o = String(e.key);
                                if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return i();
                                A(p, [t]);
                                let r = !1;
                                const a = (t._leaveCb = (n) => {
                                    r || ((r = !0), i(), A(n ? h : m, [t]), (t._leaveCb = void 0), C[o] === e && delete C[o]);
                                });
                                (C[o] = e), f ? x(f, [t, a]) : a();
                            },
                            clone: (e) => ee(e, t, n, i),
                        };
                    return T;
                }
                function te(e) {
                    if (se(e)) return ((e = Jt(e)).children = null), e;
                }
                function ne(e) {
                    return se(e) ? (e.children ? e.children[0] : void 0) : e;
                }
                function ie(e, t) {
                    6 & e.shapeFlag && e.component ? ie(e.component.subTree, t) : 128 & e.shapeFlag ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback))) : (e.transition = t);
                }
                function oe(e, t = !1, n) {
                    let i = [],
                        o = 0;
                    for (let r = 0; r < e.length; r++) {
                        let a = e[r];
                        const s = null == n ? a.key : String(n) + String(null != a.key ? a.key : r);
                        a.type === xt ? (128 & a.patchFlag && o++, (i = i.concat(oe(a.children, t, s)))) : (t || a.type !== It) && i.push(null != s ? Jt(a, { key: s }) : a);
                    }
                    if (o > 1) for (let e = 0; e < i.length; e++) i[e].patchFlag = -2;
                    return i;
                }
                function re(e) {
                    return (0, o.isFunction)(e) ? { setup: e, name: e.name } : e;
                }
                const ae = (e) => !!e.type.__asyncLoader;
                const se = (e) => e.type.__isKeepAlive;
                RegExp, RegExp;
                function ce(e, t) {
                    return (0, o.isArray)(e) ? e.some((e) => ce(e, t)) : (0, o.isString)(e) ? e.split(",").includes(t) : !!e.test && e.test(t);
                }
                function le(e, t) {
                    ue(e, "a", t);
                }
                function de(e, t) {
                    ue(e, "da", t);
                }
                function ue(e, t, n = on) {
                    const i =
                        e.__wdc ||
                        (e.__wdc = () => {
                            let t = n;
                            for (; t; ) {
                                if (t.isDeactivated) return;
                                t = t.parent;
                            }
                            return e();
                        });
                    if ((me(t, i, n), n)) {
                        let e = n.parent;
                        for (; e && e.parent; ) se(e.parent.vnode) && ge(i, t, n, e), (e = e.parent);
                    }
                }
                function ge(e, t, n, i) {
                    const r = me(t, e, i, !0);
                    Ce(() => {
                        (0, o.remove)(i[t], r);
                    }, n);
                }
                function pe(e) {
                    let t = e.shapeFlag;
                    256 & t && (t -= 256), 512 & t && (t -= 512), (e.shapeFlag = t);
                }
                function fe(e) {
                    return 128 & e.shapeFlag ? e.ssContent : e;
                }
                function me(e, t, n = on, o = !1) {
                    if (n) {
                        const r = n[e] || (n[e] = []),
                            s =
                                t.__weh ||
                                (t.__weh = (...o) => {
                                    if (n.isUnmounted) return;
                                    (0, i.Jd)(), an(n);
                                    const r = a(t, n, e, o);
                                    return sn(), (0, i.lk)(), r;
                                });
                        return o ? r.unshift(s) : r.push(s), s;
                    }
                }
                const he = (e) => (t, n = on) => (!un || "sp" === e) && me(e, (...e) => t(...e), n),
                    be = he("bm"),
                    ye = he("m"),
                    we = he("bu"),
                    ve = he("u"),
                    ke = he("bum"),
                    Ce = he("um"),
                    Ae = he("sp"),
                    xe = he("rtg"),
                    Te = he("rtc");
                function Ie(e, t = on) {
                    me("ec", e, t);
                }
                function je(e, t) {
                    const n = O;
                    if (null === n) return e;
                    const i = hn(n) || n.proxy,
                        r = e.dirs || (e.dirs = []);
                    for (let e = 0; e < t.length; e++) {
                        let [n, a, s, c = o.EMPTY_OBJ] = t[e];
                        (0, o.isFunction)(n) && (n = { mounted: n, updated: n }), n.deep && H(a), r.push({ dir: n, instance: i, value: a, oldValue: void 0, arg: s, modifiers: c });
                    }
                    return e;
                }
                function _e(e, t, n, o) {
                    const r = e.dirs,
                        s = t && t.dirs;
                    for (let c = 0; c < r.length; c++) {
                        const l = r[c];
                        s && (l.oldValue = s[c].value);
                        let d = l.dir[o];
                        d && ((0, i.Jd)(), a(d, n, 8, [e.el, l, e, t]), (0, i.lk)());
                    }
                }
                const Oe = "components";
                function Ee(e, t) {
                    return Fe(Oe, e, !0, t) || e;
                }
                const Se = Symbol();
                function Be(e) {
                    return (0, o.isString)(e) ? Fe(Oe, e, !1) || e : e || Se;
                }
                function Fe(e, t, n = !0, i = !1) {
                    const r = O || on;
                    if (r) {
                        const n = r.type;
                        if (e === Oe) {
                            const e = bn(n, !1);
                            if (e && (e === t || e === (0, o.camelize)(t) || e === (0, o.capitalize)((0, o.camelize)(t)))) return n;
                        }
                        const a = Me(r[e] || n[e], t) || Me(r.appContext[e], t);
                        return !a && i ? n : a;
                    }
                }
                function Me(e, t) {
                    return e && (e[t] || e[(0, o.camelize)(t)] || e[(0, o.capitalize)((0, o.camelize)(t))]);
                }
                function Pe(e, t, n, i) {
                    let r;
                    const a = n && n[i];
                    if ((0, o.isArray)(e) || (0, o.isString)(e)) {
                        r = new Array(e.length);
                        for (let n = 0, i = e.length; n < i; n++) r[n] = t(e[n], n, void 0, a && a[n]);
                    } else if ("number" == typeof e) {
                        0, (r = new Array(e));
                        for (let n = 0; n < e; n++) r[n] = t(n + 1, n, void 0, a && a[n]);
                    } else if ((0, o.isObject)(e))
                        if (e[Symbol.iterator]) r = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
                        else {
                            const n = Object.keys(e);
                            r = new Array(n.length);
                            for (let i = 0, o = n.length; i < o; i++) {
                                const o = n[i];
                                r[i] = t(e[o], o, i, a && a[i]);
                            }
                        }
                    else r = [];
                    return n && (n[i] = r), r;
                }
                function ze(e, t, n = {}, i, o) {
                    if (O.isCE || (O.parent && ae(O.parent) && O.parent.isCE)) return Yt("slot", "default" === t ? null : { name: t }, i && i());
                    let r = e[t];
                    r && r._c && (r._d = !1), Et();
                    const a = r && De(r(n)),
                        s = zt(xt, { key: n.key || (a && a.key) || `_${t}` }, a || (i ? i() : []), a && 1 === e._ ? 64 : -2);
                    return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), r && r._c && (r._d = !0), s;
                }
                function De(e) {
                    return e.some((e) => !Dt(e) || (e.type !== It && !(e.type === xt && !De(e.children)))) ? e : null;
                }
                const Le = (e) => (e ? (cn(e) ? hn(e) || e.proxy : Le(e.parent)) : null),
                    qe = (0, o.extend)(Object.create(null), {
                        $: (e) => e,
                        $el: (e) => e.vnode.el,
                        $data: (e) => e.data,
                        $props: (e) => e.props,
                        $attrs: (e) => e.attrs,
                        $slots: (e) => e.slots,
                        $refs: (e) => e.refs,
                        $parent: (e) => Le(e.parent),
                        $root: (e) => Le(e.root),
                        $emit: (e) => e.emit,
                        $options: (e) => Ve(e),
                        $forceUpdate: (e) => e.f || (e.f = () => y(e.update)),
                        $nextTick: (e) => e.n || (e.n = b.bind(e.proxy)),
                        $watch: (e) => W.bind(e),
                    }),
                    Qe = {
                        get({ _: e }, t) {
                            const { ctx: n, setupState: r, data: a, props: s, accessCache: c, type: l, appContext: d } = e;
                            let u;
                            if ("$" !== t[0]) {
                                const i = c[t];
                                if (void 0 !== i)
                                    switch (i) {
                                        case 1:
                                            return r[t];
                                        case 2:
                                            return a[t];
                                        case 4:
                                            return n[t];
                                        case 3:
                                            return s[t];
                                    }
                                else {
                                    if (r !== o.EMPTY_OBJ && (0, o.hasOwn)(r, t)) return (c[t] = 1), r[t];
                                    if (a !== o.EMPTY_OBJ && (0, o.hasOwn)(a, t)) return (c[t] = 2), a[t];
                                    if ((u = e.propsOptions[0]) && (0, o.hasOwn)(u, t)) return (c[t] = 3), s[t];
                                    if (n !== o.EMPTY_OBJ && (0, o.hasOwn)(n, t)) return (c[t] = 4), n[t];
                                    Ne && (c[t] = 0);
                                }
                            }
                            const g = qe[t];
                            let p, f;
                            return g
                                ? ("$attrs" === t && (0, i.j)(e, "get", t), g(e))
                                : (p = l.__cssModules) && (p = p[t])
                                ? p
                                : n !== o.EMPTY_OBJ && (0, o.hasOwn)(n, t)
                                ? ((c[t] = 4), n[t])
                                : ((f = d.config.globalProperties), (0, o.hasOwn)(f, t) ? f[t] : void 0);
                        },
                        set({ _: e }, t, n) {
                            const { data: i, setupState: r, ctx: a } = e;
                            return r !== o.EMPTY_OBJ && (0, o.hasOwn)(r, t)
                                ? ((r[t] = n), !0)
                                : i !== o.EMPTY_OBJ && (0, o.hasOwn)(i, t)
                                ? ((i[t] = n), !0)
                                : !(0, o.hasOwn)(e.props, t) && ("$" !== t[0] || !(t.slice(1) in e)) && ((a[t] = n), !0);
                        },
                        has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, propsOptions: a } }, s) {
                            let c;
                            return (
                                !!n[s] ||
                                (e !== o.EMPTY_OBJ && (0, o.hasOwn)(e, s)) ||
                                (t !== o.EMPTY_OBJ && (0, o.hasOwn)(t, s)) ||
                                ((c = a[0]) && (0, o.hasOwn)(c, s)) ||
                                (0, o.hasOwn)(i, s) ||
                                (0, o.hasOwn)(qe, s) ||
                                (0, o.hasOwn)(r.config.globalProperties, s)
                            );
                        },
                        defineProperty(e, t, n) {
                            return null != n.get ? (e._.accessCache[t] = 0) : (0, o.hasOwn)(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
                        },
                    };
                let Ne = !0;
                function Re(e) {
                    const t = Ve(e),
                        n = e.proxy,
                        r = e.ctx;
                    (Ne = !1), t.beforeCreate && Ye(t.beforeCreate, e, "bc");
                    const {
                        data: a,
                        computed: s,
                        methods: c,
                        watch: l,
                        provide: d,
                        inject: u,
                        created: g,
                        beforeMount: p,
                        mounted: f,
                        beforeUpdate: m,
                        updated: h,
                        activated: b,
                        deactivated: y,
                        beforeDestroy: w,
                        beforeUnmount: v,
                        destroyed: k,
                        unmounted: C,
                        render: A,
                        renderTracked: x,
                        renderTriggered: T,
                        errorCaptured: I,
                        serverPrefetch: j,
                        expose: _,
                        inheritAttrs: O,
                        components: E,
                        directives: S,
                        filters: B,
                    } = t;
                    if (
                        (u &&
                            (function (e, t, n = o.NOOP, r = !1) {
                                (0, o.isArray)(e) && (e = He(e));
                                for (const n in e) {
                                    const a = e[n];
                                    let s;
                                    (s = (0, o.isObject)(a) ? ("default" in a ? Y(a.from || n, a.default, !0) : Y(a.from || n)) : Y(a)),
                                        (0, i.dq)(s) && r ? Object.defineProperty(t, n, { enumerable: !0, configurable: !0, get: () => s.value, set: (e) => (s.value = e) }) : (t[n] = s);
                                }
                            })(u, r, null, e.appContext.config.unwrapInjectedRef),
                        c)
                    )
                        for (const e in c) {
                            const t = c[e];
                            (0, o.isFunction)(t) && (r[e] = t.bind(n));
                        }
                    if (a) {
                        0;
                        const t = a.call(n, n);
                        0, (0, o.isObject)(t) && (e.data = (0, i.qj)(t));
                    }
                    if (((Ne = !0), s))
                        for (const e in s) {
                            const t = s[e],
                                i = (0, o.isFunction)(t) ? t.bind(n, n) : (0, o.isFunction)(t.get) ? t.get.bind(n, n) : o.NOOP;
                            0;
                            const a = !(0, o.isFunction)(t) && (0, o.isFunction)(t.set) ? t.set.bind(n) : o.NOOP,
                                c = wn({ get: i, set: a });
                            Object.defineProperty(r, e, { enumerable: !0, configurable: !0, get: () => c.value, set: (e) => (c.value = e) });
                        }
                    if (l) for (const e in l) Ue(l[e], r, n, e);
                    if (d) {
                        const e = (0, o.isFunction)(d) ? d.call(n) : d;
                        Reflect.ownKeys(e).forEach((t) => {
                            R(t, e[t]);
                        });
                    }
                    function F(e, t) {
                        (0, o.isArray)(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
                    }
                    if ((g && Ye(g, e, "c"), F(be, p), F(ye, f), F(we, m), F(ve, h), F(le, b), F(de, y), F(Ie, I), F(Te, x), F(xe, T), F(ke, v), F(Ce, C), F(Ae, j), (0, o.isArray)(_)))
                        if (_.length) {
                            const t = e.exposed || (e.exposed = {});
                            _.forEach((e) => {
                                Object.defineProperty(t, e, { get: () => n[e], set: (t) => (n[e] = t) });
                            });
                        } else e.exposed || (e.exposed = {});
                    A && e.render === o.NOOP && (e.render = A), null != O && (e.inheritAttrs = O), E && (e.components = E), S && (e.directives = S);
                }
                function Ye(e, t, n) {
                    a((0, o.isArray)(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
                }
                function Ue(e, t, n, i) {
                    const r = i.includes(".") ? G(n, i) : () => n[i];
                    if ((0, o.isString)(e)) {
                        const n = t[e];
                        (0, o.isFunction)(n) && V(r, n);
                    } else if ((0, o.isFunction)(e)) V(r, e.bind(n));
                    else if ((0, o.isObject)(e))
                        if ((0, o.isArray)(e)) e.forEach((e) => Ue(e, t, n, i));
                        else {
                            const i = (0, o.isFunction)(e.handler) ? e.handler.bind(n) : t[e.handler];
                            (0, o.isFunction)(i) && V(r, i, e);
                        }
                    else 0;
                }
                function Ve(e) {
                    const t = e.type,
                        { mixins: n, extends: i } = t,
                        {
                            mixins: r,
                            optionsCache: a,
                            config: { optionMergeStrategies: s },
                        } = e.appContext,
                        c = a.get(t);
                    let l;
                    return c ? (l = c) : r.length || n || i ? ((l = {}), r.length && r.forEach((e) => Je(l, e, s, !0)), Je(l, t, s)) : (l = t), (0, o.isObject)(t) && a.set(t, l), l;
                }
                function Je(e, t, n, i = !1) {
                    const { mixins: o, extends: r } = t;
                    r && Je(e, r, n, !0), o && o.forEach((t) => Je(e, t, n, !0));
                    for (const o in t)
                        if (i && "expose" === o);
                        else {
                            const i = We[o] || (n && n[o]);
                            e[o] = i ? i(e[o], t[o]) : t[o];
                        }
                    return e;
                }
                const We = {
                    data: Ge,
                    props: Xe,
                    emits: Xe,
                    methods: Xe,
                    computed: Xe,
                    beforeCreate: Ke,
                    created: Ke,
                    beforeMount: Ke,
                    mounted: Ke,
                    beforeUpdate: Ke,
                    updated: Ke,
                    beforeDestroy: Ke,
                    beforeUnmount: Ke,
                    destroyed: Ke,
                    unmounted: Ke,
                    activated: Ke,
                    deactivated: Ke,
                    errorCaptured: Ke,
                    serverPrefetch: Ke,
                    components: Xe,
                    directives: Xe,
                    watch: function (e, t) {
                        if (!e) return t;
                        if (!t) return e;
                        const n = (0, o.extend)(Object.create(null), e);
                        for (const i in t) n[i] = Ke(e[i], t[i]);
                        return n;
                    },
                    provide: Ge,
                    inject: function (e, t) {
                        return Xe(He(e), He(t));
                    },
                };
                function Ge(e, t) {
                    return t
                        ? e
                            ? function () {
                                  return (0, o.extend)((0, o.isFunction)(e) ? e.call(this, this) : e, (0, o.isFunction)(t) ? t.call(this, this) : t);
                              }
                            : t
                        : e;
                }
                function He(e) {
                    if ((0, o.isArray)(e)) {
                        const t = {};
                        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
                        return t;
                    }
                    return e;
                }
                function Ke(e, t) {
                    return e ? [...new Set([].concat(e, t))] : t;
                }
                function Xe(e, t) {
                    return e ? (0, o.extend)((0, o.extend)(Object.create(null), e), t) : t;
                }
                function Ze(e, t, n, r) {
                    const [a, s] = e.propsOptions;
                    let c,
                        l = !1;
                    if (t)
                        for (let i in t) {
                            if ((0, o.isReservedProp)(i)) continue;
                            const d = t[i];
                            let u;
                            a && (0, o.hasOwn)(a, (u = (0, o.camelize)(i))) ? (s && s.includes(u) ? ((c || (c = {}))[u] = d) : (n[u] = d)) : _(e.emitsOptions, i) || (i in r && d === r[i]) || ((r[i] = d), (l = !0));
                        }
                    if (s) {
                        const t = (0, i.IU)(n),
                            r = c || o.EMPTY_OBJ;
                        for (let i = 0; i < s.length; i++) {
                            const c = s[i];
                            n[c] = $e(a, t, c, r[c], e, !(0, o.hasOwn)(r, c));
                        }
                    }
                    return l;
                }
                function $e(e, t, n, i, r, a) {
                    const s = e[n];
                    if (null != s) {
                        const e = (0, o.hasOwn)(s, "default");
                        if (e && void 0 === i) {
                            const e = s.default;
                            if (s.type !== Function && (0, o.isFunction)(e)) {
                                const { propsDefaults: o } = r;
                                n in o ? (i = o[n]) : (an(r), (i = o[n] = e.call(null, t)), sn());
                            } else i = e;
                        }
                        s[0] && (a && !e ? (i = !1) : !s[1] || ("" !== i && i !== (0, o.hyphenate)(n)) || (i = !0));
                    }
                    return i;
                }
                function et(e, t, n = !1) {
                    const i = t.propsCache,
                        r = i.get(e);
                    if (r) return r;
                    const a = e.props,
                        s = {},
                        c = [];
                    let l = !1;
                    if (!(0, o.isFunction)(e)) {
                        const i = (e) => {
                            l = !0;
                            const [n, i] = et(e, t, !0);
                            (0, o.extend)(s, n), i && c.push(...i);
                        };
                        !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
                    }
                    if (!a && !l) return (0, o.isObject)(e) && i.set(e, o.EMPTY_ARR), o.EMPTY_ARR;
                    if ((0, o.isArray)(a))
                        for (let e = 0; e < a.length; e++) {
                            0;
                            const t = (0, o.camelize)(a[e]);
                            tt(t) && (s[t] = o.EMPTY_OBJ);
                        }
                    else if (a) {
                        0;
                        for (const e in a) {
                            const t = (0, o.camelize)(e);
                            if (tt(t)) {
                                const n = a[e],
                                    i = (s[t] = (0, o.isArray)(n) || (0, o.isFunction)(n) ? { type: n } : n);
                                if (i) {
                                    const e = ot(Boolean, i.type),
                                        n = ot(String, i.type);
                                    (i[0] = e > -1), (i[1] = n < 0 || e < n), (e > -1 || (0, o.hasOwn)(i, "default")) && c.push(t);
                                }
                            }
                        }
                    }
                    const d = [s, c];
                    return (0, o.isObject)(e) && i.set(e, d), d;
                }
                function tt(e) {
                    return "$" !== e[0];
                }
                function nt(e) {
                    const t = e && e.toString().match(/^\s*function (\w+)/);
                    return t ? t[1] : null === e ? "null" : "";
                }
                function it(e, t) {
                    return nt(e) === nt(t);
                }
                function ot(e, t) {
                    return (0, o.isArray)(t) ? t.findIndex((t) => it(t, e)) : (0, o.isFunction)(t) && it(t, e) ? 0 : -1;
                }
                const rt = (e) => "_" === e[0] || "$stable" === e,
                    at = (e) => ((0, o.isArray)(e) ? e.map(Ht) : [Ht(e)]),
                    st = (e, t, n) => {
                        if (t._n) return t;
                        const i = M((...e) => at(t(...e)), n);
                        return (i._c = !1), i;
                    },
                    ct = (e, t, n) => {
                        const i = e._ctx;
                        for (const n in e) {
                            if (rt(n)) continue;
                            const r = e[n];
                            if ((0, o.isFunction)(r)) t[n] = st(0, r, i);
                            else if (null != r) {
                                0;
                                const e = at(r);
                                t[n] = () => e;
                            }
                        }
                    },
                    lt = (e, t) => {
                        const n = at(t);
                        e.slots.default = () => n;
                    };
                function dt() {
                    return {
                        app: null,
                        config: { isNativeTag: o.NO, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} },
                        mixins: [],
                        components: {},
                        directives: {},
                        provides: Object.create(null),
                        optionsCache: new WeakMap(),
                        propsCache: new WeakMap(),
                        emitsCache: new WeakMap(),
                    };
                }
                let ut = 0;
                function gt(e, t) {
                    return function (n, i = null) {
                        (0, o.isFunction)(n) || (n = Object.assign({}, n)), null == i || (0, o.isObject)(i) || (i = null);
                        const r = dt(),
                            a = new Set();
                        let s = !1;
                        const c = (r.app = {
                            _uid: ut++,
                            _component: n,
                            _props: i,
                            _container: null,
                            _context: r,
                            _instance: null,
                            version: An,
                            get config() {
                                return r.config;
                            },
                            set config(e) {
                                0;
                            },
                            use: (e, ...t) => (a.has(e) || (e && (0, o.isFunction)(e.install) ? (a.add(e), e.install(c, ...t)) : (0, o.isFunction)(e) && (a.add(e), e(c, ...t))), c),
                            mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), c),
                            component: (e, t) => (t ? ((r.components[e] = t), c) : r.components[e]),
                            directive: (e, t) => (t ? ((r.directives[e] = t), c) : r.directives[e]),
                            mount(o, a, l) {
                                if (!s) {
                                    0;
                                    const d = Yt(n, i);
                                    return (d.appContext = r), a && t ? t(d, o) : e(d, o, l), (s = !0), (c._container = o), (o.__vue_app__ = c), hn(d.component) || d.component.proxy;
                                }
                            },
                            unmount() {
                                s && (e(null, c._container), delete c._container.__vue_app__);
                            },
                            provide: (e, t) => ((r.provides[e] = t), c),
                        });
                        return c;
                    };
                }
                function pt(e, t, n, a, s = !1) {
                    if ((0, o.isArray)(e)) return void e.forEach((e, i) => pt(e, t && ((0, o.isArray)(t) ? t[i] : t), n, a, s));
                    if (ae(a) && !s) return;
                    const c = 4 & a.shapeFlag ? hn(a.component) || a.component.proxy : a.el,
                        l = s ? null : c,
                        { i: d, r: u } = e;
                    const g = t && t.r,
                        p = d.refs === o.EMPTY_OBJ ? (d.refs = {}) : d.refs,
                        f = d.setupState;
                    if ((null != g && g !== u && ((0, o.isString)(g) ? ((p[g] = null), (0, o.hasOwn)(f, g) && (f[g] = null)) : (0, i.dq)(g) && (g.value = null)), (0, o.isFunction)(u))) r(u, d, 12, [l, p]);
                    else {
                        const t = (0, o.isString)(u),
                            r = (0, i.dq)(u);
                        if (t || r) {
                            const i = () => {
                                if (e.f) {
                                    const n = t ? ((0, o.hasOwn)(f, u) ? f[u] : p[u]) : u.value;
                                    s ? (0, o.isArray)(n) && (0, o.remove)(n, c) : (0, o.isArray)(n) ? n.includes(c) || n.push(c) : t ? ((p[u] = [c]), (0, o.hasOwn)(f, u) && (f[u] = p[u])) : ((u.value = [c]), e.k && (p[e.k] = u.value));
                                } else t ? ((p[u] = l), (0, o.hasOwn)(f, u) && (f[u] = l)) : r && ((u.value = l), e.k && (p[e.k] = l));
                            };
                            l ? ((i.id = -1), ft(i, n)) : i();
                        } else 0;
                    }
                }
                const ft = N;
                function mt(e) {
                    return ht(e);
                }
                function ht(e, t) {
                    (0, o.getGlobalThis)().__VUE__ = !0;
                    const { insert: n, remove: r, patchProp: a, createElement: s, createText: c, createComment: l, setText: g, setElementText: p, parentNode: f, nextSibling: m, setScopeId: h = o.NOOP, insertStaticContent: b } = e,
                        w = (e, t, n, i = null, o = null, r = null, a = !1, s = null, c = !!t.dynamicChildren) => {
                            if (e === t) return;
                            e && !Lt(e, t) && ((i = Z(e)), W(e, o, r, !0), (e = null)), -2 === t.patchFlag && ((c = !1), (t.dynamicChildren = null));
                            const { type: l, ref: d, shapeFlag: u } = t;
                            switch (l) {
                                case Tt:
                                    v(e, t, n, i);
                                    break;
                                case It:
                                    A(e, t, n, i);
                                    break;
                                case jt:
                                    null == e && x(t, n, i, a);
                                    break;
                                case xt:
                                    M(e, t, n, i, o, r, a, s, c);
                                    break;
                                default:
                                    1 & u ? I(e, t, n, i, o, r, a, s, c) : 6 & u ? z(e, t, n, i, o, r, a, s, c) : (64 & u || 128 & u) && l.process(e, t, n, i, o, r, a, s, c, ee);
                            }
                            null != d && o && pt(d, e && e.ref, r, t || e, !t);
                        },
                        v = (e, t, i, o) => {
                            if (null == e) n((t.el = c(t.children)), i, o);
                            else {
                                const n = (t.el = e.el);
                                t.children !== e.children && g(n, t.children);
                            }
                        },
                        A = (e, t, i, o) => {
                            null == e ? n((t.el = l(t.children || "")), i, o) : (t.el = e.el);
                        },
                        x = (e, t, n, i) => {
                            [e.el, e.anchor] = b(e.children, t, n, i, e.el, e.anchor);
                        },
                        T = ({ el: e, anchor: t }) => {
                            let n;
                            for (; e && e !== t; ) (n = m(e)), r(e), (e = n);
                            r(t);
                        },
                        I = (e, t, n, i, o, r, a, s, c) => {
                            (a = a || "svg" === t.type), null == e ? j(t, n, i, o, r, a, s, c) : S(e, t, o, r, a, s, c);
                        },
                        j = (e, t, i, r, c, l, d, u) => {
                            let g, f;
                            const { type: m, props: h, shapeFlag: b, transition: y, dirs: w } = e;
                            if (((g = e.el = s(e.type, l, h && h.is, h)), 8 & b ? p(g, e.children) : 16 & b && E(e.children, g, null, r, c, l && "foreignObject" !== m, d, u), w && _e(e, null, r, "created"), h)) {
                                for (const t in h) "value" === t || (0, o.isReservedProp)(t) || a(g, t, null, h[t], l, e.children, r, c, X);
                                "value" in h && a(g, "value", null, h.value), (f = h.onVnodeBeforeMount) && $t(f, r, e);
                            }
                            O(g, e, e.scopeId, d, r), w && _e(e, null, r, "beforeMount");
                            const v = (!c || (c && !c.pendingBranch)) && y && !y.persisted;
                            v && y.beforeEnter(g),
                                n(g, t, i),
                                ((f = h && h.onVnodeMounted) || v || w) &&
                                    ft(() => {
                                        f && $t(f, r, e), v && y.enter(g), w && _e(e, null, r, "mounted");
                                    }, c);
                        },
                        O = (e, t, n, i, o) => {
                            if ((n && h(e, n), i)) for (let t = 0; t < i.length; t++) h(e, i[t]);
                            if (o) {
                                if (t === o.subTree) {
                                    const t = o.vnode;
                                    O(e, t, t.scopeId, t.slotScopeIds, o.parent);
                                }
                            }
                        },
                        E = (e, t, n, i, o, r, a, s, c = 0) => {
                            for (let l = c; l < e.length; l++) {
                                const c = (e[l] = s ? Kt(e[l]) : Ht(e[l]));
                                w(null, c, t, n, i, o, r, a, s);
                            }
                        },
                        S = (e, t, n, i, r, s, c) => {
                            const l = (t.el = e.el);
                            let { patchFlag: d, dynamicChildren: u, dirs: g } = t;
                            d |= 16 & e.patchFlag;
                            const f = e.props || o.EMPTY_OBJ,
                                m = t.props || o.EMPTY_OBJ;
                            let h;
                            n && bt(n, !1), (h = m.onVnodeBeforeUpdate) && $t(h, n, t, e), g && _e(t, e, n, "beforeUpdate"), n && bt(n, !0);
                            const b = r && "foreignObject" !== t.type;
                            if ((u ? B(e.dynamicChildren, u, l, n, i, b, s) : c || Y(e, t, l, null, n, i, b, s, !1), d > 0)) {
                                if (16 & d) F(l, t, f, m, n, i, r);
                                else if ((2 & d && f.class !== m.class && a(l, "class", null, m.class, r), 4 & d && a(l, "style", f.style, m.style, r), 8 & d)) {
                                    const o = t.dynamicProps;
                                    for (let t = 0; t < o.length; t++) {
                                        const s = o[t],
                                            c = f[s],
                                            d = m[s];
                                        (d === c && "value" !== s) || a(l, s, c, d, r, e.children, n, i, X);
                                    }
                                }
                                1 & d && e.children !== t.children && p(l, t.children);
                            } else c || null != u || F(l, t, f, m, n, i, r);
                            ((h = m.onVnodeUpdated) || g) &&
                                ft(() => {
                                    h && $t(h, n, t, e), g && _e(t, e, n, "updated");
                                }, i);
                        },
                        B = (e, t, n, i, o, r, a) => {
                            for (let s = 0; s < t.length; s++) {
                                const c = e[s],
                                    l = t[s],
                                    d = c.el && (c.type === xt || !Lt(c, l) || 70 & c.shapeFlag) ? f(c.el) : n;
                                w(c, l, d, null, i, o, r, a, !0);
                            }
                        },
                        F = (e, t, n, i, r, s, c) => {
                            if (n !== i) {
                                if (n !== o.EMPTY_OBJ) for (const l in n) (0, o.isReservedProp)(l) || l in i || a(e, l, n[l], null, c, t.children, r, s, X);
                                for (const l in i) {
                                    if ((0, o.isReservedProp)(l)) continue;
                                    const d = i[l],
                                        u = n[l];
                                    d !== u && "value" !== l && a(e, l, u, d, c, t.children, r, s, X);
                                }
                                "value" in i && a(e, "value", n.value, i.value);
                            }
                        },
                        M = (e, t, i, o, r, a, s, l, d) => {
                            const u = (t.el = e ? e.el : c("")),
                                g = (t.anchor = e ? e.anchor : c(""));
                            let { patchFlag: p, dynamicChildren: f, slotScopeIds: m } = t;
                            m && (l = l ? l.concat(m) : m),
                                null == e
                                    ? (n(u, i, o), n(g, i, o), E(t.children, i, g, r, a, s, l, d))
                                    : p > 0 && 64 & p && f && e.dynamicChildren
                                    ? (B(e.dynamicChildren, f, i, r, a, s, l), (null != t.key || (r && t === r.subTree)) && yt(e, t, !0))
                                    : Y(e, t, i, g, r, a, s, l, d);
                        },
                        z = (e, t, n, i, o, r, a, s, c) => {
                            (t.slotScopeIds = s), null == e ? (512 & t.shapeFlag ? o.ctx.activate(t, n, i, a, c) : D(t, n, i, o, r, a, c)) : Q(e, t, c);
                        },
                        D = (e, t, n, i, o, r, a) => {
                            const s = (e.component = nn(e, i, o));
                            if ((se(e) && (s.ctx.renderer = ee), gn(s), s.asyncDep)) {
                                if ((o && o.registerDep(s, N), !e.el)) {
                                    const e = (s.subTree = Yt(It));
                                    A(null, e, t, n);
                                }
                            } else N(s, e, t, n, o, r, a);
                        },
                        Q = (e, t, n) => {
                            const i = (t.component = e.component);
                            if (
                                (function (e, t, n) {
                                    const { props: i, children: o, component: r } = e,
                                        { props: a, children: s, patchFlag: c } = t,
                                        l = r.emitsOptions;
                                    if (t.dirs || t.transition) return !0;
                                    if (!(n && c >= 0)) return !((!o && !s) || (s && s.$stable)) || (i !== a && (i ? !a || L(i, a, l) : !!a));
                                    if (1024 & c) return !0;
                                    if (16 & c) return i ? L(i, a, l) : !!a;
                                    if (8 & c) {
                                        const e = t.dynamicProps;
                                        for (let t = 0; t < e.length; t++) {
                                            const n = e[t];
                                            if (a[n] !== i[n] && !_(l, n)) return !0;
                                        }
                                    }
                                    return !1;
                                })(e, t, n)
                            ) {
                                if (i.asyncDep && !i.asyncResolved) return void R(i, t, n);
                                (i.next = t),
                                    (function (e) {
                                        const t = d.indexOf(e);
                                        t > u && d.splice(t, 1);
                                    })(i.update),
                                    i.update();
                            } else (t.el = e.el), (i.vnode = t);
                        },
                        N = (e, t, n, r, a, s, c) => {
                            const l = (e.effect = new i.qq(
                                    () => {
                                        if (e.isMounted) {
                                            let t,
                                                { next: n, bu: i, u: r, parent: l, vnode: d } = e,
                                                u = n;
                                            0, bt(e, !1), n ? ((n.el = d.el), R(e, n, c)) : (n = d), i && (0, o.invokeArrayFns)(i), (t = n.props && n.props.onVnodeBeforeUpdate) && $t(t, l, n, d), bt(e, !0);
                                            const g = P(e);
                                            0;
                                            const p = e.subTree;
                                            (e.subTree = g), w(p, g, f(p.el), Z(p), e, a, s), (n.el = g.el), null === u && q(e, g.el), r && ft(r, a), (t = n.props && n.props.onVnodeUpdated) && ft(() => $t(t, l, n, d), a);
                                        } else {
                                            let i;
                                            const { el: c, props: l } = t,
                                                { bm: d, m: u, parent: g } = e,
                                                p = ae(t);
                                            if ((bt(e, !1), d && (0, o.invokeArrayFns)(d), !p && (i = l && l.onVnodeBeforeMount) && $t(i, g, t), bt(e, !0), c && ne)) {
                                                const n = () => {
                                                    (e.subTree = P(e)), ne(c, e.subTree, e, a, null);
                                                };
                                                p ? t.type.__asyncLoader().then(() => !e.isUnmounted && n()) : n();
                                            } else {
                                                0;
                                                const i = (e.subTree = P(e));
                                                0, w(null, i, n, r, e, a, s), (t.el = i.el);
                                            }
                                            if ((u && ft(u, a), !p && (i = l && l.onVnodeMounted))) {
                                                const e = t;
                                                ft(() => $t(i, g, e), a);
                                            }
                                            (256 & t.shapeFlag || (g && ae(g.vnode) && 256 & g.vnode.shapeFlag)) && e.a && ft(e.a, a), (e.isMounted = !0), (t = n = r = null);
                                        }
                                    },
                                    () => y(d),
                                    e.scope
                                )),
                                d = (e.update = () => l.run());
                            (d.id = e.uid), bt(e, !0), d();
                        },
                        R = (e, t, n) => {
                            t.component = e;
                            const r = e.vnode.props;
                            (e.vnode = t),
                                (e.next = null),
                                (function (e, t, n, r) {
                                    const {
                                            props: a,
                                            attrs: s,
                                            vnode: { patchFlag: c },
                                        } = e,
                                        l = (0, i.IU)(a),
                                        [d] = e.propsOptions;
                                    let u = !1;
                                    if (!(r || c > 0) || 16 & c) {
                                        let i;
                                        Ze(e, t, a, s) && (u = !0);
                                        for (const r in l)
                                            (t && ((0, o.hasOwn)(t, r) || ((i = (0, o.hyphenate)(r)) !== r && (0, o.hasOwn)(t, i)))) || (d ? !n || (void 0 === n[r] && void 0 === n[i]) || (a[r] = $e(d, l, r, void 0, e, !0)) : delete a[r]);
                                        if (s !== l) for (const e in s) (t && (0, o.hasOwn)(t, e)) || (delete s[e], (u = !0));
                                    } else if (8 & c) {
                                        const n = e.vnode.dynamicProps;
                                        for (let i = 0; i < n.length; i++) {
                                            let r = n[i];
                                            if (_(e.emitsOptions, r)) continue;
                                            const c = t[r];
                                            if (d)
                                                if ((0, o.hasOwn)(s, r)) c !== s[r] && ((s[r] = c), (u = !0));
                                                else {
                                                    const t = (0, o.camelize)(r);
                                                    a[t] = $e(d, l, t, c, e, !1);
                                                }
                                            else c !== s[r] && ((s[r] = c), (u = !0));
                                        }
                                    }
                                    u && (0, i.X$)(e, "set", "$attrs");
                                })(e, t.props, r, n),
                                ((e, t, n) => {
                                    const { vnode: i, slots: r } = e;
                                    let a = !0,
                                        s = o.EMPTY_OBJ;
                                    if (32 & i.shapeFlag) {
                                        const e = t._;
                                        e ? (n && 1 === e ? (a = !1) : ((0, o.extend)(r, t), n || 1 !== e || delete r._)) : ((a = !t.$stable), ct(t, r)), (s = t);
                                    } else t && (lt(e, t), (s = { default: 1 }));
                                    if (a) for (const e in r) rt(e) || e in s || delete r[e];
                                })(e, t.children, n),
                                (0, i.Jd)(),
                                k(),
                                (0, i.lk)();
                        },
                        Y = (e, t, n, i, o, r, a, s, c = !1) => {
                            const l = e && e.children,
                                d = e ? e.shapeFlag : 0,
                                u = t.children,
                                { patchFlag: g, shapeFlag: f } = t;
                            if (g > 0) {
                                if (128 & g) return void V(l, u, n, i, o, r, a, s, c);
                                if (256 & g) return void U(l, u, n, i, o, r, a, s, c);
                            }
                            8 & f ? (16 & d && X(l, o, r), u !== l && p(n, u)) : 16 & d ? (16 & f ? V(l, u, n, i, o, r, a, s, c) : X(l, o, r, !0)) : (8 & d && p(n, ""), 16 & f && E(u, n, i, o, r, a, s, c));
                        },
                        U = (e, t, n, i, r, a, s, c, l) => {
                            (e = e || o.EMPTY_ARR), (t = t || o.EMPTY_ARR);
                            const d = e.length,
                                u = t.length,
                                g = Math.min(d, u);
                            let p;
                            for (p = 0; p < g; p++) {
                                const i = (t[p] = l ? Kt(t[p]) : Ht(t[p]));
                                w(e[p], i, n, null, r, a, s, c, l);
                            }
                            d > u ? X(e, r, a, !0, !1, g) : E(t, n, i, r, a, s, c, l, g);
                        },
                        V = (e, t, n, i, r, a, s, c, l) => {
                            let d = 0;
                            const u = t.length;
                            let g = e.length - 1,
                                p = u - 1;
                            for (; d <= g && d <= p; ) {
                                const i = e[d],
                                    o = (t[d] = l ? Kt(t[d]) : Ht(t[d]));
                                if (!Lt(i, o)) break;
                                w(i, o, n, null, r, a, s, c, l), d++;
                            }
                            for (; d <= g && d <= p; ) {
                                const i = e[g],
                                    o = (t[p] = l ? Kt(t[p]) : Ht(t[p]));
                                if (!Lt(i, o)) break;
                                w(i, o, n, null, r, a, s, c, l), g--, p--;
                            }
                            if (d > g) {
                                if (d <= p) {
                                    const e = p + 1,
                                        o = e < u ? t[e].el : i;
                                    for (; d <= p; ) w(null, (t[d] = l ? Kt(t[d]) : Ht(t[d])), n, o, r, a, s, c, l), d++;
                                }
                            } else if (d > p) for (; d <= g; ) W(e[d], r, a, !0), d++;
                            else {
                                const f = d,
                                    m = d,
                                    h = new Map();
                                for (d = m; d <= p; d++) {
                                    const e = (t[d] = l ? Kt(t[d]) : Ht(t[d]));
                                    null != e.key && h.set(e.key, d);
                                }
                                let b,
                                    y = 0;
                                const v = p - m + 1;
                                let k = !1,
                                    C = 0;
                                const A = new Array(v);
                                for (d = 0; d < v; d++) A[d] = 0;
                                for (d = f; d <= g; d++) {
                                    const i = e[d];
                                    if (y >= v) {
                                        W(i, r, a, !0);
                                        continue;
                                    }
                                    let o;
                                    if (null != i.key) o = h.get(i.key);
                                    else
                                        for (b = m; b <= p; b++)
                                            if (0 === A[b - m] && Lt(i, t[b])) {
                                                o = b;
                                                break;
                                            }
                                    void 0 === o ? W(i, r, a, !0) : ((A[o - m] = d + 1), o >= C ? (C = o) : (k = !0), w(i, t[o], n, null, r, a, s, c, l), y++);
                                }
                                const x = k
                                    ? (function (e) {
                                          const t = e.slice(),
                                              n = [0];
                                          let i, o, r, a, s;
                                          const c = e.length;
                                          for (i = 0; i < c; i++) {
                                              const c = e[i];
                                              if (0 !== c) {
                                                  if (((o = n[n.length - 1]), e[o] < c)) {
                                                      (t[i] = o), n.push(i);
                                                      continue;
                                                  }
                                                  for (r = 0, a = n.length - 1; r < a; ) (s = (r + a) >> 1), e[n[s]] < c ? (r = s + 1) : (a = s);
                                                  c < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), (n[r] = i));
                                              }
                                          }
                                          (r = n.length), (a = n[r - 1]);
                                          for (; r-- > 0; ) (n[r] = a), (a = t[a]);
                                          return n;
                                      })(A)
                                    : o.EMPTY_ARR;
                                for (b = x.length - 1, d = v - 1; d >= 0; d--) {
                                    const e = m + d,
                                        o = t[e],
                                        g = e + 1 < u ? t[e + 1].el : i;
                                    0 === A[d] ? w(null, o, n, g, r, a, s, c, l) : k && (b < 0 || d !== x[b] ? J(o, n, g, 2) : b--);
                                }
                            }
                        },
                        J = (e, t, i, o, r = null) => {
                            const { el: a, type: s, transition: c, children: l, shapeFlag: d } = e;
                            if (6 & d) return void J(e.component.subTree, t, i, o);
                            if (128 & d) return void e.suspense.move(t, i, o);
                            if (64 & d) return void s.move(e, t, i, ee);
                            if (s === xt) {
                                n(a, t, i);
                                for (let e = 0; e < l.length; e++) J(l[e], t, i, o);
                                return void n(e.anchor, t, i);
                            }
                            if (s === jt)
                                return void (({ el: e, anchor: t }, i, o) => {
                                    let r;
                                    for (; e && e !== t; ) (r = m(e)), n(e, i, o), (e = r);
                                    n(t, i, o);
                                })(e, t, i);
                            if (2 !== o && 1 & d && c)
                                if (0 === o) c.beforeEnter(a), n(a, t, i), ft(() => c.enter(a), r);
                                else {
                                    const { leave: e, delayLeave: o, afterLeave: r } = c,
                                        s = () => n(a, t, i),
                                        l = () => {
                                            e(a, () => {
                                                s(), r && r();
                                            });
                                        };
                                    o ? o(a, s, l) : l();
                                }
                            else n(a, t, i);
                        },
                        W = (e, t, n, i = !1, o = !1) => {
                            const { type: r, props: a, ref: s, children: c, dynamicChildren: l, shapeFlag: d, patchFlag: u, dirs: g } = e;
                            if ((null != s && pt(s, null, n, e, !0), 256 & d)) return void t.ctx.deactivate(e);
                            const p = 1 & d && g,
                                f = !ae(e);
                            let m;
                            if ((f && (m = a && a.onVnodeBeforeUnmount) && $t(m, t, e), 6 & d)) K(e.component, n, i);
                            else {
                                if (128 & d) return void e.suspense.unmount(n, i);
                                p && _e(e, null, t, "beforeUnmount"),
                                    64 & d ? e.type.remove(e, t, n, o, ee, i) : l && (r !== xt || (u > 0 && 64 & u)) ? X(l, t, n, !1, !0) : ((r === xt && 384 & u) || (!o && 16 & d)) && X(c, t, n),
                                    i && G(e);
                            }
                            ((f && (m = a && a.onVnodeUnmounted)) || p) &&
                                ft(() => {
                                    m && $t(m, t, e), p && _e(e, null, t, "unmounted");
                                }, n);
                        },
                        G = (e) => {
                            const { type: t, el: n, anchor: i, transition: o } = e;
                            if (t === xt) return void H(n, i);
                            if (t === jt) return void T(e);
                            const a = () => {
                                r(n), o && !o.persisted && o.afterLeave && o.afterLeave();
                            };
                            if (1 & e.shapeFlag && o && !o.persisted) {
                                const { leave: t, delayLeave: i } = o,
                                    r = () => t(n, a);
                                i ? i(e.el, a, r) : r();
                            } else a();
                        },
                        H = (e, t) => {
                            let n;
                            for (; e !== t; ) (n = m(e)), r(e), (e = n);
                            r(t);
                        },
                        K = (e, t, n) => {
                            const { bum: i, scope: r, update: a, subTree: s, um: c } = e;
                            i && (0, o.invokeArrayFns)(i),
                                r.stop(),
                                a && ((a.active = !1), W(s, e, t, n)),
                                c && ft(c, t),
                                ft(() => {
                                    e.isUnmounted = !0;
                                }, t),
                                t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve());
                        },
                        X = (e, t, n, i = !1, o = !1, r = 0) => {
                            for (let a = r; a < e.length; a++) W(e[a], t, n, i, o);
                        },
                        Z = (e) => (6 & e.shapeFlag ? Z(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : m(e.anchor || e.el)),
                        $ = (e, t, n) => {
                            null == e ? t._vnode && W(t._vnode, null, null, !0) : w(t._vnode || null, e, t, null, null, null, n), k(), C(), (t._vnode = e);
                        },
                        ee = { p: w, um: W, m: J, r: G, mt: D, mc: E, pc: Y, pbc: B, n: Z, o: e };
                    let te, ne;
                    return t && ([te, ne] = t(ee)), { render: $, hydrate: te, createApp: gt($, te) };
                }
                function bt({ effect: e, update: t }, n) {
                    e.allowRecurse = t.allowRecurse = n;
                }
                function yt(e, t, n = !1) {
                    const i = e.children,
                        r = t.children;
                    if ((0, o.isArray)(i) && (0, o.isArray)(r))
                        for (let e = 0; e < i.length; e++) {
                            const t = i[e];
                            let o = r[e];
                            1 & o.shapeFlag && !o.dynamicChildren && ((o.patchFlag <= 0 || 32 === o.patchFlag) && ((o = r[e] = Kt(r[e])), (o.el = t.el)), n || yt(t, o));
                        }
                }
                const wt = (e) => e && (e.disabled || "" === e.disabled),
                    vt = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement,
                    kt = (e, t) => {
                        const n = e && e.to;
                        if ((0, o.isString)(n)) {
                            if (t) {
                                const e = t(n);
                                return e;
                            }
                            return null;
                        }
                        return n;
                    };
                function Ct(e, t, n, { o: { insert: i }, m: o }, r = 2) {
                    0 === r && i(e.targetAnchor, t, n);
                    const { el: a, anchor: s, shapeFlag: c, children: l, props: d } = e,
                        u = 2 === r;
                    if ((u && i(a, t, n), (!u || wt(d)) && 16 & c)) for (let e = 0; e < l.length; e++) o(l[e], t, n, 2);
                    u && i(s, t, n);
                }
                const At = {
                        __isTeleport: !0,
                        process(e, t, n, i, o, r, a, s, c, l) {
                            const {
                                    mc: d,
                                    pc: u,
                                    pbc: g,
                                    o: { insert: p, querySelector: f, createText: m, createComment: h },
                                } = l,
                                b = wt(t.props);
                            let { shapeFlag: y, children: w, dynamicChildren: v } = t;
                            if (null == e) {
                                const e = (t.el = m("")),
                                    l = (t.anchor = m(""));
                                p(e, n, i), p(l, n, i);
                                const u = (t.target = kt(t.props, f)),
                                    g = (t.targetAnchor = m(""));
                                u && (p(g, u), (a = a || vt(u)));
                                const h = (e, t) => {
                                    16 & y && d(w, e, t, o, r, a, s, c);
                                };
                                b ? h(n, l) : u && h(u, g);
                            } else {
                                t.el = e.el;
                                const i = (t.anchor = e.anchor),
                                    d = (t.target = e.target),
                                    p = (t.targetAnchor = e.targetAnchor),
                                    m = wt(e.props),
                                    h = m ? n : d,
                                    y = m ? i : p;
                                if (((a = a || vt(d)), v ? (g(e.dynamicChildren, v, h, o, r, a, s), yt(e, t, !0)) : c || u(e, t, h, y, o, r, a, s, !1), b)) m || Ct(t, n, i, l, 1);
                                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                                    const e = (t.target = kt(t.props, f));
                                    e && Ct(t, e, null, l, 0);
                                } else m && Ct(t, d, p, l, 1);
                            }
                        },
                        remove(e, t, n, i, { um: o, o: { remove: r } }, a) {
                            const { shapeFlag: s, children: c, anchor: l, targetAnchor: d, target: u, props: g } = e;
                            if ((u && r(d), (a || !wt(g)) && (r(l), 16 & s)))
                                for (let e = 0; e < c.length; e++) {
                                    const i = c[e];
                                    o(i, t, n, !0, !!i.dynamicChildren);
                                }
                        },
                        move: Ct,
                        hydrate: function (e, t, n, i, o, r, { o: { nextSibling: a, parentNode: s, querySelector: c } }, l) {
                            const d = (t.target = kt(t.props, c));
                            if (d) {
                                const c = d._lpa || d.firstChild;
                                if (16 & t.shapeFlag)
                                    if (wt(t.props)) (t.anchor = l(a(e), t, s(e), n, i, o, r)), (t.targetAnchor = c);
                                    else {
                                        t.anchor = a(e);
                                        let s = c;
                                        for (; s; )
                                            if (((s = a(s)), s && 8 === s.nodeType && "teleport anchor" === s.data)) {
                                                (t.targetAnchor = s), (d._lpa = t.targetAnchor && a(t.targetAnchor));
                                                break;
                                            }
                                        l(c, t, d, n, i, o, r);
                                    }
                            }
                            return t.anchor && a(t.anchor);
                        },
                    },
                    xt = Symbol(void 0),
                    Tt = Symbol(void 0),
                    It = Symbol(void 0),
                    jt = Symbol(void 0),
                    _t = [];
                let Ot = null;
                function Et(e = !1) {
                    _t.push((Ot = e ? null : []));
                }
                function St() {
                    _t.pop(), (Ot = _t[_t.length - 1] || null);
                }
                let Bt = 1;
                function Ft(e) {
                    Bt += e;
                }
                function Mt(e) {
                    return (e.dynamicChildren = Bt > 0 ? Ot || o.EMPTY_ARR : null), St(), Bt > 0 && Ot && Ot.push(e), e;
                }
                function Pt(e, t, n, i, o, r) {
                    return Mt(Rt(e, t, n, i, o, r, !0));
                }
                function zt(e, t, n, i, o) {
                    return Mt(Yt(e, t, n, i, o, !0));
                }
                function Dt(e) {
                    return !!e && !0 === e.__v_isVNode;
                }
                function Lt(e, t) {
                    return e.type === t.type && e.key === t.key;
                }
                const qt = "__vInternal",
                    Qt = ({ key: e }) => (null != e ? e : null),
                    Nt = ({ ref: e, ref_key: t, ref_for: n }) => (null != e ? ((0, o.isString)(e) || (0, i.dq)(e) || (0, o.isFunction)(e) ? { i: O, r: e, k: t, f: !!n } : e) : null);
                function Rt(e, t = null, n = null, i = 0, r = null, a = e === xt ? 0 : 1, s = !1, c = !1) {
                    const l = {
                        __v_isVNode: !0,
                        __v_skip: !0,
                        type: e,
                        props: t,
                        key: t && Qt(t),
                        ref: t && Nt(t),
                        scopeId: E,
                        slotScopeIds: null,
                        children: n,
                        component: null,
                        suspense: null,
                        ssContent: null,
                        ssFallback: null,
                        dirs: null,
                        transition: null,
                        el: null,
                        anchor: null,
                        target: null,
                        targetAnchor: null,
                        staticCount: 0,
                        shapeFlag: a,
                        patchFlag: i,
                        dynamicProps: r,
                        dynamicChildren: null,
                        appContext: null,
                    };
                    return c ? (Xt(l, n), 128 & a && e.normalize(l)) : n && (l.shapeFlag |= (0, o.isString)(n) ? 8 : 16), Bt > 0 && !s && Ot && (l.patchFlag > 0 || 6 & a) && 32 !== l.patchFlag && Ot.push(l), l;
                }
                const Yt = Ut;
                function Ut(e, t = null, n = null, r = 0, a = null, s = !1) {
                    if (((e && e !== Se) || (e = It), Dt(e))) {
                        const i = Jt(e, t, !0);
                        return n && Xt(i, n), Bt > 0 && !s && Ot && (6 & i.shapeFlag ? (Ot[Ot.indexOf(e)] = i) : Ot.push(i)), (i.patchFlag |= -2), i;
                    }
                    if ((yn(e) && (e = e.__vccOpts), t)) {
                        t = Vt(t);
                        let { class: e, style: n } = t;
                        e && !(0, o.isString)(e) && (t.class = (0, o.normalizeClass)(e)), (0, o.isObject)(n) && ((0, i.X3)(n) && !(0, o.isArray)(n) && (n = (0, o.extend)({}, n)), (t.style = (0, o.normalizeStyle)(n)));
                    }
                    return Rt(e, t, n, r, a, (0, o.isString)(e) ? 1 : Q(e) ? 128 : ((e) => e.__isTeleport)(e) ? 64 : (0, o.isObject)(e) ? 4 : (0, o.isFunction)(e) ? 2 : 0, s, !0);
                }
                function Vt(e) {
                    return e ? ((0, i.X3)(e) || qt in e ? (0, o.extend)({}, e) : e) : null;
                }
                function Jt(e, t, n = !1) {
                    const { props: i, ref: r, patchFlag: a, children: s } = e,
                        c = t ? Zt(i || {}, t) : i;
                    return {
                        __v_isVNode: !0,
                        __v_skip: !0,
                        type: e.type,
                        props: c,
                        key: c && Qt(c),
                        ref: t && t.ref ? (n && r ? ((0, o.isArray)(r) ? r.concat(Nt(t)) : [r, Nt(t)]) : Nt(t)) : r,
                        scopeId: e.scopeId,
                        slotScopeIds: e.slotScopeIds,
                        children: s,
                        target: e.target,
                        targetAnchor: e.targetAnchor,
                        staticCount: e.staticCount,
                        shapeFlag: e.shapeFlag,
                        patchFlag: t && e.type !== xt ? (-1 === a ? 16 : 16 | a) : a,
                        dynamicProps: e.dynamicProps,
                        dynamicChildren: e.dynamicChildren,
                        appContext: e.appContext,
                        dirs: e.dirs,
                        transition: e.transition,
                        component: e.component,
                        suspense: e.suspense,
                        ssContent: e.ssContent && Jt(e.ssContent),
                        ssFallback: e.ssFallback && Jt(e.ssFallback),
                        el: e.el,
                        anchor: e.anchor,
                    };
                }
                function Wt(e = " ", t = 0) {
                    return Yt(Tt, null, e, t);
                }
                function Gt(e = "", t = !1) {
                    return t ? (Et(), zt(It, null, e)) : Yt(It, null, e);
                }
                function Ht(e) {
                    return null == e || "boolean" == typeof e ? Yt(It) : (0, o.isArray)(e) ? Yt(xt, null, e.slice()) : "object" == typeof e ? Kt(e) : Yt(Tt, null, String(e));
                }
                function Kt(e) {
                    return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : Jt(e);
                }
                function Xt(e, t) {
                    let n = 0;
                    const { shapeFlag: i } = e;
                    if (null == t) t = null;
                    else if ((0, o.isArray)(t)) n = 16;
                    else if ("object" == typeof t) {
                        if (65 & i) {
                            const n = t.default;
                            return void (n && (n._c && (n._d = !1), Xt(e, n()), n._c && (n._d = !0)));
                        }
                        {
                            n = 32;
                            const i = t._;
                            i || qt in t ? 3 === i && O && (1 === O.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024))) : (t._ctx = O);
                        }
                    } else (0, o.isFunction)(t) ? ((t = { default: t, _ctx: O }), (n = 32)) : ((t = String(t)), 64 & i ? ((n = 16), (t = [Wt(t)])) : (n = 8));
                    (e.children = t), (e.shapeFlag |= n);
                }
                function Zt(...e) {
                    const t = {};
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n];
                        for (const e in i)
                            if ("class" === e) t.class !== i.class && (t.class = (0, o.normalizeClass)([t.class, i.class]));
                            else if ("style" === e) t.style = (0, o.normalizeStyle)([t.style, i.style]);
                            else if ((0, o.isOn)(e)) {
                                const n = t[e],
                                    r = i[e];
                                !r || n === r || ((0, o.isArray)(n) && n.includes(r)) || (t[e] = n ? [].concat(n, r) : r);
                            } else "" !== e && (t[e] = i[e]);
                    }
                    return t;
                }
                function $t(e, t, n, i = null) {
                    a(e, t, 7, [n, i]);
                }
                const en = dt();
                let tn = 0;
                function nn(e, t, n) {
                    const r = e.type,
                        a = (t ? t.appContext : e.appContext) || en,
                        s = {
                            uid: tn++,
                            vnode: e,
                            type: r,
                            parent: t,
                            appContext: a,
                            root: null,
                            next: null,
                            subTree: null,
                            effect: null,
                            update: null,
                            scope: new i.Bj(!0),
                            render: null,
                            proxy: null,
                            exposed: null,
                            exposeProxy: null,
                            withProxy: null,
                            provides: t ? t.provides : Object.create(a.provides),
                            accessCache: null,
                            renderCache: [],
                            components: null,
                            directives: null,
                            propsOptions: et(r, a),
                            emitsOptions: j(r, a),
                            emit: null,
                            emitted: null,
                            propsDefaults: o.EMPTY_OBJ,
                            inheritAttrs: r.inheritAttrs,
                            ctx: o.EMPTY_OBJ,
                            data: o.EMPTY_OBJ,
                            props: o.EMPTY_OBJ,
                            attrs: o.EMPTY_OBJ,
                            slots: o.EMPTY_OBJ,
                            refs: o.EMPTY_OBJ,
                            setupState: o.EMPTY_OBJ,
                            setupContext: null,
                            suspense: n,
                            suspenseId: n ? n.pendingId : 0,
                            asyncDep: null,
                            asyncResolved: !1,
                            isMounted: !1,
                            isUnmounted: !1,
                            isDeactivated: !1,
                            bc: null,
                            c: null,
                            bm: null,
                            m: null,
                            bu: null,
                            u: null,
                            um: null,
                            bum: null,
                            da: null,
                            a: null,
                            rtg: null,
                            rtc: null,
                            ec: null,
                            sp: null,
                        };
                    return (s.ctx = { _: s }), (s.root = t ? t.root : s), (s.emit = I.bind(null, s)), e.ce && e.ce(s), s;
                }
                let on = null;
                const rn = () => on || O,
                    an = (e) => {
                        (on = e), e.scope.on();
                    },
                    sn = () => {
                        on && on.scope.off(), (on = null);
                    };
                function cn(e) {
                    return 4 & e.vnode.shapeFlag;
                }
                let ln,
                    dn,
                    un = !1;
                function gn(e, t = !1) {
                    un = t;
                    const { props: n, children: a } = e.vnode,
                        c = cn(e);
                    !(function (e, t, n, r = !1) {
                        const a = {},
                            s = {};
                        (0, o.def)(s, qt, 1), (e.propsDefaults = Object.create(null)), Ze(e, t, a, s);
                        for (const t in e.propsOptions[0]) t in a || (a[t] = void 0);
                        n ? (e.props = r ? a : (0, i.Um)(a)) : e.type.props ? (e.props = a) : (e.props = s), (e.attrs = s);
                    })(e, n, c, t),
                        ((e, t) => {
                            if (32 & e.vnode.shapeFlag) {
                                const n = t._;
                                n ? ((e.slots = (0, i.IU)(t)), (0, o.def)(t, "_", n)) : ct(t, (e.slots = {}));
                            } else (e.slots = {}), t && lt(e, t);
                            (0, o.def)(e.slots, qt, 1);
                        })(e, a);
                    const l = c
                        ? (function (e, t) {
                              const n = e.type;
                              0;
                              (e.accessCache = Object.create(null)), (e.proxy = (0, i.Xl)(new Proxy(e.ctx, Qe))), !1;
                              const { setup: a } = n;
                              if (a) {
                                  const n = (e.setupContext = a.length > 1 ? mn(e) : null);
                                  an(e), (0, i.Jd)();
                                  const c = r(a, e, 0, [e.props, n]);
                                  if (((0, i.lk)(), sn(), (0, o.isPromise)(c))) {
                                      if ((c.then(sn, sn), t))
                                          return c
                                              .then((n) => {
                                                  pn(e, n, t);
                                              })
                                              .catch((t) => {
                                                  s(t, e, 0);
                                              });
                                      e.asyncDep = c;
                                  } else pn(e, c, t);
                              } else fn(e, t);
                          })(e, t)
                        : void 0;
                    return (un = !1), l;
                }
                function pn(e, t, n) {
                    (0, o.isFunction)(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : (0, o.isObject)(t) && (e.setupState = (0, i.WL)(t)), fn(e, n);
                }
                function fn(e, t, n) {
                    const r = e.type;
                    if (!e.render) {
                        if (!t && ln && !r.render) {
                            const t = r.template || Ve(e).template;
                            if (t) {
                                0;
                                const { isCustomElement: n, compilerOptions: i } = e.appContext.config,
                                    { delimiters: a, compilerOptions: s } = r,
                                    c = (0, o.extend)((0, o.extend)({ isCustomElement: n, delimiters: a }, i), s);
                                r.render = ln(t, c);
                            }
                        }
                        (e.render = r.render || o.NOOP), dn && dn(e);
                    }
                    an(e), (0, i.Jd)(), Re(e), (0, i.lk)(), sn();
                }
                function mn(e) {
                    const t = (t) => {
                        e.exposed = t || {};
                    };
                    let n;
                    return {
                        get attrs() {
                            return (
                                n ||
                                (n = (function (e) {
                                    return new Proxy(e.attrs, { get: (t, n) => ((0, i.j)(e, "get", "$attrs"), t[n]) });
                                })(e))
                            );
                        },
                        slots: e.slots,
                        emit: e.emit,
                        expose: t,
                    };
                }
                function hn(e) {
                    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy((0, i.WL)((0, i.Xl)(e.exposed)), { get: (t, n) => (n in t ? t[n] : n in qe ? qe[n](e) : void 0) }));
                }
                function bn(e, t = !0) {
                    return (0, o.isFunction)(e) ? e.displayName || e.name : e.name || (t && e.__name);
                }
                function yn(e) {
                    return (0, o.isFunction)(e) && "__vccOpts" in e;
                }
                const wn = (e, t) => (0, i.Fl)(e, t, un);
                function vn() {
                    return kn().slots;
                }
                function kn() {
                    const e = rn();
                    return e.setupContext || (e.setupContext = mn(e));
                }
                function Cn(e, t, n) {
                    const i = arguments.length;
                    return 2 === i
                        ? (0, o.isObject)(t) && !(0, o.isArray)(t)
                            ? Dt(t)
                                ? Yt(e, null, [t])
                                : Yt(e, t)
                            : Yt(e, null, t)
                        : (i > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === i && Dt(n) && (n = [n]), Yt(e, t, n));
                }
                Symbol("");
                const An = "3.2.41";
            },
            68398: (e, t, n) => {
                n.d(t, { Transition: () => k, createApp: () => N, vShow: () => z });
                var i = n(94209),
                    o = n(57268);
                n(29445);
                const r = "undefined" != typeof document ? document : null,
                    a = r && r.createElement("template"),
                    s = {
                        insert: (e, t, n) => {
                            t.insertBefore(e, n || null);
                        },
                        remove: (e) => {
                            const t = e.parentNode;
                            t && t.removeChild(e);
                        },
                        createElement: (e, t, n, i) => {
                            const o = t ? r.createElementNS("http://www.w3.org/2000/svg", e) : r.createElement(e, n ? { is: n } : void 0);
                            return "select" === e && i && null != i.multiple && o.setAttribute("multiple", i.multiple), o;
                        },
                        createText: (e) => r.createTextNode(e),
                        createComment: (e) => r.createComment(e),
                        setText: (e, t) => {
                            e.nodeValue = t;
                        },
                        setElementText: (e, t) => {
                            e.textContent = t;
                        },
                        parentNode: (e) => e.parentNode,
                        nextSibling: (e) => e.nextSibling,
                        querySelector: (e) => r.querySelector(e),
                        setScopeId(e, t) {
                            e.setAttribute(t, "");
                        },
                        insertStaticContent(e, t, n, i, o, r) {
                            const s = n ? n.previousSibling : t.lastChild;
                            if (o && (o === r || o.nextSibling)) for (; t.insertBefore(o.cloneNode(!0), n), o !== r && (o = o.nextSibling); );
                            else {
                                a.innerHTML = i ? `<svg>${e}</svg>` : e;
                                const o = a.content;
                                if (i) {
                                    const e = o.firstChild;
                                    for (; e.firstChild; ) o.appendChild(e.firstChild);
                                    o.removeChild(e);
                                }
                                t.insertBefore(o, n);
                            }
                            return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
                        },
                    };
                const c = /\s*!important$/;
                function l(e, t, n) {
                    if ((0, i.isArray)(n)) n.forEach((n) => l(e, t, n));
                    else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
                    else {
                        const o = (function (e, t) {
                            const n = u[t];
                            if (n) return n;
                            let o = (0, i.camelize)(t);
                            if ("filter" !== o && o in e) return (u[t] = o);
                            o = (0, i.capitalize)(o);
                            for (let n = 0; n < d.length; n++) {
                                const i = d[n] + o;
                                if (i in e) return (u[t] = i);
                            }
                            return t;
                        })(e, t);
                        c.test(n) ? e.setProperty((0, i.hyphenate)(o), n.replace(c, ""), "important") : (e[o] = n);
                    }
                }
                const d = ["Webkit", "Moz", "ms"],
                    u = {};
                const g = "http://www.w3.org/1999/xlink";
                function p(e, t, n, i) {
                    e.addEventListener(t, n, i);
                }
                function f(e, t, n, r, a = null) {
                    const s = e._vei || (e._vei = {}),
                        c = s[t];
                    if (r && c) c.value = r;
                    else {
                        const [n, l] = (function (e) {
                            let t;
                            if (m.test(e)) {
                                let n;
                                for (t = {}; (n = e.match(m)); ) (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
                            }
                            return [":" === e[2] ? e.slice(3) : (0, i.hyphenate)(e.slice(2)), t];
                        })(t);
                        if (r) {
                            const c = (s[t] = (function (e, t) {
                                const n = (e) => {
                                    if (e._vts) {
                                        if (e._vts <= n.attached) return;
                                    } else e._vts = Date.now();
                                    (0, o.$d)(
                                        (function (e, t) {
                                            if ((0, i.isArray)(t)) {
                                                const n = e.stopImmediatePropagation;
                                                return (
                                                    (e.stopImmediatePropagation = () => {
                                                        n.call(e), (e._stopped = !0);
                                                    }),
                                                    t.map((e) => (t) => !t._stopped && e && e(t))
                                                );
                                            }
                                            return t;
                                        })(e, n.value),
                                        t,
                                        5,
                                        [e]
                                    );
                                };
                                return (n.value = e), (n.attached = (() => h || (b.then(() => (h = 0)), (h = Date.now())))()), n;
                            })(r, a));
                            p(e, n, c, l);
                        } else
                            c &&
                                (!(function (e, t, n, i) {
                                    e.removeEventListener(t, n, i);
                                })(e, n, c, l),
                                (s[t] = void 0));
                    }
                }
                const m = /(?:Once|Passive|Capture)$/;
                let h = 0;
                const b = Promise.resolve();
                const y = /^on[a-z]/;
                "undefined" != typeof HTMLElement && HTMLElement;
                const w = "transition",
                    v = "animation",
                    k = (e, { slots: t }) => (0, o.h)(o.P$, T(e), t);
                k.displayName = "Transition";
                const C = {
                        name: String,
                        type: String,
                        css: { type: Boolean, default: !0 },
                        duration: [String, Number, Object],
                        enterFromClass: String,
                        enterActiveClass: String,
                        enterToClass: String,
                        appearFromClass: String,
                        appearActiveClass: String,
                        appearToClass: String,
                        leaveFromClass: String,
                        leaveActiveClass: String,
                        leaveToClass: String,
                    },
                    A =
                        ((k.props = (0, i.extend)({}, o.P$.props, C)),
                        (e, t = []) => {
                            (0, i.isArray)(e) ? e.forEach((e) => e(...t)) : e && e(...t);
                        }),
                    x = (e) => !!e && ((0, i.isArray)(e) ? e.some((e) => e.length > 1) : e.length > 1);
                function T(e) {
                    const t = {};
                    for (const n in e) n in C || (t[n] = e[n]);
                    if (!1 === e.css) return t;
                    const {
                            name: n = "v",
                            type: o,
                            duration: r,
                            enterFromClass: a = `${n}-enter-from`,
                            enterActiveClass: s = `${n}-enter-active`,
                            enterToClass: c = `${n}-enter-to`,
                            appearFromClass: l = a,
                            appearActiveClass: d = s,
                            appearToClass: u = c,
                            leaveFromClass: g = `${n}-leave-from`,
                            leaveActiveClass: p = `${n}-leave-active`,
                            leaveToClass: f = `${n}-leave-to`,
                        } = e,
                        m = (function (e) {
                            if (null == e) return null;
                            if ((0, i.isObject)(e)) return [I(e.enter), I(e.leave)];
                            {
                                const t = I(e);
                                return [t, t];
                            }
                        })(r),
                        h = m && m[0],
                        b = m && m[1],
                        { onBeforeEnter: y, onEnter: w, onEnterCancelled: v, onLeave: k, onLeaveCancelled: T, onBeforeAppear: E = y, onAppear: B = w, onAppearCancelled: F = v } = t,
                        M = (e, t, n) => {
                            _(e, t ? u : c), _(e, t ? d : s), n && n();
                        },
                        z = (e, t) => {
                            (e._isLeaving = !1), _(e, g), _(e, f), _(e, p), t && t();
                        },
                        D = (e) => (t, n) => {
                            const i = e ? B : w,
                                r = () => M(t, e, n);
                            A(i, [t, r]),
                                O(() => {
                                    _(t, e ? l : a), j(t, e ? u : c), x(i) || S(t, o, h, r);
                                });
                        };
                    return (0, i.extend)(t, {
                        onBeforeEnter(e) {
                            A(y, [e]), j(e, a), j(e, s);
                        },
                        onBeforeAppear(e) {
                            A(E, [e]), j(e, l), j(e, d);
                        },
                        onEnter: D(!1),
                        onAppear: D(!0),
                        onLeave(e, t) {
                            e._isLeaving = !0;
                            const n = () => z(e, t);
                            j(e, g),
                                P(),
                                j(e, p),
                                O(() => {
                                    e._isLeaving && (_(e, g), j(e, f), x(k) || S(e, o, b, n));
                                }),
                                A(k, [e, n]);
                        },
                        onEnterCancelled(e) {
                            M(e, !1), A(v, [e]);
                        },
                        onAppearCancelled(e) {
                            M(e, !0), A(F, [e]);
                        },
                        onLeaveCancelled(e) {
                            z(e), A(T, [e]);
                        },
                    });
                }
                function I(e) {
                    return (0, i.toNumber)(e);
                }
                function j(e, t) {
                    t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e._vtc || (e._vtc = new Set())).add(t);
                }
                function _(e, t) {
                    t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
                    const { _vtc: n } = e;
                    n && (n.delete(t), n.size || (e._vtc = void 0));
                }
                function O(e) {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(e);
                    });
                }
                let E = 0;
                function S(e, t, n, i) {
                    const o = (e._endId = ++E),
                        r = () => {
                            o === e._endId && i();
                        };
                    if (n) return setTimeout(r, n);
                    const { type: a, timeout: s, propCount: c } = B(e, t);
                    if (!a) return i();
                    const l = a + "end";
                    let d = 0;
                    const u = () => {
                            e.removeEventListener(l, g), r();
                        },
                        g = (t) => {
                            t.target === e && ++d >= c && u();
                        };
                    setTimeout(() => {
                        d < c && u();
                    }, s + 1),
                        e.addEventListener(l, g);
                }
                function B(e, t) {
                    const n = window.getComputedStyle(e),
                        i = (e) => (n[e] || "").split(", "),
                        o = i("transitionDelay"),
                        r = i("transitionDuration"),
                        a = F(o, r),
                        s = i("animationDelay"),
                        c = i("animationDuration"),
                        l = F(s, c);
                    let d = null,
                        u = 0,
                        g = 0;
                    t === w ? a > 0 && ((d = w), (u = a), (g = r.length)) : t === v ? l > 0 && ((d = v), (u = l), (g = c.length)) : ((u = Math.max(a, l)), (d = u > 0 ? (a > l ? w : v) : null), (g = d ? (d === w ? r.length : c.length) : 0));
                    return { type: d, timeout: u, propCount: g, hasTransform: d === w && /\b(transform|all)(,|$)/.test(n.transitionProperty) };
                }
                function F(e, t) {
                    for (; e.length < t.length; ) e = e.concat(e);
                    return Math.max(...t.map((t, n) => M(t) + M(e[n])));
                }
                function M(e) {
                    return 1e3 * Number(e.slice(0, -1).replace(",", "."));
                }
                function P() {
                    return document.body.offsetHeight;
                }
                new WeakMap(), new WeakMap();
                const z = {
                    beforeMount(e, { value: t }, { transition: n }) {
                        (e._vod = "none" === e.style.display ? "" : e.style.display), n && t ? n.beforeEnter(e) : D(e, t);
                    },
                    mounted(e, { value: t }, { transition: n }) {
                        n && t && n.enter(e);
                    },
                    updated(e, { value: t, oldValue: n }, { transition: i }) {
                        !t != !n &&
                            (i
                                ? t
                                    ? (i.beforeEnter(e), D(e, !0), i.enter(e))
                                    : i.leave(e, () => {
                                          D(e, !1);
                                      })
                                : D(e, t));
                    },
                    beforeUnmount(e, { value: t }) {
                        D(e, t);
                    },
                };
                function D(e, t) {
                    e.style.display = t ? e._vod : "none";
                }
                const L = (0, i.extend)(
                    {
                        patchProp: (e, t, n, o, r = !1, a, s, c, d) => {
                            "class" === t
                                ? (function (e, t, n) {
                                      const i = e._vtc;
                                      i && (t = (t ? [t, ...i] : [...i]).join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
                                  })(e, o, r)
                                : "style" === t
                                ? (function (e, t, n) {
                                      const o = e.style,
                                          r = (0, i.isString)(n);
                                      if (n && !r) {
                                          for (const e in n) l(o, e, n[e]);
                                          if (t && !(0, i.isString)(t)) for (const e in t) null == n[e] && l(o, e, "");
                                      } else {
                                          const i = o.display;
                                          r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = i);
                                      }
                                  })(e, n, o)
                                : (0, i.isOn)(t)
                                ? (0, i.isModelListener)(t) || f(e, t, 0, o, s)
                                : (
                                      "." === t[0]
                                          ? ((t = t.slice(1)), 1)
                                          : "^" === t[0]
                                          ? ((t = t.slice(1)), 0)
                                          : (function (e, t, n, o) {
                                                if (o) return "innerHTML" === t || "textContent" === t || !!(t in e && y.test(t) && (0, i.isFunction)(n));
                                                if ("spellcheck" === t || "draggable" === t || "translate" === t) return !1;
                                                if ("form" === t) return !1;
                                                if ("list" === t && "INPUT" === e.tagName) return !1;
                                                if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                                                if (y.test(t) && (0, i.isString)(n)) return !1;
                                                return t in e;
                                            })(e, t, o, r)
                                  )
                                ? (function (e, t, n, o, r, a, s) {
                                      if ("innerHTML" === t || "textContent" === t) return o && s(o, r, a), void (e[t] = null == n ? "" : n);
                                      if ("value" === t && "PROGRESS" !== e.tagName && !e.tagName.includes("-")) {
                                          e._value = n;
                                          const i = null == n ? "" : n;
                                          return (e.value === i && "OPTION" !== e.tagName) || (e.value = i), void (null == n && e.removeAttribute(t));
                                      }
                                      let c = !1;
                                      if ("" === n || null == n) {
                                          const o = typeof e[t];
                                          "boolean" === o ? (n = (0, i.includeBooleanAttr)(n)) : null == n && "string" === o ? ((n = ""), (c = !0)) : "number" === o && ((n = 0), (c = !0));
                                      }
                                      try {
                                          e[t] = n;
                                      } catch (e) {}
                                      c && e.removeAttribute(t);
                                  })(e, t, o, a, s, c, d)
                                : ("true-value" === t ? (e._trueValue = o) : "false-value" === t && (e._falseValue = o),
                                  (function (e, t, n, o, r) {
                                      if (o && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(g, t.slice(6, t.length)) : e.setAttributeNS(g, t, n);
                                      else {
                                          const o = (0, i.isSpecialBooleanAttr)(t);
                                          null == n || (o && !(0, i.includeBooleanAttr)(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
                                      }
                                  })(e, t, o, r));
                        },
                    },
                    s
                );
                let q;
                function Q() {
                    return q || (q = (0, o.Us)(L));
                }
                const N = (...e) => {
                    const t = Q().createApp(...e);
                    const { mount: n } = t;
                    return (
                        (t.mount = (e) => {
                            const o = R(e);
                            if (!o) return;
                            const r = t._component;
                            (0, i.isFunction)(r) || r.render || r.template || (r.template = o.innerHTML), (o.innerHTML = "");
                            const a = n(o, !1, o instanceof SVGElement);
                            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
                        }),
                        t
                    );
                };
                function R(e) {
                    if ((0, i.isString)(e)) {
                        return document.querySelector(e);
                    }
                    return e;
                }
            },
            94209: (e, t, n) => {
                function i(e, t) {
                    const n = Object.create(null),
                        i = e.split(",");
                    for (let e = 0; e < i.length; e++) n[i[e]] = !0;
                    return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
                }
                n.d(t, {
                    EMPTY_ARR: () => w,
                    EMPTY_OBJ: () => y,
                    NO: () => k,
                    NOOP: () => v,
                    camelize: () => J,
                    capitalize: () => H,
                    def: () => $,
                    extend: () => T,
                    getGlobalThis: () => ne,
                    hasChanged: () => X,
                    hasOwn: () => _,
                    hyphenate: () => G,
                    includeBooleanAttr: () => s,
                    invokeArrayFns: () => Z,
                    isArray: () => O,
                    isFunction: () => F,
                    isGloballyWhitelisted: () => o,
                    isIntegerKey: () => R,
                    isMap: () => E,
                    isModelListener: () => x,
                    isObject: () => z,
                    isOn: () => A,
                    isPlainObject: () => N,
                    isPromise: () => D,
                    isReservedProp: () => Y,
                    isSet: () => S,
                    isSpecialBooleanAttr: () => a,
                    isString: () => M,
                    isSymbol: () => P,
                    looseEqual: () => f,
                    looseIndexOf: () => m,
                    makeMap: () => i,
                    normalizeClass: () => g,
                    normalizeProps: () => p,
                    normalizeStyle: () => c,
                    remove: () => I,
                    toDisplayString: () => h,
                    toHandlerKey: () => K,
                    toNumber: () => ee,
                    toRawType: () => Q,
                });
                const o = i("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");
                const r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
                    a = i(r);
                function s(e) {
                    return !!e || "" === e;
                }
                function c(e) {
                    if (O(e)) {
                        const t = {};
                        for (let n = 0; n < e.length; n++) {
                            const i = e[n],
                                o = M(i) ? u(i) : c(i);
                            if (o) for (const e in o) t[e] = o[e];
                        }
                        return t;
                    }
                    return M(e) || z(e) ? e : void 0;
                }
                const l = /;(?![^(]*\))/g,
                    d = /:(.+)/;
                function u(e) {
                    const t = {};
                    return (
                        e.split(l).forEach((e) => {
                            if (e) {
                                const n = e.split(d);
                                n.length > 1 && (t[n[0].trim()] = n[1].trim());
                            }
                        }),
                        t
                    );
                }
                function g(e) {
                    let t = "";
                    if (M(e)) t = e;
                    else if (O(e))
                        for (let n = 0; n < e.length; n++) {
                            const i = g(e[n]);
                            i && (t += i + " ");
                        }
                    else if (z(e)) for (const n in e) e[n] && (t += n + " ");
                    return t.trim();
                }
                function p(e) {
                    if (!e) return null;
                    let { class: t, style: n } = e;
                    return t && !M(t) && (e.class = g(t)), n && (e.style = c(n)), e;
                }
                function f(e, t) {
                    if (e === t) return !0;
                    let n = B(e),
                        i = B(t);
                    if (n || i) return !(!n || !i) && e.getTime() === t.getTime();
                    if (((n = P(e)), (i = P(t)), n || i)) return e === t;
                    if (((n = O(e)), (i = O(t)), n || i))
                        return (
                            !(!n || !i) &&
                            (function (e, t) {
                                if (e.length !== t.length) return !1;
                                let n = !0;
                                for (let i = 0; n && i < e.length; i++) n = f(e[i], t[i]);
                                return n;
                            })(e, t)
                        );
                    if (((n = z(e)), (i = z(t)), n || i)) {
                        if (!n || !i) return !1;
                        if (Object.keys(e).length !== Object.keys(t).length) return !1;
                        for (const n in e) {
                            const i = e.hasOwnProperty(n),
                                o = t.hasOwnProperty(n);
                            if ((i && !o) || (!i && o) || !f(e[n], t[n])) return !1;
                        }
                    }
                    return String(e) === String(t);
                }
                function m(e, t) {
                    return e.findIndex((e) => f(e, t));
                }
                const h = (e) => (M(e) ? e : null == e ? "" : O(e) || (z(e) && (e.toString === L || !F(e.toString))) ? JSON.stringify(e, b, 2) : String(e)),
                    b = (e, t) =>
                        t && t.__v_isRef
                            ? b(e, t.value)
                            : E(t)
                            ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n]) => ((e[`${t} =>`] = n), e), {}) }
                            : S(t)
                            ? { [`Set(${t.size})`]: [...t.values()] }
                            : !z(t) || O(t) || N(t)
                            ? t
                            : String(t),
                    y = {},
                    w = [],
                    v = () => {},
                    k = () => !1,
                    C = /^on[^a-z]/,
                    A = (e) => C.test(e),
                    x = (e) => e.startsWith("onUpdate:"),
                    T = Object.assign,
                    I = (e, t) => {
                        const n = e.indexOf(t);
                        n > -1 && e.splice(n, 1);
                    },
                    j = Object.prototype.hasOwnProperty,
                    _ = (e, t) => j.call(e, t),
                    O = Array.isArray,
                    E = (e) => "[object Map]" === q(e),
                    S = (e) => "[object Set]" === q(e),
                    B = (e) => "[object Date]" === q(e),
                    F = (e) => "function" == typeof e,
                    M = (e) => "string" == typeof e,
                    P = (e) => "symbol" == typeof e,
                    z = (e) => null !== e && "object" == typeof e,
                    D = (e) => z(e) && F(e.then) && F(e.catch),
                    L = Object.prototype.toString,
                    q = (e) => L.call(e),
                    Q = (e) => q(e).slice(8, -1),
                    N = (e) => "[object Object]" === q(e),
                    R = (e) => M(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
                    Y = i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
                    U = (e) => {
                        const t = Object.create(null);
                        return (n) => t[n] || (t[n] = e(n));
                    },
                    V = /-(\w)/g,
                    J = U((e) => e.replace(V, (e, t) => (t ? t.toUpperCase() : ""))),
                    W = /\B([A-Z])/g,
                    G = U((e) => e.replace(W, "-$1").toLowerCase()),
                    H = U((e) => e.charAt(0).toUpperCase() + e.slice(1)),
                    K = U((e) => (e ? `on${H(e)}` : "")),
                    X = (e, t) => !Object.is(e, t),
                    Z = (e, t) => {
                        for (let n = 0; n < e.length; n++) e[n](t);
                    },
                    $ = (e, t, n) => {
                        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
                    },
                    ee = (e) => {
                        const t = parseFloat(e);
                        return isNaN(t) ? e : t;
                    };
                let te;
                const ne = () => te || (te = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {});
            },
            27856: (e, t, n) => {
                function i(e) {
                    return !(!e || "function" != typeof e.then);
                }
                n.d(t, { Iy: () => a, JQ: () => s, UG: () => u, Xu: () => d, _v: () => r, hU: () => o, tI: () => i });
                Promise.resolve(!1), Promise.resolve(!0);
                var o = Promise.resolve();
                function r(e, t) {
                    return (
                        e || (e = 0),
                        new Promise(function (n) {
                            return setTimeout(function () {
                                return n(t);
                            }, e);
                        })
                    );
                }
                function a(e, t) {
                    return Math.floor(Math.random() * (t - e + 1) + e);
                }
                function s() {
                    return Math.random().toString(36).substring(2);
                }
                var c = 0,
                    l = 0;
                function d() {
                    var e = new Date().getTime();
                    return e === c ? 1e3 * e + ++l : ((c = e), (l = 0), 1e3 * e);
                }
                var u = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
            },
            55332: (e, t, n) => {
                var i = n(88296);
                var o = n(54700);
                var r = n(47304);
                var a = n(44314);
                var s = n(83807);
                var c = n(84962);
                var l = n(79671);
                var d = n(30764);
                var u = n(81268);
                var g = n(67428);
                var p = n(96215);
                var f = n(94165);
                var m = n(76856);
                var h = n(46066);
                var b = n(34896);
                var y = n(33631);
                var w = n(19071);
                var v = n(57431);
                var k = n(78783);
                var C = n(54422);
                var A = n(81783);
                var x = n(43515);
                var T = n(92495);
                var I = n(46725);
                var j = n(86735);
                var _ = n(41199);
                var O = n(71682);
                var E = n(99252);
                var S = n(33935);
            },
            74003: (e, t, n) => {
                n.d(t, { FH: () => r, Pl: () => i, s$: () => o, sM: () => a, tJ: () => c });
                const i = !1,
                    o = !1,
                    r = !0,
                    a = !0,
                    s = (location.origin, a ? { "zh-CN": "中文简体" } : { "en-US": "English" }),
                    c = (Object.keys(s), a ? { baiduLabel: "Wetab", trackingId: i ? "UA-269391972-2" : "UA-269391972-1" } : { baiduLabel: "Hitab", trackingId: "UA-238133466-2" });
            },
            1585: (e, t, n) => {
                n.d(t, { bn: () => g, kn: () => p });
                var i = n(85073),
                    o = n.n(i);
                const r = getComputedStyle(document.body).getPropertyValue("--hover"),
                    a = getComputedStyle(document.body).getPropertyValue("--pointer"),
                    s = 1 === Number(r),
                    c = 1 === Number(a),
                    l = !s || !c,
                    d = (l && window.screen.width, new (o())()),
                    u = (d.getOS().name, d.getBrowser()),
                    g = (u.name, u.version, window.screen.availWidth),
                    p = { "icon-s": 60, "icon-m": 72, "icon-l": 88 };
            },
            26605: (e, t, n) => {
                n(57334);
                var i = n(66155),
                    o = n(68398),
                    r = n(75008),
                    a = n(57268),
                    s = n(13889),
                    c = n(74003),
                    l = n(1585);
                const d = l.bn <= 1366 ? "icon-s" : l.bn > 1920 ? "icon-l" : "icon-m",
                    u = "icon-l" === d || ("icon-m" === d && 1920 === l.bn) ? 11 : 9;
                l.kn[d];
                var g = n(1007),
                    p = n(63477);
                new (class {
                    mounted = !1;
                    mount() {
                        this.mounted || ((this.app = (0, o.createApp)(g.Z)), (0, r.f)(this.app), (this.container = (0, p.em)("hi-message-root")), (this.instance = this.app.mount(this.container)), (this.mounted = !0));
                    }
                    warn(e) {
                        this.mount(), this.instance.open("warn", e);
                    }
                    success(e) {
                        this.mount(), this.instance.open("success", e);
                    }
                    fail(e) {
                        this.mount(), this.instance.open("fail", e);
                    }
                    loading(e) {
                        this.mount(), this.instance.open("loading", e);
                    }
                    hide() {
                        this.instance && this.instance.close();
                    }
                    destroy() {
                        this.mounted && (this.app.unmount(), (this.mounted = !1), document.body.removeChild(this.container));
                    }
                })();
                const f = {
                        name: c.sM ? "发工资" : "Payday",
                        time: 167328e7,
                        repeatType: "month",
                        dateType: "solar",
                        timerStyle: {
                            fontColor: "rgba(248, 248, 248, 1)",
                            bgType: "image",
                            bgColor: "rgba(182, 150, 135, 1)",
                            bgImageColor: "",
                            bgImage: {
                                large: GlobalGetApi + "https://static.wetab.link/widget-background/background08_larg.jpg",
                                medium: GlobalGetApi + "https://static.wetab.link/widget-background/background08_medium.jpg",
                                small: GlobalGetApi + "https://static.wetab.link/widget-background/background08_small.jpg",
                            },
                            bgMask: 20,
                        },
                    },
                    m = {
                        name: c.sM ? "与 Tina 相识" : "In love with Smith",
                        time: 1589904e6,
                        dateType: "solar",
                        timerStyle: {
                            fontColor: "rgba(248, 248, 248, 1)",
                            bgType: "image",
                            bgColor: "rgba(109, 131, 95, 1)",
                            bgImageColor: "",
                            bgImage: {
                                large: GlobalGetApi + "https://static.wetab.link/widget-background/background05_larg.jpg",
                                medium: GlobalGetApi + "https://static.wetab.link/widget-background/background05_medium.jpg",
                                small: GlobalGetApi + "https://static.wetab.link/widget-background/background05_small.jpg",
                            },
                            bgMask: 20,
                        },
                    };
                let h, b;
                const y = new WeakMap(),
                    w = new WeakMap(),
                    v = new WeakMap(),
                    k = new WeakMap(),
                    C = new WeakMap();
                let A = {
                    get(e, t, n) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return w.get(e);
                            if ("objectStoreNames" === t) return e.objectStoreNames || v.get(e);
                            if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
                        }
                        return I(e[t]);
                    },
                    set: (e, t, n) => ((e[t] = n), !0),
                    has: (e, t) => (e instanceof IDBTransaction && ("done" === t || "store" === t)) || t in e,
                };
                function x(e) {
                    return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype
                        ? (b || (b = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
                            ? function (...t) {
                                  return e.apply(j(this), t), I(y.get(this));
                              }
                            : function (...t) {
                                  return I(e.apply(j(this), t));
                              }
                        : function (t, ...n) {
                              const i = e.call(j(this), t, ...n);
                              return v.set(i, t.sort ? t.sort() : [t]), I(i);
                          };
                }
                function T(e) {
                    return "function" == typeof e
                        ? x(e)
                        : (e instanceof IDBTransaction &&
                              (function (e) {
                                  if (w.has(e)) return;
                                  const t = new Promise((t, n) => {
                                      const i = () => {
                                              e.removeEventListener("complete", o), e.removeEventListener("error", r), e.removeEventListener("abort", r);
                                          },
                                          o = () => {
                                              t(), i();
                                          },
                                          r = () => {
                                              n(e.error || new DOMException("AbortError", "AbortError")), i();
                                          };
                                      e.addEventListener("complete", o), e.addEventListener("error", r), e.addEventListener("abort", r);
                                  });
                                  w.set(e, t);
                              })(e),
                          (t = e),
                          (h || (h = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e) => t instanceof e) ? new Proxy(e, A) : e);
                    var t;
                }
                function I(e) {
                    if (e instanceof IDBRequest)
                        return (function (e) {
                            const t = new Promise((t, n) => {
                                const i = () => {
                                        e.removeEventListener("success", o), e.removeEventListener("error", r);
                                    },
                                    o = () => {
                                        t(I(e.result)), i();
                                    },
                                    r = () => {
                                        n(e.error), i();
                                    };
                                e.addEventListener("success", o), e.addEventListener("error", r);
                            });
                            return (
                                t
                                    .then((t) => {
                                        t instanceof IDBCursor && y.set(t, e);
                                    })
                                    .catch(() => {}),
                                C.set(t, e),
                                t
                            );
                        })(e);
                    if (k.has(e)) return k.get(e);
                    const t = T(e);
                    return t !== e && (k.set(e, t), C.set(t, e)), t;
                }
                const j = (e) => C.get(e);
                const _ = ["get", "getKey", "getAll", "getAllKeys", "count"],
                    O = ["put", "add", "delete", "clear"],
                    E = new Map();
                function S(e, t) {
                    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
                    if (E.get(t)) return E.get(t);
                    const n = t.replace(/FromIndex$/, ""),
                        i = t !== n,
                        o = O.includes(n);
                    if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || (!o && !_.includes(n))) return;
                    const r = async function (e, ...t) {
                        const r = this.transaction(e, o ? "readwrite" : "readonly");
                        let a = r.store;
                        return i && (a = a.index(t.shift())), (await Promise.all([a[n](...t), o && r.done]))[0];
                    };
                    return E.set(t, r), r;
                }
                A = ((e) => ({ ...e, get: (t, n, i) => S(t, n) || e.get(t, n, i), has: (t, n) => !!S(t, n) || e.has(t, n) }))(A);
                class B {
                    static DBName = "hitab";
                    static storeNames = [];
                    static ensureDB = async () => {
                        let e;
                        if (this.dbPromise) {
                            const t = await this.dbPromise;
                            (e = t.version + 1), t.close();
                        }
                        return (
                            (this.dbPromise = (function (e, t, { blocked: n, upgrade: i, blocking: o, terminated: r } = {}) {
                                const a = indexedDB.open(e, t),
                                    s = I(a);
                                return (
                                    i &&
                                        a.addEventListener("upgradeneeded", (e) => {
                                            i(I(a.result), e.oldVersion, e.newVersion, I(a.transaction));
                                        }),
                                    n && a.addEventListener("blocked", () => n()),
                                    s
                                        .then((e) => {
                                            r && e.addEventListener("close", () => r()), o && e.addEventListener("versionchange", () => o());
                                        })
                                        .catch(() => {}),
                                    s
                                );
                            })(this.DBName, e, {
                                upgrade: (e) => {
                                    const t = this.storeNames.filter((t) => !e.objectStoreNames.contains(t));
                                    t.length > 0 &&
                                        t.forEach((t) => {
                                            e.createObjectStore(t);
                                        });
                                },
                            })),
                            this.dbPromise
                        );
                    };
                    objStoreName = "";
                    driver = "idb";
                    constructor(e, t) {
                        if (!e) throw new Error("empty object store name");
                        (this.driver = t ?? this.driver), (this.objStoreName = e), B.storeNames.push(this.objStoreName);
                    }
                    async getItem(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.driver;
                        try {
                            switch (t) {
                                case "idb":
                                    try {
                                        const t = await B.dbPromise;
                                        return await t.get(this.objStoreName, e);
                                    } catch (t) {
                                        const n = await B.ensureDB();
                                        return await n.get(this.objStoreName, e);
                                    }
                                case "storage.local":
                                    return await new Promise((t) => chrome.storage.local.get(e, (n) => t(n[e])));
                            }
                        } catch (e) {
                            throw e;
                        }
                    }
                    async setItem(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.driver;
                        try {
                            switch (n) {
                                case "idb":
                                    try {
                                        const n = await B.dbPromise;
                                        return await n.put(this.objStoreName, t, e);
                                    } catch (n) {
                                        const i = await B.ensureDB();
                                        return await i.put(this.objStoreName, t, e);
                                    }
                                case "storage.local":
                                    return await new Promise((n) => chrome.storage.local.set({ [e]: t }, n));
                            }
                        } catch (e) {
                            throw e;
                        }
                    }
                    async removeItem(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.driver;
                        try {
                            switch (t) {
                                case "idb":
                                    try {
                                        const t = await B.dbPromise;
                                        return await t.delete(this.objStoreName, e);
                                    } catch (t) {
                                        const n = await B.ensureDB();
                                        return await n.delete(this.objStoreName, e);
                                    }
                                case "storage.local":
                                    return await new Promise((t) => chrome.storage.local.remove(e, t));
                            }
                        } catch (e) {
                            throw e;
                        }
                    }
                    async keys() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.driver;
                        try {
                            switch (e) {
                                case "idb":
                                    try {
                                        const e = await B.dbPromise;
                                        return await e.getAllKeys(this.objStoreName);
                                    } catch (e) {
                                        const t = await B.ensureDB();
                                        return await t.getAllKeys(this.objStoreName);
                                    }
                                case "storage.local":
                                    return await new Promise((e) => chrome.storage.local.get(null, (t) => e(Object.keys(t))));
                            }
                        } catch (e) {
                            throw e;
                        }
                    }
                }
                const F = new B("store");
                let M;
                B.ensureDB(),
                    (function (e) {
                        (e.wallpaper = "store-wallpaper"),
                            (e.search = "store-search"),
                            (e.icon = "store-icon"),
                            (e.setting = "store-setting"),
                            (e.user = "store-user"),
                            (e.sync = "store-sync"),
                            (e.notice = "store-notice"),
                            (e.note = "store-note"),
                            (e.todo = "store-todo"),
                            (e.timerBirthday = "store-timer-birthday"),
                            (e.timerFestival = "store-timer-festival"),
                            (e.timerYear = "store-timer-year"),
                            (e.weather = "store-weather"),
                            (e.hotsearch = "store-hotsearch"),
                            (e.calculator = "store-calculator"),
                            (e.payment = "store-payment"),
                            (e.calendar = "store-calendar"),
                            (e.celebrity = "store-celebrity"),
                            (e.worldcup = "store-worldcup"),
                            (e.habit = "store-habit"),
                            (e.exchangeRate = "store-exchange-rate"),
                            (e.news = "store-news"),
                            (e.stock = "store-stock"),
                            (e.game = "store-game"),
                            (e.history = "store-history"),
                            (e.movie = "store-movie"),
                            (e.book = "store-book"),
                            (e.play = "store-play"),
                            (e.clock = "store-clock"),
                            (e.worldClock = "store-world-clock"),
                            (e.hotApp = "store-hotapp"),
                            (e.nba = "store-nba"),
                            (e.chatgpt = "store-chatgpt"),
                            (e.bookmarks = "store-bookmarks"),
                            (e.pageTurning = "store-pageTurning");
                    })(M || (M = {}));
                class P {
                    static instanceKeyMapper = new Map();
                    static getInstanceFromKey(e) {
                        return this.instanceKeyMapper.has(e) ? this.instanceKeyMapper.get(e) : null;
                    }
                    static hasInstanceFromKey(e) {
                        return this.instanceKeyMapper.has(e);
                    }
                    static async getAllInitdata() {
                        const e = Array.from(this.instanceKeyMapper.values());
                        return await Promise.all(e.map((e) => e.getInitdata()));
                    }
                    static async deleteAllForLogout() {
                        const e = Array.from(this.instanceKeyMapper.values());
                        let t;
                        return (await Promise.all(e.map((e) => e.deleteForLogout()))).some((e) => {
                            let [n] = e;
                            return !!n && ((t = n), !0);
                        })
                            ? [t]
                            : [null, null];
                    }
                    constructor(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "idb";
                        (this.key = e), (this.type = t), this.setInstanceMapper();
                    }
                    setInstanceMapper() {
                        if (P.instanceKeyMapper.has(this.key)) throw new Error("重复的 storage key");
                        P.instanceKeyMapper.set(this.key, this);
                    }
                    write = async (e) => {
                        if (!e) return [{ message: "空数据" }];
                        e._writeStorageAt = Date.now();
                        try {
                            return [null, await F.setItem(this.key, e, this.type)];
                        } catch (e) {
                            return [e];
                        }
                    };
                    async read() {
                        try {
                            return [null, await F.getItem(this.key, this.type)];
                        } catch (e) {
                            return [e];
                        }
                    }
                    async getInitdata() {
                        const [e, t] = await this.read();
                        return e || (this.initData = t), this.initData;
                    }
                    async update(e) {
                        const [t, n] = await this.read();
                        if (t) return [t];
                        if (n && "object" == typeof n) {
                            const t = { ...n, ...e };
                            return await this.write(t);
                        }
                        return [{ data: n }];
                    }
                    async delete() {
                        try {
                            return [null, await F.removeItem(this.key, this.type)];
                        } catch (e) {
                            return [e];
                        }
                    }
                    async deleteWithKeep() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (0 === t.length) return [{ keys: t }];
                        const [i, o] = await this.read();
                        if (i) return [i];
                        if (o && "object" == typeof o) {
                            const e = {};
                            return (
                                t.forEach((t) => {
                                    e[t] = o[t];
                                }),
                                await this.write(e)
                            );
                        }
                        return [{ data: o }];
                    }
                    async deleteForLogout() {
                        return await this.delete();
                    }
                }
                new P(M.note), new P(M.search), new P(M.setting);
                const z = new P(M.icon),
                    D = new P(M.sync),
                    L = (new P(M.todo), new P(M.user));
                new P(M.wallpaper),
                    new P(M.notice),
                    new P(M.timerBirthday),
                    new P(M.timerFestival),
                    new P(M.timerYear),
                    new P(M.weather),
                    new P(M.hotsearch),
                    new P(M.calculator),
                    new P(M.payment),
                    new P(M.calendar),
                    new P(M.celebrity),
                    new P(M.worldcup),
                    new P(M.habit),
                    new P(M.exchangeRate),
                    new P(M.news),
                    new P(M.stock),
                    new P(M.game),
                    new P(M.history),
                    new P(M.movie),
                    new P(M.book),
                    new P(M.play),
                    new P(M.clock),
                    new P(M.worldClock),
                    new P(M.hotApp),
                    new P(M.nba),
                    new P(M.chatgpt),
                    new P(M.bookmarks),
                    new P(M.pageTurning),
                    P.getAllInitdata();
                var q = n(47712);
                let Q;
                !(function (e) {
                    (e.todo = "widget-todo"),
                        (e.note = "widget-note"),
                        (e.timerBirthday = "widget-timer-birthday"),
                        (e.timerFestival = "widget-timer-festival"),
                        (e.timerCountdown = "widget-timer-countdown"),
                        (e.timerMark = "widget-timer-mark"),
                        (e.timerYear = "widget-timer-year"),
                        (e.hotsearch = "widget-hotsearch"),
                        (e.weather = "widget-weather"),
                        (e.calculator = "widget-calculator"),
                        (e.calendar = "widget-calendar"),
                        (e.celebrity = "widget-celebrity"),
                        (e.worldcup = "widget-worldcup"),
                        (e.habit = "widget-habit"),
                        (e.system = "widget-system"),
                        (e.exchangeRate = "widget-exchange-rate"),
                        (e.news = "widget-news"),
                        (e.stock = "widget-stock"),
                        (e.history = "widget-history"),
                        (e.game = "widget-game"),
                        (e.movie = "widget-movie"),
                        (e.book = "widget-book"),
                        (e.play = "widget-play"),
                        (e.clock = "widget-clock"),
                        (e.worldClock = "widget-world-clock"),
                        (e.hotapp = "widget-hotapp"),
                        (e.nba = "widget-nba"),
                        (e.chatgpt = "widget-chatgpt"),
                        (e.bookmarks = "widget-bookmarks");
                })(Q || (Q = {}));
                const N = (0, q.Z)([
                        !c.Pl && { name: Q.chatgpt, title: "ChatAi", desc: "ChatAi是一个基于ChatGPT-3.5的聊天机器人，你可以和它聊天，也可以用它辅助你完成日常工作。", sizes: ["s", "m"], tags: ["information", "recreation"] },
                        { name: Q.weather, title: "天气", desc: "24小时预报、未来7天预报、城市查询，只需一个天气小组件，随时关注天气变化状况。", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.todo, title: "待办", desc: "通过待办事项来列出需要处理的事物，包括生活、工作或其他事项，让你轻松记住待办事项。", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.timerBirthday, title: "生日", desc: "添加生日小组件，能够帮助你记住家人、朋友的生日，时间顺序列表提醒，一目了然。", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.note, title: "笔记", desc: "通过丰富的编辑功能，记录你的见闻、灵感与思考，支持快捷指令键入格式和markdown格式。", sizes: ["s", "m", "l"], tags: ["util"] },
                        c.sM && { name: Q.hotsearch, title: "热搜", desc: "摸鱼神器，收录各大平台热搜、热榜或热文，热门事件热门话题跟踪，一个也不落下。", sizes: ["m", "l"], tags: ["information"] },
                        { name: Q.timerFestival, title: "节日", desc: "下一个节日将会是什么呢？节日小组件将重要节日按照顺序列表展示，帮助你做好节日规划安排。", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.timerCountdown, title: "倒计时", desc: "使用倒计时小组件，定义你的事件和活动，随时提醒你剩余时间节点。", sizes: ["s", "m", "l"], tags: ["util"], previewData: f },
                        { name: Q.timerMark, title: "纪念日", desc: "与TA相识、在一起多少天记录下来，数字的跳动，是一件浪漫的事情……", sizes: ["s", "m", "l"], tags: ["util"], previewData: m },
                        { name: Q.timerYear, title: "今年余额", desc: "时间如沙般难以握住，一年又一年，一日又一日，今年过去了多少还剩余多少？", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.calculator, title: "换算器", desc: "一款集计算器、房贷计算、个税计算、日期计算、进制转换和单位换算于一体的全能计算工具。", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.calendar, title: "日历", desc: "使用日历来跟踪倒数日、节假日、法定节假日、纪念日，不错过每一个重要的日子。", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.celebrity, title: "每日一言", desc: "每日一言，与更有趣的灵魂对话，为你的心灵注入光芒。", sizes: ["m", "l"], tags: ["information"] },
                        c.sM && { name: Q.news, title: "新闻", desc: "一览热点时事。", sizes: ["s", "m", "l"], tags: ["information"] },
                        !c.s$ && { name: Q.habit, title: "习惯养成", desc: "习惯养成，从今天开始。", sizes: ["s", "m", "l"], tags: ["util"] },
                        c.FH && !c.s$ && { name: Q.system, title: "系统状态", desc: "实时监测电脑当前的CPU、电池、内存的使用情况，一目了然。", sizes: ["m", "l"], tags: ["util"] },
                        !c.s$ && { name: Q.exchangeRate, title: "汇率", desc: "通过汇率小组件实时查看汇率牌价与趋势，当然，也能帮你根据当前汇率进行兑换计算。", sizes: ["s", "m", "l"], tags: ["information"] },
                        !c.s$ && { name: Q.stock, title: "股票", desc: "让您轻松关注股票和股市的动态，沪深、港股、美股全球市场实时行情。", sizes: ["s", "m", "l"], tags: ["information"] },
                        c.sM && { name: Q.history, title: "历史上的今日", desc: "看似寻常的每天，在历史上有着怎样的精彩故事呢？每天一条精选推送。", sizes: ["m", "l"], tags: ["information"] },
                        c.sM && { name: Q.movie, title: "电影日历", desc: "此刻电影日历，每天一部优秀电影。", sizes: ["m", "l"], tags: ["information", "recreation"] },
                        { name: Q.play, title: "休闲小游戏", desc: "轻松有趣的小游戏，摸鱼必备，切勿贪念被老板发现哦！", sizes: ["m", "l"], tags: ["recreation"], containerClass: "shadow-color-none overflow-visible" },
                        { name: Q.clock, title: "全屏时钟", desc: "可以替代屏保的时钟小组件，卡片式和数码两种时钟选择，即点即用。", sizes: ["s", "m", "l"], tags: ["util"] },
                        { name: Q.worldClock, title: "世界时钟", desc: "世界时钟，查询世界各地当前时间。", sizes: ["m", "l"], tags: ["util"] },
                        { name: Q.hotapp, title: "精品应用", desc: "分享最新鲜优秀的正版软件", sizes: ["m", "l"], tags: ["information"] },
                        { name: Q.nba, title: "NBA赛事", desc: "NBA赛程、比分、排名", sizes: ["s", "m", "l"], tags: ["information"] },
                        c.FH && !c.s$ && { name: Q.bookmarks, title: "书签管理", desc: "更高效、美观的书签管理", sizes: ["s"], tags: ["util"] },
                    ]),
                    R =
                        (N.map((e) => e.name),
                        M.hotsearch,
                        Q.hotsearch,
                        M.note,
                        Q.note,
                        M.timerBirthday,
                        Q.timerBirthday,
                        M.timerFestival,
                        Q.timerFestival,
                        M.timerYear,
                        Q.timerYear,
                        M.todo,
                        Q.todo,
                        M.weather,
                        Q.weather,
                        M.calculator,
                        Q.calculator,
                        M.exchangeRate,
                        Q.exchangeRate,
                        M.habit,
                        Q.habit,
                        M.stock,
                        Q.stock,
                        M.game,
                        Q.game,
                        M.movie,
                        Q.movie,
                        M.book,
                        Q.book,
                        M.play,
                        Q.play,
                        M.clock,
                        Q.clock,
                        M.worldClock,
                        Q.worldClock,
                        M.hotApp,
                        Q.hotapp,
                        M.nba,
                        Q.nba,
                        M.chatgpt,
                        Q.chatgpt,
                        M.bookmarks,
                        Q.bookmarks,
                        N.filter((e) => !!e.containerClass).reduce((e, t) => (e.set(t.name, t.containerClass), e), new Map()),
                        "622af28e7c5d1e54a2d1271d"),
                    Y = [
                        {
                            id: "category-1g8q0kd36yb7rq1g72oh269lzv4",
                            iconClass: "icon-zhuye",
                            name: "主页",
                            updateTime: 0,
                            children: (0, q.Z)([
                                { type: "widget", name: "纪念日", widgetSize: "l", widgetName: Q.timerMark, origin: "add", widgetData: m, id: "icon-1gai64em2rym5ttafcmxxx7ohuw", updateTime: 0 },
                                { type: "widget", name: "ChatGPT", widgetSize: "m", widgetName: Q.chatgpt, origin: "add", id: "icon-1gs9ibrlr0uy5pa97ny9ir85pyp", updateTime: 0 },
                                u > 9 && { type: "widget", name: "热搜", widgetSize: "m", widgetName: Q.hotsearch, origin: "add", id: "icon-1g8s5vs3qxhiflpughu7vp4m48r", updateTime: 0 },
                                { type: "widget", name: "天气", widgetSize: "s", widgetName: Q.weather, origin: "add", id: "icon-1g8s61g4b5fkox0qowum4yjp5bc", updateTime: 0 },
                                { type: "widget", name: "日历", widgetSize: "s", widgetName: Q.calendar, origin: "add", id: "icon-1gmsq34njpzpc3al4krevh5jg98", updateTime: 0 },
                                {
                                    id: "folder-1h07g6h5aw9whlgk73chmecmj3a",
                                    origin: "add",
                                    type: "folder-icon",
                                    name: "文件夹",
                                    folderSize: "medium",
                                    children: [
                                        {
                                            name: "哔哩哔哩",
                                            target: "http://www.bilibili.com/",
                                            type: "site",
                                            bgType: "image",
                                            bgColor: "rgba(0, 0, 0, 0)",
                                            bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/d8b62f4d64bda8800b1c788cd5ba3c68.png",
                                            origin: "622af28e7c5d1e54a2d12732",
                                            id: "icon-1g8s664ff5os3276x2ch6r9vowp",
                                            updateTime: 0,
                                        },
                                        {
                                            name: "抖音",
                                            target: "https://www.douyin.com",
                                            type: "site",
                                            bgType: "image",
                                            bgColor: "rgba(0, 0, 0, 0)",
                                            bgImage: GlobalGetApi + "https://infinitypro-img.infinitynewtab.com/custom-icon/8001dqh3p6ashqujabze1jzukbyung.png",
                                            origin: "630dd66558b016880e1b9096",
                                            id: "icon-1gnri1724vxo0e0jx7mill3gpww",
                                            updateTime: 0,
                                        },
                                        {
                                            name: "豆瓣",
                                            target: "http://www.douban.com",
                                            type: "site",
                                            bgType: "image",
                                            bgColor: "rgba(0, 0, 0, 0)",
                                            bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/e9b0df13819c1029fdc4287a6a83bf6c.png",
                                            origin: "622af28e7c5d1e54a2d12720",
                                            id: "icon-1g8s67njg3z2kn9f75eeoz7d3uv",
                                            updateTime: 0,
                                        },
                                        {
                                            name: "IMDb",
                                            target: "https://www.imdb.com/",
                                            type: "site",
                                            bgType: "image",
                                            bgColor: "rgba(0, 0, 0, 0)",
                                            bgImage: GlobalGetApi + "https://infinitypro-img.infinitynewtab.com/custom-icon/8001cq336i4brbthw6kg0sdhdcl5gg.png",
                                            origin: "630dd66358b016880e1b6f99",
                                            id: "icon-1h07gcjr0kwtdpass4bliifl0wk",
                                            updateTime: 1683879251808,
                                        },
                                        {
                                            name: "爱奇艺",
                                            target: "https://www.iqiyi.com",
                                            type: "site",
                                            bgType: "image",
                                            bgColor: "rgba(0, 0, 0, 0)",
                                            bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/226c6aff617dbc253ce26d23be07c446.png",
                                            origin: "622af28e7c5d1e54a2d12c91",
                                            id: "icon-1gnriafneb5pfstcicyal3gjkfk",
                                            updateTime: 0,
                                        },
                                        {
                                            name: "腾讯视频",
                                            target: "https://v.qq.com/",
                                            type: "site",
                                            bgType: "image",
                                            bgColor: "rgba(0, 0, 0, 0)",
                                            bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/b8d1c93c53412b30a35217cff865dcd7.png",
                                            origin: "630dd65b58b016880e1b0b7b",
                                            id: "icon-1gnrib694a6lgfigh9mrqqdxybu",
                                            updateTime: 0,
                                        },
                                    ],
                                    updateTime: 0,
                                },
                                { type: "widget", name: "休闲小游戏", widgetSize: "m", widgetName: Q.play, origin: "add", id: "icon-1got3jlj7qhxaek52effsumr21n", updateTime: 0 },
                                { type: "widget", name: "换算器", widgetSize: "s", widgetName: Q.calculator, origin: "add", id: "icon-1gmsq330jnbkv5h9hzvqb96kl65", updateTime: 0 },
                                {
                                    name: "秘塔写作猫",
                                    target: "https://xiezuocat.com/?s=wetab",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1h07j6i0901cv6kzy83wh0eqv41.png",
                                    origin: "630dd66658b016880e1b9407",
                                    id: "icon-1h07jbsuo5x2bofl6hdmtxgrd4l",
                                    updateTime: 0,
                                },
                                {
                                    name: "爱淘宝",
                                    target: "https://ai.taobao.com/?pid=mm_50570328_39070332_145428725",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/346647fb95fbac4d303c93fa0a4936d3.png",
                                    origin: "622af28e7c5d1e54a2d12d9d",
                                    id: "icon-1g8s66sqvfy87kzpphjx8xlx9n2",
                                    updateTime: 0,
                                },
                                {
                                    name: "FlowUs",
                                    target: "https://flowus.cn/product?promotionChannel=GW_wetab",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(255, 255, 255, 1)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gubel7tvg6z5l4l4xarvf2zkkq.png",
                                    origin: "643f35f5f0ad9426f5daaa18",
                                    id: "icon-1gubeltck76a0wd20dyhnwg1rsq",
                                    updateTime: 0,
                                },
                                {
                                    name: "百度",
                                    target: "https://www.baidu.com/?tn=44004473_8_oem_dg",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/c9f7546ad597dd7fb53e8129b6c07877.png",
                                    origin: R,
                                    id: "icon-1g8s78hca58bhxv6c80kf84wosj",
                                    updateTime: 0,
                                },
                                {
                                    name: "新浪微博",
                                    target: "http://weibo.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/0f2ab700f8fff5b6e9ebc7d6a976981f.png",
                                    origin: "622af28e7c5d1e54a2d12c6d",
                                    id: "icon-1g8s7ejhf560bsujdtxj1zyhe5m",
                                    updateTime: 0,
                                },
                                {
                                    name: "知乎",
                                    target: "https://www.zhihu.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2b89ebe968d8cafe77a5c587daa79c7f.png",
                                    origin: "622af28e7c5d1e54a2d12d35",
                                    id: "icon-1g8s67miovq9qtby8d22v2g288r",
                                    updateTime: 0,
                                },
                                {
                                    name: "即时设计",
                                    target: "https://js.design/?source=wetab&plan=home",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gtqsbv9g1qfg7mgn3ug9nn2ltz.png",
                                    origin: "6436b9f8f0ad9426f5daa96b",
                                    id: "icon-1gtqukjb1fwfi8sj6vatm0zccys",
                                    updateTime: 0,
                                },
                                u > 9 && {
                                    name: "天猫精选",
                                    target:
                                        "https://s.click.taobao.com/t?infinityType=tmall&e=m%3D2%26s%3DV5ucSP%2F1kT4cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRBynALhehQ4RitN3%2FurF3xNWm%2FATOfjswMAKinyMfntv%2FFgqkVH8133BMlVy3qlGE2srC8Mk09eQgZss1jm63jcHtRpEUy6RPalRWTdFmFpJPwiig1bxLMnyi1UQ%2F17I10hO9fBPG8oXH%2BQH9e66Y4%3D",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/be0ab26cf4dc6239c98791f7b18b633a.png",
                                    origin: "622af28e7c5d1e54a2d12dcf",
                                    id: "icon-1g8s7jhjhz9pd8656tb20ccczb4",
                                    updateTime: 0,
                                },
                                {
                                    name: "京东商城",
                                    target: "https://www.infinitynewtab.com/jd.pro.html ",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/cee009549b352def723ba09d6da4b742.png",
                                    origin: "622af28e7c5d1e54a2d12dc9",
                                    id: "icon-1g8s67eh0dnmckwgevcwkvpli9k",
                                    updateTime: 0,
                                },
                                {
                                    name: "携程网",
                                    target: "http://www.ctrip.com/?allianceid=1050724&sid=1786019",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/1502895222082.png",
                                    origin: "622af28e7c5d1e54a2d12da5",
                                    id: "icon-1g8s6a2abxm8bet7qhh3u4gwm2p",
                                    updateTime: 0,
                                },
                                {
                                    name: "稿定设计",
                                    target: "https://www.gaoding.com/utms/970392bdfeed4e8680a0ffc585dd1bb6",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/1676018043738.png",
                                    origin: "63e60b4e4da0b2b1235c2d0e",
                                    id: "icon-1gotab1sd2waj137ki1eedu278r",
                                    updateTime: 0,
                                },
                                {
                                    name: "狐猴浏览器",
                                    target: "https://lemurbrowser.com/app/zh/?hmsr=wetabhomepage ",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/1676019046254.png",
                                    origin: "63e60d874da0b2b1235c2d0f",
                                    id: "icon-1gotabbsg9hnux7r8vl5au2gr1x",
                                    updateTime: 0,
                                },
                            ]),
                        },
                        {
                            id: "category-1g8q0kkicdt0jp7bwr4yxowc7mg",
                            iconClass: "icon-sheji",
                            name: "设计",
                            updateTime: 0,
                            children: [
                                {
                                    name: "稿定设计",
                                    target: "https://www.gaoding.com/utms/970392bdfeed4e8680a0ffc585dd1bb6",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/1676018043738.png",
                                    origin: "63e60b4e4da0b2b1235c2d0e",
                                    id: "icon-1gotab1sd2waj137ki1eedu2321",
                                    updateTime: 0,
                                },
                                {
                                    name: "即时设计",
                                    target: "https://js.design/?source=wetab&plan=design",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gtqsbv9g1qfg7mgn3ug9nn2ltz.png",
                                    origin: "6436b9f8f0ad9426f5daa96b",
                                    id: "icon-1gtqukjb1fwfi8sj6vatm0zc321",
                                    updateTime: 0,
                                },
                                {
                                    name: "花瓣",
                                    target: "http://huaban.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/fa2e802d92fb3b02a043aea4f5f404a3.png",
                                    origin: "622af28e7c5d1e54a2d12745",
                                    id: "icon-1g8s6atfjxtojkolhbiunb3gg3q",
                                    updateTime: 0,
                                },
                                {
                                    name: "优设-UISDC: 优秀网页设",
                                    target: "http://www.uisdc.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/b647f5965ccc3ffc71d3aa6aac0eeb4a.png",
                                    origin: "622af28e7c5d1e54a2d12ce3",
                                    id: "icon-1g8s6n6605tp2wrv682t7ffnv5j",
                                    updateTime: 0,
                                },
                                {
                                    name: "Pinterest",
                                    target: "https://www.pinterest.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/40ccf61bdd88242bed21836b83b8c65b.png",
                                    origin: "622af28e7c5d1e54a2d12c66",
                                    id: "icon-1g8s6ni6ocp5ujb5cptibhd04p1",
                                    updateTime: 0,
                                },
                                {
                                    name: "站酷 (ZCOOL) - 设计师",
                                    target: "http://www.zcool.com.cn/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/usericon/2e98e9396fce71e1db1d7c222f5cb898.png",
                                    origin: "622af28e7c5d1e54a2d12b01",
                                    id: "icon-1g8s6nru8j9snfaj0zsmmwbffjr",
                                    updateTime: 0,
                                },
                                {
                                    name: "500px",
                                    target: "https://500px.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a573a1affeb9626b30a024fa23fae232.png",
                                    origin: "622af28e7c5d1e54a2d12d95",
                                    id: "icon-1g8s6o0080p3a09rc100f6je8gd",
                                    updateTime: 0,
                                },
                                {
                                    name: "Dribbble",
                                    target: "https://dribbble.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127093418.png",
                                    origin: "622af28e7c5d1e54a2d12d97",
                                    id: "icon-1g8s6o5k06jzpqyrzw9yweho070",
                                    updateTime: 0,
                                },
                                {
                                    name: "ArtStation",
                                    target: "https://www.artstation.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/150327085725.png",
                                    origin: "622af28e7c5d1e54a2d128f9",
                                    id: "icon-1g8s6od4gorpqelp27gs0jwbzdc",
                                    updateTime: 0,
                                },
                                {
                                    name: "Behance",
                                    target: "http://behance.com/bacosta",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/usericon/9caab10d044da062122a77b94d94a2a4.png",
                                    origin: "622af28e7c5d1e54a2d12809",
                                    id: "icon-1g8s6ql6bizqee4ic4c7arjc08x",
                                    updateTime: 0,
                                },
                            ],
                        },
                        {
                            id: "category-1g8q0knpscgq24ws3sg5egbdtou",
                            iconClass: "icon-chengxu",
                            name: "程序",
                            updateTime: 0,
                            children: [
                                {
                                    name: "果核剥壳",
                                    target: "https://www.ghxi.com/?utm_source=wetab",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/ghxi_1677135775783.png",
                                    origin: "63f7121c3969b024ecdfe2f6",
                                    id: "icon-1gpuibflh6kc91q9sk8zskzmvd6",
                                    updateTime: 0,
                                },
                                {
                                    name: "小众软件",
                                    target: "https://www.appinn.com/?utm_source=wetab",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/appinn_1677135775783.png",
                                    origin: "63f711b23969b024ecdfe2f5",
                                    id: "icon-1gpuicbr5k866g8nd9himlcldhw",
                                    updateTime: 0,
                                },
                                {
                                    name: "GitHub",
                                    target: "https://github.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/eb306ae2b122e7dde6e87fdf2970b17e.png",
                                    origin: "622af28e7c5d1e54a2d126fa",
                                    id: "icon-1g8s7gnco9ddxfnlqvbcr5jqt1q",
                                    updateTime: 0,
                                },
                                {
                                    name: "V2EX",
                                    target: "http://www.v2ex.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/cc9b4b985a4a2c7d034dc18bf21ea019.png",
                                    origin: "622af28e7c5d1e54a2d12be7",
                                    id: "icon-1g9jt36iq7hx22bjwlmn0f8vqpq",
                                    updateTime: 0,
                                },
                                {
                                    name: "蓝点网",
                                    target: "https://www.landiannews.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/150405105756.png",
                                    origin: "630dd66358b016880e1b6fd3",
                                    id: "icon-1got5p8hkvbqb7kza383xr7mrcl",
                                    updateTime: 0,
                                },
                                {
                                    name: "码云",
                                    target: "http://git.oschina.net/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/1ba16d6fdf8ccd6a07eca98a9c908a21.png",
                                    origin: "622af28e7c5d1e54a2d12d52",
                                    id: "icon-1g9jt811fqio56gpy3nhbrjzll5",
                                    updateTime: 0,
                                },
                                {
                                    name: "慕课网",
                                    target: "http://www.imooc.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/6e5da7bc6eaf3ecce1ca1affcf20fca5.png",
                                    origin: "622af28e7c5d1e54a2d126fd",
                                    id: "icon-1g9jtcbv8v1k84yqct8l3e3hf4o",
                                    updateTime: 0,
                                },
                                {
                                    name: "开源中国",
                                    target: "http://www.oschina.net/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/8059449523d434fc2b5a60f0aba0670c.png",
                                    origin: "622af28e7c5d1e54a2d12b55",
                                    id: "icon-1g9jtdhr0lbplitqs1xtoipch9v",
                                    updateTime: 0,
                                },
                                {
                                    name: "CSDN",
                                    target: "http://www.csdn.net/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/226d9bd6e7176a22d1696d751947a178.png",
                                    origin: "622af28e7c5d1e54a2d129cd",
                                    id: "icon-1g8s7eqveirhzg0r37fwrby56gc",
                                    updateTime: 0,
                                },
                                {
                                    name: "人人都是产品经理",
                                    target: "http://www.woshipm.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/8bffc9cf5c9f6e5980bf21e7af3a4462.png",
                                    origin: "622af28e7c5d1e54a2d12d08",
                                    id: "icon-1g8s7842bizrwubewdpovko6bxy",
                                    updateTime: 0,
                                },
                                {
                                    name: "什么值得读",
                                    target: "https://shenmezhidedu.com/?from=wetab",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gtqr8lr31texjyjyepfpa0zyvr.png",
                                    origin: "630dd66558b016880e1b8d3f",
                                    id: "icon-1gtqrhqsgqtuajl1q7gcljzvd1l",
                                    updateTime: 0,
                                },
                            ],
                        },
                        {
                            id: "category-1g8q0krkbktusp8iy05pniynhp4",
                            iconClass: "icon-gouwu",
                            name: "购物",
                            updateTime: 0,
                            children: [
                                {
                                    name: "Amazon",
                                    target: "https://inftab.com/amazon/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/e67eed044bf08fbcac16a0527fcc165a.png",
                                    origin: "622af28e7c5d1e54a2d12da1",
                                    id: "icon-1g8s7j85i7i6fx9yrqdnw34fjj4",
                                    updateTime: 0,
                                },
                                {
                                    name: "淘宝网",
                                    target: "https://ai.taobao.com/?pid=mm_50570328_39070332_145428725",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/05dfef464cb99231a44521fde12adc80.png",
                                    origin: "622af28e7c5d1e54a2d12db6",
                                    id: "icon-1g8s6afo2w5jm7y945jlhea6n4z",
                                    updateTime: 0,
                                },
                                {
                                    name: "当当网",
                                    target: "http://union.dangdang.com/transfer.php?from=P-319540-infinity&amp;amp;amp;ad_type=10&amp;amp;amp;sys_id=1&amp;amp;amp;backurl=http://www.dangdang.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/513b4167dd3c9bfd83f6ceae56d7bf7f.png",
                                    origin: "622af28e7c5d1e54a2d12da8",
                                    id: "icon-1g8s7akil7kgozgjf0dk7h1mh6o",
                                    updateTime: 0,
                                },
                                {
                                    name: "什么值得买",
                                    target: "http://www.smzdm.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/82083b3712985e0aded08d10e50cb902.png",
                                    origin: "622af28e7c5d1e54a2d12756",
                                    id: "icon-1g8s7jo11jvirlcksbc0cy9v8po",
                                    updateTime: 0,
                                },
                                {
                                    name: "飞猪",
                                    target:
                                        "https://s.click.taobao.com/t?infinityType=alitrip&e=m%3D2%26s%3DgWbgDzAE0zMcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAg8q8DF9oG0OjiRkxbhwQNwqDrUHgVoNpvVKm9Ob0IT9VuIJQ3hZR078JvDfi2GotpoTgr1w%2FQDpNgYL1oa%2FqkrlSg55GVX5wQpJxXZWmPBrLyo8ABgHx20aHks2%2FfPFu3EqY%2Bakgpmw",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a7ed1a2bd88d75ed6a04c8a7aeb26097.png",
                                    origin: "622af28e7c5d1e54a2d12da3",
                                    id: "icon-1g8s7jta1hxeg95e9om4z6pky6j",
                                    updateTime: 0,
                                },
                                {
                                    name: "识货",
                                    target: "http://www.shihuo.cn/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/1c3dda56f26a98de85d4e55c87cd7622.png",
                                    origin: "622af28e7c5d1e54a2d12c65",
                                    id: "icon-1g8s7k2opy8en6s2vcsgzzy376d",
                                    updateTime: 0,
                                },
                            ],
                        },
                    ],
                    U = [
                        {
                            id: "category-1g8q0kd36yb7rq1g72oh269lzv4",
                            iconClass: "icon-zhuye",
                            name: "主页",
                            updateTime: 0,
                            children: [
                                { type: "widget", name: "生日", widgetSize: "l", widgetName: Q.timerBirthday, origin: "add", id: "icon-1g8s6fddgfpf88hbu79jz7c3dss", updateTime: 0 },
                                { type: "widget", name: "倒计时", widgetSize: "m", widgetName: Q.timerCountdown, origin: "add", widgetData: f, id: "icon-1g8s63vbgzduwckgrrvydofrogh", updateTime: 0 },
                                { type: "widget", name: "纪念日", widgetSize: "m", widgetName: Q.timerMark, origin: "add", widgetData: m, id: "icon-1gai64em2rym5ttafcmxxx7ohuw", updateTime: 0 },
                                { type: "widget", name: "今年余额", widgetSize: "m", widgetName: Q.timerYear, origin: "add", id: "icon-1gai798l0apnbtop5ny9kn16y48", updateTime: 0 },
                                { type: "widget", name: "笔记", widgetSize: "s", widgetName: Q.note, origin: "add", id: "icon-1g8q0q0camb5eif8m3v1686w2td", updateTime: 0 },
                                { type: "widget", name: "待办", widgetSize: "s", widgetName: Q.todo, origin: "add", id: "icon-1g8q0ppucelj7k7etbzgcm6a1tx", updateTime: 0 },
                                {
                                    name: "Instagram",
                                    target: "http://www.instagram.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a6d0e807a4a514867dd675cbc63890ed.png",
                                    origin: "622af28e7c5d1e54a2d12726",
                                    id: "icon-1ggua8dmdpoljp3hvdw3v43a4ra",
                                    updateTime: 0,
                                },
                                {
                                    name: "Facebook",
                                    target: "https://www.facebook.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/4277652ad8ce6b2d8377b092ad31507c.png",
                                    origin: "622af28e7c5d1e54a2d12722",
                                    id: "icon-1ggua8ffck1vsqt8a7gujlf2nnp",
                                    updateTime: 0,
                                },
                                { type: "widget", name: "天气", widgetSize: "s", widgetName: Q.weather, origin: "add", id: "icon-1g8s61g4b5fkox0qowum4yjp5bc", updateTime: 0 },
                                {
                                    name: "YouTube",
                                    target: "https://www.youtube.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a6d94620efabfdc901dc1d28dcbcb655.png",
                                    origin: "622af28e7c5d1e54a2d12ca4",
                                    id: "icon-1ggua8u6s4t15v3wacn33v59eet",
                                    updateTime: 0,
                                },
                                {
                                    name: "Twitter",
                                    target: "https://www.twitter.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/8f03e3943a4b730e328bb1d1906e5856.png",
                                    origin: "622af28e7c5d1e54a2d12734",
                                    id: "icon-1ggua8s2l1m609rnza8z8ba8es5",
                                    updateTime: 0,
                                },
                                {
                                    name: "Gmail",
                                    target: "https://mail.google.com/mail/u/0/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/7b6cee8dfbfeff522a7668c924429ad7.png",
                                    origin: "622af28e7c5d1e54a2d12c78",
                                    id: "icon-1ggua8oksg9j0vh958tfqh5n8cb",
                                    updateTime: 0,
                                },
                                {
                                    name: "Netflix",
                                    target: "http://www.netflix.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/7ece00d008c84a85c61e2ff06ef62134.png",
                                    origin: "622af28e7c5d1e54a2d12718",
                                    id: "icon-1ggua999j23999wqmmbb0pja62v",
                                    updateTime: 0,
                                },
                                {
                                    name: "Google",
                                    target: "https://www.google.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/73aa787ba15e632af86263a7649d9d26.png",
                                    origin: "622af28e7c5d1e54a2d12c79",
                                    id: "icon-1ggua97n4m8obbnystn2w51ntxa",
                                    updateTime: 0,
                                },
                                {
                                    name: "TED: Ideas worth spreading",
                                    target: "http://www.ted.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/usericon/5d496982170c473e70442271b33df846.png",
                                    origin: "622af28e7c5d1e54a2d1286c",
                                    id: "icon-1gguaarmct65og99acsl9jp6a1i",
                                    updateTime: 0,
                                },
                                {
                                    name: "Wikipedia",
                                    target: "https://www.wikipedia.org/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127093244.png",
                                    origin: "622af28e7c5d1e54a2d12d91",
                                    id: "icon-1gguaa4k4bq9743f45hi60f9ja7",
                                    updateTime: 0,
                                },
                                {
                                    name: "Snapchat",
                                    target: "https://www.snapchat.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/usericon/2d101f23b606f3f14a8b134ae93c0903.png",
                                    origin: "622af28e7c5d1e54a2d12d70",
                                    id: "icon-1gguaacasm4rwp99mo09ructnrf",
                                    updateTime: 0,
                                },
                                {
                                    name: "IMDB",
                                    target: "http://www.imdb.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127092223.png",
                                    origin: "622af28e7c5d1e54a2d12725",
                                    id: "icon-1gguaaqnct4fd2h5m1mvlr2cm9j",
                                    updateTime: 0,
                                },
                                {
                                    name: "linkedin",
                                    target: "https://es.linkedin.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/usericon/fa3a83e45e812b26da5ec80cb1db823b.png",
                                    origin: "622af28e7c5d1e54a2d12b29",
                                    id: "icon-1gguaer0jyhuun7y7c3e70fapo6",
                                    updateTime: 0,
                                },
                                {
                                    name: "CNN",
                                    target: "http://www.cnn.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/150202041300.png",
                                    origin: "622af28e7c5d1e54a2d12dcb",
                                    id: "icon-1gguaf20rlbxg2lut6y9gu8schm",
                                    updateTime: 0,
                                },
                                {
                                    name: "Flipboard",
                                    target: "https://flipboard.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/usericon/4b053996445e38f1be8f3541f8eb5d3c.png",
                                    origin: "622af28e7c5d1e54a2d12b08",
                                    id: "icon-1gguafj0s9pvknsp0k1k13nv4s4",
                                    updateTime: 0,
                                },
                                {
                                    name: "Yandex",
                                    target: "http://www.yandex.ru/?clid=2324057",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/8229c540b1f8585c06a1bdfb35984979.png",
                                    origin: "622af28e7c5d1e54a2d12766",
                                    id: "icon-1gguafvqvpwpx7yhv507p2qzpdi",
                                    updateTime: 0,
                                },
                                {
                                    name: "9gag",
                                    target: "https://9gag.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/usericon/2ca84512c35a9aad05abee27e481dcc7.png",
                                    origin: "622af28e7c5d1e54a2d1283d",
                                    id: "icon-1gguagccgxs1158cp6mgggf4s74",
                                    updateTime: 0,
                                },
                            ],
                        },
                        {
                            id: "category-1gh034ki1q6kc7nt6fac9qnxhr7",
                            iconClass: "icon-yule",
                            name: "Recreation",
                            updateTime: 0,
                            children: [
                                {
                                    name: "Steam",
                                    target: "http://store.steampowered.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: GlobalGetApi + "https://infinitypro-img.infinitynewtab.com/custom-icon/9001chjhi3te5c95m8bbc8sd5wddd1.png",
                                    origin: "630dd66058b016880e1b4c86",
                                    id: "icon-1gh037jsd4on1qi6nykdm7qjjuy",
                                    updateTime: 0,
                                },
                                {
                                    name: "Uplay",
                                    target: "https://uplay.ubisoft.com/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: GlobalGetApi + "https://infinitypro-img.infinitynewtab.com/custom-icon/8001e8ruhql25nq2dssknar8w7kdhk.png",
                                    origin: "630dd66458b016880e1b85c3",
                                    id: "icon-1gh03fmabubg589hl7e2jn8yisf",
                                    updateTime: 0,
                                },
                                {
                                    name: "Origin",
                                    target: "https://origin.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: GlobalGetApi + "https://infinitypro-img.infinitynewtab.com/custom-icon/8001d5kkfhg19c6tzp092tzhoj4khx.png",
                                    origin: "630dd66558b016880e1b8efd",
                                    id: "icon-1gh03qcbgma12oljklcv8w6lkuz",
                                    updateTime: 0,
                                },
                                {
                                    name: "PlayStation",
                                    target: "http://www.PlayStation.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127101047.png",
                                    origin: "622af28e7c5d1e54a2d12dc3",
                                    id: "icon-1gh041cuntr6v9gjc62z87iv31y",
                                    updateTime: 0,
                                },
                                {
                                    name: "Epic Games",
                                    target: "http://epicgames.com",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: GlobalGetApi + "https://infinitypro-img.infinitynewtab.com/custom-icon/8001cmggv7bsnc11qmmc7qyib061bf.png",
                                    origin: "630dd66258b016880e1b5eaf",
                                    id: "icon-1gh04htvcjebf4fi3tzareivfxd",
                                    updateTime: 0,
                                },
                            ],
                        },
                        {
                            id: "category-1g8q0krkbktusp8iy05pniynhp4",
                            iconClass: "icon-gouwu",
                            name: "购物",
                            updateTime: 0,
                            children: [
                                {
                                    name: "eBay",
                                    target: "https://www.ebay.com?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338095340&customid=infinity&toolid=10001&mkevt=1",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/c11671f9b92cd56a5ef44aa0ea36e099.png",
                                    origin: "622af28e7c5d1e54a2d12da9",
                                    id: "icon-1ggua9npsj7mxpr4g3sojn7kg5a",
                                    updateTime: 0,
                                },
                                {
                                    name: "Amazon",
                                    target: "https://inftab.com/amazon/",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/icon/cbbce9c89098a7b7b4e27fde39bb492e.png",
                                    origin: "622af28e7c5d1e54a2d12f05",
                                    id: "icon-1ggua885es1oxkw0knykzhu4xhf",
                                    updateTime: 0,
                                },
                                {
                                    name: "Booking",
                                    target: "https://www.booking.com/index.html?aid=1267011",
                                    type: "site",
                                    bgType: "image",
                                    bgColor: "rgba(0, 0, 0, 0)",
                                    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/83e58c13ed40dc8393297d43d2639cce.png",
                                    origin: "622af28e7c5d1e54a2d12ce0",
                                    id: "icon-1gh02u4ht6qq81ta6jb8pvew2ft",
                                    updateTime: 0,
                                },
                            ],
                        },
                    ],
                    V = c.sM ? Y : U,
                    J = c.sM
                        ? [
                              "icon-1g8s78hca58bhxv6c80kf84wosj",
                              "icon-1g8s67miovq9qtby8d22v2g288r",
                              "icon-1g8s66sqvfy87kzpphjx8xlx9n2",
                              "icon-1g8s67eh0dnmckwgevcwkvpli9k",
                              "icon-1g8s6a2abxm8bet7qhh3u4gwm2p",
                              "icon-1g8s664ff5os3276x2ch6r9vowp",
                          ]
                        : [
                              "icon-1ggua8oksg9j0vh958tfqh5n8cb",
                              "icon-1gguaacasm4rwp99mo09ructnrf",
                              "icon-1ggua8dmdpoljp3hvdw3v43a4ra",
                              "icon-1ggua999j23999wqmmbb0pja62v",
                              "icon-1ggua8s2l1m609rnza8z8ba8es5",
                              "icon-1ggua8ffck1vsqt8a7gujlf2nnp",
                          ];
                var W = n(96073),
                    G = n(29445),
                    H = n(35427),
                    K = n(23220),
                    X = n(89218),
                    Z = n(81198),
                    $ = n(94209);
                const ee = { class: "step-1" },
                    te = { class: "h-[44px] border-b-[1px] border-color-m2/5 text-center text-[16px] leading-[44px] text-color-t1" },
                    ne = { class: "px-[24px] pt-[24px]" },
                    ie = { class: "mt-[26px]" },
                    oe = { class: "footer mt-[22px] flex justify-end" },
                    re = (0, a.aZ)({
                        __name: "step-1",
                        emits: ["on-success"],
                        setup(e, t) {
                            let { emit: n } = t;
                            const i = (0, G.iH)(),
                                o = (0, G.iH)({ name: "", target: "", bgType: "color", type: "site", origin: "popup", bgColor: "", bgText: "" }),
                                r = () => {
                                    window.close();
                                },
                                s = (0, G.iH)([]),
                                c = (0, G.iH)(0),
                                l = () => {
                                    n("on-success", { icon: { ...o.value, bgColor: i.value.curColor, bgText: i.value.iconName }, group: s.value[c.value].id });
                                };
                            (0, a.bv)(async () => {
                                d();
                                const [e, t] = await z.read();
                                if (!e) {
                                    const e = (null == t ? void 0 : t.icons) || V;
                                    s.value = e.map((e) => ({ id: e.id, text: e.name }));
                                }
                            });
                            const d = () => {
                                chrome.tabs.query({ currentWindow: !0, active: !0 }, (e) => {
                                    let [t] = e;
                                    (o.value.target = t.url), (o.value.name = t.title), t.title.length > 2 ? (o.value.bgText = t.title.substring(0, 2)) : (o.value.bgText = t.title), i.value.resetValue(o.value.bgText);
                                });
                            };
                            return (e, t) => {
                                const n = Z.Z,
                                    d = X.Z,
                                    u = K.Z,
                                    g = H.Z;
                                return (
                                    (0, a.wg)(),
                                    (0, a.iD)("section", ee, [
                                        (0, a._)("h1", te, (0, $.toDisplayString)("添加图标"), 1),
                                        (0, a._)("div", ne, [
                                            (0, a.Wm)(n, { value: o.value.name, "onUpdate:value": t[0] || (t[0] = (e) => (o.value.name = e)), icon: "icon-title_icon", placeholder: "名称" }, null, 8, ["value", "placeholder"]),
                                            (0, a.Wm)(d, { active: c.value, "onUpdate:active": t[1] || (t[1] = (e) => (c.value = e)), class: "mt-[16px]", icon: "icon-group", options: s.value, placeholder: "分组", width: 120 }, null, 8, [
                                                "active",
                                                "options",
                                                "placeholder",
                                            ]),
                                            (0, a._)("div", ie, [(0, a.Wm)(u, { ref_key: "$colorIcon", ref: i, icon: o.value }, null, 8, ["icon"])]),
                                            (0, a._)("div", oe, [
                                                (0, a.Wm)(g, { type: "main", class: "mr-[12px] bg-color-b3 dark:bg-opacity-20", onClick: r }, { default: (0, a.w5)(() => [(0, a.Uk)((0, $.toDisplayString)("取消"), 1)]), _: 1 }),
                                                (0, a.Wm)(g, { type: "primary", onClick: l }, { default: (0, a.w5)(() => [(0, a.Uk)((0, $.toDisplayString)("确定"), 1)]), _: 1 }),
                                            ]),
                                        ]),
                                    ])
                                );
                            };
                        },
                    });
                var ae = n(52940);
                const se = { class: "step-2 flex flex-col items-center bg-color-white/90 pt-[140px]" },
                    ce = ["src"],
                    le = { class: "mt-[-10px] text-color-t2" },
                    de = (0, a.aZ)({
                        __name: "step-2",
                        setup: (e) => (e, t) => (
                            (0, a.wg)(), (0, a.iD)("section", se, [(0, a._)("img", { class: "h-[160px] w-[160px]", src: (0, G.SU)(ae), alt: "" }, null, 8, ce), (0, a._)("div", le, (0, $.toDisplayString)("添加完成"), 1)])
                        ),
                    }),
                    ue = { class: "relative h-[500px] w-[400px]" },
                    ge = (0, a.aZ)({
                        __name: "popup",
                        setup(e) {
                            const t = (0, G.iH)(1),
                                n = async (e) => {
                                    const n = Date.now();
                                    await i(e, n),
                                        await o(n),
                                        (t.value = 2),
                                        W.f.sendEvent("add-icon-popup", (0, p.Si)(e.icon.target), e.icon.target),
                                        setTimeout(() => {
                                            window.close();
                                        }, 2500);
                                },
                                i = async (e, t) => {
                                    const [n, i] = await z.read();
                                    if (n) return;
                                    const o = (null == i ? void 0 : i.icons) || V;
                                    o.forEach((n) => {
                                        n.id === e.group && (n.children.push({ ...e.icon, id: (0, p.kb)("icon-"), updateTime: t }), (n.updateTime = t));
                                    }),
                                        i ? await z.update({ icons: o, updateCloudTime: t }) : await z.write({ icons: o, dockIdList: J }),
                                        s.y.post("all:tabs-restore-storage", z.key);
                                },
                                o = async (e) => {
                                    const [t, n] = await L.read();
                                    if (!t && null != n && n.isLogin) {
                                        const [t, n] = await D.read();
                                        if (t) return;
                                        if (null != n && n.firstRestoreSuccess) {
                                            const t = { datas: { ...n.autoBackupPipe.datas, [z.key]: e }, time: e };
                                            await D.update({ autoBackupPipe: t }), s.y.post("all:tabs-restore-storage", D.key);
                                        }
                                    }
                                };
                            return (
                                (0, a.bv)(() => {
                                    W.f.sendPageView({ page: "popup" });
                                }),
                                (e, i) => (
                                    (0, a.wg)(),
                                    (0, a.iD)("section", ue, [(0, a.Wm)(re, { class: "relative z-10", onOnSuccess: n }), 2 === t.value ? ((0, a.wg)(), (0, a.j4)(de, { key: 0, class: "absolute inset-0 z-20" })) : (0, a.kq)("", !0)])
                                )
                            );
                        },
                    });
                var pe = n(4);
                const fe = (e) => {
                    const t = `\n  body,\n  ::before,\n  ::after {\n    ${Object.keys(e)
                            .map((t) => `${t}:${e[t]}`)
                            .join(";")}\n   }\n  `,
                        n = document.querySelector("#theme_style");
                    if (n) n.innerHTML = t;
                    else {
                        const e = document.createElement("style");
                        (e.id = "theme_style"), (e.innerHTML = t), document.head.insertAdjacentElement("beforeend", e);
                    }
                };
                (async (e) => {
                    let t;
                    t = e ? (e.followSystem || !e.theme ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : e.theme) : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    const n = { ...pe.base, ...pe[t] };
                    fe(n), "dark" === t ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
                })({ theme: "light" }),
                    (window.i18n = chrome.i18n.getMessage);
                const me = (0, o.createApp)(ge);
                (0, r.f)(me), me.use(i.Z), me.mount("#popup");
            },
            63477: (e, t, n) => {
                n.d(t, { Em: () => c, LQ: () => s, Si: () => p, cp: () => d, em: () => g, hq: () => u, kb: () => l });
                n(70435), n(74003), n(80661), n(55332);
                var i = n(18509),
                    o = n.n(i),
                    r = (n(1585), n(34906)),
                    a = n(44482);
                const s = (e) => "[object Function]" === Object.prototype.toString.call(e);
                function c(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                    if (!e) return e;
                    if ("wallpaper" === t && e.includes(".svg")) return e;
                    if (e.endsWith(".svg")) return e;
                    !e.includes("?") || e.includes("imageView2") || e.includes("imageMogr2") ? (e += "?") : (e += "&");
                    const i = 3840;
                    let o;
                    const s = (0, r.Z)((0, a.Z)(window.devicePixelRatio || 2), 2, 3);
                    if ("wallpaper" === t) o = (0, r.Z)((0, a.Z)(Math.max(window.screen.width, window.screen.height)), 500, i) * s;
                    else {
                        const e = Math.floor(n * s);
                        o = Math.min(e, i);
                    }
                    const c = "/format/webp";
                    switch (t) {
                        case "icon":
                            return e + `imageMogr2/thumbnail/${o}x${c}/blur/1x0/quality/100|imageslim`;
                        case "wallpaper":
                            return e + `imageView2/2/w/${o}${c}/interlace/1`;
                        case "default":
                            return e + `imageView2/2/w/${o}${c}`;
                    }
                }
                function l(e) {
                    return (function (t) {
                        const n = new Uint8Array((t || 40) / 2);
                        return (
                            window.crypto.getRandomValues(n),
                            e +
                                new Date().getTime().toString(32) +
                                (function (e) {
                                    let t = "";
                                    const n = "abcdefghijklmnopqrstuvwxyz0123456789";
                                    for (let i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
                                    return t;
                                })(18)
                        );
                    })();
                }
                const d = (e) => {
                        if (e.startsWith("rgba")) return e;
                        const t = o()(e);
                        return `rgba(${t.rgb().array().join(",")},${t.alpha()})`;
                    },
                    u = (e) => (e ? o()(e).hex().toUpperCase() : ""),
                    g = (e) => {
                        const t = document.createElement("div");
                        return e && (t.className = e), (t.style.display = "contents"), document.body.append(t), t;
                    },
                    p = (e) => {
                        if (!e) return "";
                        try {
                            if (e.startsWith("http://") || e.startsWith("https://")) {
                                const t = new URL(e);
                                if (t.host) return t.host;
                            }
                            return e.split("?")[0];
                        } catch (t) {
                            return e;
                        }
                    };
            },
            52940: (e) => {
                e.exports =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAABBVBMVEUAAABl22VCzXROx2k8yF9CyGE8zGM8yF49yVs8x1s6yF45yF83yGA5yFw4x1s5yl02yFw3yFw6x1w4xlw3x102yVs2x1o4x1s4yFs3y1s3x1s1x1o4yFo1xVs3yFs2x1o0yFk0yFk0yFk0yFk0yFk0yFk0yFk0x1k1yFo2yVs1yVo1yFs0yFk0x1k0yFk1yFk1yVs2yVozx1k0x1k0yFk2yVw1yFk1yFk0yFk0yFo2yVo0yFo1yFk0yVk0x1n////9/v7z/PX6/vuK36CB3JiW4qlMzmyw6b912Y5GzGg9yWHi9+fF78+h5bJr1oaq57np+e2468Xb9eJW0HXP8thf03y97cnD9iQZAAAAPnRSTlMAAgQGCAoMDhAUFRoSGSgdKxcjHyYhHCQxLi0wNTU3M/H6iujswuTJZ0BXTpb3noJ5R/PUsTuQ3c1wYLu3pjOosgcAABheSURBVHja7NmLbtpAEAXQmj68RrRVBGkitYqwXdNQlLg8RFrS7v9/Vlm5YZBnx8Pi19jlJkSKhAQc3ZldJa8uueSSS6qPZ/m6hIHisLwLK6Io38D/CxM+aC0N7DcjfLTaGthXRvhADTawL4jwMfgGYossZzWwF4qeUwMd4tLA7hJ6JzbQK5ETGtjNHpq3zDfQqyhMA7vXQ++EBlYeqoFd6yG8WbqBteUYCRC71EOPa6BXe4oaKN3QYxroJjE4iucUsoGyCb3CBjqZ4Thr0g2USegVNtBdrrxjPxqIJpehq5ZRqpRT6sOD9NiwDN7rowzY9JGQwWPQUHjMfhnSerzc+c/pDaGDHjJhy1es2AdCRg/j0XA0ZAFixwkJPQKPoWMYScTuEhJ8LF5pxH4QnsJXiPeGSSFi5wld9Bg5R0fKsFuEPB/WAzv3IEMbYXcECT6sx+C9LYgVERt2kpDlw3pIDjGh36yOOUNM2AFBmg/KR+gBDdO/3HPshvA6XSJ05rPZvXWITbHDhMV+jJ7d7h2KVZEz7IagE1+ueoAHbkxyiLkiFhHKFDyPD+O9cwpG7Coh5Qd8vN67M0Ma5gglC57BB3o0nm8JgQiGpxGKEmTqh/iQnhXuZvkretwk61k8fQjDh2k8Wyebx+jX8gYgaUMLodgSsvWz8QEeshve7dI/P6eazPTnn3R3F4AiQjwmFF9C2o/nQ70LlmkS6pMSJunSIPqOhNIET5xey+zm8dQ8fV5pp6ye07nKI1ommZpjAYKF9SP5sN5wt5nqszLd7IbIkCY0P+QIernY64dnN39gLB8ZPcbwcZk/WPAkH0ooaIyd6gd8Ob3P0ZMunafos2+CCQWX0K1+5oH5gvtvuqJ8uw8woXldXEIZgoV+UD/MB+W7+jHTFWb248o3IQihhCIEkR9VP0Nn41Of0lhXnDj9pGyE5oFK2K7g6eNL8I2jr7qGfI3GBCEzxoxgk354ejHfx+1K15TVFrXQNsftCjqMr43P38W6xsQ7HxPSJeQFG/Ujpxf4viS65iRfgJCY4zYEeT9cP8z3fhvq2hNu3wMhWcKWBHk/VD/g87/PdCOZffeB8LiErQuyflA/zHfzWzeW3zdAiEvYnuC5fmr/vYh1g4kX5jWdBDFgzX74+KDrp1Qa6kYTpkoRJURHCSEoxc9UYZLoxpNMzCsLEnTxAz4j2NT44jE2fkDYhiDvB3zYL5veUaRbSjTK5hgJAmFzgoQfNb5Qv6uNbi2bKyghMcaUoAQ/Uz81TnSLScbKlLB9QeL+Qq0/8JusdatZT0CQWoTEbabWBUj7AZ/xu33SLefp1ggCISFY8xok/AZFfmqfeaxbTzxX+xQJDgjB9v0WUy0g00Xbgu5+fub3oEXkIRP0GxXkD2DaT2V+cxH9M5nOM0FFCNZ6FGNA3k/tM7oVsP9eEt+O1D6cIAZs3M8/+E1aP3+P8zQ5CPpNCzIXGMJvvNaish4Tgsxlpi2/94kWluR9Y4L8AA8GjF+w0eKyCRjBwaCOIbYuQM5vFGmBiUZ2QWYN1udngvwM32ihRWaxf2tYkD1Iqh5g3u+DoAvMceIPnGDlQ8wuQJtfIO4AeUkS2ATZNVjnAoT7M/iJXIBZIhCEGzW/BqsE5P0WoRabcMEKVgnosADBT+oCfFmDIIjWYOWC9ADTfsGzFp3ngBakh7ieAc77KeO308KzM4IqL1jLELMLEA7gg994poVnNj4I7nPqGixfQBhgWIDg5//zC7ZafLbBP0EfBGENwhCjCpYuILMAjd+d4BP4JeGdEcRrsOoK8gsQ+8m9Qh8nCbAgvwbLA6IBxn73uhO5x4IwxBRg5QOMD5DgWvQVEBJfB+ggqXyIyROEHuBhB06QLNshOcT0OVJ1AbHfZKU7ktUEC/IVLFtA+wDDAhwK/iNCPtEQ1qB9iMtWkCggvkKrfTK/azH/BuYzvc4E1T74Ok1UsFQB+QEeprpDSYfsEOMKVlVAk5cBBr+/1JvRTttAFESf2oda1sqyYvWpCpQmtDQqSKiABLN2DCaQECgU/v9TWqtES3qzuYwXHHI+4WjmzhqFdE0m+B+f0ycG/yJ2hI8gH0Dnrxa4i7VitxboDLIR5AOoFTh6839FmKcXKSUOiqAWQFngD0dYM44+iBKrEeQbrATQFTjpY83oJ67ESgSdj7AAuieMKHDyCWvHp0SU2D1l2AjyAZwvcLJGj+gZm8lciYkIhgTw3XwAZwVO1mxCanrJrMRzEawJjGCDAL7R33IsZ4eKIC/QvWE8AXT+khOsiKqcjIvheFJegOYkcQY9ERQvmVcJYJKkXayE6jy3jwyvaYXdNEn4CIYLlAGMt7ESRoV9QjEFyXYsIvgSAvkAxsdYBWd2nvwUHMcxH8FXCWC0kgZf2f/JyQx2o4AI6gLlhPgCuIcWcf4kBXkH93wRdDPCC+QDGP9A+1zbRVyD4kfMR5BvsBrAVfwi/9wuZMhF8EusRJDvsBOoBdD5Swdom1/WA7cjg9QZVCIoBNIN9gdwB23zYH08gGLHG8HGHdYaLC9gtIl2cf4kt6DYjMQVVDsc2GAZwKiPVrmcWD8FKPqRiGBgh589IS6AnQ2QuM/YYTGelBUcnD/JDSg2Oi6C6owECfRPSPQVAvIz9pxQePnbOoIrjK+Rd0bCBOoNngUw2oaA/owdQcL740cE29FjBIkOEydQNlgGsNGGlLmdIz8D7y/8GVOviCeCNcoRpBssJySuBe6DZjrz53iWwYtbKxAPaYr9WmAsZsTTYVagt8FPAxgdguWisJIz3p/kGiSH0ZMIejtMCOQbnHXhgfwOK1V/Y6tQ8H9UzdgO8wKXT0j0ESzV0DYxWKn+8iloPkb+GWks0J1AvcHZN7CUVqIbrG6sRgmeb5nWYXkE+RMoGuwmJNsFy6SJgTvVX16iAbuZmxHRYf0Ihjc4+w6WMZEhwt8pmvAz4zrMC1QanJ2ApVBa2KY/nGSiw4RA4gS+r1nQYHMMloL2cF9YheEIzTg2Czr8voY8glLgwkeMaLDpg2WsJKlNf+gb0eFFDxlCINlgcwCWidZF3t8UTTkwDTrc/ASKV7QxPbCU3DWbEv54esaItzR5BKVAcQLFI8Y12GyBpRoyBqdDq1AE+MOWcR0WDxlxBDmB7hW45ASaLmjOiUUd6f7uEUDXLDmC7iUoBJIb4j+BZgCaqlANtuUPA+M7gvqK8BsiHzEm3QDPNFcNPtvfHYLYSI14yBArQgkUJ5AX6HZEIR8BwGluFW54f1KgPIIvKFBuiDuBWS1wgCac6QZb8YdBLTBzR1CsiCZQH+GlJzAl/sWQNVjq/iqE0u2ky44gMcNCoL4hdQA7WyCgDFqNcYVgtjp1BPUVoQV6NkScwLQHAsZgK/7QS8UR9KyIR6DyilE3JD1AI8IN3l4A4Rykyooo75jgDUn7aMzV6v39oe78WxqJgTDM+Z+IudBuLMVSalELa+u1+AOL15e740pBLN6e3n3/j+KGZYlLWGt8Z7V5PsLDZmcymUwwagdEEUag24dUY4hh+qPXn+4P300liri9CC9wcxD+agUuEA5v8OkOMizMhihiHYgLdPuQthmDYc354xmbttuLyAu0/l4PwmYKijXlj2dqXgvDlncKtLxJYIp3wBm8l/OH9E0CLaECN6aBB4XAPkjWhD+efiHwoD4RDBdYnwb6WYwxrQFIHsL8/Ycgg5YxXh5TkwgyAl0aWC0GmlzgBQjCDWaQ5CIXaFxJsJIIsgLr82iXxViBlyAINriCKJdWoMtjvEw6ROCXTQJzfIGt1hA8D4Q/imGrZXyBOfUCC94rcNcXOAdHiMEHCDP3Be6yAv2dXP1GpJ0LnEGC1Vv8rSHNLBfYrtmKeHu5hgTqI0iw+gx/R1pe4E6owM4IEmw2uIQ4o06QQIuIwP2KwGvIsPpwf7iuCNwXF1hfS9h7ITCFEKvA9lOe9IXAvZpqQvMC9QRCZEHtpzwTvRUCBV+gz0LaBnlOku0QOIQY2Uf6w5AQKBhEkhRyZAHtkzRpQgQRuTQmUQPIkX2cv4FKpNMYS7jA5BaCZAHtfxy3SdLZgp1ILnAOSZY/Ksfnj2iKOS2QLyYUArsDSPLv3n1+yzs0xaBrBbLFBL6c1ekkagFZHpdPf379/Jv9vkNzLFTS6bDlLL6gagUmKSIkTaxAtqDKl/TtGlYxjgBVdgVzJX3+UKkUOEZ0jAuB5KESf6xZCJwhOmaFQOJYkz9YdwLVDSLjRjmBjRys74QJjOwtAmAaILC55iInsBvVaxjAadcJDG0u4gX6iaBSUb3HAnxTyksDCYFEg2X5CR4eIyKOD8sPkGyw5Ft8S4EqqnH6Q1UK5Fp8+SZzJ7AX06NUPSeQajLnrzk4gTqiZHqsnUDumgN/0cYKLAxeTRAJk6vCnxVIXrThr3oZ9wmeIxLO3QdoiKte0lFE9yMJxMd9TceQzQLDo4jSkWxHplqFxhBeoB9F/J+g1lE8TTXS2vsFEheuqSv/pcFS4FkMT4SflQILf8SVf3LohJ/I6BjiyLnWXhJDDJ2gxp44gaXB3taXpk97pT8nkBh7Qg/eqSYyWm/9C4dzrStJDDV4hx/95K1hveUP/Z9obwUTo5/o4WP+GtbPzJ1hbupADIQP0B9F6h97N2kebV5JIA8VUKrXInH/Y7URikbLaBtFTsjmCKP5PPYK7DrpZrCsV0SwYfmYff0dM7z6SjiJ118rInjS9XdWhjsFXcKPCo3r9DMQPPkKUO6lV06Tbac36lbURdtWgNqX0D6yBVMtg2XNBnw0LqG1r0HmGHGuuiT5Vc5xhFjXINsZ5hhxmmQZbNRRhBgItqyCH7Sgni/JfWeNGNCwCt56jCBuwSy5INlkEQMajhHYz2HEOhmn7emS1Hdq1UV6mEnPYYxkGNPIrQV9ndSzwlvtbwyIKcR0kMV+EijsZFAFdZdQM1PuFBUw6GGsJ4HsR6nAcACxqm6Pl0S+41ZVA4CHI4QJnuUsGlsQEPsqkal4XXkATAac5yzaMMNswdscUV8l4cFj5fU2QWBAw2E++2lItiBypIPYbxOog+XWdwAjQciAptOQ9uOkbEFALLvFs/htJwCYDWg/Tmo/j8sWBMRSL9wPnmoBwGzA+c7jMsMDFsQ4EkAs7aIzyaaVAGAMITCg9UCz/UT4A7cyPcTq5XnBufj8LF57gLmFebCcCLcfqeeJmCH23kux2NtMU4j3ngHGFDzHkfrxFkSOBBD3ZVCkWiSMy0qkL4AAOEiQEQaEgEaG4xYkiKHgYYFCuDlAPwI4YkADwXYLEsQIEpGsufNUsm4yEQQIATyLASHgeAsSxEGQiBTzYsz4FiJBgBDAEQNaBGSGOUbYggxxWAZ7BQ93/M3C30OvX1AAGWA2IEUIETypBYchhoL5553+zfT6mZN+AwAPGdAuIFvw+igDiNFOs4L+qmC7v0MlXO/bq36e9EMLDYCvzzBsQKOA4y0IiOMKFvl29n91/t/mRVQ/ADzOgBDQasEwiJEjUPAJZZApLvLsfdYwKd+zvGB+UQCfoB8SJIjgEQa0WBA5whD/rmC9n+3/JP/29e/6EcBIEKsBhy3ID6uwYKQMsoLyo2BeN7P8K+xPU+c/+gnrFymAMCA9pBoMyALGLThQBiMKdhJ+TA5y+dHJF9FvoABGDWgUkC3IOQKIY0GCoU59j3GetS+vk3YuL22W9/h6VejHAYICGE+QOMF2C3bfAMRxBXuMv4m5g51EoiAKw4kxysawQBdGphEVRYKIApEY3/+5Zm7fVH7hdE3ZuY3UTmH15ZyquyIRvq664lu9Jj6rr+8XFDhNEMCuI9jz1qAKUmML4XA4WzyW6z0uZsOhxY/6qp+3AHsdBzCOIIL2i1qsQRW8dARrwmq6fi/Re19Pq5rP8btUP1uA/EoWfkEASyKYRiOoa5BT3CRIjSHcLCcYttObLDfwUd8mPw6wLEANYB78ygBblTgWzCG0HteEVfU5f3pp+eR7mn9WVc2X22vxi/xaFFgACyOod8QX7ItgYwghrDbTxXb8M7zxdjHdVPA1xU/9+r6fXpA4gOURpMRySCLBGyGsDavn2XL+taLQWtrV13w5e65qPeG7CfzkgEiB4wCWC566JVbBQZMgITRCDPO8Te8W68n24/7h9mU8frl9uP/YTtaLu+lb/hw94yN+TX4D8fMLfBr4lQJqiWNBDWE6xxCOMiGG3qBnfCP40vGV+MV+WmAfsNsS+4IXgeBuj4khiCEe4dtpb+h34fh1XWAA9Y5oiZ3HDO9BBAnhPmEytCCao8pZ9JLePh/xw4/3n/OAcQrMBQGw6wj6hwTBHEIECSGEO4bZJjMy0NkX0INvJ3749fH77wEpD6ACtlqDvuCVhFAJzXBkfH9k7L8j0xM+jd+V59dmAQJYHsFgDYaCzYQYJsQ0kJG9RJfx0Gvii/2iBRgHsDyCgSAvak6JhtAIMYRRBzr0jE/jx/ng/Rz4dRtABOM1GAs6IRRDEHXAEz0nfqEfCzDw6xCwhaDW2CM0w4yIotplPNNz+KS+bfxCwPIIOocEweZjbOeYHqthksmKSCY3m/wV1aO9dnybzy9+zgHpMIAAxmswFtQQQohhRrzOUEjy53XGQw8+iV/oFy9AAA9U4ljQFiEhhPASQhBrRQY+s0t4jOnBR/xs/YV+JQUuX4Mq2EPwH6GEUAkxRFEHO/SUryl++PXEr2ABlpT4Z4LUmBBCSJOzoYzAqR7dhY/4Ud+f+YUFLo8ga7CFICFUQgxB1FE89JSP+LXwYwFKAI8lqDU2wsEOYTZkQjv09vkGxif1PYofgP4a9AUlhA6hGOKocqrn8En8HD/vgAD424JnviA9hhDDjBgNeOjBR3t9v7Niv3LAWFBqLITsQgxBDPDQY/cJn9Y39lPAAwqe+ILnu4IQZkEIvxmCiKPIgfddD77kB9++37nvd+L5HUuQGmuPIcwxTIYgJkUd7MBLejl88Gl7qW+B37EENYQQEkMMUQQSOOzQI3zwSfyO7wegPGYcQRahQ0gMsyGIODLIgZf1CJ/Dx/oTP+8BA+CBIhgI+jVWwmwIIoo62GU801M+p76hnwbwwCVWQamxT0iTLYjJ5MpG4Gzsm33TC/ikvvgFB/j4gn/bq6PVtoEwiMIEWgJ5/wcuYXFO3MO/U20qa3ft8UVILMXo84z0zozZcSOUYUNsNjiS2xs0T3qffKyX+b7P4AdgIVjOWIQfX4QYgtjyBebfwbvpwfchvmK+0Q/A8wUhlOBneoQYgggkAQ489Hp8n5EffMHvMkEIeRyLEEMQUXSwAw+9ez4evvAd9ptFkB2bEEMUcbQcduiZj/VO5SdB3wjLEooQQxBhdKADDz3xqX7h9neuH4CjgibE0Ih1jIee+Ub9AHysoGecCTEkgU56mU/zvcovC7qENWEzBBFFcoeGHXjoVXzUbwK/rqBmXBDKEEQp2g4861V8nu9lflnQJSwImyGIKBLQyAd46ImvqN/1fhLszrgkxNCIOFoOPOnVfMV8r/GzYCyhCWUoRcV21hNfqN8FfhJMMy4IWw0xBFGOkgOv6VG+gi/M97F+FvSMtWMTUkMMQawDHnqUT3xaL/O9zg/BPGMT2hBEGDMdeNYzH/WbxK8nqBJyKxQhhigiaTfspGe+3/BRv1n8JJhKCKEMQbRji+XAQ098qX5H/a4toYaM4Y0BmRzOanoe79T1C4KUUISFIRzZjqMLPfFRv6n8woxNyJIxBLG5AGM3DjFe02O75ptrvkHwCCGKBDL/BbujfPP5WdA7htBLBtGKDnbGY7vm83rn8QslFGEyJDVc1mt8C9QPwQFCDEHMMR56Fd/M9QuCJrQhOWqX9OCb22+EsIWLJ8fsOP/XwnwS7BJiSBFBJLUb4Xz0enzT+lWCECZDKzq26+m1H6v4HSPE0IqZ8f5o9Nbma4Im1JJtSLDTxH1AR4/twje/3z8R2hBEEvpnvHu9VfkioQ2NmGM8663Kh2AkxJAM2FnPfEv5iTAYgkgOyIFX6S3HFwiJLn003//ZFnyBMCGO4+3DB6EMHSwOMf51rvXW5jOhDY0IRQ/OZ1hvAz4Rdg2NNn7M2y58IoyGacWWs95WfDIUYkgXzXgb6kEYEFMy3rZ8MlR+jLeF3lvvZUNnkG4PvRQIY4blnPC1Tsjbb6C2nBPMQvdmJPpJA9nyyeHDVmrfLaGBFPGEcNvbu4HnILJbPmW19pHQQC7jfxfvqRrIBf6IDjs1cMXufUtqIIeMQN59ytM3sCwIXEQnlQ1ct3vfcqiBepVvvRrYa6Ddxhq4eveURzRwt+4ppzZwz9IpJzTwieyUwQbu8Hw9Le7mC+uVV6r8AS97WKpWZgb6AAAAAElFTkSuQmCC";
            },
        },
        n = {};
    function i(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var r = (n[e] = { exports: {} });
        return t[e].call(r.exports, r, r.exports, i), r.exports;
    }
    (i.m = t),
        (i.amdO = {}),
        (e = []),
        (i.O = (t, n, o, r) => {
            if (!n) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [n, o, r] = e[d], s = !0, c = 0; c < n.length; c++) (!1 & r || a >= r) && Object.keys(i.O).every((e) => i.O[e](n[c])) ? n.splice(c--, 1) : ((s = !1), r < a && (a = r));
                    if (s) {
                        e.splice(d--, 1);
                        var l = o();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            r = r || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
            e[d] = [n, o, r];
        }),
        (i.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return i.d(t, { a: t }), t;
        }),
        (i.d = (e, t) => {
            for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (i.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            var e = { 7042: 0, 8169: 0 };
            i.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, s, c] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) i.o(s, o) && (i.m[o] = s[o]);
                        if (c) var d = c(i);
                    }
                    for (t && t(n); l < a.length; l++) (r = a[l]), i.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return i.O(d);
                },
                n = (globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = i.O(void 0, [9597, 7693, 3734, 8169, 8318], () => i(26605));
    o = i.O(o);
})();
