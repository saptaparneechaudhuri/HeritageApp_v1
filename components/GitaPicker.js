import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
//import { Picker } from "@react-native-community/picker";
import { WebView } from "react-native-webview";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";
import ListItem from "../shared/ListItem";

const GitaPicker = ({ textid, textname }) => {
  const [isLoading, setLoading] = useState(true);
  const [language, setLanguage] = useState("devanagari");
  const [chapter, setChapter] = useState("1");
  const [sloka, setSloka] = useState("1");
  // const [sources, setSources] = useState("");
  const [sourcesArray, setSourcesArray] = useState([]);
  // const [sublevels, setSubLevels] = useState({
  //   "Chapter 1": 47,
  //   "Chapter 2": 72,
  //   "Chapter 3": 43,
  //   "Chapter 4": 42,
  //   "Chapter 5": 29,
  //   "Chapter 6": 47,
  //   "Chapter 7": 30,
  //   "Chapter 8": 28,
  //   "Chapter 9": 34,
  //   "Chapter 10": 42,
  //   "Chapter 11": 55,
  //   "Chapter 12": 20,
  //   "Chapter 13": 35,
  //   "Chapter 14": 27,
  //   "Chapter 15": 20,
  //   "Chapter 16": 24,
  //   "Chapter 17": 28,
  //   "Chapter 18": 78,
  // });
  // never use useState({}), leave it empty
  // json.structure is an object
  const [sublevels, setSubLevels] = useState();

  const [posts, setPosts] = useState({});

  // // leaving an empty dependency array renders the useEffect just once
  useEffect(() => {
    fetch(`http://172.27.13.38/api/${textid}/sources`)
      .then((response) => response.json())
      .then((json) => setSourcesArray(json));
  }, []);

  var sources_dropdown = [];
  var mool_id = null;
  for (var item of sourcesArray) {
    // each item is an object
    if (item["type"] == "moolam" && item["format"] == "text") {
      mool_id = item["id"];
      // push the mool shloka at front
      sources_dropdown.unshift(
        <Picker.Item
          key={item["id"]}
          label={item["title"]}
          value={item["id"]}
        />
      );
    } else {
      if (item["format"] == "text") {
        sources_dropdown.push(
          <Picker.Item
            key={item["id"]}
            label={item["title"]}
            value={item["id"]}
          />
        );
      }
    }
  }
  const [sources, setSources] = useState(mool_id);

  var position = chapter + "." + sloka;
  //var field_name = "field_gita_" + sources + "_text";
  var field_name = `field_${textname}_${sources}_text`;

  useEffect(() => {
    fetch(
      `http://172.27.13.38/api/${textid}?position=${position}&language=${language}&field_gita_${mool_id}_text=1&${field_name}=1`
    )
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [position, language, field_name]);

  // console.log(sourcesArray);

  // Get the TOC for the text
  useEffect(() => {
    fetch(`http://172.27.13.38/api/${textid}/toc`)
      .then((response) => response.json())
      .then((json) => setSubLevels(json.structure));
  }, []);

  //console.log(sourcesArray);

  var text = [];
  for (var k in posts) {
    if (posts.hasOwnProperty(k)) {
      text.push(posts[k]);
    }
  }

  //console.log(text.slice(2));
  var texts = text.slice(2);
  var sloka_dropdown = [];
  var chapter_dropdown = [];
  // for (let i = 0; i < 18; i++) {
  //   temp.push(<Picker.Item label={`Sloka ${i + 1}`} value={i + 1} />);
  // }
  // console.log(`sublevels${sublevels}`);

  // Set the sublevels according to the chapter selected
  for (var k in sublevels) {
    if (sublevels.hasOwnProperty(k)) {
      //  console.log(k);
      var chapter_selected = k.split(" ");
      chapter_dropdown.push(
        <Picker.Item key={k} label={k} value={chapter_selected[1]} />
      );

      if (chapter === chapter_selected[1]) {
        for (let i = 1; i <= sublevels[k]; i++) {
          sloka_dropdown.push(
            <Picker.Item key={`Sloka ${i}`} label={`Sloka ${i}`} value={i} />
          );
        }
      }
    }
  }

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
            selectedValue={chapter}
            onValueChange={(itemValue, itemIndex) => setChapter(itemValue)}
            style={styles.pickerbox}
            mode="dropdown"
          >
            {/* <Picker.Item label="Chapter 1" value="1" />
            <Picker.Item label="Chapter 2" value="2" />
            <Picker.Item label="Chapter 3" value="3" /> */}
            {chapter_dropdown}
          </Picker>
        </View>
        <View style={styles.container}>
          <Picker
            selectedValue={sloka}
            onValueChange={(itemValue, itemIndex) => setSloka(itemValue)}
            style={styles.pickerbox}
            mode="dropdown"
          >
            {/* <Picker.Item label="Sloka 1" value="1" />
            <Picker.Item label="Sloka 2" value="2" />
            <Picker.Item label="Sloka 3" value="3" /> */}
            {sloka_dropdown}
          </Picker>
        </View>
        <View style={styles.container}>
          {/* <Picker
            selectedValue={sources}
            onValueChange={(itemValue, itemIndex) => setSources(itemValue)}
            style={styles.pickerbox}
            mode="dropdown"
          >
            {sourcesArray.map((item) => (
              <Picker.Item key={item.id} label={item.title} value={item.id} />
            ))}
          </Picker> */}
          <Picker
            selectedValue={sources}
            onValueChange={(itemValue, itemIndex) => setSources(itemValue)}
            style={styles.pickerbox}
            mode="dropdown"
          >
            {/* <Picker.Item label="Mool Shloka" value="2" />
            <Picker.Item
              label="Hindi Translation By Swami Ramsukhdas"
              value="9"
            />
            <Picker.Item
              label="Hindi Translation By Swami Tejomayananda"
              value="10"
            /> */}
            {sources_dropdown}
          </Picker>
        </View>
        {/* <ScrollView>{posts.length ? <Text>{posts}</Text> : null}</ScrollView> */}
        {/* <View style={{ padding: 90 }}>
          {isLoading ? <ActivityIndicator /> : <Text>{texts[0].content}</Text>}
        </View>
      </View> */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          {/* {isLoading ? (
            <ActivityIndicator />
          ) : (
            <WebView
              style={{
                width: "100%",
                height: 500,
                fontSize: 20,
                marginTop: 20,
              }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{
                html:
                  '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>' +
                  texts[0].content +
                  "</body></html>",
              }}
            />
          )} */}
          {isLoading ? (
            <ActivityIndicator size={"large"} />
          ) : (
            <ListItem texts={texts} />
          )}
          {/* {texts.map((item, index) => (
            <View key={index}>
              <WebView
                style={{
                  width: "100%",
                  height: 200,

                  marginTop: 20,
                }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{
                  html:
                    '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>' +
                    item.content +
                    "</body></html>",
                }}
              />
            </View>
          ))} */}
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

export default GitaPicker;
