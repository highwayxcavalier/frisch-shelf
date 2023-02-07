import { Recipe } from '../../../types/Recipe';
import { FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../Cards/RecipeCard';

interface Props {
  data: Recipe[];
}

const RecipesList = ({ data }: Props) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      renderItem={({ item }) => (
        <RecipeCard
          title={item.label}
          imageURL={{ uri: item.image }}
          mealType={item.mealType}
          preparationTime={item.totalTime}
        />
      )}
      horizontal={false}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    minHeight: '100%',
  },
});

export default RecipesList;