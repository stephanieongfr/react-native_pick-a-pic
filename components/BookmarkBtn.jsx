import { Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";


const BookmarkButton = ({ title, handlePress, containerStyle, textStyle }) => {
  const bookmark = useSelector((state) => state.bookmark.items);
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={handlePress}
      className={`rounded-full min-h-[62px] flex justify-center items-center ${containerStyle}`}
    >
      <Text className={`${textStyle} font-psemibold text-lg`}>
        {title}
      </Text>
    </Pressable>
  )
}

export default BookmarkButton;