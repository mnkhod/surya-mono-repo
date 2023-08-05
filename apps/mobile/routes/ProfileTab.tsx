import { Switch, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import AvatarIcon from "../assets/AvatarIcon.png";
import NotificationIcon from "../assets/icons/NotificationIcon.png";

import ChevronRightIcon from "../svg/ChevronRightIcon";
import ChevronDownIcon from "../svg/ChevronDownIcon";
import HeartIcon from "../svg/HeartIcon";
import LanguageIcon from "../svg/LanguageIcon";
import MessengerIcon from "../svg/MessengerIcon";
import NotifIcon from "../svg/NotifIcon";
import MongolianFlag from "../svg/MongolianFlag";

export default function ProfileTab() {
  return (
    <View className="flex-1 bg-back-light-primary">
      <View className="bg-back-light-primary p-3 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center space-x-4">
          <Image
            source={AvatarIcon}
            className="h-[32px] w-[32px]"
            contentFit="contain"
          />
          <Text className="text-lg font-rubik-bold">Temuujin</Text>
          <ChevronRightIcon />
        </View>
        <Image
          source={NotificationIcon}
          className="h-[28px] w-[28px]"
          contentFit="contain"
        />
      </View>

      <View className="pt-6 flex gap-y-2">
        <View className="flex flex-row items-center py-3 space-x-6 mx-4">
          <HeartIcon className="relative bottom-1.5" />
          <View className="grow">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-rubik-bold text-base">
                  Дуртай багш нар
                </Text>
                <Text className="text-dark-med">
                  Зүрх дарсан багш нарын жагсаалт
                </Text>
              </View>
              <ChevronRightIcon />
            </View>
            <View className="mt-3 h-[1px] w-full bg-[#4E4B66]/20"></View>
          </View>
        </View>
        <View className="flex flex-row items-center space-x-6 py-3 mx-4">
          <LanguageIcon className="relative bottom-1.5" />
          <View className="grow">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-rubik-bold text-base">
                  Сурч буй хэл түвшин
                </Text>
                <Text className="text-dark-med">
                  Сурах хэл, түвшин сонгох
                </Text>
              </View>
              <ChevronRightIcon />
            </View>
            <View className="mt-3 h-[1px] w-full bg-[#4E4B66]/20"></View>
          </View>
        </View>
      </View>

      <Text className="text-xl py-3 mx-4 font-rubik-bold">
        Системтэй холбоотой
      </Text>

      <View className="pt-2 flex gap-y-2">
        <View className="flex flex-row items-center space-x-6 py-3 mx-4">
          <MongolianFlag className="relative bottom-1.5" />
          <View className="grow">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-rubik-bold text-base">
                  Системийн хэл
                </Text>
                <Text className="text-dark-med">
                  Системийн хэл солих
                </Text>
              </View>
              <View className="flex flex-row space-x-1 items-center">
                <Text className="text-sm">Монгол</Text>
                <ChevronDownIcon />
              </View>
            </View>
            <View className="mt-3 h-[1px] w-full bg-[#4E4B66]/20"></View>
          </View>
        </View>
        <View className="flex flex-row items-center space-x-6 py-3 mx-4">
          <NotifIcon className="relative bottom-1.5" />
          <View className="grow">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-rubik-bold text-base">
                  Notification
                </Text>
                <Text className="text-dark-med">
                  Мэдэгдэл хүлээн авах эсэх
                </Text>
              </View>
              <Switch
                onValueChange={() => {}}
                value={true}
              />
            </View>
            <View className="mt-3 h-[1px] w-full bg-[#4E4B66]/20"></View>
          </View>
        </View>
        <View className="flex flex-row items-center space-x-6 py-3 mx-4">
          <MessengerIcon className="relative bottom-1.5" />
          <View className="grow">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-rubik-bold text-base">
                  Facebook messenger
                </Text>
                <Text className="text-dark-med">
                  Admin-тай холбогдох
                </Text>
              </View>
              <ChevronRightIcon />
            </View>
            <View className="mt-3 h-[1px] w-full bg-[#4E4B66]/20"></View>
          </View>
        </View>
      </View>
    </View>
  );
}
