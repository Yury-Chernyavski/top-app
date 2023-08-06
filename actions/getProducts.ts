import { IProduct } from "@/models";

export const getProducts = async (category: string): Promise<IProduct[]> => {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
    method: "POST",
    body: JSON.stringify({
      category: category,
      limit: 10,
    }),
    headers: {
      "Content-type": "application/json"
    },
  })
    .then(product => product.json())
    .catch(error => console.error(error));
};
