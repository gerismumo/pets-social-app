import React, { useState } from 'react'
import {View, Text, Image, StyleSheet,Platform , TouchableWithoutFeedback} from 'react-native'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faAngleRight, faAngleLeft, faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from '@react-navigation/native'
import { screensName } from '../Tabs/AppNavigator';


const VehicleCard = (car) => {
    const navigation = useNavigation();
    //usestates
    const [currentImagePosition, setCurrentPosition] = useState(0);
    const [likePost, setLikePost] = useState(false);

    //viewing imags backwords and forwards
    const goToPreviousImage =() =>{
        setCurrentPosition((prev) => (prev === 0 ? car.images.length -1 : prev -1));
    }
    const goToNextImage =() =>{
        setCurrentPosition((prev) => (prev === car.images.length -1? 0 : prev +1));
    }

//arrow icon size
    const arrowIcon = 25;
    
    //like post funcs
    const[likedPostId, setLikedPostId] = useState(null);
    const handleLikePost= (index) => {
        setLikedPostId(index);
        if(likePost){
            setLikePost(false);
        }else{
            setLikePost(true);
        }
    }

    

  return (
    <View style={styles.container} >
        <TouchableWithoutFeedback 
        onPress={() => handleLikePost(car.index)}
        >
            <View style={{position:"absolute", zIndex: 1, top:0, right:5}}>
                {likePost && likedPostId === car.index ? (
                    <FontAwesomeIcon icon={faHeartSolid} size={25} color='red' />
                ): (
                    <FontAwesomeIcon icon={faHeart} size={25} color={colors.preSecondary}  />
                )}
            </View>
        </TouchableWithoutFeedback>
        <View style={styles.imageCard}>
            <TouchableWithoutFeedback
            onPress={() => goToPreviousImage()}
            >
                <View style={styles.prevBtn}>
                    <FontAwesomeIcon  icon={faAngleLeft} size={arrowIcon} color={colors.secondary} />
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
                    <FontAwesomeIcon icon={faAngleRight} size={arrowIcon} color={colors.secondary} />
                </View>
            </TouchableWithoutFeedback>
                
        </View>
        <View style={styles.postContent}>
            <View style={styles.postText}>
                <Text style={styles.postTitleText}>{car.name}</Text>
                <Text style={styles.postPriceText}>Ksh {car.price}</Text>
            </View>
            <View>
                <TouchableWithoutFeedback
                onPress={() => navigation.navigate(screensName.viewPostData, car)}
                >
                    <View style={styles.viewBtn}>
                        <Text style={styles.viewText}>View More</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // borderColor:'#ddd',
        // borderWidth: 1,
        borderRadius: 4,
        backgroundColor: colors.white,
        position: 'relative',
        width: 180,
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            android: {
              elevation: 5,
            },
          }),
    },
    imageCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: 180,
        height:150,
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
        zIndex:1
    },
    nextBtn: {
        position: 'absolute',
        right: 0,
        zIndex:1
    },
    postContent: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        gap: 10,
    },
    postText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    postTitleText: {
        fontSize: 14,
        fontWeight: '600'
    },
    postPriceText: {
        fontSize: 13,
        fontWeight: '400'
    },
    viewBtn: {
        width: '100%',
        backgroundColor: '#4A55A2',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 6,
    },
    viewText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 13,
    }
})

export default VehicleCard