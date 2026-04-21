import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
declare const Root: React.FC<PopoverPrimitive.PopoverProps>;
declare const Trigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const Anchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
declare const Arrow: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
declare const Close: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Popover: {
    Root: React.FC<PopoverPrimitive.PopoverProps>;
    Trigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Anchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Arrow: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
    Close: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
};
export { Root, Trigger, Anchor, Content, Arrow, Close };
