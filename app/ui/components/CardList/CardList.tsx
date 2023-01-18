import React from 'react';
import { FlatList } from 'react-native';
import { ProductCard } from '../Cards/ProductCard';

interface Props {
  data: any;
}

const CardList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ProductCard tags={[...item.tags, item.storage]} title={item.name} />
      )}
    />
  );
};

export default CardList;
