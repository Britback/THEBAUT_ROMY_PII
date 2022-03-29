import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReinitialiserMdp from "./component/screens/ReinitialiserMdp";
import { AuthContext } from "./component/context";
import NouveauMdp from "./component/screens/NouveauMdp";
import { useMemo, useState } from "react";
import Connexion from "./component/screens/Connexion";
import CreerCompte from "./component/screens/CreerCompte";
import Accueil from "./component/screens/Accueil";
import Transport from "./component/screens/Transport";
import Logement from "./component/screens/Logement";
import Course from "./component/screens/Course";
import AjoutVac from "./component/screens/AjoutVac";

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const AccueilStack = createNativeStackNavigator();

const AccueilStackScreen = () => (
  <AccueilStack.Navigator screenOptions={{ headerShown: false }}>
    <AccueilStack.Screen name="Accueil" component={Accueil} />
    <AccueilStack.Screen name="AjoutVac" component={AjoutVac} />
    <AccueilStack.Screen name="Transport" component={Transport} />
    <AccueilStack.Screen name="Logement" component={Logement} />
    <AccueilStack.Screen name="Course" component={Course} />
    <AccueilStack.Screen name="Connexion" component={Connexion} />
  </AccueilStack.Navigator>
);

function App() {
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setUserToken("asdf");
      },
      signUp: () => {
        setUserToken("asdf");
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Stack.Navigator>
            <Stack.Screen name="Accueil" component={AccueilStackScreen} />
          </Stack.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen name="Connexion" component={Connexion} />
            <AuthStack.Screen name="CreerCompte" component={CreerCompte} />
            <AuthStack.Screen
              name="ReinitialiserMdp"
              component={ReinitialiserMdp}
            />
            <AuthStack.Screen name="NouveauMdp" component={NouveauMdp} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
