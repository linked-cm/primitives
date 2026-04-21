import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
declare const Group: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Sub: React.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const RadioGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Root: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuProps & React.RefAttributes<never>>;
declare const Trigger: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const SubContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SubTrigger: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const CheckboxItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const Shortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayname: string;
};
export declare const ContextMenu: {
    Root: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuProps & React.RefAttributes<never>>;
    Trigger: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Content: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    CheckboxItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    RadioItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    Separator: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    SubTrigger: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    SubContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
    Sub: React.FC<ContextMenuPrimitive.ContextMenuSubProps>;
    RadioGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
    Shortcut: {
        ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
        displayname: string;
    };
};
export { Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, SubTrigger, SubContent, Group, Sub, RadioGroup, Shortcut, };
