import StoreItemButton from './StoreItemButton'
import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';


export default class InventoryItemFortifications extends Component {

  render() {
    return (
      <View>
        <Text style={styles.green}>Item: {this.props.item.name}</Text>
        <Text style={styles.green}>Weight: {this.props.item.weight}</Text>
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


const styles = StyleSheet.create({
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900',
    fontSize: 15,
    marginTop: 20,
  },
});
