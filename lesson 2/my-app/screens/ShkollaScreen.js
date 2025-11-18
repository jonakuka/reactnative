import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const students = [
  { id: '1', firstName: 'Eden', surname: 'Rocha', birthday: '2008-02-14' },
  { id: '2', firstName: 'Kaylen', surname: 'Tyler', birthday: '2009-06-05' },
  { id: '3', firstName: 'Ellie', surname: 'Mcclure', birthday: '2008-11-30' },
  { id: '4', firstName: 'Journey', surname: 'Blackburn', birthday: '2009-09-12' },
];

const ShkollaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>Shkolla</Text>
          <Text style={styles.headerSubtitle}>Students List</Text>
        </View>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Details', { student: students[0] })}
        >
          <Text style={styles.headerButtonText}>View</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const firstName = item.firstName;
          const surname = item.surname;
          const birthday = item.birthday;
          const id = item.id;

          let fullName = `${firstName} ${surname}`;
          const initials = `${(firstName || '').charAt(0)}${(surname || '').charAt(0)}`.toUpperCase();

          return (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.75}
              onPress={() => navigation.navigate('Details', { student: item })}
            >
              <View style={styles.cardRow}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{initials}</Text>
                </View>

                <View style={styles.cardBody}>
                  <Text style={styles.cardName}>{fullName}</Text>
                  <Text style={styles.cardText}>Birthday: {birthday}</Text>
                  <Text style={[styles.cardText, { marginTop: 6, color: '#8a97a6' }]}>ID: {id}</Text>
                </View>

                <Text style={styles.chevron}>›</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 36,
    backgroundColor: '#eef6ff',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 14,
    color: '#0b3d91',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    maxWidth: 520,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#062a66',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#556072',
    marginTop: 2,
  },
  headerButton: {
    backgroundColor: '#0b63d6',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  headerButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  card: {
    width: '100%',
    maxWidth: 520,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    marginBottom: 12,
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    // elevation for Android
    elevation: 3,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#062a66',
  },
  cardText: {
    fontSize: 14,
    marginTop: 6,
    color: '#556072',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0b63d6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
  cardBody: {
    flex: 1,
  },
  chevron: {
    fontSize: 28,
    color: '#c2c8d2',
    marginLeft: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginTop: 4,
    color: '#333',
  },
  instructionsBox: {
    marginTop: 18,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#eaf2ff',
    width: '100%',
    maxWidth: 520,
  },
  instructionsTitle: {
    fontWeight: '700',
    marginBottom: 6,
    color: '#0b3d91',
  },
  instructionsText: {
    fontSize: 13,
    color: '#444',
  },
});

export default ShkollaScreen;
