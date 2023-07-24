import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTab from "./HomeTab";
import ClassTab from "./ClassTab";
import ProfileTab from "./ProfileTab";

import HomeIcon from "../svg/HomeIcon";
import ClassIcon from "../svg/ClassIcon";
import ProfileIcon from "../svg/ProfileIcon";

const MenuTab = createBottomTabNavigator();

const TabLabelStyle = {
  fontFamily: "Rubik-Bold",
  fontSize: 12,
};

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <MenuTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor:"white",
            paddingTop: 7,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderLeftWidth: 0.2,
            borderRightWidth: 0.2,
            position: "absolute",
            overflow: "hidden",

            height: 58,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#3D38BC",
          tabBarInactiveTintColor: "#C7C5EB",
          tabBarIconStyle: {
            backgroundColor: "red",
          },
        }}
      >
        <MenuTab.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            tabBarLabel: "Нүүр",
            tabBarLabelStyle: TabLabelStyle,
            tabBarIcon: ({ focused, color, size }) => (
              <HomeIcon fill={focused ? "#3D38BC" : "black"} />
            ),
          }}
        />
        <MenuTab.Screen
          name="ClassTab"
          component={ClassTab}
          options={{
            tabBarLabel: "Хичээл",
            tabBarLabelStyle: TabLabelStyle,
            tabBarIcon: ({ focused, color, size }) => (
              <ClassIcon fill={focused ? "#3D38BC" : "black"} />
            ),
          }}
        />
        <MenuTab.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            tabBarLabel: "Миний",
            tabBarLabelStyle: TabLabelStyle,
            tabBarIcon: ({ focused, color, size }) => (
              <ProfileIcon fill={focused ? "#3D38BC" : "black"} />
            ),
          }}
        />
      </MenuTab.Navigator>
    </View>
  );
}
