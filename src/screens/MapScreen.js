/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Marker } from "react-native-maps";

/*

    api que necesita latitud y longitud

    https://api.openweathermap.org/data/2.5/weather?lat=-26.82414&lon=-65.2226&appid=17db3db599cc6c8c1d3804459938744b
    
*/
enableLatestRenderer();

const MapScreen = ({navigation}) => {

  const [ciudad, setCiudad] = useState({
    coordenadas:{
      latitud:null,
      longitud:null,
    },
  });
  const [markerd, setMarkerd] = useState({
    region: {
    latitude: 'LATITUDE', 
    longitude: 'LONGITUDE',
    latitudeDelta: 'LATITUDE_DELTA',
    longitudeDelta: 'LONGITUDE_DELTA',
  },
  
  markers: []  });


  const tony = {
    
   latitude: -26.831811744893336, 
   longitude: -65.22590668871999,
   latitudeDelta: 0.019046017524171788,
   longitudeDelta: 0.012100450694561005,

  };
  

  const argentinaRegion = {
    latitude:  -34.599722,
    longitude: -58.381944,
        
  };

  const usuashiaRegion = {
    
    latitude:  -54.81084,
    longitude: -68.31591,
        
  };
  const jujuyRegion = {

    latitude:  -24.19457,
    longitude: -65.29712,
        
  };
  const cordobaRegion = {
     
    latitude:  -31.4135,
    longitude: -64.18105,
        
  };
  const misionesRegion = {
   
    latitude:  -28.00641,
    longitude: -55.60471,
        
  };
  const mardelPlataRegion = {
    
    latitude:  -38.00042,
    longitude:  -57.5562,
        
  };

  const barilocheRegion = {
    
    latitude:   -41.14557,
    longitude:  -71.30822,
        
  };
  
  const pinColors = {
    RED: '#ff3b30',
    GREEN: '#4cd964',
    PURPLE: '#c969e0',
    YELLOW:'#FFFF00',
    AQUA:'#00FFFF',
  };


  const handleAlert = () => {

    console.log('clicked');

    Alert.alert(
      'Ciudad elegida',
      'Ver clima de ciudad',
      [
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed!')},
        {text: 'Ver Clima', onPress: handleVistaResultado},
      ],
      { cancelable: false }
    )

    
  };


  const handleVistaResultado = () =>{

    (ciudad.coordenadas.latitud)
    ? navigation.navigate('Success', {ciudad})
    : Alert.alert(
      'Lo sentimos!',
      'Seleccione una vez más la ciudad MARCADA.',
      [
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed!')},
        {text: 'Aceptar', onPress: () => console.log('OK Pressed!')},
      ],
      { cancelable: false }
    )
    
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerMap}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            showsUserLocation={true}  
            zoomEnabled={true}  
            zoomControlEnabled={true}  
            region={tony}
            // onRegionChangeComplete={(region) => console.log('REGION : ', JSON.stringify(region, null, 3))}
            showsTraffic={true}
            onPress={(e) => setMarkerd({ markers: [...markerd.markers, { latlng: e.nativeEvent.coordinate }] })}
          >
            {
                // loop through markers array & render all markers
                markerd.markers.map((marker, i) => (
                    <MapView.Marker coordinate={marker.latlng} key={i} 
                    pinColor={pinColors.AQUA}
                    onPress={() => {setCiudad({coordenadas:{
                      latitud:marker.latlng.latitude,
                      longitud:marker.latlng.longitude}})
                      console.log(ciudad);
                      handleAlert();}}/>
                ))
            }
          <Marker coordinate={tony} 
                  pinColor={pinColors.RED}
                  title="Tucuman"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:tony.latitude,
                      longitud:tony.longitude}})
                      console.log(ciudad);
                      handleAlert();    
                    }
                  }
                  />
          <Marker coordinate={argentinaRegion}
                  title="Buenos Aires"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:argentinaRegion.latitude,
                      longitud:argentinaRegion.longitude}})
                      console.log(ciudad);
                      handleAlert();
                    }}
                  pinColor={pinColors.PURPLE} />
          <Marker coordinate={mardelPlataRegion}
                  title="Mar del Plata"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:mardelPlataRegion.latitude,
                      longitud:mardelPlataRegion.longitude}})
                      console.log(ciudad);
                      handleAlert();
                    }}
                  pinColor={pinColors.PURPLE} />
          <Marker coordinate={usuashiaRegion}
                  title="Ushuaia"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:usuashiaRegion.latitude,
                      longitud:usuashiaRegion.longitude}})
                      console.log(ciudad);
                      handleAlert();
                    }}
                  pinColor={pinColors.PURPLE} />
          <Marker coordinate={misionesRegion}
                  title="Misiones"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:tony.latitude,
                      longitud:tony.longitude}})
                      console.log(ciudad);
                      handleAlert();
                    }}
                  pinColor={pinColors.PURPLE} />
          <Marker coordinate={jujuyRegion}
                  title="Jujuy"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:misionesRegion.latitude,
                      longitud:misionesRegion.longitude}})
                      console.log(ciudad);
                      handleAlert();
                    }}
                  pinColor={pinColors.PURPLE} />
          <Marker coordinate={cordobaRegion}
                  title="Cordoba"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:cordobaRegion.latitude,
                      longitud:cordobaRegion.longitude}})
                      console.log(ciudad);
                      handleAlert();
                    }}
                  pinColor={pinColors.PURPLE} /> 
          <Marker coordinate={barilocheRegion}
                  title="Bariloche"
                  onPress={() => {
                    setCiudad({coordenadas:{
                      latitud:barilocheRegion.latitude,
                      longitud:barilocheRegion.longitude}})
                      console.log(ciudad);
                      handleAlert();
                    }}
                  pinColor={pinColors.PURPLE} />                                                               
          
        </MapView>
      </View>

      <View style={styles.containerButton}>
            <TouchableOpacity

              onPress={handleAlert}
            >
              <Text style={styles.containerText}>VER CLIMA</Text>
            </TouchableOpacity>
      </View>

   </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex:1,

  },
  containerMap:{
    height:'90%',
    width:'100%',

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  containerButton:{
    height:'10%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2C3E50',
    borderRadius:30,

  },
  containerText:{
    color:'white',
    fontSize:25,
  },


 });

export default MapScreen;