import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
declare const Root: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps {
}
declare const Dialog: {
    ({ children, ...props }: CommandDialogProps): React.JSX.Element;
    displayName: string;
};
declare const Input: React.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
declare const List: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Empty: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Group: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: React.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<Omit<{
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
declare const Shortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayName: string;
};
export declare const Command: {
    Root: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        label?: string;
        shouldFilter?: boolean;
        filter?: (value: string, search: string, keywords?: string[]) => number;
        defaultValue?: string;
        value?: string;
        onValueChange?: (value: string) => void;
        loop?: boolean;
        disablePointerSelection?: boolean;
        vimBindings?: boolean;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Dialog: {
        ({ children, ...props }: CommandDialogProps): React.JSX.Element;
        displayName: string;
    };
    Input: React.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & {
        ref?: React.Ref<HTMLInputElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
        value?: string;
        onValueChange?: (search: string) => void;
    } & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
    List: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        label?: string;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Empty: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
        heading?: React.ReactNode;
        value?: string;
        forceMount?: boolean;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<{
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
    Shortcut: {
        ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
        displayName: string;
    };
    Separator: React.ForwardRefExoticComponent<Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        alwaysRender?: boolean;
    } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { Root, Dialog, Input, List, Empty, Group, Item, Shortcut, Separator };
