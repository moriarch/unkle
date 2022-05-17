
import React from 'react';
import {Text,  TouchableOpacity} from 'react-native';
import CalculatorIco from '../../assets/svg/calculator'
import {font, colors, container} from '../../constants/theme';

export default function SectionCalculator(){
    return <TouchableOpacity
    style={{
      backgroundColor: colors.primary,
      padding: 17,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 32,
      ...container
    }}>
    <Text
      style={{
        fontWeight: 'bold',
        color: 'white',
        flex: 1,
        fontSize: 20,
        fontFamily:  font.bold,
      }}>
      Расcчитайте{'\n'}стоимость{'\n'}вашего сайта
    </Text>
   <CalculatorIco/>
  </TouchableOpacity>
}