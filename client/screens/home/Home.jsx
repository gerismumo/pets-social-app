import React, {useEffect, useRef } from 'react'
import {Text, View,ScrollView} from 'react-native';
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
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
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
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
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
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
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
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  }, 
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
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
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
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
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
    model:'Amg',
    model_type:'2019',
    horse_type: '660hp',
    color: 'Grey',
  },
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
    <ScrollView ref={scrollViewRef}>
      <View>
        {cars.map((car,index) => (
          <VehicleCard key={index} {...car}/>
        ))}
      </View>
    </ScrollView>
    
  )
}

export default Home