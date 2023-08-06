import React from "react";
import { Text } from "@/theme/components";
import style from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = () => {
  return (
    <footer className={cn(style.footer)}>
      <div className={style.contentWrapper}>
        <Text variant="m">OwlTop © 2020 - {format(new Date(), "yyyy")} All rights Reserved</Text>
        <a
          href="#"
          target="_blank"
        >User agreement</a>
        <a
          href="#"
          target="_blank"
        >Privacy policy</a>
      </div>
    </footer>
  );
};
