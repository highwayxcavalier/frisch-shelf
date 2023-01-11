import { Footer } from '@ui/components/Footer';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import COLORS from '@ui/theme/color';
import { Header } from '@ui/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardList } from '@ui/components/CardList';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text>Hello World</Text>
        <CardList />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.GRAY_1000,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
