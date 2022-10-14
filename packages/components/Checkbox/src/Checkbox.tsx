import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { CommonComponentProps, Partialize } from "@tails-ui/typings";
import { Check } from "phosphor-react";

export type CheckboxRootProps = CheckboxPrimitive.CheckboxProps &
  CommonComponentProps;

export type IconProps = CheckboxPrimitive.CheckboxIndicatorProps &
  Partialize<CommonComponentProps, "children">;

function CheckboxRoot({ className, children, ...rest }: CheckboxRootProps) {
  return (
    <CheckboxPrimitive.Root
      className={clsx(className, "w-6 h-6 p-[2px] bg-gray-800 rounded")}
      {...rest}
    >
      {children}
    </CheckboxPrimitive.Root>
  );
}

function Icon({ children, className, ...rest }: IconProps) {
  return (
    <CheckboxPrimitive.Indicator asChild {...rest}>
      {children ? (
        <Slot className={clsx(className, "h-5 w-5 text-cyan-500")}>
          {children}
        </Slot>
      ) : (
        <Check
          weight="bold"
          className={clsx(className, "h-5 w-5 text-cyan-500")}
        />
      )}
    </CheckboxPrimitive.Indicator>
  );
}

CheckboxRoot.displayName = "Checkbox";
Icon.displayName = "Checkbox.Icon";

export const Checkbox = Object.assign(CheckboxRoot, {
  Icon,
});
