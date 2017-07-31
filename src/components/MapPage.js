import { eventDescriptionHelper } from '../constants/SearchHelper'
import Map from './Map'
import React, { Component } from 'react';
import {Text, View, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'react-router-native'

export default class MapPage extends Component {


  makeMarkers(){

    markers = this.props.locationHistory.map((event)=> {
      return ({
        latlng: {   latitude: event.location.coords.latitude, longitude: event.location.coords.longitude },
        title: "Event Log",
        description: eventDescriptionHelper(event.result)
      })
    }
  )

      if (this.props.characters.hasHomeBase === true) {
        let homeBaseMarker = {
          latlng: {
            latitude: this.props.characters.homebase.coords.latitude,
            longitude: this.props.characters.homebase.coords.longitude},
          title: "Home Base",
          description: "Home sweet home"
        }
        markers.push(homeBaseMarker)
    }
    return(markers)
  }

  render() {
    const MARKERS = this.makeMarkers()
    return (
      <View>
        <Map
          user={this.props.user}
          markers={MARKERS}/>
        <Link to={'/characters'}><Text>Character Status</Text></Link>
      </View>
    )
  }
}
