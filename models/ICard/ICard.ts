import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ICard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "white" | "grey";
  children: ReactNode;
  className?: string;
}
