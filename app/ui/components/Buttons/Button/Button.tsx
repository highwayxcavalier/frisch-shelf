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
        isDisabled && styles.disabled,
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
    backgroundColor: COLORS.YELLOW_MAIN,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: TYPOGRAPHY.TITLE_2.FONT_SIZE,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
    color: COLORS.BLACK,
  },
  buttonLight: {
    backgroundColor: COLORS.GRAY_100,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomButton;
