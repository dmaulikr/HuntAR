import TakeItemButton from './TakeItemButton'
import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import EatItemButton from './EatItemButton'


export default class StashProvisions extends Component {

  render() {
    return (
      <View>
        <Text>Item: {this.props.item.name}</Text>
        <Text>Weight: {this.props.item.weight}</Text>
          <TakeItemButton
            InventoryActions={this.props.InventoryActions}
            item={this.props.item}
            user={this.props.user}
            character={this.props.character}
            />
          <EatItemButton
            InventoryActions={this.props.InventoryActions}
            item={this.props.item}
            />
      </View>
    )
  }
}
