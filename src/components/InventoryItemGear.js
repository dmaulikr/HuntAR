import  StoreItemButton from './StoreItemButton'
import React, { Component } from 'react';
import {Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Link, Redirect } from 'react-router-native';

export default class InventoryItemGear extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    if (this.props.item.type === "weapon") {
      this.props.InventoryActions.equipWep(this.props.item)
      this.props.InventoryActions.consumeItem(this.props.item)
    }
    if (this.props.item.type === "head") {
      this.props.InventoryActions.equipHelm(this.props.item)
      this.props.InventoryActions.consumeItem(this.props.item)
    }
    if (this.props.item.type === "body") {
      this.props.InventoryActions.equipBody(this.props.item)
      this.props.InventoryActions.consumeItem(this.props.item)
    }
  }
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
          <StoreItemButton
            InventoryActions={this.props.InventoryActions}
            item={this.props.item}
            user={this.props.user}
            character={this.props.character}
            />
          <View><TouchableHighlight onPress={this.handleClick}>
            <Text style={styles.green}>Equip</Text>
            </TouchableHighlight></View>
      </View>
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
