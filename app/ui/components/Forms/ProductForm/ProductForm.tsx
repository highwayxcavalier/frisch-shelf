import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Input from '@ui/components/Input';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';
import ChipList from '@ui/components/ChipList';
import { storageTags } from '@utils/storageTags';
import Buttons from '@ui/components/Buttons/ButtonsCTA';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { measurementList } from './measurementList';
import DropDownPicker from 'react-native-dropdown-picker';
interface Props {
  onClose?: () => void;
}

const ProductForm = ({ onClose }: Props) => {
  const [value, setValue] = useState('');
  const [quantity, setQuantity] = useState('');
  const [storage, setStorage] = useState<string | undefined>();
  const [date, setDate] = useState<Date>(new Date());
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [measurement, setMeasurement] = useState('');
  const [measurements, setMeasurements] = useState(measurementList);

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
        <View style={styles.quantitySection}>
          <View style={styles.quantityInput}>
            <Input
              placeholder="1"
              value={quantity}
              onChange={() => setQuantity}
              isNumberPad
            />
          </View>
          <DropDownPicker
            style={styles.dropdown}
            open={modalVisible}
            value={measurement}
            items={measurements}
            setOpen={setModalVisible}
            setValue={setMeasurement}
            setItems={setMeasurements}
            textStyle={styles.dropdownText}
            containerStyle={[styles.dropdownContainer]}
            dropDownContainerStyle={styles.dropdown}
          />
        </View>
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
      <Buttons buttonCTAText="Add" onSubmit={onSubmit} onClose={onClose} />
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
  quantitySection: {
    flexDirection: 'row',
    flex: 1,
  },
  quantityInput: {
    flex: 1,
    marginRight: 10,
  },
  dropdown: {
    backgroundColor: COLORS.GRAY_500,
    borderWidth: 0,
  },
  dropdownText: {
    color: COLORS.GRAY_100,
  },
  dropdownContainer: {
    flex: 0.5,
  },
});

export default ProductForm;
