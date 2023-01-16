import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';
import ChipList from '@ui/components/ChipList';
import { ChipType } from '../../../../types/Chips';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ICON_SIZE } from '@ui/common/iconSize';

interface Props {
  tags: ChipType[];
  imageSource?: string;
  title: string;
  imageURI?: string;
}

const ProductCard = ({ tags, title, imageURI }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
          {imageURI ? (
            <Image style={styles.image} source={{ uri: imageURI }} />
          ) : (
            <MaterialCommunityIcons
              name="food-apple"
              size={ICON_SIZE.large}
              color={COLORS.YELLOW_500}
              style={styles.icon}
            />
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
        <ChipList chips={tags} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: COLORS.GRAY_500,
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
  },
  content: {
    marginTop: 12,
    marginHorizontal: 12,
  },
  info: {
    flexDirection: 'row',
  },
  title: {
    alignSelf: 'center',
    fontSize: TYPOGRAPHY.TITLE_3.FONT_SIZE,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
    color: COLORS.GRAY_100,
  },
  image: {
    marginRight: 12,
    borderRadius: 10,
    width: 58,
    height: 58,
  },
  icon: {
    marginRight: 12,
  },
});

export default ProductCard;
