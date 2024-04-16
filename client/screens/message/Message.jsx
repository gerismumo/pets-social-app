import React from 'react'
import { Text, View ,Image, StyleSheet} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import colors from '../../services/colors'
import { useNavigation } from '@react-navigation/native'
import { screensName } from '../Tabs/AppNavigator'

const Message = () => {
  const peopleChats= [
    {
      name: 'John',
      image: require('../../assets/images/IMG_20220506_102409.jpg')
    },
    {
      name: 'Doe',
      image: require('../../assets/images/IMG_20220506_102409.jpg')
    },
    {
      name: 'Gerald',
      image: require('../../assets/images/IMG_20220506_102409.jpg')
    },
]

const navigation = useNavigation();

const handleOpenChat = (name) => {
  navigation.navigate(screensName.chatScreen, {name})
}

  return (
    <View style={styles.container}>
      {peopleChats.map((chat, index) => (
        <TouchableHighlight key={index}
          onPress={() => handleOpenChat(chat.name)}
          underlayColor={colors.white}
        style={styles.chatViews}
        >
          <View style={styles.chatCard}>
              <View
              style={{ width: 40, height: 40, borderRadius: 25, overflow: 'hidden' }}
              >
                <Image source={chat.image} style={{ width: '100%', height: '100%' }} />
              </View>
              <View style={styles.username}>
                <Text>{chat.name}</Text>
              </View>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'column',
    gap: 10,
   },
   chatViews: {
    borderColor:'#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
   },
   chatCard : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
   },
   username: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
   }
})

export default Message