import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { YELLOW_COLOR } from "../colors";
const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>go to two</Text>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text>go to three</Text>
  </TouchableOpacity>
);
const ScreenThree = ({ navigation: { setOptions } }) => (
  <TouchableOpacity onPress={() => setOptions({ title: "Hello!" })}>
    <Text>Change title</Text>
  </TouchableOpacity>
);
const Stack = createNativeStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: YELLOW_COLOR,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="One" component={ScreenOne} />
      <Stack.Screen name="Two" component={ScreenTwo} />
      <Stack.Screen
        name="Three"
        component={ScreenThree}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}
export default Stacks;
