import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = Math.min(360, width * 0.9);

export default function ProfileInfo({ fullname, position, description, image }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarWrap}>
        <Image source={image} style={styles.avatar} resizeMode="cover" />
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>{fullname}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.desc}>{description}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: CARD_WIDTH,
    alignItems: "center",
    marginTop: 10,
  },
  avatarWrap: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 0.6,
    backgroundColor: "#6ec1d4",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatar: {
    width: "60%",
    height: "60%",
    borderRadius: 60,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginTop: -30,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
  },
  name: { fontWeight: "800", fontSize: 16 },
  position: { fontSize: 12, color: "#888", marginVertical: 6 },
  desc: { fontSize: 12, color: "#555", textAlign: "center", marginBottom: 12 },
  button: {
    backgroundColor: "#f5a623",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});