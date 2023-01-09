import { View, Text, Image,StyleSheet,TouchableOpacity,FlatList,ScrollView,TextInput,ActivityIndicator} from 'react-native'
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
            description,
            "authorImageUrl" : image.asset -> url,
          }
      }
      `
    ).then(data => {
      setBookList(data);
    });
    
  },[]);
 
  return (
    <View style={styles.bookList}>
        <Text style={[styles.TextReadinBookView,{letterSpacing:1,fontSize:18,fontWeight:'400',letterSpacing:2}]}>BUUKS FOR YOU !!</Text> 
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
                  bookDescription : item.description,
                  authorName: item.author.name,
                  authorImage: item.author.authorImageUrl,
                  AuthorDescription : item.author.description,
                  bookList : bookList
                })}>
              <View style={{marginRight:10}}>
                <Image source={{uri:item.ImageURL}} style={styles.itemImageOfList}/>
                <View style={styles.itemTextViewOfList}>
                  <Text style={styles.itemTextsOfList}>{item.name}</Text>
                    <View style={{flexDirection:'row',marginTop:5,width:80,justifyContent:'space-between'}}>
                   
                        {
                          Array.from({length: item.rating}, (x, i) => {
                              return(
                                  <AntDesignIcon n key={i}  name="star" size={12} color={COLORS.lightBlue} />
                              )
                          })
                        
                        }
                        {
                          Array.from({length: 5-item.rating}, (x, i) => {
                              return(
                                  <AntDesignIcon key={i}  name="staro" size={12} color={COLORS.lightBlue} />
                              )
                          })
                        }
                    </View> 
                  </View>
              </View>      
            </TouchableOpacity>
           )}
           horizontal
           showsHorizontalScrollIndicator = {false} />
      </View> 
  )
}


const AuthorFlatListView = () => {
  const [authorList,setAuthorList] = useState([]);
  const navigate = useNavigation();
  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type == 'author'  ]
        {
          _id, 
          name,
          "imageUrl" : image.asset -> url,
          description,
          "relatedBooks": *[_type=='book' && references(^._id)]
          {  
            ...,
            "ImageURL" : mainImage.asset -> url,
            categories[] -> {_id,title},
          }    
        }
      `
    ).then(data => {
      setAuthorList(data)
      
    })
  },[]); 
  
  return (
    <View style={{marginTop:5,marginLeft:10,paddingBottom:20}}>
        <Text style={[styles.TextReadinBookView,{letterSpacing:1,fontSize:18,fontWeight:'400',letterSpacing:2}]}>AUTHORS FOR YOU !!</Text> 
        <Text style={[styles.TextReadinBookView,{fontSize:13,letterSpacing:0,fontWeight:"300",marginTop:0}]}>Lorem Ipsum is simply dummy text of the printing </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style ={{marginTop:5 }}
          contentContainerStyle={{justifyContent:'space-between'}}
          data={authorList}
          keyExtractor ={(item) => item._id}
          renderItem={({item}) => (
              
              <TouchableOpacity 
                  onPress={()=> navigate.navigate("AuthorDetails",{
                      authorID : item._id,
                      authorName : item.name,
                      authorImage : item.imageUrl,
                      authorDescription : item.description,
                      authorRelatedBooks : item.relatedBooks,
                      categorie  : item.categories,
                  })}>
                    <Text></Text>
                  <View style={{paddingVertical:10,paddingHorizontal:10,justifyContent:'center',alignItems:'center'}} >
                      <Image source={{uri:item.imageUrl}}
                             style={{
                                width:100,
                                height:100,
                                borderRadius:40,
                                borderWidth:0.5,borderColor:COLORS.gray
                             }}/>
                           <Text  style={{color: COLORS.darkBlue,fontSize:15,fontWeight:'600',textAlign:'center',marginTop:5}}>{item.name}</Text>
                          <Text  style={{color: COLORS.gray,fontSize:10,fontWeight:'400',letterSpacing:0.5}}>6425 Followers</Text>  
                            
                  </View>
              </TouchableOpacity>
          )}/>
    </View>
  )

}


const MyLibrary = () => {
  const [categoryList,setCategoryList] = useState();
  useEffect(()=> {
     
    sanityClient.fetch(
      `
      *[_type == 'category' ] { _id,title } 
      `
    ).then(data => {
      setCategoryList(data);
    })
  },[]);

 
  return (
    <ScrollView style={styles.Container}>
      <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
      <View style={{marginTop:30}}>
      <Text style={[styles.TextReadinBookView,{letterSpacing:1,fontSize:18,marginLeft:17,fontWeight:'400',letterSpacing:2}]}>BUUKS Category</Text>          
        <View style={{flexDirection:'row' ,alignItems:'center',marginTop:10, marginLeft:15,marginRight:15}}>
            <View  style={{width:45,height:45,justifyContent:'center',alignItems:'center',borderTopLeftRadius:40,
                  borderBottomLeftRadius:40,position:'absolute',zIndex:99}}>
              <AntDesignIcon name="search1" size={17} color= {COLORS.gray} 
              />
            </View>
            <TextInput 
                placeholder='Find a book'
                style={{
                 
                  backgroundColor:COLORS.white,
                  color:COLORS.darkBlue, 
                  width:"100%",
                  height:45,
                  borderRadius:5,
                  paddingLeft:40,
                  fontSize:14,
                  
                 
                }}/>

        </View>

        <View style={{marginTop:10,marginHorizontal:10 ,flexDirection:'row',flexWrap: 'wrap',flex:1,justifyContent:'space-between',}}>
            {
              categoryList?.map(item => {
                return (
                  <TouchableOpacity key={ item._id}>
                    <Text style={{backgroundColor:COLORS.lightBlue,fontSize:12,paddingHorizontal:10,paddingVertical:4,borderRadius:4,marginTop:5,marginHorizontal:5,color:"white",justifyContent:'flex-start'}}>{item.title}</Text>
                  </TouchableOpacity>
                )
              })
            }
        </View>
       
      </View>
      
      <BookFlatListView/> 
      <AuthorFlatListView /> 
      
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
    marginBottom:0,
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
    fontSize:11,
    fontWeight:'400' 
  }
 
});

export default MyLibrary