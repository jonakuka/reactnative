import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function StudentInfo({ fullname, position, description, image }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerImageWrap}>
                <Image source={{ uri: image }} style={styles.headerImage} />
            </View>

            <View style={styles.card}>
                <Text style={styles.name}>{fullname}</Text>
                <Text style={styles.position}>{position}</Text>
                <Text style={styles.description}>{description}</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>HIRE HIM</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', marginTop: 20 },
    headerImageWrap: {
        width: 260,
        height: 180,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#9fd3ef',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImage: { width: '100%', height: '100%', resizeMode: 'cover' },
    card: {
        width: 260,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 14,
        marginTop: -30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3
    },
    name: { fontWeight: '700', fontSize: 16, marginBottom: 4 },
    position: { color: '#666', fontSize: 12, marginBottom: 8 },
    description: { color: '#444', fontSize: 12, textAlign: 'center', marginBottom: 12 },
    button: {
        backgroundColor: '#ffcc2f',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20
    },
    buttonText: { fontWeight: '700', color: '#2d2d2d' }
});