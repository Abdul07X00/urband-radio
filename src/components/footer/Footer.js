import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { playBtn, pauseBtn, antena } from '../../assets/icons';
import styles from './styles';

class Footer extends Component {
  render() {
    const { playerStatus, onBtnPress } = this.props;
    return <View style={styles.footer}>
      <View style={styles.imageWraper}>
        <TouchableOpacity
          onPress={() => onBtnPress(playerStatus.isPublish?true:false)} 
        >
          <Image source={playerStatus.isPublish?pauseBtn:playBtn} style={{ height: 50, width: 50 }} />
          
        </TouchableOpacity>
      </View>
      <View style={styles.rightImageWraper}>
          <Image source={antena} style={{ height: 30, width: 30 }} />
      </View>
    </View>;
  }
}
export default Footer;
