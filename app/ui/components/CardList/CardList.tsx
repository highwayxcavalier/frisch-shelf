import React from 'react';
import { uniqueId } from 'lodash-es';
import { View, StyleSheet, FlatList } from 'react-native';
import { ProductCard } from '../Cards/ProductCard';

const DATA = [
  { id: uniqueId('card') },
  { id: uniqueId('card') },
  { id: uniqueId('card') },
];

const tags = [{ text: 'Expired' }, { text: 'Expire soon' }, { text: 'Fridge' }];

const CardList = () => {
  console.log('HERE');
  return (
    <FlatList data={DATA} renderItem={() => <ProductCard tags={tags} />} />
  );
};

export default CardList;
