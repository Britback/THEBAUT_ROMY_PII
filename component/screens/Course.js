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
  TextInput,
  SafeAreaView,
} from "react-native";
import { Items } from "../Database";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Course({ route, navigation }) {
  const { vacID } = route.params;
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
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

  const renderCourse = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => suppCourse(item.id)}>
        <Text>{item.course}</Text>
      </TouchableOpacity>
    );
  };

  const ajouterCourses = () => {
    const newCourses = courses.slice();
    newCourses.push({
      id: Math.floor(Math.random() * 100).toString(),
      course: course,
    });
    setCourses(newCourses);
    setCourse("");
  };

  const suppCourse = (id) => {
    const newCourses = courses.slice();
    setCourses(newCourses.filter((course) => course.id !== id));
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
              <Text style={styles.text3}>Courses {vac.vacName}</Text>
        
            </View>
          <View style={styles.vue4}>
           
            <Text style={styles.text2}>{vac.collabName}</Text>
            <Text style={styles.text2}>{vac.date}</Text>
            <View style={styles.vue5}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Transport", { vacID })}
                style={styles.minibouton}
              >
                <View style={styles.container2}>
                  <Text style={styles.text1}>Transport</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Logement", { vacID })}
                style={styles.minibouton}
              >
                <View style={styles.container2}>
                  <Text style={styles.text1}>Logement</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
        <View style={styles.container}>
          <FlatList data={course} renderItem={renderCourse} />

          <TextInput
            value={course}
            style={{height:"50%"}}
            placeholder="Ex: Poisson"
            onChangeText={(text) => {
              setCourse(text);
            }}
          />
          <TouchableOpacity style={styles.bouton} onPress={ajouterCourses}>
            <Text style={styles.text}>Ajouter des courses</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  vue1: {
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  vue2: {
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingLeft: 16,
  },
  vue3: {
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  vue4: {
    
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 14,
    paddingBottom: 20,
  },
  vue5: {  flexDirection: "row",width: "80%", alignItems: "center" },
  container: {
    position: "absolute",
    bottom: 10,
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
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
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
