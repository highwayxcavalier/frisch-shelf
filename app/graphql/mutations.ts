import { gql } from '@apollo/client';

const ADD_PRODUCT = gql`
  mutation AddProduct(
    $name: String!
    $quantity: String!
    $storage: String!
    $expiration_date: String!
    $isExpired: Boolean!
    $tags: [String]
  ) {
    addProduct(
      input: {
        name: $name
        quantity: $quantity
        storage: $storage
        expiration_date: $expiration_date
        isExpired: $isExpired
        tags: $tags
      }
    ) {
      id
      name
      expiration_date
      quantity
      storage
      tags
      isExpired
      tags
    }
  }
`;

export const MUTATIONS = {
  ADD_PRODUCT,
};
