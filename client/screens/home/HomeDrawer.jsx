import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { screensName } from '../Tabs/AppNavigator';
import HomeHeader from './HomeHeader';
import Home from './Home';
import CustomHomeDrawer from './CustomHomeDrawer';

export const Drawer = createDrawerNavigator();

const HomeDrawer= () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomHomeDrawer {...props} />}
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