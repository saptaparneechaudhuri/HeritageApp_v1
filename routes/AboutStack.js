import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../components/Header";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "tomato",
          height: 80,
        },

        headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
    //  </NavigationContainer>
  );
};

export default AboutStack;
