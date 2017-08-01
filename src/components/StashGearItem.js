import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';


export default class StashGearItem extends Component {
  displayBonuses(){
    if (this.props.item.bonusDamage) {
     return(<Text>Bonus Damage: {this.props.item.bonusDamage}</Text>)
   } else if (this.props.item.bonusHealth){
     return(<Text>Bonus Health: {this.props.item.bonusHealth}</Text>)
   }
  }
  render() {
    return (
      <View>
        <Text>Item: {this.props.item.name}</Text>
        {this.displayBonuses()}
        <Text>Weight: {this.props.item.weight}</Text>
      </View>
    )
  }
}
