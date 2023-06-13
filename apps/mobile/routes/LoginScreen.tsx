import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignInTab from "./SignInTab";
import SignUpTab from "./SignUpTab";
import { View,Text, StatusBar } from "react-native";
import { Image } from 'expo-image';
import Logo from '../assets/icons/Logo.svg'
import GirlHandsRaised from '../assets/GirlHandsRaised.png'

const Tab = createMaterialTopTabNavigator();

export default function LoginScreen() {
  return (
    <>
      <StatusBar />
      <View className="bg-white h-[200px] pt-8 pb-2 flex flex-row items-center">
        <Image source={Logo} className="h-[30px] w-[50%]" contentFit="contain" />
        <Image source={GirlHandsRaised} className="w-[50%] h-[184px]" contentFit="contain" />
      </View>
      <Tab.Navigator initialRouteName="SignInTab">
        <Tab.Screen name="SignInTab" component={SignInTab} options={{ title: "Нэвтрэх"}} />
        <Tab.Screen name="SignUpTab" component={SignUpTab} options={{ title: "Бүртгүүлэх"}} />
      </Tab.Navigator>
    </>
  );
}
