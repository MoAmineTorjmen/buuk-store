import { View, Text, Image,TouchableOpacity,ImageBackground, StyleSheet,TextInput} from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/pColors'
import { useNavigation } from '@react-navigation/native'

const LogScreen = () => {
    const navigation = useNavigation();
  return (
      <View style={styles.pageContainer}>
            <Image source={require("../assets/images/icons/APP_Background.png")} style={styles.backgroundImage} />
            <Image source={require("../assets/images/icons/buukstore-logo-design.png")} style={styles.logoStyle}/>
            <View style={{marginHorizontal:25,flex:1,justifyContent:'center',}}>
                <Text style={{fontSize:25,fontWeight:'700',marginBottom:5,color:COLORS.darkBlue}}>Login to your account</Text>
                <Text style={{fontSize:14,fontWeight:'700',marginBottom:5,color:COLORS.darkBlue,marginTop:20}}>E-mail :</Text>
                 
             
                <TextInput 
                    placeholder='Can you enter your E-mail please'
                    style={{
                            backgroundColor:COLORS.white,
                            color:COLORS.darkBlue, 
                            width:"100%",
                            height:55,
                            borderRadius:3,
                            paddingLeft:10,
                            fontSize:14,
                            fontWeight:'400',
                            backgroundColor:"#00000000", 
                            borderWidth:0.2,                
                    }}/>

                <Text style={{fontSize:14,fontWeight:'700',marginBottom:5,color:COLORS.darkBlue,marginTop:20}}>Password :</Text>
                <TextInput 
                     placeholder='Can you enter your password please'
                     style={{
                             backgroundColor:COLORS.white,
                             color:COLORS.darkBlue, 
                             width:"100%",
                             height:55,
                             borderRadius:3,
                             paddingLeft:10,
                             fontSize:14,
                             fontWeight:'400',
                             backgroundColor:"#00000000", 
                             borderWidth:0.2,                
                     }}/>    

            </View>
           
            <View style={styles.logoButtonsContainer}>
                <TouchableOpacity>
                    <View style={{  
                                    justifyContent:'center',
                                    alignItems:'center',
                                    backgroundColor:"#D36B00",  
                                    width:320, 
                                    marginBottom:10,
                                    borderRadius:8}}>
                        
                        <Text style={{color: "white",
                                    fontSize:12.5, 
                                    fontWeight:'700',
                                    textAlign:'center',
                                    paddingVertical:18,
                                    paddingHorizontal:25,
                                    borderBottomLeftRadius:20}}>Login</Text>
                         
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize:12,fontWeight:'200',marginBottom:5,textAlign:'justify'}}>or login with</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:180,justifyContent:'space-between'}}>
                    <TouchableOpacity style={[styles.buttonsStyle]}
                        onPress={() => navigation.navigate("MainContanier")}>
                        <Image source={require("../assets/images/icons/google-icon.png")} style={styles.iconsButtonStyle}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.buttonsStyle}
                        onPress={() => navigation.navigate("MainContanier")}>
                        <Image source={require("../assets/images/icons/facebook-icon.png")}  style={styles.iconsButtonStyle}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonsStyle}
                        onPress={() => navigation.navigate("MainContanier")}>
                        <Image source={require("../assets/images/icons/Apple-Logo.png")}  style={styles.iconsButtonStyle}/>
                    </TouchableOpacity>
                         

            </View>
                
                
                
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
        opacity:0.4
    },
    logoButtonsContainer :
    {
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:30,
    
    },
    logoStyle :
    {
        width:170,
        height:110, 
        alignSelf:'center',
        marginTop:100,
    },
    buttonsStyle : 
    {
        backgroundColor:"#00000008",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:50,width:50,
        borderRadius:5,
        marginTop:10
    },
    iconsButtonStyle:
    {
        width:22,
        height:22,
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
        fontSize:11,
        fontWeight:'400',
    }
});

export default LogScreen