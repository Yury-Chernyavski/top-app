"use client";
import { createContext, PropsWithChildren, useState } from "react";
import { IMenuItem } from "@/models";
import { TopLevelCategory } from "@/models/IPage/IPage";

interface IMenuContext {
  menu: IMenuItem[],
  firstCategory: TopLevelCategory,
  setMenu?: (newMenu: IMenuItem[]) => void
}

export const MenuContext = createContext<IMenuContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});


export const MenuContextProvider = ({
  menu,
  firstCategory,
  children
}: PropsWithChildren<IMenuContext>) => {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menu);

  const setMenu = (newMenu: IMenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <MenuContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
