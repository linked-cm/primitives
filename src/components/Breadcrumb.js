"use strict";
/**
 * copy from `https://ui.shadcn.com/docs/components/breadcrumb`
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var React = __importStar(require("react"));
var Breadcrumb_module_css_1 = __importDefault(require("./Breadcrumb.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var react_slot_1 = require("@radix-ui/react-slot");
var Root = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return React.createElement("nav", __assign({ ref: ref, "aria-label": "breadcrumb" }, props));
});
exports.Root = Root;
Root.displayName = 'Breadcrumb';
var List = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("ol", __assign({ ref: ref, className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.List, className) }, props)));
});
exports.List = List;
List.displayName = 'List';
var Item = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("li", __assign({ ref: ref, className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Item, className) }, props)));
});
exports.Item = Item;
Item.displayName = 'Item';
var Link = React.forwardRef(function (_a, ref) {
    var asChild = _a.asChild, className = _a.className, props = __rest(_a, ["asChild", "className"]);
    var Comp = asChild ? react_slot_1.Slot : 'a';
    return React.createElement(Comp, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Link, className) }, props));
});
exports.Link = Link;
Link.displayName = 'Link';
var Page = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("span", __assign({ ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Page, className) }, props)));
});
exports.Page = Page;
Page.displayName = 'Page';
var Separator = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React.createElement("li", __assign({ role: "presentation", "aria-hidden": "true", className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Separator, className) }, props), children !== null && children !== void 0 ? children : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-chevron-right" },
        React.createElement("path", { d: "m9 18 6-6-6-6" })))));
};
exports.Separator = Separator;
Separator.displayName = 'Separator';
var Ellipsis = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("span", __assign({ role: "presentation", "aria-hidden": "true", className: (0, ClassNames_1.cl)(Breadcrumb_module_css_1.default.Ellipsis, className) }, props),
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: (0, ClassNames_1.cl)("lucide lucide-ellipsis", Breadcrumb_module_css_1.default.moreHorizontal) },
            React.createElement("circle", { cx: 12, cy: 12, r: 1 }),
            React.createElement("circle", { cx: 19, cy: 12, r: 1 }),
            React.createElement("circle", { cx: 5, cy: 12, r: 1 })),
        React.createElement("span", { className: Breadcrumb_module_css_1.default.srOnly }, "More")));
};
exports.Ellipsis = Ellipsis;
Ellipsis.displayName = 'Ellipsis';
exports.Breadcrumb = {
    Root: Root,
    List: List,
    Item: Item,
    Link: Link,
    Page: Page,
    Separator: Separator,
    Ellipsis: Ellipsis,
};
//# sourceMappingURL=Breadcrumb.js.map