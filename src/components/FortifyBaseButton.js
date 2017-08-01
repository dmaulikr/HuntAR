import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';


export default class FortifyBaseButton extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.InventoryActions.fortifyBase(this.props.item)
  }

  render() {
    return (
      <View><TouchableHighlight onPress={this.handleClick}><Text>Fortify Base</Text></TouchableHighlight></View>
    )
  }
}
