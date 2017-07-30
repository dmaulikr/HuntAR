import CharacterShow from '../components/CharacterShow'
import React, { Component } from 'react';
import {Text, View, StatusBar } from 'react-native';
import { Link } from 'react-router-native'

export default class CharactersPage extends Component {
  componentWillMount(){
    const {
      actions,
      user,
      CharacterActions } = this.props
    actions.resetForm()
    CharacterActions.setUsersCharacter(user.uid)
  }


  displayCharactersWithRedirect(){
    if ( this.props.characters.created === true ) {
      return(
        <View>
            <CharacterShow
              character={this.props.characters}
              />
        </View>
      )
    } else {
      return(
      <Link to={'/charactercreation'}><Text>Create a Character</Text></Link>
      )
    }
  }


  render() {
    return (
      <View>
        {this.displayCharactersWithRedirect()}
      </View>
    )
  }
}
