import React from "react";
import Logo from "../assets/Logo_OWL.svg";
import style from "./Sidebar.module.css";
import { Menu } from "@/components/common";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Logo className={style.logo}/>
      <div>Search</div>
      <Menu/>
    </aside>
  );
};
