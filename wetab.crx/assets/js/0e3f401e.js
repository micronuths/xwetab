"use strict";
(globalThis.webpackChunkinfinity_hitab_client = globalThis.webpackChunkinfinity_hitab_client || []).push([
    [3240, 4179],
    {
        59092: (e, t, a) => {
            a.d(t, { G: () => c, Ik: () => o, ZN: () => l });
            var i = a(74003),
                s = a(17904);
            function n(e, t) {
                switch (t) {
                    case 1:
                        return `https://vgn.cn/article/news/${e}`;
                    case 4:
                        return `https://vgn.cn/article/post/${e}`;
                    default:
                        return "https://vgn.cn/channel/2";
                }
            }
            const l = async (e) => {
                    try {
                        const t = await s.hj.get(`${i.H}game/list`, e, { _delay: 0, _single: !0 });
                        if (t.data && t.data.length > 0) {
                            return [
                                null,
                                t.data.map((e) => {
                                    var t;
                                    return {
                                        id: e.spu_id,
                                        china_name: e.game_china_name || e.game_name,
                                        name: e.game_name,
                                        cover: e.spu_show_cover || "https://static.wetab.link/hitab/game-widget/cover.jpg",
                                        platform: e.platform,
                                        genres: e.genres ? e.genres.split(" / ") : [],
                                        score: e.score,
                                        discount_percent: e.discount_percent,
                                        discount_end: e.discount_end,
                                        discount: e.discount,
                                        initial: e.initial,
                                        tag: null === (t = e.tag) || void 0 === t ? void 0 : t.map((e) => e.name),
                                        support_chinese: e.support_chinese,
                                    };
                                }),
                            ];
                        }
                        throw t;
                    } catch (e) {
                        return ["catch error"];
                    }
                },
                o = async (e) => {
                    try {
                        const t = await s.hj.get(`${i.H}game/news`, e, { _delay: 1e3, _single: !0 });
                        if (t.data && t.data.length > 0) {
                            return [
                                null,
                                t.data.map((e) => {
                                    var t;
                                    return {
                                        title: e.title.indexOf("...") > 0 ? e.content.substring(0, 50).trim() : null === (t = e.title) || void 0 === t ? void 0 : t.trim(),
                                        desc: e.content,
                                        cover: e.cover,
                                        id: e.id,
                                        date: e.create_time,
                                        type: e.type,
                                        link: e.link || n(e.id, e.type),
                                    };
                                }),
                            ];
                        }
                        throw t;
                    } catch (e) {
                        return ["catch error"];
                    }
                },
                c = async (e) => {
                    try {
                        const t = await s.hj.get(`${i.H}game/info`, { id: e }, { _delay: 0 });
                        if (t.data) return [null, t.data];
                        throw t;
                    } catch (e) {
                        return ["catch error"];
                    }
                };
        },
        22854: (e, t, a) => {
            a.d(t, { C: () => n });
            var i = a(29445),
                s = a(57268);
            const n = (e, t, a) => {
                const n = (0, i.iH)(e);
                t.onChangeState = (e) => {
                    n.value = { ...e };
                };
                const l = (0, s.Fl)(() => (a ? a[n.value.size] : null));
                return { propsState: n, HomeComp: l };
            };
        },
        70928: (e, t, a) => {
            a.r(t), a.d(t, { mountHome: () => d, widgetApp: () => p });
            var i = a(29445),
                s = a(68398),
                n = a(57268),
                l = a(51258);
            const o = (0, n.aZ)({
                __name: "widget-game-home",
                props: { size: null, id: null },
                setup(e) {
                    const t = e,
                        { HomeComp: a } = (0, l.DU)(t),
                        { clickWidget: s } = (0, l.dd)();
                    return (e, t) => (
                        (0, n.wg)(),
                        (0, n.iD)(
                            "section",
                            {
                                class: "contents cursor-pointer",
                                onClick:
                                    t[0] ||
                                    (t[0] = function () {
                                        return (0, i.SU)(s) && (0, i.SU)(s)(...arguments);
                                    }),
                            },
                            [((0, n.wg)(), (0, n.j4)((0, n.LL)((0, i.SU)(a))))]
                        )
                    );
                },
            });
            var c = a(96755),
                r = a(75008);
            const p = (0, i.iH)(null),
                d = (e, t) => {
                    const a = (0, s.createApp)(o, t);
                    return (0, r.f)(a), (p.value = a), a.use(c.M), a.mount(e), p.value;
                };
        },
        34179: (e, t, a) => {
            a.r(t), a.d(t, { useGameStore: () => c });
            var i = a(84522),
                s = a(10435),
                n = a(75973),
                l = a(59092),
                o = a(63477);
            const c = (0, s.Q_)(i.BU.game, {
                syncStorage: { watch: ["homeGameInfo", "gamePlatformCheck"] },
                syncCloud: { watch: ["gamePlatformCheck"] },
                state: () => ({
                    modalShow: !1,
                    gameList: [],
                    allGameList: [],
                    gamePage: 1,
                    homeGameInfo: n.H_,
                    newsList: n.QO,
                    showType: 1,
                    selectedNewsIndex: 0,
                    selectedGameType: "",
                    homeGameIndex: 0,
                    modalPanelType: 1,
                    gamePlatformCheck: n.RU.map((e) => e.value),
                    gameLoading: !1,
                    newsLoading: !1,
                    finished: !1,
                    allGamePage: 1,
                    allGameFinished: !1,
                    allGameLoading: !1,
                    firstLoad: !0,
                }),
                getters: {},
                actions: {
                    setModal(e) {
                        this.modalShow = e;
                    },
                    setShowType(e) {
                        this.showType = e;
                    },
                    setModalPanelType(e) {
                        this.modalPanelType = e;
                    },
                    async setHomeGameIndex(e) {
                        (this.homeGameIndex = e), e > this.allGameList.length - 5 && this.reqAllGameList();
                        const t = this.allGameList[e];
                        t && (await (0, o.pt)(t.cover), (this.homeGameInfo = { ...t, isDefault: !1 }));
                    },
                    setGamePlatformCheck(e) {
                        (this.gamePlatformCheck = e), (this.gamePage = 1), (this.finished = !1), (this.gameList = []), this.reqGameList();
                    },
                    setSelectedNewsIndex(e) {
                        e !== this.selectedNewsIndex && ((this.selectedNewsIndex = e), 0 === this.newsList[this.selectedNewsIndex].list.length && this.reqNewsList());
                    },
                    setSelectedGameType(e) {
                        e !== this.selectedGameType && ((this.selectedGameType = e), (this.gamePage = 1), (this.finished = !1), (this.gameList = []), this.reqGameList());
                    },
                    async reqGameList() {
                        if (this.finished) return;
                        this.gameLoading = !0;
                        const [e, t] = await (0, l.ZN)({ page: this.gamePage, size: 20, type: this.selectedGameType, platform: this.gamePlatformCheck.join(",") });
                        if (((this.gameLoading = !1), e || !t)) return;
                        const a = [...this.gameList, ...t];
                        20 === t.length ? ((this.gamePage = this.gamePage + 1), (this.finished = !1)) : (this.finished = !0), (this.gameList = a);
                    },
                    async reqAllGameList() {
                        if (this.allGameLoading) return;
                        if (this.allGameFinished) return;
                        this.allGameLoading = !0;
                        const [e, t] = await (0, l.ZN)({ page: this.allGamePage, size: 20 });
                        (this.allGameLoading = !1),
                            !e &&
                                t &&
                                (this.homeGameInfo.isDefault && (this.homeGameInfo = { ...t[0], isDefault: !1 }),
                                (this.allGameList = [...this.allGameList, ...t]),
                                t.length < 20 ? (this.allGameFinished = !0) : (this.allGamePage = this.allGamePage + 1));
                    },
                    async reqNewsList() {
                        this.newsLoading = !0;
                        const [e, t] = await (0, l.Ik)({ page: 1, page_size: 30, tab_id: this.newsList[this.selectedNewsIndex].tab_id });
                        if (((this.newsLoading = !1), e || !t)) return;
                        const a = [...this.newsList];
                        (a[this.selectedNewsIndex].list = t), (this.newsList = a);
                    },
                },
            });
        },
        51258: (e, t, a) => {
            a.d(t, { lb: () => Ce, DU: () => Se, DS: () => Pe, dd: () => ke, UV: () => Ge });
            var i = a(45911),
                s = a(94223),
                n = a(57268),
                l = a(94209),
                o = a(29445),
                c = a(68398),
                r = a(91200),
                p = a(77362);
            const d = (e) => ((0, n.dD)("data-v-53a03632"), (e = e()), (0, n.Cn)(), e),
                m = { class: "relative flex h-full rounded-[var(--icon-home-radius)]" },
                g = d(() => (0, n._)("div", { class: "pointer-events-none absolute inset-0 flex flex-col" }, [(0, n._)("div", { class: "bg-linear-top flex-1" }), (0, n._)("div", { class: "bg-linear-bottom flex-1" })], -1)),
                x = { class: "absolute top-0 left-0" },
                h = d(() => (0, n._)("img", { class: "h-[62px] w-[62px]", src: r, alt: "" }, null, -1)),
                u = { class: "absolute top-[12px] left-0 -rotate-45 font-ali-75 text-[16px] text-color-white" },
                w = { class: "mt-[108px] flex w-full items-center justify-between icon-m:mt-[92px] icon-s:mt-[80px]" },
                f = { class: "z-2 relative flex flex-1 flex-col justify-end pb-[16px] leading-none icon-m:pb-[12px] icon-s:pb-[8px]" },
                v = { class: "text-dot font-ali-65 text-[14px] text-color-white" },
                _ = { class: "mt-[8px] flex justify-between font-ali-65" },
                b = { class: "text-[18px] text-color-game-t1" },
                y = { class: "ml-[4px] text-[14px] text-color-game-t2 line-through" },
                S = ["src"],
                C = d(() => (0, n._)("div", { class: "z-1 insert-shadow pointer-events-none absolute inset-0" }, null, -1)),
                k = (0, n.aZ)({
                    __name: "game-medium",
                    setup(e) {
                        const { homeGameInfo: t, homeGameIcon: a, onClickChangeHomeGame: i, homeGameIndex: s } = Pe();
                        return (e, r) => (
                            (0, n.wg)(),
                            (0, n.iD)("section", m, [
                                (0, n._)(
                                    "div",
                                    {
                                        class: "relative flex h-full w-full flex-col bg-cover bg-center bg-no-repeat px-[16px] transition-[background] icon-m:px-[12px] icon-s:px-[8px]",
                                        style: (0, l.normalizeStyle)({ backgroundImage: "url(" + (0, o.SU)(t).cover + ")" }),
                                    },
                                    [
                                        g,
                                        (0, n._)("div", x, [h, (0, n._)("span", u, " -" + (0, l.toDisplayString)((0, o.SU)(t).discount_percent) + "% ", 1)]),
                                        (0, n._)("div", w, [
                                            (0, n._)(
                                                "div",
                                                {
                                                    class: (0, l.normalizeClass)([
                                                        "expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2 bg-opacity-70",
                                                        [0 === (0, o.SU)(s) ? "" : "hover:bg-opacity-100"],
                                                    ]),
                                                    onClick: r[0] || (r[0] = (0, c.withModifiers)((e) => (0, o.SU)(i)("pre"), ["stop"])),
                                                },
                                                [(0, n.Wm)(p.Z, { class: (0, l.normalizeClass)(["rotate-180 text-color-white", [0 === (0, o.SU)(s) ? "text-opacity-40" : ""]]) }, null, 8, ["class"])],
                                                2
                                            ),
                                            (0, n._)(
                                                "div",
                                                {
                                                    class: "expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2 bg-opacity-70 hover:bg-opacity-100",
                                                    onClick: r[1] || (r[1] = (0, c.withModifiers)((e) => (0, o.SU)(i)("next"), ["stop"])),
                                                },
                                                [(0, n.Wm)(p.Z, { class: "text-color-white" })]
                                            ),
                                        ]),
                                        (0, n._)("div", f, [
                                            (0, n._)("h3", v, (0, l.toDisplayString)((0, o.SU)(t).china_name), 1),
                                            (0, n._)("div", _, [
                                                (0, n._)("div", null, [
                                                    (0, n._)("span", b, " ¥" + (0, l.toDisplayString)((0, o.SU)(Ce)((0, o.SU)(t).discount)), 1),
                                                    (0, n._)("span", y, " ¥" + (0, l.toDisplayString)((0, o.SU)(Ce)((0, o.SU)(t).initial)), 1),
                                                ]),
                                                (0, n._)("div", null, [(0, n._)("img", { class: "h-[20px] w-[20px] rounded-[5px]", src: (0, o.SU)(a).icon, alt: "icon" }, null, 8, S)]),
                                            ]),
                                        ]),
                                    ],
                                    4
                                ),
                                C,
                            ])
                        );
                    },
                });
            var P = a(76911);
            const G = (0, P.Z)(k, [["__scopeId", "data-v-53a03632"]]);
            var L = a(75973),
                D = a(52864);
            const I = (e) => ((0, n.dD)("data-v-d16b7700"), (e = e()), (0, n.Cn)(), e),
                N = { class: "relative flex h-full rounded-[var(--icon-home-radius)] bg-color-game-b1" },
                T = I(() => (0, n._)("div", { class: "insert-shadow pointer-events-none absolute inset-0 z-10 rounded-[var(--icon-home-radius)]" }, null, -1)),
                H = { class: "flex h-full w-full" },
                U = { class: "p-[24px] icon-m:p-[20px] icon-s:p-[16px]" },
                z = I(() => (0, n._)("div", { class: "insert-shadow pointer-events-none absolute inset-0 rounded-[8px]" }, null, -1)),
                A = { class: "absolute bottom-[4px] right-[4px]" },
                j = ["src"],
                F = { class: "absolute top-[50%] left-[-10px] right-[-10px] z-10 mt-[-10px] flex justify-between" },
                Z = { class: "absolute top-0 left-0" },
                R = I(() => (0, n._)("img", { class: "h-[62px] w-[62px]", src: r, alt: "" }, null, -1)),
                O = { class: "absolute top-[12px] left-0 -rotate-45 font-ali-75 text-[16px] text-color-white" },
                M = { class: "flex flex-1 flex-shrink-0 flex-col overflow-hidden pr-[16px] pb-[32px] icon-m:pr-[12px] icon-m:pb-[22px] icon-s:pr-[12px] icon-s:pb-[16px]" },
                Q = { class: "flex items-center justify-end pt-[16px] icon-m:pt-[12px] icon-s:pt-[12px]" },
                B = { class: "flex items-center" },
                K = I(() => (0, n._)("span", { class: "text-[12px] text-color-game-t2" }, "游戏库", -1)),
                E = [I(() => (0, n._)("i", { class: "iconfont icon-toggle_icon text-[12px] text-color-white" }, null, -1))],
                V = { class: "flex flex-1 flex-col justify-end overflow-hidden pl-[4px] pt-[50px] icon-m:pt-[30px] icon-m:pl-[0px] icon-s:pl-[0px] icon-s:pt-[14px]" },
                X = { class: "text-dot text-[16px] text-color-white" },
                Y = { class: "text-dot mt-[4px] text-[12px] text-color-game-t1" },
                q = { class: "mt-[10px] flex font-ali-55 text-[12px] leading-none text-color-game-t2" },
                J = { class: "mt-[20px] flex items-baseline leading-none pad:mt-[16px]" },
                W = { class: "text-[18px] text-color-game-t1" },
                $ = { class: "ml-[8px] text-[12px] text-color-game-t2 line-through" },
                ee = { class: "ml-[8px] flex font-ali-55 text-[12px] leading-none text-color-game-t2" },
                te = { class: "relative flex h-full w-full bg-color-game-b3" },
                ae = I(() =>
                    (0, n._)(
                        "div",
                        { class: "pointer-events-none absolute left-[-201px] top-[-201px] h-[402px] w-[402px]" },
                        [(0, n._)("img", { class: "h-full w-full", src: "https://static.wetab.link/hitab/game-widget/shine_large.png", alt: "shine" })],
                        -1
                    )
                ),
                ie = ["onClick"],
                se = { class: "flex flex-1 flex-shrink-0 flex-col overflow-hidden bg-[#262A35] p-[16px] icon-m:p-[12px] icon-s:p-[12px]" },
                ne = { class: "flex items-center justify-between" },
                le = { class: "flex items-center" },
                oe = { class: "flex items-center" },
                ce = I(() => (0, n._)("span", { class: "text-[12px] text-color-game-t2" }, "新闻资讯", -1)),
                re = [I(() => (0, n._)("i", { class: "iconfont icon-toggle_icon text-[12px] text-color-white" }, null, -1))],
                pe = { class: "flex-1 pt-[12px] icon-m:pt-[12px] icon-s:pt-[12px]" },
                de = { class: "flex h-full flex-col justify-between py-[8px] icon-m:py-[4px] icon-s:py-[0px]" },
                me = I(() => (0, n._)("span", { class: "h-[4px] w-[4px] rounded-[2px] bg-color-white bg-opacity-20" }, null, -1)),
                ge = ["href"],
                xe = (0, n.aZ)({
                    __name: "game-large",
                    setup(e) {
                        const {
                            homeGameInfo: t,
                            showType: a,
                            toogleShowType: i,
                            homeNewsList: s,
                            homeNewsPage: r,
                            selectedNewsIndex: d,
                            onClickChangeHomeGame: m,
                            onClickChangeHomeNewsPage: g,
                            homeGameIndex: x,
                            onClickNewsTab: h,
                            homeGameIcon: u,
                            newsLoading: w,
                        } = Pe();
                        return (e, f) => (
                            (0, n.wg)(),
                            (0, n.iD)("section", N, [
                                T,
                                (0, n.wy)(
                                    (0, n._)(
                                        "div",
                                        H,
                                        [
                                            (0, n._)("div", U, [
                                                (0, n._)(
                                                    "div",
                                                    {
                                                        class: "bottom-shadow relative h-full w-[188px] rounded-[8px] bg-cover bg-center bg-no-repeat transition-[background] icon-m:w-[164px] icon-s:w-[148px]",
                                                        style: (0, l.normalizeStyle)({ backgroundImage: "url(" + (0, o.SU)(t).cover + ")" }),
                                                    },
                                                    [
                                                        z,
                                                        (0, n._)("div", A, [(0, n._)("img", { class: "h-[20px] w-[20px] rounded-[5px]", src: (0, o.SU)(u).icon, alt: "" }, null, 8, j)]),
                                                        (0, n._)("div", F, [
                                                            (0, n._)(
                                                                "div",
                                                                {
                                                                    class: (0, l.normalizeClass)([
                                                                        "expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2 bg-opacity-70",
                                                                        [0 === (0, o.SU)(x) ? "" : "hover:bg-opacity-100"],
                                                                    ]),
                                                                    onClick: f[0] || (f[0] = (0, c.withModifiers)((e) => (0, o.SU)(m)("pre"), ["stop"])),
                                                                },
                                                                [(0, n.Wm)(p.Z, { class: (0, l.normalizeClass)(["rotate-180 text-color-white", [0 === (0, o.SU)(x) ? "text-opacity-40" : ""]]) }, null, 8, ["class"])],
                                                                2
                                                            ),
                                                            (0, n._)(
                                                                "div",
                                                                {
                                                                    class: "expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2 bg-opacity-70 hover:bg-opacity-100",
                                                                    onClick: f[1] || (f[1] = (0, c.withModifiers)((e) => (0, o.SU)(m)("next"), ["stop"])),
                                                                },
                                                                [(0, n.Wm)(p.Z, { class: "text-color-white" })]
                                                            ),
                                                        ]),
                                                        (0, n._)("div", Z, [R, (0, n._)("span", O, " -" + (0, l.toDisplayString)((0, o.SU)(t).discount_percent) + "% ", 1)]),
                                                    ],
                                                    4
                                                ),
                                            ]),
                                            (0, n._)("div", M, [
                                                (0, n._)("div", Q, [
                                                    (0, n._)("div", B, [
                                                        K,
                                                        (0, n._)(
                                                            "div",
                                                            {
                                                                class: "expand-click ml-[8px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2",
                                                                onClick: f[2] || (f[2] = (0, c.withModifiers)((e) => (0, o.SU)(i)(2), ["stop"])),
                                                            },
                                                            E
                                                        ),
                                                    ]),
                                                ]),
                                                (0, n._)("div", V, [
                                                    (0, n._)("h3", X, (0, l.toDisplayString)((0, o.SU)(t).china_name), 1),
                                                    (0, n._)("p", Y, (0, l.toDisplayString)((0, o.SU)(t).name), 1),
                                                    (0, n.wy)(
                                                        (0, n._)(
                                                            "div",
                                                            q,
                                                            [
                                                                ((0, n.wg)(!0),
                                                                (0, n.iD)(
                                                                    n.HY,
                                                                    null,
                                                                    (0, n.Ko)(
                                                                        (0, o.SU)(t).genres,
                                                                        (e, t) => (
                                                                            (0, n.wg)(),
                                                                            (0, n.iD)("div", { key: t, class: "mr-[4px] h-[20px] flex-shrink-0 rounded-[4px] bg-color-game-b2 p-[4px] text-color-game-t2" }, (0, l.toDisplayString)(e), 1)
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                            ],
                                                            512
                                                        ),
                                                        [[c.vShow, (0, o.SU)(t).genres.length > 0]]
                                                    ),
                                                    (0, n._)("div", J, [
                                                        (0, n._)("span", W, " ¥" + (0, l.toDisplayString)((0, o.SU)(Ce)((0, o.SU)(t).discount)), 1),
                                                        (0, n._)("span", $, " ¥" + (0, l.toDisplayString)((0, o.SU)(Ce)((0, o.SU)(t).initial)), 1),
                                                        (0, n._)("div", ee, [
                                                            ((0, n.wg)(!0),
                                                            (0, n.iD)(
                                                                n.HY,
                                                                null,
                                                                (0, n.Ko)((0, o.SU)(t).tag, (e, t) => ((0, n.wg)(), (0, n.iD)("div", { key: t, class: "ml-[4px] text-color-game-t2" }, (0, l.toDisplayString)(e), 1))),
                                                                128
                                                            )),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]),
                                        ],
                                        512
                                    ),
                                    [[c.vShow, 1 === (0, o.SU)(a)]]
                                ),
                                (0, n.wy)(
                                    (0, n._)(
                                        "div",
                                        te,
                                        [
                                            ae,
                                            (0, n._)(
                                                "div",
                                                {
                                                    class: "hide-scroll hi-scroll relative z-0 flex h-full w-[120px] flex-col border-r border-solid border-color-white border-opacity-[0.08] py-[16px] icon-m:w-[112px] icon-s:w-[104px]",
                                                    onWheel: f[3] || (f[3] = (0, c.withModifiers)(() => {}, ["stop"])),
                                                },
                                                [
                                                    ((0, n.wg)(!0),
                                                    (0, n.iD)(
                                                        n.HY,
                                                        null,
                                                        (0, n.Ko)(
                                                            (0, o.SU)(L.QO),
                                                            (e, t) => (
                                                                (0, n.wg)(),
                                                                (0, n.iD)("div", { key: t, class: "mb-[10px] flex justify-center" }, [
                                                                    (0, n._)(
                                                                        "span",
                                                                        {
                                                                            class: (0, l.normalizeClass)([
                                                                                "transition-color h-[20px] cursor-pointer rounded-[6px] px-[9px] py-[3px] font-ali-55 text-[13px] leading-none text-color-white duration-75 hover:bg-color-white hover:bg-opacity-20",
                                                                                [(0, o.SU)(d) === t ? "bg-color-white bg-opacity-20  text-opacity-100" : "text-opacity-60"],
                                                                            ]),
                                                                            onClick: (0, c.withModifiers)((e) => (0, o.SU)(h)(t), ["stop"]),
                                                                        },
                                                                        (0, l.toDisplayString)(e.name),
                                                                        11,
                                                                        ie
                                                                    ),
                                                                ])
                                                            )
                                                        ),
                                                        128
                                                    )),
                                                ],
                                                32
                                            ),
                                            (0, n._)("div", se, [
                                                (0, n._)("div", ne, [
                                                    (0, n._)("div", le, [
                                                        (0, n._)(
                                                            "div",
                                                            {
                                                                class: "expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2",
                                                                onClick: f[4] || (f[4] = (0, c.withModifiers)((e) => (0, o.SU)(g)("pre"), ["stop"])),
                                                            },
                                                            [(0, n.Wm)(p.Z, { class: (0, l.normalizeClass)(["rotate-180 text-color-white", [0 === (0, o.SU)(r) ? "text-opacity-40" : ""]]) }, null, 8, ["class"])]
                                                        ),
                                                        (0, n._)(
                                                            "div",
                                                            {
                                                                class: "expand-click ml-[16px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2",
                                                                onClick: f[5] || (f[5] = (0, c.withModifiers)((e) => (0, o.SU)(g)("next"), ["stop"])),
                                                            },
                                                            [(0, n.Wm)(p.Z, { class: (0, l.normalizeClass)(["text-color-white", [4 === (0, o.SU)(r) ? "text-opacity-40" : ""]]) }, null, 8, ["class"])]
                                                        ),
                                                    ]),
                                                    (0, n._)("div", oe, [
                                                        ce,
                                                        (0, n._)(
                                                            "div",
                                                            {
                                                                class: "expand-click ml-[8px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-game-b2",
                                                                onClick: f[6] || (f[6] = (0, c.withModifiers)((e) => (0, o.SU)(i)(1), ["stop"])),
                                                            },
                                                            re
                                                        ),
                                                    ]),
                                                ]),
                                                (0, n._)("div", pe, [
                                                    (0, n._)("ul", de, [
                                                        (0, n.wy)((0, n.Wm)(D.Z, { class: "w-full pb-[10px]" }, null, 512), [[c.vShow, (0, o.SU)(w)]]),
                                                        ((0, n.wg)(!0),
                                                        (0, n.iD)(
                                                            n.HY,
                                                            null,
                                                            (0, n.Ko)(
                                                                (0, o.SU)(s),
                                                                (e, t) => (
                                                                    (0, n.wg)(),
                                                                    (0, n.iD)("li", { key: t, class: "flex items-center" }, [
                                                                        me,
                                                                        (0, n._)(
                                                                            "a",
                                                                            {
                                                                                class: "transition-color text-dot ml-[8px] flex-1 flex-shrink-0 font-ali-55 text-[13px] text-color-game-t2 duration-75 hover:text-color-white",
                                                                                href: e.link,
                                                                                target: "_blank",
                                                                                rel: "noopener noreferrer",
                                                                                onClick: f[7] || (f[7] = (0, c.withModifiers)(() => {}, ["stop"])),
                                                                                onMousedown: f[8] || (f[8] = (0, c.withModifiers)(() => {}, ["stop"])),
                                                                            },
                                                                            (0, l.toDisplayString)(e.title),
                                                                            41,
                                                                            ge
                                                                        ),
                                                                    ])
                                                                )
                                                            ),
                                                            128
                                                        )),
                                                    ]),
                                                ]),
                                            ]),
                                        ],
                                        512
                                    ),
                                    [[c.vShow, 2 === (0, o.SU)(a)]]
                                ),
                            ])
                        );
                    },
                }),
                he = (0, P.Z)(xe, [["__scopeId", "data-v-d16b7700"]]);
            var ue = a(70928),
                we = a(22854),
                fe = a(34179),
                ve = a(10435),
                _e = a(17319),
                be = a(59092),
                ye = a(63477);
            const Se = (e) => {
                    const t = { m: G, l: he };
                    return (0, we.C)(e, ue.widgetApp.value, t);
                },
                Ce = (e) => Number((e / 100).toFixed(2)),
                ke = () => {
                    const e = (0, fe.useGameStore)();
                    return {
                        clickWidget: () => {
                            e.setModal(!0);
                        },
                        onCloseModal: () => {
                            e.setModal(!1);
                        },
                        show: (0, ve.Jk)(e).modalShow,
                    };
                },
                Pe = () => {
                    const e = (0, fe.useGameStore)(),
                        t = (0, ve.Jk)(e),
                        a = (0, o.iH)(0),
                        i = (0, n.Fl)(() => (0, L.N_)(t.homeGameInfo.value.platform)),
                        l = (0, n.Fl)(() => {
                            const e = t.newsList.value[t.selectedNewsIndex.value];
                            return (0, s.Z)(e.list, 5)[a.value];
                        });
                    return {
                        homeGameInfo: t.homeGameInfo,
                        homeGameIcon: i,
                        showType: t.showType,
                        selectedNewsIndex: t.selectedNewsIndex,
                        homeNewsList: l,
                        homeNewsPage: a,
                        onClickChangeHomeNewsPage: (e) => {
                            if ("pre" === e) {
                                if (0 === a.value) return;
                                a.value = a.value - 1;
                            } else {
                                if (4 === a.value) return;
                                a.value = a.value + 1;
                            }
                        },
                        toogleShowType: (t) => {
                            e.setShowType(t);
                        },
                        homeGameIndex: t.homeGameIndex,
                        gameList: t.gameList,
                        onClickChangeHomeGame: (a) => {
                            const i = t.homeGameIndex.value;
                            if ("pre" === a) {
                                if (0 === i) return !1;
                                e.setHomeGameIndex(i - 1);
                            } else if ("next" === a) {
                                if (i === t.gameList.value.length - 1) return !1;
                                e.setHomeGameIndex(i + 1);
                            }
                        },
                        onClickNewsTab: (i) => {
                            i !== t.selectedNewsIndex.value && ((a.value = 0), e.setSelectedNewsIndex(i));
                        },
                        newsLoading: t.newsLoading,
                    };
                },
                Ge = () => {
                    const e = (0, fe.useGameStore)(),
                        t = (0, ve.Jk)(e),
                        a = (0, o.iH)(1),
                        s = (0, o.iH)(),
                        l = (0, o.iH)(),
                        c = (0, o.iH)(!1),
                        r = (0, o.iH)({}),
                        p = (0, o.iH)({}),
                        d = (0, o.iH)(!1),
                        m = (0, n.Fl)(() => {
                            const e = t.selectedNewsIndex.value;
                            return t.newsList.value[e].list;
                        });
                    const g = (0, i.Z)(
                        () => {
                            e.reqGameList();
                        },
                        500,
                        { leading: !1 }
                    );
                    return (
                        (0, n.YP)(
                            () => t.modalShow.value,
                            (a) => {
                                a && 0 === t.gameList.value.length && e.reqGameList();
                            }
                        ),
                        {
                            onClickNewsTab: (a) => {
                                a !== t.selectedNewsIndex.value &&
                                    (e.setSelectedNewsIndex(a),
                                    (0, n.Y3)(() => {
                                        var e;
                                        null === (e = l.value) || void 0 === e || e.scrollTo({ top: 0, behavior: "smooth" });
                                    }));
                            },
                            onClickGameTab: (t) => {
                                e.setSelectedGameType(t);
                            },
                            gameTypeList: L.i2,
                            panelShowType: a,
                            switchPanelType: (t) => {
                                e.setModalPanelType(t);
                            },
                            gameList: t.gameList,
                            currentNewsList: m,
                            modalPanelType: t.modalPanelType,
                            selectedGameType: t.selectedGameType,
                            selectedNewsIndex: t.selectedNewsIndex,
                            platformCheck: t.gamePlatformCheck,
                            onClickPlatform: function (a) {
                                const i = [...t.gamePlatformCheck.value],
                                    s = i.indexOf(a);
                                if (s < 0) i.push(a);
                                else {
                                    if (1 === i.length) return _e.R.fail({ message: "请至少保留一个" }), !1;
                                    i.splice(s, 1);
                                }
                                e.setGamePlatformCheck(i);
                            },
                            gameScrollRef: s,
                            onGameScroll: function (e) {
                                const { scrollTop: t, scrollHeight: a, clientHeight: i } = e.target;
                                a - t <= i + 20 && g();
                            },
                            gameLoading: t.gameLoading,
                            newsLoading: t.newsLoading,
                            detailShow: c,
                            gameDetail: r,
                            onCloseDetail: function () {
                                c.value = !1;
                            },
                            onClickGameItem: async function (e) {
                                var t;
                                if (d.value) return;
                                (d.value = !0), (p.value = (0, L.N_)(e.platform));
                                const [a, i] = await (0, be.G)(e.id);
                                if (a || !i) return void (d.value = !1);
                                const [s, n] = await (0, ye.pt)(e.cover);
                                let l = "";
                                (l = s || !n ? "https://static.wetab.link/hitab/game-widget/cover.jpg" : e.cover),
                                    (r.value = { ...e, cover: l, introduction: null === (t = i.attribute) || void 0 === t ? void 0 : t.introduction }),
                                    (d.value = !1),
                                    (c.value = !0);
                            },
                            platformIcon: p,
                            newsScrollRef: l,
                        }
                    );
                };
        },
        75973: (e, t, a) => {
            a.d(t, { H_: () => i, N_: () => o, QO: () => n, RU: () => l, i2: () => s });
            const i = {
                    id: 19164,
                    isDefault: !0,
                    china_name: "小小梦魇 豪华版",
                    name: "LITTLE NIGHTMARES-リトルナイトメア- Deluxe Edition",
                    cover: GlobalGetApi + "http://cdn.vgn.cn/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_LittleNightmaresCompleteEdition_image500w.jpg?x-oss-process=image%2Fresize%2Cm_lfit%2Cw_360%2Fformat%2Cjpg",
                    platform: "switch",
                    genres: ["冒险", "益智", "动作"],
                    score: 7,
                    discount_percent: 43,
                    discount_end: 1673996399,
                    discount: 10484,
                    initial: 18545,
                    tag: ["持平史低", "中文"],
                    support_chinese: 2,
                },
                s = [
                    { name: "全部", value: "" },
                    { name: "动作", value: "0" },
                    { name: "冒险", value: "1" },
                    { name: "教育", value: "2" },
                    { name: "射击", value: "3" },
                    { name: "桌游", value: "4" },
                    { name: "模拟", value: "5" },
                    { name: "益智", value: "6" },
                    { name: "竞速", value: "7" },
                    { name: "策略", value: "8" },
                    { name: "街机", value: "9" },
                    { name: "角色扮演", value: "10" },
                    { name: "运动", value: "11" },
                    { name: "音乐", value: "12" },
                    { name: "第一人称", value: "13" },
                    { name: "休闲", value: "14" },
                    { name: "多人", value: "15" },
                ],
                n = [
                    { tab_id: 2, name: "全部", list: [] },
                    { tab_id: 63, name: "蒸汽日报", list: [] },
                    { tab_id: 33, name: "爆料", list: [] },
                    { tab_id: 40, name: "喜加一", list: [] },
                    { tab_id: 43, name: "PS会免", list: [] },
                    { tab_id: 45, name: "原创文章", list: [] },
                    { tab_id: 61, name: "Video Time", list: [] },
                    { tab_id: 42, name: "Epic免费", list: [] },
                    { tab_id: 37, name: "教程", list: [] },
                    { tab_id: 35, name: "情报", list: [] },
                    { tab_id: 29, name: "ACG", list: [] },
                    { tab_id: 34, name: "杂谈", list: [] },
                ],
                l = [
                    { icon: "https://static.wetab.link/hitab/game-widget/steam.png", text: "Steam", value: "3", bg: "rgba(44, 47, 59, 1)" },
                    { icon: "https://static.wetab.link/hitab/game-widget/switch.png", text: "Switch", value: "1", bg: "rgba(231, 0, 18, 1)" },
                    { icon: "https://static.wetab.link/hitab/game-widget/ps.png", text: "Play Station", value: "2,6", bg: "rgba(0, 54, 151, 1)" },
                    { icon: "https://static.wetab.link/hitab/game-widget/xbox.png", text: "Xbox", value: "4", bg: "rgba(15, 124, 17, 1)" },
                ],
                o = (e) => (e.indexOf("win") > -1 ? l[0] : "switch" === e ? l[1] : "xbox" === e ? l[3] : e.indexOf("ps") > -1 ? l[2] : l[0]);
        },
        77362: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(57268);
            const s = { class: "icon-next h-[12px] w-[12px]" },
                n = [
                    (0, i._)(
                        "svg",
                        { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" },
                        [
                            (0, i._)("g", { id: "页面-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, [
                                (0, i._)("g", { id: "10.小组件-_-热搜", transform: "translate(-476.000000, -846.000000)" }, [
                                    (0, i._)("g", { id: "larg_中图标模式", transform: "translate(40.000000, 832.000000)" }, [
                                        (0, i._)("g", { id: "down_icon", transform: "translate(442.000000, 20.000000) rotate(-90.000000) translate(-442.000000, -20.000000) translate(436.000000, 14.000000)" }, [
                                            (0, i._)("rect", { id: "矩形", fill: "#FFFFFF", opacity: "0", x: "0", y: "0", width: "12", height: "12" }),
                                            (0, i._)("path", {
                                                id: "路径-4",
                                                d:
                                                    "M6.19991172,2.40002943 C6.53128257,1.95820163 7.15808392,1.86865858 7.59991172,2.20002943 C8.00775277,2.50591021 8.11542219,3.06351876 7.86894131,3.49500427 L7.79991172,3.60002943 L6.24991172,6.00002943 L7.79991172,8.40002943 C8.10579251,8.80787047 8.05302476,9.37332212 7.69558717,9.71853356 L7.59991172,9.80002943 C7.19207068,10.1059102 6.62661903,10.0531425 6.28140758,9.69570487 L6.19991172,9.60002943 L4.19991172,6.60002943 C3.95991172,6.28002943 3.93591172,5.85202943 4.12791172,5.51042943 L4.19991172,5.40002943 L6.19991172,2.40002943 Z",
                                                fill: "currentColor",
                                                "fill-rule": "nonzero",
                                                transform: "translate(5.999941, 6.000029) rotate(-90.000000) translate(-5.999941, -6.000029) ",
                                            }),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ],
                        -1
                    ),
                ];
            const l = {},
                o = (0, a(76911).Z)(l, [
                    [
                        "render",
                        function (e, t) {
                            return (0, i.wg)(), (0, i.iD)("section", s, n);
                        },
                    ],
                ]);
        },
        52864: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(57268),
                s = a(94209);
            const n = { class: "flex items-center justify-center" },
                l = (0, i._)("div", { class: "mr-[8px] flex-shrink-0" }, [(0, i._)("i", { class: "iconfont icon-loading_small animate-spin text-[16px] text-color-game-t1" })], -1),
                o = { class: "text-[14px] text-color-game-t1" },
                c = (0, i.aZ)({ __name: "game-loading", setup: (e) => (e, t) => ((0, i.wg)(), (0, i.iD)("div", n, [l, (0, i._)("span", o, (0, s.toDisplayString)("加载中..."), 1)])) });
        },
        91200: (e) => {
            e.exports =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAAAXNSR0IArs4c6QAABAVJREFUeF7t3TtvE0EQwPG5kPgRQYMoKCIFKVTUVAiJFFFSYD4RLZ+HNiQNTk1NjVJR0dCcHUUcsh1HBD/utY+Zvf911s1KM/PbtewtdjNJ4Dn8cvppd9B/I1I8FpH9QmQ/ExlmIr1CZE9EeiLZzjTPdyb5ZEdEsgTKXilhMBxIfzgoLe12enNlvgGHF6fj3X7vXVm103wik3xSFmb2fR3067PLY9PwoC/maV302Riz8KA3RzcLD3o7dJPwoLdHNwcPuht0U/Cgu0M3Aw+6W3QT8KC7R1cPD7ofdNXwoPtDVwsPul90lfCg+0dXBw96GHRV8KCHQ1cDD3pYdBXwoIdHjw4Pehz0qPCgx0OPBg96XPQo8KDHRw8OD7oO9KDwoOtBDwYPui70IPCg60P3Dg+6TnSv8KDrRfcGD7pudC/woOtHdw4Pug10p/Cg20F3Bg+6LXQn8KDbQ28ND7pN9FbwoNtFbwwPum30RvCg20evDQ96Gui14EFPB70yPOhpoVeCBz099FJ40NNE3woPerroG+FBTxt9LTzo6aOvwIPeDfQH8KB3B/0eHvRuoc/hF4f89z4uSt/8cN77ojezQ/5n572X9Uv7++xoPPoqIlsLAT0t9PmKPxp/+CZSvN40Q0FPD/0O/v13kezVOnjQ00Rfwv8QyV78Dw96uuh38KOfIvL8X3jQ00afw78cj34VIk+X8KCnj75c8b9F5MnsA+jdQF/Czy5j64PeHfTl37mbaZ7vcRlfOpszVTaPsoPzk9tJPnlUJdhiTJPL+CzWWTfn7Nnnt38sXzy4rWDQN3dnBl/UnS0W4kHfrpQkPOjlSzM5eNDL0ee/6lP6qge9GnpS8KBXR08GHvR66EnAg14f3Tw86M3QTcOD3hzdLDzo7dBNwoPeHt0cPOhu0E3Bg+4O3Qw86G7RTcCD7h5dPTzoftBVw4PuD10tPOh+0VXCg+4fXR086GHQVcGDHg5dDTzoYdFVwIMeHj06POhx0KPCgx4PPRo86HHRo8CDHh89ODzoOtCDwoOuBz0YPOi60IPAg64P3Ts86DrRvcKDrhfdGzzoutG9wIOuH905POg20J3Cg24H3Rk86LbQncCDbg+9NTzoNtFbwYNuF70xPOi20RvBg24fvTY86Gmg14IHPR30yvCgp4VeCR709NBL4UFPE30rPOjpom+EBz1t9LXwoKePvgIPejfQH8CD3h30e3jQu4U+hz84Pyn6w0Fp5bfTm6vrs8vj0kACTHQgOxqPSq8fA92EZa0kS+FBr9VPM8Fb4UE341g70Y3woNfupakBa+FBN2XYKNkVeNAb9dHcoAfwoJvza5zwPTzojXtocuAcHnSTdq2Szg4vTsfsyLXqocnBfwFA11SoCrrEIAAAAABJRU5ErkJggg==";
        },
        39547: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(57422),
                s = a(60385),
                n = a(20684),
                l = a(9860);
            const o = function (e, t, a) {
                if (!(0, l.Z)(a)) return !1;
                var o = typeof t;
                return !!("number" == o ? (0, s.Z)(a) && (0, n.Z)(t, a.length) : "string" == o && t in a) && (0, i.Z)(a[t], e);
            };
        },
        94223: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(52561),
                s = a(39547),
                n = a(60275),
                l = Math.ceil,
                o = Math.max;
            const c = function (e, t, a) {
                t = (a ? (0, s.Z)(e, t, a) : void 0 === t) ? 1 : o((0, n.Z)(t), 0);
                var c = null == e ? 0 : e.length;
                if (!c || t < 1) return [];
                for (var r = 0, p = 0, d = Array(l(c / t)); r < c; ) d[p++] = (0, i.Z)(e, r, (r += t));
                return d;
            };
        },
    },
]);
