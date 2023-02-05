import { TYPOGRAPHY } from '@ui/common/typography';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '@ui/theme/color';

const Title = (props: { children: string }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: TYPOGRAPHY.LARGE_TITLE.FONT_SIZE,
    color: COLORS.GRAY_100,
    lineHeight: 42,
  },
  titleContainer: {
    width: '100%',
    height: 42,
    marginTop: 99,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Title;
