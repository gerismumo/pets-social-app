import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './accounts/Login';
import SignUp from './accounts/SignUp';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SignUpHeader from './customs/SignUpHeader';
import ForgotPass from './accounts/ForgotPass';
import TabsNavigator from './components/TabsNavigator';
import Loader from './components/Loader';



const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
        <Stack.Navigator
          initialRouteName='Loader'
        >
          <Stack.Screen name='Loader' component={Loader} 
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="Main" component={TabsNavigator} 
          options={{ headerShown: false }}
          />
            <Stack.Screen name="Login" component={Login} 
             options={{ headerShown: false }}
            />
            <Stack.Screen name='SignUp' component={SignUp} 
             options={
              { 
                header: () => <SignUpHeader />,
                headerShown: true,
              }
            }
            />
            <Stack.Screen name='forgotPassword' component={ForgotPass} 
            options={
              {title: ''}
            }
            />
            
        </Stack.Navigator>
  )
}

export default AppNavigator