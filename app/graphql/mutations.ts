import { gql } from '@apollo/client';

const ADD_PRODUCT = gql`
  mutation AddProduct(
    $name: String!
    $quantity: String!
    $storage: String!
    $expiration_date: String!
  ) {
    addProduct(
      input: {
        name: $name
        quantity: $quantity
        storage: $storage
        expiration_date: $expiration_date
      }
    ) {
      id
      name
      expiration_date
      quantity
      storage
      tags
      created_at
    }
  }
`;

export const MUTATIONS = {
  ADD_PRODUCT,
};
