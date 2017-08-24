import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import StashFortificationsItem from '../components/StashFortificationsItem'

export default class StashFortifications extends Component {
  displayItems(){
   return(
      this.props.items.map( (item, i) => {
        if (item.type === "Fortifications" && item.stored === true && item.consumed === false)
       return (
         <StashFortificationsItem
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
