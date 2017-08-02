
import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';


export default class EatItemButton extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.InventoryActions.consumeItem(this.props.item)
  }

  render() {
    return (
      <View><TouchableHighlight onPress={this.handleClick}><Text>Eat</Text></TouchableHighlight></View>
    )
  }
}
