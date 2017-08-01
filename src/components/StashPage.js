import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import StashGear from '../components/StashGear'
import StashFortifications from '../components/StashFortifications'
import StashProvisions from '../components/StashProvisions'


export default class StashPage extends Component {
  displayTotalWeight(){
    total = 0
    this.props.items.forEach((item)=> {
      total = item.weight + total
    })
    return(total)
  }

  render() {

    return (
      <View>
        <View>
          <Text>Weapons and Armor</Text>
          <StashGear items={this.props.items}/>
        </View>
        <View>
          <Text>Fortifications</Text>
          <StashFortifications items={this.props.items}/>
        </View>
        <View>
          <Text>Provisions</Text>
          <StashProvisions items={this.props.items}/>
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
