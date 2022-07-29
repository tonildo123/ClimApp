/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { useContext }from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import MapScreen from '../screens/MapScreen';
import ResultScreen from '../screens/ResultScreen';
import { NavigationContainer } from '@react-navigation/native';
import Permissionscreen from '../screens/Permissionscreen';
import { PermissionContext } from '../context/PermissionContext';
import LoadingScreen from '../screens/LoadingScreen';


const Stack = createNativeStackNavigator();


const Navigate = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
          cardStyle:{
              backgroundColor:'black',
          },
        }}
      >
        <Stack.Screen name="Splash" component={ LoadingScreen } />
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Permiso" component={ Permissionscreen } />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Success" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );

};

export default Navigate;