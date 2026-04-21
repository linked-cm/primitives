import * as React from 'react';
import style from './AlertDialog.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
function extend(Component, baseClassName) {
    let extended = React.forwardRef(({ className, ...props }, ref) => React.createElement(Component, {
        ref,
        className: cl(baseClassName, className),
        ...props,
    }));
    extended.displayName = Component.displayName;
    return extended;
}
const Root = AlertDialogPrimitive.Root;
const Trigger = AlertDialogPrimitive.Trigger;
const Portal = AlertDialogPrimitive.Portal;
const Overlay = extend(AlertDialogPrimitive.Overlay, style.Overlay);
const Title = extend(AlertDialogPrimitive.Title, style.Title);
const Description = extend(AlertDialogPrimitive.Description, style.Description);
const Action = extend(AlertDialogPrimitive.Action, '');
const Cancel = extend(AlertDialogPrimitive.Action, '');
const Content = React.forwardRef(({ className, ...props }, ref) => (React.createElement(Portal, null,
    React.createElement(Overlay, null),
    React.createElement(AlertDialogPrimitive.Content, { ref: ref, className: cl(style.Content, className), ...props }))));
Content.displayName = AlertDialogPrimitive.Content.displayName;
const Header = ({ className, ...props }) => (React.createElement("div", { className: cl(style.Header, className), ...props }));
Header.displayName = 'Header';
const Footer = ({ className, ...props }) => (React.createElement("div", { className: cl(style.Footer, className), ...props }));
Footer.displayName = 'Footer';
export const AlertDialog = {
    Root,
    Trigger,
    Overlay,
    Content,
    Header,
    Footer,
    Title,
    Description,
    Action,
    Cancel,
};
export { Root, Trigger, Overlay, Content, Header, Footer, Title, Description, Action, Cancel, };
//# sourceMappingURL=AlertDialog.js.map