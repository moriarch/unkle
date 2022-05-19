import React, {useRef, useEffect} from 'react';
import {Animated, View} from 'react-native';
import { container } from '../../constants/theme';

export default function Separator({delay}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
console.log(delay)
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      <View style={{height:1,width:'100%',backgroundColor:'white',...container,opacity:.4}}></View>
    </Animated.View>
  );
}
