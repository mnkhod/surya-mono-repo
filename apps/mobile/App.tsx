import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroductionScreen from "./routes/IntroductionScreen";
import LoginScreen from "./routes/LoginScreen";
import HomeScreen from "./routes/HomeScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchScreen from "./routes/SearchScreen";
import NotifScreen from "./routes/NotifScreen";
import SingleCourse from "./routes/SingleCourse";
import ChooseTrialClass from "./routes/ChooseTrialClass";
import ChooseClass from "./routes/ChooseClass";
import moment from "moment";
import "moment/locale/mn";
import CoursePayment from "./routes/CoursePayment";

import { store } from "./store";
import { Provider } from "react-redux";
import ChooseBankModal from "./modals/ChooseBankModal";
import TrialClassOrderSuccessModal from "./modals/TrialClassOrderSuccessModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator();
moment.locale("mn");

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
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
                {(props) => <ChooseTrialClass {...props} />}
              </Stack.Screen>

              <Stack.Screen
                name="ChooseClass"
                options={{ headerShown: false }}
              >
                {(props) => <ChooseClass {...props} />}
              </Stack.Screen>

              <Stack.Screen
                name="CoursePayment"
                options={{ headerShown: false }}
              >
                {(props) => <CoursePayment {...props} />}
              </Stack.Screen>

              <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
                <Stack.Screen
                  name="ChooseBankModal"
                  component={ChooseBankModal}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="TrialClassOrderSuccessModal"
                  component={TrialClassOrderSuccessModal}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Group>
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

