import React, {useEffect} from 'react'
import {Text, View} from 'react-native';

const Home = ({navigation}) => {

    React.useEffect(() => {
        const refresHomePage = navigation.addListener('tabPress', () => {
         console.log('hom etabe prese')
        });
    
        return refresHomePage;
      }, [navigation]);

  return (
    <View>
        <Text>Home page</Text>
    </View>
  )
}

export default Home