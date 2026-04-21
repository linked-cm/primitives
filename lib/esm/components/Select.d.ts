import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
declare const Root: React.FC<SelectPrimitive.SelectProps>;
declare const Group: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Value: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
interface TriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
    size?: 'small' | 'medium' | 'large' | 'default';
}
declare const Trigger: React.ForwardRefExoticComponent<TriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const ScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Select: {
    Root: React.FC<SelectPrimitive.SelectProps>;
    Group: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
    Value: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
    Trigger: React.ForwardRefExoticComponent<TriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Separator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { Root, Group, Value, Trigger, Content, Label, Item, Separator, ScrollUpButton, ScrollDownButton, };
