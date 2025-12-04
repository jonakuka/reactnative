import React from "react";
import { View } from "react-native";
import StudentInfo2 from "../components/StudentInfo2";

function ProfileScreen2() {
    return (
        <View>
            <StudentInfo2
                fullname={"Jona"}
                position={"Developer"}
                description={"I am a developer with 5 years of experience."}
                
            />
        </View>
    );
}

export default ProfileScreen2;