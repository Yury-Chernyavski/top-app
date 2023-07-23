import { ReactNode } from "react";

export interface ITag {
  size?: "s" | "m",
  children: ReactNode,
  color?: "none" | "primary" | "red" | "grey" | "green",
  href?: string,
  className?: string
}
