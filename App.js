import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LogScreen from './screens/LogScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='Log' component={LogScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
       </Stack.Navigator>
    </NavigationContainer>  
  );
}
 