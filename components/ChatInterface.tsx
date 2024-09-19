import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  date: string;
}

const chatData: ChatItem[] = [
  {
    id: "1",
    name: "Smith Mathew",
    avatar: "https://example.com/avatar1.jpg",
    lastMessage: "Hi, David. Hope you're doing....",
    date: "29 mar",
  },
  {
    id: "2",
    name: "Merry An.",
    avatar: "https://example.com/avatar2.jpg",
    lastMessage: "Are you ready for today's part...",
    date: "12 mar",
  },
  {
    id: "3",
    name: "John Walton",
    avatar: "https://example.com/avatar3.jpg",
    lastMessage: "I am sending you a parcel rece...",
    date: "08 Feb",
  },
  {
    id: "4",
    name: "Monica Randawa",
    avatar: "https://example.com/avatar4.jpg",
    lastMessage: "Hope you're doing well today..",
    date: "02 Feb",
  },
  {
    id: "5",
    name: "Innoxent Jay",
    avatar: "https://example.com/avatar5.jpg",
    lastMessage: "Let's get back to the work, You..",
    date: "25 Jan",
  },
  {
    id: "6",
    name: "Harry Samit",
    avatar: "https://example.com/avatar6.jpg",
    lastMessage: "Listen david, i have a problem..",
    date: "18 Jan",
  },
];

const ChatInterface: React.FC = () => {
  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/">
          <Ionicons name="arrow-back" size={24} color="black" />
        </Link>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="gray" />
            <Text style={styles.searchText}>Search here...</Text>
            <TouchableOpacity>
              <Ionicons name="mic-outline" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    margin: 16,
    padding: 8,
  },
  searchText: {
    flex: 1,
    marginLeft: 8,
    color: "gray",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "gray",
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
});

export default ChatInterface;
