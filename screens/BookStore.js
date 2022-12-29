import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'
import { useNavigation } from '@react-navigation/native'

const BookStore = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
        <Text >BookStore</Text>
        <TouchableOpacity style={styles.ButtonReadinBookView} onPress={() => navigation.navigate("BookDetail")}>
          <Text style={styles.TextButtonReadinBookView}>Go to book details !!</Text>
        </TouchableOpacity>
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
    },
    TextButtonReadinBookView:
  {
    fontWeight:'300',
    color:COLORS.white,
    fontSize:15,
    letterSpacing:1
  },
  ButtonReadinBookView :
  {
    backgroundColor:COLORS.lightBlue,
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:5,
    marginTop:15,
    marginBottom:25,
    alignSelf:'center',
  },
     
  });

export default BookStore