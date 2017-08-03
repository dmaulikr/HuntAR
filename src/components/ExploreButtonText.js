import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';


export default class ExploreButtonText extends Component {
  displayText(){
    if ( this.props.monsters.length > 0 ) {
          return(
            <Text style={styles.green}>Your being attacked by a {this.props.monsters[0].name}</Text>
          )
          } else {
            return(
            <Text style={styles.green}>Explore</Text>
            )
          }
        }

  render() {
    return (
      <Text style={styles.green}>{this.displayText()}</Text>
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
