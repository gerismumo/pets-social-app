import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Posts from './Posts';
import Trends from './Trends';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faMagnifyingGlass, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import colors from '../../services/colors';
import {faSquarePlus} from '@fortawesome/free-regular-svg-icons';
import {Image, View, Text} from 'react-native'
import TrendsHeader from '../customs/TrendsHeader';
import HomeHeader from '../customs/HomeHeader';
import { screensName } from '../AppNavigator';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import MessageHeader from '../customs/MessageHeader';
import AlertsHeader from '../customs/AlertsHeader';
import TopTabsNavigation from './TopTabsNavigation';
import DrawerTabs from './Tabs/HomeDrawer';
import MessageDrawer from './Tabs/MessageDrawer';
import Message from './message/Message';

const CustomHeader = ({ title }) => {
    return (
        <View style={{backgroundColor: colors.primary}}>
             <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'red' }}>{title}</Text>
        </View>
    );
  };




const TabsNavigator = () => {
    const Tab = createBottomTabNavigator();

    const iconSize = 23;

    const refreshHomePage = () =>{
        // alert('Refresh Home Page')
        console.log('Refresh Home Page')
    }
  return (
    <Tab.Navigator
    initialRouteName='Home'
    backBehavior='order'
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: colors.secondary,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
            paddingVertical: 10,
            paddingHorizontal: 5,
        },
        tabBarStyle: {
            position: 'relative',
        },
    }}

   
    >
        <Tab.Screen name={screensName.home} component={DrawerTabs} 
        options={{
            title: 'Home',
            tabBarIcon: ({ color, size, focused }) =>(
                <FontAwesomeIcon icon={faHouse} size={iconSize} color={focused ? colors.black : colors.black} />
            ),
            tabBarAccessibilityLabel: 'Accessibility',
            // header: ({ navigation, route, options }) => {
            //     return <HomeHeader navigation={navigation}/>
            //   },
            headerShown: false,
        }}
        />
        <Tab.Screen name={screensName.posts} component={Posts}
        options={{
            tabBarIcon: ({ color, size, focused }) =>(
                <FontAwesomeIcon icon={faSquarePlus} size={iconSize }  color={focused ? colors.black : colors.black}  />
            ),
        }} 
        />
        <Tab.Screen name={screensName.trends} component={Trends} 
        options={{
            tabBarIcon: ({color, size, focused}) => (
                <FontAwesomeIcon icon={faMagnifyingGlass} size={iconSize} color={focused ? colors.black : colors.black}  />
            ),
            header: () => {
                return <TrendsHeader/>
            }
        }}
        />
        <Tab.Screen name={screensName.notifiactions} component={TopTabsNavigation} 
        options={{
            tabBarIcon: ({color, size, focused}) => (
                <FontAwesomeIcon icon={faBell} size={iconSize} color={focused ? colors.black : colors.black}  />
            ),
           header: () => {
            return <AlertsHeader/>
           }
        }}
        />
        <Tab.Screen name={screensName.messager}  component={MessageDrawer}
        options={{
            tabBarIcon: ({color, size, focused}) => (
                <FontAwesomeIcon icon={faEnvelope} size={iconSize} color={focused ? colors.black : colors.black}  />
            ),
            headerShown: false,
        }}
        />
    </Tab.Navigator>
  )
}

export default TabsNavigator