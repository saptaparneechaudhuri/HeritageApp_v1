import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Header from "../components/Header";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "tomato",
          height: 80,
        },
        //  headerTitleAlign: "center",

        headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default HomeStack;
