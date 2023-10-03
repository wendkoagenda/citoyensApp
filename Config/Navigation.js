// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Details from '../components/Details';
import Menu from '../components/Menu';
import SignalisationForm from '../components/SignalisationForm';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="SignalisationForm" component={SignalisationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
