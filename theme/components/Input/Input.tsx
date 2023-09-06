import React from 'react';
import cn from "classnames";
import style from "./Input.module.css";
import { IInput } from "@/models";

export const Input = ({className, ...props}: IInput) => {
  return (
    <input className={cn(className, style.input)} {...props}/>
  );
};
