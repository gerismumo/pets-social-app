import React from 'react'
import { TouchableHighlight , Image, Text,View, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'



const ProfileHeader = () => {
    const navigation = useNavigation()
  return (
    <View >
         <TouchableHighlight 
        style={{ width: 40, height: 40, borderRadius: 25, overflow: 'hidden' }}>
            <Image
            source={require('../../assets/images/IMG_20220506_102409.jpg')}
            style={{ width: '100%', height: '100%' }}
            />
        </TouchableHighlight>
        <View>
        </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default ProfileHeader