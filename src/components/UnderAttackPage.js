import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View, Button, Linking } from 'react-native';
import { Link } from 'react-router-native';

export default class UnderAttackPage extends Component {
  constructor() {
  super();
    this.handleAttackClick = this.handleAttackClick.bind(this);
  }



  handleAttackClick(){
    const {
      characters,
      monsters,
      ExplorARActions,
      createCombatInstance,
      user }  = this.props
    let combatInstance = {character: characters, monsters: monsters}
    createCombatInstance(user.uid, {
      chacterhealth: characters.health,
      characterfirerate: characters.damage
    })
    this.props.ExplorARActions.launchCombat('combat://')
  }

  render() {
    return (
      <View>
        <View><ExploreButtonTextContainer/></View>
          <Button
            title="Fight!"
            onPress={this.handleAttackClick}
            />
          <Link to={'/flee'}><Text>Try to run away</Text></Link>
        <View>
          <Link to={'/characters'}><Text>Return to Status Page</Text></Link>
        </View>
      </View>
    )
  }
}
