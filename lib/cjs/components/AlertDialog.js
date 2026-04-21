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
exports.Cancel = exports.Action = exports.Description = exports.Title = exports.Footer = exports.Header = exports.Content = exports.Overlay = exports.Trigger = exports.Root = exports.AlertDialog = void 0;
const React = __importStar(require("react"));
const AlertDialog_module_css_1 = __importDefault(require("./AlertDialog.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const AlertDialogPrimitive = __importStar(require("@radix-ui/react-alert-dialog"));
function extend(Component, baseClassName) {
    let extended = React.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Component, Object.assign({ ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
const Root = AlertDialogPrimitive.Root;
exports.Root = Root;
const Trigger = AlertDialogPrimitive.Trigger;
exports.Trigger = Trigger;
const Portal = AlertDialogPrimitive.Portal;
const Overlay = extend(AlertDialogPrimitive.Overlay, AlertDialog_module_css_1.default.Overlay);
exports.Overlay = Overlay;
const Title = extend(AlertDialogPrimitive.Title, AlertDialog_module_css_1.default.Title);
exports.Title = Title;
const Description = extend(AlertDialogPrimitive.Description, AlertDialog_module_css_1.default.Description);
exports.Description = Description;
const Action = extend(AlertDialogPrimitive.Action, '');
exports.Action = Action;
const Cancel = extend(AlertDialogPrimitive.Action, '');
exports.Cancel = Cancel;
const Content = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(Portal, null,
        React.createElement(Overlay, null),
        React.createElement(AlertDialogPrimitive.Content, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(AlertDialog_module_css_1.default.Content, className) }, props))));
});
exports.Content = Content;
Content.displayName = AlertDialogPrimitive.Content.displayName;
const Header = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: (0, ClassNames_1.cl)(AlertDialog_module_css_1.default.Header, className) }, props)));
};
exports.Header = Header;
Header.displayName = 'Header';
const Footer = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: (0, ClassNames_1.cl)(AlertDialog_module_css_1.default.Footer, className) }, props)));
};
exports.Footer = Footer;
Footer.displayName = 'Footer';
exports.AlertDialog = {
    Root,
    Trigger,
    Overlay,
    Content,
    Header,
    Footer,
    Title,
    Description,
    Action,
    Cancel,
};
//# sourceMappingURL=AlertDialog.js.map