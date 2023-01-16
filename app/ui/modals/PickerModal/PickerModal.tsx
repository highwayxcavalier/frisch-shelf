import React, { useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '@ui/components/Buttons/ButtonsCTA/Buttons';

interface Props {
  isVisible: boolean;
  value: string;
  list: any[];
  onClose?: () => void;
  onSubmit?: () => void;
}

const PickerModal = ({ value, list, isVisible, onClose, onSubmit }: Props) => {
  const [pickerValue, setPickerValue] = useState(value);
  return (
    <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Buttons
            buttonCTAText="Select"
            onClose={onClose}
            onSubmit={onSubmit}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
});

export default PickerModal;
