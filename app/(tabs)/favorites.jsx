import { router } from "expo-router";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearAllItems } from "../store/bookmarkSlice.js";
import CustomButton from "../../components/CustomButton.jsx";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const renderHeader = () => (
  <View>
    <Text className="text-lg font-psemibold mb-10">My favorite pictures</Text>
  </View>
);

const renderFooter = () => {
  const dispatch = useDispatch();

  return (
    <View className="m-10">
      <CustomButton
        title="Discard all my favorites"
        handlePress={() => dispatch(clearAllItems())}
      />
    </View>
  )
};

export default function Favorites() {
  const bookmark = useSelector((state) => state.bookmark.items);

  return (
    <SafeAreaView className="h-full">
      {!bookmark.length ? (
        <View className="h-full flex flex-col justify-center items-center px-2 pt-6">
          <Text className="text-lg mb-20">You haven't saved any photos yet</Text>
          <Text className="font-psemibold text-2xl">
            <CustomButton
              title="Find inspiration here"
              handlePress={() => router.push("/home")}
              containerStyle="bg-primary my-8 w-[60vw]"
              textStyle="text-white"
            />
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookmark}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <View className="relative mb-4 rounded-xl w-[190px] h-[160px]">
                <Image
                  source={{ uri: item.urls.regular }}
                  alt={item.alt_description}
                  className="rounded-xl w-[160px] h-[160px]"
                  resizeMode="cover"
                />
                <Pressable
                  onPress={() => dispatch(removeItem(item))}
                  className="absolute top-1 right-1"
                >
                  <FontAwesome
                    name="trash"
                    size={24}
                    color="#71717a"
                  />
                </Pressable>
              </View>
            </View>
          )}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{ flexGrow: 1, padding: 16 }}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
}