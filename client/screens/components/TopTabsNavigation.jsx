import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { screensName } from '../AppNavigator';
import AllAlerts from './Alerts/AllAlerts';
import MentionAlerts from './Alerts/MentionAlerts';
import FollowAlert from './Alerts/FollowAlert';
import { TabBarItem } from 'react-native-tab-view';
import colors from '../../services/colors';
import { View, Text } from 'react-native';
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
      tabBarIndicatorStyle: { backgroundColor: colors.secondary},
      tabBarIndicatorContainerStyle:  { backgroundColor: colors.white},
    }}
    >
        <Tab.Screen name={screensName.allAlerts} component={AllAlerts} 
        options={{
          tabBarLabel: "All",
          // tabBarBadge: () => (
          //   <View >
          //     <Text>6</Text>
          //   </View>
          // )
        }}
        />
        <Tab.Screen name={screensName.mentionAlerts} component={MentionAlerts} 
        options={{
          tabBarLabel: "Mentions",
        }}
        />
        <Tab.Screen name={screensName.followAlerts} component={FollowAlert}
         options={{
          tabBarLabel: "Follow",
        }}
         />
    </Tab.Navigator>
  )
}

export default TopTabsNavigation