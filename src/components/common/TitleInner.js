import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BackBtn from '../../assets/svg/backbtn';
import {container, font, h1} from '../../constants/theme';

import {useNavigation} from '@react-navigation/native';

export default function TitleInner({title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{flexDirection:'row',alignItems: 'center'}} onPress={()=>navigation.goBack()} >
     <View style={{
      height:45,
      width:45
     }}><BackBtn/></View>
      <Text style={{...h1,flex:1, fontFamily:font.normal}}>{title}</Text>
    </TouchableOpacity>
  );
}
