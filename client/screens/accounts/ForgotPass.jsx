import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import colors from '../../services/colors';

const ForgotPass = () => {
  return (
    <View style={styles.container}>
        <View style={styles.forgotDetail}>
            <View style={styles.emailInput}>
                <Text style={styles.label}>Email:</Text>
                <TextInput 
                placeholder='eg. examble@gmail.com'
                style={styles.input}
                />
            </View>
            
            <TouchableHighlight
            style={styles.resetBtn}
            >
                <Text style={styles.btnText}>Reset</Text>
            </TouchableHighlight>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        padding: 10,
    },
    forgotDetail: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 10,
        fontSize: 20,
      },
      emailInput: {
        display: "flex",
        flexDirection: 'column',
        gap: 10,
      },
      label: {
        fontSize:20,
        fontWeight: '500',
      },
      resetBtn: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 6,
        paddingVertical: 12,
      },
      btnText: {
        fontSize: 25,
        fontWeight: '600',
        color: colors.white,
      }
})
export default ForgotPass;