import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Profile from './Profile'
import colors from '../../services/colors'

const MessageHeader = () => {
  return (
    <View style={styles.container}>
        <Profile />
        <View style={styles.details}>
            <TextInput
            placeholder='search messages'
            style={styles.searchBar}
            />
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
    },
    searchBar:{
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 3,
        paddingHorizontal: 5,
        fontSize: 17,
    }
})

export default MessageHeader