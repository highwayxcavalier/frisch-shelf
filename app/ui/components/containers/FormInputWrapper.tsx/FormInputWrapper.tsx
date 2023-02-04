import { View, ViewProps, StyleSheet } from 'react-native';

const FormInputWrapper = ({ children }: ViewProps) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },
});

export default FormInputWrapper;
