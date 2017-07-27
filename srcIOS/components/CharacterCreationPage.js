import React, { Component } from 'react';
import {Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Redirect } from 'react-router-native'

export default class CharacterCreationPage extends Component {
  constructor() {
  super();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHealthChange = this.handleHealthChange.bind(this);
    this.handleDamageChange = this.handleDamageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNameChange(e){
    this.props.actions.updateLoginFormEmail(e)
  }

  handleHealthChange(e){
    this.props.actions.updateLoginFormPassword(e)
  }
  handleHealthChange(e){
    this.props.actions.updateLoginFormPassword(e)
  }

  handleClick(){
    this.props.actions.submitLoginForm(this.props.loginForm)
  }



  displayCharacterCreationWithRedirect(){
    if (this.props.character.length <= 0 ) {
      return(
        <View>
          <View>
            <Text>Character Details</Text>
          </View>
          <View>
            <Text>Name:</Text>
              <TextInput
                placeholder="Name"
                onChangeText={this.handleNameChange}
                >
              </TextInput>
          </View>
          <View>
            <View>
              <Text>Stats</Text>
            </View>
            <Text>Health:</Text>
              <TextInput
                placeholder="Health"
                onChangeText={this.handleHealthChange}
                >
              </TextInput>
          </View>
          <View>
            <Button
              title="Login"
              onPress={this.handleClick}
              />
          </View>
        </View>
      )
    } else {
      return(
        <Redirect to={{
      pathname: '/character',
    }}/>
      )
    }
  }


  render() {
    return (
      <View>{this.displayCharacterCreationWithRedirect()}</View>
    )
  }
}
