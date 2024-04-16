import React from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native';

const ViewMore = () => {
    const car = useRoute().params;
  return (
    <View>
        <Text>{car.name}</Text>
    </View>
  )
}

export default ViewMore