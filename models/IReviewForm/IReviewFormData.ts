export interface IReviewFormData {
  name: string;
  title: string;
  rating: number;
  description: string;
}

export interface IReviewSentResponse {
  message: string;
}

export interface IReviewFrom {
  productId: string;
  isOpened: boolean;
}
