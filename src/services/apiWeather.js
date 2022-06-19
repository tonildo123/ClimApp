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
  
    
  
  };

  return (
    <div>apiWeather</div>
  )
}

export default apiWeather;