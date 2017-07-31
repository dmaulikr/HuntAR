import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import InventoryGear from '../components/InventoryGear'
import InventoryFortifications from '../components/InventoryFortifications'
import InventoryProvisions from '../components/InventoryProvisions'


export default class InventoryPage extends Component {
  displayTotalWeight(){
    total = 0
    this.props.items.forEach((item)=> total = item.weight + total)
    return(total)
  }

  render() {
    return (
      <View>
        <View>
          <Text>Weapons and Armor</Text>
          <InventoryGear items={this.props.items}/>
        </View>
        <View>
          <Text>Fortifications</Text>
          <InventoryFortifications items={this.props.items}/>
        </View>
        <View>
          <Text>Provisions</Text>
          <InventoryProvisions items={this.props.items}/>
        </View>
        <View>
          <Text>Total Weight: {this.displayTotalWeight()}</Text>
        </View>
          <Link to={'/characters'}>
            <Text>Character Status</Text>
          </Link>
      </View>
    )
  }
}
