/*! For license information please see fc7b0d1e.js.LICENSE.txt */
(globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []).push([
    [6154, 2830],
    {
        58893: (e) => {
            function t() {
                return (
                    (e.exports = t =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports),
                    t.apply(this, arguments)
                );
            }
            (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
        },
        33766: (e) => {
            (e.exports = function (e) {
                return e && e.__esModule ? e : { default: e };
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        20518: (e, t, n) => {
            "use strict";
            var r = n(33766);
            t.Z = function () {
                return {
                    install: function (e) {
                        e.vMdParser.use(i.default), e.use((0, o.default)());
                    },
                };
            };
            var i = r(n(71269)),
                o = r(n(40126));
        },
        71269: (e, t, n) => {
            "use strict";
            var r = n(33766);
            (t.__esModule = !0),
                (t.default = function (e) {
                    e.extendMarkdown(function (e) {
                        e.use(i.default);
                    });
                });
            var i = r(n(99870));
        },
        40126: (e, t, n) => {
            "use strict";
            var r = n(33766);
            (t.__esModule = !0),
                (t.default = function () {
                    return {
                        install: function (e) {
                            e.mixins || (e.mixins = []),
                                e.mixins.push({
                                    emits: ["copy-code-success"],
                                    mounted: function () {
                                        var e = this;
                                        this.$nextTick(function () {
                                            s(e.$el).addEventListener("click", e.handleCopyCodeClick);
                                        });
                                    },
                                    beforeUnmount: function () {
                                        s(this.$el).removeEventListener("click", this.handleCopyCodeClick);
                                    },
                                    methods: {
                                        handleCopyCodeClick: function (e) {
                                            var t = e.target;
                                            if (t.classList.contains("v-md-copy-code-btn")) {
                                                var n = o(t.parentNode);
                                                if (n) {
                                                    var r = n.querySelector("code").innerText;
                                                    (0, i.default)(r), this.$emit("copy-code-success", r);
                                                }
                                            }
                                        },
                                    },
                                });
                        },
                    };
                });
            var i = r(n(40819));
            function o(e) {
                return e.classList.contains("v-md-pre-wrapper") ? e : o(e.parentNode);
            }
            function s(e) {
                var t = "v-md-editor-preview";
                return e.classList.contains(t) ? e : e.querySelector("." + t);
            }
        },
        62399: (e, t) => {
            "use strict";
            (t.__esModule = !0),
                (t.default = function (e) {
                    return function (t) {
                        return {
                            install: function (n) {
                                n.vMdParser.use(e, t);
                            },
                        };
                    };
                });
        },
        60328: (e, t, n) => {
            "use strict";
            var r = n(33766);
            t.Z = void 0;
            var i = r(n(62399)),
                o = r(n(51585)),
                s = (0, i.default)(o.default);
            t.Z = s;
        },
        73641: (e, t, n) => {
            "use strict";
            var r = n(33766);
            (t.__esModule = !0),
                (t.default = function (e) {
                    return function (t, n) {
                        t.extendMarkdown(function (t) {
                            e && t.use(o.default, (0, i.default)({}, n, { katex: e }));
                        });
                    };
                });
            var i = r(n(58893)),
                o = r(n(69969));
        },
        51585: (e, t, n) => {
            "use strict";
            var r = n(33766);
            (t.__esModule = !0), (t.default = void 0);
            var i = r(n(73641)),
                o = r(n(8520)),
                s = (0, i.default)(o.default);
            t.default = s;
        },
        17254: function (e, t, n) {
            var r;
            "undefined" != typeof self && self,
                (r = function (e) {
                    return (function (e) {
                        var t = {};
                        function n(r) {
                            if (t[r]) return t[r].exports;
                            var i = (t[r] = { i: r, l: !1, exports: {} });
                            return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                        }
                        return (
                            (n.m = e),
                            (n.c = t),
                            (n.d = function (e, t, r) {
                                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                            }),
                            (n.r = function (e) {
                                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                            }),
                            (n.t = function (e, t) {
                                if ((1 & t && (e = n(e)), 8 & t)) return e;
                                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                                var r = Object.create(null);
                                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                                    for (var i in e)
                                        n.d(
                                            r,
                                            i,
                                            function (t) {
                                                return e[t];
                                            }.bind(null, i)
                                        );
                                return r;
                            }),
                            (n.n = function (e) {
                                var t =
                                    e && e.__esModule
                                        ? function () {
                                              return e.default;
                                          }
                                        : function () {
                                              return e;
                                          };
                                return n.d(t, "a", t), t;
                            }),
                            (n.o = function (e, t) {
                                return Object.prototype.hasOwnProperty.call(e, t);
                            }),
                            (n.p = ""),
                            n((n.s = 9))
                        );
                    })([
                        function (t, n) {
                            t.exports = e;
                        },
                        ,
                        function (e, t, n) {
                            "use strict";
                            n.d(t, "f", function () {
                                return i;
                            }),
                                n.d(t, "a", function () {
                                    return s;
                                }),
                                n.d(t, "c", function () {
                                    return a;
                                }),
                                n.d(t, "d", function () {
                                    return l;
                                }),
                                n.d(t, "e", function () {
                                    return c;
                                }),
                                n.d(t, "b", function () {
                                    return u;
                                });
                            var r = Object.prototype.toString,
                                i = function (e) {
                                    return "[object Object]" === r.call(e);
                                };
                            function o(e, t) {
                                return (
                                    Object.keys(t).forEach(function (n) {
                                        e[n] = t[n];
                                    }),
                                    e
                                );
                            }
                            function s(e) {
                                for (var t = {}, n = 0; n < e.length; n++) e[n] && o(t, e[n]);
                                return t;
                            }
                            function a(e, t) {
                                t.keys().forEach(function (n) {
                                    e[n] = t(n);
                                });
                            }
                            var l = "undefined" != typeof window;
                            function c(e) {
                                return /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);
                            }
                            function u(e) {
                                var t,
                                    n,
                                    r = e.selected,
                                    i = e.InsertGetter,
                                    o = e.selectedGetter,
                                    s =
                                        void 0 === o
                                            ? function (e) {
                                                  return e;
                                              }
                                            : o,
                                    a = e.ignoreEmptyLine,
                                    l = void 0 === a || a;
                                return (
                                    r
                                        ? ((n = s(r)),
                                          (t = i(r, 1)),
                                          -1 !== r.indexOf("\n") &&
                                              (n = t = r
                                                  .split("\n")
                                                  .map(function (e, t) {
                                                      return l && !e ? "" : i(e, t + 1).replace(s(null), "");
                                                  })
                                                  .join("\n")))
                                        : ((t = i(null, 1)), (n = s(r))),
                                    { insertContent: t, newSelected: n }
                                );
                            }
                        },
                        function (e, t, n) {
                            "use strict";
                            n.d(t, "c", function () {
                                return r;
                            }),
                                n.d(t, "b", function () {
                                    return i;
                                }),
                                n.d(t, "a", function () {
                                    return o;
                                });
                            var r = "data-v-md-line",
                                i = "data-v-md-heading",
                                o = "data-v-md-anchor";
                        },
                        ,
                        function (e, t, n) {
                            "use strict";
                            function r() {
                                return (
                                    (r =
                                        Object.assign ||
                                        function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = arguments[t];
                                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                            }
                                            return e;
                                        }),
                                    r.apply(this, arguments)
                                );
                            }
                            n.d(t, "a", function () {
                                return r;
                            });
                        },
                        function (e, t, n) {
                            "use strict";
                            function r(e) {
                                var t = 0;
                                return e === window ? (t = e.pageYOffset) : e && (t = e.scrollTop), t;
                            }
                            function i(e, t) {
                                e === window ? window.scrollTo(window.pageYOffset, t) : e && (e.scrollTop = t);
                            }
                            n.d(t, "a", function () {
                                return r;
                            }),
                                n.d(t, "b", function () {
                                    return i;
                                });
                        },
                        function (e, t, n) {
                            "use strict";
                            var r = n(5),
                                i = n(11),
                                o = n.n(i),
                                s = {
                                    svg: [],
                                    altGlyph: [],
                                    altGlyphDef: [],
                                    altGlyphItem: [],
                                    animate: [],
                                    animateColor: [],
                                    animateMotion: [],
                                    animateTransform: [],
                                    circle: [],
                                    clipPath: [],
                                    "color-profile": [],
                                    cursor: [],
                                    "definition-src": [],
                                    defs: [],
                                    desc: [],
                                    ellipse: [],
                                    feBlend: [],
                                    feColorMatrix: [],
                                    feComponentTransfer: [],
                                    feComposite: [],
                                    feConvolveMatrix: [],
                                    feDiffuseLighting: [],
                                    feDisplacementMap: [],
                                    feDistantLight: [],
                                    feFlood: [],
                                    feFuncA: [],
                                    feFuncB: [],
                                    feFuncG: [],
                                    feFuncR: [],
                                    feGaussianBlur: [],
                                    feImage: [],
                                    feMerge: [],
                                    feMergeNode: [],
                                    feMorphology: [],
                                    feOffset: [],
                                    fePointLight: [],
                                    feSpecularLighting: [],
                                    feSpotLight: [],
                                    feTile: [],
                                    feTurbulence: [],
                                    filter: [],
                                    font: [],
                                    foreignObject: [],
                                    g: [],
                                    glyph: [],
                                    glyphRef: [],
                                    hkern: [],
                                    image: [],
                                    line: [],
                                    linearGradient: [],
                                    marker: [],
                                    mask: [],
                                    metadata: [],
                                    "missing-glyph": [],
                                    mpath: [],
                                    path: [],
                                    pattern: [],
                                    polygon: [],
                                    polyline: [],
                                    radialGradient: [],
                                    rect: [],
                                    set: [],
                                    stop: [],
                                    style: [],
                                    switch: [],
                                    symbol: [],
                                    text: [],
                                    textPath: [],
                                    title: [],
                                    tref: [],
                                    tspan: [],
                                    use: [],
                                    view: [],
                                    vkern: [],
                                },
                                a = {
                                    math: [],
                                    annotation: [],
                                    semantics: [],
                                    mtext: [],
                                    mn: [],
                                    mo: [],
                                    mi: [],
                                    mspace: [],
                                    mover: [],
                                    munder: [],
                                    munderover: [],
                                    msup: [],
                                    msub: [],
                                    msubsup: [],
                                    mfrac: [],
                                    mroot: [],
                                    msqrt: [],
                                    mtable: [],
                                    mtr: [],
                                    mtd: [],
                                    mlabeledtr: [],
                                    mrow: [],
                                    menclose: [],
                                    mstyle: [],
                                    mpadded: [],
                                    mphantom: [],
                                    mglyph: [],
                                },
                                l = ["style", "align", "class", "id"],
                                c = ["data-"],
                                u = Object(r.a)({}, { input: ["type"], ol: ["reversed", "start", "type"], button: ["type"], summary: [] }, a, s),
                                p = {
                                    whiteList: Object(r.a)({}, o.a.getDefaultWhiteList(), u),
                                    onIgnoreTagAttr: function (e, t, n) {
                                        if (
                                            s[e] ||
                                            a[e] ||
                                            l.find(function (e) {
                                                return e === t;
                                            }) ||
                                            c.find(function (e) {
                                                return t.startsWith(e);
                                            })
                                        )
                                            return t + '="' + o.a.escapeAttrValue(n) + '"';
                                    },
                                },
                                d = new o.a.FilterXSS(p);
                            (d.extend = function (e) {
                                var t = d.options;
                                Object.keys(e).forEach(function (n) {
                                    if ("whiteList" === n)
                                        Object.keys(e.whiteList).forEach(function (n) {
                                            var r = e.whiteList[n],
                                                i = t.whiteList;
                                            i[n] ? (i[n] = [].concat(i[n], r)) : (i[n] = r);
                                        });
                                    else if ("onIgnoreTagAttr" === n) {
                                        var r = t.onIgnoreTagAttr;
                                        t.onIgnoreTagAttr = function () {
                                            for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                                            var s = r.call.apply(r, [this].concat(i)),
                                                a = (t = e.onIgnoreTagAttr).call.apply(t, [this].concat(i));
                                            return s || a;
                                        };
                                    } else t[n] = e[n];
                                });
                            }),
                                (t.a = d);
                        },
                        function (e, t, n) {
                            "use strict";
                            n.d(t, "b", function () {
                                return i;
                            }),
                                n.d(t, "a", function () {
                                    return o;
                                });
                            var r = n(6);
                            function i(e) {
                                var t = e.currentScrollTop,
                                    n = e.scrollToTop,
                                    r = e.scrollFn,
                                    i = e.percent,
                                    o = void 0 === i ? 10 : i,
                                    s = e.onScrollEnd,
                                    a = n > t ? "down" : "up",
                                    l = (o / 100) * (n - t);
                                window.requestAnimationFrame(function e() {
                                    (t += l), ("down" === a && t >= n) || ("up" === a && t <= n) ? (r(n), window.cancelAnimationFrame(void 0), s && window.requestAnimationFrame(s)) : (r(t), window.requestAnimationFrame(e));
                                });
                            }
                            function o(e) {
                                var t = e.scrollTarget,
                                    n = e.scrollToTop,
                                    o = e.percent,
                                    s = void 0 === o ? 10 : o,
                                    a = e.onScrollEnd;
                                i({
                                    currentScrollTop: Object(r.a)(t),
                                    scrollToTop: n,
                                    scrollFn: function (e) {
                                        return Object(r.b)(t, e);
                                    },
                                    percent: s,
                                    onScrollEnd: a,
                                });
                            }
                        },
                        function (e, t, n) {
                            "use strict";
                            n.r(t);
                            var r = n(0),
                                i = n(7),
                                o = n(13),
                                s = (function () {
                                    function e() {
                                        this.lang = new o.a();
                                    }
                                    var t = e.prototype;
                                    return (
                                        (t.defaultMarkdownLoader = function (e) {
                                            return e;
                                        }),
                                        (t.use = function (e, t) {
                                            return "function" == typeof e ? e(this, t) : e.install(this, t), this;
                                        }),
                                        (t.theme = function (e) {
                                            this.themeConfig = e;
                                        }),
                                        (t.extendMarkdown = function (e) {
                                            this.themeConfig && e(this.themeConfig.markdownParser);
                                        }),
                                        (t.parse = function (e) {
                                            var t,
                                                n = this.themeConfig.markdownParser,
                                                r = (null == n || null == (t = n.render) ? void 0 : t.bind(n)) || this.defaultMarkdownLoader;
                                            return "function" != typeof r || this.defaultMarkdownLoader, r(e);
                                        }),
                                        e
                                    );
                                })(),
                                a = {
                                    name: "v-md-preview",
                                    mixins: [n(16).a],
                                    props: { text: { type: String, default: "" }, theme: Object, beforeChange: Function },
                                    emits: ["change"],
                                    data: function () {
                                        return { html: "" };
                                    },
                                    watch: {
                                        text: function () {
                                            this.handleTextChange();
                                        },
                                        langConfig: function () {
                                            this.handleTextChange();
                                        },
                                    },
                                    computed: {
                                        vMdParser: function () {
                                            return this.$options.vMdParser;
                                        },
                                        previewClass: function () {
                                            return this.vMdParser.themeConfig.previewClass;
                                        },
                                        langConfig: function () {
                                            return this.vMdParser.lang.langConfig;
                                        },
                                    },
                                    created: function () {
                                        this.handleTextChange();
                                    },
                                    methods: {
                                        handleTextChange: function () {
                                            var e = this,
                                                t = function (t) {
                                                    (e.html = i.a.process(e.$options.vMdParser.parse(t))), e.$emit("change", t, e.html);
                                                };
                                            this.beforeChange ? this.beforeChange(this.text, t) : t(this.text);
                                        },
                                    },
                                },
                                l = new s();
                            (l.lang.config = Object(r.reactive)(l.lang.config)), (a.vMdParser = new s());
                            var c = a;
                            c.render = function (e, t, n, i, o, s) {
                                return (
                                    Object(r.openBlock)(),
                                    Object(r.createBlock)(
                                        "div",
                                        {
                                            class: "v-md-editor-preview",
                                            style: { tabSize: e.tabSize, "-moz-tab-size": e.tabSize, "-o-tab-size": e.tabSize },
                                            onClick:
                                                t[1] ||
                                                (t[1] = function () {
                                                    return e.handlePreviewClick.apply(e, arguments);
                                                }),
                                        },
                                        [Object(r.createVNode)("div", { class: [e.previewClass], innerHTML: e.html }, null, 10, ["innerHTML"])],
                                        4
                                    )
                                );
                            };
                            var u = c;
                            n(18),
                                (u.version = "2.3.15"),
                                (u.install = function (e) {
                                    e.component(u.name, u);
                                }),
                                (u.xss = i.a),
                                (u.use = function (e, t) {
                                    return "function" == typeof e ? e(u, t) : e.install(u, t), u;
                                }),
                                (t.default = u);
                        },
                        ,
                        function (e, t, n) {
                            var r = n(19),
                                i = n(22),
                                o = n(26);
                            function s(e, t) {
                                return new o(t).process(e);
                            }
                            for (var a in (((t = e.exports = s).filterXSS = s), (t.FilterXSS = o), r)) t[a] = r[a];
                            for (var a in i) t[a] = i[a];
                            "undefined" != typeof window && (window.filterXSS = e.exports),
                                "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = e.exports);
                        },
                        ,
                        function (e, t, n) {
                            "use strict";
                            n.d(t, "a", function () {
                                return s;
                            });
                            var r = n(2),
                                i = Object.prototype.hasOwnProperty;
                            function o(e, t) {
                                return (
                                    Object.keys(t).forEach(function (n) {
                                        !(function (e, t, n) {
                                            var s = t[n];
                                            null != s && (i.call(e, n) && Object(r.f)(s) ? (e[n] = o(Object(e[n]), t[n])) : (e[n] = s));
                                        })(e, t, n);
                                    }),
                                    e
                                );
                            }
                            var s = (function () {
                                function e(e) {
                                    void 0 === e && (e = {}), (this.config = { lang: "zh-CN", langConfig: { "zh-CN": {} } }), (this.options = e);
                                }
                                var t = e.prototype;
                                return (
                                    (t.use = function (e, t) {
                                        var n;
                                        (this.config.lang = e), this.add((((n = {})[e] = t), n)), this.options.afterUse && this.options.afterUse(e, t);
                                    }),
                                    (t.add = function (e) {
                                        void 0 === e && (e = {}), o(this.config.langConfig, e);
                                    }),
                                    e
                                );
                            })();
                        },
                        function (e, t, n) {
                            var r = n(20),
                                i = n(24);
                            for (var o in (((t = e.exports = function (e, t) {
                                return new i(t).process(e);
                            }).FilterCSS = i),
                            r))
                                t[o] = r[o];
                            "undefined" != typeof window && (window.filterCSS = e.exports);
                        },
                        function (e, t) {
                            e.exports = {
                                indexOf: function (e, t) {
                                    var n, r;
                                    if (Array.prototype.indexOf) return e.indexOf(t);
                                    for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                    return -1;
                                },
                                forEach: function (e, t, n) {
                                    var r, i;
                                    if (Array.prototype.forEach) return e.forEach(t, n);
                                    for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
                                },
                                trim: function (e) {
                                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
                                },
                                spaceIndex: function (e) {
                                    var t = /\s|\n|\t/.exec(e);
                                    return t ? t.index : -1;
                                },
                            };
                        },
                        function (e, t, n) {
                            "use strict";
                            var r = n(6),
                                i = n(8),
                                o = n(3);
                            t.a = {
                                props: {
                                    tabSize: { type: Number, default: 2 },
                                    scrollContainer: {
                                        type: Function,
                                        default: function () {
                                            return window;
                                        },
                                    },
                                    top: { type: Number, default: 0 },
                                },
                                emits: ["image-click"],
                                methods: {
                                    handlePreviewClick: function (e) {
                                        var t = e.target;
                                        if ("IMG" !== t.tagName) {
                                            var n = t.getAttribute(o.a),
                                                r = this.$el.querySelector("[" + o.b + '="' + n + '"]');
                                            r && this.scrollToTarget({ target: r });
                                        } else {
                                            if (!t.getAttribute("src")) return;
                                            var i = Array.from(this.$el.querySelectorAll("img")),
                                                s = i
                                                    .map(function (e) {
                                                        return e.getAttribute("src");
                                                    })
                                                    .filter(function (e) {
                                                        return e;
                                                    }),
                                                a = i.indexOf(t);
                                            this.$emit("image-click", s, a);
                                        }
                                    },
                                    getOffsetTop: function (e, t) {
                                        var n = e.getBoundingClientRect();
                                        return t === window || t === document.documentElement ? n.top : n.top - t.getBoundingClientRect().top;
                                    },
                                    scrollToTarget: function (e) {
                                        var t = e.target,
                                            n = e.scrollContainer,
                                            o = void 0 === n ? this.scrollContainer() : n,
                                            s = e.top,
                                            a = void 0 === s ? this.top : s,
                                            l = e.onScrollEnd,
                                            c = this.getOffsetTop(t, o),
                                            u = Object(r.a)(o) + c - a;
                                        Object(i.a)({ scrollTarget: o, scrollToTop: u, onScrollEnd: l });
                                    },
                                    scrollToLine: function (e) {
                                        var t = e.lineIndex,
                                            n = e.onScrollEnd;
                                        if (t) {
                                            var r = this.$el.querySelector("[" + o.c + '="' + t + '"]');
                                            r && this.scrollToTarget({ target: r, onScrollEnd: n });
                                        }
                                    },
                                },
                            };
                        },
                        ,
                        function (e, t, n) {},
                        function (e, t, n) {
                            var r = n(14).FilterCSS,
                                i = n(14).getDefaultWhiteList,
                                o = n(15);
                            function s() {
                                return {
                                    a: ["target", "href", "title"],
                                    abbr: ["title"],
                                    address: [],
                                    area: ["shape", "coords", "href", "alt"],
                                    article: [],
                                    aside: [],
                                    audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
                                    b: [],
                                    bdi: ["dir"],
                                    bdo: ["dir"],
                                    big: [],
                                    blockquote: ["cite"],
                                    br: [],
                                    caption: [],
                                    center: [],
                                    cite: [],
                                    code: [],
                                    col: ["align", "valign", "span", "width"],
                                    colgroup: ["align", "valign", "span", "width"],
                                    dd: [],
                                    del: ["datetime"],
                                    details: ["open"],
                                    div: [],
                                    dl: [],
                                    dt: [],
                                    em: [],
                                    figcaption: [],
                                    figure: [],
                                    font: ["color", "size", "face"],
                                    footer: [],
                                    h1: [],
                                    h2: [],
                                    h3: [],
                                    h4: [],
                                    h5: [],
                                    h6: [],
                                    header: [],
                                    hr: [],
                                    i: [],
                                    img: ["src", "alt", "title", "width", "height"],
                                    ins: ["datetime"],
                                    li: [],
                                    mark: [],
                                    nav: [],
                                    ol: [],
                                    p: [],
                                    pre: [],
                                    s: [],
                                    section: [],
                                    small: [],
                                    span: [],
                                    sub: [],
                                    summary: [],
                                    sup: [],
                                    strong: [],
                                    strike: [],
                                    table: ["width", "border", "align", "valign"],
                                    tbody: ["align", "valign"],
                                    td: ["width", "rowspan", "colspan", "align", "valign"],
                                    tfoot: ["align", "valign"],
                                    th: ["width", "rowspan", "colspan", "align", "valign"],
                                    thead: ["align", "valign"],
                                    tr: ["rowspan", "align", "valign"],
                                    tt: [],
                                    u: [],
                                    ul: [],
                                    video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"],
                                };
                            }
                            var a = new r();
                            function l(e) {
                                return e.replace(c, "&lt;").replace(u, "&gt;");
                            }
                            var c = /</g,
                                u = />/g,
                                p = /"/g,
                                d = /&quot;/g,
                                g = /&#([a-zA-Z0-9]*);?/gim,
                                f = /&colon;?/gim,
                                h = /&newline;?/gim,
                                m = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
                                b = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
                                y = /u\s*r\s*l\s*\(.*/gi;
                            function A(e) {
                                return e.replace(p, "&quot;");
                            }
                            function x(e) {
                                return e.replace(d, '"');
                            }
                            function v(e) {
                                return e.replace(g, function (e, t) {
                                    return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10));
                                });
                            }
                            function w(e) {
                                return e.replace(f, ":").replace(h, " ");
                            }
                            function k(e) {
                                for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
                                return o.trim(t);
                            }
                            function E(e) {
                                return (e = k((e = w((e = v((e = x(e))))))));
                            }
                            function M(e) {
                                return (e = l((e = A(e))));
                            }
                            var C = /<!--[\s\S]*?-->/g;
                            (t.whiteList = {
                                a: ["target", "href", "title"],
                                abbr: ["title"],
                                address: [],
                                area: ["shape", "coords", "href", "alt"],
                                article: [],
                                aside: [],
                                audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
                                b: [],
                                bdi: ["dir"],
                                bdo: ["dir"],
                                big: [],
                                blockquote: ["cite"],
                                br: [],
                                caption: [],
                                center: [],
                                cite: [],
                                code: [],
                                col: ["align", "valign", "span", "width"],
                                colgroup: ["align", "valign", "span", "width"],
                                dd: [],
                                del: ["datetime"],
                                details: ["open"],
                                div: [],
                                dl: [],
                                dt: [],
                                em: [],
                                figcaption: [],
                                figure: [],
                                font: ["color", "size", "face"],
                                footer: [],
                                h1: [],
                                h2: [],
                                h3: [],
                                h4: [],
                                h5: [],
                                h6: [],
                                header: [],
                                hr: [],
                                i: [],
                                img: ["src", "alt", "title", "width", "height"],
                                ins: ["datetime"],
                                li: [],
                                mark: [],
                                nav: [],
                                ol: [],
                                p: [],
                                pre: [],
                                s: [],
                                section: [],
                                small: [],
                                span: [],
                                sub: [],
                                summary: [],
                                sup: [],
                                strong: [],
                                strike: [],
                                table: ["width", "border", "align", "valign"],
                                tbody: ["align", "valign"],
                                td: ["width", "rowspan", "colspan", "align", "valign"],
                                tfoot: ["align", "valign"],
                                th: ["width", "rowspan", "colspan", "align", "valign"],
                                thead: ["align", "valign"],
                                tr: ["rowspan", "align", "valign"],
                                tt: [],
                                u: [],
                                ul: [],
                                video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"],
                            }),
                                (t.getDefaultWhiteList = s),
                                (t.onTag = function (e, t, n) {}),
                                (t.onIgnoreTag = function (e, t, n) {}),
                                (t.onTagAttr = function (e, t, n) {}),
                                (t.onIgnoreTagAttr = function (e, t, n) {}),
                                (t.safeAttrValue = function (e, t, n, r) {
                                    if (((n = E(n)), "href" === t || "src" === t)) {
                                        if ("#" === (n = o.trim(n))) return "#";
                                        if (
                                            "http://" !== n.substr(0, 7) &&
                                            "https://" !== n.substr(0, 8) &&
                                            "mailto:" !== n.substr(0, 7) &&
                                            "tel:" !== n.substr(0, 4) &&
                                            "data:image/" !== n.substr(0, 11) &&
                                            "ftp://" !== n.substr(0, 6) &&
                                            "./" !== n.substr(0, 2) &&
                                            "../" !== n.substr(0, 3) &&
                                            "#" !== n[0] &&
                                            "/" !== n[0]
                                        )
                                            return "";
                                    } else if ("background" === t) {
                                        if (((m.lastIndex = 0), m.test(n))) return "";
                                    } else if ("style" === t) {
                                        if (((b.lastIndex = 0), b.test(n))) return "";
                                        if (((y.lastIndex = 0), y.test(n) && ((m.lastIndex = 0), m.test(n)))) return "";
                                        !1 !== r && (n = (r = r || a).process(n));
                                    }
                                    return (n = M(n));
                                }),
                                (t.escapeHtml = l),
                                (t.escapeQuote = A),
                                (t.unescapeQuote = x),
                                (t.escapeHtmlEntities = v),
                                (t.escapeDangerHtml5Entities = w),
                                (t.clearNonPrintableCharacter = k),
                                (t.friendlyAttrValue = E),
                                (t.escapeAttrValue = M),
                                (t.onIgnoreTagStripAll = function () {
                                    return "";
                                }),
                                (t.StripTagBody = function (e, t) {
                                    "function" != typeof t && (t = function () {});
                                    var n = !Array.isArray(e),
                                        r = [],
                                        i = !1;
                                    return {
                                        onIgnoreTag: function (s, a, l) {
                                            if (
                                                (function (t) {
                                                    return !!n || -1 !== o.indexOf(e, t);
                                                })(s)
                                            ) {
                                                if (l.isClosing) {
                                                    var c = "[/removed]",
                                                        u = l.position + c.length;
                                                    return r.push([!1 !== i ? i : l.position, u]), (i = !1), c;
                                                }
                                                return i || (i = l.position), "[removed]";
                                            }
                                            return t(s, a, l);
                                        },
                                        remove: function (e) {
                                            var t = "",
                                                n = 0;
                                            return (
                                                o.forEach(r, function (r) {
                                                    (t += e.slice(n, r[0])), (n = r[1]);
                                                }),
                                                (t += e.slice(n))
                                            );
                                        },
                                    };
                                }),
                                (t.stripCommentTag = function (e) {
                                    return e.replace(C, "");
                                }),
                                (t.stripBlankChar = function (e) {
                                    var t = e.split("");
                                    return (t = t.filter(function (e) {
                                        var t = e.charCodeAt(0);
                                        return !(127 === t || (t <= 31 && 10 !== t && 13 !== t));
                                    })).join("");
                                }),
                                (t.cssFilter = a),
                                (t.getDefaultCSSWhiteList = i);
                        },
                        function (e, t) {
                            function n() {
                                var e = {
                                    "align-content": !1,
                                    "align-items": !1,
                                    "align-self": !1,
                                    "alignment-adjust": !1,
                                    "alignment-baseline": !1,
                                    all: !1,
                                    "anchor-point": !1,
                                    animation: !1,
                                    "animation-delay": !1,
                                    "animation-direction": !1,
                                    "animation-duration": !1,
                                    "animation-fill-mode": !1,
                                    "animation-iteration-count": !1,
                                    "animation-name": !1,
                                    "animation-play-state": !1,
                                    "animation-timing-function": !1,
                                    azimuth: !1,
                                    "backface-visibility": !1,
                                    background: !0,
                                    "background-attachment": !0,
                                    "background-clip": !0,
                                    "background-color": !0,
                                    "background-image": !0,
                                    "background-origin": !0,
                                    "background-position": !0,
                                    "background-repeat": !0,
                                    "background-size": !0,
                                    "baseline-shift": !1,
                                    binding: !1,
                                    bleed: !1,
                                    "bookmark-label": !1,
                                    "bookmark-level": !1,
                                    "bookmark-state": !1,
                                    border: !0,
                                    "border-bottom": !0,
                                    "border-bottom-color": !0,
                                    "border-bottom-left-radius": !0,
                                    "border-bottom-right-radius": !0,
                                    "border-bottom-style": !0,
                                    "border-bottom-width": !0,
                                    "border-collapse": !0,
                                    "border-color": !0,
                                    "border-image": !0,
                                    "border-image-outset": !0,
                                    "border-image-repeat": !0,
                                    "border-image-slice": !0,
                                    "border-image-source": !0,
                                    "border-image-width": !0,
                                    "border-left": !0,
                                    "border-left-color": !0,
                                    "border-left-style": !0,
                                    "border-left-width": !0,
                                    "border-radius": !0,
                                    "border-right": !0,
                                    "border-right-color": !0,
                                    "border-right-style": !0,
                                    "border-right-width": !0,
                                    "border-spacing": !0,
                                    "border-style": !0,
                                    "border-top": !0,
                                    "border-top-color": !0,
                                    "border-top-left-radius": !0,
                                    "border-top-right-radius": !0,
                                    "border-top-style": !0,
                                    "border-top-width": !0,
                                    "border-width": !0,
                                    bottom: !1,
                                    "box-decoration-break": !0,
                                    "box-shadow": !0,
                                    "box-sizing": !0,
                                    "box-snap": !0,
                                    "box-suppress": !0,
                                    "break-after": !0,
                                    "break-before": !0,
                                    "break-inside": !0,
                                    "caption-side": !1,
                                    chains: !1,
                                    clear: !0,
                                    clip: !1,
                                    "clip-path": !1,
                                    "clip-rule": !1,
                                    color: !0,
                                    "color-interpolation-filters": !0,
                                    "column-count": !1,
                                    "column-fill": !1,
                                    "column-gap": !1,
                                    "column-rule": !1,
                                    "column-rule-color": !1,
                                    "column-rule-style": !1,
                                    "column-rule-width": !1,
                                    "column-span": !1,
                                    "column-width": !1,
                                    columns: !1,
                                    contain: !1,
                                    content: !1,
                                    "counter-increment": !1,
                                    "counter-reset": !1,
                                    "counter-set": !1,
                                    crop: !1,
                                    cue: !1,
                                    "cue-after": !1,
                                    "cue-before": !1,
                                    cursor: !1,
                                    direction: !1,
                                    display: !0,
                                    "display-inside": !0,
                                    "display-list": !0,
                                    "display-outside": !0,
                                    "dominant-baseline": !1,
                                    elevation: !1,
                                    "empty-cells": !1,
                                    filter: !1,
                                    flex: !1,
                                    "flex-basis": !1,
                                    "flex-direction": !1,
                                    "flex-flow": !1,
                                    "flex-grow": !1,
                                    "flex-shrink": !1,
                                    "flex-wrap": !1,
                                    float: !1,
                                    "float-offset": !1,
                                    "flood-color": !1,
                                    "flood-opacity": !1,
                                    "flow-from": !1,
                                    "flow-into": !1,
                                    font: !0,
                                    "font-family": !0,
                                    "font-feature-settings": !0,
                                    "font-kerning": !0,
                                    "font-language-override": !0,
                                    "font-size": !0,
                                    "font-size-adjust": !0,
                                    "font-stretch": !0,
                                    "font-style": !0,
                                    "font-synthesis": !0,
                                    "font-variant": !0,
                                    "font-variant-alternates": !0,
                                    "font-variant-caps": !0,
                                    "font-variant-east-asian": !0,
                                    "font-variant-ligatures": !0,
                                    "font-variant-numeric": !0,
                                    "font-variant-position": !0,
                                    "font-weight": !0,
                                    grid: !1,
                                    "grid-area": !1,
                                    "grid-auto-columns": !1,
                                    "grid-auto-flow": !1,
                                    "grid-auto-rows": !1,
                                    "grid-column": !1,
                                    "grid-column-end": !1,
                                    "grid-column-start": !1,
                                    "grid-row": !1,
                                    "grid-row-end": !1,
                                    "grid-row-start": !1,
                                    "grid-template": !1,
                                    "grid-template-areas": !1,
                                    "grid-template-columns": !1,
                                    "grid-template-rows": !1,
                                    "hanging-punctuation": !1,
                                    height: !0,
                                    hyphens: !1,
                                    icon: !1,
                                    "image-orientation": !1,
                                    "image-resolution": !1,
                                    "ime-mode": !1,
                                    "initial-letters": !1,
                                    "inline-box-align": !1,
                                    "justify-content": !1,
                                    "justify-items": !1,
                                    "justify-self": !1,
                                    left: !1,
                                    "letter-spacing": !0,
                                    "lighting-color": !0,
                                    "line-box-contain": !1,
                                    "line-break": !1,
                                    "line-grid": !1,
                                    "line-height": !1,
                                    "line-snap": !1,
                                    "line-stacking": !1,
                                    "line-stacking-ruby": !1,
                                    "line-stacking-shift": !1,
                                    "line-stacking-strategy": !1,
                                    "list-style": !0,
                                    "list-style-image": !0,
                                    "list-style-position": !0,
                                    "list-style-type": !0,
                                    margin: !0,
                                    "margin-bottom": !0,
                                    "margin-left": !0,
                                    "margin-right": !0,
                                    "margin-top": !0,
                                    "marker-offset": !1,
                                    "marker-side": !1,
                                    marks: !1,
                                    mask: !1,
                                    "mask-box": !1,
                                    "mask-box-outset": !1,
                                    "mask-box-repeat": !1,
                                    "mask-box-slice": !1,
                                    "mask-box-source": !1,
                                    "mask-box-width": !1,
                                    "mask-clip": !1,
                                    "mask-image": !1,
                                    "mask-origin": !1,
                                    "mask-position": !1,
                                    "mask-repeat": !1,
                                    "mask-size": !1,
                                    "mask-source-type": !1,
                                    "mask-type": !1,
                                    "max-height": !0,
                                    "max-lines": !1,
                                    "max-width": !0,
                                    "min-height": !0,
                                    "min-width": !0,
                                    "move-to": !1,
                                    "nav-down": !1,
                                    "nav-index": !1,
                                    "nav-left": !1,
                                    "nav-right": !1,
                                    "nav-up": !1,
                                    "object-fit": !1,
                                    "object-position": !1,
                                    opacity: !1,
                                    order: !1,
                                    orphans: !1,
                                    outline: !1,
                                    "outline-color": !1,
                                    "outline-offset": !1,
                                    "outline-style": !1,
                                    "outline-width": !1,
                                    overflow: !1,
                                    "overflow-wrap": !1,
                                    "overflow-x": !1,
                                    "overflow-y": !1,
                                    padding: !0,
                                    "padding-bottom": !0,
                                    "padding-left": !0,
                                    "padding-right": !0,
                                    "padding-top": !0,
                                    page: !1,
                                    "page-break-after": !1,
                                    "page-break-before": !1,
                                    "page-break-inside": !1,
                                    "page-policy": !1,
                                    pause: !1,
                                    "pause-after": !1,
                                    "pause-before": !1,
                                    perspective: !1,
                                    "perspective-origin": !1,
                                    pitch: !1,
                                    "pitch-range": !1,
                                    "play-during": !1,
                                    position: !1,
                                    "presentation-level": !1,
                                    quotes: !1,
                                    "region-fragment": !1,
                                    resize: !1,
                                    rest: !1,
                                    "rest-after": !1,
                                    "rest-before": !1,
                                    richness: !1,
                                    right: !1,
                                    rotation: !1,
                                    "rotation-point": !1,
                                    "ruby-align": !1,
                                    "ruby-merge": !1,
                                    "ruby-position": !1,
                                    "shape-image-threshold": !1,
                                    "shape-outside": !1,
                                    "shape-margin": !1,
                                    size: !1,
                                    speak: !1,
                                    "speak-as": !1,
                                    "speak-header": !1,
                                    "speak-numeral": !1,
                                    "speak-punctuation": !1,
                                    "speech-rate": !1,
                                    stress: !1,
                                    "string-set": !1,
                                    "tab-size": !1,
                                    "table-layout": !1,
                                    "text-align": !0,
                                    "text-align-last": !0,
                                    "text-combine-upright": !0,
                                    "text-decoration": !0,
                                    "text-decoration-color": !0,
                                    "text-decoration-line": !0,
                                    "text-decoration-skip": !0,
                                    "text-decoration-style": !0,
                                    "text-emphasis": !0,
                                    "text-emphasis-color": !0,
                                    "text-emphasis-position": !0,
                                    "text-emphasis-style": !0,
                                    "text-height": !0,
                                    "text-indent": !0,
                                    "text-justify": !0,
                                    "text-orientation": !0,
                                    "text-overflow": !0,
                                    "text-shadow": !0,
                                    "text-space-collapse": !0,
                                    "text-transform": !0,
                                    "text-underline-position": !0,
                                    "text-wrap": !0,
                                    top: !1,
                                    transform: !1,
                                    "transform-origin": !1,
                                    "transform-style": !1,
                                    transition: !1,
                                    "transition-delay": !1,
                                    "transition-duration": !1,
                                    "transition-property": !1,
                                    "transition-timing-function": !1,
                                    "unicode-bidi": !1,
                                    "vertical-align": !1,
                                    visibility: !1,
                                    "voice-balance": !1,
                                    "voice-duration": !1,
                                    "voice-family": !1,
                                    "voice-pitch": !1,
                                    "voice-range": !1,
                                    "voice-rate": !1,
                                    "voice-stress": !1,
                                    "voice-volume": !1,
                                    volume: !1,
                                    "white-space": !1,
                                    widows: !1,
                                    width: !0,
                                    "will-change": !1,
                                    "word-break": !0,
                                    "word-spacing": !0,
                                    "word-wrap": !0,
                                    "wrap-flow": !1,
                                    "wrap-through": !1,
                                    "writing-mode": !1,
                                    "z-index": !1,
                                };
                                return e;
                            }
                            var r = /javascript\s*\:/gim;
                            (t.whiteList = n()),
                                (t.getDefaultWhiteList = n),
                                (t.onAttr = function (e, t, n) {}),
                                (t.onIgnoreAttr = function (e, t, n) {}),
                                (t.safeAttrValue = function (e, t) {
                                    return r.test(t) ? "" : t;
                                });
                        },
                        function (e, t) {
                            e.exports = {
                                indexOf: function (e, t) {
                                    var n, r;
                                    if (Array.prototype.indexOf) return e.indexOf(t);
                                    for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                    return -1;
                                },
                                forEach: function (e, t, n) {
                                    var r, i;
                                    if (Array.prototype.forEach) return e.forEach(t, n);
                                    for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
                                },
                                trim: function (e) {
                                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
                                },
                                trimRight: function (e) {
                                    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
                                },
                            };
                        },
                        function (e, t, n) {
                            var r = n(15);
                            function i(e) {
                                var t = r.spaceIndex(e);
                                if (-1 === t) var n = e.slice(1, -1);
                                else n = e.slice(1, t + 1);
                                return "/" === (n = r.trim(n).toLowerCase()).slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n;
                            }
                            function o(e) {
                                return "</" === e.slice(0, 2);
                            }
                            var s = /[^a-zA-Z0-9_:\.\-]/gim;
                            function a(e, t) {
                                for (; t < e.length; t++) {
                                    var n = e[t];
                                    if (" " !== n) return "=" === n ? t : -1;
                                }
                            }
                            function l(e, t) {
                                for (; t > 0; t--) {
                                    var n = e[t];
                                    if (" " !== n) return "=" === n ? t : -1;
                                }
                            }
                            function c(e) {
                                return (function (e) {
                                    return ('"' === e[0] && '"' === e[e.length - 1]) || ("'" === e[0] && "'" === e[e.length - 1]);
                                })(e)
                                    ? e.substr(1, e.length - 2)
                                    : e;
                            }
                            (t.parseTag = function (e, t, n) {
                                "use strict";
                                var r = "",
                                    s = 0,
                                    a = !1,
                                    l = !1,
                                    c = 0,
                                    u = e.length,
                                    p = "",
                                    d = "";
                                e: for (c = 0; c < u; c++) {
                                    var g = e.charAt(c);
                                    if (!1 === a) {
                                        if ("<" === g) {
                                            a = c;
                                            continue;
                                        }
                                    } else if (!1 === l) {
                                        if ("<" === g) {
                                            (r += n(e.slice(s, c))), (a = c), (s = c);
                                            continue;
                                        }
                                        if (">" === g) {
                                            (r += n(e.slice(s, a))), (p = i((d = e.slice(a, c + 1)))), (r += t(a, r.length, p, d, o(d))), (s = c + 1), (a = !1);
                                            continue;
                                        }
                                        if ('"' === g || "'" === g)
                                            for (var f = 1, h = e.charAt(c - f); "" === h.trim() || "=" === h; ) {
                                                if ("=" === h) {
                                                    l = g;
                                                    continue e;
                                                }
                                                h = e.charAt(c - ++f);
                                            }
                                    } else if (g === l) {
                                        l = !1;
                                        continue;
                                    }
                                }
                                return s < e.length && (r += n(e.substr(s))), r;
                            }),
                                (t.parseAttr = function (e, t) {
                                    "use strict";
                                    var n = 0,
                                        i = [],
                                        o = !1,
                                        u = e.length;
                                    function p(e, n) {
                                        if (!((e = (e = r.trim(e)).replace(s, "").toLowerCase()).length < 1)) {
                                            var o = t(e, n || "");
                                            o && i.push(o);
                                        }
                                    }
                                    for (var d = 0; d < u; d++) {
                                        var g,
                                            f = e.charAt(d);
                                        if (!1 !== o || "=" !== f)
                                            if (!1 === o || d !== n || ('"' !== f && "'" !== f) || "=" !== e.charAt(d - 1)) {
                                                if (/\s|\n|\t/.test(f)) {
                                                    if (((e = e.replace(/\s|\n|\t/g, " ")), !1 === o)) {
                                                        if (-1 === (g = a(e, d))) {
                                                            p(r.trim(e.slice(n, d))), (o = !1), (n = d + 1);
                                                            continue;
                                                        }
                                                        d = g - 1;
                                                        continue;
                                                    }
                                                    if (-1 === (g = l(e, d - 1))) {
                                                        p(o, c(r.trim(e.slice(n, d)))), (o = !1), (n = d + 1);
                                                        continue;
                                                    }
                                                }
                                            } else {
                                                if (-1 === (g = e.indexOf(f, d + 1))) break;
                                                p(o, r.trim(e.slice(n + 1, g))), (o = !1), (n = (d = g) + 1);
                                            }
                                        else (o = e.slice(n, d)), (n = d + 1);
                                    }
                                    return n < e.length && (!1 === o ? p(e.slice(n)) : p(o, c(r.trim(e.slice(n))))), r.trim(i.join(" "));
                                });
                        },
                        ,
                        function (e, t, n) {
                            var r = n(20),
                                i = n(25);
                            function o(e) {
                                return null == e;
                            }
                            function s(e) {
                                ((e = (function (e) {
                                    var t = {};
                                    for (var n in e) t[n] = e[n];
                                    return t;
                                })(e || {})).whiteList = e.whiteList || r.whiteList),
                                    (e.onAttr = e.onAttr || r.onAttr),
                                    (e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr),
                                    (e.safeAttrValue = e.safeAttrValue || r.safeAttrValue),
                                    (this.options = e);
                            }
                            n(21),
                                (s.prototype.process = function (e) {
                                    if (!(e = (e = e || "").toString())) return "";
                                    var t = this.options,
                                        n = t.whiteList,
                                        r = t.onAttr,
                                        s = t.onIgnoreAttr,
                                        a = t.safeAttrValue;
                                    return i(e, function (e, t, i, l, c) {
                                        var u = n[i],
                                            p = !1;
                                        if ((!0 === u ? (p = u) : "function" == typeof u ? (p = u(l)) : u instanceof RegExp && (p = u.test(l)), !0 !== p && (p = !1), (l = a(i, l)))) {
                                            var d,
                                                g = { position: t, sourcePosition: e, source: c, isWhite: p };
                                            return p ? (o((d = r(i, l, g))) ? i + ":" + l : d) : o((d = s(i, l, g))) ? void 0 : d;
                                        }
                                    });
                                }),
                                (e.exports = s);
                        },
                        function (e, t, n) {
                            var r = n(21);
                            e.exports = function (e, t) {
                                ";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
                                var n = e.length,
                                    i = !1,
                                    o = 0,
                                    s = 0,
                                    a = "";
                                function l() {
                                    if (!i) {
                                        var n = r.trim(e.slice(o, s)),
                                            l = n.indexOf(":");
                                        if (-1 !== l) {
                                            var c = r.trim(n.slice(0, l)),
                                                u = r.trim(n.slice(l + 1));
                                            if (c) {
                                                var p = t(o, a.length, c, u, n);
                                                p && (a += p + "; ");
                                            }
                                        }
                                    }
                                    o = s + 1;
                                }
                                for (; s < n; s++) {
                                    var c = e[s];
                                    if ("/" === c && "*" === e[s + 1]) {
                                        var u = e.indexOf("*/", s + 2);
                                        if (-1 === u) break;
                                        (o = (s = u + 1) + 1), (i = !1);
                                    } else "(" === c ? (i = !0) : ")" === c ? (i = !1) : ";" === c ? i || l() : "\n" === c && l();
                                }
                                return r.trim(a);
                            };
                        },
                        function (e, t, n) {
                            var r = n(14).FilterCSS,
                                i = n(19),
                                o = n(22),
                                s = o.parseTag,
                                a = o.parseAttr,
                                l = n(15);
                            function c(e) {
                                return null == e;
                            }
                            function u(e) {
                                (e = (function (e) {
                                    var t = {};
                                    for (var n in e) t[n] = e[n];
                                    return t;
                                })(e || {})).stripIgnoreTag && (e.onIgnoreTag, (e.onIgnoreTag = i.onIgnoreTagStripAll)),
                                    (e.whiteList = e.whiteList || i.whiteList),
                                    (e.onTag = e.onTag || i.onTag),
                                    (e.onTagAttr = e.onTagAttr || i.onTagAttr),
                                    (e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag),
                                    (e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr),
                                    (e.safeAttrValue = e.safeAttrValue || i.safeAttrValue),
                                    (e.escapeHtml = e.escapeHtml || i.escapeHtml),
                                    (this.options = e),
                                    !1 === e.css ? (this.cssFilter = !1) : ((e.css = e.css || {}), (this.cssFilter = new r(e.css)));
                            }
                            (u.prototype.process = function (e) {
                                if (!(e = (e = e || "").toString())) return "";
                                var t = this.options,
                                    n = t.whiteList,
                                    r = t.onTag,
                                    o = t.onIgnoreTag,
                                    u = t.onTagAttr,
                                    p = t.onIgnoreTagAttr,
                                    d = t.safeAttrValue,
                                    g = t.escapeHtml,
                                    f = this.cssFilter;
                                t.stripBlankChar && (e = i.stripBlankChar(e)), t.allowCommentTag || (e = i.stripCommentTag(e));
                                var h = !1;
                                t.stripIgnoreTagBody && ((h = i.StripTagBody(t.stripIgnoreTagBody, o)), (o = h.onIgnoreTag));
                                var m = s(
                                    e,
                                    function (e, t, i, s, h) {
                                        var m,
                                            b = { sourcePosition: e, position: t, isClosing: h, isWhite: n.hasOwnProperty(i) };
                                        if (!c((m = r(i, s, b)))) return m;
                                        if (b.isWhite) {
                                            if (b.isClosing) return "</" + i + ">";
                                            var y = (function (e) {
                                                    var t = l.spaceIndex(e);
                                                    if (-1 === t) return { html: "", closing: "/" === e[e.length - 2] };
                                                    var n = "/" === (e = l.trim(e.slice(t + 1, -1)))[e.length - 1];
                                                    return n && (e = l.trim(e.slice(0, -1))), { html: e, closing: n };
                                                })(s),
                                                A = n[i],
                                                x = a(y.html, function (e, t) {
                                                    var n,
                                                        r = -1 !== l.indexOf(A, e);
                                                    return c((n = u(i, e, t, r))) ? (r ? ((t = d(i, e, t, f)) ? e + '="' + t + '"' : e) : c((n = p(i, e, t, r))) ? void 0 : n) : n;
                                                });
                                            return (s = "<" + i), x && (s += " " + x), y.closing && (s += " /"), (s += ">");
                                        }
                                        return c((m = o(i, s, b))) ? g(s) : m;
                                    },
                                    g
                                );
                                return h && (m = h.remove(m)), m;
                            }),
                                (e.exports = u);
                        },
                    ]).default;
                }),
                (e.exports = r(n(94942)));
        },
        99530: function (e) {
            "undefined" != typeof self && self,
                (e.exports = (function (e) {
                    var t = {};
                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var i = (t[r] = { i: r, l: !1, exports: {} });
                        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                    }
                    return (
                        (n.m = e),
                        (n.c = t),
                        (n.d = function (e, t, r) {
                            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                        }),
                        (n.r = function (e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                        }),
                        (n.t = function (e, t) {
                            if ((1 & t && (e = n(e)), 8 & t)) return e;
                            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                            var r = Object.create(null);
                            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                                for (var i in e)
                                    n.d(
                                        r,
                                        i,
                                        function (t) {
                                            return e[t];
                                        }.bind(null, i)
                                    );
                            return r;
                        }),
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                          return e.default;
                                      }
                                    : function () {
                                          return e;
                                      };
                            return n.d(t, "a", t), t;
                        }),
                        (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (n.p = ""),
                        n((n.s = 86))
                    );
                })([
                    function (e, t, n) {
                        "use strict";
                        var r = Object.prototype.hasOwnProperty;
                        function i(e, t) {
                            return r.call(e, t);
                        }
                        function o(e) {
                            return !(
                                (e >= 55296 && e <= 57343) ||
                                (e >= 64976 && e <= 65007) ||
                                65535 == (65535 & e) ||
                                65534 == (65535 & e) ||
                                (e >= 0 && e <= 8) ||
                                11 === e ||
                                (e >= 14 && e <= 31) ||
                                (e >= 127 && e <= 159) ||
                                e > 1114111
                            );
                        }
                        function s(e) {
                            if (e > 65535) {
                                var t = 55296 + ((e -= 65536) >> 10),
                                    n = 56320 + (1023 & e);
                                return String.fromCharCode(t, n);
                            }
                            return String.fromCharCode(e);
                        }
                        var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
                            l = new RegExp(a.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"),
                            c = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
                            u = n(7),
                            p = /[&<>"]/,
                            d = /[&<>"]/g,
                            g = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
                        function f(e) {
                            return g[e];
                        }
                        var h = /[.?*+^$[\]\\(){}|-]/g,
                            m = n(3);
                        (t.lib = {}),
                            (t.lib.mdurl = n(8)),
                            (t.lib.ucmicro = n(26)),
                            (t.assign = function (e) {
                                return (
                                    Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                                        if (t) {
                                            if ("object" != typeof t) throw new TypeError(t + "must be object");
                                            Object.keys(t).forEach(function (n) {
                                                e[n] = t[n];
                                            });
                                        }
                                    }),
                                    e
                                );
                            }),
                            (t.isString = function (e) {
                                return (
                                    "[object String]" ===
                                    (function (e) {
                                        return Object.prototype.toString.call(e);
                                    })(e)
                                );
                            }),
                            (t.has = i),
                            (t.unescapeMd = function (e) {
                                return e.indexOf("\\") < 0 ? e : e.replace(a, "$1");
                            }),
                            (t.unescapeAll = function (e) {
                                return e.indexOf("\\") < 0 && e.indexOf("&") < 0
                                    ? e
                                    : e.replace(l, function (e, t, n) {
                                          return (
                                              t ||
                                              (function (e, t) {
                                                  var n = 0;
                                                  return i(u, t) ? u[t] : 35 === t.charCodeAt(0) && c.test(t) && o((n = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10))) ? s(n) : e;
                                              })(e, n)
                                          );
                                      });
                            }),
                            (t.isValidEntityCode = o),
                            (t.fromCodePoint = s),
                            (t.escapeHtml = function (e) {
                                return p.test(e) ? e.replace(d, f) : e;
                            }),
                            (t.arrayReplaceAt = function (e, t, n) {
                                return [].concat(e.slice(0, t), n, e.slice(t + 1));
                            }),
                            (t.isSpace = function (e) {
                                switch (e) {
                                    case 9:
                                    case 32:
                                        return !0;
                                }
                                return !1;
                            }),
                            (t.isWhiteSpace = function (e) {
                                if (e >= 8192 && e <= 8202) return !0;
                                switch (e) {
                                    case 9:
                                    case 10:
                                    case 11:
                                    case 12:
                                    case 13:
                                    case 32:
                                    case 160:
                                    case 5760:
                                    case 8239:
                                    case 8287:
                                    case 12288:
                                        return !0;
                                }
                                return !1;
                            }),
                            (t.isMdAsciiPunct = function (e) {
                                switch (e) {
                                    case 33:
                                    case 34:
                                    case 35:
                                    case 36:
                                    case 37:
                                    case 38:
                                    case 39:
                                    case 40:
                                    case 41:
                                    case 42:
                                    case 43:
                                    case 44:
                                    case 45:
                                    case 46:
                                    case 47:
                                    case 58:
                                    case 59:
                                    case 60:
                                    case 61:
                                    case 62:
                                    case 63:
                                    case 64:
                                    case 91:
                                    case 92:
                                    case 93:
                                    case 94:
                                    case 95:
                                    case 96:
                                    case 123:
                                    case 124:
                                    case 125:
                                    case 126:
                                        return !0;
                                    default:
                                        return !1;
                                }
                            }),
                            (t.isPunctChar = function (e) {
                                return m.test(e);
                            }),
                            (t.escapeRE = function (e) {
                                return e.replace(h, "\\$&");
                            }),
                            (t.normalizeReference = function (e) {
                                return (e = e.trim().replace(/\s+/g, " ")), "Ṿ" === "ẞ".toLowerCase() && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
                            });
                    },
                    function (e, t, n) {
                        "use strict";
                        function r() {
                            return (r =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                }).apply(this, arguments);
                        }
                        n.d(t, "a", function () {
                            return r;
                        });
                    },
                    function (e, t, n) {
                        "use strict";
                        n.d(t, "a", function () {
                            return s;
                        });
                        var r = n(16),
                            i = n.n(r),
                            o = n(0);
                        function s(e) {
                            var t = e.codeHighlightExtensionMap,
                                n = void 0 === t ? {} : t,
                                r = e.hasLang,
                                i =
                                    void 0 === r
                                        ? function () {
                                              return !0;
                                          }
                                        : r,
                                s = e.highlight,
                                a =
                                    void 0 === s
                                        ? function (e) {
                                              return e;
                                          }
                                        : s,
                                l = e.codeBlockClass;
                            return function (e, t) {
                                var r = Object(o.escapeHtml)(e);
                                return (
                                    (t = n[t] || t) && i(t) && (r = a(e, t)),
                                    '<pre class="' +
                                        (function (e) {
                                            return l ? l(e) : "language-" + e;
                                        })(t) +
                                        '"><code>' +
                                        r +
                                        "</code></pre>"
                                );
                            };
                        }
                        t.b = function () {
                            var e = new i.a();
                            return e.set({ html: !0, breaks: !0, linkify: !1, typographer: !0 }), e;
                        };
                    },
                    function (e, t) {
                        e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
                    },
                    function (e, t, n) {
                        "use strict";
                        function r() {
                            (this.__rules__ = []), (this.__cache__ = null);
                        }
                        (r.prototype.__find__ = function (e) {
                            for (var t = 0; t < this.__rules__.length; t++) if (this.__rules__[t].name === e) return t;
                            return -1;
                        }),
                            (r.prototype.__compile__ = function () {
                                var e = this,
                                    t = [""];
                                e.__rules__.forEach(function (e) {
                                    e.enabled &&
                                        e.alt.forEach(function (e) {
                                            t.indexOf(e) < 0 && t.push(e);
                                        });
                                }),
                                    (e.__cache__ = {}),
                                    t.forEach(function (t) {
                                        (e.__cache__[t] = []),
                                            e.__rules__.forEach(function (n) {
                                                n.enabled && ((t && n.alt.indexOf(t) < 0) || e.__cache__[t].push(n.fn));
                                            });
                                    });
                            }),
                            (r.prototype.at = function (e, t, n) {
                                var r = this.__find__(e),
                                    i = n || {};
                                if (-1 === r) throw new Error("Parser rule not found: " + e);
                                (this.__rules__[r].fn = t), (this.__rules__[r].alt = i.alt || []), (this.__cache__ = null);
                            }),
                            (r.prototype.before = function (e, t, n, r) {
                                var i = this.__find__(e),
                                    o = r || {};
                                if (-1 === i) throw new Error("Parser rule not found: " + e);
                                this.__rules__.splice(i, 0, { name: t, enabled: !0, fn: n, alt: o.alt || [] }), (this.__cache__ = null);
                            }),
                            (r.prototype.after = function (e, t, n, r) {
                                var i = this.__find__(e),
                                    o = r || {};
                                if (-1 === i) throw new Error("Parser rule not found: " + e);
                                this.__rules__.splice(i + 1, 0, { name: t, enabled: !0, fn: n, alt: o.alt || [] }), (this.__cache__ = null);
                            }),
                            (r.prototype.push = function (e, t, n) {
                                var r = n || {};
                                this.__rules__.push({ name: e, enabled: !0, fn: t, alt: r.alt || [] }), (this.__cache__ = null);
                            }),
                            (r.prototype.enable = function (e, t) {
                                Array.isArray(e) || (e = [e]);
                                var n = [];
                                return (
                                    e.forEach(function (e) {
                                        var r = this.__find__(e);
                                        if (r < 0) {
                                            if (t) return;
                                            throw new Error("Rules manager: invalid rule name " + e);
                                        }
                                        (this.__rules__[r].enabled = !0), n.push(e);
                                    }, this),
                                    (this.__cache__ = null),
                                    n
                                );
                            }),
                            (r.prototype.enableOnly = function (e, t) {
                                Array.isArray(e) || (e = [e]),
                                    this.__rules__.forEach(function (e) {
                                        e.enabled = !1;
                                    }),
                                    this.enable(e, t);
                            }),
                            (r.prototype.disable = function (e, t) {
                                Array.isArray(e) || (e = [e]);
                                var n = [];
                                return (
                                    e.forEach(function (e) {
                                        var r = this.__find__(e);
                                        if (r < 0) {
                                            if (t) return;
                                            throw new Error("Rules manager: invalid rule name " + e);
                                        }
                                        (this.__rules__[r].enabled = !1), n.push(e);
                                    }, this),
                                    (this.__cache__ = null),
                                    n
                                );
                            }),
                            (r.prototype.getRules = function (e) {
                                return null === this.__cache__ && this.__compile__(), this.__cache__[e] || [];
                            }),
                            (e.exports = r);
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e, t, n) {
                            (this.type = e),
                                (this.tag = t),
                                (this.attrs = null),
                                (this.map = null),
                                (this.nesting = n),
                                (this.level = 0),
                                (this.children = null),
                                (this.content = ""),
                                (this.markup = ""),
                                (this.info = ""),
                                (this.meta = null),
                                (this.block = !1),
                                (this.hidden = !1);
                        }
                        (r.prototype.attrIndex = function (e) {
                            var t, n, r;
                            if (!this.attrs) return -1;
                            for (n = 0, r = (t = this.attrs).length; n < r; n++) if (t[n][0] === e) return n;
                            return -1;
                        }),
                            (r.prototype.attrPush = function (e) {
                                this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
                            }),
                            (r.prototype.attrSet = function (e, t) {
                                var n = this.attrIndex(e),
                                    r = [e, t];
                                n < 0 ? this.attrPush(r) : (this.attrs[n] = r);
                            }),
                            (r.prototype.attrGet = function (e) {
                                var t = this.attrIndex(e),
                                    n = null;
                                return t >= 0 && (n = this.attrs[t][1]), n;
                            }),
                            (r.prototype.attrJoin = function (e, t) {
                                var n = this.attrIndex(e);
                                n < 0 ? this.attrPush([e, t]) : (this.attrs[n][1] = this.attrs[n][1] + " " + t);
                            }),
                            (e.exports = r);
                    },
                    function (e, t, n) {
                        "use strict";
                        const r = /[\u0000-\u001f]/g,
                            i = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g,
                            o = /[\u0300-\u036F]/g;
                        e.exports = function (e) {
                            return e
                                .normalize("NFKD")
                                .replace(o, "")
                                .replace(r, "")
                                .replace(i, "-")
                                .replace(/\-{2,}/g, "-")
                                .replace(/^\-+|\-+$/g, "")
                                .replace(/^(\d)/, "_$1")
                                .toLowerCase();
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = n(21);
                    },
                    function (e, t, n) {
                        "use strict";
                        (e.exports.encode = n(22)), (e.exports.decode = n(23)), (e.exports.format = n(24)), (e.exports.parse = n(25));
                    },
                    function (e, t) {
                        e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
                    },
                    function (e, t) {
                        e.exports = /[\0-\x1F\x7F-\x9F]/;
                    },
                    function (e, t) {
                        e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
                            i = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
                            o = new RegExp("^(?:" + r + "|" + i + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
                            s = new RegExp("^(?:" + r + "|" + i + ")");
                        (e.exports.HTML_TAG_RE = o), (e.exports.HTML_OPEN_CLOSE_TAG_RE = s);
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e, t) {
                            var n,
                                r,
                                i,
                                o,
                                s,
                                a = [],
                                l = t.length;
                            for (n = 0; n < l; n++)
                                126 === (i = t[n]).marker &&
                                    -1 !== i.end &&
                                    ((o = t[i.end]),
                                    ((s = e.tokens[i.token]).type = "s_open"),
                                    (s.tag = "s"),
                                    (s.nesting = 1),
                                    (s.markup = "~~"),
                                    (s.content = ""),
                                    ((s = e.tokens[o.token]).type = "s_close"),
                                    (s.tag = "s"),
                                    (s.nesting = -1),
                                    (s.markup = "~~"),
                                    (s.content = ""),
                                    "text" === e.tokens[o.token - 1].type && "~" === e.tokens[o.token - 1].content && a.push(o.token - 1));
                            for (; a.length; ) {
                                for (r = (n = a.pop()) + 1; r < e.tokens.length && "s_close" === e.tokens[r].type; ) r++;
                                n !== --r && ((s = e.tokens[r]), (e.tokens[r] = e.tokens[n]), (e.tokens[n] = s));
                            }
                        }
                        (e.exports.tokenize = function (e, t) {
                            var n,
                                r,
                                i,
                                o,
                                s = e.pos,
                                a = e.src.charCodeAt(s);
                            if (t) return !1;
                            if (126 !== a) return !1;
                            if (((i = (r = e.scanDelims(e.pos, !0)).length), (o = String.fromCharCode(a)), i < 2)) return !1;
                            for (i % 2 && ((e.push("text", "", 0).content = o), i--), n = 0; n < i; n += 2)
                                (e.push("text", "", 0).content = o + o), e.delimiters.push({ marker: a, length: 0, token: e.tokens.length - 1, end: -1, open: r.can_open, close: r.can_close });
                            return (e.pos += r.length), !0;
                        }),
                            (e.exports.postProcess = function (e) {
                                var t,
                                    n = e.tokens_meta,
                                    i = e.tokens_meta.length;
                                for (r(e, e.delimiters), t = 0; t < i; t++) n[t] && n[t].delimiters && r(e, n[t].delimiters);
                            });
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e, t) {
                            var n, r, i, o, s, a;
                            for (n = t.length - 1; n >= 0; n--)
                                (95 !== (r = t[n]).marker && 42 !== r.marker) ||
                                    (-1 !== r.end &&
                                        ((i = t[r.end]),
                                        (a = n > 0 && t[n - 1].end === r.end + 1 && t[n - 1].marker === r.marker && t[n - 1].token === r.token - 1 && t[r.end + 1].token === i.token + 1),
                                        (s = String.fromCharCode(r.marker)),
                                        ((o = e.tokens[r.token]).type = a ? "strong_open" : "em_open"),
                                        (o.tag = a ? "strong" : "em"),
                                        (o.nesting = 1),
                                        (o.markup = a ? s + s : s),
                                        (o.content = ""),
                                        ((o = e.tokens[i.token]).type = a ? "strong_close" : "em_close"),
                                        (o.tag = a ? "strong" : "em"),
                                        (o.nesting = -1),
                                        (o.markup = a ? s + s : s),
                                        (o.content = ""),
                                        a && ((e.tokens[t[n - 1].token].content = ""), (e.tokens[t[r.end + 1].token].content = ""), n--)));
                        }
                        (e.exports.tokenize = function (e, t) {
                            var n,
                                r,
                                i = e.pos,
                                o = e.src.charCodeAt(i);
                            if (t) return !1;
                            if (95 !== o && 42 !== o) return !1;
                            for (r = e.scanDelims(e.pos, 42 === o), n = 0; n < r.length; n++)
                                (e.push("text", "", 0).content = String.fromCharCode(o)), e.delimiters.push({ marker: o, length: r.length, token: e.tokens.length - 1, end: -1, open: r.can_open, close: r.can_close });
                            return (e.pos += r.length), !0;
                        }),
                            (e.exports.postProcess = function (e) {
                                var t,
                                    n = e.tokens_meta,
                                    i = e.tokens_meta.length;
                                for (r(e, e.delimiters), t = 0; t < i; t++) n[t] && n[t].delimiters && r(e, n[t].delimiters);
                            });
                    },
                    function (e, t, n) {
                        "use strict";
                        const r = n(18),
                            i = { leftDelimiter: "{", rightDelimiter: "}", allowedAttributes: [] };
                        function o(e, t, n) {
                            let r = { match: !1, j: null },
                                i = ((c = e), (u = void 0 !== n.shift ? t + n.shift : n.position) >= 0 ? c[u] : c[c.length + u]);
                            var c, u;
                            if (void 0 === i) return r;
                            for (let e in n)
                                if ("shift" !== e && "position" !== e) {
                                    if (void 0 === i[e]) return r;
                                    if ("children" === e && s(n.children)) {
                                        if (0 === i.children.length) return r;
                                        let e,
                                            t = n.children,
                                            s = i.children;
                                        if (t.every((e) => void 0 !== e.position)) {
                                            if (((e = t.every((e) => o(s, e.position, e).match)), e)) {
                                                let e = l(t).position;
                                                r.j = e >= 0 ? e : s.length + e;
                                            }
                                        } else
                                            for (let n = 0; n < s.length; n++)
                                                if (((e = t.every((e) => o(s, n, e).match)), e)) {
                                                    r.j = n;
                                                    break;
                                                }
                                        if (!1 === e) return r;
                                    } else
                                        switch (typeof n[e]) {
                                            case "boolean":
                                            case "number":
                                            case "string":
                                                if (i[e] !== n[e]) return r;
                                                break;
                                            case "function":
                                                if (!n[e](i[e])) return r;
                                                break;
                                            case "object":
                                                if (a(n[e])) {
                                                    if (!1 === n[e].every((t) => t(i[e]))) return r;
                                                    break;
                                                }
                                            default:
                                                throw new Error(`Unknown type of pattern test (key: ${e}). Test should be of type boolean, number, string, function or array of functions.`);
                                        }
                                }
                            return (r.match = !0), r;
                        }
                        function s(e) {
                            return Array.isArray(e) && e.length && e.every((e) => "object" == typeof e);
                        }
                        function a(e) {
                            return Array.isArray(e) && e.length && e.every((e) => "function" == typeof e);
                        }
                        function l(e) {
                            return e.slice(-1)[0] || {};
                        }
                        e.exports = function (e, t) {
                            let n = Object.assign({}, i);
                            n = Object.assign(n, t);
                            const s = r(n);
                            e.core.ruler.before("linkify", "curly_attributes", function (e) {
                                let t = e.tokens;
                                for (let e = 0; e < t.length; e++)
                                    for (let n = 0; n < s.length; n++) {
                                        let r = s[n],
                                            i = null;
                                        r.tests.every((n) => {
                                            let r = o(t, e, n);
                                            return null !== r.j && (i = r.j), r.match;
                                        }) && (r.transform(t, e, i), ("inline attributes" !== r.name && "inline nesting 0" !== r.name) || n--);
                                    }
                            });
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = n(20);
                    },
                    function (e, t, n) {
                        "use strict";
                        n.r(t),
                            n.d(t, "default", function () {
                                return h;
                            });
                        var r = n(1),
                            i = n(15),
                            o = n.n(i),
                            s = function (e, t) {
                                var n = (void 0 === t ? {} : t).lineMarkup,
                                    r = void 0 === n ? "data-line" : n,
                                    i = function (e, t, n, r, i) {
                                        return i.renderToken(e, t, n);
                                    };
                                function o(e) {
                                    return function (t, n, i, o, s) {
                                        var a = t[n];
                                        return a.attrPush([r, a.map[0] + 1]), e(t, n, i, o, s);
                                    };
                                }
                                function s(e) {
                                    return function (t, n, i, o, s) {
                                        var a = e(t, n, i, o, s),
                                            l = t[n].map[0] + 1;
                                        return "<div " + r + '="' + l + '">' + a + "</div>";
                                    };
                                }
                                var a = {
                                    table_open: o,
                                    blockquote_open: o,
                                    bullet_list_open: o,
                                    ordered_list_open: o,
                                    reference_open: o,
                                    heading_open: o,
                                    lheading_open: o,
                                    paragraph_open: o,
                                    hr: o,
                                    html_block: s,
                                    code_block: s,
                                    fence: s,
                                };
                                Object.keys(a).forEach(function (t) {
                                    var n = e.renderer.rules[t] || i;
                                    e.renderer.rules[t] = a[t](n);
                                });
                            },
                            a = function (e, t) {
                                void 0 === t && (t = {});
                                var n = t.getMarks;
                                n &&
                                    e.core.ruler.push("anchor", function (e) {
                                        var t = {},
                                            r = e.tokens;
                                        r.filter(function (e) {
                                            return "heading_open" === e.type;
                                        }).forEach(function (e) {
                                            var i = r[r.indexOf(e) + 1].content,
                                                o = Number(e.tag.substr(1));
                                            t[i] = i in t ? Number(t[i]) + 1 : "";
                                            var s = n(i, o, t[i]);
                                            s &&
                                                s.forEach(function (t) {
                                                    var n = t.attr,
                                                        r = t.value;
                                                    e.attrPush([n, r]);
                                                });
                                        });
                                    });
                            },
                            l = {
                                includeLevel: [2, 3],
                                containerClass: "table-of-contents",
                                listClass: "table-of-content-list",
                                listItemClass: "table-of-content-list-item",
                                markerPattern: /^\[\[toc\]\]/im,
                                listType: "ul",
                                getAnchorAttrs: function () {
                                    return [];
                                },
                                format: void 0,
                                forceFullToc: !1,
                                containerHeaderHtml: void 0,
                                containerFooterHtml: void 0,
                                transformLink: void 0,
                            },
                            c = function (e, t) {
                                var n,
                                    i = Object(r.a)({}, l, t),
                                    o = i.markerPattern;
                                function s(e, t, n) {
                                    for (var r, o, a = [], l = "", c = t.length, u = e; u < c; ) {
                                        var p = t[u],
                                            d = t[u - 1],
                                            g = p.tag && parseInt(p.tag.substr(1, 1));
                                        if ("heading_close" === p.type && -1 != i.includeLevel.indexOf(g) && "inline" === d.type) {
                                            if (r) {
                                                if (g > r) {
                                                    (l += (o = s(u, t, n))[1]), (u = o[0]);
                                                    continue;
                                                }
                                                if (g < r) return (l += "</li>"), a.push(l), [u, "<" + i.listType + ' class="' + i.listClass + '">' + a.join("") + "</" + i.listType + ">"];
                                                g == r && ((l += "</li>"), a.push(l));
                                            } else r = g;
                                            var f = d.children.reduce(function (e, t) {
                                                    return e + t.content;
                                                }, ""),
                                                h = d.content,
                                                m = (n[h] = h in n ? Number(n[h]) + 1 : ""),
                                                b = i.getAnchorAttrs(h, g, m);
                                            (l =
                                                '<li class="' +
                                                i.listItemClass +
                                                '">\n      <a ' +
                                                b
                                                    .map(function (e) {
                                                        return e.attr + '="' + e.value + '"';
                                                    })
                                                    .join(" ") +
                                                ">"),
                                                (l += f),
                                                (l += "</a>"),
                                                u++;
                                        } else u++;
                                    }
                                    return (l += "" === l ? "" : "</li>"), a.push(l), [u, "<" + i.listType + ' class="' + i.listClass + '">' + a.join("") + "</" + i.listType + ">"];
                                }
                                (e.renderer.rules.toc_open = function (e, t) {
                                    var n = '<div class="' + i.containerClass + '">';
                                    return i.containerHeaderHtml && (n += i.containerHeaderHtml), n;
                                }),
                                    (e.renderer.rules.toc_close = function (e, t) {
                                        var n = "";
                                        return i.containerFooterHtml && (n = i.containerFooterHtml), n + "</div>";
                                    }),
                                    (e.renderer.rules.toc_body = function (e, t) {
                                        var r = {};
                                        if (i.forceFullToc) {
                                            for (var o = "", a = 0, l = n && n.tokens && n.tokens.length; a < l; ) {
                                                var c = s(a, n.tokens, r);
                                                (a = c[0]), (o += c[1]);
                                            }
                                            return o;
                                        }
                                        return s(0, n.tokens, r)[1];
                                    }),
                                    e.core.ruler.push("grab_state", function (e) {
                                        n = e;
                                    }),
                                    e.inline.ruler.after("emphasis", "toc", function (e, t) {
                                        var n;
                                        if (91 !== e.src.charCodeAt(e.pos)) return !1;
                                        if (t) return !1;
                                        if (
                                            (n = (n = o.exec(e.src.substr(e.pos)))
                                                ? n.filter(function (e) {
                                                      return e;
                                                  })
                                                : []).length < 1
                                        )
                                            return !1;
                                        (e.push("toc_open", "toc", 1).markup = "[[toc]]"), e.push("toc_body", "", 0), e.push("toc_close", "toc", -1);
                                        var r = e.src.indexOf("\n", e.pos);
                                        return (e.pos = -1 !== r ? r : e.pos + e.posMax + 1), !0;
                                    });
                            },
                            u = function (e, t) {
                                void 0 === t && (t = {});
                                var n = t.getWrapperClass,
                                    r =
                                        void 0 === n
                                            ? function (e) {
                                                  return "language-" + e;
                                              }
                                            : n,
                                    i = function (e) {
                                        return function () {
                                            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                                            var o = n[0][n[1]],
                                                s = e.apply(void 0, n);
                                            return '\x3c!--beforebegin--\x3e<div class="' + r(o.info.trim()) + ' extra-class" extra-attr>\x3c!--afterbegin--\x3e' + s + "\x3c!--beforeend--\x3e</div>\x3c!--afterend--\x3e";
                                        };
                                    },
                                    o = e.renderer.rules,
                                    s = o.fence,
                                    a = o.code_block;
                                (e.renderer.rules.fence = i(s)), (e.renderer.rules.code_block = i(a));
                            },
                            p = function (e, t) {
                                var n = t.externalAttrs,
                                    r = t.openLinkIcon,
                                    i = t.openLinkIconClass,
                                    o = !1;
                                (e.renderer.rules.link_open = function (e, t, r, i, s) {
                                    var a = e[t],
                                        l = a.attrIndex("href");
                                    if (l >= 0) {
                                        var c = a.attrs[l][1];
                                        /^https?:/.test(c) &&
                                            (Object.keys(n).forEach(function (e) {
                                                a.attrSet(e, n[e]);
                                            }),
                                            /_blank/i.test(n.target) && (o = !0));
                                    }
                                    return s.renderToken(e, t, r);
                                }),
                                    (e.renderer.rules.link_close = function (e, t, n, s, a) {
                                        return o && ((o = !1), r)
                                            ? i
                                                ? '<i class="' + i + '"></i>' + a.renderToken(e, t, n)
                                                : '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>' +
                                                  a.renderToken(e, t, n)
                                            : a.renderToken(e, t, n);
                                    });
                            },
                            d = n(6),
                            g = n.n(d),
                            f = n(2);
                        function h(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.toc,
                                i = t.link,
                                l = t.attrs,
                                d = Object(f.b)();
                            return (
                                d
                                    .use(p, Object(r.a)({ externalAttrs: { target: "_blank" } }, i))
                                    .use(u, {
                                        getWrapperClass: function (e) {
                                            return "v-md-pre-wrapper v-md-pre-wrapper-" + e;
                                        },
                                    })
                                    .use(o.a, Object(r.a)({ leftDelimiter: "{{{", rightDelimiter: "}}}" }, l, { allowedAttributes: ["width", "height"].concat(null == l ? void 0 : l.allowedAttributes) }))
                                    .use(a, {
                                        getMarks: function (e, t, n) {
                                            return [{ attr: "data-v-md-heading", value: g()(e) + (n ? "-" + n : "") }];
                                        },
                                    })
                                    .use(
                                        c,
                                        Object(r.a)(
                                            {
                                                listClass: "v-md-toc",
                                                listItemClass: "v-md-toc-item",
                                                getAnchorAttrs: function (e, t, n) {
                                                    return [{ attr: "data-v-md-anchor", value: g()(e) + (n ? "-" + n : "") }];
                                                },
                                            },
                                            n
                                        )
                                    )
                                    .use(s, { lineMarkup: "data-v-md-line" }),
                                {
                                    previewClass: "markdown-body",
                                    extend: function (e) {
                                        e(d);
                                    },
                                    markdownParser: d,
                                }
                            );
                        }
                    },
                    function (e, t, n) {
                        "use strict";
                        const r = n(19);
                        function i(e) {
                            return e.slice(-1)[0];
                        }
                        e.exports = (e) => {
                            const t = new RegExp("^ {0,3}[-*_]{3,} ?" + r.escapeRegExp(e.leftDelimiter) + "[^" + r.escapeRegExp(e.rightDelimiter) + "]");
                            return [
                                {
                                    name: "fenced code blocks",
                                    tests: [{ shift: 0, block: !0, info: r.hasDelimiters("end", e) }],
                                    transform: (t, n) => {
                                        let i = t[n],
                                            o = i.info.lastIndexOf(e.leftDelimiter),
                                            s = r.getAttrs(i.info, o, e);
                                        r.addAttrs(s, i), (i.info = r.removeDelimiter(i.info, e));
                                    },
                                },
                                {
                                    name: "inline nesting 0",
                                    tests: [
                                        {
                                            shift: 0,
                                            type: "inline",
                                            children: [
                                                { shift: -1, type: (e) => "image" === e || "code_inline" === e },
                                                { shift: 0, type: "text", content: r.hasDelimiters("start", e) },
                                            ],
                                        },
                                    ],
                                    transform: (t, n, i) => {
                                        let o = t[n].children[i],
                                            s = o.content.indexOf(e.rightDelimiter),
                                            a = t[n].children[i - 1],
                                            l = r.getAttrs(o.content, 0, e);
                                        r.addAttrs(l, a), o.content.length === s + e.rightDelimiter.length ? t[n].children.splice(i, 1) : (o.content = o.content.slice(s + e.rightDelimiter.length));
                                    },
                                },
                                {
                                    name: "tables",
                                    tests: [
                                        { shift: 0, type: "table_close" },
                                        { shift: 1, type: "paragraph_open" },
                                        { shift: 2, type: "inline", content: r.hasDelimiters("only", e) },
                                    ],
                                    transform: (t, n) => {
                                        let i = t[n + 2],
                                            o = r.getMatchingOpeningToken(t, n),
                                            s = r.getAttrs(i.content, 0, e);
                                        r.addAttrs(s, o), t.splice(n + 1, 3);
                                    },
                                },
                                {
                                    name: "inline attributes",
                                    tests: [
                                        {
                                            shift: 0,
                                            type: "inline",
                                            children: [
                                                { shift: -1, nesting: -1 },
                                                { shift: 0, type: "text", content: r.hasDelimiters("start", e) },
                                            ],
                                        },
                                    ],
                                    transform: (t, n, i) => {
                                        let o = t[n].children[i],
                                            s = o.content,
                                            a = r.getAttrs(s, 0, e),
                                            l = r.getMatchingOpeningToken(t[n].children, i - 1);
                                        r.addAttrs(a, l), (o.content = s.slice(s.indexOf(e.rightDelimiter) + e.rightDelimiter.length));
                                    },
                                },
                                {
                                    name: "list softbreak",
                                    tests: [
                                        { shift: -2, type: "list_item_open" },
                                        {
                                            shift: 0,
                                            type: "inline",
                                            children: [
                                                { position: -2, type: "softbreak" },
                                                { position: -1, type: "text", content: r.hasDelimiters("only", e) },
                                            ],
                                        },
                                    ],
                                    transform: (t, n, i) => {
                                        let o = t[n].children[i].content,
                                            s = r.getAttrs(o, 0, e),
                                            a = n - 2;
                                        for (; t[a - 1] && "ordered_list_open" !== t[a - 1].type && "bullet_list_open" !== t[a - 1].type; ) a--;
                                        r.addAttrs(s, t[a - 1]), (t[n].children = t[n].children.slice(0, -2));
                                    },
                                },
                                {
                                    name: "list double softbreak",
                                    tests: [
                                        { shift: 0, type: (e) => "bullet_list_close" === e || "ordered_list_close" === e },
                                        { shift: 1, type: "paragraph_open" },
                                        { shift: 2, type: "inline", content: r.hasDelimiters("only", e), children: (e) => 1 === e.length },
                                        { shift: 3, type: "paragraph_close" },
                                    ],
                                    transform: (t, n) => {
                                        let i = t[n + 2].content,
                                            o = r.getAttrs(i, 0, e),
                                            s = r.getMatchingOpeningToken(t, n);
                                        r.addAttrs(o, s), t.splice(n + 1, 3);
                                    },
                                },
                                {
                                    name: "list item end",
                                    tests: [
                                        { shift: -2, type: "list_item_open" },
                                        { shift: 0, type: "inline", children: [{ position: -1, type: "text", content: r.hasDelimiters("end", e) }] },
                                    ],
                                    transform: (t, n, o) => {
                                        let s = t[n].children[o],
                                            a = s.content,
                                            l = r.getAttrs(a, a.lastIndexOf(e.leftDelimiter), e);
                                        r.addAttrs(l, t[n - 2]);
                                        let c = a.slice(0, a.lastIndexOf(e.leftDelimiter));
                                        s.content = " " !== i(c) ? c : c.slice(0, -1);
                                    },
                                },
                                {
                                    name: "\n{.a} softbreak then curly in start",
                                    tests: [
                                        {
                                            shift: 0,
                                            type: "inline",
                                            children: [
                                                { position: -2, type: "softbreak" },
                                                { position: -1, type: "text", content: r.hasDelimiters("only", e) },
                                            ],
                                        },
                                    ],
                                    transform: (t, n, i) => {
                                        let o = t[n].children[i],
                                            s = r.getAttrs(o.content, 0, e),
                                            a = n + 1;
                                        for (; t[a + 1] && -1 === t[a + 1].nesting; ) a++;
                                        let l = r.getMatchingOpeningToken(t, a);
                                        r.addAttrs(s, l), (t[n].children = t[n].children.slice(0, -2));
                                    },
                                },
                                {
                                    name: "horizontal rule",
                                    tests: [
                                        { shift: 0, type: "paragraph_open" },
                                        { shift: 1, type: "inline", children: (e) => 1 === e.length, content: (e) => null !== e.match(t) },
                                        { shift: 2, type: "paragraph_close" },
                                    ],
                                    transform: (t, n) => {
                                        let i = t[n];
                                        (i.type = "hr"), (i.tag = "hr"), (i.nesting = 0);
                                        let o = t[n + 1].content,
                                            s = o.lastIndexOf(e.leftDelimiter);
                                        (i.attrs = r.getAttrs(o, s, e)), (i.markup = o), t.splice(n + 1, 2);
                                    },
                                },
                                {
                                    name: "end of block",
                                    tests: [{ shift: 0, type: "inline", children: [{ position: -1, content: r.hasDelimiters("end", e), type: (e) => "code_inline" !== e }] }],
                                    transform: (t, n, o) => {
                                        let s = t[n].children[o],
                                            a = s.content,
                                            l = r.getAttrs(a, a.lastIndexOf(e.leftDelimiter), e),
                                            c = n + 1;
                                        for (; t[c + 1] && -1 === t[c + 1].nesting; ) c++;
                                        let u = r.getMatchingOpeningToken(t, c);
                                        r.addAttrs(l, u);
                                        let p = a.slice(0, a.lastIndexOf(e.leftDelimiter));
                                        s.content = " " !== i(p) ? p : p.slice(0, -1);
                                    },
                                },
                            ];
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e) {
                            return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
                        }
                        (t.getAttrs = function (e, t, n) {
                            const r = /[^\t\n\f />"'=]/,
                                i = [];
                            let o = "",
                                s = "",
                                a = !0,
                                l = !1;
                            for (let c = t + n.leftDelimiter.length; c < e.length; c++) {
                                if (e.slice(c, c + n.rightDelimiter.length) === n.rightDelimiter) {
                                    "" !== o && i.push([o, s]);
                                    break;
                                }
                                let t = e.charAt(c);
                                if ("=" === t && a) a = !1;
                                else if ("." !== t || "" !== o)
                                    if ("#" !== t || "" !== o)
                                        if ('"' !== t || "" !== s)
                                            if ('"' === t && l) l = !1;
                                            else if (" " !== t || l) (a && -1 === t.search(r)) || (a ? (o += t) : (s += t));
                                            else {
                                                if ("" === o) continue;
                                                i.push([o, s]), (o = ""), (s = ""), (a = !0);
                                            }
                                        else l = !0;
                                    else (o = "id"), (a = !1);
                                else "." === e.charAt(c + 1) ? ((o = "css-module"), (c += 1)) : (o = "class"), (a = !1);
                            }
                            if (n.allowedAttributes && n.allowedAttributes.length) {
                                let e = n.allowedAttributes;
                                return i.filter(function (t) {
                                    let n = t[0];
                                    return e.some(function (e) {
                                        return n === e || (e instanceof RegExp && e.test(n));
                                    });
                                });
                            }
                            return i;
                        }),
                            (t.addAttrs = function (e, t) {
                                for (let n = 0, r = e.length; n < r; ++n) {
                                    let r = e[n][0];
                                    "class" === r ? t.attrJoin("class", e[n][1]) : "css-module" === r ? t.attrJoin("css-module", e[n][1]) : t.attrPush(e[n]);
                                }
                                return t;
                            }),
                            (t.hasDelimiters = function (e, t) {
                                if (!e) throw new Error('Parameter `where` not passed. Should be "start", "middle", "end" or "only".');
                                return function (n) {
                                    let r,
                                        i,
                                        o,
                                        s,
                                        a = t.leftDelimiter.length + 1 + t.rightDelimiter.length;
                                    if (!n || "string" != typeof n || n.length < a) return !1;
                                    let l = a - t.rightDelimiter.length;
                                    switch (e) {
                                        case "start":
                                            (o = n.slice(0, t.leftDelimiter.length)),
                                                (r = o === t.leftDelimiter ? 0 : -1),
                                                (i = -1 === r ? -1 : n.indexOf(t.rightDelimiter, l)),
                                                (s = n.charAt(i + t.rightDelimiter.length)),
                                                s && -1 !== t.rightDelimiter.indexOf(s) && (i = -1);
                                            break;
                                        case "end":
                                            (r = n.lastIndexOf(t.leftDelimiter)), (i = -1 === r ? -1 : n.indexOf(t.rightDelimiter, r + l)), (i = i === n.length - t.rightDelimiter.length ? i : -1);
                                            break;
                                        case "only":
                                            (o = n.slice(0, t.leftDelimiter.length)),
                                                (r = o === t.leftDelimiter ? 0 : -1),
                                                (o = n.slice(n.length - t.rightDelimiter.length)),
                                                (i = o === t.rightDelimiter ? n.length - t.rightDelimiter.length : -1);
                                    }
                                    return (
                                        -1 !== r &&
                                        -1 !== i &&
                                        (function (e) {
                                            let n = "." === e.charAt(t.leftDelimiter.length),
                                                r = "#" === e.charAt(t.leftDelimiter.length);
                                            return n || r ? e.length >= a + 1 : e.length >= a;
                                        })(n.substring(r, i + t.rightDelimiter.length))
                                    );
                                };
                            }),
                            (t.removeDelimiter = function (e, t) {
                                const n = r(t.leftDelimiter),
                                    i = r(t.rightDelimiter);
                                let o = new RegExp("[ \\n]?" + n + "[^" + n + i + "]+" + i + "$"),
                                    s = e.search(o);
                                return -1 !== s ? e.slice(0, s) : e;
                            }),
                            (t.escapeRegExp = r),
                            (t.getMatchingOpeningToken = function (e, t) {
                                if ("softbreak" === e[t].type) return !1;
                                if (0 === e[t].nesting) return e[t];
                                let n = e[t].level,
                                    r = e[t].type.replace("_close", "_open");
                                for (; t >= 0; --t) if (e[t].type === r && e[t].level === n) return e[t];
                            });
                        let i = /[&<>"]/,
                            o = /[&<>"]/g,
                            s = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
                        function a(e) {
                            return s[e];
                        }
                        t.escapeHtml = function (e) {
                            return i.test(e) ? e.replace(o, a) : e;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0),
                            i = n(28),
                            o = n(32),
                            s = n(33),
                            a = n(41),
                            l = n(55),
                            c = n(68),
                            u = n(8),
                            p = n(70),
                            d = { default: n(73), zero: n(74), commonmark: n(75) },
                            g = /^(vbscript|javascript|file|data):/,
                            f = /^data:image\/(gif|png|jpeg|webp);/;
                        function h(e) {
                            var t = e.trim().toLowerCase();
                            return !g.test(t) || !!f.test(t);
                        }
                        var m = ["http:", "https:", "mailto:"];
                        function b(e) {
                            var t = u.parse(e, !0);
                            if (t.hostname && (!t.protocol || m.indexOf(t.protocol) >= 0))
                                try {
                                    t.hostname = p.toASCII(t.hostname);
                                } catch (e) {}
                            return u.encode(u.format(t));
                        }
                        function y(e) {
                            var t = u.parse(e, !0);
                            if (t.hostname && (!t.protocol || m.indexOf(t.protocol) >= 0))
                                try {
                                    t.hostname = p.toUnicode(t.hostname);
                                } catch (e) {}
                            return u.decode(u.format(t), u.decode.defaultChars + "%");
                        }
                        function A(e, t) {
                            if (!(this instanceof A)) return new A(e, t);
                            t || r.isString(e) || ((t = e || {}), (e = "default")),
                                (this.inline = new l()),
                                (this.block = new a()),
                                (this.core = new s()),
                                (this.renderer = new o()),
                                (this.linkify = new c()),
                                (this.validateLink = h),
                                (this.normalizeLink = b),
                                (this.normalizeLinkText = y),
                                (this.utils = r),
                                (this.helpers = r.assign({}, i)),
                                (this.options = {}),
                                this.configure(e),
                                t && this.set(t);
                        }
                        (A.prototype.set = function (e) {
                            return r.assign(this.options, e), this;
                        }),
                            (A.prototype.configure = function (e) {
                                var t,
                                    n = this;
                                if (r.isString(e) && !(e = d[(t = e)])) throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
                                if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
                                return (
                                    e.options && n.set(e.options),
                                    e.components &&
                                        Object.keys(e.components).forEach(function (t) {
                                            e.components[t].rules && n[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && n[t].ruler2.enableOnly(e.components[t].rules2);
                                        }),
                                    this
                                );
                            }),
                            (A.prototype.enable = function (e, t) {
                                var n = [];
                                Array.isArray(e) || (e = [e]),
                                    ["core", "block", "inline"].forEach(function (t) {
                                        n = n.concat(this[t].ruler.enable(e, !0));
                                    }, this),
                                    (n = n.concat(this.inline.ruler2.enable(e, !0)));
                                var r = e.filter(function (e) {
                                    return n.indexOf(e) < 0;
                                });
                                if (r.length && !t) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
                                return this;
                            }),
                            (A.prototype.disable = function (e, t) {
                                var n = [];
                                Array.isArray(e) || (e = [e]),
                                    ["core", "block", "inline"].forEach(function (t) {
                                        n = n.concat(this[t].ruler.disable(e, !0));
                                    }, this),
                                    (n = n.concat(this.inline.ruler2.disable(e, !0)));
                                var r = e.filter(function (e) {
                                    return n.indexOf(e) < 0;
                                });
                                if (r.length && !t) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
                                return this;
                            }),
                            (A.prototype.use = function (e) {
                                var t = [this].concat(Array.prototype.slice.call(arguments, 1));
                                return e.apply(e, t), this;
                            }),
                            (A.prototype.parse = function (e, t) {
                                if ("string" != typeof e) throw new Error("Input data should be a String");
                                var n = new this.core.State(e, this, t);
                                return this.core.process(n), n.tokens;
                            }),
                            (A.prototype.render = function (e, t) {
                                return (t = t || {}), this.renderer.render(this.parse(e, t), this.options, t);
                            }),
                            (A.prototype.parseInline = function (e, t) {
                                var n = new this.core.State(e, this, t);
                                return (n.inlineMode = !0), this.core.process(n), n.tokens;
                            }),
                            (A.prototype.renderInline = function (e, t) {
                                return (t = t || {}), this.renderer.render(this.parseInline(e, t), this.options, t);
                            }),
                            (e.exports = A);
                    },
                    function (e) {
                        e.exports = JSON.parse(
                            '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}'
                        );
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = {};
                        function i(e, t, n) {
                            var o,
                                s,
                                a,
                                l,
                                c,
                                u = "";
                            for (
                                "string" != typeof t && ((n = t), (t = i.defaultChars)),
                                    void 0 === n && (n = !0),
                                    c = (function (e) {
                                        var t,
                                            n,
                                            i = r[e];
                                        if (i) return i;
                                        for (i = r[e] = [], t = 0; t < 128; t++) (n = String.fromCharCode(t)), /^[0-9a-z]$/i.test(n) ? i.push(n) : i.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
                                        for (t = 0; t < e.length; t++) i[e.charCodeAt(t)] = e[t];
                                        return i;
                                    })(t),
                                    o = 0,
                                    s = e.length;
                                o < s;
                                o++
                            )
                                if (((a = e.charCodeAt(o)), n && 37 === a && o + 2 < s && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3)))) (u += e.slice(o, o + 3)), (o += 2);
                                else if (a < 128) u += c[a];
                                else if (a >= 55296 && a <= 57343) {
                                    if (a >= 55296 && a <= 56319 && o + 1 < s && (l = e.charCodeAt(o + 1)) >= 56320 && l <= 57343) {
                                        (u += encodeURIComponent(e[o] + e[o + 1])), o++;
                                        continue;
                                    }
                                    u += "%EF%BF%BD";
                                } else u += encodeURIComponent(e[o]);
                            return u;
                        }
                        (i.defaultChars = ";/?:@&=+$,-_.!~*'()#"), (i.componentChars = "-_.!~*'()"), (e.exports = i);
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = {};
                        function i(e, t) {
                            var n;
                            return (
                                "string" != typeof t && (t = i.defaultChars),
                                (n = (function (e) {
                                    var t,
                                        n,
                                        i = r[e];
                                    if (i) return i;
                                    for (i = r[e] = [], t = 0; t < 128; t++) (n = String.fromCharCode(t)), i.push(n);
                                    for (t = 0; t < e.length; t++) i[(n = e.charCodeAt(t))] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
                                    return i;
                                })(t)),
                                e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
                                    var t,
                                        r,
                                        i,
                                        o,
                                        s,
                                        a,
                                        l,
                                        c = "";
                                    for (t = 0, r = e.length; t < r; t += 3)
                                        (i = parseInt(e.slice(t + 1, t + 3), 16)) < 128
                                            ? (c += n[i])
                                            : 192 == (224 & i) && t + 3 < r && 128 == (192 & (o = parseInt(e.slice(t + 4, t + 6), 16)))
                                            ? ((c += (l = ((i << 6) & 1984) | (63 & o)) < 128 ? "��" : String.fromCharCode(l)), (t += 3))
                                            : 224 == (240 & i) && t + 6 < r && ((o = parseInt(e.slice(t + 4, t + 6), 16)), (s = parseInt(e.slice(t + 7, t + 9), 16)), 128 == (192 & o) && 128 == (192 & s))
                                            ? ((c += (l = ((i << 12) & 61440) | ((o << 6) & 4032) | (63 & s)) < 2048 || (l >= 55296 && l <= 57343) ? "���" : String.fromCharCode(l)), (t += 6))
                                            : 240 == (248 & i) &&
                                              t + 9 < r &&
                                              ((o = parseInt(e.slice(t + 4, t + 6), 16)), (s = parseInt(e.slice(t + 7, t + 9), 16)), (a = parseInt(e.slice(t + 10, t + 12), 16)), 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a))
                                            ? ((l = ((i << 18) & 1835008) | ((o << 12) & 258048) | ((s << 6) & 4032) | (63 & a)) < 65536 || l > 1114111
                                                  ? (c += "����")
                                                  : ((l -= 65536), (c += String.fromCharCode(55296 + (l >> 10), 56320 + (1023 & l)))),
                                              (t += 9))
                                            : (c += "�");
                                    return c;
                                })
                            );
                        }
                        (i.defaultChars = ";/?:@&=+$,#"), (i.componentChars = ""), (e.exports = i);
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e) {
                            var t = "";
                            return (
                                (t += e.protocol || ""),
                                (t += e.slashes ? "//" : ""),
                                (t += e.auth ? e.auth + "@" : ""),
                                e.hostname && -1 !== e.hostname.indexOf(":") ? (t += "[" + e.hostname + "]") : (t += e.hostname || ""),
                                (t += e.port ? ":" + e.port : ""),
                                (t += e.pathname || ""),
                                (t += e.search || "") + (e.hash || "")
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        function r() {
                            (this.protocol = null), (this.slashes = null), (this.auth = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.pathname = null);
                        }
                        var i = /^([a-z0-9.+-]+:)/i,
                            o = /:[0-9]*$/,
                            s = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                            a = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                            l = ["'"].concat(a),
                            c = ["%", "/", "?", ";", "#"].concat(l),
                            u = ["/", "?", "#"],
                            p = /^[+a-z0-9A-Z_-]{0,63}$/,
                            d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                            g = { javascript: !0, "javascript:": !0 },
                            f = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 };
                        (r.prototype.parse = function (e, t) {
                            var n,
                                r,
                                o,
                                a,
                                l,
                                h = e;
                            if (((h = h.trim()), !t && 1 === e.split("#").length)) {
                                var m = s.exec(h);
                                if (m) return (this.pathname = m[1]), m[2] && (this.search = m[2]), this;
                            }
                            var b = i.exec(h);
                            if (
                                (b && ((o = (b = b[0]).toLowerCase()), (this.protocol = b), (h = h.substr(b.length))),
                                (t || b || h.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(l = "//" === h.substr(0, 2)) || (b && g[b]) || ((h = h.substr(2)), (this.slashes = !0))),
                                !g[b] && (l || (b && !f[b])))
                            ) {
                                var y,
                                    A,
                                    x = -1;
                                for (n = 0; n < u.length; n++) -1 !== (a = h.indexOf(u[n])) && (-1 === x || a < x) && (x = a);
                                for (-1 !== (A = -1 === x ? h.lastIndexOf("@") : h.lastIndexOf("@", x)) && ((y = h.slice(0, A)), (h = h.slice(A + 1)), (this.auth = y)), x = -1, n = 0; n < c.length; n++)
                                    -1 !== (a = h.indexOf(c[n])) && (-1 === x || a < x) && (x = a);
                                -1 === x && (x = h.length), ":" === h[x - 1] && x--;
                                var v = h.slice(0, x);
                                (h = h.slice(x)), this.parseHost(v), (this.hostname = this.hostname || "");
                                var w = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                                if (!w) {
                                    var k = this.hostname.split(/\./);
                                    for (n = 0, r = k.length; n < r; n++) {
                                        var E = k[n];
                                        if (E && !E.match(p)) {
                                            for (var M = "", C = 0, I = E.length; C < I; C++) E.charCodeAt(C) > 127 ? (M += "x") : (M += E[C]);
                                            if (!M.match(p)) {
                                                var D = k.slice(0, n),
                                                    _ = k.slice(n + 1),
                                                    N = E.match(d);
                                                N && (D.push(N[1]), _.unshift(N[2])), _.length && (h = _.join(".") + h), (this.hostname = D.join("."));
                                                break;
                                            }
                                        }
                                    }
                                }
                                this.hostname.length > 255 && (this.hostname = ""), w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
                            }
                            var T = h.indexOf("#");
                            -1 !== T && ((this.hash = h.substr(T)), (h = h.slice(0, T)));
                            var S = h.indexOf("?");
                            return -1 !== S && ((this.search = h.substr(S)), (h = h.slice(0, S))), h && (this.pathname = h), f[o] && this.hostname && !this.pathname && (this.pathname = ""), this;
                        }),
                            (r.prototype.parseHost = function (e) {
                                var t = o.exec(e);
                                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
                            }),
                            (e.exports = function (e, t) {
                                if (e && e instanceof r) return e;
                                var n = new r();
                                return n.parse(e, t), n;
                            });
                    },
                    function (e, t, n) {
                        "use strict";
                        (t.Any = n(9)), (t.Cc = n(10)), (t.Cf = n(27)), (t.P = n(3)), (t.Z = n(11));
                    },
                    function (e, t) {
                        e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
                    },
                    function (e, t, n) {
                        "use strict";
                        (t.parseLinkLabel = n(29)), (t.parseLinkDestination = n(30)), (t.parseLinkTitle = n(31));
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e, t, n) {
                            var r,
                                i,
                                o,
                                s,
                                a = -1,
                                l = e.posMax,
                                c = e.pos;
                            for (e.pos = t + 1, r = 1; e.pos < l; ) {
                                if (93 === (o = e.src.charCodeAt(e.pos)) && 0 == --r) {
                                    i = !0;
                                    break;
                                }
                                if (((s = e.pos), e.md.inline.skipToken(e), 91 === o))
                                    if (s === e.pos - 1) r++;
                                    else if (n) return (e.pos = c), -1;
                            }
                            return i && (a = e.pos), (e.pos = c), a;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).unescapeAll;
                        e.exports = function (e, t, n) {
                            var i,
                                o,
                                s = t,
                                a = { ok: !1, pos: 0, lines: 0, str: "" };
                            if (60 === e.charCodeAt(t)) {
                                for (t++; t < n; ) {
                                    if (10 === (i = e.charCodeAt(t))) return a;
                                    if (60 === i) return a;
                                    if (62 === i) return (a.pos = t + 1), (a.str = r(e.slice(s + 1, t))), (a.ok = !0), a;
                                    92 === i && t + 1 < n ? (t += 2) : t++;
                                }
                                return a;
                            }
                            for (o = 0; t < n && 32 !== (i = e.charCodeAt(t)) && !(i < 32 || 127 === i); )
                                if (92 === i && t + 1 < n) {
                                    if (32 === e.charCodeAt(t + 1)) break;
                                    t += 2;
                                } else {
                                    if (40 === i && ++o > 32) return a;
                                    if (41 === i) {
                                        if (0 === o) break;
                                        o--;
                                    }
                                    t++;
                                }
                            return s === t || 0 !== o || ((a.str = r(e.slice(s, t))), (a.lines = 0), (a.pos = t), (a.ok = !0)), a;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).unescapeAll;
                        e.exports = function (e, t, n) {
                            var i,
                                o,
                                s = 0,
                                a = t,
                                l = { ok: !1, pos: 0, lines: 0, str: "" };
                            if (t >= n) return l;
                            if (34 !== (o = e.charCodeAt(t)) && 39 !== o && 40 !== o) return l;
                            for (t++, 40 === o && (o = 41); t < n; ) {
                                if ((i = e.charCodeAt(t)) === o) return (l.pos = t + 1), (l.lines = s), (l.str = r(e.slice(a + 1, t))), (l.ok = !0), l;
                                if (40 === i && 41 === o) return l;
                                10 === i ? s++ : 92 === i && t + 1 < n && (t++, 10 === e.charCodeAt(t) && s++), t++;
                            }
                            return l;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).assign,
                            i = n(0).unescapeAll,
                            o = n(0).escapeHtml,
                            s = {};
                        function a() {
                            this.rules = r({}, s);
                        }
                        (s.code_inline = function (e, t, n, r, i) {
                            var s = e[t];
                            return "<code" + i.renderAttrs(s) + ">" + o(e[t].content) + "</code>";
                        }),
                            (s.code_block = function (e, t, n, r, i) {
                                var s = e[t];
                                return "<pre" + i.renderAttrs(s) + "><code>" + o(e[t].content) + "</code></pre>\n";
                            }),
                            (s.fence = function (e, t, n, r, s) {
                                var a,
                                    l,
                                    c,
                                    u,
                                    p,
                                    d = e[t],
                                    g = d.info ? i(d.info).trim() : "",
                                    f = "",
                                    h = "";
                                return (
                                    g && ((f = (c = g.split(/(\s+)/g))[0]), (h = c.slice(2).join(""))),
                                    0 === (a = (n.highlight && n.highlight(d.content, f, h)) || o(d.content)).indexOf("<pre")
                                        ? a + "\n"
                                        : g
                                        ? ((l = d.attrIndex("class")),
                                          (u = d.attrs ? d.attrs.slice() : []),
                                          l < 0 ? u.push(["class", n.langPrefix + f]) : ((u[l] = u[l].slice()), (u[l][1] += " " + n.langPrefix + f)),
                                          (p = { attrs: u }),
                                          "<pre><code" + s.renderAttrs(p) + ">" + a + "</code></pre>\n")
                                        : "<pre><code" + s.renderAttrs(d) + ">" + a + "</code></pre>\n"
                                );
                            }),
                            (s.image = function (e, t, n, r, i) {
                                var o = e[t];
                                return (o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, n, r)), i.renderToken(e, t, n);
                            }),
                            (s.hardbreak = function (e, t, n) {
                                return n.xhtmlOut ? "<br />\n" : "<br>\n";
                            }),
                            (s.softbreak = function (e, t, n) {
                                return n.breaks ? (n.xhtmlOut ? "<br />\n" : "<br>\n") : "\n";
                            }),
                            (s.text = function (e, t) {
                                return o(e[t].content);
                            }),
                            (s.html_block = function (e, t) {
                                return e[t].content;
                            }),
                            (s.html_inline = function (e, t) {
                                return e[t].content;
                            }),
                            (a.prototype.renderAttrs = function (e) {
                                var t, n, r;
                                if (!e.attrs) return "";
                                for (r = "", t = 0, n = e.attrs.length; t < n; t++) r += " " + o(e.attrs[t][0]) + '="' + o(e.attrs[t][1]) + '"';
                                return r;
                            }),
                            (a.prototype.renderToken = function (e, t, n) {
                                var r,
                                    i = "",
                                    o = !1,
                                    s = e[t];
                                return s.hidden
                                    ? ""
                                    : (s.block && -1 !== s.nesting && t && e[t - 1].hidden && (i += "\n"),
                                      (i += (-1 === s.nesting ? "</" : "<") + s.tag),
                                      (i += this.renderAttrs(s)),
                                      0 === s.nesting && n.xhtmlOut && (i += " /"),
                                      s.block && ((o = !0), 1 === s.nesting && t + 1 < e.length && ("inline" === (r = e[t + 1]).type || r.hidden || (-1 === r.nesting && r.tag === s.tag)) && (o = !1)),
                                      (i += o ? ">\n" : ">"));
                            }),
                            (a.prototype.renderInline = function (e, t, n) {
                                for (var r, i = "", o = this.rules, s = 0, a = e.length; s < a; s++) void 0 !== o[(r = e[s].type)] ? (i += o[r](e, s, t, n, this)) : (i += this.renderToken(e, s, t));
                                return i;
                            }),
                            (a.prototype.renderInlineAsText = function (e, t, n) {
                                for (var r = "", i = 0, o = e.length; i < o; i++)
                                    "text" === e[i].type ? (r += e[i].content) : "image" === e[i].type ? (r += this.renderInlineAsText(e[i].children, t, n)) : "softbreak" === e[i].type && (r += "\n");
                                return r;
                            }),
                            (a.prototype.render = function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    s = "",
                                    a = this.rules;
                                for (r = 0, i = e.length; r < i; r++)
                                    "inline" === (o = e[r].type) ? (s += this.renderInline(e[r].children, t, n)) : void 0 !== a[o] ? (s += a[e[r].type](e, r, t, n, this)) : (s += this.renderToken(e, r, t, n));
                                return s;
                            }),
                            (e.exports = a);
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(4),
                            i = [
                                ["normalize", n(34)],
                                ["block", n(35)],
                                ["inline", n(36)],
                                ["linkify", n(37)],
                                ["replacements", n(38)],
                                ["smartquotes", n(39)],
                            ];
                        function o() {
                            this.ruler = new r();
                            for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1]);
                        }
                        (o.prototype.process = function (e) {
                            var t, n, r;
                            for (t = 0, n = (r = this.ruler.getRules("")).length; t < n; t++) r[t](e);
                        }),
                            (o.prototype.State = n(40)),
                            (e.exports = o);
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = /\r\n?|\n/g,
                            i = /\0/g;
                        e.exports = function (e) {
                            var t;
                            (t = (t = e.src.replace(r, "\n")).replace(i, "�")), (e.src = t);
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e) {
                            var t;
                            e.inlineMode ? (((t = new e.Token("inline", "", 0)).content = e.src), (t.map = [0, 1]), (t.children = []), e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e) {
                            var t,
                                n,
                                r,
                                i = e.tokens;
                            for (n = 0, r = i.length; n < r; n++) "inline" === (t = i[n]).type && e.md.inline.parse(t.content, e.md, e.env, t.children);
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).arrayReplaceAt;
                        function i(e) {
                            return /^<\/a\s*>/i.test(e);
                        }
                        e.exports = function (e) {
                            var t,
                                n,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                p,
                                d,
                                g,
                                f,
                                h,
                                m,
                                b,
                                y,
                                A,
                                x,
                                v = e.tokens;
                            if (e.md.options.linkify)
                                for (n = 0, o = v.length; n < o; n++)
                                    if ("inline" === v[n].type && e.md.linkify.pretest(v[n].content))
                                        for (h = 0, t = (s = v[n].children).length - 1; t >= 0; t--)
                                            if ("link_close" !== (l = s[t]).type) {
                                                if (("html_inline" === l.type && ((x = l.content), /^<a[>\s]/i.test(x) && h > 0 && h--, i(l.content) && h++), !(h > 0) && "text" === l.type && e.md.linkify.test(l.content))) {
                                                    for (p = l.content, A = e.md.linkify.match(p), c = [], f = l.level, g = 0, u = 0; u < A.length; u++)
                                                        (m = A[u].url),
                                                            (b = e.md.normalizeLink(m)),
                                                            e.md.validateLink(b) &&
                                                                ((y = A[u].text),
                                                                (y = A[u].schema
                                                                    ? "mailto:" !== A[u].schema || /^mailto:/i.test(y)
                                                                        ? e.md.normalizeLinkText(y)
                                                                        : e.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, "")
                                                                    : e.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, "")),
                                                                (d = A[u].index) > g && (((a = new e.Token("text", "", 0)).content = p.slice(g, d)), (a.level = f), c.push(a)),
                                                                ((a = new e.Token("link_open", "a", 1)).attrs = [["href", b]]),
                                                                (a.level = f++),
                                                                (a.markup = "linkify"),
                                                                (a.info = "auto"),
                                                                c.push(a),
                                                                ((a = new e.Token("text", "", 0)).content = y),
                                                                (a.level = f),
                                                                c.push(a),
                                                                ((a = new e.Token("link_close", "a", -1)).level = --f),
                                                                (a.markup = "linkify"),
                                                                (a.info = "auto"),
                                                                c.push(a),
                                                                (g = A[u].lastIndex));
                                                    g < p.length && (((a = new e.Token("text", "", 0)).content = p.slice(g)), (a.level = f), c.push(a)), (v[n].children = s = r(s, t, c));
                                                }
                                            } else for (t--; s[t].level !== l.level && "link_open" !== s[t].type; ) t--;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
                            i = /\((c|tm|r|p)\)/i,
                            o = /\((c|tm|r|p)\)/gi,
                            s = { c: "©", r: "®", p: "§", tm: "™" };
                        function a(e, t) {
                            return s[t.toLowerCase()];
                        }
                        function l(e) {
                            var t,
                                n,
                                r = 0;
                            for (t = e.length - 1; t >= 0; t--)
                                "text" !== (n = e[t]).type || r || (n.content = n.content.replace(o, a)), "link_open" === n.type && "auto" === n.info && r--, "link_close" === n.type && "auto" === n.info && r++;
                        }
                        function c(e) {
                            var t,
                                n,
                                i = 0;
                            for (t = e.length - 1; t >= 0; t--)
                                "text" !== (n = e[t]).type ||
                                    i ||
                                    (r.test(n.content) &&
                                        (n.content = n.content
                                            .replace(/\+-/g, "±")
                                            .replace(/\.{2,}/g, "…")
                                            .replace(/([?!])…/g, "$1..")
                                            .replace(/([?!]){4,}/g, "$1$1$1")
                                            .replace(/,{2,}/g, ",")
                                            .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—")
                                            .replace(/(^|\s)--(?=\s|$)/gm, "$1–")
                                            .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–"))),
                                    "link_open" === n.type && "auto" === n.info && i--,
                                    "link_close" === n.type && "auto" === n.info && i++;
                        }
                        e.exports = function (e) {
                            var t;
                            if (e.md.options.typographer)
                                for (t = e.tokens.length - 1; t >= 0; t--) "inline" === e.tokens[t].type && (i.test(e.tokens[t].content) && l(e.tokens[t].children), r.test(e.tokens[t].content) && c(e.tokens[t].children));
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).isWhiteSpace,
                            i = n(0).isPunctChar,
                            o = n(0).isMdAsciiPunct,
                            s = /['"]/,
                            a = /['"]/g;
                        function l(e, t, n) {
                            return e.substr(0, t) + n + e.substr(t + 1);
                        }
                        function c(e, t) {
                            var n, s, c, u, p, d, g, f, h, m, b, y, A, x, v, w, k, E, M, C, I;
                            for (M = [], n = 0; n < e.length; n++) {
                                for (s = e[n], g = e[n].level, k = M.length - 1; k >= 0 && !(M[k].level <= g); k--);
                                if (((M.length = k + 1), "text" === s.type)) {
                                    (p = 0), (d = (c = s.content).length);
                                    e: for (; p < d && ((a.lastIndex = p), (u = a.exec(c))); ) {
                                        if (((v = w = !0), (p = u.index + 1), (E = "'" === u[0]), (h = 32), u.index - 1 >= 0)) h = c.charCodeAt(u.index - 1);
                                        else
                                            for (k = n - 1; k >= 0 && "softbreak" !== e[k].type && "hardbreak" !== e[k].type; k--)
                                                if (e[k].content) {
                                                    h = e[k].content.charCodeAt(e[k].content.length - 1);
                                                    break;
                                                }
                                        if (((m = 32), p < d)) m = c.charCodeAt(p);
                                        else
                                            for (k = n + 1; k < e.length && "softbreak" !== e[k].type && "hardbreak" !== e[k].type; k++)
                                                if (e[k].content) {
                                                    m = e[k].content.charCodeAt(0);
                                                    break;
                                                }
                                        if (
                                            ((b = o(h) || i(String.fromCharCode(h))),
                                            (y = o(m) || i(String.fromCharCode(m))),
                                            (A = r(h)),
                                            (x = r(m)) ? (v = !1) : y && (A || b || (v = !1)),
                                            A ? (w = !1) : b && (x || y || (w = !1)),
                                            34 === m && '"' === u[0] && h >= 48 && h <= 57 && (w = v = !1),
                                            v && w && ((v = b), (w = y)),
                                            v || w)
                                        ) {
                                            if (w)
                                                for (k = M.length - 1; k >= 0 && ((f = M[k]), !(M[k].level < g)); k--)
                                                    if (f.single === E && M[k].level === g) {
                                                        (f = M[k]),
                                                            E ? ((C = t.md.options.quotes[2]), (I = t.md.options.quotes[3])) : ((C = t.md.options.quotes[0]), (I = t.md.options.quotes[1])),
                                                            (s.content = l(s.content, u.index, I)),
                                                            (e[f.token].content = l(e[f.token].content, f.pos, C)),
                                                            (p += I.length - 1),
                                                            f.token === n && (p += C.length - 1),
                                                            (d = (c = s.content).length),
                                                            (M.length = k);
                                                        continue e;
                                                    }
                                            v ? M.push({ token: n, pos: u.index, single: E, level: g }) : w && E && (s.content = l(s.content, u.index, "’"));
                                        } else E && (s.content = l(s.content, u.index, "’"));
                                    }
                                }
                            }
                        }
                        e.exports = function (e) {
                            var t;
                            if (e.md.options.typographer) for (t = e.tokens.length - 1; t >= 0; t--) "inline" === e.tokens[t].type && s.test(e.tokens[t].content) && c(e.tokens[t].children, e);
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(5);
                        function i(e, t, n) {
                            (this.src = e), (this.env = n), (this.tokens = []), (this.inlineMode = !1), (this.md = t);
                        }
                        (i.prototype.Token = r), (e.exports = i);
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(4),
                            i = [
                                ["table", n(42), ["paragraph", "reference"]],
                                ["code", n(43)],
                                ["fence", n(44), ["paragraph", "reference", "blockquote", "list"]],
                                ["blockquote", n(45), ["paragraph", "reference", "blockquote", "list"]],
                                ["hr", n(46), ["paragraph", "reference", "blockquote", "list"]],
                                ["list", n(47), ["paragraph", "reference", "blockquote"]],
                                ["reference", n(48)],
                                ["html_block", n(49), ["paragraph", "reference", "blockquote"]],
                                ["heading", n(51), ["paragraph", "reference", "blockquote"]],
                                ["lheading", n(52)],
                                ["paragraph", n(53)],
                            ];
                        function o() {
                            this.ruler = new r();
                            for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1], { alt: (i[e][2] || []).slice() });
                        }
                        (o.prototype.tokenize = function (e, t, n) {
                            for (var r, i = this.ruler.getRules(""), o = i.length, s = t, a = !1, l = e.md.options.maxNesting; s < n && ((e.line = s = e.skipEmptyLines(s)), !(s >= n)) && !(e.sCount[s] < e.blkIndent); ) {
                                if (e.level >= l) {
                                    e.line = n;
                                    break;
                                }
                                for (r = 0; r < o && !i[r](e, s, n, !1); r++);
                                (e.tight = !a), e.isEmpty(e.line - 1) && (a = !0), (s = e.line) < n && e.isEmpty(s) && ((a = !0), s++, (e.line = s));
                            }
                        }),
                            (o.prototype.parse = function (e, t, n, r) {
                                var i;
                                e && ((i = new this.State(e, t, n, r)), this.tokenize(i, i.line, i.lineMax));
                            }),
                            (o.prototype.State = n(54)),
                            (e.exports = o);
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).isSpace;
                        function i(e, t) {
                            var n = e.bMarks[t] + e.tShift[t],
                                r = e.eMarks[t];
                            return e.src.substr(n, r - n);
                        }
                        function o(e) {
                            var t,
                                n = [],
                                r = 0,
                                i = e.length,
                                o = !1,
                                s = 0,
                                a = "";
                            for (t = e.charCodeAt(r); r < i; ) 124 === t && (o ? ((a += e.substring(s, r - 1)), (s = r)) : (n.push(a + e.substring(s, r)), (a = ""), (s = r + 1))), (o = 92 === t), r++, (t = e.charCodeAt(r));
                            return n.push(a + e.substring(s)), n;
                        }
                        e.exports = function (e, t, n, s) {
                            var a, l, c, u, p, d, g, f, h, m, b, y, A, x, v, w, k, E;
                            if (t + 2 > n) return !1;
                            if (((d = t + 1), e.sCount[d] < e.blkIndent)) return !1;
                            if (e.sCount[d] - e.blkIndent >= 4) return !1;
                            if ((c = e.bMarks[d] + e.tShift[d]) >= e.eMarks[d]) return !1;
                            if (124 !== (k = e.src.charCodeAt(c++)) && 45 !== k && 58 !== k) return !1;
                            if (c >= e.eMarks[d]) return !1;
                            if (124 !== (E = e.src.charCodeAt(c++)) && 45 !== E && 58 !== E && !r(E)) return !1;
                            if (45 === k && r(E)) return !1;
                            for (; c < e.eMarks[d]; ) {
                                if (124 !== (a = e.src.charCodeAt(c)) && 45 !== a && 58 !== a && !r(a)) return !1;
                                c++;
                            }
                            for (g = (l = i(e, t + 1)).split("|"), m = [], u = 0; u < g.length; u++) {
                                if (!(b = g[u].trim())) {
                                    if (0 === u || u === g.length - 1) continue;
                                    return !1;
                                }
                                if (!/^:?-+:?$/.test(b)) return !1;
                                58 === b.charCodeAt(b.length - 1) ? m.push(58 === b.charCodeAt(0) ? "center" : "right") : 58 === b.charCodeAt(0) ? m.push("left") : m.push("");
                            }
                            if (-1 === (l = i(e, t).trim()).indexOf("|")) return !1;
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (((g = o(l)).length && "" === g[0] && g.shift(), g.length && "" === g[g.length - 1] && g.pop(), 0 === (f = g.length) || f !== m.length)) return !1;
                            if (s) return !0;
                            for (
                                x = e.parentType,
                                    e.parentType = "table",
                                    w = e.md.block.ruler.getRules("blockquote"),
                                    (h = e.push("table_open", "table", 1)).map = y = [t, 0],
                                    (h = e.push("thead_open", "thead", 1)).map = [t, t + 1],
                                    (h = e.push("tr_open", "tr", 1)).map = [t, t + 1],
                                    u = 0;
                                u < g.length;
                                u++
                            )
                                (h = e.push("th_open", "th", 1)), m[u] && (h.attrs = [["style", "text-align:" + m[u]]]), ((h = e.push("inline", "", 0)).content = g[u].trim()), (h.children = []), (h = e.push("th_close", "th", -1));
                            for (h = e.push("tr_close", "tr", -1), h = e.push("thead_close", "thead", -1), d = t + 2; d < n && !(e.sCount[d] < e.blkIndent); d++) {
                                for (v = !1, u = 0, p = w.length; u < p; u++)
                                    if (w[u](e, d, n, !0)) {
                                        v = !0;
                                        break;
                                    }
                                if (v) break;
                                if (!(l = i(e, d).trim())) break;
                                if (e.sCount[d] - e.blkIndent >= 4) break;
                                for (
                                    (g = o(l)).length && "" === g[0] && g.shift(),
                                        g.length && "" === g[g.length - 1] && g.pop(),
                                        d === t + 2 && ((h = e.push("tbody_open", "tbody", 1)).map = A = [t + 2, 0]),
                                        (h = e.push("tr_open", "tr", 1)).map = [d, d + 1],
                                        u = 0;
                                    u < f;
                                    u++
                                )
                                    (h = e.push("td_open", "td", 1)),
                                        m[u] && (h.attrs = [["style", "text-align:" + m[u]]]),
                                        ((h = e.push("inline", "", 0)).content = g[u] ? g[u].trim() : ""),
                                        (h.children = []),
                                        (h = e.push("td_close", "td", -1));
                                h = e.push("tr_close", "tr", -1);
                            }
                            return A && ((h = e.push("tbody_close", "tbody", -1)), (A[1] = d)), (h = e.push("table_close", "table", -1)), (y[1] = d), (e.parentType = x), (e.line = d), !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e, t, n) {
                            var r, i, o;
                            if (e.sCount[t] - e.blkIndent < 4) return !1;
                            for (i = r = t + 1; r < n; )
                                if (e.isEmpty(r)) r++;
                                else {
                                    if (!(e.sCount[r] - e.blkIndent >= 4)) break;
                                    i = ++r;
                                }
                            return (e.line = i), ((o = e.push("code_block", "code", 0)).content = e.getLines(t, i, 4 + e.blkIndent, !1) + "\n"), (o.map = [t, e.line]), !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e, t, n, r) {
                            var i,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                p = !1,
                                d = e.bMarks[t] + e.tShift[t],
                                g = e.eMarks[t];
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (d + 3 > g) return !1;
                            if (126 !== (i = e.src.charCodeAt(d)) && 96 !== i) return !1;
                            if (((l = d), (o = (d = e.skipChars(d, i)) - l) < 3)) return !1;
                            if (((u = e.src.slice(l, d)), (s = e.src.slice(d, g)), 96 === i && s.indexOf(String.fromCharCode(i)) >= 0)) return !1;
                            if (r) return !0;
                            for (a = t; !(++a >= n || ((d = l = e.bMarks[a] + e.tShift[a]) < (g = e.eMarks[a]) && e.sCount[a] < e.blkIndent)); )
                                if (e.src.charCodeAt(d) === i && !(e.sCount[a] - e.blkIndent >= 4 || (d = e.skipChars(d, i)) - l < o || (d = e.skipSpaces(d)) < g)) {
                                    p = !0;
                                    break;
                                }
                            return (o = e.sCount[t]), (e.line = a + (p ? 1 : 0)), ((c = e.push("fence", "code", 0)).info = s), (c.content = e.getLines(t + 1, a, o, !0)), (c.markup = u), (c.map = [t, e.line]), !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).isSpace;
                        e.exports = function (e, t, n, i) {
                            var o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                p,
                                d,
                                g,
                                f,
                                h,
                                m,
                                b,
                                y,
                                A,
                                x,
                                v,
                                w,
                                k,
                                E,
                                M = e.lineMax,
                                C = e.bMarks[t] + e.tShift[t],
                                I = e.eMarks[t];
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (62 !== e.src.charCodeAt(C++)) return !1;
                            if (i) return !0;
                            for (
                                l = g = e.sCount[t] + 1,
                                    32 === e.src.charCodeAt(C) ? (C++, l++, g++, (o = !1), (x = !0)) : 9 === e.src.charCodeAt(C) ? ((x = !0), (e.bsCount[t] + g) % 4 == 3 ? (C++, l++, g++, (o = !1)) : (o = !0)) : (x = !1),
                                    f = [e.bMarks[t]],
                                    e.bMarks[t] = C;
                                C < I && ((s = e.src.charCodeAt(C)), r(s));

                            )
                                9 === s ? (g += 4 - ((g + e.bsCount[t] + (o ? 1 : 0)) % 4)) : g++, C++;
                            for (
                                h = [e.bsCount[t]],
                                    e.bsCount[t] = e.sCount[t] + 1 + (x ? 1 : 0),
                                    u = C >= I,
                                    y = [e.sCount[t]],
                                    e.sCount[t] = g - l,
                                    A = [e.tShift[t]],
                                    e.tShift[t] = C - e.bMarks[t],
                                    w = e.md.block.ruler.getRules("blockquote"),
                                    b = e.parentType,
                                    e.parentType = "blockquote",
                                    d = t + 1;
                                d < n && ((E = e.sCount[d] < e.blkIndent), !((C = e.bMarks[d] + e.tShift[d]) >= (I = e.eMarks[d])));
                                d++
                            )
                                if (62 !== e.src.charCodeAt(C++) || E) {
                                    if (u) break;
                                    for (v = !1, a = 0, c = w.length; a < c; a++)
                                        if (w[a](e, d, n, !0)) {
                                            v = !0;
                                            break;
                                        }
                                    if (v) {
                                        (e.lineMax = d), 0 !== e.blkIndent && (f.push(e.bMarks[d]), h.push(e.bsCount[d]), A.push(e.tShift[d]), y.push(e.sCount[d]), (e.sCount[d] -= e.blkIndent));
                                        break;
                                    }
                                    f.push(e.bMarks[d]), h.push(e.bsCount[d]), A.push(e.tShift[d]), y.push(e.sCount[d]), (e.sCount[d] = -1);
                                } else {
                                    for (
                                        l = g = e.sCount[d] + 1,
                                            32 === e.src.charCodeAt(C) ? (C++, l++, g++, (o = !1), (x = !0)) : 9 === e.src.charCodeAt(C) ? ((x = !0), (e.bsCount[d] + g) % 4 == 3 ? (C++, l++, g++, (o = !1)) : (o = !0)) : (x = !1),
                                            f.push(e.bMarks[d]),
                                            e.bMarks[d] = C;
                                        C < I && ((s = e.src.charCodeAt(C)), r(s));

                                    )
                                        9 === s ? (g += 4 - ((g + e.bsCount[d] + (o ? 1 : 0)) % 4)) : g++, C++;
                                    (u = C >= I), h.push(e.bsCount[d]), (e.bsCount[d] = e.sCount[d] + 1 + (x ? 1 : 0)), y.push(e.sCount[d]), (e.sCount[d] = g - l), A.push(e.tShift[d]), (e.tShift[d] = C - e.bMarks[d]);
                                }
                            for (
                                m = e.blkIndent,
                                    e.blkIndent = 0,
                                    (k = e.push("blockquote_open", "blockquote", 1)).markup = ">",
                                    k.map = p = [t, 0],
                                    e.md.block.tokenize(e, t, d),
                                    (k = e.push("blockquote_close", "blockquote", -1)).markup = ">",
                                    e.lineMax = M,
                                    e.parentType = b,
                                    p[1] = e.line,
                                    a = 0;
                                a < A.length;
                                a++
                            )
                                (e.bMarks[a + t] = f[a]), (e.tShift[a + t] = A[a]), (e.sCount[a + t] = y[a]), (e.bsCount[a + t] = h[a]);
                            return (e.blkIndent = m), !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).isSpace;
                        e.exports = function (e, t, n, i) {
                            var o,
                                s,
                                a,
                                l,
                                c = e.bMarks[t] + e.tShift[t],
                                u = e.eMarks[t];
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (42 !== (o = e.src.charCodeAt(c++)) && 45 !== o && 95 !== o) return !1;
                            for (s = 1; c < u; ) {
                                if ((a = e.src.charCodeAt(c++)) !== o && !r(a)) return !1;
                                a === o && s++;
                            }
                            return !(s < 3 || (i || ((e.line = t + 1), ((l = e.push("hr", "hr", 0)).map = [t, e.line]), (l.markup = Array(s + 1).join(String.fromCharCode(o)))), 0));
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).isSpace;
                        function i(e, t) {
                            var n, i, o, s;
                            return (i = e.bMarks[t] + e.tShift[t]), (o = e.eMarks[t]), (42 !== (n = e.src.charCodeAt(i++)) && 45 !== n && 43 !== n) || (i < o && ((s = e.src.charCodeAt(i)), !r(s))) ? -1 : i;
                        }
                        function o(e, t) {
                            var n,
                                i = e.bMarks[t] + e.tShift[t],
                                o = i,
                                s = e.eMarks[t];
                            if (o + 1 >= s) return -1;
                            if ((n = e.src.charCodeAt(o++)) < 48 || n > 57) return -1;
                            for (;;) {
                                if (o >= s) return -1;
                                if (!((n = e.src.charCodeAt(o++)) >= 48 && n <= 57)) {
                                    if (41 === n || 46 === n) break;
                                    return -1;
                                }
                                if (o - i >= 10) return -1;
                            }
                            return o < s && ((n = e.src.charCodeAt(o)), !r(n)) ? -1 : o;
                        }
                        e.exports = function (e, t, n, r) {
                            var s,
                                a,
                                l,
                                c,
                                u,
                                p,
                                d,
                                g,
                                f,
                                h,
                                m,
                                b,
                                y,
                                A,
                                x,
                                v,
                                w,
                                k,
                                E,
                                M,
                                C,
                                I,
                                D,
                                _,
                                N,
                                T,
                                S,
                                O,
                                L = !1,
                                z = !0;
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (e.listIndent >= 0 && e.sCount[t] - e.listIndent >= 4 && e.sCount[t] < e.blkIndent) return !1;
                            if ((r && "paragraph" === e.parentType && e.sCount[t] >= e.blkIndent && (L = !0), (D = o(e, t)) >= 0)) {
                                if (((d = !0), (N = e.bMarks[t] + e.tShift[t]), (y = Number(e.src.slice(N, D - 1))), L && 1 !== y)) return !1;
                            } else {
                                if (!((D = i(e, t)) >= 0)) return !1;
                                d = !1;
                            }
                            if (L && e.skipSpaces(D) >= e.eMarks[t]) return !1;
                            if (((b = e.src.charCodeAt(D - 1)), r)) return !0;
                            for (
                                m = e.tokens.length,
                                    d ? ((O = e.push("ordered_list_open", "ol", 1)), 1 !== y && (O.attrs = [["start", y]])) : (O = e.push("bullet_list_open", "ul", 1)),
                                    O.map = h = [t, 0],
                                    O.markup = String.fromCharCode(b),
                                    x = t,
                                    _ = !1,
                                    S = e.md.block.ruler.getRules("list"),
                                    k = e.parentType,
                                    e.parentType = "list";
                                x < n;

                            ) {
                                for (I = D, A = e.eMarks[x], p = v = e.sCount[x] + D - (e.bMarks[t] + e.tShift[t]); I < A; ) {
                                    if (9 === (s = e.src.charCodeAt(I))) v += 4 - ((v + e.bsCount[x]) % 4);
                                    else {
                                        if (32 !== s) break;
                                        v++;
                                    }
                                    I++;
                                }
                                if (
                                    ((u = (a = I) >= A ? 1 : v - p) > 4 && (u = 1),
                                    (c = p + u),
                                    ((O = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(b)),
                                    (O.map = g = [t, 0]),
                                    d && (O.info = e.src.slice(N, D - 1)),
                                    (C = e.tight),
                                    (M = e.tShift[t]),
                                    (E = e.sCount[t]),
                                    (w = e.listIndent),
                                    (e.listIndent = e.blkIndent),
                                    (e.blkIndent = c),
                                    (e.tight = !0),
                                    (e.tShift[t] = a - e.bMarks[t]),
                                    (e.sCount[t] = v),
                                    a >= A && e.isEmpty(t + 1) ? (e.line = Math.min(e.line + 2, n)) : e.md.block.tokenize(e, t, n, !0),
                                    (e.tight && !_) || (z = !1),
                                    (_ = e.line - t > 1 && e.isEmpty(e.line - 1)),
                                    (e.blkIndent = e.listIndent),
                                    (e.listIndent = w),
                                    (e.tShift[t] = M),
                                    (e.sCount[t] = E),
                                    (e.tight = C),
                                    ((O = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(b)),
                                    (x = t = e.line),
                                    (g[1] = x),
                                    (a = e.bMarks[t]),
                                    x >= n)
                                )
                                    break;
                                if (e.sCount[x] < e.blkIndent) break;
                                if (e.sCount[t] - e.blkIndent >= 4) break;
                                for (T = !1, l = 0, f = S.length; l < f; l++)
                                    if (S[l](e, x, n, !0)) {
                                        T = !0;
                                        break;
                                    }
                                if (T) break;
                                if (d) {
                                    if ((D = o(e, x)) < 0) break;
                                    N = e.bMarks[x] + e.tShift[x];
                                } else if ((D = i(e, x)) < 0) break;
                                if (b !== e.src.charCodeAt(D - 1)) break;
                            }
                            return (
                                ((O = d ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(b)),
                                (h[1] = x),
                                (e.line = x),
                                (e.parentType = k),
                                z &&
                                    (function (e, t) {
                                        var n,
                                            r,
                                            i = e.level + 2;
                                        for (n = t + 2, r = e.tokens.length - 2; n < r; n++) e.tokens[n].level === i && "paragraph_open" === e.tokens[n].type && ((e.tokens[n + 2].hidden = !0), (e.tokens[n].hidden = !0), (n += 2));
                                    })(e, m),
                                !0
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).normalizeReference,
                            i = n(0).isSpace;
                        e.exports = function (e, t, n, o) {
                            var s,
                                a,
                                l,
                                c,
                                u,
                                p,
                                d,
                                g,
                                f,
                                h,
                                m,
                                b,
                                y,
                                A,
                                x,
                                v,
                                w = 0,
                                k = e.bMarks[t] + e.tShift[t],
                                E = e.eMarks[t],
                                M = t + 1;
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (91 !== e.src.charCodeAt(k)) return !1;
                            for (; ++k < E; )
                                if (93 === e.src.charCodeAt(k) && 92 !== e.src.charCodeAt(k - 1)) {
                                    if (k + 1 === E) return !1;
                                    if (58 !== e.src.charCodeAt(k + 1)) return !1;
                                    break;
                                }
                            for (c = e.lineMax, x = e.md.block.ruler.getRules("reference"), h = e.parentType, e.parentType = "reference"; M < c && !e.isEmpty(M); M++)
                                if (!(e.sCount[M] - e.blkIndent > 3 || e.sCount[M] < 0)) {
                                    for (A = !1, p = 0, d = x.length; p < d; p++)
                                        if (x[p](e, M, c, !0)) {
                                            A = !0;
                                            break;
                                        }
                                    if (A) break;
                                }
                            for (E = (y = e.getLines(t, M, e.blkIndent, !1).trim()).length, k = 1; k < E; k++) {
                                if (91 === (s = y.charCodeAt(k))) return !1;
                                if (93 === s) {
                                    f = k;
                                    break;
                                }
                                (10 === s || (92 === s && ++k < E && 10 === y.charCodeAt(k))) && w++;
                            }
                            if (f < 0 || 58 !== y.charCodeAt(f + 1)) return !1;
                            for (k = f + 2; k < E; k++)
                                if (10 === (s = y.charCodeAt(k))) w++;
                                else if (!i(s)) break;
                            if (!(m = e.md.helpers.parseLinkDestination(y, k, E)).ok) return !1;
                            if (((u = e.md.normalizeLink(m.str)), !e.md.validateLink(u))) return !1;
                            for (a = k = m.pos, l = w += m.lines, b = k; k < E; k++)
                                if (10 === (s = y.charCodeAt(k))) w++;
                                else if (!i(s)) break;
                            for (m = e.md.helpers.parseLinkTitle(y, k, E), k < E && b !== k && m.ok ? ((v = m.str), (k = m.pos), (w += m.lines)) : ((v = ""), (k = a), (w = l)); k < E && ((s = y.charCodeAt(k)), i(s)); ) k++;
                            if (k < E && 10 !== y.charCodeAt(k) && v) for (v = "", k = a, w = l; k < E && ((s = y.charCodeAt(k)), i(s)); ) k++;
                            return !(
                                (k < E && 10 !== y.charCodeAt(k)) ||
                                !(g = r(y.slice(1, f))) ||
                                (o || (void 0 === e.env.references && (e.env.references = {}), void 0 === e.env.references[g] && (e.env.references[g] = { title: v, href: u }), (e.parentType = h), (e.line = t + w + 1)), 0)
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(50),
                            i = n(12).HTML_OPEN_CLOSE_TAG_RE,
                            o = [
                                [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
                                [/^<!--/, /-->/, !0],
                                [/^<\?/, /\?>/, !0],
                                [/^<![A-Z]/, />/, !0],
                                [/^<!\[CDATA\[/, /\]\]>/, !0],
                                [new RegExp("^</?(" + r.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
                                [new RegExp(i.source + "\\s*$"), /^$/, !1],
                            ];
                        e.exports = function (e, t, n, r) {
                            var i,
                                s,
                                a,
                                l,
                                c = e.bMarks[t] + e.tShift[t],
                                u = e.eMarks[t];
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (!e.md.options.html) return !1;
                            if (60 !== e.src.charCodeAt(c)) return !1;
                            for (l = e.src.slice(c, u), i = 0; i < o.length && !o[i][0].test(l); i++);
                            if (i === o.length) return !1;
                            if (r) return o[i][2];
                            if (((s = t + 1), !o[i][1].test(l)))
                                for (; s < n && !(e.sCount[s] < e.blkIndent); s++)
                                    if (((c = e.bMarks[s] + e.tShift[s]), (u = e.eMarks[s]), (l = e.src.slice(c, u)), o[i][1].test(l))) {
                                        0 !== l.length && s++;
                                        break;
                                    }
                            return (e.line = s), ((a = e.push("html_block", "", 0)).map = [t, s]), (a.content = e.getLines(t, s, e.blkIndent, !0)), !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = [
                            "address",
                            "article",
                            "aside",
                            "base",
                            "basefont",
                            "blockquote",
                            "body",
                            "caption",
                            "center",
                            "col",
                            "colgroup",
                            "dd",
                            "details",
                            "dialog",
                            "dir",
                            "div",
                            "dl",
                            "dt",
                            "fieldset",
                            "figcaption",
                            "figure",
                            "footer",
                            "form",
                            "frame",
                            "frameset",
                            "h1",
                            "h2",
                            "h3",
                            "h4",
                            "h5",
                            "h6",
                            "head",
                            "header",
                            "hr",
                            "html",
                            "iframe",
                            "legend",
                            "li",
                            "link",
                            "main",
                            "menu",
                            "menuitem",
                            "nav",
                            "noframes",
                            "ol",
                            "optgroup",
                            "option",
                            "p",
                            "param",
                            "section",
                            "source",
                            "summary",
                            "table",
                            "tbody",
                            "td",
                            "tfoot",
                            "th",
                            "thead",
                            "title",
                            "tr",
                            "track",
                            "ul",
                        ];
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).isSpace;
                        e.exports = function (e, t, n, i) {
                            var o,
                                s,
                                a,
                                l,
                                c = e.bMarks[t] + e.tShift[t],
                                u = e.eMarks[t];
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            if (35 !== (o = e.src.charCodeAt(c)) || c >= u) return !1;
                            for (s = 1, o = e.src.charCodeAt(++c); 35 === o && c < u && s <= 6; ) s++, (o = e.src.charCodeAt(++c));
                            return !(
                                s > 6 ||
                                (c < u && !r(o)) ||
                                (i ||
                                    ((u = e.skipSpacesBack(u, c)),
                                    (a = e.skipCharsBack(u, 35, c)) > c && r(e.src.charCodeAt(a - 1)) && (u = a),
                                    (e.line = t + 1),
                                    ((l = e.push("heading_open", "h" + String(s), 1)).markup = "########".slice(0, s)),
                                    (l.map = [t, e.line]),
                                    ((l = e.push("inline", "", 0)).content = e.src.slice(c, u).trim()),
                                    (l.map = [t, e.line]),
                                    (l.children = []),
                                    ((l = e.push("heading_close", "h" + String(s), -1)).markup = "########".slice(0, s))),
                                0)
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e, t, n) {
                            var r,
                                i,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                p,
                                d,
                                g = t + 1,
                                f = e.md.block.ruler.getRules("paragraph");
                            if (e.sCount[t] - e.blkIndent >= 4) return !1;
                            for (d = e.parentType, e.parentType = "paragraph"; g < n && !e.isEmpty(g); g++)
                                if (!(e.sCount[g] - e.blkIndent > 3)) {
                                    if (e.sCount[g] >= e.blkIndent && (l = e.bMarks[g] + e.tShift[g]) < (c = e.eMarks[g]) && (45 === (p = e.src.charCodeAt(l)) || 61 === p) && ((l = e.skipChars(l, p)), (l = e.skipSpaces(l)) >= c)) {
                                        u = 61 === p ? 1 : 2;
                                        break;
                                    }
                                    if (!(e.sCount[g] < 0)) {
                                        for (i = !1, o = 0, s = f.length; o < s; o++)
                                            if (f[o](e, g, n, !0)) {
                                                i = !0;
                                                break;
                                            }
                                        if (i) break;
                                    }
                                }
                            return (
                                !!u &&
                                ((r = e.getLines(t, g, e.blkIndent, !1).trim()),
                                (e.line = g + 1),
                                ((a = e.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(p)),
                                (a.map = [t, e.line]),
                                ((a = e.push("inline", "", 0)).content = r),
                                (a.map = [t, e.line - 1]),
                                (a.children = []),
                                ((a = e.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(p)),
                                (e.parentType = d),
                                !0)
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e, t) {
                            var n,
                                r,
                                i,
                                o,
                                s,
                                a,
                                l = t + 1,
                                c = e.md.block.ruler.getRules("paragraph"),
                                u = e.lineMax;
                            for (a = e.parentType, e.parentType = "paragraph"; l < u && !e.isEmpty(l); l++)
                                if (!(e.sCount[l] - e.blkIndent > 3 || e.sCount[l] < 0)) {
                                    for (r = !1, i = 0, o = c.length; i < o; i++)
                                        if (c[i](e, l, u, !0)) {
                                            r = !0;
                                            break;
                                        }
                                    if (r) break;
                                }
                            return (
                                (n = e.getLines(t, l, e.blkIndent, !1).trim()),
                                (e.line = l),
                                ((s = e.push("paragraph_open", "p", 1)).map = [t, e.line]),
                                ((s = e.push("inline", "", 0)).content = n),
                                (s.map = [t, e.line]),
                                (s.children = []),
                                (s = e.push("paragraph_close", "p", -1)),
                                (e.parentType = a),
                                !0
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(5),
                            i = n(0).isSpace;
                        function o(e, t, n, r) {
                            var o, s, a, l, c, u, p, d;
                            for (
                                this.src = e,
                                    this.md = t,
                                    this.env = n,
                                    this.tokens = r,
                                    this.bMarks = [],
                                    this.eMarks = [],
                                    this.tShift = [],
                                    this.sCount = [],
                                    this.bsCount = [],
                                    this.blkIndent = 0,
                                    this.line = 0,
                                    this.lineMax = 0,
                                    this.tight = !1,
                                    this.ddIndent = -1,
                                    this.listIndent = -1,
                                    this.parentType = "root",
                                    this.level = 0,
                                    this.result = "",
                                    d = !1,
                                    a = l = u = p = 0,
                                    c = (s = this.src).length;
                                l < c;
                                l++
                            ) {
                                if (((o = s.charCodeAt(l)), !d)) {
                                    if (i(o)) {
                                        u++, 9 === o ? (p += 4 - (p % 4)) : p++;
                                        continue;
                                    }
                                    d = !0;
                                }
                                (10 !== o && l !== c - 1) || (10 !== o && l++, this.bMarks.push(a), this.eMarks.push(l), this.tShift.push(u), this.sCount.push(p), this.bsCount.push(0), (d = !1), (u = 0), (p = 0), (a = l + 1));
                            }
                            this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), (this.lineMax = this.bMarks.length - 1);
                        }
                        (o.prototype.push = function (e, t, n) {
                            var i = new r(e, t, n);
                            return (i.block = !0), n < 0 && this.level--, (i.level = this.level), n > 0 && this.level++, this.tokens.push(i), i;
                        }),
                            (o.prototype.isEmpty = function (e) {
                                return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
                            }),
                            (o.prototype.skipEmptyLines = function (e) {
                                for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
                                return e;
                            }),
                            (o.prototype.skipSpaces = function (e) {
                                for (var t, n = this.src.length; e < n && ((t = this.src.charCodeAt(e)), i(t)); e++);
                                return e;
                            }),
                            (o.prototype.skipSpacesBack = function (e, t) {
                                if (e <= t) return e;
                                for (; e > t; ) if (!i(this.src.charCodeAt(--e))) return e + 1;
                                return e;
                            }),
                            (o.prototype.skipChars = function (e, t) {
                                for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
                                return e;
                            }),
                            (o.prototype.skipCharsBack = function (e, t, n) {
                                if (e <= n) return e;
                                for (; e > n; ) if (t !== this.src.charCodeAt(--e)) return e + 1;
                                return e;
                            }),
                            (o.prototype.getLines = function (e, t, n, r) {
                                var o,
                                    s,
                                    a,
                                    l,
                                    c,
                                    u,
                                    p,
                                    d = e;
                                if (e >= t) return "";
                                for (u = new Array(t - e), o = 0; d < t; d++, o++) {
                                    for (s = 0, p = l = this.bMarks[d], c = d + 1 < t || r ? this.eMarks[d] + 1 : this.eMarks[d]; l < c && s < n; ) {
                                        if (((a = this.src.charCodeAt(l)), i(a))) 9 === a ? (s += 4 - ((s + this.bsCount[d]) % 4)) : s++;
                                        else {
                                            if (!(l - p < this.tShift[d])) break;
                                            s++;
                                        }
                                        l++;
                                    }
                                    u[o] = s > n ? new Array(s - n + 1).join(" ") + this.src.slice(l, c) : this.src.slice(l, c);
                                }
                                return u.join("");
                            }),
                            (o.prototype.Token = r),
                            (e.exports = o);
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(4),
                            i = [
                                ["text", n(56)],
                                ["newline", n(57)],
                                ["escape", n(58)],
                                ["backticks", n(59)],
                                ["strikethrough", n(13).tokenize],
                                ["emphasis", n(14).tokenize],
                                ["link", n(60)],
                                ["image", n(61)],
                                ["autolink", n(62)],
                                ["html_inline", n(63)],
                                ["entity", n(64)],
                            ],
                            o = [
                                ["balance_pairs", n(65)],
                                ["strikethrough", n(13).postProcess],
                                ["emphasis", n(14).postProcess],
                                ["text_collapse", n(66)],
                            ];
                        function s() {
                            var e;
                            for (this.ruler = new r(), e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1]);
                            for (this.ruler2 = new r(), e = 0; e < o.length; e++) this.ruler2.push(o[e][0], o[e][1]);
                        }
                        (s.prototype.skipToken = function (e) {
                            var t,
                                n,
                                r = e.pos,
                                i = this.ruler.getRules(""),
                                o = i.length,
                                s = e.md.options.maxNesting,
                                a = e.cache;
                            if (void 0 === a[r]) {
                                if (e.level < s) for (n = 0; n < o && (e.level++, (t = i[n](e, !0)), e.level--, !t); n++);
                                else e.pos = e.posMax;
                                t || e.pos++, (a[r] = e.pos);
                            } else e.pos = a[r];
                        }),
                            (s.prototype.tokenize = function (e) {
                                for (var t, n, r = this.ruler.getRules(""), i = r.length, o = e.posMax, s = e.md.options.maxNesting; e.pos < o; ) {
                                    if (e.level < s) for (n = 0; n < i && !(t = r[n](e, !1)); n++);
                                    if (t) {
                                        if (e.pos >= o) break;
                                    } else e.pending += e.src[e.pos++];
                                }
                                e.pending && e.pushPending();
                            }),
                            (s.prototype.parse = function (e, t, n, r) {
                                var i,
                                    o,
                                    s,
                                    a = new this.State(e, t, n, r);
                                for (this.tokenize(a), s = (o = this.ruler2.getRules("")).length, i = 0; i < s; i++) o[i](a);
                            }),
                            (s.prototype.State = n(67)),
                            (e.exports = s);
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e) {
                            switch (e) {
                                case 10:
                                case 33:
                                case 35:
                                case 36:
                                case 37:
                                case 38:
                                case 42:
                                case 43:
                                case 45:
                                case 58:
                                case 60:
                                case 61:
                                case 62:
                                case 64:
                                case 91:
                                case 92:
                                case 93:
                                case 94:
                                case 95:
                                case 96:
                                case 123:
                                case 125:
                                case 126:
                                    return !0;
                                default:
                                    return !1;
                            }
                        }
                        e.exports = function (e, t) {
                            for (var n = e.pos; n < e.posMax && !r(e.src.charCodeAt(n)); ) n++;
                            return n !== e.pos && (t || (e.pending += e.src.slice(e.pos, n)), (e.pos = n), !0);
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).isSpace;
                        e.exports = function (e, t) {
                            var n,
                                i,
                                o,
                                s = e.pos;
                            if (10 !== e.src.charCodeAt(s)) return !1;
                            if (((n = e.pending.length - 1), (i = e.posMax), !t))
                                if (n >= 0 && 32 === e.pending.charCodeAt(n))
                                    if (n >= 1 && 32 === e.pending.charCodeAt(n - 1)) {
                                        for (o = n - 1; o >= 1 && 32 === e.pending.charCodeAt(o - 1); ) o--;
                                        (e.pending = e.pending.slice(0, o)), e.push("hardbreak", "br", 0);
                                    } else (e.pending = e.pending.slice(0, -1)), e.push("softbreak", "br", 0);
                                else e.push("softbreak", "br", 0);
                            for (s++; s < i && r(e.src.charCodeAt(s)); ) s++;
                            return (e.pos = s), !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        for (var r = n(0).isSpace, i = [], o = 0; o < 256; o++) i.push(0);
                        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
                            i[e.charCodeAt(0)] = 1;
                        }),
                            (e.exports = function (e, t) {
                                var n,
                                    o = e.pos,
                                    s = e.posMax;
                                if (92 !== e.src.charCodeAt(o)) return !1;
                                if (++o < s) {
                                    if ((n = e.src.charCodeAt(o)) < 256 && 0 !== i[n]) return t || (e.pending += e.src[o]), (e.pos += 2), !0;
                                    if (10 === n) {
                                        for (t || e.push("hardbreak", "br", 0), o++; o < s && ((n = e.src.charCodeAt(o)), r(n)); ) o++;
                                        return (e.pos = o), !0;
                                    }
                                }
                                return t || (e.pending += "\\"), e.pos++, !0;
                            });
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e, t) {
                            var n,
                                r,
                                i,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u = e.pos;
                            if (96 !== e.src.charCodeAt(u)) return !1;
                            for (n = u, u++, r = e.posMax; u < r && 96 === e.src.charCodeAt(u); ) u++;
                            if (((l = (i = e.src.slice(n, u)).length), e.backticksScanned && (e.backticks[l] || 0) <= n)) return t || (e.pending += i), (e.pos += l), !0;
                            for (s = a = u; -1 !== (s = e.src.indexOf("`", a)); ) {
                                for (a = s + 1; a < r && 96 === e.src.charCodeAt(a); ) a++;
                                if ((c = a - s) === l)
                                    return (
                                        t ||
                                            (((o = e.push("code_inline", "code", 0)).markup = i),
                                            (o.content = e.src
                                                .slice(u, s)
                                                .replace(/\n/g, " ")
                                                .replace(/^ (.+) $/, "$1"))),
                                        (e.pos = a),
                                        !0
                                    );
                                e.backticks[c] = s;
                            }
                            return (e.backticksScanned = !0), t || (e.pending += i), (e.pos += l), !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).normalizeReference,
                            i = n(0).isSpace;
                        e.exports = function (e, t) {
                            var n,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                p,
                                d = "",
                                g = "",
                                f = e.pos,
                                h = e.posMax,
                                m = e.pos,
                                b = !0;
                            if (91 !== e.src.charCodeAt(e.pos)) return !1;
                            if (((l = e.pos + 1), (a = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0)) return !1;
                            if ((c = a + 1) < h && 40 === e.src.charCodeAt(c)) {
                                for (b = !1, c++; c < h && ((o = e.src.charCodeAt(c)), i(o) || 10 === o); c++);
                                if (c >= h) return !1;
                                if (((m = c), (u = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)).ok)) {
                                    for (d = e.md.normalizeLink(u.str), e.md.validateLink(d) ? (c = u.pos) : (d = ""), m = c; c < h && ((o = e.src.charCodeAt(c)), i(o) || 10 === o); c++);
                                    if (((u = e.md.helpers.parseLinkTitle(e.src, c, e.posMax)), c < h && m !== c && u.ok)) for (g = u.str, c = u.pos; c < h && ((o = e.src.charCodeAt(c)), i(o) || 10 === o); c++);
                                }
                                (c >= h || 41 !== e.src.charCodeAt(c)) && (b = !0), c++;
                            }
                            if (b) {
                                if (void 0 === e.env.references) return !1;
                                if (
                                    (c < h && 91 === e.src.charCodeAt(c) ? ((m = c + 1), (c = e.md.helpers.parseLinkLabel(e, c)) >= 0 ? (s = e.src.slice(m, c++)) : (c = a + 1)) : (c = a + 1),
                                    s || (s = e.src.slice(l, a)),
                                    !(p = e.env.references[r(s)]))
                                )
                                    return (e.pos = f), !1;
                                (d = p.href), (g = p.title);
                            }
                            return (
                                t || ((e.pos = l), (e.posMax = a), (e.push("link_open", "a", 1).attrs = n = [["href", d]]), g && n.push(["title", g]), e.md.inline.tokenize(e), e.push("link_close", "a", -1)), (e.pos = c), (e.posMax = h), !0
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(0).normalizeReference,
                            i = n(0).isSpace;
                        e.exports = function (e, t) {
                            var n,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                p,
                                d,
                                g,
                                f,
                                h,
                                m,
                                b = "",
                                y = e.pos,
                                A = e.posMax;
                            if (33 !== e.src.charCodeAt(e.pos)) return !1;
                            if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
                            if (((c = e.pos + 2), (l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0)) return !1;
                            if ((u = l + 1) < A && 40 === e.src.charCodeAt(u)) {
                                for (u++; u < A && ((o = e.src.charCodeAt(u)), i(o) || 10 === o); u++);
                                if (u >= A) return !1;
                                for (
                                    m = u, (d = e.md.helpers.parseLinkDestination(e.src, u, e.posMax)).ok && ((b = e.md.normalizeLink(d.str)), e.md.validateLink(b) ? (u = d.pos) : (b = "")), m = u;
                                    u < A && ((o = e.src.charCodeAt(u)), i(o) || 10 === o);
                                    u++
                                );
                                if (((d = e.md.helpers.parseLinkTitle(e.src, u, e.posMax)), u < A && m !== u && d.ok)) for (g = d.str, u = d.pos; u < A && ((o = e.src.charCodeAt(u)), i(o) || 10 === o); u++);
                                else g = "";
                                if (u >= A || 41 !== e.src.charCodeAt(u)) return (e.pos = y), !1;
                                u++;
                            } else {
                                if (void 0 === e.env.references) return !1;
                                if (
                                    (u < A && 91 === e.src.charCodeAt(u) ? ((m = u + 1), (u = e.md.helpers.parseLinkLabel(e, u)) >= 0 ? (a = e.src.slice(m, u++)) : (u = l + 1)) : (u = l + 1),
                                    a || (a = e.src.slice(c, l)),
                                    !(p = e.env.references[r(a)]))
                                )
                                    return (e.pos = y), !1;
                                (b = p.href), (g = p.title);
                            }
                            return (
                                t ||
                                    ((s = e.src.slice(c, l)),
                                    e.md.inline.parse(s, e.md, e.env, (h = [])),
                                    ((f = e.push("image", "img", 0)).attrs = n = [
                                        ["src", b],
                                        ["alt", ""],
                                    ]),
                                    (f.children = h),
                                    (f.content = s),
                                    g && n.push(["title", g])),
                                (e.pos = u),
                                (e.posMax = A),
                                !0
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
                            i = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
                        e.exports = function (e, t) {
                            var n,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u = e.pos;
                            if (60 !== e.src.charCodeAt(u)) return !1;
                            for (l = e.pos, c = e.posMax; ; ) {
                                if (++u >= c) return !1;
                                if (60 === (a = e.src.charCodeAt(u))) return !1;
                                if (62 === a) break;
                            }
                            return (
                                (n = e.src.slice(l + 1, u)),
                                i.test(n)
                                    ? ((o = e.md.normalizeLink(n)),
                                      !!e.md.validateLink(o) &&
                                          (t ||
                                              (((s = e.push("link_open", "a", 1)).attrs = [["href", o]]),
                                              (s.markup = "autolink"),
                                              (s.info = "auto"),
                                              ((s = e.push("text", "", 0)).content = e.md.normalizeLinkText(n)),
                                              ((s = e.push("link_close", "a", -1)).markup = "autolink"),
                                              (s.info = "auto")),
                                          (e.pos += n.length + 2),
                                          !0))
                                    : !!r.test(n) &&
                                      ((o = e.md.normalizeLink("mailto:" + n)),
                                      !!e.md.validateLink(o) &&
                                          (t ||
                                              (((s = e.push("link_open", "a", 1)).attrs = [["href", o]]),
                                              (s.markup = "autolink"),
                                              (s.info = "auto"),
                                              ((s = e.push("text", "", 0)).content = e.md.normalizeLinkText(n)),
                                              ((s = e.push("link_close", "a", -1)).markup = "autolink"),
                                              (s.info = "auto")),
                                          (e.pos += n.length + 2),
                                          !0))
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(12).HTML_TAG_RE;
                        e.exports = function (e, t) {
                            var n,
                                i,
                                o,
                                s = e.pos;
                            return !(
                                !e.md.options.html ||
                                ((o = e.posMax),
                                60 !== e.src.charCodeAt(s) ||
                                    s + 2 >= o ||
                                    (33 !== (n = e.src.charCodeAt(s + 1)) &&
                                        63 !== n &&
                                        47 !== n &&
                                        !(function (e) {
                                            var t = 32 | e;
                                            return t >= 97 && t <= 122;
                                        })(n)) ||
                                    !(i = e.src.slice(s).match(r)) ||
                                    (t || (e.push("html_inline", "", 0).content = e.src.slice(s, s + i[0].length)), (e.pos += i[0].length), 0))
                            );
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(7),
                            i = n(0).has,
                            o = n(0).isValidEntityCode,
                            s = n(0).fromCodePoint,
                            a = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
                            l = /^&([a-z][a-z0-9]{1,31});/i;
                        e.exports = function (e, t) {
                            var n,
                                c,
                                u = e.pos,
                                p = e.posMax;
                            if (38 !== e.src.charCodeAt(u)) return !1;
                            if (u + 1 < p)
                                if (35 === e.src.charCodeAt(u + 1)) {
                                    if ((c = e.src.slice(u).match(a))) return t || ((n = "x" === c[1][0].toLowerCase() ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10)), (e.pending += o(n) ? s(n) : s(65533))), (e.pos += c[0].length), !0;
                                } else if ((c = e.src.slice(u).match(l)) && i(r, c[1])) return t || (e.pending += r[c[1]]), (e.pos += c[0].length), !0;
                            return t || (e.pending += "&"), e.pos++, !0;
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e, t) {
                            var n,
                                r,
                                i,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u = {},
                                p = t.length;
                            if (p) {
                                var d = 0,
                                    g = -2,
                                    f = [];
                                for (n = 0; n < p; n++)
                                    if (((i = t[n]), f.push(0), (t[d].marker === i.marker && g === i.token - 1) || (d = n), (g = i.token), (i.length = i.length || 0), i.close)) {
                                        for (u.hasOwnProperty(i.marker) || (u[i.marker] = [-1, -1, -1, -1, -1, -1]), s = u[i.marker][(i.open ? 3 : 0) + (i.length % 3)], a = r = d - f[d] - 1; r > s; r -= f[r] + 1)
                                            if ((o = t[r]).marker === i.marker && o.open && o.end < 0 && ((l = !1), (o.close || i.open) && (o.length + i.length) % 3 == 0 && ((o.length % 3 == 0 && i.length % 3 == 0) || (l = !0)), !l)) {
                                                (c = r > 0 && !t[r - 1].open ? f[r - 1] + 1 : 0), (f[n] = n - r + c), (f[r] = c), (i.open = !1), (o.end = n), (o.close = !1), (a = -1), (g = -2);
                                                break;
                                            }
                                        -1 !== a && (u[i.marker][(i.open ? 3 : 0) + ((i.length || 0) % 3)] = a);
                                    }
                            }
                        }
                        e.exports = function (e) {
                            var t,
                                n = e.tokens_meta,
                                i = e.tokens_meta.length;
                            for (r(0, e.delimiters), t = 0; t < i; t++) n[t] && n[t].delimiters && r(0, n[t].delimiters);
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e) {
                            var t,
                                n,
                                r = 0,
                                i = e.tokens,
                                o = e.tokens.length;
                            for (t = n = 0; t < o; t++)
                                i[t].nesting < 0 && r--,
                                    (i[t].level = r),
                                    i[t].nesting > 0 && r++,
                                    "text" === i[t].type && t + 1 < o && "text" === i[t + 1].type ? (i[t + 1].content = i[t].content + i[t + 1].content) : (t !== n && (i[n] = i[t]), n++);
                            t !== n && (i.length = n);
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        var r = n(5),
                            i = n(0).isWhiteSpace,
                            o = n(0).isPunctChar,
                            s = n(0).isMdAsciiPunct;
                        function a(e, t, n, r) {
                            (this.src = e),
                                (this.env = n),
                                (this.md = t),
                                (this.tokens = r),
                                (this.tokens_meta = Array(r.length)),
                                (this.pos = 0),
                                (this.posMax = this.src.length),
                                (this.level = 0),
                                (this.pending = ""),
                                (this.pendingLevel = 0),
                                (this.cache = {}),
                                (this.delimiters = []),
                                (this._prev_delimiters = []),
                                (this.backticks = {}),
                                (this.backticksScanned = !1);
                        }
                        (a.prototype.pushPending = function () {
                            var e = new r("text", "", 0);
                            return (e.content = this.pending), (e.level = this.pendingLevel), this.tokens.push(e), (this.pending = ""), e;
                        }),
                            (a.prototype.push = function (e, t, n) {
                                this.pending && this.pushPending();
                                var i = new r(e, t, n),
                                    o = null;
                                return (
                                    n < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
                                    (i.level = this.level),
                                    n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), (this.delimiters = []), (o = { delimiters: this.delimiters })),
                                    (this.pendingLevel = this.level),
                                    this.tokens.push(i),
                                    this.tokens_meta.push(o),
                                    i
                                );
                            }),
                            (a.prototype.scanDelims = function (e, t) {
                                var n,
                                    r,
                                    a,
                                    l,
                                    c,
                                    u,
                                    p,
                                    d,
                                    g,
                                    f = e,
                                    h = !0,
                                    m = !0,
                                    b = this.posMax,
                                    y = this.src.charCodeAt(e);
                                for (n = e > 0 ? this.src.charCodeAt(e - 1) : 32; f < b && this.src.charCodeAt(f) === y; ) f++;
                                return (
                                    (a = f - e),
                                    (r = f < b ? this.src.charCodeAt(f) : 32),
                                    (p = s(n) || o(String.fromCharCode(n))),
                                    (g = s(r) || o(String.fromCharCode(r))),
                                    (u = i(n)),
                                    (d = i(r)) ? (h = !1) : g && (u || p || (h = !1)),
                                    u ? (m = !1) : p && (d || g || (m = !1)),
                                    t ? ((l = h), (c = m)) : ((l = h && (!m || p)), (c = m && (!h || g))),
                                    { can_open: l, can_close: c, length: a }
                                );
                            }),
                            (a.prototype.Token = r),
                            (e.exports = a);
                    },
                    function (e, t, n) {
                        "use strict";
                        function r(e) {
                            return (
                                Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                                    t &&
                                        Object.keys(t).forEach(function (n) {
                                            e[n] = t[n];
                                        });
                                }),
                                e
                            );
                        }
                        function i(e) {
                            return Object.prototype.toString.call(e);
                        }
                        function o(e) {
                            return "[object Function]" === i(e);
                        }
                        function s(e) {
                            return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
                        }
                        var a = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 },
                            l = {
                                "http:": {
                                    validate: function (e, t, n) {
                                        var r = e.slice(t);
                                        return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
                                    },
                                },
                                "https:": "http:",
                                "ftp:": "http:",
                                "//": {
                                    validate: function (e, t, n) {
                                        var r = e.slice(t);
                                        return (
                                            n.re.no_http ||
                                                (n.re.no_http = new RegExp(
                                                    "^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
                                                    "i"
                                                )),
                                            n.re.no_http.test(r) ? ((t >= 3 && ":" === e[t - 3]) || (t >= 3 && "/" === e[t - 3]) ? 0 : r.match(n.re.no_http)[0].length) : 0
                                        );
                                    },
                                },
                                "mailto:": {
                                    validate: function (e, t, n) {
                                        var r = e.slice(t);
                                        return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
                                    },
                                },
                            },
                            c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
                        function u(e) {
                            var t = (e.re = n(69)(e.__opts__)),
                                r = e.__tlds__.slice();
                            function a(e) {
                                return e.replace("%TLDS%", t.src_tlds);
                            }
                            e.onCompile(),
                                e.__tlds_replaced__ ||
                                    r.push(
                                        "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"
                                    ),
                                r.push(t.src_xn),
                                (t.src_tlds = r.join("|")),
                                (t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i")),
                                (t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i")),
                                (t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i")),
                                (t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i"));
                            var l = [];
                            function c(e, t) {
                                throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t);
                            }
                            (e.__compiled__ = {}),
                                Object.keys(e.__schemas__).forEach(function (t) {
                                    var n = e.__schemas__[t];
                                    if (null !== n) {
                                        var r = { validate: null, link: null };
                                        if (((e.__compiled__[t] = r), "[object Object]" === i(n)))
                                            return (
                                                (function (e) {
                                                    return "[object RegExp]" === i(e);
                                                })(n.validate)
                                                    ? (r.validate = (function (e) {
                                                          return function (t, n) {
                                                              var r = t.slice(n);
                                                              return e.test(r) ? r.match(e)[0].length : 0;
                                                          };
                                                      })(n.validate))
                                                    : o(n.validate)
                                                    ? (r.validate = n.validate)
                                                    : c(t, n),
                                                void (o(n.normalize)
                                                    ? (r.normalize = n.normalize)
                                                    : n.normalize
                                                    ? c(t, n)
                                                    : (r.normalize = function (e, t) {
                                                          t.normalize(e);
                                                      }))
                                            );
                                        !(function (e) {
                                            return "[object String]" === i(e);
                                        })(n)
                                            ? c(t, n)
                                            : l.push(t);
                                    }
                                }),
                                l.forEach(function (t) {
                                    e.__compiled__[e.__schemas__[t]] && ((e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate), (e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize));
                                }),
                                (e.__compiled__[""] = {
                                    validate: null,
                                    normalize: function (e, t) {
                                        t.normalize(e);
                                    },
                                });
                            var u = Object.keys(e.__compiled__)
                                .filter(function (t) {
                                    return t.length > 0 && e.__compiled__[t];
                                })
                                .map(s)
                                .join("|");
                            (e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i")),
                                (e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig")),
                                (e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i")),
                                (function (e) {
                                    (e.__index__ = -1), (e.__text_cache__ = "");
                                })(e);
                        }
                        function p(e, t) {
                            var n = e.__index__,
                                r = e.__last_index__,
                                i = e.__text_cache__.slice(n, r);
                            (this.schema = e.__schema__.toLowerCase()), (this.index = n + t), (this.lastIndex = r + t), (this.raw = i), (this.text = i), (this.url = i);
                        }
                        function d(e, t) {
                            var n = new p(e, t);
                            return e.__compiled__[n.schema].normalize(n, e), n;
                        }
                        function g(e, t) {
                            if (!(this instanceof g)) return new g(e, t);
                            var n;
                            t ||
                                ((n = e),
                                Object.keys(n || {}).reduce(function (e, t) {
                                    return e || a.hasOwnProperty(t);
                                }, !1) && ((t = e), (e = {}))),
                                (this.__opts__ = r({}, a, t)),
                                (this.__index__ = -1),
                                (this.__last_index__ = -1),
                                (this.__schema__ = ""),
                                (this.__text_cache__ = ""),
                                (this.__schemas__ = r({}, l, e)),
                                (this.__compiled__ = {}),
                                (this.__tlds__ = c),
                                (this.__tlds_replaced__ = !1),
                                (this.re = {}),
                                u(this);
                        }
                        (g.prototype.add = function (e, t) {
                            return (this.__schemas__[e] = t), u(this), this;
                        }),
                            (g.prototype.set = function (e) {
                                return (this.__opts__ = r(this.__opts__, e)), this;
                            }),
                            (g.prototype.test = function (e) {
                                if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return !1;
                                var t, n, r, i, o, s, a, l;
                                if (this.re.schema_test.test(e))
                                    for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e)); )
                                        if ((i = this.testSchemaAt(e, t[2], a.lastIndex))) {
                                            (this.__schema__ = t[2]), (this.__index__ = t.index + t[1].length), (this.__last_index__ = t.index + t[0].length + i);
                                            break;
                                        }
                                return (
                                    this.__opts__.fuzzyLink &&
                                        this.__compiled__["http:"] &&
                                        (l = e.search(this.re.host_fuzzy_test)) >= 0 &&
                                        (this.__index__ < 0 || l < this.__index__) &&
                                        null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) &&
                                        ((o = n.index + n[1].length), (this.__index__ < 0 || o < this.__index__) && ((this.__schema__ = ""), (this.__index__ = o), (this.__last_index__ = n.index + n[0].length))),
                                    this.__opts__.fuzzyEmail &&
                                        this.__compiled__["mailto:"] &&
                                        e.indexOf("@") >= 0 &&
                                        null !== (r = e.match(this.re.email_fuzzy)) &&
                                        ((o = r.index + r[1].length),
                                        (s = r.index + r[0].length),
                                        (this.__index__ < 0 || o < this.__index__ || (o === this.__index__ && s > this.__last_index__)) && ((this.__schema__ = "mailto:"), (this.__index__ = o), (this.__last_index__ = s))),
                                    this.__index__ >= 0
                                );
                            }),
                            (g.prototype.pretest = function (e) {
                                return this.re.pretest.test(e);
                            }),
                            (g.prototype.testSchemaAt = function (e, t, n) {
                                return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0;
                            }),
                            (g.prototype.match = function (e) {
                                var t = 0,
                                    n = [];
                                this.__index__ >= 0 && this.__text_cache__ === e && (n.push(d(this, t)), (t = this.__last_index__));
                                for (var r = t ? e.slice(t) : e; this.test(r); ) n.push(d(this, t)), (r = r.slice(this.__last_index__)), (t += this.__last_index__);
                                return n.length ? n : null;
                            }),
                            (g.prototype.tlds = function (e, t) {
                                return (
                                    (e = Array.isArray(e) ? e : [e]),
                                    t
                                        ? ((this.__tlds__ = this.__tlds__
                                              .concat(e)
                                              .sort()
                                              .filter(function (e, t, n) {
                                                  return e !== n[t - 1];
                                              })
                                              .reverse()),
                                          u(this),
                                          this)
                                        : ((this.__tlds__ = e.slice()), (this.__tlds_replaced__ = !0), u(this), this)
                                );
                            }),
                            (g.prototype.normalize = function (e) {
                                e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url);
                            }),
                            (g.prototype.onCompile = function () {}),
                            (e.exports = g);
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e) {
                            var t = {};
                            return (
                                (t.src_Any = n(9).source),
                                (t.src_Cc = n(10).source),
                                (t.src_Z = n(11).source),
                                (t.src_P = n(3).source),
                                (t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|")),
                                (t.src_ZCc = [t.src_Z, t.src_Cc].join("|")),
                                (t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")"),
                                (t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),
                                (t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?"),
                                (t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?"),
                                (t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))"),
                                (t.src_path =
                                    "(?:[/?#](?:(?!" +
                                    t.src_ZCc +
                                    "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" +
                                    t.src_ZCc +
                                    "|\\]).)*\\]|\\((?:(?!" +
                                    t.src_ZCc +
                                    "|[)]).)*\\)|\\{(?:(?!" +
                                    t.src_ZCc +
                                    '|[}]).)*\\}|\\"(?:(?!' +
                                    t.src_ZCc +
                                    '|["]).)+\\"|\\\'(?:(?!' +
                                    t.src_ZCc +
                                    "|[']).)+\\'|\\'(?=" +
                                    t.src_pseudo_letter +
                                    "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" +
                                    t.src_ZCc +
                                    "|[.]).|" +
                                    (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
                                    "\\,(?!" +
                                    t.src_ZCc +
                                    ").|\\!+(?!" +
                                    t.src_ZCc +
                                    "|[!]).|\\?(?!" +
                                    t.src_ZCc +
                                    "|[?]).)+|\\/)?"),
                                (t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
                                (t.src_xn = "xn--[a-z0-9\\-]{1,59}"),
                                (t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})"),
                                (t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))"),
                                (t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))"),
                                (t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))"),
                                (t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))"),
                                (t.src_host_strict = t.src_host + t.src_host_terminator),
                                (t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator),
                                (t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator),
                                (t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator),
                                (t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator),
                                (t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))"),
                                (t.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")"),
                                (t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")"),
                                (t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")"),
                                t
                            );
                        };
                    },
                    function (e, t, n) {
                        (function (e, r) {
                            var i;
                            !(function (o) {
                                t && t.nodeType, e && e.nodeType;
                                var s = "object" == typeof r && r;
                                s.global !== s && s.window !== s && s.self;
                                var a,
                                    l = 2147483647,
                                    c = /^xn--/,
                                    u = /[^\x20-\x7E]/,
                                    p = /[\x2E\u3002\uFF0E\uFF61]/g,
                                    d = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                                    g = Math.floor,
                                    f = String.fromCharCode;
                                function h(e) {
                                    throw new RangeError(d[e]);
                                }
                                function m(e, t) {
                                    for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
                                    return r;
                                }
                                function b(e, t) {
                                    var n = e.split("@"),
                                        r = "";
                                    return n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + m((e = e.replace(p, ".")).split("."), t).join(".");
                                }
                                function y(e) {
                                    for (var t, n, r = [], i = 0, o = e.length; i < o; )
                                        (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? (56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
                                    return r;
                                }
                                function A(e) {
                                    return m(e, function (e) {
                                        var t = "";
                                        return e > 65535 && ((t += f((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), t + f(e);
                                    }).join("");
                                }
                                function x(e, t) {
                                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                                }
                                function v(e, t, n) {
                                    var r = 0;
                                    for (e = n ? g(e / 700) : e >> 1, e += g(e / t); e > 455; r += 36) e = g(e / 35);
                                    return g(r + (36 * e) / (e + 38));
                                }
                                function w(e) {
                                    var t,
                                        n,
                                        r,
                                        i,
                                        o,
                                        s,
                                        a,
                                        c,
                                        u,
                                        p,
                                        d,
                                        f = [],
                                        m = e.length,
                                        b = 0,
                                        y = 128,
                                        x = 72;
                                    for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && h("not-basic"), f.push(e.charCodeAt(r));
                                    for (i = n > 0 ? n + 1 : 0; i < m; ) {
                                        for (
                                            o = b, s = 1, a = 36;
                                            i >= m && h("invalid-input"),
                                                ((c = (d = e.charCodeAt(i++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : 36) >= 36 || c > g((l - b) / s)) && h("overflow"),
                                                (b += c * s),
                                                !(c < (u = a <= x ? 1 : a >= x + 26 ? 26 : a - x));
                                            a += 36
                                        )
                                            s > g(l / (p = 36 - u)) && h("overflow"), (s *= p);
                                        (x = v(b - o, (t = f.length + 1), 0 == o)), g(b / t) > l - y && h("overflow"), (y += g(b / t)), (b %= t), f.splice(b++, 0, y);
                                    }
                                    return A(f);
                                }
                                function k(e) {
                                    var t,
                                        n,
                                        r,
                                        i,
                                        o,
                                        s,
                                        a,
                                        c,
                                        u,
                                        p,
                                        d,
                                        m,
                                        b,
                                        A,
                                        w,
                                        k = [];
                                    for (m = (e = y(e)).length, t = 128, n = 0, o = 72, s = 0; s < m; ++s) (d = e[s]) < 128 && k.push(f(d));
                                    for (r = i = k.length, i && k.push("-"); r < m; ) {
                                        for (a = l, s = 0; s < m; ++s) (d = e[s]) >= t && d < a && (a = d);
                                        for (a - t > g((l - n) / (b = r + 1)) && h("overflow"), n += (a - t) * b, t = a, s = 0; s < m; ++s)
                                            if (((d = e[s]) < t && ++n > l && h("overflow"), d == t)) {
                                                for (c = n, u = 36; !(c < (p = u <= o ? 1 : u >= o + 26 ? 26 : u - o)); u += 36) (w = c - p), (A = 36 - p), k.push(f(x(p + (w % A), 0))), (c = g(w / A));
                                                k.push(f(x(c, 0))), (o = v(n, b, r == i)), (n = 0), ++r;
                                            }
                                        ++n, ++t;
                                    }
                                    return k.join("");
                                }
                                (a = {
                                    version: "1.4.1",
                                    ucs2: { decode: y, encode: A },
                                    decode: w,
                                    encode: k,
                                    toASCII: function (e) {
                                        return b(e, function (e) {
                                            return u.test(e) ? "xn--" + k(e) : e;
                                        });
                                    },
                                    toUnicode: function (e) {
                                        return b(e, function (e) {
                                            return c.test(e) ? w(e.slice(4).toLowerCase()) : e;
                                        });
                                    },
                                }),
                                    void 0 ===
                                        (i = function () {
                                            return a;
                                        }.call(t, n, t, e)) || (e.exports = i);
                            })();
                        }.call(this, n(71)(e), n(72)));
                    },
                    function (e, t) {
                        e.exports = function (e) {
                            return (
                                e.webpackPolyfill ||
                                    ((e.deprecate = function () {}),
                                    (e.paths = []),
                                    e.children || (e.children = []),
                                    Object.defineProperty(e, "loaded", {
                                        enumerable: !0,
                                        get: function () {
                                            return e.l;
                                        },
                                    }),
                                    Object.defineProperty(e, "id", {
                                        enumerable: !0,
                                        get: function () {
                                            return e.i;
                                        },
                                    }),
                                    (e.webpackPolyfill = 1)),
                                e
                            );
                        };
                    },
                    function (e, t) {
                        var n;
                        n = (function () {
                            return this;
                        })();
                        try {
                            n = n || new Function("return this")();
                        } catch (e) {
                            "object" == typeof window && (n = window);
                        }
                        e.exports = n;
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = {
                            options: { html: !1, xhtmlOut: !1, breaks: !1, langPrefix: "language-", linkify: !1, typographer: !1, quotes: "“”‘’", highlight: null, maxNesting: 100 },
                            components: { core: {}, block: {}, inline: {} },
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = {
                            options: { html: !1, xhtmlOut: !1, breaks: !1, langPrefix: "language-", linkify: !1, typographer: !1, quotes: "“”‘’", highlight: null, maxNesting: 20 },
                            components: { core: { rules: ["normalize", "block", "inline"] }, block: { rules: ["paragraph"] }, inline: { rules: ["text"], rules2: ["balance_pairs", "text_collapse"] } },
                        };
                    },
                    function (e, t, n) {
                        "use strict";
                        e.exports = {
                            options: { html: !0, xhtmlOut: !0, breaks: !1, langPrefix: "language-", linkify: !1, typographer: !1, quotes: "“”‘’", highlight: null, maxNesting: 20 },
                            components: {
                                core: { rules: ["normalize", "block", "inline"] },
                                block: { rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"] },
                                inline: { rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"], rules2: ["balance_pairs", "emphasis", "text_collapse"] },
                            },
                        };
                    },
                    ,
                    function (e, t, n) {
                        "use strict";
                        n.r(t),
                            n.d(t, "default", function () {
                                return o;
                            });
                        var r = n(17),
                            i = n(2);
                        function o(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.Prism,
                                o = t.baseConfig,
                                s = t.codeBlockClass,
                                a = t.codeHighlightExtensionMap,
                                l = void 0 === a ? {} : a,
                                c = Object(r.default)(o);
                            return (
                                c.extend(function (e) {
                                    e.set({
                                        highlight: Object(i.a)({
                                            codeHighlightExtensionMap: l,
                                            hasLang: function (e) {
                                                return n.languages[e];
                                            },
                                            codeBlockClass: s,
                                            highlight: function (e, t) {
                                                return n.highlight(e, n.languages[t], t);
                                            },
                                        }),
                                    });
                                }),
                                {
                                    previewClass: "markdown-body",
                                    extend: function (e) {
                                        c.extend(function () {
                                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                            e.apply(void 0, r.concat([n]));
                                        });
                                    },
                                    markdownParser: c.markdownParser,
                                }
                            );
                        }
                    },
                    ,
                    function (e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n(1),
                            i = n(77);
                        t.default = function (e, t) {
                            void 0 === t && (t = {});
                            var n = t,
                                o = n.extend,
                                s = n.config,
                                a = n.codeHighlightExtensionMap,
                                l = (function (e) {
                                    var t = Object(i.default)({
                                        Prism: e.Prism,
                                        codeHighlightExtensionMap: e.codeHighlightExtensionMap || {},
                                        codeBlockClass:
                                            e.codeBlockClass ||
                                            function (e) {
                                                return "v-md-prism-" + e;
                                            },
                                        baseConfig: Object(r.a)({ link: { openLinkIcon: !0 } }, e.baseConfig),
                                    });
                                    return {
                                        previewClass: "vuepress-markdown-body",
                                        extend: function (e) {
                                            t.extend(e);
                                        },
                                        markdownParser: t.markdownParser,
                                    };
                                })({ Prism: n.Prism, baseConfig: s, codeHighlightExtensionMap: a });
                            o && l.extend(o), e.theme(l);
                        };
                    },
                    function (e, t, n) {},
                    function (e, t, n) {
                        "use strict";
                        e.exports = function (e, t, n) {
                            var r = (n = n || {}).marker || ":",
                                i = r.charCodeAt(0),
                                o = r.length,
                                s =
                                    n.validate ||
                                    function (e) {
                                        return e.trim().split(" ", 2)[0] === t;
                                    },
                                a =
                                    n.render ||
                                    function (e, n, r, i, o) {
                                        return 1 === e[n].nesting && e[n].attrJoin("class", t), o.renderToken(e, n, r, i, o);
                                    };
                            e.block.ruler.before(
                                "fence",
                                "container_" + t,
                                function (e, n, a, l) {
                                    var c,
                                        u,
                                        p,
                                        d,
                                        g,
                                        f,
                                        h,
                                        m,
                                        b = !1,
                                        y = e.bMarks[n] + e.tShift[n],
                                        A = e.eMarks[n];
                                    if (i !== e.src.charCodeAt(y)) return !1;
                                    for (c = y + 1; c <= A && r[(c - y) % o] === e.src[c]; c++);
                                    if ((p = Math.floor((c - y) / o)) < 3) return !1;
                                    if (((c -= (c - y) % o), (d = e.src.slice(y, c)), (g = e.src.slice(c, A)), !s(g, d))) return !1;
                                    if (l) return !0;
                                    for (u = n; !(++u >= a || ((y = e.bMarks[u] + e.tShift[u]) < (A = e.eMarks[u]) && e.sCount[u] < e.blkIndent)); )
                                        if (i === e.src.charCodeAt(y) && !(e.sCount[u] - e.blkIndent >= 4)) {
                                            for (c = y + 1; c <= A && r[(c - y) % o] === e.src[c]; c++);
                                            if (!(Math.floor((c - y) / o) < p || ((c -= (c - y) % o), (c = e.skipSpaces(c)) < A))) {
                                                b = !0;
                                                break;
                                            }
                                        }
                                    return (
                                        (h = e.parentType),
                                        (m = e.lineMax),
                                        (e.parentType = "container"),
                                        (e.lineMax = u),
                                        ((f = e.push("container_" + t + "_open", "div", 1)).markup = d),
                                        (f.block = !0),
                                        (f.info = g),
                                        (f.map = [n, u]),
                                        e.md.block.tokenize(e, n + 1, u),
                                        ((f = e.push("container_" + t + "_close", "div", -1)).markup = e.src.slice(y, c)),
                                        (f.block = !0),
                                        (e.parentType = h),
                                        (e.lineMax = m),
                                        (e.line = u + (b ? 1 : 0)),
                                        !0
                                    );
                                },
                                { alt: ["paragraph", "reference", "blockquote", "list"] }
                            ),
                                (e.renderer.rules["container_" + t + "_open"] = a),
                                (e.renderer.rules["container_" + t + "_close"] = a);
                        };
                    },
                    ,
                    ,
                    function (e, t, n) {},
                    function (e, t, n) {},
                    function (e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n(79),
                            i = n(81),
                            o = n.n(i);
                        function s(e) {
                            return "string" == typeof e
                                ? function () {
                                      return e;
                                  }
                                : e;
                        }
                        var a = function (e, t) {
                                var n,
                                    r,
                                    i = t.validate,
                                    a = t.marker,
                                    l = t.render,
                                    c = t.type,
                                    u = t.before,
                                    p = t.after,
                                    d = t.defaultTitle,
                                    g = void 0 === d ? c.toUpperCase() : d,
                                    f = t.blockClass,
                                    h = void 0 === f ? "custom-block" : f;
                                c &&
                                    (l ||
                                        (void 0 !== u && void 0 !== p
                                            ? ((n = s(u)), (r = s(p)))
                                            : ((n = function (e) {
                                                  return '<div class="' + h + " " + c + '">' + (e ? '<p class="' + h + '-title">' + e + "</p>" : "") + "\n";
                                              }),
                                              (r = function () {
                                                  return "</div>\n";
                                              })),
                                        (l = function (e, t) {
                                            var i = e[t],
                                                o = i.info.trim().slice(c.length).trim();
                                            return !o && g && (o = "function" == typeof g ? g() : g), 1 === i.nesting ? n(o) : r(o);
                                        })),
                                    e.use(o.a, c, { render: l, validate: i, marker: a }));
                            },
                            l = function (e) {
                                e.extendMarkdown(function (t) {
                                    var n = function () {
                                        var t = e.lang.config;
                                        return t.langConfig[t.lang];
                                    };
                                    a(t, {
                                        type: "tip",
                                        defaultTitle: function () {
                                            return n().tip.tip.defaultTitle;
                                        },
                                        blockClass: "v-md-plugin-tip",
                                    }),
                                        a(t, {
                                            type: "warning",
                                            defaultTitle: function () {
                                                return n().tip.warning.defaultTitle;
                                            },
                                            blockClass: "v-md-plugin-tip",
                                        }),
                                        a(t, {
                                            type: "danger",
                                            defaultTitle: function () {
                                                return n().tip.danger.defaultTitle;
                                            },
                                            blockClass: "v-md-plugin-tip",
                                        }),
                                        a(t, {
                                            type: "details",
                                            defaultTitle: function () {
                                                return n().tip.details.defaultTitle;
                                            },
                                            before: function (e) {
                                                return '<details class="v-md-plugin-tip details">' + (e ? "<summary>" + e + "</summary>" : "") + "\n";
                                            },
                                            after: function () {
                                                return "</details>\n";
                                            },
                                        });
                                }),
                                    e.lang.add({
                                        "zh-CN": { tip: { tip: { defaultTitle: "提示" }, warning: { defaultTitle: "注意" }, danger: { defaultTitle: "警告" }, details: { defaultTitle: "详细信息" } } },
                                        "en-US": { tip: { tip: { defaultTitle: "TIP" }, warning: { defaultTitle: "WARNING" }, danger: { defaultTitle: "DANGER" }, details: { defaultTitle: "DETAILS" } } },
                                    });
                            };
                        n(80),
                            n(84),
                            n(85),
                            (t.default = {
                                install: function (e, t) {
                                    var n,
                                        i,
                                        o,
                                        s,
                                        a,
                                        c,
                                        u,
                                        p,
                                        d,
                                        g =
                                            ((o = (i = void 0 === n ? {} : n).name),
                                            (s = void 0 === o ? "tip" : o),
                                            (c = void 0 === (a = i.icon) ? "v-md-icon-tip" : a),
                                            (u = i.text),
                                            (p = function (e, t) {
                                                void 0 === t && (t = "tip"),
                                                    e.insert(function (n) {
                                                        var r = n || e.langConfig.tip[t].placeholder;
                                                        return { text: "::: " + t + "\n  " + r + "\n:::", selected: r };
                                                    });
                                            }),
                                            (d = {
                                                title: function (e) {
                                                    return e.langConfig.tip.toolbar;
                                                },
                                                icon: c,
                                                text: u,
                                                menus: [
                                                    {
                                                        name: "tip",
                                                        text: function (e) {
                                                            return e.langConfig.tip.tip.toolbar;
                                                        },
                                                        action: function (e) {
                                                            e.execCommand(s);
                                                        },
                                                    },
                                                    {
                                                        name: "warning",
                                                        text: function (e) {
                                                            return e.langConfig.tip.warning.toolbar;
                                                        },
                                                        action: function (e) {
                                                            e.execCommand(s, "warning");
                                                        },
                                                    },
                                                    {
                                                        name: "danger",
                                                        text: function (e) {
                                                            return e.langConfig.tip.danger.toolbar;
                                                        },
                                                        action: function (e) {
                                                            e.execCommand(s, "danger");
                                                        },
                                                    },
                                                    {
                                                        name: "details",
                                                        text: function (e) {
                                                            return e.langConfig.tip.details.toolbar;
                                                        },
                                                        action: function (e) {
                                                            e.execCommand(s, "details");
                                                        },
                                                    },
                                                ],
                                            }),
                                            {
                                                install: function (e) {
                                                    "v-md-editor" === e.name &&
                                                        (e.command(s, p),
                                                        e.toolbar(s, d),
                                                        e.lang.add({
                                                            "zh-CN": {
                                                                tip: {
                                                                    toolbar: "插入提示",
                                                                    tip: { toolbar: "提示", placeholder: "在此输入内容" },
                                                                    warning: { toolbar: "注意", placeholder: "在此输入内容" },
                                                                    danger: { toolbar: "警告", placeholder: "在此输入内容" },
                                                                    details: { toolbar: "详细信息", placeholder: "内容" },
                                                                },
                                                            },
                                                            "en-US": {
                                                                tip: {
                                                                    toolbar: "Insert tip",
                                                                    tip: { toolbar: "Tip", placeholder: "Insert content" },
                                                                    warning: { toolbar: "Warning", placeholder: "Insert content" },
                                                                    danger: { toolbar: "Danger", placeholder: "Insert content" },
                                                                    details: { toolbar: "Details", placeholder: "Content" },
                                                                },
                                                            },
                                                        })),
                                                        e.vMdParser.use(l);
                                                },
                                            });
                                    e.vMdParser.use(r.default, t), e.use(g);
                                },
                            });
                    },
                ]).default);
        },
        99870: (e, t) => {
            "use strict";
            (t.__esModule = !0),
                (t.default = function (e) {
                    var t = e.renderer.rules.fence;
                    e.renderer.rules.fence = function () {
                        var e = t.apply(void 0, arguments),
                            n =
                                '\n    <button class="v-md-copy-code-btn" type="button">\n      <i>\n        <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n          <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>\n        </svg>\n      </i>\n    </button>',
                            r = e.replace("\x3c!--beforeend--\x3e", n + "\x3c!--beforeend--\x3e").replace("v-md-pre-wrapper", "v-md-pre-wrapper copy-code-mode");
                        return r;
                    };
                });
        },
        69969: (e, t) => {
            "use strict";
            function n(e, t) {
                var n,
                    r,
                    i = e.posMax,
                    o = !0,
                    s = !0;
                return (n = t > 0 ? e.src.charCodeAt(t - 1) : -1), (r = t + 1 <= i ? e.src.charCodeAt(t + 1) : -1), (32 === n || 9 === n || (r >= 48 && r <= 57)) && (s = !1), (32 !== r && 9 !== r) || (o = !1), { can_open: o, can_close: s };
            }
            function r(e, t) {
                var r, i, o, s;
                if ("$" !== e.src[e.pos]) return !1;
                if (!n(e, e.pos).can_open) return t || (e.pending += "$"), (e.pos += 1), !0;
                for (i = r = e.pos + 1; -1 !== (i = e.src.indexOf("$", i)); ) {
                    for (s = i - 1; "\\" === e.src[s]; ) s -= 1;
                    if ((i - s) % 2 == 1) break;
                    i += 1;
                }
                return -1 === i
                    ? (t || (e.pending += "$"), (e.pos = r), !0)
                    : i - r == 0
                    ? (t || (e.pending += "$$"), (e.pos = r + 1), !0)
                    : n(e, i).can_close
                    ? (t || (((o = e.push("math_inline", "math", 0)).markup = "$"), (o.content = e.src.slice(r, i))), (e.pos = i + 1), !0)
                    : (t || (e.pending += "$"), (e.pos = r), !0);
            }
            function i(e, t, n, r) {
                var i,
                    o,
                    s,
                    a,
                    l,
                    c = !1,
                    u = e.bMarks[t] + e.tShift[t],
                    p = e.eMarks[t];
                if (u + 2 > p) return !1;
                if ("$$" !== e.src.slice(u, u + 2)) return !1;
                if (((u += 2), (i = e.src.slice(u, p)), r)) return !0;
                for ("$$" === i.trim().slice(-2) && ((i = i.trim().slice(0, -2)), (c = !0)), s = t; !c && !(++s >= n) && !((u = e.bMarks[s] + e.tShift[s]) < (p = e.eMarks[s]) && e.tShift[s] < e.blkIndent); )
                    "$$" === e.src.slice(u, p).trim().slice(-2) && ((a = e.src.slice(0, p).lastIndexOf("$$")), (o = e.src.slice(u, a)), (c = !0));
                return (
                    (e.line = s + 1),
                    ((l = e.push("math_block", "math", 0)).block = !0),
                    (l.content = (i && i.trim() ? i + "\n" : "") + e.getLines(t + 1, s, e.tShift[t], !0) + (o && o.trim() ? o : "")),
                    (l.map = [t, e.line]),
                    (l.markup = "$$"),
                    !0
                );
            }
            (t.__esModule = !0),
                (t.default = function (e, t) {
                    var n = (t = t || {}).katex;
                    e.inline.ruler.after("escape", "math_inline", r),
                        e.block.ruler.after("blockquote", "math_block", i, { alt: ["paragraph", "reference", "blockquote", "list"] }),
                        (e.renderer.rules.math_inline = function (e, r) {
                            return (function (e) {
                                t.displayMode = !1;
                                try {
                                    return n.renderToString(e, t);
                                } catch (n) {
                                    return t.throwOnError, e;
                                }
                            })(e[r].content);
                        }),
                        (e.renderer.rules.math_block = function (e, r) {
                            return (
                                (function (e) {
                                    t.displayMode = !0;
                                    try {
                                        return "<p>" + n.renderToString(e, t) + "</p>";
                                    } catch (n) {
                                        return t.throwOnError, e;
                                    }
                                })(e[r].content) + "\n"
                            );
                        });
                });
        },
        92370: (e, t, n) => {
            "use strict";
            n.r(t),
                n.d(t, {
                    BASE_TRANSITION: () => p,
                    CAMELIZE: () => z,
                    CAPITALIZE: () => j,
                    CREATE_BLOCK: () => g,
                    CREATE_COMMENT: () => b,
                    CREATE_ELEMENT_BLOCK: () => f,
                    CREATE_ELEMENT_VNODE: () => m,
                    CREATE_SLOTS: () => I,
                    CREATE_STATIC: () => A,
                    CREATE_TEXT: () => y,
                    CREATE_VNODE: () => h,
                    DOMDirectiveTransforms: () => Er,
                    DOMNodeTransforms: () => kr,
                    FRAGMENT: () => a,
                    GUARD_REACTIVE_PROPS: () => O,
                    IS_MEMO_SAME: () => H,
                    IS_REF: () => Z,
                    KEEP_ALIVE: () => u,
                    MERGE_PROPS: () => _,
                    NORMALIZE_CLASS: () => N,
                    NORMALIZE_PROPS: () => S,
                    NORMALIZE_STYLE: () => T,
                    OPEN_BLOCK: () => d,
                    POP_SCOPE_ID: () => B,
                    PUSH_SCOPE_ID: () => F,
                    RENDER_LIST: () => M,
                    RENDER_SLOT: () => C,
                    RESOLVE_COMPONENT: () => x,
                    RESOLVE_DIRECTIVE: () => w,
                    RESOLVE_DYNAMIC_COMPONENT: () => v,
                    RESOLVE_FILTER: () => k,
                    SET_BLOCK_TRACKING: () => P,
                    SUSPENSE: () => c,
                    TELEPORT: () => l,
                    TO_DISPLAY_STRING: () => D,
                    TO_HANDLERS: () => L,
                    TO_HANDLER_KEY: () => R,
                    TRANSITION: () => cr,
                    TRANSITION_GROUP: () => ur,
                    UNREF: () => q,
                    V_MODEL_CHECKBOX: () => nr,
                    V_MODEL_DYNAMIC: () => or,
                    V_MODEL_RADIO: () => tr,
                    V_MODEL_SELECT: () => ir,
                    V_MODEL_TEXT: () => rr,
                    V_ON_WITH_KEYS: () => ar,
                    V_ON_WITH_MODIFIERS: () => sr,
                    V_SHOW: () => lr,
                    WITH_CTX: () => U,
                    WITH_DIRECTIVES: () => E,
                    WITH_MEMO: () => Q,
                    advancePositionWithClone: () => Me,
                    advancePositionWithMutation: () => Ce,
                    assert: () => Ie,
                    baseCompile: () => Xn,
                    baseParse: () => Xe,
                    buildDirectiveArgs: () => Nn,
                    buildProps: () => In,
                    buildSlots: () => xn,
                    checkCompatEnabled: () => Ye,
                    compile: () => Mr,
                    createArrayExpression: () => K,
                    createAssignmentExpression: () => ue,
                    createBlockStatement: () => ae,
                    createCacheExpression: () => se,
                    createCallExpression: () => re,
                    createCompilerError: () => s,
                    createCompoundExpression: () => ne,
                    createConditionalExpression: () => oe,
                    createDOMCompilerError: () => mr,
                    createForLoopParams: () => hn,
                    createFunctionExpression: () => ie,
                    createIfStatement: () => ce,
                    createInterpolation: () => te,
                    createObjectExpression: () => J,
                    createObjectProperty: () => X,
                    createReturnStatement: () => de,
                    createRoot: () => V,
                    createSequenceExpression: () => pe,
                    createSimpleExpression: () => ee,
                    createStructuralDirectiveTransform: () => zt,
                    createTemplateLiteral: () => le,
                    createTransformContext: () => St,
                    createVNodeCall: () => W,
                    extractIdentifiers: () => Wt,
                    findDir: () => De,
                    findProp: () => _e,
                    generate: () => Rt,
                    generateCodeFrame: () => r.generateCodeFrame,
                    getBaseTransformPreset: () => Jn,
                    getInnerRange: () => Ee,
                    getMemoedVNodeCall: () => Ze,
                    getVNodeBlockHelper: () => Re,
                    getVNodeHelper: () => je,
                    hasDynamicKeyVBind: () => Te,
                    hasScopeRef: () => qe,
                    helperNameMap: () => $,
                    injectProp: () => Be,
                    isBuiltInType: () => fe,
                    isCoreComponent: () => he,
                    isFunctionType: () => Kt,
                    isInDestructureAssignment: () => Gt,
                    isMemberExpression: () => ke,
                    isMemberExpressionBrowser: () => ve,
                    isMemberExpressionNode: () => we,
                    isReferencedIdentifier: () => $t,
                    isSimpleIdentifier: () => be,
                    isSlotOutlet: () => ze,
                    isStaticArgOf: () => Ne,
                    isStaticExp: () => ge,
                    isStaticProperty: () => Jt,
                    isStaticPropertyKey: () => Xt,
                    isTemplateNode: () => Le,
                    isText: () => Se,
                    isVSlot: () => Oe,
                    locStub: () => Y,
                    makeBlock: () => Qe,
                    noopDirectiveTransform: () => er,
                    parse: () => Cr,
                    parserOptions: () => gr,
                    processExpression: () => tn,
                    processFor: () => cn,
                    processIf: () => rn,
                    processSlotOutlet: () => zn,
                    registerRuntimeHelpers: () => G,
                    resolveComponentType: () => Cn,
                    toValidAssetId: () => Ue,
                    trackSlotScopes: () => bn,
                    trackVForSlotScopes: () => yn,
                    transform: () => Ot,
                    transformBind: () => Pn,
                    transformElement: () => Mn,
                    transformExpression: () => en,
                    transformModel: () => Zn,
                    transformOn: () => Rn,
                    transformStyle: () => fr,
                    traverseNode: () => Lt,
                    walkBlockDeclarations: () => Vt,
                    walkFunctionParams: () => Yt,
                    walkIdentifiers: () => Ht,
                    warnDeprecation: () => Ve,
                });
            var r = n(94209);
            function i(e) {
                throw e;
            }
            function o(e) {}
            function s(e, t, n, r) {
                const i = new SyntaxError(String(e));
                return (i.code = e), (i.loc = t), i;
            }
            const a = Symbol(""),
                l = Symbol(""),
                c = Symbol(""),
                u = Symbol(""),
                p = Symbol(""),
                d = Symbol(""),
                g = Symbol(""),
                f = Symbol(""),
                h = Symbol(""),
                m = Symbol(""),
                b = Symbol(""),
                y = Symbol(""),
                A = Symbol(""),
                x = Symbol(""),
                v = Symbol(""),
                w = Symbol(""),
                k = Symbol(""),
                E = Symbol(""),
                M = Symbol(""),
                C = Symbol(""),
                I = Symbol(""),
                D = Symbol(""),
                _ = Symbol(""),
                N = Symbol(""),
                T = Symbol(""),
                S = Symbol(""),
                O = Symbol(""),
                L = Symbol(""),
                z = Symbol(""),
                j = Symbol(""),
                R = Symbol(""),
                P = Symbol(""),
                F = Symbol(""),
                B = Symbol(""),
                U = Symbol(""),
                q = Symbol(""),
                Z = Symbol(""),
                Q = Symbol(""),
                H = Symbol(""),
                $ = {
                    [a]: "Fragment",
                    [l]: "Teleport",
                    [c]: "Suspense",
                    [u]: "KeepAlive",
                    [p]: "BaseTransition",
                    [d]: "openBlock",
                    [g]: "createBlock",
                    [f]: "createElementBlock",
                    [h]: "createVNode",
                    [m]: "createElementVNode",
                    [b]: "createCommentVNode",
                    [y]: "createTextVNode",
                    [A]: "createStaticVNode",
                    [x]: "resolveComponent",
                    [v]: "resolveDynamicComponent",
                    [w]: "resolveDirective",
                    [k]: "resolveFilter",
                    [E]: "withDirectives",
                    [M]: "renderList",
                    [C]: "renderSlot",
                    [I]: "createSlots",
                    [D]: "toDisplayString",
                    [_]: "mergeProps",
                    [N]: "normalizeClass",
                    [T]: "normalizeStyle",
                    [S]: "normalizeProps",
                    [O]: "guardReactiveProps",
                    [L]: "toHandlers",
                    [z]: "camelize",
                    [j]: "capitalize",
                    [R]: "toHandlerKey",
                    [P]: "setBlockTracking",
                    [F]: "pushScopeId",
                    [B]: "popScopeId",
                    [U]: "withCtx",
                    [q]: "unref",
                    [Z]: "isRef",
                    [Q]: "withMemo",
                    [H]: "isMemoSame",
                };
            function G(e) {
                Object.getOwnPropertySymbols(e).forEach((t) => {
                    $[t] = e[t];
                });
            }
            const Y = { source: "", start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 } };
            function V(e, t = Y) {
                return { type: 0, children: e, helpers: [], components: [], directives: [], hoists: [], imports: [], cached: 0, temps: 0, codegenNode: void 0, loc: t };
            }
            function W(e, t, n, r, i, o, s, a = !1, l = !1, c = !1, u = Y) {
                return (
                    e && (a ? (e.helper(d), e.helper(Re(e.inSSR, c))) : e.helper(je(e.inSSR, c)), s && e.helper(E)),
                    { type: 13, tag: t, props: n, children: r, patchFlag: i, dynamicProps: o, directives: s, isBlock: a, disableTracking: l, isComponent: c, loc: u }
                );
            }
            function K(e, t = Y) {
                return { type: 17, loc: t, elements: e };
            }
            function J(e, t = Y) {
                return { type: 15, loc: t, properties: e };
            }
            function X(e, t) {
                return { type: 16, loc: Y, key: (0, r.isString)(e) ? ee(e, !0) : e, value: t };
            }
            function ee(e, t = !1, n = Y, r = 0) {
                return { type: 4, loc: n, content: e, isStatic: t, constType: t ? 3 : r };
            }
            function te(e, t) {
                return { type: 5, loc: t, content: (0, r.isString)(e) ? ee(e, !1, t) : e };
            }
            function ne(e, t = Y) {
                return { type: 8, loc: t, children: e };
            }
            function re(e, t = [], n = Y) {
                return { type: 14, loc: n, callee: e, arguments: t };
            }
            function ie(e, t, n = !1, r = !1, i = Y) {
                return { type: 18, params: e, returns: t, newline: n, isSlot: r, loc: i };
            }
            function oe(e, t, n, r = !0) {
                return { type: 19, test: e, consequent: t, alternate: n, newline: r, loc: Y };
            }
            function se(e, t, n = !1) {
                return { type: 20, index: e, value: t, isVNode: n, loc: Y };
            }
            function ae(e) {
                return { type: 21, body: e, loc: Y };
            }
            function le(e) {
                return { type: 22, elements: e, loc: Y };
            }
            function ce(e, t, n) {
                return { type: 23, test: e, consequent: t, alternate: n, loc: Y };
            }
            function ue(e, t) {
                return { type: 24, left: e, right: t, loc: Y };
            }
            function pe(e) {
                return { type: 25, expressions: e, loc: Y };
            }
            function de(e) {
                return { type: 26, returns: e, loc: Y };
            }
            const ge = (e) => 4 === e.type && e.isStatic,
                fe = (e, t) => e === t || e === (0, r.hyphenate)(t);
            function he(e) {
                return fe(e, "Teleport") ? l : fe(e, "Suspense") ? c : fe(e, "KeepAlive") ? u : fe(e, "BaseTransition") ? p : void 0;
            }
            const me = /^\d|[^\$\w]/,
                be = (e) => !me.test(e),
                ye = /[A-Za-z_$\xA0-\uFFFF]/,
                Ae = /[\.\?\w$\xA0-\uFFFF]/,
                xe = /\s+[.[]\s*|\s*[.[]\s+/g,
                ve = (e) => {
                    e = e.trim().replace(xe, (e) => e.trim());
                    let t = 0,
                        n = [],
                        r = 0,
                        i = 0,
                        o = null;
                    for (let s = 0; s < e.length; s++) {
                        const a = e.charAt(s);
                        switch (t) {
                            case 0:
                                if ("[" === a) n.push(t), (t = 1), r++;
                                else if ("(" === a) n.push(t), (t = 2), i++;
                                else if (!(0 === s ? ye : Ae).test(a)) return !1;
                                break;
                            case 1:
                                "'" === a || '"' === a || "`" === a ? (n.push(t), (t = 3), (o = a)) : "[" === a ? r++ : "]" === a && (--r || (t = n.pop()));
                                break;
                            case 2:
                                if ("'" === a || '"' === a || "`" === a) n.push(t), (t = 3), (o = a);
                                else if ("(" === a) i++;
                                else if (")" === a) {
                                    if (s === e.length - 1) return !1;
                                    --i || (t = n.pop());
                                }
                                break;
                            case 3:
                                a === o && ((t = n.pop()), (o = null));
                        }
                    }
                    return !r && !i;
                },
                we = r.NOOP,
                ke = ve;
            function Ee(e, t, n) {
                const r = { source: e.source.slice(t, t + n), start: Me(e.start, e.source, t), end: e.end };
                return null != n && (r.end = Me(e.start, e.source, t + n)), r;
            }
            function Me(e, t, n = t.length) {
                return Ce((0, r.extend)({}, e), t, n);
            }
            function Ce(e, t, n = t.length) {
                let r = 0,
                    i = -1;
                for (let e = 0; e < n; e++) 10 === t.charCodeAt(e) && (r++, (i = e));
                return (e.offset += n), (e.line += r), (e.column = -1 === i ? e.column + n : n - i), e;
            }
            function Ie(e, t) {
                if (!e) throw new Error(t || "unexpected compiler condition");
            }
            function De(e, t, n = !1) {
                for (let i = 0; i < e.props.length; i++) {
                    const o = e.props[i];
                    if (7 === o.type && (n || o.exp) && ((0, r.isString)(t) ? o.name === t : t.test(o.name))) return o;
                }
            }
            function _e(e, t, n = !1, r = !1) {
                for (let i = 0; i < e.props.length; i++) {
                    const o = e.props[i];
                    if (6 === o.type) {
                        if (n) continue;
                        if (o.name === t && (o.value || r)) return o;
                    } else if ("bind" === o.name && (o.exp || r) && Ne(o.arg, t)) return o;
                }
            }
            function Ne(e, t) {
                return !(!e || !ge(e) || e.content !== t);
            }
            function Te(e) {
                return e.props.some((e) => !(7 !== e.type || "bind" !== e.name || (e.arg && 4 === e.arg.type && e.arg.isStatic)));
            }
            function Se(e) {
                return 5 === e.type || 2 === e.type;
            }
            function Oe(e) {
                return 7 === e.type && "slot" === e.name;
            }
            function Le(e) {
                return 1 === e.type && 3 === e.tagType;
            }
            function ze(e) {
                return 1 === e.type && 2 === e.tagType;
            }
            function je(e, t) {
                return e || t ? h : m;
            }
            function Re(e, t) {
                return e || t ? g : f;
            }
            const Pe = new Set([S, O]);
            function Fe(e, t = []) {
                if (e && !(0, r.isString)(e) && 14 === e.type) {
                    const n = e.callee;
                    if (!(0, r.isString)(n) && Pe.has(n)) return Fe(e.arguments[0], t.concat(e));
                }
                return [e, t];
            }
            function Be(e, t, n) {
                let i,
                    o,
                    s = 13 === e.type ? e.props : e.arguments[2],
                    a = [];
                if (s && !(0, r.isString)(s) && 14 === s.type) {
                    const e = Fe(s);
                    (s = e[0]), (a = e[1]), (o = a[a.length - 1]);
                }
                if (null == s || (0, r.isString)(s)) i = J([t]);
                else if (14 === s.type) {
                    const e = s.arguments[0];
                    (0, r.isString)(e) || 15 !== e.type ? (s.callee === L ? (i = re(n.helper(_), [J([t]), s])) : s.arguments.unshift(J([t]))) : e.properties.unshift(t), !i && (i = s);
                } else if (15 === s.type) {
                    let e = !1;
                    if (4 === t.key.type) {
                        const n = t.key.content;
                        e = s.properties.some((e) => 4 === e.key.type && e.key.content === n);
                    }
                    e || s.properties.unshift(t), (i = s);
                } else (i = re(n.helper(_), [J([t]), s])), o && o.callee === O && (o = a[a.length - 2]);
                13 === e.type ? (o ? (o.arguments[0] = i) : (e.props = i)) : o ? (o.arguments[0] = i) : (e.arguments[2] = i);
            }
            function Ue(e, t) {
                return `_${t}_${e.replace(/[^\w]/g, (t, n) => ("-" === t ? "_" : e.charCodeAt(n).toString()))}`;
            }
            function qe(e, t) {
                if (!e || 0 === Object.keys(t).length) return !1;
                switch (e.type) {
                    case 1:
                        for (let n = 0; n < e.props.length; n++) {
                            const r = e.props[n];
                            if (7 === r.type && (qe(r.arg, t) || qe(r.exp, t))) return !0;
                        }
                        return e.children.some((e) => qe(e, t));
                    case 11:
                        return !!qe(e.source, t) || e.children.some((e) => qe(e, t));
                    case 9:
                        return e.branches.some((e) => qe(e, t));
                    case 10:
                        return !!qe(e.condition, t) || e.children.some((e) => qe(e, t));
                    case 4:
                        return !e.isStatic && be(e.content) && !!t[e.content];
                    case 8:
                        return e.children.some((e) => (0, r.isObject)(e) && qe(e, t));
                    case 5:
                    case 12:
                        return qe(e.content, t);
                    default:
                        return !1;
                }
            }
            function Ze(e) {
                return 14 === e.type && e.callee === Q ? e.arguments[1].returns : e;
            }
            function Qe(e, { helper: t, removeHelper: n, inSSR: r }) {
                e.isBlock || ((e.isBlock = !0), n(je(r, e.isComponent)), t(d), t(Re(r, e.isComponent)));
            }
            const He = {
                COMPILER_IS_ON_ELEMENT: {
                    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
                    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",
                },
                COMPILER_V_BIND_SYNC: {
                    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
                    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html",
                },
                COMPILER_V_BIND_PROP: { message: ".prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate." },
                COMPILER_V_BIND_OBJECT_ORDER: {
                    message:
                        'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
                    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html",
                },
                COMPILER_V_ON_NATIVE: { message: ".native modifier for v-on has been removed as is no longer necessary.", link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html" },
                COMPILER_V_IF_V_FOR_PRECEDENCE: {
                    message:
                        "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
                    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",
                },
                COMPILER_NATIVE_TEMPLATE: { message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3." },
                COMPILER_INLINE_TEMPLATE: { message: '"inline-template" has been removed in Vue 3.', link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html" },
                COMPILER_FILTER: {
                    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
                    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html",
                },
            };
            function $e(e, t) {
                const n = t.options ? t.options.compatConfig : t.compatConfig,
                    r = n && n[e];
                return "MODE" === e ? r || 3 : r;
            }
            function Ge(e, t) {
                const n = $e("MODE", t),
                    r = $e(e, t);
                return 3 === n ? !0 === r : !1 !== r;
            }
            function Ye(e, t, n, ...r) {
                return Ge(e, t);
            }
            function Ve(e, t, n, ...r) {
                if ("suppress-warning" === $e(e, t)) return;
                const { message: i, link: o } = He[e],
                    s = `(deprecation ${e}) ${"function" == typeof i ? i(...r) : i}${o ? `\n  Details: ${o}` : ""}`,
                    a = new SyntaxError(s);
                (a.code = e), n && (a.loc = n), t.onWarn(a);
            }
            const We = /&(gt|lt|amp|apos|quot);/g,
                Ke = { gt: ">", lt: "<", amp: "&", apos: "'", quot: '"' },
                Je = {
                    delimiters: ["{{", "}}"],
                    getNamespace: () => 0,
                    getTextMode: () => 0,
                    isVoidTag: r.NO,
                    isPreTag: r.NO,
                    isCustomElement: r.NO,
                    decodeEntities: (e) => e.replace(We, (e, t) => Ke[t]),
                    onError: i,
                    onWarn: o,
                    comments: !1,
                };
            function Xe(e, t = {}) {
                const n = (function (e, t) {
                        const n = (0, r.extend)({}, Je);
                        let i;
                        for (i in t) n[i] = void 0 === t[i] ? Je[i] : t[i];
                        return { options: n, column: 1, line: 1, offset: 0, originalSource: e, source: e, inPre: !1, inVPre: !1, onWarn: n.onWarn };
                    })(e, t),
                    i = gt(n);
                return V(et(n, 0, []), ft(n, i));
            }
            function et(e, t, n) {
                const i = ht(n),
                    o = i ? i.ns : 0,
                    s = [];
                for (; !vt(e, t, n); ) {
                    const a = e.source;
                    let l;
                    if (0 === t || 1 === t)
                        if (!e.inVPre && mt(a, e.options.delimiters[0])) l = ut(e, t);
                        else if (0 === t && "<" === a[0])
                            if (1 === a.length) xt(e, 5, 1);
                            else if ("!" === a[1]) mt(a, "\x3c!--") ? (l = rt(e)) : mt(a, "<!DOCTYPE") ? (l = it(e)) : mt(a, "<![CDATA[") ? (0 !== o ? (l = nt(e, n)) : (xt(e, 1), (l = it(e)))) : (xt(e, 11), (l = it(e)));
                            else if ("/" === a[1])
                                if (2 === a.length) xt(e, 5, 2);
                                else {
                                    if (">" === a[2]) {
                                        xt(e, 14, 2), bt(e, 3);
                                        continue;
                                    }
                                    if (/[a-z]/i.test(a[2])) {
                                        xt(e, 23), at(e, 1, i);
                                        continue;
                                    }
                                    xt(e, 12, 2), (l = it(e));
                                }
                            else
                                /[a-z]/i.test(a[1])
                                    ? ((l = ot(e, n)), Ge("COMPILER_NATIVE_TEMPLATE", e) && l && "template" === l.tag && !l.props.some((e) => 7 === e.type && st(e.name)) && (l = l.children))
                                    : "?" === a[1]
                                    ? (xt(e, 21, 1), (l = it(e)))
                                    : xt(e, 12, 1);
                    if ((l || (l = pt(e, t)), (0, r.isArray)(l))) for (let e = 0; e < l.length; e++) tt(s, l[e]);
                    else tt(s, l);
                }
                let a = !1;
                if (2 !== t && 1 !== t) {
                    const t = "preserve" !== e.options.whitespace;
                    for (let n = 0; n < s.length; n++) {
                        const r = s[n];
                        if (e.inPre || 2 !== r.type) 3 !== r.type || e.options.comments || ((a = !0), (s[n] = null));
                        else if (/[^\t\r\n\f ]/.test(r.content)) t && (r.content = r.content.replace(/[\t\r\n\f ]+/g, " "));
                        else {
                            const e = s[n - 1],
                                i = s[n + 1];
                            !e || !i || (t && (3 === e.type || 3 === i.type || (1 === e.type && 1 === i.type && /[\r\n]/.test(r.content)))) ? ((a = !0), (s[n] = null)) : (r.content = " ");
                        }
                    }
                    if (e.inPre && i && e.options.isPreTag(i.tag)) {
                        const e = s[0];
                        e && 2 === e.type && (e.content = e.content.replace(/^\r?\n/, ""));
                    }
                }
                return a ? s.filter(Boolean) : s;
            }
            function tt(e, t) {
                if (2 === t.type) {
                    const n = ht(e);
                    if (n && 2 === n.type && n.loc.end.offset === t.loc.start.offset) return (n.content += t.content), (n.loc.end = t.loc.end), void (n.loc.source += t.loc.source);
                }
                e.push(t);
            }
            function nt(e, t) {
                bt(e, 9);
                const n = et(e, 3, t);
                return 0 === e.source.length ? xt(e, 6) : bt(e, 3), n;
            }
            function rt(e) {
                const t = gt(e);
                let n;
                const r = /--(\!)?>/.exec(e.source);
                if (r) {
                    r.index <= 3 && xt(e, 0), r[1] && xt(e, 10), (n = e.source.slice(4, r.index));
                    const t = e.source.slice(0, r.index);
                    let i = 1,
                        o = 0;
                    for (; -1 !== (o = t.indexOf("\x3c!--", i)); ) bt(e, o - i + 1), o + 4 < t.length && xt(e, 16), (i = o + 1);
                    bt(e, r.index + r[0].length - i + 1);
                } else (n = e.source.slice(4)), bt(e, e.source.length), xt(e, 7);
                return { type: 3, content: n, loc: ft(e, t) };
            }
            function it(e) {
                const t = gt(e),
                    n = "?" === e.source[1] ? 1 : 2;
                let r;
                const i = e.source.indexOf(">");
                return -1 === i ? ((r = e.source.slice(n)), bt(e, e.source.length)) : ((r = e.source.slice(n, i)), bt(e, i + 1)), { type: 3, content: r, loc: ft(e, t) };
            }
            function ot(e, t) {
                const n = e.inPre,
                    r = e.inVPre,
                    i = ht(t),
                    o = at(e, 0, i),
                    s = e.inPre && !n,
                    a = e.inVPre && !r;
                if (o.isSelfClosing || e.options.isVoidTag(o.tag)) return s && (e.inPre = !1), a && (e.inVPre = !1), o;
                t.push(o);
                const l = e.options.getTextMode(o, i),
                    c = et(e, l, t);
                t.pop();
                {
                    const t = o.props.find((e) => 6 === e.type && "inline-template" === e.name);
                    if (t && Ye("COMPILER_INLINE_TEMPLATE", e, t.loc)) {
                        const n = ft(e, o.loc.end);
                        t.value = { type: 2, content: n.source, loc: n };
                    }
                }
                if (((o.children = c), wt(e.source, o.tag))) at(e, 1, i);
                else if ((xt(e, 24, 0, o.loc.start), 0 === e.source.length && "script" === o.tag.toLowerCase())) {
                    const t = c[0];
                    t && mt(t.loc.source, "\x3c!--") && xt(e, 8);
                }
                return (o.loc = ft(e, o.loc.start)), s && (e.inPre = !1), a && (e.inVPre = !1), o;
            }
            const st = (0, r.makeMap)("if,else,else-if,for,slot");
            function at(e, t, n) {
                const i = gt(e),
                    o = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),
                    s = o[1],
                    a = e.options.getNamespace(s, n);
                bt(e, o[0].length), yt(e);
                const l = gt(e),
                    c = e.source;
                e.options.isPreTag(s) && (e.inPre = !0);
                let u = lt(e, t);
                0 === t && !e.inVPre && u.some((e) => 7 === e.type && "pre" === e.name) && ((e.inVPre = !0), (0, r.extend)(e, l), (e.source = c), (u = lt(e, t).filter((e) => "v-pre" !== e.name)));
                let p = !1;
                if ((0 === e.source.length ? xt(e, 9) : ((p = mt(e.source, "/>")), 1 === t && p && xt(e, 4), bt(e, p ? 2 : 1)), 1 === t)) return;
                let d = 0;
                return (
                    e.inVPre ||
                        ("slot" === s
                            ? (d = 2)
                            : "template" === s
                            ? u.some((e) => 7 === e.type && st(e.name)) && (d = 3)
                            : (function (e, t, n) {
                                  const r = n.options;
                                  if (r.isCustomElement(e)) return !1;
                                  if ("component" === e || /^[A-Z]/.test(e) || he(e) || (r.isBuiltInComponent && r.isBuiltInComponent(e)) || (r.isNativeTag && !r.isNativeTag(e))) return !0;
                                  for (let e = 0; e < t.length; e++) {
                                      const r = t[e];
                                      if (6 === r.type) {
                                          if ("is" === r.name && r.value) {
                                              if (r.value.content.startsWith("vue:")) return !0;
                                              if (Ye("COMPILER_IS_ON_ELEMENT", n, r.loc)) return !0;
                                          }
                                      } else {
                                          if ("is" === r.name) return !0;
                                          if ("bind" === r.name && Ne(r.arg, "is") && Ye("COMPILER_IS_ON_ELEMENT", n, r.loc)) return !0;
                                      }
                                  }
                              })(s, u, e) && (d = 1)),
                    { type: 1, ns: a, tag: s, tagType: d, props: u, isSelfClosing: p, children: [], loc: ft(e, i), codegenNode: void 0 }
                );
            }
            function lt(e, t) {
                const n = [],
                    r = new Set();
                for (; e.source.length > 0 && !mt(e.source, ">") && !mt(e.source, "/>"); ) {
                    if (mt(e.source, "/")) {
                        xt(e, 22), bt(e, 1), yt(e);
                        continue;
                    }
                    1 === t && xt(e, 3);
                    const i = ct(e, r);
                    6 === i.type && i.value && "class" === i.name && (i.value.content = i.value.content.replace(/\s+/g, " ").trim()), 0 === t && n.push(i), /^[^\t\r\n\f />]/.test(e.source) && xt(e, 15), yt(e);
                }
                return n;
            }
            function ct(e, t) {
                const n = gt(e),
                    r = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];
                t.has(r) && xt(e, 2), t.add(r), "=" === r[0] && xt(e, 19);
                {
                    const t = /["'<]/g;
                    let n;
                    for (; (n = t.exec(r)); ) xt(e, 17, n.index);
                }
                let i;
                bt(e, r.length),
                    /^[\t\r\n\f ]*=/.test(e.source) &&
                        (yt(e),
                        bt(e, 1),
                        yt(e),
                        (i = (function (e) {
                            const t = gt(e);
                            let n;
                            const r = e.source[0],
                                i = '"' === r || "'" === r;
                            if (i) {
                                bt(e, 1);
                                const t = e.source.indexOf(r);
                                -1 === t ? (n = dt(e, e.source.length, 4)) : ((n = dt(e, t, 4)), bt(e, 1));
                            } else {
                                const t = /^[^\t\r\n\f >]+/.exec(e.source);
                                if (!t) return;
                                const r = /["'<=`]/g;
                                let i;
                                for (; (i = r.exec(t[0])); ) xt(e, 18, i.index);
                                n = dt(e, t[0].length, 4);
                            }
                            return { content: n, isQuoted: i, loc: ft(e, t) };
                        })(e)),
                        i || xt(e, 13));
                const o = ft(e, n);
                if (!e.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(r)) {
                    const t = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(r);
                    let s,
                        a = mt(r, "."),
                        l = t[1] || (a || mt(r, ":") ? "bind" : mt(r, "@") ? "on" : "slot");
                    if (t[2]) {
                        const i = "slot" === l,
                            o = r.lastIndexOf(t[2]),
                            a = ft(e, At(e, n, o), At(e, n, o + t[2].length + ((i && t[3]) || "").length));
                        let c = t[2],
                            u = !0;
                        c.startsWith("[") ? ((u = !1), c.endsWith("]") ? (c = c.slice(1, c.length - 1)) : (xt(e, 27), (c = c.slice(1)))) : i && (c += t[3] || ""), (s = { type: 4, content: c, isStatic: u, constType: u ? 3 : 0, loc: a });
                    }
                    if (i && i.isQuoted) {
                        const e = i.loc;
                        e.start.offset++, e.start.column++, (e.end = Me(e.start, i.content)), (e.source = e.source.slice(1, -1));
                    }
                    const c = t[3] ? t[3].slice(1).split(".") : [];
                    return (
                        a && c.push("prop"),
                        "bind" === l && s && c.includes("sync") && Ye("COMPILER_V_BIND_SYNC", e, 0, s.loc.source) && ((l = "model"), c.splice(c.indexOf("sync"), 1)),
                        { type: 7, name: l, exp: i && { type: 4, content: i.content, isStatic: !1, constType: 0, loc: i.loc }, arg: s, modifiers: c, loc: o }
                    );
                }
                return !e.inVPre && mt(r, "v-") && xt(e, 26), { type: 6, name: r, value: i && { type: 2, content: i.content, loc: i.loc }, loc: o };
            }
            function ut(e, t) {
                const [n, r] = e.options.delimiters,
                    i = e.source.indexOf(r, n.length);
                if (-1 === i) return void xt(e, 25);
                const o = gt(e);
                bt(e, n.length);
                const s = gt(e),
                    a = gt(e),
                    l = i - n.length,
                    c = e.source.slice(0, l),
                    u = dt(e, l, t),
                    p = u.trim(),
                    d = u.indexOf(p);
                d > 0 && Ce(s, c, d);
                return Ce(a, c, l - (u.length - p.length - d)), bt(e, r.length), { type: 5, content: { type: 4, isStatic: !1, constType: 0, content: p, loc: ft(e, s, a) }, loc: ft(e, o) };
            }
            function pt(e, t) {
                const n = 3 === t ? ["]]>"] : ["<", e.options.delimiters[0]];
                let r = e.source.length;
                for (let t = 0; t < n.length; t++) {
                    const i = e.source.indexOf(n[t], 1);
                    -1 !== i && r > i && (r = i);
                }
                const i = gt(e);
                return { type: 2, content: dt(e, r, t), loc: ft(e, i) };
            }
            function dt(e, t, n) {
                const r = e.source.slice(0, t);
                return bt(e, t), 2 !== n && 3 !== n && r.includes("&") ? e.options.decodeEntities(r, 4 === n) : r;
            }
            function gt(e) {
                const { column: t, line: n, offset: r } = e;
                return { column: t, line: n, offset: r };
            }
            function ft(e, t, n) {
                return { start: t, end: (n = n || gt(e)), source: e.originalSource.slice(t.offset, n.offset) };
            }
            function ht(e) {
                return e[e.length - 1];
            }
            function mt(e, t) {
                return e.startsWith(t);
            }
            function bt(e, t) {
                const { source: n } = e;
                Ce(e, n, t), (e.source = n.slice(t));
            }
            function yt(e) {
                const t = /^[\t\r\n\f ]+/.exec(e.source);
                t && bt(e, t[0].length);
            }
            function At(e, t, n) {
                return Me(t, e.originalSource.slice(t.offset, n), n);
            }
            function xt(e, t, n, r = gt(e)) {
                n && ((r.offset += n), (r.column += n)), e.options.onError(s(t, { start: r, end: r, source: "" }));
            }
            function vt(e, t, n) {
                const r = e.source;
                switch (t) {
                    case 0:
                        if (mt(r, "</")) for (let e = n.length - 1; e >= 0; --e) if (wt(r, n[e].tag)) return !0;
                        break;
                    case 1:
                    case 2: {
                        const e = ht(n);
                        if (e && wt(r, e.tag)) return !0;
                        break;
                    }
                    case 3:
                        if (mt(r, "]]>")) return !0;
                }
                return !r;
            }
            function wt(e, t) {
                return mt(e, "</") && e.slice(2, 2 + t.length).toLowerCase() === t.toLowerCase() && /[\t\r\n\f />]/.test(e[2 + t.length] || ">");
            }
            function kt(e, t) {
                Mt(e, t, Et(e, e.children[0]));
            }
            function Et(e, t) {
                const { children: n } = e;
                return 1 === n.length && 1 === t.type && !ze(t);
            }
            function Mt(e, t, n = !1) {
                const { children: i } = e,
                    o = i.length;
                let s = 0;
                for (let e = 0; e < i.length; e++) {
                    const r = i[e];
                    if (1 === r.type && 0 === r.tagType) {
                        const e = n ? 0 : Ct(r, t);
                        if (e > 0) {
                            if (e >= 2) {
                                (r.codegenNode.patchFlag = "-1"), (r.codegenNode = t.hoist(r.codegenNode)), s++;
                                continue;
                            }
                        } else {
                            const e = r.codegenNode;
                            if (13 === e.type) {
                                const n = Tt(e);
                                if ((!n || 512 === n || 1 === n) && _t(r, t) >= 2) {
                                    const n = Nt(r);
                                    n && (e.props = t.hoist(n));
                                }
                                e.dynamicProps && (e.dynamicProps = t.hoist(e.dynamicProps));
                            }
                        }
                    } else 12 === r.type && Ct(r.content, t) >= 2 && ((r.codegenNode = t.hoist(r.codegenNode)), s++);
                    if (1 === r.type) {
                        const e = 1 === r.tagType;
                        e && t.scopes.vSlot++, Mt(r, t), e && t.scopes.vSlot--;
                    } else if (11 === r.type) Mt(r, t, 1 === r.children.length);
                    else if (9 === r.type) for (let e = 0; e < r.branches.length; e++) Mt(r.branches[e], t, 1 === r.branches[e].children.length);
                }
                s && t.transformHoist && t.transformHoist(i, t, e),
                    s && s === o && 1 === e.type && 0 === e.tagType && e.codegenNode && 13 === e.codegenNode.type && (0, r.isArray)(e.codegenNode.children) && (e.codegenNode.children = t.hoist(K(e.codegenNode.children)));
            }
            function Ct(e, t) {
                const { constantCache: n } = t;
                switch (e.type) {
                    case 1:
                        if (0 !== e.tagType) return 0;
                        const i = n.get(e);
                        if (void 0 !== i) return i;
                        const o = e.codegenNode;
                        if (13 !== o.type) return 0;
                        if (o.isBlock && "svg" !== e.tag && "foreignObject" !== e.tag) return 0;
                        if (Tt(o)) return n.set(e, 0), 0;
                        {
                            let r = 3;
                            const i = _t(e, t);
                            if (0 === i) return n.set(e, 0), 0;
                            i < r && (r = i);
                            for (let i = 0; i < e.children.length; i++) {
                                const o = Ct(e.children[i], t);
                                if (0 === o) return n.set(e, 0), 0;
                                o < r && (r = o);
                            }
                            if (r > 1)
                                for (let i = 0; i < e.props.length; i++) {
                                    const o = e.props[i];
                                    if (7 === o.type && "bind" === o.name && o.exp) {
                                        const i = Ct(o.exp, t);
                                        if (0 === i) return n.set(e, 0), 0;
                                        i < r && (r = i);
                                    }
                                }
                            return o.isBlock && (t.removeHelper(d), t.removeHelper(Re(t.inSSR, o.isComponent)), (o.isBlock = !1), t.helper(je(t.inSSR, o.isComponent))), n.set(e, r), r;
                        }
                    case 2:
                    case 3:
                        return 3;
                    case 9:
                    case 11:
                    case 10:
                    default:
                        return 0;
                    case 5:
                    case 12:
                        return Ct(e.content, t);
                    case 4:
                        return e.constType;
                    case 8:
                        let s = 3;
                        for (let n = 0; n < e.children.length; n++) {
                            const i = e.children[n];
                            if ((0, r.isString)(i) || (0, r.isSymbol)(i)) continue;
                            const o = Ct(i, t);
                            if (0 === o) return 0;
                            o < s && (s = o);
                        }
                        return s;
                }
            }
            const It = new Set([N, T, S, O]);
            function Dt(e, t) {
                if (14 === e.type && !(0, r.isString)(e.callee) && It.has(e.callee)) {
                    const n = e.arguments[0];
                    if (4 === n.type) return Ct(n, t);
                    if (14 === n.type) return Dt(n, t);
                }
                return 0;
            }
            function _t(e, t) {
                let n = 3;
                const r = Nt(e);
                if (r && 15 === r.type) {
                    const { properties: e } = r;
                    for (let r = 0; r < e.length; r++) {
                        const { key: i, value: o } = e[r],
                            s = Ct(i, t);
                        if (0 === s) return s;
                        let a;
                        if ((s < n && (n = s), (a = 4 === o.type ? Ct(o, t) : 14 === o.type ? Dt(o, t) : 0), 0 === a)) return a;
                        a < n && (n = a);
                    }
                }
                return n;
            }
            function Nt(e) {
                const t = e.codegenNode;
                if (13 === t.type) return t.props;
            }
            function Tt(e) {
                const t = e.patchFlag;
                return t ? parseInt(t, 10) : void 0;
            }
            function St(
                e,
                {
                    filename: t = "",
                    prefixIdentifiers: n = !1,
                    hoistStatic: s = !1,
                    cacheHandlers: a = !1,
                    nodeTransforms: l = [],
                    directiveTransforms: c = {},
                    transformHoist: u = null,
                    isBuiltInComponent: p = r.NOOP,
                    isCustomElement: d = r.NOOP,
                    expressionPlugins: g = [],
                    scopeId: f = null,
                    slotted: h = !0,
                    ssr: m = !1,
                    inSSR: b = !1,
                    ssrCssVars: y = "",
                    bindingMetadata: A = r.EMPTY_OBJ,
                    inline: x = !1,
                    isTS: v = !1,
                    onError: w = i,
                    onWarn: k = o,
                    compatConfig: E,
                }
            ) {
                const M = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/),
                    C = {
                        selfName: M && (0, r.capitalize)((0, r.camelize)(M[1])),
                        prefixIdentifiers: n,
                        hoistStatic: s,
                        cacheHandlers: a,
                        nodeTransforms: l,
                        directiveTransforms: c,
                        transformHoist: u,
                        isBuiltInComponent: p,
                        isCustomElement: d,
                        expressionPlugins: g,
                        scopeId: f,
                        slotted: h,
                        ssr: m,
                        inSSR: b,
                        ssrCssVars: y,
                        bindingMetadata: A,
                        inline: x,
                        isTS: v,
                        onError: w,
                        onWarn: k,
                        compatConfig: E,
                        root: e,
                        helpers: new Map(),
                        components: new Set(),
                        directives: new Set(),
                        hoists: [],
                        imports: [],
                        constantCache: new Map(),
                        temps: 0,
                        cached: 0,
                        identifiers: Object.create(null),
                        scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 },
                        parent: null,
                        currentNode: e,
                        childIndex: 0,
                        inVOnce: !1,
                        helper(e) {
                            const t = C.helpers.get(e) || 0;
                            return C.helpers.set(e, t + 1), e;
                        },
                        removeHelper(e) {
                            const t = C.helpers.get(e);
                            if (t) {
                                const n = t - 1;
                                n ? C.helpers.set(e, n) : C.helpers.delete(e);
                            }
                        },
                        helperString: (e) => `_${$[C.helper(e)]}`,
                        replaceNode(e) {
                            C.parent.children[C.childIndex] = C.currentNode = e;
                        },
                        removeNode(e) {
                            const t = C.parent.children,
                                n = e ? t.indexOf(e) : C.currentNode ? C.childIndex : -1;
                            e && e !== C.currentNode ? C.childIndex > n && (C.childIndex--, C.onNodeRemoved()) : ((C.currentNode = null), C.onNodeRemoved()), C.parent.children.splice(n, 1);
                        },
                        onNodeRemoved: () => {},
                        addIdentifiers(e) {},
                        removeIdentifiers(e) {},
                        hoist(e) {
                            (0, r.isString)(e) && (e = ee(e)), C.hoists.push(e);
                            const t = ee(`_hoisted_${C.hoists.length}`, !1, e.loc, 2);
                            return (t.hoisted = e), t;
                        },
                        cache: (e, t = !1) => se(C.cached++, e, t),
                    };
                return (C.filters = new Set()), C;
            }
            function Ot(e, t) {
                const n = St(e, t);
                Lt(e, n),
                    t.hoistStatic && kt(e, n),
                    t.ssr ||
                        (function (e, t) {
                            const { helper: n } = t,
                                { children: i } = e;
                            if (1 === i.length) {
                                const n = i[0];
                                if (Et(e, n) && n.codegenNode) {
                                    const r = n.codegenNode;
                                    13 === r.type && Qe(r, t), (e.codegenNode = r);
                                } else e.codegenNode = n;
                            } else if (i.length > 1) {
                                let i = 64;
                                r.PatchFlagNames[64];
                                0, (e.codegenNode = W(t, n(a), void 0, e.children, i + "", void 0, void 0, !0, void 0, !1));
                            }
                        })(e, n),
                    (e.helpers = [...n.helpers.keys()]),
                    (e.components = [...n.components]),
                    (e.directives = [...n.directives]),
                    (e.imports = n.imports),
                    (e.hoists = n.hoists),
                    (e.temps = n.temps),
                    (e.cached = n.cached),
                    (e.filters = [...n.filters]);
            }
            function Lt(e, t) {
                t.currentNode = e;
                const { nodeTransforms: n } = t,
                    i = [];
                for (let o = 0; o < n.length; o++) {
                    const s = n[o](e, t);
                    if ((s && ((0, r.isArray)(s) ? i.push(...s) : i.push(s)), !t.currentNode)) return;
                    e = t.currentNode;
                }
                switch (e.type) {
                    case 3:
                        t.ssr || t.helper(b);
                        break;
                    case 5:
                        t.ssr || t.helper(D);
                        break;
                    case 9:
                        for (let n = 0; n < e.branches.length; n++) Lt(e.branches[n], t);
                        break;
                    case 10:
                    case 11:
                    case 1:
                    case 0:
                        !(function (e, t) {
                            let n = 0;
                            const i = () => {
                                n--;
                            };
                            for (; n < e.children.length; n++) {
                                const o = e.children[n];
                                (0, r.isString)(o) || ((t.parent = e), (t.childIndex = n), (t.onNodeRemoved = i), Lt(o, t));
                            }
                        })(e, t);
                }
                t.currentNode = e;
                let o = i.length;
                for (; o--; ) i[o]();
            }
            function zt(e, t) {
                const n = (0, r.isString)(e) ? (t) => t === e : (t) => e.test(t);
                return (e, r) => {
                    if (1 === e.type) {
                        const { props: i } = e;
                        if (3 === e.tagType && i.some(Oe)) return;
                        const o = [];
                        for (let s = 0; s < i.length; s++) {
                            const a = i[s];
                            if (7 === a.type && n(a.name)) {
                                i.splice(s, 1), s--;
                                const n = t(e, a, r);
                                n && o.push(n);
                            }
                        }
                        return o;
                    }
                };
            }
            const jt = "/*#__PURE__*/";
            function Rt(e, t = {}) {
                const n = (function (
                    e,
                    {
                        mode: t = "function",
                        prefixIdentifiers: n = "module" === t,
                        sourceMap: r = !1,
                        filename: i = "template.vue.html",
                        scopeId: o = null,
                        optimizeImports: s = !1,
                        runtimeGlobalName: a = "Vue",
                        runtimeModuleName: l = "vue",
                        ssrRuntimeModuleName: c = "vue/server-renderer",
                        ssr: u = !1,
                        isTS: p = !1,
                        inSSR: d = !1,
                    }
                ) {
                    const g = {
                        mode: t,
                        prefixIdentifiers: n,
                        sourceMap: r,
                        filename: i,
                        scopeId: o,
                        optimizeImports: s,
                        runtimeGlobalName: a,
                        runtimeModuleName: l,
                        ssrRuntimeModuleName: c,
                        ssr: u,
                        isTS: p,
                        inSSR: d,
                        source: e.loc.source,
                        code: "",
                        column: 1,
                        line: 1,
                        offset: 0,
                        indentLevel: 0,
                        pure: !1,
                        map: void 0,
                        helper: (e) => `_${$[e]}`,
                        push(e, t) {
                            g.code += e;
                        },
                        indent() {
                            f(++g.indentLevel);
                        },
                        deindent(e = !1) {
                            e ? --g.indentLevel : f(--g.indentLevel);
                        },
                        newline() {
                            f(g.indentLevel);
                        },
                    };
                    function f(e) {
                        g.push("\n" + "  ".repeat(e));
                    }
                    return g;
                })(e, t);
                t.onContextCreated && t.onContextCreated(n);
                const { mode: r, push: i, prefixIdentifiers: o, indent: s, deindent: a, newline: l, scopeId: c, ssr: u } = n,
                    p = e.helpers.length > 0,
                    d = !o && "module" !== r;
                !(function (e, t) {
                    const { ssr: n, prefixIdentifiers: r, push: i, newline: o, runtimeModuleName: s, runtimeGlobalName: a, ssrRuntimeModuleName: l } = t,
                        c = a,
                        u = (e) => `${$[e]}: _${$[e]}`;
                    if (e.helpers.length > 0 && (i(`const _Vue = ${c}\n`), e.hoists.length)) {
                        i(
                            `const { ${[h, m, b, y, A]
                                .filter((t) => e.helpers.includes(t))
                                .map(u)
                                .join(", ")} } = _Vue\n`
                        );
                    }
                    (function (e, t) {
                        if (!e.length) return;
                        t.pure = !0;
                        const { push: n, newline: r, helper: i, scopeId: o, mode: s } = t;
                        r();
                        for (let i = 0; i < e.length; i++) {
                            const o = e[i];
                            o && (n(`const _hoisted_${i + 1} = `), Ut(o, t), r());
                        }
                        t.pure = !1;
                    })(e.hoists, t),
                        o(),
                        i("return ");
                })(e, n);
                if (
                    (i(`function ${u ? "ssrRender" : "render"}(${(u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`),
                    s(),
                    d && (i("with (_ctx) {"), s(), p && (i(`const { ${e.helpers.map((e) => `${$[e]}: _${$[e]}`).join(", ")} } = _Vue`), i("\n"), l())),
                    e.components.length && (Pt(e.components, "component", n), (e.directives.length || e.temps > 0) && l()),
                    e.directives.length && (Pt(e.directives, "directive", n), e.temps > 0 && l()),
                    e.filters && e.filters.length && (l(), Pt(e.filters, "filter", n), l()),
                    e.temps > 0)
                ) {
                    i("let ");
                    for (let t = 0; t < e.temps; t++) i(`${t > 0 ? ", " : ""}_temp${t}`);
                }
                return (
                    (e.components.length || e.directives.length || e.temps) && (i("\n"), l()),
                    u || i("return "),
                    e.codegenNode ? Ut(e.codegenNode, n) : i("null"),
                    d && (a(), i("}")),
                    a(),
                    i("}"),
                    { ast: e, code: n.code, preamble: "", map: n.map ? n.map.toJSON() : void 0 }
                );
            }
            function Pt(e, t, { helper: n, push: r, newline: i, isTS: o }) {
                const s = n("filter" === t ? k : "component" === t ? x : w);
                for (let n = 0; n < e.length; n++) {
                    let a = e[n];
                    const l = a.endsWith("__self");
                    l && (a = a.slice(0, -6)), r(`const ${Ue(a, t)} = ${s}(${JSON.stringify(a)}${l ? ", true" : ""})${o ? "!" : ""}`), n < e.length - 1 && i();
                }
            }
            function Ft(e, t) {
                const n = e.length > 3 || !1;
                t.push("["), n && t.indent(), Bt(e, t, n), n && t.deindent(), t.push("]");
            }
            function Bt(e, t, n = !1, i = !0) {
                const { push: o, newline: s } = t;
                for (let a = 0; a < e.length; a++) {
                    const l = e[a];
                    (0, r.isString)(l) ? o(l) : (0, r.isArray)(l) ? Ft(l, t) : Ut(l, t), a < e.length - 1 && (n ? (i && o(","), s()) : i && o(", "));
                }
            }
            function Ut(e, t) {
                if ((0, r.isString)(e)) t.push(e);
                else if ((0, r.isSymbol)(e)) t.push(t.helper(e));
                else
                    switch (e.type) {
                        case 1:
                        case 9:
                        case 11:
                        case 12:
                            Ut(e.codegenNode, t);
                            break;
                        case 2:
                            !(function (e, t) {
                                t.push(JSON.stringify(e.content), e);
                            })(e, t);
                            break;
                        case 4:
                            qt(e, t);
                            break;
                        case 5:
                            !(function (e, t) {
                                const { push: n, helper: r, pure: i } = t;
                                i && n(jt);
                                n(`${r(D)}(`), Ut(e.content, t), n(")");
                            })(e, t);
                            break;
                        case 8:
                            Zt(e, t);
                            break;
                        case 3:
                            !(function (e, t) {
                                const { push: n, helper: r, pure: i } = t;
                                i && n(jt);
                                n(`${r(b)}(${JSON.stringify(e.content)})`, e);
                            })(e, t);
                            break;
                        case 13:
                            !(function (e, t) {
                                const { push: n, helper: r, pure: i } = t,
                                    { tag: o, props: s, children: a, patchFlag: l, dynamicProps: c, directives: u, isBlock: p, disableTracking: g, isComponent: f } = e;
                                u && n(r(E) + "(");
                                p && n(`(${r(d)}(${g ? "true" : ""}), `);
                                i && n(jt);
                                const h = p ? Re(t.inSSR, f) : je(t.inSSR, f);
                                n(r(h) + "(", e),
                                    Bt(
                                        (function (e) {
                                            let t = e.length;
                                            for (; t-- && null == e[t]; );
                                            return e.slice(0, t + 1).map((e) => e || "null");
                                        })([o, s, a, l, c]),
                                        t
                                    ),
                                    n(")"),
                                    p && n(")");
                                u && (n(", "), Ut(u, t), n(")"));
                            })(e, t);
                            break;
                        case 14:
                            !(function (e, t) {
                                const { push: n, helper: i, pure: o } = t,
                                    s = (0, r.isString)(e.callee) ? e.callee : i(e.callee);
                                o && n(jt);
                                n(s + "(", e), Bt(e.arguments, t), n(")");
                            })(e, t);
                            break;
                        case 15:
                            !(function (e, t) {
                                const { push: n, indent: r, deindent: i, newline: o } = t,
                                    { properties: s } = e;
                                if (!s.length) return void n("{}", e);
                                const a = s.length > 1 || !1;
                                n(a ? "{" : "{ "), a && r();
                                for (let e = 0; e < s.length; e++) {
                                    const { key: r, value: i } = s[e];
                                    Qt(r, t), n(": "), Ut(i, t), e < s.length - 1 && (n(","), o());
                                }
                                a && i(), n(a ? "}" : " }");
                            })(e, t);
                            break;
                        case 17:
                            !(function (e, t) {
                                Ft(e.elements, t);
                            })(e, t);
                            break;
                        case 18:
                            !(function (e, t) {
                                const { push: n, indent: i, deindent: o } = t,
                                    { params: s, returns: a, body: l, newline: c, isSlot: u } = e;
                                u && n(`_${$[U]}(`);
                                n("(", e), (0, r.isArray)(s) ? Bt(s, t) : s && Ut(s, t);
                                n(") => "), (c || l) && (n("{"), i());
                                a ? (c && n("return "), (0, r.isArray)(a) ? Ft(a, t) : Ut(a, t)) : l && Ut(l, t);
                                (c || l) && (o(), n("}"));
                                u && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
                            })(e, t);
                            break;
                        case 19:
                            !(function (e, t) {
                                const { test: n, consequent: r, alternate: i, newline: o } = e,
                                    { push: s, indent: a, deindent: l, newline: c } = t;
                                if (4 === n.type) {
                                    const e = !be(n.content);
                                    e && s("("), qt(n, t), e && s(")");
                                } else s("("), Ut(n, t), s(")");
                                o && a(), t.indentLevel++, o || s(" "), s("? "), Ut(r, t), t.indentLevel--, o && c(), o || s(" "), s(": ");
                                const u = 19 === i.type;
                                u || t.indentLevel++;
                                Ut(i, t), u || t.indentLevel--;
                                o && l(!0);
                            })(e, t);
                            break;
                        case 20:
                            !(function (e, t) {
                                const { push: n, helper: r, indent: i, deindent: o, newline: s } = t;
                                n(`_cache[${e.index}] || (`), e.isVNode && (i(), n(`${r(P)}(-1),`), s());
                                n(`_cache[${e.index}] = `), Ut(e.value, t), e.isVNode && (n(","), s(), n(`${r(P)}(1),`), s(), n(`_cache[${e.index}]`), o());
                                n(")");
                            })(e, t);
                            break;
                        case 21:
                            Bt(e.body, t, !0, !1);
                    }
            }
            function qt(e, t) {
                const { content: n, isStatic: r } = e;
                t.push(r ? JSON.stringify(n) : n, e);
            }
            function Zt(e, t) {
                for (let n = 0; n < e.children.length; n++) {
                    const i = e.children[n];
                    (0, r.isString)(i) ? t.push(i) : Ut(i, t);
                }
            }
            function Qt(e, t) {
                const { push: n } = t;
                if (8 === e.type) n("["), Zt(e, t), n("]");
                else if (e.isStatic) {
                    n(be(e.content) ? e.content : JSON.stringify(e.content), e);
                } else n(`[${e.content}]`, e);
            }
            function Ht(e, t, n = !1, r = [], i = Object.create(null)) {}
            function $t(e, t, n) {
                return !1;
            }
            function Gt(e, t) {
                if (e && ("ObjectProperty" === e.type || "ArrayPattern" === e.type)) {
                    let e = t.length;
                    for (; e--; ) {
                        const n = t[e];
                        if ("AssignmentExpression" === n.type) return !0;
                        if ("ObjectProperty" !== n.type && !n.type.endsWith("Pattern")) break;
                    }
                }
                return !1;
            }
            function Yt(e, t) {
                for (const n of e.params) for (const e of Wt(n)) t(e);
            }
            function Vt(e, t) {
                for (const n of e.body)
                    if ("VariableDeclaration" === n.type) {
                        if (n.declare) continue;
                        for (const e of n.declarations) for (const n of Wt(e.id)) t(n);
                    } else if ("FunctionDeclaration" === n.type || "ClassDeclaration" === n.type) {
                        if (n.declare || !n.id) continue;
                        t(n.id);
                    }
            }
            function Wt(e, t = []) {
                switch (e.type) {
                    case "Identifier":
                        t.push(e);
                        break;
                    case "MemberExpression":
                        let n = e;
                        for (; "MemberExpression" === n.type; ) n = n.object;
                        t.push(n);
                        break;
                    case "ObjectPattern":
                        for (const n of e.properties) "RestElement" === n.type ? Wt(n.argument, t) : Wt(n.value, t);
                        break;
                    case "ArrayPattern":
                        e.elements.forEach((e) => {
                            e && Wt(e, t);
                        });
                        break;
                    case "RestElement":
                        Wt(e.argument, t);
                        break;
                    case "AssignmentPattern":
                        Wt(e.left, t);
                }
                return t;
            }
            const Kt = (e) => /Function(?:Expression|Declaration)$|Method$/.test(e.type),
                Jt = (e) => e && ("ObjectProperty" === e.type || "ObjectMethod" === e.type) && !e.computed,
                Xt = (e, t) => Jt(t) && t.key === e;
            new RegExp(
                "\\b" +
                    "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void"
                        .split(",")
                        .join("\\b|\\b") +
                    "\\b"
            );
            const en = (e, t) => {
                if (5 === e.type) e.content = tn(e.content, t);
                else if (1 === e.type)
                    for (let n = 0; n < e.props.length; n++) {
                        const r = e.props[n];
                        if (7 === r.type && "for" !== r.name) {
                            const e = r.exp,
                                n = r.arg;
                            !e || 4 !== e.type || ("on" === r.name && n) || (r.exp = tn(e, t, "slot" === r.name)), n && 4 === n.type && !n.isStatic && (r.arg = tn(n, t));
                        }
                    }
            };
            function tn(e, t, n = !1, r = !1, i = Object.create(t.identifiers)) {
                return e;
            }
            const nn = zt(/^(if|else|else-if)$/, (e, t, n) =>
                rn(e, t, n, (e, t, r) => {
                    const i = n.parent.children;
                    let o = i.indexOf(e),
                        s = 0;
                    for (; o-- >= 0; ) {
                        const e = i[o];
                        e && 9 === e.type && (s += e.branches.length);
                    }
                    return () => {
                        if (r) e.codegenNode = sn(t, s, n);
                        else {
                            const r = (function (e) {
                                for (;;)
                                    if (19 === e.type) {
                                        if (19 !== e.alternate.type) return e;
                                        e = e.alternate;
                                    } else 20 === e.type && (e = e.value);
                            })(e.codegenNode);
                            r.alternate = sn(t, s + e.branches.length - 1, n);
                        }
                    };
                })
            );
            function rn(e, t, n, r) {
                if (!("else" === t.name || (t.exp && t.exp.content.trim()))) {
                    const r = t.exp ? t.exp.loc : e.loc;
                    n.onError(s(28, t.loc)), (t.exp = ee("true", !1, r));
                }
                if ("if" === t.name) {
                    const i = on(e, t),
                        o = { type: 9, loc: e.loc, branches: [i] };
                    if ((n.replaceNode(o), r)) return r(o, i, !0);
                } else {
                    const i = n.parent.children;
                    let o = i.indexOf(e);
                    for (; o-- >= -1; ) {
                        const a = i[o];
                        if (!a || 2 !== a.type || a.content.trim().length) {
                            if (a && 9 === a.type) {
                                "else-if" === t.name && void 0 === a.branches[a.branches.length - 1].condition && n.onError(s(30, e.loc)), n.removeNode();
                                const i = on(e, t);
                                0, a.branches.push(i);
                                const o = r && r(a, i, !1);
                                Lt(i, n), o && o(), (n.currentNode = null);
                            } else n.onError(s(30, e.loc));
                            break;
                        }
                        n.removeNode(a);
                    }
                }
            }
            function on(e, t) {
                return { type: 10, loc: e.loc, condition: "else" === t.name ? void 0 : t.exp, children: 3 !== e.tagType || De(e, "for") ? [e] : e.children, userKey: _e(e, "key") };
            }
            function sn(e, t, n) {
                return e.condition ? oe(e.condition, an(e, t, n), re(n.helper(b), ['""', "true"])) : an(e, t, n);
            }
            function an(e, t, n) {
                const { helper: i } = n,
                    o = X("key", ee(`${t}`, !1, Y, 2)),
                    { children: s } = e,
                    l = s[0];
                if (1 !== s.length || 1 !== l.type) {
                    if (1 === s.length && 11 === l.type) {
                        const e = l.codegenNode;
                        return Be(e, o, n), e;
                    }
                    {
                        let t = 64;
                        r.PatchFlagNames[64];
                        return W(n, i(a), J([o]), s, t + "", void 0, void 0, !0, !1, !1, e.loc);
                    }
                }
                {
                    const e = l.codegenNode,
                        t = Ze(e);
                    return 13 === t.type && Qe(t, n), Be(t, o, n), e;
                }
            }
            const ln = zt("for", (e, t, n) => {
                const { helper: r, removeHelper: i } = n;
                return cn(e, t, n, (t) => {
                    const o = re(r(M), [t.source]),
                        s = Le(e),
                        l = De(e, "memo"),
                        c = _e(e, "key"),
                        u = c && (6 === c.type ? ee(c.value.content, !0) : c.exp),
                        p = c ? X("key", u) : null,
                        g = 4 === t.source.type && t.source.constType > 0,
                        f = g ? 64 : c ? 128 : 256;
                    return (
                        (t.codegenNode = W(n, r(a), void 0, o, f + "", void 0, void 0, !0, !g, !1, e.loc)),
                        () => {
                            let c;
                            const { children: f } = t;
                            const h = 1 !== f.length || 1 !== f[0].type,
                                m = ze(e) ? e : s && 1 === e.children.length && ze(e.children[0]) ? e.children[0] : null;
                            if (
                                (m
                                    ? ((c = m.codegenNode), s && p && Be(c, p, n))
                                    : h
                                    ? (c = W(n, r(a), p ? J([p]) : void 0, e.children, "64", void 0, void 0, !0, void 0, !1))
                                    : ((c = f[0].codegenNode),
                                      s && p && Be(c, p, n),
                                      c.isBlock !== !g && (c.isBlock ? (i(d), i(Re(n.inSSR, c.isComponent))) : i(je(n.inSSR, c.isComponent))),
                                      (c.isBlock = !g),
                                      c.isBlock ? (r(d), r(Re(n.inSSR, c.isComponent))) : r(je(n.inSSR, c.isComponent))),
                                l)
                            ) {
                                const e = ie(hn(t.parseResult, [ee("_cached")]));
                                (e.body = ae([
                                    ne(["const _memo = (", l.exp, ")"]),
                                    ne(["if (_cached", ...(u ? [" && _cached.key === ", u] : []), ` && ${n.helperString(H)}(_cached, _memo)) return _cached`]),
                                    ne(["const _item = ", c]),
                                    ee("_item.memo = _memo"),
                                    ee("return _item"),
                                ])),
                                    o.arguments.push(e, ee("_cache"), ee(String(n.cached++)));
                            } else o.arguments.push(ie(hn(t.parseResult), c, !0));
                        }
                    );
                });
            });
            function cn(e, t, n, r) {
                if (!t.exp) return void n.onError(s(31, t.loc));
                const i = gn(t.exp, n);
                if (!i) return void n.onError(s(32, t.loc));
                const { addIdentifiers: o, removeIdentifiers: a, scopes: l } = n,
                    { source: c, value: u, key: p, index: d } = i,
                    g = { type: 11, loc: t.loc, source: c, valueAlias: u, keyAlias: p, objectIndexAlias: d, parseResult: i, children: Le(e) ? e.children : [e] };
                n.replaceNode(g), l.vFor++;
                const f = r && r(g);
                return () => {
                    l.vFor--, f && f();
                };
            }
            const un = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                pn = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                dn = /^\(|\)$/g;
            function gn(e, t) {
                const n = e.loc,
                    r = e.content,
                    i = r.match(un);
                if (!i) return;
                const [, o, s] = i,
                    a = { source: fn(n, s.trim(), r.indexOf(s, o.length)), value: void 0, key: void 0, index: void 0 };
                let l = o.trim().replace(dn, "").trim();
                const c = o.indexOf(l),
                    u = l.match(pn);
                if (u) {
                    l = l.replace(pn, "").trim();
                    const e = u[1].trim();
                    let t;
                    if ((e && ((t = r.indexOf(e, c + l.length)), (a.key = fn(n, e, t))), u[2])) {
                        const i = u[2].trim();
                        i && (a.index = fn(n, i, r.indexOf(i, a.key ? t + e.length : c + l.length)));
                    }
                }
                return l && (a.value = fn(n, l, c)), a;
            }
            function fn(e, t, n) {
                return ee(t, !1, Ee(e, n, t.length));
            }
            function hn({ value: e, key: t, index: n }, r = []) {
                return (function (e) {
                    let t = e.length;
                    for (; t-- && !e[t]; );
                    return e.slice(0, t + 1).map((e, t) => e || ee("_".repeat(t + 1), !1));
                })([e, t, n, ...r]);
            }
            const mn = ee("undefined", !1),
                bn = (e, t) => {
                    if (1 === e.type && (1 === e.tagType || 3 === e.tagType)) {
                        const n = De(e, "slot");
                        if (n)
                            return (
                                n.exp,
                                t.scopes.vSlot++,
                                () => {
                                    t.scopes.vSlot--;
                                }
                            );
                    }
                },
                yn = (e, t) => {
                    let n;
                    if (Le(e) && e.props.some(Oe) && (n = De(e, "for"))) {
                        const e = (n.parseResult = gn(n.exp));
                        if (e) {
                            const { value: n, key: r, index: i } = e,
                                { addIdentifiers: o, removeIdentifiers: s } = t;
                            return (
                                n && o(n),
                                r && o(r),
                                i && o(i),
                                () => {
                                    n && s(n), r && s(r), i && s(i);
                                }
                            );
                        }
                    }
                },
                An = (e, t, n) => ie(e, t, !1, !0, t.length ? t[0].loc : n);
            function xn(e, t, n = An) {
                t.helper(U);
                const { children: r, loc: i } = e,
                    o = [],
                    a = [];
                let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
                const c = De(e, "slot", !0);
                if (c) {
                    const { arg: e, exp: t } = c;
                    e && !ge(e) && (l = !0), o.push(X(e || ee("default", !0), n(t, r, i)));
                }
                let u = !1,
                    p = !1;
                const d = [],
                    g = new Set();
                for (let e = 0; e < r.length; e++) {
                    const i = r[e];
                    let f;
                    if (!Le(i) || !(f = De(i, "slot", !0))) {
                        3 !== i.type && d.push(i);
                        continue;
                    }
                    if (c) {
                        t.onError(s(37, f.loc));
                        break;
                    }
                    u = !0;
                    const { children: h, loc: m } = i,
                        { arg: b = ee("default", !0), exp: y, loc: A } = f;
                    let x;
                    ge(b) ? (x = b ? b.content : "default") : (l = !0);
                    const v = n(y, h, m);
                    let w, k, E;
                    if ((w = De(i, "if"))) (l = !0), a.push(oe(w.exp, vn(b, v), mn));
                    else if ((k = De(i, /^else(-if)?$/, !0))) {
                        let n,
                            i = e;
                        for (; i-- && ((n = r[i]), 3 === n.type); );
                        if (n && Le(n) && De(n, "if")) {
                            r.splice(e, 1), e--;
                            let t = a[a.length - 1];
                            for (; 19 === t.alternate.type; ) t = t.alternate;
                            t.alternate = k.exp ? oe(k.exp, vn(b, v), mn) : vn(b, v);
                        } else t.onError(s(30, k.loc));
                    } else if ((E = De(i, "for"))) {
                        l = !0;
                        const e = E.parseResult || gn(E.exp);
                        e ? a.push(re(t.helper(M), [e.source, ie(hn(e), vn(b, v), !0)])) : t.onError(s(32, E.loc));
                    } else {
                        if (x) {
                            if (g.has(x)) {
                                t.onError(s(38, A));
                                continue;
                            }
                            g.add(x), "default" === x && (p = !0);
                        }
                        o.push(X(b, v));
                    }
                }
                if (!c) {
                    const e = (e, r) => {
                        const o = n(e, r, i);
                        return t.compatConfig && (o.isNonScopedSlot = !0), X("default", o);
                    };
                    u ? d.length && d.some((e) => kn(e)) && (p ? t.onError(s(39, d[0].loc)) : o.push(e(void 0, d))) : o.push(e(void 0, r));
                }
                const f = l ? 2 : wn(e.children) ? 3 : 1;
                let h = J(o.concat(X("_", ee(f + "", !1))), i);
                return a.length && (h = re(t.helper(I), [h, K(a)])), { slots: h, hasDynamicSlots: l };
            }
            function vn(e, t) {
                return J([X("name", e), X("fn", t)]);
            }
            function wn(e) {
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    switch (n.type) {
                        case 1:
                            if (2 === n.tagType || wn(n.children)) return !0;
                            break;
                        case 9:
                            if (wn(n.branches)) return !0;
                            break;
                        case 10:
                        case 11:
                            if (wn(n.children)) return !0;
                    }
                }
                return !1;
            }
            function kn(e) {
                return (2 !== e.type && 12 !== e.type) || (2 === e.type ? !!e.content.trim() : kn(e.content));
            }
            const En = new WeakMap(),
                Mn = (e, t) =>
                    function () {
                        if (1 !== (e = t.currentNode).type || (0 !== e.tagType && 1 !== e.tagType)) return;
                        const { tag: n, props: i } = e,
                            o = 1 === e.tagType;
                        let s = o ? Cn(e, t) : `"${n}"`;
                        let a,
                            p,
                            d,
                            g,
                            f,
                            h,
                            m = 0,
                            b = ((0, r.isObject)(s) && s.callee === v) || s === l || s === c || (!o && ("svg" === n || "foreignObject" === n));
                        if (i.length > 0) {
                            const n = In(e, t);
                            (a = n.props), (m = n.patchFlag), (f = n.dynamicPropNames);
                            const r = n.directives;
                            (h = r && r.length ? K(r.map((e) => Nn(e, t))) : void 0), n.shouldUseBlock && (b = !0);
                        }
                        if (e.children.length > 0) {
                            s === u && ((b = !0), (m |= 1024));
                            if (o && s !== l && s !== u) {
                                const { slots: n, hasDynamicSlots: r } = xn(e, t);
                                (p = n), r && (m |= 1024);
                            } else if (1 === e.children.length && s !== l) {
                                const n = e.children[0],
                                    r = n.type,
                                    i = 5 === r || 8 === r;
                                i && 0 === Ct(n, t) && (m |= 1), (p = i || 2 === r ? n : e.children);
                            } else p = e.children;
                        }
                        0 !== m &&
                            ((d = String(m)),
                            f &&
                                f.length &&
                                (g = (function (e) {
                                    let t = "[";
                                    for (let n = 0, r = e.length; n < r; n++) (t += JSON.stringify(e[n])), n < r - 1 && (t += ", ");
                                    return t + "]";
                                })(f))),
                            (e.codegenNode = W(t, s, a, p, d, g, h, !!b, !1, o, e.loc));
                    };
            function Cn(e, t, n = !1) {
                let { tag: r } = e;
                const i = Tn(r),
                    o = _e(e, "is");
                if (o)
                    if (i || Ge("COMPILER_IS_ON_ELEMENT", t)) {
                        const e = 6 === o.type ? o.value && ee(o.value.content, !0) : o.exp;
                        if (e) return re(t.helper(v), [e]);
                    } else 6 === o.type && o.value.content.startsWith("vue:") && (r = o.value.content.slice(4));
                const s = !i && De(e, "is");
                if (s && s.exp) return re(t.helper(v), [s.exp]);
                const a = he(r) || t.isBuiltInComponent(r);
                return a ? (n || t.helper(a), a) : (t.helper(x), t.components.add(r), Ue(r, "component"));
            }
            function In(e, t, n = e.props, i = !1) {
                const { tag: o, loc: a, children: l } = e,
                    c = 1 === e.tagType;
                let u = [];
                const p = [],
                    d = [],
                    g = l.length > 0;
                let f = !1,
                    h = 0,
                    m = !1,
                    b = !1,
                    y = !1,
                    A = !1,
                    x = !1,
                    v = !1;
                const w = [],
                    k = ({ key: e, value: n }) => {
                        if (ge(e)) {
                            const i = e.content,
                                o = (0, r.isOn)(i);
                            if (
                                (c || !o || "onclick" === i.toLowerCase() || "onUpdate:modelValue" === i || (0, r.isReservedProp)(i) || (A = !0),
                                o && (0, r.isReservedProp)(i) && (v = !0),
                                20 === n.type || ((4 === n.type || 8 === n.type) && Ct(n, t) > 0))
                            )
                                return;
                            "ref" === i ? (m = !0) : "class" === i ? (b = !0) : "style" === i ? (y = !0) : "key" === i || w.includes(i) || w.push(i), !c || ("class" !== i && "style" !== i) || w.includes(i) || w.push(i);
                        } else x = !0;
                    };
                for (let l = 0; l < n.length; l++) {
                    const h = n[l];
                    if (6 === h.type) {
                        const { loc: e, name: n, value: r } = h;
                        let i = !0;
                        if (("ref" === n && ((m = !0), t.scopes.vFor > 0 && u.push(X(ee("ref_for", !0), ee("true")))), "is" === n && (Tn(o) || (r && r.content.startsWith("vue:")) || Ge("COMPILER_IS_ON_ELEMENT", t)))) continue;
                        u.push(X(ee(n, !0, Ee(e, 0, n.length)), ee(r ? r.content : "", i, r ? r.loc : e)));
                    } else {
                        const { name: n, arg: l, exp: m, loc: b } = h,
                            y = "bind" === n,
                            A = "on" === n;
                        if ("slot" === n) {
                            c || t.onError(s(40, b));
                            continue;
                        }
                        if ("once" === n || "memo" === n) continue;
                        if ("is" === n || (y && Ne(l, "is") && (Tn(o) || Ge("COMPILER_IS_ON_ELEMENT", t)))) continue;
                        if (A && i) continue;
                        if ((((y && Ne(l, "key")) || (A && g && Ne(l, "vue:before-update"))) && (f = !0), y && Ne(l, "ref") && t.scopes.vFor > 0 && u.push(X(ee("ref_for", !0), ee("true"))), !l && (y || A))) {
                            if (((x = !0), m))
                                if ((u.length && (p.push(J(Dn(u), a)), (u = [])), y)) {
                                    if (Ge("COMPILER_V_BIND_OBJECT_ORDER", t)) {
                                        p.unshift(m);
                                        continue;
                                    }
                                    p.push(m);
                                } else p.push({ type: 14, loc: b, callee: t.helper(L), arguments: [m] });
                            else t.onError(s(y ? 34 : 35, b));
                            continue;
                        }
                        const v = t.directiveTransforms[n];
                        if (v) {
                            const { props: n, needRuntime: o } = v(h, e, t);
                            !i && n.forEach(k), u.push(...n), o && (d.push(h), (0, r.isSymbol)(o) && En.set(h, o));
                        } else (0, r.isBuiltInDirective)(n) || (d.push(h), g && (f = !0));
                    }
                }
                let E;
                if (
                    (p.length ? (u.length && p.push(J(Dn(u), a)), (E = p.length > 1 ? re(t.helper(_), p, a) : p[0])) : u.length && (E = J(Dn(u), a)),
                    x ? (h |= 16) : (b && !c && (h |= 2), y && !c && (h |= 4), w.length && (h |= 8), A && (h |= 32)),
                    f || (0 !== h && 32 !== h) || !(m || v || d.length > 0) || (h |= 512),
                    !t.inSSR && E)
                )
                    switch (E.type) {
                        case 15:
                            let e = -1,
                                n = -1,
                                r = !1;
                            for (let t = 0; t < E.properties.length; t++) {
                                const i = E.properties[t].key;
                                ge(i) ? ("class" === i.content ? (e = t) : "style" === i.content && (n = t)) : i.isHandlerKey || (r = !0);
                            }
                            const i = E.properties[e],
                                o = E.properties[n];
                            r ? (E = re(t.helper(S), [E])) : (i && !ge(i.value) && (i.value = re(t.helper(N), [i.value])), !o || ge(o.value) || (!y && 17 !== o.value.type) || (o.value = re(t.helper(T), [o.value])));
                            break;
                        case 14:
                            break;
                        default:
                            E = re(t.helper(S), [re(t.helper(O), [E])]);
                    }
                return { props: E, directives: d, patchFlag: h, dynamicPropNames: w, shouldUseBlock: f };
            }
            function Dn(e) {
                const t = new Map(),
                    n = [];
                for (let i = 0; i < e.length; i++) {
                    const o = e[i];
                    if (8 === o.key.type || !o.key.isStatic) {
                        n.push(o);
                        continue;
                    }
                    const s = o.key.content,
                        a = t.get(s);
                    a ? ("style" === s || "class" === s || (0, r.isOn)(s)) && _n(a, o) : (t.set(s, o), n.push(o));
                }
                return n;
            }
            function _n(e, t) {
                17 === e.value.type ? e.value.elements.push(t.value) : (e.value = K([e.value, t.value], e.loc));
            }
            function Nn(e, t) {
                const n = [],
                    r = En.get(e);
                r ? n.push(t.helperString(r)) : (t.helper(w), t.directives.add(e.name), n.push(Ue(e.name, "directive")));
                const { loc: i } = e;
                if ((e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length)) {
                    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
                    const t = ee("true", !1, i);
                    n.push(
                        J(
                            e.modifiers.map((e) => X(e, t)),
                            i
                        )
                    );
                }
                return K(n, e.loc);
            }
            function Tn(e) {
                return "component" === e || "Component" === e;
            }
            const Sn = /-(\w)/g,
                On = ((e) => {
                    const t = Object.create(null);
                    return (n) => t[n] || (t[n] = e(n));
                })((e) => e.replace(Sn, (e, t) => (t ? t.toUpperCase() : ""))),
                Ln = (e, t) => {
                    if (ze(e)) {
                        const { children: n, loc: r } = e,
                            { slotName: i, slotProps: o } = zn(e, t),
                            s = [t.prefixIdentifiers ? "_ctx.$slots" : "$slots", i, "{}", "undefined", "true"];
                        let a = 2;
                        o && ((s[2] = o), (a = 3)), n.length && ((s[3] = ie([], n, !1, !1, r)), (a = 4)), t.scopeId && !t.slotted && (a = 5), s.splice(a), (e.codegenNode = re(t.helper(C), s, r));
                    }
                };
            function zn(e, t) {
                let n,
                    r = '"default"';
                const i = [];
                for (let t = 0; t < e.props.length; t++) {
                    const n = e.props[t];
                    6 === n.type
                        ? n.value && ("name" === n.name ? (r = JSON.stringify(n.value.content)) : ((n.name = On(n.name)), i.push(n)))
                        : "bind" === n.name && Ne(n.arg, "name")
                        ? n.exp && (r = n.exp)
                        : ("bind" === n.name && n.arg && ge(n.arg) && (n.arg.content = On(n.arg.content)), i.push(n));
                }
                if (i.length > 0) {
                    const { props: r, directives: o } = In(e, t, i);
                    (n = r), o.length && t.onError(s(36, o[0].loc));
                }
                return { slotName: r, slotProps: n };
            }
            const jn = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,
                Rn = (e, t, n, i) => {
                    const { loc: o, modifiers: a, arg: l } = e;
                    let c;
                    if ((e.exp || a.length || n.onError(s(35, o)), 4 === l.type))
                        if (l.isStatic) {
                            let e = l.content;
                            e.startsWith("vue:") && (e = `vnode-${e.slice(4)}`), (c = ee((0, r.toHandlerKey)((0, r.camelize)(e)), !0, l.loc));
                        } else c = ne([`${n.helperString(R)}(`, l, ")"]);
                    else (c = l), c.children.unshift(`${n.helperString(R)}(`), c.children.push(")");
                    let u = e.exp;
                    u && !u.content.trim() && (u = void 0);
                    let p = n.cacheHandlers && !u && !n.inVOnce;
                    if (u) {
                        const e = ke(u.content),
                            t = !(e || jn.test(u.content)),
                            n = u.content.includes(";");
                        0, (t || (p && e)) && (u = ne([`${t ? "$event" : "(...args)"} => ${n ? "{" : "("}`, u, n ? "}" : ")"]));
                    }
                    let d = { props: [X(c, u || ee("() => {}", !1, o))] };
                    return i && (d = i(d)), p && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((e) => (e.key.isHandlerKey = !0)), d;
                },
                Pn = (e, t, n) => {
                    const { exp: i, modifiers: o, loc: a } = e,
                        l = e.arg;
                    return (
                        4 !== l.type ? (l.children.unshift("("), l.children.push(') || ""')) : l.isStatic || (l.content = `${l.content} || ""`),
                        o.includes("camel") &&
                            (4 === l.type ? (l.isStatic ? (l.content = (0, r.camelize)(l.content)) : (l.content = `${n.helperString(z)}(${l.content})`)) : (l.children.unshift(`${n.helperString(z)}(`), l.children.push(")"))),
                        n.inSSR || (o.includes("prop") && Fn(l, "."), o.includes("attr") && Fn(l, "^")),
                        !i || (4 === i.type && !i.content.trim()) ? (n.onError(s(34, a)), { props: [X(l, ee("", !0, a))] }) : { props: [X(l, i)] }
                    );
                },
                Fn = (e, t) => {
                    4 === e.type ? (e.isStatic ? (e.content = t + e.content) : (e.content = `\`${t}\${${e.content}}\``)) : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
                },
                Bn = (e, t) => {
                    if (0 === e.type || 1 === e.type || 11 === e.type || 10 === e.type)
                        return () => {
                            const n = e.children;
                            let r,
                                i = !1;
                            for (let e = 0; e < n.length; e++) {
                                const t = n[e];
                                if (Se(t)) {
                                    i = !0;
                                    for (let i = e + 1; i < n.length; i++) {
                                        const o = n[i];
                                        if (!Se(o)) {
                                            r = void 0;
                                            break;
                                        }
                                        r || (r = n[e] = { type: 8, loc: t.loc, children: [t] }), r.children.push(" + ", o), n.splice(i, 1), i--;
                                    }
                                }
                            }
                            if (i && (1 !== n.length || (0 !== e.type && (1 !== e.type || 0 !== e.tagType || e.props.find((e) => 7 === e.type && !t.directiveTransforms[e.name]) || "template" === e.tag))))
                                for (let e = 0; e < n.length; e++) {
                                    const r = n[e];
                                    if (Se(r) || 8 === r.type) {
                                        const i = [];
                                        (2 === r.type && " " === r.content) || i.push(r), t.ssr || 0 !== Ct(r, t) || i.push("1"), (n[e] = { type: 12, content: r, loc: r.loc, codegenNode: re(t.helper(y), i) });
                                    }
                                }
                        };
                },
                Un = new WeakSet(),
                qn = (e, t) => {
                    if (1 === e.type && De(e, "once", !0)) {
                        if (Un.has(e) || t.inVOnce) return;
                        return (
                            Un.add(e),
                            (t.inVOnce = !0),
                            t.helper(P),
                            () => {
                                t.inVOnce = !1;
                                const e = t.currentNode;
                                e.codegenNode && (e.codegenNode = t.cache(e.codegenNode, !0));
                            }
                        );
                    }
                },
                Zn = (e, t, n) => {
                    const { exp: r, arg: i } = e;
                    if (!r) return n.onError(s(41, e.loc)), Qn();
                    const o = r.loc.source,
                        a = 4 === r.type ? r.content : o;
                    n.bindingMetadata[o];
                    if (!a.trim() || !ke(a)) return n.onError(s(42, r.loc)), Qn();
                    const l = i || ee("modelValue", !0),
                        c = i ? (ge(i) ? `onUpdate:${i.content}` : ne(['"onUpdate:" + ', i])) : "onUpdate:modelValue";
                    let u;
                    u = ne([`${n.isTS ? "($event: any)" : "$event"} => ((`, r, ") = $event)"]);
                    const p = [X(l, e.exp), X(c, u)];
                    if (e.modifiers.length && 1 === t.tagType) {
                        const t = e.modifiers.map((e) => (be(e) ? e : JSON.stringify(e)) + ": true").join(", "),
                            n = i ? (ge(i) ? `${i.content}Modifiers` : ne([i, ' + "Modifiers"'])) : "modelModifiers";
                        p.push(X(n, ee(`{ ${t} }`, !1, e.loc, 2)));
                    }
                    return Qn(p);
                };
            function Qn(e = []) {
                return { props: e };
            }
            const Hn = /[\w).+\-_$\]]/,
                $n = (e, t) => {
                    Ge("COMPILER_FILTER", t) &&
                        (5 === e.type && Gn(e.content, t),
                        1 === e.type &&
                            e.props.forEach((e) => {
                                7 === e.type && "for" !== e.name && e.exp && Gn(e.exp, t);
                            }));
                };
            function Gn(e, t) {
                if (4 === e.type) Yn(e, t);
                else
                    for (let n = 0; n < e.children.length; n++) {
                        const r = e.children[n];
                        "object" == typeof r && (4 === r.type ? Yn(r, t) : 8 === r.type ? Gn(e, t) : 5 === r.type && Gn(r.content, t));
                    }
            }
            function Yn(e, t) {
                const n = e.content;
                let r,
                    i,
                    o,
                    s,
                    a = !1,
                    l = !1,
                    c = !1,
                    u = !1,
                    p = 0,
                    d = 0,
                    g = 0,
                    f = 0,
                    h = [];
                for (o = 0; o < n.length; o++)
                    if (((i = r), (r = n.charCodeAt(o)), a)) 39 === r && 92 !== i && (a = !1);
                    else if (l) 34 === r && 92 !== i && (l = !1);
                    else if (c) 96 === r && 92 !== i && (c = !1);
                    else if (u) 47 === r && 92 !== i && (u = !1);
                    else if (124 !== r || 124 === n.charCodeAt(o + 1) || 124 === n.charCodeAt(o - 1) || p || d || g) {
                        switch (r) {
                            case 34:
                                l = !0;
                                break;
                            case 39:
                                a = !0;
                                break;
                            case 96:
                                c = !0;
                                break;
                            case 40:
                                g++;
                                break;
                            case 41:
                                g--;
                                break;
                            case 91:
                                d++;
                                break;
                            case 93:
                                d--;
                                break;
                            case 123:
                                p++;
                                break;
                            case 125:
                                p--;
                        }
                        if (47 === r) {
                            let e,
                                t = o - 1;
                            for (; t >= 0 && ((e = n.charAt(t)), " " === e); t--);
                            (e && Hn.test(e)) || (u = !0);
                        }
                    } else void 0 === s ? ((f = o + 1), (s = n.slice(0, o).trim())) : m();
                function m() {
                    h.push(n.slice(f, o).trim()), (f = o + 1);
                }
                if ((void 0 === s ? (s = n.slice(0, o).trim()) : 0 !== f && m(), h.length)) {
                    for (o = 0; o < h.length; o++) s = Vn(s, h[o], t);
                    e.content = s;
                }
            }
            function Vn(e, t, n) {
                n.helper(k);
                const r = t.indexOf("(");
                if (r < 0) return n.filters.add(t), `${Ue(t, "filter")}(${e})`;
                {
                    const i = t.slice(0, r),
                        o = t.slice(r + 1);
                    return n.filters.add(i), `${Ue(i, "filter")}(${e}${")" !== o ? "," + o : o}`;
                }
            }
            const Wn = new WeakSet(),
                Kn = (e, t) => {
                    if (1 === e.type) {
                        const n = De(e, "memo");
                        if (!n || Wn.has(e)) return;
                        return (
                            Wn.add(e),
                            () => {
                                const r = e.codegenNode || t.currentNode.codegenNode;
                                r && 13 === r.type && (1 !== e.tagType && Qe(r, t), (e.codegenNode = re(t.helper(Q), [n.exp, ie(void 0, r), "_cache", String(t.cached++)])));
                            }
                        );
                    }
                };
            function Jn(e) {
                return [[qn, nn, Kn, ln, $n, Ln, Mn, bn, Bn], { on: Rn, bind: Pn, model: Zn }];
            }
            function Xn(e, t = {}) {
                const n = t.onError || i,
                    o = "module" === t.mode;
                !0 === t.prefixIdentifiers ? n(s(46)) : o && n(s(47));
                t.cacheHandlers && n(s(48)), t.scopeId && !o && n(s(49));
                const a = (0, r.isString)(e) ? Xe(e, t) : e,
                    [l, c] = Jn();
                return (
                    Ot(a, (0, r.extend)({}, t, { prefixIdentifiers: false, nodeTransforms: [...l, ...(t.nodeTransforms || [])], directiveTransforms: (0, r.extend)({}, c, t.directiveTransforms || {}) })),
                    Rt(a, (0, r.extend)({}, t, { prefixIdentifiers: false }))
                );
            }
            const er = () => ({ props: [] }),
                tr = Symbol(""),
                nr = Symbol(""),
                rr = Symbol(""),
                ir = Symbol(""),
                or = Symbol(""),
                sr = Symbol(""),
                ar = Symbol(""),
                lr = Symbol(""),
                cr = Symbol(""),
                ur = Symbol("");
            let pr;
            G({ [tr]: "vModelRadio", [nr]: "vModelCheckbox", [rr]: "vModelText", [ir]: "vModelSelect", [or]: "vModelDynamic", [sr]: "withModifiers", [ar]: "withKeys", [lr]: "vShow", [cr]: "Transition", [ur]: "TransitionGroup" });
            const dr = (0, r.makeMap)("style,iframe,script,noscript", !0),
                gr = {
                    isVoidTag: r.isVoidTag,
                    isNativeTag: (e) => (0, r.isHTMLTag)(e) || (0, r.isSVGTag)(e),
                    isPreTag: (e) => "pre" === e,
                    decodeEntities: function (e, t = !1) {
                        return pr || (pr = document.createElement("div")), t ? ((pr.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`), pr.children[0].getAttribute("foo")) : ((pr.innerHTML = e), pr.textContent);
                    },
                    isBuiltInComponent: (e) => (fe(e, "Transition") ? cr : fe(e, "TransitionGroup") ? ur : void 0),
                    getNamespace(e, t) {
                        let n = t ? t.ns : 0;
                        if (t && 2 === n)
                            if ("annotation-xml" === t.tag) {
                                if ("svg" === e) return 1;
                                t.props.some((e) => 6 === e.type && "encoding" === e.name && null != e.value && ("text/html" === e.value.content || "application/xhtml+xml" === e.value.content)) && (n = 0);
                            } else /^m(?:[ions]|text)$/.test(t.tag) && "mglyph" !== e && "malignmark" !== e && (n = 0);
                        else t && 1 === n && (("foreignObject" !== t.tag && "desc" !== t.tag && "title" !== t.tag) || (n = 0));
                        if (0 === n) {
                            if ("svg" === e) return 1;
                            if ("math" === e) return 2;
                        }
                        return n;
                    },
                    getTextMode({ tag: e, ns: t }) {
                        if (0 === t) {
                            if ("textarea" === e || "title" === e) return 1;
                            if (dr(e)) return 2;
                        }
                        return 0;
                    },
                },
                fr = (e) => {
                    1 === e.type &&
                        e.props.forEach((t, n) => {
                            6 === t.type && "style" === t.name && t.value && (e.props[n] = { type: 7, name: "bind", arg: ee("style", !0, t.loc), exp: hr(t.value.content, t.loc), modifiers: [], loc: t.loc });
                        });
                },
                hr = (e, t) => {
                    const n = (0, r.parseStringStyle)(e);
                    return ee(JSON.stringify(n), !1, t, 3);
                };
            function mr(e, t) {
                return s(e, t);
            }
            const br = (0, r.makeMap)("passive,once,capture"),
                yr = (0, r.makeMap)("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),
                Ar = (0, r.makeMap)("left,right"),
                xr = (0, r.makeMap)("onkeyup,onkeydown,onkeypress", !0),
                vr = (e, t) => (ge(e) && "onclick" === e.content.toLowerCase() ? ee(t, !0) : 4 !== e.type ? ne(["(", e, `) === "onClick" ? "${t}" : (`, e, ")"]) : e);
            const wr = (e, t) => {
                    1 !== e.type || 0 !== e.tagType || ("script" !== e.tag && "style" !== e.tag) || (t.onError(mr(60, e.loc)), t.removeNode());
                },
                kr = [fr],
                Er = {
                    cloak: er,
                    html: (e, t, n) => {
                        const { exp: r, loc: i } = e;
                        return r || n.onError(mr(50, i)), t.children.length && (n.onError(mr(51, i)), (t.children.length = 0)), { props: [X(ee("innerHTML", !0, i), r || ee("", !0))] };
                    },
                    text: (e, t, n) => {
                        const { exp: r, loc: i } = e;
                        return r || n.onError(mr(52, i)), t.children.length && (n.onError(mr(53, i)), (t.children.length = 0)), { props: [X(ee("textContent", !0), r ? re(n.helperString(D), [r], i) : ee("", !0))] };
                    },
                    model: (e, t, n) => {
                        const r = Zn(e, t, n);
                        if (!r.props.length || 1 === t.tagType) return r;
                        e.arg && n.onError(mr(55, e.arg.loc));
                        const { tag: i } = t,
                            o = n.isCustomElement(i);
                        if ("input" === i || "textarea" === i || "select" === i || o) {
                            let s = rr,
                                a = !1;
                            if ("input" === i || o) {
                                const r = _e(t, "type");
                                if (r) {
                                    if (7 === r.type) s = or;
                                    else if (r.value)
                                        switch (r.value.content) {
                                            case "radio":
                                                s = tr;
                                                break;
                                            case "checkbox":
                                                s = nr;
                                                break;
                                            case "file":
                                                (a = !0), n.onError(mr(56, e.loc));
                                        }
                                } else Te(t) && (s = or);
                            } else "select" === i && (s = ir);
                            a || (r.needRuntime = n.helper(s));
                        } else n.onError(mr(54, e.loc));
                        return (r.props = r.props.filter((e) => !(4 === e.key.type && "modelValue" === e.key.content))), r;
                    },
                    on: (e, t, n) =>
                        Rn(e, t, n, (t) => {
                            const { modifiers: i } = e;
                            if (!i.length) return t;
                            let { key: o, value: s } = t.props[0];
                            const { keyModifiers: a, nonKeyModifiers: l, eventOptionModifiers: c } = ((e, t, n, r) => {
                                const i = [],
                                    o = [],
                                    s = [];
                                for (let r = 0; r < t.length; r++) {
                                    const a = t[r];
                                    ("native" === a && Ye("COMPILER_V_ON_NATIVE", n)) || br(a) ? s.push(a) : Ar(a) ? (ge(e) ? (xr(e.content) ? i.push(a) : o.push(a)) : (i.push(a), o.push(a))) : yr(a) ? o.push(a) : i.push(a);
                                }
                                return { keyModifiers: i, nonKeyModifiers: o, eventOptionModifiers: s };
                            })(o, i, n, e.loc);
                            if (
                                (l.includes("right") && (o = vr(o, "onContextmenu")),
                                l.includes("middle") && (o = vr(o, "onMouseup")),
                                l.length && (s = re(n.helper(sr), [s, JSON.stringify(l)])),
                                !a.length || (ge(o) && !xr(o.content)) || (s = re(n.helper(ar), [s, JSON.stringify(a)])),
                                c.length)
                            ) {
                                const e = c.map(r.capitalize).join("");
                                o = ge(o) ? ee(`${o.content}${e}`, !0) : ne(["(", o, `) + "${e}"`]);
                            }
                            return { props: [X(o, s)] };
                        }),
                    show: (e, t, n) => {
                        const { exp: r, loc: i } = e;
                        return r || n.onError(mr(58, i)), { props: [], needRuntime: n.helper(lr) };
                    },
                };
            function Mr(e, t = {}) {
                return Xn(e, (0, r.extend)({}, gr, t, { nodeTransforms: [wr, ...kr, ...(t.nodeTransforms || [])], directiveTransforms: (0, r.extend)({}, Er, t.directiveTransforms || {}), transformHoist: null }));
            }
            function Cr(e, t = {}) {
                return Xe(e, (0, r.extend)({}, gr, t));
            }
        },
        40819: (e, t, n) => {
            "use strict";
            var r = n(98029),
                i = { "text/plain": "Text", "text/html": "Url", default: "Text" };
            e.exports = function (e, t) {
                var n,
                    o,
                    s,
                    a,
                    l,
                    c = !1;
                t || (t = {}), t.debug;
                try {
                    if (
                        ((o = r()),
                        (s = document.createRange()),
                        (a = document.getSelection()),
                        ((l = document.createElement("span")).textContent = e),
                        (l.ariaHidden = "true"),
                        (l.style.all = "unset"),
                        (l.style.position = "fixed"),
                        (l.style.top = 0),
                        (l.style.clip = "rect(0, 0, 0, 0)"),
                        (l.style.whiteSpace = "pre"),
                        (l.style.webkitUserSelect = "text"),
                        (l.style.MozUserSelect = "text"),
                        (l.style.msUserSelect = "text"),
                        (l.style.userSelect = "text"),
                        l.addEventListener("copy", function (n) {
                            if ((n.stopPropagation(), t.format))
                                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                                    window.clipboardData.clearData();
                                    var r = i[t.format] || i.default;
                                    window.clipboardData.setData(r, e);
                                } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                            t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
                        }),
                        document.body.appendChild(l),
                        s.selectNodeContents(l),
                        a.addRange(s),
                        !document.execCommand("copy"))
                    )
                        throw new Error("copy command was unsuccessful");
                    c = !0;
                } catch (r) {
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), (c = !0);
                    } catch (r) {
                        (n = (function (e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t);
                        })("message" in t ? t.message : "Copy to clipboard: #{key}, Enter")),
                            window.prompt(n, e);
                    }
                } finally {
                    a && ("function" == typeof a.removeRange ? a.removeRange(s) : a.removeAllRanges()), l && document.body.removeChild(l), o();
                }
                return c;
            };
        },
        77662: () => {
            !(function (e) {
                var t =
                        "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
                    n = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null },
                    r = {
                        bash: n,
                        environment: { pattern: RegExp("\\$" + t), alias: "constant" },
                        variable: [
                            {
                                pattern: /\$?\(\([\s\S]+?\)\)/,
                                greedy: !0,
                                inside: {
                                    variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                                    operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                                    punctuation: /\(\(?|\)\)?|,|;/,
                                },
                            },
                            { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
                            { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant" } } },
                            /\$(?:\w+|[#?*!@$])/,
                        ],
                        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
                    };
                (e.languages.bash = {
                    shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
                    comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
                    "function-name": [
                        { pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" },
                        { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
                    ],
                    "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 },
                    "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 },
                    parameter: { pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/, alias: "variable", lookbehind: !0 },
                    string: [
                        { pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: r },
                        { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: n } },
                        { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: r },
                        { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
                        { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: r.entity } },
                    ],
                    environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
                    variable: r.variable,
                    function: {
                        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                        lookbehind: !0,
                    },
                    keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: !0 },
                    builtin: {
                        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
                        lookbehind: !0,
                        alias: "class-name",
                    },
                    boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 },
                    "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
                    operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } },
                    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                    number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
                }),
                    (n.inside = e.languages.bash);
                for (
                    var i = ["comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"],
                        o = r.variable[1].inside,
                        s = 0;
                    s < i.length;
                    s++
                )
                    o[i[s]] = e.languages.bash[i[s]];
                (e.languages.sh = e.languages.bash), (e.languages.shell = e.languages.bash);
            })(Prism);
        },
        70224: () => {
            Prism.languages.basic = {
                comment: { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
                string: { pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/, greedy: !0 },
                number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
                keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
                function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
                operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
                punctuation: /[,;:()]/,
            };
        },
        55752: () => {
            (Prism.languages.c = Prism.languages.extend("clike", {
                comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
                string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
                "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 },
                keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
            })),
                Prism.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }),
                Prism.languages.insertBefore("c", "string", {
                    macro: {
                        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "property",
                        inside: {
                            string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, Prism.languages.c.string],
                            char: Prism.languages.c.char,
                            comment: Prism.languages.c.comment,
                            "macro-name": [
                                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                                { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" },
                            ],
                            directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" },
                            "directive-hash": /^#/,
                            punctuation: /##|\\(?=[\r\n])/,
                            expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c },
                        },
                    },
                }),
                Prism.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }),
                delete Prism.languages.c.boolean;
        },
        20956: () => {
            Prism.languages.clike = {
                comment: [
                    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
                    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                ],
                string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } },
                keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                boolean: /\b(?:false|true)\b/,
                function: /\b\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/,
            };
        },
        12744: (e, t, n) => {
            var r = (function (e) {
                var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                    n = 0,
                    r = {},
                    i = {
                        manual: e.Prism && e.Prism.manual,
                        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function e(t) {
                                return t instanceof o
                                    ? new o(t.type, e(t.content), t.alias)
                                    : Array.isArray(t)
                                    ? t.map(e)
                                    : t
                                          .replace(/&/g, "&amp;")
                                          .replace(/</g, "&lt;")
                                          .replace(/\u00a0/g, " ");
                            },
                            type: function (e) {
                                return Object.prototype.toString.call(e).slice(8, -1);
                            },
                            objId: function (e) {
                                return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
                            },
                            clone: function e(t, n) {
                                var r, o;
                                switch (((n = n || {}), i.util.type(t))) {
                                    case "Object":
                                        if (((o = i.util.objId(t)), n[o])) return n[o];
                                        for (var s in ((r = {}), (n[o] = r), t)) t.hasOwnProperty(s) && (r[s] = e(t[s], n));
                                        return r;
                                    case "Array":
                                        return (
                                            (o = i.util.objId(t)),
                                            n[o]
                                                ? n[o]
                                                : ((r = []),
                                                  (n[o] = r),
                                                  t.forEach(function (t, i) {
                                                      r[i] = e(t, n);
                                                  }),
                                                  r)
                                        );
                                    default:
                                        return t;
                                }
                            },
                            getLanguage: function (e) {
                                for (; e; ) {
                                    var n = t.exec(e.className);
                                    if (n) return n[1].toLowerCase();
                                    e = e.parentElement;
                                }
                                return "none";
                            },
                            setLanguage: function (e, n) {
                                (e.className = e.className.replace(RegExp(t, "gi"), "")), e.classList.add("language-" + n);
                            },
                            currentScript: function () {
                                if ("undefined" == typeof document) return null;
                                if ("currentScript" in document) return document.currentScript;
                                try {
                                    throw new Error();
                                } catch (r) {
                                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                                    if (e) {
                                        var t = document.getElementsByTagName("script");
                                        for (var n in t) if (t[n].src == e) return t[n];
                                    }
                                    return null;
                                }
                            },
                            isActive: function (e, t, n) {
                                for (var r = "no-" + t; e; ) {
                                    var i = e.classList;
                                    if (i.contains(t)) return !0;
                                    if (i.contains(r)) return !1;
                                    e = e.parentElement;
                                }
                                return !!n;
                            },
                        },
                        languages: {
                            plain: r,
                            plaintext: r,
                            text: r,
                            txt: r,
                            extend: function (e, t) {
                                var n = i.util.clone(i.languages[e]);
                                for (var r in t) n[r] = t[r];
                                return n;
                            },
                            insertBefore: function (e, t, n, r) {
                                var o = (r = r || i.languages)[e],
                                    s = {};
                                for (var a in o)
                                    if (o.hasOwnProperty(a)) {
                                        if (a == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                        n.hasOwnProperty(a) || (s[a] = o[a]);
                                    }
                                var c = r[e];
                                return (
                                    (r[e] = s),
                                    i.languages.DFS(i.languages, function (t, n) {
                                        n === c && t != e && (this[t] = s);
                                    }),
                                    s
                                );
                            },
                            DFS: function e(t, n, r, o) {
                                o = o || {};
                                var s = i.util.objId;
                                for (var a in t)
                                    if (t.hasOwnProperty(a)) {
                                        n.call(t, a, t[a], r || a);
                                        var l = t[a],
                                            c = i.util.type(l);
                                        "Object" !== c || o[s(l)] ? "Array" !== c || o[s(l)] || ((o[s(l)] = !0), e(l, n, a, o)) : ((o[s(l)] = !0), e(l, n, null, o));
                                    }
                            },
                        },
                        plugins: {},
                        highlightAll: function (e, t) {
                            i.highlightAllUnder(document, e, t);
                        },
                        highlightAllUnder: function (e, t, n) {
                            var r = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                            i.hooks.run("before-highlightall", r), (r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector))), i.hooks.run("before-all-elements-highlight", r);
                            for (var o, s = 0; (o = r.elements[s++]); ) i.highlightElement(o, !0 === t, r.callback);
                        },
                        highlightElement: function (t, n, r) {
                            var o = i.util.getLanguage(t),
                                s = i.languages[o];
                            i.util.setLanguage(t, o);
                            var a = t.parentElement;
                            a && "pre" === a.nodeName.toLowerCase() && i.util.setLanguage(a, o);
                            var l = { element: t, language: o, grammar: s, code: t.textContent };
                            function c(e) {
                                (l.highlightedCode = e), i.hooks.run("before-insert", l), (l.element.innerHTML = l.highlightedCode), i.hooks.run("after-highlight", l), i.hooks.run("complete", l), r && r.call(l.element);
                            }
                            if ((i.hooks.run("before-sanity-check", l), (a = l.element.parentElement) && "pre" === a.nodeName.toLowerCase() && !a.hasAttribute("tabindex") && a.setAttribute("tabindex", "0"), !l.code))
                                return i.hooks.run("complete", l), void (r && r.call(l.element));
                            if ((i.hooks.run("before-highlight", l), l.grammar))
                                if (n && e.Worker) {
                                    var u = new Worker(i.filename);
                                    (u.onmessage = function (e) {
                                        c(e.data);
                                    }),
                                        u.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 }));
                                } else c(i.highlight(l.code, l.grammar, l.language));
                            else c(i.util.encode(l.code));
                        },
                        highlight: function (e, t, n) {
                            var r = { code: e, grammar: t, language: n };
                            if ((i.hooks.run("before-tokenize", r), !r.grammar)) throw new Error('The language "' + r.language + '" has no grammar.');
                            return (r.tokens = i.tokenize(r.code, r.grammar)), i.hooks.run("after-tokenize", r), o.stringify(i.util.encode(r.tokens), r.language);
                        },
                        tokenize: function (e, t) {
                            var n = t.rest;
                            if (n) {
                                for (var r in n) t[r] = n[r];
                                delete t.rest;
                            }
                            var i = new l();
                            return (
                                c(i, i.head, e),
                                a(e, i, t, i.head, 0),
                                (function (e) {
                                    var t = [],
                                        n = e.head.next;
                                    for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                                    return t;
                                })(i)
                            );
                        },
                        hooks: {
                            all: {},
                            add: function (e, t) {
                                var n = i.hooks.all;
                                (n[e] = n[e] || []), n[e].push(t);
                            },
                            run: function (e, t) {
                                var n = i.hooks.all[e];
                                if (n && n.length) for (var r, o = 0; (r = n[o++]); ) r(t);
                            },
                        },
                        Token: o,
                    };
                function o(e, t, n, r) {
                    (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (r || "").length);
                }
                function s(e, t, n, r) {
                    e.lastIndex = t;
                    var i = e.exec(n);
                    if (i && r && i[1]) {
                        var o = i[1].length;
                        (i.index += o), (i[0] = i[0].slice(o));
                    }
                    return i;
                }
                function a(e, t, n, r, l, p) {
                    for (var d in n)
                        if (n.hasOwnProperty(d) && n[d]) {
                            var g = n[d];
                            g = Array.isArray(g) ? g : [g];
                            for (var f = 0; f < g.length; ++f) {
                                if (p && p.cause == d + "," + f) return;
                                var h = g[f],
                                    m = h.inside,
                                    b = !!h.lookbehind,
                                    y = !!h.greedy,
                                    A = h.alias;
                                if (y && !h.pattern.global) {
                                    var x = h.pattern.toString().match(/[imsuy]*$/)[0];
                                    h.pattern = RegExp(h.pattern.source, x + "g");
                                }
                                for (var v = h.pattern || h, w = r.next, k = l; w !== t.tail && !(p && k >= p.reach); k += w.value.length, w = w.next) {
                                    var E = w.value;
                                    if (t.length > e.length) return;
                                    if (!(E instanceof o)) {
                                        var M,
                                            C = 1;
                                        if (y) {
                                            if (!(M = s(v, k, e, b)) || M.index >= e.length) break;
                                            var I = M.index,
                                                D = M.index + M[0].length,
                                                _ = k;
                                            for (_ += w.value.length; I >= _; ) _ += (w = w.next).value.length;
                                            if (((k = _ -= w.value.length), w.value instanceof o)) continue;
                                            for (var N = w; N !== t.tail && (_ < D || "string" == typeof N.value); N = N.next) C++, (_ += N.value.length);
                                            C--, (E = e.slice(k, _)), (M.index -= k);
                                        } else if (!(M = s(v, 0, E, b))) continue;
                                        I = M.index;
                                        var T = M[0],
                                            S = E.slice(0, I),
                                            O = E.slice(I + T.length),
                                            L = k + E.length;
                                        p && L > p.reach && (p.reach = L);
                                        var z = w.prev;
                                        if ((S && ((z = c(t, z, S)), (k += S.length)), u(t, z, C), (w = c(t, z, new o(d, m ? i.tokenize(T, m) : T, A, T))), O && c(t, w, O), C > 1)) {
                                            var j = { cause: d + "," + f, reach: L };
                                            a(e, t, n, w.prev, k, j), p && j.reach > p.reach && (p.reach = j.reach);
                                        }
                                    }
                                }
                            }
                        }
                }
                function l() {
                    var e = { value: null, prev: null, next: null },
                        t = { value: null, prev: e, next: null };
                    (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
                }
                function c(e, t, n) {
                    var r = t.next,
                        i = { value: n, prev: t, next: r };
                    return (t.next = i), (r.prev = i), e.length++, i;
                }
                function u(e, t, n) {
                    for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
                    (t.next = r), (r.prev = t), (e.length -= i);
                }
                if (
                    ((e.Prism = i),
                    (o.stringify = function e(t, n) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) {
                            var r = "";
                            return (
                                t.forEach(function (t) {
                                    r += e(t, n);
                                }),
                                r
                            );
                        }
                        var o = { type: t.type, content: e(t.content, n), tag: "span", classes: ["token", t.type], attributes: {}, language: n },
                            s = t.alias;
                        s && (Array.isArray(s) ? Array.prototype.push.apply(o.classes, s) : o.classes.push(s)), i.hooks.run("wrap", o);
                        var a = "";
                        for (var l in o.attributes) a += " " + l + '="' + (o.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + a + ">" + o.content + "</" + o.tag + ">";
                    }),
                    !e.document)
                )
                    return e.addEventListener
                        ? (i.disableWorkerMessageHandler ||
                              e.addEventListener(
                                  "message",
                                  function (t) {
                                      var n = JSON.parse(t.data),
                                          r = n.language,
                                          o = n.code,
                                          s = n.immediateClose;
                                      e.postMessage(i.highlight(o, i.languages[r], r)), s && e.close();
                                  },
                                  !1
                              ),
                          i)
                        : i;
                var p = i.util.currentScript();
                function d() {
                    i.manual || i.highlightAll();
                }
                if ((p && ((i.filename = p.src), p.hasAttribute("data-manual") && (i.manual = !0)), !i.manual)) {
                    var g = document.readyState;
                    "loading" === g || ("interactive" === g && p && p.defer) ? document.addEventListener("DOMContentLoaded", d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16);
                }
                return i;
            })("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            e.exports && (e.exports = r), void 0 !== n.g && (n.g.Prism = r);
        },
        26938: () => {
            !(function (e) {
                var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                    n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
                        return t.source;
                    });
                (e.languages.cpp = e.languages.extend("c", {
                    "class-name": [
                        {
                            pattern: RegExp(
                                /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
                                    return t.source;
                                })
                            ),
                            lookbehind: !0,
                        },
                        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
                        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
                        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
                    ],
                    keyword: t,
                    number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 },
                    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                    boolean: /\b(?:false|true)\b/,
                })),
                    e.languages.insertBefore("cpp", "string", {
                        module: {
                            pattern: RegExp(
                                /(\b(?:import|module)\s+)/.source +
                                    "(?:" +
                                    /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                                    "|" +
                                    /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
                                        return n;
                                    }) +
                                    ")"
                            ),
                            lookbehind: !0,
                            greedy: !0,
                            inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
                        },
                        "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 },
                    }),
                    e.languages.insertBefore("cpp", "keyword", {
                        "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } },
                    }),
                    e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }),
                    e.languages.insertBefore("cpp", "class-name", {
                        "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) },
                    }),
                    e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
            })(Prism);
        },
        30099: () => {
            !(function (e) {
                function t(e, t) {
                    return e.replace(/<<(\d+)>>/g, function (e, n) {
                        return "(?:" + t[+n] + ")";
                    });
                }
                function n(e, n, r) {
                    return RegExp(t(e, n), r || "");
                }
                function r(e, t) {
                    for (var n = 0; n < t; n++)
                        e = e.replace(/<<self>>/g, function () {
                            return "(?:" + e + ")";
                        });
                    return e.replace(/<<self>>/g, "[^\\s\\S]");
                }
                var i = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
                    o = "class enum interface record struct",
                    s =
                        "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
                    a =
                        "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
                function l(e) {
                    return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
                }
                var c = l(o),
                    u = RegExp(l(i + " " + o + " " + s + " " + a)),
                    p = l(o + " " + s + " " + a),
                    d = l(i + " " + o + " " + a),
                    g = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
                    f = r(/\((?:[^()]|<<self>>)*\)/.source, 2),
                    h = /@?\b[A-Za-z_]\w*\b/.source,
                    m = t(/<<0>>(?:\s*<<1>>)?/.source, [h, g]),
                    b = t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [p, m]),
                    y = /\[\s*(?:,\s*)*\]/.source,
                    A = t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [b, y]),
                    x = t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [g, f, y]),
                    v = t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [x]),
                    w = t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [v, b, y]),
                    k = { keyword: u, punctuation: /[<>()?,.:[\]]/ },
                    E = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
                    M = /"(?:\\.|[^\\"\r\n])*"/.source,
                    C = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
                (e.languages.csharp = e.languages.extend("clike", {
                    string: [
                        { pattern: n(/(^|[^$\\])<<0>>/.source, [C]), lookbehind: !0, greedy: !0 },
                        { pattern: n(/(^|[^@$\\])<<0>>/.source, [M]), lookbehind: !0, greedy: !0 },
                    ],
                    "class-name": [
                        { pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [b]), lookbehind: !0, inside: k },
                        { pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [h, w]), lookbehind: !0, inside: k },
                        { pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [h]), lookbehind: !0 },
                        { pattern: n(/(\b<<0>>\s+)<<1>>/.source, [c, m]), lookbehind: !0, inside: k },
                        { pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [b]), lookbehind: !0, inside: k },
                        { pattern: n(/(\bwhere\s+)<<0>>/.source, [h]), lookbehind: !0 },
                        { pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [A]), lookbehind: !0, inside: k },
                        { pattern: n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [w, d, h]), inside: k },
                    ],
                    keyword: u,
                    number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
                    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
                    punctuation: /\?\.?|::|[{}[\];(),.:]/,
                })),
                    e.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }),
                    e.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [h]), lookbehind: !0, alias: "punctuation" } }),
                    e.languages.insertBefore("csharp", "class-name", {
                        namespace: { pattern: n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [h]), lookbehind: !0, inside: { punctuation: /\./ } },
                        "type-expression": { pattern: n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [f]), lookbehind: !0, alias: "class-name", inside: k },
                        "return-type": { pattern: n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [w, b]), inside: k, alias: "class-name" },
                        "constructor-invocation": { pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [w]), lookbehind: !0, inside: k, alias: "class-name" },
                        "generic-method": { pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [h, g]), inside: { function: n(/^<<0>>/.source, [h]), generic: { pattern: RegExp(g), alias: "class-name", inside: k } } },
                        "type-list": {
                            pattern: n(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [
                                c,
                                m,
                                h,
                                w,
                                u.source,
                                f,
                                /\bnew\s*\(\s*\)/.source,
                            ]),
                            lookbehind: !0,
                            inside: {
                                "record-arguments": { pattern: n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [m, f]), lookbehind: !0, greedy: !0, inside: e.languages.csharp },
                                keyword: u,
                                "class-name": { pattern: RegExp(w), greedy: !0, inside: k },
                                punctuation: /[,()]/,
                            },
                        },
                        preprocessor: {
                            pattern: /(^[\t ]*)#.*/m,
                            lookbehind: !0,
                            alias: "property",
                            inside: { directive: { pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/, lookbehind: !0, alias: "keyword" } },
                        },
                    });
                var I = M + "|" + E,
                    D = t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [I]),
                    _ = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [D]), 2),
                    N = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,
                    T = t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [b, _]);
                e.languages.insertBefore("csharp", "class-name", {
                    attribute: {
                        pattern: n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [N, T]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            target: { pattern: n(/^<<0>>(?=\s*:)/.source, [N]), alias: "keyword" },
                            "attribute-arguments": { pattern: n(/\(<<0>>*\)/.source, [_]), inside: e.languages.csharp },
                            "class-name": { pattern: RegExp(b), inside: { punctuation: /\./ } },
                            punctuation: /[:,]/,
                        },
                    },
                });
                var S = /:[^}\r\n]+/.source,
                    O = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [D]), 2),
                    L = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [O, S]),
                    z = r(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [I]), 2),
                    j = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [z, S]);
                function R(t, r) {
                    return {
                        interpolation: {
                            pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [t]),
                            lookbehind: !0,
                            inside: {
                                "format-string": { pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [r, S]), lookbehind: !0, inside: { punctuation: /^:/ } },
                                punctuation: /^\{|\}$/,
                                expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: e.languages.csharp },
                            },
                        },
                        string: /[\s\S]+/,
                    };
                }
                e.languages.insertBefore("csharp", "string", {
                    "interpolation-string": [
                        { pattern: n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [L]), lookbehind: !0, greedy: !0, inside: R(L, O) },
                        { pattern: n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [j]), lookbehind: !0, greedy: !0, inside: R(j, z) },
                    ],
                    char: { pattern: RegExp(E), greedy: !0 },
                }),
                    (e.languages.dotnet = e.languages.cs = e.languages.csharp);
            })(Prism);
        },
        71671: () => {
            !(function (e) {
                var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                (e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" },
                            keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
                        },
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: !0,
                        inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } },
                    },
                    selector: { pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"), lookbehind: !0 },
                    string: { pattern: t, greedy: !0 },
                    property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 },
                    important: /!important\b/i,
                    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
                    punctuation: /[(){};:,]/,
                }),
                    (e.languages.css.atrule.inside.rest = e.languages.css);
                var n = e.languages.markup;
                n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
            })(Prism);
        },
        51493: () => {
            !(function (e) {
                var t = [
                        /\b(?:async|sync|yield)\*/,
                        /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/,
                    ],
                    n = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
                    r = { pattern: RegExp(n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source), lookbehind: !0, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } } } };
                (e.languages.dart = e.languages.extend("clike", {
                    "class-name": [r, { pattern: RegExp(n + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source), lookbehind: !0, inside: r.inside }],
                    keyword: t,
                    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/,
                })),
                    e.languages.insertBefore("dart", "string", {
                        "string-literal": {
                            pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
                            greedy: !0,
                            inside: {
                                interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/, lookbehind: !0, inside: { punctuation: /^\$\{?|\}$/, expression: { pattern: /[\s\S]+/, inside: e.languages.dart } } },
                                string: /[\s\S]+/,
                            },
                        },
                        string: void 0,
                    }),
                    e.languages.insertBefore("dart", "class-name", { metadata: { pattern: /@\w+/, alias: "function" } }),
                    e.languages.insertBefore("dart", "class-name", {
                        generics: { pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/, inside: { "class-name": r, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/ } },
                    });
            })(Prism);
        },
        69502: () => {
            !(function (e) {
                var t = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,
                    n = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, function () {
                        return t;
                    }),
                    r = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,
                    i = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, function () {
                        return r;
                    }),
                    o = { pattern: RegExp(r), greedy: !0 },
                    s = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
                function a(e, t) {
                    return (
                        (e = e
                            .replace(/<OPT>/g, function () {
                                return i;
                            })
                            .replace(/<SP>/g, function () {
                                return n;
                            })),
                        RegExp(e, t)
                    );
                }
                (e.languages.docker = {
                    instruction: {
                        pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            options: {
                                pattern: a(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
                                lookbehind: !0,
                                greedy: !0,
                                inside: { property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 }, string: [o, { pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: !0 }], operator: /\\$/m, punctuation: /=/ },
                            },
                            keyword: [
                                { pattern: a(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"), lookbehind: !0, greedy: !0 },
                                { pattern: a(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"), lookbehind: !0, greedy: !0 },
                                { pattern: a(/(^ONBUILD<SP>)\w+/.source, "i"), lookbehind: !0, greedy: !0 },
                                { pattern: /^\w+/, greedy: !0 },
                            ],
                            comment: s,
                            string: o,
                            variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                            operator: /\\$/m,
                        },
                    },
                    comment: s,
                }),
                    (e.languages.dockerfile = e.languages.docker);
            })(Prism);
        },
        8515: () => {
            !(function (e) {
                (e.languages.ejs = { delimiter: { pattern: /^<%[-_=]?|[-_]?%>$/, alias: "punctuation" }, comment: /^#[\s\S]*/, "language-javascript": { pattern: /[\s\S]+/, inside: e.languages.javascript } }),
                    e.hooks.add("before-tokenize", function (t) {
                        e.languages["markup-templating"].buildPlaceholders(t, "ejs", /<%(?!%)[\s\S]+?%>/g);
                    }),
                    e.hooks.add("after-tokenize", function (t) {
                        e.languages["markup-templating"].tokenizePlaceholders(t, "ejs");
                    }),
                    (e.languages.eta = e.languages.ejs);
            })(Prism);
        },
        25307: () => {
            (Prism.languages.go = Prism.languages.extend("clike", {
                string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 },
                keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
                boolean: /\b(?:_|false|iota|nil|true)\b/,
                number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
                operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
                builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
            })),
                Prism.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }),
                delete Prism.languages.go["class-name"];
        },
        76632: () => {
            (Prism.languages.graphql = {
                comment: /#.*/,
                description: {
                    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                    greedy: !0,
                    alias: "string",
                    inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: Prism.languages.markdown } },
                },
                string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
                number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                boolean: /\b(?:false|true)\b/,
                variable: /\$[a-z_]\w*/i,
                directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
                "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 },
                "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
                scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
                constant: /\b[A-Z][A-Z_\d]*\b/,
                "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 },
                fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" },
                "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" },
                "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" },
                keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
                operator: /[!=|&]|\.{3}/,
                "property-query": /\w+(?=\s*\()/,
                object: /\w+(?=\s*\{)/,
                punctuation: /[!(){}\[\]:=,]/,
                property: /\w+/,
            }),
                Prism.hooks.add("after-tokenize", function (e) {
                    if ("graphql" === e.language)
                        for (
                            var t = e.tokens.filter(function (e) {
                                    return "string" != typeof e && "comment" !== e.type && "scalar" !== e.type;
                                }),
                                n = 0;
                            n < t.length;

                        ) {
                            var r = t[n++];
                            if ("keyword" === r.type && "mutation" === r.content) {
                                var i = [];
                                if (p(["definition-mutation", "punctuation"]) && "(" === u(1).content) {
                                    n += 2;
                                    var o = d(/^\($/, /^\)$/);
                                    if (-1 === o) continue;
                                    for (; n < o; n++) {
                                        var s = u(0);
                                        "variable" === s.type && (g(s, "variable-input"), i.push(s.content));
                                    }
                                    n = o + 1;
                                }
                                if (p(["punctuation", "property-query"]) && "{" === u(0).content && (n++, g(u(0), "property-mutation"), i.length > 0)) {
                                    var a = d(/^\{$/, /^\}$/);
                                    if (-1 === a) continue;
                                    for (var l = n; l < a; l++) {
                                        var c = t[l];
                                        "variable" === c.type && i.indexOf(c.content) >= 0 && g(c, "variable-input");
                                    }
                                }
                            }
                        }
                    function u(e) {
                        return t[n + e];
                    }
                    function p(e, t) {
                        t = t || 0;
                        for (var n = 0; n < e.length; n++) {
                            var r = u(n + t);
                            if (!r || r.type !== e[n]) return !1;
                        }
                        return !0;
                    }
                    function d(e, r) {
                        for (var i = 1, o = n; o < t.length; o++) {
                            var s = t[o],
                                a = s.content;
                            if ("punctuation" === s.type && "string" == typeof a)
                                if (e.test(a)) i++;
                                else if (r.test(a) && 0 === --i) return o;
                        }
                        return -1;
                    }
                    function g(e, t) {
                        var n = e.alias;
                        n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []), n.push(t);
                    }
                });
        },
        30389: () => {
            (Prism.languages.haskell = {
                comment: { pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m, lookbehind: !0 },
                char: {
                    pattern: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
                    alias: "string",
                },
                string: { pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/, greedy: !0 },
                keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
                "import-statement": {
                    pattern: /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
                    lookbehind: !0,
                    inside: { keyword: /\b(?:as|hiding|import|qualified)\b/, punctuation: /\./ },
                },
                builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
                number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
                operator: [{ pattern: /`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/, greedy: !0 }, { pattern: /(\s)\.(?=\s)/, lookbehind: !0 }, /[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/],
                hvariable: { pattern: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/, inside: { punctuation: /\./ } },
                constant: { pattern: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/, inside: { punctuation: /\./ } },
                punctuation: /[{}[\];(),.:]/,
            }),
                (Prism.languages.hs = Prism.languages.haskell);
        },
        55033: () => {
            !(function (e) {
                var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
                    n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
                    r = {
                        pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
                        lookbehind: !0,
                        inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } }, punctuation: /\./ },
                    };
                (e.languages.java = e.languages.extend("clike", {
                    string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/, lookbehind: !0, greedy: !0 },
                    "class-name": [
                        r,
                        { pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source), lookbehind: !0, inside: r.inside },
                        { pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source), lookbehind: !0, inside: r.inside },
                    ],
                    keyword: t,
                    function: [e.languages.clike.function, { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 }],
                    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
                    operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: !0 },
                    constant: /\b[A-Z][A-Z_\d]+\b/,
                })),
                    e.languages.insertBefore("java", "string", {
                        "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: !0, alias: "string" },
                        char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 },
                    }),
                    e.languages.insertBefore("java", "class-name", {
                        annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: !0, alias: "punctuation" },
                        generics: { pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/, inside: { "class-name": r, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/ } },
                        import: [
                            { pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source), lookbehind: !0, inside: { namespace: r.inside.namespace, punctuation: /\./, operator: /\*/, "class-name": /\w+/ } },
                            {
                                pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
                                lookbehind: !0,
                                alias: "static",
                                inside: { namespace: r.inside.namespace, static: /\b\w+$/, punctuation: /\./, operator: /\*/, "class-name": /\w+/ },
                            },
                        ],
                        namespace: {
                            pattern: RegExp(
                                /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function () {
                                    return t.source;
                                })
                            ),
                            lookbehind: !0,
                            inside: { punctuation: /\./ },
                        },
                    });
            })(Prism);
        },
        89566: () => {
            (Prism.languages.javascript = Prism.languages.extend("clike", {
                "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }],
                keyword: [
                    { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
                    {
                        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                        lookbehind: !0,
                    },
                ],
                function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: {
                    pattern: RegExp(
                        /(^|[^\w$])/.source +
                            "(?:" +
                            /NaN|Infinity/.source +
                            "|" +
                            /0[bB][01]+(?:_[01]+)*n?/.source +
                            "|" +
                            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                            "|" +
                            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                            "|" +
                            /\d+(?:_\d+)*n/.source +
                            "|" +
                            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source +
                            ")" +
                            /(?![\w$])/.source
                    ),
                    lookbehind: !0,
                },
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
            })),
                (Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
                Prism.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern: RegExp(
                            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
                                /\//.source +
                                "(?:" +
                                /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
                                "|" +
                                /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
                                ")" +
                                /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ },
                    },
                    "function-variable": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: "function",
                    },
                    parameter: [
                        { pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript },
                        { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: Prism.languages.javascript },
                        { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript },
                        {
                            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                            lookbehind: !0,
                            inside: Prism.languages.javascript,
                        },
                    ],
                    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
                }),
                Prism.languages.insertBefore("javascript", "string", {
                    hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
                    "template-string": {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: !0,
                                inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript },
                            },
                            string: /[\s\S]+/,
                        },
                    },
                    "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" },
                }),
                Prism.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }),
                Prism.languages.markup &&
                    (Prism.languages.markup.tag.addInlined("script", "javascript"),
                    Prism.languages.markup.tag.addAttribute(
                        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                            .source,
                        "javascript"
                    )),
                (Prism.languages.js = Prism.languages.javascript);
        },
        25418: () => {
            (Prism.languages.json = {
                property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
                string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
                comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
                number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                punctuation: /[{}[\],]/,
                operator: /:/,
                boolean: /\b(?:false|true)\b/,
                null: { pattern: /\bnull\b/, alias: "keyword" },
            }),
                (Prism.languages.webmanifest = Prism.languages.json);
        },
        53672: () => {
            !(function (e) {
                var t = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
                e.languages.json5 = e.languages.extend("json", {
                    property: [
                        { pattern: RegExp(t.source + "(?=\\s*:)"), greedy: !0 },
                        { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/, alias: "unquoted" },
                    ],
                    string: { pattern: t, greedy: !0 },
                    number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
                });
            })(Prism);
        },
        57026: () => {
            !(function (e) {
                var t = e.util.clone(e.languages.javascript),
                    n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                    r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                    i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
                function o(e, t) {
                    return (
                        (e = e
                            .replace(/<S>/g, function () {
                                return n;
                            })
                            .replace(/<BRACES>/g, function () {
                                return r;
                            })
                            .replace(/<SPREAD>/g, function () {
                                return i;
                            })),
                        RegExp(e, t)
                    );
                }
                (i = o(i).source),
                    (e.languages.jsx = e.languages.extend("markup", t)),
                    (e.languages.jsx.tag.pattern = o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source)),
                    (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
                    (e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
                    (e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
                    (e.languages.jsx.tag.inside.comment = t.comment),
                    e.languages.insertBefore("inside", "attr-name", { spread: { pattern: o(/<SPREAD>/.source), inside: e.languages.jsx } }, e.languages.jsx.tag),
                    e.languages.insertBefore(
                        "inside",
                        "special-attr",
                        { script: { pattern: o(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: e.languages.jsx } } },
                        e.languages.jsx.tag
                    );
                var s = function (e) {
                        return e ? ("string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(s).join("")) : "";
                    },
                    a = function (t) {
                        for (var n = [], r = 0; r < t.length; r++) {
                            var i = t[r],
                                o = !1;
                            if (
                                ("string" != typeof i &&
                                    ("tag" === i.type && i.content[0] && "tag" === i.content[0].type
                                        ? "</" === i.content[0].content[0].content
                                            ? n.length > 0 && n[n.length - 1].tagName === s(i.content[0].content[1]) && n.pop()
                                            : "/>" === i.content[i.content.length - 1].content || n.push({ tagName: s(i.content[0].content[1]), openedBraces: 0 })
                                        : n.length > 0 && "punctuation" === i.type && "{" === i.content
                                        ? n[n.length - 1].openedBraces++
                                        : n.length > 0 && n[n.length - 1].openedBraces > 0 && "punctuation" === i.type && "}" === i.content
                                        ? n[n.length - 1].openedBraces--
                                        : (o = !0)),
                                (o || "string" == typeof i) && n.length > 0 && 0 === n[n.length - 1].openedBraces)
                            ) {
                                var l = s(i);
                                r < t.length - 1 && ("string" == typeof t[r + 1] || "plain-text" === t[r + 1].type) && ((l += s(t[r + 1])), t.splice(r + 1, 1)),
                                    r > 0 && ("string" == typeof t[r - 1] || "plain-text" === t[r - 1].type) && ((l = s(t[r - 1]) + l), t.splice(r - 1, 1), r--),
                                    (t[r] = new e.Token("plain-text", l, null, l));
                            }
                            i.content && "string" != typeof i.content && a(i.content);
                        }
                    };
                e.hooks.add("after-tokenize", function (e) {
                    ("jsx" !== e.language && "tsx" !== e.language) || a(e.tokens);
                });
            })(Prism);
        },
        9581: () => {
            !(function (e) {
                (e.languages.kotlin = e.languages.extend("clike", {
                    keyword: {
                        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                        lookbehind: !0,
                    },
                    function: [
                        { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
                        { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 },
                    ],
                    number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
                    operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
                })),
                    delete e.languages.kotlin["class-name"];
                var t = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
                e.languages.insertBefore("kotlin", "string", {
                    "string-literal": [
                        { pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: t }, string: /[\s\S]+/ } },
                        {
                            pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                            alias: "singleline",
                            inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: !0, inside: t }, string: /[\s\S]+/ },
                        },
                    ],
                    char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 },
                }),
                    delete e.languages.kotlin.string,
                    e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }),
                    e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }),
                    (e.languages.kt = e.languages.kotlin),
                    (e.languages.kts = e.languages.kotlin);
            })(Prism);
        },
        83935: () => {
            (Prism.languages.less = Prism.languages.extend("css", {
                comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
                atrule: { pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/, inside: { punctuation: /[:()]/ } },
                selector: { pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/, inside: { variable: /@+[\w-]+/ } },
                property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
                operator: /[+\-*\/]/,
            })),
                Prism.languages.insertBefore("less", "property", {
                    variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/],
                    "mixin-usage": { pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/, lookbehind: !0, alias: "function" },
                });
        },
        10087: () => {
            !(function (e) {
                function t(e) {
                    return RegExp(/(\()/.source + "(?:" + e + ")" + /(?=[\s\)])/.source);
                }
                function n(e) {
                    return RegExp(/([\s([])/.source + "(?:" + e + ")" + /(?=[\s)])/.source);
                }
                var r = /(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,
                    i = "&" + r,
                    o = "(\\()",
                    s = /(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,
                    a = {
                        heading: { pattern: /;;;.*/, alias: ["comment", "title"] },
                        comment: /;.*/,
                        string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0, inside: { argument: /[-A-Z]+(?=[.,\s])/, symbol: RegExp("`" + r + "'") } },
                        "quoted-symbol": { pattern: RegExp("#?'" + r), alias: ["variable", "symbol"] },
                        "lisp-property": { pattern: RegExp(":" + r), alias: "property" },
                        splice: { pattern: RegExp(",@?" + r), alias: ["symbol", "variable"] },
                        keyword: [
                            { pattern: RegExp("(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)"), lookbehind: !0 },
                            { pattern: RegExp("(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)"), lookbehind: !0 },
                        ],
                        declare: { pattern: t(/declare/.source), lookbehind: !0, alias: "keyword" },
                        interactive: { pattern: t(/interactive/.source), lookbehind: !0, alias: "keyword" },
                        boolean: { pattern: n(/nil|t/.source), lookbehind: !0 },
                        number: { pattern: n(/[-+]?\d+(?:\.\d*)?/.source), lookbehind: !0 },
                        defvar: { pattern: RegExp("(\\()def(?:const|custom|group|var)\\s+" + r), lookbehind: !0, inside: { keyword: /^def[a-z]+/, variable: RegExp(r) } },
                        defun: {
                            pattern: RegExp(o + /(?:cl-)?(?:defmacro|defun\*?)\s+/.source + r + /\s+\(/.source + s + /\)/.source),
                            lookbehind: !0,
                            greedy: !0,
                            inside: { keyword: /^(?:cl-)?def\S+/, arguments: null, function: { pattern: RegExp("(^\\s)" + r), lookbehind: !0 }, punctuation: /[()]/ },
                        },
                        lambda: { pattern: RegExp("(\\()lambda\\s+\\(\\s*(?:&?" + r + "(?:\\s+&?" + r + ")*\\s*)?\\)"), lookbehind: !0, greedy: !0, inside: { keyword: /^lambda/, arguments: null, punctuation: /[()]/ } },
                        car: { pattern: RegExp(o + r), lookbehind: !0 },
                        punctuation: [/(?:['`,]?\(|[)\[\]])/, { pattern: /(\s)\.(?=\s)/, lookbehind: !0 }],
                    },
                    l = {
                        "lisp-marker": RegExp(i),
                        varform: { pattern: RegExp(/\(/.source + r + /\s+(?=\S)/.source + s + /\)/.source), inside: a },
                        argument: { pattern: RegExp(/(^|[\s(])/.source + r), lookbehind: !0, alias: "variable" },
                        rest: a,
                    },
                    c = "\\S+(?:\\s+\\S+)*",
                    u = {
                        pattern: RegExp(o + s + "(?=\\))"),
                        lookbehind: !0,
                        inside: {
                            "rest-vars": { pattern: RegExp("&(?:body|rest)\\s+" + c), inside: l },
                            "other-marker-vars": { pattern: RegExp("&(?:aux|optional)\\s+" + c), inside: l },
                            keys: { pattern: RegExp("&key\\s+" + c + "(?:\\s+&allow-other-keys)?"), inside: l },
                            argument: { pattern: RegExp(r), alias: "variable" },
                            punctuation: /[()]/,
                        },
                    };
                (a.lambda.inside.arguments = u),
                    (a.defun.inside.arguments = e.util.clone(u)),
                    (a.defun.inside.arguments.inside.sublist = u),
                    (e.languages.lisp = a),
                    (e.languages.elisp = a),
                    (e.languages.emacs = a),
                    (e.languages["emacs-lisp"] = a);
            })(Prism);
        },
        14374: () => {
            Prism.languages.makefile = {
                comment: { pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: !0 },
                string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                "builtin-target": { pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/, alias: "builtin" },
                target: { pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m, alias: "symbol", inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ } },
                variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
                keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
                function: {
                    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
                    lookbehind: !0,
                },
                operator: /(?:::|[?:+!])?=|[|@]/,
                punctuation: /[:;(){}]/,
            };
        },
        31965: () => {
            !(function (e) {
                var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
                function n(e) {
                    return (
                        (e = e.replace(/<inner>/g, function () {
                            return t;
                        })),
                        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
                    );
                }
                var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                    i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
                        return r;
                    }),
                    o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
                (e.languages.markdown = e.languages.extend("markup", {})),
                    e.languages.insertBefore("markdown", "prolog", {
                        "front-matter-block": {
                            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: e.languages.yaml } },
                        },
                        blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
                        table: {
                            pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
                            inside: {
                                "table-data-rows": { pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(r), inside: e.languages.markdown }, punctuation: /\|/ } },
                                "table-line": { pattern: RegExp("^(" + i + ")" + o + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } },
                                "table-header-row": { pattern: RegExp("^" + i + "$"), inside: { "table-header": { pattern: RegExp(r), alias: "important", inside: e.languages.markdown }, punctuation: /\|/ } },
                            },
                        },
                        code: [
                            { pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" },
                            {
                                pattern: /^```[\s\S]*?^```$/m,
                                greedy: !0,
                                inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ },
                            },
                        ],
                        title: [
                            { pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } },
                            { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } },
                        ],
                        hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" },
                        list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" },
                        "url-reference": {
                            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                            inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ },
                            alias: "url",
                        },
                        bold: {
                            pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
                            lookbehind: !0,
                            greedy: !0,
                            inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ },
                        },
                        italic: {
                            pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
                            lookbehind: !0,
                            greedy: !0,
                            inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ },
                        },
                        strike: { pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } },
                        "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] },
                        url: {
                            pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
                            lookbehind: !0,
                            greedy: !0,
                            inside: {
                                operator: /^!/,
                                content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
                                variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                                url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                                string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
                            },
                        },
                    }),
                    ["url", "bold", "italic", "strike"].forEach(function (t) {
                        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (n) {
                            t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n]);
                        });
                    }),
                    e.hooks.add("after-tokenize", function (e) {
                        ("markdown" !== e.language && "md" !== e.language) ||
                            (function e(t) {
                                if (t && "string" != typeof t)
                                    for (var n = 0, r = t.length; n < r; n++) {
                                        var i = t[n];
                                        if ("code" === i.type) {
                                            var o = i.content[1],
                                                s = i.content[3];
                                            if (o && s && "code-language" === o.type && "code-block" === s.type && "string" == typeof o.content) {
                                                var a = o.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                                                    l = "language-" + (a = (/[a-z][\w-]*/i.exec(a) || [""])[0].toLowerCase());
                                                s.alias ? ("string" == typeof s.alias ? (s.alias = [s.alias, l]) : s.alias.push(l)) : (s.alias = [l]);
                                            }
                                        } else e(i.content);
                                    }
                            })(e.tokens);
                    }),
                    e.hooks.add("wrap", function (t) {
                        if ("code-block" === t.type) {
                            for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
                                var o = t.classes[r],
                                    c = /language-(.+)/.exec(o);
                                if (c) {
                                    n = c[1];
                                    break;
                                }
                            }
                            var u,
                                p = e.languages[n];
                            if (p)
                                t.content = e.highlight(
                                    ((u = t.content),
                                    u.replace(s, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
                                        var n;
                                        if ("#" === (t = t.toLowerCase())[0]) return (n = "x" === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1))), l(n);
                                        var r = a[t];
                                        return r || e;
                                    })),
                                    p,
                                    n
                                );
                            else if (n && "none" !== n && e.plugins.autoloader) {
                                var d = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
                                (t.attributes.id = d),
                                    e.plugins.autoloader.loadLanguages(n, function () {
                                        var t = document.getElementById(d);
                                        t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n));
                                    });
                            }
                        }
                    });
                var s = RegExp(e.languages.markup.tag.pattern.source, "gi"),
                    a = { amp: "&", lt: "<", gt: ">", quot: '"' },
                    l = String.fromCodePoint || String.fromCharCode;
                e.languages.md = e.languages.markdown;
            })(Prism);
        },
        98028: () => {
            !(function (e) {
                function t(e, t) {
                    return "___" + e.toUpperCase() + t + "___";
                }
                Object.defineProperties((e.languages["markup-templating"] = {}), {
                    buildPlaceholders: {
                        value: function (n, r, i, o) {
                            if (n.language === r) {
                                var s = (n.tokenStack = []);
                                (n.code = n.code.replace(i, function (e) {
                                    if ("function" == typeof o && !o(e)) return e;
                                    for (var i, a = s.length; -1 !== n.code.indexOf((i = t(r, a))); ) ++a;
                                    return (s[a] = e), i;
                                })),
                                    (n.grammar = e.languages.markup);
                            }
                        },
                    },
                    tokenizePlaceholders: {
                        value: function (n, r) {
                            if (n.language === r && n.tokenStack) {
                                n.grammar = e.languages[r];
                                var i = 0,
                                    o = Object.keys(n.tokenStack);
                                !(function s(a) {
                                    for (var l = 0; l < a.length && !(i >= o.length); l++) {
                                        var c = a[l];
                                        if ("string" == typeof c || (c.content && "string" == typeof c.content)) {
                                            var u = o[i],
                                                p = n.tokenStack[u],
                                                d = "string" == typeof c ? c : c.content,
                                                g = t(r, u),
                                                f = d.indexOf(g);
                                            if (f > -1) {
                                                ++i;
                                                var h = d.substring(0, f),
                                                    m = new e.Token(r, e.tokenize(p, n.grammar), "language-" + r, p),
                                                    b = d.substring(f + g.length),
                                                    y = [];
                                                h && y.push.apply(y, s([h])), y.push(m), b && y.push.apply(y, s([b])), "string" == typeof c ? a.splice.apply(a, [l, 1].concat(y)) : (c.content = y);
                                            }
                                        } else c.content && s(c.content);
                                    }
                                    return a;
                                })(n.tokens);
                            }
                        },
                    },
                });
            })(Prism);
        },
        38103: () => {
            (Prism.languages.markup = {
                comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
                prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                        "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
                        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/i,
                        name: /[^\s<>'"]+/,
                    },
                },
                cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                        tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
                        "special-attr": [],
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [
                                    { pattern: /^=/, alias: "attr-equals" },
                                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                                ],
                            },
                        },
                        punctuation: /\/?>/,
                        "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
                    },
                },
                entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i],
            }),
                (Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity),
                (Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup),
                Prism.hooks.add("wrap", function (e) {
                    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
                }),
                Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
                    value: function (e, t) {
                        var n = {};
                        (n["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[t] }), (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
                        var r = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
                        r["language-" + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] };
                        var i = {};
                        (i[e] = {
                            pattern: RegExp(
                                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                                    return e;
                                }),
                                "i"
                            ),
                            lookbehind: !0,
                            greedy: !0,
                            inside: r,
                        }),
                            Prism.languages.insertBefore("markup", "cdata", i);
                    },
                }),
                Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
                    value: function (e, t) {
                        Prism.languages.markup.tag.inside["special-attr"].push({
                            pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                            lookbehind: !0,
                            inside: {
                                "attr-name": /^[^\s=]+/,
                                "attr-value": {
                                    pattern: /=[\s\S]+/,
                                    inside: {
                                        value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [t, "language-" + t], inside: Prism.languages[t] },
                                        punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                                    },
                                },
                            },
                        });
                    },
                }),
                (Prism.languages.html = Prism.languages.markup),
                (Prism.languages.mathml = Prism.languages.markup),
                (Prism.languages.svg = Prism.languages.markup),
                (Prism.languages.xml = Prism.languages.extend("markup", {})),
                (Prism.languages.ssml = Prism.languages.xml),
                (Prism.languages.atom = Prism.languages.xml),
                (Prism.languages.rss = Prism.languages.xml);
        },
        47303: () => {
            !(function (e) {
                var t = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
                e.languages.nginx = {
                    comment: { pattern: /(^|[\s{};])#.*/, lookbehind: !0, greedy: !0 },
                    directive: {
                        pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            string: { pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/, lookbehind: !0, greedy: !0, inside: { escape: { pattern: /\\["'\\nrt]/, alias: "entity" }, variable: t } },
                            comment: { pattern: /(\s)#.*/, lookbehind: !0, greedy: !0 },
                            keyword: { pattern: /^\S+/, greedy: !0 },
                            boolean: { pattern: /(\s)(?:off|on)(?!\S)/, lookbehind: !0 },
                            number: { pattern: /(\s)\d+[a-z]*(?!\S)/i, lookbehind: !0 },
                            variable: t,
                        },
                    },
                    punctuation: /[{};]/,
                };
            })(Prism);
        },
        3218: () => {
            !(function (e) {
                var t = /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;
                e.languages.perl = {
                    comment: [
                        { pattern: /(^\s*)=\w[\s\S]*?=cut.*/m, lookbehind: !0, greedy: !0 },
                        { pattern: /(^|[^\\$])#.*/, lookbehind: !0, greedy: !0 },
                    ],
                    string: [
                        {
                            pattern: RegExp(/\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source + "(?:" + [/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source, t].join("|") + ")"),
                            greedy: !0,
                        },
                        { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
                        { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 },
                    ],
                    regex: [
                        {
                            pattern: RegExp(
                                /\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source + "(?:" + [/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source, t].join("|") + ")" + /[msixpodualngc]*/.source
                            ),
                            greedy: !0,
                        },
                        {
                            pattern: RegExp(
                                /(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source +
                                    "(?:" +
                                    [/([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/.source, /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/.source, t + /\s*/.source + t].join("|") +
                                    ")" +
                                    /[msixpodualngcer]*/.source
                            ),
                            lookbehind: !0,
                            greedy: !0,
                        },
                        { pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/, greedy: !0 },
                    ],
                    variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
                    filehandle: { pattern: /<(?![<=])\S*?>|\b_\b/, alias: "symbol" },
                    "v-string": { pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, alias: "string" },
                    function: { pattern: /(\bsub[ \t]+)\w+/, lookbehind: !0 },
                    keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
                    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
                    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
                    punctuation: /[{}[\];(),:]/,
                };
            })(Prism);
        },
        50254: () => {
            !(function (e) {
                var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
                    n = [
                        { pattern: /\b(?:false|true)\b/i, alias: "boolean" },
                        { pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: !0, lookbehind: !0 },
                        { pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i, greedy: !0, lookbehind: !0 },
                        /\b(?:null)\b/i,
                        /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
                    ],
                    r = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    i = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
                    o = /[{}\[\](),:;]/;
                e.languages.php = {
                    delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" },
                    comment: t,
                    variable: /\$+(?:\w+\b|(?=\{))/,
                    package: { pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, lookbehind: !0, inside: { punctuation: /\\/ } },
                    "class-name-definition": { pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i, lookbehind: !0, alias: "class-name" },
                    "function-definition": { pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i, lookbehind: !0, alias: "function" },
                    keyword: [
                        { pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i, alias: "type-casting", greedy: !0, lookbehind: !0 },
                        { pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i, alias: "type-hint", greedy: !0, lookbehind: !0 },
                        { pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i, alias: "return-type", greedy: !0, lookbehind: !0 },
                        { pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i, alias: "type-declaration", greedy: !0 },
                        { pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i, alias: "type-declaration", greedy: !0, lookbehind: !0 },
                        { pattern: /\b(?:parent|self|static)(?=\s*::)/i, alias: "static-context", greedy: !0 },
                        { pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
                        /\bclass\b/i,
                        {
                            pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
                            lookbehind: !0,
                        },
                    ],
                    "argument-name": { pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: !0 },
                    "class-name": [
                        { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 },
                        { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 },
                        { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
                        { pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i, alias: "class-name-fully-qualified", greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                        { pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i, alias: "class-name-fully-qualified", greedy: !0, inside: { punctuation: /\\/ } },
                        {
                            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                            alias: "class-name-fully-qualified",
                            greedy: !0,
                            lookbehind: !0,
                            inside: { punctuation: /\\/ },
                        },
                        { pattern: /\b[a-z_]\w*(?=\s*\$)/i, alias: "type-declaration", greedy: !0 },
                        { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-declaration"], greedy: !0, inside: { punctuation: /\\/ } },
                        { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: !0 },
                        { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i, alias: ["class-name-fully-qualified", "static-context"], greedy: !0, inside: { punctuation: /\\/ } },
                        { pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i, alias: "type-hint", greedy: !0, lookbehind: !0 },
                        { pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-hint"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                        { pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i, alias: "return-type", greedy: !0, lookbehind: !0 },
                        { pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: ["class-name-fully-qualified", "return-type"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                    ],
                    constant: n,
                    function: { pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i, lookbehind: !0, inside: { punctuation: /\\/ } },
                    property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
                    number: r,
                    operator: i,
                    punctuation: o,
                };
                var s = { pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/, lookbehind: !0, inside: e.languages.php },
                    a = [
                        { pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, alias: "nowdoc-string", greedy: !0, inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } },
                        {
                            pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                            alias: "heredoc-string",
                            greedy: !0,
                            inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: s },
                        },
                        { pattern: /`(?:\\[\s\S]|[^\\`])*`/, alias: "backtick-quoted-string", greedy: !0 },
                        { pattern: /'(?:\\[\s\S]|[^\\'])*'/, alias: "single-quoted-string", greedy: !0 },
                        { pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: !0, inside: { interpolation: s } },
                    ];
                e.languages.insertBefore("php", "variable", {
                    string: a,
                    attribute: {
                        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                        greedy: !0,
                        inside: {
                            "attribute-content": {
                                pattern: /^(#\[)[\s\S]+(?=\]$)/,
                                lookbehind: !0,
                                inside: {
                                    comment: t,
                                    string: a,
                                    "attribute-class-name": [
                                        { pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i, alias: "class-name", greedy: !0, lookbehind: !0 },
                                        { pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i, alias: ["class-name", "class-name-fully-qualified"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                                    ],
                                    constant: n,
                                    number: r,
                                    operator: i,
                                    punctuation: o,
                                },
                            },
                            delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" },
                        },
                    },
                }),
                    e.hooks.add("before-tokenize", function (t) {
                        if (/<\?/.test(t.code)) {
                            e.languages["markup-templating"].buildPlaceholders(
                                t,
                                "php",
                                /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g
                            );
                        }
                    }),
                    e.hooks.add("after-tokenize", function (t) {
                        e.languages["markup-templating"].tokenizePlaceholders(t, "php");
                    });
            })(Prism);
        },
        36080: () => {
            !(function (e) {
                e.languages.pug = {
                    comment: { pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m, lookbehind: !0 },
                    "multiline-script": { pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: !0, inside: e.languages.javascript },
                    filter: { pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: !0, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, text: /\S[\s\S]*/ } },
                    "multiline-plain-text": { pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: !0 },
                    markup: { pattern: /(^[\t ]*)<.+/m, lookbehind: !0, inside: e.languages.markup },
                    doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
                    "flow-control": {
                        pattern: /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
                        lookbehind: !0,
                        inside: {
                            each: { pattern: /^each .+? in\b/, inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ } },
                            branch: { pattern: /^(?:case|default|else|if|unless|when|while)\b/, alias: "keyword" },
                            rest: e.languages.javascript,
                        },
                    },
                    keyword: { pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m, lookbehind: !0 },
                    mixin: [
                        { pattern: /(^[\t ]*)mixin .+/m, lookbehind: !0, inside: { keyword: /^mixin/, function: /\w+(?=\s*\(|\s*$)/, punctuation: /[(),.]/ } },
                        { pattern: /(^[\t ]*)\+.+/m, lookbehind: !0, inside: { name: { pattern: /^\+\w+/, alias: "function" }, rest: e.languages.javascript } },
                    ],
                    script: { pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m, lookbehind: !0, inside: e.languages.javascript },
                    "plain-text": { pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m, lookbehind: !0 },
                    tag: {
                        pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
                        lookbehind: !0,
                        inside: {
                            attributes: [
                                { pattern: /&[^(]+\([^)]+\)/, inside: e.languages.javascript },
                                {
                                    pattern: /\([^)]+\)/,
                                    inside: { "attr-value": { pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/, lookbehind: !0, inside: e.languages.javascript }, "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/, punctuation: /[!=(),]+/ },
                                },
                            ],
                            punctuation: /:/,
                            "attr-id": /#[\w\-]+/,
                            "attr-class": /\.[\w\-]+/,
                        },
                    },
                    code: [{ pattern: /(^[\t ]*(?:-|!?=)).+/m, lookbehind: !0, inside: e.languages.javascript }],
                    punctuation: /[.\-!=|]+/,
                };
                for (
                    var t = /(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/.source,
                        n = [{ filter: "atpl", language: "twig" }, { filter: "coffee", language: "coffeescript" }, "ejs", "handlebars", "less", "livescript", "markdown", { filter: "sass", language: "scss" }, "stylus"],
                        r = {},
                        i = 0,
                        o = n.length;
                    i < o;
                    i++
                ) {
                    var s = n[i];
                    (s = "string" == typeof s ? { filter: s, language: s } : s),
                        e.languages[s.language] &&
                            (r["filter-" + s.filter] = {
                                pattern: RegExp(
                                    t.replace("<filter_name>", function () {
                                        return s.filter;
                                    }),
                                    "m"
                                ),
                                lookbehind: !0,
                                inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, text: { pattern: /\S[\s\S]*/, alias: [s.language, "language-" + s.language], inside: e.languages[s.language] } },
                            });
                }
                e.languages.insertBefore("pug", "filter", r);
            })(Prism);
        },
        98383: () => {
            (Prism.languages.purescript = Prism.languages.extend("haskell", {
                keyword: /\b(?:ado|case|class|data|derive|do|else|forall|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b|∀/,
                "import-statement": {
                    pattern: /(^[\t ]*)import\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*(?:\s+as\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
                    lookbehind: !0,
                    inside: { keyword: /\b(?:as|hiding|import)\b/, punctuation: /\./ },
                },
                builtin: /\b(?:absurd|add|ap|append|apply|between|bind|bottom|clamp|compare|comparing|compose|conj|const|degree|discard|disj|div|eq|flap|flip|gcd|identity|ifM|join|lcm|liftA1|liftM1|map|max|mempty|min|mod|mul|negate|not|notEq|one|otherwise|recip|show|sub|top|unit|unless|unlessM|void|when|whenM|zero)\b/,
                operator: [
                    Prism.languages.haskell.operator[0],
                    Prism.languages.haskell.operator[2],
                    /[\xa2-\xa6\xa8\xa9\xac\xae-\xb1\xb4\xb8\xd7\xf7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u0482\u058d-\u058f\u0606-\u0608\u060b\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u07fe\u07ff\u09f2\u09f3\u09fa\u09fb\u0af1\u0b70\u0bf3-\u0bfa\u0c7f\u0d4f\u0d79\u0e3f\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u166d\u17db\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20bf\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u2140-\u2144\u214a-\u214d\u214f\u218a\u218b\u2190-\u2307\u230c-\u2328\u232b-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u2767\u2794-\u27c4\u27c7-\u27e5\u27f0-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2e50\u2e51\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u309b\u309c\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua700-\ua716\ua720\ua721\ua789\ua78a\ua828-\ua82b\ua836-\ua839\uaa77-\uaa79\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc1\ufdfc\ufdfd\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe6\uffe8-\uffee\ufffc\ufffd]/,
                ],
            })),
                (Prism.languages.purs = Prism.languages.purescript);
        },
        43336: () => {
            (Prism.languages.python = {
                comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
                "string-interpolation": {
                    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                            lookbehind: !0,
                            inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null },
                        },
                        string: /[\s\S]+/,
                    },
                },
                "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" },
                string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
                function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
                "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
                decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } },
                keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                boolean: /\b(?:False|None|True)\b/,
                number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
                operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                punctuation: /[{}[\];(),.:]/,
            }),
                (Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python),
                (Prism.languages.py = Prism.languages.python);
        },
        41649: () => {
            Prism.languages.r = {
                comment: /#.*/,
                string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" },
                boolean: /\b(?:FALSE|TRUE)\b/,
                ellipsis: /\.\.(?:\.|\d+)/,
                number: [/\b(?:Inf|NaN)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
                keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
                operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
                punctuation: /[(){}\[\],;]/,
            };
        },
        60204: () => {
            !(function (e) {
                var t = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" },
                    n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
                    r = "(?:[^\\\\-]|" + n.source + ")",
                    i = RegExp(r + "-" + r),
                    o = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
                e.languages.regex = {
                    "char-class": {
                        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
                        lookbehind: !0,
                        inside: {
                            "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" },
                            "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" },
                            range: { pattern: i, inside: { escape: n, "range-punctuation": { pattern: /-/, alias: "operator" } } },
                            "special-escape": t,
                            "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" },
                            escape: n,
                        },
                    },
                    "special-escape": t,
                    "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" },
                    backreference: [
                        { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" },
                        { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": o } },
                    ],
                    anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" },
                    escape: n,
                    group: [
                        { pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": o } },
                        { pattern: /\)/, alias: "punctuation" },
                    ],
                    quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" },
                    alternation: { pattern: /\|/, alias: "keyword" },
                };
            })(Prism);
        },
        79093: () => {
            (Prism.languages.rescript = {
                comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
                char: { pattern: /'(?:[^\r\n\\]|\\(?:.|\w+))'/, greedy: !0 },
                string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
                "class-name": /\b[A-Z]\w*|@[a-z.]*|#[A-Za-z]\w*|#\d/,
                function: { pattern: /[a-zA-Z]\w*(?=\()|(\.)[a-z]\w*/, lookbehind: !0 },
                number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                boolean: /\b(?:false|true)\b/,
                "attr-value": /[A-Za-z]\w*(?==)/,
                constant: { pattern: /(\btype\s+)[a-z]\w*/, lookbehind: !0 },
                tag: { pattern: /(<)[a-z]\w*|(?:<\/)[a-z]\w*/, lookbehind: !0, inside: { operator: /<|>|\// } },
                keyword: /\b(?:and|as|assert|begin|bool|class|constraint|do|done|downto|else|end|exception|external|float|for|fun|function|if|in|include|inherit|initializer|int|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|string|switch|then|to|try|type|when|while|with)\b/,
                operator: /\.{3}|:[:=]?|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
                punctuation: /[(){}[\],;.]/,
            }),
                Prism.languages.insertBefore("rescript", "string", {
                    "template-string": {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: !0,
                                inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "tag" }, rest: Prism.languages.rescript },
                            },
                            string: /[\s\S]+/,
                        },
                    },
                }),
                (Prism.languages.res = Prism.languages.rescript);
        },
        78264: () => {
            !(function (e) {
                (e.languages.ruby = e.languages.extend("clike", {
                    comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: !0 },
                    "class-name": { pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/, lookbehind: !0, inside: { punctuation: /[.\\]/ } },
                    keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
                    operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
                    punctuation: /[(){}[\].,;]/,
                })),
                    e.languages.insertBefore("ruby", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } });
                var t = {
                    pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
                    lookbehind: !0,
                    inside: { content: { pattern: /^(#\{)[\s\S]+(?=\}$)/, lookbehind: !0, inside: e.languages.ruby }, delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" } },
                };
                delete e.languages.ruby.function;
                var n =
                        "(?:" +
                        [
                            /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                            /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
                            /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
                            /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
                            /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source,
                        ].join("|") +
                        ")",
                    r = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;
                e.languages.insertBefore("ruby", "keyword", {
                    "regex-literal": [
                        { pattern: RegExp(/%r/.source + n + /[egimnosux]{0,6}/.source), greedy: !0, inside: { interpolation: t, regex: /[\s\S]+/ } },
                        { pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/, lookbehind: !0, greedy: !0, inside: { interpolation: t, regex: /[\s\S]+/ } },
                    ],
                    variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
                    symbol: [
                        { pattern: RegExp(/(^|[^:]):/.source + r), lookbehind: !0, greedy: !0 },
                        { pattern: RegExp(/([\r\n{(,][ \t]*)/.source + r + /(?=:(?!:))/.source), lookbehind: !0, greedy: !0 },
                    ],
                    "method-definition": { pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/, lookbehind: !0, inside: { function: /\b\w+$/, keyword: /^self\b/, "class-name": /^\w+/, punctuation: /\./ } },
                }),
                    e.languages.insertBefore("ruby", "string", {
                        "string-literal": [
                            { pattern: RegExp(/%[qQiIwWs]?/.source + n), greedy: !0, inside: { interpolation: t, string: /[\s\S]+/ } },
                            { pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/, greedy: !0, inside: { interpolation: t, string: /[\s\S]+/ } },
                            {
                                pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                                alias: "heredoc-string",
                                greedy: !0,
                                inside: { delimiter: { pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i, inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?/ } }, interpolation: t, string: /[\s\S]+/ },
                            },
                            {
                                pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                                alias: "heredoc-string",
                                greedy: !0,
                                inside: { delimiter: { pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i, inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?'|'$/ } }, string: /[\s\S]+/ },
                            },
                        ],
                        "command-literal": [
                            { pattern: RegExp(/%x/.source + n), greedy: !0, inside: { interpolation: t, command: { pattern: /[\s\S]+/, alias: "string" } } },
                            { pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/, greedy: !0, inside: { interpolation: t, command: { pattern: /[\s\S]+/, alias: "string" } } },
                        ],
                    }),
                    delete e.languages.ruby.string,
                    e.languages.insertBefore("ruby", "number", {
                        builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
                        constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/,
                    }),
                    (e.languages.rb = e.languages.ruby);
            })(Prism);
        },
        7017: () => {
            !(function (e) {
                for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++)
                    t = t.replace(/<self>/g, function () {
                        return t;
                    });
                (t = t.replace(/<self>/g, function () {
                    return /[^\s\S]/.source;
                })),
                    (e.languages.rust = {
                        comment: [
                            { pattern: RegExp(/(^|[^\\])/.source + t), lookbehind: !0, greedy: !0 },
                            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                        ],
                        string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 },
                        char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 },
                        attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: !0, alias: "attr-name", inside: { string: null } },
                        "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: !0, greedy: !0, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } },
                        "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" },
                        "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation" },
                        variable: /\$\w+/,
                        "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function" },
                        "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name" },
                        "module-declaration": [
                            { pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: "namespace" },
                            { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: !0, alias: "namespace", inside: { punctuation: /::/ } },
                        ],
                        keyword: [
                            /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
                            /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
                        ],
                        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                        macro: { pattern: /\b\w+!/, alias: "property" },
                        constant: /\b[A-Z_][A-Z_\d]+\b/,
                        "class-name": /\b[A-Z]\w*\b/,
                        namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } },
                        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
                        boolean: /\b(?:false|true)\b/,
                        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
                        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
                    }),
                    (e.languages.rust["closure-params"].inside.rest = e.languages.rust),
                    (e.languages.rust.attribute.inside.string = e.languages.rust.string);
            })(Prism);
        },
        55591: () => {
            !(function (e) {
                (e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m, lookbehind: !0, greedy: !0 } })),
                    e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, greedy: !0, inside: { atrule: /(?:@[\w-]+|[+=])/ } } }),
                    delete e.languages.sass.atrule;
                var t = /\$[-\w]+|#\{\$[-\w]+\}/,
                    n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, { pattern: /(\s)-(?=\s)/, lookbehind: !0 }];
                e.languages.insertBefore("sass", "property", {
                    "variable-line": { pattern: /^[ \t]*\$.+/m, greedy: !0, inside: { punctuation: /:/, variable: t, operator: n } },
                    "property-line": {
                        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
                        greedy: !0,
                        inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: n, important: e.languages.sass.important },
                    },
                }),
                    delete e.languages.sass.property,
                    delete e.languages.sass.important,
                    e.languages.insertBefore("sass", "punctuation", {
                        selector: { pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m, lookbehind: !0, greedy: !0 },
                    });
            })(Prism);
        },
        93048: () => {
            (Prism.languages.scala = Prism.languages.extend("java", {
                "triple-quoted-string": { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string" },
                string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                keyword: /<-|=>|\b(?:abstract|case|catch|class|def|derives|do|else|enum|extends|extension|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|self|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/,
                number: /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
                builtin: /\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,
                symbol: /'[^\d\s\\]\w*/,
            })),
                Prism.languages.insertBefore("scala", "triple-quoted-string", {
                    "string-interpolation": {
                        pattern: /\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,
                        greedy: !0,
                        inside: {
                            id: { pattern: /^\w+/, greedy: !0, alias: "function" },
                            escape: { pattern: /\\\$"|\$[$"]/, greedy: !0, alias: "symbol" },
                            interpolation: { pattern: /\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/, greedy: !0, inside: { punctuation: /^\$\{?|\}$/, expression: { pattern: /[\s\S]+/, inside: Prism.languages.scala } } },
                            string: /[\s\S]+/,
                        },
                    },
                }),
                delete Prism.languages.scala["class-name"],
                delete Prism.languages.scala.function,
                delete Prism.languages.scala.constant;
        },
        82269: () => {
            !(function (e) {
                e.languages.scheme = {
                    comment: /;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,
                    string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0 },
                    symbol: { pattern: /'[^()\[\]#'\s]+/, greedy: !0 },
                    char: { pattern: /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/, greedy: !0 },
                    "lambda-parameter": [
                        { pattern: /((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/, lookbehind: !0 },
                        { pattern: /((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/, lookbehind: !0 },
                    ],
                    keyword: {
                        pattern: /((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|except|export|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/,
                        lookbehind: !0,
                    },
                    builtin: {
                        pattern: /((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/,
                        lookbehind: !0,
                    },
                    operator: { pattern: /((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/, lookbehind: !0 },
                    number: {
                        pattern: RegExp(
                            (function (e) {
                                for (var t in e)
                                    e[t] = e[t].replace(/<[\w\s]+>/g, function (t) {
                                        return "(?:" + e[t].trim() + ")";
                                    });
                                return e[t];
                            })({
                                "<ureal dec>": /\d+(?:\/\d+)|(?:\d+(?:\.\d*)?|\.\d+)(?:[esfdl][+-]?\d+)?/.source,
                                "<real dec>": /[+-]?<ureal dec>|[+-](?:inf|nan)\.0/.source,
                                "<imaginary dec>": /[+-](?:<ureal dec>|(?:inf|nan)\.0)?i/.source,
                                "<complex dec>": /<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>/.source,
                                "<num dec>": /(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>/.source,
                                "<ureal box>": /[0-9a-f]+(?:\/[0-9a-f]+)?/.source,
                                "<real box>": /[+-]?<ureal box>|[+-](?:inf|nan)\.0/.source,
                                "<imaginary box>": /[+-](?:<ureal box>|(?:inf|nan)\.0)?i/.source,
                                "<complex box>": /<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>/.source,
                                "<num box>": /#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>/.source,
                                "<number>": /(^|[()\[\]\s])(?:<num dec>|<num box>)(?=[()\[\]\s]|$)/.source,
                            }),
                            "i"
                        ),
                        lookbehind: !0,
                    },
                    boolean: { pattern: /(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/, lookbehind: !0 },
                    function: { pattern: /((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/, lookbehind: !0 },
                    identifier: { pattern: /(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/, lookbehind: !0, greedy: !0 },
                    punctuation: /[()\[\]']/,
                };
            })(Prism);
        },
        88790: () => {
            (Prism.languages.scss = Prism.languages.extend("css", {
                comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
                atrule: { pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } },
                url: /(?:[-a-z]+-)?url(?=\()/i,
                selector: {
                    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
                    inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
                },
                property: { pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } },
            })),
                Prism.languages.insertBefore("scss", "atrule", {
                    keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 }],
                }),
                Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }),
                Prism.languages.insertBefore("scss", "function", {
                    "module-modifier": { pattern: /\b(?:as|hide|show|with)\b/i, alias: "keyword" },
                    placeholder: { pattern: /%[-\w]+/, alias: "selector" },
                    statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" },
                    boolean: /\b(?:false|true)\b/,
                    null: { pattern: /\bnull\b/, alias: "keyword" },
                    operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/, lookbehind: !0 },
                }),
                (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
        },
        18978: () => {
            (Prism.languages.solidity = Prism.languages.extend("clike", {
                "class-name": { pattern: /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/, lookbehind: !0 },
                keyword: /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
                operator: /=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/,
            })),
                Prism.languages.insertBefore("solidity", "keyword", {
                    builtin: /\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/,
                }),
                Prism.languages.insertBefore("solidity", "number", { version: { pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/, lookbehind: !0, alias: "number" } }),
                (Prism.languages.sol = Prism.languages.solidity);
        },
        3818: () => {
            Prism.languages.sql = {
                comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
                variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/],
                string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 },
                identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } },
                function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
                keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
                boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
                number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                punctuation: /[;[\]()`,.]/,
            };
        },
        78693: () => {
            (Prism.languages.swift = {
                comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: !0, greedy: !0 },
                "string-literal": [
                    {
                        pattern: RegExp(
                            /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null },
                            "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" },
                            punctuation: /\\(?=[\r\n])/,
                            string: /[\s\S]+/,
                        },
                    },
                    {
                        pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ },
                    },
                ],
                directive: {
                    pattern: RegExp(
                        /#/.source +
                            "(?:" +
                            /(?:elseif|if)\b/.source +
                            "(?:[ \t]*" +
                            /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source +
                            ")+|" +
                            /(?:else|endif)\b/.source +
                            ")"
                    ),
                    alias: "property",
                    inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ },
                },
                literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" },
                "other-directive": { pattern: /#\w+\b/, alias: "property" },
                attribute: { pattern: /@\w+/, alias: "atrule" },
                "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function" },
                label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: !0, alias: "important" },
                keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
                boolean: /\b(?:false|true)\b/,
                nil: { pattern: /\bnil\b/, alias: "constant" },
                "short-argument": /\$\d+\b/,
                omit: { pattern: /\b_\b/, alias: "keyword" },
                number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
                "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
                operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
                punctuation: /[{}[\]();,.:\\]/,
            }),
                Prism.languages.swift["string-literal"].forEach(function (e) {
                    e.inside.interpolation.inside = Prism.languages.swift;
                });
        },
        21911: () => {
            !(function (e) {
                var t = e.util.clone(e.languages.typescript);
                (e.languages.tsx = e.languages.extend("jsx", t)), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
                var n = e.languages.tsx.tag;
                (n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags)), (n.lookbehind = !0);
            })(Prism);
        },
        69810: () => {
            !(function (e) {
                (e.languages.typescript = e.languages.extend("javascript", {
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null,
                    },
                    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
                })),
                    e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/),
                    delete e.languages.typescript.parameter,
                    delete e.languages.typescript["literal-property"];
                var t = e.languages.extend("typescript", {});
                delete t["class-name"],
                    (e.languages.typescript["class-name"].inside = t),
                    e.languages.insertBefore("typescript", "function", {
                        decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } },
                        "generic-function": {
                            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                            greedy: !0,
                            inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: t } },
                        },
                    }),
                    (e.languages.ts = e.languages.typescript);
            })(Prism);
        },
        51460: () => {
            !(function (e) {
                var t = /[*&][^\s[\]{},]+/,
                    n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                    r = "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)",
                    i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
                        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                    }),
                    o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
                function s(e, t) {
                    t = (t || "").replace(/m/g, "") + "m";
                    var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                        .replace(/<<prop>>/g, function () {
                            return r;
                        })
                        .replace(/<<value>>/g, function () {
                            return e;
                        });
                    return RegExp(n, t);
                }
                (e.languages.yaml = {
                    scalar: {
                        pattern: RegExp(
                            /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
                                return r;
                            })
                        ),
                        lookbehind: !0,
                        alias: "string",
                    },
                    comment: /#.*/,
                    key: {
                        pattern: RegExp(
                            /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                                .replace(/<<prop>>/g, function () {
                                    return r;
                                })
                                .replace(/<<key>>/g, function () {
                                    return "(?:" + i + "|" + o + ")";
                                })
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        alias: "atrule",
                    },
                    directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
                    datetime: { pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" },
                    boolean: { pattern: s(/false|true/.source, "i"), lookbehind: !0, alias: "important" },
                    null: { pattern: s(/null|~/.source, "i"), lookbehind: !0, alias: "important" },
                    string: { pattern: s(o), lookbehind: !0, greedy: !0 },
                    number: { pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 },
                    tag: n,
                    important: t,
                    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
                }),
                    (e.languages.yml = e.languages.yaml);
            })(Prism);
        },
        98029: (e) => {
            e.exports = function () {
                var e = document.getSelection();
                if (!e.rangeCount) return function () {};
                for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null;
                }
                return (
                    e.removeAllRanges(),
                    function () {
                        "Caret" === e.type && e.removeAllRanges(),
                            e.rangeCount ||
                                n.forEach(function (t) {
                                    e.addRange(t);
                                }),
                            t && t.focus();
                    }
                );
            };
        },
        90605: (e, t, n) => {
            "use strict";
            n.r(t);
            var r = n(68398),
                i = n(43451),
                o = n(79282),
                s = n(57268),
                a = n(29445),
                l = n(79652),
                c = n(74003),
                u = n(94209),
                p = n(87579),
                d = n(18067),
                g = n(76739),
                f = n(85906);
            const h = (e) => ((0, s.dD)("data-v-0319a392"), (e = e()), (0, s.Cn)(), e),
                m = { class: "flex h-full w-full flex-col items-center justify-center bg-[#303B75]" },
                b = (0, s.uE)(
                    '<div class="mt-[-80px] flex flex-col items-center text-color-white" data-v-0319a392><img draggable="false" class="mb-[14px] h-[88px] w-[88px]" src=GlobalGetApi+"https://static.wetab.link/hitab/chatgpt-widget/chatgpt_icon.png" alt="" data-v-0319a392><span class="h-[22px] w-[111px]" data-v-0319a392><img class="h-full w-full" draggable="false" src="' +
                        p +
                        '" alt="" data-v-0319a392></span><span class="mt-[6px] font-ali-55" data-v-0319a392>Build your own AI assistant</span></div>',
                    1
                ),
                y = { class: "relative my-[48px]" },
                A = h(() =>
                    (0, s._)(
                        "div",
                        { class: "h-[48px] rounded-[12px] bg-[#4A589E] px-[20px] font-ali-55 leading-[48px] text-color-white mb:mx-[12px] mb:h-auto mb:px-[12px] mb:py-[5px] mb:leading-[30px]" },
                        " 最近访问人数激增，有部分用户存在恶意使用的情况，为防止域名失效，请安装扩展版本使用此功能！ ",
                        -1
                    )
                ),
                x = ["src"],
                v = { class: "flex gap-[12px] font-ali-55 leading-none text-[#303B75] mb:w-full mb:flex-wrap mb:px-[12px]" },
                w = ["href"],
                k = ["src"],
                E = (0, s.aZ)({
                    __name: "chatgpt-web-content",
                    setup(e) {
                        const t = [
                            { name: "Edge", target: "https://microsoftedge.microsoft.com/addons/detail/wetab-%E6%96%B0%E6%A0%87%E7%AD%BE%E9%A1%B5/bpelnogcookhocnaokfpoeinibimbeff", logo: g },
                            { name: "Chrome", target: "https://chrome.google.com/webstore/detail/wetab-%E6%96%B0%E6%A0%87%E7%AD%BE%E9%A1%B5%E5%B7%B2%E6%95%B4%E5%90%88chatgpt/aikflfpejipbpjdlfabpgclhblkpaafo", logo: d },
                            { name: "安装教程", target: "https://diwlwltzssn.feishu.cn/docx/MnHhdvxATomBnMxfas2cm8wWnVd", logo: "" },
                            { name: "WeTab官网", target: "https://www.wetab.link", logo: "" },
                        ];
                        return (e, n) => (
                            (0, s.wg)(),
                            (0, s.iD)("div", m, [
                                b,
                                (0, s._)("div", y, [A, (0, s._)("img", { src: (0, a.SU)(f), draggable: "false", class: "absolute left-[50%] h-[20px] w-[25px] translate-x-[-50%]", alt: "" }, null, 8, x)]),
                                (0, s._)("div", v, [
                                    ((0, s.wg)(),
                                    (0, s.iD)(
                                        s.HY,
                                        null,
                                        (0, s.Ko)(t, (e) =>
                                            (0, s._)(
                                                "a",
                                                { key: e.name, target: "_blank", href: e.target, class: "flex h-[32px] min-w-[96px] items-center justify-center rounded-[8px] bg-color-white px-[6px] mb:w-[calc(50%-6px)]" },
                                                [
                                                    e.logo ? ((0, s.wg)(), (0, s.iD)("img", { key: 0, draggable: "false", src: e.logo, class: "mr-[6px] h-[20px] w-[20px]", alt: "" }, null, 8, k)) : (0, s.kq)("", !0),
                                                    (0, s._)("span", null, (0, u.toDisplayString)(e.name), 1),
                                                ],
                                                8,
                                                w
                                            )
                                        ),
                                        64
                                    )),
                                ]),
                            ])
                        );
                    },
                });
            var M = n(76911);
            const C = (0, M.Z)(E, [["__scopeId", "data-v-0319a392"]]),
                I = (0, s._)("div", { class: "h-[1px] w-full bg-color-black bg-opacity-[0.08]" }, null, -1),
                D = (0, s._)("div", { class: "h-[1px] w-full bg-color-white bg-opacity-[0.08]" }, null, -1);
            const _ = {},
                N = (0, M.Z)(_, [
                    [
                        "render",
                        function (e, t) {
                            return (0, s.wg)(), (0, s.iD)(s.HY, null, [I, D], 64);
                        },
                    ],
                ]);
            var T = n(51191);
            const S = (e) => ((0, s.dD)("data-v-2d2827db"), (e = e()), (0, s.Cn)(), e),
                O = { class: "flex items-center justify-between" },
                L = { class: "text-dot flex-1 font-ali-65 text-[16px] text-color-white" },
                z = { class: "font-ali-65 text-[16px] leading-[22px] text-color-white" },
                j = S(() => (0, s._)("i", { class: "icon iconfont icon-export_icon1 ml-[8px] text-[20px] text-color-white" }, null, -1)),
                R = { class: "flex justify-between font-ali-55 text-[14px] text-color-white text-opacity-60" },
                P = [S(() => (0, s._)("i", { class: "iconfont icon-line" }, null, -1))],
                F = (0, s.aZ)({
                    __name: "chatgpt-conversion-item",
                    props: { data: null, activeId: null },
                    emits: ["delete"],
                    setup(e, t) {
                        let { emit: n } = t;
                        const i = e,
                            { exportMarkdown: o } = (0, l.UV)();
                        return (e, t) => (
                            (0, s.wg)(),
                            (0, s.iD)(
                                "div",
                                {
                                    class: (0, u.normalizeClass)([
                                        "group relative flex h-[82px] w-full cursor-pointer flex-col justify-between rounded-[12px] p-[16px] transition-colors",
                                        [i.activeId === i.data.id ? "insert-shadow-active item-shadow bg-[#4A589E]" : "insert-shadow bg-[#3A4684]"],
                                    ]),
                                },
                                [
                                    (0, s._)("div", O, [
                                        (0, s._)("p", L, (0, u.toDisplayString)(i.data.name), 1),
                                        i.data.id !== (0, a.SU)(T.NEWCHAT_ID)
                                            ? ((0, s.wg)(),
                                              (0, s.iD)(
                                                  "div",
                                                  {
                                                      key: 0,
                                                      class: (0, u.normalizeClass)(["pointer-events-none flex shrink-0 items-center opacity-0 transition-opacity", [{ "pointer-events-auto opacity-100": i.activeId === i.data.id }]]),
                                                      onClick:
                                                          t[0] ||
                                                          (t[0] = function () {
                                                              return (0, a.SU)(o) && (0, a.SU)(o)(...arguments);
                                                          }),
                                                  },
                                                  [(0, s._)("p", z, (0, u.toDisplayString)("导出"), 1), j],
                                                  2
                                              ))
                                            : (0, s.kq)("", !0),
                                    ]),
                                    (0, s._)("div", R, [(0, s._)("span", null, (0, u.toDisplayString)(i.data.updateTime), 1), (0, s._)("span", null, (0, u.toDisplayString)(i.data.messages.length) + (0, u.toDisplayString)("条对话"), 1)]),
                                    i.data.id !== (0, a.SU)(T.NEWCHAT_ID)
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                              "span",
                                              {
                                                  key: 0,
                                                  class:
                                                      "delete-shadow absolute left-[-6px] top-[-6px] hidden h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[12px] bg-color-white bg-opacity-60 transition-colors hover:bg-opacity-100 group-hover:flex",
                                                  onClick: t[1] || (t[1] = (0, r.withModifiers)((e) => n("delete", i.data.id), ["stop"])),
                                              },
                                              P
                                          ))
                                        : (0, s.kq)("", !0),
                                ],
                                2
                            )
                        );
                    },
                }),
                B = (0, M.Z)(F, [["__scopeId", "data-v-2d2827db"]]),
                U = { class: "w-full pt-[24px] pb-[12px]" },
                q = (0, s.aZ)({
                    __name: "chatgpt-conversion-content",
                    props: { data: null, activeId: null },
                    emits: ["update:hideSideBar"],
                    setup(e, t) {
                        let { emit: n } = t;
                        const r = e,
                            i = (0, T.useChatGptStore)();
                        function o(e) {
                            i.deleteConversionItem(e);
                        }
                        return (
                            (0, s.bv)(() => {
                                i.reqConversionList(!0);
                            }),
                            (e, t) => (
                                (0, s.wg)(),
                                (0, s.iD)("div", U, [
                                    ((0, s.wg)(!0),
                                    (0, s.iD)(
                                        s.HY,
                                        null,
                                        (0, s.Ko)(
                                            r.data,
                                            (e) => (
                                                (0, s.wg)(),
                                                (0, s.iD)("div", { key: e.id, class: "mb-[12px] px-[24px]" }, [
                                                    (0, s.Wm)(
                                                        B,
                                                        {
                                                            data: e,
                                                            "active-id": r.activeId || "",
                                                            onClick: (t) => {
                                                                return (r = e), i.setActiveConversionId(r.id), void n("update:hideSideBar", !0);
                                                                var r;
                                                            },
                                                            onDelete: o,
                                                        },
                                                        null,
                                                        8,
                                                        ["data", "active-id", "onClick"]
                                                    ),
                                                ])
                                            )
                                        ),
                                        128
                                    )),
                                ])
                            )
                        );
                    },
                }),
                Z = { class: "absolute inset-0 z-10 flex items-center justify-center bg-[#1C1C1E] bg-opacity-30" },
                Q = { class: "shadow flex h-[325px] w-[300px] flex-col items-center rounded-[12px] bg-[#F8F8F8] py-[24px]" },
                H = { class: "flex items-center" },
                $ = { class: "mt-[12px] h-[160px] w-[160px]" },
                G = { class: "h-full w-full", src: "https://static.wetab.link/hitab/pay/wx_pay.png", alt: "", draggable: "false" },
                Y = { class: "h-full w-full", src: "https://static.wetab.link/hitab/pay/ali_pay.png", alt: "", draggable: "false" },
                V = { class: "mt-[8px] font-ali-55 text-[14px] leading-[20px] text-color-t3" },
                W = (0, s.aZ)({
                    __name: "chatgpt-sponsor-content",
                    props: { show: { type: Boolean } },
                    emits: ["close"],
                    setup(e, t) {
                        let { emit: n } = t;
                        const i = e,
                            l = (0, a.iH)("alipay"),
                            c = (e) => {
                                l.value = e;
                            };
                        return (e, t) => {
                            const a = o.Z;
                            return (
                                (0, s.wg)(),
                                (0, s.j4)(
                                    a,
                                    { show: i.show, ani: "fade" },
                                    {
                                        default: (0, s.w5)(() => [
                                            (0, s._)("div", Z, [
                                                (0, s._)("div", Q, [
                                                    (0, s._)("div", H, [
                                                        (0, s._)(
                                                            "button",
                                                            {
                                                                class: (0, u.normalizeClass)([
                                                                    "h-[24px] w-[66px] rounded-[6px] font-ali-55 text-[14px] leading-none transition-colors",
                                                                    ["alipay" === l.value ? "bg-[#1777FF] text-color-white" : "bg-color-m2 bg-opacity-5  text-color-t3"],
                                                                ]),
                                                                onClick: t[0] || (t[0] = (e) => c("alipay")),
                                                            },
                                                            " 支付宝 ",
                                                            2
                                                        ),
                                                        (0, s._)(
                                                            "button",
                                                            {
                                                                class: (0, u.normalizeClass)([
                                                                    "ml-[12px] h-[24px] w-[66px] rounded-[6px] font-ali-55 text-[14px] leading-none transition-colors",
                                                                    ["wechat" === l.value ? "bg-[#21AA38] text-color-white" : "bg-color-m2 bg-opacity-5  text-color-t3"],
                                                                ]),
                                                                onClick: t[1] || (t[1] = (e) => c("wechat")),
                                                            },
                                                            " 微信 ",
                                                            2
                                                        ),
                                                    ]),
                                                    (0, s._)("div", $, [(0, s.wy)((0, s._)("img", G, null, 512), [[r.vShow, "wechat" === l.value]]), (0, s.wy)((0, s._)("img", Y, null, 512), [[r.vShow, "alipay" === l.value]])]),
                                                    (0, s._)("p", V, (0, u.toDisplayString)("alipay" === l.value ? "支付宝扫一扫" : "微信扫一扫"), 1),
                                                    (0, s._)(
                                                        "div",
                                                        {
                                                            class:
                                                                "mt-[17px] flex h-[36px] w-[120px] cursor-pointer items-center justify-center rounded-[8px] bg-color-white font-ali-65 text-[16px] text-color-t2 transition-colors hover:bg-[#ebebeb]",
                                                            onClick: t[2] || (t[2] = (e) => n("close")),
                                                        },
                                                        " 下次再说 "
                                                    ),
                                                ]),
                                            ]),
                                        ]),
                                        _: 1,
                                    },
                                    8,
                                    ["show"]
                                )
                            );
                        };
                    },
                });
            var K = n(34578);
            const J = (e) => ((0, s.dD)("data-v-2fdbf70c"), (e = e()), (0, s.Cn)(), e),
                X = { class: "flex flex-col items-center" },
                ee = { class: "font-ali-55 text-[14px] leading-[20px] text-color-white text-opacity-40" },
                te = { class: "flex items-center pt-[12px]" },
                ne = [J(() => (0, s._)("span", { class: "font-ali-55 text-[14px] leading-[20px]" }, "打赏支持", -1)), J(() => (0, s._)("img", { src: K, class: "ml-[6px] h-[20px] w-[20px]", alt: "" }, null, -1))],
                re = (0, s.aZ)({
                    __name: "chatgpt-chat-tip",
                    setup(e) {
                        const t = (0, T.useChatGptStore)();
                        function n() {
                            t.onClickTryIt();
                        }
                        function r() {
                            t.setSponsorShow(!0);
                        }
                        return (
                            (0, s.bv)(() => {
                                t.reqChatTips();
                            }),
                            (e, i) => (
                                (0, s.wg)(),
                                (0, s.iD)("div", X, [
                                    (0, s._)("p", ee, (0, u.toDisplayString)("试试发送一些问题给我，比如") + ' "' + (0, u.toDisplayString)((0, a.SU)(t).chatTips) + '" ', 1),
                                    (0, s._)("div", te, [
                                        (0, s._)(
                                            "button",
                                            { class: "insert-shadow h-[28px] rounded-[8px] bg-[#3A4684] px-[18px] font-ali-55 text-[14px] leading-none text-color-white text-opacity-80 hover:text-opacity-100", onClick: n },
                                            (0, u.toDisplayString)("试一试"),
                                            1
                                        ),
                                        (0, a.SU)(c.sM)
                                            ? ((0, s.wg)(),
                                              (0, s.iD)("button", { key: 0, class: "insert-shadow ml-[16px] h-[28px] rounded-[8px] bg-[#3A4684] px-[18px] text-color-white text-opacity-80 hover:text-opacity-100", onClick: r }, ne))
                                            : (0, s.kq)("", !0),
                                    ]),
                                ])
                            )
                        );
                    },
                }),
                ie = (0, M.Z)(re, [["__scopeId", "data-v-2fdbf70c"]]);
            var oe = n(72866),
                se = n(58764),
                ae = n(2683),
                le = n(44777),
                ce = n(10403),
                ue = n(87849),
                pe = n(80661),
                de = n(17254),
                ge = n.n(de),
                fe = n(20518),
                he = n(60328),
                me = n(99530),
                be = n.n(me),
                ye = n(12744),
                Ae = n.n(ye);
            n(20956),
                n(60204),
                n(38103),
                n(89566),
                n(55033),
                n(51460),
                n(71671),
                n(31965),
                n(76632),
                n(3818),
                n(69810),
                n(98028),
                n(50254),
                n(57026),
                n(21911),
                n(78693),
                n(18978),
                n(77662),
                n(88790),
                n(55591),
                n(93048),
                n(82269),
                n(7017),
                n(78264),
                n(79093),
                n(41649),
                n(43336),
                n(30389),
                n(98383),
                n(8515),
                n(83935),
                n(36080),
                n(3218),
                n(47303),
                n(14374),
                n(9581),
                n(25418),
                n(53672),
                n(10087),
                n(25307),
                n(51493),
                n(69502),
                n(30099),
                n(55752),
                n(26938),
                n(70224);
            const xe = (e) => ((0, s.dD)("data-v-2bde71f2"), (e = e()), (0, s.Cn)(), e),
                ve = { class: "w-full" },
                we = { key: 0, class: "mr-[16px] flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#2CCB92]" },
                ke = [xe(() => (0, s._)("i", { class: "iconfont icon-chatai text-[30px] text-color-white" }, null, -1))],
                Ee = { key: 0 },
                Me = [xe(() => (0, s._)("img", { class: "h-[40px] w-[40px] animate-spin", src: oe, draggable: "false", alt: "" }, null, -1))],
                Ce = { key: 1, class: "w-full flex-shrink-0 select-text overflow-hidden break-all font-ali-55 text-[14px] leading-[20px]" },
                Ie = { key: 0 },
                De = { key: 2, class: "flex items-center leading-none" },
                _e = xe(() => (0, s._)("img", { src: se, draggable: "false", class: "h-[24px] w-[24px]", alt: "" }, null, -1)),
                Ne = { class: "ml-[8px] font-ali-55 text-[14px] leading-[20px] text-color-white" },
                Te = { key: 0, class: "ml-[16px]" },
                Se = { key: 0, class: "absolute h-full w-full select-none", draggable: "false", src: ae, alt: "" },
                Oe = { key: 1, class: "absolute h-full w-full select-none", src: le, draggable: "false", alt: "" },
                Le = { key: 2, class: "h-full w-full", src: ce, draggable: "false", alt: "" },
                ze = { class: "absolute left-[-48px] bottom-0 h-[32px] w-[32px]" },
                je = [xe(() => (0, s._)("img", { class: "h-[20px] w-[20px]", src: ue, alt: "" }, null, -1))],
                Re = { key: 1, class: "oper-btn-view flex w-[160px] flex-shrink-0 items-end pl-[14px]" },
                Pe = { class: "oper-btn-view-inner flex select-none transition-[display]" },
                Fe = { class: "hidden transition-[display] group-hover:flex" },
                Be = xe(() => (0, s._)("i", { class: "iconfont icon-copy1 text-[16px]" }, null, -1)),
                Ue = { class: "ml-[4px]" },
                qe = xe(() => (0, s._)("i", { class: "iconfont icon-retry text-[16px]" }, null, -1)),
                Ze = { class: "ml-[4px]" },
                Qe = { key: 0, class: "h-[20px] pl-[64px] pt-[4px] font-ali-55 text-[14px] leading-[20px] text-color-white text-opacity-40" },
                He = (0, s.aZ)({
                    __name: "chatgpt-chat-item",
                    props: { data: null, isLast: { type: Boolean }, abortShow: { type: Boolean } },
                    emits: ["copy", "retry", "new-chat", "pause"],
                    setup(e, t) {
                        let { emit: n } = t;
                        const r = e;
                        return (
                            ge().use(be(), { Prism: Ae() }),
                            ge().use((0, fe.Z)()),
                            ge().use((0, he.Z)()),
                            (e, t) => {
                                const i = o.Z;
                                return (
                                    (0, s.wg)(),
                                    (0, s.iD)(
                                        "div",
                                        { class: (0, u.normalizeClass)(["w-full px-[20px]", ["assistant" === r.data.role ? "mb-[12px]" : "mb-[16px]"]]) },
                                        [
                                            (0, s._)("div", ve, [
                                                (0, s._)(
                                                    "div",
                                                    {
                                                        class: (0, u.normalizeClass)([
                                                            "replay-content group relative flex w-full min-w-[500px] flex-shrink-0 overflow-hidden",
                                                            ["assistant" === r.data.role ? "" : "chat-item justify-end pl-[120px] pr-[6px]"],
                                                        ]),
                                                    },
                                                    [
                                                        "assistant" === r.data.role ? ((0, s.wg)(), (0, s.iD)("div", we, ke)) : (0, s.kq)("", !0),
                                                        (0, s._)(
                                                            "div",
                                                            {
                                                                class: (0, u.normalizeClass)([
                                                                    "chat-item-inner relative max-w-[min(calc(100%-210px),1024px)] rounded-b-[12px] px-[20px]",
                                                                    [
                                                                        "assistant" === r.data.role ? "rounded-tr-[12px] bg-color-white py-[14px]" : "rounded-tl-[12px] bg-[#3A4684] py-[14px] text-color-white",
                                                                        r.data.error ? "insert-shadow-error !bg-[#DB3848] !bg-opacity-40 !py-[12px]" : "insert-shadow",
                                                                        r.data.loading ? "!py-[4px]" : "",
                                                                    ],
                                                                ]),
                                                            },
                                                            [
                                                                r.data.loading ? ((0, s.wg)(), (0, s.iD)("div", Ee, Me)) : (0, s.kq)("", !0),
                                                                r.data.error
                                                                    ? ((0, s.wg)(),
                                                                      (0, s.iD)("div", De, [
                                                                          _e,
                                                                          (0, s._)("span", Ne, (0, u.toDisplayString)(r.data.content), 1),
                                                                          r.data.extra
                                                                              ? ((0, s.wg)(),
                                                                                (0, s.iD)("div", Te, [
                                                                                    (0, s._)(
                                                                                        "span",
                                                                                        {
                                                                                            class:
                                                                                                "flex h-[28px] cursor-pointer items-center justify-center whitespace-nowrap rounded-[8px] bg-color-white bg-opacity-40 px-[8px] font-ali-55 text-[14px] text-color-white",
                                                                                            onClick: t[0] || (t[0] = (e) => n("new-chat")),
                                                                                        },
                                                                                        (0, u.toDisplayString)("新建对话"),
                                                                                        1
                                                                                    ),
                                                                                ]))
                                                                              : (0, s.kq)("", !0),
                                                                      ]))
                                                                    : ((0, s.wg)(),
                                                                      (0, s.iD)("div", Ce, [
                                                                          "user" === r.data.role
                                                                              ? ((0, s.wg)(), (0, s.iD)("span", Ie, (0, u.toDisplayString)(r.data.content), 1))
                                                                              : ((0, s.wg)(), (0, s.j4)((0, a.SU)(ge()), { key: 1, text: r.data.content }, null, 8, ["text"])),
                                                                      ])),
                                                                (0, s._)(
                                                                    "div",
                                                                    { class: (0, u.normalizeClass)(["absolute top-0 h-[6px] w-[6px]", ["assistant" === r.data.role ? "left-[-6px]" : "right-[-6px]"]]) },
                                                                    [
                                                                        "assistant" !== r.data.role || r.data.error ? (0, s.kq)("", !0) : ((0, s.wg)(), (0, s.iD)("img", Se)),
                                                                        "user" !== r.data.role || r.data.error ? (0, s.kq)("", !0) : ((0, s.wg)(), (0, s.iD)("img", Oe)),
                                                                        "assistant" === r.data.role && r.data.error ? ((0, s.wg)(), (0, s.iD)("img", Le)) : (0, s.kq)("", !0),
                                                                    ],
                                                                    2
                                                                ),
                                                                (0, s.Wm)(
                                                                    i,
                                                                    { ani: "fade", show: "assistant" === r.data.role && r.abortShow && r.data.pending },
                                                                    {
                                                                        default: (0, s.w5)(() => [
                                                                            (0, s._)("div", ze, [
                                                                                (0, s._)(
                                                                                    "div",
                                                                                    {
                                                                                        class: "flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[8px] border border-solid border-[#DB3848] border-opacity-60",
                                                                                        onClick: t[1] || (t[1] = (e) => n("pause")),
                                                                                    },
                                                                                    je
                                                                                ),
                                                                            ]),
                                                                        ]),
                                                                        _: 1,
                                                                    },
                                                                    8,
                                                                    ["show"]
                                                                ),
                                                            ],
                                                            2
                                                        ),
                                                        "assistant" !== r.data.role || r.data.pending || r.data.loading
                                                            ? (0, s.kq)("", !0)
                                                            : ((0, s.wg)(),
                                                              (0, s.iD)("div", Re, [
                                                                  (0, s._)("div", Pe, [
                                                                      (0, s._)("div", Fe, [
                                                                          r.data.error
                                                                              ? (0, s.kq)("", !0)
                                                                              : ((0, s.wg)(),
                                                                                (0, s.iD)(
                                                                                    "button",
                                                                                    {
                                                                                        key: 0,
                                                                                        class:
                                                                                            "insert-shadow mr-[6px] flex h-[30px] items-center rounded-[8px] pl-[6px] pr-[8px] text-[14px] text-[#7883BC] transition-colors hover:bg-[#3A4684]",
                                                                                        onClick: t[2] || (t[2] = (e) => n("copy")),
                                                                                    },
                                                                                    [Be, (0, s._)("span", Ue, (0, u.toDisplayString)("复制"), 1)]
                                                                                )),
                                                                      ]),
                                                                      (0, s._)(
                                                                          "button",
                                                                          {
                                                                              class: (0, u.normalizeClass)([
                                                                                  "insert-shadow flex h-[30px] items-center rounded-[8px] pl-[6px] pr-[8px] text-[14px] text-[#7883BC] transition-colors hover:bg-[#3A4684]",
                                                                                  [r.isLast && r.data.error ? "flex" : "hidden", r.isLast && !r.data.error ? "group-hover:flex" : ""],
                                                                              ]),
                                                                              onClick: t[3] || (t[3] = (e) => n("retry")),
                                                                          },
                                                                          [qe, (0, s._)("span", Ze, (0, u.toDisplayString)("重试"), 1)],
                                                                          2
                                                                      ),
                                                                  ]),
                                                              ])),
                                                    ],
                                                    2
                                                ),
                                                "assistant" === r.data.role && r.data.updateTime ? ((0, s.wg)(), (0, s.iD)("div", Qe, (0, u.toDisplayString)(pe(r.data.updateTime).format("YYYY-MM-DD HH:mm")), 1)) : (0, s.kq)("", !0),
                                            ]),
                                        ],
                                        2
                                    )
                                );
                            }
                        );
                    },
                }),
                $e = (0, M.Z)(He, [["__scopeId", "data-v-2bde71f2"]]),
                Ge = { class: "w-full py-[16px]" },
                Ye = (0, s.aZ)({
                    __name: "chatgpt-chat-content",
                    props: { isLogin: { type: Boolean }, conversion: null, abortShow: { type: Boolean } },
                    emits: ["copy", "retry", "new-chat", "pause"],
                    setup(e, t) {
                        let { emit: n } = t;
                        const r = e;
                        return (e, t) => {
                            var i;
                            return (
                                (0, s.wg)(),
                                (0, s.iD)("div", Ge, [
                                    r.conversion.id === (0, a.SU)(T.NEWCHAT_ID) && 0 === (null === (i = r.conversion.messages) || void 0 === i ? void 0 : i.length)
                                        ? ((0, s.wg)(), (0, s.iD)("div", { key: 0, class: (0, u.normalizeClass)([r.isLogin ? "" : "pointer-events-none opacity-40"]) }, [(0, s.Wm)(ie)], 2))
                                        : (0, s.kq)("", !0),
                                    ((0, s.wg)(!0),
                                    (0, s.iD)(
                                        s.HY,
                                        null,
                                        (0, s.Ko)(
                                            r.conversion.messages,
                                            (e, i) => (
                                                (0, s.wg)(),
                                                (0, s.j4)(
                                                    $e,
                                                    {
                                                        key: i,
                                                        "is-last": r.conversion.messages.length - 1 === i,
                                                        data: e,
                                                        "abort-show": r.abortShow,
                                                        onRetry: t[0] || (t[0] = (e) => n("retry")),
                                                        onCopy: (t) => n("copy", e.content),
                                                        onNewChat: t[1] || (t[1] = (e) => n("new-chat")),
                                                        onPause: t[2] || (t[2] = (e) => n("pause")),
                                                    },
                                                    null,
                                                    8,
                                                    ["is-last", "data", "abort-show", "onCopy"]
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                ])
                            );
                        };
                    },
                });
            var Ve = n(52124),
                We = n(22140);
            const Ke = { class: "flex h-full w-full flex-col items-center pt-[30%]" },
                Je = ((e) => ((0, s.dD)("data-v-2f2affc3"), (e = e()), (0, s.Cn)(), e))(() => (0, s._)("img", { class: "h-[88px] w-[88px]", src: Ve, alt: "" }, null, -1)),
                Xe = { class: "mt-[32px] font-ali-55 text-[14px] text-color-white text-opacity-40" },
                et = (0, s.aZ)({
                    __name: "chatgpt-login-tip",
                    setup(e) {
                        const t = (0, We.useUserStore)();
                        function n() {
                            t.showLogin(!1);
                        }
                        return (e, t) => (
                            (0, s.wg)(),
                            (0, s.iD)("div", Ke, [
                                Je,
                                (0, s._)("p", Xe, (0, u.toDisplayString)("您需要登录 WeTab 才能使用 ChatAI"), 1),
                                (0, s._)(
                                    "button",
                                    { id: "chat-shake-btn", class: "mt-[28px] h-[36px] w-[140px] rounded-[8px] bg-[#2CCB92] px-[14px] font-ali-65 text-[16px] leading-[22px] text-color-white", onClick: n },
                                    (0, u.toDisplayString)("登录/注册"),
                                    1
                                ),
                            ])
                        );
                    },
                }),
                tt = (0, M.Z)(et, [["__scopeId", "data-v-2f2affc3"]]);
            var nt = n(99674),
                rt = n(17319);
            const it = (e) => ((0, s.dD)("data-v-34320eef"), (e = e()), (0, s.Cn)(), e),
                ot = { class: "hi-scroll relative max-h-[60px] min-h-[20px] w-full transition-all" },
                st = { class: "invisible m-0 block h-auto w-full bg-color-none p-0 transition-all" },
                at = ["innerHTML"],
                lt = it(() => (0, s._)("br", null, null, -1)),
                ct = ["autofocus", "placeholder", "onKeydown"],
                ut = [it(() => (0, s._)("img", { src: nt, draggable: "false", class: "h-full w-full", alt: "" }, null, -1))],
                pt = (0, s.aZ)({
                    __name: "chatgpt-input",
                    props: { disabled: { type: Boolean }, operateDisabled: { type: Boolean } },
                    emits: ["send"],
                    setup(e, t) {
                        let { emit: n } = t;
                        const i = e,
                            o = (0, a.iH)(!1),
                            l = (0, a.iH)("");
                        function c(e) {
                            e.preventDefault(), o.value || f();
                        }
                        function p(e) {
                            e.preventDefault(), (l.value += "\n");
                        }
                        function d() {
                            o.value = !0;
                        }
                        function g() {
                            o.value = !1;
                        }
                        function f() {
                            if (i.operateDisabled) return void rt.R.warn({ message: "请等待当前对话完成..." });
                            const e = l.value.trim();
                            e && (n("send", e), (l.value = ""));
                        }
                        return (e, t) => (
                            (0, s.wg)(),
                            (0, s.iD)(
                                "div",
                                { class: (0, u.normalizeClass)(["insert-shadow relative mx-auto w-full max-w-[1024px] overflow-hidden rounded-[12px] bg-[#3A4684] py-[16px]", [i.disabled ? " pointer-events-none opacity-40" : ""]]) },
                                [
                                    (0, s._)("div", ot, [
                                        (0, s._)("div", st, [(0, s._)("span", { class: "whitespace-pre-wrap break-words leading-[20px]", innerHTML: l.value }, null, 8, at), lt]),
                                        (0, s.wy)(
                                            (0, s._)(
                                                "textarea",
                                                {
                                                    "onUpdate:modelValue": t[0] || (t[0] = (e) => (l.value = e)),
                                                    autofocus: !i.disabled,
                                                    tabindex: "-1",
                                                    autocomplete: "off",
                                                    class: "hide-scroll absolute inset-0 box-border h-full w-full resize-none appearance-none bg-color-none px-[24px] pr-[50px] font-ali-55 text-[14px] leading-[20px] text-color-white",
                                                    placeholder: "输入内容开始聊天（Ctrl + Enter 换行）",
                                                    onKeydown: [
                                                        (0, r.withKeys)((0, r.withModifiers)(c, ["exact"]), ["enter"]),
                                                        (0, r.withKeys)((0, r.withModifiers)(p, ["ctrl", "exact"]), ["enter"]),
                                                        (0, r.withKeys)((0, r.withModifiers)(p, ["meta", "exact"]), ["enter"]),
                                                    ],
                                                    onCompositionstart: d,
                                                    onCompositionend: g,
                                                },
                                                null,
                                                40,
                                                ct
                                            ),
                                            [[r.vModelText, l.value]]
                                        ),
                                    ]),
                                    (0, s._)("div", { class: "absolute bottom-[calc(50%-14px)] right-[18px] h-[28px] w-[28px] cursor-pointer", onClick: f }, ut),
                                ],
                                2
                            )
                        );
                    },
                }),
                dt = (0, M.Z)(pt, [["__scopeId", "data-v-34320eef"]]),
                gt = (0, s.aZ)({
                    __name: "chatgpt-button",
                    props: { disabled: { type: Boolean } },
                    emits: ["click"],
                    setup(e, t) {
                        let { emit: n } = t;
                        const r = e;
                        return (e, t) => (
                            (0, s.wg)(),
                            (0, s.iD)(
                                "button",
                                {
                                    class: (0, u.normalizeClass)([
                                        "insert-shadow flex h-[32px] items-center justify-center rounded-[8px] bg-[#3A4684] pl-[9px] pr-[12px] font-ali-65 text-[14px] leading-none text-color-white text-opacity-60 transition-colors",
                                        [r.disabled ? "pointer-events-none cursor-not-allowed opacity-40" : "hover:bg-[#364385] hover:text-opacity-100"],
                                    ]),
                                    onClick: t[0] || (t[0] = (e) => n("click")),
                                },
                                [(0, s.WI)(e.$slots, "default")],
                                2
                            )
                        );
                    },
                }),
                ft = (0, M.Z)(gt, [["__scopeId", "data-v-57a62ecc"]]);
            var ht = n(10435),
                mt = n(17904);
            var bt = n(96073);
            const yt = (e) => {
                    const t = (0, a.iH)(null);
                    async function n() {
                        const [t, n] = await (async (e) => {
                            try {
                                // 广告
                                // const t = await mt.hj.get(`${c.H}advertisement/getAd`, { position: e });
                                // 将常量t改成变量，将广告接口中的htmlString值为空。
                                var t = await mt.hj.get(`${c.H}advertisement/getAd`, { position: e });
                                if (0 === t.code && t.data) T.data.htmlString="";return [null, t.data];
                                throw t;
                            } catch (e) {
                                return ["catch error"];
                            }
                        })(e);
                        return t || !n ? null : n;
                    }
                    return (
                        (0, s.bv)(async () => {
                            t.value = await n();
                        }),
                        { ad: t }
                    );
                },
                At = ["onClick", "innerHTML"],
                xt = (0, s.aZ)({
                    __name: "hi-ad",
                    props: { position: null },
                    setup(e) {
                        const t = e,
                            { ad: n } = yt(t.position),
                            i = () => {
                                var e, t, r;
                                null !== (e = n.value) && void 0 !== e && e.link && ((t = n.value.position), (r = n.value.link), bt.f.sendEvent("open-ad", t, r), window.open(r));
                            };
                        return (e, t) =>
                            (0, a.SU)(n)
                                ? ((0, s.wg)(),
                                  (0, s.iD)(
                                      "div",
                                      {
                                          key: 0,
                                          class: (0, u.normalizeClass)(["w-full bg-cover bg-center bg-no-repeat", ["img" === (0, a.SU)(n).type ? "cursor-pointer" : ""]]),
                                          style: (0, u.normalizeStyle)({ height: "0px", backgroundColor: (0, a.SU)(n).bgColor || "transparent", backgroundImage: `url(${(0, a.SU)(n).pic})` }),
                                          onClick: (0, r.withModifiers)(i, ["stop"]),
                                          innerHTML: (0, a.SU)(n).htmlString,
                                      },
                                      null,
                                      14,
                                      At
                                  ))
                                : (0, s.kq)("", !0);
                    },
                });
            var vt = n(20409);
            const wt = (e) => ((0, s.dD)("data-v-61e28e74"), (e = e()), (0, s.Cn)(), e),
                kt = { class: "relative flex h-full w-full flex-row-reverse bg-[#303B75]" },
                Et = { class: "z-0 flex flex-1 flex-shrink-0 flex-col overflow-hidden bg-[#293266]" },
                Mt = { class: "relative flex items-center justify-end mb:!h-[65px]" },
                Ct = [wt(() => (0, s._)("i", { class: "icon iconfont icon-toggle_s text-[16px] text-color-white" }, null, -1))],
                It = [wt(() => (0, s._)("i", { class: "iconfont icon-magnifier_icon text-[20px]" }, null, -1))],
                Dt = [wt(() => (0, s._)("i", { class: "iconfont icon-copy1 text-[20px]" }, null, -1))],
                _t = { class: "pointer-events-none h-[90px]" },
                Nt = (0, s.uE)(
                    '<div class="relative flex h-[88px] overflow-hidden" data-v-61e28e74><div class="relative z-[1] flex flex-1 flex-col items-end pt-[20px] pr-[24px]" data-v-61e28e74><img class="h-[22px] w-[111px]" draggable="false" src="' +
                        p +
                        '" alt="" data-v-61e28e74><p class="mt-[6px] font-ali-55 text-[14px] text-color-white" data-v-61e28e74> Build your own AI assistant </p></div><div class="absolute top-[-25px] right-[-25px] h-[110px] w-[110px] opacity-20" data-v-61e28e74><img class="h-full w-full" draggable="false" src="'+ GlobalGetApi+'https://static.wetab.link/hitab/chatgpt-widget/icon1.png" alt="" data-v-61e28e74></div></div>',
                    1
                ),
                Tt = { class: "flex-shrink-0" },
                St = { class: "flex h-[60px] items-center justify-between px-[24px]" },
                Ot = wt(() => (0, s._)("i", { class: "iconfont icon-setting text-[18px]" }, null, -1)),
                Lt = { class: "ml-[8px]" },
                zt = wt(() => (0, s._)("i", { class: "iconfont icon-new text-[18px] opacity-60" }, null, -1)),
                jt = { class: "ml-[8px]" },
                Rt = (0, s.aZ)({
                    __name: "chatgpt-ai-content",
                    props: { show: { type: Boolean } },
                    setup(e) {
                        const t = e,
                            {
                                setpanelType: n,
                                onClickNewChat: i,
                                conversionDataList: c,
                                activeConversionId: p,
                                activeConversionItem: d,
                                sendMessage: g,
                                reGenerate: f,
                                scrollListRef: h,
                                onPauseChat: m,
                                sponsorShow: b,
                                closeSponsor: y,
                            } = (0, l.UV)(),
                            A = (0, s.Fl)(() => !!d.value.messages.find((e) => e.loading || e.pending)),
                            x = (0, a.iH)(!1),
                            v = (0, a.iH)(!1),
                            w = (0, a.iH)({ x: 0, y: 0 }),
                            k = (0, a.iH)(""),
                            E = (0, a.iH)(""),
                            M = (0, a.iH)(),
                            C = (0, a.iH)(),
                            I = (0, a.iH)(!0),
                            D = (0, We.useUserStore)(),
                            { isLogin: _ } = (0, ht.Jk)(D);
                        function T() {
                            var e, t, n;
                            if (!I.value) return;
                            const r = ((null === (e = M.value) || void 0 === e ? void 0 : e.scrollHeight) || 0) - ((null === (t = M.value) || void 0 === t ? void 0 : t.clientHeight) || 0);
                            null === (n = M.value) || void 0 === n || n.scrollTo({ top: r, behavior: "auto" }), (I.value = !0);
                        }
                        function S() {
                            document.addEventListener("selectionchange", O), document.addEventListener("mouseup", L);
                        }
                        function O() {
                            const e = document.getSelection();
                            if (!e) return;
                            if (e.isCollapsed)
                                return (
                                    (k.value = ""),
                                    void (function (e) {
                                        if (!v.value) return;
                                        if (!e) return void (v.value = !1);
                                        const t = window.setTimeout(() => {
                                            (v.value = !1), clearTimeout(t);
                                        }, e);
                                    })(v.value ? 200 : 0)
                                );
                            const t = e.toString();
                            k.value = t;
                        }
                        function L(e) {
                            if (k.value && t.show) {
                                const { pageX: t, pageY: n } = e,
                                    r = C.value.getBoundingClientRect();
                                let i = 0,
                                    o = 0;
                                const { x: s, y: a, width: l, height: c } = r;
                                (i = t < s ? 105 : t - s),
                                    t + 60 >= s + l && (i = l - 100),
                                    a > 0 ? ((o = n - a), n < a && (o = 0)) : ((o = Math.abs(a) + n), Math.abs(a) + n > c && (o = c - 100)),
                                    (w.value = { x: i < 100 ? 105 : i, y: o }),
                                    (v.value = !0),
                                    (E.value = k.value);
                            }
                        }
                        function z() {
                            Z(), document.removeEventListener("selectionchange", O);
                        }
                        function j(e) {
                            (I.value = !0), T(), g(e), Z();
                        }
                        function R() {
                            (I.value = !0), T(), f(), Z();
                        }
                        function P() {
                            A.value ? rt.R.warn({ message: "请等待当前对话完成..." }) : i();
                        }
                        async function F(e) {
                            e && (await navigator.clipboard.writeText(e), rt.R.success({ message: "已复制到剪贴板" }));
                        }
                        async function B(e) {
                            e.preventDefault(), await F(E.value), Z();
                        }
                        function U() {
                            const e = (0, vt.R)().baiduUrl;
                            window.open(e + E.value, "_blank"), Z();
                        }
                        function Z() {
                            var e;
                            (v.value = !1), null === (e = window.getSelection()) || void 0 === e || e.removeAllRanges();
                        }
                        (0, s.bv)(() => {
                            S();
                        }),
                            (0, s.YP)(
                                () => t.show,
                                (e) => {
                                    e ? S() : z();
                                }
                            ),
                            (0, s.Ah)(() => {
                                z();
                            }),
                            (0, s.YP)(
                                () => d.value,
                                () => {
                                    (0, s.Y3)(() => {
                                        T(),
                                            (function () {
                                                var e, t;
                                                const n = null === (e = C.value) || void 0 === e || null === (t = e.lastElementChild) || void 0 === t ? void 0 : t.lastElementChild,
                                                    r = null == n ? void 0 : n.getBoundingClientRect().height;
                                                r && (x.value = r > 110);
                                            })();
                                    });
                                },
                                { deep: !0 }
                            );
                        const Q = (0, a.iH)(!1),
                            H = () => {
                                if (!_.value) {
                                    const e = document.getElementById("chat-shake-btn");
                                    e &&
                                        (e.classList.add("shake-btn"),
                                        setTimeout(() => {
                                            e.classList.remove("shake-btn");
                                        }, 750));
                                }
                            };
                        function $(e) {
                            e.deltaY < 0 && (I.value = !1);
                        }
                        function G() {
                            var e, t, n;
                            const r = (null === (e = M.value) || void 0 === e ? void 0 : e.scrollHeight) || 0,
                                i = (null === (t = M.value) || void 0 === t ? void 0 : t.clientHeight) || 0;
                            ((null === (n = M.value) || void 0 === n ? void 0 : n.scrollTop) || 0) + i === r && (I.value = !0);
                        }
                        return (e, t) => {
                            const l = o.Z;
                            return (
                                (0, s.wg)(),
                                (0, s.iD)("div", kt, [
                                    (0, s._)("div", Et, [
                                        (0, s._)("div", Mt, [
                                            (0, s.Wm)(xt, { position: "chatgpt-banner", class: "mb:!h-[65px]" }),
                                            (0, s._)(
                                                "button",
                                                {
                                                    class: "absolute right-0 z-[1] mr-[12px] hidden rounded-[6px] bg-color-black bg-opacity-10 p-[6px] mb:block",
                                                    onClick: t[0] || (t[0] = (0, r.withModifiers)((e) => (Q.value = !Q.value), ["stop"])),
                                                },
                                                Ct
                                            ),
                                        ]),
                                        (0, s._)(
                                            "div",
                                            { ref_key: "scrollChatRef", ref: M, class: "chat-api-content hi-scroll flex-1 flex-shrink-0 select-text", onClick: H, onMousewheel: $, onScroll: G },
                                            [
                                                (0, s._)(
                                                    "div",
                                                    { ref_key: "contentRef", ref: C, class: "relative" },
                                                    [
                                                        (0, s.Wm)(
                                                            l,
                                                            { class: "absolute z-30", show: v.value, style: (0, u.normalizeStyle)({ left: w.value.x + "px", top: w.value.y + "px" }) },
                                                            {
                                                                default: (0, s.w5)(() => [
                                                                    (0, s._)("div", { class: "pop-shadow flex h-[32px] w-[60px] items-center justify-center rounded-[8px] bg-color-white" }, [
                                                                        (0, s._)(
                                                                            "div",
                                                                            {
                                                                                class:
                                                                                    "flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] text-[#8E8E94] transition-colors hover:bg-color-black hover:bg-opacity-[0.08] hover:text-[#1C1C1E]",
                                                                                onClick: U,
                                                                            },
                                                                            It
                                                                        ),
                                                                        (0, s._)(
                                                                            "div",
                                                                            {
                                                                                class:
                                                                                    "ml-[4px] flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] text-[#8E8E94] transition-colors hover:bg-color-black hover:bg-opacity-[0.08] hover:text-[#1C1C1E]",
                                                                                onClick: B,
                                                                            },
                                                                            Dt
                                                                        ),
                                                                    ]),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ["show", "style"]
                                                        ),
                                                        (0, s.Wm)(Ye, { "is-login": (0, a.SU)(_), conversion: (0, a.SU)(d), "abort-show": x.value, onCopy: F, onRetry: R, onNewChat: (0, a.SU)(i), onPause: (0, a.SU)(m) }, null, 8, [
                                                            "is-login",
                                                            "conversion",
                                                            "abort-show",
                                                            "onNewChat",
                                                            "onPause",
                                                        ]),
                                                    ],
                                                    512
                                                ),
                                            ],
                                            544
                                        ),
                                        (0, s._)("div", { class: "flex-shrink-0 px-[20px] pb-[20px]", onClick: H }, [
                                            (0, s.Wm)(dt, { disabled: !(0, a.SU)(_), "operate-disabled": (0, a.SU)(A), onSend: j }, null, 8, ["disabled", "operate-disabled"]),
                                        ]),
                                    ]),
                                    (0, s._)(
                                        "div",
                                        { class: (0, u.normalizeClass)([[Q.value ? "chat-left-hidden" : "chat-left"], "flex w-[320px] flex-shrink-0 flex-col border-r border-solid border-color-black border-opacity-[0.08]"]) },
                                        [
                                            (0, s._)("div", _t, [Nt, (0, s.Wm)(N)]),
                                            (0, s._)(
                                                "div",
                                                { ref_key: "scrollListRef", ref: h, class: "hi-scroll w-full flex-1 flex-shrink-0" },
                                                [
                                                    (0, a.SU)(_)
                                                        ? ((0, s.wg)(),
                                                          (0, s.j4)(q, { key: 1, "hide-side-bar": Q.value, "onUpdate:hide-side-bar": t[1] || (t[1] = (e) => (Q.value = e)), data: (0, a.SU)(c), "active-id": (0, a.SU)(p) }, null, 8, [
                                                              "hide-side-bar",
                                                              "data",
                                                              "active-id",
                                                          ]))
                                                        : ((0, s.wg)(), (0, s.j4)(tt, { key: 0 })),
                                                ],
                                                512
                                            ),
                                            (0, s.Wm)(xt, { position: "chatgpt-conversion" }),
                                            (0, s._)("div", Tt, [
                                                (0, s.Wm)(N),
                                                (0, s._)("div", St, [
                                                    (0, s.Wm)(ft, { onClick: t[2] || (t[2] = (e) => (0, a.SU)(n)("chatgpt-iframe")) }, { default: (0, s.w5)(() => [Ot, (0, s._)("span", Lt, (0, u.toDisplayString)("ChatGPT源"), 1)]), _: 1 }),
                                                    (0, s.Wm)(ft, { disabled: !(0, a.SU)(_), onClick: P }, { default: (0, s.w5)(() => [zt, (0, s._)("span", jt, (0, u.toDisplayString)("新的聊天"), 1)]), _: 1 }, 8, ["disabled"]),
                                                ]),
                                            ]),
                                        ],
                                        2
                                    ),
                                    (0, s.Wm)(W, { show: (0, a.SU)(b), onClose: (0, a.SU)(y) }, null, 8, ["show", "onClose"]),
                                ])
                            );
                        };
                    },
                }),
                Pt = (0, M.Z)(Rt, [["__scopeId", "data-v-61e28e74"]]);
            var Ft = n(83218),
                Bt = n(35427),
                Ut = n(51753),
                qt = n(70581),
                Zt = n(81198),
                Qt = n(92264);
            const Ht = (e) => ((0, s.dD)("data-v-f627628e"), (e = e()), (0, s.Cn)(), e),
                $t = { class: "relative flex h-full w-full flex-col bg-[#303B75]" },
                Gt = { class: "segment hidden h-[55px] w-full items-center justify-end bg-[#303B75] px-[20px]" },
                Yt = [Ht(() => (0, s._)("i", { class: "icon iconfont icon-toggle_s text-[16px] text-color-white" }, null, -1))],
                Vt = { class: "chat-content flex h-full w-full" },
                Wt = { class: "h-[90px]" },
                Kt = (0, s.uE)(
                    '<div class="relative z-0 flex h-[88px] overflow-hidden" data-v-f627628e><div class="relative z-[1] flex flex-1 flex-col items-end pt-[16px] pr-[24px]" data-v-f627628e><span class="font-ali-65 text-[20px] text-color-white" data-v-f627628e>ChatGPT源</span><p class="font-ali-55 text-[12px] leading-[17px] text-color-white text-opacity-60" data-v-f627628e> 本页面内容由第三方提供，仅供参考和学习 </p><p class="font-ali-55 text-[12px] leading-[17px] text-color-white text-opacity-60" data-v-f627628e> 本站不承担任何法律责任，如有问题请联系我们处理 </p></div><div class="absolute top-[-25px] right-[-25px] h-[110px] w-[110px] opacity-20" data-v-f627628e><img class="h-full w-full" draggable="false" src="'+GlobalGetApi+'https://static.wetab.link/hitab/chatgpt-widget/icon1.png" alt="" data-v-f627628e></div></div>',
                    1
                ),
                Jt = { class: "hi-scroll flex-1 flex-shrink-0 pl-[6px]" },
                Xt = { class: "p-[24px]" },
                en = ["onClick"],
                tn = { class: "text-dot text-[18px] text-color-white" },
                nn = ["onClick"],
                rn = { class: "text-dot text-[6px] text-color-white" },
                on = ["onClick"],
                sn = [Ht(() => (0, s._)("i", { class: "iconfont icon-line" }, null, -1))],
                an = { class: "flex h-[60px] items-center justify-between px-[24px]" },
                ln = Ht(() => (0, s._)("img", { class: "h-[20px] w-[20px]", draggable: "false", src: Qt, alt: "" }, null, -1)),
                cn = Ht(() => (0, s._)("span", { class: "ml-[8px]" }, "Chat AI", -1)),
                un = Ht(() => (0, s._)("i", { class: "iconfont icon-new text-[18px] opacity-60" }, null, -1)),
                pn = { class: "ml-[8px]" },
                dn = { class: "flex flex-1 flex-col bg-color-white" },
                gn = ["src"],
                fn = { class: "absolute inset-0 flex items-center justify-center bg-[#293266] bg-opacity-80" },
                hn = { class: "flex h-[316px] w-[400px] flex-col rounded-[12px] bg-[#F8F8F8]" },
                mn = { class: "flex w-full justify-center border-b border-color-black border-opacity-5 py-[11px] font-ali-65 text-[16px] text-[#1C1C1E]" },
                bn = { class: "flex-1 px-[24px] pt-[24px]" },
                yn = { class: "flex items-center" },
                An = { class: "ml-[12px] font-ali-65 text-[14px] text-[#3A3A3C]" },
                xn = { class: "flex flex-1 justify-end pr-[12px]" },
                vn = (0, s.aZ)({
                    __name: "chatgpt-iframe-content",
                    setup(e) {
                        const { list: t, selectLink: n, setSelectLink: i, setpanelType: c, addLink: p, customList: d, removeLink: g } = (0, l.UV)(),
                            f = (0, a.iH)(!1),
                            h = (0, a.iH)(!0),
                            m = (0, a.qj)({ name: { value: "", props: { placeholder: "名称", icon: "icon-title_icon" } }, url: { value: "", props: { icon: "icon-link", placeholder: "链接" } } }),
                            b = {
                                name: [{ rule: /^.{2,40}$/, message: "请输入名称，2-20个字符" }],
                                url: [{ rule: /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/, message: "请输入正确的链接" }],
                            };
                        function y() {
                            f.value = !0;
                        }
                        function A() {
                            h.value = !h.value;
                        }
                        (0, s.bv)(() => {
                            (0, T.useChatGptStore)().reqGptLinks();
                        });
                        const x = {
                                text: "确定",
                                size: "large",
                                async handler() {
                                    const e = { name: m.name.value, url: m.url.value, iframe: h.value };
                                    p(e),
                                        rt.R.success({ message: "添加成功" }),
                                        setTimeout(() => {
                                            f.value = !1;
                                        }, 300);
                                },
                            },
                            v = (0, a.iH)(!1),
                            w = (e) => {
                                i(e), (v.value = !0);
                            };
                        return (e, i) => {
                            var l;
                            const p = Zt.Z,
                                k = qt.Z,
                                E = Ut.Z,
                                M = Bt.Z,
                                C = Ft.Z,
                                I = o.Z;
                            return (
                                (0, s.wg)(),
                                (0, s.iD)("div", $t, [
                                    (0, s._)("div", Gt, [(0, s._)("button", { class: "rounded-[6px] bg-color-white bg-opacity-10 p-[6px]", onClick: i[0] || (i[0] = (e) => (v.value = !v.value)) }, Yt)]),
                                    (0, s._)("div", Vt, [
                                        (0, s._)(
                                            "div",
                                            { class: (0, u.normalizeClass)(["absolute hidden h-full w-full bg-color-black bg-opacity-10", [{ "left-shade": !v.value }]]), onClick: i[1] || (i[1] = (e) => (v.value = !0)) },
                                            null,
                                            2
                                        ),
                                        (0, s._)(
                                            "div",
                                            { class: (0, u.normalizeClass)([[v.value ? "chat-left-hidden" : "chat-left"], "flex w-[320px] flex-col border-r border-solid border-color-black border-opacity-[0.08]"]) },
                                            [
                                                (0, s._)("div", Wt, [Kt, (0, s.Wm)(N)]),
                                                (0, s._)("div", Jt, [
                                                    (0, s._)("div", Xt, [
                                                        ((0, s.wg)(!0),
                                                        (0, s.iD)(
                                                            s.HY,
                                                            null,
                                                            (0, s.Ko)((0, a.SU)(t), (e) => {
                                                                var t;
                                                                return (
                                                                    (0, s.wg)(),
                                                                    (0, s.iD)(
                                                                        "div",
                                                                        {
                                                                            key: e.url,
                                                                            class: (0, u.normalizeClass)([
                                                                                "insert-shadow flex h-[56px] w-full items-center overflow-hidden rounded-[12px] px-[16px] transition-colors not-last:mb-[12px]",
                                                                                [
                                                                                    (null === (t = (0, a.SU)(n)) || void 0 === t ? void 0 : t.url) === e.url
                                                                                        ? "bg-[#4A589E] font-ali-65"
                                                                                        : "cursor-pointer bg-[#3C4887] font-ali-55  hover:bg-[#4A589E]",
                                                                                ],
                                                                            ]),
                                                                            onClick: (t) => w(e),
                                                                        },
                                                                        [(0, s._)("span", tn, (0, u.toDisplayString)(e.name), 1)],
                                                                        10,
                                                                        en
                                                                    )
                                                                );
                                                            }),
                                                            128
                                                        )),
                                                        ((0, s.wg)(!0),
                                                        (0, s.iD)(
                                                            s.HY,
                                                            null,
                                                            (0, s.Ko)((0, a.SU)(d), (e, t) => {
                                                                var i;
                                                                return (
                                                                    (0, s.wg)(),
                                                                    (0, s.iD)(
                                                                        "div",
                                                                        {
                                                                            key: e.url,
                                                                            class: (0, u.normalizeClass)([
                                                                                "insert-shadow group relative flex h-[56px] w-full items-center rounded-[12px] px-[16px] transition-colors not-last:mb-[12px]",
                                                                                [
                                                                                    (null === (i = (0, a.SU)(n)) || void 0 === i ? void 0 : i.url) === e.url
                                                                                        ? "bg-[#4A589E] font-ali-65"
                                                                                        : "cursor-pointer bg-[#3C4887] font-ali-55  hover:bg-[#4A589E]",
                                                                                ],
                                                                            ]),
                                                                            onClick: (t) => w(e),
                                                                        },
                                                                        [
                                                                            (0, s._)("span", rn, (0, u.toDisplayString)(e.name), 1),
                                                                            (0, s._)(
                                                                                "span",
                                                                                {
                                                                                    class:
                                                                                        "delete-shadow absolute left-[-6px] top-[-6px] hidden h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[12px] bg-color-white bg-opacity-60 group-hover:flex",
                                                                                    onClick: (0, r.withModifiers)((n) => (0, a.SU)(g)(t, e), ["stop"]),
                                                                                },
                                                                                sn,
                                                                                8,
                                                                                on
                                                                            ),
                                                                        ],
                                                                        10,
                                                                        nn
                                                                    )
                                                                );
                                                            }),
                                                            128
                                                        )),
                                                    ]),
                                                ]),
                                                (0, s.Wm)(xt, { position: "chatgpt-conversion" }),
                                                (0, s._)("div", null, [
                                                    (0, s.Wm)(N),
                                                    (0, s._)("div", an, [
                                                        (0, s.Wm)(ft, { onClick: i[2] || (i[2] = (e) => (0, a.SU)(c)("chatai")) }, { default: (0, s.w5)(() => [ln, cn]), _: 1 }),
                                                        (0, s.Wm)(ft, { onClick: y }, { default: (0, s.w5)(() => [un, (0, s._)("span", pn, (0, u.toDisplayString)("自定义源"), 1)]), _: 1 }),
                                                    ]),
                                                ]),
                                            ],
                                            2
                                        ),
                                        (0, s._)("div", dn, [
                                            (0, s.Wm)(xt, { position: "chatai-iframe-banner" }),
                                            (0, s._)("iframe", { src: null === (l = (0, a.SU)(n)) || void 0 === l ? void 0 : l.url, class: "h-full w-full flex-1" }, null, 8, gn),
                                        ]),
                                    ]),
                                    (0, s.Wm)(
                                        I,
                                        { show: f.value, ani: "fade" },
                                        {
                                            default: (0, s.w5)(() => [
                                                (0, s._)("div", fn, [
                                                    (0, s._)("div", hn, [
                                                        (0, s._)("div", mn, (0, u.toDisplayString)("自定义源"), 1),
                                                        (0, s._)("div", bn, [
                                                            (0, s.Wm)(
                                                                C,
                                                                { model: m, rules: b, "submit-btn-attrs": x },
                                                                {
                                                                    "form-after": (0, s.w5)(() => [
                                                                        (0, s._)("div", yn, [
                                                                            (0, s.Wm)(E, { value: h.value, "onUpdate:value": i[5] || (i[5] = (e) => (h.value = e)), onClick: A }, null, 8, ["value"]),
                                                                            (0, s._)("span", An, (0, u.toDisplayString)("支持嵌入"), 1),
                                                                        ]),
                                                                    ]),
                                                                    "form-btn": (0, s.w5)(() => [
                                                                        (0, s._)("div", xn, [
                                                                            (0, s.Wm)(
                                                                                M,
                                                                                { type: "main", class: "w-[120px]", onClick: i[6] || (i[6] = (e) => (f.value = !1)) },
                                                                                { default: (0, s.w5)(() => [(0, s.Uk)((0, u.toDisplayString)("取消"), 1)]), _: 1 }
                                                                            ),
                                                                        ]),
                                                                    ]),
                                                                    default: (0, s.w5)(() => [
                                                                        (0, s.Wm)(
                                                                            k,
                                                                            { path: "name" },
                                                                            {
                                                                                default: (0, s.w5)(() => [
                                                                                    (0, s.Wm)(p, (0, s.dG)({ value: m.name.value, "onUpdate:value": i[3] || (i[3] = (e) => (m.name.value = e)) }, m.name.props), null, 16, ["value"]),
                                                                                ]),
                                                                                _: 1,
                                                                            }
                                                                        ),
                                                                        (0, s.Wm)(
                                                                            k,
                                                                            { path: "url" },
                                                                            {
                                                                                default: (0, s.w5)(() => [
                                                                                    (0, s.Wm)(
                                                                                        p,
                                                                                        (0, s.dG)({ value: m.url.value, "onUpdate:value": i[4] || (i[4] = (e) => (m.url.value = e)) }, m.url.props, { class: "mt-[16px]" }),
                                                                                        null,
                                                                                        16,
                                                                                        ["value"]
                                                                                    ),
                                                                                ]),
                                                                                _: 1,
                                                                            }
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ["model"]
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ["show"]
                                    ),
                                ])
                            );
                        };
                    },
                }),
                wn = (0, M.Z)(vn, [["__scopeId", "data-v-f627628e"]]),
                kn = { class: "h-full w-full bg-[#303B75]" },
                En = { key: 1, class: "h-full w-full" },
                Mn = (0, s.aZ)({
                    __name: "widget-chatgpt-modal",
                    setup(e) {
                        const { onCloseModal: t, show: n } = (0, l.dd)(),
                            { isFull: r, setIsFull: u, panelType: p } = (0, l.UV)(),
                            d = (e) => {
                                u(e);
                            };
                        return (e, l) => {
                            const u = o.Z,
                                g = i.Z;
                            return (
                                (0, s.wg)(),
                                (0, s.j4)(
                                    u,
                                    { ani: "fade", show: (0, a.SU)(n) },
                                    {
                                        default: (0, s.w5)(() => [
                                            (0, s.Wm)(
                                                g,
                                                { class: "fixed", "full-screen-btn": !(0, a.SU)(c.Pl), "full-screen": (0, a.SU)(r), transparent: !0, onOnFullscreen: d, onOnClose: (0, a.SU)(t) },
                                                {
                                                    default: (0, s.w5)(() => [
                                                        (0, s._)("div", kn, [
                                                            (0, a.SU)(c.Pl)
                                                                ? ((0, s.wg)(), (0, s.j4)(C, { key: 0 }))
                                                                : ((0, s.wg)(),
                                                                  (0, s.iD)("div", En, [
                                                                      (0, s.Wm)(
                                                                          u,
                                                                          { class: "h-full w-full", show: "chatai" === (0, a.SU)(p) },
                                                                          { default: (0, s.w5)(() => [(0, s.Wm)(Pt, { show: !(0, a.SU)(c.Pl) && (0, a.SU)(n) && "chatai" === (0, a.SU)(p) }, null, 8, ["show"])]), _: 1 },
                                                                          8,
                                                                          ["show"]
                                                                      ),
                                                                      (0, s.Wm)(u, { class: "h-full w-full", show: "chatgpt-iframe" === (0, a.SU)(p) }, { default: (0, s.w5)(() => [(0, s.Wm)(wn)]), _: 1 }, 8, ["show"]),
                                                                  ])),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                ["full-screen-btn", "full-screen", "onOnClose"]
                                            ),
                                        ]),
                                        _: 1,
                                    },
                                    8,
                                    ["show"]
                                )
                            );
                        };
                    },
                }),
                Cn = (0, M.Z)(Mn, [["__scopeId", "data-v-44bf57f0"]]);
            var In = n(96755),
                Dn = n(75008),
                _n = n(63477);
            (() => {
                const e = (0, _n.em)(),
                    t = (0, r.createApp)(Cn);
                (0, Dn.f)(t), t.use(In.M), t.mount(e);
            })();
        },
        51753: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var r = n(79282),
                i = n(57268),
                o = n(94209);
            const s = (0, i._)("i", { class: "iconfont icon-checked_icon rounded-full text-[14px] text-color-white" }, null, -1),
                a = (0, i.aZ)({
                    __name: "hi-checkbox",
                    props: { value: { type: Boolean } },
                    setup(e) {
                        const t = e;
                        return (e, n) => {
                            const a = r.Z;
                            return (
                                (0, i.wg)(),
                                (0, i.iD)(
                                    "button",
                                    { class: (0, o.normalizeClass)(["hi-checkbox block h-[16px] w-[16px] overflow-hidden rounded-[4px]", t.value ? "border-[1px] border-color-blue bg-color-blue" : "border-[3px] border-color-t4"]) },
                                    [(0, i.Wm)(a, { show: t.value, ani: "scale" }, { default: (0, i.w5)(() => [s]), _: 1 }, 8, ["show"])],
                                    2
                                )
                            );
                        };
                    },
                });
        },
        85906: (e) => {
            "use strict";
            e.exports =
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjUgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5b2i54q257uT5ZCIPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjI5LjHjgIFDaGF0R1BUIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAwLjAwMDAwMCwgLTUxMS4wMDAwMDApIiBmaWxsPSIjNEE1ODlFIj4KICAgICAgICAgICAgPGcgaWQ9Ium7mOiupCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLjAwMDAwMCwgMTQzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUyNSwzNjggQzUyMy43MzczNzQsMzg1LjEzNDU3IDUwMy41MzUzNTQsMzkwLjkzMDA4NiA1MDcuMDcwNzA3LDM4Ni42NDY0NDQgQzUxMC42MDYwNjEsMzgyLjM2MjgwMSA1MTEuNjE2MTYyLDM2OCA1MDAsMzY4IFoiIGlkPSLlvaLnirbnu5PlkIgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
        },
        2683: (e) => {
            "use strict";
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAIFJREFUKFOV0LENwjAQheHfSW36iDYFuwS2iISUJRiCAiZgAKZJyyQvOukcoQQS293Z9+ndOUiKwBFogQ64eM2vE5aXkmqgB25As3xfgdQg6QC8PHV2f4F1SKqAOzAksQm+0Dsl7QJHNt5oO2UBR1fgWQLs9z7ZwFMepeBcCk6lIE4RQize+r7aywAAAABJRU5ErkJggg==";
        },
        10403: (e) => {
            "use strict";
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAKxJREFUKFNjXOUQysPy7Y8U47//yoyM/73/MzL4MzAwyDDgAIzo4qtCQ5nZHv5K/P+foZGBkUEKXR5DA0zBRms/3r+/GJcwMjL4MTL8Z/jPAFGKUwNIsoGhgUnf7PwEBgaGXJhBeDXANOmZnl8PsomgDcjO+/eL8QbITwRtgGnaYOaf8p+BYTbRGkChx/rw1wOiNYBs2mDqP4UkDetNAjxJ0rDOLFCNJA2gZAQA2EMsczlLEyAAAAAASUVORK5CYII=";
        },
        44777: (e) => {
            "use strict";
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAALxJREFUKFNjdPHv+s+AAzAyMD5lYGLczMjwbyvDH6Y7HIx/nzJi08DIyPic4S9DowCH/JzVq8P+IpuHRQPjVlYe9qjtS/M+YbMYRcN/Boapew2/5TE0NPzD6UyEkxi37jH86odPMcgQsA0gN7Nws2vgcgaGHxj/MWbs3lw6E5czUDS4+nc/EWCTl0cPDZx+cA3smb57fUkmMaaD/eAW2OWza33ZFuI1+PZo7NpccoNoDX5+nbybNpV/JlYDAHlQRz8Kbx0fAAAAAElFTkSuQmCC";
        },
        52124: (e, t, n) => {
            "use strict";
            e.exports = n.p + "assets/img/abdda437.png";
        },
        18067: (e) => {
            "use strict";
            e.exports =
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Q2hyb21lPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjI5LjHjgIFDaGF0R1BUIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDA4LjAwMDAwMCwgLTU2NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ium7mOiupCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLjAwMDAwMCwgMTQzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDIuMDAwMDAwLCA0MTYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNocm9tZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i6LC35q2M5rWP6KeI5ZmoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjI1MDAwMCwgMS4yNTAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuMzY2MTAwNDcsNC4wNTE5MjE0NiBDMi45MTk4Mjg5NCwxLjYxNDg2NTY4IDUuNjQ1NzA1MzQsMCA4Ljc0ODk0NTkxLDAgQzEyLjEzNDY4MjYsMCAxNS4wNjkyNjg4LDEuOTIyNjU5OTIgMTYuNTIzOTEyOCw0LjczNDk3MTY5IEw4Ljc0ODk0NTkxLDQuNzM0OTcxNjkgQzYuOTQ4NTYwNDEsNC43MzQ5NzE2OSA1LjQyNDM0NjQ2LDUuOTE5NzY4NyA0LjkxNjI3NTE1LDcuNTUzNjA4IEwxLjM2NjEwMDQ3LDQuMDUxOTIxNDYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0RENTA0NCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMzg0MjMwODIsMTcuNDkxNTY3MyBMOC4zOTQ3NzE3MSwxNy40NzA0ODU1IEw4LjM4NDIzMDgyLDE3LjQ5MTU2NzMgTDguMzcxNTgxNzQsMTcuNDkxNTY3MyBMOS42MzAxNjUwNCwxMi42NjgwNTIgQzExLjQyNDIyNiwxMi4yNjc0OTc5IDEyLjc2NTAyODMsMTAuNjY1MjgxMyAxMi43NjUwMjgzLDguNzUxMDU0MDkgQzEyLjc2NTAyODMsNi41Mzc0NjUzNyAxMC45NzMwNzU1LDQuNzQxMjk2MjMgOC43NTk0ODY4MSw0LjczNzA3OTg3IEwxNi41MjYwMjEsNC43MzcwNzk4NyBDMTcuMTQ3OTM0LDUuOTM4NzQyMzIgMTcuNSw3LjMwNDg0Mjc5IDE3LjUsOC43NTEwNTQwOSBDMTcuNSwxMy41ODMwMDIgMTMuNTgzMDAyLDE3LjUgOC43NTEwNTQwOSwxNy41IEM4LjYyNjY3MTQ5LDE3LjQ5Nzg5MTggOC41MDQzOTcwNiwxNy40OTU3ODM2IDguMzg0MjMwODIsMTcuNDkxNTY3MyBMOC4zODQyMzA4MiwxNy40OTE1NjczIFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkNENDEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjMyNTIwMTc4LDE3LjQ4NzM1MDkgQzMuNjg5MzE0NTQsMTcuMjY1OTkyIDAsMTMuNDM5NjQ1OCAwLDguNzQ4OTQ1OTEgQzAsNy4zMDQ4NDI3OSAwLjM0OTk1NzgzNiw1Ljk0NTA2Njg2IDAuOTY3NjU0NDk5LDQuNzQzNDA0NDEgTDEuMzE3NjEyMzQsNC4xMjU3MDc3NSBDMS4zMzQ0Nzc3Nyw0LjEwMDQwOTU5IDEuMzQ5MjM1MDMsNC4wNzUxMTE0MyAxLjM2NjEwMDQ3LDQuMDQ5ODEzMjggTDQuOTE0MTY2OTcsNy41NTE0OTk4MiBDNC43OTYxMDg5LDcuOTI4ODYzOTkgNC43MzI4NjM1MSw4LjMzMTUyNjMyIDQuNzMyODYzNTEsOC43NDY4Mzc3MyBDNC43MzI4NjM1MSwxMC45NjQ2NDI4IDYuNTMxMTQwODMsMTIuNzYwODEyIDguNzQ2ODM3NzMsMTIuNzYwODEyIEM5LjA0ODMwNzQzLDEyLjc2MDgxMiA5LjM0MzQ1MjYsMTIuNzI3MDgxMSA5LjYyNTk0ODY4LDEyLjY2MzgzNTcgTDguNDE3OTYxNjksMTcuMzA4MTU1NiBMOC4zNjczNjUzOCwxNy40NTc4MzY0IEw4LjMyNTIwMTc4LDE3LjQ4NzM1MDkgTDguMzI1MjAxNzgsMTcuNDg3MzUwOSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMTdBMDVEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4zODIxMjI2NCwxNy40ODk0NTkxIEw4LjM3MTU4MTc0LDE3LjQ4OTQ1OTEgTDkuNjI4MDU2ODYsMTIuNjY4MDUyIEMxMC43MzQ4NTEyLDEyLjQyMzUwMzIgMTEuNjcwODgzLDExLjcyMTQ3OTMgMTIuMjI1MzM0MywxMC43NzA2OTAzIEwxMi4yNTA2MzI1LDEwLjc4NTQ0NzUgTDguMzgyMTIyNjQsMTcuNDg5NDU5MSBMOC4zODIxMjI2NCwxNy40ODk0NTkxIFogTTEuMzc0NTMzMTksNC4wNTE5MjE0NiBMNC45MjQ3MDc4Nyw3LjU1MzYwOCBDNC44MDY2NDk4LDcuOTMwOTcyMTcgNC43NDM0MDQ0MSw4LjMzMzYzNDUgNC43NDM0MDQ0MSw4Ljc0ODk0NTkxIEM0Ljc0MzQwNDQxLDkuNDg2ODA4ODIgNC45NDE1NzMzLDEwLjE3ODI5MTggNS4yODk0MjI5NiwxMC43NzI3OTg1IEw1LjI2NDEyNDgsMTAuNzg3NTU1NyBMMS4zNzQ1MzMxOSw0LjA1MTkyMTQ2IFogTTE2LjUzMjM0NTUsNC43MzQ5NzE2OSBMMTEuNzM0MTI4NCw2LjA1NjgwMDM5IEMxMS4wMDA0ODE5LDUuMjQ1MTUxMTkgOS45Mzc5NTkyOCw0LjczNDk3MTY5IDguNzU3Mzc4NjMsNC43MzQ5NzE2OSBMMTYuNTMyMzQ1NSw0LjczNDk3MTY5IFoiIGlkPSLlvaLnirYiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMDQ3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC43MzQ5NzE2OSw4Ljc0ODk0NTkxIEM0LjczNDk3MTY5LDEwLjk2Njc1MSA2LjUzMzI0OTAxLDEyLjc2MjkyMDEgOC43NDg5NDU5MSwxMi43NjI5MjAxIEMxMC45NjQ2NDI4LDEyLjc2MjkyMDEgMTIuNzYyOTIwMSwxMC45NjY3NTEgMTIuNzYyOTIwMSw4Ljc0ODk0NTkxIEMxMi43NjI5MjAxLDYuNTMxMTQwODMgMTAuOTY2NzUxLDQuNzM0OTcxNjkgOC43NDg5NDU5MSw0LjczNDk3MTY5IEM2LjUzMTE0MDgzLDQuNzM0OTcxNjkgNC43MzQ5NzE2OSw2LjUzMTE0MDgzIDQuNzM0OTcxNjksOC43NDg5NDU5MSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS41NTcxNjE3OSw4Ljc0ODk0NTkxIEM1LjU1NzE2MTc5LDEwLjUxMTM4NDIgNi45ODY1MDc2NSwxMS45NDA3MyA4Ljc0ODk0NTkxLDExLjk0MDczIEMxMC41MTEzODQyLDExLjk0MDczIDExLjk0MDczLDEwLjUxMTM4NDIgMTEuOTQwNzMsOC43NDg5NDU5MSBDMTEuOTQwNzMsNi45ODY1MDc2NSAxMC41MTEzODQyLDUuNTU3MTYxNzkgOC43NDg5NDU5MSw1LjU1NzE2MTc5IEM2Ljk4NjUwNzY1LDUuNTU3MTYxNzkgNS41NTcxNjE3OSw2Ljk4NjUwNzY1IDUuNTU3MTYxNzksOC43NDg5NDU5MSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjNEE4QUY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
        },
        34578: (e) => {
            "use strict";
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAACFRJREFUWEftV32MHGUdft752Nnd2fnYvb3e3t3etfQKbQ/ankhMrFJsG7BNaoLiVRMhJEoohJiUYIwxYE5NGtREBQzIf2KIEhrDP4ZA+KM1Yov1K1B6FNrD3h17+3W7s7MzO98zr3mnLTG2xB6J/znJZv7Y9533+T2/53nmNwQf78pMT09jfn4+ApB8vEdc3EXWsnn//v2qJEklRVEKSZIkQRAsHT161AbAzc3NYW5ubs1g1gTg0KFD0/l8fpcoim6hUHgvSZJ3AUSqqgrVatU+ePBgsJaC1szA3r17R2ZmZm7WNK0xOTmpEEKGeJ6vZ7PZjuI4K3fcc49DCKFrAbEmBnRd148cOVKqVCqSqqoF0zS3KIrCZzKZd8fHx/++adOm4H8KAAA/Ozur7d59xw07dkwTURQ31uv1ed/3Fw8ePGgAWFP1a24B2/D4449rsiyPHjhwoJfL5W48c+bM2UcffbR78uRJdy3UX157TS2glPIARn3f32L3e1sty7yOcEKWJnExptSOgshQ9UJN08r/zOfz7wBYBBBeSzs+EgClVAAwZXTaX7L63S+0Wo1po9sVHccRwjAQBEHkRDEDwvNI4jgJgyCRslKk66VALw61S+XyK+Vy5UVBEP5BCLE+ip2rAqCUyo5pHK43aw/Xli4MtdstOLYFzx0g8F1EgY8oCFBQNBCeQ5IkiKIImWweOVlFNi9DUVWMV9ejuv663xaL5R8QQs5eDcQVACilWc+xHls4P//dM2+9iXZjBfXF99CpfwC734Np9uE4Lnw/QkErIokjxFEAUeCgqgoUTYM+NIKJ629EeXQCm7feiI3Xb/lzqbTuTkJI4z9BXA1Axeg0Tp14/fjEX46/ivNv/xWtZgutjgXHj5FQDuB4EEKQzeYY/QjDIAUCmkDKEBSVHCojQ9i4dTtu3rUPO2/dE09u2LSLEHLikp6Sy/q4EoDjVAdJcPp3zz2tP//Mz1Br9WB77EwRkiQhl8tCyojIiAJ41n9KU/o9L4Dr+/BcD1EUIsvHqJRlzN57CHc/8Ag1up27aysNuVIZuUMvFReGhzNPEDJcvwKAZVnDokCP1y4sTD/71BN45eXX0FipQVFlaIoKRckjK2UgiiI4jgOlFHEUwfF82AMXZr8Pyx6gMjqO23bfhm88+CDkgkKPHT9uJZQsl4rFVnViojpeHZ+vFkr3XgHAoFRP2vXfywX5M2EY4535tzF/mv3eRKO2DGO1Bde2QZMYhO0mAOF4yIqKUnkEoxPrsWFqCpMbrsPEZBU0ibCyUscbb5z6zcL8+Ud+dfRo4777vladvesrL2y7accvPwQwR+e42fk7d642Vx4rl4dvHR+r5sIoSqsMwgCtZhMDe4A4DkHjBGEUIopicFyKAEkUpetYFErZDAgIKE2gaSo6HQOu457dtmNm7oatO15k/f/Jj37447u+OGumAJjnz5z+23farea3PM/RSqUhbN48Dcex4bku+v0e2qtt2JYFPwgQhhHCMESU3gMwoGEQIo5j8DwHOS+jVCpC13Woqgo/COH7HgqFgq+oyk/Bk5+/9sqxX9/2uT3PEUopWTg3f399ZfkXrusI7CEFRcGWzdOI4yg91DQNtFpNGN0u+pYF1/Xg+wGCIEAUx6DJxTGAsZXNStA1DaWhEvRiKRUtz3HpeiZaSRKdVqt7aqXREEvl8S+Tfr/z6ffPnX3V6HYUJiimapZwU1NTkDJZ9C0TfbOHdrsJw2A5YKYAXNdHmAKIwM5newWBSw9kAIbKJSiKinwuBwqSOoVZt15vpAyOT0wc3nv7gSdJo7785NKF89/0PPfSeERSUVUqFWiahoHdR7/fx2q7ja7RgWlacBwHrusi8C/qIKExKCUQRR65nJTuG9J1FJQC5IKaFsVALy4uwbJt7Nh+E9Zv2PjMps3bHya1pYWXarXFOxn1oExCBLwgIJMRsW7dSBowhmGg212F0TVg9k3Y9iUAqR5ixAkFm0NEQUCeAVAVFHUdiqohjBPY9gDtdjtliTlDUzWUSuWXRyeKXyXN5vL3mivL3/c978OUJByX0iVlJOi6hsHARne1nQLo9XppFbbjIPCDlNo4TpgRIIkZKIV8KjwWy6Y1gNEz03eFlM0il82lBcqFAsbHxp7Yuev2bxOv15v6oLn0J9PsjjDrXHJFOlv4vo8oDMBcwe6G0U3Z6F8C4Xrs/4sRzIsi8tkcNK2QRvTZcwvoWwMUi0UIoogkoSnBHM9h3fCwvf0TM/tvueWzr6cntupLD7Vb9accZ0BY5czbrDJmne5qC32zj9GxMQiCAGdgp86wmCV9H2F0MZBEgUW1iIQC59+/gE7XSJmQZTUVNQVNXaDrOp2cnHz6gLbuMNm9O7qcA1K9tnik22k+4DpWntmLXQyAO7DR6zEbrkJgHpcL6acAW8OyII6YAJPU651uD13DRF7OQ1WUVEeSlENGkiDLMrK5nDM6NvbM1s/f8tgEmUgnqA+TkFIqtlq1r7caHzzkuc62waX3f2q1KEyFZ1l99HpmGjyMT+b/OEkQBhG8IEA+l03nADmfT/NATA8uIJfPQ8rkTpeGyk9/8lO3Pvvvk9IV7wLHccYbtQt7+rZxv2PbO13H5tzBIE081hYGhvk4dQ2rgHAQBB48L0AQhfQlxSiXmOAIT3lBOCGK0gvD6vBLm2dmav91Hri8oNfrFZeWFjaGvrvH87xdnjuYiaJYjkNfjKKIj5OEZ70nAOUFPuZ4MeIIHyZAh+e4t+I4+UNWlP4YQFzet29fd00j2dUWHzt2LOs4xiSJUYVAS1GUDFFKuCAIPJJgtWc5Td/vLrXbTmstn2jXNBV/nHH7Wvf8H8C/AAdqa+E7T4ihAAAAAElFTkSuQmCC";
        },
        76739: (e) => {
            "use strict";
            e.exports =
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZWRnZTwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSIyOS4x44CBQ2hhdEdQVCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyOC4wMDAwMDAsIC01NjUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLpu5jorqQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMC4wMDAwMDAsIDE0My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEwLjAwMDAwMCwgNDE2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJlZGdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iRWRnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4yNTAwMDAsIDEuMjUwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS43OTA1MjcsMTMuMDE4MzMxMyBDMTUuNTU5MDg1LDEzLjE0MjA0MjggMTUuMzE5MjQ1NywxMy4yNDkzNjc4IDE1LjA3Mjc3NTcsMTMuMzM5NTE1NyBDMTQuMjg4MDE0NSwxMy42MzM0NDA3IDEzLjQ1Njc3OTQsMTMuNzgzODk4NSAxMi42MTg3NTAxLDEzLjc4MzcwNjggQzkuMzg1NDUxNzQsMTMuNzgzNzA2OCA2LjU2OTEzMjY1LDExLjU2Mjc1MTIgNi41NjkxMzI2Myw4LjcwNjI2MDU3IEM2LjU3NTk0NjE3LDcuOTI2OTQxNTYgNy4wMDUxNTk1Nyw3LjIxMjY2OTA0IDcuNjkwMTkxNyw2Ljg0MDY1Nzg2IEM0Ljc2NDUwMSw2Ljk2MzY2NDYzIDQuMDEyNTcxMTIsMTAuMDExNDk5MSA0LjAxMjU3MTEyLDExLjc5NTA5NzMgQzQuMDEyNTcxMTIsMTYuODQ1MjA4NyA4LjY2NzcwMDQ5LDE3LjM1NzczNjkgOS42NzI1NTIyMiwxNy4zNTc3MzY5IEMxMC4yMTI1NzQ2LDE3LjM1NzczNjkgMTEuMDI2MDI2LDE3LjIwMDU2MTYgMTEuNTE4MTk4MiwxNy4wNDMzODYzIEwxMS42MDcwNjI3LDE3LjAxNjA1MTUgQzEzLjQ5MTM3NzksMTYuMzY2Nzg2NiAxNS4wOTc0OTM2LDE1LjA5Mzg0NTMgMTYuMTU5NjU2MSwxMy40MDc4NTI4IEMxNi4yNDAwNDk5LDEzLjI4MTI4MDQgMTYuMjAzNDUyNCwxMy4xMTM1OTEyIDE2LjA3NzYyNzQsMTMuMDMxOTk4OCBDMTUuOTkxMjE3MiwxMi45NzY1NzI0IDE1Ljg4MTgxNDUsMTIuOTcxMzY0MiAxNS43OTA1MjcsMTMuMDE4MzMxMyBMMTUuNzkwNTI3LDEzLjAxODMzMTMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzBGNTE5NyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuMjI1MzYyMzQsMTYuNDk2Njg5NSBDNi42MTcyMTE0NywxNi4xMTg0ODcyIDYuMDg5ODYyNjIsMTUuNjIzODA4IDUuNjczNjUyNTQsMTUuMDQxMTA5NCBDNC43MTI2ODEzNiwxMy43MjU3NzA5IDQuMzgyNDA5NywxMi4wNTMwNjM5IDQuNzcxMzY0MDcsMTAuNDcxMzQzMyBDNS4xNjAzMTg0NSw4Ljg4OTYyMjczIDYuMjI4NzE5NjEsNy41NjA2NTQ3MiA3LjY5MDE5MTcsNi44NDA2NTc4NiBDOC4wMTU3MTA5OCw2LjY2NDMyOTQ4IDguMzc5NTA5MjMsNi41NzA0NzM3NSA4Ljc0OTcyOTIxLDYuNTY3MzA5NDcgQzkuNDQxNTQyMDYsNi41NzQ2NTk4NSAxMC4wOTA2NzQ1LDYuOTAyOTE3OTEgMTAuNTA2NTAyMSw3LjQ1NTY5MTcyIEMxMC43ODI2OTc0LDcuODI1Mjk5MzQgMTAuOTM1NzMzNCw4LjI3MjMxOTM3IDEwLjk0Mzk5NzMsOC43MzM1OTU0MiBDMTAuOTQzOTk3Myw4LjcxOTkyODAxIDEyLjYxODc1MDEsMy4yOTM5NjI1NyA1LjQ3NTQxNjQ5LDMuMjkzOTYyNTcgQzIuNDc0NTMyODEsMy4yOTM5NjI1NyAwLjAwNjgzNTczMjE3LDYuMTQzNjE5NDcgMC4wMDY4MzU3MzIxNyw4LjYzNzkyMzQ5IEMtMC4wMDQ1OTcxNzUzLDkuOTU5MDY5NiAwLjI3NzkyNjUwOCwxMS4yNjYyMzE1IDAuODMzOTU4NTcyLDEyLjQ2NDgwMDkgQzIuNzE5NjQzNDUsMTYuNDgxNjQ1NCA3LjMxMzg3MDcxLDE4LjQ1MjExNjcgMTEuNTI1MDM0LDE3LjA1MDIyIEMxMC4wNzk3ODI4LDE3LjUwMjk1ODQgOC41MDg3MjYzNSwxNy4zMDA3MDM5IDcuMjI1MzYyMzQsMTYuNDk2Njg5NSBMNy4yMjUzNjIzNCwxNi40OTY2ODk1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiMwQzg4REEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC40MTA4MTA2LDEwLjE3NTUwODEgQzEwLjM1NjEyNDgsMTAuMjQzODQ1MiAxMC4xODUyMzE3LDEwLjM0NjM1MDkgMTAuMTg1MjMxNywxMC41NjUwMjk2IEMxMC4xODUyMzE3LDEwLjc0MjcwNiAxMC4zMDE0MzksMTAuOTEzNTQ4OCAxMC41MDY1MTA4LDExLjA1NzA1NjcgQzExLjQ5MDg1NTMsMTEuNzQwNDI3NiAxMy4zNDMzMzcxLDExLjY1MTU4OTQgMTMuMzUwMTcyOCwxMS42NTE1ODk0IEMxNC4wNzg4MzA1LDExLjY1MDYwOTkgMTQuNzkzOTU5NSwxMS40NTQ3NzQyIDE1LjQyMTM5NzcsMTEuMDg0MzkxNSBDMTYuNzA3MzUyLDEwLjMzNDA1OTggMTcuNDk4NDMyNCw4Ljk1Nzg4MTc1IDE3LjQ5OTQ1ODQsNy40NjkzNTkxNCBDMTcuNTE5OTY1Niw1LjkzODYwODE4IDE2Ljk1MjYwMDQsNC45MjAzODU0NiAxNi43MjcwMjE0LDQuNDY5MzYwNjMgQzE2LjM1NzczNSwzLjc0ODA1NDg2IDE1Ljg3NDM4MjQsMy4wOTEwODMwNiAxNS4yOTU2MjA0LDIuNTIzODAzNDkgQzE0LjU4NjM4NjcsMS44MzE4NDg5MSAxMy43NjA3NzczLDEuMjcwMTkyOTkgMTIuODU2NjMzNCwwLjg2NDU3ODgxMiBDMTEuNTY0NjM5NCwwLjI4ODAyODQ1NCAxMC4xNjQ1ODIyLC0wLjAwNjY3MDI3ODA4IDguNzQ5NzI5MjEsMCBDMy45NjUwMzM1MSwtMC4wMDAzNTg0MzMzMDYgMC4wNjcyODQ3NTYsMy44NDE0NDQ2OCAwLDguNjI0MjU2MDcgQzAuMDM0MTc4NjI2Nyw2LjEyOTk1MjA3IDIuNTE1NTQ3MTUsNC4xMTQwMDc3MyA1LjQ2ODU4MDc2LDQuMTE0MDA3NzMgQzUuNzA3ODMxMTYsNC4xMTQwMDc3MyA3LjA3NDk3NjM3LDQuMTM0NTA4ODYgOC4zMzk1ODU2Niw0LjgwNDIxMjM5IEM5LjQ1MzgwODk5LDUuMzkxOTExNDMgMTAuMDQxNjgxNCw2LjA5NTc4MzUxIDEwLjQ0NDk4OTIsNi43OTk2NTU2IEMxMC44Njg4MDQzLDcuNTMwODYyNTMgMTAuOTQzOTk3Miw4LjQ0NjU3OTYxIDEwLjk0Mzk5NzMsOC44MTU1OTk5NCBDMTAuOTQzOTk3Myw5LjE4NDYyMDI3IDEwLjc1OTQzMjcsOS43MjQ0ODMzMyAxMC40MTA4MTA2LDEwLjE3NTUwODEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzJDQzNENSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjI3NDA5NjEsMTAuMzk2OTIwMyBDMTAuMjc0MDk2MSwxMC4zOTY5MjAzIDkuODA4NTgzMTcsMTEuMTY5ODEyOSAxMi4wMzIyNDQ4LDExLjU2OTU4NDkgQzEyLjAzMjI0NDgsMTEuNTY5NTg0OSAxNS43MTYwMTc1LDEyLjM2OTgxMjMgMTcuMjAyNzg3OSw5LjEzNDA1MDgxIEMxNy41MDIxOTI3LDguMTE5MjQ0OTMgMTcuNzY4Nzg2LDYuNTQ2ODA4MzYgMTYuOTc3MjA5LDQuNzk2Njk1MzEgQzE2LjY0NjA1MjksNC4wODI0OTg2NCAxNi4yMDE3MDgsMy40MjY0NDY3NSAxNS42NjEzMzE3LDIuODUzODcxNjggQzE1LjA5MzA3MzEsMi4yMjk1OTY1IDE0LjQ0Mjc2ODUsMS42ODUyMzA0OSAxMy43MjgxODg0LDEuMjM1NjQ5MjQgQzEyLjU1NzkxMjEsMC42Mzc2OTk2NTEgMTEuMTAzOTUzMiwwLjI1ODQyODc2NSAxMS4xMDM5NTMyLDAuMjU4NDI4NzY1IEMxMS4xMDM5NTMyLDAuMjU4NDI4NzY1IDE3LjQ3NDE2NjIsNi44NDA2NTc4NiAxMC4yNzQwOTYxLDEwLjM5NjkyMDMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzQ5RDY2OCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
        },
        58764: (e) => {
            "use strict";
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA5xJREFUaEPtmUloFEEUQF9N4oK74gKCy8UN0YwX0cQdA264R0FMPOnBNTAqghsuB9G0K3rQk3E5GHDDDQaMa0QP2lHE7WQEQRHcQc1S0t0TcbRmuqumRUdSMIdm6v9fr/7vX79+C7J8iCxfP00Af9uDTR74bzwg1wzqyLfIZCKiEElPoHvi5zC+dH+CGhpknOYN58W2B2/DgM84hOTKvBlIsQwYCeQGXFQdcB0h94my6lMBZZTTjAHkqmgBDWwH8jNZAFBFhNVih33TRI82gCwqyqHnMwtYYWIwjcweavrEREVFvY5eLQBZGu1ADieAQh0jGnPj1DNH7LbfBZUJDOAuPpcqJAOCKjeaJ3hEHflBIQIBJMLm4h/c+V9Z49T0mRgknIIBxKK7/0DM+zloj7DsUr9JvgCJbHPDT1HS/206wcSlMHg81H6FJ1Vwbhd8DhzanroII/yykz9ALOqkt+CpskUrKD0GXXonM7+pAWsu1H7R2YsqYdkF6QTSAiQOqZM6Fhk5D6atUoucKYPrx7TUIeTMdIddeoBY9DIwVsvinI0wdLpa5O4FOL5WSx1QKSx7XCqhlABubVOb81qjPPBszF4Hw2ap7d0+BRWbdQHqaFbfNVXtlBogNqQYZLmuNUbNh6kxtdhZC64d1VYJokRY946oBNMA5JWDKNa21nc4LDqgFju4GJ7e0lYJ8oiwqks0AaKVwBhta+27wfpLarEtE+D9K22VwBVh2cp3MY0Hok+AvibW2HoDWrZOFv3yGdaNMFIHPBWW3U/XAx+BNkYWlx2GXoOTRZ/fh30LjNQBn4Rlt9UF+AAohXxXoUqld07DiU2+oikmfBSW3U4XwDyEVJnIOAO5yzYKIbOX2DHXLx8W7k/esENLvJrIbBi8xCujh5EoU5fvGlSZyDwDgaBclNnKFyj8g6yRbkMc2nX2nj68gc0ZXOKkLBY7q5UnYPilRCPAwNEwabn3dGEvPLzq67gUE8xKCUeZNCnmTJeZWs6smHMBvJ6PXjkdNkAm5XTCC3oXmkaA/gVQtN57qtgCj43aPpldaFwAr4Gld6V0BJ16yMlGznDqHycL6Y4wrpQJL+hf6jMHCOdS7wJ43Ti9tkpmIRRuW8WFyObGVmPoZnVr8QdENjd3f04iWdte/zUTZu0Hjt9A3DZM7hRoKATRQ/mJCfkCInGa1Z37Zz4x6Z5NYc/37Y2GbTBsfU0AYe+orr4mD+juWNjzvwNIp09AkiKDTwAAAABJRU5ErkJggg==";
        },
        72866: (e) => {
            "use strict";
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACHNJREFUeF7tnVtvG0UUx3d2117biRPatFWc0koEJFBLQVChEGOXFbFSJa8ofeI5nyOfI8881fDCS5RbszRuXB5SiUuDVImopTQOlFJysWPHe0HTxpVrbO+sdzOeyZy+emfOOf//b8/Ozu6mSIJ/QiuAhK4eipcAAMEhAAAAAMEVELx86AAAgOAKCF4+dAAAQHAFBC8fOgAAILgCgpcPHQAAEFwBwcuHDgAACK6A4OVDBwAABFdA8PKhAwAAgisgePnQAQAAwRUQvHzoAACA4AoIXj50AABAcAUELx86AAAguAKClw8dAAAQXAHBy4cOAAAIroDg5UMHAAAEV0Dw8qEDAADiKaDrem+lYo0gJCVw9Y4jFTRN+cEwjH3R1BCuA2Dzq1X7S9u2tXqzZVmuhELyt6JBIBwAo6PpMUly3m5+pqPf8vnVZZG6gHAAJJPprxzHiTUzGSFUWltb/RoAOMEKjI6mptuVl8/nZk9w+f8rTbgOAAC8zgAA0HBOQAdgvP9lMpn+crncr2laMZ1OP5+ZmbG9pBx0B3AcB924cUPe3NyUh4eH7Ww2a3nJp9vHctMBJiYmtJ2d4ojj2Odrosmy8i9C1t1cLvecVMggAZiamlJ2dnYixWJRrsUfGhoyb968WUYIOaQ5dfM4bgBIJq9dqze/JhpCqBoOK4ZhGH+TCBkUANj8ra2tpncTGIJsNntAkk+3j+ECANz2i8XyZCuxvEAQBADtzK/rBCUeLgdcAJBKpS5alvRZu7OFFAK/AJCYj/Msl8vl9fX1arfPcLf4XAAwNjY2UCpVxl2LIbgc+NkIIjUf5zk0NAQdwM0w0t9nZmbkxcWV67ZtveE2xq0TdLoV7MX8np4ee35+vsTDQpCLDoBNT6VSp2wbjTmOEyKBIBbTFpeWlnYaj+3kYZAX83k6+3Gu3ACAk9V1/czhoaWTQCBJ6J98fnW+GSxeHwePj4/31N/qtQOQl9b/6i7K7Wxi7XcvEMTjse8WFhaKfmp4eflZ7CGZgzfzuesANRNIIYjFtIXl5eVnJOa1Ooa0/fNoPrcAkFwO8AIsHFa+MQzD9AMA3upNpVK9J6nt19fC1RqgyYKuzZpA/iWfv/2zH/NrY/E29O7ubrjZXLye+dyuARpNeLlLWPlUkpzTL1oaQvikvX/9+hf3vT4oagULnnBycjJcDwG+1evv7y/zsNvX7iTgugPUF4ZX6pZlRSzL2vHb9tuBgJ/8Xb582QkKriA6lJ85TgwAfkQQeSwAILL7vG0ECe7VsZQPHeBYZOVnUqYAGB0djSqKcsm25YHGDzcaJcUfcsiy/cyyrI18Pt+Vly/wJlGhUOhTVVWrVquv3gpqZn8oFLJN06wkEoldlu4cmAEAmy9JyueOI7k+7HltIwNJVUmyvqcNATZ/e3v7nG3bnjSUZdkZHBz8ixUIPCV/nI0tlUpdNU1pqJMYqipt5XK59U7GdjoGP510HCfayXiE0IGX9xg7iUE6hhkAkslr425tv1VR+HKwtnZ7gbToII7TdX3Qre23ioMvB4ZhbAeRh985AIAOFQQAOhSu1TC4BAQsKOF0zHQAWAQSOhbwYcwAgOuC28CA3SWYjikACPKFQwJWAAAIWFDepgMAeHMs4HwBgIAF5W26EwOAruuRaDQa7u3tLR7XNit+Q3h+fl67cuWKOTs7y/xnXyQwcg8AfhOoVCq9J0lSHBeMXwlTFOWRruu/B/XWDn4lLJPJnK5UKgM1USORSDkUCv05NzdXIRGa1WO4BmBiYqKvVCp9aFmW0iiwqqoPDcN4GITw+NvEevNrc6qqalcqlSe0H0QFUVNtDm4BaGd+rRMMDg7m/F4OcNtfWlp6p5XovEPAJQBu5tfMisfj9+bm5nb9nDFHm1MX2s3BMwTcAUBqPjZMVdW7hmGU/QAwPT0d2tjYeMttDl4h4AoAL+ZLkrTX6h2BqampcKFQeBMh9OKLH8dx9hOJxB/ZbPawmdGZTOZiuVyOnEQIuAEAf9HrOM5HzRZ8jcYoimJpmnav2Yeh2PynT59eMk3ztYWjqqrW2bNnN5pBgL8MOjg4uGCaZtvXvo66jh2NRh/zcnfABQB4IbaysnLVsizXr3Sx+bFY7MdW1/5UKjUsSdKpFmfz81wut9nsN7wW0DTtPCEEhysrK4/gD0S49UzC33Hr39vb+9jtcDfz8fh0Ov1Bq78vgP+6yOrq6k+t4niBwLKsxzzcHnLRAZLJ5DlZli+1A4DEfDwev3jSbh63dwtJIXAcp3Dnzp09N2i7/TsXABzt9n3SSixS84MAAM9BAkE8Hn/EwzqACwCw6Lquv2+a5plmC7521/zG4/12gNp87SAIh8PFW7duPen22U0SnxsA8P34gwcP3q2HQFGUIkLoVy//y0dQAGBxj+4OEqZpvvrbAdj8gYGBbb87kCTmBXEMNwDUisWXg/39/R78bf7IyMi+1wc+QQJwtIeAkslkRJZlta+v75CHtl8PDncA+KU+aAD85tPt8QBAgwNudwHdNizo+AAAABA0U2zP52cjiO3KOstOxA7Q0VZwZ/KyP0o4ADp5GMS+jZ1nKBwAWCqvj4M7l5f9kUICwL4t9DIEAOhpzWQkAIBJW+glBQDQ05rJSAAAk7bQSwoAoKc1k5EAACZtoZcUAEBPayYjAQBM2kIvKQCAntZMRgIAmLSFXlIAAD2tmYwEADBpC72kAAB6WjMZCQBg0hZ6SQEA9LRmMhIAwKQt9JICAOhpzWQkAIBJW+glBQDQ05rJSAAAk7bQSwoAoKc1k5EAACZtoZcUAEBPayYjAQBM2kIvKQCAntZMRgIAmLSFXlIAAD2tmYwEADBpC72kAAB6WjMZCQBg0hZ6SQEA9LRmMhIAwKQt9JICAOhpzWSk/wAUT9SuAifOTgAAAABJRU5ErkJggg==";
        },
        87849: (e) => {
            "use strict";
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXFJREFUWEftmD9OwzAUh7/XCsQCCxegSByg6swCI0rTG3ARRNOKi3CDphYjLMyIAyABF2CBBVGlRikMGRrHjitkIWd+fz79/PL8noXAPwmcjwjoe0JRwT9TUCdJD+meozkGfQjsAzvAVgPEAvgE3kCeEe7RxbUo9WID33jEOss6PDxeAJdA1yaohU0BTBn0ryTLliZ7I+Av3Bw4s0jaxuSGQX9ogjQDJmmp2qRNZgefsah8WmdfC7iqOTpPGzzWOoYClkd1NVkPOBxlaD12UKK9qchE5rNsXQCDgqNb0Cfts7p4yp2o2akjYFq2gQOXNB62r6LynivgO7DrkdTF9UNUvucK+GXRhF0gTLYLUfm2K6DeVHabOKLytf+D4SdJI2BV2aigTZ0Zh4JYg54S/ssaDL5RB3/VhT4shD5uhT+wBj7yl21Nh7w0rQB/duJw184KZJiLe/X2Cvbpw/OK9XZvfJvxzuAZIAJ6ChjfqH0F5BtlfK4p/K3rGwAAAABJRU5ErkJggg==";
        },
        99674: (e) => {
            "use strict";
            e.exports =
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5Y+R6YCBPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjI5LjHjgIFDaGF0R1BUIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEyMi4wMDAwMDAsIC0xNDA2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i6buY6K6kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTY0LjAwMDAwMCwgODI2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iui+k+WFpeahhiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwLjAwMDAwMCwgNTY4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLlj5HpgIEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxOC4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBvcGFjaXR5PSIwLjE5NDA0MzExNCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy45MTIyOTA5LDIuMTgzNzMxMDkgQzI1LjU3NzAxMTgsMi43MTY0NTk2MiAyNi40OTQ2NzYsNC40OTc4NjczOCAyNS45NjE5NzQxLDYuMTYyNjE2NjggTDIwLjI3MjY2LDIzLjk0MjMxODEgQzIwLjAyNDc0MjQsMjQuNzE3MDg2NCAxOS40ODgwMjY0LDI1LjM2NjY0NTMgMTguNzczOTAwMywyNS43NTYxODE2IEMxNy4yMzk0MzMyLDI2LjU5MzE5MTcgMTUuMzE2OTkyNSwyNi4wMjc3NDkgMTQuNDgwMDE5NiwyNC40OTMyNDc0IEwxMS40MDE2NDYsMTguODQ5MzczNSBDMTAuOTE2NjU4OSwxNy45NjAyMDA5IDEwLjE4NTk0NDQsMTcuMjI5NDYxOSA5LjI5NjgwNjQ0LDE2Ljc0NDQ2MTMgTDMuNjUzMTIxNDMsMTMuNjY1OTg0NyBDMi45Mzg5OTUzMywxMy4yNzY0NDgzIDIuNDAyMjc5MzIsMTIuNjI2ODg5NSAyLjE1NDM2MTc0LDExLjg1MjEyMTEgQzEuNjIxNjU5NzksMTAuMTg3MzcxOCAyLjUzOTMyMzk5LDguNDA1OTY0MDcgNC4yMDQwNDQ5Nyw3Ljg3MzIzNTUzIEwyMS45ODMxNTE1LDIuMTgzNzMxMDkgQzIyLjYxMDUyODEsMS45ODI5NjM4NCAyMy4yODQ5MTQyLDEuOTgyOTYzODQgMjMuOTEyMjkwOSwyLjE4MzczMTA5IFogTTIyLjYyNjIxMDksNC4xOTMyMjQ3IEw0Ljg0NzEwNDQ0LDkuODgyNzI5MTUgQzQuMjkyMTkzMTYsMTAuMDYwMzA2NyAzLjk4NjI4NzQ4LDEwLjY1NDE0MzUgNC4xNjM4Njc4NSwxMS4yMDkxMDA3IEM0LjI0NjUxMTczLDExLjQ2NzM3MTUgNC40MjU0MjMzLDExLjY4Mzg5ODYgNC42NjM0Njc2MiwxMS44MTM3NDUzIEwxMC4zMDcxNTI2LDE0Ljg5MjIyMiBDMTAuNjA4NDMwNSwxNS4wNTY1NjA4IDEwLjg5NjcxNTcsMTUuMjQxMDUyNSAxMS4xNzAyNzU0LDE1LjQ0Mzk2NCBDMTEuMjAzODE3MiwxNS4zOTEzMDM1IDExLjI0NTQ3NjYsMTUuMzQwMzA5OCAxMS4yOTI4OTMyLDE1LjI5Mjg5MzIgTDE2LjI5Mjg5MzIsMTAuMjkyODkzMiBDMTYuNjgzNDE3NSw5LjkwMjM2ODkzIDE3LjMxNjU4MjUsOS45MDIzNjg5MyAxNy43MDcxMDY4LDEwLjI5Mjg5MzIgQzE4LjA5NzYzMTEsMTAuNjgzNDE3NSAxOC4wOTc2MzExLDExLjMxNjU4MjUgMTcuNzA3MTA2OCwxMS43MDcxMDY4IEwxMi43MDcxMDY4LDE2LjcwNzEwNjggQzEyLjY2NjY1NjQsMTYuNzQ3NTU3MSAxMi42MjM2MDI5LDE2Ljc4MzgxNzYgMTIuNTc4NDg1MywxNi44MTU4ODgzIEMxMi44MzA3MTk5LDE3LjEzNTA0MDMgMTMuMDU2ODEyMSwxNy40Nzc3MTQzIDEzLjI1MzkxMzgsMTcuODM5MDc5NCBMMTYuMzMyMjg3NCwyMy40ODI5NTMzIEMxNi42MTEyODMzLDIzLjk5NDQ2MjkgMTcuMjUyMDc4NCwyNC4xODI5MzgzIDE3Ljc2MzU1NDEsMjMuOTAzOTQyMyBDMTguMDAxNTk4NCwyMy43NzQwOTU2IDE4LjE4MDUxLDIzLjU1NzU2ODQgMTguMjYzMTUzOSwyMy4yOTkyOTc2IEwyMy45NTI0NjgsNS41MTk1OTYyNSBDMjQuMTMwMDQ4Myw0Ljk2NDYzOTAyIDIzLjgyNDE0MjcsNC4zNzA4MDIyNSAyMy4yNjkyMzE0LDQuMTkzMjI0NyBDMjMuMDYwMTEzOCw0LjEyNjMwNDg1IDIyLjgzNTMyODUsNC4xMjYzMDQ4NSAyMi42MjYyMTA5LDQuMTkzMjI0NyBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
        },
    },
]);
