import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      tags
      storage
    }
  }
`;

export const QUERIES = {
  GET_PRODUCTS,
};
