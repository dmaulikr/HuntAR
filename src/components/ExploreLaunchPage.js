import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';

export default class ExploreLaunchPage extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      selectedCharacter,
      monsters,
      ExplorARActions,
      createCombatInstance,
      user }  = this.props
    let combatInstance = {selectedCharacter: selectedCharacter, monsters: monsters}
    createCombatInstance(user.uid, combatInstance)
  }

  handleClick(){
    this.props.ExplorARActions.linkingTest("https://stackoverflow.com/questions/4090491/first-element-in-array-jquery")
  }

  render() {
    return (
      <View>
          <Button
            title="TEST THAT LINK"
            onPress={this.handleClick}
            />
      </View>
    )
  }
}
