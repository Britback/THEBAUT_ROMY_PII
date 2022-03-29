import React, { useEffect, useState } from "react";
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
import { Items } from "../Bdd";
import Entypo from "react-native-vector-icons/Entypo";
import Pdf from "../Pdf";
import AjoutFichier from "../AjoutFichier";
import styles from "../StyleCorps";

export default function Transport({ route, navigation, data }) {
  const [vacs, setVacs] = useState([]);
  const { vacID } = route.params; // permet de récuperer l'identifiant des vacances ou l'on a cliqué
  const [vac, setVac] = useState("");
  const [collab, setCollab] = useState("");

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

  // affiche les courses que l'on entre dans l'input et appelle la supression de l'element lorsque l'on clique dessus

  const renderCollab = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => suppCollab(item.id)}>
        <Text>{item.collabName}</Text>
      </TouchableOpacity>
    );
  };

  //permet d'ajouter une course à la liste et de lui assigné un identifiant, puis vide le champ
  const ajoutercollab = () => {
    const newvacs = vacs.slice();
    newvacs.push({
      id: Math.floor(Math.random() * 100).toString(),
      collabName: collab,
    });
    setVacs(newvacs);
    setCollab("");
  };

  // supprime l'element choisi (en cliquant dessus voir ci-dessus)
  const suppCollab = (id) => {
    const newvacs = vacs.slice();
    setVacs(newvacs.filter((collab) => collab.id !== id));
  };

  // comprend le retour à la page précédente, affiche les informations propres aux vacances sélectionnées
  // permet l'acces aux pages transport et logement
  // affiche les nouveaux collaborateurs que l'on a entré en appelant renderCollab
  // affiche un input et un bouton appelant l'ajout d'élément
  // affiche les billets de transport que l'on a ajouté
  // permet l'ajout de billets 
  return (
    <SafeAreaView>
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
            <Text style={styles.text3}>Transport {vac.vacName}</Text>
          </View>
          <View style={styles.vue4}>
            <Text style={styles.text2}>
              {vac.collabName} &amp; {vac.date}
            </Text>
            <View style={styles.vue5}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Logement", { vacID })}
                style={styles.minibouton}
              >
                <View style={styles.container2}>
                  <Text style={styles.text1}>Logement</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Course", { vacID })}
                style={styles.minibouton}
              >
                <View style={styles.container2}>
                  <Text style={styles.text1}>Courses</Text>
                </View>
              </TouchableOpacity>
            </View>
            <FlatList data={vacs} renderItem={renderCollab} />

            <TextInput
              value={collab}
              placeholder="Nom du nouveau compagnon de voyage"
              onChangeText={(text) => setCollab(text)}
            />
            <TouchableOpacity onPress={ajoutercollab}>
              <Text>Ajouter</Text>
            </TouchableOpacity>

            <Text>BILLETS</Text>
            {vacs.map((data) => {
              return (
                <View>
                  <Image
                    source={vac.ticketsPdf}
                    key={data.id}
                    style={{ width: 100, height: 300 }}
                  />
                  <Image
                    source={vac.ticketsPdf1}
                    key={data.id}
                    style={{ width: 150, height: 300 }}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}