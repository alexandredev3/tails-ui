import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { OverridableChildrenComponent } from "@tails-ui/typings";

export type ButtonProps = OverridableChildrenComponent &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        className,
        "flex justify-center items-center py-3 px-4 h-10 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
