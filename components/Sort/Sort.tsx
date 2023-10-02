"use client";

import React from "react";
import { ISort, SortEnum } from "@/models";
import SortIcon from "./assets/Sort.svg";
import style from "./Sort.module.css";
import { Text } from "@/theme/components";
import cn from "classnames";

export const Sort = ({ sort, setSort }: ISort) => {

  const handleKey = (e: KeyboardEvent<HTMLDivElement>, sortName: SortEnum) => {
    if (e.code === "Enter") {
      setSort(sortName);
    }
  };


  return (
    <div className={style.sort}>
      <button
        className={cn(style.sortTrigger, {
          [style.active]: sort === SortEnum.Rating
        })}
        onClick={() => setSort(SortEnum.Rating)}
        aria-selected={sort === SortEnum.Rating}
      >
        <SortIcon className={style.sortIcon} />
        По рейтингу
      </button>
      <button
        className={cn(style.sortTrigger, {
          [style.active]: sort === SortEnum.Price
        })}
        onClick={() => setSort(SortEnum.Price)}
        aria-selected={sort === SortEnum.Rating}
      >
        <SortIcon className={style.sortIcon} />
        По цене
      </button>
    </div>
  );
};
