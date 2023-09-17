import React, { ForwardedRef, forwardRef } from "react";
import cn from "classnames";
import style from "./Textarea.module.css";
import { ITextarea } from "@/models";

export const Textarea = forwardRef(({
  className,
  error,
  ...props
}: ITextarea, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div className={cn(className, style.textareaWrapper)} >
      <textarea className={cn(style.textarea, {
        [style.error]: error
      })} ref={ref} {...props} />
      {error && <div className={style.errorMessage}>{error.message}</div>}
    </div>
  );
});
