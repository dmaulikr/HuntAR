import { saveBase, saveFortificationsFlavor } from '../actions/apiActions'
import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import StashContainer from '../containers/StashContainer';


export default class HomebasePage extends Component {
  componentWillUnmount(){
    saveBase(this.props.user.uid, this.props.base)
    saveFortificationsFlavor(this.props.user.uid, this.props.fortificationsFlavor)
  }


  displayStatus(){
    return ( Math.round((this.props.base.health / this.props.base.maxHealth)*100))
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

          <StashContainer/>
        </View>
        <View>
          <Text>It aint much but its all ive got...</Text>
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
