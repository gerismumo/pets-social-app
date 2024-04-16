import React from 'react'
import {View, Text, Image} from 'react-native'


const VehicleCard = (car) => {
  return (
    <View >
        <View>
            {car.images.map((img) => (
                <Image
                key={img.image_id}
                source={img.image}
                style={{width: 100, height:150}}
                 />
            ))}
        </View>
        <Text>{car.name}</Text>
    </View>
  )
}

export default VehicleCard