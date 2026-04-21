import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
declare const Root: React.FC<HoverCardPrimitive.HoverCardProps>;
declare const Trigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
declare const Portal: React.FC<HoverCardPrimitive.HoverCardPortalProps>;
declare const Arrow: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const HoverCard: {
    Root: React.FC<HoverCardPrimitive.HoverCardProps>;
    Trigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
    Portal: React.FC<HoverCardPrimitive.HoverCardPortalProps>;
    Content: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Arrow: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
};
export { Root, Trigger, Portal, Content, Arrow };
