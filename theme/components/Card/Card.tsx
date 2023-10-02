import React, { ForwardedRef, forwardRef } from "react";
import { ICard } from "@/models";
import style from "./Card.module.css";
import cn from "classnames";


export const Card = forwardRef(({
  color = "white",
  children,
  className,
  tabIndex
}: ICard, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className={cn(style.card, className, {
        [style.grey]: color === "grey",
        [style.white]: color === "white"
      })}
      tabIndex={tabIndex}
      ref={ref}
    >
      {children}
    </div>
  );
});

