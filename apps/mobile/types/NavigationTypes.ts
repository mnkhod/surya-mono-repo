import type { NativeStackScreenProps } from "@react-navigation/native-stack";

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
};

export type IntroductionScreenProp = NativeStackScreenProps<
  RootStackParamList,
  "Introduction",
  "RootStack"
>;
export type SignInTabProp = NativeStackScreenProps<
  RootStackParamList,
  "Login",
  "LoginTabStack"
>;

export type ChooseTrialClassProp = NativeStackScreenProps<
  RootStackParamList,
  "ChooseTrialClass",
  "RootStack"
>;

export type HomeTabProp = NativeStackScreenProps<
  RootStackParamList,
  "Home",
  "HomeTabStack"
>;
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
