import React, { Component } from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';
import TakeItemButton from './TakeItemButton'


export default class StashGearItem extends Component {
  displayBonuses(){
    if (this.props.item.bonusDamage) {
     return(<Text style={styles.green}>Bonus Damage: {this.props.item.bonusDamage}</Text>)
   } else if (this.props.item.bonusHealth){
     return(<Text style={styles.green}>Bonus Health: {this.props.item.bonusHealth}</Text>)
   }
  }
  render() {
    return (
      <View>
        <Text style={styles.green}>Item: {this.props.item.name}</Text>
        {this.displayBonuses()}
        <Text style={styles.green}>Weight: {this.props.item.weight}</Text>
          <TakeItemButton
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
