import { createRequire } from 'module';

createRequire(import.meta.url);

// src/components/styles/navbar-items.scss
var navbar_items_default = "/* Navbar items (navigation links)\n** See styles/global.scss for navbar styling */\nnav.navbarItems ul {\n  --items-gap: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--items-gap);\n  list-style: none;\n  padding: 0;\n  /* optical correction to align navbar vertically */\n  margin: 0 calc(var(--items-gap) / -2);\n}\nnav.navbarItems ul li {\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nnav.navbarItems ul a {\n  display: inline-block;\n  font-family: var(--bodyFont);\n  font-size: 1rem;\n  color: var(--darkgray);\n  text-decoration: none;\n  padding: calc(var(--items-gap) / 4) calc(var(--items-gap) / 2);\n}\nnav.navbarItems ul a.active {\n  color: var(--secondary);\n}\nnav.navbarItems ul a:hover {\n  color: var(--tertiary) !important;\n}\nnav.navbarItems {\n  /* Hide desktop list on mobile */\n}\n@media all and (max-width: 800px) {\n  nav.navbarItems {\n    display: none;\n  }\n}\n\n/* Hamburger toggle (mobile only) */\nbutton[command=show-modal] {\n  display: none;\n  background: none;\n  border: none;\n  color: var(--darkgray);\n  cursor: pointer;\n}\n@media all and (max-width: 800px) {\n  button[command=show-modal] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\nbutton[command=show-modal]:hover {\n  color: var(--secondary);\n}\n\n/* MOBILE DIALOG */\ndialog.navbar-dialog {\n  position: fixed;\n  inset: 0;\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  border: none;\n  background: var(--light);\n  color: var(--darkgray);\n  padding: 1rem;\n  box-sizing: border-box;\n  z-index: 200;\n}\ndialog.navbar-dialog header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--lightgray);\n  padding-bottom: 0.75rem;\n  margin-bottom: 1rem;\n}\ndialog.navbar-dialog header button[command=close] {\n  background: none;\n  border: none;\n  color: var(--darkgray);\n  cursor: pointer;\n  padding: 0.25rem;\n}\ndialog.navbar-dialog header button[command=close]:hover {\n  color: var(--secondary);\n}\ndialog.navbar-dialog ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\ndialog.navbar-dialog ul li {\n  margin: 0;\n  padding: 0;\n}\ndialog.navbar-dialog ul a {\n  display: block;\n  font-family: var(--bodyFont);\n  font-size: 1.125rem;\n  color: var(--darkgray);\n  text-decoration: none;\n  padding: 0.75rem 0.5rem;\n  border-radius: 5px;\n  transition: color 0.2s ease;\n}\ndialog.navbar-dialog ul a.active {\n  color: var(--secondary);\n}\ndialog.navbar-dialog ul a:hover {\n  color: var(--tertiary);\n}";
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

// src/components/Navbar.tsx
function NavbarComponent(opts) {
  const links = opts.links ?? [];
  const id = "navbar-dialog";
  const Component = (props) => {
    if (links.length === 0) return null;
    const slug = props.fileData.slug;
    return /* @__PURE__ */ u2(S, { children: [
      /* @__PURE__ */ u2("nav", { class: "navbarItems", children: /* @__PURE__ */ u2("ul", { children: links.map((link, i2) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2(
        "a",
        {
          class: isNavbarItemActive(slug, link.href) ? "active" : "",
          href: link.href,
          ...link.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
          children: link.label
        }
      ) }, i2)) }) }),
      /* @__PURE__ */ u2("button", { command: "show-modal", commandfor: id, children: /* @__PURE__ */ u2(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          children: [
            /* @__PURE__ */ u2("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
            /* @__PURE__ */ u2("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
            /* @__PURE__ */ u2("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
          ]
        }
      ) }),
      /* @__PURE__ */ u2("dialog", { class: "navbar-dialog", id, children: [
        /* @__PURE__ */ u2("header", { children: /* @__PURE__ */ u2("button", { command: "close", commandfor: id, type: "button", children: /* @__PURE__ */ u2(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            children: [
              /* @__PURE__ */ u2("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              /* @__PURE__ */ u2("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
            ]
          }
        ) }) }),
        /* @__PURE__ */ u2("nav", { children: /* @__PURE__ */ u2("ul", { children: links.map((link, i2) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2(
          "a",
          {
            class: isNavbarItemActive(slug, link.href) ? "active" : "",
            href: link.href,
            ...link.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
            children: link.label
          }
        ) }, i2)) }) })
      ] })
    ] });
  };
  Component.css = navbar_items_default;
  return Component;
}
function isNavbarItemActive(slug, url) {
  const slugTopLevel = slug?.split("/").filter(Boolean)[0] || "";
  const urlTopLevel = url?.split("/").filter(Boolean)[0] || "";
  return slugTopLevel === urlTopLevel;
}
var Navbar_default = NavbarComponent;

export { Navbar_default as Navbar };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map