import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './accounts/Login';
import SignUp from './accounts/SignUp';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SignUpHeader from './customs/SignUpHeader';



const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
        <Stack.Navigator>
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
        </Stack.Navigator>
  )
}

export default AppNavigator