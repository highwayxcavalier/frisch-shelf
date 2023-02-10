import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import COLORS from '@ui/theme/color';
import { NavigationProp } from '@react-navigation/native';
import { RootTabScreenProps } from 'app/navigation/types';
import { formatMealType } from '@utils/formatter';
import { TYPOGRAPHY } from '@ui/common/typography';
import Tag from '@ui/components/Tag';

interface Props {
  title: string;
  imageURL?: ImageSourcePropType | undefined;
  mealType: string[];
  preparationTime: number;
}

const RecipeCard = ({
  title,
  imageURL,
  mealType,
  preparationTime,
  onPress,
}: Props & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {imageURL ? (
        <Image source={imageURL} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.fallbackImage]}></View>
      )}
      <View style={styles.textContainer}>
        <View style={styles.mealTypeContainer}>
          {formatMealType(mealType).map((type) => (
            <Tag text={type} />
          ))}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.preparationTime}>
          {preparationTime !== 0 ? `${preparationTime} min` : null}
        </Text>
      </View>
    </TouchableOpacity>
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
    marginHorizontal: 15,
    marginTop: 15,
    flex: 1,
    flexDirection: 'column',
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
  mealTypeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  preparationTime: {
    fontSize: 13,
    color: COLORS.WHITE,
    opacity: 0.75,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
  },
});

export default RecipeCard;
