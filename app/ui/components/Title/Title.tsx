import { TYPOGRAPHY } from '@ui/common/typography';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import COLORS from '@ui/theme/color';
import { TextProps } from 'react-native-paper';

const Title = ({ children, style }: TextProps & ViewProps) => {
  return (
    <View style={[styles.titleContainer, style]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: TYPOGRAPHY.LARGE_TITLE.FONT_SIZE,
    color: COLORS.WHITE,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
  },
  titleContainer: {
    width: '100%',
    height: 42,
    marginTop: 99,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default Title;
