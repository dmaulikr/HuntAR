import React, { Component } from 'react';
import {Text, View, TextInput, Button, Dimensions, StyleSheet } from 'react-native';
import { Redirect } from 'react-router-native'
var { height, width } = Dimensions.get('window')

export default class CharacterCreationPage extends Component {
  constructor() {
  super();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleIncreaseStrength = this.handleIncreaseStrength.bind(this);
    this.handleDecreaseStrength = this.handleDecreaseStrength.bind(this);
    this.handleIncreaseIntelligence = this.handleIncreaseIntelligence.bind(this);
    this.handleDecreaseIntelligence = this.handleDecreaseIntelligence.bind(this);
    this.handleIncreaseStamina = this.handleIncreaseStamina.bind(this);
    this.handleDecreaseStamina = this.handleDecreaseStamina.bind(this);
    this.handleIncreaseDexterity = this.handleIncreaseDexterity.bind(this);
    this.handleDecreaseDexterity = this.handleDecreaseDexterity.bind(this);
    this.handleIncreaseFortitude = this.handleIncreaseFortitude.bind(this);
    this.handleDecreaseFortitude = this.handleDecreaseFortitude.bind(this);

  }

  handleNameChange(e){
    this.props.actions.updateName(e)
  }




  handleIncreaseStrength(e){
    this.props.actions.IncreaseStrength(e)
  }
  handleDecreaseStrength(e){
    this.props.actions.DecreaseStrength(e)
  }
  handleIncreaseIntelligence(e){
    this.props.actions.IncreaseIntelligence(e)
  }
  handleDecreaseIntelligence(e){
    this.props.actions.DecreaseIntelligence(e)
  }
  handleIncreaseStamina(e){
    this.props.actions.IncreaseStamina(e)
  }
  handleDecreaseStamina(e){
    this.props.actions.DecreaseStamina(e)
  }
  handleIncreaseDexterity(e){
    this.props.actions.IncreaseDexterity(e)
  }
  handleDecreaseDexterity(e){
    this.props.actions.DecreaseDexterity(e)
  }
  handleIncreaseFortitude(e){
    this.props.actions.IncreaseFortitude(e)
  }
  handleDecreaseFortitude(e){
    this.props.actions.DecreaseFortitude(e)
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
            <View>
              <Text>Avalible Points: {this.props.characterCreationForm.avaliblePoints}</Text>
            </View>
            <View>
              <View>
                <Text>Strength: {this.props.characterCreationForm.strength}</Text>
              </View>
              <Button
                title="Increase Strength"
                onPress={this.handleIncreaseStrength}
                />
              <Button
                title="Decrease Strength"
                onPress={this.handleDecreaseStrength}
                />
            </View>
            <View>
              <View>
                <Text>Intelligence: {this.props.characterCreationForm.intelligence}</Text>
              </View>
              <Button
                title="Increase Intelligence"
                onPress={this.handleIncreaseIntelligence}
                />
              <Button
                title="Decrease Intelligence"
                onPress={this.handleDecreaseIntelligence}
                />
            </View>
            <View>
              <View>
                <Text>Stamina: {this.props.characterCreationForm.stamina}</Text>
              </View>
              <Button
                title="Increase Stamina"
                onPress={this.handleIncreaseStamina}
                />
              <Button
                title="Decrease Stamina"
                onPress={this.handleDecreaseStamina}
                />
            </View>
            <View>
              <View>
                <Text>Dexterity: {this.props.characterCreationForm.dexterity}</Text>
              </View>
              <Button
                title="Increase Dexterity"
                onPress={this.handleIncreaseDexterity}
                />
              <Button
                title="Decrease Dexterity"
                onPress={this.handleDecreaseDexterity}
                />
            </View>
            <View>
              <View>
                <Text>Fortitude: {this.props.characterCreationForm.fortitude}</Text>
              </View>
              <Button
                title="Increase Fortitude"
                onPress={this.handleIncreaseFortitude}
                />
              <Button
                title="Decrease Fortitude"
                onPress={this.handleDecreaseFortitude}
                />
            </View>

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
