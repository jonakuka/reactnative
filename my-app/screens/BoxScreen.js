import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>flexDirection: "row"</Text>
            <View style={styles.boxArea} >
                <View style={[styles.box,{backgroundColor:"powderblue"}]} >1</View>
                 <View style={[styles.box,{backgroundColor:"skyblue"}]} >2</View>
                  <View style={[styles.box,{backgroundColor:"darkblue"}]} >3





                  </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginBottom: 12,
    },
    boxArea:{
        width:"95%",
        height:"100%",
        backgroundColor:"#eaf4fb",
        justifyContent:"flex-start", //flex-start //center //flex-end //space-between //space-around //space-evenly
        paddingHorizontal:10,
        flexDirection:"row-reverse", //row //row-reverse
        alignItems:"stretch", //flex-start //center //flex-end //stretch
    },
    box:{
        width:50,
        height:50,
    }
});

export default BoxScreen;