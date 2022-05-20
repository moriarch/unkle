import React from 'react';
import {Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenList from '../screens/HomeScreen/HomeScreenList';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import HomeScreenDetail from '../screens/HomeScreen/HomeScreenDetail';

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
      <HomeStack.Screen name="Home" component={HomeScreen}  
// @ts-ignore
      options={optins}/>
      <HomeStack.Screen name="List" component={HomeScreenList}  
// @ts-ignore
      options={optins}/>
      <HomeStack.Screen name="Detail" component={HomeScreenDetail}  
// @ts-ignore
      options={optins}/>
    </HomeStack.Navigator>
  );
}
