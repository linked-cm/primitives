import React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
type MultiSelectorProps = {
    values: string[];
    onValuesChange: (value: string[]) => void;
    loop?: boolean;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
declare const Root: {
    ({ values: value, onValuesChange: onValueChange, loop, className, children, dir, ...props }: MultiSelectorProps): React.JSX.Element;
    displayName: string;
};
declare const Trigger: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const Input: React.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
declare const Content: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const List: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<{
    value: string;
} & Omit<{
    children?: React.ReactNode;
} & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const MultiSelect: {
    Root: {
        ({ values: value, onValuesChange: onValueChange, loop, className, children, dir, ...props }: MultiSelectorProps): React.JSX.Element;
        displayName: string;
    };
    Trigger: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    Input: React.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & {
        ref?: React.Ref<HTMLInputElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
        value?: string;
        onValueChange?: (search: string) => void;
    } & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
    Content: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    List: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        label?: string;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<{
        value: string;
    } & Omit<{
        children?: React.ReactNode;
    } & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
        disabled?: boolean;
        onSelect?: (value: string) => void;
        value?: string;
        keywords?: string[];
        forceMount?: boolean;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { Root, Trigger, Input, Content, List, Item };
