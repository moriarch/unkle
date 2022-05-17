import React from 'react';
import {View,Text} from 'react-native';
import TitleInner from '../components/common/TitleInner';
import { body } from '../constants/theme';

export default function HomeScreenDetail({route, navigation}) {
  const {id, title} = route.params;
    return (
      <View style={body}>
      <TitleInner title={title}/>
      <Text style={{color: 'black'}}>{JSON.stringify(route.params)}</Text>
      </View>
    );
  }