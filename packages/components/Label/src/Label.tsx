import { LabelHTMLAttributes } from "react";
import { clsx } from "clsx";
import { CommonComponentProps } from "@tails-ui/typings";

export type LabelProps = CommonComponentProps &
  LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label className={clsx(className, "text-gray-100 font-sans")} {...rest}>
      {children}
    </label>
  );
}

Label.displayName = "Label"
