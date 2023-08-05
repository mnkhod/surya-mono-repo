import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CheckedIcon from "../svg/CheckedIcon";
import QuoteWarningIcon from "../svg/QuoteWarningIcon";
import { range } from "radash";
import CheckIcon from "../svg/CheckIcon";

export default function ChooseClassByDayTab() {
  let days = [
    "Даваа",
    "Мягмар",
    "Лхагва",
    "Пүрэв",
    "Баасан",
    "Бямба",
    "Ням",
  ];

  return (
    <View className="flex-1 bg-white p-4 space-y-4">
      <View className="flex flex-wrap flex-row gap-4">
        {days.map((item) =>
          item == "Даваа"
            ? (
              <View className="py-1 px-1.5  bg-feedback-success/10 rounded flex flex-row space-x-1.5 items-center">
                <CheckedIcon />
                <Text className="text-feedback-success">{item}</Text>
              </View>
            )
            : (
              <TouchableOpacity className="py-1 px-1.5 bg-back-light-secondary rounded">
                <Text>{item}</Text>
              </TouchableOpacity>
            )
        )}
      </View>

      <View className="flex flex-row space-x-1 items-start rounded p-2 bg-primary-light-xs">
        <QuoteWarningIcon className="relative top-0.5" />
        <Text>
          Сонгогдсон өдөр, цагт тогтмол байдлаар хичээл орох болохыг анхаарна уу
        </Text>
      </View>

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
  );
}
