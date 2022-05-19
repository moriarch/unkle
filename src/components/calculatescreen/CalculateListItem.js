import React, {useState} from 'react';
import {colors, font, h1} from '../../constants/theme';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default function CalculateListItem({data}) {
  return (
    <TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.bodyChar}>
          <Text style={styles.char}>{data.name[0]}</Text>
        </View>
        <Text style={styles.text}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
    backgroundColor: '#191A1D',
    marginBottom: 15,
    borderRadius: 15,
    fontFamily: font.normal,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: 15,
  },
  bodyChar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  char: {
    color: 'white',
    fontFamily: font.bold,
    fontSize: 25,
    padding: 10,
  },
});
