import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './styles';
import {iconLogo} from '../../assets/icons';
import {onAppStart} from '../../app/appAction';

const SplashScreen = props => {
  let dispatch = useDispatch();
  const setSplashDelay = () => {
    setTimeout(() => {
      dispatch(onAppStart());
    }, 2000);
  };

  useEffect(() => {
    setSplashDelay();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Image
        source={iconLogo}
        resizeMode={'contain'}
        style={styles.logoImage}
      />
    </View>
  );
};

export default SplashScreen;
