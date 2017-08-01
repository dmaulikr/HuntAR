import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import InventoryItemGear from '../components/InventoryItemGear'

export default class Gear extends Component {
  displayItems(){
   return(
      this.props.items.map( (item, i) => {
        if ((item.type === "weapon" || item.type === "head" || item.type === "body") && item.stored === false && item.consumed === false)
       return (
         <InventoryItemGear
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
