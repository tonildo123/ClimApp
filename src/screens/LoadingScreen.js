/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';


const LoadingScreen = ({navigation}) => {

  const [isLoading, setState] = useState(true);
  const [respuesta, setRespuesta] = useState('');
  

  useEffect(() => {    

    handleConsultaClima();   
    console.log('se ejecuto effect, segundo');

  },[]);
  

  const handleConsultaClima = async() =>{  
  
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tucuman,AR&APPID=17db3db599cc6c8c1d3804459938744b`);
      console.log(response);
      if (response){
        
        setState(!isLoading);
        setRespuesta(response.data.coord.lon);
        console.log('respuesta', JSON.stringify(response,null,3));
        // navigation.navigate('Home', response);

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
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>

      {
          (isLoading)
          ? <Text style={style.texto}>Cargando...</Text>
          : <Text style={style.texto}>{respuesta}</Text>
      }
      
        
    </View>
  );
};

const style = StyleSheet.create({

    texto:{

        color: 'black', 
        fontSize:30,

    }


});

export default LoadingScreen;