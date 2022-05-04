import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Logo from '../components/logo';
import {body, colors, font} from '../constants/theme';
import CalculatorIco from '../assets/svg/calculator'
const HomeScreen = () => {
  
  return (
    <ScrollView style={body}>
     <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Logo />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 9,
            fontWeight: 'normal',
            color: 'white',
            fontFamily:  font.normal,
            letterSpacing:2
          }}>
          МАРКЕТИНГОВОЕ{'\n'}АГЕНТСТВО
        </Text>
         
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          padding: 17,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 32,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            flex: 1,
            fontSize: 20,
            fontFamily:  font.bold,
          }}>
          Расcчитайте стоимость{'\n'}вашего сайта
        </Text>
       <CalculatorIco/>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          textTransform: 'uppercase',
          color: 'white',
          letterSpacing: 1,
          fontFamily:  font.normal,
          letterSpacing:2,
          marginTop:55
        }}>
        Услуги
      </Text> 
    </ScrollView>
  );
};

export default HomeScreen;
