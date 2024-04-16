

import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar, ActivityIndicator } from 'react-native';
import colors from './services/colors';
import AppNavigator from './screens/Tabs/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';




export default function App() {

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.unlockAsync();
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
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

