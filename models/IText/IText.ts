import { ReactNode } from "react";

export interface IText {
  variant?: "s" | "m" | "l",
  className?: string,
  children: ReactNode
}
