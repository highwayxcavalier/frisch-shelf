import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts($isExpiringSoon: Boolean) {
    products(isExpiringSoon: $isExpiringSoon) {
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
  query GetRecipes($ingredients: [String!]!) {
    recipes(ingredients: $ingredients) {
      uri
      label
      image
      ingredientLines
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
      yield
    }
  }
`;

const GET_RECIPE = gql`
  query GetRecipe($uri: String!) {
    recipe(uri: $uri) {
      uri
      label
      image
      ingredientLines
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
      yield
    }
  }
`;

export const QUERIES = {
  GET_PRODUCTS,
  GET_FOOD_DATA,
  GET_RECIPES,
  GET_RECIPE,
};
