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
exports.Submit = exports.ValidityState = exports.Message = exports.Control = exports.Label = exports.Field = exports.Root = exports.Form = void 0;
const React = __importStar(require("react"));
const Form_module_css_1 = __importDefault(require("./Form.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const FormPrimitive = __importStar(require("@radix-ui/react-form"));
function extend(Component, baseClassName) {
    let extended = React.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Component, Object.assign({ ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
const Root = extend(FormPrimitive.Root, Form_module_css_1.default.Root);
exports.Root = Root;
const Field = extend(FormPrimitive.Field, Form_module_css_1.default.Field);
exports.Field = Field;
const Label = extend(FormPrimitive.Label, Form_module_css_1.default.Label);
exports.Label = Label;
const Control = extend(FormPrimitive.Control, Form_module_css_1.default.Control);
exports.Control = Control;
const Message = extend(FormPrimitive.Message, Form_module_css_1.default.Message);
exports.Message = Message;
const ValidityState = extend(FormPrimitive.ValidityState, Form_module_css_1.default.ValidityState);
exports.ValidityState = ValidityState;
const Submit = extend(FormPrimitive.Submit, Form_module_css_1.default.Submit);
exports.Submit = Submit;
exports.Form = {
    Root,
    Field,
    Label,
    Control,
    Message,
    ValidityState,
    Submit,
};
//# sourceMappingURL=Form.js.map