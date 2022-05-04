import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import RNBootSplash from 'react-native-bootsplash';
import {StatusBar} from 'react-native';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
