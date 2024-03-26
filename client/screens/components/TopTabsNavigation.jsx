import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { screensName } from '../AppNavigator';
import AllAlerts from './Alerts/AllAlerts';
import MentionAlerts from './Alerts/MentionAlerts';
import FollowAlert from './Alerts/FollowAlert';
import { TabBarItem } from 'react-native-tab-view';
import colors from '../../services/colors';
const Tab = createMaterialTopTabNavigator();

const TopTabsNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      initialRouteName: screensName.allAlerts,
      tabBarLabelStyle:{fontSize: 16, textTransform: 'none'},
      tabBarStyle: { backgroundColor: colors.white },
      tabBarActiveTintColor: colors.secondary,
      tabBarInactiveTintColor:colors.black,
      tabBarIndicatorStyle: { backgroundColor: colors.white}
    }}
    >
        <Tab.Screen name={screensName.allAlerts} component={AllAlerts} 
        options={{
          title: "All",
        }}
        />
        <Tab.Screen name={screensName.mentionAlerts} component={MentionAlerts} 
        options={{
          title: "Mentions",
        }}
        />
        <Tab.Screen name={screensName.followAlerts} component={FollowAlert}
         options={{
          title: "Follow",
        }}
         />
    </Tab.Navigator>
  )
}

export default TopTabsNavigation