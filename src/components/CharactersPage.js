import CharacterShow from '../components/CharacterShow'
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Redirect } from 'react-router-native'

export default class CharactersPage extends Component {
  componentDidMount(){
    this.props.actions.resetForm()
  }

  componentWillUnmount(){
    this.props.saveCharacters(this.props.user.uid, this.props.characters)
  }

  displayCharactersWithRedirect(){
    if ( this.props.characters.created === true ) {
      return(
        <View>
            <CharacterShow
              character={this.props.characters}
              characterActions={this.props.characterActions}
              selectedCharacter={this.props.selectedCharacter}
              />
        </View>
      )
    } else {
      return(
        <Redirect to={{
            pathname: '/charactercreation',
        }}/>
      )
    }
  }


  render() {
    return (
      <View>{this.displayCharactersWithRedirect()}</View>
    )
  }
}
