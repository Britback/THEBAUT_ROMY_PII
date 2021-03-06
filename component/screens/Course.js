import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Items } from "../Bdd";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "../StyleCorps";

export default function Course({ route, navigation }) {
  const { vacID } = route.params; // permet de récuperer l'identifiant des vacances ou l'on a cliqué
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [vac, setVac] = useState({});
  useEffect(() => {
    const db = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return db;
  }, [navigation]);

  // prend les vacs correspondantes via vacID et récupere les infos
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == vacID) {
        await setVac(Items[index]);
        return;
      }
    }
  };

  // affiche les courses que l'on entre dans l'input et appelle la supression de l'element lorsque l'on clique dessus
  const renderCourse = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => suppCourse(item.id)}>
        <Text> {item.course} </Text>
      </TouchableOpacity>
    );
  };

  // permet d'ajouter une course à la liste et de lui assigné un identifiant, puis vide le champ
  const ajouterCourse = () => {
    const newCourses = courses.slice();
    newCourses.push({
      id: Math.floor(Math.random() * 100).toString(),
      course: course,
    });
    setCourses(newCourses);
    setCourse("");
  };

  // supprime l'element choisi (en cliquant dessus voir ci-dessus)
  const suppCourse = (id) => {
    const newCourses = courses.slice();
    setCourses(newCourses.filter((course) => course.id !== id));
  };

  // comprend le retour à la page précédente, affiche les informations propres aux vacances sélectionnées
  // permet l'acces aux pages transport et logement
  // affiche une liste des éléments entrés en appelant renderCourse
  // affiche un input et un bouton appelant l'ajout d'élément
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
            <Text style={styles.text3}>Courses {vac.vacName}</Text>
          </View>
          <View style={styles.vue4}>
            <Text style={styles.text2}>
              {vac.collabName} &amp; {vac.date}
            </Text>
            <View style={styles.vue5}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Transport", { vacID })}
                style={styles.minibouton}
              >
                <Text style={{ color: "white" }}>Transport</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Logement", { vacID })}
                style={styles.minibouton}
              >
                <Text style={{ color: "white" }}>Logement</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View
              style={{
                height: 160,
                marginTop: 90,
                width: 2000,
                marginBottom: 20,
                alignItems: "center",
              }}
            >
              <FlatList
                data={courses}
                renderItem={renderCourse}
                style={{ backgroundColor: "lightblue", borderRadius: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <TextInput
                value={course}
                style={{
                  borderWidth: 2,
                  borderColor: "skyblue",
                  borderRadius: 5,
                  width: 200,
                  height: 50,
                  textAlign: "center",
                }}
                placeholder="Ex: Poisson"
                onChangeText={(text) => setCourse(text)}
              />
              <Entypo
                onPress={ajouterCourse}
                name="plus"
                style={{
                  fontSize: 30,
                  borderRadius: 8,
                  alignSelf: "center",
                  color: "blue",
                }}
              />
            </View>
            <Text style={styles.text2}>
              Appuyez sur l'élément pour le supprimer
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
