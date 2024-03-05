import React,{useState, useEffect} from 'react'
import { View, Text, ActivityIndicator,  StyleSheet } from 'react-native';
import Login from '../accounts/Login';
import { AppTitle } from '../../services/appName';
import colors from '../../services/colors';


const Loader = ({navigation}) => {
  const[loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisible(false);
      navigation.navigate('Main');
    }, 2000);
  }, []);
  return (
    <>
    {loaderVisible ? (
      <View style={styles.container}>
          <Text style={styles.title}>{AppTitle}</Text>
          <ActivityIndicator size='large' color="#000000" className='text-[40px]'/>
      </View>
    ): <Login />}
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