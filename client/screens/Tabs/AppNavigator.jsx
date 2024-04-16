import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth/login/Login';
import SignUp from '../auth/signup/SignUp';

import SignUpHeader from '../auth/signup/SignUpHeader';
import ForgotPass from '../auth/ForgotPass';

import Loader from '../loader/Loader';

import TabsNavigator from './TabsNavigator';
import chatScreen from '../message/ChatScreen'
import ChatScreenHeader from '../message/ChatScreenHeader';
import ViewMore from '../postData/ViewMore';




export const screensName = {
  loader: 'loader',
  notifiactions: 'notifications',
  main:'Main',
  login: 'login',
  signUp:'signUp',
  messager: 'messager',
  forgotPassword: 'forgotPassword',
  home: 'Home',
  posts:'Posts',
  trends: 'trends',
  profile: 'profile',
  allAlerts:'allAlerts',
  mentionAlerts:'mentionAlerts',
  followAlerts:'followAlerts',
  chatScreen:'chatScreens',
  viewPostData: 'viewpost',
}


const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  
  return (
        <Stack.Navigator
          initialRouteName={screensName.loader}
        >
          <Stack.Screen name={screensName.loader} component={Loader} 
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name={screensName.main} component={TabsNavigator} 
          options={{ headerShown: false }}
          />
            <Stack.Screen name={screensName.login} component={Login} 
             options={{ headerShown: false }}
            />
            <Stack.Screen name={screensName.signUp} component={SignUp} 
             options={
              { 
                header: () => <SignUpHeader />,
                headerShown: true,
              }
            }
            />
            <Stack.Screen name={screensName.forgotPassword} component={ForgotPass} 
            options={
              {title: ''}
            }
            />
            <Stack.Screen name={screensName.chatScreen} component={chatScreen}
            options={{
              header: (props) => <ChatScreenHeader {...props}/>,
              headerShown: true,
            }}
             />
             <Stack.Screen name={screensName.viewPostData} component={ViewMore} />
           
        </Stack.Navigator>
  )
}

export default AppNavigator