import React from 'react';
import {Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalculatorScreen from '../screens/CalculatorScreen/CalculatorScreen';
import CalculatorScreenList from '../screens/CalculatorScreen/CalculatorScreenList'

const CalculatorStack = createNativeStackNavigator();

const optins = {
  gestureEnabled: true,
  animation:Platform.OS === 'ios' ? "default" : "fade_from_bottom",
  orientation:"portrait"
}

export default function CalculatorStackScreen() {
  return (
    <CalculatorStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CalculatorStack.Screen name="Calculator" component={CalculatorScreen}  
// @ts-ignore
      options={optins}/>
      <CalculatorStack.Screen name="CalculatorList" component={CalculatorScreenList}  
// @ts-ignore
      options={optins}/>
     
    </CalculatorStack.Navigator>
  );
}
