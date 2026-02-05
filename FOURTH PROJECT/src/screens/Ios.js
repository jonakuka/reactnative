import React from "react";
import{View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity} from "react-native";
import data from "../data/data.json";
import Item from "../components/Item";

class Ios extends React.Component {
    constructor() {
        super();
        this.state = {
            product:[],
    };
}
componentDidMount() {
    this.setState({
        product: data.ios
    });
}
render() {
    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</Text>
                 
                
            </View>
            <View style={styles.productContainer}>
                    <FlatList
                        data={this.state.product}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Item item={item} />}
                    />
                 </View>

                 <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View More</Text>
                 </TouchableOpacity>
        </ScrollView>
    );
}
}
export default Ios;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    desc:{
        marginBottom: 15,
        fontSize: 14,
    },
    productContainer: {
        marginBottom: 20,
    },
    btn:{
        backgroundColor: "#2f3b52",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    btnText:{
        color: "#fff",
    }
    })