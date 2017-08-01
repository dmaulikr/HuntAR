import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

export default class CharacterShow extends Component {


  render() {
  let { name, health, maxHealth, intelligence, strength, stamina, dexterity } = this.props.character
    return (
      <View>
        <View><Text>Name: { name }</Text></View>
        <View><Text>Health: { health }</Text></View>
        <View><Text>Max Health: { maxHealth }</Text></View>
      </View>
    )
  }
}
