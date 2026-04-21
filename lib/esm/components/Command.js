import * as React from 'react';
import style from './Command.module.css';
import { Command as CommandPrimitive } from 'cmdk';
import { cl } from '@_linked/react/utils/ClassNames';
import { Root as DialogRoot, Content as DialogContent } from './Dialog.js';
const Root = React.forwardRef(({ className, ...props }, ref) => (React.createElement(CommandPrimitive, { ref: ref, className: cl(style.Root, className), ...props })));
Root.displayName = CommandPrimitive.displayName;
const Dialog = ({ children, ...props }) => {
    return (React.createElement(DialogRoot, { ...props },
        React.createElement(DialogContent, { className: style.dialogContent },
            React.createElement(Root, { className: style.DialogCommand }, children))));
};
Dialog.displayName = CommandPrimitive.Dialog.displayName;
const Input = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { className: style.InputContainer, "cmdk-input-wrapper": "" },
    React.createElement("svg", { className: style.Icon, width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })),
    React.createElement(CommandPrimitive.Input, { ref: ref, className: cl(style.Input, className), ...props }))));
Input.displayName = CommandPrimitive.Input.displayName;
const List = React.forwardRef(({ className, ...props }, ref) => (React.createElement(CommandPrimitive.List, { ref: ref, className: cl(style.list, className), ...props })));
List.displayName = CommandPrimitive.List.displayName;
const Empty = React.forwardRef((props, ref) => (React.createElement(CommandPrimitive.Empty, { ref: ref, className: style.Empty, ...props })));
Empty.displayName = CommandPrimitive.Empty.displayName;
const Group = React.forwardRef(({ className, ...props }, ref) => (React.createElement(CommandPrimitive.Group, { ref: ref, className: cl(style.Group, className), ...props })));
Group.displayName = CommandPrimitive.Group.displayName;
const Separator = React.forwardRef(({ className, ...props }, ref) => (React.createElement(CommandPrimitive.Separator, { ref: ref, className: cl(style.separator, className), ...props })));
Separator.displayName = CommandPrimitive.Separator.displayName;
const Item = React.forwardRef(({ className, ...props }, ref) => (React.createElement(CommandPrimitive.Item, { ref: ref, className: cl(style.Item, className), ...props })));
Item.displayName = CommandPrimitive.Item.displayName;
const Shortcut = ({ className, ...props }) => {
    return React.createElement("span", { className: cl(style.shortcut, className), ...props });
};
Shortcut.displayName = 'CommandShortcut';
// <Command.Root>
export const Command = {
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
// <Root></Root>
export { Root, Dialog, Input, List, Empty, Group, Item, Shortcut, Separator };
//# sourceMappingURL=Command.js.map