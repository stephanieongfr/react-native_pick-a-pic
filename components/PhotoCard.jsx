import { router } from "expo-router";
import { Image, View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { setPhoto } from "../app/store/photoSlice.js";

const PhotoCard = ({ photo }) => {
  const dispatch = useDispatch();

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: photo.user.profile_image.small }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text className="font-psemibold text-sm" numberOfLines={1}>
              {photo.description}
            </Text>
            <Text className="text-xs font-pregular" numberOfLines={1}>
              {photo.user.name}
            </Text>
          </View>
        </View>
      </View>

      <Pressable
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="View photo details"
        accessibilityHint="Press to be redirected to the photo details screen"
        onPress={() => {
          dispatch(setPhoto(photo));
          router.push("/photos/[id]");
        }}
        className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
      >
        <Image
          source={{ uri: photo.urls.regular }}
          alt={photo.alt_description}
          className="w-full h-full rounded-xl mt-3"
          resizeMode="cover"
        />
      </Pressable>
    </View>
  );
};

export default PhotoCard;
