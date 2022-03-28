import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import React, { useState } from "react";

export default function ResetPassword({ navigation }) {
  const [username, setusername] = useState("");

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Réinitialisez votre mot de passe </Text>

        <CustomInput
          placeholder="Nom d'utilisateur"
          value={username}
          setValue={setusername}
        />

        <CustomButton
          text="Envoyer"
          onPress={() => navigation.navigate("NewPassword")}
        />

        <CustomButton
          text="Retour à la connexion"
          onPress={() => navigation.navigate("SignIn")}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#FDB075",
  },
});
