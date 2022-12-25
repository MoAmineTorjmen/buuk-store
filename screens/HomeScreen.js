import { View, Text, Image } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'

const HomeScreen = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image source={require("../assets/images/logo.png")}
              style={{width:200,height:200}}/>
    </View>
  )
}

export default HomeScreen