import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Redirect } from 'react-router-native'

export default class CharacterShow extends Component {
  render() {
    let { name, type, damage, health } = this.props.character
    return (
      <View>
        <View><Text>Name: { name }</Text></View>
        <View><Text>Type: { type }</Text></View>
        <View><Text>Damage: { damage }</Text></View>
        <View><Text>Health: { health }</Text></View>
      </View>
    )
  }
}
