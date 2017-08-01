import CharacterShow from '../components/CharacterShow'
import BaseButton from '../components/BaseButton'
import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link } from 'react-router-native'

export default class CharactersPage extends Component {
  componentWillMount(){
    const {
      actions,
      user,
      CharacterActions,
      GeoActions } = this.props
    actions.resetForm()
    GeoActions.setCurrentLocation()
  }

  displayAddHomeBaseButton(){
    if ( this.props.characters && this.props.characters.hasHomeBase != true ) {
      return(
        <Link to={'/homebaseSetup'}><Text>Establish your outpost</Text></Link>
      )
    }
  }

  displayHomeBaseButton(){
    if ( this.props.characters && this.props.characters.hasHomeBase === true && this.props.user && this.props.user.currentLocation ) {
      return(
        <BaseButton
          user={this.props.user}
          characters={this.props.characters}
          />
      )
    }
  }

  displayCharactersWithRedirect(){
    if ( this.props.characters.created === true ) {
      return(
        <View>
            <CharacterShow
              character={this.props.characters}
              />
              <View>
                <Link to={'/explore'}><View><ExploreButtonTextContainer/></View></Link>
                <Link to={'/inventory'}><Text>Inventory</Text></Link>
                <Link to={'/map'}><Text>Map</Text></Link>
              </View>
              <View>
                {this.displayAddHomeBaseButton()}
              </View>
              <View>
                {this.displayHomeBaseButton()}
              </View>
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
