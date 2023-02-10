export interface Recipe {
  label: string;
  image?: string;
  ingredientsLines?: string[];
  ingredients?: [Ingredient];
  url: string;
  source: string;
  calories: number;
  totalTime: number;
  mealType: string[];
  uri: string;
}

interface Ingredient {
  food: string;
  quantity: number;
  measure: string;
}
