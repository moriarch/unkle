import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Platform, TouchableOpacity} from 'react-native';

import {colors, sizes} from '../constants/theme';
import {StyleSheet, Animated} from 'react-native';
import {tabs, Icon} from '../constants/Tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        initialRouteName={tabs[0].name}
        
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          lazy:true,
          // unmountOnBlur:true,
          tabBarHideOnKeyboard:true,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: 'rgba(7, 7, 7, 0.6)',
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
            height: Platform.OS === 'ios' ? 80 : 60,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
          },
        }}>
        {tabs.map(({name, component}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <View
                      style={{
                        width: "100%",
                        height: 40,
                        justifyContent: 'center',
                        alignItems:'center',
                        backgroundColor:'transparent'
                      }}>
                      <Icon name={name} focused={focused} />
                    </View>
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 6,
    height: 6,
    left: sizes.width / tabs.length / 2 - 3,
    bottom: Platform.OS === 'ios' ? 20 : 5,
    borderRadius: 100,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});
export default TabNavigator;
