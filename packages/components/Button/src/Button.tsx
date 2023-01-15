import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { CommonComponentProps, OverridableChildrenComponent } from "@tails-ui/typings";

export type ButtonRootProps = OverridableChildrenComponent &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type IconProps = CommonComponentProps;

export function ButtonRoot({ children, asChild, className, ...rest }: ButtonRootProps) {
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

export function Icon({ children, className }: IconProps) {
  return (
    <Slot 
      className={clsx(className, "w-6 h-6 text-black mx-2")}
      aria-hidden
    >
      {children}
    </Slot>
  )
}

Icon.displayName = "Button.Icon";
ButtonRoot.displayName = "Button";

export const Button = Object.assign(ButtonRoot, {
  Icon
});