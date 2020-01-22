import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './styles';
import {logo} from '../../assets/icons';
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
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Image source={logo} resizeMode={'contain'} style={styles.logoImage} />
    </View>
  );
};

export default SplashScreen;
