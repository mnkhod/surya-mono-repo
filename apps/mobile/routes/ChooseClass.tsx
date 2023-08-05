import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChooseClassProp } from "../types/NavigationTypes";
import Header from "../components/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChooseClassByDayTab from "./ChooseClassByDayTab";
import ChooseClassByDateTab from "./ChooseClassByDateTab";
import ContinueButtonAsset from "../svg/ContinueButtonAsset";

const ChooseClassTab = createMaterialTopTabNavigator();

export default function ChooseClass({ navigation }: ChooseClassProp) {
  return (
    <View className="flex-1 bg-white">
      <View className="px-4">
        <Header title={"Хичээлийн цаг сонгох"} nav={navigation} />
        <View className="py-4 my-4 flex items-center bg-primary rounded-2xl">
          <Text className="text-2xl font-rubik-medium text-white">12 удаа</Text>
          <Text className="text-white/60 font-rubik">
            Сонгох боломжтой оролтын тоо
          </Text>
        </View>
      </View>

      <ChooseClassTab.Navigator initialRouteName="ChooseClassByDayTab">
        <ChooseClassTab.Screen
          name="ChooseClassByDayTab"
          component={ChooseClassByDayTab}
          options={{ title: "Гарагийн өдрөөр" }}
        />
        <ChooseClassTab.Screen
          name="ChooseClassByDateTab"
          component={ChooseClassByDateTab}
          options={{ title: "Өдрөөр сонгох" }}
        />
      </ChooseClassTab.Navigator>

      <View className="flex pt-4 items-center justify-end">
        <TouchableOpacity onPress={() => {}}>
          <View className="w-[170px] h-[55px] justify-center items-center">
            <ContinueButtonAsset className="absolute top-0 right-0" />
            <Text className="text-white font-rubik-bold">Үргэлжлүүлэх</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
