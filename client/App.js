import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loader from './screens/components/Loader';
import Login from './screens/accounts/Login';
import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <Loader />
    </Provider>
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
