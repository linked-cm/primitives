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
exports.Shortcut = exports.RadioGroup = exports.Sub = exports.Group = exports.SubContent = exports.SubTrigger = exports.Separator = exports.Label = exports.RadioItem = exports.CheckboxItem = exports.Item = exports.Content = exports.Trigger = exports.Root = exports.ContextMenu = void 0;
var React = __importStar(require("react"));
var ContextMenu_module_css_1 = __importDefault(require("./ContextMenu.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var ContextMenuPrimitive = __importStar(require("@radix-ui/react-context-menu"));
function extend(Component, baseClassName) {
    var extended = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return React.createElement(Component, __assign({ ref: ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
var Group = ContextMenuPrimitive.Group;
exports.Group = Group;
var Portal = ContextMenuPrimitive.Portal;
var Sub = ContextMenuPrimitive.Sub;
exports.Sub = Sub;
var RadioGroup = ContextMenuPrimitive.RadioGroup;
exports.RadioGroup = RadioGroup;
var Root = extend(ContextMenuPrimitive.Root, ContextMenu_module_css_1.default.Root);
exports.Root = Root;
var Trigger = extend(ContextMenuPrimitive.Trigger, ContextMenu_module_css_1.default.Trigger);
exports.Trigger = Trigger;
var SubContent = extend(ContextMenuPrimitive.SubContent, ContextMenu_module_css_1.default.SubContent);
exports.SubContent = SubContent;
var Separator = extend(ContextMenuPrimitive.Separator, ContextMenu_module_css_1.default.Separator);
exports.Separator = Separator;
var SubTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(ContextMenuPrimitive.SubTrigger, __assign({ ref: ref, className: (0, ClassNames_1.cl)(ContextMenu_module_css_1.default.SubTrigger, inset && ContextMenu_module_css_1.default.Inset, className) }, props),
        children,
        React.createElement("div", { className: ContextMenu_module_css_1.default.RightSlot },
            React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))));
});
exports.SubTrigger = SubTrigger;
SubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var Content = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(Portal, null,
        React.createElement(ContextMenuPrimitive.Content, __assign({ ref: ref, className: (0, ClassNames_1.cl)(ContextMenu_module_css_1.default.Content, className) }, props))));
});
exports.Content = Content;
Content.displayName = ContextMenuPrimitive.Content.displayName;
var Item = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(ContextMenuPrimitive.Item, __assign({ ref: ref, className: (0, ClassNames_1.cl)(ContextMenu_module_css_1.default.Item, inset && ContextMenu_module_css_1.default.Inset, className) }, props)));
});
exports.Item = Item;
Item.displayName = ContextMenuPrimitive.Item.displayName;
var CheckboxItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
    return (React.createElement(ContextMenuPrimitive.CheckboxItem, __assign({ ref: ref, className: (0, ClassNames_1.cl)(ContextMenu_module_css_1.default.CheckboxItem, className), checked: checked }, props),
        React.createElement("span", { className: ContextMenu_module_css_1.default.ItemIndicator },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))),
        children));
});
exports.CheckboxItem = CheckboxItem;
CheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var RadioItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(ContextMenuPrimitive.RadioItem, __assign({ ref: ref, className: (0, ClassNames_1.cl)(ContextMenu_module_css_1.default.RadioItem, className) }, props),
        React.createElement("span", { className: ContextMenu_module_css_1.default.ItemIndicator },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z", fill: "currentColor" })))),
        children));
});
exports.RadioItem = RadioItem;
RadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var Label = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(ContextMenuPrimitive.Label, __assign({ ref: ref, className: (0, ClassNames_1.cl)(ContextMenu_module_css_1.default.Label, inset && ContextMenu_module_css_1.default.Inset, className) }, props)));
});
exports.Label = Label;
Label.displayName = ContextMenuPrimitive.Label.displayName;
var Shortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement("span", __assign({ className: (0, ClassNames_1.cl)(ContextMenu_module_css_1.default.RightSlot, className) }, props));
};
exports.Shortcut = Shortcut;
Shortcut.displayname = 'ContextMenuShortcut';
exports.ContextMenu = {
    Root: Root,
    Trigger: Trigger,
    Content: Content,
    Item: Item,
    CheckboxItem: CheckboxItem,
    RadioItem: RadioItem,
    Label: Label,
    Separator: Separator,
    SubTrigger: SubTrigger,
    SubContent: SubContent,
    Group: Group,
    Sub: Sub,
    RadioGroup: RadioGroup,
    Shortcut: Shortcut,
};
//# sourceMappingURL=ContextMenu.js.map