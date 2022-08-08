/* eslint-disable no-lone-blocks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {  
    Text,
    TouchableOpacity,
    View,
    PermissionsAndroid,
    ImageBackground,
    StyleSheet,
  } from 'react-native';

 
const Home = ({navigation}) => {

    
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

  

  useEffect(() => {    

    handleConsultaClima();   
    console.log('se ejecuto effect, segundo');

  },[]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Access fine location Permission",
          message:
            "Cool Maps App needs access to your location " +
            "so you can get location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
        handleVistaMaps();
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  

  const handleConsultaClima = async() =>{  
  
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tucuman,AR&APPID=17db3db599cc6c8c1d3804459938744b`);
      console.log(response);
      if (response){
        
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
        // navigation.navigate('Home', response);

      }
    } catch (error) {
      
      console.error('error de la api');
      console.error(JSON.stringify(error, null,3));

      
    }

  
  };
    
    
    const handleVistaMaps = () =>{
        navigation.navigate('Map');  

    };

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../Assets/space.png')} style={{width: '100%', height: '100%'}}>

        <View style={styles.primerView}>

            <Text style={{color:'white'}}>Fecha {fecha} - HORA {hora}</Text> 
            <Text style={{color:'white'}}>{
                (isLoading)
                ? `...`
                : `${respuesta.name} - ${respuesta.pais}`

            }</Text> 
            <Text style={{color:'white'}}>{
                (isLoading)
                ? `...`
                : `${(respuesta.temp - 273).toFixed(2)}°C - ${respuesta.descripcion}`
                }
            </Text> 
            <Text style={{color:'white'}}>{
                (isLoading)
                ? `Cargando...`
                : `${respuesta.icon}`

            }</Text> 

        </View>

            <View style={styles.segundoView}>
            <TouchableOpacity
                onPress={requestCameraPermission}
                >
                <View style={styles.viewButton}>
                    <Text style={{color:'white', padding:8}}>VER CLIMA DE OTRAS CIUDADES</Text>
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