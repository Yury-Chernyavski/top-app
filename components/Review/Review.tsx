"use client";

import React from "react";
import { Rating, Text } from "@/theme/components";
import style from "./Review.module.css";
import { IReview } from "@/models";
import UserIcon from "./assets/user.svg";
import { format } from "date-fns";

export const Review = ({
  review
}: IReview) => {
  const {
    name,
    title,
    description,
    rating,
    createdAt
  } = review;
  return (
    <div className={style.review}>
      <UserIcon />
      <div className={style.title}>
        <Text
          variant="s"
          className={style.name}
        >{name}:</Text>
        <Text variant="s">{title}</Text>
      </div>
      <div className={style.date}>
        {format(new Date(createdAt), "dd MMMM yyyy")}
      </div>
      <div className={style.rating}>
        <Rating rating={rating} />
      </div>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};
