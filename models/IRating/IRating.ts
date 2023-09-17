import { FieldError } from "react-hook-form";

export interface IRating {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void
  error?: FieldError
}
