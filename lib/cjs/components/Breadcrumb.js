"use strict";
/**
 * copy from `https://ui.shadcn.com/docs/components/breadcrumb`
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ellipsis = exports.Separator = exports.Page = exports.Link = exports.Item = exports.List = exports.Root = exports.Breadcrumb = void 0;
const React = __importStar(require("react"));
const Breadcrumb_module_css_1 = __importDefault(require("./Breadcrumb.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const react_slot_1 = require("@radix-ui/react-slot");
const Root = React.forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    return React.createElement("nav", Object.assign({ ref: ref, "aria-label": "breadcrumb" }, props));
});
exports.Root = Root;
Root.displayName = 'Breadcrumb';
const List = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("ol", Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.List, className) }, props)));
});
exports.List = List;
List.displayName = 'List';
const Item = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("li", Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Item, className) }, props)));
});
exports.Item = Item;
Item.displayName = 'Item';
const Link = React.forwardRef((_a, ref) => {
    var { asChild, className } = _a, props = __rest(_a, ["asChild", "className"]);
    const Comp = asChild ? react_slot_1.Slot : 'a';
    return React.createElement(Comp, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Link, className) }, props));
});
exports.Link = Link;
Link.displayName = 'Link';
const Page = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Page, className) }, props)));
});
exports.Page = Page;
Page.displayName = 'Page';
const Separator = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("li", Object.assign({ role: "presentation", "aria-hidden": "true", className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Separator, className) }, props), children !== null && children !== void 0 ? children : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-chevron-right" },
        React.createElement("path", { d: "m9 18 6-6-6-6" })))));
};
exports.Separator = Separator;
Separator.displayName = 'Separator';
const Ellipsis = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("span", Object.assign({ role: "presentation", "aria-hidden": "true", className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Ellipsis, className) }, props),
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: (0, ClassNames_1.cl)(`lucide lucide-ellipsis`, Breadcrumb_module_css_1.default.moreHorizontal) },
            React.createElement("circle", { cx: 12, cy: 12, r: 1 }),
            React.createElement("circle", { cx: 19, cy: 12, r: 1 }),
            React.createElement("circle", { cx: 5, cy: 12, r: 1 })),
        React.createElement("span", { className: Breadcrumb_module_css_1.default.srOnly }, "More")));
};
exports.Ellipsis = Ellipsis;
Ellipsis.displayName = 'Ellipsis';
exports.Breadcrumb = {
    Root,
    List,
    Item,
    Link,
    Page,
    Separator,
    Ellipsis,
};
//# sourceMappingURL=Breadcrumb.js.map