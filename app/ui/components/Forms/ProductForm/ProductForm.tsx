import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Input from '@ui/components/Input';
import COLORS from '@ui/theme/color';
import { TYPOGRAPHY } from '@ui/common/typography';
import ChipList from '@ui/components/ChipList';
import { getDateTags, storageTags } from '@utils/storageTags';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { measurementList } from './measurementList';
import DropDownPicker from 'react-native-dropdown-picker';
import { useMutation } from '@apollo/client';
import { MUTATIONS } from '@graphql/mutations';
import { QUERIES } from '@graphql/queries';
import isToday from 'date-fns/isToday';
import format from 'date-fns/format';
import { PressableIcon } from '@ui/components/Icons/PressableIcon';
import { ICON_SIZE } from '@ui/common/iconSize';
import BarcodeScannerModal from '@ui/components/Modals/BarcodeScannerModal';
import FormInputWrapper from '@ui/components/containers/FormInputWrapper.tsx/FormInputWrapper';
import CustomButton from '@ui/components/Buttons/Button';
interface Props {
  onClose: () => void;
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
  const [isBarcodeScannerOpen, setIsBarcodeScannerOpen] = useState(false);

  const { ADD_PRODUCT } = MUTATIONS;
  const { GET_PRODUCTS } = QUERIES;

  const [addProduct, { loading, error }] = useMutation(ADD_PRODUCT, {
    variables: {
      name: value,
      quantity: [quantity, measurement].join(' '),
      storage,
      expiration_date: format(date, 'dd-MM-yyyy'),
      isExpired: isToday(date),
      tags: getDateTags(date),
    },
    refetchQueries: [{ query: GET_PRODUCTS }, 'GetProducts'],
  });

  const isDataValid = !!value && !!storage && !!quantity && !!measurement;

  if (loading) return null;
  if (error) throw new Error(`Submission error! ${error.message}`);

  const handleSelectStorage = (newStorage: string) => {
    setStorage(newStorage !== storage ? newStorage : undefined);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setIsDisplayed(false);
    setDate(currentDate);
  };

  const onSubmit = () => {
    try {
      addProduct();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Add item</Text>
      <View>
        <FormInputWrapper>
          <Text style={styles.sectionTitle}>Name</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'stretch',
            }}
          >
            <View style={styles.input}>
              <Input
                placeholder="Enter the food product name"
                value={value}
                onChange={(newValue: string) => setValue(newValue)}
              />
            </View>
            <PressableIcon
              iconName="camera-sharp"
              iconSize={ICON_SIZE['regular']}
              color={COLORS.YELLOW_MAIN}
              backgroundColor={COLORS.GRAY_500}
              onPress={() => setIsBarcodeScannerOpen(true)}
            />
          </View>
          <BarcodeScannerModal
            isVisible={isBarcodeScannerOpen}
            onClose={() => setIsBarcodeScannerOpen(false)}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.quantitySection}>
            <View style={[styles.input, styles.inputSmall]}>
              <Input
                placeholder="1"
                value={quantity}
                onChange={setQuantity}
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
        </FormInputWrapper>
        <FormInputWrapper>
          <Text style={styles.sectionTitle}>Expiration date</Text>
          <RNDateTimePicker
            minimumDate={new Date()}
            mode="date"
            value={date}
            onChange={onDateChange}
            textColor={COLORS.WHITE}
            accentColor={COLORS.YELLOW_MAIN}
            themeVariant="dark"
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <Text style={styles.sectionTitle}>Storage</Text>
          <ChipList
            chips={storageTags}
            selected={storage}
            onSelect={handleSelectStorage}
          />
        </FormInputWrapper>
      </View>
      <CustomButton
        text="Add"
        hasFullWidth
        onPress={onSubmit}
        isDisabled={!isDataValid}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    color: COLORS.WHITE,
    fontSize: TYPOGRAPHY.LARGE_TITLE.FONT_SIZE,
  },
  sectionTitle: {
    marginVertical: 10,
    color: COLORS.WHITE,
    fontSize: TYPOGRAPHY.TITLE_1.FONT_SIZE,
  },
  quantitySection: {
    flexDirection: 'row',
  },
  datePicker: {
    width: '100%',
  },
  input: {
    marginRight: 10,
    flex: 1,
  },
  inputSmall: {
    flex: 0.5,
  },
  dropdown: {
    backgroundColor: COLORS.GRAY_500,
    borderWidth: 0,
  },
  dropdownText: {
    color: COLORS.WHITE,
  },
  dropdownContainer: {
    flex: 0.5,
  },
});

export default ProductForm;
