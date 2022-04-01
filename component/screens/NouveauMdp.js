import {Text, View, ScrollView } from "react-native";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import React, { useState } from "react";
import styles from "../StyleConn";

export default function NouveauMdp({navigation}) {
  const [code, setCode] = useState("");
  const [newPassword, setnewPassword] = useState("");
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Réinitialisez votre mot de passe </Text>

        <CustomInput placeholder="Code reçu" value={code} setValue={setCode} />
        <CustomInput
          placeholder="Nouveau mot de passe"
          value={newPassword}
          setValue={setnewPassword}
        />

        <CustomButton text="Envoyer" onPress={() => navigation.navigate("Accueil") }/>

        <CustomButton
          text="Retour à la connexion"
          onPress={() => navigation.navigate("Connexion")}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

