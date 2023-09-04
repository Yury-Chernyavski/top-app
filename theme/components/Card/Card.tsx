import React from 'react';
import { ICard } from "@/models";
import style from "./Card.module.css";
import cn from "classnames";

export const Card = ({ color = "white", children, className }: ICard) => {
  return (
    <div className={cn(style.card, className, {
      [style.grey]: color === "grey"
    })}>
      {children}
    </div>
  );
};

