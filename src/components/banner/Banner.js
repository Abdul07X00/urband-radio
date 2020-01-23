import React, { Component } from 'react';
import Carousel from 'react-native-banner-carousel';
import { Image, View, Dimensions } from 'react-native';
import styles from './styles';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 100;

class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://tpc.googlesyndication.com/simgad/13122220201439403483?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnYV4d4fLMz8S2FgK5swpbrnV_DXg",
        "https://images.fastcompany.net/image/upload/v1549570867/fcweb/MIC_WEB_banner_NEW_poxcsw.jpg",
        "http://www.al-hamad.com/wp-content/uploads/2019/04/Accessibility-Statement-banner.png",
        "http://buysellgraphic.com/images/graphic_preview/thumb/music_festival_banner_instrument_icons_decor_colorful_silhouettes_32443.jpg"
      ]
    };
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode: 'cover' }} source={{ uri: image }} />
      </View>
    );
  }

  render() {

    const images = this.state.images;

    return <View style={styles.imageWraper}>

      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}
        showsPageIndicator={false}
      >
        {images.map((image, index) => this.renderPage(image, index))}
      </Carousel>

    </View>;
  }
}
export default Banner;
