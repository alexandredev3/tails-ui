import { InputHTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { CommonComponentProps } from "@tails-ui/typings";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type TextInputRootBaseProps<TChildren extends ReactNode> =
  CommonComponentProps<TChildren> & {
    error?: boolean;
  };

export type TextInputRootProps<TChildren extends ReactNode = ReactNode> =
  TChildren extends undefined
    ? InputProps & TextInputRootBaseProps<TChildren>
    : TextInputRootBaseProps<TChildren>;

export type IconProps = CommonComponentProps;

function TextInputRoot<TChildren extends ReactNode>({
  children,
  error,
  className,
  ...rest
}: TextInputRootProps<TChildren>) {
  const __className = clsx(
    className,
    "flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300",
    {
      "border border-red-50": error,
    }
  );

  return (
    <div className={__className}>
      {children ? children : <Input {...rest} />}
    </div>
  );
}

function Input(props: InputProps) {
  return (
    <input
      className="flex flex-1 bg-[transparent] outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

function Icon({ children, className }: IconProps) {
  return (
    <Slot className={clsx(className, "w-6 h-6 text-gray-400")} aria-hidden>
      {children}
    </Slot>
  );
}

TextInputRoot.displayName = "TextInput";
Input.displayName = "TextInput.Input";
Icon.displayName = "TextInput.Icon";

export const TextInput = Object.assign(TextInputRoot, {
  Input,
  Icon,
});
