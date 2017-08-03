import { saveBase, saveFortificationsFlavor } from '../actions/apiActions'
import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Dimensions } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import StashContainer from '../containers/StashContainer';
import hpBarHelper from '../constants/style.js'
var { height, width } = Dimensions.get('window')


export default class HomebasePage extends Component {
  componentWillUnmount(){
    saveBase(this.props.user.uid, this.props.base)
    saveFortificationsFlavor(this.props.user.uid, this.props.fortificationsFlavor)
  }


  displayStatus(){
    return ( Math.round((this.props.base.health / this.props.base.maxHealth)*100))
  }

  displayFortifications(){
   return(
      this.props.fortificationsFlavor.map( (fortification, i) => {
        if (true)
       return (
        <Text style={styles.green} key={i}> {fortification}</Text>
      )}))}
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.greenTitle}>Home Sweet Home</Text>
          <Text style={styles.green}>---------------------</Text>
        </View>
        <View>
          <Text style={styles.green}>Max Repair: {this.props.base.maxHealth}</Text>
          <Text style={styles.green}>Repair Status: {this.displayStatus()}%</Text>
              {hpBarHelper(this.props.base.health)}
        </View>
        <View>
          <Text style={styles.green}>Fortifications:</Text>
          <Text style={styles.green}>{this.displayFortifications()}</Text>
        </View>
        <View>

          <StashContainer/>
        </View>
          <View>
            <Link to={'/inventory'}>
              <Text style={styles.green}>Inventory</Text>
            </Link>
            <Link to={'/characters'}>
              <Text style={styles.green}>Character Status</Text>
            </Link>
          </View>
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
  button: {
    width: 20,
    height: 30,
    flexDirection: 'row',
  },
  green: {
    color: '#33ff66',
    fontFamily: 'Courier New',
    fontWeight: '900',
    fontSize: 15,
    marginTop: 10,
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
