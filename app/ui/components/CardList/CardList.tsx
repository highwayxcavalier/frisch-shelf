import { Product, ProductData } from '../../../types/Product';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { ProductCard } from '../Cards/ProductCard';
import { useApolloClient } from '@apollo/client';
import { QUERIES } from '@graphql/queries';
interface Props {
  data: ProductData;
}

const CardList = ({ data }: Props) => {
  const client = useApolloClient();
  const { GET_PRODUCTS } = QUERIES;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    try {
      await client.refetchQueries({
        include: [GET_PRODUCTS],
      });
    } catch (error) {
      console.error(error);
    }
    setIsRefreshing(false);
  };

  return (
    <>
      {isRefreshing ? <ActivityIndicator /> : null}
      <FlatList
        style={{ flex: 1 }}
        data={data.products}
        renderItem={({ item }) => (
          <ProductCard
            tags={[...item.tags, item.storage]}
            title={item.name}
            quantity={item.quantity}
            expirationDate={item.expiration_date}
          />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
    </>
  );
};

export default CardList;
