import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { range } from "radash";
import CheckIcon from "../svg/CheckIcon";
import CalendarPicker from "react-native-calendar-picker";
import ChevronLeftIcon from "../svg/ChevronLeftIcon";
import ChevronRightIcon from "../svg/ChevronRightIcon";

export default function ChooseClassByDateTab() {
  let days = [ "Ням", "Дав", "Мя", "Лх", "Пү", "Ба", "Бя" ];
  let months = ['1-р сар /', '2-р сар /', '3-р сар /', '4-р сар /', '5-р сар /', '6-р сар /', '7-р сар /', '8-р сар /', '9-р сар /', '10-р сар /', '11-р сар /', '12-р сар /']


  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4 space-y-4">
        <CalendarPicker
          previousComponent={<ChevronLeftIcon />}
          months={months}
          selectMonthTitle={""}
          selectYearTitle={"Он сонгох"}
          weekdays={days}
          nextComponent={<ChevronRightIcon />}
          onDateChange={() => {}}
        />
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
    </ScrollView>
  );
}
