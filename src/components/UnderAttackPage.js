import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View, Button, Linking } from 'react-native';
import { Link, Redirect } from 'react-router-native';

export default class UnderAttackPage extends Component {
  constructor() {
  super();
    this.handleAttackClick = this.handleAttackClick.bind(this);
    this._handleOpenURL = this._handleOpenURL.bind(this);
  }

  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);

  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  _handleOpenURL(event) {
    this.props.CharacterActions.flee(20)
    this.props.CharacterActions.setUsersCharacter(this.props.user.uid)
  }

  displayExploreWithCombatRedirect(){
    if (this.props.monsters.length > 0 ) {
      return(
        <View>
          <View><ExploreButtonTextContainer/></View>
            <Button
              title="Fight!"
              onPress={this.handleAttackClick}
              />
            <Link to={'/flee'}><Text>Try to run away</Text></Link>
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


  handleAttackClick(){
    const {
      characters,
      monsters,
      ExplorARActions,
      createCombatInstance,
      user }  = this.props
    let combatInstance = {character: characters, monsters: monsters}
    createCombatInstance(user.uid, {
      characterhealth: characters.health,
      characterfirerate: characters.rateoffire,
      damagepershot: 20
    })
    this.props.ExplorARActions.launchCombat('combat://')
  }

  render() {
    return (
      <View>
        {this.displayExploreWithCombatRedirect()}
      </View>
    )
  }
}
