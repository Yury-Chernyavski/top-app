import React from "react";
import { getPage } from "@/api/getPage";
import { getProducts } from "@/api/getProducts";
import { getMenu } from "@/api/getMenu";
import { firstLevelMenu } from "@/helpers/helpers";
import { notFound } from "next/navigation";
import { TopLevelCategory } from "@/models/IPage/IPage";
import { TopPageComponent } from "@/components";
import { Metadata } from "next";

interface ITopPage {
  params: {
    type: string,
    alias: string
  },
}

export const generateMetadata = async ({
  params: {
    alias,
    type
  }
}: ITopPage): Promise<Metadata> => {
  const page = await getPage(alias);

  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${type}/${alias}`,
      siteName: "MyTop - The best courses",
      locale: "en_US",
      type: "article"
    }
  };
};

export const generateStaticParams = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const menu = await getMenu(m.id);
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }
  return paths;
};


const TopPage = async ({
  params: {
    alias,
    type
  }
}: ITopPage) => {
  try {
    const page = await getPage(alias);
    const product = await getProducts(page.category);

    return (
      <>
        <TopPageComponent
          firstCategory={TopLevelCategory[type]}
          products={product}
          page={page}
        />
      </>
    );
  } catch (e) {
    return notFound();
  }
};

export default TopPage;
