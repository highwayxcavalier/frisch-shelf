import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import COLORS from '@ui/theme/color';
import HeaderButtons from './components/HeaderButtons';

const Header = () => {
  return (
    <View style={styles.container}>
      <HeaderButtons />
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    maxHeight: 140,
    height: '100%',
    paddingTop: 20,
    backgroundColor: COLORS.BLACK,
  },
});

export default Header;
