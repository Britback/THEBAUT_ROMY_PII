import {Text, View, ScrollView } from "react-native";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import React, { useState } from "react";
import styles from "../StyleConn";

export default function ReinitialiserMdp({ navigation }) {
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
          onPress={() => navigation.navigate("NouveauMdp")}
        />

        <CustomButton
          text="Retour à la connexion"
          onPress={() => navigation.navigate("Connexion")}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}
