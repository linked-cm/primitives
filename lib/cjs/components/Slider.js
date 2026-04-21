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
exports.Thumb = exports.Range = exports.Track = exports.Root = exports.Slider = void 0;
const React = __importStar(require("react"));
const Slider_module_css_1 = __importDefault(require("./Slider.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const SliderPrimitive = __importStar(require("@radix-ui/react-slider"));
function extend(Component, baseClassName) {
    let extended = React.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Component, Object.assign({ ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
const Track = extend(SliderPrimitive.Track, Slider_module_css_1.default.Track);
exports.Track = Track;
const Range = extend(SliderPrimitive.Range, Slider_module_css_1.default.Range);
exports.Range = Range;
const Thumb = extend(SliderPrimitive.Thumb, Slider_module_css_1.default.Thumb);
exports.Thumb = Thumb;
const Root = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(SliderPrimitive.Root, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Slider_module_css_1.default.Root, className) }, props),
        React.createElement(Track, null,
            React.createElement(Range, null)),
        React.createElement(Thumb, null)));
});
exports.Root = Root;
Root.displayName = SliderPrimitive.Root.displayName;
exports.Slider = {
    Root,
    Track,
    Range,
    Thumb,
};
//# sourceMappingURL=Slider.js.map