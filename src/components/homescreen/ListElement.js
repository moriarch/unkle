import React, {useRef, useEffect} from 'react';
import {Animated,Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import {font} from '../../constants/theme';

export default function ListElement({item, onSelect, index}) {
  const fadeAnim = useRef(new Animated.Value(0)).current  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 300,
        delay:index*300,
        useNativeDriver: true 
      }
    ).start();
  }, [fadeAnim])
  return (
    <Animated.View style={{ 
      opacity: fadeAnim,
      transform: [{
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
        }),
      }],
        }}>
    <TouchableOpacity style={styles.item} onPress={onSelect}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.sub}>{item['preview_text']}</Text>
    </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    flexDirection: 'column',
    borderRadius: 20,
    padding: 15,
  },
  name: {
    color: 'white',
    fontFamily: font.bold,
    fontSize: 14,
    marginBottom: 10,
  },
  sub: {
    color: 'white',
    fontFamily: font.normal,
    fontSize: 14,
    opacity: 0.6,
  },
});
