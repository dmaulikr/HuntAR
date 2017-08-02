import Main from './src/components/Main';
import RootReducer from './src/reducers/RootReducer';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default class HuntAR extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
            <View>
               <Main/>
            </View>
        </Provider>
      </NativeRouter>
    );
  }
}




AppRegistry.registerComponent('HuntAR', () => HuntAR);
