import React from "react";
import Logo from "../assets/Logo_OWL.svg";
import style from "./Sidebar.module.css";
import { Menu } from "@/components/common";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Link href="/">
        <Logo className={style.logo}/>
      </Link>
      <div>Search</div>
      <Menu/>
    </aside>
  );
};
