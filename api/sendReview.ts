import { IReviewFormData, IReviewSentResponse } from "@/models";
import { API } from "@/helpers/api";

export const sendReview = async (formData: IReviewFormData, productId: string): Promise<IReviewSentResponse> => {
  const requestOptions: RequestInit = {
    method: "POST",
    body: JSON.stringify({
      ...formData,
      productId
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await fetch(API.review.createDemo, requestOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
