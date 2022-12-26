import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'

const BookStore = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
        <Text >BookStore</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundImage:
    {
        width:"100%",
        height:"100%",
        position:'absolute',
        opacity:0.6
    } 
     
  });

export default BookStore