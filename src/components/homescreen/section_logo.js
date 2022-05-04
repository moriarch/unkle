import React from 'react';
import {Text, View} from 'react-native';
import Logo from '../logo';
import {font} from '../../constants/theme';

export default function SectionLogo() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Logo/>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 9,
          fontWeight: 'normal',
          color: 'white',
          fontFamily: font.normal,
          letterSpacing: 2,
        }}>
        МАРКЕТИНГОВОЕ{'\n'}АГЕНТСТВО
      </Text>
    </View>
  );
}
