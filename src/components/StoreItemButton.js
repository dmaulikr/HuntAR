import atHomebase from '../constants/locationHelper';
import React, { Component } from 'react';
import {Text, View, TouchableHighlight, StyleSheet } from 'react-native';


export default class StoreItemButton extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
    this.displayButton = this.displayButton.bind(this);
  }

  handleClick(){
    this.props.InventoryActions.storeItem(this.props.item)
  }

  displayButton(){
    if (this.props.character.hasHomeBase && atHomebase(this.props.user, this.props.character, .1524)){
      return(<TouchableHighlight onPress={this.handleClick}><Text style={styles.green}>Store item</Text></TouchableHighlight>)
     }
  }

  render() {
    return (
      <View>{this.displayButton()}</View>
    )
  }
}


const styles = StyleSheet.create({
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900'
  }
});
