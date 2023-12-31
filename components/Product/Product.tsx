"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Product.module.css";
import { IProduct } from "@/models";
import { Button, Card, Heading, Rating, Tag, Text } from "@/theme/components";
import Image from "next/image";
import { priceRu } from "@/helpers/helpers";
import { Divider } from "@/theme/components/Divider/Divider";
import { Review, ReviewFrom } from "@/components";
import { motion } from "framer-motion";

const Product = ({ product }: { product: IProduct }) => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);
  const reviewRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (isReviewOpened) {
      reviewRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });

      reviewRef.current?.focus();
    }
  }, [isReviewOpened]);

  const variants = {
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5
      }
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  return (
    <>
      <Card
        className={style.product}
      >
        <div className={style.productTitle}>
          <Image
            className={style.logo}
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width="70"
            height="70"
          />
          <Heading
            variant="h2"
            className={style.title}
          >
            {product.title}
          </Heading>
          <div className={style.tags}>
            {product.categories.map(c => <Tag key={c}>{c}</Tag>)}
          </div>
        </div>
        <div className={style.productInfo}>
          <div className={style.price}>
            {priceRu(product.price)}
            {product.oldPrice &&
              <Tag
                className={style.oldPrice}
                color="green"
              >{priceRu(product.price - product.oldPrice)}</Tag>}
          </div>
          <div className={style.credit}>
            {priceRu(product.credit)}/<span className={style.month}>mon.</span>
          </div>
          <div className={style.rating}>
            <Rating rating={product.reviewAvg ?? product.initialRating} />
          </div>
          <Text className={style.priceTitle}>price</Text>
          <Text className={style.creditTitle}>credit</Text>
          <Text className={style.ratingTitle}>
            <a
              href="#reviews"
              onClick={() => setIsReviewOpened(true)}
            >
              {product.reviewCount} review
            </a>
          </Text>
        </div>
        <Divider className={style.hr} />
        <div className={style.description}>
          <Text>{product.description}</Text>
        </div>
        <div className={style.features}>
          {product.characteristics.map(c => (
            <div
              className={style.characteristics}
              key={c.name}
            >
              <Text className={style.characteristicsName}>{c.name}</Text>
              <Divider className={style.characteristicsLine} />
              <Text className={style.characteristicsValue}>{c.value}</Text>
            </div>
          ))}
        </div>
        <div className={style.advWrapper}>
          {product.advantages &&
            <div className={style.advantages}>
              <Text className={style.advTitle}>Advantages</Text>
              {product.advantages}
            </div>
          }
          {product.disadvantages &&
            <div className={style.disadvantages}>
              <Text className={style.advTitle}>Disadvantages</Text>
              {product.disadvantages}
            </div>
          }
        </div>
        <Divider className={style.hr} />
        <div className={style.actions}>
          <Button variant="primary">Detail</Button>
          <Button
            className={style.reviewButton}
            variant="second"
            arrow={isReviewOpened ? "down" : "right"}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >Read reviews</Button>
        </div>
      </Card>
      <motion.div
        layout
        variants={variants}
        initial="hidden"
        animate={isReviewOpened ? "visible" : "hidden"}
        className={style.reviewsWrapper}
      >
        <Card
          color="grey"
          className={style.reviews}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map(r => (
            <div key={r._id}>
              <Review review={r} />
              <Divider />
            </div>
          ))}
          <ReviewFrom
            productId={product._id}
            isOpened={isReviewOpened}
          />
        </Card>
      </motion.div>
    </>
  );
};


export default Product;
