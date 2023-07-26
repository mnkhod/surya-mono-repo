import { Text, View } from "react-native";
import React from "react";

export default function AlertLayout() {
  return (
    <View className="relative max-w-[324px] p-6 z-4 bg-white">
      <View className="flex flex-row ">
        <Text>Амжилттай</Text>
        <Text>Та туршилтын хичээлийг амжилттай захиаллаа</Text>
        <Text>Үлдэгдэл: 1 удаагийн эрх байна</Text>
      </View>
    </View>
  );
}
