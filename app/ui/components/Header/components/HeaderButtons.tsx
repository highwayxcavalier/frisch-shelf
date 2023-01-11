import { ICON_SIZE } from '@ui/common/iconSize';
import { PressableIcon } from '@ui/components/Icons/PressableIcon';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '@ui/theme/color';

const HeaderButtons = () => {
  return (
    <View style={styles.buttonsContainer}>
      <PressableIcon
        iconName="menu-sharp"
        iconSize={ICON_SIZE['regular']}
        hasBackground
        backgroundColor={COLORS.GRAY_500}
        color={COLORS.GRAY_100}
      />
      <View style={styles.buttonsContainerRight}>
        <PressableIcon
          iconName="filter-sharp"
          iconSize={ICON_SIZE['regular']}
          hasBackground
          backgroundColor={COLORS.GRAY_500}
          color={COLORS.GRAY_100}
        />
        <View style={styles.button}>
          <PressableIcon
            iconName="notifications-sharp"
            iconSize={ICON_SIZE['regular']}
            hasBackground
            backgroundColor={COLORS.GRAY_500}
            color={COLORS.GRAY_100}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  buttonsContainerRight: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 8,
  },
});

export default HeaderButtons;
