import React, { Component } from 'react';
import {Text, View, Linking } from 'react-native';
import { Link } from 'react-router-native';

export default class ExploreLandingPage extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  static navigationOptions = {
    title: 'page',
  };

  componentDidMount() {
    this.props.CharacterActions.setUsersDamage(this.props.user.uid)
    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }





  render() {
    return (
      <View>
        <Text>Results</Text>
        <Link to={'/characters'}><Text>Character Status</Text></Link>
      </View>
    )
  }
}
