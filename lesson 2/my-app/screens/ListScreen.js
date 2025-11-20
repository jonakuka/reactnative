import React from "react";
import { Text, StyleSheet, View, FlatList, Button} from "react-native";

const students = [
  { name: "Eden", surname: "Rocha", age: "17" },
  { name: "Kaylen", surname: "Tyler", age: "15" },
  { name: "Ellie", surname: "Mcclure", age: "17" },
  { name: "Journey", surname: "Blackburn", age: "16" },
];

const ListScreen = () => {
  

  let count =0;
  return (
    <View>
      <Text style={styles.textStyle}>butoni eshte klikuar {count}</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {item.name} {item.surname} — Age {item.age}
          </Text>
        )}
      />
      <TouchableOpacity 
      style={styles.touchableBtn}
      onPress={()=>console.log("butoni eshte klikuar nga touchable opacity",count++)}>
        <Text style={styles.btnText}> Click here </Text>

      </TouchableOpacity>
      <Button
      title="Click me"
      color="purple"
      onPress={()=>console.log("butoni eshte klikuar",count++)}
      >
        

      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginVertical: 5,
  },
  btnTText:{
    color:"white",
    textAlign:"center",
    fontSize:25,
    fontWeight:"bold"

  },
  touchableBtn:{
    backgroundColor:"purple",
    marginVertical:15,
    paddingVertical:20,
    borderRadius:6,
    marginHorizontal:20,

  }
});

export default ListScreen;
