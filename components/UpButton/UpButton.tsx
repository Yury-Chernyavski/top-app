"use client";

import React, { useEffect } from "react";
import style from "./UpButton.module.css";
import { useScrollY } from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { SmallButton } from "@/theme/components/SmallButton/SmallButton";

export const UpButton = () => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y > Math.round(document.body.scrollHeight / 5) ? 1 : 0 });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={style.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <SmallButton appearance="primary" icon="up" />
    </motion.div>
  );
};
