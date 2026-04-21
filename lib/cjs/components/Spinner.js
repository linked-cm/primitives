"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const react_1 = __importDefault(require("react"));
const Spinner_module_css_1 = __importDefault(require("./Spinner.module.css"));
function Spinner({ active = true }) {
    return (react_1.default.createElement("div", { className: [Spinner_module_css_1.default.spinner, active && Spinner_module_css_1.default.active].join(' '), role: "progressbar", "aria-busy": active ? 'true' : 'false' }));
}
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map