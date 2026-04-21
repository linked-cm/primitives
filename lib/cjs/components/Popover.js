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
exports.Close = exports.Arrow = exports.Content = exports.Anchor = exports.Trigger = exports.Root = exports.Popover = void 0;
const React = __importStar(require("react"));
const Popover_module_css_1 = __importDefault(require("./Popover.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const PopoverPrimitive = __importStar(require("@radix-ui/react-popover"));
function extend(Component, baseClassName) {
    let extended = React.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Component, Object.assign({ ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
const Root = PopoverPrimitive.Root;
exports.Root = Root;
const Trigger = PopoverPrimitive.Trigger;
exports.Trigger = Trigger;
const Anchor = PopoverPrimitive.Anchor;
exports.Anchor = Anchor;
const Arrow = extend(PopoverPrimitive.Arrow, Popover_module_css_1.default.Arrow);
exports.Arrow = Arrow;
const Close = extend(PopoverPrimitive.Close, '');
exports.Close = Close;
const Content = React.forwardRef((_a, ref) => {
    var { className, align = 'center', sideOffset = 4, children } = _a, props = __rest(_a, ["className", "align", "sideOffset", "children"]);
    return (React.createElement(PopoverPrimitive.Portal, null,
        React.createElement(PopoverPrimitive.Content, Object.assign({ ref: ref, align: align, sideOffset: sideOffset, className: (0, ClassNames_1.cl)(Popover_module_css_1.default.Content, className) }, props),
            children,
            React.createElement(Close, { className: Popover_module_css_1.default.Close },
                React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }))))));
});
exports.Content = Content;
Content.displayName = PopoverPrimitive.Content.displayName;
exports.Popover = {
    Root,
    Trigger,
    Anchor,
    Content,
    Arrow,
    Close,
};
//# sourceMappingURL=Popover.js.map