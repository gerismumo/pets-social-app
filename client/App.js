
import { StyleSheet, Text, View } from 'react-native';
import Loader from './screens/components/Loader';
import Login from './screens/accounts/Login';
import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar, ActivityIndicator } from 'react-native';
import colors from './services/colors';
import AppNavigator from './screens/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './screens/components/TabsNavigator';
import * as ScreenOrientation from 'expo-screen-orientation';



export default function App() {

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.unlockAsync();
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }

    changeScreenOrientation();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

 
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
        hidden={false}
        animated={true}
        backgroundColor={colors.white}
        barStyle='dark-content'
        />
        {/* app screens */}
        <AppNavigator/>
    </Provider>
    </NavigationContainer>
    );
}

