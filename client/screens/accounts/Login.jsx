import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';

const Login = () => {
  return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text>Welcome again</Text>
                <TextInput 
                style={styles.input}
                placeholder='email or phone number'
                />
                <TextInput 
                style={styles.input}
                placeholder='password'
                />
                <View style={styles.forgot}>
                    <Text>Forgot password</Text>
                </View>
            </View>

        </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%'
      },
      forgot: {
        flexDirection: 'flex',
        alignItems: 'center',
        gap: 10,
      }
})

export default Login