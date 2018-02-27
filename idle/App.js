import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainContainer from './src/mainContainer';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (      
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    );
  }
}
