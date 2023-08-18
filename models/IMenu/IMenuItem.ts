import React from "react";
import { TopLevelCategory } from "@/models/IPage/IPage";

export interface PageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface IMenuItem {
  _id: {
    secondCategory: string
  },
  isOpened?: boolean,
  pages: PageItem[]
}

export interface IHome {
  menu: IMenuItem[],
  firstCategory: number
}

export interface IFirstLevelMenuItem {
  route: string,
  name: string,
  icon: React.JSX.Element,
  id: TopLevelCategory
}
