import { View, Text,StyleSheet,ScrollView,Image,TouchableOpacity,FlatList,Dimensions } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';

 
  const BookFlatListView = ({authorImage,authorName,authorID,thisBookID,allBook} ) => {
    const navigation = useNavigation();
    return (
        
      <View style={styles.bookList}>
           <FlatList 
            style={{marginTop:10}}
            data={allBook}
            keyExtractor={(item) => item._id}
            renderItem={({item,index}) =>(  
              <View style={{flexDirection:'row'}}>
                {index == 0 ?
                     
                        <TouchableOpacity style={{alignItems:'center',alignSelf:'center',marginRight:10}}>
                            <Image source={{uri:authorImage}} 
                                style={{width:100,height:100,borderRadius:50,borderWidth:2,borderColor:COLORS.white}}/>
                            
                            <View style={{marginTop:10,}}>
                                <Text  style={{color: COLORS.gray,fontSize:15,fontWeight:'600',letterSpacing:0.5,textAlign:'center'}}>{authorName}</Text>
                                <Text  style={{color: COLORS.gray,fontSize:10,fontWeight:'400',letterSpacing:0.5,textAlign:'center'}}>6425 Followers</Text>  
                            </View>
                        </TouchableOpacity>
                 
                    :
                    <View></View>
                }
                {(item.author._id ==  authorID && item._id != thisBookID)? 
                    <TouchableOpacity
                            onPress={() => navigation.push("BookDetail",{
                            bookId:  item._id,
                            imageUrl : item.ImageURL,
                            name : item.name,
                            rate : item.rating,
                            price: item.price,
                            bookDescription : item.description,
                            authorId: item.author._id,
                            authorName: item.author.name,
                            authorImage: item.author.authorImageUrl,
                            categorie  : item.categories,
                            bookList : allBook
                            })}>
                        <View style={{marginLeft: 10}}>
                            <Image source={{uri:item.ImageURL}} style={styles.itemImageOfList}/>
                            <View style={styles.itemTextViewOfList}>
                                <Text style={styles.itemTextsOfList}>{item.name}</Text>
                                <View style={{flexDirection:'row',marginTop:5,}}>
                                    {
                                            Array.from({length: item.rating}, (x, i) => {
                                                return(
                                                    <AntDesignIcon n key={i}  name="star" size={14} color={COLORS.yellow} />
                                                )
                                            })
                                    
                                    }
                                    {
                                                Array.from({length: 5-item.rating}, (x, i) => {
                                                    return(
                                                        <AntDesignIcon key={i}  name="staro" size={14} color={COLORS.yellow} />
                                                    )
                                                })
                                    }
                                </View> 
                            </View>
                        </View>      
                    </TouchableOpacity>
                     :
                     <View></View>
                }
                
              </View>
             )}
             horizontal
             showsHorizontalScrollIndicator = {false} />
        </View>
    )
  }

  const reviewList =  [
    {
        namePer : "Bill Gates" ,
        date : "Dec 03,2018",
        nbStarts : 5,
        shortDescription : "It was Amazing",
        details : "I thought this book was just okay. It was a quick and easy read, but the characters were somewhat one-dimensional. It was an okay way to pass the time, but I wouldn't go out of my way to recommend it."
        
    },
     {
         namePer : "Torjmen Mo " ,
         date : "Jan 10,2020",
         nbStarts : 2,
         shortDescription : "Can be better story",
         details : "I couldn't put this book down! The plot was engaging and the characters were well developed. I highly recommend it"
      },
      {
          namePer : "Firas Ben Jeema " ,
          date : "mars 10,2022",
          nbStarts : 2,
          shortDescription : "it's OK ",
          details : "I absolutely loved this book! The characters were well developed and the plot kept me on the edge of my seat. I highly recommend it"
       }
      
  ]
  
  const FeedBackListView = () => {

    return (
        <FlatList
            data={reviewList}
            renderItem={({item,index}) => 
                    <View style={{backgroundColor:"#7895B21A",padding:15,borderRadius:10,marginTop:20, 
                    width: Dimensions.get('window').width - 50 ,marginRight:10}} >
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:1,textAlign:'left' ,fontSize:15,fontWeight:'500',color:COLORS.darkBlue}}>{item.namePer}</Text>
                            <Text style={{flex:1,textAlign:'right' ,fontSize:15,fontWeight:'500',color:COLORS.gray}}>{item.date}</Text>       
                        </View>
                        <View style={{flexDirection:"row",marginTop:5,alignItems:'center'}}>

                            {
                                
                                
                                Array.from({length: item.nbStarts}, (x, i) => {
                                    return(
                                        <AntDesignIcon key={i} name="star" size={18} color={COLORS.gray} />
                                        )
                                    })
                            }
                             {
                                            Array.from({length: 5-item.nbStarts}, (x, i) => {
                                                return(
                                                    <AntDesignIcon key={i}  name="staro" size={18} color={COLORS.gray} />
                                                )
                                            })
                                   }
                                
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'500',color:COLORS.gray}}>{item.shortDescription}</Text>       
                        </View>
                        <Text style={{marginTop:10,paddingHorizontal:0,fontSize:14,fontWeight:'300',marginBottom:5,textAlign:'left',lineHeight:20}}>{item.details} </Text>
                    </View>
            }
            pagingEnabled={true} 
            horizontal
            showsHorizontalScrollIndicator ={false}
            />
    )
  }
 

