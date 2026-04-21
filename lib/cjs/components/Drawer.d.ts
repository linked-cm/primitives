/**
 * copy from https://ui.shadcn.com/docs/components/drawer
 */
import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
declare const Root: {
    ({ shouldScaleBackground, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>): React.JSX.Element;
    displayName: string;
};
declare const Trigger: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger> & React.RefAttributes<React.ElementRef<typeof DrawerPrimitive.Trigger>>>;
declare const Portal: typeof import("vaul").Portal;
declare const Close: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close> & React.RefAttributes<React.ElementRef<typeof DrawerPrimitive.Close>>>;
declare const Overlay: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & React.RefAttributes<React.ElementRef<typeof DrawerPrimitive.Overlay>>>;
interface ContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
    hideHandle?: boolean;
}
declare const Content: React.ForwardRefExoticComponent<ContentProps & React.RefAttributes<HTMLDivElement>>;
declare const Header: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const Footer: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const Title: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & React.RefAttributes<React.ElementRef<typeof DrawerPrimitive.Title>>>;
declare const Description: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> & React.RefAttributes<React.ElementRef<typeof DrawerPrimitive.Description>>>;
export declare const Drawer: {
    Root: typeof Root;
    Portal: typeof Portal;
    Overlay: typeof Overlay;
    Trigger: typeof Trigger;
    Close: typeof Close;
    Content: typeof Content;
    Header: typeof Header;
    Footer: typeof Footer;
    Title: typeof Title;
    Description: typeof Description;
};
export { Root, Portal, Overlay, Trigger, Close, Content, Header, Footer, Title, Description, };
