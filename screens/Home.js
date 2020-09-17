import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";

const Home = ({ navigation }) => {
  const [heritageText, setHeritagetext] = useState([
    {
      id: "1",
      title: "Shrimad Bhagavad Gita",
      levels: "2",
      machine_name: "gita",
      body: "Content for Shrimad Bhagavad Gita",
    },
    {
      id: "2",
      title: "Valmiki Ramayana",
      levels: "3",
      machine_name: "ramayana",
      body: "Content for Valmiki Ramayana",
    },
    {
      id: "3",
      title: "Brahma Sutra",
      levels: "3",
      machine_name: "brahmasutra",
      body: "Content for Brahma Sutra",
    },
    {
      id: "4",
      title: "Yoga Sutra",
      levels: "4",
      machine_name: "yogasutra",
      body: "Content for Yoga Sutra",
    },
  ]);

  // const [heritageText, setHeritagetext] = useState([]);

  // const getTextsFromAPI = async () => {
  //   let response = await fetch("http://172.27.13.38/api/texts?_format=json");
  //   let response_json = await response.json();
  //   setHeritagetext(response_json);
  // };
  // useEffect(() => {
  //   getTextsFromAPI();
  // });

  const renderItem = ({ item }) => {
    return (
      // Navigate to the Detail screen
      <TouchableOpacity onPress={() => navigation.navigate("Detail", item)}>
        <Card>
          <Text style={styles.titleText}>{item.title}</Text>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={heritageText}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  alignItems: "center",
    // justifyContent: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
