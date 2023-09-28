"use client";

import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import cn from "classnames";
import Logo from "../assets/Logo_OWL.svg";
import { SmallButton } from "@/theme/components/SmallButton/SmallButton";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/common";
import { usePathname } from "next/navigation";

const Header = (className) => {
  const [isOpened, setIsOpened] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%"
    }
  };

  return (
    <div className={cn(style.header, className)}>
      <Logo />
      <SmallButton
        appearance="second"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={style.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <SmallButton
          className={style.menuClose}
          appearance="second"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </div>
  );
};


export default Header;
