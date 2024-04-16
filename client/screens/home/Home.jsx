import React, {useEffect, useRef } from 'react'
import {Text, View,ScrollView, StyleSheet} from 'react-native';
import VehicleCard from './VehicleCard';


export const cars = [
  {
    name: 'Mercedes Amg',
    price: 200000,
    images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'BMW M5',
    price: 200000,
    images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Volkwagon GTI',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Volvo',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  }, 
  {
    name: 'Audi a5',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Lexus',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Porsche Cayenne',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Dodge Challenger',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  }
  ,
  {
    name: 'Volkwagon GTI',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Volvo',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  }, 
  {
    name: 'Audi a5',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Lexus',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Porsche Cayenne',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
  {
    name: 'Dodge Challenger',
    price: 200000,
     images: [
      {
        image_id: 1,
        image: require('../../assets/images/car1.jpg'),
      },
      {
        image_id: 2,
        image: require('../../assets/images/gt1.jpeg')
      },
      {
        image_id: 3,
        image: require('../../assets/images/gt2.jpeg'),
      },
      {
        image_id: 4,
        image: require('../../assets/images/bnw1.jpg'),
      }
    ],
    engine_type: 'V8',
    price:'2,000,000',
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  }
]

const Home = ({navigation}) => {
    const scrollViewRef = useRef(null);
    React.useEffect(() => {
        
        const refresHomePage = navigation.addListener('tabPress', () => {
            scrollViewRef.current.scrollTo({ y: 0, animated: true });
        });
    
        return refresHomePage;
      }, [navigation]);

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View style={styles.postsContainer}>
        {cars.map((car,index) => (
          <VehicleCard key={index} {...car} index={index}/>
        ))}
      </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  }
})

export default Home