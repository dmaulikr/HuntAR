import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default class FleePage extends Component {

  render() {
    return (
      <View>
        <Text>You escaped or maybe you didnt who knows havent built the logic yet</Text>
        <View>
          <Link to={'/characters'}>
            <Text>Character Status</Text>
          </Link>
        </View>
      </View>
    )
  }
}
