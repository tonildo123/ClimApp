/* eslint-disable no-lone-blocks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';



import {  
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    StyleSheet,
  } from 'react-native';

 
const Home = ({navigation}) => {
    
    const API_key = '17db3db599cc6c8c1d3804459938744b';
    let date = new Date();
    let fecha = date.toLocaleDateString();
    let hora = date.getHours() + ':' + date.getMinutes();

    const handleVistaMaps = () =>{
        handleConsultaClima();
        

    };


    const handleConsultaClima = async() =>{  
  
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tucuman,AR&APPID=17db3db599cc6c8c1d3804459938744b`);
          console.log(response);
          if(response){
            console.log('respuesta', JSON.stringify(response,null,3));
            navigation.navigate('Map');
          }
        } catch (error) {
          console.error('error de la api');
          console.error(JSON.stringify(error, null,3));
        }
      
        /*
    
        api que necesita latitud y longitud
    
        https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
        
        */
      
      };

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../Assets/space.png')} style={{width: '100%', height: '100%'}}>

        <View style={styles.primerView}>

            <Text style={{color:'white'}}>Fecha {fecha} - HORA {hora}</Text> 
            <Text style={{color:'white'}}>Tucuman, AR</Text> 
            <Text style={{color:'white'}}>9° NUBES</Text> 

            </View>

            <View style={styles.segundoView}>
            <TouchableOpacity
                onPress={handleVistaMaps}
                >
                <View style={styles.viewButton}>
                    <Text style={{color:'white', padding:8}}>VER CLIMA DEN OTRAS CIUDADES</Text>
                </View>

            </TouchableOpacity>         
            </View>

            
        </ImageBackground>            
    
</View>  
);

}

  
const styles = StyleSheet.create({

    container:{
        flex:1,
        },
    primerView:{

        height:'70%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',

        },    
    segundoView:{

        height:'30%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        },
    viewButton:{
        borderColor:'#85929E',
        borderWidth:2,
        borderRadius:20,
    },
    });

export default Home;