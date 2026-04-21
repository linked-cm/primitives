"use strict";
/**
 * copy from https://ui.shadcn.com/docs/components/drawer
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
exports.Description = exports.Title = exports.Footer = exports.Header = exports.Content = exports.Close = exports.Trigger = exports.Overlay = exports.Portal = exports.Root = exports.Drawer = void 0;
const React = __importStar(require("react"));
const vaul_1 = require("vaul");
const Drawer_module_css_1 = __importDefault(require("./Drawer.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const Root = (_a) => {
    var { shouldScaleBackground = true } = _a, props = __rest(_a, ["shouldScaleBackground"]);
    return (React.createElement(vaul_1.Drawer.Root, Object.assign({ shouldScaleBackground: shouldScaleBackground }, props)));
};
exports.Root = Root;
Root.displayName = 'Root';
const Trigger = vaul_1.Drawer.Trigger;
exports.Trigger = Trigger;
const Portal = vaul_1.Drawer.Portal;
exports.Portal = Portal;
const Close = vaul_1.Drawer.Close;
exports.Close = Close;
const Overlay = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Overlay, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Overlay, className) }, props)));
});
exports.Overlay = Overlay;
Overlay.displayName = vaul_1.Drawer.Overlay.displayName;
const Content = React.forwardRef((_a, ref) => {
    var { className, hideHandle, children } = _a, props = __rest(_a, ["className", "hideHandle", "children"]);
    return (React.createElement(Portal, null,
        React.createElement(Overlay, null),
        React.createElement(vaul_1.Drawer.Content, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Content, className) }, props),
            !hideHandle && React.createElement("div", { className: Drawer_module_css_1.default.Handle }),
            children)));
});
exports.Content = Content;
Content.displayName = 'Content';
const Header = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Header, className) }, props)));
};
exports.Header = Header;
Header.displayName = 'Header';
const Footer = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Footer, className) }, props)));
};
exports.Footer = Footer;
Footer.displayName = 'Footer';
const Title = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Title, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Title, className) }, props)));
});
exports.Title = Title;
Title.displayName = vaul_1.Drawer.Title.displayName;
const Description = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Description, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Description, className) }, props)));
});
exports.Description = Description;
Description.displayName = vaul_1.Drawer.Description.displayName;
exports.Drawer = {
    Root,
    Portal,
    Overlay,
    Trigger,
    Close,
    Content,
    Header,
    Footer,
    Title,
    Description,
};
//# sourceMappingURL=Drawer.js.map