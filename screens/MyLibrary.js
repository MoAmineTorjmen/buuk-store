import { View, Text, Image,StyleSheet,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../assets/colors/pColors'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 

const MyLibrary = () => {

  const eBook =[ 
    {name : "Game Of Thrones", rate : 4.9, img : "https://bdi.dlpdomain.com/album/9782205082944-couv.jpg"},
    {name : "The Witcher", rate : 4.2, img : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrq6cRK12zrAuOlcUjC7auIPLMdvUJSlS0IzoYkaGF5mOYFim1"},
    {name : "Six of Crows", rate : 2.0, img : "https://cdn.cultura.com/cdn-cgi/image/width=768/media/pim/TITELIVE/63_9782017038375_1_75.jpg"},
    {name : "Harry Potter", rate : 4.2, img : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT99IrfJ3_BVvv08GQfE1GO0w7fXygEag5pblx5mb3ItWfmuUa4"},
    {name : "Lost", rate : 3.5, img : "https://m.media-amazon.com/images/P/0545928117.01._SCLZZZZZZZ_SX500_.jpg"},
  ]
  return (

    <ScrollView style={styles.Container}>
      <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
      <View style={styles.ReadinBookView}>
        <Image source={require("../assets/images/icons/book-image-with-color.png")} style={styles.headerImageIcon} />
        <Text style={styles.TextReadinBookView}>You don't have a book</Text>
        <TouchableOpacity style={styles.ButtonReadinBookView}>
          <Text  style={styles.TextButtonReadinBookView}>SHOP NOW !</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bookList}>
        <Text style={[styles.TextReadinBookView,{letterSpacing:1,fontSize:18}]}>Ebook For You</Text>
        <Text style={[styles.TextReadinBookView,{fontSize:13,letterSpacing:0,fontWeight:"300",marginTop:0}]}>Lorem Ipsum is simply dummy text of the printing </Text>
        <FlatList 
          style={{marginTop:10, }}
          data={eBook}
          renderItem={({item}) =>(  
            <TouchableOpacity>
              <View style={{marginRight:10}}>
                <Image source={{uri:item.img}} style={styles.itemImageOfList}/>
                <View style={styles.itemTextViewOfList}>
                  <Text style={styles.itemTextsOfList}>{item.name}</Text>
                  <Text style={styles.itemTextsOfList}>Rate : {item.rate} <AntDesignIcon name="star" size={14} color={COLORS.yellow} /> </Text>
                  
                </View>
              </View>      
            </TouchableOpacity>
           )}
           horizontal
           showsHorizontalScrollIndicator = {false} />
      </View>
      <View style={ styles.bookList }>
        <Text style={[styles.TextReadinBookView,{letterSpacing:1,fontSize:18}]}>Fantasy Ebook</Text>
        <Text style={[styles.TextReadinBookView,{fontSize:13,letterSpacing:0,fontWeight:"300",marginTop:0}]}>Lorem Ipsum is simply dummy text of the printing </Text>
        <FlatList 
          style={{marginTop:10, }}
          data={eBook}
          renderItem={({item}) =>(  
            <TouchableOpacity>
              <View style={{marginRight:10}}>
                <Image source={{uri:item.img}} style={styles.itemImageOfList}/>
                <View style={styles.itemTextViewOfList}>
                  <Text style={styles.itemTextsOfList}>{item.name}</Text>
                  <Text style={styles.itemTextsOfList}>Rate : {item.rate} <AntDesignIcon name="star" size={14} color={COLORS.yellow} /> </Text>
                  
                </View>
              </View>      
            </TouchableOpacity>
           )}
           horizontal
           showsHorizontalScrollIndicator = {false} />
      </View>

      <View style={[styles.bookList,{marginBottom:30,marginTop:0}]}>
        <Text style={[styles.TextReadinBookView,{letterSpacing:1,fontSize:18}]}>Action Ebook</Text>
        <Text style={[styles.TextReadinBookView,{fontSize:13,letterSpacing:0,fontWeight:"300",marginTop:0}]}>Lorem Ipsum is simply dummy text of the printing </Text>
        <FlatList 
          style={{marginTop:10, }}
          data={eBook}
          renderItem={({item}) =>(  
            <TouchableOpacity>
              <View style={{marginRight:10}}>
                <Image source={{uri:item.img}} style={styles.itemImageOfList}/>
                <View style={styles.itemTextViewOfList}>
                  <Text style={styles.itemTextsOfList}>{item.name}</Text>
                  <Text style={styles.itemTextsOfList}>Rate : {item.rate} <AntDesignIcon name="star" size={14} color={COLORS.yellow} /> </Text>
                  
                </View>
              </View>      
            </TouchableOpacity>
           )}
           horizontal
           showsHorizontalScrollIndicator = {false} />
      </View>
    </ScrollView>
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
    alignSelf:'center',
    marginTop:50,
    paddingHorizontal:50,
    paddingVertical:30, 
    borderRadius:20,
    backgroundColor:"#4955790A"
  },
  headerImageIcon :
  {
    alignSelf:'center',
    opacity:0.75,
    width:190,
    height:130
  },
  TextReadinBookView :
  {
    
    marginTop:30,
    fontSize:22,
    fontWeight:'400',
    color:COLORS.darkBlue,
    letterSpacing:3,
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
    paddingHorizontal:28,
    paddingVertical:15,
    borderRadius:5,
    marginTop:20,
    alignSelf:'center',
  },
  bookList :
  {
    marginTop:10,
    marginLeft:10,
    
  },
  itemImageOfList : 
  {
    width:145,
    height:220,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  itemTextViewOfList :
  {
    width:145,
    backgroundColor:"#ffffffE6",
    paddingVertical:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    paddingHorizontal:8
  },
  itemTextsOfList :
  {
    fontSize:14,
    fontWeight:'300' 
  }
 
});

export default MyLibrary