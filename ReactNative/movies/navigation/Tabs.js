import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { BACK_COLOR, DARK_GRAY, LIGHT_GRAY, YELLOW_COLOR } from "../colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function Tabs() {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? BACK_COLOR : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? BACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BACK_COLOR,
        tabBarInactiveTintColor: isDark ? DARK_GRAY : LIGHT_GRAY,
        headerStyle: {
          backgroundColor: isDark ? BACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : BACK_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "film" : "film-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "tv" : "tv-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
