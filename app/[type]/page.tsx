import React from 'react';
import { firstLevelMenu } from "@/helpers/helpers";
import { notFound } from "next/navigation";

interface IType {
  params: {
    type: string
  }
}

export const generateStaticParams = async () => {
  return firstLevelMenu.map(m => `${m.route}`);
};

const TypeCategory = ({ params: { type }}: IType) => {
  const firstCategoryItem = firstLevelMenu.find(m => m.route === type);
  if (!type || !firstCategoryItem) notFound();


  return (
    <div>
      Type: {type}
    </div>
  );
};

export default TypeCategory;
