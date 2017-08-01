import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import StashProvisionsItem from '../components/StashProvisionsItem'

export default class StashProvisions extends Component {
  displayItems(){
   return(
      this.props.items.map( (item, i) => {
        if (item.type === "Provisions" && item.stored === true && item.consumed === false)
       return (
         <StashProvisionsItem
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
