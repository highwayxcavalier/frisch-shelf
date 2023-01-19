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

export const QUERIES = {
  GET_PRODUCTS,
};
