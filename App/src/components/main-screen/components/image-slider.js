import ImageSlider from 'react-native-image-slider';
import React, {Component} from 'react';
import { images } from '../../../shared/constants/images-list'

export default class ImagesSlider extends Component {
  render() {
    return (
    <ImageSlider 
      autoPlayWithInterval={3000}
      images={images}
    />
  );
  }
}