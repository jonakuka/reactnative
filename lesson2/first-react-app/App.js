import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './components/mainScreen';
import MainScreeb2 from './components/mainScreen2';
import { NavigationContainer } from '@react-navigation/native';

const Stack = creatNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.kNavigator>
        <Stack.Screen name="Home Screen " component={HomeScreen}></Stack.Screen>


      </Stack.kNavigator>
    </NavigationContainer>
  )
}