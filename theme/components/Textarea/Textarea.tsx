import React from 'react';
import cn from "classnames";
import style from "./Textarea.module.css";
import { ITextarea } from "@/models";

export const Textarea = ({ className, ...props }: ITextarea) => {
  return (
    <textarea className={cn(className, style.textarea)} {...props}/>
  );
};
