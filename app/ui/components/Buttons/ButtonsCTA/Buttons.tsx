import CustomButton from '@ui/components/Buttons/Button';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  buttonCTAText: string;
}

const Buttons = ({ onSubmit, onClose, buttonCTAText }: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <CustomButton text={buttonCTAText} hasFullWidth onPress={onSubmit} />
      <CustomButton text="Cancel" hasFullWidth isLight onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 40,
  },
});

export default Buttons;
