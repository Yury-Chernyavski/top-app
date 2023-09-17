import React, { ForwardedRef, forwardRef } from "react";
import cn from "classnames";
import style from "./Input.module.css";
import { IInput } from "@/models";

export const Input = forwardRef(({
  className,
  error,
  ...props
}: IInput, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={cn(className, style.inputWrapper)}>
      <input className={cn(style.input, {
        [style.error]: error
      })} ref={ref} {...props} />
      {error && <div className={style.errorMessage}>{error.message}</div>}
    </div>
  );
});
