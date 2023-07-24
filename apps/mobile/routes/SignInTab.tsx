import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { SignInTabProp } from "../types/NavigationTypes";
import { input } from "@styles/inputs";
import { inputBtn, roundedOutlineBtn } from "@styles/buttons";

import { Image } from "expo-image";
import BiometricIcon from "../assets/icons/BiometricIcon.svg";

export default function SignInTab({ navigation }: SignInTabProp) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    navigation.navigate("Home");
    return;
    try {
      let providersResult = await axios.get(
        "https://surya-mono-repo-admin.vercel.app/api/auth/providers",
      );
      let csrfResult = await axios.get(
        "https://surya-mono-repo-admin.vercel.app/api/auth/csrf",
      );
      console.log();
      let token = csrfResult.data.csrfToken;

      // let signInResponse = await axios.post("https://surya-mono-repo-admin.vercel.app/api/auth/callback/credentials?",{
      //   email: email,
      //   password: password,
      //   redirect: false,
      //   csrfToken: token,
      //   callbackUrl: "https://surya-mono-repo-admin.vercel.app/auth/signIn",
      //   json: true,
      // })

      let sessionResult = await axios.get(
        "https://surya-mono-repo-admin.vercel.app/api/auth/session",
      );
      console.log(sessionResult.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <ScrollView className="bg-back-light-primary px-4 pt-8 flex-1">
      <View className="space-y-4">
        <View className="flex space-y-2">
          <View className="flex flex-row">
            <Text className="text-dark-high font-rubik-medium text-xs">
              Имэйл хаяг
            </Text>
            <Text className="pl-0.5 relative bottom-1 text-feedback-error">
              *
            </Text>
          </View>
          <TextInput
            className={`${input} w-full`}
            onChangeText={setEmail}
            value={email}
            placeholder="Имэйл хаяг оруулах хэсэг"
          />
        </View>

        <View className="flex space-y-3">
          <View className="flex space-y-2">
            <View className="flex flex-row">
              <Text className="text-dark-high font-rubik-medium text-xs">
                Нууц үг оруулах
              </Text>
              <Text className="pl-0.5 relative bottom-1 text-feedback-error">
                *
              </Text>
            </View>
            <TextInput
              className={`${input} w-full`}
              onChangeText={setPassword}
              value={password}
              passwordRules=""
              secureTextEntry={true}
              placeholder="Нууц үг оруулах"
            />
          </View>
          <Text className="text-light-low self-end font-rubik text-xs">
            Нууц үг сэргээх
          </Text>
        </View>

        <View className="flex flex-row justify-between w-full">
          <TouchableOpacity
            onPress={handleLogin}
            className={`${inputBtn} flex-grow`}
          >
            <Text className="text-dark-low text-base border-none font-rubik-medium">
              Нэвтрэх
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogin}
            className={`${inputBtn} ml-4 w-auto p-3.5`}
          >
            <Image source={BiometricIcon} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
