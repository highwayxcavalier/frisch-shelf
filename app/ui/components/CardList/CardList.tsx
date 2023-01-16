import React from 'react';
import { useQuery } from '@apollo/client';
import { FlatList } from 'react-native';
import { ProductCard } from '../Cards/ProductCard';
import { QUERIES } from '@graphql/queries';

const CardList = () => {
  const { GET_PRODUCTS } = QUERIES;
  const { data, error, loading, previousData } = useQuery(GET_PRODUCTS, {
    variables: {},
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return null;
  }

  const result = data.products ?? previousData.products;

  if (error) {
    console.error(error.message);
  }

  return (
    <FlatList
      data={result}
      renderItem={({ item }) => (
        <ProductCard tags={[...item.tags, item.storage]} title={item.name} />
      )}
    />
  );
};

export default CardList;
