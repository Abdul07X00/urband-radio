import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import { NodePlayerView } from 'react-native-nodemediaclient';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublish: true
    };
  }

  handleBtn = (status) => {
    if (status) {
      this.setState({ isPublish: false });
      this.vb.stop();
    } else {
      this.setState({ isPublish: true });
      this.vb.start();
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <NodePlayerView
          style={{ height: 400, top: 20 }}
          ref={(vb) => { this.vb = vb }}
          inputUrl={"https://urband-t927.nodeboost.io/streams/hls/live/urband.m3u8"}
          scaleMode={"ScaleAspectFit"}
          bufferTime={300}
          maxBufferTime={1000}
          autoplay={true}
        />
        <Banner 
        />
        <Footer
          playerStatus={this.state}
          onBtnPress={this.handleBtn}
        />
      </View>
    );
  }
}

// Later on in your styles..


export default HomeScreen;
