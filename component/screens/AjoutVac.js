import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

class AjoutVac extends React.Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      date: "",
      compagnon: "",
    };
  }

  ajouter() {
    console.warn(this.state);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ margin: 20 }}>
        <TouchableOpacity onPress={() => navigate("Accueil")}>
          <Entypo name="chevron-left" style={styles.chevron} />
        </TouchableOpacity>
        <TextInput
          placeholder="Nom des vacances"
          onChangeText={(text) => {
            this.setState({ nom: text });
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Date des vacances"
          onChangeText={(text) => {
            this.setState({ date: text });
          }}
          style={styles.input}
          keyboardType={"number-pad"}
        />
        <TextInput
          style={styles.input}
          placeholder="Vos compagnons de voyage"
          onChangeText={(text) => {
            this.setState({ compagnon: text });
          }}
        />
        <Button
          title="Ajouter"
          onPress={() => {
            this.ajouter();
          }}
        />
      </View>
    );
  }
}

export default AjoutVac;

const styles = StyleSheet.create({
  chevron: {
    fontSize: 18,
    padding: 12,
    borderRadius: 10,
  },

  input: {
    fontSize: 14,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "blue",
    margin: 20,
    borderRadius: 20,
    textAlign: "center",
  },
});
