import React from 'react'
import {View,Text, TouchableHighlight, StyleSheet } from 'react-native'
import colors from '../../../services/colors'


const ChatScreenHeader = ({navigation, route}) => {

  return (
    <View style={styles.container}>
        <TouchableHighlight
        onPress={() => navigation.goBack()}
        underlayColor={colors.white}
        style={styles.backBtn}
        >
            <View>
                <Text>Back</Text>
            </View>
        </TouchableHighlight>
        <View>
            <Text>{route.params.name}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    backBtn: {
        padding: 10,
    }
})

export default ChatScreenHeader