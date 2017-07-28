import React, { Component } from 'react';
import {Text, View } from 'react-native';

export default class ExploreButtonText extends Component {
  displayText(){
    if ( this.props.monsters.length > 0 ) {
          return(
            <Text>Your being attacked by a {this.props.monsters[0].name}</Text>
          )
          } else {
            return(
            <Text>Explore</Text>
            )
          }
        }

  render() {
    return (
      <Text>{this.displayText()}</Text>
    )
  }
}
