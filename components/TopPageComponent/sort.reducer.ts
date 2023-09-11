import { IProduct, SortEnum } from "@/models";

export type SortActions = { type: SortEnum } | { type: SortEnum.Rating };

export interface SortReducerState {
  sort: SortEnum;
  products: IProduct[];
}

export function sortReducer(state: SortReducerState, action: SortActions): SortReducerState {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating - b.initialRating)
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => a.price - b.price)
      };
    default:
      throw new Error("Invalid sorting type!");
  }
}
