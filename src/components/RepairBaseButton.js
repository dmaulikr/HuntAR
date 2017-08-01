import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';


export default class RepairBaseButton extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.InventoryActions.repairBase(this.props.item)
  }

  render() {
    return (
      <View><TouchableHighlight onPress={this.handleClick}><Text>Repair Base</Text></TouchableHighlight></View>
    )
  }
}
