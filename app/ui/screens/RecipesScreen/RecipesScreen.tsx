import PageWrapper from '@ui/components/containers/PageWrapper';
import RecipesList from '@ui/components/RecipesList';
import { RootTabScreenProps } from 'app/navigation/types';
import { Title } from 'react-native-paper';
import { QUERIES } from '@graphql/queries';
import { useQuery } from '@apollo/client';
import { Product } from '../../../types/Product';
import { StyleSheet, Text } from 'react-native';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';

const RecipesScreen = ({
  route,
  navigation,
}: RootTabScreenProps<'Recipes'>) => {
  const { GET_RECIPES, GET_PRODUCTS } = QUERIES;
  const productsQueryResult = useQuery(GET_PRODUCTS);
  const productsExpireSoon = productsQueryResult.data.products.filter(
    (item: Product) => item.tags.includes('expire soon')
  );

  const firstItem = [productsExpireSoon[0]?.name.toLowerCase()];

  const { data, error, loading, previousData } = useQuery(GET_RECIPES, {
    variables: {
      ingredients: firstItem,
    },
  });

  if (loading) {
    return null;
  }

  const result = (data?.recipes ?? previousData?.recipes) || null;

  if (error) {
    console.error(error.message);
  }

  return (
    <PageWrapper>
      <Title>{route.name}</Title>
      {result ? (
        <RecipesList
          data={result}
          onCardOpen={(uri: string) =>
            navigation.navigate('SingleRecipeScreen', {
              uri,
            })
          }
        />
      ) : (
        <Text style={styles.notAvailableText}>No recipes available</Text>
      )}
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  notAvailableText: {
    color: COLORS.WHITE,
    fontSize: TYPOGRAPHY.TITLE_2.FONT_SIZE,
  },
});

export default RecipesScreen;
