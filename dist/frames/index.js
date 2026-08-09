import { createRequire } from 'module';

createRequire(import.meta.url);
var l;
function S(n2) {
  return n2.children;
}
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/frames/NavbarFrame.tsx
var NavbarFrame = {
  name: "navbar",
  render({
    componentData,
    navbar = [],
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer
  }) {
    const hasNavbar = navbar.length > 0;
    return /* @__PURE__ */ u2(S, { children: [
      hasNavbar && /* @__PURE__ */ u2("div", { class: "navbar", children: navbar.map((NavComponent) => /* @__PURE__ */ u2(NavComponent, { ...componentData })) }),
      /* @__PURE__ */ u2("div", { class: "left sidebar", children: left.map((BodyComponent) => /* @__PURE__ */ u2(BodyComponent, { ...componentData })) }),
      /* @__PURE__ */ u2("div", { class: "center", children: [
        /* @__PURE__ */ u2("div", { class: "page-header", children: [
          /* @__PURE__ */ u2("header", { children: header.map((HeaderComponent) => /* @__PURE__ */ u2(HeaderComponent, { ...componentData })) }),
          /* @__PURE__ */ u2("div", { class: "popover-hint", children: beforeBody.map((BodyComponent) => /* @__PURE__ */ u2(BodyComponent, { ...componentData })) })
        ] }),
        /* @__PURE__ */ u2(Content, { ...componentData }),
        /* @__PURE__ */ u2("hr", {}),
        /* @__PURE__ */ u2("div", { class: "page-footer", children: afterBody.map((BodyComponent) => /* @__PURE__ */ u2(BodyComponent, { ...componentData })) })
      ] }),
      /* @__PURE__ */ u2("div", { class: "right sidebar", children: right.map((BodyComponent) => /* @__PURE__ */ u2(BodyComponent, { ...componentData })) }),
      footer.map((FooterComponent) => /* @__PURE__ */ u2(FooterComponent, { ...componentData }))
    ] });
  }
};

export { NavbarFrame };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map