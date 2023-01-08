import { View, Text,ScrollView,StyleSheet, Image,TouchableOpacity,FlatList,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../assets/colors/pColors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import sanityClient from "../sanity" 


const AuthorDetails = ({route}) => {
    const data = route.params
    const navigate = useNavigation();
 
    return (
    <ScrollView style={styles.scrollViewContainer}>
        {/* The background Image */}
        <Image  source={require("../assets/images/icons/APP_Background.png")} 
                style={styles.backgroundImage} />
    
        
            {/* The GO TO HOME PAGE buttom */}
            <TouchableOpacity style={styles.goToHomeScreenBtn} 
                    onPress={()=> navigate.navigate("MainContanier")}>

                <Ionicons name="arrow-back" size={20} color={COLORS.lightBlue}   /> 
                <Text style={{fontSize:14,fontWeight:'500',marginLeft:10,color:COLORS.lightBlue,marginTop:-2}}>BACK GO HOME</Text>
            </TouchableOpacity> 
            
            {/* Author Image + name +description */}
            <View style={styles.authorInformationSection} >
                <Image source={{uri:data.authorImage}}
                        style={styles.authorImgInInformationSection}/>
                <Text  style={styles.authorNameInInformationSection}>{data.authorName}</Text>
                <Text  style={styles.authorNbFollowersInInformationSection}>6425 Followers</Text>  
                <Text style={styles.authorDescriptionInInformationSection}>{data.authorDescription}</Text>           
            </View>

            {/* Author Buuks Section */}
            <View style={styles.authorBookSection}>
                <Text style={styles.authorBookSectionText1}>{data.authorName} Buuks</Text>
                <Text style={styles.authorBookSectionText2}>Take a look for the best {data.authorName} Buuks</Text>
                <FlatList 
                    style={{marginTop:10,flex:1, paddingBottom:300}}
                    data={data.authorRelatedBooks}
                    keyExtractor={(item) => item._id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) =>(  
                        <View style={{flex:0.333333 ,marginBottom:20,alignItems:'center'}}>
                            <TouchableOpacity
                                onPress={() => navigate.push("BookDetail",{
                                    bookId:  item._id,
                                    imageUrl : item.ImageURL,
                                    name : item.name,
                                    rate : item.rating,
                                    price: item.price,
                                    bookDescription : item.description,
                                    authorID: data.authorID,
                                    authorName: data.authorName,
                                    authorImage: data.authorImage,
                                    AuthorDescription : data.authorDescription,
                                    categorie  : item.categories,
                                    bookList : data.authorRelatedBooks
                                })}>
                                <View style={{marginRight:10}}>
                                    <Image source={{uri:item.ImageURL}} style={styles.itemImageOfList}/>
                                    <View style={styles.itemTextViewOfList}>
                                        
                                        {/* Starts View */}
                                        <View style={{flexDirection:'row',marginTop:5,width:90,justifyContent:'space-between',alignSelf:'center'}}>
                                            {
                                                Array.from({length: item.rating}, (x, i) => {
                                                    return(
                                                        <AntDesignIcon n key={i}  name="star" size={15} color={COLORS.orange} />
                                                    )
                                                })
                                            
                                            }
                                            {
                                                Array.from({length: 5-item.rating}, (x, i) => {
                                                    return(
                                                        <AntDesignIcon key={i}  name="staro" size={15} color={COLORS.orange} />
                                                    )
                                                })
                                            }
                                        </View> 
                                    </View>
                                </View>      
                            </TouchableOpacity>
                        </View>    
                )} />
                    
            </View>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollViewContainer :  
    { 
       
    },
    
    /* The background Image */ 
    backgroundImage:
    {
        width:"100%",
        height:"100%",
        position:'absolute', 
    },

    /* The GO TO HOME PAGE buttom */
    goToHomeScreenBtn:
    {
        backgroundColor: "#ffffffCC",
        position:'absolute',
        paddingHorizontal:20,
        paddingVertical:10, 
        borderRadius:50,
        top:45,left:10,
        paddingLeft:15, flexDirection : 'row',
        justifyContent:'center',alignItems:'center'
    },

    /* Author Informations Section ( Image + name + Description )  */
    authorInformationSection :
    {
        marginTop:110,
        justifyContent:'center',
        alignItems:'center'
    },
    authorImgInInformationSection :
    {
        width:115,
        height:115,
        borderRadius:50,
        borderWidth:1,borderColor:COLORS.gray
    },
    authorNameInInformationSection :
    {
        color: COLORS.darkBlue,
        fontSize:19,
        letterSpacing:1.5,
        fontWeight:'600',
        textAlign:'center',
        marginTop:10
    },
    authorNbFollowersInInformationSection :
    {
        color: COLORS.gray,
        marginTop:5,
        fontSize:12,
        fontWeight:'400',
        letterSpacing:0.5
    },
    authorDescriptionInInformationSection :
    {
        fontSize:14,
        letterSpacing:1.2,
        fontWeight:'400',
        textAlign:'center',
        marginBottom:5, 
        lineHeight:20,
        marginHorizontal:10,
        marginTop:10,
    },

     /* Author Buuks Section */
     authorBookSection :
     {
        marginTop:30,
        marginLeft:10
     },
     authorBookSectionText1 :
     {
        fontSize:20,
        letterSpacing:1,
        fontWeight:"500"
     },
     authorBookSectionText2 :
     {
        fontSize:14, 
        fontWeight:"300"
     },

    /* Buuk item in flatlist */
    itemImageOfList : 
    {
        width:140,
        height:220,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    itemTextViewOfList :
    {
        width:140,
        backgroundColor:"#ffffff66",
        paddingVertical:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        paddingHorizontal:8,
    },
    itemTextsOfList :
    {
        fontSize:11,
        fontWeight:'400' 
    }
    
})
export default AuthorDetails