
import React, { Component } from 'react';
import {Text, View, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'react-router-native'
import MapView from 'react-native-maps';
var { height, width } = Dimensions.get('window')

export default class Map extends Component {

  render() {
    return (
    <View>
        <MapView style={styles.map}
          initialRegion={{
          latitude: this.props.user.currentLocation.coords.latitude,
          longitude: this.props.user.currentLocation.coords.longitude,
          latitudeDelta: 0.1022,
          longitudeDelta: 0.0521,
          }}
        >
        {
          this.props.markers.map((marker, i) => (

           <MapView.Marker
             key={i}
             coordinate={marker.latlng}
             title={marker.title}
             description={marker.description}
           />
         ))}

        </MapView>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: (width ),
    height: (height*.97),
  }
});
