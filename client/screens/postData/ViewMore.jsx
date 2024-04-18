import React, { useState } from 'react'
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const ViewMore = (props) => {
    const car = props.route.params;

    const [currentImagePosition, setCurrentPosition] = useState(0);
    const [likePost, setLikePost] = useState(false);

    //viewing imags backwords and forwards
    const goToPreviousImage =() =>{
        setCurrentPosition((prev) => (prev === 0 ? car.images.length -1 : prev -1));
    }
    const goToNextImage =() =>{
        setCurrentPosition((prev) => (prev === car.images.length -1? 0 : prev +1));
    }
  return (
    <View style={styles.container}>
        <Text>{car.name}</Text>
          <View style={styles.imageCard}>
            <TouchableWithoutFeedback
            onPress={() => goToPreviousImage()}
            >
                <View style={styles.prevBtn}>
                  {/* <Text>prev</Text> */}
                </View>
            </TouchableWithoutFeedback>
                <Image
                key={car.images[currentImagePosition].image_id}
                source={car.images[currentImagePosition].image}
                style={styles.image}
                />
            <TouchableWithoutFeedback
            onPress={() => goToNextImage()}
            >
                <View style={styles.nextBtn}>
                {/* <Text>next</Text> */}
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.imageDots}>
              {car.images.map((img,index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faCircle}
                  size={7}
                  color={currentImagePosition === index ? 'white' : 'gray'}
                />
              ))}
            </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageCard: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '80%',
    height: 400,
    justifyContent: 'center',
},
image: {
    width: '100%',
    height:'100%', 
    position:"relative",
    borderRadius:4,
},
prevBtn: {
  position: 'absolute',
  left: 0,
  zIndex: 1,
  width: '45%',
  height: '100%',
  // backgroundColor:'#ddd'
},
nextBtn: {
    position: 'absolute',
    right: 0,
    zIndex:1,
    width: '45%',
    height: '100%',
    // backgroundColor:'#ddd'
},
imageDots: {
  position: 'absolute', 
  bottom: 5,
  display: 'flex',
  flexDirection: 'row',
  gap: 2,
}
})

export default ViewMore