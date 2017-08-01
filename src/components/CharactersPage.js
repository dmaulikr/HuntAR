import CharacterShow from '../components/CharacterShow'
import TimePassed from '../constants/timehelper'
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
          GeoActions={this.props.GeoActions}
          user={this.props.user}
          characters={this.props.characters}
          />
      )
    }
  }

  displayDaysSurvived(){
    let { locationHistory, characters } = this.props
    if ( characters && locationHistory && locationHistory.length > 2 ) {
     time =  TimePassed(locationHistory[0],  locationHistory[(locationHistory.length - 1)])
     if (time.hours > 1){
       return(<Text>You have survived {time.hours}</Text>)
     }
    }
  }


  displayCharactersWithRedirect(){
    if ( this.props.characters.created === true ) {
      return(
        <View>
          <View>
            <Text>{this.displayDaysSurvived()}</Text>
          </View>
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
