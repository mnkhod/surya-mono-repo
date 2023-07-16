import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { IntroductionScreenProp } from "../types/NavigationTypes";
import IntroOneBg from "../assets/IntroOneBg.png";
import IntroTwoBg from "../assets/IntroTwoBg.png";
import IntroThreeBg from "../assets/IntroThreeBg.png";
import IntroButton from "../assets/IntroButton.png";
import { Image } from "expo-image";

export default function IntroductionScreen(
  { navigation }: IntroductionScreenProp,
) {
  const [tabState, setTabState] = useState(1);
  const [maxTabState] = useState(3);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {tabState == 1 && (
        <View className="flex flex-col px-4 py-8">
          <Image
            source={IntroOneBg}
            className="h-[310px] w-auto"
            contentFit="cover"
          />

          <View className="flex gap-y-4 grow justify-start">
            <View className="flex flex-row items-center justify-center gap-x-2">
              <View className="w-[24px] h-[8px] rounded-sm bg-primary-dark">
              </View>
              <View className="w-[8px] h-[8px] rounded-sm border border-stroke-light">
              </View>
              <View className="w-[8px] h-[8px] rounded-sm border border-stroke-light">
              </View>
            </View>

            <View className="text-left">
              <Text className="font-bold text-5xl">Хэзээ ч</Text>
              <Text className="font-bold text-5xl">Хаанаас ч</Text>
            </View>

            <Text className="text-base my-2 text-left">
              Та англи хэлтэй багштай хүссэн үедээ хүссэн цагтаа суралцах
              боломжтой
            </Text>
          </View>

          <View className="flex items-center">
            <TouchableOpacity
              onPress={() => {
                setTabState(2);
              }}
              className="w-[50px]"
            >
              <Image
                source={IntroButton}
                className="h-[50px] w-auto bg-dark"
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {tabState == 2 && (
        <View className="flex flex-col px-4 py-8">
          <Image
            source={IntroTwoBg}
            className="h-[310px] w-auto"
            contentFit="cover"
          />

          <View className="flex gap-y-4 grow justify-start">
            <View className="flex flex-row items-center justify-center gap-x-2">
              <View className="w-[8px] h-[8px] rounded-sm bg-primary-dark">
              </View>
              <View className="w-[24px] h-[8px] rounded-sm bg-primary-dark">
              </View>
              <View className="w-[8px] h-[8px] rounded-sm border border-stroke-light">
              </View>
            </View>

            <View className="text-left">
              <Text className="font-bold text-4xl">Хичээллэх цагаа өөрөө тохируул</Text>
            </View>

            <Text className="text-base my-2 text-left">
              Та англи хэлтэй багштай хүссэн үедээ хүссэн цагтаа суралцах
              боломжтой
            </Text>
          </View>

          <View className="flex items-center">
            <TouchableOpacity
              onPress={() => {
                setTabState(3);
              }}
              className="w-[50px]"
            >
              <Image
                source={IntroButton}
                className="h-[50px] w-auto bg-dark"
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {tabState == 3 && (
        <View className="flex flex-col px-4 py-8">
          <Image
            source={IntroThreeBg}
            className="h-[310px] w-auto"
            contentFit="cover"
          />

          <View className="flex gap-y-4 grow justify-start">
            <View className="flex flex-row items-center justify-center gap-x-2">
              <View className="w-[8px] h-[8px] rounded-sm bg-primary-dark">
              </View>
              <View className="w-[8px] h-[8px] rounded-sm bg-primary-dark">
              </View>
              <View className="w-[24px] h-[8px] rounded-sm bg-primary-dark">
              </View>
            </View>

            <View className="text-left">
              <Text className="font-bold text-5xl">100%</Text>
              <Text className="font-bold text-5xl">гадаад багш</Text>
            </View>

            <Text className="text-base my-2 text-left">
              Та англи хэлтэй багштай хүссэн үедээ хүссэн цагтаа суралцах
              боломжтой
            </Text>
          </View>

          <View className="flex items-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
              className="w-[50px]"
            >
              <Image
                source={IntroButton}
                className="h-[50px] w-auto bg-dark"
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
