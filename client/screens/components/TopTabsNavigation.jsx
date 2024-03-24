import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { screensName } from '../AppNavigator';
import AllAlerts from './Alerts/AllAlerts';
import MentionAlerts from './Alerts/MentionAlerts';
import FollowAlert from './Alerts/FollowAlert';
const Tab = createMaterialTopTabNavigator();

const TopTabsNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name={screensName.allAlerts} component={AllAlerts} />
        <Tab.Screen name={screensName.mentionAlerts} component={MentionAlerts} />
        <Tab.Screen name={screensName.followAlerts} component={FollowAlert} />
    </Tab.Navigator>
  )
}

export default TopTabsNavigation