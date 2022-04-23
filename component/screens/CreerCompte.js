import { Text, View, ScrollView } from "react-native";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context";
import styles from "../StyleConn";

export default function CreerCompte({ navigation }) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  const { signUp } = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Créer un compte </Text>

        <CustomInput
          placeholder="Nom d'utilisateur"
          value={username}
          setValue={setusername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setemail} />
        <CustomInput
          placeholder="Mot de Passe"
          value={password}
          setValue={setpassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirmer le Mot de Passe"
          value={passwordRepeat}
          setValue={setpasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Créer" onPress={() => signUp()} />

        <Text style={styles.text}>
          En créant un compte vous confimez que vous acceptez notre{" "}
          <Text
            style={styles.link}
            onPress={() => {
              console.warn("Lien vers la politique de confidentialité");
            }}
          >
            politique de confientialité
          </Text>{" "}
          et nos{" "}
          <Text
            style={styles.link}
            onPress={() => {
              console.warn("Lien vers nos conditions d'usages");
            }}
          >
            conditions d'usages
          </Text>
        </Text>

        <CustomButton
          text="Vous avez déjà un compte ? Connectez-vous ici"
          onPress={() => navigation.navigate("Connexion")}
          type="TERTIARY"
        />
        <CustomButton
          text="Connectez-vous avec Facebook"
          onPress={() => {
            console.warn("Connectez vs avec Fb");
          }}
          bgcolor="#E7EAF4"
          fgcolor="#4765A9"
        />
        <CustomButton
          text="Connectez-vous avec Google"
          onPress={() => {
            console.warn("Connectez vs avec Google");
          }}
          bgcolor="#FAE9E4"
          fgcolor="#DD4D44"
        />
        <CustomButton
          text="Connectez-vous avec Apple"
          onPress={() => {
            console.warn("Connectez vs avec Apple");
          }}
          bgcolor="#e3e3e3"
          fgcolor="#363636"
        />
      </View>
    </ScrollView>
  );
}
