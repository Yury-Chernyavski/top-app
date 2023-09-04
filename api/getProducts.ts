import { IProduct } from "@/models";

export const getProducts = async (category: string): Promise<IProduct[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
    method: "POST",
    body: JSON.stringify({
      category: category,
      limit: 10,
    }),
    headers: {
      "Content-type": "application/json"
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
