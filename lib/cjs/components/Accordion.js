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
exports.Content = exports.Trigger = exports.Item = exports.Root = exports.Accordion = void 0;
const React = __importStar(require("react"));
const Accordion_module_css_1 = __importDefault(require("./Accordion.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const AccordionPrimitive = __importStar(require("@radix-ui/react-accordion"));
function extend(Component, baseClassName) {
    let extended = React.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Component, Object.assign({ ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
const Root = extend(AccordionPrimitive.Root, Accordion_module_css_1.default.Root);
exports.Root = Root;
const Item = extend(AccordionPrimitive.Item, Accordion_module_css_1.default.Item);
exports.Item = Item;
const Trigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(AccordionPrimitive.Header, { className: Accordion_module_css_1.default.Header },
        React.createElement(AccordionPrimitive.Trigger, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Accordion_module_css_1.default.Trigger, className) }, props),
            children,
            React.createElement("svg", { className: Accordion_module_css_1.default.Icon, width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))));
});
exports.Trigger = Trigger;
Trigger.displayName = AccordionPrimitive.Trigger.displayName;
const Content = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(AccordionPrimitive.Content, Object.assign({ ref: ref, className: Accordion_module_css_1.default.Content }, props),
        React.createElement("div", { className: (0, ClassNames_1.cl)(Accordion_module_css_1.default.ContentText, className) }, children)));
});
exports.Content = Content;
Content.displayName = AccordionPrimitive.Content.displayName;
exports.Accordion = {
    Root,
    Item,
    Trigger,
    Content,
};
//# sourceMappingURL=Accordion.js.map