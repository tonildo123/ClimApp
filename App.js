/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import axios, { Axios } from 'axios';
import React from 'react';

import {  
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




const App = () => {

  
  const API_key = '17db3db599cc6c8c1d3804459938744b';
  const part = 'alerts';

  const provincias = [
    {
      provincia:'Tucuman',
      latitud:  '26,51' ,
      longitud:   '65,12',  
    },
    {
      provincia:'Cordoba',
      latitud:  '31,21' ,
      longitud:   '64,05',
    },
    {provincia:' Tierra del fuego',
    latitud:  54 ,
    longitud:   48,
    },
    {
      provincia:'Misiones',
      latitud:  '27,19' ,
      longitud:   '55,53',
    },
    ];


  const handleConsultaClima = async() =>{

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${provincias[2].latitud}&lon=${provincias[2].longitud}&exclude=${part}&appid=${API_key}`);
      console.log(response);
    } catch (error) {
      console.error('error de la api');
      console.error(error);
    }

  };
  
  return (
    
        <View>
          <Text>Hola a todos</Text> 
          <TouchableOpacity
            onPress={handleConsultaClima}
          >
            <View>
              <Text>Click me</Text>
            </View>

          </TouchableOpacity>         
        </View>
      
  );
};



export default App;
