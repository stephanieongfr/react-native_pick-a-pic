import { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { usePathname, router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SearchInput() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  return (
    <View
      className="w-full h-16 px-4 rounded-2xl border-2 border-secondary focus:border-primary focus:border-4 flex flex-row items-center space-x-4"
      accessible={true}
      accessibilityLabel="Search input"
      accessibilityRole="search"
    >
      <TextInput
        value={query}
        placeholder="Search a photo"
        placeholderTextColor="#CDCDE0"
        className="text-base mt-0.5 flex-1 font-pregular"
        onChangeText={(e) => setQuery(e)}
        accessibilityLabel="Search query"
      />

      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Search button"
        accessibilityRole="button"
        onPress={() => {
          if (!query) {
            return Alert.alert("Please input a word to search a photo");
          }

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <FontAwesome name="search" size={20} />
      </TouchableOpacity>
    </View>
  );
}
