import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Introduction: undefined;
  Login: undefined;
};

export type IntroductionScreenProp = NativeStackScreenProps<RootStackParamList, 'Introduction', 'RootStack'>;
export type SignInTabProp = NativeStackScreenProps<RootStackParamList, 'Login', 'LoginTabStack'>;
