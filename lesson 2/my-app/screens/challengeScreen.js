import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const students = [
  { id: '1', firstName: 'Eden', surname: 'Rocha', birthday: '2008-02-14' },
  { id: '2', firstName: 'Kaylen', surname: 'Tyler', birthday: '2009-06-05' },
  { id: '3', firstName: 'Ellie', surname: 'Mcclure', birthday: '2008-11-30' },
  { id: '4', firstName: 'Journey', surname: 'Blackburn', birthday: '2009-09-12' },
];

const ChallengeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>List of Students</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
       
          const firstName = item.firstName;
          const surname = item.surname;
          const birthday = item.birthday;

         
          let fullName = `${firstName} ${surname}`;

          return (
            <View style={styles.card}>
              <Text style={styles.cardName}>{fullName}</Text>
              <Text style={styles.cardText}>Birthday: {birthday}</Text>
              <Text style={styles.cardText}>ID: {item.id}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardText: {
    fontSize: 14,
    marginTop: 4,
    color: '#333',
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
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f3f3f3',
  },
  instructionsTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },
  instructionsText: {
    fontSize: 13,
    color: '#444',
  },
});

export default ChallengeScreen;
