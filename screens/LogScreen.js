import { View, Text, Image,TouchableOpacity,ImageBackground, StyleSheet} from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'
import { useNavigation } from '@react-navigation/native'

const LogScreen = () => {
    const navigation = useNavigation();
  return (
      <View style={styles.pageContainer}>
           
            <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
            <View style={styles.logoButtonsContainer}>
                <Image source={require("../assets/images/icons/logo.png")} style={styles.logoStyle}/>
                <TouchableOpacity style={[styles.buttonsStyle,{marginTop:150}]}
                    onPress={() => navigation.navigate("MainContanier")}>
                    <Image source={require("../assets/images/icons/google-icon.png")} style={styles.iconsButtonStyle}/>
                    <Text style={styles.buttonsTextStyle}>Countinue with Google</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsStyle}
                    onPress={() => navigation.navigate("MainContanier")}>
                    <Image source={require("../assets/images/icons/facebook-icon.png")}  style={styles.iconsButtonStyle}/>
                    <Text style={styles.buttonsTextStyle}>Countinue with Facebook</Text>    
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:20}}  onPress={() => navigation.navigate("MainContanier")}>
                    <Text style={styles.skipButtonStyle}>SKIP</Text>    
                </TouchableOpacity>
            </View> 
            <View style={styles.creditTextContainer}>
                <Text style={styles.creditTextStyle}>App version 1.0</Text>     
                <Text style={styles.creditTextStyle}>Developed by MO.Torjmen</Text>                          
            </View>                        
        </View>
    
  )
}

const styles = StyleSheet.create({
    pageContainer :
    {
        flex:1,
    },
    backgroundImage:
    {
        width:"100%",
        height:"100%",
        position:'absolute',
        opacity:0.7
    },
    logoButtonsContainer :
    {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    logoStyle :
    {
        width:220,
        height:220
    },
    buttonsStyle : 
    {
        backgroundColor:"white",
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:30,
        borderRadius:7,
        marginTop:10
    },
    iconsButtonStyle:
    {
        width:25,
        height:25,
    },
    buttonsTextStyle:
    {
        color:COLORS.darkBlue,
        fontSize:17,
        fontWeight:'400',
        marginLeft:20,
        letterSpacing:0.5,
        width:220,
        
    },
    skipButtonStyle :
    {
        color:COLORS.darkBlue,
        fontSize:18,
        fontWeight:'400',
    },
    creditTextContainer :
    {
        alignItems:'center',
        marginBottom:20,
    },
    creditTextStyle :
    {
        color:COLORS.gray,
        fontSize:15,
        fontWeight:'200',
    }
});

export default LogScreen