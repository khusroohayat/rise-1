import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "group inline-flex justify-center items-center gap-[1rem] rounded-[.8rem] cursor-pointer text-[1.4rem] md:text-[1.6rem] leading-[2rem] bg-[#006BFF] py-[.8rem] transition-all duration-200 hover:opacity-90 px-[2rem] text-white",
      dark: "group inline-flex justify-center items-center py-[.8rem] transition-all duration-200 hover:opacity-90 px-[2rem] gap-[1rem] rounded-[.8rem] cursor-pointer text-[1.4rem] md:text-[1.6rem] leading-[2rem] bg-[#0B3558] text-white",
      transparent:
        "hover:underline inline-flex justify-center items-center gap-[1rem] rounded-[1.2rem] cursor-pointer text-[1.4rem] md:text-[1.6rem] leading-[2rem]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
