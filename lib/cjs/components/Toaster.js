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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = void 0;
// https://ui.shadcn.com/docs/components/toast
const React = __importStar(require("react"));
const use_toast_js_1 = require("../hooks/use-toast.js");
const Toast_js_1 = require("./Toast.js");
function Toaster() {
    const { toasts } = (0, use_toast_js_1.useToast)();
    return (React.createElement(Toast_js_1.Toast.Provider, null,
        toasts.map(function (_a) {
            var { id, title, description, action } = _a, props = __rest(_a, ["id", "title", "description", "action"]);
            return (React.createElement(Toast_js_1.Toast.Root, Object.assign({ key: id }, props),
                React.createElement("div", null,
                    title && React.createElement(Toast_js_1.Toast.Title, null, title),
                    description && (React.createElement(Toast_js_1.Toast.Description, null, description))),
                action,
                React.createElement(Toast_js_1.Toast.Close, null)));
        }),
        React.createElement(Toast_js_1.Toast.Viewport, null)));
}
exports.Toaster = Toaster;
//# sourceMappingURL=Toaster.js.map