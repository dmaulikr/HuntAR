import CharacterCreationPage from '../components/CharacterCreationPage'
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Redirect } from 'react-router-native'

export default class CharacterPage extends Component {

  displayCharacterWithRedirect(){
    if ( this.props.character.length > 0 ) {
      return(
        <View>
          <Text>Character Page</Text>
        </View>
      )
    } else {
      return(
        <View>
          <CharacterCreationPage
            user={this.props.user}
            actions={this.props.UserActions}
            character={this.props.character}
            />
        </View>
      )
    }
  }


  render() {
    return (
      <View>{this.displayCharacterWithRedirect()}</View>
    )
  }
}
