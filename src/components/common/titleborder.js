// @ts-nocheck
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  section_title,
  section_route,
  colors,
  container,
} from '../../constants/theme';
export default function TitleBorder({title, route, category}) {
  const name = 'Все ' + title.toLowerCase();
  const navigation = useNavigation();
  return (
    <View style={container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 55,
        }}>
        <Text style={section_title}>{title}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(route, {id: category, title: title})
          }>
          <Text style={section_route}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: colors.primary,
          width: 50,
          height: 1,
          marginTop: 15,
        }}></View>
    </View>
  );
}
