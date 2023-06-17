import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { input } from "@styles/inputs";
import { inputBtn } from "@styles/buttons";

export default function SignUpTab() {
  return (
    <View className="bg-back-light-primary px-4 flex-1">
      <View className="py-4 gap-y-6">
        <View className="flex">
          <View className="flex flex-row pb-3">
            <Text className="text-dark-high font-rubik-medium text-xs">
              Имэйл хаяг
            </Text>
            <Text className="pl-0.5 relative bottom-1 text-feedback-error">
              *
            </Text>
          </View>
          <TextInput
            className={`${input} w-full`}
            placeholder="Имэйл хаяг оруулах хэсэг"
          />
        </View>
        <TouchableOpacity
          className={`${inputBtn} w-full`}
        >
          <Text className="text-dark-low text-base border-none font-rubik-medium">Имэйл баталгаажуулах</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
