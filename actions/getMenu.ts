import { IMenuItem } from "@/models";
import { TopLevelCategory } from "@/models/IPage/IPage";


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
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, requestOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
  // .then(res => res.json())
  // .catch(error => console.error(error));
};
