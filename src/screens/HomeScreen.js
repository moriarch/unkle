import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Logo from '../components/logo';
import {body, colors} from '../constants/theme';

const HomeScreen = () => {
  
  return (
    <ScrollView style={body}>
     <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Logo />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 8,
            fontWeight: 'normal',
            color: 'white',
            fontFamily: 'Roboto',
          }}>
          МАРКЕТИНГОВОЕ{'\n'}АГЕНТСТВО
        </Text>
        <Text style={{color: 'white',fontFamily: 'normal'}}>  normal </Text>
        <Text style={{color: 'white',fontFamily: 'notoserif'}}>  notoserif </Text>
        <Text style={{color: 'white',fontFamily: 'sans-serif'}}>  sans-serif </Text>
        <Text style={{color: 'white',fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>
        <Text style={{color: 'white',fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>
        <Text style={{color: 'white',fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>
        <Text style={{color: 'white',fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>
        <Text style={{color: 'white',fontFamily: 'serif'}}>  serif </Text>
        {/* <Text style={{color: 'white',fontFamily: 'Roboto'}}>  Roboto </Text> */}
        <Text style={{color: 'white',fontFamily: 'monospace'}}>  monospace </Text>  
        <Text style={{color: 'white',fontFamily: 'monospace'}}>  monospace </Text>  
      </View>
      <View
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
            fontSize: 26,
            fontFamily: 'Roboto',
          }}>
          Расcчитайте стоимость вашего сайта
        </Text>
       
      </View>
      <Text
        style={{
          fontSize: 20,
          textTransform: 'uppercase',
          color: 'white',
          letterSpacing: 1,
        }}>
        Услуги
      </Text> 
    </ScrollView>
  );
};

export default HomeScreen;
