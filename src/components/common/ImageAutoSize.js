import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import {colors} from '../../constants/theme';

export default function ImageAutoSize({url}) {
  const [size, setSize] = useState(null);
  useEffect(() => {
    Image.getSize(url, (width, height) => {
      setSize({width, height});
    });
  }, []);

  return size ? (
    <Image
      source={{uri: url}}
      style={{
        width: size.width,
        height: size.height,
        maxWidth: '100%',
        resizeMode: 'cover',
      }}
    />
  ) : (
    <ActivityIndicator
      size="small"
      color={colors.primary}
      style={{marginTop: 40}}
    />
  );
}

