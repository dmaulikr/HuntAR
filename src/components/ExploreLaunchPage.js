import React, { Component } from 'react';
import {Text, View, Button, Linking } from 'react-native';
import { Link, Redirect } from 'react-router-native';

export default class ExploreLaunchPage extends Component {
  constructor() {
  super();
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }


  handleSearchClick(){
   this.props.GeoActions.setCurrentLocation()
  }


  displayExploreWithCombatRedirect(){
    if (this.props.monsters.length === 0 ) {
      return(
        <View>
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
