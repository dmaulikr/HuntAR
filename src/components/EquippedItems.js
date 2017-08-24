import React, { Component } from 'react';
import {Text, View, StyleSheet, Dimensions  } from 'react-native';
var { height, width } = Dimensions.get('window')

export default class EquippedItems extends Component {

  displayText(){
    if (this.props.EquipedItems.head ) {
          return(
            <Text style={styles.green}>Helm: {this.props.EquipedItems.head.name}</Text>
          )
        }
    if (this.props.EquipedItems.body ) {
          return(
            <Text style={styles.green}>Armor: {this.props.EquipedItems.body.name}</Text>
          )
        }
    if (this.props.EquipedItems.weapon ) {
          return(
            <Text style={styles.green}>Weapon: {this.props.EquipedItems.weapon.name}</Text>
          )
        }

      }

  render() {
    return (
      <View>{this.displayText()}</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#000000',
    width: (width ),
    height: (height),

  },
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900'
  }
});
