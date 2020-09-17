import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";

const RamayanaPicker = () => {
  const [isLoading, setLoading] = useState(true);
  const [language, setLanguage] = useState("devanagari");
  const [kanda, setKanda] = useState("1");
  const [sarga, setSarga] = useState("1");
  const [sloka, setSloka] = useState("1");

  const [sources, setSources] = useState("2");

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Picker
            selectedValue={language}
            onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
            style={styles.pickerbox}
            mode="dropdown"
          >
            <Picker.Item label="Devanagari" value="devanagari" />
            <Picker.Item label="Bengali" value="bengali" />
            <Picker.Item label="Gujrati" value="gujarati" />
          </Picker>
        </View>
        <View style={styles.container}>
          <Picker
            selectedValue={kanda}
            onValueChange={(itemValue, itemIndex) => setKanda(itemValue)}
            style={styles.pickerbox}
            mode="dropdown"
          >
            <Picker.Item label="Kanda 1" value="1" />
            <Picker.Item label="Kanda 2" value="2" />

            <Picker.Item label="Kanda 3" value="3" />
          </Picker>
        </View>
      </View>
    </ScrollView>
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

export default RamayanaPicker;
