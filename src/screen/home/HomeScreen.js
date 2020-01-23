import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
<<<<<<< HEAD
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
          inputUrl={"https://urband-t891.nodeboost.io/streams/hls/live/urband.m3u8"}
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


=======
import Player from '../../components/player/Player';

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl:
      'http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg',
    audioUrl:
      'https://admin.urbandmusic.com/storage/audio/track_20191219_5dfb52f320c2a.mp3',
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl:
      'http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg',
    audioUrl:
      'https://admin.urbandmusic.com/storage/audio/track_20191219_5dfb52f327afd.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl:
      'https://admin.urbandmusic.com/storage/audio/track_20191024_5db177f96998e.mp3',
  },
];

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Header />
      <Player tracks={TRACKS} />
      {/* <Footer /> */}
    </View>
  );
};
>>>>>>> 95b1a76a447e9d2a46407c58331fe7187c6f44bc
export default HomeScreen;
