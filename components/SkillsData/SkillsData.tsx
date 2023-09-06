import React from 'react';
import { IPage, TSkillsData } from "@/models";
import { Tag } from "@/theme/components";
import style from "./SkillsData.module.css";

export const SkillsData = ({ tags }: TSkillsData<IPage, "tags">) => {
  return (
    <div className={style.tagsWrapper}>
      {tags.map(t => (
        <Tag className={style.tags} key={t} size="s" color="primary">{t}</Tag>
      ))}
    </div>
  );
};
