import React from 'react'
import { TextInput, View, StyleSheet,TouchableHighlight } from 'react-native'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const TrendsHeader = () => {
  return (
    <View style={styles.container}>
         <View style={styles.details}>
            <TextInput
            placeholder='search messages'
            style={styles.searchBar}
            />
            <TouchableHighlight style={styles.controlBtn}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </TouchableHighlight>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    details: {
      flex: 1, 
      marginLeft: 10, 
      flexDirection: 'row',
      width: '100%',
      borderWidth: 1,
      borderColor: colors.black,
      borderRadius: 6,
  },
  searchBar:{
      paddingVertical: 3,
      paddingHorizontal: 5,
      fontSize: 17,
      width: '85%',
  },
  controlBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '15%'
  }
})

export default TrendsHeader
