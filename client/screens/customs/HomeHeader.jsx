import React from 'react'
import { Text ,View, StyleSheet, TouchableHighlight} from 'react-native'
import { AppTitle } from '../../services/appName'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faComment} from "@fortawesome/free-solid-svg-icons";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{AppTitle}</Text>
        </View>
        <TouchableHighlight
        onPress={() => alert('Message here')}
        underlayColor={colors.white}
        >
        <FontAwesomeIcon icon={faComment} size={25} color={colors.secondary} />
        </TouchableHighlight>
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
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.primary,
    }
})
export default HomeHeader