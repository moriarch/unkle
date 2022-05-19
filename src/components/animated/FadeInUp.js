import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

export default function FadeInUp({children, delay}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(fadeAnim, {
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

        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0], // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }
        ],
      }}>
      {children}
    </Animated.View>
  );
}
