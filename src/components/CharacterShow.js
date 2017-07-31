import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

export default class CharacterShow extends Component {
    displayAddHomeBaseButton(){
      if ( this.props.character.hasHomeBase === false ) {
        return(
          <Link to={'/homebaseSetup'}><Text>Establish your outpost</Text></Link>
        )
      }
    }

  render() {
    let { name, type, damage, health } = this.props.character
    return (
      <View>
        <View><Text>Name: { name }</Text></View>
        <View><Text>Type: { type }</Text></View>
        <View><Text>Damage: { damage }</Text></View>
        <View><Text>Health: { health }</Text></View>
        <View>
          <Link to={'explore'}><View><ExploreButtonTextContainer/></View></Link>
          <Link to={'inventory'}><Text>Inventory</Text></Link>
        </View>
        <View>
          {this.displayAddHomeBaseButton()}
        </View>
      </View>
    )
  }
}
