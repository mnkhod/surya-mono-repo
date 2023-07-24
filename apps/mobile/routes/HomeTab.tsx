import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IntroOneBg from "../assets/IntroOneBg.png";
import Logo from "../assets/Logo.png";
import NotificationIcon from "../assets/icons/NotificationIcon.png";
import SearchIcon from "../assets/icons/SearchIcon.png";
import HomeNavigationBG from "../assets/HomeNavigationBG.png";

import SingleCourseTab from "./SingleCourseTab";
import GroupCourseTab from "./GroupCourseTab";

const CourseTab = createMaterialTopTabNavigator();
import { Image } from "expo-image";
import { HomeTabProp } from "../types/NavigationTypes";

export default function HomeTab({ navigation }: HomeTabProp) {
  return (
    <View className="flex-1 bg-white">
      <View className="relative">
        <Image
          source={HomeNavigationBG}
          className="h-[230px] w-[190px] absolute bottom-0 right-0 "
          contentFit="cover"
        />
        <View className="flex flex-row w-full my-4 items-center px-4">
          <View className="grow justify-start">
            <Image
              source={Logo}
              className="h-[18px] w-[90px]"
              contentFit="contain"
            />
          </View>
          <View className="flex flex-row items-center space-x-4">
          <TouchableOpacity onPress={() => {
              navigation.navigate("Notification");
            }}>
            <Image
              source={NotificationIcon}
              className="h-[28px] w-[28px]"
              contentFit="contain"
            />
          </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <Image
                source={SearchIcon}
                className="h-[24px] w-[24px]"
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
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
