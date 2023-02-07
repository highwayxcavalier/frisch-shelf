import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      tags
      storage
      isExpired
      expiration_date
      quantity
    }
  }
`;

const GET_FOOD_DATA = gql`
  query GetFoodData($barcode: String!) {
    foodData(barcode: $barcode) {
      name
      imageUrl
    }
  }
`;

const GET_RECIPES = gql`
  query GetRecipes($ingredients: [String!]) {
    recipes(ingredients: $ingredients) {
      label
      image
      ingredientsLines
      ingredients {
        food
        quantity
        measure
      }
      url
      source
      calories
      totalTime
      mealType
    }
  }
`;

export const QUERIES = {
  GET_PRODUCTS,
  GET_FOOD_DATA,
  GET_RECIPES,
};
