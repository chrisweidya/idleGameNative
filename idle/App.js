import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainContainer from './src/mainContainer';
import { StyleSheet, Text, View } from 'react-native';

console.log(store);
export default class App extends React.Component {
  render() {
    return (      
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
