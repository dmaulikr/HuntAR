import atHomebase from '../constants/locationHelper';
import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';


export default class StoreItemButton extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.InventoryActions.storeItem(this.props.item)
  }

  displayButton(){
    if (atHomebase(this.props.user, this.props.character, .1524)){
      return(<TouchableHighlight onPress={this.handleClick}><Text>Take item</Text></TouchableHighlight>)
     }
  }





  render() {
    return (
      <View>{this.displayButton()}</View>
    )
  }
}
