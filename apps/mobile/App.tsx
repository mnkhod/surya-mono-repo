import { NavigationContainer, useLinkTo, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroductionScreen from "./routes/IntroductionScreen";
import LoginScreen from "./routes/LoginScreen";
import HomeScreen from "./routes/HomeScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchScreen from "./routes/SearchScreen";
import NotifScreen from "./routes/NotifScreen";
import SingleCourse from "./routes/SingleCourse";
import ChooseTrialClass from "./routes/ChooseTrialClass";
import ExitAlertIcon from "./svg/ExitAlertIcon";
import AlertSuccessIcon from "./svg/AlertSuccessIcon";
import ChooseClass from "./routes/ChooseClass";
import moment from "moment";
import "moment/locale/mn"

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
moment.locale("mn")

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

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
      <View
        className="flex-1 py-12 bg-back-light-primary"
        onLayout={onLayoutRootView}
      >
        <StatusBar />

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Introduction" options={{ headerShown: false }}>
            {(props) => <IntroductionScreen {...props} />}
          </Stack.Screen>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={NotifScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingleCourse"
            component={SingleCourse}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChooseTrialClass"
            options={{ headerShown: false }}
          >
            {(props) => (
              <ChooseTrialClass setShowAlert={setShowAlert} {...props} />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="ChooseClass"
            options={{ headerShown: false }}
          >
            {(props) => (
              <ChooseClass {...props} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </View>

      {showAlert && (
        <View className="absolute top-0 left-0 z-0 w-full h-[100%] flex justify-center items-center">
          <TouchableOpacity
            className="bg-black absolute top-0 left-0 z-3 h-[100%] w-full opacity-50"
            onPress={() => {
              setShowAlert(false);
            }}
          >
            <View>
            </View>
          </TouchableOpacity>

          <View className="relative max-w-[324px] p-6 z-4 bg-white rounded-lg">
            <TouchableOpacity
              className="absolute top-4 right-4"
              onPress={() => {
                setShowAlert(false);
              }}
            >
              <ExitAlertIcon />
            </TouchableOpacity>
            <View className="flex items-center space-y-4">
              <AlertSuccessIcon />
              <Text className="font-rubik-bold text-lg">Амжилттай</Text>
              <Text className="text-center">
                Та туршилтын хичээлийг амжилттай захиаллаа
              </Text>
              <Text>Үлдэгдэл: 1 удаагийн эрх байна</Text>
              <TouchableOpacity
                className="bg-primary w-full py-2 rounded"
                onPress={() => { setShowAlert(false); }}
              >
                <Text className="text-white font-rubik-bold text-center">
                  Ойлголоо
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </NavigationContainer>
  );
}
