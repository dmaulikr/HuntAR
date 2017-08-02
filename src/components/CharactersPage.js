import CharacterShow from '../components/CharacterShow'
import EquippedItems from '../components/EquippedItems'
import TimePassed from '../constants/timehelper'
import BaseButton from '../components/BaseButton'
import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native'

export default class CharactersPage extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.CharacterActions.logout()
  }


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
       return(<Text>You have survived { Math.round(time.hours)} hours </Text>)
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
            <EquippedItems
              EquipedItems={this.props.EquipedItems}
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
              <View>
                <Button
                  title="Logout"
                  onPress={this.handleClick}
                  />
              </View>
        </View>
      )
    }
    else if ( this.props.user && this.props.user.loggedin === false ){
      return(  <Redirect to={{
                  pathname: '/login',
                            }}/> )
    }

    else if ( this.props.characters.created === false ){
      return(
      <Link to={'/charactercreation'}><Text>Create a Character</Text></Link>
      )
    }
    else if ( this.props.characters.health < 0 ){
      return(  <Link to={'/login'}><Text>YOU DIED</Text></Link>)
    }

    else {
      return(  <Text>Loading</Text>)
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
