// import React, { Component } from 'react';
// import {Text, View, Linking } from 'react-native';
// import { Link } from 'react-router-native';
//
// export default class ExploreLandingPage extends Component {
//   constructor() {
//   super();
//     this.handleClick = this.handleClick.bind(this);
//     this._handleOpenURL = this._handleOpenURL.bind(this);
//   }
//
//   static navigationOptions = {
//     title: 'page',
//   };
//
//   componentDidMount() {
//     Linking.addEventListener('url', this._handleOpenURL);
//
//   }
//
//   componentWillUnmount() {
//     Linking.removeEventListener('url', this.handleOpenURL);
//   }
//
//   _handleOpenURL(event) {
//     console.log("sadklfhjkaldfgnhffgnshjkldfs");
//       this.props.CharacterActions.setUsersCharacter(this.props.user.uid)
//   }
//
//
//
//
//
//   render() {
//     return (
//       <View>
//         <Text>Results</Text>
//         <Link to={'/characters'}><Text>Character Status</Text></Link>
//       </View>
//     )
//   }
// }
