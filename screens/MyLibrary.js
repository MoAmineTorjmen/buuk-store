import { View, Text, Image,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../assets/colors/pColors'

const MyLibrary = () => {

  const eBook =[ 
    {name : "Game Of Thrones", img : "https://bdi.dlpdomain.com/album/9782205082944-couv.jpg"},
    {name : "The Witcher", img : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrq6cRK12zrAuOlcUjC7auIPLMdvUJSlS0IzoYkaGF5mOYFim1"},
    {name : "Six of Crows", img : "https://cdn.cultura.com/cdn-cgi/image/width=768/media/pim/TITELIVE/63_9782017038375_1_75.jpg"},
    {name : "Harry Potter", img : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT99IrfJ3_BVvv08GQfE1GO0w7fXygEag5pblx5mb3ItWfmuUa4"},
    {name : "Lost", img : "https://m.media-amazon.com/images/P/0545928117.01._SCLZZZZZZZ_SX500_.jpg"},
  ]
  return (
    <View style={styles.Container}>
      <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
      <View style={styles.ReadinBookView}>
        <Image source={require("../assets/images/icons/book-image.png")} style={{opacity:0.7}} />
        <Text style={styles.TextReadinBookView}>You don't have a book</Text>
        <TouchableOpacity style={styles.ButtonReadinBookView}>
          <Text  style={styles.TextButtonReadinBookView}>Shop now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bookList}>
        <Text style={[styles.TextReadinBookView,{letterSpacing:1}]}>Ebook For You</Text>
        <Text style={[styles.TextReadinBookView,{fontSize:15,letterSpacing:0,fontWeight:"300",marginTop:0}]}>Lorem Ipsum is simply dummy text of the printing </Text>
        <FlatList 
          style={{marginTop:30}}
          data={eBook}
          renderItem={({item}) =>(  
            <TouchableOpacity>
              <View style={{marginRight:10}}>
                <Image source={{uri:item.img}} style={{width:120,height:190}}/>
                <Text style={{fontSize:15,width:120 }}>{item.name}</Text>
              </View>      
            </TouchableOpacity>
           )}
           horizontal
           showsHorizontalScrollIndicator = {false} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container :
  {
    flex:1,
  },
  backgroundImage:
  {
      width:"100%",
      height:"100%",
      position:'absolute',
      opacity:0.5,
  },
  ReadinBookView :
  {
    alignItems:'center',
    marginTop:150,
  },
  TextReadinBookView :
  {
    marginTop:25,
    fontSize:20,
    fontWeight:'500',
    color:COLORS.darkBlue,
    letterSpacing:1.5,
  },
  TextButtonReadinBookView:
  {
    fontWeight:'300',
    color:COLORS.white,
    fontSize:16,
    letterSpacing:1.5
  },
  ButtonReadinBookView :
  {
    backgroundColor:COLORS.lightBlue,
    paddingHorizontal:22,
    paddingVertical:12,
    borderRadius:8,
    marginTop:25,
  },
  bookList :
  {
    marginTop:25,marginLeft:20
  } 
});

export default MyLibrary