import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constant from "expo-constants";

const Header = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <AntDesign
        name="menufold"
        size={24}
        color="black"
        style={styles.icon}
        onPress={openDrawer}
      />
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>Heritage SuperSite</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    color: "beige",
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitle: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 5,
    color: "beige",
  },
});

export default Header;
