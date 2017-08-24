import React, { Component } from 'react';
import {Text, View, TouchableHighlight, StyleSheet } from 'react-native';


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
      <View><TouchableHighlight onPress={this.handleClick}><Text style={styles.green}>Fortify Base</Text></TouchableHighlight></View>
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
