import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      tags
      storage
      isExpired
    }
  }
`;

export const QUERIES = {
  GET_PRODUCTS,
};
