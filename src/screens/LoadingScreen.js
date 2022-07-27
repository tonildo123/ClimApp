/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <ActivityIndicator 
            size={ 50 }
            color="black"
        />
    </View>
  );
};

export default LoadingScreen;