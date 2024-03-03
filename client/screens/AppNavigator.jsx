import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './accounts/Login';
import SignUp from './accounts/SignUp';



const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
  )
}

export default AppNavigator