import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';

interface Props {
  placeholder: string;
  label?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ label, value, placeholder, onChange }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
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
    padding: 10,
    marginBottom: 20,
    color: COLORS.GRAY_100,
    fontSize: TYPOGRAPHY.BODY.FONT_SIZE,
  },
});

export default Input;
