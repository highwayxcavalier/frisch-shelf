import { ICON_SIZE } from '@ui/common/iconSize';
import { PressableIcon } from '@ui/components/Icons/PressableIcon';
import { RootTabScreenProps } from 'app/navigation/types';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '@ui/theme/color';
import PageWrapper from '@ui/components/containers/PageWrapper';
import { QUERIES } from '@graphql/queries';
import { useQuery } from '@apollo/client';
import { formatMealType } from '@utils/formatter';
import { TYPOGRAPHY } from '@ui/common/typography';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Tag from '@ui/components/Tag';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TableElement } from './components/TableElement';

const Divider = () => {
  return <View style={dividerStyles.divider}></View>;
};

const SingleRecipeScreen = ({
  navigation,
  route,
}: RootTabScreenProps<'SingleRecipeScreen'>) => {
  const { GET_RECIPE } = QUERIES;

  const { data, error, loading, previousData } = useQuery(GET_RECIPE, {
    variables: { uri: route.params.uri },
  });

  if (loading) {
    return null;
  }

  const result = data?.recipe ?? previousData?.recipe;

  if (error) {
    console.error(error.message);
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND_COLOR }}>
      <Image source={{ uri: result.image }} style={styles.image} />
      <View style={styles.closeIcon}>
        <PressableIcon
          iconName="close-sharp"
          iconSize={ICON_SIZE['regular']}
          color={COLORS.WHITE}
          onPress={() => navigation.goBack()}
          backgroundColor={COLORS.GRAY_500}
        />
      </View>
      <PageWrapper>
        <View>
          <View>
            <View style={styles.rowDirection}>
              {formatMealType(result.mealType).map((type, index) => (
                <Tag key={index} text={type} />
              ))}
            </View>
            <Text style={styles.title}>{result.label}</Text>
            <Text style={styles.text}>
              Full recipe at{' '}
              <Text
                onPress={() => Linking.openURL(result.url)}
                style={styles.link}
              >
                {result.source || result.url}
              </Text>
            </Text>
          </View>
          <Divider />
          <TableElement
            title="Total time"
            value={result.totalTime !== 0 ? `${result.totalTime} min` : 'N/A'}
          >
            <FontAwesome5
              name="clock"
              size={24}
              color={COLORS.YELLOW_MAIN}
              style={styles.infoIcon}
            />
          </TableElement>
          <TableElement
            style={styles.middleElement}
            title="Total calories"
            value={`${Math.round(result.calories)} kcal`}
          >
            <Ionicons
              name="flame-sharp"
              size={24}
              color={COLORS.YELLOW_MAIN}
              style={styles.infoIcon}
            />
          </TableElement>
          <TableElement title="Yield" value={`${result.yield} servings`}>
            <MaterialIcons
              name="rice-bowl"
              size={24}
              color={COLORS.YELLOW_MAIN}
              style={styles.infoIcon}
            />
          </TableElement>
          <Divider />
          <View>
            <Text style={styles.headline}>Ingredients</Text>
            <View style={styles.listContainer}>
              {result.ingredientLines.map((line: string) => (
                <View style={styles.rowDirection}>
                  <Text>🟣 </Text>
                  <Text style={[styles.text, styles.listText]}>{line}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </PageWrapper>
    </ScrollView>
  );
};

const dividerStyles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    opacity: 0.3,
    marginVertical: 15,
  },
});

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  image: {
    aspectRatio: 1,
  },
  title: {
    color: COLORS.WHITE,
    fontSize: TYPOGRAPHY.TITLE_1.FONT_SIZE,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
    marginVertical: 15,
  },
  text: {
    fontSize: 17,
    color: COLORS.WHITE,
  },
  listText: {
    marginLeft: 5,
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: 20,
  },
  link: {
    textDecorationLine: 'underline',
  },
  infoIcon: {
    marginRight: 10,
  },
  headline: {
    color: COLORS.WHITE,
    fontSize: 17,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
    marginBottom: 15,
  },
  middleElement: {
    marginVertical: 10,
  },
  rowDirection: {
    flexDirection: 'row',
  },
});

export default SingleRecipeScreen;
