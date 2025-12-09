// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import ListScreen from "./screens/ListScreen";
import StudentDetail from "./components/StudentDetail";
import StudentScreen from "./screens/StudentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileScreen2 from "./screens/ProfileScreen2";
import BoxScreen from "./screens/BoxScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //<ProfileScreen2 />
    <BoxScreen />
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
