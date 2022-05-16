import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import HomeScreenList from '../screens/HomeScreenList';
import HomeScreenDetail from '../screens/HomeScreenDetail';
import { TransitionSpecs } from '@react-navigation/stack';

const HomeStack = createNativeStackNavigator();

const optins = {
  gestureEnabled: true,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  
}

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen}  options={optins}/>
      <HomeStack.Screen name="List" component={HomeScreenList}  options={optins}/>
      <HomeStack.Screen name="Detail" component={HomeScreenDetail}  options={optins}/>
    </HomeStack.Navigator>
  );
}
