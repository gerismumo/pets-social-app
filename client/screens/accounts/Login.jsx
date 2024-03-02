import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, TouchableHighlight,TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

const Login = () => {
    const [isChecked, setChecked] = useState(false);
    const [userDetail, setUserDetail] = useState('');
    const [password, setPassword] = useState('');

  return (
        <View style={styles.container}>
            <View style={styles.login}>
                <View style={styles.frontText}>
                    <Text style={styles.wel}>Welcome again</Text>
                </View>
                <View style={styles.loginForm}>
                    <View style={styles.formInputs}>
                        <TextInput 
                        style={styles.input}
                        placeholder='email or phone number'
                        />
                        <TextInput 
                        style={styles.input}
                        placeholder='password'
                        />
                    </View>
                    <View style={styles.forgot}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#387ADF' : undefined}
                        />
                        <Text style={styles.forgotText}>Forgot password</Text>
                    </View>
                    <View>
                        <TouchableHighlight style={styles.loginBtn}
                        underlayColor='#FF8080'
                        onPress={() => alert('Pressed!')}
                        >
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis eum enim velit ratione placeat at, omnis nulla, repudiandae adipisci molestias neque odit distinctio libero. Aperiam animi eligendi autem ad nostrum?</Text>
                </View>
            </View>

        </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    frontText: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wel: {
        fontSize: 30,

    },
    login: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
       
    },
    loginForm: {
        flexDirection: 'column',
        width: 300,
        justifyContent: 'flex-start',
        gap: 15,
    },
    formInputs: {
        flexDirection: 'column',
        gap: 30,
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
      forgot: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginLeft: 10,
        
      },
      forgotText: {
        fontSize: 18,
      },
      loginBtn: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8080',
        borderRadius: 6,
        paddingVertical: 12,
      },
      loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      }
})

export default Login