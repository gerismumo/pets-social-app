import React from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../services/colors';
import icons from '../../../services/icons';
import { screensName } from '../../Tabs/AppNavigator';


const SignUpHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={colors.white}
        onPress={() => navigation.navigate(screensName.login)}
        style={styles.backContainer}
      >
       {icons.arrowLeft}
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
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%',
  },
  backContainer: {
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
})

export default SignUpHeader;
