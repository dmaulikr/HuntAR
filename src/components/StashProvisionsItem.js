import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';


export default class StashProvisions extends Component {

  render() {
    return (
      <View>
        <Text>Item: {this.props.item.name}</Text>
        <Text>Weight: {this.props.item.weight}</Text>
      </View>
    )
  }
}
