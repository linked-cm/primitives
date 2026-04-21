import * as React from 'react';
import style from './ScrollArea.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
const Scrollbar = React.forwardRef(({ className, orientation = 'vertical', ...props }, ref) => (React.createElement(ScrollAreaPrimitive.ScrollAreaScrollbar, { ref: ref, orientation: orientation, className: cl(style.Scrollbar, className), ...props },
    React.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: style.Thumb }))));
Scrollbar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const Root = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(ScrollAreaPrimitive.Root, { ref: ref, className: cl(style.Root, className), ...props },
    React.createElement(ScrollAreaPrimitive.Viewport, { className: style.Viewport }, children),
    React.createElement(Scrollbar, null),
    React.createElement(ScrollAreaPrimitive.Corner, null))));
Root.displayName = ScrollAreaPrimitive.Root.displayName;
export const ScrollArea = {
    Root,
    Scrollbar,
};
export { Root, Scrollbar };
//# sourceMappingURL=ScrollArea.js.map