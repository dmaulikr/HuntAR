import  StoreItemButton from './StoreItemButton'
import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';


export default class InventoryItemProvisions extends Component {

  render() {
    return (
      <View>
        <Text>Item: {this.props.item.name}</Text>
        <Text>Weight: {this.props.item.weight}</Text>
        <StoreItemButton
          InventoryActions={this.props.InventoryActions}
          item={this.props.item}
          user={this.props.user}
          character={this.props.character}
          />

      </View>
    )
  }
}
