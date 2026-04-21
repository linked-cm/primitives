import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
declare const Root: React.FC<DialogPrimitive.DialogProps>;
declare const Trigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const Overlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Close: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const Title: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const Description: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
interface ContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    hideCloseIcon?: boolean;
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
export declare const Dialog: {
    Root: React.FC<DialogPrimitive.DialogProps>;
    Trigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<ContentProps & React.RefAttributes<HTMLDivElement>>;
    Overlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    Header: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Close: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
};
export { Root, Trigger, Content, Overlay, Title, Description, Header, Footer, Close, };
