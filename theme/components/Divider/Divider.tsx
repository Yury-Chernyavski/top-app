import React from "react";
import cn from "classnames";
import style from "./Divider.module.css";

export const Divider = ({className, ...props}) => {
  return (
    <hr className={cn(className, style.hr)} {...props}/>
  );
};
