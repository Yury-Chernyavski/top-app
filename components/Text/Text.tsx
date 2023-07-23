import React from "react";
import style from "./Text.module.css";
import cn from "classnames";
import { IText } from "@/models";

export const Text = ({ variant = "m", children }: IText) => {
  return (
    <p
      className={cn(style.text, {
        [style.s]: variant === "s",
        [style.m]: variant === "m",
        [style.l]: variant === "l",
      })}
    >
      {children}
    </p>
  );
};
