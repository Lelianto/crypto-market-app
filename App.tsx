import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';

const { Navigator, Screen } = createNativeStackNavigator();

const App: FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={BottomTabs} />
    </Navigator>
  </NavigationContainer>
);

export default App;
