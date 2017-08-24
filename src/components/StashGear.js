import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import StashGearItem from '../components/StashGearItem'

export default class StashGear extends Component {
  displayItems(){
   return(
      this.props.items.map( (item, i) => {
        if ((item.type === "weapon" || item.type === "head" || item.type === "body") && item.stored === true)
       return (
         <StashGearItem
           key={i}
           item={item}
           InventoryActions={this.props.InventoryActions}
           user={this.props.user}
           character={this.props.character}
         />
      )}))}
  render() {
    return (
      <View>
        {this.displayItems()}
      </View>
    )
  }
}
