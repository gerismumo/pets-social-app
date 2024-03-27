import React, {useState} from 'react'
import { TextInput, View,Text, StyleSheet,TouchableHighlight } from 'react-native'
import colors from '../../services/colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass,  faXmark} from "@fortawesome/free-solid-svg-icons";

const TrendsHeader = () => {
  const[isFocus, setIsFocus] = useState(false)
  const[searchData, setSearchData] = useState('')
  const borderColor  = isFocus ? colors.prePrimary: colors.black
  const iconSize = 18;

  const handleCancelSearch =() => {
    if(isFocus) {
      setIsFocus(false)
    }
    setSearchData('')
  }

  const handleSearch = () => {
    setIsFocus(true)
  }

  return (
    <View style={styles.container}>
         <View style={[styles.details, {borderColor }]}>
            <TextInput
            placeholder='search messages'
            onChangeText={setSearchData}
            value={searchData}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            style={styles.searchBar}
            />
            <TouchableHighlight style={styles.controlBtn}
            underlayColor={colors.white}
            onPress={() => setIsFocus(false)}
            >
               <View>
                {isFocus ? (
                  <TouchableHighlight 
                  onPress={handleCancelSearch}
                  underlayColor={colors.white}
                  >
                    <FontAwesomeIcon size={iconSize} color='red' icon={faXmark} />
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight 
                  underlayColor={colors.white}
                  onPress={handleSearch}
                  >
                    <FontAwesomeIcon size={iconSize} icon={faMagnifyingGlass} />
                  </TouchableHighlight>
                )}
              </View>
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
      // borderColor: colors.black,
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
      width: '15%',
      paddingVertical: 8,
  }
})

export default TrendsHeader
