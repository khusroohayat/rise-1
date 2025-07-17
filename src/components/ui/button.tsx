import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "group inline-flex justify-center items-center gap-[1rem] rounded-full cursor-pointer text-[1.4rem] md:text-[1.6rem] leading-[2rem] pl-[1.4rem] pr-[.3rem] py-[.3rem] bg-[#006BFF] text-white",
      dark: "group inline-flex justify-center items-center gap-[1rem] rounded-full cursor-pointer text-[1.4rem] md:text-[1.6rem] leading-[2rem] pl-[1.4rem] pr-[.3rem] py-[.3rem] bg-[#0B3558] text-white",
      transparent:
        "hover:underline inline-flex justify-center items-center gap-[1rem] rounded-full cursor-pointer text-[1.4rem] md:text-[1.6rem] leading-[2rem]",
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
