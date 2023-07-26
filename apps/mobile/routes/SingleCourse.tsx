import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

import ChevronLeftIcon from "../svg/ChevronLeftIcon";
import ChevronRightIcon from "../svg/ChevronRightIcon";
import AvatarIcon from "../assets/AvatarIcon.png";
import { Image } from "expo-image";
import InActiveHeartIcon from "../svg/InActiveHeartIcon";
import RatingStar from "../assets/RatingStar.png";
import UserView from "../assets/View.png";
import KoreanFlag from "../svg/KoreanFlag";
import UnitedKingdomFlag from "../svg/UnitedKingdomFlag";

import PlayVideoButton from "../assets/PlayVideoButton.png";
import SingleCourseDummyBG from "../assets/SingleCourseDummyBG.png";
import TotalCourseStatisticIcon from "../svg/TotalCourseStatisticIcon";
import RatingStarStatisticIcon from "../svg/RatingStar";
import PeopleIcon from "../svg/PeopleIcon";
import OrderButtonBackgroundAsset from "../svg/OrderButtonBackgroundAsset";
import { SingleCourseProp } from "../types/NavigationTypes";

export default function SingleCourse({ navigation }: SingleCourseProp) {

  return (
    <View className="flex-1 bg-white flex flex-col">
      <View className="bg-primary pb-4 rounded-b-2xl">
        <View className="flex flex-row items-center py-3 px-3">
          <View className="flex flex-row space-x-6 items-center">
            <TouchableOpacity className="p-2" onPress={() => { navigation.goBack() }}>
              <ChevronLeftIcon fill={"white"} />
            </TouchableOpacity>
            <View className="flex flex-row space-x-4 items-center">
              <Image
                source={AvatarIcon}
                className="h-[27px] w-[27px]"
                contentFit="cover"
              />
              <Text className="text-white font-rubik-medium text-xl">
                Lilly Jefferson
              </Text>
            </View>
          </View>
          <View className="grow flex items-end">
            <InActiveHeartIcon />
          </View>
        </View>

        <View className="px-3 flex flex-row items-center">
          <View className="pl-4 flex flex-row items-center space-x-4">
            <View className="flex flex-row items-center space-x-1">
              <Image
                source={RatingStar}
                className="h-[16px] w-[16px]"
                contentFit="cover"
              />
              <Text className="text-feedback-warning font-rubik-medium">
                4.9
              </Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <Image
                source={UserView}
                className="h-[16px] w-[16px]"
                contentFit="cover"
              />
              <Text className="text-white font-rubik-medium">
                241
              </Text>
            </View>
          </View>

          <View className="grow flex flex-row items-center justify-end">
            <TouchableOpacity className="flex bg-white flex-row items-center px-4 py-2 rounded space-x-2">
              <Text className="text-primary text-base font-rubik-medium">
                Хичээл авах
              </Text>
              <ChevronRightIcon fill={"#3D38BC"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="px-4 pt-6 space-y-4">
        <View className="space-y-1">
          <Text className="text-dark-med">Товч мэдээлэл:</Text>
          <Text className="font-rubik text-base">
            Бизнесийн англи хэлний анхан шат, ахисан түвшний мэргэжлийн удирдах
            ажилтны ангиуд
          </Text>
        </View>
        <View className="space-y-1">
          <Text className="text-dark-med">Багшийн унаган хэл:</Text>
          <View className="flex flex-row">
            <View className="flex items-center space-x-1 py-1 px-1.5 bg-back-light-secondary flex-row rounded">
              <KoreanFlag />
              <Text>Солонгос хэл</Text>
            </View>
          </View>
        </View>
        <View className="space-y-1">
          <Text className="text-dark-med">Заадаг хэл:</Text>
          <View className="flex flex-row space-x-2">
            <View className="flex items-center space-x-1 py-1 px-1.5 bg-back-light-secondary flex-row rounded">
              <UnitedKingdomFlag />
              <Text>Англи хэл</Text>
            </View>
            <View className="flex items-center space-x-1 py-1 px-1.5 bg-back-light-secondary flex-row rounded">
              <KoreanFlag />
              <Text>Солонгос хэл</Text>
            </View>
          </View>
        </View>
        <View className="space-y-1">
          <Text className="text-dark-med">Хичээл заадаг өдрүүд:</Text>
          <View className="flex flex-row space-x-2">
            <View className="py-1 px-1.5 bg-back-light-secondary rounded">
              <Text>Дав</Text>
            </View>
            <View className="py-1 px-1.5 bg-back-light-secondary rounded">
              <Text>Мяг</Text>
            </View>
            <View className="py-1 px-1.5 bg-back-light-secondary rounded">
              <Text>Лха</Text>
            </View>
            <View className="py-1 px-1.5 bg-back-light-secondary rounded">
              <Text>Пүр</Text>
            </View>
            <View className="py-1 px-1.5 bg-back-light-secondary rounded">
              <Text>Баа</Text>
            </View>
            <View className="py-1 px-1.5 bg-primary-light-sm rounded">
              <Text>Бям</Text>
            </View>
            <View className="py-1 px-1.5 bg-primary-light-sm rounded">
              <Text>Ням</Text>
            </View>
          </View>
        </View>
        <View className="relative">
          <Image
            source={SingleCourseDummyBG}
            className="h-[128px] w-full rounded-xl"
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
        <View className="space-y-1">
          <Text className="text-dark-med">Сурагчдын өгсөн үнэлгээ:</Text>
          <View className="flex flex-row space-x-5">
            <View className="flex flex-col grow justify-center items-center border border-stroke-light rounded-2xl border-1 px-3 pb-2">
              <View className="bg-primary/10 px-3 pb-2 pt-6 rounded-b-2xl">
                <TotalCourseStatisticIcon />
              </View>
              <Text className="text-primary font-rubik-bold text-base pt-1">
                90
              </Text>
              <Text className="text-stroke-light">Нийт хичээл</Text>
            </View>

            <View className="flex flex-col grow justify-center items-center border border-stroke-light rounded-2xl border-1 px-3 pb-2">
              <View className="bg-feedback-warning/10 px-3 pb-2 pt-6 rounded-b-2xl">
                <RatingStarStatisticIcon />
              </View>
              <Text className="text-feedback-warning font-rubik-bold text-base pt-1">
                4.5/5
              </Text>
              <Text className="text-stroke-light">Үнэлгээ</Text>
            </View>

            <View className="flex flex-col grow justify-center items-center border border-stroke-light rounded-2xl border-1 px-3 pb-2">
              <View className="bg-feedback-error/10 px-3 pb-2 pt-6 rounded-b-2xl">
                <PeopleIcon />
              </View>
              <Text className="text-feedback-error font-rubik-bold text-base pt-1">
                100%
              </Text>
              <Text className="text-stroke-light">Ур чадвар</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="grow flex justify-end pt-4">
        <View className="p-4 flex flex-row grow border-t border-l border-r border-stroke-light rounded-t-3xl">
          <View className="py-2.5">
            <Text className="font-rubik-bold text-xl">Туршилтын хичээл</Text>
            <Text className="font-rubik text-dark-med">
              Үнэ төлбөргүй (2 эрх байна)
            </Text>
          </View>
          <TouchableOpacity className="flex items-end justify-center grow overflow-hidden">
            <View className="flex items-center justify-center grow w-[140px] h-[52px]">
              <OrderButtonBackgroundAsset className="z-1 absolute right-0" />
              <Text className="text-white font-rubik-bold">Захиалах</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
