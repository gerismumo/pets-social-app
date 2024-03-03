
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


export default function App() {
  const[loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisible(false);
    }, 2000);
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
        {loaderVisible ? (
          <View style={styles.container}>
             <ActivityIndicator size='large' color="#000000" className='text-[40px]'/>
          </View>
        ): (
          <AppNavigator/>
        )}
        
    </Provider>
    </NavigationContainer>
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
