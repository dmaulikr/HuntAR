import LoginContainer from '../containers/LoginContainer'
import CharacterPageContainer from '../containers/CharacterPageContainer'
import CharacterCreationPage from '../components/CharacterCreationPage'
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
           <Route path="/character" exact component={CharacterPageContainer}/>
           <Route path="/charactercreation" exact component={CharacterCreationPage}/>
        </Switch>
      </View>
    );
  }
}
