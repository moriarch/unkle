import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BackBtn from '../../assets/svg/backbtn';
import {container, font, h1} from '../../constants/theme';

import {useNavigation} from '@react-navigation/native';

export default function TitleInner({title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{...container,flexDirection:'row',alignItems: 'center'}}>
      <BackBtn onPress={()=>navigation.goBack()}/>
      <Text style={{...h1,flex:1,textAlign:'center', fontFamily:font.normal}}>{title}</Text>
    </TouchableOpacity>
  );
}
