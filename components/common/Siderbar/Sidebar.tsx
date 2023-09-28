import React from "react";
import Logo from "../assets/Logo_OWL.svg";
import style from "./Sidebar.module.css";
import { Menu } from "@/components/common";

import Link from "next/link";
import { Search } from "@/components/Search/Search";


export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Link href="/" aria-label="logo">
        <Logo />
      </Link>
      <Search />
      <Menu />
    </div>
  );
};
