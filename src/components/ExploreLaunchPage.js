import { saveBase, saveItems, saveLocationHistory } from '../actions/apiActions'
import { searchHelper } from '../constants/SearchHelper'
import { nearMe } from '../constants/locationHelper'
import React, { Component } from 'react';
import {Text, View, Button, Linking } from 'react-native';
import { Link, Redirect } from 'react-router-native';

export default class ExploreLaunchPage extends Component {
  constructor() {
  super();
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  componentWillUnmount(){
    saveLocationHistory(this.props.user.uid, this.props.locationHistory)
    saveItems(this.props.user.uid, this.props.items)
    this.props.GeoActions.resetResults()
  }

  handleSearchClick(){

   temp = this.counter(this.props.user, this.props.locationHistory, 0.804672 )
   this.props.GeoActions.searchCurrentLocation(temp)
  }

  counter(user, locations, distance){
    var counter = 0
    locations.forEach((location)=> {
      if (nearMe(user, location, (distance - (this.props.characters.intelligence * .1)))){
        return counter = counter + 1
      }
    })
          return counter
  }




  displayExploreWithCombatRedirect(){
    if (this.props.monsters.length === 0 ) {
      return(
        <View>
            <Text>{this.props.SearchResult.text}</Text>
            <Button
              title="Search the area"
              onPress={this.handleSearchClick}
              />
          <View>
            <Link to={'/characters'}><Text>Return to Status Page</Text></Link>
          </View>
        </View>
      )
    } else {
      return(
        <Redirect to={{
      pathname: '/underattack',
    }}/>
      )
    }
  }


  render() {
    return (
      <View>
        {this.displayExploreWithCombatRedirect()}
      </View>
    )
  }
}
