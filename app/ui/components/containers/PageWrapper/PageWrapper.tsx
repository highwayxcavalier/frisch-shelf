import { StyleSheet, View, ViewProps } from 'react-native';
import COLORS from '@ui/theme/color';

const PageWrapper = ({ children }: ViewProps) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
});

export default PageWrapper;
