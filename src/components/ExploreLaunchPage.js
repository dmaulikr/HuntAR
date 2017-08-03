import { saveBase, saveItems, saveLocationHistory, saveCharacters } from '../actions/apiActions'
import { searchHelper } from '../constants/SearchHelper'
import { nearMe } from '../constants/locationHelper'
import React, { Component } from 'react';
import {Text, View, Linking, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Link, Redirect } from 'react-router-native';
var { height, width } = Dimensions.get('window')

export default class ExploreLaunchPage extends Component {
  constructor() {
  super();
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  componentWillUnmount(){
    this.props.GeoActions.resetResults()
    saveLocationHistory(this.props.user.uid, this.props.locationHistory)
    saveItems(this.props.user.uid, this.props.items)
    saveCharacters(this.props.user.uid, this.props.characters)
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
            <Text style={styles.green}>{this.props.SearchResult.text}</Text>
            <TouchableHighlight onPress={this.handleSearchClick}><Text style={styles.green}>Search the area</Text></TouchableHighlight>
          <View>
            <Link to={'/characters'}><Text style={styles.green}>Return to Status Page</Text></Link>
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
      <View style={styles.container}>
        {this.displayExploreWithCombatRedirect()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#000000',
    width: (width ),
    height: (height),

  },
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900'
  }
});
