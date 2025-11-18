import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StudentDetailScreen = ({ route, navigation }) => {
  const { student } = route.params || {};

  const initials = student ? `${(student.firstName||'').charAt(0)}${(student.surname||'').charAt(0)}`.toUpperCase() : '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Details</Text>

      {student ? (
        <View style={styles.card}>
          <View style={styles.detailRow}>
            <View style={styles.detailAvatar}>
              <Text style={styles.detailAvatarText}>{initials}</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.name}>{student.firstName} {student.surname}</Text>
              <Text style={styles.text}>Birthday: {student.birthday}</Text>
              <Text style={styles.text}>ID: {student.id}</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.text}>No student data provided.</Text>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0b3d91',
    marginBottom: 12,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailAvatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#0b63d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailAvatarText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 28,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#062a66',
  },
  text: {
    fontSize: 14,
    color: '#556072',
    marginTop: 6,
  },
  buttonWrap: {
    width: '100%',
    maxWidth: 520,
  },
  backButton: {
    width: '100%',
    maxWidth: 520,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#0b63d6',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default StudentDetailScreen;
