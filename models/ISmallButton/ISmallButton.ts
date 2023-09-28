import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { close, menu, up } from "@/theme/components/SmallButton/assets";

export const icons = {
  menu,
  up,
  close,
};

type IconName = keyof typeof icons;

export interface ISmallButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: "primary" | "second";
  icon: IconName;
}
