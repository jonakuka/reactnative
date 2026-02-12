import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
const Single1 = ({ navigation, route }) => {
const { item } = route.params;
return (
<ScrollView contentContainerStyle={styles.container}>
<View style={styles.imageContainer}>
<Image 
source={{ uri: item.image }} 

style={styles.image} 
resizeMode="cover"/>
</View>
<View style={styles.cardHolder}>
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.price}>${item.price}</Text>
</View>
<Text style={styles.description}>
    {item.description}
    </Text>

<TouchableOpacity 
style={styles.btn}
 onPress={() => navigation.goBack()}
 >
<Text style={styles.btnText}>Go Back</Text>
</TouchableOpacity>

</ScrollView>

)
}
export default Single1;
const styles = StyleSheet.create({
container: {
    padding: 20,
backgroundColor: "#f2f2f2",
flexGrow: 1,
},imageContainer: {
     borderRadius:20,
     overflow:"hidden"
},image: {
width: "100%",
height: 300,
},
cardHolder:{
    flexDirection:"row",
    justifyContent:"space-between",
alignItems:"center",
marginTop:10
},
name:{
    fontSize:24,
fontWeight:"bold",
color: "#2c2c54",
},
price:{
fontSize:20,
fontWeight:"bold",
color: "#2c2c54",
},
price:{
    marginTop:10,
fontSize:20,
color: "#555",
},
btn:{
    marginTop:30,
backgroundColor: "#2bbd8",
padding:15,
borderRadius:10,
alignItems:"center",
},
btnText:{
color: "white",
fontWeight:"bold",
}
});