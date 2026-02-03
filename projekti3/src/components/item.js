import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Item = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 18,
    padding: 8,
  },
    image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    },
    textContainer: {
        paddingHorizontal: 12,
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    category:{
        color: '#2bbdff',
    },
    desc:{
        fontSize:12,
        marginVertical:5
    },
    price:{
        backgroundColor:'#2bbdff',
        color:'#fff',
        alignSelf:'flex-start',
        borderRadius:12,
        padding:10,
    }
})