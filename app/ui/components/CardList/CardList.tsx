import { Product } from '../../../types/Product';
import React from 'react';
import { FlatList } from 'react-native';
import { ProductCard } from '../Cards/ProductCard';

interface Props {
  data: Product[];
}

const CardList = ({ data }: Props) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      renderItem={({ item }) => (
        <ProductCard
          tags={[...item.tags, item.storage]}
          title={item.name}
          quantity={item.quantity}
          expirationDate={item.expiration_date}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CardList;
