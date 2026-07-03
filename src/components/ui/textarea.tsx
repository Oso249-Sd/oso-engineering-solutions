import * as React from "react";
import {cn} from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, ...props}, ref) => (
    <textarea
      className={cn(
        "focus-ring flex min-h-32 w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm shadow-sm transition placeholder:text-muted-foreground",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export {Textarea};
