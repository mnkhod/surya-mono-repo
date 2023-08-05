import Logo from "../assets/Logo.png";
import NotificationIcon from "../assets/icons/NotificationIcon.png";
import SearchIcon from "../assets/icons/SearchIcon.png";

import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

export default function Navigation({ navigation } : { navigation : any}) {

  return (
    <View className="flex flex-row w-full my-4 items-center px-4">
      <View className="grow justify-start">
        <Image
          source={Logo}
          className="h-[18px] w-[90px]"
          contentFit="contain"
        />
      </View>
      <View className="flex flex-row items-center space-x-4">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notification");
          }}
        >
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
  );
}
