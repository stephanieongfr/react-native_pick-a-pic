import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import logo from "../assets/images/logo.png";
import CustomButton from "../components/CustomButton.jsx";

export default function App() {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full flex justify-center items-center">
          <View className="flex flex-row justify-center items-center">
            <Image
              source={logo}
              className="mb-4 mr-2 w-[40px]"
              resizeMode="contain"
            />
            <Text className="text-primary text-3xl font-psemibold">
              Pick a Pic
            </Text>
          </View>

          <Text className="text-3xl font-psemibold mb-8">
            Find Inspiration{"\n"} and{" "}
            <Text className="text-primary">Pick a Pic</Text>
          </Text>

          <CustomButton
            title="Start exploring"
            handlePress={() => router.push("/home")}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="white" style="dark" />
    </SafeAreaView>
  );
}
