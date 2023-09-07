"use client";

import React, { ReducerState, useReducer } from 'react';
import parse from "html-react-parser";
import { AdvantagesData, SkillsData, Sort, VacanciesData } from "@/components";
import { Heading, Tag } from "@/theme/components";
import { ITopPageCategory } from "@/models/ITopPageCategory/ITopPageCategory";
import style from "./TopPageComponent.module.css";
import { sortReducer, SortReducerState } from "@/components/TopPageComponent/sort.reducer";
import { SortEnum } from "@/models";


const TopPageComponent = ({ page, products, firstCategory }: ITopPageCategory) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    sort: SortEnum.Rating,
    products
  } as ReducerState<SortReducerState>);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <>
      <section>
        <div className={style.title}>
          <Heading variant="h1">{page.title}</Heading>
          <Tag color="grey" size="m">{products.length}</Tag>
          <Sort sort={sort} setSort={setSort}/>
        </div>
        <div>
          {sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
        </div>
      </section>
      <section>
        <div className={style.hhTitle}>
          <Heading variant="h2">Вакансии - {page.category}</Heading>
          <Tag color="red" size="m">hh.ru</Tag>
        </div>
        <VacanciesData {...page.hh}/>
      </section>
      {page.advantages && page.advantages?.length > 0 && (
        <section>
          <Heading variant="h2">Преимущества</Heading>
          <AdvantagesData advantages={page.advantages}/>
        </section>
      )}
      <section>
        {parse(`<div class=${style.seoWrapper}>${page.seoText}<div>`)}
      </section>
      <section>
        <Heading variant="h2">Получаемые навыки</Heading>
        <SkillsData tags={page.tags}/>
      </section>
    </>
  );
};

export default TopPageComponent;
