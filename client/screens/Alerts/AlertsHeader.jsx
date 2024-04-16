import React from 'react'
import { View, Text, TouchableHighlight , StyleSheet} from 'react-native'
import colors from '../../services/colors'
import { useNavigation } from '@react-navigation/native'

const AlertsHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Alerts</Text>
        </View>
        {/* <View style={styles.alertNotifications}>
            <TouchableHighlight
            underlayColor={colors.white}
            onPress={() => navigation.navigate(screensName.allAlerts)}
            
            >
                <Text style={styles.alertText}>All</Text>
            </TouchableHighlight>
            <TouchableHighlight
            underlayColor={colors.white}
             onPress={() => navigation.navigate(screensName.mentionAlerts)}
            >
                <Text style={styles.alertText}>Mentions</Text>
            </TouchableHighlight>
            <TouchableHighlight
            underlayColor={colors.white}
             onPress={() => navigation.navigate(screensName.followAlerts)}
            >
                <Text style={styles.alertText}>Follows</Text>
            </TouchableHighlight>
        </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 20,
        backgroundColor: colors.white,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '700',

    },
    alertNotifications: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    alertText: {
        fontSize: 16,
        fontWeight: '400',
    }
})

export default AlertsHeader