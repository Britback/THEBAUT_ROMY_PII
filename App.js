import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResetPassword from "./component/screens/ResetPassword";
import { AuthContext } from "./component/context";
import NewPassword from "./component/screens/NewPassword";
import { useMemo, useState } from "react";
import SignIn from "./component/screens/SignIn";
import SignUp from "./component/screens/SignUp";
import Home from "./component/screens/Home";
import Transport from "./component/screens/Transport";
import Logement from "./component/screens/Logement";
import Course from "./component/screens/Course";
import AjoutVac from "./component/screens/AjoutVac";
import MapEssai from "./component/screens/MapEssai";

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="AjoutVac" component={AjoutVac} />
    <HomeStack.Screen name="Transport" component={Transport} />
    <HomeStack.Screen name="Logement" component={Logement} />
    <HomeStack.Screen name="Course" component={Course} />
    <HomeStack.Screen name="SignIn" component={SignIn} />
    <HomeStack.Screen name="MapEssai" component={MapEssai} />
  </HomeStack.Navigator>
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
            <Stack.Screen name="Home" component={HomeStackScreen} />
          </Stack.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
            <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
            <AuthStack.Screen name="NewPassword" component={NewPassword} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
