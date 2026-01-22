import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BottomTabNavigator from "./TabNavigator";
import { AboutStackNavigator } from "./StackNavigator";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerScroll}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://placekitten.com/200/200' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Jane Developer</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                icon={({ color, size }) => (
                    <MaterialCommunityIcons name="help-circle" color={color} size={size} />
                )}
                onPress={() => alert('Open help docs')}
            />
        </DrawerContentScrollView>
    );
}

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                drawerType: 'back',
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerStyle: { backgroundColor: '#fff' , width: 260},
                drawerActiveTintColor: '#FF6347',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="About"
                component={AboutStackNavigator}
                options={{
                    drawerLabel: 'About',
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information-outline" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerLabel: 'Profile',
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
                    drawerLabel: 'Settings',
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    header: { padding: 16, alignItems: 'center' },
    avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
    name: { fontSize: 16, fontWeight: '600' },
    drawerScroll: { paddingTop: 0 },
});

export default DrawerNavigator;