import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const icon = require("../../assets/icon.png");

  const slides = [
    { id: "s1", title: "Welcome", subtitle: "Start here", image: icon },
    { id: "s2", title: "Features", subtitle: "What we offer", image: icon },
    { id: "s3", title: "Join", subtitle: "Get started", image: icon },
    { id: "s4", title: "Enjoy", subtitle: "Have fun", image: icon },
  ];

  const { width } = Dimensions.get("window");
  const listRef = useRef(null);

  const onMomentumScrollEnd = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setActiveIndex(index);
  };

  const goTo = (index) => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: index * width, animated: true });
      setActiveIndex(index);
    }
  };

  const renderSlide = ({ item }) => (
    <View style={[styles.slide, { width }]} key={item.id}>
      <Image source={item.image} style={[styles.postImage, { width }]} resizeMode="cover" />
      <View style={styles.slideOverlay}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.slideSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(s) => s.id}
        renderItem={renderSlide}
        onMomentumScrollEnd={onMomentumScrollEnd}
        ref={listRef}
      />

      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => goTo(i)} style={styles.dotTouch}>
            <MaterialCommunityIcons
              name={activeIndex === i ? "star" : "star-outline"}
              size={activeIndex === i ? 20 : 18}
              color={activeIndex === i ? "#FFD700" : "#ccc"}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },swiper:{
    flex:1,
  },
  slide:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f5f5f5"
  },
  slideImage:{
    width:"90%",
    height:undefined,
    aspectRatio:16/9,
    borderRadius:10,
  }

  ,dotsContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#ccc",
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#007AFF",
    width: 12,
    height: 12,
  },
  dotTouch: {
    padding: 6,
  },
  webNav: {
    position: "absolute",
    top: "45%",
    left: 0,
    right: 0,
    zIndex: 5,
    height: 0,
  },
  navButton: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  cardSubtitle: {
    color: "#666",
    fontSize: 13,
  },
  postContainer: {
    marginBottom: 24,
    backgroundColor: "white",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: "700",
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#eee",
  },
  actionsRow: {
    flexDirection: "row",
    padding: 10,
  },
  actionIcon: {
    marginRight: 14,
  },
  captionRow: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  caption: {
    color: "#333",
    flexShrink: 1,
  },

});

export default Home;
