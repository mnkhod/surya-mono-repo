import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroductionScreen from "./routes/IntroductionScreen";
import LoginScreen from "./routes/LoginScreen";
import HomeScreen from "./routes/HomeScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik": require("./assets/font/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/font/Rubik-Medium.ttf"),
    "Rubik-Bold": require("./assets/font/Rubik-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View className="flex-1" onLayout={onLayoutRootView}>
        <StatusBar />

        <Stack.Navigator initialRouteName="Introduction">
          <Stack.Screen
            name="Introduction"
            component={IntroductionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
