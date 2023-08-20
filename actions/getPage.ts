import { IPage } from "@/models";

export const getPage = async (alias: string): Promise<IPage> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
