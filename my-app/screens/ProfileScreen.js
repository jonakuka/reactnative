import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import Projects from "../components/Projects";

export default function ProfileScreen() {
  // reuse existing asset(s) - adjust paths if your images differ
  const avatar = require("../assets/person1.jpg");

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ProfileInfo
        fullname="JOHN DOE"
        position="UI/UX Designer"
        description="We're passionate about creating beautiful design for startups & leading brands"
        image={avatar}
      />

      <View style={styles.projectsHeader}>
        <Text style={styles.projectsTitle}>PROJECTS</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View style={styles.projectsRow}>
        <Projects image={avatar} />
        <Projects image={avatar} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  content: { alignItems: "center", paddingVertical: 20 },
  projectsHeader: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  projectsTitle: { fontWeight: "700", fontSize: 14 },
  viewAll: { color: "#f5a623", fontWeight: "600" },
  projectsRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});