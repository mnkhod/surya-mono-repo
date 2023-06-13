import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SingleCourseTab from "./SingleCourseTab";
import GroupCourseTab from "./GroupCourseTab";

const CourseTab = createMaterialTopTabNavigator();

export default function HomeTab() {
  return (
    <View className="flex-1 bg-white">
      <View>
        <Text className="text-xs text-center">Navigation</Text>
        <Text className="text-3xl text-center">
          ТАНЫ СУРАХ ЭРМЭЛЗЭЛД ТӨГС НИЙЦНЭ
        </Text>
      </View>
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
  )
}
