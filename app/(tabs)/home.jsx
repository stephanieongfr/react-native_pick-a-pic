import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  View,
  Text,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "../../components/SearchInput.jsx";
import EmptyState from "../../components/EmptyState.jsx";
import logo from "../../assets/images/logo.png";
import PhotoCard from "../../components/PhotoCard.jsx";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const KEY = process.env.EXPO_PUBLIC_API_KEY;

export default function Home() {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getRandomPhotos = async () => {
    setIsLoading(true);
    try {
      const result = await fetch(
        `${BASE_URL}/photos/random?client_id=${KEY}&count=8`,
      );

      if (!result.ok) throw new Error("Could not find random photos");

      const data = await result.json();
      setRandomPhotos(data);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomPhotos();
  }, []);

  const refetch = () => getRandomPhotos();

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="h-full">
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#AA1781" />
        </View>
      ) : (
        <FlatList
          data={randomPhotos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PhotoCard photo={item} />}
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-center flex-row mb-6">
                <Text className="font-pmedium text-md">Ready to explore?</Text>

                <Image
                  source={logo}
                  alt="logo of pick a pic"
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>

              <SearchInput />

              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-lg font-pregular">You may like...</Text>
              </View>
            </View>
          )}
          ListEmptyComponent={() => <EmptyState />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
}
