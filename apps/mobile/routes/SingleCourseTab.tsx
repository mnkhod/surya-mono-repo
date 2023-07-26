import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import SingleCourseDummyBG from "../assets/SingleCourseDummyBG.png";
import CountryFlag from "../assets/CountryFlag.png";
import RatingStar from "../assets/RatingStar.png";
import PlayVideoButton from "../assets/PlayVideoButton.png";
import { SingleCourseTabProp } from "../types/NavigationTypes";

export default function SingleCourseTab({ navigation }: SingleCourseTabProp) {
  return (
    <ScrollView className="bg-back-light-secondary flex flex-col gap-6 px-4 flex-1">
      <View className="flex pt-6 px-4 space-y-6">
        {[1, 2, 3, 4].map((item) => (
          <View key={item} className="rounded-xl p-0 bg-back-light-primary">
            <View className="relative">
              <Image
                source={SingleCourseDummyBG}
                className="h-[128px] w-full"
                style={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderLeftWidth: 0.2,
                  borderRightWidth: 0.2,
                }}
                contentFit="cover"
              />
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={PlayVideoButton}
                  className="h-[36px] w-[36px] absolute bottom-3 right-3"
                  contentFit="cover"
                />
              </TouchableOpacity>
            </View>

            <View className="p-4 pb-0 w-full">
              <View className="flex flex-row justify-between">
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
                <View className="flex flex-row items-center space-x-1">
                  <Image
                    source={RatingStar}
                    className="h-[16px] w-[16px]"
                    contentFit="cover"
                  />
                  <Text className="text-secondary font-rubik-bold">4.9</Text>
                </View>
              </View>
              <Text className="text-dark-med">ESL зэрэгтэй багш</Text>
              <View className="flex flex-row space-x-1 pt-2">
                <Text className="font-rubik-bold">Англи хэл</Text>
                <Text className="px-1 text-feedback-info bg-feedback-info/10 rounded-lg">
                  NATIVE
                </Text>
              </View>
            </View>

            <View className="p-4 flex-row justify-between space-x-4">
              <TouchableOpacity
                onPress={() => {}}
                className="w-6/12 py-2 border-2 rounded-lg border-primary"
              >
                <Text className="text-center text-primary font-rubik-bold">
                  Туршалтын хичээл
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { navigation.navigate("SingleCourse") }}
                className="grow py-2 bg-primary rounded-lg"
              >
                <Text className="text-center font-rubik-bold text-white">
                  Хичээл авах
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <View className="h-16"></View>
    </ScrollView>
  );
}
