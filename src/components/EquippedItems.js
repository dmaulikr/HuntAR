import React, { Component } from 'react';
import {Text, View } from 'react-native';

export default class EquippedItems extends Component {

  displayText(){
    if (this.props.EquipedItems.head ) {
          return(
            <Text>Helm: {this.props.EquipedItems.head.name}</Text>
          )
        }
    if (this.props.EquipedItems.body ) {
          return(
            <Text>Armor: {this.props.EquipedItems.body.name}</Text>
          )
        }
    if (this.props.EquipedItems.weapon ) {
          return(
            <Text>Weapon: {this.props.EquipedItems.weapon.name}</Text>
          )
        }

      }

  render() {
    return (
      <View>{this.displayText()}</View>
    )
  }
}
