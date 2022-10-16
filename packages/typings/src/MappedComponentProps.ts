import * as React from "react";

export interface OverridableChildrenComponent extends CommonComponentProps {
  asChild?: boolean;
}

export interface CommonComponentProps {
  className?: string;
  children: React.ReactNode;
}