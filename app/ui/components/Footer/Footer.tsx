import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import COLORS from '@ui/theme/color';
import { ICON_SIZE } from '@ui/common/iconSize';
import { PressableIcon } from '../Icons/PressableIcon';
import ProductFormModal from '@ui/modals/ProductFormModal';

const Footer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <PressableIcon
        iconName="home-sharp"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
      <PressableIcon
        iconName="book-sharp"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
      <View>
        <PressableIcon
          iconName="add-sharp"
          iconSize={ICON_SIZE['regular']}
          hasBackground={true}
          backgroundColor={COLORS.YELLOW_500}
          color={COLORS.GRAY_500}
          onPress={() => setModalVisible(true)}
        />
        <ProductFormModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>

      <PressableIcon
        iconName="warning-sharp"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
      <PressableIcon
        iconName="person"
        iconSize={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 16,
    maxHeight: 90,
    height: '100%',
    backgroundColor: COLORS.GRAY_500,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: COLORS.GRAY_100,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Footer;
