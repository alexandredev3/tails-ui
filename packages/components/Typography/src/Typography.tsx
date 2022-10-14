import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { OverridableChildrenComponent } from "@tails-ui/typings";

type TypographySizes = "sm" | "md" | "lg";

export interface TypographyProps extends OverridableChildrenComponent {
  size?: TypographySizes;
}

export function Typography({
  size = "md",
  children,
  asChild,
  className,
}: TypographyProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(className, "text-gray-100 font-sans", {
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
