import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { OverridableChildrenComponent } from "@tails-ui/typings";

type HeadingSizes = "sm" | "md" | "lg";

export interface HeadingProps extends OverridableChildrenComponent {
  size?: HeadingSizes;
}

export function Heading({
  size = "md",
  children,
  asChild,
  className,
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(className, "text-gray-100 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
