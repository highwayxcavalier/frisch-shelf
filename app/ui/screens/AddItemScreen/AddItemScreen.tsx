import { StyleSheet, View } from 'react-native';
import ProductForm from '@ui/components/Forms/ProductForm/ProductForm';
import { PressableIcon } from '@ui/components/Icons/PressableIcon';
import { ICON_SIZE } from '@ui/common/iconSize';
import COLORS from '@ui/theme/color';

import {
  RootStackScreenProps,
  RootTabScreenProps,
} from '../../../navigation/types';

const AddItemScreen = ({
  navigation,
}: RootStackScreenProps<'AddItem'> & RootTabScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <PressableIcon
          iconName="close-sharp"
          iconSize={ICON_SIZE['regular']}
          color={COLORS.GRAY_100}
          onPress={() => navigation.navigate('Home')}
          hasBackground
          backgroundColor={COLORS.GRAY_500}
        />
      </View>
      <ProductForm onClose={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_1000,
    padding: 20,
  },
  icon: {
    flexDirection: 'row-reverse',
  },
});

export default AddItemScreen;