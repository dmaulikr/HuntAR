import React, { Component } from 'react';
import {Text, View, TextInput, Button, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Redirect, Link } from 'react-router-native'
var { height, width } = Dimensions.get('window')
import TypeWriter from 'react-native-typewriter'

export default class LoginPage extends Component {
  constructor() {
  super();
    this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
    this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount(){
    if (this.props.user.loggedin === true) {
      this.props.CharacterActions.setUsersCharacter(this.props.user.uid)
      this.props.CharacterActions.setUsersFortificationsFlavor(this.props.user.uid)
      this.props.CharacterActions.setUsersItemHistory(this.props.user.uid)
      this.props.CharacterActions.setUsersLocationHistory(this.props.user.uid)
      this.props.CharacterActions.setUsersEquipedItems(this.props.user.uid)
    }
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
            <Text style={styles.greenTitle}>Log In</Text>
            <Text style={styles.green}>---------------------</Text>
          </View>
          <View>
            <Text style={styles.green}>Email:</Text>
              <TextInput
                style={styles.green}
                placeholder="Email"
                onChangeText={this.handleLoginEmailChange}
                >
              </TextInput>
          </View>
          <View>
            <Text style={styles.green}>Password:</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.green}
                placeholder="Password"
                onChangeText={this.handleLoginPasswordChange}
                >
              </TextInput>
          </View>
          <View>
            <TouchableHighlight onPress={this.handleClick}><Text style={styles.green} >Login</Text></TouchableHighlight>
            <Link to={'/register'}><Text style={styles.green}>Register to start the hunt!</Text></Link>
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
      <View style={styles.container} style={styles.container}>{this.displayLoginWithRedirect()}</View>
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
