import React from 'react';
import { useQuery } from '@apollo/client';
import { Text, StyleSheet, View } from 'react-native';
import COLORS from '@ui/theme/color';
import { Header } from '@ui/components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CardList } from '@ui/components/CardList';
import { QUERIES } from '@graphql/queries';
import { Footer } from '@ui/components/Footer';
import { ExpirationTagsEnum } from '@utils/storageTags';
import { ChipType } from '../../../types/Chips';

const HomeScreen = () => {
  const { GET_PRODUCTS } = QUERIES;
  const { data, error, loading, previousData } = useQuery(GET_PRODUCTS, {
    variables: {},
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return null;
  }

  const result = data.products ?? previousData.products;

  // Remove expire soon tags id the item has expired
  result.forEach((item: any) => {
    if (
      item.tags.includes(ExpirationTagsEnum.EXPIRE_SOON) &&
      item.tags.includes(ExpirationTagsEnum.EXPIRED)
    )
      item.tags.filter(
        (tag: ChipType) => tag !== ExpirationTagsEnum.EXPIRE_SOON
      );
  });

  if (error) {
    console.error(error.message);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <View style={styles.container}>
          <Text>Hello World</Text>
          <CardList data={result} />
        </View>
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.GRAY_1000,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
