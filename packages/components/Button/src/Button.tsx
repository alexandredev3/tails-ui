import { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { OverridableChildrenComponent } from "@tails-ui/typings";

export type ButtonProps = OverridableChildrenComponent &
  HTMLAttributes<HTMLButtonElement>;

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        className,
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
