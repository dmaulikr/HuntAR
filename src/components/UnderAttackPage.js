import ExploreButtonTextContainer from '../containers/ExploreButtonTextContainer'
import React, { Component } from 'react';
import {Text, View, Linking, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import { Link, Redirect } from 'react-router-native';
var { height, width } = Dimensions.get('window')

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
    this.props.CharacterActions.setUsersCharacter(this.props.user.uid)
  }

  _handleOpenURL(event) {
    this.props.CharacterActions.flee(20)
    this.props.CharacterActions.setUsersCharacter(this.props.user.uid)
  }

  displayExploreWithCombatRedirect(){
    if (this.props.monsters.length > 0 ) {
      return(
        <View >
          <View style={styles.padding}><ExploreButtonTextContainer/></View>
          <Text style={styles.green}>---------------------</Text>
            <TouchableHighlight onPress={this.handleAttackClick}><Text style={styles.green}>Fight</Text></TouchableHighlight>
            <Link to={'/flee'}><Text style={styles.green}>Try to run away</Text></Link>
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
      <View style={styles.container}>
        {this.displayExploreWithCombatRedirect()}
      </View>
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

  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900',
    fontSize: 20,
    marginTop: 30,
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
