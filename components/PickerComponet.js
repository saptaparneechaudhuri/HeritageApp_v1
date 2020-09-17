import React, { useState } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
//import { Picker } from "@react-native-community/picker";

const PickerComponent = () => {
  const [language, setLanguage] = useState("dv");
  const [chapter, setChapter] = useState("1");
  const [sloka, setSloka] = useState("1");
  const [sources, setSources] = useState("moolshloka");
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
          style={styles.pickerbox}
          mode="dropdown"
        >
          <Picker.Item label="Devanagari" value="dv" />
          <Picker.Item label="Bengali" value="bn" />
          <Picker.Item label="Gujrati" value="gu" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={chapter}
          onValueChange={(itemValue, itemIndex) => setChapter(itemValue)}
          style={styles.pickerbox}
          mode="dropdown"
        >
          <Picker.Item label="Chapter 1" value="1" />
          <Picker.Item label="Chapter 2" value="2" />
          <Picker.Item label="Chapter 3" value="3" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={sloka}
          onValueChange={(itemValue, itemIndex) => setSloka(itemValue)}
          style={styles.pickerbox}
          mode="dropdown"
        >
          <Picker.Item label="Sloka 1" value="1" />
          <Picker.Item label="Sloka 2" value="2" />
          <Picker.Item label="Sloka 3" value="3" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={sources}
          onValueChange={(itemValue, itemIndex) => setSources(itemValue)}
          style={styles.pickerbox}
          mode="dropdown"
        >
          <Picker.Item label="Mool Shloka" value="2" />
          <Picker.Item
            label="Hindi Translation By Swami Ramsukhdas"
            value="9"
          />
          <Picker.Item
            label="Hindi Translation By Swami Tejomayananda"
            value="10"
          />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerbox: {
    //   height: 50,
    //  width: 350,
    // marginTop: 5,
    // //  backgroundColor: "gray",
    // // borderStyle: "dotted",
    // borderColor: "gray",
    // borderWidth: 1,
  },
  mainContainer: {
    padding: 20,
    //flex: 1,
  },
  container: {
    borderColor: "gray",
    borderBottomWidth: 2,
    // borderStyle: "dashed",
    // borderRadius: 1,
  },
});

export default PickerComponent;
