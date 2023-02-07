import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '@ui/theme/color';

interface Props {
  title: string;
  imageURL?: ImageSourcePropType | undefined;
  mealType: string[];
  preparationTime: number;
}

const formatMealType = (mealType: string[]) => {
  if (mealType[0] === 'lunch/dinner') return ['Lunch', 'Dinner'];

  const singleType =
    mealType[0].charAt(0).toUpperCase() + mealType[0].slice(1).toLowerCase();
  return [singleType];
};

const RecipeCard = ({ title, imageURL, mealType, preparationTime }: Props) => {
  return (
    <View style={styles.container}>
      {imageURL ? (
        <Image source={imageURL} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.fallbackImage]}></View>
      )}
      <View style={styles.textContainer}>
        {formatMealType(mealType).map((type) => (
          <View style={styles.mealTypeContainer}>
            <Text style={styles.mealType}>{type}</Text>
          </View>
        ))}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.preparationTime}>
          {preparationTime !== 0 ? `${preparationTime} min` : null}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    backgroundColor: COLORS.GRAY_500,
    width: '47%',
    marginBottom: 20,
    height: 320,
  },
  textContainer: {
    marginHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: 110,
  },
  image: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: '100%',
    aspectRatio: 1,
  },
  fallbackImage: {
    backgroundColor: COLORS.GRAY_1000,
  },
  title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 17,
    color: COLORS.WHITE,
  },
  mealType: {
    fontSize: 13,
    color: COLORS.WHITE,
  },
  mealTypeContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.PURPLE_MAIN,
    padding: 5,
    borderRadius: 5,
  },
  preparationTime: {
    fontSize: 13,
    color: COLORS.WHITE,
    opacity: 0.75,
  },
});

export default RecipeCard;
