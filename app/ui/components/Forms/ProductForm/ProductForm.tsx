import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '@ui/components/Input';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';
import ChipList from '@ui/components/ChipList';
import { storageTags } from '@utils/storageTags';

const ProductForm = () => {
  const [value, setValue] = useState('');
  const [storage, setStorage] = useState<string | undefined>();

  const handleSelectStorage = (newStorage: string) => {
    setStorage(newStorage !== storage ? newStorage : undefined);
  };

  return (
    <View>
      <Text style={styles.title}>Add item</Text>
      <View>
        <Input
          label="Name"
          placeholder="Enter the product name"
          value={value}
          onChange={setValue}
        />
        <Text style={styles.sectionTitle}>Select storage</Text>
        <ChipList
          chips={storageTags}
          selected={storage}
          onSelect={handleSelectStorage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 30,
    color: COLORS.GRAY_100,
    fontSize: TYPOGRAPHY.LARGE_TITLE.FONT_SIZE,
  },
  sectionTitle: {
    marginVertical: 10,
    color: COLORS.GRAY_100,
    fontSize: TYPOGRAPHY.TITLE_1.FONT_SIZE,
  },
});

export default ProductForm;
