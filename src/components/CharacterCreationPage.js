import React, { Component } from 'react';
import {Text, View, TextInput, Button, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { Redirect } from 'react-router-native'
import { barHelper } from '../constants/style.js'
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
            <Text style={styles.green}>Hunter Details</Text>
            <Text style={styles.green}>Name:</Text>
            <TextInput
              placeholder="Name"
              onChangeText={this.handleNameChange}
              style={styles.green}
              >
            </TextInput>
            <Text style={styles.green}>Stats</Text>
            <Text style={styles.green}>Avalible Points: {this.props.characterCreationForm.avaliblePoints}</Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.green}>Strength: </Text>
              {barHelper(this.props.characterCreationForm.strength)}
              <TouchableHighlight style={styles.button} onPress={this.handleDecreaseStrength}><Text style={styles.green}>-</Text></TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={this.handleIncreaseStrength}><Text style={styles.green}>+</Text></TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.green}>Intelligence: </Text>
              {barHelper(this.props.characterCreationForm.intelligence)}
              <TouchableHighlight style={styles.button} onPress={this.handleDecreaseIntelligence}><Text style={styles.green}>-</Text></TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={this.handleIncreaseIntelligence}><Text style={styles.green}>+</Text></TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.green}>Stamina: </Text>
              {barHelper(this.props.characterCreationForm.stamina)}
              <TouchableHighlight style={styles.button} onPress={this.handleDecreaseStamina}><Text style={styles.green}>-</Text></TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={this.handleIncreaseStamina}><Text style={styles.green}>+</Text></TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.green}>Dexterity: </Text>
              {barHelper(this.props.characterCreationForm.dexterity)}
              <TouchableHighlight style={styles.button} onPress={this.handleDecreaseDexterity}><Text style={styles.green}>-</Text></TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={this.handleIncreaseDexterity}><Text style={styles.green}>+</Text></TouchableHighlight>
            </View>


            <View style={{flexDirection: 'row'}}>
              <Text style={styles.green}>Fortitude: </Text>
              {barHelper(this.props.characterCreationForm.fortitude)}
              <TouchableHighlight style={styles.button} onPress={this.handleDecreaseFortitude}><Text style={styles.green}>-</Text></TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={this.handleIncreaseFortitude}><Text style={styles.green}>+</Text></TouchableHighlight>

            </View>

            <TouchableHighlight onPress={this.handleClick}><Text style={styles.green}>Create</Text></TouchableHighlight>

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
      <View style={styles.container}>{this.displayCharacterCreationWithRedirect()}</View>
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
  button: {
    width: 10,
    height: 15,
    flexDirection: 'row',
  },
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900'
  }
});
