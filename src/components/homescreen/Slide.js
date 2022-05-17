import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {SvgCssUri} from 'react-native-svg';
import ImageAutoSize from '../common/ImageAutoSize';

const MIMEType = url => url.indexOf('.svg') > 0;
const ImageSVG = ({url}) => <SvgCssUri uri={url} />;

export default function Slide({item, onSelect}) {

  return item.image ? (
    <TouchableOpacity style={styles.slide} onPress={onSelect}>
      {MIMEType(item.image) ? (
        <ImageSVG url={'https://app.unkle.pro' + item.image} />
      ) : (
        <ImageAutoSize url={'https://app.unkle.pro' + item.image} />
      )}
    </TouchableOpacity>
  ):null;
}

const styles = StyleSheet.create({
  slide: {
    marginRight: 15,
  },
});
