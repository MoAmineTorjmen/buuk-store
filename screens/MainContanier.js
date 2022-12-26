import React from 'react'
import MyLibrary from './MyLibrary';
import BookStore from './BookStore';
import { View, Text,StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import COLORS from '../assets/colors/pColors';


const MainContanier = () => {
    const myLibraryName = "My Library";
    const myBookStore = "Book Store";
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={myLibraryName}
            screenOptions = {({route}) => ({
                tabBarIcon : ({ focused,size,color }) => {
                    let iconName;
                    let routeName = route.name;
                    
                    if (routeName === myLibraryName ) 
                    {
                        iconName  = focused ? "library" : "library-outline";
                         
                    }else if (routeName === myBookStore )
                    {
                        iconName = focused ? "basket" : "basket-outline";
                       
                    }
                    return  <Ionicons name={iconName} size={22} color={COLORS.lightBlue} style={{ fontWeight: '100'}} />  ;
                },
                tabBarStyle:  styles.tabBarStyle,
                tabBarLabelStyle :  styles.tabBarLabelStyle,
                 
            })}
            
            >
            <Tab.Screen name={myLibraryName} component={MyLibrary} options={{headerShown:false}}/>
            <Tab.Screen name={myBookStore}   component={BookStore} options={{headerShown:false}} />
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