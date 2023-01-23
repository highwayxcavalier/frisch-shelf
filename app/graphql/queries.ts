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
    foodData(barcode: $$barcode) {
      name
      imageUrl
    }
  }
`;

export const QUERIES = {
  GET_PRODUCTS,
  GET_FOOD_DATA,
};
