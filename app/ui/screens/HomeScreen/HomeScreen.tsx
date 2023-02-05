import React from 'react';
import { useQuery } from '@apollo/client';
import { Header } from '@ui/components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CardList } from '@ui/components/CardList';
import { QUERIES } from '@graphql/queries';
import { ExpirationTagsEnum } from '@utils/storageTags';
import { ChipType } from '../../../types/Chips';
import PageWrapper from '@ui/components/containers/PageWrapper';
import { Title } from 'react-native-paper';
import { RootTabScreenProps } from 'app/navigation/types';

const HomeScreen = ({ route }: RootTabScreenProps<'Home'>) => {
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
        <PageWrapper>
          <Title>{route.name}</Title>
          <CardList data={result} />
        </PageWrapper>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
