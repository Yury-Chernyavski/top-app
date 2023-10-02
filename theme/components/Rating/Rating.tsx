"use client";

import React, { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useRef, useState } from "react";
import { IRating } from "@/models";
import StarIcon from "./assets/Vector.svg";
import cn from "classnames";
import style from "./Rating.module.css";

export const Rating = forwardRef(({
  isEditable = false,
  rating,
  setRating,
  error,
  tabIndex
}: IRating, ref: ForwardedRef<HTMLDivElement>) => {
  const [ratingArray, setRatingArray] = useState<React.JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) return -1;
    if (!rating && i === 0) return tabIndex ?? 0;
    if (r === i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

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

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) return;

    if (e.code === "ArrowRight" || e.code === "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };


  return (
    <div
      ref={ref}
      className={cn(style.ratingWrapper, {
        [style.error]: error
      })}
    >
      {ratingArray.map((star, i) => (
        <span
          className={style.starWrapper}
          key={i}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(i + 1)}
          tabIndex={computeFocus(rating, i)}
          onKeyDown={handleKey}
          ref={r => ratingArrayRef.current.push(r)}
        >
        {star}
      </span>))}
      {error && <div className={style.errorMessage}>{error.message}</div>}
    </div>
  );
});