const BookDetail = ({route}) => {
    const navigate = useNavigation();
    let data = route.params;
    let allBookList = data.bookList; 
    const totalStars = 5;
    const gainedStars = data.rate;
  return (
    <View style={styles.Container} >
        <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
            <ScrollView>
                <TouchableOpacity style={{
                    backgroundColor: "#ffffffE6",
                    position:'absolute',
                    paddingHorizontal:30,
                    paddingVertical:10, 
                    borderRadius:50,
                    top:45,left:10,
                    paddingLeft:15, flexDirection : 'row',
                    justifyContent:'center',alignItems:'center'
                }} 
                onPress={()=> navigate.navigate("MainContanier")}>

                    <Ionicons name="arrow-back" size={22} color={COLORS.lightBlue}   /> 
                    <Text style={{fontSize:14,fontWeight:'500',marginLeft:10,color:COLORS.lightBlue}}>BACK</Text>
                </TouchableOpacity>
                <View style={styles.bookDetailContainer}>
                    <Image source={{uri:data.imageUrl}} style={styles.imageBook} />
                    <Text  style={styles.bookTitle} >{data.name} </Text>
                    <View style={{flexDirection:"row",width:"100%",justifyContent:'center'}}>
                        {
                            data.categorie?.map( cat => (
                                <TouchableOpacity> 
                                    <Text 
                                    style={{
                                        backgroundColor: COLORS.lightBlue,
                                        color:"white",
                                        marginHorizontal:2.5,
                                        paddingVertical:4,
                                        paddingHorizontal:7,
                                        borderRadius:5,
                                        marginTop:10
                                    }}
                                    >{cat.title}</Text>
                                    
                                    
                                </TouchableOpacity>
                                
                            ))
                        }
                    </View>
                    
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text   >BY  </Text>
                        <TouchableOpacity>  
                            <Text  style={{color: COLORS.lightBlue}}>{data.authorName}</Text> 
                        </TouchableOpacity>

                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={styles.itemTextsOfList}><AntDesignIcon name="star" size={15} color="#FFBF00"/>  {data.rate}.0 </Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.buyBotton}>
                            <Text style={[styles.textBuyBotton,{paddingHorizontal:25,borderBottomLeftRadius:20}]}>{data.price}.000 DT</Text>
                            <Text style={[styles.textBuyBotton,{backgroundColor:COLORS.lightBlue,flex:1,borderTopRightRadius:10,borderBottomRightRadius:10}]}>GET NOW !!</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',marginHorizontal:20,marginTop:10}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1}} >
                            <Ionicons name="glasses-outline" size={35} color={COLORS.gray}   /> 
                            <Text style={{fontSize:14,fontWeight:'500',color:COLORS.gray,marginTop:-4}} > Free Trial</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center'}} >
                            <Ionicons name="gift-outline" size={22} color={COLORS.gray}   /> 
                            <Text style={{fontSize:14,fontWeight:'500',color:COLORS.gray}} > GIFT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center'}} >
                            <Ionicons name="heart-outline" size={22} color={COLORS.gray}   /> 
                            <Text style={{fontSize:14,fontWeight:'500',color:COLORS.gray,marginTop:-4}} > BUY LETTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.moreDetailsContainer}>
                    <View>
                        <Text style={{fontSize:20,fontWeight:'700',marginBottom:5,color:COLORS.darkBlue}}>Description</Text>
                        <Text style={{fontSize:14,fontWeight:'300',marginBottom:5,textAlign:'justify',lineHeight:18}}>{data.bookDescription}</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:20,fontWeight:'700',marginBottom:5,marginTop:20,color:COLORS.darkBlue}}>Author</Text>
                        <Text style={{fontSize:14,fontWeight:'300',marginBottom:5,textAlign:'justify',lineHeight:18}}>{data.AuthorDescription}</Text>
                       
                        <BookFlatListView authorImage={data.authorImage} authorName = {data.authorName} authorID = {data.authorId} thisBookID= {data.bookId} allBook = {allBookList} /> 

                    </View>
                    <View>
                        <Text style={{fontSize:20,fontWeight:'700',marginBottom:5,marginTop:20,color:COLORS.darkBlue}}>High Recommend</Text>
                        <View style={{flexDirection:"row",alignItems:'center'}}>
                            <Text style={{fontSize:45,fontWeight:'500',color:COLORS.darkBlue}}>{data.rate}.0</Text>
                            <View style={{marginLeft:8,flex:1}}>
                                <View style={{flexDirection:"row",}}>
                                    {
                                          Array.from({length: gainedStars}, (x, i) => {
                                            return(
                                                <AntDesignIcon key={i}  name="star" size={18} color={COLORS.gray} />
                                            )
                                           })
                                   
                                   }
                                   {
                                            Array.from({length: totalStars-gainedStars}, (x, i) => {
                                                return(
                                                    <AntDesignIcon key={i}  name="staro" size={18} color={COLORS.gray} />
                                                )
                                            })
                                   }
                                    
                                   
                                </View>
                                <Text  style={{fontSize:13,fontWeight:'500',color:COLORS.gray,marginTop:5 }}>(235,255 Rivewers)</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={{ backgroundColor:COLORS.lightBlue,justifyContent:'flex-end',  
                                                width:100,
                                                borderRadius:40}}>
                                    <Text style={[styles.textBuyBotton,{paddingHorizontal:20,borderBottomLeftRadius:20,paddingVertical:10,fontSize:14}]}>Rivew</Text>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                        <View style= {{flex : 1,}}>
                            
                                   <FeedBackListView/>
                            </View>            

                                 



                    </View>

                </View>
            </ScrollView>
       
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
        opacity:0.8
    },
    imageBook :
    {
        height:310,
        width:200,
        borderRadius:5,
        borderWidth:1.5,
        borderColor:"#fff"

    },
    bookDetailContainer: 
    { 
        
        marginTop:120,
        alignItems:'center'
    },
    bookTitle :
    {
        fontSize:21,
        fontWeight:'500',
        letterSpacing:1,
        width:300,
        textAlign:'center',
        marginTop:20,
        lineHeight:25,
        color:COLORS.darkBlue
    },
    itemTextsOfList :
    {
        fontSize:11,
        fontWeight:'400',
        textAlign:'left'
    },
    buyBotton :
    {
        flexDirection:'row', 
        backgroundColor:COLORS.orange,  
        borderRadius:5 ,
        width:320,
        marginTop:10,
        borderRadius:10
    },
    textBuyBotton : 
    {   
        color: "white",
        fontSize:15, 
        fontWeight:'500',
        textAlign:'center',
        paddingVertical:15,  
       
    },
    moreDetailsContainer :
    {
        backgroundColor : "#ffffff6A",
        flex:1,
        borderRadius :30,
        marginTop:10,
        paddingTop:25,
        paddingHorizontal:20,
        paddingBottom:20
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
    borderTopLeftRadius:4,
    borderTopRightRadius:4
  },
  itemTextViewOfList :
  {
    width:140,
    backgroundColor:"#ffffffE6",
    paddingVertical:5,
    borderBottomLeftRadius:4,
    borderBottomRightRadius:4,
    paddingHorizontal:8,
  },
})

export default BookDetail