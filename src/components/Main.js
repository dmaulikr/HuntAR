import LoginContainer from '../containers/LoginContainer'
import RegisterPageContainer from '../containers/RegisterPageContainer'
import CharactersPageContainer from '../containers/CharactersPageContainer'
import InventoryPageContainer from '../containers/InventoryPageContainer'
import CharacterCreationPageContainer from '../containers/CharacterCreationPageContainer'
import ExploreLaunchContainer from '../containers/ExploreLaunchContainer'
import HomebaseSetupContainer from '../containers/HomebaseSetupContainer'
import HomebaseContainer from '../containers/HomebaseContainer'
import UnderAttackContainer from '../containers/UnderAttackContainer'
import FleeContainer from '../containers/FleeContainer'
import MapPageContainer from '../containers/MapPageContainer'
import React, { Component } from 'react';
import { View } from 'react-native';
import { Switch, Route, StyleSheet } from 'react-router-native'

export default class Main extends Component {

  render() {
    return (
      <View >
        <Switch>
           <Route path="/" exact component={CharacterCreationPageContainer} />
           <Route path="/login" exact component={LoginContainer}/>
           <Route path="/register" exact component={RegisterPageContainer}/>
           <Route path="/characters" exact component={CharactersPageContainer}/>
           <Route path="/charactercreation" exact component={CharacterCreationPageContainer}/>
           <Route path="/inventory" exact component={InventoryPageContainer}/>
           <Route path="/explore" exact component={ExploreLaunchContainer}/>
           <Route path="/flee" exact component={FleeContainer}/>
           <Route path="/homebasesetup" exact component={HomebaseSetupContainer}/>
           <Route path="/homebase" exact component={HomebaseContainer}/>
           <Route path="/underattack" exact component={UnderAttackContainer}/>
           <Route path="/map" exact component={MapPageContainer}/>
        </Switch>
      </View>
    );
  }
}
