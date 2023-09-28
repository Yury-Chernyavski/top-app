import React from "react";
import { icons, ISmallButton } from "@/models/ISmallButton/ISmallButton";
import style from "./SmallButton.module.css";
import cn from "classnames";

export const SmallButton = ({
  appearance,
  icon,
  className,
  ...props
}: ISmallButton) => {
  const IconCom = icons[icon];
  return (
    <button
      className={cn(style.button, className, {
        [style.primary]: appearance === "primary",
        [style.second]: appearance === "second",
      })}
      {...props}
      aria-label={className}
    >
      <IconCom />
    </button>
  );
};
