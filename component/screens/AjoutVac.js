import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import DateTimePicker from "@react-native-community/datetimepicker";
class AjoutVac extends React.Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      date: new Date(),
      compagnon: "",
    };
  }

  onChange = (selectedDate) => {
    const currentDate = selectedDate;
    this.setState({ date: currentDate });
  };

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
        <Text>Date de début : </Text>
        <DateTimePicker
          style={{ alignSelf: "center", width: 100, heigth: 50 }}
          testID="dateTimePicker"
          value={this.state.date}
          is24Hour={true}
          onChange={() => {
            this.onChange;
          }}
        />

        <Text>Date de fin : </Text>
        <DateTimePicker
          style={{ alignSelf: "center", width: 100, heigth: 50 }}
          testID="dateTimePicker"
          value={this.state.date}
          is24Hour={true}
          onChange={() => {
            this.onChange;
          }}
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
          onPress={() =>
            Alert.alert("Vacances", "Vous avez bien ajouté vos vacances")
          }
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
    borderColor: "skyblue",
    margin: 20,
    borderRadius: 20,
    textAlign: "center",
    height: 50,
  },
});
