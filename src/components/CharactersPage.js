import CharacterShow from '../components/CharacterShow'
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Redirect } from 'react-router-native'

export default class CharactersPage extends Component {
  componentDidMount(){
    this.props.actions.resetForm()
  }


  componentWillUnmount(){
    this.props.saveCharacters(this.props.user.uid, this.props.characters)
  }

  displayCharactersWithRedirect(){
    if ( this.props.characters.length > 0 ) {
      return(
        <View>
          {this.props.characters.map((character, i) => {
            return(
            <CharacterShow
              key={i}
              character={character}
              characterActions={this.props.characterActions}
              selectedCharacter={this.props.selectedCharacter}
              />
            )
          })}
          <View>
            <Link to={'/charactercreation'}><Text>Create a new Hunter</Text></Link>
          </View>
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
