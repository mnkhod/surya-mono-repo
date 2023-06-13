import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";

import HomeTab from "./HomeTab";
import ClassTab from "./ClassTab";
import ProfileTab from "./ProfileTab";

import HomeIcon from "../assets/icons/HomeIcon.svg";
import ClassIcon from "../assets/icons/ClassIcon.svg";
import ProfileIcon from "../assets/icons/ProfileIcon.svg";

const MenuTab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <MenuTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle:{
            height: 70, 
          },
          tabBarIconStyle:{
            paddingBottom: 0, 
          },
          tabBarLabelStyle: {
            paddingBottom: 10,
          }
        }}
      >
        <MenuTab.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            tabBarLabel: "Нүүр",
            tabBarIcon: ({}) => <Image source={HomeIcon} className="w-6 h-6" />,
          }}
        />
        <MenuTab.Screen
          name="ClassTab"
          component={ClassTab}
          options={{
            tabBarLabel: "Хичээл",
            tabBarIcon: ({}) => (
              <Image
                source={ClassIcon}
                className="w-6 h-6"
              />
            ),
          }}
        />
        <MenuTab.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            tabBarLabel: "Миний",
            tabBarIcon: ({}) => (
              <Image
                source={ProfileIcon}
                className="w-6 h-6"
              />
            ),
          }}
        />
      </MenuTab.Navigator>
    </View>
  );
}
