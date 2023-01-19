import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ProductCard } from '../Cards/ProductCard';

interface Props {
  data: any;
}

const CardList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ProductCard
          tags={[...item.tags, item.storage]}
          title={item.name}
          quantity={item.quantity}
          expirationDate={item.expiration_date}
        />
      )}
    />
  );
};

export default CardList;
