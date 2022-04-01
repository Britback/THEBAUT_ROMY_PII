import React from "react";
import * as DocumentPicker from "expo-document-picker";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";

class AjoutFichier extends React.Component {
  pickfile = () => {
    DocumentPicker.getDocumentAsync().then((documentResult) => {
      console.log(documentResult);
    });
  };
  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Ajouter un billet :
      //     <input type="file" ref={this.fileInput} />
      //   </label>
      //   <br />
      //   <button type="submit" style={{backgroundColor: "blue",color:"white",
      //    height: "90%",
      //    width: "80%",
      //    borderRadius: 20,
      //    justifyContent: "center",
      //    alignItems: "center",}}>Ajouter</button>
      // </form>
      <TouchableOpacity onPress={() => this.pickfile()}>
        <Text>bouton ajout fichier</Text>
      </TouchableOpacity>
    );
  }
}

export default AjoutFichier;
