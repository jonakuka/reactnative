import { View, Text, FlatList} from "react-native-web"
import React from "react";


   const studentat =[
        {name:"Edenn", surname:"Kurtolli" ,age:"17"},
        {name:"Edenn", surname:"Kurtolli" ,age:"17"},
        {name:"Edenn", surname:"Kurtolli" ,age:"17"}
   ]


const ListScreens = () => {
 return(
        <View>
        <Text style={styles.textStyle}>Lista e  studentave </Text>

        <FlatList data={studentat}
        keyExtractor={(item)=item.name}
        renderItem={(item)=>(
            <Text style={styles.textStyle}> {item.name} {item.surname}
            -mosha e personit eshte: {item.age}</Text>

        )}
        
        >

        </FlatList>
        </View>
    )
}

const style = StyleSheet.create (
    {
    textStyle:{
        fontsize:18,
        marginVertical:5,
    },
}
)

export default ListScreen;