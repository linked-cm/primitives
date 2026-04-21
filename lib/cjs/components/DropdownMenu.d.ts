import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
declare const Group: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Sub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const RadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Root: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuProps & React.RefAttributes<never>>;
declare const Trigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const CheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const Shortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayname: string;
};
declare const DropdownMenu: {
    Root: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuProps & React.RefAttributes<never>>;
    Trigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    CheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    RadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    Separator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    SubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    SubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
    Sub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
    RadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
    Shortcut: {
        ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
        displayname: string;
    };
};
export default DropdownMenu;
export { Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, SubTrigger, SubContent, Group, Sub, RadioGroup, Shortcut, DropdownMenu, };
