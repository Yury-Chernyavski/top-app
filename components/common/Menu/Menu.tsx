"use client";

import React, { KeyboardEvent, useContext } from "react";
import Link from "next/link";
import { IFirstLevelMenuItem, PageItem } from "@/models/IMenu/IMenuItem";
import { TopLevelCategory } from "@/models/IPage/IPage";
import style from "./Menu.module.css";
import cn from "classnames";
import { useParams } from "next/navigation";
import { IMenuContext, MenuContext } from "@/context/menu/menuContext";
import { firstLevelMenu } from "@/helpers/helpers";
import { motion } from "framer-motion";


export const Menu = () => {
  const {
    menu,
    firstCategory,
    setMenu
  } = useContext<IMenuContext>(MenuContext);
  const params = useParams();

  const variants = {
    visible: {
      margin: "5px 0 20px 5px",
      height: "auto",
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.03,
      }
    },
    hidden: {
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.01
      },
      height: 0,
      margin: 0
    }
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: "100%",
    },
    hidden: {
      opacity: 0,
      height: "0%",
    }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu?.(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const openSecondLevelKey = (event: KeyboardEvent<HTMLDivElement>, secondCategory: string) => {
    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.id}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(style.firstLevel, {
                  [style.firstLevelActive]: m.id === firstCategory
                })}
              >
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
              <div
                tabIndex={0}
                onKeyDown={(e) => openSecondLevelKey(e, m._id.secondCategory)}
                className={style.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                <p>{m._id.secondCategory}</p>
              </div>
              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(style.secondLevelBlock)}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.div
          key={p._id}
          variants={variantsChildren}
        >
          <Link
            tabIndex={isOpened ? 0 : -1}
            href={`/${route}/${p.alias}`}
            className={cn(style.thirdLevel, {
              [style.thirdLevelActive]: `${p.alias}` === params.alias
            })}
          >
            {p.category}
          </Link>
        </motion.div>
      ))
    );
  };

  return (
    <div className={style.menu}>
      {buildFirstLevel()}
    </div>
  );
};
