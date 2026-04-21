/**
 * copy from `https://ui.shadcn.com/docs/components/breadcrumb`
 */
import * as React from 'react';
declare const Root: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
declare const List: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const Item: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const Link: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const Page: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const Separator: {
    ({ children, className, ...props }: React.ComponentProps<'li'>): React.JSX.Element;
    displayName: string;
};
declare const Ellipsis: {
    ({ className, ...props }: React.ComponentProps<'span'>): React.JSX.Element;
    displayName: string;
};
export declare const Breadcrumb: {
    Root: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
        separator?: React.ReactNode;
    } & React.RefAttributes<HTMLElement>>;
    List: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
    Item: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
    Link: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
        asChild?: boolean;
    } & React.RefAttributes<HTMLAnchorElement>>;
    Page: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    Separator: {
        ({ children, className, ...props }: React.ComponentProps<'li'>): React.JSX.Element;
        displayName: string;
    };
    Ellipsis: {
        ({ className, ...props }: React.ComponentProps<'span'>): React.JSX.Element;
        displayName: string;
    };
};
export { Root, List, Item, Link, Page, Separator, Ellipsis };
