import React from 'react';
import {Text, View} from 'react-native';
import {container, h1} from '../../constants/theme';

export default function TitleInner({title}) {
  return (
    <View style={{...container,alignItems: 'center'}}>
      <Text style={{...h1,textAlign:'center'}}>{title}</Text>
    </View>
  );
}
