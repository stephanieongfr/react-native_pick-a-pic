import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";

import { addItem } from "../../store/bookmarkSlice.js";
import CustomButton from "../../../components/CustomButton.jsx";

const PhotoById = () => {
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo);

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="flex mt-14 mx-5"
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View className="w-full px-2 mb-2">
          <Text>{photo.alt_description}</Text>
          <View className="flex flex-row justify-between items-center mt-2">
            <Text className="font-psemibold">By {photo.user.name}</Text>
            <Image
              source={{ uri: photo.user.profile_image.small }}
              alt_description={`avatar of ${photo.user.name}`}
              className="w-7 h-7 rounded-full"
              resizeMode="cover"
            />
          </View>
        </View>
        <View className="w-full h-80 rounded-xl mt-3 relative justify-center items-center mb-8">
          <Image
            source={{ uri: photo.urls.regular }}
            alt={photo.alt_description}
            className="w-full h-full rounded-xl"
            resizeMode="contain"
          />
        </View>

        <CustomButton
          title="Save to my favorites"
          handlePress={() => dispatch(addItem(photo))}
        />

        <View className="w-full mt-8">
          <Text className="text-left font-psemibold text-md underline">
            More details about this photo
          </Text>
          <Text className="text-left text-md">
            Description:{" "}
            {photo.description === null ? "N/A" : photo.description}
          </Text>
          <Text className="text-left text-md">
            This photo was taken on {photo.created_at.slice(0, 10)}
          </Text>
          <Text className="text-left text-md">{photo.views} views</Text>
          <Text className="text-left text-md">{photo.likes} likes</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotoById;
