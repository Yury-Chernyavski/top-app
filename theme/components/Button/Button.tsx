"use client";

import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import { ArrowIcon } from "@/theme/components/Button/assets";
import { IButton } from "@/models";
import { motion } from "framer-motion";

export const Button = ({
  children,
  variant,
  arrow = "none",
  className,
  ...props
}: IButton) => (
  <motion.button
    whileHover={{scale: 1.1}}
    className={cn(className, styles.button, {
      [styles.primary]: variant === "primary",
      [styles.second]: variant === "second"
    })}
    {...props}
    aria-label={className}
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
  </motion.button>
);
