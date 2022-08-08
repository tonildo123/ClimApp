/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Marker } from "react-native-maps";

/*

    api que necesita latitud y longitud

    https://api.openweathermap.org/data/2.5/weather?lat=-26.82414&lon=-65.2226&appid=17db3db599cc6c8c1d3804459938744b
    
*/
enableLatestRenderer();

const MapScreen = () => {

  const eeuuRegion = {
    
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    
  };

  const argentinaRegion = {
    latitude:  -34.599722,
    longitude: -58.381944,
    
    // latitudeDelta: 0.01,
    // longitudeDelta: 0.01,
  };
  // const [region, setRegion] = useState({
  //   latitude: 51.5079145,
  //   longitude: -0.0899163,
  //   latitudeDelta: 0.01,
  //   longitudeDelta: 0.01,
  // });
  const pinColors = {
    RED: '#ff3b30',
    GREEN: '#4cd964',
    PURPLE: '#c969e0',
  };


  return (
    <View style={styles.container}>

      <View style={styles.containerMap}>
          <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          region={eeuuRegion}
          // onRegionChangeComplete={(region) => setRegion(region)}
        >
          <Marker coordinate={eeuuRegion} />
          <Marker coordinate={argentinaRegion}
                     pinColor={pinColors.PURPLE} />
          
        </MapView>
      </View>

      <View style={styles.containerButton}>
            <TouchableOpacity>
              {/* <Text style={styles.containerText}>Latitud :{region.latitude} </Text>
              <Text style={styles.containerText}>Longtud : {region.longitude}</Text> */}
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
    fontSize:10,
  },


 });

export default MapScreen;