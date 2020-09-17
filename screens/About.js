import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to About Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});

export default About;
