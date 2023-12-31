import { ParamListBase, RouteProp } from "@react-navigation/native";
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Introduction: undefined;
  Login: undefined;
  Search: undefined;
  Notification: undefined;
  ClassTabProp: undefined;
  SingleCourseTab: undefined;
  SingleCourse: undefined;
  ChooseTrialClass: undefined;
  ChooseClass: undefined;
  CoursePayment: undefined;

  ChooseBankModal: undefined;
  TrialClassOrderSuccessModal: undefined;
};

export type IntroductionScreenProp = {
  route: RouteProp<ParamListBase, "Introduction">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "Introduction",
    "RootStack"
  >;
};

export type SignInTabProp = {
  route: RouteProp<ParamListBase, "Login">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "Login",
    "LoginTabStack"
  >;
};
export type ChooseTrialClassProp = {
  route: RouteProp<ParamListBase, "ChooseTrialClass">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "ChooseTrialClass",
    "RootStack"
  >;
};

export type CoursePaymentProp = {
  route: RouteProp<ParamListBase, "CoursePayment">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "CoursePayment",
    "RootStack"
  >;
};

export type ChooseClassProp = {
  route: RouteProp<ParamListBase, "ChooseClass">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "ChooseClass",
    "RootStack"
  >;
};
export type HomeTabProp = {
  route: RouteProp<ParamListBase, "Home">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "Home",
    "HomeTabStack"
  >;
};

export type ChooseBankModalProp = {
  route: RouteProp<ParamListBase, "Home">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "ChooseBankModal",
    "ModalStack"
  >;
};

export type TrialClassOrderSuccessModalProp = {
  route: RouteProp<ParamListBase, "Home">;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "TrialClassOrderSuccessModal",
    "ModalStack"
  >;
};

export type SingleCourseTabProp = NativeStackScreenProps<
  RootStackParamList,
  "SingleCourseTab",
  "HomeTabStack"
>;
export type SingleCourseProp = NativeStackScreenProps<
  RootStackParamList,
  "SingleCourse",
  "RootStack"
>;
export type ClassTabProp = NativeStackScreenProps<
  RootStackParamList,
  "ClassTabProp",
  "HomeTabStack"
>;

export type SearchScreenProp = NativeStackScreenProps<
  RootStackParamList,
  "Search",
  "RootStack"
>;
export type NotifScreenProp = NativeStackScreenProps<
  RootStackParamList,
  "Notification",
  "RootStack"
>;
