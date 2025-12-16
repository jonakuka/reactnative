import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
  RefreshControl,
} from "react-native";

const AVATAR_COLORS = [
  "#2b6cb0",
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#8b5cf6",
  "#06b6d4",
  "#ef6aa6",
];

function colorForId(id) {
  return AVATAR_COLORS[id % AVATAR_COLORS.length];
}

export default function FetchChallange() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    load();
  }, [load]);

  const onPressUser = (item) => {
    Alert.alert(item.name, `${item.email}\n${item.phone}\n${item.website}`, [
      { text: "Close", style: "cancel" },
    ]);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    );
  }, [users, query]);

  const renderItem = ({ item }) => {
    const initials = (item.name || "U")
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("");
    const bg = colorForId(item.id);
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.card}
        onPress={() => onPressUser(item)}
      >
        <View style={[styles.avatar, { backgroundColor: bg }]}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.badge}>{item.company?.name}</Text>
          </View>

          <Text style={styles.username}>@{item.username}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.meta}>{item.email}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.meta}>{item.address?.city}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Fetching people…</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.errorText}>Unable to load users: {error}</Text>
        <TouchableOpacity style={styles.retry} onPress={load}>
          <Text style={styles.retryText}>Try again</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>People</Text>
          <Text style={styles.headerSubtitle}>{filtered.length} results</Text>
        </View>

        <View style={styles.searchWrap}>
          <TextInput
            placeholder="Search by name, username or email"
            placeholderTextColor="#9aa4b2"
            value={query}
            onChangeText={setQuery}
            style={styles.search}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#2563eb" />
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No users found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8fb" },
  centered: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f6f8fb" },

  header: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e6eef8",
  },
  headerTitle: { fontSize: 22, fontWeight: "800", color: "#0b1220" },
  headerSubtitle: { marginTop: 2, color: "#6b7280", fontSize: 13 },

  searchWrap: { marginTop: 10, paddingBottom: 6 },
  search: {
    backgroundColor: "#f1f5f9",
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14,
    color: "#0b1220",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "transparent",
  },

  list: { padding: 12, paddingBottom: 28 },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 14,
    ...Platform.select({
      ios: {
        shadowColor: "#0b1220",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
      },
      android: { elevation: 3 },
      default: { boxShadow: "0 8px 22px rgba(11,18,32,0.06)" },
    }),
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: { color: "#fff", fontWeight: "800", fontSize: 20 },

  info: { flex: 1 },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  name: { fontSize: 16, fontWeight: "800", color: "#071023", flexShrink: 1 },
  badge: {
    backgroundColor: "#eef2ff",
    color: "#6b21a8",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 11,
    overflow: "hidden",
    marginLeft: 8,
  },

  username: { color: "#2563eb", marginTop: 4, fontSize: 13 },
  metaRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  meta: { color: "#6b7280", fontSize: 13 },
  dot: { color: "#cbd5e1", marginHorizontal: 8 },

  loadingText: { marginTop: 12, color: "#475569" },
  errorText: { color: "#ef4444", textAlign: "center", paddingHorizontal: 18 },
  retry: {
    marginTop: 12,
    backgroundColor: "#2563eb",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  retryText: { color: "#fff", fontWeight: "700" },

  empty: { paddingTop: 60, alignItems: "center" },
  emptyText: { color: "#94a3b8" },
});
