import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { OverridableChildrenComponent } from "@tails-ui/typings";

export type TextSizes = "sm" | "md" | "lg";

export interface TextProps extends OverridableChildrenComponent {
  size?: TextSizes;
}

type TextContainerProps = TextProps & {
  as: string;
};

const sizes: { [key in TextSizes]: string } = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export function TextRoot({ children, className, ...rest }: TextProps) {
  return (
    <TextContainer
      as="span"
      className={clsx(className, "text-gray-100")}
      {...rest}
    >
      {children}
    </TextContainer>
  );
}

export function TextHeading({ children, className, ...rest }: TextProps) {
  return (
    <TextContainer
      as="h2"
      className={clsx(className, "text-gray-100 font-bold")}
      {...rest}
    >
      {children}
    </TextContainer>
  );
}

export function TextHighlight({ children, className, ...rest }: TextProps) {
  return (
    <TextContainer
      as="span"
      className={clsx(className, "bg-cyan-500 text-black")}
      {...rest}
    >
      {children}
    </TextContainer>
  );
}

function TextContainer({
  asChild,
  children,
  className,
  as,
  size = "md",
}: TextContainerProps) {
  const Comp = asChild ? Slot : as;

  return (
    <Comp className={clsx(className, "font-sans", sizes[size])}>
      {children}
    </Comp>
  );
}

TextRoot.displayName = "Text";
TextHeading.displayName = "Text.Heading";
TextHighlight.displayName = "Text.Highlight";

export const Text = Object.assign(TextRoot, {
  Heading: TextHeading,
  Highlight: TextHighlight,
});
