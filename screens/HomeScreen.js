import { View, Text,StyleSheet,StatusBar } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyLibrary from './MyLibrary';
import BookStore from './BookStore';
import COLORS from '../assets/colors/pColors';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import BuyLaterBook from './BuyLaterBook';

const HomeScreen = () => {
    const myLibraryName = "Book";
    const BuyLaterName = "Buy Later";

    const  [myLibraryFocused,setMyLibraryFocused] = useState(false);
    const  [BuyLaterFocused,setBuyLaterFocused] = useState(false);

    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
            initialRouteName={myLibraryName}
            tabBarOptions = {{
                showLabel : false,
            }}
            screenOptions = {({route,focused}) => ({
                
                tabBarIcon : ({focused} ) => {
                  
                     return false;
                },
                tabBarStyle:  styles.tabBarStyle,
                tabBarLabelStyle : styles.tabBarLabelStyle,
                 
            })}
            
            >
            <Tab.Screen name={myLibraryName} component={MyLibrary} options={{
                headerShown:false,
                tabBarIcon : ({focused}) => (
                    <Text style={[styles.tabBarLabelStyle,{ borderWidth: focused ? 1.5 :  0 ,}]}>{myLibraryName}</Text>
                )
                
                }} />
            <Tab.Screen name={BuyLaterName}   component={BuyLaterBook} options={{
                headerShown:false,
                tabBarIcon : ({focused}) => (
                    
                    <Text style={[styles.tabBarLabelStyle,{ borderWidth: focused ? 1.5 :  0 ,}]}>{BuyLaterName}</Text>
                )
                
                }} />
            
        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle :
    {
        height:65, 
      
        borderRadius:10,
        position:'absolute',
        top:45, 
        marginHorizontal:30,
        paddingHorizontal:40,
        backgroundColor:"#ffffffE6", 
    },
    tabBarLabelStyle:
    {
        fontSize:15, 
        fontWeight:'400',
        color: COLORS.lightBlue, 
        borderColor:COLORS.lightBlue,
        height:40,
        width:"100%",
        borderRadius:10, 
        textAlignVertical:'center',
        textAlign:'center',   
        
    } 
     
  });

export default HomeScreen