import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { Items } from "../Database";
import Entypo from "react-native-vector-icons/Entypo";
import Pdf from "../Pdf";
import AjoutFichier from "../AjoutFichier";

export default function Transport({ route, navigation, data }) {
  const [vacs, setVacs] = useState([]);
  const { vacID } = route.params;
  const [vac, setVac] = useState("");
  const [collab, setCollab] = useState("");
  const width = Dimensions.get("window").width;
  //const scrollX = new Animated.Value(0);

  // let position = Animated.divide(scrollX, width);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  // prend les vacs via vacID
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == vacID) {
        await setVac(Items[index]);
        return;
      }
    }
  };

  // vac scroll horizontal de fiche transp

  const renderCollab = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => suppCollab(item.id)}>
        <Text>{item.collabName}</Text>
      </TouchableOpacity>
    );
  };

  const ajoutercollab = () => {
    const newvacs = vacs.slice();
    newvacs.push({
      id: Math.floor(Math.random() * 100).toString(),
      collabName: collab,
    });
    setVacs(newvacs);
    setCollab("");
  };

  const suppCollab = (id) => {
    const newvacs = vacs.slice();
    setVacs(newvacs.filter((collab) => collab.id !== id));
  };
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

const styles = StyleSheet.create({
  vue1: {
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    //position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  vue2: {
    width: "100%",
    paddingTop: 16,
    paddingLeft: 16,
  },
  vue3: {
    padding: 20,
    marginVertical: 4,
    alignItems: "center",
  },
  vue4: {
    alignItems: "center",
    marginVertical: 14,
  },
  vue5: { flexDirection: "row", width: "80%", alignItems: "center" },
  container: {
    //position: "absolute",
    //bottom: 10,
    height: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chevron: {
    fontSize: 18,
    padding: 12,
    borderRadius: 10,
  },
  container2: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    //position: "relative",
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 8,
  },
  container1: {
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 100,
    marginRight: 10,
  },

  text: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
  text1: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 2,
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: "85%",
    maxHeight: 44,
    marginBottom: 18,
  },
  text3: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginVertical: 4,
    maxWidth: "84%",
  },
  bouton: {
    backgroundColor: "blue",
    height: "90%",
    width: "86%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  minibouton: { width: "48%", marginVertical: 14 },
});
