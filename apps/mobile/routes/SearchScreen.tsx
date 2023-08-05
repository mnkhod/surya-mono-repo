import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import ChevronLeftIcon from "../svg/ChevronLeftIcon";
import SearchIcon from "../svg/SearchIcon";
import { SearchScreenProp } from "../types/NavigationTypes";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchSingeCourseTab from "./SearchSingleCourseTab";
import SearchGroupCourseTab from "./SearchGroupCourseTab";

const SearchCourseTab = createMaterialTopTabNavigator();

export default function SearchScreen({ navigation }: SearchScreenProp) {
  return (
    <View className="flex-1">

      <View className="flex bg-back-light-primary flex-row items-center space-x-5 px-4 py-2 pb-2">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View className="p-2">
            <ChevronLeftIcon />
          </View>
        </TouchableOpacity>

        <View className="flex flex-row px-3 space-x-2 rounded-lg py-2 items-center bg-back-light-thirtiary grow">
          <SearchIcon />
          <TextInput
            onChangeText={() => {}}
            value={""}
            className="text-lg relative bottom-1 w-full text-dark-med"
            placeholder="Хайх хэсэг"
          />
        </View>
      </View>

      <SearchCourseTab.Navigator initialRouteName="SearchCourseTab">
        <SearchCourseTab.Screen
          name="SearchSingleCourseTab"
          component={SearchSingeCourseTab}
          options={{ title: "Ганцаарчилсан" }}
        />
        <SearchCourseTab.Screen
          name="SearchGroupCourseTab"
          component={SearchGroupCourseTab}
          options={{ title: "Групп сургалт" }}
        />
      </SearchCourseTab.Navigator>
    </View>
  );
}
