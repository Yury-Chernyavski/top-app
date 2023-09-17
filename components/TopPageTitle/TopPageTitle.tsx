"use client";

import React, { ReducerState, useReducer } from "react";
import style from "./TopPageTitle.module.css";
import { Heading, Tag } from "@/theme/components";
import { Product, Sort } from "@/components";
import { ITopPageTitle, SortEnum } from "@/models";
import { sortReducer, SortReducerState } from "@/components/TopPageTitle/sort.reducer";

const TopPageTitle = ({ products, page }: ITopPageTitle) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    sort: SortEnum.Rating,
    products
  } as ReducerState<SortReducerState>);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <section>
      <div className={style.title}>
        <Heading variant="h1">{page.title}</Heading>
        <Tag color="grey" size="m">{products.length}</Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts.map(p => (<Product key={p._id} product={p} />))}
      </div>
    </section>
  );
};

export default TopPageTitle;
