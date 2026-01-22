import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = ({ size = 72 }) => {
  const radius = size / 2;
  return (
    <View style={[styles.wrapper, { width: size, height: size, borderRadius: radius }]}>
      <Text style={[styles.text, { fontSize: Math.round(size / 2.5) }]}>SP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default Logo;
