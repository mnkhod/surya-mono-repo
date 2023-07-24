import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";

import AvatarIcon from "../assets/AvatarIcon.png";
import CountryFlag from "../assets/CountryFlag.png";
import ChevronRightIcon from "../svg/ChevronRightIcon";

export default function SearchGroupCourseTab() {
  return (
    <ScrollView className="px-4 pt-6 space-y-4">
      {[1, 2].map((item) => (
        <View key={item} className="flex flex-row rounded-lg shadow-lg p-4 bg-white">
          <View className="w-full flex flex-row space-x-2 items-center">
            <Image source={AvatarIcon} className="w-[40px] h-[40px]" />
            <View className="grow">
              <View className="flex flex-row items-center space-x-1">
                <Text className="text-lg font-rubik-bold">
                  Lilly Jefferson
                </Text>
                <Image
                  source={CountryFlag}
                  className="h-[16px] w-[16px]"
                  contentFit="cover"
                />
              </View>
              <View className="flex flex-row space-x-1">
                <Text className="text-back-light">Англи хэл</Text>
                <Text className="px-1 text-feedback-info bg-feedback-info/10 rounded-lg">
                  NATIVE
                </Text>
              </View>
            </View>
            <ChevronRightIcon />
          </View>
        </View>
      ))}

      {[1].map((item) => (
        <View key={item} className="flex flex-row rounded-lg shadow-lg p-4 bg-white">
          <View className="w-full flex flex-row space-x-2 items-center">
            <Image source={AvatarIcon} className="w-[40px] h-[40px]" />
            <View className="grow">
              <View className="flex flex-row items-center space-x-1">
                <Text className="text-lg font-rubik-bold">
                  Natasha
                </Text>
                <Image
                  source={CountryFlag}
                  className="h-[16px] w-[16px]"
                  contentFit="cover"
                />
              </View>
              <View className="flex flex-row space-x-1">
                <Text className="text-back-light">Англи хэл</Text>
                <Text className="px-1 text-feedback-warning bg-feedback-warning/10 rounded-lg">
                  SECONDARY
                </Text>
              </View>
            </View>
            <ChevronRightIcon />
          </View>
        </View>
      ))}

      <View className="h-16"></View>
    </ScrollView>
  );
}
