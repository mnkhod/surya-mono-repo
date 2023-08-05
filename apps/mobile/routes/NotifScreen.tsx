import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NotifScreenProp } from "../types/NavigationTypes";
import ChevronLeftIcon from "../svg/ChevronLeftIcon";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NotifGeneralTab from "./NotifGeneralTab";
import NotifRequestTab from "./NotifRequestTab";

const NotifTab = createMaterialTopTabNavigator();

export default function NotifScreen({ navigation }: NotifScreenProp) {
  return (
    <View className="flex-1">
      <View className="flex bg-back-light-primary flex-row items-center px-2 py-2 pb-2">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View className="p-2">
            <ChevronLeftIcon />
          </View>
        </TouchableOpacity>

        <Text className="grow text-center font-rubik-bold text-lg">
          Мэдэгдэл
        </Text>

        <TouchableOpacity onPress={() => {}}>
          <Text className="text-black-light text-center text-xs">Цэвэрлэх</Text>
        </TouchableOpacity>
      </View>

      <NotifTab.Navigator initialRouteName="NotifTab">
        <NotifTab.Screen
          name="NotifGeneralTab"
          component={NotifGeneralTab}
          options={{ title: "Ерөнхий" }}
        />
        <NotifTab.Screen
          name="NotifRequestTab"
          component={NotifRequestTab}
          options={{ title: "Хүсэлтүүд" }}
        />
      </NotifTab.Navigator>
    </View>
  );
}
