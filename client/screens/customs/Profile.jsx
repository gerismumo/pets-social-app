import React from 'react'
import { TouchableHighlight , Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screensName } from '../AppNavigator'


const Profile = () => {
    const navigation = useNavigation()
  return (
    <TouchableHighlight 
    onPress={() => navigation.navigate(screensName.profile)}
    style={{ width: 40, height: 40, borderRadius: 25, overflow: 'hidden' }}>
        <Image
        source={require('../../assets/images/IMG_20220506_102409.jpg')}
        style={{ width: '100%', height: '100%' }}
        />
    </TouchableHighlight>
  )
}

export default Profile