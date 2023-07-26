import { ScrollView, Text, TouchableOpacity, View } from "react-native";
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

import AdBG from "../assets/AdBG.png";
import PlayVideoButton from "../assets/PlayVideoButton.png";
import SingleCourseDummyBG from "../assets/SingleCourseDummyBG.png";
import TotalCourseStatisticIcon from "../svg/TotalCourseStatisticIcon";
import RatingStarStatisticIcon from "../svg/RatingStar";
import PeopleIcon from "../svg/PeopleIcon";
import OrderButtonBackgroundAsset from "../svg/OrderButtonBackgroundAsset";
import { SingleCourseProp } from "../types/NavigationTypes";
import ReplyIcon from "../svg/ReplyIcon";
import HeartIcon from "../svg/HeartIcon";
import CommentHeartIcon from "../svg/CommentHeartIcon";
import CommentShareIcon from "../svg/CommentShareIcon";
import ReplyBackIcon from "../svg/ReplyBackIcon";

export default function SingleCourse({ navigation }: SingleCourseProp) {
  return (
    <View className="flex-1 bg-white flex flex-col">
      <View className="bg-primary pb-4 rounded-b-2xl">
        <View className="flex flex-row items-center py-3 px-3">
          <View className="flex flex-row space-x-6 items-center">
            <TouchableOpacity
              className="p-2"
              onPress={() => {
                navigation.goBack();
              }}
            >
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

      <ScrollView className="">
        <View className="px-4 pt-6 space-y-4">
          <View className="space-y-1">
            <Text className="text-dark-med">Товч мэдээлэл:</Text>
            <Text className="font-rubik text-base">
              Бизнесийн англи хэлний анхан шат, ахисан түвшний мэргэжлийн
              удирдах ажилтны ангиуд
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

          <View className="py-6 flex flex-row relative items-center px-4 border border-stroke-light rounded-2xl shadow-xl">
            <View>
              <Text className="font-rubik-bold text-primary text-2xl">
                Групп сургалт
              </Text>
              <Text className="text-dark-med font-rubik">
                Нэг хичээлийн үнэ
              </Text>
            </View>
            <View className="grow items-end">
              <Text className="text-xl font-rubik-bold">19’999 ₮</Text>
            </View>
            <Image
              source={AdBG}
              className="absolute right-0 top-0 h-[95px] w-[150px]"
              contentFit="cover"
            />
          </View>

          <View className="py-3 flex flex-row items-center">
            <Text className="grow font-rubik-bold text-xl">Сэтгэгдэл</Text>
            <TouchableOpacity>
              <View className="flex flex-row items-center">
                <Text className="text-dark-med font-rubik-medium">
                  Сэтгэгдэл бичих
                </Text>
                <ChevronRightIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View className="py-2 bg-primary-light-xs px-4 border-b-2 border-stroke-light">
            <View className="flex flex-row items-center">
              <View className="flex flex-row items-end space-x-2">
                <Image
                  source={AvatarIcon}
                  className="h-[27px] w-[27px]"
                  contentFit="cover"
                />
                <Text className="font-rubik-bold">Lilly Jefferson</Text>
              </View>
              <View className="flex flex-row grow justify-end">
                <View className="py-1 px-1.5 bg-secondary-light-sm rounded">
                  <Text>Багш</Text>
                </View>
              </View>
            </View>
            <View className="pt-5 pb-2">
              <Text className="text-dark-med">
                Өнөөдрийн хичээллээр эрч хүчтэй уулзацгааая Амжилт бүгдээрээ
              </Text>
            </View>
            <View className="flex items-center flex-row">
              <Text className="text-dark-med w-4/12">20мин өмнө</Text>
              <View className="grow flex items-center flex-row justify-around">
                <TouchableOpacity>
                  <ReplyIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex flex-row space-x-1.5 items-center">
                    <CommentHeartIcon />
                    <Text className="text-dark-med">123</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <CommentShareIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="py-2 px-4 border-b-2 border-stroke-light">
            <View className="flex flex-row items-center">
              <View className="flex flex-row items-end space-x-2">
                <Image
                  source={AvatarIcon}
                  className="h-[27px] w-[27px]"
                  contentFit="cover"
                />
                <Text className="font-rubik-bold">Bold Tuguldur</Text>
              </View>
              <View className="flex flex-row grow justify-end">
                <View className="py-1 px-1.5 bg-back-light-thirtiary rounded">
                  <Text>Сурагч</Text>
                </View>
              </View>
            </View>
            <View className="pt-5 pb-2">
              <Text className="text-dark-med">
                Өнөөдрийн хичээллээр эрч хүчтэй уулзацгааая Амжилт бүгдээрээ
              </Text>
            </View>
            <View className="flex items-center flex-row">
              <Text className="text-dark-med w-4/12">1мин өмнө</Text>
              <View className="grow flex items-center flex-row justify-around">
                <TouchableOpacity>
                  <ReplyBackIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex flex-row space-x-1.5 items-center">
                    <CommentHeartIcon />
                    <Text className="text-dark-med">1</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <CommentShareIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="py-2 px-4 border-b-2 border-stroke-light">
            <View className="flex flex-row items-center">
              <View className="flex flex-row items-end space-x-2">
                <Image
                  source={AvatarIcon}
                  className="h-[27px] w-[27px]"
                  contentFit="cover"
                />
                <Text className="font-rubik-bold">Bold Tuguldur</Text>
              </View>
              <View className="flex flex-row grow justify-end">
                <View className="py-1 px-1.5 bg-back-light-thirtiary rounded">
                  <Text>Сурагч</Text>
                </View>
              </View>
            </View>
            <View className="pt-5 pb-2">
              <Text className="text-dark-med">
                Өнөөдрийн хичээллээр эрч хүчтэй уулзацгааая Амжилт бүгдээрээ
              </Text>
            </View>
            <View className="flex items-center flex-row">
              <Text className="text-dark-med w-4/12">5мин өмнө</Text>
              <View className="grow flex items-center flex-row justify-around">
                <TouchableOpacity>
                  <ReplyBackIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex flex-row space-x-1.5 items-center">
                    <CommentHeartIcon />
                    <Text className="text-dark-med">0</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <CommentShareIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="py-2 bg-primary-light-xs px-4 border-b-2 border-stroke-light">
            <View className="flex flex-row items-center">
              <View className="flex flex-row items-end space-x-2">
                <Image
                  source={AvatarIcon}
                  className="h-[27px] w-[27px]"
                  contentFit="cover"
                />
                <Text className="font-rubik-bold">Б.Ууганцэцэг</Text>
              </View>
              <View className="flex flex-row grow justify-end">
                <View className="py-1 px-1.5 bg-secondary-light-sm rounded">
                  <Text>Багш</Text>
                </View>
              </View>
            </View>
            <View className="pt-5 pb-2">
              <Text className="text-dark-med">
                Өнөөдрийн хичээллээр эрч хүчтэй уулзацгааая Амжилт бүгдээрээ
              </Text>
            </View>
            <View className="flex items-center flex-row">
              <Text className="text-dark-med w-4/12">2мин өмнө</Text>
              <View className="grow flex items-center flex-row justify-around">
                <TouchableOpacity>
                  <ReplyIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex flex-row space-x-1.5 items-center">
                    <CommentHeartIcon />
                    <Text className="text-dark-med">2</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <CommentShareIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="h-16"></View>
      </ScrollView>

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
