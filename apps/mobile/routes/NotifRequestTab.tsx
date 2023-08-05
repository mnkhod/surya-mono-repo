import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";

import AvatarIcon from "../assets/AvatarIcon.png";
import CountryFlag from "../assets/CountryFlag.png";
import ChevronRightIcon from "../svg/ChevronRightIcon";

export default function NotifRequestTab() {
  return (
    <ScrollView className="px-4 pt-6 space-y-4">
      {[1, 2, 3].map((item) => (
        <View
          key={item}
          className="flex flex-row rounded-lg shadow-lg p-4 bg-white"
        >
          <View className="w-full flex flex-row space-x-2 items-center">
            <Image source={AvatarIcon} className="w-[40px] h-[40px]" />

            <View className="grow flex space-y-3">
              <View className="flex grow justify-between flex-row items-center">
                <View>
                  <View className="flex flex-row">
                    <Text className="px-1 text-feedback-warning bg-feedback-warning/10 rounded-lg">
                      Хүлээгдэж байна
                    </Text>
                  </View>
                  <View className="flex flex-row items-center space-x-2">
                    <Text className="text-lg font-rubik-bold">
                      Lilly Jefferson
                    </Text>
                    <View className="bg-feedback-info h-[8px] w-[8px] rounded-full">
                    </View>
                  </View>
                  <Text className="text-back-light">
                    I can’t make it on time can you postpone
                  </Text>
                </View>
                <ChevronRightIcon />
              </View>
              <View className="h-[1px] bg-stroke-light"></View>
            </View>
          </View>
        </View>
      ))}

      {[1, 2, 3].map((item) => (
        <View
          key={item}
          className="flex flex-row rounded-lg shadow-lg p-4 bg-white"
        >
          <View className="w-full flex flex-row space-x-2 items-center">
            <Image source={AvatarIcon} className="w-[40px] h-[40px]" />

            <View className="grow flex space-y-3">
              <View className="flex grow justify-between flex-row items-center">
                <View>
                  <View className="flex flex-row">
                    <Text className="px-1 text-feedback-success bg-feedback-success/10 rounded-lg">
                      Зөвшөөрсөн
                    </Text>
                  </View>
                  <View className="flex flex-row items-center space-x-2">
                    <Text className="text-lg font-rubik-bold">
                      Lilly Jefferson
                    </Text>
                    <View className="bg-feedback-info h-[8px] w-[8px] rounded-full">
                    </View>
                  </View>
                  <Text className="text-back-light">
                    I can’t make it on time can you postpone
                  </Text>
                </View>
                <ChevronRightIcon />
              </View>
              <View className="h-[1px] bg-stroke-light"></View>
            </View>
          </View>
        </View>
      ))}

      {[1, 2, 3].map((item) => (
        <View
          key={item}
          className="flex flex-row rounded-lg shadow-lg p-4 bg-white"
        >
          <View className="w-full flex flex-row space-x-2 items-center">
            <Image source={AvatarIcon} className="w-[40px] h-[40px]" />

            <View className="grow flex space-y-3">
              <View className="flex grow justify-between flex-row items-center">
                <View>
                  <View className="flex flex-row">
                    <Text className="px-1 text-feedback-error bg-feedback-error/10 rounded-lg">
                      Цуцалсан
                    </Text>
                  </View>
                  <View className="flex flex-row items-center space-x-2">
                    <Text className="text-lg font-rubik-bold">
                      Lilly Jefferson
                    </Text>
                    <View className="bg-feedback-info h-[8px] w-[8px] rounded-full">
                    </View>
                  </View>
                  <Text className="text-back-light">
                    I can’t make it on time can you postpone
                  </Text>
                </View>
                <ChevronRightIcon />
              </View>
              <View className="h-[1px] bg-stroke-light"></View>
            </View>
          </View>
        </View>
      ))}

      <View className="h-16"></View>
    </ScrollView>
  );
}
