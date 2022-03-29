import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import Logo from "../images/logo.png";
import React, { useState,useContext } from "react";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import {AuthContext} from "../context";
import styles from "../StyleCo";

const Connexion = ({ navigation }) => {
 const { signIn } = useContext(AuthContext);
  const { height } = useWindowDimensions();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Nom d'utilisateur"
          value={username}
          setValue={setusername}
        />
        <CustomInput
          placeholder="Mot de passe"
          value={password}
          setValue={setpassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Connectez vous"
          onPress={() => signIn()}
        />
        <CustomButton
          text="Mot de passe oublié ?"
          onPress={() => navigation.navigate("ReinitialiserMdp")}
          type="TERTIARY"
        />

        <CustomButton
          text="Connectez vous avec Facebook"
          // onPress={onSignInFacebook}
          bgcolor="#E7EAF4"
          fgcolor="#4765A9"
          onPress={()=> Alert.alert("Connexion", "Vous etes authentifié avec Facebook cliquez maintenant sur Connectez-vous")}
        />
        <CustomButton
          text="Connectez vous avec Google"
          onPress={()=> Alert.alert("Connexion", "Vous etes authentifié avec Facebook cliquez maintenant sur Connectez-vous")}
          bgcolor="#FAE9E4"
          fgcolor="#DD4D44"
        />
        <CustomButton
          text="Connectez vous avec Apple"
          onPress={()=> Alert.alert("Connexion", "Vous etes authentifié avec Facebook cliquez maintenant sur Connectez-vous")}
          bgcolor="#e3e3e3"
          fgcolor="#363636"
        />
        <CustomButton
          text="Vous n'avez pas de compte ? Créer en un"
          onPress={() => navigation.navigate("CreerCompte")}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default Connexion;

