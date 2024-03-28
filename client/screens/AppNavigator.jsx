import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './accounts/Login';
import SignUp from './accounts/SignUp';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SignUpHeader from './customs/SignUpHeader';
import ForgotPass from './accounts/ForgotPass';
import TabsNavigator from './components/TabsNavigator';
import Loader from './components/Loader';
import Message from './components/message/Message';
import Notifications from './components/Notifications';
import AllAlerts from './components/Alerts/AllAlerts';
import MentionAlerts from './components/Alerts/MentionAlerts';
import FollowAlert from './components/Alerts/FollowAlert';
import DrawerTabs from './components/Tabs/HomeDrawer';
import ChatScreen from './components/message/ChatScreen';
import ChatScreenHeader from './components/message/ChatScreenHeader';


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
            <Stack.Screen name={screensName.chatScreen} component={ChatScreen}
            options={{
              header: (props) => <ChatScreenHeader {...props}/>,
              headerShown: true,
            }}
             />
           
        </Stack.Navigator>
  )
}

export default AppNavigator