import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import {font, colors} from '../../constants/theme';
import FadeInUp from '../animated/FadeInUp';

export default function ListElement({item, onSelect, index, all}) {
  return (
    <FadeInUp delay={index * 300}>
      <TouchableOpacity style={styles.body} onPress={onSelect}>
      <View style={styles.bodyChar}><Text style={styles.char}>{item.name[0]}</Text></View>
        <View>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.textsmall}>{item['preview_text']}</Text>
        </View>
      </TouchableOpacity>
    </FadeInUp>
  );
}

const styles = StyleSheet.create({
  body: {
    padding:10,
    backgroundColor:'#191A1D',
    marginBottom:15,
    borderRadius:15,
    fontFamily:font.normal,
    flexDirection:'row',
    alignItems:'center',
  },
  text: {
    color:'white',
    paddingLeft:15
  },
  textsmall: {
    color:'white',
    paddingLeft:15,
    marginTop:10,
    opacity:.6
  },
  bodyChar:{
    
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    width:50,
    height:50,
    backgroundColor:colors.primary,
  },
  char:{
    color:'white',
    fontFamily:font.bold,
    fontSize:25,
    padding:10
  }
});
