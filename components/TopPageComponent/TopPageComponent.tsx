import React from 'react';
import parse from "html-react-parser";
import { Heading, Tag } from "@/theme/components";
import { ITopPageCategory } from "@/models/ITopPageCategory/ITopPageCategory";
import style from "./TopPageComponent.module.css";
import { AdvantagesData, SkillsData, Sort, VacanciesData } from "@/components";

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageCategory) => {
  return (
    <>
      <section>
        <div className={style.title}>
          <Heading variant="h1">{page.title}</Heading>
          <Tag color="grey" size="m">{products.length}</Tag>
          <Sort/>
        </div>
        <div>
          {products.map(p => (<div key={p._id}>{p.title}</div>))}
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
