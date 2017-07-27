import CharacterShow from '../components/CharacterShow'
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { Redirect } from 'react-router-native'

export default class CharactersPage extends Component {

  displayCharactersWithRedirect(){
    if ( this.props.characters.length > 0 ) {
      return(
        <View>
          {this.props.characters.map((character, i) => {
            return(
            <CharacterShow key={i} character={character}/>
            )
          })}
          <View>
            <Link to={'/charactercreation'}><Text>Create a new Character</Text></Link>
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
