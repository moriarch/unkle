import React from 'react';
import {Text, View} from 'react-native';
import TitleInner from '../components/common/TitleInner';
import {body, container, h1} from '../constants/theme';
export default function HomeScreenList({route, navigation}) {
  const {id, title} = route.params;
  return (
    <View style={body}>
      <TitleInner title={title}/>
      <Text style={{color: 'white'}}>{id}</Text>
    </View>
  );
}
