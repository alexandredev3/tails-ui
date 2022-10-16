import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { OverridableChildrenComponent } from "@tails-ui/typings";

export type TextSizes = "sm" | "md" | "lg";

export interface TextProps extends OverridableChildrenComponent {
  size?: TextSizes;
}

type TextContainerProps = OverridableChildrenComponent & {
  as: string;
};

const TEXT_SIZES: { [key in TextSizes]: string } = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

const HEADING_SIZES: { [key in TextSizes]: string } = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export function TextRoot({
  children,
  className,
  size = "md",
  ...rest
}: TextProps) {
  return (
    <TextContainer
      as="span"
      className={clsx(className, "text-gray-100", TEXT_SIZES[size])}
      {...rest}
    >
      {children}
    </TextContainer>
  );
}

export function TextHeading({
  children,
  className,
  size = "md",
  ...rest
}: TextProps) {
  return (
    <TextContainer
      as="h2"
      className={clsx(
        className,
        "text-gray-100 font-bold",
        HEADING_SIZES[size]
      )}
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
}: TextContainerProps) {
  const Comp = asChild ? Slot : as;

  return <Comp className={clsx(className, "font-sans")}>{children}</Comp>;
}

TextRoot.displayName = "Text";
TextHeading.displayName = "Text.Heading";
TextHighlight.displayName = "Text.Highlight";

export const Text = Object.assign(TextRoot, {
  Heading: TextHeading,
  Highlight: TextHighlight,
});
