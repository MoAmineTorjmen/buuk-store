import { View, Text, Image,StyleSheet,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../assets/colors/pColors'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import { useNavigation } from '@react-navigation/native';
import sanityClient from "../sanity"

const BookFlatListView = () => {
  const navigation = useNavigation();
  const [bookList,setBookList] = useState();

  useEffect(()=> {
    sanityClient.fetch(
      `
        *[_type == 'book' ]
        {
          ...,
          categories[] -> {_id,title},
          "ImageURL": mainImage.asset -> url,
            author -> 
            { 
            _id ,
            name,
            "authorImageUrl" : image.asset -> url,
            "descriptionhh" : description.children -> text
            }
      }
      `
    ).then(data => {
      setBookList(data);
    })
  },[]);


  return (
    <View style={styles.bookList}>
        <Text style={[styles.TextReadinBookView,{letterSpacing:1,fontSize:18}]}>Action Ebook</Text>
        <Text style={[styles.TextReadinBookView,{fontSize:13,letterSpacing:0,fontWeight:"300",marginTop:0}]}>Lorem Ipsum is simply dummy text of the printing </Text>
        <FlatList 
          style={{marginTop:10}}
          data={bookList}
          keyExtractor={(item) => item._id}
          renderItem={({item}) =>(  
          
            <TouchableOpacity
              
                onPress={() => navigation.push("BookDetail",{
                  bookId:  item._id,
                  imageUrl : item.ImageURL,
                  name : item.name,
                  rate : item.rating,
                  price: item.price,
                  authorId: item.author._id,
                  authorName: item.author.name,
                  authorImage: item.author.authorImageUrl,
                  categorie  : item.categories,
                  bookList : bookList
                })}>
              <View style={{marginRight:10}}>
                <Image source={{uri:item.ImageURL}} style={styles.itemImageOfList}/>
                <View style={styles.itemTextViewOfList}>
                  <Text style={styles.itemTextsOfList}>{item.name}</Text>
                  <Text style={styles.itemTextsOfList}>Rate : {item.rating} <AntDesignIcon name="star" size={14} color={COLORS.yellow} /> </Text>
                </View>
              </View>      
            </TouchableOpacity>
           )}
           horizontal
           showsHorizontalScrollIndicator = {false} />
      </View> 
  )
}

const MyLibrary = () => {
  return (
    <ScrollView style={styles.Container}>
      <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
      <View style={styles.ReadinBookView}>
        <Image source={require("../assets/images/icons/tea-time-3240766_960_720.jpg")} style={styles.headerImageIcon} />
        <View style={{position:'absolute',bottom:10,left:10}}> 
          <Text style={[styles.TextReadinBookView,{color:"#fff",fontWeight:'800',backgroundColor:"#0000004D",paddingHorizontal:10,paddingVertical:10,borderRadius:5}]}>YOU DON'T HAVE A BOOK</Text>
          <TouchableOpacity style={styles.ButtonReadinBookView}>
            <Text style={styles.TextButtonReadinBookView}>SHOP NOW !!</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <BookFlatListView/> 
      <BookFlatListView /> 
      
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
    
     
    borderRadius:20, 
  },
  headerImageIcon :
  {
    alignSelf:'center',
    opacity:0.7,
    width:"100%",
    height:300,
    
  },
  TextReadinBookView :
  {
    
    marginTop:20,
    fontSize:18,
    fontWeight:'400',
    color:COLORS.darkBlue,
    letterSpacing:2,
  },
  TextButtonReadinBookView:
  {
    fontWeight:'400',
    color:"#fff",
    textAlign:'center',
    fontSize:15,
    letterSpacing:1
  },
  ButtonReadinBookView :
  {
    backgroundColor:COLORS.lightBlue,
    paddingVertical:13,
    borderRadius:5,
    marginTop:5,
    marginBottom:25,
    width:150 
  },
  bookList :
  {
    marginBottom:5,
    marginLeft:10,
    
  },
  itemImageOfList : 
  {
    width:140,
    height:220,
    borderTopLeftRadius:8,
    borderTopRightRadius:8
  },
  itemTextViewOfList :
  {
    width:140,
    backgroundColor:"#ffffffE6",
    paddingVertical:5,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    paddingHorizontal:8,
  },
  itemTextsOfList :
  {
    fontSize:14,
    fontWeight:'300' 
  }
 
});

export default MyLibrary