import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';


export default class HomebasePage extends Component {

  render() {
    return (
      <View>
        <View>
          <Text>Camp</Text>
        </View>
        <View>
          <Text>Camp</Text>
        </View>
        <View>
          <Text>Camp</Text>
        </View>

        <View>
          <Text>Camp</Text>
        </View>

        <View>
          <Text>Its much but its all ive got...</Text>
        </View>
          <View>
            <Link to={'/characters'}>
              <Text>Character Status</Text>
            </Link>
          </View>
      </View>


    )
  }
}
