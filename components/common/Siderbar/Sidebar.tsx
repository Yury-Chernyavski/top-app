import React from "react";
import { Menu } from "@/components/common/Menu/Menu";
import Logo from "../assets/Logo_OWL.svg";
import style from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Logo className={style.logo}/>
      <div>Search</div>
      <Menu/>
    </aside>
  );
};
