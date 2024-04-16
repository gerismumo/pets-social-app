import React, { useState } from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import { icon } from '@fortawesome/fontawesome-svg-core';
import icons from '../../services/icons';



const VehicleCard = (car) => {
    const [currentImagePosition, setCurrentPosition] = useState(0)

    const goToPreviousImage =() =>{
        setCurrentPosition((prev) => (prev === 0 ? car.images.length -1 : prev -1));
    }
    const goToNextImage =() =>{
        setCurrentPosition((prev) => (prev === car.images.length -1? 0 : prev +1));
    }

    const arrowIcon = 25;
  return (
    <View style={styles.container} >
        <View style={styles.imageCard}>
            <TouchableWithoutFeedback
            onPress={() => goToPreviousImage()}
            >
                <View style={styles.prevBtn}>
                    <FontAwesomeIcon  icon={faAngleLeft} size={arrowIcon} color={colors.grey} />
                </View>
            </TouchableWithoutFeedback>
                <Image
                key={car.images[currentImagePosition].image_id}
                source={car.images[currentImagePosition].image}
                style={{width: '100%', height:'100%', position:"relative"}}
                />
            <TouchableWithoutFeedback
            onPress={() => goToNextImage()}
            >
                <View style={styles.nextBtn}>
                    <Text style={{fontSize: 30}}>{icons.arrowLeft}</Text>
                    {/* <FontAwesomeIcon icon={faAngleRight} size={arrowIcon} color={colors.grey} /> */}
                </View>
            </TouchableWithoutFeedback>
                
        </View>
        <Text>{car.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.white,
        position: 'relative'
    },
    imageCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: 100,
        height:150,
    },
    image: {
        position: 'relative',
    },
    prevBtn: {
        position: 'absolute',
        left: 0,
        zIndex:1
    },
    nextBtn: {
        position: 'absolute',
        right: 0,
        zIndex:1
    },
})

export default VehicleCard