import { IPage } from "@/models";
import { API } from "@/helpers/api";

export const getPage = async (alias: string): Promise<IPage> => {
  const res = await fetch( API.topPage.byAlias + alias);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
