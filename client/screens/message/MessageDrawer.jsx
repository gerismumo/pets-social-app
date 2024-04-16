import React from 'react'
import { screensName } from '../Tabs/AppNavigator';
import Message from './Message';
import MessageHeader from './MessageHeader';
import { Drawer } from '../home/HomeDrawer';
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