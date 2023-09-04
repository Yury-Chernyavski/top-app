import { ReactNode } from "react";

export interface ICard {
  color?: "white" | "grey";
  children: ReactNode;
  className?: string;
}
