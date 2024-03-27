import React from 'react'
import { View, StyleSheet, TextInput, TouchableHighlight, Text } from 'react-native'
import Profile from './Profile'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const MessageHeader = () => {
  return (
    <View style={styles.container}>
        <Profile />
        <View style={styles.details}>
            <TextInput
                placeholder='search messages'
                style={styles.searchBar}
            />
            <TouchableHighlight style={styles.controlBtn}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
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
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
    },
    details: {
        flex: 1, 
        marginLeft: 10, 
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 6,
    },
    searchBar:{
        paddingVertical: 3,
        paddingHorizontal: 5,
        fontSize: 17,
        width: '85%',
    },
    controlBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%'
    }
})

export default MessageHeader