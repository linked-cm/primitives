import * as React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';
declare const Root: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormProps & React.RefAttributes<HTMLFormElement>, "ref"> & React.RefAttributes<HTMLFormElement>>;
declare const Field: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormFieldProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormLabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;
declare const Control: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormControlProps & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
declare const Message: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormMessageProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const ValidityState: React.ForwardRefExoticComponent<FormPrimitive.FormValidityStateProps & {
    __scopeForm?: import("@radix-ui/react-context").Scope;
} & React.RefAttributes<never>>;
declare const Submit: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormSubmitProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const Form: {
    Root: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormProps & React.RefAttributes<HTMLFormElement>, "ref"> & React.RefAttributes<HTMLFormElement>>;
    Field: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormFieldProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormLabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;
    Control: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormControlProps & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
    Message: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormMessageProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
    ValidityState: React.ForwardRefExoticComponent<FormPrimitive.FormValidityStateProps & {
        __scopeForm?: import("@radix-ui/react-context").Scope;
    } & React.RefAttributes<never>>;
    Submit: React.ForwardRefExoticComponent<Omit<FormPrimitive.FormSubmitProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
};
export { Root, Field, Label, Control, Message, ValidityState, Submit };
