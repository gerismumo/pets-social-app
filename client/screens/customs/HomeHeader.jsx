import React from 'react'
import { Text ,View, StyleSheet, TouchableHighlight, Image} from 'react-native'
import { AppTitle } from '../../services/appName'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faComment} from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { notification, screensName } from '../AppNavigator';
import Profile from './Profile';

const HomeHeader = ({navigation}) => {
    const iconSize = 25;
    
  return (
    <View style={styles.container}>
        <Profile />
        {/* <TouchableHighlight 
        onPress={() => navigation.navigate(screensName.profile)}
        style={{ width: 40, height: 40, borderRadius: 25, overflow: 'hidden' }}>
            <Image
            source={require('../../assets/images/IMG_20220506_102409.jpg')}
            style={{ width: '100%', height: '100%' }}
            />
        </TouchableHighlight> */}
        <View>
            <Text style={styles.title}>{AppTitle}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.primary,
    },
    notificationMessages: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
    }
})
export default HomeHeader