import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full min-h-28 rounded-md bg-midnight-200 border border-neutral-400/80 px-3 py-2 text-base transition-colors",
        "placeholder:text-muted-foreground resize-none",
        "focus-visible:outline-none focus-visible:border-neutral-400/80 focus-visible:ring-0",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
