import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { Text, TouchableOpacity, View } from "react-native";

class AjoutFichier extends React.Component {
  pickfile = () => {
    DocumentPicker.getDocumentAsync().then((documentResult) => {
      console.log(documentResult);
    });
  };
  render() {
    return (
      <View
        style={{
          color: "blue",
          alignItems: "center",
          justifyContent: "center",
          padding: 12,
          borderRadius: 100,
          marginRight: 10,
          width: "100%",
          height: 100,
          position: "relative",
        }}
      >
        <TouchableOpacity
          onPress={() => this.pickfile()}
          style={{
            backgroundColor: "blue",
            height: "60%",
            width: "86%",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              letterSpacing: 1,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Ajouter un fichier
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AjoutFichier;
