import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default class FleePage extends Component {
  componentDidMount(){
    this.props.CharacterActions.flee()
  }

  render() {
    return (
      <View>
        <Text>You escaped but you took ten damage hurt</Text>
        <View>
          <Link to={'/characters'}>
            <Text>Character Status</Text>
          </Link>
        </View>
      </View>
    )
  }
}
