import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "../../../components/SearchInput.jsx";
import EmptyState from "../../../components/EmptyState.jsx";
import logo from "../../../assets/images/logo.png";
import PhotoCard from "../../../components/PhotoCard.jsx";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const KEY = process.env.EXPO_PUBLIC_API_KEY;

const Search = () => {
  const { query } = useLocalSearchParams();
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSearchedPhotos = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(
          `${BASE_URL}/search/photos?client_id=${KEY}&page=1&query=${query}`,
        );

        if (!result.ok) throw new Error("Could not find photos");

        const data = await result.json();
        setSearchedPhotos(data.results);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchedPhotos(query);
  }, [query]);

  return (
    <SafeAreaView className="h-full">
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#AA1781" />
        </View>
      ) : (
        <FlatList
          data={searchedPhotos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PhotoCard photo={item} />}
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm">Search Results</Text>
                </View>

                <View className="mt-1.5">
                  <Image
                    source={logo}
                    alt="logo of pick a pic"
                    className="w-9 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>

              <SearchInput />
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No photos Found"
              subtitle="No photos found for this search query"
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
