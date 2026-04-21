import * as React from 'react';
import style from './HoverCard.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
const Root = HoverCardPrimitive.Root;
const Trigger = HoverCardPrimitive.Trigger;
const Portal = HoverCardPrimitive.Portal;
const Arrow = React.forwardRef(({ className, ...props }, ref) => (React.createElement(HoverCardPrimitive.Arrow, { ref: ref, className: cl(style.Arrow, className), ...props })));
Arrow.displayName = HoverCardPrimitive.Content.displayName;
const Content = React.forwardRef(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (React.createElement(HoverCardPrimitive.Content, { ref: ref, align: align, sideOffset: sideOffset, className: cl(style.Content, className), ...props })));
Content.displayName = HoverCardPrimitive.Content.displayName;
export const HoverCard = {
    Root,
    Trigger,
    Portal,
    Content,
    Arrow,
};
export { Root, Trigger, Portal, Content, Arrow };
//# sourceMappingURL=HoverCard.js.map