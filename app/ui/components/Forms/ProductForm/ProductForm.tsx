import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard } from 'react-native';
import Input from '@ui/components/Input';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';
import ChipList from '@ui/components/ChipList';
import { storageTags } from '@utils/storageTags';
import Buttons from './components/Buttons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
interface Props {
  onClose?: () => void;
}

const ProductForm = ({ onClose }: Props) => {
  const [value, setValue] = useState('');
  const [quantity, setQuantity] = useState('');
  const [storage, setStorage] = useState<string | undefined>();
  const [date, setDate] = useState<Date>(new Date());
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleSelectStorage = (newStorage: string) => {
    setStorage(newStorage !== storage ? newStorage : undefined);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setIsDisplayed(false);
    setDate(currentDate);
  };

  const onSubmit = () => {
    console.log('PRESSED');
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Add item</Text>
      <View>
        <Text style={styles.sectionTitle}>Name</Text>
        <Input
          placeholder="Enter the food product name"
          value={value}
          onChange={() => setValue}
        />
        <Text style={styles.sectionTitle}>Quantity</Text>
        <Input
          placeholder="1"
          value={quantity}
          onChange={() => setQuantity}
          isNumberPad
        />
        <Text style={styles.sectionTitle}>Expiration date</Text>
        <Input
          placeholder="DD/MM/YYYY"
          value={date.toLocaleDateString()}
          onChange={() => setDate(date)}
          onFocus={() => setIsDisplayed(true)}
        />
        {isDisplayed && (
          <RNDateTimePicker mode="date" value={date} onChange={onDateChange} />
        )}
        <Text style={styles.sectionTitle}>Storage</Text>
        <ChipList
          chips={storageTags}
          selected={storage}
          onSelect={handleSelectStorage}
        />
      </View>
      <Buttons onSubmit={onSubmit} onClose={onClose} />
    </ScrollView>
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
