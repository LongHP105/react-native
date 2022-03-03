import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={30} color='white' />
      <Text style={styles.title}>My Todos List</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 20,
    backgroundColor: "coral",
    flexDirection: 'row',
    paddingLeft: 20,
    alignContent: "center"
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    paddingRight: 40
  },
});
