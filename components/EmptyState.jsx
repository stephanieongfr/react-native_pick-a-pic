import { View, Text, Image } from 'react-native'

import empty from "../assets/images/empty.png";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-xl text-center font-psemibold mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm">
        {subtitle}
      </Text>
    </View>
  )
}

export default EmptyState;