import React from 'react';
import Mark from "./assets/Mark.svg";
import style from "./AdvantagesData.module.css";
import { Heading } from "@/theme/components";
import { IAdvantage } from "@/models/IPage/IPage";

export const AdvantagesData = ({ advantages }: { advantages: IAdvantage[] }) => (
  advantages.map(a => (
    <div key={a._id}>
      <div className={style.advantageTitle}>
        <Mark/>
        <Heading variant="h3">{a.title}</Heading>
      </div>
      <div className={style.descriptionWrapper}>
        <p>{a.description}</p>
      </div>
    </div>
  ))
);
