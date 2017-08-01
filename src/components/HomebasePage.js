import StashContainer from '../containers/StashContainer'
import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';


export default class HomebasePage extends Component {
  displayStatus(){
    return ( (this.props.base.health / this.props.base.maxHealth)*100)
  }

  displayFortifications(){
   return(
      this.props.fortificationsFlavor.map( (fortification, i) => {
        if (true)
       return (
        <Text key={i}>{fortification}</Text>
      )}))}
  render() {
    return (
      <View>
        <View>
          <Text>Home Sweet Home</Text>
        </View>
        <View>
          <Text>Repair Status: {this.displayStatus()}%</Text>
        </View>
        <View>
          <Text>Max Health: {this.props.base.maxHealth}</Text>
        </View>
        <View>
          <Text>Fortifications:</Text>
        </View>
        <View>
          <Text>{this.displayFortifications()}</Text>
        </View>
        <View>
          <Text>Item Stash</Text>
          <StashContainer/>
        </View>
        <View>
          <Text>Its much but its all ive got...</Text>
        </View>
          <View>
            <Link to={'/inventory'}>
              <Text>Inventory</Text>
            </Link>
            <Link to={'/characters'}>
              <Text>Character Status</Text>
            </Link>
          </View>
      </View>


    )
  }
}
