import TakeItemButton from './TakeItemButton'
import React, { Component } from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';
import EatItemButton from './EatItemButton'


export default class StashProvisions extends Component {

  render() {
    return (
      <View>
        <Text style={styles.green}>Item: {this.props.item.name}</Text>
        <Text style={styles.green}>Weight: {this.props.item.weight}</Text>
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

const styles = StyleSheet.create({
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900',
    fontSize: 15,
    marginTop: 10,
  },
});
