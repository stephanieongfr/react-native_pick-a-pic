import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Platform } from "react-native";

export default function TabsLayout() {
  const tabBarHeight = Platform.OS === "ios" ? 80 : 58;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#AA1781",
        tabBarStyle: {
          height: tabBarHeight,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="photos/[id]"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="search/[query]"
        options={{
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
