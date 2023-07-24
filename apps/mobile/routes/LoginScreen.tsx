import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignInTab from "./SignInTab";
import SignUpTab from "./SignUpTab";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import Logo from "../assets/icons/Logo.svg";
import GirlHandsRaised from "../assets/GirlHandsRaised.png";
import { roundedOutlineBtn } from "@styles/buttons";
import FbLogo from "../assets/brand/fbLogo.png";
import GmailLogo from "../assets/brand/gmailLogo.png";

const Tab = createMaterialTopTabNavigator();

export default function LoginScreen() {
  return (
    <>
      <View className="bg-white flex-2 pb-4  flex-row items-center">
        <Image
          source={Logo}
          className="h-[30px] w-[50%]"
          contentFit="contain"
        />
        <Image
          source={GirlHandsRaised}
          className="w-[50%] h-[184px]"
          contentFit="contain"
        />
      </View>
      <Tab.Navigator initialRouteName="SignInTab">
        <Tab.Screen
          name="SignInTab"
          component={SignInTab}
          options={{ title: "Нэвтрэх" }}
        />
        <Tab.Screen
          name="SignUpTab"
          component={SignUpTab}
          options={{ title: "Бүртгүүлэх" }}
        />
      </Tab.Navigator>

      <View className="flex-2 bg-back-light-primary px-4 space-y-8">
        <View className="flex flex-row items-center gap-x-2 w-full">
          <View className="grow h-[2px] bg-light-low rounded"></View>
          <Text className="text-light-low">
            Gmail болон фейсбоокээр нэвтрэх
          </Text>
          <View className="grow h-[2px] bg-light-low rounded"></View>
        </View>

        <View className="flex flex-row justify-between space-x-4 w-full">
          <TouchableOpacity
            onPress={() => {}}
            className={`${roundedOutlineBtn} flex flex-row justify-center gap-x-[4px] grow`}
          >
            <Image source={FbLogo} className="w-6 h-6" />
            <Text className="text-dark-low text-base border-none font-rubik">
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className={`${roundedOutlineBtn} flex flex-row justify-center gap-x-[4px] grow`}
          >
            <Image source={GmailLogo} className="w-6 h-6" />
            <Text className="text-dark-low text-base border-none font-rubik">
              Gmail
            </Text>
          </TouchableOpacity>
        </View>

        <View className="space-y-1.5">
          <Text className="text-primary-light font-rubik text-xs">
            Want to become a tutor?
          </Text>
          <Text className="text-primary text-sm font-rubik-bold text-base">
            Click here
          </Text>
        </View>
      </View>
    </>
  );
}
