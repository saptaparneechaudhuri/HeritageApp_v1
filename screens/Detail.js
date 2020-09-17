import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PickerComponent from "../components/PickerComponet";
import GitaPicker from "../components/GitaPicker";
import RamayanaPicker from "../components/RamayanaPicker";

const Detail = ({ route }) => {
  return (
    <View style={styles.container}>
      {/* <Text>{route.params.body}</Text> */}
      {route.params.levels == "2" ? (
        <GitaPicker
          textid={route.params.id}
          textname={route.params.machine_name}
        />
      ) : (
        <RamayanaPicker />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Detail;
