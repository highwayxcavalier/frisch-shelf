import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';
import ChipList from '@ui/components/ChipList';
import { ChipType } from '../../../../types/Chips';

interface Props {
  tags?: ChipType[];
  imageSource?: string;
  title?: string; // TODO: remove ?
}

const ProductCard = ({ tags, title }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Image
            style={styles.image}
            source={{ uri: 'https://via.placeholder.com/40.png' }}
          />
          <Text style={styles.title}>Hello World</Text>
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
});

export default ProductCard;
