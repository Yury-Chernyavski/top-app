"use client";

import React from "react";
import { ISort, SortEnum } from "@/models";
import SortIcon from "./assets/Sort.svg";
import style from "./Sort.module.css";
import cn from "classnames";

export const Sort = ({
  sort,
  setSort
}: ISort) => {
  return (
    <div className={style.sort}>
      <button
        className={cn(style.sortTrigger, {
          [style.active]: sort === SortEnum.Rating
        })}
        onClick={() => setSort(SortEnum.Rating)}
        aria-pressed={sort === SortEnum.Rating}
      >
        <SortIcon className={style.sortIcon} />
        По рейтингу
      </button>
      <button
        className={cn(style.sortTrigger, {
          [style.active]: sort === SortEnum.Price
        })}
        onClick={() => setSort(SortEnum.Price)}
        aria-pressed={sort === SortEnum.Rating}
      >
        <SortIcon className={style.sortIcon} />
        По цене
      </button>
    </div>
  );
};
