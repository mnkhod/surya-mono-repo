import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Logo from "../assets/Logo.png";
import NotificationIcon from "../assets/icons/NotificationIcon.png";
import SearchIcon from "../assets/icons/SearchIcon.png";

import CountryFlag from "../assets/CountryFlag.png";
import VideoCallIcon from "../svg/VideoCallIcon";
import ChevronRightIcon from "../svg/ChevronRightIcon";

import { Image } from "expo-image";

export default function ClassTab({ navigation }: ClassTabProp) {
  return (
    <View className="flex-1 bg-back-light-secondary">
      <View className="relative bg-light-primary">
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
      </View>

      <ScrollView>
        <Text className="text-xl mx-4 font-rubik-bold">
          Ганцаарчилсан хичээл
        </Text>

        <View className="mx-4 mt-3 space-y-4">
          {[1, 2].map((item) => (
            <View
              key={item}
              className="bg-back-light-primary rounded-lg p-4 space-y-4 shadow-lg"
            >
              <View>
                <View className="flex flex-row justify-between items-center">
                  <View>
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
                    <Text className="text-dark-med">Ганцаарчилсан хичээл</Text>
                  </View>
                  <TouchableOpacity onPress={() => {}}>
                    <ChevronRightIcon />
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row">
                  <View className="mt-2 bg-feedback-info/10 rounded-lg px-2 py-2">
                    <Text className="text-feedback-info font-rubik">
                      7 удаагийн хичээл үлдсэн
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-row justify-between">
                <View>
                  <View className="flex flex-row justify-between">
                    <Text className="font-rubik-medium text-lg">
                      2023.04.23
                    </Text>
                    <Text className="font-rubik-medium text-lg">16:30</Text>
                  </View>
                  <Text className="text-dark-low">
                    Дараагийн хичээл орох огноо
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  className="flex flex-row items-center justify-center space-x-2 p-2 bg-primary rounded-lg"
                >
                  <VideoCallIcon />
                  <Text className="text-center font-rubik-medium text-white">
                    Видео колл
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <Text className="text-xl mt-4 mx-4 font-rubik-bold">
          Групп хичээл
        </Text>

        <View className="mx-4 mt-3 space-y-4">
          {[1, 2].map((item) => (
            <View
              key={item}
              className="bg-back-light-primary rounded-lg p-4 space-y-4 shadow-lg"
            >
              <View>
                <View className="flex flex-row justify-between items-center">
                  <View>
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
                    <Text className="text-dark-med">Ганцаарчилсан хичээл</Text>
                  </View>
                  <TouchableOpacity onPress={() => {}}>
                    <ChevronRightIcon />
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row">
                  <View className="mt-2 bg-feedback-error/10 rounded-lg px-2 py-2">
                    <Text className="text-feedback-error font-rubik">
                      7 удаагийн хичээл үлдсэн
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-row justify-between">
                <View>
                  <View className="flex flex-row justify-between">
                    <Text className="font-rubik-medium text-lg">
                      2023.04.23
                    </Text>
                    <Text className="font-rubik-medium text-lg">16:30</Text>
                  </View>
                  <Text className="text-dark-low">
                    Дараагийн хичээл орох огноо
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  className="flex flex-row items-center justify-center space-x-2 p-2 bg-primary rounded-lg"
                >
                  <VideoCallIcon />
                  <Text className="text-center font-rubik-medium text-white">
                    Видео колл
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View className="h-16"></View>
      </ScrollView>
    </View>
  );
}
