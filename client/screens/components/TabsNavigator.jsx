import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Posts from './Posts';
import Trends from './Trends';
import Profile from './Profile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import colors from '../../services/colors';
import {faSquarePlus} from '@fortawesome/free-regular-svg-icons';
import {Image, View, Text} from 'react-native'
import TrendsHeader from '../customs/TrendsHeader';

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
        <Tab.Screen name='Home' component={Home} 
        options={{
            title: 'Home',
            tabBarIcon: ({ color, size, focused }) =>(
                <FontAwesomeIcon icon={faHouse} size={iconSize} color={focused ? colors.black : colors.black} />
            ),
            tabBarAccessibilityLabel: 'Accessibility',
            header: ({ navigation, route, options }) => {
                const title = route.name; 
                return <CustomHeader title={title} />;
              },
        }}
        />
        <Tab.Screen name='Posts' component={Posts}
        options={{
            tabBarIcon: ({ color, size, focused }) =>(
                <FontAwesomeIcon icon={faSquarePlus} size={iconSize }  color={focused ? colors.black : colors.black}  />
            ),
        }} 
        />
        <Tab.Screen name='trends' component={Trends} 
        options={{
            tabBarIcon: ({color, size, focused}) => (
                <FontAwesomeIcon icon={faMagnifyingGlass} size={iconSize} color={focused ? colors.black : colors.black}  />
            ),
            header: () => {
                return <TrendsHeader/>
            }
        }}
        />
        <Tab.Screen name='profile' component={Profile} 
        options={{
            tabBarIcon: () => (
                <View style={{ width: 30, height: 30, borderRadius: 15, overflow: 'hidden' }}>
                    <Image
                    source={require('../../assets/images/IMG_20220506_102409.jpg')}
                    style={{ width: '100%', height: '100%' }}
                    />
                </View>
            ),
            // tabBarIconStyle: {
            //     borderRadius: 15,
            // }
        }}
        />
    </Tab.Navigator>
  )
}

export default TabsNavigator