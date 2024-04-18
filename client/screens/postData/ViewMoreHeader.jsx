import React from 'react'
import { View, Text, TouchableWithoutFeedback,  StyleSheet } from 'react-native'

const ViewMoreHeader = (props) => {
    const car = props.route.params;
    const navigation = props.navigation;
    // console.log(props.navigation)
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback
        onPress={() => navigation.goBack()}
        >
            <View>
                <Text>Back</Text>
            </View>
        </TouchableWithoutFeedback>
        <View>
            <Text>{car.name}</Text>
        </View>
        <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    backBtn: {
        padding: 10,
    }
})

export default ViewMoreHeader