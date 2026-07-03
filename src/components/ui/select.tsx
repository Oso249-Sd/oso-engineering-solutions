import * as React from "react";
import {cn} from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({className, children, ...props}, ref) => (
    <select
      className={cn(
        "focus-ring flex min-h-11 w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm shadow-sm transition",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";

export {Select};
