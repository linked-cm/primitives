import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
declare const Root: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const List: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Trigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const Content: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Tabs: {
    Root: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    List: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { Root, List, Trigger, Content };
