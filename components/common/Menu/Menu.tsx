"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { IFirstLevelMenuItem, PageItem } from "@/models/IMenu/IMenuItem";
import { TopLevelCategory } from "@/models/IPage/IPage";
import style from "./Menu.module.css";
import cn from "classnames";
import { useParams } from "next/navigation";
import { MenuContext } from "@/context/menu/menuContext";
import { firstLevelMenu } from "@/helpers/helpers";


export const Menu = () => {
  const { menu, firstCategory, setMenu } = useContext(MenuContext);
  const params = useParams();

  const openSecondLevel = (secondCategory: string) => {
    setMenu?.(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.id}>
            <Link href={`/${m.route}`}>
              <div className={cn(style.firstLevel, {
                [style.firstLevelActive]: m.id === firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === TopLevelCategory.Courses && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
    return (
      <div className={style.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(params.alias)) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={style.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                <p>{m._id.secondCategory}</p>
              </div>
              <div className={cn(style.secondLevelBlock, {
                [style.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <Link key={p._id} href={`/${route}/${p.alias}`} className={cn(style.thirdLevel, {
          [style.thirdLevelActive]: `${p.alias}` === params.alias
        })}>
          {p.category}
        </Link>
      ))
    );
  };

  return (
    <div className={style.menu}>
      {buildFirstLevel()}
    </div>
  );
};
