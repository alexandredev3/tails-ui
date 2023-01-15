import * as React from "react";

export interface OverridableChildrenComponent extends CommonComponentProps {
  asChild?: boolean;
}

export interface CommonComponentProps<TChildren extends React.ReactNode = React.ReactNode> {
  className?: string;
  children?: TChildren;
}