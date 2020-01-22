import React from 'react';
import {View, Image} from 'react-native';
import {logo} from '../../assets/icons';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};
export default Header;
