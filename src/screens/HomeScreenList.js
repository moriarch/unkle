import React from 'react';
import {Text, View} from 'react-native';
import {body, container, h1} from '../constants/theme';
export default function HomeScreenList({route, navigation}) {
  const {id, title} = route.params;
  return (
    <View style={body}>
      <View style={{alignItems: 'center'}}>
        <Text style={h1}>{title}</Text>
      </View>
      <Text style={{color: 'white'}}>{id}</Text>
    </View>
  );
}
