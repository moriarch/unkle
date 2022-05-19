import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {sizes} from '../../constants/theme';
export default function Skeleton({style = null}) {
  const opacity = useRef(new Animated.Value(0.3));
  const translate = useRef(new Animated.Value(-100));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(translate.current, {
          toValue: sizes.width,
          useNativeDriver: true,
          duration: 800,
          easing:Easing.linear.inOut,
        }),
      ]),
    ).start();
  }, [opacity]);
  return (
    <Animated.View
      style={{
        backgroundColor: 'gray',
        height: 40,
        width: '100%',
        opacity: opacity.current,
        overflow: 'hidden',
        ...style,
      }}>
      <Animated.View
        style={{
          height: '100%',
          width: 50,
          opacity:.2,
          backgroundColor: 'white',
          transform: [
            {
              translateX: translate.current,
            },
            {
                rotate:'45deg'
            },
            {
                translateY:-70
            }
          ],
          height: style && style.hasOwnProperty('height') ? style.height+120 : 160
        }}></Animated.View>
    </Animated.View>
  );
}
