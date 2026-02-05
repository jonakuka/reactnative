import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from "./TabNavigator";
import { AboutStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();
console.log("AboutStackNavigator:", AboutStackNavigator);
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="RootTabs" component={BottomTabNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="AboutRoot" component={AboutStackNavigator} options={{ title: 'About' }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
