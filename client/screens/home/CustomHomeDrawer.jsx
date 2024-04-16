import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Profile from '../profile/Profile'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileHeader from '../profile/ProfileHeader'

const CustomHomeDrawer = ({ navigation }) => {
    const handleCloseDrawer = () => {
        navigation.closeDrawer();
      };
  return (
    <ScrollView>
        <View>
            <ProfileHeader/>
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={handleCloseDrawer}>
                <Text style={{ fontSize: 16 }}>Close</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    
  )
}

export default CustomHomeDrawer