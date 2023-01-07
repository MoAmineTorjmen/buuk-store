import { View, Text,ScrollView,StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollViewContainer :  { },
    
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
        fontSize:15,
        letterSpacing:1.2,
        fontWeight:'300',
        textAlign:'justify',
        marginBottom:5, 
        lineHeight:20,
        marginHorizontal:10,
        marginTop:10
    }
    
})
export default AuthorDetails