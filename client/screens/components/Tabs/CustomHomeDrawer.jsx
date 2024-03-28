import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Profile from '../../customs/Profile'
import { ScrollView } from 'react-native-gesture-handler'

const CustomHomeDrawer = ({ navigation }) => {
    const handleCloseDrawer = () => {
        navigation.closeDrawer();
      };
  return (
    <ScrollView>
        <View>
            <Profile/>
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={handleCloseDrawer}>
                <Text style={{ fontSize: 16 }}>Close</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    
  )
}

export default CustomHomeDrawer