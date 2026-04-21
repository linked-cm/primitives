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
exports.DropdownMenu = exports.Shortcut = exports.RadioGroup = exports.Sub = exports.Group = exports.SubContent = exports.SubTrigger = exports.Separator = exports.Label = exports.RadioItem = exports.CheckboxItem = exports.Item = exports.Content = exports.Trigger = exports.Root = void 0;
const React = __importStar(require("react"));
const DropdownMenu_module_css_1 = __importDefault(require("./DropdownMenu.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const DropdownMenuPrimitive = __importStar(require("@radix-ui/react-dropdown-menu"));
function extend(Component, baseClassName) {
    let extended = React.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return React.createElement(Component, Object.assign({ ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
const Group = DropdownMenuPrimitive.Group;
exports.Group = Group;
const Portal = DropdownMenuPrimitive.Portal;
const Sub = DropdownMenuPrimitive.Sub;
exports.Sub = Sub;
const RadioGroup = DropdownMenuPrimitive.RadioGroup;
exports.RadioGroup = RadioGroup;
const Root = extend(DropdownMenuPrimitive.Root, DropdownMenu_module_css_1.default.Root);
exports.Root = Root;
const Trigger = extend(DropdownMenuPrimitive.Trigger, DropdownMenu_module_css_1.default.Trigger);
exports.Trigger = Trigger;
const SubContent = extend(DropdownMenuPrimitive.SubContent, DropdownMenu_module_css_1.default.SubContent);
exports.SubContent = SubContent;
const Separator = extend(DropdownMenuPrimitive.Separator, DropdownMenu_module_css_1.default.Separator);
exports.Separator = Separator;
const SubTrigger = React.forwardRef((_a, ref) => {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(DropdownMenuPrimitive.SubTrigger, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(DropdownMenu_module_css_1.default.SubTrigger, inset && DropdownMenu_module_css_1.default.Inset, className) }, props),
        children,
        React.createElement("div", { className: DropdownMenu_module_css_1.default.RightSlot },
            React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))));
});
exports.SubTrigger = SubTrigger;
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const Content = React.forwardRef((_a, ref) => {
    var { className, align = 'end', alignOffset = 0, sideOffset = 4 } = _a, props = __rest(_a, ["className", "align", "alignOffset", "sideOffset"]);
    return (React.createElement(Portal, null,
        React.createElement(DropdownMenuPrimitive.Content, Object.assign({ ref: ref, align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: (0, ClassNames_1.cl)(DropdownMenu_module_css_1.default.Content, className) }, props))));
});
exports.Content = Content;
Content.displayName = DropdownMenuPrimitive.Content.displayName;
const Item = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(DropdownMenuPrimitive.Item, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(DropdownMenu_module_css_1.default.Item, inset && DropdownMenu_module_css_1.default.Inset, className) }, props)));
});
exports.Item = Item;
Item.displayName = DropdownMenuPrimitive.Item.displayName;
const CheckboxItem = React.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return (React.createElement(DropdownMenuPrimitive.CheckboxItem, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(DropdownMenu_module_css_1.default.CheckboxItem, className), checked: checked }, props),
        React.createElement("span", { className: DropdownMenu_module_css_1.default.ItemIndicator },
            React.createElement(DropdownMenuPrimitive.ItemIndicator, null,
                React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))),
        children));
});
exports.CheckboxItem = CheckboxItem;
CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const RadioItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (React.createElement(DropdownMenuPrimitive.RadioItem, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(DropdownMenu_module_css_1.default.RadioItem, className) }, props),
        React.createElement("span", { className: DropdownMenu_module_css_1.default.ItemIndicator },
            React.createElement(DropdownMenuPrimitive.ItemIndicator, null,
                React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z", fill: "currentColor" })))),
        children));
});
exports.RadioItem = RadioItem;
RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const Label = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(DropdownMenuPrimitive.Label, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(DropdownMenu_module_css_1.default.Label, inset && DropdownMenu_module_css_1.default.Inset, className) }, props)));
});
exports.Label = Label;
Label.displayName = DropdownMenuPrimitive.Label.displayName;
const Shortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return React.createElement("span", Object.assign({ className: (0, ClassNames_1.cl)(DropdownMenu_module_css_1.default.RightSlot, className) }, props));
};
exports.Shortcut = Shortcut;
Shortcut.displayname = 'DropdownMenuShortcut';
const DropdownMenu = {
    Root,
    Trigger,
    Content,
    Item,
    CheckboxItem,
    RadioItem,
    Label,
    Separator,
    SubTrigger,
    SubContent,
    Group,
    Sub,
    RadioGroup,
    Shortcut,
};
exports.DropdownMenu = DropdownMenu;
exports.default = DropdownMenu;
//# sourceMappingURL=DropdownMenu.js.map