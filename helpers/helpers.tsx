import { IFirstLevelMenuItem } from "@/models/IMenu/IMenuItem";
import CoursesIcon from "@/helpers/assets/courses.svg";
import { TopLevelCategory } from "@/models/IPage/IPage";
import ServicesIcon from "@/helpers/assets/services.svg";
import BooksIcon from "@/helpers/assets/books.svg";
import ProductIcon from "@/helpers/assets/products.svg";
import React from "react";


export const firstLevelMenu: IFirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
  { route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services },
  { route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books },
  { route: "products", name: "Продукты", icon: <ProductIcon/>, id: TopLevelCategory.Products }
];
