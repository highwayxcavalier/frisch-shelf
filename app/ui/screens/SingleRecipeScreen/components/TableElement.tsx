import { TYPOGRAPHY } from '@ui/common/typography';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import COLORS from '@ui/theme/color';

interface Props {
  title: string;
  value: string;
}

export const TableElement = ({
  children,
  title,
  value,
  style,
}: Props & ViewProps) => {
  return (
    <View style={[styles.container, style]}>
      {children}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  valueText: {
    fontSize: 17,
    color: COLORS.WHITE,
    fontWeight: TYPOGRAPHY.HEADLINE.WEIGHT,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: COLORS.WHITE,
    minWidth: '45%',
  },
});
