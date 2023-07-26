import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ChevronLeftIcon from "../svg/ChevronLeftIcon";
import { range } from "radash";
import ContinueButtonAsset from "../svg/ContinueButtonAsset";
import { ChooseTrialClassProp } from "../types/NavigationTypes";
import CheckIcon from "../svg/CheckIcon";

export default function ChooseTrialClass({ navigation }: ChooseTrialClassProp) {
  return (
    <View className="flex-1 bg-white">
      <View className="px-4">
        <View className="py-3 flex flex-row items-center justify-center">
          <TouchableOpacity
            className="p-2 absolute left-0"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ChevronLeftIcon />
          </TouchableOpacity>
          <Text className="font-rubik-bold text-xl">Туршилтын хичээл</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row items-center space-x-4 pt-2 pb-4">
            <TouchableOpacity className="space-y-1">
              <Text className="font-rubik-bold">Өнөөдөр</Text>
              <View className="w-full h-[2px] bg-black"></View>
            </TouchableOpacity>
            {Array.from(range(15, 30)).map((item, index) => (
              <TouchableOpacity key={index} className="space-y-1">
                <Text className="font-rubik-bold text-dark-low">
                  4 сарын {item}
                </Text>
                <View className="w-full h-[2px] bg-stroke-light"></View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View className="grow">
          <View className="py-3">
            <Text className="font-rubik-bold text-xl">Боломжтой цагууд</Text>
          </View>
          <View className="gap-y-4 justify-between flex flex-row flex-wrap">
            {Array.from(range(1, 10)).map((item, index) =>
              item == 1
                ? (
                  <TouchableOpacity
                    key={index}
                    className="w-[47%] py-2 border-2 border-stroke-light flex bg-primary justify-center items-center rounded-lg flex flex-row space-x-2"
                  >
                    <CheckIcon />
                    <Text className="text-white font-rubik-bold">09:00</Text>
                  </TouchableOpacity>
                )
                : (
                  <TouchableOpacity
                    key={index}
                    className="w-[47%] py-2 border-2 border-stroke-light flex items-center rounded-lg"
                  >
                    <Text className="font-rubik-bold text-dark-med">09:00</Text>
                  </TouchableOpacity>
                )
            )}
          </View>
        </View>
      </View>
      <TouchableOpacity className="grow flex items-center justify-end">
        <View className="w-[170px] h-[55px] justify-center items-center">
          <ContinueButtonAsset className="absolute top-0 right-0" />
          <Text className="text-white font-rubik-bold">Үргэлжлүүлэх</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
