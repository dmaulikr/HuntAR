import thunk from 'redux-thunk';
import Main from './src/components/Main'
import RootReducer from './src/reducers/RootReducer';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

export default class HuntAR extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <Main/>
        </Provider>
      </NativeRouter>
    );
  }
}

AppRegistry.registerComponent('HuntAR', () => HuntAR);
