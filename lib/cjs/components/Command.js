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
exports.Separator = exports.Shortcut = exports.Item = exports.Group = exports.Empty = exports.List = exports.Input = exports.Dialog = exports.Root = exports.Command = void 0;
const React = __importStar(require("react"));
const Command_module_css_1 = __importDefault(require("./Command.module.css"));
const cmdk_1 = require("cmdk");
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const Dialog_js_1 = require("./Dialog.js");
const Root = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(cmdk_1.Command, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Command_module_css_1.default.Root, className) }, props)));
});
exports.Root = Root;
Root.displayName = cmdk_1.Command.displayName;
const Dialog = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Dialog_js_1.Root, Object.assign({}, props),
        React.createElement(Dialog_js_1.Content, { className: Command_module_css_1.default.dialogContent },
            React.createElement(Root, { className: Command_module_css_1.default.DialogCommand }, children))));
};
exports.Dialog = Dialog;
Dialog.displayName = cmdk_1.Command.Dialog.displayName;
const Input = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", { className: Command_module_css_1.default.InputContainer, "cmdk-input-wrapper": "" },
        React.createElement("svg", { className: Command_module_css_1.default.Icon, width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })),
        React.createElement(cmdk_1.Command.Input, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Command_module_css_1.default.Input, className) }, props))));
});
exports.Input = Input;
Input.displayName = cmdk_1.Command.Input.displayName;
const List = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(cmdk_1.Command.List, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Command_module_css_1.default.list, className) }, props)));
});
exports.List = List;
List.displayName = cmdk_1.Command.List.displayName;
const Empty = React.forwardRef((props, ref) => (React.createElement(cmdk_1.Command.Empty, Object.assign({ ref: ref, className: Command_module_css_1.default.Empty }, props))));
exports.Empty = Empty;
Empty.displayName = cmdk_1.Command.Empty.displayName;
const Group = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(cmdk_1.Command.Group, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Command_module_css_1.default.Group, className) }, props)));
});
exports.Group = Group;
Group.displayName = cmdk_1.Command.Group.displayName;
const Separator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(cmdk_1.Command.Separator, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Command_module_css_1.default.separator, className) }, props)));
});
exports.Separator = Separator;
Separator.displayName = cmdk_1.Command.Separator.displayName;
const Item = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(cmdk_1.Command.Item, Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(Command_module_css_1.default.Item, className) }, props)));
});
exports.Item = Item;
Item.displayName = cmdk_1.Command.Item.displayName;
const Shortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return React.createElement("span", Object.assign({ className: (0, ClassNames_1.cl)(Command_module_css_1.default.shortcut, className) }, props));
};
exports.Shortcut = Shortcut;
Shortcut.displayName = 'CommandShortcut';
// <Command.Root>
exports.Command = {
    Root,
    Dialog,
    Input,
    List,
    Empty,
    Group,
    Item,
    Shortcut,
    Separator,
};
//# sourceMappingURL=Command.js.map