import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import SingleCourseDummyBG from "../assets/SingleCourseDummyBG.png";
import CountryFlag from "../assets/CountryFlag.png";
import RatingStar from "../assets/RatingStar.png";
import PlayVideoButton from "../assets/PlayVideoButton.png";
import { SingleCourseTabProp } from "../types/NavigationTypes";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@helpers/axios";
import * as WebBrowser from 'expo-web-browser';

export default function SingleCourseTab({ navigation }: SingleCourseTabProp) {
  const { data, isSuccess } = useQuery({
    queryKey: ['singleClassAllData'],
    queryFn: () => fetcher.get('/homePage/getAllPeerSessions').then((res) => res.data),
  })
  
  async function handleVideo(link : string){
    await WebBrowser.openBrowserAsync(link);
  }

  return (
    <ScrollView className="bg-back-light-secondary flex flex-col gap-6 px-4">
      <View className="flex pt-6 px-4 space-y-6">
        {isSuccess && data && (
          <>
            {data.tutors.map((item : any) => (
            <View key={item.id} className="rounded-xl p-0 bg-back-light-primary">
              <View className="relative">
                <Image
                  source={item.profileImageLink}
                  className="h-[128px] w-full"
                  style={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderLeftWidth: 0.2,
                    borderRightWidth: 0.2,
                  }}
                  contentFit="cover"
                />
                <TouchableOpacity onPress={() => { handleVideo(item.videoLink) }}>
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
                      {`${item.lastName} ${item.firstName}`}
                    </Text>
                    <Image
                      source={item.nativeLanguage.flagSVGLink}
                      className="h-[16px] w-[16px] rounded-full"
                      contentFit="cover"
                    />
                  </View>
                  <View className="flex flex-row items-center space-x-1">
                    <Image
                      source={RatingStar}
                      className="h-[16px] w-[16px]"
                      contentFit="cover"
                    />
                    <Text className="text-secondary font-rubik-bold">{item.rating}</Text>
                  </View>
                </View>
                <Text className="text-dark-med">{item.shortInfo}</Text>
                <View className="flex flex-row space-x-1 pt-2">
                  <Text className="font-rubik-bold">{item.nativeLanguage.name}</Text>
                  <Text className="px-1 text-feedback-info bg-feedback-info/10 rounded-lg">
                    NATIVE
                  </Text>
                </View>
              </View>

              <View className="p-4 flex-row justify-between space-x-4">
                <TouchableOpacity
                  onPress={() => { navigation.navigate("ChooseTrialClass") }}
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
            )
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
}
