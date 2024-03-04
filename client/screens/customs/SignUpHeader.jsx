import React from 'react'
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import {useNavigation } from '@react-navigation/native'
import colors from '../../services/colors';
import Icons from '../../services/Icons';




const SignUpHeader = () => {
const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
        <TouchableHighlight
        underlayColor={colors.white}
         onPress={() => navigation.navigate('Login')} 
         style={styles.backContainer}
         >
            <View>
                <Text style={styles.headerText}>{Icons.arrowLeft}</Text>
            </View>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        padding: 10,
        width: '100%',
    },
    backContainer: {
        backgroundColor: colors.white,
        justifyContent:'flex-start',
    },
    headerText: {
        color: colors.black,
    }
})

export default SignUpHeader;
