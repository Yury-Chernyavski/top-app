import React from "react";
import styles from "./Heading.module.css";
import { IHeading } from "@/models";
import cn from "classnames";

export const Heading = ({ variant, children, className }: IHeading) => {
  switch (variant) {
    case "h1":
      return <h1 className={cn(styles.h1, className)}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.h2, className)}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.h3, className)}>{children}</h3>;
    default:
      return <></>;
  }
};
