export interface IRating {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void
}
