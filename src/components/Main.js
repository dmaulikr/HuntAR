import LoginContainer from '../containers/LoginContainer'
import RegisterPageContainer from '../containers/RegisterPageContainer'
import CharactersPageContainer from '../containers/CharactersPageContainer'
import CharacterCreationPageContainer from '../containers/CharacterCreationPageContainer'
import ExploreLaunchContainer from '../containers/ExploreLaunchContainer'
import FleeContainer from '../containers/FleeContainer'
import React, { Component } from 'react';
import { View } from 'react-native';
import { Switch, Route, StyleSheet } from 'react-router-native'

export default class Main extends Component {
  render() {
    return (
      <View >
        <Switch>
           <Route path="/" exact component={LoginContainer} />
           <Route path="/login" exact component={LoginContainer}/>
           <Route path="/register" exact component={RegisterPageContainer}/>
           <Route path="/characters" exact component={CharactersPageContainer}/>
           <Route path="/charactercreation" exact component={CharacterCreationPageContainer}/>
           <Route path="/explore" exact component={ExploreLaunchContainer}/>
           <Route path="/flee" exact component={FleeContainer}/>
        </Switch>
      </View>
    );
  }
}
