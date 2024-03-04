import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, TouchableHighlight,TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import colors from '../../services/colors';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../feactures/loginSlice';

const SignUp = ({navigation}) => {
    const dispatch = useDispatch();
    const [isChecked, setChecked] = useState(false);
    const [userDetail, setUserDetail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmitData = () => {
        if(userDetail === '' || password === '' || confirmPassword === '') {
           return setError('fill all the details');
        }

        if(password!== confirmPassword) {
            return setError('passwords do not match');
        }
       

        const data ={
            userDetail,
            password
        }

        dispatch(loginUser(data));

    }


  return (
        <View style={styles.container}>
            <View style={styles.login}>
                <View style={styles.frontText}>
                    <Text style={styles.wel}>PetPals</Text>
                </View>
                <View style={styles.loginForm}>
                    <View style={styles.formHeading}>
                        <Text style={styles.formHeadingText}>Create your Account</Text>
                    </View>
                    {error !== '' && (
                        <View style={styles.error}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    )}
                    <View style={styles.normalLogin}>
                        <View style={styles.formInputs}>
                            <TextInput 
                            onChangeText={text => {
                                setUserDetail(text);
                                if(text !== '' && password !== '') {
                                    setError('')
                                }
                            }}
                            value={userDetail.toLocaleLowerCase()}
                            style={styles.input}
                            placeholder='email or phone number'
                            />
                            <TextInput 
                            onChangeText={text => {
                                setPassword(text);
                                if(text !== '' && password !== '') {
                                    setError('');
                                }
                            }}
                            value={password}
                            style={styles.input}
                            placeholder='password'
                            />
                            <TextInput 
                            onChangeText={text => {
                                setConfirmPassword(text);
                                if(text !==  password) {
                                    setError('password should match');
                                }else {
                                  setError('')
                                }
                            }}
                            value={confirmPassword}
                            style={styles.input}
                            placeholder='Confirm password'
                            />
                        </View>
                        <View>
                            <TouchableHighlight  style={styles.loginBtn}
                            underlayColor={colors.secondary}
                            onPress={() => handleSubmitData()}
                            >
                                <Text style={styles.loginText}>Sign up</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View styles={styles.middleText}>
                    <Text style={styles.orText}>Or</Text>
                </View>
                <View style={styles.otherLogin}>
                    <TouchableHighlight style={styles.signGoogle}>
                        <View style={styles.signUpBtn}>
                            <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../../assets/images/google.png')}
                            />
                            <Text style={styles.signGText}>Sign up with Google</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/* <View style={styles.signUp}>
                    <Text style={styles.signUpText}>Don't have an Account? </Text>
                    <TouchableHighlight  
                    onPress={() => navigation.navigate('SignUp')}
                    ><Text style={styles.signUpLink}>Sign up</Text></TouchableHighlight>
                </View> */}
            </View>

        </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
    },
    
    login: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
       
    },
    frontText: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wel: {
        fontSize: 50,
        fontWeight:'800',
        color: colors.primary,
    },
    loginForm: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        gap: 10,
    },
    formHeading: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 15,
    },
    formHeadingText: {
        fontSize: 20,
        fontWeight: '600',
    },
    error: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText:{
        color: 'red'
    },
    normalLogin: {
        gap: 20,
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
      },
      forgotText: {
        fontSize: 18,
        color: colors.lighBlue,
      },
      loginBtn: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 6,
        paddingVertical: 12,
      },
      loginText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.white,
      },
      otherLogin: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
      },
      middleText: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      orText: {
        fontSize: 18,
      },
      signGoogle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 1,
        paddingVertical: 15,
        borderRadius: 6,
      },
      signUpBtn: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
      },
      signGText: {
        fontSize: 18,
      },
      signUp: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      signUpText: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
      },
      signUpLink: {
        color: colors.lighBlue,
        fontSize: 18,
      }
})

export default SignUp