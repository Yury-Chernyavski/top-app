import { IPage, TopLevelCategory } from "@/models/IPage/IPage";
import { IProduct } from "@/models";

export interface ITopPageCategory {
  firstCategory: TopLevelCategory;
  page: IPage;
  products: IProduct[];
}
