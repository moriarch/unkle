import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View} from 'react-native';

import {colors, sizes} from '../constants/theme';
import {StyleSheet, Animated} from 'react-native';
import {tabs, Icon} from '../constants/Tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
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
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <View
                      style={{
                        width: 26,
                        height: 26,
                        justifyContent: 'center',
                        alignItems:'center',
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
