/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import translate from 'translate-google-api';

import {  
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    StyleSheet,
    Image,
  } from 'react-native';
  import { useRoute } from '@react-navigation/native';
  

const ResultScreen = ({navigation}) => {

  const route = useRoute();

  console.log('route', JSON.stringify(route, null, 3));

  const latRecibida = route.params.ciudad.coordenadas.latitud;
  const lonRecibida = route.params.ciudad.coordenadas.longitud;
     
  const [isLoading, setState] = useState(true);
  const [respuesta, setRespuesta] = useState({
    latitud:'', // response.data.coord.lat
    longitud:'', //response.data.coord.lon
    clima:'', // response.data.weather[0].main
    descripcion:'',//response.data.weather[0].description
    icon:'',//response.data.weather[0].icon
    temp:'',//response.data.main.temp
    tempmin:'',//response.data.main.temp_min
    tempmax:'',//response.data.main.temp_max
    humedad:'',//response.data.main.humidity
    sensacion:'',//response.data.main.feels_like
    presipitacion:'',//response.data.main.pressure
    viento:'',//response.data.wind.speed
    visibilidad:'',//response.data.visibility
    pais:'',//response.data.sys.country
    name:'',//response.data.name
    nubosidad:'', //response.data.clouds.all
  });
  //const API_key = '17db3db599cc6c8c1d3804459938744b';
    let date = new Date();
    let fecha = date.toLocaleDateString();
    let hora = date.getHours() + ':' + date.getMinutes();
    //const translate = require('google-translate-api');
    const [soydescripcion, setSoydescripcion] = useState();

  

  useEffect(() => {    

    handleConsultaClima();
    console.log('se ejecuto effect, Resultado');


  },[]);

  
  const handleConsultaClima = async() =>{  
  
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latRecibida}&lon=${lonRecibida}&appid=17db3db599cc6c8c1d3804459938744b`);
      console.log(response);
      if (response){       
      
        soyTextoEnCastellano(response.data.weather[0].description);
        setState(!isLoading);
        setRespuesta({

          ...respuesta, 
          latitud: response.data.coord.lat,
          longitud:response.data.coord.lon,
          clima: response.data.weather[0].main,
          descripcion:response.data.weather[0].description,
          icon:response.data.weather[0].icon,
          temp:response.data.main.temp,
          tempmin:response.data.main.temp_min,
          tempmax:response.data.main.temp_max,
          humedad:response.data.main.humidity,
          sensacion:response.data.main.feels_like,
          presipitacion:response.data.main.pressure,
          viento:response.data.wind.speed,
          visibilidad:response.data.visibility,
          pais:response.data.sys.country,
          name:response.data.name,
          nubosidad:response.data.clouds.all,

        });
        console.log('respuesta', JSON.stringify(response,null,3));

      }
    } catch (error) {
      
      console.error('error de la api');
      console.error(JSON.stringify(error, null,3));

      
    }

  
  };
    
    
    const handleVistaHome = () =>{
        navigation.navigate('Home');  

    };

    const soyTextoEnCastellano = (texto) =>{

      translate(texto, {to: 'es'}).then(res => {
        console.log(res[0]);

        setSoydescripcion(res[0].toUpperCase());
        
    }).catch(err => {
        console.error(err);
        return err
    });

    }


  return (
    <View style={styles.container}>
        <ImageBackground source={require('../Assets/space.png')} style={{width: '100%', height: '100%'}}>

        <View style={styles.primerView}>

            <Text style={{color:'white'}}>Fecha {fecha} - HORA {hora}</Text> 
            
            <Text style={{color:'white'}}>{
                (isLoading)
                ? `Cargando...`
                : `${respuesta.name} - ${respuesta.pais}`

            }</Text> 
            <Text style={{color:'white'}}>{
                (isLoading)
                ? `...`
                : `${(respuesta.temp - 273).toFixed(2)}°C - ${soydescripcion}`
                }
            </Text> 
            {
              (isLoading)
              ? <Text style={{color:'white'}}>...</Text> 
              : <Image
                style={styles.tinyLogo}
                source={{
                  uri: `http://openweathermap.org/img/wn/${respuesta.icon}@2x.png`,
                }}
              />

            }
            

        </View>

            <View style={styles.segundoView}>
            <TouchableOpacity
                onPress={handleVistaHome}
                >
                <View style={styles.viewButton}>
                    <Text style={{color:'white', padding:8}}>INICIO</Text>
                </View>

            </TouchableOpacity>         
            </View>

            
        </ImageBackground>            
    
</View>

  );
};

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
  tinyLogo:{
    height:30,
    width:50,
  },
  });

export default ResultScreen;