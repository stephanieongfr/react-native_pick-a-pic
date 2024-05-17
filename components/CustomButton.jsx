import { Text, Pressable } from "react-native";

const CustomButton = ({ title, handlePress, containerStyle, textStyle }) => {
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

export default CustomButton;