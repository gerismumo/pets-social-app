import React from 'react'
import { TouchableHighlight , Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screensName } from '../AppNavigator'


const Profile = () => {
    const navigation = useNavigation()
    const handleOpenDrawer = () => {
      navigation.navigate( screensName.profile, { screen: screensName.home });
      navigation.openDrawer();
    };
  return (
    <TouchableHighlight 
    onPress={handleOpenDrawer}
    style={{ width: 40, height: 40, borderRadius: 25, overflow: 'hidden' }}>
        <Image
        source={require('../../assets/images/IMG_20220506_102409.jpg')}
        style={{ width: '100%', height: '100%' }}
        />
    </TouchableHighlight>
  )
}

export default Profile