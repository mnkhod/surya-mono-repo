import { ScrollView, Text, View } from "react-native";
import React from "react";

import ChevronRightIcon from "../svg/ChevronRightIcon";

export default function NotifGeneralTab() {
  return (
    <ScrollView className="p-4 flex-1 bg-white">
      {[1, 2].map((item) => (
      <View key={item} className="flex items-center flex-row space-x-2 py-3">
        <View className="m-2 bg-feedback-info h-[8px] w-[8px] rounded-full">
        </View>
        <View className="grow flex space-y-3">
          <View className="flex grow justify-between flex-row items-center">
            <View>
              <Text className="font-rubik-bold text-lg">
                Language Mongolia 2023
              </Text>
              <Text className="text-dark-low w-9/12">
                Conference арга хэмжээ зохион байгуулагдана
              </Text>
            </View>
            <ChevronRightIcon />
          </View>
          <View className="h-[1px] bg-stroke-light"></View>
        </View>
      </View>
      ))}
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <View key={item} className="flex items-center flex-row space-x-2 py-3">
          <View className="m-2 border border-primary-light h-[8px] w-[8px] rounded-full">
          </View>
          <View className="grow flex space-y-3">
            <View className="flex grow justify-between flex-row items-center">
              <View>
                <Text className="font-rubik-bold text-lg">
                  Language Mongolia 2023
                </Text>
                <Text className="text-dark-low w-9/12">
                  Conference арга хэмжээ зохион байгуулагдана
                </Text>
              </View>
              <ChevronRightIcon />
            </View>
            <View className="h-[1px] bg-stroke-light"></View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
