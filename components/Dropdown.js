import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, StyleSheet } from "react-native";

const Dropdown = () => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Football", value: "football" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 90,
  },
});

export default Dropdown;
