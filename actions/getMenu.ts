import { IMenuItem } from "@/models";


export const getMenu = async (): Promise<IMenuItem[]> => {
  const firstCategory = 0;
  const requestOptions: RequestInit = {
    method: "POST",
    body: JSON.stringify({
      firstCategory
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
  return await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, requestOptions)
    .then(res => res.json())
    .catch(error => console.error(error));
};
