import React from "react";
import style from "./Product.module.css";
import { IProduct } from "@/models";
import { Button, Card, Heading, Rating, Tag, Text } from "@/theme/components";
import Image from "next/image";
import { priceRu } from "@/helpers/helpers";
import { Divider } from "@/theme/components/Divider/Divider";

export const Product = ({ product }: { product: IProduct }) => {
  return (
    <Card className={style.product} color="white">
      <div className={style.logo}>
        <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width="70" height="70" />
      </div>
      <Heading variant="h2" className={style.title}>
        {product.title}
      </Heading>
      <div className={style.price}>
        {priceRu(product.price)}
        {product.oldPrice && <Tag className={style.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={style.credit}>
        {priceRu(product.credit)}/<span className={style.month}>mon.</span>
      </div>
      <div className={style.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={style.tags}>
        {product.categories.map(c => <Tag className={style.category} key={c}>{c}</Tag>)}
      </div>
      <div className={style.priceTitle}>
        price
      </div>
      <div className={style.creditTitle}>
        credit
      </div>
      <div className={style.ratingTitle}>
        {product.reviewCount} review
      </div>
      <Divider className={style.hr}/>
      <div className={style.description}>
        <Text>{product.description}</Text>
      </div>
      <div className={style.features}>
        {product.characteristics.map(c => (
          <div className={style.characteristics} key={c.name}>
            <Text className={style.characteristicsName}>{c.name}</Text>
            <Divider className={style.characteristicsLine}/>
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
      <Divider className={style.hr}/>
      <div className={style.actions}>
        <Button variant="primary">Detail</Button>
        <Button className={style.reviewButton} variant="second" arrow="right">Read reviews</Button>
      </div>
    </Card>
  );
};
