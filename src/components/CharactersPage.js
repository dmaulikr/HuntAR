import CharacterShow from '../components/CharacterShow'
import EquippedItems from '../components/EquippedItems'
import TimePassed from '../constants/timehelper'
import BaseButton from '../components/BaseButton'
import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import { Link, Redirect } from 'react-router-native'
var { height, width } = Dimensions.get('window')

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
        <Link to={'/homebaseSetup'}><Text style={styles.green}>Establish your outpost</Text></Link>
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
       return(<Text style={styles.green}>You have survived { Math.round(time.hours)} hours </Text>)
     }
    }
  }


  displayCharactersWithRedirect(){
    if ( this.props.characters.created === true ) {
      return(
        <View >
          <Text style={styles.greenTitle}>Status:</Text>
          <Text style={styles.green}>---------------------</Text>
          <Text style={styles.green}>{this.displayDaysSurvived()}</Text>

          <CharacterShow
              character={this.props.characters}
              />

          <EquippedItems
              EquipedItems={this.props.EquipedItems}
              />
                <Link to={'/explore'}><View><ExploreButtonTextContainer/></View></Link>
                <Link to={'/inventory'}><Text style={styles.green}>Inventory</Text></Link>
                <Link to={'/map'}><Text style={styles.green}>Map</Text></Link>
                {this.displayAddHomeBaseButton()}
                {this.displayHomeBaseButton()}
                <TouchableHighlight onPress={this.handleClick}><Text style={styles.green} >Logout</Text></TouchableHighlight>
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
      <Link to={'/charactercreation'}><Text style={styles.green}>Create a Character</Text></Link>
      )
    }
    else if ( this.props.characters.health < 0 ){
      return(  <Link to={'/login'}><Text style={styles.green}>YOU DIED</Text></Link>)
    }

    else {
      return(  <Text style={styles.green}>Loading</Text>)
    }

  }

  render() {
    return (
      <View style={styles.container}>
        {this.displayCharactersWithRedirect()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    backgroundColor: '#000000',
    width: (width ),
    height: (height),
  },
  button: {
    width: 20,
    height: 30,
    flexDirection: 'row',
  },
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900',
    fontSize: 20,
    marginTop: 20,
  },
  greenBig: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900',
    fontSize: 20,
  },
  greenTitle: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900',
    fontSize: 30,
  },
});
