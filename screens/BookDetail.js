import { View, Text,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';

const BookDetail = () => {
    const navigate = useNavigation()
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
                }} onPress={()=> navigate.goBack()}>
                    <Ionicons name="arrow-back" size={22} color={COLORS.lightBlue}   /> 
                    <Text style={{fontSize:14,fontWeight:'500',marginLeft:10,color:COLORS.lightBlue}}>BACK</Text>
                </TouchableOpacity>
                <View style={styles.bookDetailContainer}>
                    <Image source={{uri:"https://bdi.dlpdomain.com/album/9782205082944-couv.jpg"}} style={styles.imageBook} />
                    <Text  style={styles.bookTitle} >Game Of Thrones The Song Of Ice And Fire </Text>
                    
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text   >BY  </Text>
                        <TouchableOpacity>  
                            <Text  style={{color: COLORS.lightBlue}}>MO Torjmen  </Text> 
                        </TouchableOpacity>

                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={styles.itemTextsOfList}> <AntDesignIcon name="star" size={15} color="#FFBF00"/>  4.9 </Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.buyBotton}>
                            <Text style={[styles.textBuyBotton,{paddingHorizontal:25,borderBottomLeftRadius:20}]}>150.43 DT</Text>
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
                        <Text style={{fontSize:18,fontWeight:'500',marginBottom:5}}>Description</Text>
                        <Text style={{fontSize:14,fontWeight:'400',marginBottom:5,textAlign:'justify',lineHeight:18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
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
        fontSize:16,
        fontWeight:'400',
        textAlign:'center'
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
        backgroundColor : COLORS.white,
        flex:1,
        borderRadius :20,
        marginTop:25,
        paddingTop:25,
        paddingHorizontal:20,
        paddingBottom:20
    }
})

export default BookDetail