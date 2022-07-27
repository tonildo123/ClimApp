/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

const apiWeather = () => {


    const API_key = '17db3db599cc6c8c1d3804459938744b';
  
   
  
    const handleConsultaClima = async() =>{

      
  
    try {
      const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=Tucuman,AR&APPID=${API_key}`);
      console.log(response);
    } catch (error) {
      console.error('error de la api');
      console.error(error);
    }
  
    /*

    api que necesita latitud y longitud

    https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    
    */
  
  };

  return (
    <div>{handleConsultaClima}</div>
  )
  
}

export default apiWeather;


/**
 * `${url_base_forecast}?q=${city}&appid=${api_key}&units=metric`;
 * //const location = "Buenos Aires,ar";
export const api_key = "ed6c9c94c80902f9507de9b48698ab00";
export const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";
 * 
 */