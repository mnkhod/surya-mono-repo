import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CoursePaymentProp } from "../types/NavigationTypes";
import Header from "../components/Header";
import QuoteWarningIcon from "../svg/QuoteWarningIcon";
import MinusIcon from "../svg/MinusIcon";
import PlusIcon from "../svg/PlusIcon";
import BankIcon from "../svg/BankIcon";

import Qpay from "../assets/Qpay.png";
import SocialPay from "../assets/SocialPay.png";
import Monpay from "../assets/Monpay.png";
import { Image } from "expo-image";

export default function CoursePayment({ navigation }: CoursePaymentProp) {
  return (
    <View className="flex-1 bg-white">
      <View className="px-4 space-y-4">
        <Header title={"Төлбөр төлөх"} nav={navigation} />

        <View className="">
          <View className="mt-2 mb-4 rounded-2xl border border-stroke-light flex p-4 space-y-4">
            <View className="flex flex-row justify-between">
              <Text className="font-rubik text-dark-med">Хичээлийн төрөл</Text>
              <Text className="font-rubik-bold">Ганцаарчилсан</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="font-rubik text-dark-med">
                Нийт хичээлийн тоо
              </Text>
              <Text className="font-rubik-bold">12</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="font-rubik text-dark-med">
                Нэг хичээлийн төлбөр
              </Text>
              <Text className="font-rubik-bold">22’900 ₮</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="font-rubik text-dark-med">Хямдрал</Text>
              <Text className="font-rubik-bold">10 %</Text>
            </View>
            <View className="h-[1px] bg-stroke-light"></View>
            <View className="flex flex-row justify-between">
              <Text className="font-rubik text-dark-med text-lg text-secondary-light">
                Нийт төлөх
              </Text>
              <Text className="font-rubik-bold text-lg text-secondary">
                244’800 ₮
              </Text>
            </View>
          </View>
        </View>

        <View className="">
          <Text className="py-3 font-rubik-bold text-center text-xl">
            Хичээлийн оролтын тоо оруулах
          </Text>
          <View className="space-y-4">
            <View className="flex flex-row space-x-4">
              <TouchableOpacity className="w-[56px] h-[56px] flex justify-center items-center bg-primary-light-sm rounded-2xl">
                <MinusIcon />
              </TouchableOpacity>
              <View className="grow border border-stroke-light rounded rounded-2xl flex justify-center items-center">
                <Text className="font-rubik-bold text-base">
                  12 удаа
                </Text>
              </View>
              <TouchableOpacity className="w-[56px] h-[56px] flex justify-center items-center bg-primary rounded-2xl">
                <PlusIcon />
              </TouchableOpacity>
            </View>

            <View className="flex flex-row space-x-1 items-start rounded p-2 bg-primary-light-xs rounded-lg">
              <QuoteWarningIcon className="relative top-0.5" />
              <Text className="w-9/12">
                Хичээлийн оролтын тоо нэмэгдсэнээр хямдрал авах боломжтой
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text className="py-3 font-rubik-bold text-xl">
            Төлбөрийн хэрэгсэл
          </Text>
          <View className="flex flex-row justify-between">
            <TouchableOpacity className="min-w-[85px] flex justify-center border border-stroke-light rounded-lg flex items-center space-y-1" onPress={() => { navigation.navigate("ChooseBankModal")}}>
              <BankIcon />
              <Text className="font-rubik-bold">Банкаар</Text>
            </TouchableOpacity>
            <TouchableOpacity className="min-w-[85px] flex justify-center border border-stroke-light rounded-lg flex items-center space-y-1">
              <Image
                source={SocialPay}
                className="h-[27px] w-[27px]"
                contentFit="contain"
              />
              <Text className="font-rubik-bold">Social pay</Text>
            </TouchableOpacity>
            <TouchableOpacity className="min-w-[85px] flex justify-center border border-stroke-light rounded-lg flex items-center space-y-1">
              <Image
                source={Monpay}
                className="h-[32px] w-[32px]"
                contentFit="contain"
              />
              <Text className="font-rubik-bold">Monpay</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-1 min-w-[85px] flex justify-center border border-stroke-light rounded-lg flex items-center space-y-1">
              <Image
                source={Qpay}
                className="h-[42px] w-[42px]"
                contentFit="contain"
              />
              <Text className="font-rubik-bold">Qpay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
