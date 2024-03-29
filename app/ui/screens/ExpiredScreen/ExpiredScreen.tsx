import { useQuery } from '@apollo/client';
import { QUERIES } from '@graphql/queries';
import { Product } from '../../../types/Product';
import { CardList } from '@ui/components/CardList';
import PageWrapper from '@ui/components/containers/PageWrapper';
import { RootTabScreenProps } from '../../../navigation/types';
import Title from '@ui/components/Title';

const ExpiredScreen = ({ route }: RootTabScreenProps<'Expired'>) => {
  const { GET_PRODUCTS } = QUERIES;
  const { data, error, loading, previousData } = useQuery(GET_PRODUCTS, {
    variables: {},
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return null;
  }

  const result =
    data.products.filter((product: Product) => product.isExpired) ??
    previousData.products.filter((product: Product) => product.isExpired);

  if (error) {
    console.error(error.message);
  }

  return (
    <PageWrapper>
      <Title>{route.name}</Title>
      <CardList data={{ products: result }} />
    </PageWrapper>
  );
};

export default ExpiredScreen;
