/**
 * copy from https://ui.shadcn.com/docs/components/drawer
 */
import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import style from './Drawer.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
const Root = ({ shouldScaleBackground = true, ...props }) => (React.createElement(DrawerPrimitive.Root, { shouldScaleBackground: shouldScaleBackground, ...props }));
Root.displayName = 'Root';
const Trigger = DrawerPrimitive.Trigger;
const Portal = DrawerPrimitive.Portal;
const Close = DrawerPrimitive.Close;
const Overlay = React.forwardRef(({ className, ...props }, ref) => (React.createElement(DrawerPrimitive.Overlay, { ref: ref, className: cl(style.Overlay, className), ...props })));
Overlay.displayName = DrawerPrimitive.Overlay.displayName;
const Content = React.forwardRef(({ className, hideHandle, children, ...props }, ref) => (React.createElement(Portal, null,
    React.createElement(Overlay, null),
    React.createElement(DrawerPrimitive.Content, { ref: ref, className: cl(style.Content, className), ...props },
        !hideHandle && React.createElement("div", { className: style.Handle }),
        children))));
Content.displayName = 'Content';
const Header = ({ className, ...props }) => (React.createElement("div", { className: cl(style.Header, className), ...props }));
Header.displayName = 'Header';
const Footer = ({ className, ...props }) => (React.createElement("div", { className: cl(style.Footer, className), ...props }));
Footer.displayName = 'Footer';
const Title = React.forwardRef(({ className, ...props }, ref) => (React.createElement(DrawerPrimitive.Title, { ref: ref, className: cl(style.Title, className), ...props })));
Title.displayName = DrawerPrimitive.Title.displayName;
const Description = React.forwardRef(({ className, ...props }, ref) => (React.createElement(DrawerPrimitive.Description, { ref: ref, className: cl(style.Description, className), ...props })));
Description.displayName = DrawerPrimitive.Description.displayName;
export const Drawer = {
    Root,
    Portal,
    Overlay,
    Trigger,
    Close,
    Content,
    Header,
    Footer,
    Title,
    Description,
};
export { Root, Portal, Overlay, Trigger, Close, Content, Header, Footer, Title, Description, };
//# sourceMappingURL=Drawer.js.map