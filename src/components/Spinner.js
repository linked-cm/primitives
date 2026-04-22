"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = Spinner;
var react_1 = __importDefault(require("react"));
var Spinner_module_css_1 = __importDefault(require("./Spinner.module.css"));
function Spinner(_a) {
    var _b = _a.active, active = _b === void 0 ? true : _b;
    return (react_1.default.createElement("div", { className: [Spinner_module_css_1.default.spinner, active && Spinner_module_css_1.default.active].join(' '), role: "progressbar", "aria-busy": active ? 'true' : 'false' }));
}
//# sourceMappingURL=Spinner.js.map