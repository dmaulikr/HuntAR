import React, { Component } from 'react';
import {Text, View, Button, Linking } from 'react-native';

export default class ExploreLaunchPage extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  // test for deep link
  static navigationOptions = {
    title: 'TEST',
  };

  // test

  componentDidMount() {
    const {
      selectedCharacter,
      monsters,
      ExplorARActions,
      createCombatInstance,
      user }  = this.props
    let combatInstance = {selectedCharacter: selectedCharacter, monsters: monsters}
    createCombatInstance(user.uid, combatInstance)

    // test
      Linking.addEventListener('url', this.handleOpenURL);
        //test
    }



    //test
    componentWillUnmount() { // C
      Linking.removeEventListener('url', this.handleOpenURL);
    }
    handleOpenURL = (event) => {
      console.log(event);
      this.navigate(event.url);
    }
    navigate = (url) => { // E
      const { navigate } = this.props.navigation;
      const route = url.replace(/.*?:\/\//g, '');
      const id = route.match(/\/([^\/]+)\/?$/)[1];
      const routeName = route.split('/')[0];

      if (routeName === 'test') {
        console.log('omg this worked');
      };
    }
    //test




  handleClick(){
    // this.props.ExplorARActions.linkingTest("https://stackoverflow.com/questions/4090491/first-element-in-array-jquery")
    navigator.geolocation.getCurrentPosition(res=> (res))
  }

  render() {
    return (
      <View>
          <Button
            title="TEST THAT LINK"
            onPress={this.handleClick}
            />
          <Button
            title="TEST THAT GEOLOCATION"
            onPress={this.handleClick}
            />
      </View>
    )
  }
}
