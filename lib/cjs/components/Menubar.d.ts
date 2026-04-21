import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
declare const Menu: {
    (props: MenubarPrimitive.MenubarMenuProps & {
        __scopeMenubar?: import("@radix-ui/react-context").Scope;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const Group: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Sub: React.FC<MenubarPrimitive.MenubarSubProps>;
declare const RadioGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Root: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Trigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SubContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Arrow: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
declare const SubTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const CheckboxItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const Shortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayname: string;
};
export declare const Menubar: {
    Root: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    CheckboxItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    RadioItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    Separator: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    SubTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    SubContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Arrow: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
    Menu: {
        (props: MenubarPrimitive.MenubarMenuProps & {
            __scopeMenubar?: import("@radix-ui/react-context").Scope;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Group: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React.RefAttributes<HTMLDivElement>>;
    Sub: React.FC<MenubarPrimitive.MenubarSubProps>;
    RadioGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
    Shortcut: {
        ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
        displayname: string;
    };
};
export { Root, Trigger, Content, Item, CheckboxItem, RadioItem, Label, Separator, SubTrigger, SubContent, Arrow, Menu, Group, Sub, RadioGroup, Shortcut, };
