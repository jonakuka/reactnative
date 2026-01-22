import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../components/Logo';

const Settings = () => (
  <View style={styles.container}>
    <Logo size={88} />
    <Text style={styles.title}>Settings</Text>
    <Text>App settings and preferences go here.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
});

export default Settings;
