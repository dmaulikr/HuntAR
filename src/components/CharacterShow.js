import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';
import { Redirect } from 'react-router-native';

export default class CharacterShow extends Component {
  constructor() {
  super();
    this.handlePress = this.handlePress.bind(this);
    this.displayCharacterWithRedirect = this.displayCharacterWithRedirect.bind(this);
  }

  handlePress(){
    this.props.characterActions.selectCharacter(this.props.character)
  }

  displayCharacterWithRedirect(){
    if ( this.props.selectedCharacter.selected === false ) {
            let { name, type, damage, health } = this.props.character
            return(
              <View>
                <View><Text>Name: { name }</Text></View>
                <View><Text>Type: { type }</Text></View>
                <View><Text>Damage: { damage }</Text></View>
                <View><Text>Health: { health }</Text></View>
                <View>
                  <TouchableHighlight onPress={this.handlePress}>
                    <View><ExploreButtonTextContainer/></View>
                  </TouchableHighlight>
                </View>
              </View>
            )
            } else {
              return(
                <Redirect to={{
                    pathname: '/explore',
                }}/>)
              }
            }

  render() {
    return (
      <View>
        {this.displayCharacterWithRedirect()}
      </View>
    )
  }
}
