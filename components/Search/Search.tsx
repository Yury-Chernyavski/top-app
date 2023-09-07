"use client";

import React, { KeyboardEvent, useState } from "react";
import cn from "classnames";
import { Button, Input } from "@/theme/components";
import style from "./Search.module.css";
import SearchIcon from "./assets/Search.svg";
import { useRouter } from "next/navigation";

export const Search = ({ className, ...props }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  // const params = useSearchParams();

  const searchHandler = () => {
    router.push(`/search?${search}`,);
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className={cn(className, style.search)} {...props}>
      <Input
        className={style.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={keyDownHandler}
      />
      <Button variant="primary" className={style.button} onClick={searchHandler}>
        <SearchIcon />
      </Button >
    </div >
  );
};
