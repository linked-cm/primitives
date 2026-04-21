import * as React from 'react';
import style from './ContextMenu.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
function extend(Component, baseClassName) {
    let extended = React.forwardRef(({ className, ...props }, ref) => React.createElement(Component, {
        ref,
        className: cl(baseClassName, className),
        ...props,
    }));
    extended.displayName = Component.displayName;
    return extended;
}
const Group = ContextMenuPrimitive.Group;
const Portal = ContextMenuPrimitive.Portal;
const Sub = ContextMenuPrimitive.Sub;
const RadioGroup = ContextMenuPrimitive.RadioGroup;
const Root = extend(ContextMenuPrimitive.Root, style.Root);
const Trigger = extend(ContextMenuPrimitive.Trigger, style.Trigger);
const SubContent = extend(ContextMenuPrimitive.SubContent, style.SubContent);
const Separator = extend(ContextMenuPrimitive.Separator, style.Separator);
const SubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (React.createElement(ContextMenuPrimitive.SubTrigger, { ref: ref, className: cl(style.SubTrigger, inset && style.Inset, className), ...props },
    children,
    React.createElement("div", { className: style.RightSlot },
        React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }))))));
SubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
const Content = React.forwardRef(({ className, ...props }, ref) => (React.createElement(Portal, null,
    React.createElement(ContextMenuPrimitive.Content, { ref: ref, className: cl(style.Content, className), ...props }))));
Content.displayName = ContextMenuPrimitive.Content.displayName;
const Item = React.forwardRef(({ className, inset, ...props }, ref) => (React.createElement(ContextMenuPrimitive.Item, { ref: ref, className: cl(style.Item, inset && style.Inset, className), ...props })));
Item.displayName = ContextMenuPrimitive.Item.displayName;
const CheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (React.createElement(ContextMenuPrimitive.CheckboxItem, { ref: ref, className: cl(style.CheckboxItem, className), checked: checked, ...props },
    React.createElement("span", { className: style.ItemIndicator },
        React.createElement(ContextMenuPrimitive.ItemIndicator, null,
            React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))),
    children)));
CheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
const RadioItem = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(ContextMenuPrimitive.RadioItem, { ref: ref, className: cl(style.RadioItem, className), ...props },
    React.createElement("span", { className: style.ItemIndicator },
        React.createElement(ContextMenuPrimitive.ItemIndicator, null,
            React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z", fill: "currentColor" })))),
    children)));
RadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const Label = React.forwardRef(({ className, inset, ...props }, ref) => (React.createElement(ContextMenuPrimitive.Label, { ref: ref, className: cl(style.Label, inset && style.Inset, className), ...props })));
Label.displayName = ContextMenuPrimitive.Label.displayName;
const Shortcut = ({ className, ...props }) => {
    return React.createElement("span", { className: cl(style.RightSlot, className), ...props });
};
Shortcut.displayname = 'ContextMenuShortcut';
export const ContextMenu = {
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
export { Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, SubTrigger, SubContent, Group, Sub, RadioGroup, Shortcut, };
//# sourceMappingURL=ContextMenu.js.map