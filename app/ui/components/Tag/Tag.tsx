import { StyleSheet, Text, View, ViewProps } from 'react-native';
import COLORS from '@ui/theme/color';

interface Props {
  text: string;
}

const Tag = ({ text, style }: Props & ViewProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PURPLE_MAIN,
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 15,
    color: COLORS.WHITE,
  },
});

export default Tag;
