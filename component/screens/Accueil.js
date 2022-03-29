import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Items } from "../Bdd";
import { AuthContext } from "../context";

export default function Home({ navigation }) {
  const [vacs, setVacs] = useState([]);
  const { signOut } = useContext(AuthContext);
  useEffect(() => {
    const db = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return db;
  }, [navigation]);

  // recupere les vacances présentes dans le tableau d'Items du ficher Bdd
  const getDataFromDB = () => {
    let vacList = [];
    for (let index = 0; index < Items.length; index++) {
      vacList.push(Items[index]);
    }

    setVacs(vacList);
  };

  const VacZone = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Transport", { vacID: data.id })}
        style={{
          width: "40%",
          marginVertical: 14,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.container2}>
          {data.isDone ? (
            <View style={styles.termine}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", letterSpacing: 1 }}
              >
                Terminée!
              </Text>
            </View>
          ) : null}

          <Image style={{ height: 75, width: 80 }} source={data.vacImage} />
        </View>
        <Text style={styles.text1}>{data.vacName}</Text>
        <Text style={styles.text1}> {data.date}</Text>
        <Text> Avec {data.collabName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <View style={{ marginBottom: 10, padding: 16 }}>
          <Text style={styles.text3}>Esprit léger</Text>
          <TouchableOpacity
            onPress={() => signOut()}
            style={{ marginLeft: 310 }}
          >
            <Entypo
              name="log-out"
              style={{
                fontSize: 14,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text2}>Gestionnaire de vacs {"\n"} par RT</Text>
        </View>

        <View
          style={{
            pading: 16,
          }}
        >
          <View style={styles.vue3}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
              }}
            >
              <Text style={styles.text1}>Vacances</Text>
              <Text style={styles.text2}>3</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("AjoutVac")}
              style={{ width: "48%", marginVertical: 14 }}
            >
              <Text style={styles.text1}>Ajouter des vacances</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {vacs.map((data) => {
              return <VacZone data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  vue2: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingLeft: 16,
  },
  vue3: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },

  container2: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  text1: {
    fontSize: 15,
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
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginVertical: 4,
    maxWidth: "84%",
  },

  termine: {
    position: "absolute",
    width: "50%",
    height: "24%",
    backgroundColor: "yellow",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
