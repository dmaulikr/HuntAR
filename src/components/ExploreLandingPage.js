import React, { Component } from 'react';
import {Text, View, Linking } from 'react-native';
import { Link } from 'react-router-native';

export default class ExploreLandingPage extends Component {
  constructor() {
  super();
    this.handleClick = this.handleClick.bind(this);
  }

  static navigationOptions = {
    title: 'results',
  };

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => {
    debugger
    // this.navigate(event.url);
  }

  // navigate = (url) => {
  //   debugger
  //   const route = url.replace(/.*?:\/\//g, '');
  //   const id = route.match(/\/([^\/]+)\/?$/)[1];
  //   const routeName = route.split('/')[0];
  //   if (routeName === 'test') {
  //     console.log('omg this worked');
  //   };
  // }



  render() {
    return (
      <View>
        <Text>Results</Text>
        <Link to={'/characters'}><Text>Character Status</Text></Link>
      </View>
    )
  }
}
