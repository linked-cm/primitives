"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.ScrollDownButton = exports.ScrollUpButton = exports.Separator = exports.Item = exports.Label = exports.Content = exports.Trigger = exports.Value = exports.Group = exports.Root = exports.Select = void 0;
var React = __importStar(require("react"));
var Select_module_css_1 = __importDefault(require("./Select.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var SelectPrimitive = __importStar(require("@radix-ui/react-select"));
var Root = SelectPrimitive.Root;
exports.Root = Root;
var Group = SelectPrimitive.Group;
exports.Group = Group;
var Value = SelectPrimitive.Value;
exports.Value = Value;
var Trigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? 'default' : _b, children = _a.children, props = __rest(_a, ["className", "size", "children"]);
    return (React.createElement(SelectPrimitive.Trigger, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Select_module_css_1.default.Trigger, size && Select_module_css_1.default[size], className) }, props),
        children,
        React.createElement(SelectPrimitive.Icon, { className: Select_module_css_1.default.Icon, asChild: true },
            React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))));
});
exports.Trigger = Trigger;
Trigger.displayName = SelectPrimitive.Trigger.displayName;
var ScrollUpButton = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(SelectPrimitive.ScrollUpButton, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Select_module_css_1.default.ScrollButton, className) }, props),
        React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }))));
});
exports.ScrollUpButton = ScrollUpButton;
ScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var ScrollDownButton = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(SelectPrimitive.ScrollDownButton, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Select_module_css_1.default.ScrollButton, className) }, props),
        React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }))));
});
exports.ScrollDownButton = ScrollDownButton;
ScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var Content = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.position, position = _b === void 0 ? 'popper' : _b, props = __rest(_a, ["className", "children", "position"]);
    return (React.createElement(SelectPrimitive.Portal, null,
        React.createElement(SelectPrimitive.Content, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Select_module_css_1.default.Content, position === 'popper' && Select_module_css_1.default.PopperContent, className), position: position }, props),
            React.createElement(ScrollUpButton, null),
            React.createElement(SelectPrimitive.Viewport, { className: (0, ClassNames_1.cl)(Select_module_css_1.default.Viewport, position === 'popper' && Select_module_css_1.default.PopperViewport) }, children),
            React.createElement(ScrollDownButton, null))));
});
exports.Content = Content;
Content.displayName = SelectPrimitive.Content.displayName;
var Label = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(SelectPrimitive.Label, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Select_module_css_1.default.Label, className) }, props)));
});
exports.Label = Label;
Label.displayName = SelectPrimitive.Label.displayName;
var Item = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(SelectPrimitive.Item, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Select_module_css_1.default.Item, className) }, props),
        React.createElement(SelectPrimitive.ItemIndicator, { className: Select_module_css_1.default.ItemIndicator },
            React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }))),
        React.createElement(SelectPrimitive.ItemText, null, children)));
});
exports.Item = Item;
Item.displayName = SelectPrimitive.Item.displayName;
var Separator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(SelectPrimitive.Separator, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Select_module_css_1.default.Separator, className) }, props)));
});
exports.Separator = Separator;
Separator.displayName = SelectPrimitive.Separator.displayName;
exports.Select = {
    Root: Root,
    Group: Group,
    Value: Value,
    Trigger: Trigger,
    Content: Content,
    Label: Label,
    Item: Item,
    Separator: Separator,
    ScrollUpButton: ScrollUpButton,
    ScrollDownButton: ScrollDownButton,
};
//# sourceMappingURL=Select.js.map