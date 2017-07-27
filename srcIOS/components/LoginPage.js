import React, { Component } from 'react';
import {Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Redirect } from 'react-router-native'

export default class LoginPage extends Component {
  constructor() {
  super();
    this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
    this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLoginEmailChange(e){
    this.props.actions.updateLoginFormEmail(e)
  }

  handleLoginPasswordChange(e){
    this.props.actions.updateLoginFormPassword(e)
  }

  handleClick(){
    this.props.actions.submitLoginForm(this.props.loginForm)
  }

  displayLoginWithRedirect(){
    if (this.props.user.loggedin === false) {
      return(
        <View>
          <View>
            <Text>Log In</Text>
          </View>
          <View>
            <Text>Email:</Text>
              <TextInput
                placeholder="Email"
                onChangeText={this.handleLoginEmailChange}
                >
              </TextInput>
          </View>
          <View>
            <Text>Password:</Text>
              <TextInput
                placeholder="Password"
                onChangeText={this.handleLoginPasswordChange}
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
      pathname: '/characters',
    }}/>
      )
    }
  }


  render() {
    return (
      <View>{this.displayLoginWithRedirect()}</View>
    )
  }
}
