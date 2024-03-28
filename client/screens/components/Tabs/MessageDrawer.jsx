import React from 'react'
import { screensName } from '../../AppNavigator';
import Message from '../message/Message';
import MessageHeader from '../../customs/MessageHeader';
import { Drawer } from './HomeDrawer';
import CustomMessageDrawer from './CustomMessageDrawer';
import { useNavigation } from '@react-navigation/native'




const MessageDrawer = () => {
    const navigation = useNavigation()
    
  return (
    <Drawer.Navigator
    drawerContent= {(props) => <CustomMessageDrawer  {...props} />}
    screenOptions={{
        header: props => <MessageHeader{...props} />,
       
    }}
    >
        <Drawer.Screen name='message' component={Message} 
        options={{
            // drawerLabel: 'message drawers',
        }}
        />
    </Drawer.Navigator>
  )
}

export default MessageDrawer