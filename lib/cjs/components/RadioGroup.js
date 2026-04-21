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
exports.Item = exports.Root = exports.RadioGroup = void 0;
const React = __importStar(require("react"));
const RadioGroup_module_css_1 = __importDefault(require("./RadioGroup.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const RadioGroupPrimitive = __importStar(require("@radix-ui/react-radio-group"));
const Root = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(RadioGroupPrimitive.Root, Object.assign({ className: (0, ClassNames_1.cl)(RadioGroup_module_css_1.default.Root, className) }, props, { ref: ref })));
});
exports.Root = Root;
Root.displayName = RadioGroupPrimitive.Root.displayName;
const Item = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(RadioGroupPrimitive.Item, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(RadioGroup_module_css_1.default.Item, className) }, props),
        React.createElement(RadioGroupPrimitive.Indicator, { className: RadioGroup_module_css_1.default.Indicator })));
});
exports.Item = Item;
Item.displayName = RadioGroupPrimitive.Item.displayName;
exports.RadioGroup = {
    Root,
    Item,
};
//# sourceMappingURL=RadioGroup.js.map