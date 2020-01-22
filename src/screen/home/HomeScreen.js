import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Text>HomeScreen</Text>
      <Footer />
    </View>
  );
};
export default HomeScreen;
