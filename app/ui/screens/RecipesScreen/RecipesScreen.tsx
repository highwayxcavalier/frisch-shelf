import PageWrapper from '@ui/components/containers/PageWrapper';
import RecipesList from '@ui/components/RecipesList';
import { RootTabScreenProps } from 'app/navigation/types';
import { Title } from 'react-native-paper';
import { QUERIES } from '@graphql/queries';
import { useQuery } from '@apollo/client';
import { Product } from '../../../types/Product';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';

const createPickerItems = (items: Product[]) => {
  const pickerItems: any[] = [];

  items.forEach((item) =>
    pickerItems.push({
      label: item.name.toLowerCase(),
      value: item.name.toLowerCase(),
    })
  );

  return pickerItems;
};

const RecipesScreen = ({
  route,
  navigation,
}: RootTabScreenProps<'Recipes'>) => {
  const [value, setValue] = useState<string[] | null>(null);
  const [items, setItems] = useState<ItemType<string>[]>([]);
  const [pickerVisible, setPickerVisible] = useState(false);

  const { GET_RECIPES, GET_PRODUCTS } = QUERIES;
  const { data: expireSoon } = useQuery<{ products: Product[] }>(GET_PRODUCTS, {
    variables: { isExpiringSoon: true },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (!expireSoon || expireSoon.products.length === 0) {
      return;
    }

    const newItems = expireSoon.products.map(({ name }) => ({
      label: name,
      value: name,
    }));

    setItems(newItems);
    setValue([newItems[0]?.value]);
  }, [expireSoon]);

  const { data, error, loading, previousData } = useQuery(GET_RECIPES, {
    variables: {
      ingredients: value,
    },
  });

  if (loading) {
    return null;
  }

  const result = (data?.recipes ?? previousData?.recipes) || null;

  if (error) {
    console.error(error.message);
  }

  DropDownPicker.setListMode('SCROLLVIEW');

  return (
    <PageWrapper>
      <Title>{route.name}</Title>
      {result ? (
        <View>
          <DropDownPicker
            multiple={true}
            style={styles.dropdown}
            open={pickerVisible}
            value={value}
            items={items}
            setOpen={setPickerVisible}
            setValue={setValue}
            setItems={setItems}
            textStyle={styles.dropdownText}
            containerStyle={[styles.dropdownContainer]}
            dropDownContainerStyle={styles.dropdown}
            tickIconStyle={{ s: COLORS.WHITE }}
          />
          <View style={{ marginTop: 70 }}>
            <Text
              style={[styles.text, styles.resultText]}
            >{`Results for "${value}"`}</Text>
            <Text style={[styles.text, styles.suggestionText]}>
              You can change the results in the dropdown picker
            </Text>
          </View>
          <RecipesList
            data={result}
            onCardOpen={(uri: string) =>
              navigation.navigate('SingleRecipeScreen', {
                uri,
              })
            }
          />
        </View>
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
  dropdown: {
    backgroundColor: COLORS.GRAY_500,
    borderWidth: 0,
  },
  dropdownText: {
    color: COLORS.WHITE,
  },
  dropdownContainer: {
    flex: 0.5,
  },
  text: { color: COLORS.WHITE },
  resultText: {
    fontSize: TYPOGRAPHY.TITLE_2.FONT_SIZE,
    marginBottom: 10,
  },
  suggestionText: {
    fontSize: 13,
    marginBottom: 20,
  },
});

export default RecipesScreen;
