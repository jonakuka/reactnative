// App.js

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShkollaScreen from "./screens/ShkollaScreen";
import MainScreen from "./screens/MainScreen";
import ListScreen from "./screens/ListScreen"; // 👈 like ListScreen in the example
import StudentDetailScreen from "./screens/StudentDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Shkolla"
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Shkolla" component={ShkollaScreen} options={{ title: 'Students' }} />
        <Stack.Screen name="Details" component={StudentDetailScreen} options={{ title: 'Student Details' }} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
