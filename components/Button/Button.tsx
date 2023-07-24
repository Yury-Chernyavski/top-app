import React from "react";

import cn from "classnames";

import styles from "./Button.module.css";

import { ArrowIcon } from "@/components/Button/assets";
import { IButton } from "@/models";

export const Button = ({ children, variant, arrow = "none", className, ...props }: IButton) => (
  <button
    className={cn(styles.button, className, {
      [styles.primary]: variant === "primary",
      [styles.second]: variant === "second"
    })}
    {...props}
  >
    {children}
    {arrow !== "none" && <span
      className={cn(styles.arrow, {
        [styles.down]: arrow === "down",
        [styles.right]: arrow === "right",
      })}
    >
      <ArrowIcon />
    </span>}
  </button>
);