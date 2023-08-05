import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeNavigationBG from "../assets/HomeNavigationBG.png";

import SingleCourseTab from "./SingleCourseTab";
import GroupCourseTab from "./GroupCourseTab";

const CourseTab = createMaterialTopTabNavigator();
import { Image } from "expo-image";
import { HomeTabProp } from "../types/NavigationTypes";
import Navigation from "../components/Navigation";

export default function HomeTab({ navigation }: HomeTabProp) {
  return (
    <View className="flex-1 bg-white">
      <View className="relative">
        <Image
          source={HomeNavigationBG}
          className="h-[230px] w-[190px] absolute bottom-0 right-0 "
          contentFit="cover"
        />
        <Navigation navigation={navigation} />
        <View className="p-6">
          <Text className="text-4xl font-rubik-bold">
            ТАНЫ СУРАХ
          </Text>
          <Text className="text-4xl font-rubik-bold">
            ЭРМЭЛЗЭЛД
          </Text>
          <Text className="text-4xl font-rubik-bold">
            ТӨГС НИЙЦНЭ
          </Text>
        </View>
      </View>
      <View className="mt-6"></View>
      <CourseTab.Navigator initialRouteName="CourseTab">
        <CourseTab.Screen
          name="SingleCourseTab"
          component={SingleCourseTab}
          options={{ title: "Ганцаарчилсан" }}
        />
        <CourseTab.Screen
          name="GroupCourseTab"
          component={GroupCourseTab}
          options={{ title: "Групп сургалт" }}
        />
      </CourseTab.Navigator>
    </View>
  );
}
