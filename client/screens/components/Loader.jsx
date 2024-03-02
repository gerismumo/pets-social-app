import React,{useState, useEffect} from 'react'
import { View, Text, ActivityIndicator,  StyleSheet } from 'react-native';
import Login from '../accounts/Login';


const Loader = () => {
  const[loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisible(false);
    }, 2000);
  }, []);
  return (
    <>
    {loaderVisible ? (
      <View style={styles.container}>
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
})

export default Loader