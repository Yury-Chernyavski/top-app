"use client";

import React, { KeyboardEvent, useState } from "react";
import cn from "classnames";
import { Button, Input } from "@/theme/components";
import style from "./Search.module.css";
import SearchIcon from "./assets/Search.svg";
import { useRouter } from "next/navigation";

export const Search = ({
  className,
  ...props
}) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchHandler = () => {
    if (search.length !== 0) router.push(`/search?${search}`);
    setSearch("");
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <form className={cn(className, style.search)} {...props}>
      <Input
        className={style.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={keyDownHandler}
      />
      <Button
        className={style.searchButton}
        variant="primary"
        onClick={searchHandler}
        aria-label="Search"
      >
        <SearchIcon />
      </Button>
      {/*{emptyField || <div className={style.error}>Enter necessary tech</div>}*/}
    </form>
  );
};
