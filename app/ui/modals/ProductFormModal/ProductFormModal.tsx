import React from 'react';
import { Modal, NativeSyntheticEvent, StyleSheet, View } from 'react-native';
import ProductForm from '@ui/components/Forms/ProductForm/ProductForm';
import { PressableIcon } from '@ui/components/Icons/PressableIcon';
import { ICON_SIZE } from '@ui/common/iconSize';
import COLORS from '@ui/theme/color';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  isVisible: boolean;
  onClose?: ((event: NativeSyntheticEvent<any>) => void) | undefined;
}

const ProductFormModal = ({ isVisible, onClose }: Props) => {
  return (
    <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.icon}>
            <PressableIcon
              iconName="close-sharp"
              iconSize={ICON_SIZE['regular']}
              color={COLORS.GRAY_100}
              onPress={onClose}
              hasBackground
              backgroundColor={COLORS.GRAY_500}
            />
          </View>
          <ProductForm />
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_1000,
    paddingHorizontal: 20,
  },
  icon: {
    flexDirection: 'row-reverse',
  },
});

export default ProductFormModal;
