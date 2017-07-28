import React, { Component } from 'react';
import {Text, View, TextInput, Button, Picker } from 'react-native';
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
    this.props.actions.updateName(e)
  }

  handleHealthChange(e){
    this.props.actions.updateHealth(e)
  }
  handleDamageChange(e){
    this.props.actions.updateDamage(e)
  }

  handleClick(){
    this.props.actions.submitCreateCharacter({...this.props.characterCreationForm, uid: this.props.user.uid})
  }



  displayCharacterCreationWithRedirect(){
    if (this.props.characterCreationForm.created === false ) {
      return(
        <View>
          <View>
            <Text>Hunter Details</Text>
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
            <Text>Damage:</Text>
              <TextInput
                placeholder="Damage"
                onChangeText={this.handleDamageChange}
                >
              </TextInput>
          </View>
          <View>
            <Button
              title="Create"
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
      <View>{this.displayCharacterCreationWithRedirect()}</View>
    )
  }
}
