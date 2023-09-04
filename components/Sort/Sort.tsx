"use client";
import React from 'react';
import { ISort } from "@/models";
import SortIcon from "./assets/Sort.svg";
import style from "./Sort.module.css";
import { Text } from "@/theme/components";
import { SortEnum } from "@/models/ISort/ISort";
import cn from "classnames";

export const Sort = ({ sort, setSort }: ISort) => {
  return (
    <div className={style.sort}>
      <div
        className={cn(style.sortTrigger,{
          [style.active]: sort === SortEnum.Rating
        })}
        onClick={() => setSort}
      >
        <SortIcon className={style.sortIcon}/>
        <Text variant="m">По рейтингу</Text>
      </div>
      <div
        className={cn(style.sortTrigger, {
          [style.active]: sort === SortEnum.Price
        })}
        onClick={() => setSort}
      >
        <SortIcon className={style.sortIcon}/>
        <Text variant="m">По цене</Text>
      </div>
    </div>
  );
};
