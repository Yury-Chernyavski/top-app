import React from "react";
import parse from "html-react-parser";
import { AdvantagesData, SkillsData, TopPageTitle, VacanciesData } from "@/components";
import { Heading, Tag } from "@/theme/components";
import style from "./TopPageComponent.module.css";
import { ITopPageCategory } from "@/models";

export const TopPageComponent = ({
  page,
  products
}: ITopPageCategory) => {
  return (
    <>
      <TopPageTitle page={page} products={products} />
      <section>
        <div className={style.hhTitle}>
          <Heading variant="h2">Job openings - {page.category}</Heading>
          <Tag color="red" size="m">hh.ru</Tag>
        </div>
        <VacanciesData {...page.hh} />
      </section>
      {page.advantages && page.advantages?.length > 0 && (
        <section>
          <Heading variant="h2">Advantages</Heading>
          <AdvantagesData advantages={page.advantages} />
        </section>
      )}
      <section>
        {page.seoText && parse(`<div class="${style.seoWrapper}">${page.seoText}<div>`)}
      </section>
      <section>
        <Heading variant="h2">Acquired skills</Heading>
        <SkillsData tags={page.tags} />
      </section>
    </>
  );
};
