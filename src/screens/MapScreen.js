/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';

enableLatestRenderer();

const MapScreen = () => {


  return (
    <View style={styles.container}>

      <View style={styles.containerMap}>
          <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          region={{
            latitude: 28.579660,   
            longitude: 77.321110,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}
        >
        </MapView>
      </View>

      <View style={styles.containerButton}>
            <TouchableOpacity>
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
    fontSize:30,
  },


 });

export default MapScreen;