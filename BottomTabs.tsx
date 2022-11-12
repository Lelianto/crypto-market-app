/* eslint-disable react/no-unstable-nested-components */
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import MarketScreen from './screens/Market';
import { isAndroid } from './helper/deviceHelper';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const { name } = route;
          const icon = {
            name: 'caret-up',
            type: 'font-awesome-5'
          };
          if (name === 'Market') {
            icon.name = 'bar-graph';
            icon.type = 'entypo';
          }
          if (name === 'Home') {
            icon.name = 'home-outline';
            icon.type = 'ionicon';
          }
          if (name === 'Discover') {
            icon.name = 'find';
            icon.type = 'antdesign';
          }
          if (name === 'Wallet') {
            icon.name = 'wallet-outline';
            icon.type = 'ionicon';
          }
          if (name === 'Account') {
            icon.name = 'account-outline';
            icon.type = 'material-community';
          }
          return (
            <Icon
              name={icon.name}
              size={25}
              color="black"
              type={icon.type}
              tvParallaxProperties={undefined}
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { height: isAndroid() ? 60 :90 },
        tabBarLabelStyle: { fontSize: 14 }
      })}
    >
      <Tab.Screen name="Home" component={MarketScreen} />
      <Tab.Screen name="Discover" component={MarketScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Wallet" component={MarketScreen} />
      <Tab.Screen name="Account" component={MarketScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
