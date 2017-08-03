import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, Dimensions, TouchableHighlight  } from 'react-native';
import { Link, Redirect } from 'react-router-native';
var { height, width } = Dimensions.get('window')

export default class HomebasePage extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount(){
    this.props.saveCharacters(this.props.user.uid, this.props.character)
  }


  handleClick(){
      navigator.geolocation.getCurrentPosition((res) => {
        this.props.HomebaseActions.setHomebase(res)
      })

  }


  displayHomeBaseSetupWithRedirect(){
    if (this.props.character.hasHomeBase === false) {
      return(
      <View>
        <Text style={styles.green}>This looks like a good place to set up camp.</Text>
          <Button
            title="Establish camp"
            onPress={this.handleClick}
            />
        <View>
          <Link to={'/characters'}>
            <Text style={styles.green}>Character Status</Text>
          </Link>
        </View>
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

  render() {
    return (
      <View style={styles.container}>
          {this.displayHomeBaseSetupWithRedirect()}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
});
