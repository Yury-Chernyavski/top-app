import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IText extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  variant?: "s" | "m" | "l",
  className?: string,
  children: ReactNode
}
