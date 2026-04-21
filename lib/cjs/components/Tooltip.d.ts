import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
declare const Provider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Root: React.FC<TooltipPrimitive.TooltipProps>;
declare const Trigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const Arrow: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Tooltip: {
    Root: React.FC<TooltipPrimitive.TooltipProps>;
    Provider: React.FC<TooltipPrimitive.TooltipProviderProps>;
    Trigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Arrow: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
    Content: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { Root, Provider, Trigger, Arrow, Content };
