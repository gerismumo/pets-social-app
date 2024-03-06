import React from 'react'
import { Text ,View, StyleSheet, TouchableHighlight} from 'react-native'
import { AppTitle } from '../../services/appName'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faComment} from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { notification, screensName } from '../AppNavigator';

const HomeHeader = ({navigation}) => {
    const iconSize = 25;
    
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{AppTitle}</Text>
        </View>
        <View style={styles.notificationMessages}>
            <TouchableHighlight
            onPress={() => navigation.navigate(screensName.notifiactions)}
            underlayColor={colors.white}
            >
            <FontAwesomeIcon icon={faBell} size={iconSize}  />
            </TouchableHighlight>
            <TouchableHighlight
            onPress={() => navigation.navigate('messager')}
            underlayColor={colors.white}
            >
            <FontAwesomeIcon icon={faComment} size={iconSize} color={colors.secondary} />
            </TouchableHighlight>
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
        paddingVertical: 8,
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