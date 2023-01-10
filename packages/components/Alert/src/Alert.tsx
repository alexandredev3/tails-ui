import { CommonComponentProps } from "@tails-ui/typings";

export interface AlertProps extends CommonComponentProps {};

export function Alert({ children }: AlertProps) { 
  return (
    <div>
      {children}
    </div>
  ); 
}