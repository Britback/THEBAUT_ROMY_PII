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
import { Items } from "../Database";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapEssai from "../MapEssai";

export default function Logement({ route, navigation }) {
  const { vacID } = route.params;
  const [vac, setVac] = useState({});
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
            <TouchableOpacity onPress={()=>{Linking.openURL("https://www.airbnb.fr/rooms/13103888?adults=2&previous_page_section_name=1000&federated_search_id=e57c5b63-1121-4e34-81d0-abe618367394")}}>
            <Text>Clique pour accéder au lien</Text>
            </TouchableOpacity>
            <Text>Nom : </Text>
            <TextInput placeholder="Logement 1 (Clique pour changer nom)" style={{color:"purple"}}/>
        
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("MapEssai")}
            style={styles.minibouton}
          >
            <View style={styles.container2}>
              <Text style={styles.text1}>MAPPPP</Text>
            </View>
          </TouchableOpacity> */}
          
          <MapEssai/>
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

const styles = StyleSheet.create({
  vue1: {
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  vue2: {
    width: "100%",
    paddingTop: 16,
    paddingLeft: 16,
  },
  vue3: {
    padding:20,
    marginVertical: 4,
    alignItems: "center",
  },
  vue4: {
    alignItems: "center",
    marginVertical: 14,
  },
  vue5: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
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
    height: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
