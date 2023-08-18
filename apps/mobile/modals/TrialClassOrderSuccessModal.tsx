import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ExitAlertIcon from "../svg/ExitAlertIcon";
import AlertSuccessIcon from "../svg/AlertSuccessIcon";
import { TrialClassOrderSuccessModalProp } from "../types/NavigationTypes";

export default function TrialClassOrderSuccessModal({ navigation }: TrialClassOrderSuccessModalProp) {
  return (
    <View className="flex-1 flex justify-center items-center">
      <TouchableOpacity
        className="bg-black absolute top-0 left-0 z-3 h-[100%] w-full opacity-50"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View>
        </View>
      </TouchableOpacity>
      <View></View>
      <View className="relative max-w-[324px] p-6 z-4 bg-white rounded-lg">
        <TouchableOpacity
          className="absolute top-4 right-4"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ExitAlertIcon />
        </TouchableOpacity>
        <View className="flex items-center space-y-4">
          <AlertSuccessIcon />
          <Text className="font-rubik-bold text-lg">Амжилттай</Text>
          <Text className="text-center">
            Та туршилтын хичээлийг амжилттай захиаллаа
          </Text>
          <Text>Үлдэгдэл: 1 удаагийн эрх байна</Text>
          <TouchableOpacity
            className="bg-primary w-full py-2 rounded"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text className="text-white font-rubik-bold text-center">
              Ойлголоо
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
