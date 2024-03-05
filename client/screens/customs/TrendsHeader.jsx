import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import colors from '../../services/colors'

const TrendsHeader = () => {
  return (
    <View style={styles.container}>
        <TextInput 
        placeholder='search'
        style={styles.inputSearch}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    inputSearch: {
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal:12,
        paddingVertical: 3,
        width: '100%',
        borderColor: colors.primary,
    }
})

export default TrendsHeader
