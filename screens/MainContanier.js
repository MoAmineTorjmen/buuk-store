import React from 'react'
import HomeTab from './HomeTab';
import BookStore from './BookStore';
import BuyLaterBook from './BuyLaterBook';
import { View, Text,StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import COLORS from '../assets/colors/pColors';
 


const MainContanier = () => {
    const myHome = "Home";
    const myBookStore = "Book Store";
    const myBuyLater = "Buy Later";

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={myHome}
            screenOptions = {({route}) => ({
                tabBarIcon : ({ focused,size,color }) => {
                    let iconName;
                    let routeName = route.name;
                    
                    if (routeName === myHome ) 
                    {
                        iconName  = focused ? "library" : "library-outline";
                         
                    }else if (routeName === myBookStore )
                    {
                        iconName = focused ? "basket" : "basket-outline";
                       
                    }else if (routeName === myBuyLater )
                    {
                        iconName = focused ? "heart" : "heart-outline";
                       
                    }
                    
                    return  <Ionicons name={iconName} size={22} color={COLORS.lightBlue} style={{ fontWeight: '100'}} />  ;
                },
                tabBarStyle:   styles.tabBarStyle,
                tabBarLabelStyle :  styles.tabBarLabelStyle,
                 
            })}
            
            >
            <Tab.Screen name={myHome}           component={HomeTab}         options={{headerShown:false}}/>
            <Tab.Screen name={myBookStore}      component={BookStore}       options={{headerShown:false}} />
            <Tab.Screen name={myBuyLater}       component={BuyLaterBook}    options={{headerShown:false}} /> 
        </Tab.Navigator>
       
        
    )
}

const styles = StyleSheet.create({
    tabBarStyle :
    {
        height:60, 
        borderRadius:10,
        paddingBottom:10,
        paddingTop:10,
        
    },
    tabBarLabelStyle:
    {
        fontSize:10,
        marginTop:5,
        fontWeight:'500',
        color: COLORS.lightBlue
    } 
     
  });
export default MainContanier