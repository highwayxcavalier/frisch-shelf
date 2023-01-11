import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { ChipType } from '../../../types/Chips';
import COLORS from '@ui/theme/color';

interface Props {
  chips?: ChipType[];
  chipType?: 'flat' | 'outlined';
}

const ChipList = ({ chips }: Props) => {
  if (!chips) {
    return null;
  }

  return (
    <View style={styles.container}>
      {chips.map((chip) => (
        <Chip style={styles.chip}>{chip.text}</Chip>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    marginBottom: 12,
    marginRight: 8,
    borderRadius: 40,
    backgroundColor: COLORS.WHITE,
  },
});

export default ChipList;
