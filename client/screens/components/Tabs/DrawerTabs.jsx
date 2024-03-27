import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../ProfileScreen';
import { screensName } from '../../AppNavigator';
import Profile from '../../customs/Profile';
import ProfileHeader from '../../customs/ProfileHeader';
import HomeHeader from '../../customs/HomeHeader';
import Home from '../Home';

const Drawer = createDrawerNavigator();

const DrawerTabs = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        header: props => <HomeHeader{...props}/>
    }}
    >
        <Drawer.Screen name={screensName.profile} component={Home} 
        options={{
            headerTitle: "PetPals",
            drawerLabel: 'mumo',
        }}
        />
    </Drawer.Navigator>
  )
}

export default DrawerTabs