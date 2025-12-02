import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import StudentInfo from './components/StudentInfo';
import Projects from './components/Projects';

export default function ProfileScreen() {
    const student = {
        fullname: 'JOHN DOE',
        position: 'UI/UX Designer',
        description: "We're passionate about creating beautiful design for startups & leading brands",
        image: 'https://i.pravatar.cc/400?img=12'
    };

    const projectImages = [
        'https://picsum.photos/seed/p1/400/300',
        'https://picsum.photos/seed/p2/400/300',
        'https://picsum.photos/seed/p3/400/300'
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <StudentInfo
                    fullname={student.fullname}
                    position={student.position}
                    description={student.description}
                    image={student.image}
                />

                <Projects images={projectImages} />
                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', paddingVertical: 12 }
});