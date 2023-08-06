import { IPage } from "@/models";

export const getPage = async (alias: string): Promise<IPage> => {

  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`)
    .then(res => res.json())
    .catch(error => console.error(error));
};
