import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { screensName } from '../../AppNavigator';
import HomeHeader from '../../customs/HomeHeader';
import Home from '../Home';
import Message from '../Message';

export const Drawer = createDrawerNavigator();

const HomeDrawer= () => {
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

export default HomeDrawer