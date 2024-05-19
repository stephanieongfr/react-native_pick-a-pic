import { Text, Pressable, StyleSheet } from "react-native";

const CustomButton = ({ title, handlePress }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
      ]}
    >
      <Text className={"text-white font-psemibold text-lg"}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "block",
    margin: "0 auto",
    borderRadius: 50,
    minHeight: 62,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AA1781",
    paddingLeft: 28,
    paddingRight: 28,
  },
});

export default CustomButton;
