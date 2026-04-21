import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
declare const Root: React.ForwardRefExoticComponent<(Omit<AccordionPrimitive.AccordionSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<AccordionPrimitive.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Trigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Accordion: {
    Root: React.ForwardRefExoticComponent<(Omit<AccordionPrimitive.AccordionSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<AccordionPrimitive.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { Root, Item, Trigger, Content };
