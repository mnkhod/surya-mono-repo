import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ChevronLeftIcon from "../svg/ChevronLeftIcon";

export default function Header({ nav,title }: { nav: any,title: string }) {
  return (
    <View className="py-3 flex flex-row items-center justify-center">
      <TouchableOpacity
        className="p-2 absolute left-0"
        onPress={() => {
          nav.goBack();
        }}
      >
        <ChevronLeftIcon />
      </TouchableOpacity>
      <Text className="font-rubik-bold text-xl">{title}</Text>
    </View>
  );
}
