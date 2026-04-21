"use strict";
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
exports.Viewport = exports.Indicator = exports.Link = exports.Item = exports.List = exports.Content = exports.Trigger = exports.Root = exports.NavigationMenu = void 0;
const React = __importStar(require("react"));
const NavigationMenu_module_css_1 = __importDefault(require("./NavigationMenu.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const NavigationMenuPrimitive = __importStar(require("@radix-ui/react-navigation-menu"));
function extend(Component, baseClassName) {
    let extended = React.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Component, Object.assign({ ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
const List = extend(NavigationMenuPrimitive.List, NavigationMenu_module_css_1.default.List);
exports.List = List;
const Link = extend(NavigationMenuPrimitive.Link, NavigationMenu_module_css_1.default.Link);
exports.Link = Link;
const Item = NavigationMenuPrimitive.Item;
exports.Item = Item;
// TODO: custom icon?
const Trigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(NavigationMenuPrimitive.Trigger, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(NavigationMenu_module_css_1.default.Trigger, className) }, props),
        children,
        ' ',
        React.createElement("svg", { className: NavigationMenu_module_css_1.default.CaretDown, width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }))));
});
exports.Trigger = Trigger;
Trigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const Content = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(NavigationMenuPrimitive.Content, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(NavigationMenu_module_css_1.default.Content, className) }, props)));
});
exports.Content = Content;
Content.displayName = NavigationMenuPrimitive.Content.displayName;
const Viewport = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", { className: (0, ClassNames_1.cl)(NavigationMenu_module_css_1.default.ViewportPosition) },
        React.createElement(NavigationMenuPrimitive.Viewport, Object.assign({ className: (0, ClassNames_1.cl)(NavigationMenu_module_css_1.default.Viewport, className), ref: ref }, props))));
});
exports.Viewport = Viewport;
Viewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const Indicator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(NavigationMenuPrimitive.Indicator, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(NavigationMenu_module_css_1.default.Indicator, className) }, props),
        React.createElement("div", { className: NavigationMenu_module_css_1.default.Arrow })));
});
exports.Indicator = Indicator;
Indicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
const Root = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(NavigationMenuPrimitive.Root, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(NavigationMenu_module_css_1.default.Root, className) }, props),
        children,
        React.createElement(Viewport, null)));
});
exports.Root = Root;
Root.displayName = NavigationMenuPrimitive.Root.displayName;
exports.NavigationMenu = {
    Root,
    Trigger,
    Content,
    List,
    Item,
    Link,
    Indicator,
    Viewport,
};
//# sourceMappingURL=NavigationMenu.js.map