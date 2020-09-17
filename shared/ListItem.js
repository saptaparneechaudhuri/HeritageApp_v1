import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

const ListItem = ({ texts }) => {
  return (
    <View style={{ marginTop: 20 }}>
      {texts.map((item, index) => (
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
      ))}
    </View>
  );
};

export default ListItem;
