"use client";
import React, { KeyboardEvent, useEffect, useState } from "react";
import { IRating } from "@/models";
import StarIcon from "./assets/Vector.svg";
import cn from "classnames";
import style from "./Rating.module.css";

export const Rating = ({ isEditable = false, rating, setRating }: IRating) => {
  const [ratingArray, setRatingArray] = useState<React.JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((elem, i) => {
      return (
        <StarIcon
          key={i}
          className={
            cn(style.star, {
              [style.field]: i < currentRating,
              [style.editable]: isEditable
            })
          }
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleEnter(i + 1, e)}

        />
      );
    });

    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (isEditable) {
      constructRating(i);
    }
  };

  const changeRating = (i: number) => {
    if (isEditable && setRating) {
      setRating(i);
    }
  };

  const handleEnter = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code === "Enter" && setRating) setRating(i);
  };


  return (
    <div>
      {ratingArray.map((star, i) => <span
        key={i}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => changeRating(i + 1)}
      >{star}</span>)}
    </div>
  );
};
