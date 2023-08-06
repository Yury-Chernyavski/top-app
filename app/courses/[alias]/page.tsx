import React from "react";
import { getPage } from "@/actions/getPage";
import { getProducts } from "@/actions/getProducts";
import { getMenu } from "@/actions/getMenu";
import { IMenuItem } from "@/models";

interface Params {
  params: {
    alias: string,
  };
}

export const generateStaticParams = async (): Promise<{ alias: string }[]> => {
  const menu: IMenuItem[] = await getMenu();

  return menu.flatMap(m => m.pages.map(p => ({
    alias: `${p.alias}`
  })));
};


const Course = async ({ params: { alias }}: Params) => {
  const page = await getPage(alias);
  const product = await getProducts(page.category);

  return (
    <div>
      {product.length}
    </div>
  );
};

export default Course;
