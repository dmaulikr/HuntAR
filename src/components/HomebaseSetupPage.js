import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';


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
        <Text>This looks like a good place to set up camp.</Text>
          <Button
            title="Establish camp"
            onPress={this.handleClick}
            />
        <View>
          <Link to={'/characters'}>
            <Text>Character Status</Text>
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
      <View>
          {this.displayHomeBaseSetupWithRedirect()}
      </View>
    )
  }
}
