"use client";

import React, { useState } from "react";
import style from "./ReviewFrom.module.css";
import { Button, Input, Rating, Text, Textarea } from "@/theme/components";
import CloseIcon from "./assets/close.svg";
import { Controller, useForm } from "react-hook-form";
import { IReviewFormData, IReviewFrom } from "@/models";
import { sendReview } from "@/api/sendReview";
import cn from "classnames";


export const ReviewFrom = ({
  productId,
  isOpened
}: IReviewFrom) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewFormData) => {
    try {
      const data = await sendReview(formData, productId);

      if (data) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Something went wrong");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.reviewForm}>
        <Input
          {...register("name", {
            required: {
              value: true,
              message: "The field is required",
            }
          })}
          placeholder="Name"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
        />
        <Input
          {...register("title", {
            required: {
              value: true,
              message: "The field is required",
            }
          })}
          className={style.title}
          placeholder="Review title"
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={style.rating}>
          <Text className={style}>Valuation</Text>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: {
                value: true,
                message: "Provide the rating"
              }
            }}
            render={({
              field: {
                onChange,
                value,
                ref
              },
            }) => (
              <Rating
                isEditable
                rating={value}
                ref={ref}
                setRating={onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {
            required: {
              value: true,
              message: "The field is required",
            }
          })} className={style.description}
          placeholder="Review text"
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={style.submit}>
          <Button
            variant="primary"
            tabIndex={isOpened ? 0 : -1}
          >Send</Button>
          <Text className={style.info}>* Before publication, the review will undergo preliminary
            moderation and verification</Text>
        </div>
      </div>
      {isSuccess && <div className={cn(style.notification, style.success)}>
        <Text className={style.successTitle}>The feedback is send!</Text>
        <Text>Thank you for your feedback</Text>
        <CloseIcon
          className={style.close}
          onClick={() => setIsSuccess(false)}
        />
      </div>}
      {error && <div className={cn(style.notification, style.error)}>
        <Text>Something went wrong!</Text>
        <CloseIcon
          className={style.close}
          onClick={() => setError(undefined)}
        />
      </div>}
    </form>
  );
};
