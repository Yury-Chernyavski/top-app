export enum SortEnum {
  Rating,
  Price
}

export interface ISort {
  sort?: SortEnum;
  setSort?: (sort: SortEnum) => void;
}
