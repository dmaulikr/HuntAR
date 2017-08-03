import React, { Component } from 'react';
import {Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

export default class CharacterShow extends Component {


  render() {
  let { name, health, maxHealth, intelligence, strength, stamina, dexterity } = this.props.character
    return (
      <View>
        <Text style={styles.green}>Name: { name }</Text>
        <Text style={styles.green}>Health: { health }</Text>
        <Text style={styles.green}>Max Health: { maxHealth }</Text>
      </View>
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
