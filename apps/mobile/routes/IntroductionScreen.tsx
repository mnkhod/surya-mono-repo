import { useState } from "react";
import { Button, Text, View } from "react-native";
import { IntroductionScreenProp } from "../types/NavigationTypes";

export default function IntroductionScreen({ navigation } : IntroductionScreenProp) {
  const [tabState, setTabState] = useState(1);
  const [maxTabState,] = useState(3)

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {tabState == 1 && (
        <View className="flex flex-col gap-3">
          <Text className="text-xs text-center">{tabState}/{maxTabState}</Text>
          <Text className="text-3xl text-center">Хэзээ ч хаанаас ч</Text>
          <Text className="text-md my-2 text-center">
            Та англи хэлтэй багштай хүссэн үедээ хүссэн цагтаа суралцах
            боломжтой
          </Text>
          <View className="">
            <Button
              onPress={() => {
                setTabState(2);
              }}
              title=">"
              color="#841584"
            />
          </View>
        </View>
      )}

      {tabState == 2 && (
        <View className="flex flex-col gap-3">
          <Text className="text-xs text-center">{tabState}/{maxTabState}</Text>
          <Text className="text-3xl text-center">Хичээллэх цагаа өөрөө тохируул</Text>
          <Text className="text-md my-2 text-center">Та англи хэлтэй багштай хүссэн үедээ хүссэн цагтаа суралцах боломжтой</Text>
          <View className="">
            <Button
              onPress={() => {
                setTabState(3);
              }}
              title=">"
              color="#841584"
            />
          </View>
        </View>
      )}

      {tabState == 3 && (
        <View className="flex flex-col gap-3">
          <Text className="text-xs text-center">{tabState}/{maxTabState}</Text>
          <Text className="text-3xl text-center">100% гадаад багш</Text>
          <Text className="text-md my-2 text-center">Та англи хэлтэй багштай хүссэн үедээ хүссэн цагтаа суралцах боломжтой</Text>
          <View className="">
            <Button
              onPress={() => {
                navigation.navigate('Login')
              }}
              title=">"
              color="#841584"
            />
          </View>
        </View>
      )}
    </View>
  );
}
