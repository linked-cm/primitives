import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
declare const Indicator: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Root: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Progress: {
    Root: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { Root, Indicator };
