import React from 'react'
import { screensName } from '../../AppNavigator';
import Message from '../Message';
import MessageHeader from '../../customs/MessageHeader';
import { Drawer } from './HomeDrawer';




const MessageDrawer = () => {
   
    
  return (
    <Drawer.Navigator
    screenOptions={{
        header: props => <MessageHeader{...props} />
    }}
    >
        <Drawer.Screen name='message' component={Message} 
        options={{
            drawerLabel: 'message drawers',
        }}
        />
    </Drawer.Navigator>
  )
}

export default MessageDrawer