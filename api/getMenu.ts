import { IMenuItem } from "@/models";
import { TopLevelCategory } from "@/models/IPage/IPage";
import { API } from "@/helpers/api";


export const getMenu = async (firstCategory: TopLevelCategory): Promise<IMenuItem[]> => {
  const requestOptions: RequestInit = {
    method: "POST",
    body: JSON.stringify({
      firstCategory
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await fetch(API.topPage.find, requestOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
