import atHomebase from '../constants/locationHelper';
import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native'

export default class BaseButton extends Component {

  displayText(){
    if (atHomebase(this.props.user, this.props.characters, .1524)) {
          return(
            <Link to={'homebase'}><Text style={styles.green}>Outpost</Text></Link>
          )
        } else {
          <Text style={styles.green}>Better get back home to heal up and rest</Text>
        }
      }

  render() {
    return (
      <View>{this.displayText()}</View>
    )
  }
}
const styles = StyleSheet.create({
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900'
  }
});
