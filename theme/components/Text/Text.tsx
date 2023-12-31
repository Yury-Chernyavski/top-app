import React from "react";
import style from "./Text.module.css";
import cn from "classnames";
import { IText } from "@/models";

export const Text = ({ variant = "m", children, className }: IText) => {
  return (
    <p
      className={cn(style.text, className, {
        [style.s]: variant === "s",
        [style.m]: variant === "m",
        [style.l]: variant === "l",
      })}
    >
      {children}
    </p>
  );
};
