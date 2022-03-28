import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function CustomButton({
  onPress,
  text,
  type = "PRIMARY",
  bgcolor,
  fgcolor,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgcolor ? { backgroundColor: bgcolor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgcolor ? { color: fgcolor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },

  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize:13,

  },

  text_SECONDARY: {
    color: "#3B71F3",
    fontSize:11,
  },
  text_TERTIARY: {
    color: "gray",
    fontSize:11,
  },
});
