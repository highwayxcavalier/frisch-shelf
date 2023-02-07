import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { ChipType } from '../../../types/Chips';
import COLORS from '@ui/theme/color';
import { ExpirationTagsEnum } from '@utils/storageTags';

interface Props {
  chips?: ChipType[];
  selected?: string;
  onSelect?: (text: string) => void;
}

const ChipList = ({ chips, selected, onSelect }: Props) => {
  if (!chips) {
    return null;
  }

  return (
    <View style={styles.container}>
      {chips.map((chip, i) => (
        <Chip
          key={i}
          style={[
            styles.chip,
            selected === chip ? styles.chipSelected : null,
            chip === ExpirationTagsEnum.EXPIRED && styles.expired,
            chip === ExpirationTagsEnum.EXPIRE_SOON && styles.expireSoon,
          ]}
          onPress={() => onSelect?.(chip)}
        >
          {chip}
        </Chip>
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
  chipSelected: {
    backgroundColor: COLORS.YELLOW_MAIN,
  },
  expired: {
    backgroundColor: COLORS.RED_MAIN,
  },
  expireSoon: {
    backgroundColor: COLORS.ORANGE_MAIN,
  },
});

export default ChipList;
