import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#AA1781",
        tabBarStyle: {
          height: 58,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="home"
              size={30}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="user"
              size={30}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="heart"
              size={30}
              color={color}
            />
          )
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
  )
};