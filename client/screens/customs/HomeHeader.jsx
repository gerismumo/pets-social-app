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
        <View style={styles.headerContent}>
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
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary,
    },
    
})
export default HomeHeader