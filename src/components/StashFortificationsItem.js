import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import TakeItemButton from './TakeItemButton'
import RepairBaseButton from './RepairBaseButton'
import FortifyBaseButton from './FortifyBaseButton'


export default class StashFortificationsItem extends Component {

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
          <RepairBaseButton
            InventoryActions={this.props.InventoryActions}
            item={this.props.item}
            />
          <FortifyBaseButton
            InventoryActions={this.props.InventoryActions}
            item={this.props.item}
            />

      </View>
    )
  }
}
