import React from 'react';
import { IHhData } from "@/models/IPage/IPage";
import style from "./VacanciesData.module.css";
import { Card } from "@/theme/components";
import RateIcon from "./assets/rate.svg";
import { priceRu } from "@/helpers/helpers";

export const VacanciesData = ({ count, juniorSalary, middleSalary, seniorSalary }: IHhData) => {
  return (
    <div className={style.contentWrapper}>
      <Card className={style.count}>
        <p className={style.title}>Всего вакансий</p>
        <p className={style.countValue}>{count}</p>
      </Card>
      <Card className={style.salary}>
        <div>
          <p className={style.title}>Начальный</p>
          <p className={style.salaryValue}>{priceRu(juniorSalary)}</p>
          <div className={style.rate}>
            <RateIcon className={style.filled}/>
            <RateIcon/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <p className={style.title}>Средний</p>
          <p className={style.salaryValue}>{priceRu(middleSalary)}</p>
          <div className={style.rate}>
            <RateIcon className={style.filled}/>
            <RateIcon className={style.filled}/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <p className={style.title}>Проффесионал</p>
          <p className={style.salaryValue}>{priceRu(seniorSalary)}</p>
          <div className={style.rate}>
            <RateIcon className={style.filled}/>
            <RateIcon className={style.filled}/>
            <RateIcon className={style.filled}/>
          </div>
        </div>
      </Card>
    </div>
  );
};
