import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ExitAlertIcon from "../svg/ExitAlertIcon";
import { ChooseBankModalProp } from "../types/NavigationTypes";
import { Image } from "expo-image";

import KhaanBank from "../assets/banks/KhaanBank.png" 
import GolomtBank from "../assets/banks/GolomtBank.png" 
import HudaldaaHogjilBank from "../assets/banks/HudaldaaHogjilBank.png" 
import HasBank from "../assets/banks/HasBank.png" 

export default function ChooseBankModal({ navigation }: ChooseBankModalProp) {
  return (
    <View className="flex-1 flex justify-end items-center">
      <TouchableOpacity
        className="absolute top-0 left-0 z-3 h-[100%] w-full"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View>
        </View>
      </TouchableOpacity>
      <View></View>

      <View className="relative w-full p-6 pb-12 z-4 bg-white rounded-lg">
        <View className="space-y-4">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-rubik-bold text-lg">Банкаар төлөх</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ExitAlertIcon fill={"black"} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="space-y-4">
            <View className="flex flex-row items-center space-x-1.5">
              <Image
                source={KhaanBank}
                className="w-[16px] h-[16px]"
                contentFit="cover"
              />
              <Text>Хаан банк</Text>
            </View>
            <View className="h-[1px] bg-stroke-light"></View>
          </TouchableOpacity>
          <TouchableOpacity className="space-y-4">
            <View className="flex flex-row items-center space-x-1.5">
              <Image
                source={GolomtBank}
                className="w-[16px] h-[16px]"
                contentFit="cover"
              />
              <Text>Голомт банк</Text>
            </View>
            <View className="h-[1px] bg-stroke-light"></View>
          </TouchableOpacity>
          <TouchableOpacity className="space-y-4">
            <View className="flex flex-row items-center space-x-1.5">
              <Image
                source={HudaldaaHogjilBank}
                className="w-[16px] h-[16px]"
                contentFit="cover"
              />
              <Text>Худалдаа хөгжлийн банк</Text>
            </View>
            <View className="h-[1px] bg-stroke-light"></View>
          </TouchableOpacity>
          <TouchableOpacity className="space-y-4">
            <View className="flex flex-row items-center space-x-1.5">
              <Image
                source={HasBank}
                className="w-[16px] h-[16px]"
                contentFit="cover"
              />
              <Text>Хас банк</Text>
            </View>
            <View className="h-[1px] bg-stroke-light"></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
