import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function HomeScreen() {

  const todayTasks = [
    { id: 1, title: "Math Assignment", time: "10:00 AM" },
    { id: 2, title: "Physics Lecture", time: "1:00 PM" },
    { id: 3, title: "Study Session", time: "6:00 PM" }
  ];

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Student 👋</Text>
        <Text style={styles.subtitle}>Let's plan your day</Text>
      </View>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Today's Progress</Text>
        <Text style={styles.progressNumber}>3 / 5 Tasks Done</Text>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsContainer}>

        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="plus-circle" size={24} color="#fff" />
          <Text style={styles.actionText}>Add Task</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="calendar" size={24} color="#fff" />
          <Text style={styles.actionText}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="book" size={24} color="#fff" />
          <Text style={styles.actionText}>Notes</Text>
        </TouchableOpacity>

      </View>

      {/* Today's Tasks */}
      <Text style={styles.sectionTitle}>Today's Schedule</Text>

      {todayTasks.map(task => (
        <View key={task.id} style={styles.taskCard}>
          <View>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskTime}>{task.time}</Text>
          </View>
          <Icon name="check-circle" size={22} color="#4CAF50" />
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 20
  },

  header: {
    marginTop: 40,
    marginBottom: 20
  },

  greeting: {
    fontSize: 26,
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 16,
    color: "#777"
  },

  progressCard: {
    backgroundColor: "#4A6CF7",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25
  },

  progressTitle: {
    color: "#fff",
    fontSize: 16
  },

  progressNumber: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25
  },

  actionBtn: {
    backgroundColor: "#4A6CF7",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "30%"
  },

  actionText: {
    color: "#fff",
    marginTop: 5
  },

  taskCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  taskTitle: {
    fontSize: 16,
    fontWeight: "600"
  },

  taskTime: {
    color: "#777"
  }
});