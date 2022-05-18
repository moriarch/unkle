import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import {font} from '../../constants/theme';

export default function ListElement({item, onSelect}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onSelect}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.sub}>{item['preview_text']}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    flexDirection:'column',
    borderRadius:20,
    padding:15,
  },
  name: {
    color: 'white',
    fontFamily: font.bold,
    fontSize:14,
    marginBottom:10
  },
  sub: {
    color: 'white',
    fontFamily: font.normal,
    fontSize:14,
    opacity:.6
  },
});
