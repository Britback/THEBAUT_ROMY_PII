import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Items } from "../Bdd";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapEssai from "../MapEssai";
import styles from "../StyleCorps";

export default function Logement({ route, navigation }) {
  const { vacID } = route.params; // permet de récuperer l'identifiant des vacances ou l'on a cliqué
  const [vac, setVac] = useState({});
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  // prend les vacs via vacID et récupere les infos
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == vacID) {
        await setVac(Items[index]);
        return;
      }
    }
  };

  // comprend le retour à la page précédente, affiche les informations propres aux vacances sélectionnées
  // permet l'acces aux pages transport et logement
  // renvoie vers un lien externe de location de logement
  // permet de donner/modifier le nom de ce lien afin de le retrouver plus aisément
  // affiche une map, présentant un pin principal sur notre position, ces pins sont déplacables
  // il suffit de rester appuyé dessus et de le mettre la où on le désire
  // un bouton final permet d'ajouter des liens de logement
  return (
    <View style={{ width: "100%", height: "100%", position: "relative" }}>
      <StatusBar backgroundColor="red" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.vue1}>
          <View style={styles.vue2}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-left" style={styles.chevron} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vue3}>
          <Text style={styles.text3}>Logement {vac.vacName}</Text>
        </View>
        <View style={styles.vue4}>
          <Text style={styles.text2}>
            {vac.collabName} &amp; {vac.date}
          </Text>
          <View style={styles.vue5}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Course", { vacID })}
              style={styles.minibouton}
            >
              <View style={styles.container2}>
                <Text style={styles.text1}>Courses</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Transport", { vacID })}
              style={styles.minibouton}
            >
              <View style={styles.container2}>
                <Text style={styles.text1}>Transport</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.container1}>
            <Ionicons
              name="link-outline"
              style={{
                fontSize: 24,
                color: "blue",
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.airbnb.fr/rooms/13103888?adults=2&previous_page_section_name=1000&federated_search_id=e57c5b63-1121-4e34-81d0-abe618367394"
              );
            }}
          >
            <Text>Clique pour accéder au lien</Text>
          </TouchableOpacity>
          <Text>Nom : </Text>
          <TextInput
            placeholder="Logement 1 (Clique pour changer nom)"
            style={{ color: "purple" }}
          />

          {/* <TouchableOpacity
            onPress={() => navigation.navigate("MapEssai")}
            style={styles.minibouton}
          >
            <View style={styles.container2}>
              <Text style={styles.text1}>MAPPPP</Text>
            </View>
          </TouchableOpacity> */}

          <MapEssai />
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.text}>Ajouter un logement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
