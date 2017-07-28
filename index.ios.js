import Main from './src/components/Main';
import RootReducer from './src/reducers/RootReducer';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  RootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class HuntAR extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <View style={styles.container}>
            <Main/>
          </View>
        </Provider>
      </NativeRouter>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('HuntAR', () => HuntAR);
