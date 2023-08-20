import React from "react";
import { getPage } from "@/actions/getPage";
import { getProducts } from "@/actions/getProducts";
import { getMenu } from "@/actions/getMenu";
import { firstLevelMenu } from "@/helpers/helpers";
import { notFound } from "next/navigation";

interface ICourse {
  params: {
    type: string,
    alias: string
  },
}

export const generateStaticParams = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const menu = await getMenu(m.id);
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }
  // console.log(paths);
  return paths;
};


const Course = async ({ params: { alias, type } }: ICourse) => {

  try {
    const page = await getPage(alias);
    const product = await getProducts(page.category);

    return (
      <div>
        {type}:
        {product.length}
      </div>
    );
  } catch {
    return notFound();
  }
};

export default Course;
