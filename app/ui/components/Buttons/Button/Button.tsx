import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
} from 'react-native';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';

interface Props {
  text: string;
  isDisabled?: boolean;
  isLight?: boolean;
  hasFullWidth?: boolean;
  onPress: (() => void) | ((event: NativeSyntheticEvent<any>) => void);
}

const CustomButton = ({
  text,
  isDisabled = false,
  onPress,
  isLight = false,
  hasFullWidth = false,
}: Props) => {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        isLight && styles.buttonLight,
        hasFullWidth && styles.buttonFullWidth,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonFullWidth: {
    width: '100%',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.YELLOW_500,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: TYPOGRAPHY.TITLE_2.FONT_SIZE,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
    color: COLORS.GRAY_1000,
  },
  buttonLight: {
    backgroundColor: COLORS.GRAY_100,
  },
});

export default CustomButton;
