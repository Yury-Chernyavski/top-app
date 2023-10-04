import { IPage } from "@/models";
import { API } from "@/helpers/api";

export const getPage = async (alias: string): Promise<IPage> => {
  const res = await fetch( API.topPage.byAlias + alias);
  return res.json();
};
