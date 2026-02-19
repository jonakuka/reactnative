import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Laptop from "../screens/Laptop";

const Stack = createStackNavigator();

const LaptopStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Laptop"
        component={Laptop}
        options={{
          headerStyle: {
            backgroundColor: "#2f3b52",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default LaptopStackNavigator;
