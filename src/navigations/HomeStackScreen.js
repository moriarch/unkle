import React from 'react';
import {Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import HomeScreenList from '../screens/HomeScreenList';
import HomeScreenDetail from '../screens/HomeScreenDetail';
// import { TransitionSpecs } from '@react-navigation/stack';

const HomeStack = createNativeStackNavigator();

const optins = {
  gestureEnabled: true,
  animation:Platform.OS === 'ios' ? "default" : "fade_from_bottom",
  orientation:"portrait"
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
