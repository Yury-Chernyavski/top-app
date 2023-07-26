import React from "react";
import styles from "./Heading.module.css";
import { IHeading } from "@/models";

export const Heading = ({ variant, children }: IHeading) => {
  switch (variant) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};
