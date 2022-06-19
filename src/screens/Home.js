/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';


import {  
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
  } from 'react-native';

  




const Home = ({navigation}) => {

    const handleVistaMaps = () =>{

        navigation.navigate('Map');

    };

return(
    <View style={{
    flex:1,
    }}>
        <ImageBackground source={require('../Assets/space.png')} style={{width: '100%', height: '100%'}}>

        <View style={{

            height:'70%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',

            }}>

            <Text style={{color:'white'}}>Horario</Text> 
            <Text style={{color:'white'}}>Ciudad</Text> 
            <Text style={{color:'white'}}>Clima</Text> 

            </View>

            <View style={{

            height:'30%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            }}>
            <TouchableOpacity
            onPress={handleVistaMaps}
            >
            <View>
                <Text style={{color:'white'}}>VER CLIMA DEN OTRAS CIUDADES</Text>
            </View>

            </TouchableOpacity>         
            </View>

            
        </ImageBackground>            
    
</View>  
);

}

  

export default Home;