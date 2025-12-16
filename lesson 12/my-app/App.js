import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import ListScreen from "./screens/ListScreen";
import StudentScreen from "./screens/StudentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BoxScreen from "./screens/BoxScreen";
import PostsScreen from "./screens/PostsScreen";
import FetchChallange from "./screens/FetchChallange";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Main"
    //     screenOptions={{
    //       title: "My App",
    //     }}
    //   >
    //     <Stack.Screen name="Main" component={MainScreen} />
    //     <Stack.Screen name="List" component={ListScreen} />
    //     <Stack.Screen name="Student" component={StudentScreen} />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //     <Stack.Screen name="Box" component={BoxScreen} />
    //     <Stack.Screen name="Posts" component={PostsScreen} />
    //     <Stack.Screen name="Users" component={UsersScreen} />
    //   </Stack.Navigator>

    //   <StatusBar style="auto" />
    // </NavigationContainer>
    <FetchChallange />
  );
}
