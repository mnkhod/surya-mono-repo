import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { SignInTabProp } from "../types/NavigationTypes";

export default function SignInTab({ navigation } : SignInTabProp) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    navigation.navigate("Home")
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
    <View className="bg-white px-5 gap-3 flex-1 items-center justify-center">
      <TextInput
        className="border p-2 w-full"
        onChangeText={setEmail}
        value={email}
        placeholder="Имэйл хаяг оруулах хэсэг"
      />
      <TextInput
        className="border p-2 w-full"
        onChangeText={setPassword}
        value={password}
        passwordRules=""
        secureTextEntry={true}
        placeholder="Нууц үг оруулах"
      />
      <View className="w-full">
        <Button
          onPress={handleLogin}
          title="Нэвтрэх"
          color="#841584"
        />
      </View>
    </View>
  );
}
