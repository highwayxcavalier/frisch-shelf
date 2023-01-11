import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLORS from '@ui/theme/color';
import { ICON_SIZE } from '@ui/common/iconSize';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Ionicons
        style={styles.icon}
        name="search-sharp"
        size={ICON_SIZE['regular']}
        color={COLORS.GRAY_100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: COLORS.GRAY_500,
    borderRadius: 40,
    padding: 7,
  },
  icon: {
    marginLeft: 5,
  },
});

export default SearchBar;
