import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';

interface Props {
  placeholder: string;
  label?: string;
  value: string;
  onChange: (() => void) | ((value: string) => void);
  onFocus?: () => void;
  isNumberPad?: boolean;
  isSmall?: boolean;
}

const Input = ({
  label,
  value,
  placeholder,
  onChange,
  onFocus,
  isNumberPad = false,
  isSmall,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={isSmall ? styles.containerSmall : styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
          style={styles.input}
          keyboardType={isNumberPad ? 'number-pad' : 'default'}
          onFocus={onFocus}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 10,
    color: COLORS.GRAY_100,
    fontSize: TYPOGRAPHY.BODY.FONT_SIZE,
  },
  input: {
    backgroundColor: COLORS.GRAY_500,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: COLORS.GRAY_100,
    fontSize: TYPOGRAPHY.BODY.FONT_SIZE,
  },
  container: {
    flex: 1,
  },
  containerSmall: {
    flex: 0.5,
  },
});

export default Input;
