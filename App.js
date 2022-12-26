import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LogScreen from './screens/LogScreen'; 
import MainContanier from './screens/MainContanier';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='Log' component={LogScreen} options={{headerShown:false}}/>
          <Stack.Screen name='MainContanier' component={MainContanier} options={{headerShown:false}}/>
       </Stack.Navigator>
    </NavigationContainer>  
  );
}
 
