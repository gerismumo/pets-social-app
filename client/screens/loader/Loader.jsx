import React,{useState, useEffect} from 'react'
import { View, Text, ActivityIndicator,  StyleSheet } from 'react-native';
import Login from '../auth/login/Login';
import { AppTitle } from '../../services/appName';
import colors from '../../services/colors';
import { main, screensName } from '../Tabs/AppNavigator';
import { useSelector } from 'react-redux';


const Loader = ({navigation}) => {
  const[loaderVisible, setLoaderVisible] = useState(true);

  //states
  const loginStates = useSelector((state) => state.account);
  const contentStates = useSelector((state) => state.content);

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisible(false);
      if(contentStates.success){
        navigation.navigate(screensName.main);
      }else {
        navigation.navigate(screensName.login);
      }
    }, 2000);
  }, []);
  return (
    <>
      <View style={styles.container}>
          <Text style={styles.title}>{AppTitle}</Text>
          <ActivityIndicator size='large' color="#000000" className='text-[40px]'/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight:'800',
    color: colors.primary,
  }
})

export default Loader