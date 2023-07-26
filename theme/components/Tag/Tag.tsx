import React from "react";
import { ITag } from "@/models";
import cn from "classnames";
import style from "./Tag.module.css";

export const Tag = ({ size = "m", children, color = "none", href, className}: ITag) => {
  return (
    <div
      className={cn(style.tag, className, {
        [style.s]: size === "s",
        [style.m]: size === "m",
        [style.none]: color === "none",
        [style.red]: color === "red",
        [style.grey]: color === "grey",
        [style.green]: color === "green",
        [style.primary]: color === "primary",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
