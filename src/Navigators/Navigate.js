/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MapScreen from '../screens/MapScreen';
import ResultScreen from '../screens/ResultScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


const Navigate = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Success" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );

};

export default Navigate;